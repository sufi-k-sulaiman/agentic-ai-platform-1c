import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Server, Landmark, Heart, Building, Train, TrafficCone, Zap, ShoppingBag, GraduationCap, Gamepad2, Shield, Plane, Users, TrendingUp, Clock, DollarSign, Target, BarChart3, Users as UsersIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const challenges = [
  { icon: TrendingUp, title: 'Revenue Optimization', description: 'Analyzing market trends', color: 'from-green-500 to-emerald-500', efficiency: '+45%', savings: '32%' },
  { icon: Clock, title: 'Process Automation', description: 'Streamlining workflows', color: 'from-blue-500 to-cyan-500', efficiency: '+67%', savings: '41%' },
  { icon: DollarSign, title: 'Cost Reduction', description: 'Finding savings opportunities', color: 'from-purple-500 to-pink-500', efficiency: '+52%', savings: '38%' },
  { icon: Target, title: 'Performance Tracking', description: 'Monitoring KPIs in real-time', color: 'from-orange-500 to-red-500', efficiency: '+58%', savings: '29%' },
  { icon: BarChart3, title: 'Data Analysis', description: 'Processing insights', color: 'from-indigo-500 to-violet-500', efficiency: '+71%', savings: '35%' },
  { icon: UsersIcon, title: 'Customer Experience', description: 'Enhancing satisfaction', color: 'from-teal-500 to-cyan-500', efficiency: '+63%', savings: '27%' },
  { icon: Building2, title: 'Resource Planning', description: 'Optimizing allocations', color: 'from-blue-600 to-indigo-600', efficiency: '+49%', savings: '33%' },
  { icon: Server, title: 'Infrastructure Management', description: 'Scaling efficiently', color: 'from-gray-500 to-slate-600', efficiency: '+55%', savings: '44%' },
  { icon: Landmark, title: 'Compliance Monitoring', description: 'Ensuring regulations', color: 'from-amber-500 to-yellow-600', efficiency: '+61%', savings: '24%' },
  { icon: Heart, title: 'Quality Assurance', description: 'Maintaining standards', color: 'from-red-500 to-rose-600', efficiency: '+48%', savings: '31%' },
  { icon: Train, title: 'Supply Chain', description: 'Managing logistics', color: 'from-cyan-500 to-blue-500', efficiency: '+54%', savings: '39%' },
  { icon: TrafficCone, title: 'Risk Management', description: 'Mitigating threats', color: 'from-orange-600 to-red-600', efficiency: '+59%', savings: '28%' },
  { icon: Zap, title: 'Energy Optimization', description: 'Reducing consumption', color: 'from-yellow-500 to-amber-500', efficiency: '+64%', savings: '47%' },
  { icon: ShoppingBag, title: 'Inventory Control', description: 'Managing stock levels', color: 'from-pink-500 to-rose-500', efficiency: '+51%', savings: '36%' },
  { icon: Shield, title: 'Security Operations', description: 'Protecting assets', color: 'from-slate-600 to-gray-700', efficiency: '+69%', savings: '26%' },
  { icon: Plane, title: 'Operations Coordination', description: 'Synchronizing teams', color: 'from-sky-500 to-blue-600', efficiency: '+57%', savings: '34%' }
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
  const [efficiencyValue, setEfficiencyValue] = useState(0);

  useEffect(() => {
    // Calculate average efficiency from current 4 corner cards
    const calculateAverage = () => {
      let sum = 0;
      for (let i = 0; i < 4; i++) {
        const efficiency = challenges[(currentChallenge + i) % challenges.length].efficiency;
        sum += parseInt(efficiency.replace('+', '').replace('%', ''));
      }
      return Math.round(sum / 4);
    };

    setEfficiencyValue(calculateAverage());

    const interval = setInterval(() => {
      setCurrentChallenge((prev) => (prev + 1) % challenges.length);
    }, 5075);
    return () => clearInterval(interval);
  }, [currentChallenge]);

  const cardPositions = [
    { className: "absolute top-[5%] left-[5%] w-56 z-10", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 } },
    { className: "absolute top-[5%] right-[5%] w-56 z-10", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 } },
    { className: "absolute bottom-[22%] left-[5%] w-56 z-10", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 } },
    { className: "absolute bottom-[22%] right-[5%] w-56 z-10", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 20 } }
  ];

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

          {/* Corner Challenge Cards */}
          {cardPositions.map((position, idx) => (
            <div key={idx} className={position.className}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${currentChallenge}-${idx}`}
                  className="bg-white rounded-2xl shadow-lg p-4"
                  initial={position.initial}
                  animate={position.animate}
                  exit={position.exit}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                  style={{ scale: 1.28 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {React.createElement(challenges[(currentChallenge + idx) % challenges.length].icon, { 
                      className: `w-10 h-10 bg-gradient-to-br ${challenges[(currentChallenge + idx) % challenges.length].color} bg-clip-text`,
                      style: { WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }
                    })}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{challenges[(currentChallenge + idx) % challenges.length].title}</h3>
                      <p className="text-xs text-gray-500">{challenges[(currentChallenge + idx) % challenges.length].description}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden mb-3">
                    <motion.div 
                      className={`h-1.5 rounded-full bg-gradient-to-r ${challenges[(currentChallenge + idx) % challenges.length].color}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="flex gap-4 text-xs">
                    <div>
                      <div className="text-gray-500">Efficiency</div>
                      <div className="font-semibold text-green-600">{challenges[(currentChallenge + idx) % challenges.length].efficiency}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">OpEx Savings</div>
                      <div className="font-semibold text-blue-600">{challenges[(currentChallenge + idx) % challenges.length].savings}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}

          {/* Center Logo (No Background) */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                alt="1C" 
                className="relative w-20 h-20 sm:w-24 sm:h-24 z-10"
              />
            </motion.div>

            {/* Task Completed - Below Logo */}
            <motion.div 
              className="mt-8 text-center z-10"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-600">Task Completed</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={efficiencyValue}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl font-bold text-gray-900 mb-1"
                >
                  +{efficiencyValue}%
                </motion.div>
              </AnimatePresence>
              <p className="text-sm text-gray-500">Efficiency increase</p>
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
                    <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <vertical.icon 
                        className={`w-12 h-12 bg-gradient-to-br ${vertical.color} bg-clip-text`} 
                        style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} 
                      />
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