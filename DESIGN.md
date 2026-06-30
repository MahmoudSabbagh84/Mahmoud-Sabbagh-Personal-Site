# Design

A refined, structured portfolio for a senior delivery & operations leader. The system is disciplined ink-on-white with a single committed crimson signal color — Aesop-apothecary restraint, where one saturated object does the work. Modern-operator, not editorial-magazine.

## Color

OKLCH throughout. Light is the default; dark is a first-class theme. Strategy: **Committed-restrained** — one crimson primary carries the identity, a deeper oxblood handles hierarchy, everything else is disciplined neutral.

### Light theme
- `--bg`: `oklch(1 0 0)` — pure white surface; the crimson does the talking.
- `--surface`: `oklch(0.974 0.004 25)` — barely-tinted panel for sections/cards.
- `--surface-2`: `oklch(0.955 0.006 25)` — second elevation.
- `--ink`: `oklch(0.22 0.018 25)` — near-black body text, faint warm tint (~13:1 on bg).
- `--muted`: `oklch(0.475 0.015 25)` — secondary text (~7:1 on bg).
- `--primary`: `oklch(0.585 0.205 23)` — confident crimson. Signal color, links, key CTA.
- `--accent`: `oklch(0.42 0.13 22)` — deep oxblood for hover/hierarchy.
- `--line`: `oklch(0.90 0.006 25)` — hairline borders/rules.
- On-primary text: `oklch(0.99 0.005 25)` (near-white) per Helmholtz-Kohlrausch.

### Dark theme
- `--bg`: `oklch(0.165 0.006 25)` — warm near-black.
- `--surface`: `oklch(0.205 0.007 25)`; `--surface-2`: `oklch(0.245 0.008 25)`.
- `--ink`: `oklch(0.945 0.005 60)` — warm off-white (line-height +0.05 for light type).
- `--muted`: `oklch(0.70 0.012 35)`.
- `--primary`: `oklch(0.665 0.19 25)` — brightened crimson for dark surfaces.
- `--accent`: `oklch(0.74 0.12 28)` — lifted coral.
- `--line`: `oklch(0.30 0.008 25)`.

Contrast verified ≥4.5:1 body / ≥3:1 large, both themes.

## Typography

Pairing on a real contrast axis (display grotesque vs humanist text), avoiding the reflex-reject defaults (no Fraunces/Inter, no editorial-serif).

- **Display / headings**: `Schibsted Grotesk Variable` — confident, structured neo-grotesque. Used for hero name, section headings, big numerals (tabular-nums on metrics). Tight tracking on large sizes (≥ -0.02em, never below -0.04em).
- **Body / UI**: `Hanken Grotesk Variable` — humanist, warm, highly legible. Body, labels, nav, captions. Line length capped 65–75ch.
- Self-hosted via `@fontsource-variable` (no external requests, no FOUT flash).
- Scale: fluid `clamp()`, ≥1.25 modular ratio. Hero max ≤ 6rem. `text-wrap: balance` on h1–h3, `pretty` on prose.

## Layout

- Max content width ~72rem; generous fluid gutters via `clamp()`.
- Intentional asymmetry: hero and section headers use an offset two-column rhythm rather than dead-center everything.
- Experience as a structured vertical timeline (not cards). Metrics as an integrated band, not identical gradient cards.
- Semantic z-index scale: base → sticky-nav → dropdown → modal → toast.
- Responsive: single fluid column on mobile, asymmetric grid ≥768px. Every heading tested for overflow at each breakpoint.

## Motion

- One orchestrated entrance on load (hero), then restrained scroll reveals that fit each section (staggered for lists, single for blocks) — never one uniform fade on everything.
- Library: `motion` (vanilla) for hero/section choreography; CSS transitions for hover/focus.
- Easing: ease-out (quart/expo). No bounce/elastic.
- Reveals enhance already-visible content (no visibility gated on JS).
- `prefers-reduced-motion: reduce` → instant/crossfade everywhere.

## Components

- Sticky slim top nav with anchor links + theme toggle + résumé CTA; blurs subtly only when scrolled.
- Buttons: solid crimson primary (white text), ghost/outline secondary; clear focus ring.
- Metric band: number + label + one-line context, in a structured row (not a card grid).
- Timeline entry: role, org, dates, location, bulleted outcomes.
- Credential chips for certifications; grouped skill clusters.
- Contact form: labeled fields, Web3Forms-backed, inline validation + success/error states.
- Footer: contact links, LinkedIn, email, résumé download.
