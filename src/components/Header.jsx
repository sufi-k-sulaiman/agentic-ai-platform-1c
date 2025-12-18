import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import SearchRibbon from '@/components/SearchRibbon';

const navItems = [
  { 
    label: 'Products', 
    submenu: [
      { label: 'Agentic Ai', description: 'Autonomous Agentic Ai', href: createPageUrl('AgenticAI') },
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
      { label: 'Courses & Learning', description: 'All courses & paths', href: createPageUrl('Courses') },
      { label: 'Certifications', description: 'Get certified', href: createPageUrl('ProfessionalCertifications') },
      { label: 'System Status', description: 'Platform health', href: createPageUrl('Status') },
      { label: 'Cyber', description: 'Trust & safety', href: createPageUrl('Cyber') },
    ]
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 lg:gap-3 flex-1 lg:flex-initial">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/334042dc2_1C-logocopy.png" 
              alt="1C Platform" 
              className="h-9 w-9"
            />
            <span className="font-semibold text-[15.84px] lg:text-xl tracking-tight">
              <span className="text-[#6209e6]">1c</span><span className="text-gray-900">Platform</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                    className={cn(
                      "font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 px-4 py-2 flex items-center gap-1 group",
                      activeMenu === item.label 
                        ? "text-[#6209e6] bg-purple-50 rounded-lg" 
                        : "text-gray-600 hover:text-[#6209e6] bg-transparent"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", activeMenu === item.label && "rotate-180")} />
                  </button>
                  {activeMenu === item.label && item.submenu && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                        <ul className={`grid gap-1 p-4 bg-white rounded-xl shadow-lg border border-gray-100 ${item.label === 'Verticals' ? 'w-[500px] grid-cols-2' : 'w-[400px]'}`}>
                          {item.submenu.map((subitem) => (
                            <li key={subitem.label}>
                              <Link
                                to={subitem.href}
                                onClick={() => setActiveMenu(null)}
                                className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50"
                              >
                                <div className="text-sm font-medium text-gray-900">{subitem.label}</div>
                                <p className="text-sm text-gray-500 mt-1">{subitem.description}</p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Demo Button & Search */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://1cpublishing.com/home" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-[#6209e6] hover:bg-[#5008c5] text-white rounded-full px-6 h-10 text-sm font-medium">
                Demo
              </Button>
            </a>
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a 
              href="https://1cpublishing.com/home" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-[#6209e6] hover:bg-[#5008c5] text-white rounded-full px-5 h-9 text-sm font-medium">
                Demo
              </Button>
            </a>
            <button
              className="p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Ribbon */}
        <SearchRibbon isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="px-4 py-3 text-gray-900 font-semibold text-base">{item.label}</div>
                  {item.submenu?.map((subitem) => (
                    <Link
                      key={subitem.label}
                      to={subitem.href}
                      className="block px-4 py-2.5 ml-4 text-gray-700 hover:bg-purple-50 hover:text-[#6209e6] rounded-lg text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">{subitem.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{subitem.description}</div>
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}