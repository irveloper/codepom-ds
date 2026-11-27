import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Chip, ChipGroup } from '../Chip'

const options = [
  { value: 'small', label: '$5k–15k' },
  { value: 'mid', label: '$15k–40k' },
  { value: 'big', label: '$40k+', disabled: true },
  { value: 'huge', label: '$250k+' },
]

describe('Chip', () => {
  it('is a toggle button reflecting selection', () => {
    render(<Chip selected>React</Chip>)
    const chip = screen.getByRole('button', { name: 'React' })
    expect(chip).toHaveAttribute('aria-pressed', 'true')
    expect(chip).toHaveAttribute('type', 'button')
    expect(chip).toHaveClass('pom-chip', 'pom-chip--md', 'pom-chip--selected')
  })
})

describe('ChipGroup (single)', () => {
  function Controlled({ onChange = () => {} }: { onChange?: (v: string) => void }) {
    const [value, setValue] = React.useState<string | null>(null)
    return (
      <ChipGroup
        label="Budget"
        options={options}
        value={value}
        onChange={(v) => {
          setValue(v)
          onChange(v)
        }}
      />
    )
  }

  it('is a labelled radiogroup of radios', () => {
    render(<Controlled />)
    expect(screen.getByRole('radiogroup', { name: 'Budget' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(4)
  })

  it('click selects one option', async () => {
    const onChange = vi.fn()
    render(<Controlled onChange={onChange} />)
    await userEvent.click(screen.getByRole('radio', { name: '$15k–40k' }))
    expect(onChange).toHaveBeenCalledWith('mid')
    expect(screen.getByRole('radio', { name: '$15k–40k' })).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByRole('radio', { name: '$5k–15k' })).toHaveAttribute('aria-checked', 'false')
  })

  it('has one tab stop: first enabled when empty, else the selected chip', async () => {
    render(<Controlled />)
    const radios = screen.getAllByRole('radio')
    expect(radios.map((r) => r.getAttribute('tabindex'))).toEqual(['0', '-1', '-1', '-1'])
    await userEvent.click(radios[3])
    expect(radios.map((r) => r.getAttribute('tabindex'))).toEqual(['-1', '-1', '-1', '0'])
  })

  it('arrow keys move and select, skipping disabled and wrapping', async () => {
    render(<Controlled />)
    const [small, mid, big, huge] = screen.getAllByRole('radio')
    small.focus()
    await userEvent.keyboard('{ArrowRight}')
    expect(mid).toHaveFocus()
    expect(mid).toHaveAttribute('aria-checked', 'true')
    await userEvent.keyboard('{ArrowRight}')
    expect(huge).toHaveFocus()
    expect(big).toHaveAttribute('aria-checked', 'false')
    await userEvent.keyboard('{ArrowRight}')
    expect(small).toHaveFocus()
    await userEvent.keyboard('{ArrowLeft}')
    expect(huge).toHaveFocus()
  })

  it('marks the group invalid', () => {
    render(<ChipGroup label="Stage" options={options} value={null} onChange={() => {}} invalid />)
    expect(screen.getByRole('radiogroup')).toHaveAttribute('aria-invalid', 'true')
  })
})

describe('ChipGroup (multiple)', () => {
  it('toggles values in and out', async () => {
    const onChange = vi.fn()
    const { rerender } = render(
      <ChipGroup multiple label="Stack" options={options} value={['small']} onChange={onChange} />
    )
    expect(screen.getByRole('group', { name: 'Stack' })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: '$15k–40k' }))
    expect(onChange).toHaveBeenLastCalledWith(['small', 'mid'])
    rerender(<ChipGroup multiple label="Stack" options={options} value={['small', 'mid']} onChange={onChange} />)
    expect(screen.getByRole('button', { name: '$15k–40k' })).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(screen.getByRole('button', { name: '$5k–15k' }))
    expect(onChange).toHaveBeenLastCalledWith(['mid'])
  })
})
