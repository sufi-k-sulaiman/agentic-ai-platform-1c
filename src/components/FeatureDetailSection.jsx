import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

/**
 * FeatureDetailSection - Expands page content with detailed feature descriptions,
 * use cases, and benefit summaries. Adds ~30% more textual content per page
 * for SEO depth and user comprehension.
 *
 * @param {string} title - Section heading
 * @param {string} subtitle - Section subheading
 * @param {Array} features - Array of { icon, title, description, useCases: string[] }
 * @param {string} [badge] - Optional badge label above title
 */
export default function FeatureDetailSection({
  title,
  subtitle,
  features = [],
  badge = 'Capabilities',
}) {
  if (!features.length) return null;

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-semibold mb-4">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-[#8B2EE5]/30 transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-6 h-6 text-[#8B2EE5]" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{feature.description}</p>
                {feature.useCases && feature.useCases.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                      Key Use Cases
                    </p>
                    <ul className="space-y-2">
                      {feature.useCases.map((uc, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#8B2EE5] mt-0.5 flex-shrink-0" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {features.length > 3 && (
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Each capability is production-ready, enterprise-tested, and integrates seamlessly
              with your existing toolchain. Deploy individual features or the full suite —
              your AI transformation scales with your needs.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}