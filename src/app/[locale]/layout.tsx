import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {PROFILE, SITE_URL} from '@/lib/profile';
import {clashDisplay, geistSans, geistMono} from '../fonts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import '../globals.css';

const OG_LOCALE: Record<string, string> = {en: 'en_US', tr: 'tr_TR'};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Meta'});

  const title = t('title');
  const description = t('description');

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      // Locale'ler arası hreflang
      languages: {
        en: '/en',
        tr: '/tr',
        'x-default': `/${routing.defaultLocale}`
      }
    },
    openGraph: {
      type: 'website',
      url: `/${locale}`,
      siteName: PROFILE.name,
      locale: OG_LOCALE[locale],
      title,
      description,
      images: [{url: '/og.png', width: 1200, height: 630, alt: t('ogAlt')}]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png']
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Geçersiz locale'de 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Statik render için aktif locale'i ayarla
  setRequestLocale(locale);

  // JSON-LD Person schema (SEO)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    jobTitle: 'Full-stack Developer',
    url: `${SITE_URL}/${locale}`,
    email: `mailto:${PROFILE.email}`,
    sameAs: [PROFILE.github, PROFILE.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İzmir',
      addressCountry: 'TR'
    }
  };

  return (
    <html
      lang={locale}
      className={`${clashDisplay.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
        />
        <NextIntlClientProvider>
          <SkipLink />
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
