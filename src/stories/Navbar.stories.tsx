import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Navbar, Button, Badge, Icon } from '../../packages/react/src'

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    sticky: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Navbar>

const sampleLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Components', href: '/components' },
  { label: 'Tokens', href: '/tokens' },
  { label: 'Docs', href: '/docs' },
]

const Logo = () => (
  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18, color: '#F8FAFC', letterSpacing: '-0.02em' }}>
    code<span style={{ color: '#FBB040' }}>pom</span>
  </span>
)

export const Default: Story = {
  render: () => (
    <div style={{ background: '#0B132B', minHeight: '100vh' }}>
      <Navbar
        logo={<Logo />}
        links={sampleLinks}
        actions={
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Get started</Button>
          </div>
        }
      />
    </div>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <div style={{ background: '#0B132B', minHeight: '100vh' }}>
      <Navbar
        logo={<Logo />}
        links={sampleLinks}
        actions={
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Badge variant="success" dot>v2.0</Badge>
            <Button variant="primary" size="sm">Get started</Button>
          </div>
        }
      />
    </div>
  ),
}

export const Minimal: Story = {
  render: () => (
    <div style={{ background: '#0B132B', minHeight: '100vh' }}>
      <Navbar
        logo={<Logo />}
        links={sampleLinks}
      />
    </div>
  ),
}

export const LogoOnly: Story = {
  render: () => (
    <div style={{ background: '#0B132B', minHeight: '100vh' }}>
      <Navbar logo={<Logo />} />
    </div>
  ),
}

const megaMenus = [
  {
    label: 'Services',
    eyebrow: '01 / Build',
    heading: 'Products we design, build and run',
    items: [
      { label: 'Web apps', href: '#web', description: 'Full-stack products on a modern stack', icon: <Icon name="terminal" size={18} /> },
      { label: 'MVP builds', href: '#mvp', description: 'From idea to paying users in weeks', icon: <Icon name="agility" size={18} /> },
      { label: 'Integrations', href: '#api', description: 'APIs, payments and data pipelines', icon: <Icon name="cloud" size={18} /> },
    ],
    feature: {
      eyebrow: 'Fixed scope',
      title: 'Get a quote in 2 minutes',
      description: 'Pick what you need and see the estimate live.',
      cta: 'Start',
      ctaIcon: <Icon name="plus" size={12} />,
      href: '#quote',
    },
  },
  {
    label: 'Company',
    eyebrow: '02 / Us',
    heading: 'Who builds it',
    items: [
      { label: 'Case studies', href: '#work', description: 'Shipped, current projects' },
      { label: 'Process', href: '#process', description: 'How a build runs, week by week' },
    ],
  },
]

/** Mega-menu triggers on desktop; on narrow screens the hamburger opens a drawer with drill-down screens. */
export const MegaMenu: Story = {
  render: () => (
    <div style={{ background: 'var(--pom-background)', minHeight: '100vh' }}>
      <Navbar
        sticky
        logo={<Logo />}
        links={[{ label: 'Pricing', href: '#pricing' }]}
        menus={megaMenus}
        labels={{ back: 'Back' }}
        actions={<Button href="#quote" variant="outline" size="sm">Book a call</Button>}
      />
    </div>
  ),
}
