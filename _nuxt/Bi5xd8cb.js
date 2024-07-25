import{bw as B,d as Y,A as y,bj as E,i as L,q as J,bx as Q,by as X,aM as Z,bz as ee,aB as C,bA as te,bl as ae,bm as ne,bB as le,bC as re,bq as se,aA as T,bD as oe,bE as ie,bF as ue,p as P,x as ce,br as fe,aI as de,C as j,P as x,j as N,Y as ve,s as ge,a as he,bG as k,bt as V}from"./P5kiPpYD.js";async function O(e,a=B()){const{path:n,matched:t}=a.resolve(e);if(!t.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(n)))return;const l=a._preloadPromises=a._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>O(e,a));a._routePreloaded.add(n);const s=t.map(o=>{var r;return(r=o.components)==null?void 0:r.default}).filter(o=>typeof o=="function");for(const o of s){const r=Promise.resolve(o()).catch(()=>{}).finally(()=>l.splice(l.indexOf(r)));l.push(r)}await Promise.all(l)}const me=(...e)=>e.find(a=>a!==void 0);function ye(e){const a=e.componentName||"NuxtLink";function n(t,l){if(!t||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return t;if(typeof t=="string")return w(t,e.trailingSlash);const s="path"in t&&t.path!==void 0?t.path:l(t).path;return{...t,name:void 0,path:w(s,e.trailingSlash)}}return Y({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:l}){const s=B(),o=se(),r=y(()=>{const i=t.to||t.href||"";return n(i,s.resolve)}),u=y(()=>typeof r.value=="string"&&E(r.value,{acceptRelative:!0})),f=y(()=>t.target&&t.target!=="_self"),b=y(()=>t.external||f.value?!0:typeof r.value=="object"?!1:r.value===""||u.value),S=L(!1),g=L(null),W=i=>{var v;g.value=t.custom?(v=i==null?void 0:i.$el)==null?void 0:v.nextElementSibling:i==null?void 0:i.$el};if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!Ce()){const v=T();let h,c=null;J(()=>{const p=be();Q(()=>{h=X(()=>{var d;(d=g==null?void 0:g.value)!=null&&d.tagName&&(c=p.observe(g.value,async()=>{c==null||c(),c=null;const m=typeof r.value=="string"?r.value:s.resolve(r.value).fullPath;await Promise.all([v.hooks.callHook("link:prefetch",m).catch(()=>{}),!b.value&&O(r.value,s).catch(()=>{})]),S.value=!0}))})})}),Z(()=>{h&&ee(h),c==null||c(),c=null})}return()=>{var c,p;if(!b.value){const d={ref:W,to:r.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(S.value&&(d.class=t.prefetchedClass||e.prefetchedClass),d.rel=t.rel||void 0),C(te("RouterLink"),d,l.default)}const i=typeof r.value=="object"?((c=s.resolve(r.value))==null?void 0:c.href)??null:r.value&&!t.external&&!u.value?n(ae(o.app.baseURL,r.value),s.resolve):r.value||null,v=t.target||null,h=me(t.noRel?"":t.rel,e.externalRelAttribute,u.value||f.value?"noopener noreferrer":"")||null;if(t.custom){if(!l.default)return null;const d=()=>oe(i,{replace:t.replace,external:t.external});return l.default({href:i,navigate:d,get route(){if(!i)return;const m=ne(i);return{path:m.pathname,fullPath:m.pathname,get query(){return le(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:i}},rel:h,target:v,isExternal:b.value,isActive:!1,isExactActive:!1})}return C("a",{ref:g,href:i,rel:h,target:v},(p=l.default)==null?void 0:p.call(l))}}})}const we=ye(re);function w(e,a){const n=a==="append"?ie:ue;return E(e)&&!e.startsWith("http")?e:n(e,!0)}function be(){const e=T();if(e._observer)return e._observer;let a=null;const n=new Map,t=(s,o)=>(a||(a=new IntersectionObserver(r=>{for(const u of r){const f=n.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&f&&f()}})),n.set(s,o),a.observe(s),()=>{n.delete(s),a.unobserve(s),n.size===0&&(a.disconnect(),a=null)});return e._observer={observe:t}}function Ce(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const Re=P({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),qe=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:l,group:s,...o}=e,{component:r=s?fe:de,...u}=typeof t=="object"?t:{};return C(r,ce(typeof t=="string"?{name:l?"":t}:u,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:l,group:s}).filter(f=>{let[b,S]=f;return S!==void 0})),o),n)},Se=P({fluid:{type:Boolean,default:!1},...j(),...x()},"VContainer"),Be=N()({name:"VContainer",props:Se(),setup(e,a){let{slots:n}=a;const{rtlClasses:t}=ve();return ge(()=>he(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},n)),{}}}),$=k.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),I=k.reduce((e,a)=>{const n="offset"+V(a);return e[n]={type:[String,Number],default:null},e},{}),U=k.reduce((e,a)=>{const n="order"+V(a);return e[n]={type:[String,Number],default:null},e},{}),R={col:Object.keys($),offset:Object.keys(I),order:Object.keys(U)};function pe(e,a,n){let t=e;if(!(n==null||n===!1)){if(a){const l=a.replace(e,"");t+=`-${l}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const Pe=["auto","start","end","center","baseline","stretch"],ke=P({cols:{type:[Boolean,String,Number],default:!1},...$,offset:{type:[String,Number],default:null},...I,order:{type:[String,Number],default:null},...U,alignSelf:{type:String,default:null,validator:e=>Pe.includes(e)},...j(),...x()},"VCol"),Ee=N()({name:"VCol",props:ke(),setup(e,a){let{slots:n}=a;const t=y(()=>{const l=[];let s;for(s in R)R[s].forEach(r=>{const u=e[r],f=pe(s,r,u);f&&l.push(f)});const o=l.some(r=>r.startsWith("v-col-"));return l.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return C(e.tag,{class:[t.value,e.class],style:e.style},(l=n.default)==null?void 0:l.call(n))}}}),_=["start","end","center"],M=["space-between","space-around","space-evenly"];function A(e,a){return k.reduce((n,t)=>{const l=e+V(t);return n[l]=a(),n},{})}const je=[..._,"baseline","stretch"],F=e=>je.includes(e),G=A("align",()=>({type:String,default:null,validator:F})),xe=[..._,...M],D=e=>xe.includes(e),z=A("justify",()=>({type:String,default:null,validator:D})),Ne=[..._,...M,"stretch"],H=e=>Ne.includes(e),K=A("alignContent",()=>({type:String,default:null,validator:H})),q={align:Object.keys(G),justify:Object.keys(z),alignContent:Object.keys(K)},Ve={align:"align",justify:"justify",alignContent:"align-content"};function _e(e,a,n){let t=Ve[e];if(n!=null){if(a){const l=a.replace(e,"");t+=`-${l}`}return t+=`-${n}`,t.toLowerCase()}}const Ae=P({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:F},...G,justify:{type:String,default:null,validator:D},...z,alignContent:{type:String,default:null,validator:H},...K,...j(),...x()},"VRow"),Te=N()({name:"VRow",props:Ae(),setup(e,a){let{slots:n}=a;const t=y(()=>{const l=[];let s;for(s in q)q[s].forEach(o=>{const r=e[o],u=_e(s,o,r);u&&l.push(u)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return C(e.tag,{class:["v-row",t.value,e.class],style:e.style},(l=n.default)==null?void 0:l.call(n))}}});export{qe as M,Be as V,we as _,Te as a,Ee as b,Re as m};
