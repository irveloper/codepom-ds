import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, Card, Badge } from '../../packages/react/src'

const stages = ['Discovery', 'Design', 'Build MVP', 'Launch', 'Retainer']

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof Carousel>

const slides = stages.map((s, i) => (
  <Card key={s} padding="md">
    <Badge variant="primary" size="sm">0{i + 1}</Badge>
    <h3 style={{ margin: '16px 0 8px', fontSize: 17 }}>{s}</h3>
    <p style={{ margin: 0, fontSize: 13, color: 'var(--pom-text-secondary)' }}>Fixed scope, fixed price, demo at the end.</p>
  </Card>
))

/** Controls appear only while slides overflow. Resize the canvas to see them come and go. */
export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <Carousel label="Process stages">{slides}</Carousel>
    </div>
  ),
}

/** Every slide fits: sized with --pom-carousel-slide-size, so no controls render. */
export const AllFit: Story = {
  render: () => (
    <div style={{ ['--pom-carousel-slide-size' as string]: 'calc((100% - 4 * 12px) / 5)' }}>
      <Carousel label="Process stages">{slides}</Carousel>
    </div>
  ),
}
