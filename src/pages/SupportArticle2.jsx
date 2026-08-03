import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle2() {
  return (
    <>
      <PageMeta
        title="API Authentication Guide"
        description="Learn how to securely authenticate your API requests to 1cPlatform using API keys, OAuth 2.0, and JWT tokens with security best practices."
        url="/SupportArticle2"
        keywords={['API authentication', 'API keys', 'OAuth 2.0', 'JWT tokens', 'secure API requests', 'API security', 'bearer token']}
        article={{ datePublished: '2025-12-14', section: 'Authentication', tags: ['API authentication','API keys','OAuth 2.0','JWT tokens','secure API requests','API security','bearer token'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle2">
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
            <p className="text-[#8B2EE5] font-semibold mb-4">AUTHENTICATION</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              API Authentication Guide
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 8 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Learn how to securely authenticate your API requests to 1cPlatform using API keys, OAuth, and JWT tokens.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Authentication Methods</h2>
            <p className="text-gray-700 mb-4">
              1cPlatform supports three authentication methods:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li><strong>API Keys</strong> - Simple authentication for server-side applications</li>
              <li><strong>OAuth 2.0</strong> - Industry-standard protocol for user authentication</li>
              <li><strong>JWT Tokens</strong> - Secure token-based authentication for distributed systems</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting Your API Key</h2>
            <p className="text-gray-700 mb-4">
              To get your API key:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Log into your 1cPlatform dashboard</li>
              <li>Navigate to Settings → API Keys</li>
              <li>Click "Generate New Key"</li>
              <li>Copy and securely store your key</li>
            </ol>

            <div className="bg-gray-900 text-white p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-400 mb-2">Example Request</p>
              <code className="text-sm">
                curl https://api.1cplatform.com/v1/agents \<br />
                &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY"
              </code>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Security Best Practices</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Never expose API keys in client-side code</li>
              <li>Rotate keys regularly (every 90 days recommended)</li>
              <li>Use environment variables to store keys</li>
              <li>Implement rate limiting on your end</li>
              <li>Monitor API usage for unusual activity</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Important</p>
              <p className="text-gray-700">
                If you suspect your API key has been compromised, revoke it immediately from your dashboard and generate a new one.
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