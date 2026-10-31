import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tones = {
  cream: {
    section: 'bg-[#FFFFF4] border-y border-[#003DA5]/10',
    eyebrow: 'text-[#003DA5]',
    title: 'text-[#001B4D]',
    body: 'text-[#001B4D]/70',
    rule: 'bg-[#003DA5]/10',
    value: 'text-[#003DA5]',
    label: 'text-[#001B4D]/60',
    button: 'bg-[#003DA5] text-[#FFFFF4] hover:bg-[#001B4D]',
    ghost: 'border-[#003DA5]/25 text-[#003DA5] bg-transparent hover:bg-white hover:text-[#003DA5]',
    glyph: 'text-[#003DA5]/10',
    statBorder: 'border-[#FFB605]',
  },
  white: {
    section: 'bg-white border-y border-[#003DA5]/10',
    eyebrow: 'text-[#003DA5]',
    title: 'text-[#001B4D]',
    body: 'text-[#001B4D]/70',
    rule: 'bg-[#003DA5]/10',
    value: 'text-[#003DA5]',
    label: 'text-[#001B4D]/60',
    button: 'bg-[#003DA5] text-[#FFFFF4] hover:bg-[#001B4D]',
    ghost: 'border-[#003DA5]/25 text-[#003DA5] bg-transparent hover:bg-[#FFFFF4] hover:text-[#003DA5]',
    glyph: 'text-[#003DA5]/10',
    statBorder: 'border-[#FFB605]',
  },
  blue: {
    section: 'bg-[#003DA5] text-[#FFFFF4]',
    eyebrow: 'text-[#FFB605]',
    title: 'text-[#FFFFF4]',
    body: 'text-[#FFFFF4]/75',
    rule: 'bg-[#FFFFF4]/20',
    value: 'text-[#FFB605]',
    label: 'text-[#FFFFF4]/70',
    button: 'bg-[#FFB605] text-black hover:bg-[#E6A200]',
    ghost: 'border-[#FFFFF4]/30 text-[#FFFFF4] bg-transparent hover:bg-[#FFFFF4]/10 hover:text-[#FFFFF4]',
    glyph: 'text-[#FFFFF4]/10',
    statBorder: 'border-[#FFB605]',
  },
};

export default function CalloutBanner({
  tone = 'cream',
  eyebrow,
  title,
  body,
  stats = [],
  cta,
  secondaryCta,
}) {
  const t = tones[tone] || tones.cream;

  return (
    <section className={`relative overflow-hidden ${t.section}`}>
      <div className="pointer-events-none absolute inset-0">
        <ShieldCheck
          className={`absolute -right-20 -bottom-20 w-80 h-80 ${t.glyph}`}
          strokeWidth={1}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className={stats.length ? 'lg:col-span-7' : 'lg:col-span-12'}>
            {eyebrow && (
              <div className={`text-[11px] font-bold uppercase tracking-[0.22em] mb-4 ${t.eyebrow}`}>
                {eyebrow}
              </div>
            )}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] ${t.title}`}>
              {title}
            </h2>
            {body && (
              <p className={`mt-4 text-base lg:text-lg leading-relaxed max-w-2xl ${t.body}`}>
                {body}
              </p>
            )}

            {(cta || secondaryCta) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                {stats.map((s) => (
                  <div key={s.label} className={`border-l-2 pl-4 ${t.statBorder}`}>
                    <div className={`text-3xl lg:text-4xl font-bold tracking-tight ${t.value}`}>
                      {s.value}
                    </div>
                    <div className={`mt-1.5 text-xs leading-snug ${t.label}`}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className={`mt-8 h-px w-full ${t.rule}`} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}