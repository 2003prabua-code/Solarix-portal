import React from 'react';
import { Star, Quote } from 'lucide-react';
import { CLIENT_REVIEWS } from '../data/solarData';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block">Verified Performance</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Proven Results Across Residential & Industrial Grids</h2>
          <p className="text-sm text-slate-500">Read authentic reviews from homeowners and plant directors across Tamil Nadu.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-11 h-11 rounded-full object-cover border border-slate-200" 
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">{review.name}</h4>
                  <div className="text-[11px] text-slate-500">{review.role} • {review.location}</div>
                  <div className="text-[11px] font-bold text-emerald-700 font-mono mt-0.5">{review.system}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}