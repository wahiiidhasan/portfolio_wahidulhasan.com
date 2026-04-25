# Design System Specification

## 1. Overview & Creative North Star: "The Ethereal Archive"

This design system is built to transcend the "template" aesthetic of modern portfolios. The Creative North Star is **The Ethereal Archive**—a philosophy that treats digital space as a premium, physical gallery where content is suspended in a state of fluid grace. 

Unlike traditional layouts that rely on rigid grids and heavy borders, this system utilizes **intentional asymmetry** and **tonal depth** to guide the eye. We break the "standard" UI by leveraging expansive white space (or "dark space") and high-contrast typography scales. The goal is to make the visualizer's work feel curated, not just displayed. Every element should feel like it is floating within a deep, multi-dimensional space, utilizing soft edges and glassmorphism to create a sense of professional mystery and creative sophistication.

---

## 2. Colors & Tonal Logic

The color palette is rooted in deep obsidian and charcoal tones, designed to make visual content "pop" with cinematic intensity.

### The Palette
- **Background (`#081425`):** The absolute base. Think of this as the "gallery wall."
- **Primary & Accents:** Use the **Primary (`#c0c1ff`)** and **Secondary (`#d0bcff`)** tokens to create the "Indigo to Violet" gradients requested. These are reserved for interactive focal points and brand flourishes.
- **Tertiary (`#3cddc7`):** Use this "Deep Teal" sparingly for success states or subtle highlights to break the monochromatic purple flow.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through:
1.  **Tonal Shifts:** Placing a `surface_container_low` (`#111c2d`) section against the `background` (`#081425`).
2.  **Negative Space:** Using the Spacing Scale to create "breathing room" that implies a boundary without a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested layers. To define a card or a nested module, move one step up the hierarchy:
- **Level 0 (Base):** `surface` (`#081425`)
- **Level 1 (Section):** `surface_container_low` (`#111c2d`)
- **Level 2 (Component):** `surface_container_high` (`#1f2a3c`)
- **Level 3 (Interactive/Floating):** `surface_bright` (`#2f3a4c`) with 60% opacity and a `backdrop-blur`.

### Signature Textures
Main CTAs and Hero sections should utilize a **linear gradient** from `primary` (`#c0c1ff`) to `primary_container` (`#8083ff`) at a 135-degree angle. This adds "visual soul" and prevents the interface from feeling "flat" or "SaaS-generic."

---

## 3. Typography: Editorial Authority

The typography utilizes **Inter** for almost all instances to maintain a clean, modernist edge, while the scale creates the editorial drama.

- **The Power Scale:** Use `display-lg` (3.5rem) for hero statements. The sheer size of the Inter typeface at this scale provides an authoritative, "designed" feel.
- **Micro-Copy:** Use `label-md` or `label-sm` (Manrope) for technical details, categories, or "Visualizer Metadata." Manrope’s slightly more geometric structure distinguishes it from the narrative Inter text.
- **Rhythm:** Maintain a 1.5x line-height for `body-lg` to ensure high readability against the dark background. 

---

## 4. Elevation & Depth: The Layering Principle

Depth in this design system is conveyed through **Tonal Layering** rather than traditional drop shadows.

- **Ambient Shadows:** Shadows must be felt, not seen. Use a blur radius of 40px-60px with the shadow color set to `surface_container_lowest` (`#040e1f`) at 40% opacity. This mimics natural light absorption in a dark room.
- **The "Ghost Border" Fallback:** If a layout requires a container edge for accessibility, use the `outline_variant` token (`#464554`) at **15% opacity**. This creates a "whisper" of an edge that disappears into the background.
- **Glassmorphism:** For floating navigation bars or modal overlays, use:
    - **Background:** `surface_container` (`#152031`) at 70% opacity.
    - **Effect:** `backdrop-filter: blur(24px)`.
    - **Border:** Top-edge only "Ghost Border" to catch a subtle "light leak."

---

## 5. Component Guidelines

### Buttons (Fluid & Tactical)
- **Primary:** Gradient (`primary` to `primary_container`), `xl` (1.5rem) corner radius. No border. Text color: `on_primary_container`.
- **Secondary:** Surface-based. `surface_container_highest` background with `primary` text.
- **Tertiary:** Ghost style. No background, `on_surface` text. On hover, a subtle `surface_bright` background fade (0.3s transition).

### Cards & Work Tiles
- **The Rule:** No dividers. Separation is achieved through `surface_container_low` backgrounds.
- **Rounding:** Always use `xl` (1.5rem) for content cards to reinforce the "soft edges" vibe.
- **Interaction:** On hover, a card should shift from `surface_container_low` to `surface_container_high` and scale by 1.02x.

### Inputs & Forms
- **Style:** Minimalist. Use `surface_container_lowest` as the field background. 
- **Active State:** The bottom border animates from center-out using the `primary` color.
- **Error:** Use `error` (`#ffb4ab`) only for the helper text; do not turn the entire box red—this breaks the "Ethereal" aesthetic.

### Additional Signature Component: "The Luminous Scroll"
A progress indicator for long portfolio pages using a vertical gradient line on the far right of the screen, transitioning from `transparent` to `primary` as the user scrolls.

---

## 6. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Offset your text blocks. If a title is left-aligned, try placing the body text in the center-right column to create an editorial layout.
- **Use "Fluid" Motion:** All transitions should use `cubic-bezier(0.22, 1, 0.36, 1)`. This is a "Quint" ease-out that feels snappy yet smooth.
- **Prioritize the Visuals:** Ensure that `surface` colors never compete with the visualizer’s actual work. The UI is the frame; the work is the art.

### Don't:
- **Don't use 100% white text:** Use `on_surface` (`#d8e3fb`). It is a slightly blue-tinted white that feels more premium and reduces eye strain in dark mode.
- **Don't use "standard" 4px or 8px corners:** Stick to `xl` (1.5rem) or `full` for a modern, fluid appearance.
- **Don't use "Drop Shadows" on text:** If text isn't readable, increase the `backdrop-blur` of the container or shift the tonal tier of the surface.