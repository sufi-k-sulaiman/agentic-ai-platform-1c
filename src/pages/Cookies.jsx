import React from 'react';
import { motion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';

export default function Cookies() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Cookie Policy"
        description="Cookie Policy for 1C Platform. Learn about how we use cookies and similar technologies."
        url="/cookies"
        keywords={['cookie policy', 'cookies', 'tracking', 'web analytics']}
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
              Cookie Policy
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
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our Service.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for various purposes:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the Service to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our Service</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            
            <h3>Session Cookies</h3>
            <p>
              Temporary cookies that expire when you close your browser. These are essential for navigating our Service and using its features.
            </p>

            <h3>Persistent Cookies</h3>
            <p>
              Cookies that remain on your device for a set period or until you delete them. These help us recognize you when you return to our Service.
            </p>

            <h3>First-Party Cookies</h3>
            <p>
              Set directly by 1C Platform to provide core functionality and analyze usage patterns.
            </p>

            <h3>Third-Party Cookies</h3>
            <p>
              Set by our partners and service providers for analytics, advertising, and social media features.
            </p>

            <h2>4. Specific Cookies We Use</h2>
            
            <h3>Authentication Cookies</h3>
            <p>
              Purpose: Keep you logged in and maintain your session<br />
              Duration: Session or up to 30 days<br />
              Required: Yes
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              Purpose: Understand how users interact with our Service<br />
              Duration: Up to 2 years<br />
              Required: No
            </p>

            <h3>Preference Cookies</h3>
            <p>
              Purpose: Remember your settings and preferences<br />
              Duration: Up to 1 year<br />
              Required: No
            </p>

            <h3>Security Cookies</h3>
            <p>
              Purpose: Protect against fraudulent activity and enhance security<br />
              Duration: Session<br />
              Required: Yes
            </p>

            <h2>5. Third-Party Services</h2>
            <p>We use the following third-party services that may set cookies:</p>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and usage tracking</li>
              <li><strong>Stripe:</strong> For payment processing</li>
              <li><strong>Intercom:</strong> For customer support and communication</li>
            </ul>

            <h2>6. Managing Cookies</h2>
            
            <h3>Browser Settings</h3>
            <p>
              Most browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete existing cookies. However, this may affect your ability to use certain features of our Service.
            </p>

            <h3>Opt-Out Options</h3>
            <p>
              You can opt-out of certain cookies:
            </p>
            <ul>
              <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
              <li>Advertising cookies: Visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
            </ul>

            <h2>7. Do Not Track Signals</h2>
            <p>
              Our Service does not respond to Do Not Track (DNT) signals. We continue to work on implementing DNT support in compliance with evolving standards.
            </p>

            <h2>8. Mobile Devices</h2>
            <p>
              If you access our Service through a mobile device, we may collect similar information through mobile SDKs and device identifiers. You can control these through your device settings.
            </p>

            <h2>9. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting a notice on our website.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
              <br />
              Email: privacy@1cplatform.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}