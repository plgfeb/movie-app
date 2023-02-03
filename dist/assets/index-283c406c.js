(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ya(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function xa(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?rl(r):xa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(ce(e))return e}}const el=/;(?![^(]*\))/g,tl=/:([^]+)/,nl=/\/\*.*?\*\//gs;function rl(e){const t={};return e.replace(nl,"").split(el).forEach(n=>{if(n){const r=n.split(tl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function _a(e){let t="";if(he(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=_a(e[n]);r&&(t+=r+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",il=ya(al);function _o(e){return!!e||e===""}const re={},Dt=[],$e=()=>{},ol=()=>!1,sl=/^on[^a-z]/,hr=e=>sl.test(e),wa=e=>e.startsWith("onUpdate:"),ye=Object.assign,Ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ll=Object.prototype.hasOwnProperty,q=(e,t)=>ll.call(e,t),B=Array.isArray,cn=e=>pr(e)==="[object Map]",cl=e=>pr(e)==="[object Set]",H=e=>typeof e=="function",he=e=>typeof e=="string",ka=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",wo=e=>ce(e)&&H(e.then)&&H(e.catch),fl=Object.prototype.toString,pr=e=>fl.call(e),ul=e=>pr(e).slice(8,-1),dl=e=>pr(e)==="[object Object]",Aa=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ml=/-(\w)/g,qe=gr(e=>e.replace(ml,(t,n)=>n?n.toUpperCase():"")),hl=/\B([A-Z])/g,Qt=gr(e=>e.replace(hl,"-$1").toLowerCase()),vr=gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ir=gr(e=>e?`on${vr(e)}`:""),bn=(e,t)=>!Object.is(e,t),Rr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ar=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Eo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ai;const pl=()=>ai||(ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ue;class gl{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function vl(e,t=Ue){t&&t.active&&t.effects.push(e)}const Oa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ko=e=>(e.w&dt)>0,Ao=e=>(e.n&dt)>0,bl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dt},yl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ko(a)&&!Ao(a)?a.delete(e):t[n++]=a,a.w&=~dt,a.n&=~dt}t.length=n}},Yr=new WeakMap;let on=0,dt=1;const Kr=30;let Te;const At=Symbol(""),qr=Symbol("");class Pa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=ft;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ft=!0,dt=1<<++on,on<=Kr?bl(this):ii(this),this.fn()}finally{on<=Kr&&yl(this),dt=1<<--on,Te=this.parent,ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ii(this),this.onStop&&this.onStop(),this.active=!1)}}function ii(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ft=!0;const Oo=[];function Jt(){Oo.push(ft),ft=!1}function Zt(){const e=Oo.pop();ft=e===void 0?!0:e}function Oe(e,t,n){if(ft&&Te){let r=Yr.get(e);r||Yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Oa()),Po(a)}}function Po(e,t){let n=!1;on<=Kr?Ao(e)||(e.n|=dt,n=!ko(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Je(e,t,n,r,a,i){const o=Yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e)){const l=Eo(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?Aa(n)&&s.push(o.get("length")):(s.push(o.get(At)),cn(e)&&s.push(o.get(qr)));break;case"delete":B(e)||(s.push(o.get(At)),cn(e)&&s.push(o.get(qr)));break;case"set":cn(e)&&s.push(o.get(At));break}if(s.length===1)s[0]&&Vr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Vr(Oa(l))}}function Vr(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&oi(r);for(const r of n)r.computed||oi(r)}function oi(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xl=ya("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ka)),_l=Ca(),wl=Ca(!1,!0),El=Ca(!0),si=kl();function kl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jt();const r=V(this)[t].apply(this,n);return Zt(),r}}),e}function Ca(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Dl:No:t?To:Ro).get(r))return r;const o=B(r);if(!e&&o&&q(si,a))return Reflect.get(si,a,i);const s=Reflect.get(r,a,i);return(ka(a)?Co.has(a):xl(a))||(e||Oe(r,"get",a),t)?s:ge(s)?o&&Aa(a)?s:s.value:ce(s)?e?Mo(s):Rn(s):s}}const Al=So(),Ol=So(!0);function So(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!ir(a)&&!Yt(a)&&(o=V(o),a=V(a)),!B(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=B(n)&&Aa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?bn(a,o)&&Je(n,"set",r,a):Je(n,"add",r,a)),l}}function Pl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Je(e,"delete",t,void 0),r}function Cl(e,t){const n=Reflect.has(e,t);return(!ka(t)||!Co.has(t))&&Oe(e,"has",t),n}function Sl(e){return Oe(e,"iterate",B(e)?"length":At),Reflect.ownKeys(e)}const Io={get:_l,set:Al,deleteProperty:Pl,has:Cl,ownKeys:Sl},Il={get:El,set(e,t){return!0},deleteProperty(e,t){return!0}},Rl=ye({},Io,{get:wl,set:Ol}),Sa=e=>e,br=e=>Reflect.getPrototypeOf(e);function $n(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Oe(a,"get",t),Oe(a,"get",i));const{has:o}=br(a),s=r?Sa:n?Ta:yn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function jn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Oe(r,"has",e),Oe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function zn(e,t=!1){return e=e.__v_raw,!t&&Oe(V(e),"iterate",At),Reflect.get(e,"size",e)}function li(e){e=V(e);const t=V(this);return br(t).has.call(t,e)||(t.add(e),Je(t,"add",e,e)),this}function ci(e,t){t=V(t);const n=V(this),{has:r,get:a}=br(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?bn(t,o)&&Je(n,"set",e,t):Je(n,"add",e,t),this}function fi(e){const t=V(this),{has:n,get:r}=br(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Je(t,"delete",e,void 0),i}function ui(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Je(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Sa:e?Ta:yn;return!e&&Oe(s,"iterate",At),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Hn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=cn(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Sa:t?Ta:yn;return!t&&Oe(i,"iterate",l?qr:At),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:s?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function Tl(){const e={get(i){return $n(this,i)},get size(){return zn(this)},has:jn,add:li,set:ci,delete:fi,clear:ui,forEach:Dn(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return zn(this)},has:jn,add:li,set:ci,delete:fi,clear:ui,forEach:Dn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Dn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return jn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),t[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[e,n,t,r]}const[Nl,Ml,Ll,Fl]=Tl();function Ia(e,t){const n=t?e?Fl:Ll:e?Ml:Nl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const $l={get:Ia(!1,!1)},jl={get:Ia(!1,!0)},zl={get:Ia(!0,!1)},Ro=new WeakMap,To=new WeakMap,No=new WeakMap,Dl=new WeakMap;function Hl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bl(e){return e.__v_skip||!Object.isExtensible(e)?0:Hl(ul(e))}function Rn(e){return Yt(e)?e:Ra(e,!1,Io,$l,Ro)}function Ul(e){return Ra(e,!1,Rl,jl,To)}function Mo(e){return Ra(e,!0,Il,zl,No)}function Ra(e,t,n,r,a){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Bl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ht(e){return Yt(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function Lo(e){return Ht(e)||Yt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Fo(e){return ar(e,"__v_skip",!0),e}const yn=e=>ce(e)?Rn(e):e,Ta=e=>ce(e)?Mo(e):e;function $o(e){ft&&Te&&(e=V(e),Po(e.dep||(e.dep=Oa())))}function jo(e,t){e=V(e),e.dep&&Vr(e.dep)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Wl(e){return zo(e,!1)}function Yl(e){return zo(e,!0)}function zo(e,t){return ge(e)?e:new Kl(e,t)}class Kl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:yn(t)}get value(){return $o(this),this._value}set value(t){const n=this.__v_isShallow||ir(t)||Yt(t);t=n?t:V(t),bn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yn(t),jo(this))}}function Bt(e){return ge(e)?e.value:e}const ql={get:(e,t,n)=>Bt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Do(e){return Ht(e)?e:new Proxy(e,ql)}var Ho;class Vl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ho]=!1,this._dirty=!0,this.effect=new Pa(t,()=>{this._dirty||(this._dirty=!0,jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return $o(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ho="__v_isReadonly";function Xl(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=$e):(r=e.get,a=e.set),new Vl(r,a,i||!a,n)}function ut(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){yr(i,t,n)}return a}function je(e,t,n,r){if(H(e)){const i=ut(e,t,n,r);return i&&wo(i)&&i.catch(o=>{yr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(je(e[i],t,n,r));return a}function yr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ut(l,null,10,[e,o,s]);return}}Gl(e,n,a,r)}function Gl(e,t,n,r=!0){console.error(e)}let xn=!1,Xr=!1;const pe=[];let Ye=0;const Ut=[];let Xe=null,_t=0;const Bo=Promise.resolve();let Na=null;function Uo(e){const t=Na||Bo;return e?t.then(this?e.bind(this):e):t}function Ql(e){let t=Ye+1,n=pe.length;for(;t<n;){const r=t+n>>>1;_n(pe[r])<e?t=r+1:n=r}return t}function Ma(e){(!pe.length||!pe.includes(e,xn&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?pe.push(e):pe.splice(Ql(e.id),0,e),Wo())}function Wo(){!xn&&!Xr&&(Xr=!0,Na=Bo.then(Ko))}function Jl(e){const t=pe.indexOf(e);t>Ye&&pe.splice(t,1)}function Zl(e){B(e)?Ut.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?_t+1:_t))&&Ut.push(e),Wo()}function di(e,t=xn?Ye+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function Yo(e){if(Ut.length){const t=[...new Set(Ut)];if(Ut.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>_n(n)-_n(r)),_t=0;_t<Xe.length;_t++)Xe[_t]();Xe=null,_t=0}}const _n=e=>e.id==null?1/0:e.id,ec=(e,t)=>{const n=_n(e)-_n(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ko(e){Xr=!1,xn=!0,pe.sort(ec);const t=$e;try{for(Ye=0;Ye<pe.length;Ye++){const n=pe[Ye];n&&n.active!==!1&&ut(n,null,14)}}finally{Ye=0,pe.length=0,Yo(),xn=!1,Na=null,(pe.length||Ut.length)&&Ko()}}function tc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[c]||re;h&&(a=n.map(g=>he(g)?g.trim():g)),d&&(a=n.map(Eo))}let s,l=r[s=Ir(t)]||r[s=Ir(qe(t))];!l&&i&&(l=r[s=Ir(Qt(t))]),l&&je(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,je(f,e,6,a)}}function qo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const c=qo(f,t,!0);c&&(s=!0,ye(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ce(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):ye(o,i),ce(e)&&r.set(e,o),o)}function xr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Qt(t))||q(e,t))}let Me=null,Vo=null;function or(e){const t=Me;return Me=e,Vo=e&&e.type.__scopeId||null,t}function sn(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&_i(-1);const i=or(t);let o;try{o=e(...a)}finally{or(i),r._d&&_i(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Tr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:h,setupState:g,ctx:A,inheritAttrs:S}=e;let L,b;const _=or(e);try{if(n.shapeFlag&4){const z=a||r;L=We(c.call(z,z,d,i,g,h,A)),b=l}else{const z=t;L=We(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),b=t.props?l:nc(l)}}catch(z){dn.length=0,yr(z,e,1),L=le(wn)}let O=L;if(b&&S!==!1){const z=Object.keys(b),{shapeFlag:W}=O;z.length&&W&7&&(o&&z.some(wa)&&(b=rc(b,o)),O=Kt(O,b))}return n.dirs&&(O=Kt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),L=O,or(_),L}const nc=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},rc=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ac(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(o[h]!==r[h]&&!xr(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?mi(r,o,f):!0:!!o;return!1}function mi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function ic({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const oc=e=>e.__isSuspense;function sc(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Zl(e)}function Zn(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function Qe(e,t,n=!1){const r=me||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const Bn={};function fn(e,t,n){return Xo(e,t,n)}function Xo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=me;let l,f=!1,c=!1;if(ge(e)?(l=()=>e.value,f=ir(e)):Ht(e)?(l=()=>e,r=!0):B(e)?(c=!0,f=e.some(O=>Ht(O)||ir(O)),l=()=>e.map(O=>{if(ge(O))return O.value;if(Ht(O))return $t(O);if(H(O))return ut(O,s,2)})):H(e)?t?l=()=>ut(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),je(e,s,3,[h])}:l=$e,t&&r){const O=l;l=()=>$t(O())}let d,h=O=>{d=b.onStop=()=>{ut(O,s,4)}},g;if(kn)if(h=$e,t?n&&je(t,s,3,[l(),c?[]:void 0,h]):l(),a==="sync"){const O=nf();g=O.__watcherHandles||(O.__watcherHandles=[])}else return $e;let A=c?new Array(e.length).fill(Bn):Bn;const S=()=>{if(b.active)if(t){const O=b.run();(r||f||(c?O.some((z,W)=>bn(z,A[W])):bn(O,A)))&&(d&&d(),je(t,s,3,[O,A===Bn?void 0:c&&A[0]===Bn?[]:A,h]),A=O)}else b.run()};S.allowRecurse=!!t;let L;a==="sync"?L=S:a==="post"?L=()=>we(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),L=()=>Ma(S));const b=new Pa(l,L);t?n?S():A=b.run():a==="post"?we(b.run.bind(b),s&&s.suspense):b.run();const _=()=>{b.stop(),s&&s.scope&&Ea(s.scope.effects,b)};return g&&g.push(_),_}function lc(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?Go(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=me;qt(this);const s=Xo(a,i.bind(r),n);return o?qt(o):Ot(),s}function Go(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function $t(e,t){if(!ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))$t(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)$t(e[n],t);else if(cl(e)||cn(e))e.forEach(n=>{$t(n,t)});else if(dl(e))for(const n in e)$t(e[n],t);return e}function Tn(e){return H(e)?{setup:e,name:e.name}:e}const er=e=>!!e.type.__asyncLoader,Qo=e=>e.type.__isKeepAlive;function cc(e,t){Jo(e,"a",t)}function fc(e,t){Jo(e,"da",t)}function Jo(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(_r(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Qo(a.parent.vnode)&&uc(r,t,n,a),a=a.parent}}function uc(e,t,n,r){const a=_r(t,e,r,!0);Zo(()=>{Ea(r[t],a)},n)}function _r(e,t,n=me,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Jt(),qt(n);const s=je(t,n,e,o);return Ot(),Zt(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=me)=>(!kn||e==="sp")&&_r(e,(...r)=>t(...r),n),dc=nt("bm"),mc=nt("m"),hc=nt("bu"),pc=nt("u"),gc=nt("bum"),Zo=nt("um"),vc=nt("sp"),bc=nt("rtg"),yc=nt("rtc");function xc(e,t=me){_r("ec",e,t)}function bt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Jt(),je(l,n,8,[e.el,s,e,t]),Zt())}}const es="components";function Nr(e,t){return wc(es,e,!0,t)||e}const _c=Symbol();function wc(e,t,n=!0,r=!1){const a=Me||me;if(a){const i=a.type;if(e===es){const s=Zc(i,!1);if(s&&(s===t||s===qe(t)||s===vr(qe(t))))return i}const o=hi(a[e]||i[e],t)||hi(a.appContext[e],t);return!o&&r?i:o}}function hi(e,t){return e&&(e[t]||e[qe(t)]||e[vr(qe(t))])}const Gr=e=>e?fs(e)?ja(e)||e.proxy:Gr(e.parent):null,un=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Gr(e.parent),$root:e=>Gr(e.root),$emit:e=>e.emit,$options:e=>La(e),$forceUpdate:e=>e.f||(e.f=()=>Ma(e.update)),$nextTick:e=>e.n||(e.n=Uo.bind(e.proxy)),$watch:e=>lc.bind(e)}),Mr=(e,t)=>e!==re&&!e.__isScriptSetup&&q(e,t),Ec={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Mr(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];Qr&&(o[t]=0)}}const c=un[t];let d,h;if(c)return t==="$attrs"&&Oe(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&q(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Mr(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||Mr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(un,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Qr=!0;function kc(e){const t=La(e),n=e.proxy,r=e.ctx;Qr=!1,t.beforeCreate&&pi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:h,beforeUpdate:g,updated:A,activated:S,deactivated:L,beforeDestroy:b,beforeUnmount:_,destroyed:O,unmounted:z,render:W,renderTracked:ne,renderTriggered:oe,errorCaptured:Ee,serverPrefetch:ve,expose:Ce,inheritAttrs:at,components:De,directives:Tt,filters:gt}=t;if(f&&Ac(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];H(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);ce(J)&&(e.data=Rn(J))}if(Qr=!0,i)for(const J in i){const G=i[J],Se=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):$e,vt=!H(G)&&H(G.set)?G.set.bind(n):$e,Ie=ie({get:Se,set:vt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:xe=>Ie.value=xe})}if(s)for(const J in s)ts(s[J],r,n,J);if(l){const J=H(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Zn(G,J[G])})}c&&pi(c,e,"c");function fe(J,G){B(G)?G.forEach(Se=>J(Se.bind(n))):G&&J(G.bind(n))}if(fe(dc,d),fe(mc,h),fe(hc,g),fe(pc,A),fe(cc,S),fe(fc,L),fe(xc,Ee),fe(yc,ne),fe(bc,oe),fe(gc,_),fe(Zo,z),fe(vc,ve),B(Ce))if(Ce.length){const J=e.exposed||(e.exposed={});Ce.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Se=>n[G]=Se})})}else e.exposed||(e.exposed={});W&&e.render===$e&&(e.render=W),at!=null&&(e.inheritAttrs=at),De&&(e.components=De),Tt&&(e.directives=Tt)}function Ac(e,t,n=$e,r=!1){B(e)&&(e=Jr(e));for(const a in e){const i=e[a];let o;ce(i)?"default"in i?o=Qe(i.from||a,i.default,!0):o=Qe(i.from||a):o=Qe(i),ge(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function pi(e,t,n){je(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ts(e,t,n,r){const a=r.includes(".")?Go(n,r):()=>n[r];if(he(e)){const i=t[e];H(i)&&fn(a,i)}else if(H(e))fn(a,e.bind(n));else if(ce(e))if(B(e))e.forEach(i=>ts(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&fn(a,i,e)}}function La(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>sr(l,f,o,!0)),sr(l,t,o)),ce(t)&&i.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&sr(e,i,n,!0),a&&a.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Oc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Oc={data:gi,props:xt,emits:xt,methods:xt,computed:xt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:xt,directives:xt,watch:Cc,provide:gi,inject:Pc};function gi(e,t){return t?e?function(){return ye(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Pc(e,t){return xt(Jr(e),Jr(t))}function Jr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function xt(e,t){return e?ye(ye(Object.create(null),e),t):t}function Cc(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Sc(e,t,n,r=!1){const a={},i={};ar(i,Er,1),e.propsDefaults=Object.create(null),ns(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ul(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ic(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(xr(e.emitsOptions,h))continue;const g=t[h];if(l)if(q(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const A=qe(h);a[A]=Zr(l,s,A,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{ns(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!q(t,d)&&((c=Qt(d))===d||!q(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Zr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d))&&(delete i[d],f=!0)}f&&Je(e,"set","$attrs")}function ns(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Jn(l))continue;const f=t[l];let c;a&&q(a,c=qe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:xr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||re;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Zr(a,l,d,f[d],e,!q(f,d))}}return o}function Zr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(qt(a),r=f[n]=l.call(null,t),Ot())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function rs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const c=d=>{l=!0;const[h,g]=rs(d,t,!0);ye(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ce(e)&&r.set(e,Dt),Dt;if(B(i))for(let c=0;c<i.length;c++){const d=qe(i[c]);vi(d)&&(o[d]=re)}else if(i)for(const c in i){const d=qe(c);if(vi(d)){const h=i[c],g=o[d]=B(h)||H(h)?{type:h}:Object.assign({},h);if(g){const A=xi(Boolean,g.type),S=xi(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||q(g,"default"))&&s.push(d)}}}const f=[o,s];return ce(e)&&r.set(e,f),f}function vi(e){return e[0]!=="$"}function bi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function yi(e,t){return bi(e)===bi(t)}function xi(e,t){return B(t)?t.findIndex(n=>yi(n,e)):H(t)&&yi(t,e)?0:-1}const as=e=>e[0]==="_"||e==="$stable",Fa=e=>B(e)?e.map(We):[We(e)],Rc=(e,t,n)=>{if(t._n)return t;const r=sn((...a)=>Fa(t(...a)),n);return r._c=!1,r},is=(e,t,n)=>{const r=e._ctx;for(const a in e){if(as(a))continue;const i=e[a];if(H(i))t[a]=Rc(a,i,r);else if(i!=null){const o=Fa(i);t[a]=()=>o}}},os=(e,t)=>{const n=Fa(t);e.slots.default=()=>n},Tc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),ar(t,"_",n)):is(t,e.slots={})}else e.slots={},t&&os(e,t);ar(e.slots,Er,1)},Nc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,is(t,a)),o=t}else t&&(os(e,t),o={default:1});if(i)for(const s in a)!as(s)&&!(s in o)&&delete a[s]};function ss(){return{app:null,config:{isNativeTag:ol,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mc=0;function Lc(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!ce(a)&&(a=null);const i=ss(),o=new Set;let s=!1;const l=i.app={_uid:Mc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:rf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...c)):H(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const h=le(r,a);return h.appContext=i,c&&t?t(h,f):e(h,f,d),s=!0,l._container=f,f.__vue_app__=l,ja(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function ea(e,t,n,r,a=!1){if(B(e)){e.forEach((h,g)=>ea(h,t&&(B(t)?t[g]:t),n,r,a));return}if(er(r)&&!a)return;const i=r.shapeFlag&4?ja(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,q(d,f)&&(d[f]=null)):ge(f)&&(f.value=null)),H(l))ut(l,s,12,[o,c]);else{const h=he(l),g=ge(l);if(h||g){const A=()=>{if(e.f){const S=h?q(d,l)?d[l]:c[l]:l.value;a?B(S)&&Ea(S,i):B(S)?S.includes(i)||S.push(i):h?(c[l]=[i],q(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=sc;function Fc(e){return $c(e)}function $c(e,t){const n=pl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:h,setScopeId:g=$e,insertStaticContent:A}=e,S=(u,m,p,v=null,x=null,k=null,I=!1,E=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!rn(u,m)&&(v=C(u),xe(u,x,k,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:w,ref:$,shapeFlag:N}=m;switch(w){case wr:L(u,m,p,v);break;case wn:b(u,m,p,v);break;case Lr:u==null&&_(m,p,v,I);break;case Ge:De(u,m,p,v,x,k,I,E,P);break;default:N&1?W(u,m,p,v,x,k,I,E,P):N&6?Tt(u,m,p,v,x,k,I,E,P):(N&64||N&128)&&w.process(u,m,p,v,x,k,I,E,P,K)}$!=null&&x&&ea($,u&&u.ref,k,m||u,!m)},L=(u,m,p,v)=>{if(u==null)r(m.el=s(m.children),p,v);else{const x=m.el=u.el;m.children!==u.children&&f(x,m.children)}},b=(u,m,p,v)=>{u==null?r(m.el=l(m.children||""),p,v):m.el=u.el},_=(u,m,p,v)=>{[u.el,u.anchor]=A(u.children,m,p,v,u.el,u.anchor)},O=({el:u,anchor:m},p,v)=>{let x;for(;u&&u!==m;)x=h(u),r(u,p,v),u=x;r(m,p,v)},z=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},W=(u,m,p,v,x,k,I,E,P)=>{I=I||m.type==="svg",u==null?ne(m,p,v,x,k,I,E,P):ve(u,m,x,k,I,E,P)},ne=(u,m,p,v,x,k,I,E)=>{let P,w;const{type:$,props:N,shapeFlag:j,transition:D,dirs:Y}=u;if(P=u.el=o(u.type,k,N&&N.is,N),j&8?c(P,u.children):j&16&&Ee(u.children,P,null,v,x,k&&$!=="foreignObject",I,E),Y&&bt(u,null,v,"created"),N){for(const Q in N)Q!=="value"&&!Jn(Q)&&i(P,Q,null,N[Q],k,u.children,v,x,R);"value"in N&&i(P,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Be(w,v,u)}oe(P,u,u.scopeId,I,v),Y&&bt(u,null,v,"beforeMount");const Z=(!x||x&&!x.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(P),r(P,m,p),((w=N&&N.onVnodeMounted)||Z||Y)&&we(()=>{w&&Be(w,v,u),Z&&D.enter(P),Y&&bt(u,null,v,"mounted")},x)},oe=(u,m,p,v,x)=>{if(p&&g(u,p),v)for(let k=0;k<v.length;k++)g(u,v[k]);if(x){let k=x.subTree;if(m===k){const I=x.vnode;oe(u,I,I.scopeId,I.slotScopeIds,x.parent)}}},Ee=(u,m,p,v,x,k,I,E,P=0)=>{for(let w=P;w<u.length;w++){const $=u[w]=E?lt(u[w]):We(u[w]);S(null,$,m,p,v,x,k,I,E)}},ve=(u,m,p,v,x,k,I)=>{const E=m.el=u.el;let{patchFlag:P,dynamicChildren:w,dirs:$}=m;P|=u.patchFlag&16;const N=u.props||re,j=m.props||re;let D;p&&yt(p,!1),(D=j.onVnodeBeforeUpdate)&&Be(D,p,m,u),$&&bt(m,u,p,"beforeUpdate"),p&&yt(p,!0);const Y=x&&m.type!=="foreignObject";if(w?Ce(u.dynamicChildren,w,E,p,v,Y,k):I||G(u,m,E,null,p,v,Y,k,!1),P>0){if(P&16)at(E,m,N,j,p,v,x);else if(P&2&&N.class!==j.class&&i(E,"class",null,j.class,x),P&4&&i(E,"style",N.style,j.style,x),P&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ue=Z[Q],Re=N[ue],Mt=j[ue];(Mt!==Re||ue==="value")&&i(E,ue,Re,Mt,x,u.children,p,v,R)}}P&1&&u.children!==m.children&&c(E,m.children)}else!I&&w==null&&at(E,m,N,j,p,v,x);((D=j.onVnodeUpdated)||$)&&we(()=>{D&&Be(D,p,m,u),$&&bt(m,u,p,"updated")},v)},Ce=(u,m,p,v,x,k,I)=>{for(let E=0;E<m.length;E++){const P=u[E],w=m[E],$=P.el&&(P.type===Ge||!rn(P,w)||P.shapeFlag&70)?d(P.el):p;S(P,w,$,null,v,x,k,I,!0)}},at=(u,m,p,v,x,k,I)=>{if(p!==v){if(p!==re)for(const E in p)!Jn(E)&&!(E in v)&&i(u,E,p[E],null,I,m.children,x,k,R);for(const E in v){if(Jn(E))continue;const P=v[E],w=p[E];P!==w&&E!=="value"&&i(u,E,w,P,I,m.children,x,k,R)}"value"in v&&i(u,"value",p.value,v.value)}},De=(u,m,p,v,x,k,I,E,P)=>{const w=m.el=u?u.el:s(""),$=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:j,slotScopeIds:D}=m;D&&(E=E?E.concat(D):D),u==null?(r(w,p,v),r($,p,v),Ee(m.children,p,$,x,k,I,E,P)):N>0&&N&64&&j&&u.dynamicChildren?(Ce(u.dynamicChildren,j,p,x,k,I,E),(m.key!=null||x&&m===x.subTree)&&ls(u,m,!0)):G(u,m,p,$,x,k,I,E,P)},Tt=(u,m,p,v,x,k,I,E,P)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?x.ctx.activate(m,p,v,I,P):gt(m,p,v,x,k,I,P):tn(u,m,P)},gt=(u,m,p,v,x,k,I)=>{const E=u.component=Vc(u,v,x);if(Qo(u)&&(E.ctx.renderer=K),Xc(E),E.asyncDep){if(x&&x.registerDep(E,fe),!u.el){const P=E.subTree=le(wn);b(null,P,m,p)}return}fe(E,u,m,p,x,k,I)},tn=(u,m,p)=>{const v=m.component=u.component;if(ac(u,m,p))if(v.asyncDep&&!v.asyncResolved){J(v,m,p);return}else v.next=m,Jl(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,p,v,x,k,I)=>{const E=()=>{if(u.isMounted){let{next:$,bu:N,u:j,parent:D,vnode:Y}=u,Z=$,Q;yt(u,!1),$?($.el=Y.el,J(u,$,I)):$=Y,N&&Rr(N),(Q=$.props&&$.props.onVnodeBeforeUpdate)&&Be(Q,D,$,Y),yt(u,!0);const ue=Tr(u),Re=u.subTree;u.subTree=ue,S(Re,ue,d(Re.el),C(Re),u,x,k),$.el=ue.el,Z===null&&ic(u,ue.el),j&&we(j,x),(Q=$.props&&$.props.onVnodeUpdated)&&we(()=>Be(Q,D,$,Y),x)}else{let $;const{el:N,props:j}=m,{bm:D,m:Y,parent:Z}=u,Q=er(m);if(yt(u,!1),D&&Rr(D),!Q&&($=j&&j.onVnodeBeforeMount)&&Be($,Z,m),yt(u,!0),N&&U){const ue=()=>{u.subTree=Tr(u),U(N,u.subTree,u,x,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Tr(u);S(null,ue,p,v,u,x,k),m.el=ue.el}if(Y&&we(Y,x),!Q&&($=j&&j.onVnodeMounted)){const ue=m;we(()=>Be($,Z,ue),x)}(m.shapeFlag&256||Z&&er(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&we(u.a,x),u.isMounted=!0,m=p=v=null}},P=u.effect=new Pa(E,()=>Ma(w),u.scope),w=u.update=()=>P.run();w.id=u.uid,yt(u,!0),w()},J=(u,m,p)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,Ic(u,m.props,v,p),Nc(u,m.children,p),Jt(),di(),Zt()},G=(u,m,p,v,x,k,I,E,P=!1)=>{const w=u&&u.children,$=u?u.shapeFlag:0,N=m.children,{patchFlag:j,shapeFlag:D}=m;if(j>0){if(j&128){vt(w,N,p,v,x,k,I,E,P);return}else if(j&256){Se(w,N,p,v,x,k,I,E,P);return}}D&8?($&16&&R(w,x,k),N!==w&&c(p,N)):$&16?D&16?vt(w,N,p,v,x,k,I,E,P):R(w,x,k,!0):($&8&&c(p,""),D&16&&Ee(N,p,v,x,k,I,E,P))},Se=(u,m,p,v,x,k,I,E,P)=>{u=u||Dt,m=m||Dt;const w=u.length,$=m.length,N=Math.min(w,$);let j;for(j=0;j<N;j++){const D=m[j]=P?lt(m[j]):We(m[j]);S(u[j],D,p,null,x,k,I,E,P)}w>$?R(u,x,k,!0,!1,N):Ee(m,p,v,x,k,I,E,P,N)},vt=(u,m,p,v,x,k,I,E,P)=>{let w=0;const $=m.length;let N=u.length-1,j=$-1;for(;w<=N&&w<=j;){const D=u[w],Y=m[w]=P?lt(m[w]):We(m[w]);if(rn(D,Y))S(D,Y,p,null,x,k,I,E,P);else break;w++}for(;w<=N&&w<=j;){const D=u[N],Y=m[j]=P?lt(m[j]):We(m[j]);if(rn(D,Y))S(D,Y,p,null,x,k,I,E,P);else break;N--,j--}if(w>N){if(w<=j){const D=j+1,Y=D<$?m[D].el:v;for(;w<=j;)S(null,m[w]=P?lt(m[w]):We(m[w]),p,Y,x,k,I,E,P),w++}}else if(w>j)for(;w<=N;)xe(u[w],x,k,!0),w++;else{const D=w,Y=w,Z=new Map;for(w=Y;w<=j;w++){const ke=m[w]=P?lt(m[w]):We(m[w]);ke.key!=null&&Z.set(ke.key,w)}let Q,ue=0;const Re=j-Y+1;let Mt=!1,ti=0;const nn=new Array(Re);for(w=0;w<Re;w++)nn[w]=0;for(w=D;w<=N;w++){const ke=u[w];if(ue>=Re){xe(ke,x,k,!0);continue}let He;if(ke.key!=null)He=Z.get(ke.key);else for(Q=Y;Q<=j;Q++)if(nn[Q-Y]===0&&rn(ke,m[Q])){He=Q;break}He===void 0?xe(ke,x,k,!0):(nn[He-Y]=w+1,He>=ti?ti=He:Mt=!0,S(ke,m[He],p,null,x,k,I,E,P),ue++)}const ni=Mt?jc(nn):Dt;for(Q=ni.length-1,w=Re-1;w>=0;w--){const ke=Y+w,He=m[ke],ri=ke+1<$?m[ke+1].el:v;nn[w]===0?S(null,He,p,ri,x,k,I,E,P):Mt&&(Q<0||w!==ni[Q]?Ie(He,p,ri,2):Q--)}}},Ie=(u,m,p,v,x=null)=>{const{el:k,type:I,transition:E,children:P,shapeFlag:w}=u;if(w&6){Ie(u.component.subTree,m,p,v);return}if(w&128){u.suspense.move(m,p,v);return}if(w&64){I.move(u,m,p,K);return}if(I===Ge){r(k,m,p);for(let N=0;N<P.length;N++)Ie(P[N],m,p,v);r(u.anchor,m,p);return}if(I===Lr){O(u,m,p);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(k),r(k,m,p),we(()=>E.enter(k),x);else{const{leave:N,delayLeave:j,afterLeave:D}=E,Y=()=>r(k,m,p),Z=()=>{N(k,()=>{Y(),D&&D()})};j?j(k,Y,Z):Z()}else r(k,m,p)},xe=(u,m,p,v=!1,x=!1)=>{const{type:k,props:I,ref:E,children:P,dynamicChildren:w,shapeFlag:$,patchFlag:N,dirs:j}=u;if(E!=null&&ea(E,null,p,u,!0),$&256){m.ctx.deactivate(u);return}const D=$&1&&j,Y=!er(u);let Z;if(Y&&(Z=I&&I.onVnodeBeforeUnmount)&&Be(Z,m,u),$&6)y(u.component,p,v);else{if($&128){u.suspense.unmount(p,v);return}D&&bt(u,null,m,"beforeUnmount"),$&64?u.type.remove(u,m,p,x,K,v):w&&(k!==Ge||N>0&&N&64)?R(w,m,p,!1,!0):(k===Ge&&N&384||!x&&$&16)&&R(P,m,p),v&&Nt(u)}(Y&&(Z=I&&I.onVnodeUnmounted)||D)&&we(()=>{Z&&Be(Z,m,u),D&&bt(u,null,m,"unmounted")},p)},Nt=u=>{const{type:m,el:p,anchor:v,transition:x}=u;if(m===Ge){Fn(p,v);return}if(m===Lr){z(u);return}const k=()=>{a(p),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:I,delayLeave:E}=x,P=()=>I(p,k);E?E(u.el,k,P):P()}else k()},Fn=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},y=(u,m,p)=>{const{bum:v,scope:x,update:k,subTree:I,um:E}=u;v&&Rr(v),x.stop(),k&&(k.active=!1,xe(I,u,m,p)),E&&we(E,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},R=(u,m,p,v=!1,x=!1,k=0)=>{for(let I=k;I<u.length;I++)xe(u[I],m,p,v,x)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),F=(u,m,p)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,p),di(),Yo(),m._vnode=u},K={p:S,um:xe,m:Ie,r:Nt,mt:gt,mc:Ee,pc:G,pbc:Ce,n:C,o:e};let ae,U;return t&&([ae,U]=t(K)),{render:F,hydrate:ae,createApp:Lc(F,ae)}}function yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ls(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=lt(a[i]),s.el=o.el),n||ls(o,s)),s.type===wr&&(s.el=o.el)}}function jc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const zc=e=>e.__isTeleport,Ge=Symbol(void 0),wr=Symbol(void 0),wn=Symbol(void 0),Lr=Symbol(void 0),dn=[];let Le=null;function St(e=!1){dn.push(Le=e?null:[])}function Dc(){dn.pop(),Le=dn[dn.length-1]||null}let En=1;function _i(e){En+=e}function Hc(e){return e.dynamicChildren=En>0?Le||Dt:null,Dc(),En>0&&Le&&Le.push(e),e}function It(e,t,n,r,a,i){return Hc(Ae(e,t,n,r,a,i,!0))}function ta(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Er="__vInternal",cs=({key:e})=>e??null,tr=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||ge(e)||H(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function Ae(e,t=null,n=null,r=0,a=null,i=e===Ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cs(t),ref:t&&tr(t),scopeId:Vo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?($a(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),En>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const le=Bc;function Bc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===_c)&&(e=wn),ta(e)){const s=Kt(e,t,!0);return n&&$a(s,n),En>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(ef(e)&&(e=e.__vccOpts),t){t=Uc(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=_a(s)),ce(l)&&(Lo(l)&&!B(l)&&(l=ye({},l)),t.style=xa(l))}const o=he(e)?1:oc(e)?128:zc(e)?64:ce(e)?4:H(e)?2:0;return Ae(e,t,n,r,a,o,i,!0)}function Uc(e){return e?Lo(e)||Er in e?ye({},e):e:null}function Kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Yc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&cs(s),ref:t&&t.ref?n&&a?B(a)?a.concat(tr(t)):[a,tr(t)]:tr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Wc(e=" ",t=0){return le(wr,null,e,t)}function We(e){return e==null||typeof e=="boolean"?le(wn):B(e)?le(Ge,null,e.slice()):typeof e=="object"?lt(e):le(wr,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function $a(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),$a(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Er in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Wc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=_a([t.class,r.class]));else if(a==="style")t.style=xa([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){je(e,t,7,[n,r])}const Kc=ss();let qc=0;function Vc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Kc,i={uid:qc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rs(r,a),emitsOptions:qo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=tc.bind(null,i),e.ce&&e.ce(i),i}let me=null;const qt=e=>{me=e,e.scope.on()},Ot=()=>{me&&me.scope.off(),me=null};function fs(e){return e.vnode.shapeFlag&4}let kn=!1;function Xc(e,t=!1){kn=t;const{props:n,children:r}=e.vnode,a=fs(e);Sc(e,n,a,t),Tc(e,r);const i=a?Gc(e,t):void 0;return kn=!1,i}function Gc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Fo(new Proxy(e.ctx,Ec));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Jc(e):null;qt(e),Jt();const i=ut(r,e,0,[e.props,a]);if(Zt(),Ot(),wo(i)){if(i.then(Ot,Ot),t)return i.then(o=>{wi(e,o,t)}).catch(o=>{yr(o,e,0)});e.asyncDep=i}else wi(e,i,t)}else us(e,t)}function wi(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=Do(t)),us(e,n)}let Ei;function us(e,t,n){const r=e.type;if(!e.render){if(!t&&Ei&&!r.render){const a=r.template||La(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=Ei(a,f)}}e.render=r.render||$e}qt(e),Jt(),kc(e),Zt(),Ot()}function Qc(e){return new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}})}function Jc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Qc(e))},slots:e.slots,emit:e.emit,expose:t}}function ja(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Do(Fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)},has(t,n){return n in t||n in un}}))}function Zc(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function ef(e){return H(e)&&"__vccOpts"in e}const ie=(e,t)=>Xl(e,t,kn);function kr(e,t,n){const r=arguments.length;return r===2?ce(t)&&!B(t)?ta(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ta(n)&&(n=[n]),le(e,t,n))}const tf=Symbol(""),nf=()=>Qe(tf),rf="3.2.45",af="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,ki=wt&&wt.createElement("template"),of={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?wt.createElementNS(af,e):wt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ki.innerHTML=r?`<svg>${e}</svg>`:e;const s=ki.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function sf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function lf(e,t,n){const r=e.style,a=he(n);if(n&&!a){for(const i in n)na(r,i,n[i]);if(t&&!he(t))for(const i in t)n[i]==null&&na(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ai=/\s*!important$/;function na(e,t,n){if(B(n))n.forEach(r=>na(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=cf(e,t);Ai.test(n)?e.setProperty(Qt(r),n.replace(Ai,""),"important"):e[r]=n}}const Oi=["Webkit","Moz","ms"],Fr={};function cf(e,t){const n=Fr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return Fr[t]=r;r=vr(r);for(let a=0;a<Oi.length;a++){const i=Oi[a]+r;if(i in e)return Fr[t]=i}return t}const Pi="http://www.w3.org/1999/xlink";function ff(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Pi,t.slice(6,t.length)):e.setAttributeNS(Pi,t,n);else{const i=il(t);n==null||i&&!_o(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function uf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=_o(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function df(e,t,n,r){e.addEventListener(t,n,r)}function mf(e,t,n,r){e.removeEventListener(t,n,r)}function hf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=pf(t);if(r){const f=i[t]=bf(r,a);df(e,s,f,l)}else o&&(mf(e,s,o,l),i[t]=void 0)}}const Ci=/(?:Once|Passive|Capture)$/;function pf(e){let t;if(Ci.test(e)){t={};let r;for(;r=e.match(Ci);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qt(e.slice(2)),t]}let $r=0;const gf=Promise.resolve(),vf=()=>$r||(gf.then(()=>$r=0),$r=Date.now());function bf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(yf(r,n.value),t,5,[r])};return n.value=e,n.attached=vf(),n}function yf(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Si=/^on[a-z]/,xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?sf(e,r,a):t==="style"?lf(e,n,r):hr(t)?wa(t)||hf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_f(e,t,r,a))?uf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ff(e,t,r,a))};function _f(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Si.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Si.test(t)&&he(n)?!1:t in e}const wf=ye({patchProp:xf},of);let Ii;function Ef(){return Ii||(Ii=Fc(wf))}const kf=(...e)=>{const t=Ef().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Af(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Af(e){return he(e)?document.querySelector(e):e}const Rt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Of={},Pf={class:"px-4 py-2 flex justify-between"},Cf={class:""},Sf={href:"",class:"rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"},If={class:""};function Rf(e,t){const n=Nr("font-awesome-icon"),r=Nr("router-link"),a=Nr("router-view");return St(),It("div",null,[Ae("nav",Pf,[Ae("div",Cf,[le(r,{to:"/",class:"fagioli rounded-lg px-3 py-2 text-lime-700 font-medium hover:bg-lime-100 hover:text-limes-900"},{default:sn(()=>[le(n,{icon:"fa-brands fa-react"})]),_:1}),le(r,{to:"/home",class:"rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"},{default:sn(()=>[le(n,{icon:"fa-solid fa-house"})]),_:1}),Ae("a",Sf,[le(n,{icon:"fa-solid fa-magnifying-glass"})]),le(r,{to:"/preferiti",class:"rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"},{default:sn(()=>[le(n,{icon:"fa-solid fa-star"})]),_:1})]),Ae("div",If,[le(r,{to:"/account",class:"rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"},{default:sn(()=>[le(n,{icon:"fa-solid fa-user"})]),_:1})])]),Ae("div",null,[le(a)])])}const Tf=Rt(Of,[["render",Rf]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ft=typeof window<"u";function Nf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function jr(e,t){const n={};for(const r in t){const a=t[r];n[r]=ze(a)?a.map(e):e(a)}return n}const mn=()=>{},ze=Array.isArray,Mf=/\/$/,Lf=e=>e.replace(Mf,"");function zr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=zf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Ff(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function $f(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Vt(t.matched[r],n.matched[a])&&ds(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ds(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jf(e[n],t[n]))return!1;return!0}function jf(e,t){return ze(e)?Ti(e,t):ze(t)?Ti(t,e):e===t}function Ti(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function zf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var An;(function(e){e.pop="pop",e.push="push"})(An||(An={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function Df(e){if(!e)if(Ft){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lf(e)}const Hf=/^[^#]+#/;function Bf(e,t){return e.replace(Hf,"#")+t}function Uf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Uf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ni(e,t){return(history.state?history.state.position-t:-1)+e}const ra=new Map;function Yf(e,t){ra.set(e,t)}function Kf(e){const t=ra.get(e);return ra.delete(e),t}let qf=()=>location.protocol+"//"+location.host;function ms(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ri(l,"")}return Ri(n,e)+r+a}function Vf(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=ms(e,location),A=n.value,S=t.value;let L=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}L=S?h.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:L,type:An.pop,direction:L?L>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const g=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:Ar()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Mi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Ar():null}}function Xf(e){const{history:t,location:n}=window,r={value:ms(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:qf()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=X({},t.state,Mi(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Ar()});i(c.current,c,!0);const d=X({},Mi(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Gf(e){e=Df(e);const t=Xf(e),n=Vf(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:Bf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Qf(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Gf(e)}function Jf(e){return typeof e=="string"||e&&typeof e=="object"}function hs(e){return typeof e=="string"||typeof e=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ps=Symbol("");var Li;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Li||(Li={}));function Xt(e,t){return X(new Error,{type:e,[ps]:!0},t)}function Ve(e,t){return e instanceof Error&&ps in e&&(t==null||!!(e.type&t))}const Fi="[^/]+?",Zf={sensitive:!1,strict:!1,start:!0,end:!0},eu=/[.+*?^${}()[\]/\\]/g;function tu(e,t){const n=X({},Zf,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const h=f[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(eu,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:S,optional:L,regexp:b}=h;i.push({name:A,repeatable:S,optional:L});const _=b||Fi;if(_!==Fi){g+=10;try{new RegExp(`(${_})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+z.message)}}let O=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(O=L&&f.length<2?`(?:/${O})`:"/"+O),L&&(O+="?"),a+=O,g+=20,L&&(g+=-8),S&&(g+=-20),_===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=i[h-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:L}=g,b=A in f?f[A]:"";if(ze(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=ze(b)?b.join("/"):b;if(!_)if(L)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function nu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function ru(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=nu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if($i(r))return 1;if($i(a))return-1}return a.length-r.length}function $i(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const au={type:0,value:""},iu=/[a-zA-Z0-9_]/;function ou(e){if(!e)return[[]];if(e==="/")return[[au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:iu.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function su(e,t,n){const r=tu(ou(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function lu(e,t){const n=[],r=new Map;t=Di({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,h){const g=!h,A=cu(c);A.aliasOf=h&&h.record;const S=Di(t,c),L=[A];if("alias"in c){const O=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of O)L.push(X({},A,{components:h?h.record.components:A.components,path:z,aliasOf:h?h.record:A}))}let b,_;for(const O of L){const{path:z}=O;if(d&&z[0]!=="/"){const W=d.record.path,ne=W[W.length-1]==="/"?"":"/";O.path=d.record.path+(z&&ne+z)}if(b=su(O,d,S),h?h.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&c.name&&!zi(b)&&o(c.name)),A.children){const W=A.children;for(let ne=0;ne<W.length;ne++)i(W[ne],b,h&&h.children[ne])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return _?()=>{o(_)}:mn}function o(c){if(hs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&ru(c,n[d])>=0&&(c.record.path!==n[d].record.path||!gs(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!zi(c)&&r.set(c.record.name,c)}function f(c,d){let h,g={},A,S;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Xt(1,{location:c});S=h.record.name,g=X(ji(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),c.params&&ji(c.params,h.keys.map(_=>_.name))),A=h.stringify(g)}else if("path"in c)A=c.path,h=n.find(_=>_.re.test(A)),h&&(g=h.parse(A),S=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw Xt(1,{location:c,currentLocation:d});S=h.record.name,g=X({},d.params,c.params),A=h.stringify(g)}const L=[];let b=h;for(;b;)L.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:L,meta:uu(L)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function ji(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function cu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function fu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function zi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function uu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Di(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function gs(e,t){return t.children.some(n=>n===e||gs(e,n))}const vs=/#/g,du=/&/g,mu=/\//g,hu=/=/g,pu=/\?/g,bs=/\+/g,gu=/%5B/g,vu=/%5D/g,ys=/%5E/g,bu=/%60/g,xs=/%7B/g,yu=/%7C/g,_s=/%7D/g,xu=/%20/g;function za(e){return encodeURI(""+e).replace(yu,"|").replace(gu,"[").replace(vu,"]")}function _u(e){return za(e).replace(xs,"{").replace(_s,"}").replace(ys,"^")}function aa(e){return za(e).replace(bs,"%2B").replace(xu,"+").replace(vs,"%23").replace(du,"%26").replace(bu,"`").replace(xs,"{").replace(_s,"}").replace(ys,"^")}function wu(e){return aa(e).replace(hu,"%3D")}function Eu(e){return za(e).replace(vs,"%23").replace(pu,"%3F")}function ku(e){return e==null?"":Eu(e).replace(mu,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Au(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(bs," "),o=i.indexOf("="),s=lr(o<0?i:i.slice(0,o)),l=o<0?null:lr(i.slice(o+1));if(s in t){let f=t[s];ze(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Hi(e){let t="";for(let n in e){const r=e[n];if(n=wu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&aa(i)):[r&&aa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ou(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Pu=Symbol(""),Bi=Symbol(""),Da=Symbol(""),ws=Symbol(""),ia=Symbol("");function an(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ct(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Xt(4,{from:n,to:t})):d instanceof Error?s(d):Jf(d)?s(Xt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Dr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Cu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ct(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Nf(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&ct(h,n,r,i,o)()}))}}return a}function Cu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ui(e){const t=Qe(Da),n=Qe(ws),r=ie(()=>t.resolve(Bt(e.to))),a=ie(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Vt.bind(null,c));if(h>-1)return h;const g=Wi(l[f-2]);return f>1&&Wi(c)===g&&d[d.length-1].path!==g?d.findIndex(Vt.bind(null,l[f-2])):h}),i=ie(()=>a.value>-1&&Tu(n.params,r.value.params)),o=ie(()=>a.value>-1&&a.value===n.matched.length-1&&ds(n.params,r.value.params));function s(l={}){return Ru(l)?t[Bt(e.replace)?"replace":"push"](Bt(e.to)).catch(mn):Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Su=Tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ui,setup(e,{slots:t}){const n=Rn(Ui(e)),{options:r}=Qe(Da),a=ie(()=>({[Yi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:kr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Iu=Su;function Ru(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!ze(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Wi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Yi=(e,t,n)=>e??t??n,Nu=Tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Qe(ia),a=ie(()=>e.route||r.value),i=Qe(Bi,0),o=ie(()=>{let f=Bt(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=ie(()=>a.value.matched[o.value]);Zn(Bi,ie(()=>o.value+1)),Zn(Pu,s),Zn(ia,a);const l=Wl();return fn(()=>[l.value,s.value,e.name],([f,c,d],[h,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Vt(c,g)||!h)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,h=d&&d.components[c];if(!h)return Ki(n.default,{Component:h,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,L=kr(h,X({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Ki(n.default,{Component:L,route:f})||L}}});function Ki(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Mu=Nu;function Lu(e){const t=lu(e.routes,e),n=e.parseQuery||Au,r=e.stringifyQuery||Hi,a=e.history,i=an(),o=an(),s=an(),l=Yl(ot);let f=ot;Ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=jr.bind(null,y=>""+y),d=jr.bind(null,ku),h=jr.bind(null,lr);function g(y,R){let C,F;return hs(y)?(C=t.getRecordMatcher(y),F=R):F=y,t.addRoute(F,C)}function A(y){const R=t.getRecordMatcher(y);R&&t.removeRoute(R)}function S(){return t.getRoutes().map(y=>y.record)}function L(y){return!!t.getRecordMatcher(y)}function b(y,R){if(R=X({},R||l.value),typeof y=="string"){const u=zr(n,y,R.path),m=t.resolve({path:u.path},R),p=a.createHref(u.fullPath);return X(u,m,{params:h(m.params),hash:lr(u.hash),redirectedFrom:void 0,href:p})}let C;if("path"in y)C=X({},y,{path:zr(n,y.path,R.path).path});else{const u=X({},y.params);for(const m in u)u[m]==null&&delete u[m];C=X({},y,{params:d(y.params)}),R.params=d(R.params)}const F=t.resolve(C,R),K=y.hash||"";F.params=c(h(F.params));const ae=Ff(r,X({},y,{hash:_u(K),path:F.path})),U=a.createHref(ae);return X({fullPath:ae,hash:K,query:r===Hi?Ou(y.query):y.query||{}},F,{redirectedFrom:void 0,href:U})}function _(y){return typeof y=="string"?zr(n,y,l.value.path):X({},y)}function O(y,R){if(f!==y)return Xt(8,{from:R,to:y})}function z(y){return oe(y)}function W(y){return z(X(_(y),{replace:!0}))}function ne(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:C}=R;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),X({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function oe(y,R){const C=f=b(y),F=l.value,K=y.state,ae=y.force,U=y.replace===!0,u=ne(C);if(u)return oe(X(_(u),{state:typeof u=="object"?X({},K,u.state):K,force:ae,replace:U}),R||C);const m=C;m.redirectedFrom=R;let p;return!ae&&$f(r,F,C)&&(p=Xt(16,{to:m,from:F}),vt(F,F,!0,!1)),(p?Promise.resolve(p):ve(m,F)).catch(v=>Ve(v)?Ve(v,2)?v:Se(v):J(v,m,F)).then(v=>{if(v){if(Ve(v,2))return oe(X({replace:U},_(v.to),{state:typeof v.to=="object"?X({},K,v.to.state):K,force:ae}),R||m)}else v=at(m,F,!0,U,K);return Ce(m,F,v),v})}function Ee(y,R){const C=O(y,R);return C?Promise.reject(C):Promise.resolve()}function ve(y,R){let C;const[F,K,ae]=Fu(y,R);C=Dr(F.reverse(),"beforeRouteLeave",y,R);for(const u of F)u.leaveGuards.forEach(m=>{C.push(ct(m,y,R))});const U=Ee.bind(null,y,R);return C.push(U),Lt(C).then(()=>{C=[];for(const u of i.list())C.push(ct(u,y,R));return C.push(U),Lt(C)}).then(()=>{C=Dr(K,"beforeRouteUpdate",y,R);for(const u of K)u.updateGuards.forEach(m=>{C.push(ct(m,y,R))});return C.push(U),Lt(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!R.matched.includes(u))if(ze(u.beforeEnter))for(const m of u.beforeEnter)C.push(ct(m,y,R));else C.push(ct(u.beforeEnter,y,R));return C.push(U),Lt(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Dr(ae,"beforeRouteEnter",y,R),C.push(U),Lt(C))).then(()=>{C=[];for(const u of o.list())C.push(ct(u,y,R));return C.push(U),Lt(C)}).catch(u=>Ve(u,8)?u:Promise.reject(u))}function Ce(y,R,C){for(const F of s.list())F(y,R,C)}function at(y,R,C,F,K){const ae=O(y,R);if(ae)return ae;const U=R===ot,u=Ft?history.state:{};C&&(F||U?a.replace(y.fullPath,X({scroll:U&&u&&u.scroll},K)):a.push(y.fullPath,K)),l.value=y,vt(y,R,C,U),Se()}let De;function Tt(){De||(De=a.listen((y,R,C)=>{if(!Fn.listening)return;const F=b(y),K=ne(F);if(K){oe(X(K,{replace:!0}),F).catch(mn);return}f=F;const ae=l.value;Ft&&Yf(Ni(ae.fullPath,C.delta),Ar()),ve(F,ae).catch(U=>Ve(U,12)?U:Ve(U,2)?(oe(U.to,F).then(u=>{Ve(u,20)&&!C.delta&&C.type===An.pop&&a.go(-1,!1)}).catch(mn),Promise.reject()):(C.delta&&a.go(-C.delta,!1),J(U,F,ae))).then(U=>{U=U||at(F,ae,!1),U&&(C.delta&&!Ve(U,8)?a.go(-C.delta,!1):C.type===An.pop&&Ve(U,20)&&a.go(-1,!1)),Ce(F,ae,U)}).catch(mn)}))}let gt=an(),tn=an(),fe;function J(y,R,C){Se(y);const F=tn.list();return F.length?F.forEach(K=>K(y,R,C)):console.error(y),Promise.reject(y)}function G(){return fe&&l.value!==ot?Promise.resolve():new Promise((y,R)=>{gt.add([y,R])})}function Se(y){return fe||(fe=!y,Tt(),gt.list().forEach(([R,C])=>y?C(y):R()),gt.reset()),y}function vt(y,R,C,F){const{scrollBehavior:K}=e;if(!Ft||!K)return Promise.resolve();const ae=!C&&Kf(Ni(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return Uo().then(()=>K(y,R,ae)).then(U=>U&&Wf(U)).catch(U=>J(U,y,R))}const Ie=y=>a.go(y);let xe;const Nt=new Set,Fn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:L,getRoutes:S,resolve:b,options:e,push:z,replace:W,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:tn.add,isReady:G,install(y){const R=this;y.component("RouterLink",Iu),y.component("RouterView",Mu),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Bt(l)}),Ft&&!xe&&l.value===ot&&(xe=!0,z(a.location).catch(K=>{}));const C={};for(const K in ot)C[K]=ie(()=>l.value[K]);y.provide(Da,R),y.provide(ws,Rn(C)),y.provide(ia,l);const F=y.unmount;Nt.add(y),y.unmount=function(){Nt.delete(y),Nt.size<1&&(f=ot,De&&De(),De=null,l.value=ot,xe=!1,fe=!1),F()}}};return Fn}function Lt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Fu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Vt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Vt(f,l))||a.push(l))}return[n,r,a]}const $u={},ju=Ae("h1",null,"MEAS",-1),zu=[ju];function Du(e,t){return St(),It("div",null,zu)}const Hu=Rt($u,[["render",Du]]),Bu={},Uu={class:"preferiti"},Wu=Ae("h1",null,"I tuoi film e le tue serie preferite:",-1),Yu=[Wu];function Ku(e,t){return St(),It("div",Uu,Yu)}const qu=Rt(Bu,[["render",Ku]]),Vu={},Xu={class:"account"},Gu=Ae("h1",null,"Gestisci il tuo account",-1),Qu=[Gu];function Ju(e,t){return St(),It("div",Xu,Qu)}const Zu=Rt(Vu,[["render",Ju]]),ed={},td={class:"film"},nd=Ae("h1",null,"Goditi i film che ami",-1),rd=[nd];function ad(e,t){return St(),It("div",td,rd)}const id=Rt(ed,[["render",ad]]),od={},sd={class:"serie"},ld=Ae("h1",null,"Immergiti nelle tue serie TV preferite",-1),cd=[ld];function fd(e,t){return St(),It("div",sd,cd)}const ud=Rt(od,[["render",fd]]),dd={},md={class:"classe iniziale"},hd=Ae("h1",null,"I TITOLI CHE AMI",-1),pd=[hd];function gd(e,t){return St(),It("div",md,pd)}const vd=Rt(dd,[["render",gd]]),bd=[{path:"/",name:"PaginaIniziale",component:vd},{path:"/home",name:"Home",component:Hu},{path:"/preferiti",name:"Preferiti",component:qu},{path:"/account",name:"Account",component:Zu},{path:"/film",name:"Film",component:id},{path:"/serie",name:"Serie",component:ud}],yd=Lu({history:Qf(),routes:bd});function qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qi(Object(n),!0).forEach(function(r){de(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cr(e){return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cr(e)}function xd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _d(e,t,n){return t&&Vi(e.prototype,t),n&&Vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ha(e,t){return Ed(e)||Ad(e,t)||Es(e,t)||Pd()}function Nn(e){return wd(e)||kd(e)||Es(e)||Od()}function wd(e){if(Array.isArray(e))return oa(e)}function Ed(e){if(Array.isArray(e))return e}function kd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ad(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Es(e,t){if(e){if(typeof e=="string")return oa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oa(e,t)}}function oa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Od(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xi=function(){},Ba={},ks={},As=null,Os={mark:Xi,measure:Xi};try{typeof window<"u"&&(Ba=window),typeof document<"u"&&(ks=document),typeof MutationObserver<"u"&&(As=MutationObserver),typeof performance<"u"&&(Os=performance)}catch{}var Cd=Ba.navigator||{},Gi=Cd.userAgent,Qi=Gi===void 0?"":Gi,mt=Ba,te=ks,Ji=As,Un=Os;mt.document;var rt=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Ps=~Qi.indexOf("MSIE")||~Qi.indexOf("Trident/"),Wn,Yn,Kn,qn,Vn,Ze="___FONT_AWESOME___",sa=16,Cs="fa",Ss="svg-inline--fa",Pt="data-fa-i2svg",la="data-fa-pseudo-element",Sd="data-fa-pseudo-element-pending",Ua="data-prefix",Wa="data-icon",Zi="fontawesome-i2svg",Id="async",Rd=["HTML","HEAD","STYLE","SCRIPT"],Is=function(){try{return!0}catch{return!1}}(),ee="classic",se="sharp",Ya=[ee,se];function Mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var On=Mn((Wn={},de(Wn,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),de(Wn,se,{fa:"solid",fass:"solid","fa-solid":"solid"}),Wn)),Pn=Mn((Yn={},de(Yn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),de(Yn,se,{solid:"fass"}),Yn)),Cn=Mn((Kn={},de(Kn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),de(Kn,se,{fass:"fa-solid"}),Kn)),Td=Mn((qn={},de(qn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),de(qn,se,{"fa-solid":"fass"}),qn)),Nd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Rs="fa-layers-text",Md=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ld=Mn((Vn={},de(Vn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),de(Vn,se,{900:"fass"}),Vn)),Ts=[1,2,3,4,5,6,7,8,9,10],Fd=Ts.concat([11,12,13,14,15,16,17,18,19,20]),$d=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=new Set;Object.keys(Pn[ee]).map(Sn.add.bind(Sn));Object.keys(Pn[se]).map(Sn.add.bind(Sn));var jd=[].concat(Ya,Nn(Sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY]).concat(Ts.map(function(e){return"".concat(e,"x")})).concat(Fd.map(function(e){return"w-".concat(e)})),pn=mt.FontAwesomeConfig||{};function zd(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Dd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var Hd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hd.forEach(function(e){var t=Ha(e,2),n=t[0],r=t[1],a=Dd(zd(n));a!=null&&(pn[r]=a)})}var Ns={styleDefault:"solid",familyDefault:"classic",cssPrefix:Cs,replacementClass:Ss,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pn.familyPrefix&&(pn.cssPrefix=pn.familyPrefix);var Gt=T(T({},Ns),pn);Gt.autoReplaceSvg||(Gt.observeMutations=!1);var M={};Object.keys(Ns).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Gt[e]=n,gn.forEach(function(r){return r(M)})},get:function(){return Gt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Gt.cssPrefix=t,gn.forEach(function(n){return n(M)})},get:function(){return Gt.cssPrefix}});mt.FontAwesomeConfig=M;var gn=[];function Bd(e){return gn.push(e),function(){gn.splice(gn.indexOf(e),1)}}var st=sa,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ud(e){if(!(!e||!rt)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var Wd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function In(){for(var e=12,t="";e-- >0;)t+=Wd[Math.random()*62|0];return t}function en(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ka(e){return e.classList?en(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ms(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ms(e[n]),'" ')},"").trim()}function Or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function qa(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function Kd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function qd(e){var t=e.transform,n=e.width,r=n===void 0?sa:n,a=e.height,i=a===void 0?sa:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ps?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Vd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ls(){var e=Cs,t=Ss,n=M.cssPrefix,r=M.replacementClass,a=Vd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var eo=!1;function Hr(){M.autoAddCss&&!eo&&(Ud(Ls()),eo=!0)}var Xd={mixout:function(){return{dom:{css:Ls,insertCss:Hr}}},hooks:function(){return{beforeDOMElementCreation:function(){Hr()},beforeI2svg:function(){Hr()}}}},et=mt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Fe=et[Ze],Fs=[],Gd=function e(){te.removeEventListener("DOMContentLoaded",e),fr=1,Fs.map(function(t){return t()})},fr=!1;rt&&(fr=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),fr||te.addEventListener("DOMContentLoaded",Gd));function Qd(e){rt&&(fr?setTimeout(e,0):Fs.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ms(e):"<".concat(t," ").concat(Yd(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function to(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Br=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Jd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Zd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ca(e){var t=Zd(e);return t.length===1?t[0].toString(16):null}function em(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function no(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function fa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=no(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,no(t)):Fe.styles[e]=T(T({},Fe.styles[e]||{}),i),e==="fas"&&fa("fa",t)}var Xn,Gn,Qn,jt=Fe.styles,tm=Fe.shims,nm=(Xn={},de(Xn,ee,Object.values(Cn[ee])),de(Xn,se,Object.values(Cn[se])),Xn),Va=null,$s={},js={},zs={},Ds={},Hs={},rm=(Gn={},de(Gn,ee,Object.keys(On[ee])),de(Gn,se,Object.keys(On[se])),Gn);function am(e){return~jd.indexOf(e)}function im(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!am(a)?a:null}var Bs=function(){var t=function(i){return Br(jt,function(o,s,l){return o[l]=Br(s,i,{}),o},{})};$s=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),js=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Hs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in jt||M.autoFetchSvg,r=Br(tm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});zs=r.names,Ds=r.unicodes,Va=Pr(M.styleDefault,{family:M.familyDefault})};Bd(function(e){Va=Pr(e.styleDefault,{family:M.familyDefault})});Bs();function Xa(e,t){return($s[e]||{})[t]}function om(e,t){return(js[e]||{})[t]}function kt(e,t){return(Hs[e]||{})[t]}function Us(e){return zs[e]||{prefix:null,iconName:null}}function sm(e){var t=Ds[e],n=Xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return Va}var Ga=function(){return{prefix:null,iconName:null,rest:[]}};function Pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=On[r][e],i=Pn[r][e]||Pn[r][a],o=e in Fe.styles?e:null;return i||o||null}var ro=(Qn={},de(Qn,ee,Object.keys(Cn[ee])),de(Qn,se,Object.keys(Cn[se])),Qn);function Cr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},de(t,ee,"".concat(M.cssPrefix,"-").concat(ee)),de(t,se,"".concat(M.cssPrefix,"-").concat(se)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(f){return ro[ee].includes(f)}))&&(s=ee),(e.includes(i[se])||e.some(function(f){return ro[se].includes(f)}))&&(s=se);var l=e.reduce(function(f,c){var d=im(M.cssPrefix,c);if(jt[c]?(c=nm[s].includes(c)?Td[s][c]:c,o=c,f.prefix=c):rm[s].indexOf(c)>-1?(o=c,f.prefix=Pr(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[ee]&&c!==i[se]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?Us(f.iconName):{},g=kt(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!jt.far&&jt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},Ga());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===se&&(jt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=kt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ht()||"fas"),l}var lm=function(){function e(){xd(this,e),this.definitions={}}return _d(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),fa(s,o[s]);var l=Cn[ee][s];l&&fa(l,o[s]),Bs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),ao=[],zt={},Wt={},cm=Object.keys(Wt);function fm(e,t){var n=t.mixoutsTo;return ao=e,zt={},Object.keys(Wt).forEach(function(r){cm.indexOf(r)===-1&&delete Wt[r]}),ao.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),cr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){zt[o]||(zt[o]=[]),zt[o].push(i[o])})}r.provides&&r.provides(Wt)}),n}function ua(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=zt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=zt[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Wt[e]?Wt[e].apply(null,t):void 0}function da(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ht();if(t)return t=kt(n,t)||t,to(Ws.definitions,n,t)||to(Fe.styles,n,t)}var Ws=new lm,um=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Ct("noAuto")},dm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Ct("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Qd(function(){hm({autoReplaceSvgRoot:n}),Ct("watch",t)})}},mm={icon:function(t){if(t===null)return null;if(cr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Pr(t[0]);return{prefix:r,iconName:kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Nd))){var a=Cr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ht(),iconName:kt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ht();return{prefix:i,iconName:kt(i,t)||t}}}},Pe={noAuto:um,config:M,dom:dm,parse:mm,library:Ws,findIconDefinition:da,toHtml:Ln},hm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Fe.styles).length>0||M.autoFetchSvg)&&rt&&M.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function Sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function pm(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Or(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function gm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function Qa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,S=A.width,L=A.height,b=a==="fak",_=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ve){return d.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(L)})},z=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/L*16*.0625,"em")}:{};g&&(O.attributes[Pt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||In())},children:[l]}),delete O.attributes.title);var W=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},z),d.styles)}),ne=r.found&&n.found?tt("generateAbstractMask",W)||{children:[],attributes:{}}:tt("generateAbstractIcon",W)||{children:[],attributes:{}},oe=ne.children,Ee=ne.attributes;return W.children=oe,W.attributes=Ee,s?gm(W):pm(W)}function io(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Pt]="");var c=T({},o.styles);qa(a)&&(c.transform=qd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Or(c);d.length>0&&(f.style=d);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function vm(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ur=Fe.styles;function ma(e){var t=e[0],n=e[1],r=e.slice(4),a=Ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var bm={found:!1,width:512,height:512};function ym(e,t){!Is&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=ht()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=Us(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ur[t]&&Ur[t][e]){var o=Ur[t][e];return r(ma(o))}ym(e,t),r(T(T({},bm),{},{icon:M.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var oo=function(){},pa=M.measurePerformance&&Un&&Un.mark&&Un.measure?Un:{mark:oo,measure:oo},ln='FA "6.2.1"',xm=function(t){return pa.mark("".concat(ln," ").concat(t," begins")),function(){return Ys(t)}},Ys=function(t){pa.mark("".concat(ln," ").concat(t," ends")),pa.measure("".concat(ln," ").concat(t),"".concat(ln," ").concat(t," begins"),"".concat(ln," ").concat(t," ends"))},Ja={begin:xm,end:Ys},nr=function(){};function so(e){var t=e.getAttribute?e.getAttribute(Pt):null;return typeof t=="string"}function _m(e){var t=e.getAttribute?e.getAttribute(Ua):null,n=e.getAttribute?e.getAttribute(Wa):null;return t&&n}function wm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Em(){if(M.autoReplaceSvg===!0)return rr.replace;var e=rr[M.autoReplaceSvg];return e||rr.replace}function km(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Am(e){return te.createElement(e)}function Ks(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?km:Am:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ks(o,{ceFn:r}))}),a}function Om(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ks(a),n)}),n.getAttribute(Pt)===null&&M.keepOriginalSource){var r=te.createComment(Om(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ka(n).indexOf(M.replacementClass))return rr.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ln(s)}).join(`
`);n.setAttribute(Pt,""),n.innerHTML=o}};function lo(e){e()}function qs(e,t){var n=typeof t=="function"?t:nr;if(e.length===0)n();else{var r=lo;M.mutateApproach===Id&&(r=mt.requestAnimationFrame||lo),r(function(){var a=Em(),i=Ja.begin("mutate");e.map(a),i(),n()})}}var Za=!1;function Vs(){Za=!0}function ga(){Za=!1}var ur=null;function co(e){if(Ji&&M.observeMutations){var t=e.treeCallback,n=t===void 0?nr:t,r=e.nodeCallback,a=r===void 0?nr:r,i=e.pseudoElementsCallback,o=i===void 0?nr:i,s=e.observeMutationsRoot,l=s===void 0?te:s;ur=new Ji(function(f){if(!Za){var c=ht();en(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!so(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&so(d.target)&&~$d.indexOf(d.attributeName))if(d.attributeName==="class"&&_m(d.target)){var h=Cr(Ka(d.target)),g=h.prefix,A=h.iconName;d.target.setAttribute(Ua,g||c),A&&d.target.setAttribute(Wa,A)}else wm(d.target)&&a(d.target)})}}),rt&&ur.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pm(){ur&&ur.disconnect()}function Cm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Sm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Cr(Ka(e));return a.prefix||(a.prefix=ht()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=om(a.prefix,e.innerText)||Xa(a.prefix,ca(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Im(e){var t=en(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||In()):(t["aria-hidden"]="true",t.focusable="false")),t}function Rm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Sm(e),r=n.iconName,a=n.prefix,i=n.rest,o=Im(e),s=ua("parseNodeAttributes",{},e),l=t.styleParser?Cm(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Tm=Fe.styles;function Xs(e){var t=M.autoReplaceSvg==="nest"?fo(e,{styleParser:!1}):fo(e);return~t.extra.classes.indexOf(Rs)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var pt=new Set;Ya.map(function(e){pt.add("fa-".concat(e))});Object.keys(On[ee]).map(pt.add.bind(pt));Object.keys(On[se]).map(pt.add.bind(pt));pt=Nn(pt);function uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(Zi,"-").concat(d))},a=function(d){return n.remove("".concat(Zi,"-").concat(d))},i=M.autoFetchSvg?pt:Ya.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Tm));i.includes("fa")||i.push("fa");var o=[".".concat(Rs,":not([").concat(Pt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=en(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ja.begin("onTree"),f=s.reduce(function(c,d){try{var h=Xs(d);h&&c.push(h)}catch(g){Is||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(h){qs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function Nm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xs(e).then(function(n){n&&qs([n],t)})}function Mm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:da(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:da(a||{})),e(r,T(T({},n),{},{mask:a}))}}var Lm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,h=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,L=S===void 0?[]:S,b=n.attributes,_=b===void 0?{}:b,O=n.styles,z=O===void 0?{}:O;if(t){var W=t.prefix,ne=t.iconName,oe=t.icon;return Sr(T({type:"icon"},t),function(){return Ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?_["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||In()):(_["aria-hidden"]="true",_.focusable="false")),Qa({icons:{main:ma(oe),mask:l?ma(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ne,transform:T(T({},Ke),a),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:_,styles:z,classes:L}})})}},Fm={mixout:function(){return{icon:Mm(Lm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=uo,n.nodeCallback=Nm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return uo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([ha(a,s),c.iconName?ha(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var L=Ha(S,2),b=L[0],_=L[1];g([n,Qa({icons:{main:b,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Or(s);l.length>0&&(a.style=l);var f;return qa(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},$m={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Sr({type:"layer"},function(){Ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Nn(i)).join(" ")},children:o}]})}}}},jm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Sr({type:"counter",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),vm({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Nn(s))}})})}}}},zm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Sr({type:"text",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),io({content:n,transform:T(T({},Ke),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Nn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ps){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,io({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Dm=new RegExp('"',"ug"),mo=[1105920,1112319];function Hm(e){var t=e.replace(Dm,""),n=em(t,0),r=n>=mo[0]&&n<=mo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ca(a?t[0]:t),isSecondary:r||a}}function ho(e,t){var n="".concat(Sd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=en(e.children),o=i.filter(function(oe){return oe.getAttribute(la)===t})[0],s=mt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Md),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?se:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pn[h][l[2].toLowerCase()]:Ld[h][f],A=Hm(d),S=A.value,L=A.isSecondary,b=l[0].startsWith("FontAwesome"),_=Xa(g,S),O=_;if(b){var z=sm(S);z.iconName&&z.prefix&&(_=z.iconName,g=z.prefix)}if(_&&!L&&(!o||o.getAttribute(Ua)!==g||o.getAttribute(Wa)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var W=Rm(),ne=W.extra;ne.attributes[la]=t,ha(_,g).then(function(oe){var Ee=Qa(T(T({},W),{},{icons:{main:oe,mask:Ga()},prefix:g,iconName:O,extra:ne,watchable:!0})),ve=te.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=Ee.map(function(Ce){return Ln(Ce)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Bm(e){return Promise.all([ho(e,"::before"),ho(e,"::after")])}function Um(e){return e.parentNode!==document.head&&!~Rd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(la)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function po(e){if(rt)return new Promise(function(t,n){var r=en(e.querySelectorAll("*")).filter(Um).map(Bm),a=Ja.begin("searchPseudoElements");Vs(),Promise.all(r).then(function(){a(),ga(),t()}).catch(function(){a(),ga(),n()})})}var Wm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=po,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;M.searchPseudoElements&&po(a)}}},go=!1,Ym={mixout:function(){return{dom:{unwatch:function(){Vs(),go=!0}}}},hooks:function(){return{bootstrap:function(){co(ua("mutationObserverCallbacks",{}))},noAuto:function(){Pm()},watch:function(n){var r=n.observeMutationsRoot;go?ga():co(ua("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Km={mixout:function(){return{parse:{transform:function(n){return vo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=vo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Wr={x:0,y:0,width:"100%",height:"100%"};function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qm(e){return e.tag==="g"?e.children:[e]}var Vm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Cr(a.split(" ").map(function(o){return o.trim()})):Ga();return i.prefix||(i.prefix=ht()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,h=o.icon,g=Kd({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:T(T({},Wr),{},{fill:"white"})},S=c.children?{children:c.children.map(bo)}:{},L={tag:"g",attributes:T({},g.inner),children:[bo(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[L]},_="mask-".concat(s||In()),O="clip-".concat(s||In()),z={tag:"mask",attributes:T(T({},Wr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:qm(h)},z]};return r.push(W,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(_,")")},Wr)}),{children:r,attributes:a}}}},Xm={provides:function(t){var n=!1;mt.matchMedia&&(n=mt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Qm=[Xd,Fm,$m,jm,zm,Wm,Ym,Km,Vm,Xm,Gm];fm(Qm,{mixoutsTo:Pe});Pe.noAuto;var Gs=Pe.config,Qs=Pe.library;Pe.dom;var dr=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Jm=Pe.icon;Pe.layer;var Zm=Pe.text;Pe.counter;function yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yo(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eh(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function th(e,t){if(e==null)return{};var n=eh(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function va(e){return nh(e)||rh(e)||ah(e)||ih()}function nh(e){if(Array.isArray(e))return ba(e)}function rh(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ah(e,t){if(e){if(typeof e=="string")return ba(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ba(e,t)}}function ba(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ih(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Js={exports:{}};(function(e){(function(t){var n=function(b,_,O){if(!f(_)||d(_)||h(_)||g(_)||l(_))return _;var z,W=0,ne=0;if(c(_))for(z=[],ne=_.length;W<ne;W++)z.push(n(b,_[W],O));else{z={};for(var oe in _)Object.prototype.hasOwnProperty.call(_,oe)&&(z[b(oe,O)]=n(b,_[oe],O))}return z},r=function(b,_){_=_||{};var O=_.separator||"_",z=_.split||/(?=[A-Z])/;return b.split(z).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var _=a(b);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(b,_){return r(b,_).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},h=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,_){var O=_&&"process"in _?_.process:_;return typeof O!="function"?b:function(z,W){return O(z,b,W)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,_){return n(S(a,_),b)},decamelizeKeys:function(b,_){return n(S(o,_),b,_)},pascalizeKeys:function(b,_){return n(S(i,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(oh)})(Js);var sh=Js.exports,lh=["class","style"];function ch(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=sh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function fh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ei(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=fh(c);break;case"style":l.style=ch(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=th(n,lh);return kr(e.tag,Ne(Ne(Ne({},t),{},{class:a.class,style:Ne(Ne({},a.style),o)},a.attrs),s),r)}var Zs=!1;try{Zs=!0}catch{}function uh(){if(!Zs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function vn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function dh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function xo(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(dr.icon)return dr.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var mh=Tn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ie(function(){return xo(t.icon)}),i=ie(function(){return vn("classes",dh(t))}),o=ie(function(){return vn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=ie(function(){return vn("mask",xo(t.mask))}),l=ie(function(){return Jm(a.value,Ne(Ne(Ne(Ne({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});fn(l,function(c){if(!c)return uh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ie(function(){return l.value?ei(l.value.abstract[0],{},r):null});return function(){return f.value}}});Tn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Gs.familyPrefix,i=ie(function(){return["".concat(a,"-layers")].concat(va(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return kr("div",{class:i.value},r.default?r.default():[])}}});Tn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Gs.familyPrefix,i=ie(function(){return vn("classes",[].concat(va(t.counter?["".concat(a,"-layers-counter")]:[]),va(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ie(function(){return vn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=ie(function(){var f=Zm(t.value.toString(),Ne(Ne({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ie(function(){return ei(s.value,{},r)});return function(){return l.value}}});var hh={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},ph={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},gh={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},vh={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},bh=vh,yh={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},xh={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]};Qs.add(gh);Qs.add(bh,yh,ph,hh,xh);kf(Tf).use(yd).component("font-awesome-icon",mh).mount("#app");
