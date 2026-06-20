import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pattern } from '../Pattern'

describe('Pattern', () => {
  it('renders without crashing', () => {
    const { container } = render(<Pattern />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders pattern glyphs', () => {
    render(<Pattern />)
    expect(screen.getAllByText('</>').length).toBeGreaterThan(0)
  })

  it('applies custom className', () => {
    const { container } = render(<Pattern className="custom-pattern" />)
    expect(container.querySelector('.custom-pattern')).toBeInTheDocument()
  })

  it('renders tileable texture description', () => {
    render(<Pattern />)
    expect(screen.getByText('Tileable texture')).toBeInTheDocument()
  })
})
