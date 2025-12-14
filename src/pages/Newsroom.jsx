import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, ArrowRight, Award, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const news = [
  {
    category: 'Product Launch',
    title: 'SearchPods Debuts on iOS: Revolutionary AI-Powered Podcast Platform Transforms Complex Data into Engaging Audio Intelligence for Professionals on the Go',
    excerpt: 'Transform how you consume intelligence with SearchPods - the AI-powered podcast generator that turns complex data into engaging audio insights on demand.',
    date: 'December 14, 2024',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800',
    icon: Zap,
    link: 'https://apps.apple.com/us/app/searchpods/id6756348023'
  },
  {
    category: 'Product Launch',
    title: 'Neural Mindmap Arrives on iOS: Brain-Inspired Visualization Technology Helps Teams Organize Complex Ideas and Unlock Creative Problem-Solving Through AI',
    excerpt: 'Neural Mindmap brings AI-powered mind mapping to iOS, helping you organize thoughts, connect ideas, and unlock creative insights with neural-inspired visualization.',
    date: 'December 14, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    icon: Zap,
    link: 'https://apps.apple.com/us/app/neural-mindmap/id6756198559'
  },
  {
    category: 'Product Launch',
    title: 'RoutineOps Launches on iOS: Intelligent Workflow Automation Platform Eliminates Repetitive Tasks and Saves Professionals Hours Every Week with Smart AI',
    excerpt: 'RoutineOps arrives on iOS to help professionals streamline daily tasks, automate repetitive workflows, and boost productivity with intelligent automation.',
    date: 'December 14, 2024',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    icon: Zap,
    link: 'https://apps.apple.com/us/app/routineops/id6756257586'
  },
  {
    category: 'Press Release',
    title: '1cPublishing\'s Agentic AI Platform Revolutionizes Market Intelligence: Real-Time Analytics, Predictive Insights, and Unified Data Streams Power Next-Gen Strategic Decisions',
    excerpt: 'Discover how Agentic AI is transforming market intelligence by providing real-time insights, predictive analytics, and unified data streams for strategic decision-making.',
    date: 'December 12, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    icon: TrendingUp
  },
  {
    category: 'Press Release',
    title: '1cPublishing Unveils Agentic AI: Integrated Intelligence Platform Consolidates Multiple Data Streams and Business Tools into Single Unified Ecosystem',
    excerpt: 'Explore how 1cPublishing\'s Agentic AI ushers in a new era of integrated intelligence by consolidating multiple data streams and tools into one cohesive platform.',
    date: 'December 10, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    icon: Zap
  },
  {
    category: 'Product Launch',
    title: 'Breaking the "12-App Trap": 1cPublishing\'s Agentic AI Unifies Workflows, Data Visualization, Market Intelligence, Geospatial Analysis, and AI Podcasts in One Platform',
    excerpt: 'New Agentic AI platform consolidates workflows, data visualization, real-time market intelligence, geospatial analysis, and AI podcast generation into a unified solution for professionals.',
    date: 'December 10, 2024',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    icon: Zap
  },
  {
    category: 'Product Launch',
    title: 'SearchPods by 1cPublishing Disrupts Intelligence Consumption: AI-Generated Audio Podcasts Deliver Complex Market Insights in Engaging, Digestible Format',
    excerpt: 'SearchPods revolutionizes how professionals consume intelligence through AI-generated podcasts that deliver on-demand insights in an engaging audio format.',
    date: 'December 11, 2024',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800',
    icon: Zap
  },
  {
    category: 'Press Release',
    title: 'Industry Analysis: Search Pods Emerges as Leading On-Demand Intelligence Solution, Converting Complex Data into Actionable Audio Insights for Mobile Professionals',
    excerpt: 'Search Pods transforms complex data into digestible audio intelligence, making it easier for busy professionals to stay informed on-the-go.',
    date: 'December 11, 2024',
    image: 'https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?w=800',
    icon: TrendingUp
  },
  {
    category: 'Product Launch',
    title: 'Geospatial Intelligence Breakthrough: 1cPublishing\'s Agentic AI Platform Delivers Advanced Location-Based Analytics and Real-Time Spatial Data Visualization',
    excerpt: 'Discover how 1cPublishing\'s Agentic AI brings powerful geospatial intelligence capabilities, enabling location-based insights and spatial data analysis.',
    date: 'December 9, 2024',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800',
    icon: Zap
  },
  {
    category: 'Press Release',
    title: 'Enterprise Geospatial Intelligence Gets Major Upgrade: 1cPublishing\'s Agentic AI Delivers Unprecedented Clarity in Location-Based Data Analysis and Strategic Mapping',
    excerpt: 'New geospatial intelligence features provide unprecedented clarity in location-based data analysis and visualization for enterprise decision-makers.',
    date: 'December 9, 2024',
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800',
    icon: TrendingUp
  },
  {
    category: 'Press Release',
    title: 'Data Strategy Transformation: Neural-Inspired Mind Mapping Becomes Essential Tool for Knowledge Workers, Revolutionizing How Teams Process Complex Information',
    excerpt: 'Explore how neural-inspired mind mapping technology is transforming modern data strategy and becoming essential for knowledge workers and data teams.',
    date: 'December 8, 2024',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    icon: TrendingUp
  },
  {
    category: 'Press Release',
    title: 'Continuous Learning AI: 1cPublishing\'s Adaptive Intelligence Platform Democratizes Data Access Through Self-Improving Algorithms That Learn from User Behavior',
    excerpt: 'AI-powered learning capabilities enable continuous improvement and adaptation, making data intelligence more accessible and actionable for all users.',
    date: 'December 8, 2024',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    icon: TrendingUp
  },
  {
    category: 'Press Release',
    title: 'The Digital Intelligence Revolution: How AI-Powered Platforms Are Fundamentally Reshaping Enterprise Data Processing, Analysis, and Decision-Making Workflows',
    excerpt: 'The future of digital intelligence is here. Discover how AI-powered platforms are fundamentally changing how organizations process, analyze, and act on information.',
    date: 'December 7, 2024',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    icon: TrendingUp
  },
  {
    category: 'Press Release',
    title: 'B2B Cost Revolution: 1C Publishing\'s Agentic AI Platform Cuts Operating Expenses by 40% While Unifying Disparate Workflows into Single Intelligent Ecosystem',
    excerpt: '1C Publishing has developed an Agentic Ai platform designed to unify workflows within a single intelligent ecosystem, reducing operational complexity and costs.',
    date: 'January 10, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    icon: TrendingUp
  },
  {
    category: 'Product Launch',
    title: 'Market Intelligence Meets AI: 1cPublishing Unveils Agentic Platform That Analyzes Stock Markets in Real-Time and Amplifies Productivity Through Advanced Knowledge Visualization',
    excerpt: 'Platform powered by Agentic Ai that reviews stock markets and boosts productivity through powerful knowledge visualization and exploration.',
    date: 'December 20, 2024',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    icon: Zap
  },
  {
    category: 'Product Launch',
    title: 'Next-Gen Mind Mapping Technology: 1cPublishing\'s Agentic AI Transforms Data Intelligence and Workflow Automation Through Brain-Inspired Network Visualization',
    excerpt: 'Exploring how 1cPublishing\'s innovative approach to mind mapping and AI-powered data intelligence is revolutionizing workflow automation and business insights.',
    date: 'January 8, 2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    icon: Zap
  },
  {
    category: 'Press Release',
    title: 'Future of Work Arrives: Deep Dive into How 1cPublishing\'s Agentic AI Platform Is Pioneering Intelligent Workflow Integration and Autonomous Task Management',
    excerpt: 'In-depth look at how 1cPublishing\'s Agentic AI platform is transforming the future of work through intelligent automation and seamless workflow integration.',
    date: 'January 5, 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    icon: TrendingUp
  },
  {
    category: 'Product Launch',
    title: 'Dual iOS Launch: 1C Publishing Releases RoutineOps Workflow Optimizer and Neural Mindmap Visualization Tool Built on Brain-Inspired Technology for Creative Teams',
    excerpt: 'Built on neural-inspired mapping technology to optimize daily workflows and ignite new ideas. Allows users to capture thoughts in real time and organize complex projects.',
    date: 'December 15, 2024',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    icon: Zap
  },
  {
    category: 'Press Release',
    title: '1cPlatform Raises $200M Series D at $2.5B Valuation',
    excerpt: 'Funding to accelerate development of autonomous AI agents and global expansion.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    icon: TrendingUp
  },
  {
    category: 'Product Launch',
    title: 'Introducing Agentic AI Platform 2.0',
    excerpt: 'Next-generation autonomous agents with enhanced reasoning and decision-making capabilities.',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    icon: Zap
  },
  {
    category: 'Award',
    title: '1cPlatform Named Leader in Gartner Magic Quadrant',
    excerpt: 'Recognized for completeness of vision and ability to execute in enterprise AI.',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    icon: Award
  },
  {
    category: 'Partnership',
    title: 'Strategic Partnership with Microsoft Azure',
    excerpt: 'Integration brings enterprise AI to 90% of Fortune 500 companies.',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800',
    icon: Users
  },
  {
    category: 'Press Release',
    title: 'Q4 Revenue Grows 125% Year-Over-Year',
    excerpt: 'Strong performance driven by enterprise adoption of AI automation.',
    date: 'February 15, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    icon: TrendingUp
  },
  {
    category: 'Product Launch',
    title: 'Enterprise Security Suite Released',
    excerpt: 'Bank-grade encryption and compliance tools for regulated industries.',
    date: 'February 1, 2024',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    icon: Zap
  }
];

export default function Newsroom() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredNews = activeTab === 'all' 
    ? news 
    : news.filter(item => item.category.toLowerCase().replace(' ', '-') === activeTab);

  return (
    <div className="bg-white">
      <PageMeta 
        title="Newsroom"
        description="Latest news, product launches, and company updates from 1cPlatform. Stay informed about AI innovation and enterprise transformation."
        url="/newsroom"
        keywords={['newsroom', 'press releases', 'company news', 'product updates', 'AI news']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-[#8B2EE5] font-semibold mb-6">NEWSROOM</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Latest news
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                and updates
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Stay informed about product launches, company milestones, and industry insights.
            </p>
            <div className="flex gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-6 rounded-full border-2 border-[#8B2EE5]/20 focus:border-[#8B2EE5] focus:outline-none transition-colors"
              />
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-12">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">All News</TabsTrigger>
              <TabsTrigger value="press-release">Press Releases</TabsTrigger>
              <TabsTrigger value="product-launch">Product</TabsTrigger>
              <TabsTrigger value="award">Awards</TabsTrigger>
              <TabsTrigger value="partnership">Partnerships</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Story */}
      {filteredNews.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl overflow-hidden p-8 lg:p-12"
            >
              <div>
                <Badge className="bg-[#8B2EE5] text-white mb-4">{filteredNews[0].category}</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {filteredNews[0].title}
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {filteredNews[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-gray-500 mb-8">
                  <Calendar className="w-5 h-5" />
                  <span>{filteredNews[0].date}</span>
                </div>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full">
                  Read full story <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden">
                <img
                  src={filteredNews[0].image}
                  alt={filteredNews[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(1).map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-[#8B2EE5]" />
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-3">{item.category}</Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#8B2EE5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No news items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Media inquiries</h2>
          <p className="text-xl text-gray-600 mb-8">
            For press inquiries or interview requests, please contact our media team
          </p>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-14 text-lg">
                Contact media team <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}