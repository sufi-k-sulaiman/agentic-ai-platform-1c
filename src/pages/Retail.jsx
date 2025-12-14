import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, TrendingDown, Database, Workflow, DollarSign, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const challenges = [
  {
    icon: DollarSign,
    title: 'Margin Pressure',
    problem: 'Inventory waste, markdowns, inefficient pricing, high operational costs',
    solution: 'AI optimizes inventory, dynamic pricing, demand forecasting—increasing margins by 20%'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    problem: 'Generic shopping, poor personalization, slow service, high cart abandonment',
    solution: 'AI personalizes every touchpoint, provides instant support, recommends products—boosting conversion by 35%'
  },
  {
    icon: Database,
    title: 'Data Fragmentation',
    problem: 'POS, e-commerce, inventory, CRM—siloed data preventing unified view',
    solution: 'Unified AI platform creates 360° customer profiles and real-time inventory visibility'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Manual restocking, slow checkout, inefficient staff scheduling',
    solution: 'Automated replenishment, self-checkout AI, predictive staffing—cutting labor costs by 30%'
  }
];

const solutions = [
  {
    category: 'Customer Experience',
    items: [
      'Personalized product recommendations',
      '24/7 Agentic Ai shopping assistant',
      'Virtual try-on and styling advice',
      'Predictive search and discovery'
    ]
  },
  {
    category: 'Inventory & Supply Chain',
    items: [
      'Automated demand forecasting',
      'Dynamic replenishment and allocation',
      'Real-time inventory visibility',
      'Supplier coordination automation'
    ]
  },
  {
    category: 'Sales & Marketing',
    items: [
      'Dynamic pricing optimization',
      'Personalized email campaigns',
      'Customer lifetime value prediction',
      'Churn prevention and retention'
    ]
  },
  {
    category: 'Operations',
    items: [
      'Predictive staff scheduling',
      'Automated loss prevention',
      'Store layout optimization',
      'Energy and facility management'
    ]
  }
];

const metrics = [
  { value: '35%', label: 'Conversion Lift', description: 'Personalized experiences' },
  { value: '20%', label: 'Margin Growth', description: 'Optimized pricing & inventory' },
  { value: '30%', label: 'Cost Reduction', description: 'Automated operations' },
  { value: '45%', label: 'Customer Retention', description: 'Better engagement' }
];

export default function Retail() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Retail AI Solutions"
        description="Transform retail with AI-powered personalization and inventory optimization. 35% conversion lift, 20% margin growth, 30% cost reduction through automation."
        url="/retail"
        keywords={['retail AI', 'inventory optimization', 'personalization', 'dynamic pricing', 'customer experience', 'retail automation']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <ShoppingBag className="w-4 h-4" />
                Retail
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered retail
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  transformation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform retail operations with Agentic Ai that personalizes shopping, optimizes inventory, and cuts costs by 30%—boosting conversion by 35%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                    Calculate Savings
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" alt="Retail Store" className="rounded-3xl shadow-2xl" />
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
              Retail challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms retail operations
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
              Complete retail automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of retail operations
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
              Ready to transform retail?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading retailers growing revenue with Agentic Ai
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                  Get started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('SavingsCalculator')}>
                <Button variant="outline" className="rounded-full border-gray-300 px-10 h-16 text-lg">
                  Calculate Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}