import{R as r}from"./iframe-bFnJFMHy.js";import{j as e}from"./jsx-runtime-BwiOt0A0.js";import"./preload-helper-PPVm8Dsz.js";const w={info:"★",success:"✓",warning:"⚠",error:"✕"},s=({variant:c="info",title:d,dismissible:m=!1,onDismiss:u,children:p,className:g=""})=>{const[f,h]=r.useState(!1),v=()=>{h(!0),u?.()};if(f)return null;const y=["cp-alert",`cp-alert--${c}`,g].filter(Boolean).join(" ");return e.jsxs("div",{role:"alert",className:y,children:[e.jsx("span",{className:"cp-alert__icon","aria-hidden":"true",children:w[c]}),e.jsxs("div",{className:"cp-alert__body",children:[d&&e.jsx("p",{className:"cp-alert__title",children:d}),e.jsx("div",{className:"cp-alert__content",children:p})]}),m&&e.jsx("button",{className:"cp-alert__close",onClick:v,"aria-label":"Dismiss alert",children:"✕"})]})};s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const x={title:"Feedback/Alert",component:s,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["info","success","warning","error"]},dismissible:{control:"boolean"}}},a={args:{variant:"info",title:"Info",children:"This is an informational message to keep you in the loop."}},n={args:{variant:"success",title:"Success",children:"Your changes have been saved successfully."}},t={args:{variant:"warning",title:"Warning",children:"This action may have unintended side effects."}},i={args:{variant:"error",title:"Error",children:"Something went wrong. Please try again."}},o={args:{variant:"info",title:"Dismissible",dismissible:!0,children:"Click the X to dismiss this alert."}},l={render:()=>r.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:32,background:"#0B132B",width:480}},r.createElement(s,{variant:"info",title:"Info"},"This is an informational message."),r.createElement(s,{variant:"success",title:"Success"},"Your changes were saved."),r.createElement(s,{variant:"warning",title:"Warning"},"This action may have side effects."),r.createElement(s,{variant:"error",title:"Error"},"Something went wrong. Please retry."))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Info',
    children: 'This is an informational message to keep you in the loop.'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'This action may have unintended side effects.'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again.'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible',
    dismissible: true,
    children: 'Click the X to dismiss this alert.'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 32,
    background: '#0B132B',
    width: 480
  }}>
      <Alert variant="info" title="Info">This is an informational message.</Alert>
      <Alert variant="success" title="Success">Your changes were saved.</Alert>
      <Alert variant="warning" title="Warning">This action may have side effects.</Alert>
      <Alert variant="error" title="Error">Something went wrong. Please retry.</Alert>
    </div>
}`,...l.parameters?.docs?.source}}};const _=["Info","Success","Warning","Error","Dismissible","AllVariants"];export{l as AllVariants,o as Dismissible,i as Error,a as Info,n as Success,t as Warning,_ as __namedExportsOrder,x as default};
