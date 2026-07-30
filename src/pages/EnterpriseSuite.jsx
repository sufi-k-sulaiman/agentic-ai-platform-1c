import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, DollarSign, Users, Package, BarChart, FileText, Calendar, Briefcase, Globe, TrendingUp, Shield, Zap, CheckCircle, Search, ChevronDown } from 'lucide-react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

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
  { name: 'Finance', value: 28, color: '#6209e6' },
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

const integrationPlatforms = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Microsoft 365', category: 'Productivity' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Zoom', category: 'Communication' },
  { name: 'SAP', category: 'ERP' },
  { name: 'Oracle', category: 'ERP' },
  { name: 'Workday', category: 'HR' },
  { name: 'ServiceNow', category: 'ITSM' },
  { name: 'Jira', category: 'Project Management' },
  { name: 'Confluence', category: 'Collaboration' },
  { name: 'HubSpot', category: 'Marketing' },
  { name: 'Zendesk', category: 'Support' },
  { name: 'Adobe Creative Cloud', category: 'Design' },
  { name: 'Tableau', category: 'Analytics' }
];

function PlatformIntegrations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRow, setExpandedRow] = useState(null);

  const filteredPlatforms = integrationPlatforms.filter(platform =>
    platform.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRowIndex = (index) => Math.floor(index / 3);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connects with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              everything
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            1,400+ pre-built integrations. Or build your own in minutes.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search platforms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg rounded-full border-2"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlatforms.map((platform, index) => {
            const rowIndex = getRowIndex(index);
            const isExpanded = expandedRow === rowIndex;
            
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-all"
              >
                <button
                  onClick={() => setExpandedRow(isExpanded ? null : rowIndex)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{platform.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{platform.category}</p>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-600 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 border-t border-gray-200"
                  >
                    <div className="pt-4">
                      <h4 className="text-sm font-semibold text-purple-700 mb-3">
                        ✨ Integration Features
                      </h4>
                      <ul className="space-y-2 mb-4">
                        <li className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          Real-time data synchronization
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          Bi-directional workflows
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          Automated field mapping
                        </li>
                        <li className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          Pre-configured templates
                        </li>
                      </ul>
                      <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        Connect {platform.name}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {filteredPlatforms.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No platforms found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function EnterpriseSuite() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Enterprise Suite"
        description="Unified ERP, CRM, and business management platform powered by AI. 60% faster processes, 45% cost reduction. Complete business modules for your entire enterprise."
        url="/enterprise-suite"
        keywords={['enterprise suite', 'ERP', 'CRM', 'business management', 'financial management', 'HR payroll', 'supply chain']}
        image="https://images.unsplash.com/photo-1551288044-60e67c10b9b3?w=1200&h=630&fit=crop"
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Enterprise Suite' }
      ]} />
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
            className="text-lg md:text-xl text-[#6209e6] mb-4"
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
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-10 h-16 text-lg font-medium">
                Get started
              </Button>
            </Link>
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
                <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
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
                <span className="text-[#6209e6]">Understand more.</span>
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
                    <Bar dataKey="revenue" fill="#6209e6" />
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

      {/* Platform Integrations Section */}
      <PlatformIntegrations />

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
                <span className="text-[#6209e6]">everything you use</span>
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
              className="relative aspect-square bg-gradient-to-br from-[#6209e6]/10 to-[#A855F7]/10 rounded-3xl p-12"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] rounded-full flex items-center justify-center">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                      alt="1C" 
                      className="w-12 h-12"
                    />
                  </div>
                </div>
              </div>
              {/* Integration boxes with names */}
              {[
                { name: 'Salesforce', position: { top: '8%', left: '10%' } },
                { name: 'HubSpot', position: { top: '15%', right: '12%' } },
                { name: 'Slack', position: { top: '45%', left: '5%' } },
                { name: 'Teams', position: { top: '50%', right: '8%' } },
                { name: 'AWS', position: { bottom: '25%', left: '12%' } },
                { name: 'Azure', position: { bottom: '20%', right: '15%' } },
                { name: 'QuickBooks', position: { bottom: '8%', left: '28%' } },
                { name: 'Xero', position: { bottom: '10%', right: '25%' } }
              ].map((integration, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-xl shadow-lg p-3 flex items-center justify-center"
                  style={integration.position}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{integration.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Management - Fold 6 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Financial
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  mastery
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Complete financial management. Real-time reporting. Automated reconciliation.
              </p>
              <div className="space-y-4">
                {[
                  'General ledger',
                  'AP/AR automation',
                  'Multi-currency support',
                  'Cash flow forecasting'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl text-gray-700"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800" 
                alt="Financial Dashboard" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* HR & Payroll - Fold 7 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" 
                alt="Team collaboration" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                HR made
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  effortless
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                From recruiting to payroll. Everything automated.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-gray-600">Time saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600">Accuracy</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supply Chain - Fold 8 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Supply chain
              <br />
              optimization
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              AI-powered demand forecasting. Automated procurement. Real-time tracking.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '95%', label: 'Forecast accuracy' },
                { value: '40%', label: 'Cost reduction' },
                { value: '99%', label: 'Fill rate' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-5xl font-bold text-purple-400 mb-3">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CRM - Fold 9 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                CRM that
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  sells for you
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                AI-powered lead scoring. Automated follow-ups. Predictive analytics.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">5x</div>
                  <div className="text-gray-600">Lead conversion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-gray-600">More pipeline</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" 
                alt="CRM Dashboard" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Intelligence - Fold 10 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Insights that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                drive decisions
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Advanced analytics with natural language querying. Ask questions, get answers instantly.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200" 
                alt="BI Dashboard" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Document Management - Fold 11 */}
      <section className="min-h-screen flex items-center bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Documents.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Organized.
                </span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                AI-powered classification. E-signature integration. Full compliance.
              </p>
              <div className="space-y-4">
                {[
                  'Automatic tagging',
                  'Version control',
                  'Audit trails',
                  'Secure sharing'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800" 
                alt="Document Management" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Apps - Fold 12 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800" 
                alt="Mobile apps" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Work from
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  anywhere
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Native iOS and Android apps. Full offline support.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access everything on the go. Sync automatically when online.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration - Fold 13 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Built for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                collaboration
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Real-time co-editing. Comments. Mentions. Everything your team needs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: 'Real-time', label: 'Co-editing' },
                { value: 'Unlimited', label: 'Team members' },
                { value: 'Instant', label: 'Sync' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{item.value}</div>
                  <div className="text-xl text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security - Fold 14 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-32 h-32 text-purple-400 mx-auto mb-12" />
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Bank-grade
              <br />
              security
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Enterprise security that protects your most valuable asset—your data.
            </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: 'AES-256', label: 'Encryption' },
                { value: 'SOC 2', label: 'Certified' },
                { value: '2FA', label: 'Authentication' },
                { value: '24/7', label: 'Monitoring' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Access - Fold 15 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Full API access
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Extend and customize with comprehensive APIs
            </p>
          </motion.div>
          
          <div className="bg-gray-900 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <pre className="text-green-400 text-sm">
{`import { EnterpriseSuite } from '@1c/sdk';

const suite = new EnterpriseSuite();

// Access all modules via API
await suite.finance.createInvoice({...});
await suite.hr.processPayroll({...});
await suite.crm.updateLead({...});`}
            </pre>
          </div>
        </div>
      </section>

      {/* Custom Branding - Fold 16 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Your brand.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Your platform.
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Full white-label options. Custom domains. Your logo everywhere.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Make it yours with complete branding control.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart className="w-48 h-48 text-purple-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration - Fold 17 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Migration made
              <br />
              simple
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              We handle the heavy lifting. Zero downtime. Full data integrity.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '4 weeks', label: 'Avg migration time' },
                { value: '100%', label: 'Data accuracy' },
                { value: 'Zero', label: 'Downtime' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-5xl font-bold text-purple-400 mb-3">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support - Fold 18 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Support that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                actually helps
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              24/7 expert support. Dedicated success manager. Training included.
            </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: '{'<'}5min', label: 'Response time' },
                { value: '98%', label: 'Satisfaction' },
                { value: '24/7', label: 'Availability' },
                { value: '100%', label: 'Resolution' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Calculate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Enterprise Savings
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              See exactly how much your organization can save with our unified platform
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { value: '$250K+', label: 'Average annual savings' },
                { value: '2,500', label: 'Hours saved per month' },
                { value: '4 months', label: 'Average payback period' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link to={createPageUrl('SavingsCalculator')}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 rounded-full px-10 h-14 text-lg">
                Calculate Your Savings <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
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
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-medium">
                Get started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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
      <RelatedContent
        currentPage="EnterpriseSuite"
        category="product"
        crossCategories={['resources', 'industry']}
        title="Explore Related Solutions"
      />
    </div>
  );
}