import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageCircle, Radio, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogInterAgentCommunication() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Inter-Agent Communication Protocols: Building Connected Systems"
        description="Design robust communication between agents. Message formats, protocols, event buses, and coordination patterns."
        url="/blog/inter-agent-communication"
        keywords={['agent communication', 'message protocols', 'event bus', 'multi-agent systems', 'agent coordination']}
      />

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
          Inter-Agent Communication Protocols: Building Connected Systems
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Dr. Sarah Mitchell</span>
          <span>•</span>
          <span>January 22, 2025</span>
          <span>•</span>
          <span>18 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200"
          alt="Communication"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Multi-agent systems require robust communication protocols. Agents must exchange information, coordinate actions, and maintain consistency. This guide explores message formats, communication patterns, and protocols for building connected agent systems.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Message Format</h2>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`{
  "id": "msg_12345",
  "from": "sales_agent",
  "to": "analytics_agent",
  "type": "request",
  "timestamp": "2025-01-22T10:30:00Z",
  "payload": {
    "action": "analyze_leads",
    "parameters": {
      "timeframe": "last_7_days",
      "min_score": 80
    }
  },
  "reply_to": null,
  "priority": "normal"
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Communication Patterns</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Request-Response</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">Synchronous communication</p>
              <div className="bg-white rounded p-3 border border-blue-200 text-xs text-gray-700">
                Agent A: "Get user data"<br/>
                Agent B: "Here's the data..."<br/>
                <span className="text-gray-600">Simple, predictable</span>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Radio className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Publish-Subscribe</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">Asynchronous, event-driven</p>
              <div className="bg-white rounded p-3 border border-purple-200 text-xs text-gray-700">
                Agent A: Publishes "new_user"<br/>
                Agents B,C,D: Subscribe & react<br/>
                <span className="text-gray-600">Decoupled, scalable</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Event Bus Architecture</h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Network className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-gray-900">Central Event Bus</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">All agents communicate through central bus:</p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>• Agents publish events to topics</li>
              <li>• Other agents subscribe to relevant topics</li>
              <li>• Loose coupling, easy to add new agents</li>
              <li>• Event history for replay and debugging</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Message Reliability</h2>

          <p className="text-gray-700 mb-6">
            Ensure messages aren't lost:
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Delivery Guarantees</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-yellow-200">
                <strong className="text-gray-900">At-most-once:</strong> <span className="text-gray-700">Fire and forget (may lose messages)</span>
              </div>
              <div className="bg-white rounded p-3 border border-yellow-200">
                <strong className="text-gray-900">At-least-once:</strong> <span className="text-gray-700">Retry until acknowledged (may duplicate)</span>
              </div>
              <div className="bg-white rounded p-3 border border-yellow-200">
                <strong className="text-gray-900">Exactly-once:</strong> <span className="text-gray-700">Guaranteed single delivery (complex, slow)</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Coordination Protocols</h2>

          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• <strong>Leader Election:</strong> One agent coordinates others</li>
            <li>• <strong>Consensus:</strong> Agents agree on decisions together</li>
            <li>• <strong>Distributed Locks:</strong> Prevent concurrent conflicting actions</li>
            <li>• <strong>Event Sourcing:</strong> Store all changes as events</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Robust communication protocols are the foundation of multi-agent systems. Choose patterns that match your reliability needs, implement proper error handling, and design for loose coupling to build scalable agent networks.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build connected agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create multi-agent systems with robust communication
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