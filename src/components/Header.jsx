import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { 
    label: 'Products', 
    submenu: [
      { label: 'Agentic AI', description: 'Autonomous AI agents', href: createPageUrl('AgenticAI') },
      { label: 'Enterprise Suite', description: 'Complete business management', href: createPageUrl('EnterpriseSuite') },
      { label: 'Cloud Platform', description: 'Scalable infrastructure', href: createPageUrl('CloudPlatform') },
      { label: 'Developer Tools', description: 'APIs and SDKs', href: createPageUrl('DeveloperTools') },
      { label: 'Pricing', description: 'Transparent pricing plans', href: createPageUrl('Pricing') },
    ]
  },
  { 
    label: 'Verticals',
    submenu: [
      { label: 'Property Management', description: 'Smart building solutions', href: createPageUrl('PropertyManagement') },
      { label: 'Data Centers', description: 'Infrastructure automation', href: createPageUrl('DataCenters') },
      { label: 'Financial Institutions', description: 'Banking & fintech', href: createPageUrl('FinancialInstitutions') },
      { label: 'Corporate Campuses', description: 'Workplace management', href: createPageUrl('CorporateCampuses') },
      { label: 'Healthcare', description: 'Patient care optimization', href: createPageUrl('Healthcare') },
      { label: 'Transit', description: 'Public transportation', href: createPageUrl('Transit') },
      { label: 'Traffic', description: 'Traffic optimization', href: createPageUrl('Traffic') },
      { label: 'Government Agencies', description: 'Public services', href: createPageUrl('GovernmentAgencies') },
      { label: 'Energy & Utilities', description: 'Smart grid management', href: createPageUrl('EnergyUtilities') },
      { label: 'Sports & Entertainment', description: 'Fan experiences', href: createPageUrl('SportsEntertainment') },
      { label: 'Gaming', description: 'Gaming infrastructure', href: createPageUrl('Gaming') },
      { label: 'Public Safety', description: 'Emergency response', href: createPageUrl('PublicSafety') },
      { label: 'Cities', description: 'Smart city solutions', href: createPageUrl('Cities') },
      { label: 'Airports', description: 'Airport operations', href: createPageUrl('Airports') },
      { label: 'Retail', description: 'Customer experience', href: createPageUrl('Retail') },
      { label: 'Education', description: 'Learning management', href: createPageUrl('Education') },
    ]
  },
  { 
    label: 'Resources', 
    submenu: [
      { label: 'Documentation', description: 'Complete guides', href: createPageUrl('Documentation') },
      { label: 'API Reference', description: 'API endpoints', href: createPageUrl('APIReference') },
      { label: 'Community', description: 'Join developers', href: createPageUrl('Community') },
      { label: 'Blog', description: 'Insights & updates', href: createPageUrl('Blog') },
      { label: 'Events', description: 'Upcoming events', href: createPageUrl('Events') },
    ]
  },
  { 
    label: 'Company',
    submenu: [
      { label: 'About Us', description: 'Our story', href: createPageUrl('AboutUs') },
      { label: 'Careers', description: 'Join our team', href: createPageUrl('Careers') },
      { label: 'Newsroom', description: 'Latest news', href: createPageUrl('Newsroom') },
      { label: 'Leadership', description: 'Meet the team', href: createPageUrl('Leadership') },
      { label: 'Investor Relations', description: 'For investors', href: createPageUrl('InvestorRelations') },
    ]
  },
  { 
    label: 'Support',
    submenu: [
      { label: 'Help Center', description: 'Get help', href: createPageUrl('HelpCenter') },
      { label: 'Contact Us', description: 'Reach out', href: createPageUrl('ContactUs') },
      { label: 'System Status', description: 'Platform health', href: createPageUrl('Status') },
      { label: 'Security', description: 'Trust & safety', href: createPageUrl('Security') },
    ]
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
              alt="1C Platform" 
              className="h-9 w-9"
            />
            <span className="font-semibold text-xl text-gray-900 tracking-tight">1cPlatform</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 relative">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-600 hover:text-[#8B2EE5] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-medium text-sm transition-all duration-200 hover:-translate-y-0.5">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="data-[motion=from-start]:animate-in data-[motion=from-end]:animate-in data-[motion=to-start]:animate-out data-[motion=to-end]:animate-out fade-in-0 fade-out-0 zoom-in-95 zoom-out-95 slide-in-from-left-1 slide-in-from-right-1">
                          <ul className={`grid gap-1 p-4 ${item.label === 'Verticals' ? 'w-[500px] grid-cols-2' : 'w-[400px]'}`}>
                            {item.submenu.map((subitem) => (
                              <li key={subitem.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={subitem.href}
                                    className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50"
                                  >
                                    <div className="text-sm font-medium text-gray-900">{subitem.label}</div>
                                    <p className="text-sm text-gray-500 mt-1">{subitem.description}</p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : null}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-600 hover:text-[#8B2EE5] font-medium transition-all duration-200 hover:-translate-y-0.5">
              Log in
            </Button>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white font-medium rounded-full px-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="px-4 py-3 text-gray-900 font-semibold text-sm">{item.label}</div>
                  {item.submenu?.map((subitem) => (
                    <Link
                      key={subitem.label}
                      to={subitem.href}
                      className="px-4 py-2 ml-4 text-gray-700 hover:bg-purple-50 hover:text-[#8B2EE5] rounded-lg text-sm flex"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" className="w-full justify-center">Log in</Button>
                <Button className="w-full justify-center bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full">Get started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}