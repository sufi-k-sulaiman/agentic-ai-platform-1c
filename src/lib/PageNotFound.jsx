import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, ArrowRight, FileQuestion, ChevronRight } from 'lucide-react';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const popularPages = [
  { label: 'Agentic AI Platform', page: 'AgenticAI' },
  { label: 'Enterprise Suite', page: 'EnterpriseSuite' },
  { label: 'Pricing', page: 'Pricing' },
  { label: 'Blog', page: 'Blog' },
  { label: 'Documentation', page: 'Documentation' },
  { label: 'About Us', page: 'AboutUs' },
  { label: 'Contact', page: 'Contact' },
  { label: 'Careers', page: 'Careers' },
];

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <PageMeta
        title="Page Not Found"
        description="The page you are looking for could not be found. Browse our popular pages or search for what you need."
        url="/404"
        noIndex
      />
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-light text-slate-300">404</h1>
            <div className="h-0.5 w-16 bg-slate-200 mx-auto"></div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-medium text-slate-800">Page Not Found</h2>
            <p className="text-slate-600 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Try searching or exploring our popular pages below.
            </p>
          </div>

          <div className="pt-4">
            <Link to={createPageUrl('Home')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] h-12 px-8">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-4 text-center">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-2">
            {popularPages.map((page) => (
              <Link
                key={page.page}
                to={createPageUrl(page.page)}
                className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:border-[#8B2EE5] hover:bg-purple-50 transition-colors text-sm text-slate-700"
              >
                <span>{page.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to={createPageUrl('SearchResults')}
            className="inline-flex items-center gap-2 text-sm text-[#8B2EE5] hover:underline"
          >
            <Search className="w-4 h-4" />
            Search our site instead
          </Link>
        </div>
      </div>
    </div>
  );
}