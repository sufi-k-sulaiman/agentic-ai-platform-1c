import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function SupportArticle3() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('HelpCenter')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[#8B2EE5] font-semibold mb-4">API USAGE</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Understanding Rate Limits
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 6 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Learn about 1cPlatform's API rate limits, how they work, and best practices for staying within your limits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rate Limit Tiers</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Free Tier</p>
                <p className="text-gray-700">100 requests per minute, 10,000 requests per day</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Professional</p>
                <p className="text-gray-700">500 requests per minute, 100,000 requests per day</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Enterprise</p>
                <p className="text-gray-700">Custom limits based on your needs</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How Rate Limits Work</h2>
            <p className="text-gray-700 mb-4">
              Rate limits are calculated using a sliding window algorithm. When you exceed your limit, you'll receive a 429 (Too Many Requests) response with headers indicating when you can retry.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Response Headers</h2>
            <div className="bg-gray-900 text-white p-6 rounded-lg mb-8">
              <code className="text-sm">
                X-RateLimit-Limit: 100<br />
                X-RateLimit-Remaining: 95<br />
                X-RateLimit-Reset: 1639478400
              </code>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Implement exponential backoff for retries</li>
              <li>Cache responses when possible</li>
              <li>Batch multiple operations into single requests</li>
              <li>Monitor your rate limit headers</li>
              <li>Upgrade your plan if you consistently hit limits</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">💡 Tip</p>
              <p className="text-gray-700">
                Use webhooks instead of polling to reduce unnecessary API calls and stay well within your rate limits.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <ThumbsUp className="w-4 h-4" />
                Yes
              </Button>
              <Button variant="outline" className="gap-2">
                <ThumbsDown className="w-4 h-4" />
                No
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}