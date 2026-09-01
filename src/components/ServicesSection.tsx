import React from 'react';
import { ArrowRight, Check, Sparkles, Clock, Repeat } from 'lucide-react';
import { SERVICES_DATA } from '../data/cleaningData';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>Residential Cleaning Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Cleaning Tailored to Your Residence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you need a thorough single visit, intensive deep cleaning, or an ongoing recurring schedule, our team delivers consistent care across every room.
          </p>
        </div>

        {/* Frequency Comparison Explanation Banner */}
        <div className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-lg">
                <Clock className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <span>One-Time Cleaning Visits</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ideal for first-time visits, seasonal deep cleaning, event preparations, or when your home simply needs a complete, detailed reset on demand.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-lg">
                <Repeat className="w-5 h-5 text-teal-600" aria-hidden="true" />
                <span>Recurring Service Plans</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose weekly, bi-weekly, or monthly cleaning routines. Enjoy continuous home freshness and reliable schedule slots tailored to your household.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Service Cards in Exact Source of Truth Order */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              className={`bg-white rounded-2xl border ${
                service.isPopular
                  ? 'border-teal-500 shadow-md ring-1 ring-teal-500'
                  : 'border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm'
              } flex flex-col overflow-hidden transition-all duration-200`}
            >
              {/* Service Card Image */}
              {service.image && (
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={`${service.name} for residential homes`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Service 0{index + 1}
                  </div>
                  {service.isPopular && (
                    <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      Popular Choice
                    </div>
                  )}
                </div>
              )}

              {/* Service Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {service.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-semibold text-slate-500 block">Starting price:</span>
                      <span className="text-sm font-bold text-teal-700">{service.startingPrice}</span>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-teal-800 bg-teal-50/70 px-2.5 py-1 rounded-md inline-block">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2 space-y-2">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Included in this service:
                    </p>
                    <ul className="space-y-1.5">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer with CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <p className="text-xs text-slate-500 italic">
                    Best for: {service.recommendedFor}
                  </p>
                  <a
                    href="#estimate"
                    onClick={() => onSelectService && onSelectService(service.name)}
                    className={`mt-2 w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors ${
                      service.isPopular
                        ? 'bg-teal-700 hover:bg-teal-800 text-white'
                        : 'bg-slate-100 hover:bg-teal-700 hover:text-white text-slate-800'
                    }`}
                  >
                    <span>Request Estimate for {service.name}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
