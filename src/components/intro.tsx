import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '@/content/resume'

export function Intro() {
  return (
    <header>
      <h1 className="text-3xl font-semibold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{profile.headline}</p>

      <div className="mt-6 space-y-4 leading-relaxed">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
        <li>{profile.location}</li>
        <li>
          <a href={profile.phoneHref} className="hover:text-foreground">
            {profile.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            {profile.email}
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
        </li>
      </ul>

      <Button asChild className="mt-6 print:hidden">
        <a href={profile.resumePdf} download>
          <Download aria-hidden="true" />
          Download resume (PDF)
        </a>
      </Button>
    </header>
  )
}
