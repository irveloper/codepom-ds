import{R as e}from"./iframe-bFnJFMHy.js";import{j as s}from"./jsx-runtime-BwiOt0A0.js";import{B as m}from"./Button-G8bDWvrl.js";import"./preload-helper-PPVm8Dsz.js";const n=({elevation:t=1,padding:a="md",interactive:u=!1,children:v,className:f="",as:g="div"})=>{const y=["cp-card",`cp-card--elevation-${t}`,a!=="none"?`cp-card--pad-${a}`:"",u?"cp-card--interactive":"",f].filter(Boolean).join(" ");return s.jsx(g,{className:y,children:v})},c=({children:t,className:a=""})=>s.jsx("div",{className:`cp-card__header ${a}`.trim(),children:t}),r=({children:t,className:a=""})=>s.jsx("div",{className:`cp-card__body ${a}`.trim(),children:t}),p=({children:t,className:a=""})=>s.jsx("div",{className:`cp-card__footer ${a}`.trim(),children:t});n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{elevation:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"",defaultValue:{value:"1",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};r.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const F={title:"Components/Card",component:n,parameters:{layout:"centered"},argTypes:{elevation:{control:"select",options:[0,1,2,3,4,5]},padding:{control:"select",options:["none","sm","md","lg"]},interactive:{control:"boolean"}}},o={render:()=>e.createElement("div",{style:{width:360,padding:32,background:"#0B132B"}},e.createElement(n,{elevation:1},e.createElement(c,null,e.createElement("p",{style:{margin:0,fontWeight:600,color:"#F8FAFC"}},"Card Title"),e.createElement("p",{style:{margin:"4px 0 0",fontSize:13,color:"#94A3B8"}},"Card description goes here")),e.createElement(r,null,e.createElement("p",{style:{margin:0,fontSize:14,color:"#94A3B8",lineHeight:1.6}},"This is the card body content. Cards can contain any content, from text to images to interactive components.")),e.createElement(p,null,e.createElement(m,{variant:"ghost",size:"sm"},"Cancel"),e.createElement(m,{variant:"primary",size:"sm"},"Save changes"))))},i={render:()=>e.createElement("div",{style:{width:320,padding:32,background:"#0B132B"}},e.createElement(n,{elevation:1,interactive:!0},e.createElement(r,null,e.createElement("p",{style:{margin:0,fontWeight:600,color:"#F8FAFC"}},"Interactive Card"),e.createElement("p",{style:{margin:"8px 0 0",fontSize:13,color:"#94A3B8"}},"Hover over this card to see the interactive effect."))))},l={render:()=>e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:20,padding:40,background:"#0B132B"}},[0,1,2,3,4,5].map(t=>e.createElement("div",{key:t,style:{width:200}},e.createElement(n,{elevation:t},e.createElement(r,null,e.createElement("p",{style:{margin:0,fontWeight:600,color:"#F8FAFC",fontSize:14}},"Elevation ",t),e.createElement("p",{style:{margin:"4px 0 0",fontSize:12,color:"#94A3B8"}},"cp-card--elevation-",t))))))},d={render:()=>e.createElement("div",{style:{width:360,padding:32,background:"#0B132B"}},e.createElement(n,{elevation:2},e.createElement(c,null,e.createElement("p",{style:{margin:0,fontWeight:600,color:"#F8FAFC"}},"Simple Card")),e.createElement(r,null,e.createElement("p",{style:{margin:0,fontSize:14,color:"#94A3B8"}},"A card without a footer for simpler content presentations."))))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    padding: 32,
    background: '#0B132B'
  }}>
      <Card elevation={1}>
        <CardHeader>
          <p style={{
          margin: 0,
          fontWeight: 600,
          color: '#F8FAFC'
        }}>Card Title</p>
          <p style={{
          margin: '4px 0 0',
          fontSize: 13,
          color: '#94A3B8'
        }}>Card description goes here</p>
        </CardHeader>
        <CardBody>
          <p style={{
          margin: 0,
          fontSize: 14,
          color: '#94A3B8',
          lineHeight: 1.6
        }}>
            This is the card body content. Cards can contain any content, from text to images to interactive components.
          </p>
        </CardBody>
        <CardFooter>
          <Button variant="ghost" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save changes</Button>
        </CardFooter>
      </Card>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    padding: 32,
    background: '#0B132B'
  }}>
      <Card elevation={1} interactive>
        <CardBody>
          <p style={{
          margin: 0,
          fontWeight: 600,
          color: '#F8FAFC'
        }}>Interactive Card</p>
          <p style={{
          margin: '8px 0 0',
          fontSize: 13,
          color: '#94A3B8'
        }}>Hover over this card to see the interactive effect.</p>
        </CardBody>
      </Card>
    </div>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    padding: 40,
    background: '#0B132B'
  }}>
      {([0, 1, 2, 3, 4, 5] as const).map(elevation => <div key={elevation} style={{
      width: 200
    }}>
          <Card elevation={elevation}>
            <CardBody>
              <p style={{
            margin: 0,
            fontWeight: 600,
            color: '#F8FAFC',
            fontSize: 14
          }}>
                Elevation {elevation}
              </p>
              <p style={{
            margin: '4px 0 0',
            fontSize: 12,
            color: '#94A3B8'
          }}>
                cp-card--elevation-{elevation}
              </p>
            </CardBody>
          </Card>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    padding: 32,
    background: '#0B132B'
  }}>
      <Card elevation={2}>
        <CardHeader>
          <p style={{
          margin: 0,
          fontWeight: 600,
          color: '#F8FAFC'
        }}>Simple Card</p>
        </CardHeader>
        <CardBody>
          <p style={{
          margin: 0,
          fontSize: 14,
          color: '#94A3B8'
        }}>
            A card without a footer for simpler content presentations.
          </p>
        </CardBody>
      </Card>
    </div>
}`,...d.parameters?.docs?.source}}};const R=["Default","Interactive","ElevationVariants","WithoutFooter"];export{o as Default,l as ElevationVariants,i as Interactive,d as WithoutFooter,R as __namedExportsOrder,F as default};
