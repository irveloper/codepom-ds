import React from 'react'

export type ChipSize = 'sm' | 'md'

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  selected?: boolean
  size?: ChipSize
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

/** A compact toggle. Standalone it is a toggle button (`aria-pressed`). */
export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ selected = false, size = 'md', className = '', role, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      role={role}
      // Radios report state with aria-checked (set by ChipGroup); everything else is a toggle button.
      aria-pressed={role === 'radio' ? undefined : selected}
      className={cx('pom-chip', `pom-chip--${size}`, selected && 'pom-chip--selected', className)}
      {...props}
    >
      {children}
    </button>
  )
)

Chip.displayName = 'Chip'

export interface ChipOption<V extends string = string> {
  value: V
  label: React.ReactNode
  disabled?: boolean
}

interface ChipGroupBaseProps<V extends string> {
  options: ChipOption<V>[]
  size?: ChipSize
  /** Accessible name; or pass `aria-labelledby`. */
  label?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  /** Marks the group invalid (e.g. a required choice is missing). */
  invalid?: boolean
  className?: string
}

export interface ChipGroupSingleProps<V extends string = string> extends ChipGroupBaseProps<V> {
  multiple?: false
  value: V | null | undefined
  onChange: (value: V) => void
}

export interface ChipGroupMultipleProps<V extends string = string> extends ChipGroupBaseProps<V> {
  multiple: true
  value: V[]
  onChange: (value: V[]) => void
}

export type ChipGroupProps<V extends string = string> = ChipGroupSingleProps<V> | ChipGroupMultipleProps<V>

/**
 * A set of chips. Single-select is a radio group (one tab stop, arrow keys move the choice);
 * multi-select is a group of toggle buttons.
 */
export function ChipGroup<V extends string = string>(props: ChipGroupProps<V>) {
  const { options, size = 'md', label, invalid, className = '' } = props
  const refs = React.useRef<(HTMLButtonElement | null)[]>([])
  const enabled = options.map((o, i) => (o.disabled ? -1 : i)).filter((i) => i >= 0)

  const isSelected = (v: V) => (props.multiple ? props.value.includes(v) : props.value === v)

  const select = (v: V) => {
    if (props.multiple) {
      props.onChange(isSelected(v) ? props.value.filter((x) => x !== v) : [...props.value, v])
    } else {
      props.onChange(v)
    }
  }

  // Roving tab stop for the radio group: the selected chip, else the first enabled one.
  const selectedIndex = options.findIndex((o) => !o.disabled && isSelected(o.value))
  const tabStop = selectedIndex >= 0 ? selectedIndex : enabled[0]

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (props.multiple) return
    const pos = enabled.indexOf(index)
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowDown' ? enabled[(pos + 1) % enabled.length]
      : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? enabled[(pos - 1 + enabled.length) % enabled.length]
      : e.key === 'Home' ? enabled[0]
      : e.key === 'End' ? enabled[enabled.length - 1]
      : undefined
    if (next === undefined) return
    e.preventDefault()
    refs.current[next]?.focus()
    select(options[next].value)
  }

  return (
    <div
      role={props.multiple ? 'group' : 'radiogroup'}
      aria-label={label}
      aria-labelledby={props['aria-labelledby']}
      aria-describedby={props['aria-describedby']}
      aria-invalid={invalid || undefined}
      className={cx('pom-chip-group', invalid && 'pom-chip-group--invalid', className)}
    >
      {options.map((o, i) => {
        const selected = isSelected(o.value)
        return (
          <Chip
            key={o.value}
            ref={(el) => {
              refs.current[i] = el
            }}
            size={size}
            selected={selected}
            disabled={o.disabled}
            role={props.multiple ? undefined : 'radio'}
            aria-checked={props.multiple ? undefined : selected}
            tabIndex={props.multiple ? undefined : i === tabStop ? 0 : -1}
            onClick={() => select(o.value)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {o.label}
          </Chip>
        )
      })}
    </div>
  )
}
