export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'MDE Sigorta';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'Modern, güvenilir ve hızlı sigorta deneyimi.';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905330841488';
export const PHONE = process.env.NEXT_PUBLIC_PHONE || '424 238 70 72';
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@mdesigorta.com';
export const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || 'Elazığ, Türkiye';

export const WHATSAPP_URL = `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905330841488').replace(/\D/g, '')}`;