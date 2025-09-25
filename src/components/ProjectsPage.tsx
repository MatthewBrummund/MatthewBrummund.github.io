'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, ChevronDown, ChevronUp, ExternalLink, Github, Calendar, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { JSX } from "react";


// Demo project component
const PersonalWebsiteProject = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-sky-900 mb-3">Project Overview</h3>
      <p className="text-slate-600 leading-relaxed">
        Professional portfolio website built with modern web technologies to showcase cloud development 
        expertise and project portfolio. Features responsive design, accessibility compliance, and 
        performance optimization following industry best practices.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold text-sky-900 mb-3">Technical Implementation</h3>
      <ul className="space-y-2 text-slate-600">
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>Built with Next.js 14+ App Router for optimal performance and SEO</span>
        </li>
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>Implemented shadcn/ui component library with Tailwind CSS for consistent design system</span>
        </li>
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>Developed comprehensive style guide following professional cloud platform aesthetics</span>
        </li>
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>Configured GitHub Actions deployment pipeline for automated GitHub Pages hosting</span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-sky-900 mb-3">Key Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">Responsive Design</h4>
          <p className="text-sm text-slate-600">Mobile-first approach with optimized layouts across all device sizes</p>
        </div>
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">Performance Optimized</h4>
          <p className="text-sm text-slate-600">Core Web Vitals compliance with fast loading times</p>
        </div>
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">SEO Friendly</h4>
          <p className="text-sm text-slate-600">Structured data, meta optimization, and semantic HTML</p>
        </div>
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">Accessibility</h4>
          <p className="text-sm text-slate-600">WCAG 2.1 AA compliance with keyboard navigation support</p>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-3 pt-4 border-t border-sky-100">
      <Button asChild variant="default" size="sm">
        <a href="https://github.com/matthewbrummund/portfolio" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4 mr-2" />
          View Code
        </a>
      </Button>
      <Button asChild variant="outline" size="sm">
        <a href="https://matthewbrummund.com" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4 mr-2" />
          Visit Live Site
        </a>
      </Button>
    </div>
  </div>
)

// Project data structure
interface Project {
  id: string
  title: string
  client: string
  timeframe: string
  status: 'completed' | 'in-progress' | 'launched'
  category: 'enterprise' | 'government' | 'personal' | 'academic'
  description: string
  impact: string
  technologies: string[]
  component: () => JSX.Element
  links?: {
    github?: string
    live?: string
    demo?: string
  }
}

// Projects data
const projects: Project[] = [
  {
    id: 'asu-enterprise-ai',
    title: 'ASU Enterprise Technology - Conversational AI System',
    client: 'Arizona State University',
    timeframe: '2024',
    status: 'completed',
    category: 'enterprise',
    description: 'Architected conversational AI system for institutional data using Bedrock Knowledge Bases with Redshift integration and Nova Pro, eliminating SQL expertise requirement for staff data queries.',
    impact: 'Eliminated SQL expertise requirement for data queries',
    technologies: ['AWS Bedrock', 'Amazon Redshift', 'Nova Pro', 'AWS Lambda', 'API Gateway', 'Python'],
    component: () => <div className="p-4 text-slate-600">Full project details coming soon...</div>
  },
  {
    id: 'chandler-pd-portal',
    title: 'Chandler Police Department - AI Traffic Portal',
    client: 'Chandler Police Department',
    timeframe: '2024',
    status: 'completed',
    category: 'government',
    description: 'Delivered custom-built AI-powered traffic complaint portal, internal dashboard for officers with heatmap visualizations, and integrated Amazon Lex chatbot.',
    impact: 'Featured on 12 News Phoenix as innovative technology solution',
    technologies: ['Amazon Lex', 'AWS Lambda', 'React', 'CloudFront', 'DynamoDB', 'JavaScript'],
    component: () => <div className="p-4 text-slate-600">Full project details coming soon...</div>
  },
  {
    id: 'orthodox-union-rag',
    title: 'Orthodox Union - Multilingual RAG Chatbot',
    client: 'Orthodox Union',
    timeframe: '2024',
    status: 'completed',
    category: 'enterprise',
    description: 'Created RAG chatbot processing hundreds of hours of multilingual Torah lectures using Bedrock, OpenSearch, and custom Transcribe for Hebrew/Aramaic with timestamp citations.',
    impact: 'Processing hundreds of hours of multilingual content',
    technologies: ['AWS Bedrock', 'OpenSearch', 'Amazon Transcribe', 'RAG', 'Python', 'Multi-language Processing'],
    component: () => <div className="p-4 text-slate-600">Full project details coming soon...</div>
  },
  {
    id: 'dora-satellite',
    title: 'DORA Satellite (Deployable Optical Receiver Aperture)',
    client: 'ASU LoCo Lab',
    timeframe: 'Fall 2024',
    status: 'launched',
    category: 'academic',
    description: 'Developed Rust functions for DORA (Deployable Optical Receiver Aperture) • a 3U CubeSat fielded by the LoCo Lab at ASU • Launched to orbit fall 2024.',
    impact: 'Successfully launched to orbit with zero-fault-tolerant requirements',
    technologies: ['Rust', 'Embedded Systems', 'Satellite Communications', 'Error Handling', 'Real-time Systems'],
    component: () => <div className="p-4 text-slate-600">Full project details coming soon...</div>
  },
  {
    id: 'personal-website',
    title: 'Professional Portfolio Website',
    client: 'Personal Project',
    timeframe: '2024 - Present',
    status: 'in-progress',
    category: 'personal',
    description: 'Modern, responsive portfolio website showcasing cloud development expertise and professional experience. Built with performance, accessibility, and SEO optimization as primary considerations.',
    impact: 'Professional online presence with optimized user experience',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'GitHub Actions', 'GitHub Pages'],
    component: PersonalWebsiteProject,
    links: {
      github: 'https://github.com/matthewbrummund/portfolio',
      live: 'https://matthewbrummund.com'
    }
  }
]

// Available filter options
const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies))).sort()
const categories = ['all', 'enterprise', 'government', 'personal', 'academic'] as const

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all')
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory

      const matchesTechnology = selectedTechnologies.length === 0 ||
        selectedTechnologies.some(tech => project.technologies.includes(tech))

      return matchesSearch && matchesCategory && matchesTechnology
    })
  }, [searchTerm, selectedCategory, selectedTechnologies])

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTechnologies([])
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-700'
      case 'launched': return 'bg-blue-100 text-blue-700'
      case 'in-progress': return 'bg-amber-100 text-amber-700'
      default: return 'bg-slate-100 text-slate-700'
    }
  }

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'enterprise': return <Users className="h-4 w-4" />
      case 'government': return <Users className="h-4 w-4" />
      case 'academic': return <Calendar className="h-4 w-4" />
      case 'personal': return <Users className="h-4 w-4" />
      default: return <Users className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-sky-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-sky-900 mb-6">
            Project Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Enterprise AI solutions, government applications, space technology, and web development 
            projects showcasing full-stack cloud architecture expertise.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-6">
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-sky-200 focus:border-cyan-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-sky-900 hover:bg-sky-800" 
                    : "border-sky-200 text-sky-700 hover:bg-sky-50"
                  }
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            {/* Technology Filters */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-sky-900 text-center">Filter by Technology:</h3>
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {allTechnologies.slice(0, 12).map((tech) => (
                  <Badge
                    key={tech}
                    variant={selectedTechnologies.includes(tech) ? "default" : "secondary"}
                    className={`cursor-pointer transition-colors ${
                      selectedTechnologies.includes(tech)
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                        : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                    }`}
                    onClick={() => toggleTechnology(tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory !== 'all' || selectedTechnologies.length > 0) && (
              <div className="text-center">
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-slate-500 hover:text-sky-700">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Collapsible 
                key={project.id}
                open={expandedProject === project.id}
                onOpenChange={(open) => setExpandedProject(open ? project.id : null)}
              >
                <Card className="border-sky-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 h-fit">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(project.category)}
                        <Badge variant="outline" className="text-cyan-600 border-cyan-300">
                          {project.client}
                        </Badge>
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status.replace('-', ' ')}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-sky-900 leading-tight mb-2">
                      {project.title}
                    </CardTitle>
                    
                    <CardDescription className="text-slate-600 mb-4">
                      {project.description}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-emerald-600">
                          <span className="font-semibold">Impact:</span> {project.impact}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-sky-700 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="secondary" className="bg-sky-100 text-sky-700 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-slate-500 text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between text-sky-700 hover:text-cyan-500 hover:bg-sky-50">
                        View Details
                        {expandedProject === project.id ? 
                          <ChevronUp className="h-4 w-4" /> : 
                          <ChevronDown className="h-4 w-4" />
                        }
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="space-y-4 pt-4">
                      <div className="border-t border-sky-100 pt-4">
                        <project.component />
                      </div>
                    </CollapsibleContent>
                  </CardContent>
                </Card>
              </Collapsible>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 mb-4">No projects found matching your criteria.</p>
              <Button variant="outline" onClick={clearFilters} className="text-sky-700 border-sky-200">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}