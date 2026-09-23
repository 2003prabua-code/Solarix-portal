import React from "react";
import { ShieldCheck, Cpu, Factory, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export const OverviewView = ({ onNavigateToEstimator, onNavigateToRfq, isDark }) => {
  const cardBg = isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-[#F4EFE6] border-amber-900/15 text-stone-900";
  const mutedText = isDark ? "text-slate-400" : "text-stone-700";

  return (
    <div className="space-y-12">
      {/* Industrial Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 text-white shadow-xl min-h-[380px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1600&q=80"
          alt="Commercial Solar Installation"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />

        <div className="relative z-10 max-w-2xl p-8 sm:p-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
            <Award className="h-3.5 w-3.5" /> Tier-1 Engineering & Procurement
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            High-Yield Commercial Rooftop & Captive Solar Microgrids
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Engineered for textile units, cold chain warehouses, and heavy fabrication plants. Slash daytime utility tariff expenses by up to 85% with certified 25-year performance warranties.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onNavigateToEstimator}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-3 text-xs transition cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <span>Launch Live ROI Calculator</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onNavigateToRfq}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-medium px-5 py-3 text-xs transition border border-slate-700 cursor-pointer backdrop-blur-sm"
            >
              <span>Book Structural Roof Survey</span>
            </button>
          </div>
        </div>
      </div>

      {/* Industrial Specs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Bifacial Modules with Verified Working Photo */}
        <div className={`rounded-2xl border overflow-hidden shadow-sm transition-colors duration-200 ${cardBg}`}>
          <div className="h-48 w-full overflow-hidden bg-slate-800">
            <img 
  src="https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=800" 
  alt="Industrial Rooftop Solar Array"
  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
  loading="eager"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80";
  }}
/>
          </div>
          <div className="p-6">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base">Bifacial N-Type High-Output Modules</h3>
            <p className={`mt-2 text-xs leading-relaxed ${mutedText}`}>
              22.8% cell efficiency with dual-glass rear absorption delivering +15% additional energy yield on reflective industrial roof surfaces.
            </p>
            <div className="mt-4 text-xs font-semibold text-emerald-600">Standard: IEC 61215 / 61730</div>
          </div>
        </div>

        {/* Card 2: Plant Safety */}
        <div className={`rounded-2xl border p-6 flex flex-col justify-between shadow-sm transition-colors duration-200 ${cardBg}`}>
          <div>
            <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base">Active Arc-Fault & Rapid Shutdown</h3>
            <p className={`mt-2 text-xs leading-relaxed ${mutedText}`}>
              Integrated AI AFCI DC disconnects capable of detecting and isolating micro-arcs in under 0.5 seconds, safeguarding plant premises and meeting strict factory fire codes.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" /> Zero-Puncture Clamping Available
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" /> 160 km/h Cyclone Wind Certified
              </div>
            </div>
          </div>
          <div className="mt-6 text-xs font-semibold text-blue-600 border-t border-amber-900/10 dark:border-slate-800 pt-3">
            Safety: UL1699B & CE Compliant
          </div>
        </div>

        {/* Card 3: SCADA Inverters */}
        <div className={`rounded-2xl border overflow-hidden shadow-sm transition-colors duration-200 ${cardBg}`}>
          <div className="h-48 w-full overflow-hidden bg-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80" 
              alt="Industrial Inverter & Grid Telemetry"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="h-9 w-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
              <Factory className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-base">SCADA & Live Cloud Telemetry</h3>
            <p className={`mt-2 text-xs leading-relaxed ${mutedText}`}>
              String-level monitoring via Modbus TCP/IP with real-time generation alarms, degradation diagnostics, and remote grid feed-in controls.
            </p>
            <div className="mt-4 text-xs font-semibold text-amber-600">Uptime SLA: 99.4% Performance Guarantee</div>
          </div>
        </div>

      </div>
    </div>
  );
};