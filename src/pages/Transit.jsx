import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Train, TrendingDown, Database, Workflow, DollarSign, Users, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import VerticalAnalytics from '@/components/VerticalAnalytics';

const challenges = [
  {
    icon: DollarSign,
    title: 'Operating Costs',
    problem: 'Fuel waste, inefficient route planning, overstaffing, expensive manual maintenance',
    solution: 'AI optimizes routes, predicts maintenance needs, and automates scheduling—reducing costs by 25%'
  },
  {
    icon: Database,
    title: 'Data Complexity',
    problem: 'Real-time location, ridership, delays, maintenance logs—millions of data points with no insights',
    solution: 'Agentic AI analyzes all transit data to optimize operations, predict delays, and improve on-time performance'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Schedule changes, maintenance coordination, incident response—all handled manually',
    solution: 'Autonomous agents automatically adjust schedules, dispatch maintenance crews, and manage incidents'
  },
  {
    icon: Users,
    title: 'Passenger Experience',
    problem: 'Lack of real-time updates, poor communication during delays, no personalized journey planning',
    solution: 'AI provides real-time updates, proactive delay notifications, and personalized routing—boosting satisfaction by 35%'
  }
];

const solutions = [
  {
    category: 'Operations & Planning',
    items: [
      'Dynamic route optimization based on demand',
      'Predictive maintenance for vehicles and infrastructure',
      'Automated crew scheduling and shift management',
      'Real-time capacity management and load balancing'
    ]
  },
  {
    category: 'Passenger Services',
    items: [
      '24/7 Agentic Ai assistant for trip planning and inquiries',
      'Real-time delay predictions and alternative routing',
      'Personalized notifications and journey updates',
      'Automated ticketing and fare optimization'
    ]
  },
  {
    category: 'Maintenance & Safety',
    items: [
      'IoT-powered predictive maintenance alerts',
      'Automated work order generation and tracking',
      'Safety incident detection and response automation',
      'Asset health monitoring across entire fleet'
    ]
  },
  {
    category: 'Finance & Analytics',
    items: [
      'Real-time ridership analytics and forecasting',
      'Revenue optimization through dynamic pricing',
      'Cost per mile tracking and efficiency metrics',
      'Budget planning based on predictive models'
    ]
  }
];

const metrics = [
  { value: '25%', label: 'Cost Reduction', description: 'Lower operational expenses' },
  { value: '95%', label: 'On-Time Rate', description: 'Improved schedule adherence' },
  { value: '35%', label: 'Higher Satisfaction', description: 'Better passenger experience' },
  { value: '30%', label: 'Less Downtime', description: 'Predictive maintenance' }
];

export default function Transit() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Train className="w-4 h-4" />
                Public Transit
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI for smarter
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  public transportation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform transit operations with Agentic AI that optimizes routes, predicts delays, and improves passenger experience—reducing costs by 25% while increasing on-time performance.
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
              <img src="https://images.unsplash.com/photo-1554672723-d42a16e533db?w=800" alt="Public Transit" className="rounded-3xl shadow-2xl" />
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
              Public Transit
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Public transportation systems form critical urban infrastructure, with U.S. transit agencies alone providing 10 billion trips annually across buses, subways, light rail, and commuter trains. The industry faces a fundamental sustainability crisis: operating revenues from fares typically cover only 30-40% of costs, requiring ongoing subsidies from local, state, and federal governments totaling $50+ billion annually. Transit agencies operate under intense political scrutiny with mandates to provide affordable, reliable service while controlling costs and reducing emissions. The COVID-19 pandemic devastated ridership (down 70% at the trough), creating budget crises as fare revenue collapsed while fixed costs continued. Recovery remains incomplete with ridership at 60-80% of pre-pandemic levels, fundamentally changing transit economics and forcing difficult service adjustments. Successful agencies must do more with less: maintaining service quality and reliability that attracts riders back from personal vehicles, while dramatically improving operational efficiency to remain financially viable with reduced fare revenue and uncertain subsidy levels.
            </p>
            <p>
              Transit business models rely on fare revenue (30-40% of operating budget), government subsidies covering deficits, and auxiliary revenue from advertising, retail concessions, and parking. Operating costs are dominated by labor (operators, mechanics, administrative staff representing 60-70% of expenses), fuel or electricity, vehicle maintenance, and infrastructure upkeep. Capital expenses for vehicle purchases and infrastructure improvements come from federal grants and bond issues. The economics favor high ridership routes with frequent service where revenue approaches costs, while lower-demand routes provide essential coverage but lose money. Transit agencies balance social equity obligations (serving all neighborhoods including low-income areas) with financial reality (focusing service on high-demand corridors). Improving financial sustainability requires increasing ridership through better service reliability and convenience, reducing operational costs through efficiency improvements and technology, and demonstrating value to funding agencies through performance metrics. The death spiral—declining ridership forcing service cuts that further reduce ridership—must be avoided through service improvements that attract riders despite competition from ride-sharing and remote work.
            </p>
            <p>
              Transit technology infrastructure includes automatic vehicle location (AVL) systems tracking real-time bus and train positions via GPS; computer-aided dispatch coordinating vehicle assignments and crew schedules; fare collection systems processing payments via cards, mobile apps, and cash; passenger information systems displaying real-time arrivals at stops and stations; maintenance management platforms tracking vehicle repairs, part inventory, and inspection schedules; and operations control centers monitoring service across entire networks. Modern agencies deploy sensors on vehicles monitoring engine performance, brake wear, and component health; traffic signal priority systems giving buses green lights to improve speed; and mobile apps providing trip planning, real-time tracking, and service alerts. Integration between systems remains limited: passenger apps show predicted arrivals but can't reserve space on crowded routes; maintenance systems track repairs but don't predict failures; AVL data exists but doesn't automatically optimize route timing. Cloud platforms now enable better data sharing, while AI applications analyze ridership patterns for route planning and predict vehicle maintenance needs, though deployment remains limited to pilot programs at leading agencies.
            </p>
            <p>
              Agentic AI revolutionizes transit operations through autonomous agents that optimize every aspect of service delivery in real-time. Dynamic routing agents analyze current ridership demand, traffic conditions, weather forecasts, and special events to continuously adjust service—increasing frequency on crowded routes, deploying smaller vehicles during off-peak hours, and rerouting around congestion automatically. Predictive maintenance agents monitor every vehicle through hundreds of sensors, detecting issues weeks before failure by analyzing vibration patterns, temperature anomalies, and performance degradation, then automatically scheduling service during optimal windows to minimize service disruptions while extending vehicle lifespan. Disruption response agents instantly detect breakdowns or delays and autonomously execute recovery plans: identifying replacement vehicles, rerouting service, updating passenger information, and coordinating crew assignments—all within minutes rather than the current 15-30 minute manual response time. Passenger experience agents provide accurate arrival predictions within 30 seconds, suggest optimal routes considering delays, proactively notify riders of disruptions with alternatives, and optimize fare pricing to incentivize off-peak travel while maximizing revenue. The results transform transit viability: 95% on-time performance as AI predicts and prevents delays, 25% operational cost reduction through optimized scheduling and predictive maintenance, 35% ridership growth as reliable service attracts passengers back, and sustainability improvements from reduced fuel waste and optimized fleet utilization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Transit Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Public transit agencies struggle with the fundamental tension between service quality and cost efficiency: buses run on fixed schedules regardless of actual demand, meaning vehicles travel empty during off-peak hours (wasting fuel and driver time) while passengers are packed like sardines during rush hour. Vehicle breakdowns happen unexpectedly because maintenance follows calendar schedules rather than actual equipment condition—a bus transmission fails mid-route, stranding passengers and cascading delays across the network. Transit operators manually adjust to disruptions: when accidents block routes, dispatchers spend precious minutes on radio communications rerouting buses and notifying passengers through outdated announcement systems. The result is unreliable service that frustrates passengers and drives them to personal vehicles, creating a death spiral of declining ridership, reduced revenue, and service cuts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Operational inefficiency compounds these challenges: crew scheduling happens manually with spreadsheets, leading to shift gaps, overtime costs, and unfair distribution of desirable routes. Fare collection systems detect revenue leakage but identifying specific loss points requires manual analysis rarely performed. Route planning happens annually based on historical data rather than real-time demand patterns—meaning service allocations that made sense last year persist despite changing employment centers and residential patterns. Passengers lack real-time information, standing at stops unsure whether the bus left 2 minutes ago or will arrive in 20 minutes. Customer service teams field thousands of calls about schedules and delays but can't provide accurate answers because they lack visibility into actual vehicle locations and conditions. Budget pressures force impossible choices: cut service frequency, defer vehicle replacement, or raise fares—each option further degrading the rider experience and accelerating ridership decline.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transit's Reliability Crisis</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Public transit agencies struggle with the fundamental tension between service quality and cost efficiency: buses run on fixed schedules regardless of actual demand, meaning vehicles travel empty during off-peak hours (wasting fuel and driver time) while passengers are packed like sardines during rush hour. Vehicle breakdowns happen unexpectedly because maintenance follows calendar schedules rather than actual equipment condition—a bus transmission fails mid-route, stranding passengers and cascading delays across the network. Transit operators manually adjust to disruptions: when accidents block routes, dispatchers spend precious minutes on radio communications rerouting buses and notifying passengers through outdated announcement systems. The result is unreliable service that frustrates passengers and drives them to personal vehicles, creating a death spiral of declining ridership, reduced revenue, and service cuts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Operational inefficiency compounds these challenges: crew scheduling happens manually with spreadsheets, leading to shift gaps, overtime costs, and unfair distribution of desirable routes. Fare collection systems detect revenue leakage but identifying specific loss points requires manual analysis rarely performed. Route planning happens annually based on historical data rather than real-time demand patterns—meaning service allocations that made sense last year persist despite changing employment centers and residential patterns. Passengers lack real-time information, standing at stops unsure whether the bus left 2 minutes ago or will arrive in 20 minutes. Customer service teams field thousands of calls about schedules and delays but can't provide accurate answers because they lack visibility into actual vehicle locations and conditions. Budget pressures force impossible choices: cut service frequency, defer vehicle replacement, or raise fares—each option further degrading the rider experience and accelerating ridership decline.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Intelligent Transit Operations</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI revolutionizes transit operations through autonomous agents that optimize every aspect of service delivery in real-time. Dynamic routing AI analyzes ridership patterns, traffic conditions, weather forecasts, and special events to continuously adjust service: increasing frequency on high-demand routes, deploying smaller vehicles during off-peak hours, and rerouting around congestion—all automatically. Predictive maintenance agents monitor every vehicle through hundreds of sensors, identifying issues weeks before failure and automatically scheduling service during optimal windows to minimize service disruptions. When breakdowns do occur, AI instantly identifies the closest replacement vehicle, reroutes passengers, updates arrival predictions, and notifies affected riders through their preferred channels. Crew scheduling optimization ensures fair shift distribution while minimizing overtime and maintaining regulatory compliance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passenger experience transforms through real-time intelligence: mobile apps powered by AI provide accurate arrival predictions within 30 seconds, suggest optimal routes considering delays and connections, and proactively notify riders of service disruptions with alternative options. Fare optimization agents dynamically adjust pricing to incentivize off-peak travel and maximize revenue while keeping transit affordable. Operations dashboards give transit managers complete visibility into fleet health, service performance, and passenger satisfaction metrics, enabling data-driven decisions about route planning, infrastructure investments, and service improvements. The results are remarkable: 95% on-time performance as AI predicts and prevents delays, 25% operational cost reduction through optimized routing and predictive maintenance, 30% reduction in vehicle downtime, and 35% ridership growth as reliable service attracts passengers back from personal vehicles. Transit becomes a viable, attractive choice that reduces congestion and emissions while operating sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Route optimized', description: 'Line 42 delay avoided', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:45 AM', action: 'Maintenance predicted', description: 'Bus 847 service scheduled', icon: 'AlertCircle', color: 'text-orange-500' },
          { time: '11:20 AM', action: 'Real-time update sent', description: '5,000 passengers notified', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:45 AM', action: 'Capacity adjusted', description: 'Extra train added to route', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'On-Time Performance', current: 920, target: 1000, percentage: 92, color: 'bg-purple-500' },
          { goal: 'Passenger Satisfaction', current: 850, target: 1000, percentage: 85, color: 'bg-green-500' },
          { goal: 'Maintenance Efficiency', current: 78, target: 100, percentage: 78, color: 'bg-blue-500' },
          { goal: 'Cost Reduction', current: 65, target: 100, percentage: 65, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Route Performance', description: 'Line 42 achieved 95% on-time today...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Ridership Increase', description: 'Monthly ridership up 12%...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Predictive Maintenance', description: '3 vehicles scheduled for service...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Weather Advisory', description: 'Snow expected, routes adjusted...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transit challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI transforms public transportation operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 flex items-center justify-center mb-4">
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete transit automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of public transportation
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
              Ready to modernize your transit system?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading transit authorities improving operations with Agentic AI
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