import React from 'react';

const tones = {
  blue: {
    section: 'bg-[#003DA5] text-[#FFFFF4]',
    eyebrow: 'text-[#FFB605]',
    body: 'text-[#FFFFF4]/75',
    numeral: 'text-[#FFFFF4]/10',
  },
  dark: {
    section: 'bg-black text-[#FFFFF4]',
    eyebrow: 'text-[#FFB605]',
    body: 'text-[#FFFFF4]/70',
    numeral: 'text-[#003DA5]/40',
  },
  yellow: {
    section: 'bg-[#FFB605] text-black',
    eyebrow: 'text-black/60',
    body: 'text-black/75',
    numeral: 'text-black/10',
  },
};

export default function ModuleBanner({ moduleNumber, phase, title, body, tone = 'blue' }) {
  const t = tones[tone] || tones.blue;

  return (
    <section className={`relative overflow-hidden ${t.section}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none select-none hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[140px] lg:text-[200px] font-black leading-none ${t.numeral}`}
      >
        {moduleNumber}
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="max-w-3xl">
          <div className={`text-[11px] font-bold uppercase tracking-[0.22em] ${t.eyebrow}`}>
            Module {moduleNumber} · {phase}
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15]">
            {title}
          </h2>
          <p className={`mt-3 text-base lg:text-lg leading-relaxed ${t.body}`}>{body}</p>
        </div>
      </div>
    </section>
  );
}