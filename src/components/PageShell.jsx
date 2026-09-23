import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const PageShell = ({ 
  children, 
  activeBadge, 
  pageTitle, 
  pageSubtitle, 
  activePage, 
  setActivePage,
  isDark,
  setIsDark
}) => {
  return (
    <div className={`min-h-screen flex flex-col antialiased transition-colors duration-200 ${
      isDark ? "bg-slate-950 text-slate-100" : "bg-[#FAF7F2] text-stone-900"
    }`}>
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDark={isDark} 
        setIsDark={setIsDark} 
      />

      <main className="flex-1">
        {pageTitle && (
          <section className={`border-b transition-colors duration-200 py-8 ${
            isDark ? "border-slate-800 bg-slate-900/60" : "border-amber-900/10 bg-[#F4EFE6]"
          }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {activeBadge && (
                <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  {activeBadge}
                </span>
              )}
              <h1 className={`text-2xl font-black tracking-tight sm:text-3xl ${
                isDark ? "text-white" : "text-stone-900"
              }`}>
                {pageTitle}
              </h1>
              {pageSubtitle && (
                <p className={`mt-2 text-sm max-w-2xl ${
                  isDark ? "text-slate-400" : "text-stone-600"
                }`}>
                  {pageSubtitle}
                </p>
              )}
            </div>
          </section>
        )}

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
};
