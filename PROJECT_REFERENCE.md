# Pavan Gajula — Portfolio Project Reference

> Single source of truth for the entire project. Fonts, colors, sizes, components, content, structure, and rules — all in one place. Update this file whenever anything changes.

---

## 1. Project Overview

**Who**: Pavan Kumar Gajula — Java Full Stack Developer & HCI researcher  
**Location**: Elkridge, Maryland, US  
**Current role**: Java Full Stack Developer @ Synack Solutions LLC (Jul 2024 – present)  
**Goal**: Dual-audience portfolio targeting PhD program applications (HCI/CS) and industry hiring  
**Site name in code**: `coldcraft-studio`  
**Live base URL**: `https://coldcraft.studio` (set in metadata)

---

## 2. Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14.2.5 |
| Language | TypeScript | ^5.5.0 |
| Styling | Custom CSS (globals.css) + Tailwind v3 | 3.4.4 |
| Animation | Framer Motion | ^11.3.0 |
| Icons | Lucide React | ^0.408.0 |
| Dev icon set | Devicons (CDN) | latest |
| Utilities | clsx | ^2.1.1 |

**Commands**
```
npm run dev    → localhost:3000
npm run build  → production build
npm run start  → serve build
```

---

## 3. File Structure

```
/
├── app/
│   ├── globals.css          ← all styles live here (single stylesheet)
│   ├── layout.tsx           ← root layout: Nav + Footer wrapper
│   ├── page.tsx             ← homepage
│   ├── about/page.tsx       ← about page
│   ├── contact/page.tsx     ← contact page (mailto form)
│   ├── work/                ← case studies (placeholder)
│   ├── research/            ← research page (placeholder)
│   ├── writing/             ← writing page (placeholder)
│   └── services/            ← services page (placeholder)
├── components/
│   ├── Nav.tsx              ← fixed nav bar
│   ├── Footer.tsx           ← footer
│   └── SectionHeader.tsx    ← reusable section header
├── public/                  ← empty (no images yet)
├── tailwind.config.js
├── next.config.js
├── package.json
├── design.md                ← anydesign analysis (generated)
└── design-tokens.json       ← DTCG token export (generated)
```

---

## 4. Color System

All colors are CSS custom properties defined in `app/globals.css` `:root`.

### Palette

| Variable | Hex | Role |
|---|---|---|
| `--bg` | `#0a0a0a` | Page background (near-black) |
| `--bg-elev` | `#111111` | Elevated surface (cards, inputs, stats) |
| `--border` | `#1f1f1f` | Default hairline (0.5px) |
| `--border-strong` | `#2a2a2a` | Stronger hairline (cards, form fields) |
| `--text` | `#fafafa` | Primary text |
| `--text-muted` | `#a0a0a0` | Secondary text (taglines, descriptions) |
| `--text-dim` | `#666666` | Tertiary text (metadata, labels, captions) |
| `--accent` | `#a3e635` | Lime green — the ONE chromatic moment |
| `--accent-dim` | `#6b8e1f` | Dimmed accent (scrollbar hover) |

### Rules
- **One accent color only.** Never introduce a second.
- `--accent` appears on: section numbers, CTA buttons (fill), active nav underlines, hover states, cursor blink, eyebrow labels, tags, `now` timeline dates.
- Elevation is done via **surface tone change** (`--bg` → `--bg-elev`), never shadows.
- All borders are **0.5px** (sub-pixel, Retina-crisp).
- Hover tints use `rgba(163, 230, 53, 0.02–0.05)` — the accent at very low opacity.

### Contrast (WCAG 2.1)
| Pair | Ratio | Level |
|---|---|---|
| `--text` on `--bg` | 18.97:1 | AAA |
| `--accent` on `--bg` | 13.13:1 | AAA |
| `--text-muted` on `--bg` | 7.57:1 | AAA |

---

## 5. Typography

### Fonts loaded
```
Google Fonts:
  League Spartan — weights 400, 700, 900
  Nunito Sans   — weights 300, 400, 600, 700
```

**Import URL** (in `globals.css` line 1):
```
https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700;900&family=Nunito+Sans:wght@300;400;600;700&display=swap
```

### CSS Variables
```css
--font-display: 'League Spartan', sans-serif;   /* headlines / name */
--font-body:    'Nunito Sans', sans-serif;       /* body, eyebrows, buttons, labels */
--sans: var(--font-display);  /* alias */
--body: var(--font-body);     /* alias */
```

### Type Scale

| Level | Class | Font | Weight | Size (fluid) | Line-height | Letter-spacing | Used on |
|---|---|---|---|---|---|---|---|
| **H1** | `.t-h1` | League Spartan | 900 | `clamp(2.25rem, 5vw+1rem, 3.75rem)` = 36→60px | 0.95 | −0.03em | Hero name, page titles, case titles |
| **H2** | `.t-h2` | League Spartan | 700 | `clamp(1.625rem, 3vw+0.5rem, 2.25rem)` = 26→36px | 1.1 | −0.01em | Section headings, note titles, about h2, research quote |
| **H3** | `.t-h3` | Nunito Sans | 700 | `clamp(1.25rem, 1.5vw+0.5rem, 1.5rem)` = 20→24px | 1.25 | normal | Interest titles, project titles, timeline roles, case h3 |
| **Body** | `.t-body` | Nunito Sans | 400 | `clamp(1rem, 0.4vw+0.9rem, 1.0625rem)` = 16→17px | 1.75 | normal | Paragraphs, descriptions |
| **Eyebrow** | `.t-eyebrow` | Nunito Sans | 600 | 0.75rem (12px fixed) | 1.4 | 0.16em | Section labels, tags, page eyebrows, form labels |
| **Label** | `.t-label` | Nunito Sans | 600 | 0.875rem (14px fixed) | — | normal | Buttons, nav links |
| **Caption** | `.t-caption` | Nunito Sans | 400 | 0.8125rem (13px fixed) | 1.5 | normal | Dates, metadata, project numbers, footer |

### Typography Rules
- Body text never below 16px on any device.
- Negative letter-spacing only on display sizes (H1: −0.03em, H2: −0.01em). Never on body.
- H1 weight is always 900 (League Spartan Black). H2 is 700. Never use 500 — neither font has it loaded.
- Loaded weights only: League Spartan 400/700/900, Nunito Sans 300/400/600/700.
- `<strong>` in body text = Nunito Sans 700.
- Max paragraph width: `38rem` (~608px). Applied to `.hero-tagline`, `.research-body`, `.research-quote`.
- All eyebrows/labels are `text-transform: uppercase` with `letter-spacing: 0.16em`.

---

## 6. Layout

### Container
```css
max-width: 1100px;
padding: 0 32px;   /* 0 20px on mobile ≤700px */
```

### Responsive Breakpoints
| Name | Width | Key changes |
|---|---|---|
| Tablet | ≤ 900px | Stats 2×2, interests 1-col, about grid 1-col, case grid 1-col |
| Mobile | ≤ 700px | Container padding 20px, nav gap 16px, hero pads 120/60px, project rows 2-col (stack+CTA hidden), sections 60px, timeline 1-col |

### Section Spacing
- Major sections: `padding: 100px 0`
- Secondary sections: `padding: 80px 0`
- Compact sections: `padding: 60px 0`
- Page top offset (fixed nav): `padding-top: 120px` → `80px` mobile

### Grid Patterns
| Pattern | Columns | Used in |
|---|---|---|
| Stats bar | `repeat(4, 1fr)` → 2×2 at 900px | Homepage stats |
| Interests | `repeat(3, 1fr)` → 1-col at 900px | Homepage interests |
| Project rows | `60px 1fr 200px 100px` → `40px 1fr` at 700px | Homepage & work page |
| Timeline | `180px 1fr 140px` → `1fr` at 700px | Homepage & about |
| About grid | `1fr 2fr` → `1fr` at 900px | About page |
| Case study | `240px 1fr` → `1fr` at 900px | Work/case pages |
| Contact | `280px 1fr` → `1fr` at 900px | Contact page |

---

## 7. Components

### Nav (`components/Nav.tsx`)
- Fixed, top, full-width, z-index 100
- Glass blur: `backdrop-filter: blur(12px)`, `background: rgba(10,10,10,0.85)`
- Logo: `PG.` — "PG" in Nunito Sans 13px, dot in `--accent`
- Links: `home`, `about` — Nunito Sans 600, 14px, active underline in `--accent`
- Active detection via `usePathname()`

### Footer (`components/Footer.tsx`)
- Left: `© 2025 Pavan Gajula · Elkridge, MD · +1 (667) 303-6479`
- Right links: `email`, `linkedin`, `github` with ↗ suffix
- Email: pavangajula1998@gmail.com
- LinkedIn: linkedin.com/in/gajulapavankumar
- GitHub: github.com/ ← **needs real username**

### Buttons
```css
.btn         /* ghost — transparent, border, hover accent */
.btn-primary /* filled — accent bg, dark text, inverts on hover */
```
- Padding: `14px 22px`, min-height: `44px`, border-radius: `4px`
- Font: Nunito Sans 600, 14px
- Hover: `border-color: --accent`, `color: --accent`, faint accent bg

### Section Header
```html
<div class="section-header">
  <div class="section-num"><span class="accent">01</span> / label</div>
  <div class="section-meta">meta text</div>
</div>
```
- Eyebrow style: Nunito Sans 600, 12px, 0.16em tracking, uppercase
- Hairline bottom border

### Interest Card
- 3-col grid with 1px gap (gap is the border — grid bg = `--border`)
- Tag (eyebrow, accent) → Title (H3 Nunito Sans 700) → Desc (body 15px)
- Hover: `rgba(163,230,53,0.03)` bg

### Project Row
- 4-col grid: number / info / stack / CTA
- Hover: title + CTA → accent, row → faint accent bg, arrow translates 6px

### Note Card
- Max-width 780px, `border-radius: 6px`, `border: 0.5px solid --border-strong`
- Subtle gradient: `linear-gradient(135deg, rgba(163,230,53,0.02), transparent)`
- Hover: border → accent
- Sub-sections: meta (hairline bottom) → H2 title → body paragraphs

### Contact Form (`app/contact/page.tsx`)
- Mailto handler — opens mail client with pre-filled subject + body
- Fields: Name, Email, Company (opt), Inquiry Type (4 toggle buttons), Budget (freelance only), Message
- Inquiry types: Freelance / Hiring / Research / Other
- On submit: `window.location.href = mailto:...`

---

## 8. Page Content

### Homepage (`app/page.tsx`)

**Hero**
```
Eyebrow: FULL-STACK · MARYLAND · CURRENTLY @ SYNACK
H1:      Pavan Gajula.
Tagline: Five years building enterprise systems in Java and React.
         Two years shipping websites for the people who actually need them.
         Lately, I keep noticing the same thing — and I want to study it seriously.
Buttons: [view work →]  [download CV]   ← CV links to # (needs file)
```

**Stats**
| Label | Value |
|---|---|
| YEARS BUILDING | 5+ |
| PRODUCTION SCALE | 10K+ users |
| VOLUNTEER HOURS | 450+ |
| BASED IN | Maryland, US |

**Currently**
```
Building Spring Boot microservices at Synack by day. Volunteering as a full-stack developer
for a Howard County youth sports nonprofit by night. Writing about what breaks when
developers and AI write code together.
```

**Research Interests** (3 cards)

| Tag | Title | Description |
|---|---|---|
| 01 · HUMAN-AI INTERACTION | Why do I trust AI more in Java than in bash? | My skepticism rises and falls with how well I know the language. The places I get burned are exactly the places I'm not paying close attention — which is exactly where AI tools are most useful, and most risky. |
| 02 · DEVELOPER TOOLS | What would a tool that helped me not accept code look like? | Most AI coding tools are designed around the accept button. The harder design problem is making it cheap and natural to push back, edit, or reject — especially in the moments when accepting feels easiest. |
| 03 · PROGRAMMER EXPERIENCE | What happens to learning when AI writes the boilerplate? | Boilerplate is how junior developers used to learn the shape of a system. When the AI writes it for them, the path is faster — but the path through the path is missing. I'm not sure yet what that costs. |

**Selected Work** (section 02)

| # | Project | Description | Stack | Link |
|---|---|---|---|---|
| 001 | Straight Path Athletics | Youth sports nonprofit · 200+ athletes · Stripe + Typeform integration | HTML · CSS · JS · Stripe | /work#case-1 |
| 002 | Synack Solutions | Corporate site for a 20-year IT services firm · 15+ pages · 6 service lines | HTML · CSS · Tailwind · AOS | /work#case-2 |
| 003 | HKM Engineers | Construction engineering firm in Illinois · 3 service lines across transportation, structures, facilities | HTML · CSS · JS | /work#case-3 |

**What I Keep Noticing** (section 03)
```
Quote: "The more developers use AI coding tools, the less the problem becomes
        code generation — and the more it becomes calibration, verification, and trust."

Body:  I write code with AI assistants every day. The interesting question stopped being
       whether they can write working code — they often can. The question now is when
       developers should trust the output, how that trust gets calibrated, and what
       happens when the verification cost exceeds what humans are willing to pay.
```

**Notes** (section 04)
```
No. 01 · HUMAN-AI TRUST · NOV 2025
Title: The asymmetry of developer skepticism

Para 1: When I'm writing core business logic in Spring Boot, I use Claude Code like an
extension of my own brain — I anticipate its suggestions, accept them instantly, and
rarely get burned because the patterns are deeply ingrained in memory. Last month I had
to switch contexts to a complex bash script for a deployment pipeline, where my syntax
knowledge is rustier, and I caught myself passively accepting lines I couldn't instantly
verify. It passed a flag that didn't exist in that version of the CLI, silently breaking
the build downstream.

Para 2: The realization: my trust in AI tools isn't a function of the AI's output quality
— it's a function of my own confidence in the language. When my own knowledge drops, my
baseline skepticism drops with it. Which is exactly when silent failures slip through.
The interesting design problem isn't making the AI more accurate. It's making developers
more skeptical in their weak spots, not less.

Footer line: • more notes coming. monthly cadence.
```

**Experience** (section 05)

| Date | Role | Where | Tag |
|---|---|---|---|
| JUL 2024 — NOW | Java Full Stack Developer | Synack Solutions LLC · Maryland, US | PRESENT |
| JAN 2023 — MAY 2024 | M.S. Software Engineering | UMBC · Maryland, US · GPA 3.53 | EDUCATION |
| JAN 2021 — JAN 2023 | Java Full Stack Developer | Tata Consultancy Services · Hyderabad, India | INDUSTRY |

---

### About Page (`app/about/page.tsx`)

**Header**
```
Eyebrow: ABOUT
H1:      Engineer by craft.
Sub:     Java by day. Small websites by night. Curious about everything in between.
```

**Sidebar (sticky)**
```
Name:    Pavan Kumar Gajula
Where:   Elkridge, MD · US
Role:    Java Full Stack Developer
Company: Synack Solutions LLC
Degree:  M.S. Software Engineering
School:  UMBC · GPA 3.53
Phone:   removed
Email:   pavangajula1998@gmail.com
Photo:   Placeholder [ photo ]     ← no image uploaded yet
```

**The short version**
```
I'm a Java Full Stack Developer with 5+ years shipping enterprise applications —
Spring Boot microservices, Angular and React frontends, Kafka pipelines, AWS deployments,
and CI/CD on Jenkins. Currently at Synack Solutions in Maryland, after two years at TCS
contributing to a platform serving 10,000+ users across 10+ international markets.

On the side, I've shipped three production websites — including a youth sports nonprofit
serving 200+ athletes with Stripe payments, where I've contributed 450+ volunteer hours.
The day job and the side work feed each other. Enterprise systems teach me what stays the
same; small client work teaches me what changes. Both teach me where developers, tools,
and AI assistants quietly trip over each other — which is the thing I keep noticing, and
the thing I want to study seriously.
```

**What I'm interested in**
```
Three threads I keep pulling on, lately:
→ Human-AI interaction — how developers calibrate trust in AI coding assistants,
  and what they pay (in time and attention) to verify them
→ Developer tools — interfaces that make AI-generated code easier to inspect,
  review, and reason about
→ Programmer experience — what changes about thinking, skill, and understanding
  when the assistant writes more of the code
```

**Stack**

| Category | Skills |
|---|---|
| Backend · Professional | Java 8/11/17, Spring Boot, Spring Security, Spring Data JPA, Hibernate, Node.js, Kafka, Spark |
| Frontend | React, Angular 2–8, JavaScript ES6+, TypeScript, Tailwind, HTML5, CSS3, LESS/SCSS |
| Cloud · DevOps | AWS, Azure, Docker, Kubernetes, Jenkins, Ansible, OpenShift, Linux |
| Databases | Oracle PL/SQL, PostgreSQL, MySQL, SQL Server, MongoDB |
| Testing · Tools | JUnit 5, Selenium, SonarQube, Maven, Gradle, Git, Jira, Figma |
| AI Tooling · Daily | GitHub Copilot, Claude Code |
| Also proficient in | Python, Kotlin, Scala, C/C++, Hadoop, Apache Storm, Apache Solr, JMS, ActiveMQ, IBM MQ, Mockito, Log4j, Tomcat, WebSphere, Postman, jQuery, JSP/JSTL |

**Experience** (2-col timeline on about page)

| Date | Role / Where |
|---|---|
| JUL 2024 — NOW | Java Full Stack Developer · Synack Solutions LLC · Maryland, US |
| JAN 2023 — MAY 2024 | M.S. Software Engineering · UMBC · GPA 3.53 |
| JAN 2021 — JAN 2023 | Java Full Stack Developer · Tata Consultancy Services · Hyderabad, India |

**Get in touch**
```
Reach me at pavangajula1998@gmail.com or +1 (667) 303-6479. I read everything —
especially if you're working on developer tools, you need a website built, or you
study how humans and machines collaborate.

Links: linkedin ↗ · github ↗
```

---

### Contact Page (`app/contact/page.tsx`)

**Header**
```
Eyebrow: CONTACT
H1:      Let's talk.
Sub:     Hiring for an engineering role, exploring research collaboration, or thinking
         about a freelance project — I read every message and reply within 24 hours.
```

**Left column**
```
DIRECT
  pavangajula1998@gmail.com  (Best for project inquiries)
  linkedin.com/in/gajulapavankumar  (Best for hiring conversations)

LOCATION
  Elkridge, Maryland
  Eastern Time (UTC−5)
  Available remotely worldwide. On-site in MD / DC / VA for client meetings.

RESPONSE TIME
  Within 24 hours
  Usually much faster on weekdays
```

**Right column (form)**
```
Fields: NAME * / EMAIL * / COMPANY (optional) / INQUIRY TYPE / BUDGET / MESSAGE *
Inquiry types: Freelance · Hiring · Research · Other
Budget options (freelance only): Under $5,000 / $5,000–$10,000 / $10,000–$25,000 / $25,000+
Submit: "send message →"  → opens mailto: with pre-filled subject + body
Note:  "This opens your mail client with a pre-filled message. You'll send it from there."
```

---

## 9. Known TODOs / Gaps

| Item | Priority | Notes |
|---|---|---|
| Download CV button | High | `href="#"` on homepage, needs real PDF in `/public/` |
| Photo on about page | Medium | `[ photo ]` placeholder, needs headshot |
| GitHub link in footer | Medium | Links to `github.com/` not the profile — needs real username |
| Work page cases | Medium | `/work` route exists, case content is placeholder |
| Research page | Low | Route exists, no content |
| Writing page | Low | Route exists, no content |
| Services page | Low | Route exists, no content |
| Mobile nav | Low | No hamburger menu — only 2 links (home + about), fits fine |
| Phone number | Done | Removed from footer, about sidebar, and about contact paragraph |

---

## 10. Design Rules (Do's and Don'ts)

### Do
- Use `--accent` (#a3e635) for exactly ONE role per region: section numbers, CTA fills, active states, hover transitions, blink cursor.
- Set all eyebrows/labels in Nunito Sans 600, 12px, `letter-spacing: 0.16em`, `text-transform: uppercase`.
- Number every new major section. The `01 / label` system is the site's skeleton.
- Keep body text paragraphs at `max-width: 38rem`.
- Use `border: 0.5px solid` throughout — never 1px on structural dividers.
- Use H1 weight 900, H2 weight 700, H3 weight 700, body weight 400. That's the full hierarchy.
- Apply negative `letter-spacing` only on H1 (−0.03em) and H2 (−0.01em).

### Don't
- Don't introduce a second accent color.
- Don't use `font-weight: 500` — neither font has it loaded; it silently falls back to 400.
- Don't add shadows — elevation is surface-tone only (`--bg` → `--bg-elev`).
- Don't use `border-radius` above 6px — near-square is deliberate.
- Don't add negative letter-spacing to body or caption text.
- Don't use League Spartan for body text — it's display-only (H1, H2, stat values).
- Don't let buttons fall below 44×44px touch target.
