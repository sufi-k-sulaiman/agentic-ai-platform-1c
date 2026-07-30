import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Gauge, Shield, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogRateLimitingQuotaManagement() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Rate Limiting and Quota Management for AI Applications"
        description="Control AI usage and costs. User quotas, rate limiting strategies, fair usage policies, and overage handling."
        url="/blog/rate-limiting-quota-management"
        keywords={['rate limiting', 'quota management', 'usage limits', 'fair usage', 'cost control']}
        article={{
        author: 'Jennifer Martinez',
        datePublished: '2025-01-21',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200',
        section: 'Agentic Capabilities',
        tags: ['agentic capabilities', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Rate Limiting and Quota Management for A' }]} />

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
          Rate Limiting and Quota Management for AI Applications
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Jennifer Martinez</span>
          <span>•</span>
          <span>January 21, 2025</span>
          <span>•</span>
          <span>14 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200"
          alt="Rate Limiting"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Without limits, AI costs spiral out of control. Rate limiting and quota management protect your infrastructure and budget while ensuring fair access. This guide covers strategies for controlling AI usage effectively.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Rate Limit?</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 mb-1">Cost Control</div>
              <div className="text-xs text-gray-600">Prevent budget overruns</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
              <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 mb-1">Abuse Prevention</div>
              <div className="text-xs text-gray-600">Stop malicious users</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 mb-1">Fair Access</div>
              <div className="text-xs text-gray-600">Ensure availability</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Rate Limiting Strategies</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">Common Patterns</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-gray-900">Fixed Window:</strong> <span className="text-gray-700">10 requests per minute (resets every minute)</span>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-gray-900">Sliding Window:</strong> <span className="text-gray-700">10 requests per rolling 60 seconds</span>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-gray-900">Token Bucket:</strong> <span className="text-gray-700">Allow bursts, replenish gradually</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Quota Tiers</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="font-bold text-gray-900 mb-3 text-center">Free Tier</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 10 requests/day</li>
                <li>• Basic models only</li>
                <li>• 2K token limit</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="font-bold text-gray-900 mb-3 text-center">Pro Tier</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 1000 requests/day</li>
                <li>• All models</li>
                <li>• 8K token limit</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <div className="font-bold text-gray-900 mb-3 text-center">Enterprise</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Unlimited requests</li>
                <li>• Priority access</li>
                <li>• Custom limits</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Overage Handling</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h3 className="font-bold text-gray-900">When Users Hit Limits</h3>
            </div>
            <ol className="space-y-2 text-sm text-gray-700">
              <li>1. Show clear error message with usage stats</li>
              <li>2. Offer upgrade to higher tier</li>
              <li>3. Allow purchase of additional quota</li>
              <li>4. Show when quota resets</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementation</h2>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`async function checkRateLimit(userId) {
  const key = \`rate:\${userId}\`;
  const count = await redis.get(key);
  
  if (count >= USER_LIMITS[user.tier]) {
    throw new Error('Rate limit exceeded');
  }
  
  await redis.incr(key);
  await redis.expire(key, 60); // Reset after 60s
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Rate limiting and quota management are essential for sustainable AI applications. Implement fair limits, provide clear feedback, and make upgrading easy to balance user experience with cost control.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Control AI usage</h3>
            <p className="text-lg text-purple-100 mb-6">
              Implement smart rate limiting and quotas
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