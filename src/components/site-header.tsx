import Link from 'next/link'
import { Container } from '@/components/container'
import { nav } from '@/content/site'
import { profile } from '@/content/resume'

export function SiteHeader() {
  return (
    <header className="border-b print:hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Container className="flex h-14 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight whitespace-nowrap hover:text-primary">
          {profile.name}
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <a href={profile.resumePdf} className="text-muted-foreground hover:text-foreground">
            <span className="sm:hidden">PDF</span>
            <span className="hidden sm:inline">Download PDF</span>
          </a>
        </nav>
      </Container>
    </header>
  )
}
