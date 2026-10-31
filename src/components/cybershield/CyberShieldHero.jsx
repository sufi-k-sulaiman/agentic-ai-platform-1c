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
    <section className="relative overflow-hidden bg-[#0B1020] text-white">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-[#8B2EE5]/25 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO} alt="CyberShield" className="h-11 w-11 rounded-lg bg-white/5 p-1.5" />
              <Badge className="bg-white/10 text-white border border-white/20 hover:bg-white/10">
                Next-Generation Threat Defense
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              CyberShield
              <span className="block bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-cyan-300 bg-clip-text text-transparent">
                AI-Driven Cybersecurity Framework
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed">
              An enterprise-grade, multi-agent threat-defense platform that autonomously detects,
              analyzes, and mitigates multi-layer cyberattacks while continuously enforcing global
              compliance. Turning reactive SOCs into proactive, autonomous defense ecosystems.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">
                <Link to="/Contact">
                  Book a Security Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/25 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link to="/AgenticAI">Explore the Agentic AI Platform</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <Icon className="w-5 h-5 text-[#C084FC] mb-2" />
                  <div className="text-xl font-bold">{value}</div>
                  <div className="text-xs text-gray-400 leading-snug">{label}</div>
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
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-gray-300">Agent Mesh — Live Consensus</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Threat Detection', status: 'Scanning perimeter telemetry', pct: 96, tone: 'bg-[#8B2EE5]' },
                  { name: 'Threat Intelligence', status: 'Enriching 1,284 IOCs', pct: 82, tone: 'bg-cyan-400' },
                  { name: 'Malware Analysis', status: 'Sandbox execution safe', pct: 74, tone: 'bg-emerald-400' },
                  { name: 'Incident Response', status: 'Playbook staged for approval', pct: 68, tone: 'bg-amber-400' },
                  { name: 'Compliance', status: 'ISO 27001 audit trail sealed', pct: 91, tone: 'bg-sky-400' },
                ].map((agent) => (
                  <div key={agent.name} className="rounded-lg bg-black/30 border border-white/5 p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-white">{agent.name}</span>
                      <span className="text-xs text-gray-400">{agent.pct}%</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-400">{agent.status}</div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
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