import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Chip, ChipGroup } from '../../packages/react/src'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Chip>

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Chip>Default</Chip>
      <Chip selected>Selected</Chip>
      <Chip disabled>Disabled</Chip>
      <Chip size="sm">Small</Chip>
    </div>
  ),
}

/** Single choice: a radio group — one tab stop, arrow keys move the selection. */
export const SingleSelect: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | null>('mid')
    return (
      <ChipGroup
        label="Budget"
        value={value}
        onChange={setValue}
        options={[
          { value: 'small', label: '$5k–15k' },
          { value: 'mid', label: '$15k–40k' },
          { value: 'big', label: '$40k–100k' },
          { value: 'huge', label: '$250k+' },
        ]}
      />
    )
  },
}

export const MultiSelect: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>(['react'])
    return (
      <ChipGroup
        multiple
        label="Stack"
        value={value}
        onChange={setValue}
        options={['react', 'astro', 'node', 'postgres'].map((v) => ({ value: v, label: v }))}
      />
    )
  },
}
