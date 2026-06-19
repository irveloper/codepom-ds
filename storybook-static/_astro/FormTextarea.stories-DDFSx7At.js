const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Textarea.astro";const r={title:"Components/Form Controls/Textarea",component:o,argTypes:{label:{control:"text"},placeholder:{control:"text"},rows:{control:{type:"range",min:2,max:10}}}},e={args:{label:"Brief",value:"Build a fast, loyal product platform.",rows:3}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Brief',
    value: 'Build a fast, loyal product platform.',
    rows: 3
  }
}`,...e.parameters?.docs?.source}}};const t=["Default"];export{e as Default,t as __namedExportsOrder,r as default};
