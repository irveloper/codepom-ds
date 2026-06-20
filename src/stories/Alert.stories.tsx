import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../../packages/react/src'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Info',
    children: 'This is an informational message to keep you in the loop.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'This action may have unintended side effects.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.',
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible',
    dismissible: true,
    children: 'Click the X to dismiss this alert.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: 32,
        background: '#0B132B',
        width: 480,
      }}
    >
      <Alert variant="info" title="Info">This is an informational message.</Alert>
      <Alert variant="success" title="Success">Your changes were saved.</Alert>
      <Alert variant="warning" title="Warning">This action may have side effects.</Alert>
      <Alert variant="error" title="Error">Something went wrong. Please retry.</Alert>
    </div>
  ),
}
