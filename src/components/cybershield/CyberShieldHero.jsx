import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Brain, GitBranch, ScrollText } from 'lucide-react';

const LOGO = 'https://media.base44.com/images/public/693e529a64adb72abf9804a1/22a6662d2_CyberShield_logo.svg';

const stats = [
  { icon: Brain, value: '6', label: 'Specialized defense agents' },
  { icon: GitBranch, value: 'Graph-native', label: 'Attack-path analytics' },
  { icon: ScrollText, value: '4', label: 'Frameworks auto-mapped' },
  { icon: ShieldCheck, value: '24/7', label: 'Autonomous SOC coverage' },
];

const agents = [
  { name: 'Threat Detection', status: 'Scanning perimeter telemetry', pct: 96, tone: 'bg-[#003DA5]' },
  { name: 'Threat Intelligence', status: 'Enriching 1,284 IOCs', pct: 82, tone: 'bg-[#FFB605]' },
  { name: 'Malware Analysis', status: 'Sandbox execution safe', pct: 74, tone: 'bg-[#003DA5]' },
  { name: 'Incident Response', status: 'Playbook staged for approval', pct: 68, tone: 'bg-[#FFB605]' },
  { name: 'Compliance', status: 'ISO 27001 audit trail sealed', pct: 91, tone: 'bg-[#003DA5]' },
];

export default function CyberShieldHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="h-1.5 w-full bg-[#FFB605]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex flex-wrap items-center gap-4 mb-7">
              <img src={LOGO} alt="CyberShield" className="h-8 w-auto" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#003DA5]">
                Next-Generation Threat Defense
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[#001B4D]">
              CyberShield
              <span className="block text-[#003DA5]">
                AI-Driven Cybersecurity Framework
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#001B4D]/70 max-w-2xl leading-relaxed">
              An enterprise-grade, multi-agent threat-defense platform that autonomously detects,
              analyzes, and mitigates multi-layer cyberattacks while continuously enforcing global
              compliance. Turning reactive SOCs into proactive, autonomous defense ecosystems.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-[#003DA5] hover:bg-[#001B4D] text-[#FFFFF4] font-semibold">
                <Link to="/Contact">
                  Book a Security Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#003DA5]/25 text-[#003DA5] bg-white hover:bg-[#FFFFF4] hover:text-[#003DA5]"
              >
                <Link to="/AgenticAI">Explore the Agentic AI Platform</Link>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="border-t border-[#003DA5]/15 pt-4">
                  <Icon className="w-6 h-6 text-[#003DA5] mb-3" strokeWidth={1.5} />
                  <div className="text-xl font-bold text-[#001B4D]">{value}</div>
                  <div className="text-xs text-[#001B4D]/60 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-[#003DA5]/15 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-[#001B4D]">
                  Agent Mesh — Live Consensus
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-[#003DA5]">
                  <span className="h-2 w-2 rounded-full bg-[#FFB605] animate-pulse" />
                  Active
                </span>
              </div>
              <div className="space-y-3">
                {agents.map((agent) => (
                  <div key={agent.name} className="rounded-xl border border-[#003DA5]/10 p-3.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[#001B4D]">{agent.name}</span>
                      <span className="text-xs text-[#001B4D]/50">{agent.pct}%</span>
                    </div>
                    <div className="mt-1 text-xs text-[#001B4D]/50">{agent.status}</div>
                    <div className="mt-2 h-1.5 rounded-full bg-[#003DA5]/10 overflow-hidden">
                      <div className={`h-full rounded-full ${agent.tone}`} style={{ width: `${agent.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}