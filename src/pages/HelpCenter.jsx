import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, MessageCircle, Book, Video, FileQuestion, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';

const categories = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'New to 1cPlatform? Start here',
    articles: 12,
    page: 'GettingStartedGuide'
  },
  {
    icon: HelpCircle,
    title: 'Account & Billing',
    description: 'Manage your subscription',
    articles: 8,
    page: 'AccountBillingGuide'
  },
  {
    icon: FileQuestion,
    title: 'Technical Support',
    description: 'Troubleshooting guides',
    articles: 15,
    page: 'TechnicalSupportGuide'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn by watching',
    articles: 20,
    page: 'VideoTutorialsGuide'
  }
];

const faqs = [
  {
    question: 'How do I get started with 1cPlatform?',
    answer: 'Getting started is easy! Sign up for a free account, get your API key, and follow our quick start guide. You\'ll have your first AI agent running in under 5 minutes.'
  },
  {
    question: 'What programming languages do you support?',
    answer: 'We provide SDKs for JavaScript/TypeScript, Python, Java, Go, Ruby, and PHP. You can also use our REST API or GraphQL API directly from any language.'
  },
  {
    question: 'How is pricing calculated?',
    answer: 'Pricing is based on your plan tier, number of AI agents, API calls per month, and storage usage. We offer a free tier for getting started, and you only pay for what you use beyond that.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, security is our top priority. We use bank-grade encryption, are SOC 2 Type II certified, GDPR compliant, and undergo regular third-party security audits.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. No long-term contracts required.'
  },
  {
    question: 'Do you offer enterprise support?',
    answer: 'Yes! Enterprise plans include 24/7 phone and chat support, a dedicated account manager, custom SLAs, and priority access to new features.'
  }
];

const popularArticles = [
  { title: 'Creating your first AI agent', views: '50K', page: 'SupportArticle1' },
  { title: 'API authentication guide', views: '45K', page: 'SupportArticle2' },
  { title: 'Understanding rate limits', views: '38K', page: 'SupportArticle3' },
  { title: 'Troubleshooting common errors', views: '35K', page: 'SupportArticle4' },
  { title: 'Best practices for production', views: '30K', page: 'SupportArticle5' },
  { title: 'Integrating with third-party services', views: '28K', page: 'SupportArticle6' },
  { title: 'Monitoring agent performance', views: '25K', page: 'SupportArticle7' },
  { title: 'Managing your subscription', views: '22K', page: 'SupportArticle8' },
  { title: 'Team management and permissions', views: '20K', page: 'SupportArticle9' },
  { title: 'Data security and compliance', views: '18K', page: 'SupportArticle10' }
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
        <InternalLinker currentPage="HelpCenter">
    <div className="bg-white">
      <PageMeta 
        title="Help Center"
        description="Get help with 1C Platform. Browse guides, FAQs, tutorials, and troubleshooting articles. 24/7 support available."
        url="/help-center"
        keywords={['help center', 'support', 'FAQ', 'troubleshooting', 'technical support']}
        faq={faqs.map(f => ({ question: f.question, answer: f.answer }))}
        image="https://images.unsplash.com/photo-1584444932173-9b1c1b1e8e0c?w=1200&h=630&fit=crop"
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Help Center' }
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
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              How can we help?
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Search our knowledge base or browse categories below
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <Input
                placeholder="Search for help..."
                className="pl-16 pr-6 h-16 text-lg rounded-full border-gray-300 bg-white shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Popular: <span className="text-[#8B2EE5]">API setup</span>, <span className="text-[#8B2EE5]">pricing</span>, <span className="text-[#8B2EE5]">authentication</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={category.title} to={createPageUrl(category.page)}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl hover:border-[#8B2EE5]/30 transition-all group cursor-pointer">
                    <CardHeader>
                      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <category.icon className="w-7 h-7 text-[#8B2EE5]" />
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-[#8B2EE5] transition-colors">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">{category.articles} articles</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular articles</h2>
            <p className="text-xl text-gray-600">Most viewed this week</p>
          </div>

          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Link key={article.title} to={createPageUrl(article.page)}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-[#8B2EE5]/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Book className="w-6 h-6 text-gray-400 group-hover:text-[#8B2EE5] transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#8B2EE5] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500">{article.views} views</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#8B2EE5] group-hover:translate-x-1 transition-all" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-gray-50 rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED] via-[#8B2EE5] to-[#6B21A8] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20">
              <MessageCircle className="w-12 h-12 stroke-[2]" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Still need help?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Our support team is available 24/7 to assist you
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-white text-[#8B2EE5] hover:bg-white/90 rounded-full px-8 h-14 text-lg font-semibold">
                  Contact support <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <RelatedContent
        currentPage="HelpCenter"
        category="support"
        crossCategories={['resources']}
        title="Explore More"
      />
    </div>
    </InternalLinker>
  );
}