import React from 'react'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface NavbarProps {
  logo?: React.ReactNode
  links?: NavLink[]
  actions?: React.ReactNode
  sticky?: boolean
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  links = [],
  actions,
  sticky = false,
  className = '',
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const classes = [
    'cp-navbar',
    sticky ? 'cp-navbar--sticky' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={classes}>
      <div className="cp-navbar__inner">
        {logo && <div className="cp-navbar__logo">{logo}</div>}

        {links.length > 0 && (
          <ul className="cp-navbar__links" role="list">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={['cp-navbar__link', link.active ? 'cp-navbar__link--active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={link.active ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {actions && <div className="cp-navbar__actions">{actions}</div>}

        <button
          className="cp-navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="cp-navbar__hamburger-bar" />
          <span className="cp-navbar__hamburger-bar" />
          <span className="cp-navbar__hamburger-bar" />
        </button>
      </div>

      {menuOpen && links.length > 0 && (
        <div className="cp-navbar__mobile-menu">
          <ul role="list">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={['cp-navbar__mobile-link', link.active ? 'cp-navbar__mobile-link--active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  aria-current={link.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {actions && <div className="cp-navbar__mobile-actions">{actions}</div>}
        </div>
      )}
    </nav>
  )
}
