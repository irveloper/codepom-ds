import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Textarea, Field, Label } from '../../packages/react/src'

const meta: Meta = {
  title: 'Components/Form Controls/Textarea',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Brief</Label>
      <Textarea defaultValue="Build a fast, loyal product platform." rows={3} />
    </Field>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <Field>
      <Label>Description</Label>
      <Textarea placeholder="Describe your project..." rows={4} />
    </Field>
  ),
}
