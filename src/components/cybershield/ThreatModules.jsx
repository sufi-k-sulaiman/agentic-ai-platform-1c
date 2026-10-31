import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
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
    <section className="py-20 lg:py-28 bg-black text-[#FFFFF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Badge className="bg-[#003DA5] text-[#FFFFF4] border border-[#003DA5] hover:bg-[#003DA5] mb-4">
              <Layers className="w-3.5 h-3.5 mr-1.5" />
              Multi-Layer Attack Modules
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Threat-vector specific models, not signatures
            </h2>
            <p className="mt-4 text-lg text-[#FFFFF4]/60 leading-relaxed">
              CyberShield deploys high-precision machine learning models optimized for each attack
              surface, eliminating reliance on easily bypassed, signature-based detection.
            </p>

            <div className="mt-8 rounded-xl border border-[#003DA5]/60 bg-[#003DA5]/20 p-5">
              <div className="text-sm font-semibold text-[#FFB605] mb-1">Why models beat signatures</div>
              <p className="text-sm text-[#FFFFF4]/60 leading-relaxed">
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
                className="group rounded-2xl border border-[#FFFFF4]/10 bg-[#FFFFF4]/[0.03] p-6 hover:border-[#FFB605]/40 hover:bg-[#003DA5]/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-[#003DA5]/30 border border-[#003DA5]/60 flex items-center justify-center">
                    <m.icon className="w-5 h-5 text-[#FFB605]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h3 className="font-bold text-[#FFFFF4]">{m.title}</h3>
                      <span className="text-[11px] uppercase tracking-wider text-[#FFB605] bg-[#003DA5]/25 border border-[#003DA5]/50 rounded-full px-2 py-0.5">
                        {m.tag}
                      </span>
                    </div>
                    <p className="text-sm text-[#FFFFF4]/60 leading-relaxed">{m.body}</p>
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