import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Train, TrendingDown, Database, Workflow, DollarSign, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const challenges = [
  {
    icon: DollarSign,
    title: 'Operating Costs',
    problem: 'Fuel waste, inefficient route planning, overstaffing, expensive manual maintenance',
    solution: 'AI optimizes routes, predicts maintenance needs, and automates scheduling—reducing costs by 25%'
  },
  {
    icon: Database,
    title: 'Data Complexity',
    problem: 'Real-time location, ridership, delays, maintenance logs—millions of data points with no insights',
    solution: 'Agentic AI analyzes all transit data to optimize operations, predict delays, and improve on-time performance'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Schedule changes, maintenance coordination, incident response—all handled manually',
    solution: 'Autonomous agents automatically adjust schedules, dispatch maintenance crews, and manage incidents'
  },
  {
    icon: Users,
    title: 'Passenger Experience',
    problem: 'Lack of real-time updates, poor communication during delays, no personalized journey planning',
    solution: 'AI provides real-time updates, proactive delay notifications, and personalized routing—boosting satisfaction by 35%'
  }
];

const solutions = [
  {
    category: 'Operations & Planning',
    items: [
      'Dynamic route optimization based on demand',
      'Predictive maintenance for vehicles and infrastructure',
      'Automated crew scheduling and shift management',
      'Real-time capacity management and load balancing'
    ]
  },
  {
    category: 'Passenger Services',
    items: [
      '24/7 Agentic Ai assistant for trip planning and inquiries',
      'Real-time delay predictions and alternative routing',
      'Personalized notifications and journey updates',
      'Automated ticketing and fare optimization'
    ]
  },
  {
    category: 'Maintenance & Safety',
    items: [
      'IoT-powered predictive maintenance alerts',
      'Automated work order generation and tracking',
      'Safety incident detection and response automation',
      'Asset health monitoring across entire fleet'
    ]
  },
  {
    category: 'Finance & Analytics',
    items: [
      'Real-time ridership analytics and forecasting',
      'Revenue optimization through dynamic pricing',
      'Cost per mile tracking and efficiency metrics',
      'Budget planning based on predictive models'
    ]
  }
];

const metrics = [
  { value: '25%', label: 'Cost Reduction', description: 'Lower operational expenses' },
  { value: '95%', label: 'On-Time Rate', description: 'Improved schedule adherence' },
  { value: '35%', label: 'Higher Satisfaction', description: 'Better passenger experience' },
  { value: '30%', label: 'Less Downtime', description: 'Predictive maintenance' }
];

export default function Transit() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Train className="w-4 h-4" />
                Public Transit
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI for smarter
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  public transportation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform transit operations with Agentic AI that optimizes routes, predicts delays, and improves passenger experience—reducing costs by 25% while increasing on-time performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                    <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                        Get started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  View case studies
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1554672723-d42a16e533db?w=800" alt="Public Transit" className="rounded-3xl shadow-2xl" />
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
              Transit challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI transforms public transportation operations
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
              Complete transit automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of public transportation
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
              Ready to modernize your transit system?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading transit authorities improving operations with Agentic AI
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                Get started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}