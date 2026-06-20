import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, Button } from '../../packages/react/src'

const meta: Meta<typeof Tooltip> = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Top: Story = {
  render: () => (
    <div style={{ padding: 64, background: '#0B132B' }}>
      <Tooltip content="Tooltip on top" placement="top">
        <Button variant="secondary">Hover me (top)</Button>
      </Tooltip>
    </div>
  ),
}

export const Bottom: Story = {
  render: () => (
    <div style={{ padding: 64, background: '#0B132B' }}>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button variant="secondary">Hover me (bottom)</Button>
      </Tooltip>
    </div>
  ),
}

export const Left: Story = {
  render: () => (
    <div style={{ padding: 64, background: '#0B132B' }}>
      <Tooltip content="Tooltip on left" placement="left">
        <Button variant="secondary">Hover me (left)</Button>
      </Tooltip>
    </div>
  ),
}

export const Right: Story = {
  render: () => (
    <div style={{ padding: 64, background: '#0B132B' }}>
      <Tooltip content="Tooltip on right" placement="right">
        <Button variant="secondary">Hover me (right)</Button>
      </Tooltip>
    </div>
  ),
}

export const AllPlacements: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        padding: 80,
        background: '#0B132B',
      }}
    >
      <Tooltip content="Tooltip on top" placement="top">
        <Button variant="secondary" fullWidth>Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button variant="secondary" fullWidth>Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <Button variant="secondary" fullWidth>Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <Button variant="secondary" fullWidth>Right</Button>
      </Tooltip>
    </div>
  ),
}
