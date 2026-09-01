import React from 'react';
import { MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

export const ServiceAreaSection: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>Dedicated Service Area</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serving Residences in {BUSINESS_INFO.serviceArea}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            PureNest Cleaning is dedicated to delivering reliable residential cleaning across {BUSINESS_INFO.serviceArea}. We bring our cleaning supplies and attention to detail directly to your doorstep.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" aria-hidden="true" />
              <span>Residential homes & apartments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" aria-hidden="true" />
              <span>Flexible scheduling windows</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" aria-hidden="true" />
              <span>Direct WhatsApp communication</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#estimate"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-xs transition-colors"
            >
              {BUSINESS_INFO.primaryCta}
            </a>
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors"
            >
              Check Availability on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
