import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from '../Pagination'

const setup = (props: Partial<React.ComponentProps<typeof Pagination>> = {}) => {
  const onChange = vi.fn()
  render(<Pagination total={100} page={1} perPage={10} onChange={onChange} {...props} />)
  return onChange
}

describe('Pagination', () => {
  it('renders pagination nav', () => {
    setup()
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    setup()
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument()
  })

  it('prev button disabled on first page', () => {
    setup({ page: 1 })
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
  })

  it('next button disabled on last page', () => {
    setup({ total: 30, page: 3, perPage: 10 })
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
  })

  it('current page has aria-current=page', () => {
    setup({ page: 2 })
    expect(screen.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page')
  })

  it('calls onChange with prev page when prev clicked', async () => {
    const onChange = setup({ page: 3 })
    await userEvent.click(screen.getByRole('button', { name: 'Previous page' }))
    expect(onChange).toHaveBeenCalledWith(2)
  })

  it('calls onChange with next page when next clicked', async () => {
    const onChange = setup({ page: 2 })
    await userEvent.click(screen.getByRole('button', { name: 'Next page' }))
    expect(onChange).toHaveBeenCalledWith(3)
  })

  it('calls onChange with page number when page button clicked', async () => {
    const onChange = setup({ page: 1 })
    await userEvent.click(screen.getByRole('button', { name: 'Page 3' }))
    expect(onChange).toHaveBeenCalledWith(3)
  })

  it('renders all pages without ellipsis when total pages <= 7', () => {
    setup({ total: 50, page: 1, perPage: 10 })
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByRole('button', { name: `Page ${i}` })).toBeInTheDocument()
    }
    expect(document.querySelectorAll('.cp-pagination__ellipsis')).toHaveLength(0)
  })

  it('shows ellipsis for large page counts', () => {
    setup({ total: 200, page: 5, perPage: 10 })
    expect(document.querySelectorAll('.cp-pagination__ellipsis').length).toBeGreaterThan(0)
  })
})
