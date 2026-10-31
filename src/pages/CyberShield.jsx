import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Lock, Gauge, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';
import FAQSection from '@/components/seo/FAQSection';
import RelatedContent from '@/components/seo/RelatedContent';
import CyberShieldHero from '@/components/cybershield/CyberShieldHero';
import ExecutiveSummary from '@/components/cybershield/ExecutiveSummary';
import AgentOrchestration from '@/components/cybershield/AgentOrchestration';
import ThreatModules from '@/components/cybershield/ThreatModules';
import ComplianceGraph from '@/components/cybershield/ComplianceGraph';
import XAISection from '@/components/cybershield/XAISection';

const faqs = [
  {
    question: 'What is CyberShield?',
    answer:
      'CyberShield is an enterprise-grade, AI-powered cybersecurity framework and threat-defense platform. It autonomously detects, analyzes, and mitigates multi-layer cyberattacks while continuously enforcing global compliance across NIST, ISO/IEC 27001, SOC 2, and GDPR.',
  },
  {
    question: 'How does the multi-agent AI architecture work?',
    answer:
      'Six specialized agents — Threat Detection, Threat Intelligence, Malware Analysis, Incident Response, Compliance, and Reporting — communicate over a secure shared context bus to negotiate evidence, calculate risk, and execute remediation workflows in real time.',
  },
  {
    question: 'Does CyberShield rely on signature-based detection?',
    answer:
      'No. CyberShield uses high-precision machine learning models optimized for each threat vector — network intrusion, phishing and social engineering, and insider threat — so it detects zero-day and polymorphic attacks that bypass traditional signatures.',
  },
  {
    question: 'How does CyberShield support compliance audits?',
    answer:
      'Every vulnerability discovered or attack blocked is automatically cross-referenced against NIST, ISO/IEC 27001, SOC 2, and GDPR controls. Cryptographic audit trails and explainability records turn security logs into continuous audit readiness.',
  },
  {
    question: 'What makes CyberShield explainable?',
    answer:
      'SHAP and LIME interpretability are embedded in the UI. Global metrics show which network parameters affect overall security, while local instance metrics pinpoint the exact words or code hooks that triggered an alert.',
  },
  {
    question: 'Can analysts interact with CyberShield in natural language?',
    answer:
      'Yes. The AI Security Co-pilot lets analysts query active posture, generate custom detection scripts, and request plain-English remediation steps — while human-in-the-loop approval gates protect critical infrastructure changes.',
  },
];

const capabilities = [
  { icon: Workflow, title: 'Autonomous orchestration', body: 'Agents negotiate evidence and coordinate remediation without analyst swivel-chairing.' },
  { icon: Gauge, title: 'Real-time risk scoring', body: 'Severity, exploitability, and blast radius calculated at machine speed.' },
  { icon: Lock, title: 'Human-in-the-loop control', body: 'Critical containment actions pause for explicit approval.' },
  { icon: ShieldCheck, title: 'Continuous audit readiness', body: 'Every decision sealed with a cryptographic, framework-mapped trail.' },
];

export default function CyberShield() {
  return (
    <InternalLinker currentPage="CyberShield">
      <div className="bg-white">
        <PageMeta
          title="CyberShield — AI-Driven Cybersecurity & Threat Defense Platform"
          description="CyberShield is an enterprise-grade, AI-powered cybersecurity framework with multi-agent orchestration, graph-native attack-path analytics, explainable AI, and continuous compliance mapping."
          url="/CyberShield"
          keywords={['CyberShield', 'AI cybersecurity', 'threat defense platform', 'multi-agent AI security', 'SOC automation', 'compliance automation', 'explainable AI security']}
          image="https://images.unsplash.com/photo-1563206157-b3e1599f7397?w=1200&h=630&fit=crop"
          service={{ type: 'AI Cybersecurity Platform', areaServed: 'Worldwide' }}
          faq={faqs}
          webPage={{ lastReviewed: '2026-10-31' }}
        />

        <BreadcrumbNav items={[{ label: 'CyberShield' }]} />

        <CyberShieldHero />
        <ExecutiveSummary />
        <AgentOrchestration />
        <ThreatModules />
        <ComplianceGraph />
        <XAISection />

        {/* Outcome strip */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Built for security operations that never sleep
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl bg-white border border-gray-200 p-6">
                  <Icon className="w-5 h-5 text-[#8B2EE5] mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-[#0B1020] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Move your SOC from reactive monitoring to autonomous defense
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              See how CyberShield agents detect, enrich, contain, and document a live multi-stage
              attack — end to end, in a guided walkthrough.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">
                <Link to="/Contact">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link to="/Cyber">Explore Trust &amp; Compliance</Link>
              </Button>
            </div>
          </div>
        </section>

        <FAQSection
          title="CyberShield — Frequently Asked Questions"
          subtitle="Answers for security leaders evaluating autonomous threat defense."
          faqs={faqs}
        />

        <RelatedContent
          currentPage="CyberShield"
          category="product"
          crossCategories={['resources']}
          title="Explore Related Solutions"
        />
      </div>
    </InternalLinker>
  );
}