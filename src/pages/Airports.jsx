import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, TrendingDown, Database, Workflow, DollarSign, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import VerticalAnalytics from '@/components/VerticalAnalytics';

const challenges = [
  {
    icon: DollarSign,
    title: 'Operational Costs',
    problem: 'Inefficient gate assignments, manual baggage handling, high labor costs',
    solution: 'AI optimizes gate usage, automates operations, and predicts staffing needs—reducing costs by 35%'
  },
  {
    icon: Workflow,
    title: 'Flight Delays',
    problem: 'Manual coordination, reactive problem-solving, cascading delays costing billions',
    solution: 'Predictive AI forecasts delays, optimizes turnarounds, and coordinates operations—improving on-time by 25%'
  },
  {
    icon: Users,
    title: 'Passenger Experience',
    problem: 'Long security lines, poor wayfinding, lack of real-time information',
    solution: 'AI personalizes journeys, optimizes queues, provides instant updates—boosting satisfaction by 40%'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    problem: 'Manual screening bottlenecks, reactive threat detection, compliance overhead',
    solution: 'AI enhances screening efficiency, detects anomalies in real-time, automates compliance reporting'
  }
];

const solutions = [
  {
    category: 'Operations',
    items: [
      'Predictive gate assignment optimization',
      'Automated baggage tracking and routing',
      'Dynamic staff scheduling and allocation',
      'Real-time resource coordination'
    ]
  },
  {
    category: 'Passenger Services',
    items: [
      '24/7 Agentic Ai concierge for flight and airport info',
      'Personalized wayfinding and navigation',
      'Queue optimization for security and boarding',
      'Automated rebooking and customer service'
    ]
  },
  {
    category: 'Safety & Security',
    items: [
      'Agentic Ai-powered threat detection and screening',
      'Predictive maintenance for critical systems',
      'Automated incident response coordination',
      'Compliance monitoring and reporting'
    ]
  },
  {
    category: 'Revenue & Analytics',
    items: [
      'Dynamic parking and concession pricing',
      'Retail analytics and optimization',
      'Predictive demand forecasting',
      'Revenue per passenger tracking'
    ]
  }
];

const metrics = [
  { value: '35%', label: 'Cost Reduction', description: 'Operational efficiency' },
  { value: '25%', label: 'Better On-Time', description: 'Fewer delays' },
  { value: '40%', label: 'Satisfaction', description: 'Improved experience' },
  { value: '50%', label: 'Faster Processing', description: 'Automated workflows' }
];

export default function Airports() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Airport AI Solutions"
        description="AI-powered airport operations optimization. 35% cost reduction, 25% better on-time performance, 40% higher passenger satisfaction through automated operations."
        url="/airports"
        keywords={['airport AI', 'airport operations', 'flight delays', 'passenger experience', 'gate optimization', 'aviation technology']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Plane className="w-4 h-4" />
                Airports
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic Ai for
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  smarter airports
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform airport operations with AI that optimizes gates, predicts delays, and delights passengers—cutting costs by 35% while improving on-time performance by 25%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
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
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800" alt="Airport" className="rounded-3xl shadow-2xl" />
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Airport Operations Chaos</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Airport operations are dominated by cascading delays where one late arrival disrupts dozens of downstream flights: aircraft sit at gates waiting for delayed passengers from connections, pushing back departure times that affect gate availability for arriving flights. Gate assignments happen manually by coordinators juggling dozens of constraints—aircraft size, passenger connections, customs requirements, ground crew availability—making suboptimal decisions that increase taxi times and missed connections. Baggage handling relies on manual tracking where misconnections happen invisibly until passengers report missing bags at destination, requiring expensive recovery operations. Security checkpoint wait times fluctuate wildly: 5 minutes during quiet periods but 45+ minutes during peak banks of international departures, with staffing levels based on historical averages rather than predicted flows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passenger experience suffers from poor coordination and communication: travelers don't know whether to grab coffee or rush to their gate because predicted departure times don't account for current airport conditions. Flight delays get announced at the last minute, leaving passengers stranded without options for rebooking or notifications to people picking them up. Wayfinding through unfamiliar terminals causes stress and missed flights. Retail and dining revenue opportunities are lost because stores don't know when passenger flows will arrive—staffing for peak times based on schedules rather than predicted actual flows including delays. Ground operations coordination happens via radio and manual tracking: fueling, catering, cleaning, baggage loading, and maintenance all require human dispatch and monitoring. Each delay investigation requires manually correlating data across systems operated by airlines, ground handlers, air traffic control, and airport operations—taking hours while passengers sit on delayed aircraft.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Intelligent Airport Orchestration</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI creates seamlessly coordinated airport operations through autonomous agents that optimize every process. Gate assignment AI continuously optimizes assignments based on real-time conditions: predicting delays before they're officially announced, reassigning gates to minimize taxi times, prioritizing quick turns to maximize aircraft utilization, and ensuring international passengers have customs-capable gates with optimal connection paths. Baggage tracking agents monitor every bag's journey through RFID and computer vision, predicting misconnections 30 minutes before they occur and automatically rerouting bags to make flights—reducing lost baggage by 90%. Passenger flow prediction analyzes incoming flights, historical patterns, and current conditions to forecast security checkpoint demand, enabling dynamic staffing that eliminates long waits while controlling labor costs. Ground operations AI coordinates all service vehicles automatically, ensuring aircraft get fueling, catering, and cleaning in optimal sequence without delays.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passenger experience transforms through personalized AI assistance: mobile apps provide accurate security wait time predictions, suggest optimal times to head to the gate, recommend dining based on dietary preferences and time available, and proactively notify passengers of gate changes or delays with rebooking options. Indoor wayfinding AI guides passengers through terminals with turn-by-turn directions accounting for current crowds and construction. When delays occur, notification agents instantly inform affected passengers and people picking them up, along with rebooking suggestions. Revenue optimization AI predicts passenger flows to retail and dining locations, enabling dynamic staffing and inventory management that increases per-passenger spending 20%. Operations dashboards give airport managers complete real-time visibility across all systems, enabling data-driven decisions. The results are transformative: 25% on-time improvement, 40% faster passenger processing, 30% operational cost reduction, 90% baggage accuracy, and 50% higher satisfaction—airports handle growing traffic without terminal expansion while delivering experiences that make air travel pleasant rather than stressful.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Airport Operations Chaos</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Airport operations are dominated by cascading delays where one late arrival disrupts dozens of downstream flights: aircraft sit at gates waiting for delayed passengers from connections, pushing back departure times that affect gate availability for arriving flights. Gate assignments happen manually by coordinators juggling dozens of constraints—aircraft size, passenger connections, customs requirements, ground crew availability—making suboptimal decisions that increase taxi times and missed connections. Baggage handling relies on manual tracking where misconnections happen invisibly until passengers report missing bags at destination, requiring expensive recovery operations. Security checkpoint wait times fluctuate wildly: 5 minutes during quiet periods but 45+ minutes during peak banks of international departures, with staffing levels based on historical averages rather than predicted flows.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passenger experience suffers from poor coordination and communication: travelers don't know whether to grab coffee or rush to their gate because predicted departure times don't account for current airport conditions. Flight delays get announced at the last minute, leaving passengers stranded without options for rebooking or notifications to people picking them up. Wayfinding through unfamiliar terminals causes stress and missed flights. Retail and dining revenue opportunities are lost because stores don't know when passenger flows will arrive—staffing for peak times based on schedules rather than predicted actual flows including delays. Ground operations coordination happens via radio and manual tracking: fueling, catering, cleaning, baggage loading, and maintenance all require human dispatch and monitoring. Each delay investigation requires manually correlating data across systems operated by airlines, ground handlers, air traffic control, and airport operations—taking hours while passengers sit on delayed aircraft.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Intelligent Airport Orchestration</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI creates seamlessly coordinated airport operations through autonomous agents that optimize every process. Gate assignment AI continuously optimizes assignments based on real-time conditions: predicting delays before they're officially announced, reassigning gates to minimize taxi times, prioritizing quick turns to maximize aircraft utilization, and ensuring international passengers have customs-capable gates with optimal connection paths. Baggage tracking agents monitor every bag's journey through RFID and computer vision, predicting misconnections 30 minutes before they occur and automatically rerouting bags to make flights—reducing lost baggage by 90%. Passenger flow prediction analyzes incoming flights, historical patterns, and current conditions to forecast security checkpoint demand, enabling dynamic staffing that eliminates long waits while controlling labor costs. Ground operations AI coordinates all service vehicles automatically, ensuring aircraft get fueling, catering, and cleaning in optimal sequence without delays.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passenger experience transforms through personalized AI assistance: mobile apps provide accurate security wait time predictions, suggest optimal times to head to the gate, recommend dining based on dietary preferences and time available, and proactively notify passengers of gate changes or delays with rebooking options. Indoor wayfinding AI guides passengers through terminals with turn-by-turn directions accounting for current crowds and construction. When delays occur, notification agents instantly inform affected passengers and people picking them up, along with rebooking suggestions. Revenue optimization AI predicts passenger flows to retail and dining locations, enabling dynamic staffing and inventory management that increases per-passenger spending 20%. Operations dashboards give airport managers complete real-time visibility across all systems, enabling data-driven decisions. The results are transformative: 25% on-time improvement, 40% faster passenger processing, 30% operational cost reduction, 90% baggage accuracy, and 50% higher satisfaction—airports handle growing traffic without terminal expansion while delivering experiences that make air travel pleasant rather than stressful.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Gate reassigned', description: 'Flight 458 optimized for connections', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:45 AM', action: 'Baggage rerouted', description: 'Missed connection prevented', icon: 'AlertCircle', color: 'text-orange-500' },
          { time: '11:20 AM', action: 'Security optimized', description: 'Wait time reduced to 8 minutes', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:45 AM', action: 'Delay predicted', description: 'Passengers notified 30min early', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'On-Time Performance', current: 880, target: 1000, percentage: 88, color: 'bg-purple-500' },
          { goal: 'Passenger Satisfaction', current: 850, target: 1000, percentage: 85, color: 'bg-green-500' },
          { goal: 'Baggage Accuracy', current: 95, target: 100, percentage: 95, color: 'bg-blue-500' },
          { goal: 'Operational Efficiency', current: 82, target: 100, percentage: 82, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'On-Time Record', description: '94% of flights departed on schedule today...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Revenue Increase', description: 'Concessions revenue up 18%...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Gate Optimization', description: 'Average taxi time reduced 12%...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Weather Advisory', description: 'Storm approaching, operations adjusted...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Airport challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms airport operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl flex-1">{challenge.title}</CardTitle>
                      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="w-7 h-7 text-[#8B2EE5]" />
                      </div>
                    </div>
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete airport automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of airport operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((section, index) => (
              <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#8B2EE5]">{section.category}</CardTitle>
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
              Ready to transform your airport?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading airports worldwide optimizing operations with Agentic Ai
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
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