import{g as b,aq as E,s as R,ar as V,n as L,as as B,at as c,D as C,l as M,ah as k,u as q,a as z,a8 as D,au as I,_ as N,o as A,f as F,w as O,ac as i,t as T}from"./index.88a35752.js";const Y="/assets/cover.ef0e4ddd.jpg";function j(a){return Math.floor(Math.abs(a))*Math.sign(a)}const U=b({name:"VParallax",props:{scale:{type:[Number,String],default:.5}},setup(a,u){let{slots:v}=u;const{intersectionRef:o,isIntersecting:n}=E(),{resizeRef:d,contentRect:h}=R(),{height:$}=V(),l=L();B(()=>{var e;o.value=d.value=(e=l.value)==null?void 0:e.$el});let t;c(n,e=>{e?(t=I(o.value),t=t===document.scrollingElement?document:t,t.addEventListener("scroll",s,{passive:!0}),s()):t.removeEventListener("scroll",s)}),C(()=>{var e;(e=t)==null||e.removeEventListener("scroll",s)}),c($,s),c(()=>{var e;return(e=h.value)==null?void 0:e.height},s);const m=M(()=>1-k(+a.scale));let p=-1;function s(){!n.value||(cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var g,x;var e;const _=((e=l.value)==null?void 0:e.$el).querySelector(".v-img__img");if(!_)return;const f=(g=t.clientHeight)!=null?g:document.documentElement.clientHeight,y=(x=t.scrollTop)!=null?x:window.scrollY,S=o.value.offsetTop,r=h.value.height,w=S+(r-f)/2,P=j((y-w)*m.value),H=Math.max(1,(m.value*(f-r)+r)/r);_.style.setProperty("transform",`translateY(${P}px) scale(${H})`)}))}return q(()=>z(D,{class:["v-parallax",{"v-parallax--active":n.value}],ref:l,cover:!0,onLoadstart:s,onLoad:s},v)),{}}}),W={},G={class:"w-50 h-100"},J=i("h1",{class:"text-h1 font-weight-black textColor text-center"}," Shop ",-1),K={class:"subheading textColor text-center ma-2"};function Q(a,u,v,o,n,d){return A(),F(U,{src:Y,height:"600"},{default:O(()=>[i("div",G,[J,i("h4",K,T(a.$t("message.Welcome"))+" to our store ... ",1)])]),_:1})}const Z=N(W,[["render",Q]]);export{Z as H};
