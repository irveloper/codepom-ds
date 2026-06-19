import type { Preview } from '@storybook-astro/framework';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'navy',
      values: [
        { name: 'navy', value: '#0B132B' },
        { name: 'ivory', value: '#FDFCF0' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
