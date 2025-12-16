import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrafficCone, TrendingDown, Database, Workflow, DollarSign, Zap, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import VerticalAnalytics from '@/components/VerticalAnalytics';

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
      <PageMeta 
        title="Traffic Management AI"
        description="AI-powered traffic management reducing congestion by 30%. Smart signal optimization, incident detection, and 40% faster emergency response."
        url="/traffic"
        keywords={['traffic management', 'smart traffic', 'congestion reduction', 'traffic AI', 'signal optimization']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <TrafficCone className="w-4 h-4" />
                Smart Traffic Management
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  traffic optimization
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Deploy Agentic AI that analyzes millions of data points to optimize traffic flow, reduce congestion by 30%, and cut emergency response times by 40%.
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
              Traffic Management
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Traffic management represents a critical challenge for cities worldwide, with congestion costing the U.S. economy $166 billion annually in lost productivity, wasted fuel, and environmental damage—approximately $1,200 per commuter. Urban areas manage thousands of signalized intersections, highway on-ramps, and arterial roads coordinating millions of vehicle movements daily while balancing competing priorities: minimizing delay, reducing emissions, prioritizing emergency vehicles, and accommodating pedestrians and cyclists. Traditional traffic engineering relies on pre-programmed signal timing plans created through manual observation and optimization, updated perhaps annually, and running the same patterns regardless of actual conditions—a 3 AM traffic signal runs the same cycle as 5 PM rush hour. The result is systematic inefficiency: vehicles idling at red lights when cross-traffic doesn't exist, poor coordination causing stop-and-go waves that waste fuel and create congestion, and emergency vehicles stuck in traffic because signals can't detect approaching ambulances or fire trucks.
            </p>
            <p>
              Traffic management business models are primarily public sector operations funded through transportation budgets, with costs including signal infrastructure installation and maintenance, traffic management center operations, staff salaries for engineers and operators, and technology systems. Some jurisdictions generate revenue through red-light cameras, parking enforcement, and tolling systems, though these are controversial and politically sensitive. The economic case for investment comes not from direct revenue but from economic impact: reducing congestion generates massive value through productivity gains (less time in traffic), fuel savings, emission reductions, and improved quality of life attracting businesses and residents. Infrastructure projects like adding lanes cost $5-15 million per mile and take years, while intelligent traffic management systems costing $50,000-200,000 per intersection deliver immediate improvements without construction. The challenge is justifying upfront technology investments to budget-constrained transportation departments competing with roads, bridges, and public transit for limited funds, despite strong ROI from congestion reduction and efficiency gains.
            </p>
            <p>
              Traffic technology infrastructure consists of adaptive traffic signal controllers at intersections communicating with central management systems; sensors including inductive loops detecting vehicles, radar measuring speeds, and cameras providing visual monitoring; variable message signs displaying real-time information about conditions and delays; traffic management software aggregating data and enabling operator control; and incident detection systems identifying accidents or breakdowns. Modern deployments include connected vehicle technology enabling cars to communicate with infrastructure, traffic prediction models forecasting congestion based on historical patterns and current conditions, and transit signal priority giving buses and trains preferential treatment. Cloud-based platforms now aggregate data from multiple sources—government traffic sensors, GPS data from navigation apps, connected vehicle telemetry—creating comprehensive pictures of traffic conditions. However, most systems remain reactive: operators watch monitors and manually adjust signal timing after congestion develops rather than predicting and preventing it. AI applications emerging include machine learning models predicting congestion and adaptive algorithms adjusting signals based on detected traffic, though deployment is limited to pilot programs in leading cities.
            </p>
            <p>
              Agentic AI creates intelligent traffic management where autonomous agents continuously optimize traffic flow across entire networks in real-time. Signal optimization agents analyze traffic patterns, pedestrian activity, transit schedules, and weather conditions to dynamically adjust timing at every intersection millisecond-by-millisecond—coordinating signal progressions across corridors to create "green waves" minimizing stops, giving priority to high-volume directions during peak periods, and optimizing for throughput, emissions, or other objectives. Incident detection agents analyze camera feeds, sensor data, and connected vehicle reports to identify accidents, breakdowns, or congestion within seconds, automatically triggering response protocols: alerting emergency services with precise locations, adjusting upstream signals to prevent queue spillover, activating message signs warning drivers and suggesting alternate routes, and coordinating with navigation apps to reroute traffic. Predictive agents forecast congestion before it develops using machine learning models trained on years of patterns, weather impacts, and special events, then proactively adjust signal timing and coordinate with transit agencies to add supplemental service. Emergency vehicle priority agents detect approaching ambulances and fire trucks through GPS and sirens, automatically adjusting signals ahead to create clear paths. The transformation is dramatic: 30% reduction in average travel times, 25% decrease in emissions from reduced idling, 60% faster emergency response, and traffic management centers monitoring thousands of intersections efficiently with AI handling moment-to-moment optimization while humans focus on strategy and infrastructure planning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white d-none">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Traffic Congestion Crisis</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Traffic congestion costs the U.S. economy $166 billion annually—$1,200 per commuter in wasted time and fuel—while traditional traffic management watches helplessly. Traffic signals operate on pre-programmed timing sequences created decades ago, running the same patterns whether it's 3 AM with empty roads or 5 PM gridlock. Intersection timing is optimized in isolation without coordination, causing inefficient "stop and go" patterns where drivers hit red lights consecutively. When accidents occur, detection relies on drivers calling 911 or traffic cameras that human operators may not be monitoring at that moment—meaning precious minutes elapse before emergency responders are dispatched and traffic can be rerouted. Construction zones and special events create predictable congestion, yet traffic management cannot dynamically adjust signal timing to compensate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Infrastructure monitoring faces impossible scale challenges: traffic management centers have walls of camera feeds showing hundreds of intersections, far more than operators can watch simultaneously. Road sensors detect traffic volumes and speeds, but this data sits in dashboards rather than driving automatic optimization. When problems develop—accidents, breakdowns, congestion forming—detection is slow and response is manual: operators must identify the issue, assess severity, decide on interventions, manually adjust signals, and update message boards. Emergency vehicles get stuck in traffic because signal systems can't detect approaching ambulances or fire trucks. Maintenance of traffic signals, cameras, and sensors happens on fixed schedules, causing both premature service and unexpected failures. Long-term planning relies on annual traffic studies rather than continuous analysis of actual patterns, meaning infrastructure improvements address yesterday's problems rather than tomorrow's needs.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">AI-Powered Traffic Optimization</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms traffic management through autonomous agents that continuously optimize signal timing across entire networks in real-time. Traffic flow AI analyzes live data from thousands of sensors, cameras, and connected vehicles to understand current conditions and predict near-term demand, adjusting signal sequences millisecond by millisecond to maximize throughput. Multi-intersection coordination creates "green waves" where drivers catch consecutive green lights along major corridors during rush hour, while adaptive timing prevents congestion formation by giving more green time to backed-up directions. Emergency vehicle preemption agents detect approaching ambulances and fire trucks through GPS and automatically create "green corridors" by adjusting signals ahead of their path, reducing emergency response times by 40%. Incident detection AI analyzes camera feeds continuously using computer vision to identify accidents, disabled vehicles, or debris within 15 seconds of occurrence—automatically alerting responders and initiating traffic management responses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The transformation extends beyond intersections: work zone management AI automatically adjusts signal timing around construction, reducing bottlenecks by 35%. Special event agents predict traffic impacts and preemptively adjust signal patterns citywide. Predictive analytics identify infrastructure needs, guiding investments toward locations where improvements will have maximum impact. Real-time traffic data feeds navigation apps, helping drivers avoid congestion before it forms. The results are transformative: 30% overall congestion reduction saves commuters 15 hours annually while reducing fuel waste and emissions. Commute times decrease 25% through coordinated optimization. Emergency response improves 40% through instant detection and automated traffic prioritization. Infrastructure maintenance costs drop 35% through predictive service scheduling. Cities gain responsive, intelligent transportation networks that adapt to conditions continuously, making urban areas more livable, sustainable, and economically productive while handling growing populations without proportional infrastructure expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Traffic Congestion Crisis</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Traffic congestion costs the U.S. economy $166 billion annually—$1,200 per commuter in wasted time and fuel—while traditional traffic management watches helplessly. Traffic signals operate on pre-programmed timing sequences created decades ago, running the same patterns whether it's 3 AM with empty roads or 5 PM gridlock. Intersection timing is optimized in isolation without coordination, causing inefficient "stop and go" patterns where drivers hit red lights consecutively. When accidents occur, detection relies on drivers calling 911 or traffic cameras that human operators may not be monitoring at that moment—meaning precious minutes elapse before emergency responders are dispatched and traffic can be rerouted. Construction zones and special events create predictable congestion, yet traffic management cannot dynamically adjust signal timing to compensate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Infrastructure monitoring faces impossible scale challenges: traffic management centers have walls of camera feeds showing hundreds of intersections, far more than operators can watch simultaneously. Road sensors detect traffic volumes and speeds, but this data sits in dashboards rather than driving automatic optimization. When problems develop—accidents, breakdowns, congestion forming—detection is slow and response is manual: operators must identify the issue, assess severity, decide on interventions, manually adjust signals, and update message boards. Emergency vehicles get stuck in traffic because signal systems can't detect approaching ambulances or fire trucks. Maintenance of traffic signals, cameras, and sensors happens on fixed schedules, causing both premature service and unexpected failures. Long-term planning relies on annual traffic studies rather than continuous analysis of actual patterns, meaning infrastructure improvements address yesterday's problems rather than tomorrow's needs.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">AI-Powered Traffic Optimization</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms traffic management through autonomous agents that continuously optimize signal timing across entire networks in real-time. Traffic flow AI analyzes live data from thousands of sensors, cameras, and connected vehicles to understand current conditions and predict near-term demand, adjusting signal sequences millisecond by millisecond to maximize throughput. Multi-intersection coordination creates "green waves" where drivers catch consecutive green lights along major corridors during rush hour, while adaptive timing prevents congestion formation by giving more green time to backed-up directions. Emergency vehicle preemption agents detect approaching ambulances and fire trucks through GPS and automatically create "green corridors" by adjusting signals ahead of their path, reducing emergency response times by 40%. Incident detection AI analyzes camera feeds continuously using computer vision to identify accidents, disabled vehicles, or debris within 15 seconds of occurrence—automatically alerting responders and initiating traffic management responses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The transformation extends beyond intersections: work zone management AI automatically adjusts signal timing around construction, reducing bottlenecks by 35%. Special event agents predict traffic impacts and preemptively adjust signal patterns citywide. Predictive analytics identify infrastructure needs, guiding investments toward locations where improvements will have maximum impact. Real-time traffic data feeds navigation apps, helping drivers avoid congestion before it forms. The results are transformative: 30% overall congestion reduction saves commuters 15 hours annually while reducing fuel waste and emissions. Commute times decrease 25% through coordinated optimization. Emergency response improves 40% through instant detection and automated traffic prioritization. Infrastructure maintenance costs drop 35% through predictive service scheduling. Cities gain responsive, intelligent transportation networks that adapt to conditions continuously, making urban areas more livable, sustainable, and economically productive while handling growing populations without proportional infrastructure expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Congestion detected', description: 'Main St bottleneck identified', icon: 'AlertCircle', color: 'text-orange-500' },
          { time: '10:31 AM', action: 'Signal timing adjusted', description: '5 intersections optimized', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:35 AM', action: 'Traffic flow improved', description: '30% congestion reduction', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:40 AM', action: 'Incident cleared', description: 'Emergency route restored', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'Congestion Reduction', current: 720, target: 1000, percentage: 72, color: 'bg-purple-500' },
          { goal: 'Response Time', current: 880, target: 1000, percentage: 88, color: 'bg-green-500' },
          { goal: 'Signal Optimization', current: 85, target: 100, percentage: 85, color: 'bg-blue-500' },
          { goal: 'Incident Detection', current: 92, target: 100, percentage: 92, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Commute Time Reduced', description: 'Average travel time down 8 minutes...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Signal Optimization', description: '15 intersections updated automatically...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Accident Detected', description: 'Highway 101 incident, rerouting traffic...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Rush Hour Prediction', description: 'Heavy volume expected at 5 PM...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      <section className="py-24 bg-gray-50">
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
              Ready for smarter traffic?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading cities reducing congestion with AI-powered traffic management
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