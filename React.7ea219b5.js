import{r as u}from"./chunks/index.55d02811.js";function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}var S;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(S||(S={}));var z=function(e){return e},q="beforeunload",se="popstate";function ce(e){e===void 0&&(e={});var t=e,r=t.window,n=r===void 0?document.defaultView:r,a=n.history;function o(){var s=n.location,h=s.pathname,g=s.search,P=s.hash,y=a.state||{};return[y.idx,z({pathname:h,search:g,hash:P,state:y.usr||null,key:y.key||"default"})]}var l=null;function i(){if(l)v.call(l),l=null;else{var s=S.Pop,h=o(),g=h[0],P=h[1];if(v.length){if(g!=null){var y=p-g;y&&(l={action:s,location:P,retry:function(){k(y*-1)}},k(y))}}else W(s)}}n.addEventListener(se,i);var c=S.Pop,m=o(),p=m[0],x=m[1],d=A(),v=A();p==null&&(p=0,a.replaceState($({},a.state,{idx:p}),""));function b(s){return typeof s=="string"?s:H(s)}function O(s,h){return h===void 0&&(h=null),z($({pathname:x.pathname,hash:"",search:""},typeof s=="string"?C(s):s,{state:h,key:ue()}))}function V(s,h){return[{usr:s.state,key:s.key,idx:h},b(s)]}function K(s,h,g){return!v.length||(v.call({action:s,location:h,retry:g}),!1)}function W(s){c=s;var h=o();p=h[0],x=h[1],d.call({action:c,location:x})}function U(s,h){var g=S.Push,P=O(s,h);function y(){U(s,h)}if(K(g,P,y)){var w=V(P,p+1),N=w[0],_=w[1];try{a.pushState(N,"",_)}catch{n.location.assign(_)}W(g)}}function F(s,h){var g=S.Replace,P=O(s,h);function y(){F(s,h)}if(K(g,P,y)){var w=V(P,p),N=w[0],_=w[1];a.replaceState(N,"",_),W(g)}}function k(s){a.go(s)}var ie={get action(){return c},get location(){return x},createHref:b,push:U,replace:F,go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(h){return d.push(h)},block:function(h){var g=v.push(h);return v.length===1&&n.addEventListener(q,Y),function(){g(),v.length||n.removeEventListener(q,Y)}}};return ie}function Y(e){e.preventDefault(),e.returnValue=""}function A(){var e=[];return{get length(){return e.length},push:function(r){return e.push(r),function(){e=e.filter(function(n){return n!==r})}},call:function(r){e.forEach(function(n){return n&&n(r)})}}}function ue(){return Math.random().toString(36).substr(2,8)}function H(e){var t=e.pathname,r=t===void 0?"/":t,n=e.search,a=n===void 0?"":n,o=e.hash,l=o===void 0?"":o;return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function C(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const D=u.exports.createContext(null),G=u.exports.createContext(null),B=u.exports.createContext({outlet:null,matches:[]});function R(e,t){if(!e)throw new Error(t)}function fe(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?C(t):t,a=ee(n.pathname||"/",r);if(a==null)return null;let o=X(e);he(o);let l=null;for(let i=0;l==null&&i<o.length;++i)l=je(o[i],a);return l}function X(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((a,o)=>{let l={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(n)||R(!1),l.relativePath=l.relativePath.slice(n.length));let i=j([n,l.relativePath]),c=r.concat(l);a.children&&a.children.length>0&&(a.index===!0&&R(!1),X(a.children,t,c,i)),!(a.path==null&&!a.index)&&t.push({path:i,score:ye(i,a.index),routesMeta:c})}),t}function he(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Pe(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const pe=/^:\w+$/,me=3,de=2,xe=1,ve=10,ge=-2,Q=e=>e==="*";function ye(e,t){let r=e.split("/"),n=r.length;return r.some(Q)&&(n+=ge),t&&(n+=de),r.filter(a=>!Q(a)).reduce((a,o)=>a+(pe.test(o)?me:o===""?xe:ve),n)}function Pe(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function je(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let l=0;l<r.length;++l){let i=r[l],c=l===r.length-1,m=a==="/"?t:t.slice(a.length)||"/",p=Re({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},m);if(!p)return null;Object.assign(n,p.params);let x=i.route;o.push({params:n,pathname:j([a,p.pathname]),pathnameBase:te(j([a,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(a=j([a,p.pathnameBase]))}return o}function Re(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Se(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:n.reduce((m,p,x)=>{if(p==="*"){let d=i[x]||"";l=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return m[p]=Ce(i[x]||""),m},{}),pathname:o,pathnameBase:l,pattern:e}}function Se(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,i)=>(n.push(i),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,t?void 0:"i"),n]}function Ce(e,t){try{return decodeURIComponent(e)}catch{return e}}function we(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?C(e):e;return{pathname:r?r.startsWith("/")?r:be(r,t):t,search:ke(n),hash:Ee(a)}}function be(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function Z(e,t,r){let n=typeof e=="string"?C(e):e,a=e===""||n.pathname===""?"/":n.pathname,o;if(a==null)o=r;else{let i=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),i-=1;n.pathname=c.join("/")}o=i>=0?t[i]:"/"}let l=we(n,o);return a&&a!=="/"&&a.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function Oe(e){return e===""||e.pathname===""?"/":typeof e=="string"?C(e).pathname:e.pathname}function ee(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&r!=="/"?null:e.slice(t.length)||"/"}const j=e=>e.join("/").replace(/\/\/+/g,"/"),te=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ke=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ee=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _e(e){E()||R(!1);let{basename:t,navigator:r}=u.exports.useContext(D),{hash:n,pathname:a,search:o}=ne(e),l=a;if(t!=="/"){let i=Oe(e),c=i!=null&&i.endsWith("/");l=a==="/"?t+(c?"/":""):j([t,a])}return r.createHref({pathname:l,search:o,hash:n})}function E(){return u.exports.useContext(G)!=null}function L(){return E()||R(!1),u.exports.useContext(G).location}function $e(){E()||R(!1);let{basename:e,navigator:t}=u.exports.useContext(D),{matches:r}=u.exports.useContext(B),{pathname:n}=L(),a=JSON.stringify(r.map(i=>i.pathnameBase)),o=u.exports.useRef(!1);return u.exports.useEffect(()=>{o.current=!0}),u.exports.useCallback(function(i,c){if(c===void 0&&(c={}),!o.current)return;if(typeof i=="number"){t.go(i);return}let m=Z(i,JSON.parse(a),n);e!=="/"&&(m.pathname=j([e,m.pathname])),(c.replace?t.replace:t.push)(m,c.state)},[e,t,a,n])}function ne(e){let{matches:t}=u.exports.useContext(B),{pathname:r}=L(),n=JSON.stringify(t.map(a=>a.pathnameBase));return u.exports.useMemo(()=>Z(e,JSON.parse(n),r),[e,n,r])}function Be(e,t){E()||R(!1);let{matches:r}=u.exports.useContext(B),n=r[r.length-1],a=n?n.params:{};n&&n.pathname;let o=n?n.pathnameBase:"/";n&&n.route;let l=L(),i;if(t){var c;let d=typeof t=="string"?C(t):t;o==="/"||((c=d.pathname)==null?void 0:c.startsWith(o))||R(!1),i=d}else i=l;let m=i.pathname||"/",p=o==="/"?m:m.slice(o.length)||"/",x=fe(e,{pathname:p});return Le(x&&x.map(d=>Object.assign({},d,{params:Object.assign({},a,d.params),pathname:j([o,d.pathname]),pathnameBase:d.pathnameBase==="/"?o:j([o,d.pathnameBase])})),r)}function Le(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((r,n,a)=>u.exports.createElement(B.Provider,{children:n.route.element!==void 0?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,a+1))}}),null)}function Te(e){let{basename:t="/",children:r=null,location:n,navigationType:a=S.Pop,navigator:o,static:l=!1}=e;E()&&R(!1);let i=te(t),c=u.exports.useMemo(()=>({basename:i,navigator:o,static:l}),[i,o,l]);typeof n=="string"&&(n=C(n));let{pathname:m="/",search:p="",hash:x="",state:d=null,key:v="default"}=n,b=u.exports.useMemo(()=>{let O=ee(m,i);return O==null?null:{pathname:O,search:p,hash:x,state:d,key:v}},[i,m,p,x,d,v]);return b==null?null:u.exports.createElement(D.Provider,{value:c},u.exports.createElement(G.Provider,{children:r,value:{location:b,navigationType:a}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}function We(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}const Ne=["onClick","reloadDocument","replace","state","target","to"];function He(e){let{basename:t,children:r,window:n}=e,a=u.exports.useRef();a.current==null&&(a.current=ce({window:n}));let o=a.current,[l,i]=u.exports.useState({action:o.action,location:o.location});return u.exports.useLayoutEffect(()=>o.listen(i),[o]),u.exports.createElement(Te,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o})}function Ie(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const re=u.exports.forwardRef(function(t,r){let{onClick:n,reloadDocument:a,replace:o=!1,state:l,target:i,to:c}=t,m=We(t,Ne),p=_e(c),x=Me(c,{replace:o,state:l,target:i});function d(v){n&&n(v),!v.defaultPrevented&&!a&&x(v)}return u.exports.createElement("a",I({},m,{href:p,onClick:d,ref:r,target:i}))});function Me(e,t){let{target:r,replace:n,state:a}=t===void 0?{}:t,o=$e(),l=L(),i=ne(e);return u.exports.useCallback(c=>{if(c.button===0&&(!r||r==="_self")&&!Ie(c)){c.preventDefault();let m=!!n||H(l)===H(i);o(e,{replace:m,state:a})}},[l,o,i,n,a,r,e])}var f={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=u.exports,Ge=Symbol.for("react.element"),Je=Symbol.for("react.fragment"),Ve=Object.prototype.hasOwnProperty,Ke=De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ue={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,r){var n,a={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Ve.call(t,n)&&!Ue.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Ge,type:e,key:o,ref:l,props:a,_owner:Ke.current}}T.Fragment=Je;T.jsx=ae;T.jsxs=ae;(function(e){e.exports=T})(f);const J="micro-frontends-astro";let M=J+"/react";const Fe=[{path:M,element:f.exports.jsx(qe,{})},{path:M+"/page1",element:f.exports.jsx(Ye,{})}];function oe(){return f.exports.jsx("a",{href:`/${J}/solid`,children:"Go To Solid"})}function le(){return f.exports.jsx("a",{href:"/"+J,children:"Go To Home"})}function Xe(){return f.exports.jsxs(He,{children:[f.exports.jsx("h1",{children:"React title"}),f.exports.jsx(ze,{})]})}function ze(){return Be(Fe)}function qe(){return f.exports.jsxs("div",{children:[f.exports.jsx("h1",{children:"Root Page"}),f.exports.jsxs("ul",{children:[f.exports.jsx("li",{children:f.exports.jsx(re,{to:"page1",children:"Go to Page 1"})}),f.exports.jsx("li",{children:f.exports.jsx(oe,{})}),f.exports.jsx("li",{children:f.exports.jsx(le,{})})]})]})}function Ye(){return f.exports.jsxs("div",{children:[f.exports.jsx("h1",{children:"Page 1"}),f.exports.jsxs("ul",{children:[f.exports.jsx("li",{children:f.exports.jsx(re,{to:"/"+M,children:"Got to Root"})}),f.exports.jsx("li",{children:f.exports.jsx(oe,{})}),f.exports.jsx("li",{children:f.exports.jsx(le,{})})]})]})}export{Xe as default,Fe as routes};
