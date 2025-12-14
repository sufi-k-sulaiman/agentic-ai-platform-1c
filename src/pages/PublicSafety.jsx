import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, TrendingDown, Database, Workflow, DollarSign, AlertTriangle, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const challenges = [
  {
    icon: Clock,
    title: 'Response Time',
    problem: 'Manual 911 dispatch, delayed resource allocation, slow incident coordination',
    solution: 'AI instantly analyzes calls, predicts optimal unit dispatch, and coordinates response—reducing time by 40%'
  },
  {
    icon: Database,
    title: 'Information Overload',
    problem: 'Cameras, sensors, calls generating overwhelming data—impossible to monitor manually',
    solution: 'Agentic AI processes all feeds in real-time, detecting threats and anomalies automatically'
  },
  {
    icon: DollarSign,
    title: 'Budget Constraints',
    problem: 'Limited resources, manual processes, inefficient patrol routes',
    solution: 'AI optimizes patrol coverage, automates reporting, cuts costs by 30% while improving effectiveness'
  },
  {
    icon: Workflow,
    title: 'Manual Processes',
    problem: 'Paper reports, manual evidence logging, slow case management',
    solution: 'Automated documentation, digital evidence management, AI-assisted case analysis'
  }
];

const solutions = [
  {
    category: 'Emergency Response',
    items: [
      'Agentic Ai-powered 911 call analysis and triage',
      'Predictive dispatch and unit allocation',
      'Real-time incident coordination',
      'Automated resource tracking and availability'
    ]
  },
  {
    category: 'Predictive Policing',
    items: [
      'Crime pattern analysis and hotspot prediction',
      'Optimal patrol route optimization',
      'Risk assessment for proactive intervention',
      'Community safety analytics'
    ]
  },
  {
    category: 'Investigations',
    items: [
      'Automated evidence cataloging and analysis',
      'Facial recognition and suspect identification',
      'Case pattern matching across databases',
      'Digital forensics automation'
    ]
  },
  {
    category: 'Operations',
    items: [
      'Automated report generation',
      'Officer scheduling and shift optimization',
      'Real-time fleet and equipment tracking',
      'Budget forecasting and resource planning'
    ]
  }
];

const metrics = [
  { value: '40%', label: 'Faster Response', description: 'Emergency incidents' },
  { value: '30%', label: 'Cost Reduction', description: 'Operational efficiency' },
  { value: '65%', label: 'Crime Prevention', description: 'Predictive policing' },
  { value: '80%', label: 'Report Automation', description: 'Admin time saved' }
];

export default function PublicSafety() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Public Safety AI"
        description="AI-powered emergency response and law enforcement. 40% faster response times, 65% crime prevention, 30% cost reduction through predictive policing."
        url="/public-safety"
        keywords={['public safety AI', 'emergency response', 'predictive policing', '911 dispatch', 'law enforcement technology']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Shield className="w-4 h-4" />
                Public Safety
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  public safety
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform emergency response and law enforcement with Agentic Ai that reduces response times by 40%, predicts crime, and cuts costs by 30%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                    Calculate Savings
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800" alt="Public Safety" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{metric.value}</div>
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Public safety agencies operate in life-or-death scenarios where every second counts, yet they struggle with systemic challenges that delay response and reduce effectiveness. Emergency call centers receive thousands of 911 calls daily, with dispatchers manually transcribing information, determining appropriate responses, and coordinating multiple units across radio systems—introducing critical delays when minutes matter. Police departments patrol vast areas reactively, responding to crimes after they occur rather than preventing them, while detectives drown in case backlogs because evidence analysis and investigation coordination consume countless manual hours. Meanwhile, budget constraints force agencies to do more with less, creating a crisis of both efficiency and efficacy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Public safety agencies sit on massive repositories of data—911 call histories, crime reports, arrest records, surveillance footage, dispatch logs, and incident reports—yet this information remains largely untapped for predictive insights or operational optimization. Patterns that could predict where crimes are likely to occur go unnoticed. Connections between cases that could solve investigations remain hidden in different databases. Resources get deployed based on intuition and historical precedent rather than data-driven analysis of current conditions. The information needed to transform public safety outcomes exists, but without AI-powered analysis, it remains inaccessible to the officers and dispatchers who need it most.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI revolutionizes public safety operations by deploying autonomous agents that accelerate response while enabling proactive policing. These intelligent systems instantly analyze 911 calls, extract critical information, identify optimal responders, and dispatch units while providing real-time guidance—reducing response times from minutes to seconds. AI agents analyze crime patterns to predict where incidents are likely to occur, enabling preventive patrols that stop crimes before they happen. For investigations, AI automatically catalogs and analyzes evidence from body cameras and surveillance systems, identifies patterns across cases, and surfaces connections that human investigators might miss, accelerating case resolution while maintaining complete chain-of-custody documentation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Public safety agencies implementing Agentic AI are achieving transformative results: 60% faster emergency response through automated 911 analysis and intelligent dispatch, 35% reduction in crime rates through predictive policing that enables preventive intervention, 50% faster case resolution through AI-assisted investigations, and 40% operational cost savings through optimized resource deployment. These improvements save lives, prevent crimes, and free officers to focus on community engagement rather than paperwork—creating safer communities while making public safety careers more rewarding and sustainable for the professionals who serve them.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Public safety challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms emergency services and law enforcement
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <challenge.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-2xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-red-600 mb-2">❌ The Problem</div>
                        <p className="text-gray-600">{challenge.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 mb-2">✓ Agentic Ai Solution</div>
                        <p className="text-gray-900 font-medium">{challenge.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete safety automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai protecting communities 24/7
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((section, index) => (
              <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#8B2EE5]">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for smarter public safety?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join agencies nationwide improving response times and saving lives with Agentic Ai
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                  Get started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('SavingsCalculator')}>
                <Button variant="outline" className="rounded-full border-gray-300 px-10 h-16 text-lg">
                  Calculate Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}