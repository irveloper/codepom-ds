import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastProvider, useToast } from '../Toast'

const Trigger = ({ message = 'Hello toast', duration = 0 }: { message?: string; duration?: number }) => {
  const { show } = useToast()
  return <button onClick={() => show({ message, duration })}>Show</button>
}

const setup = (triggerProps = {}) => {
  render(
    <ToastProvider>
      <Trigger {...triggerProps} />
    </ToastProvider>
  )
  return screen.getByRole('button', { name: 'Show' })
}

describe('Toast', () => {
  it('renders ToastProvider without crashing', () => {
    render(<ToastProvider><div>child</div></ToastProvider>)
    expect(screen.getByText('child')).toBeInTheDocument()
  })

  it('shows toast on trigger', async () => {
    const btn = setup()
    await userEvent.click(btn)
    expect(screen.getByText('Hello toast')).toBeInTheDocument()
  })

  it('renders notification region with correct aria attrs', () => {
    render(<ToastProvider><div /></ToastProvider>)
    const region = screen.getByRole('region', { name: /notifications/i })
    expect(region).toHaveAttribute('aria-live', 'polite')
  })

  it('shows multiple toasts', async () => {
    render(
      <ToastProvider>
        <Trigger message="First" />
        <Trigger message="Second" />
      </ToastProvider>
    )
    const [first, second] = screen.getAllByRole('button', { name: 'Show' })
    await userEvent.click(first)
    await userEvent.click(second)
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })

  it('auto-dismisses after duration', () => {
    vi.useFakeTimers()
    const btn = setup({ duration: 1000 })
    act(() => { fireEvent.click(btn) })
    expect(screen.getByText('Hello toast')).toBeInTheDocument()
    act(() => { vi.advanceTimersByTime(1100) })
    expect(screen.queryByText('Hello toast')).not.toBeInTheDocument()
    vi.useRealTimers()
  })

  it('useToast throws outside provider', () => {
    const Bad = () => { useToast(); return null }
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    // React 18 rethrows synchronously when no error boundary is present
    expect(() => {
      act(() => { render(<Bad />) })
    }).toThrow('useToast must be used within ToastProvider')
    spy.mockRestore()
  })
})
