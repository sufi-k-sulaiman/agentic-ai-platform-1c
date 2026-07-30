import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, DollarSign, TrendingDown, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogManagingAICosts() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Managing AI Model Costs in Production Applications"
        description="Cost optimization for generative AI apps. Token usage tracking, caching strategies, model selection, and budget management."
        url="/blog/managing-ai-costs"
        keywords={['AI costs', 'cost optimization', 'token management', 'AI budget', 'caching strategies']}
        article={{
        author: 'David Park',
        datePublished: '2025-01-13',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200',
        section: 'Agentic Insights',
        tags: ['agentic insights', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Managing AI Model Costs in Production Ap' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Blog')}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-6 bg-blue-100 text-blue-700">Agentic Insights</Badge>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Managing AI Model Costs in Production Applications
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By David Park</span>
          <span>•</span>
          <span>January 13, 2025</span>
          <span>•</span>
          <span>16 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200"
          alt="Cost Management"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            AI model costs can spiral out of control quickly. Without proper monitoring and optimization, your AI app can become prohibitively expensive. This guide covers strategies to minimize costs while maintaining quality and performance.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Cost Drivers</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <PieChart className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">Where Your Money Goes</h3>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between p-3 bg-white rounded border border-blue-200">
                <span><strong>Input tokens:</strong> User queries, system prompts</span>
                <span className="text-blue-600 font-bold">~40%</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded border border-blue-200">
                <span><strong>Output tokens:</strong> Model responses</span>
                <span className="text-blue-600 font-bold">~50%</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded border border-blue-200">
                <span><strong>Context tokens:</strong> Conversation history, RAG docs</span>
                <span className="text-blue-600 font-bold">~10%</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Caching Strategies</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Semantic Caching</h3>
          <p className="text-gray-700 mb-6">
            Cache responses based on semantic similarity, not exact match:
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-sm">
            <div className="space-y-2">
              <div className="text-gray-700">Query 1: "How do I reset my password?"</div>
              <div className="text-blue-600">→ Cache MISS, call LLM, store result</div>
              <div className="text-gray-700 mt-4">Query 2: "I forgot my password, how to reset?"</div>
              <div className="text-green-600">→ Cache HIT (90% similarity), return cached</div>
              <div className="text-xs text-gray-600 mt-3">Saved: $0.002 and 1.2 seconds</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Model Selection Strategy</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">GPT-4</div>
              <div className="text-sm text-gray-600 mb-3">Complex reasoning</div>
              <div className="text-xs text-gray-700">$0.03 / 1K tokens</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">GPT-3.5</div>
              <div className="text-sm text-gray-600 mb-3">Most tasks</div>
              <div className="text-xs text-green-600 font-bold">$0.002 / 1K tokens</div>
              <div className="text-xs text-green-600 mt-1">15x cheaper</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">Claude Haiku</div>
              <div className="text-sm text-gray-600 mb-3">Simple tasks</div>
              <div className="text-xs text-gray-700">$0.00025 / 1K tokens</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Token Optimization</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Compress System Prompts</h3>
                <p className="text-gray-700 text-sm">Remove unnecessary words, use abbreviations where clear</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Limit Context Window</h3>
                <p className="text-gray-700 text-sm">Only include relevant conversation history, not entire transcript</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Budget Management</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Cost Controls</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Set daily/monthly spending limits</li>
              <li>• Alert when approaching 80% of budget</li>
              <li>• Automatically throttle requests at limit</li>
              <li>• Track cost per user, per feature</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cost Monitoring Dashboard</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">Key Metrics to Track</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="text-gray-700">• Cost per request</div>
                <div className="text-gray-700">• Daily/monthly spend</div>
                <div className="text-gray-700">• Cost by model</div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-700">• Cache hit rate</div>
                <div className="text-gray-700">• Average tokens per request</div>
                <div className="text-gray-700">• Cost per user</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Managing AI costs is critical for sustainable applications. By implementing caching, choosing models strategically, optimizing token usage, and monitoring closely, you can reduce costs by 60-80% while maintaining quality.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Optimize your AI costs</h3>
            <p className="text-lg text-blue-100 mb-6">
              Build cost-efficient generative AI applications
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}