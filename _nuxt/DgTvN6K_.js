import{y as i,H as s,ac as z,C as c,a as n,s as y,I as V,a0 as m,a8 as x,F as h,q as p,al as f,aq as J,am as K,ah as G,ar as Q,as as U,at as W,af as X,au as Y,J as Z,av as $,aw as ee,K as ae,ax as te,ay as ne,a9 as de,an as le,ak as ie,az as se,aA as ce,aB as re,aj as ue,aC as ve,B as S,R as oe,S as me,aD as ye,aE as ke}from"./AeIqaCWi.js";import{c as ge,V as P,a as be}from"./DPKi5omr.js";const Ce=i()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return z({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=y({opacity:[Number,String],...s(),...V()},"VCardSubtitle"),Ve=i()({name:"VCardSubtitle",props:fe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=ge("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),he=i()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),k=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),b=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[k&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(f,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(h,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(p,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[b&&n(Ie,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),C&&n(Ve,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(f,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(h,null,[e.appendIcon&&n(p,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),pe=y({opacity:[Number,String],...s(),...V()},"VCardText"),Se=i()({name:"VCardText",props:pe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Pe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...J(),...s(),...x(),...K(),...G(),...Q(),...U(),...W(),...X(),...Y(),...V(),...Z(),...$({variant:"elevated"})},"VCard"),Be=i()({name:"VCard",directives:{Ripple:ee},props:Pe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:k}=ae(e),{borderClasses:r}=te(e),{colorClasses:g,colorStyles:b,variantClasses:C}=ne(e),{densityClasses:u}=de(e),{dimensionStyles:l}=le(e),{elevationClasses:T}=ie(e),{loaderClasses:B}=se(e),{locationStyles:D}=ce(e),{positionClasses:L}=re(e),{roundedClasses:N}=ue(e),v=ve(e,t),_=S(()=>e.link!==!1&&v.isLink.value),o=S(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),j=F||E,q=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),M=j||w||q,O=!!(a.text||e.text!=null);return oe(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":o.value},k.value,r.value,g.value,u.value,T.value,B.value,L.value,N.value,C.value,e.class],style:[b.value,l.value,D.value,e.style],href:v.href.value,onClick:o.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[H&&n("div",{key:"image",class:"v-card__image"},[a.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ye,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),M&&n(he,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),O&&n(Se,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ce,null,{default:a.actions}),ke(o.value,"v-card")]}}),[[me("ripple"),o.value&&e.ripple]])}),{}}});export{Be as V,Se as a};
