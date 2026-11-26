import React from 'react'
import { Icon } from './Icon'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface NavMenuItem {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
}

export interface NavMenuFeature {
  title: string
  href: string
  eyebrow?: string
  description?: string
  cta?: string
  ctaIcon?: React.ReactNode
}

/** A top-level trigger that opens a mega panel on desktop and a drill-down screen in the drawer. */
export interface NavMenu {
  label: string
  eyebrow?: string
  heading?: string
  items: NavMenuItem[]
  feature?: NavMenuFeature
}

export type NavSource = 'desktop' | 'mobile'

export interface NavLinkContext {
  source: NavSource
  kind: 'link' | 'item' | 'feature'
  menu?: NavMenu
}

/** Extra attributes merged onto a rendered anchor (e.g. `data-analytics-*`). */
export type NavAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Record<`data-${string}`, string | undefined>

export interface NavbarLabels {
  openMenu?: string
  closeMenu?: string
  back?: string
  drawer?: string
}

export interface NavbarProps {
  logo?: React.ReactNode
  /** Logo shown in the drawer header. Defaults to `logo`. */
  mobileLogo?: React.ReactNode
  links?: NavLink[]
  menus?: NavMenu[]
  actions?: React.ReactNode
  /** Content of the drawer footer. Defaults to `actions`. */
  mobileFooter?: React.ReactNode
  sticky?: boolean
  labels?: NavbarLabels
  getLinkProps?: (target: NavLink | NavMenuItem | NavMenuFeature, ctx: NavLinkContext) => NavAnchorProps | undefined
  onMenuOpen?: (menu: NavMenu, source: NavSource) => void
  onMobileOpenChange?: (open: boolean) => void
  className?: string
}

const DEFAULT_LABELS: Required<NavbarLabels> = {
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  back: 'Back',
  drawer: 'Menu',
}

const CLOSE_DELAY = 120
const DRAWER_TRANSITION = 350

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  mobileLogo,
  links = [],
  menus = [],
  actions,
  mobileFooter,
  sticky = false,
  labels: labelsProp,
  getLinkProps,
  onMenuOpen,
  onMobileOpenChange,
  className = '',
}) => {
  const labels = { ...DEFAULT_LABELS, ...labelsProp }
  const uid = React.useId()
  const [openMenu, setOpenMenu] = React.useState<number | null>(null)
  const [mobileOpen, setMobileOpenState] = React.useState(false)
  const [mobileMenu, setMobileMenu] = React.useState<number | null>(null)

  const navRef = React.useRef<HTMLElement>(null)
  const drawerRef = React.useRef<HTMLDivElement>(null)
  const hamburgerRef = React.useRef<HTMLButtonElement>(null)
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  // A panel opened by hover should not be closed by the click that usually follows it.
  const openedByHover = React.useRef(false)
  const wasOpen = React.useRef(false)
  // Keep the last drill-down menu rendered while the detail screen slides back out.
  const lastDetail = React.useRef<number | null>(null)
  if (mobileMenu !== null) lastDetail.current = mobileMenu
  const detailIndex = mobileMenu ?? lastDetail.current
  const detail = detailIndex !== null ? menus[detailIndex] : undefined

  const setMobileOpen = React.useCallback(
    (next: boolean) => {
      setMobileOpenState((prev) => {
        if (prev !== next) onMobileOpenChange?.(next)
        return next
      })
    },
    [onMobileOpenChange]
  )

  const linkProps = (target: NavLink | NavMenuItem | NavMenuFeature, ctx: NavLinkContext) =>
    getLinkProps?.(target, ctx) ?? {}

  const openDesktopMenu = (index: number) => {
    setOpenMenu((prev) => {
      if (prev !== index) onMenuOpen?.(menus[index], 'desktop')
      return index
    })
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY)
  }

  // Escape closes everything; clicking outside closes the desktop panel.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpenMenu(null)
      setMobileOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
      cancelClose()
    }
  }, [setMobileOpen])

  // Drawer: scroll lock, inert when closed, focus in on open / back to the hamburger on close,
  // and reset the drill-down screen once the slide-out transition is done.
  React.useEffect(() => {
    const drawer = drawerRef.current as (HTMLDivElement & { inert?: boolean }) | null
    if (drawer) drawer.inert = !mobileOpen

    if (mobileOpen) {
      wasOpen.current = true
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      closeBtnRef.current?.focus()
      return () => {
        document.body.style.overflow = prevOverflow
      }
    }

    if (wasOpen.current) {
      wasOpen.current = false
      hamburgerRef.current?.focus()
    }
    const t = setTimeout(() => setMobileMenu(null), DRAWER_TRANSITION)
    return () => clearTimeout(t)
  }, [mobileOpen])

  const closeOnLinkClick =
    (close: () => void) =>
    (e: React.MouseEvent<HTMLElement>) => {
      if ((e.target as HTMLElement).closest('a')) close()
    }

  const chevron = (cls: string) => (
    <span className={cls} aria-hidden="true">
      <Icon name="chevron-down" size={14} />
    </span>
  )

  const renderFeatureBody = (feature: NavMenuFeature, prefix: 'pom-mega' | 'pom-drawer') => (
    <>
      {feature.eyebrow && <span className={`${prefix}__feature-eyebrow`}>{feature.eyebrow}</span>}
      <span className={`${prefix}__feature-title`}>{feature.title}</span>
      {feature.description && <span className={`${prefix}__feature-desc`}>{feature.description}</span>}
      {feature.cta && (
        <span className={`${prefix}__feature-cta`}>
          {feature.cta}
          {feature.ctaIcon}
        </span>
      )}
    </>
  )

  const renderItem = (item: NavMenuItem, menu: NavMenu, source: NavSource) => {
    const prefix = source === 'desktop' ? 'pom-mega' : 'pom-drawer'
    return (
      <li key={item.href + item.label}>
        <a {...linkProps(item, { source, kind: 'item', menu })} href={item.href} className={`${prefix}__link`}>
          {item.icon && (
            <span className={`${prefix}__link-icon`} aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className={`${prefix}__link-body`}>
            <span className={`${prefix}__link-title`}>{item.label}</span>
            {item.description && <span className={`${prefix}__link-desc`}>{item.description}</span>}
          </span>
        </a>
      </li>
    )
  }

  const hasNav = links.length > 0 || menus.length > 0
  const footer = mobileFooter ?? actions

  return (
    <>
      <nav ref={navRef} className={cx('pom-navbar', sticky && 'pom-navbar--sticky', className)}>
        <div className="pom-navbar__inner">
          {logo && <div className="pom-navbar__logo">{logo}</div>}

          {hasNav && (
            <ul className="pom-navbar__links" role="list">
              {links.map((link) => (
                <li key={link.href + link.label} className="pom-navbar__item">
                  <a
                    {...linkProps(link, { source: 'desktop', kind: 'link' })}
                    href={link.href}
                    className={cx('pom-navbar__link', link.active && 'pom-navbar__link--active')}
                    aria-current={link.active ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {menus.map((menu, i) => {
                const isOpen = openMenu === i
                const panelId = `${uid}-menu-${i}`
                return (
                  <li
                    key={menu.label}
                    className="pom-navbar__item"
                    onMouseEnter={() => {
                      cancelClose()
                      if (openMenu !== i) openedByHover.current = true
                      openDesktopMenu(i)
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      className={cx('pom-navbar__trigger', isOpen && 'pom-navbar__trigger--open')}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => {
                        if (isOpen && openedByHover.current) {
                          openedByHover.current = false
                          return
                        }
                        openedByHover.current = false
                        if (isOpen) setOpenMenu(null)
                        else openDesktopMenu(i)
                      }}
                    >
                      {menu.label}
                      {chevron('pom-navbar__chevron')}
                    </button>

                    <div
                      id={panelId}
                      className={cx('pom-mega', isOpen && 'pom-mega--open', menu.feature && 'pom-mega--has-feature')}
                      aria-hidden={!isOpen}
                      onMouseEnter={cancelClose}
                      onClick={closeOnLinkClick(() => setOpenMenu(null))}
                    >
                      <div className="pom-mega__inner">
                        <div className="pom-mega__list">
                          {menu.eyebrow && <span className="pom-mega__eyebrow">{menu.eyebrow}</span>}
                          {menu.heading && <span className="pom-mega__heading">{menu.heading}</span>}
                          <ul className="pom-mega__links" role="list">
                            {menu.items.map((item) => renderItem(item, menu, 'desktop'))}
                          </ul>
                        </div>
                        {menu.feature && (
                          <a
                            {...linkProps(menu.feature, { source: 'desktop', kind: 'feature', menu })}
                            href={menu.feature.href}
                            className="pom-mega__feature"
                          >
                            {renderFeatureBody(menu.feature, 'pom-mega')}
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}

          {actions && <div className="pom-navbar__actions">{actions}</div>}

          {(hasNav || footer) && (
            <button
              ref={hamburgerRef}
              type="button"
              className={cx('pom-navbar__hamburger', mobileOpen && 'pom-navbar__hamburger--open')}
              aria-label={mobileOpen ? labels.closeMenu : labels.openMenu}
              aria-expanded={mobileOpen}
              aria-controls={`${uid}-drawer`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="pom-navbar__hamburger-bar" />
              <span className="pom-navbar__hamburger-bar" />
              <span className="pom-navbar__hamburger-bar" />
            </button>
          )}
        </div>
      </nav>

      {(hasNav || footer) && (
        <>
          <div
            className={cx('pom-drawer__scrim', mobileOpen && 'pom-drawer__scrim--open')}
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          <div
            ref={drawerRef}
            id={`${uid}-drawer`}
            className={cx('pom-drawer', mobileOpen && 'pom-drawer--open')}
            role="dialog"
            aria-modal="true"
            aria-label={labels.drawer}
            aria-hidden={!mobileOpen}
            onClick={closeOnLinkClick(() => setMobileOpen(false))}
          >
            <div className="pom-drawer__header">
              {mobileLogo ?? logo}
              <button
                ref={closeBtnRef}
                type="button"
                className="pom-drawer__close"
                aria-label={labels.closeMenu}
                onClick={() => setMobileOpen(false)}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="pom-drawer__body">
              <div className={cx('pom-drawer__screens', mobileMenu !== null && 'pom-drawer__screens--detail')}>
                <div className="pom-drawer__screen" aria-hidden={mobileMenu !== null}>
                  {links.map((link) => (
                    <a
                      key={link.href + link.label}
                      {...linkProps(link, { source: 'mobile', kind: 'link' })}
                      href={link.href}
                      className={cx('pom-drawer__nav-link', link.active && 'pom-drawer__nav-link--active')}
                      aria-current={link.active ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                  {menus.map((menu, i) => (
                    <button
                      key={menu.label}
                      type="button"
                      className="pom-drawer__group-head"
                      aria-controls={`${uid}-drawer-menu-${i}`}
                      onClick={() => {
                        setMobileMenu(i)
                        onMenuOpen?.(menu, 'mobile')
                      }}
                    >
                      {menu.eyebrow && <span className="pom-drawer__eyebrow">{menu.eyebrow}</span>}
                      <span className="pom-drawer__group-title">{menu.label}</span>
                      {chevron('pom-drawer__chevron')}
                    </button>
                  ))}
                </div>

                <div className="pom-drawer__screen" aria-hidden={mobileMenu === null}>
                  {detail && (
                    <div id={`${uid}-drawer-menu-${detailIndex}`} className="pom-drawer__detail">
                      <button type="button" className="pom-drawer__back" onClick={() => setMobileMenu(null)}>
                        {chevron('pom-drawer__chevron')}
                        {labels.back}
                      </button>
                      {detail.eyebrow && <span className="pom-drawer__eyebrow">{detail.eyebrow}</span>}
                      <span className="pom-drawer__detail-title">{detail.label}</span>
                      {detail.heading && <span className="pom-drawer__detail-heading">{detail.heading}</span>}
                      <ul className="pom-drawer__links" role="list">
                        {detail.items.map((item) => renderItem(item, detail, 'mobile'))}
                      </ul>
                      {detail.feature && (
                        <a
                          {...linkProps(detail.feature, { source: 'mobile', kind: 'feature', menu: detail })}
                          href={detail.feature.href}
                          className="pom-drawer__feature"
                        >
                          {renderFeatureBody(detail.feature, 'pom-drawer')}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {footer && <div className="pom-drawer__footer">{footer}</div>}
          </div>
        </>
      )}
    </>
  )
}
