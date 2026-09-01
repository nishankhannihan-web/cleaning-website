import { EstimateFormData } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';

export function createWhatsAppEstimateUrl(data: EstimateFormData): string {
  const frequencyLabels: Record<string, string> = {
    'one-time': 'One-Time Visit',
    'recurring-weekly': 'Weekly Recurring',
    'recurring-biweekly': 'Bi-Weekly Recurring',
    'recurring-monthly': 'Monthly Recurring',
  };

  const messageLines = [
    `*Hello PureNest Cleaning Team,*`,
    `I would like to request a free residential cleaning estimate for my home in ${BUSINESS_INFO.serviceArea}.`,
    ``,
    `*ESTIMATE REQUEST DETAILS:*`,
    `• *Service:* ${data.serviceType || 'Standard Cleaning'}`,
    `• *Frequency:* ${frequencyLabels[data.frequency] || data.frequency}`,
    `• *Property Type:* ${data.propertyType || 'Single Family / House'}`,
    `• *Bedrooms:* ${data.bedrooms || 'Not specified'}`,
    `• *Bathrooms:* ${data.bathrooms || 'Not specified'}`,
    data.approxSqFt ? `• *Approx. Size:* ${data.approxSqFt} sq ft` : null,
    data.currentCondition ? `• *Home Condition:* ${data.currentCondition}` : null,
    data.preferredDate ? `• *Preferred Date / Time:* ${data.preferredDate}` : null,
    ``,
    `*CONTACT & LOCATION:*`,
    `• *Name:* ${data.fullName || 'Not provided'}`,
    `• *Phone / WhatsApp:* ${data.phone || 'Not provided'}`,
    data.serviceAddress ? `• *Service Address / Area:* ${data.serviceAddress}` : `• *Service Area:* ${BUSINESS_INFO.serviceArea}`,
    data.petsOrAccess ? `• *Access / Pets Notes:* ${data.petsOrAccess}` : null,
    data.additionalNotes ? `• *Additional Notes:* ${data.additionalNotes}` : null,
    ``,
    `Thank you! Looking forward to your estimate confirmation.`,
  ].filter(Boolean);

  const rawMessage = messageLines.join('\n');
  const encodedMessage = encodeURIComponent(rawMessage);
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodedMessage}`;
}

export function getDirectWhatsAppUrl(customText?: string): string {
  const defaultText = `Hello PureNest Cleaning, I would like to request a residential cleaning estimate for my home in ${BUSINESS_INFO.serviceArea}.`;
  const text = customText || defaultText;
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(text)}`;
}
