import type { Meta, StoryObj } from '@storybook-astro/framework';

const meta: Meta = {
  title: 'Foundations/Colors & Tokens',
};

export default meta;

export const ColorPalette: StoryObj = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:40px;min-height:100vh;">
      <div style="max-width:800px;margin:0 auto;">
        <h1 style="font-size:34px;font-weight:700;letter-spacing:-0.025em;margin:0 0 10px;">Colors & Tokens</h1>
        <p style="color:#94A3B8;font-size:16px;margin:0 0 36px;">The CodePom palette and semantic design tokens.</p>

        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:36px;">
          <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;background:#08192E;">
            <div style="height:96px;background:#08192E;border-bottom:1px solid #1C2541;"></div>
            <div style="padding:12px 14px;"><div style="font-weight:600;font-size:14px;">Deep Navy</div><div style="font-family:'Space Mono',monospace;font-size:12px;color:#94A3B8;margin-top:3px;">#08192E</div></div>
          </div>
          <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;background:#08192E;">
            <div style="height:96px;background:#FBB040;"></div>
            <div style="padding:12px 14px;"><div style="font-weight:600;font-size:14px;">Pomeranian Amber</div><div style="font-family:'Space Mono',monospace;font-size:12px;color:#94A3B8;margin-top:3px;">#FBB040</div></div>
          </div>
          <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;background:#08192E;">
            <div style="height:96px;background:#00DFFF;"></div>
            <div style="padding:12px 14px;"><div style="font-weight:600;font-size:14px;">Bracket Cyan</div><div style="font-family:'Space Mono',monospace;font-size:12px;color:#94A3B8;margin-top:3px;">#00DFFF</div></div>
          </div>
          <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;background:#08192E;">
            <div style="height:96px;background:#FDFCF0;"></div>
            <div style="padding:12px 14px;"><div style="font-weight:600;font-size:14px;">Soft Ivory</div><div style="font-family:'Space Mono',monospace;font-size:12px;color:#94A3B8;margin-top:3px;">#FDFCF0</div></div>
          </div>
        </div>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 14px;">SCALES</h3>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:36px;">
          <div style="display:flex;gap:8px;">
            <div style="flex:1;background:#08192E;border:1px solid #1C2541;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;">navy-950</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;">#08192E</div></div>
            <div style="flex:1;background:#0B132B;border:1px solid #1C2541;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;">navy-900</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;">#0B132B</div></div>
            <div style="flex:1;background:#1C2541;border:1px solid #1C2541;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#94A3B8;">navy-800</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;">#1C2541</div></div>
            <div style="flex:1;background:#3A506B;border:1px solid #3A506B;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#E2E8F0;">navy-700</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#fff;">#3A506B</div></div>
          </div>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;background:#FBB040;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#7c4d00;">amber-400</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#3a2400;">#FBB040</div></div>
            <div style="flex:1;background:#F59E0B;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#7c4d00;">amber-500</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#3a2400;">#F59E0B</div></div>
            <div style="flex:1;background:#EA580C;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#ffe;">amber-600</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#fff;">#EA580C</div></div>
            <div style="flex:1;background:#0B132B;border:1px dashed #1C2541;border-radius:8px;padding:10px 12px;opacity:.4;"></div>
          </div>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;background:#00DFFF;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#005;">cyan-400</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#003;">#00DFFF</div></div>
            <div style="flex:1;background:#38BDF8;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#024;">cyan-500</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#013;">#38BDF8</div></div>
            <div style="flex:1;background:#FDFCF0;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#8a7;">ivory-50</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#555;">#FDFCF0</div></div>
            <div style="flex:1;background:#F8FAFC;border-radius:8px;padding:10px 12px;"><div style="font-family:'Space Mono',monospace;font-size:11px;color:#789;">ivory-100</div><div style="font-family:'Space Mono',monospace;font-size:12px;margin-top:4px;color:#456;">#F8FAFC</div></div>
          </div>
        </div>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 14px;">SEMANTIC TOKENS</h3>
        <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;">
          ${[
            { name: 'background', val: '#0B132B', bg: '#0B132B', use: 'App canvas' },
            { name: 'foreground', val: '#F8FAFC', bg: '#F8FAFC', use: 'Body text' },
            { name: 'card', val: '#08192E', bg: '#08192E', use: 'Panels & cards' },
            { name: 'primary', val: '#FBB040', bg: '#FBB040', use: 'Primary actions' },
            { name: 'secondary', val: '#1C2541', bg: '#1C2541', use: 'Secondary surface' },
            { name: 'accent', val: '#00DFFF', bg: '#00DFFF', use: 'Highlights & status' },
            { name: 'muted', val: '#3A506B', bg: '#3A506B', use: 'Muted / disabled' },
            { name: 'border', val: '#1C2541', bg: '#1C2541', use: 'Dividers & borders' },
          ].map(t => `
            <div style="display:flex;align-items:center;gap:14px;padding:11px 16px;border-bottom:1px solid #131f3a;">
              <span style="width:26px;height:26px;flex:none;border-radius:6px;border:1px solid #1C2541;background:${t.bg};"></span>
              <span style="font-family:'Space Mono',monospace;font-size:13px;color:#FBB040;min-width:170px;">--${t.name}</span>
              <span style="font-family:'Space Mono',monospace;font-size:12px;color:#64748B;">${t.val}</span>
              <span style="margin-left:auto;font-size:13px;color:#94A3B8;">${t.use}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `,
};
