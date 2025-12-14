import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2, Sparkles, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const aiTopics = [
  { name: 'AI', keywords: ['artificial intelligence', 'ai', 'intelligent systems'] },
  { name: 'Agentic AI', keywords: ['agentic ai', 'autonomous agents', 'ai agents', 'intelligent agents'] },
  { name: 'Generative AI', keywords: ['generative ai', 'gen ai', 'content generation', 'llm', 'gpt'] },
  { name: 'Machine Learning', keywords: ['machine learning', 'ml', 'supervised learning', 'unsupervised learning'] },
  { name: 'Deep Learning', keywords: ['deep learning', 'neural networks', 'deep neural networks'] },
  { name: 'Natural Language Processing', keywords: ['nlp', 'natural language', 'text processing', 'language models'] },
  { name: 'Computer Vision', keywords: ['computer vision', 'image recognition', 'visual ai', 'image processing'] },
  { name: 'Robotics', keywords: ['robotics', 'robots', 'automation', 'robotic process automation'] },
  { name: 'AI Ethics', keywords: ['ai ethics', 'responsible ai', 'ai bias', 'fairness'] },
  { name: 'AI in Healthcare', keywords: ['ai healthcare', 'medical ai', 'health ai', 'clinical ai'] },
  { name: 'AI in Finance', keywords: ['ai finance', 'fintech ai', 'financial ai', 'algorithmic trading'] },
  { name: 'AI Governance', keywords: ['ai governance', 'ai policy', 'ai regulation', 'ai compliance'] }
];

const pageIndex = [
  { title: 'Agentic AI Platform', path: 'AgenticAI', description: 'Build autonomous AI agents that think, decide, and act', topics: ['Agentic AI', 'AI', 'Machine Learning'] },
  { title: 'Enterprise Suite', path: 'EnterpriseSuite', description: 'Complete business management solution', topics: ['AI', 'Machine Learning'] },
  { title: 'Cloud Platform', path: 'CloudPlatform', description: 'Scalable AI infrastructure built for performance', topics: ['AI', 'Machine Learning'] },
  { title: 'Developer Tools', path: 'DeveloperTools', description: 'APIs and SDKs for AI integration', topics: ['AI', 'Machine Learning', 'Natural Language Processing'] },
  { title: 'Healthcare Solutions', path: 'Healthcare', description: 'AI-powered healthcare automation', topics: ['AI in Healthcare', 'AI', 'Computer Vision'] },
  { title: 'Financial Services', path: 'FinancialInstitutions', description: 'AI for banking and fintech', topics: ['AI in Finance', 'AI', 'Machine Learning'] },
  { title: 'Blog: Agentic AI Enterprise', path: 'BlogAgenticAIEnterprise', description: 'How autonomous AI agents transform enterprise operations', topics: ['Agentic AI', 'AI', 'AI Ethics'] },
  { title: 'Blog: AI Security', path: 'BlogAgenticAISecurity', description: 'Ensuring trust and security in AI deployments', topics: ['AI Ethics', 'AI Governance', 'AI'] },
  { title: 'Blog: AI ROI', path: 'BlogAgenticAIROI', description: 'Measuring the ROI of your AI investment', topics: ['AI', 'AI Governance'] },
  { title: 'Documentation', path: 'Documentation', description: 'Complete guides for AI implementation', topics: ['AI', 'Machine Learning', 'Natural Language Processing'] },
  { title: 'AI Ethics & Governance', path: 'Cyber', description: 'Trust, safety, and responsible AI', topics: ['AI Ethics', 'AI Governance', 'AI'] }
];

export default function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    if (q) {
      setQuery(q);
      performSearch(q);
    }
  }, []);

  const performSearch = async (searchQuery) => {
    setLoading(true);
    
    // Instant local search
    const localResults = pageIndex.filter(page => 
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setResults(localResults);

    // Detect AI topics
    const detectedTopics = aiTopics.filter(topic =>
      topic.keywords.some(kw => searchQuery.toLowerCase().includes(kw.toLowerCase()))
    ).map(t => t.name);
    
    setSelectedTopics(detectedTopics);

    // AI-powered analysis for better results
    try {
      const response = await base44.integrations.Core.InvokeLLM({
        prompt: `Given the search query "${searchQuery}", analyze which of these AI topics are most relevant:
${aiTopics.map(t => t.name).join(', ')}

Also suggest 3 most relevant pages from this list that would help answer the user's query:
${pageIndex.map(p => `${p.title}: ${p.description}`).join('\n')}

Return ONLY a JSON object with:
{
  "topics": ["topic1", "topic2"],
  "recommendedPages": ["title1", "title2", "title3"],
  "summary": "brief explanation of what user is looking for"
}`,
        response_json_schema: {
          type: 'object',
          properties: {
            topics: { type: 'array', items: { type: 'string' } },
            recommendedPages: { type: 'array', items: { type: 'string' } },
            summary: { type: 'string' }
          }
        }
      });

      setAiAnalysis(response);
      
      // Merge AI recommendations with local results
      if (response.recommendedPages) {
        const aiResults = pageIndex.filter(page => 
          response.recommendedPages.some(rec => 
            page.title.toLowerCase().includes(rec.toLowerCase())
          )
        );
        
        // Combine and deduplicate
        const combined = [...new Map([...aiResults, ...localResults].map(item => [item.path, item])).values()];
        setResults(combined.slice(0, 10));
      }

      if (response.topics) {
        setSelectedTopics(prev => [...new Set([...prev, ...response.topics])]);
      }
    } catch (error) {
      console.error('AI search failed:', error);
    }
    
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query);
      window.history.pushState({}, '', createPageUrl('SearchResults') + `?q=${encodeURIComponent(query)}`);
    }
  };

  const filterByTopic = (topic) => {
    const filtered = pageIndex.filter(page => 
      page.topics.includes(topic)
    );
    setResults(filtered);
    setSelectedTopics([topic]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta 
        title="Search Results"
        description="Search our AI platform for topics, products, and resources"
        url="/search"
        keywords={['search', 'ai search', 'find']}
      />

      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for AI topics, products, or resources..."
                className="pl-12 pr-4 h-14 text-lg rounded-full border-2 border-gray-200 focus:border-[#8B2EE5]"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Topics */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="font-semibold text-gray-900 mb-4">AI Topics</h3>
              <div className="space-y-2">
                {aiTopics.map((topic) => (
                  <button
                    key={topic.name}
                    onClick={() => filterByTopic(topic.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      selectedTopics.includes(topic.name)
                        ? 'bg-[#8B2EE5] text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {topic.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Results */}
          <div className="lg:col-span-3">
            {/* AI Analysis Banner */}
            {aiAnalysis && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border border-purple-100"
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-[#8B2EE5] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI Insights</h3>
                    <p className="text-gray-700">{aiAnalysis.summary}</p>
                    {aiAnalysis.topics && aiAnalysis.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {aiAnalysis.topics.map((topic, idx) => (
                          <Badge key={idx} className="bg-[#8B2EE5] text-white">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Loading */}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-[#8B2EE5]" />
              </div>
            )}

            {/* Results Count */}
            {!loading && results.length > 0 && (
              <div className="mb-6">
                <p className="text-gray-600">
                  Found <span className="font-semibold text-gray-900">{results.length}</span> result{results.length !== 1 ? 's' : ''} for "{query}"
                </p>
              </div>
            )}

            {/* Results List */}
            <div className="space-y-6">
              {results.map((result, idx) => (
                <motion.div
                  key={result.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={createPageUrl(result.path)}
                    className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-[#8B2EE5] hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#8B2EE5] transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{result.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {result.topics.map((topic, topicIdx) => (
                            <Badge key={topicIdx} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#8B2EE5] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {!loading && results.length === 0 && query && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">Try searching with different keywords or explore our AI topics</p>
                <Button onClick={() => setQuery('')} variant="outline">
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}