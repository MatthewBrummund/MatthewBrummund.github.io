"use client"

import Link from 'next/link'
import { Download, Phone, Mail, MapPin, ExternalLink, Calendar, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function ResumePage() {
  // Handle PDF download with analytics tracking (optional)
  const handleDownload = () => {
    // Optional: Add analytics tracking here
    // gtag('event', 'download', { file_name: 'MatthewBrummundResume.pdf' })
    
    // Create download link and trigger download
    const link = document.createElement('a')
    link.href = '/MatthewBrummundResume.pdf'
    link.download = 'MatthewBrummundResume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-sky-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-sky-900">
              MATTHEW BRUMMUND
            </h1>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Tempe, AZ
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (520) 256-5694
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                matthew.brummund@gmail.com
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a 
                href="https://linkedin.com/in/matthew-brummund-5506702a0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-700 hover:text-cyan-500 transition-colors"
              >
                LinkedIn <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://github.com/matthewbrummund" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-700 hover:text-cyan-500 transition-colors"
              >
                GitHub <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="https://matthewbrummund.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-700 hover:text-cyan-500 transition-colors"
              >
                matthewbrummund.com <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Download Button - Updated Implementation */}
            <div className="pt-4">
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="bg-sky-900 hover:bg-sky-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors"
                aria-label="Download Matthew Brummund's resume as PDF"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Rest remains the same */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-sky-900 mb-6 border-b-2 border-sky-200 pb-2">
            EDUCATION
          </h2>
          <Card className="border-sky-200">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <CardTitle className="text-sky-900">BS, Computer Systems Engineering (CSE)</CardTitle>
                <Badge className="w-fit bg-sky-100 text-sky-700">Expected May 2026</Badge>
              </div>
              <CardDescription className="text-slate-600">
                Arizona State University, Ira A. Fulton & Barrett, The Honors College • Tempe, AZ • Cumulative GPA: 3.78
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                <strong>Relevant Coursework:</strong> Data Structures and Algorithms, Object-Oriented Programming, Software Engineering Principles
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-sky-900 mb-6 border-b-2 border-sky-200 pb-2">
            SKILLS
          </h2>
          
          <div className="space-y-6">
            {/* Programming Languages/Software */}
            <Card className="border-sky-200">
              <CardHeader>
                <CardTitle className="text-sky-900">Programming Languages/Software</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "Java", "Rust", "C/C++", "JavaScript/TypeScript", "HTML/CSS", 
                    "React", "Next.js", "SQL", "Terraform (HCL)"
                  ].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-sky-100 text-sky-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS CDK/SDK", "Docker", "Git/GitHub", "Linux CLI", 
                    "CI/CD (GitHub Actions, AWS CodePipeline)", "Agile/Scrum"
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-sky-300 text-slate-600">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AWS Services */}
            <Card className="border-sky-200">
              <CardHeader>
                <CardTitle className="text-sky-900">AWS Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Bedrock", "Lambda", "EC2", "S3", "DynamoDB", "API Gateway (REST/WebSocket)", 
                    "CloudFront", "OpenSearch", "Redshift"
                  ].map((service, index) => (
                    <Badge key={index} variant="secondary" className="bg-cyan-100 text-cyan-700">
                      {service}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "IAM", "CloudWatch", "VPC", "CloudFormation", "EventBridge", 
                    "ECS/Fargate", "Secrets Manager", "CodeBuild/CodeDeploy"
                  ].map((service, index) => (
                    <Badge key={index} variant="outline" className="border-cyan-300 text-slate-600">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold text-sky-900 mb-6 border-b-2 border-sky-200 pb-2">
            EXPERIENCE
          </h2>
          
          <div className="space-y-8">
            {/* AWS Position */}
            <Card className="border-sky-200">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-sky-900">AWS AI Cloud Innovation Center, Associate Cloud Developer</CardTitle>
                    <CardDescription className="text-slate-600">Apr 2024 - Present</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Delivered 5 full-stack AI-enabled cloud solutions for enterprise and government clients including: The State of New Jersey, Chandler Police Department, Orthodox Union, ASU Enterprise Technology, Ohio State University</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>ASU Enterprise Technology</strong> - Architected conversational AI system for institutional data using Bedrock Knowledge Bases with Redshift integration and Nova Pro, eliminating SQL expertise requirement for staff data queries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Chandler Police Department</strong> - Delivered custom-built AI-powered traffic complaint portal, internal dashboard for officers with heatmap visualizations, and integrated Amazon Lex chatbot</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Orthodox Union</strong> - Created RAG chatbot processing hundreds of hours of multilingual Torah lectures using Bedrock, OpenSearch, and custom Transcribe for Hebrew/Aramaic with timestamp citations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leveraged AWS cloud services to build full-stack applications with: IAC (Infrastructure as code), backend development focused on API's, and frontend deployments build with React, NextJs, Angular, and Streamlit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Collaborated on projects in a team setting designed around rapid prototyping • Followed Scrum principles including weekly sprints towards client meetings, and daily standup meetings • Effectively communicated with clients on projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* DORA Satellite */}
            <Card className="border-sky-200">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-sky-900">DORA Satellite (Deployable Optical Receiver Aperture)</CardTitle>
                    <CardDescription className="text-slate-600">Launched Fall 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Developed Rust functions for DORA (Deployable Optical Receiver Aperture) • a 3U CubeSat fielded by the LoCo Lab at ASU • Launched to orbit fall 2024</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Wrote various Rust functions to support critical information retrieval (reading sensors, and selective telemetry return)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Handled error checking for edge cases in commands in a zero-fault-tolerant setting, as well as general debugging</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Speaking & Recognition */}
        <section>
          <h2 className="text-2xl font-bold text-sky-900 mb-6 border-b-2 border-sky-200 pb-2">
            SPEAKING & RECOGNITION
          </h2>
          
          <div className="space-y-6">
            <Card className="border-sky-200">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <CardTitle className="text-sky-900">12 News (Phoenix), Chandler PD Portal Featured Technology Expert</CardTitle>
                  <Badge className="w-fit bg-emerald-100 text-emerald-700">Sept 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Featured in news segment showcasing AI-powered traffic complaint system built for Chandler Police Department
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <CardTitle className="text-sky-900">AWS Imagine 2024, Panel Speaker</CardTitle>
                  <Badge className="w-fit bg-emerald-100 text-emerald-700">July 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Panelist for "AIM107: Building Positive Futures: The Adoption of Generative AI from Student and Higher Education Perspectives" alongside ASU leadership and AWS professionals
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}