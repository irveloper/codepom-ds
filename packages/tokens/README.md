# @codepom/tokens

Design tokens for the CodePom design system — CSS custom properties, JavaScript constants, and a Tailwind CSS preset.

## Install

```bash
npm install @codepom/tokens
```

## Exports

| Import path | Contents |
|-------------|----------|
| `@codepom/tokens/css` | CSS custom properties (`--pom-*`) — colors, spacing, radius, shadows, motion, typography |
| `@codepom/tokens/reset` | Minimal CSS reset (box-sizing, focus-visible, sr-only) |
| `@codepom/tokens/js` | JavaScript token constants |
| `@codepom/tokens/tailwind` | Tailwind CSS preset |

## CSS custom properties

```css
@import '@codepom/tokens/css';
@import '@codepom/tokens/reset'; /* optional */
```

Tokens are prefixed with `--pom-`:

```css
/* Colors */
--pom-navy-950, --pom-navy-900 ... --pom-navy-100
--pom-amber-400, --pom-amber-500, --pom-amber-600
--pom-cyan-400, --pom-cyan-500
--pom-ivory-50 ... --pom-ivory-200

/* Semantic */
--pom-background, --pom-foreground, --pom-muted, --pom-card

/* Spacing */
--pom-space-1 (4px) ... --pom-space-16 (64px)

/* Typography */
--pom-font-sans, --pom-font-mono

/* Motion */
--pom-duration-fast, --pom-duration-base, --pom-ease-out, --pom-ease-in-out
```

## JavaScript

```ts
import tokens from '@codepom/tokens/js'
// or named:
import { colors, semantic, spacing, radius, shadow, duration, easing, font } from '@codepom/tokens/js'

console.log(tokens.colors.navy[950]) // '#0B132B'
console.log(tokens.spacing[4])        // '16px'
```

## Tailwind preset

```js
// tailwind.config.js
import codepomPreset from '@codepom/tokens/tailwind'

export default {
  presets: [codepomPreset],
  content: ['./src/**/*.{ts,tsx,astro}'],
}
```

The preset maps all tokens to Tailwind utilities: `bg-navy-900`, `text-amber-400`, `font-sans`, `duration-fast`, etc.

## License

MIT
