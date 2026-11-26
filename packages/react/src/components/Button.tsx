import React from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonOwnProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

export type ButtonAsButtonProps = ButtonOwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

/** Passing `href` renders an `<a>` styled as a button (links that look like buttons). */
export type ButtonAsLinkProps = ButtonOwnProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean }

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      disabled,
      children,
      className = '',
      ...rest
    } = props

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

    const content = (
      <>
        {loading && <span className="pom-btn__spinner" aria-hidden="true" />}
        {icon && iconPosition === 'left' && !loading && (
          <span className="pom-btn__icon pom-btn__icon--left" aria-hidden="true">{icon}</span>
        )}
        {children != null && children !== false && <span>{children}</span>}
        {icon && iconPosition === 'right' && !loading && (
          <span className="pom-btn__icon pom-btn__icon--right" aria-hidden="true">{icon}</span>
        )}
      </>
    )

    if (rest.href !== undefined) {
      const inactive = disabled || loading
      const { onClick, ...anchorProps } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>
      return (
        <a
          {...anchorProps}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          aria-disabled={inactive || undefined}
          aria-busy={loading || undefined}
          tabIndex={inactive ? -1 : anchorProps.tabIndex}
          onClick={inactive ? (e) => e.preventDefault() : onClick}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
