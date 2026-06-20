import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardBody, CardFooter } from '../Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>content</Card>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('applies elevation class', () => {
    const { container } = render(<Card elevation={3}>x</Card>)
    expect(container.firstChild).toHaveClass('cp-card--elevation-3')
  })

  it('applies padding class', () => {
    const { container } = render(<Card padding="lg">x</Card>)
    expect(container.firstChild).toHaveClass('cp-card--pad-lg')
  })

  it('does not apply padding class when padding is none', () => {
    const { container } = render(<Card padding="none">x</Card>)
    expect(container.firstChild).not.toHaveClass('cp-card--pad-none')
  })

  it('applies interactive class', () => {
    const { container } = render(<Card interactive>x</Card>)
    expect(container.firstChild).toHaveClass('cp-card--interactive')
  })

  it('renders as custom element via as prop', () => {
    const { container } = render(<Card as="article">x</Card>)
    expect(container.querySelector('article')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(<Card className="custom">x</Card>)
    expect(container.firstChild).toHaveClass('custom')
  })
})

describe('CardHeader', () => {
  it('renders children in header div', () => {
    render(<CardHeader>Header</CardHeader>)
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(document.querySelector('.cp-card__header')).toBeInTheDocument()
  })
})

describe('CardBody', () => {
  it('renders children in body div', () => {
    render(<CardBody>Body</CardBody>)
    expect(screen.getByText('Body')).toBeInTheDocument()
    expect(document.querySelector('.cp-card__body')).toBeInTheDocument()
  })
})

describe('CardFooter', () => {
  it('renders children in footer div', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toBeInTheDocument()
    expect(document.querySelector('.cp-card__footer')).toBeInTheDocument()
  })
})
