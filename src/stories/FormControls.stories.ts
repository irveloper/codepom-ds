import type { Meta, StoryObj } from '@storybook-astro/framework';
import Input from '../components/Input.astro';

const meta: Meta<typeof Input> = {
  title: 'Components/Form Controls/Input',
  component: Input,
  argTypes: {
    type: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    hint: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Project name',
    value: 'codepom-web',
    hint: 'Lowercase, hyphenated.',
    type: 'text',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    hint: 'We\'ll never share your email.',
  },
};
