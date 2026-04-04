# Design System: Modern Arcane

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Digital Grimoire."** 

This system rejects the sterile, flat nature of modern SaaS in favor of a "Modern Arcane" experience—one that feels like an enchanted artifact discovered in a high-end scholar’s study. We move beyond the "template" look by utilizing intentional asymmetry, layered depth, and a high-contrast typographic scale that pits the precision of a modern UI against the evocative soul of a tabletop RPG.

To achieve this, we avoid rigid, boxed-in layouts. Elements should overlap slightly; containers should feel like heavy parchment or polished obsidian resting on a velvet surface. We are not building a website; we are crafting an immersive interface for the modern mystic.

---

## 2. Colors & Surface Philosophy
The palette balances the weight of history (`#131313`) with the spark of magic (`#e9c400`).

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background provides all the separation the eye needs. This creates a seamless, editorial flow rather than a "technical" grid.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of obsidian and vellum.
- **Base Layer:** `surface` (#131313) for the primary application background.
- **Recessed Areas:** Use `surface-container-lowest` (#0e0e0e) for sidebars or "well" areas where content is tucked away.
- **Elevated Content:** Use `surface-container-high` (#2a2a2a) for primary cards or modular elements to create a natural, soft lift.

### The "Glass & Gradient" Rule
To evoke an ethereal atmosphere, floating elements (modals, popovers) must utilize **Glassmorphism**. Use a semi-transparent `surface-variant` with a 12px to 20px backdrop-blur. 
*   **Signature Texture:** Main CTAs should never be flat. Use a linear gradient from `primary` (#e9c400) to `on-primary-container` (#a58b00) at a 135-degree angle to simulate the shimmer of gold leaf.

---

## 3. Typography
The typography is a dialogue between the scholarly past and the functional present.

*   **Display & Headlines (Newsreader):** This serif is our "voice." Use it with generous letter-spacing for a sophisticated, editorial feel. It should feel authoritative, like a title on a hand-bound spellbook.
*   **UI & Body (Inter):** Our "utility." Inter provides the high-readability required for complex RPG stats and descriptions. 

**Typographic Hierarchy:**
- **Display-LG (3.5rem):** Use for hero moments and rare "milestone" headers.
- **Headline-MD (1.75rem):** The standard for section headers.
- **Body-MD (0.875rem):** The workhorse for all descriptive text and lore.
- **Label-SM (0.6875rem):** Used in all-caps with 0.05em tracking for metadata and categories.

---

## 4. Elevation & Depth
In this system, depth is a feeling, not a structure.

*   **The Layering Principle:** Stacking surface tiers is the primary method of elevation. An inner container should always be one step higher on the `surface-container` scale than its parent to suggest a "natural lift."
*   **Ambient Shadows:** When an element must "float" (e.g., a menu), use an extra-diffused shadow. 
    *   *Spec:* `0px 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like ambient light being blocked by a physical object, not a digital effect.
*   **The "Ghost Border":** If a border is required for accessibility, use the `outline-variant` (#49454e) at **15% opacity**. This creates a whisper of a boundary that disappears into the background.
*   **Hand-Crafted Curves:** Use the `xl` (0.75rem) or `lg` (0.5rem) roundedness scale for most containers. This avoids the "industrial" feel of sharp corners or the "playful" feel of fully rounded pills.

---

## 5. Components

### Buttons
*   **Primary:** A shimmering gradient (Primary to Primary-Container). On hover, add a subtle `0px 0px 15px` outer glow using the `primary` color to simulate "charging" magic.
*   **Secondary:** No background. Use a "Ghost Border" and `primary` text.
*   **Tertiary:** Text-only in `secondary` (#46eaed), suggesting an "ethereal" interaction.

### Input Fields
*   **Surface:** `surface-container-lowest`.
*   **Active State:** The border does not just change color; it gains a 1px `secondary` (#46eaed) glow. 
*   **Label:** Always use `Label-MD` in `on-surface-variant` for a scholarly, annotated look.

### Cards & Lists
*   **Cardinal Rule:** Never use divider lines. Separate list items using 16px of vertical white space or a subtle shift to `surface-container-low` on hover.
*   **Interactive Cards:** When hovered, the card should scale slightly (1.02x) and transition from `surface-container-high` to `surface-container-highest`.

### Arcane Components
*   **Progress Orbs:** Instead of linear progress bars, use circular "mana" wells that fill with `secondary_fixed` (#5af8fb).
*   **Scholarly Tooltips:** Use `tertiary_container` for the background with `on_tertiary_container` text. These should feel like "scribbled notes" in the margin of a book.

---

## 6. Do’s and Don’ts

### Do
*   **Embrace Negative Space:** Give the typography room to breathe. High-end editorial design relies on what *isn't* there.
*   **Layer Surfaces:** Use the "Lowest to Highest" tiers to guide the user's eye toward primary actions.
*   **Use Thin-Line Icons:** Icons should be elegant and minimal (1px stroke), acting as subtle glyphs rather than heavy illustrations.

### Don’t
*   **Don't Use Pure White:** Never use #FFFFFF. Always use `on_surface` (#e5e2e1) to maintain the "parchment and obsidian" tone.
*   **Don't Use Heavy Borders:** Avoid the "boxed-in" look. Let the background colors do the work of containment.
*   **Don't Over-Animate:** Interactions should feel "weighty" and intentional. Avoid bouncy, "techy" easings; use smooth, decelerating transitions (e.g., `cubic-bezier(0.4, 0, 0.2, 1)`).