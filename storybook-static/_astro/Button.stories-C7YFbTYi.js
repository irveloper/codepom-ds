const u=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};u.isAstroComponentFactory=!0;u.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Button.astro";const g={title:"Components/Button",component:u,argTypes:{variant:{control:"select",options:["primary","secondary","accent","outline","ghost","destructive"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},e={args:{variant:"primary",size:"md"},parameters:{slots:{default:"Primary"}}},r={args:{variant:"secondary",size:"md"},parameters:{slots:{default:"Secondary"}}},a={args:{variant:"accent",size:"md"},parameters:{slots:{default:"Accent"}}},s={args:{variant:"outline",size:"md"},parameters:{slots:{default:"Outline"}}},t={args:{variant:"ghost",size:"md"},parameters:{slots:{default:"Ghost"}}},n={args:{variant:"destructive",size:"md"},parameters:{slots:{default:"Destructive"}}},o={args:{variant:"primary",size:"sm"},parameters:{slots:{default:"Small"}}},i={args:{variant:"primary",size:"md"},parameters:{slots:{default:"Medium"}}},c={args:{variant:"primary",size:"lg"},parameters:{slots:{default:"Large"}}},d={args:{variant:"primary",size:"md",disabled:!0},parameters:{slots:{default:"Disabled"}}},m={args:{variant:"primary",size:"md"},parameters:{slots:{default:`
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
        New project
      `}}},l={args:{variant:"secondary",size:"md"},parameters:{slots:{default:`
        <span style="font-family:'Space Mono',monospace;color:#00DFFF;">{ }</span>
        Deploying…
      `}}},p={args:{variant:"secondary",size:"md"},parameters:{slots:{default:`
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
      `}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    slots: {
      default: 'Primary'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  },
  parameters: {
    slots: {
      default: 'Secondary'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    size: 'md'
  },
  parameters: {
    slots: {
      default: 'Accent'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md'
  },
  parameters: {
    slots: {
      default: 'Outline'
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md'
  },
  parameters: {
    slots: {
      default: 'Ghost'
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    size: 'md'
  },
  parameters: {
    slots: {
      default: 'Destructive'
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm'
  },
  parameters: {
    slots: {
      default: 'Small'
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    slots: {
      default: 'Medium'
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg'
  },
  parameters: {
    slots: {
      default: 'Large'
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true
  },
  parameters: {
    slots: {
      default: 'Disabled'
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  },
  parameters: {
    slots: {
      default: \`
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
        New project
      \`
    }
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  },
  parameters: {
    slots: {
      default: \`
        <span style="font-family:'Space Mono',monospace;color:#00DFFF;">{ }</span>
        Deploying…
      \`
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  },
  parameters: {
    slots: {
      default: \`
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
      \`
    }
  }
}`,...p.parameters?.docs?.source}}};const v=["Primary","Secondary","Accent","Outline","Ghost","Destructive","Small","Medium","Large","Disabled","WithIcon","Loading","IconOnly"];export{a as Accent,n as Destructive,d as Disabled,t as Ghost,p as IconOnly,c as Large,l as Loading,i as Medium,s as Outline,e as Primary,r as Secondary,o as Small,m as WithIcon,v as __namedExportsOrder,g as default};
