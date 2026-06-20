import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandPrinciples } from '../BrandPrinciples'

describe('BrandPrinciples', () => {
  it('renders without crashing', () => {
    const { container } = render(<BrandPrinciples />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders all three principle titles', () => {
    render(<BrandPrinciples />)
    expect(screen.getByText('Agility')).toBeInTheDocument()
    expect(screen.getByText('Partnership')).toBeInTheDocument()
    expect(screen.getByText('Integrity')).toBeInTheDocument()
  })

  it('renders principle descriptions', () => {
    render(<BrandPrinciples />)
    expect(screen.getByText(/Ship fast and iterate/)).toBeInTheDocument()
    expect(screen.getByText(/Fiercely loyal/)).toBeInTheDocument()
    expect(screen.getByText(/Honest estimates/)).toBeInTheDocument()
  })

  it('renders tagline', () => {
    render(<BrandPrinciples />)
    expect(screen.getByText(/Pioneering agile web engineering/)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<BrandPrinciples className="custom" />)
    expect(container.querySelector('.custom')).toBeInTheDocument()
  })
})
