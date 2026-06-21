import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import storybook from 'eslint-plugin-storybook'

export default [
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { '@typescript-eslint': tseslint },
    languageOptions: { parser: tsParser },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@storybook-astro/*'],
              message:
                "Use '@storybook/react' instead — this project runs @storybook/react-vite, not Astro.",
            },
          ],
        },
      ],
    },
  },
]
