import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tooltip } from '../Tooltip'

describe('Tooltip', () => {
  it('renders the child element', () => {
    render(
      <Tooltip content="Help text">
        <button>Hover me</button>
      </Tooltip>
    )
    expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument()
  })

  it('renders tooltip content with role tooltip', () => {
    render(
      <Tooltip content="Help text">
        <button>btn</button>
      </Tooltip>
    )
    expect(screen.getByRole('tooltip')).toHaveTextContent('Help text')
  })

  it('wires aria-describedby from child to tooltip id', () => {
    render(
      <Tooltip content="Help text">
        <button>btn</button>
      </Tooltip>
    )
    const btn = screen.getByRole('button')
    const tooltip = screen.getByRole('tooltip')
    expect(btn).toHaveAttribute('aria-describedby', tooltip.id)
  })

  it.each(['top', 'bottom', 'left', 'right'] as const)('applies %s placement class', (placement) => {
    render(
      <Tooltip content="tip" placement={placement}>
        <button>btn</button>
      </Tooltip>
    )
    expect(document.querySelector(`.pom-tooltip--${placement}`)).toBeInTheDocument()
    expect(document.querySelector(`.pom-tooltip-host--${placement}`)).toBeInTheDocument()
  })
})
