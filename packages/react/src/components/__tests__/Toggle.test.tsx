import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle } from '../Toggle'

describe('Toggle', () => {
  it('renders checkbox input', () => {
    render(<Toggle />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('renders label text', () => {
    render(<Toggle label="Dark mode" />)
    expect(screen.getByText('Dark mode')).toBeInTheDocument()
  })

  it('renders hint text', () => {
    render(<Toggle label="Notifications" hint="Receive email alerts" />)
    expect(screen.getByText('Receive email alerts')).toBeInTheDocument()
  })

  it('is checked when checked prop true', () => {
    render(<Toggle checked onChange={vi.fn()} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('is disabled when disabled prop set', () => {
    render(<Toggle disabled />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('calls onChange with new value', async () => {
    const onChange = vi.fn()
    render(<Toggle onChange={onChange} />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('uses defaultChecked for uncontrolled mode', () => {
    render(<Toggle defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
