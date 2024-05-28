import{r as i,W as Y,j as e,d as c}from"./app-CHYGdead.js";import{L as Q}from"./Layout-Wfi7iR6g.js";import{D as U,C as n}from"./column.esm--qm2aFAg.js";import{I as q}from"./inputtext.esm-H8qzUAnW.js";import{T as j}from"./button.esm-Hv8xCZ0W.js";import{D as y}from"./dialog.esm-on3wmI5o.js";import"./sweetalert2.all-5vuvPjx3.js";import{P as J}from"./PrimaryButton-BWuVdxCS.js";import{D as v}from"./react-datepicker-BTsJ8OmL.js";import{B as K,Q as X}from"./ReactToastify-EWHmp7L1.js";import"./ripple.esm-CspZCiMg.js";import"./CSSTransition-ZZGb8p9d.js";import"./dropdown.esm-Dw636Vfu.js";import"./index.esm-wyNcokfP.js";import"./overlayservice.esm-DCauq-q2.js";import"./csstransition.esm-CwpohZbB.js";import"./index.esm-Dox7eZ0I.js";function je({auth:Z,entradaMateriales:p,message:x,permisos:o}){o.some(t=>t.name==="ver-entrada");const w=o.some(t=>t.name==="crear-entrada"),N=o.some(t=>t.name==="editar-entrada"),E=o.some(t=>t.name==="reporte-entrada"),[S,D]=i.useState(0),[R,I]=i.useState(10),[C,m]=i.useState([]),[A,k]=i.useState(""),[r,F]=i.useState(null),[T,g]=i.useState(!1);i.useEffect(()=>{x!=null&&M(x),m(p)},[p]);const M=t=>K.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),O=t=>{D(t.first),I(t.rows)},L=t=>{k(t.target.value),$(t.target.value)},$=t=>{const s=p.filter(a=>a.id.toString().includes(t)||a.descripcion.toLowerCase().includes(t.toLowerCase()));m(s)},P=t=>{F(t),g(!0)},H=()=>{g(!1)},u=()=>{const t=new Date,s=t.getFullYear(),a=t.getMonth()+1,d=t.getDate();return`${s}-${a.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`},{data:l,setData:b,post:ee,processing:z,errors:te}=Y({fechaInicio:u(),fechaFinal:u()}),[B,f]=i.useState(!1),G=()=>{f(!0)},_=()=>{f(!1)},V=()=>{const t=l.fechaInicio,s=l.fechaFinal;window.open(`/reporte/entradaMaterial/${t}/${s}`,"_blank")},W=e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"p-input-icon-left",style:{marginRight:"10px"},children:[e.jsx("i",{className:"pi pi-search"}),e.jsx(q,{type:"search",value:A,onChange:L,placeholder:"Buscar..."})]}),e.jsxs("div",{className:"items-end",children:[w&&e.jsx(c,{href:route("entradaMaterial.create"),className:"p-button p-button-warning",style:{marginLeft:"10px",color:"black"},children:"Nueva Entrada de Material"}),E&&e.jsx(c,{onClick:t=>{t.preventDefault(),G()},className:"p-button p-button-info",style:{marginLeft:"10px",color:"black"},children:"Reporte"})]})]});return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{permisos:o,children:[e.jsx("div",{children:e.jsx(X,{})}),e.jsx("div",{className:"grid",children:e.jsx("div",{className:"col-12 md:col-12",children:e.jsxs("div",{className:"card",children:[e.jsx("h5",{children:"Lista de Entradas"}),e.jsxs(U,{value:C,paginator:!0,first:S,rows:R,onPage:O,header:W,emptyMessage:"No hay registros encontrados",children:[e.jsx(n,{field:"id",header:"ID"}),e.jsx(n,{field:"nombre",header:"Material"}),e.jsx(n,{field:"categoria",header:"Categoria"}),e.jsx(n,{field:"cantidad",header:"Tipo"}),e.jsx(n,{field:"fecha",header:"Fecha Entrada"}),e.jsx(n,{header:"",body:t=>e.jsxs("div",{className:"flex justify-around",children:[t.control_entrada==!0&&N&&e.jsxs(c,{href:`/entradaMaterial/edit/${t.id}`,className:"p-button p-button-success p-button-rounded p-button-sm",style:{textDecoration:"none",padding:"0.25rem 0.5rem",fontSize:"0.75rem",marginRight:"5px",borderRadius:"20px"},children:[e.jsx(j,{target:".edit-link",content:"Editar",position:"bottom"}),e.jsx("i",{className:"pi pi-pencil pencil-icon edit-link",style:{marginRight:"2px",fontSize:"0.80rem",color:"black",verticalAlign:"middle"}})]}),e.jsxs(c,{Link:!0,onClick:s=>{s.preventDefault(),P(t)},className:"p-button p-button-info p-button-rounded p-button-sm",style:{textDecoration:"none",padding:"0.25rem 0.5rem",fontSize:"0.75rem",marginRight:"5px",borderRadius:"20px"},children:[e.jsx(j,{target:".show-link",content:"Ver",position:"bottom"}),e.jsx("i",{className:"pi pi-eye pencil-icon show-link",style:{marginRight:"2px",fontSize:"0.80rem",color:"white",verticalAlign:"middle"}})]})]})})]})]})})})]}),e.jsx(y,{visible:T,modal:!0,onHide:H,style:{width:"60%",minWidth:"300px"},children:r&&e.jsx("div",{class:"min-h-screen flex items-center justify-center px-4",children:e.jsxs("div",{class:"max-w-4xl  bg-whiterounded-lg shadow-xl",children:[e.jsxs("div",{class:"p-4 border-b",children:[e.jsx("h2",{class:"text-2xl ",children:"INFORMACION DE LA ENTRADA DE  MATERIAL"}),e.jsxs("p",{class:"text-sm text-gray-500",children:[r.nombre," - (",r.codigo,")"]})]}),e.jsxs("div",{children:[e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"CATEGORIA"}),e.jsx("p",{children:r.categoria})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"DESCRIPCION DE ENTRADA"}),e.jsx("p",{children:r.descipcion})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"CANTIDAD"}),e.jsx("p",{children:r.cantidad})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"COSTO UNITARIO"}),e.jsx("p",{children:r.costo_unitario})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"COSTO TOTAL"}),e.jsx("p",{children:r.costo_total})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"FECHA REGISTRO"}),e.jsx("p",{children:r.fecha})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"GESTION"}),e.jsx("p",{children:r.gestion})]})]})]})})}),e.jsx(y,{visible:B,modal:!0,onHide:_,style:{width:"30%",minWidth:"200px"},children:e.jsx("div",{class:"min-h-screen flex items-center justify-center px-4",children:e.jsxs("div",{class:"max-w-4xl  bg-whiterounded-lg shadow-xl",children:[e.jsx("div",{class:"p-4 border-b",children:e.jsx("h2",{class:"text-2xl ",children:"REPORTE DE ENTRADA DE MATERIAL"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"-mx-3 md:flex mb-6",children:[e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"FECHA INICIO"}),e.jsx(v,{id:"fechaInicio",selected:l.fechaInicio,onChange:t=>{const s=t.getFullYear(),a=t.getMonth()+1,d=t.getDate(),h=`${s}-${a.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`;b("fechaInicio",h)},autocomplete:"off",className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"})]}),e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"FECHA FINAL"}),e.jsx(v,{id:"fechaFinal",selected:l.fechaFinal,onChange:t=>{const s=t.getFullYear(),a=t.getMonth()+1,d=t.getDate(),h=`${s}-${a.toString().padStart(2,"0")}-${d.toString().padStart(2,"0")}`;b("fechaFinal",h)},autocomplete:"off",className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"})]})]}),e.jsx("div",{className:"p-field mb-4 flex justify-between",children:e.jsx("div",{className:"flex",children:e.jsx(J,{onClick:t=>{t.preventDefault(),V()},className:"middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",disabled:z,children:"Reporte"})})})]})]})})})]})}export{je as default};