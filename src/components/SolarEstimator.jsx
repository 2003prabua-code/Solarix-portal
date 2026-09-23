import React, { useState, useMemo } from "react";
import { Zap, TrendingUp, Calendar, Building2, CheckCircle2, ArrowRight, Leaf, Sparkles, Clock } from "lucide-react";

export const SolarEstimator = ({ isDark }) => {
  const [monthlyBill, setMonthlyBill] = useState(45000);
  const [roofArea, setRoofArea] = useState(4000);
  const [tariffRate, setTariffRate] = useState(8.5);
  const [timelineYears, setTimelineYears] = useState(25);

  const [emailInput, setEmailInput] = useState("");
  const [leadSent, setLeadSent] = useState(false);

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    const existingLeads = JSON.parse(localStorage.getItem("solar_leads") || "[]");
    const newLead = {
      id: `LEAD-${Date.now()}`,
      email: emailInput.trim(),
      submittedAt: new Date().toLocaleString(),
      systemKw: stats.recommendedKw,
      netCost: stats.netCost,
      annualSavings: stats.annualSavings,
      paybackYears: stats.paybackYears,
      projectedReturn: stats.totalHorizonSavings,
      timelineYears: timelineYears,
    };

    localStorage.setItem("solar_leads", JSON.stringify([...existingLeads, newLead]));
    setLeadSent(true);
  };

  const presets = [
    { label: "Workshop", bill: 30000, area: 2500, rate: 8.5 },
    { label: "Cold Storage", bill: 110000, area: 9000, rate: 9.0 },
    { label: "Textile Mill", bill: 240000, area: 18000, rate: 8.0 },
  ];

  const applyPreset = (preset) => {
    setMonthlyBill(preset.bill);
    setRoofArea(preset.area);
    setTariffRate(preset.rate);
  };

  const stats = useMemo(() => {
    const monthlyUnits = monthlyBill / tariffRate;
    const dailyUnits = monthlyUnits / 30;
    const idealKw = dailyUnits / 4.2;
    const maxRoofKw = roofArea / 90;
    const recommendedKw = Math.round(Math.min(idealKw, maxRoofKw) * 10) / 10;

    const costPerKw = 46000;
    const grossCost = Math.round(recommendedKw * costPerKw);
    const subsidy = Math.round(grossCost * 0.15);
    const netCost = grossCost - subsidy;

    const annualSavings = Math.round(recommendedKw * 4.2 * 365 * tariffRate);
    const paybackYears = annualSavings > 0 ? (netCost / annualSavings).toFixed(1) : 0;
    const totalHorizonSavings = Math.round((annualSavings * timelineYears) - netCost);
    const co2SavedTons = Math.round(recommendedKw * 1.2 * timelineYears);

    // Dynamic steps based on chosen timelineYears
    const stepCount = 5;
    const stepSize = Math.round(timelineYears / stepCount);
    const steps = [0];
    for (let i = 1; i < stepCount; i++) {
      steps.push(i * stepSize);
    }
    steps.push(timelineYears);

    const projection = steps.map((year) => ({
      year,
      value: Math.round((annualSavings * year) - netCost),
    }));

    return { recommendedKw, netCost, annualSavings, paybackYears, totalHorizonSavings, co2SavedTons, projection };
  }, [monthlyBill, roofArea, tariffRate, timelineYears]);

  const formatINR = (val) => new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(val);

  const chartPoints = useMemo(() => {
    const minVal = -stats.netCost;
    const maxVal = Math.max(stats.totalHorizonSavings, 100000);
    const range = maxVal - minVal || 1;
    const width = 500;
    const height = 180;
    const padding = 24;

    return stats.projection.map((pt, idx) => {
      const x = padding + (idx / (stats.projection.length - 1)) * (width - padding * 2);
      const normalizedY = (pt.value - minVal) / range;
      const y = height - padding - normalizedY * (height - padding * 2);
      return { ...pt, x, y };
    });
  }, [stats]);

  const svgPathString = useMemo(() => {
    if (!chartPoints.length) return "";
    return chartPoints.reduce((acc, curr, idx) => (idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`), "");
  }, [chartPoints]);

  const cardClass = isDark 
    ? "bg-slate-900 border-slate-800 text-white" 
    : "bg-[#F4EFE6] border-amber-900/15 text-stone-900";

  const labelClass = isDark ? "text-slate-300 font-semibold" : "text-stone-800 font-bold";

  return (
    <div id="calculator" className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-5">
        <div className={`rounded-2xl border p-6 shadow-sm transition-colors duration-200 ${cardClass}`}>
          
          <div className="flex items-center justify-between pb-4 border-b border-amber-900/10 dark:border-slate-800">
            <h2 className="text-base font-bold flex items-center gap-2">
              <Building2 className="h-5 w-5 text-emerald-600" />
              Facility Parameters
            </h2>
            <span className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20">
              Live Calc
            </span>
          </div>

          {/* Presets */}
          <div className="mt-4 flex items-center gap-2 text-xs">
            <span className={`flex items-center gap-1 font-semibold ${isDark ? "text-slate-300" : "text-stone-700"}`}>
              <Sparkles className="h-3 w-3 text-amber-500" /> Presets:
            </span>
            {presets.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => applyPreset(p)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                  isDark 
                    ? "border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700" 
                    : "border-amber-900/15 bg-[#EAE2D2] text-stone-900 hover:bg-[#DFD4C0]"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className={labelClass}>Monthly Power Bill</span>
                <span className="font-extrabold text-base">₹{formatINR(monthlyBill)}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="300000"
                step="2500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-stone-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className={labelClass}>Usable Rooftop Space</span>
                <span className="font-extrabold text-base">{formatINR(roofArea)} sq. ft</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="250"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-2 bg-stone-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className={labelClass}>Grid Tariff Rate</span>
                <span className="font-extrabold text-base">₹{tariffRate}/unit</span>
              </div>
              <input
                type="range"
                min="6"
                max="14"
                step="0.5"
                value={tariffRate}
                onChange={(e) => setTariffRate(Number(e.target.value))}
                className="w-full h-2 bg-stone-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          </div>
        </div>

        {/* Lock Feasibility Box (Themed & Functional) */}
        <div className={`rounded-2xl border p-5 shadow-md transition-colors duration-200 ${
          isDark ? "bg-slate-900 border-slate-800 text-white" : "bg-[#F4EFE6] border-amber-900/15 text-stone-900"
        }`}>
          <h3 className="text-sm font-bold flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            Lock In This Feasibility
          </h3>
          <p className={`mt-1 text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-stone-700 font-medium"}`}>
            Get an official detailed structural shading report and vendor bill of materials (BOM).
          </p>

          {leadSent ? (
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>Feasibility report queued for <strong>{emailInput}</strong></span>
              </div>
              <button 
                type="button" 
                onClick={() => { setLeadSent(false); setEmailInput(""); }} 
                className="text-[11px] underline font-bold hover:text-emerald-700 dark:hover:text-emerald-300 ml-2 cursor-pointer"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="mt-4 flex gap-2">
              <input 
                type="email" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter corporate email..."
                className={`w-full rounded-xl px-3 py-2 text-xs focus:outline-none border font-medium ${
                  isDark 
                    ? "bg-slate-950 text-white placeholder-slate-500 border-slate-800 focus:border-emerald-500" 
                    : "bg-white text-stone-900 placeholder-stone-400 border-amber-900/20 focus:border-emerald-600"
                }`}
              />
              <button 
                type="submit"
                className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition cursor-pointer shadow-sm shrink-0"
              >
                <span>Send</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="space-y-6 lg:col-span-7">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className={`rounded-2xl border p-4 shadow-sm transition-colors duration-200 ${cardClass}`}>
            <div className={`text-xs flex items-center gap-1 ${labelClass}`}>
              <Zap className="h-3.5 w-3.5 text-amber-500" /> System Size
            </div>
            <div className="mt-2 text-2xl font-black">
              {stats.recommendedKw} <span className="text-xs font-semibold opacity-70">kW</span>
            </div>
          </div>

          <div className={`rounded-2xl border p-4 shadow-sm transition-colors duration-200 ${cardClass}`}>
            <div className={`text-xs flex items-center gap-1 ${labelClass}`}>
              <Calendar className="h-3.5 w-3.5 text-blue-500" /> Payback
            </div>
            <div className="mt-2 text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {stats.paybackYears} <span className="text-xs font-semibold opacity-70">Yrs</span>
            </div>
          </div>

          <div className={`col-span-2 sm:col-span-1 rounded-2xl border p-4 shadow-sm transition-colors duration-200 ${cardClass}`}>
            <div className={`text-xs flex items-center gap-1 ${labelClass}`}>
              <TrendingUp className="h-3.5 w-3.5 text-emerald-500" /> {timelineYears}-Yr Return
            </div>
            <div className="mt-2 text-2xl font-black">
              ₹{formatINR(stats.totalHorizonSavings)}
            </div>
          </div>
        </div>

        <div className={`rounded-2xl border p-6 shadow-sm transition-colors duration-200 ${cardClass}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-sm font-black">Cumulative Net Cash Flow ({timelineYears} Years)</h3>
              <p className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-stone-600"}`}>
                Zero-lag native SVG vector projection
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Timeline Years Expansion Buttons */}
              <div className="flex items-center gap-1 text-xs">
                <Clock className="h-3.5 w-3.5 text-emerald-600" />
                {[15, 20, 25, 30].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setTimelineYears(yr)}
                    className={`px-2 py-0.5 rounded-lg text-xs font-bold transition cursor-pointer border ${
                      timelineYears === yr
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                        : isDark
                          ? "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
                          : "bg-[#EAE2D2] text-stone-800 border-amber-900/15 hover:bg-[#DFD4C0]"
                    }`}
                  >
                    {yr}Y
                  </button>
                ))}
              </div>

              {/* High Contrast Bold Net Cost */}
              <div className={`text-xs font-bold px-3 py-1.5 rounded-xl border ${
                isDark 
                  ? "bg-slate-800 text-emerald-400 border-slate-700" 
                  : "bg-[#E5DCCB] text-stone-950 border-amber-900/20"
              }`}>
                Net Cost: <span className="font-extrabold text-slate-900 dark:text-white">₹{formatINR(stats.netCost)}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden pt-2">
            <svg viewBox="0 0 500 180" className="w-full h-44 overflow-visible">
              <line x1="24" y1="140" x2="476" y2="140" stroke={isDark ? "#334155" : "#C4B59D"} strokeDasharray="4 4" strokeWidth="1.5" />
              <path d={svgPathString} fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              {chartPoints.map((pt) => (
                <g key={pt.year}>
                  <circle 
                    cx={pt.x} 
                    cy={pt.y} 
                    r="5" 
                    className={isDark ? "fill-slate-900 stroke-emerald-400 stroke-2" : "fill-[#FAF7F2] stroke-emerald-600 stroke-2"} 
                  />
                  <text 
                    x={pt.x} 
                    y={168} 
                    textAnchor="middle" 
                    fill={isDark ? "#cbd5e1" : "#1c1917"} 
                    fontSize="11" 
                    fontWeight="700"
                  >
                    Yr {pt.year}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="mt-4 pt-4 border-t border-amber-900/10 dark:border-slate-800 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
              <Leaf className="h-3.5 w-3.5" /> Offsets ~{stats.co2SavedTons} Tons CO₂
            </span>
            <span className={`font-semibold ${isDark ? "text-slate-400" : "text-stone-700"}`}>
              Est. Annual Yield: {formatINR(stats.recommendedKw * 1530)} kWh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};