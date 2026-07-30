import React from 'react';
import InternalLinker from '@/components/seo/InternalLinker';

/**
 * IndustryIntro - Reusable keyword-rich intro paragraph for industry
 * landing pages. Wraps body copy in InternalLinker so registered keywords
 * auto-link to their landing pages, adding crawlable body text and internal
 * link density to otherwise thin industry pages.
 *
 * @param {string} currentPage - The pageName (to avoid self-linking)
 * @param {string} heading - Section heading
 * @param {React.ReactNode} children - Paragraph body text
 */
export default function IndustryIntro({ currentPage, heading, children }) {
  return (
    <section className="py-12 sm:py-14 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{heading}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          <InternalLinker currentPage={currentPage}>{children}</InternalLinker>
        </p>
      </div>
    </section>
  );
}