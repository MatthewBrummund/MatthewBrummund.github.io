import Link from 'next/link'
import { Container } from '@/components/container'

export default function NotFound() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 leading-relaxed">
        There’s nothing at this address.{' '}
        <Link href="/" className="text-primary hover:underline">
          Back to the home page
        </Link>
        .
      </p>
    </Container>
  )
}
