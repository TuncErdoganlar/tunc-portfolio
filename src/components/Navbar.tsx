'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

const SECTIONS = ['about', 'experience', 'projects', 'education', 'current', 'skills', 'hobbies', 'contact'] as const;

export default function Navbar() {
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-4 md:px-12">
        {/* İsim / logo */}
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Tunç Erdoğanlar
        </Link>

        {/* Masaüstü linkler */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {t(s)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobil: hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-ink md:hidden"
          aria-label={open ? t('closeMenu') : t('openMenu')}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobil menü paneli */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-bg px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {SECTIONS.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg py-2 text-base text-ink-soft transition-colors hover:text-ink"
                >
                  {t(s)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-line pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
