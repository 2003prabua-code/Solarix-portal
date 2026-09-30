import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import { IMAGES } from '../data/solarData';

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 bg-[#FAF7F2] border-b border-[#E8E1D5]">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#2D6A4F] font-bold block">Engineered Precision</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A201E] tracking-tight">
              Designed By Power Systems Specialists.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Most subcontracted systems fail to generate advertised units due to poor azimuth tilt, DC line drops, or substandard earthing pits. Helios supervises every deployment directly with certified electrical engineers using hot-dip galvanized mounting structures rated for 170 km/h wind shear.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#DFD6C7] shadow-xs">
                <div className="text-2xl font-extrabold text-[#1B4332] font-mono">4.2+ MW</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Grid Energized</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#DFD6C7] shadow-xs">
                <div className="text-2xl font-extrabold text-[#1B4332] font-mono">1,250+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Sites Active</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#DFD6C7] shadow-xs">
                <div className="text-2xl font-extrabold text-[#1B4332] font-mono">25 Yrs</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Linear SLA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#DFD6C7] shadow-xl">
            <img 
              src={IMAGES.technician} 
              alt="Solar Technicians Conducting Field Testing" 
              className="w-full h-80 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                <span>100% DISCOM Net-Metering Feasibility Clearance</span>
              </div>
              <p className="text-[11px] text-slate-200">
                We handle the state portal paperwork, physical DISCOM safety inspections, and bidirectional meter synchronization with zero contractor friction.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-[#DFD6C7] space-y-3 shadow-xs">
            <div className="flex text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "Our bi-monthly summer bill in Salem was regularly crossing ₹9,400. After the 4.5 kW on-grid setup was commissioned, our DISCOM bill dropped to ₹160 standard fixed charges. The ₹78,000 subsidy arrived in my account within 35 days."
            </p>
            <div className="font-bold text-xs text-[#1A201E]">Dr. K. Senthil Nathan • <span className="font-normal text-slate-500">Fairlands, Salem, TN</span></div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DFD6C7] space-y-3 shadow-xs">
            <div className="flex text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "We run an auto precision components milling facility with high daytime spindle loads. Helios installed a 35 kW commercial array with zero downtime to our machining floor. Operating energy costs fell by nearly 75% immediately."
            </p>
            <div className="font-bold text-xs text-[#1A201E]">Murugan Precision Engineering • <span className="font-normal text-slate-500">SIDCO, Coimbatore</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}