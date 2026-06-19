import type { Meta, StoryObj } from '@storybook-astro/framework';
import Badge from '../components/Badge.astro';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'secondary', 'outline', 'warning'],
    },
    dot: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: { variant: 'primary' },
  parameters: { slots: { default: 'Primary' } },
};

export const Accent: Story = {
  args: { variant: 'accent' },
  parameters: { slots: { default: 'Accent' } },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  parameters: { slots: { default: 'Secondary' } },
};

export const Outline: Story = {
  args: { variant: 'outline' },
  parameters: { slots: { default: 'Outline' } },
};

export const Warning: Story = {
  args: { variant: 'warning' },
  parameters: { slots: { default: 'Warning' } },
};

export const Live: Story = {
  args: { variant: 'secondary', dot: true },
  parameters: { slots: { default: 'Live' } },
};

export const Building: Story = {
  args: { variant: 'secondary', dot: true },
  parameters: { slots: { default: 'Building' } },
};

export const Verified: Story = {
  args: { variant: 'accent', icon: true },
  parameters: { slots: { default: 'Verified' } },
};

export const VersionChip: Story = {
  args: { variant: 'secondary', mono: true },
  parameters: { slots: { default: 'v1.0.0' } },
};

export const WarningWithIcon: Story = {
  args: { variant: 'warning', icon: true },
  parameters: { slots: { default: 'Draft' } },
};
