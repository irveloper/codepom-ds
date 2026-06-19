import type { Meta, StoryObj } from '@storybook-astro/framework';
import Card from '../components/Card.astro';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const FeatureCard: Story = {
  parameters: {
    slots: {
      default: `
        <div style="height:88px;background:linear-gradient(120deg,#0f2747,#1C2541);display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 200 200" width="56" height="56" aria-hidden="true">
            <path d="M 70 48 L 50 14 L 96 40 Z" fill="#FBB040"/>
            <path d="M 130 48 L 150 14 L 104 40 Z" fill="#FBB040"/>
            <path d="M 72 44 L 60 24 L 86 40 Z" fill="#5A2E12"/>
            <path d="M 128 44 L 140 24 L 114 40 Z" fill="#5A2E12"/>
            <path d="M 100.0 38.0 Q 116.0 27.6 126.8 43.3 Q 145.6 39.8 149.5 58.5 Q 168.2 62.4 164.7 81.2 Q 180.4 92.0 170.0 108.0 Q 180.4 124.0 164.7 134.8 Q 168.2 153.6 149.5 157.5 Q 145.6 176.2 126.8 172.7 Q 116.0 188.4 100.0 178.0 Q 84.0 188.4 73.2 172.7 Q 54.4 176.2 50.5 157.5 Q 31.8 153.6 35.3 134.8 Q 19.6 124.0 30.0 108.0 Q 19.6 92.0 35.3 81.2 Q 31.8 62.4 50.5 58.5 Q 54.4 39.8 73.2 43.3 Q 84.0 27.6 100.0 38.0 Z" fill="#FBE6C4"/>
            <path d="M 35 100 Q 30 58 60 44 Q 100 28 140 44 Q 170 58 165 100 Q 140 76 100 74 Q 60 76 35 100 Z" fill="#FBB040"/>
            <rect x="44" y="92" width="48" height="36" rx="10" fill="#0B192E" stroke="#FBB040" stroke-width="7"/>
            <rect x="108" y="92" width="48" height="36" rx="10" fill="#0B192E" stroke="#FBB040" stroke-width="7"/>
            <rect x="92" y="100" width="16" height="9" fill="#FBB040"/>
          </svg>
        </div>
        <div style="padding:18px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            <span style="font-weight:700;font-size:16px;">Web Platform</span>
            <span style="font-family:'Space Mono',monospace;font-size:10px;background:rgba(0,223,255,0.15);color:#00DFFF;padding:2px 7px;border-radius:5px;">NEW</span>
          </div>
          <p style="margin:0 0 16px;font-size:13px;color:#94A3B8;line-height:1.5;">Resilient, well-tested frontend engineering built to ship.</p>
          <button style="width:100%;font-family:'Space Grotesk',sans-serif;font-weight:600;background:#FBB040;color:#08192E;border:none;border-radius:8px;cursor:pointer;font-size:14px;padding:9px;">Get started</button>
        </div>
      `,
    },
  },
};

export const StatCard: Story = {
  parameters: {
    slots: {
      default: `
        <div style="padding:22px;display:flex;flex-direction:column;gap:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:13px;color:#94A3B8;">Deploy frequency</span>
            <span style="color:#00DFFF;">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="#00DFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="14" y="14" width="20" height="20" rx="3"/>
                <rect x="20" y="20" width="8" height="8" rx="1" stroke="#00DFFF"/>
                <path d="M19 14 v-5 M29 14 v-5 M19 34 v5 M29 34 v5 M14 19 h-5 M14 29 h-5 M34 19 h5 M34 29 h5"/>
              </svg>
            </span>
          </div>
          <div style="font-size:40px;font-weight:700;letter-spacing:-0.03em;line-height:1;">42<span style="font-size:18px;color:#64748B;">/wk</span></div>
          <div style="display:flex;align-items:center;gap:6px;font-size:13px;color:#4ADE80;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
            +18% vs last month
          </div>
          <div style="height:6px;background:#1C2541;border-radius:99px;overflow:hidden;">
            <div style="width:72%;height:100%;background:linear-gradient(90deg,#FBB040,#00DFFF);"></div>
          </div>
        </div>
      `,
    },
  },
};

export const ProfileCard: Story = {
  parameters: {
    slots: {
      default: `
        <div style="padding:22px;display:flex;flex-direction:column;gap:14px;">
          <div style="width:48px;height:48px;border-radius:12px;background:#0B132B;border:1px solid #1C2541;padding:6px;">
            <svg viewBox="0 0 200 200" width="36" height="36" aria-hidden="true">
              <path d="M 100.0 38.0 Q 116.0 27.6 126.8 43.3 Q 145.6 39.8 149.5 58.5 Q 168.2 62.4 164.7 81.2 Q 180.4 92.0 170.0 108.0 Q 180.4 124.0 164.7 134.8 Q 168.2 153.6 149.5 157.5 Q 145.6 176.2 126.8 172.7 Q 116.0 188.4 100.0 178.0 Q 84.0 188.4 73.2 172.7 Q 54.4 176.2 50.5 157.5 Q 31.8 153.6 35.3 134.8 Q 19.6 124.0 30.0 108.0 Q 19.6 92.0 35.3 81.2 Q 31.8 62.4 50.5 58.5 Q 54.4 39.8 73.2 43.3 Q 84.0 27.6 100.0 38.0 Z" fill="#FBB040"/>
            </svg>
          </div>
          <div><div style="font-weight:700;font-size:16px;">Maya Chen</div><div style="font-size:13px;color:#94A3B8;">Lead Engineer</div></div>
          <div style="font-family:'Space Mono',monospace;font-size:12px;color:#00DFFF;">maya@codepom.com</div>
          <div style="display:flex;gap:8px;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;border:1px solid #1C2541;border-radius:6px;padding:3px 9px;color:#94A3B8;">React</span>
            <span style="font-family:'Space Mono',monospace;font-size:11px;border:1px solid #1C2541;border-radius:6px;padding:3px 9px;color:#94A3B8;">Go</span>
          </div>
        </div>
      `,
    },
  },
};
