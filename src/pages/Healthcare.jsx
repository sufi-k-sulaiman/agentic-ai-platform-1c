import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, TrendingDown, Database, Workflow, DollarSign, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import VerticalAnalytics from '@/components/VerticalAnalytics';

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
      '24/7 Agentic Ai triage and symptom assessment with emergency detection and routing',
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
      <PageMeta 
        title="Healthcare AI Solutions"
        description="HIPAA-compliant AI for healthcare reducing admin time by 50% and costs by 40%. Automated documentation, billing, patient care coordination."
        url="/healthcare"
        keywords={['healthcare AI', 'medical automation', 'HIPAA compliant', 'clinical documentation', 'patient care']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Heart className="w-4 h-4" />
                Healthcare
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                HIPAA-compliant
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  AI for healthcare
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform patient care with secure Agentic AI that automates administrative work, improves clinical outcomes, and reduces operational costs by 40%—all while maintaining full HIPAA compliance and enterprise-grade security. Free your clinical staff to focus on what matters most: exceptional patient care.
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
              Healthcare
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Healthcare represents the largest sector of most developed economies—18% of U.S. GDP or $4.3 trillion annually—encompassing hospitals, physician practices, specialty care centers, diagnostic facilities, pharmacies, and long-term care providers. The industry operates under unique constraints: regulatory requirements (HIPAA, meaningful use, quality reporting) demand extensive documentation; reimbursement models from Medicare, Medicaid, and private insurers create complex billing requirements; and patient safety imperatives mean errors have life-or-death consequences. Healthcare economics face existential challenges: costs rise 5-8% annually (double general inflation) driven by aging populations, chronic disease prevalence, expensive treatments, and administrative overhead consuming 25-30% of spending. Providers squeeze between declining reimbursements and rising expenses, with hospital operating margins averaging just 2-3%. The industry desperately needs efficiency improvements, yet adoption of operational technology lags other sectors by a decade due to regulatory constraints, integration complexity, and risk-averse culture prioritizing safety over innovation.
            </p>
            <p>
              Healthcare business models vary by setting but share common economics: fee-for-service models pay providers per procedure or visit, creating incentives for volume over outcomes; capitated models pay fixed amounts per patient regardless of utilization, shifting risk to providers; and value-based care ties reimbursement to quality metrics and outcomes. Hospitals generate revenue from patient care services, ancillary services (lab, imaging, pharmacy), and quality incentive payments, while facing costs for clinical staff (nurses, physicians), support staff, supplies, technology, facilities, and compliance. Physician practices operate on slim 10-15% margins, with revenue from patient visits and procedures offset by staff costs, malpractice insurance, EMR systems, and administrative overhead. Improving profitability requires increasing patient volume (seeing more patients per day), reducing costs (streamlining operations, minimizing waste), improving reimbursement (better coding, reducing denials), or shifting to value-based models capturing savings from better outcomes. AI promises transformation by automating administrative burdens that consume 50% of clinician time, enabling providers to see more patients while improving care quality and satisfaction.
            </p>
            <p>
              Healthcare technology centers on electronic health record (EHR) systems (Epic, Cerner, Meditech) managing patient charts, orders, documentation, and clinical workflows. These integrate with practice management software handling scheduling and billing, laboratory information systems processing test orders and results, radiology PACS storing and managing medical images, pharmacy systems managing medications and drug interactions, and patient portals enabling online access to records and communications. Interoperability remains challenging despite FHIR standards—health information exchanges enable data sharing but implementation varies widely. Clinical decision support systems provide alerts about drug interactions, preventive care gaps, and clinical guidelines, though alert fatigue means providers ignore 90% of notifications. Telehealth platforms expanded dramatically during COVID, enabling remote consultations, while remote patient monitoring devices track vitals for chronic disease management. AI applications include natural language processing to assist documentation, predictive analytics identifying at-risk patients, and image analysis supporting radiology and pathology diagnosis. However, most AI tools require human oversight and operate as assistants rather than autonomous agents.
            </p>
            <p>
              Agentic AI transforms healthcare delivery by deploying autonomous agents that eliminate administrative burden while enhancing clinical care. Documentation agents listen to patient encounters and automatically generate clinical notes, update problem lists, suggest evidence-based orders, and complete quality measure documentation—reducing physician documentation time by 70% while improving note quality and billing accuracy. Medical coding agents analyze clinical documentation to assign accurate codes, identify documentation gaps preventing optimal reimbursement, and flag potential denials before claims submit—improving first-pass acceptance from 65% to 95%. Prior authorization agents automatically compile required clinical information, submit requests electronically, track status, and escalate delays—reducing authorization time from weeks to hours while freeing staff for patient-facing work. Care coordination agents monitor every patient, ensuring discharge summaries reach primary care physicians, lab results trigger appropriate follow-up, medications reconcile across providers, and patients receive proactive outreach about preventive care and chronic disease management. Patient service agents handle routine inquiries instantly about bills, test results, and prescription refills via any channel. Clinical staff finally practice at the top of their license, focusing on complex clinical decisions and patient relationships rather than paperwork, while patients receive more attentive care, faster service, and better outcomes—all while administrative costs drop 40% enabling healthcare organizations to serve more patients sustainably.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Healthcare Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Healthcare drowns in administrative burden that steals time from patient care: physicians spend 2 hours documenting for every 1 hour with patients, clicking through EHR screens to satisfy billing requirements rather than focusing on clinical decisions. Nurses spend 25% of their shifts on documentation, medication reconciliation, and care coordination phone calls rather than direct patient care. Prior authorizations for procedures, medications, and imaging require staff to compile clinical notes, submit forms, and spend hours on hold with insurance companies—delaying necessary care by days or weeks. Medical coding requires specialized staff to translate physician notes into billing codes, a process prone to errors that cause claim denials and revenue loss. Patient scheduling involves phone tag, manual calendar management, and insurance verification—creating friction that drives patients to competitors offering online booking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Care coordination breaks down across fragmented systems: patients discharged from hospitals have follow-up appointments missed because primary care physicians never receive discharge summaries. Lab results and imaging reports sit unread in different systems, requiring duplicate tests that waste money and expose patients to unnecessary radiation. Medication lists become inaccurate as patients see multiple providers who prescribe and discontinue drugs in separate systems. Patient inquiries about bills, test results, and prescription refills overwhelm phone lines and patient portals, requiring staff to manually look up information across multiple databases. The result is dangerous care gaps, frustrated patients and staff, and administrative costs consuming 25-30% of healthcare spending—money that should fund patient care instead of paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Patient scheduled', description: '8 appointments confirmed', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:45 AM', action: 'Claim processed', description: '25 claims submitted successfully', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:20 AM', action: 'Prior auth approved', description: 'Automated in 2 hours', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:45 AM', action: 'At-risk patient flagged', description: 'Follow-up scheduled', icon: 'AlertCircle', color: 'text-orange-500' }
        ],
        goalsProgress: [
          { goal: 'Admin Time Saved', current: 880, target: 1000, percentage: 88, color: 'bg-purple-500' },
          { goal: 'Patient Satisfaction', current: 920, target: 1000, percentage: 92, color: 'bg-green-500' },
          { goal: 'Claim Approval Rate', current: 95, target: 100, percentage: 95, color: 'bg-blue-500' },
          { goal: 'HIPAA Compliance', current: 100, target: 100, percentage: 100, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Documentation Time Reduced', description: 'Average note time down 50%...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'No-Show Reduction', description: 'AI reminders cut no-shows by 45%...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Billing Improvement', description: 'First-pass claim rate at 95%...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Care Gap Identified', description: '12 patients need preventive screenings...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      <section className="py-24 bg-gray-50">
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
              Ready for AI-powered healthcare?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading healthcare providers improving patient outcomes, reducing costs, and enhancing clinician satisfaction with secure Agentic AI.
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