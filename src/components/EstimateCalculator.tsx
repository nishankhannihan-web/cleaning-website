import React, { useState } from 'react';
import {
  Sparkles,
  MessageCircle,
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Info,
  Building,
  Calendar,
  User,
  Phone,
  MapPin,
  FileText,
} from 'lucide-react';
import { EstimateFormData } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/cleaningData';
import { createWhatsAppEstimateUrl } from '../utils/whatsapp';

interface EstimateCalculatorProps {
  initialService?: string;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ initialService }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<EstimateFormData>({
    serviceType: initialService || 'Standard Cleaning',
    frequency: 'one-time',
    propertyType: 'Single Family Home',
    bedrooms: '3 Bedrooms',
    bathrooms: '2 Bathrooms',
    approxSqFt: '1,500 - 2,200 sq ft',
    currentCondition: 'Standard Upkeep',
    preferredDate: '',
    fullName: '',
    phone: '',
    serviceAddress: `Austin, Texas`,
    petsOrAccess: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const propertyTypes = ['Single Family Home', 'Apartment', 'Condo / Townhome', 'Other Residence'];
  const bedroomOptions = ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'];
  const bathroomOptions = ['1 Bathroom', '1.5 - 2 Bathrooms', '2.5 - 3 Bathrooms', '3.5 - 4+ Bathrooms'];
  const sqFtOptions = ['Under 1,000 sq ft', '1,000 - 1,800 sq ft', '1,800 - 2,800 sq ft', '2,800+ sq ft'];
  const conditionOptions = [
    'Standard Upkeep (Regularly maintained)',
    'Moderate Buildup (Needs thorough refresh)',
    'Intensive Reset (Heavy grime or post-event)',
  ];

  const updateField = (field: keyof EstimateFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a cleaning service.';
    } else if (step === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name.';
      if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone or WhatsApp number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      const waUrl = createWhatsAppEstimateUrl(formData);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="estimate" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-900/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-slate-800/40 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-800/60 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" aria-hidden="true" />
            <span>Guided Estimate Request</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get Your Free Cleaning Estimate
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Customize your home details in 3 simple steps. When complete, your estimate request is sent directly to our team on WhatsApp ({BUSINESS_INFO.phone}).
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="mb-10 bg-slate-800/60 border border-slate-700/70 rounded-2xl p-4 flex items-center justify-between">
          <div
            className={`flex items-center gap-2.5 text-xs sm:text-sm font-semibold ${
              currentStep === 1 ? 'text-teal-400' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                currentStep >= 1 ? 'bg-teal-700 text-white' : 'bg-slate-700 text-slate-300'
              }`}
            >
              1
            </span>
            <span className="hidden sm:inline">Service & Frequency</span>
          </div>

          <div className="h-0.5 w-8 sm:w-16 bg-slate-700">
            <div
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: currentStep >= 2 ? '100%' : '0%' }}
            />
          </div>

          <div
            className={`flex items-center gap-2.5 text-xs sm:text-sm font-semibold ${
              currentStep === 2 ? 'text-teal-400' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                currentStep >= 2 ? 'bg-teal-700 text-white' : 'bg-slate-700 text-slate-300'
              }`}
            >
              2
            </span>
            <span className="hidden sm:inline">Home & Scope</span>
          </div>

          <div className="h-0.5 w-8 sm:w-16 bg-slate-700">
            <div
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: currentStep >= 3 ? '100%' : '0%' }}
            />
          </div>

          <div
            className={`flex items-center gap-2.5 text-xs sm:text-sm font-semibold ${
              currentStep === 3 ? 'text-teal-400' : 'text-slate-400'
            }`}
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                currentStep >= 3 ? 'bg-teal-700 text-white' : 'bg-slate-700 text-slate-300'
              }`}
            >
              3
            </span>
            <span className="hidden sm:inline">Contact & Send</span>
          </div>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md"
        >
          {/* STEP 1: Service & Frequency */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Step 1: Choose Your Cleaning Service & Frequency
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Select the level of care your residence in {BUSINESS_INFO.serviceArea} needs today.
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-200">
                  Select Service <span className="text-teal-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES_DATA.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => updateField('serviceType', s.name)}
                      className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        formData.serviceType === s.name
                          ? 'border-teal-400 bg-teal-950/60 ring-1 ring-teal-400 text-white'
                          : 'border-slate-700 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-bold text-sm text-white">{s.name}</span>
                        {formData.serviceType === s.name && (
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                        )}
                      </div>
                      <span className="text-xs text-slate-400 mt-1">{s.tagline}</span>
                    </button>
                  ))}
                </div>
                {errors.serviceType && (
                  <p className="text-xs text-rose-400">{errors.serviceType}</p>
                )}
              </div>

              {/* Frequency Selection */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-200">
                  Service Frequency <span className="text-teal-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { id: 'one-time', label: 'One-Time Visit', desc: 'Single comprehensive clean' },
                    { id: 'recurring-weekly', label: 'Weekly Recurring', desc: 'Every 7 days' },
                    { id: 'recurring-biweekly', label: 'Bi-Weekly Recurring', desc: 'Every 2 weeks' },
                    { id: 'recurring-monthly', label: 'Monthly Recurring', desc: 'Every 4 weeks' },
                  ].map((f) => (
                    <button
                      type="button"
                      key={f.id}
                      onClick={() => updateField('frequency', f.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        formData.frequency === f.id
                          ? 'border-teal-400 bg-teal-950/60 ring-1 ring-teal-400 text-white'
                          : 'border-slate-700 bg-slate-800/60 hover:bg-slate-700/60 text-slate-300'
                      }`}
                    >
                      <span className="font-bold text-xs sm:text-sm block text-white">{f.label}</span>
                      <span className="text-xs text-slate-400 block mt-0.5">{f.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-700/70">
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm transition-all"
                >
                  <span>Continue to Home Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Property & Scope */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Step 2: Tell Us About Your Residence
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Helps our team prepare an accurate scope for your home in {BUSINESS_INFO.serviceArea}.
                </p>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-200">
                  Property Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {propertyTypes.map((pt) => (
                    <button
                      type="button"
                      key={pt}
                      onClick={() => updateField('propertyType', pt)}
                      className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                        formData.propertyType === pt
                          ? 'border-teal-400 bg-teal-950/60 text-white font-bold'
                          : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {pt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms & Bathrooms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Number of Bedrooms
                  </label>
                  <select
                    value={formData.bedrooms}
                    onChange={(e) => updateField('bedrooms', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {bedroomOptions.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Number of Bathrooms
                  </label>
                  <select
                    value={formData.bathrooms}
                    onChange={(e) => updateField('bathrooms', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {bathroomOptions.map((bath) => (
                      <option key={bath} value={bath} className="bg-slate-900 text-white">
                        {bath}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sq Ft & Current Condition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Approximate Size (sq ft)
                  </label>
                  <select
                    value={formData.approxSqFt}
                    onChange={(e) => updateField('approxSqFt', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {sqFtOptions.map((s) => (
                      <option key={s} value={s} className="bg-slate-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Current Cleaning Condition
                  </label>
                  <select
                    value={formData.currentCondition}
                    onChange={(e) => updateField('currentCondition', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {conditionOptions.map((c) => (
                      <option key={c} value={c} className="bg-slate-900 text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700/70">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-700/60 text-sm font-medium transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm transition-all"
                >
                  <span>Continue to Contact & Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact & Send */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Step 3: Preferred Timing & Contact Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Your estimate summary will be generated and opened in WhatsApp directly with our team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Your Name <span className="text-teal-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500"
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-rose-400">{errors.fullName}</p>}
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Phone / WhatsApp Number <span className="text-teal-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="e.g. +1 (512) 000-0000"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-400">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Preferred Date / Timing */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Preferred Date / Time Window
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Next Tuesday morning"
                      value={formData.preferredDate}
                      onChange={(e) => updateField('preferredDate', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                {/* Service Address / Area */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-200">
                    Service Area / Address in {BUSINESS_INFO.serviceArea}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={formData.serviceAddress}
                      onChange={(e) => updateField('serviceAddress', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Pets / Access Notes */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-200">
                  Pets or Access Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 friendly dog, key lockbox on porch"
                  value={formData.petsOrAccess}
                  onChange={(e) => updateField('petsOrAccess', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500"
                />
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-200">
                  Additional Cleaning Notes or Focus Areas (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any particular rooms, oven interior, refrigerator, or details you'd like our team to focus on..."
                  value={formData.additionalNotes}
                  onChange={(e) => updateField('additionalNotes', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-slate-500 resize-none"
                />
              </div>

              {/* Concise Estimate Summary Box */}
              <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm border-b border-slate-800 pb-2">
                  <FileText className="w-4 h-4" />
                  <span>Estimate Request Summary</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <p>• Service: <span className="text-white font-semibold">{formData.serviceType}</span></p>
                  <p>• Frequency: <span className="text-white font-semibold">{formData.frequency}</span></p>
                  <p>• Layout: <span className="text-white font-semibold">{formData.bedrooms}, {formData.bathrooms}</span></p>
                  <p>• Property: <span className="text-white font-semibold">{formData.propertyType}</span></p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700/70">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-700/60 text-sm font-medium transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Send Estimate Request via WhatsApp</span>
                </button>
              </div>

              <p className="text-xs text-slate-400 text-center">
                Destination: WhatsApp to {BUSINESS_INFO.phone}. No obligation, free direct estimate.
              </p>
            </div>
          )}
        </form>

      </div>
    </section>
  );
};
