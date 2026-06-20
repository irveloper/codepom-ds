import{P as s}from"./_astro-stub-JVWANnFD.js";const d={title:"Foundations/Logo & Mascot",component:s,argTypes:{variant:{control:"select",options:["full","solid","line"]},theme:{control:"select",options:["light","dark"]},size:{control:{type:"range",min:16,max:300,step:8}}}},e={name:"Full Color",parameters:{layout:"centered",backgrounds:{default:"light"}},args:{variant:"full",theme:"light",size:200}},a={name:"Solid — Light",parameters:{layout:"centered",backgrounds:{default:"light"}},args:{variant:"solid",theme:"light",size:200}},t={name:"Solid — Dark",parameters:{layout:"centered",backgrounds:{default:"dark"}},args:{variant:"solid",theme:"dark",size:200}},n={name:"Line Art — Light",parameters:{layout:"centered",backgrounds:{default:"light"}},args:{variant:"line",theme:"light",size:200}},r={name:"Line Art — Dark",parameters:{layout:"centered",backgrounds:{default:"dark"}},args:{variant:"line",theme:"dark",size:200}},o={name:"All Variants",parameters:{layout:"centered"},render:()=>`
    <div style="font-family:'Space Grotesk',sans-serif;display:grid;grid-template-columns:1fr 1fr;gap:0;border-radius:16px;overflow:hidden;width:480px;">
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-full.svg" width="120" height="112" style="object-fit:contain;" alt="Full color" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">FULL COLOR</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-full.svg" width="120" height="112" style="object-fit:contain;" alt="Full color dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">FULL COLOR / DARK</span>
      </div>
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-solid-light.svg" width="120" height="112" style="object-fit:contain;" alt="Solid light" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">SOLID / LIGHT</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-solid-dark.svg" width="120" height="112" style="object-fit:contain;" alt="Solid dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">SOLID / DARK</span>
      </div>
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-lineart-light.svg" width="120" height="112" style="object-fit:contain;" alt="Line art light" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">LINE ART / LIGHT</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-lineart-dark.svg" width="120" height="112" style="object-fit:contain;" alt="Line art dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">LINE ART / DARK</span>
      </div>
    </div>
  `},i={parameters:{layout:"centered",backgrounds:{default:"light"}},args:{variant:"full",theme:"light",size:32}},l={parameters:{layout:"centered",backgrounds:{default:"dark"}},args:{variant:"full",theme:"dark",size:48}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Full Color',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    variant: 'full',
    theme: 'light',
    size: 200
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Solid — Light',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    variant: 'solid',
    theme: 'light',
    size: 200
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Solid — Dark',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    variant: 'solid',
    theme: 'dark',
    size: 200
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Line Art — Light',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    variant: 'line',
    theme: 'light',
    size: 200
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Line Art — Dark',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    variant: 'line',
    theme: 'dark',
    size: 200
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  parameters: {
    layout: 'centered'
  },
  render: () => \`
    <div style="font-family:'Space Grotesk',sans-serif;display:grid;grid-template-columns:1fr 1fr;gap:0;border-radius:16px;overflow:hidden;width:480px;">
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-full.svg" width="120" height="112" style="object-fit:contain;" alt="Full color" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">FULL COLOR</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-full.svg" width="120" height="112" style="object-fit:contain;" alt="Full color dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">FULL COLOR / DARK</span>
      </div>
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-solid-light.svg" width="120" height="112" style="object-fit:contain;" alt="Solid light" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">SOLID / LIGHT</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-solid-dark.svg" width="120" height="112" style="object-fit:contain;" alt="Solid dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">SOLID / DARK</span>
      </div>
      <div style="background:#f8fafc;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-lineart-light.svg" width="120" height="112" style="object-fit:contain;" alt="Line art light" />
        <span style="font-size:11px;color:#64748b;letter-spacing:0.06em;font-family:'Space Mono',monospace;">LINE ART / LIGHT</span>
      </div>
      <div style="background:#0e1627;padding:32px;display:flex;flex-direction:column;align-items:center;gap:12px;">
        <img src="/logo-lineart-dark.svg" width="120" height="112" style="object-fit:contain;" alt="Line art dark" />
        <span style="font-size:11px;color:#475569;letter-spacing:0.06em;font-family:'Space Mono',monospace;">LINE ART / DARK</span>
      </div>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    variant: 'full',
    theme: 'light',
    size: 32
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    variant: 'full',
    theme: 'dark',
    size: 48
  }
}`,...l.parameters?.docs?.source}}};const p=["FullColor","SolidLight","SolidDark","LineArtLight","LineArtDark","AllVariants","Small","Favicon"];export{o as AllVariants,l as Favicon,e as FullColor,r as LineArtDark,n as LineArtLight,i as Small,t as SolidDark,a as SolidLight,p as __namedExportsOrder,d as default};
