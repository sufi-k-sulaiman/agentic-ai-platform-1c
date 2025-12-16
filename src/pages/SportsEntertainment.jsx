import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, TrendingDown, Database, Workflow, DollarSign, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import VerticalAnalytics from '@/components/VerticalAnalytics';

const challenges = [
  {
    icon: Users,
    title: 'Fan Experience',
    problem: 'Long lines, poor wayfinding, generic experiences, low engagement',
    solution: 'AI personalizes fan journeys, provides smart navigation, instant mobile ordering—boosting satisfaction by 45%'
  },
  {
    icon: DollarSign,
    title: 'Revenue Optimization',
    problem: 'Fixed pricing, missed upsell opportunities, inefficient concessions',
    solution: 'Dynamic pricing, AI-driven recommendations, demand forecasting increase revenue per fan by 30%'
  },
  {
    icon: Database,
    title: 'Fragmented Data',
    problem: 'Tickets, concessions, merchandise, parking—all separate systems with no insights',
    solution: 'Unified AI platform creates complete fan profiles, enabling personalized marketing and experiences'
  },
  {
    icon: Workflow,
    title: 'Operations Chaos',
    problem: 'Manual staffing, slow event setup, reactive incident response',
    solution: 'AI optimizes staffing levels, automates logistics, predicts issues—cutting operational costs by 25%'
  }
];

const solutions = [
  {
    category: 'Fan Experience',
    items: [
      'Agentic Ai concierge for venue navigation and info',
      'Personalized content and offers based on behavior',
      'Mobile ordering with predictive queue optimization',
      'Real-time seat upgrades and experiences'
    ]
  },
  {
    category: 'Revenue & Marketing',
    items: [
      'Dynamic ticket pricing based on demand',
      'Intelligent upsell and cross-sell recommendations',
      'Personalized email campaigns and promotions',
      'Predictive analytics for season ticket retention'
    ]
  },
  {
    category: 'Operations',
    items: [
      'Agentic Ai-powered staffing optimization',
      'Automated inventory management for concessions',
      'Predictive maintenance for venue equipment',
      'Crowd flow analysis and security monitoring'
    ]
  },
  {
    category: 'Sponsorship & Partnerships',
    items: [
      'ROI tracking for sponsor activations',
      'Automated sponsorship fulfillment reporting',
      'Audience insights for partner targeting',
      'Real-time engagement analytics'
    ]
  }
];

const metrics = [
  { value: '45%', label: 'Fan Satisfaction', description: 'Improved experience' },
  { value: '30%', label: 'Revenue Growth', description: 'Per-fan spending' },
  { value: '25%', label: 'Cost Savings', description: 'Operational efficiency' },
  { value: '60%', label: 'Marketing ROI', description: 'Personalized campaigns' }
];

export default function SportsEntertainment() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Sports & Entertainment AI"
        description="AI-powered fan experiences increasing revenue by 30%. Personalized journeys, dynamic pricing, and venue automation. 45% higher fan satisfaction."
        url="/sports-entertainment"
        keywords={['sports AI', 'venue management', 'fan experience', 'event automation', 'ticketing optimization']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Trophy className="w-4 h-4" />
                Sports & Entertainment
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  fan experiences
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform venue operations and delight fans with Agentic Ai that personalizes experiences, optimizes revenue, and cuts costs by 25%.
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
              <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800" alt="Sports Venue" className="rounded-3xl shadow-2xl" />
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
              Sports & Entertainment
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              The sports and entertainment venue industry generates over $30 billion annually in North America alone, operating stadiums, arenas, amphitheaters, and entertainment complexes hosting millions of fans at professional sports events, concerts, conventions, and shows. Venues compete intensely for entertainment dollars and fan loyalty in an experience economy where consumers choose between attending live events, streaming at home, or countless other entertainment options. Revenue comes from multiple streams: ticket sales (40-50%), concessions and merchandise (25-35%), parking and premium experiences (15-20%), and sponsorship activations (10-15%). However, profitability is challenged by high fixed costs—facilities require expensive maintenance regardless of utilization—and event-day operational complexity coordinating security, concessions, cleaning, parking, and guest services for crowds of 20,000-80,000 arriving and departing within narrow windows. Success requires maximizing revenue per fan through pricing optimization, upselling, and superior experiences that justify premium pricing, while controlling costs through operational efficiency and optimized staffing.
            </p>
            <p>
              Venue business models center on creating compelling fan experiences that drive attendance, spending, and repeat visits while efficiently managing event-day operations across dozens of revenue opportunities and operational touchpoints. Revenue optimization happens through dynamic ticket pricing adjusting rates based on demand, opponent quality, and inventory levels; premium seating and hospitality packages offering exclusive experiences at higher margins; and per-capita spending on concessions, merchandise, and parking. Venues with multiple events—hosting both sports and concerts—maximize facility utilization amortizing fixed costs across more revenue opportunities. Sponsorship revenue depends on demonstrating activation effectiveness, requiring data proving impressions, engagement, and sales impact. Successful venues differentiate through superior fan experiences (comfortable seating, great sightlines, short concession lines, easy parking) that justify premium pricing, operational excellence that delivers seamless experiences for tens of thousands, and data-driven marketing that fills seats and drives spending. Technology investments must deliver rapid ROI given that venues operate only during events—systems saving labor or increasing per-capita spending pay back quickly, while overhead not directly improving operations or revenue is difficult to justify.
            </p>
            <p>
              Venue technology infrastructure includes ticketing platforms managing sales, seat allocation, and season ticket accounts; point-of-sale systems processing concessions and merchandise transactions; access control and security systems managing entry, credential verification, and surveillance; parking management systems handling reservations and payments; customer data platforms aggregating fan information across touchpoints; facility management systems coordinating maintenance and operations; digital signage and in-venue apps providing wayfinding and information; and sponsorship analytics tracking activation performance. Modern venues deploy mobile ordering apps enabling fans to order food from seats; WiFi networks supporting tens of thousands of concurrent users; IoT sensors monitoring crowd flow, restroom usage, and equipment health; and CRM systems managing customer communications and loyalty programs. However, systems remain largely disconnected: ticketing data doesn't inform concession staffing forecasts, parking transactions don't integrate with arrival prediction, and customer data across tickets, concessions, and parking exists in separate silos. Recent AI applications include chatbots handling basic fan inquiries and predictive models forecasting attendance, but comprehensive intelligent automation remains rare.
            </p>
            <p>
              Agentic AI creates intelligent venues where autonomous agents optimize every aspect of operations and fan experience. Dynamic pricing agents continuously adjust ticket prices based on real-time demand signals—team performance trends, weather forecasts, opponent quality, inventory levels, and competitive events—maximizing revenue by $8-15 per ticket on average. Fan experience agents deliver personalized journeys: greeting fans by name through mobile apps, suggesting optimal parking and entry based on predicted crowds, recommending concessions and merchandise based on preferences and purchase history, and providing real-time wayfinding to seats, restrooms, and exits. Mobile ordering agents enable food and drink orders from seats, automatically routing to optimal concession stands to minimize wait and delivering just-in-time preparation reducing food waste. Staffing optimization agents forecast attendance and concession demand by location and time, ensuring adequate coverage during peak rushes without overstaffing during gameplay. Predictive maintenance monitors all venue systems scheduling service before failures disrupt events. Sponsorship analytics track every activation touchpoint providing sponsors with detailed ROI including impressions, engagement duration, and sales correlation. Parking agents guide fans to available spaces via mobile app while processing payments automatically through license plate recognition. Customer data unification creates complete fan profiles enabling marketing campaigns targeting likely attendees with personalized offers. Results: 30% revenue per fan increase, 45% satisfaction improvement, 25% cost reduction, 60% marketing ROI boost—venues create memorable experiences driving loyalty while operating profitably at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Venue Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sports and entertainment venues face intense pressure to maximize revenue per event while delivering experiences that justify premium ticket prices: concession stands have long lines causing fans to miss parts of games, yet staffing for peak rushes means idle workers during gameplay. Parking creates bottlenecks before and after events, with manual payment and exit processes causing 45-minute delays that sour the entire experience. Ticket pricing is static—set weeks before events based on historical averages—missing opportunities to maximize revenue on high-demand games while leaving seats empty for less popular matchups. Merchandise sales rely on limited physical inventory at the venue, causing stockouts of popular items while overstocking others. Fan engagement happens through generic mass communications rather than personalized experiences, missing opportunities to build loyalty and drive repeat attendance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Operational inefficiency compounds these revenue challenges: staffing decisions happen manually based on expected attendance, often resulting in understaffing (degrading service) or overstaffing (wasting money). Event setup and breakdown require coordination across security, concessions, cleaning, and technical teams through radio communications and manual checklists. Sponsorship ROI is difficult to measure: sponsors want proof their activations drive engagement, but venues lack data connecting sponsor visibility to fan behavior. Maintenance happens reactively—HVAC systems, lighting, seating, and equipment are repaired after failures rather than before, causing disruptions and emergency costs. Customer data exists across ticketing, concessions, parking, and merchandise systems that don't communicate, preventing venues from understanding fan preferences and spending patterns that could inform better services and marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Venue Revenue & Experience Crisis</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI revolutionizes venue operations through autonomous agents that personalize every fan touchpoint. Dynamic pricing AI continuously adjusts ticket prices based on demand signals—team performance, opponent quality, weather, day of week, and remaining inventory—maximizing revenue by charging premium prices for high-demand games while filling seats for less popular events with attractive pricing. Mobile ordering agents let fans order food and drinks from their seats, predicting wait times and automatically routing orders to optimal concession locations to minimize congestion. Parking optimization AI guides fans to available spaces in real-time while processing payments automatically through license plate recognition, eliminating exit bottlenecks. Personalization engines analyze each fan's attendance history, merchandise purchases, and engagement to deliver customized content, offers, and experiences through mobile apps.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Operations transform through comprehensive automation: staffing optimization AI predicts attendance and concession demand by location and time, ensuring optimal staffing that delivers great service without waste. Event setup AI coordinates all teams through automated checklists and real-time tracking, reducing setup time by 40%. Predictive maintenance monitors all venue systems, scheduling service before failures. Sponsorship analytics track every activation touchpoint, providing sponsors with detailed ROI data showing impression counts, engagement metrics, and sales correlation. Inventory management AI predicts merchandise demand by item and location, ensuring popular sizes and designs are stocked appropriately. The results drive bottom-line impact: 30% revenue per fan increase through dynamic pricing, mobile ordering convenience, and personalized upsells; 45% fan satisfaction improvement from eliminated lines and personalized service; 25% operational cost reduction through optimized staffing and predictive maintenance; 60% marketing ROI improvement from personalized campaigns. Venues create memorable experiences that drive loyalty while operating efficiently at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Dynamic pricing updated', description: '500 tickets repriced for tonight', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:45 AM', action: 'Mobile order completed', description: '150 concession orders processed', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:20 AM', action: 'Parking optimized', description: '2,000 spaces allocated efficiently', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:45 AM', action: 'Fan alert sent', description: 'Gate opening time notified', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'Revenue Per Fan', current: 880, target: 1000, percentage: 88, color: 'bg-purple-500' },
          { goal: 'Fan Satisfaction', current: 920, target: 1000, percentage: 92, color: 'bg-green-500' },
          { goal: 'Operational Efficiency', current: 85, target: 100, percentage: 85, color: 'bg-blue-500' },
          { goal: 'Sponsorship ROI', current: 78, target: 100, percentage: 78, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Record Revenue Night', description: 'Per-fan spending reached $68 average...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Sellout Alert', description: 'All premium seats sold for playoffs...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Concession Optimization', description: 'Wait times reduced to under 5 minutes...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Season Ticket Renewal', description: '92% renewal rate, up 15%...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Venue challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms sports and entertainment operations
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
              Complete venue automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai powering every fan touchpoint
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
              Ready to elevate fan experiences?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join top venues and teams creating unforgettable experiences with Agentic Ai
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