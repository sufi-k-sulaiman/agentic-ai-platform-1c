import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle4() {
  return (
    <>
      <PageMeta
        title="Troubleshooting Common Errors"
        description="Quick solutions to the most common errors you might encounter when working with 1cPlatform agents, APIs, and integrations."
        url="/SupportArticle4"
        keywords={['troubleshooting', 'error handling', 'common errors', 'debugging AI', 'API errors', 'error solutions', 'fixing errors']}
        article={{ datePublished: '2025-12-14', section: 'Troubleshooting', tags: ['troubleshooting','error handling','common errors','debugging AI','API errors','error solutions','fixing errors'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle4">
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
            <p className="text-[#8B2EE5] font-semibold mb-4">TROUBLESHOOTING</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Troubleshooting Common Errors
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 10 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Quick solutions to the most common errors you might encounter when working with 1cPlatform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">401 Unauthorized</h2>
            <p className="text-gray-700 mb-4">
              <strong>Cause:</strong> Invalid or missing API key
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Verify your API key is correct</li>
              <li>Check that the key hasn't expired</li>
              <li>Ensure you're using the correct authentication header format</li>
              <li>Confirm the key has the necessary permissions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">429 Too Many Requests</h2>
            <p className="text-gray-700 mb-4">
              <strong>Cause:</strong> You've exceeded your rate limit
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Implement exponential backoff</li>
              <li>Check X-RateLimit-Reset header for retry time</li>
              <li>Consider upgrading your plan</li>
              <li>Optimize your request patterns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">500 Internal Server Error</h2>
            <p className="text-gray-700 mb-4">
              <strong>Cause:</strong> Unexpected server error
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Retry the request after a brief delay</li>
              <li>Check our status page for ongoing incidents</li>
              <li>If persistent, contact support with the request ID</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">400 Bad Request</h2>
            <p className="text-gray-700 mb-4">
              <strong>Cause:</strong> Malformed request or invalid parameters
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Verify JSON syntax is correct</li>
              <li>Check all required parameters are included</li>
              <li>Ensure parameter types match the API specification</li>
              <li>Review the error message for specific details</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">404 Not Found</h2>
            <p className="text-gray-700 mb-4">
              <strong>Cause:</strong> Resource doesn't exist or incorrect endpoint
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Solution:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Verify the endpoint URL is correct</li>
              <li>Check that the resource ID is valid</li>
              <li>Ensure you're using the correct API version</li>
              <li>Confirm the resource hasn't been deleted</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">🔍 Still Stuck?</p>
              <p className="text-gray-700">
                If these solutions don't resolve your issue, contact our support team with your request ID and we'll help you troubleshoot further.
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
      </InternalLinker>
    </div>
    </>
  );
}