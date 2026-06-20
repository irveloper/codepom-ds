import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '../../packages/react/src'
import type { SidebarLink } from '../../packages/react/src'

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
)

const BarChartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const sampleLinks: SidebarLink[] = [
  { label: 'Dashboard', href: '/', icon: <HomeIcon />, active: true },
  {
    label: 'Components',
    href: '/components',
    icon: <GridIcon />,
    children: [
      { label: 'Button', href: '/components/button' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Card', href: '/components/card' },
    ],
  },
  { label: 'Analytics', href: '/analytics', icon: <BarChartIcon />, badge: 12 },
  { label: 'Team', href: '/team', icon: <UsersIcon />, badge: 3 },
  { label: 'Settings', href: '/settings', icon: <SettingsIcon /> },
]

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    collapsed: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', background: '#0B132B', minHeight: '100vh' }}>
      <Sidebar links={sampleLinks} />
      <main style={{ flex: 1, padding: 32 }}>
        <p style={{ color: '#94A3B8', fontSize: 14 }}>Page content goes here</p>
      </main>
    </div>
  ),
}

export const WithCollapse: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false)
    return (
      <div style={{ display: 'flex', background: '#0B132B', minHeight: '100vh' }}>
        <Sidebar
          links={sampleLinks}
          collapsed={collapsed}
          onCollapse={setCollapsed}
        />
        <main style={{ flex: 1, padding: 32 }}>
          <p style={{ color: '#94A3B8', fontSize: 14 }}>
            Sidebar is currently {collapsed ? 'collapsed' : 'expanded'}. Click the toggle to {collapsed ? 'expand' : 'collapse'} it.
          </p>
        </main>
      </div>
    )
  },
}

export const Collapsed: Story = {
  render: () => (
    <div style={{ display: 'flex', background: '#0B132B', minHeight: '100vh' }}>
      <Sidebar links={sampleLinks} collapsed />
      <main style={{ flex: 1, padding: 32 }}>
        <p style={{ color: '#94A3B8', fontSize: 14 }}>Sidebar in collapsed state</p>
      </main>
    </div>
  ),
}
