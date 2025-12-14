import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'acceptance', title: 'Acceptance of Terms' },
  { id: 'account', title: 'Account Registration' },
  { id: 'services', title: 'Use of Services' },
  { id: 'prohibited', title: 'Prohibited Activities' },
  { id: 'intellectual', title: 'Intellectual Property' },
  { id: 'payment', title: 'Payment Terms' },
  { id: 'termination', title: 'Termination' },
  { id: 'disclaimer', title: 'Disclaimer of Warranties' },
  { id: 'limitation', title: 'Limitation of Liability' },
  { id: 'indemnification', title: 'Indemnification' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'changes', title: 'Changes to Terms' },
  { id: 'contact', title: 'Contact Us' }
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <PageMeta 
        title="Terms of Service"
        description="1cPlatform Terms of Service. Review the terms and conditions for using our platform."
        url="/terms"
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Terms of Service
                </h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        activeSection === section.id
                          ? 'text-[#8B2EE5] font-medium bg-purple-50 rounded-lg'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Terms of Service
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Effective Date: January 1, 2025
                </p>
                <p className="text-lg text-gray-600 mb-16">
                  Last Updated: January 1, 2025
                </p>

                {/* Overview */}
                <section id="overview" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      These Terms of Service ("Terms") govern your access to and use of 1cPlatform's services, websites, and applications (collectively, the "Services"). Please read these Terms carefully before using our Services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Services.
                    </p>
                  </div>
                </section>

                {/* Acceptance */}
                <section id="acceptance" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      By creating an account or using any part of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
                    </p>
                  </div>
                </section>

                {/* Account Registration */}
                <section id="account" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Registration</h2>
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Creation</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To use certain features of our Services, you must register for an account. You agree to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain and update your information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Accept responsibility for all activities under your account</li>
                      <li>Notify us immediately of any unauthorized access</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Eligibility</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You must be at least 18 years old to create an account. By creating an account, you represent that you meet this age requirement.
                    </p>
                  </div>
                </section>

                {/* Use of Services */}
                <section id="services" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Services</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your internal business purposes.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>All content and data you submit to our Services</li>
                      <li>Maintaining appropriate security measures for your account</li>
                      <li>Compliance with all applicable laws and regulations</li>
                      <li>Your employees' and contractors' use of the Services</li>
                    </ul>
                  </div>
                </section>

                {/* Prohibited Activities */}
                <section id="prohibited" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Prohibited Activities</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree not to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Violate any laws, regulations, or third-party rights</li>
                      <li>Use the Services for any unauthorized or illegal purpose</li>
                      <li>Interfere with or disrupt the Services or servers</li>
                      <li>Attempt to gain unauthorized access to any systems</li>
                      <li>Transmit viruses, malware, or harmful code</li>
                      <li>Engage in any form of automated data collection</li>
                      <li>Reverse engineer or decompile the Services</li>
                      <li>Remove or alter any proprietary notices</li>
                      <li>Use the Services to compete with us</li>
                      <li>Share your account credentials with others</li>
                    </ul>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Property</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The Services and all content, features, and functionality are owned by 1cPlatform and are protected by copyright, trademark, and other intellectual property laws.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Content</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You retain ownership of any content you submit to the Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your content solely to provide the Services.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Feedback</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you provide us with feedback or suggestions, we may use them without any obligation to compensate you.
                    </p>
                  </div>
                </section>

                {/* Payment Terms */}
                <section id="payment" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Fees</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Access to certain features may require payment of fees. You agree to pay all applicable fees as described in your subscription plan.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Billing</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Fees are billed in advance on a recurring basis. You authorize us to charge your payment method for all fees incurred.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Refunds</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Fees are non-refundable except as required by law or as explicitly stated in your subscription agreement.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Price Changes</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may change our fees at any time. We will provide you with reasonable notice of any fee changes.
                    </p>
                  </div>
                </section>

                {/* Termination */}
                <section id="termination" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">By You</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You may terminate your account at any time by following the cancellation process in your account settings.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">By Us</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We may suspend or terminate your access to the Services at any time, with or without cause, with or without notice. Reasons may include violation of these Terms, non-payment, or illegal activity.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Effect of Termination</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Upon termination, your right to use the Services will immediately cease. We may delete your data in accordance with our retention policies.
                    </p>
                  </div>
                </section>

                {/* Disclaimer */}
                <section id="disclaimer" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer of Warranties</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Warranties of merchantability and fitness for a particular purpose</li>
                      <li>Non-infringement of third-party rights</li>
                      <li>Uninterrupted or error-free operation</li>
                      <li>Accuracy, reliability, or completeness of content</li>
                      <li>Security of data transmission</li>
                    </ul>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section id="limitation" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, 1CPLATFORM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
                    </p>
                  </div>
                </section>

                {/* Indemnification */}
                <section id="indemnification" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      You agree to indemnify, defend, and hold harmless 1cPlatform and its affiliates from any claims, damages, losses, and expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
                    </p>
                  </div>
                </section>

                {/* Governing Law */}
                <section id="governing-law" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Any disputes arising from these Terms or the Services shall be resolved exclusively in the state or federal courts located in San Francisco, California.
                    </p>
                  </div>
                </section>

                {/* Changes to Terms */}
                <section id="changes" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We reserve the right to modify these Terms at any time. When we make changes, we will update the "Last Updated" date at the top of this page.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Continued use of our Services after changes constitutes acceptance of the updated Terms. If you do not agree to the changes, you must stop using the Services.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have questions about these Terms, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-2"><strong>1cPlatform Legal Team</strong></p>
                      <p className="text-gray-700 mb-2">Email: legal@1cplatform.com</p>
                      <p className="text-gray-700">Address: 1 Infinite Loop, Cupertino, CA 95014</p>
                    </div>
                  </div>
                </section>

                {/* Footer Links */}
                <div className="pt-12 border-t border-gray-200">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <Link to={createPageUrl('Privacy')} className="text-[#8B2EE5] hover:underline">
                      Privacy Policy
                    </Link>
                    <Link to={createPageUrl('Cookies')} className="text-[#8B2EE5] hover:underline">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}