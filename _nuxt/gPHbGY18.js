import{A as P,bp as X,bo as Y,R as k,aL as x,z as I,ah as p,ai as ee,G as B,a as n,s as V,J as q,bn as te,aS as ae,bq as E,ab as $,a6 as ne,a7 as re,af as H,aW as se,Z as h,x as ie,D as T,br as le,au as oe,aV as ue,ap as U,aq as ce,F as ve,L as de,at as ge,I as me,a4 as fe,ac as ye,T as Se,ak as be,aA as _e,al as he,aD as ze,a5 as Ve,ae as Pe,a2 as ke,H as Ie,aJ as Ce}from"./Cgk3NOEg.js";function Ne(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",r=arguments.length>2?arguments[2]:void 0;return P()({name:r??X(Y(e.replace(/__/g,"-"))),props:{tag:{type:String,default:i},...k()},setup(t,c){let{slots:o}=c;return()=>{var d;return x(t.tag,{class:[e,t.class],style:t.style},(d=o.default)==null?void 0:d.call(o))}}})}function Re(e){return{aspectStyles:V(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const L=I({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...k(),...p()},"VResponsive"),W=P()({name:"VResponsive",props:L(),setup(e,i){let{slots:r}=i;const{aspectStyles:t}=Re(e),{dimensionStyles:c}=ee(e);return B(()=>{var o;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(o=r.additional)==null?void 0:o.call(r),r.default&&n("div",{class:["v-responsive__content",e.contentClass]},[r.default()])])}),{}}}),Te=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),z=(e,i)=>{let{slots:r}=i;const{transition:t,disabled:c,group:o,...d}=e,{component:g=o?te:ae,...f}=typeof t=="object"?t:{};return x(g,q(typeof t=="string"?{name:c?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:c,group:o}).filter(s=>{let[l,m]=s;return m!==void 0})),d),r)};function Be(e,i){if(!E)return;const r=i.modifiers||{},t=i.value,{handler:c,options:o}=typeof t=="object"?t:{handler:t,options:{}},d=new IntersectionObserver(function(){var m;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const s=(m=e._observe)==null?void 0:m[i.instance.$.uid];if(!s)return;const l=g.some(S=>S.isIntersecting);c&&(!r.quiet||s.init)&&(!r.once||l||s.init)&&c(l,g,f),l&&r.once?M(e,i):s.init=!0},o);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:d},d.observe(e)}function M(e,i){var t;const r=(t=e._observe)==null?void 0:t[i.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const je={mounted:Be,unmounted:M},we=je,Oe=I({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...L(),...k(),...$(),...Te()},"VImg"),Ae=P()({name:"VImg",directives:{intersect:we},props:Oe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:r,slots:t}=i;const{backgroundColorClasses:c,backgroundColorStyles:o}=ne(re(e,"color")),{roundedClasses:d}=H(e),g=se("VImg"),f=h(""),s=ie(),l=h(e.eager?"loading":"idle"),m=h(),S=h(),v=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=V(()=>v.value.aspect||m.value/S.value||0);T(()=>e.src,()=>{C(l.value!=="idle")}),T(b,(a,u)=>{!a&&u&&s.value&&_(s.value)}),le(()=>C());function C(a){if(!(e.eager&&a)&&!(E&&!a&&!e.eager)){if(l.value="loading",v.value.lazySrc){const u=new Image;u.src=v.value.lazySrc,_(u,null)}v.value.src&&oe(()=>{var u;r("loadstart",((u=s.value)==null?void 0:u.currentSrc)||v.value.src),setTimeout(()=>{var y;if(!g.isUnmounted)if((y=s.value)!=null&&y.complete){if(s.value.naturalWidth||w(),l.value==="error")return;b.value||_(s.value,null),l.value==="loading"&&j()}else b.value||_(s.value),O()})})}}function j(){var a;g.isUnmounted||(O(),_(s.value),l.value="loaded",r("load",((a=s.value)==null?void 0:a.currentSrc)||v.value.src))}function w(){var a;g.isUnmounted||(l.value="error",r("error",((a=s.value)==null?void 0:a.currentSrc)||v.value.src))}function O(){const a=s.value;a&&(f.value=a.currentSrc||a.src)}let R=-1;ue(()=>{clearTimeout(R)});function _(a){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(R),g.isUnmounted)return;const{naturalHeight:F,naturalWidth:N}=a;F||N?(m.value=N,S.value=F):!a.complete&&l.value==="loading"&&u!=null?R=window.setTimeout(y,u):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,S.value=1)};y()}const A=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),G=()=>{var y;if(!v.value.src||l.value==="idle")return null;const a=n("img",{class:["v-img__img",A.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:j,onError:w},null),u=(y=t.sources)==null?void 0:y.call(t);return n(z,{transition:e.transition,appear:!0},{default:()=>[U(u?n("picture",{class:"v-img__picture"},[u,a]):a,[[ge,l.value==="loaded"]])]})},J=()=>n(z,{transition:e.transition},{default:()=>[v.value.lazySrc&&l.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",A.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Z=()=>t.placeholder?n(z,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,K=()=>t.error?n(z,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,Q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=h(!1);{const a=T(b,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),a())})}return B(()=>{const a=W.filterProps(e);return U(n(W,q({class:["v-img",{"v-img--booting":!D.value},c.value,d.value,e.class],style:[{width:de(e.width==="auto"?m.value:e.width)},o.value,e.style]},a,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ve,null,[n(G,null,null),n(J,null,null),n(Q,null,null),n(Z,null,null),n(K,null,null)]),default:t.default}),[[ce("intersect"),{handler:C,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:s,state:l,naturalWidth:m,naturalHeight:S}}}),De=I({start:Boolean,end:Boolean,icon:me,image:String,text:String,...k(),...fe(),...$(),...ye(),...Se(),...be(),..._e({variant:"flat"})},"VAvatar"),Ue=P()({name:"VAvatar",props:De(),setup(e,i){let{slots:r}=i;const{themeClasses:t}=he(e),{colorClasses:c,colorStyles:o,variantClasses:d}=ze(e),{densityClasses:g}=Ve(e),{roundedClasses:f}=H(e),{sizeClasses:s,sizeStyles:l}=Pe(e);return B(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,c.value,g.value,f.value,s.value,d.value,e.class],style:[o.value,l.value,e.style]},{default:()=>[r.default?n(Ie,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[r.default()]}):e.image?n(Ae,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ke,{key:"icon",icon:e.icon},null):e.text,Ce(!1,"v-avatar")]})),{}}});export{z as M,Ae as V,Ue as a,Te as b,Ne as c,Oe as m};