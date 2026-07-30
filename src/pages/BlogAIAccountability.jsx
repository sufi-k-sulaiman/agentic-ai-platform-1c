import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';

export default function BlogAIAccountability() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="AI Accountability: Who's Responsible When Agents Make Mistakes?"
        description="Exploring accountability frameworks for autonomous AI systems. Legal liability, organizational responsibility, and practical risk allocation."
        url="/blog/ai-accountability"
        article={{
        author: '1C Platform Team',
        datePublished: '2025-01-01',
        image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png',
        section: 'AI Insights',
        tags: ['ai insights', 'AI', 'agentic AI'],
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'AIAccountability' }]} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1 bg-purple-100 text-[#8B2EE5] rounded-full text-sm font-medium">
                AI Governance
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">14 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Accountability: Who's Responsible When Agents Make Mistakes?
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Marcus Thompson, J.D.</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Dec 14, 2024</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop"
              alt="Accountability"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              When an autonomous AI agent makes a mistake—approving a bad loan, sending inappropriate communications, or making a costly error—who's accountable? This question sits at the heart of AI governance and affects deployment strategies, insurance, and organizational structure.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Accountability Challenge</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Traditional accountability assumes human decision-makers. AI agents operate autonomously, making thousands of decisions without direct human involvement. This creates an "accountability gap" that law and policy are still figuring out.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Who Could Be Accountable?</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>The organization:</strong> Deploying and operating the agent</li>
              <li><strong>The vendor:</strong> Creating or providing the AI system</li>
              <li><strong>The developers:</strong> Building the agent</li>
              <li><strong>The operators:</strong> Managing day-to-day operations</li>
              <li><strong>The data providers:</strong> Supplying training data</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Legal Liability Frameworks</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Product Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              AI as a product: If defective, manufacturer liable. Applies to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Software vendors selling AI systems</li>
              <li>Platforms providing AI services</li>
              <li>Embedded AI in physical products</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Defense:</strong> Proper testing, clear documentation, warning labels, regular updates
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Negligence</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Failure to exercise reasonable care. Organizations liable if they:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Deploy AI without adequate testing</li>
              <li>Ignore known risks or issues</li>
              <li>Fail to monitor agent performance</li>
              <li>Don't implement industry-standard controls</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Defense:</strong> Documented governance, regular audits, prompt issue remediation, industry best practices
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vicarious Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Employers liable for agents acting within their authority. AI agents as "electronic employees."
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Organizations responsible for agent actions</li>
              <li>Clear authorization boundaries crucial</li>
              <li>Rogue agents outside authority may limit liability</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Organizational Accountability Structure</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Governance Board</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Composition:</strong> CTO, Legal, Risk, Business leaders</li>
              <li><strong>Responsibilities:</strong> Policy approval, risk oversight, major decisions</li>
              <li><strong>Meeting frequency:</strong> Monthly or quarterly</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. AI Product Owner</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Role:</strong> Day-to-day accountability for specific agents</li>
              <li><strong>Responsibilities:</strong> Performance monitoring, issue resolution, updates</li>
              <li><strong>Authority:</strong> Can pause agents, escalate issues, approve changes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Technical Teams</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Developers:</strong> Build agents to specifications</li>
              <li><strong>Data scientists:</strong> Ensure model quality</li>
              <li><strong>MLOps:</strong> Monitor and maintain systems</li>
              <li><strong>Security:</strong> Protect against threats</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Business Stakeholders</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Define requirements:</strong> What agents should do</li>
              <li><strong>Validate outputs:</strong> Ensure business value</li>
              <li><strong>Report issues:</strong> Frontline feedback</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">RACI Matrix for AI Governance</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3">Activity</th>
                    <th className="text-left py-3">Responsible</th>
                    <th className="text-left py-3">Accountable</th>
                    <th className="text-left py-3">Consulted</th>
                    <th className="text-left py-3">Informed</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Agent deployment</td>
                    <td className="py-3">MLOps</td>
                    <td className="py-3">Product Owner</td>
                    <td className="py-3">Security, Legal</td>
                    <td className="py-3">Business</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Policy creation</td>
                    <td className="py-3">Governance</td>
                    <td className="py-3">Board</td>
                    <td className="py-3">All teams</td>
                    <td className="py-3">Company</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Incident response</td>
                    <td className="py-3">Product Owner</td>
                    <td className="py-3">CTO</td>
                    <td className="py-3">Legal, PR</td>
                    <td className="py-3">Executives</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Monitoring</td>
                    <td className="py-3">MLOps</td>
                    <td className="py-3">Product Owner</td>
                    <td className="py-3">Security</td>
                    <td className="py-3">Business</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Practical Accountability Measures</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Documentation</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Agent design decisions and rationale</li>
              <li>Testing and validation results</li>
              <li>Risk assessments and mitigations</li>
              <li>All agent actions with timestamps</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Audit Trails</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Immutable logs of all decisions</li>
              <li>Chain of custody for data</li>
              <li>Configuration change history</li>
              <li>Access and permission logs</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Incident Management</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Clear escalation procedures</li>
              <li>Root cause analysis requirements</li>
              <li>Corrective action tracking</li>
              <li>Post-mortem documentation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Insurance and Risk Transfer</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Cyber liability insurance:</strong> Covers AI-related incidents</li>
              <li><strong>E&O insurance:</strong> Professional services liability</li>
              <li><strong>Vendor indemnification:</strong> Transfer some liability to providers</li>
              <li><strong>Captive insurance:</strong> For large-scale deployments</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Clear accountability isn't about blame—it's about ensuring someone owns each aspect of AI governance. When everyone's responsible, no one is. Define explicit ownership, document decisions, and create transparency. Accountability drives better AI systems.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Establish clear AI accountability</h3>
            <p className="text-gray-600 mb-6">
              Build accountability frameworks for your autonomous AI deployments.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      
      <RelatedContent currentPage="BlogAIAccountability" category="resources" crossCategories={['product']} title="Explore Related Content" />
      </section>
    </div>
  );
}