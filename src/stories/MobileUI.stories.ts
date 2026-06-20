import type { Meta, StoryObj } from '@storybook-astro/framework';

const meta: Meta = {
  title: 'Applications/Mobile UI',
};

export default meta;

export const PhoneScreen: StoryObj = {
  parameters: { layout: 'centered' },
  render: () => `
    <div style="display:flex;gap:28px;flex-wrap:wrap;align-items:flex-start;font-family:'Space Grotesk',sans-serif;">
      <div style="width:280px;height:570px;border-radius:38px;background:#000;padding:11px;box-shadow:0 24px 60px rgba(0,0,0,0.5);flex:none;">
        <div style="width:100%;height:100%;border-radius:28px;background:#0B132B;overflow:hidden;position:relative;display:flex;flex-direction:column;">
          <div style="height:34px;display:flex;align-items:center;justify-content:space-between;padding:0 22px;font-size:12px;font-weight:600;color:#F8FAFC;">
            <span>9:41</span>
            <span style="width:60px;height:18px;background:#000;border-radius:0 0 14px 14px;position:absolute;left:50%;transform:translateX(-50%);top:0;"></span>
            <span style="font-family:'Space Mono',monospace;font-size:10px;">5G ▪▪▪</span>
          </div>
          <div style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:8px;">
              <img src="/logo.svg" width="30" height="30" alt="CodePom mascot" style="object-fit:contain;" />
              <span style="font-weight:700;font-size:16px;">CodePom</span>
            </div>
            <span style="width:9px;height:9px;border-radius:50%;background:#4ADE80;box-shadow:0 0 8px #4ADE80;"></span>
          </div>
          <div style="padding:6px 18px 0;">
            <div style="font-size:13px;color:#94A3B8;">Welcome back,</div>
            <div style="font-size:22px;font-weight:700;letter-spacing:-0.02em;margin-bottom:14px;">Maya 👋</div>
            <div style="background:linear-gradient(120deg,#FBB040,#EA580C);border-radius:14px;padding:16px;color:#08192E;margin-bottom:12px;">
              <div style="font-size:12px;font-weight:600;opacity:.8;">ACTIVE DEPLOY</div>
              <div style="font-size:18px;font-weight:700;margin-top:3px;">codepom-web</div>
              <div style="font-family:'Space Mono',monospace;font-size:11px;margin-top:6px;">building · 02:14</div>
            </div>
            <div style="display:flex;gap:10px;margin-bottom:12px;">
              <div style="flex:1;background:#08192E;border:1px solid #1C2541;border-radius:12px;padding:13px;">
                <div style="font-size:11px;color:#94A3B8;">Uptime</div>
                <div style="font-size:19px;font-weight:700;margin-top:2px;">99.9%</div>
              </div>
              <div style="flex:1;background:#08192E;border:1px solid #1C2541;border-radius:12px;padding:13px;">
                <div style="font-size:11px;color:#94A3B8;">Latency</div>
                <div style="font-size:19px;font-weight:700;margin-top:2px;color:#00DFFF;">38ms</div>
              </div>
            </div>
            <button style="width:100%;font-family:'Space Grotesk',sans-serif;font-weight:600;background:#FBB040;color:#08192E;border:none;border-radius:12px;cursor:pointer;font-size:15px;padding:13px;">View all projects</button>
          </div>
          <div style="margin-top:auto;height:58px;border-top:1px solid #1C2541;background:#08192E;display:flex;align-items:center;justify-content:space-around;padding:0 10px;">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="#FBB040" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="14" width="20" height="20" rx="3"/><rect x="20" y="20" width="8" height="8" rx="1" stroke="#00DFFF"/><path d="M19 14 v-5 M29 14 v-5 M19 34 v5 M29 34 v5 M14 19 h-5 M14 29 h-5 M34 19 h5 M34 29 h5"/></svg>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="#64748B" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="11" width="34" height="26" rx="3"/><path d="M7 17 h34"/><polyline points="15,24 19,27 15,30" stroke="#00DFFF"/><path d="M23 30 h7" stroke="#00DFFF"/></svg>
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="#64748B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="11"/><circle cx="24" cy="24" r="4"/><path d="M24 7 v5 M24 36 v5 M7 24 h5 M36 24 h5 M12 12 l3.5 3.5 M36 36 l-3.5 -3.5 M36 12 l-3.5 3.5 M12 36 l3.5 -3.5"/></svg>
          </div>
        </div>
      </div>
      <div style="flex:1;min-width:220px;border:1px solid #1C2541;border-radius:12px;background:#08192E;padding:24px;">
        <div style="font-weight:600;font-size:16px;margin-bottom:12px;">Mobile guidelines</div>
        <ul style="margin:0;padding-left:18px;font-size:14px;color:#94A3B8;line-height:1.7;">
          <li>Min hit target 44×44px</li>
          <li>Amber for the single primary action per screen</li>
          <li>Cyan reserved for live / status accents</li>
          <li>Mascot at 30px in the app bar</li>
          <li>Cards use 12px radius, 1px navy-800 border</li>
        </ul>
      </div>
    </div>
  `,
};
