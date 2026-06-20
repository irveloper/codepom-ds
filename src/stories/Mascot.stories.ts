import type { Meta, StoryObj } from '@storybook-astro/framework';
import Mascot from '../components/Mascot.astro';

const meta: Meta<typeof Mascot> = {
  title: 'Foundations/Logo & Mascot',
  component: Mascot,
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'solid', 'line'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    size: {
      control: { type: 'range', min: 16, max: 300, step: 8 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Mascot>;

export const FullColor: Story = {
  name: 'Full Color',
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'full', theme: 'light', size: 200 },
};

export const SolidLight: Story = {
  name: 'Solid — Light',
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'solid', theme: 'light', size: 200 },
};

export const SolidDark: Story = {
  name: 'Solid — Dark',
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  args: { variant: 'solid', theme: 'dark', size: 200 },
};

export const LineArtLight: Story = {
  name: 'Line Art — Light',
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'line', theme: 'light', size: 200 },
};

export const LineArtDark: Story = {
  name: 'Line Art — Dark',
  parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
  args: { variant: 'line', theme: 'dark', size: 200 },
};

export const AllVariants: Story = {
  name: 'All Variants',
  parameters: { layout: 'centered' },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;display:grid;grid-template-columns:1fr 1fr;gap:0;border-radius:16px;overflow:hidden;width:480px;">
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-full.svg" width="120" height="112" style="object-fit:contain;" alt="Full color" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">FULL COLOR</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-full.svg" width="120" height="112" style="object-fit:contain;" alt="Full color dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">FULL COLOR / DARK</span>
      </div>
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-solid-light.svg" width="120" height="112" style="object-fit:contain;" alt="Solid light" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">SOLID / LIGHT</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-solid-dark.svg" width="120" height="112" style="object-fit:contain;" alt="Solid dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">SOLID / DARK</span>
      </div>
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-lineart-light.svg" width="120" height="112" style="object-fit:contain;" alt="Line art light" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">LINE ART / LIGHT</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-lineart-dark.svg" width="120" height="112" style="object-fit:contain;" alt="Line art dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">LINE ART / DARK</span>
      </div>
    </div>
  `,
};

export const Small: Story = {
  parameters: { layout: 'centered', backgrounds: { default: 'light' } },
  args: { variant: 'full', theme: 'light', size: 32 },
};

export const Favicon: Story = {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  args: { variant: 'full', theme: 'dark', size: 48 },
};
