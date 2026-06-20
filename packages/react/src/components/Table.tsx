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
    'cp-table',
    striped ? 'cp-table--striped' : '',
    hoverable ? 'cp-table--hoverable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const skeletonRows = Array.from({ length: 5 })

  return (
    <div className="cp-table-wrapper">
      <table className={classes}>
        <thead className="cp-table__head">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="cp-table__th"
                style={col.width != null ? { width: col.width } : undefined}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="cp-table__body">
          {loading
            ? skeletonRows.map((_, i) => (
                <tr key={i} className="cp-table__row">
                  {columns.map((col) => (
                    <td key={col.key} className="cp-table__td">
                      <span className="cp-skeleton cp-skeleton--pulse" style={{ display: 'block', height: 16, borderRadius: 4 }} />
                    </td>
                  ))}
                </tr>
              ))
            : rows.map((row, i) => (
                <tr key={i} className="cp-table__row">
                  {columns.map((col) => (
                    <td key={col.key} className="cp-table__td">
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
