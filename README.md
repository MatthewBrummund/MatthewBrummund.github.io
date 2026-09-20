# matthewbrummund.com

Personal site for Matthew Brummund: a landing page, a web rendering of my resume with a PDF download, and a contact form.

## Stack

Next.js (App Router, static export) · TypeScript · Tailwind CSS v4 · shadcn/ui · deployed to GitHub Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static export to ./out
npm run preview   # serve ./out locally
```

## Updating content

- `src/content/resume.ts`: the landing tagline and everything on `/resume` (bio, experience, projects, education, skills). Keep it in sync with the PDF.
- `public/Matthew_Brummund_Resume.pdf`: the downloadable resume.
- `src/content/site.ts`: site URL, nav, Formspree endpoint.

## Deploy

CI builds every push to `main`, `dev`, and `prod`. Only pushes to `prod` publish to GitHub Pages. To ship, merge `main` into `prod` and push.
