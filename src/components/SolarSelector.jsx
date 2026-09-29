import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function SolarSelector({ systems, selectedSystemId, onSelectSystem }) {
  return (
    <div id="solutions" className="space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block">Phase 01 // Configuration</span>
        <h2 className="text-3xl font-extrabold text-slate-900">Choose Your Solar System Architecture</h2>
        <p className="text-sm text-slate-500">Select any system below to immediately configure customized sizing and payback models.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {systems.map((system) => {
          const isSelected = selectedSystemId === system.id;
          return (
            <div
              key={system.id}
              onClick={() => onSelectSystem(system.id)}
              className={`cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between bg-white ${
                isSelected 
                  ? 'border-emerald-600 ring-2 ring-emerald-600 shadow-xl shadow-emerald-600/10' 
                  : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Product Card Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={system.image} 
                  alt={system.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {system.badge}
                </span>

                {isSelected && (
                  <span className="absolute bottom-4 right-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Selected Model
                  </span>
                )}
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">{system.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{system.shortDesc}</p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    {system.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Standard EPC Range</span>
                    <span className="text-slate-900 font-extrabold text-sm">₹{system.baseCostPerKw.toLocaleString('en-IN')} <span className="font-normal text-slate-500 text-xs">/ kW</span></span>
                  </div>

                  <button className={`px-4 py-2 rounded-lg font-bold text-xs transition flex items-center gap-1.5 ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}>
                    <span>{isSelected ? 'Configuring Below' : 'Configure'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}