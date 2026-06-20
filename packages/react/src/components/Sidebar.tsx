import React from 'react'

export interface SidebarChildLink {
  label: string
  href: string
  active?: boolean
}

export interface SidebarLink {
  label: string
  href: string
  icon?: React.ReactNode
  badge?: string | number
  active?: boolean
  children?: SidebarChildLink[]
}

export interface SidebarProps {
  links?: SidebarLink[]
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({
  links = [],
  collapsed = false,
  onCollapse,
  className = '',
}) => {
  const [expandedGroups, setExpandedGroups] = React.useState<Record<number, boolean>>({})

  const toggleGroup = (index: number) => {
    setExpandedGroups((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const classes = [
    'cp-sidebar',
    collapsed ? 'cp-sidebar--collapsed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <aside className={classes}>
      {onCollapse && (
        <div className="cp-sidebar__toggle-wrap">
          <button
            className="cp-sidebar__toggle"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            onClick={() => onCollapse(!collapsed)}
          >
            {collapsed ? '›' : '‹'}
          </button>
        </div>
      )}

      <nav className="cp-sidebar__nav" aria-label="Sidebar navigation">
        <ul className="cp-sidebar__list" role="list">
          {links.map((link, i) => {
            const hasChildren = link.children && link.children.length > 0
            const isExpanded = expandedGroups[i] ?? false

            return (
              <li key={i} className="cp-sidebar__item">
                {hasChildren ? (
                  <>
                    <button
                      className={[
                        'cp-sidebar__link',
                        link.active ? 'cp-sidebar__link--active' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      aria-expanded={isExpanded}
                      onClick={() => toggleGroup(i)}
                    >
                      {link.icon && (
                        <span className="cp-sidebar__icon" aria-hidden="true">
                          {link.icon}
                        </span>
                      )}
                      {!collapsed && (
                        <>
                          <span className="cp-sidebar__label">{link.label}</span>
                          {link.badge != null && (
                            <span className="cp-sidebar__badge">{link.badge}</span>
                          )}
                          <span className="cp-sidebar__chevron" aria-hidden="true">
                            {isExpanded ? '▾' : '▸'}
                          </span>
                        </>
                      )}
                    </button>
                    {isExpanded && !collapsed && (
                      <ul className="cp-sidebar__sub-list" role="list">
                        {link.children!.map((child, j) => (
                          <li key={j} className="cp-sidebar__sub-item">
                            <a
                              href={child.href}
                              className={[
                                'cp-sidebar__sub-link',
                                child.active ? 'cp-sidebar__sub-link--active' : '',
                              ]
                                .filter(Boolean)
                                .join(' ')}
                              aria-current={child.active ? 'page' : undefined}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={[
                      'cp-sidebar__link',
                      link.active ? 'cp-sidebar__link--active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-current={link.active ? 'page' : undefined}
                  >
                    {link.icon && (
                      <span className="cp-sidebar__icon" aria-hidden="true">
                        {link.icon}
                      </span>
                    )}
                    {!collapsed && (
                      <>
                        <span className="cp-sidebar__label">{link.label}</span>
                        {link.badge != null && (
                          <span className="cp-sidebar__badge">{link.badge}</span>
                        )}
                      </>
                    )}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
