const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Checkbox.astro";const s={title:"Components/Form Controls/Checkbox",component:r,argTypes:{label:{control:"text"},checked:{control:"boolean"}}},e={args:{label:"CI / CD pipeline",checked:!0}},o={args:{label:"Automated tests",checked:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'CI / CD pipeline',
    checked: true
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Automated tests',
    checked: false
  }
}`,...o.parameters?.docs?.source}}};const t=["Checked","Unchecked"];export{e as Checked,o as Unchecked,t as __namedExportsOrder,s as default};
