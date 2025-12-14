import React from 'react';
import { motion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';

export default function Privacy() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Privacy Policy"
        description="Privacy Policy for 1C Platform. Learn how we collect, use, and protect your personal information."
        url="/privacy"
        keywords={['privacy policy', 'data protection', 'GDPR', 'data privacy', 'personal information']}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: December 14, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              At 1C Platform, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Account credentials</li>
              <li>Company information</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3>Usage Data</h3>
            <p>We automatically collect certain information when you use our Service:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>API usage and performance metrics</li>
              <li>Log data and error reports</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Monitor and analyze usage trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Storage and Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. Your data is encrypted in transit and at rest. We are SOC 2 Type II certified and comply with GDPR, HIPAA, and other relevant regulations.
            </p>

            <h2>5. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service. You can control cookies through your browser settings. For more information, see our Cookie Policy.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2>9. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our Service is not intended for children under 16. We do not knowingly collect personal information from children under 16.
            </p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@1cplatform.com
              <br />
              Data Protection Officer: dpo@1cplatform.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}