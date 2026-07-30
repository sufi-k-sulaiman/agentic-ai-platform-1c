import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import { blogPosts } from '@/lib/blogPosts';

export default function BlogCategoryHub({
  category,
  title,
  description,
  intro,
  pageName,
  keywords = [],
}) {
  const posts = blogPosts.filter(p => p.category === category);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": `https://1cplatform.com/${pageName}`,
    "numberOfItems": posts.length,
    "hasPart": posts.map(p => ({
      "@type": "Article",
      "name": p.title,
      "url": `https://1cplatform.com/${p.page}`
    }))
  };

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        url={`/${pageName}`}
        keywords={keywords}
        collectionPage={collectionPageJsonLd}
      />
      <div className="bg-white min-h-screen">
        <section className="pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-violet-50">
          <div className="max-w-6xl mx-auto px-6">
            <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: category }]} />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="px-4 py-1 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-medium mb-4 inline-block">
                {posts.length} Articles
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
              <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
              {intro && (
                <p className="text-gray-700 leading-relaxed mt-6 max-w-3xl">{intro}</p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, idx) => (
                <motion.article
                  key={post.page}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(idx * 0.05, 0.4) }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#8B2EE5] transition-all"
                >
                  <Link to={createPageUrl(post.page)}>
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 hover:text-[#8B2EE5] transition-colors">
                      <Link to={createPageUrl(post.page)}>{post.title}</Link>
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                    <Link
                      to={createPageUrl(post.page)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#8B2EE5] hover:text-[#7325C4] transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to={createPageUrl('Blog')}>
                <Button variant="outline" className="rounded-full px-8 h-12">
                  <FileText className="w-4 h-4 mr-2" />
                  View All Blog Posts
                </Button>
              </Link>
            </div>

            <div className="mt-16 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply These Insights to Your Industry</h2>
              <p className="text-gray-600 mb-6">Explore how agentic AI transforms operations across 14 industries:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Property Management', page: 'PropertyManagement' },
                  { label: 'Healthcare', page: 'Healthcare' },
                  { label: 'Retail', page: 'Retail' },
                  { label: 'Financial Services', page: 'FinancialInstitutions' },
                  { label: 'Data Centers', page: 'DataCenters' },
                  { label: 'Public Transit', page: 'Transit' },
                  { label: 'Energy & Utilities', page: 'EnergyUtilities' },
                  { label: 'Corporate Campuses', page: 'CorporateCampuses' },
                ].map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-[#8B2EE5] transition-all text-sm font-medium text-gray-700 hover:text-[#8B2EE5]"
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RelatedContent currentPage={pageName} category="blog" title="Explore Other Topics" />
      </div>
    </>
  );
}