import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ModuleBanner from './ModuleBanner';
import IssuesPanel from './IssuesPanel';
import { moduleFour } from './defenseModules';

export default function DefenseModuleImpact() {
  const m = moduleFour;

  return (
    <>
      <ModuleBanner
        moduleNumber={m.moduleNumber}
        phase={m.phase}
        title={m.title}
        body={m.body}
        tone="blue"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-[#001B4D] p-1.5">
                <IssuesPanel heading={m.issuesHeading} issues={m.issues} tone="dark" />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {m.features.map((f) => (
                <div key={f.code} className="rounded-2xl border border-gray-200 p-6 lg:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-black tracking-tight text-[#003DA5]/25">
                      {f.code}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">{f.name}</h3>
                  </div>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{f.what}</p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-4">
                    {f.mitigations.map((mit) => (
                      <div
                        key={mit.title}
                        className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                      >
                        <div className="flex gap-2">
                          <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[#003DA5]" />
                          <span className="text-sm font-semibold text-gray-900 leading-snug">
                            {mit.title}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{mit.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}