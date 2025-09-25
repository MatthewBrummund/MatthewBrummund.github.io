'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, ChevronDown, ChevronUp, Calendar, Clock, Tag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

// Demo blog post component
const PlaceholderBlogPost = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-semibold text-sky-900 mb-3">Introduction</h3>
      <p className="text-slate-600 leading-relaxed">
        This is a placeholder blog post demonstrating the blog system architecture and design. 
        Future blog posts will cover topics like cloud architecture patterns, AI/ML integration 
        strategies, and lessons learned from enterprise project implementations.
      </p>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold text-sky-900 mb-3">Planned Content Areas</h3>
      <ul className="space-y-2 text-slate-600">
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Cloud Architecture:</strong> Scalable system design patterns and AWS best practices</span>
        </li>
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>AI/ML Integration:</strong> Practical approaches to enterprise AI implementation</span>
        </li>
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Development Insights:</strong> Lessons from building full-stack cloud applications</span>
        </li>
        <li className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Career Development:</strong> Thoughts on growth in cloud engineering roles</span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold text-sky-900 mb-3">Technical Focus</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">Practical Examples</h4>
          <p className="text-sm text-slate-600">Real-world implementation details and code examples</p>
        </div>
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">Architecture Insights</h4>
          <p className="text-sm text-slate-600">System design decisions and trade-off analysis</p>
        </div>
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">Best Practices</h4>
          <p className="text-sm text-slate-600">Industry standards and optimization techniques</p>
        </div>
        <div className="p-4 bg-sky-50 rounded-lg">
          <h4 className="font-medium text-sky-900 mb-2">Lessons Learned</h4>
          <p className="text-sm text-slate-600">Project insights and problem-solving approaches</p>
        </div>
      </div>
    </div>

    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
      <p className="text-amber-800 text-sm">
        <strong>Coming Soon:</strong> This blog system is ready for content! Future posts will dive deep into 
        cloud architecture patterns, AI implementation strategies, and technical insights from enterprise projects.
      </p>
    </div>
  </div>
)

// Blog post data structure
interface BlogPost {
  id: string
  title: string
  excerpt: string
  publishedDate: string
  readTime: number
  status: 'published' | 'draft' | 'coming-soon'
  category: 'technical' | 'career' | 'insights' | 'tutorials'
  tags: string[]
  component: () => JSX.Element
  featured?: boolean
}

// Blog posts data (placeholder only)
const blogPosts: BlogPost[] = [
  {
    id: 'placeholder-post',
    title: 'Welcome to My Technical Blog',
    excerpt: 'An introduction to upcoming content covering cloud architecture, AI integration, and enterprise development insights.',
    publishedDate: '2024-09-25',
    readTime: 3,
    status: 'published',
    category: 'insights',
    tags: ['Introduction', 'Cloud Architecture', 'AI/ML', 'Enterprise Development'],
    component: PlaceholderBlogPost,
    featured: true
  }
]

// Available filter options
const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags))).sort()
const categories = ['all', 'technical', 'career', 'insights', 'tutorials'] as const

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [expandedPost, setExpandedPost] = useState<string | null>(null)

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => post.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
  }, [searchTerm, selectedCategory, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTags([])
  }

  const getStatusColor = (status: BlogPost['status']) => {
    switch (status) {
      case 'published': return 'bg-emerald-100 text-emerald-700'
      case 'draft': return 'bg-amber-100 text-amber-700'
      case 'coming-soon': return 'bg-blue-100 text-blue-700'
      default: return 'bg-slate-100 text-slate-700'
    }
  }

  const getCategoryIcon = (category: BlogPost['category']) => {
    switch (category) {
      case 'technical': return <Tag className="h-4 w-4" />
      case 'career': return <Calendar className="h-4 w-4" />
      case 'insights': return <Clock className="h-4 w-4" />
      case 'tutorials': return <Tag className="h-4 w-4" />
      default: return <Tag className="h-4 w-4" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-sky-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-sky-900 mb-6">
            Technical Blog
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Insights on cloud architecture, AI implementation, enterprise development, 
            and lessons learned from building scalable systems.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {filteredPosts.length} of {blogPosts.length} posts
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
                placeholder="Search blog posts..."
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

            {/* Tag Filters */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-sky-900 text-center">Filter by Tags:</h3>
              <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "secondary"}
                    className={`cursor-pointer transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                        : 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory !== 'all' || selectedTags.length > 0) && (
              <div className="text-center">
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-slate-500 hover:text-sky-700">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <Collapsible 
                key={post.id}
                open={expandedPost === post.id}
                onOpenChange={(open) => setExpandedPost(open ? post.id : null)}
              >
                <Card className={`border-sky-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 ${
                  post.featured ? 'ring-2 ring-cyan-200' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(post.category)}
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.publishedDate)}
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {post.featured && (
                          <Badge className="bg-cyan-100 text-cyan-700">Featured</Badge>
                        )}
                        <Badge className={getStatusColor(post.status)}>
                          {post.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-sky-900 leading-tight text-xl md:text-2xl mb-3">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="text-slate-600 text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-sky-700 mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-sky-100 text-sky-700 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between text-sky-700 hover:text-cyan-500 hover:bg-sky-50">
                        Read Full Post
                        {expandedPost === post.id ? 
                          <ChevronUp className="h-4 w-4" /> : 
                          <ChevronDown className="h-4 w-4" />
                        }
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="space-y-4 pt-4">
                      <div className="border-t border-sky-100 pt-6">
                        <post.component />
                      </div>
                    </CollapsibleContent>
                  </CardContent>
                </Card>
              </Collapsible>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 mb-4">No blog posts found matching your criteria.</p>
              <Button variant="outline" onClick={clearFilters} className="text-sky-700 border-sky-200">
                Clear Filters
              </Button>
            </div>
          )}

          {/* Coming Soon Notice */}
          {blogPosts.length === 1 && (
            <div className="mt-12 text-center">
              <Card className="border-sky-200 bg-sky-50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-sky-900 mb-3">More Content Coming Soon</h3>
                  <p className="text-slate-600 leading-relaxed">
                    I&rsquo;m actively working on additional blog posts covering cloud architecture patterns, 
                    AI/ML implementation strategies, and detailed technical insights from enterprise projects. 
                    Check back soon for more in-depth content!
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}