import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14B8A6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950 border border-teal-800 text-teal-300 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
          <span>PureNest Cleaning · {BUSINESS_INFO.serviceArea}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Experience a Cleaner, Fresher Home?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Request your free residential cleaning estimate today. Our local team will review your home details and respond promptly with a clear, tailored plan.
        </p>

        {/* Factual reassurance bullets */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Satisfaction guarantee
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Eco-friendly products
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Flexible scheduling
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-400" />
            Recurring service plans
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#estimate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
          >
            <span>{BUSINESS_INFO.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={getDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm sm:text-base transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-slate-400">
          Direct WhatsApp: {BUSINESS_INFO.phone} · Service Area: {BUSINESS_INFO.serviceArea}
        </p>

      </div>
    </section>
  );
};
