const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Toggle.astro";const s={title:"Components/Form Controls/Toggle",component:r,argTypes:{label:{control:"text"},hint:{control:"text"},checked:{control:"boolean"}}},e={args:{label:"Notifications",hint:"Push alerts",checked:!0}},o={args:{label:"Notifications",hint:"Push alerts",checked:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    hint: 'Push alerts',
    checked: true
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications',
    hint: 'Push alerts',
    checked: false
  }
}`,...o.parameters?.docs?.source}}};const t=["On","Off"];export{o as Off,e as On,t as __namedExportsOrder,s as default};
