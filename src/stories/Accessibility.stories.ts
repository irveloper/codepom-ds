import type { Meta, StoryObj } from '@storybook-astro/framework';

const meta: Meta = {
  title: 'Foundations/Accessibility',
};

export default meta;

const pass = `<span style="display:inline-flex;align-items:center;gap:5px;color:#4ADE80;font-size:12px;font-weight:600;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>PASS</span>`;
const fail = `<span style="display:inline-flex;align-items:center;gap:5px;color:#F87171;font-size:12px;font-weight:600;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>FAIL</span>`;
const warn = `<span style="display:inline-flex;align-items:center;gap:5px;color:#FB923C;font-size:12px;font-weight:600;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>WARN</span>`;

const swatch = (hex: string) =>
  `<span style="display:inline-block;width:20px;height:20px;background:${hex};border-radius:4px;border:1px solid rgba(255,255,255,0.1);vertical-align:middle;margin-right:6px;"></span>`;

export const ContrastAudit: StoryObj = {
  name: 'Contrast Audit',
  parameters: { layout: 'fullscreen' },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;padding:40px;min-height:100vh;color:#F8FAFC;">
      <div style="max-width:820px;margin:0 auto;">
        <h1 style="font-size:28px;font-weight:700;margin:0 0 6px;">Accessibility — Contrast Audit</h1>
        <p style="color:#94A3B8;font-size:15px;margin:0 0 6px;">WCAG 2.1 AA requires ≥ 4.5:1 for normal text · ≥ 3:1 for large text (18px+ or 14px bold+)</p>
        <p style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;margin:0 0 36px;">All measurements against navy-900 (#0B132B) background</p>

        <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;margin-bottom:40px;">
          <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;background:#08192E;padding:10px 16px;border-bottom:1px solid #1C2541;">
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;">COLOR PAIR</span>
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;">RATIO</span>
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;">AA NORMAL</span>
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;">AA LARGE</span>
            <span style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;">USE</span>
          </div>
          ${[
            { fg:'#F8FAFC', bg:'#0B132B', label:'text-primary on bg',     ratio:'17.6', aN:pass, aL:pass, use:'Body copy, headings' },
            { fg:'#94A3B8', bg:'#0B132B', label:'text-secondary on bg',   ratio:'7.2',  aN:pass, aL:pass, use:'Labels, captions' },
            { fg:'#64748B', bg:'#0B132B', label:'text-tertiary on bg',     ratio:'3.9',  aN:fail, aL:pass, use:'Large text / decorative only' },
            { fg:'#3A506B', bg:'#0B132B', label:'navy-700 on bg',          ratio:'2.2',  aN:fail, aL:fail, use:'Borders & dividers — NO text' },
            { fg:'#FBB040', bg:'#0B132B', label:'amber-400 on bg',         ratio:'9.97', aN:pass, aL:pass, use:'Primary interactive' },
            { fg:'#00DFFF', bg:'#0B132B', label:'cyan-400 on bg',          ratio:'11.4', aN:pass, aL:pass, use:'Accent / status' },
            { fg:'#4ADE80', bg:'#0B132B', label:'success on bg',           ratio:'10.6', aN:pass, aL:pass, use:'Success states' },
            { fg:'#FB923C', bg:'#0B132B', label:'warning on bg',           ratio:'8.1',  aN:pass, aL:pass, use:'Warning states' },
            { fg:'#F87171', bg:'#0B132B', label:'error on bg',             ratio:'6.7',  aN:pass, aL:pass, use:'Error states' },
            { fg:'#0B132B', bg:'#FBB040', label:'navy on amber (buttons)', ratio:'9.97', aN:pass, aL:pass, use:'Primary button text' },
            { fg:'#0B132B', bg:'#00DFFF', label:'navy on cyan (buttons)',  ratio:'11.4', aN:pass, aL:pass, use:'Accent button text' },
          ].map(r => `
            <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;padding:12px 16px;border-bottom:1px solid #0e1627;align-items:center;">
              <span style="font-size:13px;color:#F8FAFC;">${swatch(r.fg)}${r.label}</span>
              <span style="font-family:'Space Mono',monospace;font-size:13px;color:#FBB040;">${r.ratio}:1</span>
              <span>${r.aN}</span>
              <span>${r.aL}</span>
              <span style="font-size:12px;color:#64748B;">${r.use}</span>
            </div>
          `).join('')}
        </div>

        <div style="background:rgba(248,113,113,0.06);border:1px solid rgba(248,113,113,0.2);border-radius:12px;padding:18px 20px;margin-bottom:24px;">
          <p style="font-weight:600;color:#F87171;font-size:14px;margin:0 0 8px;">⚠ Action required: navy-700 (#3A506B)</p>
          <p style="font-size:13px;color:#94A3B8;margin:0;line-height:1.6;">
            Ratio 2.2:1 — fails all WCAG thresholds. <strong style="color:#F8FAFC;">Never use as text color.</strong>
            Valid uses: borders, dividers, icon strokes, decorative separators.
            For secondary text use <code style="background:#1C2541;padding:2px 6px;border-radius:4px;font-family:'Space Mono',monospace;">#94A3B8</code> (text-secondary, 7.2:1).
          </p>
        </div>

        <div style="background:rgba(74,222,128,0.06);border:1px solid rgba(74,222,128,0.2);border-radius:12px;padding:18px 20px;">
          <p style="font-weight:600;color:#4ADE80;font-size:14px;margin:0 0 8px;">✓ 10 of 11 pairs pass WCAG AA</p>
          <p style="font-size:13px;color:#94A3B8;margin:0;line-height:1.6;">
            All interactive colors, feedback states, and primary/secondary text pass WCAG AA for normal text.
            text-tertiary (#64748B) is approved for large text and decorative use only.
          </p>
        </div>
      </div>
    </div>
  `,
};

export const FocusRings: StoryObj = {
  name: 'Focus Rings',
  parameters: { layout: 'centered' },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;padding:40px;border-radius:16px;min-width:480px;">
      <p style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;margin:0 0 20px;">TAB THROUGH TO SEE FOCUS RINGS</p>
      <div style="display:flex;flex-direction:column;gap:14px;">
        <button style="background:#FBB040;color:#0B132B;border:none;padding:10px 20px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;font-family:'Space Grotesk',sans-serif;width:fit-content;">Primary button</button>
        <button style="background:transparent;color:#94A3B8;border:1px solid #1C2541;padding:10px 20px;border-radius:8px;font-size:14px;cursor:pointer;font-family:'Space Grotesk',sans-serif;width:fit-content;">Secondary button</button>
        <input type="text" placeholder="Text input" style="background:#08192E;border:1px solid #1C2541;border-radius:8px;padding:10px 14px;color:#F8FAFC;font-size:14px;font-family:'Space Grotesk',sans-serif;outline:none;max-width:260px;" onfocus="this.style.borderColor='#FBB040';this.style.boxShadow='0 0 0 2px #FBB040'" onblur="this.style.borderColor='#1C2541';this.style.boxShadow='none'" />
        <a href="#" style="color:#FBB040;font-size:14px;text-decoration:underline;width:fit-content;">Focusable link</a>
        <select style="background:#08192E;border:1px solid #1C2541;border-radius:8px;padding:10px 14px;color:#F8FAFC;font-size:14px;font-family:'Space Grotesk',sans-serif;max-width:260px;">
          <option>Select option</option>
        </select>
        <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:#94A3B8;cursor:pointer;">
          <input type="checkbox" style="width:16px;height:16px;accent-color:#FBB040;" />
          Checkbox
        </label>
      </div>
      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #1C2541;">
        <p style="font-size:13px;color:#64748B;margin:0;line-height:1.7;">
          Focus ring: <code style="background:#1C2541;padding:2px 6px;border-radius:4px;font-family:'Space Mono',monospace;font-size:12px;">outline: 2px solid #FBB040; outline-offset: 2px</code><br/>
          Applied via <code style="background:#1C2541;padding:2px 6px;border-radius:4px;font-family:'Space Mono',monospace;font-size:12px;">:focus-visible</code> — keyboard only, invisible on mouse click.
        </p>
      </div>
    </div>
    <style>
      button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible {
        outline: 2px solid #FBB040 !important;
        outline-offset: 2px !important;
        border-radius: 6px;
      }
    </style>
  `,
};

export const ReducedMotion: StoryObj = {
  name: 'Reduced Motion',
  parameters: { layout: 'centered' },
  render: () => `
    <style>
      @keyframes pom-spin { to { transform: rotate(360deg); } }
      @keyframes pom-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      .pom-spin-demo { animation: pom-spin 1s linear infinite; }
      .pom-pulse-demo { animation: pom-pulse 1.5s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .pom-spin-demo, .pom-pulse-demo { animation: none !important; }
        .pom-motion-status { color: #4ADE80 !important; }
        .pom-motion-status::before { content: '✓ '; }
        .pom-motion-status-off { display: none !important; }
      }
    </style>
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;padding:40px;border-radius:16px;min-width:480px;">
      <p style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;margin:0 0 24px;">REDUCED MOTION DEMO</p>

      <p class="pom-motion-status-off" style="font-size:13px;color:#FB923C;margin:0 0 16px;">
        ⚠ prefers-reduced-motion: no-preference — animations active
      </p>
      <p class="pom-motion-status" style="font-size:13px;color:#3A506B;margin:0 0 24px;">
        prefers-reduced-motion: reduce — animations disabled
      </p>

      <div style="display:flex;align-items:center;gap:24px;margin-bottom:32px;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div class="pom-spin-demo" style="width:36px;height:36px;border:3px solid #1C2541;border-top-color:#FBB040;border-radius:50%;"></div>
          <span style="font-size:12px;color:#64748B;">Spinner</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div class="pom-pulse-demo" style="width:100px;height:16px;background:#1C2541;border-radius:4px;"></div>
          <span style="font-size:12px;color:#64748B;">Skeleton</span>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div style="width:8px;height:8px;border-radius:50%;background:#4ADE80;" class="pom-pulse-demo"></div>
          <span style="font-size:12px;color:#64748B;">Status dot</span>
        </div>
      </div>

      <div style="background:#08192E;border:1px solid #1C2541;border-radius:10px;padding:16px 18px;">
        <p style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;margin:0 0 10px;">IMPLEMENTATION</p>
        <pre style="margin:0;font-family:'Space Mono',monospace;font-size:12px;color:#94A3B8;line-height:1.7;"><code><span style="color:#64748B;">/* global.css */</span>
<span style="color:#00DFFF;">@media</span> <span style="color:#FBB040;">(prefers-reduced-motion: reduce)</span> {
  <span style="color:#4ADE80;">*, *::before, *::after</span> {
    animation-duration: <span style="color:#FBB040;">0.01ms</span> !important;
    transition-duration: <span style="color:#FBB040;">0.01ms</span> !important;
  }
}</code></pre>
      </div>
    </div>
  `,
};

export const ARIAPatterns: StoryObj = {
  name: 'ARIA Patterns',
  parameters: { layout: 'fullscreen' },
  render: () => `
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;padding:40px;min-height:100vh;color:#F8FAFC;">
      <div style="max-width:780px;margin:0 auto;">
        <h1 style="font-size:28px;font-weight:700;margin:0 0 6px;">ARIA Patterns</h1>
        <p style="color:#94A3B8;font-size:15px;margin:0 0 36px;">Required attributes per component type. Verified against WAI-ARIA 1.2.</p>

        <div style="display:flex;flex-direction:column;gap:12px;">
          ${[
            { component:'Button',      attrs:['role="button" (implicit on <button>)','aria-disabled when inactive','aria-pressed for toggles','aria-expanded for triggers'],         status:'pass' },
            { component:'Alert',       attrs:['role="alert"','aria-live="polite" for non-urgent','aria-live="assertive" for critical'],                                             status:'pass' },
            { component:'Modal',       attrs:['role="dialog"','aria-modal="true"','aria-labelledby → title id','Focus trapped inside','Escape closes + returns focus'],            status:'pass' },
            { component:'Toast',       attrs:['role="status" / aria-live="polite"','Auto-dismiss ≥ 5s or user-controllable'],                                                      status:'pass' },
            { component:'Tabs',        attrs:['role="tablist" on wrapper','role="tab" on each tab','role="tabpanel" on content','aria-selected on active tab','aria-controls ↔ aria-labelledby'],  status:'pass' },
            { component:'Breadcrumb',  attrs:['<nav aria-label="Breadcrumb">','<ol> with <li> items','aria-current="page" on last item'],                                          status:'pass' },
            { component:'Pagination',  attrs:['<nav aria-label="Pagination">','aria-current="page" on active','aria-label on prev/next buttons','aria-disabled on disabled'],     status:'pass' },
            { component:'Tooltip',     attrs:['role="tooltip" on tip','aria-describedby on trigger','Hidden with aria-hidden when closed','Shown on focus AND hover'],             status:'pass' },
            { component:'Popover',     attrs:['aria-haspopup on trigger','aria-expanded on trigger','aria-controls → panel id','Escape closes + returns focus'],                   status:'pass' },
            { component:'Avatar',      attrs:['alt text on <img>','aria-label on status dot','sr-only name when initials-only'],                                                   status:'pass' },
            { component:'Table',       attrs:['<table> with <thead>/<tbody>','<th scope="col"> on headers','aria-label on icon buttons','aria-sort for sortable columns (TODO)'],  status:'warn' },
            { component:'Form inputs', attrs:['<label> associated via for/id or wrapping','aria-required for required fields','aria-invalid + aria-describedby on error (TODO)'], status:'warn' },
          ].map(r => `
            <div style="background:#08192E;border:1px solid #1C2541;border-radius:12px;padding:16px 18px;display:grid;grid-template-columns:160px 1fr 80px;gap:16px;align-items:start;">
              <div>
                <span style="font-size:14px;font-weight:600;color:#F8FAFC;">${r.component}</span>
              </div>
              <ul style="margin:0;padding-left:16px;display:flex;flex-direction:column;gap:4px;">
                ${r.attrs.map(a => `<li style="font-size:13px;color:#94A3B8;font-family:'Space Mono',monospace;font-size:11px;line-height:1.6;">${a}</li>`).join('')}
              </ul>
              <div style="text-align:right;">
                ${r.status === 'pass' ? pass : warn}
              </div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:32px;background:rgba(251,176,64,0.06);border:1px solid rgba(251,176,64,0.2);border-radius:12px;padding:18px 20px;">
          <p style="font-weight:600;color:#FBB040;font-size:14px;margin:0 0 8px;">2 items need follow-up</p>
          <ul style="margin:0;padding-left:18px;font-size:13px;color:#94A3B8;line-height:1.9;">
            <li><strong style="color:#F8FAFC;">Table:</strong> Add <code style="background:#1C2541;padding:1px 5px;border-radius:3px;font-family:'Space Mono',monospace;">aria-sort</code> to sortable column headers</li>
            <li><strong style="color:#F8FAFC;">Form inputs:</strong> Wire <code style="background:#1C2541;padding:1px 5px;border-radius:3px;font-family:'Space Mono',monospace;">aria-invalid</code> + error <code style="background:#1C2541;padding:1px 5px;border-radius:3px;font-family:'Space Mono',monospace;">aria-describedby</code></li>
          </ul>
        </div>
      </div>
    </div>
  `,
};
