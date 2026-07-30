import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Loader2, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import PageMeta from '@/components/PageMeta';

// All available pages (SearchResults is noIndex'd to avoid search result pages in Google)
const allPages = [
  { name: 'Home', path: 'Home', description: 'Main landing page' },
  { name: 'Agentic AI', path: 'AgenticAI', description: 'Autonomous AI agents platform' },
  { name: 'Enterprise Suite', path: 'EnterpriseSuite', description: 'Complete business management' },
  { name: 'Cloud Platform', path: 'CloudPlatform', description: 'Scalable infrastructure' },
  { name: 'Developer Tools', path: 'DeveloperTools', description: 'APIs and SDKs' },
  { name: 'Pricing', path: 'Pricing', description: 'Transparent pricing plans' },
  { name: 'Property Management', path: 'PropertyManagement', description: 'Smart building solutions' },
  { name: 'Data Centers', path: 'DataCenters', description: 'Infrastructure automation' },
  { name: 'Financial Institutions', path: 'FinancialInstitutions', description: 'Banking & fintech solutions' },
  { name: 'Corporate Campuses', path: 'CorporateCampuses', description: 'Workplace management' },
  { name: 'Healthcare', path: 'Healthcare', description: 'Patient care optimization' },
  { name: 'Transit', path: 'Transit', description: 'Public transportation solutions' },
  { name: 'Traffic', path: 'Traffic', description: 'Traffic optimization' },
  { name: 'Government Agencies', path: 'GovernmentAgencies', description: 'Public services automation' },
  { name: 'Energy & Utilities', path: 'EnergyUtilities', description: 'Smart grid management' },
  { name: 'Sports & Entertainment', path: 'SportsEntertainment', description: 'Fan experiences' },
  { name: 'Gaming', path: 'Gaming', description: 'Gaming infrastructure' },
  { name: 'Public Safety', path: 'PublicSafety', description: 'Emergency response systems' },
  { name: 'Cities', path: 'Cities', description: 'Smart city solutions' },
  { name: 'Airports', path: 'Airports', description: 'Airport operations' },
  { name: 'Retail', path: 'Retail', description: 'Customer experience optimization' },
  { name: 'Education', path: 'Education', description: 'Learning management systems' },
  { name: 'Documentation', path: 'Documentation', description: 'Complete guides and documentation' },
  { name: 'API Reference', path: 'APIReference', description: 'API endpoints documentation' },
  { name: 'Community', path: 'Community', description: 'Join our developer community' },
  { name: 'Blog', path: 'Blog', description: 'Insights and updates' },
  { name: 'Events', path: 'Events', description: 'Upcoming events and webinars' },
  { name: 'About Us', path: 'AboutUs', description: 'Our company story' },
  { name: 'Careers', path: 'Careers', description: 'Join our team' },
  { name: 'Newsroom', path: 'Newsroom', description: 'Latest news and press releases' },
  { name: 'Leadership', path: 'Leadership', description: 'Meet our leadership team' },
  { name: 'Investor Relations', path: 'InvestorRelations', description: 'Information for investors' },
  { name: 'Help Center', path: 'HelpCenter', description: 'Get help and support' },
  { name: 'Courses', path: 'Courses', description: 'Professional training courses' },
  { name: 'Digital Learning', path: 'DigitalLearningSubscriptions', description: 'Learning subscriptions' },
  { name: 'Learning Journey', path: 'LearningJourney', description: 'Structured learning paths' },
  { name: 'Certifications', path: 'ProfessionalCertifications', description: 'Professional certifications' },
  { name: 'System Status', path: 'Status', description: 'Platform health status' },
  { name: 'Cyber Security', path: 'Cyber', description: 'Trust and security information' }
];

// AI topics to filter
const aiTopics = [
  'AI', 'Agentic AI', 'Generative AI', 'Machine Learning', 'Deep Learning',
  'Natural Language Processing', 'Computer Vision', 'Robotics',
  'AI Ethics', 'AI in Healthcare', 'AI in Finance', 'AI Governance'
];

// SearchResults is noIndex'd — utility page that shouldn't appear in search results
export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [aiAnalysis, setAiAnalysis] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q') || '';
    setQuery(q);
    if (q) {
      performSearch(q);
    }
  }, [location.search]);

  const performSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;

    setSearching(true);
    setResults([]);
    setAiAnalysis(null);

    try {
      // Use LLM to analyze query and match to AI topics
      const aiResponse = await base44.integrations.Core.InvokeLLM({
        prompt: `You are a search assistant for an AI/Agentic AI platform.
        
User search query: "${searchQuery}"

Available AI topics: ${aiTopics.join(', ')}

Available pages: ${allPages.map(p => `${p.name} (${p.description})`).join(', ')}

Task:
1. Identify which AI topics (if any) are most relevant to the user's query
2. Identify which pages are most relevant to the user's query
3. Provide a brief explanation of why these matches are relevant

Return ONLY these relevant topics and pages, ranked by relevance.`,
        response_json_schema: {
          type: 'object',
          properties: {
            matched_topics: {
              type: 'array',
              items: { type: 'string' },
              description: 'Relevant AI topics from the predefined list'
            },
            matched_pages: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  relevance: { type: 'string', description: 'Why this page is relevant' }
                }
              }
            },
            explanation: {
              type: 'string',
              description: 'Brief explanation of the search results'
            }
          }
        }
      });

      // Map AI results to actual pages
      const matchedPages = aiResponse.matched_pages
        .map(match => {
          const page = allPages.find(p => p.name.toLowerCase() === match.name.toLowerCase());
          return page ? { ...page, relevance: match.relevance } : null;
        })
        .filter(Boolean);

      setResults(matchedPages);
      setAiAnalysis({
        topics: aiResponse.matched_topics || [],
        explanation: aiResponse.explanation
      });
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to basic search
      const basicResults = allPages.filter(page =>
        page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(basicResults);
    } finally {
      setSearching(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`${createPageUrl('SearchResults')}?q=${encodeURIComponent(query)}`);
    }
  };

  const handleNavigate = (path) => {
    navigate(createPageUrl(path));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <PageMeta
        title="Search Results"
        description="Search results powered by AI"
        url="/search"
        noIndex
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#8B2EE5]" />
            AI-Powered Search
          </h1>
          
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for AI topics, pages, features..."
              className="pl-12 pr-32 h-14 text-lg border-gray-300 rounded-full"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full"
            >
              Search
            </Button>
          </form>
        </motion.div>

        {/* Loading State */}
        {searching && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-[#8B2EE5] animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Analyzing your search with AI...</p>
            </div>
          </div>
        )}

        {/* AI Analysis */}
        {!searching && aiAnalysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            {aiAnalysis.topics.length > 0 && (
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#8B2EE5]" />
                  Related AI Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {aiAnalysis.topics.map((topic, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white text-[#8B2EE5] border-purple-200">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {aiAnalysis.explanation && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <p className="text-gray-700 leading-relaxed">{aiAnalysis.explanation}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Results */}
        {!searching && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {results.length} {results.length === 1 ? 'Result' : 'Results'} Found
            </h2>

            {results.map((result, idx) => (
              <motion.button
                key={result.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleNavigate(result.path)}
                className="w-full bg-white rounded-xl p-6 border border-gray-200 hover:border-[#8B2EE5] hover:shadow-lg transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#8B2EE5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#8B2EE5] transition-colors">
                      {result.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{result.description}</p>
                    {result.relevance && (
                      <p className="text-sm text-gray-500 italic">{result.relevance}</p>
                    )}
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#8B2EE5] transition-colors flex-shrink-0" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {!searching && results.length === 0 && query && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">No results found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or browse our topics</p>
            <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
              {aiTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(topic);
                    navigate(`${createPageUrl('SearchResults')}?q=${encodeURIComponent(topic)}`);
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-purple-100 rounded-full text-sm font-medium text-gray-700 hover:text-[#8B2EE5] transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}