import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Alert } from '../Alert'

describe('Alert', () => {
  it('renders children with role alert', () => {
    render(<Alert>Something happened</Alert>)
    expect(screen.getByRole('alert')).toHaveTextContent('Something happened')
  })

  it.each(['info', 'success', 'warning', 'error'] as const)('applies %s variant class', (variant) => {
    render(<Alert variant={variant}>msg</Alert>)
    expect(screen.getByRole('alert')).toHaveClass(`cp-alert--${variant}`)
  })

  it('renders title when provided', () => {
    render(<Alert title="Heads up">details</Alert>)
    expect(screen.getByText('Heads up')).toBeInTheDocument()
  })

  it('shows dismiss button when dismissible', () => {
    render(<Alert dismissible>msg</Alert>)
    expect(screen.getByRole('button', { name: /dismiss/i })).toBeInTheDocument()
  })

  it('hides after clicking dismiss', async () => {
    render(<Alert dismissible>msg</Alert>)
    await userEvent.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('calls onDismiss callback when dismissed', async () => {
    const onDismiss = vi.fn()
    render(<Alert dismissible onDismiss={onDismiss}>msg</Alert>)
    await userEvent.click(screen.getByRole('button', { name: /dismiss/i }))
    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('does not render dismiss button when not dismissible', () => {
    render(<Alert>msg</Alert>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
