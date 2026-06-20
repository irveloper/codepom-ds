import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonCard, SkeletonText } from '../../packages/react/src'

const meta: Meta<typeof Skeleton> = {
  title: 'Data Display/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  argTypes: {
    rounded: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 400 }}>
      <Skeleton width="100%" height={20} />
    </div>
  ),
}

export const Pill: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Skeleton width={80} height={24} rounded />
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Skeleton width={48} height={48} rounded />
    </div>
  ),
}

export const TextLines: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 400 }}>
      <SkeletonText lines={4} />
    </div>
  ),
}

export const CardPreset: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 400 }}>
      <SkeletonCard />
    </div>
  ),
}

export const TableRows: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 560 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 16, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {['Name', 'Role', 'Status', 'Joined'].map((h) => (
            <Skeleton key={h} width="70%" height={12} />
          ))}
        </div>
        {/* Rows */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 16, padding: '10px 0' }}>
            <Skeleton width="80%" height={14} />
            <Skeleton width="60%" height={14} />
            <Skeleton width={60} height={20} rounded />
            <Skeleton width="70%" height={14} />
          </div>
        ))}
      </div>
    </div>
  ),
}

export const PageLayout: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B', width: 560, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Page header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton width={200} height={28} />
        <Skeleton width={320} height={16} />
      </div>
      {/* Cards row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  ),
}
