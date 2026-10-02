import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Specialist Care', href: '#specialist' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing Guide', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 xl:gap-8">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex flex-col shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg py-1"
          >
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight whitespace-nowrap">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-xs font-semibold text-teal-700 tracking-wider uppercase leading-none mt-0.5 whitespace-nowrap">
              {BUSINESS_INFO.serviceType}
            </span>
          </a>

          {/* Desktop Navigation Links (Services → Specialist Care → Showcase → How It Works → Pricing Guide → Gallery → Service Area → FAQ) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap hover:text-teal-700 transition-colors py-1.5 focus:outline-none focus-visible:text-teal-700"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Get Estimate) */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-1.5 h-10 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold shadow-xs hover:shadow-sm transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
              aria-label="Toggle main menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-1 divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100">
            <a
              href="#estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-xs flex items-center justify-center gap-2"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
