import React from 'react'

export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface PopoverProps {
  trigger: React.ReactNode
  placement?: PopoverPlacement
  children: React.ReactNode
  className?: string
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  placement = 'bottom',
  children,
  className = '',
}) => {
  const [open, setOpen] = React.useState(false)
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const id = React.useId()

  return (
    <div
      ref={wrapperRef}
      className={['cp-popover-host', `cp-popover-host--${placement}`, className]
        .filter(Boolean)
        .join(' ')}
      style={{ position: 'relative', display: 'inline-flex' }}
    >
      <div
        className="cp-popover-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={id}
      >
        {trigger}
      </div>

      {open && (
        <div
          id={id}
          role="dialog"
          className={['cp-popover', `cp-popover--${placement}`].join(' ')}
        >
          {children}
        </div>
      )}
    </div>
  )
}
