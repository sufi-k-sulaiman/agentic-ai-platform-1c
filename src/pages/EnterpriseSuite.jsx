import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, DollarSign, Users, Package, BarChart, FileText, Calendar, Briefcase, Globe, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import PageMeta from '@/components/PageMeta';

const revenueData = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Feb', revenue: 52000, expenses: 34000, profit: 18000 },
  { month: 'Mar', revenue: 48000, expenses: 31000, profit: 17000 },
  { month: 'Apr', revenue: 61000, expenses: 38000, profit: 23000 },
  { month: 'May', revenue: 55000, expenses: 35000, profit: 20000 },
  { month: 'Jun', revenue: 67000, expenses: 40000, profit: 27000 }
];

const performanceMetrics = [
  { name: 'Revenue', current: '$45.2M', previous: '$38.6M', change: '+17.1%', positive: true },
  { name: 'Active Users', current: '12,450', previous: '10,230', change: '+21.7%', positive: true },
  { name: 'Conversion Rate', current: '3.8%', previous: '4.2%', change: '-9.5%', positive: false },
  { name: 'Average Order', current: '$156', previous: '$142', change: '+9.9%', positive: true }
];

const departmentData = [
  { name: 'Finance', value: 28, color: '#8B2EE5' },
  { name: 'HR', value: 22, color: '#A855F7' },
  { name: 'Operations', value: 35, color: '#C084FC' },
  { name: 'Sales', value: 15, color: '#E9D5FF' }
];

const modules = [
  {
    icon: DollarSign,
    name: 'Financial Management',
    description: 'Enterprise-grade financial management system that unifies all your accounting, invoicing, budgeting, and financial reporting needs into one intelligent platform. Our AI-powered solution provides real-time insights into your financial health, automated reconciliation that saves hundreds of hours monthly, predictive cash flow forecasting to prevent shortfalls, and multi-entity consolidation for complex organizational structures. Features include general ledger with unlimited chart of accounts customization, automated accounts payable and receivable with smart payment terms optimization, comprehensive cash flow management with scenario planning, multi-currency support with real-time exchange rates, advanced expense tracking with OCR receipt scanning, automated bank reconciliation, financial statement generation, and budgeting tools with variance analysis. The system integrates seamlessly with your existing banking infrastructure and provides audit trails that satisfy the most stringent compliance requirements including SOX, GAAP, and IFRS standards.',
    features: ['General Ledger with Custom Dimensions', 'AP/AR Automation & Collections', 'Multi-Currency & Exchange Rate Management', 'Cash Flow Forecasting & Scenario Planning', 'Automated Bank Reconciliation', 'Financial Consolidation & Reporting', 'Expense Management with OCR', 'Compliance & Audit Trail']
  },
  {
    icon: Users,
    name: 'HR & Payroll',
    description: 'Comprehensive human capital management solution that transforms how you attract, develop, and retain talent while ensuring perfect payroll accuracy and regulatory compliance. Our platform handles the complete employee lifecycle from recruitment and onboarding through performance management, learning and development, succession planning, and offboarding. The AI-powered system automates complex payroll calculations across multiple jurisdictions, manages benefits enrollment and administration, tracks time and attendance with fraud detection, handles leave management with intelligent approval routing, ensures compliance with constantly changing labor laws across all locations, and provides workforce analytics that help you make data-driven decisions about headcount, compensation, and organizational design. Features include applicant tracking with AI-powered candidate matching, digital onboarding workflows, employee self-service portals, automated payroll processing with tax calculations, benefits administration with carrier integrations, performance review cycles with 360-degree feedback, learning management systems, succession planning tools, and comprehensive HR analytics dashboards.',
    features: ['Applicant Tracking & Recruitment AI', 'Digital Onboarding Workflows', 'Global Payroll with Multi-Country Support', 'Benefits Administration & Enrollment', 'Time & Attendance Tracking', 'Performance Management & Reviews', 'Learning & Development Platform', 'Compliance & Labor Law Updates', 'Workforce Analytics & Planning', 'Employee Self-Service Portal']
  },
  {
    icon: Package,
    name: 'Supply Chain',
    description: 'Revolutionary supply chain management platform that leverages artificial intelligence and machine learning to optimize every aspect of your procurement, inventory, warehousing, and logistics operations. The system provides end-to-end visibility across your entire supply chain network, from raw material sourcing through manufacturing, distribution, and final delivery to customers. Our predictive algorithms analyze historical patterns, market trends, seasonality, and external factors like weather and economic indicators to forecast demand with 95%+ accuracy, enabling you to maintain optimal inventory levels that minimize carrying costs while preventing stockouts. Advanced features include intelligent procurement that automatically generates purchase orders when inventory falls below calculated reorder points, vendor performance scoring and automated supplier relationship management, multi-warehouse inventory optimization with automated transfer orders, lot and serial number tracking for full traceability, quality control workflows with automated defect detection, inbound and outbound logistics management with carrier integration and rate shopping, route optimization for delivery vehicles reducing fuel costs by up to 30%, real-time shipment tracking with proactive exception management, and sophisticated demand planning that considers promotional activities, market trends, and business growth projections.',
    features: ['AI-Powered Demand Forecasting', 'Automated Purchase Order Generation', 'Multi-Warehouse Inventory Optimization', 'Vendor Performance Management', 'Lot & Serial Number Tracking', 'Quality Control Workflows', 'Route Optimization & Logistics', 'Real-Time Shipment Tracking', 'Procurement Analytics & Spend Analysis', 'Supplier Portal & Collaboration']
  },
  {
    icon: Briefcase,
    name: 'CRM',
    description: 'Next-generation customer relationship management platform that uses artificial intelligence to help you understand, engage, and delight customers at every touchpoint throughout their entire lifecycle. Our CRM goes far beyond basic contact management to provide a complete 360-degree view of each customer, including their purchase history, support interactions, marketing engagement, social media activity, and predictive insights about their future behavior and lifetime value. The AI engine analyzes patterns to identify upsell and cross-sell opportunities, predict churn risk before it happens, recommend optimal next actions for sales reps, personalize marketing messages at scale, and automate routine tasks that waste valuable selling time. Built-in tools include comprehensive contact and account management with relationship mapping, visual sales pipeline with drag-and-drop deal management and win/loss analysis, advanced lead scoring using machine learning to prioritize your hottest prospects, marketing automation with segmentation, email campaigns, landing pages, and attribution tracking, customer service integration with ticket management and SLA tracking, sales forecasting with AI-enhanced probability scoring, territory and quota management, mobile apps for field sales teams, workflow automation with no-code builders, and deep analytics that reveal which channels, campaigns, and activities drive the most revenue.',
    features: ['360° Customer View & Timeline', 'AI-Powered Lead Scoring', 'Visual Sales Pipeline Management', 'Marketing Automation & Campaigns', 'Customer Service & Support Tickets', 'Sales Forecasting & Quota Tracking', 'Territory & Account Management', 'Mobile CRM Apps', 'Workflow Automation', 'Revenue Attribution Analytics']
  },
  {
    icon: BarChart,
    name: 'Business Intelligence',
    description: 'Enterprise business intelligence and analytics platform that transforms raw data from across your entire organization into actionable insights that drive strategic decision-making and operational excellence. Our solution aggregates data from every system in your technology stack—ERP, CRM, marketing automation, e-commerce, supply chain, HR, finance, and more—into a unified analytics layer that provides unprecedented visibility into business performance. Advanced AI and machine learning algorithms automatically identify trends, anomalies, opportunities, and risks buried in your data that humans would never spot manually. The platform includes a powerful drag-and-drop report builder that lets business users create sophisticated analyses without SQL knowledge, scheduled report distribution via email and Slack, embedded analytics that can be white-labeled and integrated into your customer-facing applications, predictive models for forecasting sales, revenue, churn, and other key metrics, natural language querying so executives can ask questions in plain English, mobile dashboards for real-time monitoring on the go, and collaboration features like annotations, sharing, and discussion threads on dashboards. Our visualization library includes dozens of chart types from basic bar and line charts to advanced heat maps, funnel charts, cohort analysis, and geographic mapping.',
    features: ['Unified Data Warehouse Integration', 'Drag-and-Drop Report Builder', 'Real-Time Executive Dashboards', 'Predictive Analytics & Forecasting', 'Natural Language Querying', 'Automated Insight Discovery', 'Mobile Analytics Apps', 'Embedded Analytics & White-Labeling', 'Advanced Data Visualization Library', 'Scheduled Report Distribution']
  },
  {
    icon: FileText,
    name: 'Document Management',
    description: 'Intelligent document management system that centralizes all your business documents, contracts, records, and files into a secure, searchable repository with advanced workflow automation and compliance controls. Our platform uses AI to extract metadata from documents automatically, classify and tag files intelligently, enable full-text search across millions of documents including PDFs and scanned images, and route documents through approval workflows based on content and business rules. The system maintains complete version history with the ability to restore any previous version, tracks who accessed or modified each document with tamper-proof audit logs, enforces retention policies that automatically archive or delete files based on regulatory requirements, and provides granular permission controls so sensitive documents are only accessible to authorized personnel. Advanced features include native e-signature integration with legal validity in 180+ countries, automated document generation using templates with data from other systems, optical character recognition (OCR) for scanned documents, intelligent data extraction for invoices and forms, workflow automation with conditional routing and escalations, collaborative editing with real-time co-authoring, mobile access with offline sync, and integration with email and cloud storage providers. The platform ensures compliance with records management regulations including SEC 17a-4, FINRA, HIPAA, and GDPR.',
    features: ['Centralized Document Repository', 'AI-Powered Classification & Tagging', 'Full-Text Search with OCR', 'Version Control & History', 'E-Signature Integration', 'Automated Workflow Routing', 'Granular Access Controls', 'Retention Policy Automation', 'Audit Trails & Compliance', 'Mobile Access with Offline Sync', 'Template-Based Document Generation', 'Integration with Email & Cloud Storage']
  }
];

const benefits = [
  { stat: '60%', label: 'Faster processes' },
  { stat: '45%', label: 'Cost reduction' },
  { stat: '99.99%', label: 'Uptime SLA' },
  { stat: '24/7', label: 'Global support' }
];

export default function EnterpriseSuite() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Enterprise Suite"
        description="Unified ERP, CRM, and business management platform powered by AI. 60% faster processes, 45% cost reduction. Complete business modules for your entire enterprise."
        url="/enterprise-suite"
        keywords={['enterprise suite', 'ERP', 'CRM', 'business management', 'financial management', 'HR payroll', 'supply chain']}
      />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-purple-300 mb-4"
          >
            Enterprise Suite
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
          >
            One platform.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Infinite possibilities.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            The complete business operating system. ERP, CRM, and AI-powered automation unified in one beautiful platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-10 h-16 text-lg font-medium">
              Request demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-16 text-lg font-medium">
              Watch video
            </Button>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Performance that speaks for itself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies transforming their operations with measurable results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
                <div className="text-lg font-medium text-gray-900 mb-2">{benefit.label}</div>
                <div className="text-sm text-gray-500">vs traditional systems</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Feature */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                See everything.
                <br />
                <span className="text-[#8B2EE5]">Understand more.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Real-time dashboards give you instant visibility into every aspect of your business. From revenue and expenses to team performance and customer satisfaction, all your critical metrics are at your fingertips.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our AI analyzes patterns across millions of data points, surfacing insights and anomalies before they become problems. Make confident decisions backed by data, not guesswork.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white p-8">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
                  alt="Dashboard" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Live performance metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor your business in real-time with AI-powered analytics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{metric.name}</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{metric.current}</div>
                    <div className={`text-sm font-medium flex items-center gap-1 ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                      <TrendingUp className={`w-4 h-4 ${!metric.positive && 'rotate-180'}`} />
                      {metric.change} vs previous
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Revenue & Profit Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBar data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#8B2EE5" />
                    <Bar dataKey="profit" fill="#A855F7" />
                  </RechartsBar>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Department Resource Allocation</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Six powerful modules.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                One unified platform.
              </span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to run your business, beautifully integrated
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{module.name}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">{module.description.slice(0, 180)}...</p>
                  <div className="space-y-2">
                    {module.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Works with
                <br />
                <span className="text-[#8B2EE5]">everything you use</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect seamlessly with 1,000+ applications. From Salesforce to QuickBooks, Slack to AWS—everything syncs automatically.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                No more data silos. No manual exports. No friction. Just one unified system that connects your entire business ecosystem.
              </p>
              <div className="space-y-4">
                {[
                  'Salesforce, HubSpot, Dynamics 365',
                  'Slack, Microsoft Teams, Zoom',
                  'AWS, Azure, Google Cloud',
                  'QuickBooks, Xero, NetSuite'
                ].map((integration, index) => (
                  <motion.div
                    key={integration}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-900">{integration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gradient-to-br from-[#8B2EE5]/10 to-[#A855F7]/10 rounded-3xl p-12"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                    alt="1C" 
                    className="w-20 h-20"
                  />
                </div>
              </div>
              {/* Connection nodes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-16 h-16 bg-white rounded-xl shadow-lg"
                  style={{
                    top: `${20 + Math.sin(i * Math.PI / 4) * 40}%`,
                    left: `${20 + Math.cos(i * Math.PI / 4) * 40}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to transform
            <br />
            your business?
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            See how Enterprise Suite can revolutionize your operations. Schedule a personalized demo with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-medium">
              Request demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-12 h-16 text-lg font-medium">
              Contact sales
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-200">Active companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="text-purple-200">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">Expert support</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}