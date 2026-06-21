import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      disabled,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const classes = [
      'pom-btn',
      `pom-btn--${variant}`,
      `pom-btn--${size}`,
      fullWidth ? 'pom-btn--full' : '',
      loading ? 'pom-btn--loading' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <span className="pom-btn__spinner" aria-hidden="true" />
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="pom-btn__icon" aria-hidden="true">{icon}</span>
        )}
        {children && <span>{children}</span>}
        {icon && iconPosition === 'right' && !loading && (
          <span className="pom-btn__icon" aria-hidden="true">{icon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
