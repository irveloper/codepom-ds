import React from 'react'
import { Icon } from './Icon'

export interface AccordionItem {
  /** Stable id; defaults to the item's index. */
  id?: string
  title: React.ReactNode
  content: React.ReactNode
}

export type AccordionIcon = 'chevron' | 'plus'

export interface AccordionProps {
  items: AccordionItem[]
  /** Allow several items open at once. Default: one at a time. */
  multiple?: boolean
  /** Ids open on first render (uncontrolled). */
  defaultOpen?: string[]
  /** Controlled open ids. */
  open?: string[]
  onOpenChange?: (open: string[]) => void
  /** Fires when one item is toggled — handy for analytics. */
  onToggle?: (id: string, isOpen: boolean, index: number) => void
  /** Prefix each title with a zero-padded number (01, 02, …). */
  numbered?: boolean
  icon?: AccordionIcon
  /** Heading level wrapping each trigger, for document outline. */
  headingLevel?: 2 | 3 | 4 | 5 | 6
  className?: string
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

export const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  defaultOpen = [],
  open: openProp,
  onOpenChange,
  onToggle,
  numbered = false,
  icon = 'chevron',
  headingLevel = 3,
  className = '',
}) => {
  const uid = React.useId()
  const [openState, setOpenState] = React.useState<string[]>(defaultOpen)
  const open = openProp ?? openState
  const triggers = React.useRef<(HTMLButtonElement | null)[]>([])
  const Heading = `h${headingLevel}` as 'h3'

  const idOf = (item: AccordionItem, i: number) => item.id ?? String(i)

  const toggle = (id: string, index: number) => {
    const isOpen = open.includes(id)
    const next = isOpen ? open.filter((o) => o !== id) : multiple ? [...open, id] : [id]
    if (openProp === undefined) setOpenState(next)
    onOpenChange?.(next)
    onToggle?.(id, !isOpen, index)
  }

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = items.length - 1
    const target =
      e.key === 'ArrowDown' ? Math.min(index + 1, last)
      : e.key === 'ArrowUp' ? Math.max(index - 1, 0)
      : e.key === 'Home' ? 0
      : e.key === 'End' ? last
      : null
    if (target === null) return
    e.preventDefault()
    triggers.current[target]?.focus()
  }

  return (
    <div className={cx('pom-accordion', numbered && 'pom-accordion--numbered', className)}>
      {items.map((item, i) => {
        const id = idOf(item, i)
        const isOpen = open.includes(id)
        const triggerId = `${uid}-trigger-${i}`
        const panelId = `${uid}-panel-${i}`
        return (
          <div key={id} className={cx('pom-accordion__item', isOpen && 'pom-accordion__item--open')}>
            <Heading className="pom-accordion__heading">
              <button
                ref={(el) => {
                  triggers.current[i] = el
                }}
                type="button"
                id={triggerId}
                className="pom-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(id, i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {numbered && (
                  <span className="pom-accordion__number">{String(i + 1).padStart(2, '0')}</span>
                )}
                <span className="pom-accordion__title">{item.title}</span>
                <span className={`pom-accordion__icon pom-accordion__icon--${icon}`} aria-hidden="true">
                  <Icon name={icon === 'plus' ? 'plus' : 'chevron-down'} size={icon === 'plus' ? 18 : 16} />
                </span>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className="pom-accordion__panel"
            >
              <div className="pom-accordion__content">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
