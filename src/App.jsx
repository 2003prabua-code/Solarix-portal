import React, { useState, useEffect } from "react";
import { PageShell } from "./components/PageShell";
import { SolarEstimator } from "./components/SolarEstimator";
import { OverviewView } from "./components/OverviewView";
import { RfqView } from "./components/RfqView";
import { AdminLeadsModal } from "./components/AdminLeadsModal";
import { ShieldCheck } from "lucide-react";

// ---THE TOP OF App() ---


export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [selectedLead, setSelectedLead] = useState(null);
  const [leads, setLeads] = useState(() => {
  try {
    const raw = localStorage.getItem("solar_leads");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? [...parsed].reverse() : [];
  } catch (e) {
    return [];
  }
});

// Keep it in sync if the URL hash switches
useEffect(() => {
  try {
    const raw = localStorage.getItem("solar_leads");
    const parsed = raw ? JSON.parse(raw) : [];
    setLeads(Array.isArray(parsed) ? [...parsed].reverse() : []);
  } catch (e) {
    setLeads([]);
  }
}, [currentHash]);

  useEffect(() => {
  const handleHash = () => setCurrentHash(window.location.hash);
  window.addEventListener("hashchange", handleHash);
  return () => window.removeEventListener("hashchange", handleHash);
}, []);
  const [activePage, setActivePage] = useState("estimator");
  const [isDark, setIsDark] = useState(true);
  const [adminOpen, setAdminOpen] = useState(false);

  const pageDetails = {
    overview: {
      badge: "Commercial Infrastructure",
      title: "High-Yield Captive Solar Microgrids",
      subtitle: "Engineered for factories, manufacturing campuses, and cold storage logistics.",
    },
    estimator: {
      badge: "Solarix Commercial v2.6 • Live Simulation",
      title: "Industrial & Commercial Solar ROI Engine",
      subtitle: "Estimate rooftop solar plant capacity, capital expenditure payback period, and 25-year levelized returns.",
    },
    rfq: {
      badge: "On-Site Feasibility Assessment",
      title: "Commercial Site Survey & RFQ Submission",
      subtitle: "Schedule structural load testing and get a detailed electrical BOM for your facility.",
    },
  };

  const current = pageDetails[activePage];

  // If user typed /#admin in the URL bar, show only this simple view:
// If user typed /#admin in the URL bar, show only this simple view:
if (currentHash === "#admin") {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-xl font-bold text-amber-400">Captured Leads</h1>
            <p className="text-xs text-slate-400">Total Submissions: {leads.length}</p>
          </div>
          <button
            onClick={() => { window.location.hash = ""; }}
            className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-slate-300 transition"
          >
            ← Back to Site
          </button>
        </div>

        {/* Selected Lead Details Modal/Card */}
        {selectedLead && (
          <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-mono text-amber-400 block">{selectedLead.id}</span>
                <h2 className="font-semibold text-white text-base">{selectedLead.company || selectedLead.email}</h2>
              </div>
              <button 
                onClick={() => setSelectedLead(null)} 
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded transition"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
              <div>
                <span className="text-slate-500 block text-[11px]">Contact Person:</span>
                <span className="font-medium text-slate-200">{selectedLead.contact || "N/A"}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Email Address:</span>
                <span className="font-medium text-slate-200">{selectedLead.email || "N/A"}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Phone Number:</span>
                <span className="font-medium text-slate-200">{selectedLead.phone || "N/A"}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">City / Location:</span>
                <span className="font-medium text-slate-200">{selectedLead.city || "N/A"}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Target Capacity:</span>
                <span className="font-medium text-slate-200">{selectedLead.systemKw || "N/A"}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Submitted Date:</span>
                <span className="font-medium text-slate-200">{selectedLead.submittedAt || "Recent"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Leads List */}
<div className="space-y-2">
  {leads.length === 0 ? (
    <p className="text-sm text-slate-500 text-center py-8">No leads saved yet.</p>
  ) : (
    leads.map((lead, idx) => (
      <div
        key={lead.id || idx}
        onClick={() => setSelectedLead(lead)}
        className="bg-slate-900 hover:bg-slate-850 border border-slate-850 hover:border-amber-500/40 p-3.5 rounded-lg flex items-center justify-between cursor-pointer transition"
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">{lead.id}</span>
            <p className="text-sm font-semibold text-white">{lead.company || lead.email}</p>
          </div>
          <p className="text-xs text-slate-400">
            {lead.contact ? `${lead.contact} • ` : ""}{lead.email}
          </p>
        </div>

        {/* Date and Time Display */}
        <div className="text-right flex flex-col items-end space-y-1">
          <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60">
            {lead.submittedAt || "Recent"}
          </span>
          <span className="text-xs text-amber-400 group-hover:underline">View details →</span>
        </div>
      </div>
    ))
  )}
</div>

      </div>
    </div>
  );
}

  return (
    <>
      <PageShell
        activePage={activePage}
        setActivePage={setActivePage}
        activeBadge={current.badge}
        pageTitle={current.title}
        pageSubtitle={current.subtitle}
        isDark={isDark}
        setIsDark={setIsDark}
      >
        {activePage === "overview" && (
          <OverviewView
            isDark={isDark}
            onNavigateToEstimator={() => setActivePage("estimator")}
            onNavigateToRfq={() => setActivePage("rfq")}
          />
        )}

        {activePage === "estimator" && <SolarEstimator isDark={isDark} />}

        {activePage === "rfq" && <RfqView isDark={isDark} />}
      </PageShell>

      {/* Floating Admin Trigger Button in Bottom Right */}
      {/*
      <button
        type="button"
        onClick={() => setAdminOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 text-xs shadow-2xl transition cursor-pointer border border-emerald-400/30"
      >
        <ShieldCheck className="h-4 w-4" />
        <span>Leads Portal</span>
      </button>
      */}

      {/* Leads Table Modal */}
      <AdminLeadsModal 
        isOpen={adminOpen} 
        onClose={() => setAdminOpen(false)} 
        isDark={isDark} 
      />
    </>
  );
}