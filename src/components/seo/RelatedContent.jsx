import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getRelatedPages, getCrossCategoryPages, getSeoPage } from '@/lib/seoConfig';

/**
 * RelatedContent - Interlinking content block for pages.
 * 
 * Renders a "Related Content" / "Explore More" section at the bottom of pages
 * with links to related pages. Each link renders as an <a href> tag.
 * 
 * @param {string} currentPage - The pageName of the current page
 * @param {string} [category] - Category to match (defaults to current page's category)
 * @param {string[]} [crossCategories] - Additional categories to include
 * @param {number} [limit] - Max number of related pages (default 4)
 * @param {string} [title] - Section title (default "Related Content")
 * @param {string[]} [manualPages] - Manually specify pageNames to show
 */
export default function RelatedContent({
  currentPage,
  category,
  crossCategories = [],
  limit = 4,
  title = 'Related Content',
  manualPages = null,
}) {
  let pages;

  if (manualPages) {
    pages = manualPages
      .map(pn => getSeoPage(pn))
      .filter(p => p && p.pageName !== currentPage);
  } else {
    const currentPageData = getSeoPage(currentPage);
    const matchCategory = category || currentPageData?.category;
    pages = matchCategory ? getRelatedPages(currentPage, matchCategory, limit) : [];
    if (crossCategories.length > 0) {
      const cross = getCrossCategoryPages(currentPage, crossCategories, limit);
      pages = [...pages, ...cross];
    }
  }

  if (pages.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-8">Explore related topics and resources on the 1C Platform.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((page) => (
            <Link
              key={page.pageName}
              to={page.url}
              className="group block bg-white rounded-xl border border-gray-200 p-5 hover:border-[#8B2EE5] hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#8B2EE5]">
                  {page.category}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B2EE5] transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#8B2EE5] transition-colors">
                {page.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}