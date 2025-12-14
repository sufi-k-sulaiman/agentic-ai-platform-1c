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
    label: 'Agentic AI', 
    href: '#agentic-ai',
    submenu: [
      { label: 'AI Agents', description: 'Autonomous AI systems that work for you' },
      { label: 'AI Workflows', description: 'Automated business processes' },
      { label: 'AI Studio', description: 'Build custom AI solutions' },
    ]
  },
  { 
    label: 'Products', 
    href: '#products',
    submenu: [
      { label: 'Enterprise Suite', description: 'Complete business management' },
      { label: 'Cloud Platform', description: 'Scalable infrastructure' },
      { label: 'Developer Tools', description: 'APIs and SDKs' },
    ]
  },
  { 
    label: 'Solutions', 
    href: '#solutions',
    submenu: [
      { label: 'By Industry', description: 'Tailored for your sector' },
      { label: 'By Use Case', description: 'Solve specific challenges' },
      { label: 'Success Stories', description: 'Customer transformations' },
    ]
  },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Support', href: '#support' },
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
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-gray-600 hover:text-[#8B2EE5] bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-medium text-sm">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-1 p-4">
                            {item.submenu.map((subitem) => (
                              <li key={subitem.label}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={item.href}
                                    className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50"
                                  >
                                    <div className="text-sm font-medium text-gray-900">{subitem.label}</div>
                                    <p className="text-sm text-gray-500 mt-1">{subitem.description}</p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <a 
                        href={item.href}
                        className="text-gray-600 hover:text-[#8B2EE5] font-medium text-sm px-4 py-2 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-600 hover:text-[#8B2EE5] font-medium">
              Log in
            </Button>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white font-medium rounded-full px-6">
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
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-[#8B2EE5] rounded-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
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