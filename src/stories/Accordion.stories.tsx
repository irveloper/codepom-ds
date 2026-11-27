import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '../../packages/react/src'

const items = [
  { title: 'What does a fixed-scope stage include?', content: 'Discovery, design, build or launch — each with a signed scope, a fixed price and a demo at the end.' },
  { title: 'How long until something is live?', content: 'Most MVPs ship in 8–12 weeks. You see working software every week from week two.' },
  { title: 'Who owns the code?', content: 'You do, from the first commit. The repository lives in your organization.' },
]

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  args: { items },
}
export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {}

/** Numbered with a rotating plus — the codepom.io FAQ pattern. */
export const NumberedFaq: Story = { args: { numbered: true, icon: 'plus' } }

export const Multiple: Story = { args: { multiple: true, defaultOpen: ['0', '1'] } }
