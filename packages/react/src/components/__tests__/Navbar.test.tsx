import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '../Navbar'

const links = [
  { label: 'Home', href: '/', active: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
]

describe('Navbar', () => {
  it('renders nav element', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders logo when provided', () => {
    render(<Navbar logo={<span>Logo</span>} />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar links={links} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')
  })

  it('active link has aria-current=page', () => {
    render(<Navbar links={links} />)
    expect(screen.getAllByRole('link', { name: 'Home' })[0]).toHaveAttribute('aria-current', 'page')
  })

  it('renders actions slot', () => {
    render(<Navbar actions={<button>Login</button>} />)
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('applies sticky class when sticky prop set', () => {
    render(<Navbar sticky />)
    expect(document.querySelector('.cp-navbar--sticky')).toBeInTheDocument()
  })

  it('hamburger button toggles mobile menu', async () => {
    render(<Navbar links={links} />)
    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    expect(document.querySelector('.cp-navbar__mobile-menu')).not.toBeInTheDocument()
    await userEvent.click(hamburger)
    expect(document.querySelector('.cp-navbar__mobile-menu')).toBeInTheDocument()
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
  })

  it('hamburger aria-label changes when open', async () => {
    render(<Navbar links={links} />)
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('mobile menu closes after clicking a link', async () => {
    render(<Navbar links={links} />)
    await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileLinks = document.querySelectorAll('.cp-navbar__mobile-link')
    await userEvent.click(mobileLinks[0])
    expect(document.querySelector('.cp-navbar__mobile-menu')).not.toBeInTheDocument()
  })
})
