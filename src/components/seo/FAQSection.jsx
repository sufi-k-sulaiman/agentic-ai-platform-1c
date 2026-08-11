import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQSection - Visual FAQ accordion with built-in FAQPage schema.
 *
 * Renders an interactive accordion of questions/answers AND emits
 * FAQPage JSON-LD structured data for rich results in search.
 *
 * @param {string} title - Section heading (default "Frequently Asked Questions")
 * @param {string} [subtitle] - Optional subheading
 * @param {Array} faqs - [{ question, answer }]
 * @param {string} [className] - Optional extra classes
 */
export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs = [],
  className = '',
}) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  // FAQPage JSON-LD structured data
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`py-20 bg-gray-50 border-t border-gray-100 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-[#8B2EE5]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8B2EE5] flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>
    </section>
  );
}