import React from 'react'
import {
  LOGO_FULL,
  LOGO_SOLIDLIGHT,
  LOGO_SOLIDDARK,
  LOGO_LINEARTLIGHT,
  LOGO_LINEARTDARK,
} from '../assets/logos'

export type MascotVariant = 'full' | 'solid' | 'line'
export type MascotTheme = 'light' | 'dark'

export interface MascotProps {
  variant?: MascotVariant
  theme?: MascotTheme
  size?: number
  className?: string
}

const SVG_MAP: Record<string, string> = {
  'full-light': LOGO_FULL,
  'full-dark': LOGO_FULL,
  'solid-light': LOGO_SOLIDLIGHT,
  'solid-dark': LOGO_SOLIDDARK,
  'line-light': LOGO_LINEARTLIGHT,
  'line-dark': LOGO_LINEARTDARK,
}

export const Mascot = ({ variant = 'full', theme = 'light', size = 200, className }: MascotProps) => {
  const svg = SVG_MAP[`${variant}-${theme}`] ?? LOGO_FULL
  return (
    <span
      className={className}
      style={{ display: 'inline-block', width: size, height: size, flexShrink: 0 }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
