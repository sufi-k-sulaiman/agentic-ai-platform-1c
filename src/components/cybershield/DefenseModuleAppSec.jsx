import React from 'react';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, FileCheck2 } from 'lucide-react';
import ModuleBanner from './ModuleBanner';
import FeaturePanel from './FeaturePanel';
import ModuleDeepDive from './ModuleDeepDive';
import { moduleThree } from './defenseModules';
import { deepDiveThree } from './moduleDeepDives';

export default function DefenseModuleAppSec() {
  const m = moduleThree;

  return (
    <>
      <ModuleBanner
        moduleNumber={m.moduleNumber}
        phase={m.phase}
        title={m.title}
        body={m.body}
        tone="yellow"
      />

      <section className="py-16 lg:py-24 bg-black text-[#FFFFF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {m.features.map((f) => (
              <FeaturePanel key={f.code} feature={f} tone="dark" />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#003DA5]/60 bg-[#003DA5]/20 p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-4 h-4 text-[#FFB605]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFB605]">
                {m.issuesHeading}
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {m.issues.map((issue, i) => (
                <div key={issue.label} className="border-l-2 border-[#FFB605]/60 pl-4">
                  <div className="text-[11px] font-bold tracking-[0.14em] text-[#FFFFF4]/40">
                    0{i + 1}
                  </div>
                  <div className="mt-1 text-sm font-bold text-[#FFFFF4] leading-snug">
                    {issue.label}
                  </div>
                  <p className="mt-1.5 text-sm text-[#FFFFF4]/60 leading-relaxed">{issue.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#003DA5] flex flex-col sm:flex-row sm:items-center gap-3">
              <Badge className="bg-[#FFB605] text-black border border-[#FFB605] hover:bg-[#FFB605] w-fit">
                <FileCheck2 className="w-3.5 h-3.5 mr-1.5" />
                WORM audit ledger
              </Badge>
              <p className="text-sm text-[#FFFFF4]/60 leading-relaxed">
                Every application event is sealed write-once on an isolated ledger — evidence an
                attacker cannot rewrite and an auditor can replay.
              </p>
            </div>
          </div>

          <ModuleDeepDive deepDive={deepDiveThree} tone="dark" />
        </div>
      </section>
    </>
  );
}