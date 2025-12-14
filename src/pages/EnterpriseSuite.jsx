import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, Users, Package, BarChart, FileText, Calendar, Briefcase, Globe } from 'lucide-react';

const modules = [
  {
    icon: DollarSign,
    name: 'Financial Management',
    description: 'Complete accounting, invoicing, and financial reporting with real-time insights.',
    features: ['General Ledger', 'Accounts Payable/Receivable', 'Cash Flow Management', 'Multi-currency']
  },
  {
    icon: Users,
    name: 'HR & Payroll',
    description: 'Manage your workforce from hire to retire with automated compliance.',
    features: ['Employee Records', 'Payroll Processing', 'Benefits Admin', 'Performance Reviews']
  },
  {
    icon: Package,
    name: 'Supply Chain',
    description: 'Optimize inventory, procurement, and logistics with AI-powered predictions.',
    features: ['Inventory Control', 'Purchase Orders', 'Warehouse Management', 'Demand Forecasting']
  },
  {
    icon: Briefcase,
    name: 'CRM',
    description: 'Build lasting customer relationships with intelligent engagement tools.',
    features: ['Contact Management', 'Sales Pipeline', 'Marketing Automation', 'Customer Analytics']
  },
  {
    icon: BarChart,
    name: 'Business Intelligence',
    description: 'Turn data into decisions with advanced analytics and custom dashboards.',
    features: ['Real-time Dashboards', 'Custom Reports', 'Predictive Analytics', 'Data Visualization']
  },
  {
    icon: FileText,
    name: 'Document Management',
    description: 'Centralize, secure, and automate your document workflows.',
    features: ['Version Control', 'E-signatures', 'Compliance Tracking', 'Search & Retrieval']
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
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
              <Globe className="w-4 h-4" />
              Enterprise Suite
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              One platform for
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                your entire business
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Integrated ERP, CRM, and business management tools powered by AI. Everything you need to run and grow your enterprise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
                Request demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14 text-base">
                View pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
                <div className="text-gray-400">{benefit.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete business modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every tool your enterprise needs, seamlessly integrated in one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] rounded-xl flex items-center justify-center mb-6">
                  <module.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#8B2EE5] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Integrates with your existing tools
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect seamlessly with 1,000+ business applications. No data silos, no friction—just one unified system.
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
            </div>
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
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See it in action
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Schedule a personalized demo with our team and discover how Enterprise Suite transforms your operations.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Request a demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}