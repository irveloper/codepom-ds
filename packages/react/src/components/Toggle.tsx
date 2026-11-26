import React from 'react'

export interface ToggleProps {
  label?: string
  hint?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  name?: string
  className?: string
}

export const Toggle = ({ label, hint, checked, defaultChecked, onChange, disabled, name, className }: ToggleProps) => (
  <label className={['pom-toggle', disabled ? 'pom-toggle--disabled' : '', className].filter(Boolean).join(' ')}>
    {(label || hint) && (
      <span className="pom-toggle__text">
        {label && <span className="pom-toggle__label">{label}</span>}
        {hint && <span className="pom-toggle__hint">{hint}</span>}
      </span>
    )}
    <span className="pom-toggle__control">
      <input
        type="checkbox"
        role="switch"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
        className="pom-toggle__input pom-sr-only"
      />
      <span className="pom-toggle__track" aria-hidden="true" />
      <span className="pom-toggle__thumb" aria-hidden="true" />
    </span>
  </label>
)
