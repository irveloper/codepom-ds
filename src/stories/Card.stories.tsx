import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardFooter, Button } from '../../packages/react/src'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  argTypes: {
    elevation: { control: 'select', options: [0, 1, 2, 3, 4, 5] },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    interactive: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <div style={{ width: 360, padding: 32, background: '#0B132B' }}>
      <Card elevation={1}>
        <CardHeader>
          <p style={{ margin: 0, fontWeight: 600, color: '#F8FAFC' }}>Card Title</p>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: '#94A3B8' }}>Card description goes here</p>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0, fontSize: 14, color: '#94A3B8', lineHeight: 1.6 }}>
            This is the card body content. Cards can contain any content, from text to images to interactive components.
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save changes</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div style={{ width: 320, padding: 32, background: '#0B132B' }}>
      <Card elevation={1} interactive>
        <CardBody>
          <p style={{ margin: 0, fontWeight: 600, color: '#F8FAFC' }}>Interactive Card</p>
          <p style={{ margin: '8px 0 0', fontSize: 13, color: '#94A3B8' }}>Hover over this card to see the interactive effect.</p>
        </CardBody>
      </Card>
    </div>
  ),
}

export const ElevationVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        padding: 40,
        background: '#0B132B',
      }}
    >
      {([0, 1, 2, 3, 4, 5] as const).map((elevation) => (
        <div key={elevation} style={{ width: 200 }}>
          <Card elevation={elevation}>
            <CardBody>
              <p style={{ margin: 0, fontWeight: 600, color: '#F8FAFC', fontSize: 14 }}>
                Elevation {elevation}
              </p>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: '#94A3B8' }}>
                cp-card--elevation-{elevation}
              </p>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  ),
}

export const WithoutFooter: Story = {
  render: () => (
    <div style={{ width: 360, padding: 32, background: '#0B132B' }}>
      <Card elevation={2}>
        <CardHeader>
          <p style={{ margin: 0, fontWeight: 600, color: '#F8FAFC' }}>Simple Card</p>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0, fontSize: 14, color: '#94A3B8' }}>
            A card without a footer for simpler content presentations.
          </p>
        </CardBody>
      </Card>
    </div>
  ),
}
