import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, TrendingDown, Database, Workflow, DollarSign, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: Shield,
    title: 'Compliance & Risk',
    problem: 'Manual KYC/AML checks, audit trails, regulatory reporting—massive overhead and human error',
    solution: 'AI automates compliance workflows, monitors transactions 24/7, and generates audit-ready reports instantly'
  },
  {
    icon: Database,
    title: 'Siloed Data',
    problem: 'Customer data scattered across core banking, CRM, payments—no unified view',
    solution: 'Agentic AI integrates all systems, creates 360° customer profiles, and enables real-time insights'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    problem: 'Long wait times, manual onboarding, fragmented service across channels',
    solution: 'AI-powered virtual assistants handle 80% of queries instantly while personalizing every interaction'
  },
  {
    icon: DollarSign,
    title: 'Operating Costs',
    problem: 'High labor costs for routine tasks, slow loan processing, inefficient fraud detection',
    solution: 'Autonomous agents process loans in minutes, detect fraud in real-time, cutting operational costs by 45%'
  }
];

const solutions = [
  {
    category: 'Customer Banking',
    items: [
      '24/7 AI banking assistant for account inquiries',
      'Automated loan applications with instant approvals',
      'Personalized financial advice and product recommendations',
      'Intelligent fraud detection and prevention'
    ]
  },
  {
    category: 'Compliance & Risk',
    items: [
      'Automated KYC/AML screening and verification',
      'Real-time transaction monitoring for suspicious activity',
      'Regulatory reporting automation (Basel III, Dodd-Frank)',
      'Risk assessment and credit scoring with ML models'
    ]
  },
  {
    category: 'Sales & Marketing',
    items: [
      'AI-driven lead scoring and opportunity identification',
      'Personalized product campaigns based on customer behavior',
      'Churn prediction and retention automation',
      'Cross-sell/upsell recommendations at optimal moments'
    ]
  },
  {
    category: 'Finance Operations',
    items: [
      'Automated reconciliation across all accounts',
      'Predictive cash flow management and forecasting',
      'Intelligent expense categorization and reporting',
      'Real-time P&L dashboards with anomaly detection'
    ]
  }
];

const metrics = [
  { value: '45%', label: 'Cost Reduction', description: 'Lower operational expenses' },
  { value: '80%', label: 'Queries Automated', description: 'AI handles routine tasks' },
  { value: '95%', label: 'Fraud Detection', description: 'Real-time accuracy' },
  { value: '3min', label: 'Loan Processing', description: 'From days to minutes' }
];

export default function FinancialInstitutions() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Landmark className="w-4 h-4" />
                Financial Institutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic AI for
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  modern banking
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform banking operations with autonomous AI agents that handle compliance, customer service, and risk management—reducing costs by 45% while improving customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Request demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  Download whitepaper
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800" alt="Banking" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
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

      {/* Challenges */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Banking challenges, AI solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI transforms financial services operations
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
                        <div className="text-sm font-semibold text-green-600 mb-2">✓ AI Solution</div>
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

      {/* Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete banking automation
            </h2>
            <p className="text-xl text-gray-600">
              AI agents working across every banking function
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for AI-powered banking?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading financial institutions transforming operations with Agentic AI
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Schedule consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}