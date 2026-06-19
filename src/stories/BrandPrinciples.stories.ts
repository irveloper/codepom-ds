import type { Meta, StoryObj } from '@storybook-astro/framework';
import BrandPrinciples from '../components/BrandPrinciples.astro';

const meta: Meta<typeof BrandPrinciples> = {
  title: 'Foundations/Brand Principles',
  component: BrandPrinciples,
};

export default meta;

type Story = StoryObj<typeof BrandPrinciples>;

export const Default: Story = {};
