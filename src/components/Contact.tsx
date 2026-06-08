import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import {Reveal} from './Motion';
import {PROFILE} from '@/lib/profile';
import {GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon} from './icons';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="bg-bg-alt">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="05" title={t('title')} />

        <Reveal>
          <div className="max-w-3xl">
            <p className="text-lg text-ink-soft md:text-xl">{t('body')}</p>

            <a
              href={`mailto:${PROFILE.email}`}
              className="group mt-8 flex flex-wrap items-center gap-3 font-display text-2xl font-semibold tracking-tight text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-primary sm:text-3xl md:text-4xl"
            >
              <span className="break-all">{PROFILE.email}</span>
              <ArrowIcon className="h-7 w-7 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="mt-10 flex items-center gap-5">
              <span className="font-mono text-sm text-ink-soft">{t('or')}</span>
              <div className="flex items-center gap-4 text-ink-soft">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:text-ink"
                >
                  <GitHubIcon className="h-6 w-6" />
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-ink"
                >
                  <LinkedInIcon className="h-6 w-6" />
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  aria-label={t('emailCta')}
                  className="transition-colors hover:text-ink"
                >
                  <MailIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
