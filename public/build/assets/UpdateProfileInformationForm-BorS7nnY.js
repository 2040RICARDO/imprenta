import{q as p,W as h,j as e,d as v}from"./app-CHYGdead.js";import{I as n}from"./InputError-Cw5M147p.js";import{P as j}from"./PrimaryButton-BWuVdxCS.js";import{I as l}from"./inputtext.esm-H8qzUAnW.js";import{q as g}from"./transition-BpU0LbEK.js";import"./button.esm-Hv8xCZ0W.js";import"./ripple.esm-CspZCiMg.js";function w({mustVerifyEmail:o,status:c,className:m=""}){const r=p().props.auth.user,{data:s,setData:t,patch:d,errors:i,processing:u,recentlySuccessful:x}=h({name:r.name,email:r.email}),f=a=>{a.preventDefault(),d(route("profile.update"))};return e.jsxs("section",{className:m,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium",children:"Información del perfil"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Actualice la información del perfil y la dirección de correo electrónico de su cuenta."})]}),e.jsxs("form",{onSubmit:f,className:"mt-4 space-y-6",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"name",className:"block text-900 font-medium mb-2",children:"Nombre"}),e.jsx(l,{id:"name",type:"text",placeholder:"Name",className:"w-full",value:s.name,onChange:a=>t("name",a.target.value)}),e.jsx(n,{message:i.email,className:""})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"email",className:"block text-900 font-medium mb-2",children:"Correo"}),e.jsx(l,{id:"email",type:"text",placeholder:"Email address",className:"w-full",value:s.email,onChange:a=>t("email",a.target.value)}),e.jsx(n,{message:i.email,className:""})]}),o&&r.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Su dirección de correo electrónico no está verificada.",e.jsx(v,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Haga clic aquí para volver a enviar el correo electrónico de verificación."})]}),c==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"Se ha enviado un nuevo enlace de verificación a su dirección de correo electrónico."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(j,{disabled:u,children:"Guardar"}),e.jsx(g,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Guardar"})})]})]})]})}export{w as default};
