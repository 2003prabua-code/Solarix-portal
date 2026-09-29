import React from 'react';
import { Sun, ArrowRight, PhoneCall } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-tr from-emerald-600 to-teal-400 text-white rounded-xl shadow-md shadow-emerald-500/20 flex items-center justify-center">
            <Sun className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900 block leading-none">HELIOS</span>
            <span className="text-[10px] tracking-widest text-emerald-600 font-bold uppercase block mt-1">Solar Dynamics</span>
          </div>
        </a>

        {/* Executive Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#solutions" className="hover:text-emerald-600 transition">Solar Systems</a>
          <a href="#calculator" className="hover:text-emerald-600 transition">ROI Calculator</a>
          <a href="#about" className="hover:text-emerald-600 transition">Engineering Standard</a>
          <a href="#reviews" className="hover:text-emerald-600 transition">Case Studies</a>
        </nav>

        {/* Direct Action Hub */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2.5 text-xs text-slate-600 border-r border-slate-200 pr-4">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 font-medium">Technical Hotline</div>
              <div className="font-bold text-slate-800">+91 94422 18900</div>
            </div>
          </div>

          <a 
            href="#contact" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition shadow-md shadow-emerald-600/25"
          >
            <span>FREE SITE AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}