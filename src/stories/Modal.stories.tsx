import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal, Button } from '../../packages/react/src'

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <div style={{ padding: 32, background: '#0B132B' }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Modal Title"
        >
          <p style={{ margin: 0, color: '#94A3B8', lineHeight: 1.6 }}>
            This is the modal body. You can place any content here — forms, confirmations, images, or anything else you need.
          </p>
        </Modal>
      </div>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <div style={{ padding: 32, background: '#0B132B' }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Modal with Footer</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Modal with Footer"
          footer={
            <>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" size="sm" onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p style={{ margin: 0, color: '#94A3B8', lineHeight: 1.6 }}>
            This modal has a footer with action buttons.
          </p>
        </Modal>
      </div>
    )
  },
}

export const Confirmation: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <div style={{ padding: 32, background: '#0B132B' }}>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete Item</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Deletion"
          size="sm"
          footer={
            <>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Delete</Button>
            </>
          }
        >
          <p style={{ margin: 0, color: '#94A3B8', lineHeight: 1.6 }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </Modal>
      </div>
    )
  },
}

export const Large: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <div style={{ padding: 32, background: '#0B132B' }}>
        <Button variant="secondary" onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Large Modal"
          size="lg"
        >
          <p style={{ margin: 0, color: '#94A3B8', lineHeight: 1.6 }}>
            This is a large modal for more complex content such as forms, data tables, or rich media.
          </p>
        </Modal>
      </div>
    )
  },
}
