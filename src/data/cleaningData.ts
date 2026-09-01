import { ServiceItem, TrustItem, FaqItem, GalleryImage } from '../types';

// Vite-compatible image asset imports for seamless local & production (Vercel) builds
import imgLivingRoomClean from '../assets/media/pexels-tima-miroshnichenko-6195103.jpg';
import imgDeepCleanKitchen from '../assets/media/pexels-tima-miroshnichenko-6195118.jpg';
import imgDetailedWoodCare from '../assets/media/pexels-tima-miroshnichenko-6195275.jpg';
import imgBathroomHygiene from '../assets/media/pexels-tima-miroshnichenko-6195278.jpg';
import imgRecurringBedroom from '../assets/media/pexels-tima-miroshnichenko-6195949.jpg';
import imgEcoSuppliesRoutine from '../assets/media/pexels-tima-miroshnichenko-6196239.jpg';
import imgOrganizedInterior from '../assets/media/pexels-tima-miroshnichenko-6197116.jpg';

export const BUSINESS_INFO = {
  name: 'PureNest Cleaning',
  serviceType: 'Residential Cleaning',
  businessType: 'Local cleaning team',
  serviceArea: 'Austin, Texas',
  phone: '+1254785458',
  whatsAppNumber: '1254785458',
  whatsAppBaseUrl: 'https://wa.me/1254785458',
  positioning: 'Reliable residential cleaning tailored to the home, schedule, and requested level of service.',
  primaryCta: 'Get a Free Cleaning Estimate',
};

export const ALLOWED_FACTUAL_CLAIMS: TrustItem[] = [
  {
    title: 'Satisfaction guarantee',
    description: 'We stand behind the quality of our residential cleaning work on every visit.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Eco-friendly products',
    description: 'Thoughtful cleaning solutions that keep your home fresh and comfortable.',
    iconName: 'Leaf',
  },
  {
    title: 'Flexible scheduling',
    description: 'Cleaning appointments scheduled around your household routine and preferences.',
    iconName: 'CalendarCheck',
  },
  {
    title: 'Recurring service plans',
    description: 'Weekly, bi-weekly, or monthly visits tailored to maintain your desired level of care.',
    iconName: 'Repeat',
  },
];

// Single source of truth for services in exact required order
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'standard-cleaning',
    name: 'Standard Cleaning',
    startingPrice: 'Request an estimate',
    tagline: 'Routine upkeep for fresh, tidy living areas.',
    description: 'Thorough maintenance cleaning covering everyday dust, surface wiping, floors, kitchen counters, and bathroom fixtures throughout your residence.',
    highlights: [
      'Dusting all accessible horizontal surfaces & shelves',
      'Vacuuming rugs & carpets, sweeping and mopping hard floors',
      'Wiping kitchen countertops, exterior appliances & sink',
      'Sanitizing bathroom basins, toilets, mirrors & tub surfaces',
      'Emptying waste baskets and resetting tidy spaces',
    ],
    recommendedFor: 'Regular upkeep for tidy homes needing ongoing care.',
    image: imgLivingRoomClean,
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    startingPrice: 'Request an estimate',
    tagline: 'Intensive detail cleaning for neglected or seasonal spaces.',
    description: 'Comprehensive deep cleaning that reaches buildup, detailed trim, baseboards, grout areas, and heavy-use zones that regular maintenance visits skip.',
    highlights: [
      'Hand-wiping baseboards, door frames & light switch plates',
      'Detailed scrub of bathroom tile, shower doors & grout lines',
      'Intensive stovetop, exterior cabinet & backsplash degreasing',
      'Under accessible furniture dusting and edge vacuuming',
      'Deep surface sanitization across high-touch household areas',
    ],
    recommendedFor: 'First-time visits, seasonal refreshes, or deep resets.',
    image: imgDeepCleanKitchen,
    isPopular: true,
  },
  {
    id: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    startingPrice: 'Request an estimate',
    tagline: 'Dedicated sanitization for the heart of your home.',
    description: 'Targeted care for cooking and food prep zones, focusing on grease removal, countertop sanitization, appliance exteriors, and spotless sink basins.',
    highlights: [
      'Degreasing range hoods, stovetops & control panels',
      'Sanitizing and polishing countertop surfaces and islands',
      'Exterior cleaning of refrigerator, oven, microwave & dishwasher',
      'Deep scrubbing and polishing sink basin, faucet & drain area',
      'Spot wiping cabinet fronts and sweeping/mopping kitchen floor',
    ],
    recommendedFor: 'Homes wanting focused attention on active cooking areas.',
    image: imgDetailedWoodCare,
  },
  {
    id: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    startingPrice: 'Request an estimate',
    tagline: 'Hygienic deep scrub for tubs, showers, and vanity areas.',
    description: 'Focused bathroom care designed to remove soap scum, limescale spots, sanitize fixtures, and leave mirrors, glass, and tiles crystal clean.',
    highlights: [
      'Scrubbing and descaling shower walls, tubs & glass enclosures',
      'Disinfecting toilets inside and out, including base and surrounding tile',
      'Polishing chrome faucets, sink basins & vanity countertops',
      'Streak-free cleaning of vanity mirrors and glass surfaces',
      'Mopping bathroom tile floors and wiping wall baseboards',
    ],
    recommendedFor: 'Residences needing thorough hygiene focus on bathrooms.',
    image: imgBathroomHygiene,
  },
  {
    id: 'recurring-cleaning',
    name: 'Recurring Cleaning',
    startingPrice: 'Request an estimate',
    tagline: 'Consistent, dependable visits on your preferred cadence.',
    description: 'Scheduled weekly, bi-weekly, or monthly cleaning appointments tailored to your home layout, keeping your residence continuously clean without hassle.',
    highlights: [
      'Personalized cleaning checklist tailored to your home layout',
      'Predictable schedule with agreed arrival windows',
      'Choice of weekly, bi-weekly, or monthly frequency',
      'Consistent care from a dedicated residential cleaning team',
      'Easy adjustments whenever your schedule or needs shift',
    ],
    recommendedFor: 'Busy households seeking predictable, continuous cleanliness.',
    image: imgRecurringBedroom,
  },
  {
    id: 'add-on-services',
    name: 'Add-On Services',
    startingPrice: 'Request an estimate',
    tagline: 'Customized extras to tailor your cleaning visit.',
    description: 'Flexible supplementary cleaning items that can be paired with any standard, deep, or recurring visit to address specific household requirements.',
    highlights: [
      'Interior oven cleaning & baked-on grease removal',
      'Interior refrigerator deep clean & shelf sanitization',
      'Interior window & glass pane wiping',
      'Interior cabinet & drawer cleaning (empty spaces)',
      'Specific room or laundry area touch-up tasks',
    ],
    recommendedFor: 'Customizing any service visit with specific extra tasks.',
    image: imgEcoSuppliesRoutine,
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: imgLivingRoomClean,
    alt: 'Clean modern residential living space with polished floors and neat furniture',
    title: 'Living Room Upkeep',
    category: 'Standard Cleaning',
  },
  {
    src: imgDeepCleanKitchen,
    alt: 'Spotless kitchen surfaces with clean countertops and bright natural light',
    title: 'Kitchen Counter Care',
    category: 'Kitchen Cleaning',
  },
  {
    src: imgDetailedWoodCare,
    alt: 'Detailed residential cleaning care on wooden surfaces and fixtures',
    title: 'Detailed Surface Care',
    category: 'Deep Cleaning',
  },
  {
    src: imgBathroomHygiene,
    alt: 'Clean and sanitized bathroom washroom area with tidy towels and shiny taps',
    title: 'Bathroom Hygiene',
    category: 'Bathroom Cleaning',
  },
  {
    src: imgRecurringBedroom,
    alt: 'Tidy and organized bedroom space with fresh linens and vacuumed floors',
    title: 'Bedroom Freshness',
    category: 'Recurring Plan',
  },
  {
    src: imgEcoSuppliesRoutine,
    alt: 'Careful residential cleaning routine with eco-friendly cleaning solutions',
    title: 'Eco-Friendly Routine',
    category: 'Home Care',
  },
  {
    src: imgOrganizedInterior,
    alt: 'Organized home interior with clean entryways and dust-free surfaces',
    title: 'Organized Interior',
    category: 'Residential Space',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is included in a standard cleaning visit?',
    answer: 'Standard cleaning covers all essential living spaces: surface dusting, sweeping, vacuuming, mopping floors, sanitizing kitchen counters and sinks, and thorough cleaning of bathroom toilets, basins, and showers. Exact scope is tailored to your home during the estimate process.',
    category: 'services',
  },
  {
    question: 'What is the difference between standard and deep cleaning?',
    answer: 'Standard cleaning focuses on ongoing maintenance of accessible surfaces. Deep cleaning is an intensive service targeting built-up grime, hand-wiping baseboards, scrubbing tile grout, cleaning behind and under accessible furniture, and sanitizing high-touch zones.',
    category: 'services',
  },
  {
    question: 'Do you bring your own cleaning supplies and equipment?',
    answer: 'Yes, our team brings all required cleaning equipment and eco-friendly products needed to complete the visit. If you have specific specialty surfaces or prefer our team to use your own preferred supplies, simply let us know during estimate planning.',
    category: 'supplies',
  },
  {
    question: 'What recurring cleaning frequencies are available?',
    answer: 'We provide recurring service plans on weekly, bi-weekly (every two weeks), and monthly schedules. We also provide one-time visits for move-ins, seasonal resets, or special occasions.',
    category: 'scheduling',
  },
  {
    question: 'How should I prepare my home before the cleaning team arrives?',
    answer: 'To make the most of your cleaning visit, we suggest picking up loose personal items, toys, and paperwork from floors and countertops so our team can immediately focus on thorough dusting, washing, and sanitization.',
    category: 'scheduling',
  },
  {
    question: 'How does the estimate process work?',
    answer: 'You share your home details (approximate size, number of bedrooms/bathrooms, and requested level of service) through our guided estimate form or direct WhatsApp message. We confirm the scope and provide a straightforward estimate tailored directly to your home.',
    category: 'estimates',
  },
];
