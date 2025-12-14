import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAgenticAIVendorManagement() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="AI Vendor Management: Assessing and Managing Third-Party AI Risks"
        description="Evaluate and manage risks from AI/LLM vendors. Due diligence, contracts, SLAs, and ongoing vendor governance."
        url="/blog/agentic-ai-vendor-management"
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
              <span className="text-gray-600">14 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Vendor Management: Assessing and Managing Third-Party AI Risks
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Steven Martinez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Jan 2, 2025</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200&h=600&fit=crop"
              alt="Vendor Management"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Most organizations use third-party AI models from providers like OpenAI, Anthropic, and Google. This creates vendor dependencies and risks that require careful management and governance.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party AI Risks</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operational Risks</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service outages:</strong> Vendor downtime disrupts your agents</li>
              <li><strong>Performance changes:</strong> Model updates affecting agent behavior</li>
              <li><strong>Pricing changes:</strong> Cost increases impacting economics</li>
              <li><strong>Deprecation:</strong> Models retired forcing migrations</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security Risks</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Data breaches:</strong> Vendor security incidents exposing your data</li>
              <li><strong>Unauthorized access:</strong> Vendor employees accessing customer data</li>
              <li><strong>Supply chain attacks:</strong> Compromised vendor systems</li>
              <li><strong>Model theft:</strong> Intellectual property loss</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Compliance Risks</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Data residency:</strong> Where vendor processes data</li>
              <li><strong>Subprocessors:</strong> Vendor's third-party dependencies</li>
              <li><strong>Regulatory changes:</strong> Vendor unable to meet new requirements</li>
              <li><strong>Audit rights:</strong> Limited visibility into vendor operations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Vendor Due Diligence</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pre-Selection Assessment</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Security posture:</strong> SOC 2, ISO 27001, penetration testing</li>
              <li><strong>Privacy practices:</strong> Data handling, retention, deletion</li>
              <li><strong>Compliance certifications:</strong> Industry-specific requirements</li>
              <li><strong>Financial stability:</strong> Vendor viability and continuity</li>
              <li><strong>Reputation:</strong> Track record and customer references</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Questions to Ask</h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-3"><strong>Data and Privacy:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>Where is our data processed and stored?</li>
                <li>Who has access to our data?</li>
                <li>How long is data retained?</li>
                <li>Is our data used to train models?</li>
                <li>Can we request data deletion?</li>
              </ul>

              <p className="text-gray-700 mb-3"><strong>Security:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                <li>What certifications do you have?</li>
                <li>When was your last penetration test?</li>
                <li>What's your incident response process?</li>
                <li>How do you handle vulnerabilities?</li>
              </ul>

              <p className="text-gray-700 mb-3"><strong>Operations:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>What are your SLA guarantees?</li>
                <li>How do you handle model updates?</li>
                <li>What support options are available?</li>
                <li>What's your disaster recovery plan?</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Contract Negotiation</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Essential Contract Terms</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Data ownership:</strong> You own your data and inputs</li>
              <li><strong>Data usage:</strong> Vendor cannot train on your data</li>
              <li><strong>Data deletion:</strong> Right to delete data at any time</li>
              <li><strong>SLAs:</strong> Uptime, performance, support commitments</li>
              <li><strong>Liability:</strong> Vendor responsibility for breaches</li>
              <li><strong>Audit rights:</strong> Ability to assess vendor controls</li>
              <li><strong>Termination:</strong> Data retrieval upon contract end</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Processing Agreement (DPA)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Required for GDPR compliance when vendor processes EU data:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Processing purposes and duration</li>
              <li>Data subject rights procedures</li>
              <li>Security measures required</li>
              <li>Subprocessor requirements</li>
              <li>Breach notification obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ongoing Vendor Governance</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Regular Assessments</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Quarterly:</strong> Performance and SLA review</li>
              <li><strong>Annual:</strong> Security and compliance reassessment</li>
              <li><strong>As-needed:</strong> Incident reviews, major changes</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Relationship Management</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Designated vendor manager</li>
              <li>Regular business reviews</li>
              <li>Escalation procedures</li>
              <li>Feedback and improvement discussions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contingency Planning</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Multi-vendor strategy:</strong> Don't depend on single provider</li>
              <li><strong>Abstraction layer:</strong> Make vendor switching easier</li>
              <li><strong>Exit plan:</strong> How to migrate if needed</li>
              <li><strong>Business continuity:</strong> Operations during vendor outage</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Vendor Incident Management</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When vendor has a security incident or outage:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Notification:</strong> Understand incident scope and impact</li>
              <li><strong>Assessment:</strong> Evaluate risk to your organization</li>
              <li><strong>Response:</strong> Activate contingency plans if needed</li>
              <li><strong>Communication:</strong> Inform stakeholders appropriately</li>
              <li><strong>Follow-up:</strong> Verify vendor remediation</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Thorough due diligence</strong> - Invest time upfront</li>
              <li><strong>Document everything</strong> - Maintain vendor records</li>
              <li><strong>Continuous monitoring</strong> - Don't assume vendors stay compliant</li>
              <li><strong>Plan for exit</strong> - Have backup options ready</li>
              <li><strong>Foster partnership</strong> - Collaborate for mutual success</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Vendor risk is your risk. Treat AI vendors like any critical service provider—assess rigorously, contract carefully, monitor continuously, and plan for contingencies.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage AI vendors effectively</h3>
            <p className="text-gray-600 mb-6">
              Get guidance on selecting and governing third-party AI providers.
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