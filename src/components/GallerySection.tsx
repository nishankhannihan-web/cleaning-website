import React, { useState } from 'react';
import { Sparkles, Images, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/cleaningData';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>('');

  return (
    <section id="gallery" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <Images className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
            <span>Interior Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Residential Living Spaces & Clean Interiors
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Representative imagery showcasing clean kitchen surfaces, tidy bedrooms, sparkling bathrooms, and cared-for living environments.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-4/3 cursor-pointer shadow-2xs hover:shadow-md transition-all duration-300"
              onClick={() => {
                setSelectedImage(image.src);
                setSelectedImageAlt(image.alt);
                setSelectedImageTitle(image.title);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(image.src);
                  setSelectedImageAlt(image.alt);
                  setSelectedImageTitle(image.title);
                }
              }}
              aria-label={`View ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                  {image.category}
                </span>
                <p className="text-sm font-bold text-white mt-0.5">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
                <img
                  src={selectedImage}
                  alt={selectedImageAlt}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-base font-bold text-white">
                  {selectedImageTitle}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Representative photography of residential living environments.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            *Visuals presented are representative residential environment imagery illustrating general cleanliness standards.
          </p>
        </div>

      </div>
    </section>
  );
};
