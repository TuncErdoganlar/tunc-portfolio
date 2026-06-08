import {useTranslations} from 'next-intl';
import {PROFILE} from '@/lib/profile';
import {GitHubIcon, LinkedInIcon, MailIcon} from './icons';

export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {PROFILE.name}
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            © {year} {PROFILE.name}. {t('rights')}
          </p>
          <p className="mt-1 font-mono text-xs text-ink-soft">{t('builtWith')}</p>
        </div>

        <div className="flex items-center gap-4 text-ink-soft">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-ink"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-ink"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="transition-colors hover:text-ink"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
