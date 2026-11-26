import React from 'react'

export interface RadioProps {
  label?: string
  value?: string
  checked?: boolean
  defaultChecked?: boolean
  name?: string
  onChange?: (value: string) => void
  disabled?: boolean
  className?: string
}

export const Radio = ({ label, value, checked, defaultChecked, name, onChange, disabled, className }: RadioProps) => (
  <label className={['pom-radio', disabled ? 'pom-radio--disabled' : '', className].filter(Boolean).join(' ')}>
    <span className="pom-radio__control">
      <input
        type="radio"
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        name={name}
        disabled={disabled}
        onChange={e => onChange?.(e.target.value)}
        className="pom-radio__input pom-sr-only"
      />
      <span className="pom-radio__box" aria-hidden="true" />
      <span className="pom-radio__dot" aria-hidden="true" />
    </span>
    {label && <span className="pom-radio__label">{label}</span>}
  </label>
)
