interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  return (
    <section aria-labelledby={id}>
      <div className="mb-6 flex items-center gap-4">
        <h2 id={id} className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  )
}
