import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, TrendingDown, Database, Workflow, DollarSign, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: DollarSign,
    title: 'Facility Costs',
    problem: 'Inefficient space utilization, wasted energy, manual facility management driving up costs',
    solution: 'AI optimizes space allocation, automates HVAC/lighting, and predicts maintenance—reducing facility costs by 30%'
  },
  {
    icon: Database,
    title: 'Disparate Systems',
    problem: 'Access control, room booking, visitor management, facilities—all separate systems with no integration',
    solution: 'Unified AI platform connects all systems, enabling seamless operations and comprehensive analytics'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Desk reservations, visitor check-ins, maintenance requests—time-consuming manual processes',
    solution: 'Autonomous agents handle bookings, access control, and service requests without human intervention'
  },
  {
    icon: Users,
    title: 'Employee Experience',
    problem: 'Poor wayfinding, difficult room booking, slow service response times',
    solution: 'AI concierge provides instant support, smart navigation, and proactive service—boosting satisfaction by 40%'
  }
];

const solutions = [
  {
    category: 'Space Management',
    items: [
      'Real-time desk and room availability tracking',
      'Automated space optimization based on utilization',
      'Hot-desking and hybrid work coordination',
      'Meeting room analytics and recommendations'
    ]
  },
  {
    category: 'Operations & Maintenance',
    items: [
      'Predictive maintenance for HVAC and equipment',
      'Automated work order creation and routing',
      'Energy optimization across campus facilities',
      'Cleaning and janitorial scheduling automation'
    ]
  },
  {
    category: 'Security & Access',
    items: [
      'Smart badge access with visitor management',
      'AI-powered security monitoring and alerts',
      'Automated parking management and allocation',
      'Emergency response coordination'
    ]
  },
  {
    category: 'Employee Services',
    items: [
      '24/7 AI concierge for campus inquiries',
      'Automated catering and event coordination',
      'Wayfinding and indoor navigation assistance',
      'Service request tracking and fulfillment'
    ]
  }
];

const metrics = [
  { value: '30%', label: 'Cost Savings', description: 'Facility operating expenses' },
  { value: '40%', label: 'Space Utilization', description: 'Improved efficiency' },
  { value: '60%', label: 'Faster Service', description: 'Automated workflows' },
  { value: '24/7', label: 'AI Support', description: 'Always available' }
];

export default function CorporateCampuses() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Building className="w-4 h-4" />
                Corporate Campuses
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  workplace management
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform corporate campuses with Agentic AI that manages space, security, services, and operations—cutting costs by 30% while delighting employees.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Schedule demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  View case studies
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="Corporate Campus" className="rounded-3xl shadow-2xl" />
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
              Campus challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI transforms corporate campus operations
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
              Complete campus automation
            </h2>
            <p className="text-xl text-gray-600">
              AI agents managing every aspect of your workplace
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
              Ready to transform your campus?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join Fortune 500 companies optimizing their workplaces with Agentic AI
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Get started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}