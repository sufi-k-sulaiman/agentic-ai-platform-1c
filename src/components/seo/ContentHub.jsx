import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FolderOpen } from 'lucide-react';
import { getRelatedPages } from '@/lib/seoConfig';

/**
 * ContentHub - Topic cluster hub section for pillar pages.
 *
 * Renders a "Content Hub" section that groups related blog posts and
 * resources by subtopic, establishing topical authority and internal
 * linking structure for SEO. Designed for pillar/cluster content strategy.
 *
 * @param {string} currentPage - The pageName of the current page
 * @param {string} title - Section title (default "Content Hub")
 * @param {string} [subtitle] - Optional subtitle
 * @param {Array} [clusters] - Array of { label, category, limit } cluster definitions
 * @param {Array} [manualPages] - Manually specify pageNames per cluster
 */
export default function ContentHub({
  currentPage,
  title = 'Content Hub',
  subtitle = 'Explore our comprehensive resources on this topic.',
  clusters = [],
  manualPages = null,
}) {
  // Default clusters: pull from blog categories
  const defaultClusters = [
    { label: 'Agentic AI Fundamentals', category: 'blog', filter: (p) => p.keywords?.includes('ai-insights'), limit: 4 },
    { label: 'AI Governance & Compliance', category: 'blog', filter: (p) => p.keywords?.includes('ai-governance'), limit: 4 },
    { label: 'AI Capabilities', category: 'blog', filter: (p) => p.keywords?.includes('agentic-capabilities'), limit: 4 },
    { label: 'Design & UX', category: 'blog', filter: (p) => p.keywords?.includes('agentic-design'), limit: 4 },
  ];

  const clusterDefs = clusters.length > 0 ? clusters : defaultClusters;

  function getClusterPages(cluster) {
    if (manualPages && manualPages[cluster.label]) {
      return manualPages[cluster.label]
        .map(pn => {
          const page = getRelatedPages(currentPage, 'blog', 50).find(p => p.pageName === pn);
          return page;
        })
        .filter(Boolean)
        .slice(0, cluster.limit || 4);
    }
    const pages = getRelatedPages(currentPage, cluster.category || 'blog', 50);
    const filtered = cluster.filter ? pages.filter(cluster.filter) : pages;
    return filtered.slice(0, cluster.limit || 4);
  }

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-semibold mb-4">
            <FolderOpen className="w-4 h-4" />
            Content Hub
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clusterDefs.map((cluster, idx) => {
            const pages = getClusterPages(cluster);
            if (pages.length === 0) return null;

            return (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
                  {cluster.label}
                </h3>
                <ul className="space-y-3">
                  {pages.map((page) => (
                    <li key={page.pageName}>
                      <Link
                        to={page.url}
                        className="group flex items-start gap-2 text-gray-700 hover:text-[#8B2EE5] transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-[#8B2EE5] flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                        <span>
                          <span className="font-medium block">{page.title}</span>
                          <span className="text-sm text-gray-500 line-clamp-2">{page.description}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}