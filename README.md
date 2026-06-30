# Mahmoud Sabbagh — Personal Site

Personal portfolio & résumé site for **Mahmoud Sabbagh** — Project Manager · Scrum Master · Product Owner.

Built with **Astro + Tailwind CSS v4**, designed as a refined, editorial single-page site with a dedicated Loomlance case study. Light/dark themes, a downloadable PDF résumé, and a working contact form.

🔗 **Live:** _add your domain after deploy_

## Tech

- **[Astro 5](https://astro.build)** — static site generation, zero JS by default
- **[Tailwind CSS 4](https://tailwindcss.com)** — utility styling via `@tailwindcss/vite`
- **Self-hosted variable fonts** — Schibsted Grotesk (display) + Hanken Grotesk (body)
- **[Web3Forms](https://web3forms.com)** — backend-free contact form
- **AWS Amplify** — hosting (build spec in `amplify.yml`)

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # production build → ./dist
npm run preview    # preview the production build
```

## Configuration

### Contact form (Web3Forms)

1. Get a free access key at <https://web3forms.com> (enter your email — no account needed).
2. Copy `.env.example` to `.env` and set the key:
   ```
   PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```
3. In AWS Amplify, add the same variable under **App settings → Environment variables**.

### Domain

Update `site` in `astro.config.mjs` to your production domain (used for canonical URLs, sitemap, and OG tags).

## Deploy to AWS Amplify

1. Push this repo to GitHub.
2. In the [Amplify console](https://console.aws.amazon.com/amplify), choose **Create new app → GitHub**, and select this repo.
3. Amplify auto-detects the build settings (`amplify.yml` is included — output dir is `dist`).
4. Add the `PUBLIC_WEB3FORMS_KEY` environment variable.
5. Deploy, then attach your custom domain under **Hosting → Custom domains**.

## Content

All résumé content lives in **`src/data/resume.ts`** — edit there and every section, the case study, and structured data stay in sync. The downloadable PDF is at `public/Mahmoud-Sabbagh-Resume.pdf`.

## Project structure

```
src/
  components/   # Hero, Metrics, Experience, Contact, etc.
  data/         # resume.ts — single source of truth
  layouts/      # BaseLayout (head, SEO, theme, reveal)
  pages/        # index, loomlance, 404
  styles/       # global.css — design tokens (OKLCH) + Tailwind
public/         # résumé PDF, favicon, OG image, robots.txt
PRODUCT.md      # strategic design context
DESIGN.md       # visual system reference
```

---

© Mahmoud Sabbagh. Built with care.
