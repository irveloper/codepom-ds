import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '../../packages/react/src'

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Iconography',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: ['agility', 'partner', 'integrity', 'bone', 'db', 'gear-paw', 'gear', 'cloud', 'terminal', 'chip', 'plus', 'chevron-down'],
    },
    size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
    color: { control: 'color' },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Agility: Story = { args: { name: 'agility', size: 30 } }
export const Partnership: Story = { args: { name: 'partner', size: 30 } }
export const Integrity: Story = { args: { name: 'integrity', size: 30 } }
export const CodeBone: Story = { args: { name: 'bone', size: 30 } }
export const DatabasePaw: Story = { args: { name: 'db', size: 30 } }
export const GearPaw: Story = { args: { name: 'gear-paw', size: 30 } }
export const Gear: Story = { args: { name: 'gear', size: 30 } }
export const CloudPaw: Story = { args: { name: 'cloud', size: 30 } }
export const Terminal: Story = { args: { name: 'terminal', size: 30 } }
export const Chip: Story = { args: { name: 'chip', size: 30 } }

export const AllIcons: Story = {
  name: 'All Icons',
  parameters: { layout: 'centered' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, padding: 24 }}>
      {(['agility', 'partner', 'integrity', 'bone', 'db', 'gear-paw', 'gear', 'cloud', 'terminal', 'chip', 'plus', 'chevron-down'] as const).map(name => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Icon name={name} size={32} />
          <span style={{ fontSize: 10, fontFamily: 'Space Mono, monospace', color: '#64748b' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
}
