import{r as u}from"./chunks/index.55d02811.js";function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$.apply(this,arguments)}var S;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(S||(S={}));var F=function(e){return e},z="beforeunload",ie="popstate";function se(e){e===void 0&&(e={});var t=e,r=t.window,n=r===void 0?document.defaultView:r,a=n.history;function o(){var s=n.location,h=s.pathname,g=s.search,P=s.hash,y=a.state||{};return[y.idx,F({pathname:h,search:g,hash:P,state:y.usr||null,key:y.key||"default"})]}var l=null;function i(){if(l)v.call(l),l=null;else{var s=S.Pop,h=o(),g=h[0],P=h[1];if(v.length){if(g!=null){var y=p-g;y&&(l={action:s,location:P,retry:function(){k(y*-1)}},k(y))}}else W(s)}}n.addEventListener(ie,i);var c=S.Pop,m=o(),p=m[0],x=m[1],d=Y(),v=Y();p==null&&(p=0,a.replaceState($({},a.state,{idx:p}),""));function b(s){return typeof s=="string"?s:H(s)}function O(s,h){return h===void 0&&(h=null),F($({pathname:x.pathname,hash:"",search:""},typeof s=="string"?C(s):s,{state:h,key:ce()}))}function J(s,h){return[{usr:s.state,key:s.key,idx:h},b(s)]}function V(s,h,g){return!v.length||(v.call({action:s,location:h,retry:g}),!1)}function W(s){c=s;var h=o();p=h[0],x=h[1],d.call({action:c,location:x})}function K(s,h){var g=S.Push,P=O(s,h);function y(){K(s,h)}if(V(g,P,y)){var w=J(P,p+1),N=w[0],_=w[1];try{a.pushState(N,"",_)}catch{n.location.assign(_)}W(g)}}function U(s,h){var g=S.Replace,P=O(s,h);function y(){U(s,h)}if(V(g,P,y)){var w=J(P,p),N=w[0],_=w[1];a.replaceState(N,"",_),W(g)}}function k(s){a.go(s)}var le={get action(){return c},get location(){return x},createHref:b,push:K,replace:U,go:k,back:function(){k(-1)},forward:function(){k(1)},listen:function(h){return d.push(h)},block:function(h){var g=v.push(h);return v.length===1&&n.addEventListener(z,q),function(){g(),v.length||n.removeEventListener(z,q)}}};return le}function q(e){e.preventDefault(),e.returnValue=""}function Y(){var e=[];return{get length(){return e.length},push:function(r){return e.push(r),function(){e=e.filter(function(n){return n!==r})}},call:function(r){e.forEach(function(n){return n&&n(r)})}}}function ce(){return Math.random().toString(36).substr(2,8)}function H(e){var t=e.pathname,r=t===void 0?"/":t,n=e.search,a=n===void 0?"":n,o=e.hash,l=o===void 0?"":o;return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function C(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const D=u.exports.createContext(null),G=u.exports.createContext(null),B=u.exports.createContext({outlet:null,matches:[]});function R(e,t){if(!e)throw new Error(t)}function ue(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?C(t):t,a=Z(n.pathname||"/",r);if(a==null)return null;let o=Q(e);fe(o);let l=null;for(let i=0;l==null&&i<o.length;++i)l=Pe(o[i],a);return l}function Q(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((a,o)=>{let l={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(n)||R(!1),l.relativePath=l.relativePath.slice(n.length));let i=j([n,l.relativePath]),c=r.concat(l);a.children&&a.children.length>0&&(a.index===!0&&R(!1),Q(a.children,t,c,i)),!(a.path==null&&!a.index)&&t.push({path:i,score:ge(i,a.index),routesMeta:c})}),t}function fe(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ye(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const he=/^:\w+$/,pe=3,me=2,de=1,xe=10,ve=-2,A=e=>e==="*";function ge(e,t){let r=e.split("/"),n=r.length;return r.some(A)&&(n+=ve),t&&(n+=me),r.filter(a=>!A(a)).reduce((a,o)=>a+(he.test(o)?pe:o===""?de:xe),n)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Pe(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let l=0;l<r.length;++l){let i=r[l],c=l===r.length-1,m=a==="/"?t:t.slice(a.length)||"/",p=je({path:i.relativePath,caseSensitive:i.caseSensitive,end:c},m);if(!p)return null;Object.assign(n,p.params);let x=i.route;o.push({params:n,pathname:j([a,p.pathname]),pathnameBase:ee(j([a,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(a=j([a,p.pathnameBase]))}return o}function je(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Re(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:n.reduce((m,p,x)=>{if(p==="*"){let d=i[x]||"";l=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return m[p]=Se(i[x]||""),m},{}),pathname:o,pathnameBase:l,pattern:e}}function Re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(l,i)=>(n.push(i),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,t?void 0:"i"),n]}function Se(e,t){try{return decodeURIComponent(e)}catch{return e}}function Ce(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?C(e):e;return{pathname:r?r.startsWith("/")?r:we(r,t):t,search:Oe(n),hash:ke(a)}}function we(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function X(e,t,r){let n=typeof e=="string"?C(e):e,a=e===""||n.pathname===""?"/":n.pathname,o;if(a==null)o=r;else{let i=t.length-1;if(a.startsWith("..")){let c=a.split("/");for(;c[0]==="..";)c.shift(),i-=1;n.pathname=c.join("/")}o=i>=0?t[i]:"/"}let l=Ce(n,o);return a&&a!=="/"&&a.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function be(e){return e===""||e.pathname===""?"/":typeof e=="string"?C(e).pathname:e.pathname}function Z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&r!=="/"?null:e.slice(t.length)||"/"}const j=e=>e.join("/").replace(/\/\/+/g,"/"),ee=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Oe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ke=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ee(e){E()||R(!1);let{basename:t,navigator:r}=u.exports.useContext(D),{hash:n,pathname:a,search:o}=te(e),l=a;if(t!=="/"){let i=be(e),c=i!=null&&i.endsWith("/");l=a==="/"?t+(c?"/":""):j([t,a])}return r.createHref({pathname:l,search:o,hash:n})}function E(){return u.exports.useContext(G)!=null}function L(){return E()||R(!1),u.exports.useContext(G).location}function _e(){E()||R(!1);let{basename:e,navigator:t}=u.exports.useContext(D),{matches:r}=u.exports.useContext(B),{pathname:n}=L(),a=JSON.stringify(r.map(i=>i.pathnameBase)),o=u.exports.useRef(!1);return u.exports.useEffect(()=>{o.current=!0}),u.exports.useCallback(function(i,c){if(c===void 0&&(c={}),!o.current)return;if(typeof i=="number"){t.go(i);return}let m=X(i,JSON.parse(a),n);e!=="/"&&(m.pathname=j([e,m.pathname])),(c.replace?t.replace:t.push)(m,c.state)},[e,t,a,n])}function te(e){let{matches:t}=u.exports.useContext(B),{pathname:r}=L(),n=JSON.stringify(t.map(a=>a.pathnameBase));return u.exports.useMemo(()=>X(e,JSON.parse(n),r),[e,n,r])}function $e(e,t){E()||R(!1);let{matches:r}=u.exports.useContext(B),n=r[r.length-1],a=n?n.params:{};n&&n.pathname;let o=n?n.pathnameBase:"/";n&&n.route;let l=L(),i;if(t){var c;let d=typeof t=="string"?C(t):t;o==="/"||((c=d.pathname)==null?void 0:c.startsWith(o))||R(!1),i=d}else i=l;let m=i.pathname||"/",p=o==="/"?m:m.slice(o.length)||"/",x=ue(e,{pathname:p});return Be(x&&x.map(d=>Object.assign({},d,{params:Object.assign({},a,d.params),pathname:j([o,d.pathname]),pathnameBase:d.pathnameBase==="/"?o:j([o,d.pathnameBase])})),r)}function Be(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((r,n,a)=>u.exports.createElement(B.Provider,{children:n.route.element!==void 0?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,a+1))}}),null)}function Le(e){let{basename:t="/",children:r=null,location:n,navigationType:a=S.Pop,navigator:o,static:l=!1}=e;E()&&R(!1);let i=ee(t),c=u.exports.useMemo(()=>({basename:i,navigator:o,static:l}),[i,o,l]);typeof n=="string"&&(n=C(n));let{pathname:m="/",search:p="",hash:x="",state:d=null,key:v="default"}=n,b=u.exports.useMemo(()=>{let O=Z(m,i);return O==null?null:{pathname:O,search:p,hash:x,state:d,key:v}},[i,m,p,x,d,v]);return b==null?null:u.exports.createElement(D.Provider,{value:c},u.exports.createElement(G.Provider,{children:r,value:{location:b,navigationType:a}}))}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}function Te(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}const We=["onClick","reloadDocument","replace","state","target","to"];function Ne(e){let{basename:t,children:r,window:n}=e,a=u.exports.useRef();a.current==null&&(a.current=se({window:n}));let o=a.current,[l,i]=u.exports.useState({action:o.action,location:o.location});return u.exports.useLayoutEffect(()=>o.listen(i),[o]),u.exports.createElement(Le,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:o})}function He(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ne=u.exports.forwardRef(function(t,r){let{onClick:n,reloadDocument:a,replace:o=!1,state:l,target:i,to:c}=t,m=Te(t,We),p=Ee(c),x=Ie(c,{replace:o,state:l,target:i});function d(v){n&&n(v),!v.defaultPrevented&&!a&&x(v)}return u.exports.createElement("a",I({},m,{href:p,onClick:d,ref:r,target:i}))});function Ie(e,t){let{target:r,replace:n,state:a}=t===void 0?{}:t,o=_e(),l=L(),i=te(e);return u.exports.useCallback(c=>{if(c.button===0&&(!r||r==="_self")&&!He(c)){c.preventDefault();let m=!!n||H(l)===H(i);o(e,{replace:m,state:a})}},[l,o,i,n,a,r,e])}var f={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=u.exports,De=Symbol.for("react.element"),Ge=Symbol.for("react.fragment"),Je=Object.prototype.hasOwnProperty,Ve=Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0};function re(e,t,r){var n,a={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Je.call(t,n)&&!Ke.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:De,type:e,key:o,ref:l,props:a,_owner:Ve.current}}T.Fragment=Ge;T.jsx=re;T.jsxs=re;(function(e){e.exports=T})(f);let M="react";const Ue=[{path:M,element:f.exports.jsx(ze,{})},{path:M+"/page1",element:f.exports.jsx(qe,{})}];function ae(){return f.exports.jsx("a",{href:"/solid",children:"Go To Solid"})}function oe(){return f.exports.jsx("a",{href:"/",children:"Go To HOme"})}function Qe(){return f.exports.jsxs(Ne,{children:[f.exports.jsx("h1",{children:"React title"}),f.exports.jsx(Fe,{})]})}function Fe(){return $e(Ue)}function ze(){return f.exports.jsxs("div",{children:[f.exports.jsx("h1",{children:"Root Page"}),f.exports.jsxs("ul",{children:[f.exports.jsx("li",{children:f.exports.jsx(ne,{to:"page1",children:"Go to Page 1"})}),f.exports.jsx("li",{children:f.exports.jsx(ae,{})}),f.exports.jsx("li",{children:f.exports.jsx(oe,{})})]})]})}function qe(){return f.exports.jsxs("div",{children:[f.exports.jsx("h1",{children:"Page 1"}),f.exports.jsxs("ul",{children:[f.exports.jsx("li",{children:f.exports.jsx(ne,{to:"/"+M,children:"Got to Root"})}),f.exports.jsx("li",{children:f.exports.jsx(ae,{})}),f.exports.jsx("li",{children:f.exports.jsx(oe,{})})]})]})}export{Qe as default,Ue as routes};
