# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal resume site for Matthew Brummund at https://www.matthewbrummund.com, hosted on GitHub Pages. Next.js 16 (App Router) statically exported, Tailwind CSS v4, shadcn/ui (new-york style, neutral base, lucide icons), TypeScript. Three routes: `/` (one-line landing with an interactive wireframe-globe canvas), `/resume` (intro + the resume rendered as typographic sections, print-friendly), and `/contact` (links + a Formspree form).

Tone is deliberate: clean, concise, document-like. No cards, badges, stat tiles, or marketing copy. Content sticks to the resume; the only prose not in the PDF is `profile.bio` and the landing `profile.tagline`/`profile.subline`.

## Commands

```bash
npm install
npm run dev          # dev server at http://localhost:3000
npm run lint         # eslint .: NOT run by `next build` on Next 16, so run it explicitly (CI does)
npm run build        # static export to ./out (also type-checks)
npm run preview      # npx serve out: `next start` does not work with output: 'export'
npx shadcn@latest add <component>   # add a shadcn/ui component into src/components/ui/
```

There is no test suite. Verification is lint + build + looking at the pages (see below).

## Content flow

`src/content/resume.ts` is the source of truth for `/resume` (and the landing tagline): `profile`, `experience`, `projects`, `education`, `skills`. It is transcribed from the resume PDF; when the resume changes, update this file **and** replace `public/Matthew_Brummund_Resume.pdf`. The copy of the resume Matthew maintains lives one directory above this repo (`../Matthew_Brummund_Resume.pdf`); `pdftotext -layout` extracts it cleanly. Don't paraphrase bullets: they are meant to match the PDF verbatim.

`src/content/site.ts` holds `siteUrl`, `nav`, and the Formspree endpoint (`https://formspree.io/f/movkvkpb`, tied to Matthew's account).

## Architecture

- `src/app/layout.tsx`: loads Inter via `next/font/google` (exposed as `--font-inter`), sets site-wide `metadata`, and renders `<SiteHeader/>` + `<main>` + `<SiteFooter/>`. Pages don't wrap themselves.
- `src/app/page.tsx`: landing: tagline + buttons on the left, `<Orbit/>` on the right; vertically centered via `my-auto` inside the flex-column `<main>`.
- `src/components/orbit.tsx`: `'use client'` canvas: wireframe globe + 3U CubeSat in an inclined orbit, all math inline (no deps). Drag rotates (pointer events, `touch-pan-y` so vertical page scroll still works on phones); idle spin eases back after release; `prefers-reduced-motion` disables the animation loop and only redraws on drag. Line color comes from the canvas's CSS `color` (`text-primary`).
- `src/app/resume/page.tsx`: composes `<Intro/>` and one `<Section>` per resume block, mapping entries to `<Entry/>`. Section order (Experience → Projects → Education → Skills) is set here. Uses a wider `max-w-3xl` column; `Entry` puts dates in a 10rem left gutter at `sm+`.
- `src/app/contact/page.tsx`: server page; the form itself is `src/components/contact-form.tsx`.
- `src/components/container.tsx`: the shared 44rem reading column used by header, footer, and every page.
- `src/components/resume/{section,entry}.tsx`: presentational; `Entry` takes the `Entry` type from `resume.ts` directly.
- `src/components/ui/`: shadcn-generated (`button`, `input`, `textarea`); regenerate via the CLI rather than hand-editing.
- Path alias `@/*` → `src/*`.

## Styling

- Tailwind v4: no `tailwind.config.js`. Theme lives in `src/app/globals.css` via `@theme inline`; shadcn color tokens are defined on `:root` only: the site is **light-only** by design (no `.dark` block, `color-scheme: light`).
- `--primary` is the single accent (navy) used for links, buttons, section labels, and the globe. Prefer changing tokens over adding per-element colors.
- Print: `SiteHeader`, `SiteFooter`, and the download button are `print:hidden`; `@media print` in `globals.css` flattens colors so `/resume` prints as a plain document.
- Static export constraints: no API routes, server actions, middleware, or `next/image` optimization (`images.unoptimized`). Each route emits `out/<route>/index.html` (`trailingSlash: true`).

## Deployment

`.github/workflows/nextjs.yml`: the `build` job (Node 22, `npm ci`, lint, build) runs on pushes to `main`, `dev`, `prod` and PRs; the `deploy` job publishes `./out` to GitHub Pages **only on push to `prod`**. To ship: merge `main` → `prod`, push. The custom domain is set in the repo's Pages settings (no `CNAME` file).

## Version pins worth knowing

- `typescript` is pinned to `^5`: typescript-eslint (via `eslint-config-next`) rejects TypeScript 7.
- `eslint` is pinned to `^9`: the `eslint-plugin-react` bundled in `eslint-config-next@16` breaks on ESLint 10 (`getFilename is not a function`) despite its `>=9` peer range.
- `eslint.config.mjs` imports `eslint-config-next/core-web-vitals` and `/typescript` directly as flat-config arrays: no `FlatCompat`.

## Checking the pages

Build, then `npm run preview` and screenshot with `puppeteer-core` (pointing at `/usr/bin/google-chrome`) at 1280px and 400px. For the globe, `page.mouse` drags and `page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}])` cover the interaction paths; compare `canvas.toDataURL()` before/after. Check `document.documentElement.scrollWidth` equals the viewport width: long unbreakable strings (URLs) are the usual culprit. Note that `google-chrome --headless --window-size=400,…` enforces a minimum window width and crops the screenshot, so use a real viewport emulation to test narrow widths.
