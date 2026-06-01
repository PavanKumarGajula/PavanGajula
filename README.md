# Coldcraft Studio — Portfolio Site

Personal portfolio and freelance landing for Pavan Gajula. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Designed dark with an Emerald Forge palette.

## Stack

- **Next.js 14** — App Router, React Server Components where possible
- **Tailwind CSS** — utility styling with a custom Emerald palette
- **Framer Motion** — page and scroll animations
- **Lucide React** — icon set
- **TypeScript** — type safety throughout

## Pages

| Route        | Purpose                                                                  |
| ------------ | ------------------------------------------------------------------------ |
| `/`          | Hero, three-tracks framing, work preview, tech marquee, CTA              |
| `/work`      | Detailed case studies for live engineering projects                      |
| `/research`  | HCI research interests, open questions, observations from practice, reading list, plan |
| `/writing`   | Essay index — published posts and pipeline of drafts                     |
| `/services`  | Freelance offerings, process, pricing approach                           |
| `/about`     | Bio, experience timeline, education, skills, off-clock                   |
| `/contact`   | Contact form, direct channels, response policy                           |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & deploy

The easiest path is **Vercel** (one-click for Next.js projects):

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js. Click Deploy.
4. Add a custom domain in Vercel project settings (e.g. `coldcraft.studio`).

Or build/serve manually:

```bash
npm run build
npm start
```

## Customizing

### Add a new project
Edit `lib/projects.ts`. The Home page and Work page both consume this file.

### Change colors
Tailwind config lives in `tailwind.config.js`. The Emerald palette is in the `colors.emerald` and `colors.ink` blocks.

### Wire the contact form to a real backend
Currently `app/contact/page.tsx` uses a `mailto:` handoff. For a real API:

1. Sign up for [Resend](https://resend.com) (free tier covers low-volume portfolios) or [Formspree](https://formspree.io).
2. Create `app/api/contact/route.ts` with a POST handler that calls the email service.
3. Replace `window.location.href = mailto:...` with a `fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })`.

### Add a resume PDF download
Drop `resume.pdf` into the `public/` directory. The download link on the About page is already wired to `/resume.pdf`.

### Add OG image
Drop a `1200x630` PNG named `opengraph-image.png` into `app/` and Next.js will pick it up automatically for social previews.

## Project structure

```
coldcraft/
├── app/
│   ├── globals.css
│   ├── layout.tsx          ← root layout, metadata, fonts
│   ├── page.tsx            ← home
│   ├── work/page.tsx
│   ├── research/page.tsx   ← HCI research interests + reading list
│   ├── writing/page.tsx    ← essay index
│   ├── services/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Nav.tsx             ← sticky responsive nav (7 routes)
│   ├── Footer.tsx
│   └── SectionHeader.tsx
├── lib/
│   ├── projects.ts         ← project data + research-angle observations
│   └── posts.ts            ← writing post stubs (set status:"published" to ship)
├── public/                 ← static assets (drop resume.pdf, favicons)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Todo (v1.1)

- [ ] Individual case study pages at `/work/[slug]` with deeper writeups
- [ ] Wire contact form to Resend API
- [ ] Add `opengraph-image.png` and `favicon.ico`
- [ ] Add a `/blog` section (MDX) once there are 2–3 posts ready
- [ ] Replace project visual placeholders with real screenshots
- [ ] Drop `resume.pdf` into `/public`

## License

Personal portfolio. Not licensed for redistribution.
