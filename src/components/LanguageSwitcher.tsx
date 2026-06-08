'use client';

import {useLocale, useTranslations} from 'next-intl';
import {Link, usePathname, routing} from '@/i18n/routing';

// "TR | EN" toggle — aktif locale belirgin, aynı sayfada dili değiştirir.
export default function LanguageSwitcher() {
  const pathname = usePathname();
  const active = useLocale();
  const t = useTranslations('Nav');

  return (
    <div
      className="flex items-center gap-1 font-mono text-sm"
      role="group"
      aria-label={t('switchLanguage')}
    >
      {routing.locales.map((locale, i) => {
        const isActive = locale === active;
        return (
          <span key={locale} className="flex items-center">
            {i > 0 && <span className="mx-1 text-line">|</span>}
            <Link
              href={pathname}
              locale={locale}
              aria-current={isActive ? 'true' : undefined}
              className={
                isActive
                  ? 'font-semibold text-ink'
                  : 'text-ink-soft transition-colors hover:text-ink'
              }
            >
              {locale.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
