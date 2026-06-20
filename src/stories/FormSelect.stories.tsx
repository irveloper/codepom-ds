import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select, Field, Label } from '../../packages/react/src'

const meta: Meta = {
  title: 'Components/Form Controls/Select',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Stack</Label>
      <Select defaultValue="Next.js + Tailwind">
        <option>Next.js + Tailwind</option>
        <option>Astro</option>
        <option>Remix</option>
      </Select>
    </Field>
  ),
}
