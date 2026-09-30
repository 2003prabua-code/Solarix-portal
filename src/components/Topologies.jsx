import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Topologies({ systems, selectedId, onSelect }) {
  return (
    <section id="architectures" className="py-20 border-b border-[#E8E1D5] bg-[#F4EFE6]">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#DFD6C7] pb-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold block">Phase 01 // Configuration</span>
            <h2 className="text-3xl font-extrabold text-[#1A201E] tracking-tight">Choose Your Solar Topology</h2>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Select one of the 3 certified setups below to dynamically synchronize the power flow diagram and financial calculation desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systems.map((s) => {
            const isSelected = selectedId === s.id;
            return (
              <div
                key={s.id}
                onClick={() => onSelect(s.id)}
                className={`cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between bg-white relative group ${
                  isSelected 
                    ? 'border-[#1B4332] ring-2 ring-[#1B4332] shadow-2xl scale-[1.01]' 
                    : 'border-[#DFD6C7] hover:border-slate-400 shadow-sm'
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden bg-[#1E2922]">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    loading="eager"
                    onError={(e) => {
                      e.target.onerror = null;
                      if (s.id === 'ongrid') {
                        e.target.src = 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=80';
                      } else if (s.id === 'offgrid') {
                        e.target.src = 'https://images.unsplash.com/photo-1545208942-e1c5c91152c7?auto=format&fit=crop&w=900&q=80';
                      } else {
                        e.target.src = 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=900&q=80';
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <span className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md text-[#1B4332] text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-xs">
                    {s.badge}
                  </span>

                  {isSelected && (
                    <span className="absolute bottom-4 right-4 bg-[#1B4332] text-amber-200 text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> ACTIVE SETUP
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-extrabold text-xl text-[#1A201E]">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>

                    <div className="space-y-2 pt-3 border-t border-[#F2ECE1] text-xs">
                      {s.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase block">EPC Benchmark</span>
                      <span className="font-bold text-[#1B4332] text-base">₹{s.rate.toLocaleString('en-IN')}/kW</span>
                    </div>
                    <span className={`px-4 py-2 rounded-xl font-bold text-xs transition ${
                      isSelected ? 'bg-[#1B4332] text-amber-200' : 'bg-[#F4EFE6] text-slate-700 group-hover:bg-[#EAE2D3]'
                    }`}>
                      {isSelected ? 'Configuring Below' : 'Select'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}