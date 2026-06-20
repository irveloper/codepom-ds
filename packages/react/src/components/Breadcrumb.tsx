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
    <nav aria-label="Breadcrumb" className={`pom-breadcrumb ${className}`.trim()}>
      <ol className="pom-breadcrumb__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="pom-breadcrumb__item">
              {i > 0 && (
                <span className="pom-breadcrumb__sep" aria-hidden="true">
                  {sep}
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="pom-breadcrumb__current">
                  {item.label}
                </span>
              ) : (
                <a href={item.href ?? '#'} className="pom-breadcrumb__link">
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
