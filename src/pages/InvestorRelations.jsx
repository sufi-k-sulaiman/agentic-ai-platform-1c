import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, TrendingUp, Users, Globe, Zap, Target, Brain, Shield, Award, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Maximize2, X, Download, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import jsPDF from 'jspdf';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const investmentSlides = [
  { 
    id: 'cover',
    title: '1C Platform', 
    subtitle: 'The No-Code Agentic AI Revolution',
    type: 'cover'
  },
  { 
    id: 'problem',
    title: 'The Enterprise AI Crisis', 
    subtitle: '$2.5 trillion market struggling with AI adoption',
    type: 'problem'
  },
  { 
    id: 'solution',
    title: 'What makes 1cPlatform the clear leader in Agentic AI',
    type: 'solution'
  },
  { 
    id: 'product',
    title: 'Complete AI Product Suite',
    type: 'product'
  },
  { 
    id: 'traction',
    title: 'Market Traction',
    type: 'traction'
  },
  { 
    id: 'demographics',
    title: 'Our Community',
    subtitle: 'Decision makers driving transformation',
    type: 'demographics'
  },
  { 
    id: 'growth',
    title: 'Explosive Growth',
    type: 'growth'
  },
  { 
    id: 'quarterly',
    title: 'Quarterly Profits',
    type: 'quarterly'
  },
  { 
    id: 'yearly',
    title: 'Yearly Profit Trajectory',
    type: 'yearly'
  },
  { 
    id: 'market',
    title: 'Market Opportunity',
    subtitle: '$500B+ TAM by 2030',
    type: 'market'
  },
  { 
    id: 'penetration',
    title: 'Market Penetration Strategy',
    type: 'penetration'
  },
  { 
    id: 'expansion',
    title: 'Expansion Opportunity',
    subtitle: 'Sector-by-sector breakdown',
    type: 'expansion'
  },
  { 
    id: 'international',
    title: 'International Growth Playbook',
    type: 'international'
  },
  { 
    id: 'business',
    title: 'Business Model',
    subtitle: 'Multiple high-margin revenue streams',
    type: 'business'
  },
  { 
    id: 'economics',
    title: 'Unit Economics',
    subtitle: 'Best-in-class efficiency',
    type: 'economics'
  },
  { 
    id: 'competitive',
    title: 'Competitive Advantages',
    type: 'competitive'
  },
  { 
    id: 'milestones',
    title: 'Company Milestones',
    type: 'milestones'
  },
  { 
    id: 'team',
    title: 'World-Class Team',
    type: 'team'
  },
  { 
    id: 'financials',
    title: 'Financial Projections',
    subtitle: '2025-2030 Hypergrowth',
    type: 'financials'
  },
  { 
    id: 'ask',
    title: 'The Investment',
    subtitle: 'Series B Opportunity',
    type: 'ask'
  }
];

export default function InvestorRelations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDeck, setShowDeck] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % investmentSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + investmentSlides.length) % investmentSlides.length);

  const downloadPDF = () => {
    const pdf = new jsPDF('landscape', 'mm', [297, 210]);
    const slideWidth = 297;
    const slideHeight = 210;
    
    investmentSlides.forEach((slide, index) => {
      if (index > 0) pdf.addPage();
      
      // Get gradient colors
      const gradientMap = {
        'from-purple-600 to-violet-700': ['#9333EA', '#6D28D9'],
        'from-blue-600 to-cyan-700': ['#2563EB', '#0E7490'],
        'from-red-600 to-orange-700': ['#DC2626', '#C2410C'],
        'from-green-600 to-emerald-700': ['#16A34A', '#047857'],
        'from-purple-600 to-pink-700': ['#9333EA', '#BE185D'],
        'from-indigo-600 to-purple-700': ['#4F46E5', '#7E22CE'],
        'from-yellow-600 to-orange-700': ['#CA8A04', '#C2410C'],
        'from-teal-600 to-green-700': ['#0D9488', '#15803D'],
        'from-rose-600 to-pink-700': ['#E11D48', '#BE185D'],
        'from-violet-600 to-purple-700': ['#7C3AED', '#7E22CE'],
        'from-blue-600 to-indigo-700': ['#2563EB', '#4338CA'],
        'from-emerald-600 to-teal-700': ['#059669', '#0F766E'],
        'from-amber-600 to-orange-700': ['#D97706', '#C2410C'],
        'from-cyan-600 to-blue-700': ['#0891B2', '#1D4ED8'],
        'from-violet-600 to-fuchsia-700': ['#7C3AED', '#A21CAF']
      };
      
      const [color1, color2] = gradientMap[slide.bg] || ['#9333EA', '#7E22CE'];
      
      // Background gradient
      pdf.setFillColor(color1);
      pdf.rect(0, 0, slideWidth, slideHeight, 'F');
      
      // Slide number
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(10);
      pdf.text(`Slide ${index + 1} of ${investmentSlides.length}`, slideWidth / 2, 20, { align: 'center' });
      
      // Title
      pdf.setFontSize(48);
      pdf.setFont('helvetica', 'bold');
      pdf.text(slide.title, slideWidth / 2, 70, { align: 'center', maxWidth: slideWidth - 40 });
      
      // Subtitle
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'normal');
      pdf.text(slide.subtitle, slideWidth / 2, 95, { align: 'center', maxWidth: slideWidth - 40 });
      
      // Metrics
      const metricsStartX = 40;
      const metricWidth = (slideWidth - 80) / 3;
      pdf.setFillColor(255, 255, 255, 0.1);
      
      slide.metrics.forEach((metric, idx) => {
        const x = metricsStartX + (idx * metricWidth) + (idx * 10);
        const y = 130;
        
        // Metric box with transparency
        pdf.setDrawColor(255, 255, 255);
        pdf.setLineWidth(0.5);
        pdf.roundedRect(x, y, metricWidth - 10, 50, 3, 3, 'S');
        
        // Metric value
        pdf.setFontSize(32);
        pdf.setFont('helvetica', 'bold');
        pdf.text(metric.value, x + (metricWidth - 10) / 2, y + 20, { align: 'center' });
        
        // Metric label
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'normal');
        pdf.text(metric.label, x + (metricWidth - 10) / 2, y + 35, { align: 'center', maxWidth: metricWidth - 20 });
      });
    });
    
    pdf.save('1C-Platform-Investment-Deck.pdf');
  };

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
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                alt="1C Platform" 
                className="w-16 h-16"
              />
              <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#6209e6] px-4 py-2 rounded-full text-sm font-semibold">
                <Rocket className="w-4 h-4" />
                SERIES B INVESTMENT OPPORTUNITY
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05]">
              The AI revolution
              <br />
              <span className="text-[#6209e6]">
                starts here
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed mb-10 max-w-3xl">
              1cPlatform is democratizing Agentic AI, empowering enterprises to transform operations and unlock unprecedented efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setShowDeck(true)}
                size="lg" 
                className="bg-[#6209e6] hover:bg-[#5008c5] rounded-full px-10 h-14 text-lg"
              >
                View investment deck <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="mt-4 text-gray-600 text-sm">
                email us at <a href="mailto:investor@1cplatform.com" className="text-[#6209e6] font-semibold hover:underline">investor@1cplatform.com</a>
              </div>
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
              The $2.5 trillion enterprise AI problem
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Despite massive AI investment, 87% of enterprises struggle to deploy and only 15% have successfully implemented autonomous agents. The problem is urgent—companies without AI are losing 40% market share to AI-enabled competitors.
            </p>
            <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-6 py-3">
              <div className="text-3xl font-bold text-red-600">$2.5M</div>
              <div className="text-left text-sm text-gray-700">
                <div className="font-semibold">Average cost to build internal AI</div>
                <div className="text-gray-600">12-18 months to first deployment</div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Technical Complexity',
                stat: '87%',
                description: 'of enterprises struggle to deploy AI due to technical barriers. Building AI agents requires ML expertise, infrastructure management, and months of development. Healthcare, finance, and manufacturing face even steeper challenges with compliance and safety-critical requirements.',
                impact: '$2.5M average cost + 8-12 specialized engineers needed'
              },
              {
                title: 'Time to Value',
                stat: '12-18 mo',
                description: 'average time for traditional AI implementation. McKinsey reports that during this delay, early AI adopters capture 40% market share from laggards. Companies without AI lose $1.2M annually in efficiency gaps.',
                impact: '40% of AI projects fail + $1.2M annual opportunity cost'
              },
              {
                title: 'Limited Scalability',
                stat: '3x',
                description: 'cost increase when scaling custom AI solutions. Maintenance, updates, and scaling drain resources that should drive business growth. Every new use case requires 6-9 months of additional development.',
                impact: '60% of AI budgets wasted on maintenance, not innovation'
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200"
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
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
              alt="1C Platform" 
              className="w-20 h-20 mx-auto mb-6"
            />
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our solution: The 1cPlatform advantage
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              We eliminate every barrier to enterprise AI adoption with our patented no-code platform
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3">
                <div className="text-3xl font-bold text-[#6209e6]">5 min</div>
                <div className="text-sm text-gray-700">Time to deploy</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3">
                <div className="text-3xl font-bold text-[#6209e6]">100x</div>
                <div className="text-sm text-gray-700">Faster than custom</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3">
                <div className="text-3xl font-bold text-[#6209e6]">$50K</div>
                <div className="text-sm text-gray-700">vs $2.5M custom</div>
              </div>
            </div>
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
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-bold text-[#6209e6]">{solution.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Growth Chart */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Guide of Active Users
            </h2>
            <div className="inline-flex items-center gap-3 bg-cyan-400 rounded-full px-8 py-4 mb-8">
              <div className="text-4xl font-bold text-white">$1.3B</div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={[
                  { year: '2019', users: 950000, color: '#0891B2' },
                  { year: '2020', users: 900000, color: '#0891B2' },
                  { year: '2021', users: 950000, color: '#0891B2' },
                  { year: '2022', users: 1180000, color: '#6209e6' },
                  { year: '2023', users: 1250000, color: '#6209e6' }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="year" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Bar dataKey="users" radius={[8, 8, 0, 0]}>
                    {[
                      { year: '2019', users: 950000, color: '#0891B2' },
                      { year: '2020', users: 900000, color: '#0891B2' },
                      { year: '2021', users: 950000, color: '#0891B2' },
                      { year: '2022', users: 1180000, color: '#6209e6' },
                      { year: '2023', users: 1250000, color: '#6209e6' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#0891B2]"></div>
                  <span className="text-sm text-gray-600">Early Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#6209e6]"></div>
                  <span className="text-sm text-gray-600">AI Era</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Observation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                User growth accelerated 31% after launching Agentic AI platform in 2022. Retention improved from 82% to 98% as AI automation drove measurable ROI for customers.
              </p>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-[#6209e6] mb-2">250%</div>
                <div className="text-sm text-gray-600">Average customer base growth annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Demographics */}
      <section className="py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Community
            </h2>
            <p className="text-xl text-gray-600">Decision makers driving transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { percent: 36, filled: 4, label: 'C-Suite Executives', desc: 'CEOs, CTOs, and COOs making strategic decisions' },
              { percent: 50, filled: 5, label: 'VP / Directors', desc: 'Department heads implementing AI solutions' },
              { percent: 14, filled: 2, label: 'Managers', desc: 'Team leaders optimizing operations' }
            ].map((demo, index) => (
              <motion.div
                key={demo.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
              >
                <div className="text-6xl font-bold text-gray-900 mb-4">{demo.percent}%</div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <User 
                      key={i} 
                      className={`w-6 h-6 ${i < demo.filled ? 'text-[#6209e6] fill-[#6209e6]' : 'text-gray-300 fill-gray-300'}`} 
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{demo.label}</h3>
                <p className="text-gray-600">{demo.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quarterly Profits Chart */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Quarterly Profits
            </h2>
          </motion.div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={[
                { quarter: 'Q1 2023', profit: 3, color: '#0891B2' },
                { quarter: 'Q2 2023', profit: 2, color: '#0891B2' },
                { quarter: 'Q3 2023', profit: 3, color: '#0891B2' },
                { quarter: 'Q4 2023', profit: 4, color: '#0891B2' },
                { quarter: 'Q1 2024', profit: 6, color: '#6209e6' },
                { quarter: 'Q2 2024', profit: 6, color: '#6209e6' },
                { quarter: 'Q3 2024', profit: 7, color: '#6209e6' },
                { quarter: 'Q4 2024', profit: 8, color: '#6209e6' }
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="quarter" stroke="#6B7280" />
                <YAxis stroke="#6B7280" tickFormatter={(value) => `$${value}m`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                  labelStyle={{ color: '#1F2937' }}
                  formatter={(value) => [`$${value}m`, 'Profit']}
                />
                <Bar dataKey="profit" radius={[8, 8, 0, 0]}>
                  {[
                    { color: '#0891B2' }, { color: '#0891B2' }, { color: '#0891B2' }, { color: '#0891B2' },
                    { color: '#6209e6' }, { color: '#6209e6' }, { color: '#6209e6' }, { color: '#6209e6' }
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0891B2]">+46%</div>
                <div className="text-sm text-gray-600">Early phase growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#6209e6]">+124%</div>
                <div className="text-sm text-gray-600">Post-AI launch acceleration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yearly Profit Trajectory */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Yearly Profit
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={[
                  { year: '2018', profit: 20 },
                  { year: '2019', profit: 24 },
                  { year: '2020', profit: 26 },
                  { year: '2021', profit: 28 },
                  { year: '2022', profit: 72 },
                  { year: '2023', profit: 95 },
                  { year: '2024', profit: 140 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" tickFormatter={(value) => `${value}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                    labelStyle={{ color: '#1F2937' }}
                    formatter={(value) => [`$${value}k`, 'Profit']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="profit" 
                    stroke="#6209e6" 
                    strokeWidth={3}
                    dot={{ fill: '#6209e6', r: 6, strokeWidth: 2, stroke: '#0891B2' }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white border-2 border-[#6209e6] text-gray-900 p-8 rounded-2xl mb-6">
                <div className="text-6xl font-bold mb-2 text-[#6209e6]">28%</div>
                <div className="text-xl font-semibold">KEY METRIC</div>
                <div className="text-sm mt-2">Average annual profit growth rate</div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Profit trajectory shows strong inflection point post-2021 with AI product launch driving exponential growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Penetration Strategy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Market Penetration
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                5-pronged strategy to increase market share and dominate the Agentic AI landscape.
              </p>
              <div className="space-y-4">
                {[
                  { num: 1, strategy: 'Product-Led Growth', desc: 'Free tier driving viral adoption and conversion' },
                  { num: 2, strategy: 'Enterprise Sales', desc: 'Direct sales team closing 6-figure deals' },
                  { num: 3, strategy: 'Strategic Partnerships', desc: 'Channel partners and system integrators' },
                  { num: 4, strategy: 'Developer Ecosystem', desc: 'API-first platform enabling custom solutions' },
                  { num: 5, strategy: 'Industry Verticals', desc: 'Specialized solutions for 14 industries' }
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#6209e6] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.strategy}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center min-h-[500px]"
            >
              <svg viewBox="0 0 400 400" className="w-full max-w-md">
                {/* Center circle */}
                <circle cx="200" cy="200" r="80" fill="#6209e6" />
                <text x="200" y="190" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Increase</text>
                <text x="200" y="210" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Market</text>
                <text x="200" y="230" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Share</text>
                
                {/* Strategy circles */}
                {[
                  { x: 200, y: 60, num: 1, angle: -90 },
                  { x: 310, y: 140, num: 2, angle: -30 },
                  { x: 310, y: 260, num: 3, angle: 30 },
                  { x: 200, y: 340, num: 4, angle: 90 },
                  { x: 90, y: 260, num: 5, angle: 150 }
                ].map((pos) => (
                  <g key={pos.num}>
                    <line x1="200" y1="200" x2={pos.x} y2={pos.y} stroke="#6209e6" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx={pos.x} cy={pos.y} r="30" fill="#6209e6" />
                    <text x={pos.x} y={pos.y + 6} textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">{pos.num}</text>
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expansion Opportunity - Sector Analysis */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Expansion Opportunity
            </h2>
            <p className="text-2xl text-gray-600">Market share by sector with significant growth potential</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Enterprise SaaS', slices: [{ name: 'Our Share', value: 55, color: '#6209e6' }, { name: 'Available', value: 45, color: '#0891B2' }] },
              { name: 'Healthcare & Finance', slices: [{ name: 'Our Share', value: 61, color: '#6209e6' }, { name: 'Competitor', value: 15, color: '#0891B2' }, { name: 'Available', value: 24, color: '#374151' }] },
              { name: 'Manufacturing & Retail', slices: [{ name: 'Our Share', value: 37, color: '#6209e6' }, { name: 'Available', value: 40, color: '#0891B2' }, { name: 'Competitor', value: 22, color: '#374151' }, { name: 'Other', value: 1, color: '#6B7280' }] }
            ].map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold mb-6 text-center text-gray-900">{sector.name}</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={sector.slices}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {sector.slices.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                      formatter={(value) => `${value}%`}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {sector.slices.map((slice, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: slice.color }}></div>
                        <span className="text-gray-700">{slice.name}</span>
                      </div>
                      <span className="font-bold text-gray-900">{slice.value}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Growth Playbook */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                International Growth Playbook
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-[#6209e6] rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">Local Marketing</h3>
                  </div>
                  <p className="text-gray-600 ml-6">Generate awareness through localized marketing campaigns, region-specific content, and strategic PR in target markets.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-[#6209e6] rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">Partnerships</h3>
                  </div>
                  <p className="text-gray-600 ml-6">
                    Preloaded partnerships with major system integrators and technology vendors provide instant market placement and credibility. 
                    Collaborations with local service providers ensure attractive pricing and seamless customer experience.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-[#6209e6] to-[#7C3AED] text-white p-12 rounded-2xl">
                <div className="text-7xl font-bold mb-3">500+</div>
                <div className="text-2xl font-semibold">International Content Partners</div>
              </div>
              <div className="bg-gradient-to-r from-[#6209e6] to-[#7C3AED] text-white p-12 rounded-2xl">
                <div className="text-7xl font-bold mb-3">10+</div>
                <div className="text-2xl font-semibold">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Milestones Timeline */}
      <section className="py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Company Milestones and Innovation
            </h2>
            <p className="text-xl text-gray-600">Our journey to becoming the leader in Agentic AI</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-[#6209e6] transform md:-translate-x-1/2"></div>

            {/* Starting point */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mb-16"
            >
              <div className="flex justify-start md:justify-center mb-8">
                <div className="w-20 h-20 bg-white border-4 border-[#6209e6] rounded-full flex items-center justify-center z-10">
                  <span className="text-sm font-bold text-[#6209e6]">Start</span>
                </div>
              </div>
            </motion.div>

            {/* Milestones */}
            {[
              { num: 1, title: 'Company Founded', date: 'Jan 2023', desc: 'Launched with vision to democratize enterprise AI' },
              { num: 2, title: 'Product Launch', date: 'Mar 2023', desc: 'First no-code Agentic AI platform goes live' },
              { num: 3, title: 'Series A Funding', date: 'Aug 2023', desc: 'Raised $15M led by top VCs' },
              { num: 4, title: '1,000 Customers', date: 'Feb 2024', desc: 'Crossed 1,000 enterprise customers milestone' },
              { num: 5, title: 'Global Expansion', date: 'Jun 2024', desc: 'Expanded to 45+ countries worldwide' },
              { num: 6, title: 'Platform 2.0', date: 'Oct 2024', desc: 'Launched multi-agent orchestration' },
              { num: 7, title: '10,000 Customers', date: 'Dec 2024', desc: 'Reached 10,000 organizations using platform' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.num}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              >
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                  <div className="max-w-md">
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 bg-[#6209e6] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 border-4 border-white shadow-lg relative z-10">
                        {milestone.num}
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <div className="text-lg font-bold text-gray-900">{milestone.title}</div>
                        <div className="text-sm text-gray-500">{milestone.date}</div>
                      </div>
                    </div>
                    <div className={`mt-3 ${index % 2 === 0 ? 'md:text-right md:mr-18' : 'md:ml-18'} ml-18`}>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
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
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50">
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
                  <span className="text-xl font-bold text-[#6209e6]">{market.tam}</span>
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
                  <div className="pt-4 border-t border-gray-200">
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
      <section className="py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Why invest in 1cPlatform?
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Works With Everything */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Works with{' '}
                <span className="text-[#6209e6]">
                  everything you use
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Connect seamlessly with 1,000+ applications. From Salesforce to QuickBooks, Slack to AWS—everything syncs automatically.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                No more data silos. No manual exports. No friction. Just one unified system that connects your entire business ecosystem.
              </p>
              
              <div className="space-y-4">
                {[
                  'Salesforce, HubSpot, Dynamics 365',
                  'Slack, Microsoft Teams, Zoom',
                  'AWS, Azure, Google Cloud',
                  'QuickBooks, Xero, NetSuite'
                ].map((integration, index) => (
                  <motion.div
                    key={integration}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl p-4"
                  >
                    <div className="w-6 h-6 bg-[#6209e6] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-medium text-gray-900">{integration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white border border-gray-200 rounded-3xl p-12 min-h-[500px] flex items-center justify-center shadow-lg">
                {/* Floating integration boxes */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 left-12 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">Salesforce</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-24 right-16 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">Slack</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-32 left-20 bg-white rounded-lg shadow-lg p-3 flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">AWS</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 25, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-20 right-24 bg-white rounded-lg shadow-lg p-3 flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">QuickBooks</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute top-40 left-32 bg-white rounded-lg shadow-lg p-3 flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">HubSpot</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="absolute bottom-40 right-32 bg-white rounded-lg shadow-lg p-3 flex items-center justify-center"
                >
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">Azure</span>
                </motion.div>
                
                {/* Center logo */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-10"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] rounded-full flex items-center justify-center">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                      alt="1C Platform" 
                      className="w-12 h-12"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
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
                <tr className="bg-[#6209e6] text-white">
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
                  <tr key={row.feature} className="bg-white border-b border-gray-200">
                    <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="p-4 text-center font-bold text-[#6209e6]">{row.us}</td>
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
      <section className="py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Financial performance & projections
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
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
                      <div className="text-sm text-gray-500">Revenue</div>
                      <div className="text-xl font-bold text-gray-900">{year.revenue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Growth</div>
                      <div className="text-lg font-semibold text-green-600">{year.growth}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Customers</div>
                      <div className="text-lg text-gray-900">{year.customers}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">ARR</div>
                      <div className="text-lg font-semibold text-gray-900">{year.arr}</div>
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
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Revenue & Profitability</h4>
                <div className="space-y-4">
                  {[
                    { year: '2025', revenue: '$48M', margin: '-15%', status: 'Hypergrowth', focus: 'Scale sales & product' },
                    { year: '2026', revenue: '$125M', margin: '-5%', status: 'Market leader', focus: 'International expansion' },
                    { year: '2027', revenue: '$280M', margin: '+5%', status: 'Profitable', focus: 'Enterprise dominance' },
                    { year: '2028', revenue: '$520M', margin: '+15%', status: 'High margins', focus: 'Market consolidation' },
                    { year: '2029', revenue: '$850M', margin: '+22%', status: 'Category king', focus: 'Platform ecosystem' },
                    { year: '2030', revenue: '$1.2B', margin: '+28%', status: 'IPO ready', focus: 'Sustained growth' }
                  ].map((projection) => (
                    <div key={projection.year} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-0">
                      <div className="w-16 flex-shrink-0">
                        <div className="text-lg font-bold text-[#6209e6]">{projection.year}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-gray-900">{projection.revenue}</span>
                          <span className={`text-sm font-semibold ${projection.margin.startsWith('-') ? 'text-yellow-600' : 'text-green-600'}`}>
                            {projection.margin} margin
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">{projection.status} • {projection.focus}</div>
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
                <h4 className="text-2xl font-bold mb-6 text-gray-900">Key Metrics Evolution</h4>
                <div className="space-y-6">
                  {[
                    { metric: 'Enterprise Customers', y2025: '500', y2027: '5,000', y2030: '25,000' },
                    { metric: 'Countries', y2025: '45', y2027: '85', y2030: '120+' },
                    { metric: 'Team Size', y2025: '180', y2027: '800', y2030: '2,500' },
                    { metric: 'Net Revenue Retention', y2025: '140%', y2027: '150%', y2030: '155%' },
                    { metric: 'Gross Margin', y2025: '78%', y2027: '82%', y2030: '85%' }
                  ].map((item) => (
                    <div key={item.metric} className="pb-4 border-b border-gray-200 last:border-0">
                      <div className="text-sm text-gray-600 mb-2">{item.metric}</div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-gray-500">2025</div>
                          <div className="text-lg font-bold text-[#6209e6]">{item.y2025}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">2027</div>
                          <div className="text-lg font-bold text-[#6209e6]">{item.y2027}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">2030</div>
                          <div className="text-lg font-bold text-gray-900">{item.y2030}</div>
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
              <h4 className="text-2xl font-bold mb-6 text-gray-900">Strategic Milestones</h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { phase: '2025-2026: Foundation', goals: ['Series B funding ($100M)', 'Expand to 85+ countries', 'Launch enterprise marketplace', '5,000 enterprise customers'] },
                  { phase: '2027-2028: Dominance', goals: ['Series C ($200M)', 'Achieve profitability', 'Strategic acquisitions', 'Platform ecosystem launch'] },
                  { phase: '2029-2030: IPO Prep', goals: ['$1B+ revenue run rate', 'Category leadership', 'Public market readiness', 'Sustainable 30%+ growth'] }
                ].map((milestone, index) => (
                  <div key={milestone.phase}>
                    <h5 className="font-bold text-[#6209e6] mb-3">{milestone.phase}</h5>
                    <ul className="space-y-2">
                      {milestone.goals.map((goal) => (
                        <li key={goal} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#6209e6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{goal}</span>
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
                    <CheckCircle2 className="w-6 h-6 text-[#6209e6] flex-shrink-0" />
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
                      <div className="text-2xl font-bold text-[#6209e6]">{milestone.year}</div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="h-px bg-[#6209e6] mb-2"></div>
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
              The best team to solve this problem
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our founders and leadership team bring 30+ years of combined experience from Google, Microsoft, Amazon, and leading AI research labs. We've built and scaled systems processing billions of transactions daily.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                <div className="text-sm text-gray-600">Combined experience</div>
                <div className="text-2xl font-bold text-[#6209e6]">30+ years</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                <div className="text-sm text-gray-600">Team size</div>
                <div className="text-2xl font-bold text-[#6209e6]">2000+ people</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                <div className="text-sm text-gray-600">Global offices</div>
                <div className="text-2xl font-bold text-[#6209e6]">45+ locations</div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Niroshi Nadarajah',
                role: 'CEO & Co-Founder',
                background: 'Former microbiology researcher at leading pharmaceutical companies, now pioneering enterprise AI transformation with a vision for autonomous business intelligence. Deep understanding of healthcare and life sciences AI applications.'
              },
              {
                name: 'Suf K Sulaiman',
                role: 'CTO & Co-Founder',
                background: '30+ years driving innovation across AI, hardware, and software at global tech giants. Architect of systems processing billions of transactions daily. Holds 12 patents in distributed systems and machine learning.'
              },
              {
                name: 'Emily Zhang',
                role: 'Chief Product Officer',
                background: 'Former VP Product at leading SaaS unicorn. Built products used by 5M+ users. Stanford CS, 15+ years in enterprise software. Expert in product-led growth and enterprise adoption.'
               },
               {
                name: 'Advisory Board',
                role: '8 Industry Experts',
                background: 'Former C-suite executives from Fortune 500 companies across healthcare, finance, and manufacturing. Combined 200+ years experience. Advisors from Google, Amazon, Microsoft, and top AI research labs.'
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
      <section className="py-24 bg-gradient-to-br from-[#6209e6] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
              alt="1C Platform" 
              className="w-24 h-24 mx-auto mb-8"
            />
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Series B: $100M at $2.5B valuation
            </h2>
            <p className="text-2xl text-purple-100 mb-10 leading-relaxed">
              Join leading investors in building the category-defining Agentic AI platform. This is your opportunity to invest in the future of enterprise automation.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">$100M</div>
                <div className="text-sm text-purple-200">Target raise</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">$2.5B</div>
                <div className="text-sm text-purple-200">Post-money valuation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">Q1 2025</div>
                <div className="text-sm text-purple-200">Expected close</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => setShowDeck(true)}
                size="lg" 
                className="bg-white text-[#6209e6] hover:bg-gray-100 rounded-full px-10 h-14 text-lg"
              >
                View investment deck <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="mt-4 text-purple-200 text-sm">
                Or email us at <a href="mailto:investor@1cplatform.com" className="text-white font-semibold hover:underline">investor@1cplatform.com</a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-white/20">
              <Button 
                onClick={downloadPDF}
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download deck (PDF)
              </Button>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-white text-[#6209e6] hover:bg-gray-100 rounded-full px-10 h-14 text-lg">
                  Contact us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Deck Modal */}
      {showDeck && (
        <div className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/90'} flex items-center justify-center p-4`}>
          <div className={`${isFullscreen ? 'w-full h-full' : 'max-w-6xl w-full'} relative`}>
            {/* Close Button */}
            <button
              onClick={() => {
                setShowDeck(false);
                setIsFullscreen(false);
              }}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="absolute top-4 right-20 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            >
              <Maximize2 className="w-6 h-6" />
            </button>

            {/* Slide Container */}
            <div className={`${isFullscreen ? 'h-full' : 'aspect-[16/9]'} bg-white rounded-3xl overflow-hidden relative shadow-2xl border border-gray-200`}>
              {/* Slide Number */}
              <div className="absolute top-6 right-6 text-sm font-semibold text-gray-400 z-10">
                {currentSlide + 1} / {investmentSlides.length}
              </div>

              {/* Slide Content */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full h-full flex items-center justify-center p-8 md:p-16"
              >
                {/* Cover Slide */}
                {investmentSlides[currentSlide].id === 'cover' && (
                  <div className="text-center max-w-4xl">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                      alt="1C" 
                      className="w-24 h-24 mx-auto mb-8"
                    />
                    <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6">1C Platform</h1>
                    <p className="text-3xl text-gray-600 mb-12">The No-Code Agentic AI Revolution</p>
                    <div className="grid grid-cols-3 gap-6 mt-16">
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <div className="text-4xl font-bold text-[#6209e6] mb-2">10K+</div>
                        <div className="text-sm text-gray-600">Organizations</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <div className="text-4xl font-bold text-[#6209e6] mb-2">$2.5B</div>
                        <div className="text-sm text-gray-600">Valuation</div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <div className="text-4xl font-bold text-[#6209e6] mb-2">45+</div>
                        <div className="text-sm text-gray-600">Countries</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Problem Slide */}
                {investmentSlides[currentSlide].id === 'problem' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">The Enterprise AI Crisis</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">$2.5 trillion market struggling with AI adoption</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { stat: '87%', label: 'Struggle with complexity', desc: '$2.5M avg cost to build' },
                        { stat: '12-18mo', label: 'Time to deploy', desc: '40% market share lost' },
                        { stat: '3x', label: 'Cost to scale', desc: '60% budget on maintenance' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white border-2 border-red-200 rounded-2xl p-6 text-center">
                          <div className="text-5xl font-bold text-red-600 mb-3">{item.stat}</div>
                          <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                          <div className="text-sm text-gray-600">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Solution Slide */}
                {investmentSlides[currentSlide].id === 'solution' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What makes 1cPlatform the clear leader in Agentic AI</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                      {[
                        { icon: Zap, title: 'No-Code Platform', desc: 'Deploy AI agents 100x faster than competitors', stat: '100x faster' },
                        { icon: Brain, title: 'Advanced AI Models', desc: 'Proprietary multi-agent orchestration', stat: '95% task automation' },
                        { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security & compliance', stat: 'SOC 2 + ISO' },
                        { icon: Award, title: 'Proven Success', desc: '98% customer retention rate', stat: '98% retention' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                          <item.icon className="w-16 h-16 text-[#6209e6] mx-auto mb-4" />
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                          <div className="text-xl font-bold text-[#6209e6]">{item.stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Slide */}
                {investmentSlides[currentSlide].id === 'product' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Complete AI Product Suite</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {[
                        { 
                          icon: Zap, 
                          title: 'No-Code AI Builder', 
                          desc: 'Deploy production-ready AI agents in minutes without writing code. Our visual builder democratizes AI, letting business users create sophisticated automation without technical expertise.',
                          points: ['Zero coding required', '5-minute deployment', '100+ pre-built templates', 'Drag-and-drop interface'],
                          metric: '100x faster than custom development'
                        },
                        { 
                          icon: Brain, 
                          title: 'Advanced Multi-Agent Orchestration', 
                          desc: 'Proprietary AI engine coordinates multiple agents working together seamlessly. Our technology handles complex workflows, decision-making, and autonomous task execution at enterprise scale.',
                          points: ['Self-learning agents', 'Collaborative AI teams', 'Context-aware decisions', 'Continuous optimization'],
                          metric: '95% task automation rate'
                        },
                        { 
                          icon: Globe, 
                          title: 'Enterprise-Ready Infrastructure', 
                          desc: 'Built for scale from day one with 99.99% uptime SLA. Our platform handles millions of transactions daily with bank-grade security, compliance, and performance that enterprises demand.',
                          points: ['SOC 2 Type II certified', 'GDPR & HIPAA compliant', 'Global CDN', 'Auto-scaling'],
                          metric: '99.99% uptime guarantee'
                        },
                        { 
                          icon: TrendingUp, 
                          title: 'Rapid ROI & Value', 
                          desc: 'See measurable results within weeks, not years. Our customers achieve positive ROI in under 90 days with clear metrics, reducing costs by 45% while increasing productivity by 60%.',
                          points: ['90-day ROI', '45% cost reduction', '60% productivity gain', 'Real-time analytics'],
                          metric: '90-day average ROI'
                        }
                      ].map((product, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                          <product.icon className="w-14 h-14 text-[#6209e6] mb-4" />
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
                          <ul className="space-y-1 mb-4">
                            {product.points.slice(0, 3).map((point, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                                <CheckCircle2 className="w-3 h-3 text-[#6209e6]" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="text-sm font-bold text-[#6209e6] pt-3 border-t border-gray-200">{product.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Traction Slide */}
                {investmentSlides[currentSlide].id === 'traction' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Market Traction</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Proven success across industries</p>
                    <div className="grid grid-cols-4 gap-6">
                      {[
                        { value: '10,000+', label: 'Organizations', icon: Users },
                        { value: '98%', label: 'Retention Rate', icon: Award },
                        { value: '140%', label: 'Net Revenue Retention', icon: TrendingUp },
                        { value: '300%', label: 'YoY Growth', icon: Rocket }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg">
                          <metric.icon className="w-8 h-8 text-[#6209e6] mx-auto mb-3" strokeWidth={2} />
                          <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 bg-white border-2 border-[#6209e6] rounded-2xl p-6">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">$285K</div>
                          <div className="text-sm text-gray-600">Avg Enterprise Deal</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">4.2 months</div>
                          <div className="text-sm text-gray-600">Sales Cycle</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
                          <div className="text-sm text-gray-600">Win Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Demographics Slide */}
                {investmentSlides[currentSlide].id === 'demographics' && (
                  <div className="text-white w-full h-full flex flex-col justify-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8">Guide of Active Users</h2>
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                      <div className="md:col-span-2">
                        <div className="bg-white p-8 rounded-2xl">
                          <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={[
                              { year: '2019', users: 950000 },
                              { year: '2020', users: 900000 },
                              { year: '2021', users: 950000 },
                              { year: '2022', users: 1180000 },
                              { year: '2023', users: 1250000 }
                            ]}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                              <XAxis dataKey="year" stroke="#1F2937" style={{ fontSize: '14px', fontWeight: '600' }} />
                              <YAxis stroke="#1F2937" tickFormatter={(val) => `${(val / 1000000).toFixed(1)}m`} />
                              <Tooltip formatter={(val) => `${(val / 1000000).toFixed(2)}m users`} />
                              <Bar dataKey="users" radius={[8, 8, 0, 0]}>
                                {[0, 1, 2].map((index) => (
                                  <Cell key={`cell-${index}`} fill="#0891B2" />
                                ))}
                                {[3, 4].map((index) => (
                                  <Cell key={`cell-${index}`} fill="#6209e6" />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                          <div className="flex justify-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded bg-[#0891B2]"></div>
                              <span className="text-sm text-gray-700 font-medium">Other</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded bg-[#6209e6]"></div>
                              <span className="text-sm text-gray-700 font-medium">US</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-block bg-cyan-400 rounded-full px-10 py-6 mb-8">
                          <div className="text-6xl font-bold text-gray-900">$1.3B</div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Key Observation</h3>
                        <p className="text-lg opacity-90">Break down the numbers you put forward.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Community Demographics - Slide 21 */}
                {currentSlide === 20 && (
                  <div className="text-white w-full h-full flex flex-col justify-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16">Our Community</h2>
                    <div className="space-y-12 max-w-4xl mx-auto w-full">
                      {[
                        { percent: 36, filled: 4, label: 'C-Suite Executives', desc: 'CEOs, CTOs, COOs driving strategic decisions' },
                        { percent: 50, filled: 5, label: 'VP / Directors', desc: 'Department heads implementing AI transformation' },
                        { percent: 14, filled: 2, label: 'Managers & Team Leads', desc: 'Operational leaders optimizing workflows' }
                      ].map((demo, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-8">
                          <div className="text-8xl md:text-9xl font-bold w-40 text-left">{demo.percent}%</div>
                          <div className="flex gap-2">
                            {Array.from({ length: 10 }).map((_, i) => (
                              <User 
                                key={i} 
                                className={`w-10 h-10 ${i < demo.filled ? 'fill-[#6209e6] text-[#6209e6]' : 'fill-white/20 text-white/20'}`} 
                              />
                            ))}
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-xl font-bold mb-1">{demo.label}</div>
                            <div className="text-sm opacity-70">{demo.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quarterly Profits Slide */}
                {investmentSlides[currentSlide].id === 'quarterly' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Quarterly Profits</h2>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                      <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={[
                          { quarter: 'Q1 2023', profit: 3 },
                          { quarter: 'Q2 2023', profit: 2 },
                          { quarter: 'Q3 2023', profit: 3 },
                          { quarter: 'Q4 2023', profit: 4 },
                          { quarter: 'Q1 2024', profit: 6 },
                          { quarter: 'Q2 2024', profit: 6 },
                          { quarter: 'Q3 2024', profit: 7 },
                          { quarter: 'Q4 2024', profit: 8 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                          <XAxis dataKey="quarter" stroke="#6B7280" angle={-20} textAnchor="end" height={60} />
                          <YAxis stroke="#6B7280" tickFormatter={(value) => `$${value}m`} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                            formatter={(value) => [`$${value}m`, 'Profit']}
                          />
                          <Bar dataKey="profit" radius={[8, 8, 0, 0]}>
                            {[0, 1, 2, 3].map((index) => (
                              <Cell key={`cell-${index}`} fill="#0891B2" />
                            ))}
                            {[4, 5, 6, 7].map((index) => (
                              <Cell key={`cell-${index}`} fill="#6209e6" />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="text-center bg-gray-50 rounded-xl p-4">
                          <div className="text-4xl font-bold text-[#0891B2] mb-2">+46%</div>
                          <div className="text-sm text-gray-600">Early phase growth (2023)</div>
                        </div>
                        <div className="text-center bg-gray-50 rounded-xl p-4">
                          <div className="text-4xl font-bold text-[#6209e6] mb-2">+124%</div>
                          <div className="text-sm text-gray-600">Post-AI launch acceleration (2024)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Yearly Profit Slide */}
                {investmentSlides[currentSlide].id === 'yearly' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Yearly Profit Trajectory</h2>
                    <div className="grid grid-cols-5 gap-6 items-end">
                      <div className="col-span-3 bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <ResponsiveContainer width="100%" height={350}>
                          <LineChart data={[
                            { year: '2018', profit: 20 },
                            { year: '2019', profit: 24 },
                            { year: '2020', profit: 26 },
                            { year: '2021', profit: 28 },
                            { year: '2022', profit: 72 },
                            { year: '2023', profit: 95 },
                            { year: '2024', profit: 140 }
                          ]}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="year" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" tickFormatter={(value) => `$${value}k`} />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                              formatter={(value) => [`$${value}k`, 'Profit']}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="profit" 
                              stroke="#6209e6" 
                              strokeWidth={4}
                              dot={{ fill: '#6209e6', r: 8, strokeWidth: 3, stroke: '#0891B2' }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="col-span-2 space-y-4">
                        <div className="bg-white border-2 border-[#6209e6] rounded-2xl p-6 text-center shadow-lg">
                          <div className="text-6xl font-bold text-[#6209e6] mb-2">28%</div>
                          <div className="text-lg font-semibold text-gray-900 mb-1">CAGR</div>
                          <div className="text-sm text-gray-600">Compound annual growth</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-gray-900 mb-1">$140K</div>
                          <div className="text-sm text-gray-600">2024 Profit (projected)</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold text-gray-900 mb-1">400%+</div>
                          <div className="text-sm text-gray-600">Growth since 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Growth Slide */}
                {investmentSlides[currentSlide].id === 'growth' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Explosive Growth</h2>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg mb-6">
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={[
                          { year: '2019', users: 950000 },
                          { year: '2020', users: 900000 },
                          { year: '2021', users: 950000 },
                          { year: '2022', users: 1180000 },
                          { year: '2023', users: 1250000 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                          <XAxis dataKey="year" stroke="#6B7280" />
                          <YAxis stroke="#6B7280" tickFormatter={(val) => `${(val / 1000000).toFixed(1)}m`} />
                          <Tooltip formatter={(val) => `${(val / 1000000).toFixed(2)}m users`} />
                          <Bar dataKey="users" radius={[8, 8, 0, 0]}>
                            {[0, 1, 2].map((index) => (
                              <Cell key={`cell-${index}`} fill="#0891B2" />
                            ))}
                            {[3, 4].map((index) => (
                              <Cell key={`cell-${index}`} fill="#6209e6" />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-1">1.25M</div>
                        <div className="text-sm text-gray-600">Active Users (2023)</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-[#6209e6] mb-1">31%</div>
                        <div className="text-sm text-gray-600">Growth since AI launch</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-1">$1.3B</div>
                        <div className="text-sm text-gray-600">User lifetime value</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Market Penetration Slide */}
                {investmentSlides[currentSlide].id === 'penetration' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Market Penetration Strategy</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-4">
                        {[
                          { num: 1, title: 'Product-Led Growth', desc: 'Free tier driving 35% conversion, viral adoption through word-of-mouth' },
                          { num: 2, title: 'Enterprise Sales', desc: 'Direct sales closing $285K average deals in 4.2 months' },
                          { num: 3, title: 'Strategic Partnerships', desc: '15+ channel partners, 20% revenue contribution' },
                          { num: 4, title: 'Developer Ecosystem', desc: 'API-first platform enabling 1,000+ integrations' },
                          { num: 5, title: 'Vertical Specialization', desc: 'Tailored solutions for 14 high-value industries' }
                        ].map((strategy) => (
                          <div key={strategy.num} className="flex gap-4 items-start bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                            <div className="w-10 h-10 bg-[#6209e6] rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                              {strategy.num}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900 mb-1">{strategy.title}</div>
                              <div className="text-sm text-gray-600">{strategy.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <svg viewBox="0 0 400 400" className="w-full max-w-sm">
                          <circle cx="200" cy="200" r="60" fill="#6209e6" />
                          <text x="200" y="190" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Increase</text>
                          <text x="200" y="210" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Market</text>
                          <text x="200" y="226" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Share</text>
                          
                          {[
                            { x: 200, y: 70, num: 1 },
                            { x: 330, y: 130, num: 2 },
                            { x: 330, y: 270, num: 3 },
                            { x: 200, y: 330, num: 4 },
                            { x: 70, y: 270, num: 5 }
                          ].map((pos) => (
                            <g key={pos.num}>
                              <line x1="200" y1="200" x2={pos.x} y2={pos.y} stroke="#6209e6" strokeWidth="2" strokeDasharray="4,4" />
                              <circle cx={pos.x} cy={pos.y} r="30" fill="#6209e6" />
                              <text x={pos.x} y={pos.y + 7} textAnchor="middle" fill="white" fontSize="28" fontWeight="bold">{pos.num}</text>
                            </g>
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Market Opportunity Slide */}
                {investmentSlides[currentSlide].id === 'market' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Market Opportunity</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">$500B+ TAM by 2030</p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {[
                        { value: '$500B+', label: 'Total Addressable Market', sublabel: 'Global enterprise AI by 2030' },
                        { value: '85%', label: 'Adoption Gap', sublabel: 'Enterprises without AI agents' },
                        { value: '120%', label: 'Market CAGR', sublabel: 'Fastest growing segment' }
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg">
                          <div className="text-5xl font-bold text-[#6209e6] mb-2">{stat.value}</div>
                          <div className="text-base font-semibold text-gray-900 mb-1">{stat.label}</div>
                          <div className="text-sm text-gray-600">{stat.sublabel}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { industry: 'Financial Services', tam: '$85B', growth: '135%' },
                        { industry: 'Healthcare', tam: '$72B', growth: '128%' },
                        { industry: 'Retail & E-commerce', tam: '$68B', growth: '142%' },
                        { industry: 'Manufacturing', tam: '$54B', growth: '118%' }
                      ].map((market, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 flex justify-between items-center">
                          <span className="font-semibold text-gray-900">{market.industry}</span>
                          <div className="text-right">
                            <div className="text-lg font-bold text-[#6209e6]">{market.tam}</div>
                            <div className="text-xs text-gray-600">{market.growth} CAGR</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* International Growth Slide */}
                {investmentSlides[currentSlide].id === 'international' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">International Growth Playbook</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 bg-[#6209e6] rounded-full"></div>
                            <h3 className="text-xl font-bold text-gray-900">Local Marketing</h3>
                          </div>
                          <p className="text-sm text-gray-600">Generate awareness through localized campaigns, region-specific content, and strategic PR in target markets.</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 bg-[#6209e6] rounded-full"></div>
                            <h3 className="text-xl font-bold text-gray-900">Partnerships</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Preloaded partnerships with major system integrators and technology vendors provide instant market placement and credibility.
                          </p>
                          <p className="text-sm text-gray-600">
                            Collaborations with local service providers ensure attractive pricing and seamless experience.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-[#6209e6] p-10 rounded-2xl text-white shadow-lg">
                          <div className="text-lg mb-2 opacity-90">International Content Partners</div>
                          <div className="text-8xl font-bold">500+</div>
                        </div>
                        <div className="bg-[#6209e6] p-10 rounded-2xl text-white shadow-lg">
                          <div className="text-lg mb-2 opacity-90">Countries</div>
                          <div className="text-8xl font-bold">10+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expansion Opportunity Slide */}
                {investmentSlides[currentSlide].id === 'expansion' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Expansion Opportunity</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Sector-by-sector market share breakdown</p>
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { name: 'Enterprise SaaS', slices: [{ value: 55, color: '#6209e6', name: 'Our Share' }, { value: 45, color: '#0891B2', name: 'Available' }] },
                        { name: 'Healthcare & Finance', slices: [{ value: 61, color: '#6209e6', name: 'Our Share' }, { value: 25, color: '#0891B2', name: 'Available' }, { value: 14, color: '#9CA3AF', name: 'Competitors' }] },
                        { name: 'Manufacturing & Retail', slices: [{ value: 37, color: '#6209e6', name: 'Our Share' }, { value: 40, color: '#0891B2', name: 'Available' }, { value: 22, color: '#9CA3AF', name: 'Competitors' }, { value: 1, color: '#D1D5DB', name: 'Other' }] }
                      ].map((sector, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{sector.name}</h3>
                          <ResponsiveContainer width="100%" height={220}>
                            <PieChart>
                              <Pie
                                data={sector.slices}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={90}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ value }) => `${value}%`}
                              >
                                {sector.slices.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip formatter={(value) => `${value}%`} />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="mt-4 space-y-2">
                            {sector.slices.map((slice, i) => (
                              <div key={i} className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: slice.color }}></div>
                                  <span className="text-gray-700">{slice.name}</span>
                                </div>
                                <span className="font-bold text-gray-900">{slice.value}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Business Model Slide */}
                {investmentSlides[currentSlide].id === 'business' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Business Model</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Multiple high-margin revenue streams</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { title: 'Subscription', percent: '65%', desc: 'Monthly & annual SaaS contracts', growth: '+280% YoY', color: 'border-[#6209e6]' },
                        { title: 'Usage-Based', percent: '25%', desc: 'API calls & AI compute fees', growth: '+350% YoY', color: 'border-[#6209e6]' },
                        { title: 'Services', percent: '10%', desc: 'Implementation & support', growth: '+180% YoY', color: 'border-[#6209e6]' }
                      ].map((stream, idx) => (
                        <div key={idx} className={`bg-white border-2 ${stream.color} rounded-2xl p-6 shadow-lg`}>
                          <div className="text-5xl font-bold text-[#6209e6] mb-2">{stream.percent}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{stream.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{stream.desc}</p>
                          <div className="pt-3 border-t border-gray-200">
                            <div className="text-sm font-bold text-green-600">{stream.growth}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-gray-900 mb-1">78%</div>
                          <div className="text-sm text-gray-600">Gross Margin</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gray-900 mb-1">$48M</div>
                          <div className="text-sm text-gray-600">2025 ARR Target</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                          <div className="text-sm text-gray-600">Customer Retention</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Unit Economics Slide */}
                {investmentSlides[currentSlide].id === 'economics' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Unit Economics</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Best-in-class efficiency</p>
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      {[
                        { label: 'CAC', value: '$8,500', desc: 'Customer acquisition cost' },
                        { label: 'LTV', value: '$89,000', desc: 'Lifetime value' },
                        { label: 'LTV:CAC', value: '10.5:1', desc: 'Outstanding ratio' },
                        { label: 'Payback', value: '4 mo', desc: 'Fast capital return' }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-lg">
                          <div className="text-sm font-semibold text-[#6209e6] mb-2">{metric.label}</div>
                          <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.desc}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue Metrics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">ARR per customer</span>
                            <span className="font-bold text-gray-900">$8,900</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Net revenue retention</span>
                            <span className="font-bold text-[#6209e6]">140%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Gross margin</span>
                            <span className="font-bold text-gray-900">78%</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Growth Metrics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Free to paid conversion</span>
                            <span className="font-bold text-[#6209e6]">35%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Customer expansion rate</span>
                            <span className="font-bold text-gray-900">3.2x</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Referral rate</span>
                            <span className="font-bold text-gray-900">60%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Competitive Advantages Slide */}
                {investmentSlides[currentSlide].id === 'competitive' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Competitive Advantages</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { icon: Target, title: 'Network Effects', desc: 'Every deployment improves our AI models, creating compounding advantages competitors cannot replicate' },
                        { icon: Shield, title: 'Switching Costs', desc: 'Deep integration into workflows makes migration to competitors costly and risky' },
                        { icon: Rocket, title: 'First-Mover Advantage', desc: '10,000+ enterprises creates powerful brand equity and market leadership' },
                        { icon: Brain, title: 'Proprietary Technology', desc: 'Multi-agent orchestration engine with 12 patents pending' },
                        { icon: Users, title: 'Enterprise Trust', desc: 'SOC 2, ISO 27001, GDPR compliance unmatched in the space' },
                        { icon: Zap, title: 'Speed to Market', desc: '100x faster deployment than any competitor or custom solution' }
                      ].map((adv, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                          <adv.icon className="w-12 h-12 text-[#6209e6] mb-4" />
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{adv.title}</h3>
                          <p className="text-sm text-gray-600">{adv.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Milestones Slide */}
                {investmentSlides[currentSlide].id === 'milestones' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">Company Milestones</h2>
                    <div className="relative">
                      <div className="absolute top-12 left-12 right-12 h-1 bg-[#6209e6]"></div>
                      <div className="flex justify-between items-start relative pt-4">
                        <div className="flex flex-col items-center z-10">
                          <div className="w-16 h-16 bg-white border-4 border-[#6209e6] rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-[#6209e6]">Start</span>
                          </div>
                        </div>
                        {[
                          { num: 1, title: 'Founded', date: 'Jan 2023', top: true },
                          { num: 2, title: 'Product Launch', date: 'Mar 2023', top: false },
                          { num: 3, title: '1K Customers', date: 'Feb 2024', top: true },
                          { num: 4, title: 'Global Expansion', date: 'Jun 2024', top: false },
                          { num: 5, title: '10K Customers', date: 'Dec 2024', top: true }
                        ].map((milestone) => (
                          <div key={milestone.num} className="flex flex-col items-center z-10">
                            <div className={milestone.top ? 'mb-2' : 'mt-2 order-2'}>
                              <div className="text-center bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                                <div className="text-sm font-bold text-gray-900">{milestone.title}</div>
                                <div className="text-xs text-gray-600">{milestone.date}</div>
                              </div>
                            </div>
                            <div className={`w-14 h-14 bg-[#6209e6] rounded-full flex items-center justify-center font-bold text-xl text-white border-4 border-white shadow-lg ${milestone.top ? 'mb-16' : 'mt-16 order-1'}`}>
                              {milestone.num}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Team Slide */}
                {investmentSlides[currentSlide].id === 'team' && (
                  <div className="w-full max-w-5xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center">World-Class Team</h2>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      {[
                        { value: '30+ years', label: 'Combined experience' },
                        { value: '2,000+', label: 'Team members' },
                        { value: '45+', label: 'Global offices' }
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-lg">
                          <div className="text-3xl font-bold text-[#6209e6] mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'Niroshi Nadarajah', role: 'CEO & Co-Founder', bg: 'Former microbiology researcher, now pioneering enterprise AI' },
                        { name: 'Suf K Sulaiman', role: 'CTO & Co-Founder', bg: '30+ years in AI, hardware & software. 12 patents' },
                        { name: 'Emily Zhang', role: 'Chief Product Officer', bg: 'Former VP at SaaS unicorn. Built products for 5M+ users' },
                        { name: 'Advisory Board', role: '8 Industry Experts', bg: 'Fortune 500 C-suite, 200+ years combined experience' }
                      ].map((leader, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-lg">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                          <p className="text-sm text-[#6209e6] font-semibold mb-2">{leader.role}</p>
                          <p className="text-xs text-gray-600">{leader.bg}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Financials Slide */}
                {investmentSlides[currentSlide].id === 'financials' && (
                  <div className="w-full max-w-6xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">Financial Projections</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">2025-2030 Hypergrowth trajectory</p>
                    <div className="grid md:grid-cols-6 gap-4 mb-8">
                      {[
                        { year: '2025', revenue: '$48M', margin: '-15%' },
                        { year: '2026', revenue: '$125M', margin: '-5%' },
                        { year: '2027', revenue: '$280M', margin: '+5%' },
                        { year: '2028', revenue: '$520M', margin: '+15%' },
                        { year: '2029', revenue: '$850M', margin: '+22%' },
                        { year: '2030', revenue: '$1.2B', margin: '+28%' }
                      ].map((proj, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
                          <div className="text-lg font-bold text-[#6209e6] mb-2">{proj.year}</div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{proj.revenue}</div>
                          <div className={`text-xs font-semibold ${proj.margin.startsWith('-') ? 'text-yellow-600' : 'text-green-600'}`}>
                            {proj.margin} margin
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold text-gray-900 mb-1">2027</div>
                          <div className="text-sm text-gray-600">Profitability achieved</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gray-900 mb-1">2030</div>
                          <div className="text-sm text-gray-600">IPO ready at $1.2B</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[#6209e6] mb-1">300%+</div>
                          <div className="text-sm text-gray-600">Avg YoY growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Investment Ask Slide */}
                {investmentSlides[currentSlide].id === 'ask' && (
                  <div className="w-full max-w-4xl text-center">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                      alt="1C" 
                      className="w-24 h-24 mx-auto mb-8"
                    />
                    <h2 className="text-6xl font-bold text-gray-900 mb-6">Series B Investment</h2>
                    <p className="text-2xl text-gray-600 mb-12">Join us in building the future of enterprise AI</p>
                    <div className="grid grid-cols-3 gap-6 mb-12">
                      <div className="bg-white border-2 border-[#6209e6] rounded-2xl p-6 shadow-lg">
                        <div className="text-4xl font-bold text-[#6209e6] mb-2">$100M</div>
                        <div className="text-sm text-gray-600">Target raise</div>
                      </div>
                      <div className="bg-white border-2 border-[#6209e6] rounded-2xl p-6 shadow-lg">
                        <div className="text-4xl font-bold text-[#6209e6] mb-2">$2.5B</div>
                        <div className="text-sm text-gray-600">Post-money valuation</div>
                      </div>
                      <div className="bg-white border-2 border-[#6209e6] rounded-2xl p-6 shadow-lg">
                        <div className="text-4xl font-bold text-[#6209e6] mb-2">Q1 2025</div>
                        <div className="text-sm text-gray-600">Expected close</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <p className="text-lg text-gray-700 mb-6">
                        This investment will fuel product development, global expansion, and category dominance in the fastest-growing segment of enterprise software.
                      </p>
                      <div className="text-sm text-gray-600">
                        Contact: <span className="font-semibold text-[#6209e6]">investor@1cplatform.com</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group"
              >
                <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group"
              >
                <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {investmentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Keyboard Navigation Hint */}
            <div className="text-center mt-4 text-white/60 text-sm">
              Use arrow keys or swipe to navigate • Press ESC to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}