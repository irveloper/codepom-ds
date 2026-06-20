const n={title:"Foundations/Elevation"},a=[{level:0,token:"--cp-shadow-0",shadow:"none",use:"Flat surface",desc:"Inline elements, disabled states, table rows"},{level:1,token:"--cp-shadow-1",shadow:"0 1px 2px 0 rgba(5,10,24,0.4)",use:"Resting card",desc:"Default cards, input fields, badges"},{level:2,token:"--cp-shadow-2",shadow:"0 2px 8px 0 rgba(5,10,24,0.5), 0 1px 2px 0 rgba(5,10,24,0.3)",use:"Raised element",desc:"Dropdowns, select menus, hover states"},{level:3,token:"--cp-shadow-3",shadow:"0 4px 16px 0 rgba(5,10,24,0.6), 0 2px 4px 0 rgba(5,10,24,0.3)",use:"Floating panel",desc:"Tooltips, popovers, date pickers"},{level:4,token:"--cp-shadow-4",shadow:"0 8px 32px 0 rgba(5,10,24,0.7), 0 4px 8px 0 rgba(5,10,24,0.4)",use:"Modal / Drawer",desc:"Dialog boxes, side sheets, sticky headers"},{level:5,token:"--cp-shadow-5",shadow:"0 16px 48px 0 rgba(5,10,24,0.8), 0 8px 16px 0 rgba(5,10,24,0.5)",use:"Spotlight",desc:"Command palette, full-screen overlays"}],e={name:"Scale",parameters:{layout:"fullscreen"},render:()=>`
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:40px;min-height:100vh;">
      <div style="max-width:820px;margin:0 auto;">
        <h1 style="font-size:34px;font-weight:700;letter-spacing:-0.025em;margin:0 0 8px;">Elevation</h1>
        <p style="color:#94A3B8;font-size:16px;margin:0 0 40px;">6-level shadow system. Navy-tinted shadows preserve depth on dark surfaces.</p>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:48px;">
          ${a.map(o=>`
            <div style="background:#0e1c35;border-radius:14px;padding:28px 24px;box-shadow:${o.shadow};display:flex;flex-direction:column;gap:12px;position:relative;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <span style="font-size:22px;font-weight:700;color:#FBB040;">${o.level}</span>
                <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;background:#0B132B;padding:3px 8px;border-radius:4px;">shadow-${o.level}</span>
              </div>
              <div>
                <div style="font-weight:600;font-size:15px;margin-bottom:4px;">${o.use}</div>
                <div style="font-size:13px;color:#64748B;line-height:1.5;">${o.desc}</div>
              </div>
              <div style="font-family:'Space Mono',monospace;font-size:10px;color:#1C2541;margin-top:4px;word-break:break-all;line-height:1.6;">${o.shadow}</div>
            </div>
          `).join("")}
        </div>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 16px;">TOKEN REFERENCE</h3>
        <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;">
          ${a.map(o=>`
            <div style="display:flex;align-items:center;gap:16px;padding:13px 18px;border-bottom:1px solid #0e1627;">
              <span style="font-family:'Space Mono',monospace;font-size:13px;color:#FBB040;min-width:180px;">${o.token}</span>
              <div style="width:32px;height:32px;background:#0e1c35;border-radius:8px;box-shadow:${o.shadow};flex:none;"></div>
              <span style="font-size:13px;color:#94A3B8;min-width:140px;">${o.use}</span>
              <span style="font-size:12px;color:#3A506B;">${o.desc}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `},p={name:"In Context",parameters:{layout:"fullscreen"},render:()=>`
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:60px 40px;min-height:100vh;position:relative;">
      <div style="max-width:680px;margin:0 auto;position:relative;">
        <p style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;margin:0 0 40px;">REAL-WORLD STACKING</p>

        <!-- Page background = shadow-0 -->
        <div style="background:#0B132B;border-radius:16px;padding:32px;margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-0 · page</span>
          <p style="margin:0;color:#64748B;font-size:14px;">App canvas — flat, no lift</p>
        </div>

        <!-- Card = shadow-1 -->
        <div style="background:#08192E;border-radius:14px;padding:28px;box-shadow:0 1px 2px 0 rgba(5,10,24,0.4);margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-1 · card</span>
          <p style="margin:0 0 16px;font-weight:600;">Dashboard Card</p>
          <p style="margin:0;color:#64748B;font-size:14px;">Resting surface. Barely lifts from background.</p>

          <!-- Dropdown inside card = shadow-2 -->
          <div style="background:#0e1c35;border:1px solid #1C2541;border-radius:10px;padding:14px 16px;box-shadow:0 2px 8px 0 rgba(5,10,24,0.5), 0 1px 2px 0 rgba(5,10,24,0.3);margin-top:16px;position:relative;">
            <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:10px;right:12px;">shadow-2 · dropdown</span>
            <p style="margin:0;font-size:13px;color:#94A3B8;">Select menu / dropdown panel</p>
          </div>
        </div>

        <!-- Tooltip floating = shadow-3 -->
        <div style="background:#1C2541;border-radius:8px;padding:10px 14px;box-shadow:0 4px 16px 0 rgba(5,10,24,0.6), 0 2px 4px 0 rgba(5,10,24,0.3);display:inline-block;margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:-18px;left:0;">shadow-3 · tooltip</span>
          <p style="margin:0;font-size:13px;">Tooltip / popover</p>
        </div>

        <!-- Modal overlay = shadow-4 -->
        <div style="background:#08192E;border:1px solid #1C2541;border-radius:16px;padding:32px;box-shadow:0 8px 32px 0 rgba(5,10,24,0.7), 0 4px 8px 0 rgba(5,10,24,0.4);margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-4 · modal</span>
          <p style="margin:0 0 8px;font-weight:600;font-size:16px;">Confirm Action</p>
          <p style="margin:0;color:#64748B;font-size:14px;">Modal dialog — clearly above everything on the page.</p>
          <div style="display:flex;gap:10px;margin-top:20px;">
            <button style="background:#FBB040;color:#0B132B;border:none;padding:8px 18px;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;">Confirm</button>
            <button style="background:transparent;color:#94A3B8;border:1px solid #1C2541;padding:8px 18px;border-radius:8px;font-size:13px;cursor:pointer;">Cancel</button>
          </div>
        </div>

        <!-- Command palette = shadow-5 -->
        <div style="background:#08192E;border:1px solid #1C2541;border-radius:14px;padding:20px 24px;box-shadow:0 16px 48px 0 rgba(5,10,24,0.8), 0 8px 16px 0 rgba(5,10,24,0.5);position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-5 · command palette</span>
          <div style="display:flex;align-items:center;gap:10px;border:1px solid #1C2541;border-radius:8px;padding:10px 14px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3A506B" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span style="font-size:14px;color:#3A506B;">Search commands…</span>
            <span style="font-family:'Space Mono',monospace;font-size:10px;color:#1C2541;margin-left:auto;border:1px solid #1C2541;padding:2px 6px;border-radius:4px;">⌘K</span>
          </div>
        </div>
      </div>
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Scale',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => \`
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:40px;min-height:100vh;">
      <div style="max-width:820px;margin:0 auto;">
        <h1 style="font-size:34px;font-weight:700;letter-spacing:-0.025em;margin:0 0 8px;">Elevation</h1>
        <p style="color:#94A3B8;font-size:16px;margin:0 0 40px;">6-level shadow system. Navy-tinted shadows preserve depth on dark surfaces.</p>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:48px;">
          \${levels.map(l => \`
            <div style="background:#0e1c35;border-radius:14px;padding:28px 24px;box-shadow:\${l.shadow};display:flex;flex-direction:column;gap:12px;position:relative;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <span style="font-size:22px;font-weight:700;color:#FBB040;">\${l.level}</span>
                <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;background:#0B132B;padding:3px 8px;border-radius:4px;">shadow-\${l.level}</span>
              </div>
              <div>
                <div style="font-weight:600;font-size:15px;margin-bottom:4px;">\${l.use}</div>
                <div style="font-size:13px;color:#64748B;line-height:1.5;">\${l.desc}</div>
              </div>
              <div style="font-family:'Space Mono',monospace;font-size:10px;color:#1C2541;margin-top:4px;word-break:break-all;line-height:1.6;">\${l.shadow}</div>
            </div>
          \`).join('')}
        </div>

        <h3 style="font-size:14px;font-family:'Space Mono',monospace;color:#94A3B8;letter-spacing:0.08em;margin:0 0 16px;">TOKEN REFERENCE</h3>
        <div style="border:1px solid #1C2541;border-radius:12px;overflow:hidden;">
          \${levels.map(l => \`
            <div style="display:flex;align-items:center;gap:16px;padding:13px 18px;border-bottom:1px solid #0e1627;">
              <span style="font-family:'Space Mono',monospace;font-size:13px;color:#FBB040;min-width:180px;">\${l.token}</span>
              <div style="width:32px;height:32px;background:#0e1c35;border-radius:8px;box-shadow:\${l.shadow};flex:none;"></div>
              <span style="font-size:13px;color:#94A3B8;min-width:140px;">\${l.use}</span>
              <span style="font-size:12px;color:#3A506B;">\${l.desc}</span>
            </div>
          \`).join('')}
        </div>
      </div>
    </div>
  \`
}`,...e.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'In Context',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => \`
    <div style="font-family:'Space Grotesk',sans-serif;background:#0B132B;color:#F8FAFC;padding:60px 40px;min-height:100vh;position:relative;">
      <div style="max-width:680px;margin:0 auto;position:relative;">
        <p style="font-family:'Space Mono',monospace;font-size:11px;color:#3A506B;letter-spacing:0.06em;margin:0 0 40px;">REAL-WORLD STACKING</p>

        <!-- Page background = shadow-0 -->
        <div style="background:#0B132B;border-radius:16px;padding:32px;margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-0 · page</span>
          <p style="margin:0;color:#64748B;font-size:14px;">App canvas — flat, no lift</p>
        </div>

        <!-- Card = shadow-1 -->
        <div style="background:#08192E;border-radius:14px;padding:28px;box-shadow:0 1px 2px 0 rgba(5,10,24,0.4);margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-1 · card</span>
          <p style="margin:0 0 16px;font-weight:600;">Dashboard Card</p>
          <p style="margin:0;color:#64748B;font-size:14px;">Resting surface. Barely lifts from background.</p>

          <!-- Dropdown inside card = shadow-2 -->
          <div style="background:#0e1c35;border:1px solid #1C2541;border-radius:10px;padding:14px 16px;box-shadow:0 2px 8px 0 rgba(5,10,24,0.5), 0 1px 2px 0 rgba(5,10,24,0.3);margin-top:16px;position:relative;">
            <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:10px;right:12px;">shadow-2 · dropdown</span>
            <p style="margin:0;font-size:13px;color:#94A3B8;">Select menu / dropdown panel</p>
          </div>
        </div>

        <!-- Tooltip floating = shadow-3 -->
        <div style="background:#1C2541;border-radius:8px;padding:10px 14px;box-shadow:0 4px 16px 0 rgba(5,10,24,0.6), 0 2px 4px 0 rgba(5,10,24,0.3);display:inline-block;margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:-18px;left:0;">shadow-3 · tooltip</span>
          <p style="margin:0;font-size:13px;">Tooltip / popover</p>
        </div>

        <!-- Modal overlay = shadow-4 -->
        <div style="background:#08192E;border:1px solid #1C2541;border-radius:16px;padding:32px;box-shadow:0 8px 32px 0 rgba(5,10,24,0.7), 0 4px 8px 0 rgba(5,10,24,0.4);margin-bottom:24px;position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-4 · modal</span>
          <p style="margin:0 0 8px;font-weight:600;font-size:16px;">Confirm Action</p>
          <p style="margin:0;color:#64748B;font-size:14px;">Modal dialog — clearly above everything on the page.</p>
          <div style="display:flex;gap:10px;margin-top:20px;">
            <button style="background:#FBB040;color:#0B132B;border:none;padding:8px 18px;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;">Confirm</button>
            <button style="background:transparent;color:#94A3B8;border:1px solid #1C2541;padding:8px 18px;border-radius:8px;font-size:13px;cursor:pointer;">Cancel</button>
          </div>
        </div>

        <!-- Command palette = shadow-5 -->
        <div style="background:#08192E;border:1px solid #1C2541;border-radius:14px;padding:20px 24px;box-shadow:0 16px 48px 0 rgba(5,10,24,0.8), 0 8px 16px 0 rgba(5,10,24,0.5);position:relative;">
          <span style="font-family:'Space Mono',monospace;font-size:10px;color:#3A506B;position:absolute;top:12px;right:16px;">shadow-5 · command palette</span>
          <div style="display:flex;align-items:center;gap:10px;border:1px solid #1C2541;border-radius:8px;padding:10px 14px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3A506B" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span style="font-size:14px;color:#3A506B;">Search commands…</span>
            <span style="font-family:'Space Mono',monospace;font-size:10px;color:#1C2541;margin-left:auto;border:1px solid #1C2541;padding:2px 6px;border-radius:4px;">⌘K</span>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...p.parameters?.docs?.source}}};const i=["Scale","InContext"];export{p as InContext,e as Scale,i as __namedExportsOrder,n as default};
