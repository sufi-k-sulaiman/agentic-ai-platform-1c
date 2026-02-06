import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Globe, Award, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import toast from 'react-hot-toast';

const values = [
{
  icon: Target,
  title: 'Innovation First',
  description: 'We push the boundaries of what\'s possible with AI, constantly evolving to meet tomorrow\'s challenges.'
},
{
  icon: Users,
  title: 'Customer Success',
  description: 'Your success is our mission. We build relationships, not just software.'
},
{
  icon: Globe,
  title: 'Global Impact',
  description: 'Creating technology that empowers businesses worldwide to achieve more.'
},
{
  icon: Award,
  title: 'Excellence',
  description: 'We hold ourselves to the highest standards in everything we do.'
}];


const timeline = [
{ year: 'Dec 2024', title: 'Founded', description: 'Started with a vision to democratize enterprise AI' },
{ year: 'Dec 2024', title: 'Beta Customers', description: 'Launched beta program with early adopters' },
{ year: '2025', title: 'Series A', description: 'Secured Series A funding to accelerate growth' },
{ year: '2025', title: 'Series B', description: 'Raised Series B to expand platform capabilities' },
{ year: '2026', title: 'USA & Canada', description: 'Established presence across North America' },
{ year: '2027', title: 'Global Expansion', description: 'Scaling operations worldwide' }];


const investmentSlides = [
{ title: 'Executive Summary', content: 'Transforming Enterprise with Autonomous AI', bg: 'from-purple-600 to-violet-700' },
{ title: 'Market Opportunity', content: '$500B TAM by 2030', bg: 'from-blue-600 to-cyan-700' },
{ title: 'The Problem', content: 'Legacy Systems & Manual Processes', bg: 'from-red-600 to-orange-700' },
{ title: 'Our Solution', content: 'Agentic AI Platform', bg: 'from-green-600 to-emerald-700' },
{ title: 'Product Suite', content: '4 Core Products, 14 Verticals', bg: 'from-purple-600 to-pink-700' },
{ title: 'Technology Stack', content: 'Enterprise-Grade Infrastructure', bg: 'from-indigo-600 to-purple-700' },
{ title: 'Traction', content: '500+ Enterprise Clients', bg: 'from-yellow-600 to-orange-700' },
{ title: 'Revenue Model', content: 'SaaS with Usage-Based Pricing', bg: 'from-teal-600 to-green-700' },
{ title: 'Growth Metrics', content: '300% YoY Revenue Growth', bg: 'from-rose-600 to-pink-700' },
{ title: 'Customer Success', content: '40% Avg. Cost Reduction', bg: 'from-violet-600 to-purple-700' },
{ title: 'Competitive Landscape', content: 'Differentiated Positioning', bg: 'from-blue-600 to-indigo-700' },
{ title: 'Go-to-Market', content: 'Enterprise Sales & Partnerships', bg: 'from-emerald-600 to-teal-700' },
{ title: 'Team', content: '2000+ Talented Professionals', bg: 'from-amber-600 to-orange-700' },
{ title: 'Roadmap', content: 'Vision for 2025-2027', bg: 'from-purple-600 to-indigo-700' },
{ title: 'Financials', content: '$2.5B Current Valuation', bg: 'from-green-600 to-teal-700' },
{ title: 'Use of Funds', content: 'Product, Sales, and Expansion', bg: 'from-red-600 to-rose-700' },
{ title: 'Partnerships', content: 'Strategic Alliances & Integrations', bg: 'from-cyan-600 to-blue-700' },
{ title: 'Industry Recognition', content: 'Awards & Certifications', bg: 'from-yellow-600 to-amber-700' },
{ title: 'Vision', content: 'The Future of Enterprise AI', bg: 'from-violet-600 to-fuchsia-700' },
{ title: 'Investment Ask', content: 'Join Us in Building the Future', bg: 'from-purple-600 to-pink-700' }];


export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDeck, setShowDeck] = useState(false);

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard!');
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % investmentSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + investmentSlides.length) % investmentSlides.length);

  return (
    <div className="bg-white">
      <PageMeta
        title="About Us"
        description="Building the future of intelligent enterprise. 2000+ team members, 500+ enterprise clients, $2.5B valuation. Our mission is to empower every organization with autonomous AI."
        url="/about-us"
        keywords={['about 1C Platform', 'AI company', 'enterprise AI leader', 'company values', 'AI innovation']} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl">

            <p className="text-[#8B2EE5] font-semibold mb-6">ABOUT 1C</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Building the future of
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                intelligent enterprise
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              We're on a mission to empower every organization with AI that thinks, learns, and acts autonomously—transforming how businesses operate at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl('Careers')}>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
                  Join our team <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            <div className="flex flex-wrap gap-4">
              <div className="mt-4 text-gray-600 text-sm">
                email us at <button onClick={() => copyEmail('careers@1cplatform.com')} className="text-[#6209e6] font-semibold hover:underline">careers@1cplatform.com</button>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">28+</div>
              <div className="text-gray-400">Team members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">42+</div>
              <div className="text-gray-400">Enterprise clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$2.5B</div>
              <div className="text-gray-400">Valuation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every product we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) =>
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center">

                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#8B2EE5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our journey</h2>
            <p className="text-xl text-gray-600">From startup to global enterprise AI leader</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#8B2EE5]/20 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) =>
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8 items-start">

                  <div className="hidden md:flex w-16 h-16 bg-[#8B2EE5] rounded-full flex-shrink-0 items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="text-[#8B2EE5] font-semibold mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Deck Modal */}
      {showDeck &&
      <div className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/90'} flex items-center justify-center p-4`}>
          <div className={`${isFullscreen ? 'w-full h-full' : 'max-w-6xl w-full'} relative`}>
            {/* Close Button */}
            <button
            onClick={() => {
              setShowDeck(false);
              setIsFullscreen(false);
            }}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all">

              <X className="w-6 h-6" />
            </button>

            {/* Fullscreen Toggle */}
            <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="absolute top-4 right-20 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all">

              <Maximize2 className="w-6 h-6" />
            </button>

            {/* Slide Container */}
            <div className={`${isFullscreen ? 'h-full' : 'aspect-[16/9]'} bg-gradient-to-br ${investmentSlides[currentSlide].bg} rounded-3xl overflow-hidden flex flex-col items-center justify-center text-white relative shadow-2xl`}>
              {/* Slide Content */}
              <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center px-8 md:px-16">

                <div className="text-sm md:text-base font-semibold mb-4 opacity-80">
                  Slide {currentSlide + 1} of {investmentSlides.length}
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  {investmentSlides[currentSlide].title}
                </h2>
                <p className="text-xl md:text-3xl opacity-90">
                  {investmentSlides[currentSlide].content}
                </p>
              </motion.div>

              {/* Navigation Arrows */}
              <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group">

                <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
              <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group">

                <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {investmentSlides.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
              index === currentSlide ?
              'w-8 bg-white' :
              'w-2 bg-white/30 hover:bg-white/50'}`
              } />

            )}
            </div>

            {/* Keyboard Navigation Hint */}
            <div className="text-center mt-4 text-white/60 text-sm">
              Use arrow keys or swipe to navigate • Press ESC to close
            </div>
          </div>
        </div>
      }
    </div>);

}