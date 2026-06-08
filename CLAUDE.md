# Tunç Erdoğanlar — Portfolio

Bu, Tunç Erdoğanlar'ın kişisel portfolio sitesidir. İki dilli (TR/EN), modern, renkli, SEO odaklı bir Next.js uygulaması.

> Bu dosya projenin kalıcı bağlamıdır. Her görevde buradaki stack, tasarım sistemi ve CV verilerini esas al. Yeni bir şey eklerken bu dosyayı da güncelle.

---

## Stack & konvansiyonlar

- **Next.js** (App Router, en güncel kararlı sürüm) + **TypeScript** (strict mode)
- **Tailwind CSS v4** — tasarım token'ları `globals.css` içinde CSS değişkeni olarak tanımlı; renkleri/fontları doğrudan hex/px yazma, token kullan
- **next-intl** — TR/EN, `/tr` ve `/en` route'ları, varsayılan `en`. Tüm metinler `messages/*.json` üzerinden gelir. **Hiçbir bileşende hardcoded metin yok.**
- **Framer Motion** — animasyonlar
- Paket yöneticisi: `npm`
- Bileşenler `src/components/` altında, PascalCase. Server Component varsayılan; sadece interaktivite (motion, dil toggle) gerektirenler `"use client"`.
- `@/` alias → `src/`

## Dosya yapısı (hedef)

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx        # NextIntlClientProvider, fontlar, <html lang>
│   │   └── page.tsx          # tüm section'ları dizer
│   ├── globals.css           # tasarım token'ları + base stiller
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navbar.tsx            # sticky, anchor linkler + LanguageSwitcher
│   ├── LanguageSwitcher.tsx  # TR | EN toggle
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx        # timeline
│   ├── Projects.tsx          # kart grid
│   ├── Skills.tsx            # kategorili chip'ler
│   ├── Contact.tsx
│   └── Footer.tsx
├── i18n/
│   ├── routing.ts
│   └── request.ts
└── proxy.ts                  # Next.js 16: "middleware" yerine "proxy" convention'ı (next-intl createMiddleware)
messages/
├── en.json
└── tr.json
public/
└── cv.pdf                    # "CV indir" butonu bunu kullanır
```

---

## Tasarım sistemi  (yön: renkli & modern, profesyonel)

Genel his: sıcak, açık zeminli, oversized tipografi, bol boşluk, asimetrik düzen. Her proje/skill kategorisi dönüşümlü bir accent renk alır — bu "renkli" hissini kaos olmadan verir. Klişe değil: mor degrade + beyaz YOK.

### Fontlar
- **Display (başlıklar / hero):** `Clash Display` (Fontshare) — karakterli, kalın
- **Gövde:** `Geist` veya `Satoshi` — temiz, modern
- **Mono (skill etiketleri, kod):** `Geist Mono`
- Inter / Roboto / Arial / sistem fontları KULLANMA.
- Fontshare fontları için `@font-face` veya `next/font/local`; Geist için `geist` paketi / `next/font`.

### Renk token'ları (light tema)
```css
--bg:        #FBFAF7;  /* sıcak kırık beyaz */
--bg-alt:    #F3F1EC;  /* section alternasyonu */
--ink:       #16151A;  /* ana metin, neredeyse siyah */
--ink-soft:  #57555F;  /* ikincil metin */
--primary:   #4F46E5;  /* indigo — ana accent */
--coral:     #F97362;  /* sıcak pop */
--teal:      #0EA5A0;
--amber:     #F59E0B;
--line:      rgba(22,21,26,0.10); /* ince ayraçlar */
```
Accent rotasyonu: kartlar/chip'ler sırayla `primary → coral → teal → amber` alır.

### Düzen
- Container max-width ~1120px, yatayda cömert padding (mobilde 20px, masaüstü 48px+)
- Hero asimetrik: dev boyutlu isim, kısa tagline, konum + linkler
- Sticky minimal navbar; mobilde hamburger
- Köşe yarıçapı yumuşak (12–16px), gölgeler hafif/yok, ince border'lar

### Animasyon (Framer Motion)
- Hero: container `staggerChildren`, item'lar `y: 20 → 0`, `opacity: 0 → 1`
- Section'lar: `whileInView` + `viewport={{ once: true }}`
- Kartlar: hover'da hafif yukarı kalkma + accent border
- `prefers-reduced-motion` saygı göster (motion'ları kapat)

---

## SEO (Next.js'i bunun için seçtik — atlama)

- Her locale için `generateMetadata`: TR/EN ayrı `title` + `description`
- Open Graph + Twitter card meta'ları, `public/og.png`
- JSON-LD **Person** schema: `name`, `jobTitle`, `url`, `sameAs: [github, linkedin]`
- `sitemap.ts` ve `robots.ts`
- `<html lang={locale}>` + locale'ler arası `hreflang` alternates
- Semantik HTML (`<section>`, `<nav>`, `<article>`, başlık hiyerarşisi)

---

## Kişi & içerik verileri

**Tunç Erdoğanlar** — Full-stack Developer
- Tel: +90 546 872 3094
- E-posta: tunc.erdoganlar@hotmail.com
- GitHub: https://github.com/TuncErdoganlar
- LinkedIn: https://www.linkedin.com/in/tunç-erdoğanlar-a71312222/
- Konum: İzmir, Türkiye

**Özet (EN):** Full-stack developer with a solid understanding of web development and a passion for learning new technologies. Hands-on experience from personal projects and internships, seeking a collaborative environment to contribute to meaningful work.

**Özet (TR):** Web geliştirme konusunda sağlam bir temele ve yeni teknolojiler öğrenmeye tutkulu bir full-stack geliştirici. Kişisel projeler ve stajlardan pratik deneyim; anlamlı projelere katkı sunabileceği işbirlikçi bir ortam arıyor.

### Deneyim
1. **DataBoss** — Software Engineering Intern · Eyl 2025 – Oca 2026
   - Android için yerel (Google araçlarına bağlı olmayan) Speech-to-Text uygulaması geliştirdi (Android Studio).
2. **MYCRO** — Software Engineering Intern · Haz – Tem 2025
   - Microsoft SQL veritabanı sistemleri üzerinde çalıştı.
   - ASP.NET Core 6.0 ile fizyoterapi randevu web uygulaması geliştirdi (Visual Studio 2022).
3. **VCAlly Startup Studio** — Best Application Award · CustomERP Eş-Kurucu
   - Bir iş tanımını çalıştırılabilir, özel bir ERP'ye dönüştüren yapay zeka destekli bir "assembly engine".

### Eğitim
- **Bilkent Üniversitesi** — Computer Technologies and Information Systems · Eyl 2021 – devam
- **İzmir Özel Türk Koleji** — Lise · 2017 – 2021

### Projeler
1. **CustomERP** (2026, Ankara) — Bilkent CTIS Bitirme Projesi
   Bir iş tanımından çalıştırılabilir özel ERP üreten yapay zeka destekli motor. VCAlly Startup Studio'da "Best Application" ödülü.
2. **Heat Resistant Fabric** (2019, İzmir) — Ege Üniversitesi Kimya Mühendisliği Bölümü
   Isıya dayanıklı kumaş ar-ge projesi.

> Tunç eklemek istediği başka projeler olduğunu belirtti — yeni projeler bu listeye aynı formatta eklenecek.

### Teknik yetkinlikler  (temizlenmiş, kategorili)
- **Diller:** C, C#, Java, JavaScript, Python, PHP, HTML, CSS
- **Frontend:** React.js, jQuery, HTML/CSS
- **Backend:** Node.js, ASP.NET Core
- **Veritabanı:** MySQL, MS Access
- **Sertifikalar:** HackerRank Basic SQL, CCNA-1 (networking fundamentals)
- **Diller (insan):** Türkçe (anadil), İngilizce (IELTS 7/10), Almanca (A2.2 — Goethe-Institut İzmir)

> Not: Orijinal CV'de "Operating Systems – Windows XP" satırı vardı; güncel bir dev portfolyosunda değer katmadığı için çıkarıldı. İstersen geri ekleyebiliriz.

### Hobiler & ilgi alanları
Profesyonel yelken yarışçısı (Optimist, Laser 4.7): Optimist yarışları — 2016 İtalya (Garda), 2013 Katar; Laser 4.7 İzmir İl Şampiyonası 3.'lük; fitness.

---

## Komutlar
- Geliştirme: `npm run dev`
- Build (deploy öncesi mutlaka çalıştır): `npm run build`
- Lint: `npm run lint`
