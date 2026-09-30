import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroVideo() {
  return (
    <section id="video-stage" className="relative pt-6 pb-16 border-b border-[#E8E1D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#1B4332] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>MNRE Approved • PM Surya Ghar ₹78,000 Subsidy Active</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#121816] leading-[1.08]">
              Architectural solar. <br />
              <span className="text-[#2D6A4F] italic font-serif font-normal">Engineered to cut bills by 95%.</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Transition to clean energy with Tier-1 bifacial TOPCon monocrystalline modules, German inverters, and certified bidirectional TNEB net-metering.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#architectures" 
                className="bg-[#1B4332] hover:bg-[#2D6A4F] text-amber-200 font-extrabold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
              >
                <span>Select Solar Setup</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="#calculator" 
                className="bg-white hover:bg-slate-50 text-[#121816] border border-[#DFD6C7] font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-xs"
              >
                Open ROI Desk
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E8E1D5]">
              <div className="p-3 bg-white rounded-xl border border-[#DFD6C7]">
                <div className="text-xl font-extrabold text-[#1B4332] font-mono">4.2+ MW</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Grid Connected</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#DFD6C7]">
                <div className="text-xl font-extrabold text-[#2D6A4F] font-mono">3.2 Yrs</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Avg Payback</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#DFD6C7]">
                <div className="text-xl font-extrabold text-[#121816] font-mono">25 Yrs</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold mt-0.5">Linear SLA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#1B4332]/25 shadow-2xl bg-[#0B1510] relative group">
              <div className="aspect-video w-full relative overflow-hidden bg-slate-950 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  className="w-full h-full object-cover pointer-events-none select-none"
                >
                  <source src="/solar.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-mono text-[11px] flex items-center gap-2 pointer-events-none z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>LOCAL FEED // 4K 60FPS</span>
                </div>
              </div>

              <div className="p-4 bg-[#12231A] text-white flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div>
                    <div className="text-xs font-bold font-mono text-emerald-300">AERIAL RECON // SALEM SUBSTATION ARRAY</div>
                    <div className="text-[10px] text-slate-400 font-mono">550W Bifacial Commercial Commissioning</div>
                  </div>
                </div>
                <div className="text-right font-mono text-[11px] text-amber-300 font-bold">
                  ACTIVE FEED
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}