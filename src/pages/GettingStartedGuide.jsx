import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const articles = [
  { title: 'Creating your first AI agent', page: 'SupportArticle1', description: 'Step-by-step guide to building your first autonomous agent', time: '5 min read' },
  { title: 'Understanding the dashboard', page: 'SupportArticle1', description: 'Navigate the 1cPlatform interface with confidence', time: '3 min read' },
  { title: 'Setting up your workspace', page: 'SupportArticle1', description: 'Configure your environment for optimal productivity', time: '4 min read' },
  { title: 'Quick start tutorial', page: 'SupportArticle1', description: 'Get up and running in under 10 minutes', time: '8 min read' },
  { title: 'Key concepts explained', page: 'SupportArticle1', description: 'Essential terminology and concepts for beginners', time: '6 min read' },
  { title: 'Your first API call', page: 'SupportArticle2', description: 'Make your first successful API request', time: '5 min read' },
  { title: 'Agent templates overview', page: 'SupportArticle1', description: 'Pre-built templates to accelerate development', time: '7 min read' },
  { title: 'Best practices for beginners', page: 'SupportArticle5', description: 'Expert tips for new users', time: '9 min read' }
];

export default function GettingStartedGuide() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Getting Started Guide"
        description="New to 1cPlatform? Start here with our comprehensive getting started guides and tutorials."
        url="/getting-started"
      />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('HelpCenter')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Book className="w-8 h-8 text-[#8B2EE5]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Getting Started
            </h1>
            <p className="text-xl text-gray-600">New to 1cPlatform? Start here with these essential guides.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {articles.map((article, index) => (
              <Link key={article.title} to={createPageUrl(article.page)}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#8B2EE5]/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#8B2EE5] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{article.description}</p>
                      <p className="text-sm text-gray-500">{article.time}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#8B2EE5] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4 mt-1" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}