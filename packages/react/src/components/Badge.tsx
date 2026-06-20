import React from 'react'

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
  className = '',
}) => {
  const classes = [
    'cp-badge',
    `cp-badge--${variant}`,
    size === 'sm' ? 'cp-badge--sm' : '',
    dot ? 'cp-badge--dot' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children}</span>
}
