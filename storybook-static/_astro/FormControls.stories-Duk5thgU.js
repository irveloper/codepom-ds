const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Input.astro";const t={title:"Components/Form Controls/Input",component:r,argTypes:{type:{control:"text"},placeholder:{control:"text"},label:{control:"text"},hint:{control:"text"},value:{control:"text"}}},e={args:{label:"Project name",value:"codepom-web",hint:"Lowercase, hyphenated.",type:"text"}},o={args:{label:"Email",placeholder:"you@example.com",hint:"We'll never share your email."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Project name',
    value: 'codepom-web',
    hint: 'Lowercase, hyphenated.',
    type: 'text'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    hint: 'We\\'ll never share your email.'
  }
}`,...o.parameters?.docs?.source}}};const a=["Default","WithPlaceholder"];export{e as Default,o as WithPlaceholder,a as __namedExportsOrder,t as default};
