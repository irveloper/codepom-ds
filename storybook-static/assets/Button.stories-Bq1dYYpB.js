import{R as r}from"./iframe-bFnJFMHy.js";import{B as a}from"./Button-G8bDWvrl.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-BwiOt0A0.js";const h={title:"Components/Button",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},fullWidth:{control:"boolean"}}},e={args:{variant:"primary",size:"md",children:"Primary"}},n={args:{variant:"secondary",size:"md",children:"Secondary"}},s={args:{variant:"ghost",size:"md",children:"Ghost"}},t={args:{variant:"danger",size:"md",children:"Danger"}},i={args:{variant:"primary",size:"sm",children:"Small"}},o={args:{variant:"primary",size:"md",children:"Medium"}},d={args:{variant:"primary",size:"lg",children:"Large"}},c={args:{variant:"primary",size:"md",loading:!0,children:"Loading…"}},m={args:{variant:"primary",size:"md",disabled:!0,children:"Disabled"}},l={render:()=>r.createElement("div",{style:{display:"flex",gap:12,padding:32,background:"#0B132B",flexWrap:"wrap"}},r.createElement(a,{variant:"primary"},"Primary"),r.createElement(a,{variant:"secondary"},"Secondary"),r.createElement(a,{variant:"ghost"},"Ghost"),r.createElement(a,{variant:"danger"},"Danger"))},p={render:()=>r.createElement("div",{style:{display:"flex",gap:12,alignItems:"center",padding:32,background:"#0B132B"}},r.createElement(a,{variant:"primary",size:"sm"},"Small"),r.createElement(a,{variant:"primary",size:"md"},"Medium"),r.createElement(a,{variant:"primary",size:"lg"},"Large"))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    size: 'md',
    children: 'Danger'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    children: 'Loading…'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    padding: 32,
    background: '#0B132B',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    padding: 32,
    background: '#0B132B'
  }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
}`,...p.parameters?.docs?.source}}};const z=["Primary","Secondary","Ghost","Danger","Small","Medium","Large","Loading","Disabled","AllVariants","AllSizes"];export{p as AllSizes,l as AllVariants,t as Danger,m as Disabled,s as Ghost,d as Large,c as Loading,o as Medium,e as Primary,n as Secondary,i as Small,z as __namedExportsOrder,h as default};
