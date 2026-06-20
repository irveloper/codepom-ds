import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BrandPrinciples } from '../../packages/react/src'

const meta: Meta<typeof BrandPrinciples> = {
  title: 'Foundations/Brand Principles',
  component: BrandPrinciples,
}

export default meta
type Story = StoryObj<typeof BrandPrinciples>

export const Default: Story = {}
