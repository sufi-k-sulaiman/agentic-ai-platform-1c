import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const articles = [
  { title: 'Managing your subscription', page: 'SupportArticle8', description: 'Upgrade, downgrade, or cancel your plan anytime', time: '5 min read' },
  { title: 'Understanding pricing tiers', page: 'SupportArticle8', description: 'Compare plans and find the right fit for your needs', time: '4 min read' },
  { title: 'Updating payment methods', page: 'SupportArticle8', description: 'Change credit cards and billing information', time: '3 min read' },
  { title: 'Viewing invoices and receipts', page: 'SupportArticle8', description: 'Access your billing history and download invoices', time: '3 min read' },
  { title: 'Setting up billing alerts', page: 'SupportArticle8', description: 'Get notified about charges and usage limits', time: '4 min read' },
  { title: 'Understanding usage-based billing', page: 'SupportArticle3', description: 'How API calls and storage affect your bill', time: '6 min read' },
  { title: 'Applying discount codes', page: 'SupportArticle8', description: 'Redeem promotional codes and referral credits', time: '3 min read' },
  { title: 'Enterprise billing options', page: 'SupportArticle8', description: 'Custom invoicing and payment terms', time: '5 min read' }
];

export default function AccountBillingGuide() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Account & Billing Guide"
        description="Manage your subscription, billing, and payment information with our comprehensive guides."
        url="/account-billing"
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
              <CreditCard className="w-8 h-8 text-[#8B2EE5]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Account & Billing
            </h1>
            <p className="text-xl text-gray-600">Everything you need to know about managing your subscription and billing.</p>
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