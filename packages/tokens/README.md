# @codepom/tokens

Design tokens for the CodePom design system — CSS custom properties, JavaScript constants, and a Tailwind CSS preset.

## Install

```bash
npm install @codepom/tokens
```

## Exports

| Import path | Contents |
|-------------|----------|
| `@codepom/tokens/css` | CSS custom properties (`--cp-*`) — colors, spacing, radius, shadows, motion, typography |
| `@codepom/tokens/reset` | Minimal CSS reset (box-sizing, focus-visible, sr-only) |
| `@codepom/tokens/js` | JavaScript token constants |
| `@codepom/tokens/tailwind` | Tailwind CSS preset |

## CSS custom properties

```css
@import '@codepom/tokens/css';
@import '@codepom/tokens/reset'; /* optional */
```

Tokens are prefixed with `--cp-`:

```css
/* Colors */
--cp-navy-950, --cp-navy-900 ... --cp-navy-100
--cp-amber-400, --cp-amber-500, --cp-amber-600
--cp-cyan-400, --cp-cyan-500
--cp-ivory-50 ... --cp-ivory-200

/* Semantic */
--cp-background, --cp-foreground, --cp-muted, --cp-card

/* Spacing */
--cp-space-1 (4px) ... --cp-space-16 (64px)

/* Typography */
--cp-font-sans, --cp-font-mono

/* Motion */
--cp-duration-fast, --cp-duration-base, --cp-ease-out, --cp-ease-in-out
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
