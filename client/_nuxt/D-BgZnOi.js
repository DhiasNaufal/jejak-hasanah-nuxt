import{i as f,o as i,c as m,j as L,F as v,r as k,a as e,w as n,e as _,t as p,f as u,_ as P,n as T,k as H,V,b as x,l as j,h as w,p as z,I as R,m as M,q as O,s as G,v as I,x as Q,y as q,z as X,A as S,B as Y,C as Z,d as J,D as ee,E as te,u as W}from"./B3ysm7Mw.js";import{V as $,_ as F}from"./DLOTsOIS.js";import{V as A,m as ne}from"./BYCnCfNE.js";import{_ as ae}from"./DmWq5afd.js";import{m as se,V as D,a as oe,b as N}from"./C6zhbw5x.js";import{s as le,_ as ie}from"./D_Gi5Y1s.js";import"./Bj_voaJ-.js";const re={},ce={class:"text-6xl font-fugaz"};function ue(t,o){return i(),m("h1",ce,[L(t.$slots,"default")])}const de=f(re,[["render",ue]]),me={data(){return{backgroundUrl:"/img/home/homeBanner.png",items:[{value:"19+",desc:"Tahun Berdiri"},{value:"98%",desc:"Kepuasan Pelanggan"},{value:"75+",desc:"Proyek dikerjakan"}]}}},_e={class:"h-[100px] w-1/2 trapezoid absolute bottom-0 right-0 px-36 flex gap-16 items-center justify-center"},ge={class:"text-sm 2xl:text-base"};function pe(t,o,a,l,r,c){const s=P;return i(),m("div",_e,[(i(!0),m(v,null,k(r.items,(d,g)=>(i(),m("div",{class:"text-white flex flex-col items-center",key:g},[e(s,{class:"text-white"},{default:n(()=>[_(p(d.value),1)]),_:2},1024),u("p",ge,p(d.desc),1)]))),128))])}const fe=f(me,[["render",pe]]),he={data(){return{style:"background-image: url('/img/home/homeBanner.png')"}}};function xe(t,o,a,l,r,c){return i(),m("div",{class:"bg-cover bg-center",style:T(r.style)},[L(t.$slots,"default")],4)}const ve=f(he,[["render",xe]]),be={landingPage:{title:"Jejak hasanah",desc:"Jejak Hasanah hadir untuk memberikan Solusi Inovatif dalam Jasa Transportasi dan Advertising dengan Profesionalisme dan Komitmen terhadap kualitas dan inovasi"}},ye={setup(){return{content:H(be.landingPage),mitra:["/img/mitra/logo-telkomsel.png","/img/mitra/PAMA.png","/img/mitra/class_mild.png","/img/mitra/gudang_garam.png","/img/mitra/djarum.png"]}}},ke={class:"h-[90vh]"},$e=u("br",null,null,-1),we=u("br",null,null,-1),Ve={class:"h-1/5 flex items-center",align:"center"};function Se(t,o,a,l,r,c){const s=de,d=fe,g=ve;return i(),m("div",ke,[e(g,{class:"h-4/5 relative"},{default:n(()=>[e($,{class:"h-full mb-6"},{default:n(()=>[e(V,{align:"center",class:"h-full text-white","no-gutters":""},{default:n(()=>[e(x,{cols:"6"},{default:n(()=>[e(s,null,{default:n(()=>[_(p(l.content.title),1)]),_:1}),e(s,null,{default:n(()=>[_(" Insya Allah Amanah")]),_:1}),$e,u("p",null,p(l.content.desc),1),we,e(j,{color:"secondary"},{default:n(()=>[_("Lebih lanjut")]),_:1})]),_:1})]),_:1})]),_:1}),e(d)]),_:1}),u("div",Ve,[e($,{align:"center"},{default:n(()=>[e(V,{align:"center"},{default:n(()=>[e(x,null,{default:n(()=>[_(" Our Clients: ")]),_:1}),(i(!0),m(v,null,k(l.mitra,b=>(i(),w(x,{cols:"2"},{default:n(()=>[e(A,{height:100,"aspect-ratio":"16/9",src:b},null,8,["src"])]),_:2},1024))),256))]),_:1})]),_:1})])])}const Pe=f(ye,[["render",Se]]),Be={props:{img:{type:String,default:"background-image: url('/img/home/homeBanner.png')"},number:{type:String,default:"1"},title:{type:String,default:"Title"},desc:{type:String,default:"   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam."},path:{type:String,default:"/"}}},Ie={class:"flex gap-10 items-center"},Ae={class:"bg-secondary absolute -right-5 top-1/3 h-14 w-14 flex items-center justify-center text-3xl font-extrabold italic rounded-md"},Le={class:"w-1/2 flex flex-col gap-2 items-start"};function Te(t,o,a,l,r,c){const s=ae,d=F;return i(),m("div",Ie,[u("div",{class:"bg-cover bg-center h-[164px] w-[312px] rounded-xl relative",style:T(a.img)},[u("div",Ae,p(a.number),1)],4),u("div",Le,[e(s,{class:"text-text"},{default:n(()=>[_(p(a.title),1)]),_:1}),u("p",null,p(a.desc),1),e(d,{to:a.path},{default:n(()=>[e(j,{variant:"outlined",color:"primary"},{default:n(()=>[_("Lihat Detail")]),_:1})]),_:1},8,["to"])])])}const je=f(Be,[["render",Te]]),Ce=z({color:String,cycle:Boolean,delimiterIcon:{type:R,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>Number(t)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...se({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),U=M()({name:"VCarousel",props:Ce(),emits:{"update:modelValue":t=>!0},setup(t,o){let{slots:a}=o;const l=O(t,"modelValue"),{t:r}=G(),c=H();let s=-1;I(l,g),I(()=>t.interval,g),I(()=>t.cycle,b=>{b?g():window.clearTimeout(s)}),Q(d);function d(){!t.cycle||!c.value||(s=window.setTimeout(c.value.group.next,+t.interval>0?+t.interval:6e3))}function g(){window.clearTimeout(s),window.requestAnimationFrame(d)}return q(()=>{const b=D.filterProps(t);return e(D,S({ref:c},b,{modelValue:l.value,"onUpdate:modelValue":B=>l.value=B,class:["v-carousel",{"v-carousel--hide-delimiter-background":t.hideDelimiterBackground,"v-carousel--vertical-delimiters":t.verticalDelimiters},t.class],style:[{height:Z(t.height)},t.style]}),{default:a.default,additional:B=>{let{group:h}=B;return e(v,null,[!t.hideDelimiters&&e("div",{class:"v-carousel__controls",style:{left:t.verticalDelimiters==="left"&&t.verticalDelimiters?0:"auto",right:t.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&e(X,{defaults:{VBtn:{color:t.color,icon:t.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((y,K)=>{const C={id:`carousel-item-${y.id}`,"aria-label":r("$vuetify.carousel.ariaLabel.delimiter",K+1,h.items.value.length),class:["v-carousel__controls__item",h.isSelected(y.id)&&"v-btn--active"],onClick:()=>h.select(y.id,!0)};return a.item?a.item({props:C,item:y}):e(j,S(y,C),null)})]})]),t.progress&&e(Y,{class:"v-carousel__progress",color:typeof t.progress=="string"?t.progress:void 0,modelValue:(h.getItemIndex(l.value)+1)/h.items.value.length*100},null)])},prev:a.prev,next:a.next})}),{}}}),De=z({...ne(),...oe()},"VCarouselItem"),E=M()({name:"VCarouselItem",inheritAttrs:!1,props:De(),setup(t,o){let{slots:a,attrs:l}=o;q(()=>{const r=A.filterProps(t),c=N.filterProps(t);return e(N,S({class:["v-carousel-item",t.class]},c),{default:()=>[e(A,S(l,r),a)]})})}}),Ne=u("p",null,"Our Services",-1),He=J({__name:"Services",setup(t){const o=[{id:"1",image:"background-image: url('/img/home/lv.jpeg')",title:"Transportation",desc:"Jejak Hasanah menyediakan Bus, Minibus, LV, dan SUV dengan spesifikasi yang dapat disesuaikan serta layanan premium untuk berbagai kebutuhan transportasi perusahaan.",path:"/transportation"},{id:"2",image:"background-image: url('/img/home/vtrn.png')",title:"Advertising",desc:"Jejak Hasanah menyediakan layanan advertising, seperti billboard, videotron, mini display, dan café branding, dengan solusi yang efektif dan inovatif.",path:"/advertising"}];return(a,l)=>{const r=P,c=je;return i(),w($,{fluid:""},{default:n(()=>[e(V,{align:"center",justify:"end"},{default:n(()=>[e(x,{cols:"5",xl:"6"},{default:n(()=>[e(U,{"show-arrows":"hover",class:"rounded-xl","hide-delimiters":"",cycle:""},{default:n(()=>[(i(),m(v,null,k(5,(s,d)=>e(E,{src:`/img/home/corousel/${d+1}.png`,cover:""},null,8,["src"])),64))]),_:1})]),_:1}),e(x,null,{default:n(()=>[e(V,{justify:"center"},{default:n(()=>[e(x,{cols:"12",align:"start"},{default:n(()=>[Ne,e(r,null,{default:n(()=>[_("We Provide Innovation")]),_:1})]),_:1}),(i(),m(v,null,k(o,s=>e(x,{cols:"12"},{default:n(()=>[e(c,{img:s.image,title:s.title,number:s.id,desc:s.desc,path:s.path},null,8,["img","title","number","desc","path"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})}}}),ze={};function Me(t,o){const a=ee;return i(),w($,{class:"relative"},{default:n(()=>[L(t.$slots,"default"),e(a,{src:"img/logo-shade.png",class:"-z-10 absolute right-0 bottom-0",sizes:"180px sm:250px 2xl:300px"}),e(a,{class:"absolute z-10 md:-left-32 -left-10 -bottom-5 md:-bottom-16 xl:-left-28",src:"/img/lengkung.png",format:"webp",sizes:"180px sm:250px 2xl:300px"})]),_:3})}const qe=f(ze,[["render",Me]]),Je={class:"portfolio-card h-full"},We={class:"h-full flex flex-col justify-center w-7/12 p-10"},Fe={class:"text-white"},Ue={__name:"portofolioShort",props:{img:{type:String,default:"background-image: url('/img/home/homeBanner.png')"},title:{type:String,default:"Site Palembang (Muara Enim)"},desc:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt"}},setup(t){const o=t,a=te(()=>o.img);return(l,r)=>{const c=P;return i(),m("div",{class:"bg-cover bg-center h-5/6 w-5/6",style:T(W(a))},[u("div",Je,[u("div",We,[e(c,{class:"text-white font-semibold"},{default:n(()=>[_(p(t.title),1)]),_:1}),u("p",Fe,p(t.desc),1)])])],4)}}},Ee=Ue,Ke={},Re={class:"text-center"},Oe=u("p",{class:"leading-tight"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1);function Ge(t,o){const a=P,l=Ee,r=F;return i(),w($,null,{default:n(()=>[u("div",Re,[e(a,null,{default:n(()=>[_("Let's See what we've been working on")]),_:1}),Oe]),e(U,{"show-arrows":"hover","hide-delimiters":""},{default:n(()=>[(i(),m(v,null,k(5,(c,s)=>e(E,null,{default:n(()=>[e(r,{to:"/transportation",class:"flex fill-height justify-center align-center"},{default:n(()=>[e(l,{class:"hover:scale-105 transition-all"})]),_:1})]),_:1})),64))]),_:1})]),_:1})}const Qe=f(Ke,[["render",Ge]]),Xe=J({__name:"index",setup(t){const o=le.jh;return(a,l)=>{const r=Pe,c=He,s=qe,d=ie,g=Qe;return i(),m(v,null,[e(r),e(s,null,{default:n(()=>[e(c,{class:"my-14"})]),_:1}),e(d,{title:"Keunggulan Jejak Hasanah",subtitle:"Jejak Hasanah Menawarkan Inovasi dan Profesionalisme kepada Mitra",class:"my-24",items:W(o)},null,8,["items"]),e(g)],64)}}}),Ye={};function Ze(t,o){const a=Xe;return i(),w(a)}const it=f(Ye,[["render",Ze]]);export{it as default};
