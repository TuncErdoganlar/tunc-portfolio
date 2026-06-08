'use client';

import {useTranslations} from 'next-intl';
import {motion, useReducedMotion, staggerContainer, staggerItem} from './Motion';
import {PROFILE} from '@/lib/profile';
import {GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon} from './icons';

export default function Hero() {
  const t = useTranslations('Hero');
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="mx-auto max-w-[1120px] px-5 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24"
    >
      <motion.div
        variants={staggerContainer}
        initial={reduce ? false : 'hidden'}
        animate="show"
        className="grid grid-cols-1 gap-10 lg:grid-cols-12"
      >
        {/* Sol: isim + tagline (asimetrik, geniş kolon) */}
        <div className="lg:col-span-9">
          <motion.p
            variants={staggerItem}
            className="font-mono text-sm text-primary"
          >
            {t('role')}
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="mt-4 font-display text-6xl font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl"
          >
            Tunç
            <br />
            Erdoğanlar
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-8 max-w-xl text-lg text-ink-soft md:text-xl"
          >
            {t('tagline')}
          </motion.p>
        </div>

        {/* Sağ: konum + aksiyonlar (offset kolon) */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col gap-6 lg:col-span-3 lg:items-end lg:pt-2"
        >
          <p className="font-mono text-sm text-ink-soft">{t('location')}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PROFILE.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              <DownloadIcon className="h-4 w-4" />
              {t('downloadCv')}
            </a>
          </div>

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
              aria-label={t('emailMe')}
              className="transition-colors hover:text-ink"
            >
              <MailIcon className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
