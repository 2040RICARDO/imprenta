import{r as s,W as O,j as e,d as i}from"./app-CHYGdead.js";import{L as P}from"./Layout-Wfi7iR6g.js";import{D as B,C as a}from"./column.esm--qm2aFAg.js";import{I as H}from"./inputtext.esm-H8qzUAnW.js";import{T as F}from"./button.esm-Hv8xCZ0W.js";import{M}from"./message.esm-CNsykkJa.js";import"./sweetalert2.all-5vuvPjx3.js";import{B as $,Q as z}from"./ReactToastify-EWHmp7L1.js";import{D as G}from"./dialog.esm-on3wmI5o.js";import{P as W}from"./PrimaryButton-BWuVdxCS.js";import"./ripple.esm-CspZCiMg.js";import"./CSSTransition-ZZGb8p9d.js";import"./dropdown.esm-Dw636Vfu.js";import"./index.esm-wyNcokfP.js";import"./overlayservice.esm-DCauq-q2.js";import"./csstransition.esm-CwpohZbB.js";import"./index.esm-Dox7eZ0I.js";function ce({auth:q,categorias:o,message:n,permisos:r}){r.some(t=>t.name==="ver-categoria");const m=r.some(t=>t.name==="crear-categoria"),x=r.some(t=>t.name==="editar-categoria"),u=r.some(t=>t.name==="reporte-categoria"),[h,g]=s.useState(0),[f,b]=s.useState(10),[j,l]=s.useState([]),[v,y]=s.useState("");s.useEffect(()=>{n!=null&&w(n),l(o)},[o]);const w=t=>$.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),C=t=>{g(t.first),b(t.rows)},N=t=>{y(t.target.value),D(t.target.value)},D=t=>{const L=o.filter(p=>p.id.toString().includes(t)||p.categoria.toLowerCase().includes(t.toLowerCase()));l(L)},{data:d,setData:R,post:Q,processing:k,errors:V}=O({estado:4}),[I,c]=s.useState(!1),S=()=>{c(!0)},A=()=>{c(!1)},T=()=>{const t=d.estado;window.open(`/reporte/categoria/${t}`,"_blank")},E=e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"p-input-icon-left",style:{marginRight:"10px"},children:[e.jsx("i",{className:"pi pi-search"}),e.jsx(H,{type:"search",value:v,onChange:N,placeholder:"Buscar..."})]}),e.jsxs("div",{className:"items-end",children:[m&&e.jsx(i,{href:route("categoriaProducto.create"),className:"p-button p-button-warning",style:{marginLeft:"10px",color:"black"},children:"Nueva Categoria"}),u&&e.jsx(i,{onClick:t=>{t.preventDefault(),S()},className:"p-button p-button-info",style:{marginLeft:"10px",color:"black"},children:"Reporte"})]})]});return e.jsxs(e.Fragment,{children:[e.jsxs(P,{permisos:r,children:[e.jsx("div",{children:e.jsx(z,{})}),e.jsx("div",{className:"grid",children:e.jsx("div",{className:"col-12 md:col-12",children:e.jsxs("div",{className:"card",children:[e.jsx("h5",{children:"Lista de Categorias"}),e.jsxs(B,{value:j,paginator:!0,first:h,rows:f,onPage:C,header:E,emptyMessage:"No hay registros encontrados",children:[e.jsx(a,{field:"id",header:"ID"}),e.jsx(a,{field:"categoria",header:"Categoria"}),e.jsx(a,{field:"descripcion",header:"Descripcion"}),e.jsx(a,{field:"estado",header:"Estado",body:t=>e.jsx(M,{severity:`${t.estado==1?"success":"error"}`,text:`${t.estado==1?"HABILITADO":"DESHABILITADO"}`})}),e.jsx(a,{header:"",body:t=>e.jsx("div",{className:"flex justify-around",children:x&&e.jsxs(i,{href:`/categoriaProducto/edit/${t.id}`,className:"p-button p-button-success p-button-rounded p-button-sm",style:{textDecoration:"none",padding:"0.25rem 0.5rem",fontSize:"0.75rem",marginRight:"5px",borderRadius:"20px"},children:[e.jsx(F,{target:".edit-link",content:"Editar",position:"bottom"}),e.jsx("i",{className:"pi pi-pencil pencil-icon edit-link",style:{marginRight:"2px",fontSize:"0.80rem",color:"black",verticalAlign:"middle"}})]})})})]})]})})})]}),e.jsx(G,{visible:I,modal:!0,onHide:A,style:{width:"30%",minWidth:"200px"},children:e.jsx("div",{class:"min-h-screen flex items-center justify-center px-4",children:e.jsxs("div",{class:"max-w-4xl  bg-whiterounded-lg shadow-xl",children:[e.jsx("div",{class:"p-4 border-b",children:e.jsx("h2",{class:"text-2xl ",children:"REPORTE CATEGORIAS"})}),e.jsxs("div",{children:[e.jsx("div",{className:"-mx-3 md:flex mb-6",children:e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"ESTADO"}),e.jsxs("select",{id:"estado",className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3",value:d.estado,onChange:t=>R("estado",t.target.value),required:!0,children:[e.jsx("option",{value:4,children:"TODOS"},"4"),e.jsx("option",{value:1,children:"HABILITADO"},"1"),e.jsx("option",{value:0,children:"DESHABILITADO"},"0")]})]})}),e.jsx("div",{className:"p-field mb-4 flex justify-between",children:e.jsx("div",{className:"flex",children:e.jsx(W,{onClick:t=>{t.preventDefault(),T()},className:"middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",disabled:k,children:"Reporte"})})})]})]})})})]})}export{ce as default};