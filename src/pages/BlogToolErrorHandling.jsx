import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, AlertCircle, RefreshCw, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogToolErrorHandling() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Error Handling Design for Agent Tool Execution"
        description="Handle tool execution failures gracefully. Retry strategies, fallback patterns, user communication, and recovery workflows."
        url="/blog/tool-error-handling"
        keywords={['error handling', 'retry logic', 'fallback patterns', 'agent reliability', 'fault tolerance', 'error recovery']}
        article={{
        author: 'David Park',
        datePublished: '2025-01-10',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
        section: 'Agentic Design',
        tags: ['agentic design', 'AI', 'agentic AI'],
        timeRequired: 'PT16M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Error Handling Design for Agent Tool Exe' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <InternalLinker currentPage="BlogToolErrorHandling">
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
          Error Handling Design for Agent Tool Execution
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By David Park</span>
          <span>•</span>
          <span>January 10, 2025</span>
          <span>•</span>
          <span>16 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
          alt="Error Handling"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Tools fail. Networks drop. APIs timeout. Great agentic AI systems handle these failures gracefully. Poor error handling breaks user trust and creates unreliable experiences. This guide explores patterns for robust error handling in agent tool execution.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Error Classification</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Transient Errors</h3>
              </div>
              <p className="text-gray-700 mb-3">Temporary failures that may succeed on retry:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Network timeouts</li>
                <li>• Rate limit exceeded</li>
                <li>• Service temporarily unavailable</li>
                <li>• Database connection lost</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-red-200">
                <strong className="text-sm">Strategy:</strong> <span className="text-sm text-gray-700">Automatic retry with exponential backoff</span>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Permanent Errors</h3>
              </div>
              <p className="text-gray-700 mb-3">Failures that won't resolve with retries:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Invalid credentials</li>
                <li>• Missing required parameters</li>
                <li>• Resource not found</li>
                <li>• Permission denied</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-orange-200">
                <strong className="text-sm">Strategy:</strong> <span className="text-sm text-gray-700">Immediate failure with clear error message</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Retry Strategies</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Exponential Backoff</h3>
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`const retryWithBackoff = async (fn, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      await new Promise(r => setTimeout(r, delay));
    }
  }
};`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Retry Limits</h3>
          <p className="text-gray-700 mb-6">
            Set maximum retry attempts based on error type:
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• Network errors: 3 retries</li>
            <li>• Rate limits: Wait for reset period, 1 retry</li>
            <li>• Server errors (500s): 2 retries</li>
            <li>• Client errors (400s): No retries, immediate fail</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Fallback Patterns</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Alternative Tool Fallback</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="text-gray-700">
              If primary tool fails, automatically try equivalent alternative tool. Example: If SendGrid fails, fall back to AWS SES.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Degraded Mode</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="text-gray-700">
              Continue with reduced functionality rather than complete failure. Example: Use cached data if live API fails.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Human Escalation</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="text-gray-700">
              For critical failures, route to human operator for manual intervention and decision-making.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">User Communication</h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Error Message Principles</h3>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Be Specific:</strong> "Email sending failed: Invalid recipient address" not "Error occurred"</li>
              <li><strong>2. Suggest Solutions:</strong> "Check email format and try again" or "Contact support"</li>
              <li><strong>3. Show Progress:</strong> "Retrying... Attempt 2 of 3"</li>
              <li><strong>4. Maintain Context:</strong> Explain what the agent was trying to do when error occurred</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monitoring and Alerts</h2>

          <p className="text-gray-700 mb-6">
            Track error patterns to improve reliability:
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• Error rate by tool (alert if {'>'} 5%)</li>
            <li>• Timeout frequency by endpoint</li>
            <li>• Retry success/failure ratios</li>
            <li>• Fallback activation frequency</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Circuit Breaker Pattern</h2>

          <p className="text-gray-700 mb-6">
            Prevent cascading failures by temporarily disabling failing tools:
          </p>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`class CircuitBreaker {
  constructor(threshold = 5, timeout = 60000) {
    this.failureCount = 0;
    this.threshold = threshold;
    this.timeout = timeout;
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
  }
  
  async execute(fn) {
    if (this.state === 'OPEN') {
      throw new Error('Circuit breaker is OPEN');
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Robust error handling is not optional for production AI agents. By implementing proper retry logic, fallback patterns, and user communication, you create reliable systems that maintain user trust even when things go wrong.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build resilient AI agents</h3>
            <p className="text-lg text-purple-100 mb-6">
              Implement robust error handling in your agent systems
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8 h-12">
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