import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from '../Avatar'

describe('Avatar', () => {
  it('renders with role img', () => {
    render(<Avatar name="Maya Chen" />)
    expect(screen.getByRole('img', { name: 'Maya Chen' })).toBeInTheDocument()
  })

  it('shows img tag when src provided', () => {
    render(<Avatar src="/photo.jpg" alt="Maya" />)
    expect(document.querySelector('img')).toHaveAttribute('src', '/photo.jpg')
  })

  it('derives initials from name', () => {
    render(<Avatar name="Maya Chen" />)
    expect(screen.getByText('MC')).toBeInTheDocument()
  })

  it('uses provided initials over name', () => {
    render(<Avatar name="Maya Chen" initials="XX" />)
    expect(screen.getByText('XX')).toBeInTheDocument()
  })

  it('falls back to ? when no name or initials', () => {
    render(<Avatar />)
    expect(screen.getByText('?')).toBeInTheDocument()
  })

  it.each(['xs', 'sm', 'md', 'lg', 'xl'] as const)('applies %s size class', (size) => {
    render(<Avatar name="A" size={size} />)
    expect(screen.getByRole('img')).toHaveClass(`pom-avatar--${size}`)
  })

  it('renders status indicator when status is not none', () => {
    render(<Avatar name="A" status="online" />)
    expect(document.querySelector('.pom-avatar__status--online')).toBeInTheDocument()
  })

  it('does not render status when status is none', () => {
    render(<Avatar name="A" status="none" />)
    expect(document.querySelector('.pom-avatar__status')).not.toBeInTheDocument()
  })

  it('uses alt as aria-label when provided', () => {
    render(<Avatar alt="Custom label" />)
    expect(screen.getByRole('img', { name: 'Custom label' })).toBeInTheDocument()
  })
})
