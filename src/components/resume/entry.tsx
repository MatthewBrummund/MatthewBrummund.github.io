import { ArrowUpRight } from 'lucide-react'
import type { Entry as EntryData } from '@/content/resume'

// Dates sit in a left gutter on wider screens and above the heading on phones.
export function Entry({ heading, sub, dates, url, bullets }: EntryData) {
  return (
    <article className="print:break-inside-avoid sm:grid sm:grid-cols-[10rem_1fr] sm:gap-x-6">
      <p className="text-sm text-muted-foreground tabular-nums sm:pt-0.5">{dates}</p>
      <div className="mt-1 sm:mt-0">
        <h3 className="font-semibold">{heading}</h3>
        {sub && <p className="text-muted-foreground">{sub}</p>}
        <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-muted-foreground/60">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm text-primary wrap-anywhere hover:underline"
          >
            {url.replace(/^https?:\/\//, '')}
            <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
