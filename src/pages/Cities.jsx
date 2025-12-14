import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, TrendingDown, Database, Workflow, DollarSign, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: DollarSign,
    title: 'Budget Constraints',
    problem: 'Limited resources, aging infrastructure, inefficient services draining city budgets',
    solution: 'AI optimizes resource allocation, reduces waste, and automates operations—cutting costs by 30%'
  },
  {
    icon: Database,
    title: 'Data Silos',
    problem: 'Departments operating independently, no unified data view or coordination',
    solution: 'Unified AI platform integrates all city systems, enabling data-driven decisions and cross-department collaboration'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Reactive maintenance, slow permit processing, inefficient service delivery',
    solution: 'Autonomous agents automate workflows, predict maintenance needs, and process requests instantly'
  },
  {
    icon: Users,
    title: 'Citizen Experience',
    problem: 'Poor communication, long wait times, difficult access to city services',
    solution: '24/7 AI assistant provides instant answers, service requests, and personalized city information'
  }
];

const solutions = [
  {
    category: 'Smart Infrastructure',
    items: [
      'Predictive maintenance for roads and utilities',
      'IoT-powered asset monitoring citywide',
      'Energy optimization for city buildings',
      'Automated street lighting and waste management'
    ]
  },
  {
    category: 'Citizen Services',
    items: [
      '24/7 AI chatbot for city inquiries',
      'Automated permit and license processing',
      'Service request tracking and fulfillment',
      'Personalized alerts and notifications'
    ]
  },
  {
    category: 'Traffic & Transit',
    items: [
      'Smart traffic signal optimization',
      'Public transit route planning',
      'Parking management and guidance',
      'Incident detection and response'
    ]
  },
  {
    category: 'Finance & Planning',
    items: [
      'Budget forecasting and optimization',
      'Revenue collection automation',
      'Urban planning analytics',
      'Economic development insights'
    ]
  }
];

const metrics = [
  { value: '30%', label: 'Cost Savings', description: 'Operational efficiency' },
  { value: '50%', label: 'Faster Services', description: 'Automated workflows' },
  { value: '40%', label: 'Higher Satisfaction', description: 'Better citizen experience' },
  { value: '25%', label: 'Energy Reduction', description: 'Smart infrastructure' }
];

export default function Cities() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Building className="w-4 h-4" />
                Smart Cities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build the city of
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  tomorrow with AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform urban operations with Agentic AI that optimizes infrastructure, improves services, and delights citizens—cutting costs by 30% while building a sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Request demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  Smart city guide
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800" alt="Smart City" className="rounded-3xl shadow-2xl" />
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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Urban challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI creates smarter, more efficient cities
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

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete smart city platform
            </h2>
            <p className="text-xl text-gray-600">
              AI managing every aspect of urban operations
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
              Ready to build a smart city?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading cities worldwide transforming urban operations with Agentic AI
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