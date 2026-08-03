import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle1() {
  return (
    <>
      <PageMeta
        title="Creating Your First AI Agent"
        description="Get started with 1cPlatform by creating your first AI agent in just a few minutes. This guide walks through the entire process step by step."
        url="/SupportArticle1"
        keywords={['creating AI agent', 'AI agent setup', '1cPlatform tutorial', 'getting started with AI', 'no-code AI builder', 'AI agent creation']}
        article={{ datePublished: '2025-12-14', section: 'Getting Started', tags: ['creating AI agent','AI agent setup','1cPlatform tutorial','getting started with AI','no-code AI builder','AI agent creation'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle1">
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
            <p className="text-[#8B2EE5] font-semibold mb-4">GETTING STARTED</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creating Your First AI Agent
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 5 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Get started with 1cPlatform by creating your first AI agent in just a few minutes. This guide will walk you through the entire process step by step.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Prerequisites</h2>
            <p className="text-gray-700 mb-4">
              Before you begin, make sure you have:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>A 1cPlatform account (sign up for free if you haven't)</li>
              <li>Your API key from the dashboard</li>
              <li>Basic understanding of APIs (helpful but not required)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 1: Access the Agent Builder</h2>
            <p className="text-gray-700 mb-4">
              Log into your 1cPlatform dashboard and navigate to the "Agents" section. Click on "Create New Agent" to open the no-code agent builder interface.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 2: Configure Your Agent</h2>
            <p className="text-gray-700 mb-4">
              Give your agent a name and description. Choose the capabilities you want to enable:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Natural language processing</li>
              <li>Data analysis and insights</li>
              <li>Task automation</li>
              <li>Integration with external systems</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 3: Define Agent Behavior</h2>
            <p className="text-gray-700 mb-4">
              Use our visual workflow builder to define how your agent should respond to different scenarios. You can set up triggers, conditions, and actions without writing any code.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 4: Test Your Agent</h2>
            <p className="text-gray-700 mb-4">
              Before deploying, use our built-in testing environment to ensure your agent behaves as expected. Send test inputs and verify the responses.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Step 5: Deploy</h2>
            <p className="text-gray-700 mb-4">
              Once you're satisfied with the testing, click "Deploy" to make your agent live. You'll receive an endpoint URL that you can use to integrate the agent into your applications.
            </p>

            <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">Pro Tip</p>
              <p className="text-gray-700">
                Start with a simple agent and gradually add more complex features as you become familiar with the platform. You can always update your agent later.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Next Steps</h2>
            <p className="text-gray-700 mb-4">
              Now that you've created your first agent, explore these resources:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Learn about advanced agent orchestration</li>
              <li>Integrate with your existing systems</li>
              <li>Monitor agent performance and analytics</li>
              <li>Scale your agent deployments</li>
            </ul>
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