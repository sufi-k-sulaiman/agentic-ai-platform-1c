import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Zap, TrendingDown, Shield, Activity, ArrowRight } from 'lucide-react';

const metrics = [
  { label: 'Energy Efficiency', value: '35%', description: 'Reduction in power costs' },
  { label: 'Uptime', value: '99.999%', description: 'Infrastructure reliability' },
  { label: 'Response Time', value: '<1min', description: 'Incident detection' },
  { label: 'Cost Savings', value: '$2M+', description: 'Average annual savings' }
];

const solutions = [
  {
    icon: Zap,
    title: 'Power Optimization',
    description: 'AI-driven cooling and power distribution management for maximum efficiency'
  },
  {
    icon: Activity,
    title: 'Predictive Maintenance',
    description: 'Detect equipment failures before they happen, minimizing downtime'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Automated security monitoring and compliance reporting'
  }
];

export default function DataCenters() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Server className="w-4 h-4" />
                Data Centers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Intelligent data center
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  operations
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Optimize power, cooling, and infrastructure with AI that monitors and manages your data center operations 24/7.
              </p>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                Request demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" alt="Data Center" className="rounded-3xl shadow-2xl" />
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
                <div className="text-gray-400 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive automation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">AI-powered solutions for every aspect of data center management</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div key={solution.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <solution.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}