# Build promptları — sırayla çalıştır

> Önce `CLAUDE.md` dosyasını proje köküne koy. Sonra bu promptları **sırayla** Claude Code'a yapıştır. Her adımdan sonra `npm run dev` ile kontrol et, sorun yoksa devam et. Promptlar `CLAUDE.md`'deki verilere ve tasarım sistemine atıf yapar — o yüzden kısa ve net tutuldular.

---

## Adım 0 — Terminal (Claude Code'a değil, sen çalıştır)

```bash
npx create-next-app@latest tunc-portfolio --typescript --tailwind --app --eslint --src-dir --import-alias "@/*"
cd tunc-portfolio
npm install next-intl framer-motion
```

`CLAUDE.md` dosyasını bu klasörün köküne kopyala, sonra Claude Code'u burada başlat.

---

## Prompt 1 — i18n iskeleti (next-intl)

```
CLAUDE.md'deki dosya yapısına uygun olarak next-intl'i App Router ile kur. TR/EN, /tr ve /en route'ları, varsayılan locale "en".

Şu dosyaları oluştur/düzenle:
- src/i18n/routing.ts  (locales ve defaultLocale, createNavigation export'ları)
- src/i18n/request.ts  (getRequestConfig, messages'ı locale'e göre import et)
- src/middleware.ts    (createMiddleware + matcher)
- next.config.ts       (createNextIntlPlugin ile sarmalı)
- src/app/[locale]/layout.tsx  (NextIntlClientProvider, <html lang={locale}>, geçersiz locale'de notFound)
- messages/en.json ve messages/tr.json  (şimdilik boş obje {} yeterli)
- Eski src/app/page.tsx ve layout.tsx'i [locale] yapısına taşı/temizle.

ÖNEMLİ: next-intl App Router API'si sürümle değişebiliyor. Kuruluma başlamadan kurulu next-intl sürümünü kontrol et (package.json) ve gerekirse güncel next-intl App Router dokümanına bakarak doğru API'yi kullan (defineRouting / createNavigation / getRequestConfig pattern'i).

Bittiğinde `npm run dev` ile /en ve /tr açılıyor mu test et.
```

---

## Prompt 2 — Tasarım token'ları, fontlar, navbar, dil değiştirici

```
CLAUDE.md'deki "Tasarım sistemi" bölümünü uygula.

1. globals.css'e renk token'larını CSS değişkeni olarak ekle (--bg, --ink, --primary, --coral, --teal, --amber, vb.) ve Tailwind v4 @theme ile bunları utility'lere bağla. Body arka planı --bg, metin --ink.

2. Fontları kur: Display = Clash Display (Fontshare, next/font/local veya @font-face), Gövde = Geist, Mono = Geist Mono. CLAUDE.md'de yasaklı fontları (Inter/Roboto/Arial) kullanma.

3. src/components/Navbar.tsx: sticky, üstte; sol tarafta isim/logo, sağda anchor linkler (About, Experience, Projects, Skills, Contact) + LanguageSwitcher. Mobilde hamburger menü. Tüm metinler messages üzerinden.

4. src/components/LanguageSwitcher.tsx: "TR | EN" toggle, aktif locale belirgin, next-intl'in Link/usePathname'i ile mevcut sayfada dili değiştir.

Navbar'ı layout'a ekle. Smooth scroll davranışını (scroll-behavior: smooth) ekle.
```

---

## Prompt 3 — Section bileşenleri + içerik

```
CLAUDE.md'deki kişi ve içerik verilerini kullanarak tüm section'ları oluştur ve src/app/[locale]/page.tsx'te sırayla diz. Tüm metinleri messages/en.json ve messages/tr.json'a ekle (iki dilde), bileşenlerde useTranslations ile kullan.

Bileşenler:
- Hero.tsx: oversized isim (display font), tagline, konum, GitHub/LinkedIn/E-posta linkleri, "CV indir" butonu (/cv.pdf). Asimetrik düzen.
- About.tsx: özet metni.
- Experience.tsx: 3 deneyim, dikey timeline tarzında (şirket, rol, tarih, madde madde işler).
- Projects.tsx: proje kartları grid. Her kart dönüşümlü accent renk (primary/coral/teal/amber). Başlık, yıl/yer, açıklama, etiketler.
- Skills.tsx: kategorili chip grupları (Diller, Frontend, Backend, Veritabanı, Sertifikalar, İnsan dilleri). Mono font chip'ler.
- Contact.tsx: e-posta + sosyal linkler, net bir CTA.
- Footer.tsx: isim, yıl, sosyal linkler.

Framer Motion: Hero'da staggered fade-up; diğer section'larda whileInView reveal (once:true); kartlarda hover lift + accent border. prefers-reduced-motion'a saygı göster.
```

---

## Prompt 4 — SEO & metadata

```
CLAUDE.md'deki "SEO" bölümünü uygula.

- src/app/[locale]/layout.tsx içinde generateMetadata: her locale için ayrı title + description (messages'tan oku). metadataBase ayarla.
- Open Graph + Twitter card meta'ları; public/og.png için referans (placeholder olabilir).
- Hero veya layout'a JSON-LD Person schema ekle (<script type="application/ld+json">): name, jobTitle "Full-stack Developer", url, sameAs olarak GitHub ve LinkedIn.
- src/app/sitemap.ts ve src/app/robots.ts oluştur; her iki locale'i de sitemap'e ekle.
- Locale'ler arası hreflang alternates ekle.
```

---

## Prompt 5 — Cila: responsive, erişilebilirlik, build

```
Son rötuşlar:
- Tüm bileşenleri mobil/tablet/masaüstünde kontrol et ve responsive yap (mobil öncelikli). Navbar hamburger menüsünün çalıştığından emin ol.
- Erişilebilirlik: tüm interaktif öğelerde görünür focus state, görsellerde alt, doğru başlık hiyerarşisi (tek h1), butonlarda aria-label.
- prefers-reduced-motion açıkken animasyonları devre dışı bırak.
- `npm run build` çalıştır, çıkan tüm hata ve uyarıları düzelt. TypeScript strict hatası kalmasın.
```

---

## Prompt 6 — Vercel'e deploy

```
Deploy hazırlığı:
- public/ klasörüne cv.pdf eklendiğinde "CV indir" butonunun çalıştığını doğrula (yoksa placeholder bırak).
- next.config.ts ve middleware matcher'ının prod için doğru olduğunu kontrol et.
- README.md'ye kısa kurulum + deploy talimatı yaz.
- `npm run build` temiz geçtiğinde Vercel'e deploy adımlarını (vercel CLI veya GitHub bağlama) özetle.
```

---

## Kullanım sırası özeti

1. **Adım 0** — terminalde projeyi kur, `CLAUDE.md`'yi köke koy
2. **Prompt 1** — i18n iskeleti → `/en` ve `/tr` açılıyor mu kontrol et
3. **Prompt 2** — tasarım + navbar + dil değiştirici
4. **Prompt 3** — section'lar + içerik (eklemek istediğin projeleri önce CLAUDE.md'ye ekle)
5. **Prompt 4** — SEO
6. **Prompt 5** — cila + build
7. **Prompt 6** — deploy

> İpucu: Yeni proje eklemek istediğinde, önce `CLAUDE.md`'deki "Projeler" listesine ekle, sonra Claude Code'a "Projects'e CLAUDE.md'deki yeni projeyi ekle" de — gerisini halleder.
