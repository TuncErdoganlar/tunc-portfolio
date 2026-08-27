// Kanonik site URL'i (deploy'da NEXT_PUBLIC_SITE_URL ile ezilir — Prompt 6)
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tunc-erdoganlar.vercel.app';

// Çevrilmeyen sabitler (CLAUDE.md "Kişi & içerik verileri")
export const PROFILE = {
  name: 'Tunç Erdoğanlar',
  email: 'tunc.erdoganlar@hotmail.com',
  phone: '+90 546 872 3094',
  github: 'https://github.com/TuncErdoganlar',
  linkedin: 'https://www.linkedin.com/in/tunç-erdoğanlar-a71312222/',
  cv: '/cv.pdf'
} as const;

export type Accent = 'primary' | 'coral' | 'teal' | 'amber' | 'violet';

// Accent rotasyonu: primary → coral → teal → amber (CLAUDE.md)
export const ACCENT_ORDER: readonly Accent[] = ['primary', 'coral', 'teal', 'amber'];

export function accentAt(i: number): Accent {
  return ACCENT_ORDER[i % ACCENT_ORDER.length];
}

// Tailwind v4 scanner'ı statik sınıf adlarını görebilsin diye tam sınıf adları
export const accentClasses: Record<
  Accent,
  {text: string; bg: string; hoverBorder: string}
> = {
  primary: {text: 'text-primary', bg: 'bg-primary', hoverBorder: 'hover:border-primary'},
  coral: {text: 'text-coral', bg: 'bg-coral', hoverBorder: 'hover:border-coral'},
  teal: {text: 'text-teal', bg: 'bg-teal', hoverBorder: 'hover:border-teal'},
  amber: {text: 'text-amber', bg: 'bg-amber', hoverBorder: 'hover:border-amber'},
  // Rotasyona dahil değil — sadece "Currently Learning" bölümünün sabit vurgu rengi (CLAUDE.md güncellemesi bkz.)
  violet: {text: 'text-violet', bg: 'bg-violet', hoverBorder: 'hover:border-violet'}
};
