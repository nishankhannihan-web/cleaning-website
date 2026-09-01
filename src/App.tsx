import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { SpecialistSection } from './components/SpecialistSection';
import { ServiceShowcase } from './components/ServiceShowcase';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { GallerySection } from './components/GallerySection';
import { EstimateCalculator } from './components/EstimateCalculator';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Standard Cleaning');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const estimateElem = document.getElementById('estimate');
    if (estimateElem) {
      estimateElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* 1. Header */}
      <Header />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. Compact trust or value strip */}
        <TrustStrip />

        {/* 4. Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Cleaning-specialist section */}
        <SpecialistSection />

        {/* 6. Results gallery or service showcase */}
        <ServiceShowcase />

        {/* 7. How the service works */}
        <HowItWorks />

        {/* 8. Pricing */}
        <PricingSection />

        {/* 9. Gallery */}
        <GallerySection />

        {/* 10. Guided estimate request */}
        <EstimateCalculator initialService={selectedService} />

        {/* 11. Service area */}
        <ServiceAreaSection />

        {/* 12. FAQ */}
        <FaqSection />

        {/* 13. Final CTA */}
        <FinalCta />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Direct Floating WhatsApp Action */}
      <WhatsAppFloatingButton />
    </div>
  );
}
