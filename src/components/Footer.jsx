import React from "react";
import { siteConfig } from "../config/siteConfig";

export const Footer = ({ isDark }) => {
  const Logo = siteConfig.logoIcon;

  return (
    <footer className={`border-t mt-16 transition-colors duration-200 ${
      isDark 
        ? "border-slate-800 bg-slate-950 text-slate-400" 
        : "border-amber-900/10 bg-[#F4EFE6] text-stone-600"
    }`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-emerald-600 text-white">
                <Logo className="h-4 w-4" />
              </div>
              <span className={`font-bold ${isDark ? "text-white" : "text-stone-900"}`}>
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs">{siteConfig.tagline}</p>
            <p className="text-xs opacity-75">{siteConfig.contact.address}</p>
          </div>

          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-200" : "text-stone-900"}`}>
              Contact
            </h4>
            <p className="mt-2 text-xs">{siteConfig.contact.phone}</p>
            <p className="text-xs">{siteConfig.contact.email}</p>
          </div>

          <div>
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-200" : "text-stone-900"}`}>
              Standard
            </h4>
            <p className="mt-2 text-xs text-emerald-600 font-medium">• {siteConfig.badgeText}</p>
            <p className="text-xs opacity-75 mt-1">Tier-1 Bloomberg NEF Inverters & PV Modules</p>
          </div>
        </div>

        <div className={`mt-8 border-t pt-6 text-center text-xs ${
          isDark ? "border-slate-800/80 text-slate-500" : "border-amber-900/10 text-stone-500"
        }`}>
          © {new Date().getFullYear()} {siteConfig.name}. All enterprise rights reserved.
        </div>
      </div>
    </footer>
  );
};