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

  const classes = ['pom-alert', `pom-alert--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      role="alert"
      className={classes}
    >
      <span className="pom-alert__icon" aria-hidden="true">
        {icons[variant]}
      </span>
      <div className="pom-alert__body">
        {title && <p className="pom-alert__title">{title}</p>}
        <div className="pom-alert__content">{children}</div>
      </div>
      {dismissible && (
        <button
          className="pom-alert__close"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
    </div>
  )
}
