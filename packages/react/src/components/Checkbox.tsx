import React from 'react'

export interface CheckboxProps {
  label?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  name?: string
  value?: string
  className?: string
}

export const Checkbox = ({ label, checked, defaultChecked, onChange, disabled, name, value, className }: CheckboxProps) => (
  <label className={['pom-checkbox', disabled ? 'pom-checkbox--disabled' : '', className].filter(Boolean).join(' ')}>
    <span className="pom-checkbox__control">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
        className="pom-checkbox__input pom-sr-only"
      />
      <span className="pom-checkbox__box" aria-hidden="true" />
      <svg className="pom-checkbox__mark" width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
        <path d="M1 4l3 3 6-6" stroke="var(--pom-navy-900)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    {label && <span className="pom-checkbox__label">{label}</span>}
  </label>
)
