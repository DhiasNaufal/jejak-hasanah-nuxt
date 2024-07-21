import{d as J,k as R,E as V,o as _,c as C,a,w as n,F as b,r as P,u as p,h as L,e as c,t as f,G as B,V as h,b as k,f as y,_ as $,D as X,p as S,I as N,H as D,J as A,K,L as O,m as I,M,N as w,O as u,P as F,Q as W,y as z,R as q,z as G,S as Q,T as E,U as Y,W as Z,v as ee,C as T,X as ae,Y as ne,Z as te,$ as ie,a0 as le,a1 as se,a2 as oe,g as re,a3 as H}from"./DtiHB_uF.js";import{V as j,_ as de}from"./Dc4X6nHO.js";import{_ as ue}from"./99XNesTb.js";import{V as me,a as ce}from"./C6Z1XpGY.js";import{b as ke,V as ge}from"./DypsVwiX.js";import{_ as ve}from"./DMjjYulE.js";import"./DuujOOIF.js";import"./C0bxz-s8.js";const _e=J({__name:"Tabs",setup(e){const s=R(),l=[{text:"Tentang Perusahaan",value:"tentang"},{text:"Struktur Layanan",value:"struktur"},{text:"Sertifikasi",value:"sertifikasi"}],g=[{value:"tentang",title:"Tentang Perusahaan",desc:"PT Jejak Hasanah merupakan perusahaan yang memberikan layanan transportasi dan periklanan. Didirikan pada tahun XXXX, PT Jejak Hasanah telah bekerja sama dengan puluhan perusahaan daerah hingga nasional.",img:"img/logo/JH-Logo.svg"},{value:"struktur",title:"Struktur Layanan",desc:"PT Jejak Hasanah memberikan layanan jasa transportasi seperti transportasi ringan hingga transportasi berat. Selain itu PT Jejak Hasanah juga menyediakan layanan periklanan seperti Billboard, Videotron, dan Branding ads.",img:"img/logo/JH-Logo.svg"},{value:"sertifikasi",title:"Sertifikasi",desc:"PT Jejak Hasanah telah tersertifikasi Risk-Based Business yang diterbitkan oleh pemerintah. Dengan sertifikasi ini, Jejak Hasanah selalu mendedikasikan dalam menjamin standar kualitas dan keselamatan para pekerja serta secara aktif berkontribusi dalam kegiatan sosial.",img:"img/logo/JH-Logo.svg"}],r=V(()=>l);return(m,t)=>{const o=$,d=X;return _(),C(b,null,[a(ce,{modelValue:p(s),"onUpdate:modelValue":t[0]||(t[0]=i=>B(s)?s.value=i:null),color:"secondary","align-tabs":"center",density:"compact","selected-class":"font-weight-bold"},{default:n(()=>[(_(!0),C(b,null,P(p(r),(i,v)=>(_(),L(me,{key:v,value:i.value,class:"text-none"},{default:n(()=>[c(f(i.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),a(ge,{modelValue:p(s),"onUpdate:modelValue":t[1]||(t[1]=i=>B(s)?s.value=i:null),class:"mt-4"},{default:n(()=>[(_(),C(b,null,P(g,i=>a(ke,{value:i.value},{default:n(()=>[a(j,{class:"bg-light-gray rounded-lg pa-16"},{default:n(()=>[a(h,null,{default:n(()=>[a(k,{align:"start"},{default:n(()=>[a(o,null,{default:n(()=>[c(f(i.title),1)]),_:2},1024),y("p",null,f(i.desc),1)]),_:2},1024),a(k,{align:"center"},{default:n(()=>[a(d,{sizes:"100vw sm:50vw md:400px",src:i.img},null,8,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64)}}}),fe={sejarah:[{year:2008,title:"Pendirian perusahaan",desc:"Perusahaan didirikan dengan visi awal untuk menjadi penyedia layanan unggulan di bidang wisata dan advertising, berkomitmen untuk menawarkan solusi kreatif dan inovatif kepada klien."},{year:2009,title:"Kontrak Pertama",desc:"Kami berhasil mengamankan kontrak pertama kami dengan Telkomsel, menyediakan layanan advertising dalam bentuk proyek Billboard. Ini menandai langkah awal dalam perjalanan kami menuju kesuksesan di industri advertising."},{year:2009,title:"Ekspansi Bidang Usaha",desc:"Pada tahun yang sama, kami memperluas layanan kami ke pulau Sebuku bekerja sama dengan PT Pama Persada dalam penyediaan layanan transportasi. Ini merupakan langkah awal yang penting dalam memperkuat kehadiran kami di berbagai lokasi strategis."},{year:2015,title:"Diversifikasi Klien Advertising",desc:"Kami mendapatkan kepercayaan untuk menjalin kontrak dengan mitra baru Djarum dan Classmild untuk layanan advertising."},{year:2021,title:"Pencapaian dan Penghargaan",desc:"Kami menerima penghargaan bergengsi dari PT Kalimantan Prima Persada untuk Best SHE Performance, yang mengakui dedikasi kami terhadap kualitas dan keselamatan dalam operasional kami."}]},ye=S({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:N,iconColor:String,lineColor:String,...D(),...A(),...K(),...O()},"VTimelineDivider"),he=I()({name:"VTimelineDivider",props:ye(),setup(e,s){let{slots:l}=s;const{sizeClasses:g,sizeStyles:r}=M(e,"v-timeline-divider__dot"),{backgroundColorStyles:m,backgroundColorClasses:t}=w(u(e,"dotColor")),{roundedClasses:o}=F(e,"v-timeline-divider__dot"),{elevationClasses:d}=W(e),{backgroundColorClasses:i,backgroundColorStyles:v}=w(u(e,"lineColor"));return z(()=>a("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[a("div",{class:["v-timeline-divider__before",i.value],style:v.value},null),!e.hideDot&&a("div",{key:"dot",class:["v-timeline-divider__dot",d.value,o.value,g.value],style:r.value},[a("div",{class:["v-timeline-divider__inner-dot",t.value,o.value],style:m.value},[l.default?a(G,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},l.default):a(q,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),a("div",{class:["v-timeline-divider__after",i.value],style:v.value},null)])),{}}}),U=S({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:N,iconColor:String,lineInset:[Number,String],...D(),...Q(),...O(),...A(),...K(),...E()},"VTimelineItem"),Ce=I()({name:"VTimelineItem",props:U(),setup(e,s){let{slots:l}=s;const{dimensionStyles:g}=Y(e),r=Z(0),m=R();return ee(m,t=>{var o;t&&(r.value=((o=t.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:o.getBoundingClientRect().width)??0)},{flush:"post"}),z(()=>{var t,o;return a("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":T(r.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${T(e.lineInset)})`:T(0)},e.style]},[a("div",{class:"v-timeline-item__body",style:g.value},[(t=l.default)==null?void 0:t.call(l)]),a(he,{ref:m,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),e.density!=="compact"&&a("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((o=l.opposite)==null?void 0:o.call(l))])])}),{}}}),be=S({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...ae(U({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...D(),...ne(),...E(),...te()},"VTimeline"),pe=I()({name:"VTimeline",props:be(),setup(e,s){let{slots:l}=s;const{themeClasses:g}=ie(e),{densityClasses:r}=le(e),{rtlClasses:m}=se();oe({VTimelineDivider:{lineColor:u(e,"lineColor")},VTimelineItem:{density:u(e,"density"),dotColor:u(e,"dotColor"),fillDot:u(e,"fillDot"),hideOpposite:u(e,"hideOpposite"),iconColor:u(e,"iconColor"),lineColor:u(e,"lineColor"),lineInset:u(e,"lineInset"),size:u(e,"size")}});const t=V(()=>{const d=e.side?e.side:e.density!=="default"?"end":null;return d&&`v-timeline--side-${d}`}),o=V(()=>{const d=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return d;case"start":return d[0];case"end":return d[1];default:return null}});return z(()=>a(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},g.value,r.value,t.value,m.value,e.class],style:[{"--v-timeline-line-thickness":T(e.lineThickness)},e.style]},l)),{}}}),Te=y("p",{class:"text-center"}," Perjalanan kami dimotivasi untuk menjadi perusahaan yang xxx & xxxx ",-1),xe={class:"text-4xl font-bold"},Ve=y("p",{class:"text-center"}," Jejak Hasanah akan selalu berkarya dalam pembangunan Indonesia dengan mengedepankan 3 pilar “Amanah”, “Hasanah”, dan “Alhamdulillah” demi Indonesia Maju. ",-1),He=J({__name:"index",setup(e){const s=fe.sejarah;return(l,g)=>{const r=$,m=re,t=de,o=ue,d=_e,i=ve;return _(),C(b,null,[a(o,{class:"h-[60vh]"},{default:n(()=>[a(j,{class:"h-full"},{default:n(()=>[a(h,{align:"center",justify:"center",class:"h-full"},{default:n(()=>[a(k,{justify:"center",algin:"center"},{default:n(()=>[a(r,{class:"text-white"},{default:n(()=>[c("Layanan Kendaraan")]),_:1}),a(r,{class:"text-white"},{default:n(()=>[c("Jejak Hasanah")]),_:1}),a(t,{to:"#layanan"},{default:n(()=>[a(m,null,{default:n(()=>[c("Pelajari lebih lanjut")]),_:1})]),_:1})]),_:1}),a(k)]),_:1})]),_:1})]),_:1}),a(j,null,{default:n(()=>[a(h,null,{default:n(()=>[a(k,{align:"center"},{default:n(()=>[a(d)]),_:1})]),_:1}),a(h,{justify:"center",class:"mt-4 mb-4"},{default:n(()=>[a(k,{cols:"12",align:"center"},{default:n(()=>[a(r,{id:"layanan"},{default:n(()=>[c("Sejarah Perusahaan")]),_:1})]),_:1}),a(k,null,{default:n(()=>[Te]),_:1})]),_:1}),a(pe,{align:"start"},{default:n(()=>[(_(!0),C(b,null,P(p(s),(v,x)=>(_(),L(Ce,{key:x,"dot-color":"primary",size:"small"},{opposite:n(()=>[c(" Opposite content ")]),default:n(()=>[y("div",{class:H(["flex","flex-col",x%2===0?"items-start":"items-end"])},[y("div",xe,f(v.year),1),a(i,{class:"text-primary"},{default:n(()=>[c(f(v.title),1)]),_:2},1024),y("p",{class:H([x%2===0?"text-start":"text-end"])},f(v.desc),3)],2)]),_:2},1024))),128))]),_:1}),a(h,{justify:"center",class:"mt-4 mb-4"},{default:n(()=>[a(k,{cols:"12",align:"center"},{default:n(()=>[a(r,{id:"layanan"},{default:n(()=>[c("Tetap Teguh dalam Membangun Negeri...")]),_:1})]),_:1}),a(k,null,{default:n(()=>[Ve]),_:1})]),_:1})]),_:1})],64)}}});export{He as default};