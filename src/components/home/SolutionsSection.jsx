import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Truck, HeartPulse, Landmark, ShoppingBag, Server, Home, Train, TrafficCone, Zap, GraduationCap, Gamepad2, Shield, Plane, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const industryData = {
  'Property Management': {
    issues: [
      'Managing multiple properties with manual processes leads to inefficiencies and delayed responses',
      'Tenant complaints and maintenance requests pile up, causing dissatisfaction and churn',
      'Tracking rent payments and lease renewals manually results in missed revenue opportunities'
    ],
    solution: 'AI agents automate tenant communications, maintenance scheduling, and rent collection',
    stats: [
      { value: '40%', label: 'Cost reduction' },
      { value: '60%', label: 'Faster response' },
      { value: '85%', label: 'Tenant satisfaction' },
      { value: '24/7', label: 'AI availability' },
    ]
  },
  'Data Centers': {
    issues: [
      'Maintaining uptime while managing energy costs and predicting hardware failures is challenging',
      'Cooling inefficiencies drive up operational expenses and environmental impact',
      'Capacity planning requires constant manual monitoring and forecasting'
    ],
    solution: 'AI agents optimize cooling, predict failures, and automate capacity planning',
    stats: [
      { value: '99.999%', label: 'Uptime achieved' },
      { value: '30%', label: 'Energy savings' },
      { value: '90%', label: 'Faster repairs' },
      { value: '24/7', label: 'Monitoring' },
    ]
  },
  'Financial Services': {
    issues: [
      'Manual KYC and compliance checks create bottlenecks and regulatory risks',
      'Loan processing takes days or weeks, losing customers to faster competitors',
      'Fraud detection relies on rules-based systems that miss sophisticated attacks'
    ],
    solution: 'AI agents automate compliance, process loans instantly, and detect fraud in real-time',
    stats: [
      { value: '95%', label: 'Fraud detection' },
      { value: '3 min', label: 'Loan approval' },
      { value: '100%', label: 'Compliance' },
      { value: '45%', label: 'Cost savings' },
    ]
  },
  'Healthcare': {
    issues: [
      'Administrative burden consumes 70% of staff time, delaying patient care',
      'Medical coding errors result in claim denials and lost revenue',
      'Patient scheduling inefficiencies lead to no-shows and underutilized appointments'
    ],
    solution: 'AI agents handle scheduling, coding, claims, and documentation automatically',
    stats: [
      { value: '70%', label: 'Time saved' },
      { value: '95%', label: 'Coding accuracy' },
      { value: '100%', label: 'Compliance' },
      { value: '50%', label: 'Cost reduction' },
    ]
  },
  'Corporate Campuses': {
    issues: [
      'Inefficient space usage leads to wasted real estate costs and poor employee experience',
      'Manual visitor coordination creates security risks and delays',
      'Energy consumption goes unoptimized, driving up operational expenses'
    ],
    solution: 'AI agents optimize space allocation, coordinate visitors, and manage employee services',
    stats: [
      { value: '40%', label: 'Space savings' },
      { value: '30%', label: 'Cost reduction' },
      { value: '60%', label: 'Employee satisfaction' },
      { value: 'Real-time', label: 'Optimization' },
    ]
  },
  'Public Transit': {
    issues: [
      'Route inefficiencies reduce on-time performance and rider satisfaction',
      'Unpredictable maintenance delays disrupt service and increase costs',
      'Passenger information systems fail to provide accurate real-time updates'
    ],
    solution: 'AI agents optimize routes, predict maintenance, and provide real-time passenger updates',
    stats: [
      { value: '35%', label: 'On-time boost' },
      { value: '50%', label: 'Satisfaction up' },
      { value: '25%', label: 'Cost savings' },
      { value: 'Live', label: 'Updates' },
    ]
  },
  'Traffic Management': {
    issues: [
      'Congestion and slow incident response create delays and safety risks',
      'Traffic signals operate on fixed timers, ignoring real-time flow patterns',
      'Emergency response times suffer due to lack of predictive routing'
    ],
    solution: 'AI agents optimize signals, detect incidents instantly, and predict congestion patterns',
    stats: [
      { value: '30%', label: 'Congestion down' },
      { value: '60%', label: 'Faster response' },
      { value: '40%', label: 'Cost savings' },
      { value: 'Real-time', label: 'Detection' },
    ]
  },
  'Energy & Utilities': {
    issues: [
      'Outages and inefficiencies impact reliability while increasing costs',
      'Grid balancing becomes difficult with renewable energy variability',
      'Customer service struggles with high call volumes during outages'
    ],
    solution: 'AI agents predict outages, optimize the grid, and integrate renewable energy seamlessly',
    stats: [
      { value: '90%', label: 'Outages prevented' },
      { value: '25%', label: 'Efficiency gain' },
      { value: '45%', label: 'Satisfaction up' },
      { value: '24/7', label: 'Monitoring' },
    ]
  },
  'Retail': {
    issues: [
      'Inventory mismanagement leads to stockouts and overstock, reducing margins',
      'Low conversion rates result from generic, non-personalized shopping experiences',
      'Manual pricing strategies fail to respond to market dynamics in real-time'
    ],
    solution: 'AI agents optimize inventory, personalize offers, and implement dynamic pricing',
    stats: [
      { value: '35%', label: 'Conversion boost' },
      { value: '25%', label: 'Margin growth' },
      { value: '40%', label: 'Retention up' },
      { value: 'Real-time', label: 'Pricing' },
    ]
  },
  'Education': {
    issues: [
      'Administrative tasks consume valuable teaching time and resources',
      'One-size-fits-all learning fails to engage students with different needs',
      'Tracking student progress manually makes early intervention difficult'
    ],
    solution: 'AI agents automate admin work, personalize learning paths, and track student progress',
    stats: [
      { value: '60%', label: 'Engagement up' },
      { value: '50%', label: 'Time saved' },
      { value: '30%', label: 'Better outcomes' },
      { value: 'Adaptive', label: 'Learning' },
    ]
  },
  'Gaming': {
    issues: [
      'Infrastructure costs spiral during peak usage, eating into margins',
      'Cheating and toxic behavior ruin player experience and drive churn',
      'Manual LiveOps management limits the speed of content updates and events'
    ],
    solution: 'AI agents scale infrastructure, detect cheats, and automate LiveOps',
    stats: [
      { value: '40%', label: 'Cost reduction' },
      { value: '99%', label: 'Cheat detection' },
      { value: '99.9%', label: 'Uptime' },
      { value: 'Auto', label: 'Scaling' },
    ]
  },
  'Government': {
    issues: [
      'Manual processes delay citizen services and increase administrative overhead',
      'Document processing backlogs frustrate citizens and staff alike',
      'Compliance reporting requires extensive manual effort and verification'
    ],
    solution: 'AI agents automate citizen services, process documents, and ensure compliance',
    stats: [
      { value: '55%', label: 'Satisfaction up' },
      { value: '35%', label: 'Cost savings' },
      { value: '50%', label: 'Efficiency gain' },
      { value: '24/7', label: 'Service' },
    ]
  },
  'Airports': {
    issues: [
      'Passenger flow bottlenecks create congestion and impact on-time performance',
      'Security screening delays frustrate travelers and reduce satisfaction',
      'Gate and baggage coordination challenges lead to missed connections'
    ],
    solution: 'AI agents optimize passenger flow, streamline security, and coordinate operations',
    stats: [
      { value: '25%', label: 'On-time boost' },
      { value: '40%', label: 'Satisfaction up' },
      { value: '30%', label: 'Cost savings' },
      { value: 'Real-time', label: 'Coordination' },
    ]
  },
  'Sports & Entertainment': {
    issues: [
      'Suboptimal fan engagement reduces revenue per attendee and loyalty',
      'Venue operations lack real-time coordination, impacting guest experience',
      'Static pricing leaves money on the table during high-demand events'
    ],
    solution: 'AI agents enhance fan experiences, optimize ticketing, and manage venue operations',
    stats: [
      { value: '30%', label: 'Revenue boost' },
      { value: '45%', label: 'Efficiency gain' },
      { value: '50%', label: 'Satisfaction up' },
      { value: 'Dynamic', label: 'Pricing' },
    ]
  }
};

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

export default function SolutionsSection() {
  const [selectedIndustry, setSelectedIndustry] = useState('Property Management');
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
                <button
                  key={industry.name}
                  onClick={() => setSelectedIndustry(industry.name)}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                    selectedIndustry === industry.name
                      ? 'bg-purple-50 border-[#6209e6] text-[#6209e6]'
                      : 'bg-gray-50 hover:bg-purple-50 hover:border-[#6209e6]/20 border-transparent text-gray-700'
                  }`}
                >
                  <industry.icon className={`w-5 h-5 ${
                    selectedIndustry === industry.name ? 'text-[#6209e6]' : 'text-gray-400'
                  }`} />
                  <span className="text-sm font-medium text-left">{industry.name}</span>
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
            </motion.div>
          </div>

          {/* Right - Dynamic Industry Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#6209e6] to-[#6B21A8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{selectedIndustry}</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-xs font-semibold text-purple-200 mb-1">THE ISSUE</p>
                    <p className="text-sm sm:text-base">
                      {industryData[selectedIndustry].issue}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-purple-200 mb-1">AGENTIC AI SOLUTION</p>
                    <p className="text-sm sm:text-base">
                      {industryData[selectedIndustry].solution}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {industryData[selectedIndustry].stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-purple-200 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Decorative */}
                <div className="absolute top-6 right-6 w-20 h-20 border border-white/10 rounded-full" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}