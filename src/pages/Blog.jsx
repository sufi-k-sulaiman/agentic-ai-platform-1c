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
    title: 'Introduction to Agentic AI Governance: A Strategic Framework',
    excerpt: 'Understand the critical importance of governance for autonomous AI agents. Learn frameworks, best practices, and how to implement effective oversight.',
    author: 'Dr. Katherine Morrison',
    date: 'January 15, 2025',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    page: 'BlogAgenticAIGovernanceIntro'
  },
  {
    title: 'Regulatory Compliance for Agentic AI: Navigating Global Requirements',
    excerpt: 'Comprehensive guide to AI regulations affecting autonomous agents. EU AI Act, US requirements, and industry-specific compliance.',
    author: 'Maria Santos',
    date: 'January 14, 2025',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    page: 'BlogAgenticAICompliance'
  },
  {
    title: 'Risk Management for Agentic AI: Identifying and Mitigating Threats',
    excerpt: 'Learn how to assess, prioritize, and mitigate risks from autonomous AI agents. Frameworks, tools, and real-world examples.',
    author: 'Robert Chen',
    date: 'January 13, 2025',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    page: 'BlogAgenticAIRiskManagement'
  },
  {
    title: 'Security and Privacy in Agentic AI: Protecting Data and Systems',
    excerpt: 'Comprehensive guide to securing autonomous AI agents, protecting sensitive data, and ensuring privacy compliance.',
    author: 'Marcus Williams',
    date: 'January 12, 2025',
    readTime: '18 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    page: 'BlogAgenticAISecurityPrivacy'
  },
  {
    title: 'Ethical Frameworks for Agentic AI: Building Responsible Systems',
    excerpt: 'Develop ethical guidelines for autonomous AI agents. Frameworks, principles, and practical implementation strategies.',
    author: 'Dr. Aisha Patel',
    date: 'January 11, 2025',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    page: 'BlogAgenticAIEthicalFrameworks'
  },
  {
    title: 'AI Agent Accountability and Transparency: Who\'s Responsible?',
    excerpt: 'Establish clear accountability for autonomous AI agents. Learn how to track decisions, explain actions, and assign responsibility.',
    author: 'Thomas Anderson',
    date: 'January 10, 2025',
    readTime: '13 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    page: 'BlogAgenticAIAccountability'
  },
  {
    title: 'Data Governance for Agentic AI: Managing Information Flows',
    excerpt: 'Control how AI agents access, use, and share data. Frameworks for data classification, access control, and lifecycle management.',
    author: 'Linda Chen',
    date: 'January 9, 2025',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    page: 'BlogAgenticAIDataGovernance'
  },
  {
    title: 'Monitoring and Auditing AI Agents: Observability Best Practices',
    excerpt: 'Learn how to monitor autonomous AI agents in production. Metrics, dashboards, alerting, and audit procedures.',
    author: 'Kevin Zhang',
    date: 'January 8, 2025',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    page: 'BlogAgenticAIMonitoring'
  },
  {
    title: 'AI Agent Access Control: Permissions and Authorization Strategies',
    excerpt: 'Implement robust access control for AI agents. Learn about RBAC, ABAC, least privilege, and managing agent permissions at scale.',
    author: 'Brian Mitchell',
    date: 'January 7, 2025',
    readTime: '12 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800',
    page: 'BlogAgenticAIAccessControl'
  },
  {
    title: 'Compliance Frameworks for Agentic AI: SOC 2, ISO, and Beyond',
    excerpt: 'Navigate compliance requirements for AI agents. SOC 2, ISO 27001, GDPR, HIPAA, and industry-specific standards.',
    author: 'Patricia Johnson',
    date: 'January 6, 2025',
    readTime: '17 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    page: 'BlogAgenticAIComplianceFrameworks'
  },
  {
    title: 'Agentic AI Governance Best Practices: Lessons from Leaders',
    excerpt: 'Learn from organizations with mature AI governance. Proven strategies, common mistakes, and practical implementation guidance.',
    author: 'Amanda Foster',
    date: 'January 5, 2025',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    page: 'BlogAgenticAIGovernanceBestPractices'
  },
  {
    title: 'Building an AI Governance Committee: Structure and Operations',
    excerpt: 'Create an effective AI governance committee. Roles, responsibilities, meeting cadence, and decision-making processes.',
    author: 'Richard Brown',
    date: 'January 4, 2025',
    readTime: '13 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
    page: 'BlogAgenticAIGovernanceCommittee'
  },
  {
    title: 'AI Model Governance: Versioning, Testing, and Lifecycle Management',
    excerpt: 'Manage AI models powering your agents. Version control, testing standards, deployment processes, and retirement procedures.',
    author: 'Dr. Nina Patel',
    date: 'January 3, 2025',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    page: 'BlogAgenticAIModelGovernance'
  },
  {
    title: 'AI Vendor Management: Assessing and Managing Third-Party AI Risks',
    excerpt: 'Evaluate and manage risks from AI/LLM vendors. Due diligence, contracts, SLAs, and ongoing vendor governance.',
    author: 'Steven Martinez',
    date: 'January 2, 2025',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800',
    page: 'BlogAgenticAIVendorManagement'
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
    date: 'December 8, 2024',
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
                1cPlatform Blog
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
      <section className="py-4 sm:py-8 border-b border-gray-200 sticky top-16 bg-white z-10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="bg-gray-100 flex-wrap sm:flex-nowrap h-auto sm:h-10 p-1 gap-1">
              <TabsTrigger value="all" className="text-xs sm:text-sm px-3 sm:px-4">All Posts</TabsTrigger>
              <TabsTrigger value="ai-governance" className="text-xs sm:text-sm px-3 sm:px-4 whitespace-nowrap">AI Governance</TabsTrigger>
              <TabsTrigger value="generative-ai" className="text-xs sm:text-sm px-3 sm:px-4 whitespace-nowrap">Generative AI</TabsTrigger>
              <TabsTrigger value="ai-insights" className="text-xs sm:text-sm px-3 sm:px-4 whitespace-nowrap">AI Insights</TabsTrigger>
              <TabsTrigger value="tutorials" className="text-xs sm:text-sm px-3 sm:px-4">Tutorials</TabsTrigger>
              <TabsTrigger value="case-studies" className="text-xs sm:text-sm px-3 sm:px-4 whitespace-nowrap">Case Studies</TabsTrigger>
              <TabsTrigger value="product" className="text-xs sm:text-sm px-3 sm:px-4">Product</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === 'all' && (
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl overflow-hidden p-8 lg:p-12"
            >
              <div className="relative aspect-video lg:aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#8B2EE5] text-white text-xs sm:text-sm">
                  Featured
                </Badge>
              </div>
              <div>
                <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm">{featuredPost.category}</Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-gray-500 mb-6 sm:mb-8 text-xs sm:text-sm">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <User className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{featuredPost.author}</span>
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link to={createPageUrl(featuredPost.page)}>
                  <Button className="w-full sm:w-auto bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full">
                    Read article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                    </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularPosts.map((post, index) => (
              <Link to={createPageUrl(post.page)} key={post.title}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
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

          {/* Load More */}
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" className="w-full sm:w-auto rounded-full border-gray-300 px-6 sm:px-8">
              Load more articles
            </Button>
          </div>
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
  );
}