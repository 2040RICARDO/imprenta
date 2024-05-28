import{W as N,r as k,j as e,d as w}from"./app-CHYGdead.js";import{L as y}from"./Layout-Wfi7iR6g.js";import{I as u}from"./inputtext.esm-H8qzUAnW.js";import{B as C}from"./button.esm-Hv8xCZ0W.js";import{I as g}from"./inputtextarea.esm-CLd9R0Jq.js";import{I as b}from"./InputError-Cw5M147p.js";import{B as D,Q as A}from"./ReactToastify-EWHmp7L1.js";import"./ripple.esm-CspZCiMg.js";import"./CSSTransition-ZZGb8p9d.js";function B({errors:i,salidaMaterial:r,materiales:n,personales:o,material:p,personal:f,permisos:h}){const{data:d,setData:t,put:j}=N({descripcion:r.descripcion,cantidad:r.cantidad,materialId:r.material_id,personalId:r.personal_id,descripcionMaterial:p.descripcion,cantidadDisponible:parseInt(p.stock)+parseInt(r.cantidad),cargo:f.cargo,disabledInput:!1}),m=r.material_id,x=r.cantidad;console.log(d.cantidadDisponible);function I(a){a.preventDefault(),j(route("salidaMaterial.update",{id:r.id}))}k.useEffect(()=>{(Object.keys(i).length>0||flash.message!=null)&&v("Ocurrio un problema!")},[flash]);const v=a=>D.error(a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});return e.jsxs(y,{permisos:h,children:[e.jsx("div",{children:e.jsx(A,{})}),e.jsx("div",{className:"grid",children:e.jsx("div",{className:"col-12 md:col-12",children:e.jsxs("div",{className:"card",style:{width:"100%"},children:[e.jsx("h5",{children:"NUEVA SALIDA DE MATERIAL"}),e.jsxs("div",{className:"grid",children:[e.jsx("div",{className:"col-2 md:col-2"}),e.jsx("div",{className:"col-8 md:col-8",children:e.jsxs("form",{onSubmit:I,className:"p-fluid",children:[e.jsxs("div",{className:"-mx-3 md:flex mb-6",children:[e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"CANTIDAD"}),e.jsx(u,{keyfilter:"int",id:"cantidad",name:"cantidad",value:d.cantidad,disabled:d.disabledInput,onChange:a=>{const l=a.target.value.trim(),s=l===""?"":parseInt(l);s<=d.cantidadDisponible?t("cantidad",s):console.log("La cantidad introducida supera la cantidad disponible")},required:!0}),e.jsxs("div",{className:"text-gray-400",children:["Cantida Disponible :",d.cantidadDisponible]}),i.cantidad&&e.jsx("div",{className:"text-red-500",children:i.cantidad})]}),e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"MATERIAL"}),e.jsx("select",{id:"materialId",className:" block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3",value:d.materialId,onChange:a=>{t("materialId",a.target.value);const l=parseInt(a.target.value),s=n.find(c=>c.id===l);s&&t({descripcion:d.descripcion,cantidad:"",personalId:d.personalId,materialId:a.target.value,descripcionMaterial:s.descripcion,cantidadDisponible:m==s.id?parseInt(s.stock)+parseInt(x):s.stock,disabledInput:m==a.target.value?parseInt(s.stock)+parseInt(x)==0:s.stock==0,cargo:d.cargo})},required:!0,children:n.map(a=>e.jsx("option",{value:a.id,children:a.nombre},a.id))}),e.jsx(b,{className:"text-red text-xs italic",message:i.materialId})]}),e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"DESCRIPCION MATERIAL"}),e.jsx(g,{id:"descripcionMaterial",name:"descripcionMaterial",autoResize:!0,value:d.descripcionMaterial,onChange:a=>t("descripcionMaterial",a.target.value),rows:5,cols:30,disabled:!0}),i.descripcionMaterial&&e.jsx("div",{className:"text-red-500",children:i.descripcionMaterial})]})]}),e.jsx("div",{className:"-mx-3 md:flex mb-6",children:e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"DESCRIPCION"}),e.jsx(g,{id:"descripcion",name:"descripcion",autoResize:!0,value:d.descripcion,onChange:a=>t("descripcion",a.target.value),rows:5,cols:30,required:!0}),i.descripcion&&e.jsx("div",{className:"text-red-500",children:i.descripcion})]})}),e.jsxs("div",{className:"-mx-3 md:flex mb-6",children:[e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"PERSONAL"}),e.jsx("select",{id:"personalId",className:" block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3",value:d.personalId,onChange:a=>{t("personalId",a.target.value);const l=parseInt(a.target.value),s=o.find(c=>c.id===l);s&&t({descripcion:d.descripcion,cantidad:d.cantidad,personalId:a.target.value,materialId:d.materialId,descripcionMaterial:d.descripcionMaterial,cantidadDisponible:d.cantidadDisponible,disabledInput:d.disabledInput,cargo:s.cargo})},required:!0,children:o.map(a=>e.jsxs("option",{value:a.id,children:[a.grado,a.nombre," ",a.apellidos]},a.id))}),e.jsx(b,{className:"text-red text-xs italic",message:i.personalId})]}),e.jsxs("div",{className:"md:w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2",for:"grid-password",children:"CARGO PERSONAL"}),e.jsx(u,{id:"cargo",name:"cargo",value:d.cargo,onChange:a=>{t("cargo",a.target.value)},disabled:!0}),i.cargo&&e.jsx("div",{className:"text-red-500",children:i.cargo})]})]}),e.jsx("div",{className:"p-field mb-4 flex justify-between",children:e.jsxs("div",{className:"flex",children:[e.jsx(C,{type:"submit",label:"Actualizar",className:"p-button-sm mr-2",severity:"info",outlined:!0}),e.jsx(w,{className:"p-button p-button-sm p-button-danger",href:route("salidaMaterial.index"),style:{color:"white"},children:"Cancelar"})]})})]})}),e.jsx("div",{className:"col-2 md:col-2"})]})]})})})]})}export{B as default};