import{j as i,bd as g,be as f,B as o,aB as y,p as V,I as k,E as P,O as C,a9 as S,D as h,Q as z,R as I,T as A,W as B,X as D,a2 as R,aa as T,s as x,a as l,G as b,v as F,a7 as O}from"./DnNSfI7X.js";import{V as _}from"./TW4uRc9i.js";function N(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return i()({name:s??g(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...o()},setup(e,u){let{slots:t}=u;return()=>{var n;return y(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}const j=V({start:Boolean,end:Boolean,icon:k,image:String,text:String,...o(),...P(),...C(),...S(),...h(),...z(),...I({variant:"flat"})},"VAvatar"),Q=i()({name:"VAvatar",props:j(),setup(a,r){let{slots:s}=r;const{themeClasses:e}=A(a),{colorClasses:u,colorStyles:t,variantClasses:n}=B(a),{densityClasses:c}=D(a),{roundedClasses:m}=R(a),{sizeClasses:v,sizeStyles:d}=T(a);return x(()=>l(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},e.value,u.value,c.value,m.value,v.value,n.value,a.class],style:[t.value,d.value,a.style]},{default:()=>[s.default?l(F,{key:"content-defaults",defaults:{VImg:{cover:!0,image:a.image},VIcon:{icon:a.icon}}},{default:()=>[s.default()]}):a.image?l(_,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?l(b,{key:"icon",icon:a.icon},null):a.text,O(!1,"v-avatar")]})),{}}});export{Q as V,N as c};
