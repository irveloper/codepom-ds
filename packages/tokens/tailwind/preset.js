/** @type {import('tailwindcss').Config} */
const preset = {
  theme: {
    extend: {
      colors: {
        navy:  { 950: '#08192E', 900: '#0B132B', 800: '#1C2541', 700: '#3A506B' },
        amber: { 400: '#FBB040', 500: '#F59E0B', 600: '#EA580C' },
        cyan:  { 400: '#00DFFF', 500: '#38BDF8' },
        ivory: { 50: '#FDFCF0', 100: '#F8FAFC' },
        success: '#4ADE80',
        warning: '#FB923C',
        error:   '#F87171',
        foreground:  '#F8FAFC',
        background:  '#0B132B',
        muted:       '#94A3B8',
        border:      '#1C2541',
        card:        '#08192E',
        primary:     '#FBB040',
        accent:      '#00DFFF',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', '"Courier New"', 'monospace'],
      },
      borderRadius: {
        sm: '6px', md: '8px', lg: '12px', xl: '14px',
      },
      boxShadow: {
        'pom-1': '0 1px 2px 0 rgba(5,10,24,0.4)',
        'pom-2': '0 2px 8px 0 rgba(5,10,24,0.5), 0 1px 2px 0 rgba(5,10,24,0.3)',
        'pom-3': '0 4px 16px 0 rgba(5,10,24,0.6), 0 2px 4px 0 rgba(5,10,24,0.3)',
        'pom-4': '0 8px 32px 0 rgba(5,10,24,0.7), 0 4px 8px 0 rgba(5,10,24,0.4)',
        'pom-5': '0 16px 48px 0 rgba(5,10,24,0.8), 0 8px 16px 0 rgba(5,10,24,0.5)',
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px',
        6: '24px', 8: '32px', 10: '40px', 12: '48px',
        16: '64px', 20: '80px', 24: '96px',
      },
      transitionDuration: {
        instant: '0ms', fast: '100ms', normal: '200ms',
        slow: '350ms', enter: '250ms', exit: '150ms',
      },
    },
  },
};

module.exports = preset;
