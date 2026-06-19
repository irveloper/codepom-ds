const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Radio.astro";const s={title:"Components/Form Controls/Radio",component:r,argTypes:{label:{control:"text"},checked:{control:"boolean"}}},e={args:{label:"Production",checked:!0}},o={args:{label:"Staging",checked:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Production',
    checked: true
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Staging',
    checked: false
  }
}`,...o.parameters?.docs?.source}}};const t=["Selected","Unselected"];export{e as Selected,o as Unselected,t as __namedExportsOrder,s as default};
