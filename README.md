# Matthew Brummund - Professional Portfolio Website

A modern, responsive portfolio website showcasing cloud development expertise, AI integration projects, and enterprise system architecture. Built with Next.js 14+ and deployed via GitHub Pages.

## 🚀 Live Website
[matthewbrummund.com](https://matthewbrummund.com)

## 👨‍💻 About
Professional portfolio for Matthew Brummund, Associate Cloud Developer at AWS AI Cloud Innovation Center and Computer Systems Engineering student at Arizona State University Honors College. The site showcases enterprise AI solutions, government projects, and full-stack cloud architecture expertise.

## 🛠️ Technology Stack

### Core Framework
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **React 18** with modern hooks and patterns

### Styling & UI
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** component library
- **Lucide React** for consistent iconography
- **Custom design system** based on professional cloud platform aesthetics

### Architecture & Performance
- **Static Site Generation (SSG)** for optimal performance
- **Mobile-first responsive design** 
- **Component-based architecture** for maintainability
- **WCAG 2.1 AA accessibility compliance**

### Integrations
- **Formspree** for contact form functionality
- **GitHub Actions** for automated deployment
- **GitHub Pages** hosting

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── [additional routes]     # Individual page routes
├── components/
│   ├── Template.tsx            # Universal page wrapper
│   ├── Homepage.tsx            # Homepage content
│   ├── AboutPage.tsx           # About page content
│   ├── ResumePage.tsx          # Resume page content
│   ├── ProjectsPage.tsx        # Projects showcase with filtering
│   ├── BlogsPage.tsx           # Blog system with content management
│   ├── ContactPage.tsx         # Contact form with Formspree
│   ├── layout/
│   │   ├── Header.tsx          # Navigation with mobile menu
│   │   └── Footer.tsx          # Professional footer
│   ├── projects/               # Individual project components
│   ├── blogs/                  # Individual blog post components
│   └── ui/                     # shadcn/ui components
└── lib/                        # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Sky-900 (`#0c4a6e`) - Headers, navigation, primary CTAs
- **Secondary**: Sky-700 (`#0369a1`) - Subheadings, secondary content
- **Accent**: Cyan-500 (`#06b6d4`) - Interactive elements, highlights
- **Background**: Sky-50 (`#f0f9ff`) - Section backgrounds, cards
- **Muted**: Slate-500 (`#64748b`) - Body text, descriptions

### Typography
- **System font stack** prioritizing performance and readability
- **Responsive typography** with mobile-first scaling
- **Semantic heading hierarchy** for accessibility
- **Consistent spacing** using Tailwind's 4px base unit system

### Layout Principles
- **"Focus" philosophy** - Single-purpose sections without competing elements
- **Content-first approach** - Design serves information delivery
- **Professional confidence** - Modern but conservative styling
- **Accessibility-first** - WCAG 2.1 AA compliance throughout

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with professional positioning
- Core competency showcase
- Featured project highlights from AWS experience
- Achievement metrics and credentials
- Clear calls-to-action for engagement

### About (`/about`)
- Professional journey narrative
- Interactive timeline of key milestones
- Core values and technical philosophy
- Current focus areas and future goals

### Resume (`/resume`)
- Comprehensive professional experience
- Skills organized by category (no proficiency indicators)
- Education and certification details
- Speaking engagements and recognition
- PDF download functionality

### Projects (`/projects`)
- Advanced filtering by technology and category
- Expandable project cards with detailed information
- Featured projects: ASU Enterprise AI, Chandler PD Portal, Orthodox Union RAG, DORA Satellite
- Component-based architecture for individual project deep-dives

### Blog (`/blog`)
- Technical content management system
- Filtering by category and tags
- Expandable post format
- Ready for cloud architecture, AI integration, and development insights

### Contact (`/contact`)
- Professional contact information with availability status
- Functional contact form with Formspree integration
- Multiple communication channels
- Areas of interest and collaboration preferences

## ⚡ Performance & Optimization

### Core Web Vitals
- **LCP**: < 2.5s through optimized static generation
- **FID**: < 100ms with minimal JavaScript execution
- **CLS**: < 0.1 through consistent layout design

### Technical Optimizations
- Static site generation for fast loading
- Component-based code splitting
- Optimized asset delivery
- Semantic HTML structure for SEO
- Proper caching headers

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Key Dependencies
- `next`: ^14.0.0
- `react`: ^18.0.0
- `tailwindcss`: ^3.0.0
- `@radix-ui/react-*`: Latest (via shadcn/ui)
- `lucide-react`: Latest
- `typescript`: ^5.0.0

## 📄 Content Management

### Adding Projects
1. Create component in `/components/projects/[project-name].tsx`
2. Add project data to `ProjectsPage.tsx`
3. Implement project-specific content and media

### Adding Blog Posts
1. Create component in `/components/blogs/[post-slug].tsx`
2. Add post metadata to `BlogsPage.tsx`
3. Implement post content with rich formatting

### Updating Resume
- Modify `ResumePage.tsx` with updated experience
- Ensure consistency with downloadable PDF version
- Update skills and achievements as needed

## 🎯 Target Audience
- **Cloud engineering teams** seeking experienced developers
- **Enterprise software divisions** requiring AI integration expertise
- **Defense contractors** needing security-conscious development
- **Technical recruiters** evaluating cloud architecture skills

## 📊 Professional Highlights
- **Associate Cloud Developer** at AWS AI Cloud Innovation Center
- **5+ enterprise AI solutions** delivered for government and Fortune 500 clients
- **BS Computer Systems Engineering** candidate at ASU Honors College (3.78 GPA)
- **DORA Satellite contributor** - launched to orbit Fall 2024
- **AWS Imagine 2024 speaker** and **12 News Phoenix featured expert**

## 📞 Professional Contact
- **Email**: matthew.brummund@gmail.com
- **LinkedIn**: [linkedin.com/in/matthewbrummund](https://linkedin.com/in/matthewbrummund)
- **GitHub**: [github.com/matthewbrummund](https://github.com/matthewbrummund)
- **Location**: Tempe, Arizona (Remote-first)

## 📝 License
This project is the professional portfolio of Matthew Brummund. While the code structure and components may serve as reference for other developers, the content, branding, and personal information are proprietary.

---

**Built with precision, deployed with confidence.** 🚀