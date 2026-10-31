import React from 'react';
import { Table2, ArrowRight } from 'lucide-react';
import { portfolioMatrix } from './defenseModules';

export default function PortfolioMatrix() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-[#003DA5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 text-[#003DA5]">
            <Table2 className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
              Summary Portfolio Matrix
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001B4D] tracking-tight">
            Every attack issue, mapped to the capability that closes it
          </h2>
          <p className="mt-4 text-lg text-[#001B4D]/70 leading-relaxed">
            One consolidated view of the CyberShield portfolio — what it defends, which control
            answers it, and the mechanism that mitigates the risk.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-10 hidden lg:block rounded-2xl border border-[#003DA5]/15 overflow-hidden bg-white">
          <table className="w-full text-left">
            <thead className="bg-[#FFFFF4] border-b border-[#003DA5]/15">
              <tr>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#003DA5] w-[26%]">
                  Cyber attack issue
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#003DA5] w-[30%]">
                  CyberShield capability
                </th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#003DA5]">
                  How it mitigates the risk
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#003DA5]/10">
              {portfolioMatrix.map((row) => (
                <tr key={row.issue} className="hover:bg-[#FFFFF4] transition-colors">
                  <td className="px-6 py-5 text-sm font-semibold text-[#001B4D] align-top">
                    {row.issue}
                  </td>
                  <td className="px-6 py-5 align-top">
                    <div className="flex gap-2">
                      <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-[#FFB605]" />
                      <span className="text-sm font-semibold text-[#003DA5] leading-snug">
                        {row.capability}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-[#001B4D]/65 leading-relaxed align-top">
                    {row.mitigation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / tablet cards */}
        <div className="mt-8 lg:hidden space-y-4">
          {portfolioMatrix.map((row) => (
            <div key={row.issue} className="rounded-2xl border border-[#003DA5]/15 bg-white p-5">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#003DA5]">
                Attack issue
              </div>
              <div className="mt-1 text-sm font-bold text-[#001B4D]">{row.issue}</div>

              <div className="mt-4 flex gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 text-[#FFB605]" />
                <span className="text-sm font-semibold text-[#003DA5] leading-snug">
                  {row.capability}
                </span>
              </div>

              <p className="mt-3 pt-3 border-t border-[#003DA5]/10 text-sm text-[#001B4D]/65 leading-relaxed">
                {row.mitigation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}