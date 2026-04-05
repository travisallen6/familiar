# Familiar — Design System & UX Spec

**Date:** 2026-04-04
**Scope:** Design system, UX flows, and screen inventory for the end-to-end Familiar prototype (DM → Player → Familiar Chat)

---

## 1. Design System

### Aesthetic
Dark Fantasy. Deep near-black backgrounds — never pure black. Depth is achieved through layered surfaces rather than strong contrast. The app feels atmospheric without being theatrical.

### Color Palette

| Role                   | Token          | Value                    |
| ---------------------- | -------------- | ------------------------ |
| Base background        | `--bg-base`    | `#0d0d1a`                |
| Nav / elevated surface | `--bg-surface` | `#0a0a15`                |
| Elevated card          | `--bg-card`    | `rgba(255,255,255,0.04)` |
| Border                 | `--border`     | `rgba(109,40,217,0.20)`  |
| Violet primary         | `--violet-500` | `#7c3aed`                |
| Violet mid             | `--violet-400` | `#a855f7`                |
| Violet light (text)    | `--violet-200` | `#e9d5ff`                |
| Teal primary           | `--teal-600`   | `#0d9488`                |
| Teal mid               | `--teal-400`   | `#14b8a6`                |
| Teal light (text)      | `--teal-200`   | `#5eead4`                |
| Muted text             | `--text-muted` | `#6b7280`                |

**Color split:** Arcane Violet is the app chrome — navigation, buttons, CTAs, selections, player message bubbles. Void Teal belongs exclusively to the familiar — its avatar orb, message bubbles, name, and active states when the familiar is "speaking."

### Typography

| Usage             | Font     | Style                    |
| ----------------- | -------- | ------------------------ |
| Headings, display | Spectral | 400 or 600 weight        |
| Familiar speech   | Spectral | 400 italic, teal-colored |
| All UI chrome     | Inter    | 400 / 500 / 600          |
| Player messages   | Inter    | 400, violet-muted        |
| Labels, metadata  | Inter    | 400, muted               |

### Component Rules

- **Border-radius:** `8px` for cards and message bubbles; `20px` for inputs and pill badges
- **Buttons:** Violet gradient fill (`#7c3aed` → `#6d28d9`), soft box-shadow glow (`0 0 10px rgba(124,58,237,0.5)`)
- **Inputs:** Near-transparent background (`rgba(255,255,255,0.04)`), violet border (`rgba(109,40,217,0.2)`), glow on focus
- **Borders:** Barely-there violet tint — present but not heavy
- **Familiar avatar orb:** Teal radial gradient, soft outer glow (`box-shadow: 0 0 16px rgba(20,184,166,0.6)`)

---

## 2. Role Separation

The DM and Player experiences are fully separate — different visual tone, different information architecture.

|                    | DM Experience                           | Player Experience                        |
| ------------------ | --------------------------------------- | ---------------------------------------- |
| **Feel**           | Functional admin dashboard              | Immersive companion                      |
| **Primary action** | Campaign management                     | Chat with familiar                       |
| **Theming**        | Dark system palette, minimal decoration | Full Dark Fantasy, atmospheric           |
| **Navigation**     | Tab-based or top nav                    | Hamburger drawer (nav hidden by default) |

---

## 3. Screen Inventory & UX Details

### Screen 1 — Landing / Login
- Dark hero with the Familiar logotype (Spectral, violet glow effect)
- Email/password form, centered
- "Sign in" and "Create account" links
- No marketing copy — direct entry to the app
- Role is determined post-authentication (server-side based on campaign membership)

### Screen 2 — DM Dashboard
- Card grid of campaigns
- Each card: campaign name, player count, last activity date
- Violet "New Campaign" button, prominent
- Empty state: encouraging prompt to create a first campaign
- Dark palette with functional layout — no heavy fantasy theming

### Screen 3 — Campaign Creation
- Simple form: Campaign Name, Description, Add Players by email
- Multi-email input for player invites (pill-style tags)
- "Create Campaign" CTA at bottom
- Clean, functional — matches DM admin feel

### Screen 4 — Campaign Detail
- Three tabs: **Players** | **Documents** | **Notes**
- Players tab: roster with invite status (Accepted / Pending badge)
- Documents tab: drag-and-drop upload zone, list of uploaded files
- Notes tab: freeform text area for session notes
- No heavy decoration — the dark system palette does the work

### Screen 5 — Player Invite Accept
- Transitional screen: player arrives from email link
- Shows campaign name and DM's name
- Subtitle: "Your familiar awaits."
- Simple account creation form (name, email, password)
- Warmer tone than DM screens — the first hint of magic

### Screen 6 — Character Setup
- Single scrolling form with subtle progress indicator at top
- Fields: Character Name, Species, Class / Subclass (optional), Vibe (freetext, e.g. "gruff but loyal"), Backstory (textarea)
- Section labels in Spectral, inputs in Inter
- "Begin Summoning" CTA at bottom — the emotional escalation starts here

### Screen 7 — Summoning Flow
- Full-screen chat UI
- The familiar's avatar orb is dim and pulsing — partially materialized, not yet fully formed
- The familiar speaks first, asking questions and making suggestions based on character data
- 3–4 representative turns shown in the prototype:
  - Familiar suggests a species based on class ("I see you're an artificer — perhaps a clockwork automaton?")
  - Familiar asks about personality and tone
  - Player names the familiar
  - Familiar accepts the name and personality
- The orb brightens subtly after each exchange
- Input bar at bottom, same as main chat

### Screen 8 — Familiar Reveal
- Full-screen dramatic moment — no app chrome, no navigation
- Large centered orb at full teal glow, pulsing gently
- Familiar's name in Spectral below the orb
- A single first message appears in Spectral italic, teal: their introduction in their own voice
- After a beat, a "Begin your journey" CTA fades in
- Transitions to the main chat screen

### Screen 9 — Familiar Chat (Main Player Screen)
- Compact teal orb (~28px) + familiar's name in the top header bar
- Hamburger menu on the right opens a drawer: Character, Lore, Notes, Campaign, Settings
- Full-screen chat:
  - Familiar messages: Spectral italic, teal bubble (`rgba(20,184,166,0.08)` bg, teal border)
  - Player messages: Inter, violet bubble (`rgba(109,40,217,0.15)` bg, violet border), right-aligned
- Input bar pinned to bottom, pill-shaped, violet glow on focus
- No visible navigation by default — the familiar is the entire interface

---

## 4. Prototype Narrative

The Stitch prototype tells one continuous story across both roles:

1. DM logs in → creates a campaign → invites a player by email
2. Player accepts the invite → creates an account → completes character setup
3. Player enters the summoning flow → builds their familiar through guided chat
4. Familiar is revealed in a dramatic full-screen moment
5. Player arrives at the main familiar chat screen and asks their first question

This arc demonstrates the full product in 9 screens without needing to fully spec every edge case.
