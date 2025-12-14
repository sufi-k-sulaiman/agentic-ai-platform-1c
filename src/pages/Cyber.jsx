import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, FileCheck, AlertTriangle, CheckCircle2, Download } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const certifications = [
  { name: 'SOC 2 Type II', status: 'Certified', icon: Shield },
  { name: 'ISO 27001', status: 'Certified', icon: FileCheck },
  { name: 'GDPR', status: 'Compliant', icon: CheckCircle2 },
  { name: 'HIPAA', status: 'Compliant', icon: CheckCircle2 },
  { name: 'PCI DSS', status: 'Level 1', icon: Shield },
  { name: 'CCPA', status: 'Compliant', icon: CheckCircle2 }
];

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption at Rest & in Transit',
    description: 'All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit.'
  },
  {
    icon: Eye,
    title: 'Zero-Knowledge Architecture',
    description: 'Your data is encrypted with keys only you control. We cannot access your sensitive information.'
  },
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Advanced DDoS protection, WAF, and intrusion detection systems protect our infrastructure.'
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    description: 'Real-time monitoring and automated threat detection across all systems.'
  },
  {
    icon: FileCheck,
    title: 'Regular Audits',
    description: 'Third-party security audits and penetration testing conducted quarterly.'
  },
  {
    icon: CheckCircle2,
    title: 'Access Controls',
    description: 'Role-based access control (RBAC) and multi-factor authentication (MFA) required.'
  }
];

const practices = [
  {
    title: 'Data Protection',
    items: [
      'End-to-end encryption',
      'Automatic data backup every 6 hours',
      'Multi-region redundancy',
      'Point-in-time recovery'
    ]
  },
  {
    title: 'Application Security',
    items: [
      'Secure development lifecycle (SDLC)',
      'Code reviews and static analysis',
      'Dependency scanning',
      'Bug bounty program'
    ]
  },
  {
    title: 'Infrastructure Security',
    items: [
      'Private VPC with network isolation',
      'Firewall rules and security groups',
      'Automated security patching',
      'Infrastructure as code'
    ]
  },
  {
    title: 'Compliance & Governance',
    items: [
      'Annual SOC 2 audits',
      'GDPR data processing agreements',
      'Regular compliance training',
      'Incident response procedures'
    ]
  }
];

export default function Cyber() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Security"
        description="Enterprise-grade cybersecurity with SOC 2, ISO 27001, GDPR, and HIPAA compliance. AES-256 encryption, zero-knowledge architecture, and 24/7 threat detection."
        url="/cyber"
        keywords={['security', 'compliance', 'SOC 2', 'ISO 27001', 'GDPR', 'data protection', 'encryption']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Cybersecurity at
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                our core
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Enterprise-grade security and compliance to protect your most sensitive data and AI workloads.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
              <Download className="w-5 h-5 mr-2" />
              Download security whitepaper
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We meet the highest industry standards for security and data protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{cert.name}</CardTitle>
                    <Badge className="bg-green-100 text-green-700">{cert.status}</Badge>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built with security in mind
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple layers of protection to keep your data safe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#8B2EE5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our security practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security measures across all layers of our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">{practice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {practice.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
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

      {/* Bug Bounty */}
      <section className="py-24 bg-gradient-to-br from-[#8B2EE5] to-[#6B21A8] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Responsible disclosure
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Found a security vulnerability? We reward responsible disclosure through our bug bounty program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8">
                Report a vulnerability
              </Button>
              <Button size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] border-2 border-white rounded-full px-8">
                View program details
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Security questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact our security team for inquiries or to request additional documentation
          </p>
          <a href="mailto:security@1cplatform.com" className="text-2xl font-semibold text-[#8B2EE5] hover:underline">
            security@1cplatform.com
          </a>
        </div>
      </section>
    </div>
  );
}