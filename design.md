---
version: anydesign-1
name: Pavan Gajula — Personal Portfolio
source: http://localhost:3000
captured_at: 2026-05-31
description: |
  Dark editorial portfolio for a full-stack engineer and HCI researcher. Monospaced
  metadata labels, tracked uppercase eyebrows, and italic serif contrast establish a
  "developer who reads" voice. The current lime accent (#a3e635) reads as indie-hacker
  terminal. The refresh swaps it for violet (#a78bfa) to land between rigorous
  academic and technically credible — the right register for PhD + industry dual targeting.

colors:
  # CURRENT palette
  current-bg: "#0a0a0a"
  current-bg-elev: "#111111"
  current-border: "#1f1f1f"
  current-border-strong: "#2a2a2a"
  current-text: "#fafafa"
  current-text-muted: "#a0a0a0"
  current-text-dim: "#666666"
  current-accent: "#a3e635"
  current-accent-dim: "#6b8e1f"

  # REFRESH palette (proposed)
  bg: "#0a0a0f"
  bg-elev: "#111118"
  border: "#1e1e2a"
  border-strong: "#28283a"
  text: "#fafafa"
  text-muted: "#a0a0b0"
  text-dim: "#666677"
  accent: "#a78bfa"
  accent-dim: "#6d28d9"

typography:
  display:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "clamp(48px, 8vw, 96px)"
    fontWeight: 500
    letterSpacing: "-3px"
    lineHeight: 0.95
  h2:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(28px, 4vw, 44px)"
    fontWeight: 500
    letterSpacing: "-1px"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-large:
    fontSize: "clamp(20px, 2.4vw, 28px)"
    fontWeight: 400
    lineHeight: 1.4
  caption-mono:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "1.5px"
  eyebrow-mono:
    fontFamily: "JetBrains Mono, SF Mono, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "1.5px"
    textTransform: "uppercase"
  serif-display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontStyle: "italic"
    fontWeight: 400

spacing:
  base: 4px
  scale: [4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 56, 60, 80, 100]

rounded:
  xs: 4px
  sm: 6px

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    typography: "{typography.caption-mono}"
    rounded: "{rounded.xs}"
    padding: "12px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    border: "0.5px solid {colors.border-strong}"
    typography: "{typography.caption-mono}"
    rounded: "{rounded.xs}"
    padding: "12px 22px"
  stat-block:
    border: "0.5px solid {colors.border}"
    padding: "28px 24px"
  interest-card:
    backgroundColor: "{colors.bg}"
    border: "none"
    padding: "32px 28px"
  project-row:
    border-top: "0.5px solid {colors.border}"
    padding: "32px 0"
  note-card:
    border: "0.5px solid {colors.border-strong}"
    rounded: "{rounded.sm}"
    padding: "36px 36px 32px"
  timeline-row:
    border-top: "0.5px solid {colors.border}"
    padding: "28px 0"
  nav:
    backgroundColor: "rgba(10, 10, 15, 0.85)"
    backdropFilter: "blur(12px)"
    border-bottom: "0.5px solid {colors.border}"
---

# Design Analysis — Pavan Gajula Portfolio

> Analysis generated with the `anydesign` skill.
> Date: 2026-05-31
> Analysis emphasis: mixed — redesign refresh with design system extraction

---

## Source

- **Source type**: URL (Next.js with SSR — HTML was real content)
- **Path / URL**: `http://localhost:3000`
- **Capture method**: CSS variables extracted directly from `app/globals.css` (full source access) — ✅ high confidence on all tokens
- **Detected limitations**: Desktop only. Responsive rules observed in CSS but no multi-viewport screenshot taken.

---

## TL;DR

Terminal-editorial dark portfolio with a rigorous typographic hierarchy and a monospaced metadata system. The `#a3e635` lime green is the single chromatic voltage signal — it works mechanically but reads "indie hacker / dev tool" rather than "researcher." Swapping the accent to violet `#a78bfa` and adding a faint indigo undertone to the near-blacks will shift the register to "thoughtful systems engineer who studies the craft" — which is exactly what a dual PhD + industry audience needs to feel.

---

## 1. Visual identity

### 1.1 Surface description

**Personality**: Terminal-editorial, typographically rigorous, introspective, minimal-dense, research-forward

**Mood**: Quiet confidence. Reads "I've thought carefully about this and here's the output." Not performative — the writing and layout do the work.

**Detectable stylistic references**: Shares DNA with Tom MacWright's personal site, Vercel's dark marketing surfaces, and the broader "serious developer personal site" genre. The serif italic contrast (Instrument Serif) lifts it above the pure terminal aesthetic into editorial territory.

**Information density**: Balanced. Dense data zones (stats grid, project rows, timeline) alternate with open reading zones (hero, research quote, currently section). The rhythm is deliberate.

**Implicit positioning**: Developers and researchers who read deeply. Not trying to impress non-technical stakeholders.

**Confidence**: ✅ high — clear material, direct source access

### 1.2 Brand voice / Atmosphere

The site believes that the work should speak plainly and the design should not compete with it. Every structural decision — the numbered section system (01, 02, 03…), the hairline borders as section dividers, the monospaced eyebrow labels — exists to create a reading frame, not decoration. The design earns credibility through restraint. The lime green is the only chromatic moment, and it lands hard precisely because everything else is neutral.

This is the portfolio of someone who studies human-AI interaction not from the outside but from inside the practice — who has written production code and then stepped back to notice what the tools did to the developer. The voice is: "I'm going to describe something I noticed. I think it matters. I'll show you why." The design matches: numbered, sequential, evidence-first.

The current tension is the accent color. Lime green (#a3e635) is the color of terminal success output, GitHub contribution graphs, and indie hacker landing pages. It correctly signals "I build things" but incorrectly signals the audience — it gravitates toward the solo-developer brand rather than the researcher-practitioner brand. A violet accent (`#a78bfa`) keeps the same voltage function (one chromatic moment in an otherwise neutral palette) while shifting the implicit register toward "HCI researcher at a serious institution."

### 1.3 The "ONE brand thing"

**The thing**: The numbered-section metadata system — `{typography.eyebrow-mono}` (JetBrains Mono, 11-13px, 1.5px letter-spacing, uppercase) used for every section anchor (`01 / what I'm interested in`, `02 / selected work`, etc.) paired with the `{colors.accent}` number. The slash divider between number and label is the specific gesture.

**Why it carries the brand**: Remove this and the site becomes a generic dark portfolio. Keep it and the entire content structure reads like a numbered academic outline — reinforcing the researcher framing at every scroll point.

**How everything else supports it**: The serif italic in headings (Instrument Serif) creates warmth so the mono doesn't feel sterile. The hairline borders act as invisible grid lines that ground each numbered section. The body text never competes — it's set at neutral Geist with generous line-height.

**Where it appears**: Every major section header, the project row numbers (001, 002, 003), note card metadata (NO. 01). **Where it doesn't**: The hero eyebrow uses it for location/status (not a number), suggesting the number system is reserved for navigational hierarchy.

*Confidence*: ✅ high

---

## 2. Design System (tokens)

### 2.1 Colors

All tokens extracted directly from CSS variables — ✅ high confidence throughout.

| Token | Hex | Role | Where it appears | Confidence |
|---|---|---|---|---|
| `bg` | `#0a0a0a` | Base background | `<body>` | ✅ |
| `bg-elev` | `#111111` | Elevated surface | Stats interior, case divider | ✅ |
| `border` | `#1f1f1f` | Default hairline | Section dividers, grid separators | ✅ |
| `border-strong` | `#2a2a2a` | Stronger hairline | Card borders, note card | ✅ |
| `text` | `#fafafa` | Primary text | Headings, body | ✅ |
| `text-muted` | `#a0a0a0` | Secondary text | Taglines, descriptions | ✅ |
| `text-dim` | `#666666` | Tertiary / metadata | Mono labels, timestamps, placeholders | ✅ |
| `accent` (current) | `#a3e635` | Chromatic voltage | Numbers, CTAs, active states, cursor blink | ✅ |
| `accent-dim` | `#6b8e1f` | Dimmed accent | Scrollbar thumb hover | ✅ |
| `accent` (proposed) | `#a78bfa` | Refined chromatic voltage | Same roles as current | ✅ (contrast 7.27:1) |
| `accent-dim` (proposed) | `#6d28d9` | Dimmed accent | Scrollbar, bg tints | ✅ |

**Legacy / unused in globals.css**: `--emerald: #10b981`, `--emerald-dim: #047857` — present but not active in the primary surface. Can be removed or kept as feedback semantics.

### 2.2 Typography

Three-family system — ✅ high confidence (explicitly declared in CSS variables).

| Token | Family | Size | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display` | Geist | clamp(48–96px) | 500 | -3px | Hero name |
| `h2` | Geist | clamp(28–44px) | 500 | -1px | Research quote, section large text |
| `body-large` | Geist | clamp(20–28px) | 400 | neutral | Hero tagline, currently text |
| `body` | Geist | 16–17px | 400 | neutral | Body paragraphs (1.75 line-height) |
| `body-sm` | Geist | 14px | 400 | neutral | Descriptions, metadata |
| `project-title` | Geist | 22px | 500 | -0.5px | Project row titles |
| `timeline-role` | Geist | 18px | 500 | -0.3px | Timeline entries |
| `caption-mono` | JetBrains Mono | 13px | 400 | 0.5–1.5px | Nav links, CTA text |
| `eyebrow-mono` | JetBrains Mono | 10–12px | 400 | 1.5px | Eyebrows, section labels, tags |
| `serif-display` | Instrument Serif | inherits | 400 italic | -2 to -3px | Hero surname, note titles (.serif spans) |

**Notable tracking discipline**: Negative tracking on all Geist display/heading use (-0.3px to -3px). Positive tracking (+1–1.5px) reserved exclusively for JetBrains Mono metadata. These never mix on the same element — ✅ clean discipline.

**Weight ceiling**: 500 is the maximum weight observed for display type. 600+ is available in Geist (loaded) but not used. This is a deliberate restraint — matches the "plain, evidence-first" brand voice.

### 2.3 Spacing

- **Inferred base unit**: 4px (fine-grained scale)
- **Observed multiples**: 4, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 56, 60, 80, 100
- **Section rhythm**: 100px top/bottom for major sections, 60–80px for secondary sections
- **Consistency**: ✅ systematic — never random

### 2.4 Radii

Extremely restrained radius system — almost architectural/squared.

- `xs` — `4px`: buttons, all nav-scale interactive elements
- `sm` — `6px`: cards (note-card, reflection block)
- `0`: project rows, section dividers, most structural elements

**Pattern**: the design reads intentionally angular. The near-zero radius is a deliberate signal against the rounded-corners-everywhere trend. Only cards get a 6px radius — enough to distinguish them from layout, not enough to soften them.

### 2.5 Elevation system

**Two-tier flat system** — no shadows used anywhere.

| Level | Treatment | Use |
|---|---|---|
| 0 — Base | `background: #0a0a0a` | Body, hero, full-bleed sections |
| 1 — Hairline | `0.5px solid #1f1f1f` | Section separators, grid lines, project rows |
| 2 — Card | `0.5px solid #2a2a2a` + `border-radius: 6px` | Note card, reflection block |
| Elevated surface | `background: #111111` | Stats interior, case study divider |

**Philosophy**: elevation is established via surface-tone change, not shadows. `#111111` reads as "higher" against `#0a0a0a` without any drop-shadow. This is signal of a mature dark-mode system — it avoids the "shadows on dark = gray blobs" problem.

#### Decorative depth

- **Atmospheric gradient** on note card: `linear-gradient(135deg, rgba(163, 230, 53, 0.02), transparent)` — a nearly invisible tint in the direction of the accent. Will need to update to `rgba(167, 139, 250, 0.02)` in the refresh.
- **Nav glass effect**: `backdrop-filter: blur(12px)` with `rgba(10, 10, 10, 0.85)` — the only layered effect in the system. Appropriately scoped to the navigation only.
- **No grid background patterns** (`.bg-grid` exists as utility but not used on primary surfaces).

### 2.6 Borders

- **Thickness**: 0.5px (sub-pixel — Retina-optimized) throughout
- **Default color**: `#1f1f1f`
- **Strong color**: `#2a2a2a`
- **Focus states**: `2px solid {colors.accent}` with 4px offset — visible and clean
- **Hover states on cards**: border-color transitions to `{colors.accent}`

### 2.7 Accessibility quick-check

See companion `design-a11y.md`. Summary:

| Pair | Ratio | AA | AAA |
|---|---|---|---|
| `text` (#fafafa) on `bg` (#0a0a0a) | 18.97:1 | ✅ | ✅ |
| `accent` lime (#a3e635) on `bg` (#0a0a0a) | 13.13:1 | ✅ | ✅ |
| `text-muted` (#a0a0a0) on `bg` (#0a0a0a) | 7.57:1 | ✅ | ✅ |
| `accent` violet (#a78bfa) on `bg` (#0a0a0a) | 7.27:1 | ✅ | ✅ |

All key pairs pass AAA. The proposed violet accent trades voltage (13.13 → 7.27) for register. Both are fully accessible.

---

## 3. Components Inventory

### 3.1 Generic components

#### Button
- **Variants**: primary (`{components.button-primary}` — accent fill, dark text), ghost (`{components.button-ghost}` — transparent + border)
- **Sizes**: one size observed (40px height approximate)
- **States**: default, hover (primary inverts to transparent/accent text; ghost gains accent border)
- **Typography**: `{typography.caption-mono}` throughout — mono for all button text
- **Radius**: `{rounded.xs}` (4px)
- **Confidence**: ✅ high

#### Nav
- **Layout**: fixed header, glass-blur surface, flex space-between
- **Links**: `{typography.caption-mono}`, `{colors.text-muted}` default, `{colors.text}` on hover
- **Active state**: `{colors.text}` + 1px `{colors.accent}` underline
- **Logo**: mono 13px, accent dot
- **Confidence**: ✅ high

#### Stats block
- **Layout**: 4-column grid with hairline dividers
- **Content**: label (`{typography.eyebrow-mono}`, `{colors.text-dim}`) + value (22px, weight 500)
- **Borders**: `{colors.border}` hairlines on all four sides
- **Confidence**: ✅ high

#### Interest card
- **Layout**: 3-column grid, 1px gaps with `{colors.border}` background
- **Content hierarchy**: tag (mono, `{colors.accent}`) → title (20px, weight 500) → description (14px, `{colors.text-muted}`)
- **Hover**: subtle `rgba(163, 230, 53, 0.03)` tint → will become `rgba(167, 139, 250, 0.03)`
- **Confidence**: ✅ high

#### Project row
- **Layout**: 4-column grid (60px num / 1fr info / 200px stack / 100px CTA)
- **States**: hover shifts title and CTA to `{colors.accent}`, arrow translates 6px
- **Confidence**: ✅ high

#### Note card
- **Layout**: max-width 780px, bordered card with gradient tint
- **Sub-sections**: meta (mono, hairline bottom) → title (26px, weight 500, serif spans) → body paragraphs
- **Hover**: border transitions to `{colors.accent}`
- **Confidence**: ✅ high

#### Timeline row
- **Layout**: 3-column grid (180px date / 1fr content / 140px tag)
- **Current role**: `{colors.accent}` date color
- **Tags**: mono, `{colors.text-dim}`, right-aligned
- **Confidence**: ✅ high

### 3.2 Signature components

#### The numbered section header
- **What it is**: `{typography.eyebrow-mono}` flex row with `{colors.accent}` number, slash divider, section label, and right-aligned metadata. Always anchored to a hairline bottom border.
- **Why it's signature**: The specific pattern of `ACCENT_NUMBER / section label` in mono with the slash separator is this site's primary navigation and hierarchy system. Recognizable at a glance.
- **Composition**: `display: flex; justify-content: space-between; align-items: baseline` with `border-bottom: 0.5px solid {colors.border}`
- **Where it appears**: Every major content section. The numbered system is the site's skeleton.
- **Confidence**: ✅ high

#### The hero with mixed-type name
- **What it is**: Display-scale name where the first name is Geist 500 and the surname is Instrument Serif italic — two typefaces sharing one H1.
- **Why it's signature**: The specific "sans surname with serif italic lastname" move creates a personality signal inside the biggest typographic moment.
- **Confidence**: ✅ high

---

## 4. Layout & Composition

### 4.1 Grid & containers

- **Container**: max-width 1100px, padding 0 32px — narrower than typical 1280px, creates a more focused reading column
- **Content constraint**: most text blocks capped at 640–780px for body text, 850px for display quotes — deliberate readability constraint
- **Vertical rhythm**: section padding 60–100px; major sections 100px, secondary 60–80px

### 4.2 Composition patterns

- **Centered hero** (left-aligned text, not split-hero — editorial default)
- **4-column stats bar** (full-bleed within container, hairline separators)
- **3-column interest grid** (gaps-as-border technique: `background: var(--border)` on the grid container, `background: var(--bg)` on cards)
- **Full-width project row table** (no card — rows feel like a ledger)
- **Left-margin research quote** (large display type + smaller body, both left-aligned, reading column narrower than container)
- **Bordered note card** (inset card within the container, max-width 780px)
- **3-column timeline** (date / role / tag)

**Alternating density rhythm**: hero (sparse) → stats (dense) → currently (sparse) → interests (medium) → projects (dense) → research (sparse) → notes (medium) → experience (dense). This is a deliberate breathing rhythm.

### 4.3 Responsive behavior

#### Breakpoints (from CSS)

| Name | Width | Key changes |
|---|---|---|
| Tablet | ≤ 900px | Stats 2×2; interests 1-col; case grid 1-col; about grid 1-col |
| Mobile | ≤ 700px | Container padding 20px; project rows 2-col (num+info, stack+CTA hidden); sections 60px; timeline 1-col |

#### Touch targets

- Buttons: ~40px height + 22px horizontal padding — borderline (should be ≥ 44px tall). Flag for mobile.
- Nav links: `padding: 4px 0` — below 44px height. Acceptable for desktop; needs care on mobile.

#### Collapsing strategy

- **Nav**: stays horizontal (no hamburger observed in source — may be a gap)
- **Stats**: 4-up → 2×2 at 900px (correct)
- **Interests grid**: 3-up → 1-up at 900px (direct collapse)
- **Project rows**: 4-col → 2-col (num+info) at 700px; stack and CTA hidden on mobile
- **Timeline**: 3-col → 1-col at 700px

Fluid typography throughout via `clamp()` — not a discrete breakpoint approach.

### 4.4 Image behavior

No images observed in the primary surface. The about page likely has a placeholder (`aspect-ratio: 4/5`, gradient fill). Public folder appears empty — photos may not have been added yet.

*Note: the `.about-photo` component renders a placeholder box with mono text — the CSS is ready for an image but one hasn't been added.*

---

## 5. Reconstruction Notes

### Suggested stack

**Next.js App Router + vanilla CSS custom properties** (existing — no change needed for the refresh).

Evidence: the site is already built on this stack. The CSS is a single global stylesheet using CSS custom properties — which is actually the correct call for a typography-heavy personal site. Tailwind would add friction here without benefit.

### Quick wins (in the refresh)

- Swap `--accent: #a3e635` → `#a78bfa` and `--accent-dim: #6b8e1f` → `#6d28d9` — 90% of the visual register shift happens here
- Add violet undertone to backgrounds: `--bg: #0a0a0f`, `--bg-elev: #111118`
- Update border tint: `--border: #1e1e2a`, `--border-strong: #28283a`
- Update all `rgba(163, 230, 53, 0.xx)` tint values in hover states and gradients to `rgba(167, 139, 250, 0.xx)`
- Update nav backdrop: `rgba(10, 10, 10, 0.85)` → `rgba(10, 10, 15, 0.85)`

### Tricky bits

- **Three hardcoded `rgba(163, 230, 53, ...)` alpha tints** in the CSS — these won't update from a simple `--accent` swap. Each needs manual find-and-replace.
- **The case-study page** (`#050505` hardcoded on `.case-divider` background) — small inconsistency to clean up.
- **Legacy variables** (`--emerald`, `--emerald-dim`) in globals.css — unused in the current surface, can be removed or kept as feedback semantics.
- **Button primary**: `color: var(--bg)` — the text-on-accent pair. With violet accent, the dark text on violet background has 7.27:1. ✅

### Implicit states to verify after refresh

- Scrollbar thumb (currently `--bg-elev` default, `--accent-dim` hover)
- `::selection` (currently `--accent` bg / `--bg` text)
- Focus rings (currently `2px solid --accent`)
- `.cursor` blink animation
- `.timeline-date.now` color

### Confidence map

| Layer | Confidence | Why |
|---|---|---|
| Identity | ✅ high | Full source access, clear patterns |
| Colors | ✅ high | CSS variables extracted directly from source |
| Typography | ✅ high | Font family, sizes, weights explicitly declared |
| Spacing | ✅ high | Consistent, measurable from CSS |
| Components | ✅ high | Saw full homepage — near-complete catalog |
| Layout | ⚠️ medium | Desktop-only; responsive inferred from CSS rules |

---

## 6. Do's and Don'ts

### Do

- **Reserve `{colors.accent}` for exactly ONE role per viewport region**: section numbers, active nav underlines, CTA button fills, hover state transitions, cursor blink. Its power comes from scarcity.
- **Set all metadata, labels, tags, and CTA text in `{typography.eyebrow-mono}` or `{typography.caption-mono}`** (JetBrains Mono). Mono is the platform voice for system-layer information.
- **Cap display type at weight 500.** The weight ceiling is non-negotiable — 600+ would add aggression that conflicts with the "quiet, evidence-first" register.
- **Use `{typography.serif-display}` (Instrument Serif italic) only for surname in the hero and selected title spans in note cards.** The serif is the only warmth signal; overusing it dilutes the editorial moment.
- **Use the sub-pixel hairline (0.5px) for ALL structural dividers.** Moving to 1px reads thicker and breaks the "barely-there" grid system.
- **Keep body text max-width at ~640–780px.** The narrow reading column is a deliberate editorial signal — it resists the "full-width text wall" anti-pattern.
- **Number every major section.** The `01 / label` system is the site's skeleton — new sections must enter this hierarchy.

### Don't

- **Don't introduce a second accent color.** The brand operates on exactly one chromatic moment. Adding a secondary accent (teal, amber, blue) dilutes the voltage that makes the one color work.
- **Don't use `{colors.accent}` on body text.** It's reserved for structural/interactive moments only. Long passages in accent color break the scarcity contract.
- **Don't add border-radius above 6px.** The near-square shape language is deliberate. Cards at 8px+ start to feel consumer-app, not developer-researcher.
- **Don't promote font weight above 500 for display type.** Available but deliberately unused. 600 adds pressure that conflicts with the brand voice.
- **Don't add shadows.** The elevation system is surface-tone-only — shadows are the wrong elevation signal for this design.
- **Don't use `{typography.eyebrow-mono}` for body paragraphs or descriptions.** Mono is strictly for system-layer labels, not reading text.
- **Don't remove the numbered section system.** Renaming or removing the `01 / section name` pattern collapses the navigational identity of the site.

---

## 7. Open Questions

- **Nav mobile state**: no hamburger observed in Nav.tsx. Either it's missing or it relies on a CSS-only approach not visible in the desktop view. Needs verification.
- **About page photo**: `.about-photo` is a placeholder — has a real image been added or will the refresh need to handle the placeholder state?
- **Other pages (about, work, research, writing, contact)**: analyzed homepage only. Other pages likely use the same token system but may have additional patterns (especially the work page case studies).
- **PDF CV**: the "download CV" button links to `#` — is this a planned asset? The violet accent will render differently in PDF than on screen.
- **Mobile touch targets**: nav links at `padding: 4px 0` may fail 44px touch target threshold on small screens. Consider `padding: 10px 0` for mobile.

---

## 8. Companion files

- [x] `design-tokens.json` — W3C DTCG format tokens for both current and proposed palette
- [ ] `design-a11y.md` — WCAG contrast report (key pairs captured in Section 2.7 above)
- [ ] `design-screenshot.png` — not generated (Playwright not used; source was direct CSS access)

---

*Next logical step: apply the refresh to `app/globals.css` — the diff is small (accent swap + background tint + rgba alpha updates). The numbered section system, typography, and layout stay unchanged. The register shift comes entirely from the color.*
