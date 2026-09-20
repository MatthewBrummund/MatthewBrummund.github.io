import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Intro } from '@/components/intro'
import { Section } from '@/components/resume/section'
import { Entry } from '@/components/resume/entry'
import { education, experience, projects, skills } from '@/content/resume'

export const metadata: Metadata = {
  title: 'Resume',
}

export default function Resume() {
  return (
    <Container className="max-w-3xl space-y-14 py-12 md:py-16 print:space-y-8 print:py-0">
      <Intro />

      <Section title="Experience">
        {experience.map((entry) => (
          <Entry key={entry.heading} {...entry} />
        ))}
      </Section>

      <Section title="Projects">
        {projects.map((entry) => (
          <Entry key={entry.heading} {...entry} />
        ))}
      </Section>

      <Section title="Education">
        {education.map((entry) => (
          <Entry key={entry.heading} {...entry} />
        ))}
      </Section>

      <Section title="Skills">
        <dl className="space-y-3">
          {skills.map((group) => (
            <div key={group.label} className="sm:grid sm:grid-cols-[10rem_1fr] sm:gap-x-6">
              <dt className="text-sm font-medium text-muted-foreground sm:pt-0.5">{group.label}</dt>
              <dd className="leading-relaxed">{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </Container>
  )
}
