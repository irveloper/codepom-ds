# @codepom/react

React component library for the CodePom design system.

## Install

```bash
npm install @codepom/react @codepom/tokens
# or
pnpm add @codepom/react @codepom/tokens
```

Peer dependencies: `react >= 18`, `react-dom >= 18`

## Setup

### 1. Import styles

In your app entry (e.g. `_app.tsx`, `layout.tsx`, or `global.css`):

```ts
import '@codepom/tokens/css'   // design tokens (CSS custom properties)
import '@codepom/tokens/reset' // optional: minimal CSS reset
import '@codepom/react/styles' // component styles
```

### 2. Tailwind (optional)

If you use Tailwind CSS, add the CodePom preset to your config:

```js
// tailwind.config.js
import codepomPreset from '@codepom/tokens/tailwind'

export default {
  presets: [codepomPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@codepom/react/dist/**/*.js',
  ],
}
```

### 3. Fonts

The design system uses **Space Grotesk** (sans) and **Space Mono** (mono). Load them however your framework prefers:

```html
<!-- HTML link tag -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
```

```ts
// Next.js app/layout.tsx
import { Space_Grotesk, Space_Mono } from 'next/font/google'
```

## Usage

```tsx
import { Button, Badge, Mascot, Icon, Modal, useToast, ToastProvider } from '@codepom/react'

// Wrap your app with ToastProvider
export default function App({ children }) {
  return <ToastProvider position="top-right">{children}</ToastProvider>
}

// Use components
function Page() {
  const { show } = useToast()

  return (
    <>
      <Mascot variant="full" size={120} />
      <Icon name="agility" size={24} />
      <Button variant="primary" onClick={() => show({ message: 'Shipped!' })}>
        Deploy
      </Button>
      <Badge variant="success">Live</Badge>
    </>
  )
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, accent, outline, ghost, destructive variants |
| `Badge` | Inline status labels with 7 variants |
| `Alert` | Info, success, warning, error banners |
| `Avatar` | User avatars with status indicators and size options |
| `Card` / `CardHeader` / `CardBody` / `CardFooter` | Composable card layout |
| `Input` / `Textarea` / `Select` / `Label` / `Field` | Form controls with label and hint support |
| `Checkbox` | Controlled/uncontrolled checkbox |
| `Radio` | Controlled/uncontrolled radio button |
| `Toggle` | On/off toggle switch |
| `Modal` | Accessible `<dialog>`-based modal with sizes |
| `Tabs` | Underline and pill tab variants |
| `Tooltip` | Hover tooltip with placement options |
| `Popover` | Click-triggered popover with outside-click dismiss |
| `ToastProvider` / `useToast` | Global toast notifications |
| `Navbar` | Top navigation bar |
| `Sidebar` | Collapsible sidebar with nested links |
| `Breadcrumb` | Accessible breadcrumb navigation |
| `Pagination` | Page navigation controls |
| `Table` | Data table with typed columns |
| `Skeleton` / `SkeletonCard` / `SkeletonText` | Loading placeholders |
| `Mascot` | CodePom brand mascot — `variant: full\|solid\|line`, `theme: light\|dark` |
| `Icon` | Brand icon set — agility, partner, integrity, bone, db, gear-paw, gear, cloud, terminal, chip, plus, chevron-down |
| `Pattern` | Background texture pattern |
| `BrandPrinciples` | Brand values display block |
| `BusinessCard` | Branded business card component |

## Next.js

All components include a `"use client"` directive and work with the App Router. Import them directly in client components or wrap in your own client boundary.

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

## Astro

```astro
---
// src/layouts/Layout.astro
import '@codepom/tokens/css'
import '@codepom/react/styles'
---
```

```astro
---
// src/components/MyIsland.astro
import { Button } from '@codepom/react'
---
<Button client:load variant="primary">Click me</Button>
```

## License

MIT
