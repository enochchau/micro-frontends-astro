import{y as u,z as h,A as y,k as b}from"./chunks/web.33a095e2.js";var w=r=>(n,s,o,{client:a})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!r.hasAttribute("ssr"))return;const d=a==="only"?u:h;let t={};if(Object.keys(o).length>0)if(y.context)r.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,f]of Object.entries(o))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=f;const{default:l,...i}=t,c=r.dataset.solidRenderId;d(()=>b(n,{...s,...i,children:l}),r,{renderId:c})};export{w as default};
