import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Maximize2, Minimize2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogContextWindowOptimization() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Context Window Optimization for AI Applications"
        description="Maximize context efficiency in AI apps. Token management, context compression, sliding windows, and memory optimization strategies."
        url="/blog/context-window-optimization"
        keywords={['context window', 'token optimization', 'context compression', 'AI memory', 'token management']}
      />

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
          Context Window Optimization for AI Applications
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Dr. Sarah Kim</span>
          <span>•</span>
          <span>January 26, 2025</span>
          <span>•</span>
          <span>16 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200"
          alt="Context Optimization"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Context windows are limited, but user conversations aren't. This guide covers strategies for fitting maximum relevant information into your token budget while maintaining conversation quality and coherence.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Context Limits</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">8K</div>
              <div className="text-sm text-gray-700">GPT-3.5</div>
              <div className="text-xs text-gray-600 mt-1">~6000 words</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">128K</div>
              <div className="text-sm text-gray-700">GPT-4</div>
              <div className="text-xs text-gray-600 mt-1">~96,000 words</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">200K</div>
              <div className="text-sm text-gray-700">Claude 3</div>
              <div className="text-xs text-gray-600 mt-1">~150,000 words</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compression Strategies</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Message Summarization</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-sm text-gray-700 mb-4">Condense older messages to save tokens:</p>
            <div className="space-y-3 text-xs">
              <div className="bg-white rounded p-3 border border-blue-200">
                <div className="font-semibold text-gray-900 mb-1">Original (450 tokens):</div>
                <div className="text-gray-700">[15 messages of troubleshooting back and forth]</div>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <div className="font-semibold text-green-600 mb-1">Summarized (80 tokens):</div>
                <div className="text-gray-700">"User had login issue. Tried password reset. Problem was browser cache. Cleared cache, resolved."</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sliding Window Pattern</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900">Rolling Context</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded border border-purple-200">
                <strong className="text-gray-900">Keep:</strong> <span className="text-gray-700">Last 10 messages (detailed)</span>
              </div>
              <div className="p-3 bg-white rounded border border-purple-200">
                <strong className="text-gray-900">Summarize:</strong> <span className="text-gray-700">Messages 11-50 (compressed)</span>
              </div>
              <div className="p-3 bg-white rounded border border-purple-200">
                <strong className="text-gray-900">Archive:</strong> <span className="text-gray-700">Messages 50+ (stored, not in context)</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Selective Context Inclusion</h2>

          <p className="text-gray-700 mb-6">
            Only include what's relevant to current query:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Smart Filtering</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Current topic messages (last 5 on-topic)</li>
              <li>• User preferences (stored facts about user)</li>
              <li>• Relevant knowledge (retrieved docs for query)</li>
              <li>• System instructions (always included)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Token Budget Allocation</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">Example: 8K Token Budget</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">System prompt</span>
                <span className="font-mono text-gray-900">500 tokens</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">User context</span>
                <span className="font-mono text-gray-900">1000 tokens</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Retrieved knowledge</span>
                <span className="font-mono text-gray-900">2000 tokens</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Conversation history</span>
                <span className="font-mono text-gray-900">1500 tokens</span>
              </div>
              <div className="flex justify-between p-2 bg-blue-50 rounded border-t-2 border-blue-300">
                <span className="font-bold text-gray-900">Reserved for response</span>
                <span className="font-mono font-bold text-blue-600">3000 tokens</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Effective context window management enables rich, long conversations without hitting limits. Use compression, selective inclusion, and smart budgeting to maximize what fits in your context while maintaining quality.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Optimize your context</h3>
            <p className="text-lg text-purple-100 mb-6">
              Build AI apps with efficient token usage
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