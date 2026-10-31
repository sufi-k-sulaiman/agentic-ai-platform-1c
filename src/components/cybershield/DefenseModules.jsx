import React from 'react';
import { Layers } from 'lucide-react';
import DefenseModulePerimeter from './DefenseModulePerimeter';
import DefenseModuleDomain from './DefenseModuleDomain';
import DefenseModuleAppSec from './DefenseModuleAppSec';
import DefenseModuleImpact from './DefenseModuleImpact';
import PortfolioMatrix from './PortfolioMatrix';

const lifecycle = ['Perimeter', 'Internal Domain', 'Application', 'Blast Mitigation'];

export default function DefenseModules() {
  return (
    <>
      <section className="pt-16 lg:pt-24 pb-12 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-[#003DA5]">
              <Layers className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
                Unified Cyber Defense Platform
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#001B4D] tracking-tight">
              Four modules across the entire attack lifecycle
            </h2>
            <p className="mt-4 text-lg text-[#001B4D]/70 leading-relaxed">
              CyberShield consolidates the security stack into one AI-driven platform. Predictive
              analytics, automated containment, and secure-by-default architecture neutralize threat
              vectors end to end — closing application-layer vulnerabilities and mitigating the
              organizational fallout that follows.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {lifecycle.map((stage, i) => (
              <div
                key={stage}
                className="flex items-center gap-2 rounded-full border border-[#003DA5]/15 bg-white px-4 py-1.5"
              >
                <span className="text-[11px] font-bold text-[#FFB605]">0{i + 1}</span>
                <span className="text-sm font-medium text-[#001B4D]/80">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DefenseModulePerimeter />
      <DefenseModuleDomain />
      <DefenseModuleAppSec />
      <DefenseModuleImpact />
      <PortfolioMatrix />
    </>
  );
}