import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageSquare, FileSearch, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Eye,
    title: 'SHAP & LIME Interpretability',
    body:
      'Model explanation frameworks are embedded directly in the UI. Global metrics show which network parameters affect overall security, while local instance metrics point to the exact words or code hooks behind a specific alert.',
  },
  {
    icon: MessageSquare,
    title: 'AI Security Co-pilot',
    body:
      'A natural-language conversational interface lets analysts query live posture, generate custom detection scripts, or ask for plain-English remediation steps — no query language required.',
  },
  {
    icon: FileSearch,
    title: 'Auto-Route Ingestion',
    body:
      'The ingestion pipeline automatically identifies whether an uploaded file holds network traffic records, email headers, or endpoint logs, instantly routing it to the optimal classifier with zero configuration.',
  },
];

export default function XAISection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Badge className="bg-[#FFFFF4] text-[#003DA5] border border-[#003DA5]/20 hover:bg-[#FFFFF4] mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Explainable AI (XAI)
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              No black boxes. Every decision is traceable.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              CyberShield removes the opacity problem of automated AI platforms with total visibility
              into how every agent reaches its conclusion — from a single alert to a board-level report.
            </p>
            <div className="mt-8 rounded-2xl border border-[#003DA5]/20 bg-[#FFFFF4] p-6">
              <div className="text-sm font-semibold text-gray-900 mb-2">Analyst trust, by design</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cryptographic audit trails and explanation records make every autonomous action
                reviewable, defensible, and governance-ready.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 p-6 hover:border-[#003DA5]/40 hover:shadow-md transition-all"
              >
                <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-[#003DA5] to-[#001B4D] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}