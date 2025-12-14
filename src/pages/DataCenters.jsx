import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, TrendingDown, Database, Workflow, DollarSign, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: DollarSign,
    title: 'Energy & OpEx',
    problem: 'Power and cooling costs consuming 60% of operating budget, inefficient resource allocation',
    solution: 'AI optimizes power distribution and cooling in real-time—reducing energy costs by 35% and preventing overprovisioning'
  },
  {
    icon: Database,
    title: 'Complex Data',
    problem: 'Millions of metrics from servers, HVAC, power—impossible to analyze manually',
    solution: 'Agentic AI processes all telemetry data, identifies patterns, and automatically optimizes infrastructure performance'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Reactive maintenance, slow incident response, manual capacity planning',
    solution: 'Autonomous agents predict failures, orchestrate repairs, and dynamically allocate resources—99.999% uptime'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    problem: 'Continuous threat monitoring, audit trails, compliance reporting—all manual and error-prone',
    solution: 'AI monitors security 24/7, auto-generates compliance reports, and responds to threats in milliseconds'
  }
];

const solutions = [
  {
    category: 'Infrastructure Operations',
    items: [
      'Predictive maintenance preventing equipment failures',
      'Automated capacity planning and resource allocation',
      'Real-time infrastructure optimization based on load',
      'Intelligent workload placement across racks'
    ]
  },
  {
    category: 'Power & Cooling',
    items: [
      'Dynamic cooling adjustments based on thermal maps',
      'AI-driven power distribution optimization',
      'Automated PUE monitoring and improvement',
      'Energy consumption forecasting and budgeting'
    ]
  },
  {
    category: 'Security & Compliance',
    items: [
      'Continuous security monitoring with threat detection',
      'Automated compliance reporting (SOC2, ISO 27001)',
      'Access control automation and audit logging',
      'Anomaly detection across all systems'
    ]
  },
  {
    category: 'Finance & Analytics',
    items: [
      'Real-time cost analysis per customer/workload',
      'Automated invoicing based on usage metrics',
      'Predictive budgeting for CapEx and OpEx',
      'ROI tracking on infrastructure investments'
    ]
  }
];

const metrics = [
  { value: '35%', label: 'Energy Savings', description: 'Lower power & cooling costs' },
  { value: '99.999%', label: 'Uptime SLA', description: 'Predictive maintenance' },
  { value: '<1min', label: 'Response Time', description: 'Instant incident detection' },
  { value: '$2M+', label: 'Annual Savings', description: 'Per facility average' }
];

export default function DataCenters() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Server className="w-4 h-4" />
                Data Centers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Autonomous data center
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  operations with AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Deploy self-managing AI agents that optimize power, predict failures, and maintain 99.999% uptime while reducing energy costs by 35%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Request demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  Calculate savings
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" alt="Data Center" className="rounded-3xl shadow-2xl" />
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
              Solving critical data center challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentic AI addresses the biggest pain points in data center operations
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
              End-to-end AI automation
            </h2>
            <p className="text-xl text-gray-600">
              Autonomous agents managing every aspect of your data center
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
              Ready for autonomous operations?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading data centers saving millions with AI-powered infrastructure management
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