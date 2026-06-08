import {useTranslations} from 'next-intl';

// Klavye kullanıcıları için "içeriğe geç" bağlantısı (yalnızca odaklanınca görünür)
export default function SkipLink() {
  const t = useTranslations('Nav');
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
    >
      {t('skipToContent')}
    </a>
  );
}
