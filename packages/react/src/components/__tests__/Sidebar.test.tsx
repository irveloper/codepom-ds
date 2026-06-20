import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from '../Sidebar'

const links = [
  { label: 'Dashboard', href: '/dashboard', active: true },
  { label: 'Projects', href: '/projects' },
  {
    label: 'Settings',
    href: '/settings',
    children: [
      { label: 'Profile', href: '/settings/profile' },
      { label: 'Security', href: '/settings/security' },
    ],
  },
]

describe('Sidebar', () => {
  it('renders aside element', () => {
    render(<Sidebar links={links} />)
    expect(screen.getByRole('complementary')).toBeInTheDocument()
  })

  it('renders nav with sidebar label', () => {
    render(<Sidebar links={links} />)
    expect(screen.getByRole('navigation', { name: 'Sidebar navigation' })).toBeInTheDocument()
  })

  it('renders plain links', () => {
    render(<Sidebar links={links} />)
    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute('href', '/dashboard')
  })

  it('active link has aria-current=page', () => {
    render(<Sidebar links={links} />)
    expect(screen.getByRole('link', { name: 'Dashboard' })).toHaveAttribute('aria-current', 'page')
  })

  it('applies collapsed class when collapsed', () => {
    render(<Sidebar links={links} collapsed />)
    expect(document.querySelector('.cp-sidebar--collapsed')).toBeInTheDocument()
  })

  it('renders collapse toggle when onCollapse provided', () => {
    render(<Sidebar links={links} onCollapse={vi.fn()} />)
    expect(screen.getByRole('button', { name: /collapse sidebar/i })).toBeInTheDocument()
  })

  it('calls onCollapse when toggle clicked', async () => {
    const onCollapse = vi.fn()
    render(<Sidebar links={links} onCollapse={onCollapse} />)
    await userEvent.click(screen.getByRole('button', { name: /collapse sidebar/i }))
    expect(onCollapse).toHaveBeenCalledWith(true)
  })

  it('group with children renders as button', () => {
    render(<Sidebar links={links} />)
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument()
  })

  it('group children hidden by default', () => {
    render(<Sidebar links={links} />)
    expect(screen.queryByRole('link', { name: 'Profile' })).not.toBeInTheDocument()
  })

  it('group children visible after expanding', async () => {
    render(<Sidebar links={links} />)
    await userEvent.click(screen.getByRole('button', { name: /settings/i }))
    expect(screen.getByRole('link', { name: 'Profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Security' })).toBeInTheDocument()
  })

  it('group collapses on second click', async () => {
    render(<Sidebar links={links} />)
    await userEvent.click(screen.getByRole('button', { name: /settings/i }))
    await userEvent.click(screen.getByRole('button', { name: /settings/i }))
    expect(screen.queryByRole('link', { name: 'Profile' })).not.toBeInTheDocument()
  })
})
