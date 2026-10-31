import React from 'react';
import { motion } from 'framer-motion';
import { Network, Mail, Users, Layers } from 'lucide-react';

const modules = [
  {
    icon: Network,
    title: 'Network Intrusion Detection (NIDS)',
    body:
      'Multi-variable machine learning models trained on modern network flow statistics evaluate live packet parameters — TTL, load, packet duration, and connection state — to instantly classify traffic as safe or an active intrusion.',
    tag: 'Live packet telemetry',
  },
  {
    icon: Mail,
    title: 'Phishing & Social Engineering Defense',
    body:
      'NLP models combine semantic vectorization with advanced classifiers to scan email bodies and headers for semantic impersonation patterns, synthetic text, and fraudulent lookalike domains.',
    tag: 'NLP + vector search',
  },
  {
    icon: Users,
    title: 'Insider Threat & Behavioral Analytics',
    body:
      'Gradient-boosting architectures baseline normal employee activity, parsing access logs, file modification rates, and peripheral device connections to instantly flag privilege abuse or exfiltration attempts.',
    tag: 'Behavioral baselining',
  },
];

export default function ThreatModules() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#003DA5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4 text-[#003DA5]">
              <Layers className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
                Multi-Layer Attack Modules
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#001B4D]">
              Threat-vector specific models, not signatures
            </h2>
            <p className="mt-4 text-lg text-[#001B4D]/70 leading-relaxed">
              CyberShield deploys high-precision machine learning models optimized for each attack
              surface, eliminating reliance on easily bypassed, signature-based detection.
            </p>

            <div className="mt-8 rounded-2xl border border-[#003DA5]/15 bg-[#FFFFF4] p-6">
              <div className="text-sm font-semibold text-[#003DA5] mb-1.5">Why models beat signatures</div>
              <p className="text-sm text-[#001B4D]/65 leading-relaxed">
                Signatures fail against polymorphic and zero-day attacks. Continuous models reason
                over behavior, context, and intent — catching what has never been seen before.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {modules.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-[#003DA5]/15 bg-white p-6 hover:border-[#003DA5]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <m.icon className="w-6 h-6 shrink-0 text-[#003DA5] mt-1" strokeWidth={1.5} />
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-[#001B4D]">{m.title}</h3>
                      <span className="text-[11px] uppercase tracking-wider text-[#003DA5] border-b border-[#FFB605] pb-0.5">
                        {m.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[#001B4D]/65 leading-relaxed">{m.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}