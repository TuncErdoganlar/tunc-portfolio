'use client';

import {motion, useReducedMotion, EASE} from './Motion';
import {accentClasses, type Accent} from '@/lib/profile';

export default function ProjectCard({
  name,
  meta,
  subtitle,
  description,
  tags,
  accent,
  index
}: {
  name: string;
  meta: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: Accent;
  index: number;
}) {
  const reduce = useReducedMotion();
  const a = accentClasses[accent];

  return (
    <motion.article
      initial={reduce ? false : {opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.5, delay: index * 0.08, ease: EASE}}
      whileHover={reduce ? undefined : {y: -6}}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-bg p-7 transition-colors ${a.hoverBorder}`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-mono text-xs ${a.text}`}>{meta}</span>
        <span className={`h-2.5 w-2.5 rounded-full ${a.bg}`} aria-hidden="true" />
      </div>

      <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
        {name}
      </h3>
      <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>
      <p className="mt-4 text-ink-soft">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
