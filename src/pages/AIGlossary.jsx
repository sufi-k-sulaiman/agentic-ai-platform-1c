import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';
import FAQSection from '@/components/seo/FAQSection';

const glossaryTerms = [
  {
    term: 'Agentic AI',
    category: 'Core Concepts',
    definition: 'AI systems that can autonomously think, plan, decide, and execute multi-step tasks. Unlike traditional AI that only generates responses, agentic AI agents can use tools, access databases, coordinate with other agents, and complete complex workflows without human intervention.',
  },
  {
    term: 'Autonomous Agent',
    category: 'Core Concepts',
    definition: 'An AI system that operates independently to achieve goals. Autonomous agents perceive their environment, make decisions, take actions, and learn from outcomes — all without continuous human oversight.',
  },
  {
    term: 'Multi-Agent System',
    category: 'Architecture',
    definition: 'A system where multiple AI agents work together, each with specialized roles, to solve complex problems. Agents communicate, delegate tasks, share context, and coordinate on workflows. Multi-agent systems enable parallel processing and role-based specialization.',
  },
  {
    term: 'Agent Orchestration',
    category: 'Architecture',
    definition: 'The coordination and management of multiple AI agents working together. Orchestration handles task delegation, agent communication, conflict resolution, and workflow execution across the agent team.',
  },
  {
    term: 'Large Language Model (LLM)',
    category: 'Core Concepts',
    definition: 'A deep learning model trained on massive text datasets to understand and generate human-like language. LLMs like GPT, Claude, and Gemini power conversational AI, content generation, and reasoning capabilities.',
  },
  {
    term: 'Retrieval-Augmented Generation (RAG)',
    category: 'Core Concepts',
    definition: 'A technique that combines LLMs with external knowledge retrieval. RAG systems fetch relevant information from databases or documents before generating responses, improving accuracy and reducing hallucinations.',
  },
  {
    term: 'Fine-Tuning',
    category: 'Core Concepts',
    definition: 'The process of further training a pre-trained LLM on domain-specific data to improve performance on specialized tasks. Fine-tuning customizes model behavior without training from scratch.',
  },
  {
    term: 'Prompt Engineering',
    category: 'Core Concepts',
    definition: 'The practice of designing effective instructions (prompts) for LLMs to produce desired outputs. Includes system prompts, few-shot examples, chain-of-thought reasoning, and structured output formatting.',
  },
  {
    term: 'Tool Use / Function Calling',
    category: 'Capabilities',
    definition: 'The ability of AI agents to call external APIs, query databases, and execute code. Function calling allows agents to interact with real-world systems and perform actions beyond text generation.',
  },
  {
    term: 'Context Window',
    category: 'Core Concepts',
    definition: 'The maximum amount of text (measured in tokens) an LLM can process in a single request. Larger context windows enable longer conversations and more comprehensive document analysis.',
  },
  {
    term: 'Vector Database',
    category: 'Infrastructure',
    definition: 'A database optimized for storing and querying vector embeddings. Vector databases enable semantic similarity search, which is essential for RAG systems and AI-powered recommendations.',
  },
  {
    term: 'Embeddings',
    category: 'Core Concepts',
    definition: 'Numerical representations of text, images, or other data as high-dimensional vectors. Embeddings capture semantic meaning, enabling similarity comparisons and semantic search.',
  },
  {
    term: 'Hallucination',
    category: 'Core Concepts',
    definition: 'When an LLM generates false or fabricated information that appears plausible. Hallucinations are a key challenge in AI reliability, mitigated through RAG, grounding, and output validation.',
  },
  {
    term: 'Human-in-the-Loop (HITL)',
    category: 'Governance',
    definition: 'A design pattern where human reviewers approve, reject, or modify AI agent decisions before execution. HITL ensures oversight for high-stakes actions and builds trust in autonomous systems.',
  },
  {
    term: 'AI Governance',
    category: 'Governance',
    definition: 'The framework of policies, processes, and controls that ensure AI systems are deployed responsibly. Governance covers accountability, transparency, fairness, compliance, and risk management.',
  },
  {
    term: 'Model Context Protocol',
    category: 'Architecture',
    definition: 'A standardized protocol for connecting AI models to external data sources and tools. MCP enables agents to access documents, databases, and APIs through a unified interface.',
  },
  {
    term: 'Observability',
    category: 'Operations',
    definition: 'The ability to monitor, trace, and debug AI agent behavior in production. Observability includes logging, metrics, tracing, and replay capabilities for understanding agent decisions and failures.',
  },
  {
    term: 'No-Code AI',
    category: 'Development',
    definition: 'Platforms that enable non-technical users to build and deploy AI agents through visual interfaces — no programming required. No-code AI democratizes AI development for business users.',
  },
  {
    term: 'Cognitive Reasoning',
    category: 'Capabilities',
    definition: 'The ability of AI agents to reason through complex problems using deduction, induction, and analogical thinking. Cognitive reasoning enables agents to break down problems and plan multi-step solutions.',
  },
  {
    term: 'Memory Management',
    category: 'Capabilities',
    definition: 'How AI agents store and retrieve information across interactions. Includes short-term (conversation context), long-term (persistent knowledge), and episodic (past experiences) memory systems.',
  },
];

const categories = ['All', 'Core Concepts', 'Architecture', 'Capabilities', 'Governance', 'Infrastructure', 'Operations', 'Development'];

export default function AIGlossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((item) => {
      const matchesSearch =
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const faqs = [
    { question: 'What is the difference between agentic AI and generative AI?', answer: 'Generative AI creates content (text, images, code) based on prompts. Agentic AI goes further — it can autonomously plan, make decisions, use tools, and execute multi-step workflows. Agentic AI often uses generative AI as one of its capabilities.' },
    { question: 'What is an AI agent?', answer: 'An AI agent is an autonomous system that perceives its environment, reasons about goals, takes actions to achieve those goals, and learns from outcomes. Agents use LLMs for reasoning, tools for actions, and memory for context.' },
    { question: 'What is RAG and why is it important?', answer: 'RAG (Retrieval-Augmented Generation) combines LLMs with external knowledge retrieval. It improves accuracy by fetching relevant information from your data before generating responses, reducing hallucinations and enabling domain-specific answers.' },
    { question: 'How do multi-agent systems work?', answer: 'Multi-agent systems coordinate multiple AI agents, each with specialized roles. Agents communicate via messages, delegate tasks, share context, and collaborate on complex workflows. An orchestrator manages the overall coordination and conflict resolution.' },
    { question: 'What is AI governance?', answer: 'AI governance is the framework of policies, processes, and controls that ensure AI systems are deployed responsibly. It covers accountability, transparency, fairness, compliance with regulations, risk management, and human oversight.' },
  ];

  return (
    <InternalLinker currentPage="AIGlossary">
      <div className="bg-white min-h-screen">
        <PageMeta
          title="AI Glossary - Key Terms & Definitions"
          description="Comprehensive glossary of AI, agentic AI, and enterprise AI terms. Understand LLMs, RAG, multi-agent systems, governance, observability, and more."
          url="/AIGlossary"
          keywords={['AI glossary', 'AI terms', 'agentic AI definitions', 'LLM glossary', 'AI terminology', 'machine learning terms']}
          image="https://images.unsplash.com/photo-1620712943543-bcc4688e7195?w=1200&h=630&fit=crop"
          collectionPage
          faq={faqs}
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'Resources', url: '/Documentation' },
            { name: 'AI Glossary', url: '/AIGlossary' },
          ]}
        />

        <div className="max-w-7xl mx-auto px-6 pt-8">
          <BreadcrumbNav items={[
            { label: 'Home', page: 'Home' },
            { label: 'Resources', page: 'Documentation' },
            { label: 'AI Glossary' },
          ]} />
        </div>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-semibold mb-4">
              Reference
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Glossary: Key Terms & Definitions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Your comprehensive reference for AI, agentic AI, and enterprise AI terminology.
              From foundational concepts like LLMs and RAG to advanced topics like multi-agent
              orchestration and AI governance.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#8B2EE5] focus:ring-2 focus:ring-[#8B2EE5]/20 outline-none transition-all"
              />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <div className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#8B2EE5] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-6 text-sm text-gray-500">
              Showing {filteredTerms.length} {filteredTerms.length === 1 ? 'term' : 'terms'}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#8B2EE5]/30 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-[#8B2EE5] flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{item.term}</h2>
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#8B2EE5]">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                </motion.div>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No terms found. Try a different search or category.</p>
              </div>
            )}
          </div>
        </section>

        <FAQSection faqs={faqs} title="Common AI Questions" />

        <RelatedContent
          currentPage="AIGlossary"
          category="resources"
          crossCategories={['product']}
          title="Explore More AI Resources"
        />
      </div>
    </InternalLinker>
  );
}