---
"@codepom/react": minor
---

Add `Accordion`, `Chip` / `ChipGroup` and `Carousel`; `Card` passes through HTML attributes.

- **`Accordion`** — accessible disclosure list (`button` + `region`, heading level configurable), one-at-a-time or `multiple`, controlled or uncontrolled, `numbered` titles, `chevron` or rotating `plus` icon, Arrow/Home/End focus movement, `onToggle(id, open, index)` for analytics. Height animates in CSS (no measuring) and closed panels are hidden from assistive tech.
- **`Chip`** — compact toggle button (`aria-pressed`). **`ChipGroup`** — single-select is a radio group (one tab stop, arrow keys move the choice, disabled options skipped); `multiple` is a group of toggle buttons; `invalid` marks a missing required choice.
- **`Carousel`** — scroll-snap track with prev/next, dots, arrow-key navigation and labelled slides. With `controls="auto"` (default) the controls only render while slides overflow. Size slides and spacing with `--pom-carousel-slide-size`, `--pom-carousel-gap`, `--pom-carousel-controls-inset` and `--pom-carousel-control-offset`.
- **`Card`** now forwards standard HTML attributes (`style`, `id`, `data-*`, …); `style` was previously dropped silently.
- Blueprint theme covers all three (larger accordion titles, square mono chips).
