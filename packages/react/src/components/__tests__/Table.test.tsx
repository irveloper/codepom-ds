import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Table } from '../Table'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
]

const rows = [
  { name: 'Maya Chen', role: 'Engineer' },
  { name: 'Alex Kim', role: 'Designer' },
]

describe('Table', () => {
  it('renders table element', () => {
    render(<Table columns={columns} rows={rows} />)
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('renders column headers', () => {
    render(<Table columns={columns} rows={rows} />)
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Role' })).toBeInTheDocument()
  })

  it('renders row data', () => {
    render(<Table columns={columns} rows={rows} />)
    expect(screen.getByText('Maya Chen')).toBeInTheDocument()
    expect(screen.getByText('Alex Kim')).toBeInTheDocument()
    expect(screen.getByText('Engineer')).toBeInTheDocument()
  })

  it('renders correct number of rows', () => {
    render(<Table columns={columns} rows={rows} />)
    expect(screen.getAllByRole('row')).toHaveLength(3) // 1 header + 2 data
  })

  it('applies striped class', () => {
    render(<Table columns={columns} rows={rows} striped />)
    expect(document.querySelector('.pom-table--striped')).toBeInTheDocument()
  })

  it('applies hoverable class', () => {
    render(<Table columns={columns} rows={rows} hoverable />)
    expect(document.querySelector('.pom-table--hoverable')).toBeInTheDocument()
  })

  it('shows skeleton rows when loading', () => {
    render(<Table columns={columns} rows={[]} loading />)
    expect(document.querySelectorAll('.pom-skeleton').length).toBeGreaterThan(0)
    expect(screen.queryByText('Maya Chen')).not.toBeInTheDocument()
  })

  it('renders React nodes in cells', () => {
    const richRows = [{ name: <strong>Bold</strong>, role: 'Dev' }]
    render(<Table columns={columns} rows={richRows} />)
    expect(screen.getByText('Bold').tagName).toBe('STRONG')
  })
})
