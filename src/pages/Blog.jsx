import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Agentic AI in Enterprise',
    excerpt: 'How autonomous AI agents are transforming business operations and what it means for your organization.',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    featured: true
  },
  {
    title: 'Building Your First AI Agent: A Complete Guide',
    excerpt: 'Step-by-step tutorial on creating, training, and deploying your first autonomous AI agent.',
    author: 'Michael Rodriguez',
    date: 'March 12, 2024',
    readTime: '12 min read',
    category: 'Tutorials',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800'
  },
  {
    title: '5 Ways AI is Revolutionizing Customer Support',
    excerpt: 'Real-world examples of companies using AI agents to deliver exceptional customer experiences.',
    author: 'Emily Zhang',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Case Studies',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
  },
  {
    title: 'API Best Practices for Enterprise Integration',
    excerpt: 'Essential patterns and practices for integrating 1cPlatform into your existing infrastructure.',
    author: 'David Kim',
    date: 'March 8, 2024',
    readTime: '10 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'
  },
  {
    title: 'Security in AI: Our Approach to Enterprise Protection',
    excerpt: 'Deep dive into how we secure your AI workloads and protect sensitive business data.',
    author: 'Lisa Anderson',
    date: 'March 5, 2024',
    readTime: '9 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800'
  },
  {
    title: 'Scaling AI: Lessons from 500+ Enterprise Deployments',
    excerpt: 'What we\'ve learned helping organizations scale AI from pilot to production.',
    author: 'Robert Taylor',
    date: 'March 1, 2024',
    readTime: '7 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category.toLowerCase().replace(' ', '-') === activeCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              The
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                1cPlatform Blog
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Insights, tutorials, and stories from the forefront of enterprise AI
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-16 pr-6 h-16 text-lg rounded-full border-gray-300 bg-white shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-gray-200 sticky top-16 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl overflow-hidden p-8 lg:p-12"
            >
              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#8B2EE5] text-white">
                  Featured
                </Badge>
              </div>
              <div>
                <Badge variant="secondary" className="mb-4">{featuredPost.category}</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-gray-500 mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full">
                  Read article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8B2EE5] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full border-gray-300 px-8">
              Load more articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Never miss an update
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Get the latest insights delivered to your inbox every week
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] h-12 px-6">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}