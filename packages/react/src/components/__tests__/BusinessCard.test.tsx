import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BusinessCard } from '../BusinessCard'

describe('BusinessCard', () => {
  it('renders with default props', () => {
    render(<BusinessCard />)
    expect(screen.getByText('Maya Chen')).toBeInTheDocument()
    expect(screen.getByText('Lead Engineer')).toBeInTheDocument()
  })

  it('renders custom name and title', () => {
    render(<BusinessCard name="Alex Kim" title="Designer" />)
    expect(screen.getByText('Alex Kim')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<BusinessCard email="test@example.com" phone="+1 555 0000" website="example.com" />)
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
    expect(screen.getByText('+1 555 0000')).toBeInTheDocument()
    expect(screen.getByText('example.com')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<BusinessCard className="custom-card" />)
    expect(container.querySelector('.custom-card')).toBeInTheDocument()
  })

  it('renders CODEPOM brand label', () => {
    render(<BusinessCard />)
    expect(screen.getAllByText('CODEPOM').length).toBeGreaterThan(0)
  })
})
