import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAgenticAICompliance() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Regulatory Compliance for Agentic AI: Navigating Global Requirements"
        description="Comprehensive guide to AI regulations affecting autonomous agents. EU AI Act, US requirements, and industry-specific compliance."
        url="/blog/agentic-ai-compliance"
      />

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
              <span className="text-gray-600">16 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Regulatory Compliance for Agentic AI: Navigating Global Requirements
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Maria Santos</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Jan 14, 2025</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
              alt="Compliance"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              The regulatory landscape for AI is evolving rapidly. Organizations deploying agentic AI must navigate complex, sometimes conflicting requirements across jurisdictions and industries.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The EU AI Act</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The world's most comprehensive AI regulation, effective 2025:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Risk Classification</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Unacceptable Risk (Prohibited)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Social scoring systems</li>
                <li>Real-time biometric identification in public spaces</li>
                <li>Manipulation of vulnerable groups</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">High Risk (Strict Requirements)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>AI in critical infrastructure</li>
                <li>Employment and HR decisions</li>
                <li>Credit scoring and lending</li>
                <li>Law enforcement applications</li>
              </ul>
              <p className="text-gray-700 mt-3"><strong>Requirements:</strong> Conformity assessments, risk management, data governance, transparency, human oversight, accuracy requirements.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Limited Risk (Transparency Only)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Chatbots and virtual assistants</li>
                <li>Content generation tools</li>
              </ul>
              <p className="text-gray-700 mt-3"><strong>Requirements:</strong> Disclosure that users are interacting with AI.</p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Penalties</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Non-compliance fines up to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>€35M or 7% of global revenue</strong> - Prohibited AI systems</li>
              <li><strong>€15M or 3% of global revenue</strong> - Other violations</li>
              <li><strong>€7.5M or 1.5% of global revenue</strong> - Incorrect information</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">US Regulatory Landscape</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Executive Order on AI (2023)</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Safety testing</strong> - Powerful models must undergo testing</li>
              <li><strong>Content authentication</strong> - Watermarking AI-generated content</li>
              <li><strong>Privacy protections</strong> - Safeguards for personal data</li>
              <li><strong>Equity and fairness</strong> - Prevent discrimination</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">State-Level Regulations</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>California:</strong> Consumer privacy and AI transparency laws</li>
              <li><strong>Colorado:</strong> AI in insurance and employment decisions</li>
              <li><strong>New York:</strong> Automated employment decision tools</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Industry-Specific Requirements</h2>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Services</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Model Risk Management (SR 11-7):</strong> Validation and governance</li>
                <li><strong>Fair lending laws:</strong> Prevent discrimination in credit decisions</li>
                <li><strong>GDPR/CCPA:</strong> Data privacy in customer interactions</li>
                <li><strong>Explainability:</strong> Ability to explain AI decisions</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>HIPAA:</strong> Patient data protection</li>
                <li><strong>FDA regulations:</strong> Medical device classification for diagnostic AI</li>
                <li><strong>Clinical validation:</strong> Proof of safety and efficacy</li>
                <li><strong>Informed consent:</strong> Patient awareness of AI involvement</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Human Resources</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>EEOC guidelines:</strong> Anti-discrimination in hiring</li>
                <li><strong>NYC Local Law 144:</strong> Bias audits for automated tools</li>
                <li><strong>Transparency requirements:</strong> Disclose AI use in hiring</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compliance Checklist</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Before Deployment</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>□ Risk classification completed</li>
              <li>□ Data privacy impact assessment</li>
              <li>□ Bias testing across demographics</li>
              <li>□ Security review passed</li>
              <li>□ Documentation complete</li>
              <li>□ Human oversight defined</li>
              <li>□ Emergency stop mechanism tested</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">During Operations</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>□ Continuous monitoring active</li>
              <li>□ Audit logs maintained</li>
              <li>□ Performance metrics tracked</li>
              <li>□ Incident response plan ready</li>
              <li>□ User feedback collected</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Regular Reviews</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>□ Quarterly compliance audits</li>
              <li>□ Annual comprehensive reviews</li>
              <li>□ Regulatory update assessments</li>
              <li>□ Policy effectiveness evaluation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Stay informed:</strong> Monitor regulatory developments</li>
              <li><strong>Document everything:</strong> Maintain comprehensive records</li>
              <li><strong>Involve legal early:</strong> Don't wait until deployment</li>
              <li><strong>Exceed minimums:</strong> Go beyond compliance to best practices</li>
              <li><strong>Learn from others:</strong> Industry groups and peer experiences</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Compliance is complex but manageable with the right framework. Treat it as an opportunity to build trust and competitive advantage, not just a regulatory burden.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The regulatory landscape is fragmenting into a complex patchwork that punishes reactive compliance strategies. The EU AI Act classifies agents by risk with escalating requirements. California's CCPA mandates specific transparency for automated decision-making. New York requires bias audits for hiring algorithms. Healthcare demands HIPAA compliance. Financial services require model risk management. Organizations deploying agents globally face the intersection of all these frameworks—requirements that conflict, overlap, and change quarterly. The compliance burden grows exponentially with geographic and industry scope, making proactive, systematic compliance architecture essential. Companies treating compliance as checklist exercise discover too late that regulatory violations carry catastrophic penalties: millions in fines, operational restrictions, reputational damage that takes years to repair.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              The strategic imperative is building compliance into agent architecture from inception rather than retrofitting after deployment. Agents designed with privacy-by-default, built-in audit trails, configurable human oversight, and documented decision logic satisfy most regulatory frameworks with minimal modification. Those built without compliance considerations require expensive, disruptive redesigns when requirements surface—often discovering that fundamental architectural choices prevent compliance entirely, forcing complete rebuilds. The cost differential between compliance-first and compliance-retrofit approaches can reach 5-10x, not counting opportunity costs from delayed deployments while remediation proceeds. Organizations should engage compliance and legal teams during initial agent design, not after development completes, treating regulatory requirements as product requirements equally important as functional specifications.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ensure compliance with confidence</h3>
            <p className="text-gray-600 mb-6">
              1cPlatform helps you meet regulatory requirements for agentic AI deployment.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4]">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}