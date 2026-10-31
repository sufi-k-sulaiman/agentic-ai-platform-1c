import React from 'react';

const tones = {
  cream: {
    card: 'bg-[#FFFFF4] border-[#003DA5]/10',
    eyebrow: 'text-[#003DA5]',
    title: 'text-gray-900',
    lead: 'text-gray-700',
    heading: 'text-gray-900',
    body: 'text-gray-600',
    num: 'text-[#003DA5]/25',
    divider: 'border-[#003DA5]/10',
    quote: 'border-[#FFB605] text-gray-900',
  },
  white: {
    card: 'bg-white border-[#003DA5]/15',
    eyebrow: 'text-[#003DA5]',
    title: 'text-gray-900',
    lead: 'text-gray-700',
    heading: 'text-gray-900',
    body: 'text-gray-600',
    num: 'text-[#003DA5]/25',
    divider: 'border-[#003DA5]/10',
    quote: 'border-[#FFB605] text-gray-900',
  },
  dark: {
    card: 'bg-[#FFFFF4]/[0.03] border-[#FFFFF4]/10',
    eyebrow: 'text-[#FFB605]',
    title: 'text-[#FFFFF4]',
    lead: 'text-[#FFFFF4]/70',
    heading: 'text-[#FFFFF4]',
    body: 'text-[#FFFFF4]/60',
    num: 'text-[#FFB605]/40',
    divider: 'border-[#FFFFF4]/10',
    quote: 'border-[#FFB605] text-[#FFFFF4]',
  },
};

export default function ModuleDeepDive({ deepDive, tone = 'cream' }) {
  const t = tones[tone] || tones.cream;

  return (
    <div className={`mt-12 lg:mt-16 rounded-3xl border p-6 lg:p-10 ${t.card}`}>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <div className={`text-[11px] font-bold uppercase tracking-[0.22em] ${t.eyebrow}`}>
            {deepDive.eyebrow}
          </div>
          <h3 className={`mt-3 text-2xl font-bold tracking-tight leading-[1.2] ${t.title}`}>
            {deepDive.title}
          </h3>
          <p className={`mt-4 text-base leading-relaxed ${t.lead}`}>{deepDive.lead}</p>

          <blockquote
            className={`mt-6 border-l-2 pl-4 text-base font-semibold leading-snug ${t.quote}`}
          >
            {deepDive.quote}
          </blockquote>
        </div>

        <div className="lg:col-span-8 space-y-8">
          {deepDive.sections.map((section, i) => (
            <div key={section.heading}>
              <div className="flex items-baseline gap-3">
                <span className={`text-sm font-black tracking-tight ${t.num}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className={`text-lg font-bold leading-snug ${t.heading}`}>{section.heading}</h4>
              </div>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className={`text-sm lg:text-[15px] leading-relaxed ${t.body}`}>
                    {p}
                  </p>
                ))}
              </div>
              {i < deepDive.sections.length - 1 && (
                <div className={`mt-8 border-t ${t.divider}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}