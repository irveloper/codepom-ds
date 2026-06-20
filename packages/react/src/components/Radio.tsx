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
  <label className={`flex items-center gap-[10px] cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className ?? ''}`}>
    <span className="relative flex items-center justify-center w-[18px] h-[18px] flex-none">
      <input
        type="radio"
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        name={name}
        disabled={disabled}
        onChange={e => onChange?.(e.target.value)}
        className="peer sr-only"
      />
      <span className="w-[18px] h-[18px] rounded-full border border-navy-700 bg-navy-900 peer-checked:border-cyan-400 transition-colors" />
      <span className="absolute w-[8px] h-[8px] rounded-full bg-cyan-400 opacity-0 peer-checked:opacity-100 transition-opacity" />
    </span>
    {label && <span className="text-[14px]">{label}</span>}
  </label>
)
