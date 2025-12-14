import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const posts = [
  {
    title: 'Introduction to Generative AI: A Complete Guide',
    excerpt: 'Discover what generative AI is, how it works, and why it\'s transforming industries. Learn about the technology behind ChatGPT, DALL-E, and more.',
    author: 'Sarah Chen',
    date: 'December 10, 2024',
    readTime: '10 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    featured: true,
    page: 'BlogGenerativeAIIntro'
  },
  {
    title: 'Generative AI vs Traditional AI: Key Differences Explained',
    excerpt: 'Understand the fundamental differences between generative and traditional AI, their use cases, and which one is right for your business needs.',
    author: 'Michael Rodriguez',
    date: 'December 9, 2024',
    readTime: '12 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    page: 'BlogGenerativeAIvsTraditional'
  },
  {
    title: 'Understanding Large Language Models: GPT, Claude, and Beyond',
    excerpt: 'A comprehensive guide to large language models, how they work, and how businesses are using them to transform operations.',
    author: 'Dr. Emily Wang',
    date: 'December 8, 2024',
    readTime: '15 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800',
    page: 'BlogLLMGuide'
  },
  {
    title: 'Generative AI for Content Creation: A Practical Guide',
    excerpt: 'Learn how to leverage generative AI for creating high-quality content at scale. Tips, tools, and best practices for marketers and creators.',
    author: 'Jessica Martinez',
    date: 'December 7, 2024',
    readTime: '11 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    page: 'BlogGenerativeAIContent'
  },
  {
    title: 'AI-Powered Code Generation: Accelerating Software Development',
    excerpt: 'Learn how AI code assistants like GitHub Copilot are transforming software development. Best practices, limitations, and real-world examples.',
    author: 'Alex Thompson',
    date: 'December 6, 2024',
    readTime: '13 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    page: 'BlogGenerativeAICode'
  },
  {
    title: 'AI Image Generation: From DALL-E to Midjourney',
    excerpt: 'Explore how AI image generators are revolutionizing design. Learn about the technology, tools, and best practices for creating stunning visuals.',
    author: 'Rachel Kim',
    date: 'December 5, 2024',
    readTime: '14 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1706885093476-b1e54f26d597?w=800',
    page: 'BlogGenerativeAIImages'
  },
  {
    title: 'Ethics and Bias in Generative AI: A Responsible AI Guide',
    excerpt: 'Navigate the ethical challenges of generative AI. Learn about bias, fairness, transparency, and building responsible AI systems.',
    author: 'Dr. James Carter',
    date: 'December 4, 2024',
    readTime: '16 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    page: 'BlogGenerativeAIEthics'
  },
  {
    title: 'Generative AI for Business Automation: ROI and Use Cases',
    excerpt: 'Discover how enterprises are using generative AI to automate processes, reduce costs, and drive growth. Real use cases and ROI metrics.',
    author: 'David Park',
    date: 'December 3, 2024',
    readTime: '14 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    page: 'BlogGenerativeAIBusiness'
  },
  {
    title: 'Fine-Tuning Generative AI Models: A Practical Guide',
    excerpt: 'Learn how to customize generative AI models for your specific needs through fine-tuning. Techniques, best practices, and real-world examples.',
    author: 'Dr. Lisa Anderson',
    date: 'December 2, 2024',
    readTime: '17 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    page: 'BlogGenerativeAIFineTuning'
  },
  {
    title: 'The Future of Generative AI: Trends and Predictions for 2025-2030',
    excerpt: 'Explore where generative AI is heading. From multimodal models to autonomous agents, discover the trends shaping the next 5 years.',
    author: 'Dr. Sarah Chen',
    date: 'December 1, 2024',
    readTime: '18 min read',
    category: 'Generative AI',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
    page: 'BlogGenerativeAIFuture'
  },
  {
    title: 'Introduction to Agentic AI Governance: Why It Matters',
    excerpt: 'Understanding the critical role of governance in deploying autonomous AI agents. Framework, principles, and organizational requirements.',
    author: 'Dr. Michael Harrison',
    date: 'December 20, 2024',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    page: 'BlogAgenticAIGovernanceIntro'
  },
  {
    title: 'Navigating AI Regulations: Compliance Guide for Agentic Systems',
    excerpt: 'Comprehensive overview of global AI regulations including EU AI Act, US guidelines, and industry-specific requirements for autonomous agents.',
    author: 'Elena Rodriguez, J.D.',
    date: 'December 19, 2024',
    readTime: '18 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    page: 'BlogAIComplianceRegulations'
  },
  {
    title: 'AI Risk Management: Identifying and Mitigating Agentic AI Risks',
    excerpt: 'Framework for assessing, monitoring, and mitigating risks in autonomous AI agent deployments. Practical strategies for enterprise risk management.',
    author: 'Robert Chen, CRO',
    date: 'December 18, 2024',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800',
    page: 'BlogAIRiskManagement'
  },
  {
    title: 'Data Governance for Agentic AI: Managing Training Data and Agent Access',
    excerpt: 'Best practices for governing data used by autonomous AI agents, from training datasets to runtime access controls.',
    author: 'Patricia Wong',
    date: 'December 17, 2024',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    page: 'BlogAIDataGovernance'
  },
  {
    title: 'AI Audit Frameworks: Ensuring Accountability in Autonomous Systems',
    excerpt: 'How to audit autonomous AI agents for performance, compliance, and ethical behavior. Frameworks, checklists, and automation strategies.',
    author: 'Dr. Thomas Miller',
    date: 'December 16, 2024',
    readTime: '17 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    page: 'BlogAIAuditFrameworks'
  },
  {
    title: 'Creating AI Governance Policies: Templates and Best Practices',
    excerpt: 'Step-by-step guide to developing comprehensive AI governance policies for autonomous agents. Includes templates and real-world examples.',
    author: 'Amanda Foster',
    date: 'December 15, 2024',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    page: 'BlogAIGovernancePolicies'
  },
  {
    title: 'AI Accountability: Who\'s Responsible When Agents Make Mistakes?',
    excerpt: 'Exploring accountability frameworks for autonomous AI systems. Legal liability, organizational responsibility, and practical risk allocation.',
    author: 'Marcus Thompson, J.D.',
    date: 'December 14, 2024',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    page: 'BlogAIAccountability'
  },
  {
    title: 'Security Governance for Agentic AI: Protecting Autonomous Systems',
    excerpt: 'Comprehensive security governance framework for autonomous AI agents. Threat models, controls, and incident response strategies.',
    author: 'James Liu, CISO',
    date: 'December 13, 2024',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    page: 'BlogAISecurityGovernance'
  },
  {
    title: 'Privacy Governance for Agentic AI: GDPR, CCPA Compliance',
    excerpt: 'Navigate privacy regulations for autonomous AI agents. Practical strategies for GDPR, CCPA compliance and privacy-preserving AI systems.',
    author: 'Maria Santos, Privacy Officer',
    date: 'December 12, 2024',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
    page: 'BlogAIPrivacyGovernance'
  },
  {
    title: 'AI Governance Best Practices: Lessons from Leading Organizations',
    excerpt: 'Learn from organizations successfully governing autonomous AI. Proven strategies, common pitfalls, and practical recommendations.',
    author: 'Katherine Brooks',
    date: 'December 11, 2024',
    readTime: '13 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    page: 'BlogAIGovernanceBestPractices'
  },
  {
    title: 'Building AI Governance Teams: Roles, Skills, and Structure',
    excerpt: 'How to staff and organize your AI governance function. Key roles, required skills, team structures, and hiring strategies.',
    author: 'Daniel Chen',
    date: 'December 10, 2024',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    page: 'BlogAIGovernanceTeams'
  },
  {
    title: 'AI Governance Metrics: Measuring and Reporting Effectiveness',
    excerpt: 'Key performance indicators for AI governance. How to measure effectiveness, report to stakeholders, and drive continuous improvement.',
    author: 'Victoria Park',
    date: 'December 9, 2024',
    readTime: '12 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    page: 'BlogAIGovernanceMetrics'
  },
  {
    title: 'AI Governance Tools and Platforms: Technology Stack Guide',
    excerpt: 'Comprehensive guide to tools and platforms for AI governance. From monitoring to compliance automation, build your governance technology stack.',
    author: 'Chris Anderson',
    date: 'December 8, 2024',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    page: 'BlogAIGovernanceTools'
  },
  {
    title: 'AI Incident Response: Handling Autonomous Agent Failures',
    excerpt: 'Comprehensive guide to managing AI incidents. Detection, response procedures, root cause analysis, and prevention strategies.',
    author: 'Jennifer Taylor',
    date: 'December 7, 2024',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800',
    page: 'BlogAIGovernanceIncidents'
  },
  {
    title: 'The Future of AI Governance: Emerging Trends and Predictions',
    excerpt: 'Where AI governance is heading. Automated governance, regulatory evolution, and preparing for autonomous AI at scale.',
    author: 'Dr. Rachel Kim',
    date: 'December 6, 2024',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    page: 'BlogAIGovernanceFuture'
  },
  {
    title: 'The Rise of Agentic AI: A Game Changer for Enterprises',
    excerpt: 'Discover how autonomous AI agents are transforming enterprise operations and enabling intelligent decision-making.',
    author: 'Sarah Chen',
    date: 'November 10, 2024',
    readTime: '12 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    page: 'BlogAgenticAIEnterprise'
  },
  {
    title: 'How Autonomous Agents are Revolutionizing Business Operations',
    excerpt: 'Explore the transformative power of autonomous AI agents in modern business operations.',
    author: 'Michael Rodriguez',
    date: 'November 8, 2024',
    readTime: '10 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    page: 'BlogAutonomousAgents'
  },
  {
    title: 'Designing Effective Multi-Agent Systems: A Practical Guide',
    excerpt: 'Master the art of building multi-agent AI systems with orchestration patterns and best practices.',
    author: 'Dr. Emily Zhang',
    date: 'December 5, 2024',
    readTime: '15 min read',
    category: 'Tutorials',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    page: 'BlogMultiAgentSystems'
  },
  {
    title: 'No-Code Agentic AI: Empowering Every Business User',
    excerpt: 'Discover how no-code platforms democratize AI agent development for business users.',
    author: 'David Kim',
    date: 'December 3, 2024',
    readTime: '9 min read',
    category: 'Tutorials',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    page: 'BlogNoCodeAgenticAI'
  },
  {
    title: 'Ensuring Trust and Security in Agentic AI Deployments',
    excerpt: 'Comprehensive guide to securing autonomous AI agents in enterprise environments.',
    author: 'Lisa Anderson',
    date: 'November 28, 2024',
    readTime: '11 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    page: 'BlogAgenticAISecurity'
  },
  {
    title: 'Measuring the ROI of Your Agentic AI Investment',
    excerpt: 'Learn how to calculate, track, and maximize returns from autonomous AI agents with proven frameworks.',
    author: 'Robert Taylor',
    date: 'November 25, 2024',
    readTime: '13 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    page: 'BlogAgenticAIROI'
  },
  {
    title: 'The Future of Work: Human-AI Collaboration with Agentic Systems',
    excerpt: 'Explore how humans and AI agents will work together in the future workplace.',
    author: 'Jennifer Martinez',
    date: 'November 20, 2024',
    readTime: '10 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    page: 'BlogHumanAICollaboration'
  },
  {
    title: 'From Automation to Autonomy: The Evolution of AI in Business',
    excerpt: 'Trace the journey from simple automation to autonomous AI systems and understand the technological leaps.',
    author: 'Dr. Marcus Chen',
    date: 'November 15, 2024',
    readTime: '14 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    page: 'BlogAutomationToAutonomy'
  },
  {
    title: '10 Proven Use Cases for Agentic AI in Enterprise Operations',
    excerpt: 'Explore real-world applications of autonomous AI agents across departments with implementation guides.',
    author: 'Alexandra Moore',
    date: 'November 12, 2024',
    readTime: '16 min read',
    category: 'Case Studies',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    page: 'BlogAgenticAIUseCases'
  },
  {
    title: 'Ethical Considerations in Deploying Autonomous AI Agents',
    excerpt: 'Navigate the ethical challenges of agentic AI with frameworks for responsible deployment.',
    author: 'Dr. Priya Sharma',
    date: 'November 8, 2024',
    readTime: '12 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    page: 'BlogAgenticAIEthics'
  },
  {
    title: 'Scaling Agentic AI from Pilot to Production: Lessons Learned',
    excerpt: 'Learn from 500+ enterprise deployments. Strategies for scaling AI agents and achieving adoption.',
    author: 'James O\'Connor',
    date: 'November 1, 2024',
    readTime: '15 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    page: 'BlogAgenticAIScaling'
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
      <PageMeta 
        title="Blog"
        description="Insights, tutorials, and stories from the forefront of enterprise AI. Learn about Agentic AI, autonomous agents, implementation strategies, and digital transformation."
        url="/blog"
        keywords={['AI blog', 'Agentic AI articles', 'enterprise AI insights', 'AI tutorials', 'autonomous agents']}
      />
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
              <TabsTrigger value="ai-governance">AI Governance</TabsTrigger>
              <TabsTrigger value="generative-ai">Generative AI</TabsTrigger>
              <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
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
                    <Link to={createPageUrl(featuredPost.page)}>
                    <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full">
                    Read article <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    </Link>
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
              <Link to={createPageUrl(post.page)} key={post.title}>
                <motion.article
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
              </Link>
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