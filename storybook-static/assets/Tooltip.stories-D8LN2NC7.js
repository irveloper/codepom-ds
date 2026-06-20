import{R as t}from"./iframe-bFnJFMHy.js";import{j as s}from"./jsx-runtime-BwiOt0A0.js";import{B as o}from"./Button-G8bDWvrl.js";import"./preload-helper-PPVm8Dsz.js";const e=({content:d,placement:c="top",children:m})=>{const p=t.useId();return s.jsxs("span",{className:`cp-tooltip-host cp-tooltip-host--${c}`,children:[t.cloneElement(m,{"aria-describedby":p}),s.jsx("span",{role:"tooltip",id:p,className:`cp-tooltip cp-tooltip--${c}`,children:d})]})};e.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""}}};const B={title:"Overlays/Tooltip",component:e,parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"]}}},r={render:()=>t.createElement("div",{style:{padding:64,background:"#0B132B"}},t.createElement(e,{content:"Tooltip on top",placement:"top"},t.createElement(o,{variant:"secondary"},"Hover me (top)")))},n={render:()=>t.createElement("div",{style:{padding:64,background:"#0B132B"}},t.createElement(e,{content:"Tooltip on bottom",placement:"bottom"},t.createElement(o,{variant:"secondary"},"Hover me (bottom)")))},a={render:()=>t.createElement("div",{style:{padding:64,background:"#0B132B"}},t.createElement(e,{content:"Tooltip on left",placement:"left"},t.createElement(o,{variant:"secondary"},"Hover me (left)")))},l={render:()=>t.createElement("div",{style:{padding:64,background:"#0B132B"}},t.createElement(e,{content:"Tooltip on right",placement:"right"},t.createElement(o,{variant:"secondary"},"Hover me (right)")))},i={render:()=>t.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,padding:80,background:"#0B132B"}},t.createElement(e,{content:"Tooltip on top",placement:"top"},t.createElement(o,{variant:"secondary",fullWidth:!0},"Top")),t.createElement(e,{content:"Tooltip on bottom",placement:"bottom"},t.createElement(o,{variant:"secondary",fullWidth:!0},"Bottom")),t.createElement(e,{content:"Tooltip on left",placement:"left"},t.createElement(o,{variant:"secondary",fullWidth:!0},"Left")),t.createElement(e,{content:"Tooltip on right",placement:"right"},t.createElement(o,{variant:"secondary",fullWidth:!0},"Right")))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 64,
    background: '#0B132B'
  }}>
      <Tooltip content="Tooltip on top" placement="top">
        <Button variant="secondary">Hover me (top)</Button>
      </Tooltip>
    </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 64,
    background: '#0B132B'
  }}>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button variant="secondary">Hover me (bottom)</Button>
      </Tooltip>
    </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 64,
    background: '#0B132B'
  }}>
      <Tooltip content="Tooltip on left" placement="left">
        <Button variant="secondary">Hover me (left)</Button>
      </Tooltip>
    </div>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 64,
    background: '#0B132B'
  }}>
      <Tooltip content="Tooltip on right" placement="right">
        <Button variant="secondary">Hover me (right)</Button>
      </Tooltip>
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    padding: 80,
    background: '#0B132B'
  }}>
      <Tooltip content="Tooltip on top" placement="top">
        <Button variant="secondary" fullWidth>Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button variant="secondary" fullWidth>Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <Button variant="secondary" fullWidth>Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <Button variant="secondary" fullWidth>Right</Button>
      </Tooltip>
    </div>
}`,...i.parameters?.docs?.source}}};const f=["Top","Bottom","Left","Right","AllPlacements"];export{i as AllPlacements,n as Bottom,a as Left,l as Right,r as Top,f as __namedExportsOrder,B as default};
