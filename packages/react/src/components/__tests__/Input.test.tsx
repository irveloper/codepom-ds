import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input, Textarea, Select, Field, Label } from '../Input'

describe('Input', () => {
  it('renders input element', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('applies error class and aria-invalid when error', () => {
    render(<Input error aria-label="field" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('pom-input--error')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('applies size class', () => {
    render(<Input inputSize="lg" aria-label="field" />)
    expect(screen.getByRole('textbox')).toHaveClass('pom-input--lg')
  })

  it('is disabled when disabled prop set', () => {
    render(<Input disabled aria-label="field" />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} aria-label="field" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('accepts user input', async () => {
    render(<Input aria-label="field" />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })
})

describe('Textarea', () => {
  it('renders textarea', () => {
    render(<Textarea aria-label="notes" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('applies error class and aria-invalid', () => {
    render(<Textarea error aria-label="notes" />)
    const el = screen.getByRole('textbox')
    expect(el).toHaveClass('pom-textarea--error')
    expect(el).toHaveAttribute('aria-invalid', 'true')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(<Textarea ref={ref} aria-label="notes" />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})

describe('Select', () => {
  it('renders select with options', () => {
    render(
      <Select aria-label="pick one">
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </Select>
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Option A')).toBeInTheDocument()
  })

  it('applies error class and aria-invalid', () => {
    render(<Select error aria-label="pick one"><option>x</option></Select>)
    expect(screen.getByRole('combobox')).toHaveClass('pom-select--error')
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLSelectElement>()
    render(<Select ref={ref} aria-label="pick"><option>x</option></Select>)
    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })
})

describe('Field', () => {
  it('renders label and children', () => {
    render(
      <Field label="Email" htmlFor="email">
        <Input id="email" />
      </Field>
    )
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('shows hint text', () => {
    render(
      <Field label="Name" hint="Your full name">
        <Input aria-label="Name" />
      </Field>
    )
    expect(screen.getByText('Your full name')).toBeInTheDocument()
  })

  it('shows error message with role alert and hides hint', () => {
    render(
      <Field label="Name" hint="hint" error="Required field">
        <Input aria-label="Name" />
      </Field>
    )
    expect(screen.getByRole('alert')).toHaveTextContent('Required field')
    expect(screen.queryByText('hint')).not.toBeInTheDocument()
  })

  it('marks label required when required prop set', () => {
    render(
      <Field label="Email" required>
        <Input aria-label="Email" />
      </Field>
    )
    expect(screen.getByText('Email').closest('label')).toBeInTheDocument()
  })
})

describe('Label', () => {
  it('renders label text', () => {
    render(<Label>Username</Label>)
    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('shows required marker when required', () => {
    render(<Label required>Email</Label>)
    expect(screen.getByText(/\*/)).toBeInTheDocument()
  })
})
