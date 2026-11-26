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

  it.each(['primary', 'secondary', 'outline', 'ghost', 'danger'] as const)('applies %s variant class', (variant) => {
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

  describe('as link (href)', () => {
    it('renders an anchor with button classes', () => {
      render(<Button href="/quote" variant="outline" size="sm">Quote</Button>)
      const link = screen.getByRole('link', { name: 'Quote' })
      expect(link).toHaveAttribute('href', '/quote')
      expect(link).toHaveClass('pom-btn', 'pom-btn--outline', 'pom-btn--sm')
    })

    it('passes through anchor and data attributes', () => {
      render(<Button href="/x" target="_blank" rel="noopener" data-analytics-cta="hero">Go</Button>)
      const link = screen.getByRole('link', { name: 'Go' })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('data-analytics-cta', 'hero')
    })

    it('disabled link is aria-disabled, unfocusable and swallows clicks', async () => {
      const onClick = vi.fn()
      render(<Button href="/x" disabled onClick={onClick}>Nope</Button>)
      const link = screen.getByRole('link', { name: 'Nope' })
      expect(link).toHaveAttribute('aria-disabled', 'true')
      expect(link).toHaveAttribute('tabindex', '-1')
      link.click()
      expect(onClick).not.toHaveBeenCalled()
    })

    it('forwards ref to anchor element', () => {
      const ref = React.createRef<HTMLAnchorElement>()
      render(<Button href="/x" ref={ref}>a</Button>)
      expect(ref.current).toBeInstanceOf(HTMLAnchorElement)
    })
  })

  it('marks icon side with a modifier class', () => {
    render(<Button icon={<span>→</span>} iconPosition="right">Next</Button>)
    expect(document.querySelector('.pom-btn__icon--right')).toBeInTheDocument()
  })
})
