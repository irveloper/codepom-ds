import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from '../../packages/react/src'

const meta: Meta<typeof Radio> = {
  title: 'Components/Form Controls/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Selected: Story = { args: { label: 'Production', checked: true } }
export const Unselected: Story = { args: { label: 'Staging', checked: false } }
