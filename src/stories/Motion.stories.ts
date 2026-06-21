import type { Meta, StoryObj } from '@storybook-astro/framework';
import { renderHTML } from './_renderHTML'

const meta: Meta = {
  title: 'Foundations/Motion',
};

export default meta;

export const Scale: StoryObj = {
  name: 'Scale',
  parameters: { layout: 'fullscreen' },
  render: () => renderHTML(`
    <style>
      @keyframes pom-slide-in {
        from { opacity: 0; transform: translateY(6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .pom-demo-bar {
        height: 100%;
        background: linear-gradient(90deg, #FBB040, #00DFFF);
        border-radius: 3px;
        transform-origin: left;
        transform: scaleX(0);
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.0,0.0,0.2,1);
      }
      .pom-demo-track:hover .pom-demo-bar { transform: scaleX(1); }
    </style>
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:40px;min-height:100vh;">
      <div style="max-width:780px;margin:0 auto;">
        <h1 style="font-size:34px;font-weight:700;letter-spacing:-0.025em;margin:0 0 8px;">Motion</h1>
        <p style="color:#94A3B8;font-size:16px;margin:0 0 40px;">Duration and easing tokens. Combine them — never hardcode values.</p>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 16px;">DURATION</h3>
        <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;margin-bottom:40px;">
          ${[
            { token: '--pom-duration-instant', val: '0ms',   use: 'State toggles (checked, active)' },
            { token: '--pom-duration-fast',    val: '100ms', use: 'Hover, focus ring, icon swap' },
            { token: '--pom-duration-normal',  val: '200ms', use: 'Fade in/out, color change' },
            { token: '--pom-duration-slow',    val: '350ms', use: 'Slide, expand, height change' },
            { token: '--pom-duration-enter',   val: '250ms', use: 'Elements entering the view' },
            { token: '--pom-duration-exit',    val: '150ms', use: 'Elements leaving (always faster)' },
          ].map(r => `
            <div style="display:flex;align-items:center;gap:16px;padding:13px 18px;border-bottom:1px solid #0e1627;">
              <span style="font-family:'Space Mono',monospace;font-size:13px;color:#FBB040;min-width:220px;">${r.token}</span>
              <span style="font-family:'Space Mono',monospace;font-size:12px;color:#64748B;min-width:52px;">${r.val}</span>
              <span style="font-size:13px;color:#94A3B8;">${r.use}</span>
            </div>
          `).join('')}
        </div>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 16px;">EASING</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:40px;">
          ${[
            { token: '--pom-ease-out',    val: 'cubic-bezier(0.0,0.0,0.2,1)',    use: 'Enter / decelerate',  hint: 'Things entering screen. Fast start, soft land.' },
            { token: '--pom-ease-in',     val: 'cubic-bezier(0.4,0.0,1.0,1)',    use: 'Exit / accelerate',   hint: 'Things leaving screen. Slow start, fast exit.' },
            { token: '--pom-ease-in-out', val: 'cubic-bezier(0.4,0.0,0.2,1)',    use: 'Move / standard',     hint: 'Moving between states. Balanced feel.' },
            { token: '--pom-ease-spring', val: 'cubic-bezier(0.34,1.56,0.64,1)', use: 'Spring / overshoot',  hint: 'Playful bounce. Use sparingly for delight.' },
          ].map(r => `
            <div style="background:#08192E;border:1px solid #1C2541;border-radius:12px;padding:20px;">
              <div style="font-family:'Space Mono',monospace;font-size:12px;color:#FBB040;margin-bottom:8px;">${r.token}</div>
              <div style="font-weight:600;font-size:14px;margin-bottom:4px;">${r.use}</div>
              <div style="font-size:13px;color:#64748B;margin-bottom:14px;line-height:1.5;">${r.hint}</div>
              <div style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;word-break:break-all;">${r.val}</div>
            </div>
          `).join('')}
        </div>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 16px;">DURATION DEMO — hover each bar</h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${[
            { label: 'fast (100ms)',   dur: '100ms' },
            { label: 'normal (200ms)', dur: '200ms' },
            { label: 'slow (350ms)',   dur: '350ms' },
            { label: 'enter (250ms)',  dur: '250ms' },
          ].map(r => `
            <div style="display:flex;align-items:center;gap:16px;">
              <span style="font-family:'Space Mono',monospace;font-size:12px;color:#64748B;min-width:120px;">${r.label}</span>
              <div class="pom-demo-track" style="flex:1;height:20px;background:#08192E;border:1px solid #1C2541;border-radius:4px;overflow:hidden;cursor:pointer;">
                <div class="pom-demo-bar" style="transition-duration:${r.dur};"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:40px;background:#08192E;border:1px solid #1C2541;border-radius:12px;padding:20px 24px;">
          <p style="font-family:'Space Mono',monospace;font-size:11px;color:#94A3B8;letter-spacing:0.06em;margin:0 0 12px;">RULE OF THUMB</p>
          <ul style="font-size:14px;color:#64748B;line-height:1.9;margin:0;padding-left:20px;">
            <li>Exit always shorter than enter (150ms vs 250ms)</li>
            <li>Use <span style="color:#FBB040;">ease-out</span> for enter, <span style="color:#FBB040;">ease-in</span> for exit</li>
            <li>Never animate layout properties (width/height) — animate transform instead</li>
            <li>Respect <span style="color:#FBB040;">prefers-reduced-motion</span> — skip or reduce all animation</li>
          </ul>
        </div>
      </div>
    </div>
  `),
};
