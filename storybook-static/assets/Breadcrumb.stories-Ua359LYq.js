import{R as e}from"./iframe-bFnJFMHy.js";import{j as s}from"./jsx-runtime-BwiOt0A0.js";import"./preload-helper-PPVm8Dsz.js";const B={chevron:"›",slash:"/",dot:"·"},r=({items:p,separator:i="chevron",className:u=""})=>{const v=B[i];return s.jsx("nav",{"aria-label":"Breadcrumb",className:`cp-breadcrumb ${u}`.trim(),children:s.jsx("ol",{className:"cp-breadcrumb__list",children:p.map((l,d)=>{const h=d===p.length-1;return s.jsxs("li",{className:"cp-breadcrumb__item",children:[d>0&&s.jsx("span",{className:"cp-breadcrumb__sep","aria-hidden":"true",children:v}),h?s.jsx("span",{"aria-current":"page",className:"cp-breadcrumb__current",children:l.label}):s.jsx("a",{href:l.href??"#",className:"cp-breadcrumb__link",children:l.label})]},d)})})})};r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"union",raw:"'chevron' | 'slash' | 'dot'",elements:[{name:"literal",value:"'chevron'"},{name:"literal",value:"'slash'"},{name:"literal",value:"'dot'"}]},description:"",defaultValue:{value:"'chevron'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const a=[{label:"Home",href:"/"},{label:"Projects",href:"/projects"},{label:"Design System",href:"/projects/design-system"},{label:"Components"}],y={title:"Navigation/Breadcrumb",component:r,parameters:{layout:"centered"},argTypes:{separator:{control:"select",options:["chevron","slash","dot"]}}},t={args:{items:a,separator:"chevron"}},o={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(r,{items:a,separator:"chevron"}))},n={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(r,{items:a,separator:"slash"}))},c={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(r,{items:a,separator:"dot"}))},m={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:32,background:"#0B132B"}},e.createElement("div",null,e.createElement("p",{style:{color:"#94A3B8",fontSize:12,marginBottom:8,fontFamily:"Space Mono, monospace"}},'separator="chevron"'),e.createElement(r,{items:a,separator:"chevron"})),e.createElement("div",null,e.createElement("p",{style:{color:"#94A3B8",fontSize:12,marginBottom:8,fontFamily:"Space Mono, monospace"}},'separator="slash"'),e.createElement(r,{items:a,separator:"slash"})),e.createElement("div",null,e.createElement("p",{style:{color:"#94A3B8",fontSize:12,marginBottom:8,fontFamily:"Space Mono, monospace"}},'separator="dot"'),e.createElement(r,{items:a,separator:"dot"})))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    separator: 'chevron'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Breadcrumb items={sampleItems} separator="chevron" />
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Breadcrumb items={sampleItems} separator="slash" />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Breadcrumb items={sampleItems} separator="dot" />
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 32,
    background: '#0B132B'
  }}>
      <div>
        <p style={{
        color: '#94A3B8',
        fontSize: 12,
        marginBottom: 8,
        fontFamily: 'Space Mono, monospace'
      }}>separator="chevron"</p>
        <Breadcrumb items={sampleItems} separator="chevron" />
      </div>
      <div>
        <p style={{
        color: '#94A3B8',
        fontSize: 12,
        marginBottom: 8,
        fontFamily: 'Space Mono, monospace'
      }}>separator="slash"</p>
        <Breadcrumb items={sampleItems} separator="slash" />
      </div>
      <div>
        <p style={{
        color: '#94A3B8',
        fontSize: 12,
        marginBottom: 8,
        fontFamily: 'Space Mono, monospace'
      }}>separator="dot"</p>
        <Breadcrumb items={sampleItems} separator="dot" />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const S=["Default","Chevron","Slash","Dot","AllSeparators"];export{m as AllSeparators,o as Chevron,t as Default,c as Dot,n as Slash,S as __namedExportsOrder,y as default};
