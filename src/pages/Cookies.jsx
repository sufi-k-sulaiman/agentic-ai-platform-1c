import React from 'react';
import { motion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';

export default function Cookies() {
  return (
    <>
      <PageMeta 
        title="Cookie Policy"
        description="Cookie Policy for 1C Platform. Learn about how we use cookies and similar tracking technologies."
        url="/cookies"
        keywords={['cookie policy', 'cookies', 'tracking', 'web analytics', 'privacy']}
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
                Cookie Policy
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
                    This Cookie Policy explains how 1C Platform ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website and use our Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you close your browser, while session cookies are deleted when you close your browser.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use cookies for the following purposes:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These cookies are necessary for the Service to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Load balancing</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These cookies allow us to remember choices you make and provide enhanced, personalized features.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li>Language and region preferences</li>
                    <li>User interface customization</li>
                    <li>Form data retention</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics and Performance Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These cookies help us understand how visitors interact with our Service by collecting and reporting information anonymously.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li>Page views and navigation patterns</li>
                    <li>Feature usage statistics</li>
                    <li>Error tracking and performance monitoring</li>
                    <li>A/B testing and optimization</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing and Advertising Cookies</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These cookies track your browsing habits to deliver advertising that is relevant to you and your interests.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Targeted advertising</li>
                    <li>Campaign tracking</li>
                    <li>Social media integration</li>
                    <li>Retargeting</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may allow third-party service providers to place cookies on your device for the purposes described above. These third parties include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Analytics providers (e.g., Google Analytics)</li>
                    <li>Advertising networks</li>
                    <li>Social media platforms</li>
                    <li>Customer support tools</li>
                    <li>Payment processors</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    These third parties have their own privacy policies and cookie policies. We encourage you to review their policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Cookie Duration</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The duration of cookies varies depending on their purpose:
                  </p>
                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cookie Type</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-600">Session Cookies</td>
                          <td className="px-6 py-4 text-sm text-gray-600">Deleted when browser closes</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-600">Essential Cookies</td>
                          <td className="px-6 py-4 text-sm text-gray-600">Up to 1 year</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-600">Functionality Cookies</td>
                          <td className="px-6 py-4 text-sm text-gray-600">Up to 2 years</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-600">Analytics Cookies</td>
                          <td className="px-6 py-4 text-sm text-gray-600">Up to 2 years</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-600">Marketing Cookies</td>
                          <td className="px-6 py-4 text-sm text-gray-600">Up to 2 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">5. How to Manage Cookies</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You have several options to manage cookies:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Most browsers allow you to control cookies through their settings. You can set your browser to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li>Block all cookies</li>
                    <li>Accept all cookies</li>
                    <li>Notify you when a cookie is set</li>
                    <li>Delete cookies after you leave a website</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser-Specific Instructions</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                    <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                    <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Opt-Out Tools</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You can opt out of certain types of cookies using these tools:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#8B2EE5] hover:underline">Google Analytics Opt-out</a></li>
                    <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/choices/" className="text-[#8B2EE5] hover:underline">NAI Opt-out</a></li>
                    <li>Digital Advertising Alliance: <a href="http://www.aboutads.info/choices/" className="text-[#8B2EE5] hover:underline">DAA Opt-out</a></li>
                  </ul>

                  <p className="text-gray-600 leading-relaxed mt-6">
                    <strong>Note:</strong> If you disable or refuse cookies, some parts of the Service may become inaccessible or not function properly.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Other Tracking Technologies</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    In addition to cookies, we may use other tracking technologies:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Web Beacons:</strong> Small graphic images (also known as pixel tags) that track website usage</li>
                    <li><strong>Local Storage:</strong> HTML5 local storage for storing preferences and settings</li>
                    <li><strong>Session Storage:</strong> Temporary storage that is cleared when you close your browser</li>
                    <li><strong>ETags:</strong> HTTP entity tags used to track unique users</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Do Not Track</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we provide you with options to control cookie usage as described in this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Updates to This Cookie Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Email: privacy@1cplatform.com<br />
                    Subject: Cookie Policy Inquiry<br />
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