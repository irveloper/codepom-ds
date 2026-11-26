import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar, type NavMenu } from '../Navbar'

const links = [
  { label: 'Home', href: '/', active: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
]

const menus: NavMenu[] = [
  {
    label: 'Services',
    eyebrow: '01 / Build',
    heading: 'What we ship',
    items: [
      { label: 'Web apps', href: '/#web', description: 'Full-stack products' },
      { label: 'MVPs', href: '/mvp', description: 'Validate fast' },
    ],
    feature: { title: 'Get a quote', href: '/quote', cta: 'Start' },
  },
  { label: 'Company', items: [{ label: 'About', href: '/about' }] },
]

const drawer = () => document.querySelector('.pom-drawer') as HTMLElement
const isDrawerOpen = () => drawer().classList.contains('pom-drawer--open')

describe('Navbar', () => {
  it('renders nav element', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders logo when provided', () => {
    render(<Navbar logo={<span>Logo</span>} />)
    expect(screen.getByText('Logo')).toBeInTheDocument()
  })

  it('renders nav links (closed drawer is hidden from the a11y tree)', () => {
    render(<Navbar links={links} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')
  })

  it('active link has aria-current=page', () => {
    render(<Navbar links={links} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('renders actions slot', () => {
    render(<Navbar actions={<button>Login</button>} />)
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('applies sticky class when sticky prop set', () => {
    render(<Navbar sticky />)
    expect(document.querySelector('.pom-navbar--sticky')).toBeInTheDocument()
  })

  describe('mobile drawer', () => {
    it('hamburger toggles the drawer', async () => {
      render(<Navbar links={links} />)
      const hamburger = screen.getByRole('button', { name: 'Open menu' })
      expect(isDrawerOpen()).toBe(false)
      expect(drawer()).toHaveAttribute('aria-hidden', 'true')
      await userEvent.click(hamburger)
      expect(isDrawerOpen()).toBe(true)
      expect(hamburger).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByRole('dialog', { name: 'Menu' })).toBeInTheDocument()
    })

    it('moves focus to the close button on open and back to the hamburger on close', async () => {
      render(<Navbar links={links} />)
      const hamburger = screen.getByRole('button', { name: 'Open menu' })
      await userEvent.click(hamburger)
      const dialog = screen.getByRole('dialog')
      expect(within(dialog).getByRole('button', { name: 'Close menu' })).toHaveFocus()
      await userEvent.click(within(dialog).getByRole('button', { name: 'Close menu' }))
      expect(isDrawerOpen()).toBe(false)
      expect(hamburger).toHaveFocus()
    })

    it('closes after clicking a link', async () => {
      render(<Navbar links={links} />)
      await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      const dialog = screen.getByRole('dialog')
      await userEvent.click(within(dialog).getByRole('link', { name: 'Projects' }))
      expect(isDrawerOpen()).toBe(false)
    })

    it('closes on Escape and locks body scroll while open', async () => {
      render(<Navbar links={links} />)
      await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      expect(document.body.style.overflow).toBe('hidden')
      await userEvent.keyboard('{Escape}')
      expect(isDrawerOpen()).toBe(false)
      expect(document.body.style.overflow).toBe('')
    })

    it('reports open state changes', async () => {
      const onMobileOpenChange = vi.fn()
      render(<Navbar links={links} onMobileOpenChange={onMobileOpenChange} />)
      await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      await userEvent.click(screen.getByRole('button', { name: 'Close menu', hidden: false, expanded: true }))
      expect(onMobileOpenChange.mock.calls).toEqual([[true], [false]])
    })

    it('drills into a menu and back', async () => {
      const onMenuOpen = vi.fn()
      render(<Navbar menus={menus} onMenuOpen={onMenuOpen} labels={{ back: 'Volver' }} />)
      await userEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      const dialog = screen.getByRole('dialog')
      await userEvent.click(within(dialog).getByRole('button', { name: /Services/ }))
      expect(document.querySelector('.pom-drawer__screens--detail')).toBeInTheDocument()
      expect(onMenuOpen).toHaveBeenCalledWith(menus[0], 'mobile', 'click')
      expect(within(dialog).getByRole('link', { name: /MVPs/ })).toHaveAttribute('href', '/mvp')
      expect(within(dialog).getByRole('link', { name: /Get a quote/ })).toHaveAttribute('href', '/quote')
      await userEvent.click(within(dialog).getByRole('button', { name: 'Volver' }))
      expect(document.querySelector('.pom-drawer__screens--detail')).not.toBeInTheDocument()
    })

    it('uses custom labels and footer', async () => {
      render(
        <Navbar
          links={links}
          labels={{ openMenu: 'Abrir', closeMenu: 'Cerrar', drawer: 'Menú' }}
          mobileFooter={<a href="/quote">Cotizar</a>}
        />
      )
      await userEvent.click(screen.getByRole('button', { name: 'Abrir' }))
      const dialog = screen.getByRole('dialog', { name: 'Menú' })
      expect(within(dialog).getByRole('link', { name: 'Cotizar' })).toBeInTheDocument()
    })
  })

  describe('mega menu (desktop)', () => {
    it('a click right after hover-open keeps the panel open; the next click closes it', async () => {
      render(<Navbar menus={menus} />)
      const trigger = screen.getByRole('button', { name: 'Services' })
      await userEvent.click(trigger) // userEvent hovers first, like a real mouse
      expect(trigger).toHaveAttribute('aria-expanded', 'true')
      await userEvent.click(trigger)
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })

    it('keyboard toggles the panel', async () => {
      render(<Navbar menus={menus} />)
      const trigger = screen.getByRole('button', { name: 'Services' })
      trigger.focus()
      await userEvent.keyboard('{Enter}')
      expect(trigger).toHaveAttribute('aria-expanded', 'true')
      await userEvent.keyboard('{Enter}')
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })

    it('reports how a panel was opened', async () => {
      const onMenuOpen = vi.fn()
      render(<Navbar menus={menus} onMenuOpen={onMenuOpen} />)
      const trigger = screen.getByRole('button', { name: 'Services' })
      trigger.focus()
      await userEvent.keyboard('{Enter}')
      expect(onMenuOpen).toHaveBeenLastCalledWith(menus[0], 'desktop', 'click')
      await userEvent.keyboard('{Escape}')
      await userEvent.hover(trigger)
      expect(onMenuOpen).toHaveBeenLastCalledWith(menus[0], 'desktop', 'hover')
      expect(onMenuOpen).toHaveBeenCalledTimes(2)
    })

    it('trigger click opens the panel and reports it', async () => {
      const onMenuOpen = vi.fn()
      render(<Navbar menus={menus} onMenuOpen={onMenuOpen} />)
      const trigger = screen.getByRole('button', { name: 'Services' })
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      await userEvent.click(trigger)
      expect(trigger).toHaveAttribute('aria-expanded', 'true')
      const panel = document.getElementById(trigger.getAttribute('aria-controls')!)!
      expect(panel).toHaveClass('pom-mega--open', 'pom-mega--has-feature')
      expect(within(panel).getByText('What we ship')).toBeInTheDocument()
      expect(within(panel).getByRole('link', { name: /Web apps/ })).toHaveAttribute('href', '/#web')
      expect(onMenuOpen).toHaveBeenCalledWith(menus[0], 'desktop', 'hover')
    })

    it('closes on second click, Escape, and outside click', async () => {
      render(
        <>
          <Navbar menus={menus} />
          <p>outside</p>
        </>
      )
      const trigger = screen.getByRole('button', { name: 'Services' })
      await userEvent.click(trigger)
      await userEvent.keyboard('{Escape}')
      expect(trigger).toHaveAttribute('aria-expanded', 'false')

      await userEvent.click(trigger)
      await userEvent.click(screen.getByText('outside'))
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })

    it('opens on hover and closes after a short delay on leave', async () => {
      vi.useFakeTimers()
      try {
        render(<Navbar menus={menus} />)
        const trigger = screen.getByRole('button', { name: 'Company' })
        const item = trigger.closest('li')!
        act(() => {
          item.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
        })
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
        act(() => {
          item.dispatchEvent(new MouseEvent('mouseout', { bubbles: true, relatedTarget: document.body }))
        })
        expect(trigger).toHaveAttribute('aria-expanded', 'true')
        act(() => {
          vi.advanceTimersByTime(200)
        })
        expect(trigger).toHaveAttribute('aria-expanded', 'false')
      } finally {
        vi.useRealTimers()
      }
    })
  })

  it('getLinkProps adds attributes per source and kind', () => {
    render(
      <Navbar
        links={links}
        menus={menus}
        getLinkProps={(target, ctx) => ({
          'data-analytics-nav': `${ctx.source}_${ctx.kind}_${'label' in target ? target.label : target.title}`,
        })}
      />
    )
    expect(document.querySelector('[data-analytics-nav="desktop_link_Home"]')).toHaveAttribute('href', '/')
    expect(document.querySelector('[data-analytics-nav="mobile_link_Home"]')).toBeInTheDocument()
    expect(document.querySelector('[data-analytics-nav="desktop_item_MVPs"]')).toHaveAttribute('href', '/mvp')
    expect(document.querySelector('[data-analytics-nav="desktop_feature_Get a quote"]')).toBeInTheDocument()
  })
})
