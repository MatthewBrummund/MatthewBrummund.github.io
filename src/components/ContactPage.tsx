'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send, Calendar, Clock, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'


// Contact methods data
const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email',
    value: 'matthew.brummund@gmail.com',
    description: 'Best for general contact and formal inquiries',
    action: 'mailto:matthew.brummund@gmail.com',
    actionText: 'Send Email',
    primary: true
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Phone',
    value: '(520) 256-5694',
    description: 'Available for phone calls during business hours (MST)',
    action: 'tel:+15202565694',
    actionText: 'Call Now',
    primary: false
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/matthew-brummund-5506702a0',
    description: 'Professional networking and industry connections',
    action: 'https://linkedin.com/in/matthew-brummund-5506702a0',
    actionText: 'Connect',
    primary: false,
    external: true
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: 'GitHub',
    value: 'github.com/matthewbrummund',
    description: 'View code repositories and open source contributions',
    action: 'https://github.com/matthewbrummund',
    actionText: 'View Profile',
    primary: false,
    external: true
  }
]

// Availability and preferences
const availabilityInfo = {
  status: 'Available for New Opportunities',
  location: 'Tempe, Arizona',
  workStyle: 'Open for on-site, remote, and hybrid roles',
  timeZone: 'Mountain Standard Time (MST)',
  responseTime: 'Typically within 24 hours',
  preferredContact: 'Email for initial contact, phone for follow-up discussions'
}

// Interest areas for opportunities
const interestAreas = [
  'Cloud Architecture & AWS Solutions',
  'AI/ML Integration Projects',
  'Enterprise System Development',
  'Government & Defense',
  'Full-Stack Development Roles',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/movkvkpb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          // Add timestamp for tracking
          _timestamp: new Date().toISOString(),
          // Optional: Add subject line for the email
          _subject: `New Contact Form Submission: ${formData.subject}`,
        }),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            subject: '',
            message: ''
          })
          setIsSubmitted(false)
        }, 5000) // Show success message for 5 seconds
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or contact me directly via email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-sky-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-sky-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Interested in discussing cloud architecture projects, AI integration opportunities, 
            or work positions? I&rsquo;d love to hear from you.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {availabilityInfo.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {availabilityInfo.timeZone}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Availability Status */}
            <Card className="border-sky-200 bg-emerald-50">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <CardTitle className="text-emerald-800">{availabilityInfo.status}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-emerald-700">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{availabilityInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{availabilityInfo.workStyle}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{availabilityInfo.responseTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-sky-900">Contact Methods</h2>
              
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className={`border-sky-200 hover:border-cyan-300 transition-colors ${
                    method.primary ? 'ring-2 ring-cyan-200' : ''
                  }`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            method.primary ? 'bg-cyan-100 text-cyan-600' : 'bg-sky-100 text-sky-600'
                          }`}>
                            {method.icon}
                          </div>
                          <div>
                            <CardTitle className="text-sky-900 flex items-center gap-2">
                              {method.title}
                              {method.primary && <Badge className="bg-cyan-100 text-cyan-700">Preferred</Badge>}
                            </CardTitle>
                            <CardDescription className="text-slate-600">
                              {method.value}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 mt-3">
                        {method.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        asChild 
                        variant={method.primary ? "default" : "outline"}
                        className={method.primary ? "bg-sky-900 hover:bg-sky-800" : "border-sky-200 text-sky-700 hover:bg-sky-50"}
                      >
                        <a 
                          href={method.action} 
                          target={method.external ? "_blank" : "_self"}
                          rel={method.external ? "noopener noreferrer" : ""}
                        >
                          {method.actionText}
                          {method.external && <ExternalLink className="h-4 w-4 ml-2" />}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Areas of Interest */}
            <Card className="border-sky-200">
              <CardHeader>
                <CardTitle className="text-sky-900">Areas of Interest</CardTitle>
                <CardDescription>
                  Types of projects and opportunities I&rsquo;m most excited about:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interestAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="bg-sky-100 text-sky-700">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Send a Message</h2>
              <p className="text-slate-600">
                Prefer to reach out directly? Use the form below and I&rsquo;ll get back to you soon.
              </p>
            </div>

            <Card className="border-sky-200">
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto" />
                    <h3 className="text-lg font-semibold text-emerald-800">Message Sent Successfully!</h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. I&rsquo;ll respond to your message within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field for spam protection - hidden from users */}
                    <input
                      type="text"
                      name="_gotcha"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-sky-900 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-sky-200 focus:border-cyan-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-sky-900 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-sky-200 focus:border-cyan-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-sky-900 mb-2">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-sky-200 focus:border-cyan-500"
                        placeholder="Company name (optional)"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-sky-900 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-sky-200 focus:border-cyan-500"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-sky-900 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-sky-200 focus:border-cyan-500 resize-none"
                        placeholder="Please provide details about your project, timeline, and any specific requirements..."
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        disabled={!isFormValid || isSubmitting}
                        className="bg-sky-900 hover:bg-sky-800 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>Sending Message...</>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="border-sky-200 text-sky-700 hover:bg-sky-50"
                        onClick={() => setFormData({
                          name: '',
                          email: '',
                          company: '',
                          subject: '',
                          message: ''
                        })}
                      >
                        Clear Form
                      </Button>
                    </div>
                    
                    <p className="text-xs text-slate-500">
                      * Required fields. Your information will be kept confidential and used only to respond to your inquiry.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="border-sky-200 bg-sky-50">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-sky-900">Ready to Collaborate?</h3>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Whether you&rsquo;re looking for cloud architecture expertise, AI integration solutions, 
                  or full-stack development capabilities, I&rsquo;m excited to start!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild className="bg-sky-900 hover:bg-sky-800">
                    <a href="mailto:matthew.brummund@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Start a Conversation
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-sky-200 text-sky-700 hover:bg-sky-100">
                    <a href="/resume">
                      View My Experience
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}