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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Grid Reliability Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Energy grids face existential challenges as renewable energy transforms power generation: solar and wind provide clean energy but their output varies dramatically with weather, creating instability in grids designed for steady baseload power from coal and gas plants. Utilities must balance supply and demand second-by-second, yet renewable variability makes this exponentially harder—cloudy days cause solar output to plummet, forcing expensive gas "peaker" plants to compensate. Battery storage could smooth this variability, but optimizing when to charge and discharge requires predicting both renewable generation and demand hours ahead—an impossible task for human operators. Meanwhile, equipment failures cause devastating outages: a transformer failure can black out entire neighborhoods, yet utilities maintain assets on fixed schedules rather than actual condition, resulting in both premature maintenance (wasting money) and unexpected failures (causing outages).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Operational inefficiency compounds these technical challenges: grid operators make decisions based on yesterday's load patterns rather than today's real-time conditions, leading to inefficient dispatch of generation resources. Demand response programs that could reduce peak loads remain underutilized because manual coordination with customers is impractical. Distributed energy resources—rooftop solar, electric vehicle charging, smart thermostats—create both opportunities and challenges: they could provide grid services but coordinating millions of devices is impossible manually. Customer service overwhelms call centers during outages while billing inquiries about complex time-of-use rates consume staff time. Energy waste from transmission losses, inefficient generation dispatch, and poor load balancing costs billions annually. Utilities desperately need to improve efficiency and reliability while integrating renewables, but traditional grid management approaches cannot handle the complexity.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Smart Grid Intelligence</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI creates intelligent grids where autonomous agents continuously optimize every aspect of energy operations. Renewable integration AI forecasts solar and wind output hours ahead using machine learning models trained on weather patterns, historical generation, and real-time conditions, enabling grid operators to proactively balance supply. Battery optimization agents decide exactly when to charge and discharge storage based on predicted renewable generation, demand patterns, and electricity prices—shifting energy from low-value periods to high-value periods automatically. Load balancing AI continuously adjusts generation dispatch across all power sources to match demand while minimizing fuel costs and emissions. Predictive maintenance agents monitor thousands of transformers, transmission lines, and substations through vibration sensors, thermal imaging, and performance metrics, identifying failures 2-4 weeks before occurrence and scheduling service during optimal windows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Distributed energy orchestration agents coordinate millions of rooftop solar systems, batteries, electric vehicles, and smart appliances to function as virtual power plants: charging EVs when renewable generation peaks and electricity is cheap, pre-cooling buildings before high-price periods, and feeding battery power back to the grid during shortages. Outage prevention AI detects grid anomalies and automatically reroutes power around failing equipment before customers lose service. When outages occur, AI instantly identifies affected areas, dispatches crews to optimal locations, and provides customers with accurate restoration time estimates. Customer service agents handle billing questions, energy usage recommendations, and outage reporting 24/7 without human staff. The results revolutionize energy operations: 20% energy waste reduction through continuous optimization, 40% fewer outages from predictive maintenance and fault management, 30% operational cost savings from improved efficiency, 50% renewable integration without grid instability, and 99.99% reliability that makes clean energy both sustainable and dependable for modern society.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Grid Reliability Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Energy grids face existential challenges as renewable energy transforms power generation: solar and wind provide clean energy but their output varies dramatically with weather, creating instability in grids designed for steady baseload power from coal and gas plants. Utilities must balance supply and demand second-by-second, yet renewable variability makes this exponentially harder—cloudy days cause solar output to plummet, forcing expensive gas "peaker" plants to compensate. Battery storage could smooth this variability, but optimizing when to charge and discharge requires predicting both renewable generation and demand hours ahead—an impossible task for human operators. Meanwhile, equipment failures cause devastating outages: a transformer failure can black out entire neighborhoods, yet utilities maintain assets on fixed schedules rather than actual condition, resulting in both premature maintenance (wasting money) and unexpected failures (causing outages).
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Operational inefficiency compounds these technical challenges: grid operators make decisions based on yesterday's load patterns rather than today's real-time conditions, leading to inefficient dispatch of generation resources. Demand response programs that could reduce peak loads remain underutilized because manual coordination with customers is impractical. Distributed energy resources—rooftop solar, electric vehicle charging, smart thermostats—create both opportunities and challenges: they could provide grid services but coordinating millions of devices is impossible manually. Customer service overwhelms call centers during outages while billing inquiries about complex time-of-use rates consume staff time. Energy waste from transmission losses, inefficient generation dispatch, and poor load balancing costs billions annually. Utilities desperately need to improve efficiency and reliability while integrating renewables, but traditional grid management approaches cannot handle the complexity.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Smart Grid Intelligence</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI creates intelligent grids where autonomous agents continuously optimize every aspect of energy operations. Renewable integration AI forecasts solar and wind output hours ahead using machine learning models trained on weather patterns, historical generation, and real-time conditions, enabling grid operators to proactively balance supply. Battery optimization agents decide exactly when to charge and discharge storage based on predicted renewable generation, demand patterns, and electricity prices—shifting energy from low-value periods to high-value periods automatically. Load balancing AI continuously adjusts generation dispatch across all power sources to match demand while minimizing fuel costs and emissions. Predictive maintenance agents monitor thousands of transformers, transmission lines, and substations through vibration sensors, thermal imaging, and performance metrics, identifying failures 2-4 weeks before occurrence and scheduling service during optimal windows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Distributed energy orchestration agents coordinate millions of rooftop solar systems, batteries, electric vehicles, and smart appliances to function as virtual power plants: charging EVs when renewable generation peaks and electricity is cheap, pre-cooling buildings before high-price periods, and feeding battery power back to the grid during shortages. Outage prevention AI detects grid anomalies and automatically reroutes power around failing equipment before customers lose service. When outages occur, AI instantly identifies affected areas, dispatches crews to optimal locations, and provides customers with accurate restoration time estimates. Customer service agents handle billing questions, energy usage recommendations, and outage reporting 24/7 without human staff. The results revolutionize energy operations: 20% energy waste reduction through continuous optimization, 40% fewer outages from predictive maintenance and fault management, 30% operational cost savings from improved efficiency, 50% renewable integration without grid instability, and 99.99% reliability that makes clean energy both sustainable and dependable for modern society.
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