import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ExternalLink, Linkedin, Globe, Award, BookOpen, Sparkles, ShoppingBag, TrendingUp, Building2 } from 'lucide-react';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';
import Top100QuestionsPromo from '@/components/seo/Top100QuestionsPromo';
import { Button } from '@/components/ui/button';

const AUTHOR = {
  name: 'Sufi Khan Sulaiman',
  role: 'Chief Technology Officer, 1C Platform',
  url: 'https://sufikhan.com/',
  linkedin: 'https://ca.linkedin.com/in/sufikhan-sulaiman',
  image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/e26495cc8_CTO.png',
  bio: [
    'Sufi Khan Sulaiman is an experienced technology executive, ecommerce strategist, and digital automation specialist with more than 20 years of experience. He is known for managing global engineering teams and building large-scale software systems that serve millions of people across North America and the Middle East.',
    'As Chief Technology Officer of 1C Platform, Sufi leads the technical vision for agentic AI, autonomous agents, and enterprise AI transformation. He architected the platform\'s agentic AI engine—combining machine learning, computer vision, and distributed systems to build autonomous AI agents that reason, plan, and act across enterprise tools for 500+ organizations.',
    'Before 1C Platform, Sufi served as Vice President of Technology and Chief Technology Officer for several enterprise brands, where he drove ecommerce revenue growth through AI-powered personalization, dynamic pricing, and autonomous operations. He writes extensively on AI automation, digital commerce strategy, and enterprise technology trends—translating decades of hands-on engineering leadership into practical guidance for business and technology leaders.',
  ],
  accomplishments: [
    {
      title: 'Executive Leadership',
      description: 'Served as Vice President (VP) of Technology and Chief Technology Officer (CTO) for several enterprise brands, setting technical direction and driving digital transformation across organizations.',
    },
    {
      title: 'Project Deliveries',
      description: 'Successfully managed the complete redesign and relaunch of the major ecommerce platform Lorex as VP of eCommerce & Digital, delivering a modern, high-performance digital storefront.',
    },
    {
      title: 'Massive Scale',
      description: 'Designs distributed computer systems using techniques like database sharding and caching to support huge amounts of traffic and millions of users across North America and the Middle East.',
    },
    {
      title: 'Team Management',
      description: 'Directed cross-functional teams of over 100 people spanning technical engineering, marketing, and operations—building and mentoring high-performing global engineering organizations.',
    },
  ],
  coreExpertise: [
    { title: 'Ecommerce & UX', description: 'Building digital storefronts focused on user experience to turn casual visitors into shoppers.', icon: ShoppingBag },
    { title: 'Artificial Intelligence', description: 'Creating autonomous software agents and AI systems to automate complex business workflows and reduce corporate costs.', icon: Sparkles },
    { title: 'Cloud Architecture', description: 'Navigating complex software setups using programming tools like Java, PHP, and TypeScript to build resilient, scalable systems.', icon: Building2 },
    { title: 'Mentorship', description: 'Developing guidebooks, workshops, and educational programs to train the next generation of online business leaders.', icon: BookOpen },
  ],
  sufikhanLinks: [
    { label: 'Professional Experience', url: 'https://sufikhan.com/experience', description: '20+ years of progressive technology leadership across global brands.' },
    { label: 'Ecommerce Strategy', url: 'https://sufikhan.com/ecommerce', description: 'End-to-end ecommerce expertise—from headless commerce to AI-powered personalization.' },
    { label: 'Articles & Insights', url: 'https://sufikhan.com/articles', description: 'Practical insights from 20+ years building enterprise systems and deploying AI at scale.' },
    { label: 'Skills & Certifications', url: 'https://sufikhan.com/skills', description: 'A comprehensive technical toolkit built over 25+ years of hands-on engineering.' },
    { label: 'Knowledge Base', url: 'https://sufikhan.com/knowledge', description: 'An interactive map of programming languages, algorithms, AI/ML, cloud, and DevOps.' },
    { label: 'Contact', url: 'https://sufikhan.com/contact', description: 'Hire Sufi K. Sulaiman for CTO and technology leadership roles.' },
  ],
  expertise: [
    'Agentic AI & Autonomous Agents',
    'Enterprise AI Architecture',
    'Ecommerce AI & Digital Commerce',
    'Machine Learning & Computer Vision',
    'Cloud-Native & Distributed Systems',
    'AI Governance & Observability',
  ],
};

const ARTICLES = [
  {
    page: 'BlogEcommerceAIAutomation',
    title: 'How AI Is Transforming Ecommerce: From Personalization to Autonomous Operations',
    excerpt: 'Discover how AI and agentic AI are revolutionizing ecommerce—from hyper-personalization and dynamic pricing to autonomous inventory management and AI-driven customer support.',
    date: 'September 14, 2025',
    readTime: '14 min read',
    category: 'Ecommerce',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  },
  {
    page: 'BlogDigitalCommerceStrategy',
    title: 'Digital Commerce in 2025: Building AI-Powered Customer Journeys',
    excerpt: 'A comprehensive guide to digital commerce strategy in 2025. Learn how AI agents power omnichannel experiences, headless commerce, composable architecture, and autonomous customer journeys.',
    date: 'September 14, 2025',
    readTime: '16 min read',
    category: 'Digital Commerce',
    icon: TrendingUp,
    image: 'https://media.base44.com/images/public/693e529a64adb72abf9804a1/3ed99b59a_generated_image.png',
  },
  {
    page: 'BlogTechTrendsEnterpriseAI',
    title: 'Enterprise Technology Trends: How AI Agents Are Reshaping Digital Infrastructure',
    excerpt: 'Explore the top enterprise technology trends of 2025. From AI agents and cloud-native architecture to edge computing and digital transformation, learn how autonomous AI is reshaping enterprise technology.',
    date: 'September 14, 2025',
    readTime: '15 min read',
    category: 'Technology',
    icon: Building2,
    image: 'https://media.base44.com/images/public/693e529a64adb72abf9804a1/572679d25_generated_image.png',
  },
  {
    page: 'Top100Questions',
    title: 'Top 100 Questions: AI, Ecommerce, Digital Commerce & Integration',
    excerpt: 'The 100 most important questions about AI, ecommerce, digital commerce, integration, customer acquisition, tech debt, current adoption, and challenges—with expert answers by Sufi Khan Sulaiman.',
    date: 'September 14, 2025',
    readTime: '45 min read',
    category: 'AI Q&A',
    icon: BookOpen,
    image: 'https://media.base44.com/images/public/693e529a64adb72abf9804a1/62d701c71_generated_image.png',
  },
];

export default function AuthorSufiKhanSulaiman() {
  // Person + ProfilePage + FAQPage JSON-LD schemas
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR.name,
    jobTitle: AUTHOR.role,
    url: `${typeof window !== 'undefined' ? window.location.origin : 'https://1cplatform.com'}/author/sufi-khan-sulaiman`,
    image: AUTHOR.image,
    sameAs: [AUTHOR.url, AUTHOR.linkedin, 'https://1cplatform.com'],
    worksFor: {
      '@type': 'Organization',
      name: '1C Platform',
      url: 'https://1cplatform.com',
    },
    knowsAbout: AUTHOR.expertise,
    description: 'Technology executive, ecommerce strategist, and digital automation specialist with 20+ years of experience. CTO of 1C Platform, building agentic AI, autonomous agents, and large-scale enterprise systems serving millions across North America and the Middle East.',
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: AUTHOR.name,
      description: AUTHOR.bio[0],
    },
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Articles by ${AUTHOR.name}`,
    itemListElement: ARTICLES.map((article, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.image,
        author: { '@type': 'Person', name: AUTHOR.name },
        datePublished: '2025-09-14',
      },
    })),
  };

  const faqSchema = [
    { question: 'Who is Sufi Khan Sulaiman?', answer: 'Sufi Khan Sulaiman is an experienced technology executive, ecommerce strategist, and digital automation specialist with more than 20 years of experience. He is the Chief Technology Officer of 1C Platform and is known for managing global engineering teams and building large-scale software systems that serve millions of people across North America and the Middle East.' },
    { question: 'What is Sufi Khan Sulaiman\'s role at 1C Platform?', answer: 'As CTO of 1C Platform, Sufi Khan Sulaiman leads the technical vision and architecture for the company\'s agentic AI engine, autonomous agents, and enterprise AI platform. He architected the platform that powers AI-driven ecommerce, digital commerce, and enterprise technology solutions for 500+ organizations.' },
    { question: 'What does Sufi Khan Sulaiman write about?', answer: 'Sufi writes about agentic AI, AI automation, ecommerce AI, digital commerce strategy, and enterprise technology trends. His articles cover AI personalization, dynamic pricing, autonomous inventory management, headless commerce, cloud-native architecture, and AI governance.' },
    { question: 'Where can I read Sufi Khan Sulaiman\'s articles?', answer: 'Sufi Khan Sulaiman\'s articles are published on the 1C Platform blog, including guides on AI in ecommerce, digital commerce strategy, enterprise technology trends, and the Top 100 Questions about AI and commerce. You can also find his work and projects at sufikhan.com.' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Sufi Khan Sulaiman — CTO, 1C Platform | AI, Ecommerce & Digital Commerce Expert"
        description="Sufi Khan Sulaiman is Chief Technology Officer of 1C Platform and an expert in agentic AI, ecommerce, and digital commerce. Read his articles on AI automation, digital commerce strategy, and enterprise technology trends."
        url="/author/sufi-khan-sulaiman"
        keywords={['Sufi Khan Sulaiman', 'Sufi K Sulaiman', '1C Platform CTO', 'AI author', 'ecommerce AI expert', 'digital commerce expert', 'agentic AI author', 'enterprise AI leader']}
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/e26495cc8_CTO.png"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Authors', url: '/author/sufi-khan-sulaiman' }, { name: 'Sufi Khan Sulaiman', url: '/author/sufi-khan-sulaiman' }]}
        faq={faqSchema}
        speakable={{ cssSelectors: ['h1', '.author-bio'] }}
        schemas={[personSchema, profilePageSchema, itemListSchema]}
      />

      <BreadcrumbNav items={[
        { label: 'About', page: 'AboutUs' },
        { label: 'Sufi Khan Sulaiman' }
      ]} />

      {/* Author Hero */}
      <section className="pt-12 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-[280px_1fr] gap-10 items-start"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg">
                <img
                  src={AUTHOR.image}
                  alt={`${AUTHOR.name} — ${AUTHOR.role}`}
                  width={280}
                  height={280}
                  loading="eager"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B2EE5]/10 text-[#8B2EE5] text-sm font-semibold mb-4">
                <Award className="w-4 h-4" />
                Author & CTO
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                {AUTHOR.name}
              </h1>
              <p className="text-xl text-[#8B2EE5] font-semibold mb-6">{AUTHOR.role}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={AUTHOR.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-[#8B2EE5] hover:text-[#8B2EE5] transition-colors text-sm font-medium"
                >
                  <Globe className="w-4 h-4" />
                  sufikhan.com
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={AUTHOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-[#8B2EE5] hover:text-[#8B2EE5] transition-colors text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
                <Link
                  to={createPageUrl('Leadership')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-[#8B2EE5] hover:text-[#8B2EE5] transition-colors text-sm font-medium"
                >
                  <Building2 className="w-4 h-4" />
                  Leadership Team
                </Link>
              </div>

              <div className="author-bio space-y-4">
                <InternalLinker currentPage="AuthorSufiKhanSulaiman">
                  <p className="text-gray-700 leading-relaxed">{AUTHOR.bio[0]}</p>
                  <p className="text-gray-700 leading-relaxed">{AUTHOR.bio[1]}</p>
                  <p className="text-gray-700 leading-relaxed">{AUTHOR.bio[2]}</p>
                </InternalLinker>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Roles & Accomplishments */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Award className="w-6 h-6 text-[#8B2EE5]" />
            Key Roles & Accomplishments
          </h2>
          <p className="text-gray-600 mb-10">Two decades of executive leadership building and scaling enterprise technology.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {AUTHOR.accomplishments.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B2EE5]" />
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Areas of Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#8B2EE5]" />
            Core Areas of Expertise
          </h2>
          <p className="text-gray-600 mb-10">Where deep engineering meets real-world business outcomes.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {AUTHOR.coreExpertise.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-xl bg-white border border-gray-200 hover:border-[#8B2EE5] transition-colors"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-[#8B2EE5]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#8B2EE5]" />
                    </div>
                    <h3 className="font-bold text-gray-900 pt-1.5">{area.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* sufikhan.com links */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <Globe className="w-6 h-6 text-[#8B2EE5]" />
            Explore More on sufikhan.com
          </h2>
          <p className="text-gray-600 mb-10">Visit Sufi Khan Sulaiman's personal site for his full portfolio, case studies, and technical knowledge base.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUTHOR.sufikhanLinks.map((link, i) => (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group block p-4 rounded-xl bg-purple-50 border border-purple-100 hover:border-[#8B2EE5] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#8B2EE5] transition-colors">{link.label}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#8B2EE5] transition-colors" />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles by Sufi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#8B2EE5]" />
            Articles by {AUTHOR.name}
          </h2>
          <p className="text-gray-600 mb-10">In-depth guides on agentic AI, ecommerce, digital commerce, and enterprise technology.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {ARTICLES.map((article, i) => {
              const Icon = article.icon;
              return (
                <motion.div
                  key={article.page}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={createPageUrl(article.page)}
                    className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#8B2EE5] hover:shadow-lg transition-all h-full"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#8B2EE5] text-xs font-semibold">
                        <Icon className="w-3.5 h-3.5" />
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B2EE5] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">{article.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1 text-[#8B2EE5] text-sm font-semibold group-hover:gap-2 transition-all">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Top100QuestionsPromo />

      <RelatedContent
        currentPage="AuthorSufiKhanSulaiman"
        manualPages={['Leadership', 'AboutUs', 'AIAutomation', 'AgenticAI']}
        title="More About 1C Platform"
      />
    </div>
  );
}