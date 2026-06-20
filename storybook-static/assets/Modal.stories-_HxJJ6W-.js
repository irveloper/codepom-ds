import{R as e}from"./iframe-bFnJFMHy.js";import{j as r}from"./jsx-runtime-BwiOt0A0.js";import{B as n}from"./Button-G8bDWvrl.js";import"./preload-helper-PPVm8Dsz.js";const s=({open:o,onClose:t,title:p,size:g="md",children:h,footer:u,closeOnBackdrop:y=!0,className:v=""})=>{const l=e.useRef(null);e.useEffect(()=>{const a=l.current;a&&(o?a.open||a.showModal():a.open&&a.close())},[o]),e.useEffect(()=>{const a=l.current;if(!a)return;const f=()=>t();return a.addEventListener("close",f),()=>a.removeEventListener("close",f)},[t]);const B=a=>{y&&a.target===l.current&&t()};return r.jsx("dialog",{ref:l,className:["cp-modal-backdrop",v].filter(Boolean).join(" "),onClick:B,"aria-labelledby":p?"cp-modal-title":void 0,"aria-modal":"true",children:r.jsxs("div",{className:`cp-modal cp-modal--${g}`,children:[r.jsxs("div",{className:"cp-modal__header",children:[p&&r.jsx("h2",{id:"cp-modal-title",className:"cp-modal__title",children:p}),r.jsx("button",{className:"cp-modal__close",onClick:t,"aria-label":"Close modal",children:"✕"})]}),r.jsx("div",{className:"cp-modal__body",children:h}),u&&r.jsx("div",{className:"cp-modal__footer",children:u})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},closeOnBackdrop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const b={title:"Feedback/Modal",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg","full"]}}},i={render:()=>{const[o,t]=e.useState(!1);return e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(n,{variant:"primary",onClick:()=>t(!0)},"Open Modal"),e.createElement(s,{open:o,onClose:()=>t(!1),title:"Modal Title"},e.createElement("p",{style:{margin:0,color:"#94A3B8",lineHeight:1.6}},"This is the modal body. You can place any content here — forms, confirmations, images, or anything else you need.")))}},c={render:()=>{const[o,t]=e.useState(!1);return e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(n,{variant:"primary",onClick:()=>t(!0)},"Open Modal with Footer"),e.createElement(s,{open:o,onClose:()=>t(!1),title:"Modal with Footer",footer:e.createElement(e.Fragment,null,e.createElement(n,{variant:"ghost",size:"sm",onClick:()=>t(!1)},"Cancel"),e.createElement(n,{variant:"primary",size:"sm",onClick:()=>t(!1)},"Confirm"))},e.createElement("p",{style:{margin:0,color:"#94A3B8",lineHeight:1.6}},"This modal has a footer with action buttons.")))}},d={render:()=>{const[o,t]=e.useState(!1);return e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(n,{variant:"danger",onClick:()=>t(!0)},"Delete Item"),e.createElement(s,{open:o,onClose:()=>t(!1),title:"Confirm Deletion",size:"sm",footer:e.createElement(e.Fragment,null,e.createElement(n,{variant:"ghost",size:"sm",onClick:()=>t(!1)},"Cancel"),e.createElement(n,{variant:"danger",size:"sm",onClick:()=>t(!1)},"Delete"))},e.createElement("p",{style:{margin:0,color:"#94A3B8",lineHeight:1.6}},"Are you sure you want to delete this item? This action cannot be undone.")))}},m={render:()=>{const[o,t]=e.useState(!1);return e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(n,{variant:"secondary",onClick:()=>t(!0)},"Open Large Modal"),e.createElement(s,{open:o,onClose:()=>t(!1),title:"Large Modal",size:"lg"},e.createElement("p",{style:{margin:0,color:"#94A3B8",lineHeight:1.6}},"This is a large modal for more complex content such as forms, data tables, or rich media.")))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      padding: 32,
      background: '#0B132B'
    }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
          <p style={{
          margin: 0,
          color: '#94A3B8',
          lineHeight: 1.6
        }}>
            This is the modal body. You can place any content here — forms, confirmations, images, or anything else you need.
          </p>
        </Modal>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      padding: 32,
      background: '#0B132B'
    }}>
        <Button variant="primary" onClick={() => setOpen(true)}>Open Modal with Footer</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal with Footer" footer={<>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" size="sm" onClick={() => setOpen(false)}>Confirm</Button>
            </>}>
          <p style={{
          margin: 0,
          color: '#94A3B8',
          lineHeight: 1.6
        }}>
            This modal has a footer with action buttons.
          </p>
        </Modal>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      padding: 32,
      background: '#0B132B'
    }}>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete Item</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm Deletion" size="sm" footer={<>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="danger" size="sm" onClick={() => setOpen(false)}>Delete</Button>
            </>}>
          <p style={{
          margin: 0,
          color: '#94A3B8',
          lineHeight: 1.6
        }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </Modal>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      padding: 32,
      background: '#0B132B'
    }}>
        <Button variant="secondary" onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Large Modal" size="lg">
          <p style={{
          margin: 0,
          color: '#94A3B8',
          lineHeight: 1.6
        }}>
            This is a large modal for more complex content such as forms, data tables, or rich media.
          </p>
        </Modal>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const M=["Default","WithFooter","Confirmation","Large"];export{d as Confirmation,i as Default,m as Large,c as WithFooter,M as __namedExportsOrder,b as default};
