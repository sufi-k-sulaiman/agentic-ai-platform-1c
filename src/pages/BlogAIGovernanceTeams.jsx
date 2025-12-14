import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAIGovernanceTeams() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Building AI Governance Teams: Roles, Skills, and Structure"
        description="How to staff and organize your AI governance function. Key roles, required skills, team structures, and hiring strategies."
        url="/blog/ai-governance-teams"
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
              Building AI Governance Teams: Roles, Skills, and Structure
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Daniel Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Dec 10, 2024</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
              alt="Team Building"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Effective AI governance requires the right people with the right skills in the right structure. This guide shows how to build and organize your AI governance team.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Governance Roles</h2>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chief AI Officer (CAIO)</h3>
              <p className="text-gray-700 mb-3"><strong>Responsibilities:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                <li>Set AI strategy and vision</li>
                <li>Own governance framework</li>
                <li>Report to board on AI initiatives</li>
                <li>Manage AI risk and compliance</li>
              </ul>
              <p className="text-gray-700"><strong>Skills:</strong> Strategic thinking, AI knowledge, business acumen, regulatory awareness</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Ethics Lead</h3>
              <p className="text-gray-700 mb-3"><strong>Responsibilities:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                <li>Develop ethical guidelines</li>
                <li>Conduct bias audits</li>
                <li>Review high-risk deployments</li>
                <li>Stakeholder engagement</li>
              </ul>
              <p className="text-gray-700"><strong>Skills:</strong> Ethics, social science, AI fairness, communication</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Risk Manager</h3>
              <p className="text-gray-700 mb-3"><strong>Responsibilities:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                <li>AI risk assessments</li>
                <li>Control design and testing</li>
                <li>Incident investigation</li>
                <li>Risk reporting</li>
              </ul>
              <p className="text-gray-700"><strong>Skills:</strong> Risk management, AI understanding, analytical thinking</p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Compliance Officer</h3>
              <p className="text-gray-700 mb-3"><strong>Responsibilities:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                <li>Regulatory tracking and interpretation</li>
                <li>Compliance program management</li>
                <li>Policy development</li>
                <li>Regulatory liaison</li>
              </ul>
              <p className="text-gray-700"><strong>Skills:</strong> Legal/compliance background, AI literacy, regulatory knowledge</p>
            </div>

            <div className="bg-pink-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Auditor</h3>
              <p className="text-gray-700 mb-3"><strong>Responsibilities:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-3">
                <li>Conduct AI system audits</li>
                <li>Test controls effectiveness</li>
                <li>Document findings</li>
                <li>Track remediation</li>
              </ul>
              <p className="text-gray-700"><strong>Skills:</strong> Audit methodology, AI/ML knowledge, attention to detail</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Team Structures</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Centralized Model</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Structure:</strong> Single central governance team overseeing all AI
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Pros:</strong> Consistency, efficiency, clear authority
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Cons:</strong> Can become bottleneck, may lack domain expertise
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Best for:</strong> Smaller organizations (50-500 employees) or early AI maturity
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Federated Model</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Structure:</strong> Central policy team + embedded governance in business units
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Pros:</strong> Scales well, domain expertise, faster decisions
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Cons:</strong> Requires coordination, potential inconsistency
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Best for:</strong> Larger organizations (500+ employees) with multiple AI initiatives
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hybrid Model</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Structure:</strong> Central team for high-risk, delegated for low-risk
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Pros:</strong> Balanced, flexible, risk-appropriate
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Cons:</strong> Complex to manage, requires clear boundaries
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Best for:</strong> Most organizations with varied AI risk profiles
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building Your Team</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hiring Strategy</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Phase 1:</strong> Hire or appoint governance lead</li>
              <li><strong>Phase 2:</strong> Add risk and compliance specialists</li>
              <li><strong>Phase 3:</strong> Bring in ethics and audit capability</li>
              <li><strong>Phase 4:</strong> Scale with business unit champions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Build vs. Buy Talent</h3>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-3"><strong>Build (Upskill Existing):</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Risk managers learning AI</li>
                <li>Data scientists learning governance</li>
                <li>Compliance teams adding AI expertise</li>
              </ul>
              <p className="text-gray-700 mb-3"><strong>Buy (External Hiring):</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>AI governance specialists from tech companies</li>
                <li>Consultants for framework setup</li>
                <li>Industry experts for specialized needs</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Budget Allocation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Typical governance team costs:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Small org (50-500 people):</strong> 1-2 FTE, $200K-400K annually</li>
              <li><strong>Medium org (500-2000):</strong> 3-5 FTE, $500K-1M annually</li>
              <li><strong>Large org (2000+):</strong> 10-20 FTE, $2M-5M annually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Plus tools, training, and consulting. Budget 5-10% of total AI investment for governance.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Success Factors</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Executive sponsorship:</strong> C-suite backing essential</li>
              <li><strong>Clear charter:</strong> Authority and responsibilities documented</li>
              <li><strong>Cross-functional collaboration:</strong> Work with, not against teams</li>
              <li><strong>Right-sized for stage:</strong> Don't overbuild governance early</li>
              <li><strong>Continuous development:</strong> Invest in team growth</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Building an AI governance team is an investment in responsible, scalable AI deployment. The right team structure and talent enable innovation while managing risk. Start lean, prove value, and scale governance alongside AI adoption.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Build your governance team</h3>
            <p className="text-gray-600 mb-6">
              Get guidance on structuring and staffing your AI governance function.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}