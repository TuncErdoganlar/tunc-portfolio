import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import {Reveal} from './Motion';
import {accentAt, accentClasses} from '@/lib/profile';

const CATEGORIES = ['programming', 'web', 'data', 'engineering'] as const;

export default function Education() {
  const t = useTranslations('Education');

  return (
    <section id="education">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="04" title={t('title')} />

        <Reveal>
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              {t('university')}
            </h3>
            <p className="text-ink-soft">{t('degree')}</p>
            <p className="font-mono text-xs text-ink-soft">{t('date')}</p>
          </div>
          <p className="mt-4 max-w-2xl text-ink-soft">{t('summary')}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {CATEGORIES.map((key, i) => {
            const accent = accentClasses[accentAt(i)];
            const items = t.raw(`${key}.items`) as string[];
            return (
              <Reveal key={key} delay={(i % 4) * 0.05}>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${accent.bg}`}
                    aria-hidden="true"
                  />
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                    {t(`${key}.title`)}
                  </h4>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-line bg-bg px-3 py-1.5 font-mono text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
