import React from 'react'

export interface SkeletonProps {
  width?: string | number
  height?: string | number
  rounded?: boolean
  lines?: number
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height = 16,
  rounded = false,
  lines,
  className = '',
}) => {
  if (lines != null && lines > 1) {
    return (
      <div className={`cp-skeleton-lines ${className}`.trim()}>
        {Array.from({ length: lines }).map((_, i) => (
          <span
            key={i}
            className="cp-skeleton cp-skeleton--pulse"
            style={{
              display: 'block',
              width: i === lines - 1 ? '65%' : width ?? '100%',
              height,
              borderRadius: rounded ? 9999 : 4,
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <span
      className={['cp-skeleton', 'cp-skeleton--pulse', className].filter(Boolean).join(' ')}
      style={{
        display: 'block',
        width: width ?? '100%',
        height,
        borderRadius: rounded ? 9999 : 4,
      }}
    />
  )
}

export interface SkeletonTextProps {
  lines?: number
  className?: string
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({ lines = 3, className = '' }) => (
  <div className={`cp-skeleton-lines ${className}`.trim()} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    {Array.from({ length: lines }).map((_, i) => (
      <span
        key={i}
        className="cp-skeleton cp-skeleton--pulse"
        style={{
          display: 'block',
          width: i === lines - 1 ? '60%' : '100%',
          height: 14,
          borderRadius: 4,
        }}
      />
    ))}
  </div>
)

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`cp-skeleton-card ${className}`.trim()}
    style={{
      background: 'var(--cp-card)',
      border: '1px solid var(--cp-border)',
      borderRadius: 12,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span
        className="cp-skeleton cp-skeleton--pulse"
        style={{ display: 'block', width: 40, height: 40, borderRadius: 9999, flexShrink: 0 }}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span
          className="cp-skeleton cp-skeleton--pulse"
          style={{ display: 'block', width: '60%', height: 14, borderRadius: 4 }}
        />
        <span
          className="cp-skeleton cp-skeleton--pulse"
          style={{ display: 'block', width: '40%', height: 12, borderRadius: 4 }}
        />
      </div>
    </div>
    <SkeletonText lines={3} />
    <div style={{ display: 'flex', gap: 8 }}>
      <span
        className="cp-skeleton cp-skeleton--pulse"
        style={{ display: 'block', width: 80, height: 32, borderRadius: 6 }}
      />
      <span
        className="cp-skeleton cp-skeleton--pulse"
        style={{ display: 'block', width: 80, height: 32, borderRadius: 6 }}
      />
    </div>
  </div>
)
