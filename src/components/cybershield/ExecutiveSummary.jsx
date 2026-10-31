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
          className="relative rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12"
        >
          <Quote className="absolute top-6 right-8 w-14 h-14 text-purple-100" />
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B2EE5] mb-4">
            Executive Summary
          </div>
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed relative">
            CyberShield is an enterprise-grade, AI-powered cybersecurity framework and threat-defense
            platform designed to autonomously detect, analyze, and mitigate multi-layer cyberattacks
            while continuously enforcing global compliance. By combining an advanced multi-agent AI
            architecture with graph-native attack-path analytics and explainable machine learning,
            CyberShield bridges the gap between raw technical security signals and executive
            governance — transforming security operations centers from reactive monitoring units into
            proactive, autonomous defense ecosystems.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 rounded-xl bg-white border border-gray-200 px-4 py-3">
                <Icon className="w-4 h-4 text-[#8B2EE5] shrink-0" />
                <span className="text-sm font-medium text-gray-800 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}