import React, { useState } from 'react';
import { Sparkles, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';
import { getDirectWhatsAppUrl } from '../utils/whatsapp';

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
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 xl:gap-6">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-slate-900 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg xl:text-xl font-bold tracking-tight text-slate-900 leading-tight whitespace-nowrap">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] xl:text-xs font-semibold text-teal-700 tracking-wider uppercase leading-none mt-0.5 whitespace-nowrap">
                {BUSINESS_INFO.serviceType}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Services → Specialist Care → Showcase → How It Works → Pricing Guide → Gallery → Service Area → FAQ) */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-[13px] 2xl:text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap hover:text-teal-700 transition-colors py-1.5 px-1 focus:outline-none focus-visible:text-teal-700"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (WhatsApp Us → Get Estimate) */}
          <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3 shrink-0">
            {/* WhatsApp Us Button */}
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-10 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs 2xl:text-sm font-semibold shadow-xs hover:shadow-sm transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={`Contact PureNest Cleaning on WhatsApp at ${BUSINESS_INFO.phone}`}
            >
              <MessageCircle className="w-4 h-4 fill-white/20 text-white shrink-0" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>

            {/* Get Estimate Button */}
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-1.5 h-10 px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs 2xl:text-sm font-semibold shadow-xs hover:shadow-sm transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Medium Desktop (lg to xl) condensed layout to prevent any wrapping or overflow */}
          <div className="hidden lg:flex xl:hidden items-center gap-2">
            <nav className="flex items-center gap-2.5 text-xs font-medium text-slate-600 mr-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap hover:text-teal-700 transition-colors py-1 px-0.5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white/20 text-white" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-1 h-9 px-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold whitespace-nowrap"
              >
                <span>Get Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20 text-white" />
              <span>WhatsApp Us</span>
            </a>
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

          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 text-white" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
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
