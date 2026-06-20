import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../packages/react/src'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', children: 'Primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md', children: 'Secondary' },
}

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md', children: 'Ghost' },
}

export const Danger: Story = {
  args: { variant: 'danger', size: 'md', children: 'Danger' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', children: 'Small' },
}

export const Medium: Story = {
  args: { variant: 'primary', size: 'md', children: 'Medium' },
}

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', children: 'Large' },
}

export const Loading: Story = {
  args: { variant: 'primary', size: 'md', loading: true, children: 'Loading…' },
}

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true, children: 'Disabled' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, padding: 32, background: '#0B132B', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 32, background: '#0B132B' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
}
