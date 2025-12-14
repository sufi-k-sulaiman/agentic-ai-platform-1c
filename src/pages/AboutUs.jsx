import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Globe, Award } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

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
  }
];

const timeline = [
  { year: 'Dec 2024', title: 'Founded', description: 'Started with a vision to democratize enterprise AI' },
  { year: 'Dec 2024', title: 'Beta Customers', description: 'Launched beta program with early adopters' },
  { year: '2025', title: 'Series A', description: 'Secured Series A funding to accelerate growth' },
  { year: '2025', title: 'Series B', description: 'Raised Series B to expand platform capabilities' },
  { year: '2026', title: 'USA & Canada', description: 'Established presence across North America' },
  { year: '2027', title: 'Global Expansion', description: 'Scaling operations worldwide' }
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="About Us"
        description="Building the future of intelligent enterprise. 2000+ team members, 500+ enterprise clients, $2.5B valuation. Our mission is to empower every organization with autonomous AI."
        url="/about-us"
        keywords={['about 1C Platform', 'AI company', 'enterprise AI leader', 'company values', 'AI innovation']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
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
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
              Join our team <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-gray-400">Team members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Enterprise clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
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
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#8B2EE5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
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
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-8 items-start"
                >
                  <div className="hidden md:flex w-16 h-16 bg-[#8B2EE5] rounded-full flex-shrink-0 items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="text-[#8B2EE5] font-semibold mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}