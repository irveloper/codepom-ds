import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Mascot } from '../Mascot'

describe('Mascot', () => {
  it('renders a span container', () => {
    const { container } = render(<Mascot />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('applies custom size via style', () => {
    const { container } = render(<Mascot size={80} />)
    const span = container.querySelector('span') as HTMLElement
    expect(span.style.width).toBe('80px')
    expect(span.style.height).toBe('80px')
  })

  it('applies custom className', () => {
    const { container } = render(<Mascot className="my-mascot" />)
    expect(container.querySelector('.my-mascot')).toBeInTheDocument()
  })

  it.each(['full', 'solid', 'line'] as const)('renders %s variant without crashing', (variant) => {
    const { container } = render(<Mascot variant={variant} />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it.each(['light', 'dark'] as const)('renders %s theme without crashing', (theme) => {
    const { container } = render(<Mascot theme={theme} />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('renders inline SVG content', () => {
    const { container } = render(<Mascot />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
