import{r as i,W as Q,j as e,d as c}from"./app-CHYGdead.js";import{L as _}from"./Layout-Wfi7iR6g.js";import{D as J,C as d}from"./column.esm--qm2aFAg.js";import{I as K}from"./inputtext.esm-H8qzUAnW.js";import{T as j}from"./button.esm-Hv8xCZ0W.js";import{D as y}from"./dialog.esm-on3wmI5o.js";import"./sweetalert2.all-5vuvPjx3.js";import{P as U}from"./PrimaryButton-BWuVdxCS.js";import{D as v}from"./react-datepicker-BTsJ8OmL.js";import{B as X,Q as Z}from"./ReactToastify-EWHmp7L1.js";import"./ripple.esm-CspZCiMg.js";import"./CSSTransition-ZZGb8p9d.js";import"./dropdown.esm-Dw636Vfu.js";import"./index.esm-wyNcokfP.js";import"./overlayservice.esm-DCauq-q2.js";import"./csstransition.esm-CwpohZbB.js";import"./index.esm-Dox7eZ0I.js";function ye({auth:ee,salidaMateriales:p,personales:S,message:m,permisos:o}){o.some(s=>s.name==="ver-salida");const w=o.some(s=>s.name==="crear-salida"),N=o.some(s=>s.name==="editar-salida"),I=o.some(s=>s.name==="reporte-salida"),[D,k]=i.useState(0),[A,C]=i.useState(10),[R,g]=i.useState([]),[F,E]=i.useState(""),[a,M]=i.useState(null),[L,b]=i.useState(!1);i.useEffect(()=>{m!=null&&O(m),g(p)},[p]);const O=s=>X.success(s,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),$=s=>{k(s.first),C(s.rows)},T=s=>{E(s.target.value),P(s.target.value)},P=s=>{const t=p.filter(r=>r.id.toString().includes(s)||r.descripcion.toLowerCase().includes(s.toLowerCase()));g(t)},H=s=>{M(s),b(!0)},z=()=>{b(!1)},u=()=>{const s=new Date,t=s.getFullYear(),r=s.getMonth()+1,n=s.getDate();return`${t}-${r.toString().padStart(2,"0")}-${n.toString().padStart(2,"0")}`},{data:l,setData:h,post:se,processing:B,errors:ae}=Q({fechaInicio:u(),fechaFinal:u(),personalId:0}),[G,f]=i.useState(!1),V=()=>{f(!0)},W=()=>{f(!1)},Y=()=>{const s=l.fechaInicio,t=l.fechaFinal,r=l.personalId;window.open(`/reporte/salidaMaterial/${s}/${t}/${r}`,"_blank")},q=e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"p-input-icon-left",style:{marginRight:"10px"},children:[e.jsx("i",{className:"pi pi-search"}),e.jsx(K,{type:"search",value:F,onChange:T,placeholder:"Buscar..."})]}),e.jsxs("div",{className:"items-end",children:[w&&e.jsx(c,{href:route("salidaMaterial.create"),className:"p-button p-button-warning",style:{marginLeft:"10px",color:"black"},children:"Nueva Salida de Material"}),I&&e.jsx(c,{onClick:s=>{s.preventDefault(),V()},className:"p-button p-button-info",style:{marginLeft:"10px",color:"black"},children:"Reporte"})]})]});return e.jsxs(e.Fragment,{children:[e.jsxs(_,{permisos:o,children:[e.jsx("div",{children:e.jsx(Z,{})}),e.jsx("div",{className:"grid",children:e.jsx("div",{className:"col-12 md:col-12",children:e.jsxs("div",{className:"card",children:[e.jsx("h5",{children:"Lista de Salidas"}),e.jsxs(J,{value:R,paginator:!0,first:D,rows:A,onPage:$,header:q,emptyMessage:"No hay registros encontrados",children:[e.jsx(d,{field:"id",header:"ID"}),e.jsx(d,{field:"nombreMaterial",header:"Material"}),e.jsx(d,{field:"categoria",header:"Categoria"}),e.jsx(d,{field:"cantidad",header:"Tipo"}),e.jsx(d,{field:"fecha",header:"Fecha Salida"}),e.jsx(d,{header:"",body:s=>e.jsxs("div",{className:"flex justify-around",children:[N&&e.jsxs(c,{href:`/salidaMaterial/edit/${s.id}`,className:"p-button p-button-success p-button-rounded p-button-sm",style:{textDecoration:"none",padding:"0.25rem 0.5rem",fontSize:"0.75rem",marginRight:"5px",borderRadius:"20px"},children:[e.jsx(j,{target:".edit-link",content:"Editar",position:"bottom"}),e.jsx("i",{className:"pi pi-pencil pencil-icon edit-link",style:{marginRight:"2px",fontSize:"0.80rem",color:"black",verticalAlign:"middle"}})]}),e.jsxs(c,{Link:!0,onClick:t=>{t.preventDefault(),H(s)},className:"p-button p-button-info p-button-rounded p-button-sm",style:{textDecoration:"none",padding:"0.25rem 0.5rem",fontSize:"0.75rem",marginRight:"5px",borderRadius:"20px"},children:[e.jsx(j,{target:".show-link",content:"Ver",position:"bottom"}),e.jsx("i",{className:"pi pi-eye pencil-icon show-link",style:{marginRight:"2px",fontSize:"0.80rem",color:"white",verticalAlign:"middle"}})]})]})})]})]})})})]}),e.jsx(y,{visible:L,modal:!0,onHide:z,style:{width:"60%",minWidth:"300px"},children:a&&e.jsx("div",{class:"min-h-screen flex items-center justify-center px-4",children:e.jsxs("div",{class:"max-w-4xl  bg-whiterounded-lg shadow-xl",children:[e.jsxs("div",{class:"p-4 border-b",children:[e.jsx("h2",{class:"text-2xl ",children:"INFORMACION DE LA SALIDA DE  MATERIAL"}),e.jsxs("p",{class:"text-sm text-gray-500",children:[a.nombre," - (",a.codigo,")"]})]}),e.jsxs("div",{children:[e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"CATEGORIA"}),e.jsx("p",{children:a.categoria})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"DESCRIPCION DE SALIDA"}),e.jsx("p",{children:a.descipcion})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"CANTIDAD"}),e.jsx("p",{children:a.cantidad})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"PERSONAL"}),e.jsxs("p",{children:[a.grado," ",a.nombre," ",a.apellidos]})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"CARGO"}),e.jsx("p",{children:a.cargo})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"FECHA SALIDA"}),e.jsx("p",{children:a.fecha})]}),e.jsxs("div",{class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b",children:[e.jsx("p",{class:"text-gray-600",children:"GESTION"}),e.jsx("p",{children:a.gestion})]})]})]})})}),e.jsx(y,{visible:G,modal:!0,onHide:W,style:{width:"30%",minWidth:"200px"},children:e.jsx("div",{class:"min-h-screen flex items-center justify-center px-4",children:e.jsxs("div",{class:"max-w-4xl  bg-whiterounded-lg shadow-xl",children:[e.jsx("div",{class:"p-4 border-b",children:e.jsx("h2",{class:"text-2xl ",children:"REPORTE SALIDA DE MATERIAL"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"-mx-3 md:flex mb-6",children:[e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"FECHA INICIO"}),e.jsx(v,{id:"fechaInicio",selected:l.fechaInicio,onChange:s=>{const t=s.getFullYear(),r=s.getMonth()+1,n=s.getDate(),x=`${t}-${r.toString().padStart(2,"0")}-${n.toString().padStart(2,"0")}`;h("fechaInicio",x)},autocomplete:"off",className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"})]}),e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"FECHA FINAL"}),e.jsx(v,{id:"fechaFinal",selected:l.fechaFinal,onChange:s=>{const t=s.getFullYear(),r=s.getMonth()+1,n=s.getDate(),x=`${t}-${r.toString().padStart(2,"0")}-${n.toString().padStart(2,"0")}`;h("fechaFinal",x)},autocomplete:"off",className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"})]})]}),e.jsx("div",{className:"-mx-3 md:flex mb-6",children:e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"PERSONAL"}),e.jsxs("select",{id:"personalId",className:" block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3",value:l.personalId,onChange:s=>{h("personalId",s.target.value)},required:!0,children:[e.jsx("option",{value:0,children:"TODOS"}),S.map(s=>e.jsxs("option",{value:s.id,children:[s.grado,s.nombre," ",s.apellidos]},s.id))]})]})}),e.jsx("div",{className:"p-field mb-4 flex justify-between",children:e.jsx("div",{className:"flex",children:e.jsx(U,{onClick:s=>{s.preventDefault(),Y()},className:"middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",disabled:B,children:"Reporte"})})})]})]})})})]})}export{ye as default};
