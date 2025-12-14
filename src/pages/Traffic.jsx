import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrafficCone, TrendingDown, Database, Workflow, DollarSign, Zap, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const challenges = [
  {
    icon: Workflow,
    title: 'Traffic Congestion',
    problem: 'Static traffic signals, no real-time optimization, causing $166B annual congestion costs',
    solution: 'AI dynamically adjusts signals based on live traffic, reducing congestion by 30% and commute times by 25%'
  },
  {
    icon: Database,
    title: 'Data Overload',
    problem: 'Cameras, sensors, GPS generating terabytes daily—impossible to analyze manually',
    solution: 'Agentic AI processes all data streams in real-time, identifying patterns and optimizing traffic flow instantly'
  },
  {
    icon: DollarSign,
    title: 'Infrastructure Costs',
    problem: 'Manual monitoring, reactive maintenance, inefficient resource allocation',
    solution: 'Predictive AI identifies issues before failures, optimizes maintenance schedules, cutting costs by 35%'
  },
  {
    icon: Clock,
    title: 'Incident Response',
    problem: 'Slow accident detection, delayed emergency response, manual traffic rerouting',
    solution: 'AI detects incidents in seconds, auto-alerts responders, and reroutes traffic—reducing response time by 40%'
  }
];

const solutions = [
  {
    category: 'Smart Traffic Control',
    items: [
      'Adaptive signal timing based on real-time traffic',
      'Multi-intersection coordination for green waves',
      'Priority routing for emergency vehicles',
      'Predictive traffic flow optimization'
    ]
  },
  {
    category: 'Incident Management',
    items: [
      'Automatic accident detection from camera feeds',
      'Instant emergency service notifications',
      'Dynamic traffic rerouting around incidents',
      'Congestion prediction and prevention'
    ]
  },
  {
    category: 'Infrastructure Monitoring',
    items: [
      'Road condition assessment from sensor data',
      'Predictive maintenance for signals and sensors',
      'Automated work zone traffic management',
      'Weather-based traffic flow adjustments'
    ]
  },
  {
    category: 'Analytics & Planning',
    items: [
      'Real-time traffic pattern analysis',
      'Long-term infrastructure planning insights',
      'Cost-benefit analysis for improvements',
      'Environmental impact tracking (emissions)'
    ]
  }
];

const metrics = [
  { value: '30%', label: 'Less Congestion', description: 'Reduced traffic delays' },
  { value: '25%', label: 'Faster Commutes', description: 'Average time savings' },
  { value: '40%', label: 'Quicker Response', description: 'Emergency incidents' },
  { value: '35%', label: 'Cost Savings', description: 'Infrastructure maintenance' }
];

export default function Traffic() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <TrafficCone className="w-4 h-4" />
                Smart Traffic Management
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  traffic optimization
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Deploy Agentic AI that analyzes millions of data points to optimize traffic flow, reduce congestion by 30%, and cut emergency response times by 40%.
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
              <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800" alt="Smart Traffic" className="rounded-3xl shadow-2xl" />
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
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Traffic congestion costs the U.S. economy over $166 billion annually in lost productivity, wasted fuel, and increased emissions, while frustrating commuters lose an average of 54 hours per year sitting in traffic. Traditional traffic management relies on pre-programmed signal timing and manual monitoring, creating a system that cannot adapt to real-time conditions. Rush hour patterns that existed decades ago drive today's signal sequences, even as work patterns have evolved and traffic flows have shifted. The result is a transportation infrastructure that's perpetually fighting yesterday's problems while today's commuters sit idle at red lights watching empty intersections.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Modern cities deploy thousands of traffic cameras, road sensors, and connected vehicle systems that generate terabytes of data every day. This wealth of information should enable intelligent traffic management, but the sheer volume overwhelms human operators. Traffic management centers monitor hundreds of camera feeds simultaneously, making it impossible to spot developing problems until they've cascaded into major incidents. When accidents occur, detection and response are delayed by minutes or hours, during which time traffic backs up for miles. The data exists to optimize traffic flow and prevent congestion, but without AI, it remains largely untapped potential.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms traffic management by deploying autonomous agents that continuously monitor every intersection, analyze real-time traffic patterns, and optimize signal timing to maximize flow. These intelligent systems don't just react to congestion—they predict it before it forms and take preventive action. AI agents can detect accidents within seconds through video analysis, automatically alert emergency responders, and reroute traffic around incidents. The system coordinates signal timing across multiple intersections to create "green waves" that move traffic efficiently, while giving priority to emergency vehicles and public transit.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cities implementing Agentic AI for traffic management are achieving remarkable improvements: 30% reduction in overall congestion, 25% shorter commute times for residents, and 40% faster emergency response through automatic incident detection and traffic prioritization. These systems operate 24/7, continuously learning from traffic patterns and adapting to changing conditions—whether handling morning rush hour, special events, or severe weather. The result is a smarter, more responsive transportation network that reduces frustration, improves safety, and makes cities more livable while cutting infrastructure costs through predictive maintenance and optimized operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From gridlock to flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI solves critical traffic management challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <challenge.icon className="w-7 h-7 text-[#8B2EE5]" />
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
              Complete traffic automation
            </h2>
            <p className="text-xl text-gray-600">
              Autonomous AI managing citywide traffic systems
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
              Ready for smarter traffic?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading cities reducing congestion with AI-powered traffic management
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