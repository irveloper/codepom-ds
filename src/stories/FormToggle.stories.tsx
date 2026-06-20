import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from '../../packages/react/src'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Form Controls/Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    checked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const On: Story = { args: { label: 'Notifications', hint: 'Push alerts', checked: true } }
export const Off: Story = { args: { label: 'Notifications', hint: 'Push alerts', checked: false } }
