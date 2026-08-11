import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';
import FAQSection from '@/components/seo/FAQSection';
import { getFAQs } from '@/lib/seoFAQs';

const benefits = [
  { title: 'Competitive Salary', description: 'Top-tier compensation packages' },
  { title: 'Health & Wellness', description: 'Comprehensive health coverage' },
  { title: 'Remote First', description: 'Work from anywhere' },
  { title: 'Learning Budget', description: '$5K/year for growth' },
  { title: 'Equity Options', description: 'Own part of the company' },
  { title: 'Unlimited PTO', description: 'Take time when you need it' }
];

const openings = [
  // Sales Roles (6)
  {
    title: 'Enterprise Sales Executive',
    department: 'Sales',
    location: 'Remote / New York',
    type: 'Full-time',
    description: 'Drive enterprise deals with Fortune 500 companies across North America'
  },
  {
    title: 'Senior Account Executive - EMEA',
    department: 'Sales',
    location: 'London',
    type: 'Full-time',
    description: 'Lead sales initiatives and close deals with enterprise clients in EMEA region'
  },
  {
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
    description: 'Generate qualified leads and book demos for our enterprise AI platform'
  },
  {
    title: 'Solutions Engineer - Sales',
    department: 'Sales',
    location: 'San Francisco / Remote',
    type: 'Full-time',
    description: 'Partner with sales team to demonstrate technical capabilities and design solutions'
  },
  {
    title: 'Regional Sales Manager - APAC',
    department: 'Sales',
    location: 'Singapore',
    type: 'Full-time',
    description: 'Build and lead sales team across Asia-Pacific markets'
  },
  {
    title: 'Strategic Account Manager',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage relationships with key enterprise accounts and drive expansion revenue'
  },

  // UI/UX Roles (2)
  {
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive interfaces for complex AI agent workflows and enterprise dashboards'
  },
  {
    title: 'UX Researcher',
    department: 'Design',
    location: 'San Francisco / Remote',
    type: 'Full-time',
    description: 'Conduct user research to inform product strategy and design decisions'
  },

  // Agentic AI Developer Roles (16)
  {
    title: 'Staff Agentic AI Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Lead development of autonomous agent frameworks and multi-agent orchestration systems'
  },
  {
    title: 'Senior AI Agent Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and optimize AI agents with advanced reasoning and decision-making capabilities'
  },
  {
    title: 'Machine Learning Engineer - Agentic AI',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    description: 'Develop ML models powering autonomous agent behavior and learning systems'
  },
  {
    title: 'AI Agent Platform Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable infrastructure for deploying and managing thousands of AI agents'
  },
  {
    title: 'LLM Integration Specialist',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Integrate and optimize large language models for agent reasoning and communication'
  },
  {
    title: 'Agent Workflow Architect',
    department: 'Engineering',
    location: 'Remote / London',
    type: 'Full-time',
    description: 'Design complex multi-agent workflows and coordination patterns'
  },
  {
    title: 'AI Safety Engineer - Agentic Systems',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Ensure agent behavior aligns with safety constraints and ethical guidelines'
  },
  {
    title: 'Reinforcement Learning Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Develop RL algorithms enabling agents to learn from experience and optimize decisions'
  },
  {
    title: 'Natural Language Processing Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build NLP systems for agent communication and natural language understanding'
  },
  {
    title: 'AI Agent Testing Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop testing frameworks and quality assurance processes for AI agents'
  },
  {
    title: 'Knowledge Graph Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build knowledge representation systems enabling agent reasoning and memory'
  },
  {
    title: 'Agent Performance Optimization Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Optimize agent latency, throughput, and resource utilization at scale'
  },
  {
    title: 'Multi-Agent Coordination Specialist',
    department: 'Engineering',
    location: 'Remote / Singapore',
    type: 'Full-time',
    description: 'Design protocols for agent-to-agent communication and collaborative problem solving'
  },
  {
    title: 'AI Agent DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build CI/CD pipelines and monitoring systems for agent deployment lifecycle'
  },
  {
    title: 'Prompt Engineering Lead',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop frameworks and best practices for agent prompt design and optimization'
  },
  {
    title: 'Junior Agentic AI Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Learn and contribute to building next-generation autonomous AI agent systems'
  }
];

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOpenings = openings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
        <InternalLinker currentPage="Careers">
    <div className="bg-white">
      <PageMeta 
        title="Careers"
        description="Join our team building the future of enterprise AI. Competitive salary, remote-first culture, unlimited PTO, and equity options. Open positions in engineering, product, and more."
        url="/careers"
        keywords={['careers', 'jobs', 'AI careers', 'engineering jobs', 'remote work', 'tech careers']}
        image="https://images.unsplash.com/photo-1522202172294-6940c44f7c74?w=1200&h=630&fit=crop"
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: 'Enterprise Sales Executive at 1C Platform',
            description: 'Drive enterprise deals with Fortune 500 companies. Join a remote-first team building the future of enterprise AI.',
            employmentType: 'FULL_TIME',
            hiringOrganization: { '@type': 'Organization', name: '1C Platform', url: 'https://1cplatform.com' },
            jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Remote', addressCountry: 'US' } },
            datePosted: '2026-07-30',
            url: 'https://1cplatform.com/careers',
          }
        ]}
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Careers' }
      ]} />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-[#8B2EE5] font-semibold mb-6">CAREERS</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Build the future of
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                enterprise AI
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Join a team of world-class engineers, designers, and thinkers building AI that changes how businesses operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why 1cPlatform?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our people because they're our greatest asset.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Open positions</h2>
            <p className="text-xl text-gray-600 mb-8">Find your next opportunity</p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by title, department, or location..."
                className="pl-12 h-14 text-base rounded-full border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <Badge className="bg-purple-100 text-[#8B2EE5]">{job.department}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Link to={createPageUrl('JobApplication')}>
                    <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full group-hover:scale-105 transition-transform">
                      Apply now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions match your search. Try different keywords.</p>
            </div>
          )}
        </div>
      </section>
      <FAQSection faqs={getFAQs('Careers')} />
      <RelatedContent
        currentPage="Careers"
        category="company"
        crossCategories={['product']}
        title="Explore the Platform"
      />
    </div>
    </InternalLinker>
  );
}