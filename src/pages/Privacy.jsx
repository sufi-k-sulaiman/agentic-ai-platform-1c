import React from 'react';
import { motion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';

export default function Privacy() {
  return (
    <>
      <PageMeta 
        title="Privacy Policy"
        description="Privacy Policy for 1C Platform. Learn how we collect, use, and protect your personal information."
        url="/privacy"
        keywords={['privacy policy', 'data protection', 'GDPR', 'privacy', 'data security']}
      />
      <div className="bg-white">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: December 14, 2025
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    At 1C Platform ("we", "us", or "our"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may collect personal information that you provide to us such as:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Company name and job title</li>
                    <li>Billing and payment information</li>
                    <li>Account credentials</li>
                    <li>Any other information you choose to provide</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    When you use our Service, we automatically collect certain information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Log data (IP address, browser type, pages visited)</li>
                    <li>Device information (device type, operating system)</li>
                    <li>Usage data (features used, time spent on Service)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide, operate, and maintain our Service</li>
                    <li>Improve, personalize, and expand our Service</li>
                    <li>Process your transactions and manage your account</li>
                    <li>Communicate with you, including customer service and support</li>
                    <li>Send you technical notices, updates, and security alerts</li>
                    <li>Provide marketing communications (with your consent)</li>
                    <li>Monitor and analyze usage and trends</li>
                    <li>Detect, prevent, and address technical issues and security threats</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Share Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may share your information in the following situations:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>With Your Consent:</strong> We may share your information with your explicit consent</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    We do not sell your personal information to third parties.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We implement appropriate technical and organizational security measures to protect your information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and audits</li>
                    <li>Access controls and authentication requirements</li>
                    <li>Employee training on data protection</li>
                    <li>Compliance with industry standards (SOC 2, ISO 27001)</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your information</li>
                    <li><strong>Objection:</strong> Object to processing of your information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    To exercise these rights, please contact us at privacy@1cplatform.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to track activity on our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    For more information about our use of cookies, please see our Cookie Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Your information may be transferred to and maintained on servers located outside of your country where data protection laws may differ. We take appropriate safeguards to ensure your information receives adequate protection in accordance with this Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete that information.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Third-Party Links</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Email: privacy@1cplatform.com<br />
                    Data Protection Officer: dpo@1cplatform.com<br />
                    Address: 1C Platform Privacy Department
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}