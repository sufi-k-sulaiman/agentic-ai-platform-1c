import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, BookOpen, Code, Zap, Terminal, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const categories = [
  {
    icon: Zap,
    title: 'Quick Start',
    description: 'Get up and running in 5 minutes',
    guides: [
      'Installation & Setup',
      'Your First Agent',
      'Authentication',
      'Making API Calls'
    ]
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation',
    guides: [
      'REST API Endpoints',
      'GraphQL Schema',
      'WebSocket Events',
      'Error Codes'
    ]
  },
  {
    icon: BookOpen,
    title: 'Guides & Tutorials',
    description: 'Step-by-step learning paths',
    guides: [
      'Building AI Agents',
      'Workflow Automation',
      'Data Integration',
      'Security Best Practices'
    ]
  },
  {
    icon: Terminal,
    title: 'SDKs & Tools',
    description: 'Client libraries and CLI tools',
    guides: [
      'JavaScript SDK',
      'Python SDK',
      'CLI Reference',
      'VS Code Extension'
    ]
  }
];

const popularDocs = [
  { title: 'Authentication Guide', category: 'Security', views: '125K' },
  { title: 'Creating Your First Agent', category: 'Getting Started', views: '98K' },
  { title: 'REST API Reference', category: 'API', views: '87K' },
  { title: 'Webhook Events', category: 'Integration', views: '76K' },
  { title: 'Rate Limits & Quotas', category: 'API', views: '65K' }
];

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
        <InternalLinker currentPage="Documentation">
    <div className="bg-white">
      <PageMeta 
        title="Documentation"
        description="Complete documentation for 1C Platform. API reference, SDKs, quick start guides, tutorials, and integration examples."
        url="/documentation"
        keywords={['API documentation', 'developer docs', 'SDK reference', 'integration guides', 'AI platform docs']}
        image="https://images.unsplash.com/photo-1499956285475-3631ae93606f?w=1200&h=630&fit=crop"
        howTo={{
          name: 'Getting Started with 1C Platform',
          description: 'Step-by-step guide to setting up and deploying your first AI agent',
          steps: [
            { name: 'Sign up for an account', text: 'Create your free 1C Platform account at our registration page. No credit card required to start.' },
            { name: 'Get your API key', text: 'Navigate to Settings > API Keys and generate a new API key for your application.' },
            { name: 'Install the SDK', text: 'Install our SDK via npm or pip depending on your preferred programming language.' },
            { name: 'Create your first agent', text: 'Use the dashboard or SDK to create your first autonomous AI agent with a template.' },
            { name: 'Test and deploy', text: 'Test your agent in the sandbox environment, then deploy to production when ready.' },
          ],
        }}
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Documentation' }
      ]} />
      
      {/* Hero with Search */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Documentation
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Everything you need to build with 1cPlatform
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <Input
                placeholder="Search documentation..."
                className="pl-16 pr-6 h-16 text-lg rounded-full border-gray-300 bg-white shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6 text-sm text-gray-600">
              <span>Popular:</span>
              {['Authentication', 'Quick Start', 'API Reference', 'SDKs'].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1 bg-white rounded-full hover:bg-gray-50 border border-gray-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.guides.map((guide) => {
                        const pageMap = {
                          'Installation & Setup': 'DocInstallation',
                          'Your First Agent': 'DocFirstAgent',
                          'Authentication': 'DocAuthentication',
                          'REST API Endpoints': 'DocAPIReference',
                          'Workflow Automation': 'DocWorkflowAutomation',
                          'Data Integration': 'DocDataIntegration'
                        };
                        const pageName = pageMap[guide];
                        
                        return (
                          <li key={guide}>
                            {pageName ? (
                              <Link
                                to={createPageUrl(pageName)}
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#8B2EE5] transition-colors group"
                              >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                {guide}
                              </Link>
                            ) : (
                              <span className="flex items-center gap-2 text-sm text-gray-700">
                                <ArrowRight className="w-4 h-4" />
                                {guide}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular documentation</h2>
              <p className="text-gray-600">Most viewed guides this month</p>
            </div>
            <Link to={createPageUrl('DocAPIReference')}>
              <Button variant="outline" className="rounded-full border-gray-300">
                View all <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {popularDocs.map((doc, index) => {
              const docPageMap = {
                'Authentication Guide': 'DocAuthentication',
                'Creating Your First Agent': 'DocFirstAgent',
                'REST API Reference': 'DocAPIReference',
                'Webhook Events': 'DocDataIntegration'
              };
              const pageName = docPageMap[doc.title] || 'DocAPIReference';
              
              return (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={createPageUrl(pageName)}
                    className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-gray-400 group-hover:text-[#8B2EE5] transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#8B2EE5] transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-500">{doc.category} • {doc.views} views</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#8B2EE5] group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start building in minutes</h2>
            <p className="text-xl text-gray-600">Install the SDK and make your first API call</p>
          </div>

          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-800">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-3 text-sm text-gray-400">quick-start.js</span>
            </div>
            <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
              <code>{`// Install the SDK
npm install @1cplatform/sdk

// Initialize the client
import { OneC } from '@1cplatform/sdk';
import InternalLinker from '@/components/seo/InternalLinker';

const client = new OneC({
  apiKey: process.env.ONEC_API_KEY
});

// Create an AI agent
const agent = await client.agents.create({
  name: 'my-first-agent',
  model: 'gpt-4',
  instructions: 'You are a helpful assistant'
});

console.log('Agent created:', agent.id);`}</code>
            </pre>
          </div>

          <div className="text-center mt-8">
            <Link to={createPageUrl('DocFirstAgent')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8">
                View full guide <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <RelatedContent
        currentPage="Documentation"
        category="resources"
        crossCategories={['product']}
        title="Explore Related Resources"
      />
    </div>
    </InternalLinker>
  );
}