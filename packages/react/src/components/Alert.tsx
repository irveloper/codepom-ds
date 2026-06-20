import React from 'react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
  children: React.ReactNode
  className?: string
}

const icons: Record<AlertVariant, string> = {
  info: '★',
  success: '✓',
  warning: '⚠',
  error: '✕',
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  children,
  className = '',
}) => {
  const [dismissed, setDismissed] = React.useState(false)

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

  if (dismissed) return null

  const classes = ['cp-alert', `cp-alert--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      role="alert"
      className={classes}
    >
      <span className="cp-alert__icon" aria-hidden="true">
        {icons[variant]}
      </span>
      <div className="cp-alert__body">
        {title && <p className="cp-alert__title">{title}</p>}
        <div className="cp-alert__content">{children}</div>
      </div>
      {dismissible && (
        <button
          className="cp-alert__close"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
    </div>
  )
}
