import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Puzzle, Package, Plug, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogAIPluginsExtensions() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Building AI Plugins and Extensions: Modular AI Architecture"
        description="Create extensible AI applications. Plugin systems, extension APIs, marketplace patterns, and third-party integration frameworks."
        url="/blog/ai-plugins-extensions"
        keywords={['AI plugins', 'extensions', 'modular AI', 'plugin architecture', 'marketplace']}
        article={{
        author: 'David Park',
        datePublished: '2025-01-19',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200',
        section: 'Agentic Capabilities',
        tags: ['agentic capabilities', 'AI', 'agentic AI'],
        timeRequired: 'PT18M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Building AI Plugins and Extensions: Modu' }]} />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <InternalLinker currentPage="BlogAIPluginsExtensions">
        <Link to={createPageUrl('Blog')}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-6 bg-purple-100 text-[#8B2EE5]">Agentic Capabilities</Badge>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Building AI Plugins and Extensions: Modular AI Architecture
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By David Park</span>
          <span>•</span>
          <span>January 19, 2025</span>
          <span>•</span>
          <span>18 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200"
          alt="Plugins"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Extensibility future-proofs AI applications. Plugin architectures enable third-party developers to extend functionality, users to customize behavior, and your platform to grow without rebuilding core systems. This guide covers building modular AI applications.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Plugin Architecture</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Puzzle className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">Core + Extensions Model</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-white rounded border border-blue-200">
                <strong className="text-gray-900">Core Platform:</strong> <span className="text-gray-700">Agent runtime, LLM integration, basic tools</span>
              </div>
              <div className="p-3 bg-white rounded border border-blue-200">
                <strong className="text-gray-900">Plugins:</strong> <span className="text-gray-700">Custom tools, integrations, behaviors</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Plugin Manifest</h2>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`{
  "name": "salesforce-plugin",
  "version": "1.0.0",
  "description": "Salesforce CRM integration",
  "tools": [
    {
      "name": "get_leads",
      "description": "Retrieve sales leads",
      "parameters": {
        "status": "string",
        "limit": "number"
      }
    }
  ],
  "permissions": ["crm.read", "crm.write"],
  "author": "Acme Corp",
  "pricing": "free"
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Extension API</h2>

          <p className="text-gray-700 mb-6">
            Provide clear APIs for plugin developers:
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Core APIs</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Tool Registration:</strong> Register custom functions</li>
              <li>• <strong>Event Hooks:</strong> React to agent lifecycle events</li>
              <li>• <strong>Data Access:</strong> Read/write to user context</li>
              <li>• <strong>UI Extensions:</strong> Add custom interface elements</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Plugin Marketplace</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <Package className="w-6 h-6 text-blue-600 mb-3" />
              <div className="font-bold text-gray-900 mb-2 text-sm">Discovery</div>
              <div className="text-xs text-gray-700">Browse, search, filter plugins</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <Plug className="w-6 h-6 text-purple-600 mb-3" />
              <div className="font-bold text-gray-900 mb-2 text-sm">Installation</div>
              <div className="text-xs text-gray-700">One-click install, OAuth auth</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <Star className="w-6 h-6 text-yellow-500 mb-3" />
              <div className="font-bold text-gray-900 mb-2 text-sm">Reviews</div>
              <div className="text-xs text-gray-700">Ratings, feedback, support</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Considerations</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Plugin Safety</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Sandboxed execution environment</li>
              <li>• Permission-based access control</li>
              <li>• Code review before marketplace approval</li>
              <li>• Rate limiting per plugin</li>
              <li>• Ability to disable misbehaving plugins</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Plugin architectures enable ecosystem growth and user customization. Design clear APIs, implement security controls, and create a marketplace to unlock the full potential of your AI platform.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Build extensible AI</h3>
            <p className="text-lg text-purple-100 mb-6">
              Create platforms with plugin architectures
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