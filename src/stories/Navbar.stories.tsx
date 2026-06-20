import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Navbar, Button, Badge } from '../../packages/react/src'

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
