import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const articles = [
  { title: 'Troubleshooting common errors', page: 'SupportArticle4', description: 'Solutions to the most frequent issues', time: '10 min read' },
  { title: 'API error codes explained', page: 'SupportArticle4', description: 'Understanding 400, 401, 429, and 500 errors', time: '8 min read' },
  { title: 'Debugging agent failures', page: 'SupportArticle4', description: 'Diagnose and fix agent execution problems', time: '12 min read' },
  { title: 'Performance optimization', page: 'SupportArticle5', description: 'Speed up your agents and reduce latency', time: '15 min read' },
  { title: 'Connection timeout issues', page: 'SupportArticle4', description: 'Resolve network and timeout problems', time: '7 min read' },
  { title: 'Data sync problems', page: 'SupportArticle4', description: 'Fix data synchronization issues', time: '9 min read' },
  { title: 'Authentication failures', page: 'SupportArticle2', description: 'Resolve API key and token issues', time: '6 min read' },
  { title: 'Rate limit handling', page: 'SupportArticle3', description: 'Strategies for managing rate limits', time: '8 min read' },
  { title: 'Integration debugging', page: 'SupportArticle6', description: 'Fix third-party integration issues', time: '11 min read' },
  { title: 'Webhook troubleshooting', page: 'SupportArticle6', description: 'Diagnose webhook delivery problems', time: '8 min read' }
];

export default function TechnicalSupportGuide() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Technical Support Guide"
        description="Troubleshooting guides and technical documentation to help you resolve issues quickly."
        url="/technical-support"
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
              <Wrench className="w-8 h-8 text-[#8B2EE5]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Support
            </h1>
            <p className="text-xl text-gray-600">Troubleshooting guides to help you resolve technical issues.</p>
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