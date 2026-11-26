import React from 'react'
import type { Preview } from '@storybook/react'
import '../packages/tokens/css/tokens.css'
import '../packages/react/src/styles.css'
import '../packages/react/src/themes/blueprint.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Component theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'blueprint', title: 'Blueprint' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'default' },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as string
      if (theme === 'default') delete document.documentElement.dataset.pomTheme
      else document.documentElement.dataset.pomTheme = theme
      return <Story />
    },
  ],
}

export default preview
