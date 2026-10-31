import React from 'react';
import { Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
            <Badge className="bg-[#FFFFF4] text-[#003DA5] border border-[#003DA5]/20 hover:bg-[#FFFFF4] mb-4">
              <Layers className="w-3.5 h-3.5 mr-1.5" />
              Unified Cyber Defense Platform
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Four modules across the entire attack lifecycle
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
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
                className="flex items-center gap-2 rounded-full border border-[#003DA5]/15 bg-[#FFFFF4] px-4 py-1.5"
              >
                <span className="text-[11px] font-bold text-[#003DA5]">0{i + 1}</span>
                <span className="text-sm font-medium text-gray-700">{stage}</span>
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