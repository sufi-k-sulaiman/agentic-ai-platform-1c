import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle7() {
  return (
    <>
      <PageMeta
        title="Monitoring Agent Performance"
        description="Learn how to track, analyze, and optimize your AI agent performance using 1cPlatform's built-in analytics dashboard and monitoring tools."
        url="/SupportArticle7"
        keywords={['agent performance', 'AI analytics', 'monitoring AI agents', 'performance metrics', 'agent optimization', 'AI monitoring']}
        article={{ datePublished: '2025-12-14', section: 'Analytics', tags: ['agent performance','AI analytics','monitoring AI agents','performance metrics','agent optimization','AI monitoring'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle7">
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
            <p className="text-[#8B2EE5] font-semibold mb-4">ANALYTICS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Monitoring Agent Performance
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 7 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Learn how to track, analyze, and optimize your AI agent performance using 1cPlatform's built-in analytics.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key Metrics to Track</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li><strong>Response Time:</strong> Average time for agents to complete tasks</li>
              <li><strong>Success Rate:</strong> Percentage of successful task completions</li>
              <li><strong>Error Rate:</strong> Frequency of failures or exceptions</li>
              <li><strong>Throughput:</strong> Number of requests processed per time period</li>
              <li><strong>Cost per Request:</strong> Resource consumption and associated costs</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Accessing Analytics</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Navigate to the Analytics section in your dashboard</li>
              <li>Select the agent or time period you want to analyze</li>
              <li>View real-time and historical performance data</li>
              <li>Export data for further analysis</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Setting Up Alerts</h2>
            <p className="text-gray-700 mb-4">
              Configure alerts to be notified when metrics exceed thresholds:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Error rate exceeds 5%</li>
              <li>Response time increases by 50%</li>
              <li>Daily request volume drops significantly</li>
              <li>Cost per request increases unexpectedly</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Custom Dashboards</h2>
            <p className="text-gray-700 mb-4">
              Create custom dashboards to focus on metrics that matter most to your use case:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Drag-and-drop widget builder</li>
              <li>Multiple visualization types (charts, graphs, tables)</li>
              <li>Real-time data updates</li>
              <li>Share dashboards with team members</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Optimization Tips</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Review analytics weekly to identify trends</li>
              <li>A/B test different agent configurations</li>
              <li>Optimize for your most critical metric</li>
              <li>Use insights to inform architecture decisions</li>
              <li>Document performance baselines</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">📊 Pro Tip</p>
              <p className="text-gray-700">
                Set up a weekly report that emails key metrics to stakeholders. This keeps everyone informed and helps justify continued investment.
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