import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const footerLinks = {
  company: [
    { label: 'About 1C', href: createPageUrl('AboutUs') },
    { label: 'Careers', href: createPageUrl('Careers') },
    { label: 'Investor Relations', href: createPageUrl('InvestorRelations') },
    { label: 'Leadership', href: createPageUrl('Leadership') },
    { label: 'Newsroom', href: createPageUrl('Newsroom') },
  ],
  products: [
    { label: 'Agentic Ai', href: createPageUrl('AgenticAI') },
    { label: 'Enterprise Suite', href: createPageUrl('EnterpriseSuite') },
    { label: 'Cloud Platform', href: createPageUrl('CloudPlatform') },
    { label: 'Developer Tools', href: createPageUrl('DeveloperTools') },
    { label: 'Pricing', href: createPageUrl('Pricing') },
  ],
  resources: [
    { label: 'Documentation', href: createPageUrl('Documentation') },
    { label: 'API Reference', href: createPageUrl('APIReference') },
    { label: 'Community', href: createPageUrl('Community') },
    { label: 'Blog', href: createPageUrl('Blog') },
    { label: 'Events', href: createPageUrl('Events') },
  ],
  support: [
    { label: 'Help Center', href: createPageUrl('HelpCenter') },
    { label: 'Status', href: createPageUrl('Status') },
    { label: 'Security', href: createPageUrl('Rewards') },
    { label: 'Privacy', href: createPageUrl('Privacy') },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#04050b] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                alt="1C Platform" 
                className="h-10 w-10"
              />
              <span className="font-semibold text-xl text-white">1cPlatform</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering enterprises with intelligent automation and Agentic Ai solutions.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-[#A855F7] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-[#A855F7] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-[#A855F7] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-[#A855F7] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} 1cPlatform. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Privacy
              </a>
              <a href="#cookies" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}