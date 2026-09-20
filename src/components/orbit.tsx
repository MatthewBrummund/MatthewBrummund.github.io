'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * Wireframe globe with a 3U CubeSat in an inclined orbit, drawn on a 2D canvas.
 * Drag to rotate; on release it coasts back to a slow idle spin.
 * Honors prefers-reduced-motion (static until dragged). No dependencies.
 */

type Vec3 = [number, number, number]

const LAT_STEP = 15 // degrees between latitude rings
const LON_STEP = 15 // degrees between meridians
const SEGMENTS = 64 // line segments per ring
const ORBIT_RADIUS = 1.45 // in globe radii
const ORBIT_INCLINATION = (52 * Math.PI) / 180
const ORBIT_PERIOD_S = 22
const IDLE_SPIN = 0.15 // rad/s
const MAX_PITCH = 1.2
const CAMERA_DISTANCE = 8 // in globe radii; larger = flatter perspective
const ALPHA_BUCKETS = 8

// 3U CubeSat, long axis pointing at the globe (nadir), solar wings out the sides.
const SAT = { long: 0.15, short: 0.05, wingStart: 0.07, wingEnd: 0.34, wingHalfHeight: 0.1 }

function ring(fn: (t: number) => Vec3): Vec3[] {
  return Array.from({ length: SEGMENTS + 1 }, (_, i) => fn((i / SEGMENTS) * Math.PI * 2))
}

function buildGlobe(): Vec3[][] {
  const rings: Vec3[][] = []
  for (let lat = -90 + LAT_STEP; lat < 90; lat += LAT_STEP) {
    const phi = (lat * Math.PI) / 180
    const r = Math.cos(phi)
    const y = Math.sin(phi)
    rings.push(ring((t) => [r * Math.cos(t), y, r * Math.sin(t)]))
  }
  for (let lon = 0; lon < 180; lon += LON_STEP) {
    const th = (lon * Math.PI) / 180
    rings.push(ring((t) => [Math.cos(t) * Math.cos(th), Math.sin(t), Math.cos(t) * Math.sin(th)]))
  }
  return rings
}

function orbitPoint(a: number): Vec3 {
  const x = Math.cos(a) * ORBIT_RADIUS
  const z = Math.sin(a) * ORBIT_RADIUS
  return [x, -z * Math.sin(ORBIT_INCLINATION), z * Math.cos(ORBIT_INCLINATION)]
}

function rotate([x, y, z]: Vec3, yaw: number, pitch: number): Vec3 {
  const cy = Math.cos(yaw)
  const sy = Math.sin(yaw)
  const x1 = x * cy + z * sy
  const z1 = -x * sy + z * cy
  const cp = Math.cos(pitch)
  const sp = Math.sin(pitch)
  return [x1, y * cp - z1 * sp, y * sp + z1 * cp]
}

const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const scale = (a: Vec3, s: number): Vec3 => [a[0] * s, a[1] * s, a[2] * s]
const add = (...vs: Vec3[]): Vec3 => vs.reduce((acc, v) => [acc[0] + v[0], acc[1] + v[1], acc[2] + v[2]], [0, 0, 0])
const cross = (a: Vec3, b: Vec3): Vec3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
const normalize = (a: Vec3): Vec3 => scale(a, 1 / Math.hypot(a[0], a[1], a[2]))
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

export function Orbit({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current
    const context = canvasEl?.getContext('2d')
    if (!canvasEl || !context) return
    // Rebind as non-null consts: narrowing doesn't reach the hoisted function declarations below.
    const canvas: HTMLCanvasElement = canvasEl
    const ctx: CanvasRenderingContext2D = context

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lineColor = getComputedStyle(canvas).color
    const bgColor = getComputedStyle(document.body).backgroundColor

    const globe = buildGlobe()
    const orbit = ring(orbitPoint)
    // Projected screen coordinates, reused every frame: [x, y, z] triples per ring.
    const globeBuf = globe.map(() => new Float32Array((SEGMENTS + 1) * 3))
    const orbitBuf = new Float32Array((SEGMENTS + 1) * 3)

    let size = 0
    let yaw = 0.7
    let pitch = 0.4
    let spinYaw = IDLE_SPIN
    let spinPitch = 0
    let orbitAngle = 0.8
    let dragging = false
    let lastX = 0
    let lastY = 0
    let lastMoveT = 0

    function project(v: Vec3, cx: number, cy: number, r: number): Vec3 {
      const s = CAMERA_DISTANCE / (CAMERA_DISTANCE - v[2])
      return [cx + v[0] * s * r, cy - v[1] * s * r, v[2]]
    }

    function projectRing(points: Vec3[], out: Float32Array, cx: number, cy: number, r: number) {
      for (let i = 0; i < points.length; i++) {
        const [x, y, z] = project(rotate(points[i], yaw, pitch), cx, cy, r)
        out[i * 3] = x
        out[i * 3 + 1] = y
        out[i * 3 + 2] = z
      }
    }

    // Stroke ring segments in a handful of depth buckets so back lines fade out.
    function strokeRings(c: CanvasRenderingContext2D, rings: Float32Array[], zMax: number, aMin: number, aMax: number) {
      for (let b = 0; b < ALPHA_BUCKETS; b++) {
        c.globalAlpha = aMin + ((aMax - aMin) * b) / (ALPHA_BUCKETS - 1)
        c.beginPath()
        let any = false
        for (const r of rings) {
          for (let i = 0; i < SEGMENTS; i++) {
            const z = (r[i * 3 + 2] + r[i * 3 + 5]) / 2
            const bucket = clamp(Math.floor(((z / zMax + 1) / 2) * ALPHA_BUCKETS), 0, ALPHA_BUCKETS - 1)
            if (bucket !== b) continue
            c.moveTo(r[i * 3], r[i * 3 + 1])
            c.lineTo(r[i * 3 + 3], r[i * 3 + 4])
            any = true
          }
        }
        if (any) c.stroke()
      }
    }

    function drawSatellite(c: CanvasRenderingContext2D, alpha: number, cx: number, cy: number, r: number) {
      const p = orbitPoint(orbitAngle)
      const n = normalize(p) // radial (nadir axis)
      const t = normalize(sub(orbitPoint(orbitAngle + 0.01), p)) // along-track
      const b = cross(t, n) // cross-track: solar wings go this way

      const corner = (sn: number, st: number, sb: number): Vec3 =>
        add(p, scale(n, sn * SAT.long), scale(t, st * SAT.short), scale(b, sb * SAT.short))
      const body: Vec3[][] = [
        [corner(1, 1, 1), corner(1, 1, -1), corner(1, -1, -1), corner(1, -1, 1)],
        [corner(-1, 1, 1), corner(-1, 1, -1), corner(-1, -1, -1), corner(-1, -1, 1)],
        [corner(1, 1, 1), corner(-1, 1, 1), corner(-1, 1, -1), corner(1, 1, -1)],
        [corner(1, -1, 1), corner(-1, -1, 1), corner(-1, -1, -1), corner(1, -1, -1)],
        [corner(1, 1, 1), corner(-1, 1, 1), corner(-1, -1, 1), corner(1, -1, 1)],
        [corner(1, 1, -1), corner(-1, 1, -1), corner(-1, -1, -1), corner(1, -1, -1)],
      ]
      const wing = (side: number): Vec3[] => [
        add(p, scale(b, side * SAT.wingStart), scale(n, SAT.wingHalfHeight)),
        add(p, scale(b, side * SAT.wingEnd), scale(n, SAT.wingHalfHeight)),
        add(p, scale(b, side * SAT.wingEnd), scale(n, -SAT.wingHalfHeight)),
        add(p, scale(b, side * SAT.wingStart), scale(n, -SAT.wingHalfHeight)),
      ]

      const quads = [
        ...body.map((q) => ({ q, wing: false })),
        { q: wing(1), wing: true },
        { q: wing(-1), wing: true },
      ].map(({ q, wing }) => {
        const pts = q.map((v) => project(rotate(v, yaw, pitch), cx, cy, r))
        return { pts, wing, depth: pts.reduce((s, v) => s + v[2], 0) / pts.length }
      })
      quads.sort((a, b2) => a.depth - b2.depth) // painter's algorithm: far to near

      for (const { pts, wing } of quads) {
        c.beginPath()
        pts.forEach(([x, y], i) => (i === 0 ? c.moveTo(x, y) : c.lineTo(x, y)))
        c.closePath()
        c.globalAlpha = alpha
        c.fillStyle = bgColor
        c.fill()
        if (wing) {
          c.globalAlpha = alpha * 0.18
          c.fillStyle = lineColor
          c.fill()
          c.globalAlpha = alpha
          // Cell divider across the middle of the wing.
          c.moveTo((pts[0][0] + pts[3][0]) / 2, (pts[0][1] + pts[3][1]) / 2)
          c.lineTo((pts[1][0] + pts[2][0]) / 2, (pts[1][1] + pts[2][1]) / 2)
        }
        c.stroke()
      }
    }

    function draw() {
      if (!size) return
      const cx = size / 2
      const cy = size / 2
      const r = size * 0.25
      ctx.clearRect(0, 0, size, size)
      ctx.lineWidth = 1
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.strokeStyle = lineColor

      const satRot = rotate(orbitPoint(orbitAngle), yaw, pitch)
      const satBehindGlobe = satRot[2] < 0 && Math.hypot(satRot[0], satRot[1]) < 1

      projectRing(orbit, orbitBuf, cx, cy, r)
      strokeRings(ctx, [orbitBuf], ORBIT_RADIUS, 0.15, 0.7)
      if (satBehindGlobe) drawSatellite(ctx, 0.25, cx, cy, r)

      globe.forEach((points, i) => projectRing(points, globeBuf[i], cx, cy, r))
      strokeRings(ctx, globeBuf, 1, 0.08, 0.5)

      // Limb: the sphere's silhouette under perspective.
      ctx.globalAlpha = 0.85
      ctx.beginPath()
      ctx.arc(cx, cy, (r * CAMERA_DISTANCE) / Math.sqrt(CAMERA_DISTANCE ** 2 - 1), 0, Math.PI * 2)
      ctx.stroke()

      if (!satBehindGlobe) drawSatellite(ctx, 1, cx, cy, r)
      ctx.globalAlpha = 1
    }

    let raf = 0
    let last = performance.now()
    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!dragging) {
        const k = 1 - Math.exp(-dt / 1.5) // ease released spin back to idle
        spinYaw += (IDLE_SPIN - spinYaw) * k
        spinPitch += (0 - spinPitch) * k
        yaw += spinYaw * dt
        pitch = clamp(pitch + spinPitch * dt, -MAX_PITCH, MAX_PITCH)
      }
      orbitAngle += (dt / ORBIT_PERIOD_S) * Math.PI * 2
      draw()
      raf = requestAnimationFrame(frame)
    }

    function onPointerDown(e: PointerEvent) {
      dragging = true
      canvas.setPointerCapture(e.pointerId)
      lastX = e.clientX
      lastY = e.clientY
      lastMoveT = performance.now()
      spinYaw = 0
      spinPitch = 0
    }
    function onPointerMove(e: PointerEvent) {
      if (!dragging) return
      const now = performance.now()
      const dt = Math.max(now - lastMoveT, 1) / 1000
      const dYaw = (e.clientX - lastX) * 0.006
      const dPitch = (e.clientY - lastY) * 0.006
      yaw += dYaw
      pitch = clamp(pitch + dPitch, -MAX_PITCH, MAX_PITCH)
      spinYaw = clamp(dYaw / dt, -5, 5)
      spinPitch = clamp(dPitch / dt, -5, 5)
      lastX = e.clientX
      lastY = e.clientY
      lastMoveT = now
      if (reduceMotion) draw()
    }
    function onPointerUp() {
      dragging = false
      if (reduceMotion) {
        spinYaw = 0
        spinPitch = 0
      }
    }

    const resize = new ResizeObserver(([entry]) => {
      const dpr = window.devicePixelRatio || 1
      size = entry.contentRect.width
      canvas.width = Math.round(size * dpr)
      canvas.height = Math.round(size * dpr)
      canvas.style.height = `${size}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    })
    resize.observe(canvas)

    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointercancel', onPointerUp)
    if (!reduceMotion) raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      resize.disconnect()
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointercancel', onPointerUp)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Wireframe globe with a small CubeSat in orbit. Drag to rotate."
      className={cn('w-full cursor-grab touch-pan-y text-primary select-none active:cursor-grabbing', className)}
    />
  )
}
