import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// All available pages indexed
const pageIndex = [
  { name: 'Home', path: 'Home', description: 'Main landing page', keywords: ['platform', 'ai', 'agentic', 'automation'] },
  { name: 'Agentic AI', path: 'AgenticAI', description: 'Autonomous AI agents platform', keywords: ['ai', 'agentic ai', 'agents', 'automation', 'autonomous'] },
  { name: 'Enterprise Suite', path: 'EnterpriseSuite', description: 'Complete business management', keywords: ['enterprise', 'business', 'management', 'erp'] },
  { name: 'Cloud Platform', path: 'CloudPlatform', description: 'Scalable infrastructure', keywords: ['cloud', 'infrastructure', 'hosting', 'deployment'] },
  { name: 'Developer Tools', path: 'DeveloperTools', description: 'APIs and SDKs', keywords: ['api', 'sdk', 'developer', 'integration'] },
  { name: 'Pricing', path: 'Pricing', description: 'Transparent pricing plans', keywords: ['pricing', 'plans', 'cost', 'subscription'] },
  { name: 'Property Management', path: 'PropertyManagement', description: 'Smart building solutions', keywords: ['property', 'real estate', 'buildings'] },
  { name: 'Data Centers', path: 'DataCenters', description: 'Infrastructure automation', keywords: ['datacenter', 'infrastructure', 'servers'] },
  { name: 'Financial Institutions', path: 'FinancialInstitutions', description: 'Banking & fintech', keywords: ['finance', 'banking', 'fintech', 'ai in finance'] },
  { name: 'Corporate Campuses', path: 'CorporateCampuses', description: 'Workplace management', keywords: ['corporate', 'workplace', 'campus'] },
  { name: 'Healthcare', path: 'Healthcare', description: 'Patient care optimization', keywords: ['healthcare', 'medical', 'patient', 'ai in healthcare'] },
  { name: 'Transit', path: 'Transit', description: 'Public transportation', keywords: ['transit', 'transportation', 'public transport'] },
  { name: 'Traffic', path: 'Traffic', description: 'Traffic optimization', keywords: ['traffic', 'roads', 'congestion'] },
  { name: 'Government Agencies', path: 'GovernmentAgencies', description: 'Public services', keywords: ['government', 'public sector', 'ai governance'] },
  { name: 'Energy & Utilities', path: 'EnergyUtilities', description: 'Smart grid management', keywords: ['energy', 'utilities', 'power', 'grid'] },
  { name: 'Sports & Entertainment', path: 'SportsEntertainment', description: 'Fan experiences', keywords: ['sports', 'entertainment', 'events'] },
  { name: 'Gaming', path: 'Gaming', description: 'Gaming infrastructure', keywords: ['gaming', 'esports', 'games'] },
  { name: 'Public Safety', path: 'PublicSafety', description: 'Emergency response', keywords: ['safety', 'emergency', 'security'] },
  { name: 'Cities', path: 'Cities', description: 'Smart city solutions', keywords: ['smart city', 'urban', 'municipal'] },
  { name: 'Airports', path: 'Airports', description: 'Airport operations', keywords: ['airport', 'aviation', 'travel'] },
  { name: 'Retail', path: 'Retail', description: 'Customer experience', keywords: ['retail', 'shopping', 'commerce'] },
  { name: 'Education', path: 'Education', description: 'Learning management', keywords: ['education', 'learning', 'school'] },
  { name: 'Documentation', path: 'Documentation', description: 'Complete guides', keywords: ['docs', 'documentation', 'guides', 'help'] },
  { name: 'API Reference', path: 'APIReference', description: 'API endpoints', keywords: ['api', 'reference', 'endpoints'] },
  { name: 'Community', path: 'Community', description: 'Join developers', keywords: ['community', 'forum', 'discord'] },
  { name: 'Blog', path: 'Blog', description: 'Insights & updates', keywords: ['blog', 'articles', 'news', 'ai ethics', 'machine learning', 'deep learning'] },
  { name: 'Events', path: 'Events', description: 'Upcoming events', keywords: ['events', 'conferences', 'webinars'] },
  { name: 'About Us', path: 'AboutUs', description: 'Our story', keywords: ['about', 'company', 'story'] },
  { name: 'Careers', path: 'Careers', description: 'Join our team', keywords: ['careers', 'jobs', 'hiring'] },
  { name: 'Newsroom', path: 'Newsroom', description: 'Latest news', keywords: ['news', 'press', 'media'] },
  { name: 'Leadership', path: 'Leadership', description: 'Meet the team', keywords: ['leadership', 'team', 'executives'] },
  { name: 'Investor Relations', path: 'InvestorRelations', description: 'For investors', keywords: ['investors', 'ir', 'financial'] },
  { name: 'Help Center', path: 'HelpCenter', description: 'Get help', keywords: ['help', 'support', 'faq'] },
  { name: 'Courses', path: 'Courses', description: 'Professional courses', keywords: ['courses', 'training', 'learning'] },
  { name: 'Digital Learning', path: 'DigitalLearningSubscriptions', description: 'Unlimited subscriptions', keywords: ['learning', 'subscription', 'education'] },
  { name: 'Learning Journey', path: 'LearningJourney', description: 'Structured paths', keywords: ['learning', 'path', 'journey'] },
  { name: 'Certifications', path: 'ProfessionalCertifications', description: 'Get certified', keywords: ['certification', 'certified', 'credentials'] },
  { name: 'System Status', path: 'Status', description: 'Platform health', keywords: ['status', 'uptime', 'health'] },
  { name: 'Cyber Security', path: 'Cyber', description: 'Trust & safety', keywords: ['security', 'cyber', 'trust', 'ai ethics'] },
  { name: 'Privacy Policy', path: 'Privacy', description: 'Privacy policy', keywords: ['privacy', 'policy', 'data', 'ai governance'] },
  { name: 'Terms of Service', path: 'Terms', description: 'Terms of service', keywords: ['terms', 'legal', 'service'] },
  { name: 'Cookies', path: 'Cookies', description: 'Cookie policy', keywords: ['cookies', 'tracking', 'policy'] }
];

export default function GlobalSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = pageIndex.filter(page => 
      page.name.toLowerCase().includes(searchQuery) ||
      page.description.toLowerCase().includes(searchQuery) ||
      page.keywords.some(k => k.toLowerCase().includes(searchQuery))
    ).slice(0, 5);

    setResults(filtered);
  }, [query]);

  const handleNavigate = (path) => {
    navigate(createPageUrl(path));
    onClose();
    setQuery('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // If no results, navigate to search page
    if (results.length === 0) {
      navigate(createPageUrl('SearchResults') + `?q=${encodeURIComponent(query)}`);
      onClose();
      setQuery('');
    } else {
      // Navigate to first result
      handleNavigate(results[0].path);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-2xl mx-auto mt-20 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <form onSubmit={handleSearch} className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, topics, features..."
                  className="pl-12 pr-12 h-14 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </form>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((result) => (
                    <button
                      key={result.path}
                      onClick={() => handleNavigate(result.path)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-[#8B2EE5]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 group-hover:text-[#8B2EE5] transition-colors">
                          {result.name}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {result.description}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#8B2EE5] transition-colors" />
                    </button>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="p-8 text-center">
                  <div className="text-gray-500 mb-3">No exact matches found</div>
                  <button
                    onClick={handleSearch}
                    className="inline-flex items-center gap-2 text-[#8B2EE5] hover:text-[#7325C4] font-medium"
                  >
                    Search with AI <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-400">
                  Start typing to search...
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
              <span>Type to search</span>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded">↵</kbd>
                <span>to select</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}