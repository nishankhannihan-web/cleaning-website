import React from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/cleaningData';

export const ServiceShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>Service Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Representative Residential Living & Care Standards
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Visual examples illustrating the standard of clean, tidy surfaces, sanitized kitchens, refreshed bathrooms, and neat living spaces we aim to deliver.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="p-5 flex items-center justify-between border-t border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Representative residential space imagery
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 text-teal-700">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            *Representative visual photography illustrating typical residential cleaning focus areas and standards.
          </p>
        </div>

      </div>
    </section>
  );
};
