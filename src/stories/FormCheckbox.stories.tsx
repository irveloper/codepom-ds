import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../../packages/react/src'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form Controls/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Checked: Story = { args: { label: 'CI / CD pipeline', checked: true } }
export const Unchecked: Story = { args: { label: 'Automated tests', checked: false } }
export const Disabled: Story = { args: { label: 'Locked feature', checked: false, disabled: true } }
