import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Radar, Globe2, Bug, Siren, ScrollText, FileText, Workflow, ArrowRight,
} from 'lucide-react';

const agents = [
  {
    icon: Radar,
    name: 'Threat Detection Agent',
    role: 'First line of defense, continuously monitoring perimeter inputs and incoming telemetry.',
    capabilities:
      'Analyzes suspicious emails, phishing attempts, malicious URLs, and file attachments using localized ML classifiers that parse text and packet data.',
    outputs: ['Threat indicators', 'Initial severity score', 'Investigation trigger'],
  },
  {
    icon: Globe2,
    name: 'Threat Intelligence Agent',
    role: 'Enriches active alerts with global threat context to prevent false positives.',
    capabilities:
      'Queries external threat intelligence feeds, IOC databases, and global domain/IP reputation services to validate initial detections and identify known actors.',
    outputs: ['Reputation score', 'Intel summary', 'Attack associations'],
  },
  {
    icon: Bug,
    name: 'Malware Analysis Agent',
    role: 'Performs deep behavioral and structural inspection of suspected payloads.',
    capabilities:
      'Inspects suspicious files inside an autonomous, isolated sandbox, surfacing ransomware indicators, malicious code patterns, and behavioral execution risk.',
    outputs: ['Malware class', 'Behavior report', 'Risk assessment'],
  },
  {
    icon: Siren,
    name: 'Incident Response Agent',
    role: 'Formulates immediate mitigation and containment to minimize blast radius.',
    capabilities:
      'Develops tailored playbooks, orchestrates automated infrastructure shifts such as isolating a compromised VLAN, and enforces human-in-the-loop gates for critical changes.',
    outputs: ['Recommendations', 'Handling plan', 'Containment steps'],
  },
  {
    icon: ScrollText,
    name: 'Compliance Agent',
    role: 'Translates technical threats into business compliance risk and regulatory alignment.',
    capabilities:
      'Maps findings and system posture to ISO 27001, NIST, GDPR, and SOC 2 — generating cryptographic audit trails and explainability records.',
    outputs: ['Compliance report', 'Audit trail', 'Governance notes'],
  },
  {
    icon: FileText,
    name: 'Reporting Agent',
    role: 'Translates technical logs into accessible intelligence for every stakeholder.',
    capabilities:
      'Consolidates telemetry, decisions, and outcomes from all other agents into formal, human-readable forensic documentation and executive overviews.',
    outputs: ['Executive report', 'Technical report', 'Incident documentation'],
  },
];

export default function AgentOrchestration() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Badge className="bg-purple-50 text-[#8B2EE5] border border-purple-100 hover:bg-purple-50 mb-4">
            <Workflow className="w-3.5 h-3.5 mr-1.5" />
            Multi-Agent AI Orchestration Core
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Specialized agents that negotiate evidence in real time
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Rather than operating in isolated silos, CyberShield agents communicate over a secure
            shared context bus to negotiate evidence, calculate risk, and execute remediation
            workflows — no manual swivel-chairing between tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#8B2EE5]/40 hover:shadow-xl hover:shadow-purple-100/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-[#8B2EE5] to-[#5B21B6] flex items-center justify-center">
                  <agent.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 leading-snug">{agent.name}</h3>
              </div>

              <p className="text-sm font-medium text-gray-900 mb-2">{agent.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">{agent.capabilities}</p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Outputs
                </div>
                <ul className="space-y-1.5">
                  {agent.outputs.map((out) => (
                    <li key={out} className="flex items-center gap-2 text-sm text-gray-700">
                      <ArrowRight className="w-3.5 h-3.5 text-[#8B2EE5] shrink-0" />
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}