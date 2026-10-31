import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, GitBranch, Sparkles, Quote } from 'lucide-react';

const highlights = [
  { icon: Cpu, label: 'Multi-Agent AI Architecture' },
  { icon: GitBranch, label: 'Graph-Native Attack Paths' },
  { icon: Sparkles, label: 'Explainable ML Models' },
  { icon: ShieldCheck, label: 'Continuous Global Compliance' },
];

export default function ExecutiveSummary() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-[#003DA5]/15 bg-[#FFFFF4] p-8 lg:p-12"
        >
          <Quote className="absolute top-7 right-9 w-14 h-14 text-[#FFB605]/40" />
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#003DA5] mb-5">
            Executive Summary
          </div>
          <p className="text-lg lg:text-xl text-[#001B4D]/80 leading-relaxed relative">
            CyberShield is an enterprise-grade, AI-powered cybersecurity framework and threat-defense
            platform designed to autonomously detect, analyze, and mitigate multi-layer cyberattacks
            while continuously enforcing global compliance. By combining an advanced multi-agent AI
            architecture with graph-native attack-path analytics and explainable machine learning,
            CyberShield bridges the gap between raw technical security signals and executive
            governance — transforming security operations centers from reactive monitoring units into
            proactive, autonomous defense ecosystems.
          </p>

          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="w-5 h-5 text-[#003DA5] shrink-0" strokeWidth={1.5} />
                <span className="text-sm font-medium text-[#001B4D] leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}