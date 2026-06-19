import type { Meta, StoryObj } from '@storybook-astro/framework';
import Pattern from '../components/Pattern.astro';

const meta: Meta<typeof Pattern> = {
  title: 'Foundations/Background Pattern',
  component: Pattern,
};

export default meta;

type Story = StoryObj<typeof Pattern>;

export const Default: Story = {};
