import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function SurveyModal({ isOpen, onClose, targetKw, systemTitle }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', city: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-md w-full p-8 border border-[#DFD6C7] shadow-2xl relative space-y-5">
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[10px] font-mono text-[#2D6A4F] uppercase font-bold">On-Site Dispatch</span>
          <h3 className="text-xl font-extrabold text-[#1A201E] mt-0.5">Book Rooftop Feasibility Audit</h3>
          <p className="text-xs text-slate-600">Tailored for {targetKw} kW {systemTitle}</p>
        </div>

        {submitted ? (
          <div className="p-6 text-center space-y-3 bg-[#EDF4F0] rounded-2xl border border-[#C5DDD0]">
            <Check className="w-8 h-8 text-[#2D6A4F] mx-auto" />
            <h4 className="font-bold text-sm text-[#1B4332]">Survey Dispatched Successfully</h4>
            <p className="text-xs text-slate-600">A structural engineer will contact you within 24 hours.</p>
            <button
              onClick={handleClose}
              className="mt-3 px-6 py-2 bg-[#1B4332] text-amber-200 rounded-xl text-xs font-bold hover:bg-[#2D6A4F] transition"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
              <input
                required
                type="text"
                placeholder="e.g. S. Ramanathan"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white border border-[#DFD6C7] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#1B4332]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Contact *</label>
              <input
                required
                type="tel"
                placeholder="+91 98400 12345"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white border border-[#DFD6C7] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#1B4332]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">City / Region *</label>
              <input
                required
                type="text"
                placeholder="e.g. Salem, Tamil Nadu"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full bg-white border border-[#DFD6C7] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#1B4332]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-amber-200 font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider transition mt-2 shadow-sm"
            >
              Confirm Free Engineering Survey
            </button>
          </form>
        )}
      </div>
    </div>
  );
}