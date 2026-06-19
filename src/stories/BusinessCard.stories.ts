import type { Meta, StoryObj } from '@storybook-astro/framework';
import BusinessCard from '../components/BusinessCard.astro';

const meta: Meta<typeof BusinessCard> = {
  title: 'Applications/Business Card',
  component: BusinessCard,
};

export default meta;

type Story = StoryObj<typeof BusinessCard>;

export const Default: Story = {};
