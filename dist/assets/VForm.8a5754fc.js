import{g as b,ba as v,bb as p,n as h,u as V,a as F,b8 as R}from"./index.88a35752.js";const D=b({name:"VForm",props:{...v()},emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,u){let{slots:s,emit:i}=u;const n=p(o),r=h();function f(t){t.preventDefault(),n.reset()}function m(t){const a=t,e=n.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),i("submit",a),a.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var l;(l=r.value)==null||l.submit()}}),a.preventDefault()}return V(()=>{var t;return F("form",{ref:r,class:"v-form",novalidate:!0,onReset:f,onSubmit:m},[(t=s.default)==null?void 0:t.call(s,n)])}),R(n,r)}});export{D as V};
