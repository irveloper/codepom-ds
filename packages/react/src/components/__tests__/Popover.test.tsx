import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popover } from '../Popover'

const setup = () =>
  render(
    <Popover trigger={<button>Open</button>}>
      <p>Popover content</p>
    </Popover>
  )

describe('Popover', () => {
  it('does not show content by default', () => {
    setup()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows content after trigger click', async () => {
    setup()
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('hides content on second trigger click', async () => {
    setup()
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes on Escape key', async () => {
    setup()
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes on outside click', async () => {
    render(
      <div>
        <Popover trigger={<button>Open</button>}>
          <p>Content</p>
        </Popover>
        <button>Outside</button>
      </div>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    await userEvent.click(screen.getByRole('button', { name: 'Outside' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('trigger has aria-expanded false when closed', () => {
    setup()
    expect(document.querySelector('.cp-popover-trigger')).toHaveAttribute('aria-expanded', 'false')
  })

  it('trigger has aria-expanded true when open', async () => {
    setup()
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(document.querySelector('.cp-popover-trigger')).toHaveAttribute('aria-expanded', 'true')
  })

  it.each(['top', 'bottom', 'left', 'right'] as const)('applies %s placement class', async (placement) => {
    render(
      <Popover trigger={<button>Open</button>} placement={placement}>
        <p>content</p>
      </Popover>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(document.querySelector(`.cp-popover--${placement}`)).toBeInTheDocument()
  })
})
