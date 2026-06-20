import{R as e}from"./iframe-bFnJFMHy.js";import{j as a}from"./jsx-runtime-BwiOt0A0.js";import"./preload-helper-PPVm8Dsz.js";const s=({links:r=[],collapsed:t=!1,onCollapse:h,className:u=""})=>{const[b,g]=e.useState({}),x=n=>{g(l=>({...l,[n]:!l[n]}))},f=["cp-sidebar",t?"cp-sidebar--collapsed":"",u].filter(Boolean).join(" ");return a.jsxs("aside",{className:f,children:[h&&a.jsx("div",{className:"cp-sidebar__toggle-wrap",children:a.jsx("button",{className:"cp-sidebar__toggle","aria-label":t?"Expand sidebar":"Collapse sidebar",onClick:()=>h(!t),children:t?"›":"‹"})}),a.jsx("nav",{className:"cp-sidebar__nav","aria-label":"Sidebar navigation",children:a.jsx("ul",{className:"cp-sidebar__list",role:"list",children:r.map((n,l)=>{const y=n.children&&n.children.length>0,p=b[l]??!1;return a.jsx("li",{className:"cp-sidebar__item",children:y?a.jsxs(a.Fragment,{children:[a.jsxs("button",{className:["cp-sidebar__link",n.active?"cp-sidebar__link--active":""].filter(Boolean).join(" "),"aria-expanded":p,onClick:()=>x(l),children:[n.icon&&a.jsx("span",{className:"cp-sidebar__icon","aria-hidden":"true",children:n.icon}),!t&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"cp-sidebar__label",children:n.label}),n.badge!=null&&a.jsx("span",{className:"cp-sidebar__badge",children:n.badge}),a.jsx("span",{className:"cp-sidebar__chevron","aria-hidden":"true",children:p?"▾":"▸"})]})]}),p&&!t&&a.jsx("ul",{className:"cp-sidebar__sub-list",role:"list",children:n.children.map((i,v)=>a.jsx("li",{className:"cp-sidebar__sub-item",children:a.jsx("a",{href:i.href,className:["cp-sidebar__sub-link",i.active?"cp-sidebar__sub-link--active":""].filter(Boolean).join(" "),"aria-current":i.active?"page":void 0,children:i.label})},v))})]}):a.jsxs("a",{href:n.href,className:["cp-sidebar__link",n.active?"cp-sidebar__link--active":""].filter(Boolean).join(" "),"aria-current":n.active?"page":void 0,children:[n.icon&&a.jsx("span",{className:"cp-sidebar__icon","aria-hidden":"true",children:n.icon}),!t&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"cp-sidebar__label",children:n.label}),n.badge!=null&&a.jsx("span",{className:"cp-sidebar__badge",children:n.badge})]})]})},l)})})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{links:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarLink"}],raw:"SidebarLink[]"},description:"",defaultValue:{value:"[]",computed:!1}},collapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const _=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),E=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("rect",{x:"3",y:"3",width:"7",height:"7"}),e.createElement("rect",{x:"14",y:"3",width:"7",height:"7"}),e.createElement("rect",{x:"14",y:"14",width:"7",height:"7"}),e.createElement("rect",{x:"3",y:"14",width:"7",height:"7"})),k=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"}),e.createElement("line",{x1:"2",y1:"20",x2:"22",y2:"20"})),j=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),e.createElement("circle",{cx:"9",cy:"7",r:"4"}),e.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),e.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})),B=()=>e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("circle",{cx:"12",cy:"12",r:"3"}),e.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})),m=[{label:"Dashboard",href:"/",icon:e.createElement(_,null),active:!0},{label:"Components",href:"/components",icon:e.createElement(E,null),children:[{label:"Button",href:"/components/button"},{label:"Badge",href:"/components/badge"},{label:"Card",href:"/components/card"}]},{label:"Analytics",href:"/analytics",icon:e.createElement(k,null),badge:12},{label:"Team",href:"/team",icon:e.createElement(j,null),badge:3},{label:"Settings",href:"/settings",icon:e.createElement(B,null)}],w={title:"Navigation/Sidebar",component:s,parameters:{layout:"fullscreen"},argTypes:{collapsed:{control:"boolean"}}},o={render:()=>e.createElement("div",{style:{display:"flex",background:"#0B132B",minHeight:"100vh"}},e.createElement(s,{links:m}),e.createElement("main",{style:{flex:1,padding:32}},e.createElement("p",{style:{color:"#94A3B8",fontSize:14}},"Page content goes here")))},c={render:()=>{const[r,t]=e.useState(!1);return e.createElement("div",{style:{display:"flex",background:"#0B132B",minHeight:"100vh"}},e.createElement(s,{links:m,collapsed:r,onCollapse:t}),e.createElement("main",{style:{flex:1,padding:32}},e.createElement("p",{style:{color:"#94A3B8",fontSize:14}},"Sidebar is currently ",r?"collapsed":"expanded",". Click the toggle to ",r?"expand":"collapse"," it.")))}},d={render:()=>e.createElement("div",{style:{display:"flex",background:"#0B132B",minHeight:"100vh"}},e.createElement(s,{links:m,collapsed:!0}),e.createElement("main",{style:{flex:1,padding:32}},e.createElement("p",{style:{color:"#94A3B8",fontSize:14}},"Sidebar in collapsed state")))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    background: '#0B132B',
    minHeight: '100vh'
  }}>
      <Sidebar links={sampleLinks} />
      <main style={{
      flex: 1,
      padding: 32
    }}>
        <p style={{
        color: '#94A3B8',
        fontSize: 14
      }}>Page content goes here</p>
      </main>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    return <div style={{
      display: 'flex',
      background: '#0B132B',
      minHeight: '100vh'
    }}>
        <Sidebar links={sampleLinks} collapsed={collapsed} onCollapse={setCollapsed} />
        <main style={{
        flex: 1,
        padding: 32
      }}>
          <p style={{
          color: '#94A3B8',
          fontSize: 14
        }}>
            Sidebar is currently {collapsed ? 'collapsed' : 'expanded'}. Click the toggle to {collapsed ? 'expand' : 'collapse'} it.
          </p>
        </main>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    background: '#0B132B',
    minHeight: '100vh'
  }}>
      <Sidebar links={sampleLinks} collapsed />
      <main style={{
      flex: 1,
      padding: 32
    }}>
        <p style={{
        color: '#94A3B8',
        fontSize: 14
      }}>Sidebar in collapsed state</p>
      </main>
    </div>
}`,...d.parameters?.docs?.source}}};const L=["Default","WithCollapse","Collapsed"];export{d as Collapsed,o as Default,c as WithCollapse,L as __namedExportsOrder,w as default};
