import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Skeleton, SkeletonText, SkeletonCard } from '../Skeleton'

describe('Skeleton', () => {
  it('renders single skeleton span', () => {
    const { container } = render(<Skeleton />)
    expect(container.querySelector('.cp-skeleton')).toBeInTheDocument()
  })

  it('applies pulse class', () => {
    const { container } = render(<Skeleton />)
    expect(container.querySelector('.cp-skeleton--pulse')).toBeInTheDocument()
  })

  it('applies rounded border-radius when rounded prop set', () => {
    const { container } = render(<Skeleton rounded />)
    const el = container.querySelector('.cp-skeleton') as HTMLElement
    expect(el.style.borderRadius).toBe('9999px')
  })

  it('applies square border-radius by default', () => {
    const { container } = render(<Skeleton />)
    const el = container.querySelector('.cp-skeleton') as HTMLElement
    expect(el.style.borderRadius).toBe('4px')
  })

  it('renders multiple lines when lines > 1', () => {
    const { container } = render(<Skeleton lines={3} />)
    expect(container.querySelectorAll('.cp-skeleton')).toHaveLength(3)
    expect(container.querySelector('.cp-skeleton-lines')).toBeInTheDocument()
  })

  it('last line is narrower in multi-line mode', () => {
    const { container } = render(<Skeleton lines={3} />)
    const spans = container.querySelectorAll<HTMLElement>('.cp-skeleton')
    expect(spans[2].style.width).toBe('65%')
  })

  it('applies custom width and height', () => {
    const { container } = render(<Skeleton width={120} height={24} />)
    const el = container.querySelector<HTMLElement>('.cp-skeleton')!
    expect(el.style.width).toBe('120px')
    expect(el.style.height).toBe('24px')
  })
})

describe('SkeletonText', () => {
  it('renders correct number of lines', () => {
    const { container } = render(<SkeletonText lines={4} />)
    expect(container.querySelectorAll('.cp-skeleton')).toHaveLength(4)
  })

  it('last line is narrower', () => {
    const { container } = render(<SkeletonText lines={3} />)
    const spans = container.querySelectorAll<HTMLElement>('.cp-skeleton')
    expect(spans[2].style.width).toBe('60%')
  })
})

describe('SkeletonCard', () => {
  it('renders without crashing', () => {
    const { container } = render(<SkeletonCard />)
    expect(container.querySelector('.cp-skeleton-card')).toBeInTheDocument()
  })

  it('contains multiple skeleton elements', () => {
    const { container } = render(<SkeletonCard />)
    expect(container.querySelectorAll('.cp-skeleton').length).toBeGreaterThan(3)
  })
})
