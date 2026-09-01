import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick popup tooltip */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 text-xs animate-fadeIn relative">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-slate-900 text-sm mb-1">
            Need a Quick Estimate?
          </p>
          <p className="text-slate-600 mb-2 leading-relaxed">
            Message PureNest Cleaning directly on WhatsApp for prompt residential cleaning assistance in {BUSINESS_INFO.serviceArea}.
          </p>
          <a
            href={getDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-teal-700 hover:text-teal-800"
          >
            <span>Open WhatsApp Chat</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getDirectWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
        aria-label={`Chat directly with PureNest Cleaning on WhatsApp at ${BUSINESS_INFO.phone}`}
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
        <span className="text-xs sm:text-sm font-bold pr-1 hidden sm:inline">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
