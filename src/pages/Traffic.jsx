import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Navigation, TrendingDown, Clock, Shield, ArrowRight } from 'lucide-react';

export default function Traffic() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Navigation className="w-4 h-4" />
                Traffic Management
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart traffic
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  optimization
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Reduce congestion, improve safety, and optimize traffic flow with AI-powered traffic management systems.
              </p>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                Request demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800" alt="Traffic" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}