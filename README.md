# Get Admission Abroad

Founder-led study abroad consulting website for Prakash (Delhi, India).

Built with **Next.js 16 App Router + TypeScript + Tailwind CSS**.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (navy #1a2744 + gold #c9a84c)
- **Database**: SQLite via Prisma 7 + `@libsql/client` adapter
- **Email**: Nodemailer (SMTP, optional)
- **Font**: Inter (Google Fonts)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, testimonials, CTAs |
| `/services` | Service details (profile building, strategy, docs) |
| `/countries` | US, UK, Canada, Australia, UAE |
| `/parents` | Parent-focused page with FAQ |
| `/success-stories` | Google reviews + anonymised outcomes |
| `/about-prakash` | Founder bio and philosophy |
| `/contact` | WhatsApp/email/Instagram + contact form |
| `/book` | Booking calendar with date/slot picker |
| `/api/book` | POST endpoint for booking submissions |

## Deploy to Vercel (get a live preview link)

The fastest way to get a live preview URL:

1. Go to **[vercel.com](https://vercel.com)** → **Add New Project**
2. Import the **`sopmaker/getadmissionabroad`** GitHub repository
3. Vercel will auto-detect Next.js — click **Deploy**
4. Add these environment variables in the Vercel dashboard → Settings → Environment Variables:

| Variable | Value |
|---|---|
| `DATABASE_URL` | For production use a hosted DB like [Turso](https://turso.tech) (`libsql://your-db.turso.io?authToken=token`). For a quick preview you can use `file:./dev.db` (note: ephemeral on Vercel) |
| `OWNER_EMAIL` | `getadmissionabroad.in@gmail.com` |
| `SMTP_HOST` | *(optional)* |
| `SMTP_USER` | *(optional)* |
| `SMTP_PASS` | *(optional)* |

Once connected, **every push to any branch automatically gets its own preview URL** — Vercel posts the link directly in the GitHub PR.

## GitHub Pages Preview (automatic — no login required)

A GitHub Actions workflow automatically builds and publishes the site to GitHub Pages on every push.

**One-time setup (30 seconds):**

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `gh-pages` / folder: `/ (root)` → **Save**

**Your live preview URL will be:**

> **https://sopmaker.github.io/getadmissionabroad/**

The workflow triggers on every push — the URL updates within ~2 minutes. The booking form's submit button won't work in this preview (it's a static export, no server), but all pages and UI are fully visible.

## Local Development

```bash
npm install          # also runs `prisma generate` via postinstall
cp .env.example .env # fill in DATABASE_URL (default SQLite works out of the box)
npx prisma db push   # create the SQLite database tables
npm run dev          # http://localhost:3000
```

## Environment Variables

See `.env.example` for a full list. SMTP variables are optional — bookings are saved to the database even without email configured.
