import{n as V,l as w,v as R,y as Z,at as D,D as j,bf as ae,g as ne,M as oe,O as le,T as ie,m as re,h as ue,i as se,p as ce,X as de,aA as O,ax as X,a0 as ve,ar as me,a4 as he,bg as fe,ag as ge,bh as be,bi as we,G as ye,u as pe,a as i,ay as _e,bj as Se,F as ke,aS as xe,_ as q,o as G,f as J,w as B,ac as Ee,V as Te,d as Me,bk as Be,aj as T,r as z}from"./index.88a35752.js";import{a as Ve,b as $e}from"./layout.dfdb4810.js";import{u as Ce}from"./ssrBoot.8f74948d.js";import{a as Le}from"./VCard.16e95713.js";import{a as Pe,V as He}from"./VApp.e95754a4.js";function Re(e){let{rootEl:u,isSticky:s,layoutItemStyles:r}=e;const t=V(!1),a=V(0),d=w(()=>{const b=typeof t.value=="boolean"?"top":t.value;return[s.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[b]:R(a.value)}:{top:r.value.top}]});Z(()=>{D(s,b=>{b?window.addEventListener("scroll",_,{passive:!0}):window.removeEventListener("scroll",_)},{immediate:!0})}),j(()=>{document.removeEventListener("scroll",_)});let g=0;function _(){var f;const b=g>window.scrollY?"up":"down",l=u.value.getBoundingClientRect(),v=parseFloat((f=r.value.top)!=null?f:0),m=window.scrollY-Math.max(0,a.value-v),h=l.height+Math.max(a.value,v)-window.scrollY-window.innerHeight;l.height<window.innerHeight-v?(t.value="top",a.value=v):b==="up"&&t.value==="bottom"||b==="down"&&t.value==="top"?(a.value=window.scrollY+l.top,t.value=!0):b==="down"&&h<=0?(a.value=0,t.value="bottom"):b==="up"&&m<=0&&(a.value=l.top+m,t.value="top"),g=window.scrollY}return{isStuck:t,stickyStyles:d}}const De=100,Ne=20;function F(e){const u=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*u}function U(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let u=0;for(let s=e.length-1;s>0;s--){if(e[s].t===e[s-1].t)continue;const r=F(u),t=(e[s].d-e[s-1].d)/(e[s].t-e[s-1].t);u+=(t-r)*Math.abs(t),s===e.length-1&&(u*=.5)}return F(u)*1e3}function Ye(){const e={};function u(t){Array.from(t.changedTouches).forEach(a=>{var g;((g=e[a.identifier])!=null?g:e[a.identifier]=new ae(Ne)).push([t.timeStamp,a])})}function s(t){Array.from(t.changedTouches).forEach(a=>{delete e[a.identifier]})}function r(t){var a;const d=(a=e[t])==null?void 0:a.values().reverse();if(!d)throw new Error(`No samples for touch id ${t}`);const g=d[0],_=[],b=[];for(const l of d){if(g[0]-l[0]>De)break;_.push({t:l[0],d:l[1].clientX}),b.push({t:l[0],d:l[1].clientY})}return{x:U(_),y:U(b),get direction(){const{x:l,y:v}=this,[m,h]=[Math.abs(l),Math.abs(v)];return m>h&&l>=0?"right":m>h&&l<=0?"left":h>m&&v>=0?"down":h>m&&v<=0?"up":Ie()}}}return{addMovement:u,endTouch:s,getVelocity:r}}function Ie(){throw new Error}function We(e){let{isActive:u,isTemporary:s,width:r,touchless:t,position:a}=e;Z(()=>{window.addEventListener("touchstart",E,{passive:!0}),window.addEventListener("touchmove",$,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),j(()=>{window.removeEventListener("touchstart",E),window.removeEventListener("touchmove",$),window.removeEventListener("touchend",M)});const d=w(()=>a.value!=="bottom"),{addMovement:g,endTouch:_,getVelocity:b}=Ye();let l=!1;const v=V(!1),m=V(0),h=V(0);let f;function P(o,n){return(a.value==="left"?o:a.value==="right"?document.documentElement.clientWidth-o:a.value==="bottom"?document.documentElement.clientHeight-o:L())-(n?r.value:0)}function H(o){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const c=a.value==="left"?(o-h.value)/r.value:a.value==="right"?(document.documentElement.clientWidth-o-h.value)/r.value:a.value==="bottom"?(document.documentElement.clientHeight-o-h.value)/r.value:L();return n?Math.max(0,Math.min(1,c)):c}function E(o){if(t.value)return;const n=o.changedTouches[0].clientX,c=o.changedTouches[0].clientY,y=25,k=a.value==="left"?n<y:a.value==="right"?n>document.documentElement.clientWidth-y:a.value==="bottom"?c>document.documentElement.clientHeight-y:L(),x=u.value&&(a.value==="left"?n<r.value:a.value==="right"?n>document.documentElement.clientWidth-r.value:a.value==="bottom"?c>document.documentElement.clientHeight-r.value:L());(k||x||u.value&&s.value)&&(l=!0,f=[n,c],h.value=P(d.value?n:c,u.value),m.value=H(d.value?n:c),_(o),g(o))}function $(o){const n=o.changedTouches[0].clientX,c=o.changedTouches[0].clientY;if(l){if(!o.cancelable){l=!1;return}const k=Math.abs(n-f[0]),x=Math.abs(c-f[1]);(d.value?k>x&&k>3:x>k&&x>3)?(v.value=!0,l=!1):(d.value?x:k)>3&&(l=!1)}if(!v.value)return;o.preventDefault(),g(o);const y=H(d.value?n:c,!1);m.value=Math.max(0,Math.min(1,y)),y>1?h.value=P(d.value?n:c,!0):y<0&&(h.value=P(d.value?n:c,!1))}function M(o){if(l=!1,!v.value)return;g(o),v.value=!1;const n=b(o.changedTouches[0].identifier),c=Math.abs(n.x),y=Math.abs(n.y);(d.value?c>y&&c>400:y>c&&y>3)?u.value=n.direction===({left:"right",right:"left",bottom:"up"}[a.value]||L()):u.value=m.value>.5}const S=w(()=>v.value?{transform:a.value==="left"?`translateX(calc(-100% + ${m.value*r.value}px))`:a.value==="right"?`translateX(calc(100% - ${m.value*r.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${m.value*r.value}px))`:L(),transition:"none"}:void 0);return{isDragging:v,dragProgress:m,dragStyles:S}}function L(){throw new Error}const Ae=["start","end","left","right","bottom"],Oe=ne({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ae.includes(e)},sticky:Boolean,...oe(),...le(),...Ve(),...ie(),...re({tag:"nav"}),...ue()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,u){let{attrs:s,emit:r,slots:t}=u;const{isRtl:a}=se(),{themeClasses:d}=ce(e),{borderClasses:g}=de(e),{backgroundColorClasses:_,backgroundColorStyles:b}=O(X(e,"color")),{elevationClasses:l}=ve(e),{mobile:v}=me(),{roundedClasses:m}=he(e),h=fe(),f=ge(e,"modelValue",null,p=>!!p),{ssrBootStyles:P}=Ce(),H=V(),E=V(!1),$=w(()=>e.rail&&e.expandOnHover&&E.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),M=w(()=>be(e.location,a.value)),S=w(()=>!e.permanent&&(v.value||e.temporary)),o=w(()=>e.sticky&&!S.value&&M.value!=="bottom");e.expandOnHover&&e.rail!=null&&D(E,p=>r("update:rail",!p)),e.disableResizeWatcher||D(S,p=>!e.permanent&&xe(()=>f.value=!p)),!e.disableRouteWatcher&&h&&D(h.currentRoute,()=>S.value&&(f.value=!1)),D(()=>e.permanent,p=>{p&&(f.value=!0)}),we(()=>{e.modelValue!=null||S.value||(f.value=e.permanent||!v.value)});const{isDragging:n,dragProgress:c,dragStyles:y}=We({isActive:f,isTemporary:S,width:$,touchless:X(e,"touchless"),position:M}),k=w(()=>{const p=S.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):$.value;return n.value?p*c.value:p}),{layoutItemStyles:x,layoutRect:C,layoutItemScrimStyles:K}=$e({id:e.name,order:w(()=>parseInt(e.order,10)),position:M,layoutSize:k,elementSize:$,active:w(()=>f.value||n.value),disableTransitions:w(()=>n.value),absolute:w(()=>e.absolute||o.value&&typeof N.value!="string")}),{isStuck:N,stickyStyles:Q}=Re({rootEl:H,isSticky:o,layoutItemStyles:x}),Y=O(w(()=>typeof e.scrim=="string"?e.scrim:null)),ee=w(()=>({...n.value?{opacity:c.value*.2,transition:"none"}:void 0,...C.value?{left:R(C.value.left),right:R(C.value.right),top:R(C.value.top),bottom:R(C.value.bottom)}:void 0,...K.value}));return ye({VList:{bgColor:"transparent"}}),pe(()=>{var p,I,W,A;const te=t.image||e.image;return i(ke,null,[i(e.tag,_e({ref:H,onMouseenter:()=>E.value=!0,onMouseleave:()=>E.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${M.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":S.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":o.value},d.value,_.value,g.value,l.value,m.value],style:[b.value,x.value,y.value,P.value,Q.value]},s),{default:()=>[te&&i("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?(p=t.image)==null?void 0:p.call(t,{image:e.image}):i("img",{src:e.image,alt:""},null)]),t.prepend&&i("div",{class:"v-navigation-drawer__prepend"},[(I=t.prepend)==null?void 0:I.call(t)]),i("div",{class:"v-navigation-drawer__content"},[(W=t.default)==null?void 0:W.call(t)]),t.append&&i("div",{class:"v-navigation-drawer__append"},[(A=t.append)==null?void 0:A.call(t)])]}),i(Se,{name:"fade-transition"},{default:()=>[S.value&&(n.value||f.value)&&!!e.scrim&&i("div",{class:["v-navigation-drawer__scrim",Y.backgroundColorClasses.value],style:[ee.value,Y.backgroundColorStyles.value],onClick:()=>f.value=!1},null)]})])}),{isStuck:N}}}),Xe={},ze={class:"pa-2"};function Fe(e,u,s,r,t,a){return G(),J(Le,null,{default:B(()=>[i(Oe,{class:"bg-primary",permanent:""},{append:B(()=>[Ee("div",ze,[i(Te,{block:"",color:"#FBDF07",to:"/login"},{default:B(()=>[Me(" Logout ")]),_:1})])]),default:B(()=>[i(Be,{color:"info"},{default:B(()=>[i(T,{class:"btnhover","prepend-icon":"mdi-view-dashboard",title:"Dashboard",to:"/chartView"}),i(T,{class:"btnhover","prepend-icon":"mdi-clipboard-list",title:"Products List",to:"/productlist"}),i(T,{class:"btnhover","prepend-icon":"mdi-plus-thick",title:"Add Product",to:"/addProduct"}),i(T,{class:"btnhover","prepend-icon":"mdi-circle-edit-outline",to:"/editProduct",title:"Edit Product"}),i(T,{class:"btnhover","prepend-icon":"mdi-clipboard-list",title:"users List",to:"/UsersList"}),i(T,{class:"btnhover","prepend-icon":"mdi-account-box",title:"Account"}),i(T,{class:"btnhover","prepend-icon":"mdi-gavel",title:"Admin"}),i(T,{class:"btnhover","prepend-icon":"mdi-home",title:"Home",to:"/"})]),_:1})]),_:1})]),_:1})}const Ue=q(Xe,[["render",Fe]]),Ze={components:{DashboardSection:Ue},setup(){}};function je(e,u,s,r,t,a){const d=z("dashboard-section"),g=z("router-view");return G(),J(Pe,null,{default:B(()=>[i(d),i(He,null,{default:B(()=>[i(g)]),_:1})]),_:1})}const et=q(Ze,[["render",je]]);export{et as default};
