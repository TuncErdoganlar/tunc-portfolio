import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import {Reveal} from './Motion';
import {accentAt, accentClasses} from '@/lib/profile';

const CATEGORIES = [
  'languages',
  'frontend',
  'backend',
  'database',
  'certificates',
  'spoken'
] as const;

export default function Skills() {
  const t = useTranslations('Skills');

  return (
    <section id="skills">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="04" title={t('title')} />

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((key, i) => {
            const accent = accentClasses[accentAt(i)];
            const items = t.raw(`${key}.items`) as string[];
            return (
              <Reveal key={key} delay={(i % 3) * 0.05}>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${accent.bg}`}
                    aria-hidden="true"
                  />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                    {t(`${key}.title`)}
                  </h3>
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
