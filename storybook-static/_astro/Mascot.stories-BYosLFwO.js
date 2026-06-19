const n=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};n.isAstroComponentFactory=!0;n.moduleId="/Users/irveloper/Downloads/Design system creation/codepom-design-system/src/components/Mascot.astro";const t={title:"Foundations/Logo & Mascot",component:n,argTypes:{variant:{control:"select",options:["full","solid","line"]},size:{control:{type:"range",min:16,max:300,step:8}}}},r={args:{variant:"full",size:200}},e={args:{variant:"solid",size:200}},a={args:{variant:"line",size:200}},s={args:{variant:"full",size:32}},o={parameters:{layout:"centered",backgrounds:{default:"navy"}},args:{variant:"full",size:48}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    size: 200
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'solid',
    size: 200
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'line',
    size: 200
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    size: 32
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'navy'
    }
  },
  args: {
    variant: 'full',
    size: 48
  }
}`,...o.parameters?.docs?.source}}};const c=["FullColor","Solid","LineArt","Small","Favicon"];export{o as Favicon,r as FullColor,a as LineArt,s as Small,e as Solid,c as __namedExportsOrder,t as default};
