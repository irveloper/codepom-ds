import React from 'react'

export interface TableColumn {
  key: string
  label: string
  width?: string | number
}

export interface TableProps {
  columns: TableColumn[]
  rows: Record<string, React.ReactNode>[]
  striped?: boolean
  hoverable?: boolean
  loading?: boolean
  className?: string
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  striped = false,
  hoverable = false,
  loading = false,
  className = '',
}) => {
  const classes = [
    'pom-table',
    striped ? 'pom-table--striped' : '',
    hoverable ? 'pom-table--hoverable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const skeletonRows = Array.from({ length: 5 })

  return (
    <div className="pom-table-wrapper">
      <table className={classes}>
        <thead className="pom-table__head">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="pom-table__th"
                style={col.width != null ? { width: col.width } : undefined}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="pom-table__body">
          {loading
            ? skeletonRows.map((_, i) => (
                <tr key={i} className="pom-table__row">
                  {columns.map((col) => (
                    <td key={col.key} className="pom-table__td">
                      <span className="pom-skeleton pom-skeleton--pulse" style={{ display: 'block', height: 16, borderRadius: 4 }} />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((row, i) => (
                <tr key={i} className="pom-table__row">
                  {columns.map((col) => (
                    <td key={col.key} className="pom-table__td">
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}
