import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle10() {
  return (
    <>
      <PageMeta
        title="Data Security and Compliance"
        description="Understanding how 1cPlatform protects your data with encryption, access controls, and compliance with GDPR, SOC 2, and global security standards."
        url="/SupportArticle10"
        keywords={['data security', 'compliance', 'security standards', 'data protection', 'GDPR', 'SOC 2', 'encryption', 'data privacy']}
        article={{ datePublished: '2025-12-14', section: 'Security', tags: ['data security','compliance','security standards','data protection','GDPR','SOC 2','encryption','data privacy'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle10">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('HelpCenter')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[#8B2EE5] font-semibold mb-4">SECURITY</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Security and Compliance
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 11 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Understanding how 1cPlatform protects your data and maintains compliance with global security standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Encryption</h2>
            <p className="text-gray-700 mb-4">
              All data on 1cPlatform is protected with industry-standard encryption:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li><strong>In Transit:</strong> TLS 1.3 encryption for all data transfers</li>
              <li><strong>At Rest:</strong> AES-256 encryption for stored data</li>
              <li><strong>Key Management:</strong> Hardware security modules (HSMs) protect encryption keys</li>
              <li><strong>End-to-End:</strong> Optional client-side encryption for sensitive data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Compliance Certifications</h2>
            <p className="text-gray-700 mb-4">
              1cPlatform maintains compliance with major international standards:
            </p>
            <div className="grid gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">SOC 2 Type II</p>
                <p className="text-gray-700 text-sm">Annual audits verify security controls</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">ISO 27001</p>
                <p className="text-gray-700 text-sm">Information security management certification</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">GDPR Compliant</p>
                <p className="text-gray-700 text-sm">Full compliance with EU data protection regulations</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">HIPAA Eligible</p>
                <p className="text-gray-700 text-sm">BAA available for healthcare applications</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Access Controls</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Role-based access control (RBAC)</li>
              <li>Two-factor authentication (2FA)</li>
              <li>Single sign-on (SSO) support</li>
              <li>IP whitelisting</li>
              <li>Audit logs for all access</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Residency</h2>
            <p className="text-gray-700 mb-4">
              Choose where your data is stored:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>US (multiple regions)</li>
              <li>EU (Frankfurt, Ireland)</li>
              <li>Asia Pacific (Singapore, Tokyo)</li>
              <li>Custom regions for enterprise customers</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Retention and Deletion</h2>
            <p className="text-gray-700 mb-4">
              Control how long your data is retained:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Configure custom retention policies</li>
              <li>Automated data purging after specified periods</li>
              <li>Right to erasure (GDPR)</li>
              <li>Secure data deletion procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Incident Response</h2>
            <p className="text-gray-700 mb-4">
              Our security incident response process:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>24/7 security monitoring and alerting</li>
              <li>Immediate incident investigation</li>
              <li>Rapid containment and mitigation</li>
              <li>Transparent communication with affected customers</li>
              <li>Post-incident review and improvements</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security Best Practices</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Enable 2FA for all team members</li>
              <li>Regularly rotate API keys</li>
              <li>Use strong, unique passwords</li>
              <li>Review access logs periodically</li>
              <li>Keep software dependencies updated</li>
              <li>Report security concerns immediately</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">🔒 Responsible Disclosure</p>
              <p className="text-gray-700">
                If you discover a security vulnerability, please report it to security@1cplatform.com. We have a bug bounty program for eligible submissions.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <ThumbsUp className="w-4 h-4" />
                Yes
              </Button>
              <Button variant="outline" className="gap-2">
                <ThumbsDown className="w-4 h-4" />
                No
              </Button>
            </div>
          </div>
        </div>
      </section>
      </InternalLinker>
    </div>
    </>
  );
}