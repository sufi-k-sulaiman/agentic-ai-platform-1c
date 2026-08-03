import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'information-we-collect', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'sharing', title: 'Information Sharing and Disclosure' },
  { id: 'security', title: 'Data Security' },
  { id: 'your-rights', title: 'Your Rights and Choices' },
  { id: 'retention', title: 'Data Retention' },
  { id: 'international', title: 'International Data Transfers' },
  { id: 'children', title: 'Children\'s Privacy' },
  { id: 'changes', title: 'Changes to This Policy' },
  { id: 'contact', title: 'Contact Us' }
];

export default function Privacy() {
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
        title="Privacy Policy"
        description="1cPlatform Privacy Policy. Learn how we collect, use, and protect your personal information."
        url="/privacy"
      />
            <InternalLinker currentPage="Privacy">
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Privacy Policy
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
                  Privacy Policy
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
                      At 1cPlatform, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use our services.
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section id="information-we-collect" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Information You Provide</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We collect information that you voluntarily provide when you:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                      <li>Create an account or register for our services</li>
                      <li>Submit forms or communicate with us</li>
                      <li>Participate in surveys or feedback requests</li>
                      <li>Subscribe to newsletters or marketing communications</li>
                      <li>Use our customer support services</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect Automatically</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you use our services, we may automatically collect:
                    </p>
                    <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (pages viewed, features used, time spent)</li>
                      <li>Log data (access times, error logs, performance data)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Information from Third Parties</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may receive information about you from third-party services, analytics providers, and advertising partners when you interact with our services through their platforms.
                    </p>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section id="how-we-use" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Respond to your comments, questions, and support requests</li>
                      <li>Send you technical notices, updates, and security alerts</li>
                      <li>Communicate about products, services, and events</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Detect, prevent, and address fraud and security issues</li>
                      <li>Comply with legal obligations and enforce our terms</li>
                      <li>Personalize your experience and provide relevant content</li>
                    </ul>
                  </div>
                </section>

                {/* Information Sharing */}
                <section id="sharing" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We do not sell your personal information. We may share your information in the following circumstances:
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Providers</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We share information with vendors and service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer service.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Transfers</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Requirements</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We may disclose information if required by law or in response to valid requests by public authorities.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Protection of Rights</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may disclose information when we believe it is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or respond to government requests.
                    </p>
                  </div>
                </section>

                {/* Data Security */}
                <section id="security" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments and audits</li>
                      <li>Access controls and authentication mechanisms</li>
                      <li>Employee training on data protection</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-6">
                      However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Depending on your location, you may have the following rights:
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Access and Portability</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You can request access to your personal information and receive a copy in a portable format.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Correction</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You can request that we correct inaccurate or incomplete information.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Deletion</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You can request deletion of your personal information, subject to certain exceptions.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Opt-Out</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Object to Processing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can object to certain types of processing, including direct marketing and profiling.
                    </p>
                  </div>
                </section>

                {/* Data Retention */}
                <section id="retention" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </div>
                </section>

                {/* International Transfers */}
                <section id="international" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We take appropriate measures to ensure that your information receives an adequate level of protection in the jurisdictions where we process it.
                    </p>
                  </div>
                </section>

                {/* Children's Privacy */}
                <section id="children" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      If you believe we have collected information from a child under 13, please contact us immediately so we can delete it.
                    </p>
                  </div>
                </section>

                {/* Changes to Policy */}
                <section id="changes" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may update this Privacy Policy from time to time. When we make changes, we will update the "Last Updated" date at the top of this page.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We encourage you to review this Privacy Policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-2"><strong>1cPlatform Privacy Team</strong></p>
                      <p className="text-gray-700 mb-2">
                        <Link to={createPageUrl('Contact')} className="text-[#8B2EE5] hover:underline">
                          Contact us
                        </Link>
                      </p>
                      <p className="text-gray-700">Address: 1 Infinite Loop, Cupertino, CA 95014</p>
                    </div>
                  </div>
                </section>

                {/* Footer Links */}
                <div className="pt-12 border-t border-gray-200">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <Link to={createPageUrl('Terms')} className="text-[#8B2EE5] hover:underline">
                      Terms of Service
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
      </InternalLinker>
    </>
  );
}