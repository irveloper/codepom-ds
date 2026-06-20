import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Popover, Button, Badge } from '../../packages/react/src'

const meta: Meta<typeof Popover> = {
  title: 'Overlays/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

const PopoverContent = ({ title, body }: { title: string; body: string }) => (
  <div
    style={{
      background: 'var(--pom-card, #1a2540)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 10,
      padding: 16,
      width: 220,
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    }}
  >
    <p style={{ margin: '0 0 6px', fontWeight: 600, fontSize: 14, color: '#F8FAFC' }}>{title}</p>
    <p style={{ margin: 0, fontSize: 13, color: '#94A3B8', lineHeight: 1.5 }}>{body}</p>
  </div>
)

export const Default: Story = {
  render: () => (
    <div style={{ padding: 80, background: '#0B132B' }}>
      <Popover
        trigger={<Button variant="secondary">Open Popover</Button>}
        placement="bottom"
      >
        <PopoverContent title="Popover title" body="This is the popover content. Click outside to dismiss." />
      </Popover>
    </div>
  ),
}

export const Top: Story = {
  render: () => (
    <div style={{ padding: 80, background: '#0B132B' }}>
      <Popover
        trigger={<Button variant="secondary">Top</Button>}
        placement="top"
      >
        <PopoverContent title="Top placement" body="This popover appears above the trigger." />
      </Popover>
    </div>
  ),
}

export const Bottom: Story = {
  render: () => (
    <div style={{ padding: 80, background: '#0B132B' }}>
      <Popover
        trigger={<Button variant="secondary">Bottom</Button>}
        placement="bottom"
      >
        <PopoverContent title="Bottom placement" body="This popover appears below the trigger." />
      </Popover>
    </div>
  ),
}

export const Left: Story = {
  render: () => (
    <div style={{ padding: 80, background: '#0B132B' }}>
      <Popover
        trigger={<Button variant="secondary">Left</Button>}
        placement="left"
      >
        <PopoverContent title="Left placement" body="This popover appears to the left of the trigger." />
      </Popover>
    </div>
  ),
}

export const Right: Story = {
  render: () => (
    <div style={{ padding: 80, background: '#0B132B' }}>
      <Popover
        trigger={<Button variant="secondary">Right</Button>}
        placement="right"
      >
        <PopoverContent title="Right placement" body="This popover appears to the right of the trigger." />
      </Popover>
    </div>
  ),
}

export const WithUserCard: Story = {
  render: () => (
    <div style={{ padding: 80, background: '#0B132B' }}>
      <Popover
        trigger={<Button variant="ghost" size="sm">Maya Chen ▾</Button>}
        placement="bottom"
      >
        <div
          style={{
            background: '#162035',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: 16,
            width: 240,
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FBB040', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#0B132B', fontSize: 13, flexShrink: 0 }}>
              MC
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 600, fontSize: 13, color: '#F8FAFC' }}>Maya Chen</p>
              <p style={{ margin: 0, fontSize: 12, color: '#94A3B8' }}>maya@codepom.dev</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {['Profile', 'Settings', 'Sign out'].map((item) => (
              <button
                key={item}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  fontSize: 13,
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '6px 8px',
                  borderRadius: 6,
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#F8FAFC' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#94A3B8' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  ),
}
