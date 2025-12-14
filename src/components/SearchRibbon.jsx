import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Loader2, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';

const pageIndex = [
  { name: 'Home', path: 'Home', description: 'Main landing page' },
  { name: 'Agentic AI', path: 'AgenticAI', description: 'Autonomous AI agents platform' },
  { name: 'Enterprise Suite', path: 'EnterpriseSuite', description: 'Complete business management' },
  { name: 'Cloud Platform', path: 'CloudPlatform', description: 'Scalable infrastructure' },
  { name: 'Developer Tools', path: 'DeveloperTools', description: 'APIs and SDKs' },
  { name: 'Pricing', path: 'Pricing', description: 'Transparent pricing plans' },
  { name: 'Healthcare', path: 'Healthcare', description: 'Patient care optimization' },
  { name: 'Financial Institutions', path: 'FinancialInstitutions', description: 'Banking & fintech solutions' },
  { name: 'Documentation', path: 'Documentation', description: 'Complete guides' },
  { name: 'Blog', path: 'Blog', description: 'Insights & updates' },
];

export default function SearchRibbon({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [aiContent, setAiContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setAiContent(null);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = pageIndex.filter(page => 
      page.name.toLowerCase().includes(searchQuery) ||
      page.description.toLowerCase().includes(searchQuery)
    ).slice(0, 3);

    setResults(filtered);

    // AI-powered content generation
    const timer = setTimeout(() => {
      generateAIContent(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const generateAIContent = async (searchQuery) => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    try {
      const response = await base44.integrations.Core.InvokeLLM({
        prompt: `Write 2 concise paragraphs (3-4 sentences each) about "${searchQuery}" in the context of AI, technology, and business automation. Make it informative and relevant.`,
        response_json_schema: {
          type: 'object',
          properties: {
            paragraph1: { type: 'string' },
            paragraph2: { type: 'string' }
          }
        }
      });

      setAiContent(response);
    } catch (error) {
      console.error('AI generation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = (path) => {
    navigate(createPageUrl(path));
    onClose();
    setQuery('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="border-b border-gray-200 bg-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for topics, pages, features..."
              className="pl-12 pr-12 h-14 text-lg border-gray-300 rounded-full"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Results */}
          {query.trim() && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pages */}
              {results.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Pages</h3>
                  <div className="space-y-2">
                    {results.map((result) => (
                      <button
                        key={result.path}
                        onClick={() => handleNavigate(result.path)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left group"
                      >
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-[#8B2EE5]" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900">{result.name}</div>
                          <div className="text-sm text-gray-500 truncate">{result.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B2EE5]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Content */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Overview</h3>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-6 h-6 animate-spin text-[#8B2EE5]" />
                  </div>
                ) : aiContent ? (
                  <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                    <p>{aiContent.paragraph1}</p>
                    <p>{aiContent.paragraph2}</p>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 py-8 text-center">
                    Type to see AI-generated overview...
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}