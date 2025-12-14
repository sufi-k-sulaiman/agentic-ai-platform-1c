import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Truck, HeartPulse, Landmark, ShoppingBag, Server, Home, Train, TrafficCone, Zap, GraduationCap, Gamepad2, Shield, Plane, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const industries = [
  { icon: Building2, name: 'Property Management', href: createPageUrl('PropertyManagement') },
  { icon: Server, name: 'Data Centers', href: createPageUrl('DataCenters') },
  { icon: Landmark, name: 'Financial Services', href: createPageUrl('FinancialInstitutions') },
  { icon: HeartPulse, name: 'Healthcare', href: createPageUrl('Healthcare') },
  { icon: Home, name: 'Corporate Campuses', href: createPageUrl('CorporateCampuses') },
  { icon: Train, name: 'Public Transit', href: createPageUrl('Transit') },
  { icon: TrafficCone, name: 'Traffic Management', href: createPageUrl('Traffic') },
  { icon: Zap, name: 'Energy & Utilities', href: createPageUrl('EnergyUtilities') },
  { icon: ShoppingBag, name: 'Retail', href: createPageUrl('Retail') },
  { icon: GraduationCap, name: 'Education', href: createPageUrl('Education') },
  { icon: Gamepad2, name: 'Gaming', href: createPageUrl('Gaming') },
  { icon: Shield, name: 'Government', href: createPageUrl('GovernmentAgencies') },
  { icon: Plane, name: 'Airports', href: createPageUrl('Airports') },
  { icon: Users, name: 'Sports & Entertainment', href: createPageUrl('SportsEntertainment') },
];

const stats = [
  { value: '500+', label: 'Enterprise clients' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '50B+', label: 'API calls/month' },
  { value: '40%', label: 'Avg. cost reduction' },
];

export default function SolutionsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#6209e6] font-semibold mb-4"
            >
              SOLUTIONS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Industry-specific expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-10"
            >
              Tailored AI solutions built on deep industry knowledge. We understand your unique challenges and deliver results that matter.
            </motion.p>

            {/* Industries Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10"
            >
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  to={industry.href}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 hover:border-[#6209e6]/20 border border-transparent transition-all group"
                >
                  <industry.icon className="w-5 h-5 text-gray-400 group-hover:text-[#6209e6]" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#6209e6]">{industry.name}</span>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button className="bg-[#6209e6] hover:bg-[#5008c5] text-white rounded-full px-8">
                Explore solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#6209e6] to-[#6B21A8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Proven at scale</h3>
              <p className="text-sm sm:text-base text-purple-200 mb-6 sm:mb-10">
                Trusted by leading enterprises worldwide to power their most critical operations.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
                    <div className="text-purple-200 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Decorative */}
              <div className="absolute top-6 right-6 w-20 h-20 border border-white/10 rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}