import Link from 'next/link'
import { Download, ExternalLink, ArrowRight, Code, Cloud, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'


// Featured projects data from resume
const featuredProjects = [
  {
    title: "ASU Enterprise Technology - Conversational AI System",
    description: "Architected conversational AI system for institutional data using Bedrock Knowledge Bases with Redshift integration and Nova Pro, eliminating SQL expertise requirement for staff data queries.",
    technologies: ["AWS Bedrock", "Amazon Redshift", "Nova Pro", "AWS Lambda", "API Gateway"],
    impact: "Eliminated SQL expertise requirement for data queries",
    client: "Arizona State University"
  },
  {
    title: "Chandler Police Department - AI Traffic Portal",
    description: "Delivered custom-built AI-powered traffic complaint portal, internal dashboard for officers with heatmap visualizations, and integrated Amazon Lex chatbot.",
    technologies: ["Amazon Lex", "AWS Lambda", "React", "CloudFront", "DynamoDB"],
    impact: "Featured on 12 News Phoenix as innovative technology solution",
    client: "Chandler Police Department"
  },
  {
    title: "Orthodox Union - Multilingual RAG Chatbot",
    description: "Created RAG chatbot processing hundreds of hours of multilingual Torah lectures using Bedrock, OpenSearch, and custom Transcribe for Hebrew/Aramaic with timestamp citations.",
    technologies: ["AWS Bedrock", "OpenSearch", "Amazon Transcribe", "RAG", "Multi-language Processing"],
    impact: "Processing hundreds of hours of multilingual content",
    client: "Orthodox Union"
  }
]

// Core competency areas
const competencies = [
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Architecture",
    description: "Full-stack AWS solutions with Infrastructure as Code",
    skills: ["AWS Bedrock", "Lambda", "EC2", "S3", "DynamoDB", "API Gateway", "CloudFront"]
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Development",
    description: "Modern web applications and system programming",
    skills: ["Python", "Java", "Rust", "JavaScript/TypeScript", "React", "Next.js"]
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Enterprise Solutions",
    description: "Government and Fortune 500 client project delivery",
    skills: ["Agile/Scrum", "Client Communication", "Rapid Prototyping", "Team Collaboration"]
  }
]

// Achievement highlights
const achievements = [
  { number: "5+", label: "Enterprise AI Solutions Delivered" },
  { number: "3.78", label: "GPA - ASU Honors College" },
  { number: "2024", label: "DORA Satellite Launch" },
  { number: "AWS", label: "Certified Cloud Expertise" }
]

export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-sky-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-sky-900 leading-tight">
                  Cloud Solutions Developer
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-sky-700 leading-relaxed">
                  Building scalable AI-enabled systems for enterprise and government clients
                </h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Associate Cloud Developer at AWS AI Cloud Innovation Center with expertise in full-stack 
                  cloud architecture. Currently completing BS in Computer Systems Engineering at ASU Honors College.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-sky-900 hover:bg-sky-800 text-white">
                  <Link href="/projects">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View My Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-sky-700 text-sky-700 hover:bg-sky-50">
                  <Link href="/resume">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center border-sky-200 hover:border-cyan-300 transition-colors">
                  <CardContent className="pt-6">
                    <div className="text-2xl md:text-3xl font-bold text-sky-900 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-slate-600">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900 mb-4">
              Core Expertise
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Delivering enterprise-grade cloud solutions with a focus on AI integration, 
              scalable architecture, and measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competencies.map((competency, index) => (
              <Card key={index} className="border-sky-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">
                      {competency.icon}
                    </div>
                    <CardTitle className="text-sky-900">{competency.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600">
                    {competency.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {competency.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-sky-100 text-sky-700">
                        {skill}
                      </Badge>
                    ))}
                    {competency.skills.length > 4 && (
                      <Badge variant="outline" className="text-slate-500">
                        +{competency.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-sky-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900 mb-4">
              Recent Project Highlights
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise and government solutions delivered through AWS AI Cloud Innovation Center, 
              featuring cutting-edge AI integration and cloud architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="border-sky-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-cyan-600 border-cyan-300">
                      {project.client}
                    </Badge>
                  </div>
                  <CardTitle className="text-sky-900 leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-sky-100 text-sky-700">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-slate-500">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-sky-100">
                    <p className="text-sm font-medium text-emerald-600">
                      <Award className="h-4 w-4 inline mr-1" />
                      {project.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-sky-700 text-sky-700 hover:bg-sky-100">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Status & Contact Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900">
              Ready to Build Your Next Solution?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Currently seeking new opportunities in cloud architecture and AI-enabled systems. 
              Available for remote collaboration and based in Tempe, AZ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-sky-900 hover:bg-sky-800 text-white">
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-sky-700 text-sky-700 hover:bg-sky-50">
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}