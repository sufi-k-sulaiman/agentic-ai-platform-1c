import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, TrendingUp, Users, Globe, Zap, Target, Brain, Shield, Award, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Maximize2, X, Download, User, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import jsPDF from 'jspdf';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const investmentSlides = [
  { id: 'cover', title: '1C Platform', subtitle: 'The No-Code Agentic AI Revolution', type: 'cover' },
  { id: 'problem', title: 'The Enterprise AI Crisis', subtitle: '$2.5 trillion market struggling with AI adoption', type: 'problem' },
  { id: 'solution', title: 'Our Solution: The 1cPlatform Advantage', type: 'solution' },
  { id: 'product', title: 'Complete AI Product Suite', type: 'product' },
  { id: 'traction', title: 'Market Traction', type: 'traction' },
  { id: 'demographics', title: 'Our Community', subtitle: 'Decision makers driving transformation', type: 'demographics' },
  { id: 'growth', title: 'User Acquisition Plan', subtitle: '2026-2036 Projections', type: 'growth' },
  { id: 'quarterly', title: 'Quarterly Profits', subtitle: '2026-2027 Trajectory', type: 'quarterly' },
  { id: 'yearly', title: 'Yearly Profit Projection', subtitle: '2026-2030', type: 'yearly' },
  { id: 'swot', title: 'SWOT Analysis', subtitle: 'Strategic positioning', type: 'swot' },
  { id: 'triangle', title: 'Strategic Triangle', subtitle: 'Competitive advantage framework', type: 'triangle' },
  { id: 'quadrant', title: 'Magic Quadrant', subtitle: 'Market leadership position', type: 'quadrant' },
  { id: 'market', title: 'Market Opportunity', subtitle: '$500B+ TAM by 2030', type: 'market' },
  { id: 'penetration', title: 'Market Penetration Strategy', type: 'penetration' },
  { id: 'expansion', title: 'Expansion Opportunity', subtitle: 'Sector-by-sector breakdown', type: 'expansion' },
  { id: 'international', title: 'International Growth Playbook', type: 'international' },
  { id: 'business', title: 'Business Model', subtitle: 'Multiple high-margin revenue streams', type: 'business' },
  { id: 'economics', title: 'Unit Economics', subtitle: 'Best-in-class efficiency', type: 'economics' },
  { id: 'competitive', title: 'Competitive Advantages', type: 'competitive' },
  { id: 'milestones', title: 'Company Milestones', type: 'milestones' },
  { id: 'team', title: 'World-Class Team', type: 'team' },
  { id: 'financials', title: 'Financial Projections', subtitle: '2025-2030 Hypergrowth', type: 'financials' },
  { id: 'ask', title: 'The Investment', subtitle: 'Series B Opportunity', type: 'ask' }
];

export default function InvestorRelations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDeck, setShowDeck] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearlyData, setYearlyData] = useState({
    '2026': { revenue: 25, opex: 17, profit: 8 },
    '2027': { revenue: 90, opex: 55, profit: 35 },
    '2028': { revenue: 280, opex: 155, profit: 125 },
    '2029': { revenue: 650, opex: 330, profit: 320 },
    '2030': { revenue: 1400, opex: 650, profit: 750 }
  });

  const updateValue = (year, field, delta) => {
    setYearlyData(prev => ({
      ...prev,
      [year]: {
        ...prev[year],
        [field]: Math.max(0, prev[year][field] + delta)
      }
    }));
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % investmentSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + investmentSlides.length) % investmentSlides.length);

  const downloadPDF = () => {
    const pdf = new jsPDF('landscape', 'mm', [297, 210]);
    const slideWidth = 297;
    const slideHeight = 210;
    
    investmentSlides.forEach((slide, index) => {
      if (index > 0) pdf.addPage();
      
      // Purple gradient background
      pdf.setFillColor(98, 9, 230);
      pdf.rect(0, 0, slideWidth, slideHeight, 'F');
      pdf.setFillColor(124, 58, 237);
      pdf.triangle(slideWidth, 0, slideWidth, slideHeight, 0, slideHeight, 'F');
      
      // Slide number
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(10);
      pdf.text(`${index + 1} / ${investmentSlides.length}`, slideWidth - 20, 15, { align: 'right' });
      
      // Title
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(36);
      pdf.setFont('helvetica', 'bold');
      pdf.text(slide.title, slideWidth / 2, 70, { align: 'center', maxWidth: slideWidth - 60 });
      
      // Subtitle
      if (slide.subtitle) {
        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(226, 232, 240);
        pdf.text(slide.subtitle, slideWidth / 2, 92, { align: 'center', maxWidth: slideWidth - 60 });
      }
      
      // Type-specific content
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(216, 180, 254);
      
      if (slide.id === 'cover') {
        pdf.setFontSize(14);
        pdf.text('42 Beta Customers | $2M Series A | 2027: 10K Target', slideWidth / 2, 120, { align: 'center' });
      } else if (slide.id === 'problem') {
        pdf.text('87% struggle | 12-18mo deploy | 3x cost to scale', slideWidth / 2, 120, { align: 'center' });
      } else if (slide.id === 'yearly') {
        pdf.text('178% CAGR | $750M by 2030 | 9,275% total growth', slideWidth / 2, 120, { align: 'center' });
      } else if (slide.id === 'market') {
        pdf.text('$500B+ TAM | 85% adoption gap | 120% CAGR', slideWidth / 2, 120, { align: 'center' });
      }
      
      // Footer
      pdf.setFontSize(10);
      pdf.setTextColor(216, 180, 254);
      pdf.text('investor@1cplatform.com', slideWidth / 2, slideHeight - 10, { align: 'center' });
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
              1cPlatform is building the no-code platform that will democratize Agentic AI for enterprises worldwide.
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
              Despite massive AI investment, 87% of enterprises struggle to deploy and only 15% have successfully implemented autonomous agents. We're positioned to capture this massive opportunity as the market accelerates.
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

      {/* User Acquisition Plan */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Plan to Acquire Active Users
            </h2>
            <div className="inline-flex items-center gap-3 bg-cyan-400 rounded-full px-8 py-4 mb-8">
              <div className="text-4xl font-bold text-white">$1.3B</div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={[
                  { year: '2026', users: 50000, color: '#0891B2' },
                  { year: '2028', users: 200000, color: '#0891B2' },
                  { year: '2030', users: 500000, color: '#0891B2' },
                  { year: '2033', users: 1500000, color: '#6209e6' },
                  { year: '2036', users: 3500000, color: '#6209e6' }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="year" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Bar dataKey="users" radius={[8, 8, 0, 0]}>
                    {[
                      { year: '2026', users: 50000, color: '#0891B2' },
                      { year: '2028', users: 200000, color: '#0891B2' },
                      { year: '2030', users: 500000, color: '#0891B2' },
                      { year: '2033', users: 1500000, color: '#6209e6' },
                      { year: '2036', users: 3500000, color: '#6209e6' }
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#0891B2]"></div>
                  <span className="text-sm text-gray-600">Foundation Phase</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#6209e6]"></div>
                  <span className="text-sm text-gray-600">Hypergrowth Phase</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Projection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Projected user acquisition from 2026 to 2036 with aggressive market penetration strategy. Targeting 3.5M+ active users by 2036 through enterprise expansion and product-led growth.
              </p>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-3xl font-bold text-[#6209e6] mb-2">500%</div>
                <div className="text-sm text-gray-600">Projected compound annual growth rate</div>
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
              Projected Quarterly Profits
            </h2>
          </motion.div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={[
                { quarter: 'Q1 2026', profit: 2, color: '#0891B2' },
                { quarter: 'Q2 2026', profit: 2, color: '#0891B2' },
                { quarter: 'Q3 2026', profit: 3, color: '#0891B2' },
                { quarter: 'Q4 2026', profit: 4, color: '#0891B2' },
                { quarter: 'Q1 2027', profit: 6, color: '#6209e6' },
                { quarter: 'Q2 2027', profit: 6, color: '#6209e6' },
                { quarter: 'Q3 2027', profit: 7, color: '#6209e6' },
                { quarter: 'Q4 2027', profit: 8, color: '#6209e6' }
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
                <div className="text-sm text-gray-600">Early phase growth (2026)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#6209e6]">+124%</div>
                <div className="text-sm text-gray-600">Acceleration phase (2027)</div>
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
              Projected Yearly Profit
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={Object.keys(yearlyData).map(year => ({
                  year,
                  revenue: yearlyData[year].revenue,
                  opex: yearlyData[year].opex,
                  profit: yearlyData[year].profit
                }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" tickFormatter={(value) => `$${value}m`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                    labelStyle={{ color: '#1F2937' }}
                    formatter={(value) => [`$${value}m`]}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10B981"
                    name="Revenue"
                    strokeWidth={3}
                    dot={(props) => {
                      const isSelected = selectedYear === props.payload.year;
                      return (
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={isSelected ? 10 : 6}
                          fill="#10B981"
                          stroke={isSelected ? "#fff" : "#10B981"}
                          strokeWidth={isSelected ? 3 : 0}
                        />
                      );
                    }}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="opex" 
                    stroke="#F59E0B"
                    name="Operating Expense"
                    strokeWidth={3}
                    dot={(props) => {
                      const isSelected = selectedYear === props.payload.year;
                      return (
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={isSelected ? 10 : 6}
                          fill="#F59E0B"
                          stroke={isSelected ? "#fff" : "#F59E0B"}
                          strokeWidth={isSelected ? 3 : 0}
                        />
                      );
                    }}
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="profit" 
                    stroke="#6209e6" 
                    name="Profit"
                    strokeWidth={3}
                    dot={(props) => {
                      const isSelected = selectedYear === props.payload.year;
                      return (
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={isSelected ? 10 : 6}
                          fill="#6209e6"
                          stroke={isSelected ? "#fff" : "#0891B2"}
                          strokeWidth={isSelected ? 3 : 2}
                        />
                      );
                    }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white border-2 border-[#6209e6] text-gray-900 p-8 rounded-2xl mb-6">
                <div className="text-6xl font-bold mb-2 text-[#6209e6]">178%</div>
                <div className="text-xl font-semibold">CAGR</div>
                <div className="text-sm mt-2">Compound annual growth rate (2026-2030)</div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Projected profit trajectory shows aggressive growth from 2026 onwards, driven by market expansion and enterprise adoption at scale.
              </p>
            </div>
          </div>

          {/* P&L Table */}
          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Projected P&L Statement (2026-2030)</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lg font-semibold">Year</TableHead>
                  <TableHead className="text-lg font-semibold text-right">Revenue</TableHead>
                  <TableHead className="text-lg font-semibold text-right">Operating Expense</TableHead>
                  <TableHead className="text-lg font-semibold text-right">Profit</TableHead>
                  <TableHead className="text-lg font-semibold text-right">Margin %</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.keys(yearlyData).map((year) => {
                  const data = yearlyData[year];
                  const margin = ((data.profit / data.revenue) * 100).toFixed(0);
                  const isLast = year === '2030';
                  
                  return (
                    <TableRow 
                      key={year}
                      onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                      className={`hover:bg-purple-50 transition-colors ${selectedYear === year ? 'bg-purple-100 border-l-4 border-[#6209e6]' : ''} ${isLast ? 'bg-gray-50' : ''}`}
                    >
                      <TableCell className={`${isLast ? 'font-bold' : 'font-medium'} text-base`}>{year}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={(e) => { e.stopPropagation(); updateValue(year, 'revenue', -10); }}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className={`text-base text-green-600 ${isLast ? 'font-bold' : 'font-semibold'}`}>
                            ${data.revenue.toFixed(1)}M
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={(e) => { e.stopPropagation(); updateValue(year, 'revenue', 10); }}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={(e) => { e.stopPropagation(); updateValue(year, 'opex', -10); }}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className={`text-base text-orange-600 ${isLast ? 'font-bold' : 'font-semibold'}`}>
                            ${data.opex.toFixed(1)}M
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={(e) => { e.stopPropagation(); updateValue(year, 'opex', 10); }}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={(e) => { e.stopPropagation(); updateValue(year, 'profit', -10); }}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className={`text-base text-[#6209e6] ${isLast ? 'font-bold' : 'font-semibold'}`}>
                            ${data.profit.toFixed(1)}M
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6"
                            onClick={(e) => { e.stopPropagation(); updateValue(year, 'profit', 10); }}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className={`text-right text-base ${isLast ? 'font-bold' : 'font-semibold'}`}>{margin}%</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
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
              { name: 'Enterprise SaaS', slices: [{ name: 'Our Share', value: 2, color: '#6209e6' }, { name: 'Available', value: 98, color: '#0891B2' }] },
              { name: 'Healthcare & Finance', slices: [{ name: 'Our Share', value: 1, color: '#6209e6' }, { name: 'Competitors', value: 25, color: '#374151' }, { name: 'Available', value: 74, color: '#0891B2' }] },
              { name: 'Manufacturing & Retail', slices: [{ name: 'Our Share', value: 1, color: '#6209e6' }, { name: 'Available', value: 85, color: '#0891B2' }, { name: 'Competitors', value: 14, color: '#374151' }] }
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
              { num: 1, title: 'Company Founded', date: 'Jan 2024', desc: 'Launched with vision to democratize enterprise AI' },
              { num: 2, title: 'Product Launch', date: 'Mar 2025', desc: 'First no-code Agentic AI platform goes live' },
              { num: 3, title: 'Series A Funding', date: 'Aug 2023', desc: 'Raised $2M for development' },
              { num: 4, title: '16 Beta Customers', date: 'Nov 2025', desc: 'Crossed 42 SMB customers milestone' },
              { num: 5, title: 'Global Expansion', date: 'Dec 2026', desc: 'Expand to 45+ countries worldwide' },
              { num: 6, title: 'Platform 2.0', date: 'Mar 2027', desc: 'Launch multi-agent orchestration' },
              { num: 7, title: 'Reach 10,000 Customers', date: 'Dec 2027', desc: 'Plan to 10,000 organizations using platform' }
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
                { metric: 'CAC', value: '$3,500', description: 'Customer acquisition cost' },
                { metric: 'LTV', value: '$42,000', description: 'Projected lifetime value' },
                { metric: 'LTV:CAC', value: '12:1', description: 'Excellent efficiency' },
                { metric: 'Payback', value: '6 months', description: 'Projected capital return' }
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
                <reason.icon className="w-14 h-14 text-[#6209e6] mb-6" />
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
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                    alt="1C Platform" 
                    className="w-20 h-20"
                  />
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
              { icon: Award, title: 'Strong Validation', desc: '95% beta customer retention' }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100 text-center"
              >
                <advantage.icon className="w-12 h-12 text-[#6209e6] mx-auto mb-4" />
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

      {/* SWOT Analysis */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SWOT Analysis
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Strategic positioning and growth opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Strengths</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'First-to-market no-code Agentic AI platform',
                  'Proprietary multi-agent orchestration technology',
                  '95% beta customer retention rate',
                  'Enterprise-grade security (SOC 2, ISO 27001)',
                  'Strong founding team with 30+ years experience',
                  '100x faster deployment than competitors',
                  'Validated product-market fit across 14 industries'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Weaknesses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border-2 border-yellow-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Weaknesses</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Early-stage company with limited brand recognition',
                  'Small customer base (42 beta customers)',
                  'Not yet profitable (targeting 2028)',
                  'Limited sales and marketing infrastructure',
                  'Dependence on third-party AI model providers',
                  'Need to scale team rapidly (hiring challenges)'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-yellow-600 flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Opportunities</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '$500B+ TAM with only 15% enterprise AI adoption',
                  'Rapid market growth (120% CAGR)',
                  'Expand to 14 untapped vertical markets',
                  'International expansion to 45+ countries',
                  'Strategic partnerships with system integrators',
                  'Government sector adoption (low penetration)',
                  'Platform ecosystem and marketplace revenue'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Threats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border-2 border-red-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Threats</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Well-funded competitors entering the market',
                  'Big Tech companies (Google, Microsoft) building similar solutions',
                  'Rapid technology changes requiring constant innovation',
                  'Economic downturn affecting enterprise spending',
                  'Data privacy and AI regulation uncertainty',
                  'Customer acquisition cost inflation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-600 flex-shrink-0 mt-0.5"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tracy Triangle - Strategy Framework */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Strategic Triangle
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Our competitive advantage framework
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center min-h-[500px]"
            >
              <svg viewBox="0 0 400 400" className="w-full max-w-md">
                {/* Triangle */}
                <path
                  d="M 200 50 L 350 350 L 50 350 Z"
                  fill="none"
                  stroke="#6209e6"
                  strokeWidth="4"
                />
                
                {/* Top vertex - Technology */}
                <circle cx="200" cy="50" r="45" fill="#6209e6" />
                <text x="200" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Technology</text>
                <text x="200" y="62" textAnchor="middle" fill="white" fontSize="12">Innovation</text>
                
                {/* Bottom right vertex - Market */}
                <circle cx="350" cy="350" r="45" fill="#0891B2" />
                <text x="350" y="345" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Market</text>
                <text x="350" y="362" textAnchor="middle" fill="white" fontSize="12">Opportunity</text>
                
                {/* Bottom left vertex - Execution */}
                <circle cx="50" cy="350" r="45" fill="#10B981" />
                <text x="50" y="345" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Execution</text>
                <text x="50" y="362" textAnchor="middle" fill="white" fontSize="12">Excellence</text>
                
                {/* Center - Competitive Advantage */}
                <circle cx="200" cy="240" r="65" fill="#F59E0B" opacity="0.95" />
                <text x="200" y="235" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Competitive</text>
                <text x="200" y="250" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Advantage</text>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-2xl border-2 border-[#6209e6] shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="w-8 h-8 text-[#6209e6]" />
                  <h3 className="text-xl font-bold text-gray-900">Technology Innovation</h3>
                </div>
                <p className="text-gray-700 mb-3">Proprietary no-code platform with multi-agent orchestration</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Advanced AI models and algorithms</li>
                  <li>• 100x faster than custom development</li>
                  <li>• Patent-pending technology</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-[#0891B2] shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-8 h-8 text-[#0891B2]" />
                  <h3 className="text-xl font-bold text-gray-900">Market Opportunity</h3>
                </div>
                <p className="text-gray-700 mb-3">$500B+ TAM with massive enterprise AI adoption gap</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 85% of enterprises haven't deployed AI agents</li>
                  <li>• 120% market CAGR growth</li>
                  <li>• 14 vertical markets addressable</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-[#10B981] shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-8 h-8 text-[#10B981]" />
                  <h3 className="text-xl font-bold text-gray-900">Execution Excellence</h3>
                </div>
                <p className="text-gray-700 mb-3">World-class team with proven track record</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 30+ years combined experience</li>
                  <li>• 95% customer retention rate</li>
                  <li>• Validated product-market fit</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Magic Quadrant - Competitive Positioning */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Competitive Positioning Map
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Leading in both vision and execution
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <div className="relative w-full aspect-square">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  {/* Background quadrants */}
                  <rect x="0" y="0" width="250" height="250" fill="#FEE2E2" opacity="0.3" />
                  <rect x="250" y="0" width="250" height="250" fill="#DBEAFE" opacity="0.3" />
                  <rect x="0" y="250" width="250" height="250" fill="#FEF3C7" opacity="0.3" />
                  <rect x="250" y="250" width="250" height="250" fill="#D1FAE5" opacity="0.3" />
                  
                  {/* Grid lines */}
                  <line x1="250" y1="0" x2="250" y2="500" stroke="#9CA3AF" strokeWidth="2" />
                  <line x1="0" y1="250" x2="500" y2="250" stroke="#9CA3AF" strokeWidth="2" />
                  
                  {/* Axes labels */}
                  <text x="250" y="490" textAnchor="middle" fill="#374151" fontSize="16" fontWeight="bold">
                    Completeness of Vision →
                  </text>
                  <text x="20" y="250" textAnchor="start" fill="#374151" fontSize="16" fontWeight="bold" transform="rotate(-90 20 250)">
                    Ability to Execute →
                  </text>
                  
                  {/* Quadrant labels */}
                  <text x="125" y="125" textAnchor="middle" fill="#991B1B" fontSize="14" fontWeight="600">Niche Players</text>
                  <text x="375" y="125" textAnchor="middle" fill="#1E40AF" fontSize="14" fontWeight="600">Visionaries</text>
                  <text x="125" y="375" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="600">Challengers</text>
                  <text x="375" y="375" textAnchor="middle" fill="#065F46" fontSize="14" fontWeight="600">Leaders</text>
                  
                  {/* Competitors */}
                  <circle cx="150" cy="300" r="20" fill="#EF4444" opacity="0.7" />
                  <text x="150" y="305" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">A</text>
                  
                  <circle cx="320" cy="200" r="22" fill="#3B82F6" opacity="0.7" />
                  <text x="320" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">B</text>
                  
                  <circle cx="200" cy="320" r="18" fill="#F59E0B" opacity="0.7" />
                  <text x="200" y="325" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
                  
                  <circle cx="280" cy="280" r="18" fill="#F59E0B" opacity="0.7" />
                  <text x="280" y="285" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">D</text>
                  
                  {/* 1cPlatform - Leaders quadrant */}
                  <circle cx="380" cy="120" r="35" fill="#6209e6" stroke="#ffffff" strokeWidth="4" />
                  <text x="380" y="118" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1C</text>
                  <text x="380" y="132" textAnchor="middle" fill="white" fontSize="10">Platform</text>
                  
                  {/* Arrow pointing to 1C */}
                  <path d="M 420 100 L 450 70" stroke="#6209e6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#6209e6" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-[#6209e6] to-[#7C3AED] p-8 rounded-2xl text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-4">1cPlatform: Leader Quadrant</h3>
                <p className="text-purple-100 mb-6">
                  Positioned as a leader with strong vision and execution capabilities
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Complete no-code platform vision</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Validated product-market fit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Strong execution track record</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Competitor A</div>
                  <div className="text-sm font-semibold text-gray-900">Legacy Automation</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Competitor B</div>
                  <div className="text-sm font-semibold text-gray-900">AI Startup</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Competitor C</div>
                  <div className="text-sm font-semibold text-gray-900">RPA Provider</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">Competitor D</div>
                  <div className="text-sm font-semibold text-gray-900">Low-Code Platform</div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Our Competitive Edge</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Vision:</strong> Complete no-code Agentic AI platform</li>
                  <li>• <strong>Execution:</strong> 95% customer retention, rapid deployment</li>
                  <li>• <strong>Technology:</strong> Proprietary multi-agent orchestration</li>
                  <li>• <strong>Market:</strong> First-mover in enterprise no-code AI</li>
                </ul>
              </div>
            </motion.div>
          </div>
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
                { year: '2024', revenue: '$0', growth: 'N/A', customers: '0', arr: '$0' },
                { year: '2025', revenue: '$0.8M', growth: 'Launch', customers: '42', arr: '$1.2M' },
                { year: '2026 (proj)', revenue: '$8M', growth: '+900%', customers: '500', arr: '$12M' }
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
                    { year: '2025', revenue: '$0.8M', margin: '-80%', status: 'Launch', focus: 'Product development' },
                    { year: '2026', revenue: '$8M', margin: '-40%', status: 'Early growth', focus: 'Customer acquisition' },
                    { year: '2027', revenue: '$35M', margin: '-15%', status: 'Scale', focus: 'Market expansion' },
                    { year: '2028', revenue: '$125M', margin: '+5%', status: 'Profitable', focus: 'Enterprise dominance' },
                    { year: '2029', revenue: '$320M', margin: '+18%', status: 'High margins', focus: 'Global leadership' },
                    { year: '2030', revenue: '$750M', margin: '+25%', status: 'IPO ready', focus: 'Sustained growth' }
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
                    { metric: 'Enterprise Customers', y2025: '42', y2027: '10,000', y2030: '50,000' },
                    { metric: 'Countries', y2025: '5', y2027: '45', y2030: '85+' },
                    { metric: 'Team Size', y2025: '15', y2027: '120', y2030: '800' },
                    { metric: 'Net Revenue Retention', y2025: 'N/A', y2027: '130%', y2030: '145%' },
                    { metric: 'Gross Margin', y2025: '65%', y2027: '75%', y2030: '82%' }
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
              className="mt-12 bg-gradient-to-br from-[#9333EA] to-[#7C3AED] p-12 md:p-16 rounded-3xl border-2 border-purple-400"
            >
              <h4 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">Strategic Milestones</h4>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { phase: '2025-2026: Foundation', goals: ['Acquire first 500 customers', 'Expand to 15+ countries', 'Build sales team', 'Achieve product-market fit'] },
                  { phase: '2027-2028: Dominance', goals: ['Achieve profitability', 'Reach 10,000 customers', 'Strategic partnerships', 'Platform ecosystem launch'] },
                  { phase: '2029-2030: IPO Prep', goals: ['$750M+ revenue run rate', 'Category leadership', 'Public market readiness', 'Sustainable growth'] }
                ].map((milestone, index) => (
                  <div key={milestone.phase} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h5 className="font-bold text-white text-xl mb-4">{milestone.phase}</h5>
                    <ul className="space-y-3">
                      {milestone.goals.map((goal) => (
                        <li key={goal} className="flex items-start gap-3 text-base">
                          <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-purple-100">{goal}</span>
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
                We're in the early stages of our growth journey with strong initial traction, validated product-market fit, and a clear path to scaling.
              </p>
              <div className="space-y-4">
                {[
                  '42 beta customers onboarded',
                  'Product launched March 2025',
                  'Strong initial customer validation',
                  'Clear path to 10K customers by 2027',
                  'Series B funding to accelerate growth'
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
                  { year: '2024', event: 'Company founded, vision set' },
                  { year: '2025', event: 'Product launched, 42 beta customers' },
                  { year: '2026', event: 'Series B planned, global expansion' },
                  { year: '2027', event: '10,000 customers target' }
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
              Our founders and leadership team bring 30+ years of combined experience from Google, Microsoft, Amazon, and leading AI research labs, now focused on democratizing enterprise AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                <div className="text-sm text-gray-600">Combined experience</div>
                <div className="text-2xl font-bold text-[#6209e6]">30+ years</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                <div className="text-sm text-gray-600">Team size</div>
                <div className="text-2xl font-bold text-[#6209e6]">15 people</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
                <div className="text-sm text-gray-600">Beta customers</div>
                <div className="text-2xl font-bold text-[#6209e6]">42 SMBs</div>
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
               role: '5 Industry Experts',
               background: 'Former C-suite executives from Fortune 500 companies across healthcare, finance, and manufacturing. Deep expertise in AI, enterprise software, and go-to-market strategy.'
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
              Join us in building the category-defining Agentic AI platform. Early-stage opportunity to invest in the future of enterprise automation.
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

            {/* Download PDF Button */}
            <button
              onClick={downloadPDF}
              className="absolute top-4 right-20 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            >
              <Download className="w-6 h-6" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="absolute top-4 right-36 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
            >
              <Maximize2 className="w-6 h-6" />
            </button>

            {/* Slide Container */}
            <div className={`${isFullscreen ? 'h-full' : 'aspect-[16/9]'} bg-gradient-to-br from-[#6209e6] via-[#7C3AED] to-[#8B5CF6] rounded-3xl overflow-hidden relative shadow-2xl border border-purple-300`}>
              {/* Slide Number */}
              <div className="absolute top-6 right-6 text-sm font-semibold text-white/60 z-10">
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
                  <div className="text-center max-w-4xl text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-32 h-32 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border-4 border-white/30"
                    >
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                        alt="1C" 
                        className="w-20 h-20"
                      />
                    </motion.div>
                    <h1 className="text-7xl md:text-8xl font-bold mb-6">1C Platform</h1>
                    <p className="text-3xl text-purple-100 mb-12">The No-Code Agentic AI Revolution</p>
                    <div className="grid grid-cols-3 gap-6 mt-16">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <div className="text-4xl font-bold mb-2">42</div>
                        <div className="text-sm text-purple-200">Beta Customers</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <div className="text-4xl font-bold mb-2">$2M</div>
                        <div className="text-sm text-purple-200">Series A Raised</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <div className="text-4xl font-bold mb-2">2027</div>
                        <div className="text-sm text-purple-200">10K Target</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Problem Slide */}
                {investmentSlides[currentSlide].id === 'problem' && (
                  <div className="w-full max-w-5xl text-white">
                    <h2 className="text-5xl font-bold mb-4 text-center">The Enterprise AI Crisis</h2>
                    <p className="text-xl text-purple-200 text-center mb-12">$2.5 trillion market struggling with AI adoption</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { stat: '87%', label: 'Struggle with complexity', desc: '$2.5M avg cost to build' },
                        { stat: '12-18mo', label: 'Time to deploy', desc: '40% market share lost' },
                        { stat: '3x', label: 'Cost to scale', desc: '60% budget on maintenance' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-red-400/50 rounded-2xl p-6 text-center">
                          <div className="text-5xl font-bold text-red-300 mb-3">{item.stat}</div>
                          <div className="text-lg font-semibold mb-2">{item.label}</div>
                          <div className="text-sm text-purple-200">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Solution Slide */}
                {investmentSlides[currentSlide].id === 'solution' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-12 text-center">Our Solution: The 1cPlatform Advantage</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                      {[
                        { icon: Zap, title: 'No-Code Platform', desc: 'Deploy AI agents 100x faster than competitors', stat: '100x faster' },
                        { icon: Brain, title: 'Advanced AI Models', desc: 'Proprietary multi-agent orchestration', stat: '95% automation' },
                        { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security & compliance', stat: 'SOC 2 + ISO' },
                        { icon: Award, title: 'Strong Validation', desc: 'Beta customer retention', stat: '95% retention' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                          <item.icon className="w-16 h-16 mx-auto mb-4" />
                          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                          <p className="text-sm text-purple-200 mb-4">{item.desc}</p>
                          <div className="text-xl font-bold">{item.stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Slide */}
                {investmentSlides[currentSlide].id === 'product' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-10 text-center">Complete AI Product Suite</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { icon: Zap, title: 'No-Code AI Builder', points: ['Zero coding required', '5-minute deployment', '100+ templates'], metric: '100x faster' },
                        { icon: Brain, title: 'Multi-Agent Orchestration', points: ['Self-learning agents', 'Collaborative AI teams', 'Context-aware'], metric: '95% automation' },
                        { icon: Globe, title: 'Enterprise Infrastructure', points: ['SOC 2 certified', 'GDPR & HIPAA', 'Auto-scaling'], metric: '99.99% uptime' },
                        { icon: TrendingUp, title: 'Rapid ROI', points: ['90-day ROI', '45% cost reduction', '60% productivity'], metric: '90-day ROI' }
                      ].map((product, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                          <product.icon className="w-12 h-12 mb-3" />
                          <h3 className="text-lg font-bold mb-3">{product.title}</h3>
                          <ul className="space-y-1.5 mb-4">
                            {product.points.map((point, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-purple-200">
                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="text-base font-bold pt-3 border-t border-white/20">{product.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Traction Slide */}
                {investmentSlides[currentSlide].id === 'traction' && (
                  <div className="w-full max-w-5xl text-white">
                    <h2 className="text-4xl font-bold mb-4 text-center">Market Traction</h2>
                    <p className="text-xl text-purple-200 text-center mb-10">Proven success across industries</p>
                    <div className="grid grid-cols-4 gap-6">
                      {[
                        { value: '42', label: 'Beta Customers', icon: Users },
                        { value: '95%', label: 'Retention Rate', icon: Award },
                        { value: '10K', label: '2027 Target', icon: TrendingUp },
                        { value: '$2M', label: 'Series A', icon: Rocket }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                          <metric.icon className="w-8 h-8 mx-auto mb-3" strokeWidth={2} />
                          <div className="text-3xl font-bold mb-2">{metric.value}</div>
                          <div className="text-sm text-purple-200">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold mb-1">$15K</div>
                          <div className="text-sm text-purple-200">Avg Deal Size</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold mb-1">2.5 mo</div>
                          <div className="text-sm text-purple-200">Sales Cycle</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold mb-1">16</div>
                          <div className="text-sm text-purple-200">Active Beta</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Demographics Slide */}
                {investmentSlides[currentSlide].id === 'demographics' && (
                  <div className="text-white w-full h-full flex flex-col justify-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8">Plan to Acquire Active Users</h2>
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                      <div className="md:col-span-2">
                        <div className="bg-white p-8 rounded-2xl">
                          <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={[
                              { year: '2026', users: 50000 },
                              { year: '2028', users: 200000 },
                              { year: '2030', users: 500000 },
                              { year: '2033', users: 1500000 },
                              { year: '2036', users: 3500000 }
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
                              <span className="text-sm text-gray-700 font-medium">Foundation Phase</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded bg-[#6209e6]"></div>
                              <span className="text-sm text-gray-700 font-medium">Hypergrowth</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-block bg-cyan-400 rounded-full px-10 py-6 mb-8">
                          <div className="text-6xl font-bold text-gray-900">$1.3B</div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Growth Projection</h3>
                        <p className="text-lg opacity-90">Targeting 3.5M+ active users by 2036 through enterprise expansion.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* SWOT Slide */}
                {investmentSlides[currentSlide].id === 'swot' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-12 text-center">SWOT Analysis</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Strengths */}
                      <div className="bg-green-500/20 backdrop-blur-sm border-2 border-green-300/50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle2 className="w-6 h-6" />
                          <h3 className="text-xl font-bold">Strengths</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>• First-to-market no-code platform</li>
                          <li>• 95% customer retention</li>
                          <li>• Enterprise-grade security</li>
                          <li>• 100x faster deployment</li>
                          <li>• Strong founding team</li>
                        </ul>
                      </div>

                      {/* Weaknesses */}
                      <div className="bg-yellow-500/20 backdrop-blur-sm border-2 border-yellow-300/50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="w-6 h-6" />
                          <h3 className="text-xl font-bold">Weaknesses</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>• Early-stage company</li>
                          <li>• Small customer base</li>
                          <li>• Not yet profitable</li>
                          <li>• Limited brand recognition</li>
                          <li>• Rapid team scaling needed</li>
                        </ul>
                      </div>

                      {/* Opportunities */}
                      <div className="bg-blue-500/20 backdrop-blur-sm border-2 border-blue-300/50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="w-6 h-6" />
                          <h3 className="text-xl font-bold">Opportunities</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>• $500B+ TAM with 85% gap</li>
                          <li>• 120% market CAGR</li>
                          <li>• 14 vertical markets</li>
                          <li>• International expansion</li>
                          <li>• Strategic partnerships</li>
                        </ul>
                      </div>

                      {/* Threats */}
                      <div className="bg-red-500/20 backdrop-blur-sm border-2 border-red-300/50 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Shield className="w-6 h-6" />
                          <h3 className="text-xl font-bold">Threats</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li>• Well-funded competitors</li>
                          <li>• Big Tech entering market</li>
                          <li>• Rapid tech changes</li>
                          <li>• Economic uncertainty</li>
                          <li>• Regulatory changes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Strategic Triangle Slide */}
                {investmentSlides[currentSlide].id === 'triangle' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-12 text-center">Strategic Triangle Framework</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="flex items-center justify-center">
                        <svg viewBox="0 0 400 400" className="w-full max-w-md">
                          <path d="M 200 50 L 350 350 L 50 350 Z" fill="none" stroke="#ffffff" strokeWidth="4" />
                          
                          <circle cx="200" cy="50" r="45" fill="#ffffff" />
                          <text x="200" y="45" textAnchor="middle" fill="#6209e6" fontSize="14" fontWeight="bold">Technology</text>
                          <text x="200" y="62" textAnchor="middle" fill="#6209e6" fontSize="12">Innovation</text>
                          
                          <circle cx="350" cy="350" r="45" fill="#ffffff" />
                          <text x="350" y="345" textAnchor="middle" fill="#6209e6" fontSize="14" fontWeight="bold">Market</text>
                          <text x="350" y="362" textAnchor="middle" fill="#6209e6" fontSize="12">Opportunity</text>
                          
                          <circle cx="50" cy="350" r="45" fill="#ffffff" />
                          <text x="50" y="345" textAnchor="middle" fill="#6209e6" fontSize="14" fontWeight="bold">Execution</text>
                          <text x="50" y="362" textAnchor="middle" fill="#6209e6" fontSize="12">Excellence</text>
                          
                          <circle cx="200" cy="240" r="65" fill="#F59E0B" opacity="0.95" />
                          <text x="200" y="235" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Competitive</text>
                          <text x="200" y="250" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Advantage</text>
                        </svg>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                          <h4 className="font-bold text-lg mb-2">Technology</h4>
                          <p className="text-sm text-purple-200">Proprietary no-code platform, 100x faster deployment</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                          <h4 className="font-bold text-lg mb-2">Market</h4>
                          <p className="text-sm text-purple-200">$500B+ TAM, 85% adoption gap, 120% CAGR</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                          <h4 className="font-bold text-lg mb-2">Execution</h4>
                          <p className="text-sm text-purple-200">30+ years experience, 95% retention, validated PMF</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Magic Quadrant Slide */}
                {investmentSlides[currentSlide].id === 'quadrant' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-12 text-center">Magic Quadrant - Market Leadership</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                        <svg viewBox="0 0 500 500" className="w-full h-full">
                          <rect x="0" y="0" width="250" height="250" fill="#FEE2E2" opacity="0.2" />
                          <rect x="250" y="0" width="250" height="250" fill="#DBEAFE" opacity="0.2" />
                          <rect x="0" y="250" width="250" height="250" fill="#FEF3C7" opacity="0.2" />
                          <rect x="250" y="250" width="250" height="250" fill="#D1FAE5" opacity="0.3" />
                          
                          <line x1="250" y1="0" x2="250" y2="500" stroke="#ffffff" strokeWidth="2" />
                          <line x1="0" y1="250" x2="500" y2="250" stroke="#ffffff" strokeWidth="2" />
                          
                          <text x="250" y="490" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">
                            Completeness of Vision →
                          </text>
                          <text x="20" y="250" textAnchor="start" fill="#ffffff" fontSize="16" fontWeight="bold" transform="rotate(-90 20 250)">
                            Ability to Execute →
                          </text>
                          
                          <text x="125" y="125" textAnchor="middle" fill="#DC2626" fontSize="14" fontWeight="600">Niche</text>
                          <text x="375" y="125" textAnchor="middle" fill="#2563EB" fontSize="14" fontWeight="600">Visionaries</text>
                          <text x="125" y="375" textAnchor="middle" fill="#D97706" fontSize="14" fontWeight="600">Challengers</text>
                          <text x="375" y="375" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="600">Leaders</text>
                          
                          <circle cx="150" cy="300" r="18" fill="#EF4444" opacity="0.8" />
                          <text x="150" y="305" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">A</text>
                          
                          <circle cx="320" cy="200" r="20" fill="#3B82F6" opacity="0.8" />
                          <text x="320" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">B</text>
                          
                          <circle cx="200" cy="320" r="16" fill="#F59E0B" opacity="0.8" />
                          <text x="200" y="325" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">C</text>
                          
                          <circle cx="280" cy="280" r="16" fill="#F59E0B" opacity="0.8" />
                          <text x="280" y="285" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">D</text>
                          
                          <circle cx="400" cy="120" r="35" fill="#ffffff" stroke="#F59E0B" strokeWidth="4" />
                          <text x="400" y="118" textAnchor="middle" fill="#6209e6" fontSize="14" fontWeight="bold">1C</text>
                          <text x="400" y="132" textAnchor="middle" fill="#6209e6" fontSize="10">Platform</text>
                        </svg>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6">
                          <h3 className="text-2xl font-bold mb-4">Leader Quadrant</h3>
                          <p className="text-purple-200 mb-4">
                            Positioned as market leader with complete vision and strong execution
                          </p>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Complete no-code platform vision</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>95% customer retention</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Validated execution</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="bg-white/5 p-3 rounded-lg">
                            <div className="text-xs text-purple-300 mb-1">Competitor A</div>
                            <div className="font-semibold">Legacy Automation</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg">
                            <div className="text-xs text-purple-300 mb-1">Competitor B</div>
                            <div className="font-semibold">AI Startup</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg">
                            <div className="text-xs text-purple-300 mb-1">Competitor C</div>
                            <div className="font-semibold">RPA Provider</div>
                          </div>
                          <div className="bg-white/5 p-3 rounded-lg">
                            <div className="text-xs text-purple-300 mb-1">Competitor D</div>
                            <div className="font-semibold">Low-Code Platform</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Community Demographics */}
                {investmentSlides[currentSlide].id === 'demographics' && (
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
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-10 text-center">Quarterly Profit Trajectory</h2>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                      <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={[
                          { quarter: 'Q1 26', profit: 2 },
                          { quarter: 'Q2 26', profit: 2 },
                          { quarter: 'Q3 26', profit: 3 },
                          { quarter: 'Q4 26', profit: 4 },
                          { quarter: 'Q1 27', profit: 6 },
                          { quarter: 'Q2 27', profit: 6 },
                          { quarter: 'Q3 27', profit: 7 },
                          { quarter: 'Q4 27', profit: 8 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity="0.1" />
                          <XAxis dataKey="quarter" stroke="#ffffff" />
                          <YAxis stroke="#ffffff" tickFormatter={(value) => `$${value}m`} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }}
                            formatter={(value) => [`$${value}m`, 'Profit']}
                          />
                          <Bar dataKey="profit" radius={[8, 8, 0, 0]}>
                            {[0, 1, 2, 3].map((index) => (
                              <Cell key={`cell-${index}`} fill="#0891B2" />
                            ))}
                            {[4, 5, 6, 7].map((index) => (
                              <Cell key={`cell-${index}`} fill="#ffffff" />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                      <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="text-center bg-white/5 rounded-xl p-4">
                          <div className="text-4xl font-bold text-[#0891B2] mb-2">+46%</div>
                          <div className="text-sm text-purple-200">2026 Growth</div>
                        </div>
                        <div className="text-center bg-white/5 rounded-xl p-4">
                          <div className="text-4xl font-bold mb-2">+124%</div>
                          <div className="text-sm text-purple-200">2027 Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Yearly Profit Slide */}
                {investmentSlides[currentSlide].id === 'yearly' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-8 text-center">Yearly Profit Projection (2026-2030)</h2>
                    <div className="grid grid-cols-5 gap-6 items-end">
                      <div className="col-span-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <ResponsiveContainer width="100%" height={350}>
                          <LineChart data={Object.keys(yearlyData).map(year => ({
                            year,
                            revenue: yearlyData[year].revenue,
                            opex: yearlyData[year].opex,
                            profit: yearlyData[year].profit
                          }))}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity="0.1" />
                            <XAxis dataKey="year" stroke="#ffffff" />
                            <YAxis stroke="#ffffff" tickFormatter={(value) => `$${value}m`} />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }}
                              formatter={(value) => [`$${value}m`]}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="revenue" stroke="#10B981" name="Revenue" strokeWidth={4} dot={{ fill: '#10B981', r: 8 }} />
                            <Line type="monotone" dataKey="opex" stroke="#F59E0B" name="Operating Expense" strokeWidth={4} dot={{ fill: '#F59E0B', r: 8 }} />
                            <Line type="monotone" dataKey="profit" stroke="#ffffff" name="Profit" strokeWidth={4} dot={{ fill: '#ffffff', r: 8, strokeWidth: 3, stroke: '#0891B2' }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="col-span-2 space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 text-center">
                          <div className="text-6xl font-bold mb-2">178%</div>
                          <div className="text-lg font-semibold mb-1">CAGR</div>
                          <div className="text-sm text-purple-200">2026-2030</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold mb-1">$750M</div>
                          <div className="text-sm text-purple-200">2030 Target</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold mb-1">9,275%</div>
                          <div className="text-sm text-purple-200">Total growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Growth Slide */}
                {investmentSlides[currentSlide].id === 'growth' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-10 text-center">User Acquisition Plan (2026-2036)</h2>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-6">
                      <ResponsiveContainer width="100%" height={320}>
                        <BarChart data={[
                          { year: '2026', users: 50000 },
                          { year: '2028', users: 200000 },
                          { year: '2030', users: 500000 },
                          { year: '2033', users: 1500000 },
                          { year: '2036', users: 3500000 }
                        ]}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity="0.1" />
                          <XAxis dataKey="year" stroke="#ffffff" />
                          <YAxis stroke="#ffffff" tickFormatter={(val) => `${(val / 1000000).toFixed(1)}m`} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }}
                            formatter={(val) => `${(val / 1000000).toFixed(2)}m users`}
                          />
                          <Bar dataKey="users" radius={[8, 8, 0, 0]}>
                            {[0, 1, 2].map((index) => (
                              <Cell key={`cell-${index}`} fill="#0891B2" />
                            ))}
                            {[3, 4].map((index) => (
                              <Cell key={`cell-${index}`} fill="#ffffff" />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">3.5M</div>
                        <div className="text-sm text-purple-200">2036 Target</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">500%</div>
                        <div className="text-sm text-purple-200">CAGR</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">$1.3B</div>
                        <div className="text-sm text-purple-200">LTV</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Market Penetration Slide */}
                {investmentSlides[currentSlide].id === 'penetration' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-10 text-center">Market Penetration Strategy</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-4">
                        {[
                          { num: 1, title: 'Product-Led Growth', desc: 'Free tier driving 35% conversion, viral adoption through word-of-mouth' },
                          { num: 2, title: 'Enterprise Sales', desc: 'Direct sales closing $285K average deals in 4.2 months' },
                          { num: 3, title: 'Strategic Partnerships', desc: '15+ channel partners, 20% revenue contribution' },
                          { num: 4, title: 'Developer Ecosystem', desc: 'API-first, 1,000+ integrations' },
                          { num: 5, title: 'Vertical Solutions', desc: '14 specialized industries' }
                        ].map((strategy) => (
                          <div key={strategy.num} className="flex gap-3 items-start bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                            <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                              {strategy.num}
                            </div>
                            <div>
                              <div className="font-bold mb-1">{strategy.title}</div>
                              <div className="text-sm text-purple-200">{strategy.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <svg viewBox="0 0 400 400" className="w-full max-w-sm">
                          <circle cx="200" cy="200" r="60" fill="#ffffff" opacity="0.3" />
                          <text x="200" y="190" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">Increase</text>
                          <text x="200" y="210" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">Market</text>
                          <text x="200" y="226" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">Share</text>
                          
                          {[
                            { x: 200, y: 70, num: 1 },
                            { x: 330, y: 130, num: 2 },
                            { x: 330, y: 270, num: 3 },
                            { x: 200, y: 330, num: 4 },
                            { x: 70, y: 270, num: 5 }
                          ].map((pos) => (
                            <g key={pos.num}>
                              <line x1="200" y1="200" x2={pos.x} y2={pos.y} stroke="#ffffff" strokeWidth="2" strokeDasharray="4,4" opacity="0.5" />
                              <circle cx={pos.x} cy={pos.y} r="30" fill="#ffffff" opacity="0.3" />
                              <text x={pos.x} y={pos.y + 7} textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="bold">{pos.num}</text>
                            </g>
                          ))}
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Market Opportunity Slide */}
                {investmentSlides[currentSlide].id === 'market' && (
                  <div className="w-full max-w-5xl text-white">
                    <h2 className="text-4xl font-bold mb-4 text-center">Market Opportunity</h2>
                    <p className="text-xl text-purple-200 text-center mb-10">$500B+ TAM by 2030</p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {[
                        { value: '$500B+', label: 'TAM', sublabel: 'Enterprise AI by 2030' },
                        { value: '85%', label: 'Adoption Gap', sublabel: 'Without AI agents' },
                        { value: '120%', label: 'CAGR', sublabel: 'Fastest growing' }
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                          <div className="text-5xl font-bold mb-2">{stat.value}</div>
                          <div className="text-base font-semibold mb-1">{stat.label}</div>
                          <div className="text-sm text-purple-200">{stat.sublabel}</div>
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
                        <div key={idx} className="bg-white/5 rounded-xl p-4 flex justify-between items-center">
                          <span className="font-semibold">{market.industry}</span>
                          <div className="text-right">
                            <div className="text-lg font-bold">{market.tam}</div>
                            <div className="text-xs text-purple-200">{market.growth} CAGR</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* International Growth Slide */}
                {investmentSlides[currentSlide].id === 'international' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-10 text-center">International Growth Playbook</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <h3 className="text-xl font-bold">Local Marketing</h3>
                          </div>
                          <p className="text-sm text-purple-200">Localized campaigns, region-specific content, and strategic PR in target markets.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <h3 className="text-xl font-bold">Partnerships</h3>
                          </div>
                          <p className="text-sm text-purple-200">
                            Major system integrators and local service providers for instant market placement and seamless experience.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-10 rounded-2xl">
                          <div className="text-base mb-2 text-purple-200">Partners</div>
                          <div className="text-7xl font-bold">500+</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-10 rounded-2xl">
                          <div className="text-base mb-2 text-purple-200">Countries</div>
                          <div className="text-7xl font-bold">10+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expansion Opportunity Slide */}
                {investmentSlides[currentSlide].id === 'expansion' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-4 text-center">Expansion Opportunity</h2>
                    <p className="text-xl text-purple-200 text-center mb-10">Sector-by-sector market share</p>
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { name: 'Enterprise SaaS', slices: [{ value: 2, color: '#ffffff', name: 'Us' }, { value: 98, color: '#0891B2', name: 'Available' }] },
                        { name: 'Healthcare & Finance', slices: [{ value: 1, color: '#ffffff', name: 'Us' }, { value: 74, color: '#0891B2', name: 'Available' }, { value: 25, color: '#6B7280', name: 'Competitors' }] },
                        { name: 'Manufacturing & Retail', slices: [{ value: 1, color: '#ffffff', name: 'Us' }, { value: 85, color: '#0891B2', name: 'Available' }, { value: 14, color: '#6B7280', name: 'Competitors' }] }
                      ].map((sector, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                          <h3 className="text-lg font-bold mb-6 text-center">{sector.name}</h3>
                          <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                              <Pie
                                data={sector.slices}
                                cx="50%"
                                cy="50%"
                                innerRadius={45}
                                outerRadius={85}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ value }) => `${value}%`}
                              >
                                {sector.slices.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }}
                                formatter={(value) => `${value}%`}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="mt-4 space-y-2">
                            {sector.slices.map((slice, i) => (
                              <div key={i} className="flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: slice.color }}></div>
                                  <span>{slice.name}</span>
                                </div>
                                <span className="font-bold">{slice.value}%</span>
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
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-4 text-center">Business Model</h2>
                    <p className="text-xl text-purple-200 text-center mb-10">Multiple high-margin revenue streams</p>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { title: 'Subscription', percent: '70%', desc: 'SaaS contracts', growth: 'Launch phase' },
                        { title: 'Usage-Based', percent: '25%', desc: 'API & compute', growth: 'Scaling' },
                        { title: 'Services', percent: '5%', desc: 'Implementation', growth: 'Early stage' }
                      ].map((stream, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6">
                          <div className="text-5xl font-bold mb-2">{stream.percent}</div>
                          <h3 className="text-xl font-bold mb-3">{stream.title}</h3>
                          <p className="text-sm text-purple-200 mb-4">{stream.desc}</p>
                          <div className="pt-3 border-t border-white/20">
                            <div className="text-sm font-bold">{stream.growth}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 bg-white/5 rounded-2xl p-6">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold mb-1">78%</div>
                          <div className="text-sm text-purple-200">Gross Margin</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold mb-1">$48M</div>
                          <div className="text-sm text-purple-200">2025 ARR Target</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold mb-1">98%</div>
                          <div className="text-sm text-purple-200">Retention</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Unit Economics Slide */}
                {investmentSlides[currentSlide].id === 'economics' && (
                  <div className="w-full max-w-5xl text-white">
                    <h2 className="text-4xl font-bold mb-4 text-center">Unit Economics</h2>
                    <p className="text-xl text-purple-200 text-center mb-10">Best-in-class efficiency</p>
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      {[
                        { label: 'CAC', value: '$3,500', desc: 'Acquisition cost' },
                        { label: 'LTV', value: '$42K', desc: 'Lifetime value' },
                        { label: 'LTV:CAC', value: '12:1', desc: 'Efficiency ratio' },
                        { label: 'Payback', value: '6 mo', desc: 'Capital return' }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
                          <div className="text-sm font-semibold text-purple-300 mb-2">{metric.label}</div>
                          <div className="text-3xl font-bold mb-2">{metric.value}</div>
                          <div className="text-xs text-purple-200">{metric.desc}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <h3 className="text-lg font-bold mb-4">Revenue Metrics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-purple-200">ARR per customer</span>
                            <span className="font-bold">$2,800</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-purple-200">Beta retention</span>
                            <span className="font-bold">95%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-purple-200">Gross margin</span>
                            <span className="font-bold">65%</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                        <h3 className="text-lg font-bold mb-4">Growth Metrics</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-purple-200">Free to paid</span>
                            <span className="font-bold">25%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-purple-200">Expansion</span>
                            <span className="font-bold">2.5x</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-purple-200">Referral rate</span>
                            <span className="font-bold">40%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Competitive Advantages Slide */}
                {investmentSlides[currentSlide].id === 'competitive' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-10 text-center">Competitive Advantages</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { icon: Target, title: 'Network Effects', desc: 'Each deployment improves our AI' },
                        { icon: Shield, title: 'First-Mover', desc: 'Early market entry with validated product' },
                        { icon: Rocket, title: 'Innovation', desc: 'Differentiated technology solving real pain' },
                        { icon: Brain, title: 'Proprietary Tech', desc: 'Multi-agent orchestration engine' },
                        { icon: Users, title: 'Enterprise Ready', desc: 'SOC 2, GDPR from day one' },
                        { icon: Zap, title: 'Speed', desc: '100x faster than competitors' }
                      ].map((adv, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                          <adv.icon className="w-10 h-10 mb-3" />
                          <h3 className="text-base font-bold mb-2">{adv.title}</h3>
                          <p className="text-sm text-purple-200">{adv.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Milestones Slide */}
                {investmentSlides[currentSlide].id === 'milestones' && (
                  <div className="w-full max-w-5xl text-white">
                    <h2 className="text-4xl font-bold mb-10 text-center">Company Milestones</h2>
                    <div className="relative">
                      <div className="absolute top-12 left-12 right-12 h-1 bg-white/30"></div>
                      <div className="flex justify-between items-start relative pt-4">
                        <div className="flex flex-col items-center z-10">
                          <div className="w-16 h-16 bg-white/20 border-4 border-white/40 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold">Start</span>
                          </div>
                        </div>
                        {[
                          { num: 1, title: 'Founded', date: 'Jan 2024', top: true },
                          { num: 2, title: 'Launch', date: 'Mar 2025', top: false },
                          { num: 3, title: '16 Beta', date: 'Nov 2025', top: true },
                          { num: 4, title: 'Global', date: 'Dec 2026', top: false },
                          { num: 5, title: '10K', date: 'Dec 2027', top: true }
                        ].map((milestone) => (
                          <div key={milestone.num} className="flex flex-col items-center z-10">
                            <div className={milestone.top ? 'mb-2' : 'mt-2 order-2'}>
                              <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                                <div className="text-sm font-bold">{milestone.title}</div>
                                <div className="text-xs text-purple-200">{milestone.date}</div>
                              </div>
                            </div>
                            <div className={`w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-xl border-4 border-white/40 ${milestone.top ? 'mb-16' : 'mt-16 order-1'}`}>
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
                  <div className="w-full max-w-5xl text-white">
                    <h2 className="text-4xl font-bold mb-8 text-center">World-Class Team</h2>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      {[
                        { value: '30+ years', label: 'Combined experience' },
                        { value: '15', label: 'Team members' },
                        { value: '42', label: 'Beta customers' }
                      ].map((stat, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                          <div className="text-3xl font-bold mb-1">{stat.value}</div>
                          <div className="text-sm text-purple-200">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { name: 'Niroshi Nadarajah', role: 'CEO & Co-Founder', bg: 'Microbiology researcher → Enterprise AI pioneer' },
                        { name: 'Suf K Sulaiman', role: 'CTO & Co-Founder', bg: '30+ years AI/hardware. 12 patents' },
                        { name: 'Emily Zhang', role: 'Chief Product Officer', bg: 'VP at SaaS unicorn. 5M+ users' },
                        { name: 'Advisory Board', role: '5 Industry Experts', bg: 'Fortune 500 C-suite executives' }
                      ].map((leader, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                          <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
                          <p className="text-sm text-purple-300 font-semibold mb-2">{leader.role}</p>
                          <p className="text-xs text-purple-200">{leader.bg}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Financials Slide */}
                {investmentSlides[currentSlide].id === 'financials' && (
                  <div className="w-full max-w-6xl text-white">
                    <h2 className="text-4xl font-bold mb-4 text-center">Financial Projections</h2>
                    <p className="text-xl text-purple-200 text-center mb-10">2025-2030 Hypergrowth trajectory</p>
                    <div className="grid md:grid-cols-6 gap-4 mb-8">
                      {[
                        { year: '2025', revenue: '$0.8M', margin: '-80%' },
                        { year: '2026', revenue: '$8M', margin: '-40%' },
                        { year: '2027', revenue: '$35M', margin: '-15%' },
                        { year: '2028', revenue: '$125M', margin: '+5%' },
                        { year: '2029', revenue: '$320M', margin: '+18%' },
                        { year: '2030', revenue: '$750M', margin: '+25%' }
                      ].map((proj, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                          <div className="text-base font-bold mb-2">{proj.year}</div>
                          <div className="text-2xl font-bold mb-1">{proj.revenue}</div>
                          <div className={`text-xs font-semibold ${proj.margin.startsWith('-') ? 'text-yellow-300' : 'text-green-300'}`}>
                            {proj.margin}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6">
                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-3xl font-bold mb-1">2028</div>
                          <div className="text-sm text-purple-200">Profitability</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold mb-1">2030</div>
                          <div className="text-sm text-purple-200">IPO Ready</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold mb-1">400%+</div>
                          <div className="text-sm text-purple-200">YoY Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Investment Ask Slide */}
                {investmentSlides[currentSlide].id === 'ask' && (
                  <div className="w-full max-w-4xl text-center text-white">
                    <div className="w-24 h-24 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                        alt="1C" 
                        className="w-16 h-16"
                      />
                    </div>
                    <h2 className="text-5xl font-bold mb-6">Series B Investment</h2>
                    <p className="text-2xl text-purple-200 mb-12">Join us in building the future of enterprise AI</p>
                    <div className="grid grid-cols-3 gap-6 mb-12">
                      <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6">
                        <div className="text-4xl font-bold mb-2">$100M</div>
                        <div className="text-sm text-purple-200">Target raise</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6">
                        <div className="text-4xl font-bold mb-2">$2.5B</div>
                        <div className="text-sm text-purple-200">Valuation</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6">
                        <div className="text-4xl font-bold mb-2">Q1 2025</div>
                        <div className="text-sm text-purple-200">Close date</div>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <p className="text-lg text-purple-100 mb-6">
                        Fuel product development, customer acquisition, and international expansion
                      </p>
                      <div className="text-base text-purple-200">
                        Contact: <span className="font-semibold text-white">investor@1cplatform.com</span>
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