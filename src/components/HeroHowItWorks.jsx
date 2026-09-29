import React from 'react';
import { ShieldCheck, Zap, Sun, Award, CheckCircle } from 'lucide-react';

export default function HeroHowItWorks() {
  return (
    <section id="home" className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      
      {/* Subtle architectural mesh background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Announcement Bar */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6 shadow-xs">
          <Award className="w-4 h-4 text-emerald-600" />
          <span>MNRE Authorized Channel Partner • Up to ₹78,000 Direct Central Subsidy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Corporate Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Precision Commercial & Residential <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Solar Infrastructure</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Transition to clean energy with turnkey tier-1 TOPCon bifacial modules, certified micro-inverters, and structural engineering rated for 170 km/h wind shear. Eliminate up to 95% of utility grid expenses with complete net-metering compliance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl font-extrabold text-slate-900">25 Years</div>
                <div className="text-xs text-slate-500 mt-0.5">Linear Power Guarantee</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="text-2xl font-extrabold text-emerald-600">3.4 Years</div>
                <div className="text-xs text-slate-500 mt-0.5">Average Capital Payback</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                <div className="text-2xl font-extrabold text-teal-600">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">DISCOM Approval Rate</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#solutions" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition shadow-lg shadow-emerald-600/20"
              >
                Select System Architecture
              </a>
              <a 
                href="#calculator" 
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold px-7 py-3.5 rounded-xl text-sm transition shadow-xs"
              >
                Run Solar Sizing Calculator
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80" 
                alt="Solar Rooftop Installation"
                className="w-full h-80 sm:h-96 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

              {/* Floating Verified Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white text-slate-900 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Salem Commercial Substation Array</div>
                      <div className="text-[11px] text-emerald-600 font-semibold">Active Yield: 98.4% Efficiency</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Central Subsidy</div>
                    <div className="text-sm font-extrabold text-emerald-700">DBT Credited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Step Simplified Explanation Deck */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block">How It Works</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">From Sunlight To Subsidized Savings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">High-Yield Solar Capture</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Anti-reflective monocrystalline panels harvest ambient sunlight even during cloudy monsoon periods, generating raw DC electricity safely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Smart Inversion & Load Run</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                A European-standard MPPT inverter transforms DC current into 230V/415V three-phase pure sine-wave AC power, powering heavy appliances seamlessly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Net-Meter Credit Banking</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Excess generation flows back to the utility grid through an authorized bidirectional meter, accumulating rupee credits that offset future power bills.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}