import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShieldCheck, Brain, GitBranch, ScrollText } from 'lucide-react';

const LOGO = 'https://media.base44.com/images/public/693e529a64adb72abf9804a1/22a6662d2_CyberShield_logo.svg';

const stats = [
  { icon: Brain, value: '6', label: 'Specialized defense agents' },
  { icon: GitBranch, value: 'Graph-native', label: 'Attack-path analytics' },
  { icon: ScrollText, value: '4', label: 'Frameworks auto-mapped' },
  { icon: ShieldCheck, value: '24/7', label: 'Autonomous SOC coverage' },
];

export default function CyberShieldHero() {
  return (
    <section className="relative overflow-hidden bg-black text-[#FFFFF4]">
      <div className="h-1.5 w-full bg-[#FFB605]" />

      {/* Ambient brand light */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-[#003DA5]/50 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-[360px] w-[360px] rounded-full bg-[#FFB605]/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#FFFFF4 1px, transparent 1px), linear-gradient(90deg, #FFFFF4 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded bg-[#FFFFF4] px-2.5 py-2">
                <img src={LOGO} alt="CyberShield" className="h-7 w-auto" />
              </span>
              <Badge className="bg-[#003DA5] text-[#FFFFF4] border border-[#003DA5] hover:bg-[#003DA5]">
                Next-Generation Threat Defense
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              CyberShield
              <span className="block bg-gradient-to-r from-[#FFB605] via-[#FFCE55] to-[#FFFFF4] bg-clip-text text-transparent">
                AI-Driven Cybersecurity Framework
              </span>
            </h1>

            <p className="mt-6 text-lg text-[#FFFFF4]/70 max-w-2xl leading-relaxed">
              An enterprise-grade, multi-agent threat-defense platform that autonomously detects,
              analyzes, and mitigates multi-layer cyberattacks while continuously enforcing global
              compliance. Turning reactive SOCs into proactive, autonomous defense ecosystems.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-[#FFB605] hover:bg-[#E6A200] text-black font-semibold">
                <Link to="/Contact">
                  Book a Security Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#003DA5] text-[#FFFFF4] bg-[#003DA5]/25 hover:bg-[#003DA5]/50 hover:text-[#FFFFF4]"
              >
                <Link to="/AgenticAI">Explore the Agentic AI Platform</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="border-t border-[#FFFFF4]/20 pt-3">
                  <Icon className="w-5 h-5 text-[#FFB605] mb-2" />
                  <div className="text-xl font-bold">{value}</div>
                  <div className="text-xs text-[#FFFFF4]/60 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-[#003DA5]/60 bg-[#003DA5]/20 backdrop-blur p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-[#FFFFF4]/80">
                  Agent Mesh — Live Consensus
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#FFB605]">
                  <span className="h-2 w-2 rounded-full bg-[#FFB605] animate-pulse" />
                  Active
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Threat Detection', status: 'Scanning perimeter telemetry', pct: 96, tone: 'bg-[#FFB605]' },
                  { name: 'Threat Intelligence', status: 'Enriching 1,284 IOCs', pct: 82, tone: 'bg-[#4C8DE6]' },
                  { name: 'Malware Analysis', status: 'Sandbox execution safe', pct: 74, tone: 'bg-[#FFFFF4]' },
                  { name: 'Incident Response', status: 'Playbook staged for approval', pct: 68, tone: 'bg-[#FFB605]' },
                  { name: 'Compliance', status: 'ISO 27001 audit trail sealed', pct: 91, tone: 'bg-[#8FB8F0]' },
                ].map((agent) => (
                  <div key={agent.name} className="rounded-lg bg-black/40 border border-[#FFFFF4]/10 p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[#FFFFF4]">{agent.name}</span>
                      <span className="text-xs text-[#FFFFF4]/60">{agent.pct}%</span>
                    </div>
                    <div className="mt-1 text-xs text-[#FFFFF4]/50">{agent.status}</div>
                    <div className="mt-2 h-1.5 rounded-full bg-[#FFFFF4]/10 overflow-hidden">
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