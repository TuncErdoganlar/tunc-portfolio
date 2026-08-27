import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import {Reveal} from './Motion';

const ITEMS = ['ml', 'security'] as const;

// Sabit "violet" vurgusu — diğer bölümlerdeki primary/coral/teal/amber
// rotasyonundan bilinçli olarak ayrı tutuluyor, bu bölümü "yeni/güncel"
// olarak görsel açıdan işaretlemek için (bkz. lib/profile.ts).
export default function CurrentlyLearning() {
  const t = useTranslations('CurrentlyLearning');

  return (
    <section id="current" className="bg-bg-alt">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="05" title={t('title')} />

        <Reveal>
          <p className="max-w-2xl text-ink-soft">{t('intro')}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((key, i) => (
            <Reveal key={key} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-violet/25 bg-violet/5 p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-wider text-violet">
                    {t('badge')}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs text-ink-soft">{t(`${key}.code`)}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink md:text-2xl">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 text-ink-soft">{t(`${key}.description`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
