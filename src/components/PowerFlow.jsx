import React from 'react';
import { Sun, Zap, Cpu, RotateCw } from 'lucide-react';

export default function PowerFlow({ kw, activeSystem }) {
  return (
    <section id="motion-grid" className="py-20 border-b border-[#E8E1D5] bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold block">Real-Time Circuit</span>
          <h2 className="text-3xl font-extrabold text-[#1A201E]">Dynamic Power Flow Telemetry</h2>
          <p className="text-xs text-slate-600">Simulating electricity generation, inverter inversion, and grid feedback for your active setup.</p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#12231A] text-white border border-[#234433] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            
            <div className="p-5 rounded-2xl bg-black/40 border border-emerald-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
                <Sun className="w-6 h-6 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <div className="font-bold text-sm">Solar Rooftop Array</div>
              <div className="text-[11px] font-mono text-emerald-400">Yield: {kw} kW Generating</div>
              <div className="text-[10px] text-slate-400">Direct Current (DC)</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-teal-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-400/20 text-teal-400 flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
              <div className="font-bold text-sm">Hybrid Smart Inverter</div>
              <div className="text-[11px] font-mono text-teal-300">230V Pure Sine Wave</div>
              <div className="text-[10px] text-slate-400">Efficiency: 98.7%</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mx-auto">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="font-bold text-sm">Facility Loads Active</div>
              <div className="text-[11px] font-mono text-amber-300">Loads: 100% Offset</div>
              <div className="text-[10px] text-slate-400">Zero Grid Import</div>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-sky-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-400 flex items-center justify-center mx-auto">
                <RotateCw className="w-6 h-6 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div className="font-bold text-sm">Bidirectional Meter</div>
              <div className="text-[11px] font-mono text-sky-300">
                {activeSystem.hasBattery ? 'Battery Bank Charging' : 'Grid Net-Exporting'}
              </div>
              <div className="text-[10px] text-slate-400">Tariff Deductions Live</div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Circuit Pulse: <strong className="text-white">Active Feed Nominal</strong></span>
            </div>
            <div>Harmonic Distortion (THD): <strong className="text-emerald-400">&lt; 2.1%</strong></div>
            <div>DISCOM Sync Phase: <strong className="text-amber-300">415V Three-Phase Locked</strong></div>
          </div>
        </div>

      </div>
    </section>
  );
}