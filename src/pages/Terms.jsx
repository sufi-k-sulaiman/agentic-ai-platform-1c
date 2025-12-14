import React from 'react';
import { motion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';

export default function Terms() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Terms of Service"
        description="Terms of Service for 1C Platform. Review our terms and conditions for using our AI platform and services."
        url="/terms"
        keywords={['terms of service', 'terms and conditions', 'legal', 'user agreement']}
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
              Terms of Service
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using 1C Platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              1C Platform provides AI-powered enterprise solutions including Agentic AI, automation tools, cloud infrastructure, and related services. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Use the Service to transmit any malicious code or harmful content</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by 1C Platform and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2>6. Payment Terms</h2>
            <p>
              Certain aspects of the Service are provided for a fee. You agree to pay all fees in accordance with the pricing and payment terms presented to you. All fees are non-refundable unless otherwise stated.
            </p>

            <h2>7. Data and Privacy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy. We collect, use, and protect your data as described in our Privacy Policy.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, 1C Platform shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless 1C Platform from any claims, damages, losses, liabilities, and expenses arising out of your use of the Service or violation of these Terms.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 1C Platform operates, without regard to its conflict of law provisions.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes. Your continued use of the Service after changes constitutes acceptance of the new Terms.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: legal@1cplatform.com
              <br />
              Address: 1C Platform Legal Department
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}