import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ContactForm({ activeSystem, monthlyBill, calcData }) {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', notes: '' });
  const [submittedId, setSubmittedId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `SOLAR-${Math.floor(100000 + Math.random() * 900000)}`;
    const lead = {
      id,
      timestamp: new Date().toLocaleString(),
      systemType: activeSystem.title,
      monthlyBill,
      recommendedKw: calcData.recommendedKw,
      ...formData
    };
    const stored = JSON.parse(localStorage.getItem('helios_solar_leads') || '[]');
    localStorage.setItem('helios_solar_leads', JSON.stringify([lead, ...stored]));
    setSubmittedId(id);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block">Direct Consultation</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Schedule A Professional On-Site Solar Feasibility Audit
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                A licensed structural solar engineer will evaluate your rooftop compass bearing, test structural load tolerance, model shadow profiles, and deliver a finalized net-metering project proposal.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-400 uppercase font-bold text-[10px]">Technical Helpline</div>
                  <div className="text-slate-900 font-extrabold text-sm">+91 94422 18900</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-400 uppercase font-bold text-[10px]">Engineering Desk</div>
                  <div className="text-slate-900 font-extrabold text-sm">engineering@heliossolar.in</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-400 uppercase font-bold text-[10px]">Headquarters & Dispatch Depot</div>
                  <div className="text-slate-900 font-extrabold text-sm">Industrial Estate, Salem - 636004, Tamil Nadu</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-lg">
            {submittedId ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Site Survey Dispatched</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your site audit ticket is <span className="text-emerald-700 font-mono font-bold">{submittedId}</span>. A senior structural engineer will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmittedId(null)}
                  className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900">Request Site Inspection</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                    {activeSystem.title}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. S. Ramanathan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">Contact Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Site District / City *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Salem / Coimbatore / Namakkal"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Rooftop / Technical Notes (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Flat RCC roof with overhead tank, interested in 3-phase hybrid battery setup..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-emerald-600 shadow-xs"
                  ></textarea>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex justify-between items-center text-xs font-mono text-slate-600 shadow-xs">
                  <span>Target Sizing: <strong className="text-emerald-700">~{calcData.recommendedKw} kW</strong></span>
                  <span>Estimated Bill: <strong className="text-slate-900">₹{monthlyBill.toLocaleString('en-IN')}</strong></span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                >
                  <span>CONFIRM & BOOK FREE ON-SITE INSPECTION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}