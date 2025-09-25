import { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'


interface TemplateProps {
  children: ReactNode
  className?: string
}

export default function Template({ children, className = '' }: TemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content Area */}
      <main 
        id="main-content"
        className={`flex-1 ${className}`}
        role="main"
      >
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}