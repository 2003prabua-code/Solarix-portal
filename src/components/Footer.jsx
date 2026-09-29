import React from 'react';
import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 bg-white text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
            <Sun className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold text-slate-900 text-sm">HELIOS SOLAR DYNAMICS</span>
            <div className="text-[11px] text-slate-400">MNRE Compliant Clean Energy Engineering © 2026</div>
          </div>
        </div>

        <div className="flex gap-8 font-semibold text-slate-600 text-[12px]">
          <a href="#solutions" className="hover:text-emerald-600">Solar Architectures</a>
          <a href="#calculator" className="hover:text-emerald-600">ROI Calculator</a>
          <a href="#about" className="hover:text-emerald-600">Engineering Standards</a>
          <a href="#reviews" className="hover:text-emerald-600">Case Studies</a>
          <a href="#contact" className="hover:text-emerald-600">Book Inspection</a>
        </div>
      </div>
    </footer>
  );
}