import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    return {
      ...config,
      plugins: [
        ...(Array.isArray(config.plugins) ? config.plugins : []),
        {
          name: 'stub-astro-components',
          enforce: 'pre' as const,
          resolveId(id: string) {
            if (id.endsWith('.astro')) return '\0astro-stub'
          },
          load(id: string) {
            if (id === '\0astro-stub') return 'export default {}'
          },
        },
      ],
    }
  },
}

export default config
