import type { Meta, StoryObj } from '@storybook-astro/framework';
import Button from '../components/Button.astro';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
  parameters: { slots: { default: 'Primary' } },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md' },
  parameters: { slots: { default: 'Secondary' } },
};

export const Accent: Story = {
  args: { variant: 'accent', size: 'md' },
  parameters: { slots: { default: 'Accent' } },
};

export const Outline: Story = {
  args: { variant: 'outline', size: 'md' },
  parameters: { slots: { default: 'Outline' } },
};

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md' },
  parameters: { slots: { default: 'Ghost' } },
};

export const Destructive: Story = {
  args: { variant: 'destructive', size: 'md' },
  parameters: { slots: { default: 'Destructive' } },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm' },
  parameters: { slots: { default: 'Small' } },
};

export const Medium: Story = {
  args: { variant: 'primary', size: 'md' },
  parameters: { slots: { default: 'Medium' } },
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg' },
  parameters: { slots: { default: 'Large' } },
};

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', disabled: true },
  parameters: { slots: { default: 'Disabled' } },
};

export const WithIcon: Story = {
  args: { variant: 'primary', size: 'md' },
  parameters: {
    slots: {
      default: `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
        New project
      `,
    },
  },
};

export const Loading: Story = {
  args: { variant: 'secondary', size: 'md' },
  parameters: {
    slots: {
      default: `
        <span style="font-family:'Space Mono',monospace;color:#00DFFF;">{ }</span>
        Deploying…
      `,
    },
  },
};

export const IconOnly: Story = {
  args: { variant: 'secondary', size: 'md' },
  parameters: {
    slots: {
      default: `
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
      `,
    },
  },
};
