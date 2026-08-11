import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, TrendingDown, Database, Workflow, DollarSign, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VerticalAnalytics from '@/components/VerticalAnalytics';
import FeatureDetailSection from '@/components/FeatureDetailSection';
import { featureDetails } from '@/lib/featureDetails';
import InternalLinker from '@/components/seo/InternalLinker';
import FAQSection from '@/components/seo/FAQSection';
import { getFAQs } from '@/lib/seoFAQs';

const challenges = [
  {
    icon: DollarSign,
    title: 'Facility Costs',
    problem: 'Inefficient space utilization with 40% of desks unoccupied daily costs thousands per month in wasted real estate. Energy waste from HVAC systems running 24/7 regardless of actual occupancy adds 35% to utility bills. Manual facility management requires extensive staff time for routine tasks like room booking conflicts, visitor coordination, and maintenance tracking. Poor visibility into space usage prevents data-driven decisions about real estate optimization and hybrid work policies.',
    solution: 'AI optimizes space allocation by analyzing occupancy patterns, automatically suggesting desk and meeting room configurations that maximize utilization. Smart building automation adjusts HVAC, lighting, and other systems based on real-time occupancy and scheduled events, reducing energy consumption by 30%. Predictive maintenance monitors all building equipment—elevators, HVAC, electrical, plumbing—identifying issues before they become costly failures. Automated space planning tools help facilities teams make informed decisions about expansions, consolidations, and renovations, reducing overall facility costs by 30%.'
  },
  {
    icon: Database,
    title: 'Disparate Systems',
    problem: 'Access control, room booking, visitor management, facilities maintenance, parking, catering, and IT support systems all operate independently with no data sharing. Employees must use 5-8 different apps for basic workplace needs, creating frustration and inefficiency. Security teams lack integrated visibility across physical access, video surveillance, and incident reports. Facilities managers cannot correlate maintenance issues with environmental conditions or usage patterns because data lives in separate silos.',
    solution: 'Unified AI platform connects all workplace systems through a single integration layer, enabling seamless data flow and coordinated operations. Employees access all services through one interface—book rooms, order food, report issues, reserve parking—with AI handling the complexity behind the scenes. Cross-system analytics provide unprecedented insights: correlating meeting room usage with HVAC performance, identifying security patterns across access logs and camera feeds, optimizing cleaning schedules based on actual space utilization. Comprehensive reporting gives leadership complete visibility into campus operations and employee experience metrics.'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Desk reservations require manual approval and coordination, creating bottlenecks for hybrid workers. Visitor check-ins involve paper forms, temporary badge printing, and manual host notification—taking 10-15 minutes per visitor. Maintenance requests go through email or phone calls, requiring manual assessment, vendor coordination, and follow-up tracking. Service delivery is reactive rather than proactive, with issues only addressed after complaints arise.',
    solution: 'Autonomous agents handle all booking workflows automatically—desks, rooms, parking spots—with intelligent conflict resolution and optimization. Visitors pre-register online, receive QR codes for contactless check-in, and badges are automatically printed while hosts get instant notifications. Smart maintenance systems automatically detect issues through IoT sensors, create work orders, dispatch appropriate vendors, and track completion without human intervention. AI predicts service needs before problems occur, scheduling preventive actions during low-traffic periods to minimize disruption.'
  },
  {
    icon: Users,
    title: 'Employee Experience',
    problem: 'Poor wayfinding leaves visitors and new employees lost in large campuses, creating negative first impressions. Difficult room booking processes with unclear availability and competing calendar systems cause meeting disruptions and wasted time. Slow service response times—average 48 hours for facilities requests—frustrate employees and reduce productivity. Lack of personalized services means every employee gets the same generic experience regardless of role, preferences, or needs.',
    solution: 'AI concierge provides instant support via chat, voice, or mobile app—answering questions, providing directions with indoor navigation, booking resources, and resolving issues 24/7. Smart navigation integrates with building maps and real-time sensor data to guide people efficiently around campus, avoiding crowded areas and suggesting optimal routes. Proactive service anticipates needs: AI detects when meeting rooms need supplies, temperature adjustments, or technical support before attendees realize there\'s a problem. Personalization engines learn individual preferences and proactively suggest services, optimize commute planning, and customize workspace settings, boosting satisfaction by 40%.'
  }
];

const solutions = [
  {
    category: 'Space Management',
    items: [
      'Real-time desk and room availability tracking with occupancy sensors and booking integration',
      'Automated space optimization based on utilization patterns and team collaboration needs',
      'Hot-desking and hybrid work coordination with preference learning and smart assignment',
      'Meeting room analytics identifying underutilized spaces and recommending consolidation',
      'Space forecasting predicting future needs based on growth plans and utilization trends',
      'Automated floor plan optimization suggesting reconfigurations for maximum efficiency'
    ]
  },
  {
    category: 'Operations & Maintenance',
    items: [
      'Predictive maintenance for HVAC, elevators, electrical, and plumbing systems',
      'Automated work order creation and vendor dispatch with priority routing and SLA tracking',
      'Energy optimization across campus facilities through AI-powered building automation',
      'Cleaning and janitorial scheduling automation based on actual usage patterns',
      'Inventory management for supplies, equipment, and consumables with automatic reordering',
      'Contractor performance tracking with automated quality scoring and feedback collection'
    ]
  },
  {
    category: 'Security & Access',
    items: [
      'Smart badge access with visitor management, temporary credentials, and automatic expiration',
      'AI-powered security monitoring analyzing video feeds for suspicious behavior and safety hazards',
      'Automated parking management and allocation with license plate recognition and payment',
      'Emergency response coordination with automated alerts, evacuation guidance, and roll call',
      'Access pattern analysis detecting anomalies and potential security risks',
      'Integrated incident management coordinating security, facilities, and emergency services'
    ]
  },
  {
    category: 'Employee Services',
    items: [
      '24/7 AI concierge for campus inquiries, directions, services, and problem resolution',
      'Automated catering and event coordination with vendor management and dietary preferences',
      'Wayfinding and indoor navigation assistance with real-time crowd avoidance',
      'Service request tracking and fulfillment with automated status updates and satisfaction surveys',
      'Personalized workspace settings with temperature, lighting, and desk height preferences',
      'Transportation coordination for shuttles, carpools, and ride-sharing with optimization'
    ]
  }
];

const metrics = [
  { value: '30%', label: 'Cost Savings', description: 'Facility operating expenses' },
  { value: '40%', label: 'Space Utilization', description: 'Improved efficiency' },
  { value: '60%', label: 'Faster Service', description: 'Automated workflows' },
  { value: '24/7', label: 'AI Support', description: 'Always available' }
];

export default function CorporateCampuses() {
  return (
        <InternalLinker currentPage="CorporateCampuses">
    <div className="bg-white">
      <PageMeta 
        title="Corporate Campus AI"
        description="AI-powered workplace management for corporate campuses. 30% cost savings, 40% better space utilization, 24/7 automated services."
        url="/corporate-campuses"
        keywords={['corporate campus', 'workplace automation', 'space management', 'facility optimization', 'employee experience']}
        image="https://images.unsplash.com/photo-1522202172294-6940c44f7c74?w=1200&h=630&fit=crop"
        service={{ type: 'Corporate Campus AI', areaServed: 'Worldwide' }}
        localBusiness={{ name: '1C Platform - Corporate Campus AI', telephone: '+1-800-1C-CORP' }}
      
        faq={[{"question":"How does AI optimize corporate facility management?","answer":"Agents automate space management, visitor coordination, energy optimization, and employee services. The platform optimizes space utilization by 40% while reducing costs by 30%."},{"question":"Can it integrate with your workplace tools?","answer":"Yes. We connect to Microsoft 365, Google Workspace, ServiceNow, and IoT sensors. Agents coordinate building access, schedule maintenance, and manage employee requests automatically."},{"question":"What efficiency gains can I expect?","answer":"Corporate campuses typically see 40% space optimization, 30% cost reduction, and 60% employee satisfaction improvement when deploying agentic AI."}]}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Industries', url: '/Blog' }, { name: 'CorporateCampuses', url: '/CorporateCampuses' }]}
      />
      <BreadcrumbNav items={[{ label: 'Home', page: 'Home' }, { label: 'Corporate Campuses' }]} />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Building className="w-4 h-4" />
                Corporate Campuses
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  workplace management
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform corporate campuses with Agentic Ai that intelligently manages space, enhances security, automates services, and optimizes operations—cutting facility costs by 30% while creating exceptional employee experiences that boost productivity and satisfaction.
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
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" alt="Corporate Campus" className="rounded-3xl shadow-2xl" />
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
              Corporate Campuses
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Corporate campuses represent significant real estate investments for large organizations, with Fortune 500 companies operating facilities ranging from 100,000 to over 5 million square feet housing thousands of employees. These environments function as mini-cities requiring coordination of facilities management, security, food services, transportation, technology infrastructure, and employee experience programs. The hybrid work revolution fundamentally disrupted campus economics: pre-pandemic occupancy rates of 80-90% plummeted to 30-50%, yet fixed costs for real estate, utilities, and base-level maintenance continue regardless of actual usage. Companies now face difficult decisions about real estate footprints—maintaining excess capacity wastes millions annually, but premature downsizing risks capacity shortages when workers return. Successful campus management balances cost efficiency with employee experience, recognizing that workplace quality directly impacts talent recruitment, retention, and productivity worth far more than facility operating costs.
            </p>
            <p>
              Corporate campus business models treat facilities as cost centers rather than revenue generators, with success measured by cost per square foot, employee satisfaction scores, and space utilization rates. Facilities departments typically operate on budgets of $8-15 per square foot annually covering maintenance, utilities, security, and services—representing $800K-$1.5M per 100,000 square feet. Hybrid work creates opportunities to reduce real estate footprints by 20-40% through hoteling and flexible space arrangements, potentially saving millions while improving space efficiency. However, realizing these savings requires sophisticated space management understanding actual utilization patterns, employee preferences, and collaboration requirements. Leading companies view campuses strategically as employee experience differentiators—investing in amenities, technology, and services that attract talent—while ruthlessly optimizing operational efficiency. The key challenge: maintaining world-class workplace experiences that justify commuting while reducing costs through smarter space allocation, energy management, and service delivery.
            </p>
            <p>
              Modern campus technology stacks integrate building management systems controlling HVAC, lighting, and energy; access control systems managing badges, visitor registration, and security; space reservation platforms for desks, conference rooms, and parking; facilities management software tracking maintenance, work orders, and vendor relationships; employee experience apps aggregating services from food ordering to transportation; IoT sensor networks monitoring occupancy, environmental conditions, and equipment health; and video surveillance systems providing security monitoring. These systems typically operate independently with limited integration: badge access data doesn't inform HVAC scheduling, conference room bookings don't optimize cleaning schedules, and facilities teams lack unified dashboards showing real-time campus operations. Recent innovations include occupancy sensors providing utilization analytics, smart lighting and HVAC adjusting to actual presence, touchless access and services reducing friction, indoor navigation helping people find destinations, and predictive maintenance monitoring equipment health. Cloud-based integration platforms now enable data sharing between previously siloed systems, creating foundations for intelligent automation.
            </p>
            <p>
              Agentic AI creates truly intelligent campuses where autonomous agents orchestrate every aspect of workplace operations seamlessly. Occupancy agents analyze badge data, calendar bookings, and historical patterns to predict space needs and automatically optimize building operations—activating HVAC, lighting, and services only for occupied areas while maintaining comfort. Space optimization agents continuously analyze utilization patterns to recommend reconfigurations maximizing efficiency, identifying underused conference rooms for conversion to collaboration spaces or suggesting floor consolidations reducing real estate costs 30-40%. Predictive maintenance agents monitor all equipment—elevators, HVAC, electrical, plumbing—through IoT sensors, detecting anomalies weeks before failures and automatically scheduling service during optimal windows to prevent disruptions. Employee experience agents provide 24/7 support via chat or voice for any campus need—booking resources, reporting issues, requesting services, finding locations—with AI handling complexity behind a simple interface. Visitor management agents handle registration, badge printing, host notifications, and wayfinding automatically. Energy optimization agents reduce consumption 30% by continuously adjusting systems based on actual occupancy, weather, and utility rates. The result: campuses that delight employees with seamless, personalized experiences while operating at unprecedented efficiency, freeing facilities teams to focus on strategic initiatives rather than daily operational firefighting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Corporate Campus Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Corporate campuses have become operational nightmares in the hybrid work era: conference rooms sit empty while employees scramble to find meeting space, yet companies still pay full rent and utilities for these underutilized facilities. Facilities teams manually schedule maintenance across dozens of buildings, often performing preventive service on fixed calendars rather than actual equipment condition—resulting in both wasteful premature maintenance and unexpected failures. HVAC systems run 24/7 heating or cooling empty floors, wasting 30% of energy costs, yet adjusting schedules manually for fluctuating occupancy patterns is impractical. Security requires badge readers, camera monitoring, and visitor check-ins coordinated across fragmented systems, creating both security gaps and friction for employees and guests.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Employee experience suffers from operational fragmentation: workers can't easily book desks or conference rooms, submit maintenance requests through email or phone calls that often get lost, and navigate campuses without wayfinding tools or parking guidance. Visitor management involves manual check-ins, printing badges, and calling hosts—creating poor first impressions while consuming reception staff time. Facilities data exists in separate building management systems, space reservation platforms, badge access databases, and maintenance ticketing systems that don't communicate—preventing facilities managers from understanding actual space utilization, energy consumption patterns, or equipment health. Strategic decisions about real estate optimization, sustainability initiatives, and workplace experience improvements happen based on gut feel rather than data-driven insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Campus Complexity</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI creates truly intelligent campuses where autonomous agents orchestrate every aspect of the workplace experience. Occupancy AI analyzes badge swipes, calendar data, and historical patterns to predict space needs and automatically adjust building systems: HVAC, lighting, and ventilation activate only for occupied areas, following employees throughout the day. Space optimization agents analyze actual room utilization to identify underused conference rooms and suggest reconfigurations, enabling 40% reductions in real estate footprint. Predictive maintenance AI monitors equipment health through IoT sensors, scheduling service before failures occur and eliminating 85% of reactive repairs. Visitor management agents handle registration, badge printing, host notifications, and wayfinding automatically—creating seamless experiences while maintaining security.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Employee experience transforms through AI-powered services: intelligent assistants let workers book desks and conference rooms via voice, chat, or mobile app with instant confirmation and automatic calendar integration. Maintenance issues get reported through photos or voice description, with AI automatically categorizing problems, assessing urgency, dispatching appropriate technicians, and tracking resolution. Parking agents guide employees to available spaces in real-time while coordinating electric vehicle charging. Campus navigation AI provides indoor wayfinding and optimal routes between buildings. Energy costs drop 30% through continuous optimization of HVAC, lighting, and equipment based on actual occupancy rather than fixed schedules. Facilities teams gain unified dashboards showing real-time occupancy, equipment health, and energy consumption, enabling data-driven decisions about space planning, sustainability initiatives, and infrastructure investments. The result is a responsive, efficient workplace that delights employees while significantly reducing operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Space optimized', description: '5 meeting rooms reallocated', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:45 AM', action: 'Visitor checked in', description: '12 guests processed automatically', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:20 AM', action: 'Energy reduced', description: 'HVAC optimized in 3 buildings', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:45 AM', action: 'Maintenance scheduled', description: 'Elevator service planned', icon: 'AlertCircle', color: 'text-orange-500' }
        ],
        goalsProgress: [
          { goal: 'Space Utilization', current: 820, target: 1000, percentage: 82, color: 'bg-purple-500' },
          { goal: 'Cost Reduction', current: 750, target: 1000, percentage: 75, color: 'bg-green-500' },
          { goal: 'Employee Satisfaction', current: 88, target: 100, percentage: 88, color: 'bg-blue-500' },
          { goal: 'Energy Efficiency', current: 92, target: 100, percentage: 92, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Real Estate Savings', description: 'Space consolidation saved $120K...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Service Improvement', description: 'Average request time down to 4 hours...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Desk Booking', description: '95% utilization achieved this week...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Security Update', description: 'Badge access anomaly detected...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Campus challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms corporate campus operations, from space optimization to employee experience. Discover how Fortune 500 companies are revolutionizing workplace management.
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
                        <challenge.icon className="w-7 h-7 text-[#6209e6]" />
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
              Complete campus automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of your workplace, from space utilization to employee services, creating a seamlessly integrated campus experience.
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
              Ready to transform your campus?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join Fortune 500 companies creating world-class workplace experiences while optimizing costs with Agentic Ai. Transform your corporate campus into an intelligent, efficient, employee-centric environment.
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
      
      <FeatureDetailSection {...featureDetails.CorporateCampuses} />
      <FAQSection faqs={getFAQs('CorporateCampuses')} />
<RelatedContent currentPage="CorporateCampuses" category="industry" crossCategories={['product']} title="Explore Related Solutions" />
    </div>
    </InternalLinker>
  );
}