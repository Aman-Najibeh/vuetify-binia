import{N as $}from"./NavBarSection.70a1c484.js";import{aF as g,_ as u,aH as v,o as d,f as w,w as a,a as e,a8 as y,ac as C,t as o,e as N,d as s,r as n,c as B,F as S}from"./index.88a35752.js";import{a as b,V as k,c as r}from"./VCard.16e95713.js";import{V as i,a as l}from"./VRow.e88aba9b.js";import{V as x}from"./VContainer.14eaff44.js";import"./VToolbar.cdd4fe96.js";import"./layout.dfdb4810.js";const j={data:()=>({userinfo:""}),created(){this.axios.get("https://dummyjson.com/users/"+this.user.id,{headers:{Authorization:"Bearer "+this.user.token}}).then(t=>this.userinfo=t.data)},computed:{...g(v,["user"])}},F={class:"text-xs-h6 text-md-h5 text-lg-h4",color:"primary"};function G(t,c,f,m,p,_){return d(),w(x,{class:"ma-16"},{default:a(()=>[e(i,{justify:"space-around"},{default:a(()=>[e(b,{width:"800",color:"info"},{default:a(()=>[e(i,{justify:"center",align:"center"},{default:a(()=>[e(l,null,{default:a(()=>[e(y,{src:t.userinfo.image,class:"text-white rounded-circle w-25 ma-8"},null,8,["src"])]),_:1}),e(l,null,{default:a(()=>[e(k,null,{default:a(()=>[C("h1",F,o(t.userinfo.firstName+t.userinfo.lastName),1)]),_:1})]),_:1})]),_:1}),e(N),e(r,null,{default:a(()=>[s("Id : "+o(t.userinfo.id),1)]),_:1}),e(r,null,{default:a(()=>[s("Email : "+o(t.userinfo.email),1)]),_:1}),e(r,null,{default:a(()=>[s("Phone : "+o(t.userinfo.phone),1)]),_:1}),e(r,null,{default:a(()=>[s("Gender : "+o(t.userinfo.gender),1)]),_:1}),e(r,null,{default:a(()=>[s("university : "+o(t.userinfo.university),1)]),_:1}),e(r,null,{default:a(()=>[s("bloodGroup : "+o(t.userinfo.bloodGroup),1)]),_:1})]),_:1})]),_:1})]),_:1})}const T=u(j,[["render",G]]),D={components:{NavBarSection:$,ProfileSection:T}};function E(t,c,f,m,p,_){const h=n("nav-bar-section"),V=n("profile-section");return d(),B(S,null,[e(h),e(V)],64)}const q=u(D,[["render",E]]);export{q as default};
