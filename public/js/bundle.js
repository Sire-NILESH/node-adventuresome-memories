(()=>{var Te=e=>{mapboxgl.accessToken="pk.eyJ1IjoiZHdyYWl0aDAiLCJhIjoiY2tzZWlnMDBqMTB6ZzJ2b2RwaWZzZzhvYSJ9.qXBUqSbPnsd2kFg8_EKrbQ";let t=new mapboxgl.Map({container:"map",style:"mapbox://styles/dwraith0/cksej264e4k4z17nz0cffw8sr",scrollZoom:!1}),r=new mapboxgl.LngLatBounds;e.forEach(o=>{let n=document.createElement("div");n.className="marker",new mapboxgl.Marker({element:n,anchor:"bottom"}).setLngLat(o.coordinates).addTo(t),new mapboxgl.Popup({offset:30,closeOnClick:!1,focusAfterOpen:!1}).setLngLat(o.coordinates).setHTML(`<p>Day ${o.day}: ${o.description}</p>`).addTo(t),r.extend(o.coordinates)}),t.fitBounds(r,{padding:{top:200,bottom:150,left:100,right:100}})};function I(e,t){return function(){return e.apply(t,arguments)}}var{toString:xt}=Object.prototype,{getPrototypeOf:le}=Object,G=(e=>t=>{let r=xt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:L}=Array,j=X("undefined");function St(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var Ne=O("ArrayBuffer");function gt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}var At=X("string"),g=X("function"),Be=X("number"),Z=e=>e!==null&&typeof e=="object",Ot=e=>e===!0||e===!1,$=e=>{if(G(e)!=="object")return!1;let t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=O("Date"),Tt=O("File"),Ct=O("Blob"),Pt=O("FileList"),Nt=e=>Z(e)&&g(e.pipe),Bt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=G(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},Ft=O("URLSearchParams"),Lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function q(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let o,n;if(typeof e!="object"&&(e=[e]),L(e))for(o=0,n=e.length;o<n;o++)t.call(null,e[o],o,e);else{let s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length,c;for(o=0;o<i;o++)c=s[o],t.call(null,e[c],c,e)}}function Fe(e,t){t=t.toLowerCase();let r=Object.keys(e),o=r.length,n;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}var Le=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),De=e=>!j(e)&&e!==Le;function ce(){let{caseless:e}=De(this)&&this||{},t={},r=(o,n)=>{let s=e&&Fe(t,n)||n;$(t[s])&&$(o)?t[s]=ce(t[s],o):$(o)?t[s]=ce({},o):L(o)?t[s]=o.slice():t[s]=o};for(let o=0,n=arguments.length;o<n;o++)arguments[o]&&q(arguments[o],r);return t}var Dt=(e,t,r,{allOwnKeys:o}={})=>(q(t,(n,s)=>{r&&g(n)?e[s]=I(n,r):e[s]=n},{allOwnKeys:o}),e),Ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_t=(e,t,r,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},kt=(e,t,r,o)=>{let n,s,i,c={};if(t=t||{},e==null)return t;do{for(n=Object.getOwnPropertyNames(e),s=n.length;s-- >0;)i=n[s],(!o||o(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&le(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},It=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;let o=e.indexOf(t,r);return o!==-1&&o===r},jt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Be(t))return null;let r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},qt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&le(Uint8Array)),Ht=(e,t)=>{let o=(e&&e[Symbol.iterator]).call(e),n;for(;(n=o.next())&&!n.done;){let s=n.value;t.call(e,s[0],s[1])}},Mt=(e,t)=>{let r,o=[];for(;(r=e.exec(t))!==null;)o.push(r);return o},vt=O("HTMLFormElement"),zt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,n){return o.toUpperCase()+n}),Ce=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Jt=O("RegExp"),Ue=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),o={};q(r,(n,s)=>{t(n,s,e)!==!1&&(o[s]=n)}),Object.defineProperties(e,o)},Vt=e=>{Ue(e,(t,r)=>{if(g(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;let o=e[r];if(g(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Wt=(e,t)=>{let r={},o=n=>{n.forEach(s=>{r[s]=!0})};return L(e)?o(e):o(String(e).split(t)),r},Kt=()=>{},$t=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ue="abcdefghijklmnopqrstuvwxyz",Pe="0123456789",_e={DIGIT:Pe,ALPHA:ue,ALPHA_DIGIT:ue+ue.toUpperCase()+Pe},Gt=(e=16,t=_e.ALPHA_DIGIT)=>{let r="",{length:o}=t;for(;e--;)r+=t[Math.random()*o|0];return r};function Xt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}var Zt=e=>{let t=new Array(10),r=(o,n)=>{if(Z(o)){if(t.indexOf(o)>=0)return;if(!("toJSON"in o)){t[n]=o;let s=L(o)?[]:{};return q(o,(i,c)=>{let d=r(i,n+1);!j(d)&&(s[c]=d)}),t[n]=void 0,s}}return o};return r(e,0)},Yt=O("AsyncFunction"),Qt=e=>e&&(Z(e)||g(e))&&g(e.then)&&g(e.catch),a={isArray:L,isArrayBuffer:Ne,isBuffer:St,isFormData:Bt,isArrayBufferView:gt,isString:At,isNumber:Be,isBoolean:Ot,isObject:Z,isPlainObject:$,isUndefined:j,isDate:Rt,isFile:Tt,isBlob:Ct,isRegExp:Jt,isFunction:g,isStream:Nt,isURLSearchParams:Ft,isTypedArray:qt,isFileList:Pt,forEach:q,merge:ce,extend:Dt,trim:Lt,stripBOM:Ut,inherits:_t,toFlatObject:kt,kindOf:G,kindOfTest:O,endsWith:It,toArray:jt,forEachEntry:Ht,matchAll:Mt,isHTMLForm:vt,hasOwnProperty:Ce,hasOwnProp:Ce,reduceDescriptors:Ue,freezeMethods:Vt,toObjectSet:Wt,toCamelCase:zt,noop:Kt,toFiniteNumber:$t,findKey:Fe,global:Le,isContextDefined:De,ALPHABET:_e,generateString:Gt,isSpecCompliantForm:Xt,toJSONObject:Zt,isAsyncFn:Yt,isThenable:Qt};function D(e,t,r,o,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),o&&(this.request=o),n&&(this.response=n)}a.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var ke=D.prototype,Ie={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ie[e]={value:e}});Object.defineProperties(D,Ie);Object.defineProperty(ke,"isAxiosError",{value:!0});D.from=(e,t,r,o,n,s)=>{let i=Object.create(ke);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),D.call(i,e.message,t,r,o,n),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};var p=D;var Y=null;function fe(e){return a.isPlainObject(e)||a.isArray(e)}function qe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function je(e,t,r){return e?e.concat(t).map(function(n,s){return n=qe(n),!r&&s?"["+n+"]":n}).join(r?".":""):t}function er(e){return a.isArray(e)&&!e.some(fe)}var tr=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function rr(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(Y||FormData),r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,T){return!a.isUndefined(T[h])});let o=r.metaTokens,n=r.visitor||l,s=r.dots,i=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(n))throw new TypeError("visitor must be a function");function u(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,T){let A=f;if(f&&!T&&typeof f=="object"){if(a.endsWith(h,"{}"))h=o?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&er(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(A=a.toArray(f)))return h=qe(h),A.forEach(function(K,bt){!(a.isUndefined(K)||K===null)&&t.append(i===!0?je([h],bt,s):i===null?h:h+"[]",u(K))}),!1}return fe(f)?!0:(t.append(je(T,h,s),u(f)),!1)}let m=[],w=Object.assign(tr,{defaultVisitor:l,convertValue:u,isVisitable:fe});function y(f,h){if(!a.isUndefined(f)){if(m.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));m.push(f),a.forEach(f,function(A,F){(!(a.isUndefined(A)||A===null)&&n.call(t,A,a.isString(F)?F.trim():F,h,w))===!0&&y(A,h?h.concat(F):[F])}),m.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}var P=rr;function He(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function Me(e,t){this._pairs=[],e&&P(e,this,t)}var ve=Me.prototype;ve.append=function(t,r){this._pairs.push([t,r])};ve.toString=function(t){let r=t?function(o){return t.call(this,o,He)}:He;return this._pairs.map(function(n){return r(n[0])+"="+r(n[1])},"").join("&")};var Q=Me;function or(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function H(e,t,r){if(!t)return e;let o=r&&r.encode||or,n=r&&r.serialize,s;if(n?s=n(t,r):s=a.isURLSearchParams(t)?t.toString():new Q(t,r).toString(o),s){let i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}var de=class{constructor(){this.handlers=[]}use(t,r,o){return this.handlers.push({fulfilled:t,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(o){o!==null&&t(o)})}},me=de;var ee={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ze=typeof URLSearchParams<"u"?URLSearchParams:Q;var Je=typeof FormData<"u"?FormData:null;var Ve=typeof Blob<"u"?Blob:null;var nr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),sr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),b={isBrowser:!0,classes:{URLSearchParams:ze,FormData:Je,Blob:Ve},isStandardBrowserEnv:nr,isStandardBrowserWebWorkerEnv:sr,protocols:["http","https","file","blob","url","data"]};function pe(e,t){return P(e,new b.classes.URLSearchParams,Object.assign({visitor:function(r,o,n,s){return b.isNode&&a.isBuffer(r)?(this.append(o,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function ir(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ar(e){let t={},r=Object.keys(e),o,n=r.length,s;for(o=0;o<n;o++)s=r[o],t[s]=e[s];return t}function ur(e){function t(r,o,n,s){let i=r[s++],c=Number.isFinite(+i),d=s>=r.length;return i=!i&&a.isArray(n)?n.length:i,d?(a.hasOwnProp(n,i)?n[i]=[n[i],o]:n[i]=o,!c):((!n[i]||!a.isObject(n[i]))&&(n[i]=[]),t(r,o,n[i],s)&&a.isArray(n[i])&&(n[i]=ar(n[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){let r={};return a.forEachEntry(e,(o,n)=>{t(ir(o),n,r,0)}),r}return null}var te=ur;var cr={"Content-Type":void 0};function lr(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(e)}var re={transitional:ee,adapter:["xhr","http"],transformRequest:[function(t,r){let o=r.getContentType()||"",n=o.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return n&&n?JSON.stringify(te(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(o.indexOf("application/x-www-form-urlencoded")>-1)return pe(t,this.formSerializer).toString();if((c=a.isFileList(t))||o.indexOf("multipart/form-data")>-1){let d=this.env&&this.env.FormData;return P(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||n?(r.setContentType("application/json",!1),lr(t)):t}],transformResponse:[function(t){let r=this.transitional||re.transitional,o=r&&r.forcedJSONParsing,n=this.responseType==="json";if(t&&a.isString(t)&&(o&&!this.responseType||n)){let i=!(r&&r.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?p.from(c,p.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:b.classes.FormData,Blob:b.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){re.headers[t]={}});a.forEach(["post","put","patch"],function(t){re.headers[t]=a.merge(cr)});var U=re;var fr=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),We=e=>{let t={},r,o,n;return e&&e.split(`
`).forEach(function(i){n=i.indexOf(":"),r=i.substring(0,n).trim().toLowerCase(),o=i.substring(n+1).trim(),!(!r||t[r]&&fr[r])&&(r==="set-cookie"?t[r]?t[r].push(o):t[r]=[o]:t[r]=t[r]?t[r]+", "+o:o)}),t};var Ke=Symbol("internals");function M(e){return e&&String(e).trim().toLowerCase()}function oe(e){return e===!1||e==null?e:a.isArray(e)?e.map(oe):String(e)}function dr(e){let t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,o;for(;o=r.exec(e);)t[o[1]]=o[2];return t}var mr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function he(e,t,r,o,n){if(a.isFunction(o))return o.call(this,t,r);if(n&&(t=r),!!a.isString(t)){if(a.isString(o))return t.indexOf(o)!==-1;if(a.isRegExp(o))return o.test(t)}}function pr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,o)=>r.toUpperCase()+o)}function hr(e,t){let r=a.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+r,{value:function(n,s,i){return this[o].call(this,t,n,s,i)},configurable:!0})})}var _=class{constructor(t){t&&this.set(t)}set(t,r,o){let n=this;function s(c,d,u){let l=M(d);if(!l)throw new Error("header name must be a non-empty string");let m=a.findKey(n,l);(!m||n[m]===void 0||u===!0||u===void 0&&n[m]!==!1)&&(n[m||d]=oe(c))}let i=(c,d)=>a.forEach(c,(u,l)=>s(u,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!mr(t)?i(We(t),r):t!=null&&s(r,t,o),this}get(t,r){if(t=M(t),t){let o=a.findKey(this,t);if(o){let n=this[o];if(!r)return n;if(r===!0)return dr(n);if(a.isFunction(r))return r.call(this,n,o);if(a.isRegExp(r))return r.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=M(t),t){let o=a.findKey(this,t);return!!(o&&this[o]!==void 0&&(!r||he(this,this[o],o,r)))}return!1}delete(t,r){let o=this,n=!1;function s(i){if(i=M(i),i){let c=a.findKey(o,i);c&&(!r||he(o,o[c],c,r))&&(delete o[c],n=!0)}}return a.isArray(t)?t.forEach(s):s(t),n}clear(t){let r=Object.keys(this),o=r.length,n=!1;for(;o--;){let s=r[o];(!t||he(this,this[s],s,t,!0))&&(delete this[s],n=!0)}return n}normalize(t){let r=this,o={};return a.forEach(this,(n,s)=>{let i=a.findKey(o,s);if(i){r[i]=oe(n),delete r[s];return}let c=t?pr(s):String(s).trim();c!==s&&delete r[s],r[c]=oe(n),o[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){let r=Object.create(null);return a.forEach(this,(o,n)=>{o!=null&&o!==!1&&(r[n]=t&&a.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){let o=new this(t);return r.forEach(n=>o.set(n)),o}static accessor(t){let o=(this[Ke]=this[Ke]={accessors:{}}).accessors,n=this.prototype;function s(i){let c=M(i);o[c]||(hr(n,i),o[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}};_.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(_.prototype);a.freezeMethods(_);var x=_;function v(e,t){let r=this||U,o=t||r,n=x.from(o.headers),s=o.data;return a.forEach(e,function(c){s=c.call(r,s,n.normalize(),t?t.status:void 0)}),n.normalize(),s}function z(e){return!!(e&&e.__CANCEL__)}function $e(e,t,r){p.call(this,e??"canceled",p.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits($e,p,{__CANCEL__:!0});var N=$e;function ye(e,t,r){let o=r.config.validateStatus;!r.status||!o||o(r.status)?e(r):t(new p("Request failed with status code "+r.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}var Ge=b.isStandardBrowserEnv?function(){return{write:function(r,o,n,s,i,c){let d=[];d.push(r+"="+encodeURIComponent(o)),a.isNumber(n)&&d.push("expires="+new Date(n).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){let o=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Ee(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function we(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function J(e,t){return e&&!Ee(t)?we(e,t):t}var Xe=b.isStandardBrowserEnv?function(){let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),o;function n(s){let i=s;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return o=n(window.location.href),function(i){let c=a.isString(i)?n(i):i;return c.protocol===o.protocol&&c.host===o.host}}():function(){return function(){return!0}}();function be(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function yr(e,t){e=e||10;let r=new Array(e),o=new Array(e),n=0,s=0,i;return t=t!==void 0?t:1e3,function(d){let u=Date.now(),l=o[s];i||(i=u),r[n]=d,o[n]=u;let m=s,w=0;for(;m!==n;)w+=r[m++],m=m%e;if(n=(n+1)%e,n===s&&(s=(s+1)%e),u-i<t)return;let y=l&&u-l;return y?Math.round(w*1e3/y):void 0}}var Ze=yr;function Ye(e,t){let r=0,o=Ze(50,250);return n=>{let s=n.loaded,i=n.lengthComputable?n.total:void 0,c=s-r,d=o(c),u=s<=i;r=s;let l={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&u?(i-s)/d:void 0,event:n};l[t?"download":"upload"]=!0,e(l)}}var Er=typeof XMLHttpRequest<"u",Qe=Er&&function(e){return new Promise(function(r,o){let n=e.data,s=x.from(e.headers).normalize(),i=e.responseType,c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(n)&&(b.isStandardBrowserEnv||b.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){let y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}let l=J(e.baseURL,e.url);u.open(e.method.toUpperCase(),H(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function m(){if(!u)return;let y=x.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};ye(function(A){r(A),d()},function(A){o(A),d()},h),u=null}if("onloadend"in u?u.onloadend=m:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(m)},u.onabort=function(){u&&(o(new p("Request aborted",p.ECONNABORTED,e,u)),u=null)},u.onerror=function(){o(new p("Network Error",p.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",h=e.transitional||ee;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),o(new p(f,h.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,u)),u=null},b.isStandardBrowserEnv){let y=(e.withCredentials||Xe(l))&&e.xsrfCookieName&&Ge.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}n===void 0&&s.setContentType(null),"setRequestHeader"in u&&a.forEach(s.toJSON(),function(f,h){u.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Ye(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{u&&(o(!y||y.type?new N(null,e,u):y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));let w=be(l);if(w&&b.protocols.indexOf(w)===-1){o(new p("Unsupported protocol "+w+":",p.ERR_BAD_REQUEST,e));return}u.send(n||null)})};var ne={http:Y,xhr:Qe};a.forEach(ne,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var et={getAdapter:e=>{e=a.isArray(e)?e:[e];let{length:t}=e,r,o;for(let n=0;n<t&&(r=e[n],!(o=a.isString(r)?ne[r.toLowerCase()]:r));n++);if(!o)throw o===!1?new p(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(ne,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!a.isFunction(o))throw new TypeError("adapter is not a function");return o},adapters:ne};function xe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new N(null,e)}function se(e){return xe(e),e.headers=x.from(e.headers),e.data=v.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||U.adapter)(e).then(function(o){return xe(e),o.data=v.call(e,e.transformResponse,o),o.headers=x.from(o.headers),o},function(o){return z(o)||(xe(e),o&&o.response&&(o.response.data=v.call(e,e.transformResponse,o.response),o.response.headers=x.from(o.response.headers))),Promise.reject(o)})}var tt=e=>e instanceof x?e.toJSON():e;function C(e,t){t=t||{};let r={};function o(u,l,m){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:m},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function n(u,l,m){if(a.isUndefined(l)){if(!a.isUndefined(u))return o(void 0,u,m)}else return o(u,l,m)}function s(u,l){if(!a.isUndefined(l))return o(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return o(void 0,u)}else return o(void 0,l)}function c(u,l,m){if(m in t)return o(u,l);if(m in e)return o(void 0,u)}let d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>n(tt(u),tt(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){let m=d[l]||n,w=m(e[l],t[l],l);a.isUndefined(w)&&m!==c||(r[l]=w)}),r}var ie="1.4.0";var Se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Se[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});var rt={};Se.transitional=function(t,r,o){function n(s,i){return"[Axios v"+ie+"] Transitional option '"+s+"'"+i+(o?". "+o:"")}return(s,i,c)=>{if(t===!1)throw new p(n(i," has been removed"+(r?" in "+r:"")),p.ERR_DEPRECATED);return r&&!rt[i]&&(rt[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,c):!0}};function wr(e,t,r){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);let o=Object.keys(e),n=o.length;for(;n-- >0;){let s=o[n],i=t[s];if(i){let c=e[s],d=c===void 0||i(c,s,e);if(d!==!0)throw new p("option "+s+" must be "+d,p.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new p("Unknown option "+s,p.ERR_BAD_OPTION)}}var ae={assertOptions:wr,validators:Se};var B=ae.validators,k=class{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=C(this.defaults,r);let{transitional:o,paramsSerializer:n,headers:s}=r;o!==void 0&&ae.assertOptions(o,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),n!=null&&(a.isFunction(n)?r.paramsSerializer={serialize:n}:ae.assertOptions(n,{encode:B.function,serialize:B.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i;i=s&&a.merge(s.common,s[r.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),r.headers=x.concat(i,s);let c=[],d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});let u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let l,m=0,w;if(!d){let f=[se.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,u),w=f.length,l=Promise.resolve(r);m<w;)l=l.then(f[m++],f[m++]);return l}w=c.length;let y=r;for(m=0;m<w;){let f=c[m++],h=c[m++];try{y=f(y)}catch(T){h.call(this,T);break}}try{l=se.call(this,y)}catch(f){return Promise.reject(f)}for(m=0,w=u.length;m<w;)l=l.then(u[m++],u[m++]);return l}getUri(t){t=C(this.defaults,t);let r=J(t.baseURL,t.url);return H(r,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){k.prototype[t]=function(r,o){return this.request(C(o||{},{method:t,url:r,data:(o||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(o){return function(s,i,c){return this.request(C(c||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}k.prototype[t]=r(),k.prototype[t+"Form"]=r(!0)});var V=k;var W=class{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});let o=this;this.promise.then(n=>{if(!o._listeners)return;let s=o._listeners.length;for(;s-- >0;)o._listeners[s](n);o._listeners=null}),this.promise.then=n=>{let s,i=new Promise(c=>{o.subscribe(c),s=c}).then(n);return i.cancel=function(){o.unsubscribe(s)},i},t(function(s,i,c){o.reason||(o.reason=new N(s,i,c),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;let r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new W(function(n){t=n}),cancel:t}}},ot=W;function ge(e){return function(r){return e.apply(null,r)}}function Ae(e){return a.isObject(e)&&e.isAxiosError===!0}var Oe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Oe).forEach(([e,t])=>{Oe[t]=e});var nt=Oe;function st(e){let t=new V(e),r=I(V.prototype.request,t);return a.extend(r,V.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(n){return st(C(e,n))},r}var E=st(U);E.Axios=V;E.CanceledError=N;E.CancelToken=ot;E.isCancel=z;E.VERSION=ie;E.toFormData=P;E.AxiosError=p;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=ge;E.isAxiosError=Ae;E.mergeConfig=C;E.AxiosHeaders=x;E.formToJSON=e=>te(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=nt;E.default=E;var R=E;var{Axios:Xn,AxiosError:Zn,CanceledError:Yn,isCancel:Qn,CancelToken:es,VERSION:ts,all:rs,Cancel:os,isAxiosError:ns,spread:ss,toFormData:is,AxiosHeaders:as,HttpStatusCode:us,formToJSON:cs,mergeConfig:ls}=R;var it=()=>{let e=document.querySelector(".alert");e&&e.parentElement.removeChild(e)},S=(e,t,r=5)=>{it();let o=`<div class="alert alert--${e}">${t}</div>`;document.querySelector("body").insertAdjacentHTML("afterbegin",o),window.setTimeout(it,r*1e3)};var at=async(e,t)=>{try{(await R({method:"POST",url:"/api/v1/users/login",data:{email:e,password:t}})).data.status==="success"&&(S("success","Logged in successfully!"),window.setTimeout(()=>{location.assign("/")},1500))}catch(r){S("error",r.response.data.message)}},ut=async(e,t,r,o)=>{try{(await R({method:"POST",url:"/api/v1/users/signup",data:{name:e,email:t,password:r,passwordConfirm:o}})).data.status==="success"&&(S("success","Account created successfully!"),window.setTimeout(()=>{location.assign("/")},1500))}catch(n){S("error",n.response.data.message)}},ct=async()=>{try{(await R({method:"GET",url:"/api/v1/users/logout"})).data.status==="success"&&location.assign("/login")}catch{S("error","Error logging out! Try again.")}};var Re=async(e,t)=>{try{(await R({method:"PATCH",url:t==="password"?"/api/v1/users/updateMyPassword":"/api/v1/users/updateMe",data:e})).data.status==="success"&&S("success",`${t.toUpperCase()} updated successfully!`)}catch(r){S("error",r.response.data.message)}};var Ss=Stripe("pk_test_51JWJ70SHkzkRG21mPCIgtqOGMcws87vJ5ZX2tx4BV5wDaOzyDVwXwhQ2FCb6LMXTUInLeYLg8tDSBIbXjrBK7wqN00xMWPeeOz"),lt=async e=>{try{let r=(await R(`/api/v1/bookings/checkout-session/${e}`)).data.session.url;window.location.assign(r)}catch(t){S("error",t)}};var ft=document.getElementById("map"),dt=document.querySelector(".form--login"),mt=document.querySelector(".form--signup"),pt=document.querySelector(".nav__el--logout"),ht=document.querySelector(".form-user-data"),yt=document.querySelector(".form-user-password"),Et=document.getElementById("book-tour");if(ft){let e=JSON.parse(ft.dataset.locations);Te(e)}dt&&dt.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("email").value,r=document.getElementById("password").value;at(t,r)});mt&&mt.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("name").value,r=document.getElementById("email").value,o=document.getElementById("password").value,n=document.getElementById("password-confirm").value;ut(t,r,o,n)});pt&&pt.addEventListener("click",ct);ht&&ht.addEventListener("submit",e=>{e.preventDefault();let t=new FormData;t.append("name",document.getElementById("name").value),t.append("email",document.getElementById("email").value),t.append("photo",document.getElementById("photo").files[0]),Re(t,"data")});yt&&yt.addEventListener("submit",async e=>{e.preventDefault(),document.querySelector(".btn--save-password").textContent="Updating...";let t=document.getElementById("password-current").value,r=document.getElementById("password").value,o=document.getElementById("password-confirm").value;await Re({passwordCurrent:t,password:r,passwordConfirm:o},"password"),document.querySelector(".btn--save-password").textContent="Save password",document.getElementById("password-current").value="",document.getElementById("password").value="",document.getElementById("password-confirm").value=""});Et&&Et.addEventListener("click",e=>{e.target.textContent="Processing...";let{tourId:t}=e.target.dataset;lt(t)});var wt=document.querySelector("body").dataset.alert;wt&&S("success",wt,10);})();
