/** CodePom design tokens as JS constants. Import for runtime theming or Style Dictionary pipelines. */

export const colors = {
  navy: { 950: '#08192E', 900: '#0B132B', 800: '#1C2541', 700: '#3A506B' },
  amber: { 400: '#FBB040', 500: '#F59E0B', 600: '#EA580C' },
  cyan:  { 400: '#00DFFF', 500: '#38BDF8' },
  ivory: { 50: '#FDFCF0', 100: '#F8FAFC' },
  success: '#4ADE80',
  warning: '#FB923C',
  error:   '#F87171',
};

export const semantic = {
  background:   '#0B132B',
  foreground:   '#F8FAFC',
  card:         '#08192E',
  primary:      '#FBB040',
  secondary:    '#1C2541',
  accent:       '#00DFFF',
  border:       '#1C2541',
  textPrimary:   '#F8FAFC',
  textSecondary: '#94A3B8',
  textTertiary:  '#64748B',
  textOnPrimary: '#0B132B',
};

export const spacing = {
  0: '0px', 1: '4px', 2: '8px', 3: '12px', 4: '16px',
  5: '20px', 6: '24px', 8: '32px', 10: '40px',
  12: '48px', 16: '64px', 20: '80px', 24: '96px',
};

export const radius = {
  sm: '6px', md: '8px', lg: '12px', xl: '14px', full: '9999px',
};

export const shadow = {
  0: 'none',
  1: '0 1px 2px 0 rgba(5,10,24,0.4)',
  2: '0 2px 8px 0 rgba(5,10,24,0.5), 0 1px 2px 0 rgba(5,10,24,0.3)',
  3: '0 4px 16px 0 rgba(5,10,24,0.6), 0 2px 4px 0 rgba(5,10,24,0.3)',
  4: '0 8px 32px 0 rgba(5,10,24,0.7), 0 4px 8px 0 rgba(5,10,24,0.4)',
  5: '0 16px 48px 0 rgba(5,10,24,0.8), 0 8px 16px 0 rgba(5,10,24,0.5)',
};

export const duration = {
  instant: '0ms', fast: '100ms', normal: '200ms',
  slow: '350ms', enter: '250ms', exit: '150ms',
};

export const easing = {
  out:    'cubic-bezier(0.0,0.0,0.2,1)',
  in:     'cubic-bezier(0.4,0.0,1.0,1)',
  inOut:  'cubic-bezier(0.4,0.0,0.2,1)',
  spring: 'cubic-bezier(0.34,1.56,0.64,1)',
};

export const font = {
  sans: '"Space Grotesk", system-ui, sans-serif',
  mono: '"Space Mono", "Courier New", monospace',
};

const tokens = { colors, semantic, spacing, radius, shadow, duration, easing, font };
export default tokens;
