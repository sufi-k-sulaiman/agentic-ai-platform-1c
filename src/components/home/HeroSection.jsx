import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Server, Landmark, Heart, Building, Train, TrafficCone, Zap, ShoppingBag, GraduationCap, Gamepad2, Shield, Plane, Users, TrendingUp, Clock, DollarSign, Target, BarChart3, Users as UsersIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const challenges = [
  { icon: TrendingUp, title: 'Revenue Optimization', description: 'Analyzing market trends', color: 'from-green-500 to-emerald-500' },
  { icon: Clock, title: 'Process Automation', description: 'Streamlining workflows', color: 'from-blue-500 to-cyan-500' },
  { icon: DollarSign, title: 'Cost Reduction', description: 'Finding savings opportunities', color: 'from-purple-500 to-pink-500' },
  { icon: Target, title: 'Performance Tracking', description: 'Monitoring KPIs in real-time', color: 'from-orange-500 to-red-500' },
  { icon: BarChart3, title: 'Data Analysis', description: 'Processing insights', color: 'from-indigo-500 to-violet-500' },
  { icon: UsersIcon, title: 'Customer Experience', description: 'Enhancing satisfaction', color: 'from-teal-500 to-cyan-500' }
];

const verticals = [
  { icon: Building2, name: 'Property Management', color: 'from-blue-500 to-cyan-500', page: 'PropertyManagement' },
  { icon: Server, name: 'Data Centers', color: 'from-indigo-500 to-purple-500', page: 'DataCenters' },
  { icon: Landmark, name: 'Financial Services', color: 'from-green-500 to-emerald-500', page: 'FinancialInstitutions' },
  { icon: Heart, name: 'Healthcare', color: 'from-red-500 to-pink-500', page: 'Healthcare' },
  { icon: Building, name: 'Corporate Campuses', color: 'from-orange-500 to-amber-500', page: 'CorporateCampuses' },
  { icon: Train, name: 'Public Transit', color: 'from-teal-500 to-cyan-500', page: 'Transit' },
  { icon: TrafficCone, name: 'Traffic Management', color: 'from-yellow-500 to-orange-500', page: 'Traffic' },
  { icon: Zap, name: 'Energy & Utilities', color: 'from-lime-500 to-green-500', page: 'EnergyUtilities' },
  { icon: ShoppingBag, name: 'Retail', color: 'from-pink-500 to-rose-500', page: 'Retail' },
  { icon: GraduationCap, name: 'Education', color: 'from-violet-500 to-purple-500', page: 'Education' },
  { icon: Gamepad2, name: 'Gaming', color: 'from-fuchsia-500 to-pink-500', page: 'Gaming' },
  { icon: Shield, name: 'Government', color: 'from-slate-500 to-gray-500', page: 'GovernmentAgencies' },
  { icon: Plane, name: 'Airports', color: 'from-sky-500 to-blue-500', page: 'Airports' },
  { icon: Users, name: 'Sports & Entertainment', color: 'from-rose-500 to-red-500', page: 'SportsEntertainment' }
];

export default function HeroSection() {
  const [currentChallenge, setCurrentChallenge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChallenge((prev) => (prev + 1) % challenges.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-violet-100">{/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,46,229,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,46,229,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-[#6209e6] text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#6209e6] rounded-full animate-pulse" />
            14 Industries, Infinite Possibilities
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
            The future of
            <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
              enterprise AI
            </span>
            is here
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Transform your business with autonomous Agentic AI that understands, decides, and acts. 
            1cPlatform delivers intelligent automation at enterprise scale.
          </p>

          <Link to={createPageUrl('Onboarding')}>
            <Button 
              size="lg" 
              className="bg-[#6209e6] hover:bg-[#5008c5] text-white font-semibold rounded-full px-8 h-14 text-base group"
            >
              Get started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Central Visualization with Sonar Waves */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] mb-16">
          {/* Background Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 via-purple-100/30 to-violet-200/40 rounded-[3rem] backdrop-blur-sm" />
          
          {/* Sonar Wave Rings - Slow Pulsing */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full border-2 border-purple-300/30"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.4, 0.1, 0.4]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full border-2 border-purple-300/30"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.4, 0.1, 0.4]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute w-[200px] h-[200px] rounded-full border-2 border-purple-300/30"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.4, 0.1, 0.4]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>

          {/* Floating Cards - AI Processing Challenges */}
          <div className="absolute top-[8%] left-[5%] w-64 z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentChallenge}
                className="bg-white rounded-2xl shadow-lg p-5"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${challenges[currentChallenge].color} rounded-xl flex items-center justify-center mb-3`}>
                  {React.createElement(challenges[currentChallenge].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{challenges[currentChallenge].title}</h3>
                <p className="text-sm text-gray-500 mb-3">{challenges[currentChallenge].description}</p>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${challenges[currentChallenge].color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating Cards - Task Completed */}
          <motion.div 
            className="absolute bottom-[12%] right-[8%] bg-white rounded-2xl shadow-lg p-5 w-60 z-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700">Task Completed</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">+127%</div>
            <p className="text-sm text-gray-500">Efficiency increase</p>
          </motion.div>

          {/* Center Logo with Enhanced Shadow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-violet-200/30 rounded-full blur-xl" />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                alt="1C" 
                className="relative w-20 h-20 sm:w-24 sm:h-24 z-10"
              />
            </motion.div>
          </div>
        </div>

        {/* Verticals Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted across <span className="bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">14 industries</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Link to={createPageUrl(vertical.page)}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-100/50 h-full flex flex-col items-center text-center cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${vertical.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <vertical.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{vertical.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}