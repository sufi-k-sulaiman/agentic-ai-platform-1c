import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, TrendingDown, Database, Workflow, DollarSign, Shield, Activity, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const challenges = [
  {
    icon: DollarSign,
    title: 'Grid Inefficiency',
    problem: 'Energy waste, peak demand spikes, inefficient load balancing costing billions',
    solution: 'AI optimizes grid operations in real-time, balances demand, and reduces energy waste by 20%'
  },
  {
    icon: Database,
    title: 'Smart Meter Data',
    problem: 'Billions of data points from smart meters, sensors—overwhelming to analyze',
    solution: 'Agentic AI processes all meter data, detects anomalies, predicts demand, and enables dynamic pricing'
  },
  {
    icon: Workflow,
    title: 'Reactive Maintenance',
    problem: 'Equipment failures causing outages, manual inspections, costly emergency repairs',
    solution: 'Predictive AI monitors grid health 24/7, prevents failures, reducing outages by 40% and maintenance costs by 30%'
  },
  {
    icon: Activity,
    title: 'Renewable Integration',
    problem: 'Solar/wind variability causing grid instability, difficult to balance with traditional sources',
    solution: 'AI forecasts renewable output, orchestrates storage, and seamlessly integrates clean energy sources'
  }
];

const solutions = [
  {
    category: 'Grid Operations',
    items: [
      'Real-time load balancing and optimization',
      'Predictive demand forecasting',
      'Automated fault detection and isolation',
      'Dynamic voltage and frequency control'
    ]
  },
  {
    category: 'Asset Management',
    items: [
      'Predictive maintenance for transformers and equipment',
      'Automated inspection scheduling',
      'Equipment health monitoring via IoT',
      'Outage prediction and prevention'
    ]
  },
  {
    category: 'Customer & Billing',
    items: [
      'Automated meter reading and billing',
      'Dynamic pricing based on demand patterns',
      '24/7 Agentic Ai customer service assistant',
      'Energy usage insights and recommendations'
    ]
  },
  {
    category: 'Renewable Integration',
    items: [
      'Solar and wind output forecasting',
      'Battery storage optimization',
      'Grid stability management with renewables',
      'Carbon footprint tracking and reporting'
    ]
  }
];

const metrics = [
  { value: '20%', label: 'Energy Savings', description: 'Reduced waste & losses' },
  { value: '40%', label: 'Fewer Outages', description: 'Predictive maintenance' },
  { value: '30%', label: 'Lower Costs', description: 'Maintenance optimization' },
  { value: '99.99%', label: 'Grid Reliability', description: 'AI-managed uptime' }
];

export default function EnergyUtilities() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                Energy & Utilities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart grids powered
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  by Agentic AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform energy operations with Agentic Ai that optimizes grids, predicts failures, and integrates renewables—reducing waste by 20% and outages by 40%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                    <Button className="bg-[#6209e6] hover:bg-[#5008c5] rounded-full px-8 h-14">
                        Get started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                    Calculate Savings
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800" alt="Energy Grid" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{metric.value}</div>
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business & Technology Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Energy & Utilities
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              The energy and utilities sector represents one of the world's largest industries, with global electricity markets exceeding $2 trillion annually and serving virtually every human on earth. Electric utilities manage vast, complex grids delivering power from hundreds of generation sources to millions of endpoints, requiring perfect supply-demand balance every millisecond—excess generation causes frequency spikes damaging equipment, while insufficient supply triggers brownouts or blackouts. The industry faces transformational pressures: renewable energy mandates requiring integration of variable solar and wind power incompatible with traditional baseload planning; aging infrastructure with transformers and transmission lines installed 50+ years ago approaching end of life; climate change increasing extreme weather events causing outages; and customer expectations for 100% reliability despite rising costs. Utilities must simultaneously improve reliability, reduce costs, integrate renewables, and maintain affordable rates for residential customers while competing with distributed generation (rooftop solar) threatening traditional utility business models.
            </p>
            <p>
              Utility business models traditionally centered on regulated monopolies earning returns on infrastructure investments, generating revenue from kilowatt-hour sales and monthly service charges while operating under strict rate regulation preventing excessive profits. This model works well for capital-intensive baseload generation (coal, nuclear, gas plants) with steady output, but renewable energy fundamentally disrupts the economics: solar and wind have near-zero marginal costs once installed but produce power intermittently regardless of demand, creating "duck curve" challenges where utilities must maintain expensive backup generation for evening peaks despite daytime solar abundance. Distributed energy resources (rooftop solar, batteries, electric vehicles) enable customers to generate and store their own power, reducing utility sales while the grid still requires maintenance. Forward-thinking utilities evolve toward platform business models: managing energy networks connecting diverse resources, offering grid services like demand response and virtual power plants, and monetizing data and analytics. Success requires operational efficiency reducing costs per customer, grid modernization enabling renewable integration and distributed resource coordination, and customer engagement programs building loyalty despite competition from independent solar installers.
            </p>
            <p>
              Energy grid technology infrastructure spans generation management systems controlling power plants; SCADA (Supervisory Control and Data Acquisition) monitoring grid conditions and controlling switches and breakers; energy management systems optimizing generation dispatch; outage management systems tracking and coordinating restoration; customer information systems handling billing and service requests; advanced metering infrastructure (smart meters) providing granular consumption data; distribution automation equipment enabling remote fault isolation; and grid analytics platforms processing operational data. Modern smart grids deploy extensive sensor networks measuring voltage, current, power quality, and equipment health at thousands of points. Weather forecasting systems predict renewable generation. Demand response platforms coordinate large customers reducing consumption during peak periods. Battery storage systems provide grid services but require sophisticated control algorithms balancing multiple objectives. SCADA systems enable remote monitoring and control but decisions remain predominantly manual: grid operators watch dashboards and adjust dispatch based on experience and forecasts. Renewable integration exists but often requires curtailing solar/wind output during low-demand periods, wasting clean energy because storage and demand flexibility are insufficiently coordinated.
            </p>
            <p>
              Agentic AI enables truly intelligent grids where autonomous agents manage operations with superhuman capability. Renewable forecasting agents predict solar and wind output hours ahead with 95% accuracy using deep learning models analyzing weather patterns, historical generation, satellite imagery, and atmospheric conditions, enabling proactive grid balancing. Battery optimization agents orchestrate storage across the network, charging when renewable generation exceeds demand and electricity prices are low, discharging during peak demand when prices spike—continuously optimizing economic value while providing grid stability services. Load balancing agents monitor demand across all circuits in real-time, automatically dispatching generation from optimal sources (lowest cost, cleanest emissions, fastest response) while maintaining frequency and voltage within specifications. Predictive maintenance agents analyze thermal imaging, vibration patterns, partial discharge signals, and performance trends from transformers and transmission equipment to identify failures 2-4 weeks early, scheduling service before outages. Distributed resource orchestration agents coordinate millions of smart thermostats, EV chargers, water heaters, and batteries to function as virtual power plants—reducing peak demand, providing frequency regulation services, and enabling renewable integration at scale previously impossible. Customer service AI handles outages, billing inquiries, and energy efficiency recommendations 24/7. The transformation: 20% energy waste reduction, 40% fewer outages, 30% operational cost savings, 50% renewable penetration without reliability sacrifice, making clean energy both sustainable and dependable.
            </p>
          </div>
        </div>
      </section>



      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Energy challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms energy and utility operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <challenge.icon className="w-7 h-7 text-[#6209e6]" />
                    </div>
                    <CardTitle className="text-2xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-red-600 mb-2">❌ The Problem</div>
                        <p className="text-gray-600">{challenge.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 mb-2">✓ Agentic Ai Solution</div>
                        <p className="text-gray-900 font-medium">{challenge.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete grid automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of energy operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((section, index) => (
              <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#6209e6]">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for smart grid operations?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading utilities reducing costs and outages with Agentic Ai
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-[#6209e6] hover:bg-[#5008c5] rounded-full px-10 h-16 text-lg">
                  Get started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('SavingsCalculator')}>
                <Button variant="outline" className="rounded-full border-gray-300 px-10 h-16 text-lg">
                  Calculate Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}