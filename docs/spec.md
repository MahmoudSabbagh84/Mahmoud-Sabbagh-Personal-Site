# Mahmoud Sabbagh — Personal Portfolio Site · Design Spec

**Date:** 2026-06-30
**Status:** Approved

## Goal

A top-tier, production-grade personal portfolio/résumé site positioning Mahmoud Sabbagh as a senior **Project Manager / Scrum Master / Product Owner / Operations** leader. Leads with quantified outcomes; converts a recruiter's skim into a callback.

## Stack & Hosting

- **Astro 5 + Tailwind 4** (via `@tailwindcss/vite`), self-hosted variable fonts.
- **AWS Amplify** static hosting on a custom domain (`amplify.yml` build spec included).
- **GitHub** repo `Mahmoud-Sabbagh-Personal-Site`.
- Contact form via **Web3Forms** (no backend; access key in `.env`).

## Site Structure

Single-page scroll with anchored nav + one sub-page.

| Section | Content (from `cv.md`) |
|---|---|
| Hero | Name, title, one-line positioning, CTAs: Download Résumé + Contact. Orchestrated entrance. |
| About | Distilled summary — leadership, B2B SaaS, Agile, de-escalation. |
| Impact | Hero metrics: Meta 60→85%+, ~65% ramp cut, 5/5 CSAT, Loomlance launched. |
| Experience | Timeline: Loomlance, Meta, DealerOn (3 roles), MEDGULF. |
| Loomlance | Feature teaser → `/loomlance` case study page. |
| Certifications | PSM I, PSPO I, Google PM, AWS CCP, Security+, LPIC-1, Google Data Analytics (in progress). |
| Skills | Grouped clusters. |
| Languages | Arabic (native), English (fluent), German (elementary). |
| Contact | Web3Forms form + LinkedIn/email. |

**/loomlance** — case study: problem → discovery → Scrum delivery → release management → outcome (8 modules, 4 payment integrations).

## Design Direction

See `DESIGN.md`. Summary: disciplined ink-on-white, single committed crimson signal color (Aesop restraint), Schibsted Grotesk + Hanken Grotesk, light/dark themes with persistent toggle, structured timeline + metric band (no cliché card grids), orchestrated-but-restrained motion. Explicitly avoids the AI editorial-magazine and SaaS-hero-metric templates (see `PRODUCT.md` anti-references).

## Features

- Light + dark mode toggle, no flash-of-wrong-theme, `localStorage` + `prefers-color-scheme`.
- Downloadable PDF résumé from `/public`.
- Working Web3Forms contact form with success/error states.
- SEO: meta/OG/Twitter tags, favicon, `sitemap`, JSON-LD Person schema.
- A11y: WCAG 2.1 AA, keyboard nav, reduced-motion, semantic landmarks.
- Performance target: Lighthouse ≥95 across the board.

## Deployment Plan

1. Scaffold + build site locally; verify production build.
2. `git init`, install `gh`, user authenticates once (`gh auth login`), create + push repo.
3. Connect repo in AWS Amplify console (guided), attach custom domain.
4. Set `PUBLIC_WEB3FORMS_KEY` env var in Amplify; update `site` in `astro.config.mjs` to the real domain.

## Out of Scope (v1)

- CMS/blog, dynamic content, AWS-native SES/Lambda contact backend (Web3Forms covers v1), analytics dashboard. All can be added later.
