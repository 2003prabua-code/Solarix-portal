import React from 'react';
import { Calculator, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function SolarCalculator({
  activeSystem,
  monthlyBill,
  setMonthlyBill,
  roofArea,
  setRoofArea,
  calcData
}) {
  return (
    <div id="calculator" className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
      
      {/* Decorative top accent glow */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500"></div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-100">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest">Phase 02 // Financial Engineering</div>
            <h3 className="text-2xl font-extrabold text-slate-900">Custom Sizing: {activeSystem.title}</h3>
          </div>
        </div>
        <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
          Target Segment: <strong className="text-slate-900">{activeSystem.idealFor}</strong>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
        
        {/* Sliders Input Area */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Average Monthly Electricity Bill</label>
              <span className="font-extrabold text-2xl text-emerald-700 font-mono">₹{monthlyBill.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="35000"
              step="500"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] font-semibold text-slate-400">
              <span>₹1,000 / mo</span>
              <span>₹15,000 / mo</span>
              <span>₹35,000+ / mo</span>
            </div>
          </div>

          <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">Available Shadow-Free Roof Space</label>
              <span className="font-extrabold text-2xl text-slate-900 font-mono">{roofArea} <span className="text-sm font-normal text-slate-500">sq. ft.</span></span>
            </div>
            <input
              type="range"
              min="100"
              max="2500"
              step="50"
              value={roofArea}
              onChange={(e) => setRoofArea(parseInt(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] font-semibold text-slate-400">
              <span>100 sq. ft.</span>
              <span>1,200 sq. ft.</span>
              <span>2,500 sq. ft.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              Calculations assume 550W Tier-1 TOPCon bifacial modules generating approx 120 units per kW monthly under South Indian solar irradiation profiles.
            </div>
          </div>
        </div>

        {/* Real-time Financial Ledger */}
        <div className="lg:col-span-6 bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="flex justify-between items-start pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs text-slate-400 font-mono uppercase">Optimized Plant Capacity</span>
              <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-1">{calcData.recommendedKw} kW Array</div>
              <div className="text-xs text-slate-400 mt-1">Requires ~{calcData.requiredSpace} sq. ft. roof area</div>
            </div>
            <div className="text-right bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] text-slate-400 font-mono uppercase block">Estimated Payback</span>
              <div className="text-xl font-bold text-white font-mono mt-0.5">{calcData.paybackYears} Years</div>
            </div>
          </div>

          <div className="space-y-3.5 text-xs font-mono">
            <div className="flex justify-between text-slate-400">
              <span>Gross Turnkey Project Cost:</span>
              <span className="text-slate-200 font-bold">₹{calcData.grossCost.toLocaleString('en-IN')}</span>
            </div>

            {calcData.subsidy > 0 ? (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Central Subsidy (PM Surya Ghar DBT):</span>
                <span>- ₹{calcData.subsidy.toLocaleString('en-IN')}</span>
              </div>
            ) : (
              <div className="flex justify-between text-slate-400">
                <span>Central Subsidy:</span>
                <span>Applicable to domestic meter connections</span>
              </div>
            )}

            <div className="flex justify-between py-3 border-y border-slate-800 text-sm">
              <span className="font-bold text-white">Net Out-of-Pocket Cost:</span>
              <span className="font-extrabold text-emerald-400 text-base">₹{calcData.netCost.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between text-slate-400">
              <span>Estimated Annual Tariff Savings:</span>
              <span className="text-slate-200 font-semibold">₹{calcData.yearlySavings.toLocaleString('en-IN')} / year</span>
            </div>

            <div className="flex justify-between text-slate-300 pt-1">
              <span>25-Year Cumulative Financial Yield:</span>
              <span className="font-bold text-emerald-400 text-sm">₹{calcData.lifetime25YrSavings.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-500/20"
          >
            Lock In This {calcData.recommendedKw} kW Specification →
          </a>
        </div>

      </div>
    </div>
  );
}