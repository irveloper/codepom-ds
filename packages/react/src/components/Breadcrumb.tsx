import React from 'react'

export type BreadcrumbSeparator = 'chevron' | 'slash' | 'dot'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: BreadcrumbSeparator
  className?: string
}

const separatorChar: Record<BreadcrumbSeparator, string> = {
  chevron: '›',
  slash: '/',
  dot: '·',
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = 'chevron',
  className = '',
}) => {
  const sep = separatorChar[separator]

  return (
    <nav aria-label="Breadcrumb" className={`cp-breadcrumb ${className}`.trim()}>
      <ol className="cp-breadcrumb__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="cp-breadcrumb__item">
              {i > 0 && (
                <span className="cp-breadcrumb__sep" aria-hidden="true">
                  {sep}
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="cp-breadcrumb__current">
                  {item.label}
                </span>
              ) : (
                <a href={item.href ?? '#'} className="cp-breadcrumb__link">
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
