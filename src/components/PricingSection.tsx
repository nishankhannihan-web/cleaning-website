import React from 'react';
import { Tag, ArrowRight, Check, HelpCircle } from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/cleaningData';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>Transparent Pricing Policy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fair, Home-Tailored Estimates
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every home in {BUSINESS_INFO.serviceArea} is unique in square footage, room count, and current condition. We provide transparent estimates based on your exact layout rather than generic flat rates.
          </p>
        </div>

        {/* Pricing Guide Table / Card Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden mb-12">
          <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Residential Cleaning Services & Starting Price Guide
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Prices tailored to property size, bedrooms, bathrooms, and visit frequency.
              </p>
            </div>
            <a
              href="#estimate"
              className="shrink-0 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Get Your Custom Estimate
            </a>
          </div>

          <div className="divide-y divide-slate-100">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                className="p-6 sm:p-7 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                      0{index + 1}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">
                      {service.name}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center md:flex-col md:items-end justify-between gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                  <div className="text-left md:text-right">
                    <span className="text-xs text-slate-500 block">Starting price</span>
                    <span className="text-base font-bold text-teal-700">
                      {service.startingPrice}
                    </span>
                  </div>
                  <a
                    href="#estimate"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-700 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Estimate-Based Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <Check className="w-5 h-5 text-teal-600 shrink-0" aria-hidden="true" />
              <span>What Shapes Your Estimate</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>• Total square footage and layout configuration</li>
              <li>• Number of active bedrooms and bathrooms</li>
              <li>• Selected depth (Standard maintenance vs. Intensive Deep clean)</li>
              <li>• Frequency (One-time visit vs. weekly/bi-weekly recurring plans)</li>
              <li>• Optional add-ons (oven, refrigerator, interior windows)</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
              <HelpCircle className="w-5 h-5 text-teal-600 shrink-0" aria-hidden="true" />
              <span>Recurring Service Plan Benefits</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Setting up a recurring cleaning schedule (weekly, bi-weekly, or monthly) keeps your home consistently fresh and allows our team to maintain surfaces effortlessly, saving you time and effort every month.
            </p>
            <div className="pt-2">
              <a
                href="#estimate"
                className="text-xs font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1"
              >
                <span>Check recurring options in estimate flow</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
