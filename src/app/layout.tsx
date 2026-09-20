import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteUrl } from '@/content/site'
import { profile } from '@/content/resume'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description: profile.headline,
  openGraph: {
    title: profile.name,
    description: profile.headline,
    url: siteUrl,
    siteName: profile.name,
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) add attributes to <body> before React hydrates. */}
      <body className="flex min-h-screen flex-col font-sans antialiased" suppressHydrationWarning>
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
