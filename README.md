# Raising Cane's Fan Giveaway — Landing Page

Mobile-first, high-conversion landing page built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. Static-optimized and ready to deploy on Vercel.

> Disclaimer: Not affiliated with Raising Cane's. Promotional fan giveaway demo.

## Stack

- Next.js 14.2 (App Router)
- TypeScript (strict)
- Tailwind CSS 3.4
- No backend — fully static

## Getting started

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. Done.

No environment variables required.

## Structure

```
app/
  layout.tsx         # Root layout + metadata
  page.tsx           # Home page (assembles all sections)
  globals.css        # Tailwind + design tokens + utility classes
components/
  Hero.tsx
  TrustBar.tsx
  HowItWorks.tsx     # also renders the #qualify anchor target
  Rewards.tsx
  UrgencyBanner.tsx  # daily-resetting countdown + entry counter
  FAQ.tsx            # accordion
  FinalCTA.tsx
  Footer.tsx
  StickyCTA.tsx      # mobile sticky bottom button
  utils.ts           # smooth-scroll helper
public/images/       # drop real food photos here
tailwind.config.ts   # brand tokens (canes-red / canes-yellow / canes-ink)
```

## Brand tokens (Tailwind)

- `canes-red` — `#E31C23`
- `canes-yellow` — `#FFD400`
- `canes-ink` — `#0B0B0B`

Buttons: `.btn-yellow`, `.btn-red` defined in `app/globals.css`.

## Funnel flow

All CTA buttons (`Check If You Qualify`, `Start My Check`, `Claim My Spot`, `Enter Now`) smooth-scroll to the `#qualify` section — the natural next step where you can wire in your quiz/qualification step.
