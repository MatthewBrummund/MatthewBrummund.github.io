'use client'

import Link from 'next/link'
import { ExternalLink, Mail, Github, Linkedin, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'


// Quick navigation items (subset of main navigation)
const quickNavItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

// Contact and social links
const contactInfo = {
  email: 'matthew.brummund@gmail.com',
  location: 'Available for remote opportunities and around the country',
  linkedin: 'https://linkedin.com/in/matthew-brummund-5506702a0',
  github: 'https://github.com/matthewbrummund',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-sky-50 border-t border-slate-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Professional Summary Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-sky-900 mb-3">
                Matthew Brummund
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cloud Solutions Developer specializing in enterprise systems and scalable architectures.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                BS Computer Systems Engineering candidate
              </p>
              <p className="text-sm text-slate-500 mt-2">
                {contactInfo.location}
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-sky-700">Quick Links</h4>
            <nav className="space-y-2" role="navigation" aria-label="Footer navigation">
              {quickNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-slate-600 hover:text-cyan-500 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-sm py-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-sky-700">Connect</h4>
            <div className="space-y-3">
              
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-500 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-sm py-1"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>

              {/* LinkedIn */}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-500 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-sm py-1"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
                <ExternalLink className="h-3 w-3" />
              </a>

              {/* GitHub */}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-500 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-sm py-1"
              >
                <Github className="h-4 w-4" />
                GitHub Profile
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Back to Top Button */}
            <div className="pt-4">
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-cyan-500 hover:bg-sky-100 transition-colors duration-150 p-2"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          
          {/* Copyright Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs text-slate-500">
              © {currentYear} Matthew Brummund. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}