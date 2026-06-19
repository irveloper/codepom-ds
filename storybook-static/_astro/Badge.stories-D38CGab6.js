const m=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};m.isAstroComponentFactory=!0;m.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Badge.astro";const p={title:"Components/Badge",component:m,argTypes:{variant:{control:"select",options:["primary","accent","secondary","outline","warning"]},dot:{control:"boolean"}}},r={args:{variant:"primary"},parameters:{slots:{default:"Primary"}}},a={args:{variant:"accent"},parameters:{slots:{default:"Accent"}}},e={args:{variant:"secondary"},parameters:{slots:{default:"Secondary"}}},n={args:{variant:"outline"},parameters:{slots:{default:"Outline"}}},s={args:{variant:"warning"},parameters:{slots:{default:"Warning"}}},t={args:{variant:"secondary",dot:!0},parameters:{slots:{default:"Live"}}},o={args:{variant:"secondary",dot:!0},parameters:{slots:{default:"Building"}}},c={args:{variant:"accent",icon:!0},parameters:{slots:{default:"Verified"}}},i={args:{variant:"secondary",mono:!0},parameters:{slots:{default:"v1.0.0"}}},d={args:{variant:"warning",icon:!0},parameters:{slots:{default:"Draft"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  parameters: {
    slots: {
      default: 'Primary'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  },
  parameters: {
    slots: {
      default: 'Accent'
    }
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  },
  parameters: {
    slots: {
      default: 'Secondary'
    }
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  parameters: {
    slots: {
      default: 'Outline'
    }
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  },
  parameters: {
    slots: {
      default: 'Warning'
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    dot: true
  },
  parameters: {
    slots: {
      default: 'Live'
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    dot: true
  },
  parameters: {
    slots: {
      default: 'Building'
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    icon: true
  },
  parameters: {
    slots: {
      default: 'Verified'
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    mono: true
  },
  parameters: {
    slots: {
      default: 'v1.0.0'
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    icon: true
  },
  parameters: {
    slots: {
      default: 'Draft'
    }
  }
}`,...d.parameters?.docs?.source}}};const u=["Primary","Accent","Secondary","Outline","Warning","Live","Building","Verified","VersionChip","WarningWithIcon"];export{a as Accent,o as Building,t as Live,n as Outline,r as Primary,e as Secondary,c as Verified,i as VersionChip,s as Warning,d as WarningWithIcon,u as __namedExportsOrder,p as default};
