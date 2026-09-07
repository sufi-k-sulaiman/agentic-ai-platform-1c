import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';

/**
 * Top100QuestionsPromo - Cross-link banner promoting the Top 100 Questions page.
 * Drop into key pages to drive internal linking and discoverability.
 *
 * @param {string} [variant] - 'banner' (default, full-width) or 'card' (compact)
 * @param {string} [className] - Additional classes
 */
export default function Top100QuestionsPromo({ variant = 'banner', className = '' }) {
  if (variant === 'card') {
    return (
      <Link
        to="/top-100-questions"
        className={`group block bg-gradient-to-br from-[#8B2EE5]/5 to-[#A855F7]/10 border border-[#8B2EE5]/20 rounded-2xl p-6 hover:border-[#8B2EE5]/50 hover:shadow-lg transition-all ${className}`}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#8B2EE5]/10 flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-[#8B2EE5]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#8B2EE5] transition-colors">
              Top 100 AI Questions Answered
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              AI, ecommerce, digital commerce, integration, customer acquisition, tech debt, adoption & challenges.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#8B2EE5]">
              Explore all 100 questions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">
        <Link
          to="/top-100-questions"
          className="group block bg-gradient-to-r from-[#8B2EE5]/5 via-[#A855F7]/5 to-[#8B2EE5]/5 border border-[#8B2EE5]/20 rounded-2xl p-8 hover:border-[#8B2EE5]/50 hover:shadow-xl transition-all"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#8B2EE5]/10 flex items-center justify-center">
              <HelpCircle className="w-7 h-7 text-[#8B2EE5]" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#8B2EE5] transition-colors">
                Top 100 Questions: AI, Ecommerce, Digital Commerce & Integration
              </h3>
              <p className="text-gray-600">
                The definitive guide to the most pressing questions about AI, ecommerce, customer acquisition,
                tech debt, current adoption, and critical issues—with expert answers.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B2EE5] text-white font-semibold text-sm group-hover:bg-[#7325C4] transition-colors">
                Explore 100 Questions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}