import type { Meta, StoryObj } from '@storybook-astro/framework';

const meta: Meta = {
  title: 'Applications/Desktop UI',
};

export default meta;

export const Dashboard: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => `
    <div style="border-radius:14px;overflow:hidden;border:1px solid #1C2541;box-shadow:0 24px 60px rgba(0,0,0,0.45);font-family:'Space Grotesk',sans-serif;">
      <div style="height:38px;background:#08192E;border-bottom:1px solid #1C2541;display:flex;align-items:center;gap:8px;padding:0 14px;">
        <span style="width:11px;height:11px;border-radius:50%;background:#EA580C;"></span>
        <span style="width:11px;height:11px;border-radius:50%;background:#FBB040;"></span>
        <span style="width:11px;height:11px;border-radius:50%;background:#4ADE80;"></span>
        <span style="margin-left:14px;font-family:'Space Mono',monospace;font-size:11px;color:#64748B;background:#0B132B;border-radius:6px;padding:3px 14px;">app.codepom.com/dashboard</span>
      </div>
      <div style="display:flex;height:380px;background:#0B132B;">
        <div style="width:190px;flex:none;background:#08192E;border-right:1px solid #1C2541;padding:16px 12px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:22px;">
            <img src="/logo.svg" width="26" height="26" alt="CodePom mascot" style="object-fit:contain;" />
            <span style="font-weight:700;font-size:15px;">CodePom</span>
          </div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600;color:#08192E;background:#FBB040;border-radius:8px;padding:8px 11px;margin-bottom:5px;">Dashboard</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13px;color:#94A3B8;padding:8px 11px;margin-bottom:5px;">Projects</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13px;color:#94A3B8;padding:8px 11px;margin-bottom:5px;">Deploys</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13px;color:#94A3B8;padding:8px 11px;">Team</div>
        </div>
        <div style="flex:1;padding:22px;overflow:hidden;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
            <div style="font-size:20px;font-weight:700;letter-spacing:-0.02em;">Dashboard</div>
            <button style="font-family:'Space Grotesk',sans-serif;font-weight:600;background:#FBB040;color:#08192E;border:none;border-radius:8px;cursor:pointer;font-size:13px;padding:8px 14px;">+ Deploy</button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">
            <div style="background:#08192E;border:1px solid #1C2541;border-radius:10px;padding:14px;">
              <div style="font-size:12px;color:#94A3B8;">Uptime</div>
              <div style="font-size:24px;font-weight:700;margin-top:4px;">99.9<span style="font-size:13px;color:#64748B;">%</span></div>
            </div>
            <div style="background:#08192E;border:1px solid #1C2541;border-radius:10px;padding:14px;">
              <div style="font-size:12px;color:#94A3B8;">Deploys</div>
              <div style="font-size:24px;font-weight:700;margin-top:4px;color:#FBB040;">42</div>
            </div>
            <div style="background:#08192E;border:1px solid #1C2541;border-radius:10px;padding:14px;">
              <div style="font-size:12px;color:#94A3B8;">Latency</div>
              <div style="font-size:24px;font-weight:700;margin-top:4px;color:#00DFFF;">38<span style="font-size:13px;color:#64748B;">ms</span></div>
            </div>
          </div>
          <div style="background:#08192E;border:1px solid #1C2541;border-radius:10px;padding:16px;height:150px;display:flex;align-items:flex-end;gap:8px;">
            <div style="flex:1;background:#1C2541;border-radius:4px;height:40%;"></div>
            <div style="flex:1;background:#1C2541;border-radius:4px;height:62%;"></div>
            <div style="flex:1;background:#FBB040;border-radius:4px;height:80%;"></div>
            <div style="flex:1;background:#1C2541;border-radius:4px;height:55%;"></div>
            <div style="flex:1;background:#00DFFF;border-radius:4px;height:95%;"></div>
            <div style="flex:1;background:#1C2541;border-radius:4px;height:48%;"></div>
            <div style="flex:1;background:#1C2541;border-radius:4px;height:70%;"></div>
          </div>
        </div>
      </div>
    </div>
  `,
};
