import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, TrendingDown, Database, Workflow, DollarSign, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const challenges = [
  {
    icon: Shield,
    title: 'Compliance & Risk',
    problem: 'Manual KYC/AML checks take 2-3 days per customer and require extensive documentation review. Audit trail maintenance across dozens of systems is labor-intensive and error-prone, with compliance officers spending 70% of their time on manual documentation. Regulatory reporting for Basel III, Dodd-Frank, and local requirements involves aggregating data from disparate sources, often taking weeks to compile. False-positive alerts on suspicious activities overwhelm investigators, with 95% being legitimate transactions.',
    solution: 'AI automates KYC/AML workflows by instantly verifying identities against global databases, analyzing document authenticity, and screening against sanctions lists in under 2 minutes. Continuous transaction monitoring uses behavioral AI to detect actual suspicious patterns with 99% accuracy, reducing false positives by 90%. Automated compliance engines maintain complete audit trails, automatically generate regulatory reports, and ensure all controls are functioning correctly. This reduces compliance costs by 60% while improving regulatory standing and audit success rates.'
  },
  {
    icon: Database,
    title: 'Siloed Data',
    problem: 'Customer data fragmented across core banking systems, CRM platforms, payment processors, loan origination systems, and branch management software prevents holistic customer understanding. Marketing teams lack visibility into actual product usage patterns. Risk assessments are based on incomplete information, leading to higher default rates. Cross-selling opportunities are missed because no system has a complete view of customer needs and behaviors.',
    solution: 'Agentic AI integrates all systems in real-time, creating comprehensive 360° customer profiles that include transaction history, product usage, communication preferences, life events, and predicted needs. Advanced analytics automatically identify opportunities for personalized offers, detect at-risk customers before they churn, and optimize pricing based on profitability and retention likelihood. Real-time insights enable relationship managers to have more valuable conversations, while automated systems deliver perfectly timed, personalized recommendations.'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    problem: 'Average wait times of 15-45 minutes for phone support create frustration and lead to 30% of calls being abandoned. Manual onboarding processes take 7-10 days with multiple branch visits required. Fragmented service across channels means customers must repeat information when switching between mobile, web, phone, and in-person interactions. Generic product recommendations miss customer needs, resulting in low conversion rates and customer dissatisfaction.',
    solution: 'AI-powered virtual assistants handle 80% of customer inquiries instantly across all channels—chat, phone, email, and messaging apps. Natural language understanding enables conversational interactions that feel personal and helpful. Digital onboarding with automated identity verification and document processing completes account opening in under 10 minutes without branch visits. Contextual AI ensures seamless handoffs between channels, remembering customer history and preferences. Personalization engines analyze behavior to recommend relevant products at optimal moments, increasing conversion by 45% while improving satisfaction scores by 60 points.'
  },
  {
    icon: DollarSign,
    title: 'Operating Costs',
    problem: 'High labor costs for routine tasks like data entry, document processing, and basic customer service consume 60% of operational budgets. Slow loan processing with manual underwriting takes 5-7 days and requires multiple reviews, limiting volume capacity. Inefficient fraud detection systems miss 15% of actual fraud while flagging 40% of legitimate transactions, creating losses and customer friction. Back-office operations remain largely manual, preventing scalability.',
    solution: 'Autonomous agents process loan applications in minutes using AI underwriting that analyzes hundreds of data points including credit history, cash flow patterns, employment stability, and behavioral signals. Real-time fraud detection uses advanced machine learning to identify suspicious patterns with 99% accuracy, blocking fraud before money moves while approving legitimate transactions instantly. Automated document processing extracts and validates information from any format, eliminating manual data entry. This cuts operational costs by 45%, increases loan origination capacity by 300%, and reduces fraud losses by 85%.'
  }
];

const solutions = [
  {
    category: 'Customer Banking',
    items: [
      '24/7 AI banking assistant for account inquiries, transactions, and personalized advice',
      'Automated loan applications with instant credit decisions and dynamic pricing',
      'Personalized financial planning tools with AI-powered recommendations and goal tracking',
      'Intelligent fraud detection and prevention with real-time transaction monitoring',
      'Digital wealth management with automated rebalancing and tax-loss harvesting',
      'Conversational banking enabling voice and chat-based account management'
    ]
  },
  {
    category: 'Compliance & Risk',
    items: [
      'Automated KYC/AML screening with continuous monitoring and instant verification',
      'Real-time transaction monitoring detecting suspicious activity with 99% accuracy',
      'Automated regulatory reporting for Basel III, Dodd-Frank, GDPR, and local requirements',
      'AI-powered risk assessment and credit scoring using alternative data sources',
      'Automated audit trail maintenance with intelligent documentation and evidence collection',
      'Stress testing and scenario analysis for capital adequacy planning'
    ]
  },
  {
    category: 'Sales & Marketing',
    items: [
      'AI-driven lead scoring identifying high-value prospects with conversion likelihood',
      'Personalized product campaigns triggered by life events and behavioral signals',
      'Churn prediction and automated retention campaigns with personalized incentives',
      'Next-best-action recommendations delivered at optimal moments across channels',
      'Dynamic pricing optimization balancing profitability and customer value',
      'Customer lifetime value prediction guiding acquisition and retention investments'
    ]
  },
  {
    category: 'Finance Operations',
    items: [
      'Automated reconciliation across all accounts with exception handling and resolution',
      'Predictive cash flow management and liquidity forecasting with scenario planning',
      'Intelligent expense categorization and automated general ledger coding',
      'Real-time P&L dashboards with AI-powered anomaly detection and variance analysis',
      'Automated financial close processes reducing time from weeks to days',
      'Regulatory capital calculation and optimization with what-if scenario modeling'
    ]
  }
];

const metrics = [
  { value: '45%', label: 'Cost Reduction', description: 'Lower operational expenses' },
  { value: '80%', label: 'Queries Automated', description: 'AI handles routine tasks' },
  { value: '95%', label: 'Fraud Detection', description: 'Real-time accuracy' },
  { value: '3min', label: 'Loan Processing', description: 'From days to minutes' }
];

export default function FinancialInstitutions() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Landmark className="w-4 h-4" />
                Financial Institutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic AI for
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  modern banking
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform banking operations with autonomous AI agents that handle compliance verification, customer service interactions, and sophisticated risk management—reducing operational costs by 45% while dramatically improving customer satisfaction and regulatory compliance. Deliver the personalized, instant service that modern customers expect.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  Download whitepaper
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800" alt="Banking" className="rounded-3xl shadow-2xl" />
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

      {/* Challenges */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Banking challenges, AI solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI transforms financial services operations, from compliance automation to intelligent customer engagement. See how forward-thinking institutions are gaining competitive advantage.
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
                        <div className="text-sm font-semibold text-green-600 mb-2">✓ AI Solution</div>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete banking automation
            </h2>
            <p className="text-xl text-gray-600">
              AI agents working across every banking function, from front-office customer service to back-office operations and compliance.
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for AI-powered banking?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading financial institutions transforming operations with Agentic AI. Deliver exceptional customer experiences while reducing costs and maintaining perfect compliance.
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                Get started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}