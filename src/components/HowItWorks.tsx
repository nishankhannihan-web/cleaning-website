import React from 'react';
import { MessageSquarePlus, CalendarCheck2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquarePlus,
      title: 'Request Your Free Estimate',
      description:
        'Share your home size, number of bedrooms/bathrooms, preferred service type, and schedule through our WhatsApp estimate form.',
      highlight: 'Direct WhatsApp communication',
    },
    {
      number: '02',
      icon: CalendarCheck2,
      title: 'Confirm Scope & Timing',
      description:
        'We review your requested level of service, agree on specific focus areas, and confirm an arrival window that fits your household routine.',
      highlight: 'Flexible scheduling options',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Enjoy a Fresh, Clean Home',
      description:
        'Our local residential cleaning team arrives prepared with eco-friendly supplies to deliver thorough care backed by our satisfaction guarantee.',
      highlight: 'Eco-friendly products used',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Our Residential Cleaning Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From your first message to a freshly cleaned living space, we make requesting and receiving residential cleaning clear, direct, and hassle-free.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-teal-700 tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6 text-teal-700" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-teal-800">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <a
            href="#estimate"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-xs transition-all"
          >
            <span>Start Step 1: {BUSINESS_INFO.primaryCta}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};
