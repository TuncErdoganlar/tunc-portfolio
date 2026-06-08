import {useTranslations} from 'next-intl';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import {accentAt} from '@/lib/profile';

const ITEMS = ['customerp', 'fabric'] as const;

export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="bg-bg-alt">
      <div className="mx-auto max-w-[1120px] px-5 py-20 md:px-12 md:py-28">
        <SectionHeading index="03" title={t('title')} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((key, i) => (
            <ProjectCard
              key={key}
              index={i}
              accent={accentAt(i)}
              name={t(`${key}.name`)}
              meta={t(`${key}.meta`)}
              subtitle={t(`${key}.subtitle`)}
              description={t(`${key}.description`)}
              tags={t.raw(`${key}.tags`) as string[]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
