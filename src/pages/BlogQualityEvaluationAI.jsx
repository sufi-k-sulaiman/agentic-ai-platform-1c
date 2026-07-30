import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogQualityEvaluationAI() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Quality Evaluation and Testing for Generative AI Apps"
        description="Build robust evaluation frameworks. Automated testing, human evaluation, quality metrics, and continuous monitoring."
        url="/blog/quality-evaluation-ai"
        keywords={['AI testing', 'quality evaluation', 'AI metrics', 'automated testing', 'human evaluation']}
        article={{
        author: 'Rachel Foster',
        datePublished: '2025-01-11',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
        section: 'Agentic Insights',
        tags: ['agentic insights', 'AI', 'agentic AI'],
        timeRequired: 'PT17M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Quality Evaluation and Testing for Gener' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <InternalLinker currentPage="BlogQualityEvaluationAI">
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
          Quality Evaluation and Testing for Generative AI Apps
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Rachel Foster</span>
          <span>•</span>
          <span>January 11, 2025</span>
          <span>•</span>
          <span>17 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
          alt="Quality Evaluation"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Testing AI apps is fundamentally different from traditional software. Non-deterministic outputs require new evaluation strategies. This guide covers building comprehensive quality assurance frameworks for generative AI applications.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Automated Testing Approaches</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Golden Dataset Testing</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="text-sm text-gray-700 mb-3">Curate set of test inputs with expected outputs:</p>
            <div className="bg-white rounded p-3 border border-blue-200 text-xs">
              <div className="mb-2"><strong>Input:</strong> "What's our refund policy?"</div>
              <div><strong>Expected:</strong> Must mention "30-day window" and "full refund"</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Assertion-Based Testing</h3>
          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`test('customer support response quality', async () => {
  const response = await agent.handle(
    "My order hasn't arrived"
  );
  
  // Assertions
  expect(response).toContain('order number');
  expect(response).not.toContain('can\\'t help');
  expect(response.length).toBeGreaterThan(50);
  expect(await sentiment(response)).toBeGreaterThan(0.7);
});`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Quality Metrics</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900">Automated Metrics</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Response relevance score</li>
                <li>• Hallucination detection</li>
                <li>• Toxicity/bias detection</li>
                <li>• Factual accuracy (vs source)</li>
                <li>• Format compliance</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-gray-900">Human Metrics</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Helpfulness rating</li>
                <li>• Accuracy verification</li>
                <li>• Style appropriateness</li>
                <li>• Task completion success</li>
                <li>• User satisfaction</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Human Evaluation Framework</h2>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Evaluation Criteria</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-purple-200">
                <strong className="text-gray-900">Accuracy:</strong> <span className="text-gray-700">Is the information correct?</span>
                <div className="mt-1 text-xs text-gray-600">1 = Wrong, 5 = Perfect</div>
              </div>
              <div className="bg-white rounded p-3 border border-purple-200">
                <strong className="text-gray-900">Helpfulness:</strong> <span className="text-gray-700">Does it solve user's problem?</span>
                <div className="mt-1 text-xs text-gray-600">1 = Not helpful, 5 = Very helpful</div>
              </div>
              <div className="bg-white rounded p-3 border border-purple-200">
                <strong className="text-gray-900">Safety:</strong> <span className="text-gray-700">Free from harmful content?</span>
                <div className="mt-1 text-xs text-gray-600">Pass/Fail</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Continuous Monitoring</h2>

          <p className="text-gray-700 mb-6">
            Track quality metrics in production:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Sample 5% of production responses for review</li>
              <li>• Flag responses with low confidence scores</li>
              <li>• Alert on quality degradation trends</li>
              <li>• Weekly human review sessions</li>
              <li>• User feedback collection (thumbs up/down)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">A/B Testing for Quality</h2>

          <p className="text-gray-700 mb-6">
            Compare prompt versions or models:
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="text-center p-4 bg-gray-50 rounded">
                <div className="font-bold text-gray-900 mb-2">Version A</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">4.2/5</div>
                <div className="text-gray-600">Avg rating</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded border-2 border-green-500">
                <div className="font-bold text-gray-900 mb-2">Version B</div>
                <div className="text-3xl font-bold text-green-600 mb-1">4.7/5</div>
                <div className="text-gray-600">Avg rating</div>
                <div className="text-xs text-green-600 font-bold mt-2">+12% improvement</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Quality evaluation must be continuous and multi-faceted. Combine automated testing, human review, and production monitoring to ensure your AI app consistently delivers high-quality results that users trust.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build quality into your AI</h3>
            <p className="text-lg text-blue-100 mb-6">
              Implement robust evaluation frameworks
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </InternalLinker>
      
      <RelatedContent currentPage="BlogQualityEvaluationAI" category="blog" title="Related Articles" />
      </article>
    </div>
  );
}