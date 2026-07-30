import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Eye, Activity, Bell, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogPerceptionObservation() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Perception and Observation Capabilities in AI Agents"
        description="Understand how agents perceive their environment. State detection, change monitoring, pattern recognition, and environmental awareness."
        url="/blog/perception-observation"
        keywords={['AI perception', 'observation', 'state detection', 'change monitoring', 'environmental awareness']}
        article={{
        author: 'Dr. Emily Carter',
        datePublished: '2025-01-19',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
        section: 'Agentic Capabilities',
        tags: ['agentic capabilities', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Perception and Observation Capabilities ' }]} />

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
          Perception and Observation Capabilities in AI Agents
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Dr. Emily Carter</span>
          <span>•</span>
          <span>January 19, 2025</span>
          <span>•</span>
          <span>15 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
          alt="Perception"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Before agents can act, they must perceive. Observation capabilities enable agents to detect state changes, monitor systems, recognize patterns, and maintain awareness of their environment. This guide explores how agents sense and understand their world.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">State Detection</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">What Agents Observe</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• User state (logged in, subscription level, preferences)</li>
              <li>• System state (API health, database load, queue depth)</li>
              <li>• Task state (in progress, completed, failed)</li>
              <li>• External state (market conditions, weather, news)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Change Monitoring</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Event-Driven Perception</h3>
          <p className="text-gray-700 mb-6">
            Agents react to changes in real-time:
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-purple-200">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-600" />
                  <strong className="text-gray-900">Event:</strong> <span className="text-gray-700">New support ticket created</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 border border-purple-200">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-blue-600" />
                  <strong className="text-gray-900">Trigger:</strong> <span className="text-gray-700">Agent detects event, begins processing</span>
                </div>
              </div>
              <div className="bg-white rounded p-3 border border-purple-200">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-green-600" />
                  <strong className="text-gray-900">Action:</strong> <span className="text-gray-700">Categorize ticket, assign priority, route to team</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Pattern Recognition</h2>

          <p className="text-gray-700 mb-6">
            Identify patterns in observed data:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Example: Anomaly Detection</h3>
            <div className="space-y-2 text-xs">
              <div className="text-gray-700"><strong>Normal pattern:</strong> 1000-1200 requests/hour</div>
              <div className="text-gray-700"><strong>Observed:</strong> 3500 requests in last 15 minutes</div>
              <div className="text-red-600 font-semibold mt-2">🚨 Anomaly detected → Alert DevOps team</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Environmental Awareness</h2>

          <p className="text-gray-700 mb-6">
            Agents consider context when making decisions:
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">Context Factors</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="text-gray-700"><strong>Time:</strong> Business hours vs off-hours</div>
                <div className="text-gray-700"><strong>Load:</strong> System capacity available</div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-700"><strong>Season:</strong> Black Friday vs normal day</div>
                <div className="text-gray-700"><strong>Location:</strong> User timezone, region</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proactive Observation</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Active Monitoring</h3>
            <p className="text-sm text-gray-700 mb-3">Agents don't just respond—they actively watch for issues:</p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>• Monitor user engagement metrics → Detect drop-off</li>
              <li>• Track system performance → Predict bottlenecks</li>
              <li>• Watch competitor activity → Alert on threats</li>
              <li>• Scan for security threats → Prevent breaches</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Perception and observation capabilities enable agents to be proactive, not just reactive. By continuously monitoring state, detecting changes, and recognizing patterns, agents can anticipate issues and act before problems escalate.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build observant agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create AI with advanced perception capabilities
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