import{p as P,B as x,D as j,j as N,af as J,s as Q,a as Y,bv as k,bd as V,A as y,aB as C,bw as q,d as X,bk as E,h as L,q as Z,bx as ee,by as te,aL as ae,bz as ne,bA as le,bm as re,bn as se,bB as oe,bC as ie,br as ue,aA as T,bD as ce,bE as fe,bF as de,x as ve,bs as ge,aI as he}from"./DnNSfI7X.js";const me=P({fluid:{type:Boolean,default:!1},...x(),...j()},"VContainer"),we=N()({name:"VContainer",props:me(),setup(e,a){let{slots:n}=a;const{rtlClasses:t}=J();return Q(()=>Y(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},n)),{}}}),O=k.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),$=k.reduce((e,a)=>{const n="offset"+V(a);return e[n]={type:[String,Number],default:null},e},{}),I=k.reduce((e,a)=>{const n="order"+V(a);return e[n]={type:[String,Number],default:null},e},{}),w={col:Object.keys(O),offset:Object.keys($),order:Object.keys(I)};function ye(e,a,n){let t=e;if(!(n==null||n===!1)){if(a){const l=a.replace(e,"");t+=`-${l}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const be=["auto","start","end","center","baseline","stretch"],Ce=P({cols:{type:[Boolean,String,Number],default:!1},...O,offset:{type:[String,Number],default:null},...$,order:{type:[String,Number],default:null},...I,alignSelf:{type:String,default:null,validator:e=>be.includes(e)},...x(),...j()},"VCol"),Re=N()({name:"VCol",props:Ce(),setup(e,a){let{slots:n}=a;const t=y(()=>{const l=[];let s;for(s in w)w[s].forEach(r=>{const u=e[r],f=ye(s,r,u);f&&l.push(f)});const o=l.some(r=>r.startsWith("v-col-"));return l.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return C(e.tag,{class:[t.value,e.class],style:e.style},(l=n.default)==null?void 0:l.call(n))}}}),_=["start","end","center"],U=["space-between","space-around","space-evenly"];function A(e,a){return k.reduce((n,t)=>{const l=e+V(t);return n[l]=a(),n},{})}const Se=[..._,"baseline","stretch"],F=e=>Se.includes(e),M=A("align",()=>({type:String,default:null,validator:F})),pe=[..._,...U],G=e=>pe.includes(e),D=A("justify",()=>({type:String,default:null,validator:G})),Pe=[..._,...U,"stretch"],z=e=>Pe.includes(e),H=A("alignContent",()=>({type:String,default:null,validator:z})),R={align:Object.keys(M),justify:Object.keys(D),alignContent:Object.keys(H)},ke={align:"align",justify:"justify",alignContent:"align-content"};function xe(e,a,n){let t=ke[e];if(n!=null){if(a){const l=a.replace(e,"");t+=`-${l}`}return t+=`-${n}`,t.toLowerCase()}}const je=P({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:F},...M,justify:{type:String,default:null,validator:G},...D,alignContent:{type:String,default:null,validator:z},...H,...x(),...j()},"VRow"),Be=N()({name:"VRow",props:je(),setup(e,a){let{slots:n}=a;const t=y(()=>{const l=[];let s;for(s in R)R[s].forEach(o=>{const r=e[o],u=xe(s,o,r);u&&l.push(u)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return C(e.tag,{class:["v-row",t.value,e.class],style:e.style},(l=n.default)==null?void 0:l.call(n))}}});async function K(e,a=q()){const{path:n,matched:t}=a.resolve(e);if(!t.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(n)))return;const l=a._preloadPromises=a._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>K(e,a));a._routePreloaded.add(n);const s=t.map(o=>{var r;return(r=o.components)==null?void 0:r.default}).filter(o=>typeof o=="function");for(const o of s){const r=Promise.resolve(o()).catch(()=>{}).finally(()=>l.splice(l.indexOf(r)));l.push(r)}await Promise.all(l)}const Ne=(...e)=>e.find(a=>a!==void 0);function Ve(e){const a=e.componentName||"NuxtLink";function n(t,l){if(!t||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return t;if(typeof t=="string")return B(t,e.trailingSlash);const s="path"in t&&t.path!==void 0?t.path:l(t).path;return{...t,name:void 0,path:B(s,e.trailingSlash)}}return X({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:l}){const s=q(),o=ue(),r=y(()=>{const i=t.to||t.href||"";return n(i,s.resolve)}),u=y(()=>typeof r.value=="string"&&E(r.value,{acceptRelative:!0})),f=y(()=>t.target&&t.target!=="_self"),b=y(()=>t.external||f.value?!0:typeof r.value=="object"?!1:r.value===""||u.value),S=L(!1),g=L(null),W=i=>{var v;g.value=t.custom?(v=i==null?void 0:i.$el)==null?void 0:v.nextElementSibling:i==null?void 0:i.$el};if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!Ae()){const v=T();let h,c=null;Z(()=>{const p=_e();ee(()=>{h=te(()=>{var d;(d=g==null?void 0:g.value)!=null&&d.tagName&&(c=p.observe(g.value,async()=>{c==null||c(),c=null;const m=typeof r.value=="string"?r.value:s.resolve(r.value).fullPath;await Promise.all([v.hooks.callHook("link:prefetch",m).catch(()=>{}),!b.value&&K(r.value,s).catch(()=>{})]),S.value=!0}))})})}),ae(()=>{h&&ne(h),c==null||c(),c=null})}return()=>{var c,p;if(!b.value){const d={ref:W,to:r.value,activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom};return t.custom||(S.value&&(d.class=t.prefetchedClass||e.prefetchedClass),d.rel=t.rel||void 0),C(le("RouterLink"),d,l.default)}const i=typeof r.value=="object"?((c=s.resolve(r.value))==null?void 0:c.href)??null:r.value&&!t.external&&!u.value?n(re(o.app.baseURL,r.value),s.resolve):r.value||null,v=t.target||null,h=Ne(t.noRel?"":t.rel,e.externalRelAttribute,u.value||f.value?"noopener noreferrer":"")||null;if(t.custom){if(!l.default)return null;const d=()=>ce(i,{replace:t.replace,external:t.external});return l.default({href:i,navigate:d,get route(){if(!i)return;const m=se(i);return{path:m.pathname,fullPath:m.pathname,get query(){return oe(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:i}},rel:h,target:v,isExternal:b.value,isActive:!1,isExactActive:!1})}return C("a",{ref:g,href:i,rel:h,target:v},(p=l.default)==null?void 0:p.call(l))}}})}const qe=Ve(ie);function B(e,a){const n=a==="append"?fe:de;return E(e)&&!e.startsWith("http")?e:n(e,!0)}function _e(){const e=T();if(e._observer)return e._observer;let a=null;const n=new Map,t=(s,o)=>(a||(a=new IntersectionObserver(r=>{for(const u of r){const f=n.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&f&&f()}})),n.set(s,o),a.observe(s),()=>{n.delete(s),a.unobserve(s),n.size===0&&(a.disconnect(),a=null)});return e._observer={observe:t}}function Ae(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const Ee=P({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Te=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:l,group:s,...o}=e,{component:r=s?ge:he,...u}=typeof t=="object"?t:{};return C(r,ve(typeof t=="string"?{name:l?"":t}:u,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:l,group:s}).filter(f=>{let[b,S]=f;return S!==void 0})),o),n)};export{Te as M,we as V,qe as _,Be as a,Re as b,Ee as m};
