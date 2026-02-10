This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Facebook / Meta Tracking
NEXT_PUBLIC_FB_PIXEL_ID=1217233720342571
FB_ACCESS_TOKEN=your_conversions_api_access_token
FB_TEST_EVENT_CODE=TEST2156  # Remove in production

# Google Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=

# Hotjar (optional)
NEXT_PUBLIC_HOTJAR_ID=
NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION=6

# Resend Email Service
RESEND_API_KEY=
RESEND_AUDIENCE_ID=

# Database (Prisma) – required for email open tracking
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Base URL for emails and tracking (Confirm link, pixel, CAPI). Production: https://fluxpriceai.com
NEXT_PUBLIC_APP_URL=https://fluxpriceai.com
# Optional: server-side fallback (e.g. APP_URL) if NEXT_PUBLIC_APP_URL is not set
```

### Facebook Conversions API Setup

1. **Pixel ID**: `1217233720342571` (already configured)
2. **Access Token**: Get from Business Settings > System Users > Generate Token with `ads_management` permission
3. **Test Event Code**: Use `TEST2156` during testing. Events appear in Events Manager > Test Events. Remove this variable in production.

**Hashing:** All customer information (email, phone, first/last name) is hashed with SHA-256 before sending. Only `client_ip_address`, `client_user_agent`, `fbc` (click ID), and `fbp` (browser ID) are sent unhashed, per Facebook’s requirements.

#### How to test Facebook Conversion API

1. **Set env vars** in `.env.local`:
   - `NEXT_PUBLIC_FB_PIXEL_ID=1217233720342571`
   - `FB_ACCESS_TOKEN=<your_token>`
   - `FB_TEST_EVENT_CODE=TEST2156` (so events go to Test Events)

2. **Run the app**: `npm run dev` and open `http://localhost:3000`.

3. **Trigger a Lead**: Click “Join the Waitlist”, enter an email, submit. This sends both the Pixel event and the server-side CAPI event.

4. **Check Events Manager**: [Meta Events Manager](https://business.facebook.com/events_manager) → select your Pixel → **Test Events** tab. You should see PageView and Lead events (Lead may appear twice but is deduplicated by `event_id`).

5. **Optional**: Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) to confirm Pixel events in the browser.

6. **Production**: Remove `FB_TEST_EVENT_CODE` from env so events go to live Overview instead of Test Events.

### Database and email open tracking

The app uses **Prisma** with PostgreSQL (e.g. Neon or Vercel Postgres) to record email open events. When a user opens the welcome email, a tracking pixel calls `GET /api/track-open?token=...`; the server fires a Facebook CAPI Lead event **once per recipient** (strict one-open-per-user).

- Set `DATABASE_URL` to your Postgres connection string.
- Install dependencies and generate Prisma client: `npm install` (runs `prisma generate` via postinstall).
- Run migrations: `npx prisma migrate deploy` (or `npx prisma migrate dev` in development).
- The tracking pixel URL in emails uses `NEXT_PUBLIC_APP_URL` if set, otherwise `https://fluxpriceai.com` or the Vercel deployment URL.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
