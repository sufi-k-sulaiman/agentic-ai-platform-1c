import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAgenticAILimitations() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Limitations of Agentic AI: When Traditional AI is Still Better"
        description="Honest assessment of where agentic AI falls short. Understand constraints and when to stick with traditional approaches."
        url="/blog/agentic-ai-limitations"
      />

      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-medium">
                AI Comparison
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">12 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Limitations of Agentic AI: When Traditional AI is Still Better
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Mark Stevens</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Dec 10, 2024</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop"
              alt="Limitations"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Agentic AI is powerful, but not a silver bullet. Understanding limitations prevents costly mistakes and helps you choose the right tool for each job.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Current Limitations</h2>

            <div className="bg-red-50 rounded-xl p-6 mb-6 border border-red-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Latency</h3>
              <p className="text-gray-700 mb-3">
                Agentic AI is inherently slower than traditional AI:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Reasoning takes time (seconds vs. milliseconds)</li>
                <li>Multiple LLM calls for complex tasks</li>
                <li>Tool/API calls add latency</li>
              </ul>
              <p className="text-gray-700 mt-3"><strong>Impact:</strong> Not suitable for real-time systems requiring &lt;100ms response</p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 mb-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Cost at High Volume</h3>
              <p className="text-gray-700 mb-3">
                Per-operation costs higher than traditional AI:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>LLM API costs add up quickly</li>
                <li>Not economical for millions of daily operations</li>
                <li>Traditional AI 100-1000x cheaper per prediction</li>
              </ul>
              <p className="text-gray-700 mt-3"><strong>Impact:</strong> Prohibitive for ultra-high-volume applications</p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 mb-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Consistency</h3>
              <p className="text-gray-700 mb-3">
                Agentic AI outputs vary even with same inputs:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Non-deterministic by nature</li>
                <li>Small prompt changes cause behavior shifts</li>
                <li>Harder to guarantee exact outputs</li>
              </ul>
              <p className="text-gray-700 mt-3"><strong>Impact:</strong> Problematic where strict consistency required</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mb-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Explainability Challenges</h3>
              <p className="text-gray-700 mb-3">
                Complex reasoning is hard to explain:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>LLM decision-making opaque</li>
                <li>Chain-of-thought helps but not perfect</li>
                <li>Difficult to prove compliance in regulated industries</li>
              </ul>
              <p className="text-gray-700 mt-3"><strong>Impact:</strong> Limited use in heavily regulated domains</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When Traditional AI is the Right Choice</h2>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High-Frequency Trading</h3>
              <p className="text-gray-700 mb-2"><strong>Why not agentic:</strong> Needs microsecond decisions</p>
              <p className="text-gray-700 mb-2"><strong>Traditional AI approach:</strong> Optimized algorithms and models</p>
              <p className="text-gray-700"><strong>Result:</strong> Traditional AI 10,000x faster</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Device Diagnostics</h3>
              <p className="text-gray-700 mb-2"><strong>Why not agentic:</strong> FDA requires explainable, validated models</p>
              <p className="text-gray-700 mb-2"><strong>Traditional AI approach:</strong> Approved ML models with clear decision logic</p>
              <p className="text-gray-700"><strong>Result:</strong> Regulatory compliance, proven safety</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ad Bidding Optimization</h3>
              <p className="text-gray-700 mb-2"><strong>Why not agentic:</strong> Billions of daily decisions, cost-sensitive</p>
              <p className="text-gray-700 mb-2"><strong>Traditional AI approach:</strong> Reinforcement learning models</p>
              <p className="text-gray-700"><strong>Result:</strong> $0.00001 per bid vs. $0.01 with agentic—1000x cheaper</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mitigating Agentic AI Limitations</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Latency</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use smaller, faster models for simple tasks</li>
              <li>Cache common responses</li>
              <li>Parallel tool calls where possible</li>
              <li>Set user expectations (progress indicators)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cost</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Route simple cases to traditional AI</li>
              <li>Implement rate limiting</li>
              <li>Prompt optimization to reduce tokens</li>
              <li>Negotiate volume discounts with LLM providers</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Consistency</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use lower temperature settings</li>
              <li>Implement validation checks</li>
              <li>Add guardrails for critical outputs</li>
              <li>Human review for high-stakes decisions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Pragmatic Approach</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Don't be a zealot for either technology:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use traditional AI for speed and volume</li>
              <li>Use agentic AI for complexity and flexibility</li>
              <li>Combine both in hybrid architectures</li>
              <li>Let business requirements guide technology choice</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Acknowledging limitations leads to better solutions. Agentic AI is transformative but not universal. Apply it thoughtfully where it adds the most value.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Make informed AI decisions</h3>
            <p className="text-gray-600 mb-6">
              Get honest, expert guidance on the right AI approach for your needs.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4]">
                Talk to Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}