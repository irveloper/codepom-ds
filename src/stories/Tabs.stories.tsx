import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from '../../packages/react/src'
import type { TabItem } from '../../packages/react/src'

const sampleTabs: TabItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div style={{ padding: '16px 0', color: '#94A3B8', fontSize: 14 }}>
        Overview content goes here. This is the main summary tab.
      </div>
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    badge: 3,
    content: (
      <div style={{ padding: '16px 0', color: '#94A3B8', fontSize: 14 }}>
        Analytics data and charts would appear in this panel.
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <div style={{ padding: '16px 0', color: '#94A3B8', fontSize: 14 }}>
        Configuration and settings options appear here.
      </div>
    ),
  },
  {
    id: 'disabled',
    label: 'Disabled',
    disabled: true,
    content: null,
  },
]

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pill', 'boxed'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Underline: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 560 }}>
      <Tabs tabs={sampleTabs} variant="underline" />
    </div>
  ),
}

export const Pill: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 560 }}>
      <Tabs tabs={sampleTabs} variant="pill" />
    </div>
  ),
}

export const Boxed: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 560 }}>
      <Tabs tabs={sampleTabs} variant="boxed" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', display: 'flex', flexDirection: 'column', gap: 48, width: 560 }}>
      <div>
        <p style={{ color: '#94A3B8', fontSize: 12, marginBottom: 12, fontFamily: 'Space Mono, monospace' }}>variant="underline"</p>
        <Tabs tabs={sampleTabs} variant="underline" />
      </div>
      <div>
        <p style={{ color: '#94A3B8', fontSize: 12, marginBottom: 12, fontFamily: 'Space Mono, monospace' }}>variant="pill"</p>
        <Tabs tabs={sampleTabs} variant="pill" />
      </div>
      <div>
        <p style={{ color: '#94A3B8', fontSize: 12, marginBottom: 12, fontFamily: 'Space Mono, monospace' }}>variant="boxed"</p>
        <Tabs tabs={sampleTabs} variant="boxed" />
      </div>
    </div>
  ),
}
