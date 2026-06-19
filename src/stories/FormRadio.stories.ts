import type { Meta, StoryObj } from '@storybook-astro/framework';
import Radio from '../components/Radio.astro';

const meta: Meta<typeof Radio> = {
  title: 'Components/Form Controls/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Selected: Story = {
  args: { label: 'Production', checked: true },
};

export const Unselected: Story = {
  args: { label: 'Staging', checked: false },
};
