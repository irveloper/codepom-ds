import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BusinessCard } from '../../packages/react/src'

const meta: Meta<typeof BusinessCard> = {
  title: 'Applications/Business Card',
  component: BusinessCard,
  argTypes: {
    name: { control: 'text' },
    title: { control: 'text' },
    email: { control: 'text' },
    phone: { control: 'text' },
    website: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof BusinessCard>

export const Default: Story = {}

export const Custom: Story = {
  args: {
    name: 'Alex Rivera',
    title: 'Senior Engineer',
    email: 'alex@codepom.com',
    phone: '+1 555 123 4567',
    website: 'codepom.com',
  },
}
