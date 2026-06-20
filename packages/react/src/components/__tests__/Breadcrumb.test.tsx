import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Breadcrumb } from '../Breadcrumb'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Design System' },
]

describe('Breadcrumb', () => {
  it('renders nav with aria-label', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
  })

  it('renders all item labels', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Design System')).toBeInTheDocument()
  })

  it('renders links for non-last items', () => {
    render(<Breadcrumb items={items} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')
  })

  it('last item has aria-current page and is not a link', () => {
    render(<Breadcrumb items={items} />)
    const current = screen.getByText('Design System')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current.tagName).not.toBe('A')
  })

  it('renders chevron separator by default', () => {
    render(<Breadcrumb items={items} />)
    expect(document.querySelectorAll('.cp-breadcrumb__sep')).toHaveLength(2)
  })

  it('renders slash separator', () => {
    render(<Breadcrumb items={items} separator="slash" />)
    const seps = document.querySelectorAll('.cp-breadcrumb__sep')
    expect(seps[0]).toHaveTextContent('/')
  })

  it('renders dot separator', () => {
    render(<Breadcrumb items={items} separator="dot" />)
    const seps = document.querySelectorAll('.cp-breadcrumb__sep')
    expect(seps[0]).toHaveTextContent('·')
  })

  it('renders single item without separator', () => {
    render(<Breadcrumb items={[{ label: 'Home' }]} />)
    expect(document.querySelectorAll('.cp-breadcrumb__sep')).toHaveLength(0)
  })
})
