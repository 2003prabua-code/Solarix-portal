import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Calculator({ 
  monthlyBill, 
  setMonthlyBill, 
  roofArea, 
  setRoofArea, 
  ledger, 
  activeSystem, 
  onOpenSurvey 
}) {
  return (
    <section id="calculator" className="py-20 border-b border-[#E8E1D5] bg-[#F4EFE6]">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DFD6C7] shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EFE8DC]">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#2D6A4F] font-bold block">Phase 02 // Financial Engineering</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A201E]">Interactive ROI Desk: {activeSystem.title}</h3>
            </div>
            <div className="text-xs font-mono text-slate-600 bg-[#FAF7F2] px-4 py-2 rounded-xl border border-[#DFD6C7]">
              Terrace Allocation: <strong className="text-[#1B4332]">~{ledger.requiredSpace} sq. ft.</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#DFD6C7] space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Average Monthly Electricity Bill:</span>
                  <span className="font-mono text-2xl text-[#1B4332]">₹{monthlyBill.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="35000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-[#E2DACB] rounded-lg appearance-none cursor-pointer accent-[#1B4332]"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>₹1,000 / mo</span>
                  <span>₹18,000 / mo</span>
                  <span>₹35,000+ / mo</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#DFD6C7] space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Available Shadow-Free Roof Space:</span>
                  <span className="font-mono text-2xl text-[#1B4332]">{roofArea} sq. ft.</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="50"
                  value={roofArea}
                  onChange={(e) => setRoofArea(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-[#E2DACB] rounded-lg appearance-none cursor-pointer accent-[#1B4332]"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>100 sq. ft.</span>
                  <span>1,200 sq. ft.</span>
                  <span>2,500 sq. ft.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EDF4F0] border border-[#C5DDD0] text-xs text-[#1B4332] flex items-center justify-between">
                <span className="font-semibold">Calculated Monthly Generation:</span>
                <span className="font-mono font-bold text-sm">{Math.round(ledger.kw * 120)} Units (kWh)</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#162B21] text-white p-8 rounded-3xl space-y-5 font-mono text-xs shadow-2xl">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Recommended Plant Capacity</span>
                  <div className="text-3xl font-extrabold text-amber-300">{ledger.kw} kW Array</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase">Amortization</span>
                  <div className="text-xl font-bold text-emerald-400">{ledger.payback} Years</div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Gross Turnkey Project Cost:</span>
                  <span>₹{ledger.gross.toLocaleString('en-IN')}</span>
                </div>

                {ledger.subsidy > 0 ? (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Central Govt Subsidy (Surya Ghar DBT):</span>
                    <span>- ₹{ledger.subsidy.toLocaleString('en-IN')}</span>
                  </div>
                ) : (
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Central Subsidy:</span>
                    <span>Applicable for on-grid domestic meters</span>
                  </div>
                )}

                <div className="flex justify-between py-2 border-y border-white/15 text-sm font-bold">
                  <span>Net Out-of-Pocket Investment:</span>
                  <span className="text-amber-300">₹{ledger.net.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>Yearly Electricity Savings:</span>
                  <span className="text-white font-bold">₹{ledger.annualSavings.toLocaleString('en-IN')} / yr</span>
                </div>

                <div className="flex justify-between text-slate-300">
                  <span>25-Year Cumulative Yield:</span>
                  <span className="text-emerald-400 font-bold">₹{ledger.lifetimeSavings.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={onOpenSurvey}
                className="w-full mt-4 bg-amber-400 hover:bg-amber-300 text-[#121A15] font-extrabold py-4 rounded-xl transition text-center tracking-tight text-xs uppercase shadow-md flex items-center justify-center gap-2"
              >
                <span>Book Free Inspection For {ledger.kw} kW System</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}