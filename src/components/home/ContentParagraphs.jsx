import React from 'react';
import InternalLinker from '@/components/seo/InternalLinker';

/**
 * ContentParagraphs - Keyword-rich body copy for the Home page.
 * Wrapped in InternalLinker so registered keywords auto-link to their
 * landing pages, improving internal link density and topical depth.
 */
export default function ContentParagraphs() {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Agentic AI Changes How Work Gets Done
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <InternalLinker currentPage="Home">
              Agentic AI goes beyond conventional automation by giving agents the
              ability to reason, plan, and act across your tools. Where a traditional
              workflow runs the same steps every time, an autonomous agent adapts in
              real time, choosing the right path based on context and outcomes. On
              1C Platform, these agents connect directly to your enterprise suite,
              ERP, and CRM systems, so they can read data, make decisions, and write
              updates back without someone babysitting the process.
            </InternalLinker>
          </p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Enterprise-Grade by Design
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <InternalLinker currentPage="Home">
              Built for scale and security from day one, 1C Platform runs on a
              cloud platform with auto-scaling and multi-region deployment, backed
              by enterprise-grade cybersecurity and compliance automation. Teams can
              connect new systems quickly using our developer tools, SDK, and API,
              while leadership gets visibility into every decision the agents make.
              Whether you need help from our help center, want to attend events and
              webinars, or are exploring courses and AI education, the platform
              grows with you.
            </InternalLinker>
          </p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            See It in Numbers Before You Commit
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <InternalLinker currentPage="Home">
              Not sure where to start? Use our ROI calculator to model the cost
              reduction and productivity gains your team could see, then review
              transparent pricing designed for teams of every size. When you're
              ready to go deeper, the documentation and API reference walk you
              through installation and integration, and our active community of AI
              developers shares patterns and best practices every day.
            </InternalLinker>
          </p>
        </div>
      </div>
    </section>
  );
}