import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, TrendingDown, Database, Workflow, DollarSign, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    icon: DollarSign,
    title: 'Administrative Burden',
    problem: 'Staff spending 70% of time on paperwork, billing, scheduling instead of patient care',
    solution: 'AI automates appointment scheduling, insurance verification, and documentation—freeing up 50% of admin time'
  },
  {
    icon: Database,
    title: 'Fragmented Patient Data',
    problem: 'Medical records across EMRs, labs, pharmacies—incomplete patient view causing errors',
    solution: 'Agentic AI aggregates data from all sources, creating unified patient profiles with complete medical history'
  },
  {
    icon: Workflow,
    title: 'Manual Workflows',
    problem: 'Appointment reminders, prescription refills, follow-ups—all manual, time-consuming processes',
    solution: 'Autonomous agents handle routine patient communications, medication management, and care coordination'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    problem: 'Constant risk of data breaches, manual audit trails, complex compliance requirements',
    solution: 'AI ensures end-to-end encryption, automated compliance monitoring, and instant audit report generation'
  }
];

const solutions = [
  {
    category: 'Patient Care',
    items: [
      '24/7 AI triage and symptom assessment',
      'Automated appointment scheduling and reminders',
      'Post-discharge follow-up and care coordination',
      'Personalized health recommendations based on history'
    ]
  },
  {
    category: 'Clinical Operations',
    items: [
      'Automated medical documentation and coding',
      'Intelligent prescription management and refills',
      'Lab result processing and patient notifications',
      'Clinical decision support with evidence-based insights'
    ]
  },
  {
    category: 'Finance & Billing',
    items: [
      'Automated insurance verification and pre-authorization',
      'Real-time claims processing and denial management',
      'Revenue cycle optimization and collections',
      'Predictive analytics for financial planning'
    ]
  },
  {
    category: 'Compliance & Security',
    items: [
      'HIPAA-compliant data encryption and access control',
      'Automated audit trails and compliance reporting',
      'Real-time security monitoring and threat detection',
      'Patient consent management and data privacy controls'
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
                Transform patient care with secure Agentic AI that automates admin work, improves outcomes, and reduces costs by 40%—all while maintaining full HIPAA compliance.
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
              How Agentic AI transforms healthcare operations
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
              Secure, compliant automation across all healthcare operations
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
              Join leading healthcare providers improving outcomes with secure Agentic AI
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