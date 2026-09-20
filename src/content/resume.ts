// Source of truth for the resume page (and the landing-page tagline).
// Transcribed from Matthew_Brummund_Resume.pdf; keep the two in sync.

export interface Entry {
  heading: string
  sub?: string
  dates: string
  url?: string
  bullets: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const profile = {
  name: 'Matthew Brummund',
  // Landing page one-liner and the line under it.
  tagline: 'Software engineer. Full-stack, cloud, and flight software.',
  subline:
    'MS Computer Science candidate at Arizona State University (May 2027). Software Developer Intern at Collins Aerospace (RTX). Tempe, AZ.',
  headline:
    'Software engineer. MS Computer Science candidate at Arizona State University; Software Developer Intern at Collins Aerospace (RTX).',
  location: 'Tempe, AZ',
  phone: '(520) 256-5694',
  phoneHref: 'tel:+15202565694',
  email: 'matthew.brummund@gmail.com',
  linkedin: 'https://www.linkedin.com/in/matthew-brummund-5506702a0/',
  github: 'https://github.com/MatthewBrummund',
  resumePdf: '/Matthew_Brummund_Resume.pdf',
  // The only prose on the site that isn't in the PDF. Edit freely.
  bio: [
    'I build full-stack software and cloud systems. At Collins Aerospace I replaced a legacy bill-of-materials tool with a C#/ASP.NET application that cut multi-million-row query times from minutes to under two seconds. Before that, at the AWS AI Cloud Innovation Center, I delivered five AI-enabled cloud solutions for government and enterprise clients, and I contributed Rust flight software to a 3U CubeSat that is now in orbit.',
    'I finished my BSE in Computer Systems Engineering at ASU in three years and am completing the accelerated MS in Computer Science in May 2027. I am looking for full-time software engineering roles in aerospace and defense starting then.',
  ],
}

export const experience: Entry[] = [
  {
    heading: 'RTX Corporation – Collins Aerospace',
    sub: 'Supply Chain Software Developer Intern',
    dates: 'May 2026 – Present',
    bullets: [
      'Replaced legacy BOM (Bill of Materials) viewing tool; utilizing C#, ASP.NET Razor Pages, Entity Framework, SQL Server, and DevExtreme UI Components. Featured top-level component search, and sub-component where used lookup',
      'Cut multi-million-row query load times by ~99% (reduced from minutes to <2s), eliminating a major bottleneck in lookups',
      'Resolved outstanding support and enhancement tickets across multiple supported services, reducing the team backlog',
      'Internship was extended beyond the summer remotely to continue team backlog support, and replace additional legacy tools',
      'Communicated directly with clients and stakeholders while delivering iterative prototypes through bi-weekly sprints',
    ],
  },
  {
    heading: 'AWS AI Cloud Innovation Center',
    sub: 'Associate Cloud Developer',
    dates: 'Apr 2024 – May 2026',
    bullets: [
      'Delivered 5 full-stack AI-enabled cloud solutions for enterprise and government clients including: Tucson Police Department, ASU Enterprise Technology, Chandler Police Department, Orthodox Union, Our Journey Reentry Support',
      'ASU Enterprise Technology – Architected conversational AI system for institutional data using Bedrock Knowledge Bases with Redshift integration and Nova Pro, eliminating SQL expertise requirement for staff data queries',
      'Chandler Police Department – Delivered custom-built AI-powered traffic complaint portal, internal dashboard for officers with heatmap visualizations, and integrated Amazon Lex chatbot to interface with complaints',
      'Tucson Police Department – Created an automated document redaction and processing system to intake, redact, and track requests for police records. Redaction decision making and processing system enabled by AI, with required human review',
      'Worked across the full stack: IaC, backend APIs, and frontend (React, Next.js, Angular, Streamlit), while being mentored directly by AWS engineering and support staff throughout the projects',
    ],
  },
  {
    heading: 'ASU LoCo Lab',
    sub: 'DORA Satellite (Deployable Optical Receiver Aperture)',
    dates: 'Launched Fall 2024',
    bullets: [
      'Contributed Rust flight-software functions for sensor reads and selective telemetry return on a 3U CubeSat now in orbit, including error handling and logging for command edge cases in a zero-fault-tolerance environment',
    ],
  },
]

export const projects: Entry[] = [
  {
    heading: 'WCAG Video Remediation Pipeline',
    sub: 'Barrett Honors Thesis – VideoRemediation',
    dates: 'August 2025 – May 2026',
    url: 'https://github.com/MatthewBrummund/VideoRemediation',
    bullets: [
      'Designed and built a fully serverless AWS pipeline and dashboard that remediates video to WCAG 2.1 Level AA across eight criteria, motivated by the DOJ Title II Final Rule and its April 2026 compliance deadline for public universities',
      'Architected nine Lambda functions orchestrated by Step Functions with media-type-aware branching, routing content down separate paths; integrated Amazon Transcribe, Rekognition, Bedrock Nova Pro, with OpenCV and FFmpeg',
      "Cut costs to $0.83 per video minute against a ~$5/min manual baseline (~6x cheaper) and ships a per-criterion compliance report with every video that traditional remediation vendors don't provide",
    ],
  },
]

export const education: Entry[] = [
  {
    heading: 'MS, Computer Science (CS)',
    sub: 'ASU 4+1 Accelerated Masters Program',
    dates: 'Expected May 2027',
    bullets: [
      'Arizona State University, Ira A. Fulton Schools of Engineering, Tempe, AZ. The accelerated program merges parts of the undergraduate and graduate programs. Coursework includes: Large data processing, machine learning, and cloud computing',
    ],
  },
  {
    heading: 'BSE, Computer Systems Engineering (CSE)',
    dates: 'Graduated May 2026',
    bullets: [
      'Arizona State University, Ira A. Fulton Schools of Engineering & Barrett, The Honors College, Tempe, AZ',
      'Graduated Magna Cum Laude (3.6 GPA) in 3 years. Completed the ASU Barrett, The Honors College program',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['C#', 'Python', 'JavaScript/TypeScript', 'SQL', 'Java', 'C/C++', 'Rust', 'MATLAB'],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      'ASP.NET Razor Pages',
      'Entity Framework',
      'DevExtreme',
      'React',
      'Next.js',
      'FFmpeg/OpenCV',
      'Streamlit',
    ],
  },
  {
    label: 'Cloud & Infrastructure',
    items: [
      'SQL Server',
      'AWS (Lambda, Step Functions, API Gateway, DynamoDB, S3, Bedrock, Redshift, ECS/Fargate, Cognito, IAM)',
      'AWS CDK',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Git',
      'Linux',
    ],
  },
]
