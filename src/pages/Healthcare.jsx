import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Clock, Shield, ArrowRight } from 'lucide-react';

const solutions = [
  { icon: Users, title: 'Patient Engagement', description: 'AI assistants for appointment scheduling and patient support' },
  { icon: Clock, title: 'Operational Efficiency', description: 'Automate administrative tasks and optimize workflows' },
  { icon: Shield, title: 'HIPAA Compliance', description: 'Secure, compliant AI solutions for healthcare data' }
];

export default function Healthcare() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Heart className="w-4 h-4" />
                Healthcare
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  healthcare operations
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Improve patient care, streamline operations, and reduce administrative burden with HIPAA-compliant AI solutions.
              </p>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                Request demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800" alt="Healthcare" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div key={solution.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
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