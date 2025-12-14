import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,46,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,46,229,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 text-[#8B2EE5] text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#8B2EE5] rounded-full animate-pulse" />
              Introducing Agentic Ai
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              The future of
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                enterprise AI
              </span>
              is here
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Transform your business with autonomous Agentic Ai that understands, decides, and acts. 
              1cPlatform delivers intelligent automation at enterprise scale.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to={createPageUrl('Onboarding')}>
                <Button 
                  size="lg" 
                  className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white font-semibold rounded-full px-8 h-14 text-base group"
                >
                  Get started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Onboarding')}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:border-[#8B2EE5] hover:text-[#8B2EE5] rounded-full px-8 h-14 text-base"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Get started
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by industry leaders</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="text-xl font-bold text-gray-400">NVIDIA</div>
                <div className="text-xl font-bold text-gray-400">SAP</div>
                <div className="text-xl font-bold text-gray-400">Deloitte</div>
                <div className="text-xl font-bold text-gray-400 hidden md:block">Accenture</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Main Visual Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B2EE5]/10 to-[#A855F7]/10 rounded-3xl backdrop-blur-sm border border-purple-200/50" />
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute top-8 left-8 bg-white rounded-2xl shadow-xl p-6 w-64"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-10 h-10 bg-[#8B2EE5] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">AI Processing</h3>
                <p className="text-sm text-gray-500">Real-time analysis complete</p>
                <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#8B2EE5] h-2 rounded-full w-3/4" />
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-12 right-8 bg-white rounded-2xl shadow-xl p-6 w-56"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Task Completed</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">+127%</div>
                <p className="text-sm text-gray-500">Efficiency increase</p>
              </motion.div>

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full border-2 border-dashed border-purple-200"
                />
                <div className="absolute w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                    alt="1C" 
                    className="w-20 h-20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}