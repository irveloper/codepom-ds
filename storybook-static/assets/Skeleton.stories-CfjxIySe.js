import{R as e}from"./iframe-bFnJFMHy.js";import{j as t}from"./jsx-runtime-BwiOt0A0.js";import"./preload-helper-PPVm8Dsz.js";const r=({width:a,height:s=16,rounded:g=!1,lines:n,className:y=""})=>n!=null&&n>1?t.jsx("div",{className:`cp-skeleton-lines ${y}`.trim(),children:Array.from({length:n}).map((k,f)=>t.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",width:f===n-1?"65%":a??"100%",height:s,borderRadius:g?9999:4}},f))}):t.jsx("span",{className:["cp-skeleton","cp-skeleton--pulse",y].filter(Boolean).join(" "),style:{display:"block",width:a??"100%",height:s,borderRadius:g?9999:4}}),h=({lines:a=3,className:s=""})=>t.jsx("div",{className:`cp-skeleton-lines ${s}`.trim(),style:{display:"flex",flexDirection:"column",gap:8},children:Array.from({length:a}).map((g,n)=>t.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",width:n===a-1?"60%":"100%",height:14,borderRadius:4}},n))}),u=({className:a=""})=>t.jsxs("div",{className:`cp-skeleton-card ${a}`.trim(),style:{background:"var(--cp-card)",border:"1px solid var(--cp-border)",borderRadius:12,padding:24,display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[t.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",width:40,height:40,borderRadius:9999,flexShrink:0}}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:8},children:[t.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",width:"60%",height:14,borderRadius:4}}),t.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",width:"40%",height:12,borderRadius:4}})]})]}),t.jsx(h,{lines:3}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",width:80,height:32,borderRadius:6}}),t.jsx("span",{className:"cp-skeleton cp-skeleton--pulse",style:{display:"block",width:80,height:32,borderRadius:6}})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"16",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lines:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"SkeletonText",props:{lines:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"SkeletonCard",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const w={title:"Data Display/Skeleton",component:r,parameters:{layout:"centered"},argTypes:{rounded:{control:"boolean"}}},d={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B",width:400}},e.createElement(r,{width:"100%",height:20}))},l={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(r,{width:80,height:24,rounded:!0}))},i={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B"}},e.createElement(r,{width:48,height:48,rounded:!0}))},o={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B",width:400}},e.createElement(h,{lines:4}))},c={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B",width:400}},e.createElement(u,null))},p={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B",width:560}},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8}},e.createElement("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:16,paddingBottom:12,borderBottom:"1px solid rgba(255,255,255,0.08)"}},["Name","Role","Status","Joined"].map(a=>e.createElement(r,{key:a,width:"70%",height:12}))),Array.from({length:5}).map((a,s)=>e.createElement("div",{key:s,style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:16,padding:"10px 0"}},e.createElement(r,{width:"80%",height:14}),e.createElement(r,{width:"60%",height:14}),e.createElement(r,{width:60,height:20,rounded:!0}),e.createElement(r,{width:"70%",height:14})))))},m={render:()=>e.createElement("div",{style:{padding:32,background:"#0B132B",width:560,display:"flex",flexDirection:"column",gap:24}},e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:8}},e.createElement(r,{width:200,height:28}),e.createElement(r,{width:320,height:16})),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}},e.createElement(u,null),e.createElement(u,null)))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 400
  }}>
      <Skeleton width="100%" height={20} />
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Skeleton width={80} height={24} rounded />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B'
  }}>
      <Skeleton width={48} height={48} rounded />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 400
  }}>
      <SkeletonText lines={4} />
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 400
  }}>
      <SkeletonCard />
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 560
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        {/* Header */}
        <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 16,
        paddingBottom: 12,
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
          {['Name', 'Role', 'Status', 'Joined'].map(h => <Skeleton key={h} width="70%" height={12} />)}
        </div>
        {/* Rows */}
        {Array.from({
        length: 5
      }).map((_, i) => <div key={i} style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: 16,
        padding: '10px 0'
      }}>
            <Skeleton width="80%" height={14} />
            <Skeleton width="60%" height={14} />
            <Skeleton width={60} height={20} rounded />
            <Skeleton width="70%" height={14} />
          </div>)}
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    background: '#0B132B',
    width: 560,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {/* Page header */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <Skeleton width={200} height={28} />
        <Skeleton width={320} height={16} />
      </div>
      {/* Cards row */}
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }}>
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};const B=["Default","Pill","Avatar","TextLines","CardPreset","TableRows","PageLayout"];export{i as Avatar,c as CardPreset,d as Default,m as PageLayout,l as Pill,p as TableRows,o as TextLines,B as __namedExportsOrder,w as default};
