import{R as e}from"./iframe-bFnJFMHy.js";import{j as b}from"./jsx-runtime-BwiOt0A0.js";import{B as a}from"./Button-G8bDWvrl.js";import"./preload-helper-PPVm8Dsz.js";const r=({trigger:o,placement:t="bottom",children:B,className:E=""})=>{const[i,u]=e.useState(!1),v=e.useRef(null);e.useEffect(()=>{if(!i)return;const s=y=>{v.current&&!v.current.contains(y.target)&&u(!1)},h=y=>{y.key==="Escape"&&u(!1)};return document.addEventListener("mousedown",s),document.addEventListener("keydown",h),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("keydown",h)}},[i]);const f=e.useId();return b.jsxs("div",{ref:v,className:["cp-popover-host",`cp-popover-host--${t}`,E].filter(Boolean).join(" "),style:{position:"relative",display:"inline-flex"},children:[b.jsx("div",{className:"cp-popover-trigger",onClick:()=>u(s=>!s),"aria-expanded":i,"aria-controls":f,children:o}),i&&b.jsx("div",{id:f,role:"dialog",className:["cp-popover",`cp-popover--${t}`].join(" "),children:B})]})};r.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const P={title:"Overlays/Popover",component:r,parameters:{layout:"centered"},argTypes:{placement:{control:"select",options:["top","bottom","left","right"]}}},n=({title:o,body:t})=>e.createElement("div",{style:{background:"var(--cp-card, #1a2540)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,padding:16,width:220,boxShadow:"0 8px 32px rgba(0,0,0,0.4)"}},e.createElement("p",{style:{margin:"0 0 6px",fontWeight:600,fontSize:14,color:"#F8FAFC"}},o),e.createElement("p",{style:{margin:0,fontSize:13,color:"#94A3B8",lineHeight:1.5}},t)),d={render:()=>e.createElement("div",{style:{padding:80,background:"#0B132B"}},e.createElement(r,{trigger:e.createElement(a,{variant:"secondary"},"Open Popover"),placement:"bottom"},e.createElement(n,{title:"Popover title",body:"This is the popover content. Click outside to dismiss."})))},l={render:()=>e.createElement("div",{style:{padding:80,background:"#0B132B"}},e.createElement(r,{trigger:e.createElement(a,{variant:"secondary"},"Top"),placement:"top"},e.createElement(n,{title:"Top placement",body:"This popover appears above the trigger."})))},p={render:()=>e.createElement("div",{style:{padding:80,background:"#0B132B"}},e.createElement(r,{trigger:e.createElement(a,{variant:"secondary"},"Bottom"),placement:"bottom"},e.createElement(n,{title:"Bottom placement",body:"This popover appears below the trigger."})))},c={render:()=>e.createElement("div",{style:{padding:80,background:"#0B132B"}},e.createElement(r,{trigger:e.createElement(a,{variant:"secondary"},"Left"),placement:"left"},e.createElement(n,{title:"Left placement",body:"This popover appears to the left of the trigger."})))},m={render:()=>e.createElement("div",{style:{padding:80,background:"#0B132B"}},e.createElement(r,{trigger:e.createElement(a,{variant:"secondary"},"Right"),placement:"right"},e.createElement(n,{title:"Right placement",body:"This popover appears to the right of the trigger."})))},g={render:()=>e.createElement("div",{style:{padding:80,background:"#0B132B"}},e.createElement(r,{trigger:e.createElement(a,{variant:"ghost",size:"sm"},"Maya Chen ▾"),placement:"bottom"},e.createElement("div",{style:{background:"#162035",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,padding:16,width:240,boxShadow:"0 8px 32px rgba(0,0,0,0.5)"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12}},e.createElement("div",{style:{width:36,height:36,borderRadius:"50%",background:"#FBB040",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:"#0B132B",fontSize:13,flexShrink:0}},"MC"),e.createElement("div",null,e.createElement("p",{style:{margin:0,fontWeight:600,fontSize:13,color:"#F8FAFC"}},"Maya Chen"),e.createElement("p",{style:{margin:0,fontSize:12,color:"#94A3B8"}},"maya@codepom.dev"))),e.createElement("div",{style:{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:10,display:"flex",flexDirection:"column",gap:2}},["Profile","Settings","Sign out"].map(o=>e.createElement("button",{key:o,style:{background:"none",border:"none",color:"#94A3B8",fontSize:13,cursor:"pointer",textAlign:"left",padding:"6px 8px",borderRadius:6,fontFamily:"Space Grotesk, sans-serif",transition:"color 0.15s, background 0.15s"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(255,255,255,0.06)",t.currentTarget.style.color="#F8FAFC"},onMouseLeave:t=>{t.currentTarget.style.background="none",t.currentTarget.style.color="#94A3B8"}},o))))))};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#0B132B'
  }}>
      <Popover trigger={<Button variant="secondary">Open Popover</Button>} placement="bottom">
        <PopoverContent title="Popover title" body="This is the popover content. Click outside to dismiss." />
      </Popover>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#0B132B'
  }}>
      <Popover trigger={<Button variant="secondary">Top</Button>} placement="top">
        <PopoverContent title="Top placement" body="This popover appears above the trigger." />
      </Popover>
    </div>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#0B132B'
  }}>
      <Popover trigger={<Button variant="secondary">Bottom</Button>} placement="bottom">
        <PopoverContent title="Bottom placement" body="This popover appears below the trigger." />
      </Popover>
    </div>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#0B132B'
  }}>
      <Popover trigger={<Button variant="secondary">Left</Button>} placement="left">
        <PopoverContent title="Left placement" body="This popover appears to the left of the trigger." />
      </Popover>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#0B132B'
  }}>
      <Popover trigger={<Button variant="secondary">Right</Button>} placement="right">
        <PopoverContent title="Right placement" body="This popover appears to the right of the trigger." />
      </Popover>
    </div>
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#0B132B'
  }}>
      <Popover trigger={<Button variant="ghost" size="sm">Maya Chen ▾</Button>} placement="bottom">
        <div style={{
        background: '#162035',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: 16,
        width: 240,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 12
        }}>
            <div style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: '#FBB040',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#0B132B',
            fontSize: 13,
            flexShrink: 0
          }}>
              MC
            </div>
            <div>
              <p style={{
              margin: 0,
              fontWeight: 600,
              fontSize: 13,
              color: '#F8FAFC'
            }}>Maya Chen</p>
              <p style={{
              margin: 0,
              fontSize: 12,
              color: '#94A3B8'
            }}>maya@codepom.dev</p>
            </div>
          </div>
          <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
            {['Profile', 'Settings', 'Sign out'].map(item => <button key={item} style={{
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            fontSize: 13,
            cursor: 'pointer',
            textAlign: 'left',
            padding: '6px 8px',
            borderRadius: 6,
            fontFamily: 'Space Grotesk, sans-serif',
            transition: 'color 0.15s, background 0.15s'
          }} onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#F8FAFC';
          }} onMouseLeave={e => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = '#94A3B8';
          }}>
                {item}
              </button>)}
          </div>
        </div>
      </Popover>
    </div>
}`,...g.parameters?.docs?.source}}};const R=["Default","Top","Bottom","Left","Right","WithUserCard"];export{p as Bottom,d as Default,c as Left,m as Right,l as Top,g as WithUserCard,R as __namedExportsOrder,P as default};
