import React from 'react'

// --- Label ---

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
  children: React.ReactNode
}

export const Label: React.FC<LabelProps> = ({ required, children, className = '', ...props }) => (
  <label className={`cp-label ${className}`.trim()} {...props}>
    {children}
    {required && <span className="cp-label__required" aria-hidden="true"> *</span>}
  </label>
)

// --- Input ---

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize
  error?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = 'md', error = false, leadingIcon, trailingIcon, className = '', ...props }, ref) => {
    const classes = [
      'cp-input',
      `cp-input--${inputSize}`,
      error ? 'cp-input--error' : '',
      leadingIcon ? 'cp-input--has-leading' : '',
      trailingIcon ? 'cp-input--has-trailing' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    if (leadingIcon || trailingIcon) {
      return (
        <div className="cp-input-wrapper">
          {leadingIcon && (
            <span className="cp-input__icon cp-input__icon--leading" aria-hidden="true">
              {leadingIcon}
            </span>
          )}
          <input ref={ref} className={classes} aria-invalid={error || undefined} {...props} />
          {trailingIcon && (
            <span className="cp-input__icon cp-input__icon--trailing" aria-hidden="true">
              {trailingIcon}
            </span>
          )}
        </div>
      )
    }

    return (
      <input ref={ref} className={classes} aria-invalid={error || undefined} {...props} />
    )
  }
)

Input.displayName = 'Input'

// --- Textarea ---

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error = false, resize = 'vertical', className = '', style, ...props }, ref) => (
    <textarea
      ref={ref}
      className={['cp-textarea', error ? 'cp-textarea--error' : '', className].filter(Boolean).join(' ')}
      aria-invalid={error || undefined}
      style={{ resize, ...style }}
      {...props}
    />
  )
)

Textarea.displayName = 'Textarea'

// --- Select ---

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ error = false, className = '', children, ...props }, ref) => (
    <div className="cp-select-wrapper">
      <select
        ref={ref}
        className={['cp-select', error ? 'cp-select--error' : '', className].filter(Boolean).join(' ')}
        aria-invalid={error || undefined}
        {...props}
      >
        {children}
      </select>
      <span className="cp-select__chevron" aria-hidden="true">▾</span>
    </div>
  )
)

Select.displayName = 'Select'

// --- Field (Label + Input + hint/error message) ---

export interface FieldProps {
  label: string
  htmlFor?: string
  hint?: string
  error?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

export const Field: React.FC<FieldProps> = ({
  label,
  htmlFor,
  hint,
  error,
  required,
  children,
  className = '',
}) => (
  <div className={`cp-field ${className}`.trim()}>
    <Label htmlFor={htmlFor} required={required}>
      {label}
    </Label>
    {children}
    {hint && !error && <p className="cp-field__hint">{hint}</p>}
    {error && (
      <p className="cp-field__error" role="alert">
        {error}
      </p>
    )}
  </div>
)
