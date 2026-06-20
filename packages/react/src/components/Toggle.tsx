import React from 'react'

export interface ToggleProps {
  label?: string
  hint?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export const Toggle = ({ label, hint, checked, defaultChecked, onChange, disabled, className }: ToggleProps) => (
  <label className={`flex items-center justify-between gap-[12px] cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className ?? ''}`}>
    {(label || hint) && (
      <span className="flex flex-col">
        {label && <span className="text-[14px] font-medium">{label}</span>}
        {hint && <span className="text-[12px] text-muted">{hint}</span>}
      </span>
    )}
    <span className="relative flex-none">
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={e => onChange?.(e.target.checked)}
        className="peer sr-only"
      />
      <span className="block w-[40px] h-[22px] rounded-full bg-navy-700 peer-checked:bg-cyan-400 transition-colors" />
      <span className="absolute top-[3px] left-[3px] w-[16px] h-[16px] rounded-full bg-white transition-transform peer-checked:translate-x-[18px]" />
    </span>
  </label>
)
