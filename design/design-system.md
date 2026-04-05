# Design System Document: The Arcane Interface

## 1. Overview & Creative North Star
**Creative North Star: "The Eldritch Grimoire"**
This design system moves away from the sterile, flat "SaaS" look of modern applications. Instead, it treats the screen as a living, breathing artifact—an ancient tome infused with modern magic. We achieve this through **Atmospheric Depth** and **Asymmetric Elegance**. 

The goal is to move beyond standard grids. We use overlapping elements, varying levels of "frosted glass" transparency, and intentional voids to evoke a sense of mystery. Typography isn't just for reading; it's an editorial statement. We favor high-contrast scale shifts where large, delicate serifs meet tight, functional sans-serif labels.

---

### 2. Colors & Materiality
The palette is rooted in the void, illuminated by "Arcane" (Violet) and "Void" (Teal) magic.

*   **Primary (Arcane Violet):** Use `#d2bbff` (Primary) for essential text and `#7c3aed` (Primary Container) for active states.
*   **Secondary (Void Teal):** Reserved exclusively for the Familiar’s presence. This color signifies AI intelligence.
*   **The "No-Line" Rule:** Do not use 1px solid borders to define layout sections. Separation must be achieved via background shifts. For example, a `surface_container_low` sidebar against a `surface` main stage.
*   **Surface Hierarchy & Nesting:** 
    *   **Level 0 (Base):** `surface_container_lowest` (#0d0d1a) - The deep background.
    *   **Level 1 (Sections):** `surface_container_low` (#1a1a28) - Wide layout blocks.
    *   **Level 2 (Interaction):** `rgba(255, 255, 255, 0.04)` - Floating cards.
*   **The "Glass & Gradient" Rule:** Main CTAs must use a linear gradient from `#7c3aed` to `#6d28d9`. Floating modals should utilize `backdrop-blur: 12px` to feel integrated into the dark atmosphere.

---

### 3. Typography
We leverage a dual-typeface system to distinguish between "The World" (Game Data) and "The Entity" (The Familiar).

*   **Display & Headlines (Newsreader/Spectral):** These are our editorial anchors. Use `display-lg` for chapter headers and `headline-md` for quest titles.
*   **The Familiar’s Voice:** Any text spoken by the AI must use `Spectral` in italics, colored with `secondary` (Void Teal).
*   **UI Chrome (Inter):** All functional elements—buttons, labels, player stats—use `Inter`. This provides a grounding, modern contrast to the ethereal serif headings.
*   **Scale Contrast:** Don't be afraid of the gap. A `display-lg` headline (3.5rem) paired with a `label-sm` (0.6875rem) subtitle creates a premium, high-fashion aesthetic.

---

### 4. Elevation & Depth
In this design system, light comes from the elements themselves, not a generic sun.

*   **Tonal Layering:** Instead of drop shadows, use the color tokens. Place a `surface_container_high` element atop a `surface_dim` background to create a "lifted" feel.
*   **Ambient Shadows:** When a card must float (e.g., a spell tooltip), use a 24px-48px blur with 6% opacity, tinted with `#7c3aed` (Arcane Violet) rather than black.
*   **The "Ghost Border":** If a container requires a boundary (like an input field), use `outline_variant` at 20% opacity. It should feel like a shimmer, not a stroke.
*   **Glows:** The Familiar’s avatar is a `secondary` teal radial gradient. Use `filter: blur(20px)` on background orbs to create "Void Light" that bleeds behind cards.

---

### 5. Components

*   **Buttons (Arcane CTAs):**
    *   **Primary:** Gradient (`#7c3aed` to `#6d28d9`), 20px radius, with a soft 5px outer glow of the same color.
    *   **Secondary:** Ghost style. No background, `outline` border at 20%, `Inter` Semi-bold.
*   **Input Fields:** Use 20px (pill) radius. Background: `surface_container_highest`. On focus, the ghost border becomes 60% opaque Void Teal.
*   **Cards (The Grimoire Sheets):** 8px radius. Never use dividers. Use `body-lg` for the title and `body-sm` for metadata, separated by 16px of vertical whitespace.
*   **The Familiar Avatar:** A circular component using a `secondary` radial gradient. It should pulse slowly (2-4s duration) using opacity shifts.
*   **Lists:** Remove all horizontal rules. Use a subtle hover state shift to `surface_bright` to indicate interactivity.

---

### 6. Do’s and Don'ts

*   **DO:** Use asymmetrical layouts. Place a large serif heading partially overlapping a glass card to create depth.
*   **DO:** Use "Void Teal" sparingly. It is the signature of the AI; using it for standard UI elements dilutes its magic.
*   **DON'T:** Use 100% white text. Use `on_surface_variant` (#ccc3d8) for body text to maintain the dark, moody atmosphere.
*   **DON'T:** Use sharp corners on inputs. The 20px radius is essential for the "organic magic" feel.
*   **DO:** Ensure all "Glass" elements have a `backdrop-filter`. Without it, the UI feels like cheap transparency rather than premium crystal.
*   **DON'T:** Use standard "Drop Shadows." Use tonal shifts and colored glows to define edges.

---

### 7. Signature Elements
*   **The Vertical Rhythm:** Every section should have at least 64px of breathing room. High-end design is defined by the space you *don't* use.
*   **Micro-interactions:** When a user hovers over an "Arcane" element, the violet border opacity should swell from 20% to 50%. It should feel like the interface is "charging."