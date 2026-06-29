---
name: HICKS Digital Advisory
description: Système visuel d'une landing page de conseil en automatisation IA pour PME
colors:
  command-navy-darkest: "#0A1428"
  command-navy: "#0F1E3D"
  command-navy-light: "#1B2A4E"
  activation-coral: "#FF6B47"
  activation-coral-light: "#FF8A6B"
  activation-coral-dark: "#E85A37"
  console-grey: "#8892A4"
  off-white: "#F5F6FA"
typography:
  display:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.05rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 3.4vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  pill: "100px"
  card: "16px"
  btn: "10px"
  icon: "10px"
spacing:
  section-y: "100px"
  card-internal: "28px"
  container-max: "1180px"
  container-x: "24px"
components:
  button-primary:
    backgroundColor: "{colors.activation-coral}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.btn}"
    padding: "13px 28px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.activation-coral-light}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    rounded: "{rounded.btn}"
    padding: "13px 28px"
  button-ghost-hover:
    textColor: "{colors.activation-coral}"
  grid-cell:
    backgroundColor: "{colors.command-navy-darkest}"
    textColor: "{colors.console-grey}"
    padding: "{spacing.card-internal}"
  grid-cell-hover:
    backgroundColor: "#0a1428"
  input-field:
    backgroundColor: "rgba(255,255,255,0.07)"
    textColor: "{colors.off-white}"
    rounded: "{rounded.btn}"
    padding: "13px 18px"
  input-field-focus:
    backgroundColor: "rgba(255,255,255,0.09)"
---

# Design System: HICKS Digital Advisory

## 1. Overview

**Creative North Star: "The Trusted Engineer"**

HICKS is the visual language of someone who has spent 22 years inside systems, not selling them. Every surface communicates controlled precision: a clean grid, a restrained palette, a single accent that fires only when it matters. Nothing decorative survives. What remains is a dark, structured environment that makes a PME director feel they are looking at a dashboard of expertise, not a marketing brochure.

The Command Navy background is the load-bearing wall. It absorbs 80% of every viewport. Activation Coral is the signal: it appears on CTAs, active labels, and the logo. Used anywhere else, it loses its authority. Console Grey carries secondary text: readable, professional, never dominant.

This system explicitly rejects the startup hype register. No purple gradients. No "AI-generated" glassmorphism grids. No hero-metric templates (big number, small label, gradient accent). No identical card grids with icon-heading-text repeated endlessly. The SaaS-cream-and-violet palette is forbidden. The ultra-corporate navy of McKinsey Digital is also forbidden: this is a human expert's toolkit, not a global consulting firm's brand.

**Key Characteristics:**
- Dark-dominant (Command Navy as the primary surface, not a background color)
- Activation Coral used at maximum 10-15% of any viewport — its rarity is its authority
- Table-grid sections (1px separator, flat cells) instead of raised cards for content grids
- Space Mono labels signal metadata and classification: not decoration, information
- Human presence (photo, narrative bio) anchors every identity surface
- Glass effects reserved for identity elements only (logo, nav on scroll)

## 2. Colors: The Command & Signal Palette

Two roles, hard separation: Command (dark surfaces, depth) and Signal (coral action, coral-only).

### Primary
- **Activation Coral** (`#FF6B47`): The sole signal color. Every CTA, every active label, every hover accent, the logo's orange arm. Appears on interactive affordances and structural emphasis. Never decorative. If Coral appears somewhere the user does not need to act or notice, remove it.
- **Activation Coral Light** (`#FF8A6B`): Hover state of coral elements only. Not used as a standalone surface color.
- **Activation Coral Dark** (`#E85A37`): Active/pressed state and gradient start for the featured-card top bar.

### Neutral
- **Command Navy Darkest** (`#0A1428`): Page background and default grid cell background. The floor everything sits on.
- **Command Navy** (`#0F1E3D`): Elevated surfaces, nav logo background, logo mark fill.
- **Command Navy Light** (`#1B2A4E`): Glass card background (rgba 55% opacity), hover state reference. Used only in identity glass (nav scrolled, logo).
- **Console Grey** (`#8892A4`): All body copy and secondary text. Never used for headings. Line-height 1.72 on dark background compensates for the reduced perceived weight.
- **Off-White** (`#F5F6FA`): Headings and all high-contrast text. Never pure `#fff` on dark backgrounds (tint toward the brand hue).

### Named Rules
**The One Signal Rule.** Activation Coral is used on 10-15% of any given viewport maximum. Every new coral element displaces an existing one. Its rarity is its authority.

**The No-Decoration Rule.** Color conveys function: surface, signal, or text. If a color element does not communicate state, hierarchy, or action, remove it.

## 3. Typography: The Engineer's Stack

> Révision 2026-06-29 (anti-slop). L'ancien stack Space Grotesk + Space Mono + Inter sur navy sombre, jugé "anti-slop" à l'origine, est devenu en 2026 le centre de gravité exact de la landing "tech générée par IA" (retour externe : "ça fait réalisé par Claude"). Stack remplacé pour redonner une voix sur-mesure.

**Display Font:** Schibsted Grotesk (700/800 weights, `system-ui` fallback)
**Body Font:** Hanken Grotesk (400/500/600 weights, `system-ui` fallback)
**UI/Label Font:** Schibsted Grotesk (500/600 weights). Plus de police monospace.

**Character:** Schibsted Grotesk en 800 a une présence éditoriale confiante, distincte du look Space Grotesk surexploité par les générateurs IA. Hanken Grotesk en corps est humaniste, chaleureux, plus lisible qu'Inter sans en avoir le côté passe-partout. Le monospace (Space Mono) est banni : c'était la principale signature "AI-tech template" du site.

### Hierarchy
- **Display** (700, `clamp(2.6rem, 5.5vw, 4.4rem)`, line-height 1.12, tracking -0.035em): Hero headlines only. Two lines maximum. First line white, second line Activation Coral when contrasting a problem/solution.
- **Headline** (700, `clamp(1.9rem, 3.5vw, 2.9rem)`, line-height 1.12, tracking -0.025em): Section titles. `text-wrap: balance` applied. Never more than two lines.
- **Title** (600, `clamp(1.05rem, 1.8vw, 1.25rem)`, line-height 1.15): Card headings, product names, UI labels that are not metadata.
- **Body** (Inter 400, `1rem`, line-height 1.72, color Console Grey `#8892A4`): Section prose, card descriptions. Max line-length 65ch. `strong` bumps to Inter 500, color `rgba(255,255,255,0.82)`.
- **Label** (Space Mono 400, `0.7rem`, `letter-spacing: 0.18em`, `text-transform: uppercase`, color Activation Coral): Section eyebrows only. Never body-level quantities of Space Mono: it becomes costume.

### Named Rules
**The Eyebrow-Restraint Rule (anti-slop 2026-06-29).** Maximum 1 eyebrow (petit label au-dessus d'un titre de section) pour 3 sections. Un eyebrow sur chaque section = signature "généré par IA". Le titre seul suffit le plus souvent. Plus de numérotation de section ("01 · ...", "Stage 1") ni de labels mono-corail répétés. Le point médian "·" est rationné à 1 par ligne maximum.

**The No-Mono Rule (remplace l'ancienne Mono-as-Metadata).** Plus de police monospace nulle part. Les métadonnées (cadences, tags produits, labels de champ) sont en Schibsted Grotesk poids 500/600. Le mono était le tell "AI-tech" principal.

**The Negative-Track Rule.** Display and Headline headings always carry negative letter-spacing (-0.025em to -0.035em). This is structural, not stylistic: tight tracking on dark backgrounds prevents the gaps between letters from reading as noise.

## 4. Elevation

This system is **flat-by-default with one purposeful glass exception**. Depth is conveyed through tonal layering (darker = deeper), not shadows. The only shadow in the system is the glass shadow on identity elements.

**Flat surfaces** (grid cells, form inputs, hero background): no shadow. Hover states use background tint shifts, not lift.

**Grid elevation** (`.methode-grid`, `.solutions-strip`, `.offres-grid`): the outer container has a single 1px border at `rgba(255,255,255,0.07)` with `border-radius: 16px`. Interior cells are separated by 1px gaps filled by the container's background. No shadow on cells.

### Shadow Vocabulary
- **Glass identity shadow** (`0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)`): Reserved for the nav bar on scroll and any glass identity element. The inset top highlight is the only specular detail in the system.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest. Shadows appear only on glass identity elements (nav, logo). A content card that needs a shadow to feel elevated is not elevated enough by its content.

**The Glass-Identity Rule.** `backdrop-filter: blur(24px)` appears only on nav-scrolled state and logo contexts. Never on content grids, product cards, or pricing sections. Glass on content grids = SaaS cliché.

## 5. Components

### Buttons
Tactile and direct. One primary action per section maximum.

- **Shape:** Gently rounded (10px radius). Avoids the pill softness of startup CTAs and the sharp corners of enterprise tools.
- **Primary (`btn-primary`):** Activation Coral (`#FF6B47`) background, Off-White text, Space Grotesk 600, padding `13px 28px`. Box-shadow: `0 4px 20px rgba(255,107,71,0.35)` at rest. On hover: coral-light, `-1px` translateY, expanded shadow.
- **Ghost (`btn-ghost`):** Transparent background, `1px solid rgba(255,255,255,0.2)` border, Off-White text. On hover: border becomes Activation Coral, text becomes Activation Coral, no fill.
- **Focus:** `2px solid var(--coral), outline-offset: 3px`. Never remove focus ring.
- **Minimum height:** 48px for touch targets.

### Table Grid (signature HICKS component)
The visual DNA of the content sections. Used for Méthode, Solutions, Offres.

- **Container:** `border: 1px solid rgba(255,255,255,0.07)`, `border-radius: 16px`, `overflow: hidden`. Cells separated by 1px gaps (set via `gap: 1px` on the grid, `background` on the container bleeds through).
- **Cell at rest:** `background: #0A1428` (Command Navy Darkest), padding `28px 24px`.
- **Cell hover:** `background: rgba(15,30,61,0.95)` (barely perceptible shift). No lift, no shadow.
- **Featured cell** (Offres only): `background: rgba(255,107,71,0.05)` + 2px coral gradient top bar.
- **Desktop:** 4 columns. Tablet: 2 columns. Mobile: 2 columns (solutions) or 1 column (offres).

### Form Inputs / Fields
Visible labels. No placeholder-only fields.

- **Label:** Space Mono, 0.68rem, 0.08em tracking, uppercase, `rgba(255,255,255,0.45)`. Sits above the input.
- **Input at rest:** `background: rgba(255,255,255,0.07)`, `border: 1px solid rgba(255,255,255,0.12)`, `border-radius: 10px`, Inter 0.95rem, Off-White text.
- **Input focus:** border shifts to `rgba(255,107,71,0.5)`, background to `rgba(255,255,255,0.09)`. No glow. No outline beyond the border shift.
- **Textarea:** Same treatment, `resize: vertical`, min-height `120px`.

### Navigation
- **Default state:** Transparent background, no border. Logo + nav links (Console Grey, 0.9rem Space Grotesk 500) + primary CTA button.
- **Scrolled state (`.scrolled`):** `background: rgba(10,20,40,0.88)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(255,255,255,0.06)`. The only in-page glass usage.
- **Mobile:** Links hidden, hamburger button (3 spans, 22px wide, 2px thick). Mobile menu is full-screen navy overlay with large Space Grotesk links.

### Hero Badge (availability indicator)
- Coral-tinted pill: `background: rgba(255,107,71,0.1)`, `border: 1px solid rgba(255,107,71,0.22)`, `border-radius: 100px`.
- Left: 6px pulsing coral dot (opacity animation). Space Mono 0.68rem text.
- Communicates: real-time availability signal. Human presence, not a marketing claim.

### Badges / Tags
- Background: `rgba(27,42,78,0.8)`, `border: 1px solid rgba(255,255,255,0.09)`, `border-radius: 100px`.
- Space Mono 0.65rem, Console Grey text.
- Hover: border and text shift to Activation Coral.
- Compact skill tags and product stack labels.

## 6. Do's and Don'ts

### Do
- **Do** use the Command Navy (`#0A1428`) as the default cell background inside table grids. The 1px separator is the only visual structure needed.
- **Do** apply Activation Coral exclusively to interactive affordances: CTAs, active labels, hover accents, the logo. One signal, one role.
- **Do** use Space Mono for metadata: section eyebrows, step numbers, form labels, product tags. Stop there.
- **Do** use `text-wrap: balance` on all headings (h1, h2, h3) to prevent ragged two-word orphan lines.
- **Do** include visible `<label for>` elements on every form field. Placeholder-only fields fail mobile accessibility.
- **Do** reserve `backdrop-filter: blur()` for nav-scrolled state and identity glass only.
- **Do** keep negative letter-spacing (-0.025em to -0.035em) on all Display and Headline text.
- **Do** apply `prefers-reduced-motion` to all reveal animations (opacity + transform transitions must be nulled).
- **Do** keep body line-height at 1.72 on dark backgrounds to compensate for the reduced apparent weight of light text.

### Don't
- **Don't** use SaaS generique violet/blanc (Notion, Webflow template, Linear clone aesthetics). This is the first-order reflex to reject.
- **Don't** use glassmorphism on content grids (Méthode, Solutions, Offres cells). Glass = identity layer only.
- **Don't** build hero-metric templates: big number + small label + gradient accent = SaaS cliché, explicitly forbidden.
- **Don't** build identical card grids (icon + heading + text, same size, repeated). Use the table grid instead.
- **Don't** réintroduire Space Grotesk, Space Mono ou Inter : c'est précisément le stack qui faisait "généré par IA" (cf révision section 3). Display = Schibsted Grotesk, corps = Hanken Grotesk.
- **Don't** mettre un eyebrow sur chaque section, ni numéroter les sections, ni les flèches sur tous les boutons, ni les points décoratifs corail devant chaque item. Ce sont des "AI tells".
- **Don't** place gradient text (`background-clip: text` + gradient). Emphasis through weight or solid color only.
- **Don't** use side-stripe borders (`border-left` greater than 1px as a colored accent). Full borders, background tints, or nothing.
- **Don't** add Activation Coral beyond 15% of the viewport. Every additional coral instance dilutes the one that matters.
- **Don't** use startup hype copy (ROI, disruption, scale, "10x your productivity"). The PRODUCT.md principle: "the tone does not sell: it reassures and proves."
- **Don't** add more than one primary CTA per section. One decision point per fold.
- **Don't** build banking ultra-corporate visual language (Capgemini, McKinsey Digital). This system is a human expert's toolkit, not a global firm's brand.
