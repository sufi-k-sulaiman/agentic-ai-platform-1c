import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, GitBranch, TrendingUp, CheckCircle2 } from 'lucide-react';

const frameworks = ['NIST', 'ISO/IEC 27001', 'SOC 2', 'GDPR'];

const blocks = [
  {
    icon: ScrollText,
    title: 'Automated Framework Alignment',
    body:
      'Every vulnerability discovered or attack blocked is instantly cross-referenced against NIST, ISO/IEC 27001, SOC 2, and GDPR controls — turning raw security logs into continuous audit readiness.',
  },
  {
    icon: GitBranch,
    title: 'Graph-Native Attack-Path Analytics',
    body:
      'Built on a native graph database, CyberShield charts complex, multi-stage attack paths so teams can trace exactly how an attacker moves laterally from a minor vulnerability to a regulated data asset.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Risk Forecasting',
    body:
      'Threat probabilities and exploitability windows are calculated against your live architecture, letting teams patch security gaps before they are ever targeted.',
  },
];

export default function ComplianceGraph() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#003DA5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-4 text-[#003DA5]">
            <ScrollText className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
              Compliance Mapping &amp; Graph Analytics
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001B4D] tracking-tight">
            Your defensive posture, matched to your obligations
          </h2>
          <p className="mt-4 text-lg text-[#001B4D]/70 leading-relaxed">
            CyberShield closes the gap between technical security signals and executive governance —
            without manual cross-referencing between frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-[#003DA5]/15 p-6 hover:border-[#003DA5]/40 transition-colors"
            >
              <b.icon className="w-7 h-7 text-[#003DA5] mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-[#001B4D] mb-2">{b.title}</h3>
              <p className="text-sm text-[#001B4D]/65 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#003DA5]/15 bg-[#FFFFF4] p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-[#001B4D]">Continuously mapped to:</span>
            {frameworks.map((f) => (
              <span key={f} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#003DA5]/20 px-3 py-1 text-sm font-medium text-[#003DA5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFB605]" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}