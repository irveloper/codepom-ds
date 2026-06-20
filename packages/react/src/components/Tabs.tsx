import React from 'react'

export type TabsVariant = 'underline' | 'pill' | 'boxed'

export interface TabItem {
  id: string
  label: string
  badge?: string | number
  icon?: React.ReactNode
  disabled?: boolean
  content: React.ReactNode
}

export interface TabsProps {
  tabs: TabItem[]
  defaultTab?: string
  variant?: TabsVariant
  onChange?: (id: string) => void
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  variant = 'underline',
  onChange,
  className = '',
}) => {
  const [active, setActive] = React.useState(defaultTab ?? tabs[0]?.id)
  const tablistRef = React.useRef<HTMLDivElement>(null)

  const activate = (id: string) => {
    setActive(id)
    onChange?.(id)
  }

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    const enabledTabs = tabs.filter((t) => !t.disabled)
    const currentEnabledIndex = enabledTabs.findIndex((t) => t.id === tabs[currentIndex].id)

    let nextIndex = -1
    if (e.key === 'ArrowRight') nextIndex = (currentEnabledIndex + 1) % enabledTabs.length
    if (e.key === 'ArrowLeft')
      nextIndex = (currentEnabledIndex - 1 + enabledTabs.length) % enabledTabs.length
    if (e.key === 'Home') nextIndex = 0
    if (e.key === 'End') nextIndex = enabledTabs.length - 1

    if (nextIndex >= 0) {
      e.preventDefault()
      const nextTab = enabledTabs[nextIndex]
      activate(nextTab.id)
      const btn = tablistRef.current?.querySelector<HTMLButtonElement>(
        `[data-tab-id="${nextTab.id}"]`
      )
      btn?.focus()
    }
  }

  const activeTab = tabs.find((t) => t.id === active)

  return (
    <div className={`cp-tabs cp-tabs--${variant} ${className}`.trim()}>
      <div
        ref={tablistRef}
        role="tablist"
        className="cp-tabs__list"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            data-tab-id={tab.id}
            aria-selected={active === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            disabled={tab.disabled}
            tabIndex={active === tab.id ? 0 : -1}
            className={[
              'cp-tabs__tab',
              active === tab.id ? 'cp-tabs__tab--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => !tab.disabled && activate(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            {tab.icon && (
              <span className="cp-tabs__tab-icon" aria-hidden="true">
                {tab.icon}
              </span>
            )}
            {tab.label}
            {tab.badge !== undefined && (
              <span className="cp-tabs__badge">{tab.badge}</span>
            )}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={active !== tab.id}
          className="cp-tabs__panel"
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
