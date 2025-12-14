import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, TrendingDown, Database, Workflow, DollarSign, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: DollarSign,
    title: 'Administrative Burden',
    problem: 'Clinical staff spending 70% of their time on paperwork, documentation, and administrative tasks instead of direct patient care. Insurance verification takes 20-30 minutes per patient, creating delays and frustration. Manual billing and coding processes result in 15-20% claim denial rates due to errors. Prior authorization requests take 3-5 days of back-and-forth with insurers. Appointment scheduling involves multiple phone calls and system checks, with 30% of slots going unfilled due to coordination challenges.',
    solution: 'AI automates appointment scheduling with intelligent conflict resolution, patient preference learning, and automated reminders reducing no-shows by 45%. Insurance verification happens instantly through automated API integration, checking eligibility and benefits in real-time. Smart documentation systems use natural language processing to generate clinical notes from conversations, reducing documentation time by 50%. Automated coding and billing uses AI to assign correct codes, verify compliance, and submit clean claims, improving first-pass approval rates to 95% and freeing up 50% of admin time for patient care.'
  },
  {
    icon: Database,
    title: 'Fragmented Patient Data',
    problem: 'Medical records scattered across multiple EMR systems, with 60% of patients having information in 3+ different systems. Lab results, imaging, pharmacy records, and specialist notes exist in separate databases with poor interoperability. Care teams lack complete visibility into patient history, leading to duplicate tests costing $210 billion annually. Critical information is missed during care decisions, contributing to 30% of adverse medical events. Patient data from wearables, remote monitoring, and patient-reported outcomes is not integrated into clinical workflows.',
    solution: 'Agentic AI aggregates data from all sources—EMRs, labs, pharmacies, wearables, and health information exchanges—creating unified patient profiles accessible at the point of care. Advanced analytics automatically identify patterns, flag potential drug interactions, and highlight concerning trends in vital signs or lab values. Predictive models assess disease progression risk, enabling early intervention. Complete longitudinal health records provide clinicians with comprehensive context for every decision, reducing medical errors by 40% and eliminating 85% of duplicate testing.'
  },
  {
    icon: Workflow,
    title: 'Manual Workflows',
    problem: 'Appointment reminders sent manually via phone calls, with staff spending 3-4 hours daily on this task alone. Prescription refill requests require nurses to review charts, contact providers, and coordinate with pharmacies—taking 15-20 minutes per request. Patient follow-ups after discharge depend on manual tracking, with 40% of high-risk patients never receiving recommended follow-up. Care coordination between specialists, primary care, and hospitals involves endless phone calls, faxes, and emails with critical information falling through the cracks.',
    solution: 'Autonomous agents handle all routine patient communications via SMS, email, voice calls, and patient portal messages—sending appointment reminders, medication refill notifications, and follow-up instructions automatically. Intelligent medication management auto-approves appropriate refills based on prescription history and automatically routes complex requests to appropriate providers with complete context. Post-discharge care coordination tracks patients automatically, scheduling follow-ups, monitoring for concerning symptoms via remote monitoring, and alerting care teams to intervention opportunities. Automated care navigation guides patients through their entire care journey, improving adherence by 60%.'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    problem: 'Constant risk of data breaches with healthcare experiencing 2x more security incidents than other industries, averaging $10.9M per breach. Manual audit trail maintenance across dozens of systems is incomplete and error-prone, creating compliance gaps. Staff training on privacy practices is inconsistent, with 90% of breaches caused by human error. Patient consent management is paper-based and difficult to track, creating liability risks. Compliance reporting for HIPAA, HITECH, and state regulations requires weeks of manual data collection and analysis.',
    solution: 'AI ensures end-to-end encryption of all patient data at rest and in transit, with automated key rotation and access monitoring detecting suspicious patterns in milliseconds. Comprehensive audit trails automatically capture every data access, modification, and deletion across all systems with tamper-proof blockchain verification. Automated compliance monitoring continuously validates that all controls are functioning correctly, staff certifications are current, and policies are being followed. Intelligent consent management tracks patient preferences, automates disclosure logging, and ensures data sharing complies with authorizations. Automated report generation produces audit-ready compliance documentation instantly, achieving 100% audit success rates.'
  }
];

const solutions = [
  {
    category: 'Patient Care',
    items: [
      '24/7 AI triage and symptom assessment with emergency detection and routing',
      'Automated appointment scheduling with intelligent slot optimization and no-show prediction',
      'Post-discharge follow-up and care coordination with risk stratification',
      'Personalized health recommendations based on complete medical history and genomics',
      'Remote patient monitoring with AI analyzing vitals and alerting to concerning trends',
      'Care gap identification suggesting preventive screenings and interventions'
    ]
  },
  {
    category: 'Clinical Operations',
    items: [
      'Automated medical documentation with ambient listening and note generation',
      'Intelligent prescription management with drug interaction checking and auto-refills',
      'Lab result processing with automated patient notifications and care team alerts',
      'Clinical decision support providing evidence-based treatment recommendations',
      'Automated prior authorization with intelligent appeals and peer-to-peer coordination',
      'Bed management optimization predicting admissions and optimizing discharge timing'
    ]
  },
  {
    category: 'Finance & Billing',
    items: [
      'Automated insurance verification with real-time eligibility and benefit checking',
      'Intelligent medical coding with compliance checking and denial prevention',
      'Real-time claims processing with automated error detection and correction',
      'Denial management with automated appeals including supporting documentation',
      'Revenue cycle optimization identifying underpayments and coding opportunities',
      'Predictive analytics forecasting collections and identifying high-risk accounts'
    ]
  },
  {
    category: 'Compliance & Security',
    items: [
      'HIPAA-compliant data encryption with automated key management and access controls',
      'Comprehensive audit trails with blockchain verification and instant compliance reports',
      'Real-time security monitoring detecting breaches and suspicious access patterns',
      'Automated vulnerability scanning with patch management coordination',
      'Patient consent management tracking preferences and authorization compliance',
      'Staff training management ensuring certifications and privacy education compliance'
    ]
  }
];

const metrics = [
  { value: '50%', label: 'Admin Time Saved', description: 'More time for patient care' },
  { value: '40%', label: 'Cost Reduction', description: 'Operational efficiency gains' },
  { value: '95%', label: 'Patient Satisfaction', description: 'Improved experience' },
  { value: '100%', label: 'HIPAA Compliant', description: 'Enterprise-grade security' }
];

export default function Healthcare() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Heart className="w-4 h-4" />
                Healthcare
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                HIPAA-compliant
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  AI for healthcare
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform patient care with secure Agentic AI that automates administrative work, improves clinical outcomes, and reduces operational costs by 40%—all while maintaining full HIPAA compliance and enterprise-grade security. Free your clinical staff to focus on what matters most: exceptional patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Request demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  Security whitepaper
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800" alt="Healthcare" className="rounded-3xl shadow-2xl" />
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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Healthcare challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic AI transforms healthcare operations while maintaining the highest standards of patient safety, data security, and regulatory compliance.
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

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              End-to-end healthcare AI
            </h2>
            <p className="text-xl text-gray-600">
              Secure, compliant automation across all healthcare operations from patient engagement to clinical documentation and revenue cycle management.
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
              Ready for AI-powered healthcare?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading healthcare providers improving patient outcomes, reducing costs, and enhancing clinician satisfaction with secure Agentic AI.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Schedule consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}