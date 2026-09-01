import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';
import heroImage from '../assets/media/pexels-tima-miroshnichenko-6195103.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
      {/* Subtle background shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-50/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-slate-100/70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Service & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" aria-hidden="true" />
              <span>Residential Cleaning · {BUSINESS_INFO.serviceArea}</span>
            </div>

            {/* Specific Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Reliable Residential Cleaning in{' '}
              <span className="text-teal-700">
                {BUSINESS_INFO.serviceArea}
              </span>{' '}
              Tailored to Your Home & Schedule
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {BUSINESS_INFO.positioning} From thorough standard upkeep and intensive deep cleans to convenient recurring service plans, our local cleaning team delivers dependable care for your residence.
            </p>

            {/* Key Advantages Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                <span>Flexible scheduling options</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                <span>Eco-friendly products used</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                <span>Weekly, bi-weekly & monthly plans</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" aria-hidden="true" />
                <span>Satisfaction guarantee on visits</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 text-center"
              >
                <Sparkles className="w-5 h-5 text-teal-200" aria-hidden="true" />
                <span>{BUSINESS_INFO.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-4 rounded-xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 font-semibold text-sm sm:text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

            {/* Reassurance note */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <span>✓ WhatsApp estimate requests sent directly to our local team at {BUSINESS_INFO.phone}</span>
            </p>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src={heroImage}
                  alt="Spotless residential living room after professional residential cleaning visit"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Graceful fallback without broken UI
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Floating Service Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                        Residential Focus
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        One-Time Visits & Recurring Plans
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 rounded-lg text-slate-700">
                      {BUSINESS_INFO.serviceArea}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
