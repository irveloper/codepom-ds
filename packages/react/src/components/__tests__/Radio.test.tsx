import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Radio } from '../Radio'

describe('Radio', () => {
  it('renders radio input', () => {
    render(<Radio />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('renders label text', () => {
    render(<Radio label="Option A" />)
    expect(screen.getByText('Option A')).toBeInTheDocument()
  })

  it('is checked when checked prop true', () => {
    render(<Radio checked onChange={vi.fn()} />)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  it('is disabled when disabled prop set', () => {
    render(<Radio disabled />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  it('calls onChange with value on change', async () => {
    const onChange = vi.fn()
    render(<Radio value="a" onChange={onChange} />)
    await userEvent.click(screen.getByRole('radio'))
    expect(onChange).toHaveBeenCalledWith('a')
  })

  it('groups by name attribute', () => {
    render(
      <>
        <Radio name="group" value="a" label="A" />
        <Radio name="group" value="b" label="B" />
      </>
    )
    const radios = screen.getAllByRole('radio')
    expect(radios[0]).toHaveAttribute('name', 'group')
    expect(radios[1]).toHaveAttribute('name', 'group')
  })

  it('uses defaultChecked for uncontrolled mode', () => {
    render(<Radio defaultChecked />)
    expect(screen.getByRole('radio')).toBeChecked()
  })
})
