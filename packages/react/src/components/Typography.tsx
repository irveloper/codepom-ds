import React from 'react'

/**
 * One type scale for every page (modelled on codepom.io's MVP Build page).
 * Roles map to --pom-type-* tokens and the matching Tailwind `text-{role}` utilities.
 */
export type TextTone = 'default' | 'secondary' | 'tertiary' | 'accent' | 'inherit'
export type HeadingSize = 'page' | 'title' | 'item' | 'stat'
export type TextVariant = 'lead' | 'body' | 'small' | 'caption' | 'mono' | 'stat'
export type LabelSize = 'md' | 'sm'

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

type Level = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Document outline level (h1–h6). */
  level?: Level
  /** Visual role. Defaults by level: 1 → page, 2 → title, 3+ → item. */
  size?: HeadingSize
  tone?: TextTone
  /** Render a different element while keeping the role (e.g. a `div` that only looks like a heading). */
  as?: React.ElementType
}

const sizeForLevel = (level: Level): HeadingSize => (level === 1 ? 'page' : level === 2 ? 'title' : 'item')

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, size, tone = 'default', as, className = '', children, ...rest }, ref) => {
    const Component = (as ?? `h${level}`) as React.ElementType
    return (
      <Component
        ref={ref}
        className={cx('pom-text', `pom-text--${size ?? sizeForLevel(level)}`, `pom-text--tone-${tone}`, className)}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)
Heading.displayName = 'Heading'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant
  /** Defaults: lead/body → secondary, small/caption → tertiary, mono/stat → inherit. */
  tone?: TextTone
  as?: React.ElementType
}

const defaultTone: Record<TextVariant, TextTone> = {
  lead: 'secondary',
  body: 'secondary',
  small: 'tertiary',
  caption: 'tertiary',
  mono: 'inherit',
  stat: 'inherit',
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ variant = 'body', tone, as: Component = 'p', className = '', children, ...rest }, ref) => (
    <Component
      ref={ref}
      className={cx('pom-text', `pom-text--${variant}`, `pom-text--tone-${tone ?? defaultTone[variant]}`, className)}
      {...rest}
    >
      {children}
    </Component>
  )
)
Text.displayName = 'Text'

export interface LabelTextProps extends React.HTMLAttributes<HTMLElement> {
  /** md: 11px medium (section kickers); sm: 10.5px regular (field and group labels). */
  size?: LabelSize
  tone?: TextTone
  as?: React.ElementType
}

/** Monospace uppercase label — section kickers, eyebrows, field captions. */
export const Eyebrow = React.forwardRef<HTMLElement, LabelTextProps>(
  ({ size = 'md', tone = 'tertiary', as: Component = 'span', className = '', children, ...rest }, ref) => (
    <Component
      ref={ref}
      className={cx('pom-text', size === 'md' ? 'pom-text--label' : 'pom-text--label-sm', `pom-text--tone-${tone}`, className)}
      {...rest}
    >
      {children}
    </Component>
  )
)
Eyebrow.displayName = 'Eyebrow'
