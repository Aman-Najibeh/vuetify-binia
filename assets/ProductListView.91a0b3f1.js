<<<<<<< HEAD:dist/assets/ProductListView.91a0b3f1.js
import{ad as j,bl as L,bm as z,ag as q,bn as K,n as M,bo as W,at as D,u as G,bp as H,a as e,K as J,ay as P,bq as Q,b8 as X,aS as Y,aF as Z,aG as $,_ as F,r as C,o as _,c as k,ac as a,w as l,F as E,al as ee,br as te,d as r,e as w,V as h,t as c,aW as v,b as I,f as le}from"./index.6ab43717.js";import{u as B}from"./Product.44e8be48.js";import{V as ae,a as se,b as y}from"./VToolbar.3ebf9f8e.js";import{a as O,c as R,V as oe,b as U}from"./VCard.28106eac.js";import{V as de}from"./VContainer.ca141ba4.js";import{V as ie,a as b}from"./VRow.a183f7cc.js";const A=j()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...L({origin:"center center",scrollStrategy:"block",transition:{component:z},zIndex:2400})},emits:{"update:modelValue":o=>!0},setup(o,d){let{slots:V}=d;const f=q(o,"modelValue"),{scopeId:s}=K(),i=M();function p(u){var t,n;const g=u.relatedTarget,m=u.target;if(g!==m&&(t=i.value)!=null&&t.contentEl&&(n=i.value)!=null&&n.globalTop&&![document,i.value.contentEl].includes(m)&&!i.value.contentEl.contains(m)){const x=[...i.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(T=>!T.hasAttribute("disabled")&&!T.matches('[tabindex="-1"]'));if(!x.length)return;const S=x[0],N=x[x.length-1];g===S?N.focus():S.focus()}}return W&&D(()=>f.value&&o.retainFocus,u=>{u?document.addEventListener("focusin",p):document.removeEventListener("focusin",p)},{immediate:!0}),D(f,async u=>{if(await Y(),u){var t;(t=i.value.contentEl)==null||t.focus({preventScroll:!0})}else{var n;(n=i.value.activatorEl)==null||n.focus({preventScroll:!0})}}),G(()=>{const[u]=H(o);return e(Q,P({ref:i,class:["v-dialog",{"v-dialog--fullscreen":o.fullscreen,"v-dialog--scrollable":o.scrollable}]},u,{modelValue:f.value,"onUpdate:modelValue":t=>f.value=t,"aria-role":"dialog","aria-modal":"true",activatorProps:P({"aria-haspopup":"dialog","aria-expanded":String(f.value)},o.activatorProps)},s),{activator:V.activator,default:function(){for(var t,n=arguments.length,g=new Array(n),m=0;m<n;m++)g[m]=arguments[m];return e(J,{root:!0},{default:()=>[(t=V.default)==null?void 0:t.call(V,...g)]})}})}),X({},i)}}),ne={data(){return{dialog:!1,dialogDelete:!1,itemsPerPage:5,headers:[{title:"Id",key:"id"},{title:"Title",key:"title"},{title:"Price ",key:"price"},{title:"Rating",key:"rating"},{title:"Brand",key:"brand"},{title:"Category",key:"category"},{title:"Actions",key:"actions",sortable:!1}],editedIndex:-1,editedItem:{id:0,title:"",price:0,rating:0,brand:0,category:""},defaultItem:{id:0,title:"",price:0,rating:0,brand:0,category:""}}},computed:{...Z(B,["ProductsStore"]),formTitle(){return this.editedIndex===-1?"New Item":"Edit Item"}},watch:{dialog(o){o||this.close()},dialogDelete(o){o||this.closeDelete()}},methods:{...$(B,["RemoveProduct","returnindexProductEdit"]),editItem(o){this.editedIndex=this.ProductsStore.indexOf(o),this.editedItem=Object.assign({},o),this.dialog=!0},deleteItem(o){this.editedIndex=this.ProductsStore.indexOf(o),this.editedItem=Object.assign({},o),this.dialogDelete=!0},deleteItemConfirm(){this.ProductsStore.splice(this.editedIndex,1),this.closeDelete()},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){this.editedIndex>-1?Object.assign(this.ProductsStore[this.editedIndex],this.editedItem):(this.ProductsStore.push(this.editedItem),console.log(this.ProductsStore)),this.close()}}},re={class:"ma-16 d-none"},ue=a("thead",null,[a("tr",{class:"bg-sucsess"},[a("th",{class:"text-center py-2"},"Id"),a("th",{class:"text-left py-2"},"Title"),a("th",{class:"text-left py-2"},"Price"),a("th",{class:"text-left py-2"},"Percentage"),a("th",{class:"text-left py-2"},"Rating"),a("th",{class:"text-left py-2"},"Stock"),a("th",{class:"text-left py-2"},"Brand"),a("th",{class:"text-left py-2"},"Category"),a("th",{class:"text-left py-2"},"EDIT"),a("th",{class:"text-left py-2"},"DELETE")])],-1),ce={class:"ma-16"},me={class:"text-h5"};function fe(o,d,V,f,s,i){const p=C("router-link"),u=C("v-data-table");return _(),k(E,null,[a("section",re,[e(te,{class:"bg-success","items-per-page":s.itemsPerPage,"onUpdate:items-per-page":d[0]||(d[0]=t=>s.itemsPerPage=t)},{default:l(()=>[ue,a("tbody",null,[(_(!0),k(E,null,ee(this.ProductsStore,(t,n)=>(_(),k("tr",{class:"bg-info",key:t.id},[a("td",null,c(t.id),1),a("td",null,c(t.title),1),a("td",null,c(t.price),1),a("td",null,c(t.discountPercentage),1),a("td",null,c(t.rating),1),a("td",null,c(t.stock),1),a("td",null,c(t.brand),1),a("td",null,c(t.category),1),a("td",null,[e(p,{to:"/EditProduct"},{default:l(()=>[e(I,{class:"ma-2",onClick:g=>o.returnindexProductEdit(n)},{default:l(()=>[r("mdi-circle-edit-outline")]),_:2},1032,["onClick"])]),_:2},1024)]),a("td",null,[e(I,{class:"ma-2",onClick:g=>o.RemoveProduct(n)},{default:l(()=>[r("mdi-delete")]),_:2},1032,["onClick"])]),e(w)]))),128))])]),_:1},8,["items-per-page"])]),a("section",ce,[e(u,{"items-per-page":s.itemsPerPage,headers:s.headers,items:o.ProductsStore,"sort-by":[{key:"id",order:"asc"}],class:"elevation-1"},{top:l(()=>[e(ae,{flat:""},{default:l(()=>[e(se,null,{default:l(()=>[r("My CRUD")]),_:1}),e(w,{class:"mx-4",inset:"",vertical:""}),e(y),e(A,{modelValue:s.dialog,"onUpdate:modelValue":d[7]||(d[7]=t=>s.dialog=t),"max-width":"500px"},{activator:l(({props:t})=>[e(h,P({color:"primary",dark:"",class:"mb-2"},t),{default:l(()=>[r(" New Item ")]),_:2},1040)]),default:l(()=>[e(O,null,{default:l(()=>[e(R,null,{default:l(()=>[a("span",me,c(i.formTitle),1)]),_:1}),e(oe,null,{default:l(()=>[e(de,null,{default:l(()=>[e(ie,null,{default:l(()=>[e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.id,"onUpdate:modelValue":d[1]||(d[1]=t=>s.editedItem.id=t),label:"Id"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.title,"onUpdate:modelValue":d[2]||(d[2]=t=>s.editedItem.title=t),label:"Title"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.rating,"onUpdate:modelValue":d[3]||(d[3]=t=>s.editedItem.rating=t),label:"Rating"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.price,"onUpdate:modelValue":d[4]||(d[4]=t=>s.editedItem.price=t),label:"Price"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.brand,"onUpdate:modelValue":d[5]||(d[5]=t=>s.editedItem.brand=t),label:"Brand"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.category,"onUpdate:modelValue":d[6]||(d[6]=t=>s.editedItem.category=t),label:"Category"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U,null,{default:l(()=>[e(y),e(h,{color:"blue-darken-1",variant:"text",onClick:i.close},{default:l(()=>[r(" Cancel ")]),_:1},8,["onClick"]),e(h,{color:"blue-darken-1",variant:"text",onClick:i.save},{default:l(()=>[r(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(A,{modelValue:s.dialogDelete,"onUpdate:modelValue":d[8]||(d[8]=t=>s.dialogDelete=t),"max-width":"500px"},{default:l(()=>[e(O,null,{default:l(()=>[e(R,{class:"text-h5"},{default:l(()=>[r("Are you sure you want to delete this item?")]),_:1}),e(U,null,{default:l(()=>[e(y),e(h,{color:"blue-darken-1",variant:"text",onClick:i.closeDelete},{default:l(()=>[r("Cancel")]),_:1},8,["onClick"]),e(h,{color:"blue-darken-1",variant:"text",onClick:i.deleteItemConfirm},{default:l(()=>[r("OK")]),_:1},8,["onClick"]),e(y)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":l(({item:t})=>[e(I,{size:"small",class:"me-2",onClick:n=>i.editItem(t.raw)},{default:l(()=>[r(" mdi-pencil ")]),_:2},1032,["onClick"]),e(I,{size:"small",onClick:n=>i.deleteItem(t.raw)},{default:l(()=>[r(" mdi-delete ")]),_:2},1032,["onClick"])]),_:1},8,["items-per-page","headers","items"])])],64)}const ge=F(ne,[["render",fe]]),pe={components:{DataTable:ge}};function ve(o,d,V,f,s,i){const p=C("data-table");return _(),le(p)}const _e=F(pe,[["render",ve]]);export{_e as default};
=======
import{ad as j,bl as L,bm as z,ag as q,bn as K,n as M,bo as W,at as D,u as G,bp as H,a as e,K as J,ay as P,bq as Q,b8 as X,aS as Y,aF as Z,aG as $,_ as F,r as C,o as _,c as k,ac as a,w as l,F as E,al as ee,br as te,d as r,e as w,V as h,t as c,aW as v,b as I,f as le}from"./index.076f5ad4.js";import{u as B}from"./Product.e0598bb3.js";import{V as ae,a as se,b as y}from"./VToolbar.e58a0ccd.js";import{a as O,c as R,V as oe,b as U}from"./VCard.df8076df.js";import{V as de}from"./VContainer.8c9ecc81.js";import{V as ie,a as b}from"./VRow.7aa3b76e.js";const A=j()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...L({origin:"center center",scrollStrategy:"block",transition:{component:z},zIndex:2400})},emits:{"update:modelValue":o=>!0},setup(o,d){let{slots:V}=d;const f=q(o,"modelValue"),{scopeId:s}=K(),i=M();function p(u){var t,n;const g=u.relatedTarget,m=u.target;if(g!==m&&(t=i.value)!=null&&t.contentEl&&(n=i.value)!=null&&n.globalTop&&![document,i.value.contentEl].includes(m)&&!i.value.contentEl.contains(m)){const x=[...i.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(T=>!T.hasAttribute("disabled")&&!T.matches('[tabindex="-1"]'));if(!x.length)return;const S=x[0],N=x[x.length-1];g===S?N.focus():S.focus()}}return W&&D(()=>f.value&&o.retainFocus,u=>{u?document.addEventListener("focusin",p):document.removeEventListener("focusin",p)},{immediate:!0}),D(f,async u=>{if(await Y(),u){var t;(t=i.value.contentEl)==null||t.focus({preventScroll:!0})}else{var n;(n=i.value.activatorEl)==null||n.focus({preventScroll:!0})}}),G(()=>{const[u]=H(o);return e(Q,P({ref:i,class:["v-dialog",{"v-dialog--fullscreen":o.fullscreen,"v-dialog--scrollable":o.scrollable}]},u,{modelValue:f.value,"onUpdate:modelValue":t=>f.value=t,"aria-role":"dialog","aria-modal":"true",activatorProps:P({"aria-haspopup":"dialog","aria-expanded":String(f.value)},o.activatorProps)},s),{activator:V.activator,default:function(){for(var t,n=arguments.length,g=new Array(n),m=0;m<n;m++)g[m]=arguments[m];return e(J,{root:!0},{default:()=>[(t=V.default)==null?void 0:t.call(V,...g)]})}})}),X({},i)}}),ne={data(){return{dialog:!1,dialogDelete:!1,itemsPerPage:5,headers:[{title:"Id",key:"id"},{title:"Title",key:"title"},{title:"Price ",key:"price"},{title:"Rating",key:"rating"},{title:"Brand",key:"brand"},{title:"Category",key:"category"},{title:"Actions",key:"actions",sortable:!1}],editedIndex:-1,editedItem:{id:0,title:"",price:0,rating:0,brand:0,category:""},defaultItem:{id:0,title:"",price:0,rating:0,brand:0,category:""}}},computed:{...Z(B,["ProductsStore"]),formTitle(){return this.editedIndex===-1?"New Item":"Edit Item"}},watch:{dialog(o){o||this.close()},dialogDelete(o){o||this.closeDelete()}},methods:{...$(B,["RemoveProduct","returnindexProductEdit"]),editItem(o){this.editedIndex=this.ProductsStore.indexOf(o),this.editedItem=Object.assign({},o),this.dialog=!0},deleteItem(o){this.editedIndex=this.ProductsStore.indexOf(o),this.editedItem=Object.assign({},o),this.dialogDelete=!0},deleteItemConfirm(){this.ProductsStore.splice(this.editedIndex,1),this.closeDelete()},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){this.editedIndex>-1?Object.assign(this.ProductsStore[this.editedIndex],this.editedItem):(this.ProductsStore.push(this.editedItem),console.log(this.ProductsStore)),this.close()}}},re={class:"ma-16 d-none"},ue=a("thead",null,[a("tr",{class:"bg-sucsess"},[a("th",{class:"text-center py-2"},"Id"),a("th",{class:"text-left py-2"},"Title"),a("th",{class:"text-left py-2"},"Price"),a("th",{class:"text-left py-2"},"Percentage"),a("th",{class:"text-left py-2"},"Rating"),a("th",{class:"text-left py-2"},"Stock"),a("th",{class:"text-left py-2"},"Brand"),a("th",{class:"text-left py-2"},"Category"),a("th",{class:"text-left py-2"},"EDIT"),a("th",{class:"text-left py-2"},"DELETE")])],-1),ce={class:"ma-16"},me={class:"text-h5"};function fe(o,d,V,f,s,i){const p=C("router-link"),u=C("v-data-table");return _(),k(E,null,[a("section",re,[e(te,{class:"bg-success","items-per-page":s.itemsPerPage,"onUpdate:items-per-page":d[0]||(d[0]=t=>s.itemsPerPage=t)},{default:l(()=>[ue,a("tbody",null,[(_(!0),k(E,null,ee(this.ProductsStore,(t,n)=>(_(),k("tr",{class:"bg-info",key:t.id},[a("td",null,c(t.id),1),a("td",null,c(t.title),1),a("td",null,c(t.price),1),a("td",null,c(t.discountPercentage),1),a("td",null,c(t.rating),1),a("td",null,c(t.stock),1),a("td",null,c(t.brand),1),a("td",null,c(t.category),1),a("td",null,[e(p,{to:"/EditProduct"},{default:l(()=>[e(I,{class:"ma-2",onClick:g=>o.returnindexProductEdit(n)},{default:l(()=>[r("mdi-circle-edit-outline")]),_:2},1032,["onClick"])]),_:2},1024)]),a("td",null,[e(I,{class:"ma-2",onClick:g=>o.RemoveProduct(n)},{default:l(()=>[r("mdi-delete")]),_:2},1032,["onClick"])]),e(w)]))),128))])]),_:1},8,["items-per-page"])]),a("section",ce,[e(u,{"items-per-page":s.itemsPerPage,headers:s.headers,items:o.ProductsStore,"sort-by":[{key:"id",order:"asc"}],class:"elevation-1"},{top:l(()=>[e(ae,{flat:""},{default:l(()=>[e(se,null,{default:l(()=>[r("My CRUD")]),_:1}),e(w,{class:"mx-4",inset:"",vertical:""}),e(y),e(A,{modelValue:s.dialog,"onUpdate:modelValue":d[7]||(d[7]=t=>s.dialog=t),"max-width":"500px"},{activator:l(({props:t})=>[e(h,P({color:"primary",dark:"",class:"mb-2"},t),{default:l(()=>[r(" New Item ")]),_:2},1040)]),default:l(()=>[e(O,null,{default:l(()=>[e(R,null,{default:l(()=>[a("span",me,c(i.formTitle),1)]),_:1}),e(oe,null,{default:l(()=>[e(de,null,{default:l(()=>[e(ie,null,{default:l(()=>[e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.id,"onUpdate:modelValue":d[1]||(d[1]=t=>s.editedItem.id=t),label:"Id"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.title,"onUpdate:modelValue":d[2]||(d[2]=t=>s.editedItem.title=t),label:"Title"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.rating,"onUpdate:modelValue":d[3]||(d[3]=t=>s.editedItem.rating=t),label:"Rating"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.price,"onUpdate:modelValue":d[4]||(d[4]=t=>s.editedItem.price=t),label:"Price"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.brand,"onUpdate:modelValue":d[5]||(d[5]=t=>s.editedItem.brand=t),label:"Brand"},null,8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"6",md:"4"},{default:l(()=>[e(v,{modelValue:s.editedItem.category,"onUpdate:modelValue":d[6]||(d[6]=t=>s.editedItem.category=t),label:"Category"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U,null,{default:l(()=>[e(y),e(h,{color:"blue-darken-1",variant:"text",onClick:i.close},{default:l(()=>[r(" Cancel ")]),_:1},8,["onClick"]),e(h,{color:"blue-darken-1",variant:"text",onClick:i.save},{default:l(()=>[r(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(A,{modelValue:s.dialogDelete,"onUpdate:modelValue":d[8]||(d[8]=t=>s.dialogDelete=t),"max-width":"500px"},{default:l(()=>[e(O,null,{default:l(()=>[e(R,{class:"text-h5"},{default:l(()=>[r("Are you sure you want to delete this item?")]),_:1}),e(U,null,{default:l(()=>[e(y),e(h,{color:"blue-darken-1",variant:"text",onClick:i.closeDelete},{default:l(()=>[r("Cancel")]),_:1},8,["onClick"]),e(h,{color:"blue-darken-1",variant:"text",onClick:i.deleteItemConfirm},{default:l(()=>[r("OK")]),_:1},8,["onClick"]),e(y)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":l(({item:t})=>[e(I,{size:"small",class:"me-2",onClick:n=>i.editItem(t.raw)},{default:l(()=>[r(" mdi-pencil ")]),_:2},1032,["onClick"]),e(I,{size:"small",onClick:n=>i.deleteItem(t.raw)},{default:l(()=>[r(" mdi-delete ")]),_:2},1032,["onClick"])]),_:1},8,["items-per-page","headers","items"])])],64)}const ge=F(ne,[["render",fe]]),pe={components:{DataTable:ge}};function ve(o,d,V,f,s,i){const p=C("data-table");return _(),le(p)}const _e=F(pe,[["render",ve]]);export{_e as default};
>>>>>>> 4d99bffa34cb7f88857f5409a332576c7a1b4711:dist/assets/ProductListView.5609aa69.js
