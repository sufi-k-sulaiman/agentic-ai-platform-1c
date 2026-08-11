import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Zap, Bot, Network, Shield, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ContentHub from '@/components/seo/ContentHub';
import FAQSection from '@/components/seo/FAQSection';
import InternalLinker from '@/components/seo/InternalLinker';
import { createPageUrl } from '@/utils';

/**
 * AIAutomation - Topic cluster pillar page for "AI Automation".
 *
 * Serves as the pillar/hub page for the AI Automation topic cluster,
 * linking to all related blog posts, product pages, and resources.
 * Establishes topical authority for search engines.
 */
export default function AIAutomation() {
  const pillarFaqs = [
    { question: 'What is AI automation?', answer: 'AI automation uses artificial intelligence to automate complex business processes that traditionally require human judgment. Unlike rule-based automation (RPA), AI automation uses machine learning, natural language processing, and autonomous agents to handle variable, unstructured tasks—adapting to new situations without explicit programming.' },
    { question: 'How is AI automation different from traditional automation?', answer: 'Traditional automation (RPA) follows predefined rules—if X, then Y. AI automation uses reasoning and learning to handle ambiguity, make decisions, and adapt to new inputs. AI automation can read documents, understand intent, make recommendations, and orchestrate multi-step workflows that traditional automation cannot.' },
    { question: 'What are the benefits of AI automation?', answer: 'AI automation delivers 40–70% reduction in manual processing costs, 30–50% productivity improvements, 24/7 operations, reduced errors, improved compliance, and scalability without proportional headcount growth. Most organizations see payback within 3–6 months of deployment.' },
    { question: 'What processes can be automated with AI?', answer: 'AI automation excels at document processing, customer support, data entry and validation, scheduling, compliance monitoring, financial analysis, supply chain optimization, HR processes, IT operations, and any multi-step workflow involving unstructured data or decision-making.' },
    { question: 'How do I get started with AI automation?', answer: 'Start by identifying high-volume, repetitive processes with clear inputs and outputs. Use 1C Platform\'s no-code agent builder to create your first automation, connect it to your existing systems, and deploy with proper governance. Most organizations start with a pilot in 4–8 weeks and scale from there.' },
    { question: 'Is AI automation secure and compliant?', answer: 'Yes. 1C Platform includes built-in AI governance with role-based access control, audit trails, compliance frameworks (SOC 2, ISO, HIPAA), and real-time monitoring. Every automated action is logged, reviewable, and reversible—ensuring security and compliance for regulated industries.' },
  ];

  const clusters = [
    {
      label: 'Agentic AI Fundamentals',
      category: 'blog',
      filter: (p) => p.keywords?.includes('ai-insights') || p.keywords?.includes('agentic-capabilities'),
      limit: 5,
    },
    {
      label: 'AI Governance & Compliance',
      category: 'blog',
      filter: (p) => p.keywords?.includes('ai-governance'),
      limit: 5,
    },
    {
      label: 'AI Autonomy & Decision-Making',
      category: 'blog',
      filter: (p) => p.keywords?.includes('ai-autonomy'),
      limit: 5,
    },
    {
      label: 'Generative AI & LLMs',
      category: 'blog',
      filter: (p) => p.keywords?.includes('generative-ai'),
      limit: 5,
    },
  ];

  return (
    <InternalLinker currentPage="AIAutomation">
      <div className="bg-white">
        <PageMeta
          title="AI Automation: The Complete Guide to Automating Business with AI"
          description="Comprehensive guide to AI automation. Learn how autonomous AI agents automate complex business workflows, reduce costs by 40-70%, and transform enterprise operations."
          url="/ai-automation"
          keywords={['AI automation', 'business automation', 'agentic AI', 'autonomous agents', 'workflow automation', 'enterprise AI', 'process automation', 'intelligent automation']}
          image="https://images.unsplash.com/photo-1620712949828-7e7e8d3b5e0f?w=1200&h=630&fit=crop"
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'AI Automation', url: '/ai-automation' },
          ]}
          faq={pillarFaqs}
          collectionPage={true}
        />

        <div className="max-w-7xl mx-auto px-6 pt-8">
          <BreadcrumbNav items={[{ label: 'Home', page: 'Home' }, { label: 'AI Automation' }]} />
        </div>

        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Topic Cluster: AI Automation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                AI Automation
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                The complete guide to automating business processes with autonomous AI agents. Reduce costs by 40–70%, improve productivity by 30–50%, and scale operations without proportional headcount growth.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-10 h-14 text-lg font-medium">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                    Calculate Your ROI
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '40-70%', label: 'Cost Reduction' },
                { value: '30-50%', label: 'Productivity Gain' },
                { value: '3-6 mo', label: 'Payback Period' },
                { value: '500+', label: 'Enterprises Served' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#8B2EE5] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What is AI Automation */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is AI Automation?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              AI automation is the use of artificial intelligence—particularly autonomous AI agents—to automate complex business processes that traditionally require human judgment. Unlike traditional rule-based automation (RPA) which follows rigid if-then logic, AI automation uses machine learning, natural language processing, and reasoning to handle variable, unstructured tasks that adapt to new situations without explicit programming.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The shift from traditional automation to AI automation represents a fundamental change in what businesses can automate. Where RPA handles repetitive, predictable tasks, AI automation handles cognitive tasks: reading and understanding documents, making decisions based on context, communicating with customers, and orchestrating multi-step workflows that span multiple systems and departments.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              1C Platform's approach to AI automation centers on agentic AI—autonomous agents that can plan, reason, use tools, and coordinate with other agents. This enables automation of end-to-end business processes rather than individual tasks, delivering transformative ROI rather than incremental efficiency gains.
            </p>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-semibold mb-4">
                Key Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What AI Automation Can Do</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Bot, title: 'Autonomous Agents', desc: 'AI agents that plan, decide, and act independently on multi-step workflows without human intervention.' },
                { icon: Network, title: 'Multi-Agent Systems', desc: 'Coordinate multiple specialized agents that collaborate to solve complex problems end-to-end.' },
                { icon: Shield, title: 'Governance & Compliance', desc: 'Built-in audit trails, access controls, and compliance frameworks for secure, regulated deployments.' },
                { icon: BarChart, title: 'Observability & Metrics', desc: 'Real-time monitoring, performance metrics, and AI governance dashboards for continuous improvement.' },
              ].map((cap, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-xl border border-gray-200"
                >
                  <cap.icon className="w-10 h-10 text-[#8B2EE5] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                  <p className="text-gray-600">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Hub - Topic Cluster */}
        <ContentHub
          currentPage="AIAutomation"
          title="AI Automation Resources"
          subtitle="Explore our comprehensive library of articles, guides, and tutorials on AI automation."
          clusters={clusters}
        />

        {/* FAQ */}
        <FAQSection
          title="AI Automation FAQ"
          subtitle="Answers to common questions about automating business processes with AI."
          faqs={pillarFaqs}
        />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-6 text-purple-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Automating with AI Today
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Join 500+ enterprises using 1C Platform to automate complex workflows with autonomous AI agents.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-10 h-14 text-lg">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('AgenticAI')}>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                  Explore Platform
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <RelatedContent
          currentPage="AIAutomation"
          category="product"
          crossCategories={['resources', 'industry']}
          title="Explore Related Solutions"
        />
      </div>
    </InternalLinker>
  );
}