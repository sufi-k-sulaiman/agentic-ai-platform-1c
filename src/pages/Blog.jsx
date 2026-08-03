import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Calendar, Clock, ArrowRight, User, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

import { posts } from '@/lib/blogIndexPosts';
import InternalLinker from '@/components/seo/InternalLinker';


export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedPosts, setDisplayedPosts] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory);

  const postsToShow = filteredPosts.slice(0, displayedPosts);
  const hasMore = displayedPosts < filteredPosts.length;

  useEffect(() => {
    setDisplayedPosts(12);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, displayedPosts]);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedPosts(prev => prev + 9);
      setIsLoading(false);
    }, 800);
  };

  return (
        <InternalLinker currentPage="Blog">
    <div className="bg-white">
      <PageMeta 
        title="Blog"
        description="Insights, tutorials, and stories from the forefront of enterprise AI. Learn about Agentic AI, autonomous agents, implementation strategies, and digital transformation."
        url="/blog"
        keywords={['AI blog', 'Agentic AI articles', 'enterprise AI insights', 'AI tutorials', 'autonomous agents']}
        collectionPage
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '1C Platform Blog Articles',
            description: 'Insights, tutorials, and stories from the forefront of enterprise AI',
            numberOfItems: posts.length,
            itemListElement: posts.map((post, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: post.title,
              url: `https://1cplatform.com/${post.page}`,
              image: post.image,
            })),
          }
        ]}
      />
      {/* Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              The
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                Agentic Ai Blog
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-10">
              Insights, tutorials, and stories from the forefront of enterprise AI
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-12 sm:pl-16 pr-4 sm:pr-6 h-12 sm:h-16 text-base sm:text-lg rounded-full border-gray-300 bg-white shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 sm:py-6 border-b border-gray-200 sticky top-16 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-gray-100 rounded-full inline-flex w-auto h-auto p-1.5 gap-1">
                <TabsTrigger value="all" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">All</TabsTrigger>
                <TabsTrigger value="agentic-design" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Design</TabsTrigger>
                <TabsTrigger value="ai-autonomy" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Autonomy</TabsTrigger>
                <TabsTrigger value="ai-comparison" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Comparison</TabsTrigger>
                <TabsTrigger value="ai-governance" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Governance</TabsTrigger>
                <TabsTrigger value="generative-ai" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Generative AI</TabsTrigger>
                <TabsTrigger value="agentic-capabilities" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Capabilities</TabsTrigger>
                <TabsTrigger value="ai-insights" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Insights</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Topic Clusters */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Explore Topic Clusters</h2>
          <div className="flex flex-wrap gap-2">
            <Link to={createPageUrl('BlogCategoryAgenticCapabilities')} className="px-4 py-2 bg-purple-50 text-[#8B2EE5] rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">Agentic Capabilities</Link>
            <Link to={createPageUrl('BlogCategoryAIComparison')} className="px-4 py-2 bg-purple-50 text-[#8B2EE5] rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">AI Comparison</Link>
            <Link to={createPageUrl('BlogCategoryAgenticDesign')} className="px-4 py-2 bg-purple-50 text-[#8B2EE5] rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">Agentic Design</Link>
            <Link to={createPageUrl('BlogCategoryAIGovernance')} className="px-4 py-2 bg-purple-50 text-[#8B2EE5] rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">AI Governance</Link>
            <Link to={createPageUrl('BlogCategoryGenerativeAI')} className="px-4 py-2 bg-purple-50 text-[#8B2EE5] rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">Generative AI</Link>
            <Link to={createPageUrl('BlogCategoryAIAutonomy')} className="px-4 py-2 bg-purple-50 text-[#8B2EE5] rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">AI Autonomy</Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {postsToShow.map((post, index) => (
              <Link to={createPageUrl(post.page)} key={post.title}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 12) * 0.05 }}
                  className="group cursor-pointer"
                >
                <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Badge variant="secondary" className="mb-2 sm:mb-3 text-xs sm:text-sm">{post.category}</Badge>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#8B2EE5] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
              </Link>
            ))}
          </div>

          {/* Progressive Loader */}
          {hasMore && (
            <div ref={loaderRef} className="text-center mt-8 sm:mt-12">
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Loading more articles...</span>
                </div>
              ) : (
                <Button 
                  onClick={loadMore}
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-gray-300 px-6 sm:px-8"
                >
                  Load more articles
                </Button>
              )}
            </div>
          )}

          {!hasMore && filteredPosts.length > 12 && (
            <div className="text-center mt-8 sm:mt-12 text-gray-500">
              You've reached the end of the articles
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Never miss an update
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-10">
              Get the latest insights delivered to your inbox every week
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] h-12 px-6 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </InternalLinker>
  );
}