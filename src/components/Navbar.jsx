import React from 'react';
import { Sun, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenSurvey }) {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#video-stage" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-amber-300 flex items-center justify-center font-bold shadow-md">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-tight text-[#1B4332] block leading-none">HELIOS</span>
            <span className="text-[10px] tracking-widest text-slate-500 font-mono uppercase block mt-1">Solar Dynamics</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-600">
          <a href="#video-stage" className="hover:text-[#1B4332] transition">Atmosphere</a>
          <a href="#architectures" className="hover:text-[#1B4332] transition">Topologies</a>
          <a href="#motion-grid" className="hover:text-[#1B4332] transition">Power Flow</a>
          <a href="#calculator" className="hover:text-[#1B4332] transition">Yield Desk</a>
          <a href="#credentials" className="hover:text-[#1B4332] transition">Verification</a>
        </nav>

        <button
          onClick={onOpenSurvey}
          className="bg-[#1B4332] hover:bg-[#2D6A4F] text-amber-100 font-extrabold px-6 py-3 rounded-full text-xs transition shadow-sm flex items-center gap-2"
        >
          <span>Book Site Survey</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
}