import { Container } from '@/components/container'
import { profile } from '@/content/resume'

export function SiteFooter() {
  return (
    <footer className="border-t print:hidden">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  )
}
