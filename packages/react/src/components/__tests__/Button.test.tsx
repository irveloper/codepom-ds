import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it.each(['primary', 'secondary', 'ghost', 'danger'] as const)('applies %s variant class', (variant) => {
    render(<Button variant={variant}>btn</Button>)
    expect(screen.getByRole('button')).toHaveClass(`pom-btn--${variant}`)
  })

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Button size={size}>btn</Button>)
    expect(screen.getByRole('button')).toHaveClass(`pom-btn--${size}`)
  })

  it('is disabled when disabled prop set', () => {
    render(<Button disabled>btn</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is disabled and aria-busy when loading', () => {
    render(<Button loading>btn</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute('aria-busy', 'true')
    expect(btn).toHaveClass('pom-btn--loading')
  })

  it('applies pom-btn--full when fullWidth', () => {
    render(<Button fullWidth>btn</Button>)
    expect(screen.getByRole('button')).toHaveClass('pom-btn--full')
  })

  it('calls onClick handler', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>btn</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick}>btn</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('does not call onClick when loading', async () => {
    const onClick = vi.fn()
    render(<Button loading onClick={onClick}>btn</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('forwards ref to button element', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>btn</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('passes through arbitrary HTML attributes', () => {
    render(<Button data-testid="my-btn" type="submit">btn</Button>)
    const btn = screen.getByTestId('my-btn')
    expect(btn).toHaveAttribute('type', 'submit')
  })
})
