import{R as e}from"./iframe-bFnJFMHy.js";import{j as t}from"./jsx-runtime-BwiOt0A0.js";import"./preload-helper-PPVm8Dsz.js";function x(s){return s.split(" ").slice(0,2).map(c=>c[0]).join("").toUpperCase()}const a=({src:s,alt:c,initials:g,name:p,size:f="md",status:d="none",className:y=""})=>{const v=g??(p?x(p):"?"),u=c??p??"Avatar",A=["cp-avatar",`cp-avatar--${f}`,y].filter(Boolean).join(" ");return t.jsxs("span",{className:A,role:"img","aria-label":u,children:[s?t.jsx("img",{src:s,alt:u,className:"cp-avatar__img"}):t.jsx("span",{className:"cp-avatar__initials","aria-hidden":"true",children:v}),d!=="none"&&t.jsx("span",{className:`cp-avatar__status cp-avatar__status--${d}`,"aria-label":d})]})};a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},initials:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'away' | 'busy' | 'offline' | 'none'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'away'"},{name:"literal",value:"'busy'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const E={title:"Data Display/Avatar",component:a,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},status:{control:"select",options:["online","away","busy","offline","none"]}}},n={args:{src:"https://i.pravatar.cc/100",name:"Jane Doe",size:"md"}},l={args:{name:"Maya Chen",size:"md"}},r={args:{name:"Alex Kim",size:"md",status:"online"}},i={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:16,padding:32,background:"#0B132B"}},e.createElement(a,{name:"A B",size:"xs"}),e.createElement(a,{name:"A B",size:"sm"}),e.createElement(a,{name:"A B",size:"md"}),e.createElement(a,{name:"A B",size:"lg"}),e.createElement(a,{name:"A B",size:"xl"}))},o={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:20,padding:32,background:"#0B132B"}},e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8}},e.createElement(a,{name:"On",size:"lg",status:"online"}),e.createElement("span",{style:{fontSize:12,color:"#94A3B8"}},"Online")),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8}},e.createElement(a,{name:"Aw",size:"lg",status:"away"}),e.createElement("span",{style:{fontSize:12,color:"#94A3B8"}},"Away")),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8}},e.createElement(a,{name:"Bu",size:"lg",status:"busy"}),e.createElement("span",{style:{fontSize:12,color:"#94A3B8"}},"Busy")),e.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8}},e.createElement(a,{name:"Of",size:"lg",status:"offline"}),e.createElement("span",{style:{fontSize:12,color:"#94A3B8"}},"Offline")))},m={args:{src:"https://i.pravatar.cc/100?img=3",name:"Sam Rivera",size:"xl",status:"online"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/100',
    name: 'Jane Doe',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Maya Chen',
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Alex Kim',
    size: 'md',
    status: 'online'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: 32,
    background: '#0B132B'
  }}>
      <Avatar name="A B" size="xs" />
      <Avatar name="A B" size="sm" />
      <Avatar name="A B" size="md" />
      <Avatar name="A B" size="lg" />
      <Avatar name="A B" size="xl" />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: 32,
    background: '#0B132B'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Avatar name="On" size="lg" status="online" />
        <span style={{
        fontSize: 12,
        color: '#94A3B8'
      }}>Online</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Avatar name="Aw" size="lg" status="away" />
        <span style={{
        fontSize: 12,
        color: '#94A3B8'
      }}>Away</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Avatar name="Bu" size="lg" status="busy" />
        <span style={{
        fontSize: 12,
        color: '#94A3B8'
      }}>Busy</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Avatar name="Of" size="lg" status="offline" />
        <span style={{
        fontSize: 12,
        color: '#94A3B8'
      }}>Offline</span>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/100?img=3',
    name: 'Sam Rivera',
    size: 'xl',
    status: 'online'
  }
}`,...m.parameters?.docs?.source}}};const I=["WithImage","WithInitials","Online","AllSizes","AllStatuses","WithImageAndStatus"];export{i as AllSizes,o as AllStatuses,r as Online,n as WithImage,m as WithImageAndStatus,l as WithInitials,I as __namedExportsOrder,E as default};
