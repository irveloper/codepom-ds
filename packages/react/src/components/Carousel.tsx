import React from 'react'

export interface CarouselProps {
  children: React.ReactNode
  /** Accessible name for the carousel region, e.g. "Process stages". */
  label: string
  /**
   * When to show prev/next buttons and dots. `auto` (default) shows them only while the
   * slides overflow the track, so a layout that fits every slide shows none.
   */
  controls?: 'auto' | 'always' | 'never'
  prevLabel?: string
  nextLabel?: string
  slideLabel?: (index: number, total: number) => string
  dotLabel?: (index: number, total: number) => string
  onSlideChange?: (index: number) => void
  className?: string
  slideClassName?: string
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

const Arrow = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d={dir === 'prev' ? 'M12 4L6 10L12 16' : 'M8 4L14 10L8 16'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/** A horizontal scroll-snap carousel. Slides are its children; size them with CSS variables. */
export const Carousel: React.FC<CarouselProps> = ({
  children,
  label,
  controls = 'auto',
  prevLabel = 'Previous slide',
  nextLabel = 'Next slide',
  slideLabel = (i, total) => `${i + 1} of ${total}`,
  dotLabel = (i) => `Go to slide ${i + 1}`,
  onSlideChange,
  className = '',
  slideClassName = '',
}) => {
  const slides = React.Children.toArray(children)
  const total = slides.length
  const trackRef = React.useRef<HTMLDivElement>(null)
  const indexRef = React.useRef(0)
  const [current, setCurrent] = React.useState(0)
  const [overflowing, setOverflowing] = React.useState(false)

  const setIndex = React.useCallback(
    (i: number) => {
      if (i === indexRef.current) return
      indexRef.current = i
      setCurrent(i)
      onSlideChange?.(i)
    },
    [onSlideChange]
  )

  // Track whether slides overflow; controls only make sense when they do.
  React.useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => setOverflowing(track.scrollWidth > track.clientWidth + 1)
    measure()
    if (typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    return () => ro.disconnect()
  }, [total])

  const goTo = React.useCallback(
    (i: number) => {
      const index = Math.max(0, Math.min(total - 1, i))
      const track = trackRef.current
      const slide = track?.children[index] as HTMLElement | undefined
      if (track && slide) {
        const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
        track.scrollTo?.({ left: slide.offsetLeft, behavior: reduce ? 'auto' : 'smooth' })
      }
      setIndex(index)
    },
    [total, setIndex]
  )

  // The slide whose centre is nearest the track's centre is the current one.
  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const centre = track.scrollLeft + track.clientWidth / 2
    let closest = 0
    let best = Number.POSITIVE_INFINITY
    Array.from(track.children).forEach((el, i) => {
      const s = el as HTMLElement
      const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - centre)
      if (d < best) {
        best = d
        closest = i
      }
    })
    setIndex(closest)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(indexRef.current + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(indexRef.current - 1)
    }
  }

  const showControls = controls === 'always' || (controls === 'auto' && overflowing)

  return (
    <section
      className={cx('pom-carousel', showControls && 'pom-carousel--controls', className)}
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="pom-carousel__viewport">
        {showControls && (
          <button
            type="button"
            className="pom-carousel__control pom-carousel__control--prev"
            aria-label={prevLabel}
            disabled={current === 0}
            onClick={() => goTo(indexRef.current - 1)}
          >
            <Arrow dir="prev" />
          </button>
        )}
        <div
          ref={trackRef}
          className="pom-carousel__track"
          // Focusable so keyboard users can scroll it; arrow keys move between slides.
          tabIndex={0}
          onScroll={onScroll}
          onKeyDown={onKeyDown}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={cx('pom-carousel__slide', slideClassName)}
              role="group"
              aria-roledescription="slide"
              aria-label={slideLabel(i, total)}
            >
              {slide}
            </div>
          ))}
        </div>
        {showControls && (
          <button
            type="button"
            className="pom-carousel__control pom-carousel__control--next"
            aria-label={nextLabel}
            disabled={current === total - 1}
            onClick={() => goTo(indexRef.current + 1)}
          >
            <Arrow dir="next" />
          </button>
        )}
      </div>
      {showControls && total > 1 && (
        <div className="pom-carousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={cx('pom-carousel__dot', i === current && 'pom-carousel__dot--active')}
              aria-label={dotLabel(i, total)}
              aria-current={i === current ? 'true' : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </section>
  )
}
