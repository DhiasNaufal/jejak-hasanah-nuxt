import{_ as J}from"./Bi5xd8cb.js";import{c as K,V as x}from"./DyMjFqUP.js";import{j as s,C as c,Z as Y,s as r,a,p as g,P as h,I as y,T as N,F as S,N as A,v as V,al as $,O as ee,G as ae,am as te,an as ne,ao as le,D as ie,ap as de,U as se,aq as ce,ar as re,W as ue,as as oe,at as ve,X as me,Q as ye,M as ge,au as fe,av as ke,aw as be,L as pe,ax as Ve,A as P,af as he,ag as Ce,ay as Ie,az as xe,d as Se,o as Ae,g as Pe,w as d,e as _e,b as _,t as T,V as B}from"./P5kiPpYD.js";import{V as Te}from"./D3Fsbnjj.js";const D=s()({name:"VCardActions",props:c(),setup(e,l){let{slots:n}=l;return Y({VBtn:{slim:!0,variant:"text"}}),r(()=>{var t;return a("div",{class:["v-card-actions",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Be=g({opacity:[Number,String],...c(),...h()},"VCardSubtitle"),L=s()({name:"VCardSubtitle",props:Be(),setup(e,l){let{slots:n}=l;return r(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),w=K("v-card-title"),Ne=g({appendAvatar:String,appendIcon:y,prependAvatar:String,prependIcon:y,subtitle:[String,Number],title:[String,Number],...c(),...N()},"VCardItem"),De=s()({name:"VCardItem",props:Ne(),setup(e,l){let{slots:n}=l;return r(()=>{var o;const t=!!(e.prependAvatar||e.prependIcon),f=!!(t||n.prepend),u=!!(e.appendAvatar||e.appendIcon),k=!!(u||n.append),b=!!(e.title!=null||n.title),p=!!(e.subtitle!=null||n.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[f&&a("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?a(V,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):a(S,null,[e.prependAvatar&&a(x,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(A,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[b&&a(w,{key:"title"},{default:()=>{var i;return[((i=n.title)==null?void 0:i.call(n))??e.title]}}),p&&a(L,{key:"subtitle"},{default:()=>{var i;return[((i=n.subtitle)==null?void 0:i.call(n))??e.subtitle]}}),(o=n.default)==null?void 0:o.call(n)]),k&&a("div",{key:"append",class:"v-card-item__append"},[n.append?a(V,{key:"append-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):a(S,null,[e.appendIcon&&a(A,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(x,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Le=g({opacity:[Number,String],...c(),...h()},"VCardText"),we=s()({name:"VCardText",props:Le(),setup(e,l){let{slots:n}=l;return r(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),Re=g({appendAvatar:String,appendIcon:y,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:y,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...$(),...c(),...N(),...ee(),...ae(),...te(),...ne(),...le(),...ie(),...de(),...h(),...se(),...ce({variant:"elevated"})},"VCard"),je=s()({name:"VCard",directives:{Ripple:re},props:Re(),setup(e,l){let{attrs:n,slots:t}=l;const{themeClasses:f}=ue(e),{borderClasses:u}=oe(e),{colorClasses:k,colorStyles:b,variantClasses:p}=ve(e),{densityClasses:o}=me(e),{dimensionStyles:i}=ye(e),{elevationClasses:R}=ge(e),{loaderClasses:j}=fe(e),{locationStyles:F}=ke(e),{positionClasses:E}=be(e),{roundedClasses:M}=pe(e),v=Ve(e,n),O=P(()=>e.link!==!1&&v.isLink.value),m=P(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return r(()=>{const q=O.value?"a":e.tag,z=!!(t.title||e.title!=null),G=!!(t.subtitle||e.subtitle!=null),H=z||G,Q=!!(t.append||e.appendAvatar||e.appendIcon),U=!!(t.prepend||e.prependAvatar||e.prependIcon),W=!!(t.image||e.image),X=H||U||Q,Z=!!(t.text||e.text!=null);return he(a(q,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},f.value,u.value,k.value,o.value,R.value,j.value,E.value,M.value,p.value,e.class],style:[b.value,i.value,F.value,e.style],href:v.href.value,onClick:m.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[W&&a("div",{key:"image",class:"v-card__image"},[t.image?a(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(Te,{key:"image-img",cover:!0,src:e.image},null)]),a(Ie,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),X&&a(De,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),Z&&a(we,{key:"text"},{default:()=>{var I;return[((I=t.text)==null?void 0:I.call(t))??e.text]}}),(C=t.default)==null?void 0:C.call(t),t.actions&&a(D,null,{default:t.actions}),xe(m.value,"v-card")]}}),[[Ce("ripple"),m.value&&e.ripple]])}),{}}}),Fe=["src"],ze=Se({__name:"service",props:{imgPath:{type:String,default:"/img/home/footerBanner.jpeg"},title:{type:String,default:"title"},desc:{type:String,default:"desc"},path:{type:String,default:"/"}},setup(e){return(l,n)=>{const t=J;return Ae(),Pe(je,{class:"mx-auto bg-text",width:"300"},{default:d(()=>[_e("img",{class:"align-end text-white object-cover h-[200px] w-[300px]",src:e.imgPath,cover:""},null,8,Fe),a(w,null,{default:d(()=>[_(T(e.title),1)]),_:1}),a(L,null,{default:d(()=>[_(T(e.desc),1)]),_:1}),a(D,null,{default:d(()=>[a(t,null,{default:d(()=>[a(B,{color:"white",text:"Share"})]),_:1}),a(t,{to:e.path},{default:d(()=>[a(B,{color:"white",text:"Explore"})]),_:1},8,["to"])]),_:1})]),_:1})}}});export{ze as _};
