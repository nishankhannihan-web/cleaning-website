import React from 'react';
import { Home, Sparkles, Droplets, Calendar, ShieldCheck, HeartHandshake, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const SpecialistSection: React.FC = () => {
  const specialtyPillars = [
    {
      icon: Layers,
      title: 'Standard & Deep Cleaning Balance',
      description:
        'Every home is different. Whether your residence requires an initial deep reset to lift buildup or ongoing maintenance to preserve cleanliness, we help you select the exact depth of cleaning required.',
    },
    {
      icon: Calendar,
      title: 'Recurring Service Options',
      description:
        'Flexible weekly, bi-weekly, or monthly cleaning routines designed around your family schedule. Enjoy a predictably fresh home with visits tailored to your household rhythm.',
    },
    {
      icon: Droplets,
      title: 'Kitchens & Bathrooms Focus',
      description:
        'Food preparation areas and washrooms require the highest hygiene standard. We focus dedicated attention on degreasing stovetops, descaling tile grout, and sanitizing fixtures thoroughly.',
    },
    {
      icon: HeartHandshake,
      title: 'Careful Treatment of Your Home',
      description:
        'We respect your private space, flooring materials, delicate countertops, and personal belongings with mindful care and appropriate cleaning techniques throughout every room.',
    },
    {
      icon: ShieldCheck,
      title: 'Flexible Estimate-Based Planning',
      description:
        'No rigid generic packages that charge for unused rooms. Every estimate is customized directly to your property size, requested focus areas, and preferred visit frequency.',
    },
    {
      icon: Home,
      title: 'Local Residential Commitment',
      description:
        `Dedicated to serving residences in ${BUSINESS_INFO.serviceArea} with responsive communication via WhatsApp and dependable service on every scheduled visit.`,
    },
  ];

  return (
    <section id="specialist" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>Residential Cleaning Specialist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thoughtful Cleaning Designed for Occupied Residential Spaces
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Cleaning a home requires more than a checklist; it requires careful respect for living spaces, thoughtful sanitization of high-use zones, and flexible planning that adapts to your routine.
          </p>
        </div>

        {/* 6 Specialist Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtyPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-7 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Home Care Commitment Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Tailored Cleaning for Your Home Layout
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tell us about your bedrooms, bathrooms, and high-traffic areas. We’ll organize an estimate tailored exactly to your home in {BUSINESS_INFO.serviceArea}.
            </p>
          </div>
          <a
            href="#estimate"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-xs transition-colors"
          >
            {BUSINESS_INFO.primaryCta}
          </a>
        </div>

      </div>
    </section>
  );
};
