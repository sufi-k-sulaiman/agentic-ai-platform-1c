import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Button } from '@/components/ui/button';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogBuildingWithAPIs() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Building with Generative AI APIs: Developer's Guide"
        description="Practical guide for developers building applications with OpenAI, Anthropic, and other generative AI APIs. Code examples, best practices, and architecture patterns."
        url="/blog/building-with-ai-apis"
        keywords={['AI APIs', 'OpenAI API', 'Anthropic API', 'AI development', 'ChatGPT API', 'AI integration']}
        article={{
        author: '1C Platform Team',
        datePublished: '2025-01-01',
        image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png',
        section: 'AI Insights',
        tags: ['ai insights', 'AI', 'agentic AI'],
      }}
      />

      <article className="max-w-4xl mx-auto px-6 py-32">
        <InternalLinker currentPage="BlogBuildingWithAPIs">
        <BreadcrumbNav items={[
          { label: 'Blog', page: 'Blog' },
          { label: 'Building with Generative AI APIs' }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building with Generative AI APIs: Developer's Guide
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Jordan Lee</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 4, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>17 min read</span>
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200" 
            alt="Software Development" 
            className="w-full h-96 object-cover rounded-2xl mb-12"
          />
        </motion.div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Generative AI APIs have democratized access to powerful models. You don't need ML expertise or GPU clusters—just API calls. This guide shows you how to build production-ready AI applications using OpenAI, Anthropic, and other leading platforms.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Getting Started</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choosing Your Platform</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>OpenAI:</strong> Most powerful models (GPT-4), multimodal capabilities, largest ecosystem. Best for: complex reasoning, code generation, general-purpose applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Anthropic (Claude):</strong> Strong safety focus, 200K context window, excellent instruction following. Best for: long documents, conversational AI, enterprises valuing safety.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Google (Gemini):</strong> Multimodal by design, strong reasoning, free tier. Best for: applications needing vision+text, cost-conscious projects.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Cohere:</strong> Specialized models, strong multilingual support, generous free tier. Best for: search, classification, embeddings at scale.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Authentication and Setup</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Sign up for API access, get your key, and keep it secure. Never commit keys to version control. Use environment variables and secrets management.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 my-6 text-sm">
            <pre className="overflow-x-auto">
{`# Python example
import os
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in simple terms."}
    ]
)

print(response.choices[0].message.content)`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Core Concepts</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Messages and Roles</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Modern APIs use conversational format with three roles:
          </p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>System:</strong> Sets behavior and context (e.g., "You're an expert financial advisor")</li>
            <li><strong>User:</strong> The input from the application user</li>
            <li><strong>Assistant:</strong> The model's responses</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Temperature and Parameters</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Control output randomness and style:
          </p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Temperature (0-2):</strong> Lower = more focused/deterministic, Higher = more creative/random</li>
            <li><strong>Max tokens:</strong> Limit output length</li>
            <li><strong>Top-p:</strong> Alternative to temperature for controlling randomness</li>
            <li><strong>Frequency/presence penalty:</strong> Reduce repetition</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tokens and Pricing</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            APIs charge per token (~4 chars or ~0.75 words). Input and output tokens priced separately. Monitor usage carefully:
          </p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li>GPT-4: $0.03/1K input, $0.06/1K output tokens</li>
            <li>GPT-3.5: $0.0015/1K input, $0.002/1K output tokens</li>
            <li>Claude 3: $0.015/1K input, $0.075/1K output tokens</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Architecture Patterns</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Retrieval-Augmented Generation (RAG)</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Enhance responses with your own data. Process: User query → Retrieve relevant docs from vector database → Include in prompt context → Generate response. Essential for up-to-date, domain-specific information.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 my-6 text-sm">
            <pre className="overflow-x-auto">
{`# Simplified RAG example
def answer_with_context(question, knowledge_base):
    # 1. Search knowledge base
    relevant_docs = vector_search(question, knowledge_base)
    
    # 2. Build context
    context = "\\n".join([doc.content for doc in relevant_docs])
    
    # 3. Generate answer
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"Answer using this context:\\n{context}"},
            {"role": "user", "content": question}
        ]
    )
    
    return response.choices[0].message.content`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Function Calling</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Let models call your functions/APIs. Define available functions, model decides when to call them, you execute and return results. Enables AI to take actions: database queries, API calls, calculations.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Chain of Thought</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Improve reasoning by asking models to "think step by step." Break complex problems into sequential prompts. Each step builds on previous outputs. Critical for math, logic, and multi-step tasks.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Streaming Responses</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Stream tokens as they're generated for better UX. Users see immediate feedback rather than waiting for complete response. Essential for conversational interfaces.
          </p>

          <div className="bg-gray-900 text-gray-100 rounded-xl p-6 my-6 text-sm">
            <pre className="overflow-x-auto">
{`# Streaming example
stream = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a poem about AI"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Production Best Practices</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Error Handling and Retries</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            APIs can fail or rate-limit. Implement exponential backoff retries, timeout handling, and graceful degradation. Never expose raw API errors to users.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cost Management</h3>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Set max_tokens:</strong> Prevent runaway costs from long outputs</li>
            <li><strong>Cache results:</strong> Store common queries to avoid redundant calls</li>
            <li><strong>Use cheaper models:</strong> GPT-3.5 for simple tasks, GPT-4 for complex</li>
            <li><strong>Monitor usage:</strong> Set up alerts for spending thresholds</li>
            <li><strong>Optimize prompts:</strong> Shorter, more efficient prompts = lower costs</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Content Filtering</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implement input validation and output filtering. Check for harmful content, PII, and policy violations. Use OpenAI's moderation API or custom filters. Never blindly display model outputs.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prompt Injection Protection</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Users might try to override system instructions. Clearly separate system prompts from user input. Validate and sanitize user content. Monitor for suspicious patterns.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Logging and Observability</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Log all API calls with request/response, latency, tokens used, and errors. Build dashboards for usage patterns, costs, and quality. Use tools like LangSmith or Helicone for AI observability.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Use Cases</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Chatbots and Virtual Assistants</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Maintain conversation history, personalize based on user data, integrate with knowledge bases via RAG, handle multi-turn context, and gracefully escalate to humans.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Document Analysis</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Extract structured data from PDFs/documents, summarize long content, classify documents by type, answer questions about documents, and compare multiple documents.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Code Generation and Review</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Generate code from natural language, explain existing code, suggest improvements, write tests, and debug issues. GitHub Copilot and Cursor built entire businesses on this.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Content Creation at Scale</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Batch process thousands of content pieces, maintain consistent voice and style, generate variations for A/B testing, and personalize for different audiences.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Performance Optimization</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Parallel requests:</strong> Process multiple requests concurrently</li>
            <li><strong>Batch operations:</strong> Combine similar tasks into single API calls when possible</li>
            <li><strong>Async processing:</strong> Use async/await for non-blocking operations</li>
            <li><strong>Response caching:</strong> Cache common queries with TTL</li>
            <li><strong>Model selection:</strong> Use smallest model that meets requirements</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Testing and Evaluation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Build test suites with expected inputs/outputs. Measure accuracy, relevance, and consistency. Use human evaluation for subjective quality. A/B test different prompts and models. Track production metrics like user satisfaction and task completion.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Future-Proofing Your Application</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Abstract AI provider behind interfaces—swapping providers should require minimal code changes. Stay updated on new model releases and capabilities. Plan for context window increases and new modalities. Design for continuous improvement as models evolve.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Building with AI APIs is straightforward—but building well requires thought about architecture, costs, safety, and user experience. Start simple, measure everything, and iterate based on real usage. The winners will be developers who combine technical implementation with product intuition and user empathy.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Production AI Applications</h3>
            <p className="text-gray-700 mb-6">
              Get hands-on guidance and best practices for building reliable, scalable AI applications.
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </InternalLinker>
      
      <RelatedContent currentPage="BlogBuildingWithAPIs" category="blog" title="Related Articles" />
      </article>
    </div>
  );
}