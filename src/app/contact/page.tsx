import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { ContactForm } from '@/components/contact-form'
import { profile } from '@/content/resume'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${profile.name}.`,
}

export default function Contact() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 leading-relaxed">
        Email is the fastest way to reach me:{' '}
        <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
          {profile.email}
        </a>
        . You can also find me on{' '}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          LinkedIn
        </a>{' '}
        and{' '}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          GitHub
        </a>
        , or use the form below.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </Container>
  )
}
