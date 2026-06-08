import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // CLAUDE.md: TR/EN, varsayılan locale "en"
  locales: ['en', 'tr'],
  defaultLocale: 'en'
});

// Locale'e duyarlı navigasyon yardımcıları (LanguageSwitcher bunları kullanır)
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
