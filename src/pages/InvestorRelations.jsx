import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, TrendingUp, Users, Globe, Zap, Target, Brain, Shield, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function InvestorRelations() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Investor Relations"
        description="Invest in the future of enterprise AI. 1cPlatform is democratizing Agentic AI and transforming how businesses operate worldwide."
        url="/investor-relations"
        keywords={['investor relations', '1cPlatform investment', 'AI company', 'enterprise AI market', 'growth opportunity']}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjJFRTUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydi0yaC0ydjJ6bTItMmgydi0yaC0ydjJ6bS0yLTJoMnYtMmgtMnYyem0yLTJoMnYtMmgtMnYyem0tMi0yaC0ydjJoMnYtMnptMCAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#8B2EE5]/10 text-[#8B2EE5] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Rocket className="w-4 h-4" />
              INVEST IN THE FUTURE
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05]">
              The AI revolution
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2EE5] to-[#A855F7]">
                starts here
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed mb-10 max-w-3xl">
              1cPlatform is democratizing Agentic AI, empowering enterprises to transform operations and unlock unprecedented efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-14 text-lg">
                View investment deck <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-gray-300 px-10 h-14 text-lg">
                Contact investor relations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem - 3 Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The enterprise AI challenge
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Businesses face critical barriers preventing AI transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Technical Complexity',
                stat: '87%',
                description: 'of enterprises struggle to deploy AI due to technical barriers. Building AI agents requires ML expertise, infrastructure management, and months of development.',
                impact: '$2.5M average cost to build internal AI capabilities'
              },
              {
                title: 'Time to Value',
                stat: '12-18 mo',
                description: 'average time for traditional AI implementation. Companies lose competitive advantage while waiting for results, falling behind agile competitors.',
                impact: '40% of AI projects fail before production'
              },
              {
                title: 'Limited Scalability',
                stat: '3x',
                description: 'cost increase when scaling custom AI solutions. Maintenance, updates, and scaling drain resources that should drive business growth.',
                impact: '60% of budgets spent on maintaining legacy AI'
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100"
              >
                <div className="text-5xl font-bold text-red-600 mb-4">{problem.stat}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
                <div className="pt-4 border-t border-red-100">
                  <p className="text-sm font-semibold text-red-700">{problem.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - 4 Sections */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our solution: The 1cPlatform advantage
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We eliminate every barrier to enterprise AI adoption
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: 'No-Code AI Builder',
                description: 'Deploy production-ready AI agents in minutes without writing code. Our visual builder democratizes AI, letting business users create sophisticated automation without technical expertise.',
                benefits: ['Zero coding required', '5-minute deployment', '100+ pre-built templates', 'Drag-and-drop interface'],
                metric: '100x faster than custom development'
              },
              {
                icon: Brain,
                title: 'Advanced Multi-Agent Orchestration',
                description: 'Proprietary AI engine coordinates multiple agents working together seamlessly. Our technology handles complex workflows, decision-making, and autonomous task execution at enterprise scale.',
                benefits: ['Self-learning agents', 'Collaborative AI teams', 'Context-aware decisions', 'Continuous optimization'],
                metric: '95% task automation rate'
              },
              {
                icon: Globe,
                title: 'Enterprise-Ready Infrastructure',
                description: 'Built for scale from day one with 99.99% uptime SLA. Our platform handles millions of transactions daily with bank-grade security, compliance, and performance that enterprises demand.',
                benefits: ['SOC 2 Type II certified', 'GDPR & HIPAA compliant', 'Global CDN', 'Auto-scaling'],
                metric: '99.99% uptime guarantee'
              },
              {
                icon: TrendingUp,
                title: 'Rapid ROI & Value',
                description: 'See measurable results within weeks, not years. Our customers achieve positive ROI in under 90 days with clear metrics, reducing costs by 45% while increasing productivity by 60%.',
                benefits: ['90-day ROI', '45% cost reduction', '60% productivity gain', 'Real-time analytics'],
                metric: '3.2x average ROI in first year'
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-purple-200 shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2 mb-6">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-purple-100">
                  <p className="text-lg font-bold text-[#8B2EE5]">{solution.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Massive market opportunity
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              The enterprise AI market is exploding, and we're positioned at the forefront
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '$500B+', label: 'Total Addressable Market', sublabel: 'Global enterprise AI by 2028' },
              { value: '85%', label: 'Enterprise Adoption Gap', sublabel: 'Only 15% have deployed AI agents' },
              { value: '120%', label: 'Market CAGR', sublabel: 'Fastest growing tech segment' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100"
              >
                <div className="text-5xl font-bold text-[#8B2EE5] mb-3">{stat.value}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity - Section 2: Industry Breakdown */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Multi-billion dollar opportunities across industries
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              14 vertical markets, each representing significant revenue potential
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { industry: 'Financial Services', tam: '$85B', penetration: '8%' },
              { industry: 'Healthcare', tam: '$72B', penetration: '5%' },
              { industry: 'Retail & E-commerce', tam: '$68B', penetration: '12%' },
              { industry: 'Manufacturing', tam: '$54B', penetration: '7%' },
              { industry: 'Property Management', tam: '$42B', penetration: '4%' },
              { industry: 'Energy & Utilities', tam: '$38B', penetration: '6%' },
              { industry: 'Education', tam: '$32B', penetration: '9%' },
              { industry: 'Government', tam: '$28B', penetration: '3%' },
              { industry: 'Transportation', tam: '$24B', penetration: '5%' }
            ].map((market, index) => (
              <motion.div
                key={market.industry}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{market.industry}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Market size</span>
                  <span className="text-xl font-bold text-[#8B2EE5]">{market.tam}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AI penetration</span>
                  <span className="text-lg font-semibold text-gray-700">{market.penetration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model - 3 Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Scalable, high-margin business model
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Multiple revenue streams driving sustainable growth
            </p>
          </motion.div>

          {/* Revenue Streams */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Revenue Streams</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Subscription Revenue',
                  percentage: '65%',
                  description: 'Tiered SaaS pricing model with monthly and annual contracts. Predictable recurring revenue with 98% retention rate.',
                  pricing: ['Starter: $0/mo', 'Professional: $299/mo', 'Enterprise: Custom'],
                  growth: '+280% YoY'
                },
                {
                  title: 'Usage-Based Revenue',
                  percentage: '25%',
                  description: 'API calls, AI compute, and data processing fees. Scales automatically with customer growth and success.',
                  pricing: ['$0.01 per API call', '$5 per 1M tokens', 'Volume discounts'],
                  growth: '+350% YoY'
                },
                {
                  title: 'Professional Services',
                  percentage: '10%',
                  description: 'Implementation, custom development, and enterprise support. High-margin services accelerating enterprise adoption.',
                  pricing: ['Implementation: $25K+', 'Custom agents: $50K+', 'Training: $10K+'],
                  growth: '+180% YoY'
                }
              ].map((stream, index) => (
                <motion.div
                  key={stream.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100"
                >
                  <div className="text-4xl font-bold text-[#8B2EE5] mb-2">{stream.percentage}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{stream.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{stream.description}</p>
                  <div className="space-y-1 mb-4">
                    {stream.pricing.map((price) => (
                      <div key={price} className="text-sm text-gray-700">{price}</div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-purple-100">
                    <p className="text-sm font-bold text-green-600">{stream.growth}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Unit Economics */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strong Unit Economics</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: 'CAC', value: '$8,500', description: 'Customer acquisition cost' },
                { metric: 'LTV', value: '$89,000', description: 'Lifetime value' },
                { metric: 'LTV:CAC', value: '10.5:1', description: 'Outstanding efficiency' },
                { metric: 'Payback', value: '4 months', description: 'Fast capital return' }
              ].map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 text-center"
                >
                  <div className="text-sm font-semibold text-[#8B2EE5] mb-2">{item.metric}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Growth Levers */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Growth Levers</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Land & Expand',
                  description: 'Start with single department, expand company-wide',
                  metrics: ['140% net revenue retention', 'Average account grows 3.2x in year 2', '75% of customers upgrade within 6 months']
                },
                {
                  title: 'Product-Led Growth',
                  description: 'Free tier drives viral adoption and conversion',
                  metrics: ['35% free-to-paid conversion', '60% of new customers from referrals', '2.8 average referrals per customer']
                },
                {
                  title: 'Enterprise Sales',
                  description: 'Dedicated teams closing 6-figure deals',
                  metrics: ['$285K average enterprise contract', '4.2 month sales cycle', '92% win rate vs. competitors']
                },
                {
                  title: 'Channel Partnerships',
                  description: 'System integrators and resellers driving growth',
                  metrics: ['15+ strategic partnerships', '20% of revenue from channels', 'Expanding to 50+ partners in 2025']
                }
              ].map((lever, index) => (
                <motion.div
                  key={lever.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{lever.title}</h4>
                  <p className="text-gray-600 mb-4">{lever.description}</p>
                  <ul className="space-y-2">
                    {lever.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in 1C */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why invest in 1cPlatform?
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              We're not just building technology—we're reshaping industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: 'Leading Innovation',
                description: 'First-to-market with no-code Agentic AI platform, enabling enterprises to deploy autonomous agents in minutes, not months.'
              },
              {
                icon: TrendingUp,
                title: 'Explosive Growth',
                description: 'Triple-digit revenue growth YoY, expanding across 14 industries with proven product-market fit and customer retention above 98%.'
              },
              {
                icon: Users,
                title: 'Enterprise Traction',
                description: '10,000+ organizations trust 1cPlatform, from startups to Fortune 500 companies, with an average contract value growing 150% annually.'
              },
              {
                icon: Globe,
                title: 'Global Expansion',
                description: 'Operating in 45+ countries with localized solutions, strategic partnerships, and a scalable go-to-market engine.'
              },
              {
                icon: Shield,
                title: 'Enterprise-Grade Security',
                description: 'SOC 2 Type II, ISO 27001, GDPR compliant infrastructure giving us competitive advantage in regulated industries.'
              },
              {
                icon: Zap,
                title: 'Network Effects',
                description: 'Each deployment strengthens our AI models, creating a defensible moat that compounds over time with unmatched data advantages.'
              }
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="w-14 h-14 bg-[#8B2EE5] rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our competitive edge
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              What makes 1cPlatform the clear leader in Agentic AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'No-Code Platform', desc: 'Deploy AI agents 100x faster than competitors' },
              { icon: Brain, title: 'Advanced AI Models', desc: 'Proprietary multi-agent orchestration' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security & compliance' },
              { icon: Award, title: 'Proven Success', desc: '98% customer retention rate' }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 text-center"
              >
                <div className="w-12 h-12 bg-[#8B2EE5] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Clear competitive differentiation
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Why 1cPlatform wins against traditional solutions and competitors
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] text-white">
                  <th className="p-4 text-left rounded-tl-xl">Feature</th>
                  <th className="p-4 text-center">1cPlatform</th>
                  <th className="p-4 text-center">Custom Development</th>
                  <th className="p-4 text-center">Legacy Automation</th>
                  <th className="p-4 text-center rounded-tr-xl">AI Startups</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Time to Deploy', us: '5 minutes', custom: '12-18 months', legacy: '6-9 months', startups: '3-6 months' },
                  { feature: 'No-Code Builder', us: '✓', custom: '✗', legacy: '✗', startups: 'Partial' },
                  { feature: 'Multi-Agent Orchestration', us: '✓', custom: '✗', legacy: '✗', startups: 'Limited' },
                  { feature: 'Enterprise Security', us: 'SOC 2 + ISO', custom: 'Varies', legacy: 'Limited', startups: 'Basic' },
                  { feature: 'Scalability', us: 'Unlimited', custom: 'Complex', legacy: 'Limited', startups: 'Growing' },
                  { feature: 'Total Cost (3 years)', us: '$50K', custom: '$2.5M', legacy: '$800K', startups: '$300K' },
                  { feature: 'AI Model Quality', us: 'Best-in-class', custom: 'Varies', legacy: 'None', startups: 'Good' },
                  { feature: 'Support & Training', us: '24/7 + Dedicated', custom: 'Limited', legacy: 'Minimal', startups: 'Email only' }
                ].map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center font-bold text-[#8B2EE5]">{row.us}</td>
                    <td className="p-4 text-center text-gray-600">{row.custom}</td>
                    <td className="p-4 text-center text-gray-600">{row.legacy}</td>
                    <td className="p-4 text-center text-gray-600">{row.startups}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Moat</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Network Effects', description: 'Every deployment improves our AI models, creating compounding advantages' },
                { title: 'Switching Costs', description: 'Deep integration into workflows makes migration to competitors costly and risky' },
                { title: 'First-Mover Advantage', description: 'Market leader position with 10,000+ enterprises creates powerful brand equity' }
              ].map((moat) => (
                <div key={moat.title}>
                  <h4 className="font-bold text-gray-900 mb-2">{moat.title}</h4>
                  <p className="text-sm text-gray-600">{moat.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financials & Forecast - 2 Sections */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Financial performance & projections
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Exceptional growth trajectory with clear path to profitability
            </p>
          </motion.div>

          {/* Historical Performance */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Historical Performance</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: '2023', revenue: '$2.5M', growth: 'N/A', customers: '250', arr: '$3.2M' },
                { year: '2024', revenue: '$12.8M', growth: '+412%', customers: '2,500', arr: '$18.5M' },
                { year: '2025 (proj)', revenue: '$48M', growth: '+275%', customers: '10,000', arr: '$65M' }
              ].map((year, index) => (
                <motion.div
                  key={year.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <div className="text-2xl font-bold text-[#A855F7] mb-4">{year.year}</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-gray-400">Revenue</div>
                      <div className="text-xl font-bold">{year.revenue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Growth</div>
                      <div className="text-lg font-semibold text-green-400">{year.growth}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Customers</div>
                      <div className="text-lg">{year.customers}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">ARR</div>
                      <div className="text-lg font-semibold">{year.arr}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 5-Year Evolution Forecast */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">5-Year Evolution (2025-2030)</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Revenue & Profitability */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <h4 className="text-2xl font-bold mb-6">Revenue & Profitability</h4>
                <div className="space-y-4">
                  {[
                    { year: '2025', revenue: '$48M', margin: '-15%', status: 'Hypergrowth', focus: 'Scale sales & product' },
                    { year: '2026', revenue: '$125M', margin: '-5%', status: 'Market leader', focus: 'International expansion' },
                    { year: '2027', revenue: '$280M', margin: '+5%', status: 'Profitable', focus: 'Enterprise dominance' },
                    { year: '2028', revenue: '$520M', margin: '+15%', status: 'High margins', focus: 'Market consolidation' },
                    { year: '2029', revenue: '$850M', margin: '+22%', status: 'Category king', focus: 'Platform ecosystem' },
                    { year: '2030', revenue: '$1.2B', margin: '+28%', status: 'IPO ready', focus: 'Sustained growth' }
                  ].map((projection) => (
                    <div key={projection.year} className="flex items-center gap-4 pb-4 border-b border-white/10 last:border-0">
                      <div className="w-16 flex-shrink-0">
                        <div className="text-lg font-bold text-[#A855F7]">{projection.year}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold">{projection.revenue}</span>
                          <span className={`text-sm font-semibold ${projection.margin.startsWith('-') ? 'text-yellow-400' : 'text-green-400'}`}>
                            {projection.margin} margin
                          </span>
                        </div>
                        <div className="text-sm text-gray-400">{projection.status} • {projection.focus}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Metrics Evolution */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <h4 className="text-2xl font-bold mb-6">Key Metrics Evolution</h4>
                <div className="space-y-6">
                  {[
                    { metric: 'Enterprise Customers', y2025: '500', y2027: '5,000', y2030: '25,000' },
                    { metric: 'Countries', y2025: '45', y2027: '85', y2030: '120+' },
                    { metric: 'Team Size', y2025: '180', y2027: '800', y2030: '2,500' },
                    { metric: 'Net Revenue Retention', y2025: '140%', y2027: '150%', y2030: '155%' },
                    { metric: 'Gross Margin', y2025: '78%', y2027: '82%', y2030: '85%' }
                  ].map((item) => (
                    <div key={item.metric} className="pb-4 border-b border-white/10 last:border-0">
                      <div className="text-sm text-gray-400 mb-2">{item.metric}</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-gray-500">2025</div>
                          <div className="text-lg font-bold text-purple-300">{item.y2025}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">2027</div>
                          <div className="text-lg font-bold text-purple-200">{item.y2027}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">2030</div>
                          <div className="text-lg font-bold">{item.y2030}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Strategic Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-8 rounded-2xl border border-purple-500/30"
            >
              <h4 className="text-2xl font-bold mb-6">Strategic Milestones</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { phase: '2025-2026: Foundation', goals: ['Series B funding ($100M)', 'Expand to 85+ countries', 'Launch enterprise marketplace', '5,000 enterprise customers'] },
                  { phase: '2027-2028: Dominance', goals: ['Series C ($200M)', 'Achieve profitability', 'Strategic acquisitions', 'Platform ecosystem launch'] },
                  { phase: '2029-2030: IPO Prep', goals: ['$1B+ revenue run rate', 'Category leadership', 'Public market readiness', 'Sustainable 30%+ growth'] }
                ].map((milestone, index) => (
                  <div key={milestone.phase}>
                    <h5 className="font-bold text-[#A855F7] mb-3">{milestone.phase}</h5>
                    <ul className="space-y-2">
                      {milestone.goals.map((goal) => (
                        <li key={goal} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Trajectory */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Exceptional growth trajectory
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're experiencing hypergrowth across all key metrics, from revenue to customer acquisition, while maintaining strong unit economics and sustainable growth fundamentals.
              </p>
              <div className="space-y-4">
                {[
                  'Revenue growing 300%+ YoY',
                  'Customer base expanding 250% annually',
                  'Operating in 45+ countries',
                  'Net revenue retention above 140%',
                  'Path to profitability clear'
                ].map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#8B2EE5] flex-shrink-0" />
                    <span className="text-lg text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Milestones</h3>
              <div className="space-y-6">
                {[
                  { year: '2023', event: 'Founded, launched MVP' },
                  { year: '2024', event: 'Series A funding, 1,000+ customers' },
                  { year: '2025', event: '10,000+ customers, global expansion' },
                  { year: '2026', event: 'Series B planned, enterprise dominance' }
                ].map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="w-20 flex-shrink-0">
                      <div className="text-2xl font-bold text-[#8B2EE5]">{milestone.year}</div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="h-px bg-gradient-to-r from-[#8B2EE5] to-transparent mb-2"></div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              World-class leadership
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Proven executives with decades of experience scaling technology companies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
               name: 'Niroshi Nadarajah',
               role: 'CEO & Co-Founder',
               background: 'Former microbiology researcher at leading pharmaceutical companies, now pioneering enterprise AI transformation with a vision for autonomous business intelligence'
              },
              {
               name: 'Suf K Sulaiman',
               role: 'CTO & Co-Founder',
               background: '30+ years driving innovation across AI, hardware, and software at global tech giants. Architect of systems processing billions of transactions daily'
              },
              {
               name: 'Emily Zhang',
               role: 'Chief Product Officer',
               background: 'Veteran product leader from top enterprise software companies, instrumental in scaling platforms to millions of users globally'
              }
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#8B2EE5] font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed">{leader.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#8B2EE5] to-[#6B21A8] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Rocket className="w-20 h-20 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Join us in building the future
            </h2>
            <p className="text-2xl text-purple-100 mb-10 leading-relaxed">
              For investment inquiries, partnership opportunities, or to learn more about our vision
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-10 h-14 text-lg">
                Contact investor relations <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20">
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                  Contact us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}