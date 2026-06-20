import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast, Button } from '../../packages/react/src'

const meta: Meta = {
  title: 'Feedback/Toast',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

const ToastDemo = () => {
  const toast = useToast()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 32 }}>
      <Button
        variant="primary"
        onClick={() =>
          toast.show({ variant: 'success', title: 'Saved!', message: 'Your changes have been saved.' })
        }
      >
        Show Success Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.show({ variant: 'info', title: 'Info', message: 'Here is some useful information.' })
        }
      >
        Show Info Toast
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          toast.show({ variant: 'warning', title: 'Warning', message: 'This action may have side effects.' })
        }
      >
        Show Warning Toast
      </Button>
      <Button
        variant="danger"
        onClick={() =>
          toast.show({ variant: 'error', title: 'Error', message: 'Something went wrong. Please try again.' })
        }
      >
        Show Error Toast
      </Button>
    </div>
  )
}

export const Playground: Story = {
  render: () => (
    <ToastProvider position="top-right">
      <div style={{ background: '#0B132B', borderRadius: 8 }}>
        <ToastDemo />
      </div>
    </ToastProvider>
  ),
}

export const BottomLeft: Story = {
  render: () => (
    <ToastProvider position="bottom-left">
      <div style={{ background: '#0B132B', borderRadius: 8 }}>
        <ToastDemo />
      </div>
    </ToastProvider>
  ),
}
