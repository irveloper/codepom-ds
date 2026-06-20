import React from 'react'

export type CardElevation = 0 | 1 | 2 | 3 | 4 | 5

export interface CardProps {
  elevation?: CardElevation
  padding?: 'none' | 'sm' | 'md' | 'lg'
  interactive?: boolean
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({
  elevation = 1,
  padding = 'md',
  interactive = false,
  children,
  className = '',
  as: Component = 'div',
}) => {
  const classes = [
    'cp-card',
    `cp-card--elevation-${elevation}`,
    padding !== 'none' ? `cp-card--pad-${padding}` : '',
    interactive ? 'cp-card--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`cp-card__header ${className}`.trim()}>{children}</div>
)

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`cp-card__body ${className}`.trim()}>{children}</div>
)

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`cp-card__footer ${className}`.trim()}>{children}</div>
)
