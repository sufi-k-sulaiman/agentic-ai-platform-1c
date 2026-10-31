import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ModuleBanner from './ModuleBanner';
import IssuesPanel from './IssuesPanel';
import ModuleDeepDive from './ModuleDeepDive';
import { moduleFour } from './defenseModules';
import { deepDiveFour } from './moduleDeepDives';

export default function DefenseModuleImpact() {
  const m = moduleFour;

  return (
    <>
      <ModuleBanner
        moduleNumber={m.moduleNumber}
        phase={m.phase}
        title={m.title}
        body={m.body}
        tone="cream"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4">
              <IssuesPanel heading={m.issuesHeading} issues={m.issues} tone="cream" />
            </div>

            <div className="lg:col-span-8 space-y-6">
              {m.features.map((f) => (
                <div key={f.code} className="rounded-2xl border border-[#003DA5]/15 bg-white p-6 lg:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-black tracking-[0.14em] text-[#003DA5]">
                      {f.code}
                    </span>
                    <h3 className="text-xl font-bold text-[#001B4D] leading-snug">{f.name}</h3>
                  </div>

                  <p className="mt-3 text-sm text-[#001B4D]/65 leading-relaxed">{f.what}</p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-4">
                    {f.mitigations.map((mit) => (
                      <div
                        key={mit.title}
                        className="rounded-xl border border-[#003DA5]/10 bg-[#FFFFF4] p-4"
                      >
                        <div className="flex gap-2">
                          <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[#003DA5]" />
                          <span className="text-sm font-semibold text-[#001B4D] leading-snug">
                            {mit.title}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm text-[#001B4D]/65 leading-relaxed">{mit.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ModuleDeepDive deepDive={deepDiveFour} tone="cream" />
        </div>
      </section>
    </>
  );
}