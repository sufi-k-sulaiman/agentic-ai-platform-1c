import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAISecurityGovernance() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Security Governance for Agentic AI: Protecting Autonomous Systems"
        description="Comprehensive security governance framework for autonomous AI agents. Threat models, controls, and incident response strategies."
        url="/blog/ai-security-governance"
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
              Security Governance for Agentic AI: Protecting Autonomous Systems
            </h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>James Liu, CISO</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Dec 13, 2024</span>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1555949963-aa6865609028?w=1200&h=600&fit=crop"
              alt="Security"
              className="w-full h-[400px] object-cover rounded-2xl mb-12"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Autonomous AI agents present unique security challenges. They process sensitive data, make consequential decisions, and operate continuously with limited human oversight. Security governance for agentic AI requires new frameworks beyond traditional application security.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Unique Security Threats</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prompt Injection Attacks</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Malicious inputs that hijack agent behavior:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Direct injection:</strong> Overriding system instructions</li>
              <li><strong>Indirect injection:</strong> Poisoning data sources agents access</li>
              <li><strong>Jailbreaking:</strong> Bypassing safety guardrails</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Mitigations:</strong> Input validation, output filtering, privilege separation, prompt engineering defenses
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Exfiltration</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Agents tricked into leaking sensitive information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Social engineering of AI</li>
              <li>Extracting training data</li>
              <li>Revealing system internals</li>
              <li>Bypassing access controls</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Mitigations:</strong> Data loss prevention, output monitoring, access logging, sensitive data masking
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Model Poisoning</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Compromising training data or fine-tuning:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Injecting backdoors during training</li>
              <li>Biasing model behavior</li>
              <li>Degrading performance</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Mitigations:</strong> Training data validation, model testing, provenance tracking, trusted data sources
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Governance Framework</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Secure by Design</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Security requirements from inception</li>
              <li>Threat modeling before development</li>
              <li>Secure coding practices</li>
              <li>Regular security reviews</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Defense in Depth</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Multiple layers of security controls:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Network layer:</strong> Firewalls, segmentation</li>
              <li><strong>Application layer:</strong> Input validation, output filtering</li>
              <li><strong>Data layer:</strong> Encryption, access controls</li>
              <li><strong>Monitoring layer:</strong> Detection and response</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Least Privilege</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Agents get minimum necessary permissions</li>
              <li>Time-bound access grants</li>
              <li>Regular permission reviews</li>
              <li>Revoke unused permissions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Zero Trust Architecture</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Verify every request</li>
              <li>Never trust, always verify</li>
              <li>Continuous authentication</li>
              <li>Microsegmentation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Controls</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Preventive Controls</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Authentication:</strong> Multi-factor for human access</li>
              <li><strong>Authorization:</strong> RBAC for agent permissions</li>
              <li><strong>Encryption:</strong> All data at rest and in transit</li>
              <li><strong>Input validation:</strong> Sanitize all inputs</li>
              <li><strong>Secure APIs:</strong> Rate limiting, API keys</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Detective Controls</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>SIEM integration:</strong> Centralized logging</li>
              <li><strong>Anomaly detection:</strong> Behavioral analysis</li>
              <li><strong>Vulnerability scanning:</strong> Regular assessments</li>
              <li><strong>Penetration testing:</strong> Quarterly red team exercises</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Responsive Controls</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Incident response plan:</strong> Clear procedures</li>
              <li><strong>Kill switches:</strong> Emergency shutdowns</li>
              <li><strong>Backup and recovery:</strong> Quick restoration</li>
              <li><strong>Communication protocols:</strong> Stakeholder notification</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Vendor Security</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Security assessments:</strong> Evaluate vendor practices</li>
              <li><strong>Contractual requirements:</strong> Security SLAs and obligations</li>
              <li><strong>Certifications:</strong> SOC 2, ISO 27001, FedRAMP</li>
              <li><strong>Right to audit:</strong> Verify vendor security</li>
              <li><strong>Incident notification:</strong> Timely breach disclosure</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Metrics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Track and report:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Vulnerabilities detected and remediated</li>
              <li>Security incidents and time to resolution</li>
              <li>Penetration test results</li>
              <li>Compliance with security policies</li>
              <li>Mean time to detect (MTTD) and respond (MTTR)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Security governance for agentic AI requires vigilance, investment, and expertise. But it's non-negotiable. A single security failure can destroy trust, trigger regulatory action, and cause massive financial damage. Strong security governance enables confident AI deployment.
            </p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure your AI systems</h3>
            <p className="text-gray-600 mb-6">
              Implement enterprise-grade security governance for autonomous agents.
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