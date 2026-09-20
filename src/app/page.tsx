import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'
import { Orbit } from '@/components/orbit'
import { profile } from '@/content/resume'

export default function Home() {
  return (
    <Container className="my-auto max-w-5xl py-14 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">{profile.tagline}</h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted-foreground">{profile.subline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/resume">
                Resume
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <Orbit />
          <p className="mt-1 text-center text-xs text-muted-foreground select-none">Drag to rotate</p>
        </div>
      </div>
    </Container>
  )
}
