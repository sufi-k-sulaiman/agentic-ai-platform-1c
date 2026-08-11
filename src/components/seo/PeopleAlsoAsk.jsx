import React from 'react';
import { HelpCircle } from 'lucide-react';
import InternalLinker from '@/components/seo/InternalLinker';

/**
 * PeopleAlsoAsk - "People Also Ask" content block for blog posts and articles.
 *
 * Renders a styled Q&A block that targets long-tail question queries and
 * "People Also Ask" featured snippets. Wraps answers in InternalLinker for
 * automatic internal linking of registered keywords.
 *
 * @param {string} currentPage - The pageName (to avoid self-linking)
 * @param {Array} questions - [{ question, answer }]
 * @param {string} [title] - Section title (default "People Also Ask")
 */
export default function PeopleAlsoAsk({ currentPage, questions = [], title = 'People Also Ask' }) {
  if (!questions.length) return null;

  // FAQPage JSON-LD for these specific questions
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-7 h-7 text-[#8B2EE5]" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="space-y-6">
          {questions.map((item, idx) => (
            <div key={idx} className="border-l-4 border-[#8B2EE5]/30 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">
                <InternalLinker currentPage={currentPage}>{item.answer}</InternalLinker>
              </p>
            </div>
          ))}
        </div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>
    </section>
  );
}