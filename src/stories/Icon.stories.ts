import type { Meta, StoryObj } from '@storybook-astro/framework';
import Icon from '../components/Icon.astro';

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Iconography',
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: ['agility', 'partner', 'integrity', 'bone', 'db', 'gear-paw', 'gear', 'cloud', 'terminal', 'chip', 'plus', 'chevron-down'],
    },
    size: {
      control: { type: 'range', min: 16, max: 64, step: 4 },
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Agility: Story = {
  args: { name: 'agility', size: 30 },
};

export const Partnership: Story = {
  args: { name: 'partner', size: 30 },
};

export const Integrity: Story = {
  args: { name: 'integrity', size: 30 },
};

export const CodeBone: Story = {
  args: { name: 'bone', size: 30 },
};

export const DatabasePaw: Story = {
  args: { name: 'db', size: 30 },
};

export const GearPaw: Story = {
  args: { name: 'gear-paw', size: 30 },
};

export const Gear: Story = {
  args: { name: 'gear', size: 30 },
};

export const CloudPaw: Story = {
  args: { name: 'cloud', size: 30 },
};

export const Terminal: Story = {
  args: { name: 'terminal', size: 30 },
};

export const Chip: Story = {
  args: { name: 'chip', size: 30 },
};
