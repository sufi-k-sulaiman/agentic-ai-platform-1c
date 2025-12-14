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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Building2 className="w-4 h-4" />
                Government Agencies
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Modern government
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  powered by AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform public services with secure Agentic Ai that automates workflows, improves citizen experience, and reduces costs by 40%—while maintaining full compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                    <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Government agencies face unique challenges in delivering public services: constrained budgets, aging infrastructure, legacy systems that don't communicate, and citizen expectations for the same seamless digital experiences they receive from private sector services. Agencies process millions of permits, licenses, benefits applications, and citizen requests annually, yet many still rely on paper-based processes and manual workflows that create weeks-long delays. As governments strive to modernize, they must balance innovation with security, accessibility with compliance, and efficiency with public accountability—all while serving diverse populations with varying technological capabilities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Public sector data is often trapped in departmental silos, scattered across incompatible systems purchased over decades. A simple business license application might touch five different departments, requiring citizens to submit the same information multiple times while staff manually transfer data between systems. This fragmentation wastes taxpayer resources, frustrates citizens, and prevents agencies from gaining insights that could improve policy and service delivery. Meanwhile, government workers spend countless hours on routine tasks—fielding phone calls, processing forms, scheduling appointments—when they could be focusing on complex cases and community engagement that genuinely require human expertise.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI offers government agencies a path to modernization that works within existing constraints. Intelligent autonomous agents can integrate with legacy systems without requiring expensive replacements, creating a unified digital layer that connects disparate databases and automates workflows across departments. These AI systems can handle routine citizen inquiries 24/7 in multiple languages, automatically process standard permit applications, route complex cases to appropriate staff, and ensure compliance with regulations at every step. Unlike traditional automation that follows rigid rules, AI agents understand context, handle exceptions, and learn from every interaction to improve service delivery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Forward-thinking government agencies implementing Agentic AI are achieving transformative results while maintaining the security and accountability public service demands: 40% reduction in operational costs through automated workflows, 75% faster permit and license processing, 50% improvement in citizen satisfaction through instant 24/7 service, and 100% audit compliance through comprehensive logging of all automated decisions. These improvements free government workers to focus on complex cases and community engagement while ensuring that every citizen—regardless of technical proficiency—can access the services they need quickly and easily.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Government's Digital Divide</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Government agencies operate with technology infrastructure decades behind the private sector: permits that should take hours require weeks as paper applications move between departments for manual review and approval signatures. Citizens wait 45 minutes on hold to ask simple questions about forms or check application status, then get transferred three times before reaching someone who can help. Building permits involve visiting multiple offices, filling out redundant forms, and waiting for inspections that get scheduled manually weeks out. Business licenses require in-person visits, notarized documents, and payment by check because online systems don't exist or don't integrate with payment processing. Meanwhile, departments operate in silos: the tax assessor's office has different citizen information than the planning department, which uses different systems than public works.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Budget constraints exacerbate operational challenges: agencies cannot afford modern software or the consultants needed to integrate legacy systems, so they continue manual processes that waste taxpayer money. Compliance and transparency requirements demand extensive documentation, but tracking and reporting happens through spreadsheets and manual compilation taking weeks of staff time. Public records requests require employees to manually search file cabinets and databases across departments. Service quality suffers as experienced staff retire, taking institutional knowledge with them while new hires face inadequate training and outdated tools. Citizens increasingly expect government services to work like Amazon or their banking app—instant, online, 24/7—yet most agencies still require phone calls, office visits, and paper forms, creating frustration that erodes public trust in government effectiveness.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Digital Government Automation</h3>
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
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
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