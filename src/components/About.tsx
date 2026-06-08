import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import {Reveal} from './Motion';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="bg-bg-alt">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="01" title={t('title')} />
        <Reveal>
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            {t('body')}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
