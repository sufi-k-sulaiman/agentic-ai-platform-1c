import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Database, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogKnowledgeRetrievalCapabilities() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Knowledge Retrieval Capabilities: How Agents Find Information"
        description="Master information retrieval in AI agents. Vector search, semantic similarity, ranking algorithms, and retrieval optimization."
        url="/blog/knowledge-retrieval-capabilities"
        keywords={['knowledge retrieval', 'vector search', 'semantic search', 'RAG', 'information retrieval']}
        article={{
        author: 'Rachel Foster',
        datePublished: '2025-01-21',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200',
        section: 'Agentic Capabilities',
        tags: ['agentic capabilities', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Knowledge Retrieval Capabilities: How Ag' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Blog')}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-6 bg-purple-100 text-[#8B2EE5]">Agentic Capabilities</Badge>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Knowledge Retrieval Capabilities: How Agents Find Information
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Rachel Foster</span>
          <span>•</span>
          <span>January 21, 2025</span>
          <span>•</span>
          <span>16 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200"
          alt="Knowledge Retrieval"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Agents can't know everything. The ability to retrieve relevant information from vast knowledge bases is crucial. This guide explores how agents find the right information at the right time through semantic search, ranking, and retrieval optimization.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Retrieval Architecture</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">RAG Pipeline</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span className="text-gray-700">User query → Generate embedding</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span className="text-gray-700">Search vector database for similar docs</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span className="text-gray-700">Rank and filter top results</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span className="text-gray-700">Include in prompt as context</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Semantic Search</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Beyond Keywords</h3>
          <p className="text-gray-700 mb-6">
            Find documents by meaning, not exact word matches:
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-purple-200">
                <strong className="text-gray-900">Query:</strong> <span className="text-gray-700">"How do I get my money back?"</span>
              </div>
              <div className="bg-white rounded p-3 border border-purple-200">
                <strong className="text-purple-600">Matches:</strong>
                <ul className="text-gray-700 mt-1 ml-4 space-y-1 text-xs">
                  <li>• Document about "refund policy" (high similarity)</li>
                  <li>• Document about "returns process" (high similarity)</li>
                  <li>• Document about "cancellations" (medium similarity)</li>
                </ul>
                <div className="text-xs text-gray-600 mt-2">No exact word "money" in top results, but semantically related</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ranking Algorithms</h2>

          <p className="text-gray-700 mb-6">
            Not all retrieved documents are equally relevant. Ranking factors:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-3">Relevance Signals</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Semantic similarity score</li>
                <li>• Keyword overlap</li>
                <li>• Recency (newer = better)</li>
                <li>• Document authority/quality</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-3">Context Signals</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• User's past queries</li>
                <li>• User's role/permissions</li>
                <li>• Current task context</li>
                <li>• Geographic location</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hybrid Search</h2>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Combine Multiple Search Methods</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between p-2 bg-white rounded">
                <span>Semantic search (vector)</span>
                <span className="text-green-600 font-semibold">60%</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded">
                <span>Keyword search (BM25)</span>
                <span className="text-green-600 font-semibold">30%</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded">
                <span>Metadata filters</span>
                <span className="text-green-600 font-semibold">10%</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Retrieval Optimization</h2>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Chunk Size:</strong> 200-500 tokens optimal for most use cases</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Top-K:</strong> Retrieve 5-10 documents, more creates noise</span>
            </li>
            <li className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700"><strong>Reranking:</strong> Use cross-encoder for final ranking</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Knowledge retrieval capabilities enable agents to access vast information while staying within context limits. Master semantic search, hybrid approaches, and ranking optimization to build agents that always find the right information.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build knowledge-powered agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create AI with advanced retrieval capabilities
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}