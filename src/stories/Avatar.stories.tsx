import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../../packages/react/src'

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    status: { control: 'select', options: ['online', 'away', 'busy', 'offline', 'none'] },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/100',
    name: 'Jane Doe',
    size: 'md',
  },
}

export const WithInitials: Story = {
  args: {
    name: 'Maya Chen',
    size: 'md',
  },
}

export const Online: Story = {
  args: {
    name: 'Alex Kim',
    size: 'md',
    status: 'online',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 32, background: '#0B132B' }}>
      <Avatar name="A B" size="xs" />
      <Avatar name="A B" size="sm" />
      <Avatar name="A B" size="md" />
      <Avatar name="A B" size="lg" />
      <Avatar name="A B" size="xl" />
    </div>
  ),
}

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: 32, background: '#0B132B' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Avatar name="On" size="lg" status="online" />
        <span style={{ fontSize: 12, color: '#94A3B8' }}>Online</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Avatar name="Aw" size="lg" status="away" />
        <span style={{ fontSize: 12, color: '#94A3B8' }}>Away</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Avatar name="Bu" size="lg" status="busy" />
        <span style={{ fontSize: 12, color: '#94A3B8' }}>Busy</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <Avatar name="Of" size="lg" status="offline" />
        <span style={{ fontSize: 12, color: '#94A3B8' }}>Offline</span>
      </div>
    </div>
  ),
}

export const WithImageAndStatus: Story = {
  args: {
    src: 'https://i.pravatar.cc/100?img=3',
    name: 'Sam Rivera',
    size: 'xl',
    status: 'online',
  },
}
