import React from 'react'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: string
  placement?: TooltipPlacement
  children: React.ReactElement
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  placement = 'top',
  children,
}) => {
  const id = React.useId()

  return (
    <span className={`pom-tooltip-host pom-tooltip-host--${placement}`}>
      {React.cloneElement(children, {
        'aria-describedby': id,
      })}
      <span
        role="tooltip"
        id={id}
        className={`pom-tooltip pom-tooltip--${placement}`}
      >
        {content}
      </span>
    </span>
  )
}
