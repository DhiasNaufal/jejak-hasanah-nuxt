import{p as u,W as s,E as t,v as l,x as i,bb as f}from"./B3ysm7Mw.js";const d=u({eager:Boolean},"lazy");function m(e,a){const o=s(!1),n=t(()=>o.value||e.eager||a.value);l(a,()=>o.value=!0);function r(){e.eager||(o.value=!1)}return{isBooted:o,hasContent:n,onAfterLeave:r}}function v(){const e=s(!1);return i(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:t(()=>e.value?void 0:{transition:"none !important"}),isBooted:f(e)}}export{m as a,d as m,v as u};
