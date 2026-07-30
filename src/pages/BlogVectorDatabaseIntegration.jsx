import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Database, Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogVectorDatabaseIntegration() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Vector Database Integration for AI Applications"
        description="Master vector databases for AI apps. Embeddings, similarity search, indexing strategies, and production deployment patterns."
        url="/blog/vector-database-integration"
        keywords={['vector database', 'embeddings', 'similarity search', 'Pinecone', 'Weaviate', 'RAG']}
        article={{
        author: 'Kevin Zhang',
        datePublished: '2025-01-23',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
        section: 'Agentic Capabilities',
        tags: ['agentic capabilities', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Vector Database Integration for AI Appli' }]} />

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
          Vector Database Integration for AI Applications
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Kevin Zhang</span>
          <span>•</span>
          <span>January 23, 2025</span>
          <span>•</span>
          <span>17 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200"
          alt="Vector Database"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Vector databases are the backbone of modern AI applications, enabling semantic search, RAG, and personalization. This guide covers embeddings, similarity search, indexing strategies, and production patterns for vector databases.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What are Vector Databases?</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-sm text-gray-700 mb-4">Store and search by semantic meaning, not keywords:</p>
            <div className="space-y-3 text-xs">
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-gray-900">Traditional DB:</strong> <span className="text-gray-700">"password reset" only matches exact phrase</span>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-blue-600">Vector DB:</strong> <span className="text-gray-700">"password reset" finds "forgot password", "can't login", "reset credentials"</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Embeddings 101</h2>

          <p className="text-gray-700 mb-6">
            Convert text to numerical vectors that capture meaning:
          </p>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`// Generate embedding
const embedding = await openai.embeddings.create({
  model: "text-embedding-3-small",
  input: "How do I reset my password?"
});

// Result: [0.023, -0.142, 0.891, ... ] (1536 dimensions)
// Similar questions will have similar vectors`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Popular Vector Databases</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">Pinecone</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Fully managed</li>
                <li>✓ Fast, scalable</li>
                <li>✗ Paid only</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">Weaviate</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Open source</li>
                <li>✓ Hybrid search</li>
                <li>✗ Self-host</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">Qdrant</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ High performance</li>
                <li>✓ Good filtering</li>
                <li>✗ Smaller ecosystem</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">Chroma</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Simple, embedded</li>
                <li>✓ Great for dev</li>
                <li>✗ Limited scale</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Similarity Search</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900">Finding Similar Vectors</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded border border-purple-200">
                <strong className="text-gray-900">Query:</strong> <span className="text-gray-700">"How to cancel subscription"</span>
              </div>
              <div className="p-3 bg-white rounded border border-purple-200">
                <strong className="text-purple-600">Results (by similarity):</strong>
                <ul className="text-gray-700 mt-1 ml-4 space-y-1 text-xs">
                  <li>1. "Cancellation process" (0.94 similarity)</li>
                  <li>2. "End my subscription" (0.91 similarity)</li>
                  <li>3. "Refund policy" (0.78 similarity)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Indexing Strategies</h2>

          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• <strong>HNSW:</strong> Fast approximate search, great for production</li>
            <li>• <strong>IVF:</strong> Cluster-based, good for huge datasets</li>
            <li>• <strong>Flat:</strong> Exact search, slow but accurate</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Production Best Practices</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Batch embed documents (don't embed one-by-one)</li>
              <li>• Cache embeddings (don't regenerate)</li>
              <li>• Use metadata filters to narrow search</li>
              <li>• Monitor query latency (target {'<'}50ms)</li>
              <li>• Regularly reindex for optimal performance</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Vector databases unlock semantic search capabilities essential for modern AI apps. Choose the right database for your scale, optimize embeddings, and implement efficient indexing for fast, relevant results.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Integrate vector databases</h3>
            <p className="text-lg text-purple-100 mb-6">
              Build AI apps with semantic search
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