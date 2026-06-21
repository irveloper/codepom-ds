import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs } from '../Tabs'

const tabs = [
  { id: 'one', label: 'One', content: <p>Panel one</p> },
  { id: 'two', label: 'Two', content: <p>Panel two</p> },
  { id: 'three', label: 'Three', content: <p>Panel three</p>, disabled: true },
]

describe('Tabs', () => {
  it('renders all tab buttons', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByRole('tab', { name: 'One' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Two' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Three' })).toBeInTheDocument()
  })

  it('first tab active by default', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByRole('tab', { name: 'One' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-selected', 'false')
  })

  it('respects defaultTab prop', () => {
    render(<Tabs tabs={tabs} defaultTab="two" />)
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-selected', 'true')
  })

  it('shows correct panel content', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Panel one')).toBeInTheDocument()
  })

  it('switches panel on tab click', async () => {
    render(<Tabs tabs={tabs} />)
    await userEvent.click(screen.getByRole('tab', { name: 'Two' }))
    expect(screen.getByText('Panel two')).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-selected', 'true')
  })

  it('calls onChange with tab id when switched', async () => {
    const onChange = vi.fn()
    render(<Tabs tabs={tabs} onChange={onChange} />)
    await userEvent.click(screen.getByRole('tab', { name: 'Two' }))
    expect(onChange).toHaveBeenCalledWith('two')
  })

  it('disabled tab is not clickable', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByRole('tab', { name: 'Three' })).toBeDisabled()
  })

  it('navigates with ArrowRight key', async () => {
    render(<Tabs tabs={tabs} />)
    screen.getByRole('tab', { name: 'One' }).focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Two' })).toHaveAttribute('aria-selected', 'true')
  })

  it('navigates with ArrowLeft key', async () => {
    render(<Tabs tabs={tabs} defaultTab="two" />)
    screen.getByRole('tab', { name: 'Two' }).focus()
    await userEvent.keyboard('{ArrowLeft}')
    expect(screen.getByRole('tab', { name: 'One' })).toHaveAttribute('aria-selected', 'true')
  })

  it.each(['underline', 'pill', 'boxed'] as const)('applies %s variant class', (variant) => {
    render(<Tabs tabs={tabs} variant={variant} />)
    expect(document.querySelector(`.pom-tabs--${variant}`)).toBeInTheDocument()
  })
})
