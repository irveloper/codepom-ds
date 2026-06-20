import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '../../packages/react/src'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(1)
    return (
      <div style={{ padding: 32, background: '#0B132B', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <Pagination total={100} page={page} perPage={10} onChange={setPage} />
        <p style={{ margin: 0, fontSize: 13, color: '#94A3B8', fontFamily: 'Space Mono, monospace' }}>
          Page {page} of 10
        </p>
      </div>
    )
  },
}

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(1)
    return (
      <div style={{ padding: 32, background: '#0B132B' }}>
        <Pagination total={30} page={page} perPage={10} onChange={setPage} />
      </div>
    )
  },
}

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(5)
    return (
      <div style={{ padding: 32, background: '#0B132B' }}>
        <Pagination total={500} page={page} perPage={10} onChange={setPage} />
      </div>
    )
  },
}

export const LastPage: Story = {
  render: () => {
    const [page, setPage] = React.useState(10)
    return (
      <div style={{ padding: 32, background: '#0B132B' }}>
        <Pagination total={100} page={page} perPage={10} onChange={setPage} />
      </div>
    )
  },
}
