import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Accordion } from '../Accordion'

const items = [
  { title: 'What do you build?', content: 'Web products.' },
  { title: 'How long?', content: 'Twelve weeks.' },
  { id: 'price', title: 'Pricing?', content: 'Fixed per stage.' },
]

const trigger = (name: RegExp) => screen.getByRole('button', { name })

describe('Accordion', () => {
  it('renders collapsed triggers wired to their panels', () => {
    render(<Accordion items={items} />)
    const t = trigger(/What do you build/)
    expect(t).toHaveAttribute('aria-expanded', 'false')
    const panel = document.getElementById(t.getAttribute('aria-controls')!)!
    expect(panel).toHaveAttribute('role', 'region')
    expect(panel).toHaveAttribute('aria-labelledby', t.id)
    expect(panel).toHaveAttribute('aria-hidden', 'true')
  })

  it('opens one item at a time by default', async () => {
    render(<Accordion items={items} />)
    await userEvent.click(trigger(/What do you build/))
    expect(trigger(/What do you build/)).toHaveAttribute('aria-expanded', 'true')
    await userEvent.click(trigger(/How long/))
    expect(trigger(/What do you build/)).toHaveAttribute('aria-expanded', 'false')
    expect(trigger(/How long/)).toHaveAttribute('aria-expanded', 'true')
  })

  it('second click closes the open item', async () => {
    render(<Accordion items={items} />)
    await userEvent.click(trigger(/How long/))
    await userEvent.click(trigger(/How long/))
    expect(trigger(/How long/)).toHaveAttribute('aria-expanded', 'false')
  })

  it('multiple keeps several open', async () => {
    render(<Accordion items={items} multiple />)
    await userEvent.click(trigger(/What do you build/))
    await userEvent.click(trigger(/How long/))
    expect(trigger(/What do you build/)).toHaveAttribute('aria-expanded', 'true')
    expect(trigger(/How long/)).toHaveAttribute('aria-expanded', 'true')
  })

  it('respects defaultOpen and custom ids', () => {
    render(<Accordion items={items} defaultOpen={['price']} />)
    expect(trigger(/Pricing/)).toHaveAttribute('aria-expanded', 'true')
  })

  it('can be controlled', async () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(<Accordion items={items} open={[]} onOpenChange={onOpenChange} />)
    await userEvent.click(trigger(/How long/))
    expect(onOpenChange).toHaveBeenCalledWith(['1'])
    expect(trigger(/How long/)).toHaveAttribute('aria-expanded', 'false')
    rerender(<Accordion items={items} open={['1']} onOpenChange={onOpenChange} />)
    expect(trigger(/How long/)).toHaveAttribute('aria-expanded', 'true')
  })

  it('reports toggles with id, state and index', async () => {
    const onToggle = vi.fn()
    render(<Accordion items={items} onToggle={onToggle} />)
    await userEvent.click(trigger(/Pricing/))
    await userEvent.click(trigger(/Pricing/))
    expect(onToggle.mock.calls).toEqual([['price', true, 2], ['price', false, 2]])
  })

  it('numbers items and wraps triggers in the chosen heading level', () => {
    render(<Accordion items={items} numbered headingLevel={2} icon="plus" />)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(trigger(/How long/)).toHaveTextContent('02')
    expect(document.querySelector('.pom-accordion--numbered')).toBeInTheDocument()
    expect(document.querySelectorAll('.pom-accordion__icon--plus')).toHaveLength(3)
  })

  it('arrow keys, Home and End move focus between triggers', async () => {
    render(<Accordion items={items} />)
    trigger(/What do you build/).focus()
    await userEvent.keyboard('{ArrowDown}')
    expect(trigger(/How long/)).toHaveFocus()
    await userEvent.keyboard('{End}')
    expect(trigger(/Pricing/)).toHaveFocus()
    await userEvent.keyboard('{ArrowDown}')
    expect(trigger(/Pricing/)).toHaveFocus()
    await userEvent.keyboard('{Home}')
    expect(trigger(/What do you build/)).toHaveFocus()
    await userEvent.keyboard('{ArrowUp}')
    expect(trigger(/What do you build/)).toHaveFocus()
  })
})
