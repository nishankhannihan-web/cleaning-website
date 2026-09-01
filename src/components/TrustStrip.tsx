import React from 'react';
import { ShieldCheck, Leaf, CalendarCheck, Repeat } from 'lucide-react';
import { ALLOWED_FACTUAL_CLAIMS } from '../data/cleaningData';

export const TrustStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-700" aria-hidden="true" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-emerald-600" aria-hidden="true" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-blue-600" aria-hidden="true" />;
      case 'Repeat':
        return <Repeat className="w-6 h-6 text-teal-600" aria-hidden="true" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-teal-700" aria-hidden="true" />;
    }
  };

  return (
    <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ALLOWED_FACTUAL_CLAIMS.map((claim, index) => (
            <div
              key={index}
              className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50"
            >
              <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-teal-400 shrink-0">
                {getIcon(claim.iconName)}
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-slate-100 tracking-tight">
                  {claim.title}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {claim.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
