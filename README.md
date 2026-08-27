# Tunç Erdoğanlar — Portfolio

Bilingual (TR/EN), SEO-focused personal portfolio built with the Next.js App Router.

## Stack

- **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens as CSS variables in `globals.css`
- **next-intl** — `/en` and `/tr` routes, default `en`, all copy in `messages/*.json`
- **Framer Motion** — scroll reveals + hero stagger (respects `prefers-reduced-motion`)
- Self-hosted **Clash Display** (Fontshare) + **Geist** / **Geist Mono**

## Local development

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
```

Other scripts:

```bash
npm run build    # production build — run before deploying
npm run lint     # eslint
```

## Project layout

```
src/
├── app/[locale]/      # localized layout + page (root layout lives here)
├── app/sitemap.ts     # /sitemap.xml (both locales + hreflang)
├── app/robots.ts      # /robots.txt
├── components/        # Hero, About, Experience, Projects, Education, CurrentlyLearning, Skills, Hobbies, Contact, Footer, …
├── i18n/              # next-intl routing + request config
├── lib/profile.ts     # contact links, accent rotation, SITE_URL
└── proxy.ts           # next-intl middleware (Next 16 "proxy" convention)
messages/{en,tr}.json  # all UI copy — no hardcoded strings in components
public/                # cv.pdf, og.png
```

## Editing content

- **Text**: edit `messages/en.json` and `messages/tr.json` (keep keys in sync).
- **CV**: replace `public/cv.pdf` with an updated export (the "Download CV" button links to `/cv.pdf`).
- **Projects / experience / skills**: update the matching namespace in both message files.
- **Coursework**: `Education` (finished courses, grouped by category) and `CurrentlyLearning` (this semester's courses) both pull from `messages/*.json` — update those namespaces as courses are completed each semester.

## Environment

| Variable | Purpose | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used by metadata, Open Graph, sitemap, robots | `https://your-domain.com` |

If unset, it falls back to `https://tunc-erdoganlar.vercel.app`. Set the real value on Vercel once the domain is known.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the GitHub repo. Framework preset: **Next.js** (auto-detected; defaults are correct).
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` (your production URL).
4. Deploy. Future pushes to the default branch redeploy automatically.

## License

MIT — see [LICENSE](./LICENSE).
