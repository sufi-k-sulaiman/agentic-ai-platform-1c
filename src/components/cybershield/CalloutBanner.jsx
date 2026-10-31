import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tones = {
  yellow: {
    section: 'bg-[#FFB605] text-black',
    eyebrow: 'text-black/60',
    body: 'text-black/75',
    rule: 'bg-black/20',
    value: 'text-black',
    label: 'text-black/70',
    button: 'bg-black text-[#FFFFF4] hover:bg-black/90',
    ghost: 'border-black/25 text-black hover:bg-black/10 hover:text-black',
    glyph: 'text-black/10',
    statBorder: 'border-black/20',
  },
  blue: {
    section: 'bg-[#003DA5] text-[#FFFFF4]',
    eyebrow: 'text-[#FFB605]',
    body: 'text-[#FFFFF4]/75',
    rule: 'bg-[#FFFFF4]/20',
    value: 'text-[#FFB605]',
    label: 'text-[#FFFFF4]/70',
    button: 'bg-[#FFB605] text-black hover:bg-[#E6A200]',
    ghost: 'border-[#FFFFF4]/30 text-[#FFFFF4] bg-transparent hover:bg-[#FFFFF4]/10 hover:text-[#FFFFF4]',
    glyph: 'text-[#FFFFF4]/10',
    statBorder: 'border-[#FFB605]/60',
  },
  dark: {
    section: 'bg-black text-[#FFFFF4]',
    eyebrow: 'text-[#FFB605]',
    body: 'text-[#FFFFF4]/70',
    rule: 'bg-[#003DA5]',
    value: 'text-[#FFB605]',
    label: 'text-[#FFFFF4]/60',
    button: 'bg-[#FFB605] text-black hover:bg-[#E6A200]',
    ghost: 'border-[#003DA5] text-[#FFFFF4] bg-transparent hover:bg-[#003DA5]/30 hover:text-[#FFFFF4]',
    glyph: 'text-[#003DA5]/40',
    statBorder: 'border-[#003DA5]',
  },
};

export default function CalloutBanner({
  tone = 'blue',
  eyebrow,
  title,
  body,
  stats = [],
  cta,
  secondaryCta,
}) {
  const t = tones[tone] || tones.blue;

  return (
    <section className={`relative overflow-hidden ${t.section}`}>
      <div className="pointer-events-none absolute inset-0">
        <ShieldCheck
          className={`absolute -right-16 -top-16 w-72 h-72 ${t.glyph}`}
          strokeWidth={1}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className={stats.length ? 'lg:col-span-7' : 'lg:col-span-12'}>
            {eyebrow && (
              <div className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-3 ${t.eyebrow}`}>
                {eyebrow}
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15]">
              {title}
            </h2>
            {body && (
              <p className={`mt-3 text-base lg:text-lg leading-relaxed max-w-3xl ${t.body}`}>
                {body}
              </p>
            )}

            {(cta || secondaryCta) && (
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                {cta && (
                  <Button asChild size="lg" className={t.button}>
                    <Link to={cta.to}>
                      {cta.label}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild size="lg" variant="outline" className={t.ghost}>
                    <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>

          {stats.length > 0 && (
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {stats.map((s) => (
                  <div key={s.label} className={`border-l-2 pl-4 ${t.statBorder}`}>
                    <div className={`text-3xl lg:text-4xl font-bold tracking-tight ${t.value}`}>
                      {s.value}
                    </div>
                    <div className={`mt-1 text-xs leading-snug ${t.label}`}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className={`mt-6 h-px w-full ${t.rule}`} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}