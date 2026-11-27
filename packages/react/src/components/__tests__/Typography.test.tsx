import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading, Text, Eyebrow } from '../Typography'

describe('Heading', () => {
  it('maps level to element and default role', () => {
    render(
      <>
        <Heading level={1}>Page</Heading>
        <Heading level={2}>Title</Heading>
        <Heading level={3}>Item</Heading>
      </>
    )
    expect(screen.getByRole('heading', { level: 1, name: 'Page' })).toHaveClass('pom-text--page', 'pom-text--tone-default')
    expect(screen.getByRole('heading', { level: 2, name: 'Title' })).toHaveClass('pom-text--title')
    expect(screen.getByRole('heading', { level: 3, name: 'Item' })).toHaveClass('pom-text--item')
  })

  it('size and tone override the defaults; as keeps the role on another element', () => {
    render(
      <Heading level={2} size="page" tone="accent" as="div" data-testid="h">
        Big
      </Heading>
    )
    const el = screen.getByTestId('h')
    expect(el.tagName).toBe('DIV')
    expect(el).toHaveClass('pom-text--page', 'pom-text--tone-accent')
  })

  it('forwards ref, className and attributes', () => {
    const ref = React.createRef<HTMLElement>()
    render(<Heading ref={ref} level={4} className="x" id="h4">h</Heading>)
    expect(ref.current?.tagName).toBe('H4')
    expect(ref.current).toHaveClass('x')
    expect(ref.current).toHaveAttribute('id', 'h4')
  })
})

describe('Text', () => {
  it('defaults to a body paragraph in the secondary tone', () => {
    render(<Text>Body</Text>)
    const p = screen.getByText('Body')
    expect(p.tagName).toBe('P')
    expect(p).toHaveClass('pom-text--body', 'pom-text--tone-secondary')
  })

  it.each([
    ['lead', 'secondary'],
    ['small', 'tertiary'],
    ['caption', 'tertiary'],
    ['mono', 'inherit'],
    ['stat', 'inherit'],
  ] as const)('%s defaults to the %s tone', (variant, tone) => {
    render(<Text variant={variant}>{variant}</Text>)
    expect(screen.getByText(variant)).toHaveClass(`pom-text--${variant}`, `pom-text--tone-${tone}`)
  })

  it('renders as another element with an explicit tone', () => {
    render(<Text as="span" variant="caption" tone="accent">c</Text>)
    const el = screen.getByText('c')
    expect(el.tagName).toBe('SPAN')
    expect(el).toHaveClass('pom-text--tone-accent')
  })
})

describe('polymorphic `as`', () => {
  it('accepts element-specific attributes', () => {
    render(
      <>
        <Text as="a" href="/terms" variant="small">Terms</Text>
        <Text as="button" type="button" variant="body">Prefs</Text>
        <Eyebrow as="label" htmlFor="f-name">Name</Eyebrow>
      </>
    )
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms')
    expect(screen.getByRole('button', { name: 'Prefs' })).toHaveAttribute('type', 'button')
    expect(screen.getByText('Name')).toHaveAttribute('for', 'f-name')
  })
})

describe('Eyebrow', () => {
  it('is a tertiary md label by default and supports sm / heading elements', () => {
    render(
      <>
        <Eyebrow>kicker</Eyebrow>
        <Eyebrow size="sm" tone="accent" as="h2">section</Eyebrow>
      </>
    )
    expect(screen.getByText('kicker')).toHaveClass('pom-text--label', 'pom-text--tone-tertiary')
    const h2 = screen.getByRole('heading', { level: 2, name: 'section' })
    expect(h2).toHaveClass('pom-text--label-sm', 'pom-text--tone-accent')
  })
})
