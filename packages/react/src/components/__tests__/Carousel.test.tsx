import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from '../Carousel'

const slides = ['Discover', 'Design', 'Build'].map((t) => <article key={t}>{t}</article>)

describe('Carousel', () => {
  it('is a labelled carousel region of labelled slides', () => {
    render(<Carousel label="Process stages">{slides}</Carousel>)
    const region = screen.getByRole('region', { name: 'Process stages' })
    expect(region).toHaveAttribute('aria-roledescription', 'carousel')
    const groups = screen.getAllByRole('group')
    expect(groups).toHaveLength(3)
    expect(groups[1]).toHaveAttribute('aria-label', '2 of 3')
    expect(groups[1]).toHaveAttribute('aria-roledescription', 'slide')
  })

  it('auto hides controls when slides fit (no overflow)', () => {
    render(<Carousel label="Stages">{slides}</Carousel>)
    expect(screen.queryByRole('button', { name: 'Next slide' })).not.toBeInTheDocument()
  })

  it('always shows controls; prev disabled at start, next moves and reports', async () => {
    const onSlideChange = vi.fn()
    render(
      <Carousel label="Stages" controls="always" onSlideChange={onSlideChange} nextLabel="Next stage">
        {slides}
      </Carousel>
    )
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeDisabled()
    await userEvent.click(screen.getByRole('button', { name: 'Next stage' }))
    expect(onSlideChange).toHaveBeenCalledWith(1)
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute('aria-current', 'true')
    await userEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Next stage' })).toBeDisabled()
  })

  it('arrow keys on the track move between slides', async () => {
    render(<Carousel label="Stages" controls="always">{slides}</Carousel>)
    const track = document.querySelector('.pom-carousel__track') as HTMLElement
    track.focus()
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}')
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute('aria-current', 'true')
    await userEvent.keyboard('{ArrowLeft}')
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute('aria-current', 'true')
  })

  it('never shows controls when asked not to', () => {
    render(<Carousel label="Stages" controls="never">{slides}</Carousel>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
