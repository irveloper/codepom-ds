# CodePom Design System

A brand-focused design system by **CodePom** — an agile web engineering brand. Built with React, Tailwind CSS v4, and TypeScript.

```sh
npm install @codepom/react @codepom/tokens
```

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@codepom/react`](./packages/react) | [![npm](https://img.shields.io/npm/v/@codepom/react)](https://www.npmjs.com/package/@codepom/react) | React component library — 25 accessible UI components |
| [`@codepom/tokens`](./packages/tokens) | [![npm](https://img.shields.io/npm/v/@codepom/tokens)](https://www.npmjs.com/package/@codepom/tokens) | Design tokens — CSS custom properties, JS constants, Tailwind preset |

## Quick Start

```tsx
// 1. Import styles at your app entry
import '@codepom/tokens/css'
import '@codepom/react/styles'

// 2. Use components
import { Button, Badge, Icon } from '@codepom/react'

export default function Page() {
  return (
    <Button variant="primary">
      <Icon name="agility" size={16} /> Get Started
    </Button>
  )
}
```

Requires `react >= 18`. All components include a `"use client"` directive for Next.js App Router compatibility.

## Setup Guides

### Next.js App Router

```tsx
// app/layout.tsx
import '@codepom/tokens/css'
import '@codepom/react/styles'
import { ToastProvider } from '@codepom/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
```

### Astro

```astro
---
// src/layouts/Layout.astro
import '@codepom/tokens/css'
import '@codepom/react/styles'
---
```

```astro
---
import { Button } from '@codepom/react'
---
<Button client:load variant="primary">Click me</Button>
```

### Tailwind CSS

```js
// tailwind.config.js
import codepomPreset from '@codepom/tokens/tailwind'

export default {
  presets: [codepomPreset],
  content: [
    './src/**/*.{ts,tsx,astro}',
    './node_modules/@codepom/react/dist/**/*.js',
  ],
}
```

### Fonts

The system uses **Space Grotesk** (sans) and **Space Mono** (mono).

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, and danger variants with loading state, icon support, and sizes (sm/md/lg) |
| `Badge` | Status badges — default, primary, success, warning, error, info; dot indicator mode |
| `Alert` | Info, success, warning, error banners with dismissible option and `role="alert"` |
| `Avatar` | User avatars with src/initials fallback, status indicator (online/away/busy/offline), and 5 sizes |
| `Card` / `CardHeader` / `CardBody` / `CardFooter` | Composable card with elevation (0–5), padding options, and polymorphic `as` prop |
| `Input` / `Textarea` / `Select` / `Label` / `Field` | Form controls with error state, icons, and hint support; all forward refs |
| `Checkbox` | Controlled/uncontrolled checkbox with label |
| `Radio` | Controlled/uncontrolled radio button with label |
| `Toggle` | On/off toggle switch with label and hint |
| `Modal` | Accessible `<dialog>`-based modal with 4 sizes, backdrop close, and focus trapping |
| `Tabs` | Underline, pill, and boxed variants with full ARIA keyboard navigation and optional badges/icons |
| `Tooltip` | Hover tooltip with 4 placement options and `aria-describedby` |
| `Popover` | Click-triggered popover with outside-click and Escape dismiss |
| `ToastProvider` / `useToast` | Global toast notification system with auto-dismiss, 4 variants, and configurable position |
| `Navbar` | Responsive top navigation with hamburger menu, links, and actions |
| `Sidebar` | Collapsible sidebar with nested accordion links, badges, and icons |
| `Breadcrumb` | Accessible breadcrumb with chevron, slash, or dot separators |
| `Pagination` | Page navigation with smart ellipsis for large page counts |
| `Table` | Typed data table with striped, hoverable, and skeleton loading states |
| `Skeleton` / `SkeletonCard` / `SkeletonText` | Pulse-animated loading placeholders |
| `Mascot` | CodePom brand mascot — full, solid, or line art in light/dark theme |
| `Icon` | Brand icon set — agility, partner, integrity, bone, db, gear-paw, gear, cloud, terminal, chip, plus, chevron-down |
| `Pattern` | Background texture with code/paw glyphs |
| `BrandPrinciples` | Brand values display (Agility, Partnership, Integrity) |
| `BusinessCard` | Branded business card with name, title, email, phone, and website |

## Design Tokens

All tokens are exposed as CSS custom properties (`--pom-*`) and as JavaScript constants. A Tailwind preset is also provided.

| Category | Tokens |
|----------|--------|
| **Colors** | Navy palette (`--pom-navy-950`…`100`), amber accents (`--pom-amber-400/500/600`), cyan accents (`--pom-cyan-400/500`), ivory surfaces (`--pom-ivory-50/100/200`) |
| **Semantic** | `--pom-background`, `--pom-foreground`, `--pom-card`, `--pom-primary`, `--pom-secondary`, `--pom-accent`, `--pom-border`, `--pom-success`, `--pom-warning`, `--pom-error`, `--pom-text-primary`, `--pom-text-secondary`, `--pom-text-tertiary`, `--pom-text-on-primary` |
| **Spacing** | 8pt grid: `--pom-space-1` (4px) through `--pom-space-24` (96px) |
| **Radius** | `--pom-radius-sm` (6px), `md` (8px), `lg` (12px), `xl` (14px), `full` (9999px) |
| **Elevation** | `--pom-shadow-0` through `--pom-shadow-5` — navy-tinted layered shadows |
| **Motion** | Duration tokens (`instant` 0ms – `slow` 350ms) and easing curves (`out`, `in`, `in-out`, `spring`) |

## Accessibility

- WCAG 2.1 AA audited contrast ratios — text-primary (17.6:1), text-secondary (7.2:1), amber-400 (9.97:1), cyan-400 (11.4:1)
- All components use semantic ARIA attributes (`role`, `aria-selected`, `aria-current`, `aria-expanded`, `aria-busy`, `aria-labelledby`, `aria-describedby`, `aria-live`, `aria-modal`)
- Keyboard navigation throughout — Tabs (arrow keys), Modal (Escape, focus trap), Popover (Escape), Pagination (arrow keys)
- `prefers-reduced-motion` respected for animations
- Focus-visible ring on all interactive elements

## Development

```sh
# Install dependencies
pnpm install

# Start Astro showcase site
pnpm dev

# Start Storybook
pnpm storybook

# Build all packages
pnpm build:packages

# Run tests
pnpm --filter @codepom/react test

# Run tests with coverage
pnpm --filter @codepom/react test:coverage

# Create a changeset
pnpm changeset

# Publish packages to npm
pnpm publish:packages

# Watch mode for @codepom/react
pnpm dev:react
```

### Project Structure

```
codepom-design-system/
├── packages/
│   ├── react/           # @codepom/react — React components + styles + tests
│   └── tokens/          # @codepom/tokens — CSS tokens, JS constants, Tailwind preset
├── src/
│   ├── pages/           # Astro showcase site
│   └── stories/         # Storybook stories (35 stories across components + foundations)
├── .storybook/          # Storybook configuration
└── .github/workflows/   # CI + automated npm release via Changesets
```

### Scripts Reference

| Command | Action |
|---------|--------|
| `pnpm dev` | Start Astro dev server at `localhost:4321` |
| `pnpm build` | Build Astro site to `dist/` |
| `pnpm preview` | Preview Astro build |
| `pnpm storybook` | Start Storybook at `localhost:6006` |
| `pnpm build-storybook` | Build static Storybook site |
| `pnpm build:packages` | Build `@codepom/react` and `@codepom/tokens` |
| `pnpm dev:react` | Watch mode for `@codepom/react` tsup build |
| `pnpm changeset` | Create a new changeset entry |
| `pnpm version:packages` | Apply changesets to bump versions |
| `pnpm publish:packages` | Build + publish all packages to npm |

### Tech Stack

| Area | Technology |
|------|------------|
| Components | React 18 + TypeScript (strict) |
| Styling | Tailwind CSS v4 + plain CSS (BEM convention, `pom-` prefix) |
| Build | tsup (ESM + CJS + DTS) |
| Monorepo | pnpm workspaces |
| Test | Vitest + jsdom + Testing Library |
| Docs | Storybook 10 + Astro showcase |
| Release | Changesets → automated npm publishing |
| CI/CD | GitHub Actions (CI tests + release pipeline) |

## License

MIT — Copyright 2025 CodePom
