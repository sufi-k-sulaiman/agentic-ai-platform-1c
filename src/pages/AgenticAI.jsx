import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bot, Brain, Zap, Shield, RefreshCw, Network } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Cognitive Reasoning',
    description: 'Agents that understand context, analyze situations, and make intelligent decisions autonomously.'
  },
  {
    icon: Zap,
    title: 'Real-time Action',
    description: 'Execute complex workflows instantly with sub-second response times across your systems.'
  },
  {
    icon: RefreshCw,
    title: 'Continuous Learning',
    description: 'AI that improves over time, adapting to your business patterns and optimizing outcomes.'
  },
  {
    icon: Network,
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate multiple specialized agents working together to solve complex problems.'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with full audit trails and compliance with global regulations.'
  },
  {
    icon: Bot,
    title: 'No-Code Builder',
    description: 'Create and deploy custom Agentic Ai without writing a single line of code.'
  }
];

const useCases = [
  {
    title: 'Customer Support',
    description: 'Agentic Ai that handles inquiries, resolves issues, and escalates when needed—24/7.',
    impact: '70% reduction in response time',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Sales Automation',
    description: 'Qualify leads, schedule meetings, and nurture prospects automatically.',
    impact: '3x increase in qualified leads',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Operations',
    description: 'Automate procurement, inventory management, and supply chain optimization.',
    impact: '40% cost reduction',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Finance & Analytics',
    description: 'Real-time reporting, anomaly detection, and predictive forecasting.',
    impact: '5x faster insights',
    gradient: 'from-emerald-500 to-teal-500'
  }
];

export default function AgenticAI() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,46,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,46,229,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-[#8B2EE5] rounded-full animate-pulse" />
                Agentic Ai Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                AI that thinks,
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  decides, and acts
                </span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed mb-10">
                Deploy autonomous agents that handle complex tasks end-to-end. No human intervention required.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
                  Start free trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14 text-base">
                  Watch demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B2EE5]/10 to-[#A855F7]/10 rounded-3xl" />
                
                {/* Animated AI Nodes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                    style={{
                      top: `${15 + Math.sin(i * Math.PI / 3) * 35}%`,
                      left: `${15 + Math.cos(i * Math.PI / 3) * 35}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Bot className="w-8 h-8 text-[#8B2EE5]" />
                  </motion.div>
                ))}

                {/* Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#8B2EE5] rounded-full shadow-2xl flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Autonomous intelligence at scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage Agentic Ai that works for you 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-[#8B2EE5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform every department
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentic Ai that delivers measurable results across your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`} />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Impact</div>
                        <div className="font-bold text-gray-900">{useCase.impact}</div>
                      </div>
                    </div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to deploy your first Agentic Ai?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Start building in minutes with our no-code platform. No credit card required.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Get started free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}