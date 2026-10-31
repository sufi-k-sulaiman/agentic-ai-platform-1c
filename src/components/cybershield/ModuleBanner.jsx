import React from 'react';

const tones = {
  cream: {
    section: 'bg-[#FFFFF4]',
    rule: 'bg-[#FFB605]',
    eyebrow: 'text-[#003DA5]',
    title: 'text-[#001B4D]',
    body: 'text-[#001B4D]/70',
    numeral: 'text-[#003DA5]/10',
  },
  white: {
    section: 'bg-white border-y border-[#003DA5]/10',
    rule: 'bg-[#003DA5]',
    eyebrow: 'text-[#003DA5]',
    title: 'text-[#001B4D]',
    body: 'text-[#001B4D]/70',
    numeral: 'text-[#003DA5]/10',
  },
  blue: {
    section: 'bg-[#003DA5]',
    rule: 'bg-[#FFB605]',
    eyebrow: 'text-[#FFB605]',
    title: 'text-[#FFFFF4]',
    body: 'text-[#FFFFF4]/70',
    numeral: 'text-[#FFFFF4]/10',
  },
};

export default function ModuleBanner({ moduleNumber, phase, title, body, tone = 'cream' }) {
  const t = tones[tone] || tones.cream;

  return (
    <section className={`relative overflow-hidden ${t.section}`}>
      <div className={`h-1.5 w-full ${t.rule}`} />

      <span
        aria-hidden="true"
        className={`pointer-events-none select-none hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[150px] lg:text-[220px] font-black leading-none ${t.numeral}`}
      >
        {moduleNumber}
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="max-w-3xl">
          <div className={`text-[11px] font-bold uppercase tracking-[0.22em] ${t.eyebrow}`}>
            Module {moduleNumber} · {phase}
          </div>
          <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${t.title}`}>
            {title}
          </h2>
          <p className={`mt-4 text-base lg:text-lg leading-relaxed ${t.body}`}>{body}</p>
        </div>
      </div>
    </section>
  );
}