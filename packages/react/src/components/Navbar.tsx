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
    'pom-navbar',
    sticky ? 'pom-navbar--sticky' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={classes}>
      <div className="pom-navbar__inner">
        {logo && <div className="pom-navbar__logo">{logo}</div>}

        {links.length > 0 && (
          <ul className="pom-navbar__links" role="list">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={['pom-navbar__link', link.active ? 'pom-navbar__link--active' : '']
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

        {actions && <div className="pom-navbar__actions">{actions}</div>}

        <button
          className="pom-navbar__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="pom-navbar__hamburger-bar" />
          <span className="pom-navbar__hamburger-bar" />
          <span className="pom-navbar__hamburger-bar" />
        </button>
      </div>

      {menuOpen && links.length > 0 && (
        <div className="pom-navbar__mobile-menu">
          <ul role="list">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className={['pom-navbar__mobile-link', link.active ? 'pom-navbar__mobile-link--active' : '']
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
          {actions && <div className="pom-navbar__mobile-actions">{actions}</div>}
        </div>
      )}
    </nav>
  )
}
