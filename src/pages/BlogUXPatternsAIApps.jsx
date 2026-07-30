import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, Loader2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogUXPatternsAIApps() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="User Experience Design Patterns for AI-Powered Applications"
        description="Design delightful AI app experiences. Loading states, streaming UX, error handling, feedback collection, and trust-building patterns."
        url="/blog/ux-patterns-ai-apps"
        keywords={['AI UX', 'user experience', 'loading states', 'streaming UI', 'AI design patterns']}
        article={{
        author: 'Emma Wilson',
        datePublished: '2025-01-09',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
        section: 'Agentic Insights',
        tags: ['agentic insights', 'AI', 'agentic AI'],
        timeRequired: 'PT15M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'User Experience Design Patterns for AI-P' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <InternalLinker currentPage="BlogUXPatternsAIApps">
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
          User Experience Design Patterns for AI-Powered Applications
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Emma Wilson</span>
          <span>•</span>
          <span>January 9, 2025</span>
          <span>•</span>
          <span>15 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200"
          alt="UX Design"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            AI-powered apps require unique UX patterns. Users need to understand what AI is doing, feel in control, and trust the outputs. This guide covers essential design patterns for creating delightful AI experiences.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Loading State Patterns</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Progressive Disclosure</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
              <h4 className="font-bold text-gray-900">Show Progress</h4>
            </div>
            <div className="space-y-2 text-sm text-gray-700 bg-white rounded p-4 border border-blue-200">
              <div>⏳ Analyzing your question...</div>
              <div>🔍 Searching knowledge base...</div>
              <div>✍️ Generating response...</div>
              <div className="text-xs text-gray-600 mt-2">Shows user what AI is doing, reduces anxiety</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Streaming Text</h3>
          <p className="text-gray-700 mb-6">
            Display tokens as they're generated for instant feedback:
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-5 h-5 text-gray-600" />
              <div className="text-sm font-semibold text-gray-900">AI Assistant</div>
            </div>
            <div className="text-gray-700 text-sm">
              Based on your purchase history, I recommend▊
            </div>
            <div className="text-xs text-gray-500 mt-2">Typing indicator shows AI is still generating</div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Trust-Building Patterns</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Show Confidence Scores</h3>
                <div className="bg-white border border-gray-200 rounded p-3 text-sm">
                  <div className="text-gray-700 mb-2">"Product ships within 3-5 business days"</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="h-full w-11/12 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-600">95% confident</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Cite Sources</h3>
                <div className="bg-white border border-gray-200 rounded p-3 text-sm text-gray-700">
                  "Our return policy allows 30 days for refunds."
                  <div className="text-xs text-blue-600 mt-1">Source: Help Center &gt; Returns</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Error Handling</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Graceful Failures</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-red-200">
                <div className="text-red-600 font-semibold mb-1">❌ Bad:</div>
                <div className="text-gray-700">"Error 500: Internal server error"</div>
              </div>
              <div className="bg-white rounded p-3 border border-green-200">
                <div className="text-green-600 font-semibold mb-1">✅ Good:</div>
                <div className="text-gray-700 mb-2">"I'm having trouble right now. Here's what you can do:"</div>
                <ul className="text-gray-600 text-xs ml-4">
                  <li>• Try rephrasing your question</li>
                  <li>• Browse our help center</li>
                  <li>• Chat with a human agent</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Feedback Collection</h2>

          <p className="text-gray-700 mb-6">
            Make it easy for users to correct AI:
          </p>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-8">
            <div className="bg-white rounded p-3 border border-gray-200 mb-3 text-sm text-gray-700">
              Here are 5 Italian restaurants near you...
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs">👍 Helpful</Button>
              <Button size="sm" variant="outline" className="text-xs">👎 Not helpful</Button>
              <Button size="sm" variant="outline" className="text-xs">🔄 Regenerate</Button>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Control & Transparency</h2>

          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• Let users edit AI-generated content</li>
            <li>• Provide "Explain" button for AI decisions</li>
            <li>• Allow users to undo AI actions</li>
            <li>• Show when AI vs human is responding</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Great AI UX makes AI feel helpful, not magical or scary. Focus on transparency, control, and trust-building to create experiences users love and rely on.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Design delightful AI experiences</h3>
            <p className="text-lg text-blue-100 mb-6">
              Build UX that users trust and love
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </InternalLinker>
      </article>
    </div>
  );
}