import React from 'react'
import { describe, it, expect, vi, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from '../Modal'

// jsdom doesn't implement showModal/close on <dialog>
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
    this.setAttribute('open', '')
  })
  HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
    this.removeAttribute('open')
    this.dispatchEvent(new Event('close'))
  })
})

const Wrapper = ({ open = true, onClose = vi.fn(), ...props }: Partial<React.ComponentProps<typeof Modal>>) => (
  <Modal open={open} onClose={onClose} {...props}>
    <p>Modal body</p>
  </Modal>
)

describe('Modal', () => {
  it('renders children when open', () => {
    render(<Wrapper />)
    expect(screen.getByText('Modal body')).toBeInTheDocument()
  })

  it('renders title when provided', () => {
    render(<Wrapper title="Confirm action" />)
    expect(screen.getByText('Confirm action')).toBeInTheDocument()
  })

  it('has aria-modal attribute', () => {
    render(<Wrapper />)
    expect(screen.getByRole('dialog', { hidden: true })).toHaveAttribute('aria-modal', 'true')
  })

  it('labels dialog with title id when title provided', () => {
    render(<Wrapper title="My title" />)
    const dialog = screen.getByRole('dialog', { hidden: true })
    const labelId = dialog.getAttribute('aria-labelledby')
    expect(labelId).toBeTruthy()
    expect(document.getElementById(labelId!)).toHaveTextContent('My title')
  })

  it('calls onClose when close button clicked', async () => {
    const onClose = vi.fn()
    render(<Wrapper onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('applies size class', () => {
    render(<Wrapper size="lg" />)
    expect(document.querySelector('.pom-modal--lg')).toBeInTheDocument()
  })

  it('renders footer when provided', () => {
    render(<Wrapper footer={<button>Confirm</button>} />)
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
  })
})
