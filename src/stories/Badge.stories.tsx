import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../../packages/react/src'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: { control: 'select', options: ['sm', 'md'] },
    dot: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { variant: 'default', children: 'Default' },
}

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
}

export const Success: Story = {
  args: { variant: 'success', children: 'Success' },
}

export const Warning: Story = {
  args: { variant: 'warning', children: 'Warning' },
}

export const Error: Story = {
  args: { variant: 'error', children: 'Error' },
}

export const Info: Story = {
  args: { variant: 'info', children: 'Info' },
}

export const WithDot: Story = {
  args: { variant: 'success', dot: true, children: 'Live' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', children: 'Small' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', padding: 32, background: '#0B132B' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success" dot>Live</Badge>
    </div>
  ),
}
