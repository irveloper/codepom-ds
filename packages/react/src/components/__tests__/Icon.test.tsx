import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Icon } from '../Icon'

describe('Icon', () => {
  it('renders svg with aria-label', () => {
    render(<Icon name="terminal" />)
    expect(screen.getByRole('img', { name: 'terminal' })).toBeInTheDocument()
  })

  it('renders nothing for unknown name', () => {
    // @ts-expect-error testing invalid name
    const { container } = render(<Icon name="does-not-exist" />)
    expect(container.firstChild).toBeNull()
  })

  it('applies custom size', () => {
    render(<Icon name="terminal" size={48} />)
    const svg = screen.getByRole('img', { name: 'terminal' })
    expect(svg).toHaveAttribute('width', '48')
    expect(svg).toHaveAttribute('height', '48')
  })

  it('applies color via style', () => {
    render(<Icon name="plus" color="#ff0000" />)
    const svg = screen.getByRole('img', { name: 'plus' })
    expect(svg).toHaveStyle({ color: '#ff0000' })
  })

  it('applies custom className', () => {
    render(<Icon name="gear" className="my-icon" />)
    expect(screen.getByRole('img', { name: 'gear' })).toHaveClass('my-icon')
  })

  it.each(['agility', 'partner', 'integrity', 'bone', 'db', 'gear-paw', 'gear', 'cloud', 'terminal', 'chip', 'plus', 'chevron-down'] as const)(
    'renders %s icon',
    (name) => {
      render(<Icon name={name} />)
      expect(screen.getByRole('img', { name })).toBeInTheDocument()
    }
  )
})
