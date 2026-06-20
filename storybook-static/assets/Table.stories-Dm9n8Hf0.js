import{R as e}from"./iframe-bFnJFMHy.js";import{j as a}from"./jsx-runtime-BwiOt0A0.js";import{B as s}from"./Badge-CIrt_lLg.js";import"./preload-helper-PPVm8Dsz.js";const t=({columns:u,rows:g,striped:v=!1,hoverable:y=!1,loading:h=!1,className:f=""})=>{const w=["cp-table",v?"cp-table--striped":"",y?"cp-table--hoverable":"",f].filter(Boolean).join(" "),k=Array.from({length:5});return a.jsx("div",{className:"cp-table-wrapper",children:a.jsxs("table",{className:w,children:[a.jsx("thead",{className:"cp-table__head",children:a.jsx("tr",{children:u.map(r=>a.jsx("th",{className:"cp-table__th",style:r.width!=null?{width:r.width}:void 0,children:r.label},r.key))})}),a.jsx("tbody",{className:"cp-table__body",children:h?k.map((r,b)=>a.jsx("tr",{className:"cp-table__row",children:u.map(o=>a.jsx("td",{className:"cp-table__td",children:a.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",height:16,borderRadius:4}})},o.key))},b)):g.map((r,b)=>a.jsx("tr",{className:"cp-table__row",children:u.map(o=>a.jsx("td",{className:"cp-table__td",children:r[o.key]},o.key))},b))})]})})};t.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"Record<string, React.ReactNode>"}],raw:"Record<string, React.ReactNode>[]"},description:""},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const n=[{key:"name",label:"Name"},{key:"role",label:"Role"},{key:"status",label:"Status",width:120},{key:"joined",label:"Joined",width:140}],p=[{name:"Maya Chen",role:"Senior Engineer",status:e.createElement(s,{variant:"success",dot:!0},"Active"),joined:"Jan 12, 2023"},{name:"Alex Rivera",role:"Product Designer",status:e.createElement(s,{variant:"success",dot:!0},"Active"),joined:"Mar 5, 2023"},{name:"Jordan Kim",role:"Engineering Manager",status:e.createElement(s,{variant:"warning"},"Away"),joined:"Aug 20, 2022"},{name:"Sam Okafor",role:"Frontend Engineer",status:e.createElement(s,{variant:"error"},"Inactive"),joined:"Nov 2, 2021"},{name:"Casey Wu",role:"DevOps Engineer",status:e.createElement(s,{variant:"success",dot:!0},"Active"),joined:"Feb 14, 2024"}],N={title:"Data Display/Table",component:t,parameters:{layout:"padded"},argTypes:{striped:{control:"boolean"},hoverable:{control:"boolean"},loading:{control:"boolean"}}},l={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(t,{columns:n,rows:p}))},d={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(t,{columns:n,rows:p,striped:!0}))},c={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(t,{columns:n,rows:p,hoverable:!0}))},i={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(t,{columns:n,rows:p,striped:!0,hoverable:!0}))},m={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(t,{columns:n,rows:[],loading:!0}))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Table columns={columns} rows={rows} />
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Table columns={columns} rows={rows} striped />
    </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Table columns={columns} rows={rows} hoverable />
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Table columns={columns} rows={rows} striped hoverable />
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Table columns={columns} rows={[]} loading />
    </div>
}`,...m.parameters?.docs?.source}}};const R=["Default","Striped","Hoverable","StripedAndHoverable","Loading"];export{l as Default,c as Hoverable,m as Loading,d as Striped,i as StripedAndHoverable,R as __namedExportsOrder,N as default};
