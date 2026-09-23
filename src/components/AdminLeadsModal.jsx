import React, { useState, useEffect } from "react";
import { X, Trash2, Download, Users } from "lucide-react";

export const AdminLeadsModal = ({ isOpen, onClose, isDark }) => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const saved = JSON.parse(localStorage.getItem("solar_leads") || "[]");
      setLeads(saved);
    }
  }, [isOpen]);

  const clearLeads = () => {
    if (window.confirm("Delete all captured inquiries?")) {
      localStorage.removeItem("solar_leads");
      setLeads([]);
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["Type", "Company", "Contact", "Email", "Phone", "Location", "Capacity", "Date"];
    const rows = leads.map(l => [
      `"${l.type || 'Quick Feasibility'}"`,
      `"${l.company || 'N/A'}"`,
      `"${l.contact || 'N/A'}"`,
      `"${l.email}"`,
      `"${l.phone || 'N/A'}"`,
      `"${l.city || 'N/A'}"`,
      `"${l.systemKw}"`,
      `"${l.submittedAt}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `solar_inquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className={`w-full max-w-4xl rounded-3xl border p-6 shadow-2xl transition-all ${
        isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-[#FAF7F2] border-amber-900/20 text-stone-900"
      }`}>
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/20">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-emerald-500" />
            <h3 className="text-lg font-black tracking-tight">Enterprise Leads & RFQ Submissions</h3>
            <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {leads.length} Records
            </span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="my-4 max-h-96 overflow-y-auto rounded-xl border border-slate-200/30">
          {leads.length === 0 ? (
            <div className="p-8 text-center text-xs opacity-60">No inquiries recorded yet. Submit either the Quick Calc or RFQ Survey form to populate this table!</div>
          ) : (
            <table className="w-full text-left text-xs">
              <thead className={isDark ? "bg-slate-950 text-slate-400" : "bg-[#EFE8DC] text-stone-700"}>
                <tr>
                  <th className="p-3">Type</th>
                  <th className="p-3">Company / Client</th>
                  <th className="p-3">Email & Phone</th>
                  <th className="p-3">Capacity</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/20">
                {leads.map((lead, idx) => (
                  <tr key={lead.id || idx} className="hover:bg-emerald-500/5">
                    <td className="p-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        lead.type === "Full RFQ Survey" ? "bg-blue-500/20 text-blue-500" : "bg-emerald-500/20 text-emerald-500"
                      }`}>
                        {lead.type || "Quick Calc"}
                      </span>
                    </td>
                    <td className="p-3 font-semibold">
                      {lead.company ? (
                        <div>
                          <div>{lead.company}</div>
                          <div className="text-[10px] opacity-75">{lead.contact}</div>
                        </div>
                      ) : (
                        <span className="opacity-50">Quick Lead</span>
                      )}
                    </td>
                    <td className="p-3">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400">{lead.email}</div>
                      {lead.phone && <div className="text-[10px] opacity-75">{lead.phone}</div>}
                    </td>
                    <td className="p-3 font-semibold">{lead.systemKw || `${lead.systemKw} kW`}</td>
                    <td className="p-3 opacity-75">{lead.city || "—"}</td>
                    <td className="p-3 text-[10px] opacity-60">{lead.submittedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            onClick={clearLeads}
            disabled={leads.length === 0}
            className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 disabled:opacity-40 cursor-pointer"
          >
            <Trash2 className="h-4 w-4" /> Clear All
          </button>

          <button
            onClick={exportCSV}
            disabled={leads.length === 0}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 text-xs disabled:opacity-40 cursor-pointer shadow-sm"
          >
            <Download className="h-4 w-4" /> Export CSV (Excel)
          </button>
        </div>
      </div>
    </div>
  );
};