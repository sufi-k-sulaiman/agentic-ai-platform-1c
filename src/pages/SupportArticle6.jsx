import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle6() {
  return (
    <>
      <PageMeta
        title="Integrating with Third-Party Services"
        description="Connect your AI agents with popular third-party services and APIs to extend functionality and automate cross-platform workflows."
        url="/SupportArticle6"
        keywords={['third-party integration', 'API integration', 'service connectors', 'workflow automation', 'external services', 'webhook integration']}
        article={{ datePublished: '2025-12-14', section: 'Integration', tags: ['third-party integration','API integration','service connectors','workflow automation','external services','webhook integration'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle6">
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
            <p className="text-[#8B2EE5] font-semibold mb-4">INTEGRATION</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Integrating with Third-Party Services
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 9 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Connect your AI agents with popular third-party services to extend functionality and automate workflows.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Supported Integrations</h2>
            <p className="text-gray-700 mb-4">
              1cPlatform offers pre-built connectors for popular services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>CRM systems (Salesforce, HubSpot, Zoho)</li>
              <li>Communication tools (Slack, Microsoft Teams, Discord)</li>
              <li>Databases (PostgreSQL, MongoDB, MySQL)</li>
              <li>Cloud storage (AWS S3, Google Cloud Storage, Azure)</li>
              <li>Payment processors (Stripe, PayPal)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting Up an Integration</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-8">
              <li>
                <strong>Navigate to Integrations:</strong> Go to your dashboard and select "Integrations" from the menu
              </li>
              <li>
                <strong>Choose a service:</strong> Click on the service you want to integrate
              </li>
              <li>
                <strong>Authenticate:</strong> Follow the OAuth flow to grant permissions
              </li>
              <li>
                <strong>Configure:</strong> Set up any required parameters or mappings
              </li>
              <li>
                <strong>Test:</strong> Use the test button to verify the connection
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Custom Integrations</h2>
            <p className="text-gray-700 mb-4">
              For services without pre-built connectors, use our flexible webhook system:
            </p>
            <div className="bg-gray-900 text-white p-6 rounded-lg mb-8">
              <code className="text-sm">
                {`{
  "url": "https://your-service.com/webhook",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer TOKEN"
  },
  "events": ["agent.completed", "task.failed"]
}`}
              </code>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Use Cases</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">CRM Automation</p>
                <p className="text-gray-700 text-sm">Automatically update contact records based on AI agent interactions</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Notification System</p>
                <p className="text-gray-700 text-sm">Send alerts to Slack when agents complete tasks or encounter errors</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Data Pipeline</p>
                <p className="text-gray-700 text-sm">Export AI-generated insights directly to your data warehouse</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">Need Help?</p>
              <p className="text-gray-700">
                If you need assistance setting up a specific integration, our support team can provide custom guidance and best practices.
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