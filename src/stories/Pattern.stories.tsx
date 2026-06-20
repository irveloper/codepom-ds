import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pattern } from '../../packages/react/src'

const meta: Meta<typeof Pattern> = {
  title: 'Foundations/Background Pattern',
  component: Pattern,
}

export default meta
type Story = StoryObj<typeof Pattern>

export const Default: Story = {}
