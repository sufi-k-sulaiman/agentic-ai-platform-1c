import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, TrendingDown, Database, Workflow, DollarSign, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import IndustryIntro from '@/components/seo/IndustryIntro';
import VerticalAnalytics from '@/components/VerticalAnalytics';
import FeatureDetailSection from '@/components/FeatureDetailSection';
import { featureDetails } from '@/lib/featureDetails';
import InternalLinker from '@/components/seo/InternalLinker';
import FAQSection from '@/components/seo/FAQSection';
import { getFAQs } from '@/lib/seoFAQs';

const challenges = [
  {
    icon: DollarSign,
    title: 'Operating Expenses',
    problem: 'Manual maintenance scheduling leads to reactive repairs that cost 3-5x more than preventive maintenance. Energy waste from inefficient HVAC systems and lighting can account for 30% of operating expenses. Inefficient staffing patterns result in overtime costs and service gaps during peak demand periods. Property managers spend 60% of their time on administrative tasks instead of strategic planning and tenant relationships.',
    solution: 'AI predicts equipment failures weeks in advance by analyzing sensor data, reducing emergency repairs by 85%. Smart algorithms optimize energy usage across all building systems, automatically adjusting HVAC, lighting, and other utilities based on occupancy patterns and weather forecasts. Machine learning models forecast maintenance needs and automatically schedule preventive service, reducing overall operational costs by 40% while extending equipment lifespan by 25%.'
  },
  {
    icon: Database,
    title: 'Data Silos',
    problem: 'Tenant information scattered across multiple platforms including CRM, accounting software, and maintenance systems creates incomplete visibility. Financial records exist in separate systems from operational data, making accurate forecasting impossible. Maintenance logs are often paper-based or in disconnected digital systems, preventing pattern analysis. This fragmentation leads to duplicate data entry, errors, and missed opportunities for optimization.',
    solution: 'Unified AI platform aggregates data from all systems in real-time, creating a single source of truth accessible from any device. Advanced analytics automatically identify trends, anomalies, and opportunities across operations, finance, and tenant management. Automated reporting eliminates manual data compilation, generating comprehensive insights into property performance, tenant satisfaction, and financial health. Integration with IoT sensors provides live building performance metrics.'
  },
  {
    icon: Workflow,
    title: 'Manual Workflows',
    problem: 'Lease processing takes 3-7 days with multiple manual review steps, creating bottlenecks during busy seasons. Work order management involves phone calls, emails, and manual dispatching, leading to delayed responses and tenant frustration. Tenant onboarding requires extensive paperwork and multiple in-person meetings, consuming staff time and creating poor first impressions. Rent collection follows manual processes with individual follow-ups for late payments.',
    solution: 'Agentic AI handles entire workflows autonomously—from lease document generation and approval routing to automatic tenant screening and digital signature collection. Smart work order systems automatically categorize requests, assess urgency, dispatch the right vendor, and track completion without human intervention. Automated lease renewals proactively engage tenants 90 days before expiration with personalized offers based on payment history and market conditions, increasing retention by 35%.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Sales',
    problem: 'Low occupancy rates during seasonal downturns impact revenue by 15-20%. Ineffective lead management means 40% of inquiries never receive follow-up. Manual touring schedules limit availability to business hours only, missing 60% of potential renters who prefer evenings or weekends. Generic marketing campaigns fail to target ideal tenant profiles, wasting 70% of advertising spend.',
    solution: 'AI qualifies leads instantly using predictive scoring based on credit, income, and behavioral patterns, prioritizing high-probability prospects. Automated virtual tour scheduling and self-guided tours with smart lock access enable 24/7 viewing availability, increasing tour-to-lease conversion by 40%. Personalized marketing campaigns leverage machine learning to target specific demographics across social media, email, and listing sites, reducing cost-per-lease by 50% while increasing occupancy by 25%.'
  }
];

const solutions = [
  {
    category: 'Finance & Operations',
    items: [
      'Automated rent collection with smart payment reminders and flexible payment plans',
      'Predictive budgeting based on historical data patterns and market trends',
      'Real-time P&L statements and cash flow forecasting with variance alerts',
      'Dynamic pricing optimization for vacant units based on market conditions and demand',
      'Automated expense categorization and vendor payment processing',
      'Lease accounting automation ensuring compliance with ASC 842 standards'
    ]
  },
  {
    category: 'Maintenance & Workflows',
    items: [
      'AI-powered preventive maintenance scheduling using predictive analytics',
      'Automated work order creation and vendor dispatch with priority routing',
      'Equipment failure prediction with IoT integration for critical systems',
      'Smart energy management reducing utility costs through demand optimization',
      'Inventory management for maintenance supplies with automatic reordering',
      'Contractor performance tracking and automated quality scoring'
    ]
  },
  {
    category: 'Tenant Experience',
    items: [
      '24/7 AI concierge for tenant inquiries and requests via chat, SMS, or voice',
      'Automated lease renewals with personalized offers and one-click acceptance',
      'Self-service tenant portal with instant support and community features',
      'Proactive issue resolution before complaints arise using sentiment analysis',
      'Digital payments with multiple options and automated receipt generation',
      'Move-in/move-out automation with inspection scheduling and security deposit processing'
    ]
  },
  {
    category: 'Sales & Marketing',
    items: [
      'Intelligent lead qualification and nurturing with automated follow-up sequences',
      'Automated virtual tours and scheduling with calendar integration',
      'Personalized email campaigns based on preferences and browsing behavior',
      'Market analysis for competitive pricing strategies with real-time adjustments',
      'Social media management with AI-generated content and response automation',
      'Reputation management monitoring reviews across all platforms with automated responses'
    ]
  }
];

const metrics = [
  { value: '40%', label: 'Cost Reduction', description: 'Lower operational expenses' },
  { value: '25%', label: 'Higher Occupancy', description: 'Improved tenant acquisition' },
  { value: '60%', label: 'Time Saved', description: 'Automated workflows' },
  { value: '99.9%', label: 'Response Rate', description: '24/7 AI availability' }
];

export default function PropertyManagement() {
  return (
        <InternalLinker currentPage="PropertyManagement">
    <div className="bg-white">
      <PageMeta 
        title="Property Management AI"
        description="AI-powered property management reducing costs by 40%. Automated maintenance, tenant services, and operations. 99.9% response rate, 24/7 availability."
        url="/property-management"
        keywords={['property management AI', 'smart buildings', 'automated maintenance', 'tenant management', 'facilities automation']}
        image="https://images.unsplash.com/photo-1560510525667-88b934b2c3c5?w=1200&h=630&fit=crop"
        service={{ type: 'Property Management AI', areaServed: 'Worldwide' }}
        localBusiness={{ name: '1C Platform - Property AI', telephone: '+1-800-1C-PROPERTY' }}
      
        faq={[{"question":"How does AI automate property management?","answer":"1C Platform uses autonomous AI agents to handle maintenance scheduling, tenant onboarding, rent collection, and lease renewals. Agents read sensor data to predict equipment failures, route work orders automatically, and draft communications without manual input."},{"question":"Can it integrate with your existing property management software?","answer":"Yes. We integrate with Salesforce, Microsoft 365, Google Workspace, and 500+ other tools. Use our SDK or REST API to connect any PM system, accounting tool, or IoT sensor network."},{"question":"What savings can I expect?","answer":"Property management teams typically see 40% cost reduction, 60% efficiency improvement, and 45% tenant satisfaction increase when deploying agentic AI for maintenance, communications, and operations."}]}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Industries', url: '/Blog' }, { name: 'PropertyManagement', url: '/PropertyManagement' }]}
      />
      <BreadcrumbNav items={[{ label: 'Home', page: 'Home' }, { label: 'Property Management' }]} />
      <IndustryIntro currentPage="PropertyManagement" heading="Property Management, Reinvented with Agentic AI">
        Property management teams handle maintenance, tenant onboarding, and rent collection across hundreds of units — tasks that eat 60% of staff time. With agentic AI on 1C Platform, these workflows run autonomously: agents read sensor data to predict equipment failures, route work orders to the right vendor, and draft lease renewals without manual input. Because every action flows back into your enterprise suite and CRM, you get a single source of truth across operations and finance. Start with our ROI calculator to model your savings, then connect existing tools through our developer tools and API.
      </IndustryIntro>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                Property Management
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic Ai for
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  smarter properties
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Deploy autonomous Agentic Ai that manages maintenance, tenant services, finances, and operations—cutting costs by 40% while improving tenant satisfaction. Transform your property management with intelligent automation that works 24/7, predicts problems before they occur, and delivers exceptional experiences at scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#6209e6] hover:bg-[#5008c5] rounded-full px-8 h-14">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                    Savings calculator
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" alt="Smart Building" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
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
              Property Management
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              The property management industry represents a $90 billion market in the United States alone, encompassing residential, commercial, and mixed-use properties. Property managers oversee everything from single-family homes to massive multi-unit complexes, acting as intermediaries between property owners and tenants while handling maintenance, financial management, and regulatory compliance. The industry operates on tight margins—typically 8-12% management fees on rental income—meaning efficiency directly impacts profitability. Successful property management requires balancing tenant satisfaction with cost control, maintaining properties to preserve asset value while maximizing net operating income (NOI) for owners. As portfolios grow, complexity increases exponentially: a manager with 500 units must track 500 leases, coordinate thousands of maintenance requests annually, process rent from hundreds of tenants, and maintain relationships with dozens of vendors.
            </p>
            <p>
              Business models in property management center on recurring revenue from management fees, typically charged as a percentage of collected rent (8-12%) plus additional fees for leasing new tenants (50-100% of first month's rent), maintenance coordination, and specialized services. Larger property management companies achieve economies of scale by standardizing processes across portfolios, negotiating vendor contracts centrally, and leveraging technology investments across multiple properties. However, profitability remains challenged by high labor costs—property managers, leasing agents, maintenance coordinators, and accounting staff—alongside unpredictable expenses from emergency repairs and tenant turnover. The most successful firms differentiate through superior tenant experiences that reduce churn, operational efficiency that controls costs, and data-driven decision making that optimizes pricing and reduces vacancy periods. Technology adoption has historically lagged other industries due to fragmented operations and thin margins limiting investment, creating enormous opportunity for AI-powered transformation.
            </p>
            <p>
              Modern property management technology stacks typically include property management software (Yardi, AppFolio, Buildium) handling accounting, leasing, and basic operations; customer relationship management systems for tracking prospects and communications; maintenance management platforms coordinating work orders and vendor relationships; and smart building systems with IoT sensors monitoring HVAC, water, energy, and security. However, these systems rarely integrate seamlessly, forcing property managers to manually transfer data between platforms and make decisions based on incomplete information. Recent innovations include AI-powered chatbots for basic tenant inquiries, predictive maintenance algorithms analyzing sensor data to forecast equipment failures, dynamic pricing tools that adjust rents based on market conditions, and automated showing scheduling with smart lock integration. The technology landscape is evolving rapidly from basic digitization toward intelligent automation, with AI now capable of handling complex workflows that previously required human judgment.
            </p>
            <p>
              Agentic AI represents a paradigm shift for property management by deploying autonomous agents that manage complete workflows end-to-end without human intervention. Unlike traditional software requiring manual input and decision-making, AI agents understand context, make intelligent decisions, and coordinate across systems automatically. For property management, this means agents that handle tenant maintenance requests from submission through vendor dispatch, completion verification, and payment processing—learning from each interaction to improve vendor selection and response times. Predictive maintenance agents analyze patterns from thousands of properties to forecast failures weeks in advance, automatically scheduling service during optimal windows. Lease renewal agents proactively engage tenants 90 days before expiration, analyze market conditions and tenant payment history, and generate personalized offers that maximize retention while optimizing revenue. The result: property managers transform from administrators buried in operational tasks into strategic advisors focused on portfolio growth, tenant relationships, and property value enhancement, while AI handles the 60-70% of work that is repetitive, data-driven, and rules-based.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Property Management
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Property managers face a relentless daily grind of maintenance emergencies, tenant complaints, rent collection follow-ups, and vendor coordination—all while trying to maintain profitability across diverse portfolios. HVAC systems fail at 2 AM, requiring immediate response. Leases expire without timely renewal notices, leading to unexpected vacancies. Maintenance requests pile up in email inboxes and phone messages, with no systematic way to prioritize urgent issues over routine tasks. Meanwhile, property managers manually track hundreds of lease agreements, payment schedules, and maintenance contracts across spreadsheets and disconnected software systems, creating opportunities for costly errors and missed deadlines.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The financial impact of inefficient operations compounds rapidly: reactive maintenance costs 3-5x more than preventive service, yet without predictive tools, managers only respond after equipment fails. Late rent collection drains cash flow, but manual follow-up processes are time-consuming and inconsistent. Vacant units represent pure revenue loss, yet marketing and showing coordination often happens through phone tag and manual scheduling. Property managers spend 60-70% of their time on administrative tasks rather than strategic initiatives that improve property value and tenant satisfaction. This operational inefficiency directly reduces NOI (Net Operating Income) and makes scaling portfolios extremely difficult without proportionally increasing staff.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Property Management Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms property management by deploying autonomous agents that handle entire workflows from start to finish without human intervention. When a tenant submits a maintenance request, AI agents automatically categorize the issue, assess urgency, check warranty status, select and dispatch the optimal vendor based on availability and past performance, and schedule access—all within minutes. The system monitors completion, processes invoices, and updates records automatically. For rent collection, AI agents send personalized payment reminders based on tenant history, process payments instantly, and escalate delinquencies according to customized workflows. Lease renewals become proactive rather than reactive, with AI analyzing market conditions, tenant payment history, and comparable properties to generate personalized renewal offers 90 days before expiration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The impact is transformative: predictive maintenance AI analyzes sensor data from HVAC systems, water heaters, and other critical equipment to schedule service before failures occur, reducing emergency repairs by 85% and cutting maintenance costs by 40%. Automated rent collection improves on-time payment rates from 75% to 95% while eliminating hundreds of hours of manual follow-up work. AI-powered dynamic pricing analyzes local market conditions, seasonal trends, and property attributes to optimize rental rates, increasing occupancy rates by 15-20% while maximizing revenue. Virtual showing assistants handle tour scheduling 24/7, answer property questions instantly, and even conduct self-guided tours with smart lock integration, converting prospects to tenants 40% faster. Property managers finally focus on strategic growth and tenant relationships rather than drowning in operational tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Maintenance predicted', description: 'HVAC unit scheduled for service', icon: 'AlertCircle', color: 'text-orange-500' },
          { time: '10:45 AM', action: 'Work order completed', description: 'Leak repaired automatically', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:20 AM', action: 'Lease renewal sent', description: '15 tenants received offers', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:45 AM', action: 'Energy optimized', description: 'Saved $450 on utilities today', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'Cost Reduction', current: 850, target: 1000, percentage: 85, color: 'bg-purple-500' },
          { goal: 'Occupancy Rate', current: 920, target: 1000, percentage: 92, color: 'bg-green-500' },
          { goal: 'Tenant Satisfaction', current: 88, target: 100, percentage: 88, color: 'bg-blue-500' },
          { goal: 'Maintenance Efficiency', current: 78, target: 100, percentage: 78, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Rent Collection', description: '98% on-time payment this month...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Lease Renewals', description: '12 leases renewed automatically...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Predictive Alert', description: 'Water heater replacement needed...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Energy Savings', description: 'Monthly utility costs down 15%...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      {/* Challenges */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From challenges to solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentic Ai transforms property management pain points into competitive advantages. See how leading property managers are leveraging AI to reduce costs, improve efficiency, and deliver exceptional tenant experiences.
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

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete AI-powered automation
            </h2>
            <p className="text-xl text-gray-600">
              Autonomous Agentic Ai working 24/7 across every aspect of property management. Our comprehensive platform integrates seamlessly with your existing systems while adding powerful AI capabilities that transform operations.
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

      
      <FeatureDetailSection {...featureDetails.PropertyManagement} />
{/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to transform your properties?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join 500+ property managers reducing costs and delighting tenants with Agentic Ai. See why leading property management companies trust our platform to handle thousands of units efficiently and profitably.
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
      <FAQSection faqs={getFAQs('PropertyManagement')} />
      <RelatedContent currentPage="PropertyManagement" category="industry" crossCategories={['product']} title="Explore Related Solutions" />
    </div>
    </InternalLinker>
  );
}