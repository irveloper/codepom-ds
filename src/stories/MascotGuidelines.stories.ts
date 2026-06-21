import type { Meta, StoryObj } from '@storybook-astro/framework';
import { renderHTML } from './_renderHTML'

const meta: Meta = {
  title: 'Foundations/Logo & Mascot/Guidelines',
};

export default meta;

export const DoDont: StoryObj = {
  parameters: { layout: 'centered' },
  render: () => renderHTML(`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;font-family:'Space Grotesk',sans-serif;">
      <div style="border:1px solid #14532d;border-radius:12px;background:#08192E;padding:20px;display:flex;align-items:center;gap:16px;">
        <div style="width:54px;height:54px;flex:none;">
          <img src="/logo.svg" width="54" height="54" alt="CodePom mascot" style="object-fit:contain;" />
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:7px;font-weight:600;font-size:14px;color:#4ADE80;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
            Do
          </div>
          <div style="font-size:13px;color:#94A3B8;margin-top:4px;line-height:1.45;">Keep clear space equal to one ear height. Use on navy or ivory.</div>
        </div>
      </div>
      <div style="border:1px solid #7f1d1d;border-radius:12px;background:#08192E;padding:20px;display:flex;align-items:center;gap:16px;">
        <div style="width:54px;height:54px;flex:none;transform:skewX(-12deg) scaleY(0.8);filter:saturate(0.3);">
          <img src="/logo.svg" width="54" height="54" alt="CodePom mascot distorted" style="object-fit:contain;" />
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:7px;font-weight:600;font-size:14px;color:#F87171;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="3" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            Don't
          </div>
          <div style="font-size:13px;color:#94A3B8;margin-top:4px;line-height:1.45;">Never stretch, skew, recolor, or distort the mark.</div>
        </div>
      </div>
    </div>
  `),
};

export const Lockup: StoryObj = {
  parameters: { layout: 'centered' },
  render: () => renderHTML(`
    <div style="display:flex;gap:20px;flex-wrap:wrap;font-family:'Space Grotesk',sans-serif;">
      <div style="border:1px solid #1C2541;border-radius:12px;background:#08192E;padding:30px;display:flex;align-items:center;gap:20px;">
        <img src="/logo.svg" width="64" height="64" alt="CodePom mascot" style="object-fit:contain;" />
        <div>
          <div style="font-size:34px;font-weight:700;letter-spacing:-0.02em;line-height:1;">CODEPOM</div>
          <div style="font-family:'Space Mono',monospace;font-size:11px;color:#94A3B8;margin-top:6px;letter-spacing:0.04em;">PIONEERING AGILE WEB ENGINEERING</div>
        </div>
      </div>
      <div style="border:1px solid #1C2541;border-radius:12px;background:#08192E;padding:24px;display:flex;flex-direction:column;justify-content:center;gap:14px;">
        <div style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;">FAVICON</div>
        <div style="display:flex;align-items:flex-end;gap:14px;">
          <div style="width:48px;height:48px;background:#0B132B;border:1px solid #1C2541;border-radius:10px;padding:6px;">
            <img src="/logo.svg" width="36" height="36" alt="CodePom favicon 48px" style="object-fit:contain;" />
          </div>
          <div style="width:32px;height:32px;background:#0B132B;border:1px solid #1C2541;border-radius:8px;padding:4px;">
            <img src="/logo.svg" width="24" height="24" alt="CodePom favicon 32px" style="object-fit:contain;" />
          </div>
          <div style="width:20px;height:20px;background:#0B132B;border:1px solid #1C2541;border-radius:6px;padding:2px;">
            <img src="/logo.svg" width="16" height="16" alt="CodePom favicon 16px" style="object-fit:contain;" />
          </div>
        </div>
        <div style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;">48 · 32 · 16px</div>
      </div>
    </div>
  `),
};
