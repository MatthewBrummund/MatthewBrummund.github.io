import Link from 'next/link'
import { GraduationCap, Rocket, Users, Lightbulb, Calendar, MapPin, Award, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Timeline milestones
const timelineEvents = [
  {
    year: "2022",
    title: "Started at Arizona State University",
    description: "Began BS in Computer Systems Engineering at ASU Honors College",
    icon: <GraduationCap className="h-5 w-5" />,
    type: "education"
  },
  {
    year: "2024",
    title: "Joined AWS AI Cloud Innovation Center",
    description: "Associate Cloud Developer role focusing on enterprise AI solutions",
    icon: <Users className="h-5 w-5" />,
    type: "career"
  },
  {
    year: "2024",
    title: "DORA Satellite Launch",
    description: "Developed Rust functions for CubeSat launched to orbit",
    icon: <Rocket className="h-5 w-5" />,
    type: "project"
  },
  {
    year: "2024",
    title: "AWS Imagine Panel Speaker",
    description: "Panelist on generative AI adoption in higher education",
    icon: <Award className="h-5 w-5" />,
    type: "recognition"
  },
  {
    year: "2025",
    title: "Featured Technology Expert",
    description: "12 News Phoenix coverage of Chandler PD AI portal",
    icon: <Award className="h-5 w-5" />,
    type: "recognition"
  },
  {
    year: "2026",
    title: "Expected Graduation",
    description: "BS Computer Systems Engineering completion",
    icon: <GraduationCap className="h-5 w-5" />,
    type: "education"
  }
]

// Core values and approach
const coreValues = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation-Driven",
    description: "I believe in leveraging cutting-edge technology to solve real-world problems. Whether it's implementing RAG systems for multilingual content or building AI-powered dashboards, I focus on practical innovation that delivers measurable value."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client-First Approach",
    description: "Every solution I build starts with understanding the client's actual needs. From eliminating SQL expertise requirements for ASU staff to creating intuitive interfaces for police officers, user experience drives technical decisions."
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do I. From mastering new AWS services to contributing to satellite missions, I embrace challenges that expand my technical horizons and push industry boundaries."
  }
]

// Current focus areas
const currentFocus = [
  "Advanced AI integration with AWS Bedrock and enterprise systems",
  "Scalable cloud architecture for government and Fortune 500 clients",
  "Full-stack development with modern frameworks (React, Next.js, Angular)",
  "Infrastructure as Code with Terraform and AWS CDK",
  "Completing BS in Computer Systems Engineering (Expected May 2026)"
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-sky-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-sky-900 mb-6">
            About Matthew Brummund
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Cloud solutions developer passionate about building scalable, AI-enabled systems that solve 
            real-world problems for enterprise and government clients.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Tempe, Arizona
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Available for Remote Work and around the country
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-8 text-center">
            My Professional Journey
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
            <p>
              My path into cloud development began with a fascination for systems that could scale and adapt. 
              When I started my Computer Systems Engineering degree at Arizona State University's Honors College, 
              I was drawn to the intersection of software, infrastructure, and real-world problem solving.
            </p>
            <p>
              The opportunity to join AWS AI Cloud Innovation Center as an Associate Cloud Developer in 2024 
              transformed my understanding of what's possible with cloud architecture. Working directly with 
              enterprise and government clients like the State of New Jersey, Chandler Police Department, and 
              ASU Enterprise Technology taught me that the best technical solutions are those that eliminate 
              complexity for end users.
            </p>
            <p>
              What excites me most about cloud development is the ability to democratize powerful capabilities. 
              Whether it's building a conversational AI system that eliminates the need for SQL expertise, or 
              creating multilingual processing systems for hundreds of hours of content, I focus on making 
              advanced technology accessible and practical.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-sky-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-12 text-center">
            Professional Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-sky-200"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-sky-300 rounded-full flex items-center justify-center z-10">
                    <div className="text-sky-600">
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="border-sky-200 hover:border-cyan-300 transition-colors">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={event.type === 'education' ? 'default' : 
                                         event.type === 'career' ? 'secondary' : 'outline'}
                                 className={event.type === 'education' ? 'bg-sky-100 text-sky-700' :
                                           event.type === 'career' ? 'bg-cyan-100 text-cyan-700' :
                                           'bg-emerald-100 text-emerald-700'}>
                            {event.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-sky-900">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Approach */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-12 text-center">
            My Approach to Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-sky-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">
                      {value.icon}
                    </div>
                    <CardTitle className="text-sky-900">{value.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="bg-sky-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-8 text-center">
            Current Focus & Next Steps
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-600 text-center leading-relaxed">
              As I complete my degree in Computer Systems Engineering and continue growing at AWS AI Cloud 
              Innovation Center, I'm focused on deepening my expertise in several key areas:
            </p>
            <Card className="border-sky-200">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {currentFocus.map((focus, index) => (
                    <li key={index} className="flex items-start space-x-3 text-slate-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="text-center pt-6">
              <p className="text-slate-600 mb-6">
                I'm always interested in discussing new opportunities, technical challenges, 
                and innovative approaches to cloud architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sky-900 hover:bg-sky-800 text-white">
                  <Link href="/contact">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-sky-700 text-sky-700 hover:bg-sky-50">
                  <Link href="/resume">
                    View My Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}