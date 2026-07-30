import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, GitBranch, Workflow, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogToolChainingWorkflows() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Tool Chaining and Workflow Design for AI Agents"
        description="Design complex tool chains and workflows. Sequential execution, parallel processing, conditional logic, and workflow visualization."
        url="/blog/tool-chaining-workflows"
        keywords={['tool chaining', 'workflow design', 'agent workflows', 'sequential execution', 'parallel processing', 'workflow automation']}
        article={{
        author: 'Rachel Foster',
        datePublished: '2025-01-09',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
        section: 'Agentic Design',
        tags: ['agentic design', 'AI', 'agentic AI'],
        timeRequired: 'PT19M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Tool Chaining and Workflow Design for AI' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <InternalLinker currentPage="BlogToolChainingWorkflows">
        <Link to={createPageUrl('Blog')}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-6 bg-purple-100 text-[#8B2EE5]">Agentic Design</Badge>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Tool Chaining and Workflow Design for AI Agents
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Rachel Foster</span>
          <span>•</span>
          <span>January 9, 2025</span>
          <span>•</span>
          <span>19 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
          alt="Workflow Design"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Complex tasks require multiple tools working together. Tool chaining and workflow design determine whether agents can handle sophisticated multi-step processes or get stuck on simple tasks. This guide covers patterns for designing powerful, flexible agent workflows.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Workflow Patterns</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Sequential Chain</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">Tools execute one after another, with output from each feeding into the next.</p>
            <div className="flex items-center gap-2 text-sm font-mono bg-white p-3 rounded border border-gray-200">
              <span className="text-gray-700">Search API</span>
              <span className="text-[#8B2EE5]">→</span>
              <span className="text-gray-700">Filter Results</span>
              <span className="text-[#8B2EE5]">→</span>
              <span className="text-gray-700">Send Email</span>
            </div>
            <p className="text-sm text-gray-600 mt-3">Use case: Research and report generation workflows</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Parallel Execution</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">Multiple tools run simultaneously, results combined at the end.</p>
            <div className="text-sm font-mono bg-white p-4 rounded border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-700">Weather API</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-700">News API</span>
                <span className="text-[#8B2EE5] ml-4">→ Merge →</span>
                <span className="text-gray-700">Generate Report</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Stock API</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">Use case: Data aggregation from multiple sources</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Conditional Branching</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">Different paths based on intermediate results or conditions.</p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-[#8B2EE5]" />
                  <span className="text-gray-700">If sentiment {'>'} 0.8 → Send to Sales Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-[#8B2EE5]" />
                  <span className="text-gray-700">If sentiment {'<'} 0.3 → Escalate to Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-[#8B2EE5]" />
                  <span className="text-gray-700">Else → Auto-respond</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">Use case: Intelligent routing and decision trees</p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Loop Pattern</h3>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 mb-4">Repeat tool execution until condition is met or max iterations reached.</p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="space-y-2 text-sm font-mono">
                <div className="text-gray-700">While (quality_score {'<'} 0.9 && iterations {'<'} 5):</div>
                <div className="text-gray-700 ml-4">→ Generate Content</div>
                <div className="text-gray-700 ml-4">→ Check Quality</div>
                <div className="text-gray-700 ml-4">→ Refine if needed</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">Use case: Iterative improvement and optimization tasks</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Data Flow Design</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Passing Data Between Tools</h3>
          <p className="text-gray-700 mb-6">Three approaches for data flow:</p>

          <div className="space-y-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">1. Direct Pass-Through</h4>
              <p className="text-sm text-gray-700">Output of Tool A becomes input of Tool B directly</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">2. Transformation Layer</h4>
              <p className="text-sm text-gray-700">Transform/map data between incompatible tool formats</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 mb-2">3. Shared Context</h4>
              <p className="text-sm text-gray-700">Tools read from and write to shared workflow context object</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Workflow Visualization</h2>

          <p className="text-gray-700 mb-6">
            Make complex workflows understandable through visual representation:
          </p>

          <ul className="space-y-3 mb-8 text-gray-700">
            <li>• Flowchart diagrams showing tool connections</li>
            <li>• Real-time execution progress indicators</li>
            <li>• Highlight current step in multi-step workflows</li>
            <li>• Show conditional branches and decision points</li>
            <li>• Display data transformations between steps</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Performance Optimization</h2>

          <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#8B2EE5]" />
              <h3 className="text-xl font-bold text-gray-900">Optimization Strategies</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Run independent tools in parallel, not sequentially</li>
              <li>• Cache tool results when appropriate</li>
              <li>• Skip unnecessary steps based on intermediate results</li>
              <li>• Set timeouts to prevent indefinite waiting</li>
              <li>• Batch similar tool calls when possible</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices</h2>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Workflow className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Design workflows with failure recovery in mind from the start</span>
              </li>
              <li className="flex items-start gap-3">
                <Workflow className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Keep workflows modular and composable for reusability</span>
              </li>
              <li className="flex items-start gap-3">
                <Workflow className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Test complex workflows with realistic failure scenarios</span>
              </li>
              <li className="flex items-start gap-3">
                <Workflow className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Monitor workflow performance and optimize bottlenecks</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Design powerful workflows</h3>
            <p className="text-lg text-purple-100 mb-6">
              Build sophisticated tool chains for your AI agents
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </InternalLinker>
      
      <RelatedContent currentPage="BlogToolChainingWorkflows" category="blog" title="Related Articles" />
      </article>
    </div>
  );
}