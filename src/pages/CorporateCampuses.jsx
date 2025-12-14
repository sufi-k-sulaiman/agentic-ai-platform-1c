import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Building2, Users, Zap, Shield, ArrowRight } from 'lucide-react';

export default function CorporateCampuses() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
              <Building2 className="w-4 h-4" />
              Corporate Campuses
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart campus management
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                powered by AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Optimize facilities, enhance security, and create exceptional workplace experiences with intelligent automation.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
              Learn more <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}