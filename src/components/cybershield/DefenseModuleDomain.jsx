import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import ModuleBanner from './ModuleBanner';
import { moduleTwo } from './defenseModules';

export default function DefenseModuleDomain() {
  const m = moduleTwo;

  return (
    <>
      <ModuleBanner
        moduleNumber={m.moduleNumber}
        phase={m.phase}
        title={m.title}
        body={m.body}
        tone="dark"
      />

      <section className="py-16 lg:py-24 bg-[#FFFFF4] border-b border-[#003DA5]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-[#003DA5]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#003DA5]">
              {m.issuesHeading}
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {m.issues.map((issue, i) => (
              <div
                key={issue.label}
                className="rounded-xl border border-[#003DA5]/15 bg-white p-5"
              >
                <span className="text-[11px] font-bold tracking-[0.14em] text-[#003DA5]/60">
                  0{i + 1}
                </span>
                <div className="mt-2 text-sm font-bold text-gray-900 leading-snug">
                  {issue.label}
                </div>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{issue.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {m.features.map((f) => (
              <div
                key={f.code}
                className="rounded-2xl border border-[#003DA5]/15 bg-white p-6 lg:p-8"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
                  <div className="lg:col-span-4">
                    <span className="inline-block text-[11px] font-black tracking-[0.12em] px-2.5 py-1 rounded-md bg-[#003DA5] text-[#FFFFF4]">
                      {f.code}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-gray-900 leading-snug">
                      {f.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.what}</p>
                  </div>

                  <div className="lg:col-span-8 lg:border-l lg:border-[#003DA5]/10 lg:pl-8">
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                      How it resolves &amp; mitigates
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {f.mitigations.map((mit) => (
                        <div
                          key={mit.title}
                          className="rounded-xl border border-[#003DA5]/10 bg-[#FFFFF4] p-4"
                        >
                          <div className="flex gap-2">
                            <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-[#FFB605]" />
                            <span className="text-sm font-semibold text-gray-900 leading-snug">
                              {mit.title}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                            {mit.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}