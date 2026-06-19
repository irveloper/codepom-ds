import type { Meta, StoryObj } from '@storybook-astro/framework';
import Checkbox from '../components/Checkbox.astro';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form Controls/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: { label: 'CI / CD pipeline', checked: true },
};

export const Unchecked: Story = {
  args: { label: 'Automated tests', checked: false },
};
