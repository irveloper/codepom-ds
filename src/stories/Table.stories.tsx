import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Table, Badge } from '../../packages/react/src'
import type { TableColumn } from '../../packages/react/src'

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status', width: 120 },
  { key: 'joined', label: 'Joined', width: 140 },
]

const rows = [
  {
    name: 'Maya Chen',
    role: 'Senior Engineer',
    status: <Badge variant="success" dot>Active</Badge>,
    joined: 'Jan 12, 2023',
  },
  {
    name: 'Alex Rivera',
    role: 'Product Designer',
    status: <Badge variant="success" dot>Active</Badge>,
    joined: 'Mar 5, 2023',
  },
  {
    name: 'Jordan Kim',
    role: 'Engineering Manager',
    status: <Badge variant="warning">Away</Badge>,
    joined: 'Aug 20, 2022',
  },
  {
    name: 'Sam Okafor',
    role: 'Frontend Engineer',
    status: <Badge variant="error">Inactive</Badge>,
    joined: 'Nov 2, 2021',
  },
  {
    name: 'Casey Wu',
    role: 'DevOps Engineer',
    status: <Badge variant="success" dot>Active</Badge>,
    joined: 'Feb 14, 2024',
  },
]

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  parameters: { layout: 'padded' },
  argTypes: {
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Table columns={columns} rows={rows} />
    </div>
  ),
}

export const Striped: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Table columns={columns} rows={rows} striped />
    </div>
  ),
}

export const Hoverable: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Table columns={columns} rows={rows} hoverable />
    </div>
  ),
}

export const StripedAndHoverable: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Table columns={columns} rows={rows} striped hoverable />
    </div>
  ),
}

export const Loading: Story = {
  render: () => (
    <div style={{ padding: 32, background: '#0B132B' }}>
      <Table columns={columns} rows={[]} loading />
    </div>
  ),
}
