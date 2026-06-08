import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// Next.js 16: "middleware" yerine "proxy" convention'ı.
// next-intl'in createMiddleware çıktısı proxy olarak da çalışır.
export default createMiddleware(routing);

export const config = {
  // API, Next internals ve statik dosyalar (nokta içerenler) hariç her yol
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
