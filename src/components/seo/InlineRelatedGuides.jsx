import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getSeoPage } from '@/lib/seoConfig';

/**
 * InlineRelatedGuides - Inline "related guides" callout for blog post bodies.
 *
 * Renders a compact, inline list of related page links within article content
 * to increase internal link density and keep readers on the site. Unlike
 * RelatedContent (bottom-of-page), this is designed to be placed mid-article.
 *
 * @param {string} currentPage - The pageName (to avoid self-linking)
 * @param {string[]} pages - Array of pageName keys to link to
 * @param {string} [title] - Section title (default "Related Guides")
 */
export default function InlineRelatedGuides({ currentPage, pages = [], title = 'Related Guides' }) {
  const linkPages = pages
    .map(pn => getSeoPage(pn))
    .filter(p => p && p.pageName !== currentPage);

  if (linkPages.length === 0) return null;

  return (
    <aside className="my-8 p-6 bg-purple-50 border border-[#8B2EE5]/20 rounded-xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#8B2EE5] mb-3">{title}</p>
      <ul className="space-y-2">
        {linkPages.map((page) => (
          <li key={page.pageName}>
            <Link
              to={page.url}
              className="flex items-center gap-2 text-gray-700 hover:text-[#8B2EE5] transition-colors group"
            >
              <ArrowRight className="w-4 h-4 text-[#8B2EE5] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <span>
                <span className="font-medium">{page.title}</span>
                <span className="block text-sm text-gray-500">{page.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}