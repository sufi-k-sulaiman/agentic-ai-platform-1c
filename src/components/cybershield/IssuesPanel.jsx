import React from 'react';
import { AlertTriangle } from 'lucide-react';

const tones = {
  light: {
    card: 'bg-white border-gray-200',
    icon: 'text-[#003DA5]',
    heading: 'text-gray-900',
    label: 'text-gray-900',
    body: 'text-gray-600',
    num: 'bg-[#003DA5] text-[#FFFFF4]',
  },
  cream: {
    card: 'bg-white border-[#003DA5]/15',
    icon: 'text-[#003DA5]',
    heading: 'text-[#003DA5]',
    label: 'text-gray-900',
    body: 'text-gray-600',
    num: 'bg-[#003DA5] text-[#FFFFF4]',
  },
  dark: {
    card: 'bg-[#FFFFF4]/[0.04] border-[#FFFFF4]/10',
    icon: 'text-[#FFB605]',
    heading: 'text-[#FFB605]',
    label: 'text-[#FFFFF4]',
    body: 'text-[#FFFFF4]/60',
    num: 'bg-[#FFB605] text-black',
  },
};

export default function IssuesPanel({ heading = 'The issues addressed', issues = [], tone = 'light' }) {
  const t = tones[tone] || tones.light;

  return (
    <div className={`rounded-2xl border p-6 ${t.card}`}>
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className={`w-4 h-4 shrink-0 ${t.icon}`} />
        <span className={`text-[11px] font-bold uppercase tracking-[0.18em] ${t.heading}`}>
          {heading}
        </span>
      </div>

      <ul className="space-y-4">
        {issues.map((issue, i) => (
          <li key={issue.label} className="flex gap-3">
            <span
              className={`mt-0.5 h-6 w-6 shrink-0 rounded-md text-[11px] font-bold flex items-center justify-center ${t.num}`}
            >
              {i + 1}
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