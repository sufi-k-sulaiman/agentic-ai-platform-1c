import React from 'react';
import { Anchor } from 'lucide-react';
import ModuleBanner from './ModuleBanner';
import IssuesPanel from './IssuesPanel';
import FeaturePanel from './FeaturePanel';
import ModuleDeepDive from './ModuleDeepDive';
import { moduleOne } from './defenseModules';
import { deepDiveOne } from './moduleDeepDives';

export default function DefenseModulePerimeter() {
  const m = moduleOne;

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
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5">
              <IssuesPanel heading={m.issuesHeading} issues={m.issues} tone="light" />

              <div className="mt-6 rounded-2xl border border-[#003DA5]/10 bg-[#FFFFF4] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Anchor className="w-4 h-4 text-[#003DA5]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#003DA5]">
                    Why the perimeter comes first
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Reconnaissance and initial access are cheap for the attacker and expensive for the
                  defender. Break the chain here and nothing downstream ever gets the chance to
                  execute.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {m.features.map((f) => (
                <FeaturePanel key={f.code} feature={f} tone="light" />
              ))}
            </div>
          </div>

          <ModuleDeepDive deepDive={deepDiveOne} tone="cream" />
        </div>
      </section>
    </>
  );
}