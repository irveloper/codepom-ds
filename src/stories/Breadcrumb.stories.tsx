import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from '../../packages/react/src'

const sampleItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Design System', href: '/projects/design-system' },
  { label: 'Components' },
]

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  argTypes: {
    separator: {
      control: 'select',
      options: ['chevron', 'slash', 'dot'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: sampleItems,
    separator: 'chevron',
  },
}

export const Chevron: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Breadcrumb items={sampleItems} separator="chevron" />
    </div>
  ),
}

export const Slash: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Breadcrumb items={sampleItems} separator="slash" />
    </div>
  ),
}

export const Dot: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Breadcrumb items={sampleItems} separator="dot" />
    </div>
  ),
}

export const AllSeparators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 32, background: '#0B132B' }}>
      <div>
        <p style={{ color: '#94A3B8', fontSize: 12, marginBottom: 8, fontFamily: 'Space Mono, monospace' }}>separator="chevron"</p>
        <Breadcrumb items={sampleItems} separator="chevron" />
      </div>
      <div>
        <p style={{ color: '#94A3B8', fontSize: 12, marginBottom: 8, fontFamily: 'Space Mono, monospace' }}>separator="slash"</p>
        <Breadcrumb items={sampleItems} separator="slash" />
      </div>
      <div>
        <p style={{ color: '#94A3B8', fontSize: 12, marginBottom: 8, fontFamily: 'Space Mono, monospace' }}>separator="dot"</p>
        <Breadcrumb items={sampleItems} separator="dot" />
      </div>
    </div>
  ),
}
