import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import {Reveal} from './Motion';

export default function Hobbies() {
  const t = useTranslations('Hobbies');
  const highlights = t.raw('sailing.highlights') as string[];

  return (
    <section id="hobbies">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="05" title={t('title')} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Öne çıkan: yelken */}
          <Reveal className="lg:col-span-2">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-bg-alt p-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                  {t('sailing.tag')}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                {t('sailing.title')}
              </h3>
              <p className="mt-3 max-w-xl text-ink-soft">{t('sailing.body')}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-bg px-3 py-1.5 font-mono text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Fitness */}
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-bg-alt p-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                  {t('fitness.tag')}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">
                {t('fitness.title')}
              </h3>
              <p className="mt-3 text-ink-soft">{t('fitness.body')}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
