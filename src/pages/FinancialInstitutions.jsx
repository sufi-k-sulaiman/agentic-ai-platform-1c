import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Landmark, TrendingDown, Database, Workflow, DollarSign, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import VerticalAnalytics from '@/components/VerticalAnalytics';

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
      <PageMeta 
        title="Financial Services AI"
        description="AI-powered banking reducing costs by 45%. Automated compliance, instant loan processing, 95% fraud detection. Transform financial operations."
        url="/financial-institutions"
        keywords={['banking AI', 'financial services automation', 'fraud detection', 'loan processing', 'compliance automation']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Landmark className="w-4 h-4" />
                Financial Institutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Agentic AI for
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  modern banking
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform banking operations with autonomous Agentic Ai that handles compliance verification, customer service interactions, and sophisticated risk management—reducing operational costs by 45% while dramatically improving customer satisfaction and regulatory compliance. Deliver the personalized, instant service that modern customers expect.
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
              Financial Institutions
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Financial institutions form the backbone of the global economy, with the banking sector alone representing over $5 trillion in annual revenue worldwide. Banks, credit unions, investment firms, and insurance companies manage trillions in assets while serving billions of customers through complex networks of branches, ATMs, mobile apps, and digital channels. The industry operates under intense regulatory scrutiny with compliance requirements from Basel III, Dodd-Frank, GDPR, PCI DSS, and countless jurisdiction-specific regulations demanding extensive documentation, reporting, and control frameworks. Financial services compete on three dimensions: customer experience (convenience, speed, personalization), operational efficiency (cost per transaction, processing time), and risk management (credit quality, fraud prevention, regulatory compliance). Traditional competitive advantages—branch networks, established brands—erode as fintech disruptors deliver superior digital experiences, forcing incumbents to modernize operations while managing legacy systems and regulatory constraints that startups avoid.
            </p>
            <p>
              Banking business models rely on net interest margin (the spread between lending rates and deposit costs), fee income from services like account maintenance and transaction processing, and investment revenue from asset management. Retail banking generates steady deposits providing low-cost funding for lending, while investment banking produces high-margin advisory and underwriting fees. However, margins face pressure from multiple directions: near-zero interest rates compress lending spreads, free checking accounts and digital banking reduce fee income, and regulatory capital requirements limit leverage. Success requires balancing volume (more customers, more transactions) with efficiency (lower cost per transaction) and risk (maintaining credit quality, preventing fraud). Digital transformation promises to shift economics by reducing expensive branch operations and manual processing while improving customer acquisition through superior experiences. Banks investing in AI can process loans in minutes rather than days, serve customers 24/7 through intelligent virtual assistants, and prevent fraud with accuracy impossible for human analysts—creating competitive advantages that compound over time.
            </p>
            <p>
              Financial technology infrastructure includes core banking systems processing deposits, withdrawals, and account management; loan origination platforms handling applications, underwriting, and approval workflows; payment processing networks managing card transactions and ACH transfers; customer relationship management systems tracking interactions and opportunities; fraud detection systems monitoring transactions; and regulatory reporting platforms aggregating data for compliance. These systems evolved over decades, with large banks often running core banking software written in COBOL on mainframes alongside modern web applications and mobile apps—creating integration nightmares. APIs enable connections between systems, but data flows remain complex: customer information exists in core banking for accounts, separate CRM for relationship management, different systems for loans, credit cards, and investments. Recent innovations include cloud-based banking platforms, real-time payment networks, biometric authentication, blockchain for settlement, and AI-powered chatbots. However, most AI applications remain narrow—fraud detection analyzing transaction patterns, chatbots handling FAQs—rather than autonomous agents managing complete customer journeys.
            </p>
            <p>
              Agentic AI revolutionizes financial services by deploying intelligent agents that handle entire workflows autonomously while maintaining perfect compliance. Loan processing agents manage applications from submission through approval: instantly verifying identity against global databases, analyzing creditworthiness using hundreds of data points including traditional credit reports plus alternative signals like cash flow patterns and employment stability, assessing risk, generating approval decisions, and maintaining complete audit documentation—all in under 3 minutes versus 5-7 days manually. Customer service agents handle 80% of inquiries instantly across any channel with natural language understanding, accessing unified customer data to provide personalized responses, execute transactions, and seamlessly escalate complex issues to human agents with full context. Compliance agents continuously monitor transactions, maintain audit trails, generate regulatory reports automatically, and ensure all controls function correctly—reducing compliance costs 60% while improving regulatory standing. Fraud detection agents analyze every transaction in real-time using behavioral models that learn individual customer patterns, identifying suspicious activity with 99% accuracy while reducing false positives by 90%. The transformation enables banks to compete with fintech on customer experience while leveraging their asset scale, deliver personalized service rivaling private banking across all customers, and maintain perfect compliance—all while reducing operational costs 45% and scaling services without proportionally increasing headcount.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Banking Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Banks drown in regulatory complexity: every loan application requires KYC verification, AML screening, credit analysis, and risk assessment—processes that consume 5-7 days and multiple department handoffs. Compliance officers spend 70% of their time manually compiling audit trails, generating regulatory reports, and documenting controls for Basel III, Dodd-Frank, GDPR, and countless jurisdiction-specific requirements. Meanwhile, fraud detection systems overwhelm analysts with false positives—flagging 40% of legitimate transactions as suspicious while sophisticated attacks exploiting subtle behavioral patterns slip through undetected. Customer service teams field thousands of repetitive calls daily about account balances, transaction history, and password resets—simple queries that waste expensive human talent while customers wait on hold for 15-45 minutes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The cost of operational inefficiency is staggering: manual loan underwriting limits volume capacity and creates inconsistent decisions based on individual underwriter judgment. Customer onboarding takes 7-10 days with multiple branch visits, during which prospects often choose faster competitors. Data fragmentation across core banking systems, CRM platforms, payment processors, and loan origination systems prevents personalized service—relationship managers can't see complete customer profiles, cross-selling opportunities are missed, and at-risk customers churn without warning. Back-office operations remain stubbornly manual: document processing, reconciliation, exception handling, and reporting consume armies of staff performing repetitive tasks that are both expensive and error-prone. Traditional automation helps but requires constant maintenance of rigid rule sets that break whenever processes change.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Banking's Operational Burden</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms banking by deploying autonomous agents that handle complete workflows from initiation to resolution. For loan applications, AI agents instantly verify identity by checking documents against global databases, analyze creditworthiness using hundreds of data points including traditional credit history plus alternative data like cash flow patterns and employment stability, assess risk using sophisticated models, and generate approval decisions in under 3 minutes—all while maintaining perfect documentation for regulatory compliance. Customer service AI handles 80% of inquiries instantly across any channel—understanding natural language questions, accessing unified customer data to provide personalized responses, executing transactions, and seamlessly escalating complex issues to humans with complete context. Fraud detection AI analyzes every transaction in real-time using behavioral models that learn normal patterns for each customer and merchant, identifying suspicious activity with 99% accuracy while reducing false positives by 90%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The transformation is comprehensive: compliance automation continuously monitors all transactions, maintains complete audit trails, generates regulatory reports on demand, and ensures all controls function correctly—reducing compliance costs by 60% while improving regulatory standings. Digital onboarding with AI-powered identity verification and document analysis completes account opening in 10 minutes without branch visits, capturing customers before they choose competitors. Predictive analytics identify at-risk customers before they churn, triggering personalized retention offers. Next-best-action AI recommends relevant products at optimal moments, increasing cross-sell conversion by 45%. Back-office agents automate reconciliation, document processing, and exception handling, cutting operational costs by 45% while eliminating errors. Banks scale services without proportionally increasing headcount, serve customers with Netflix-level personalization, and maintain perfect compliance—all while reducing costs and improving both customer and employee experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Fraud pattern detected', description: 'Suspicious transaction flagged', icon: 'AlertCircle', color: 'text-orange-500' },
          { time: '10:31 AM', action: 'AI analysis complete', description: 'Behavioral pattern confirmed', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:32 AM', action: 'Transaction blocked', description: 'Account secured automatically', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:35 AM', action: 'Customer notified', description: 'Security alert sent', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'Fraud Detection Rate', current: 950, target: 1000, percentage: 95, color: 'bg-purple-500' },
          { goal: 'Loan Processing Speed', current: 92, target: 100, percentage: 92, color: 'bg-green-500' },
          { goal: 'Compliance Score', current: 100, target: 100, percentage: 100, color: 'bg-blue-500' },
          { goal: 'Customer Satisfaction', current: 88, target: 100, percentage: 88, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Fraud Prevention Success', description: '$2.5M in fraudulent transactions blocked...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Loan Approval Milestone', description: '500+ loans processed today...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Compliance Update', description: 'New regulatory rules integrated...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Risk Alert', description: 'Market volatility detected in portfolio...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      {/* Challenges */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Banking challenges, AI solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms financial services operations, from compliance automation to intelligent customer engagement. See how forward-thinking institutions are gaining competitive advantage.
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

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete banking automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai working across every banking function, from front-office customer service to back-office operations and compliance.
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for AI-powered banking?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading financial institutions transforming operations with Agentic Ai. Deliver exceptional customer experiences while reducing costs and maintaining perfect compliance.
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