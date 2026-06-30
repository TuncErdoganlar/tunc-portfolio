import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import {Reveal} from './Motion';
import {accentAt, accentClasses} from '@/lib/profile';

// En yeniden eskiye doğru kronolojik sıra (vcally 2026 → databoss Eyl 2025–Oca 2026 → mycro Haz–Tem 2025)
const ITEMS = ['vcally', 'databoss', 'mycro'] as const;

export default function Experience() {
  const t = useTranslations('Experience');

  return (
    <section id="experience">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="02" title={t('title')} />

        <ol className="relative border-l border-line pl-6 md:pl-10">
          {ITEMS.map((key, i) => {
            const accent = accentClasses[accentAt(i)];
            const points = t.raw(`${key}.points`) as string[];
            return (
              <li key={key} className="relative pb-12 last:pb-0">
                {/* Timeline noktası */}
                <span
                  className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-bg md:-left-[47px] ${accent.bg}`}
                  aria-hidden="true"
                />
                <Reveal delay={i * 0.05}>
                  <p className={`font-mono text-xs ${accent.text}`}>
                    {t(`${key}.date`)}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {t(`${key}.company`)}
                  </h3>
                  <p className="mt-1 text-ink-soft">{t(`${key}.role`)}</p>
                  <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-ink-soft marker:text-ink-soft/40">
                    {points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
