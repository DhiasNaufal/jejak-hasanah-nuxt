import{j as V,o as i,c as d,k as F,F as C,r as B,a as e,w as n,e as g,t as _,f as u,_ as k,d as K,l as L,n as q,u as U,m as T,V as E,b as f,p as M,q as W,s as z,I as J,v as N,x as Y,y as G,z as y,A as Z,B as O,C as ee,D as b,E as te,G as ne,g as x,H as ae,i as oe}from"./ZS-miP3L.js";import{_ as X}from"./B--eTwOH.js";import{_ as se}from"./Nq-9eHEW.js";import{_ as R}from"./C3ailZzM.js";import{m as le,V as j,a as ie,b as w}from"./CeTMAOP8.js";import{m as re,V as S,a as ce}from"./CgQA2AEf.js";import{V as H}from"./BPebwYhn.js";import{s as ue,_ as me}from"./DfkFUO37.js";import{p as de}from"./CZxrViIU.js";import{t as ge}from"./DQ8WRVvB.js";import{V as pe,a as _e}from"./Csc9Hrgv.js";import"./Df16S4cz.js";import"./B3c52ROj.js";const he={},Ae={class:"text-6xl font-fugaz"};function fe(t,s){return i(),d("h1",Ae,[F(t.$slots,"default")])}const Ce=V(he,[["render",fe]]),Qe={data(){return{backgroundUrl:"/img/home/homeBanner.png",items:[{value:"19+",desc:"Tahun Berdiri"},{value:"98%",desc:"Kepuasan Pelanggan"},{value:"75+",desc:"Proyek dikerjakan"}]}}},ve={class:"h-[100px] w-1/2 trapezoid absolute bottom-0 right-0 px-28 flex gap-16 items-center justify-center"},Ie={class:"text-sm 2xl:text-base"};function Ve(t,s,a,r,m,c){const o=k;return i(),d("div",ve,[(i(!0),d(C,null,B(m.items,(l,p)=>(i(),d("div",{class:"text-white flex flex-col items-center",key:p},[e(o,{class:"text-white"},{default:n(()=>[g(_(l.value),1)]),_:2},1024),u("p",Ie,_(l.desc),1)]))),128))])}const Be=V(Qe,[["render",Ve]]),Ue=K({__name:"BackgroundImage",props:{img:{type:String,default:"background-image: url('/img/home/homeBanner.png')"}},setup(t){const s=t,a=L(()=>s.img);return(r,m)=>(i(),d("div",{class:"bg-cover bg-center",style:q(U(a))},[F(r.$slots,"default")],4))}}),ke={landingPage:{title:"Jejak hasanah",desc:"Jejak Hasanah hadir untuk memberikan Solusi Inovatif dalam Jasa Transportasi dan Advertising dengan Profesionalisme dan Komitmen terhadap kualitas dan inovasi"}},xe={setup(){return{content:T(ke.landingPage),mitra:["/img/mitra/logo-telkomsel.png","/img/mitra/PAMA.png","/img/mitra/class_mild.png","/img/mitra/gudang_garam.png","/img/mitra/djarum.png"]}}},Ee={class:"h-[70vh]"},be=u("br",null,null,-1),Ke=u("br",null,null,-1);function ye(t,s,a,r,m,c){const o=Ce,l=M,p=X,Q=Be,A=Ue;return i(),d("div",Ee,[e(A,{class:"h-[90%] relative"},{default:n(()=>[e(p,{class:"h-full mb-6"},{default:n(()=>[e(E,{align:"center",class:"h-full text-white","no-gutters":""},{default:n(()=>[e(f,{cols:"6"},{default:n(()=>[e(o,null,{default:n(()=>[g(_(r.content.title),1)]),_:1}),e(o,null,{default:n(()=>[g(" Insya Allah Amanah")]),_:1}),be,u("p",null,_(r.content.desc),1),Ke,e(l,{color:"secondary"},{default:n(()=>[g("Lebih lanjut")]),_:1})]),_:1})]),_:1})]),_:1}),e(Q)]),_:1})])}const Fe=V(xe,[["render",ye]]),qe={props:{img:{type:String,default:"background-image: url('/img/home/homeBanner.png')"},number:{type:String,default:"1"},title:{type:String,default:"Title"},desc:{type:String,default:"   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam."},path:{type:String,default:"/"}}},Pe={class:"flex gap-8 items-center"},je={class:"bg-secondary absolute -right-5 top-1/3 h-14 w-14 flex items-center justify-center text-3xl font-extrabold italic rounded-0"},we={class:"w-1/2 flex flex-col gap-0 items-start"};function Se(t,s,a,r,m,c){const o=se,l=R;return i(),d("div",Pe,[u("div",{class:"bg-cover bg-center h-[164px] w-[312px] rounded-0 relative",style:q(a.img)},[u("div",je,_(a.number),1)],4),u("div",we,[e(o,{class:"text-text"},{default:n(()=>[g(_(a.title),1)]),_:1}),u("p",null,_(a.desc),1),e(l,{to:a.path},{default:n(()=>[e(W,{variant:"outlined",color:"primary"},{default:n(()=>[g("Lihat Detail")]),_:1})]),_:1},8,["to"])])])}const Le=V(qe,[["render",Se]]),Te=z({color:String,cycle:Boolean,delimiterIcon:{type:J,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>Number(t)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...le({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),D=N()({name:"VCarousel",props:Te(),emits:{"update:modelValue":t=>!0},setup(t,s){let{slots:a}=s;const r=Y(t,"modelValue"),{t:m}=G(),c=T();let o=-1;y(r,p),y(()=>t.interval,p),y(()=>t.cycle,Q=>{Q?p():window.clearTimeout(o)}),Z(l);function l(){!t.cycle||!c.value||(o=window.setTimeout(c.value.group.next,+t.interval>0?+t.interval:6e3))}function p(){window.clearTimeout(o),window.requestAnimationFrame(l)}return O(()=>{const Q=j.filterProps(t);return e(j,b({ref:c},Q,{modelValue:r.value,"onUpdate:modelValue":A=>r.value=A,class:["v-carousel",{"v-carousel--hide-delimiter-background":t.hideDelimiterBackground,"v-carousel--vertical-delimiters":t.verticalDelimiters},t.class],style:[{height:ne(t.height)},t.style]}),{default:a.default,additional:A=>{let{group:h}=A;return e(C,null,[!t.hideDelimiters&&e("div",{class:"v-carousel__controls",style:{left:t.verticalDelimiters==="left"&&t.verticalDelimiters?0:"auto",right:t.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&e(ee,{defaults:{VBtn:{color:t.color,icon:t.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((v,I)=>{const P={id:`carousel-item-${v.id}`,"aria-label":m("$vuetify.carousel.ariaLabel.delimiter",I+1,h.items.value.length),class:["v-carousel__controls__item",h.isSelected(v.id)&&"v-btn--active"],onClick:()=>h.select(v.id,!0)};return a.item?a.item({props:P,item:v}):e(W,b(v,P),null)})]})]),t.progress&&e(te,{class:"v-carousel__progress",color:typeof t.progress=="string"?t.progress:void 0,modelValue:(h.getItemIndex(r.value)+1)/h.items.value.length*100},null)])},prev:a.prev,next:a.next})}),{}}}),We=z({...re(),...ie()},"VCarouselItem"),$=N()({name:"VCarouselItem",inheritAttrs:!1,props:We(),setup(t,s){let{slots:a,attrs:r}=s;O(()=>{const m=S.filterProps(t),c=w.filterProps(t);return e(w,b({class:["v-carousel-item",t.class]},c),{default:()=>[e(S,b(r,m),a)]})})}}),ze=u("p",null,"Layanan Kami",-1),Ne=K({__name:"Services",setup(t){const s=[{id:"1",image:"background-image: url('/img/home/service/Landing_service_transport.png')",title:"Transportation",desc:"Layanan transportasi kami selalu mengutamakan kenyamanan, keamanan, dan ketepatan waktu.",path:"/transportation"},{id:"2",image:"background-image: url('/img/home/vtrn.png')",title:"Advertising",desc:"Kami selalu mengutamakan kreativitas, efektivitas, dan hasil yang maksimal",path:"/advertising"}];return(a,r)=>{const m=k,c=Le;return i(),x(E,{align:"center",justify:"end"},{default:n(()=>[e(f,{cols:"12",align:"start"},{default:n(()=>[ze,e(m,null,{default:n(()=>[g("Kami Memberikan Inovasi")]),_:1})]),_:1}),e(f,{cols:"12"},{default:n(()=>[e(E,{justify:"center"},{default:n(()=>[(i(),d(C,null,B(s,o=>e(f,{cols:"6"},{default:n(()=>[e(c,{img:o.image,title:o.title,number:o.id,desc:o.desc,path:o.path},null,8,["img","title","number","desc","path"])]),_:2},1024)),64))]),_:1})]),_:1}),e(f,{cols:"12"},{default:n(()=>[e(D,{"show-arrows":"hover",class:"rounded-0","hide-delimiters":"",cycle:""},{default:n(()=>[(i(),d(C,null,B(5,(o,l)=>e($,{src:`/img/home/corousel/${l+1}.png`,cover:""},null,8,["src"])),64))]),_:1})]),_:1})]),_:1})}}}),Oe="data:image/png;base64,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",Xe={},Re=u("img",{src:Oe,class:"-z-10 absolute right-0 bottom-0",width:200},null,-1);function He(t,s){return i(),x(H,{class:"relative"},{default:n(()=>[F(t.$slots,"default"),Re]),_:3})}const De=V(Xe,[["render",He]]),$e={class:"portfolio-card h-full rounded-0"},Me={class:"h-full flex flex-col justify-center w-7/12 p-10"},Je={class:"text-white"},Ye={__name:"portofolioShort",props:{img:{type:String,default:"background-image: url('/img/home/homeBanner.png')"},title:{type:String,default:"Site Palembang (Muara Enim)"},desc:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor quam, placerat sit amet eros quis, scelerisque lobortis diam. Duis tincidunt"}},setup(t){const s=t,a=L(()=>s.img);return(r,m)=>{const c=k;return i(),d("div",{class:"bg-cover bg-center h-5/6 w-5/6 rounded-0",style:q(U(a))},[u("div",$e,[u("div",Me,[e(c,{class:"text-white font-semibold"},{default:n(()=>[g(_(t.title),1)]),_:1}),u("p",Je,_(t.desc),1)])])],4)}}},Ge=Ye,Ze={class:"text-center"},et=u("p",{class:"leading-tight"}," Dengan pengalaman luas di berbagai sektor, kami telah berhasil menangani banyak proyek, mulai dari layanan antar jemput karyawan hingga pemasangan media periklanan. Kami terus berinovasi dan berkomitmen untuk selalu memberikan hasil terbaik, memastikan setiap proyek memenuhi standar tertinggi dalam kualitas dan kepuasan pelanggan. ",-1),tt=K({__name:"Portfolio",setup(t){const s=de.transportasi;return(a,r)=>{const m=k,c=Ge,o=R;return i(),d(C,null,[u("div",Ze,[e(m,{class:"pb-5"},{default:n(()=>[g("Lihat apa yang sudah kita kerjakan")]),_:1}),et]),e(D,{"show-arrows":"hover","hide-delimiters":""},{default:n(()=>[(i(!0),d(C,null,B(U(s),(l,p)=>(i(),x($,null,{default:n(()=>[e(o,{class:"flex fill-height justify-center align-center",to:{path:`/portofolio/${l.title}`,query:{id:l.id}}},{default:n(()=>[e(c,{title:l.title,desc:l.short,img:l.img,class:"hover:scale-105 transition-all"},null,8,["title","desc","img"])]),_:2},1032,["to"])]),_:2},1024))),256))]),_:1})],64)}}}),nt=ae("/img/home/Testimony/Testimoni.png"),at=u("p",null,"Testimoni",-1),ot=K({__name:"index",setup(t){const s=ge.testimoni,a=ue.jh;return(r,m)=>{const c=Fe,o=Ne,l=De,p=me,Q=k,A=oe,h=tt,v=X;return i(),d(C,null,[e(c),e(v,null,{default:n(()=>[e(l,null,{default:n(()=>[e(o)]),_:1}),e(p,{title:"Keunggulan Jejak Hasanah",subtitle:"Jejak Hasanah Menawarkan Inovasi dan Profesionalisme kepada Mitra",class:"mb-3",items:U(a)},null,8,["items"]),e(H,{class:"mb-3"},{default:n(()=>[e(f,{cols:"12",align:"start"},{default:n(()=>[at,e(Q,null,{default:n(()=>[g("Mari dengan kata mereka")]),_:1})]),_:1}),e(E,{align:"center"},{default:n(()=>[e(f,{justify:"center"},{default:n(()=>[e(A,{src:"/img/home/Testimony/Testimoni.png",sizes:"sm:800px 2xl:1000px"})]),_:1}),e(f,{cols:"7"},{default:n(()=>[(i(!0),d(C,null,B(U(s),I=>(i(),x(pe,{variant:"flat","append-avatar":nt,class:"mx-auto bg-light-gray rounded-0 mb-2 mt-4",subtitle:I.jabatan,title:I.nama},{append:n(()=>[e(ce,{size:"50"},{default:n(()=>[e(A,{alt:"John",src:I.img},null,8,["src"])]),_:2},1024)]),default:n(()=>[e(_e,null,{default:n(()=>[g(_(I.text),1)]),_:2},1024)]),_:2},1032,["subtitle","title"]))),256))]),_:1})]),_:1})]),_:1}),e(h)]),_:1})],64)}}}),st={};function lt(t,s){const a=ot;return i(),x(a)}const Qt=V(st,[["render",lt]]);export{Qt as default};