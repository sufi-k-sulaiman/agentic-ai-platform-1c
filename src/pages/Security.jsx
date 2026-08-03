import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, KeyRound, Server, Cloud, AlertTriangle, CheckCircle2, Fingerprint, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';
import RelatedContent from '@/components/seo/RelatedContent';
import { Button } from '@/components/ui/button';

const securityFeatures = [
  { icon: Lock, title: 'End-to-End Encryption', desc: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256), ensuring your information is never exposed.' },
  { icon: KeyRound, title: 'Zero-Trust Architecture', desc: 'Every request is authenticated and authorized, regardless of source. No implicit trust between services.' },
  { icon: Fingerprint, title: 'Multi-Factor Authentication', desc: 'SAML 2.0 SSO, OAuth 2.0, and TOTP support with hardware key compatibility for enterprise-grade access control.' },
  { icon: Eye, title: 'Audit Logging', desc: 'Comprehensive, immutable audit trails for every action—user logins, data access, configuration changes, and API calls.' },
  { icon: Server, title: 'Data Isolation', desc: 'Multi-tenant isolation with per-customer encryption keys and logical data partitioning.' },
  { icon: AlertTriangle, title: 'Threat Detection', desc: 'AI-powered anomaly detection monitors for suspicious activity in real-time with automated response.' },
];

const certifications = [
  { name: 'SOC 2 Type II', desc: 'Audited controls for security, availability, confidentiality, and privacy.' },
  { name: 'ISO 27001', desc: 'International standard for information security management systems.' },
  { name: 'GDPR', desc: 'Full compliance with EU General Data Protection Regulation.' },
  { name: 'HIPAA', desc: 'Healthcare data protection with Business Associate Agreements available.' },
  { name: 'CCPA', desc: 'California Consumer Privacy Act compliance for data rights.' },
  { name: 'PCI DSS', desc: 'Payment Card Industry Data Security Standard compliant.' },
];

const dataPractices = [
  'We never train on your data without explicit consent',
  'You own your data and can export or delete it anytime',
  'Data residency options for EU, US, and APAC regions',
  'Role-based access control with fine-grained permissions',
  'Automated data retention policies with configurable TTLs',
  'Regular third-party penetration testing and security audits',
];

export default function Security() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Security - 1C Platform Enterprise Security & Compliance"
        description="Enterprise-grade security for 1C Platform. Learn about our encryption, zero-trust architecture, compliance certifications (SOC 2, ISO 27001, GDPR, HIPAA), data protection, and security best practices."
        url="/Security"
        keywords={['security', 'data protection', 'encryption', 'compliance', 'SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'zero trust', 'enterprise security']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Security', url: '/Security' }]}
      />

      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Security' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> Enterprise-Grade Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Data, Protected by Design</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Security is not a feature we bolt on—it is the foundation of everything we build. From encryption to compliance, every layer of the 1C Platform is engineered to protect your data, your users, and your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <InternalLinker currentPage="Security">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {securityFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all"
                >
                  <feature.icon className="w-10 h-10 text-[#8B2EE5] mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </InternalLinker>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-12 mb-20">
            <div className="text-center mb-12">
              <FileCheck className="w-12 h-12 text-[#8B2EE5] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compliance Certifications</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Independently audited and certified to meet the world's most stringent security and privacy standards.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-bold text-gray-900">{cert.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ScrollText className="w-8 h-8 text-[#8B2EE5]" />
                <h2 className="text-3xl font-bold text-gray-900">Data Protection Practices</h2>
              </div>
              <ul className="space-y-4">
                {dataPractices.map((practice, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-8 h-8 text-[#8B2EE5]" />
                <h2 className="text-3xl font-bold text-gray-900">Infrastructure Security</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">99.99% Uptime SLA</h3>
                  <p className="text-sm text-gray-600">Multi-region deployment with automatic failover ensures continuous availability.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">DDoS Protection</h3>
                  <p className="text-sm text-gray-600">Layer 3-7 DDoS mitigation with traffic scrubbing and rate limiting.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Vulnerability Management</h3>
                  <p className="text-sm text-gray-600">Continuous vulnerability scanning with 24-hour patch SLAs for critical issues.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#6D28D9] rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your AI Transformation?</h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">Talk to our security team about your specific compliance and data protection requirements.</p>
            <Link to={createPageUrl('ContactUs')}>
              <Button size="lg" className="bg-white text-[#8B2EE5] hover:bg-gray-100">Contact Security Team</Button>
            </Link>
          </div>
        </div>
      </section>
      <RelatedContent currentPage="Security" manualPages={['Cyber', 'BlogAgenticAISecurity', 'BlogAgenticAISecurityPrivacy', 'BlogSecurityComplianceAI']} title="Related Resources" />
    </div>
  );
}