import type { Meta, StoryObj } from '@storybook-astro/framework';
import Select from '../components/Select.astro';

const meta: Meta<typeof Select> = {
  title: 'Components/Form Controls/Select',
  component: Select,
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Stack',
    options: ['Next.js + Tailwind', 'Astro', 'Remix'],
  },
};
