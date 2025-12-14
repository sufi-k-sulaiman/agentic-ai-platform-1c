import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, TrendingDown, Database, Workflow, DollarSign, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: DollarSign,
    title: 'Operating Expenses',
    problem: 'Manual maintenance scheduling, energy waste, inefficient staffing',
    solution: 'AI predicts equipment failures, optimizes energy usage, automates scheduling—reducing costs by 40%'
  },
  {
    icon: Database,
    title: 'Data Silos',
    problem: 'Fragmented tenant data, maintenance logs, and financial records',
    solution: 'Unified AI platform aggregates data from all systems for real-time insights and automated reporting'
  },
  {
    icon: Workflow,
    title: 'Manual Workflows',
    problem: 'Time-consuming lease processing, work order management, tenant onboarding',
    solution: 'Agentic AI handles entire workflows autonomously—from lease renewals to maintenance dispatch'
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Sales',
    problem: 'Low occupancy rates, ineffective lead management, manual touring',
    solution: 'AI qualifies leads, schedules virtual tours, personalizes marketing campaigns—increasing occupancy by 25%'
  }
];

const solutions = [
  {
    category: 'Finance & Operations',
    items: [
      'Automated rent collection with smart payment reminders',
      'Predictive budgeting based on historical data patterns',
      'Real-time P&L statements and cash flow forecasting',
      'Dynamic pricing optimization for vacant units'
    ]
  },
  {
    category: 'Maintenance & Workflows',
    items: [
      'AI-powered preventive maintenance scheduling',
      'Automated work order creation and vendor dispatch',
      'Equipment failure prediction with IoT integration',
      'Smart energy management reducing utility costs'
    ]
  },
  {
    category: 'Tenant Experience',
    items: [
      '24/7 AI concierge for tenant inquiries and requests',
      'Automated lease renewals with personalized offers',
      'Self-service tenant portal with instant support',
      'Proactive issue resolution before complaints arise'
    ]
  },
  {
    category: 'Sales & Marketing',
    items: [
      'Intelligent lead qualification and nurturing',
      'Automated virtual tours and scheduling',
      'Personalized email campaigns based on preferences',
      'Market analysis for competitive pricing strategies'
    ]
  }
];

const metrics = [
  { value: '40%', label: 'Cost Reduction', description: 'Lower operational expenses' },
  { value: '25%', label: 'Higher Occupancy', description: 'Improved tenant acquisition' },
  { value: '60%', label: 'Time Saved', description: 'Automated workflows' },
  { value: '99.9%', label: 'Response Rate', description: '24/7 AI availability' }
];

export default function PropertyManagement() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                Property Management
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic AI for
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  smarter properties
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Deploy autonomous AI agents that manage maintenance, tenant services, finances, and operations—cutting costs by 40% while improving tenant satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Schedule demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  View ROI calculator
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" alt="Smart Building" className="rounded-3xl shadow-2xl" />
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
              From challenges to solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentic AI transforms property management pain points into competitive advantages
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
              Complete AI-powered automation
            </h2>
            <p className="text-xl text-gray-600">
              Autonomous agents working 24/7 across every aspect of property management
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
              Ready to transform your properties?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join 500+ property managers reducing costs and delighting tenants with Agentic AI
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Start free trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}