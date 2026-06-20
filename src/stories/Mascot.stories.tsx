import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Mascot } from '../../packages/react/src'

const meta: Meta<typeof Mascot> = {
  title: 'Foundations/Logo & Mascot',
  component: Mascot,
  argTypes: {
    variant: { control: 'select', options: ['full', 'solid', 'line'] },
    theme: { control: 'select', options: ['light', 'dark'] },
    size: { control: { type: 'range', min: 16, max: 300, step: 8 } },
  },
}

export default meta
type Story = StoryObj<typeof Mascot>

export const FullColor: Story = {
  name: 'Full Color',
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'full', theme: 'light', size: 200 },
}

export const SolidLight: Story = {
  name: 'Solid — Light',
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'solid', theme: 'light', size: 200 },
}

export const SolidDark: Story = {
  name: 'Solid — Dark',
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  args: { variant: 'solid', theme: 'dark', size: 200 },
}

export const LineArtLight: Story = {
  name: 'Line Art — Light',
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'line', theme: 'light', size: 200 },
}

export const LineArtDark: Story = {
  name: 'Line Art — Dark',
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  args: { variant: 'line', theme: 'dark', size: 200 },
}

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { layout: 'centered' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 16, overflow: 'hidden', width: 480 }}>
      {[
        { bg: '#f8fafc', variant: 'full' as const, theme: 'light' as const, label: 'FULL COLOR' },
        { bg: '#0e1627', variant: 'full' as const, theme: 'dark' as const, label: 'FULL COLOR / DARK' },
        { bg: '#f8fafc', variant: 'solid' as const, theme: 'light' as const, label: 'SOLID / LIGHT' },
        { bg: '#0e1627', variant: 'solid' as const, theme: 'dark' as const, label: 'SOLID / DARK' },
        { bg: '#f8fafc', variant: 'line' as const, theme: 'light' as const, label: 'LINE ART / LIGHT' },
        { bg: '#0e1627', variant: 'line' as const, theme: 'dark' as const, label: 'LINE ART / DARK' },
      ].map(({ bg, variant, theme, label }) => (
        <div key={label} style={{ background: bg, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <Mascot size={120} variant={variant} theme={theme} />
          <span style={{ fontSize: 11, color: bg === '#f8fafc' ? '#64748b' : '#475569', letterSpacing: '0.06em', fontFamily: 'Space Mono, monospace' }}>{label}</span>
        </div>
      ))}
    </div>
  ),
}

export const Small: Story = {
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'full', theme: 'light', size: 32 },
}

export const Favicon: Story = {
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  args: { variant: 'full', theme: 'dark', size: 48 },
}
