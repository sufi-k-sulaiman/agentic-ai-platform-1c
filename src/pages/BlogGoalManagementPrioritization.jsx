import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Star, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogGoalManagementPrioritization() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Goal Management and Prioritization in AI Agents"
        description="Master goal handling in AI agents. Goal setting, priority scoring, conflict resolution, and dynamic goal adjustment."
        url="/blog/goal-management-prioritization"
        keywords={['goal management', 'prioritization', 'AI goals', 'task priority', 'objective management']}
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
          Goal Management and Prioritization in AI Agents
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Jennifer Martinez</span>
          <span>•</span>
          <span>January 18, 2025</span>
          <span>•</span>
          <span>14 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200"
          alt="Goal Management"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Effective agents juggle multiple goals and know what to prioritize. Goal management capabilities enable agents to set objectives, score priorities, resolve conflicts, and dynamically adjust focus as situations change. This guide explores goal handling in agentic AI.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Goal Hierarchy</h2>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900">Nested Goal Structure</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-4 border border-purple-200">
                <div className="font-bold text-gray-900 mb-2">Strategic Goal:</div>
                <div className="text-gray-700">Increase customer satisfaction to 4.5/5</div>
              </div>
              <div className="ml-6 space-y-2">
                <div className="bg-white rounded p-3 border border-purple-200">
                  <strong className="text-gray-900">Tactical:</strong> <span className="text-gray-700">Reduce response time to {'<'}1 minute</span>
                </div>
                <div className="bg-white rounded p-3 border border-purple-200">
                  <strong className="text-gray-900">Tactical:</strong> <span className="text-gray-700">Increase first-contact resolution to 85%</span>
                </div>
                <div className="ml-6">
                  <div className="bg-white rounded p-2 border border-purple-200 text-xs">
                    <strong className="text-gray-900">Operational:</strong> <span className="text-gray-700">Answer 20 tickets/hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Priority Scoring</h2>

          <p className="text-gray-700 mb-6">
            Agents calculate priority using multiple factors:
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">Priority Formula</h4>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <code className="text-green-400 text-xs">
                Priority = (Urgency × 0.4) + (Impact × 0.3) + (Effort × -0.2) + (Value × 0.1)
              </code>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-2 text-gray-900">Task</th>
                  <th className="text-center pb-2 text-gray-700">Urgency</th>
                  <th className="text-center pb-2 text-gray-700">Impact</th>
                  <th className="text-center pb-2 font-bold text-[#8B2EE5]">Priority</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100 bg-red-50">
                  <td className="py-2">Fix login bug</td>
                  <td className="text-center">10/10</td>
                  <td className="text-center">9/10</td>
                  <td className="text-center font-bold text-red-600">9.5</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Update docs</td>
                  <td className="text-center">3/10</td>
                  <td className="text-center">5/10</td>
                  <td className="text-center font-bold">4.1</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2">Add new feature</td>
                  <td className="text-center">5/10</td>
                  <td className="text-center">7/10</td>
                  <td className="text-center font-bold">6.2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conflict Resolution</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h3 className="font-bold text-gray-900">Competing Goals</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-yellow-200">
                <div className="text-gray-700"><strong>Goal A:</strong> Respond to all tickets within 1 hour</div>
              </div>
              <div className="bg-white rounded p-3 border border-yellow-200">
                <div className="text-gray-700"><strong>Goal B:</strong> Provide detailed, high-quality responses</div>
              </div>
              <div className="bg-white rounded p-3 border border-yellow-200">
                <div className="text-yellow-600 font-semibold">⚠️ Conflict: Speed vs Quality</div>
                <div className="text-xs text-gray-600 mt-1">Resolution: Prioritize speed for simple tickets, quality for complex</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Dynamic Goal Adjustment</h2>

          <p className="text-gray-700 mb-6">
            Goals change as conditions evolve:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="space-y-2 text-sm text-gray-700">
              <div className="p-3 bg-white rounded"><strong>9 AM:</strong> Goal = Process routine tickets</div>
              <div className="p-3 bg-white rounded"><strong>10 AM:</strong> System outage detected → SHIFT to emergency triage</div>
              <div className="p-3 bg-white rounded"><strong>11 AM:</strong> Outage resolved → RETURN to routine processing</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Multi-Goal Optimization</h2>

          <p className="text-gray-700 mb-6">
            Balance multiple objectives simultaneously:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <Star className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 mb-1">Maximize</div>
              <div className="text-xs text-gray-600">Customer satisfaction</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 mb-1">Minimize</div>
              <div className="text-xs text-gray-600">Response time</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <Star className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="font-bold text-gray-900 mb-1">Minimize</div>
              <div className="text-xs text-gray-600">Operational cost</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Goal management capabilities enable agents to stay focused on what matters most. By implementing priority scoring, conflict resolution, and dynamic adjustment, you create agents that allocate effort optimally across competing demands.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build goal-oriented agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create AI that prioritizes and focuses effectively
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