import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ThumbsUp, TrendingUp, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogLearningFromFeedback() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Learning from Feedback: How AI Agents Improve Through Interaction"
        description="Explore feedback mechanisms in AI agents. User corrections, implicit signals, reinforcement learning, and continuous improvement cycles."
        url="/blog/learning-from-feedback"
        keywords={['feedback learning', 'AI improvement', 'user feedback', 'reinforcement learning', 'continuous improvement']}
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
          Learning from Feedback: How AI Agents Improve Through Interaction
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Dr. Alex Thompson</span>
          <span>•</span>
          <span>January 17, 2025</span>
          <span>•</span>
          <span>17 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
          alt="Learning Feedback"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The best agents improve with every interaction. Learning from feedback—both explicit and implicit—enables continuous improvement without constant retraining. This guide explores feedback mechanisms that make agents smarter over time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Feedback</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <ThumbsUp className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Explicit</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">Direct user feedback</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Thumbs up/down ratings</li>
                <li>• 1-5 star reviews</li>
                <li>• Written corrections</li>
                <li>• Feature requests</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Implicit</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">Behavioral signals</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Time spent reading response</li>
                <li>• Follow-up questions</li>
                <li>• Task completion rate</li>
                <li>• Return user frequency</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Feedback Loop Architecture</h2>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900">Continuous Learning Cycle</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-purple-200">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span className="text-gray-700">Agent generates response</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-purple-200">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span className="text-gray-700">User provides feedback (👍/👎)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-purple-200">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span className="text-gray-700">Log feedback with response context</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-purple-200">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span className="text-gray-700">Adjust model/prompts based on patterns</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">User Corrections</h2>

          <p className="text-gray-700 mb-6">
            Allow users to teach agents through corrections:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-gray-900">Agent:</strong> <span className="text-gray-700">"Your plan renews on March 15"</span>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-gray-900">User corrects:</strong> <span className="text-gray-700">"Actually it's March 20"</span>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <strong className="text-blue-600">Agent learns:</strong>
                <div className="text-gray-700 text-xs mt-1">Updates user profile: renewal_date = "March 20"</div>
                <div className="text-gray-700 text-xs">Won't make this mistake again for this user</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reinforcement Signals</h2>

          <p className="text-gray-700 mb-6">
            Actions that get positive feedback get reinforced:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Example: Response Style Learning</h3>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-green-300">
                  <th className="text-left pb-2 text-gray-900">Style</th>
                  <th className="text-center pb-2 text-gray-700">Positive %</th>
                  <th className="text-center pb-2 text-gray-700">Frequency</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-green-200">
                  <td className="py-2">Detailed explanations</td>
                  <td className="text-center">85%</td>
                  <td className="text-center font-bold text-green-600">↑ Increased</td>
                </tr>
                <tr className="border-b border-green-200">
                  <td className="py-2">Brief answers</td>
                  <td className="text-center">62%</td>
                  <td className="text-center text-gray-600">→ Maintained</td>
                </tr>
                <tr>
                  <td className="py-2">Technical jargon</td>
                  <td className="text-center">41%</td>
                  <td className="text-center font-bold text-red-600">↓ Decreased</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implicit Feedback Signals</h2>

          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• <strong>Quick follow-up:</strong> Response wasn't complete (negative)</li>
            <li>• <strong>Long dwell time:</strong> User reading carefully (positive)</li>
            <li>• <strong>Copy to clipboard:</strong> Found answer useful (positive)</li>
            <li>• <strong>Immediate exit:</strong> Didn't find what needed (negative)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Learning from feedback transforms static agents into evolving systems. By collecting both explicit and implicit signals, analyzing patterns, and adjusting behavior accordingly, agents become more helpful with every interaction.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build learning agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create AI that improves through feedback
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