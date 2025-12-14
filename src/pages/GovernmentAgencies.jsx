import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, TrendingDown, Database, Workflow, DollarSign, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const challenges = [
  {
    icon: DollarSign,
    title: 'Budget Constraints',
    problem: 'Limited budgets, manual processes eating resources, inefficient service delivery',
    solution: 'AI automates routine tasks, optimizes resource allocation, and reduces operational costs by 40%'
  },
  {
    icon: Database,
    title: 'Legacy Systems',
    problem: 'Fragmented data across departments, outdated systems, no interoperability',
    solution: 'Agentic AI integrates legacy systems, creates unified data views, and enables modern digital services'
  },
  {
    icon: Workflow,
    title: 'Manual Workflows',
    problem: 'Paper-based processes, slow approvals, citizen requests taking weeks',
    solution: 'AI automates approvals, digitizes paperwork, and processes requests in hours instead of weeks'
  },
  {
    icon: Users,
    title: 'Citizen Experience',
    problem: 'Long wait times, poor communication, no self-service options',
    solution: '24/7 AI assistants handle inquiries, provide instant updates, and improve satisfaction by 50%'
  }
];

const solutions = [
  {
    category: 'Citizen Services',
    items: [
      '24/7 Agentic Ai assistant for government services',
      'Automated permit and license processing',
      'Self-service portal for common requests',
      'Multi-language support for diverse populations'
    ]
  },
  {
    category: 'Operations & Compliance',
    items: [
      'Automated workflow routing and approvals',
      'Digital document management and archiving',
      'Compliance monitoring and reporting',
      'Audit trail automation for transparency'
    ]
  },
  {
    category: 'Finance & Budgeting',
    items: [
      'Automated expense tracking and reporting',
      'Predictive budget planning and forecasting',
      'Grant management and fund tracking',
      'Real-time financial dashboards'
    ]
  },
  {
    category: 'Data & Analytics',
    items: [
      'Cross-department data integration',
      'Performance metrics and KPI tracking',
      'Predictive analytics for policy decisions',
      'Public data transparency portals'
    ]
  }
];

const metrics = [
  { value: '40%', label: 'Cost Reduction', description: 'Lower operational expenses' },
  { value: '75%', label: 'Faster Processing', description: 'Automated workflows' },
  { value: '50%', label: 'Higher Satisfaction', description: 'Better citizen experience' },
  { value: '24/7', label: 'Service Availability', description: 'Always accessible' }
];

export default function GovernmentAgencies() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                Government Agencies
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Modern government
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  powered by AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform public services with secure Agentic Ai that automates workflows, improves citizen experience, and reduces costs by 40%—while maintaining full compliance.
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
              <img src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=800" alt="Government Services" className="rounded-3xl shadow-2xl" />
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
              Government Agencies
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Government agencies at local, state, and federal levels serve hundreds of millions of citizens while operating under unique constraints: public accountability demands transparency; budget limitations prevent expensive technology investments; diverse stakeholder requirements create complex, often conflicting priorities; and legacy systems dating back decades resist modernization. The public sector employs over 22 million workers in the U.S. alone, spending $7+ trillion annually on services ranging from motor vehicle registration to business licensing, from building permits to social services delivery. Unlike private sector organizations, government cannot simply deny service to unprofitable customers or focus only on efficient processes—agencies must serve all citizens regardless of complexity, language barriers, or technical literacy. Political cycles create discontinuity, with changing administrations and elected officials shifting priorities, while civil service employment rules limit management flexibility. The result is public services that lag private sector customer experience by a generation, creating citizen frustration and eroding trust in government effectiveness.
            </p>
            <p>
              Government business models are fundamentally different from private sector: agencies operate as service providers rather than profit-maximizing businesses, funded through tax revenue with success measured by citizen satisfaction, service accessibility, cost efficiency, and compliance rather than financial returns. Fee-based services like permits and licenses should cover costs but often don't due to political pressure to keep fees low. Grant programs distribute funding to communities and organizations, requiring extensive application review, compliance monitoring, and impact reporting. Procurement processes must follow complex regulations ensuring fairness and transparency, but these same rules create administrative burden and slow response to changing needs. Performance measurement emphasizes process compliance (were regulations followed?) over outcomes (did citizens get effective service?). Budget cycles create artificial constraints where unspent funds disappear rather than rolling over, incentivizing spending rather than efficiency. Technology investments compete with politically visible projects like infrastructure and public safety for limited funds, making it difficult to modernize systems despite strong business cases showing long-term savings.
            </p>
            <p>
              Government technology infrastructure typically consists of decades-old mainframe systems running critical functions like tax collection and benefit payments; enterprise resource planning systems managing finance, HR, and procurement; department-specific applications for permits, licenses, inspections, and case management; document management systems (increasingly electronic but often disconnected); citizen-facing websites and portals providing information and online services; and constituent relationship management systems tracking communications and requests. Integration between systems is minimal: a citizen applying for a business license may need to separately register with tax authorities, zoning departments, and health inspectors, each requiring redundant information. Data exists in silos preventing comprehensive views of citizen interactions or service delivery efficiency. Modern initiatives include cloud migration to reduce infrastructure costs, mobile-responsive websites improving accessibility, digital payment processing eliminating checks, and chatbots handling basic inquiries. However, AI adoption remains limited to pilot programs due to budget constraints, procurement complexity, risk-averse culture, and lack of technical expertise to implement advanced solutions.
            </p>
            <p>
              Agentic AI transforms government service delivery by working within existing constraints while dramatically improving efficiency and experience. Document processing agents extract information from any format—handwritten forms, scanned PDFs, photos—eliminating manual data entry while maintaining accuracy required for compliance. Workflow automation agents orchestrate complex approval processes: routing applications through required reviewers, checking eligibility automatically, scheduling inspections when needed, processing payments, and issuing digital approvals—all without manual intervention yet maintaining complete audit trails satisfying accountability requirements. Citizen service AI provides 24/7 assistance through chat, phone, and SMS in multiple languages, answering questions, checking application status, and guiding citizens through processes, reducing phone inquiries 75% while improving accessibility. Integration agents connect legacy systems creating unified citizen views accessible across departments, eliminating redundant data requests. Compliance monitoring AI continuously collects required documentation, generates audit-ready reports, and ensures all controls function correctly. The transformation enables government to deliver modern, accessible digital services citizens expect while reducing operational costs 40%, improving processing times from weeks to hours, and maintaining the transparency, security, and accountability public service demands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white d-none">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Traffic Congestion Crisis</h3>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Government Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Government agencies operate with technology infrastructure decades behind the private sector: permits that should take hours require weeks as paper applications move between departments for manual review and approval signatures. Citizens wait 45 minutes on hold to ask simple questions about forms or check application status, then get transferred three times before reaching someone who can help. Building permits involve visiting multiple offices, filling out redundant forms, and waiting for inspections that get scheduled manually weeks out. Business licenses require in-person visits, notarized documents, and payment by check because online systems don't exist or don't integrate with payment processing. Meanwhile, departments operate in silos: the tax assessor's office has different citizen information than the planning department, which uses different systems than public works.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Budget constraints exacerbate operational challenges: agencies cannot afford modern software or the consultants needed to integrate legacy systems, so they continue manual processes that waste taxpayer money. Compliance and transparency requirements demand extensive documentation, but tracking and reporting happens through spreadsheets and manual compilation taking weeks of staff time. Public records requests require employees to manually search file cabinets and databases across departments. Service quality suffers as experienced staff retire, taking institutional knowledge with them while new hires face inadequate training and outdated tools. Citizens increasingly expect government services to work like Amazon or their banking app—instant, online, 24/7—yet most agencies still require phone calls, office visits, and paper forms, creating frustration that erodes public trust in government effectiveness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Government's Digital Divide</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI modernizes government services by deploying intelligent agents that work within existing constraints, integrating with legacy systems without requiring expensive replacements. Citizen service AI provides 24/7 assistance through chat, phone, and SMS in multiple languages, answering questions about forms, checking application status, and guiding citizens through processes step-by-step. Workflow automation agents handle complete permit and license processes: accepting online applications, automatically checking completeness and eligibility, routing approvals to appropriate staff, scheduling required inspections, processing payments, and issuing digital permits—all without manual intervention. Document processing AI extracts information from any format—PDFs, scanned images, handwritten forms—eliminating manual data entry while maintaining accuracy. Integration agents connect siloed systems, creating unified citizen profiles accessible across departments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The transformation enables government to serve citizens effectively while controlling costs: permit processing that took 3-4 weeks completes in hours as AI handles routing, review, and approval automatically—citizens submit applications online, track status in real-time, and receive digital permits without ever visiting an office. Phone inquiries decrease 75% as citizens find answers instantly through AI assistants. Staff freed from routine tasks focus on complex cases requiring human judgment and community engagement. Compliance reporting happens automatically with AI continuously collecting required documentation and generating audit-ready reports. Transparency improves through AI-powered public data portals that let citizens access spending data, performance metrics, and decision records easily. Costs drop 40% through eliminated waste and improved efficiency, while citizen satisfaction increases 50% from faster, more accessible services. Government agencies finally deliver the modern digital services citizens expect while operating within budget constraints and maintaining the accountability and security public service demands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Government challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai modernizes public sector operations
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

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete government automation
            </h2>
            <p className="text-xl text-gray-600">
              Secure Agentic Ai for every department and service
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
              Ready to modernize public services?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join forward-thinking agencies transforming operations with Agentic Ai
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