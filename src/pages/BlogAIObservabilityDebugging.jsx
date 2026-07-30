import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Eye, Bug, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogAIObservabilityDebugging() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="AI Application Observability and Debugging"
        description="Debug AI apps effectively. Tracing, logging, replay systems, LLM call inspection, and troubleshooting methodologies."
        url="/blog/ai-observability-debugging"
        keywords={['AI debugging', 'observability', 'tracing', 'logging', 'troubleshooting', 'LLM debugging']}
        article={{
        author: 'Rachel Foster',
        datePublished: '2025-01-22',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
        section: 'Agentic Capabilities',
        tags: ['agentic capabilities', 'AI', 'agentic AI'],
        timeRequired: 'PT19M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'AI Application Observability and Debuggi' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <InternalLinker currentPage="BlogAIObservabilityDebugging">
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
          AI Application Observability and Debugging
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Rachel Foster</span>
          <span>•</span>
          <span>January 22, 2025</span>
          <span>•</span>
          <span>19 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200"
          alt="Debugging"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Debugging AI apps is challenging—non-deterministic outputs, complex chains, and opaque model reasoning. This guide covers observability tools and debugging methodologies to troubleshoot AI applications effectively.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What to Log</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">Essential Logging</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Full prompt sent to LLM (input + system + context)</li>
              <li>• Complete model response (before any filtering)</li>
              <li>• Tool calls made (function name, parameters, results)</li>
              <li>• Latency for each step</li>
              <li>• Cost per request</li>
              <li>• User feedback (thumbs up/down)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Distributed Tracing</h2>

          <p className="text-gray-700 mb-6">
            Follow request through entire system:
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 bg-white rounded border border-purple-200">
                <span className="text-blue-600">trace_id: abc123</span> | User request received
              </div>
              <div className="p-2 bg-white rounded border border-purple-200 ml-4">
                <span className="text-blue-600">span_1:</span> Retrieve context from vector DB (42ms)
              </div>
              <div className="p-2 bg-white rounded border border-purple-200 ml-4">
                <span className="text-blue-600">span_2:</span> Call GPT-4 (2.1s)
              </div>
              <div className="p-2 bg-white rounded border border-purple-200 ml-8">
                <span className="text-blue-600">span_2.1:</span> Tool call: get_user_data (180ms)
              </div>
              <div className="p-2 bg-white rounded border border-purple-200 ml-4">
                <span className="text-blue-600">span_3:</span> Format response (15ms)
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">LLM Call Inspector</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">Debug Interface</h4>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
              <div>
                <div className="font-semibold text-gray-900 mb-1">Request #12453</div>
                <div className="text-xs text-gray-600">2025-01-22 10:30:15 UTC</div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="text-center p-2 bg-white rounded">
                  <div className="font-bold">Model</div>
                  <div className="text-gray-700">GPT-4</div>
                </div>
                <div className="text-center p-2 bg-white rounded">
                  <div className="font-bold">Tokens</div>
                  <div className="text-gray-700">2,450</div>
                </div>
                <div className="text-center p-2 bg-white rounded">
                  <div className="font-bold">Cost</div>
                  <div className="text-gray-700">$0.073</div>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="text-gray-900 font-semibold">📤 Prompt:</div>
                <div className="text-gray-900 font-semibold">📥 Response:</div>
                <div className="text-gray-900 font-semibold">🔧 Tools: [get_user_data, send_email]</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Replay and Testing</h2>

          <p className="text-gray-700 mb-6">
            Reproduce issues by replaying exact conditions:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Store full request context</li>
              <li>• Replay with same prompt/tools/state</li>
              <li>• Compare outputs across replays</li>
              <li>• Test fixes before deploying</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Debugging Scenarios</h2>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <Bug className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Issue: Agent gives wrong answers</h3>
                <p className="text-sm text-gray-700">Check: Prompt clarity, retrieved context relevance, model temperature</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bug className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Issue: Slow responses</h3>
                <p className="text-sm text-gray-700">Check: Token count, tool call latency, database queries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bug className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Issue: High costs</h3>
                <p className="text-sm text-gray-700">Check: Context size, model choice, cache hit rate</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Observability is critical for production AI apps. Implement comprehensive logging, distributed tracing, and replay capabilities to debug issues quickly and improve your AI systems continuously.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build observable AI</h3>
            <p className="text-lg text-purple-100 mb-6">
              Debug and optimize with full visibility
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </InternalLinker>
      
      <RelatedContent currentPage="BlogAIObservabilityDebugging" category="blog" title="Related Articles" />
      </article>
    </div>
  );
}