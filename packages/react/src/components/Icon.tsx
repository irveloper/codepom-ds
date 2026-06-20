import React from 'react'

export type IconName =
  | 'agility'
  | 'partner'
  | 'integrity'
  | 'bone'
  | 'db'
  | 'gear-paw'
  | 'gear'
  | 'cloud'
  | 'terminal'
  | 'chip'
  | 'plus'
  | 'chevron-down'

export interface IconProps {
  name: IconName
  size?: number
  color?: string
  className?: string
}

type PathDef = { vw?: number; vh?: number; markup: string }

const ICONS: Record<IconName, PathDef> = {
  agility: {
    vw: 48, vh: 48,
    markup: '<polyline points="15,14 9,24 15,34" stroke="#00DFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><polyline points="33,14 39,24 33,34" stroke="#00DFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><polygon points="26,12 19,26 24,26 22,36 30,21 25,21" fill="currentColor"/>',
  },
  partner: {
    vw: 48, vh: 48,
    markup: '<path d="M4 20 L16 27 L23 23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 20 L32 27 L25 23" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><rect x="20" y="21" width="8" height="11" rx="2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 27 l4 -3" stroke="#00DFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  integrity: {
    vw: 48, vh: 48,
    markup: '<path d="M10 14 v-4 h4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 14 v-4 h-4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 34 v4 h4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 34 v4 h-4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><g fill="currentColor"><ellipse cx="24" cy="28" rx="6.6" ry="4.95"/><circle cx="17.4" cy="20.7" r="2.64"/><circle cx="21.8" cy="17.4" r="2.64"/><circle cx="26.2" cy="17.4" r="2.64"/><circle cx="30.6" cy="20.7" r="2.64"/></g>',
  },
  bone: {
    vw: 48, vh: 48,
    markup: '<rect x="14" y="20" width="20" height="8" rx="4" fill="currentColor"/><circle cx="13" cy="20" r="4.5" fill="currentColor"/><circle cx="13" cy="28" r="4.5" fill="currentColor"/><circle cx="35" cy="20" r="4.5" fill="currentColor"/><circle cx="35" cy="28" r="4.5" fill="currentColor"/><text x="24" y="27.5" fill="#00DFFF" font-family="Space Mono, monospace" font-size="9" font-weight="700" text-anchor="middle">&lt;/&gt;</text>',
  },
  db: {
    vw: 48, vh: 48,
    markup: '<ellipse cx="21" cy="13" rx="12" ry="4" stroke="currentColor" stroke-width="2.4"/><path d="M9 13 v18 a12 4 0 0 0 24 0 v-18" stroke="currentColor" stroke-width="2.4"/><path d="M9 22 a12 4 0 0 0 24 0" stroke="currentColor" stroke-width="2.4"/><circle cx="35" cy="35" r="8" fill="#0B132B"/><g fill="currentColor"><ellipse cx="35" cy="39" rx="4.4" ry="3.3"/><circle cx="30.6" cy="33.6" r="1.76"/><circle cx="34.6" cy="31.6" r="1.76"/><circle cx="38.4" cy="31.6" r="1.76"/><circle cx="39.4" cy="36.6" r="1.76"/></g>',
  },
  'gear-paw': {
    vw: 48, vh: 48,
    markup: '<circle cx="24" cy="24" r="11" stroke="currentColor" stroke-width="2.2"/><path d="M24 7 v5 M24 36 v5 M7 24 h5 M36 24 h5 M12 12 l3.5 3.5 M36 36 l-3.5 -3.5 M36 12 l-3.5 3.5 M12 36 l3.5 -3.5" stroke="currentColor" stroke-width="2.2"/><g fill="currentColor"><ellipse cx="24" cy="28" rx="4.8" ry="3.6"/><circle cx="18.8" cy="21.6" r="1.92"/><circle cx="22.4" cy="19.2" r="1.92"/><circle cx="25.6" cy="19.2" r="1.92"/><circle cx="29.2" cy="21.6" r="1.92"/></g>',
  },
  gear: {
    vw: 48, vh: 48,
    markup: '<circle cx="24" cy="24" r="11" stroke="currentColor" stroke-width="2.2"/><circle cx="24" cy="24" r="4" stroke="currentColor" stroke-width="2.2"/><path d="M24 7 v5 M24 36 v5 M7 24 h5 M36 24 h5 M12 12 l3.5 3.5 M36 36 l-3.5 -3.5 M36 12 l-3.5 3.5 M12 36 l3.5 -3.5" stroke="currentColor" stroke-width="2.2"/>',
  },
  cloud: {
    vw: 48, vh: 48,
    markup: '<path d="M15 34 a8 8 0 0 1 1 -16 a10 10 0 0 1 19 2 a7 7 0 0 1 -1 14 z" stroke="currentColor" stroke-width="2.4"/><g fill="currentColor"><ellipse cx="24" cy="27" rx="4.09" ry="3.07"/><circle cx="19.5" cy="21.5" r="1.64"/><circle cx="23" cy="19.9" r="1.64"/><circle cx="26" cy="19.9" r="1.64"/><circle cx="29" cy="22.2" r="1.64"/></g>',
  },
  terminal: {
    vw: 48, vh: 48,
    markup: '<rect x="7" y="11" width="34" height="26" rx="3" stroke="currentColor" stroke-width="2.4"/><path d="M7 17 h34" stroke="currentColor" stroke-width="2.4"/><polyline points="15,24 19,27 15,30" stroke="#00DFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 30 h7" stroke="#00DFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  chip: {
    vw: 48, vh: 48,
    markup: '<rect x="14" y="14" width="20" height="20" rx="3" stroke="currentColor" stroke-width="2.2"/><rect x="20" y="20" width="8" height="8" rx="1" stroke="#00DFFF" stroke-width="2.2"/><path d="M19 14 v-5 M29 14 v-5 M19 34 v5 M29 34 v5 M14 19 h-5 M14 29 h-5 M34 19 h5 M34 29 h5" stroke="currentColor" stroke-width="2.2"/>',
  },
  plus: {
    markup: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  'chevron-down': {
    markup: '<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
}

export const Icon = ({ name, size = 24, color, className }: IconProps) => {
  const def = ICONS[name]
  if (!def) return null
  const vw = def.vw ?? 24
  const vh = def.vh ?? 24
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${vw} ${vh}`}
      fill="none"
      aria-label={name}
      className={className}
      style={color ? { color } : undefined}
      dangerouslySetInnerHTML={{ __html: def.markup }}
    />
  )
}
