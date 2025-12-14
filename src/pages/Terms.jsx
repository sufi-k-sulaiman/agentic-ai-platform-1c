import React from 'react';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export default function Terms() {
  return (
    <>
      <PageMeta 
        title="Terms of Service"
        description="Terms of Service for 1C Platform. Read our terms and conditions for using our AI platform and services."
        url="/terms"
        keywords={['terms of service', 'terms and conditions', 'legal', 'user agreement']}
      />
      <div className="bg-white min-h-screen">
        {/* Header */}
        <section className="pt-24 pb-12 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <BreadcrumbNav items={[{ label: 'Legal', page: 'Terms' }, { label: 'Terms of Service' }]} />
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              1C Platform Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated December 14, 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="space-y-12 text-gray-900 leading-relaxed">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Acceptance of Terms</h2>
                  <p className="text-lg">
                    By accessing and using 1C Platform ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Use License</h2>
                  <p className="text-lg mb-4">
                    Permission is granted to temporarily access and use the Service for personal or commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="space-y-2 text-lg pl-6">
                    <li>• Modify or copy the materials</li>
                    <li>• Use the materials for any commercial purpose without proper licensing</li>
                    <li>• Attempt to reverse engineer any software contained on the Service</li>
                    <li>• Remove any copyright or other proprietary notations from the materials</li>
                    <li>• Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">User Accounts</h2>
                  <p className="text-lg mb-4">
                    When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                  </p>
                  <p className="text-lg">
                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Acceptable Use</h2>
                  <p className="text-lg mb-4">
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
                  </p>
                  <ul className="space-y-2 text-lg pl-6">
                    <li>• Use the Service in any way that violates any applicable law or regulation</li>
                    <li>• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                    <li>• Use the Service to transmit any advertising or promotional material</li>
                    <li>• Impersonate or attempt to impersonate the Company, another user, or any other person or entity</li>
                    <li>• Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Intellectual Property</h2>
                  <p className="text-lg">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of 1C Platform and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Payment and Billing</h2>
                  <p className="text-lg mb-4">
                    For paid services, you agree to pay all fees and charges according to the billing terms in effect at the time. All fees are non-refundable unless otherwise stated. We reserve the right to change our fees at any time with reasonable notice.
                  </p>
                  <p className="text-lg">
                    If you fail to pay any fees when due, we may suspend or terminate your access to the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Service Availability</h2>
                  <p className="text-lg">
                    We strive to provide a reliable service but cannot guarantee that the Service will be available at all times. We may experience hardware, software, or other problems requiring maintenance or support that may result in interruptions, delays, or errors.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Limitation of Liability</h2>
                  <p className="text-lg">
                    In no event shall 1C Platform, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Disclaimer</h2>
                  <p className="text-lg">
                    Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Termination</h2>
                  <p className="text-lg">
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Governing Law</h2>
                  <p className="text-lg">
                    These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which 1C Platform operates, without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Changes to Terms</h2>
                  <p className="text-lg">
                    We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Us</h2>
                  <p className="text-lg mb-4">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="text-lg space-y-1">
                    <p>Email: legal@1cplatform.com</p>
                    <p>Address: 1C Platform Legal Department</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}