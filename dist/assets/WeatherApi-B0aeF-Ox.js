import{r as fe,q as it,v as de,u as at,A as ct,K as Le,af as ut,l as lt,a6 as ft,a7 as dt,s as pt}from"./index-JX5HRqIc.js";function ne(e){return ft()?(dt(e),!0):!1}function _(e){return typeof e=="function"?e():at(e)}const re=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ht=Object.prototype.toString,mt=e=>ht.call(e)==="[object Object]",se=()=>{};function Be(e,t){function n(...r){return new Promise((s,o)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(s).catch(o)})}return n}const je=e=>e();function yt(e,t={}){let n,r,s=se;const o=c=>{clearTimeout(c),s(),s=se};return c=>{const p=_(e),f=_(t.maxWait);return n&&o(n),p<=0||f!==void 0&&f<=0?(r&&(o(r),r=null),Promise.resolve(c())):new Promise((l,u)=>{s=t.rejectOnCancel?u:l,f&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,l(c())},f)),n=setTimeout(()=>{r&&o(r),r=null,l(c())},p)})}}function wt(e=je){const t=fe(!0);function n(){t.value=!1}function r(){t.value=!0}const s=(...o)=>{t.value&&e(...o)};return{isActive:ut(t),pause:n,resume:r,eventFilter:s}}function bt(e){return e||lt()}function Wn(e,t=200,n={}){return Be(yt(t,n),e)}function Et(e,t,n={}){const{eventFilter:r=je,...s}=n;return de(e,Be(r,t),s)}function St(e,t,n={}){const{eventFilter:r,...s}=n,{eventFilter:o,pause:i,resume:c,isActive:p}=wt(r);return{stop:Et(e,t,{...s,eventFilter:o}),pause:i,resume:c,isActive:p}}function Ot(e,t=!0,n){bt()?ct(e,n):t?e():Le(e)}function Vn(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:s=!1}=n;let o=null;const i=fe(!1);function c(){o&&(clearInterval(o),o=null)}function p(){i.value=!1,c()}function f(){const l=_(t);l<=0||(i.value=!0,s&&e(),c(),o=setInterval(e,l))}if(r&&re&&f(),it(t)||typeof t=="function"){const l=de(t,()=>{i.value&&re&&f()});ne(l)}return ne(p),{isActive:i,pause:p,resume:f}}function At(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const oe=re?window:void 0;function Se(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=oe):[t,n,r,s]=e,!t)return se;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],i=()=>{o.forEach(l=>l()),o.length=0},c=(l,u,w,S)=>(l.addEventListener(u,w,S),()=>l.removeEventListener(u,w,S)),p=de(()=>[At(t),_(s)],([l,u])=>{if(i(),!l)return;const w=mt(u)?{...u}:u;o.push(...n.flatMap(S=>r.map(h=>c(l,S,h,w))))},{immediate:!0,flush:"post"}),f=()=>{p(),i()};return ne(f),f}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q="__vueuse_ssr_handlers__",gt=Rt();function Rt(){return q in M||(M[q]=M[q]||{}),M[q]}function Tt(e,t){return gt[e]||t}function Nt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const xt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Oe="vueuse-storage";function Kn(e,t,n,r={}){var s;const{flush:o="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:f=!1,shallow:l,window:u=oe,eventFilter:w,onError:S=y=>{console.error(y)},initOnMounted:h}=r,d=(l?pt:fe)(typeof t=="function"?t():t);if(!n)try{n=Tt("getDefaultStorage",()=>{var y;return(y=oe)==null?void 0:y.localStorage})()}catch(y){S(y)}if(!n)return d;const b=_(t),O=Nt(b),g=(s=r.serializer)!=null?s:xt[O],{pause:T,resume:H}=St(d,()=>rt(d.value),{flush:o,deep:i,eventFilter:w});u&&c&&Ot(()=>{Se(u,"storage",I),Se(u,Oe,ot),h&&I()}),h||I();function Ee(y,A){u&&u.dispatchEvent(new CustomEvent(Oe,{detail:{key:e,oldValue:y,newValue:A,storageArea:n}}))}function rt(y){try{const A=n.getItem(e);if(y==null)Ee(A,null),n.removeItem(e);else{const P=g.write(y);A!==P&&(n.setItem(e,P),Ee(A,P))}}catch(A){S(A)}}function st(y){const A=y?y.newValue:n.getItem(e);if(A==null)return p&&b!=null&&n.setItem(e,g.write(b)),b;if(!y&&f){const P=g.read(A);return typeof f=="function"?f(P,b):O==="object"&&!Array.isArray(P)?{...b,...P}:P}else return typeof A!="string"?A:g.read(A)}function I(y){if(!(y&&y.storageArea!==n)){if(y&&y.key==null){d.value=b;return}if(!(y&&y.key!==e)){T();try{(y==null?void 0:y.newValue)!==g.write(d.value)&&(d.value=st(y))}catch(A){S(A)}finally{y?Le(H):H()}}}}function ot(y){I(y.detail)}return d}function Ue(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ct}=Object.prototype,{getPrototypeOf:pe}=Object,W=(e=>t=>{const n=Ct.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>W(t)===e),V=e=>t=>typeof t===e,{isArray:L}=Array,j=V("undefined");function Pt(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ke=x("ArrayBuffer");function Ft(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ke(e.buffer),t}const _t=V("string"),R=V("function"),He=V("number"),K=e=>e!==null&&typeof e=="object",Dt=e=>e===!0||e===!1,z=e=>{if(W(e)!=="object")return!1;const t=pe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Lt=x("Date"),Bt=x("File"),jt=x("Blob"),Ut=x("FileList"),kt=e=>K(e)&&R(e.pipe),Ht=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=W(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},It=x("URLSearchParams"),Mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ie(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Me=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qe=e=>!j(e)&&e!==Me;function ie(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ie(t,s)||s;z(t[o])&&z(r)?t[o]=ie(t[o],r):z(r)?t[o]=ie({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&U(arguments[r],n);return t}const qt=(e,t,n,{allOwnKeys:r}={})=>(U(t,(s,o)=>{n&&R(s)?e[o]=Ue(s,n):e[o]=s},{allOwnKeys:r}),e),zt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Jt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$t=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&pe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},vt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Wt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!He(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Vt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&pe(Uint8Array)),Kt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Gt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Xt=x("HTMLFormElement"),Qt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Zt=x("RegExp"),ze=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};U(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Yt=e=>{ze(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},en=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},tn=()=>{},nn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",ge="0123456789",Je={DIGIT:ge,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+ge},rn=(e=16,t=Je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function sn(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const on=e=>{const t=new Array(10),n=(r,s)=>{if(K(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return U(r,(i,c)=>{const p=n(i,s+1);!j(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},an=x("AsyncFunction"),cn=e=>e&&(K(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:L,isArrayBuffer:ke,isBuffer:Pt,isFormData:Ht,isArrayBufferView:Ft,isString:_t,isNumber:He,isBoolean:Dt,isObject:K,isPlainObject:z,isUndefined:j,isDate:Lt,isFile:Bt,isBlob:jt,isRegExp:Zt,isFunction:R,isStream:kt,isURLSearchParams:It,isTypedArray:Vt,isFileList:Ut,forEach:U,merge:ie,extend:qt,trim:Mt,stripBOM:zt,inherits:Jt,toFlatObject:$t,kindOf:W,kindOfTest:x,endsWith:vt,toArray:Wt,forEachEntry:Kt,matchAll:Gt,isHTMLForm:Xt,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:ze,freezeMethods:Yt,toObjectSet:en,toCamelCase:Qt,noop:tn,toFiniteNumber:nn,findKey:Ie,global:Me,isContextDefined:qe,ALPHABET:Je,generateString:rn,isSpecCompliantForm:sn,toJSONObject:on,isAsyncFn:an,isThenable:cn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $e=m.prototype,ve={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ve[e]={value:e}});Object.defineProperties(m,ve);Object.defineProperty($e,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create($e);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const un=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function We(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Re(e,t,n){return e?e.concat(t).map(function(s,o){return s=We(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function ln(e){return a.isArray(e)&&!e.some(ae)}const fn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function G(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,b){return!a.isUndefined(b[d])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!p&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?p&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,d,b){let O=h;if(h&&!b&&typeof h=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&ln(h)||(a.isFileList(h)||a.endsWith(d,"[]"))&&(O=a.toArray(h)))return d=We(d),O.forEach(function(T,H){!(a.isUndefined(T)||T===null)&&t.append(i===!0?Re([d],H,o):i===null?d:d+"[]",f(T))}),!1}return ae(h)?!0:(t.append(Re(b,d,o),f(h)),!1)}const u=[],w=Object.assign(fn,{defaultVisitor:l,convertValue:f,isVisitable:ae});function S(h,d){if(!a.isUndefined(h)){if(u.indexOf(h)!==-1)throw Error("Circular reference detected in "+d.join("."));u.push(h),a.forEach(h,function(O,g){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(g)?g.trim():g,d,w))===!0&&S(O,d?d.concat(g):[g])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function Te(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&G(e,this,t)}const Ve=he.prototype;Ve.append=function(t,n){this._pairs.push([t,n])};Ve.toString=function(t){const n=t?function(r){return t.call(this,r,Te)}:Te;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function dn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ke(e,t,n){if(!t)return e;const r=n&&n.encode||dn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ne{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ge={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pn=typeof URLSearchParams<"u"?URLSearchParams:he,hn=typeof FormData<"u"?FormData:null,mn=typeof Blob<"u"?Blob:null,yn={isBrowser:!0,classes:{URLSearchParams:pn,FormData:hn,Blob:mn},protocols:["http","https","file","blob","url","data"]},Xe=typeof window<"u"&&typeof document<"u",wn=(e=>Xe&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),bn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",En=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Xe,hasStandardBrowserEnv:wn,hasStandardBrowserWebWorkerEnv:bn},Symbol.toStringTag,{value:"Module"})),N={...En,...yn};function Sn(e,t){return G(e,new N.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return N.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function On(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function An(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Qe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=An(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(On(r),s,n,0)}),n}return null}function gn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const me={transitional:Ge,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Sn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return G(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),gn(t)):t}],transformResponse:[function(t){const n=this.transitional||me.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:N.classes.FormData,Blob:N.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{me.headers[e]={}});const ye=me,Rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Tn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Rn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},xe=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function Nn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const xn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Z(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class X{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,f){const l=B(p);if(!l)throw new Error("header name must be a non-empty string");const u=a.findKey(s,l);(!u||s[u]===void 0||f===!0||f===void 0&&s[u]!==!1)&&(s[u||p]=J(c))}const i=(c,p)=>a.forEach(c,(f,l)=>o(f,l,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!xn(t)?i(Tn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=B(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Nn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Z(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=B(i),i){const c=a.findKey(r,i);c&&(!n||Z(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Z(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?Cn(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[xe]=this[xe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=B(i);r[c]||(Pn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}X.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(X.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(X);const C=X;function Y(e,t){const n=this||ye,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ze(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Fn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const _n=N.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Dn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ln(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ye(e,t){return e&&!Dn(t)?Ln(e,t):t}const Bn=N.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function jn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Un(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const f=Date.now(),l=r[o];i||(i=f),n[s]=p,r[s]=f;let u=o,w=0;for(;u!==s;)w+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),f-i<t)return;const S=l&&f-l;return S?Math.round(w*1e3/S):void 0}}function Ce(e,t){let n=0;const r=Un(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,p=r(c),f=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&f?(i-o)/p:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const kn=typeof XMLHttpRequest<"u",Hn=kn&&function(e){return new Promise(function(n,r){let s=e.data;const o=C.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function f(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let l;if(a.isFormData(s)){if(N.hasStandardBrowserEnv||N.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((l=o.getContentType())!==!1){const[d,...b]=l?l.split(";").map(O=>O.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...b].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+b))}const w=Ye(e.baseURL,e.url);u.open(e.method.toUpperCase(),Ke(w,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function S(){if(!u)return;const d=C.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),O={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};Fn(function(T){n(T),f()},function(T){r(T),f()},O),u=null}if("onloadend"in u?u.onloadend=S:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(S)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const O=e.transitional||Ge;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),r(new m(b,O.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},N.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Bn(w))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&_n.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(b,O){u.setRequestHeader(O,b)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{u&&(r(!d||d.type?new k(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const h=jn(w);if(h&&N.protocols.indexOf(h)===-1){r(new m("Unsupported protocol "+h+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},ce={http:un,xhr:Hn};a.forEach(ce,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pe=e=>`- ${e}`,In=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!In(n)&&(r=ce[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Pe).join(`
`):" "+Pe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ce};function ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Fe(e){return ee(e),e.headers=C.from(e.headers),e.data=Y.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||ye.adapter)(e).then(function(r){return ee(e),r.data=Y.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Ze(r)||(ee(e),r&&r.response&&(r.response.data=Y.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const _e=e=>e instanceof C?{...e}:e;function D(e,t){t=t||{};const n={};function r(f,l,u){return a.isPlainObject(f)&&a.isPlainObject(l)?a.merge.call({caseless:u},f,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(f,l,u){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f,u)}else return r(f,l,u)}function o(f,l){if(!a.isUndefined(l))return r(void 0,l)}function i(f,l){if(a.isUndefined(l)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function c(f,l,u){if(u in t)return r(f,l);if(u in e)return r(void 0,f)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(f,l)=>s(_e(f),_e(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=p[l]||s,w=u(e[l],t[l],l);a.isUndefined(w)&&u!==c||(n[l]=w)}),n}const tt="1.6.8",we={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{we[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const De={};we.transitional=function(t,n,r){function s(o,i){return"[Axios v"+tt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!De[i]&&(De[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ue={assertOptions:Mn,validators:we},F=ue.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new Ne,response:new Ne}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ue.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ue.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=C.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const f=[];this.interceptors.response.forEach(function(d){f.push(d.fulfilled,d.rejected)});let l,u=0,w;if(!p){const h=[Fe.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,f),w=h.length,l=Promise.resolve(n);u<w;)l=l.then(h[u++],h[u++]);return l}w=c.length;let S=n;for(u=0;u<w;){const h=c[u++],d=c[u++];try{S=h(S)}catch(b){d.call(this,b);break}}try{l=Fe.call(this,S)}catch(h){return Promise.reject(h)}for(u=0,w=f.length;u<w;)l=l.then(f[u++],f[u++]);return l}getUri(t){t=D(this.defaults,t);const n=Ye(t.baseURL,t.url);return Ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const $=v;class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}const qn=be;function zn(e){return function(n){return e.apply(null,n)}}function Jn(e){return a.isObject(e)&&e.isAxiosError===!0}const le={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(le).forEach(([e,t])=>{le[t]=e});const $n=le;function nt(e){const t=new $(e),n=Ue($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nt(D(e,s))},n}const E=nt(ye);E.Axios=$;E.CanceledError=k;E.CancelToken=qn;E.isCancel=Ze;E.VERSION=tt;E.toFormData=G;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=zn;E.isAxiosError=Jn;E.mergeConfig=D;E.AxiosHeaders=C;E.formToJSON=e=>Qe(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=et.getAdapter;E.HttpStatusCode=$n;E.default=E;const te=navigator.language.split("-")[0];class Gn{static async searchLocation(t,n=te){return(await E.get(`https://weatheroffer.com/api/weather/city?location=${t}&lang=${n}`)).data}static async getDaily(t,n=te){return(await E.get(`https://weatheroffer.com/api/weather/daily?location=${t}&lang=${n}`)).data}static async getHourly(t,n=te){return(await E.get(`https://weatheroffer.com/api/weather/hourly?location=${t}&lang=${n}`)).data}static getBackgroundClass(t){return this.between(t,101,104)||this.between(t,151,153)?"city-weather-cloudy":this.between(t,101,104)||this.between(t,151,153)?"city-weather-rain":this.between(t,400,499)?"city-weather-snow":this.between(t,500,515)?"city-weather-haze":"city-weather-sun"}static between(t,n,r){return t>=n&&t<=r}}const Xn={name:"集美",id:"101230206",lat:"24.57287",lon:"118.10087",adm2:"厦门",adm1:"福建省",country:"中国",tz:"Asia/Shanghai",utcOffset:"+08:00",isDst:"0",type:"city",rank:"35",fxLink:"https://www.qweather.com/weather/jimei-101230206.html"};export{Xn as D,te as L,Gn as W,Vn as a,Wn as b,E as c,Kn as u};
