import type { Meta, StoryObj } from '@storybook-astro/framework';

const meta: Meta = {
  title: 'Foundations/Spacing',
};

export default meta;

const steps = [
  { token: '--cp-space-0',  px: '0px',  step: 0  },
  { token: '--cp-space-1',  px: '4px',  step: 1  },
  { token: '--cp-space-2',  px: '8px',  step: 2  },
  { token: '--cp-space-3',  px: '12px', step: 3  },
  { token: '--cp-space-4',  px: '16px', step: 4  },
  { token: '--cp-space-5',  px: '20px', step: 5  },
  { token: '--cp-space-6',  px: '24px', step: 6  },
  { token: '--cp-space-8',  px: '32px', step: 8  },
  { token: '--cp-space-10', px: '40px', step: 10 },
  { token: '--cp-space-12', px: '48px', step: 12 },
  { token: '--cp-space-16', px: '64px', step: 16 },
  { token: '--cp-space-20', px: '80px', step: 20 },
  { token: '--cp-space-24', px: '96px', step: 24 },
];

export const Scale: StoryObj = {
  name: 'Scale',
  parameters: { layout: 'fullscreen' },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:40px;min-height:100vh;">
      <div style="max-width:780px;margin:0 auto;">
        <h1 style="font-size:34px;font-weight:700;letter-spacing:-0.025em;margin:0 0 8px;">Spacing</h1>
        <p style="color:#94A3B8;font-size:16px;margin:0 0 10px;">8pt grid. All layout gaps, padding, and margins use these steps.</p>
        <p style="font-family:'Space Mono',monospace;font-size:12px;color:#3A506B;margin:0 0 40px;">Base unit = 4px &nbsp;·&nbsp; 1 step = 4px &nbsp;·&nbsp; 2 steps = 8px &nbsp;·&nbsp; 4 steps = 16px</p>

        <div style="display:flex;flex-direction:column;gap:4px;">
          ${steps.map(s => `
            <div style="display:flex;align-items:center;gap:16px;padding:10px 0;border-bottom:1px solid #131f3a;">
              <div style="width:200px;flex:none;display:flex;align-items:baseline;gap:8px;">
                <span style="font-family:'Space Mono',monospace;font-size:13px;color:#FBB040;">${s.token}</span>
              </div>
              <div style="width:40px;flex:none;text-align:right;font-family:'Space Mono',monospace;font-size:12px;color:#64748B;">${s.px}</div>
              <div style="flex:1;display:flex;align-items:center;gap:0;">
                ${s.step === 0
                  ? `<span style="font-size:11px;color:#3A506B;font-family:'Space Mono',monospace;">—</span>`
                  : `<div style="height:20px;width:${s.px};background:linear-gradient(90deg,#FBB040,#00DFFF);border-radius:3px;min-width:2px;"></div>`
                }
              </div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:48px;">
          <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 20px;">USAGE GUIDE</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            ${[
              { use: 'Icon gap',         token: '--cp-space-1', px: '4px'  },
              { use: 'Inline gap',       token: '--cp-space-2', px: '8px'  },
              { use: 'Button padding-x', token: '--cp-space-4', px: '16px' },
              { use: 'Card padding',     token: '--cp-space-6', px: '24px' },
              { use: 'Section gap',      token: '--cp-space-8', px: '32px' },
              { use: 'Page padding',     token: '--cp-space-10',px: '40px' },
              { use: 'Section spacer',   token: '--cp-space-16',px: '64px' },
              { use: 'Hero gap',         token: '--cp-space-24',px: '96px' },
            ].map(r => `
              <div style="background:#08192E;border:1px solid #1C2541;border-radius:10px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:13px;color:#94A3B8;">${r.use}</span>
                <span style="font-family:'Space Mono',monospace;font-size:12px;color:#FBB040;">${r.token}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `,
};

export const Playground: StoryObj = {
  name: 'Playground',
  parameters: { layout: 'centered' },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;background:#08192E;border:1px solid #1C2541;border-radius:16px;padding:32px;display:flex;flex-direction:column;gap:0;min-width:420px;">
      <p style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;margin:0 0 20px;letter-spacing:0.06em;">SPACING IN CONTEXT</p>
      <div style="display:flex;flex-direction:column;gap:0;">
        ${[1,2,3,4,5,6,8,10].map(n => {
          const px = n === 1 ? 4 : n === 2 ? 8 : n === 3 ? 12 : n === 4 ? 16 : n === 5 ? 20 : n === 6 ? 24 : n === 8 ? 32 : 40;
          return `
            <div style="display:flex;align-items:center;margin-bottom:${px}px;gap:12px;">
              <div style="width:32px;height:32px;border-radius:8px;background:#1C2541;border:1px solid #3A506B;flex:none;"></div>
              <div style="height:8px;flex:1;background:#1C2541;border-radius:4px;"></div>
              <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;flex:none;">mb:space-${n}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `,
};
