import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Shield, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

const solutions = [
  { icon: Shield, title: 'Fraud Detection', description: 'Real-time AI monitoring to detect and prevent fraudulent transactions' },
  { icon: Users, title: 'Customer Service', description: '24/7 AI-powered support for customer inquiries and account management' },
  { icon: TrendingUp, title: 'Risk Management', description: 'Automated risk assessment and compliance monitoring' },
  { icon: Zap, title: 'Process Automation', description: 'Streamline loan processing, KYC, and account operations' }
];

export default function FinancialInstitutions() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Building className="w-4 h-4" />
                Financial Institutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI for modern
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  banking & finance
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Enhance security, streamline operations, and deliver exceptional customer experiences with enterprise AI.
              </p>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                Schedule consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800" alt="Financial Institution" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Secure, compliant, intelligent</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">AI solutions designed for the financial services industry</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div key={solution.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <solution.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
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