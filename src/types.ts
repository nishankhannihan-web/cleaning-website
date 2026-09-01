export interface ServiceItem {
  id: string;
  name: string;
  startingPrice: string;
  tagline: string;
  description: string;
  highlights: string[];
  recommendedFor: string;
  image?: string;
  isPopular?: boolean;
}

export interface TrustItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'services' | 'supplies' | 'scheduling' | 'estimates';
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export interface EstimateFormData {
  serviceType: string;
  frequency: 'one-time' | 'recurring-weekly' | 'recurring-biweekly' | 'recurring-monthly';
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  approxSqFt: string;
  currentCondition: string;
  preferredDate: string;
  fullName: string;
  phone: string;
  serviceAddress: string;
  petsOrAccess: string;
  additionalNotes: string;
}
