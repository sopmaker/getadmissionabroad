# Get Admission Abroad

Founder-led study abroad consulting website for Prakash (Delhi, India).

Built with **Next.js 16 App Router + TypeScript + Tailwind CSS**.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (navy #1a2744 + gold #c9a84c)
- **Database**: SQLite via Prisma 7 + `@libsql/client` adapter
- **Email**: Nodemailer (SMTP, optional)
- **Font**: System font stack (Arial/Helvetica/sans-serif)

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

## Getting Started

```bash
npm install
cp .env.example .env    # configure DATABASE_URL and SMTP vars
npx prisma db push
npm run dev
```

## Environment Variables

```
DATABASE_URL="file:./prisma/dev.db"
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASS=""
OWNER_EMAIL="getadmissionabroad.in@gmail.com"
```

SMTP variables are optional — bookings are saved to SQLite even if email is not configured.
