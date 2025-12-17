import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Map, Target, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogPlanningStrategyCapabilities() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Planning and Strategy Capabilities in AI Agents"
        description="Learn how agents plan ahead and strategize. Goal decomposition, action sequencing, resource allocation, and long-term planning capabilities."
        url="/blog/planning-strategy-capabilities"
        keywords={['AI planning', 'strategic thinking', 'goal decomposition', 'action sequencing', 'resource allocation', 'long-term planning']}
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
          Planning and Strategy Capabilities in AI Agents
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Michael Rodriguez</span>
          <span>•</span>
          <span>January 18, 2025</span>
          <span>•</span>
          <span>17 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
          alt="Planning Strategy"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Great agents don't just react—they plan ahead. Strategic planning capabilities enable agents to decompose complex goals, sequence actions optimally, allocate resources efficiently, and adapt plans when conditions change. This guide explores planning and strategy in agentic AI.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Goal Decomposition</h2>

          <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-[#8B2EE5]" />
              <h3 className="text-xl font-bold text-gray-900">Hierarchical Goal Structure</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded p-4 border border-purple-200">
                <div className="font-bold text-gray-900 mb-2">Top-Level Goal:</div>
                <div className="text-gray-700">Launch new product successfully</div>
              </div>
              <div className="ml-6 space-y-2">
                <div className="bg-white rounded p-3 border border-purple-200 text-sm">
                  <strong className="text-gray-900">Sub-goal 1:</strong> <span className="text-gray-700">Complete market research</span>
                  <div className="ml-4 mt-1 text-xs text-gray-600">→ Survey 1000 customers, Analyze competitors</div>
                </div>
                <div className="bg-white rounded p-3 border border-purple-200 text-sm">
                  <strong className="text-gray-900">Sub-goal 2:</strong> <span className="text-gray-700">Develop marketing strategy</span>
                  <div className="ml-4 mt-1 text-xs text-gray-600">→ Create campaign, Set budget, Schedule ads</div>
                </div>
                <div className="bg-white rounded p-3 border border-purple-200 text-sm">
                  <strong className="text-gray-900">Sub-goal 3:</strong> <span className="text-gray-700">Execute launch plan</span>
                  <div className="ml-4 mt-1 text-xs text-gray-600">→ Coordinate teams, Monitor metrics, Adjust tactics</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Action Sequencing</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dependency Management</h3>
          <p className="text-gray-700 mb-6">
            Agents determine optimal action order by understanding dependencies:
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span className="text-gray-700">Gather requirements (no dependencies)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span className="text-gray-700">Design solution (depends on #1)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span className="text-gray-700">Get approval (depends on #2)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span className="text-gray-700">Implement (depends on #3)</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Resource Allocation</h2>

          <p className="text-gray-700 mb-6">
            Agents optimize use of limited resources:
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">Resource Types</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="text-gray-700"><strong>Time:</strong> Prioritize urgent tasks</div>
                <div className="text-gray-700"><strong>Budget:</strong> Allocate spend across initiatives</div>
              </div>
              <div className="space-y-2">
                <div className="text-gray-700"><strong>Compute:</strong> Balance speed vs cost</div>
                <div className="text-gray-700"><strong>API Credits:</strong> Use calls efficiently</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Contingency Planning</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">What-If Scenarios</h3>
            <p className="text-gray-700 mb-4">Agents plan for potential obstacles:</p>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3 border border-yellow-200">
                <strong className="text-gray-900">Primary Plan:</strong> <span className="text-gray-700">Use Tool A to fetch data</span>
              </div>
              <div className="bg-white rounded p-3 border border-yellow-200">
                <strong className="text-gray-900">If Tool A fails:</strong> <span className="text-gray-700">Fallback to Tool B</span>
              </div>
              <div className="bg-white rounded p-3 border border-yellow-200">
                <strong className="text-gray-900">If both fail:</strong> <span className="text-gray-700">Use cached data + notify user</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Long-Term Planning</h2>

          <div className="flex items-start gap-3 mb-8">
            <Calendar className="w-6 h-6 text-[#8B2EE5] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Multi-Step Campaign Planning</h3>
              <p className="text-gray-700 mb-4">Agents can plan campaigns spanning weeks or months:</p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2">
                <div className="text-gray-700"><strong>Week 1-2:</strong> Research and content creation</div>
                <div className="text-gray-700"><strong>Week 3-4:</strong> Initial outreach and engagement</div>
                <div className="text-gray-700"><strong>Week 5-6:</strong> Follow-ups and nurturing</div>
                <div className="text-gray-700"><strong>Week 7-8:</strong> Conversion and analysis</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Plan Adaptation</h2>

          <p className="text-gray-700 mb-6">
            When conditions change, agents revise plans dynamically:
          </p>

          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• Monitor progress against milestones</li>
            <li>• Detect when assumptions become invalid</li>
            <li>• Re-plan using updated information</li>
            <li>• Maintain goal while adjusting tactics</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Planning and strategy capabilities elevate agents from reactive executors to proactive problem-solvers. By decomposing goals, sequencing actions intelligently, and adapting plans dynamically, agents handle complex multi-step challenges that deliver real business impact.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build strategic agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create AI with advanced planning and strategy capabilities
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