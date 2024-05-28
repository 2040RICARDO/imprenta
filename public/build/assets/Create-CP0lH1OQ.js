import{W as n,r as m,j as e,d as x}from"./app-CHYGdead.js";import{L as u}from"./Layout-Wfi7iR6g.js";import{I as p}from"./inputtext.esm-H8qzUAnW.js";import{B as h}from"./button.esm-Hv8xCZ0W.js";import{I as g}from"./inputtextarea.esm-CLd9R0Jq.js";import{B as j,Q as f}from"./ReactToastify-EWHmp7L1.js";import"./ripple.esm-CspZCiMg.js";import"./CSSTransition-ZZGb8p9d.js";function E({errors:a,flash:l,permisos:i}){const{data:r,setData:t,post:d}=n({cargo:"",descripcion:"",estado:1});function o(s){s.preventDefault(),d(route("cargoPersonal.store"))}m.useEffect(()=>{(Object.keys(a).length>0||l.message!=null)&&c("Ocurrio un problema!")},[l]);const c=s=>j.error(s,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return e.jsxs(u,{permisos:i,children:[e.jsx("div",{children:e.jsx(f,{})}),e.jsx("div",{className:"grid",children:e.jsx("div",{className:"col-12 md:col-12",children:e.jsxs("div",{className:"card",style:{width:"100%"},children:[e.jsx("h5",{children:"NUEVA CARGO"}),e.jsxs("div",{className:"grid",children:[e.jsx("div",{className:"col-2 md:col-2"}),e.jsx("div",{className:"col-8 md:col-8",children:e.jsxs("form",{onSubmit:o,className:"p-fluid",children:[e.jsx("div",{className:"-mx-3 md:flex mb-6",children:e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"cargo"}),e.jsx(p,{id:"cargo",name:"cargo",value:r.cargo,onChange:s=>t("cargo",s.target.value.toUpperCase()),required:!0}),a.cargo&&e.jsx("div",{className:"text-red-500",children:a.cargo})]})}),e.jsx("div",{className:"-mx-3 md:flex mb-6",children:e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"DESCRIPCION"}),e.jsx(g,{id:"descripcion",name:"descripcion",autoResize:!0,value:r.descripcion,onChange:s=>t("descripcion",s.target.value),rows:5,cols:30,required:!0}),a.descripcion&&e.jsx("div",{className:"text-red-500",children:a.descripcion})]})}),e.jsx("div",{className:"-mx-3 md:flex mb-6",children:e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",htmlFor:"estado",children:"ESTADO"}),e.jsxs("div",{className:"flex align-items-center ",children:[e.jsx("input",{type:"radio",id:"estado1",name:"estado",value:"1",checked:r.estado===1,onChange:s=>t("estado",parseInt(s.target.value)),style:{width:"1.5rem",height:"1.5rem"}}),e.jsx("label",{htmlFor:"estado1",className:"ml-2",children:"HABILITADO"})]}),e.jsxs("div",{className:"flex align-items-center pt-3",children:[e.jsx("input",{type:"radio",id:"estado2",name:"estado",value:"0",checked:r.estado===0,onChange:s=>t("estado",parseInt(s.target.value)),style:{width:"1.5rem",height:"1.5rem"}}),e.jsx("label",{htmlFor:"estado2",className:"ml-2",children:"DESHABILITADO"})]})]})}),e.jsx("div",{className:"p-field mb-4 flex justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx(h,{type:"submit",label:"Guardar",className:"p-button-sm mr-2",severity:"info",outlined:!0}),e.jsx(x,{className:"p-button p-button-sm p-button-danger",href:route("cargoPersonal.index"),style:{color:"white"},children:"Cancelar"})]})})]})}),e.jsx("div",{className:"col-2 md:col-2"})]})]})})})]})}export{E as default};