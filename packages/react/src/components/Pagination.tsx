import React from 'react'

export interface PaginationProps {
  total: number
  page: number
  perPage?: number
  onChange: (page: number) => void
  className?: string
}

function buildPages(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 4) return [1, 2, 3, 4, 5, '…', total]
  if (current >= total - 3) return [1, '…', total - 4, total - 3, total - 2, total - 1, total]
  return [1, '…', current - 1, current, current + 1, '…', total]
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  page,
  perPage = 10,
  onChange,
  className = '',
}) => {
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const pages = buildPages(page, totalPages)

  return (
    <nav
      aria-label="Pagination"
      className={`pom-pagination ${className}`.trim()}
    >
      <button
        className="pom-pagination__btn pom-pagination__btn--prev"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="pom-pagination__ellipsis" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={p}
            className={[
              'pom-pagination__btn',
              p === page ? 'pom-pagination__btn--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onChange(p as number)}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`Page ${p}`}
          >
            {p}
          </button>
        )
      )}

      <button
        className="pom-pagination__btn pom-pagination__btn--next"
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  )
}
