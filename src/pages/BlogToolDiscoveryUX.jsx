import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Filter, Tag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogToolDiscoveryUX() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Tool Discovery UX: Helping Agents Find the Right Tools"
        description="Design effective tool discovery experiences for AI agents. Search, categorization, recommendations, and intelligent tool matching."
        url="/blog/tool-discovery-ux"
        keywords={['tool discovery', 'search UX', 'tool marketplace', 'agent tools', 'recommendation systems', 'tool matching']}
        article={{
        author: 'Emma Wilson',
        datePublished: '2025-01-11',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200',
        section: 'Agentic Design',
        tags: ['agentic design', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Tool Discovery UX: Helping Agents Find t' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
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
          Tool Discovery UX: Helping Agents Find the Right Tools
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Emma Wilson</span>
          <span>•</span>
          <span>January 11, 2025</span>
          <span>•</span>
          <span>14 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200"
          alt="Tool Discovery"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            As tool ecosystems grow, agents need intelligent discovery mechanisms to find the right tool for each task. Poor discovery UX leads to wrong tool selection, failed executions, and frustrated users. This guide explores patterns for effective tool discovery.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Search-First Discovery</h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Search className="w-6 h-6 text-[#8B2EE5]" />
              <h3 className="text-xl font-bold text-gray-900">Semantic Search</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Enable agents to search tools using natural language descriptions, not just exact names.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Agent query: "I need to send an email"</p>
              <p className="text-sm font-mono text-[#8B2EE5]">→ Matches: Email Sender, SMTP Tool, Notification Service</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Categorization Systems</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">By Function</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Communication</li>
                <li>• Data Processing</li>
                <li>• File Operations</li>
                <li>• External APIs</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">By Use Case</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Customer Support</li>
                <li>• Sales Automation</li>
                <li>• Data Analysis</li>
                <li>• Marketing</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">By Integration</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Salesforce</li>
                <li>• Google Workspace</li>
                <li>• Slack</li>
                <li>• HubSpot</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Intelligent Recommendations</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Context-Aware Suggestions</h3>
          <p className="text-gray-700 mb-6">
            Recommend tools based on:
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• Current agent task and goal</li>
            <li>• Previously used tools in similar scenarios</li>
            <li>• Tool compatibility with existing workflow</li>
            <li>• User permissions and available integrations</li>
            <li>• Performance metrics and reliability scores</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Filtering and Sorting</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-6 h-6 text-[#8B2EE5]" />
              <h3 className="text-xl font-bold text-gray-900">Multi-Dimensional Filters</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div><strong>Category:</strong> Communication, Data, File Operations</div>
              <div><strong>Integration:</strong> Salesforce, Slack, Google</div>
              <div><strong>Pricing:</strong> Free, Paid, Enterprise</div>
              <div><strong>Rating:</strong> 4+ stars, 3+ stars</div>
              <div><strong>Popularity:</strong> Most used, Trending, New</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tool Metadata Design</h2>

          <p className="text-gray-700 mb-6">Essential metadata for effective discovery:</p>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`{
  "id": "email-sender-v2",
  "name": "Email Sender",
  "description": "Send emails via SMTP",
  "category": "communication",
  "tags": ["email", "smtp", "notification"],
  "capabilities": ["send", "template", "attachment"],
  "integrations": ["gmail", "outlook", "sendgrid"],
  "pricing": "free_tier_available",
  "rating": 4.8,
  "usage_count": 125000,
  "last_updated": "2025-01-10"
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">User Interface Patterns</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tool Marketplace View</h3>
          <p className="text-gray-700 mb-6">
            Display tools in a browsable marketplace with:
          </p>
          <ul className="space-y-2 mb-8 text-gray-700">
            <li>• Tool cards showing name, description, rating, usage stats</li>
            <li>• Quick preview of capabilities and integrations</li>
            <li>• One-click installation or activation</li>
            <li>• Related tools and alternatives</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices</h2>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Prioritize search over browse for large tool catalogs</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Show usage examples and success rates</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Enable agents to suggest new tools based on needs</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Track and learn from tool selection patterns</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Optimize tool discovery</h3>
            <p className="text-lg text-purple-100 mb-6">
              Build intelligent tool discovery for your AI agents
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