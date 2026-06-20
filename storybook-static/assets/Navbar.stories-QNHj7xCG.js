import{R as e}from"./iframe-bFnJFMHy.js";import{j as a}from"./jsx-runtime-BwiOt0A0.js";import{B as v}from"./Button-G8bDWvrl.js";import{B}from"./Badge-CIrt_lLg.js";import"./preload-helper-PPVm8Dsz.js";const t=({logo:g,links:s=[],actions:n,sticky:h=!1,className:f=""})=>{const[d,b]=e.useState(!1),y=["cp-navbar",h?"cp-navbar--sticky":"",f].filter(Boolean).join(" ");return a.jsxs("nav",{className:y,children:[a.jsxs("div",{className:"cp-navbar__inner",children:[g&&a.jsx("div",{className:"cp-navbar__logo",children:g}),s.length>0&&a.jsx("ul",{className:"cp-navbar__links",role:"list",children:s.map((r,p)=>a.jsx("li",{children:a.jsx("a",{href:r.href,className:["cp-navbar__link",r.active?"cp-navbar__link--active":""].filter(Boolean).join(" "),"aria-current":r.active?"page":void 0,children:r.label})},p))}),n&&a.jsx("div",{className:"cp-navbar__actions",children:n}),a.jsxs("button",{className:"cp-navbar__hamburger","aria-label":d?"Close menu":"Open menu","aria-expanded":d,onClick:()=>b(r=>!r),children:[a.jsx("span",{className:"cp-navbar__hamburger-bar"}),a.jsx("span",{className:"cp-navbar__hamburger-bar"}),a.jsx("span",{className:"cp-navbar__hamburger-bar"})]})]}),d&&s.length>0&&a.jsxs("div",{className:"cp-navbar__mobile-menu",children:[a.jsx("ul",{role:"list",children:s.map((r,p)=>a.jsx("li",{children:a.jsx("a",{href:r.href,className:["cp-navbar__mobile-link",r.active?"cp-navbar__mobile-link--active":""].filter(Boolean).join(" "),"aria-current":r.active?"page":void 0,onClick:()=>b(!1),children:r.label})},p))}),n&&a.jsx("div",{className:"cp-navbar__mobile-actions",children:n})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"NavLink"}],raw:"NavLink[]"},description:"",defaultValue:{value:"[]",computed:!1}},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const j={title:"Navigation/Navbar",component:t,parameters:{layout:"fullscreen"},argTypes:{sticky:{control:"boolean"}}},u=[{label:"Home",href:"/",active:!0},{label:"Components",href:"/components"},{label:"Tokens",href:"/tokens"},{label:"Docs",href:"/docs"}],m=()=>e.createElement("span",{style:{fontFamily:"Space Grotesk, sans-serif",fontWeight:700,fontSize:18,color:"#F8FAFC",letterSpacing:"-0.02em"}},"code",e.createElement("span",{style:{color:"#FBB040"}},"pom")),l={render:()=>e.createElement("div",{style:{background:"#0B132B",minHeight:"100vh"}},e.createElement(t,{logo:e.createElement(m,null),links:u,actions:e.createElement("div",{style:{display:"flex",gap:8}},e.createElement(v,{variant:"ghost",size:"sm"},"Sign in"),e.createElement(v,{variant:"primary",size:"sm"},"Get started"))}))},i={render:()=>e.createElement("div",{style:{background:"#0B132B",minHeight:"100vh"}},e.createElement(t,{logo:e.createElement(m,null),links:u,actions:e.createElement("div",{style:{display:"flex",alignItems:"center",gap:8}},e.createElement(B,{variant:"success",dot:!0},"v2.0"),e.createElement(v,{variant:"primary",size:"sm"},"Get started"))}))},o={render:()=>e.createElement("div",{style:{background:"#0B132B",minHeight:"100vh"}},e.createElement(t,{logo:e.createElement(m,null),links:u}))},c={render:()=>e.createElement("div",{style:{background:"#0B132B",minHeight:"100vh"}},e.createElement(t,{logo:e.createElement(m,null)}))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0B132B',
    minHeight: '100vh'
  }}>
      <Navbar logo={<Logo />} links={sampleLinks} actions={<div style={{
      display: 'flex',
      gap: 8
    }}>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="primary" size="sm">Get started</Button>
          </div>} />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0B132B',
    minHeight: '100vh'
  }}>
      <Navbar logo={<Logo />} links={sampleLinks} actions={<div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
            <Badge variant="success" dot>v2.0</Badge>
            <Button variant="primary" size="sm">Get started</Button>
          </div>} />
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0B132B',
    minHeight: '100vh'
  }}>
      <Navbar logo={<Logo />} links={sampleLinks} />
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#0B132B',
    minHeight: '100vh'
  }}>
      <Navbar logo={<Logo />} />
    </div>
}`,...c.parameters?.docs?.source}}};const L=["Default","WithBadge","Minimal","LogoOnly"];export{l as Default,c as LogoOnly,o as Minimal,i as WithBadge,L as __namedExportsOrder,j as default};
