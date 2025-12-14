import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const pageIndex = [
  { title: 'Home', path: 'Home', keywords: ['home', 'main', 'landing'], category: 'Main' },
  { title: 'Agentic AI', path: 'AgenticAI', keywords: ['ai', 'agentic', 'autonomous', 'agents', 'artificial intelligence'], category: 'Products' },
  { title: 'Enterprise Suite', path: 'EnterpriseSuite', keywords: ['enterprise', 'business', 'management', 'suite'], category: 'Products' },
  { title: 'Cloud Platform', path: 'CloudPlatform', keywords: ['cloud', 'infrastructure', 'hosting', 'platform'], category: 'Products' },
  { title: 'Developer Tools', path: 'DeveloperTools', keywords: ['api', 'sdk', 'developer', 'tools', 'integration'], category: 'Products' },
  { title: 'Pricing', path: 'Pricing', keywords: ['pricing', 'plans', 'cost', 'subscription'], category: 'Products' },
  { title: 'Property Management', path: 'PropertyManagement', keywords: ['property', 'real estate', 'buildings'], category: 'Industries' },
  { title: 'Data Centers', path: 'DataCenters', keywords: ['data center', 'infrastructure', 'servers'], category: 'Industries' },
  { title: 'Financial Institutions', path: 'FinancialInstitutions', keywords: ['finance', 'banking', 'fintech'], category: 'Industries' },
  { title: 'Healthcare', path: 'Healthcare', keywords: ['healthcare', 'medical', 'hospital'], category: 'Industries' },
  { title: 'Retail', path: 'Retail', keywords: ['retail', 'shopping', 'ecommerce'], category: 'Industries' },
  { title: 'Education', path: 'Education', keywords: ['education', 'learning', 'school'], category: 'Industries' },
  { title: 'Blog', path: 'Blog', keywords: ['blog', 'articles', 'insights'], category: 'Resources' },
  { title: 'Documentation', path: 'Documentation', keywords: ['docs', 'documentation', 'guides'], category: 'Resources' },
  { title: 'API Reference', path: 'APIReference', keywords: ['api', 'reference', 'endpoints'], category: 'Resources' },
  { title: 'Community', path: 'Community', keywords: ['community', 'forum', 'discord'], category: 'Resources' },
  { title: 'About Us', path: 'AboutUs', keywords: ['about', 'company', 'story'], category: 'Company' },
  { title: 'Careers', path: 'Careers', keywords: ['careers', 'jobs', 'hiring'], category: 'Company' },
  { title: 'Contact', path: 'HelpCenter', keywords: ['contact', 'support', 'help'], category: 'Support' },
];

const recentSearches = ['Agentic AI', 'Pricing', 'Documentation'];
const trendingSearches = ['AI Agents', 'Cloud Platform', 'Healthcare Solutions'];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = pageIndex.filter(page => 
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.keywords.some(kw => kw.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5);
      
      setResults(filtered);
      setShowSuggestions(true);
    } else {
      setResults([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      const exactMatch = pageIndex.find(page => 
        page.title.toLowerCase() === query.toLowerCase()
      );
      
      if (exactMatch) {
        window.location.href = createPageUrl(exactMatch.path);
      } else {
        window.location.href = createPageUrl('SearchResults') + `?q=${encodeURIComponent(query)}`;
      }
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32 px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search pages, topics, or products..."
                className="pl-12 pr-12 h-14 text-lg border-0 focus:ring-0 bg-gray-50"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {showSuggestions && results.length > 0 ? (
              <div className="p-2">
                <div className="text-xs font-semibold text-gray-500 px-4 py-2">Pages</div>
                {results.map((result) => (
                  <Link
                    key={result.path}
                    to={createPageUrl(result.path)}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-sm text-gray-500">{result.category}</div>
                    </div>
                  </Link>
                ))}
                {query.trim() && (
                  <button
                    onClick={handleSearch}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors mt-2"
                  >
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4 text-[#8B2EE5] flex-shrink-0" />
                      <div>
                        <span className="text-gray-600">Search for "</span>
                        <span className="font-semibold text-gray-900">{query}</span>
                        <span className="text-gray-600">"</span>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            ) : query.trim().length === 0 ? (
              <div className="p-4">
                {recentSearches.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      Recent Searches
                    </div>
                    {recentSearches.map((search, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuery(search)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-700"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
                    <TrendingUp className="w-4 h-4" />
                    Trending
                  </div>
                  {trendingSearches.map((search, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(search)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors text-gray-700"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>No results found. Press Enter to search with AI.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
            <div className="flex gap-4">
              <span><kbd className="px-2 py-1 bg-white rounded border border-gray-200">↵</kbd> to search</span>
              <span><kbd className="px-2 py-1 bg-white rounded border border-gray-200">esc</kbd> to close</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}