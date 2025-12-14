import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Zap, Shield, TrendingDown, Users, Clock, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: '40% Cost Reduction',
    description: 'Reduce operational costs through automation and predictive maintenance'
  },
  {
    icon: Zap,
    title: 'Smart Energy Management',
    description: 'AI-powered optimization of HVAC, lighting, and energy systems'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Automated access control and real-time threat detection'
  },
  {
    icon: Users,
    title: 'Tenant Satisfaction',
    description: 'Improve tenant experience with 24/7 AI support and services'
  }
];

const features = [
  'Automated maintenance scheduling',
  'Predictive equipment failure detection',
  'Energy consumption optimization',
  'Smart access control systems',
  'Tenant portal with AI assistant',
  'Lease management automation',
  'Space utilization analytics',
  'Emergency response automation'
];

export default function PropertyManagement() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                Property Management
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart buildings powered by
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  AI automation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform property management with AI agents that handle maintenance, tenant services, and building operations 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Schedule demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  View case study
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
                alt="Smart Building"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Measurable impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from property managers using 1cPlatform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete property automation
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From tenant onboarding to maintenance and lease renewals—AI handles it all
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <Clock className="w-5 h-5 text-[#8B2EE5] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="Property Management Dashboard"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to modernize your properties?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join 500+ property managers using AI to transform their operations
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Get started today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}