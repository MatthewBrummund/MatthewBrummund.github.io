'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { formspreeEndpoint } from '@/content/site'
import { profile } from '@/content/resume'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const labelClass = 'mb-1.5 block text-sm font-medium'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('submitting')
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`)
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <Textarea id="message" name="message" className="min-h-40" required />
      </div>
      {/* Honeypot: Formspree silently drops submissions where this is filled. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
          {status === 'success' && 'Sent. I’ll reply by email.'}
          {status === 'error' && (
            <>
              Something went wrong. Email me directly at{' '}
              <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
                {profile.email}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  )
}
