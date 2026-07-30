import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Wand2, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogPromptEngineeringApps() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Prompt Engineering Mastery for AI Applications"
        description="Advanced prompt engineering techniques. System prompts, few-shot learning, chain-of-thought, and prompt optimization strategies."
        url="/blog/prompt-engineering-apps"
        keywords={['prompt engineering', 'system prompts', 'few-shot learning', 'chain of thought', 'prompt optimization']}
        article={{
        author: 'Maria Chen',
        datePublished: '2025-01-14',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
        section: 'Agentic Insights',
        tags: ['agentic insights', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Prompt Engineering Mastery for AI Applic' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Blog')}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-6 bg-blue-100 text-blue-700">Agentic Insights</Badge>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Prompt Engineering Mastery for AI Applications
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Maria Chen</span>
          <span>•</span>
          <span>January 14, 2025</span>
          <span>•</span>
          <span>18 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
          alt="Prompt Engineering"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Prompt engineering is the foundation of effective AI applications. The difference between a mediocre app and an exceptional one often comes down to prompt design. This guide covers advanced techniques for crafting prompts that consistently produce high-quality results.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">System Prompt Architecture</h2>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Wand2 className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-gray-900">Anatomy of a Great System Prompt</h3>
            </div>
            <div className="bg-white rounded-lg p-4 border border-purple-200 space-y-3 text-sm">
              <div><strong>Role:</strong> "You are an expert customer support agent..."</div>
              <div><strong>Context:</strong> "Our company sells SaaS products to SMBs..."</div>
              <div><strong>Task:</strong> "Help users solve technical issues quickly..."</div>
              <div><strong>Constraints:</strong> "Never share pricing, always be professional..."</div>
              <div><strong>Format:</strong> "Respond in markdown with clear steps..."</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Few-Shot Learning</h2>

          <p className="text-gray-700 mb-6">
            Provide examples to guide model behavior:
          </p>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`System: You categorize customer feedback into: Bug, Feature Request, Praise

Example 1:
Input: "The app crashes when I upload large files"
Output: Bug

Example 2:
Input: "Love the new dark mode!"
Output: Praise

Example 3:
Input: "Would be great to have export to PDF"
Output: Feature Request

Now categorize:
Input: "Dashboard loads very slowly"`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chain-of-Thought Prompting</h2>

          <p className="text-gray-700 mb-6">
            Encourage step-by-step reasoning for complex tasks:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-700 mb-4"><strong>Without CoT:</strong> "What's 15% of 280?"</p>
            <p className="text-sm text-gray-700 mb-4"><strong>With CoT:</strong> "What's 15% of 280? Let's solve this step by step:"</p>
            <div className="bg-white rounded p-3 border border-blue-200 text-xs text-gray-700">
              1. 10% of 280 = 28<br/>
              2. 5% of 280 = 14<br/>
              3. 15% = 10% + 5% = 28 + 14 = 42
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prompt Optimization Techniques</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Be Specific</h3>
                <p className="text-gray-700 text-sm">Vague: "Write an email"<br/>Specific: "Write a professional follow-up email to a prospect who attended our demo yesterday"</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Use Delimiters</h3>
                <p className="text-gray-700 text-sm">Clearly separate instructions from content using ###, """, or XML tags</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Mastering prompt engineering transforms AI apps from inconsistent to reliable. By structuring system prompts effectively, leveraging few-shot examples, and applying chain-of-thought reasoning, you unlock the full potential of language models in production applications.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Master prompt engineering</h3>
            <p className="text-lg text-blue-100 mb-6">
              Build AI apps with consistently great outputs
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}