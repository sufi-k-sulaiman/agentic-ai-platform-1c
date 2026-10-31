import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturePanel({ feature }) {
  return (
    <div className="rounded-2xl border border-[#003DA5]/15 bg-white p-6 lg:p-8 transition-colors hover:border-[#003DA5]/40">
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="text-[11px] font-black tracking-[0.14em] text-[#003DA5]">
          {feature.code}
        </span>
        <h3 className="text-lg font-bold leading-snug text-[#001B4D]">{feature.name}</h3>
      </div>

      <div className="mt-4 rounded-xl border border-[#003DA5]/10 bg-[#FFFFF4] p-5">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] mb-2 text-[#003DA5]">
          What it is
        </div>
        <p className="text-sm leading-relaxed text-[#001B4D]/70">{feature.what}</p>
      </div>

      <div className="mt-6 pt-6 border-t border-[#003DA5]/10">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] mb-3 text-[#003DA5]">
          How it resolves &amp; mitigates
        </div>
        <ul className="space-y-4">
          {feature.mitigations.map((m) => (
            <li key={m.title} className="flex gap-3">
              <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-[#003DA5]" />
              <div>
                <div className="text-sm font-semibold leading-snug text-[#001B4D]">{m.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-[#001B4D]/65">{m.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}