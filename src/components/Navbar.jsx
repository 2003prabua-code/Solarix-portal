import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

export const Navbar = ({ activePage, setActivePage, isDark, setIsDark }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const Logo = siteConfig.logoIcon;

  const navItems = [
    { id: "overview", label: "Overview & Case Studies" },
    { id: "estimator", label: "ROI Estimator" },
    { id: "rfq", label: "Request Survey & RFQ" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 ${
      isDark 
        ? "border-slate-800 bg-slate-950/90 text-white backdrop-blur-md" 
        : "border-amber-900/10 bg-[#FAF7F2]/90 text-stone-900 backdrop-blur-md"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <button 
          type="button"
          onClick={() => setActivePage("overview")} 
          className="flex items-center gap-2.5 text-left cursor-pointer focus:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <Logo className="h-5 w-5" />
          </div>
          <div>
            <span className={`text-base font-bold tracking-tight block leading-tight ${isDark ? "text-white" : "text-stone-900"}`}>
              {siteConfig.name}
            </span>
            <span className="hidden sm:block text-xs text-emerald-600 font-medium">
              {siteConfig.badgeText}
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePage(item.id)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition cursor-pointer ${
                  isActive
                    ? isDark 
                      ? "bg-slate-800 text-emerald-400 border border-slate-700" 
                      : "bg-[#EFE8DC] text-emerald-800 border border-amber-900/10"
                    : isDark 
                      ? "text-slate-400 hover:text-white hover:bg-slate-900" 
                      : "text-stone-600 hover:text-stone-950 hover:bg-[#F2ECE1]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA + Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className={`p-2 rounded-xl border transition cursor-pointer ${
              isDark 
                ? "border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800" 
                : "border-amber-900/10 bg-[#EFE8DC] text-stone-700 hover:bg-[#E8DFCF]"
            }`}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setActivePage("rfq")}
            className="hidden items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 cursor-pointer sm:inline-flex"
          >
            <span>Request RFQ</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex rounded-xl p-2 text-stone-700 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className={`border-b px-4 py-4 md:hidden flex flex-col gap-2 ${
          isDark ? "border-slate-800 bg-slate-950" : "border-amber-900/10 bg-[#FAF7F2]"
        }`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActivePage(item.id);
                setMobileOpen(false);
              }}
              className={`text-left text-sm font-medium py-2 px-3 rounded-lg ${
                activePage === item.id 
                  ? "bg-emerald-600 text-white" 
                  : isDark ? "text-slate-300" : "text-stone-700"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setActivePage("rfq");
              setMobileOpen(false);
            }}
            className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-2.5 text-xs font-semibold text-white shadow"
          >
            <span>Request RFQ</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
