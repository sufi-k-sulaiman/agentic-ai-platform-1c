import React from 'react';
import { ArrowRight } from 'lucide-react';

const tones = {
  light: {
    card: 'bg-white border-gray-200 hover:border-[#003DA5]/40 hover:shadow-xl hover:shadow-[#003DA5]/10',
    code: 'bg-[#003DA5] text-[#FFFFF4]',
    name: 'text-gray-900',
    label: 'text-gray-400',
    what: 'text-gray-700',
    whatBox: 'bg-[#FFFFF4] border-[#003DA5]/10',
    divider: 'border-gray-100',
    mTitle: 'text-gray-900',
    mBody: 'text-gray-600',
    arrow: 'text-[#FFB605]',
  },
  dark: {
    card: 'bg-[#FFFFF4]/[0.04] border-[#FFFFF4]/10 hover:border-[#FFB605]/40',
    code: 'bg-[#FFB605] text-black',
    name: 'text-[#FFFFF4]',
    label: 'text-[#FFFFF4]/40',
    what: 'text-[#FFFFF4]/70',
    whatBox: 'bg-[#003DA5]/20 border-[#003DA5]/50',
    divider: 'border-[#FFFFF4]/10',
    mTitle: 'text-[#FFFFF4]',
    mBody: 'text-[#FFFFF4]/60',
    arrow: 'text-[#FFB605]',
  },
};

export default function FeaturePanel({ feature, tone = 'light' }) {
  const t = tones[tone] || tones.light;

  return (
    <div className={`rounded-2xl border p-6 lg:p-7 transition-all ${t.card}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`text-[11px] font-black tracking-[0.12em] px-2.5 py-1 rounded-md ${t.code}`}
        >
          {feature.code}
        </span>
        <h3 className={`text-lg font-bold leading-snug ${t.name}`}>{feature.name}</h3>
      </div>

      <div className={`mt-4 rounded-xl border p-4 ${t.whatBox}`}>
        <div className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-1.5 ${t.label}`}>
          What it is
        </div>
        <p className={`text-sm leading-relaxed ${t.what}`}>{feature.what}</p>
      </div>

      <div className={`mt-5 pt-5 border-t ${t.divider}`}>
        <div className={`text-[11px] font-bold uppercase tracking-[0.18em] mb-3 ${t.label}`}>
          How it resolves &amp; mitigates
        </div>
        <ul className="space-y-3.5">
          {feature.mitigations.map((m) => (
            <li key={m.title} className="flex gap-2.5">
              <ArrowRight className={`w-4 h-4 mt-0.5 shrink-0 ${t.arrow}`} />
              <div>
                <div className={`text-sm font-semibold leading-snug ${t.mTitle}`}>{m.title}</div>
                <p className={`mt-1 text-sm leading-relaxed ${t.mBody}`}>{m.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}