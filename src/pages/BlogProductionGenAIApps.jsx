import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, AlertTriangle, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogProductionGenAIApps() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Building Production-Ready Generative AI Applications"
        description="Essential patterns for deploying generative AI apps. Reliability, monitoring, error handling, versioning, and production best practices."
        url="/blog/production-genai-apps"
        keywords={['production AI', 'generative AI deployment', 'AI reliability', 'AI monitoring', 'production best practices']}
        article={{
        author: 'Dr. James Wilson',
        datePublished: '2025-01-15',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
        section: 'Agentic Insights',
        tags: ['agentic insights', 'AI', 'agentic AI'],
        timeRequired: 'PT20M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Building Production-Ready Generative AI ' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <InternalLinker currentPage="BlogProductionGenAIApps">
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
          Building Production-Ready Generative AI Applications
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Dr. James Wilson</span>
          <span>•</span>
          <span>January 15, 2025</span>
          <span>•</span>
          <span>20 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200"
          alt="Production AI"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Moving from prototype to production-ready generative AI is where most projects fail. Production requires reliability, monitoring, graceful degradation, and operational excellence. This comprehensive guide covers everything needed to deploy AI apps that work reliably at scale.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Production Readiness Checklist</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Must Have</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ Error handling and retries</li>
                <li>✓ Rate limiting</li>
                <li>✓ Input validation</li>
                <li>✓ Output filtering</li>
                <li>✓ Monitoring and alerts</li>
                <li>✓ Logging and debugging</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <Rocket className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Should Have</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Caching layer</li>
                <li>• A/B testing framework</li>
                <li>• User feedback collection</li>
                <li>• Cost tracking</li>
                <li>• Performance optimization</li>
                <li>• Graceful degradation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reliability Patterns</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Retry with Exponential Backoff</h3>
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`async function generateWithRetry(prompt, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await llm.generate(prompt);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      if (error.status === 429) { // Rate limit
        await sleep(Math.pow(2, i) * 1000);
      } else {
        throw error; // Don't retry non-transient errors
      }
    }
  }
}`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fallback Strategies</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
            <h4 className="font-bold text-gray-900 mb-3">Graceful Degradation</h4>
            <ol className="text-sm text-gray-700 space-y-2">
              <li>1. Try primary LLM (GPT-4)</li>
              <li>2. If failed, try backup LLM (Claude)</li>
              <li>3. If both fail, use cached/template response</li>
              <li>4. If no cache, return helpful error message</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monitoring and Observability</h2>

          <p className="text-gray-700 mb-6">Track these critical metrics:</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{'<'}2s</div>
              <div className="text-sm text-gray-700">P95 Response Time</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-700">Success Rate</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$0.02</div>
              <div className="text-sm text-gray-700">Avg Cost/Request</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Error Handling</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="font-bold text-gray-900">Handle Every Error Type</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Rate Limits:</strong> Queue requests, retry with backoff</li>
              <li><strong>Timeouts:</strong> Set reasonable limits, fail fast</li>
              <li><strong>Invalid Responses:</strong> Validate outputs, retry if malformed</li>
              <li><strong>Content Policy:</strong> Detect and handle rejections</li>
              <li><strong>Network Errors:</strong> Retry transient failures</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Versioning and Rollback</h2>

          <p className="text-gray-700 mb-6">
            Always be able to rollback changes instantly:
          </p>

          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• Version your prompts (prompt_v1, prompt_v2)</li>
            <li>• A/B test new versions before full rollout</li>
            <li>• Keep previous version running for instant rollback</li>
            <li>• Track which version served each request</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices</h2>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Set aggressive timeouts to prevent hanging requests</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Implement circuit breakers for external dependencies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Cache aggressively to reduce costs and improve speed</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Monitor costs in real-time, set budget alerts</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build production-ready AI apps</h3>
            <p className="text-lg text-blue-100 mb-6">
              Deploy reliable generative AI applications at scale
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </InternalLinker>
      
      <RelatedContent currentPage="BlogProductionGenAIApps" category="blog" title="Related Articles" />
      </article>
    </div>
  );
}