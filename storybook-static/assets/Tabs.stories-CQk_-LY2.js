import{R as a}from"./iframe-bFnJFMHy.js";import{j as s}from"./jsx-runtime-BwiOt0A0.js";import"./preload-helper-PPVm8Dsz.js";const n=({tabs:i,defaultTab:y,variant:x="underline",onChange:B,className:h=""})=>{const[o,T]=a.useState(y??i[0]?.id),v=a.useRef(null),g=e=>{T(e),B?.(e)},E=(e,b)=>{const t=i.filter(l=>!l.disabled),f=t.findIndex(l=>l.id===i[b].id);let r=-1;if(e.key==="ArrowRight"&&(r=(f+1)%t.length),e.key==="ArrowLeft"&&(r=(f-1+t.length)%t.length),e.key==="Home"&&(r=0),e.key==="End"&&(r=t.length-1),r>=0){e.preventDefault();const l=t[r];g(l.id),v.current?.querySelector(`[data-tab-id="${l.id}"]`)?.focus()}};return i.find(e=>e.id===o),s.jsxs("div",{className:`cp-tabs cp-tabs--${x} ${h}`.trim(),children:[s.jsx("div",{ref:v,role:"tablist",className:"cp-tabs__list",children:i.map((e,b)=>s.jsxs("button",{role:"tab","data-tab-id":e.id,"aria-selected":o===e.id,"aria-controls":`tabpanel-${e.id}`,id:`tab-${e.id}`,disabled:e.disabled,tabIndex:o===e.id?0:-1,className:["cp-tabs__tab",o===e.id?"cp-tabs__tab--active":""].filter(Boolean).join(" "),onClick:()=>!e.disabled&&g(e.id),onKeyDown:t=>E(t,b),children:[e.icon&&s.jsx("span",{className:"cp-tabs__tab-icon","aria-hidden":"true",children:e.icon}),e.label,e.badge!==void 0&&s.jsx("span",{className:"cp-tabs__badge",children:e.badge})]},e.id))}),i.map(e=>s.jsx("div",{role:"tabpanel",id:`tabpanel-${e.id}`,"aria-labelledby":`tab-${e.id}`,hidden:o!==e.id,className:"cp-tabs__panel",children:e.content},e.id))]})};n.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},defaultTab:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'underline' | 'pill' | 'boxed'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'pill'"},{name:"literal",value:"'boxed'"}]},description:"",defaultValue:{value:"'underline'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const d=[{id:"overview",label:"Overview",content:a.createElement("div",{style:{padding:"16px 0",color:"#94A3B8",fontSize:14}},"Overview content goes here. This is the main summary tab.")},{id:"analytics",label:"Analytics",badge:3,content:a.createElement("div",{style:{padding:"16px 0",color:"#94A3B8",fontSize:14}},"Analytics data and charts would appear in this panel.")},{id:"settings",label:"Settings",content:a.createElement("div",{style:{padding:"16px 0",color:"#94A3B8",fontSize:14}},"Configuration and settings options appear here.")},{id:"disabled",label:"Disabled",disabled:!0,content:null}],k={title:"Navigation/Tabs",component:n,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","boxed"]}}},c={render:()=>a.createElement("div",{style:{padding:32,background:"#0B132B",width:560}},a.createElement(n,{tabs:d,variant:"underline"}))},p={render:()=>a.createElement("div",{style:{padding:32,background:"#0B132B",width:560}},a.createElement(n,{tabs:d,variant:"pill"}))},m={render:()=>a.createElement("div",{style:{padding:32,background:"#0B132B",width:560}},a.createElement(n,{tabs:d,variant:"boxed"}))},u={render:()=>a.createElement("div",{style:{padding:32,background:"#0B132B",display:"flex",flexDirection:"column",gap:48,width:560}},a.createElement("div",null,a.createElement("p",{style:{color:"#94A3B8",fontSize:12,marginBottom:12,fontFamily:"Space Mono, monospace"}},'variant="underline"'),a.createElement(n,{tabs:d,variant:"underline"})),a.createElement("div",null,a.createElement("p",{style:{color:"#94A3B8",fontSize:12,marginBottom:12,fontFamily:"Space Mono, monospace"}},'variant="pill"'),a.createElement(n,{tabs:d,variant:"pill"})),a.createElement("div",null,a.createElement("p",{style:{color:"#94A3B8",fontSize:12,marginBottom:12,fontFamily:"Space Mono, monospace"}},'variant="boxed"'),a.createElement(n,{tabs:d,variant:"boxed"})))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 560
  }}>
      <Tabs tabs={sampleTabs} variant="underline" />
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 560
  }}>
      <Tabs tabs={sampleTabs} variant="pill" />
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 560
  }}>
      <Tabs tabs={sampleTabs} variant="boxed" />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    width: 560
  }}>
      <div>
        <p style={{
        color: '#94A3B8',
        fontSize: 12,
        marginBottom: 12,
        fontFamily: 'Space Mono, monospace'
      }}>variant="underline"</p>
        <Tabs tabs={sampleTabs} variant="underline" />
      </div>
      <div>
        <p style={{
        color: '#94A3B8',
        fontSize: 12,
        marginBottom: 12,
        fontFamily: 'Space Mono, monospace'
      }}>variant="pill"</p>
        <Tabs tabs={sampleTabs} variant="pill" />
      </div>
      <div>
        <p style={{
        color: '#94A3B8',
        fontSize: 12,
        marginBottom: 12,
        fontFamily: 'Space Mono, monospace'
      }}>variant="boxed"</p>
        <Tabs tabs={sampleTabs} variant="boxed" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const j=["Underline","Pill","Boxed","AllVariants"];export{u as AllVariants,m as Boxed,p as Pill,c as Underline,j as __namedExportsOrder,k as default};
