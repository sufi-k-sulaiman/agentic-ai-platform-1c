import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, TrendingDown, Database, Workflow, DollarSign, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const challenges = [
  {
    icon: DollarSign,
    title: 'Infrastructure Costs',
    problem: 'Expensive game servers, overprovisioning, inefficient scaling costing millions',
    solution: 'AI dynamically scales infrastructure based on demand, optimizing costs by 35% while maintaining performance'
  },
  {
    icon: Database,
    title: 'Player Data Chaos',
    problem: 'Billions of events, analytics, matchmaking data—difficult to extract insights',
    solution: 'Agentic AI processes player behavior in real-time, enabling personalized experiences and churn prediction'
  },
  {
    icon: Users,
    title: 'Player Support',
    problem: 'Manual support tickets, slow response times, poor player satisfaction',
    solution: '24/7 AI support handles 85% of inquiries instantly, improving satisfaction and reducing costs by 60%'
  },
  {
    icon: Shield,
    title: 'Security & Cheating',
    problem: 'Cheaters, fraud, account takeovers—manual detection missing threats',
    solution: 'AI monitors gameplay 24/7, detecting cheats and fraud in real-time with 99% accuracy'
  }
];

const solutions = [
  {
    category: 'Player Experience',
    items: [
      '24/7 Agentic Ai support for player inquiries and issues',
      'Intelligent matchmaking based on skill and behavior',
      'Personalized content recommendations',
      'Dynamic difficulty adjustment for engagement'
    ]
  },
  {
    category: 'Infrastructure & DevOps',
    items: [
      'Auto-scaling game servers based on demand',
      'Predictive load balancing across regions',
      'Automated deployment and rollback systems',
      'Real-time performance monitoring and optimization'
    ]
  },
  {
    category: 'Monetization & LiveOps',
    items: [
      'Dynamic pricing for in-game purchases',
      'Churn prediction and retention campaigns',
      'A/B testing automation for events',
      'Revenue forecasting and optimization'
    ]
  },
  {
    category: 'Security & Anti-Cheat',
    items: [
      'Real-time cheat and bot detection',
      'Fraud prevention for payments',
      'Account security monitoring',
      'Automated ban and appeal workflows'
    ]
  }
];

const metrics = [
  { value: '35%', label: 'Cost Savings', description: 'Infrastructure optimization' },
  { value: '85%', label: 'Support Automated', description: 'AI handles tickets' },
  { value: '99%', label: 'Cheat Detection', description: 'Real-time accuracy' },
  { value: '30%', label: 'Revenue Lift', description: 'Personalized monetization' }
];

export default function Gaming() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Gaming AI Solutions"
        description="Scale your game with AI infrastructure optimization. 35% cost savings, 85% automated support, 99% cheat detection. Real-time player analytics and monetization."
        url="/gaming"
        keywords={['gaming AI', 'game infrastructure', 'cheat detection', 'player analytics', 'LiveOps automation', 'matchmaking AI']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Gamepad2 className="w-4 h-4" />
                Gaming
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic Ai for
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  gaming at scale
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Power your game with Agentic Ai that optimizes infrastructure, personalizes player experiences, and detects cheats—cutting costs by 35% while boosting engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Request demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  Technical docs
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800" alt="Gaming" className="rounded-3xl shadow-2xl" />
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
              Gaming challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms game operations
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
              Complete gaming Agentic Ai platform
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end automation for game operations
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
              Ready to scale your game?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join top gaming studios optimizing operations with Agentic Ai
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