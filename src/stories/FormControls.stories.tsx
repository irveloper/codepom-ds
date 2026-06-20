import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input, Field, Label } from '../../packages/react/src'

const meta: Meta = {
  title: 'Components/Form Controls/Input',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Field hint="Lowercase, hyphenated.">
      <Label>Project name</Label>
      <Input defaultValue="codepom-web" type="text" />
    </Field>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <Field hint="We'll never share your email.">
      <Label>Email</Label>
      <Input placeholder="you@example.com" type="email" />
    </Field>
  ),
}
