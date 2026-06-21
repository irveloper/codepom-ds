import React from 'react'

export function renderHTML(html: string): React.ReactElement {
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: html } })
}
