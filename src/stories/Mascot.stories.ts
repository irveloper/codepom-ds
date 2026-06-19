import type { Meta, StoryObj } from '@storybook-astro/framework';
import Mascot from '../components/Mascot.astro';

const meta: Meta<typeof Mascot> = {
  title: 'Foundations/Logo & Mascot',
  component: Mascot,
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'solid', 'line'],
    },
    size: {
      control: { type: 'range', min: 16, max: 300, step: 8 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Mascot>;

export const FullColor: Story = {
  args: {
    variant: 'full',
    size: 200,
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    size: 200,
  },
};

export const LineArt: Story = {
  args: {
    variant: 'line',
    size: 200,
  },
};

export const Small: Story = {
  args: {
    variant: 'full',
    size: 32,
  },
};

export const Favicon: Story = {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'navy' },
  },
  args: {
    variant: 'full',
    size: 48,
  },
};
