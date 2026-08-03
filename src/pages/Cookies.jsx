import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'what-are-cookies', title: 'What Are Cookies' },
  { id: 'how-we-use', title: 'How We Use Cookies' },
  { id: 'types', title: 'Types of Cookies' },
  { id: 'third-party', title: 'Third-Party Cookies' },
  { id: 'managing', title: 'Managing Cookies' },
  { id: 'consequences', title: 'Consequences of Disabling Cookies' },
  { id: 'updates', title: 'Updates to This Policy' },
  { id: 'contact', title: 'Contact Us' }
];

export default function Cookies() {
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
        title="Cookie Policy"
        description="1cPlatform Cookie Policy. Learn how we use cookies and similar technologies."
        url="/cookies"
      />
            <InternalLinker currentPage="Cookies">
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Cookie Policy
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
                  Cookie Policy
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
                      This Cookie Policy explains how 1cPlatform uses cookies and similar technologies when you visit our websites or use our services. It describes what these technologies are, why we use them, and your choices regarding their use.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By continuing to use our services, you consent to our use of cookies as described in this policy.
                    </p>
                  </div>
                </section>

                {/* What Are Cookies */}
                <section id="what-are-cookies" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cookies are small text files that are stored on your device when you visit a website. They help websites recognize your device and remember information about your visit.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Similar technologies include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li><strong>Web beacons:</strong> Small graphic images that track user behavior</li>
                      <li><strong>Pixels:</strong> Code embedded in websites to collect information</li>
                      <li><strong>Local storage:</strong> Data stored in your browser</li>
                      <li><strong>SDKs:</strong> Code embedded in mobile applications</li>
                    </ul>
                  </div>
                </section>

                {/* How We Use Cookies */}
                <section id="how-we-use" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We use cookies for various purposes:
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Functionality</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      To enable core functionality such as authentication, security, and accessibility features.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance and Analytics</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      To understand how visitors interact with our services, identify errors, and improve performance.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalization</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      To remember your preferences and provide customized content and features.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To deliver relevant advertisements and measure the effectiveness of marketing campaigns.
                    </p>
                  </div>
                </section>

                {/* Types of Cookies */}
                <section id="types" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies</h2>
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Strictly Necessary Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies are essential for the operation of our services. They enable core functionality such as security, network management, and accessibility.
                      </p>
                      <p className="text-sm text-gray-600">Examples: Authentication, session management, security</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies collect information about how visitors use our services, such as which pages are visited most often.
                      </p>
                      <p className="text-sm text-gray-600">Examples: Google Analytics, error tracking, performance monitoring</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Functional Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies enable personalized features and remember your choices, such as language preferences.
                      </p>
                      <p className="text-sm text-gray-600">Examples: Language settings, user preferences, customization</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Targeting/Advertising Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies are used to deliver advertisements relevant to you and your interests.
                      </p>
                      <p className="text-sm text-gray-600">Examples: Ad networks, retargeting, conversion tracking</p>
                    </div>
                  </div>
                </section>

                {/* Third-Party Cookies */}
                <section id="third-party" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may allow third-party service providers to set cookies on our services. These providers include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                      <li>Analytics providers (e.g., Google Analytics)</li>
                      <li>Advertising networks</li>
                      <li>Social media platforms</li>
                      <li>Payment processors</li>
                      <li>Customer support tools</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      These third parties have their own privacy policies governing their use of information. We recommend reviewing their policies to understand their practices.
                    </p>
                  </div>
                </section>

                {/* Managing Cookies */}
                <section id="managing" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Cookies</h2>
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Most browsers allow you to control cookies through their settings. You can:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                      <li>View and delete cookies</li>
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete cookies when you close your browser</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser-Specific Instructions</h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                      </p>
                      <p className="text-gray-700">
                        <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                      </p>
                      <p className="text-gray-700">
                        <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                      </p>
                      <p className="text-gray-700">
                        <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Opt-Out Tools</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You can also opt out of interest-based advertising through:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Digital Advertising Alliance (DAA): <a href="http://optout.aboutads.info" className="text-[#8B2EE5] hover:underline">optout.aboutads.info</a></li>
                      <li>Network Advertising Initiative (NAI): <a href="http://optout.networkadvertising.org" className="text-[#8B2EE5] hover:underline">optout.networkadvertising.org</a></li>
                      <li>European Interactive Digital Advertising Alliance: <a href="http://youronlinechoices.eu" className="text-[#8B2EE5] hover:underline">youronlinechoices.eu</a></li>
                    </ul>
                  </div>
                </section>

                {/* Consequences */}
                <section id="consequences" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consequences of Disabling Cookies</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you disable cookies, some features of our services may not function properly. You may experience:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Difficulty logging in or staying logged in</li>
                      <li>Loss of personalized settings and preferences</li>
                      <li>Inability to use certain features</li>
                      <li>Less relevant content and advertisements</li>
                      <li>Degraded user experience</li>
                    </ul>
                  </div>
                </section>

                {/* Updates */}
                <section id="updates" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have questions about this Cookie Policy, please contact us:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-2"><strong>1cPlatform Privacy Team</strong></p>
                      <p className="text-gray-700 mb-2">Email: privacy@1cplatform.com</p>
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
                    <Link to={createPageUrl('Terms')} className="text-[#8B2EE5] hover:underline">
                      Terms of Service
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