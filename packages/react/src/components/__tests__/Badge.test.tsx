import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it.each(['default', 'primary', 'success', 'warning', 'error', 'info'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Badge variant={variant}>label</Badge>)
      expect(screen.getByText('label').closest('span')).toHaveClass(`cp-badge--${variant}`)
    }
  )

  it('applies sm size class', () => {
    render(<Badge size="sm">label</Badge>)
    expect(screen.getByText('label').closest('span')).toHaveClass('cp-badge--sm')
  })

  it('does not add size class for md (default)', () => {
    render(<Badge size="md">label</Badge>)
    expect(screen.getByText('label').closest('span')).not.toHaveClass('cp-badge--sm')
  })

  it('adds dot class when dot prop set', () => {
    render(<Badge dot>label</Badge>)
    expect(screen.getByText('label').closest('span')).toHaveClass('cp-badge--dot')
  })

  it('merges custom className', () => {
    render(<Badge className="custom">label</Badge>)
    expect(screen.getByText('label').closest('span')).toHaveClass('custom')
  })
})
