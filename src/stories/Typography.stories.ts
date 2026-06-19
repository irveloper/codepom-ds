import type { Meta, StoryObj } from '@storybook-astro/framework';

const meta: Meta = {
  title: 'Foundations/Typography',
};

export default meta;

export const TypeScale: StoryObj = {
  parameters: { layout: 'fullscreen' },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:40px;min-height:100vh;">
      <div style="max-width:800px;margin:0 auto;">
        <h1 style="font-size:34px;font-weight:700;letter-spacing:-0.025em;margin:0 0 10px;">Typography</h1>
        <p style="color:#94A3B8;font-size:16px;margin:0 0 36px;">CodePom Sans (Space Grotesk) for UI & display; CodePom Mono (Space Mono) for code, data and labels.</p>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:34px;">
          <div style="border:1px solid #1C2541;border-radius:12px;padding:26px;background:#08192E;">
            <div style="font-family:'Space Mono',monospace;font-size:11px;color:#00DFFF;margin-bottom:10px;">CodePom Sans · Space Grotesk</div>
            <div style="font-size:52px;font-weight:700;letter-spacing:-0.03em;line-height:1;">Aa</div>
            <div style="font-size:15px;color:#94A3B8;margin-top:18px;letter-spacing:0.02em;word-break:break-word;">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz 0123456789</div>
            <div style="display:flex;gap:6px;margin-top:18px;font-size:12px;font-family:'Space Mono',monospace;color:#64748B;">
              <span style="border:1px solid #1C2541;border-radius:5px;padding:2px 8px;">400</span>
              <span style="border:1px solid #1C2541;border-radius:5px;padding:2px 8px;">500</span>
              <span style="border:1px solid #1C2541;border-radius:5px;padding:2px 8px;">600</span>
              <span style="border:1px solid #1C2541;border-radius:5px;padding:2px 8px;">700</span>
            </div>
          </div>
          <div style="border:1px solid #1C2541;border-radius:12px;padding:26px;background:#08192E;">
            <div style="font-family:'Space Mono',monospace;font-size:11px;color:#00DFFF;margin-bottom:10px;">CodePom Mono · Space Mono</div>
            <div style="font-family:'Space Mono',monospace;font-size:52px;font-weight:700;line-height:1;">Aa</div>
            <div style="font-family:'Space Mono',monospace;font-size:13px;color:#94A3B8;margin-top:18px;word-break:break-word;">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz 0123456789</div>
            <div style="font-family:'Space Mono',monospace;font-size:13px;color:#FBB040;margin-top:18px;">// const brand = "#00DFFF"</div>
          </div>
        </div>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 8px;">TYPE SCALE</h3>
        <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;">
          <div style="display:flex;align-items:baseline;gap:18px;padding:18px 20px;border-bottom:1px solid #131f3a;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;width:120px;flex:none;">Display / 48</span>
            <span style="font-size:48px;font-weight:700;letter-spacing:-0.03em;">Pioneering</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:18px;padding:18px 20px;border-bottom:1px solid #131f3a;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;width:120px;flex:none;">H1 / 34</span>
            <span style="font-size:34px;font-weight:700;letter-spacing:-0.025em;">Agile web engineering</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:18px;padding:18px 20px;border-bottom:1px solid #131f3a;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;width:120px;flex:none;">H2 / 24</span>
            <span style="font-size:24px;font-weight:600;letter-spacing:-0.015em;">Fiercely loyal partners</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:18px;padding:18px 20px;border-bottom:1px solid #131f3a;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;width:120px;flex:none;">Body / 16</span>
            <span style="font-size:16px;color:#E2E8F0;line-height:1.5;">We build resilient, well-tested web platforms with the loyalty of a good dog.</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:18px;padding:18px 20px;border-bottom:1px solid #131f3a;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;width:120px;flex:none;">Small / 13</span>
            <span style="font-size:13px;color:#94A3B8;">Supporting copy and captions.</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:18px;padding:18px 20px;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#64748B;width:120px;flex:none;">Code / 14</span>
            <span style="font-family:'Space Mono',monospace;font-size:14px;color:#00DFFF;">$ codepom deploy --prod</span>
          </div>
        </div>
      </div>
    </div>
  `,
};
