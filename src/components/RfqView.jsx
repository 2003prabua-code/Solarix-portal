import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export const RfqView = ({ isDark }) => {
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    estimatedKw: "50",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = `SOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);

    const existingLeads = JSON.parse(localStorage.getItem("solar_leads") || "[]");
    const newEntry = {
      id: generatedRef,
      type: "Full RFQ Survey",
      company: formData.companyName.trim(),
      contact: formData.contactPerson.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
      systemKw: `${formData.estimatedKw} kW`,
      submittedAt: new Date().toLocaleString(),
    };

    localStorage.setItem("solar_leads", JSON.stringify([...existingLeads, newEntry]));
    setSubmitted(true);
  };

  const containerClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-[#F4EFE6] border-amber-900/15 text-stone-900";

  const inputClass = isDark
    ? "bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-emerald-500"
    : "bg-white border-amber-900/20 text-stone-900 placeholder-stone-400 focus:border-emerald-600";

  const labelClass = isDark ? "text-slate-300 font-medium" : "text-stone-800 font-bold";

  if (submitted) {
    return (
      <div className={`max-w-xl mx-auto rounded-3xl border p-8 sm:p-12 text-center shadow-sm transition-colors duration-200 ${containerClass}`}>
        <div className="h-16 w-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-black">Survey Request Dispatched</h2>
        <p className={`mt-2 text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-stone-700 font-medium"}`}>
          Application reference <strong>#{refId}</strong> has been registered. Our structural engineering team will review satellite azimuth angles and contact <strong>{formData.email}</strong> within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ companyName: "", contactPerson: "", email: "", phone: "", city: "", estimatedKw: "50" });
          }}
          className="mt-6 inline-flex rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-xs font-bold transition cursor-pointer"
        >
          Submit Another Facility Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto rounded-3xl border p-6 sm:p-10 shadow-sm transition-colors duration-200 ${containerClass}`}>
      <div className="border-b border-amber-900/10 dark:border-slate-800 pb-5 mb-6">
        <h2 className="text-xl font-black">Request Engineering Feasibility & RFQ</h2>
        <p className={`text-xs mt-1 font-medium ${isDark ? "text-slate-400" : "text-stone-600"}`}>
          Complete facility parameters to receive a technical bill of materials (BOM) and structural roof load assessment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-xs mb-1 ${labelClass}`}>Company / Facility Name</label>
            <input
              required
              type="text"
              placeholder="Apex Precision Forge Ltd."
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className={`w-full rounded-xl border px-3 py-2 text-xs focus:outline-none ${inputClass}`}
            />
          </div>

          <div>
            <label className={`block text-xs mb-1 ${labelClass}`}>Key Technical Contact</label>
            <input
              required
              type="text"
              placeholder="e.g. Operations Director"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className={`w-full rounded-xl border px-3 py-2 text-xs focus:outline-none ${inputClass}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-xs mb-1 ${labelClass}`}>Corporate Email</label>
            <input
              required
              type="email"
              placeholder="contact@enterprise.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full rounded-xl border px-3 py-2 text-xs focus:outline-none ${inputClass}`}
            />
          </div>

          <div>
            <label className={`block text-xs mb-1 ${labelClass}`}>Phone Number</label>
            <input
              required
              type="tel"
              placeholder="+91 90000 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full rounded-xl border px-3 py-2 text-xs focus:outline-none ${inputClass}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={`block text-xs mb-1 ${labelClass}`}>Plant Location / City</label>
            <input
              required
              type="text"
              placeholder="e.g., Coimbatore / Chennai"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={`w-full rounded-xl border px-3 py-2 text-xs focus:outline-none ${inputClass}`}
            />
          </div>

          <div>
            <label className={`block text-xs mb-1 ${labelClass}`}>Target Plant Capacity</label>
            <select
              value={formData.estimatedKw}
              onChange={(e) => setFormData({ ...formData, estimatedKw: e.target.value })}
              className={`w-full rounded-xl border px-3 py-2 text-xs focus:outline-none ${inputClass}`}
            >
              <option value="25">25 kW - Commercial Rooftop</option>
              <option value="50">50 kW - Medium Manufacturing</option>
              <option value="150">150 kW - Heavy Industry</option>
              <option value="500">500+ kW - Microgrid / Captive Plant</option>
            </select>
          </div>
        </div>

        <div className="pt-3">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 text-xs transition cursor-pointer shadow-sm"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Submit RFQ & Schedule Structural Survey</span>
          </button>
        </div>
      </form>
    </div>
  );
};