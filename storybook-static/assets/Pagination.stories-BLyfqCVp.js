import{R as n}from"./iframe-bFnJFMHy.js";import{j as o}from"./jsx-runtime-BwiOt0A0.js";import"./preload-helper-PPVm8Dsz.js";function b(a,e){return e<=7?Array.from({length:e},(d,s)=>s+1):a<=4?[1,2,3,4,5,"…",e]:a>=e-3?[1,"…",e-4,e-3,e-2,e-1,e]:[1,"…",a-1,a,a+1,"…",e]}const r=({total:a,page:e,perPage:d=10,onChange:s,className:u=""})=>{const l=Math.max(1,Math.ceil(a/d)),m=b(e,l);return o.jsxs("nav",{"aria-label":"Pagination",className:`cp-pagination ${u}`.trim(),children:[o.jsx("button",{className:"cp-pagination__btn cp-pagination__btn--prev",onClick:()=>s(e-1),disabled:e<=1,"aria-label":"Previous page",children:"‹"}),m.map((t,P)=>t==="…"?o.jsx("span",{className:"cp-pagination__ellipsis","aria-hidden":"true",children:"…"},`ellipsis-${P}`):o.jsx("button",{className:["cp-pagination__btn",t===e?"cp-pagination__btn--active":""].filter(Boolean).join(" "),onClick:()=>s(t),"aria-current":t===e?"page":void 0,"aria-label":`Page ${t}`,children:t},t)),o.jsx("button",{className:"cp-pagination__btn cp-pagination__btn--next",onClick:()=>s(e+1),disabled:e>=l,"aria-label":"Next page",children:"›"})]})};r.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{total:{required:!0,tsType:{name:"number"},description:""},page:{required:!0,tsType:{name:"number"},description:""},perPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const B={title:"Navigation/Pagination",component:r,parameters:{layout:"centered"}},i={render:()=>{const[a,e]=n.useState(1);return n.createElement("div",{style:{padding:32,background:"#0B132B",display:"flex",flexDirection:"column",gap:16,alignItems:"center"}},n.createElement(r,{total:100,page:a,perPage:10,onChange:e}),n.createElement("p",{style:{margin:0,fontSize:13,color:"#94A3B8",fontFamily:"Space Mono, monospace"}},"Page ",a," of 10"))}},c={render:()=>{const[a,e]=n.useState(1);return n.createElement("div",{style:{padding:32,background:"#0B132B"}},n.createElement(r,{total:30,page:a,perPage:10,onChange:e}))}},g={render:()=>{const[a,e]=n.useState(5);return n.createElement("div",{style:{padding:32,background:"#0B132B"}},n.createElement(r,{total:500,page:a,perPage:10,onChange:e}))}},p={render:()=>{const[a,e]=n.useState(10);return n.createElement("div",{style:{padding:32,background:"#0B132B"}},n.createElement(r,{total:100,page:a,perPage:10,onChange:e}))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(1);
    return <div style={{
      padding: 32,
      background: '#0B132B',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <Pagination total={100} page={page} perPage={10} onChange={setPage} />
        <p style={{
        margin: 0,
        fontSize: 13,
        color: '#94A3B8',
        fontFamily: 'Space Mono, monospace'
      }}>
          Page {page} of 10
        </p>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(1);
    return <div style={{
      padding: 32,
      background: '#0B132B'
    }}>
        <Pagination total={30} page={page} perPage={10} onChange={setPage} />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(5);
    return <div style={{
      padding: 32,
      background: '#0B132B'
    }}>
        <Pagination total={500} page={page} perPage={10} onChange={setPage} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(10);
    return <div style={{
      padding: 32,
      background: '#0B132B'
    }}>
        <Pagination total={100} page={page} perPage={10} onChange={setPage} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};const _=["Default","FewPages","ManyPages","LastPage"];export{i as Default,c as FewPages,p as LastPage,g as ManyPages,_ as __namedExportsOrder,B as default};
