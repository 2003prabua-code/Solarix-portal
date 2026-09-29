import React from 'react';
import { ShieldCheck, Wrench, Award, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Engineering Heritage Since 2018</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Power Systems Engineering Designed To Deliver Every Guaranteed Kilowatt-Hour.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Helios Solar Dynamics was established by electrical power engineering specialists in Tamil Nadu to eliminate the high failure rates and under-generation typical of aggregator-based installations. 
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate our own in-house design and deployment squads: structural azimuth shadow profiling, 80-micron hot-dip galvanized mounting structures engineered to withstand 170 km/h wind loads, and complete turnkey liaison with state electricity boards for seamless bidirectional net-metering synchronization.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-3xl font-extrabold text-slate-900 font-mono">4.2+ MW</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Grid-Connected Projects</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-emerald-600 font-mono">1,250+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Commissioned Rooftops</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-teal-600 font-mono">25 Years</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Linear Warranty SLA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80" 
                alt="Solar Technicians Conducting Field Testing" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6 bg-slate-50 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Certified DISCOM Liaising & Direct Subsidy (DBT)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We handle the entire submission on the national portal, DISCOM site inspections, and bidirectional meter testing with zero contractor friction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}