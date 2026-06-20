import React from 'react'

export interface CheckboxProps {
  label?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export const Checkbox = ({ label, checked, defaultChecked, onChange, disabled, className }: CheckboxProps) => (
  <label className={`flex items-center gap-[10px] cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className ?? ''}`}>
    <span className="relative flex items-center justify-center w-[18px] h-[18px] flex-none">
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
        className="peer sr-only"
      />
      <span className="w-[18px] h-[18px] rounded-[4px] border border-navy-700 bg-navy-900 peer-checked:bg-cyan-400 peer-checked:border-cyan-400 transition-colors" />
      <svg className="absolute opacity-0 peer-checked:opacity-100 pointer-events-none" width="11" height="9" viewBox="0 0 11 9" fill="none">
        <path d="M1 4l3 3 6-6" stroke="#0B132B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    {label && <span className="text-[14px]">{label}</span>}
  </label>
)
