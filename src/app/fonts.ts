import {Geist, Geist_Mono} from 'next/font/google';
import localFont from 'next/font/local';

// Gövde (CLAUDE.md: Geist) — Inter/Roboto/Arial yasak
export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
});

// Mono (skill etiketleri, kod)
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
});

// Display (başlıklar / hero): Clash Display — Fontshare, self-host (next/font/local)
// Yalnızca kullanılan ağırlıklar (500/600/700) — Regular preload edilip kullanılmıyordu.
export const clashDisplay = localFont({
  src: [
    {path: './fonts/ClashDisplay-Medium.woff2', weight: '500', style: 'normal'},
    {path: './fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal'},
    {path: './fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal'}
  ],
  variable: '--font-clash-display',
  display: 'swap'
});
