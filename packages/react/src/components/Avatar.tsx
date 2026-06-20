import React from 'react'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarStatus = 'online' | 'away' | 'busy' | 'offline' | 'none'

export interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  name?: string
  size?: AvatarSize
  status?: AvatarStatus
  className?: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  name,
  size = 'md',
  status = 'none',
  className = '',
}) => {
  const displayInitials = initials ?? (name ? getInitials(name) : '?')
  const label = alt ?? name ?? 'Avatar'

  const classes = [
    'pom-avatar',
    `pom-avatar--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} role="img" aria-label={label}>
      {src ? (
        <img src={src} alt={label} className="pom-avatar__img" />
      ) : (
        <span className="pom-avatar__initials" aria-hidden="true">
          {displayInitials}
        </span>
      )}
      {status !== 'none' && (
        <span
          className={`pom-avatar__status pom-avatar__status--${status}`}
          aria-label={status}
        />
      )}
    </span>
  )
}
