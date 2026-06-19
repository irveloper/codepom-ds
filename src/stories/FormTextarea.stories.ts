import type { Meta, StoryObj } from '@storybook-astro/framework';
import Textarea from '../components/Textarea.astro';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form Controls/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: { type: 'range', min: 2, max: 10 } },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Brief',
    value: 'Build a fast, loyal product platform.',
    rows: 3,
  },
};
