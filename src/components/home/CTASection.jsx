import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-24 bg-[#04050b] relative overflow-hidden" id="consulting">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,46,229,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,46,229,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B2EE5]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to transform your
            <span className="block bg-gradient-to-r from-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
              business with Agentic Ai?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Join hundreds of enterprises already using 1cPlatform to automate operations, reduce costs, and accelerate innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to={createPageUrl('Onboarding')}>
              <Button 
                size="lg" 
                className="bg-white text-[#8B2EE5] hover:bg-gray-100 font-semibold rounded-full px-8 h-14 text-base group"
              >
                Get started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-[#8B2EE5] text-white hover:bg-[#7325C4] rounded-full px-8 h-14 text-base"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Talk to sales
            </Button>
          </motion.div>

          {/* Support Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-12 border-t border-gray-800"
            id="support"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-500">Global support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">&lt;1 hour</div>
                <div className="text-gray-500">Response time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">99%</div>
                <div className="text-gray-500">Customer satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}