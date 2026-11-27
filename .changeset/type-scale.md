---
"@codepom/react": minor
"@codepom/tokens": minor
---

Add one type scale for every page, modelled on codepom.io's MVP Build page.

- **@codepom/tokens:** `--pom-type-{page,title,item,stat,lead,body,small,label,caption,mono}-*` tokens (size, leading, tracking, weight), and matching Tailwind `text-{role}` font sizes in the preset (`text-page`, `text-caption`, …).
- **@codepom/react:** `Heading` (`level` 1–6; role defaults by level: page / title / item; `size` and `tone` override), `Text` (`lead`, `body`, `small`, `caption`, `mono`, `stat`) and `Eyebrow` (monospace uppercase kicker, `md` / `sm`). Tones: default, secondary, tertiary, accent, inherit. Also available as `.pom-text--{role}` classes.
