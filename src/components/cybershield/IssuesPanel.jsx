import React from 'react';
import { AlertTriangle } from 'lucide-react';

const tones = {
  white: {
    card: 'bg-white border-[#003DA5]/15',
    icon: 'text-[#003DA5]',
    heading: 'text-[#003DA5]',
    label: 'text-[#001B4D]',
    body: 'text-[#001B4D]/65',
  },
  cream: {
    card: 'bg-[#FFFFF4] border-[#003DA5]/10',
    icon: 'text-[#003DA5]',
    heading: 'text-[#003DA5]',
    label: 'text-[#001B4D]',
    body: 'text-[#001B4D]/65',
  },
};

export default function IssuesPanel({ heading = 'The issues addressed', issues = [], tone = 'white' }) {
  const t = tones[tone] || tones.white;

  return (
    <div className={`rounded-2xl border p-6 lg:p-7 ${t.card}`}>
      <div className="flex items-center gap-2 mb-5">
        <AlertTriangle className={`w-5 h-5 shrink-0 ${t.icon}`} strokeWidth={1.5} />
        <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${t.heading}`}>
          {heading}
        </span>
      </div>

      <ul className="space-y-5">
        {issues.map((issue, i) => (
          <li key={issue.label} className="flex gap-3">
            <span className="mt-0.5 text-[11px] font-black tracking-[0.12em] text-[#FFB605] shrink-0">
              0{i + 1}
            </span>
            <div>
              <div className={`text-sm font-semibold leading-snug ${t.label}`}>{issue.label}</div>
              <p className={`mt-1 text-sm leading-relaxed ${t.body}`}>{issue.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}