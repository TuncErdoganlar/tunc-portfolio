import {Reveal} from './Motion';

// Ortak section başlığı: dekoratif numara + display başlık
export default function SectionHeading({
  index,
  title
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-ink-soft" aria-hidden="true">
        {index}
      </span>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
