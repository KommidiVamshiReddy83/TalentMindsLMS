function tC(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(n,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();function Fn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fh={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function rC(){if(I1)return Rl;I1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:n,key:u,ref:o!==void 0?o:null,props:l}}return Rl.Fragment=t,Rl.jsx=r,Rl.jsxs=r,Rl}var q1;function nC(){return q1||(q1=1,fh.exports=rC()),fh.exports}var c=nC(),ph={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1;function aC(){if($1)return we;$1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function b(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,j={};function S(P,W,ne){this.props=P,this.context=W,this.refs=j,this.updater=ne||w}S.prototype.isReactComponent={},S.prototype.setState=function(P,W){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,W,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function E(){}E.prototype=S.prototype;function C(P,W,ne){this.props=P,this.context=W,this.refs=j,this.updater=ne||w}var N=C.prototype=new E;N.constructor=C,A(N,S.prototype),N.isPureReactComponent=!0;var _=Array.isArray,T={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function U(P,W,ne,te,le,je){return ne=je.ref,{$$typeof:e,type:P,key:W,ref:ne!==void 0?ne:null,props:je}}function X(P,W){return U(P.type,W,void 0,void 0,void 0,P.props)}function ee(P){return typeof P=="object"&&P!==null&&P.$$typeof===e}function ae(P){var W={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ne){return W[ne]})}var F=/\/+/g;function Q(P,W){return typeof P=="object"&&P!==null&&P.key!=null?ae(""+P.key):W.toString(36)}function pe(){}function me(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(pe,pe):(P.status="pending",P.then(function(W){P.status==="pending"&&(P.status="fulfilled",P.value=W)},function(W){P.status==="pending"&&(P.status="rejected",P.reason=W)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ye(P,W,ne,te,le){var je=typeof P;(je==="undefined"||je==="boolean")&&(P=null);var ge=!1;if(P===null)ge=!0;else switch(je){case"bigint":case"string":case"number":ge=!0;break;case"object":switch(P.$$typeof){case e:case t:ge=!0;break;case m:return ge=P._init,ye(ge(P._payload),W,ne,te,le)}}if(ge)return le=le(P),ge=te===""?"."+Q(P,0):te,_(le)?(ne="",ge!=null&&(ne=ge.replace(F,"$&/")+"/"),ye(le,W,ne,"",function(Z){return Z})):le!=null&&(ee(le)&&(le=X(le,ne+(le.key==null||P&&P.key===le.key?"":(""+le.key).replace(F,"$&/")+"/")+ge)),W.push(le)),1;ge=0;var $e=te===""?".":te+":";if(_(P))for(var Ue=0;Ue<P.length;Ue++)te=P[Ue],je=$e+Q(te,Ue),ge+=ye(te,W,ne,je,le);else if(Ue=b(P),typeof Ue=="function")for(P=Ue.call(P),Ue=0;!(te=P.next()).done;)te=te.value,je=$e+Q(te,Ue++),ge+=ye(te,W,ne,je,le);else if(je==="object"){if(typeof P.then=="function")return ye(me(P),W,ne,te,le);throw W=String(P),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return ge}function q(P,W,ne){if(P==null)return P;var te=[],le=0;return ye(P,te,"","",function(je){return W.call(ne,je,le++)}),te}function G(P){if(P._status===-1){var W=P._result;W=W(),W.then(function(ne){(P._status===0||P._status===-1)&&(P._status=1,P._result=ne)},function(ne){(P._status===0||P._status===-1)&&(P._status=2,P._result=ne)}),P._status===-1&&(P._status=0,P._result=W)}if(P._status===1)return P._result.default;throw P._result}var re=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function ie(){}return we.Children={map:q,forEach:function(P,W,ne){q(P,function(){W.apply(this,arguments)},ne)},count:function(P){var W=0;return q(P,function(){W++}),W},toArray:function(P){return q(P,function(W){return W})||[]},only:function(P){if(!ee(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},we.Component=S,we.Fragment=r,we.Profiler=o,we.PureComponent=C,we.StrictMode=n,we.Suspense=p,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,we.__COMPILER_RUNTIME={__proto__:null,c:function(P){return T.H.useMemoCache(P)}},we.cache=function(P){return function(){return P.apply(null,arguments)}},we.cloneElement=function(P,W,ne){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var te=A({},P.props),le=P.key,je=void 0;if(W!=null)for(ge in W.ref!==void 0&&(je=void 0),W.key!==void 0&&(le=""+W.key),W)!z.call(W,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&W.ref===void 0||(te[ge]=W[ge]);var ge=arguments.length-2;if(ge===1)te.children=ne;else if(1<ge){for(var $e=Array(ge),Ue=0;Ue<ge;Ue++)$e[Ue]=arguments[Ue+2];te.children=$e}return U(P.type,le,void 0,void 0,je,te)},we.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},we.createElement=function(P,W,ne){var te,le={},je=null;if(W!=null)for(te in W.key!==void 0&&(je=""+W.key),W)z.call(W,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(le[te]=W[te]);var ge=arguments.length-2;if(ge===1)le.children=ne;else if(1<ge){for(var $e=Array(ge),Ue=0;Ue<ge;Ue++)$e[Ue]=arguments[Ue+2];le.children=$e}if(P&&P.defaultProps)for(te in ge=P.defaultProps,ge)le[te]===void 0&&(le[te]=ge[te]);return U(P,je,void 0,void 0,null,le)},we.createRef=function(){return{current:null}},we.forwardRef=function(P){return{$$typeof:f,render:P}},we.isValidElement=ee,we.lazy=function(P){return{$$typeof:m,_payload:{_status:-1,_result:P},_init:G}},we.memo=function(P,W){return{$$typeof:h,type:P,compare:W===void 0?null:W}},we.startTransition=function(P){var W=T.T,ne={};T.T=ne;try{var te=P(),le=T.S;le!==null&&le(ne,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(ie,re)}catch(je){re(je)}finally{T.T=W}},we.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},we.use=function(P){return T.H.use(P)},we.useActionState=function(P,W,ne){return T.H.useActionState(P,W,ne)},we.useCallback=function(P,W){return T.H.useCallback(P,W)},we.useContext=function(P){return T.H.useContext(P)},we.useDebugValue=function(){},we.useDeferredValue=function(P,W){return T.H.useDeferredValue(P,W)},we.useEffect=function(P,W,ne){var te=T.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(P,W)},we.useId=function(){return T.H.useId()},we.useImperativeHandle=function(P,W,ne){return T.H.useImperativeHandle(P,W,ne)},we.useInsertionEffect=function(P,W){return T.H.useInsertionEffect(P,W)},we.useLayoutEffect=function(P,W){return T.H.useLayoutEffect(P,W)},we.useMemo=function(P,W){return T.H.useMemo(P,W)},we.useOptimistic=function(P,W){return T.H.useOptimistic(P,W)},we.useReducer=function(P,W,ne){return T.H.useReducer(P,W,ne)},we.useRef=function(P){return T.H.useRef(P)},we.useState=function(P){return T.H.useState(P)},we.useSyncExternalStore=function(P,W,ne){return T.H.useSyncExternalStore(P,W,ne)},we.useTransition=function(){return T.H.useTransition()},we.version="19.1.1",we}var U1;function Oo(){return U1||(U1=1,ph.exports=aC()),ph.exports}var y=Oo();const uA=Fn(y),iC=tC({__proto__:null,default:uA},[y]);var hh={exports:{}},Ll={},mh={exports:{}},gh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1;function oC(){return H1||(H1=1,(function(e){function t(q,G){var re=q.length;q.push(G);e:for(;0<re;){var ie=re-1>>>1,P=q[ie];if(0<o(P,G))q[ie]=G,q[re]=P,re=ie;else break e}}function r(q){return q.length===0?null:q[0]}function n(q){if(q.length===0)return null;var G=q[0],re=q.pop();if(re!==G){q[0]=re;e:for(var ie=0,P=q.length,W=P>>>1;ie<W;){var ne=2*(ie+1)-1,te=q[ne],le=ne+1,je=q[le];if(0>o(te,re))le<P&&0>o(je,te)?(q[ie]=je,q[le]=re,ie=le):(q[ie]=te,q[ne]=re,ie=ne);else if(le<P&&0>o(je,re))q[ie]=je,q[le]=re,ie=le;else break e}}return G}function o(q,G){var re=q.sortIndex-G.sortIndex;return re!==0?re:q.id-G.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],h=[],m=1,v=null,b=3,w=!1,A=!1,j=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function _(q){for(var G=r(h);G!==null;){if(G.callback===null)n(h);else if(G.startTime<=q)n(h),G.sortIndex=G.expirationTime,t(p,G);else break;G=r(h)}}function T(q){if(j=!1,_(q),!A)if(r(p)!==null)A=!0,z||(z=!0,Q());else{var G=r(h);G!==null&&ye(T,G.startTime-q)}}var z=!1,U=-1,X=5,ee=-1;function ae(){return S?!0:!(e.unstable_now()-ee<X)}function F(){if(S=!1,z){var q=e.unstable_now();ee=q;var G=!0;try{e:{A=!1,j&&(j=!1,C(U),U=-1),w=!0;var re=b;try{t:{for(_(q),v=r(p);v!==null&&!(v.expirationTime>q&&ae());){var ie=v.callback;if(typeof ie=="function"){v.callback=null,b=v.priorityLevel;var P=ie(v.expirationTime<=q);if(q=e.unstable_now(),typeof P=="function"){v.callback=P,_(q),G=!0;break t}v===r(p)&&n(p),_(q)}else n(p);v=r(p)}if(v!==null)G=!0;else{var W=r(h);W!==null&&ye(T,W.startTime-q),G=!1}}break e}finally{v=null,b=re,w=!1}G=void 0}}finally{G?Q():z=!1}}}var Q;if(typeof N=="function")Q=function(){N(F)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,me=pe.port2;pe.port1.onmessage=F,Q=function(){me.postMessage(null)}}else Q=function(){E(F,0)};function ye(q,G){U=E(function(){q(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(q){switch(b){case 1:case 2:case 3:var G=3;break;default:G=b}var re=b;b=G;try{return q()}finally{b=re}},e.unstable_requestPaint=function(){S=!0},e.unstable_runWithPriority=function(q,G){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var re=b;b=q;try{return G()}finally{b=re}},e.unstable_scheduleCallback=function(q,G,re){var ie=e.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ie+re:ie):re=ie,q){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=re+P,q={id:m++,callback:G,priorityLevel:q,startTime:re,expirationTime:P,sortIndex:-1},re>ie?(q.sortIndex=re,t(h,q),r(p)===null&&q===r(h)&&(j?(C(U),U=-1):j=!0,ye(T,re-ie))):(q.sortIndex=P,t(p,q),A||w||(A=!0,z||(z=!0,Q()))),q},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(q){var G=b;return function(){var re=b;b=G;try{return q.apply(this,arguments)}finally{b=re}}}})(gh)),gh}var Y1;function lC(){return Y1||(Y1=1,mh.exports=oC()),mh.exports}var vh={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1;function sC(){if(G1)return Wt;G1=1;var e=Oo();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var n={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:h,implementation:m}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,Wt.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,m)},Wt.flushSync=function(p){var h=u.T,m=n.p;try{if(u.T=null,n.p=2,p)return p()}finally{u.T=h,n.p=m,n.d.f()}},Wt.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,n.d.C(p,h))},Wt.prefetchDNS=function(p){typeof p=="string"&&n.d.D(p)},Wt.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?n.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:b,fetchPriority:w}):m==="script"&&n.d.X(p,{crossOrigin:v,integrity:b,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Wt.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);n.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&n.d.M(p)},Wt.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin);n.d.L(p,m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Wt.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=f(h.as,h.crossOrigin);n.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else n.d.m(p)},Wt.requestFormReset=function(p){n.d.r(p)},Wt.unstable_batchedUpdates=function(p,h){return p(h)},Wt.useFormState=function(p,h,m){return u.H.useFormState(p,h,m)},Wt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Wt.version="19.1.1",Wt}var K1;function dA(){if(K1)return vh.exports;K1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),vh.exports=sC(),vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1;function cC(){if(W1)return Ll;W1=1;var e=lC(),t=Oo(),r=dA();function n(a){var i="https://react.dev/errors/"+a;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+a+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function l(a){var i=a,s=a;if(a.alternate)for(;i.return;)i=i.return;else{a=i;do i=a,(i.flags&4098)!==0&&(s=i.return),a=i.return;while(a)}return i.tag===3?s:null}function u(a){if(a.tag===13){var i=a.memoizedState;if(i===null&&(a=a.alternate,a!==null&&(i=a.memoizedState)),i!==null)return i.dehydrated}return null}function f(a){if(l(a)!==a)throw Error(n(188))}function p(a){var i=a.alternate;if(!i){if(i=l(a),i===null)throw Error(n(188));return i!==a?null:a}for(var s=a,d=i;;){var g=s.return;if(g===null)break;var x=g.alternate;if(x===null){if(d=g.return,d!==null){s=d;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===s)return f(g),a;if(x===d)return f(g),i;x=x.sibling}throw Error(n(188))}if(s.return!==d.return)s=g,d=x;else{for(var O=!1,k=g.child;k;){if(k===s){O=!0,s=g,d=x;break}if(k===d){O=!0,d=g,s=x;break}k=k.sibling}if(!O){for(k=x.child;k;){if(k===s){O=!0,s=x,d=g;break}if(k===d){O=!0,d=x,s=g;break}k=k.sibling}if(!O)throw Error(n(189))}}if(s.alternate!==d)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?a:i}function h(a){var i=a.tag;if(i===5||i===26||i===27||i===6)return a;for(a=a.child;a!==null;){if(i=h(a),i!==null)return i;a=a.sibling}return null}var m=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function Q(a){return a===null||typeof a!="object"?null:(a=F&&a[F]||a["@@iterator"],typeof a=="function"?a:null)}var pe=Symbol.for("react.client.reference");function me(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===pe?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case A:return"Fragment";case S:return"Profiler";case j:return"StrictMode";case T:return"Suspense";case z:return"SuspenseList";case ee:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case w:return"Portal";case N:return(a.displayName||"Context")+".Provider";case C:return(a._context.displayName||"Context")+".Consumer";case _:var i=a.render;return a=a.displayName,a||(a=i.displayName||i.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case U:return i=a.displayName||null,i!==null?i:me(a.type)||"Memo";case X:i=a._payload,a=a._init;try{return me(a(i))}catch{}}return null}var ye=Array.isArray,q=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ie=[],P=-1;function W(a){return{current:a}}function ne(a){0>P||(a.current=ie[P],ie[P]=null,P--)}function te(a,i){P++,ie[P]=a.current,a.current=i}var le=W(null),je=W(null),ge=W(null),$e=W(null);function Ue(a,i){switch(te(ge,i),te(je,a),te(le,null),i.nodeType){case 9:case 11:a=(a=i.documentElement)&&(a=a.namespaceURI)?p1(a):0;break;default:if(a=i.tagName,i=i.namespaceURI)i=p1(i),a=h1(i,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}ne(le),te(le,a)}function Z(){ne(le),ne(je),ne(ge)}function Se(a){a.memoizedState!==null&&te($e,a);var i=le.current,s=h1(i,a.type);i!==s&&(te(je,a),te(le,s))}function Ne(a){je.current===a&&(ne(le),ne(je)),$e.current===a&&(ne($e),Ml._currentValue=re)}var J=Object.prototype.hasOwnProperty,Nt=e.unstable_scheduleCallback,Re=e.unstable_cancelCallback,Zt=e.unstable_shouldYield,Qt=e.unstable_requestPaint,Ct=e.unstable_now,Ts=e.unstable_getCurrentPriorityLevel,Wv=e.unstable_ImmediatePriority,Vv=e.unstable_UserBlockingPriority,Ms=e.unstable_NormalPriority,R5=e.unstable_LowPriority,Xv=e.unstable_IdlePriority,L5=e.log,B5=e.unstable_setDisableYieldValue,Io=null,mr=null;function na(a){if(typeof L5=="function"&&B5(a),mr&&typeof mr.setStrictMode=="function")try{mr.setStrictMode(Io,a)}catch{}}var gr=Math.clz32?Math.clz32:$5,I5=Math.log,q5=Math.LN2;function $5(a){return a>>>=0,a===0?32:31-(I5(a)/q5|0)|0}var _s=256,Ps=4194304;function La(a){var i=a&42;if(i!==0)return i;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Ds(a,i,s){var d=a.pendingLanes;if(d===0)return 0;var g=0,x=a.suspendedLanes,O=a.pingedLanes;a=a.warmLanes;var k=d&134217727;return k!==0?(d=k&~x,d!==0?g=La(d):(O&=k,O!==0?g=La(O):s||(s=k&~a,s!==0&&(g=La(s))))):(k=d&~x,k!==0?g=La(k):O!==0?g=La(O):s||(s=d&~a,s!==0&&(g=La(s)))),g===0?0:i!==0&&i!==g&&(i&x)===0&&(x=g&-g,s=i&-i,x>=s||x===32&&(s&4194048)!==0)?i:g}function qo(a,i){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&i)===0}function U5(a,i){switch(a){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fv(){var a=_s;return _s<<=1,(_s&4194048)===0&&(_s=256),a}function Zv(){var a=Ps;return Ps<<=1,(Ps&62914560)===0&&(Ps=4194304),a}function ef(a){for(var i=[],s=0;31>s;s++)i.push(a);return i}function $o(a,i){a.pendingLanes|=i,i!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function H5(a,i,s,d,g,x){var O=a.pendingLanes;a.pendingLanes=s,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=s,a.entangledLanes&=s,a.errorRecoveryDisabledLanes&=s,a.shellSuspendCounter=0;var k=a.entanglements,M=a.expirationTimes,B=a.hiddenUpdates;for(s=O&~s;0<s;){var Y=31-gr(s),V=1<<Y;k[Y]=0,M[Y]=-1;var I=B[Y];if(I!==null)for(B[Y]=null,Y=0;Y<I.length;Y++){var $=I[Y];$!==null&&($.lane&=-536870913)}s&=~V}d!==0&&Qv(a,d,0),x!==0&&g===0&&a.tag!==0&&(a.suspendedLanes|=x&~(O&~i))}function Qv(a,i,s){a.pendingLanes|=i,a.suspendedLanes&=~i;var d=31-gr(i);a.entangledLanes|=i,a.entanglements[d]=a.entanglements[d]|1073741824|s&4194090}function Jv(a,i){var s=a.entangledLanes|=i;for(a=a.entanglements;s;){var d=31-gr(s),g=1<<d;g&i|a[d]&i&&(a[d]|=i),s&=~g}}function tf(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function rf(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function ex(){var a=G.p;return a!==0?a:(a=window.event,a===void 0?32:P1(a.type))}function Y5(a,i){var s=G.p;try{return G.p=a,i()}finally{G.p=s}}var aa=Math.random().toString(36).slice(2),Gt="__reactFiber$"+aa,ar="__reactProps$"+aa,Ai="__reactContainer$"+aa,nf="__reactEvents$"+aa,G5="__reactListeners$"+aa,K5="__reactHandles$"+aa,tx="__reactResources$"+aa,Uo="__reactMarker$"+aa;function af(a){delete a[Gt],delete a[ar],delete a[nf],delete a[G5],delete a[K5]}function Oi(a){var i=a[Gt];if(i)return i;for(var s=a.parentNode;s;){if(i=s[Ai]||s[Gt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(a=x1(a);a!==null;){if(s=a[Gt])return s;a=x1(a)}return i}a=s,s=a.parentNode}return null}function Ei(a){if(a=a[Gt]||a[Ai]){var i=a.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return a}return null}function Ho(a){var i=a.tag;if(i===5||i===26||i===27||i===6)return a.stateNode;throw Error(n(33))}function ki(a){var i=a[tx];return i||(i=a[tx]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Tt(a){a[Uo]=!0}var rx=new Set,nx={};function Ba(a,i){Ni(a,i),Ni(a+"Capture",i)}function Ni(a,i){for(nx[a]=i,a=0;a<i.length;a++)rx.add(i[a])}var W5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ax={},ix={};function V5(a){return J.call(ix,a)?!0:J.call(ax,a)?!1:W5.test(a)?ix[a]=!0:(ax[a]=!0,!1)}function zs(a,i,s){if(V5(i))if(s===null)a.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":a.removeAttribute(i);return;case"boolean":var d=i.toLowerCase().slice(0,5);if(d!=="data-"&&d!=="aria-"){a.removeAttribute(i);return}}a.setAttribute(i,""+s)}}function Rs(a,i,s){if(s===null)a.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(i);return}a.setAttribute(i,""+s)}}function yn(a,i,s,d){if(d===null)a.removeAttribute(s);else{switch(typeof d){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(s);return}a.setAttributeNS(i,s,""+d)}}var of,ox;function Ci(a){if(of===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);of=i&&i[1]||"",ox=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+of+a+ox}var lf=!1;function sf(a,i){if(!a||lf)return"";lf=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var d={DetermineComponentFrameRoot:function(){try{if(i){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch($){var I=$}Reflect.construct(a,[],V)}else{try{V.call()}catch($){I=$}a.call(V.prototype)}}else{try{throw Error()}catch($){I=$}(V=a())&&typeof V.catch=="function"&&V.catch(function(){})}}catch($){if($&&I&&typeof $.stack=="string")return[$.stack,I.stack]}return[null,null]}};d.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var g=Object.getOwnPropertyDescriptor(d.DetermineComponentFrameRoot,"name");g&&g.configurable&&Object.defineProperty(d.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var x=d.DetermineComponentFrameRoot(),O=x[0],k=x[1];if(O&&k){var M=O.split(`
`),B=k.split(`
`);for(g=d=0;d<M.length&&!M[d].includes("DetermineComponentFrameRoot");)d++;for(;g<B.length&&!B[g].includes("DetermineComponentFrameRoot");)g++;if(d===M.length||g===B.length)for(d=M.length-1,g=B.length-1;1<=d&&0<=g&&M[d]!==B[g];)g--;for(;1<=d&&0<=g;d--,g--)if(M[d]!==B[g]){if(d!==1||g!==1)do if(d--,g--,0>g||M[d]!==B[g]){var Y=`
`+M[d].replace(" at new "," at ");return a.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",a.displayName)),Y}while(1<=d&&0<=g);break}}}finally{lf=!1,Error.prepareStackTrace=s}return(s=a?a.displayName||a.name:"")?Ci(s):""}function X5(a){switch(a.tag){case 26:case 27:case 5:return Ci(a.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 15:return sf(a.type,!1);case 11:return sf(a.type.render,!1);case 1:return sf(a.type,!0);case 31:return Ci("Activity");default:return""}}function lx(a){try{var i="";do i+=X5(a),a=a.return;while(a);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Tr(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function sx(a){var i=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function F5(a){var i=sx(a)?"checked":"value",s=Object.getOwnPropertyDescriptor(a.constructor.prototype,i),d=""+a[i];if(!a.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var g=s.get,x=s.set;return Object.defineProperty(a,i,{configurable:!0,get:function(){return g.call(this)},set:function(O){d=""+O,x.call(this,O)}}),Object.defineProperty(a,i,{enumerable:s.enumerable}),{getValue:function(){return d},setValue:function(O){d=""+O},stopTracking:function(){a._valueTracker=null,delete a[i]}}}}function Ls(a){a._valueTracker||(a._valueTracker=F5(a))}function cx(a){if(!a)return!1;var i=a._valueTracker;if(!i)return!0;var s=i.getValue(),d="";return a&&(d=sx(a)?a.checked?"true":"false":a.value),a=d,a!==s?(i.setValue(a),!0):!1}function Bs(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var Z5=/[\n"\\]/g;function Mr(a){return a.replace(Z5,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function cf(a,i,s,d,g,x,O,k){a.name="",O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?a.type=O:a.removeAttribute("type"),i!=null?O==="number"?(i===0&&a.value===""||a.value!=i)&&(a.value=""+Tr(i)):a.value!==""+Tr(i)&&(a.value=""+Tr(i)):O!=="submit"&&O!=="reset"||a.removeAttribute("value"),i!=null?uf(a,O,Tr(i)):s!=null?uf(a,O,Tr(s)):d!=null&&a.removeAttribute("value"),g==null&&x!=null&&(a.defaultChecked=!!x),g!=null&&(a.checked=g&&typeof g!="function"&&typeof g!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?a.name=""+Tr(k):a.removeAttribute("name")}function ux(a,i,s,d,g,x,O,k){if(x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(a.type=x),i!=null||s!=null){if(!(x!=="submit"&&x!=="reset"||i!=null))return;s=s!=null?""+Tr(s):"",i=i!=null?""+Tr(i):s,k||i===a.value||(a.value=i),a.defaultValue=i}d=d??g,d=typeof d!="function"&&typeof d!="symbol"&&!!d,a.checked=k?a.checked:!!d,a.defaultChecked=!!d,O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"&&(a.name=O)}function uf(a,i,s){i==="number"&&Bs(a.ownerDocument)===a||a.defaultValue===""+s||(a.defaultValue=""+s)}function Ti(a,i,s,d){if(a=a.options,i){i={};for(var g=0;g<s.length;g++)i["$"+s[g]]=!0;for(s=0;s<a.length;s++)g=i.hasOwnProperty("$"+a[s].value),a[s].selected!==g&&(a[s].selected=g),g&&d&&(a[s].defaultSelected=!0)}else{for(s=""+Tr(s),i=null,g=0;g<a.length;g++){if(a[g].value===s){a[g].selected=!0,d&&(a[g].defaultSelected=!0);return}i!==null||a[g].disabled||(i=a[g])}i!==null&&(i.selected=!0)}}function dx(a,i,s){if(i!=null&&(i=""+Tr(i),i!==a.value&&(a.value=i),s==null)){a.defaultValue!==i&&(a.defaultValue=i);return}a.defaultValue=s!=null?""+Tr(s):""}function fx(a,i,s,d){if(i==null){if(d!=null){if(s!=null)throw Error(n(92));if(ye(d)){if(1<d.length)throw Error(n(93));d=d[0]}s=d}s==null&&(s=""),i=s}s=Tr(i),a.defaultValue=s,d=a.textContent,d===s&&d!==""&&d!==null&&(a.value=d)}function Mi(a,i){if(i){var s=a.firstChild;if(s&&s===a.lastChild&&s.nodeType===3){s.nodeValue=i;return}}a.textContent=i}var Q5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function px(a,i,s){var d=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?d?a.setProperty(i,""):i==="float"?a.cssFloat="":a[i]="":d?a.setProperty(i,s):typeof s!="number"||s===0||Q5.has(i)?i==="float"?a.cssFloat=s:a[i]=(""+s).trim():a[i]=s+"px"}function hx(a,i,s){if(i!=null&&typeof i!="object")throw Error(n(62));if(a=a.style,s!=null){for(var d in s)!s.hasOwnProperty(d)||i!=null&&i.hasOwnProperty(d)||(d.indexOf("--")===0?a.setProperty(d,""):d==="float"?a.cssFloat="":a[d]="");for(var g in i)d=i[g],i.hasOwnProperty(g)&&s[g]!==d&&px(a,g,d)}else for(var x in i)i.hasOwnProperty(x)&&px(a,x,i[x])}function df(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(a){return e4.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}var ff=null;function pf(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var _i=null,Pi=null;function mx(a){var i=Ei(a);if(i&&(a=i.stateNode)){var s=a[ar]||null;e:switch(a=i.stateNode,i.type){case"input":if(cf(a,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=a;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Mr(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var d=s[i];if(d!==a&&d.form===a.form){var g=d[ar]||null;if(!g)throw Error(n(90));cf(d,g.value,g.defaultValue,g.defaultValue,g.checked,g.defaultChecked,g.type,g.name)}}for(i=0;i<s.length;i++)d=s[i],d.form===a.form&&cx(d)}break e;case"textarea":dx(a,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ti(a,!!s.multiple,i,!1)}}}var hf=!1;function gx(a,i,s){if(hf)return a(i,s);hf=!0;try{var d=a(i);return d}finally{if(hf=!1,(_i!==null||Pi!==null)&&(Ac(),_i&&(i=_i,a=Pi,Pi=_i=null,mx(i),a)))for(i=0;i<a.length;i++)mx(a[i])}}function Yo(a,i){var s=a.stateNode;if(s===null)return null;var d=s[ar]||null;if(d===null)return null;s=d[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(a=a.type,d=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!d;break e;default:a=!1}if(a)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=!1;if(bn)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){mf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{mf=!1}var ia=null,gf=null,qs=null;function vx(){if(qs)return qs;var a,i=gf,s=i.length,d,g="value"in ia?ia.value:ia.textContent,x=g.length;for(a=0;a<s&&i[a]===g[a];a++);var O=s-a;for(d=1;d<=O&&i[s-d]===g[x-d];d++);return qs=g.slice(a,1<d?1-d:void 0)}function $s(a){var i=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&i===13&&(a=13)):a=i,a===10&&(a=13),32<=a||a===13?a:0}function Us(){return!0}function xx(){return!1}function ir(a){function i(s,d,g,x,O){this._reactName=s,this._targetInst=g,this.type=d,this.nativeEvent=x,this.target=O,this.currentTarget=null;for(var k in a)a.hasOwnProperty(k)&&(s=a[k],this[k]=s?s(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Us:xx,this.isPropagationStopped=xx,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Us)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Us)},persist:function(){},isPersistent:Us}),i}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=ir(Ia),Ko=m({},Ia,{view:0,detail:0}),t4=ir(Ko),vf,xf,Wo,Ys=m({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Wo&&(Wo&&a.type==="mousemove"?(vf=a.screenX-Wo.screenX,xf=a.screenY-Wo.screenY):xf=vf=0,Wo=a),vf)},movementY:function(a){return"movementY"in a?a.movementY:xf}}),yx=ir(Ys),r4=m({},Ys,{dataTransfer:0}),n4=ir(r4),a4=m({},Ko,{relatedTarget:0}),yf=ir(a4),i4=m({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),o4=ir(i4),l4=m({},Ia,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),s4=ir(l4),c4=m({},Ia,{data:0}),bx=ir(c4),u4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p4(a){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(a):(a=f4[a])?!!i[a]:!1}function bf(){return p4}var h4=m({},Ko,{key:function(a){if(a.key){var i=u4[a.key]||a.key;if(i!=="Unidentified")return i}return a.type==="keypress"?(a=$s(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?d4[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(a){return a.type==="keypress"?$s(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?$s(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),m4=ir(h4),g4=m({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wx=ir(g4),v4=m({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),x4=ir(v4),y4=m({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),b4=ir(y4),w4=m({},Ys,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),j4=ir(w4),S4=m({},Ia,{newState:0,oldState:0}),A4=ir(S4),O4=[9,13,27,32],wf=bn&&"CompositionEvent"in window,Vo=null;bn&&"documentMode"in document&&(Vo=document.documentMode);var E4=bn&&"TextEvent"in window&&!Vo,jx=bn&&(!wf||Vo&&8<Vo&&11>=Vo),Sx=" ",Ax=!1;function Ox(a,i){switch(a){case"keyup":return O4.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ex(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Di=!1;function k4(a,i){switch(a){case"compositionend":return Ex(i);case"keypress":return i.which!==32?null:(Ax=!0,Sx);case"textInput":return a=i.data,a===Sx&&Ax?null:a;default:return null}}function N4(a,i){if(Di)return a==="compositionend"||!wf&&Ox(a,i)?(a=vx(),qs=gf=ia=null,Di=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return jx&&i.locale!=="ko"?null:i.data;default:return null}}var C4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kx(a){var i=a&&a.nodeName&&a.nodeName.toLowerCase();return i==="input"?!!C4[a.type]:i==="textarea"}function Nx(a,i,s,d){_i?Pi?Pi.push(d):Pi=[d]:_i=d,i=Tc(i,"onChange"),0<i.length&&(s=new Hs("onChange","change",null,s,d),a.push({event:s,listeners:i}))}var Xo=null,Fo=null;function T4(a){s1(a,0)}function Gs(a){var i=Ho(a);if(cx(i))return a}function Cx(a,i){if(a==="change")return i}var Tx=!1;if(bn){var jf;if(bn){var Sf="oninput"in document;if(!Sf){var Mx=document.createElement("div");Mx.setAttribute("oninput","return;"),Sf=typeof Mx.oninput=="function"}jf=Sf}else jf=!1;Tx=jf&&(!document.documentMode||9<document.documentMode)}function _x(){Xo&&(Xo.detachEvent("onpropertychange",Px),Fo=Xo=null)}function Px(a){if(a.propertyName==="value"&&Gs(Fo)){var i=[];Nx(i,Fo,a,pf(a)),gx(T4,i)}}function M4(a,i,s){a==="focusin"?(_x(),Xo=i,Fo=s,Xo.attachEvent("onpropertychange",Px)):a==="focusout"&&_x()}function _4(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Gs(Fo)}function P4(a,i){if(a==="click")return Gs(i)}function D4(a,i){if(a==="input"||a==="change")return Gs(i)}function z4(a,i){return a===i&&(a!==0||1/a===1/i)||a!==a&&i!==i}var vr=typeof Object.is=="function"?Object.is:z4;function Zo(a,i){if(vr(a,i))return!0;if(typeof a!="object"||a===null||typeof i!="object"||i===null)return!1;var s=Object.keys(a),d=Object.keys(i);if(s.length!==d.length)return!1;for(d=0;d<s.length;d++){var g=s[d];if(!J.call(i,g)||!vr(a[g],i[g]))return!1}return!0}function Dx(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function zx(a,i){var s=Dx(a);a=0;for(var d;s;){if(s.nodeType===3){if(d=a+s.textContent.length,a<=i&&d>=i)return{node:s,offset:i-a};a=d}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Dx(s)}}function Rx(a,i){return a&&i?a===i?!0:a&&a.nodeType===3?!1:i&&i.nodeType===3?Rx(a,i.parentNode):"contains"in a?a.contains(i):a.compareDocumentPosition?!!(a.compareDocumentPosition(i)&16):!1:!1}function Lx(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var i=Bs(a.document);i instanceof a.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)a=i.contentWindow;else break;i=Bs(a.document)}return i}function Af(a){var i=a&&a.nodeName&&a.nodeName.toLowerCase();return i&&(i==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||i==="textarea"||a.contentEditable==="true")}var R4=bn&&"documentMode"in document&&11>=document.documentMode,zi=null,Of=null,Qo=null,Ef=!1;function Bx(a,i,s){var d=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ef||zi==null||zi!==Bs(d)||(d=zi,"selectionStart"in d&&Af(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Qo&&Zo(Qo,d)||(Qo=d,d=Tc(Of,"onSelect"),0<d.length&&(i=new Hs("onSelect","select",null,i,s),a.push({event:i,listeners:d}),i.target=zi)))}function qa(a,i){var s={};return s[a.toLowerCase()]=i.toLowerCase(),s["Webkit"+a]="webkit"+i,s["Moz"+a]="moz"+i,s}var Ri={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},kf={},Ix={};bn&&(Ix=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function $a(a){if(kf[a])return kf[a];if(!Ri[a])return a;var i=Ri[a],s;for(s in i)if(i.hasOwnProperty(s)&&s in Ix)return kf[a]=i[s];return a}var qx=$a("animationend"),$x=$a("animationiteration"),Ux=$a("animationstart"),L4=$a("transitionrun"),B4=$a("transitionstart"),I4=$a("transitioncancel"),Hx=$a("transitionend"),Yx=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function Fr(a,i){Yx.set(a,i),Ba(i,[a])}var Gx=new WeakMap;function _r(a,i){if(typeof a=="object"&&a!==null){var s=Gx.get(a);return s!==void 0?s:(i={value:a,source:i,stack:lx(i)},Gx.set(a,i),i)}return{value:a,source:i,stack:lx(i)}}var Pr=[],Li=0,Cf=0;function Ks(){for(var a=Li,i=Cf=Li=0;i<a;){var s=Pr[i];Pr[i++]=null;var d=Pr[i];Pr[i++]=null;var g=Pr[i];Pr[i++]=null;var x=Pr[i];if(Pr[i++]=null,d!==null&&g!==null){var O=d.pending;O===null?g.next=g:(g.next=O.next,O.next=g),d.pending=g}x!==0&&Kx(s,g,x)}}function Ws(a,i,s,d){Pr[Li++]=a,Pr[Li++]=i,Pr[Li++]=s,Pr[Li++]=d,Cf|=d,a.lanes|=d,a=a.alternate,a!==null&&(a.lanes|=d)}function Tf(a,i,s,d){return Ws(a,i,s,d),Vs(a)}function Bi(a,i){return Ws(a,null,null,i),Vs(a)}function Kx(a,i,s){a.lanes|=s;var d=a.alternate;d!==null&&(d.lanes|=s);for(var g=!1,x=a.return;x!==null;)x.childLanes|=s,d=x.alternate,d!==null&&(d.childLanes|=s),x.tag===22&&(a=x.stateNode,a===null||a._visibility&1||(g=!0)),a=x,x=x.return;return a.tag===3?(x=a.stateNode,g&&i!==null&&(g=31-gr(s),a=x.hiddenUpdates,d=a[g],d===null?a[g]=[i]:d.push(i),i.lane=s|536870912),x):null}function Vs(a){if(50<Sl)throw Sl=0,Rp=null,Error(n(185));for(var i=a.return;i!==null;)a=i,i=a.return;return a.tag===3?a.stateNode:null}var Ii={};function q4(a,i,s,d){this.tag=a,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xr(a,i,s,d){return new q4(a,i,s,d)}function Mf(a){return a=a.prototype,!(!a||!a.isReactComponent)}function wn(a,i){var s=a.alternate;return s===null?(s=xr(a.tag,i,a.key,a.mode),s.elementType=a.elementType,s.type=a.type,s.stateNode=a.stateNode,s.alternate=a,a.alternate=s):(s.pendingProps=i,s.type=a.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=a.flags&65011712,s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,i=a.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=a.sibling,s.index=a.index,s.ref=a.ref,s.refCleanup=a.refCleanup,s}function Wx(a,i){a.flags&=65011714;var s=a.alternate;return s===null?(a.childLanes=0,a.lanes=i,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,i=s.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a}function Xs(a,i,s,d,g,x){var O=0;if(d=a,typeof a=="function")Mf(a)&&(O=1);else if(typeof a=="string")O=UN(a,s,le.current)?26:a==="html"||a==="head"||a==="body"?27:5;else e:switch(a){case ee:return a=xr(31,s,i,g),a.elementType=ee,a.lanes=x,a;case A:return Ua(s.children,g,x,i);case j:O=8,g|=24;break;case S:return a=xr(12,s,i,g|2),a.elementType=S,a.lanes=x,a;case T:return a=xr(13,s,i,g),a.elementType=T,a.lanes=x,a;case z:return a=xr(19,s,i,g),a.elementType=z,a.lanes=x,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case E:case N:O=10;break e;case C:O=9;break e;case _:O=11;break e;case U:O=14;break e;case X:O=16,d=null;break e}O=29,s=Error(n(130,a===null?"null":typeof a,"")),d=null}return i=xr(O,s,i,g),i.elementType=a,i.type=d,i.lanes=x,i}function Ua(a,i,s,d){return a=xr(7,a,d,i),a.lanes=s,a}function _f(a,i,s){return a=xr(6,a,null,i),a.lanes=s,a}function Pf(a,i,s){return i=xr(4,a.children!==null?a.children:[],a.key,i),i.lanes=s,i.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},i}var qi=[],$i=0,Fs=null,Zs=0,Dr=[],zr=0,Ha=null,jn=1,Sn="";function Ya(a,i){qi[$i++]=Zs,qi[$i++]=Fs,Fs=a,Zs=i}function Vx(a,i,s){Dr[zr++]=jn,Dr[zr++]=Sn,Dr[zr++]=Ha,Ha=a;var d=jn;a=Sn;var g=32-gr(d)-1;d&=~(1<<g),s+=1;var x=32-gr(i)+g;if(30<x){var O=g-g%5;x=(d&(1<<O)-1).toString(32),d>>=O,g-=O,jn=1<<32-gr(i)+g|s<<g|d,Sn=x+a}else jn=1<<x|s<<g|d,Sn=a}function Df(a){a.return!==null&&(Ya(a,1),Vx(a,1,0))}function zf(a){for(;a===Fs;)Fs=qi[--$i],qi[$i]=null,Zs=qi[--$i],qi[$i]=null;for(;a===Ha;)Ha=Dr[--zr],Dr[zr]=null,Sn=Dr[--zr],Dr[zr]=null,jn=Dr[--zr],Dr[zr]=null}var Jt=null,it=null,De=!1,Ga=null,sn=!1,Rf=Error(n(519));function Ka(a){var i=Error(n(418,""));throw tl(_r(i,a)),Rf}function Xx(a){var i=a.stateNode,s=a.type,d=a.memoizedProps;switch(i[Gt]=a,i[ar]=d,s){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(s=0;s<Ol.length;s++)Te(Ol[s],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),ux(i,d.value,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name,!0),Ls(i);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),fx(i,d.value,d.defaultValue,d.children),Ls(i)}s=d.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||d.suppressHydrationWarning===!0||f1(i.textContent,s)?(d.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),d.onScroll!=null&&Te("scroll",i),d.onScrollEnd!=null&&Te("scrollend",i),d.onClick!=null&&(i.onclick=Mc),i=!0):i=!1,i||Ka(a)}function Fx(a){for(Jt=a.return;Jt;)switch(Jt.tag){case 5:case 13:sn=!1;return;case 27:case 3:sn=!0;return;default:Jt=Jt.return}}function Jo(a){if(a!==Jt)return!1;if(!De)return Fx(a),De=!0,!1;var i=a.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=a.type,s=!(s!=="form"&&s!=="button")||Qp(a.type,a.memoizedProps)),s=!s),s&&it&&Ka(a),Fx(a),i===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(n(317));e:{for(a=a.nextSibling,i=0;a;){if(a.nodeType===8)if(s=a.data,s==="/$"){if(i===0){it=Qr(a.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;a=a.nextSibling}it=null}}else i===27?(i=it,wa(a.type)?(a=rh,rh=null,it=a):it=i):it=Jt?Qr(a.stateNode.nextSibling):null;return!0}function el(){it=Jt=null,De=!1}function Zx(){var a=Ga;return a!==null&&(sr===null?sr=a:sr.push.apply(sr,a),Ga=null),a}function tl(a){Ga===null?Ga=[a]:Ga.push(a)}var Lf=W(null),Wa=null,An=null;function oa(a,i,s){te(Lf,i._currentValue),i._currentValue=s}function On(a){a._currentValue=Lf.current,ne(Lf)}function Bf(a,i,s){for(;a!==null;){var d=a.alternate;if((a.childLanes&i)!==i?(a.childLanes|=i,d!==null&&(d.childLanes|=i)):d!==null&&(d.childLanes&i)!==i&&(d.childLanes|=i),a===s)break;a=a.return}}function If(a,i,s,d){var g=a.child;for(g!==null&&(g.return=a);g!==null;){var x=g.dependencies;if(x!==null){var O=g.child;x=x.firstContext;e:for(;x!==null;){var k=x;x=g;for(var M=0;M<i.length;M++)if(k.context===i[M]){x.lanes|=s,k=x.alternate,k!==null&&(k.lanes|=s),Bf(x.return,s,a),d||(O=null);break e}x=k.next}}else if(g.tag===18){if(O=g.return,O===null)throw Error(n(341));O.lanes|=s,x=O.alternate,x!==null&&(x.lanes|=s),Bf(O,s,a),O=null}else O=g.child;if(O!==null)O.return=g;else for(O=g;O!==null;){if(O===a){O=null;break}if(g=O.sibling,g!==null){g.return=O.return,O=g;break}O=O.return}g=O}}function rl(a,i,s,d){a=null;for(var g=i,x=!1;g!==null;){if(!x){if((g.flags&524288)!==0)x=!0;else if((g.flags&262144)!==0)break}if(g.tag===10){var O=g.alternate;if(O===null)throw Error(n(387));if(O=O.memoizedProps,O!==null){var k=g.type;vr(g.pendingProps.value,O.value)||(a!==null?a.push(k):a=[k])}}else if(g===$e.current){if(O=g.alternate,O===null)throw Error(n(387));O.memoizedState.memoizedState!==g.memoizedState.memoizedState&&(a!==null?a.push(Ml):a=[Ml])}g=g.return}a!==null&&If(i,a,s,d),i.flags|=262144}function Qs(a){for(a=a.firstContext;a!==null;){if(!vr(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Va(a){Wa=a,An=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function Kt(a){return Qx(Wa,a)}function Js(a,i){return Wa===null&&Va(a),Qx(a,i)}function Qx(a,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},An===null){if(a===null)throw Error(n(308));An=i,a.dependencies={lanes:0,firstContext:i},a.flags|=524288}else An=An.next=i;return s}var $4=typeof AbortController<"u"?AbortController:function(){var a=[],i=this.signal={aborted:!1,addEventListener:function(s,d){a.push(d)}};this.abort=function(){i.aborted=!0,a.forEach(function(s){return s()})}},U4=e.unstable_scheduleCallback,H4=e.unstable_NormalPriority,bt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new $4,data:new Map,refCount:0}}function nl(a){a.refCount--,a.refCount===0&&U4(H4,function(){a.controller.abort()})}var al=null,$f=0,Ui=0,Hi=null;function Y4(a,i){if(al===null){var s=al=[];$f=0,Ui=Hp(),Hi={status:"pending",value:void 0,then:function(d){s.push(d)}}}return $f++,i.then(Jx,Jx),i}function Jx(){if(--$f===0&&al!==null){Hi!==null&&(Hi.status="fulfilled");var a=al;al=null,Ui=0,Hi=null;for(var i=0;i<a.length;i++)(0,a[i])()}}function G4(a,i){var s=[],d={status:"pending",value:null,reason:null,then:function(g){s.push(g)}};return a.then(function(){d.status="fulfilled",d.value=i;for(var g=0;g<s.length;g++)(0,s[g])(i)},function(g){for(d.status="rejected",d.reason=g,g=0;g<s.length;g++)(0,s[g])(void 0)}),d}var ey=q.S;q.S=function(a,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Y4(a,i),ey!==null&&ey(a,i)};var Xa=W(null);function Uf(){var a=Xa.current;return a!==null?a:Xe.pooledCache}function ec(a,i){i===null?te(Xa,Xa.current):te(Xa,i.pool)}function ty(){var a=Uf();return a===null?null:{parent:bt._currentValue,pool:a}}var il=Error(n(460)),ry=Error(n(474)),tc=Error(n(542)),Hf={then:function(){}};function ny(a){return a=a.status,a==="fulfilled"||a==="rejected"}function rc(){}function ay(a,i,s){switch(s=a[s],s===void 0?a.push(i):s!==i&&(i.then(rc,rc),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw a=i.reason,oy(a),a;default:if(typeof i.status=="string")i.then(rc,rc);else{if(a=Xe,a!==null&&100<a.shellSuspendCounter)throw Error(n(482));a=i,a.status="pending",a.then(function(d){if(i.status==="pending"){var g=i;g.status="fulfilled",g.value=d}},function(d){if(i.status==="pending"){var g=i;g.status="rejected",g.reason=d}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw a=i.reason,oy(a),a}throw ol=i,il}}var ol=null;function iy(){if(ol===null)throw Error(n(459));var a=ol;return ol=null,a}function oy(a){if(a===il||a===tc)throw Error(n(483))}var la=!1;function Yf(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gf(a,i){a=a.updateQueue,i.updateQueue===a&&(i.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function sa(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function ca(a,i,s){var d=a.updateQueue;if(d===null)return null;if(d=d.shared,(Le&2)!==0){var g=d.pending;return g===null?i.next=i:(i.next=g.next,g.next=i),d.pending=i,i=Vs(a),Kx(a,null,s),i}return Ws(a,d,i,s),Vs(a)}function ll(a,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var d=i.lanes;d&=a.pendingLanes,s|=d,i.lanes=s,Jv(a,s)}}function Kf(a,i){var s=a.updateQueue,d=a.alternate;if(d!==null&&(d=d.updateQueue,s===d)){var g=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var O={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};x===null?g=x=O:x=x.next=O,s=s.next}while(s!==null);x===null?g=x=i:x=x.next=i}else g=x=i;s={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:d.shared,callbacks:d.callbacks},a.updateQueue=s;return}a=s.lastBaseUpdate,a===null?s.firstBaseUpdate=i:a.next=i,s.lastBaseUpdate=i}var Wf=!1;function sl(){if(Wf){var a=Hi;if(a!==null)throw a}}function cl(a,i,s,d){Wf=!1;var g=a.updateQueue;la=!1;var x=g.firstBaseUpdate,O=g.lastBaseUpdate,k=g.shared.pending;if(k!==null){g.shared.pending=null;var M=k,B=M.next;M.next=null,O===null?x=B:O.next=B,O=M;var Y=a.alternate;Y!==null&&(Y=Y.updateQueue,k=Y.lastBaseUpdate,k!==O&&(k===null?Y.firstBaseUpdate=B:k.next=B,Y.lastBaseUpdate=M))}if(x!==null){var V=g.baseState;O=0,Y=B=M=null,k=x;do{var I=k.lane&-536870913,$=I!==k.lane;if($?(Me&I)===I:(d&I)===I){I!==0&&I===Ui&&(Wf=!0),Y!==null&&(Y=Y.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var be=a,he=k;I=i;var Ge=s;switch(he.tag){case 1:if(be=he.payload,typeof be=="function"){V=be.call(Ge,V,I);break e}V=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=he.payload,I=typeof be=="function"?be.call(Ge,V,I):be,I==null)break e;V=m({},V,I);break e;case 2:la=!0}}I=k.callback,I!==null&&(a.flags|=64,$&&(a.flags|=8192),$=g.callbacks,$===null?g.callbacks=[I]:$.push(I))}else $={lane:I,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Y===null?(B=Y=$,M=V):Y=Y.next=$,O|=I;if(k=k.next,k===null){if(k=g.shared.pending,k===null)break;$=k,k=$.next,$.next=null,g.lastBaseUpdate=$,g.shared.pending=null}}while(!0);Y===null&&(M=V),g.baseState=M,g.firstBaseUpdate=B,g.lastBaseUpdate=Y,x===null&&(g.shared.lanes=0),va|=O,a.lanes=O,a.memoizedState=V}}function ly(a,i){if(typeof a!="function")throw Error(n(191,a));a.call(i)}function sy(a,i){var s=a.callbacks;if(s!==null)for(a.callbacks=null,a=0;a<s.length;a++)ly(s[a],i)}var Yi=W(null),nc=W(0);function cy(a,i){a=_n,te(nc,a),te(Yi,i),_n=a|i.baseLanes}function Vf(){te(nc,_n),te(Yi,Yi.current)}function Xf(){_n=nc.current,ne(Yi),ne(nc)}var ua=0,Ae=null,He=null,mt=null,ac=!1,Gi=!1,Fa=!1,ic=0,ul=0,Ki=null,K4=0;function ct(){throw Error(n(321))}function Ff(a,i){if(i===null)return!1;for(var s=0;s<i.length&&s<a.length;s++)if(!vr(a[s],i[s]))return!1;return!0}function Zf(a,i,s,d,g,x){return ua=x,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,q.H=a===null||a.memoizedState===null?Ky:Wy,Fa=!1,x=s(d,g),Fa=!1,Gi&&(x=dy(i,s,d,g)),uy(a),x}function uy(a){q.H=dc;var i=He!==null&&He.next!==null;if(ua=0,mt=He=Ae=null,ac=!1,ul=0,Ki=null,i)throw Error(n(300));a===null||Mt||(a=a.dependencies,a!==null&&Qs(a)&&(Mt=!0))}function dy(a,i,s,d){Ae=a;var g=0;do{if(Gi&&(Ki=null),ul=0,Gi=!1,25<=g)throw Error(n(301));if(g+=1,mt=He=null,a.updateQueue!=null){var x=a.updateQueue;x.lastEffect=null,x.events=null,x.stores=null,x.memoCache!=null&&(x.memoCache.index=0)}q.H=J4,x=i(s,d)}while(Gi);return x}function W4(){var a=q.H,i=a.useState()[0];return i=typeof i.then=="function"?dl(i):i,a=a.useState()[0],(He!==null?He.memoizedState:null)!==a&&(Ae.flags|=1024),i}function Qf(){var a=ic!==0;return ic=0,a}function Jf(a,i,s){i.updateQueue=a.updateQueue,i.flags&=-2053,a.lanes&=~s}function ep(a){if(ac){for(a=a.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}ac=!1}ua=0,mt=He=Ae=null,Gi=!1,ul=ic=0,Ki=null}function or(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ae.memoizedState=mt=a:mt=mt.next=a,mt}function gt(){if(He===null){var a=Ae.alternate;a=a!==null?a.memoizedState:null}else a=He.next;var i=mt===null?Ae.memoizedState:mt.next;if(i!==null)mt=i,He=a;else{if(a===null)throw Ae.alternate===null?Error(n(467)):Error(n(310));He=a,a={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},mt===null?Ae.memoizedState=mt=a:mt=mt.next=a}return mt}function tp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dl(a){var i=ul;return ul+=1,Ki===null&&(Ki=[]),a=ay(Ki,a,i),i=Ae,(mt===null?i.memoizedState:mt.next)===null&&(i=i.alternate,q.H=i===null||i.memoizedState===null?Ky:Wy),a}function oc(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return dl(a);if(a.$$typeof===N)return Kt(a)}throw Error(n(438,String(a)))}function rp(a){var i=null,s=Ae.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var d=Ae.alternate;d!==null&&(d=d.updateQueue,d!==null&&(d=d.memoCache,d!=null&&(i={data:d.data.map(function(g){return g.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=tp(),Ae.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(a),d=0;d<a;d++)s[d]=ae;return i.index++,s}function En(a,i){return typeof i=="function"?i(a):i}function lc(a){var i=gt();return np(i,He,a)}function np(a,i,s){var d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var g=a.baseQueue,x=d.pending;if(x!==null){if(g!==null){var O=g.next;g.next=x.next,x.next=O}i.baseQueue=g=x,d.pending=null}if(x=a.baseState,g===null)a.memoizedState=x;else{i=g.next;var k=O=null,M=null,B=i,Y=!1;do{var V=B.lane&-536870913;if(V!==B.lane?(Me&V)===V:(ua&V)===V){var I=B.revertLane;if(I===0)M!==null&&(M=M.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),V===Ui&&(Y=!0);else if((ua&I)===I){B=B.next,I===Ui&&(Y=!0);continue}else V={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(k=M=V,O=x):M=M.next=V,Ae.lanes|=I,va|=I;V=B.action,Fa&&s(x,V),x=B.hasEagerState?B.eagerState:s(x,V)}else I={lane:V,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(k=M=I,O=x):M=M.next=I,Ae.lanes|=V,va|=V;B=B.next}while(B!==null&&B!==i);if(M===null?O=x:M.next=k,!vr(x,a.memoizedState)&&(Mt=!0,Y&&(s=Hi,s!==null)))throw s;a.memoizedState=x,a.baseState=O,a.baseQueue=M,d.lastRenderedState=x}return g===null&&(d.lanes=0),[a.memoizedState,d.dispatch]}function ap(a){var i=gt(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=a;var d=s.dispatch,g=s.pending,x=i.memoizedState;if(g!==null){s.pending=null;var O=g=g.next;do x=a(x,O.action),O=O.next;while(O!==g);vr(x,i.memoizedState)||(Mt=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),s.lastRenderedState=x}return[x,d]}function fy(a,i,s){var d=Ae,g=gt(),x=De;if(x){if(s===void 0)throw Error(n(407));s=s()}else s=i();var O=!vr((He||g).memoizedState,s);O&&(g.memoizedState=s,Mt=!0),g=g.queue;var k=my.bind(null,d,g,a);if(fl(2048,8,k,[a]),g.getSnapshot!==i||O||mt!==null&&mt.memoizedState.tag&1){if(d.flags|=2048,Wi(9,sc(),hy.bind(null,d,g,s,i),null),Xe===null)throw Error(n(349));x||(ua&124)!==0||py(d,i,s)}return s}function py(a,i,s){a.flags|=16384,a={getSnapshot:i,value:s},i=Ae.updateQueue,i===null?(i=tp(),Ae.updateQueue=i,i.stores=[a]):(s=i.stores,s===null?i.stores=[a]:s.push(a))}function hy(a,i,s,d){i.value=s,i.getSnapshot=d,gy(i)&&vy(a)}function my(a,i,s){return s(function(){gy(i)&&vy(a)})}function gy(a){var i=a.getSnapshot;a=a.value;try{var s=i();return!vr(a,s)}catch{return!0}}function vy(a){var i=Bi(a,2);i!==null&&Sr(i,a,2)}function ip(a){var i=or();if(typeof a=="function"){var s=a;if(a=s(),Fa){na(!0);try{s()}finally{na(!1)}}}return i.memoizedState=i.baseState=a,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:a},i}function xy(a,i,s,d){return a.baseState=s,np(a,He,typeof d=="function"?d:En)}function V4(a,i,s,d,g){if(uc(a))throw Error(n(485));if(a=i.action,a!==null){var x={payload:g,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(O){x.listeners.push(O)}};q.T!==null?s(!0):x.isTransition=!1,d(x),s=i.pending,s===null?(x.next=i.pending=x,yy(i,x)):(x.next=s.next,i.pending=s.next=x)}}function yy(a,i){var s=i.action,d=i.payload,g=a.state;if(i.isTransition){var x=q.T,O={};q.T=O;try{var k=s(g,d),M=q.S;M!==null&&M(O,k),by(a,i,k)}catch(B){op(a,i,B)}finally{q.T=x}}else try{x=s(g,d),by(a,i,x)}catch(B){op(a,i,B)}}function by(a,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(d){wy(a,i,d)},function(d){return op(a,i,d)}):wy(a,i,s)}function wy(a,i,s){i.status="fulfilled",i.value=s,jy(i),a.state=s,i=a.pending,i!==null&&(s=i.next,s===i?a.pending=null:(s=s.next,i.next=s,yy(a,s)))}function op(a,i,s){var d=a.pending;if(a.pending=null,d!==null){d=d.next;do i.status="rejected",i.reason=s,jy(i),i=i.next;while(i!==d)}a.action=null}function jy(a){a=a.listeners;for(var i=0;i<a.length;i++)(0,a[i])()}function Sy(a,i){return i}function Ay(a,i){if(De){var s=Xe.formState;if(s!==null){e:{var d=Ae;if(De){if(it){t:{for(var g=it,x=sn;g.nodeType!==8;){if(!x){g=null;break t}if(g=Qr(g.nextSibling),g===null){g=null;break t}}x=g.data,g=x==="F!"||x==="F"?g:null}if(g){it=Qr(g.nextSibling),d=g.data==="F!";break e}}Ka(d)}d=!1}d&&(i=s[0])}}return s=or(),s.memoizedState=s.baseState=i,d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sy,lastRenderedState:i},s.queue=d,s=Hy.bind(null,Ae,d),d.dispatch=s,d=ip(!1),x=dp.bind(null,Ae,!1,d.queue),d=or(),g={state:i,dispatch:null,action:a,pending:null},d.queue=g,s=V4.bind(null,Ae,g,x,s),g.dispatch=s,d.memoizedState=a,[i,s,!1]}function Oy(a){var i=gt();return Ey(i,He,a)}function Ey(a,i,s){if(i=np(a,i,Sy)[0],a=lc(En)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var d=dl(i)}catch(O){throw O===il?tc:O}else d=i;i=gt();var g=i.queue,x=g.dispatch;return s!==i.memoizedState&&(Ae.flags|=2048,Wi(9,sc(),X4.bind(null,g,s),null)),[d,x,a]}function X4(a,i){a.action=i}function ky(a){var i=gt(),s=He;if(s!==null)return Ey(i,s,a);gt(),i=i.memoizedState,s=gt();var d=s.queue.dispatch;return s.memoizedState=a,[i,d,!1]}function Wi(a,i,s,d){return a={tag:a,create:s,deps:d,inst:i,next:null},i=Ae.updateQueue,i===null&&(i=tp(),Ae.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=a.next=a:(d=s.next,s.next=a,a.next=d,i.lastEffect=a),a}function sc(){return{destroy:void 0,resource:void 0}}function Ny(){return gt().memoizedState}function cc(a,i,s,d){var g=or();d=d===void 0?null:d,Ae.flags|=a,g.memoizedState=Wi(1|i,sc(),s,d)}function fl(a,i,s,d){var g=gt();d=d===void 0?null:d;var x=g.memoizedState.inst;He!==null&&d!==null&&Ff(d,He.memoizedState.deps)?g.memoizedState=Wi(i,x,s,d):(Ae.flags|=a,g.memoizedState=Wi(1|i,x,s,d))}function Cy(a,i){cc(8390656,8,a,i)}function Ty(a,i){fl(2048,8,a,i)}function My(a,i){return fl(4,2,a,i)}function _y(a,i){return fl(4,4,a,i)}function Py(a,i){if(typeof i=="function"){a=a();var s=i(a);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return a=a(),i.current=a,function(){i.current=null}}function Dy(a,i,s){s=s!=null?s.concat([a]):null,fl(4,4,Py.bind(null,i,a),s)}function lp(){}function zy(a,i){var s=gt();i=i===void 0?null:i;var d=s.memoizedState;return i!==null&&Ff(i,d[1])?d[0]:(s.memoizedState=[a,i],a)}function Ry(a,i){var s=gt();i=i===void 0?null:i;var d=s.memoizedState;if(i!==null&&Ff(i,d[1]))return d[0];if(d=a(),Fa){na(!0);try{a()}finally{na(!1)}}return s.memoizedState=[d,i],d}function sp(a,i,s){return s===void 0||(ua&1073741824)!==0?a.memoizedState=i:(a.memoizedState=s,a=Ib(),Ae.lanes|=a,va|=a,s)}function Ly(a,i,s,d){return vr(s,i)?s:Yi.current!==null?(a=sp(a,s,d),vr(a,i)||(Mt=!0),a):(ua&42)===0?(Mt=!0,a.memoizedState=s):(a=Ib(),Ae.lanes|=a,va|=a,i)}function By(a,i,s,d,g){var x=G.p;G.p=x!==0&&8>x?x:8;var O=q.T,k={};q.T=k,dp(a,!1,i,s);try{var M=g(),B=q.S;if(B!==null&&B(k,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var Y=G4(M,d);pl(a,i,Y,jr(a))}else pl(a,i,d,jr(a))}catch(V){pl(a,i,{then:function(){},status:"rejected",reason:V},jr())}finally{G.p=x,q.T=O}}function F4(){}function cp(a,i,s,d){if(a.tag!==5)throw Error(n(476));var g=Iy(a).queue;By(a,g,i,re,s===null?F4:function(){return qy(a),s(d)})}function Iy(a){var i=a.memoizedState;if(i!==null)return i;i={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:re},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:s},next:null},a.memoizedState=i,a=a.alternate,a!==null&&(a.memoizedState=i),i}function qy(a){var i=Iy(a).next.queue;pl(a,i,{},jr())}function up(){return Kt(Ml)}function $y(){return gt().memoizedState}function Uy(){return gt().memoizedState}function Z4(a){for(var i=a.return;i!==null;){switch(i.tag){case 24:case 3:var s=jr();a=sa(s);var d=ca(i,a,s);d!==null&&(Sr(d,i,s),ll(d,i,s)),i={cache:qf()},a.payload=i;return}i=i.return}}function Q4(a,i,s){var d=jr();s={lane:d,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},uc(a)?Yy(i,s):(s=Tf(a,i,s,d),s!==null&&(Sr(s,a,d),Gy(s,i,d)))}function Hy(a,i,s){var d=jr();pl(a,i,s,d)}function pl(a,i,s,d){var g={lane:d,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(uc(a))Yy(i,g);else{var x=a.alternate;if(a.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var O=i.lastRenderedState,k=x(O,s);if(g.hasEagerState=!0,g.eagerState=k,vr(k,O))return Ws(a,i,g,0),Xe===null&&Ks(),!1}catch{}finally{}if(s=Tf(a,i,g,d),s!==null)return Sr(s,a,d),Gy(s,i,d),!0}return!1}function dp(a,i,s,d){if(d={lane:2,revertLane:Hp(),action:d,hasEagerState:!1,eagerState:null,next:null},uc(a)){if(i)throw Error(n(479))}else i=Tf(a,s,d,2),i!==null&&Sr(i,a,2)}function uc(a){var i=a.alternate;return a===Ae||i!==null&&i===Ae}function Yy(a,i){Gi=ac=!0;var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}function Gy(a,i,s){if((s&4194048)!==0){var d=i.lanes;d&=a.pendingLanes,s|=d,i.lanes=s,Jv(a,s)}}var dc={readContext:Kt,use:oc,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct},Ky={readContext:Kt,use:oc,useCallback:function(a,i){return or().memoizedState=[a,i===void 0?null:i],a},useContext:Kt,useEffect:Cy,useImperativeHandle:function(a,i,s){s=s!=null?s.concat([a]):null,cc(4194308,4,Py.bind(null,i,a),s)},useLayoutEffect:function(a,i){return cc(4194308,4,a,i)},useInsertionEffect:function(a,i){cc(4,2,a,i)},useMemo:function(a,i){var s=or();i=i===void 0?null:i;var d=a();if(Fa){na(!0);try{a()}finally{na(!1)}}return s.memoizedState=[d,i],d},useReducer:function(a,i,s){var d=or();if(s!==void 0){var g=s(i);if(Fa){na(!0);try{s(i)}finally{na(!1)}}}else g=i;return d.memoizedState=d.baseState=g,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:g},d.queue=a,a=a.dispatch=Q4.bind(null,Ae,a),[d.memoizedState,a]},useRef:function(a){var i=or();return a={current:a},i.memoizedState=a},useState:function(a){a=ip(a);var i=a.queue,s=Hy.bind(null,Ae,i);return i.dispatch=s,[a.memoizedState,s]},useDebugValue:lp,useDeferredValue:function(a,i){var s=or();return sp(s,a,i)},useTransition:function(){var a=ip(!1);return a=By.bind(null,Ae,a.queue,!0,!1),or().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,i,s){var d=Ae,g=or();if(De){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Xe===null)throw Error(n(349));(Me&124)!==0||py(d,i,s)}g.memoizedState=s;var x={value:s,getSnapshot:i};return g.queue=x,Cy(my.bind(null,d,x,a),[a]),d.flags|=2048,Wi(9,sc(),hy.bind(null,d,x,s,i),null),s},useId:function(){var a=or(),i=Xe.identifierPrefix;if(De){var s=Sn,d=jn;s=(d&~(1<<32-gr(d)-1)).toString(32)+s,i="«"+i+"R"+s,s=ic++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=K4++,i="«"+i+"r"+s.toString(32)+"»";return a.memoizedState=i},useHostTransitionStatus:up,useFormState:Ay,useActionState:Ay,useOptimistic:function(a){var i=or();i.memoizedState=i.baseState=a;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=dp.bind(null,Ae,!0,s),s.dispatch=i,[a,i]},useMemoCache:rp,useCacheRefresh:function(){return or().memoizedState=Z4.bind(null,Ae)}},Wy={readContext:Kt,use:oc,useCallback:zy,useContext:Kt,useEffect:Ty,useImperativeHandle:Dy,useInsertionEffect:My,useLayoutEffect:_y,useMemo:Ry,useReducer:lc,useRef:Ny,useState:function(){return lc(En)},useDebugValue:lp,useDeferredValue:function(a,i){var s=gt();return Ly(s,He.memoizedState,a,i)},useTransition:function(){var a=lc(En)[0],i=gt().memoizedState;return[typeof a=="boolean"?a:dl(a),i]},useSyncExternalStore:fy,useId:$y,useHostTransitionStatus:up,useFormState:Oy,useActionState:Oy,useOptimistic:function(a,i){var s=gt();return xy(s,He,a,i)},useMemoCache:rp,useCacheRefresh:Uy},J4={readContext:Kt,use:oc,useCallback:zy,useContext:Kt,useEffect:Ty,useImperativeHandle:Dy,useInsertionEffect:My,useLayoutEffect:_y,useMemo:Ry,useReducer:ap,useRef:Ny,useState:function(){return ap(En)},useDebugValue:lp,useDeferredValue:function(a,i){var s=gt();return He===null?sp(s,a,i):Ly(s,He.memoizedState,a,i)},useTransition:function(){var a=ap(En)[0],i=gt().memoizedState;return[typeof a=="boolean"?a:dl(a),i]},useSyncExternalStore:fy,useId:$y,useHostTransitionStatus:up,useFormState:ky,useActionState:ky,useOptimistic:function(a,i){var s=gt();return He!==null?xy(s,He,a,i):(s.baseState=a,[a,s.queue.dispatch])},useMemoCache:rp,useCacheRefresh:Uy},Vi=null,hl=0;function fc(a){var i=hl;return hl+=1,Vi===null&&(Vi=[]),ay(Vi,a,i)}function ml(a,i){i=i.props.ref,a.ref=i!==void 0?i:null}function pc(a,i){throw i.$$typeof===v?Error(n(525)):(a=Object.prototype.toString.call(i),Error(n(31,a==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":a)))}function Vy(a){var i=a._init;return i(a._payload)}function Xy(a){function i(R,D){if(a){var L=R.deletions;L===null?(R.deletions=[D],R.flags|=16):L.push(D)}}function s(R,D){if(!a)return null;for(;D!==null;)i(R,D),D=D.sibling;return null}function d(R){for(var D=new Map;R!==null;)R.key!==null?D.set(R.key,R):D.set(R.index,R),R=R.sibling;return D}function g(R,D){return R=wn(R,D),R.index=0,R.sibling=null,R}function x(R,D,L){return R.index=L,a?(L=R.alternate,L!==null?(L=L.index,L<D?(R.flags|=67108866,D):L):(R.flags|=67108866,D)):(R.flags|=1048576,D)}function O(R){return a&&R.alternate===null&&(R.flags|=67108866),R}function k(R,D,L,K){return D===null||D.tag!==6?(D=_f(L,R.mode,K),D.return=R,D):(D=g(D,L),D.return=R,D)}function M(R,D,L,K){var se=L.type;return se===A?Y(R,D,L.props.children,K,L.key):D!==null&&(D.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===X&&Vy(se)===D.type)?(D=g(D,L.props),ml(D,L),D.return=R,D):(D=Xs(L.type,L.key,L.props,null,R.mode,K),ml(D,L),D.return=R,D)}function B(R,D,L,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=Pf(L,R.mode,K),D.return=R,D):(D=g(D,L.children||[]),D.return=R,D)}function Y(R,D,L,K,se){return D===null||D.tag!==7?(D=Ua(L,R.mode,K,se),D.return=R,D):(D=g(D,L),D.return=R,D)}function V(R,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=_f(""+D,R.mode,L),D.return=R,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case b:return L=Xs(D.type,D.key,D.props,null,R.mode,L),ml(L,D),L.return=R,L;case w:return D=Pf(D,R.mode,L),D.return=R,D;case X:var K=D._init;return D=K(D._payload),V(R,D,L)}if(ye(D)||Q(D))return D=Ua(D,R.mode,L,null),D.return=R,D;if(typeof D.then=="function")return V(R,fc(D),L);if(D.$$typeof===N)return V(R,Js(R,D),L);pc(R,D)}return null}function I(R,D,L,K){var se=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return se!==null?null:k(R,D,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case b:return L.key===se?M(R,D,L,K):null;case w:return L.key===se?B(R,D,L,K):null;case X:return se=L._init,L=se(L._payload),I(R,D,L,K)}if(ye(L)||Q(L))return se!==null?null:Y(R,D,L,K,null);if(typeof L.then=="function")return I(R,D,fc(L),K);if(L.$$typeof===N)return I(R,D,Js(R,L),K);pc(R,L)}return null}function $(R,D,L,K,se){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return R=R.get(L)||null,k(D,R,""+K,se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case b:return R=R.get(K.key===null?L:K.key)||null,M(D,R,K,se);case w:return R=R.get(K.key===null?L:K.key)||null,B(D,R,K,se);case X:var Ee=K._init;return K=Ee(K._payload),$(R,D,L,K,se)}if(ye(K)||Q(K))return R=R.get(L)||null,Y(D,R,K,se,null);if(typeof K.then=="function")return $(R,D,L,fc(K),se);if(K.$$typeof===N)return $(R,D,L,Js(D,K),se);pc(D,K)}return null}function be(R,D,L,K){for(var se=null,Ee=null,fe=D,ve=D=0,Pt=null;fe!==null&&ve<L.length;ve++){fe.index>ve?(Pt=fe,fe=null):Pt=fe.sibling;var _e=I(R,fe,L[ve],K);if(_e===null){fe===null&&(fe=Pt);break}a&&fe&&_e.alternate===null&&i(R,fe),D=x(_e,D,ve),Ee===null?se=_e:Ee.sibling=_e,Ee=_e,fe=Pt}if(ve===L.length)return s(R,fe),De&&Ya(R,ve),se;if(fe===null){for(;ve<L.length;ve++)fe=V(R,L[ve],K),fe!==null&&(D=x(fe,D,ve),Ee===null?se=fe:Ee.sibling=fe,Ee=fe);return De&&Ya(R,ve),se}for(fe=d(fe);ve<L.length;ve++)Pt=$(fe,R,ve,L[ve],K),Pt!==null&&(a&&Pt.alternate!==null&&fe.delete(Pt.key===null?ve:Pt.key),D=x(Pt,D,ve),Ee===null?se=Pt:Ee.sibling=Pt,Ee=Pt);return a&&fe.forEach(function(Ea){return i(R,Ea)}),De&&Ya(R,ve),se}function he(R,D,L,K){if(L==null)throw Error(n(151));for(var se=null,Ee=null,fe=D,ve=D=0,Pt=null,_e=L.next();fe!==null&&!_e.done;ve++,_e=L.next()){fe.index>ve?(Pt=fe,fe=null):Pt=fe.sibling;var Ea=I(R,fe,_e.value,K);if(Ea===null){fe===null&&(fe=Pt);break}a&&fe&&Ea.alternate===null&&i(R,fe),D=x(Ea,D,ve),Ee===null?se=Ea:Ee.sibling=Ea,Ee=Ea,fe=Pt}if(_e.done)return s(R,fe),De&&Ya(R,ve),se;if(fe===null){for(;!_e.done;ve++,_e=L.next())_e=V(R,_e.value,K),_e!==null&&(D=x(_e,D,ve),Ee===null?se=_e:Ee.sibling=_e,Ee=_e);return De&&Ya(R,ve),se}for(fe=d(fe);!_e.done;ve++,_e=L.next())_e=$(fe,R,ve,_e.value,K),_e!==null&&(a&&_e.alternate!==null&&fe.delete(_e.key===null?ve:_e.key),D=x(_e,D,ve),Ee===null?se=_e:Ee.sibling=_e,Ee=_e);return a&&fe.forEach(function(eC){return i(R,eC)}),De&&Ya(R,ve),se}function Ge(R,D,L,K){if(typeof L=="object"&&L!==null&&L.type===A&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case b:e:{for(var se=L.key;D!==null;){if(D.key===se){if(se=L.type,se===A){if(D.tag===7){s(R,D.sibling),K=g(D,L.props.children),K.return=R,R=K;break e}}else if(D.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===X&&Vy(se)===D.type){s(R,D.sibling),K=g(D,L.props),ml(K,L),K.return=R,R=K;break e}s(R,D);break}else i(R,D);D=D.sibling}L.type===A?(K=Ua(L.props.children,R.mode,K,L.key),K.return=R,R=K):(K=Xs(L.type,L.key,L.props,null,R.mode,K),ml(K,L),K.return=R,R=K)}return O(R);case w:e:{for(se=L.key;D!==null;){if(D.key===se)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){s(R,D.sibling),K=g(D,L.children||[]),K.return=R,R=K;break e}else{s(R,D);break}else i(R,D);D=D.sibling}K=Pf(L,R.mode,K),K.return=R,R=K}return O(R);case X:return se=L._init,L=se(L._payload),Ge(R,D,L,K)}if(ye(L))return be(R,D,L,K);if(Q(L)){if(se=Q(L),typeof se!="function")throw Error(n(150));return L=se.call(L),he(R,D,L,K)}if(typeof L.then=="function")return Ge(R,D,fc(L),K);if(L.$$typeof===N)return Ge(R,D,Js(R,L),K);pc(R,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(s(R,D.sibling),K=g(D,L),K.return=R,R=K):(s(R,D),K=_f(L,R.mode,K),K.return=R,R=K),O(R)):s(R,D)}return function(R,D,L,K){try{hl=0;var se=Ge(R,D,L,K);return Vi=null,se}catch(fe){if(fe===il||fe===tc)throw fe;var Ee=xr(29,fe,null,R.mode);return Ee.lanes=K,Ee.return=R,Ee}finally{}}}var Xi=Xy(!0),Fy=Xy(!1),Rr=W(null),cn=null;function da(a){var i=a.alternate;te(wt,wt.current&1),te(Rr,a),cn===null&&(i===null||Yi.current!==null||i.memoizedState!==null)&&(cn=a)}function Zy(a){if(a.tag===22){if(te(wt,wt.current),te(Rr,a),cn===null){var i=a.alternate;i!==null&&i.memoizedState!==null&&(cn=a)}}else fa()}function fa(){te(wt,wt.current),te(Rr,Rr.current)}function kn(a){ne(Rr),cn===a&&(cn=null),ne(wt)}var wt=W(0);function hc(a){for(var i=a;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||th(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function fp(a,i,s,d){i=a.memoizedState,s=s(d,i),s=s==null?i:m({},i,s),a.memoizedState=s,a.lanes===0&&(a.updateQueue.baseState=s)}var pp={enqueueSetState:function(a,i,s){a=a._reactInternals;var d=jr(),g=sa(d);g.payload=i,s!=null&&(g.callback=s),i=ca(a,g,d),i!==null&&(Sr(i,a,d),ll(i,a,d))},enqueueReplaceState:function(a,i,s){a=a._reactInternals;var d=jr(),g=sa(d);g.tag=1,g.payload=i,s!=null&&(g.callback=s),i=ca(a,g,d),i!==null&&(Sr(i,a,d),ll(i,a,d))},enqueueForceUpdate:function(a,i){a=a._reactInternals;var s=jr(),d=sa(s);d.tag=2,i!=null&&(d.callback=i),i=ca(a,d,s),i!==null&&(Sr(i,a,s),ll(i,a,s))}};function Qy(a,i,s,d,g,x,O){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(d,x,O):i.prototype&&i.prototype.isPureReactComponent?!Zo(s,d)||!Zo(g,x):!0}function Jy(a,i,s,d){a=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,d),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,d),i.state!==a&&pp.enqueueReplaceState(i,i.state,null)}function Za(a,i){var s=i;if("ref"in i){s={};for(var d in i)d!=="ref"&&(s[d]=i[d])}if(a=a.defaultProps){s===i&&(s=m({},s));for(var g in a)s[g]===void 0&&(s[g]=a[g])}return s}var mc=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)};function eb(a){mc(a)}function tb(a){console.error(a)}function rb(a){mc(a)}function gc(a,i){try{var s=a.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(d){setTimeout(function(){throw d})}}function nb(a,i,s){try{var d=a.onCaughtError;d(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(g){setTimeout(function(){throw g})}}function hp(a,i,s){return s=sa(s),s.tag=3,s.payload={element:null},s.callback=function(){gc(a,i)},s}function ab(a){return a=sa(a),a.tag=3,a}function ib(a,i,s,d){var g=s.type.getDerivedStateFromError;if(typeof g=="function"){var x=d.value;a.payload=function(){return g(x)},a.callback=function(){nb(i,s,d)}}var O=s.stateNode;O!==null&&typeof O.componentDidCatch=="function"&&(a.callback=function(){nb(i,s,d),typeof g!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var k=d.stack;this.componentDidCatch(d.value,{componentStack:k!==null?k:""})})}function eN(a,i,s,d,g){if(s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){if(i=s.alternate,i!==null&&rl(i,s,g,!0),s=Rr.current,s!==null){switch(s.tag){case 13:return cn===null?Bp():s.alternate===null&&ot===0&&(ot=3),s.flags&=-257,s.flags|=65536,s.lanes=g,d===Hf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([d]):i.add(d),qp(a,d,g)),!1;case 22:return s.flags|=65536,d===Hf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([d])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([d]):s.add(d)),qp(a,d,g)),!1}throw Error(n(435,s.tag))}return qp(a,d,g),Bp(),!1}if(De)return i=Rr.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=g,d!==Rf&&(a=Error(n(422),{cause:d}),tl(_r(a,s)))):(d!==Rf&&(i=Error(n(423),{cause:d}),tl(_r(i,s))),a=a.current.alternate,a.flags|=65536,g&=-g,a.lanes|=g,d=_r(d,s),g=hp(a.stateNode,d,g),Kf(a,g),ot!==4&&(ot=2)),!1;var x=Error(n(520),{cause:d});if(x=_r(x,s),jl===null?jl=[x]:jl.push(x),ot!==4&&(ot=2),i===null)return!0;d=_r(d,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,a=g&-g,s.lanes|=a,a=hp(s.stateNode,d,a),Kf(s,a),!1;case 1:if(i=s.type,x=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xa===null||!xa.has(x))))return s.flags|=65536,g&=-g,s.lanes|=g,g=ab(g),ib(g,a,s,d),Kf(s,g),!1}s=s.return}while(s!==null);return!1}var ob=Error(n(461)),Mt=!1;function It(a,i,s,d){i.child=a===null?Fy(i,null,s,d):Xi(i,a.child,s,d)}function lb(a,i,s,d,g){s=s.render;var x=i.ref;if("ref"in d){var O={};for(var k in d)k!=="ref"&&(O[k]=d[k])}else O=d;return Va(i),d=Zf(a,i,s,O,x,g),k=Qf(),a!==null&&!Mt?(Jf(a,i,g),Nn(a,i,g)):(De&&k&&Df(i),i.flags|=1,It(a,i,d,g),i.child)}function sb(a,i,s,d,g){if(a===null){var x=s.type;return typeof x=="function"&&!Mf(x)&&x.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=x,cb(a,i,x,d,g)):(a=Xs(s.type,null,d,i,i.mode,g),a.ref=i.ref,a.return=i,i.child=a)}if(x=a.child,!jp(a,g)){var O=x.memoizedProps;if(s=s.compare,s=s!==null?s:Zo,s(O,d)&&a.ref===i.ref)return Nn(a,i,g)}return i.flags|=1,a=wn(x,d),a.ref=i.ref,a.return=i,i.child=a}function cb(a,i,s,d,g){if(a!==null){var x=a.memoizedProps;if(Zo(x,d)&&a.ref===i.ref)if(Mt=!1,i.pendingProps=d=x,jp(a,g))(a.flags&131072)!==0&&(Mt=!0);else return i.lanes=a.lanes,Nn(a,i,g)}return mp(a,i,s,d,g)}function ub(a,i,s){var d=i.pendingProps,g=d.children,x=a!==null?a.memoizedState:null;if(d.mode==="hidden"){if((i.flags&128)!==0){if(d=x!==null?x.baseLanes|s:s,a!==null){for(g=i.child=a.child,x=0;g!==null;)x=x|g.lanes|g.childLanes,g=g.sibling;i.childLanes=x&~d}else i.childLanes=0,i.child=null;return db(a,i,d,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},a!==null&&ec(i,x!==null?x.cachePool:null),x!==null?cy(i,x):Vf(),Zy(i);else return i.lanes=i.childLanes=536870912,db(a,i,x!==null?x.baseLanes|s:s,s)}else x!==null?(ec(i,x.cachePool),cy(i,x),fa(),i.memoizedState=null):(a!==null&&ec(i,null),Vf(),fa());return It(a,i,g,s),i.child}function db(a,i,s,d){var g=Uf();return g=g===null?null:{parent:bt._currentValue,pool:g},i.memoizedState={baseLanes:s,cachePool:g},a!==null&&ec(i,null),Vf(),Zy(i),a!==null&&rl(a,i,d,!0),null}function vc(a,i){var s=i.ref;if(s===null)a!==null&&a.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(n(284));(a===null||a.ref!==s)&&(i.flags|=4194816)}}function mp(a,i,s,d,g){return Va(i),s=Zf(a,i,s,d,void 0,g),d=Qf(),a!==null&&!Mt?(Jf(a,i,g),Nn(a,i,g)):(De&&d&&Df(i),i.flags|=1,It(a,i,s,g),i.child)}function fb(a,i,s,d,g,x){return Va(i),i.updateQueue=null,s=dy(i,d,s,g),uy(a),d=Qf(),a!==null&&!Mt?(Jf(a,i,x),Nn(a,i,x)):(De&&d&&Df(i),i.flags|=1,It(a,i,s,x),i.child)}function pb(a,i,s,d,g){if(Va(i),i.stateNode===null){var x=Ii,O=s.contextType;typeof O=="object"&&O!==null&&(x=Kt(O)),x=new s(d,x),i.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,x.updater=pp,i.stateNode=x,x._reactInternals=i,x=i.stateNode,x.props=d,x.state=i.memoizedState,x.refs={},Yf(i),O=s.contextType,x.context=typeof O=="object"&&O!==null?Kt(O):Ii,x.state=i.memoizedState,O=s.getDerivedStateFromProps,typeof O=="function"&&(fp(i,s,O,d),x.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(O=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),O!==x.state&&pp.enqueueReplaceState(x,x.state,null),cl(i,d,x,g),sl(),x.state=i.memoizedState),typeof x.componentDidMount=="function"&&(i.flags|=4194308),d=!0}else if(a===null){x=i.stateNode;var k=i.memoizedProps,M=Za(s,k);x.props=M;var B=x.context,Y=s.contextType;O=Ii,typeof Y=="object"&&Y!==null&&(O=Kt(Y));var V=s.getDerivedStateFromProps;Y=typeof V=="function"||typeof x.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,Y||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(k||B!==O)&&Jy(i,x,d,O),la=!1;var I=i.memoizedState;x.state=I,cl(i,d,x,g),sl(),B=i.memoizedState,k||I!==B||la?(typeof V=="function"&&(fp(i,s,V,d),B=i.memoizedState),(M=la||Qy(i,s,M,d,I,B,O))?(Y||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(i.flags|=4194308)):(typeof x.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=d,i.memoizedState=B),x.props=d,x.state=B,x.context=O,d=M):(typeof x.componentDidMount=="function"&&(i.flags|=4194308),d=!1)}else{x=i.stateNode,Gf(a,i),O=i.memoizedProps,Y=Za(s,O),x.props=Y,V=i.pendingProps,I=x.context,B=s.contextType,M=Ii,typeof B=="object"&&B!==null&&(M=Kt(B)),k=s.getDerivedStateFromProps,(B=typeof k=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(O!==V||I!==M)&&Jy(i,x,d,M),la=!1,I=i.memoizedState,x.state=I,cl(i,d,x,g),sl();var $=i.memoizedState;O!==V||I!==$||la||a!==null&&a.dependencies!==null&&Qs(a.dependencies)?(typeof k=="function"&&(fp(i,s,k,d),$=i.memoizedState),(Y=la||Qy(i,s,Y,d,I,$,M)||a!==null&&a.dependencies!==null&&Qs(a.dependencies))?(B||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(d,$,M),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(d,$,M)),typeof x.componentDidUpdate=="function"&&(i.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof x.componentDidUpdate!="function"||O===a.memoizedProps&&I===a.memoizedState||(i.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||O===a.memoizedProps&&I===a.memoizedState||(i.flags|=1024),i.memoizedProps=d,i.memoizedState=$),x.props=d,x.state=$,x.context=M,d=Y):(typeof x.componentDidUpdate!="function"||O===a.memoizedProps&&I===a.memoizedState||(i.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||O===a.memoizedProps&&I===a.memoizedState||(i.flags|=1024),d=!1)}return x=d,vc(a,i),d=(i.flags&128)!==0,x||d?(x=i.stateNode,s=d&&typeof s.getDerivedStateFromError!="function"?null:x.render(),i.flags|=1,a!==null&&d?(i.child=Xi(i,a.child,null,g),i.child=Xi(i,null,s,g)):It(a,i,s,g),i.memoizedState=x.state,a=i.child):a=Nn(a,i,g),a}function hb(a,i,s,d){return el(),i.flags|=256,It(a,i,s,d),i.child}var gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vp(a){return{baseLanes:a,cachePool:ty()}}function xp(a,i,s){return a=a!==null?a.childLanes&~s:0,i&&(a|=Lr),a}function mb(a,i,s){var d=i.pendingProps,g=!1,x=(i.flags&128)!==0,O;if((O=x)||(O=a!==null&&a.memoizedState===null?!1:(wt.current&2)!==0),O&&(g=!0,i.flags&=-129),O=(i.flags&32)!==0,i.flags&=-33,a===null){if(De){if(g?da(i):fa(),De){var k=it,M;if(M=k){e:{for(M=k,k=sn;M.nodeType!==8;){if(!k){k=null;break e}if(M=Qr(M.nextSibling),M===null){k=null;break e}}k=M}k!==null?(i.memoizedState={dehydrated:k,treeContext:Ha!==null?{id:jn,overflow:Sn}:null,retryLane:536870912,hydrationErrors:null},M=xr(18,null,null,0),M.stateNode=k,M.return=i,i.child=M,Jt=i,it=null,M=!0):M=!1}M||Ka(i)}if(k=i.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return th(k)?i.lanes=32:i.lanes=536870912,null;kn(i)}return k=d.children,d=d.fallback,g?(fa(),g=i.mode,k=xc({mode:"hidden",children:k},g),d=Ua(d,g,s,null),k.return=i,d.return=i,k.sibling=d,i.child=k,g=i.child,g.memoizedState=vp(s),g.childLanes=xp(a,O,s),i.memoizedState=gp,d):(da(i),yp(i,k))}if(M=a.memoizedState,M!==null&&(k=M.dehydrated,k!==null)){if(x)i.flags&256?(da(i),i.flags&=-257,i=bp(a,i,s)):i.memoizedState!==null?(fa(),i.child=a.child,i.flags|=128,i=null):(fa(),g=d.fallback,k=i.mode,d=xc({mode:"visible",children:d.children},k),g=Ua(g,k,s,null),g.flags|=2,d.return=i,g.return=i,d.sibling=g,i.child=d,Xi(i,a.child,null,s),d=i.child,d.memoizedState=vp(s),d.childLanes=xp(a,O,s),i.memoizedState=gp,i=g);else if(da(i),th(k)){if(O=k.nextSibling&&k.nextSibling.dataset,O)var B=O.dgst;O=B,d=Error(n(419)),d.stack="",d.digest=O,tl({value:d,source:null,stack:null}),i=bp(a,i,s)}else if(Mt||rl(a,i,s,!1),O=(s&a.childLanes)!==0,Mt||O){if(O=Xe,O!==null&&(d=s&-s,d=(d&42)!==0?1:tf(d),d=(d&(O.suspendedLanes|s))!==0?0:d,d!==0&&d!==M.retryLane))throw M.retryLane=d,Bi(a,d),Sr(O,a,d),ob;k.data==="$?"||Bp(),i=bp(a,i,s)}else k.data==="$?"?(i.flags|=192,i.child=a.child,i=null):(a=M.treeContext,it=Qr(k.nextSibling),Jt=i,De=!0,Ga=null,sn=!1,a!==null&&(Dr[zr++]=jn,Dr[zr++]=Sn,Dr[zr++]=Ha,jn=a.id,Sn=a.overflow,Ha=i),i=yp(i,d.children),i.flags|=4096);return i}return g?(fa(),g=d.fallback,k=i.mode,M=a.child,B=M.sibling,d=wn(M,{mode:"hidden",children:d.children}),d.subtreeFlags=M.subtreeFlags&65011712,B!==null?g=wn(B,g):(g=Ua(g,k,s,null),g.flags|=2),g.return=i,d.return=i,d.sibling=g,i.child=d,d=g,g=i.child,k=a.child.memoizedState,k===null?k=vp(s):(M=k.cachePool,M!==null?(B=bt._currentValue,M=M.parent!==B?{parent:B,pool:B}:M):M=ty(),k={baseLanes:k.baseLanes|s,cachePool:M}),g.memoizedState=k,g.childLanes=xp(a,O,s),i.memoizedState=gp,d):(da(i),s=a.child,a=s.sibling,s=wn(s,{mode:"visible",children:d.children}),s.return=i,s.sibling=null,a!==null&&(O=i.deletions,O===null?(i.deletions=[a],i.flags|=16):O.push(a)),i.child=s,i.memoizedState=null,s)}function yp(a,i){return i=xc({mode:"visible",children:i},a.mode),i.return=a,a.child=i}function xc(a,i){return a=xr(22,a,null,i),a.lanes=0,a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},a}function bp(a,i,s){return Xi(i,a.child,null,s),a=yp(i,i.pendingProps.children),a.flags|=2,i.memoizedState=null,a}function gb(a,i,s){a.lanes|=i;var d=a.alternate;d!==null&&(d.lanes|=i),Bf(a.return,i,s)}function wp(a,i,s,d,g){var x=a.memoizedState;x===null?a.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:d,tail:s,tailMode:g}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=s,x.tailMode=g)}function vb(a,i,s){var d=i.pendingProps,g=d.revealOrder,x=d.tail;if(It(a,i,d.children,s),d=wt.current,(d&2)!==0)d=d&1|2,i.flags|=128;else{if(a!==null&&(a.flags&128)!==0)e:for(a=i.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&gb(a,s,i);else if(a.tag===19)gb(a,s,i);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break e;for(;a.sibling===null;){if(a.return===null||a.return===i)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}d&=1}switch(te(wt,d),g){case"forwards":for(s=i.child,g=null;s!==null;)a=s.alternate,a!==null&&hc(a)===null&&(g=s),s=s.sibling;s=g,s===null?(g=i.child,i.child=null):(g=s.sibling,s.sibling=null),wp(i,!1,g,s,x);break;case"backwards":for(s=null,g=i.child,i.child=null;g!==null;){if(a=g.alternate,a!==null&&hc(a)===null){i.child=g;break}a=g.sibling,g.sibling=s,s=g,g=a}wp(i,!0,s,null,x);break;case"together":wp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Nn(a,i,s){if(a!==null&&(i.dependencies=a.dependencies),va|=i.lanes,(s&i.childLanes)===0)if(a!==null){if(rl(a,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(a!==null&&i.child!==a.child)throw Error(n(153));if(i.child!==null){for(a=i.child,s=wn(a,a.pendingProps),i.child=s,s.return=i;a.sibling!==null;)a=a.sibling,s=s.sibling=wn(a,a.pendingProps),s.return=i;s.sibling=null}return i.child}function jp(a,i){return(a.lanes&i)!==0?!0:(a=a.dependencies,!!(a!==null&&Qs(a)))}function tN(a,i,s){switch(i.tag){case 3:Ue(i,i.stateNode.containerInfo),oa(i,bt,a.memoizedState.cache),el();break;case 27:case 5:Se(i);break;case 4:Ue(i,i.stateNode.containerInfo);break;case 10:oa(i,i.type,i.memoizedProps.value);break;case 13:var d=i.memoizedState;if(d!==null)return d.dehydrated!==null?(da(i),i.flags|=128,null):(s&i.child.childLanes)!==0?mb(a,i,s):(da(i),a=Nn(a,i,s),a!==null?a.sibling:null);da(i);break;case 19:var g=(a.flags&128)!==0;if(d=(s&i.childLanes)!==0,d||(rl(a,i,s,!1),d=(s&i.childLanes)!==0),g){if(d)return vb(a,i,s);i.flags|=128}if(g=i.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),te(wt,wt.current),d)break;return null;case 22:case 23:return i.lanes=0,ub(a,i,s);case 24:oa(i,bt,a.memoizedState.cache)}return Nn(a,i,s)}function xb(a,i,s){if(a!==null)if(a.memoizedProps!==i.pendingProps)Mt=!0;else{if(!jp(a,s)&&(i.flags&128)===0)return Mt=!1,tN(a,i,s);Mt=(a.flags&131072)!==0}else Mt=!1,De&&(i.flags&1048576)!==0&&Vx(i,Zs,i.index);switch(i.lanes=0,i.tag){case 16:e:{a=i.pendingProps;var d=i.elementType,g=d._init;if(d=g(d._payload),i.type=d,typeof d=="function")Mf(d)?(a=Za(d,a),i.tag=1,i=pb(null,i,d,a,s)):(i.tag=0,i=mp(null,i,d,a,s));else{if(d!=null){if(g=d.$$typeof,g===_){i.tag=11,i=lb(null,i,d,a,s);break e}else if(g===U){i.tag=14,i=sb(null,i,d,a,s);break e}}throw i=me(d)||d,Error(n(306,i,""))}}return i;case 0:return mp(a,i,i.type,i.pendingProps,s);case 1:return d=i.type,g=Za(d,i.pendingProps),pb(a,i,d,g,s);case 3:e:{if(Ue(i,i.stateNode.containerInfo),a===null)throw Error(n(387));d=i.pendingProps;var x=i.memoizedState;g=x.element,Gf(a,i),cl(i,d,null,s);var O=i.memoizedState;if(d=O.cache,oa(i,bt,d),d!==x.cache&&If(i,[bt],s,!0),sl(),d=O.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:O.cache},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){i=hb(a,i,d,s);break e}else if(d!==g){g=_r(Error(n(424)),i),tl(g),i=hb(a,i,d,s);break e}else{switch(a=i.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(it=Qr(a.firstChild),Jt=i,De=!0,Ga=null,sn=!0,s=Fy(i,null,d,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(el(),d===g){i=Nn(a,i,s);break e}It(a,i,d,s)}i=i.child}return i;case 26:return vc(a,i),a===null?(s=j1(i.type,null,i.pendingProps,null))?i.memoizedState=s:De||(s=i.type,a=i.pendingProps,d=_c(ge.current).createElement(s),d[Gt]=i,d[ar]=a,$t(d,s,a),Tt(d),i.stateNode=d):i.memoizedState=j1(i.type,a.memoizedProps,i.pendingProps,a.memoizedState),null;case 27:return Se(i),a===null&&De&&(d=i.stateNode=y1(i.type,i.pendingProps,ge.current),Jt=i,sn=!0,g=it,wa(i.type)?(rh=g,it=Qr(d.firstChild)):it=g),It(a,i,i.pendingProps.children,s),vc(a,i),a===null&&(i.flags|=4194304),i.child;case 5:return a===null&&De&&((g=d=it)&&(d=CN(d,i.type,i.pendingProps,sn),d!==null?(i.stateNode=d,Jt=i,it=Qr(d.firstChild),sn=!1,g=!0):g=!1),g||Ka(i)),Se(i),g=i.type,x=i.pendingProps,O=a!==null?a.memoizedProps:null,d=x.children,Qp(g,x)?d=null:O!==null&&Qp(g,O)&&(i.flags|=32),i.memoizedState!==null&&(g=Zf(a,i,W4,null,null,s),Ml._currentValue=g),vc(a,i),It(a,i,d,s),i.child;case 6:return a===null&&De&&((a=s=it)&&(s=TN(s,i.pendingProps,sn),s!==null?(i.stateNode=s,Jt=i,it=null,a=!0):a=!1),a||Ka(i)),null;case 13:return mb(a,i,s);case 4:return Ue(i,i.stateNode.containerInfo),d=i.pendingProps,a===null?i.child=Xi(i,null,d,s):It(a,i,d,s),i.child;case 11:return lb(a,i,i.type,i.pendingProps,s);case 7:return It(a,i,i.pendingProps,s),i.child;case 8:return It(a,i,i.pendingProps.children,s),i.child;case 12:return It(a,i,i.pendingProps.children,s),i.child;case 10:return d=i.pendingProps,oa(i,i.type,d.value),It(a,i,d.children,s),i.child;case 9:return g=i.type._context,d=i.pendingProps.children,Va(i),g=Kt(g),d=d(g),i.flags|=1,It(a,i,d,s),i.child;case 14:return sb(a,i,i.type,i.pendingProps,s);case 15:return cb(a,i,i.type,i.pendingProps,s);case 19:return vb(a,i,s);case 31:return d=i.pendingProps,s=i.mode,d={mode:d.mode,children:d.children},a===null?(s=xc(d,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=wn(a.child,d),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return ub(a,i,s);case 24:return Va(i),d=Kt(bt),a===null?(g=Uf(),g===null&&(g=Xe,x=qf(),g.pooledCache=x,x.refCount++,x!==null&&(g.pooledCacheLanes|=s),g=x),i.memoizedState={parent:d,cache:g},Yf(i),oa(i,bt,g)):((a.lanes&s)!==0&&(Gf(a,i),cl(i,null,null,s),sl()),g=a.memoizedState,x=i.memoizedState,g.parent!==d?(g={parent:d,cache:d},i.memoizedState=g,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=g),oa(i,bt,d)):(d=x.cache,oa(i,bt,d),d!==g.cache&&If(i,[bt],s,!0))),It(a,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(n(156,i.tag))}function Cn(a){a.flags|=4}function yb(a,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!k1(i)){if(i=Rr.current,i!==null&&((Me&4194048)===Me?cn!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==cn))throw ol=Hf,ry;a.flags|=8192}}function yc(a,i){i!==null&&(a.flags|=4),a.flags&16384&&(i=a.tag!==22?Zv():536870912,a.lanes|=i,Ji|=i)}function gl(a,i){if(!De)switch(a.tailMode){case"hidden":i=a.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?a.tail=null:s.sibling=null;break;case"collapsed":s=a.tail;for(var d=null;s!==null;)s.alternate!==null&&(d=s),s=s.sibling;d===null?i||a.tail===null?a.tail=null:a.tail.sibling=null:d.sibling=null}}function nt(a){var i=a.alternate!==null&&a.alternate.child===a.child,s=0,d=0;if(i)for(var g=a.child;g!==null;)s|=g.lanes|g.childLanes,d|=g.subtreeFlags&65011712,d|=g.flags&65011712,g.return=a,g=g.sibling;else for(g=a.child;g!==null;)s|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=a,g=g.sibling;return a.subtreeFlags|=d,a.childLanes=s,i}function rN(a,i,s){var d=i.pendingProps;switch(zf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return nt(i),null;case 3:return s=i.stateNode,d=null,a!==null&&(d=a.memoizedState.cache),i.memoizedState.cache!==d&&(i.flags|=2048),On(bt),Z(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(a===null||a.child===null)&&(Jo(i)?Cn(i):a===null||a.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zx())),nt(i),null;case 26:return s=i.memoizedState,a===null?(Cn(i),s!==null?(nt(i),yb(i,s)):(nt(i),i.flags&=-16777217)):s?s!==a.memoizedState?(Cn(i),nt(i),yb(i,s)):(nt(i),i.flags&=-16777217):(a.memoizedProps!==d&&Cn(i),nt(i),i.flags&=-16777217),null;case 27:Ne(i),s=ge.current;var g=i.type;if(a!==null&&i.stateNode!=null)a.memoizedProps!==d&&Cn(i);else{if(!d){if(i.stateNode===null)throw Error(n(166));return nt(i),null}a=le.current,Jo(i)?Xx(i):(a=y1(g,d,s),i.stateNode=a,Cn(i))}return nt(i),null;case 5:if(Ne(i),s=i.type,a!==null&&i.stateNode!=null)a.memoizedProps!==d&&Cn(i);else{if(!d){if(i.stateNode===null)throw Error(n(166));return nt(i),null}if(a=le.current,Jo(i))Xx(i);else{switch(g=_c(ge.current),a){case 1:a=g.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=g.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=g.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=g.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof d.is=="string"?g.createElement("select",{is:d.is}):g.createElement("select"),d.multiple?a.multiple=!0:d.size&&(a.size=d.size);break;default:a=typeof d.is=="string"?g.createElement(s,{is:d.is}):g.createElement(s)}}a[Gt]=i,a[ar]=d;e:for(g=i.child;g!==null;){if(g.tag===5||g.tag===6)a.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===i)break e;for(;g.sibling===null;){if(g.return===null||g.return===i)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}i.stateNode=a;e:switch($t(a,s,d),s){case"button":case"input":case"select":case"textarea":a=!!d.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Cn(i)}}return nt(i),i.flags&=-16777217,null;case 6:if(a&&i.stateNode!=null)a.memoizedProps!==d&&Cn(i);else{if(typeof d!="string"&&i.stateNode===null)throw Error(n(166));if(a=ge.current,Jo(i)){if(a=i.stateNode,s=i.memoizedProps,d=null,g=Jt,g!==null)switch(g.tag){case 27:case 5:d=g.memoizedProps}a[Gt]=i,a=!!(a.nodeValue===s||d!==null&&d.suppressHydrationWarning===!0||f1(a.nodeValue,s)),a||Ka(i)}else a=_c(a).createTextNode(d),a[Gt]=i,i.stateNode=a}return nt(i),null;case 13:if(d=i.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(g=Jo(i),d!==null&&d.dehydrated!==null){if(a===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[Gt]=i}else el(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),g=!1}else g=Zx(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=g),g=!0;if(!g)return i.flags&256?(kn(i),i):(kn(i),null)}if(kn(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=d!==null,a=a!==null&&a.memoizedState!==null,s){d=i.child,g=null,d.alternate!==null&&d.alternate.memoizedState!==null&&d.alternate.memoizedState.cachePool!==null&&(g=d.alternate.memoizedState.cachePool.pool);var x=null;d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(x=d.memoizedState.cachePool.pool),x!==g&&(d.flags|=2048)}return s!==a&&s&&(i.child.flags|=8192),yc(i,i.updateQueue),nt(i),null;case 4:return Z(),a===null&&Wp(i.stateNode.containerInfo),nt(i),null;case 10:return On(i.type),nt(i),null;case 19:if(ne(wt),g=i.memoizedState,g===null)return nt(i),null;if(d=(i.flags&128)!==0,x=g.rendering,x===null)if(d)gl(g,!1);else{if(ot!==0||a!==null&&(a.flags&128)!==0)for(a=i.child;a!==null;){if(x=hc(a),x!==null){for(i.flags|=128,gl(g,!1),a=x.updateQueue,i.updateQueue=a,yc(i,a),i.subtreeFlags=0,a=s,s=i.child;s!==null;)Wx(s,a),s=s.sibling;return te(wt,wt.current&1|2),i.child}a=a.sibling}g.tail!==null&&Ct()>jc&&(i.flags|=128,d=!0,gl(g,!1),i.lanes=4194304)}else{if(!d)if(a=hc(x),a!==null){if(i.flags|=128,d=!0,a=a.updateQueue,i.updateQueue=a,yc(i,a),gl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!x.alternate&&!De)return nt(i),null}else 2*Ct()-g.renderingStartTime>jc&&s!==536870912&&(i.flags|=128,d=!0,gl(g,!1),i.lanes=4194304);g.isBackwards?(x.sibling=i.child,i.child=x):(a=g.last,a!==null?a.sibling=x:i.child=x,g.last=x)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Ct(),i.sibling=null,a=wt.current,te(wt,d?a&1|2:a&1),i):(nt(i),null);case 22:case 23:return kn(i),Xf(),d=i.memoizedState!==null,a!==null?a.memoizedState!==null!==d&&(i.flags|=8192):d&&(i.flags|=8192),d?(s&536870912)!==0&&(i.flags&128)===0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),s=i.updateQueue,s!==null&&yc(i,s.retryQueue),s=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==s&&(i.flags|=2048),a!==null&&ne(Xa),null;case 24:return s=null,a!==null&&(s=a.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),On(bt),nt(i),null;case 25:return null;case 30:return null}throw Error(n(156,i.tag))}function nN(a,i){switch(zf(i),i.tag){case 1:return a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 3:return On(bt),Z(),a=i.flags,(a&65536)!==0&&(a&128)===0?(i.flags=a&-65537|128,i):null;case 26:case 27:case 5:return Ne(i),null;case 13:if(kn(i),a=i.memoizedState,a!==null&&a.dehydrated!==null){if(i.alternate===null)throw Error(n(340));el()}return a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 19:return ne(wt),null;case 4:return Z(),null;case 10:return On(i.type),null;case 22:case 23:return kn(i),Xf(),a!==null&&ne(Xa),a=i.flags,a&65536?(i.flags=a&-65537|128,i):null;case 24:return On(bt),null;case 25:return null;default:return null}}function bb(a,i){switch(zf(i),i.tag){case 3:On(bt),Z();break;case 26:case 27:case 5:Ne(i);break;case 4:Z();break;case 13:kn(i);break;case 19:ne(wt);break;case 10:On(i.type);break;case 22:case 23:kn(i),Xf(),a!==null&&ne(Xa);break;case 24:On(bt)}}function vl(a,i){try{var s=i.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var g=d.next;s=g;do{if((s.tag&a)===a){d=void 0;var x=s.create,O=s.inst;d=x(),O.destroy=d}s=s.next}while(s!==g)}}catch(k){We(i,i.return,k)}}function pa(a,i,s){try{var d=i.updateQueue,g=d!==null?d.lastEffect:null;if(g!==null){var x=g.next;d=x;do{if((d.tag&a)===a){var O=d.inst,k=O.destroy;if(k!==void 0){O.destroy=void 0,g=i;var M=s,B=k;try{B()}catch(Y){We(g,M,Y)}}}d=d.next}while(d!==x)}}catch(Y){We(i,i.return,Y)}}function wb(a){var i=a.updateQueue;if(i!==null){var s=a.stateNode;try{sy(i,s)}catch(d){We(a,a.return,d)}}}function jb(a,i,s){s.props=Za(a.type,a.memoizedProps),s.state=a.memoizedState;try{s.componentWillUnmount()}catch(d){We(a,i,d)}}function xl(a,i){try{var s=a.ref;if(s!==null){switch(a.tag){case 26:case 27:case 5:var d=a.stateNode;break;case 30:d=a.stateNode;break;default:d=a.stateNode}typeof s=="function"?a.refCleanup=s(d):s.current=d}}catch(g){We(a,i,g)}}function un(a,i){var s=a.ref,d=a.refCleanup;if(s!==null)if(typeof d=="function")try{d()}catch(g){We(a,i,g)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(g){We(a,i,g)}else s.current=null}function Sb(a){var i=a.type,s=a.memoizedProps,d=a.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&d.focus();break e;case"img":s.src?d.src=s.src:s.srcSet&&(d.srcset=s.srcSet)}}catch(g){We(a,a.return,g)}}function Sp(a,i,s){try{var d=a.stateNode;AN(d,a.type,s,i),d[ar]=i}catch(g){We(a,a.return,g)}}function Ab(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&wa(a.type)||a.tag===4}function Ap(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Ab(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&wa(a.type)||a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Op(a,i,s){var d=a.tag;if(d===5||d===6)a=a.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(a,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(a),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Mc));else if(d!==4&&(d===27&&wa(a.type)&&(s=a.stateNode,i=null),a=a.child,a!==null))for(Op(a,i,s),a=a.sibling;a!==null;)Op(a,i,s),a=a.sibling}function bc(a,i,s){var d=a.tag;if(d===5||d===6)a=a.stateNode,i?s.insertBefore(a,i):s.appendChild(a);else if(d!==4&&(d===27&&wa(a.type)&&(s=a.stateNode),a=a.child,a!==null))for(bc(a,i,s),a=a.sibling;a!==null;)bc(a,i,s),a=a.sibling}function Ob(a){var i=a.stateNode,s=a.memoizedProps;try{for(var d=a.type,g=i.attributes;g.length;)i.removeAttributeNode(g[0]);$t(i,d,s),i[Gt]=a,i[ar]=s}catch(x){We(a,a.return,x)}}var Tn=!1,ut=!1,Ep=!1,Eb=typeof WeakSet=="function"?WeakSet:Set,_t=null;function aN(a,i){if(a=a.containerInfo,Fp=Bc,a=Lx(a),Af(a)){if("selectionStart"in a)var s={start:a.selectionStart,end:a.selectionEnd};else e:{s=(s=a.ownerDocument)&&s.defaultView||window;var d=s.getSelection&&s.getSelection();if(d&&d.rangeCount!==0){s=d.anchorNode;var g=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var O=0,k=-1,M=-1,B=0,Y=0,V=a,I=null;t:for(;;){for(var $;V!==s||g!==0&&V.nodeType!==3||(k=O+g),V!==x||d!==0&&V.nodeType!==3||(M=O+d),V.nodeType===3&&(O+=V.nodeValue.length),($=V.firstChild)!==null;)I=V,V=$;for(;;){if(V===a)break t;if(I===s&&++B===g&&(k=O),I===x&&++Y===d&&(M=O),($=V.nextSibling)!==null)break;V=I,I=V.parentNode}V=$}s=k===-1||M===-1?null:{start:k,end:M}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zp={focusedElem:a,selectionRange:s},Bc=!1,_t=i;_t!==null;)if(i=_t,a=i.child,(i.subtreeFlags&1024)!==0&&a!==null)a.return=i,_t=a;else for(;_t!==null;){switch(i=_t,x=i.alternate,a=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((a&1024)!==0&&x!==null){a=void 0,s=i,g=x.memoizedProps,x=x.memoizedState,d=s.stateNode;try{var be=Za(s.type,g,s.elementType===s.type);a=d.getSnapshotBeforeUpdate(be,x),d.__reactInternalSnapshotBeforeUpdate=a}catch(he){We(s,s.return,he)}}break;case 3:if((a&1024)!==0){if(a=i.stateNode.containerInfo,s=a.nodeType,s===9)eh(a);else if(s===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":eh(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(n(163))}if(a=i.sibling,a!==null){a.return=i.return,_t=a;break}_t=i.return}}function kb(a,i,s){var d=s.flags;switch(s.tag){case 0:case 11:case 15:ha(a,s),d&4&&vl(5,s);break;case 1:if(ha(a,s),d&4)if(a=s.stateNode,i===null)try{a.componentDidMount()}catch(O){We(s,s.return,O)}else{var g=Za(s.type,i.memoizedProps);i=i.memoizedState;try{a.componentDidUpdate(g,i,a.__reactInternalSnapshotBeforeUpdate)}catch(O){We(s,s.return,O)}}d&64&&wb(s),d&512&&xl(s,s.return);break;case 3:if(ha(a,s),d&64&&(a=s.updateQueue,a!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{sy(a,i)}catch(O){We(s,s.return,O)}}break;case 27:i===null&&d&4&&Ob(s);case 26:case 5:ha(a,s),i===null&&d&4&&Sb(s),d&512&&xl(s,s.return);break;case 12:ha(a,s);break;case 13:ha(a,s),d&4&&Tb(a,s),d&64&&(a=s.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(s=pN.bind(null,s),MN(a,s))));break;case 22:if(d=s.memoizedState!==null||Tn,!d){i=i!==null&&i.memoizedState!==null||ut,g=Tn;var x=ut;Tn=d,(ut=i)&&!x?ma(a,s,(s.subtreeFlags&8772)!==0):ha(a,s),Tn=g,ut=x}break;case 30:break;default:ha(a,s)}}function Nb(a){var i=a.alternate;i!==null&&(a.alternate=null,Nb(i)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(i=a.stateNode,i!==null&&af(i)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var Je=null,lr=!1;function Mn(a,i,s){for(s=s.child;s!==null;)Cb(a,i,s),s=s.sibling}function Cb(a,i,s){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(Io,s)}catch{}switch(s.tag){case 26:ut||un(s,i),Mn(a,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ut||un(s,i);var d=Je,g=lr;wa(s.type)&&(Je=s.stateNode,lr=!1),Mn(a,i,s),kl(s.stateNode),Je=d,lr=g;break;case 5:ut||un(s,i);case 6:if(d=Je,g=lr,Je=null,Mn(a,i,s),Je=d,lr=g,Je!==null)if(lr)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(s.stateNode)}catch(x){We(s,i,x)}else try{Je.removeChild(s.stateNode)}catch(x){We(s,i,x)}break;case 18:Je!==null&&(lr?(a=Je,v1(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.stateNode),zl(a)):v1(Je,s.stateNode));break;case 4:d=Je,g=lr,Je=s.stateNode.containerInfo,lr=!0,Mn(a,i,s),Je=d,lr=g;break;case 0:case 11:case 14:case 15:ut||pa(2,s,i),ut||pa(4,s,i),Mn(a,i,s);break;case 1:ut||(un(s,i),d=s.stateNode,typeof d.componentWillUnmount=="function"&&jb(s,i,d)),Mn(a,i,s);break;case 21:Mn(a,i,s);break;case 22:ut=(d=ut)||s.memoizedState!==null,Mn(a,i,s),ut=d;break;default:Mn(a,i,s)}}function Tb(a,i){if(i.memoizedState===null&&(a=i.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{zl(a)}catch(s){We(i,i.return,s)}}function iN(a){switch(a.tag){case 13:case 19:var i=a.stateNode;return i===null&&(i=a.stateNode=new Eb),i;case 22:return a=a.stateNode,i=a._retryCache,i===null&&(i=a._retryCache=new Eb),i;default:throw Error(n(435,a.tag))}}function kp(a,i){var s=iN(a);i.forEach(function(d){var g=hN.bind(null,a,d);s.has(d)||(s.add(d),d.then(g,g))})}function yr(a,i){var s=i.deletions;if(s!==null)for(var d=0;d<s.length;d++){var g=s[d],x=a,O=i,k=O;e:for(;k!==null;){switch(k.tag){case 27:if(wa(k.type)){Je=k.stateNode,lr=!1;break e}break;case 5:Je=k.stateNode,lr=!1;break e;case 3:case 4:Je=k.stateNode.containerInfo,lr=!0;break e}k=k.return}if(Je===null)throw Error(n(160));Cb(x,O,g),Je=null,lr=!1,x=g.alternate,x!==null&&(x.return=null),g.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Mb(i,a),i=i.sibling}var Zr=null;function Mb(a,i){var s=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:yr(i,a),br(a),d&4&&(pa(3,a,a.return),vl(3,a),pa(5,a,a.return));break;case 1:yr(i,a),br(a),d&512&&(ut||s===null||un(s,s.return)),d&64&&Tn&&(a=a.updateQueue,a!==null&&(d=a.callbacks,d!==null&&(s=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=s===null?d:s.concat(d))));break;case 26:var g=Zr;if(yr(i,a),br(a),d&512&&(ut||s===null||un(s,s.return)),d&4){var x=s!==null?s.memoizedState:null;if(d=a.memoizedState,s===null)if(d===null)if(a.stateNode===null){e:{d=a.type,s=a.memoizedProps,g=g.ownerDocument||g;t:switch(d){case"title":x=g.getElementsByTagName("title")[0],(!x||x[Uo]||x[Gt]||x.namespaceURI==="http://www.w3.org/2000/svg"||x.hasAttribute("itemprop"))&&(x=g.createElement(d),g.head.insertBefore(x,g.querySelector("head > title"))),$t(x,d,s),x[Gt]=a,Tt(x),d=x;break e;case"link":var O=O1("link","href",g).get(d+(s.href||""));if(O){for(var k=0;k<O.length;k++)if(x=O[k],x.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&x.getAttribute("rel")===(s.rel==null?null:s.rel)&&x.getAttribute("title")===(s.title==null?null:s.title)&&x.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){O.splice(k,1);break t}}x=g.createElement(d),$t(x,d,s),g.head.appendChild(x);break;case"meta":if(O=O1("meta","content",g).get(d+(s.content||""))){for(k=0;k<O.length;k++)if(x=O[k],x.getAttribute("content")===(s.content==null?null:""+s.content)&&x.getAttribute("name")===(s.name==null?null:s.name)&&x.getAttribute("property")===(s.property==null?null:s.property)&&x.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&x.getAttribute("charset")===(s.charSet==null?null:s.charSet)){O.splice(k,1);break t}}x=g.createElement(d),$t(x,d,s),g.head.appendChild(x);break;default:throw Error(n(468,d))}x[Gt]=a,Tt(x),d=x}a.stateNode=d}else E1(g,a.type,a.stateNode);else a.stateNode=A1(g,d,a.memoizedProps);else x!==d?(x===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):x.count--,d===null?E1(g,a.type,a.stateNode):A1(g,d,a.memoizedProps)):d===null&&a.stateNode!==null&&Sp(a,a.memoizedProps,s.memoizedProps)}break;case 27:yr(i,a),br(a),d&512&&(ut||s===null||un(s,s.return)),s!==null&&d&4&&Sp(a,a.memoizedProps,s.memoizedProps);break;case 5:if(yr(i,a),br(a),d&512&&(ut||s===null||un(s,s.return)),a.flags&32){g=a.stateNode;try{Mi(g,"")}catch($){We(a,a.return,$)}}d&4&&a.stateNode!=null&&(g=a.memoizedProps,Sp(a,g,s!==null?s.memoizedProps:g)),d&1024&&(Ep=!0);break;case 6:if(yr(i,a),br(a),d&4){if(a.stateNode===null)throw Error(n(162));d=a.memoizedProps,s=a.stateNode;try{s.nodeValue=d}catch($){We(a,a.return,$)}}break;case 3:if(zc=null,g=Zr,Zr=Pc(i.containerInfo),yr(i,a),Zr=g,br(a),d&4&&s!==null&&s.memoizedState.isDehydrated)try{zl(i.containerInfo)}catch($){We(a,a.return,$)}Ep&&(Ep=!1,_b(a));break;case 4:d=Zr,Zr=Pc(a.stateNode.containerInfo),yr(i,a),br(a),Zr=d;break;case 12:yr(i,a),br(a);break;case 13:yr(i,a),br(a),a.child.flags&8192&&a.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Pp=Ct()),d&4&&(d=a.updateQueue,d!==null&&(a.updateQueue=null,kp(a,d)));break;case 22:g=a.memoizedState!==null;var M=s!==null&&s.memoizedState!==null,B=Tn,Y=ut;if(Tn=B||g,ut=Y||M,yr(i,a),ut=Y,Tn=B,br(a),d&8192)e:for(i=a.stateNode,i._visibility=g?i._visibility&-2:i._visibility|1,g&&(s===null||M||Tn||ut||Qa(a)),s=null,i=a;;){if(i.tag===5||i.tag===26){if(s===null){M=s=i;try{if(x=M.stateNode,g)O=x.style,typeof O.setProperty=="function"?O.setProperty("display","none","important"):O.display="none";else{k=M.stateNode;var V=M.memoizedProps.style,I=V!=null&&V.hasOwnProperty("display")?V.display:null;k.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch($){We(M,M.return,$)}}}else if(i.tag===6){if(s===null){M=i;try{M.stateNode.nodeValue=g?"":M.memoizedProps}catch($){We(M,M.return,$)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===a)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}d&4&&(d=a.updateQueue,d!==null&&(s=d.retryQueue,s!==null&&(d.retryQueue=null,kp(a,s))));break;case 19:yr(i,a),br(a),d&4&&(d=a.updateQueue,d!==null&&(a.updateQueue=null,kp(a,d)));break;case 30:break;case 21:break;default:yr(i,a),br(a)}}function br(a){var i=a.flags;if(i&2){try{for(var s,d=a.return;d!==null;){if(Ab(d)){s=d;break}d=d.return}if(s==null)throw Error(n(160));switch(s.tag){case 27:var g=s.stateNode,x=Ap(a);bc(a,x,g);break;case 5:var O=s.stateNode;s.flags&32&&(Mi(O,""),s.flags&=-33);var k=Ap(a);bc(a,k,O);break;case 3:case 4:var M=s.stateNode.containerInfo,B=Ap(a);Op(a,B,M);break;default:throw Error(n(161))}}catch(Y){We(a,a.return,Y)}a.flags&=-3}i&4096&&(a.flags&=-4097)}function _b(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var i=a;_b(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),a=a.sibling}}function ha(a,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)kb(a,i.alternate,i),i=i.sibling}function Qa(a){for(a=a.child;a!==null;){var i=a;switch(i.tag){case 0:case 11:case 14:case 15:pa(4,i,i.return),Qa(i);break;case 1:un(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&jb(i,i.return,s),Qa(i);break;case 27:kl(i.stateNode);case 26:case 5:un(i,i.return),Qa(i);break;case 22:i.memoizedState===null&&Qa(i);break;case 30:Qa(i);break;default:Qa(i)}a=a.sibling}}function ma(a,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var d=i.alternate,g=a,x=i,O=x.flags;switch(x.tag){case 0:case 11:case 15:ma(g,x,s),vl(4,x);break;case 1:if(ma(g,x,s),d=x,g=d.stateNode,typeof g.componentDidMount=="function")try{g.componentDidMount()}catch(B){We(d,d.return,B)}if(d=x,g=d.updateQueue,g!==null){var k=d.stateNode;try{var M=g.shared.hiddenCallbacks;if(M!==null)for(g.shared.hiddenCallbacks=null,g=0;g<M.length;g++)ly(M[g],k)}catch(B){We(d,d.return,B)}}s&&O&64&&wb(x),xl(x,x.return);break;case 27:Ob(x);case 26:case 5:ma(g,x,s),s&&d===null&&O&4&&Sb(x),xl(x,x.return);break;case 12:ma(g,x,s);break;case 13:ma(g,x,s),s&&O&4&&Tb(g,x);break;case 22:x.memoizedState===null&&ma(g,x,s),xl(x,x.return);break;case 30:break;default:ma(g,x,s)}i=i.sibling}}function Np(a,i){var s=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(a!=null&&a.refCount++,s!=null&&nl(s))}function Cp(a,i){a=null,i.alternate!==null&&(a=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==a&&(i.refCount++,a!=null&&nl(a))}function dn(a,i,s,d){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Pb(a,i,s,d),i=i.sibling}function Pb(a,i,s,d){var g=i.flags;switch(i.tag){case 0:case 11:case 15:dn(a,i,s,d),g&2048&&vl(9,i);break;case 1:dn(a,i,s,d);break;case 3:dn(a,i,s,d),g&2048&&(a=null,i.alternate!==null&&(a=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==a&&(i.refCount++,a!=null&&nl(a)));break;case 12:if(g&2048){dn(a,i,s,d),a=i.stateNode;try{var x=i.memoizedProps,O=x.id,k=x.onPostCommit;typeof k=="function"&&k(O,i.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(M){We(i,i.return,M)}}else dn(a,i,s,d);break;case 13:dn(a,i,s,d);break;case 23:break;case 22:x=i.stateNode,O=i.alternate,i.memoizedState!==null?x._visibility&2?dn(a,i,s,d):yl(a,i):x._visibility&2?dn(a,i,s,d):(x._visibility|=2,Fi(a,i,s,d,(i.subtreeFlags&10256)!==0)),g&2048&&Np(O,i);break;case 24:dn(a,i,s,d),g&2048&&Cp(i.alternate,i);break;default:dn(a,i,s,d)}}function Fi(a,i,s,d,g){for(g=g&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var x=a,O=i,k=s,M=d,B=O.flags;switch(O.tag){case 0:case 11:case 15:Fi(x,O,k,M,g),vl(8,O);break;case 23:break;case 22:var Y=O.stateNode;O.memoizedState!==null?Y._visibility&2?Fi(x,O,k,M,g):yl(x,O):(Y._visibility|=2,Fi(x,O,k,M,g)),g&&B&2048&&Np(O.alternate,O);break;case 24:Fi(x,O,k,M,g),g&&B&2048&&Cp(O.alternate,O);break;default:Fi(x,O,k,M,g)}i=i.sibling}}function yl(a,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=a,d=i,g=d.flags;switch(d.tag){case 22:yl(s,d),g&2048&&Np(d.alternate,d);break;case 24:yl(s,d),g&2048&&Cp(d.alternate,d);break;default:yl(s,d)}i=i.sibling}}var bl=8192;function Zi(a){if(a.subtreeFlags&bl)for(a=a.child;a!==null;)Db(a),a=a.sibling}function Db(a){switch(a.tag){case 26:Zi(a),a.flags&bl&&a.memoizedState!==null&&YN(Zr,a.memoizedState,a.memoizedProps);break;case 5:Zi(a);break;case 3:case 4:var i=Zr;Zr=Pc(a.stateNode.containerInfo),Zi(a),Zr=i;break;case 22:a.memoizedState===null&&(i=a.alternate,i!==null&&i.memoizedState!==null?(i=bl,bl=16777216,Zi(a),bl=i):Zi(a));break;default:Zi(a)}}function zb(a){var i=a.alternate;if(i!==null&&(a=i.child,a!==null)){i.child=null;do i=a.sibling,a.sibling=null,a=i;while(a!==null)}}function wl(a){var i=a.deletions;if((a.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var d=i[s];_t=d,Lb(d,a)}zb(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Rb(a),a=a.sibling}function Rb(a){switch(a.tag){case 0:case 11:case 15:wl(a),a.flags&2048&&pa(9,a,a.return);break;case 3:wl(a);break;case 12:wl(a);break;case 22:var i=a.stateNode;a.memoizedState!==null&&i._visibility&2&&(a.return===null||a.return.tag!==13)?(i._visibility&=-3,wc(a)):wl(a);break;default:wl(a)}}function wc(a){var i=a.deletions;if((a.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var d=i[s];_t=d,Lb(d,a)}zb(a)}for(a=a.child;a!==null;){switch(i=a,i.tag){case 0:case 11:case 15:pa(8,i,i.return),wc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,wc(i));break;default:wc(i)}a=a.sibling}}function Lb(a,i){for(;_t!==null;){var s=_t;switch(s.tag){case 0:case 11:case 15:pa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var d=s.memoizedState.cachePool.pool;d!=null&&d.refCount++}break;case 24:nl(s.memoizedState.cache)}if(d=s.child,d!==null)d.return=s,_t=d;else e:for(s=a;_t!==null;){d=_t;var g=d.sibling,x=d.return;if(Nb(d),d===s){_t=null;break e}if(g!==null){g.return=x,_t=g;break e}_t=x}}}var oN={getCacheForType:function(a){var i=Kt(bt),s=i.data.get(a);return s===void 0&&(s=a(),i.data.set(a,s)),s}},lN=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,Ce=null,Me=0,Be=0,wr=null,ga=!1,Qi=!1,Tp=!1,_n=0,ot=0,va=0,Ja=0,Mp=0,Lr=0,Ji=0,jl=null,sr=null,_p=!1,Pp=0,jc=1/0,Sc=null,xa=null,qt=0,ya=null,eo=null,to=0,Dp=0,zp=null,Bb=null,Sl=0,Rp=null;function jr(){if((Le&2)!==0&&Me!==0)return Me&-Me;if(q.T!==null){var a=Ui;return a!==0?a:Hp()}return ex()}function Ib(){Lr===0&&(Lr=(Me&536870912)===0||De?Fv():536870912);var a=Rr.current;return a!==null&&(a.flags|=32),Lr}function Sr(a,i,s){(a===Xe&&(Be===2||Be===9)||a.cancelPendingCommit!==null)&&(ro(a,0),ba(a,Me,Lr,!1)),$o(a,s),((Le&2)===0||a!==Xe)&&(a===Xe&&((Le&2)===0&&(Ja|=s),ot===4&&ba(a,Me,Lr,!1)),fn(a))}function qb(a,i,s){if((Le&6)!==0)throw Error(n(327));var d=!s&&(i&124)===0&&(i&a.expiredLanes)===0||qo(a,i),g=d?uN(a,i):Ip(a,i,!0),x=d;do{if(g===0){Qi&&!d&&ba(a,i,0,!1);break}else{if(s=a.current.alternate,x&&!sN(s)){g=Ip(a,i,!1),x=!1;continue}if(g===2){if(x=i,a.errorRecoveryDisabledLanes&x)var O=0;else O=a.pendingLanes&-536870913,O=O!==0?O:O&536870912?536870912:0;if(O!==0){i=O;e:{var k=a;g=jl;var M=k.current.memoizedState.isDehydrated;if(M&&(ro(k,O).flags|=256),O=Ip(k,O,!1),O!==2){if(Tp&&!M){k.errorRecoveryDisabledLanes|=x,Ja|=x,g=4;break e}x=sr,sr=g,x!==null&&(sr===null?sr=x:sr.push.apply(sr,x))}g=O}if(x=!1,g!==2)continue}}if(g===1){ro(a,0),ba(a,i,0,!0);break}e:{switch(d=a,x=g,x){case 0:case 1:throw Error(n(345));case 4:if((i&4194048)!==i)break;case 6:ba(d,i,Lr,!ga);break e;case 2:sr=null;break;case 3:case 5:break;default:throw Error(n(329))}if((i&62914560)===i&&(g=Pp+300-Ct(),10<g)){if(ba(d,i,Lr,!ga),Ds(d,0,!0)!==0)break e;d.timeoutHandle=m1($b.bind(null,d,s,sr,Sc,_p,i,Lr,Ja,Ji,ga,x,2,-0,0),g);break e}$b(d,s,sr,Sc,_p,i,Lr,Ja,Ji,ga,x,0,-0,0)}}break}while(!0);fn(a)}function $b(a,i,s,d,g,x,O,k,M,B,Y,V,I,$){if(a.timeoutHandle=-1,V=i.subtreeFlags,(V&8192||(V&16785408)===16785408)&&(Tl={stylesheets:null,count:0,unsuspend:HN},Db(i),V=GN(),V!==null)){a.cancelPendingCommit=V(Vb.bind(null,a,i,x,s,d,g,O,k,M,Y,1,I,$)),ba(a,x,O,!B);return}Vb(a,i,x,s,d,g,O,k,M)}function sN(a){for(var i=a;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var d=0;d<s.length;d++){var g=s[d],x=g.getSnapshot;g=g.value;try{if(!vr(x(),g))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===a)break;for(;i.sibling===null;){if(i.return===null||i.return===a)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ba(a,i,s,d){i&=~Mp,i&=~Ja,a.suspendedLanes|=i,a.pingedLanes&=~i,d&&(a.warmLanes|=i),d=a.expirationTimes;for(var g=i;0<g;){var x=31-gr(g),O=1<<x;d[x]=-1,g&=~O}s!==0&&Qv(a,s,i)}function Ac(){return(Le&6)===0?(Al(0),!1):!0}function Lp(){if(Ce!==null){if(Be===0)var a=Ce.return;else a=Ce,An=Wa=null,ep(a),Vi=null,hl=0,a=Ce;for(;a!==null;)bb(a.alternate,a),a=a.return;Ce=null}}function ro(a,i){var s=a.timeoutHandle;s!==-1&&(a.timeoutHandle=-1,EN(s)),s=a.cancelPendingCommit,s!==null&&(a.cancelPendingCommit=null,s()),Lp(),Xe=a,Ce=s=wn(a.current,null),Me=i,Be=0,wr=null,ga=!1,Qi=qo(a,i),Tp=!1,Ji=Lr=Mp=Ja=va=ot=0,sr=jl=null,_p=!1,(i&8)!==0&&(i|=i&32);var d=a.entangledLanes;if(d!==0)for(a=a.entanglements,d&=i;0<d;){var g=31-gr(d),x=1<<g;i|=a[g],d&=~x}return _n=i,Ks(),s}function Ub(a,i){Ae=null,q.H=dc,i===il||i===tc?(i=iy(),Be=3):i===ry?(i=iy(),Be=4):Be=i===ob?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,wr=i,Ce===null&&(ot=1,gc(a,_r(i,a.current)))}function Hb(){var a=q.H;return q.H=dc,a===null?dc:a}function Yb(){var a=q.A;return q.A=oN,a}function Bp(){ot=4,ga||(Me&4194048)!==Me&&Rr.current!==null||(Qi=!0),(va&134217727)===0&&(Ja&134217727)===0||Xe===null||ba(Xe,Me,Lr,!1)}function Ip(a,i,s){var d=Le;Le|=2;var g=Hb(),x=Yb();(Xe!==a||Me!==i)&&(Sc=null,ro(a,i)),i=!1;var O=ot;e:do try{if(Be!==0&&Ce!==null){var k=Ce,M=wr;switch(Be){case 8:Lp(),O=6;break e;case 3:case 2:case 9:case 6:Rr.current===null&&(i=!0);var B=Be;if(Be=0,wr=null,no(a,k,M,B),s&&Qi){O=0;break e}break;default:B=Be,Be=0,wr=null,no(a,k,M,B)}}cN(),O=ot;break}catch(Y){Ub(a,Y)}while(!0);return i&&a.shellSuspendCounter++,An=Wa=null,Le=d,q.H=g,q.A=x,Ce===null&&(Xe=null,Me=0,Ks()),O}function cN(){for(;Ce!==null;)Gb(Ce)}function uN(a,i){var s=Le;Le|=2;var d=Hb(),g=Yb();Xe!==a||Me!==i?(Sc=null,jc=Ct()+500,ro(a,i)):Qi=qo(a,i);e:do try{if(Be!==0&&Ce!==null){i=Ce;var x=wr;t:switch(Be){case 1:Be=0,wr=null,no(a,i,x,1);break;case 2:case 9:if(ny(x)){Be=0,wr=null,Kb(i);break}i=function(){Be!==2&&Be!==9||Xe!==a||(Be=7),fn(a)},x.then(i,i);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:ny(x)?(Be=0,wr=null,Kb(i)):(Be=0,wr=null,no(a,i,x,7));break;case 5:var O=null;switch(Ce.tag){case 26:O=Ce.memoizedState;case 5:case 27:var k=Ce;if(!O||k1(O)){Be=0,wr=null;var M=k.sibling;if(M!==null)Ce=M;else{var B=k.return;B!==null?(Ce=B,Oc(B)):Ce=null}break t}}Be=0,wr=null,no(a,i,x,5);break;case 6:Be=0,wr=null,no(a,i,x,6);break;case 8:Lp(),ot=6;break e;default:throw Error(n(462))}}dN();break}catch(Y){Ub(a,Y)}while(!0);return An=Wa=null,q.H=d,q.A=g,Le=s,Ce!==null?0:(Xe=null,Me=0,Ks(),ot)}function dN(){for(;Ce!==null&&!Zt();)Gb(Ce)}function Gb(a){var i=xb(a.alternate,a,_n);a.memoizedProps=a.pendingProps,i===null?Oc(a):Ce=i}function Kb(a){var i=a,s=i.alternate;switch(i.tag){case 15:case 0:i=fb(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=fb(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:ep(i);default:bb(s,i),i=Ce=Wx(i,_n),i=xb(s,i,_n)}a.memoizedProps=a.pendingProps,i===null?Oc(a):Ce=i}function no(a,i,s,d){An=Wa=null,ep(i),Vi=null,hl=0;var g=i.return;try{if(eN(a,g,i,s,Me)){ot=1,gc(a,_r(s,a.current)),Ce=null;return}}catch(x){if(g!==null)throw Ce=g,x;ot=1,gc(a,_r(s,a.current)),Ce=null;return}i.flags&32768?(De||d===1?a=!0:Qi||(Me&536870912)!==0?a=!1:(ga=a=!0,(d===2||d===9||d===3||d===6)&&(d=Rr.current,d!==null&&d.tag===13&&(d.flags|=16384))),Wb(i,a)):Oc(i)}function Oc(a){var i=a;do{if((i.flags&32768)!==0){Wb(i,ga);return}a=i.return;var s=rN(i.alternate,i,_n);if(s!==null){Ce=s;return}if(i=i.sibling,i!==null){Ce=i;return}Ce=i=a}while(i!==null);ot===0&&(ot=5)}function Wb(a,i){do{var s=nN(a.alternate,a);if(s!==null){s.flags&=32767,Ce=s;return}if(s=a.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(a=a.sibling,a!==null)){Ce=a;return}Ce=a=s}while(a!==null);ot=6,Ce=null}function Vb(a,i,s,d,g,x,O,k,M){a.cancelPendingCommit=null;do Ec();while(qt!==0);if((Le&6)!==0)throw Error(n(327));if(i!==null){if(i===a.current)throw Error(n(177));if(x=i.lanes|i.childLanes,x|=Cf,H5(a,s,x,O,k,M),a===Xe&&(Ce=Xe=null,Me=0),eo=i,ya=a,to=s,Dp=x,zp=g,Bb=d,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,mN(Ms,function(){return Jb(),null})):(a.callbackNode=null,a.callbackPriority=0),d=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||d){d=q.T,q.T=null,g=G.p,G.p=2,O=Le,Le|=4;try{aN(a,i,s)}finally{Le=O,G.p=g,q.T=d}}qt=1,Xb(),Fb(),Zb()}}function Xb(){if(qt===1){qt=0;var a=ya,i=eo,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=q.T,q.T=null;var d=G.p;G.p=2;var g=Le;Le|=4;try{Mb(i,a);var x=Zp,O=Lx(a.containerInfo),k=x.focusedElem,M=x.selectionRange;if(O!==k&&k&&k.ownerDocument&&Rx(k.ownerDocument.documentElement,k)){if(M!==null&&Af(k)){var B=M.start,Y=M.end;if(Y===void 0&&(Y=B),"selectionStart"in k)k.selectionStart=B,k.selectionEnd=Math.min(Y,k.value.length);else{var V=k.ownerDocument||document,I=V&&V.defaultView||window;if(I.getSelection){var $=I.getSelection(),be=k.textContent.length,he=Math.min(M.start,be),Ge=M.end===void 0?he:Math.min(M.end,be);!$.extend&&he>Ge&&(O=Ge,Ge=he,he=O);var R=zx(k,he),D=zx(k,Ge);if(R&&D&&($.rangeCount!==1||$.anchorNode!==R.node||$.anchorOffset!==R.offset||$.focusNode!==D.node||$.focusOffset!==D.offset)){var L=V.createRange();L.setStart(R.node,R.offset),$.removeAllRanges(),he>Ge?($.addRange(L),$.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),$.addRange(L))}}}}for(V=[],$=k;$=$.parentNode;)$.nodeType===1&&V.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<V.length;k++){var K=V[k];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Bc=!!Fp,Zp=Fp=null}finally{Le=g,G.p=d,q.T=s}}a.current=i,qt=2}}function Fb(){if(qt===2){qt=0;var a=ya,i=eo,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=q.T,q.T=null;var d=G.p;G.p=2;var g=Le;Le|=4;try{kb(a,i.alternate,i)}finally{Le=g,G.p=d,q.T=s}}qt=3}}function Zb(){if(qt===4||qt===3){qt=0,Qt();var a=ya,i=eo,s=to,d=Bb;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qt=5:(qt=0,eo=ya=null,Qb(a,a.pendingLanes));var g=a.pendingLanes;if(g===0&&(xa=null),rf(s),i=i.stateNode,mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(Io,i,void 0,(i.current.flags&128)===128)}catch{}if(d!==null){i=q.T,g=G.p,G.p=2,q.T=null;try{for(var x=a.onRecoverableError,O=0;O<d.length;O++){var k=d[O];x(k.value,{componentStack:k.stack})}}finally{q.T=i,G.p=g}}(to&3)!==0&&Ec(),fn(a),g=a.pendingLanes,(s&4194090)!==0&&(g&42)!==0?a===Rp?Sl++:(Sl=0,Rp=a):Sl=0,Al(0)}}function Qb(a,i){(a.pooledCacheLanes&=i)===0&&(i=a.pooledCache,i!=null&&(a.pooledCache=null,nl(i)))}function Ec(a){return Xb(),Fb(),Zb(),Jb()}function Jb(){if(qt!==5)return!1;var a=ya,i=Dp;Dp=0;var s=rf(to),d=q.T,g=G.p;try{G.p=32>s?32:s,q.T=null,s=zp,zp=null;var x=ya,O=to;if(qt=0,eo=ya=null,to=0,(Le&6)!==0)throw Error(n(331));var k=Le;if(Le|=4,Rb(x.current),Pb(x,x.current,O,s),Le=k,Al(0,!1),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(Io,x)}catch{}return!0}finally{G.p=g,q.T=d,Qb(a,i)}}function e1(a,i,s){i=_r(s,i),i=hp(a.stateNode,i,2),a=ca(a,i,2),a!==null&&($o(a,2),fn(a))}function We(a,i,s){if(a.tag===3)e1(a,a,s);else for(;i!==null;){if(i.tag===3){e1(i,a,s);break}else if(i.tag===1){var d=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(xa===null||!xa.has(d))){a=_r(s,a),s=ab(2),d=ca(i,s,2),d!==null&&(ib(s,d,i,a),$o(d,2),fn(d));break}}i=i.return}}function qp(a,i,s){var d=a.pingCache;if(d===null){d=a.pingCache=new lN;var g=new Set;d.set(i,g)}else g=d.get(i),g===void 0&&(g=new Set,d.set(i,g));g.has(s)||(Tp=!0,g.add(s),a=fN.bind(null,a,i,s),i.then(a,a))}function fN(a,i,s){var d=a.pingCache;d!==null&&d.delete(i),a.pingedLanes|=a.suspendedLanes&s,a.warmLanes&=~s,Xe===a&&(Me&s)===s&&(ot===4||ot===3&&(Me&62914560)===Me&&300>Ct()-Pp?(Le&2)===0&&ro(a,0):Mp|=s,Ji===Me&&(Ji=0)),fn(a)}function t1(a,i){i===0&&(i=Zv()),a=Bi(a,i),a!==null&&($o(a,i),fn(a))}function pN(a){var i=a.memoizedState,s=0;i!==null&&(s=i.retryLane),t1(a,s)}function hN(a,i){var s=0;switch(a.tag){case 13:var d=a.stateNode,g=a.memoizedState;g!==null&&(s=g.retryLane);break;case 19:d=a.stateNode;break;case 22:d=a.stateNode._retryCache;break;default:throw Error(n(314))}d!==null&&d.delete(i),t1(a,s)}function mN(a,i){return Nt(a,i)}var kc=null,ao=null,$p=!1,Nc=!1,Up=!1,ei=0;function fn(a){a!==ao&&a.next===null&&(ao===null?kc=ao=a:ao=ao.next=a),Nc=!0,$p||($p=!0,vN())}function Al(a,i){if(!Up&&Nc){Up=!0;do for(var s=!1,d=kc;d!==null;){if(a!==0){var g=d.pendingLanes;if(g===0)var x=0;else{var O=d.suspendedLanes,k=d.pingedLanes;x=(1<<31-gr(42|a)+1)-1,x&=g&~(O&~k),x=x&201326741?x&201326741|1:x?x|2:0}x!==0&&(s=!0,i1(d,x))}else x=Me,x=Ds(d,d===Xe?x:0,d.cancelPendingCommit!==null||d.timeoutHandle!==-1),(x&3)===0||qo(d,x)||(s=!0,i1(d,x));d=d.next}while(s);Up=!1}}function gN(){r1()}function r1(){Nc=$p=!1;var a=0;ei!==0&&(ON()&&(a=ei),ei=0);for(var i=Ct(),s=null,d=kc;d!==null;){var g=d.next,x=n1(d,i);x===0?(d.next=null,s===null?kc=g:s.next=g,g===null&&(ao=s)):(s=d,(a!==0||(x&3)!==0)&&(Nc=!0)),d=g}Al(a)}function n1(a,i){for(var s=a.suspendedLanes,d=a.pingedLanes,g=a.expirationTimes,x=a.pendingLanes&-62914561;0<x;){var O=31-gr(x),k=1<<O,M=g[O];M===-1?((k&s)===0||(k&d)!==0)&&(g[O]=U5(k,i)):M<=i&&(a.expiredLanes|=k),x&=~k}if(i=Xe,s=Me,s=Ds(a,a===i?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),d=a.callbackNode,s===0||a===i&&(Be===2||Be===9)||a.cancelPendingCommit!==null)return d!==null&&d!==null&&Re(d),a.callbackNode=null,a.callbackPriority=0;if((s&3)===0||qo(a,s)){if(i=s&-s,i===a.callbackPriority)return i;switch(d!==null&&Re(d),rf(s)){case 2:case 8:s=Vv;break;case 32:s=Ms;break;case 268435456:s=Xv;break;default:s=Ms}return d=a1.bind(null,a),s=Nt(s,d),a.callbackPriority=i,a.callbackNode=s,i}return d!==null&&d!==null&&Re(d),a.callbackPriority=2,a.callbackNode=null,2}function a1(a,i){if(qt!==0&&qt!==5)return a.callbackNode=null,a.callbackPriority=0,null;var s=a.callbackNode;if(Ec()&&a.callbackNode!==s)return null;var d=Me;return d=Ds(a,a===Xe?d:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),d===0?null:(qb(a,d,i),n1(a,Ct()),a.callbackNode!=null&&a.callbackNode===s?a1.bind(null,a):null)}function i1(a,i){if(Ec())return null;qb(a,i,!0)}function vN(){kN(function(){(Le&6)!==0?Nt(Wv,gN):r1()})}function Hp(){return ei===0&&(ei=Fv()),ei}function o1(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Is(""+a)}function l1(a,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,a.id&&s.setAttribute("form",a.id),i.parentNode.insertBefore(s,i),a=new FormData(a),s.parentNode.removeChild(s),a}function xN(a,i,s,d,g){if(i==="submit"&&s&&s.stateNode===g){var x=o1((g[ar]||null).action),O=d.submitter;O&&(i=(i=O[ar]||null)?o1(i.formAction):O.getAttribute("formAction"),i!==null&&(x=i,O=null));var k=new Hs("action","action",null,d,g);a.push({event:k,listeners:[{instance:null,listener:function(){if(d.defaultPrevented){if(ei!==0){var M=O?l1(g,O):new FormData(g);cp(s,{pending:!0,data:M,method:g.method,action:x},null,M)}}else typeof x=="function"&&(k.preventDefault(),M=O?l1(g,O):new FormData(g),cp(s,{pending:!0,data:M,method:g.method,action:x},x,M))},currentTarget:g}]})}}for(var Yp=0;Yp<Nf.length;Yp++){var Gp=Nf[Yp],yN=Gp.toLowerCase(),bN=Gp[0].toUpperCase()+Gp.slice(1);Fr(yN,"on"+bN)}Fr(qx,"onAnimationEnd"),Fr($x,"onAnimationIteration"),Fr(Ux,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(L4,"onTransitionRun"),Fr(B4,"onTransitionStart"),Fr(I4,"onTransitionCancel"),Fr(Hx,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function s1(a,i){i=(i&4)!==0;for(var s=0;s<a.length;s++){var d=a[s],g=d.event;d=d.listeners;e:{var x=void 0;if(i)for(var O=d.length-1;0<=O;O--){var k=d[O],M=k.instance,B=k.currentTarget;if(k=k.listener,M!==x&&g.isPropagationStopped())break e;x=k,g.currentTarget=B;try{x(g)}catch(Y){mc(Y)}g.currentTarget=null,x=M}else for(O=0;O<d.length;O++){if(k=d[O],M=k.instance,B=k.currentTarget,k=k.listener,M!==x&&g.isPropagationStopped())break e;x=k,g.currentTarget=B;try{x(g)}catch(Y){mc(Y)}g.currentTarget=null,x=M}}}}function Te(a,i){var s=i[nf];s===void 0&&(s=i[nf]=new Set);var d=a+"__bubble";s.has(d)||(c1(i,a,2,!1),s.add(d))}function Kp(a,i,s){var d=0;i&&(d|=4),c1(s,a,d,i)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function Wp(a){if(!a[Cc]){a[Cc]=!0,rx.forEach(function(s){s!=="selectionchange"&&(wN.has(s)||Kp(s,!1,a),Kp(s,!0,a))});var i=a.nodeType===9?a:a.ownerDocument;i===null||i[Cc]||(i[Cc]=!0,Kp("selectionchange",!1,i))}}function c1(a,i,s,d){switch(P1(i)){case 2:var g=VN;break;case 8:g=XN;break;default:g=lh}s=g.bind(null,i,s,a),g=void 0,!mf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(g=!0),d?g!==void 0?a.addEventListener(i,s,{capture:!0,passive:g}):a.addEventListener(i,s,!0):g!==void 0?a.addEventListener(i,s,{passive:g}):a.addEventListener(i,s,!1)}function Vp(a,i,s,d,g){var x=d;if((i&1)===0&&(i&2)===0&&d!==null)e:for(;;){if(d===null)return;var O=d.tag;if(O===3||O===4){var k=d.stateNode.containerInfo;if(k===g)break;if(O===4)for(O=d.return;O!==null;){var M=O.tag;if((M===3||M===4)&&O.stateNode.containerInfo===g)return;O=O.return}for(;k!==null;){if(O=Oi(k),O===null)return;if(M=O.tag,M===5||M===6||M===26||M===27){d=x=O;continue e}k=k.parentNode}}d=d.return}gx(function(){var B=x,Y=pf(s),V=[];e:{var I=Yx.get(a);if(I!==void 0){var $=Hs,be=a;switch(a){case"keypress":if($s(s)===0)break e;case"keydown":case"keyup":$=m4;break;case"focusin":be="focus",$=yf;break;case"focusout":be="blur",$=yf;break;case"beforeblur":case"afterblur":$=yf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=yx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=n4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=x4;break;case qx:case $x:case Ux:$=o4;break;case Hx:$=b4;break;case"scroll":case"scrollend":$=t4;break;case"wheel":$=j4;break;case"copy":case"cut":case"paste":$=s4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=wx;break;case"toggle":case"beforetoggle":$=A4}var he=(i&4)!==0,Ge=!he&&(a==="scroll"||a==="scrollend"),R=he?I!==null?I+"Capture":null:I;he=[];for(var D=B,L;D!==null;){var K=D;if(L=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||L===null||R===null||(K=Yo(D,R),K!=null&&he.push(El(D,K,L))),Ge)break;D=D.return}0<he.length&&(I=new $(I,be,null,s,Y),V.push({event:I,listeners:he}))}}if((i&7)===0){e:{if(I=a==="mouseover"||a==="pointerover",$=a==="mouseout"||a==="pointerout",I&&s!==ff&&(be=s.relatedTarget||s.fromElement)&&(Oi(be)||be[Ai]))break e;if(($||I)&&(I=Y.window===Y?Y:(I=Y.ownerDocument)?I.defaultView||I.parentWindow:window,$?(be=s.relatedTarget||s.toElement,$=B,be=be?Oi(be):null,be!==null&&(Ge=l(be),he=be.tag,be!==Ge||he!==5&&he!==27&&he!==6)&&(be=null)):($=null,be=B),$!==be)){if(he=yx,K="onMouseLeave",R="onMouseEnter",D="mouse",(a==="pointerout"||a==="pointerover")&&(he=wx,K="onPointerLeave",R="onPointerEnter",D="pointer"),Ge=$==null?I:Ho($),L=be==null?I:Ho(be),I=new he(K,D+"leave",$,s,Y),I.target=Ge,I.relatedTarget=L,K=null,Oi(Y)===B&&(he=new he(R,D+"enter",be,s,Y),he.target=L,he.relatedTarget=Ge,K=he),Ge=K,$&&be)t:{for(he=$,R=be,D=0,L=he;L;L=io(L))D++;for(L=0,K=R;K;K=io(K))L++;for(;0<D-L;)he=io(he),D--;for(;0<L-D;)R=io(R),L--;for(;D--;){if(he===R||R!==null&&he===R.alternate)break t;he=io(he),R=io(R)}he=null}else he=null;$!==null&&u1(V,I,$,he,!1),be!==null&&Ge!==null&&u1(V,Ge,be,he,!0)}}e:{if(I=B?Ho(B):window,$=I.nodeName&&I.nodeName.toLowerCase(),$==="select"||$==="input"&&I.type==="file")var se=Cx;else if(kx(I))if(Tx)se=D4;else{se=_4;var Ee=M4}else $=I.nodeName,!$||$.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?B&&df(B.elementType)&&(se=Cx):se=P4;if(se&&(se=se(a,B))){Nx(V,se,s,Y);break e}Ee&&Ee(a,I,B),a==="focusout"&&B&&I.type==="number"&&B.memoizedProps.value!=null&&uf(I,"number",I.value)}switch(Ee=B?Ho(B):window,a){case"focusin":(kx(Ee)||Ee.contentEditable==="true")&&(zi=Ee,Of=B,Qo=null);break;case"focusout":Qo=Of=zi=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Bx(V,s,Y);break;case"selectionchange":if(R4)break;case"keydown":case"keyup":Bx(V,s,Y)}var fe;if(wf)e:{switch(a){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Di?Ox(a,s)&&(ve="onCompositionEnd"):a==="keydown"&&s.keyCode===229&&(ve="onCompositionStart");ve&&(jx&&s.locale!=="ko"&&(Di||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Di&&(fe=vx()):(ia=Y,gf="value"in ia?ia.value:ia.textContent,Di=!0)),Ee=Tc(B,ve),0<Ee.length&&(ve=new bx(ve,a,null,s,Y),V.push({event:ve,listeners:Ee}),fe?ve.data=fe:(fe=Ex(s),fe!==null&&(ve.data=fe)))),(fe=E4?k4(a,s):N4(a,s))&&(ve=Tc(B,"onBeforeInput"),0<ve.length&&(Ee=new bx("onBeforeInput","beforeinput",null,s,Y),V.push({event:Ee,listeners:ve}),Ee.data=fe)),xN(V,a,B,s,Y)}s1(V,i)})}function El(a,i,s){return{instance:a,listener:i,currentTarget:s}}function Tc(a,i){for(var s=i+"Capture",d=[];a!==null;){var g=a,x=g.stateNode;if(g=g.tag,g!==5&&g!==26&&g!==27||x===null||(g=Yo(a,s),g!=null&&d.unshift(El(a,g,x)),g=Yo(a,i),g!=null&&d.push(El(a,g,x))),a.tag===3)return d;a=a.return}return[]}function io(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function u1(a,i,s,d,g){for(var x=i._reactName,O=[];s!==null&&s!==d;){var k=s,M=k.alternate,B=k.stateNode;if(k=k.tag,M!==null&&M===d)break;k!==5&&k!==26&&k!==27||B===null||(M=B,g?(B=Yo(s,x),B!=null&&O.unshift(El(s,B,M))):g||(B=Yo(s,x),B!=null&&O.push(El(s,B,M)))),s=s.return}O.length!==0&&a.push({event:i,listeners:O})}var jN=/\r\n?/g,SN=/\u0000|\uFFFD/g;function d1(a){return(typeof a=="string"?a:""+a).replace(jN,`
`).replace(SN,"")}function f1(a,i){return i=d1(i),d1(a)===i}function Mc(){}function Ye(a,i,s,d,g,x){switch(s){case"children":typeof d=="string"?i==="body"||i==="textarea"&&d===""||Mi(a,d):(typeof d=="number"||typeof d=="bigint")&&i!=="body"&&Mi(a,""+d);break;case"className":Rs(a,"class",d);break;case"tabIndex":Rs(a,"tabindex",d);break;case"dir":case"role":case"viewBox":case"width":case"height":Rs(a,s,d);break;case"style":hx(a,d,x);break;case"data":if(i!=="object"){Rs(a,"data",d);break}case"src":case"href":if(d===""&&(i!=="a"||s!=="href")){a.removeAttribute(s);break}if(d==null||typeof d=="function"||typeof d=="symbol"||typeof d=="boolean"){a.removeAttribute(s);break}d=Is(""+d),a.setAttribute(s,d);break;case"action":case"formAction":if(typeof d=="function"){a.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof x=="function"&&(s==="formAction"?(i!=="input"&&Ye(a,i,"name",g.name,g,null),Ye(a,i,"formEncType",g.formEncType,g,null),Ye(a,i,"formMethod",g.formMethod,g,null),Ye(a,i,"formTarget",g.formTarget,g,null)):(Ye(a,i,"encType",g.encType,g,null),Ye(a,i,"method",g.method,g,null),Ye(a,i,"target",g.target,g,null)));if(d==null||typeof d=="symbol"||typeof d=="boolean"){a.removeAttribute(s);break}d=Is(""+d),a.setAttribute(s,d);break;case"onClick":d!=null&&(a.onclick=Mc);break;case"onScroll":d!=null&&Te("scroll",a);break;case"onScrollEnd":d!=null&&Te("scrollend",a);break;case"dangerouslySetInnerHTML":if(d!=null){if(typeof d!="object"||!("__html"in d))throw Error(n(61));if(s=d.__html,s!=null){if(g.children!=null)throw Error(n(60));a.innerHTML=s}}break;case"multiple":a.multiple=d&&typeof d!="function"&&typeof d!="symbol";break;case"muted":a.muted=d&&typeof d!="function"&&typeof d!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(d==null||typeof d=="function"||typeof d=="boolean"||typeof d=="symbol"){a.removeAttribute("xlink:href");break}s=Is(""+d),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":d!=null&&typeof d!="function"&&typeof d!="symbol"?a.setAttribute(s,""+d):a.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":d&&typeof d!="function"&&typeof d!="symbol"?a.setAttribute(s,""):a.removeAttribute(s);break;case"capture":case"download":d===!0?a.setAttribute(s,""):d!==!1&&d!=null&&typeof d!="function"&&typeof d!="symbol"?a.setAttribute(s,d):a.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":d!=null&&typeof d!="function"&&typeof d!="symbol"&&!isNaN(d)&&1<=d?a.setAttribute(s,d):a.removeAttribute(s);break;case"rowSpan":case"start":d==null||typeof d=="function"||typeof d=="symbol"||isNaN(d)?a.removeAttribute(s):a.setAttribute(s,d);break;case"popover":Te("beforetoggle",a),Te("toggle",a),zs(a,"popover",d);break;case"xlinkActuate":yn(a,"http://www.w3.org/1999/xlink","xlink:actuate",d);break;case"xlinkArcrole":yn(a,"http://www.w3.org/1999/xlink","xlink:arcrole",d);break;case"xlinkRole":yn(a,"http://www.w3.org/1999/xlink","xlink:role",d);break;case"xlinkShow":yn(a,"http://www.w3.org/1999/xlink","xlink:show",d);break;case"xlinkTitle":yn(a,"http://www.w3.org/1999/xlink","xlink:title",d);break;case"xlinkType":yn(a,"http://www.w3.org/1999/xlink","xlink:type",d);break;case"xmlBase":yn(a,"http://www.w3.org/XML/1998/namespace","xml:base",d);break;case"xmlLang":yn(a,"http://www.w3.org/XML/1998/namespace","xml:lang",d);break;case"xmlSpace":yn(a,"http://www.w3.org/XML/1998/namespace","xml:space",d);break;case"is":zs(a,"is",d);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=J5.get(s)||s,zs(a,s,d))}}function Xp(a,i,s,d,g,x){switch(s){case"style":hx(a,d,x);break;case"dangerouslySetInnerHTML":if(d!=null){if(typeof d!="object"||!("__html"in d))throw Error(n(61));if(s=d.__html,s!=null){if(g.children!=null)throw Error(n(60));a.innerHTML=s}}break;case"children":typeof d=="string"?Mi(a,d):(typeof d=="number"||typeof d=="bigint")&&Mi(a,""+d);break;case"onScroll":d!=null&&Te("scroll",a);break;case"onScrollEnd":d!=null&&Te("scrollend",a);break;case"onClick":d!=null&&(a.onclick=Mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nx.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(g=s.endsWith("Capture"),i=s.slice(2,g?s.length-7:void 0),x=a[ar]||null,x=x!=null?x[s]:null,typeof x=="function"&&a.removeEventListener(i,x,g),typeof d=="function")){typeof x!="function"&&x!==null&&(s in a?a[s]=null:a.hasAttribute(s)&&a.removeAttribute(s)),a.addEventListener(i,d,g);break e}s in a?a[s]=d:d===!0?a.setAttribute(s,""):zs(a,s,d)}}}function $t(a,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",a),Te("load",a);var d=!1,g=!1,x;for(x in s)if(s.hasOwnProperty(x)){var O=s[x];if(O!=null)switch(x){case"src":d=!0;break;case"srcSet":g=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,i));default:Ye(a,i,x,O,s,null)}}g&&Ye(a,i,"srcSet",s.srcSet,s,null),d&&Ye(a,i,"src",s.src,s,null);return;case"input":Te("invalid",a);var k=x=O=g=null,M=null,B=null;for(d in s)if(s.hasOwnProperty(d)){var Y=s[d];if(Y!=null)switch(d){case"name":g=Y;break;case"type":O=Y;break;case"checked":M=Y;break;case"defaultChecked":B=Y;break;case"value":x=Y;break;case"defaultValue":k=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(n(137,i));break;default:Ye(a,i,d,Y,s,null)}}ux(a,x,k,M,B,O,g,!1),Ls(a);return;case"select":Te("invalid",a),d=O=x=null;for(g in s)if(s.hasOwnProperty(g)&&(k=s[g],k!=null))switch(g){case"value":x=k;break;case"defaultValue":O=k;break;case"multiple":d=k;default:Ye(a,i,g,k,s,null)}i=x,s=O,a.multiple=!!d,i!=null?Ti(a,!!d,i,!1):s!=null&&Ti(a,!!d,s,!0);return;case"textarea":Te("invalid",a),x=g=d=null;for(O in s)if(s.hasOwnProperty(O)&&(k=s[O],k!=null))switch(O){case"value":d=k;break;case"defaultValue":g=k;break;case"children":x=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(n(91));break;default:Ye(a,i,O,k,s,null)}fx(a,d,g,x),Ls(a);return;case"option":for(M in s)if(s.hasOwnProperty(M)&&(d=s[M],d!=null))switch(M){case"selected":a.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:Ye(a,i,M,d,s,null)}return;case"dialog":Te("beforetoggle",a),Te("toggle",a),Te("cancel",a),Te("close",a);break;case"iframe":case"object":Te("load",a);break;case"video":case"audio":for(d=0;d<Ol.length;d++)Te(Ol[d],a);break;case"image":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"embed":case"source":case"link":Te("error",a),Te("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in s)if(s.hasOwnProperty(B)&&(d=s[B],d!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,i));default:Ye(a,i,B,d,s,null)}return;default:if(df(i)){for(Y in s)s.hasOwnProperty(Y)&&(d=s[Y],d!==void 0&&Xp(a,i,Y,d,s,void 0));return}}for(k in s)s.hasOwnProperty(k)&&(d=s[k],d!=null&&Ye(a,i,k,d,s,null))}function AN(a,i,s,d){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var g=null,x=null,O=null,k=null,M=null,B=null,Y=null;for($ in s){var V=s[$];if(s.hasOwnProperty($)&&V!=null)switch($){case"checked":break;case"value":break;case"defaultValue":M=V;default:d.hasOwnProperty($)||Ye(a,i,$,null,d,V)}}for(var I in d){var $=d[I];if(V=s[I],d.hasOwnProperty(I)&&($!=null||V!=null))switch(I){case"type":x=$;break;case"name":g=$;break;case"checked":B=$;break;case"defaultChecked":Y=$;break;case"value":O=$;break;case"defaultValue":k=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(n(137,i));break;default:$!==V&&Ye(a,i,I,$,d,V)}}cf(a,O,k,M,B,Y,x,g);return;case"select":$=O=k=I=null;for(x in s)if(M=s[x],s.hasOwnProperty(x)&&M!=null)switch(x){case"value":break;case"multiple":$=M;default:d.hasOwnProperty(x)||Ye(a,i,x,null,d,M)}for(g in d)if(x=d[g],M=s[g],d.hasOwnProperty(g)&&(x!=null||M!=null))switch(g){case"value":I=x;break;case"defaultValue":k=x;break;case"multiple":O=x;default:x!==M&&Ye(a,i,g,x,d,M)}i=k,s=O,d=$,I!=null?Ti(a,!!s,I,!1):!!d!=!!s&&(i!=null?Ti(a,!!s,i,!0):Ti(a,!!s,s?[]:"",!1));return;case"textarea":$=I=null;for(k in s)if(g=s[k],s.hasOwnProperty(k)&&g!=null&&!d.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Ye(a,i,k,null,d,g)}for(O in d)if(g=d[O],x=s[O],d.hasOwnProperty(O)&&(g!=null||x!=null))switch(O){case"value":I=g;break;case"defaultValue":$=g;break;case"children":break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(n(91));break;default:g!==x&&Ye(a,i,O,g,d,x)}dx(a,I,$);return;case"option":for(var be in s)if(I=s[be],s.hasOwnProperty(be)&&I!=null&&!d.hasOwnProperty(be))switch(be){case"selected":a.selected=!1;break;default:Ye(a,i,be,null,d,I)}for(M in d)if(I=d[M],$=s[M],d.hasOwnProperty(M)&&I!==$&&(I!=null||$!=null))switch(M){case"selected":a.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:Ye(a,i,M,I,d,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in s)I=s[he],s.hasOwnProperty(he)&&I!=null&&!d.hasOwnProperty(he)&&Ye(a,i,he,null,d,I);for(B in d)if(I=d[B],$=s[B],d.hasOwnProperty(B)&&I!==$&&(I!=null||$!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(n(137,i));break;default:Ye(a,i,B,I,d,$)}return;default:if(df(i)){for(var Ge in s)I=s[Ge],s.hasOwnProperty(Ge)&&I!==void 0&&!d.hasOwnProperty(Ge)&&Xp(a,i,Ge,void 0,d,I);for(Y in d)I=d[Y],$=s[Y],!d.hasOwnProperty(Y)||I===$||I===void 0&&$===void 0||Xp(a,i,Y,I,d,$);return}}for(var R in s)I=s[R],s.hasOwnProperty(R)&&I!=null&&!d.hasOwnProperty(R)&&Ye(a,i,R,null,d,I);for(V in d)I=d[V],$=s[V],!d.hasOwnProperty(V)||I===$||I==null&&$==null||Ye(a,i,V,I,d,$)}var Fp=null,Zp=null;function _c(a){return a.nodeType===9?a:a.ownerDocument}function p1(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h1(a,i){if(a===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&i==="foreignObject"?0:a}function Qp(a,i){return a==="textarea"||a==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jp=null;function ON(){var a=window.event;return a&&a.type==="popstate"?a===Jp?!1:(Jp=a,!0):(Jp=null,!1)}var m1=typeof setTimeout=="function"?setTimeout:void 0,EN=typeof clearTimeout=="function"?clearTimeout:void 0,g1=typeof Promise=="function"?Promise:void 0,kN=typeof queueMicrotask=="function"?queueMicrotask:typeof g1<"u"?function(a){return g1.resolve(null).then(a).catch(NN)}:m1;function NN(a){setTimeout(function(){throw a})}function wa(a){return a==="head"}function v1(a,i){var s=i,d=0,g=0;do{var x=s.nextSibling;if(a.removeChild(s),x&&x.nodeType===8)if(s=x.data,s==="/$"){if(0<d&&8>d){s=d;var O=a.ownerDocument;if(s&1&&kl(O.documentElement),s&2&&kl(O.body),s&4)for(s=O.head,kl(s),O=s.firstChild;O;){var k=O.nextSibling,M=O.nodeName;O[Uo]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&O.rel.toLowerCase()==="stylesheet"||s.removeChild(O),O=k}}if(g===0){a.removeChild(x),zl(i);return}g--}else s==="$"||s==="$?"||s==="$!"?g++:d=s.charCodeAt(0)-48;else d=0;s=x}while(s);zl(i)}function eh(a){var i=a.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":eh(s),af(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}a.removeChild(s)}}function CN(a,i,s,d){for(;a.nodeType===1;){var g=s;if(a.nodeName.toLowerCase()!==i.toLowerCase()){if(!d&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(d){if(!a[Uo])switch(i){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(x=a.getAttribute("rel"),x==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(x!==g.rel||a.getAttribute("href")!==(g.href==null||g.href===""?null:g.href)||a.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin)||a.getAttribute("title")!==(g.title==null?null:g.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(x=a.getAttribute("src"),(x!==(g.src==null?null:g.src)||a.getAttribute("type")!==(g.type==null?null:g.type)||a.getAttribute("crossorigin")!==(g.crossOrigin==null?null:g.crossOrigin))&&x&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(i==="input"&&a.type==="hidden"){var x=g.name==null?null:""+g.name;if(g.type==="hidden"&&a.getAttribute("name")===x)return a}else return a;if(a=Qr(a.nextSibling),a===null)break}return null}function TN(a,i,s){if(i==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!s||(a=Qr(a.nextSibling),a===null))return null;return a}function th(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState==="complete"}function MN(a,i){var s=a.ownerDocument;if(a.data!=="$?"||s.readyState==="complete")i();else{var d=function(){i(),s.removeEventListener("DOMContentLoaded",d)};s.addEventListener("DOMContentLoaded",d),a._reactRetry=d}}function Qr(a){for(;a!=null;a=a.nextSibling){var i=a.nodeType;if(i===1||i===3)break;if(i===8){if(i=a.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return a}var rh=null;function x1(a){a=a.previousSibling;for(var i=0;a;){if(a.nodeType===8){var s=a.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return a;i--}else s==="/$"&&i++}a=a.previousSibling}return null}function y1(a,i,s){switch(i=_c(s),a){case"html":if(a=i.documentElement,!a)throw Error(n(452));return a;case"head":if(a=i.head,!a)throw Error(n(453));return a;case"body":if(a=i.body,!a)throw Error(n(454));return a;default:throw Error(n(451))}}function kl(a){for(var i=a.attributes;i.length;)a.removeAttributeNode(i[0]);af(a)}var Br=new Map,b1=new Set;function Pc(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Pn=G.d;G.d={f:_N,r:PN,D:DN,C:zN,L:RN,m:LN,X:IN,S:BN,M:qN};function _N(){var a=Pn.f(),i=Ac();return a||i}function PN(a){var i=Ei(a);i!==null&&i.tag===5&&i.type==="form"?qy(i):Pn.r(a)}var oo=typeof document>"u"?null:document;function w1(a,i,s){var d=oo;if(d&&typeof i=="string"&&i){var g=Mr(i);g='link[rel="'+a+'"][href="'+g+'"]',typeof s=="string"&&(g+='[crossorigin="'+s+'"]'),b1.has(g)||(b1.add(g),a={rel:a,crossOrigin:s,href:i},d.querySelector(g)===null&&(i=d.createElement("link"),$t(i,"link",a),Tt(i),d.head.appendChild(i)))}}function DN(a){Pn.D(a),w1("dns-prefetch",a,null)}function zN(a,i){Pn.C(a,i),w1("preconnect",a,i)}function RN(a,i,s){Pn.L(a,i,s);var d=oo;if(d&&a&&i){var g='link[rel="preload"][as="'+Mr(i)+'"]';i==="image"&&s&&s.imageSrcSet?(g+='[imagesrcset="'+Mr(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(g+='[imagesizes="'+Mr(s.imageSizes)+'"]')):g+='[href="'+Mr(a)+'"]';var x=g;switch(i){case"style":x=lo(a);break;case"script":x=so(a)}Br.has(x)||(a=m({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:a,as:i},s),Br.set(x,a),d.querySelector(g)!==null||i==="style"&&d.querySelector(Nl(x))||i==="script"&&d.querySelector(Cl(x))||(i=d.createElement("link"),$t(i,"link",a),Tt(i),d.head.appendChild(i)))}}function LN(a,i){Pn.m(a,i);var s=oo;if(s&&a){var d=i&&typeof i.as=="string"?i.as:"script",g='link[rel="modulepreload"][as="'+Mr(d)+'"][href="'+Mr(a)+'"]',x=g;switch(d){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":x=so(a)}if(!Br.has(x)&&(a=m({rel:"modulepreload",href:a},i),Br.set(x,a),s.querySelector(g)===null)){switch(d){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Cl(x)))return}d=s.createElement("link"),$t(d,"link",a),Tt(d),s.head.appendChild(d)}}}function BN(a,i,s){Pn.S(a,i,s);var d=oo;if(d&&a){var g=ki(d).hoistableStyles,x=lo(a);i=i||"default";var O=g.get(x);if(!O){var k={loading:0,preload:null};if(O=d.querySelector(Nl(x)))k.loading=5;else{a=m({rel:"stylesheet",href:a,"data-precedence":i},s),(s=Br.get(x))&&nh(a,s);var M=O=d.createElement("link");Tt(M),$t(M,"link",a),M._p=new Promise(function(B,Y){M.onload=B,M.onerror=Y}),M.addEventListener("load",function(){k.loading|=1}),M.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Dc(O,i,d)}O={type:"stylesheet",instance:O,count:1,state:k},g.set(x,O)}}}function IN(a,i){Pn.X(a,i);var s=oo;if(s&&a){var d=ki(s).hoistableScripts,g=so(a),x=d.get(g);x||(x=s.querySelector(Cl(g)),x||(a=m({src:a,async:!0},i),(i=Br.get(g))&&ah(a,i),x=s.createElement("script"),Tt(x),$t(x,"link",a),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},d.set(g,x))}}function qN(a,i){Pn.M(a,i);var s=oo;if(s&&a){var d=ki(s).hoistableScripts,g=so(a),x=d.get(g);x||(x=s.querySelector(Cl(g)),x||(a=m({src:a,async:!0,type:"module"},i),(i=Br.get(g))&&ah(a,i),x=s.createElement("script"),Tt(x),$t(x,"link",a),s.head.appendChild(x)),x={type:"script",instance:x,count:1,state:null},d.set(g,x))}}function j1(a,i,s,d){var g=(g=ge.current)?Pc(g):null;if(!g)throw Error(n(446));switch(a){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=lo(s.href),s=ki(g).hoistableStyles,d=s.get(i),d||(d={type:"style",instance:null,count:0,state:null},s.set(i,d)),d):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){a=lo(s.href);var x=ki(g).hoistableStyles,O=x.get(a);if(O||(g=g.ownerDocument||g,O={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},x.set(a,O),(x=g.querySelector(Nl(a)))&&!x._p&&(O.instance=x,O.state.loading=5),Br.has(a)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Br.set(a,s),x||$N(g,a,s,O.state))),i&&d===null)throw Error(n(528,""));return O}if(i&&d!==null)throw Error(n(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=so(s),s=ki(g).hoistableScripts,d=s.get(i),d||(d={type:"script",instance:null,count:0,state:null},s.set(i,d)),d):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,a))}}function lo(a){return'href="'+Mr(a)+'"'}function Nl(a){return'link[rel="stylesheet"]['+a+"]"}function S1(a){return m({},a,{"data-precedence":a.precedence,precedence:null})}function $N(a,i,s,d){a.querySelector('link[rel="preload"][as="style"]['+i+"]")?d.loading=1:(i=a.createElement("link"),d.preload=i,i.addEventListener("load",function(){return d.loading|=1}),i.addEventListener("error",function(){return d.loading|=2}),$t(i,"link",s),Tt(i),a.head.appendChild(i))}function so(a){return'[src="'+Mr(a)+'"]'}function Cl(a){return"script[async]"+a}function A1(a,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var d=a.querySelector('style[data-href~="'+Mr(s.href)+'"]');if(d)return i.instance=d,Tt(d),d;var g=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return d=(a.ownerDocument||a).createElement("style"),Tt(d),$t(d,"style",g),Dc(d,s.precedence,a),i.instance=d;case"stylesheet":g=lo(s.href);var x=a.querySelector(Nl(g));if(x)return i.state.loading|=4,i.instance=x,Tt(x),x;d=S1(s),(g=Br.get(g))&&nh(d,g),x=(a.ownerDocument||a).createElement("link"),Tt(x);var O=x;return O._p=new Promise(function(k,M){O.onload=k,O.onerror=M}),$t(x,"link",d),i.state.loading|=4,Dc(x,s.precedence,a),i.instance=x;case"script":return x=so(s.src),(g=a.querySelector(Cl(x)))?(i.instance=g,Tt(g),g):(d=s,(g=Br.get(x))&&(d=m({},s),ah(d,g)),a=a.ownerDocument||a,g=a.createElement("script"),Tt(g),$t(g,"link",d),a.head.appendChild(g),i.instance=g);case"void":return null;default:throw Error(n(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(d=i.instance,i.state.loading|=4,Dc(d,s.precedence,a));return i.instance}function Dc(a,i,s){for(var d=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),g=d.length?d[d.length-1]:null,x=g,O=0;O<d.length;O++){var k=d[O];if(k.dataset.precedence===i)x=k;else if(x!==g)break}x?x.parentNode.insertBefore(a,x.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(a,i.firstChild))}function nh(a,i){a.crossOrigin==null&&(a.crossOrigin=i.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=i.referrerPolicy),a.title==null&&(a.title=i.title)}function ah(a,i){a.crossOrigin==null&&(a.crossOrigin=i.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=i.referrerPolicy),a.integrity==null&&(a.integrity=i.integrity)}var zc=null;function O1(a,i,s){if(zc===null){var d=new Map,g=zc=new Map;g.set(s,d)}else g=zc,d=g.get(s),d||(d=new Map,g.set(s,d));if(d.has(a))return d;for(d.set(a,null),s=s.getElementsByTagName(a),g=0;g<s.length;g++){var x=s[g];if(!(x[Uo]||x[Gt]||a==="link"&&x.getAttribute("rel")==="stylesheet")&&x.namespaceURI!=="http://www.w3.org/2000/svg"){var O=x.getAttribute(i)||"";O=a+O;var k=d.get(O);k?k.push(x):d.set(O,[x])}}return d}function E1(a,i,s){a=a.ownerDocument||a,a.head.insertBefore(s,i==="title"?a.querySelector("head > title"):null)}function UN(a,i,s){if(s===1||i.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return a=i.disabled,typeof i.precedence=="string"&&a==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k1(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}var Tl=null;function HN(){}function YN(a,i,s){if(Tl===null)throw Error(n(475));var d=Tl;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var g=lo(s.href),x=a.querySelector(Nl(g));if(x){a=x._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(d.count++,d=Rc.bind(d),a.then(d,d)),i.state.loading|=4,i.instance=x,Tt(x);return}x=a.ownerDocument||a,s=S1(s),(g=Br.get(g))&&nh(s,g),x=x.createElement("link"),Tt(x);var O=x;O._p=new Promise(function(k,M){O.onload=k,O.onerror=M}),$t(x,"link",s),i.instance=x}d.stylesheets===null&&(d.stylesheets=new Map),d.stylesheets.set(i,a),(a=i.state.preload)&&(i.state.loading&3)===0&&(d.count++,i=Rc.bind(d),a.addEventListener("load",i),a.addEventListener("error",i))}}function GN(){if(Tl===null)throw Error(n(475));var a=Tl;return a.stylesheets&&a.count===0&&ih(a,a.stylesheets),0<a.count?function(i){var s=setTimeout(function(){if(a.stylesheets&&ih(a,a.stylesheets),a.unsuspend){var d=a.unsuspend;a.unsuspend=null,d()}},6e4);return a.unsuspend=i,function(){a.unsuspend=null,clearTimeout(s)}}:null}function Rc(){if(this.count--,this.count===0){if(this.stylesheets)ih(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Lc=null;function ih(a,i){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Lc=new Map,i.forEach(KN,a),Lc=null,Rc.call(a))}function KN(a,i){if(!(i.state.loading&4)){var s=Lc.get(a);if(s)var d=s.get(null);else{s=new Map,Lc.set(a,s);for(var g=a.querySelectorAll("link[data-precedence],style[data-precedence]"),x=0;x<g.length;x++){var O=g[x];(O.nodeName==="LINK"||O.getAttribute("media")!=="not all")&&(s.set(O.dataset.precedence,O),d=O)}d&&s.set(null,d)}g=i.instance,O=g.getAttribute("data-precedence"),x=s.get(O)||d,x===d&&s.set(null,g),s.set(O,g),this.count++,d=Rc.bind(this),g.addEventListener("load",d),g.addEventListener("error",d),x?x.parentNode.insertBefore(g,x.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(g,a.firstChild)),i.state.loading|=4}}var Ml={$$typeof:N,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function WN(a,i,s,d,g,x,O,k){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ef(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ef(0),this.hiddenUpdates=ef(null),this.identifierPrefix=d,this.onUncaughtError=g,this.onCaughtError=x,this.onRecoverableError=O,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function N1(a,i,s,d,g,x,O,k,M,B,Y,V){return a=new WN(a,i,s,O,k,M,B,V),i=1,x===!0&&(i|=24),x=xr(3,null,null,i),a.current=x,x.stateNode=a,i=qf(),i.refCount++,a.pooledCache=i,i.refCount++,x.memoizedState={element:d,isDehydrated:s,cache:i},Yf(x),a}function C1(a){return a?(a=Ii,a):Ii}function T1(a,i,s,d,g,x){g=C1(g),d.context===null?d.context=g:d.pendingContext=g,d=sa(i),d.payload={element:s},x=x===void 0?null:x,x!==null&&(d.callback=x),s=ca(a,d,i),s!==null&&(Sr(s,a,i),ll(s,a,i))}function M1(a,i){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var s=a.retryLane;a.retryLane=s!==0&&s<i?s:i}}function oh(a,i){M1(a,i),(a=a.alternate)&&M1(a,i)}function _1(a){if(a.tag===13){var i=Bi(a,67108864);i!==null&&Sr(i,a,67108864),oh(a,67108864)}}var Bc=!0;function VN(a,i,s,d){var g=q.T;q.T=null;var x=G.p;try{G.p=2,lh(a,i,s,d)}finally{G.p=x,q.T=g}}function XN(a,i,s,d){var g=q.T;q.T=null;var x=G.p;try{G.p=8,lh(a,i,s,d)}finally{G.p=x,q.T=g}}function lh(a,i,s,d){if(Bc){var g=sh(d);if(g===null)Vp(a,i,d,Ic,s),D1(a,d);else if(ZN(g,a,i,s,d))d.stopPropagation();else if(D1(a,d),i&4&&-1<FN.indexOf(a)){for(;g!==null;){var x=Ei(g);if(x!==null)switch(x.tag){case 3:if(x=x.stateNode,x.current.memoizedState.isDehydrated){var O=La(x.pendingLanes);if(O!==0){var k=x;for(k.pendingLanes|=2,k.entangledLanes|=2;O;){var M=1<<31-gr(O);k.entanglements[1]|=M,O&=~M}fn(x),(Le&6)===0&&(jc=Ct()+500,Al(0))}}break;case 13:k=Bi(x,2),k!==null&&Sr(k,x,2),Ac(),oh(x,2)}if(x=sh(d),x===null&&Vp(a,i,d,Ic,s),x===g)break;g=x}g!==null&&d.stopPropagation()}else Vp(a,i,d,null,s)}}function sh(a){return a=pf(a),ch(a)}var Ic=null;function ch(a){if(Ic=null,a=Oi(a),a!==null){var i=l(a);if(i===null)a=null;else{var s=i.tag;if(s===13){if(a=u(i),a!==null)return a;a=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;a=null}else i!==a&&(a=null)}}return Ic=a,null}function P1(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ts()){case Wv:return 2;case Vv:return 8;case Ms:case R5:return 32;case Xv:return 268435456;default:return 32}default:return 32}}var uh=!1,ja=null,Sa=null,Aa=null,_l=new Map,Pl=new Map,Oa=[],FN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D1(a,i){switch(a){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(i.pointerId)}}function Dl(a,i,s,d,g,x){return a===null||a.nativeEvent!==x?(a={blockedOn:i,domEventName:s,eventSystemFlags:d,nativeEvent:x,targetContainers:[g]},i!==null&&(i=Ei(i),i!==null&&_1(i)),a):(a.eventSystemFlags|=d,i=a.targetContainers,g!==null&&i.indexOf(g)===-1&&i.push(g),a)}function ZN(a,i,s,d,g){switch(i){case"focusin":return ja=Dl(ja,a,i,s,d,g),!0;case"dragenter":return Sa=Dl(Sa,a,i,s,d,g),!0;case"mouseover":return Aa=Dl(Aa,a,i,s,d,g),!0;case"pointerover":var x=g.pointerId;return _l.set(x,Dl(_l.get(x)||null,a,i,s,d,g)),!0;case"gotpointercapture":return x=g.pointerId,Pl.set(x,Dl(Pl.get(x)||null,a,i,s,d,g)),!0}return!1}function z1(a){var i=Oi(a.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){a.blockedOn=i,Y5(a.priority,function(){if(s.tag===13){var d=jr();d=tf(d);var g=Bi(s,d);g!==null&&Sr(g,s,d),oh(s,d)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){a.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}a.blockedOn=null}function qc(a){if(a.blockedOn!==null)return!1;for(var i=a.targetContainers;0<i.length;){var s=sh(a.nativeEvent);if(s===null){s=a.nativeEvent;var d=new s.constructor(s.type,s);ff=d,s.target.dispatchEvent(d),ff=null}else return i=Ei(s),i!==null&&_1(i),a.blockedOn=s,!1;i.shift()}return!0}function R1(a,i,s){qc(a)&&s.delete(i)}function QN(){uh=!1,ja!==null&&qc(ja)&&(ja=null),Sa!==null&&qc(Sa)&&(Sa=null),Aa!==null&&qc(Aa)&&(Aa=null),_l.forEach(R1),Pl.forEach(R1)}function $c(a,i){a.blockedOn===i&&(a.blockedOn=null,uh||(uh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,QN)))}var Uc=null;function L1(a){Uc!==a&&(Uc=a,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Uc===a&&(Uc=null);for(var i=0;i<a.length;i+=3){var s=a[i],d=a[i+1],g=a[i+2];if(typeof d!="function"){if(ch(d||s)===null)continue;break}var x=Ei(s);x!==null&&(a.splice(i,3),i-=3,cp(x,{pending:!0,data:g,method:s.method,action:d},d,g))}}))}function zl(a){function i(M){return $c(M,a)}ja!==null&&$c(ja,a),Sa!==null&&$c(Sa,a),Aa!==null&&$c(Aa,a),_l.forEach(i),Pl.forEach(i);for(var s=0;s<Oa.length;s++){var d=Oa[s];d.blockedOn===a&&(d.blockedOn=null)}for(;0<Oa.length&&(s=Oa[0],s.blockedOn===null);)z1(s),s.blockedOn===null&&Oa.shift();if(s=(a.ownerDocument||a).$$reactFormReplay,s!=null)for(d=0;d<s.length;d+=3){var g=s[d],x=s[d+1],O=g[ar]||null;if(typeof x=="function")O||L1(s);else if(O){var k=null;if(x&&x.hasAttribute("formAction")){if(g=x,O=x[ar]||null)k=O.formAction;else if(ch(g)!==null)continue}else k=O.action;typeof k=="function"?s[d+1]=k:(s.splice(d,3),d-=3),L1(s)}}}function dh(a){this._internalRoot=a}Hc.prototype.render=dh.prototype.render=function(a){var i=this._internalRoot;if(i===null)throw Error(n(409));var s=i.current,d=jr();T1(s,d,a,i,null,null)},Hc.prototype.unmount=dh.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var i=a.containerInfo;T1(a.current,2,null,a,null,null),Ac(),i[Ai]=null}};function Hc(a){this._internalRoot=a}Hc.prototype.unstable_scheduleHydration=function(a){if(a){var i=ex();a={blockedOn:null,target:a,priority:i};for(var s=0;s<Oa.length&&i!==0&&i<Oa[s].priority;s++);Oa.splice(s,0,a),s===0&&z1(a)}};var B1=t.version;if(B1!=="19.1.1")throw Error(n(527,B1,"19.1.1"));G.findDOMNode=function(a){var i=a._reactInternals;if(i===void 0)throw typeof a.render=="function"?Error(n(188)):(a=Object.keys(a).join(","),Error(n(268,a)));return a=p(i),a=a!==null?h(a):null,a=a===null?null:a.stateNode,a};var JN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{Io=Yc.inject(JN),mr=Yc}catch{}}return Ll.createRoot=function(a,i){if(!o(a))throw Error(n(299));var s=!1,d="",g=eb,x=tb,O=rb,k=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onUncaughtError!==void 0&&(g=i.onUncaughtError),i.onCaughtError!==void 0&&(x=i.onCaughtError),i.onRecoverableError!==void 0&&(O=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(k=i.unstable_transitionCallbacks)),i=N1(a,1,!1,null,null,s,d,g,x,O,k,null),a[Ai]=i.current,Wp(a),new dh(i)},Ll.hydrateRoot=function(a,i,s){if(!o(a))throw Error(n(299));var d=!1,g="",x=eb,O=tb,k=rb,M=null,B=null;return s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(g=s.identifierPrefix),s.onUncaughtError!==void 0&&(x=s.onUncaughtError),s.onCaughtError!==void 0&&(O=s.onCaughtError),s.onRecoverableError!==void 0&&(k=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(M=s.unstable_transitionCallbacks),s.formState!==void 0&&(B=s.formState)),i=N1(a,1,!0,i,s??null,d,g,x,O,k,M,B),i.context=C1(null),s=i.current,d=jr(),d=tf(d),g=sa(d),g.callback=null,ca(s,g,d),s=d,i.current.lanes=s,$o(i,s),fn(i),a[Ai]=i.current,Wp(a),new Hc(i)},Ll.version="19.1.1",Ll}var V1;function uC(){if(V1)return hh.exports;V1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),hh.exports=cC(),hh.exports}var dC=uC();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var X1="popstate";function fC(e={}){function t(n,o){let{pathname:l,search:u,hash:f}=n.location;return eg("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Fl(o)}return hC(t,r,null,e)}function tt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pC(){return Math.random().toString(36).substring(2,10)}function F1(e,t){return{usr:e.state,key:e.key,idx:t}}function eg(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Eo(t):t,state:r,key:t&&t.key||n||pC()}}function Fl({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Eo(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function hC(e,t,r,n={}){let{window:o=document.defaultView,v5Compat:l=!1}=n,u=o.history,f="POP",p=null,h=m();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function m(){return(u.state||{idx:null}).idx}function v(){f="POP";let S=m(),E=S==null?null:S-h;h=S,p&&p({action:f,location:j.location,delta:E})}function b(S,E){f="PUSH";let C=eg(j.location,S,E);h=m()+1;let N=F1(C,h),_=j.createHref(C);try{u.pushState(N,"",_)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;o.location.assign(_)}l&&p&&p({action:f,location:j.location,delta:1})}function w(S,E){f="REPLACE";let C=eg(j.location,S,E);h=m();let N=F1(C,h),_=j.createHref(C);u.replaceState(N,"",_),l&&p&&p({action:f,location:j.location,delta:0})}function A(S){return mC(S)}let j={get action(){return f},get location(){return e(o,u)},listen(S){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(X1,v),p=S,()=>{o.removeEventListener(X1,v),p=null}},createHref(S){return t(o,S)},createURL:A,encodeLocation(S){let E=A(S);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:b,replace:w,go(S){return u.go(S)}};return j}function mC(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),tt(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:Fl(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function fA(e,t,r="/"){return gC(e,t,r,!1)}function gC(e,t,r,n){let o=typeof t=="string"?Eo(t):t,l=Un(o.pathname||"/",r);if(l==null)return null;let u=pA(e);vC(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=NC(l);f=EC(u[p],h,n)}return f}function pA(e,t=[],r=[],n="",o=!1){let l=(u,f,p=o,h)=>{let m={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&p)return;tt(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let v=In([n,m.relativePath]),b=r.concat(m);u.children&&u.children.length>0&&(tt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),pA(u.children,t,b,v,p)),!(u.path==null&&!u.index)&&t.push({path:v,score:AC(v,u.index),routesMeta:b})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let p of hA(u.path))l(u,f,!0,p)}),t}function hA(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return o?[l,""]:[l];let u=hA(n.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function vC(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:OC(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var xC=/^:[\w-]+$/,yC=3,bC=2,wC=1,jC=10,SC=-2,Z1=e=>e==="*";function AC(e,t){let r=e.split("/"),n=r.length;return r.some(Z1)&&(n+=SC),t&&(n+=bC),r.filter(o=>!Z1(o)).reduce((o,l)=>o+(xC.test(l)?yC:l===""?wC:jC),n)}function OC(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function EC(e,t,r=!1){let{routesMeta:n}=e,o={},l="/",u=[];for(let f=0;f<n.length;++f){let p=n[f],h=f===n.length-1,m=l==="/"?t:t.slice(l.length)||"/",v=hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},m),b=p.route;if(!v&&h&&r&&!n[n.length-1].route.index&&(v=hu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},m)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:In([l,v.pathname]),pathnameBase:_C(In([l,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(l=In([l,v.pathnameBase]))}return u}function hu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=kC(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:n.reduce((h,{paramName:m,isOptional:v},b)=>{if(m==="*"){let A=f[b]||"";u=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const w=f[b];return v&&!w?h[m]=void 0:h[m]=(w||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function kC(e,t=!1,r=!0){tn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(n.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function NC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return tn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Un(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function CC(e,t="/"){let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Eo(e):e;return{pathname:r?r.startsWith("/")?r:TC(r,t):t,search:PC(n),hash:DC(o)}}function TC(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function xh(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function MC(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function n0(e){let t=MC(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function a0(e,t,r,n=!1){let o;typeof e=="string"?o=Eo(e):(o={...e},tt(!o.pathname||!o.pathname.includes("?"),xh("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),xh("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),xh("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=r;else{let v=t.length-1;if(!n&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),v-=1;o.pathname=b.join("/")}f=v>=0?t[v]:"/"}let p=CC(o,f),h=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(h||m)&&(p.pathname+="/"),p}var In=e=>e.join("/").replace(/\/\/+/g,"/"),_C=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),PC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,DC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var mA=["POST","PUT","PATCH","DELETE"];new Set(mA);var RC=["GET",...mA];new Set(RC);var ko=y.createContext(null);ko.displayName="DataRouter";var cd=y.createContext(null);cd.displayName="DataRouterState";y.createContext(!1);var gA=y.createContext({isTransitioning:!1});gA.displayName="ViewTransition";var LC=y.createContext(new Map);LC.displayName="Fetchers";var BC=y.createContext(null);BC.displayName="Await";var on=y.createContext(null);on.displayName="Navigation";var us=y.createContext(null);us.displayName="Location";var Wr=y.createContext({outlet:null,matches:[],isDataRoute:!1});Wr.displayName="Route";var i0=y.createContext(null);i0.displayName="RouteError";function IC(e,{relative:t}={}){tt(No(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=y.useContext(on),{hash:o,pathname:l,search:u}=ds(e,{relative:t}),f=l;return r!=="/"&&(f=l==="/"?r:In([r,l])),n.createHref({pathname:f,search:u,hash:o})}function No(){return y.useContext(us)!=null}function yt(){return tt(No(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(us).location}var vA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xA(e){y.useContext(on).static||y.useLayoutEffect(e)}function st(){let{isDataRoute:e}=y.useContext(Wr);return e?t6():qC()}function qC(){tt(No(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(ko),{basename:t,navigator:r}=y.useContext(on),{matches:n}=y.useContext(Wr),{pathname:o}=yt(),l=JSON.stringify(n0(n)),u=y.useRef(!1);return xA(()=>{u.current=!0}),y.useCallback((p,h={})=>{if(tn(u.current,vA),!u.current)return;if(typeof p=="number"){r.go(p);return}let m=a0(p,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:In([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,l,o,e])}var $C=y.createContext(null);function UC(e){let t=y.useContext(Wr).outlet;return t&&y.createElement($C.Provider,{value:e},t)}function HC(){let{matches:e}=y.useContext(Wr),t=e[e.length-1];return t?t.params:{}}function ds(e,{relative:t}={}){let{matches:r}=y.useContext(Wr),{pathname:n}=yt(),o=JSON.stringify(n0(r));return y.useMemo(()=>a0(e,JSON.parse(o),n,t==="path"),[e,o,n,t])}function YC(e,t){return yA(e,t)}function yA(e,t,r,n,o){tt(No(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=y.useContext(on),{matches:u}=y.useContext(Wr),f=u[u.length-1],p=f?f.params:{},h=f?f.pathname:"/",m=f?f.pathnameBase:"/",v=f&&f.route;{let C=v&&v.path||"";bA(h,!v||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let b=yt(),w;if(t){let C=typeof t=="string"?Eo(t):t;tt(m==="/"||C.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${C.pathname}" was given in the \`location\` prop.`),w=C}else w=b;let A=w.pathname||"/",j=A;if(m!=="/"){let C=m.replace(/^\//,"").split("/");j="/"+A.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=fA(e,{pathname:j});tn(v||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),tn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=XC(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:In([m,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:In([m,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),u,r,n,o);return t&&E?y.createElement(us.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},E):E}function GC(){let e=e6(),t=zC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n},l={padding:"2px 4px",backgroundColor:n},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:l},"ErrorBoundary")," or"," ",y.createElement("code",{style:l},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:o},r):null,u)}var KC=y.createElement(GC,null),WC=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?y.createElement(Wr.Provider,{value:this.props.routeContext},y.createElement(i0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function VC({routeContext:e,match:t,children:r}){let n=y.useContext(ko);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(Wr.Provider,{value:e},r)}function XC(e,t=[],r=null,n=null,o=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,u=r?.errors;if(u!=null){let h=l.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);tt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(r)for(let h=0;h<l.length;h++){let m=l[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:v,errors:b}=r,w=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||w){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,m,v)=>{let b,w=!1,A=null,j=null;r&&(b=u&&m.route.id?u[m.route.id]:void 0,A=m.route.errorElement||KC,f&&(p<0&&v===0?(bA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,j=null):p===v&&(w=!0,j=m.route.hydrateFallbackElement||null)));let S=t.concat(l.slice(0,v+1)),E=()=>{let C;return b?C=A:w?C=j:m.route.Component?C=y.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=h,y.createElement(VC,{match:m,routeContext:{outlet:h,matches:S,isDataRoute:r!=null},children:C})};return r&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?y.createElement(WC,{location:r.location,revalidation:r.revalidation,component:A,error:b,children:E(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:n}):E()},null)}function o0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function FC(e){let t=y.useContext(ko);return tt(t,o0(e)),t}function ZC(e){let t=y.useContext(cd);return tt(t,o0(e)),t}function QC(e){let t=y.useContext(Wr);return tt(t,o0(e)),t}function l0(e){let t=QC(e),r=t.matches[t.matches.length-1];return tt(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function JC(){return l0("useRouteId")}function e6(){let e=y.useContext(i0),t=ZC("useRouteError"),r=l0("useRouteError");return e!==void 0?e:t.errors?.[r]}function t6(){let{router:e}=FC("useNavigate"),t=l0("useNavigate"),r=y.useRef(!1);return xA(()=>{r.current=!0}),y.useCallback(async(o,l={})=>{tn(r.current,vA),r.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Q1={};function bA(e,t,r){!t&&!Q1[e]&&(Q1[e]=!0,tn(!1,r))}y.memo(r6);function r6({routes:e,future:t,state:r,unstable_onError:n}){return yA(e,void 0,r,n,t)}function n6({to:e,replace:t,state:r,relative:n}){tt(No(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=y.useContext(on);tn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=y.useContext(Wr),{pathname:u}=yt(),f=st(),p=a0(e,n0(l),u,n==="path"),h=JSON.stringify(p);return y.useEffect(()=>{f(JSON.parse(h),{replace:t,state:r,relative:n})},[f,h,n,t,r]),null}function ud(e){return UC(e.context)}function ce(e){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function a6({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:o,static:l=!1}){tt(!No(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=y.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof r=="string"&&(r=Eo(r));let{pathname:p="/",search:h="",hash:m="",state:v=null,key:b="default"}=r,w=y.useMemo(()=>{let A=Un(p,u);return A==null?null:{location:{pathname:A,search:h,hash:m,state:v,key:b},navigationType:n}},[u,p,h,m,v,b,n]);return tn(w!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:y.createElement(on.Provider,{value:f},y.createElement(us.Provider,{children:t,value:w}))}function i6({children:e,location:t}){return YC(tg(e),t)}function tg(e,t=[]){let r=[];return y.Children.forEach(e,(n,o)=>{if(!y.isValidElement(n))return;let l=[...t,o];if(n.type===y.Fragment){r.push.apply(r,tg(n.props.children,l));return}tt(n.type===ce,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let u={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=tg(n.props.children,l)),r.push(u)}),r}var cu="get",uu="application/x-www-form-urlencoded";function dd(e){return e!=null&&typeof e.tagName=="string"}function o6(e){return dd(e)&&e.tagName.toLowerCase()==="button"}function l6(e){return dd(e)&&e.tagName.toLowerCase()==="form"}function s6(e){return dd(e)&&e.tagName.toLowerCase()==="input"}function c6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function u6(e,t){return e.button===0&&(!t||t==="_self")&&!c6(e)}var Gc=null;function d6(){if(Gc===null)try{new FormData(document.createElement("form"),0),Gc=!1}catch{Gc=!0}return Gc}var f6=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yh(e){return e!=null&&!f6.has(e)?(tn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uu}"`),null):e}function p6(e,t){let r,n,o,l,u;if(l6(e)){let f=e.getAttribute("action");n=f?Un(f,t):null,r=e.getAttribute("method")||cu,o=yh(e.getAttribute("enctype"))||uu,l=new FormData(e)}else if(o6(e)||s6(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(n=p?Un(p,t):null,r=e.getAttribute("formmethod")||f.getAttribute("method")||cu,o=yh(e.getAttribute("formenctype"))||yh(f.getAttribute("enctype"))||uu,l=new FormData(f,e),!d6()){let{name:h,type:m,value:v}=e;if(m==="image"){let b=h?`${h}.`:"";l.append(`${b}x`,"0"),l.append(`${b}y`,"0")}else h&&l.append(h,v)}}else{if(dd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=cu,n=null,o=uu,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:n,method:r.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function s0(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function h6(e,t,r){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname=`_root.${r}`:t&&Un(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${r}`,n}async function m6(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g6(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function v6(e,t,r){let n=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await m6(l,r);return u.links?u.links():[]}return[]}));return w6(n.flat(1).filter(g6).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function J1(e,t,r,n,o,l){let u=(p,h)=>r[h]?p.route.id!==r[h].route.id:!0,f=(p,h)=>r[h].pathname!==p.pathname||r[h].route.path?.endsWith("*")&&r[h].params["*"]!==p.params["*"];return l==="assets"?t.filter((p,h)=>u(p,h)||f(p,h)):l==="data"?t.filter((p,h)=>{let m=n.routes[p.route.id];if(!m||!m.hasLoader)return!1;if(u(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function x6(e,t,{includeHydrateFallback:r}={}){return y6(e.map(n=>{let o=t.routes[n.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function y6(e){return[...new Set(e)]}function b6(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function w6(e,t){let r=new Set;return new Set(t),e.reduce((n,o)=>{let l=JSON.stringify(b6(o));return r.has(l)||(r.add(l),n.push({key:l,link:o})),n},[])}function wA(){let e=y.useContext(ko);return s0(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function j6(){let e=y.useContext(cd);return s0(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var c0=y.createContext(void 0);c0.displayName="FrameworkContext";function jA(){let e=y.useContext(c0);return s0(e,"You must render this element inside a <HydratedRouter> element"),e}function S6(e,t){let r=y.useContext(c0),[n,o]=y.useState(!1),[l,u]=y.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:m,onTouchStart:v}=t,b=y.useRef(null);y.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let j=E=>{E.forEach(C=>{u(C.isIntersecting)})},S=new IntersectionObserver(j,{threshold:.5});return b.current&&S.observe(b.current),()=>{S.disconnect()}}},[e]),y.useEffect(()=>{if(n){let j=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(j)}}},[n]);let w=()=>{o(!0)},A=()=>{o(!1),u(!1)};return r?e!=="intent"?[l,b,{}]:[l,b,{onFocus:Bl(f,w),onBlur:Bl(p,A),onMouseEnter:Bl(h,w),onMouseLeave:Bl(m,A),onTouchStart:Bl(v,w)}]:[!1,b,{}]}function Bl(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function A6({page:e,...t}){let{router:r}=wA(),n=y.useMemo(()=>fA(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?y.createElement(E6,{page:e,matches:n,...t}):null}function O6(e){let{manifest:t,routeModules:r}=jA(),[n,o]=y.useState([]);return y.useEffect(()=>{let l=!1;return v6(e,t,r).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,r]),n}function E6({page:e,matches:t,...r}){let n=yt(),{manifest:o,routeModules:l}=jA(),{basename:u}=wA(),{loaderData:f,matches:p}=j6(),h=y.useMemo(()=>J1(e,t,p,o,n,"data"),[e,t,p,o,n]),m=y.useMemo(()=>J1(e,t,p,o,n,"assets"),[e,t,p,o,n]),v=y.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let A=new Set,j=!1;if(t.forEach(E=>{let C=o.routes[E.route.id];!C||!C.hasLoader||(!h.some(N=>N.route.id===E.route.id)&&E.route.id in f&&l[E.route.id]?.shouldRevalidate||C.hasClientLoader?j=!0:A.add(E.route.id))}),A.size===0)return[];let S=h6(e,u,"data");return j&&A.size>0&&S.searchParams.set("_routes",t.filter(E=>A.has(E.route.id)).map(E=>E.route.id).join(",")),[S.pathname+S.search]},[u,f,n,o,h,t,e,l]),b=y.useMemo(()=>x6(m,o),[m,o]),w=O6(m);return y.createElement(y.Fragment,null,v.map(A=>y.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...r})),b.map(A=>y.createElement("link",{key:A,rel:"modulepreload",href:A,...r})),w.map(({key:A,link:j})=>y.createElement("link",{key:A,nonce:r.nonce,...j})))}function k6(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var SA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{SA&&(window.__reactRouterVersion="7.9.1")}catch{}function N6({basename:e,children:t,window:r}){let n=y.useRef();n.current==null&&(n.current=fC({window:r,v5Compat:!0}));let o=n.current,[l,u]=y.useState({action:o.action,location:o.location}),f=y.useCallback(p=>{y.startTransition(()=>u(p))},[u]);return y.useLayoutEffect(()=>o.listen(f),[o,f]),y.createElement(a6,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o})}var AA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=y.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:m,viewTransition:v,...b},w){let{basename:A}=y.useContext(on),j=typeof h=="string"&&AA.test(h),S,E=!1;if(typeof h=="string"&&j&&(S=h,SA))try{let ee=new URL(window.location.href),ae=h.startsWith("//")?new URL(ee.protocol+h):new URL(h),F=Un(ae.pathname,A);ae.origin===ee.origin&&F!=null?h=F+ae.search+ae.hash:E=!0}catch{tn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=IC(h,{relative:o}),[N,_,T]=S6(n,b),z=M6(h,{replace:u,state:f,target:p,preventScrollReset:m,relative:o,viewTransition:v});function U(ee){t&&t(ee),ee.defaultPrevented||z(ee)}let X=y.createElement("a",{...b,...T,href:S||C,onClick:E||l?t:U,ref:k6(w,_),target:p,"data-discover":!j&&r==="render"?"true":void 0});return N&&!j?y.createElement(y.Fragment,null,X,y.createElement(A6,{page:C})):X});xe.displayName="Link";var Zl=y.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...h},m){let v=ds(u,{relative:h.relative}),b=yt(),w=y.useContext(cd),{navigator:A,basename:j}=y.useContext(on),S=w!=null&&R6(v)&&f===!0,E=A.encodeLocation?A.encodeLocation(v).pathname:v.pathname,C=b.pathname,N=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(C=C.toLowerCase(),N=N?N.toLowerCase():null,E=E.toLowerCase()),N&&j&&(N=Un(N,j)||N);const _=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let T=C===E||!o&&C.startsWith(E)&&C.charAt(_)==="/",z=N!=null&&(N===E||!o&&N.startsWith(E)&&N.charAt(E.length)==="/"),U={isActive:T,isPending:z,isTransitioning:S},X=T?t:void 0,ee;typeof n=="function"?ee=n(U):ee=[n,T?"active":null,z?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let ae=typeof l=="function"?l(U):l;return y.createElement(xe,{...h,"aria-current":X,className:ee,ref:m,style:ae,to:u,viewTransition:f},typeof p=="function"?p(U):p)});Zl.displayName="NavLink";var C6=y.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:o,state:l,method:u=cu,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:v,...b},w)=>{let A=D6(),j=z6(f,{relative:h}),S=u.toLowerCase()==="get"?"get":"post",E=typeof f=="string"&&AA.test(f),C=N=>{if(p&&p(N),N.defaultPrevented)return;N.preventDefault();let _=N.nativeEvent.submitter,T=_?.getAttribute("formmethod")||u;A(_||N.currentTarget,{fetcherKey:t,method:T,navigate:r,replace:o,state:l,relative:h,preventScrollReset:m,viewTransition:v})};return y.createElement("form",{ref:w,method:S,action:j,onSubmit:n?p:C,...b,"data-discover":!E&&e==="render"?"true":void 0})});C6.displayName="Form";function T6(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OA(e){let t=y.useContext(ko);return tt(t,T6(e)),t}function M6(e,{target:t,replace:r,state:n,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=st(),p=yt(),h=ds(e,{relative:l});return y.useCallback(m=>{if(u6(m,t)){m.preventDefault();let v=r!==void 0?r:Fl(p)===Fl(h);f(e,{replace:v,state:n,preventScrollReset:o,relative:l,viewTransition:u})}},[p,f,h,r,n,t,e,o,l,u])}var _6=0,P6=()=>`__${String(++_6)}__`;function D6(){let{router:e}=OA("useSubmit"),{basename:t}=y.useContext(on),r=JC();return y.useCallback(async(n,o={})=>{let{action:l,method:u,encType:f,formData:p,body:h}=p6(n,t);if(o.navigate===!1){let m=o.fetcherKey||P6();await e.fetch(m,r,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,r])}function z6(e,{relative:t}={}){let{basename:r}=y.useContext(on),n=y.useContext(Wr);tt(n,"useFormAction must be used inside a RouteContext");let[o]=n.matches.slice(-1),l={...ds(e||".",{relative:t})},u=yt();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(m=>m==="")){f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(l.pathname=l.pathname==="/"?r:In([r,l.pathname])),Fl(l)}function R6(e,{relative:t}={}){let r=y.useContext(gA);tt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=OA("useViewTransitionState"),o=ds(e,{relative:t});if(!r.isTransitioning)return!1;let l=Un(r.currentLocation.pathname,n)||r.currentLocation.pathname,u=Un(r.nextLocation.pathname,n)||r.nextLocation.pathname;return hu(o.pathname,u)!=null||hu(o.pathname,l)!=null}var u0=dA();const L6=y.createContext(null);function B6({children:e}){const[t,r]=y.useState(null),[n,o]=y.useState(!1),[l,u]=y.useState(!1),f={user:t,setUser:r,isAuthenticated:n,setIsAuthenticated:o,loading:l,setLoading:u};return c.jsx(L6.Provider,{value:f,children:e})}function I6(){const{pathname:e,key:t}=yt(),r=y.useRef({});return y.useEffect(()=>{const n=r.current[t];if(n!==void 0){requestAnimationFrame(()=>{window.scrollTo({top:n,behavior:"auto"})});return}requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"smooth"})});const o=()=>{r.current[t]=window.scrollY};return window.addEventListener("beforeunload",o),()=>window.removeEventListener("beforeunload",o)},[e,t]),null}function q6(){const[e,t]=y.useState(!1),[r,n]=y.useState(!1),[o,l]=y.useState(!1),[u,f]=y.useState({top:0,right:0}),[p,h]=y.useState(!1),m=yt(),v=y.useRef(null),b=y.useRef(null),w=y.useRef(null);y.useEffect(()=>{const S=()=>l(window.innerWidth<=800);return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),y.useEffect(()=>{t(!1),n(!1)},[m]),y.useEffect(()=>{const S=E=>{v.current&&!v.current.contains(E.target)&&t(!1),o&&b.current&&!b.current.contains(E.target)&&n(!1)};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[o]),y.useEffect(()=>{if(r&&b.current&&!o){const S=b.current.getBoundingClientRect();f({top:S.bottom+8,right:window.innerWidth-S.right})}},[r,o]);const A=()=>n(S=>!S),j=()=>{t(!1),n(!1)};return y.useEffect(()=>{let S=window.scrollY,E=!1,C;const N=()=>{E||(window.requestAnimationFrame(()=>{const _=window.scrollY;_>S+10?h(!0):_<S-5&&h(!1),S=_>0?_:0,E=!1}),E=!0),clearTimeout(C),C=setTimeout(()=>h(!1),300)};return window.addEventListener("scroll",N),()=>{window.removeEventListener("scroll",N),clearTimeout(C)}},[]),c.jsxs("header",{className:`tm-header ${p?"hidden":""}`,children:[c.jsxs("nav",{className:"tm-nav",ref:v,children:[c.jsxs(xe,{to:"/",className:"tm-logo",onClick:j,children:[c.jsx("span",{className:"logo-yellow",children:"HG’s"}),c.jsx("span",{className:"logo-blue",children:"TalentMinds"})]}),c.jsx("div",{className:"tm-center",children:c.jsxs("div",{className:"tm-search",children:[c.jsx("input",{type:"text",placeholder:"Search for courses, mentors, skills..."}),c.jsx("button",{className:"tm-search-btn","aria-label":"Search",children:c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"11",cy:"11",r:"8"}),c.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})]})}),c.jsxs("div",{className:`tm-links ${e?"open":""}`,children:[c.jsxs(xe,{to:"/explore",className:"tm-explore-link",onClick:j,children:[c.jsx("div",{className:"tm-explore-icon",children:[...Array(9)].map((S,E)=>c.jsx("span",{className:"tm-dot-waffle"},E))}),c.jsx("span",{className:"tm-explore-text",children:"Explore"})]}),c.jsx(xe,{to:"/resources",onClick:j,children:"Resources"}),c.jsx(xe,{to:"/business",onClick:j,children:"For Business"}),c.jsxs("div",{className:"tm-more-area",ref:w,onMouseEnter:()=>!o&&n(!0),onMouseLeave:()=>!o&&n(!1),children:[c.jsxs("div",{className:"tm-more-wrapper",ref:b,children:[c.jsxs("button",{className:"tm-more-btn",onClick:o?A:void 0,children:["More ",c.jsx("span",{className:"tm-more-arrow",children:r?"▲":"▼"})]}),o&&r&&c.jsxs("div",{className:"tm-more-dropdown open",children:[c.jsx(xe,{to:"/reviews",onClick:j,children:"Learner Stories"}),c.jsx(xe,{to:"/hire",onClick:j,children:"Hire Talent"}),c.jsx(xe,{to:"/become-mentor",onClick:j,children:"Become a Mentor"}),c.jsx(xe,{to:"/partnerships",onClick:j,children:"Partnerships"}),c.jsx(xe,{to:"/scholarships",onClick:j,children:"Scholarships"}),c.jsx(xe,{to:"/faq",onClick:j,children:"FAQ"}),c.jsx(xe,{to:"/support",onClick:j,children:"Support"})]})]}),!o&&r&&c.jsxs("div",{className:"tm-more-dropdown open fixed-desktop",style:{top:`${u.top}px`,right:`${u.right}px`},children:[c.jsx(xe,{to:"/reviews",onClick:j,children:"Learner Stories"}),c.jsx(xe,{to:"/hire",onClick:j,children:"Hire Talent"}),c.jsx(xe,{to:"/become-mentor",onClick:j,children:"Become a Mentor"}),c.jsx(xe,{to:"/partnerships",onClick:j,children:"Partnerships"}),c.jsx(xe,{to:"/scholarships",onClick:j,children:"Scholarships"}),c.jsx(xe,{to:"/faq",onClick:j,children:"FAQ"}),c.jsx(xe,{to:"/support",onClick:j,children:"Support"})]})]}),c.jsx(xe,{to:"/login",className:"tm-login-btn",onClick:j,children:"Login"})]}),c.jsxs("button",{className:"tm-hamburger",onClick:()=>t(!e),"aria-label":"Menu",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]}),c.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }

        .tm-header {
          background: #fff;
          border-bottom: 1px solid #dee2e6;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 1px 10px rgba(0,0,0,0.05);
          transform: translateY(0);
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        /* ✅ Hide animation */
        .tm-header.hidden {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .tm-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px;
          margin: 0 auto;
          height: 70px;
          padding: 0 24px;
          font-family: 'Inter', sans-serif;
        }

        .tm-logo {
          font-size: 1.6rem;
          font-weight: 700;
          display: flex;
          align-items: center;
        }
        .logo-yellow { color: #fbbf24; margin-right: 5px; }
        .logo-blue { color: #2563eb; }

        .tm-center { flex: 1; display: flex; justify-content: center; }
        .tm-search {
          display: flex;
          align-items: center;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 20px;
          overflow: hidden;
          width: 400px;
          max-width: 100%;
        }
        .tm-search input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 10px 15px;
          font-size: 0.95rem;
          outline: none;
        }
        .tm-search-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .tm-search-btn:hover { background: #1e40af; }

        /* Links */
        .tm-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .tm-links a {
          color: #495057;
          font-weight: 500;
          text-decoration: none;
          position: relative;
        }
        .tm-links a:hover { color: #2563eb; }

        /* Explore link */
        .tm-explore-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #2563eb;
          font-weight: 600;
        }
        .tm-explore-icon {
          display: grid;
          grid-template-columns: repeat(3, 4px);
          grid-gap: 3px;
        }
        .tm-dot-waffle {
          width: 4px;
          height: 4px;
          background: #2563eb;
          border-radius: 1px;
        }

        .tm-more-area { position: relative; }
        .tm-more-btn {
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          color: #495057;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .tm-more-btn:hover { color: #2563eb; }

        .tm-more-dropdown {
          display: none;
          flex-direction: column;
          background: #fff;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          min-width: 220px;
          z-index: 10000;
        }
        .tm-more-dropdown.open { display: flex; }

        .tm-more-dropdown.fixed-desktop {
          position: fixed;
        }

        .tm-more-dropdown a {
          padding: 10px 18px;
          color: #212529;
        }
        .tm-more-dropdown a:hover {
          background: #f8f9fa;
          color: #2563eb;
        }

        .tm-login-btn {
          color: #212529;
          padding: 9px 20px;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .tm-login-btn:hover {
          background: #eff6ff;
          color: #2563eb;
        }

        /* Hamburger */
        .tm-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .tm-hamburger span {
          width: 25px;
          height: 2px;
          background: #2563eb;
        }

        /* Responsive */
        @media (max-width: 800px) {
          .tm-center { display: none; }
          .tm-links {
            display: none;
            flex-direction: column;
            align-items: stretch;
            background: #fff;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            padding: 20px;
            gap: 16px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.08);
            z-index: 9999;
            min-height: calc(100vh - 70px);
            overflow-y: auto;
          }
          .tm-links.open { display: flex; }
          .tm-hamburger { display: flex; }
        }
      `})]})}function $6(){return c.jsxs("footer",{className:"tm-footer",children:[c.jsxs("div",{className:"tm-footer-container",children:[c.jsxs("div",{className:"tm-footer-content",children:[c.jsxs("div",{className:"tm-footer-brand",children:[c.jsxs(xe,{to:"/",className:"tm-footer-logo",children:[c.jsx("span",{className:"logo-yellow",children:"HG's"}),c.jsx("span",{className:"logo-white",children:"TalentMinds"})]}),c.jsx("p",{children:"Empowering careers through expert-led online learning and industry-recognized certifications."}),c.jsxs("div",{className:"tm-footer-socials",children:[c.jsx("a",{href:"#","aria-label":"Twitter",children:c.jsx("svg",{width:"18",height:"18",fill:"#b6c6e3",children:c.jsx("circle",{cx:"9",cy:"9",r:"8"})})}),c.jsx("a",{href:"#","aria-label":"LinkedIn",children:c.jsx("svg",{width:"18",height:"18",fill:"#b6c6e3",children:c.jsx("rect",{x:"3",y:"3",width:"12",height:"12"})})}),c.jsx("a",{href:"#","aria-label":"GitHub",children:c.jsx("svg",{width:"18",height:"18",fill:"#b6c6e3",children:c.jsx("polygon",{points:"3,3 15,9 3,15"})})})]})]}),c.jsxs("div",{className:"tm-footer-links",children:[c.jsxs("div",{className:"tm-footer-col",children:[c.jsx("h4",{children:"Learning"}),c.jsx(xe,{to:"/courses",children:"All Courses"}),c.jsx(xe,{to:"/skills",children:"Skill Tracks"}),c.jsx(xe,{to:"/certifications",children:"Certifications"}),c.jsx(xe,{to:"/enterprise",children:"Enterprise"})]}),c.jsxs("div",{className:"tm-footer-col",children:[c.jsx("h4",{children:"Resources"}),c.jsx(xe,{to:"/blog",children:"Blog"}),c.jsx(xe,{to:"/guides",children:"Guides"}),c.jsx(xe,{to:"/tutorials",children:"Tutorials"}),c.jsx(xe,{to:"/webinars",children:"Webinars"})]}),c.jsxs("div",{className:"tm-footer-col",children:[c.jsx("h4",{children:"Company"}),c.jsx(xe,{to:"/about",children:"About Us"}),c.jsx(xe,{to:"/careers",children:"Careers"}),c.jsx(xe,{to:"/contact",children:"Contact"}),c.jsx(xe,{to:"/press",children:"Press"})]}),c.jsxs("div",{className:"tm-footer-col",children:[c.jsx("h4",{children:"Support"}),c.jsx(xe,{to:"/help",children:"Help Center"}),c.jsx(xe,{to:"/faq",children:"FAQ"}),c.jsx(xe,{to:"/terms",children:"Terms"}),c.jsx(xe,{to:"/privacy",children:"Privacy"})]})]})]}),c.jsxs("div",{className:"tm-footer-bottom",children:[c.jsx("span",{children:"© 2025 TalentMinds. All rights reserved."}),c.jsxs("div",{className:"tm-footer-bottom-links",children:[c.jsx(xe,{to:"/terms",children:"Terms"}),c.jsx(xe,{to:"/privacy",children:"Privacy"}),c.jsx(xe,{to:"/cookies",children:"Cookies"})]})]})]}),c.jsx("style",{children:`
        .tm-footer {
          background: #181a20;
          color: #b6c6e3;
          width: 100%;
          padding: 60px 24px 0;
        }

        .tm-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .tm-footer-content {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: 64px;
          padding-bottom: 48px;
        }

        .tm-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tm-footer-logo {
          font-size: 1.6rem;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .logo-yellow {
          color: #fbbf24;
        }

        .logo-white {
          color: #fff;
        }

        .tm-footer-brand p {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 400px;
        }

        .tm-footer-socials {
          display: flex;
          gap: 16px;
        }

        .tm-footer-socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #23263a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .tm-footer-socials a:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .tm-footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .tm-footer-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .tm-footer-col h4 {
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .tm-footer-col a {
          color: #94a3b8;
          font-size: 0.95rem;
          text-decoration: none;
          transition: 0.2s;
        }

        .tm-footer-col a:hover {
          color: #fff;
          transform: translateX(3px);
        }

        .tm-footer-bottom {
          border-top: 1px solid #23263a;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .tm-footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .tm-footer-bottom-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .tm-footer-bottom-links a:hover {
          color: #fff;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .tm-footer-content {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }

          .tm-footer-brand {
            align-items: center;
          }

          .tm-footer-socials {
            justify-content: center;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .tm-footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            text-align: center;
          }

          .tm-footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .tm-footer-bottom-links {
            justify-content: center;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .tm-footer-links {
            grid-template-columns: 1fr;
          }

          .tm-footer-col {
            align-items: center;
          }

          .tm-footer-logo {
            font-size: 1.4rem;
          }
        }
      `})]})}function U6(){return c.jsxs(c.Fragment,{children:[c.jsx(q6,{}),c.jsx(ud,{})," ",c.jsx($6,{})]})}/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y6=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),ew=e=>{const t=Y6(e);return t.charAt(0).toUpperCase()+t.slice(1)},EA=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),G6=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:o="",children:l,iconNode:u,...f},p)=>y.createElement("svg",{ref:p,...K6,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:EA("lucide",o),...!l&&!G6(f)&&{"aria-hidden":"true"},...f},[...u.map(([h,m])=>y.createElement(h,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(e,t)=>{const r=y.forwardRef(({className:n,...o},l)=>y.createElement(W6,{ref:l,iconNode:t,className:EA(`lucide-${H6(ew(e))}`,`lucide-${e}`,n),...o}));return r.displayName=ew(e),r};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Co=Oe("bell",V6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],fs=Oe("book-open",X6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Z6=Oe("briefcase",F6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],fd=Oe("chart-column",Q6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],kA=Oe("chevron-down",J6);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],NA=Oe("chevron-up",eT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],pd=Oe("circle-check-big",tT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nT=Oe("circle-play",rT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],iT=Oe("circle-question-mark",aT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],lT=Oe("circle-x",oT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],d0=Oe("clipboard-list",sT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],CA=Oe("clock",cT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],dT=Oe("dollar-sign",uT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],rg=Oe("eye-off",fT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ng=Oe("eye",pT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],mT=Oe("funnel",hT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],vT=Oe("info",gT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],f0=Oe("layout-dashboard",xT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],p0=Oe("lock",yT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],h0=Oe("log-out",bT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],jT=Oe("mail",wT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],m0=Oe("menu",ST);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ag=Oe("message-square",AT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ET=Oe("phone",OT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],NT=Oe("save",kT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],TT=Oe("search",CT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],g0=Oe("settings",MT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],PT=Oe("shield",_T);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],tw=Oe("shopping-cart",DT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],RT=Oe("square-pen",zT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],BT=Oe("thumbs-up",LT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],qT=Oe("trash-2",IT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],v0=Oe("triangle-alert",$T);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"m16 11 2 2 4-4",key:"9rsbq5"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],TA=Oe("user-check",UT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],MA=Oe("user-x",HT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],hd=Oe("user",YT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_A=Oe("users",GT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],WT=Oe("x",KT);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],XT=Oe("zap",VT);function FT({open:e,onClose:t,onLogout:r}){const n=st(),o=yt(),l=()=>typeof window<"u"&&window.matchMedia("(max-width: 992px)").matches;y.useEffect(()=>{l()&&t()},[o.pathname]);const u=[{to:"/admin/dashboard",icon:f0,label:"Dashboard"},{to:"/admin/users",icon:_A,label:"Manage Users"},{to:"/admin/courses",icon:fs,label:"Manage Courses"},{to:"/admin/mentors",icon:d0,label:"Mentor Requests"},{to:"/admin/reports",icon:fd,label:"Reports"},{to:"/admin/notifications",icon:Co,label:"Notifications"},{to:"/admin/settings",icon:g0,label:"Settings"}];return c.jsxs("aside",{className:"admin-sidebar",children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsx("div",{className:"logo",children:"⚙️"}),c.jsx("h2",{className:"title",children:"Admin Hub"})]}),c.jsxs("nav",{className:"nav",children:[c.jsx("div",{className:"nav-group-title",children:"Main Menu"}),u.map(({to:f,icon:p,label:h})=>c.jsxs(Zl,{to:f,className:({isActive:m})=>`nav-item ${m?"active":""}`,onClick:()=>l()&&t(),children:[c.jsx(p,{size:18}),c.jsx("span",{children:h})]},f))]}),c.jsx("div",{className:"bottom",children:c.jsxs("button",{className:"logout",onClick:()=>{r(),n("/login")},children:[c.jsx(h0,{size:16})," Logout"]})}),c.jsx("style",{jsx:"true",children:`
        .admin-sidebar {
          height: 100%;
          width: 100%;
          background: linear-gradient(180deg, #0f172a, #1e293b);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
        .title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #e2e8f0;
        }
        .nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px 10px;
          overflow-y: auto;
        }
        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          color: #cbd5e1;
          text-decoration: none;
          border-radius: 8px;
          transition: 0.2s;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }
        .nav-item.active {
          background: rgba(37, 99, 235, 0.2);
          color: #fff;
          box-shadow: inset 3px 0 0 #3b82f6;
        }
        .bottom {
          padding: 16px 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logout {
          background: #ef4444;
          color: #fff;
          border: none;
          width: 100%;
          padding: 12px 12px;
          border-radius: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .logout:hover {
          background: #dc2626;
        }
      `})]})}function ZT({onMenuClick:e}){return c.jsxs("header",{className:"admin-navbar",children:[c.jsxs("div",{className:"left",children:[c.jsx("button",{className:"menu-btn",onClick:e,"aria-label":"Toggle Sidebar",children:c.jsx(m0,{size:20})}),c.jsx("h2",{children:"Admin Console"})]}),c.jsxs("div",{className:"right",children:[c.jsx("input",{className:"search",placeholder:"Search users, courses..."}),c.jsx("button",{className:"notify",title:"Notifications",children:"🔔"}),c.jsx("img",{className:"avatar",alt:"Admin",src:"https://i.pravatar.cc/80?img=12"})]}),c.jsx("style",{children:`
        .admin-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 12px 20px;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s;
          color: #1e3a8a;
        }
        .menu-btn:hover {
          background: #eff6ff;
        }
        .admin-navbar h2 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: #0f172a;
        }
        .right {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .search {
          width: 260px;
          max-width: 42vw;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 8px 12px;
          outline: none;
          transition: all 0.2s;
        }
        .search:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
        .notify {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 8px 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .notify:hover {
          background: #dbeafe;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
        }
        @media (max-width: 640px) {
          .search {
            display: none;
          }
        }
      `})]})}function QT(){const e=st(),t=yt(),[r,n]=y.useState(()=>{try{const E=localStorage.getItem("admin");return E?JSON.parse(E):null}catch{return null}}),[o,l]=y.useState(!0),[u,f]=y.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 992px)").matches:!1),[p,h]=y.useState(!1),[m,v]=y.useState(!1);y.useEffect(()=>{r?l(!1):e("/login",{replace:!0})},[r,e]),y.useEffect(()=>{const E=window.matchMedia("(max-width: 992px)"),C=N=>{f(N.matches),N.matches&&(h(!1),v(!1))};return E.addEventListener("change",C),()=>E.removeEventListener("change",C)},[]),y.useEffect(()=>(u&&(document.body.style.overflow=m?"hidden":""),()=>document.body.style.overflow=""),[u,m]),y.useEffect(()=>{window.scrollTo(0,0),u&&v(!1)},[t.pathname,u]);const b=()=>{localStorage.removeItem("admin"),n(null),l(!0),e("/login",{replace:!0})},A=(()=>{if(!r)return"Admin";if(r.firstName)return r.firstName;if(r.name)return r.name;if(r.email){const C=r.email.split("@")[0].split(/[._-]/)[0];return C.charAt(0).toUpperCase()+C.slice(1)}return"Admin"})();if(o||!r)return c.jsx("div",{style:ti.loading,children:"Loading Admin Dashboard…"});const j=260,S=!u&&p?j:0;return c.jsxs("div",{style:{...ti.wrapper,"--desktop-sidebar-width":`${j}px`},children:[c.jsx("aside",{style:{...ti.sidebarShell,transform:u?m?"translateX(0)":"translateX(-100%)":p?"translateX(0)":"translateX(calc(-1 * var(--desktop-sidebar-width)))"},children:c.jsx(FT,{open:u?m:p,onClose:()=>v(!1),onLogout:b})}),u&&m&&c.jsx("div",{onClick:()=>v(!1),style:ti.backdrop,"aria-hidden":"true"}),c.jsx(ZT,{onMenuClick:()=>u?v(E=>!E):h(E=>!E),adminName:A}),c.jsxs("div",{style:{...ti.page,marginLeft:S},children:[c.jsx("main",{style:ti.main,children:c.jsx(ud,{})}),c.jsxs("footer",{style:ti.footer,children:["© ",new Date().getFullYear()," TalentMinds · Admin Control Center"]})]})]})}const ti={wrapper:{minHeight:"100vh",background:"#f8fafc"},loading:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#1e40af",background:"#f1f5f9"},sidebarShell:{position:"fixed",left:0,top:0,bottom:0,width:"var(--desktop-sidebar-width)",backgroundColor:"#0f172a",zIndex:2001,transition:"transform .3s ease"},backdrop:{position:"fixed",inset:0,background:"rgba(2,6,23,0.55)",zIndex:2e3,backdropFilter:"blur(2px)"},page:{flex:1,display:"flex",flexDirection:"column",minHeight:"100vh",transition:"margin-left .3s ease"},main:{flex:1,padding:"20px 24px",maxWidth:1300,width:"100%",margin:"0 auto"},footer:{padding:"12px 20px",textAlign:"center",fontSize:".85rem",color:"#64748b",borderTop:"1px solid #e2e8f0",background:"#f8fafc"}};function JT({open:e=!1,onClose:t=()=>{},onLogout:r=()=>{}}){const n=st(),o=yt(),l=()=>typeof window<"u"&&window.matchMedia("(max-width: 992px)").matches;y.useEffect(()=>{l()&&t()},[o.pathname]);const u=[{to:"/dashboard",icon:f0,label:"Dashboard",exact:!0},{to:"/dashboard/my-courses",icon:fs,label:"My Courses"},{to:"/dashboard/assignments",icon:d0,label:"Assignments"},{to:"/dashboard/grades",icon:fd,label:"Grades & Progress"},{to:"/dashboard/discussions",icon:ag,label:"Discussions"},{to:"/dashboard/notifications",icon:Co,label:"Alerts"},{to:"/dashboard/My-Cart",icon:tw,label:"My Cart"}],f=[{to:"/dashboard/profile",icon:hd,label:"My Profile"},{to:"/dashboard/settings",icon:g0,label:"Settings"},{to:"/dashboard/support",icon:iT,label:"Help & Support"},{to:"/dashboard/my-cart",icon:tw,label:"My Cart"}],p=()=>{l()&&t()};return c.jsxs("aside",{className:`learner-sidebar ${e?"open":""}`,children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsx("div",{className:"logo",children:"🎓"}),c.jsx("h2",{className:"title",children:"Learner Hub"})]}),c.jsxs("nav",{className:"nav",children:[c.jsx("div",{className:"nav-group-title",children:"Main Menu"}),u.map(({to:h,icon:m,label:v,exact:b})=>c.jsxs(Zl,{to:h,end:b,className:({isActive:w})=>`nav-item ${w?"active":""}`,onClick:p,children:[c.jsx(m,{size:18}),c.jsx("span",{children:v})]},h)),c.jsx("div",{className:"nav-group-title",children:"Account"}),f.map(({to:h,icon:m,label:v})=>c.jsxs(Zl,{to:h,className:({isActive:b})=>`nav-item ${b?"active":""}`,onClick:p,children:[c.jsx(m,{size:18}),c.jsx("span",{children:v})]},h))]}),c.jsx("div",{className:"bottom",children:c.jsxs("button",{className:"logout",onClick:()=>{r(),n("/login")},children:[c.jsx(h0,{size:16})," Logout"]})}),c.jsx("style",{jsx:"true",children:`
        /* Sidebar container styles */
        .learner-sidebar { 
          height: 100%; 
          width: 100%; /* Important: The containing element (sidebarShell) controls width */
          background: linear-gradient(180deg, #0f172a, #1e293b); 
          color:#fff; 
          display:flex; 
          flex-direction:column; 
          justify-content:space-between; 
          box-shadow: 2px 0 10px rgba(0,0,0,0.15); /* Subtle shadow for depth */
        }
        
        /* Sidebar Header (Logo/Title) */
        .sidebar-header{ 
          display:flex; 
          align-items:center; 
          gap:10px; 
          padding:18px 20px; 
          border-bottom:1px solid rgba(255,255,255,.1); 
        }
        .logo{ 
          width:40px;
          height:40px;
          border-radius:8px;
          background:#2563eb; /* Primary blue color */
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:1.4rem; 
        }
        .title{ 
          font-size:1.1rem; 
          font-weight:800; 
          color: #e2e8f0; /* Light text color */
        }
        
        /* Navigation area */
        .nav{ 
          flex:1; 
          display:flex; 
          flex-direction:column; 
          padding:10px 10px; 
          overflow-y:auto; 
          overflow-x:hidden;
        }

        /* Navigation Group Title */
        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8; /* Subtle gray for category titles */
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Individual Nav Link */
        .nav-item{ 
          display:flex; 
          align-items:center; 
          gap:12px; 
          padding:12px 14px; 
          color:#cbd5e1; /* Default link color */
          text-decoration:none; 
          border-radius:8px; 
          font-weight:500; 
          transition:background .2s, color .2s; 
        }
        .nav-item:hover{ 
          background:rgba(255,255,255,.08); 
          color: #fff;
        }
        .nav-item.active{ 
          background:rgba(37,99,235,.2); 
          color:#fff; 
          font-weight:600; 
          box-shadow: inset 3px 0 0 #3b82f6; /* Highlight bar */
        }
        
        /* Bottom Section (Logout) */
        .bottom{ 
          padding:16px 10px; 
          border-top:1px solid rgba(255,255,255,.1); 
        }
        .logout{ 
          background:#ef4444; /* Red color for logout */
          color:#fff; 
          border:none; 
          width:100%; 
          padding:12px 12px; 
          border-radius:8px; 
          font-weight:700; 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          gap:8px; 
          cursor:pointer; 
          transition:background .2s; 
        }
        .logout:hover{ 
          background:#dc2626; 
        }

        /* Mobile specific styles for the drawer effect (inherited from LearnerLayout, but here for completeness) */
        @media (max-width: 992px){
          .learner-sidebar{ 
             /* The LearnerLayout will control the fixed position and transform */
             box-shadow:4px 0 16px rgba(0,0,0,.4); /* Stronger shadow on mobile */
          }
        }
      `})]})}function eM(){const e=st(),t=yt(),[r,n]=y.useState(()=>{try{const N=localStorage.getItem("learner");return N?JSON.parse(N):null}catch(N){return console.error("Failed to parse learner data from localStorage",N),null}}),[o,l]=y.useState(!0),[u,f]=y.useState(!1),[p,h]=y.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 992px)").matches:!1),[m,v]=y.useState(!1),[b,w]=y.useState(!1);y.useEffect(()=>{r?l(!1):e("/login",{replace:!0})},[r,e]),y.useEffect(()=>{if(typeof window>"u")return;const N=window.matchMedia("(max-width: 992px)"),_=T=>{h(T.matches),T.matches&&v(!1),w(!1)};return N.addEventListener("change",_),_(N),()=>N.removeEventListener("change",_)},[]),y.useEffect(()=>(p&&(document.body.style.overflow=b?"hidden":""),()=>{document.body.style.overflow=""}),[p,b]),y.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"}),f(!1),p&&w(!1)},[t.pathname,p]);function A(){localStorage.removeItem("learner"),n(null),l(!0)}const S=(()=>{if(!r)return"Learner";if(r.firstName)return r.firstName;if(r.fullName)return r.fullName.split(" ")[0];if(r.email){const N=r.email.split("@")[0],_=N.split(/[. _-]/).filter(z=>z.length>0);let T=_.length>0?_[0]:N;return T.charAt(0).toUpperCase()+T.slice(1)}return"Learner"})();if(o||!r)return c.jsx("div",{style:cr.loading,children:"Loading Dashboard…"});const E=260,C=!p&&m?E:0;return c.jsxs("div",{style:{...cr.wrapper,"--desktop-sidebar-width":`${E}px`},children:[c.jsxs("header",{style:cr.header,children:[c.jsxs("div",{style:cr.brandArea,children:[c.jsx("button",{onClick:()=>{p?w(N=>!N):v(N=>!N)},style:cr.iconBtn,"aria-label":"Toggle sidebar",children:c.jsx(m0,{size:22})}),c.jsx(xe,{to:"/dashboard",style:cr.logoLink,children:"LEARNER HUB"})]}),c.jsxs("div",{style:cr.headerRight,children:[c.jsxs("span",{style:cr.welcome,children:["Hello, ",S," 👋"]}),c.jsx("div",{style:cr.avatar,onClick:()=>f(N=>!N),"aria-controls":"quick-nav-menu","aria-expanded":u,children:(S?.[0]||"L").toUpperCase()})]})]}),c.jsx("aside",{style:{...cr.sidebarShell,transform:p?b?"translateX(0)":"translateX(-100%)":m?"translateX(0)":"translateX(calc(-1 * var(--desktop-sidebar-width)))"},children:c.jsx(JT,{open:p?b:m,onClose:()=>w(!1),onLogout:A})}),p&&b&&c.jsx("div",{onClick:()=>w(!1),style:cr.backdrop,"aria-hidden":"true"}),c.jsxs("div",{style:{...cr.page,marginLeft:C},children:[c.jsx("main",{style:cr.main,onClick:()=>{u&&f(!1)},children:c.jsx(ud,{})}),c.jsxs("footer",{style:cr.footer,children:["© ",new Date().getFullYear()," Learning Platform · All rights reserved"]})]})]})}const cr={wrapper:{minHeight:"100vh",background:"#f8fafc",display:"flex",paddingTop:"64px",position:"relative"},loading:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f1f5f9",color:"#0f4f9f",fontWeight:800},header:{height:"64px",position:"fixed",top:0,left:0,right:0,zIndex:1001,background:"#fff",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 6px rgba(0,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"},brandArea:{display:"flex",alignItems:"center",gap:12},iconBtn:{background:"none",border:"none",cursor:"pointer",color:"#0f4f9f",padding:6,borderRadius:8},logoLink:{fontWeight:900,fontSize:"1.1rem",color:"#0f4f9f",textDecoration:"none"},headerRight:{display:"flex",alignItems:"center",gap:10},welcome:{color:"#475569",fontSize:".95rem",fontWeight:700},avatar:{width:38,height:38,borderRadius:"50%",background:"#0f4f9f",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,cursor:"pointer"},sidebarShell:{position:"fixed",left:0,top:"64px",bottom:0,width:"var(--desktop-sidebar-width)",zIndex:2001,transition:"transform .3s ease",backgroundColor:"#0f172a"},backdrop:{position:"fixed",inset:0,background:"rgba(2,6,23,0.55)",zIndex:2e3,backdropFilter:"blur(2px)"},page:{flex:1,display:"flex",flexDirection:"column",minHeight:"calc(100vh - 64px)",transition:"margin-left .3s ease"},main:{flex:1,padding:20,maxWidth:1250,width:"100%",margin:"0 auto"},footer:{padding:"12px 20px",textAlign:"center",fontSize:".85rem",color:"#64748b",borderTop:"1px solid #e2e8f0",background:"#f8fafc"}};function tM({open:e,onClose:t,onLogout:r}){const n=st(),o=yt(),l=()=>typeof window<"u"&&window.matchMedia("(max-width: 992px)").matches;y.useEffect(()=>{l()&&t()},[o.pathname]);const u=[{to:"/trainer/dashboard",icon:f0,label:"Dashboard"},{to:"/trainer/my-courses",icon:fs,label:"My Courses"},{to:"/trainer/course-management",icon:d0,label:"Course Management"},{to:"/trainer/student-progress",icon:_A,label:"Student Progress"},{to:"/trainer/earnings",icon:fd,label:"Earnings"},{to:"/trainer/notifications",icon:Co,label:"Notifications"},{to:"/trainer/settings",icon:g0,label:"Settings"}];return c.jsxs("aside",{className:"trainer-sidebar",children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsx("div",{className:"logo",children:"🧑‍🏫"}),c.jsx("h2",{className:"title",children:"Trainer Hub"})]}),c.jsxs("nav",{className:"nav",children:[c.jsx("div",{className:"nav-group-title",children:"Main Menu"}),u.map(({to:f,icon:p,label:h})=>c.jsxs(Zl,{to:f,className:({isActive:m})=>`nav-item ${m?"active":""}`,onClick:()=>l()&&t(),children:[c.jsx(p,{size:18}),c.jsx("span",{children:h})]},f))]}),c.jsx("div",{className:"bottom",children:c.jsxs("button",{className:"logout",onClick:()=>{r(),n("/login")},children:[c.jsx(h0,{size:16})," Logout"]})}),c.jsx("style",{jsx:"true",children:`
        .trainer-sidebar {
          height: 100%;
          width: 100%;
          background: linear-gradient(180deg, #0f172a, #1e293b);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }
        .title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #e2e8f0;
        }
        .nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px 10px;
          overflow-y: auto;
        }
        .nav-group-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 14px 14px 4px 14px;
          text-transform: uppercase;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          color: #cbd5e1;
          text-decoration: none;
          border-radius: 8px;
          transition: 0.2s;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }
        .nav-item.active {
          background: rgba(37, 99, 235, 0.2);
          color: #fff;
          box-shadow: inset 3px 0 0 #3b82f6;
        }
        .bottom {
          padding: 16px 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logout {
          background: #ef4444;
          color: #fff;
          border: none;
          width: 100%;
          padding: 12px 12px;
          border-radius: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }
        .logout:hover {
          background: #dc2626;
        }
      `})]})}function rM({onMenuClick:e}){return c.jsxs("header",{className:"trainer-navbar",children:[c.jsxs("div",{className:"left",children:[c.jsx("button",{className:"menu-btn",onClick:e,"aria-label":"Toggle Sidebar",children:c.jsx(m0,{size:20})}),c.jsx("h2",{children:"Trainer Console"})]}),c.jsxs("div",{className:"right",children:[c.jsx("input",{className:"search",placeholder:"Search learners, courses..."}),c.jsx("button",{className:"notify",title:"Notifications",children:"🔔"}),c.jsx("img",{className:"avatar",alt:"Trainer",src:"https://i.pravatar.cc/80?img=8"})]}),c.jsx("style",{children:`
        .trainer-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 12px 20px;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          transition: background 0.2s;
          color: #1e3a8a;
        }
        .menu-btn:hover {
          background: #eff6ff;
        }
        .trainer-navbar h2 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.2px;
          color: #0f172a;
        }
        .right {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .search {
          width: 260px;
          max-width: 42vw;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 8px 12px;
          outline: none;
          transition: all 0.2s;
        }
        .search:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
        .notify {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 8px 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        .notify:hover {
          background: #dbeafe;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
        }
        @media (max-width: 640px) {
          .search {
            display: none;
          }
        }
      `})]})}function nM(){const e=st(),t=yt(),[r,n]=y.useState(()=>{try{const S=localStorage.getItem("trainer");return S?JSON.parse(S):null}catch{return null}}),[o,l]=y.useState(!0),[u,f]=y.useState(typeof window<"u"?window.matchMedia("(max-width: 992px)").matches:!1),[p,h]=y.useState(!1),[m,v]=y.useState(!1);y.useEffect(()=>{r?l(!1):e("/login",{replace:!0})},[r,e]),y.useEffect(()=>{const S=window.matchMedia("(max-width: 992px)"),E=C=>{f(C.matches),C.matches&&(h(!1),v(!1))};return S.addEventListener("change",E),()=>S.removeEventListener("change",E)},[]),y.useEffect(()=>(u&&(document.body.style.overflow=m?"hidden":""),()=>document.body.style.overflow=""),[u,m]),y.useEffect(()=>{window.scrollTo(0,0),u&&v(!1)},[t.pathname,u]);const b=()=>{localStorage.removeItem("trainer"),n(null),l(!0),e("/login",{replace:!0})};if((()=>{if(!r)return"Trainer";if(r.firstName)return r.firstName;if(r.name)return r.name;if(r.email){const S=r.email.split("@")[0];return S.charAt(0).toUpperCase()+S.slice(1)}return"Trainer"})(),o||!r)return c.jsx("div",{style:ri.loading,children:"Loading Trainer Dashboard…"});const A=260,j=!u&&p?A:0;return c.jsxs("div",{style:{...ri.wrapper,"--desktop-sidebar-width":`${A}px`},children:[c.jsx(rM,{onMenuClick:()=>u?v(S=>!S):h(S=>!S)}),c.jsx("aside",{style:{...ri.sidebarShell,transform:u?m?"translateX(0)":"translateX(-100%)":p?"translateX(0)":"translateX(calc(-1 * var(--desktop-sidebar-width)))"},children:c.jsx(tM,{open:u?m:p,onClose:()=>v(!1),onLogout:b})}),u&&m&&c.jsx("div",{onClick:()=>v(!1),style:ri.backdrop,"aria-hidden":"true"}),c.jsxs("div",{style:{...ri.page,marginLeft:j},children:[c.jsx("main",{style:ri.main,children:c.jsx(ud,{})}),c.jsxs("footer",{style:ri.footer,children:["© ",new Date().getFullYear()," TalentMinds · Trainer Console"]})]})]})}const ri={wrapper:{minHeight:"100vh",background:"#f8fafc",display:"flex",flexDirection:"column"},loading:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,color:"#1e40af",background:"#f1f5f9"},sidebarShell:{position:"fixed",left:0,top:0,bottom:0,width:"var(--desktop-sidebar-width)",backgroundColor:"#0f172a",zIndex:2001,transition:"transform .3s ease"},backdrop:{position:"fixed",inset:0,background:"rgba(2,6,23,0.55)",zIndex:2e3,backdropFilter:"blur(2px)"},page:{flex:1,display:"flex",flexDirection:"column",minHeight:"100vh",transition:"margin-left .3s ease",paddingTop:"80px"},main:{flex:1,padding:"20px 24px",maxWidth:1300,width:"100%",margin:"0 auto"},footer:{padding:"12px 20px",textAlign:"center",fontSize:".85rem",color:"#64748b",borderTop:"1px solid #e2e8f0",background:"#f8fafc"}},bh=[{heading:"Get Certified. Get Ahead.",stats:["8,000,000+ Careers advanced","1,500+ Live classes every month","85% Report career success"],image:"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",primaryButton:"Explore Programs",secondaryButton:"For Businesses",primaryLink:"/explore-programs",secondaryLink:"/business"},{heading:"Advance Your Career With Professional Courses",stats:["Learn from Industry Experts","Flexible Online Learning","Real-World Projects"],image:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",primaryButton:"Browse Courses",secondaryButton:"Learn More",primaryLink:"/browse-all-courses",secondaryLink:"/learn-more-about-us"},{heading:"Empower Your Team With Enterprise Learning",stats:["Custom Learning Paths","Analytics & Insights","Dedicated Support"],image:"https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=80",primaryButton:"Get Started",secondaryButton:"Learn More",primaryLink:"/business",secondaryLink:"/learn-more-about-us"}];function aM(){const e=st(),[t,r]=y.useState(0),n=y.useRef(null),[o,l]=y.useState(!1);y.useEffect(()=>(u(),()=>f()),[]);function u(){f(),n.current=setInterval(()=>{p()},7e3)}function f(){n.current&&(clearInterval(n.current),n.current=null)}function p(){l(!0),setTimeout(()=>{r(v=>(v+1)%bh.length),l(!1)},300)}function h(v){l(!0),setTimeout(()=>{r(v),l(!1)},300)}const m=bh[t];return c.jsxs("section",{className:"hero-section",onMouseEnter:f,onMouseLeave:u,children:[c.jsxs("div",{className:`hero-wrapper ${o?"fade":""}`,children:[c.jsxs("div",{className:"hero-left",children:[c.jsx("h1",{children:m.heading}),c.jsx("ul",{className:"hero-stats",children:m.stats.map((v,b)=>c.jsxs("li",{children:[c.jsx("span",{className:"check",children:"✔"})," ",v]},b))}),c.jsxs("div",{className:"hero-buttons",children:[c.jsx("button",{className:"primary-btn",onClick:()=>e(m.primaryLink),children:m.primaryButton}),c.jsx("button",{className:"secondary-btn",onClick:()=>e(m.secondaryLink),children:m.secondaryButton})]})]}),c.jsx("div",{className:"hero-right",children:c.jsx("img",{src:m.image,alt:m.heading,loading:"lazy",onError:v=>v.target.src="https://via.placeholder.com/600x400?text=Image+Unavailable"})})]}),c.jsx("div",{className:"hero-dots",children:bh.map((v,b)=>c.jsx("button",{className:`dot ${b===t?"active":""}`,onClick:()=>h(b)},b))}),c.jsx("style",{children:`
        .hero-section {
          width: 100%;
          background: #fff;
          overflow: hidden;
          padding: 60px 20px 40px;
          position: relative;
          margin-top:60px
        }

        .hero-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          transition: opacity 0.5s ease-in-out;
        }

        .hero-wrapper.fade {
          opacity: 0;
        }

        .hero-left {
          flex: 1;
          max-width: 550px;
        }

        .hero-left h1 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .hero-stats {
          list-style: none;
          margin: 0 0 28px;
          padding: 0;
          font-size: 1.1rem;
          color: #334155;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .check {
          color: #10b981;
          margin-right: 8px;
          font-weight: bold;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .primary-btn:hover {
          background: #1d4ed8;
        }

        .secondary-btn {
          background: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondary-btn:hover {
          background: #eff6ff;
        }

        .hero-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-right img {
          width: 100%;
          max-width: 540px;
          height: auto;
          min-height: 320px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          transition: transform 0.6s ease;
        }

        .hero-section:hover .hero-right img {
          transform: scale(1.03);
        }

        .hero-dots {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #cbd5e1;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #2563eb;
          border-color: #2563eb;
        }

        @media (max-width: 900px) {
          .hero-wrapper {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-right img {
            max-width: 420px;
            min-height: 260px;
          }
          .hero-left h1 {
            font-size: 2rem;
          }
          .hero-stats {
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .hero-left h1 {
            font-size: 1.6rem;
          }
          .primary-btn, .secondary-btn {
            font-size: 0.9rem;
            padding: 10px 18px;
          }
        }
      `})]})}const ig=[{name:"Google",logo:"https://logo.clearbit.com/google.com"},{name:"Amazon",logo:"https://logo.clearbit.com/amazon.com"},{name:"Microsoft",logo:"https://logo.clearbit.com/microsoft.com"},{name:"Accenture",logo:"https://logo.clearbit.com/accenture.com"},{name:"Capgemini",logo:"https://logo.clearbit.com/capgemini.com"},{name:"Cognizant",logo:"https://logo.clearbit.com/cognizant.com"},{name:"TCS",logo:"https://logo.clearbit.com/tcs.com"},{name:"Infosys",logo:"https://logo.clearbit.com/infosys.com"},{name:"Wipro",logo:"https://logo.clearbit.com/wipro.com"},{name:"IBM",logo:"https://logo.clearbit.com/ibm.com"},{name:"HCLTech",logo:"https://logo.clearbit.com/hcltech.com"}],iM=ig.concat(ig),oM=ig.length;function lM(){const e={"--logo-count":oM};return c.jsxs("div",{className:"marquee-wrapper",children:[c.jsxs("div",{className:"marquee-inner wrap",children:[c.jsx("h2",{className:"marquee-title",children:"Trusted by TalentMinds Alumni at these Top Companies"}),c.jsx("div",{className:"marquee","aria-hidden":"true",style:e,children:c.jsx("div",{className:"track",children:iM.map((t,r)=>c.jsx("div",{className:"logo",children:c.jsx("img",{src:t.logo,alt:t.name,title:t.name,loading:"lazy"})},r))})})]}),c.jsx("style",{children:`
        /* Setup CSS Variables for dynamic width and animation */
        :root {
          --marquee-speed: 28s; /* Total time to complete one loop */
          --logo-gap: 36px;
          --logo-count: 11; /* Default count if JS fails, but JS overrides this */
        }
        .marquee-wrapper { 
            padding: 48px 0; 
            background: #f8fafc; 
            overflow: hidden; 
            user-select: none; /* Prevent selection */
        }
        .wrap { 
            max-width:1300px; /* Slightly wider wrap for more logos to show */
            margin:0 auto; 
            padding: 0 16px; 
            box-sizing:border-box; 
        }
        .marquee-title { 
            color:#0f172a; 
            font-size:1.6rem; 
            font-weight:700; 
            margin:0 0 30px; 
            text-align:center; /* Centered title is more common for this section */
        }

        .marquee { 
            overflow:hidden; 
            width:100%; 
        }
        
        .track {
          display:flex;
          flex-wrap: nowrap; 
          align-items:center;
          gap: var(--logo-gap);
          /* CRITICAL FIX: Calculates the width needed for one full cycle (2x logo set) */
          width: calc((var(--logo-width, 140px) + var(--logo-gap)) * var(--logo-count) * 2); 
          animation: scroll var(--marquee-speed) linear infinite;
        }

        /* PAUSE ON HOVER */
        .marquee:hover .track {
            animation-play-state: paused;
        }

        .logo { 
            flex: 0 0 auto; 
            display:flex; 
            align-items:center; 
            justify-content:center;
            padding: 0 10px; /* Added internal padding for hover area */
        }
        
        .logo img { 
            height:48px; 
            width:auto; 
            max-width: 140px; /* Set a max width for large logos */
            object-fit:contain; 
            display:block; 
            filter: grayscale(100%); /* Mute the colors */
            opacity: 0.4; /* Soften the logos */
            transition: all 0.3s ease;
        }

        .logo img:hover {
            filter: grayscale(0%); /* Restore color on hover */
            opacity: 1; /* Full opacity on hover */
            cursor: pointer;
        }

        @keyframes scroll {
          /* Translates the full width of one set of logos */
          0% { transform: translateX(0); }
          100% { 
            transform: translateX(calc(-1 * (var(--logo-width, 140px) + var(--logo-gap)) * var(--logo-count))); 
          }
        }

        /* responsive */
        @media (max-width: 1000px) {
           .marquee-title { font-size:1.4rem; }
        }
        @media (max-width: 900px) {
          :root { --logo-gap: 24px; --marquee-speed: 24s; }
          .logo img { height:40px; }
          .marquee-title { font-size:1.25rem; margin-bottom: 20px; }
        }

        @media (max-width: 420px) {
          :root { --logo-gap: 16px; --marquee-speed: 20s; }
          .logo img { height:34px; }
          .marquee-wrapper { padding: 28px 0; }
        }
      `})]})}const Dn=[{name:"Sai Shashank",role:"Full Stack Developer at Wipro",text:"TalentMinds transformed my technical foundation. The full-stack program was practical, and the mentors ensured I could build scalable applications confidently.",image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80"},{name:"Yugendar G",role:"Java Backend Developer at Hypergrid Technology Pvt. Ltd.",text:"The real-time backend projects and mentor sessions helped me strengthen my Java and Spring Boot skills, which directly contributed to my job success.",image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"},{name:"Manikanta",role:"Frontend Developer at HealthOnus",text:"TalentMinds helped me master frontend development from scratch. The React projects, design reviews, and guidance shaped my portfolio beautifully.",image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80"},{name:"Sai Kiran",role:"Full Stack Developer at Hypergrid Technology Pvt. Ltd.",text:"The project-based approach and deep mentor involvement made me confident in both frontend and backend stacks. I landed my dream role fast!",image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80"}];function sM(){const[e,t]=y.useState(0),[r,n]=y.useState(!1),o=y.useRef();y.useEffect(()=>(r||(o.current=setInterval(()=>{t(u=>(u+1)%Dn.length)},6e3)),()=>clearInterval(o.current)),[r]);const l=u=>{t(f=>(f+u+Dn.length)%Dn.length)};return c.jsxs("section",{className:"tm-testimonials-section",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[c.jsx("div",{className:"tm-bg-gradient"}),c.jsx("h2",{className:"tm-testimonials-title",children:"What Our Learners Say"}),c.jsxs("div",{className:"tm-testimonials-carousel",children:[c.jsx("button",{className:"tm-arrow tm-arrow-left",onClick:()=>l(-1),children:"‹"}),c.jsxs("div",{className:"tm-testimonial-card slide-in",children:[c.jsx("div",{className:"tm-img-wrap",children:c.jsx("img",{src:Dn[e].image,alt:Dn[e].name,className:"tm-testimonial-img"})}),c.jsxs("p",{className:"tm-testimonial-text",children:["“",Dn[e].text,"”"]}),c.jsxs("div",{className:"tm-testimonial-meta",children:[c.jsx("span",{className:"tm-testimonial-name",children:Dn[e].name}),c.jsx("span",{className:"tm-testimonial-role",children:Dn[e].role})]})]},e),c.jsx("button",{className:"tm-arrow tm-arrow-right",onClick:()=>l(1),children:"›"})]}),c.jsx("div",{className:"tm-dots",children:Dn.map((u,f)=>c.jsx("span",{className:`tm-dot${f===e?" active":""}`,onClick:()=>t(f)},f))}),c.jsx("style",{children:`
        .tm-testimonials-section {
          position: relative;
          overflow: hidden;
          padding: 120px 20px;
          text-align: center;
          font-family: 'Inter', sans-serif;
          color: #0f172a;
          z-index: 1;
        }

        .tm-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, #e0f2fe, transparent 40%),
                      radial-gradient(circle at 80% 80%, #fde68a, transparent 40%),
                      linear-gradient(120deg, #e0f2fe, #fffaf0, #fef3c7);
          background-size: 250% 250%;
          animation: gradientShift 15s ease infinite;
          z-index: -2;
          opacity: 0.95;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .tm-testimonials-title {
          font-size: 2.7rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 70px;
          text-shadow: 0 2px 8px rgba(11, 77, 163, 0.2);
        }

        .tm-testimonials-carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .tm-testimonial-card {
          background: rgba(255, 255, 255, 0.96);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.15);
          padding: 50px 30px;
          max-width: 420px;
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .tm-testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(11, 77, 163, 0.25);
        }

        .slide-in {
          animation: slideIn 0.8s ease-in-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tm-img-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 25px;
        }

        .tm-testimonial-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #0b4da3;
          box-shadow: 0 0 25px rgba(11, 77, 163, 0.25);
          background: #fff;
        }

        .tm-testimonial-text {
          font-size: 1.1rem;
          color: #1e293b;
          margin-bottom: 25px;
          line-height: 1.6;
          font-style: italic;
          max-width: 360px;
        }

        .tm-testimonial-name {
          font-weight: 700;
          color: #0b4da3;
          font-size: 1.1rem;
          display: block;
          margin-top: 5px;
        }

        .tm-testimonial-role {
          color: #f59e42;
          font-size: 0.95rem;
          display: block;
          margin-top: 3px;
        }

        .tm-arrow {
          background: rgba(255, 255, 255, 0.85);
          border: none;
          border-radius: 50%;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: #0b4da3;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tm-arrow:hover {
          background: #0b4da3;
          color: #fff;
          transform: scale(1.1);
        }

        .tm-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px;
        }

        .tm-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tm-dot.active {
          background: #f59e42;
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .tm-testimonials-title { font-size: 2.1rem; }
          .tm-testimonial-card { max-width: 90%; padding: 35px 20px; }
          .tm-testimonial-img { width: 90px; height: 90px; }
        }
      `})]})}const cM=[{name:"Udemy",logo:"https://logo.clearbit.com/udemy.com",rating:4.7},{name:"Coursera",logo:"https://logo.clearbit.com/coursera.org",rating:4.8},{name:"Trustpilot",logo:"https://logo.clearbit.com/trustpilot.com",rating:4.9}];function uM(){const[r,n]=y.useState(0),[o,l]=y.useState(0),[u,f]=y.useState(!1);y.useEffect(()=>{const h=document.querySelector(".lt-section");new IntersectionObserver(v=>{v[0].isIntersecting&&f(!0)},{threshold:.2}).observe(h)},[]),y.useEffect(()=>{if(!u)return;const m=setInterval(()=>{n(v=>v<125e3?Math.min(v+Math.ceil((125e3-v)/30),125e3):125e3),l(v=>v<95?Math.min(v+Math.ceil((95-v)/10),95):95)},40);return()=>clearInterval(m)},[u]);const p=h=>h===0?"00,000":h.toLocaleString();return c.jsxs("section",{className:`lt-section ${u?"visible":""}`,children:[c.jsxs("div",{className:"lt-container",children:[c.jsxs("h2",{className:"lt-title",children:["Trusted by"," ",c.jsx("span",{className:"lt-highlight",children:c.jsxs("span",{className:"lt-count",children:[p(r),"+"]})})," ","Learners Worldwide"]}),c.jsx("p",{className:"lt-subtitle",children:"Empowering professionals across 100+ countries with world-class tech and business skills."}),c.jsxs("div",{className:"lt-metrics-bar",children:[c.jsxs("div",{className:"lt-metric-item",children:[c.jsxs("span",{className:"lt-metric-number",children:[o,"+"]}),c.jsx("p",{className:"lt-metric-label",children:"Hiring Partners"})]}),c.jsx("div",{className:"lt-separator"}),c.jsxs("div",{className:"lt-metric-item",children:[c.jsx("span",{className:"lt-metric-number",children:"95%"}),c.jsx("p",{className:"lt-metric-label",children:"Career Success Rate"})]}),c.jsx("div",{className:"lt-separator"}),c.jsxs("div",{className:"lt-metric-item",children:[c.jsx("span",{className:"lt-metric-number",children:"2M+"}),c.jsx("p",{className:"lt-metric-label",children:"Hours of Learning Delivered"})]})]}),c.jsx("h3",{className:"lt-ratings-title",children:"Rated Excellent on Leading Platforms"}),c.jsx("div",{className:"lt-ratings",children:cM.map((h,m)=>c.jsxs("div",{className:"lt-rating-card",children:[c.jsxs("div",{className:"lt-rating-score",children:[h.rating," ",c.jsx("span",{className:"lt-star",children:"★"})]}),c.jsxs("div",{className:"lt-rating-logo",children:[c.jsx("img",{src:h.logo,alt:h.name,onError:v=>v.target.src="https://via.placeholder.com/100x40?text=Logo"}),c.jsx("span",{children:h.name})]})]},m))})]}),c.jsx("style",{children:`
        .lt-section {
          background: radial-gradient(circle at top right, #e0f2fe, #f8fafc);
          text-align: center;
          padding: 90px 20px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out;
        }
        .lt-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .lt-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .lt-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }
        .lt-subtitle {
          font-size: 1.2rem;
          color: #475569;
          margin-bottom: 50px;
        }
        .lt-highlight {
          color: #f59e0b;
        }
        .lt-count {
          font-variant-numeric: tabular-nums;
          font-weight: 900;
        }

        /* --- Metrics --- */
        .lt-metrics-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }
        .lt-metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 180px;
        }
        .lt-metric-number {
          font-size: 3rem;
          font-weight: 800;
          color: #2563eb;
          line-height: 1.1;
        }
        .lt-metric-label {
          color: #475569;
          font-size: 1.05rem;
          margin-top: 5px;
        }
        .lt-separator {
          width: 1px;
          height: 70px;
          background: #cbd5e1;
        }

        /* --- Ratings --- */
        .lt-ratings-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 25px;
        }
        .lt-ratings {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
          flex-wrap: wrap;
        }
        .lt-rating-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(11, 77, 163, 0.1);
          padding: 26px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }
        .lt-rating-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.15);
        }
        .lt-rating-score {
          font-size: 2.2rem;
          font-weight: 700;
          color: #0b4da3;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 10px;
        }
        .lt-star {
          color: #f59e0b;
        }
        .lt-rating-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .lt-rating-logo img {
          height: 32px;
          width: auto;
          border-radius: 6px;
        }
        .lt-rating-logo span {
          color: #1e293b;
          font-weight: 600;
          font-size: 1rem;
        }

        /* --- Responsiveness --- */
        @media (max-width: 768px) {
          .lt-title { font-size: 2rem; }
          .lt-metric-number { font-size: 2.3rem; }
          .lt-metrics-bar { gap: 30px; }
          .lt-separator { display: none; }
          .lt-rating-card { padding: 22px 28px; }
        }
        @media (max-width: 480px) {
          .lt-section { padding: 60px 20px; }
          .lt-title { font-size: 1.8rem; }
          .lt-subtitle { font-size: 1rem; }
          .lt-metric-number { font-size: 2rem; }
        }
      `})]})}function dM(){return c.jsxs("section",{className:"sb-banner-section",children:[c.jsxs("div",{className:"sb-banner-content",children:[c.jsxs("div",{className:"sb-banner-left",children:[c.jsxs("div",{className:"sb-banner-brand",children:[c.jsx("span",{className:"sb-logo-main",children:"HG's"}),c.jsx("span",{className:"sb-logo-highlight",children:"TalentMinds"}),c.jsx("span",{className:"sb-logo-divider",children:"|"}),c.jsx("span",{className:"sb-logo-boost",children:"SkillBoost"})]}),c.jsxs("h2",{children:["Boost Your Skills with"," ",c.jsx("span",{className:"sb-highlight",children:"Free, Career-Ready Programs"})]}),c.jsx("p",{children:"Explore 300+ expert-led courses designed to elevate your career. Learn in-demand skills for free and stay ahead in today’s job market."}),c.jsx("a",{href:"/courses?free=true",className:"sb-banner-btn",children:"Explore Free Programs →"})]}),c.jsx("div",{className:"sb-banner-right",children:c.jsx("img",{src:"https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",alt:"Learning and Skill Growth",className:"sb-banner-img"})})]}),c.jsx("style",{children:`
        .sb-banner-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          border-radius: 20px;
          border: 1.5px solid #dbeafe;
          box-shadow: 0 4px 24px rgba(37, 99, 235, 0.12);
          margin: 60px auto;
          max-width: 1200px;
          overflow: hidden;
        }

        .sb-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 64px 72px;
          gap: 48px;
        }

        .sb-banner-left {
          flex: 1.2;
        }

        .sb-banner-brand {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 1.7rem;
          font-weight: 900;
          margin-bottom: 20px;
        }

        .sb-logo-main {
          color: #fbbf24;
          font-weight: 900;
        }

        .sb-logo-highlight {
          color: #2563eb;
          font-weight: 900;
        }

        .sb-logo-divider {
          color: #94a3b8;
          font-weight: 600;
        }

        .sb-logo-boost {
          color: #f97316;
          font-weight: 800;
        }

        .sb-banner-left h2 {
          font-size: 2.4rem;
          color: #1e3a8a;
          font-weight: 800;
          margin-bottom: 18px;
          line-height: 1.2;
        }

        .sb-highlight {
          color: #2563eb;
        }

        .sb-banner-left p {
          font-size: 1.15rem;
          color: #334155;
          margin-bottom: 32px;
          max-width: 560px;
          line-height: 1.6;
        }

        .sb-banner-btn {
          background: linear-gradient(90deg, #2563eb 0%, #38bdf8 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px 36px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(37,99,235,0.25);
          transition: all 0.25s ease;
          display: inline-block;
        }

        .sb-banner-btn:hover {
          background: linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%);
          transform: translateY(-2px);
        }

        .sb-banner-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sb-banner-img {
          width: 100%;
          max-width: 400px;
          height: auto;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 6px 28px rgba(37,99,235,0.2);
          transition: transform 0.3s ease;
        }

        .sb-banner-img:hover {
          transform: scale(1.03);
        }

        /* RESPONSIVE */
        @media (max-width: 950px) {
          .sb-banner-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 40px 10vw;
          }

          .sb-banner-left {
            flex: unset;
          }

          .sb-banner-img {
            width: 100%;
            max-width: 420px;
            height: auto;
            margin-top: 16px;
          }

          .sb-banner-left p {
            margin: 0 auto 28px;
          }
        }

        @media (max-width: 600px) {
          .sb-banner-section {
            margin: 32px 0;
          }

          .sb-banner-content {
            padding: 28px 6vw;
          }

          .sb-banner-brand {
            font-size: 1.2rem;
            justify-content: center;
          }

          .sb-banner-left h2 {
            font-size: 1.5rem;
          }

          .sb-banner-left p {
            font-size: 1rem;
          }

          .sb-banner-btn {
            font-size: 1rem;
            padding: 12px 28px;
          }
        }
      `})]})}const fM=[{icon:"👨‍🏫",title:"Learn from Industry Experts",description:"All our courses are designed and delivered by top professionals from global tech companies and startups.",color:"#0b4da3"},{icon:"💻",title:"Hands-on Project Learning",description:"Build portfolio-ready real-world projects. Every course includes interactive labs and case studies.",color:"#f59e0b"},{icon:"🎓",title:"Globally Recognized Certification",description:"Earn certificates verified by leading organizations and share them directly on LinkedIn or your CV.",color:"#10b981"},{icon:"🚀",title:"Career-Focused Learning Path",description:"Get personalized learning plans and interview prep with career mentors who help you achieve your goals.",color:"#8b5cf6"}];function pM(){return y.useEffect(()=>{const e=document.querySelectorAll(".vp-card"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.2});e.forEach(r=>t.observe(r))},[]),c.jsxs("section",{className:"vp-section",children:[c.jsxs("div",{className:"vp-container",children:[c.jsx("h2",{className:"vp-title",children:"Why Professionals Choose TalentMinds"}),c.jsx("p",{className:"vp-subtitle",children:"An online learning platform designed for career transformation — combining expert-led content, real-world practice, and personalized mentorship."}),c.jsx("div",{className:"vp-grid",children:fM.map((e,t)=>c.jsxs("div",{className:"vp-card fade-up",children:[c.jsx("div",{className:"vp-icon-wrap",style:{backgroundColor:e.color},children:c.jsx("span",{className:"vp-icon",children:e.icon})}),c.jsx("h3",{className:"vp-card-title",children:e.title}),c.jsx("p",{className:"vp-card-description",children:e.description})]},t))})]}),c.jsx("style",{children:`
        .vp-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
          padding: 80px 20px;
          text-align: center;
          overflow: hidden;
        }
        .vp-container { max-width: 1200px; margin: 0 auto; }
        .vp-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
        }
        .vp-subtitle {
          font-size: 1.15rem;
          color: #4b5563;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .vp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }
        .vp-card {
          background: #fff;
          padding: 30px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 6px 20px rgba(11, 77, 163, 0.05);
          text-align: left;
          transition: all 0.6s ease, opacity 0.6s ease;
          opacity: 0;
          transform: translateY(30px);
        }
        .vp-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .vp-icon-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          color: #fff;
          font-size: 1.6rem;
        }
        .vp-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #111827;
        }
        .vp-card-description {
          color: #4b5563;
          font-size: 0.98rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .vp-title { font-size: 2rem; }
          .vp-subtitle { font-size: 1rem; }
          .vp-card { text-align: center; }
          .vp-icon-wrap { margin: 0 auto 15px; }
        }
      `})]})}const hM=[{metric:"₹9.6 LPA",description:"Average starting salary of graduates",icon:"💼"},{metric:"92%",description:"Placed within 6 months of course completion",icon:"📈"},{metric:"200+",description:"Top hiring partners worldwide",icon:"🏢"},{metric:"1.2M+",description:"Learners advanced their careers with TalentMinds",icon:"🌍"}];function mM(){const e=st();return y.useEffect(()=>{const t=document.querySelectorAll(".co-item"),r=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.2});t.forEach(n=>r.observe(n))},[]),c.jsxs("section",{className:"co-section",children:[c.jsxs("div",{className:"co-container",children:[c.jsx("h2",{className:"co-title",children:"Career Outcomes That Define Success"}),c.jsx("p",{className:"co-subtitle",children:"We don’t just teach — we empower transformation. Discover how HG’s TalentMinds learners are getting placed, promoted, and leading innovation globally."}),c.jsx("div",{className:"co-grid",children:hM.map((t,r)=>c.jsxs("div",{className:"co-item fade-up",children:[c.jsx("div",{className:"co-icon",children:t.icon}),c.jsxs("div",{children:[c.jsx("h3",{className:"co-metric",children:t.metric}),c.jsx("p",{className:"co-description",children:t.description})]})]},r))}),c.jsx("button",{className:"co-cta-btn",onClick:()=>e("placement-report"),children:"View Full Placement Report →"})]}),c.jsx("style",{children:`
        .co-section {
          background: linear-gradient(135deg, #0b4da3, #2563eb);
          color: #fff;
          padding: 90px 20px;
          text-align: center;
        }
        .co-container { max-width: 1100px; margin: 0 auto; }
        .co-title { font-size: 2.4rem; font-weight: 800; margin-bottom: 10px; }
        .co-subtitle { color: #dbeafe; font-size: 1.1rem; margin-bottom: 60px; line-height: 1.6; }

        .co-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }
        .co-item {
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 28px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
          transition: all 0.6s ease;
          opacity: 0;
          transform: translateY(40px);
        }
        .co-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .co-icon {
          font-size: 2.5rem;
          background: #fbbf24;
          color: #0b4da3;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .co-metric { font-size: 1.8rem; font-weight: 700; color: #fbbf24; }
        .co-description { font-size: 1rem; color: #e0f2fe; margin-top: 4px; }

        .co-cta-btn {
          background: #fbbf24;
          color: #0b4da3;
          border: none;
          padding: 16px 40px;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
          box-shadow: 0 6px 18px rgba(251,191,36,0.4);
        }
        .co-cta-btn:hover { background: #facc15; transform: translateY(-3px); }

        @media (max-width: 700px) {
          .co-title { font-size: 2rem; }
          .co-grid { gap: 20px; }
          .co-icon { width: 60px; height: 60px; font-size: 2rem; }
        }
      `})]})}const wh=[{name:"Google",logo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"},{name:"Amazon",logo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"},{name:"Accenture",logo:"https://upload.wikimedia.org/wikipedia/commons/5/59/Accenture.svg"},{name:"Microsoft",logo:"https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"},{name:"IBM",logo:"https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"},{name:"Deloitte",logo:"https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg"},{name:"KPMG",logo:"https://upload.wikimedia.org/wikipedia/commons/8/8e/KPMG_logo.svg"},{name:"TCS",logo:"https://upload.wikimedia.org/wikipedia/commons/5/52/Tata_Consultancy_Services_Logo.svg"},{name:"Infosys",logo:"https://upload.wikimedia.org/wikipedia/commons/8/8e/Infosys_logo.svg"},{name:"Capgemini",logo:"https://upload.wikimedia.org/wikipedia/commons/9/9e/Capgemini_201x_logo.svg"}];function gM(){const[e,t]=y.useState([]);y.useEffect(()=>{const n=document.querySelectorAll(".te-logo-card"),o=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&u.target.classList.add("visible")})},{threshold:.1});n.forEach(l=>o.observe(l))},[]);const r=n=>{t(o=>[...o,n])};return c.jsxs("section",{className:"te-section",children:[c.jsxs("div",{className:"te-container",children:[c.jsx("h2",{className:"te-title",children:"Our Learners Work With Leading Global Employers"}),c.jsx("p",{className:"te-subtitle",children:"Trusted by recruiters and global enterprises for job-ready, project-proven talent."}),c.jsx("div",{className:"te-logos-grid",children:wh.map((n,o)=>c.jsxs("div",{className:"te-logo-card fade-up",children:[!e.includes(o)&&c.jsx("div",{className:"te-logo-skeleton"}),c.jsx("img",{src:n.logo,alt:n.name,loading:"lazy",onLoad:()=>r(o),onError:l=>{l.target.onerror=null,l.target.src=`https://via.placeholder.com/120x60?text=${n.name}`},style:{display:e.includes(o)?"block":"none"}})]},o))}),c.jsx("div",{className:"te-scroll-container",children:c.jsx("div",{className:"te-scroll-track",children:wh.concat(wh).map((n,o)=>c.jsx("div",{className:"te-scroll-logo",children:c.jsx("img",{src:n.logo,alt:n.name,onError:l=>{l.target.onerror=null,l.target.src=`https://via.placeholder.com/120x60?text=${n.name}`}})},o))})})]}),c.jsx("style",{children:`
        /* --- Section --- */
        .te-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f5fa 100%);
          padding: 90px 20px;
          text-align: center;
          overflow: hidden;
        }

        .te-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .te-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }

        .te-subtitle {
          color: #475569;
          font-size: 1.1rem;
          margin-bottom: 50px;
        }

        /* --- Grid (Desktop) --- */
        .te-logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 35px;
          justify-items: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .te-logo-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          width: 160px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .te-logo-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .te-logo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(11, 77, 163, 0.15);
          border-color: #2563eb;
        }

        .te-logo-card img {
          max-width: 120px;
          max-height: 60px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .te-logo-card:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* --- Skeleton --- */
        .te-logo-skeleton {
          position: absolute;
          width: 60%;
          height: 30%;
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%);
          background-size: 200% 100%;
          border-radius: 8px;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* --- Mobile Scrolling --- */
        .te-scroll-container {
          display: none;
          position: relative;
          overflow: hidden;
          margin-top: 40px;
        }

        .te-scroll-track {
          display: flex;
          align-items: center;
          animation: scrollTrack 25s linear infinite;
          width: max-content;
        }

        @keyframes scrollTrack {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .te-scroll-logo {
          flex: 0 0 auto;
          margin: 0 25px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .te-scroll-logo img {
          max-height: 60px;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .te-scroll-logo img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* --- Responsive --- */
        @media (max-width: 850px) {
          .te-logos-grid { display: none; }
          .te-scroll-container { display: block; }
          .te-title { font-size: 2rem; }
        }

        @media (max-width: 480px) {
          .te-section { padding: 60px 15px; }
          .te-scroll-logo img { max-height: 50px; }
        }
      `})]})}const rw=[{icon:"📝",title:"Enroll in Your Path",desc:"Choose your career-aligned learning path curated by experts in tech and leadership."},{icon:"💡",title:"Learn by Doing",desc:"Build hands-on projects, case studies, and simulations to apply what you learn immediately."},{icon:"🎯",title:"Get Mentored",desc:"Work 1-on-1 with real industry professionals who guide you through challenges and code reviews."},{icon:"🚀",title:"Launch Your Career",desc:"Leverage our placement network, resume sessions, and mock interviews to land your dream job."}];function vM(){return c.jsxs("section",{className:"lj-section",children:[c.jsxs("div",{className:"lj-container",children:[c.jsx("h2",{className:"lj-title",children:"How TalentMinds Works"}),c.jsx("p",{className:"lj-subtitle",children:"A step-by-step journey designed to transform learners into job-ready professionals."}),c.jsx("div",{className:"lj-grid",children:rw.map((e,t)=>c.jsxs("div",{className:"lj-card",children:[c.jsx("div",{className:"lj-icon",children:e.icon}),c.jsx("h3",{children:e.title}),c.jsx("p",{children:e.desc}),t<rw.length-1&&c.jsx("div",{className:"lj-arrow",children:"→"})]},t))})]}),c.jsx("style",{children:`
        .lj-section {
          background: linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%);
          padding: 90px 20px;
          text-align: center;
        }
        .lj-container { max-width: 1200px; margin: 0 auto; }
        .lj-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 10px;
        }
        .lj-subtitle {
          font-size: 1.15rem;
          color: #475569;
          margin-bottom: 60px;
        }
        .lj-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: stretch;
          gap: 40px;
          position: relative;
        }
        .lj-card {
          background: #fff;
          border-radius: 16px;
          padding: 30px 24px;
          max-width: 260px;
          box-shadow: 0 6px 18px rgba(11, 77, 163, 0.08);
          position: relative;
          transition: all 0.3s ease;
        }
        .lj-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37, 99, 235, 0.15);
        }
        .lj-icon {
          font-size: 42px;
          margin-bottom: 15px;
        }
        .lj-card h3 {
          color: #0b4da3;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .lj-card p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.5;
        }
        .lj-arrow {
          position: absolute;
          right: -25px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 28px;
          color: #2563eb;
          font-weight: 700;
        }
        @media (max-width: 900px) {
          .lj-grid { flex-direction: column; align-items: center; }
          .lj-card { max-width: 90%; }
          .lj-arrow { display: none; }
        }
      `})]})}const xM=[{name:"Anusha",role:"Senior Network Engineer & Cloud Mentor | SIFY Technologies Pvt. Ltd.",exp:"8+ Years of Experience",image:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"},{name:"Sai Kiran",role:"Full Stack Mentor | Hypergrid Technologies Pvt. Ltd.",exp:"6+ Years of Experience",image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=600&q=80"},{name:"Manikanta",role:"Frontend Mentor | Health On Us",exp:"5+ Years of Experience",image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80"},{name:"Yugendar",role:"Java Backend Mentor | Hypergrid Technologies Pvt. Ltd.",exp:"7+ Years of Experience",image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"},{name:"Sai Shashank",role:"Full Stack Engineering Mentor | Olive Crypto Pvt. Ltd.",exp:"9+ Years of Experience",image:"https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80"}];function yM(){return c.jsxs("section",{className:"ms-section",children:[c.jsxs("div",{className:"ms-container",children:[c.jsx("h2",{className:"ms-title",children:"Learn from Our Expert Mentors"}),c.jsx("p",{className:"ms-subtitle",children:"Our mentors are real-world professionals who’ve guided hundreds of learners to excel in their careers with hands-on expertise and personalized coaching."}),c.jsx("div",{className:"ms-grid",children:xM.map((e,t)=>c.jsxs("div",{className:"ms-card",children:[c.jsx("div",{className:"ms-image-wrap",children:c.jsx("img",{src:e.image,alt:e.name})}),c.jsx("h3",{children:e.name}),c.jsx("p",{className:"ms-role",children:e.role}),c.jsx("p",{className:"ms-exp",children:e.exp})]},t))})]}),c.jsx("style",{children:`
        .ms-section {
          background: linear-gradient(180deg, #f9fbff 0%, #eef4ff 100%);
          text-align: center;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }

        .ms-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ms-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #0b4da3 0%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ms-subtitle {
          color: #475569;
          margin-bottom: 60px;
          font-size: 1.15rem;
          line-height: 1.6;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .ms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 35px;
          justify-items: center;
        }

        .ms-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px 20px;
          box-shadow: 0 8px 22px rgba(11,77,163,0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .ms-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, rgba(37,99,235,0.1), rgba(245,158,66,0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .ms-card:hover {
          transform: translateY(-10px);
          border-color: #2563eb;
          box-shadow: 0 14px 30px rgba(37,99,235,0.15);
        }

        .ms-card:hover::before {
          opacity: 1;
        }

        .ms-image-wrap {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 18px;
          border: 3px solid #2563eb;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .ms-card:hover .ms-image-wrap {
          transform: scale(1.05);
          border-color: #f59e42;
        }

        .ms-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ms-card h3 {
          font-weight: 700;
          color: #0b4da3;
          font-size: 1.2rem;
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
        }

        .ms-role {
          color: #334155;
          font-size: 0.95rem;
          margin-bottom: 6px;
          font-weight: 500;
        }

        .ms-exp {
          color: #f59e42;
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .ms-title { font-size: 2.1rem; }
          .ms-subtitle { font-size: 1rem; }
        }

        @media (max-width: 480px) {
          .ms-card { padding: 20px 12px; }
          .ms-image-wrap { width: 110px; height: 110px; }
          .ms-title { font-size: 1.8rem; }
        }
      `})]})}const bM="/TalentMindsLMS/assets/TalentMindsCertificate-Bt7fCmKG.png";function wM(){const e=y.useRef(null),t=y.useRef(null);return y.useEffect(()=>{const r=e.current;if(!r)return;const n=new IntersectionObserver(o=>o.forEach(l=>{l.isIntersecting&&r.classList.add("visible")}),{threshold:.2});return n.observe(r),()=>n.disconnect()},[]),y.useEffect(()=>{const r=l=>{const u=t.current;if(u){const f=u.querySelector(".cs-cert-mockup"),p=u.getBoundingClientRect(),h=(l.clientX-p.left)/p.width-.5,m=(l.clientY-p.top)/p.height-.5;f.style.transform=`scale(1.05) rotateX(${-m*5}deg) rotateY(${h*5}deg)`;const v=u.querySelector(".cs-glow");v.style.transform=`translate(${h*30}px, ${m*30}px)`}},n=()=>{const l=t.current;if(l){const u=l.querySelector(".cs-cert-mockup");u.style.transform="scale(1.0) rotateX(0deg) rotateY(0deg)";const f=l.querySelector(".cs-glow");f.style.transform="translate(0, 0)"}},o=t.current;return o&&(o.addEventListener("mousemove",r),o.addEventListener("mouseleave",n)),()=>{o&&(o.removeEventListener("mousemove",r),o.removeEventListener("mouseleave",n))}},[]),c.jsxs("section",{ref:e,className:"cs-section",children:[c.jsxs("div",{className:"cs-container",children:[c.jsxs("div",{className:"cs-content",children:[c.jsx("p",{className:"cs-tagline",children:"Certification of Excellence"}),c.jsxs("h2",{className:"cs-title",children:["Your Success, ",c.jsx("span",{className:"highlight-text",children:"Officially Recognized"})]}),c.jsx("p",{className:"cs-desc",children:"Earn the **HG's Talent Minds Everywhere** Certification, a benchmark for industry readiness. Our credentials are not just pieces of paper; they are a verifiable proof of mastery, respected by leading employers globally."}),c.jsxs("div",{className:"cs-badges",children:[c.jsxs("div",{className:"cs-badge",children:[c.jsx("span",{children:"🔒"})," Blockchain Verified"]}),c.jsxs("div",{className:"cs-badge",children:[c.jsx("span",{children:"🌐"})," Globally Recognized"]}),c.jsxs("div",{className:"cs-badge",children:[c.jsx("span",{children:"🤝"})," Industry Partnered"]})]}),c.jsx("div",{className:"cs-cta-block",children:c.jsxs("p",{className:"cs-cta-text",children:["Ready to demonstrate your expertise?",c.jsx("a",{href:"/partnerships",className:"cs-cta-link",children:"See our Global Recognition Partners"})]})})]}),c.jsxs("div",{ref:t,className:"cs-image",children:[c.jsx("div",{className:"cs-glow"}),c.jsx("div",{className:"cs-cert-mockup",children:c.jsx("img",{src:bM,alt:"HG's Talent Minds Everywhere Professional Certification Diploma"})})]})]}),c.jsx("style",{children:`
                /* (All your existing internal CSS is here...) */
                .cs-section {
                    position: relative;
                    background: linear-gradient(135deg, #0b1e3a 0%, #172d53 60%, #0b1e3a 100%);
                    color: #fff;
                    padding: 100px 20px;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(60px);
                    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .cs-section.visible { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
                .cs-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1200px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    gap: 50px;
                    position: relative;
                    z-index: 2;
                }
                .cs-content { 
                    flex: 1; 
                    min-width: 300px;
                    max-width: 550px; 
                }
                .cs-tagline {
                    color: #facc15;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 10px;
                }
                .cs-title {
                    font-size: 2.8rem;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    text-shadow: 0 3px 10px rgba(0,0,0,0.3);
                }
                .cs-title .highlight-text {
                    background: linear-gradient(90deg, #fde047 0%, #fbbf24 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .cs-desc {
                    color: #e0e7ff;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 40px; 
                }
                .cs-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    margin-bottom: 30px; 
                }
                .cs-badge {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50px;
                    padding: 8px 18px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: background 0.3s ease;
                }
                .cs-badge span {
                    color: #fbbf24;
                    font-size: 1.1rem;
                }
                .cs-badge:hover {
                    background: rgba(255, 255, 255, 0.15);
                }
                .cs-cta-block {
                    margin-top: 20px;
                    padding: 15px 0;
                }
                .cs-cta-text {
                    font-size: 1rem;
                    color: #ccc;
                }
                .cs-cta-link {
                    color: #fbbf24; 
                    font-weight: 700;
                    text-decoration: none;
                    border-bottom: 2px solid rgba(251, 191, 36, 0.5);
                    transition: border-bottom-color 0.3s ease;
                }
                .cs-cta-link:hover {
                    border-bottom-color: #fde047;
                }
                .cs-image {
                    flex: 1;
                    min-width: 320px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    perspective: 1500px; 
                    padding: 30px; 
                    height: auto; 
                    max-width: 600px; 
                }
                .cs-glow {
                    position: absolute;
                    width: 80%;
                    height: 80%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%);
                    filter: blur(50px);
                    transition: transform 0.4s ease;
                    z-index: 0;
                }
                .cs-cert-mockup {
                    position: relative; 
                    width: 100%; 
                    height: auto;
                    transform-style: preserve-3d;
                    transition: transform 0.4s ease;
                    z-index: 1;
                    margin: 0 auto;
                }
                .cs-image img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7); 
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    will-change: transform;
                }
                @media (max-width: 900px) {
                    .cs-container { 
                        flex-direction: column; 
                        text-align: center; 
                        gap: 30px;
                    }
                    .cs-content { 
                        max-width: 100%; 
                    }
                    .cs-title { 
                        font-size: 2.2rem; 
                    }
                    .cs-desc { 
                        font-size: 1rem; 
                    }
                    .cs-badges { 
                        justify-content: center; 
                    }
                    .cs-image {
                        padding: 0;
                        margin-top: 30px;
                        max-width: 400px; 
                        height: auto; 
                    }
                }
                @media (max-width: 600px) {
                    .cs-title { font-size: 1.8rem; }
                    .cs-glow { filter: blur(30px); }
                }
            `})]})}function jM(){const e=y.useRef(null),t=y.useRef(null);return y.useEffect(()=>{const n=e.current;if(!n)return;const o=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&n.classList.add("visible")})},{threshold:.2});return o.observe(n),()=>o.disconnect()},[]),y.useEffect(()=>{const n=u=>{const f=t.current;if(f){const p=f.querySelector("img"),h=f.getBoundingClientRect(),m=(u.clientX-h.left)/h.width-.5,v=(u.clientY-h.top)/h.height-.5;p.style.transform=`scale(1.05) rotateX(${-v*5}deg) rotateY(${m*5}deg)`;const b=f.querySelector(".ct-img-glow");b.style.transform=`translate(${m*20}px, ${v*20}px)`}},o=()=>{const u=t.current;if(u){const f=u.querySelector("img");f.style.transform="scale(1.01) rotateX(0deg) rotateY(0deg)";const p=u.querySelector(".ct-img-glow");p.style.transform="translate(0, 0)"}},l=t.current;if(l){l.addEventListener("mousemove",n),l.addEventListener("mouseleave",o);const u=l.querySelector("img");u.style.transform="scale(1.01)"}return()=>{l&&(l.removeEventListener("mousemove",n),l.removeEventListener("mouseleave",o))}},[]),c.jsxs("section",{ref:e,className:"ct-section",children:[c.jsx("div",{className:"ct-overlay"}),c.jsxs("div",{className:"ct-container",children:[c.jsxs("div",{className:"ct-content",children:[c.jsxs("h2",{className:"ct-title",children:["Unleash Potential with ",c.jsx("span",{className:"highlight-text",children:"HG's Talent Minds Everywhere"})]}),c.jsx("p",{className:"ct-subtitle",children:"Instantly transform your organization with **hyper-personalized** corporate training. Our expert-led, outcome-driven programs deliver a guaranteed ROI by focusing on **measurable business objectives** and future-proofing your workforce."}),c.jsxs("div",{className:"ct-features",children:[c.jsxs("div",{className:"ct-feature",children:[c.jsx("span",{children:"🚀"})," Guaranteed ROI & Measurable Outcomes"]}),c.jsxs("div",{className:"ct-feature",children:[c.jsx("span",{children:"🧠"})," AI-Driven Personalization"]}),c.jsxs("div",{className:"ct-feature",children:[c.jsx("span",{children:"💼"})," Executive Skill Acceleration"]})]}),c.jsx("button",{className:"ct-btn",children:"Start Your Transformation →"})]}),c.jsxs("div",{ref:t,className:"ct-image",children:[c.jsx("div",{className:"ct-img-glow"}),c.jsx("img",{src:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=700&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Teams collaborating in a modern office, representing corporate training and upskilling"})]})]}),c.jsx("style",{children:`
        .ct-section {
          position: relative;
          /* Deeper, more aggressive blue gradient */
          background: linear-gradient(135deg, #0b1e3a 0%, #1e3a8a 50%, #2563eb 100%);
          color: #fff;
          padding: 120px 20px; /* More vertical space */
          overflow: hidden;
          opacity: 0;
          transform: translateY(80px);
          transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smoother, more dramatic transition */
        }

        .ct-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .ct-overlay {
          position: absolute;
          inset: 0;
          /* Subtler, more concentrated central glow */
          background: radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 65%);
          z-index: 0;
        }

        .ct-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1300px; /* Wider container */
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 60px; /* Larger gap */
          position: relative;
          z-index: 1;
        }

        .ct-content {
          flex: 1;
          min-width: 320px;
        }

        .ct-title {
          font-size: 3.2rem; /* Larger, bolder title */
          font-weight: 900;
          margin-bottom: 25px;
          line-height: 1.15;
          text-shadow: 0 4px 10px rgba(0,0,0,0.3); /* Add depth to title */
        }

        .highlight-text {
          background: linear-gradient(90deg, #fde047 0%, #fbbf24 100%); /* Brighter gold highlight */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ct-subtitle {
          font-size: 1.3rem; /* Larger subtitle */
          color: #e0e7ff;
          margin-bottom: 50px; /* More spacing */
          max-width: 650px;
          line-height: 1.7;
        }
        
        .ct-subtitle strong {
            font-weight: 700;
            color: #fff; /* Ensure bold text stands out */
        }

        .ct-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px; /* Larger gap for features */
          margin-bottom: 50px;
        }

        .ct-feature {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px; /* More rounded */
          padding: 12px 20px; /* Larger padding */
          font-weight: 700;
          font-size: 1.05rem;
          color: #facc15;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.4s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .ct-feature:hover {
          transform: translateY(-3px) scale(1.02); /* More dynamic hover */
          background: rgba(255,255,255,0.15);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }

        .ct-btn {
          background: linear-gradient(90deg, #f59e42 0%, #fbbf24 100%);
          color: #0b1e3a; /* Darker text for high contrast */
          padding: 18px 50px; /* Larger button */
          border: none;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3), 0 0 40px rgba(255, 191, 0, 0.4); /* Stronger shadow/glow */
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-transform: uppercase;
        }

        .ct-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.4), 0 0 50px rgba(255, 215, 0, 0.6);
        }

        .ct-image {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          /* Crucial for 3D/tilt effect */
          perspective: 1000px;
          padding: 20px; /* Padding for the glow to breathe */
        }

        .ct-img-glow {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 16px;
            background: rgba(255, 191, 0, 0.2); /* Soft internal glow color */
            filter: blur(40px);
            opacity: 0.6;
            transition: transform 0.4s ease;
            z-index: 1;
        }

        .ct-image img {
          position: relative;
          z-index: 2;
          width: 550px; /* Larger image */
          max-width: 100%;
          border-radius: 18px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.5); /* Stronger shadow */
          border: 4px solid rgba(255,255,255,0.2); /* More prominent border */
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          background: #333; /* Dark background for empty space */
          will-change: transform;
          transform-style: preserve-3d; /* Enable 3D rotation */
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .ct-title { font-size: 2.8rem; }
          .ct-subtitle { font-size: 1.15rem; }
          .ct-image img { width: 450px; }
        }

        @media (max-width: 900px) {
          .ct-container { flex-direction: column; text-align: center; }
          .ct-title { font-size: 2.5rem; }
          .ct-subtitle { font-size: 1.1rem; margin: 0 auto 35px; }
          .ct-features { justify-content: center; }
          .ct-image { padding: 0; margin-top: 40px; }
          .ct-image img { width: 90%; }
          .ct-img-glow { display: none; } /* Hide 3D elements on small screens for performance/simplicity */
        }

        @media (max-width: 600px) {
          .ct-section { padding: 80px 15px; }
          .ct-title { font-size: 2rem; }
          .ct-subtitle { font-size: 1rem; }
          .ct-btn { width: 100%; padding: 16px 0; font-size: 1.1rem; }
          .ct-feature { font-size: 0.95rem; }
        }
      `})]})}function SM(){return y.useEffect(()=>{const e=document.querySelectorAll(".cs2-grid img"),t=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting&&n.target.classList.add("visible")})},{threshold:.2});e.forEach(r=>t.observe(r))},[]),c.jsxs("section",{className:"cs2-section",children:[c.jsxs("div",{className:"cs2-container",children:[c.jsx("h2",{className:"cs2-title",children:"A Thriving Community of Learners"}),c.jsx("p",{className:"cs2-subtitle",children:"Connect, collaborate, and grow with thousands of learners and mentors across the world."}),c.jsxs("div",{className:"cs2-grid",children:[c.jsx("img",{src:"https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=60",alt:"Collaborative learners"}),c.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",alt:"Networking learners"}),c.jsx("img",{src:"https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=900&q=60",alt:"Learning together"})]}),c.jsx("button",{className:"cs2-btn",children:"Join Our Community →"})]}),c.jsx("style",{children:`
        .cs2-section {
          background: linear-gradient(180deg, #f9fafc 0%, #eef4ff 100%);
          text-align: center;
          padding: 90px 20px;
          overflow: hidden;
        }
        .cs2-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .cs2-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 15px;
        }
        .cs2-subtitle {
          color: #475569;
          margin-bottom: 40px;
          font-size: 1.1rem;
        }
        .cs2-grid {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .cs2-grid img {
          width: 340px;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(11,77,163,0.1);
          transform: translateY(40px);
          opacity: 0;
          transition: all 0.8s ease;
        }
        .cs2-grid img.visible {
          transform: translateY(0);
          opacity: 1;
        }
        .cs2-grid img:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(37,99,235,0.2);
        }
        .cs2-btn {
          background: linear-gradient(90deg, #0b4da3 0%, #2563eb 100%);
          color: #fff;
          padding: 14px 34px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cs2-btn:hover {
          background: #083b7a;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .cs2-grid img {
            width: 300px;
            height: 200px;
          }
        }
        @media (max-width: 600px) {
          .cs2-title { font-size: 2rem; }
          .cs2-grid img { width: 90%; height: auto; }
        }
      `})]})}function AM(){return c.jsxs("div",{className:"tm-home",children:[c.jsx(aM,{}),c.jsx("div",{className:"tm-marquee",children:c.jsx(lM,{})}),c.jsx(pM,{}),c.jsx(vM,{}),c.jsx(mM,{}),c.jsx(yM,{}),c.jsx(wM,{}),c.jsx(gM,{}),c.jsx(jM,{}),c.jsx(SM,{}),c.jsx(uM,{}),c.jsx(sM,{}),c.jsx(dM,{}),c.jsx("style",{children:`
        .tm-home {
          background: #f8fafc;
          font-family: "Open Sans", "Inter", sans-serif;
          color: #0f172a;
        }

        .tm-marquee {
          background: linear-gradient(90deg, #e0eafc 0%, #cfdef3 100%);
          padding: 32px 0 24px 0;
          margin-bottom: 32px;
        }

        @media (max-width: 768px) {
          .tm-courses-title { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
          .tm-btn { width: 100%; }
        }
      `})]})}const OM=[];function EM(){const[e,t]=y.useState(""),[r,n]=y.useState("All"),[o,l]=y.useState("popular"),[u,f]=y.useState(4);let p=OM.filter(h=>(r==="All"||h.category===r)&&h.title.toLowerCase().includes(e.toLowerCase()));return o==="price-low"?p.sort((h,m)=>h.price-m.price):o==="price-high"?p.sort((h,m)=>m.price-h.price):o==="rating"?p.sort((h,m)=>m.rating-h.rating):o==="popular"&&p.sort((h,m)=>m.students-h.students),c.jsxs("div",{className:"explore-page",children:[c.jsxs("section",{className:"why-talentminds wrap",children:[c.jsx("h2",{children:"Why Choose HG’s TalentMinds?"}),c.jsxs("p",{className:"intro",children:["In a world full of online learning platforms, ",c.jsx("strong",{children:"TalentMinds stands apart"})," — blending technology, mentorship, and career growth into a complete learning journey. We don’t just teach skills — we help you transform your career."]}),c.jsxs("div",{className:"why-grid",children:[c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"🎓 Expert-Led Learning"}),c.jsx("p",{children:"Learn directly from top mentors who work at leading tech companies. Every course is designed and reviewed by industry professionals — so you’re always learning what truly matters."})]}),c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"🧩 Real-World Projects"}),c.jsx("p",{children:"Apply your knowledge on real, job-ready projects and case studies. Build a portfolio that proves your skills to employers."})]}),c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"🚀 Career Acceleration"}),c.jsxs("p",{children:["Get resume reviews, interview prep, and direct job referrals through our ",c.jsx("strong",{children:"Career Launch Program"}),"."]})]}),c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"🌍 Global Learner Network"}),c.jsx("p",{children:"Join 60,000+ learners and mentors across 50+ countries via our TalentMinds Community Hub."})]}),c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"💡 Personalized Learning Path"}),c.jsx("p",{children:"Adaptive learning plans based on your goals — beginner, upskilling professional, or career switcher."})]}),c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"🏆 Recognized Certification"}),c.jsx("p",{children:"Earn globally recognized certificates endorsed by hiring partners to showcase your expertise."})]})]})]}),c.jsx("style",{children:`
        /* ... all your existing styles ... */

        /* === Why TalentMinds New Styles === */
        .why-talentminds {
          background: linear-gradient(135deg, #ecfeff, #f0fdfa);
          padding: 80px 20px;
          border-radius: 40px;
          text-align: center;
          margin-top: 60px;
        }
        .why-talentminds h2 { color: #0f172a; font-size: 2rem; font-weight: 800; margin-bottom: 20px; }
        .why-talentminds .intro { color: #475569; max-width: 700px; margin: 0 auto 50px; font-size: 1.1rem; line-height: 1.8; }
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
        .why-card { background: white; padding: 24px; border-radius: 16px; box-shadow: 0 8px 20px rgba(0,0,0,0.05); transition: transform .25s ease, box-shadow .25s ease; text-align: left; }
        .why-card:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); }
        .why-card h3 { color: #0ea5a7; margin-bottom: 10px; font-size: 1.15rem; font-weight: 700; }
        .why-card p { color: #475569; line-height: 1.6; font-size: 0.97rem; }
      `})]})}function kM(){const[e,t]=y.useState(""),[r,n]=y.useState("All"),[o,l]=y.useState(6),u={section:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",backgroundColor:"#f8fafc",padding:"60px 20px",color:"#1e293b",marginTop:"30px"},heading:{textAlign:"center",fontSize:"2.4rem",fontWeight:"700",marginBottom:"20px",color:"#0f172a"},subheading:{textAlign:"center",fontSize:"1.1rem",maxWidth:"850px",margin:"0 auto 50px",color:"#475569",lineHeight:"1.6"},controls:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"15px",marginBottom:"40px"},searchInput:{padding:"12px 18px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"1rem",width:"280px",outline:"none"},categorySelect:{padding:"12px 18px",borderRadius:"8px",border:"1px solid #cbd5e1",fontSize:"1rem",outline:"none",background:"#fff",cursor:"pointer"},grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"25px",maxWidth:"1200px",margin:"0 auto"},card:{backgroundColor:"#fff",borderRadius:"12px",padding:"25px",boxShadow:"0 4px 10px rgba(0,0,0,0.08)",transition:"all 0.3s ease"},cardHover:{transform:"translateY(-5px)",boxShadow:"0 8px 16px rgba(0,0,0,0.15)"},cardTitle:{fontSize:"1.25rem",color:"#2563eb",fontWeight:"600",marginBottom:"10px"},cardText:{fontSize:"0.95rem",color:"#475569",lineHeight:"1.6"},divider:{width:"80px",height:"3px",backgroundColor:"#2563eb",margin:"12px auto 40px",borderRadius:"4px"},loadMoreBtn:{display:"block",margin:"40px auto 0",background:"#2563eb",color:"#fff",border:"none",borderRadius:"8px",padding:"12px 28px",fontWeight:"600",cursor:"pointer",transition:"background 0.3s ease"},footer:{marginTop:"60px",textAlign:"center",color:"#64748b",fontSize:"0.9rem",lineHeight:"1.6"}},f=[{title:"AI & Machine Learning Program",text:"Hands-on Generative AI and NLP using TensorFlow + OpenAI.",category:"AI & Machine Learning"},{title:"Data Analytics & Business Intelligence",text:"Power BI and Tableau projects turning data into business insights.",category:"Data & Analytics"},{title:"Cybersecurity Professional Training",text:"Ethical hacking, SOC analysis, and CompTIA Security+.",category:"Cybersecurity"},{title:"Cloud & DevOps Bootcamp",text:"AWS, Azure, Docker and CI/CD deployment pipelines.",category:"Cloud & DevOps"},{title:"Digital Marketing Certification",text:"SEO, SEM and Google Analytics for modern marketers.",category:"Business & Marketing"},{title:"Project & Product Management",text:"PMI®, Scrum and PRINCE2® certification prep.",category:"Management"},{title:"AI Engineer Career Playbook (Free Guide)",text:"Download career roadmaps and AI transition guides.",category:"Free Resources"},{title:"Free Micro Courses Library",text:"Access 500+ short courses for continuous upskilling.",category:"Free Courses"},{title:"Enterprise Learning Hub+",text:"Corporate AI-driven training with analytics dashboards.",category:"Enterprise Solutions"},{title:"Leadership Acceleration Program",text:"Upskill managers for digital strategy and innovation.",category:"Enterprise Solutions"},{title:"Career Transformation Webinar Series",text:"Weekly sessions from industry mentors and recruiters.",category:"Free Resources"},{title:"Advanced Data Engineering",text:"Big data pipelines with Spark, Kafka and Airflow.",category:"Data & Analytics"}],p=["All","AI & Machine Learning","Data & Analytics","Cybersecurity","Cloud & DevOps","Management","Business & Marketing","Enterprise Solutions","Free Courses","Free Resources"],h=f.filter(b=>{const w=r==="All"||b.category===r,A=b.title.toLowerCase().includes(e.toLowerCase())||b.text.toLowerCase().includes(e.toLowerCase());return w&&A}),m=h.slice(0,o),v=o<h.length;return c.jsxs("section",{style:u.section,children:[c.jsx("h1",{style:u.heading,children:"HG’s TalentMinds Resource Hub"}),c.jsx("p",{style:u.subheading,children:"Search, filter and explore our latest learning tracks, enterprise solutions, and free career resources designed to help you lead in the AI era."}),c.jsxs("div",{style:u.controls,children:[c.jsx("input",{type:"text",placeholder:"Search resources...",value:e,onChange:b=>t(b.target.value),style:u.searchInput}),c.jsx("select",{value:r,onChange:b=>n(b.target.value),style:u.categorySelect,children:p.map(b=>c.jsx("option",{children:b},b))})]}),c.jsx("div",{style:u.divider}),c.jsx("div",{style:u.grid,children:m.length>0?m.map((b,w)=>c.jsxs("div",{style:u.card,onMouseEnter:A=>Object.assign(A.currentTarget.style,u.cardHover),onMouseLeave:A=>Object.assign(A.currentTarget.style,{transform:"none",boxShadow:"0 4px 10px rgba(0,0,0,0.08)"}),children:[c.jsx("h3",{style:u.cardTitle,children:b.title}),c.jsx("p",{style:u.cardText,children:b.text}),c.jsxs("p",{style:{fontSize:"0.85rem",color:"#64748b",marginTop:"10px",fontStyle:"italic"},children:["Category: ",b.category]})]},w)):c.jsx("p",{style:{textAlign:"center",gridColumn:"1 / -1",color:"#64748b",fontSize:"1rem"},children:"No matching resources found."})}),v&&c.jsx("button",{style:u.loadMoreBtn,onClick:()=>l(b=>b+3),children:"Load More"}),c.jsxs("p",{style:u.footer,children:["© 2025 ",c.jsx("strong",{children:"HG’s TalentMinds"}),". All Rights Reserved.",c.jsx("br",{}),"Certification names such as PMP®, ITIL®, PRINCE2®, CISSP®, AWS®, and Scrum® are trademarks of their respective owners.",c.jsx("br",{}),"HG’s TalentMinds empowers global professionals and enterprises through AI-powered learning and digital transformation."]})]})}function NM(){const[e,t]=y.useState(!1),[r,n]=y.useState({name:"",email:"",company:"",interest:""}),o=u=>n({...r,[u.target.name]:u.target.value}),l=u=>{u.preventDefault(),alert(`✅  Thanks, ${r.name}! A member of the HG’s TalentMinds enterprise team will contact you at ${r.email} within 24 hours.`),t(!1)};return c.jsxs("section",{className:"business",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Transform Your Workforce with HG’s TalentMinds Corporate Solutions"}),c.jsxs("p",{className:"subtitle",children:["Build a future-ready organization through ",c.jsx("strong",{children:"AI-driven learning, adaptive analytics,"})," and ",c.jsx("strong",{children:"scalable enterprise enablement."}),"From upskilling engineers to empowering executives, TalentMinds delivers measurable impact across the talent lifecycle."]}),c.jsxs("div",{className:"grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🎯  Intelligence-Based Learning Paths"}),c.jsx("p",{children:"Role-mapped curricula powered by data. Whether you’re reskilling cloud engineers or training cybersecurity analysts, every learner follows a personalized AI-curated path aligned with business goals."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🧑‍🏫  Expert-Led Bootcamps + Mentorship"}),c.jsx("p",{children:"Blended programs delivered live by certified practitioners and industry leaders. Each participant receives 1-to-1 mentor feedback and access to a dedicated success coach."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🛠️  Applied Projects & Labs"}),c.jsx("p",{children:"Teams practice on simulated enterprise systems—AI models, CI/CD pipelines, SOC dashboards—turning theoretical knowledge into job-ready expertise."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🌍  Global Roll-Out at Speed"}),c.jsx("p",{children:"Deployed in 70 + countries with multi-language content, 24 × 7 cloud access, and compliance with corporate security and GDPR standards."})]}),c.jsxs("div",{className:"card highlight-card",children:[c.jsx("h3",{children:"📊  Enterprise Intelligence Dashboard"}),c.jsx("p",{children:"Real-time insight into learner engagement, certification progress, and ROI. Track skill gaps, benchmark departments, and link learning outcomes to performance metrics."})]})]}),c.jsx("button",{className:"cta-btn",onClick:()=>t(!0),children:"Book a Strategy Consultation →"}),c.jsxs("div",{className:"stats",children:[c.jsx("h2",{children:"🚀  Measurable Results, Proven at Scale"}),c.jsx("p",{className:"stats-subtitle",children:"Organizations partnering with TalentMinds achieve faster innovation, reduced attrition, and tangible revenue impact."}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsx("h3",{children:"210 K +"}),c.jsx("p",{children:"Employees upskilled worldwide"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("h3",{children:"40 %"}),c.jsx("p",{children:"Reduction in time-to-productivity"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("h3",{children:"3 : 1"}),c.jsx("p",{children:"Average CLTV : CAC ratio for enterprise clients"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("h3",{children:"88 %"}),c.jsx("p",{children:"Managers reporting measurable ROI"})]})]})]}),c.jsxs("div",{className:"testimonial-section",children:[c.jsx("h2",{children:"💬  What Our Enterprise Partners Say"}),c.jsxs("div",{className:"testimonial-grid",children:[c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:"“HG’s TalentMinds equipped our 5 000 + engineers with AI and data-engineering skills in under six months—productivity went up 33 %.”"}),c.jsx("span",{children:"— Rita Menon, CTO • TechNova Global"})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:"“Their analytics dashboard changed the way we measure learning ROI. We now correlate training outcomes directly with project delivery KPIs.”"}),c.jsx("span",{children:"— Luis Martinez, Director of L&D • Siemens Digital"})]}),c.jsxs("div",{className:"testimonial-card",children:[c.jsx("p",{children:"“TalentMinds became our strategic partner for continuous reskilling—excellent content, enterprise-grade support, and clear business results.”"}),c.jsx("span",{children:"— Akira Sato, VP People Ops • Fujitech Systems"})]})]})]}),c.jsxs("div",{className:"growth-section",children:[c.jsx("h2",{children:"📈  Sustainable Growth & Market Leadership"}),c.jsx("p",{className:"growth-subtitle",children:"Our business model is built on long-term enterprise relationships, recurring revenue, and product innovation that scales with AI adoption trends."}),c.jsxs("div",{className:"metric-grid",children:[c.jsxs("div",{className:"metric-card",children:[c.jsx("h4",{children:"💵  92 % Recurring ARR"}),c.jsx("p",{children:"Multi-year contracts across tech, BFSI, and manufacturing sectors create stable, predictable revenue streams."})]}),c.jsxs("div",{className:"metric-card",children:[c.jsx("h4",{children:"🤖  AI-First Product Roadmap"}),c.jsx("p",{children:"Continuous integration of generative AI for adaptive learning, assessment automation, and skill forecasting."})]}),c.jsxs("div",{className:"metric-card",children:[c.jsx("h4",{children:"🌱  ESG & Diversity Commitment"}),c.jsx("p",{children:"48 % of learners enrolled through our social-impact initiatives belong to under-represented communities in tech."})]})]})]})]}),e&&c.jsx("div",{className:"modal-overlay",children:c.jsxs("div",{className:"modal",children:[c.jsx("h2",{children:"Book a Demo / Consultation"}),c.jsx("p",{children:"Tell us a little about your organization and we’ll craft a personalized upskilling proposal."}),c.jsxs("form",{onSubmit:l,children:[c.jsx("input",{name:"name",placeholder:"Your Name",value:r.name,onChange:o,required:!0}),c.jsx("input",{name:"email",type:"email",placeholder:"Work Email",value:r.email,onChange:o,required:!0}),c.jsx("input",{name:"company",placeholder:"Company Name",value:r.company,onChange:o,required:!0}),c.jsxs("select",{name:"interest",value:r.interest,onChange:o,required:!0,children:[c.jsx("option",{value:"",children:"Select Interest Area"}),c.jsx("option",{children:"AI & Data Transformation"}),c.jsx("option",{children:"Cloud & DevOps Modernization"}),c.jsx("option",{children:"Cybersecurity Enablement"}),c.jsx("option",{children:"Leadership & Agile Culture"})]}),c.jsx("button",{className:"submit-btn",type:"submit",children:"Submit Request →"})]}),c.jsx("button",{className:"close-btn",onClick:()=>t(!1),children:"✕"})]})}),c.jsx("style",{children:`
        .business {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg,#e0f2fe,#bfdbfe);
          padding: 100px 20px;
          text-align: center;
          marginTop:"30px";

        }
        .container{max-width:1200px;margin:0 auto;}
        h1{color:#0b4da3;font-size:2.6rem;font-weight:800;margin-bottom:20px;}
        .subtitle{color:#475569;max-width:850px;margin:0 auto 60px;font-size:1.15rem;line-height:1.8;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:25px;margin-bottom:60px;}
        .card{background:#fff;padding:25px 20px;border-radius:16px;border:1px solid #dbeafe;
              box-shadow:0 6px 20px rgba(11,77,163,0.08);text-align:left;transition:.3s;}
        .card:hover{transform:translateY(-6px);box-shadow:0 10px 28px rgba(37,99,235,0.2);}
        .highlight-card{border:2px solid #2563eb;background:#eff6ff;}
        .cta-btn{background:#2563eb;color:#fff;border:none;padding:16px 40px;border-radius:10px;font-weight:700;
                 font-size:1.1rem;cursor:pointer;box-shadow:0 6px 18px rgba(37,99,235,0.4);transition:.3s;}
        .cta-btn:hover{background:#1d4ed8;}
        .stats{margin-top:100px;background:#fff;border-radius:20px;padding:70px 25px;box-shadow:0 8px 30px rgba(0,0,0,.05);}
        .stats h2{color:#0b4da3;font-size:2rem;margin-bottom:15px;}
        .stats-subtitle{color:#475569;max-width:700px;margin:0 auto 40px;}
        .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;}
        .stat-card{background:#eff6ff;border-radius:12px;padding:25px;}
        .stat-card h3{color:#2563eb;font-size:2rem;margin-bottom:6px;}
        .testimonial-section{margin-top:100px;}
        .testimonial-section h2{color:#0b4da3;font-size:2rem;margin-bottom:30px;}
        .testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:25px;}
        .testimonial-card{background:#fff;border-radius:16px;padding:25px 20px;
                          box-shadow:0 6px 20px rgba(37,99,235,.1);font-style:italic;}
        .testimonial-card span{display:block;color:#2563eb;font-weight:600;margin-top:10px;}
        .growth-section{padding:80px 20px 60px;margin-top:80px;background:#fff;border-radius:20px;
                        box-shadow:0 10px 30px rgba(0,0,0,.05);}
        .growth-section h2{color:#0b4da3;font-size:2.2rem;font-weight:800;margin-bottom:10px;}
        .growth-subtitle{color:#475569;max-width:700px;margin:0 auto 40px;}
        .metric-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}
        .metric-card{background:#f1f5f9;padding:20px;border-radius:12px;text-align:left;border-left:5px solid #2563eb;}
        .metric-card h4{color:#1d4ed8;font-weight:700;margin-bottom:6px;}
        /* Modal */
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;justify-content:center;
                       align-items:center;z-index:1000;}
        .modal{background:#fff;padding:30px;border-radius:12px;width:95%;max-width:450px;position:relative;text-align:left;}
        .modal h2{color:#0b4da3;margin-bottom:8px;}
        .modal p{color:#475569;margin-bottom:15px;}
        .modal input,.modal select{width:100%;margin-bottom:12px;padding:12px;border:1px solid #cbd5e1;
                                   border-radius:8px;font-size:1rem;}
        .submit-btn{background:#2563eb;color:#fff;border:none;padding:12px 24px;border-radius:8px;
                    cursor:pointer;font-weight:600;}
        .submit-btn:hover{background:#1d4ed8;}
        .close-btn{position:absolute;top:12px;right:16px;background:none;border:none;font-size:1.3rem;
                   cursor:pointer;color:#475569;}
        @media(max-width:768px){h1{font-size:2rem;}.cta-btn{padding:14px 28px;font-size:1rem;}
          .grid,.stats-grid,.testimonial-grid,.metric-grid{grid-template-columns:1fr;}
          .stats,.growth-section{padding:50px 15px;}}
      `})]})}function CM(){const e=[{name:"Aarav Gupta",role:"Software Engineer at Infosys",review:"TalentMinds helped me transition from a non-tech background into a software engineering career. The mentors were truly world-class!"},{name:"Priya Sharma",role:"Data Analyst at Amazon",review:"The Data Science program gave me real-world exposure through projects and case studies. I could apply what I learned at work instantly."},{name:"Rohit Menon",role:"DevOps Engineer at Capgemini",review:"Their DevOps course and placement support helped me land a job within 3 months of completion. Thank you TalentMinds!"}];return c.jsxs("section",{className:"reviews",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Learner Success Stories"}),c.jsx("p",{className:"subtitle",children:"Hear from professionals who transformed their careers through our mentor-led learning experience."}),c.jsx("div",{className:"grid",children:e.map((t,r)=>c.jsxs("div",{className:"card",children:[c.jsxs("p",{className:"quote",children:["“",t.review,"”"]}),c.jsx("h3",{children:t.name}),c.jsx("span",{children:t.role})]},r))})]}),c.jsx("style",{children:`
        .reviews {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #0b4da3;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #475569;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(11,77,163,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.15);
        }
        .quote {
          color: #334155;
          font-size: 1rem;
          font-style: italic;
          margin-bottom: 16px;
          line-height: 1.6;
        }
        h3 {
          color: #0b4da3;
          margin-bottom: 4px;
        }
        span {
          color: #64748b;
          font-size: 0.9rem;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
        }
      `})]})}function TM(){return c.jsxs("section",{className:"hire",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Hire Industry-Ready Talent"}),c.jsx("p",{className:"subtitle",children:"Access pre-vetted professionals trained in the latest technologies through TalentMinds programs."}),c.jsxs("div",{className:"grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"✅ Verified Skills"}),c.jsx("p",{children:"All our graduates undergo project-based assessments ensuring real-world competency in modern tools."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"💼 Job-Ready Candidates"}),c.jsx("p",{children:"Hire candidates trained in full-stack development, data science, cloud, DevOps, and cybersecurity."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"⚙️ Simplified Hiring Process"}),c.jsx("p",{children:"Get curated candidate lists, schedule interviews, and onboard effortlessly through our portal."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🌍 Global Talent Pool"}),c.jsx("p",{children:"Partner with TalentMinds to access skilled professionals from across regions and time zones."})]})]}),c.jsx("button",{className:"cta-btn",children:"Post a Job →"})]}),c.jsx("style",{children:`
        .hire {
          min-height: 100vh;
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #065f46;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #374151;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(6,95,70,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(6,95,70,0.15);
        }
        h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #059669;
        }
      `})]})}function MM(){return c.jsxs("section",{className:"partner",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Partner with TalentMinds"}),c.jsx("p",{className:"subtitle",children:"Collaborate with us to deliver next-generation learning experiences, research projects, and corporate training."}),c.jsxs("div",{className:"grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🏫 Academic Partnerships"}),c.jsx("p",{children:"Integrate our programs with your university curriculum to make students job-ready from day one."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🤝 Corporate Alliances"}),c.jsx("p",{children:"Co-create specialized upskilling pathways tailored to your company’s evolving skill demands."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"💡 Innovation Collaborations"}),c.jsx("p",{children:"Work with us on joint projects, research, and community events focused on future technologies."})]})]}),c.jsx("button",{className:"cta-btn",children:"Become a Partner →"})]}),c.jsx("style",{children:`
        .partner {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #5b21b6;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #4b5563;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(91,33,182,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(91,33,182,0.15);
        }
        h3 {
          color: #6d28d9;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #6d28d9;
        }
      `})]})}function _M(){return c.jsxs("section",{className:"scholar",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Scholarships & Financial Aid"}),c.jsx("p",{className:"subtitle",children:"TalentMinds believes in accessible learning for all. Explore our merit-based scholarships and financial assistance options."}),c.jsxs("div",{className:"grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🏅 Merit-Based Scholarships"}),c.jsx("p",{children:"Earn up to 50% fee waiver based on your academic performance or professional achievements."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🌍 Women in Tech Initiative"}),c.jsx("p",{children:"Encouraging women professionals to build careers in technology through specialized learning support."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"💸 Financial Assistance"}),c.jsx("p",{children:"Easy payment plans and no-cost EMI options available for all major programs."})]})]}),c.jsx("button",{className:"cta-btn",children:"Apply Now →"})]}),c.jsx("style",{children:`
        .scholar {
          min-height: 100vh;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 80px 20px;
        }
        h1 {
          color: #92400e;
          font-size: 2.6rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #78350f;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          padding: 28px 20px;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(146,64,14,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(146,64,14,0.15);
        }
        h3 {
          color: #b45309;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #d97706;
        }
      `})]})}function PM(){const[e,t]=y.useState(null),r=[{q:"What is TalentMinds?",a:"TalentMinds is an online learning platform offering mentor-led programs in technology, business, and professional development. We bridge the gap between education and employability."},{q:"Are the courses self-paced or live?",a:"TalentMinds offers both — self-paced modules for flexibility and live mentor-led sessions for interactive, guided learning experiences."},{q:"Will I receive a certificate after completion?",a:"Yes. Learners who complete the required coursework and assessments earn an industry-recognized TalentMinds Certificate."},{q:"Do you provide job assistance?",a:"Yes! Our Career Accelerator Program offers résumé workshops, interview training, and placement opportunities with hiring partners."},{q:"Can businesses integrate TalentMinds with internal systems?",a:"Absolutely. Our LMS supports API-based integrations with HR, analytics, and enterprise training systems."}],n=o=>{t(e===o?null:o)};return c.jsxs("section",{className:"faq-page",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"Frequently Asked Questions"}),c.jsx("p",{className:"subtitle",children:"Find answers to the most common questions about TalentMinds learning programs, support, and partnerships."}),c.jsx("div",{className:"faq-list",children:r.map((o,l)=>c.jsxs("div",{className:`faq-item ${e===l?"open":""}`,onClick:()=>n(l),children:[c.jsxs("div",{className:"faq-question",children:[c.jsx("h3",{children:o.q}),c.jsx("span",{children:e===l?"−":"+"})]}),c.jsx("div",{className:"faq-answer",children:c.jsx("p",{children:o.a})})]},l))})]}),c.jsx("style",{children:`
        .faq-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.6rem;
          color: #0b4da3;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #475569;
          max-width: 750px;
          margin: 0 auto 50px;
        }
        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          text-align: left;
        }
        .faq-item {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(11,77,163,0.08);
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          font-weight: 700;
          color: #0b4da3;
          background: #f8fafc;
          transition: background 0.3s ease;
        }
        .faq-item:hover .faq-question {
          background: #eff6ff;
        }
        .faq-question span {
          font-size: 1.5rem;
          color: #2563eb;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 20px;
          transition: all 0.4s ease;
          background: white;
        }
        .faq-item.open .faq-answer {
          max-height: 300px;
          padding: 16px 20px 20px;
        }
        .faq-answer p {
          color: #334155;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .faq-question h3 { font-size: 1rem; }
        }
      `})]})}function DM(){const[e,t]=y.useState({name:"",email:"",message:""}),r=o=>{t({...e,[o.target.name]:o.target.value})},n=o=>{o.preventDefault(),alert("Support request submitted! Our team will contact you soon."),t({name:"",email:"",message:""})};return c.jsxs("section",{className:"support-page",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"We’re Here to Help"}),c.jsx("p",{className:"subtitle",children:"Need assistance? Our support team is available 24/7 to resolve your queries and technical issues."}),c.jsxs("div",{className:"grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"📞 Contact Us"}),c.jsxs("p",{children:["Email: ",c.jsx("strong",{children:"support@talentminds.io"})]}),c.jsxs("p",{children:["Phone: ",c.jsx("strong",{children:"+91 98765 43210"})]}),c.jsx("p",{children:"Working Hours: Mon–Sat, 9 AM to 7 PM (IST)"})]}),c.jsxs("div",{className:"card form-card",children:[c.jsx("h3",{children:"🧾 Raise a Support Ticket"}),c.jsxs("form",{onSubmit:n,children:[c.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:r,required:!0}),c.jsx("input",{type:"email",name:"email",placeholder:"Your Email",value:e.email,onChange:r,required:!0}),c.jsx("textarea",{name:"message",placeholder:"Describe your issue...",value:e.message,onChange:r,required:!0}),c.jsx("button",{type:"submit",children:"Submit Ticket"})]})]})]}),c.jsxs("div",{className:"quick-links",children:[c.jsx("h3",{children:"🔗 Quick Help"}),c.jsxs("ul",{children:[c.jsxs("li",{children:["📚 ",c.jsx("a",{href:"/faq",children:"Read the FAQ"})]}),c.jsxs("li",{children:["🎓 ",c.jsx("a",{href:"/courses",children:"Explore Courses"})]}),c.jsxs("li",{children:["💬 ",c.jsx("a",{href:"/contact",children:"Contact Support"})]})]})]})]}),c.jsx("style",{children:`
        .support-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.6rem;
          color: #065f46;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          color: #374151;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(6,95,70,0.08);
          padding: 30px 20px;
          text-align: left;
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(6,95,70,0.15);
        }
        h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }
        input, textarea {
          padding: 10px 12px;
          border: 1px solid #a7f3d0;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          transition: border 0.2s ease;
        }
        input:focus, textarea:focus {
          border-color: #10b981;
        }
        textarea {
          resize: none;
          min-height: 100px;
        }
        button {
          background: #10b981;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #059669;
        }
        .quick-links {
          background: #f0fdf4;
          border-radius: 12px;
          padding: 20px;
          max-width: 700px;
          margin: 0 auto;
        }
        .quick-links h3 {
          color: #047857;
          margin-bottom: 10px;
        }
        .quick-links ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .quick-links a {
          color: #065f46;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .quick-links a:hover {
          color: #10b981;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
        }
      `})]})}function zM(){return c.jsx("section",{className:"mentor-hero",children:c.jsxs("div",{className:"mentor-hero-content",children:[c.jsx("h1",{children:"Share Your Knowledge. Inspire Learners. Become a Mentor."}),c.jsx("p",{children:"Join our growing mentor community and help shape the future of learners worldwide."}),c.jsx("a",{href:"#mentor-form",className:"mentor-cta-btn",children:"Apply Now"})]})})}const RM=[{title:"Make an Impact",desc:"Guide learners and help them achieve their career goals."},{title:"Grow Your Network",desc:"Connect with professionals, educators, and industry leaders."},{title:"Flexible Engagement",desc:"Choose how and when you contribute as a mentor."}];function LM(){return c.jsxs("section",{className:"mentor-benefits",children:[c.jsx("h2",{children:"Why Become a Mentor?"}),c.jsx("div",{className:"mentor-benefits-grid",children:RM.map((e,t)=>c.jsxs("div",{className:"mentor-benefit-card",children:[c.jsx("h3",{children:e.title}),c.jsx("p",{children:e.desc})]},t))})]})}const BM=[{step:"1",title:"Apply Online",desc:"Fill out a quick application form."},{step:"2",title:"Get Reviewed",desc:"Our team will review your application."},{step:"3",title:"Start Mentoring",desc:"Once approved, begin mentoring learners!"}];function IM(){return c.jsxs("section",{className:"mentor-process",children:[c.jsx("h2",{children:"How It Works"}),c.jsx("div",{className:"mentor-process-steps",children:BM.map((e,t)=>c.jsxs("div",{className:"mentor-step",children:[c.jsx("span",{className:"mentor-step-number",children:e.step}),c.jsx("h3",{children:e.title}),c.jsx("p",{children:e.desc})]},t))})]})}function qM(){const[e,t]=y.useState({firstName:"",lastName:"",email:"",password:"",phone:"",expertiseIn:"",qualification:"",experience:""}),[r,n]=y.useState(!1),o=u=>{t({...e,[u.target.name]:u.target.value})},l=u=>{u.preventDefault(),n(!0),console.log("Mentor Application:",e),t({firstName:"",lastName:"",email:"",password:"",phone:"",expertiseIn:"",qualification:"",experience:""})};return c.jsxs("section",{className:"mentor-form-section",id:"mentor-form",children:[c.jsxs("div",{className:"mentor-form-card",children:[c.jsx("h2",{children:"Become a Mentor at HG's TalentMinds LMS"}),c.jsx("p",{className:"mentor-form-subtitle",children:"Share your expertise and guide learners worldwide 🚀"}),r?c.jsxs("div",{className:"mentor-success-msg",children:[c.jsx("h2",{children:"✅ Thank you for applying!"}),c.jsxs("p",{children:["Your application has been received. ",c.jsx("br",{}),"Our team will review and contact you soon. ",c.jsx("br",{}),"Meanwhile, explore our mentor resources and community!"]})]}):c.jsxs("form",{className:"mentor-form",onSubmit:l,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"firstName",value:e.firstName,onChange:o,placeholder:" ",required:!0}),c.jsx("label",{children:"First Name *"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"lastName",value:e.lastName,onChange:o,placeholder:" "}),c.jsx("label",{children:"Last Name"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"email",name:"email",value:e.email,onChange:o,placeholder:" ",required:!0}),c.jsx("label",{children:"Email *"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"password",name:"password",value:e.password,onChange:o,placeholder:" ",required:!0,minLength:6}),c.jsx("label",{children:"Password *"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"phone",value:e.phone,onChange:o,placeholder:" ",pattern:"^[0-9]{10,15}$"}),c.jsx("label",{children:"Phone"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"expertiseIn",value:e.expertiseIn,onChange:o,placeholder:" ",required:!0}),c.jsx("label",{children:"Area of Expertise *"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"qualification",value:e.qualification,onChange:o,placeholder:" "}),c.jsx("label",{children:"Qualification"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"experience",value:e.experience,onChange:o,placeholder:" "}),c.jsx("label",{children:"Experience (years)"})]}),c.jsx("button",{type:"submit",className:"mentor-cta-btn",children:"Submit Application"})]})]}),c.jsx("style",{children:`
        .mentor-form-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f9fafb;
          padding: 40px 20px;
        }
        .mentor-form-card {
          background: #fff;
          padding: 40px 32px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 520px;
          text-align: center;
        }
        .mentor-form-card h2 {
          font-size: 1.8rem;
          margin-bottom: 8px;
          color: #111827;
        }
        .mentor-form-subtitle {
          color: #6b7280;
          margin-bottom: 28px;
          font-size: 0.95rem;
        }
        .mentor-form {
          text-align: left;
        }
        .form-group {
          position: relative;
          margin-bottom: 20px;
        }
        .form-group input {
          width: 100%;
          padding: 14px 12px;
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          outline: none;
          background: #f9fafb;
          transition: all 0.2s;
          font-size: 1rem;
        }
        .form-group input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
        }
        .form-group label {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
          font-size: 0.95rem;
          color: #9ca3af;
          transition: 0.2s;
          background: #fff;
          padding: 0 4px;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.75rem;
          color: #2563eb;
        }
        .mentor-cta-btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .mentor-cta-btn:hover {
          background: #1e40af;
        }
        .mentor-success-msg {
          background: #f8fafc;
          border-radius: 14px;
          box-shadow: 0 2px 12px rgba(37,99,235,0.08);
          padding: 32px 24px;
          margin-top: 32px;
          text-align: center;
          color: #2563eb;
        }
        .mentor-success-msg h2 {
          margin-bottom: 12px;
          font-size: 1.5rem;
          font-weight: 800;
        }
        .mentor-success-msg p {
          color: #374151;
          font-size: 1.08rem;
        }
      `})]})}function $M(){return c.jsxs("div",{children:[c.jsx(zM,{}),c.jsx(LM,{}),c.jsx(IM,{}),c.jsx(qM,{})]})}function UM(){const e=["https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg","https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg","https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg","https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_logo.svg","https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg"],t=[{name:"Ritika Sharma",role:"Data Analyst, Amazon",story:"After completing the Data Science program, Ritika transitioned from a teaching role to a data analytics position at Amazon with a 120% salary increase."},{name:"Mohammed Arif",role:"AI Engineer, Microsoft",story:"Arif upskilled through the AI & ML Essentials course, securing an AI Engineer position at Microsoft within 5 months of graduation."},{name:"Priya Menon",role:"UX Designer, IBM",story:"Priya completed the UI/UX specialization and now leads design initiatives at IBM’s innovation hub in Bengaluru."}];return c.jsxs("section",{className:"placement-page",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"TalentMinds Placement & Career Success Report"}),c.jsx("p",{className:"subtitle",children:"Discover the measurable impact of HG’s TalentMinds learning programs — where real skills meet real outcomes."}),c.jsxs("div",{className:"metrics",children:[c.jsxs("div",{className:"metric",children:[c.jsx("h3",{children:"₹9.6 LPA"}),c.jsx("p",{children:"Average CTC for placed learners"})]}),c.jsxs("div",{className:"metric",children:[c.jsx("h3",{children:"92%"}),c.jsx("p",{children:"Placement rate within 6 months"})]}),c.jsxs("div",{className:"metric",children:[c.jsx("h3",{children:"200+"}),c.jsx("p",{children:"Active hiring partners"})]}),c.jsxs("div",{className:"metric",children:[c.jsx("h3",{children:"1.2M+"}),c.jsx("p",{children:"Careers accelerated globally"})]})]}),c.jsx("h2",{children:"Alumni Success Stories"}),c.jsx("div",{className:"alumni-grid",children:t.map((r,n)=>c.jsxs("div",{className:"alumni-card",children:[c.jsx("h4",{children:r.name}),c.jsx("p",{className:"role",children:r.role}),c.jsxs("p",{className:"story",children:["“",r.story,"”"]})]},n))}),c.jsx("h2",{children:"Our Top Hiring Partners"}),c.jsx("div",{className:"logos",children:e.map((r,n)=>c.jsx("img",{src:r,alt:"Partner logo"},n))}),c.jsx("button",{className:"download-btn",onClick:()=>alert("📄 Downloading the official 2025 Placement Report..."),children:"Download Full Placement Report (PDF) →"})]}),c.jsx("style",{children:`
        .placement-page {
          background: #f8fafc;
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        .container { max-width: 1150px; margin: 0 auto; }
        h1 { color: #0b4da3; font-size: 2.6rem; font-weight: 800; margin-bottom: 10px; }
        .subtitle { color: #475569; font-size: 1.1rem; margin-bottom: 50px; }

        .metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 70px;
        }
        .metric {
          background: #fff;
          border-radius: 14px;
          padding: 30px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        .metric h3 { color: #2563eb; font-size: 2rem; font-weight: 800; }
        .metric p { color: #475569; margin-top: 4px; }

        .alumni-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin: 40px 0 60px;
        }
        .alumni-card {
          background: #fff;
          border-radius: 14px;
          padding: 25px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
          text-align: left;
        }
        .alumni-card h4 { color: #0b4da3; margin-bottom: 4px; }
        .role { color: #2563eb; font-weight: 600; margin-bottom: 8px; }
        .story { color: #475569; font-style: italic; }

        .logos {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          margin: 30px 0 60px;
        }
        .logos img {
          width: 120px;
          height: auto;
          filter: grayscale(1);
          opacity: 0.9;
          transition: all 0.3s ease;
        }
        .logos img:hover { filter: grayscale(0); opacity: 1; }

        .download-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 16px 38px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 18px rgba(37,99,235,0.4);
        }
        .download-btn:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
        }

        @media (max-width: 700px) {
          h1 { font-size: 2rem; }
          .metric h3 { font-size: 1.6rem; }
        }
      `})]})}function HM(){const e=st(),t=[{id:"fullstack",title:"Full Stack Development",description:"Master front-end and back-end technologies. Learn React, Node.js, Express, and MongoDB by building real-world applications from scratch.",image:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901782.jpg"},{id:"datascience",title:"Data Science & AI",description:"Explore data analytics, machine learning, and AI models. Learn Python, Pandas, TensorFlow, and gain expertise in predictive modeling.",image:"https://img.freepik.com/free-photo/artificial-intelligence-digital-transformation-concept_53876-124677.jpg"},{id:"cybersecurity",title:"Cybersecurity & Ethical Hacking",description:"Understand the world of security and ethical hacking. Learn to identify threats, protect systems, and perform penetration testing safely.",image:"https://img.freepik.com/free-photo/cyber-security-concept-digital-padlock-with-binary-data_53876-104097.jpg"},{id:"cloud-devops",title:"Cloud Computing & DevOps",description:"Get hands-on experience with AWS, Azure, Docker, Kubernetes, and CI/CD pipelines. Build scalable and automated solutions for enterprises.",image:"https://img.freepik.com/free-photo/devops-engineer-working-computer-multiple-screens_482257-21656.jpg"}];return c.jsxs("section",{className:"explore-page",children:[c.jsxs("div",{className:"explore-container",children:[c.jsx("h1",{children:"Explore Our Learning Programs"}),c.jsxs("p",{className:"intro",children:["At ",c.jsx("strong",{children:"HG’s TalentMinds"}),", we bridge the gap between learning and industry. Each program combines expert mentorship, hands-on projects, and globally recognized certifications to help you become career-ready."]}),c.jsx("div",{className:"program-grid",children:t.map(r=>c.jsxs("div",{className:"program-card",children:[c.jsx("img",{src:r.image,alt:r.title}),c.jsxs("div",{className:"program-content",children:[c.jsx("h3",{children:r.title}),c.jsx("p",{children:r.description}),c.jsx("button",{onClick:()=>e(`/programs/${r.id}`),className:"join-btn",children:"Join Program →"})]})]},r.id))}),c.jsxs("div",{className:"highlights",children:[c.jsxs("div",{className:"highlight",children:[c.jsx("h4",{children:"🎓 Industry-Recognized Certificates"}),c.jsx("p",{children:"Gain credentials trusted by top companies — boost your résumé and stand out in interviews."})]}),c.jsxs("div",{className:"highlight",children:[c.jsx("h4",{children:"🧑‍🏫 Expert Mentorship"}),c.jsx("p",{children:"Learn from experienced mentors and industry professionals who guide your journey personally."})]}),c.jsxs("div",{className:"highlight",children:[c.jsx("h4",{children:"⚙️ Real-World Projects"}),c.jsx("p",{children:"Apply what you learn through hands-on labs, assignments, and hackathons designed by experts."})]}),c.jsxs("div",{className:"highlight",children:[c.jsx("h4",{children:"🌍 Community & Networking"}),c.jsx("p",{children:"Join a global network of learners, developers, and professionals. Grow, collaborate, and share ideas."})]})]}),c.jsxs("div",{className:"cta-section",children:[c.jsx("h2",{children:"Start Your Learning Journey Today 🚀"}),c.jsx("p",{children:"Pick a program, build skills that matter, and become part of the HG’s TalentMinds tech community."}),c.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]})]}),c.jsx("style",{children:`
        .explore-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          font-family: 'Inter', sans-serif;
          padding: 60px 20px;
          display: flex;
          justify-content: center;
        }

        .explore-container {
          width: 100%;
          max-width: 1200px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px 40px;
          text-align: center;
        }

        h1 {
          font-size: 2.8rem;
          color: #1f2937;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .intro {
          font-size: 1.15rem;
          color: #4b5563;
          max-width: 800px;
          margin: 0 auto 50px;
          line-height: 1.8;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .program-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          overflow: hidden;
          text-align: left;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .program-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .program-content {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .program-card h3 {
          color: #f59e0b;
          font-size: 1.3rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .program-card p {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .join-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.25s ease, transform 0.2s ease;
        }

        .join-btn:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .highlight {
          background: #fffbea;
          border: 1px solid #fde68a;
          border-radius: 14px;
          padding: 20px;
          text-align: left;
        }

        .highlight h4 {
          color: #b45309;
          font-size: 1.15rem;
          margin-bottom: 10px;
        }

        .highlight p {
          color: #444;
          line-height: 1.6;
        }

        .cta-section {
          background: #fff7ed;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .cta-section h2 {
          color: #1f2937;
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .cta-section p {
          color: #4b5563;
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .back-btn {
          background: #f59e0b;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
        }

        .back-btn:hover {
          background: #d97706;
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
          .cta-section h2 {
            font-size: 1.5rem;
          }
        }
      `})]})}function YM(){const e=st();return c.jsxs("section",{className:"page",children:[c.jsx("h1",{children:"Join the Global TalentMinds Community"}),c.jsx("p",{children:"Connect, learn, and grow with professionals and mentors around the world."}),c.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"}),c.jsx("style",{children:`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          font-family: 'Inter', sans-serif;
          text-align: center;
          padding: 40px;
        }
        h1 {
          font-size: 2.8rem;
          color: #1e3a8a;
          margin-bottom: 20px;
        }
        p {
          max-width: 600px;
          font-size: 1.2rem;
          color: #374151;
        }
        .back-btn {
          margin-top: 40px;
          background: #2563eb;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .back-btn:hover {
          background: #1d4ed8;
        }
      `})]})}function GM(){const e=st();return c.jsxs("section",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"About TalentMinds"}),c.jsx("p",{className:"subtitle",children:"We are a global learning platform dedicated to bridging the gap between academic education and real-world employability."}),c.jsxs("div",{className:"grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🌱 Our Mission"}),c.jsx("p",{children:"To empower individuals and organizations with cutting-edge skills that drive growth, innovation, and success in the digital age."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"👩‍🏫 Learning That Works"}),c.jsx("p",{children:"Our programs blend mentor guidance, hands-on projects, and live learning to ensure every learner becomes job-ready."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🌍 Our Impact"}),c.jsx("p",{children:"Over 8 million learners and 1,500+ companies trust TalentMinds to deliver measurable career and business outcomes."})]})]}),c.jsxs("div",{className:"cta",children:[c.jsx("h2",{children:"Discover the future of learning with TalentMinds 🚀"}),c.jsx("button",{onClick:()=>e("/explore-programs"),className:"cta-btn",children:"Explore Programs →"}),c.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]})]}),c.jsx("style",{children:`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #dcfce7, #bbf7d0);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          color: #166534;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          font-size: 1.15rem;
          color: #14532d;
          max-width: 750px;
          margin: 0 auto 50px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(22,101,52,0.1);
          transition: all 0.3s ease;
          text-align: left;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(22,101,52,0.15);
        }
        .card h3 {
          color: #15803d;
          margin-bottom: 10px;
        }
        .card p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .cta h2 {
          color: #14532d;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }
        .cta-btn {
          background: #16a34a;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 10px;
          transition: background 0.3s ease;
        }
        .cta-btn:hover {
          background: #15803d;
        }
        .back-btn {
          background: transparent;
          color: #14532d;
          border: 2px solid #16a34a;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          background: #dcfce7;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .cta h2 { font-size: 1.3rem; }
        }
      `})]})}function KM(){const e=st(),t=[{title:"Full Stack Development Bootcamp",desc:"Become a complete web developer. Learn HTML, CSS, React, Node.js, Express & MongoDB through hands-on projects.",duration:"6 Months",level:"Beginner to Advanced",learners:"12,000+ learners"},{title:"Data Science & Machine Learning Program",desc:"Master Python, Pandas, Machine Learning, Deep Learning, and AI — with practical real-world datasets.",duration:"8 Months",level:"Intermediate",learners:"9,500+ learners"},{title:"Cybersecurity & Ethical Hacking Certification",desc:"Understand network security, penetration testing, risk management, and tools like Wireshark & Metasploit.",duration:"5 Months",level:"Beginner to Pro",learners:"7,800+ learners"},{title:"Cloud Computing & DevOps Mastery",desc:"Work with AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines to automate enterprise deployments.",duration:"7 Months",level:"Intermediate to Advanced",learners:"6,200+ learners"}];return c.jsxs("section",{className:"browse-page",children:[c.jsxs("div",{className:"browse-container",children:[c.jsx("h1",{children:"Browse Our Courses"}),c.jsx("p",{className:"browse-subtitle",children:"Choose from our top-rated career programs designed by industry experts and delivered through live, mentor-led learning."}),c.jsx("div",{className:"course-grid",children:t.map((r,n)=>c.jsxs("div",{className:"course-card",children:[c.jsx("h3",{children:r.title}),c.jsx("p",{children:r.desc}),c.jsxs("div",{className:"meta",children:[c.jsxs("span",{children:["⏳ ",r.duration]}),c.jsxs("span",{children:["📈 ",r.level]}),c.jsxs("span",{children:["👩‍🎓 ",r.learners]})]}),c.jsx("button",{className:"enroll-btn",onClick:()=>e("/login"),children:"Enroll Now →"})]},n))}),c.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]}),c.jsx("style",{children:`
        .browse-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #eef2ff, #e0e7ff);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .browse-container {
          max-width: 1150px;
          width: 100%;
        }
        h1 {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0b4da3;
          margin-bottom: 16px;
        }
        .browse-subtitle {
          font-size: 1.1rem;
          color: #475569;
          max-width: 700px;
          margin: 0 auto 50px;
        }
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }
        .course-card {
          background: #fff;
          padding: 25px 20px;
          border-radius: 14px;
          box-shadow: 0 6px 20px rgba(11,77,163,0.08);
          text-align: left;
          transition: all 0.3s ease;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(37,99,235,0.15);
        }
        .course-card h3 {
          color: #0b4da3;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .course-card p {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }
        .enroll-btn {
          background: #2563eb;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .enroll-btn:hover {
          background: #1d4ed8;
        }
        .back-btn {
          margin-top: 50px;
          background: #0b4da3;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .back-btn:hover {
          background: #09377a;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .course-card { padding: 20px; }
        }
      `})]})}function WM(){const e=st();return c.jsxs("section",{className:"page",children:[c.jsxs("div",{className:"container",children:[c.jsx("h1",{children:"TalentMinds for Business"}),c.jsx("p",{className:"subtitle",children:"Empower your workforce with customized learning paths, expert-led sessions, and performance-driven upskilling programs."}),c.jsxs("div",{className:"grid",children:[c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🏢 Tailored Learning Paths"}),c.jsx("p",{children:"Create personalized training programs aligned with your organization’s goals, from onboarding to leadership development."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"📊 Measurable Outcomes"}),c.jsx("p",{children:"Track learning progress, certifications, and ROI with real-time analytics dashboards designed for enterprise insights."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🧑‍🏫 Industry-Expert Trainers"}),c.jsx("p",{children:"Deliver training from mentors with proven expertise across cloud, full stack, data science, and emerging technologies."})]}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"🌍 Scalable Global Platform"}),c.jsx("p",{children:"Our LMS supports distributed teams with multilingual content, custom branding, and cloud scalability."})]})]}),c.jsxs("div",{className:"cta",children:[c.jsx("h2",{children:"Accelerate your workforce transformation with TalentMinds 🚀"}),c.jsx("button",{onClick:()=>e("/contact"),className:"cta-btn",children:"Request a Demo →"}),c.jsx("button",{onClick:()=>{window.scrollTo({top:0,behavior:"instant"}),e("/")},className:"back-btn",children:"← Back to Home"})]})]}),c.jsx("style",{children:`
        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ede9fe, #ddd6fe);
          font-family: 'Inter', sans-serif;
          padding: 80px 20px;
          text-align: center;
        }
        h1 {
          font-size: 2.8rem;
          color: #4c1d95;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .subtitle {
          font-size: 1.15rem;
          color: #3730a3;
          max-width: 750px;
          margin: 0 auto 60px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .card {
          background: #fff;
          border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 6px 20px rgba(76,29,149,0.1);
          transition: all 0.3s ease;
          text-align: left;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(76,29,149,0.15);
        }
        .card h3 {
          color: #5b21b6;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .card p {
          color: #374151;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .cta h2 {
          color: #4c1d95;
          font-size: 1.6rem;
          margin-bottom: 30px;
        }
        .cta-btn {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 14px 30px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 10px;
          transition: background 0.3s ease;
        }
        .cta-btn:hover {
          background: #6d28d9;
        }
        .back-btn {
          background: transparent;
          color: #4c1d95;
          border: 2px solid #7c3aed;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          background: #ede9fe;
        }
        @media (max-width: 600px) {
          h1 { font-size: 2rem; }
          .cta h2 { font-size: 1.3rem; }
        }
      `})]})}function VM(){return c.jsxs("section",{className:"program-details-page",children:[c.jsxs("div",{className:"program-details-container",children:[c.jsx("h1",{children:"Full Stack Web Development Program"}),c.jsx("img",{src:"https://img.freepik.com/free-photo/programming-background-collage_23-2149901785.jpg",alt:"Full Stack Development",className:"program-banner"}),c.jsxs("p",{className:"intro",children:["Become a ",c.jsx("strong",{children:"Full Stack Developer"})," through HG’s TalentMinds. Learn to build complete web applications using modern frameworks like React, Node.js, and MongoDB."]}),c.jsxs("div",{className:"details-grid",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"💻 What You’ll Learn"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Frontend development with React"}),c.jsx("li",{children:"Backend with Node.js & Express"}),c.jsx("li",{children:"Database design with MongoDB"}),c.jsx("li",{children:"Version control & deployment with Git & CI/CD"})]})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"🎯 Outcomes"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Build real-world full-stack projects"}),c.jsx("li",{children:"Get certified as a Full Stack Developer"}),c.jsx("li",{children:"Career support for tech placements"})]})]})]}),c.jsxs("section",{className:"why-talentminds wrap",children:[c.jsx("h2",{children:"Why Choose HG’s TalentMinds?"}),c.jsx("p",{className:"intro",children:"We offer the perfect blend of mentorship, projects, and real hiring connections."}),c.jsxs("div",{className:"why-grid",children:[c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"👩‍🏫 Mentorship"}),c.jsx("p",{children:"Learn from experienced developers."})]}),c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"🧩 Projects"}),c.jsx("p",{children:"Build job-ready apps and showcase your skills."})]}),c.jsxs("div",{className:"why-card",children:[c.jsx("h3",{children:"🏆 Certification"}),c.jsx("p",{children:"Globally recognized credentials."})]})]})]})]}),c.jsx("style",{children:`
        .program-details-page { background: linear-gradient(135deg,#fff7ed,#fde68a);min-height:100vh;display:flex;justify-content:center;padding:60px 20px;font-family:'Inter',sans-serif;}
        .program-details-container{background:#fff;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,0.08);padding:50px;max-width:1000px;width:100%;text-align:center;}
        .program-banner{width:100%;height:300px;object-fit:cover;border-radius:12px;margin:20px 0 40px;}
        .intro{color:#4b5563;font-size:1.1rem;line-height:1.8;margin-bottom:40px;}
        .details-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;text-align:left;}
        .why-talentminds{background:linear-gradient(135deg,#ecfeff,#f0fdfa);padding:60px 20px;border-radius:30px;margin-top:50px;}
        .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;}
        .why-card{background:#fff;padding:20px;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.05);}
      `})]})}function XM(){const e=st();return c.jsxs("section",{className:"program-details-page",children:[c.jsxs("div",{className:"program-details-container",children:[c.jsx("h1",{children:"Data Science & AI Program"}),c.jsx("img",{src:"https://img.freepik.com/free-photo/artificial-intelligence-digital-transformation-concept_53876-124677.jpg",alt:"Data Science & AI",className:"program-banner"}),c.jsxs("p",{className:"intro",children:["Master the world of ",c.jsx("strong",{children:"Data Science and Artificial Intelligence"})," through HG’s TalentMinds. Learn Python, Pandas, TensorFlow, and advanced machine learning algorithms to turn data into insights."]}),c.jsxs("div",{className:"details-grid",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"📊 What You’ll Learn"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Python programming & data manipulation"}),c.jsx("li",{children:"Machine Learning, Deep Learning, and NLP"}),c.jsx("li",{children:"Data visualization using Matplotlib & Seaborn"}),c.jsx("li",{children:"Model deployment and performance tracking"})]})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"🎓 Outcomes"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Certified Data Science professional"}),c.jsx("li",{children:"Hands-on ML projects and Kaggle-ready portfolio"}),c.jsx("li",{children:"Career support and interview preparation"})]})]})]}),c.jsx("button",{onClick:()=>e("/explore-programs"),className:"back-btn",children:"← Back to Explore Programs"})]}),c.jsx("style",{children:`
        .program-details-page { background: linear-gradient(135deg,#fff7ed,#fde68a);min-height:100vh;display:flex;justify-content:center;padding:60px 20px;font-family:'Inter',sans-serif;}
        .program-details-container{background:#fff;border-radius:20px;box-shadow:0 8px 24px rgba(0,0,0,0.08);padding:50px;max-width:1000px;width:100%;text-align:center;}
        .program-banner{width:100%;height:300px;object-fit:cover;border-radius:12px;margin:20px 0 40px;}
        h1{color:#1f2937;font-size:2.4rem;font-weight:800;}
        .intro{color:#4b5563;font-size:1.1rem;line-height:1.8;margin-bottom:40px;}
        .details-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;text-align:left;}
        h3{color:#b45309;margin-bottom:12px;}
        ul{color:#444;line-height:1.8;padding-left:20px;}
        .back-btn{margin-top:40px;background:#f59e0b;color:white;border:none;padding:12px 28px;border-radius:8px;font-weight:600;cursor:pointer;transition:background 0.25s ease;}
        .back-btn:hover{background:#d97706;}
      `})]})}function FM(){const e=st();return c.jsxs("section",{className:"program-details-page",children:[c.jsxs("div",{className:"program-details-container",children:[c.jsx("h1",{children:"Cybersecurity & Ethical Hacking Program"}),c.jsx("img",{src:"https://img.freepik.com/free-photo/cyber-security-concept-digital-padlock-with-binary-data_53876-104097.jpg",alt:"Cybersecurity & Ethical Hacking",className:"program-banner"}),c.jsxs("p",{className:"intro",children:["The ",c.jsx("strong",{children:"HG’s TalentMinds Cybersecurity & Ethical Hacking Program"}),"is built for aspiring ethical hackers and security professionals. Learn to identify, prevent, and respond to cyber threats while protecting organizations from real-world attacks."]}),c.jsxs("div",{className:"details-grid",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"🔐 What You’ll Learn"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Foundations of cybersecurity and ethical hacking"}),c.jsx("li",{children:"Network security, firewalls, and VPNs"}),c.jsx("li",{children:"Vulnerability assessment & penetration testing (VAPT)"}),c.jsx("li",{children:"Security tools like Metasploit, Wireshark, and Burp Suite"}),c.jsx("li",{children:"Incident response and system hardening"})]})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"🎯 Outcomes"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Certified Ethical Hacker-level skills"}),c.jsx("li",{children:"Ability to secure real-world applications and systems"}),c.jsx("li",{children:"Hands-on cybersecurity project portfolio"}),c.jsx("li",{children:"Job-ready skills for roles like SOC Analyst or Pen Tester"})]})]})]}),c.jsx("button",{onClick:()=>e("/explore-programs"),className:"back-btn",children:"← Back to Explore Programs"})]}),c.jsx("style",{children:`
        .program-details-page {
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
        }

        .program-details-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px;
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .program-banner {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          margin: 20px 0 40px;
        }

        h1 {
          color: #1f2937;
          font-size: 2.4rem;
          font-weight: 800;
        }

        .intro {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          text-align: left;
        }

        h3 {
          color: #b45309;
          margin-bottom: 12px;
        }

        ul {
          color: #444;
          line-height: 1.8;
          padding-left: 20px;
        }

        .back-btn {
          margin-top: 40px;
          background: #f59e0b;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .back-btn:hover {
          background: #d97706;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
        }
      `})]})}function ZM(){const e=st();return c.jsxs("section",{className:"program-details-page",children:[c.jsxs("div",{className:"program-details-container",children:[c.jsx("h1",{children:"Cloud Computing & DevOps Program"}),c.jsx("img",{src:"https://img.freepik.com/free-photo/devops-engineer-working-computer-multiple-screens_482257-21656.jpg",alt:"Cloud Computing & DevOps",className:"program-banner"}),c.jsxs("p",{className:"intro",children:["The ",c.jsx("strong",{children:"HG’s TalentMinds Cloud & DevOps Program"}),"empowers you to design scalable systems, manage deployments, and automate workflows using modern cloud platforms like AWS, Azure, and Google Cloud."]}),c.jsxs("div",{className:"details-grid",children:[c.jsxs("div",{children:[c.jsx("h3",{children:"☁️ What You’ll Learn"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Cloud architecture principles (AWS, Azure, GCP)"}),c.jsx("li",{children:"CI/CD pipelines using Jenkins and GitHub Actions"}),c.jsx("li",{children:"Containerization with Docker and Kubernetes"}),c.jsx("li",{children:"Infrastructure as Code (Terraform, CloudFormation)"}),c.jsx("li",{children:"Monitoring & scaling using Prometheus and Grafana"})]})]}),c.jsxs("div",{children:[c.jsx("h3",{children:"🏆 Outcomes"}),c.jsxs("ul",{children:[c.jsx("li",{children:"Certified Cloud & DevOps Practitioner credentials"}),c.jsx("li",{children:"Hands-on deployment experience across environments"}),c.jsx("li",{children:"Practical project portfolio for interviews"}),c.jsx("li",{children:"In-demand DevOps engineer skills"})]})]})]}),c.jsx("button",{onClick:()=>e("/explore-programs"),className:"back-btn",children:"← Back to Explore Programs"})]}),c.jsx("style",{children:`
        .program-details-page {
          background: linear-gradient(135deg, #fff7ed, #fde68a);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 60px 20px;
          font-family: 'Inter', sans-serif;
        }

        .program-details-container {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 50px;
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .program-banner {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          margin: 20px 0 40px;
        }

        h1 {
          color: #1f2937;
          font-size: 2.4rem;
          font-weight: 800;
        }

        .intro {
          color: #4b5563;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          text-align: left;
        }

        h3 {
          color: #b45309;
          margin-bottom: 12px;
        }

        ul {
          color: #444;
          line-height: 1.8;
          padding-left: 20px;
        }

        .back-btn {
          margin-top: 40px;
          background: #f59e0b;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .back-btn:hover {
          background: #d97706;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2rem;
          }
          .intro {
            font-size: 1rem;
          }
        }
      `})]})}const og=[{title:"Modern Frontend Engineering",subtitle:"Master scalable UI architecture using React 18 and Tailwind CSS.",image:"https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=900&q=60",slug:"modern-frontend-engineering",instructor:"Sarah Johnson",category:"Frontend Development",duration:"8 weeks",level:"Intermediate",description:"This course guides learners through modern frontend development practices, covering React hooks, component design patterns, and Tailwind-based UI systems."},{title:"AI-Powered Web Apps",subtitle:"Learn to build intelligent web experiences using OpenAI, LangChain, and vector databases.",image:"https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=900&q=60",slug:"ai-powered-web-apps",instructor:"Michael Chen",category:"Artificial Intelligence",duration:"10 weeks",level:"Advanced",description:"Explore how to integrate generative AI and language models into modern web applications using OpenAI APIs, LangChain, and embeddings-based search."},{title:"Next-Gen Mobile Development",subtitle:"Create seamless cross-platform apps using React Native and Expo.",image:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",slug:"nextgen-mobile-development",instructor:"Lisa Brown",category:"Mobile Development",duration:"6 weeks",level:"Beginner",description:"Build, test, and deploy mobile apps for iOS and Android from a single codebase using React Native, Expo, and modern design systems."}],QM=e=>{switch(e.toLowerCase().trim()){case"our talent pick":return{background:"linear-gradient(90deg, #0b4da3 0%, #38bdf8 100%)",icon:"⭐",color:"#fff"};case"top trainer":return{background:"#f59e42",icon:"🏆",color:"#212121"};case"trending":return{background:"#10b981",icon:"🔥",color:"#fff"};case"new":return{background:"#ef4444",icon:"✨",color:"#fff"};case"certificate included":return{background:"#8b5cf6",icon:"📜",color:"#fff"};case"live class":return{background:"#f97316",icon:"🔴",color:"#fff"};default:return{background:"#6b7280",icon:"🏷️",color:"#fff"}}};function JM({course:e}){const t=e?.students??0,r=e?.rating??0,n=e?.price??0,o=e?.subtitle??"",l=e?.slug??"",u=e?.title??"Untitled Course",f=e?.image??"https://via.placeholder.com/300x160?text=No+Image",p=e?.badges??(e?.ourTalent?["Our Talent Pick"]:[]);return c.jsxs("article",{className:"tm-course-card",children:[c.jsx(xe,{to:`/courses/${l}`,children:c.jsxs("div",{className:"tm-thumb",children:[c.jsx("img",{src:f,alt:u,loading:"lazy"}),c.jsx("div",{className:"tm-badge-container",children:p.map((h,m)=>{const v=QM(h);return c.jsxs("span",{className:"tm-badge",style:{background:v.background,color:v.color},children:[h," ",c.jsx("span",{className:"tm-badge-icon",children:v.icon})]},m)})})]})}),c.jsxs("div",{className:"tm-body",children:[c.jsx("h3",{className:"tm-title",children:c.jsx(xe,{to:`/courses/${l}`,children:u})}),c.jsx("p",{className:"tm-sub",children:o}),c.jsxs("div",{className:"tm-meta",children:[c.jsxs("span",{className:"tm-rating",children:[c.jsx("span",{className:"star",children:"★"})," ",r]}),c.jsxs("span",{className:"tm-students",children:[t.toLocaleString()," learners"]})]}),c.jsxs("div",{className:"tm-bottom",children:[c.jsx("span",{className:`tm-price ${n===0?"free":""}`,children:n===0?"Free":`₹${n}`}),c.jsx(xe,{to:`/courses/${l}`,className:"tm-enroll",children:"View Course"})]})]}),c.jsx("style",{children:`
        .tm-course-card {
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.2s;
          height: 100%;
        }

        .tm-course-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 24px rgba(11,77,163,0.15);
        }

        .tm-thumb {
          position: relative;
          height: 180px;
          background: #f6f7fb;
          overflow: hidden;
        }

        .tm-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .tm-course-card:hover img {
          transform: scale(1.05);
        }

        /* BADGE CONTAINER STYLING */
        .tm-badge-container {
            position: absolute;
            top: 10px;
            left: 10px;
            display: flex;
            flex-wrap: wrap; 
            gap: 8px; 
            z-index: 10;
        }

        .tm-badge {
          /* Background and color are set via inline styles from getBadgeStyle */
          font-size: 13px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 4px;
          letter-spacing: 0.3px;
          white-space: nowrap;
          text-transform: capitalize; 
        }

        .tm-badge-icon {
          font-size: 14px;
        }
        /* END BADGE STYLING */

        .tm-body {
          padding: 18px 16px 16px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .tm-title {
          margin: 0 0 8px;
          font-size: 19px;
          color: #0b4da3;
          font-weight: 700;
          line-height: 1.3;
        }

        .tm-title a {
          color: inherit;
          text-decoration: none;
        }

        .tm-sub {
          margin: 0 0 12px;
          color: #4b5563;
          font-size: 15px;
          min-height: 36px;
        }

        .tm-meta {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 14px;
        }

        .tm-rating {
          color: #f59e42;
          font-weight: 600;
        }

        .tm-students {
          color: #6b7280;
        }

        .tm-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .tm-price {
          font-size: 17px;
          font-weight: 700;
          color: #0b4da3;
        }

        .tm-price.free {
          color: #059669;
        }

        .tm-enroll {
          display: inline-block;
          padding: 8px 18px;
          background: #0b4da3;
          color: #fff;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          font-size: 15px;
          transition: background 0.2s ease;
        }

        .tm-enroll:hover {
          background: #083b7a;
        }
      `})]})}function e8({courses:e}){return c.jsxs("section",{className:"tm-grid",children:[e.map(t=>c.jsx(JM,{course:t},t.id)),c.jsx("style",{children:`
        .tm-grid { max-width:1100px; margin:30px auto; display:grid; gap:18px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); padding:0 18px; }
      `})]})}function t8(){return new URLSearchParams(yt().search)}function r8(){const t=t8().get("search")||"",[r,n]=y.useState(t),[o,l]=y.useState("All"),[u,f]=y.useState("all"),p=y.useMemo(()=>["All",...Array.from(new Set(og.map(m=>m.category)))],[]),h=y.useMemo(()=>og.filter(m=>!(o!=="All"&&m.category!==o||u==="free"&&m.price!==0||u==="paid"&&m.price===0||r&&!`${m.title} ${m.subtitle} ${m.category}`.toLowerCase().includes(r.toLowerCase()))),[o,u,r]);return c.jsx("div",{style:{padding:"28px 0"},children:c.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"0 18px"},children:[c.jsx("h2",{style:{marginBottom:6},children:"All courses"}),c.jsx("p",{style:{color:"#6b7280",marginTop:0},children:"Filter and find the right course for you"}),c.jsxs("div",{style:{display:"flex",gap:12,marginTop:18,marginBottom:18,flexWrap:"wrap"},children:[c.jsx("input",{value:r,onChange:m=>n(m.target.value),placeholder:"Search courses...",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef",minWidth:220}}),c.jsx("select",{value:o,onChange:m=>l(m.target.value),style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"},children:p.map(m=>c.jsx("option",{value:m,children:m},m))}),c.jsxs("select",{value:u,onChange:m=>f(m.target.value),style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"},children:[c.jsx("option",{value:"all",children:"All prices"}),c.jsx("option",{value:"free",children:"Free"}),c.jsx("option",{value:"paid",children:"Paid"})]})]}),c.jsx(e8,{courses:h}),h.length===0&&c.jsx("p",{style:{textAlign:"center",color:"#6b7280"},children:"No courses match your filters."})]})})}function n8(){const{slug:e}=HC(),t=og.find(r=>r.slug===e);return y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]),t?c.jsx("div",{style:{maxWidth:1200,margin:"40px auto",padding:"0 20px"},children:c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 340px",gap:30,alignItems:"flex-start"},children:[c.jsxs("div",{children:[c.jsx("img",{src:t.image,alt:t.title,onError:r=>r.target.src="https://via.placeholder.com/800x400?text=Image+Unavailable",style:{width:"100%",borderRadius:10,objectFit:"cover",maxHeight:400,boxShadow:"0 3px 12px rgba(0,0,0,0.1)"}}),c.jsx("h1",{style:{marginTop:20,color:"#0b4da3"},children:t.title}),c.jsx("p",{style:{color:"#4b5563",fontSize:"1.05rem"},children:t.subtitle}),c.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"📘 About this Course"}),c.jsx("p",{style:{color:"#374151",lineHeight:1.7,marginTop:8},children:t.description||"This comprehensive course helps you master both fundamentals and advanced concepts through hands-on projects, quizzes, and practical exercises — preparing you for real-world applications and certifications."}),c.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"🎯 What You'll Learn"}),c.jsx("ul",{style:{marginTop:12,color:"#374151",lineHeight:1.7},children:t.modules&&t.modules.length>0?t.modules.map(r=>c.jsxs("li",{children:[r.title," — ",c.jsx("small",{children:r.duration})]},r.id)):c.jsxs(c.Fragment,{children:[c.jsx("li",{children:"Understand key concepts with practical demonstrations"}),c.jsx("li",{children:"Hands-on projects and assignments"}),c.jsx("li",{children:"Build real-world applications step-by-step"}),c.jsx("li",{children:"Learn from industry experts and mentors"})]})}),c.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"👨‍🏫 Instructor"}),c.jsxs("p",{style:{color:"#475569"},children:[c.jsx("strong",{children:t.instructor||"John Doe"})," — Senior Trainer with 10+ years of industry experience. Specializes in enterprise-grade projects and advanced tools used in modern IT companies."]}),c.jsx("h3",{style:{marginTop:30,color:"#1e293b"},children:"⭐ Student Reviews"}),c.jsxs("p",{style:{color:"#475569"},children:["Average Rating: ",c.jsx("strong",{children:t.rating})," / 5.0 — Trusted by"," ",c.jsx("strong",{children:t.students.toLocaleString()})," learners worldwide."]}),c.jsx(xe,{to:"/",style:{display:"inline-block",marginTop:30,color:"#2563eb",fontWeight:600,textDecoration:"none"},children:"← Back to All Courses"})]}),c.jsxs("aside",{style:{border:"1px solid #e6e9ef",padding:20,borderRadius:10,boxShadow:"0 3px 10px rgba(0,0,0,0.05)",background:"#fff",position:"sticky",top:80},children:[c.jsx("img",{src:t.image,alt:t.title,onError:r=>r.target.src="https://via.placeholder.com/400x250?text=Course+Preview",style:{width:"100%",borderRadius:8,objectFit:"cover",marginBottom:16}}),c.jsx("div",{style:{fontWeight:700,fontSize:22,color:"#111827",marginBottom:6},children:t.price===0?"Free":`₹${t.price}`}),c.jsxs("div",{style:{color:"#6b7280",marginBottom:8},children:["⭐ ",t.rating," | ",t.students.toLocaleString()," learners"]}),c.jsx("button",{style:{width:"100%",background:"linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",color:"#fff",padding:"12px 0",fontSize:"1rem",fontWeight:700,border:"none",borderRadius:6,cursor:"pointer",marginBottom:14,transition:"0.2s"},onMouseEnter:r=>r.target.style.background="linear-gradient(90deg, #1d4ed8 0%, #0ea5e9 100%)",onMouseLeave:r=>r.target.style.background="linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",children:"Enroll Now"}),c.jsxs("div",{style:{background:"#f8fafc",borderRadius:8,padding:"10px 12px",fontSize:"0.95rem",color:"#475569"},children:["🎓 Lifetime access",c.jsx("br",{}),"🧾 Certificate on completion",c.jsx("br",{}),"💻 Hands-on projects",c.jsx("br",{}),"💬 24/7 mentor support"]})]})]})}):c.jsxs("div",{style:{padding:"80px 20px",textAlign:"center"},children:[c.jsx("h2",{style:{fontSize:"2rem",color:"#0b4da3"},children:"Oops! Course Not Found 😕"}),c.jsx("p",{style:{color:"#6b7280",marginTop:10},children:"The course you’re looking for isn’t available right now. It may have been removed or updated."}),c.jsx(xe,{to:"/",style:{display:"inline-block",marginTop:24,background:"#2563eb",color:"#fff",padding:"10px 24px",borderRadius:6,textDecoration:"none",fontWeight:600},children:"← Back to Courses"})]})}function a8(){return c.jsx("div",{style:{padding:"40px 18px"},children:c.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[c.jsx("h2",{children:"Contact us"}),c.jsxs("p",{children:["For sales or partnerships, write to us at ",c.jsx("strong",{children:"hgtalentminds@gmail.com"})]}),c.jsxs("form",{style:{display:"grid",gap:10,marginTop:14},children:[c.jsx("input",{placeholder:"Your name",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"}}),c.jsx("input",{placeholder:"Your email",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"}}),c.jsx("textarea",{placeholder:"How can we help?",style:{padding:10,borderRadius:6,border:"1px solid #e6e9ef"},rows:6}),c.jsx("button",{style:{padding:"10px 14px",background:"#0b4da3",color:"white",borderRadius:6,border:"none",cursor:"pointer"},children:"Send message"})]})]})})}const jh=[{id:"Student",label:"Student",icon:hd},{id:"trainer",label:"Mentor",icon:Z6},{id:"admin",label:"Admin",icon:PT}];function i8(){const e=st(),[t,r]=y.useState("email"),[n,o]=y.useState(jh[0].id),[l,u]=y.useState({email:"",phone:"",password:""}),[f,p]=y.useState(!1),[h,m]=y.useState(""),[v,b]=y.useState(!1),[w,A]=y.useState(!1),j=_=>{const{name:T,value:z}=_.target;u(U=>({...U,[T]:z}))},S=_=>o(_),E=()=>r(_=>_==="email"?"phone":"email"),C=_=>{if(_.preventDefault(),m(""),!(t==="email"?l.email.trim():l.phone.trim())){m(`${t==="email"?"Email":"Phone number"} is required.`);return}if(!l.password.trim()){m("Password is required.");return}A(!0),setTimeout(()=>{const z={id:"1",firstName:"John",lastName:"Doe",email:l.email||"admin@talentminds.com",role:n};localStorage.setItem(n,JSON.stringify(z)),b(!0),A(!1),setTimeout(()=>{const U={...z,role:n,isAdmin:n==="admin"};localStorage.setItem("user",JSON.stringify(U)),localStorage.setItem(n,JSON.stringify(z)),console.log("Login success:",U),n==="learner"?e("/dashboard",{replace:!0}):n==="trainer"?e("/trainer/dashboard",{replace:!0}):n==="admin"?e("/admin/dashboard",{replace:!0}):e("/",{replace:!0})},1e3)},1e3)},N=jh.find(_=>_.id===n);return c.jsxs("div",{className:"auth-bg",children:[c.jsx("div",{className:"auth-container",children:c.jsxs("div",{className:"auth-modal",children:[c.jsx("h1",{children:"Welcome Back 👋"}),c.jsxs("p",{className:"subtitle",children:["Sign in to your ",c.jsx("b",{children:N.label})," dashboard."]}),c.jsx("div",{className:"role-selection",children:jh.map(_=>{const T=_.icon;return c.jsxs("div",{className:`role-card ${n===_.id?"active":""}`,onClick:()=>S(_.id),children:[c.jsx(T,{size:16}),c.jsx("span",{children:_.label})]},_.id)})}),c.jsxs("form",{onSubmit:C,children:[t==="email"?c.jsxs("div",{className:"form-group",children:[c.jsx(jT,{className:"icon",size:18}),c.jsx("input",{type:"email",name:"email",value:l.email,onChange:j,placeholder:" ",required:!0}),c.jsx("label",{children:"Email Address"})]}):c.jsxs("div",{className:"form-group",children:[c.jsx(ET,{className:"icon",size:18}),c.jsx("input",{type:"tel",name:"phone",value:l.phone,onChange:j,placeholder:" ",required:!0}),c.jsx("label",{children:"Phone Number"})]}),c.jsx("div",{className:"switch-type",onClick:E,children:t==="email"?"Use Phone Instead":"Use Email Instead"}),c.jsxs("div",{className:"form-group",children:[c.jsx(p0,{className:"icon",size:18}),c.jsx("input",{type:f?"text":"password",name:"password",value:l.password,onChange:j,placeholder:" ",required:!0}),c.jsx("label",{children:"Password"}),c.jsx("button",{type:"button",className:"eye-btn",onClick:()=>p(_=>!_),"aria-label":"Toggle Password",children:f?c.jsx(rg,{size:18}):c.jsx(ng,{size:18})})]}),h&&c.jsxs("p",{className:"error-msg",children:["⚠️ ",h]}),v&&c.jsx("p",{className:"success-msg",children:"✅ Login successful — redirecting..."}),c.jsx("button",{type:"submit",className:"login-btn",disabled:w,children:w?"Signing in...":`Continue as ${N.label}`})]}),c.jsxs("div",{className:"divider",children:[c.jsx("span",{className:"line"}),c.jsx("span",{children:"or sign in with"}),c.jsx("span",{className:"line"})]}),c.jsx("div",{className:"social-login-row",children:[{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google"},{src:"https://www.svgrepo.com/show/448234/linkedin.svg",alt:"LinkedIn"},{src:"https://www.svgrepo.com/show/512317/github-142.svg",alt:"GitHub"},{src:"https://www.svgrepo.com/show/303115/facebook-3-logo.svg",alt:"Facebook"}].map((_,T)=>c.jsx("button",{className:"social",type:"button",title:_.alt,children:c.jsx("img",{src:_.src,alt:_.alt})},T))}),c.jsxs("div",{className:"signup-link",children:["New to ",c.jsx("b",{children:"TalentMinds"}),"? ",c.jsx(xe,{to:"/signup",children:"Create an account"})]})]})}),c.jsx("style",{children:`
        .auth-bg {
          background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-y: auto;
        }
        .auth-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 40px 16px;
        }
        .auth-modal {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        h1 { text-align: center; margin-bottom: 8px; font-size: 1.7rem; font-weight: 700; }
        .subtitle { text-align: center; color: #6b7280; margin-bottom: 20px; }
        .role-selection { display: flex; gap: 10px; margin-bottom: 20px; }
        .role-card {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
          font-size: 0.9rem;
        }
        .role-card.active {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
        }
        .form-group {
          position: relative;
          margin-bottom: 18px;
        }
        .form-group input {
          width: 100%;
          padding: 12px 12px 12px 38px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
        }
        .form-group input:focus {
          border-color: #2563eb;
        }
        .form-group label {
          position: absolute;
          left: 38px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          background: #fff;
          padding: 0 4px;
          transition: 0.2s;
          pointer-events: none;
        }
        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label {
          top: -8px;
          font-size: 0.8rem;
          color: #2563eb;
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 10px;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        .eye-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
        }
        .switch-type {
          text-align: right;
          color: #2563eb;
          font-size: 0.85rem;
          cursor: pointer;
          margin-bottom: 10px;
        }
        .login-btn {
          width: 100%;
          padding: 12px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          font-size: 1rem;
          transition: 0.2s;
        }
        .login-btn:hover { background: #1e4ed8; }
        .error-msg { color: #dc2626; text-align: center; font-weight: 600; }
        .success-msg { color: #16a34a; text-align: center; font-weight: 600; }
        .divider { display: flex; align-items: center; justify-content: center; margin: 20px 0; gap: 10px; color: #6b7280; font-size: 0.9rem; }
        .divider .line { flex: 1; height: 1px; background: #e5e7eb; }
        .social-login-row { display: flex; justify-content: space-between; gap: 10px; }
        .social {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #fff;
          cursor: pointer;
          transition: 0.2s;
        }
        .social:hover { background: #f3f4f6; }
        .social img { width: 22px; height: 22px; }
        .signup-link { text-align: center; margin-top: 20px; font-size: 0.9rem; }
        .signup-link a { color: #2563eb; font-weight: 600; text-decoration: none; }
        @media (max-width: 600px) {
          .auth-modal { padding: 24px; }
          .auth-container { padding-top: 60px; }
        }
      `})]})}const nw=[{id:"learner",label:"Learner Account"},{id:"trainer",label:"Mentor / Instructor"},{id:"admin",label:"Admin Access"}];function o8(){const[e,t]=y.useState(nw[0]),[r,n]=y.useState({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:"",expertise:"",yearsExperience:"",linkedInUrl:"",bio:"",resume:"",adminCode:""}),[o,l]=y.useState(!1),[u,f]=y.useState(!1),[p,h]=y.useState(""),[m,v]=y.useState(!1),[b,w]=y.useState(!1),A=S=>{const{name:E,value:C,files:N}=S.target;n({...r,[E]:N?N[0]:C})},j=S=>{S.preventDefault(),h(""),v(!1);const E=e.id,C=["firstName","lastName","email","phone","password"];if(E==="learner"){if(C.some(N=>!r[N]))return h("Please fill in all required fields.");if(r.password!==r.confirmPassword)return h("Passwords do not match.")}else if(E==="trainer"){if(!r.firstName||!r.lastName||!r.email||!r.expertise)return h("Please complete all required fields.")}else if(E==="admin"){if(!r.adminCode.trim())return h("Access Code is required for admin registration.");if(r.adminCode!=="TALENTMINDS-ACCESS")return h("Invalid access code.")}w(!0),setTimeout(()=>{v(!0),w(!1),n({firstName:"",lastName:"",email:"",phone:"",password:"",confirmPassword:"",expertise:"",yearsExperience:"",linkedInUrl:"",bio:"",resume:"",adminCode:""})},1e3)};return c.jsxs("div",{className:"auth-bg",children:[c.jsx("div",{className:"auth-container",children:c.jsxs("div",{className:"auth-modal",children:[c.jsx("h1",{children:"Create Your TalentMinds Account"}),c.jsx("p",{className:"subtitle",children:"Choose your account type to begin your journey."}),c.jsx("div",{className:"role-card-selection",children:nw.map(S=>c.jsx("div",{className:`role-card ${e.id===S.id?"active":""}`,onClick:()=>t(S),children:S.label},S.id))}),c.jsxs("form",{onSubmit:j,children:[c.jsxs("div",{className:"form-row",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"firstName",value:r.firstName,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"First Name"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"lastName",value:r.lastName,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"Last Name"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"email",name:"email",value:r.email,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"Email Address"})]}),e.id==="learner"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"Mobile Number"})]}),c.jsxs("div",{className:"form-row",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:o?"text":"password",name:"password",value:r.password,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"Create Password"}),c.jsx("button",{type:"button",className:"eye-btn",onClick:()=>l(!o),children:o?c.jsx(rg,{size:18}):c.jsx(ng,{size:18})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:u?"text":"password",name:"confirmPassword",value:r.confirmPassword,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"Confirm Password"}),c.jsx("button",{type:"button",className:"eye-btn",onClick:()=>f(!u),children:u?c.jsx(rg,{size:18}):c.jsx(ng,{size:18})})]})]})]}),e.id==="trainer"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"expertise",value:r.expertise,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"Area of Expertise"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"number",name:"yearsExperience",value:r.yearsExperience,onChange:A,placeholder:" "}),c.jsx("label",{children:"Years of Experience"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"url",name:"linkedInUrl",value:r.linkedInUrl,onChange:A,placeholder:" "}),c.jsx("label",{children:"LinkedIn Profile (optional)"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("textarea",{name:"bio",value:r.bio,onChange:A,placeholder:" ",rows:"3"}),c.jsx("label",{children:"Short Bio"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"file",name:"resume",onChange:A,accept:".pdf,.doc,.docx"}),c.jsx("label",{children:"Upload Resume / CV"})]})]}),e.id==="admin"&&c.jsxs("div",{className:"form-group",children:[c.jsx("input",{type:"text",name:"adminCode",value:r.adminCode,onChange:A,placeholder:" ",required:!0}),c.jsx("label",{children:"Admin Access Code"})]}),p&&c.jsxs("p",{className:"error-msg",children:["⚠️ ",p]}),m&&c.jsxs("p",{className:"success-msg",children:["✅ ",e.label," signup successful!"," ",c.jsx(xe,{to:"/login",children:"Go to Login"}),"."]}),c.jsx("button",{className:"signup-btn",type:"submit",disabled:b,children:b?"Submitting...":`Register as ${e.label}`})]}),c.jsxs("div",{className:"divider",children:[c.jsx("span",{className:"line"}),c.jsx("span",{children:"or sign up with"}),c.jsx("span",{className:"line"})]}),c.jsx("div",{className:"social-login-row",children:[{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google"},{src:"https://www.svgrepo.com/show/448234/linkedin.svg",alt:"LinkedIn"},{src:"https://www.svgrepo.com/show/512317/github-142.svg",alt:"GitHub"},{src:"https://www.svgrepo.com/show/303115/facebook-3-logo.svg",alt:"Facebook"}].map((S,E)=>c.jsx("button",{className:"social",type:"button",title:S.alt,children:c.jsx("img",{src:S.src,alt:S.alt})},E))}),c.jsxs("div",{className:"login-link",children:["Already have an account? ",c.jsx(xe,{to:"/login",children:"Sign in"})]})]})}),c.jsx("style",{children:`
        .auth-bg {
          background: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop') center/cover no-repeat;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-y: auto;
        }
        .auth-container { width: 100%; display: flex; justify-content: center; padding: 40px 16px; }
        .auth-modal {
          background: #fff;
          border-radius: 16px;
          padding: 32px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        h1 { text-align: center; font-size: 1.7rem; font-weight: 700; margin-bottom: 6px; }
        .subtitle { text-align: center; color: #6b7280; margin-bottom: 20px; }
        .role-card-selection { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .role-card { flex: 1; text-align: center; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; cursor: pointer; font-size: 0.9rem; transition: 0.2s; margin: 0 5px; }
        .role-card.active { background: #2563eb; color: #fff; border-color: #2563eb; }
        .form-row { display: flex; gap: 10px; }
        .form-group { position: relative; margin-bottom: 16px; flex: 1; }
        .form-group input, .form-group textarea {
          width: 100%; padding: 12px 12px 12px 10px; border: 1px solid #d1d5db;
          border-radius: 8px; font-size: 1rem; outline: none; resize: none;
        }
        .form-group input:focus, .form-group textarea:focus { border-color: #2563eb; }
        .form-group label {
          position: absolute; top: 50%; left: 12px; transform: translateY(-50%);
          color: #9ca3af; background: #fff; padding: 0 4px; transition: 0.2s;
          pointer-events: none;
        }
        .form-group input:focus + label, .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label, .form-group textarea:not(:placeholder-shown) + label {
          top: -8px; font-size: 0.8rem; color: #2563eb;
        }
        .eye-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; color: #6b7280;
        }
        .signup-btn {
          width: 100%; padding: 12px; background: #2563eb; border: none; color: #fff;
          font-weight: 700; border-radius: 8px; cursor: pointer; font-size: 1rem;
        }
        .signup-btn:hover { background: #1e4ed8; }
        .error-msg { color: #dc2626; text-align: center; font-weight: 600; }
        .success-msg { color: #16a34a; text-align: center; font-weight: 600; }
        .divider { display: flex; align-items: center; justify-content: center; margin: 20px 0; gap: 10px; color: #6b7280; font-size: 0.9rem; }
        .divider .line { flex: 1; height: 1px; background: #e5e7eb; }
        .social-login-row { display: flex; justify-content: space-between; gap: 10px; }
        .social { flex: 1; display: flex; justify-content: center; align-items: center;
          border: 1px solid #e5e7eb; border-radius: 8px; background: #fff;
          height: 42px; cursor: pointer; transition: 0.2s;
        }
        .social:hover { background: #f3f4f6; }
        .social img { width: 22px; height: 22px; }
        .login-link { text-align: center; margin-top: 18px; font-size: 0.9rem; }
        .login-link a { color: #2563eb; font-weight: 600; text-decoration: none; }
        @media (max-width: 600px) { .auth-modal { padding: 24px; } .form-row { flex-direction: column; } }
      `})]})}function l8(){const e=yt(),{email:t="va****@gmail.com",phone:r="98*****21"}=e.state||{},[n,o]=y.useState(["","","","","",""]),[l,u]=y.useState(""),[f,p]=y.useState(!1),[h,m]=y.useState(30);y.useEffect(()=>{if(h>0){const A=setInterval(()=>m(j=>j-1),1e3);return()=>clearInterval(A)}},[h]);const v=(A,j)=>{const S=A.target.value.replace(/[^0-9]/g,"");if(S.length>1)return;const E=[...n];E[j]=S,o(E),S&&j<n.length-1&&document.getElementById(`otp-input-${j+1}`).focus()},b=A=>{A.preventDefault();const j=n.join("");if(j.length!==6){u("Please enter a 6-digit OTP.");return}u(""),p(!0),console.log("Entered OTP:",j),setTimeout(()=>{window.location.href="/dashboard"},1500)},w=()=>{m(30),o(["","","","","",""]),console.log("Resending OTP...")};return c.jsxs("div",{className:"otp-container",children:[c.jsxs("div",{className:"otp-box",children:[c.jsx("h1",{children:"🔐 Verify Your Account"}),c.jsxs("p",{className:"subtitle",children:["Enter the 6-digit OTP sent to ",c.jsx("br",{}),c.jsx("span",{className:"highlight",children:t||r})]}),c.jsxs("form",{onSubmit:b,children:[c.jsx("div",{className:"otp-inputs",children:n.map((A,j)=>c.jsx("input",{id:`otp-input-${j}`,type:"text",maxLength:"1",value:A,onChange:S=>v(S,j)},j))}),l&&c.jsx("p",{className:"error-msg",children:l}),f&&c.jsx("p",{className:"success-msg",children:"✅ OTP Verified! Redirecting..."}),c.jsx("button",{className:"verify-btn",type:"submit",children:"Verify OTP"})]}),c.jsx("div",{className:"resend-section",children:h>0?c.jsxs("p",{className:"timer",children:["⏳ Resend OTP in ",h,"s"]}):c.jsx("a",{href:"#",onClick:w,className:"resend-link",children:"🔄 Resend OTP"})}),c.jsx("p",{className:"info-msg",children:"Didn’t receive the code? Check your spam folder or ensure your phone has network coverage 📡"})]}),c.jsx("style",{children:`
        * { box-sizing: border-box; margin:0; padding:0; font-family: 'Inter', sans-serif; }
        .otp-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #2563eb, #38bdf8);
          padding: 20px;
        }
        .otp-box {
          background: #fff;
          padding: 40px 32px;
          border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          text-align: center;
          width: 100%;
          max-width: 420px;
          animation: fadeIn 0.6s ease-in-out;
        }
        .otp-box h1 {
          font-size: 1.8rem;
          margin-bottom: 12px;
          color: #111827;
        }
        .subtitle {
          color: #6b7280;
          margin-bottom: 20px;
          font-size: 1rem;
        }
        .highlight {
          font-weight: 600;
          color: #2563eb;
        }
        .otp-inputs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          gap: 10px;
        }
        .otp-inputs input {
          width: 50px;
          height: 55px;
          font-size: 1.5rem;
          text-align: center;
          border: 2px solid #d1d5db;
          border-radius: 12px;
          background: #f9fafb;
          outline: none;
          transition: 0.2s;
        }
        .otp-inputs input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 8px rgba(37,99,235,0.3);
        }
        .verify-btn {
          width: 100%;
          padding: 14px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }
        .verify-btn:hover { background: #1e40af; transform: scale(1.02); }
        .resend-section {
          margin-top: 16px;
        }
        .timer {
          color: #6b7280;
          font-size: 0.9rem;
        }
        .resend-link {
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
        }
        .resend-link:hover { text-decoration: underline; }
        .info-msg {
          margin-top: 16px;
          font-size: 0.85rem;
          color: #6b7280;
        }
        .error-msg {
          color: #dc2626;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .success-msg {
          margin-bottom: 12px;
          color: green;
          font-weight: 600;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media(max-width: 480px) {
          .otp-inputs { gap: 6px; }
          .otp-inputs input { width: 42px; height: 45px; font-size: 1.2rem; }
        }
      `})]})}function s8(){const e=st(),[t,r]=y.useState(""),[n,o]=y.useState(""),[l,u]=y.useState(!1),[f,p]=y.useState(!1);function h(){return String(Math.floor(1e5+Math.random()*9e5))}const m=v=>{if(v.preventDefault(),o(""),!t.trim()||!/^\S+@\S+\.\S+$/.test(t.trim())){o("Please enter a valid email address.");return}u(!0);const b=h();sessionStorage.setItem("tm_reset_otp",b),sessionStorage.setItem("tm_reset_email",t.trim()),console.log("Simulated OTP (ForgotPasswordPage):",b),setTimeout(()=>{p(!0),u(!1),e("/reset-otp-verify",{state:{email:t.trim()}})},800)};return c.jsxs("div",{className:"fp-page",children:[c.jsxs("div",{className:"fp-left",children:[c.jsx("img",{src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&s=5a6c7e6a1a6c1a6e6d6a1a6c",alt:"learning"}),c.jsx("div",{className:"fp-left-center",children:c.jsxs("div",{className:"fp-badge",children:[c.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,children:[c.jsx("rect",{width:"24",height:"24",rx:"8",fill:"url(#g)"}),c.jsx("path",{d:"M8 12.5l2 2 6-6",stroke:"#fff",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("defs",{children:c.jsxs("linearGradient",{id:"g",x1:"0",x2:"1",y1:"0",y2:"1",children:[c.jsx("stop",{offset:"0",stopColor:"#2563eb"}),c.jsx("stop",{offset:"1",stopColor:"#06b6d4"})]})})]}),c.jsx("h2",{children:"TalentMinds"}),c.jsx("p",{children:"Reset password & get back to learning"})]})})]}),c.jsx("div",{className:"fp-right",children:c.jsxs("div",{className:"fp-card",children:[c.jsx("h1",{children:"Forgot Password?"}),c.jsx("p",{className:"fp-sub",children:"Enter your email — we'll send a verification code to reset your password."}),c.jsxs("form",{onSubmit:m,noValidate:!0,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("input",{id:"email",name:"email",type:"email",value:t,onChange:v=>r(v.target.value),placeholder:" ",required:!0}),c.jsx("label",{htmlFor:"email",children:"Email"})]}),n&&c.jsx("div",{className:"fp-error",children:n}),f&&c.jsx("div",{className:"fp-success",children:"Verification code sent. Redirecting…"}),c.jsx("button",{type:"submit",className:"fp-cta",disabled:l,children:l?"Sending…":"Send Verification Code"})]}),c.jsx("div",{className:"fp-hint",children:"Tip: This demo accepts any email. The simulated OTP is printed in the browser console for testing."})]})}),c.jsx("style",{children:`
        .fp-page { display:flex; min-height:100vh; font-family:Inter, system-ui, Arial; }
        .fp-left { flex:1; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .fp-left img { width:100%; height:100vh; object-fit:cover; filter:brightness(0.45); transform:scale(1.03); transition:transform .6s ease; }
        .fp-left:hover img { transform:scale(1.04); }
        .fp-left-center {
          position:absolute;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          pointer-events:none;
        }
        .fp-badge {
          pointer-events:auto;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          backdrop-filter: blur(6px);
          border-radius:14px;
          padding:28px;
          text-align:center;
          color:#fff;
          box-shadow: 0 12px 40px rgba(2,6,23,0.5);
          max-width:360px;
          transform: translateY(-10px);
        }
        .fp-badge svg { display:block; margin:0 auto 10px; }
        .fp-badge h2 { margin:0 0 6px; font-size:1.4rem; letter-spacing:0.2px; }
        .fp-badge p { margin:0; opacity:0.95; font-size:0.95rem; }

        .fp-right { flex:1; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#f7fbff,#ffffff); padding:48px 24px; }
        .fp-card { width:100%; max-width:520px; background:#fff; padding:38px; border-radius:14px; box-shadow:0 20px 60px rgba(2,6,23,0.06); }
        .fp-card h1 { margin:0 0 6px; font-size:1.6rem; color:#0f172a; }
        .fp-sub { margin:0 0 18px; color:#374151; }

        .form-group { position:relative; margin-bottom:16px; }
        .form-group input { width:100%; padding:14px 12px; border:1.5px solid #e6eefc; border-radius:10px; outline:none; background:#fff; font-size:0.98rem; }
        .form-group input:focus { border-color:#2563eb; box-shadow:0 6px 24px rgba(37,99,235,0.08); }
        .form-group label { position:absolute; top:-10px; left:12px; background:#fff; padding:0 6px; color:#475569; font-size:0.78rem; }

        .fp-cta { width:100%; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        .fp-cta:disabled { opacity:0.7; cursor:default; }

        .fp-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }
        .fp-success { color:#065f46; background:#ecfdf5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }

        .fp-hint { margin-top:14px; color:#6b7280; font-size:0.9rem; }

        @media(max-width:900px) {
          .fp-page { flex-direction:column; }
          .fp-left{ height:200px; }
          .fp-left img{ height:200px; }
          .fp-left-center { align-items:flex-start; padding-top:18px; }
          .fp-badge { transform:none; padding:18px; max-width:320px; }
          .fp-right { padding:28px 16px; }
        }
      `})]})}function c8(){const e=yt(),t=st(),r=e?.state?.email||sessionStorage.getItem("tm_reset_email")||"",[n]=y.useState(r),[o,l]=y.useState(""),[u,f]=y.useState(""),[p,h]=y.useState(!1),[m,v]=y.useState(!1),[b,w]=y.useState("");y.useEffect(()=>{const S=sessionStorage.getItem("tm_reset_otp");S&&(w("A code was sent (demo). Check console for OTP."),console.log("Simulated OTP (ResetOtpVerifyPage):",S))},[]);const A=S=>{if(S.preventDefault(),f(""),!o.trim()){f("Enter the verification code.");return}h(!0),setTimeout(()=>{const E=sessionStorage.getItem("tm_reset_otp");E&&o.trim()===E?(sessionStorage.removeItem("tm_reset_otp"),t("/reset-password",{state:{email:n}})):f("Invalid code. Try again."),h(!1)},600)},j=()=>{f(""),v(!0),setTimeout(()=>{const S=String(Math.floor(1e5+Math.random()*9e5));sessionStorage.setItem("tm_reset_otp",S),console.log("Resent simulated OTP (ResetOtpVerifyPage):",S),v(!1),w("New code sent (demo). Check console for OTP.")},700)};return c.jsxs("div",{className:"otp-page",children:[c.jsxs("div",{className:"otp-card",children:[c.jsx("h1",{children:"Enter Verification Code"}),c.jsxs("p",{className:"otp-desc",children:["We sent a 6‑digit code to ",c.jsx("strong",{children:n||"your email"}),". Enter it below."]}),c.jsxs("form",{onSubmit:A,className:"otp-form",children:[c.jsx("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:6,value:o,onChange:S=>l(S.target.value.replace(/\D/g,"")),placeholder:"------",className:"otp-input",required:!0}),b&&c.jsx("div",{className:"otp-hint",children:b}),u&&c.jsx("div",{className:"otp-error",children:u}),c.jsx("button",{className:"otp-cta",type:"submit",disabled:p,children:p?"Verifying…":"Verify & Continue"})]}),c.jsxs("div",{className:"otp-actions",children:[c.jsx("button",{className:"resend-btn",type:"button",onClick:j,disabled:m,children:m?"Resending…":"Resend Code"}),c.jsx("button",{className:"back-btn",type:"button",onClick:()=>t(-1),children:"Back"})]})]}),c.jsx("style",{children:`
        .otp-page { min-height:100vh; display:flex; align-items:center; justify-content:center; font-family:Inter, system-ui; background:linear-gradient(180deg,#f8fbff,#fff); padding:32px; }
        .otp-card { width:100%; max-width:520px; background:#fff; padding:28px; border-radius:12px; box-shadow:0 18px 50px rgba(2,6,23,0.06); text-align:center; }
        .otp-card h1 { margin:0 0 6px; font-size:1.4rem; color:#0f172a; }
        .otp-desc { color:#475569; margin-bottom:16px; }
        .otp-form { display:flex; flex-direction:column; gap:12px; align-items:center; }
        .otp-input { font-size:1.6rem; letter-spacing:12px; text-align:center; padding:12px 18px; width:240px; border-radius:10px; border:1.5px solid #e6eefc; outline:none; }
        .otp-input:focus { border-color:#2563eb; box-shadow:0 0 0 6px rgba(37,99,235,0.04); }
        .otp-hint { color:#374151; font-size:0.9rem; margin-top:6px; }
        .otp-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; width:100%; margin-top:6px; font-weight:600; }
        .otp-cta { width:100%; max-width:320px; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        .otp-actions { display:flex; gap:12px; justify-content:center; margin-top:12px; }
        .resend-btn, .back-btn { background:transparent; border:none; color:#2563eb; cursor:pointer; font-weight:700; }
        .resend-btn[disabled]{ opacity:0.6; cursor:default; }
        @media(max-width:480px) { .otp-input{ width:200px; letter-spacing:10px; } }
      `})]})}function u8(e=""){let t=0;return e.length>=8&&t++,/[A-Z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t}function d8(){const e=st();yt()?.state?.email||sessionStorage.getItem("tm_reset_email");const[r,n]=y.useState(""),[o,l]=y.useState(""),[u,f]=y.useState(""),[p,h]=y.useState(!1),[m,v]=y.useState(!1),b=u8(r),w=["Very weak","Weak","Fair","Good","Strong"][b],A=j=>{if(j.preventDefault(),f(""),r.length<8){f("Password must be at least 8 characters.");return}if(r!==o){f("Passwords do not match.");return}h(!0),setTimeout(()=>{h(!1),v(!0),sessionStorage.removeItem("tm_reset_email"),sessionStorage.removeItem("tm_reset_otp"),setTimeout(()=>e("/login"),1200)},900)};return c.jsxs("div",{className:"reset-page",children:[c.jsxs("div",{className:"reset-card",children:[c.jsx("h1",{children:"Create a New Password"}),c.jsx("p",{className:"reset-desc",children:"Make sure your new password is strong and unique."}),c.jsxs("form",{onSubmit:A,children:[c.jsxs("div",{className:"form-group",children:[c.jsx("input",{id:"password",type:"password",value:r,onChange:j=>n(j.target.value),placeholder:" ",required:!0}),c.jsx("label",{htmlFor:"password",children:"New Password"})]}),c.jsxs("div",{className:"strength-row",children:[c.jsx("div",{className:`strength-bar s-${b}`}),c.jsx("div",{className:"strength-label",children:w})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("input",{id:"confirm",type:"password",value:o,onChange:j=>l(j.target.value),placeholder:" ",required:!0}),c.jsx("label",{htmlFor:"confirm",children:"Confirm Password"})]}),u&&c.jsx("div",{className:"reset-error",children:u}),m&&c.jsx("div",{className:"reset-success",children:"Password updated. Redirecting to login…"}),c.jsx("button",{className:"reset-cta",type:"submit",disabled:p,children:p?"Updating…":"Update Password"})]})]}),c.jsx("style",{children:`
        .reset-page { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg,#f8fbff,#fff); font-family:Inter, system-ui; padding:28px; }
        .reset-card { width:100%; max-width:520px; background:#fff; padding:28px; border-radius:12px; box-shadow:0 18px 50px rgba(2,6,23,0.06); }
        .reset-card h1 { margin:0 0 6px; font-size:1.4rem; color:#0f172a; }
        .reset-desc { color:#475569; margin-bottom:12px; }

        .form-group { position:relative; margin-bottom:12px; }
        .form-group input { width:100%; padding:14px 12px; border:1.5px solid #e6eefc; border-radius:10px; outline:none; font-size:0.98rem; }
        .form-group input:focus { border-color:#2563eb; box-shadow:0 0 0 6px rgba(37,99,235,0.04); }
        .form-group label { position:absolute; top:-10px; left:12px; background:#fff; padding:0 6px; color:#475569; font-size:0.78rem; }

        .strength-row { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .strength-bar { flex:1; height:10px; border-radius:8px; background:#f1f5f9; overflow:hidden; position:relative; }
        .strength-bar::after { content:''; position:absolute; left:0; top:0; bottom:0; width:0%; background:linear-gradient(90deg,#f43f5e,#f59e0b,#10b981); transition:width 0.3s; }
        .s-0::after { width:6%; background:#ef4444; }
        .s-1::after { width:28%; background:#f97316; }
        .s-2::after { width:52%; background:#f59e0b; }
        .s-3::after { width:76%; background:#10b981; }
        .s-4::after { width:100%; background:linear-gradient(90deg,#10b981,#06b6d4); }
        .strength-label { width:96px; text-align:right; color:#475569; font-size:0.9rem; }

        .reset-error { color:#b91c1c; background:#fff5f5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }
        .reset-success { color:#065f46; background:#ecfdf5; padding:10px 12px; border-radius:8px; margin-bottom:12px; font-weight:600; }

        .reset-cta { width:100%; padding:12px; background:linear-gradient(90deg,#2563eb,#38bdf8); color:#fff; border:none; border-radius:10px; font-weight:700; cursor:pointer; }
        @media(max-width:480px) { .strength-label{ display:none; } }
      `})]})}function f8(){const e={container:{padding:"30px",background:"#f8fafc"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px"},cardGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"25px",marginBottom:"40px"},card:{background:"#fff",padding:"25px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",borderLeft:"5px solid"},cardTitle:{margin:"0 0 10px 0",fontSize:"1.2rem",fontWeight:700,display:"flex",alignItems:"center",gap:"10px"},cardValue:{fontSize:"2rem",fontWeight:900,color:"#0f4f9f"},activitySection:{background:"#fff",padding:"25px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},activityTitle:{fontSize:"1.5rem",fontWeight:700,color:"#1e293b",marginBottom:"15px"},activityItem:{padding:"15px 0",borderBottom:"1px dashed #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"},activityText:{color:"#475569",fontSize:"1rem"},activityDate:{color:"#94a3b8",fontSize:".9rem"}};return c.jsxs("div",{style:e.container,children:[c.jsx("h1",{style:e.title,children:"Your Learning Hub Summary 👋"}),c.jsxs("div",{style:e.cardGrid,children:[c.jsxs("div",{style:{...e.card,borderLeftColor:"#0f4f9f"},children:[c.jsxs("h3",{style:e.cardTitle,children:[c.jsx(fs,{size:24,color:"#0f4f9f"})," Active Courses"]}),c.jsx("p",{style:e.cardValue,children:"4"}),c.jsx("span",{style:{color:"#64748b"},children:"Keep up the great work!"})]}),c.jsxs("div",{style:{...e.card,borderLeftColor:"#ef4444"},children:[c.jsxs("h3",{style:e.cardTitle,children:[c.jsx(v0,{size:24,color:"#ef4444"})," Pending Assignments"]}),c.jsx("p",{style:{...e.cardValue,color:"#ef4444"},children:"2"}),c.jsx("span",{style:{color:"#64748b"},children:"Deadlines approaching this week."})]}),c.jsxs("div",{style:{...e.card,borderLeftColor:"#10b981"},children:[c.jsxs("h3",{style:e.cardTitle,children:[c.jsx(fd,{size:24,color:"#10b981"})," Overall Progress"]}),c.jsx("p",{style:{...e.cardValue,color:"#10b981"},children:"85%"}),c.jsx("span",{style:{color:"#64748b"},children:"View detailed grade reports."})]})]}),c.jsxs("div",{style:e.activitySection,children:[c.jsx("h2",{style:e.activityTitle,children:"Recent Activity & Deadlines"}),c.jsxs("div",{style:e.activityItem,children:[c.jsx("span",{style:e.activityText,children:"**Assignment:** Web Dev Module 5 Quiz is due."}),c.jsx("span",{style:e.activityDate,children:"Today, 11:59 PM"})]}),c.jsxs("div",{style:e.activityItem,children:[c.jsx("span",{style:e.activityText,children:"**New Grade:** Received B+ on Data Structures Midterm."}),c.jsx("span",{style:e.activityDate,children:"2 hours ago"})]}),c.jsxs("div",{style:e.activityItem,children:[c.jsx("span",{style:e.activityText,children:"**Course Announcement:** History lecture rescheduled to 3 PM."}),c.jsx("span",{style:e.activityDate,children:"Yesterday"})]}),c.jsxs("div",{style:e.activityItem,children:[c.jsx("span",{style:e.activityText,children:'**Discussion:** New reply in "Context API usage" thread.'}),c.jsx("span",{style:e.activityDate,children:"3 days ago"})]}),c.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:c.jsx("a",{href:"/dashboard/notifications",style:{color:"#0f4f9f",textDecoration:"none",fontWeight:600},children:"View all notifications →"})})]})]})}function p8(){const e=[{title:"Introduction to Web Development",instructor:"J. Smith",progress:75,status:"Active",color:"#0f4f9f"},{title:"Advanced Data Structures & Algorithms",instructor:"Dr. K. Lee",progress:32,status:"Active",color:"#f97316"},{title:"Modern European History",instructor:"Prof. A. Bell",progress:98,status:"Finishing",color:"#10b981"},{title:"Calculus I: Limits and Derivatives",instructor:"T. Jones",progress:5,status:"Starting",color:"#64748b"}],t={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px"},courseGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"25px"},courseCard:{background:"#fff",padding:"20px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",height:"100%"},courseTitle:{fontSize:"1.4rem",fontWeight:700,color:"#1e293b",marginBottom:"5px"},instructor:{color:"#64748b",fontSize:".9rem",marginBottom:"15px"},progressLabel:{fontWeight:600,color:"#475569",marginBottom:"5px"},progressBarContainer:{height:"10px",background:"#e2e8f0",borderRadius:"5px",marginBottom:"20px"},progressBar:(r,n)=>({width:`${r}%`,height:"100%",background:n,borderRadius:"5px",transition:"width 0.5s"}),button:r=>({background:r,color:"#fff",border:"none",padding:"10px 15px",borderRadius:"8px",cursor:"pointer",fontWeight:700,marginTop:"auto",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}),statusTag:r=>({padding:"4px 10px",borderRadius:"4px",background:r,color:"#fff",fontSize:".8rem",fontWeight:700,alignSelf:"flex-start",marginBottom:"10px"})};return c.jsxs("div",{style:t.container,children:[c.jsx("h1",{style:t.title,children:"My Enrolled Courses"}),c.jsx("div",{style:t.courseGrid,children:e.map((r,n)=>c.jsxs("div",{style:t.courseCard,children:[c.jsx("span",{style:t.statusTag(r.color),children:r.status}),c.jsx("h2",{style:t.courseTitle,children:r.title}),c.jsxs("p",{style:t.instructor,children:["Instructor: ",r.instructor]}),c.jsxs("p",{style:t.progressLabel,children:["Progress: ",r.progress,"%"]}),c.jsx("div",{style:t.progressBarContainer,children:c.jsx("div",{style:t.progressBar(r.progress,r.color)})}),c.jsxs("button",{style:t.button(r.color),onClick:()=>console.log(`Navigating to ${r.title} details`),children:[c.jsx(XT,{size:18})," Continue Learning"]})]},n))})]})}const ni={title:"Mastering React Hooks and Advanced Concepts",instructor:"Jane Doe",duration:"12.5 hours",lessonsCompleted:8,totalLessons:15,modules:[{name:"Introduction to Hooks",lessons:[{title:"What are Hooks?",completed:!0},{title:"useState and useEffect",completed:!0}]},{name:"Advanced State Management",lessons:[{title:"useReducer Deep Dive",completed:!0},{title:"The Context API",completed:!1}]}]};function h8(){const[e,t]=y.useState(ni.modules[0].name),r=Math.round(ni.lessonsCompleted/ni.totalLessons*100),n={container:{padding:"30px"},header:{marginBottom:"30px",background:"#0f4f9f",color:"#fff",padding:"30px",borderRadius:"12px"},title:{fontSize:"2.5rem",fontWeight:800,margin:0},meta:{display:"flex",gap:"20px",fontSize:"1rem",marginTop:"10px"},progressBox:{background:"#fff",color:"#1e293b",padding:"15px",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",marginTop:"20px"},moduleTitle:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 20px",background:"#e2e8f0",cursor:"pointer",borderRadius:"8px",marginBottom:"5px"},lessonItem:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 30px",borderLeft:"3px solid #cbd5e1",cursor:"pointer",transition:"background 0.2s"}};return c.jsxs("div",{style:n.container,children:[c.jsxs("div",{style:n.header,children:[c.jsx("h1",{style:n.title,children:ni.title}),c.jsxs("div",{style:n.meta,children:[c.jsxs("span",{children:["By ",ni.instructor]}),c.jsxs("span",{children:[c.jsx(CA,{size:16,style:{verticalAlign:"middle",marginRight:"5px"}})," ",ni.duration," total"]})]}),c.jsxs("div",{style:n.progressBox,children:[c.jsxs("p",{style:{margin:"0 0 5px 0",fontWeight:700},children:["Your Progress: ",r,"%"]}),c.jsx("div",{style:{height:"8px",background:"#e2e8f0",borderRadius:"4px"},children:c.jsx("div",{style:{width:`${r}%`,height:"100%",background:"#22c55e",borderRadius:"4px",transition:"width 0.5s"}})})]})]}),c.jsx("h2",{style:{fontSize:"1.8rem",color:"#1e293b",marginBottom:"20px"},children:"Course Curriculum"}),ni.modules.map((o,l)=>c.jsxs("div",{style:{marginBottom:"10px",border:"1px solid #e2e8f0",borderRadius:"8px",overflow:"hidden"},children:[c.jsxs("div",{style:n.moduleTitle,onClick:()=>t(e===o.name?null:o.name),children:[c.jsxs("span",{style:{fontWeight:700,color:"#1e293b"},children:[l+1,". ",o.name]}),e===o.name?c.jsx(NA,{size:20}):c.jsx(kA,{size:20})]}),e===o.name&&c.jsx("div",{style:{background:"#f8fafc"},children:o.lessons.map((u,f)=>c.jsxs("div",{style:{...n.lessonItem,background:u.completed?"#f0f9ff":"#fff"},children:[u.completed?c.jsx(pd,{size:18,color:"#22c55e"}):c.jsx(nT,{size:18,color:"#94a3b8"}),c.jsxs("span",{children:["Lesson ",f+1,": ",u.title]})]},f))})]},l))]})}function m8(){return c.jsx("div",{className:"assignments-page",children:c.jsx("h1",{children:"Assignments"})})}function g8(){const e=[{title:"Best practices for using useEffect dependencies array",course:"Web Development",author:"Alex J.",replies:12,likes:5,time:"2h ago",new:!0},{title:"Proof of concept for Kruskal's Algorithm",course:"Data Structures",author:"Dr. Lee",replies:8,likes:3,time:"1d ago",new:!1},{title:"Seeking resources for primary sources on WWI",course:"European History",author:"Student X",replies:3,likes:1,time:"3d ago",new:!1}],t={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px",display:"flex",alignItems:"center",gap:"10px"},threadList:{display:"flex",flexDirection:"column",gap:"15px"},threadItem:r=>({padding:"20px",background:"#fff",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",borderLeft:r?"5px solid #0f4f9f":"5px solid #e2e8f0",display:"flex",justifyContent:"space-between",cursor:"pointer",transition:"box-shadow 0.2s"}),content:{flex:1},threadTitle:{margin:"0 0 5px 0",fontSize:"1.2rem",fontWeight:700,color:"#0f4f9f"},meta:{fontSize:".9rem",color:"#64748b",display:"flex",gap:"15px",alignItems:"center",marginTop:"5px"},stats:{width:"150px",display:"flex",gap:"15px",justifyContent:"flex-end",alignItems:"center",flexShrink:0},statItem:{display:"flex",alignItems:"center",gap:"5px",fontSize:".9rem",fontWeight:600,color:"#475569"},newTag:{background:"#ef4444",color:"#fff",padding:"3px 8px",borderRadius:"4px",fontSize:".75rem",fontWeight:700,marginLeft:"10px"}};return c.jsxs("div",{style:t.container,children:[c.jsxs("h1",{style:t.title,children:[c.jsx(ag,{size:30})," Discussion Forums"]}),c.jsx("div",{style:t.threadList,children:e.map((r,n)=>c.jsxs("div",{style:t.threadItem(r.new),children:[c.jsxs("div",{style:t.content,children:[c.jsxs("h3",{style:t.threadTitle,children:[r.title,r.new&&c.jsx("span",{style:t.newTag,children:"NEW"})]}),c.jsxs("p",{style:t.meta,children:[c.jsx("span",{style:{color:"#1e293b",fontWeight:600},children:r.course}),c.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[c.jsx(hd,{size:16})," ",r.author]}),c.jsx("span",{children:r.time})]})]}),c.jsxs("div",{style:t.stats,children:[c.jsxs("div",{style:t.statItem,children:[c.jsx(ag,{size:18,color:"#2563eb"}),c.jsx("span",{children:r.replies})]}),c.jsxs("div",{style:t.statItem,children:[c.jsx(BT,{size:18,color:"#10b981"}),c.jsx("span",{children:r.likes})]})]})]},n))}),c.jsx("div",{style:{textAlign:"center",marginTop:"30px"},children:c.jsx("button",{style:{background:"#0f4f9f",color:"#fff",border:"none",padding:"12px 25px",borderRadius:"8px",cursor:"pointer",fontWeight:700},children:"Start New Discussion"})})]})}function v8(){const e=[{id:1,type:"grade",message:"You received a grade of **A** on the Web Dev Final Quiz.",time:"5 minutes ago",icon:pd,color:"#10b981"},{id:2,type:"announcement",message:"New **Course Announcement** posted in Data Structures.",time:"1 hour ago",icon:v0,color:"#f97316"}],t={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"25px"},list:{marginTop:"20px"},item:{display:"flex",alignItems:"flex-start",gap:"15px",padding:"15px",background:"#fff",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0,0,0,0.04)",marginBottom:"10px",borderLeft:"4px solid",cursor:"pointer",transition:"box-shadow 0.2s"},message:{flex:1,fontSize:"1rem"},time:{fontSize:".8rem",color:"#64748b"}};return c.jsxs("div",{style:t.container,children:[c.jsx("h1",{style:t.title,children:"Notifications & Alerts"}),c.jsx("div",{style:{textAlign:"right",marginBottom:"15px"},children:c.jsx("button",{style:{background:"#94a3b8",color:"#fff",border:"none",padding:"8px 15px",borderRadius:"6px",cursor:"pointer"},children:"Mark All as Read"})}),c.jsx("div",{style:t.list,children:e.map(r=>c.jsxs("div",{style:{...t.item,borderLeftColor:r.color},children:[c.jsx(r.icon,{size:20,color:r.color,style:{flexShrink:0}}),c.jsxs("div",{style:t.message,children:[c.jsx("span",{dangerouslySetInnerHTML:{__html:r.message.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}}),c.jsx("div",{style:t.time,children:r.time})]})]},r.id))})]})}function x8(){const[e,t]=y.useState("Web Development"),r=[{course:"Web Development",overall:"92.5%",grade:"A",items:[{name:"HTML Basics Quiz",score:"10/10",weight:"5%",color:"#10b981"},{name:"CSS Layout Project",score:"95/100",weight:"25%",color:"#0f4f9f"},{name:"Module 5 Quiz",score:"N/A",weight:"5%",color:"#f97316"}]},{course:"Data Structures",overall:"85.0%",grade:"B+",items:[{name:"Midterm Exam",score:"79/100",weight:"40%",color:"#0f4f9f"},{name:"Assignment 1: Linked Lists",score:"90/100",weight:"20%",color:"#10b981"}]}],n={container:{padding:"30px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#1e293b",marginBottom:"30px"},courseCard:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"12px",marginBottom:"20px",overflow:"hidden"},courseHeader:u=>({display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 25px",background:"#f1f5f9",cursor:"pointer",borderLeft:`5px solid ${u}`}),courseName:{fontSize:"1.4rem",fontWeight:700,color:"#1e293b",margin:0},overallGrade:{fontSize:"1.8rem",fontWeight:900,color:"#10b981"},gradeDetails:{padding:"20px 25px",background:"#fff"},itemRow:u=>({display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid #f8fafc"}),itemName:{fontWeight:600,color:"#475569",flex:2},itemScore:u=>({fontWeight:700,color:u,width:"100px",textAlign:"right"}),itemWeight:{color:"#94a3b8",width:"80px",textAlign:"right"}},o=u=>u.includes("A")?"#10b981":u.includes("B")?"#2563eb":u.includes("C")?"#f97316":"#ef4444",l=u=>{if(u==="N/A")return"#f97316";const[f,p]=u.split("/").map(h=>parseFloat(h.trim()));return p&&f/p>=.9?"#10b981":p&&f/p>=.8?"#2563eb":"#ef4444"};return c.jsxs("div",{style:n.container,children:[c.jsx("h1",{style:n.title,children:"My Course Grades"}),r.map((u,f)=>c.jsxs("div",{style:n.courseCard,children:[c.jsxs("div",{style:n.courseHeader(o(u.grade)),onClick:()=>t(e===u.course?null:u.course),children:[c.jsxs("div",{children:[c.jsx("h2",{style:n.courseName,children:u.course}),c.jsxs("p",{style:{margin:0,color:"#64748b",fontSize:".9rem"},children:["Overall Average: ",u.overall]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[c.jsx("span",{style:{...n.overallGrade,color:o(u.grade)},children:u.grade}),e===u.course?c.jsx(NA,{size:24,color:"#475569"}):c.jsx(kA,{size:24,color:"#475569"})]})]}),e===u.course&&c.jsxs("div",{style:n.gradeDetails,children:[c.jsxs("div",{style:{...n.itemRow(),fontWeight:700,borderBottom:"1px solid #e2e8f0",marginBottom:"5px"},children:[c.jsx("span",{style:n.itemName,children:"Item Name"}),c.jsx("span",{style:n.itemWeight,children:"Weight"}),c.jsx("span",{style:{...n.itemScore(),color:"#1e293b"},children:"Score"})]}),u.items.map((p,h)=>c.jsxs("div",{style:n.itemRow(l(p.score)),children:[c.jsx("span",{style:n.itemName,children:p.name}),c.jsx("span",{style:n.itemWeight,children:p.weight}),c.jsx("span",{style:n.itemScore(l(p.score)),children:p.score})]},h))]})]},f))]})}function y8(){const[e,t]=y.useState(!1),[r,n]=y.useState({firstName:"Alex",lastName:"Johnson",email:"alex.johnson@example.com",phone:"555-123-4567",bio:"Avid learner of web development and data science."}),o={container:{padding:"30px",background:"#fff",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},title:{fontSize:"2.2rem",fontWeight:800,color:"#0f4f9f",marginBottom:"25px"},card:{marginBottom:"20px",padding:"15px",border:"1px solid #e2e8f0",borderRadius:"8px"},label:{fontWeight:600,color:"#475569",display:"flex",alignItems:"center",gap:"8px",marginBottom:"5px"},value:{fontSize:"1rem",color:"#1e293b"},button:{background:e?"#ef4444":"#0f4f9f",color:"#fff",border:"none",padding:"10px 18px",borderRadius:"8px",cursor:"pointer",transition:"background 0.2s"},input:{width:"100%",padding:"10px",border:"1px solid #ccc",borderRadius:"6px",marginTop:"5px"}},l=()=>{t(!1)},u=f=>{const{name:p,value:h}=f.target;n(m=>({...m,[p]:h}))};return c.jsxs("div",{style:o.container,children:[c.jsx("h1",{style:o.title,children:"My Profile"}),c.jsxs("div",{style:o.card,children:[c.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"}}),c.jsxs("div",{style:{marginTop:"20px"},children:[c.jsx("label",{style:o.label,children:"Bio"}),e?c.jsx("textarea",{name:"bio",value:r.bio,onChange:u,style:{...o.input,height:"100px"}}):c.jsx("p",{style:o.value,children:r.bio})]})]}),c.jsx("div",{style:{textAlign:"right"},children:c.jsx("button",{style:o.button,onClick:()=>e?l():t(!0),children:e?"Save Changes":"Edit Profile"})})]})}function b8(){const[e,t]=y.useState({emailNotifications:!0,darkMode:!1}),r={container:{padding:"30px",background:"#fff",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},title:{fontSize:"2.2rem",fontWeight:800,color:"#0f4f9f",marginBottom:"25px"},sectionTitle:{fontSize:"1.4rem",color:"#1e293b",borderBottom:"1px solid #e2e8f0",paddingBottom:"10px",marginBottom:"20px",marginTop:"20px"},settingItem:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 0",borderBottom:"1px solid #f1f5f9"},label:{fontWeight:600,color:"#475569",display:"flex",alignItems:"center",gap:"10px"}},n=(o,l)=>{t(u=>({...u,[o]:l}))};return c.jsxs("div",{style:r.container,children:[c.jsx("h1",{style:r.title,children:"Settings"}),c.jsxs("h2",{style:r.sectionTitle,children:[c.jsx(Co,{size:20})," Notification Preferences"]}),c.jsxs("div",{style:r.settingItem,children:[c.jsx("span",{style:r.label,children:"Receive email notifications for new grades"}),c.jsx("input",{type:"checkbox",checked:e.emailNotifications,onChange:o=>n("emailNotifications",o.target.checked)})]}),c.jsxs("h2",{style:r.sectionTitle,children:[c.jsx(p0,{size:20})," Account & Privacy"]}),c.jsxs("div",{style:r.settingItem,children:[c.jsx("span",{style:r.label,children:"Change Password"}),c.jsx("button",{style:{background:"#2563eb",color:"#fff",border:"none",padding:"8px 15px",borderRadius:"6px",cursor:"pointer"},children:"Update"})]})]})}function w8(){const e=[{id:1,title:"Mastering React Hooks (2025)",price:49.99},{id:2,title:"Financial Modeling for Beginners",price:99.99}],t=e.reduce((l,u)=>l+u.price,0),r=t*.05,n=t+r,o={container:{padding:"30px",background:"#f8fafc",display:"flex",gap:"30px",alignItems:"flex-start"},left:{flex:3,background:"#fff",padding:"20px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)"},right:{flex:1,background:"#fff",padding:"20px",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0,0,0,0.05)",position:"sticky",top:"84px"},title:{fontSize:"2.2rem",fontWeight:800,color:"#0f4f9f",marginBottom:"25px"},item:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 0",borderBottom:"1px solid #e2e8f0"},checkoutBtn:{background:"#22c55e",color:"#fff",border:"none",width:"100%",padding:"12px",borderRadius:"8px",fontWeight:700,cursor:"pointer",marginTop:"20px"}};return c.jsxs("div",{style:o.container,children:[c.jsxs("div",{style:o.left,children:[c.jsxs("h1",{style:o.title,children:["Shopping Cart (",e.length," Items)"]}),e.map(l=>c.jsxs("div",{style:o.item,children:[c.jsx("div",{style:{flex:1},children:c.jsx("h3",{style:{margin:0,color:"#1e293b"},children:l.title})}),c.jsxs("div",{style:{fontWeight:700,color:"#0f4f9f",width:"100px",textAlign:"right"},children:["$",l.price.toFixed(2)]}),c.jsx("button",{style:{background:"none",border:"none",color:"#ef4444",cursor:"pointer",paddingLeft:"15px"},children:c.jsx(WT,{size:20})})]},l.id))]}),c.jsxs("div",{style:o.right,children:[c.jsx("h2",{style:{fontSize:"1.5rem",color:"#1e293b",marginBottom:"15px"},children:"Order Summary"}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:800,fontSize:"1.2rem",color:"#0f4f9f"},children:[c.jsx("span",{children:"Total:"}),c.jsxs("span",{children:["$",n.toFixed(2)]})]}),c.jsxs("button",{style:o.checkoutBtn,children:[c.jsx(dT,{size:20,style:{verticalAlign:"middle",marginRight:"5px"}})," Proceed to Checkout"]})]})]})}function Kc({title:e,value:t,delta:r,icon:n}){const o=r>=0;return c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"top",children:[c.jsx("span",{className:"icon",children:n}),c.jsx("h4",{children:e})]}),c.jsxs("div",{className:"bottom",children:[c.jsx("h2",{children:t}),c.jsxs("span",{className:`delta ${o?"up":"down"}`,children:[o?"▲":"▼"," ",Math.abs(r),"%"]})]}),c.jsx("style",{children:`
        .stat-card {
          background:#fff;
          border:1px solid #e2e8f0;
          border-radius:14px;
          padding:16px 18px;
          box-shadow:0 1px 3px rgba(0,0,0,0.05);
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .top { display:flex; align-items:center; gap:10px; }
        .icon { font-size:1.5rem; }
        .top h4 { margin:0; font-size:.95rem; font-weight:600; color:#475569; }
        .bottom { display:flex; justify-content:space-between; align-items:center; }
        .bottom h2 { margin:0; font-size:1.5rem; font-weight:800; color:#0f172a; }
        .delta { font-weight:700; font-size:.85rem; }
        .up { color:#16a34a; }
        .down { color:#dc2626; }
      `})]})}function j8(){const e=[{label:"Mon",value:15},{label:"Tue",value:22},{label:"Wed",value:19},{label:"Thu",value:28},{label:"Fri",value:31},{label:"Sat",value:25},{label:"Sun",value:18}];return c.jsxs("div",{className:"dash",children:[c.jsx("h1",{children:"Trainer Overview"}),c.jsx("p",{className:"sub",children:"Insights into your teaching performance."}),c.jsxs("div",{className:"stats",children:[c.jsx(Kc,{title:"Total Learners",value:"860",delta:5.2,icon:"🎓"}),c.jsx(Kc,{title:"Active Courses",value:"12",delta:3.4,icon:"📘"}),c.jsx(Kc,{title:"Average Rating",value:"4.8★",delta:1.1,icon:"⭐"}),c.jsx(Kc,{title:"Pending Reviews",value:"6",delta:-2.3,icon:"📝"})]}),c.jsxs("div",{className:"cards",children:[c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"panel-head",children:[c.jsx("h3",{children:"Weekly Engagement"}),c.jsx("span",{className:"hint",children:"Last 7 days"})]}),c.jsx("div",{className:"bar-chart",children:e.map(t=>c.jsxs("div",{className:"bar-wrap",title:`${t.label}: ${t.value}`,children:[c.jsx("div",{className:"bar",style:{height:`${t.value*6}px`}}),c.jsx("span",{className:"lbl",children:t.label})]},t.label))})]}),c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"panel-head",children:[c.jsx("h3",{children:"Top Performing Courses"}),c.jsx("span",{className:"hint",children:"Based on enrollments"})]}),c.jsx("ul",{className:"list",children:[{name:"React Fundamentals",enroll:420},{name:"Python for ML",enroll:350},{name:"Advanced JS",enroll:280},{name:"SQL for Analysts",enroll:220}].map(t=>c.jsxs("li",{className:"li",children:[c.jsx("span",{children:t.name}),c.jsx("span",{className:"pill",children:t.enroll})]},t.name))})]})]}),c.jsx("style",{children:`
        .dash h1 { margin:0 0 2px; font-size:1.45rem; font-weight:800; }
        .sub { color:#64748b; margin:0 0 16px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin:12px 0 18px; }
        .cards { display:grid; grid-template-columns:2fr 1fr; gap:14px; }
        .panel { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:14px; }
        .panel-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
        .hint { color:#64748b; font-size:.85rem; }
        .bar-chart { display:flex; align-items:flex-end; gap:12px; height:200px; padding:10px 4px 0; }
        .bar-wrap { display:flex; flex-direction:column; align-items:center; gap:6px; }
        .bar { width:22px; background:linear-gradient(180deg, #60a5fa, #2563eb); border-radius:6px 6px 0 0; }
        .lbl { font-size:.8rem; color:#475569; }
        .list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .li { display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #e2e8f0; border-radius:10px; }
        .pill { background:#eef2ff; color:#3730a3; padding:4px 10px; border-radius:999px; border:1px solid #c7d2fe; font-weight:700; }
        @media (max-width: 1200px) { .stats { grid-template-columns:repeat(2,1fr); } .cards { grid-template-columns:1fr; } }
      `})]})}function S8(){return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Course Management"}),c.jsx("p",{children:"View, edit, and publish your courses."}),c.jsx("div",{className:"msg",children:"This section will include full CRUD operations for trainer course management."}),c.jsx("style",{children:`
        .page h1 {font-size:1.4rem;font-weight:800;margin-bottom:6px;}
        .msg {background:#f1f5f9;padding:20px;border-radius:10px;border:1px dashed #cbd5e1;margin-top:10px;}
      `})]})}function A8(){const e=[{title:"React Fundamentals",students:120,status:"Active"},{title:"Advanced JS Concepts",students:95,status:"Active"},{title:"SQL for Beginners",students:80,status:"Draft"},{title:"Python for ML",students:140,status:"Active"}];return c.jsxs("div",{className:"courses",children:[c.jsx("h1",{children:"My Courses"}),c.jsx("p",{className:"sub",children:"Manage your published and draft courses."}),c.jsx("div",{className:"grid",children:e.map((t,r)=>c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:t.title}),c.jsxs("p",{children:[t.students," learners enrolled"]}),c.jsx("span",{className:`status ${t.status.toLowerCase()}`,children:t.status})]},r))}),c.jsx("style",{children:`
        .courses h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:18px;}
        .grid {display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px;}
        .card {background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        .status {display:inline-block;margin-top:8px;padding:4px 10px;border-radius:999px;font-size:.8rem;font-weight:600;}
        .status.active {background:#dcfce7;color:#15803d;}
        .status.draft {background:#fef3c7;color:#92400e;}
      `})]})}function O8(){const e=[{name:"Alice Johnson",course:"React Fundamentals",progress:88},{name:"David Lee",course:"Python for ML",progress:76},{name:"Sara White",course:"SQL Basics",progress:91}];return c.jsxs("div",{children:[c.jsx("h1",{children:"Student Progress"}),c.jsx("p",{className:"sub",children:"Monitor learner performance across your courses."}),c.jsxs("table",{className:"tbl",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Student"}),c.jsx("th",{children:"Course"}),c.jsx("th",{children:"Progress"})]})}),c.jsx("tbody",{children:e.map((t,r)=>c.jsxs("tr",{children:[c.jsx("td",{children:t.name}),c.jsx("td",{children:t.course}),c.jsx("td",{children:c.jsxs("span",{className:"bar",style:{width:`${t.progress}%`},children:[t.progress,"%"]})})]},r))})]}),c.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:14px;}
        .tbl {width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-radius:10px;}
        .tbl th, .tbl td {padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:left;}
        .bar {display:inline-block;height:8px;background:#2563eb;color:#fff;border-radius:999px;font-size:.8rem;text-align:right;padding-right:6px;}
      `})]})}function PA(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=PA(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function qe(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=PA(e))&&(n&&(n+=" "),n+=t);return n}var E8=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function x0(e){if(typeof e!="string")return!1;var t=E8;return t.includes(e)}var k8=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"];function DA(e){if(typeof e!="string")return!1;var t=k8;return t.includes(e)}function zA(e){return typeof e=="string"&&e.startsWith("data-")}function rn(e){var t=Object.entries(e).filter(r=>{var[n]=r;return DA(n)||zA(n)});return Object.fromEntries(t)}function ps(e){if(e==null)return null;if(y.isValidElement(e)&&typeof e.props=="object"&&e.props!==null){var t=e.props;return rn(t)}return typeof e=="object"&&!Array.isArray(e)?rn(e):null}function rr(e){var t=Object.entries(e).filter(r=>{var[n]=r;return DA(n)||zA(n)||x0(n)});return Object.fromEntries(t)}function N8(e){return e==null?null:y.isValidElement(e)?rr(e.props):typeof e=="object"&&!Array.isArray(e)?rr(e):null}var C8=["children","width","height","viewBox","className","style","title","desc"];function lg(){return lg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},lg.apply(null,arguments)}function T8(e,t){if(e==null)return{};var r,n,o=M8(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function M8(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var y0=y.forwardRef((e,t)=>{var{children:r,width:n,height:o,viewBox:l,className:u,style:f,title:p,desc:h}=e,m=T8(e,C8),v=l||{width:n,height:o,x:0,y:0},b=qe("recharts-surface",u);return y.createElement("svg",lg({},rr(m),{className:b,width:n,height:o,style:f,viewBox:"".concat(v.x," ").concat(v.y," ").concat(v.width," ").concat(v.height),ref:t}),y.createElement("title",null,p),y.createElement("desc",null,h),r)}),_8=["children","className"];function sg(){return sg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},sg.apply(null,arguments)}function P8(e,t){if(e==null)return{};var r,n,o=D8(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function D8(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var Yr=y.forwardRef((e,t)=>{var{children:r,className:n}=e,o=P8(e,_8),l=qe("recharts-layer",n);return y.createElement("g",sg({className:l},rr(o),{ref:t}),r)}),RA=y.createContext(null),z8=()=>y.useContext(RA);function Fe(e){return function(){return e}}const LA=Math.cos,mu=Math.sin,ln=Math.sqrt,gu=Math.PI,md=2*gu,cg=Math.PI,ug=2*cg,ai=1e-6,R8=ug-ai;function BA(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=arguments[t]+e[t]}function L8(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return BA;const r=10**t;return function(n){this._+=n[0];for(let o=1,l=n.length;o<l;++o)this._+=Math.round(arguments[o]*r)/r+n[o]}}class B8{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?BA:L8(t)}moveTo(t,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,r){this._append`L${this._x1=+t},${this._y1=+r}`}quadraticCurveTo(t,r,n,o){this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+o}`}bezierCurveTo(t,r,n,o,l,u){this._append`C${+t},${+r},${+n},${+o},${this._x1=+l},${this._y1=+u}`}arcTo(t,r,n,o,l){if(t=+t,r=+r,n=+n,o=+o,l=+l,l<0)throw new Error(`negative radius: ${l}`);let u=this._x1,f=this._y1,p=n-t,h=o-r,m=u-t,v=f-r,b=m*m+v*v;if(this._x1===null)this._append`M${this._x1=t},${this._y1=r}`;else if(b>ai)if(!(Math.abs(v*p-h*m)>ai)||!l)this._append`L${this._x1=t},${this._y1=r}`;else{let w=n-u,A=o-f,j=p*p+h*h,S=w*w+A*A,E=Math.sqrt(j),C=Math.sqrt(b),N=l*Math.tan((cg-Math.acos((j+b-S)/(2*E*C)))/2),_=N/C,T=N/E;Math.abs(_-1)>ai&&this._append`L${t+_*m},${r+_*v}`,this._append`A${l},${l},0,0,${+(v*w>m*A)},${this._x1=t+T*p},${this._y1=r+T*h}`}}arc(t,r,n,o,l,u){if(t=+t,r=+r,n=+n,u=!!u,n<0)throw new Error(`negative radius: ${n}`);let f=n*Math.cos(o),p=n*Math.sin(o),h=t+f,m=r+p,v=1^u,b=u?o-l:l-o;this._x1===null?this._append`M${h},${m}`:(Math.abs(this._x1-h)>ai||Math.abs(this._y1-m)>ai)&&this._append`L${h},${m}`,n&&(b<0&&(b=b%ug+ug),b>R8?this._append`A${n},${n},0,1,${v},${t-f},${r-p}A${n},${n},0,1,${v},${this._x1=h},${this._y1=m}`:b>ai&&this._append`A${n},${n},0,${+(b>=cg)},${v},${this._x1=t+n*Math.cos(l)},${this._y1=r+n*Math.sin(l)}`)}rect(t,r,n,o){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+o}h${-n}Z`}toString(){return this._}}function b0(e){let t=3;return e.digits=function(r){if(!arguments.length)return t;if(r==null)t=null;else{const n=Math.floor(r);if(!(n>=0))throw new RangeError(`invalid digits: ${r}`);t=n}return e},()=>new B8(t)}function w0(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function IA(e){this._context=e}IA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function gd(e){return new IA(e)}function qA(e){return e[0]}function $A(e){return e[1]}function UA(e,t){var r=Fe(!0),n=null,o=gd,l=null,u=b0(f);e=typeof e=="function"?e:e===void 0?qA:Fe(e),t=typeof t=="function"?t:t===void 0?$A:Fe(t);function f(p){var h,m=(p=w0(p)).length,v,b=!1,w;for(n==null&&(l=o(w=u())),h=0;h<=m;++h)!(h<m&&r(v=p[h],h,p))===b&&((b=!b)?l.lineStart():l.lineEnd()),b&&l.point(+e(v,h,p),+t(v,h,p));if(w)return l=null,w+""||null}return f.x=function(p){return arguments.length?(e=typeof p=="function"?p:Fe(+p),f):e},f.y=function(p){return arguments.length?(t=typeof p=="function"?p:Fe(+p),f):t},f.defined=function(p){return arguments.length?(r=typeof p=="function"?p:Fe(!!p),f):r},f.curve=function(p){return arguments.length?(o=p,n!=null&&(l=o(n)),f):o},f.context=function(p){return arguments.length?(p==null?n=l=null:l=o(n=p),f):n},f}function Wc(e,t,r){var n=null,o=Fe(!0),l=null,u=gd,f=null,p=b0(h);e=typeof e=="function"?e:e===void 0?qA:Fe(+e),t=typeof t=="function"?t:Fe(t===void 0?0:+t),r=typeof r=="function"?r:r===void 0?$A:Fe(+r);function h(v){var b,w,A,j=(v=w0(v)).length,S,E=!1,C,N=new Array(j),_=new Array(j);for(l==null&&(f=u(C=p())),b=0;b<=j;++b){if(!(b<j&&o(S=v[b],b,v))===E)if(E=!E)w=b,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),A=b-1;A>=w;--A)f.point(N[A],_[A]);f.lineEnd(),f.areaEnd()}E&&(N[b]=+e(S,b,v),_[b]=+t(S,b,v),f.point(n?+n(S,b,v):N[b],r?+r(S,b,v):_[b]))}if(C)return f=null,C+""||null}function m(){return UA().defined(o).curve(u).context(l)}return h.x=function(v){return arguments.length?(e=typeof v=="function"?v:Fe(+v),n=null,h):e},h.x0=function(v){return arguments.length?(e=typeof v=="function"?v:Fe(+v),h):e},h.x1=function(v){return arguments.length?(n=v==null?null:typeof v=="function"?v:Fe(+v),h):n},h.y=function(v){return arguments.length?(t=typeof v=="function"?v:Fe(+v),r=null,h):t},h.y0=function(v){return arguments.length?(t=typeof v=="function"?v:Fe(+v),h):t},h.y1=function(v){return arguments.length?(r=v==null?null:typeof v=="function"?v:Fe(+v),h):r},h.lineX0=h.lineY0=function(){return m().x(e).y(t)},h.lineY1=function(){return m().x(e).y(r)},h.lineX1=function(){return m().x(n).y(t)},h.defined=function(v){return arguments.length?(o=typeof v=="function"?v:Fe(!!v),h):o},h.curve=function(v){return arguments.length?(u=v,l!=null&&(f=u(l)),h):u},h.context=function(v){return arguments.length?(v==null?l=f=null:f=u(l=v),h):l},h}class HA{constructor(t,r){this._context=t,this._x=r}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,r){switch(t=+t,r=+r,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,r,t,r):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+r)/2,t,this._y0,t,r);break}}this._x0=t,this._y0=r}}function I8(e){return new HA(e,!0)}function q8(e){return new HA(e,!1)}const j0={draw(e,t){const r=ln(t/gu);e.moveTo(r,0),e.arc(0,0,r,0,md)}},$8={draw(e,t){const r=ln(t/5)/2;e.moveTo(-3*r,-r),e.lineTo(-r,-r),e.lineTo(-r,-3*r),e.lineTo(r,-3*r),e.lineTo(r,-r),e.lineTo(3*r,-r),e.lineTo(3*r,r),e.lineTo(r,r),e.lineTo(r,3*r),e.lineTo(-r,3*r),e.lineTo(-r,r),e.lineTo(-3*r,r),e.closePath()}},YA=ln(1/3),U8=YA*2,H8={draw(e,t){const r=ln(t/U8),n=r*YA;e.moveTo(0,-r),e.lineTo(n,0),e.lineTo(0,r),e.lineTo(-n,0),e.closePath()}},Y8={draw(e,t){const r=ln(t),n=-r/2;e.rect(n,n,r,r)}},G8=.8908130915292852,GA=mu(gu/10)/mu(7*gu/10),K8=mu(md/10)*GA,W8=-LA(md/10)*GA,V8={draw(e,t){const r=ln(t*G8),n=K8*r,o=W8*r;e.moveTo(0,-r),e.lineTo(n,o);for(let l=1;l<5;++l){const u=md*l/5,f=LA(u),p=mu(u);e.lineTo(p*r,-f*r),e.lineTo(f*n-p*o,p*n+f*o)}e.closePath()}},Sh=ln(3),X8={draw(e,t){const r=-ln(t/(Sh*3));e.moveTo(0,r*2),e.lineTo(-Sh*r,-r),e.lineTo(Sh*r,-r),e.closePath()}},Ir=-.5,qr=ln(3)/2,dg=1/ln(12),F8=(dg/2+1)*3,Z8={draw(e,t){const r=ln(t/F8),n=r/2,o=r*dg,l=n,u=r*dg+r,f=-l,p=u;e.moveTo(n,o),e.lineTo(l,u),e.lineTo(f,p),e.lineTo(Ir*n-qr*o,qr*n+Ir*o),e.lineTo(Ir*l-qr*u,qr*l+Ir*u),e.lineTo(Ir*f-qr*p,qr*f+Ir*p),e.lineTo(Ir*n+qr*o,Ir*o-qr*n),e.lineTo(Ir*l+qr*u,Ir*u-qr*l),e.lineTo(Ir*f+qr*p,Ir*p-qr*f),e.closePath()}};function Q8(e,t){let r=null,n=b0(o);e=typeof e=="function"?e:Fe(e||j0),t=typeof t=="function"?t:Fe(t===void 0?64:+t);function o(){let l;if(r||(r=l=n()),e.apply(this,arguments).draw(r,+t.apply(this,arguments)),l)return r=null,l+""||null}return o.type=function(l){return arguments.length?(e=typeof l=="function"?l:Fe(l),o):e},o.size=function(l){return arguments.length?(t=typeof l=="function"?l:Fe(+l),o):t},o.context=function(l){return arguments.length?(r=l??null,o):r},o}function vu(){}function xu(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function KA(e){this._context=e}KA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:xu(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:xu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function J8(e){return new KA(e)}function WA(e){this._context=e}WA.prototype={areaStart:vu,areaEnd:vu,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:xu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function e_(e){return new WA(e)}function VA(e){this._context=e}VA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var r=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(r,n):this._context.moveTo(r,n);break;case 3:this._point=4;default:xu(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function t_(e){return new VA(e)}function XA(e){this._context=e}XA.prototype={areaStart:vu,areaEnd:vu,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function r_(e){return new XA(e)}function aw(e){return e<0?-1:1}function iw(e,t,r){var n=e._x1-e._x0,o=t-e._x1,l=(e._y1-e._y0)/(n||o<0&&-0),u=(r-e._y1)/(o||n<0&&-0),f=(l*o+u*n)/(n+o);return(aw(l)+aw(u))*Math.min(Math.abs(l),Math.abs(u),.5*Math.abs(f))||0}function ow(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}function Ah(e,t,r){var n=e._x0,o=e._y0,l=e._x1,u=e._y1,f=(l-n)/3;e._context.bezierCurveTo(n+f,o+f*t,l-f,u-f*r,l,u)}function yu(e){this._context=e}yu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Ah(this,this._t0,ow(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var r=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Ah(this,ow(this,r=iw(this,e,t)),r);break;default:Ah(this,this._t0,r=iw(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=r}}};function FA(e){this._context=new ZA(e)}(FA.prototype=Object.create(yu.prototype)).point=function(e,t){yu.prototype.point.call(this,t,e)};function ZA(e){this._context=e}ZA.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,o,l){this._context.bezierCurveTo(t,e,n,r,l,o)}};function n_(e){return new yu(e)}function a_(e){return new FA(e)}function QA(e){this._context=e}QA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),r===2)this._context.lineTo(e[1],t[1]);else for(var n=lw(e),o=lw(t),l=0,u=1;u<r;++l,++u)this._context.bezierCurveTo(n[0][l],o[0][l],n[1][l],o[1][l],e[u],t[u]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function lw(e){var t,r=e.length-1,n,o=new Array(r),l=new Array(r),u=new Array(r);for(o[0]=0,l[0]=2,u[0]=e[0]+2*e[1],t=1;t<r-1;++t)o[t]=1,l[t]=4,u[t]=4*e[t]+2*e[t+1];for(o[r-1]=2,l[r-1]=7,u[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=o[t]/l[t-1],l[t]-=n,u[t]-=n*u[t-1];for(o[r-1]=u[r-1]/l[r-1],t=r-2;t>=0;--t)o[t]=(u[t]-o[t+1])/l[t];for(l[r-1]=(e[r]+o[r-1])/2,t=0;t<r-1;++t)l[t]=2*e[t+1]-o[t+1];return[o,l]}function i_(e){return new QA(e)}function vd(e,t){this._context=e,this._t=t}vd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function o_(e){return new vd(e,.5)}function l_(e){return new vd(e,0)}function s_(e){return new vd(e,1)}function vo(e,t){if((u=e.length)>1)for(var r=1,n,o,l=e[t[0]],u,f=l.length;r<u;++r)for(o=l,l=e[t[r]],n=0;n<f;++n)l[n][1]+=l[n][0]=isNaN(o[n][1])?o[n][0]:o[n][1]}function fg(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function c_(e,t){return e[t]}function u_(e){const t=[];return t.key=e,t}function d_(){var e=Fe([]),t=fg,r=vo,n=c_;function o(l){var u=Array.from(e.apply(this,arguments),u_),f,p=u.length,h=-1,m;for(const v of l)for(f=0,++h;f<p;++f)(u[f][h]=[0,+n(v,u[f].key,h,l)]).data=v;for(f=0,m=w0(t(u));f<p;++f)u[m[f]].index=f;return r(u,m),u}return o.keys=function(l){return arguments.length?(e=typeof l=="function"?l:Fe(Array.from(l)),o):e},o.value=function(l){return arguments.length?(n=typeof l=="function"?l:Fe(+l),o):n},o.order=function(l){return arguments.length?(t=l==null?fg:typeof l=="function"?l:Fe(Array.from(l)),o):t},o.offset=function(l){return arguments.length?(r=l??vo,o):r},o}function f_(e,t){if((n=e.length)>0){for(var r,n,o=0,l=e[0].length,u;o<l;++o){for(u=r=0;r<n;++r)u+=e[r][o][1]||0;if(u)for(r=0;r<n;++r)e[r][o][1]/=u}vo(e,t)}}function p_(e,t){if((o=e.length)>0){for(var r=0,n=e[t[0]],o,l=n.length;r<l;++r){for(var u=0,f=0;u<o;++u)f+=e[u][r][1]||0;n[r][1]+=n[r][0]=-f/2}vo(e,t)}}function h_(e,t){if(!(!((u=e.length)>0)||!((l=(o=e[t[0]]).length)>0))){for(var r=0,n=1,o,l,u;n<l;++n){for(var f=0,p=0,h=0;f<u;++f){for(var m=e[t[f]],v=m[n][1]||0,b=m[n-1][1]||0,w=(v-b)/2,A=0;A<f;++A){var j=e[t[A]],S=j[n][1]||0,E=j[n-1][1]||0;w+=S-E}p+=v,h+=w*v}o[n-1][1]+=o[n-1][0]=r,p&&(r-=h/p)}o[n-1][1]+=o[n-1][0]=r,vo(e,t)}}var Oh={},Eh={},sw;function m_(){return sw||(sw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==="__proto__"}e.isUnsafeProperty=t})(Eh)),Eh}var kh={},cw;function JA(){return cw||(cw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){switch(typeof r){case"number":case"symbol":return!1;case"string":return r.includes(".")||r.includes("[")||r.includes("]")}}e.isDeepKey=t})(kh)),kh}var Nh={},uw;function S0(){return uw||(uw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="string"||typeof r=="symbol"?r:Object.is(r?.valueOf?.(),-0)?"-0":String(r)}e.toKey=t})(Nh)),Nh}var Ch={},Th={},dw;function g_(){return dw||(dw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){if(r==null)return"";if(typeof r=="string")return r;if(Array.isArray(r))return r.map(t).join(",");const n=String(r);return n==="0"&&Object.is(Number(r),-0)?"-0":n}e.toString=t})(Th)),Th}var fw;function A0(){return fw||(fw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=g_(),r=S0();function n(o){if(Array.isArray(o))return o.map(r.toKey);if(typeof o=="symbol")return[o];o=t.toString(o);const l=[],u=o.length;if(u===0)return l;let f=0,p="",h="",m=!1;for(o.charCodeAt(0)===46&&(l.push(""),f++);f<u;){const v=o[f];h?v==="\\"&&f+1<u?(f++,p+=o[f]):v===h?h="":p+=v:m?v==='"'||v==="'"?h=v:v==="]"?(m=!1,l.push(p),p=""):p+=v:v==="["?(m=!0,p&&(l.push(p),p="")):v==="."?p&&(l.push(p),p=""):p+=v,f++}return p&&l.push(p),l}e.toPath=n})(Ch)),Ch}var pw;function O0(){return pw||(pw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=m_(),r=JA(),n=S0(),o=A0();function l(f,p,h){if(f==null)return h;switch(typeof p){case"string":{if(t.isUnsafeProperty(p))return h;const m=f[p];return m===void 0?r.isDeepKey(p)?l(f,o.toPath(p),h):h:m}case"number":case"symbol":{typeof p=="number"&&(p=n.toKey(p));const m=f[p];return m===void 0?h:m}default:{if(Array.isArray(p))return u(f,p,h);if(Object.is(p?.valueOf(),-0)?p="-0":p=String(p),t.isUnsafeProperty(p))return h;const m=f[p];return m===void 0?h:m}}}function u(f,p,h){if(p.length===0)return h;let m=f;for(let v=0;v<p.length;v++){if(m==null||t.isUnsafeProperty(p[v]))return h;m=m[p[v]]}return m===void 0?h:m}e.get=l})(Oh)),Oh}var Mh,hw;function v_(){return hw||(hw=1,Mh=O0().get),Mh}var x_=v_();const xo=Fn(x_);var fr=e=>e===0?0:e>0?1:-1,nn=e=>typeof e=="number"&&e!=+e,Hn=e=>typeof e=="string"&&e.indexOf("%")===e.length-1,ue=e=>(typeof e=="number"||e instanceof Number)&&!nn(e),gn=e=>ue(e)||typeof e=="string",y_=0,Ql=e=>{var t=++y_;return"".concat(e||"").concat(t)},an=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!ue(t)&&typeof t!="string")return n;var l;if(Hn(t)){if(r==null)return n;var u=t.indexOf("%");l=r*parseFloat(t.slice(0,u))/100}else l=+t;return nn(l)&&(l=n),o&&r!=null&&l>r&&(l=r),l},eO=e=>{if(!Array.isArray(e))return!1;for(var t=e.length,r={},n=0;n<t;n++)if(!r[e[n]])r[e[n]]=!0;else return!0;return!1};function lt(e,t,r){return ue(e)&&ue(t)?e+r*(t-e):t}function tO(e,t,r){if(!(!e||!e.length))return e.find(n=>n&&(typeof t=="function"?t(n):xo(n,t))===r)}var rt=e=>e===null||typeof e>"u",hs=e=>rt(e)?e:"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));function b_(e){return e!=null}function To(){}var w_=["type","size","sizeType"];function pg(){return pg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pg.apply(null,arguments)}function mw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function gw(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?mw(Object(r),!0).forEach(function(n){j_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):mw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function j_(e,t,r){return(t=S_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S_(e){var t=A_(e,"string");return typeof t=="symbol"?t:t+""}function A_(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function O_(e,t){if(e==null)return{};var r,n,o=E_(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function E_(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var rO={symbolCircle:j0,symbolCross:$8,symbolDiamond:H8,symbolSquare:Y8,symbolStar:V8,symbolTriangle:X8,symbolWye:Z8},k_=Math.PI/180,N_=e=>{var t="symbol".concat(hs(e));return rO[t]||j0},C_=(e,t,r)=>{if(t==="area")return e;switch(r){case"cross":return 5*e*e/9;case"diamond":return .5*e*e/Math.sqrt(3);case"square":return e*e;case"star":{var n=18*k_;return 1.25*e*e*(Math.tan(n)-Math.tan(n*2)*Math.tan(n)**2)}case"triangle":return Math.sqrt(3)*e*e/4;case"wye":return(21-10*Math.sqrt(3))*e*e/8;default:return Math.PI*e*e/4}},T_=(e,t)=>{rO["symbol".concat(hs(e))]=t},E0=e=>{var{type:t="circle",size:r=64,sizeType:n="area"}=e,o=O_(e,w_),l=gw(gw({},o),{},{type:t,size:r,sizeType:n}),u="circle";typeof t=="string"&&(u=t);var f=()=>{var b=N_(u),w=Q8().type(b).size(C_(r,n,u)),A=w();if(A!==null)return A},{className:p,cx:h,cy:m}=l,v=rr(l);return ue(h)&&ue(m)&&ue(r)?y.createElement("path",pg({},v,{className:qe("recharts-symbols",p),transform:"translate(".concat(h,", ").concat(m,")"),d:f()})):null};E0.registerSymbol=T_;var nO=e=>"radius"in e&&"startAngle"in e&&"endAngle"in e,k0=(e,t)=>{if(!e||typeof e=="function"||typeof e=="boolean")return null;var r=e;if(y.isValidElement(e)&&(r=e.props),typeof r!="object"&&typeof r!="function")return null;var n={};return Object.keys(r).forEach(o=>{x0(o)&&(n[o]=(l=>r[o](r,l)))}),n},M_=(e,t,r)=>n=>(e(t,r,n),null),xd=(e,t,r)=>{if(e===null||typeof e!="object"&&typeof e!="function")return null;var n=null;return Object.keys(e).forEach(o=>{var l=e[o];x0(o)&&typeof l=="function"&&(n||(n={}),n[o]=M_(l,t,r))}),n};function vw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function __(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?vw(Object(r),!0).forEach(function(n){P_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):vw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function P_(e,t,r){return(t=D_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D_(e){var t=z_(e,"string");return typeof t=="symbol"?t:t+""}function z_(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Yt(e,t){var r=__({},e),n=t,o=Object.keys(t),l=o.reduce((u,f)=>(u[f]===void 0&&n[f]!==void 0&&(u[f]=n[f]),u),r);return l}function bu(){return bu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bu.apply(null,arguments)}function xw(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function R_(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xw(Object(r),!0).forEach(function(n){L_(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xw(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function L_(e,t,r){return(t=B_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B_(e){var t=I_(e,"string");return typeof t=="symbol"?t:t+""}function I_(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ur=32,q_={align:"center",iconSize:14,inactiveColor:"#ccc",layout:"horizontal",verticalAlign:"middle"};function $_(e){var{data:t,iconType:r,inactiveColor:n}=e,o=Ur/2,l=Ur/6,u=Ur/3,f=t.inactive?n:t.color,p=r??t.type;if(p==="none")return null;if(p==="plainline"){var h;return y.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:(h=t.payload)===null||h===void 0?void 0:h.strokeDasharray,x1:0,y1:o,x2:Ur,y2:o,className:"recharts-legend-icon"})}if(p==="line")return y.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(o,"h").concat(u,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(2*u,",").concat(o,`
            H`).concat(Ur,"M").concat(2*u,",").concat(o,`
            A`).concat(l,",").concat(l,",0,1,1,").concat(u,",").concat(o),className:"recharts-legend-icon"});if(p==="rect")return y.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(Ur/8,"h").concat(Ur,"v").concat(Ur*3/4,"h").concat(-Ur,"z"),className:"recharts-legend-icon"});if(y.isValidElement(t.legendIcon)){var m=R_({},t);return delete m.legendIcon,y.cloneElement(t.legendIcon,m)}return y.createElement(E0,{fill:f,cx:o,cy:o,size:Ur,sizeType:"diameter",type:p})}function U_(e){var{payload:t,iconSize:r,layout:n,formatter:o,inactiveColor:l,iconType:u}=e,f={x:0,y:0,width:Ur,height:Ur},p={display:n==="horizontal"?"inline-block":"block",marginRight:10},h={display:"inline-block",verticalAlign:"middle",marginRight:4};return t.map((m,v)=>{var b=m.formatter||o,w=qe({"recharts-legend-item":!0,["legend-item-".concat(v)]:!0,inactive:m.inactive});if(m.type==="none")return null;var A=m.inactive?l:m.color,j=b?b(m.value,m,v):m.value;return y.createElement("li",bu({className:w,style:p,key:"legend-item-".concat(v)},xd(e,m,v)),y.createElement(y0,{width:r,height:r,viewBox:f,style:h,"aria-label":"".concat(j," legend icon")},y.createElement($_,{data:m,iconType:u,inactiveColor:l})),y.createElement("span",{className:"recharts-legend-item-text",style:{color:A}},j))})}var H_=e=>{var t=Yt(e,q_),{payload:r,layout:n,align:o}=t;if(!r||!r.length)return null;var l={padding:0,margin:0,textAlign:n==="horizontal"?o:"left"};return y.createElement("ul",{className:"recharts-default-legend",style:l},y.createElement(U_,bu({},t,{payload:r})))},_h={},Ph={},yw;function Y_(){return yw||(yw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){const o=new Map;for(let l=0;l<r.length;l++){const u=r[l],f=n(u);o.has(f)||o.set(f,u)}return Array.from(o.values())}e.uniqBy=t})(Ph)),Ph}var Dh={},bw;function aO(){return bw||(bw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r}e.identity=t})(Dh)),Dh}var zh={},Rh={},Lh={},ww;function G_(){return ww||(ww=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Number.isSafeInteger(r)&&r>=0}e.isLength=t})(Lh)),Lh}var jw;function N0(){return jw||(jw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=G_();function r(n){return n!=null&&typeof n!="function"&&t.isLength(n.length)}e.isArrayLike=r})(Rh)),Rh}var Bh={},Sw;function K_(){return Sw||(Sw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="object"&&r!==null}e.isObjectLike=t})(Bh)),Bh}var Aw;function W_(){return Aw||(Aw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=N0(),r=K_();function n(o){return r.isObjectLike(o)&&t.isArrayLike(o)}e.isArrayLikeObject=n})(zh)),zh}var Ih={},qh={},Ow;function V_(){return Ow||(Ow=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=O0();function r(n){return function(o){return t.get(o,n)}}e.property=r})(qh)),qh}var $h={},Uh={},Hh={},Yh={},Ew;function iO(){return Ew||(Ew=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r!==null&&(typeof r=="object"||typeof r=="function")}e.isObject=t})(Yh)),Yh}var Gh={},kw;function oO(){return kw||(kw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null||typeof r!="object"&&typeof r!="function"}e.isPrimitive=t})(Gh)),Gh}var Kh={},Nw;function lO(){return Nw||(Nw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n){return r===n||Number.isNaN(r)&&Number.isNaN(n)}e.eq=t})(Kh)),Kh}var Cw;function X_(){return Cw||(Cw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=iO(),r=oO(),n=lO();function o(m,v,b){return typeof b!="function"?o(m,v,()=>{}):l(m,v,function w(A,j,S,E,C,N){const _=b(A,j,S,E,C,N);return _!==void 0?!!_:l(A,j,w,N)},new Map)}function l(m,v,b,w){if(v===m)return!0;switch(typeof v){case"object":return u(m,v,b,w);case"function":return Object.keys(v).length>0?l(m,{...v},b,w):n.eq(m,v);default:return t.isObject(m)?typeof v=="string"?v==="":!0:n.eq(m,v)}}function u(m,v,b,w){if(v==null)return!0;if(Array.isArray(v))return p(m,v,b,w);if(v instanceof Map)return f(m,v,b,w);if(v instanceof Set)return h(m,v,b,w);const A=Object.keys(v);if(m==null)return A.length===0;if(A.length===0)return!0;if(w?.has(v))return w.get(v)===m;w?.set(v,m);try{for(let j=0;j<A.length;j++){const S=A[j];if(!r.isPrimitive(m)&&!(S in m)||v[S]===void 0&&m[S]!==void 0||v[S]===null&&m[S]!==null||!b(m[S],v[S],S,m,v,w))return!1}return!0}finally{w?.delete(v)}}function f(m,v,b,w){if(v.size===0)return!0;if(!(m instanceof Map))return!1;for(const[A,j]of v.entries()){const S=m.get(A);if(b(S,j,A,m,v,w)===!1)return!1}return!0}function p(m,v,b,w){if(v.length===0)return!0;if(!Array.isArray(m))return!1;const A=new Set;for(let j=0;j<v.length;j++){const S=v[j];let E=!1;for(let C=0;C<m.length;C++){if(A.has(C))continue;const N=m[C];let _=!1;if(b(N,S,j,m,v,w)&&(_=!0),_){A.add(C),E=!0;break}}if(!E)return!1}return!0}function h(m,v,b,w){return v.size===0?!0:m instanceof Set?p([...m],[...v],b,w):!1}e.isMatchWith=o,e.isSetMatch=h})(Hh)),Hh}var Tw;function sO(){return Tw||(Tw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=X_();function r(n,o){return t.isMatchWith(n,o,()=>{})}e.isMatch=r})(Uh)),Uh}var Wh={},Vh={},Xh={},Mw;function F_(){return Mw||(Mw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Object.getOwnPropertySymbols(r).filter(n=>Object.prototype.propertyIsEnumerable.call(r,n))}e.getSymbols=t})(Xh)),Xh}var Fh={},_w;function cO(){return _w||(_w=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(r)}e.getTag=t})(Fh)),Fh}var Zh={},Pw;function uO(){return Pw||(Pw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t="[object RegExp]",r="[object String]",n="[object Number]",o="[object Boolean]",l="[object Arguments]",u="[object Symbol]",f="[object Date]",p="[object Map]",h="[object Set]",m="[object Array]",v="[object Function]",b="[object ArrayBuffer]",w="[object Object]",A="[object Error]",j="[object DataView]",S="[object Uint8Array]",E="[object Uint8ClampedArray]",C="[object Uint16Array]",N="[object Uint32Array]",_="[object BigUint64Array]",T="[object Int8Array]",z="[object Int16Array]",U="[object Int32Array]",X="[object BigInt64Array]",ee="[object Float32Array]",ae="[object Float64Array]";e.argumentsTag=l,e.arrayBufferTag=b,e.arrayTag=m,e.bigInt64ArrayTag=X,e.bigUint64ArrayTag=_,e.booleanTag=o,e.dataViewTag=j,e.dateTag=f,e.errorTag=A,e.float32ArrayTag=ee,e.float64ArrayTag=ae,e.functionTag=v,e.int16ArrayTag=z,e.int32ArrayTag=U,e.int8ArrayTag=T,e.mapTag=p,e.numberTag=n,e.objectTag=w,e.regexpTag=t,e.setTag=h,e.stringTag=r,e.symbolTag=u,e.uint16ArrayTag=C,e.uint32ArrayTag=N,e.uint8ArrayTag=S,e.uint8ClampedArrayTag=E})(Zh)),Zh}var Qh={},Dw;function Z_(){return Dw||(Dw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}e.isTypedArray=t})(Qh)),Qh}var zw;function dO(){return zw||(zw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=F_(),r=cO(),n=uO(),o=oO(),l=Z_();function u(m,v){return f(m,void 0,m,new Map,v)}function f(m,v,b,w=new Map,A=void 0){const j=A?.(m,v,b,w);if(j!==void 0)return j;if(o.isPrimitive(m))return m;if(w.has(m))return w.get(m);if(Array.isArray(m)){const S=new Array(m.length);w.set(m,S);for(let E=0;E<m.length;E++)S[E]=f(m[E],E,b,w,A);return Object.hasOwn(m,"index")&&(S.index=m.index),Object.hasOwn(m,"input")&&(S.input=m.input),S}if(m instanceof Date)return new Date(m.getTime());if(m instanceof RegExp){const S=new RegExp(m.source,m.flags);return S.lastIndex=m.lastIndex,S}if(m instanceof Map){const S=new Map;w.set(m,S);for(const[E,C]of m)S.set(E,f(C,E,b,w,A));return S}if(m instanceof Set){const S=new Set;w.set(m,S);for(const E of m)S.add(f(E,void 0,b,w,A));return S}if(typeof Buffer<"u"&&Buffer.isBuffer(m))return m.subarray();if(l.isTypedArray(m)){const S=new(Object.getPrototypeOf(m)).constructor(m.length);w.set(m,S);for(let E=0;E<m.length;E++)S[E]=f(m[E],E,b,w,A);return S}if(m instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&m instanceof SharedArrayBuffer)return m.slice(0);if(m instanceof DataView){const S=new DataView(m.buffer.slice(0),m.byteOffset,m.byteLength);return w.set(m,S),p(S,m,b,w,A),S}if(typeof File<"u"&&m instanceof File){const S=new File([m],m.name,{type:m.type});return w.set(m,S),p(S,m,b,w,A),S}if(typeof Blob<"u"&&m instanceof Blob){const S=new Blob([m],{type:m.type});return w.set(m,S),p(S,m,b,w,A),S}if(m instanceof Error){const S=new m.constructor;return w.set(m,S),S.message=m.message,S.name=m.name,S.stack=m.stack,S.cause=m.cause,p(S,m,b,w,A),S}if(m instanceof Boolean){const S=new Boolean(m.valueOf());return w.set(m,S),p(S,m,b,w,A),S}if(m instanceof Number){const S=new Number(m.valueOf());return w.set(m,S),p(S,m,b,w,A),S}if(m instanceof String){const S=new String(m.valueOf());return w.set(m,S),p(S,m,b,w,A),S}if(typeof m=="object"&&h(m)){const S=Object.create(Object.getPrototypeOf(m));return w.set(m,S),p(S,m,b,w,A),S}return m}function p(m,v,b=m,w,A){const j=[...Object.keys(v),...t.getSymbols(v)];for(let S=0;S<j.length;S++){const E=j[S],C=Object.getOwnPropertyDescriptor(m,E);(C==null||C.writable)&&(m[E]=f(v[E],E,b,w,A))}}function h(m){switch(r.getTag(m)){case n.argumentsTag:case n.arrayTag:case n.arrayBufferTag:case n.dataViewTag:case n.booleanTag:case n.dateTag:case n.float32ArrayTag:case n.float64ArrayTag:case n.int8ArrayTag:case n.int16ArrayTag:case n.int32ArrayTag:case n.mapTag:case n.numberTag:case n.objectTag:case n.regexpTag:case n.setTag:case n.stringTag:case n.symbolTag:case n.uint8ArrayTag:case n.uint8ClampedArrayTag:case n.uint16ArrayTag:case n.uint32ArrayTag:return!0;default:return!1}}e.cloneDeepWith=u,e.cloneDeepWithImpl=f,e.copyProperties=p})(Vh)),Vh}var Rw;function Q_(){return Rw||(Rw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=dO();function r(n){return t.cloneDeepWithImpl(n,void 0,n,new Map,void 0)}e.cloneDeep=r})(Wh)),Wh}var Lw;function J_(){return Lw||(Lw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=sO(),r=Q_();function n(o){return o=r.cloneDeep(o),l=>t.isMatch(l,o)}e.matches=n})($h)),$h}var Jh={},em={},tm={},Bw;function eP(){return Bw||(Bw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=dO(),r=uO();function n(o,l){return t.cloneDeepWith(o,(u,f,p,h)=>{const m=l?.(u,f,p,h);if(m!==void 0)return m;if(typeof o=="object")switch(Object.prototype.toString.call(o)){case r.numberTag:case r.stringTag:case r.booleanTag:{const v=new o.constructor(o?.valueOf());return t.copyProperties(v,o),v}case r.argumentsTag:{const v={};return t.copyProperties(v,o),v.length=o.length,v[Symbol.iterator]=o[Symbol.iterator],v}default:return}})}e.cloneDeepWith=n})(tm)),tm}var Iw;function tP(){return Iw||(Iw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=eP();function r(n){return t.cloneDeepWith(n)}e.cloneDeep=r})(em)),em}var rm={},nm={},qw;function fO(){return qw||(qw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=/^(?:0|[1-9]\d*)$/;function r(n,o=Number.MAX_SAFE_INTEGER){switch(typeof n){case"number":return Number.isInteger(n)&&n>=0&&n<o;case"symbol":return!1;case"string":return t.test(n)}}e.isIndex=r})(nm)),nm}var am={},$w;function rP(){return $w||($w=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=cO();function r(n){return n!==null&&typeof n=="object"&&t.getTag(n)==="[object Arguments]"}e.isArguments=r})(am)),am}var Uw;function nP(){return Uw||(Uw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=JA(),r=fO(),n=rP(),o=A0();function l(u,f){let p;if(Array.isArray(f)?p=f:typeof f=="string"&&t.isDeepKey(f)&&u?.[f]==null?p=o.toPath(f):p=[f],p.length===0)return!1;let h=u;for(let m=0;m<p.length;m++){const v=p[m];if((h==null||!Object.hasOwn(h,v))&&!((Array.isArray(h)||n.isArguments(h))&&r.isIndex(v)&&v<h.length))return!1;h=h[v]}return!0}e.has=l})(rm)),rm}var Hw;function aP(){return Hw||(Hw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=sO(),r=S0(),n=tP(),o=O0(),l=nP();function u(f,p){switch(typeof f){case"object":{Object.is(f?.valueOf(),-0)&&(f="-0");break}case"number":{f=r.toKey(f);break}}return p=n.cloneDeep(p),function(h){const m=o.get(h,f);return m===void 0?l.has(h,f):p===void 0?m===void 0:t.isMatch(m,p)}}e.matchesProperty=u})(Jh)),Jh}var Yw;function iP(){return Yw||(Yw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=aO(),r=V_(),n=J_(),o=aP();function l(u){if(u==null)return t.identity;switch(typeof u){case"function":return u;case"object":return Array.isArray(u)&&u.length===2?o.matchesProperty(u[0],u[1]):n.matches(u);case"string":case"symbol":case"number":return r.property(u)}}e.iteratee=l})(Ih)),Ih}var Gw;function oP(){return Gw||(Gw=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Y_(),r=aO(),n=W_(),o=iP();function l(u,f=r.identity){return n.isArrayLikeObject(u)?t.uniqBy(Array.from(u),o.iteratee(f)):[]}e.uniqBy=l})(_h)),_h}var im,Kw;function lP(){return Kw||(Kw=1,im=oP().uniqBy),im}var sP=lP();const Ww=Fn(sP);function pO(e,t,r){return t===!0?Ww(e,r):typeof t=="function"?Ww(e,t):e}var om={exports:{}},lm={},sm={exports:{}},cm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vw;function cP(){if(Vw)return cm;Vw=1;var e=Oo();function t(v,b){return v===b&&(v!==0||1/v===1/b)||v!==v&&b!==b}var r=typeof Object.is=="function"?Object.is:t,n=e.useState,o=e.useEffect,l=e.useLayoutEffect,u=e.useDebugValue;function f(v,b){var w=b(),A=n({inst:{value:w,getSnapshot:b}}),j=A[0].inst,S=A[1];return l(function(){j.value=w,j.getSnapshot=b,p(j)&&S({inst:j})},[v,w,b]),o(function(){return p(j)&&S({inst:j}),v(function(){p(j)&&S({inst:j})})},[v]),u(w),w}function p(v){var b=v.getSnapshot;v=v.value;try{var w=b();return!r(v,w)}catch{return!0}}function h(v,b){return b()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:f;return cm.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:m,cm}var Xw;function uP(){return Xw||(Xw=1,sm.exports=cP()),sm.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fw;function dP(){if(Fw)return lm;Fw=1;var e=Oo(),t=uP();function r(h,m){return h===m&&(h!==0||1/h===1/m)||h!==h&&m!==m}var n=typeof Object.is=="function"?Object.is:r,o=t.useSyncExternalStore,l=e.useRef,u=e.useEffect,f=e.useMemo,p=e.useDebugValue;return lm.useSyncExternalStoreWithSelector=function(h,m,v,b,w){var A=l(null);if(A.current===null){var j={hasValue:!1,value:null};A.current=j}else j=A.current;A=f(function(){function E(z){if(!C){if(C=!0,N=z,z=b(z),w!==void 0&&j.hasValue){var U=j.value;if(w(U,z))return _=U}return _=z}if(U=_,n(N,z))return U;var X=b(z);return w!==void 0&&w(U,X)?(N=z,U):(N=z,_=X)}var C=!1,N,_,T=v===void 0?null:v;return[function(){return E(m())},T===null?void 0:function(){return E(T())}]},[m,v,b,w]);var S=o(h,A[0],A[1]);return u(function(){j.hasValue=!0,j.value=S},[S]),p(S),S},lm}var Zw;function fP(){return Zw||(Zw=1,om.exports=dP()),om.exports}var pP=fP(),C0=y.createContext(null),hP=e=>e,at=()=>{var e=y.useContext(C0);return e?e.store.dispatch:hP},du=()=>{},mP=()=>du,gP=(e,t)=>e===t;function de(e){var t=y.useContext(C0);return pP.useSyncExternalStoreWithSelector(t?t.subscription.addNestedSub:mP,t?t.store.getState:du,t?t.store.getState:du,t?e:du,gP)}function vP(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function xP(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function yP(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var Qw=e=>Array.isArray(e)?e:[e];function bP(e){const t=Array.isArray(e[0])?e[0]:e;return yP(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function wP(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}var jP=class{constructor(e){this.value=e}deref(){return this.value}},SP=typeof WeakRef<"u"?WeakRef:jP,AP=0,Jw=1;function Vc(){return{s:AP,v:void 0,o:null,p:null}}function hO(e,t={}){let r=Vc();const{resultEqualityCheck:n}=t;let o,l=0;function u(){let f=r;const{length:p}=arguments;for(let v=0,b=p;v<b;v++){const w=arguments[v];if(typeof w=="function"||typeof w=="object"&&w!==null){let A=f.o;A===null&&(f.o=A=new WeakMap);const j=A.get(w);j===void 0?(f=Vc(),A.set(w,f)):f=j}else{let A=f.p;A===null&&(f.p=A=new Map);const j=A.get(w);j===void 0?(f=Vc(),A.set(w,f)):f=j}}const h=f;let m;if(f.s===Jw)m=f.v;else if(m=e.apply(null,arguments),l++,n){const v=o?.deref?.()??o;v!=null&&n(v,m)&&(m=v,l!==0&&l--),o=typeof m=="object"&&m!==null||typeof m=="function"?new SP(m):m}return h.s=Jw,h.v=m,m}return u.clearCache=()=>{r=Vc(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function OP(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...o)=>{let l=0,u=0,f,p={},h=o.pop();typeof h=="object"&&(p=h,h=o.pop()),vP(h,`createSelector expects an output function after the inputs, but received: [${typeof h}]`);const m={...r,...p},{memoize:v,memoizeOptions:b=[],argsMemoize:w=hO,argsMemoizeOptions:A=[]}=m,j=Qw(b),S=Qw(A),E=bP(o),C=v(function(){return l++,h.apply(null,arguments)},...j),N=w(function(){u++;const T=wP(E,arguments);return f=C.apply(null,T),f},...S);return Object.assign(N,{resultFunc:h,memoizedResultFunc:C,dependencies:E,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:v,argsMemoize:w})};return Object.assign(n,{withTypes:()=>n}),n}var H=OP(hO),EP=Object.assign((e,t=H)=>{xP(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(l=>e[l]);return t(n,(...l)=>l.reduce((u,f,p)=>(u[r[p]]=f,u),{}))},{withTypes:()=>EP}),um={},dm={},fm={},e2;function kP(){return e2||(e2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(n){return typeof n=="symbol"?1:n===null?2:n===void 0?3:n!==n?4:0}const r=(n,o,l)=>{if(n!==o){const u=t(n),f=t(o);if(u===f&&u===0){if(n<o)return l==="desc"?1:-1;if(n>o)return l==="desc"?-1:1}return l==="desc"?f-u:u-f}return 0};e.compareValues=r})(fm)),fm}var pm={},hm={},t2;function mO(){return t2||(t2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return typeof r=="symbol"||r instanceof Symbol}e.isSymbol=t})(hm)),hm}var r2;function NP(){return r2||(r2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=mO(),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function o(l,u){return Array.isArray(l)?!1:typeof l=="number"||typeof l=="boolean"||l==null||t.isSymbol(l)?!0:typeof l=="string"&&(n.test(l)||!r.test(l))||u!=null&&Object.hasOwn(u,l)}e.isKey=o})(pm)),pm}var n2;function CP(){return n2||(n2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=kP(),r=NP(),n=A0();function o(l,u,f,p){if(l==null)return[];f=p?void 0:f,Array.isArray(l)||(l=Object.values(l)),Array.isArray(u)||(u=u==null?[null]:[u]),u.length===0&&(u=[null]),Array.isArray(f)||(f=f==null?[]:[f]),f=f.map(w=>String(w));const h=(w,A)=>{let j=w;for(let S=0;S<A.length&&j!=null;++S)j=j[A[S]];return j},m=(w,A)=>A==null||w==null?A:typeof w=="object"&&"key"in w?Object.hasOwn(A,w.key)?A[w.key]:h(A,w.path):typeof w=="function"?w(A):Array.isArray(w)?h(A,w):typeof A=="object"?A[w]:A,v=u.map(w=>(Array.isArray(w)&&w.length===1&&(w=w[0]),w==null||typeof w=="function"||Array.isArray(w)||r.isKey(w)?w:{key:w,path:n.toPath(w)}));return l.map(w=>({original:w,criteria:v.map(A=>m(A,w))})).slice().sort((w,A)=>{for(let j=0;j<v.length;j++){const S=t.compareValues(w.criteria[j],A.criteria[j],f[j]);if(S!==0)return S}return 0}).map(w=>w.original)}e.orderBy=o})(dm)),dm}var mm={},a2;function TP(){return a2||(a2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n=1){const o=[],l=Math.floor(n),u=(f,p)=>{for(let h=0;h<f.length;h++){const m=f[h];Array.isArray(m)&&p<l?u(m,p+1):o.push(m)}};return u(r,0),o}e.flatten=t})(mm)),mm}var gm={},i2;function gO(){return i2||(i2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=fO(),r=N0(),n=iO(),o=lO();function l(u,f,p){return n.isObject(p)&&(typeof f=="number"&&r.isArrayLike(p)&&t.isIndex(f)&&f<p.length||typeof f=="string"&&f in p)?o.eq(p[f],u):!1}e.isIterateeCall=l})(gm)),gm}var o2;function MP(){return o2||(o2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=CP(),r=TP(),n=gO();function o(l,...u){const f=u.length;return f>1&&n.isIterateeCall(l,u[0],u[1])?u=[]:f>2&&n.isIterateeCall(u[0],u[1],u[2])&&(u=[u[0]]),t.orderBy(l,r.flatten(u),["asc"])}e.sortBy=o})(um)),um}var vm,l2;function _P(){return l2||(l2=1,vm=MP().sortBy),vm}var PP=_P();const yd=Fn(PP);var vO=e=>e.legend.settings,DP=e=>e.legend.size,zP=e=>e.legend.payload,RP=H([zP,vO],(e,t)=>{var{itemSorter:r}=t,n=e.flat(1);return r?yd(n,r):n});function LP(){return de(RP)}var Xc=1;function xO(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],[t,r]=y.useState({height:0,left:0,top:0,width:0}),n=y.useCallback(o=>{if(o!=null){var l=o.getBoundingClientRect(),u={height:l.height,left:l.left,top:l.top,width:l.width};(Math.abs(u.height-t.height)>Xc||Math.abs(u.left-t.left)>Xc||Math.abs(u.top-t.top)>Xc||Math.abs(u.width-t.width)>Xc)&&r({height:u.height,left:u.left,top:u.top,width:u.width})}},[t.width,t.height,t.top,t.left,...e]);return[t,n]}function Ut(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var BP=typeof Symbol=="function"&&Symbol.observable||"@@observable",s2=BP,xm=()=>Math.random().toString(36).substring(7).split("").join("."),IP={INIT:`@@redux/INIT${xm()}`,REPLACE:`@@redux/REPLACE${xm()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${xm()}`},wu=IP;function T0(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function yO(e,t,r){if(typeof e!="function")throw new Error(Ut(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(Ut(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(Ut(1));return r(yO)(e,t)}let n=e,o=t,l=new Map,u=l,f=0,p=!1;function h(){u===l&&(u=new Map,l.forEach((S,E)=>{u.set(E,S)}))}function m(){if(p)throw new Error(Ut(3));return o}function v(S){if(typeof S!="function")throw new Error(Ut(4));if(p)throw new Error(Ut(5));let E=!0;h();const C=f++;return u.set(C,S),function(){if(E){if(p)throw new Error(Ut(6));E=!1,h(),u.delete(C),l=null}}}function b(S){if(!T0(S))throw new Error(Ut(7));if(typeof S.type>"u")throw new Error(Ut(8));if(typeof S.type!="string")throw new Error(Ut(17));if(p)throw new Error(Ut(9));try{p=!0,o=n(o,S)}finally{p=!1}return(l=u).forEach(C=>{C()}),S}function w(S){if(typeof S!="function")throw new Error(Ut(10));n=S,b({type:wu.REPLACE})}function A(){const S=v;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(Ut(11));function C(){const _=E;_.next&&_.next(m())}return C(),{unsubscribe:S(C)}},[s2](){return this}}}return b({type:wu.INIT}),{dispatch:b,subscribe:v,getState:m,replaceReducer:w,[s2]:A}}function qP(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:wu.INIT})>"u")throw new Error(Ut(12));if(typeof r(void 0,{type:wu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ut(13))})}function bO(e){const t=Object.keys(e),r={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(r[u]=e[u])}const n=Object.keys(r);let o;try{qP(r)}catch(l){o=l}return function(u={},f){if(o)throw o;let p=!1;const h={};for(let m=0;m<n.length;m++){const v=n[m],b=r[v],w=u[v],A=b(w,f);if(typeof A>"u")throw f&&f.type,new Error(Ut(14));h[v]=A,p=p||A!==w}return p=p||n.length!==Object.keys(u).length,p?h:u}}function ju(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function $P(...e){return t=>(r,n)=>{const o=t(r,n);let l=()=>{throw new Error(Ut(15))};const u={getState:o.getState,dispatch:(p,...h)=>l(p,...h)},f=e.map(p=>p(u));return l=ju(...f)(o.dispatch),{...o,dispatch:l}}}function wO(e){return T0(e)&&"type"in e&&typeof e.type=="string"}var jO=Symbol.for("immer-nothing"),c2=Symbol.for("immer-draftable"),Cr=Symbol.for("immer-state");function Jr(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Jl=Object.getPrototypeOf;function hi(e){return!!e&&!!e[Cr]}function Yn(e){return e?SO(e)||Array.isArray(e)||!!e[c2]||!!e.constructor?.[c2]||ms(e)||wd(e):!1}var UP=Object.prototype.constructor.toString(),u2=new WeakMap;function SO(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(r===Object)return!0;if(typeof r!="function")return!1;let n=u2.get(r);return n===void 0&&(n=Function.toString.call(r),u2.set(r,n)),n===UP}function Su(e,t,r=!0){bd(e)===0?(r?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((n,o)=>t(o,n,e))}function bd(e){const t=e[Cr];return t?t.type_:Array.isArray(e)?1:ms(e)?2:wd(e)?3:0}function hg(e,t){return bd(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function AO(e,t,r){const n=bd(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function HP(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ms(e){return e instanceof Map}function wd(e){return e instanceof Set}function ii(e){return e.copy_||e.base_}function mg(e,t){if(ms(e))return new Map(e);if(wd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=SO(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[Cr];let o=Reflect.ownKeys(n);for(let l=0;l<o.length;l++){const u=o[l],f=n[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(n[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Jl(e),n)}else{const n=Jl(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function M0(e,t=!1){return jd(e)||hi(e)||!Yn(e)||(bd(e)>1&&Object.defineProperties(e,{set:Fc,add:Fc,clear:Fc,delete:Fc}),Object.freeze(e),t&&Object.values(e).forEach(r=>M0(r,!0))),e}function YP(){Jr(2)}var Fc={value:YP};function jd(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var GP={};function mi(e){const t=GP[e];return t||Jr(0,e),t}var es;function OO(){return es}function KP(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function d2(e,t){t&&(mi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function gg(e){vg(e),e.drafts_.forEach(WP),e.drafts_=null}function vg(e){e===es&&(es=e.parent_)}function f2(e){return es=KP(es,e)}function WP(e){const t=e[Cr];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function p2(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[Cr].modified_&&(gg(t),Jr(4)),Yn(e)&&(e=Au(t,e),t.parent_||Ou(t,e)),t.patches_&&mi("Patches").generateReplacementPatches_(r[Cr].base_,e,t.patches_,t.inversePatches_)):e=Au(t,r,[]),gg(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==jO?e:void 0}function Au(e,t,r){if(jd(t))return t;const n=e.immer_.shouldUseStrictIteration(),o=t[Cr];if(!o)return Su(t,(l,u)=>h2(e,o,t,l,u,r),n),t;if(o.scope_!==e)return t;if(!o.modified_)return Ou(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Su(u,(p,h)=>h2(e,o,l,p,h,r,f),n),Ou(e,l,!1),r&&e.patches_&&mi("Patches").generatePatches_(o,r,e.patches_,e.inversePatches_)}return o.copy_}function h2(e,t,r,n,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=jd(o);if(!(f&&!u)){if(hi(o)){const p=l&&t&&t.type_!==3&&!hg(t.assigned_,n)?l.concat(n):void 0,h=Au(e,o,p);if(AO(r,n,h),hi(h))e.canAutoFreeze_=!1;else return}else u&&r.add(o);if(Yn(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[n]===o&&f)return;Au(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&(ms(r)?r.has(n):Object.prototype.propertyIsEnumerable.call(r,n))&&Ou(e,o)}}}function Ou(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&M0(t,r)}function VP(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:OO(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,l=_0;r&&(o=[n],l=ts);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return n.draft_=f,n.revoke_=u,f}var _0={get(e,t){if(t===Cr)return e;const r=ii(e);if(!hg(r,t))return XP(e,r,t);const n=r[t];return e.finalized_||!Yn(n)?n:n===ym(e.base_,t)?(bm(e),e.copy_[t]=yg(n,e)):n},has(e,t){return t in ii(e)},ownKeys(e){return Reflect.ownKeys(ii(e))},set(e,t,r){const n=EO(ii(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=ym(ii(e),t),l=o?.[Cr];if(l&&l.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(HP(r,o)&&(r!==void 0||hg(e.base_,t)))return!0;bm(e),xg(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return ym(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,bm(e),xg(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=ii(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){Jr(11)},getPrototypeOf(e){return Jl(e.base_)},setPrototypeOf(){Jr(12)}},ts={};Su(_0,(e,t)=>{ts[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ts.deleteProperty=function(e,t){return ts.set.call(this,e,t,void 0)};ts.set=function(e,t,r){return _0.set.call(this,e[0],t,r,e[0])};function ym(e,t){const r=e[Cr];return(r?ii(r):e)[t]}function XP(e,t,r){const n=EO(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function EO(e,t){if(!(t in e))return;let r=Jl(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Jl(r)}}function xg(e){e.modified_||(e.modified_=!0,e.parent_&&xg(e.parent_))}function bm(e){e.copy_||(e.copy_=mg(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var FP=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const l=r;r=t;const u=this;return function(p=l,...h){return u.produce(p,m=>r.call(this,m,...h))}}typeof r!="function"&&Jr(6),n!==void 0&&typeof n!="function"&&Jr(7);let o;if(Yn(t)){const l=f2(this),u=yg(t,void 0);let f=!0;try{o=r(u),f=!1}finally{f?gg(l):vg(l)}return d2(l,n),p2(o,l)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===jO&&(o=void 0),this.autoFreeze_&&M0(o,!0),n){const l=[],u=[];mi("Patches").generateReplacementPatches_(t,o,l,u),n(l,u)}return o}else Jr(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,p=>t(p,...f));let n,o;return[this.produce(t,r,(u,f)=>{n=u,o=f}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Yn(e)||Jr(8),hi(e)&&(e=qn(e));const t=f2(this),r=yg(e,void 0);return r[Cr].isManual_=!0,vg(t),r}finishDraft(e,t){const r=e&&e[Cr];(!r||!r.isManual_)&&Jr(9);const{scope_:n}=r;return d2(n,t),p2(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=mi("Patches").applyPatches_;return hi(e)?n(e,t):this.produce(e,o=>n(o,t))}};function yg(e,t){const r=ms(e)?mi("MapSet").proxyMap_(e,t):wd(e)?mi("MapSet").proxySet_(e,t):VP(e,t);return(t?t.scope_:OO()).drafts_.push(r),r}function qn(e){return hi(e)||Jr(10,e),kO(e)}function kO(e){if(!Yn(e)||jd(e))return e;const t=e[Cr];let r,n=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=mg(e,t.scope_.immer_.useStrictShallowCopy_),n=t.scope_.immer_.shouldUseStrictIteration()}else r=mg(e,!0);return Su(r,(o,l)=>{AO(r,o,kO(l))},n),t&&(t.finalized_=!1),r}var bg=new FP,NO=bg.produce,ZP=bg.setUseStrictIteration.bind(bg);function CO(e){return({dispatch:r,getState:n})=>o=>l=>typeof l=="function"?l(r,n,e):o(l)}var QP=CO(),JP=CO,eD=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ju:ju.apply(null,arguments)};function Gr(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(Nr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>wO(n)&&n.type===e,r}var TO=class Wl extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Wl.prototype)}static get[Symbol.species](){return Wl}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Wl(...t[0].concat(this)):new Wl(...t.concat(this))}};function m2(e){return Yn(e)?NO(e,()=>{}):e}function Zc(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function tD(e){return typeof e=="boolean"}var rD=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new TO;return r&&(tD(r)?u.push(QP):u.push(JP(r.extraArgument))),u},MO="RTK_autoBatch",St=()=>e=>({payload:e,meta:{[MO]:!0}}),g2=e=>t=>{setTimeout(t,e)},_O=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,l=!1,u=!1;const f=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:g2(10):e.type==="callback"?e.queueNotification:g2(e.timeout),h=()=>{u=!1,l&&(l=!1,f.forEach(m=>m()))};return Object.assign({},n,{subscribe(m){const v=()=>o&&m(),b=n.subscribe(v);return f.add(m),()=>{b(),f.delete(m)}},dispatch(m){try{return o=!m?.meta?.[MO],l=!o,l&&(u||(u=!0,p(h))),n.dispatch(m)}finally{o=!0}}})},nD=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new TO(e);return n&&o.push(_O(typeof n=="object"?n:void 0)),o};function aD(e){const t=rD(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof r=="function")f=r;else if(T0(r))f=bO(r);else throw new Error(Nr(1));let p;typeof n=="function"?p=n(t):p=t();let h=ju;o&&(h=eD({trace:!1,...typeof o=="object"&&o}));const m=$P(...p),v=nD(m);let b=typeof u=="function"?u(v):v();const w=h(...b);return yO(f,l,w)}function PO(e){const t={},r=[];let n;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(Nr(28));if(f in t)throw new Error(Nr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&r.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return r.push({matcher:l,reducer:u}),o},addDefaultCase(l){return n=l,o}};return e(o),[t,r,n]}ZP(!1);function iD(e){return typeof e=="function"}function oD(e,t){let[r,n,o]=PO(t),l;if(iD(e))l=()=>m2(e());else{const f=m2(e);l=()=>f}function u(f=l(),p){let h=[r[p.type],...n.filter(({matcher:m})=>m(p)).map(({reducer:m})=>m)];return h.filter(m=>!!m).length===0&&(h=[o]),h.reduce((m,v)=>{if(v)if(hi(m)){const w=v(m,p);return w===void 0?m:w}else{if(Yn(m))return NO(m,b=>v(b,p));{const b=v(m,p);if(b===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return b}}return m},f)}return u.getInitialState=l,u}var lD="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",sD=(e=21)=>{let t="",r=e;for(;r--;)t+=lD[Math.random()*64|0];return t},cD=Symbol.for("rtk-slice-createasyncthunk");function uD(e,t){return`${e}/${t}`}function dD({creators:e}={}){const t=e?.asyncThunk?.[cD];return function(n){const{name:o,reducerPath:l=o}=n;if(!o)throw new Error(Nr(11));const u=(typeof n.reducers=="function"?n.reducers(pD()):n.reducers)||{},f=Object.keys(u),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(N,_){const T=typeof N=="string"?N:N.type;if(!T)throw new Error(Nr(12));if(T in p.sliceCaseReducersByType)throw new Error(Nr(13));return p.sliceCaseReducersByType[T]=_,h},addMatcher(N,_){return p.sliceMatchers.push({matcher:N,reducer:_}),h},exposeAction(N,_){return p.actionCreators[N]=_,h},exposeCaseReducer(N,_){return p.sliceCaseReducersByName[N]=_,h}};f.forEach(N=>{const _=u[N],T={reducerName:N,type:uD(o,N),createNotation:typeof n.reducers=="function"};mD(_)?vD(T,_,h,t):hD(T,_,h)});function m(){const[N={},_=[],T=void 0]=typeof n.extraReducers=="function"?PO(n.extraReducers):[n.extraReducers],z={...N,...p.sliceCaseReducersByType};return oD(n.initialState,U=>{for(let X in z)U.addCase(X,z[X]);for(let X of p.sliceMatchers)U.addMatcher(X.matcher,X.reducer);for(let X of _)U.addMatcher(X.matcher,X.reducer);T&&U.addDefaultCase(T)})}const v=N=>N,b=new Map,w=new WeakMap;let A;function j(N,_){return A||(A=m()),A(N,_)}function S(){return A||(A=m()),A.getInitialState()}function E(N,_=!1){function T(U){let X=U[N];return typeof X>"u"&&_&&(X=Zc(w,T,S)),X}function z(U=v){const X=Zc(b,_,()=>new WeakMap);return Zc(X,U,()=>{const ee={};for(const[ae,F]of Object.entries(n.selectors??{}))ee[ae]=fD(F,U,()=>Zc(w,U,S),_);return ee})}return{reducerPath:N,getSelectors:z,get selectors(){return z(T)},selectSlice:T}}const C={name:o,reducer:j,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:S,...E(l),injectInto(N,{reducerPath:_,...T}={}){const z=_??l;return N.inject({reducerPath:z,reducer:j},T),{...C,...E(z,!0)}}};return C}}function fD(e,t,r,n){function o(l,...u){let f=t(l);return typeof f>"u"&&n&&(f=r()),e(f,...u)}return o.unwrapped=e,o}var hr=dD();function pD(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function hD({type:e,reducerName:t,createNotation:r},n,o){let l,u;if("reducer"in n){if(r&&!gD(n))throw new Error(Nr(17));l=n.reducer,u=n.prepare}else l=n;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?Gr(e,u):Gr(e))}function mD(e){return e._reducerDefinitionType==="asyncThunk"}function gD(e){return e._reducerDefinitionType==="reducerWithPrepare"}function vD({type:e,reducerName:t},r,n,o){if(!o)throw new Error(Nr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:p,settled:h,options:m}=r,v=o(e,l,m);n.exposeAction(t,v),u&&n.addCase(v.fulfilled,u),f&&n.addCase(v.pending,f),p&&n.addCase(v.rejected,p),h&&n.addMatcher(v.settled,h),n.exposeCaseReducer(t,{fulfilled:u||Qc,pending:f||Qc,rejected:p||Qc,settled:h||Qc})}function Qc(){}var xD="task",DO="listener",zO="completed",P0="cancelled",yD=`task-${P0}`,bD=`task-${zO}`,wg=`${DO}-${P0}`,wD=`${DO}-${zO}`,Sd=class{constructor(e){this.code=e,this.message=`${xD} ${P0} (reason: ${e})`}name="TaskAbortError";message},D0=(e,t)=>{if(typeof e!="function")throw new TypeError(Nr(32))},Eu=()=>{},RO=(e,t=Eu)=>(e.catch(t),e),LO=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),ui=(e,t)=>{const r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},di=e=>{if(e.aborted){const{reason:t}=e;throw new Sd(t)}};function BO(e,t){let r=Eu;return new Promise((n,o)=>{const l=()=>o(new Sd(e.reason));if(e.aborted){l();return}r=LO(e,l),t.finally(()=>r()).then(n,o)}).finally(()=>{r=Eu})}var jD=async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(r){return{status:r instanceof Sd?"cancelled":"rejected",error:r}}finally{t?.()}},ku=e=>t=>RO(BO(e,t).then(r=>(di(e),r))),IO=e=>{const t=ku(e);return r=>t(new Promise(n=>setTimeout(n,r)))},{assign:mo}=Object,v2={},Ad="listenerMiddleware",SD=(e,t)=>{const r=n=>LO(e,()=>ui(n,e.reason));return(n,o)=>{D0(n);const l=new AbortController;r(l);const u=jD(async()=>{di(e),di(l.signal);const f=await n({pause:ku(l.signal),delay:IO(l.signal),signal:l.signal});return di(l.signal),f},()=>ui(l,bD));return o?.autoJoin&&t.push(u.catch(Eu)),{result:ku(e)(u),cancel(){ui(l,yD)}}}},AD=(e,t)=>{const r=async(n,o)=>{di(t);let l=()=>{};const f=[new Promise((p,h)=>{let m=e({predicate:n,effect:(v,b)=>{b.unsubscribe(),p([v,b.getState(),b.getOriginalState()])}});l=()=>{m(),h()}})];o!=null&&f.push(new Promise(p=>setTimeout(p,o,null)));try{const p=await BO(t,Promise.race(f));return di(t),p}finally{l()}};return(n,o)=>RO(r(n,o))},qO=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:l}=e;if(t)o=Gr(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(Nr(21));return D0(l),{predicate:o,type:t,effect:l}},$O=mo(e=>{const{type:t,predicate:r,effect:n}=qO(e);return{id:sD(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(Nr(22))}}},{withTypes:()=>$O}),x2=(e,t)=>{const{type:r,effect:n,predicate:o}=qO(t);return Array.from(e.values()).find(l=>(typeof r=="string"?l.type===r:l.predicate===o)&&l.effect===n)},jg=e=>{e.pending.forEach(t=>{ui(t,wg)})},OD=(e,t)=>()=>{for(const r of t.keys())jg(r);e.clear()},y2=(e,t,r)=>{try{e(t,r)}catch(n){setTimeout(()=>{throw n},0)}},UO=mo(Gr(`${Ad}/add`),{withTypes:()=>UO}),ED=Gr(`${Ad}/removeAll`),HO=mo(Gr(`${Ad}/remove`),{withTypes:()=>HO}),kD=(...e)=>{console.error(`${Ad}/error`,...e)},gs=(e={})=>{const t=new Map,r=new Map,n=w=>{const A=r.get(w)??0;r.set(w,A+1)},o=w=>{const A=r.get(w)??1;A===1?r.delete(w):r.set(w,A-1)},{extra:l,onError:u=kD}=e;D0(u);const f=w=>(w.unsubscribe=()=>t.delete(w.id),t.set(w.id,w),A=>{w.unsubscribe(),A?.cancelActive&&jg(w)}),p=w=>{const A=x2(t,w)??$O(w);return f(A)};mo(p,{withTypes:()=>p});const h=w=>{const A=x2(t,w);return A&&(A.unsubscribe(),w.cancelActive&&jg(A)),!!A};mo(h,{withTypes:()=>h});const m=async(w,A,j,S)=>{const E=new AbortController,C=AD(p,E.signal),N=[];try{w.pending.add(E),n(w),await Promise.resolve(w.effect(A,mo({},j,{getOriginalState:S,condition:(_,T)=>C(_,T).then(Boolean),take:C,delay:IO(E.signal),pause:ku(E.signal),extra:l,signal:E.signal,fork:SD(E.signal,N),unsubscribe:w.unsubscribe,subscribe:()=>{t.set(w.id,w)},cancelActiveListeners:()=>{w.pending.forEach((_,T,z)=>{_!==E&&(ui(_,wg),z.delete(_))})},cancel:()=>{ui(E,wg),w.pending.delete(E)},throwIfCancelled:()=>{di(E.signal)}})))}catch(_){_ instanceof Sd||y2(u,_,{raisedBy:"effect"})}finally{await Promise.all(N),ui(E,wD),o(w),w.pending.delete(E)}},v=OD(t,r);return{middleware:w=>A=>j=>{if(!wO(j))return A(j);if(UO.match(j))return p(j.payload);if(ED.match(j)){v();return}if(HO.match(j))return h(j.payload);let S=w.getState();const E=()=>{if(S===v2)throw new Error(Nr(23));return S};let C;try{if(C=A(j),t.size>0){const N=w.getState(),_=Array.from(t.values());for(const T of _){let z=!1;try{z=T.predicate(j,N,S)}catch(U){z=!1,y2(u,U,{raisedBy:"predicate"})}z&&m(T,j,w,E)}}}finally{S=v2}return C},startListening:p,stopListening:h,clearListeners:v}};function Nr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var ND={layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},YO=hr({name:"chartLayout",initialState:ND,reducers:{setLayout(e,t){e.layoutType=t.payload},setChartSize(e,t){e.width=t.payload.width,e.height=t.payload.height},setMargin(e,t){var r,n,o,l;e.margin.top=(r=t.payload.top)!==null&&r!==void 0?r:0,e.margin.right=(n=t.payload.right)!==null&&n!==void 0?n:0,e.margin.bottom=(o=t.payload.bottom)!==null&&o!==void 0?o:0,e.margin.left=(l=t.payload.left)!==null&&l!==void 0?l:0},setScale(e,t){e.scale=t.payload}}}),{setMargin:CD,setLayout:TD,setChartSize:MD,setScale:_D}=YO.actions,PD=YO.reducer;function GO(e,t,r){return Array.isArray(e)&&e&&t+r!==0?e.slice(t,r+1):e}function b2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function po(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b2(Object(r),!0).forEach(function(n){DD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function DD(e,t,r){return(t=zD(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function zD(e){var t=RD(e,"string");return typeof t=="symbol"?t:t+""}function RD(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rt(e,t,r){return rt(e)||rt(t)?r:gn(t)?xo(e,t,r):typeof t=="function"?t(e):r}var LD=(e,t,r)=>{if(t&&r){var{width:n,height:o}=r,{align:l,verticalAlign:u,layout:f}=t;if((f==="vertical"||f==="horizontal"&&u==="middle")&&l!=="center"&&ue(e[l]))return po(po({},e),{},{[l]:e[l]+(n||0)});if((f==="horizontal"||f==="vertical"&&l==="center")&&u!=="middle"&&ue(e[u]))return po(po({},e),{},{[u]:e[u]+(o||0)})}return e},Pa=(e,t)=>e==="horizontal"&&t==="xAxis"||e==="vertical"&&t==="yAxis"||e==="centric"&&t==="angleAxis"||e==="radial"&&t==="radiusAxis",KO=(e,t,r,n)=>{if(n)return e.map(f=>f.coordinate);var o,l,u=e.map(f=>(f.coordinate===t&&(o=!0),f.coordinate===r&&(l=!0),f.coordinate));return o||u.push(t),l||u.push(r),u},WO=(e,t,r)=>{if(!e)return null;var{duplicateDomain:n,type:o,range:l,scale:u,realScaleType:f,isCategorical:p,categoricalDomain:h,tickCount:m,ticks:v,niceTicks:b,axisType:w}=e;if(!u)return null;var A=f==="scaleBand"&&u.bandwidth?u.bandwidth()/2:2,j=o==="category"&&u.bandwidth?u.bandwidth()/A:0;if(j=w==="angleAxis"&&l&&l.length>=2?fr(l[0]-l[1])*2*j:j,v||b){var S=(v||b||[]).map((E,C)=>{var N=n?n.indexOf(E):E;return{coordinate:u(N)+j,value:E,offset:j,index:C}});return S.filter(E=>!nn(E.coordinate))}return p&&h?h.map((E,C)=>({coordinate:u(E)+j,value:E,index:C,offset:j})):u.ticks&&m!=null?u.ticks(m).map((E,C)=>({coordinate:u(E)+j,value:E,offset:j,index:C})):u.domain().map((E,C)=>({coordinate:u(E)+j,value:n?n[E]:E,index:C,offset:j}))},w2=1e-4,BD=e=>{var t=e.domain();if(!(!t||t.length<=2)){var r=t.length,n=e.range(),o=Math.min(n[0],n[1])-w2,l=Math.max(n[0],n[1])+w2,u=e(t[0]),f=e(t[r-1]);(u<o||u>l||f<o||f>l)&&e.domain([t[0],t[r-1]])}},ID=(e,t)=>{if(!t||t.length!==2||!ue(t[0])||!ue(t[1]))return e;var r=Math.min(t[0],t[1]),n=Math.max(t[0],t[1]),o=[e[0],e[1]];return(!ue(e[0])||e[0]<r)&&(o[0]=r),(!ue(e[1])||e[1]>n)&&(o[1]=n),o[0]>n&&(o[0]=n),o[1]<r&&(o[1]=r),o},qD=e=>{var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var o=0,l=0,u=0;u<t;++u){var f=nn(e[u][r][1])?e[u][r][0]:e[u][r][1];f>=0?(e[u][r][0]=o,e[u][r][1]=o+f,o=e[u][r][1]):(e[u][r][0]=l,e[u][r][1]=l+f,l=e[u][r][1])}},$D=e=>{var t=e.length;if(!(t<=0))for(var r=0,n=e[0].length;r<n;++r)for(var o=0,l=0;l<t;++l){var u=nn(e[l][r][1])?e[l][r][0]:e[l][r][1];u>=0?(e[l][r][0]=o,e[l][r][1]=o+u,o=e[l][r][1]):(e[l][r][0]=0,e[l][r][1]=0)}},UD={sign:qD,expand:f_,none:vo,silhouette:p_,wiggle:h_,positive:$D},HD=(e,t,r)=>{var n=UD[r],o=d_().keys(t).value((l,u)=>Number(Rt(l,u,0))).order(fg).offset(n);return o(e)};function YD(e){return e==null?void 0:String(e)}function j2(e){var{axis:t,ticks:r,bandSize:n,entry:o,index:l,dataKey:u}=e;if(t.type==="category"){if(!t.allowDuplicatedCategory&&t.dataKey&&!rt(o[t.dataKey])){var f=tO(r,"value",o[t.dataKey]);if(f)return f.coordinate+n/2}return r[l]?r[l].coordinate+n/2:null}var p=Rt(o,rt(u)?t.dataKey:u);return rt(p)?null:t.scale(p)}var S2=e=>{var{axis:t,ticks:r,offset:n,bandSize:o,entry:l,index:u}=e;if(t.type==="category")return r[u]?r[u].coordinate+n:null;var f=Rt(l,t.dataKey,t.scale.domain()[u]);return rt(f)?null:t.scale(f)-o/2+n},GD=e=>{var{numericAxis:t}=e,r=t.scale.domain();if(t.type==="number"){var n=Math.min(r[0],r[1]),o=Math.max(r[0],r[1]);return n<=0&&o>=0?0:o<0?o:n}return r[0]},KD=e=>{var t=e.flat(2).filter(ue);return[Math.min(...t),Math.max(...t)]},WD=e=>[e[0]===1/0?0:e[0],e[1]===-1/0?0:e[1]],VD=(e,t,r)=>{if(e!=null)return WD(Object.keys(e).reduce((n,o)=>{var l=e[o],{stackedData:u}=l,f=u.reduce((p,h)=>{var m=GO(h,t,r),v=KD(m);return[Math.min(p[0],v[0]),Math.max(p[1],v[1])]},[1/0,-1/0]);return[Math.min(f[0],n[0]),Math.max(f[1],n[1])]},[1/0,-1/0]))},A2=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,O2=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,yo=(e,t,r)=>{if(e&&e.scale&&e.scale.bandwidth){var n=e.scale.bandwidth();if(!r||n>0)return n}if(e&&t&&t.length>=2){for(var o=yd(t,m=>m.coordinate),l=1/0,u=1,f=o.length;u<f;u++){var p=o[u],h=o[u-1];l=Math.min((p.coordinate||0)-(h.coordinate||0),l)}return l===1/0?0:l}return r?void 0:0};function E2(e){var{tooltipEntrySettings:t,dataKey:r,payload:n,value:o,name:l}=e;return po(po({},t),{},{dataKey:r,payload:n,value:o,name:l})}function Od(e,t){if(e)return String(e);if(typeof t=="string")return t}var XD=(e,t)=>{if(t==="horizontal")return e.chartX;if(t==="vertical")return e.chartY},FD=(e,t)=>t==="centric"?e.angle:e.radius,Zn=e=>e.layout.width,Qn=e=>e.layout.height,ZD=e=>e.layout.scale,VO=e=>e.layout.margin,Ed=H(e=>e.cartesianAxis.xAxis,e=>Object.values(e)),kd=H(e=>e.cartesianAxis.yAxis,e=>Object.values(e)),QD="data-recharts-item-index",JD="data-recharts-item-data-key",vs=60;function k2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Jc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?k2(Object(r),!0).forEach(function(n){ez(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ez(e,t,r){return(t=tz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tz(e){var t=rz(e,"string");return typeof t=="symbol"?t:t+""}function rz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var nz=e=>e.brush.height;function az(e){var t=kd(e);return t.reduce((r,n)=>{if(n.orientation==="left"&&!n.mirror&&!n.hide){var o=typeof n.width=="number"?n.width:vs;return r+o}return r},0)}function iz(e){var t=kd(e);return t.reduce((r,n)=>{if(n.orientation==="right"&&!n.mirror&&!n.hide){var o=typeof n.width=="number"?n.width:vs;return r+o}return r},0)}function oz(e){var t=Ed(e);return t.reduce((r,n)=>n.orientation==="top"&&!n.mirror&&!n.hide?r+n.height:r,0)}function lz(e){var t=Ed(e);return t.reduce((r,n)=>n.orientation==="bottom"&&!n.mirror&&!n.hide?r+n.height:r,0)}var Lt=H([Zn,Qn,VO,nz,az,iz,oz,lz,vO,DP],(e,t,r,n,o,l,u,f,p,h)=>{var m={left:(r.left||0)+o,right:(r.right||0)+l},v={top:(r.top||0)+u,bottom:(r.bottom||0)+f},b=Jc(Jc({},v),m),w=b.bottom;b.bottom+=n,b=LD(b,p,h);var A=e-b.left-b.right,j=t-b.top-b.bottom;return Jc(Jc({brushBottom:w},b),{},{width:Math.max(A,0),height:Math.max(j,0)})}),sz=H(Lt,e=>({x:e.left,y:e.top,width:e.width,height:e.height})),z0=H(Zn,Qn,(e,t)=>({x:0,y:0,width:e,height:t})),cz=y.createContext(null),Ft=()=>y.useContext(cz)!=null,Nd=e=>e.brush,Cd=H([Nd,Lt,VO],(e,t,r)=>({height:e.height,x:ue(e.x)?e.x:t.left,y:ue(e.y)?e.y:t.top+t.height+t.brushBottom-(r?.bottom||0),width:ue(e.width)?e.width:t.width})),wm={},jm={},Sm={},N2;function uz(){return N2||(N2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r,n,{signal:o,edges:l}={}){let u,f=null;const p=l!=null&&l.includes("leading"),h=l==null||l.includes("trailing"),m=()=>{f!==null&&(r.apply(u,f),u=void 0,f=null)},v=()=>{h&&m(),j()};let b=null;const w=()=>{b!=null&&clearTimeout(b),b=setTimeout(()=>{b=null,v()},n)},A=()=>{b!==null&&(clearTimeout(b),b=null)},j=()=>{A(),u=void 0,f=null},S=()=>{m()},E=function(...C){if(o?.aborted)return;u=this,f=C;const N=b==null;w(),p&&N&&m()};return E.schedule=w,E.cancel=j,E.flush=S,o?.addEventListener("abort",j,{once:!0}),E}e.debounce=t})(Sm)),Sm}var C2;function dz(){return C2||(C2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=uz();function r(n,o=0,l={}){typeof l!="object"&&(l={});const{leading:u=!1,trailing:f=!0,maxWait:p}=l,h=Array(2);u&&(h[0]="leading"),f&&(h[1]="trailing");let m,v=null;const b=t.debounce(function(...j){m=n.apply(this,j),v=null},o,{edges:h}),w=function(...j){return p!=null&&(v===null&&(v=Date.now()),Date.now()-v>=p)?(m=n.apply(this,j),v=Date.now(),b.cancel(),b.schedule(),m):(b.apply(this,j),m)},A=()=>(b.flush(),m);return w.cancel=b.cancel,w.flush=A,w}e.debounce=r})(jm)),jm}var T2;function fz(){return T2||(T2=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=dz();function r(n,o=0,l={}){const{leading:u=!0,trailing:f=!0}=l;return t.debounce(n,o,{leading:u,maxWait:o,trailing:f})}e.throttle=r})(wm)),wm}var Am,M2;function pz(){return M2||(M2=1,Am=fz().throttle),Am}var hz=pz();const mz=Fn(hz);var Nu=function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),l=2;l<n;l++)o[l-2]=arguments[l]},XO=(e,t,r)=>{var{width:n="100%",height:o="100%",aspect:l,maxHeight:u}=r,f=Hn(n)?e:Number(n),p=Hn(o)?t:Number(o);return l&&l>0&&(f?p=f/l:p&&(f=p*l),u&&p!=null&&p>u&&(p=u)),{calculatedWidth:f,calculatedHeight:p}},gz={width:0,height:0,overflow:"visible"},vz={width:0,overflowX:"visible"},xz={height:0,overflowY:"visible"},yz={},bz=e=>{var{width:t,height:r}=e,n=Hn(t),o=Hn(r);return n&&o?gz:n?vz:o?xz:yz};function wz(e){var{width:t,height:r,aspect:n}=e,o=t,l=r;return o===void 0&&l===void 0?(o="100%",l="100%"):o===void 0?o=n&&n>0?void 0:"100%":l===void 0&&(l=n&&n>0?void 0:"100%"),{width:o,height:l}}function ht(e){return Number.isFinite(e)}function vn(e){return typeof e=="number"&&e>0&&Number.isFinite(e)}function Sg(){return Sg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sg.apply(null,arguments)}function _2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function P2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_2(Object(r),!0).forEach(function(n){jz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jz(e,t,r){return(t=Sz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Sz(e){var t=Az(e,"string");return typeof t=="symbol"?t:t+""}function Az(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var FO=y.createContext({width:-1,height:-1});function Oz(e){return vn(e.width)&&vn(e.height)}function ZO(e){var{children:t,width:r,height:n}=e,o=y.useMemo(()=>({width:r,height:n}),[r,n]);return Oz(o)?y.createElement(FO.Provider,{value:o},t):null}var R0=()=>y.useContext(FO),Ez=y.forwardRef((e,t)=>{var{aspect:r,initialDimension:n={width:-1,height:-1},width:o,height:l,minWidth:u=0,minHeight:f,maxHeight:p,children:h,debounce:m=0,id:v,className:b,onResize:w,style:A={}}=e,j=y.useRef(null),S=y.useRef();S.current=w,y.useImperativeHandle(t,()=>j.current);var[E,C]=y.useState({containerWidth:n.width,containerHeight:n.height}),N=y.useCallback((X,ee)=>{C(ae=>{var F=Math.round(X),Q=Math.round(ee);return ae.containerWidth===F&&ae.containerHeight===Q?ae:{containerWidth:F,containerHeight:Q}})},[]);y.useEffect(()=>{if(j.current==null||typeof ResizeObserver>"u")return To;var X=Q=>{var pe,{width:me,height:ye}=Q[0].contentRect;N(me,ye),(pe=S.current)===null||pe===void 0||pe.call(S,me,ye)};m>0&&(X=mz(X,m,{trailing:!0,leading:!1}));var ee=new ResizeObserver(X),{width:ae,height:F}=j.current.getBoundingClientRect();return N(ae,F),ee.observe(j.current),()=>{ee.disconnect()}},[N,m]);var{containerWidth:_,containerHeight:T}=E;Nu(!r||r>0,"The aspect(%s) must be greater than zero.",r);var{calculatedWidth:z,calculatedHeight:U}=XO(_,T,{width:o,height:l,aspect:r,maxHeight:p});return Nu(z!=null&&z>0||U!=null&&U>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,z,U,o,l,u,f,r),y.createElement("div",{id:v?"".concat(v):void 0,className:qe("recharts-responsive-container",b),style:P2(P2({},A),{},{width:o,height:l,minWidth:u,minHeight:f,maxHeight:p}),ref:j},y.createElement("div",{style:bz({width:o,height:l})},y.createElement(ZO,{width:z,height:U},h)))}),Ag=y.forwardRef((e,t)=>{var r=R0();if(vn(r.width)&&vn(r.height))return e.children;var{width:n,height:o}=wz({width:e.width,height:e.height,aspect:e.aspect}),{calculatedWidth:l,calculatedHeight:u}=XO(void 0,void 0,{width:n,height:o,aspect:e.aspect,maxHeight:e.maxHeight});return ue(l)&&ue(u)?y.createElement(ZO,{width:l,height:u},e.children):y.createElement(Ez,Sg({},e,{width:n,height:o,ref:t}))});function QO(e){if(e)return{x:e.x,y:e.y,upperWidth:"upperWidth"in e?e.upperWidth:e.width,lowerWidth:"lowerWidth"in e?e.lowerWidth:e.width,width:e.width,height:e.height}}var Td=()=>{var e,t=Ft(),r=de(sz),n=de(Cd),o=(e=de(Nd))===null||e===void 0?void 0:e.padding;return!t||!n||!o?r:{width:n.width-o.left-o.right,height:n.height-o.top-o.bottom,x:o.left,y:o.top}},kz={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},JO=()=>{var e;return(e=de(Lt))!==null&&e!==void 0?e:kz},L0=()=>de(Zn),B0=()=>de(Qn),Nz=()=>de(e=>e.layout.margin),ze=e=>e.layout.layoutType,xs=()=>de(ze),Cz=()=>{var e=xs();return e!==void 0},Md=e=>{var t=at(),r=Ft(),{width:n,height:o}=e,l=R0(),u=n,f=o;return l&&(u=l.width>0?l.width:n,f=l.height>0?l.height:o),y.useEffect(()=>{!r&&vn(u)&&vn(f)&&t(MD({width:u,height:f}))},[t,r,u,f]),null},Tz={settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},eE=hr({name:"legend",initialState:Tz,reducers:{setLegendSize(e,t){e.size.width=t.payload.width,e.size.height=t.payload.height},setLegendSettings(e,t){e.settings.align=t.payload.align,e.settings.layout=t.payload.layout,e.settings.verticalAlign=t.payload.verticalAlign,e.settings.itemSorter=t.payload.itemSorter},addLegendPayload:{reducer(e,t){e.payload.push(t.payload)},prepare:St()},removeLegendPayload:{reducer(e,t){var r=qn(e).payload.indexOf(t.payload);r>-1&&e.payload.splice(r,1)},prepare:St()}}}),{setLegendSize:D2,setLegendSettings:Mz,addLegendPayload:_z,removeLegendPayload:Pz}=eE.actions,Dz=eE.reducer,zz=["contextPayload"];function Og(){return Og=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Og.apply(null,arguments)}function z2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function bo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?z2(Object(r),!0).forEach(function(n){Rz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Rz(e,t,r){return(t=Lz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Lz(e){var t=Bz(e,"string");return typeof t=="symbol"?t:t+""}function Bz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Iz(e,t){if(e==null)return{};var r,n,o=qz(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function qz(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function $z(e){return e.value}function Uz(e){var{contextPayload:t}=e,r=Iz(e,zz),n=pO(t,e.payloadUniqBy,$z),o=bo(bo({},r),{},{payload:n});return y.isValidElement(e.content)?y.cloneElement(e.content,o):typeof e.content=="function"?y.createElement(e.content,o):y.createElement(H_,o)}function Hz(e,t,r,n,o,l){var{layout:u,align:f,verticalAlign:p}=t,h,m;return(!e||(e.left===void 0||e.left===null)&&(e.right===void 0||e.right===null))&&(f==="center"&&u==="vertical"?h={left:((n||0)-l.width)/2}:h=f==="right"?{right:r&&r.right||0}:{left:r&&r.left||0}),(!e||(e.top===void 0||e.top===null)&&(e.bottom===void 0||e.bottom===null))&&(p==="middle"?m={top:((o||0)-l.height)/2}:m=p==="bottom"?{bottom:r&&r.bottom||0}:{top:r&&r.top||0}),bo(bo({},h),m)}function Yz(e){var t=at();return y.useEffect(()=>{t(Mz(e))},[t,e]),null}function Gz(e){var t=at();return y.useEffect(()=>(t(D2(e)),()=>{t(D2({width:0,height:0}))}),[t,e]),null}function Kz(e,t,r,n){return e==="vertical"&&ue(t)?{height:t}:e==="horizontal"?{width:r||n}:null}var Wz={align:"center",iconSize:14,itemSorter:"value",layout:"horizontal",verticalAlign:"bottom"};function tE(e){var t=Yt(e,Wz),r=LP(),n=z8(),o=Nz(),{width:l,height:u,wrapperStyle:f,portal:p}=t,[h,m]=xO([r]),v=L0(),b=B0();if(v==null||b==null)return null;var w=v-(o?.left||0)-(o?.right||0),A=Kz(t.layout,u,l,w),j=p?f:bo(bo({position:"absolute",width:A?.width||l||"auto",height:A?.height||u||"auto"},Hz(f,t,o,v,b,h)),f),S=p??n;if(S==null||r==null)return null;var E=y.createElement("div",{className:"recharts-legend-wrapper",style:j,ref:m},y.createElement(Yz,{layout:t.layout,align:t.align,verticalAlign:t.verticalAlign,itemSorter:t.itemSorter}),y.createElement(Gz,{width:h.width,height:h.height}),y.createElement(Uz,Og({},t,A,{margin:o,chartWidth:v,chartHeight:b,contextPayload:r})));return u0.createPortal(E,S)}tE.displayName="Legend";function Eg(){return Eg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Eg.apply(null,arguments)}function R2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Om(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?R2(Object(r),!0).forEach(function(n){Vz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Vz(e,t,r){return(t=Xz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Xz(e){var t=Fz(e,"string");return typeof t=="symbol"?t:t+""}function Fz(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zz(e){return Array.isArray(e)&&gn(e[0])&&gn(e[1])?e.join(" ~ "):e}var Qz=e=>{var{separator:t=" : ",contentStyle:r={},itemStyle:n={},labelStyle:o={},payload:l,formatter:u,itemSorter:f,wrapperClassName:p,labelClassName:h,label:m,labelFormatter:v,accessibilityLayer:b=!1}=e,w=()=>{if(l&&l.length){var T={padding:0,margin:0},z=(f?yd(l,f):l).map((U,X)=>{if(U.type==="none")return null;var ee=U.formatter||u||Zz,{value:ae,name:F}=U,Q=ae,pe=F;if(ee){var me=ee(ae,F,U,X,l);if(Array.isArray(me))[Q,pe]=me;else if(me!=null)Q=me;else return null}var ye=Om({display:"block",paddingTop:4,paddingBottom:4,color:U.color||"#000"},n);return y.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(X),style:ye},gn(pe)?y.createElement("span",{className:"recharts-tooltip-item-name"},pe):null,gn(pe)?y.createElement("span",{className:"recharts-tooltip-item-separator"},t):null,y.createElement("span",{className:"recharts-tooltip-item-value"},Q),y.createElement("span",{className:"recharts-tooltip-item-unit"},U.unit||""))});return y.createElement("ul",{className:"recharts-tooltip-item-list",style:T},z)}return null},A=Om({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},r),j=Om({margin:0},o),S=!rt(m),E=S?m:"",C=qe("recharts-default-tooltip",p),N=qe("recharts-tooltip-label",h);S&&v&&l!==void 0&&l!==null&&(E=v(m,l));var _=b?{role:"status","aria-live":"assertive"}:{};return y.createElement("div",Eg({className:C,style:A},_),y.createElement("p",{className:N,style:j},y.isValidElement(E)?E:"".concat(E)),w())},Il="recharts-tooltip-wrapper",Jz={visibility:"hidden"};function eR(e){var{coordinate:t,translateX:r,translateY:n}=e;return qe(Il,{["".concat(Il,"-right")]:ue(r)&&t&&ue(t.x)&&r>=t.x,["".concat(Il,"-left")]:ue(r)&&t&&ue(t.x)&&r<t.x,["".concat(Il,"-bottom")]:ue(n)&&t&&ue(t.y)&&n>=t.y,["".concat(Il,"-top")]:ue(n)&&t&&ue(t.y)&&n<t.y})}function L2(e){var{allowEscapeViewBox:t,coordinate:r,key:n,offsetTopLeft:o,position:l,reverseDirection:u,tooltipDimension:f,viewBox:p,viewBoxDimension:h}=e;if(l&&ue(l[n]))return l[n];var m=r[n]-f-(o>0?o:0),v=r[n]+o;if(t[n])return u[n]?m:v;var b=p[n];if(b==null)return 0;if(u[n]){var w=m,A=b;return w<A?Math.max(v,b):Math.max(m,b)}if(h==null)return 0;var j=v+f,S=b+h;return j>S?Math.max(m,b):Math.max(v,b)}function tR(e){var{translateX:t,translateY:r,useTranslate3d:n}=e;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function rR(e){var{allowEscapeViewBox:t,coordinate:r,offsetTopLeft:n,position:o,reverseDirection:l,tooltipBox:u,useTranslate3d:f,viewBox:p}=e,h,m,v;return u.height>0&&u.width>0&&r?(m=L2({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:o,reverseDirection:l,tooltipDimension:u.width,viewBox:p,viewBoxDimension:p.width}),v=L2({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:o,reverseDirection:l,tooltipDimension:u.height,viewBox:p,viewBoxDimension:p.height}),h=tR({translateX:m,translateY:v,useTranslate3d:f})):h=Jz,{cssProperties:h,cssClasses:eR({translateX:m,translateY:v,coordinate:r})}}function B2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function eu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?B2(Object(r),!0).forEach(function(n){kg(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function kg(e,t,r){return(t=nR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nR(e){var t=aR(e,"string");return typeof t=="symbol"?t:t+""}function aR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class iR extends y.PureComponent{constructor(){super(...arguments),kg(this,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}),kg(this,"handleKeyDown",t=>{if(t.key==="Escape"){var r,n,o,l;this.setState({dismissed:!0,dismissedAtCoordinate:{x:(r=(n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==null&&r!==void 0?r:0,y:(o=(l=this.props.coordinate)===null||l===void 0?void 0:l.y)!==null&&o!==void 0?o:0}})}})}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}componentDidUpdate(){var t,r;this.state.dismissed&&(((t=this.props.coordinate)===null||t===void 0?void 0:t.x)!==this.state.dismissedAtCoordinate.x||((r=this.props.coordinate)===null||r===void 0?void 0:r.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}render(){var{active:t,allowEscapeViewBox:r,animationDuration:n,animationEasing:o,children:l,coordinate:u,hasPayload:f,isAnimationActive:p,offset:h,position:m,reverseDirection:v,useTranslate3d:b,viewBox:w,wrapperStyle:A,lastBoundingBox:j,innerRef:S,hasPortalFromProps:E}=this.props,{cssClasses:C,cssProperties:N}=rR({allowEscapeViewBox:r,coordinate:u,offsetTopLeft:h,position:m,reverseDirection:v,tooltipBox:{height:j.height,width:j.width},useTranslate3d:b,viewBox:w}),_=E?{}:eu(eu({transition:p&&t?"transform ".concat(n,"ms ").concat(o):void 0},N),{},{pointerEvents:"none",visibility:!this.state.dismissed&&t&&f?"visible":"hidden",position:"absolute",top:0,left:0}),T=eu(eu({},_),{},{visibility:!this.state.dismissed&&t&&f?"visible":"hidden"},A);return y.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:C,style:T,ref:S},l)}}var oR=()=>!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout),wi={devToolsEnabled:!1,isSsr:oR()},rE=()=>{var e;return(e=de(t=>t.rootProps.accessibilityLayer))!==null&&e!==void 0?e:!0};function Ng(){return Ng=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ng.apply(null,arguments)}function I2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function q2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?I2(Object(r),!0).forEach(function(n){lR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lR(e,t,r){return(t=sR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sR(e){var t=cR(e,"string");return typeof t=="symbol"?t:t+""}function cR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var $2={curveBasisClosed:e_,curveBasisOpen:t_,curveBasis:J8,curveBumpX:I8,curveBumpY:q8,curveLinearClosed:r_,curveLinear:gd,curveMonotoneX:n_,curveMonotoneY:a_,curveNatural:i_,curveStep:o_,curveStepAfter:s_,curveStepBefore:l_},Cu=e=>ht(e.x)&&ht(e.y),U2=e=>e.base!=null&&Cu(e.base)&&Cu(e),ql=e=>e.x,$l=e=>e.y,uR=(e,t)=>{if(typeof e=="function")return e;var r="curve".concat(hs(e));return(r==="curveMonotone"||r==="curveBump")&&t?$2["".concat(r).concat(t==="vertical"?"Y":"X")]:$2[r]||gd},dR=e=>{var{type:t="linear",points:r=[],baseLine:n,layout:o,connectNulls:l=!1}=e,u=uR(t,o),f=l?r.filter(Cu):r,p;if(Array.isArray(n)){var h=r.map((w,A)=>q2(q2({},w),{},{base:n[A]}));o==="vertical"?p=Wc().y($l).x1(ql).x0(w=>w.base.x):p=Wc().x(ql).y1($l).y0(w=>w.base.y);var m=p.defined(U2).curve(u),v=l?h.filter(U2):h;return m(v)}o==="vertical"&&ue(n)?p=Wc().y($l).x1(ql).x0(n):ue(n)?p=Wc().x(ql).y1($l).y0(n):p=UA().x(ql).y($l);var b=p.defined(Cu).curve(u);return b(f)},nE=e=>{var{className:t,points:r,path:n,pathRef:o}=e;if((!r||!r.length)&&!n)return null;var l=r&&r.length?dR(e):n;return y.createElement("path",Ng({},rn(e),k0(e),{className:qe("recharts-curve",t),d:l===null?void 0:l,ref:o}))},fR=["x","y","top","left","width","height","className"];function Cg(){return Cg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Cg.apply(null,arguments)}function H2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function pR(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?H2(Object(r),!0).forEach(function(n){hR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function hR(e,t,r){return(t=mR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function mR(e){var t=gR(e,"string");return typeof t=="symbol"?t:t+""}function gR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function vR(e,t){if(e==null)return{};var r,n,o=xR(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function xR(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var yR=(e,t,r,n,o,l)=>"M".concat(e,",").concat(o,"v").concat(n,"M").concat(l,",").concat(t,"h").concat(r),bR=e=>{var{x:t=0,y:r=0,top:n=0,left:o=0,width:l=0,height:u=0,className:f}=e,p=vR(e,fR),h=pR({x:t,y:r,top:n,left:o,width:l,height:u},p);return!ue(t)||!ue(r)||!ue(l)||!ue(u)||!ue(n)||!ue(o)?null:y.createElement("path",Cg({},rr(h),{className:qe("recharts-cross",f),d:yR(t,r,l,u,n,o)}))};function wR(e,t,r,n){var o=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-o:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-o,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function Y2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function G2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Y2(Object(r),!0).forEach(function(n){jR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jR(e,t,r){return(t=SR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function SR(e){var t=AR(e,"string");return typeof t=="symbol"?t:t+""}function AR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var OR=e=>e.replace(/([A-Z])/g,t=>"-".concat(t.toLowerCase())),aE=(e,t,r)=>e.map(n=>"".concat(OR(n)," ").concat(t,"ms ").concat(r)).join(","),ER=(e,t)=>[Object.keys(e),Object.keys(t)].reduce((r,n)=>r.filter(o=>n.includes(o))),rs=(e,t)=>Object.keys(t).reduce((r,n)=>G2(G2({},r),{},{[n]:e(n,t[n])}),{});function K2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function jt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?K2(Object(r),!0).forEach(function(n){kR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function kR(e,t,r){return(t=NR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function NR(e){var t=CR(e,"string");return typeof t=="symbol"?t:t+""}function CR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Tu=(e,t,r)=>e+(t-e)*r,Tg=e=>{var{from:t,to:r}=e;return t!==r},iE=(e,t,r)=>{var n=rs((o,l)=>{if(Tg(l)){var[u,f]=e(l.from,l.to,l.velocity);return jt(jt({},l),{},{from:u,velocity:f})}return l},t);return r<1?rs((o,l)=>Tg(l)?jt(jt({},l),{},{velocity:Tu(l.velocity,n[o].velocity,r),from:Tu(l.from,n[o].from,r)}):l,t):iE(e,n,r-1)};function TR(e,t,r,n,o,l){var u,f=n.reduce((b,w)=>jt(jt({},b),{},{[w]:{from:e[w],velocity:0,to:t[w]}}),{}),p=()=>rs((b,w)=>w.from,f),h=()=>!Object.values(f).filter(Tg).length,m=null,v=b=>{u||(u=b);var w=b-u,A=w/r.dt;f=iE(r,f,A),o(jt(jt(jt({},e),t),p())),u=b,h()||(m=l.setTimeout(v))};return()=>(m=l.setTimeout(v),()=>{var b;(b=m)===null||b===void 0||b()})}function MR(e,t,r,n,o,l,u){var f=null,p=o.reduce((v,b)=>jt(jt({},v),{},{[b]:[e[b],t[b]]}),{}),h,m=v=>{h||(h=v);var b=(v-h)/n,w=rs((j,S)=>Tu(...S,r(b)),p);if(l(jt(jt(jt({},e),t),w)),b<1)f=u.setTimeout(m);else{var A=rs((j,S)=>Tu(...S,r(1)),p);l(jt(jt(jt({},e),t),A))}};return()=>(f=u.setTimeout(m),()=>{var v;(v=f)===null||v===void 0||v()})}const _R=(e,t,r,n,o,l)=>{var u=ER(e,t);return r==null?()=>(o(jt(jt({},e),t)),()=>{}):r.isStepper===!0?TR(e,t,r,u,o,l):MR(e,t,r,n,u,o,l)};var Mu=1e-4,oE=(e,t)=>[0,3*e,3*t-6*e,3*e-3*t+1],lE=(e,t)=>e.map((r,n)=>r*t**n).reduce((r,n)=>r+n),W2=(e,t)=>r=>{var n=oE(e,t);return lE(n,r)},PR=(e,t)=>r=>{var n=oE(e,t),o=[...n.map((l,u)=>l*u).slice(1),0];return lE(o,r)},DR=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r.length===1)switch(r[0]){case"linear":return[0,0,1,1];case"ease":return[.25,.1,.25,1];case"ease-in":return[.42,0,1,1];case"ease-out":return[.42,0,.58,1];case"ease-in-out":return[0,0,.58,1];default:{var o,l=r[0].split("(");if(l[0]==="cubic-bezier"&&((o=l[1])===null||o===void 0?void 0:o.split(")")[0].split(",").length)===4){var u=l[1].split(")")[0].split(",").map(f=>parseFloat(f));return[u[0],u[1],u[2],u[3]]}}}return r.length===4?r:[0,0,1,1]},zR=(e,t,r,n)=>{var o=W2(e,r),l=W2(t,n),u=PR(e,r),f=h=>h>1?1:h<0?0:h,p=h=>{for(var m=h>1?1:h,v=m,b=0;b<8;++b){var w=o(v)-m,A=u(v);if(Math.abs(w-m)<Mu||A<Mu)return l(v);v=f(v-w/A)}return l(v)};return p.isStepper=!1,p},V2=function(){return zR(...DR(...arguments))},RR=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{stiff:r=100,damping:n=8,dt:o=17}=t,l=(u,f,p)=>{var h=-(u-f)*r,m=p*n,v=p+(h-m)*o/1e3,b=p*o/1e3+u;return Math.abs(b-f)<Mu&&Math.abs(v)<Mu?[f,0]:[b,v]};return l.isStepper=!0,l.dt=o,l},LR=e=>{if(typeof e=="string")switch(e){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return V2(e);case"spring":return RR();default:if(e.split("(")[0]==="cubic-bezier")return V2(e)}return typeof e=="function"?e:null};function BR(e){var t,r=()=>null,n=!1,o=null,l=u=>{if(!n){if(Array.isArray(u)){if(!u.length)return;var f=u,[p,...h]=f;if(typeof p=="number"){o=e.setTimeout(l.bind(null,h),p);return}l(p),o=e.setTimeout(l.bind(null,h));return}typeof u=="string"&&(t=u,r(t)),typeof u=="object"&&(t=u,r(t)),typeof u=="function"&&u()}};return{stop:()=>{n=!0},start:u=>{n=!1,o&&(o(),o=null),l(u)},subscribe:u=>(r=u,()=>{r=()=>null}),getTimeoutController:()=>e}}class IR{setTimeout(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=performance.now(),o=null,l=u=>{u-n>=r?t(u):typeof requestAnimationFrame=="function"&&(o=requestAnimationFrame(l))};return o=requestAnimationFrame(l),()=>{o!=null&&cancelAnimationFrame(o)}}}function qR(){return BR(new IR)}var $R=y.createContext(qR);function UR(e,t){var r=y.useContext($R);return y.useMemo(()=>t??r(e),[e,t,r])}var HR={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},X2={t:0},Em={t:1};function _d(e){var t=Yt(e,HR),{isActive:r,canBegin:n,duration:o,easing:l,begin:u,onAnimationEnd:f,onAnimationStart:p,children:h}=t,m=UR(t.animationId,t.animationManager),[v,b]=y.useState(r?X2:Em),w=y.useRef(null);return y.useEffect(()=>{r||b(Em)},[r]),y.useEffect(()=>{if(!r||!n)return To;var A=_R(X2,Em,LR(l),o,b,m.getTimeoutController()),j=()=>{w.current=A()};return m.start([p,u,j,o,f]),()=>{m.stop(),w.current&&w.current(),f()}},[r,n,o,l,u,p,f,m]),h(v.t)}function Pd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"animation-",r=y.useRef(Ql(t)),n=y.useRef(e);return n.current!==e&&(r.current=Ql(t),n.current=e),r.current}var YR=["radius"],GR=["radius"];function F2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Z2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?F2(Object(r),!0).forEach(function(n){KR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function KR(e,t,r){return(t=WR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function WR(e){var t=VR(e,"string");return typeof t=="symbol"?t:t+""}function VR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _u(){return _u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_u.apply(null,arguments)}function Q2(e,t){if(e==null)return{};var r,n,o=XR(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function XR(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var J2=(e,t,r,n,o)=>{var l=Math.min(Math.abs(r)/2,Math.abs(n)/2),u=n>=0?1:-1,f=r>=0?1:-1,p=n>=0&&r>=0||n<0&&r<0?1:0,h;if(l>0&&o instanceof Array){for(var m=[0,0,0,0],v=0,b=4;v<b;v++)m[v]=o[v]>l?l:o[v];h="M".concat(e,",").concat(t+u*m[0]),m[0]>0&&(h+="A ".concat(m[0],",").concat(m[0],",0,0,").concat(p,",").concat(e+f*m[0],",").concat(t)),h+="L ".concat(e+r-f*m[1],",").concat(t),m[1]>0&&(h+="A ".concat(m[1],",").concat(m[1],",0,0,").concat(p,`,
        `).concat(e+r,",").concat(t+u*m[1])),h+="L ".concat(e+r,",").concat(t+n-u*m[2]),m[2]>0&&(h+="A ".concat(m[2],",").concat(m[2],",0,0,").concat(p,`,
        `).concat(e+r-f*m[2],",").concat(t+n)),h+="L ".concat(e+f*m[3],",").concat(t+n),m[3]>0&&(h+="A ".concat(m[3],",").concat(m[3],",0,0,").concat(p,`,
        `).concat(e,",").concat(t+n-u*m[3])),h+="Z"}else if(l>0&&o===+o&&o>0){var w=Math.min(l,o);h="M ".concat(e,",").concat(t+u*w,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(e+f*w,",").concat(t,`
            L `).concat(e+r-f*w,",").concat(t,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(e+r,",").concat(t+u*w,`
            L `).concat(e+r,",").concat(t+n-u*w,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(e+r-f*w,",").concat(t+n,`
            L `).concat(e+f*w,",").concat(t+n,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(e,",").concat(t+n-u*w," Z")}else h="M ".concat(e,",").concat(t," h ").concat(r," v ").concat(n," h ").concat(-r," Z");return h},ej={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},sE=e=>{var t=Yt(e,ej),r=y.useRef(null),[n,o]=y.useState(-1);y.useEffect(()=>{if(r.current&&r.current.getTotalLength)try{var G=r.current.getTotalLength();G&&o(G)}catch{}},[]);var{x:l,y:u,width:f,height:p,radius:h,className:m}=t,{animationEasing:v,animationDuration:b,animationBegin:w,isAnimationActive:A,isUpdateAnimationActive:j}=t,S=y.useRef(f),E=y.useRef(p),C=y.useRef(l),N=y.useRef(u),_=y.useMemo(()=>({x:l,y:u,width:f,height:p,radius:h}),[l,u,f,p,h]),T=Pd(_,"rectangle-");if(l!==+l||u!==+u||f!==+f||p!==+p||f===0||p===0)return null;var z=qe("recharts-rectangle",m);if(!j){var U=rr(t),{radius:X}=U,ee=Q2(U,YR);return y.createElement("path",_u({},ee,{radius:typeof h=="number"?h:void 0,className:z,d:J2(l,u,f,p,h)}))}var ae=S.current,F=E.current,Q=C.current,pe=N.current,me="0px ".concat(n===-1?1:n,"px"),ye="".concat(n,"px 0px"),q=aE(["strokeDasharray"],b,typeof v=="string"?v:ej.animationEasing);return y.createElement(_d,{animationId:T,key:T,canBegin:n>0,duration:b,easing:v,isActive:j,begin:w},G=>{var re=lt(ae,f,G),ie=lt(F,p,G),P=lt(Q,l,G),W=lt(pe,u,G);r.current&&(S.current=re,E.current=ie,C.current=P,N.current=W);var ne;A?G>0?ne={transition:q,strokeDasharray:ye}:ne={strokeDasharray:me}:ne={strokeDasharray:ye};var te=rr(t),{radius:le}=te,je=Q2(te,GR);return y.createElement("path",_u({},je,{radius:typeof h=="number"?h:void 0,className:z,d:J2(P,W,re,ie,h),ref:r,style:Z2(Z2({},ne),t.style)}))})};function tj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function rj(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tj(Object(r),!0).forEach(function(n){FR(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tj(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function FR(e,t,r){return(t=ZR(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ZR(e){var t=QR(e,"string");return typeof t=="symbol"?t:t+""}function QR(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Pu=Math.PI/180,JR=e=>e*180/Math.PI,Ht=(e,t,r,n)=>({x:e+Math.cos(-Pu*n)*r,y:t+Math.sin(-Pu*n)*r}),e9=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{top:0,right:0,bottom:0,left:0};return Math.min(Math.abs(t-(n.left||0)-(n.right||0)),Math.abs(r-(n.top||0)-(n.bottom||0)))/2},t9=(e,t)=>{var{x:r,y:n}=e,{x:o,y:l}=t;return Math.sqrt((r-o)**2+(n-l)**2)},r9=(e,t)=>{var{x:r,y:n}=e,{cx:o,cy:l}=t,u=t9({x:r,y:n},{x:o,y:l});if(u<=0)return{radius:u,angle:0};var f=(r-o)/u,p=Math.acos(f);return n>l&&(p=2*Math.PI-p),{radius:u,angle:JR(p),angleInRadian:p}},n9=e=>{var{startAngle:t,endAngle:r}=e,n=Math.floor(t/360),o=Math.floor(r/360),l=Math.min(n,o);return{startAngle:t-l*360,endAngle:r-l*360}},a9=(e,t)=>{var{startAngle:r,endAngle:n}=t,o=Math.floor(r/360),l=Math.floor(n/360),u=Math.min(o,l);return e+u*360},i9=(e,t)=>{var{chartX:r,chartY:n}=e,{radius:o,angle:l}=r9({x:r,y:n},t),{innerRadius:u,outerRadius:f}=t;if(o<u||o>f||o===0)return null;var{startAngle:p,endAngle:h}=n9(t),m=l,v;if(p<=h){for(;m>h;)m-=360;for(;m<p;)m+=360;v=m>=p&&m<=h}else{for(;m>p;)m-=360;for(;m<h;)m+=360;v=m>=h&&m<=p}return v?rj(rj({},t),{},{radius:o,angle:a9(m,t)}):null};function cE(e){var{cx:t,cy:r,radius:n,startAngle:o,endAngle:l}=e,u=Ht(t,r,n,o),f=Ht(t,r,n,l);return{points:[u,f],cx:t,cy:r,radius:n,startAngle:o,endAngle:l}}function Mg(){return Mg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Mg.apply(null,arguments)}var o9=(e,t)=>{var r=fr(t-e),n=Math.min(Math.abs(t-e),359.999);return r*n},tu=e=>{var{cx:t,cy:r,radius:n,angle:o,sign:l,isExternal:u,cornerRadius:f,cornerIsExternal:p}=e,h=f*(u?1:-1)+n,m=Math.asin(f/h)/Pu,v=p?o:o+l*m,b=Ht(t,r,h,v),w=Ht(t,r,n,v),A=p?o-l*m:o,j=Ht(t,r,h*Math.cos(m*Pu),A);return{center:b,circleTangency:w,lineTangency:j,theta:m}},uE=e=>{var{cx:t,cy:r,innerRadius:n,outerRadius:o,startAngle:l,endAngle:u}=e,f=o9(l,u),p=l+f,h=Ht(t,r,o,l),m=Ht(t,r,o,p),v="M ".concat(h.x,",").concat(h.y,`
    A `).concat(o,",").concat(o,`,0,
    `).concat(+(Math.abs(f)>180),",").concat(+(l>p),`,
    `).concat(m.x,",").concat(m.y,`
  `);if(n>0){var b=Ht(t,r,n,l),w=Ht(t,r,n,p);v+="L ".concat(w.x,",").concat(w.y,`
            A `).concat(n,",").concat(n,`,0,
            `).concat(+(Math.abs(f)>180),",").concat(+(l<=p),`,
            `).concat(b.x,",").concat(b.y," Z")}else v+="L ".concat(t,",").concat(r," Z");return v},l9=e=>{var{cx:t,cy:r,innerRadius:n,outerRadius:o,cornerRadius:l,forceCornerRadius:u,cornerIsExternal:f,startAngle:p,endAngle:h}=e,m=fr(h-p),{circleTangency:v,lineTangency:b,theta:w}=tu({cx:t,cy:r,radius:o,angle:p,sign:m,cornerRadius:l,cornerIsExternal:f}),{circleTangency:A,lineTangency:j,theta:S}=tu({cx:t,cy:r,radius:o,angle:h,sign:-m,cornerRadius:l,cornerIsExternal:f}),E=f?Math.abs(p-h):Math.abs(p-h)-w-S;if(E<0)return u?"M ".concat(b.x,",").concat(b.y,`
        a`).concat(l,",").concat(l,",0,0,1,").concat(l*2,`,0
        a`).concat(l,",").concat(l,",0,0,1,").concat(-l*2,`,0
      `):uE({cx:t,cy:r,innerRadius:n,outerRadius:o,startAngle:p,endAngle:h});var C="M ".concat(b.x,",").concat(b.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(m<0),",").concat(v.x,",").concat(v.y,`
    A`).concat(o,",").concat(o,",0,").concat(+(E>180),",").concat(+(m<0),",").concat(A.x,",").concat(A.y,`
    A`).concat(l,",").concat(l,",0,0,").concat(+(m<0),",").concat(j.x,",").concat(j.y,`
  `);if(n>0){var{circleTangency:N,lineTangency:_,theta:T}=tu({cx:t,cy:r,radius:n,angle:p,sign:m,isExternal:!0,cornerRadius:l,cornerIsExternal:f}),{circleTangency:z,lineTangency:U,theta:X}=tu({cx:t,cy:r,radius:n,angle:h,sign:-m,isExternal:!0,cornerRadius:l,cornerIsExternal:f}),ee=f?Math.abs(p-h):Math.abs(p-h)-T-X;if(ee<0&&l===0)return"".concat(C,"L").concat(t,",").concat(r,"Z");C+="L".concat(U.x,",").concat(U.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(m<0),",").concat(z.x,",").concat(z.y,`
      A`).concat(n,",").concat(n,",0,").concat(+(ee>180),",").concat(+(m>0),",").concat(N.x,",").concat(N.y,`
      A`).concat(l,",").concat(l,",0,0,").concat(+(m<0),",").concat(_.x,",").concat(_.y,"Z")}else C+="L".concat(t,",").concat(r,"Z");return C},s9={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},dE=e=>{var t=Yt(e,s9),{cx:r,cy:n,innerRadius:o,outerRadius:l,cornerRadius:u,forceCornerRadius:f,cornerIsExternal:p,startAngle:h,endAngle:m,className:v}=t;if(l<o||h===m)return null;var b=qe("recharts-sector",v),w=l-o,A=an(u,w,0,!0),j;return A>0&&Math.abs(h-m)<360?j=l9({cx:r,cy:n,innerRadius:o,outerRadius:l,cornerRadius:Math.min(A,w/2),forceCornerRadius:f,cornerIsExternal:p,startAngle:h,endAngle:m}):j=uE({cx:r,cy:n,innerRadius:o,outerRadius:l,startAngle:h,endAngle:m}),y.createElement("path",Mg({},rr(t),{className:b,d:j}))};function c9(e,t,r){if(e==="horizontal")return[{x:t.x,y:r.top},{x:t.x,y:r.top+r.height}];if(e==="vertical")return[{x:r.left,y:t.y},{x:r.left+r.width,y:t.y}];if(nO(t)){if(e==="centric"){var{cx:n,cy:o,innerRadius:l,outerRadius:u,angle:f}=t,p=Ht(n,o,l,f),h=Ht(n,o,u,f);return[{x:p.x,y:p.y},{x:h.x,y:h.y}]}return cE(t)}}var km={},Nm={},Cm={},nj;function u9(){return nj||(nj=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=mO();function r(n){return t.isSymbol(n)?NaN:Number(n)}e.toNumber=r})(Cm)),Cm}var aj;function d9(){return aj||(aj=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=u9();function r(n){return n?(n=t.toNumber(n),n===1/0||n===-1/0?(n<0?-1:1)*Number.MAX_VALUE:n===n?n:0):n===0?n:0}e.toFinite=r})(Nm)),Nm}var ij;function f9(){return ij||(ij=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=gO(),r=d9();function n(o,l,u){u&&typeof u!="number"&&t.isIterateeCall(o,l,u)&&(l=u=void 0),o=r.toFinite(o),l===void 0?(l=o,o=0):l=r.toFinite(l),u=u===void 0?o<l?1:-1:r.toFinite(u);const f=Math.max(Math.ceil((l-o)/(u||1)),0),p=new Array(f);for(let h=0;h<f;h++)p[h]=o,o+=u;return p}e.range=n})(km)),km}var Tm,oj;function p9(){return oj||(oj=1,Tm=f9().range),Tm}var h9=p9();const fE=Fn(h9);function Ta(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function m9(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function I0(e){let t,r,n;e.length!==2?(t=Ta,r=(f,p)=>Ta(e(f),p),n=(f,p)=>e(f)-p):(t=e===Ta||e===m9?e:g9,r=e,n=e);function o(f,p,h=0,m=f.length){if(h<m){if(t(p,p)!==0)return m;do{const v=h+m>>>1;r(f[v],p)<0?h=v+1:m=v}while(h<m)}return h}function l(f,p,h=0,m=f.length){if(h<m){if(t(p,p)!==0)return m;do{const v=h+m>>>1;r(f[v],p)<=0?h=v+1:m=v}while(h<m)}return h}function u(f,p,h=0,m=f.length){const v=o(f,p,h,m-1);return v>h&&n(f[v-1],p)>-n(f[v],p)?v-1:v}return{left:o,center:u,right:l}}function g9(){return 0}function pE(e){return e===null?NaN:+e}function*v9(e,t){for(let r of e)r!=null&&(r=+r)>=r&&(yield r)}const x9=I0(Ta),ys=x9.right;I0(pE).center;class lj extends Map{constructor(t,r=w9){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,o]of t)this.set(n,o)}get(t){return super.get(sj(this,t))}has(t){return super.has(sj(this,t))}set(t,r){return super.set(y9(this,t),r)}delete(t){return super.delete(b9(this,t))}}function sj({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function y9({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function b9({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function w9(e){return e!==null&&typeof e=="object"?e.valueOf():e}function j9(e=Ta){if(e===Ta)return hE;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,r)=>{const n=e(t,r);return n||n===0?n:(e(r,r)===0)-(e(t,t)===0)}}function hE(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const S9=Math.sqrt(50),A9=Math.sqrt(10),O9=Math.sqrt(2);function Du(e,t,r){const n=(t-e)/Math.max(0,r),o=Math.floor(Math.log10(n)),l=n/Math.pow(10,o),u=l>=S9?10:l>=A9?5:l>=O9?2:1;let f,p,h;return o<0?(h=Math.pow(10,-o)/u,f=Math.round(e*h),p=Math.round(t*h),f/h<e&&++f,p/h>t&&--p,h=-h):(h=Math.pow(10,o)*u,f=Math.round(e/h),p=Math.round(t/h),f*h<e&&++f,p*h>t&&--p),p<f&&.5<=r&&r<2?Du(e,t,r*2):[f,p,h]}function _g(e,t,r){if(t=+t,e=+e,r=+r,!(r>0))return[];if(e===t)return[e];const n=t<e,[o,l,u]=n?Du(t,e,r):Du(e,t,r);if(!(l>=o))return[];const f=l-o+1,p=new Array(f);if(n)if(u<0)for(let h=0;h<f;++h)p[h]=(l-h)/-u;else for(let h=0;h<f;++h)p[h]=(l-h)*u;else if(u<0)for(let h=0;h<f;++h)p[h]=(o+h)/-u;else for(let h=0;h<f;++h)p[h]=(o+h)*u;return p}function Pg(e,t,r){return t=+t,e=+e,r=+r,Du(e,t,r)[2]}function Dg(e,t,r){t=+t,e=+e,r=+r;const n=t<e,o=n?Pg(t,e,r):Pg(e,t,r);return(n?-1:1)*(o<0?1/-o:o)}function cj(e,t){let r;for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);return r}function uj(e,t){let r;for(const n of e)n!=null&&(r>n||r===void 0&&n>=n)&&(r=n);return r}function mE(e,t,r=0,n=1/0,o){if(t=Math.floor(t),r=Math.floor(Math.max(0,r)),n=Math.floor(Math.min(e.length-1,n)),!(r<=t&&t<=n))return e;for(o=o===void 0?hE:j9(o);n>r;){if(n-r>600){const p=n-r+1,h=t-r+1,m=Math.log(p),v=.5*Math.exp(2*m/3),b=.5*Math.sqrt(m*v*(p-v)/p)*(h-p/2<0?-1:1),w=Math.max(r,Math.floor(t-h*v/p+b)),A=Math.min(n,Math.floor(t+(p-h)*v/p+b));mE(e,t,w,A,o)}const l=e[t];let u=r,f=n;for(Ul(e,r,t),o(e[n],l)>0&&Ul(e,r,n);u<f;){for(Ul(e,u,f),++u,--f;o(e[u],l)<0;)++u;for(;o(e[f],l)>0;)--f}o(e[r],l)===0?Ul(e,r,f):(++f,Ul(e,f,n)),f<=t&&(r=f+1),t<=f&&(n=f-1)}return e}function Ul(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function E9(e,t,r){if(e=Float64Array.from(v9(e)),!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return uj(e);if(t>=1)return cj(e);var n,o=(n-1)*t,l=Math.floor(o),u=cj(mE(e,l).subarray(0,l+1)),f=uj(e.subarray(l+1));return u+(f-u)*(o-l)}}function k9(e,t,r=pE){if(!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,o=(n-1)*t,l=Math.floor(o),u=+r(e[l],l,e),f=+r(e[l+1],l+1,e);return u+(f-u)*(o-l)}}function N9(e,t,r){e=+e,t=+t,r=(o=arguments.length)<2?(t=e,e=0,1):o<3?1:+r;for(var n=-1,o=Math.max(0,Math.ceil((t-e)/r))|0,l=new Array(o);++n<o;)l[n]=e+n*r;return l}function Vr(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Jn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const zg=Symbol("implicit");function q0(){var e=new lj,t=[],r=[],n=zg;function o(l){let u=e.get(l);if(u===void 0){if(n!==zg)return n;e.set(l,u=t.push(l)-1)}return r[u%r.length]}return o.domain=function(l){if(!arguments.length)return t.slice();t=[],e=new lj;for(const u of l)e.has(u)||e.set(u,t.push(u)-1);return o},o.range=function(l){return arguments.length?(r=Array.from(l),o):r.slice()},o.unknown=function(l){return arguments.length?(n=l,o):n},o.copy=function(){return q0(t,r).unknown(n)},Vr.apply(o,arguments),o}function $0(){var e=q0().unknown(void 0),t=e.domain,r=e.range,n=0,o=1,l,u,f=!1,p=0,h=0,m=.5;delete e.unknown;function v(){var b=t().length,w=o<n,A=w?o:n,j=w?n:o;l=(j-A)/Math.max(1,b-p+h*2),f&&(l=Math.floor(l)),A+=(j-A-l*(b-p))*m,u=l*(1-p),f&&(A=Math.round(A),u=Math.round(u));var S=N9(b).map(function(E){return A+l*E});return r(w?S.reverse():S)}return e.domain=function(b){return arguments.length?(t(b),v()):t()},e.range=function(b){return arguments.length?([n,o]=b,n=+n,o=+o,v()):[n,o]},e.rangeRound=function(b){return[n,o]=b,n=+n,o=+o,f=!0,v()},e.bandwidth=function(){return u},e.step=function(){return l},e.round=function(b){return arguments.length?(f=!!b,v()):f},e.padding=function(b){return arguments.length?(p=Math.min(1,h=+b),v()):p},e.paddingInner=function(b){return arguments.length?(p=Math.min(1,b),v()):p},e.paddingOuter=function(b){return arguments.length?(h=+b,v()):h},e.align=function(b){return arguments.length?(m=Math.max(0,Math.min(1,b)),v()):m},e.copy=function(){return $0(t(),[n,o]).round(f).paddingInner(p).paddingOuter(h).align(m)},Vr.apply(v(),arguments)}function gE(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return gE(t())},e}function C9(){return gE($0.apply(null,arguments).paddingInner(1))}function U0(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function vE(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function bs(){}var ns=.7,zu=1/ns,go="\\s*([+-]?\\d+)\\s*",as="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",T9=/^#([0-9a-f]{3,8})$/,M9=new RegExp(`^rgb\\(${go},${go},${go}\\)$`),_9=new RegExp(`^rgb\\(${mn},${mn},${mn}\\)$`),P9=new RegExp(`^rgba\\(${go},${go},${go},${as}\\)$`),D9=new RegExp(`^rgba\\(${mn},${mn},${mn},${as}\\)$`),z9=new RegExp(`^hsl\\(${as},${mn},${mn}\\)$`),R9=new RegExp(`^hsla\\(${as},${mn},${mn},${as}\\)$`),dj={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};U0(bs,is,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:fj,formatHex:fj,formatHex8:L9,formatHsl:B9,formatRgb:pj,toString:pj});function fj(){return this.rgb().formatHex()}function L9(){return this.rgb().formatHex8()}function B9(){return xE(this).formatHsl()}function pj(){return this.rgb().formatRgb()}function is(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=T9.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?hj(t):r===3?new pr(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?ru(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?ru(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=M9.exec(e))?new pr(t[1],t[2],t[3],1):(t=_9.exec(e))?new pr(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=P9.exec(e))?ru(t[1],t[2],t[3],t[4]):(t=D9.exec(e))?ru(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=z9.exec(e))?vj(t[1],t[2]/100,t[3]/100,1):(t=R9.exec(e))?vj(t[1],t[2]/100,t[3]/100,t[4]):dj.hasOwnProperty(e)?hj(dj[e]):e==="transparent"?new pr(NaN,NaN,NaN,0):null}function hj(e){return new pr(e>>16&255,e>>8&255,e&255,1)}function ru(e,t,r,n){return n<=0&&(e=t=r=NaN),new pr(e,t,r,n)}function I9(e){return e instanceof bs||(e=is(e)),e?(e=e.rgb(),new pr(e.r,e.g,e.b,e.opacity)):new pr}function Rg(e,t,r,n){return arguments.length===1?I9(e):new pr(e,t,r,n??1)}function pr(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}U0(pr,Rg,vE(bs,{brighter(e){return e=e==null?zu:Math.pow(zu,e),new pr(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ns:Math.pow(ns,e),new pr(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new pr(fi(this.r),fi(this.g),fi(this.b),Ru(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:mj,formatHex:mj,formatHex8:q9,formatRgb:gj,toString:gj}));function mj(){return`#${li(this.r)}${li(this.g)}${li(this.b)}`}function q9(){return`#${li(this.r)}${li(this.g)}${li(this.b)}${li((isNaN(this.opacity)?1:this.opacity)*255)}`}function gj(){const e=Ru(this.opacity);return`${e===1?"rgb(":"rgba("}${fi(this.r)}, ${fi(this.g)}, ${fi(this.b)}${e===1?")":`, ${e})`}`}function Ru(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function fi(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function li(e){return e=fi(e),(e<16?"0":"")+e.toString(16)}function vj(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new en(e,t,r,n)}function xE(e){if(e instanceof en)return new en(e.h,e.s,e.l,e.opacity);if(e instanceof bs||(e=is(e)),!e)return new en;if(e instanceof en)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,o=Math.min(t,r,n),l=Math.max(t,r,n),u=NaN,f=l-o,p=(l+o)/2;return f?(t===l?u=(r-n)/f+(r<n)*6:r===l?u=(n-t)/f+2:u=(t-r)/f+4,f/=p<.5?l+o:2-l-o,u*=60):f=p>0&&p<1?0:u,new en(u,f,p,e.opacity)}function $9(e,t,r,n){return arguments.length===1?xE(e):new en(e,t,r,n??1)}function en(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}U0(en,$9,vE(bs,{brighter(e){return e=e==null?zu:Math.pow(zu,e),new en(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ns:Math.pow(ns,e),new en(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,o=2*r-n;return new pr(Mm(e>=240?e-240:e+120,o,n),Mm(e,o,n),Mm(e<120?e+240:e-120,o,n),this.opacity)},clamp(){return new en(xj(this.h),nu(this.s),nu(this.l),Ru(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ru(this.opacity);return`${e===1?"hsl(":"hsla("}${xj(this.h)}, ${nu(this.s)*100}%, ${nu(this.l)*100}%${e===1?")":`, ${e})`}`}}));function xj(e){return e=(e||0)%360,e<0?e+360:e}function nu(e){return Math.max(0,Math.min(1,e||0))}function Mm(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const H0=e=>()=>e;function U9(e,t){return function(r){return e+r*t}}function H9(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function Y9(e){return(e=+e)==1?yE:function(t,r){return r-t?H9(t,r,e):H0(isNaN(t)?r:t)}}function yE(e,t){var r=t-e;return r?U9(e,r):H0(isNaN(e)?t:e)}const yj=(function e(t){var r=Y9(t);function n(o,l){var u=r((o=Rg(o)).r,(l=Rg(l)).r),f=r(o.g,l.g),p=r(o.b,l.b),h=yE(o.opacity,l.opacity);return function(m){return o.r=u(m),o.g=f(m),o.b=p(m),o.opacity=h(m),o+""}}return n.gamma=e,n})(1);function G9(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),o;return function(l){for(o=0;o<r;++o)n[o]=e[o]*(1-l)+t[o]*l;return n}}function K9(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function W9(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,o=new Array(n),l=new Array(r),u;for(u=0;u<n;++u)o[u]=Mo(e[u],t[u]);for(;u<r;++u)l[u]=t[u];return function(f){for(u=0;u<n;++u)l[u]=o[u](f);return l}}function V9(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function Lu(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function X9(e,t){var r={},n={},o;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(o in t)o in e?r[o]=Mo(e[o],t[o]):n[o]=t[o];return function(l){for(o in r)n[o]=r[o](l);return n}}var Lg=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_m=new RegExp(Lg.source,"g");function F9(e){return function(){return e}}function Z9(e){return function(t){return e(t)+""}}function Q9(e,t){var r=Lg.lastIndex=_m.lastIndex=0,n,o,l,u=-1,f=[],p=[];for(e=e+"",t=t+"";(n=Lg.exec(e))&&(o=_m.exec(t));)(l=o.index)>r&&(l=t.slice(r,l),f[u]?f[u]+=l:f[++u]=l),(n=n[0])===(o=o[0])?f[u]?f[u]+=o:f[++u]=o:(f[++u]=null,p.push({i:u,x:Lu(n,o)})),r=_m.lastIndex;return r<t.length&&(l=t.slice(r),f[u]?f[u]+=l:f[++u]=l),f.length<2?p[0]?Z9(p[0].x):F9(t):(t=p.length,function(h){for(var m=0,v;m<t;++m)f[(v=p[m]).i]=v.x(h);return f.join("")})}function Mo(e,t){var r=typeof t,n;return t==null||r==="boolean"?H0(t):(r==="number"?Lu:r==="string"?(n=is(t))?(t=n,yj):Q9:t instanceof is?yj:t instanceof Date?V9:K9(t)?G9:Array.isArray(t)?W9:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?X9:Lu)(e,t)}function Y0(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function J9(e,t){t===void 0&&(t=e,e=Mo);for(var r=0,n=t.length-1,o=t[0],l=new Array(n<0?0:n);r<n;)l[r]=e(o,o=t[++r]);return function(u){var f=Math.max(0,Math.min(n-1,Math.floor(u*=n)));return l[f](u-f)}}function e7(e){return function(){return e}}function Bu(e){return+e}var bj=[0,1];function tr(e){return e}function Bg(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:e7(isNaN(t)?NaN:.5)}function t7(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function r7(e,t,r){var n=e[0],o=e[1],l=t[0],u=t[1];return o<n?(n=Bg(o,n),l=r(u,l)):(n=Bg(n,o),l=r(l,u)),function(f){return l(n(f))}}function n7(e,t,r){var n=Math.min(e.length,t.length)-1,o=new Array(n),l=new Array(n),u=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++u<n;)o[u]=Bg(e[u],e[u+1]),l[u]=r(t[u],t[u+1]);return function(f){var p=ys(e,f,1,n)-1;return l[p](o[p](f))}}function ws(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Dd(){var e=bj,t=bj,r=Mo,n,o,l,u=tr,f,p,h;function m(){var b=Math.min(e.length,t.length);return u!==tr&&(u=t7(e[0],e[b-1])),f=b>2?n7:r7,p=h=null,v}function v(b){return b==null||isNaN(b=+b)?l:(p||(p=f(e.map(n),t,r)))(n(u(b)))}return v.invert=function(b){return u(o((h||(h=f(t,e.map(n),Lu)))(b)))},v.domain=function(b){return arguments.length?(e=Array.from(b,Bu),m()):e.slice()},v.range=function(b){return arguments.length?(t=Array.from(b),m()):t.slice()},v.rangeRound=function(b){return t=Array.from(b),r=Y0,m()},v.clamp=function(b){return arguments.length?(u=b?!0:tr,m()):u!==tr},v.interpolate=function(b){return arguments.length?(r=b,m()):r},v.unknown=function(b){return arguments.length?(l=b,v):l},function(b,w){return n=b,o=w,m()}}function G0(){return Dd()(tr,tr)}function a7(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Iu(e,t){if((r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var r,n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function wo(e){return e=Iu(Math.abs(e)),e?e[1]:NaN}function i7(e,t){return function(r,n){for(var o=r.length,l=[],u=0,f=e[0],p=0;o>0&&f>0&&(p+f+1>n&&(f=Math.max(1,n-p)),l.push(r.substring(o-=f,o+f)),!((p+=f+1)>n));)f=e[u=(u+1)%e.length];return l.reverse().join(t)}}function o7(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var l7=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function os(e){if(!(t=l7.exec(e)))throw new Error("invalid format: "+e);var t;return new K0({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}os.prototype=K0.prototype;function K0(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}K0.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function s7(e){e:for(var t=e.length,r=1,n=-1,o;r<t;++r)switch(e[r]){case".":n=o=r;break;case"0":n===0&&(n=r),o=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(o+1):e}var bE;function c7(e,t){var r=Iu(e,t);if(!r)return e+"";var n=r[0],o=r[1],l=o-(bE=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,u=n.length;return l===u?n:l>u?n+new Array(l-u+1).join("0"):l>0?n.slice(0,l)+"."+n.slice(l):"0."+new Array(1-l).join("0")+Iu(e,Math.max(0,t+l-1))[0]}function wj(e,t){var r=Iu(e,t);if(!r)return e+"";var n=r[0],o=r[1];return o<0?"0."+new Array(-o).join("0")+n:n.length>o+1?n.slice(0,o+1)+"."+n.slice(o+1):n+new Array(o-n.length+2).join("0")}const jj={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:a7,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>wj(e*100,t),r:wj,s:c7,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Sj(e){return e}var Aj=Array.prototype.map,Oj=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function u7(e){var t=e.grouping===void 0||e.thousands===void 0?Sj:i7(Aj.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",o=e.decimal===void 0?".":e.decimal+"",l=e.numerals===void 0?Sj:o7(Aj.call(e.numerals,String)),u=e.percent===void 0?"%":e.percent+"",f=e.minus===void 0?"−":e.minus+"",p=e.nan===void 0?"NaN":e.nan+"";function h(v){v=os(v);var b=v.fill,w=v.align,A=v.sign,j=v.symbol,S=v.zero,E=v.width,C=v.comma,N=v.precision,_=v.trim,T=v.type;T==="n"?(C=!0,T="g"):jj[T]||(N===void 0&&(N=12),_=!0,T="g"),(S||b==="0"&&w==="=")&&(S=!0,b="0",w="=");var z=j==="$"?r:j==="#"&&/[boxX]/.test(T)?"0"+T.toLowerCase():"",U=j==="$"?n:/[%p]/.test(T)?u:"",X=jj[T],ee=/[defgprs%]/.test(T);N=N===void 0?6:/[gprs]/.test(T)?Math.max(1,Math.min(21,N)):Math.max(0,Math.min(20,N));function ae(F){var Q=z,pe=U,me,ye,q;if(T==="c")pe=X(F)+pe,F="";else{F=+F;var G=F<0||1/F<0;if(F=isNaN(F)?p:X(Math.abs(F),N),_&&(F=s7(F)),G&&+F==0&&A!=="+"&&(G=!1),Q=(G?A==="("?A:f:A==="-"||A==="("?"":A)+Q,pe=(T==="s"?Oj[8+bE/3]:"")+pe+(G&&A==="("?")":""),ee){for(me=-1,ye=F.length;++me<ye;)if(q=F.charCodeAt(me),48>q||q>57){pe=(q===46?o+F.slice(me+1):F.slice(me))+pe,F=F.slice(0,me);break}}}C&&!S&&(F=t(F,1/0));var re=Q.length+F.length+pe.length,ie=re<E?new Array(E-re+1).join(b):"";switch(C&&S&&(F=t(ie+F,ie.length?E-pe.length:1/0),ie=""),w){case"<":F=Q+F+pe+ie;break;case"=":F=Q+ie+F+pe;break;case"^":F=ie.slice(0,re=ie.length>>1)+Q+F+pe+ie.slice(re);break;default:F=ie+Q+F+pe;break}return l(F)}return ae.toString=function(){return v+""},ae}function m(v,b){var w=h((v=os(v),v.type="f",v)),A=Math.max(-8,Math.min(8,Math.floor(wo(b)/3)))*3,j=Math.pow(10,-A),S=Oj[8+A/3];return function(E){return w(j*E)+S}}return{format:h,formatPrefix:m}}var au,W0,wE;d7({thousands:",",grouping:[3],currency:["$",""]});function d7(e){return au=u7(e),W0=au.format,wE=au.formatPrefix,au}function f7(e){return Math.max(0,-wo(Math.abs(e)))}function p7(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(wo(t)/3)))*3-wo(Math.abs(e)))}function h7(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,wo(t)-wo(e))+1}function jE(e,t,r,n){var o=Dg(e,t,r),l;switch(n=os(n??",f"),n.type){case"s":{var u=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(l=p7(o,u))&&(n.precision=l),wE(n,u)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(l=h7(o,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=l-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(l=f7(o))&&(n.precision=l-(n.type==="%")*2);break}}return W0(n)}function Da(e){var t=e.domain;return e.ticks=function(r){var n=t();return _g(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var o=t();return jE(o[0],o[o.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),o=0,l=n.length-1,u=n[o],f=n[l],p,h,m=10;for(f<u&&(h=u,u=f,f=h,h=o,o=l,l=h);m-- >0;){if(h=Pg(u,f,r),h===p)return n[o]=u,n[l]=f,t(n);if(h>0)u=Math.floor(u/h)*h,f=Math.ceil(f/h)*h;else if(h<0)u=Math.ceil(u*h)/h,f=Math.floor(f*h)/h;else break;p=h}return e},e}function SE(){var e=G0();return e.copy=function(){return ws(e,SE())},Vr.apply(e,arguments),Da(e)}function AE(e){var t;function r(n){return n==null||isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(n){return arguments.length?(e=Array.from(n,Bu),r):e.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return AE(e).unknown(t)},e=arguments.length?Array.from(e,Bu):[0,1],Da(r)}function OE(e,t){e=e.slice();var r=0,n=e.length-1,o=e[r],l=e[n],u;return l<o&&(u=r,r=n,n=u,u=o,o=l,l=u),e[r]=t.floor(o),e[n]=t.ceil(l),e}function Ej(e){return Math.log(e)}function kj(e){return Math.exp(e)}function m7(e){return-Math.log(-e)}function g7(e){return-Math.exp(-e)}function v7(e){return isFinite(e)?+("1e"+e):e<0?0:e}function x7(e){return e===10?v7:e===Math.E?Math.exp:t=>Math.pow(e,t)}function y7(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function Nj(e){return(t,r)=>-e(-t,r)}function V0(e){const t=e(Ej,kj),r=t.domain;let n=10,o,l;function u(){return o=y7(n),l=x7(n),r()[0]<0?(o=Nj(o),l=Nj(l),e(m7,g7)):e(Ej,kj),t}return t.base=function(f){return arguments.length?(n=+f,u()):n},t.domain=function(f){return arguments.length?(r(f),u()):r()},t.ticks=f=>{const p=r();let h=p[0],m=p[p.length-1];const v=m<h;v&&([h,m]=[m,h]);let b=o(h),w=o(m),A,j;const S=f==null?10:+f;let E=[];if(!(n%1)&&w-b<S){if(b=Math.floor(b),w=Math.ceil(w),h>0){for(;b<=w;++b)for(A=1;A<n;++A)if(j=b<0?A/l(-b):A*l(b),!(j<h)){if(j>m)break;E.push(j)}}else for(;b<=w;++b)for(A=n-1;A>=1;--A)if(j=b>0?A/l(-b):A*l(b),!(j<h)){if(j>m)break;E.push(j)}E.length*2<S&&(E=_g(h,m,S))}else E=_g(b,w,Math.min(w-b,S)).map(l);return v?E.reverse():E},t.tickFormat=(f,p)=>{if(f==null&&(f=10),p==null&&(p=n===10?"s":","),typeof p!="function"&&(!(n%1)&&(p=os(p)).precision==null&&(p.trim=!0),p=W0(p)),f===1/0)return p;const h=Math.max(1,n*f/t.ticks().length);return m=>{let v=m/l(Math.round(o(m)));return v*n<n-.5&&(v*=n),v<=h?p(m):""}},t.nice=()=>r(OE(r(),{floor:f=>l(Math.floor(o(f))),ceil:f=>l(Math.ceil(o(f)))})),t}function EE(){const e=V0(Dd()).domain([1,10]);return e.copy=()=>ws(e,EE()).base(e.base()),Vr.apply(e,arguments),e}function Cj(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function Tj(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function X0(e){var t=1,r=e(Cj(t),Tj(t));return r.constant=function(n){return arguments.length?e(Cj(t=+n),Tj(t)):t},Da(r)}function kE(){var e=X0(Dd());return e.copy=function(){return ws(e,kE()).constant(e.constant())},Vr.apply(e,arguments)}function Mj(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function b7(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function w7(e){return e<0?-e*e:e*e}function F0(e){var t=e(tr,tr),r=1;function n(){return r===1?e(tr,tr):r===.5?e(b7,w7):e(Mj(r),Mj(1/r))}return t.exponent=function(o){return arguments.length?(r=+o,n()):r},Da(t)}function Z0(){var e=F0(Dd());return e.copy=function(){return ws(e,Z0()).exponent(e.exponent())},Vr.apply(e,arguments),e}function j7(){return Z0.apply(null,arguments).exponent(.5)}function _j(e){return Math.sign(e)*e*e}function S7(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function NE(){var e=G0(),t=[0,1],r=!1,n;function o(l){var u=S7(e(l));return isNaN(u)?n:r?Math.round(u):u}return o.invert=function(l){return e.invert(_j(l))},o.domain=function(l){return arguments.length?(e.domain(l),o):e.domain()},o.range=function(l){return arguments.length?(e.range((t=Array.from(l,Bu)).map(_j)),o):t.slice()},o.rangeRound=function(l){return o.range(l).round(!0)},o.round=function(l){return arguments.length?(r=!!l,o):r},o.clamp=function(l){return arguments.length?(e.clamp(l),o):e.clamp()},o.unknown=function(l){return arguments.length?(n=l,o):n},o.copy=function(){return NE(e.domain(),t).round(r).clamp(e.clamp()).unknown(n)},Vr.apply(o,arguments),Da(o)}function CE(){var e=[],t=[],r=[],n;function o(){var u=0,f=Math.max(1,t.length);for(r=new Array(f-1);++u<f;)r[u-1]=k9(e,u/f);return l}function l(u){return u==null||isNaN(u=+u)?n:t[ys(r,u)]}return l.invertExtent=function(u){var f=t.indexOf(u);return f<0?[NaN,NaN]:[f>0?r[f-1]:e[0],f<r.length?r[f]:e[e.length-1]]},l.domain=function(u){if(!arguments.length)return e.slice();e=[];for(let f of u)f!=null&&!isNaN(f=+f)&&e.push(f);return e.sort(Ta),o()},l.range=function(u){return arguments.length?(t=Array.from(u),o()):t.slice()},l.unknown=function(u){return arguments.length?(n=u,l):n},l.quantiles=function(){return r.slice()},l.copy=function(){return CE().domain(e).range(t).unknown(n)},Vr.apply(l,arguments)}function TE(){var e=0,t=1,r=1,n=[.5],o=[0,1],l;function u(p){return p!=null&&p<=p?o[ys(n,p,0,r)]:l}function f(){var p=-1;for(n=new Array(r);++p<r;)n[p]=((p+1)*t-(p-r)*e)/(r+1);return u}return u.domain=function(p){return arguments.length?([e,t]=p,e=+e,t=+t,f()):[e,t]},u.range=function(p){return arguments.length?(r=(o=Array.from(p)).length-1,f()):o.slice()},u.invertExtent=function(p){var h=o.indexOf(p);return h<0?[NaN,NaN]:h<1?[e,n[0]]:h>=r?[n[r-1],t]:[n[h-1],n[h]]},u.unknown=function(p){return arguments.length&&(l=p),u},u.thresholds=function(){return n.slice()},u.copy=function(){return TE().domain([e,t]).range(o).unknown(l)},Vr.apply(Da(u),arguments)}function ME(){var e=[.5],t=[0,1],r,n=1;function o(l){return l!=null&&l<=l?t[ys(e,l,0,n)]:r}return o.domain=function(l){return arguments.length?(e=Array.from(l),n=Math.min(e.length,t.length-1),o):e.slice()},o.range=function(l){return arguments.length?(t=Array.from(l),n=Math.min(e.length,t.length-1),o):t.slice()},o.invertExtent=function(l){var u=t.indexOf(l);return[e[u-1],e[u]]},o.unknown=function(l){return arguments.length?(r=l,o):r},o.copy=function(){return ME().domain(e).range(t).unknown(r)},Vr.apply(o,arguments)}const Pm=new Date,Dm=new Date;function At(e,t,r,n){function o(l){return e(l=arguments.length===0?new Date:new Date(+l)),l}return o.floor=l=>(e(l=new Date(+l)),l),o.ceil=l=>(e(l=new Date(l-1)),t(l,1),e(l),l),o.round=l=>{const u=o(l),f=o.ceil(l);return l-u<f-l?u:f},o.offset=(l,u)=>(t(l=new Date(+l),u==null?1:Math.floor(u)),l),o.range=(l,u,f)=>{const p=[];if(l=o.ceil(l),f=f==null?1:Math.floor(f),!(l<u)||!(f>0))return p;let h;do p.push(h=new Date(+l)),t(l,f),e(l);while(h<l&&l<u);return p},o.filter=l=>At(u=>{if(u>=u)for(;e(u),!l(u);)u.setTime(u-1)},(u,f)=>{if(u>=u)if(f<0)for(;++f<=0;)for(;t(u,-1),!l(u););else for(;--f>=0;)for(;t(u,1),!l(u););}),r&&(o.count=(l,u)=>(Pm.setTime(+l),Dm.setTime(+u),e(Pm),e(Dm),Math.floor(r(Pm,Dm))),o.every=l=>(l=Math.floor(l),!isFinite(l)||!(l>0)?null:l>1?o.filter(n?u=>n(u)%l===0:u=>o.count(0,u)%l===0):o)),o}const qu=At(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);qu.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?At(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):qu);qu.range;const Ln=1e3,Hr=Ln*60,Bn=Hr*60,Gn=Bn*24,Q0=Gn*7,Pj=Gn*30,zm=Gn*365,si=At(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*Ln)},(e,t)=>(t-e)/Ln,e=>e.getUTCSeconds());si.range;const J0=At(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Ln)},(e,t)=>{e.setTime(+e+t*Hr)},(e,t)=>(t-e)/Hr,e=>e.getMinutes());J0.range;const ev=At(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Hr)},(e,t)=>(t-e)/Hr,e=>e.getUTCMinutes());ev.range;const tv=At(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*Ln-e.getMinutes()*Hr)},(e,t)=>{e.setTime(+e+t*Bn)},(e,t)=>(t-e)/Bn,e=>e.getHours());tv.range;const rv=At(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*Bn)},(e,t)=>(t-e)/Bn,e=>e.getUTCHours());rv.range;const js=At(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Hr)/Gn,e=>e.getDate()-1);js.range;const zd=At(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gn,e=>e.getUTCDate()-1);zd.range;const _E=At(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/Gn,e=>Math.floor(e/Gn));_E.range;function ji(e){return At(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*Hr)/Q0)}const Rd=ji(0),$u=ji(1),A7=ji(2),O7=ji(3),jo=ji(4),E7=ji(5),k7=ji(6);Rd.range;$u.range;A7.range;O7.range;jo.range;E7.range;k7.range;function Si(e){return At(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/Q0)}const Ld=Si(0),Uu=Si(1),N7=Si(2),C7=Si(3),So=Si(4),T7=Si(5),M7=Si(6);Ld.range;Uu.range;N7.range;C7.range;So.range;T7.range;M7.range;const nv=At(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());nv.range;const av=At(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());av.range;const Kn=At(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());Kn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:At(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});Kn.range;const Wn=At(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());Wn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:At(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});Wn.range;function PE(e,t,r,n,o,l){const u=[[si,1,Ln],[si,5,5*Ln],[si,15,15*Ln],[si,30,30*Ln],[l,1,Hr],[l,5,5*Hr],[l,15,15*Hr],[l,30,30*Hr],[o,1,Bn],[o,3,3*Bn],[o,6,6*Bn],[o,12,12*Bn],[n,1,Gn],[n,2,2*Gn],[r,1,Q0],[t,1,Pj],[t,3,3*Pj],[e,1,zm]];function f(h,m,v){const b=m<h;b&&([h,m]=[m,h]);const w=v&&typeof v.range=="function"?v:p(h,m,v),A=w?w.range(h,+m+1):[];return b?A.reverse():A}function p(h,m,v){const b=Math.abs(m-h)/v,w=I0(([,,S])=>S).right(u,b);if(w===u.length)return e.every(Dg(h/zm,m/zm,v));if(w===0)return qu.every(Math.max(Dg(h,m,v),1));const[A,j]=u[b/u[w-1][2]<u[w][2]/b?w-1:w];return A.every(j)}return[f,p]}const[_7,P7]=PE(Wn,av,Ld,_E,rv,ev),[D7,z7]=PE(Kn,nv,Rd,js,tv,J0);function Rm(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function Lm(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Hl(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function R7(e){var t=e.dateTime,r=e.date,n=e.time,o=e.periods,l=e.days,u=e.shortDays,f=e.months,p=e.shortMonths,h=Yl(o),m=Gl(o),v=Yl(l),b=Gl(l),w=Yl(u),A=Gl(u),j=Yl(f),S=Gl(f),E=Yl(p),C=Gl(p),N={a:G,A:re,b:ie,B:P,c:null,d:Ij,e:Ij,f:iL,g:mL,G:vL,H:rL,I:nL,j:aL,L:DE,m:oL,M:lL,p:W,q:ne,Q:Uj,s:Hj,S:sL,u:cL,U:uL,V:dL,w:fL,W:pL,x:null,X:null,y:hL,Y:gL,Z:xL,"%":$j},_={a:te,A:le,b:je,B:ge,c:null,d:qj,e:qj,f:jL,g:_L,G:DL,H:yL,I:bL,j:wL,L:RE,m:SL,M:AL,p:$e,q:Ue,Q:Uj,s:Hj,S:OL,u:EL,U:kL,V:NL,w:CL,W:TL,x:null,X:null,y:ML,Y:PL,Z:zL,"%":$j},T={a:ae,A:F,b:Q,B:pe,c:me,d:Lj,e:Lj,f:Q7,g:Rj,G:zj,H:Bj,I:Bj,j:V7,L:Z7,m:W7,M:X7,p:ee,q:K7,Q:eL,s:tL,S:F7,u:$7,U:U7,V:H7,w:q7,W:Y7,x:ye,X:q,y:Rj,Y:zj,Z:G7,"%":J7};N.x=z(r,N),N.X=z(n,N),N.c=z(t,N),_.x=z(r,_),_.X=z(n,_),_.c=z(t,_);function z(Z,Se){return function(Ne){var J=[],Nt=-1,Re=0,Zt=Z.length,Qt,Ct,Ts;for(Ne instanceof Date||(Ne=new Date(+Ne));++Nt<Zt;)Z.charCodeAt(Nt)===37&&(J.push(Z.slice(Re,Nt)),(Ct=Dj[Qt=Z.charAt(++Nt)])!=null?Qt=Z.charAt(++Nt):Ct=Qt==="e"?" ":"0",(Ts=Se[Qt])&&(Qt=Ts(Ne,Ct)),J.push(Qt),Re=Nt+1);return J.push(Z.slice(Re,Nt)),J.join("")}}function U(Z,Se){return function(Ne){var J=Hl(1900,void 0,1),Nt=X(J,Z,Ne+="",0),Re,Zt;if(Nt!=Ne.length)return null;if("Q"in J)return new Date(J.Q);if("s"in J)return new Date(J.s*1e3+("L"in J?J.L:0));if(Se&&!("Z"in J)&&(J.Z=0),"p"in J&&(J.H=J.H%12+J.p*12),J.m===void 0&&(J.m="q"in J?J.q:0),"V"in J){if(J.V<1||J.V>53)return null;"w"in J||(J.w=1),"Z"in J?(Re=Lm(Hl(J.y,0,1)),Zt=Re.getUTCDay(),Re=Zt>4||Zt===0?Uu.ceil(Re):Uu(Re),Re=zd.offset(Re,(J.V-1)*7),J.y=Re.getUTCFullYear(),J.m=Re.getUTCMonth(),J.d=Re.getUTCDate()+(J.w+6)%7):(Re=Rm(Hl(J.y,0,1)),Zt=Re.getDay(),Re=Zt>4||Zt===0?$u.ceil(Re):$u(Re),Re=js.offset(Re,(J.V-1)*7),J.y=Re.getFullYear(),J.m=Re.getMonth(),J.d=Re.getDate()+(J.w+6)%7)}else("W"in J||"U"in J)&&("w"in J||(J.w="u"in J?J.u%7:"W"in J?1:0),Zt="Z"in J?Lm(Hl(J.y,0,1)).getUTCDay():Rm(Hl(J.y,0,1)).getDay(),J.m=0,J.d="W"in J?(J.w+6)%7+J.W*7-(Zt+5)%7:J.w+J.U*7-(Zt+6)%7);return"Z"in J?(J.H+=J.Z/100|0,J.M+=J.Z%100,Lm(J)):Rm(J)}}function X(Z,Se,Ne,J){for(var Nt=0,Re=Se.length,Zt=Ne.length,Qt,Ct;Nt<Re;){if(J>=Zt)return-1;if(Qt=Se.charCodeAt(Nt++),Qt===37){if(Qt=Se.charAt(Nt++),Ct=T[Qt in Dj?Se.charAt(Nt++):Qt],!Ct||(J=Ct(Z,Ne,J))<0)return-1}else if(Qt!=Ne.charCodeAt(J++))return-1}return J}function ee(Z,Se,Ne){var J=h.exec(Se.slice(Ne));return J?(Z.p=m.get(J[0].toLowerCase()),Ne+J[0].length):-1}function ae(Z,Se,Ne){var J=w.exec(Se.slice(Ne));return J?(Z.w=A.get(J[0].toLowerCase()),Ne+J[0].length):-1}function F(Z,Se,Ne){var J=v.exec(Se.slice(Ne));return J?(Z.w=b.get(J[0].toLowerCase()),Ne+J[0].length):-1}function Q(Z,Se,Ne){var J=E.exec(Se.slice(Ne));return J?(Z.m=C.get(J[0].toLowerCase()),Ne+J[0].length):-1}function pe(Z,Se,Ne){var J=j.exec(Se.slice(Ne));return J?(Z.m=S.get(J[0].toLowerCase()),Ne+J[0].length):-1}function me(Z,Se,Ne){return X(Z,t,Se,Ne)}function ye(Z,Se,Ne){return X(Z,r,Se,Ne)}function q(Z,Se,Ne){return X(Z,n,Se,Ne)}function G(Z){return u[Z.getDay()]}function re(Z){return l[Z.getDay()]}function ie(Z){return p[Z.getMonth()]}function P(Z){return f[Z.getMonth()]}function W(Z){return o[+(Z.getHours()>=12)]}function ne(Z){return 1+~~(Z.getMonth()/3)}function te(Z){return u[Z.getUTCDay()]}function le(Z){return l[Z.getUTCDay()]}function je(Z){return p[Z.getUTCMonth()]}function ge(Z){return f[Z.getUTCMonth()]}function $e(Z){return o[+(Z.getUTCHours()>=12)]}function Ue(Z){return 1+~~(Z.getUTCMonth()/3)}return{format:function(Z){var Se=z(Z+="",N);return Se.toString=function(){return Z},Se},parse:function(Z){var Se=U(Z+="",!1);return Se.toString=function(){return Z},Se},utcFormat:function(Z){var Se=z(Z+="",_);return Se.toString=function(){return Z},Se},utcParse:function(Z){var Se=U(Z+="",!0);return Se.toString=function(){return Z},Se}}}var Dj={"-":"",_:" ",0:"0"},Bt=/^\s*\d+/,L7=/^%/,B7=/[\\^$*+?|[\]().{}]/g;function Pe(e,t,r){var n=e<0?"-":"",o=(n?-e:e)+"",l=o.length;return n+(l<r?new Array(r-l+1).join(t)+o:o)}function I7(e){return e.replace(B7,"\\$&")}function Yl(e){return new RegExp("^(?:"+e.map(I7).join("|")+")","i")}function Gl(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function q7(e,t,r){var n=Bt.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function $7(e,t,r){var n=Bt.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function U7(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function H7(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function Y7(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function zj(e,t,r){var n=Bt.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function Rj(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function G7(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function K7(e,t,r){var n=Bt.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function W7(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function Lj(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function V7(e,t,r){var n=Bt.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function Bj(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function X7(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function F7(e,t,r){var n=Bt.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function Z7(e,t,r){var n=Bt.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function Q7(e,t,r){var n=Bt.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function J7(e,t,r){var n=L7.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function eL(e,t,r){var n=Bt.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function tL(e,t,r){var n=Bt.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function Ij(e,t){return Pe(e.getDate(),t,2)}function rL(e,t){return Pe(e.getHours(),t,2)}function nL(e,t){return Pe(e.getHours()%12||12,t,2)}function aL(e,t){return Pe(1+js.count(Kn(e),e),t,3)}function DE(e,t){return Pe(e.getMilliseconds(),t,3)}function iL(e,t){return DE(e,t)+"000"}function oL(e,t){return Pe(e.getMonth()+1,t,2)}function lL(e,t){return Pe(e.getMinutes(),t,2)}function sL(e,t){return Pe(e.getSeconds(),t,2)}function cL(e){var t=e.getDay();return t===0?7:t}function uL(e,t){return Pe(Rd.count(Kn(e)-1,e),t,2)}function zE(e){var t=e.getDay();return t>=4||t===0?jo(e):jo.ceil(e)}function dL(e,t){return e=zE(e),Pe(jo.count(Kn(e),e)+(Kn(e).getDay()===4),t,2)}function fL(e){return e.getDay()}function pL(e,t){return Pe($u.count(Kn(e)-1,e),t,2)}function hL(e,t){return Pe(e.getFullYear()%100,t,2)}function mL(e,t){return e=zE(e),Pe(e.getFullYear()%100,t,2)}function gL(e,t){return Pe(e.getFullYear()%1e4,t,4)}function vL(e,t){var r=e.getDay();return e=r>=4||r===0?jo(e):jo.ceil(e),Pe(e.getFullYear()%1e4,t,4)}function xL(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+Pe(t/60|0,"0",2)+Pe(t%60,"0",2)}function qj(e,t){return Pe(e.getUTCDate(),t,2)}function yL(e,t){return Pe(e.getUTCHours(),t,2)}function bL(e,t){return Pe(e.getUTCHours()%12||12,t,2)}function wL(e,t){return Pe(1+zd.count(Wn(e),e),t,3)}function RE(e,t){return Pe(e.getUTCMilliseconds(),t,3)}function jL(e,t){return RE(e,t)+"000"}function SL(e,t){return Pe(e.getUTCMonth()+1,t,2)}function AL(e,t){return Pe(e.getUTCMinutes(),t,2)}function OL(e,t){return Pe(e.getUTCSeconds(),t,2)}function EL(e){var t=e.getUTCDay();return t===0?7:t}function kL(e,t){return Pe(Ld.count(Wn(e)-1,e),t,2)}function LE(e){var t=e.getUTCDay();return t>=4||t===0?So(e):So.ceil(e)}function NL(e,t){return e=LE(e),Pe(So.count(Wn(e),e)+(Wn(e).getUTCDay()===4),t,2)}function CL(e){return e.getUTCDay()}function TL(e,t){return Pe(Uu.count(Wn(e)-1,e),t,2)}function ML(e,t){return Pe(e.getUTCFullYear()%100,t,2)}function _L(e,t){return e=LE(e),Pe(e.getUTCFullYear()%100,t,2)}function PL(e,t){return Pe(e.getUTCFullYear()%1e4,t,4)}function DL(e,t){var r=e.getUTCDay();return e=r>=4||r===0?So(e):So.ceil(e),Pe(e.getUTCFullYear()%1e4,t,4)}function zL(){return"+0000"}function $j(){return"%"}function Uj(e){return+e}function Hj(e){return Math.floor(+e/1e3)}var co,BE,IE;RL({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function RL(e){return co=R7(e),BE=co.format,co.parse,IE=co.utcFormat,co.utcParse,co}function LL(e){return new Date(e)}function BL(e){return e instanceof Date?+e:+new Date(+e)}function iv(e,t,r,n,o,l,u,f,p,h){var m=G0(),v=m.invert,b=m.domain,w=h(".%L"),A=h(":%S"),j=h("%I:%M"),S=h("%I %p"),E=h("%a %d"),C=h("%b %d"),N=h("%B"),_=h("%Y");function T(z){return(p(z)<z?w:f(z)<z?A:u(z)<z?j:l(z)<z?S:n(z)<z?o(z)<z?E:C:r(z)<z?N:_)(z)}return m.invert=function(z){return new Date(v(z))},m.domain=function(z){return arguments.length?b(Array.from(z,BL)):b().map(LL)},m.ticks=function(z){var U=b();return e(U[0],U[U.length-1],z??10)},m.tickFormat=function(z,U){return U==null?T:h(U)},m.nice=function(z){var U=b();return(!z||typeof z.range!="function")&&(z=t(U[0],U[U.length-1],z??10)),z?b(OE(U,z)):m},m.copy=function(){return ws(m,iv(e,t,r,n,o,l,u,f,p,h))},m}function IL(){return Vr.apply(iv(D7,z7,Kn,nv,Rd,js,tv,J0,si,BE).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function qL(){return Vr.apply(iv(_7,P7,Wn,av,Ld,zd,rv,ev,si,IE).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Bd(){var e=0,t=1,r,n,o,l,u=tr,f=!1,p;function h(v){return v==null||isNaN(v=+v)?p:u(o===0?.5:(v=(l(v)-r)*o,f?Math.max(0,Math.min(1,v)):v))}h.domain=function(v){return arguments.length?([e,t]=v,r=l(e=+e),n=l(t=+t),o=r===n?0:1/(n-r),h):[e,t]},h.clamp=function(v){return arguments.length?(f=!!v,h):f},h.interpolator=function(v){return arguments.length?(u=v,h):u};function m(v){return function(b){var w,A;return arguments.length?([w,A]=b,u=v(w,A),h):[u(0),u(1)]}}return h.range=m(Mo),h.rangeRound=m(Y0),h.unknown=function(v){return arguments.length?(p=v,h):p},function(v){return l=v,r=v(e),n=v(t),o=r===n?0:1/(n-r),h}}function za(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function qE(){var e=Da(Bd()(tr));return e.copy=function(){return za(e,qE())},Jn.apply(e,arguments)}function $E(){var e=V0(Bd()).domain([1,10]);return e.copy=function(){return za(e,$E()).base(e.base())},Jn.apply(e,arguments)}function UE(){var e=X0(Bd());return e.copy=function(){return za(e,UE()).constant(e.constant())},Jn.apply(e,arguments)}function ov(){var e=F0(Bd());return e.copy=function(){return za(e,ov()).exponent(e.exponent())},Jn.apply(e,arguments)}function $L(){return ov.apply(null,arguments).exponent(.5)}function HE(){var e=[],t=tr;function r(n){if(n!=null&&!isNaN(n=+n))return t((ys(e,n,1)-1)/(e.length-1))}return r.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let o of n)o!=null&&!isNaN(o=+o)&&e.push(o);return e.sort(Ta),r},r.interpolator=function(n){return arguments.length?(t=n,r):t},r.range=function(){return e.map((n,o)=>t(o/(e.length-1)))},r.quantiles=function(n){return Array.from({length:n+1},(o,l)=>E9(e,l/n))},r.copy=function(){return HE(t).domain(e)},Jn.apply(r,arguments)}function Id(){var e=0,t=.5,r=1,n=1,o,l,u,f,p,h=tr,m,v=!1,b;function w(j){return isNaN(j=+j)?b:(j=.5+((j=+m(j))-l)*(n*j<n*l?f:p),h(v?Math.max(0,Math.min(1,j)):j))}w.domain=function(j){return arguments.length?([e,t,r]=j,o=m(e=+e),l=m(t=+t),u=m(r=+r),f=o===l?0:.5/(l-o),p=l===u?0:.5/(u-l),n=l<o?-1:1,w):[e,t,r]},w.clamp=function(j){return arguments.length?(v=!!j,w):v},w.interpolator=function(j){return arguments.length?(h=j,w):h};function A(j){return function(S){var E,C,N;return arguments.length?([E,C,N]=S,h=J9(j,[E,C,N]),w):[h(0),h(.5),h(1)]}}return w.range=A(Mo),w.rangeRound=A(Y0),w.unknown=function(j){return arguments.length?(b=j,w):b},function(j){return m=j,o=j(e),l=j(t),u=j(r),f=o===l?0:.5/(l-o),p=l===u?0:.5/(u-l),n=l<o?-1:1,w}}function YE(){var e=Da(Id()(tr));return e.copy=function(){return za(e,YE())},Jn.apply(e,arguments)}function GE(){var e=V0(Id()).domain([.1,1,10]);return e.copy=function(){return za(e,GE()).base(e.base())},Jn.apply(e,arguments)}function KE(){var e=X0(Id());return e.copy=function(){return za(e,KE()).constant(e.constant())},Jn.apply(e,arguments)}function lv(){var e=F0(Id());return e.copy=function(){return za(e,lv()).exponent(e.exponent())},Jn.apply(e,arguments)}function UL(){return lv.apply(null,arguments).exponent(.5)}const Vl=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:$0,scaleDiverging:YE,scaleDivergingLog:GE,scaleDivergingPow:lv,scaleDivergingSqrt:UL,scaleDivergingSymlog:KE,scaleIdentity:AE,scaleImplicit:zg,scaleLinear:SE,scaleLog:EE,scaleOrdinal:q0,scalePoint:C9,scalePow:Z0,scaleQuantile:CE,scaleQuantize:TE,scaleRadial:NE,scaleSequential:qE,scaleSequentialLog:$E,scaleSequentialPow:ov,scaleSequentialQuantile:HE,scaleSequentialSqrt:$L,scaleSequentialSymlog:UE,scaleSqrt:j7,scaleSymlog:kE,scaleThreshold:ME,scaleTime:IL,scaleUtc:qL,tickFormat:jE},Symbol.toStringTag,{value:"Module"}));var Ra=e=>e.chartData,HL=H([Ra],e=>{var t=e.chartData!=null?e.chartData.length-1:0;return{chartData:e.chartData,computedData:e.computedData,dataEndIndex:t,dataStartIndex:0}}),qd=(e,t,r,n)=>n?HL(e):Ra(e);function gi(e){if(Array.isArray(e)&&e.length===2){var[t,r]=e;if(ht(t)&&ht(r))return!0}return!1}function Yj(e,t,r){return r?e:[Math.min(e[0],t[0]),Math.max(e[1],t[1])]}function WE(e,t){if(t&&typeof e!="function"&&Array.isArray(e)&&e.length===2){var[r,n]=e,o,l;if(ht(r))o=r;else if(typeof r=="function")return;if(ht(n))l=n;else if(typeof n=="function")return;var u=[o,l];if(gi(u))return u}}function YL(e,t,r){if(!(!r&&t==null)){if(typeof e=="function"&&t!=null)try{var n=e(t,r);if(gi(n))return Yj(n,t,r)}catch{}if(Array.isArray(e)&&e.length===2){var[o,l]=e,u,f;if(o==="auto")t!=null&&(u=Math.min(...t));else if(ue(o))u=o;else if(typeof o=="function")try{t!=null&&(u=o(t?.[0]))}catch{}else if(typeof o=="string"&&A2.test(o)){var p=A2.exec(o);if(p==null||t==null)u=void 0;else{var h=+p[1];u=t[0]-h}}else u=t?.[0];if(l==="auto")t!=null&&(f=Math.max(...t));else if(ue(l))f=l;else if(typeof l=="function")try{t!=null&&(f=l(t?.[1]))}catch{}else if(typeof l=="string"&&O2.test(l)){var m=O2.exec(l);if(m==null||t==null)f=void 0;else{var v=+m[1];f=t[1]+v}}else f=t?.[1];var b=[u,f];if(gi(b))return t==null?b:Yj(b,t,r)}}}var _o=1e9,GL={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},cv,et=!0,Kr="[DecimalError] ",pi=Kr+"Invalid argument: ",sv=Kr+"Exponent out of range: ",Po=Math.floor,oi=Math.pow,KL=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,kr,Dt=1e7,Qe=7,VE=9007199254740991,Hu=Po(VE/Qe),oe={};oe.absoluteValue=oe.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};oe.comparedTo=oe.cmp=function(e){var t,r,n,o,l=this;if(e=new l.constructor(e),l.s!==e.s)return l.s||-e.s;if(l.e!==e.e)return l.e>e.e^l.s<0?1:-1;for(n=l.d.length,o=e.d.length,t=0,r=n<o?n:o;t<r;++t)if(l.d[t]!==e.d[t])return l.d[t]>e.d[t]^l.s<0?1:-1;return n===o?0:n>o^l.s<0?1:-1};oe.decimalPlaces=oe.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*Qe;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r};oe.dividedBy=oe.div=function(e){return $n(this,new this.constructor(e))};oe.dividedToIntegerBy=oe.idiv=function(e){var t=this,r=t.constructor;return Ve($n(t,new r(e),0,1),r.precision)};oe.equals=oe.eq=function(e){return!this.cmp(e)};oe.exponent=function(){return xt(this)};oe.greaterThan=oe.gt=function(e){return this.cmp(e)>0};oe.greaterThanOrEqualTo=oe.gte=function(e){return this.cmp(e)>=0};oe.isInteger=oe.isint=function(){return this.e>this.d.length-2};oe.isNegative=oe.isneg=function(){return this.s<0};oe.isPositive=oe.ispos=function(){return this.s>0};oe.isZero=function(){return this.s===0};oe.lessThan=oe.lt=function(e){return this.cmp(e)<0};oe.lessThanOrEqualTo=oe.lte=function(e){return this.cmp(e)<1};oe.logarithm=oe.log=function(e){var t,r=this,n=r.constructor,o=n.precision,l=o+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(kr))throw Error(Kr+"NaN");if(r.s<1)throw Error(Kr+(r.s?"NaN":"-Infinity"));return r.eq(kr)?new n(0):(et=!1,t=$n(ls(r,l),ls(e,l),l),et=!0,Ve(t,o))};oe.minus=oe.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?ZE(t,e):XE(t,(e.s=-e.s,e))};oe.modulo=oe.mod=function(e){var t,r=this,n=r.constructor,o=n.precision;if(e=new n(e),!e.s)throw Error(Kr+"NaN");return r.s?(et=!1,t=$n(r,e,0,1).times(e),et=!0,r.minus(t)):Ve(new n(r),o)};oe.naturalExponential=oe.exp=function(){return FE(this)};oe.naturalLogarithm=oe.ln=function(){return ls(this)};oe.negated=oe.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};oe.plus=oe.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?XE(t,e):ZE(t,(e.s=-e.s,e))};oe.precision=oe.sd=function(e){var t,r,n,o=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(pi+e);if(t=xt(o)+1,n=o.d.length-1,r=n*Qe+1,n=o.d[n],n){for(;n%10==0;n/=10)r--;for(n=o.d[0];n>=10;n/=10)r++}return e&&t>r?t:r};oe.squareRoot=oe.sqrt=function(){var e,t,r,n,o,l,u,f=this,p=f.constructor;if(f.s<1){if(!f.s)return new p(0);throw Error(Kr+"NaN")}for(e=xt(f),et=!1,o=Math.sqrt(+f),o==0||o==1/0?(t=hn(f.d),(t.length+e)%2==0&&(t+="0"),o=Math.sqrt(t),e=Po((e+1)/2)-(e<0||e%2),o==1/0?t="5e"+e:(t=o.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new p(t)):n=new p(o.toString()),r=p.precision,o=u=r+3;;)if(l=n,n=l.plus($n(f,l,u+2)).times(.5),hn(l.d).slice(0,u)===(t=hn(n.d)).slice(0,u)){if(t=t.slice(u-3,u+1),o==u&&t=="4999"){if(Ve(l,r+1,0),l.times(l).eq(f)){n=l;break}}else if(t!="9999")break;u+=4}return et=!0,Ve(n,r)};oe.times=oe.mul=function(e){var t,r,n,o,l,u,f,p,h,m=this,v=m.constructor,b=m.d,w=(e=new v(e)).d;if(!m.s||!e.s)return new v(0);for(e.s*=m.s,r=m.e+e.e,p=b.length,h=w.length,p<h&&(l=b,b=w,w=l,u=p,p=h,h=u),l=[],u=p+h,n=u;n--;)l.push(0);for(n=h;--n>=0;){for(t=0,o=p+n;o>n;)f=l[o]+w[n]*b[o-n-1]+t,l[o--]=f%Dt|0,t=f/Dt|0;l[o]=(l[o]+t)%Dt|0}for(;!l[--u];)l.pop();return t?++r:l.shift(),e.d=l,e.e=r,et?Ve(e,v.precision):e};oe.toDecimalPlaces=oe.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(xn(e,0,_o),t===void 0?t=n.rounding:xn(t,0,8),Ve(r,e+xt(r)+1,t))};oe.toExponential=function(e,t){var r,n=this,o=n.constructor;return e===void 0?r=vi(n,!0):(xn(e,0,_o),t===void 0?t=o.rounding:xn(t,0,8),n=Ve(new o(n),e+1,t),r=vi(n,!0,e+1)),r};oe.toFixed=function(e,t){var r,n,o=this,l=o.constructor;return e===void 0?vi(o):(xn(e,0,_o),t===void 0?t=l.rounding:xn(t,0,8),n=Ve(new l(o),e+xt(o)+1,t),r=vi(n.abs(),!1,e+xt(n)+1),o.isneg()&&!o.isZero()?"-"+r:r)};oe.toInteger=oe.toint=function(){var e=this,t=e.constructor;return Ve(new t(e),xt(e)+1,t.rounding)};oe.toNumber=function(){return+this};oe.toPower=oe.pow=function(e){var t,r,n,o,l,u,f=this,p=f.constructor,h=12,m=+(e=new p(e));if(!e.s)return new p(kr);if(f=new p(f),!f.s){if(e.s<1)throw Error(Kr+"Infinity");return f}if(f.eq(kr))return f;if(n=p.precision,e.eq(kr))return Ve(f,n);if(t=e.e,r=e.d.length-1,u=t>=r,l=f.s,u){if((r=m<0?-m:m)<=VE){for(o=new p(kr),t=Math.ceil(n/Qe+4),et=!1;r%2&&(o=o.times(f),Kj(o.d,t)),r=Po(r/2),r!==0;)f=f.times(f),Kj(f.d,t);return et=!0,e.s<0?new p(kr).div(o):Ve(o,n)}}else if(l<0)throw Error(Kr+"NaN");return l=l<0&&e.d[Math.max(t,r)]&1?-1:1,f.s=1,et=!1,o=e.times(ls(f,n+h)),et=!0,o=FE(o),o.s=l,o};oe.toPrecision=function(e,t){var r,n,o=this,l=o.constructor;return e===void 0?(r=xt(o),n=vi(o,r<=l.toExpNeg||r>=l.toExpPos)):(xn(e,1,_o),t===void 0?t=l.rounding:xn(t,0,8),o=Ve(new l(o),e,t),r=xt(o),n=vi(o,e<=r||r<=l.toExpNeg,e)),n};oe.toSignificantDigits=oe.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(xn(e,1,_o),t===void 0?t=n.rounding:xn(t,0,8)),Ve(new n(r),e,t)};oe.toString=oe.valueOf=oe.val=oe.toJSON=oe[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=xt(e),r=e.constructor;return vi(e,t<=r.toExpNeg||t>=r.toExpPos)};function XE(e,t){var r,n,o,l,u,f,p,h,m=e.constructor,v=m.precision;if(!e.s||!t.s)return t.s||(t=new m(e)),et?Ve(t,v):t;if(p=e.d,h=t.d,u=e.e,o=t.e,p=p.slice(),l=u-o,l){for(l<0?(n=p,l=-l,f=h.length):(n=h,o=u,f=p.length),u=Math.ceil(v/Qe),f=u>f?u+1:f+1,l>f&&(l=f,n.length=1),n.reverse();l--;)n.push(0);n.reverse()}for(f=p.length,l=h.length,f-l<0&&(l=f,n=h,h=p,p=n),r=0;l;)r=(p[--l]=p[l]+h[l]+r)/Dt|0,p[l]%=Dt;for(r&&(p.unshift(r),++o),f=p.length;p[--f]==0;)p.pop();return t.d=p,t.e=o,et?Ve(t,v):t}function xn(e,t,r){if(e!==~~e||e<t||e>r)throw Error(pi+e)}function hn(e){var t,r,n,o=e.length-1,l="",u=e[0];if(o>0){for(l+=u,t=1;t<o;t++)n=e[t]+"",r=Qe-n.length,r&&(l+=ka(r)),l+=n;u=e[t],n=u+"",r=Qe-n.length,r&&(l+=ka(r))}else if(u===0)return"0";for(;u%10===0;)u/=10;return l+u}var $n=(function(){function e(n,o){var l,u=0,f=n.length;for(n=n.slice();f--;)l=n[f]*o+u,n[f]=l%Dt|0,u=l/Dt|0;return u&&n.unshift(u),n}function t(n,o,l,u){var f,p;if(l!=u)p=l>u?1:-1;else for(f=p=0;f<l;f++)if(n[f]!=o[f]){p=n[f]>o[f]?1:-1;break}return p}function r(n,o,l){for(var u=0;l--;)n[l]-=u,u=n[l]<o[l]?1:0,n[l]=u*Dt+n[l]-o[l];for(;!n[0]&&n.length>1;)n.shift()}return function(n,o,l,u){var f,p,h,m,v,b,w,A,j,S,E,C,N,_,T,z,U,X,ee=n.constructor,ae=n.s==o.s?1:-1,F=n.d,Q=o.d;if(!n.s)return new ee(n);if(!o.s)throw Error(Kr+"Division by zero");for(p=n.e-o.e,U=Q.length,T=F.length,w=new ee(ae),A=w.d=[],h=0;Q[h]==(F[h]||0);)++h;if(Q[h]>(F[h]||0)&&--p,l==null?C=l=ee.precision:u?C=l+(xt(n)-xt(o))+1:C=l,C<0)return new ee(0);if(C=C/Qe+2|0,h=0,U==1)for(m=0,Q=Q[0],C++;(h<T||m)&&C--;h++)N=m*Dt+(F[h]||0),A[h]=N/Q|0,m=N%Q|0;else{for(m=Dt/(Q[0]+1)|0,m>1&&(Q=e(Q,m),F=e(F,m),U=Q.length,T=F.length),_=U,j=F.slice(0,U),S=j.length;S<U;)j[S++]=0;X=Q.slice(),X.unshift(0),z=Q[0],Q[1]>=Dt/2&&++z;do m=0,f=t(Q,j,U,S),f<0?(E=j[0],U!=S&&(E=E*Dt+(j[1]||0)),m=E/z|0,m>1?(m>=Dt&&(m=Dt-1),v=e(Q,m),b=v.length,S=j.length,f=t(v,j,b,S),f==1&&(m--,r(v,U<b?X:Q,b))):(m==0&&(f=m=1),v=Q.slice()),b=v.length,b<S&&v.unshift(0),r(j,v,S),f==-1&&(S=j.length,f=t(Q,j,U,S),f<1&&(m++,r(j,U<S?X:Q,S))),S=j.length):f===0&&(m++,j=[0]),A[h++]=m,f&&j[0]?j[S++]=F[_]||0:(j=[F[_]],S=1);while((_++<T||j[0]!==void 0)&&C--)}return A[0]||A.shift(),w.e=p,Ve(w,u?l+xt(w)+1:l)}})();function FE(e,t){var r,n,o,l,u,f,p=0,h=0,m=e.constructor,v=m.precision;if(xt(e)>16)throw Error(sv+xt(e));if(!e.s)return new m(kr);for(et=!1,f=v,u=new m(.03125);e.abs().gte(.1);)e=e.times(u),h+=5;for(n=Math.log(oi(2,h))/Math.LN10*2+5|0,f+=n,r=o=l=new m(kr),m.precision=f;;){if(o=Ve(o.times(e),f),r=r.times(++p),u=l.plus($n(o,r,f)),hn(u.d).slice(0,f)===hn(l.d).slice(0,f)){for(;h--;)l=Ve(l.times(l),f);return m.precision=v,t==null?(et=!0,Ve(l,v)):l}l=u}}function xt(e){for(var t=e.e*Qe,r=e.d[0];r>=10;r/=10)t++;return t}function Bm(e,t,r){if(t>e.LN10.sd())throw et=!0,r&&(e.precision=r),Error(Kr+"LN10 precision limit exceeded");return Ve(new e(e.LN10),t)}function ka(e){for(var t="";e--;)t+="0";return t}function ls(e,t){var r,n,o,l,u,f,p,h,m,v=1,b=10,w=e,A=w.d,j=w.constructor,S=j.precision;if(w.s<1)throw Error(Kr+(w.s?"NaN":"-Infinity"));if(w.eq(kr))return new j(0);if(t==null?(et=!1,h=S):h=t,w.eq(10))return t==null&&(et=!0),Bm(j,h);if(h+=b,j.precision=h,r=hn(A),n=r.charAt(0),l=xt(w),Math.abs(l)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)w=w.times(e),r=hn(w.d),n=r.charAt(0),v++;l=xt(w),n>1?(w=new j("0."+r),l++):w=new j(n+"."+r.slice(1))}else return p=Bm(j,h+2,S).times(l+""),w=ls(new j(n+"."+r.slice(1)),h-b).plus(p),j.precision=S,t==null?(et=!0,Ve(w,S)):w;for(f=u=w=$n(w.minus(kr),w.plus(kr),h),m=Ve(w.times(w),h),o=3;;){if(u=Ve(u.times(m),h),p=f.plus($n(u,new j(o),h)),hn(p.d).slice(0,h)===hn(f.d).slice(0,h))return f=f.times(2),l!==0&&(f=f.plus(Bm(j,h+2,S).times(l+""))),f=$n(f,new j(v),h),j.precision=S,t==null?(et=!0,Ve(f,S)):f;f=p,o+=2}}function Gj(e,t){var r,n,o;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(o=t.length;t.charCodeAt(o-1)===48;)--o;if(t=t.slice(n,o),t){if(o-=n,r=r-n-1,e.e=Po(r/Qe),e.d=[],n=(r+1)%Qe,r<0&&(n+=Qe),n<o){for(n&&e.d.push(+t.slice(0,n)),o-=Qe;n<o;)e.d.push(+t.slice(n,n+=Qe));t=t.slice(n),n=Qe-t.length}else n-=o;for(;n--;)t+="0";if(e.d.push(+t),et&&(e.e>Hu||e.e<-Hu))throw Error(sv+r)}else e.s=0,e.e=0,e.d=[0];return e}function Ve(e,t,r){var n,o,l,u,f,p,h,m,v=e.d;for(u=1,l=v[0];l>=10;l/=10)u++;if(n=t-u,n<0)n+=Qe,o=t,h=v[m=0];else{if(m=Math.ceil((n+1)/Qe),l=v.length,m>=l)return e;for(h=l=v[m],u=1;l>=10;l/=10)u++;n%=Qe,o=n-Qe+u}if(r!==void 0&&(l=oi(10,u-o-1),f=h/l%10|0,p=t<0||v[m+1]!==void 0||h%l,p=r<4?(f||p)&&(r==0||r==(e.s<0?3:2)):f>5||f==5&&(r==4||p||r==6&&(n>0?o>0?h/oi(10,u-o):0:v[m-1])%10&1||r==(e.s<0?8:7))),t<1||!v[0])return p?(l=xt(e),v.length=1,t=t-l-1,v[0]=oi(10,(Qe-t%Qe)%Qe),e.e=Po(-t/Qe)||0):(v.length=1,v[0]=e.e=e.s=0),e;if(n==0?(v.length=m,l=1,m--):(v.length=m+1,l=oi(10,Qe-n),v[m]=o>0?(h/oi(10,u-o)%oi(10,o)|0)*l:0),p)for(;;)if(m==0){(v[0]+=l)==Dt&&(v[0]=1,++e.e);break}else{if(v[m]+=l,v[m]!=Dt)break;v[m--]=0,l=1}for(n=v.length;v[--n]===0;)v.pop();if(et&&(e.e>Hu||e.e<-Hu))throw Error(sv+xt(e));return e}function ZE(e,t){var r,n,o,l,u,f,p,h,m,v,b=e.constructor,w=b.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new b(e),et?Ve(t,w):t;if(p=e.d,v=t.d,n=t.e,h=e.e,p=p.slice(),u=h-n,u){for(m=u<0,m?(r=p,u=-u,f=v.length):(r=v,n=h,f=p.length),o=Math.max(Math.ceil(w/Qe),f)+2,u>o&&(u=o,r.length=1),r.reverse(),o=u;o--;)r.push(0);r.reverse()}else{for(o=p.length,f=v.length,m=o<f,m&&(f=o),o=0;o<f;o++)if(p[o]!=v[o]){m=p[o]<v[o];break}u=0}for(m&&(r=p,p=v,v=r,t.s=-t.s),f=p.length,o=v.length-f;o>0;--o)p[f++]=0;for(o=v.length;o>u;){if(p[--o]<v[o]){for(l=o;l&&p[--l]===0;)p[l]=Dt-1;--p[l],p[o]+=Dt}p[o]-=v[o]}for(;p[--f]===0;)p.pop();for(;p[0]===0;p.shift())--n;return p[0]?(t.d=p,t.e=n,et?Ve(t,w):t):new b(0)}function vi(e,t,r){var n,o=xt(e),l=hn(e.d),u=l.length;return t?(r&&(n=r-u)>0?l=l.charAt(0)+"."+l.slice(1)+ka(n):u>1&&(l=l.charAt(0)+"."+l.slice(1)),l=l+(o<0?"e":"e+")+o):o<0?(l="0."+ka(-o-1)+l,r&&(n=r-u)>0&&(l+=ka(n))):o>=u?(l+=ka(o+1-u),r&&(n=r-o-1)>0&&(l=l+"."+ka(n))):((n=o+1)<u&&(l=l.slice(0,n)+"."+l.slice(n)),r&&(n=r-u)>0&&(o+1===u&&(l+="."),l+=ka(n))),e.s<0?"-"+l:l}function Kj(e,t){if(e.length>t)return e.length=t,!0}function QE(e){var t,r,n;function o(l){var u=this;if(!(u instanceof o))return new o(l);if(u.constructor=o,l instanceof o){u.s=l.s,u.e=l.e,u.d=(l=l.d)?l.slice():l;return}if(typeof l=="number"){if(l*0!==0)throw Error(pi+l);if(l>0)u.s=1;else if(l<0)l=-l,u.s=-1;else{u.s=0,u.e=0,u.d=[0];return}if(l===~~l&&l<1e7){u.e=0,u.d=[l];return}return Gj(u,l.toString())}else if(typeof l!="string")throw Error(pi+l);if(l.charCodeAt(0)===45?(l=l.slice(1),u.s=-1):u.s=1,KL.test(l))Gj(u,l);else throw Error(pi+l)}if(o.prototype=oe,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.clone=QE,o.config=o.set=WL,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return o.config(e),o}function WL(e){if(!e||typeof e!="object")throw Error(Kr+"Object expected");var t,r,n,o=["precision",1,_o,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<o.length;t+=3)if((n=e[r=o[t]])!==void 0)if(Po(n)===n&&n>=o[t+1]&&n<=o[t+2])this[r]=n;else throw Error(pi+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(pi+r+": "+n);return this}var cv=QE(GL);kr=new cv(1);const Ie=cv;var VL=e=>e,JE={},ek=e=>e===JE,Wj=e=>function t(){return arguments.length===0||arguments.length===1&&ek(arguments.length<=0?void 0:arguments[0])?t:e(...arguments)},tk=(e,t)=>e===1?t:Wj(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var l=n.filter(u=>u!==JE).length;return l>=e?t(...n):tk(e-l,Wj(function(){for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];var h=n.map(m=>ek(m)?f.shift():m);return t(...h,...f)}))}),$d=e=>tk(e.length,e),Ig=(e,t)=>{for(var r=[],n=e;n<t;++n)r[n-e]=n;return r},XL=$d((e,t)=>Array.isArray(t)?t.map(e):Object.keys(t).map(r=>t[r]).map(e)),FL=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(!r.length)return VL;var o=r.reverse(),l=o[0],u=o.slice(1);return function(){return u.reduce((f,p)=>p(f),l(...arguments))}},qg=e=>Array.isArray(e)?e.reverse():e.split("").reverse().join(""),rk=e=>{var t=null,r=null;return function(){for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return t&&o.every((u,f)=>{var p;return u===((p=t)===null||p===void 0?void 0:p[f])})||(t=o,r=e(...o)),r}};function nk(e){var t;return e===0?t=1:t=Math.floor(new Ie(e).abs().log(10).toNumber())+1,t}function ak(e,t,r){for(var n=new Ie(e),o=0,l=[];n.lt(t)&&o<1e5;)l.push(n.toNumber()),n=n.add(r),o++;return l}$d((e,t,r)=>{var n=+e,o=+t;return n+r*(o-n)});$d((e,t,r)=>{var n=t-+e;return n=n||1/0,(r-e)/n});$d((e,t,r)=>{var n=t-+e;return n=n||1/0,Math.max(0,Math.min(1,(r-e)/n))});var ik=e=>{var[t,r]=e,[n,o]=[t,r];return t>r&&([n,o]=[r,t]),[n,o]},ok=(e,t,r)=>{if(e.lte(0))return new Ie(0);var n=nk(e.toNumber()),o=new Ie(10).pow(n),l=e.div(o),u=n!==1?.05:.1,f=new Ie(Math.ceil(l.div(u).toNumber())).add(r).mul(u),p=f.mul(o);return t?new Ie(p.toNumber()):new Ie(Math.ceil(p.toNumber()))},ZL=(e,t,r)=>{var n=new Ie(1),o=new Ie(e);if(!o.isint()&&r){var l=Math.abs(e);l<1?(n=new Ie(10).pow(nk(e)-1),o=new Ie(Math.floor(o.div(n).toNumber())).mul(n)):l>1&&(o=new Ie(Math.floor(e)))}else e===0?o=new Ie(Math.floor((t-1)/2)):r||(o=new Ie(Math.floor(e)));var u=Math.floor((t-1)/2),f=FL(XL(p=>o.add(new Ie(p-u).mul(n)).toNumber()),Ig);return f(0,t)},lk=function(t,r,n,o){var l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((r-t)/(n-1)))return{step:new Ie(0),tickMin:new Ie(0),tickMax:new Ie(0)};var u=ok(new Ie(r).sub(t).div(n-1),o,l),f;t<=0&&r>=0?f=new Ie(0):(f=new Ie(t).add(r).div(2),f=f.sub(new Ie(f).mod(u)));var p=Math.ceil(f.sub(t).div(u).toNumber()),h=Math.ceil(new Ie(r).sub(f).div(u).toNumber()),m=p+h+1;return m>n?lk(t,r,n,o,l+1):(m<n&&(h=r>0?h+(n-m):h,p=r>0?p:p+(n-m)),{step:u,tickMin:f.sub(new Ie(p).mul(u)),tickMax:f.add(new Ie(h).mul(u))})};function QL(e){var[t,r]=e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,l=Math.max(n,2),[u,f]=ik([t,r]);if(u===-1/0||f===1/0){var p=f===1/0?[u,...Ig(0,n-1).map(()=>1/0)]:[...Ig(0,n-1).map(()=>-1/0),f];return t>r?qg(p):p}if(u===f)return ZL(u,n,o);var{step:h,tickMin:m,tickMax:v}=lk(u,f,l,o,0),b=ak(m,v.add(new Ie(.1).mul(h)),h);return t>r?qg(b):b}function JL(e,t){var[r,n]=e,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,[l,u]=ik([r,n]);if(l===-1/0||u===1/0)return[r,n];if(l===u)return[l];var f=Math.max(t,2),p=ok(new Ie(u).sub(l).div(f-1),o,0),h=[...ak(new Ie(l),new Ie(u),p),u];return o===!1&&(h=h.map(m=>Math.round(m))),r>n?qg(h):h}var eB=rk(QL),tB=rk(JL),sk=e=>e.rootProps.maxBarSize,rB=e=>e.rootProps.barGap,ck=e=>e.rootProps.barCategoryGap,nB=e=>e.rootProps.barSize,Ud=e=>e.rootProps.stackOffset,uv=e=>e.options.chartName,dv=e=>e.rootProps.syncId,uk=e=>e.rootProps.syncMethod,fv=e=>e.options.eventEmitter,zt={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},zn={allowDuplicatedCategory:!0,angleAxisId:0,reversed:!1,scale:"auto",tick:!0,type:"category"},Er={allowDataOverflow:!1,allowDuplicatedCategory:!0,radiusAxisId:0,scale:"auto",tick:!0,tickCount:5,type:"number"},Hd=(e,t)=>{if(!(!e||!t))return e!=null&&e.reversed?[t[1],t[0]]:t},aB={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:zn.angleAxisId,includeHidden:!1,name:void 0,reversed:zn.reversed,scale:zn.scale,tick:zn.tick,tickCount:void 0,ticks:void 0,type:zn.type,unit:void 0},iB={allowDataOverflow:Er.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Er.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Er.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Er.scale,tick:Er.tick,tickCount:Er.tickCount,ticks:void 0,type:Er.type,unit:void 0},oB={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:zn.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:zn.angleAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:zn.scale,tick:zn.tick,tickCount:void 0,ticks:void 0,type:"number",unit:void 0},lB={allowDataOverflow:Er.allowDataOverflow,allowDecimals:!1,allowDuplicatedCategory:Er.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:Er.radiusAxisId,includeHidden:!1,name:void 0,reversed:!1,scale:Er.scale,tick:Er.tick,tickCount:Er.tickCount,ticks:void 0,type:"category",unit:void 0},pv=(e,t)=>e.polarAxis.angleAxis[t]!=null?e.polarAxis.angleAxis[t]:e.layout.layoutType==="radial"?oB:aB,hv=(e,t)=>e.polarAxis.radiusAxis[t]!=null?e.polarAxis.radiusAxis[t]:e.layout.layoutType==="radial"?lB:iB,Yd=e=>e.polarOptions,mv=H([Zn,Qn,Lt],e9),dk=H([Yd,mv],(e,t)=>{if(e!=null)return an(e.innerRadius,t,0)}),fk=H([Yd,mv],(e,t)=>{if(e!=null)return an(e.outerRadius,t,t*.8)}),sB=e=>{if(e==null)return[0,0];var{startAngle:t,endAngle:r}=e;return[t,r]},pk=H([Yd],sB);H([pv,pk],Hd);var hk=H([mv,dk,fk],(e,t,r)=>{if(!(e==null||t==null||r==null))return[t,r]});H([hv,hk],Hd);var mk=H([ze,Yd,dk,fk,Zn,Qn],(e,t,r,n,o,l)=>{if(!(e!=="centric"&&e!=="radial"||t==null||r==null||n==null)){var{cx:u,cy:f,startAngle:p,endAngle:h}=t;return{cx:an(u,o,o/2),cy:an(f,l,l/2),innerRadius:r,outerRadius:n,startAngle:p,endAngle:h,clockWise:!1}}}),Ot=(e,t)=>t,Gd=(e,t,r)=>r;function gv(e){return e?.id}function gk(e,t,r){var{chartData:n=[]}=t,{allowDuplicatedCategory:o,dataKey:l}=r,u=new Map;return e.forEach(f=>{var p,h=(p=f.data)!==null&&p!==void 0?p:n;if(!(h==null||h.length===0)){var m=gv(f);h.forEach((v,b)=>{var w=l==null||o?b:String(Rt(v,l,null)),A=Rt(v,f.dataKey,0),j;u.has(w)?j=u.get(w):j={},Object.assign(j,{[m]:A}),u.set(w,j)})}}),Array.from(u.values())}function Kd(e){return e.stackId!=null&&e.dataKey!=null}var Wd=(e,t)=>e===t?!0:e==null||t==null?!1:e[0]===t[0]&&e[1]===t[1];function Vd(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===0&&t.length===0?!0:e===t}function cB(e,t){if(e.length===t.length){for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return!1}var Et=e=>{var t=ze(e);return t==="horizontal"?"xAxis":t==="vertical"?"yAxis":t==="centric"?"angleAxis":"radiusAxis"},Do=e=>e.tooltip.settings.axisId;function Vj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Yu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Vj(Object(r),!0).forEach(function(n){uB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vj(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function uB(e,t,r){return(t=dB(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function dB(e){var t=fB(e,"string");return typeof t=="symbol"?t:t+""}function fB(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var $g=[0,"auto"],Ar={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0},vk=(e,t)=>e.cartesianAxis.xAxis[t],ea=(e,t)=>{var r=vk(e,t);return r??Ar},Or={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:$g,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,width:vs},xk=(e,t)=>e.cartesianAxis.yAxis[t],ta=(e,t)=>{var r=xk(e,t);return r??Or},pB={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},vv=(e,t)=>{var r=e.cartesianAxis.zAxis[t];return r??pB},nr=(e,t,r)=>{switch(t){case"xAxis":return ea(e,r);case"yAxis":return ta(e,r);case"zAxis":return vv(e,r);case"angleAxis":return pv(e,r);case"radiusAxis":return hv(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},hB=(e,t,r)=>{switch(t){case"xAxis":return ea(e,r);case"yAxis":return ta(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},Ss=(e,t,r)=>{switch(t){case"xAxis":return ea(e,r);case"yAxis":return ta(e,r);case"angleAxis":return pv(e,r);case"radiusAxis":return hv(e,r);default:throw new Error("Unexpected axis type: ".concat(t))}},yk=e=>e.graphicalItems.cartesianItems.some(t=>t.type==="bar")||e.graphicalItems.polarItems.some(t=>t.type==="radialBar");function bk(e,t){return r=>{switch(e){case"xAxis":return"xAxisId"in r&&r.xAxisId===t;case"yAxis":return"yAxisId"in r&&r.yAxisId===t;case"zAxis":return"zAxisId"in r&&r.zAxisId===t;case"angleAxis":return"angleAxisId"in r&&r.angleAxisId===t;case"radiusAxis":return"radiusAxisId"in r&&r.radiusAxisId===t;default:return!1}}}var Xd=e=>e.graphicalItems.cartesianItems,mB=H([Ot,Gd],bk),wk=(e,t,r)=>e.filter(r).filter(n=>t?.includeHidden===!0?!0:!n.hide),As=H([Xd,nr,mB],wk,{memoizeOptions:{resultEqualityCheck:Vd}}),jk=H([As],e=>e.filter(t=>t.type==="area"||t.type==="bar").filter(Kd)),Sk=e=>e.filter(t=>!("stackId"in t)||t.stackId===void 0),gB=H([As],Sk),Ak=e=>e.map(t=>t.data).filter(Boolean).flat(1),vB=H([As],Ak,{memoizeOptions:{resultEqualityCheck:Vd}}),Ok=(e,t)=>{var{chartData:r=[],dataStartIndex:n,dataEndIndex:o}=t;return e.length>0?e:r.slice(n,o+1)},xv=H([vB,qd],Ok),Ek=(e,t,r)=>t?.dataKey!=null?e.map(n=>({value:Rt(n,t.dataKey)})):r.length>0?r.map(n=>n.dataKey).flatMap(n=>e.map(o=>({value:Rt(o,n)}))):e.map(n=>({value:n})),Fd=H([xv,nr,As],Ek);function kk(e,t){switch(e){case"xAxis":return t.direction==="x";case"yAxis":return t.direction==="y";default:return!1}}function fu(e){if(gn(e)||e instanceof Date){var t=Number(e);if(ht(t))return t}}function Xj(e){if(Array.isArray(e)){var t=[fu(e[0]),fu(e[1])];return gi(t)?t:void 0}var r=fu(e);if(r!=null)return[r,r]}function Vn(e){return e.map(fu).filter(b_)}function xB(e,t,r){return!r||typeof t!="number"||nn(t)?[]:r.length?Vn(r.flatMap(n=>{var o=Rt(e,n.dataKey),l,u;if(Array.isArray(o)?[l,u]=o:l=u=o,!(!ht(l)||!ht(u)))return[t-l,t+u]})):[]}var kt=e=>{var t=Et(e),r=Do(e);return Ss(e,t,r)},Nk=H([kt],e=>e?.dataKey),yB=H([jk,qd,kt],gk),Ck=(e,t,r)=>{var n={},o=t.reduce((l,u)=>(u.stackId==null||(l[u.stackId]==null&&(l[u.stackId]=[]),l[u.stackId].push(u)),l),n);return Object.fromEntries(Object.entries(o).map(l=>{var[u,f]=l,p=f.map(gv);return[u,{stackedData:HD(e,p,r),graphicalItems:f}]}))},Ug=H([yB,jk,Ud],Ck),Tk=(e,t,r,n)=>{var{dataStartIndex:o,dataEndIndex:l}=t;if(n==null&&r!=="zAxis"){var u=VD(e,o,l);if(!(u!=null&&u[0]===0&&u[1]===0))return u}},bB=H([nr],e=>e.allowDataOverflow),yv=e=>{var t;if(e==null||!("domain"in e))return $g;if(e.domain!=null)return e.domain;if(e.ticks!=null){if(e.type==="number"){var r=Vn(e.ticks);return[Math.min(...r),Math.max(...r)]}if(e.type==="category")return e.ticks.map(String)}return(t=e?.domain)!==null&&t!==void 0?t:$g},Mk=H([nr],yv),_k=H([Mk,bB],WE),wB=H([Ug,Ra,Ot,_k],Tk,{memoizeOptions:{resultEqualityCheck:Wd}}),bv=e=>e.errorBars,jB=(e,t,r)=>e.flatMap(n=>t[n.id]).filter(Boolean).filter(n=>kk(r,n)),Gu=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r.filter(Boolean);if(o.length!==0){var l=o.flat(),u=Math.min(...l),f=Math.max(...l);return[u,f]}},Pk=(e,t,r,n,o)=>{var l,u;if(r.length>0&&e.forEach(f=>{r.forEach(p=>{var h,m,v=(h=n[p.id])===null||h===void 0?void 0:h.filter(E=>kk(o,E)),b=Rt(f,(m=t.dataKey)!==null&&m!==void 0?m:p.dataKey),w=xB(f,b,v);if(w.length>=2){var A=Math.min(...w),j=Math.max(...w);(l==null||A<l)&&(l=A),(u==null||j>u)&&(u=j)}var S=Xj(b);S!=null&&(l=l==null?S[0]:Math.min(l,S[0]),u=u==null?S[1]:Math.max(u,S[1]))})}),t?.dataKey!=null&&e.forEach(f=>{var p=Xj(Rt(f,t.dataKey));p!=null&&(l=l==null?p[0]:Math.min(l,p[0]),u=u==null?p[1]:Math.max(u,p[1]))}),ht(l)&&ht(u))return[l,u]},SB=H([xv,nr,gB,bv,Ot],Pk,{memoizeOptions:{resultEqualityCheck:Wd}});function AB(e){var{value:t}=e;if(gn(t)||t instanceof Date)return t}var OB=(e,t,r)=>{var n=e.map(AB).filter(o=>o!=null);return r&&(t.dataKey==null||t.allowDuplicatedCategory&&eO(n))?fE(0,e.length):t.allowDuplicatedCategory?n:Array.from(new Set(n))},Dk=e=>e.referenceElements.dots,zo=(e,t,r)=>e.filter(n=>n.ifOverflow==="extendDomain").filter(n=>t==="xAxis"?n.xAxisId===r:n.yAxisId===r),EB=H([Dk,Ot,Gd],zo),zk=e=>e.referenceElements.areas,kB=H([zk,Ot,Gd],zo),Rk=e=>e.referenceElements.lines,NB=H([Rk,Ot,Gd],zo),Lk=(e,t)=>{var r=Vn(e.map(n=>t==="xAxis"?n.x:n.y));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},CB=H(EB,Ot,Lk),Bk=(e,t)=>{var r=Vn(e.flatMap(n=>[t==="xAxis"?n.x1:n.y1,t==="xAxis"?n.x2:n.y2]));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},TB=H([kB,Ot],Bk);function MB(e){var t;if(e.x!=null)return Vn([e.x]);var r=(t=e.segment)===null||t===void 0?void 0:t.map(n=>n.x);return r==null||r.length===0?[]:Vn(r)}function _B(e){var t;if(e.y!=null)return Vn([e.y]);var r=(t=e.segment)===null||t===void 0?void 0:t.map(n=>n.y);return r==null||r.length===0?[]:Vn(r)}var Ik=(e,t)=>{var r=e.flatMap(n=>t==="xAxis"?MB(n):_B(n));if(r.length!==0)return[Math.min(...r),Math.max(...r)]},PB=H([NB,Ot],Ik),DB=H(CB,PB,TB,(e,t,r)=>Gu(e,r,t)),qk=(e,t,r,n,o,l,u,f)=>{if(r!=null)return r;var p=u==="vertical"&&f==="xAxis"||u==="horizontal"&&f==="yAxis",h=p?Gu(n,l,o):Gu(l,o);return YL(t,h,e.allowDataOverflow)},zB=H([nr,Mk,_k,wB,SB,DB,ze,Ot],qk,{memoizeOptions:{resultEqualityCheck:Wd}}),RB=[0,1],$k=(e,t,r,n,o,l,u)=>{if(!((e==null||r==null||r.length===0)&&u===void 0)){var{dataKey:f,type:p}=e,h=Pa(t,l);if(h&&f==null){var m;return fE(0,(m=r?.length)!==null&&m!==void 0?m:0)}return p==="category"?OB(n,e,h):o==="expand"?RB:u}},wv=H([nr,ze,xv,Fd,Ud,Ot,zB],$k),Uk=(e,t,r,n,o)=>{if(e!=null){var{scale:l,type:u}=e;if(l==="auto")return t==="radial"&&o==="radiusAxis"?"band":t==="radial"&&o==="angleAxis"?"linear":u==="category"&&n&&(n.indexOf("LineChart")>=0||n.indexOf("AreaChart")>=0||n.indexOf("ComposedChart")>=0&&!r)?"point":u==="category"?"band":"linear";if(typeof l=="string"){var f="scale".concat(hs(l));return f in Vl?f:"point"}}},Os=H([nr,ze,yk,uv,Ot],Uk);function LB(e){if(e!=null){if(e in Vl)return Vl[e]();var t="scale".concat(hs(e));if(t in Vl)return Vl[t]()}}function jv(e,t,r,n){if(!(r==null||n==null)){if(typeof e.scale=="function")return e.scale.copy().domain(r).range(n);var o=LB(t);if(o!=null){var l=o.domain(r).range(n);return BD(l),l}}}var Hk=(e,t,r)=>{var n=yv(t);if(!(r!=="auto"&&r!=="linear")){if(t!=null&&t.tickCount&&Array.isArray(n)&&(n[0]==="auto"||n[1]==="auto")&&gi(e))return eB(e,t.tickCount,t.allowDecimals);if(t!=null&&t.tickCount&&t.type==="number"&&gi(e))return tB(e,t.tickCount,t.allowDecimals)}},Sv=H([wv,Ss,Os],Hk),Yk=(e,t,r,n)=>{if(n!=="angleAxis"&&e?.type==="number"&&gi(t)&&Array.isArray(r)&&r.length>0){var o=t[0],l=r[0],u=t[1],f=r[r.length-1];return[Math.min(o,l),Math.max(u,f)]}return t},BB=H([nr,wv,Sv,Ot],Yk),IB=H(Fd,nr,(e,t)=>{if(!(!t||t.type!=="number")){var r=1/0,n=Array.from(Vn(e.map(f=>f.value))).sort((f,p)=>f-p);if(n.length<2)return 1/0;var o=n[n.length-1]-n[0];if(o===0)return 1/0;for(var l=0;l<n.length-1;l++){var u=n[l+1]-n[l];r=Math.min(r,u)}return r/o}}),Gk=H(IB,ze,ck,Lt,(e,t,r,n)=>n,(e,t,r,n,o)=>{if(!ht(e))return 0;var l=t==="vertical"?n.height:n.width;if(o==="gap")return e*l/2;if(o==="no-gap"){var u=an(r,e*l),f=e*l/2;return f-u-(f-u)/l*u}return 0}),qB=(e,t)=>{var r=ea(e,t);return r==null||typeof r.padding!="string"?0:Gk(e,"xAxis",t,r.padding)},$B=(e,t)=>{var r=ta(e,t);return r==null||typeof r.padding!="string"?0:Gk(e,"yAxis",t,r.padding)},UB=H(ea,qB,(e,t)=>{var r,n;if(e==null)return{left:0,right:0};var{padding:o}=e;return typeof o=="string"?{left:t,right:t}:{left:((r=o.left)!==null&&r!==void 0?r:0)+t,right:((n=o.right)!==null&&n!==void 0?n:0)+t}}),HB=H(ta,$B,(e,t)=>{var r,n;if(e==null)return{top:0,bottom:0};var{padding:o}=e;return typeof o=="string"?{top:t,bottom:t}:{top:((r=o.top)!==null&&r!==void 0?r:0)+t,bottom:((n=o.bottom)!==null&&n!==void 0?n:0)+t}}),YB=H([Lt,UB,Cd,Nd,(e,t,r)=>r],(e,t,r,n,o)=>{var{padding:l}=n;return o?[l.left,r.width-l.right]:[e.left+t.left,e.left+e.width-t.right]}),GB=H([Lt,ze,HB,Cd,Nd,(e,t,r)=>r],(e,t,r,n,o,l)=>{var{padding:u}=o;return l?[n.height-u.bottom,u.top]:t==="horizontal"?[e.top+e.height-r.bottom,e.top+r.top]:[e.top+r.top,e.top+e.height-r.bottom]}),Es=(e,t,r,n)=>{var o;switch(t){case"xAxis":return YB(e,r,n);case"yAxis":return GB(e,r,n);case"zAxis":return(o=vv(e,r))===null||o===void 0?void 0:o.range;case"angleAxis":return pk(e);case"radiusAxis":return hk(e,r);default:return}},Kk=H([nr,Es],Hd),Ro=H([nr,Os,BB,Kk],jv);H([As,bv,Ot],jB);function Wk(e,t){return e.id<t.id?-1:e.id>t.id?1:0}var Zd=(e,t)=>t,Qd=(e,t,r)=>r,KB=H(Ed,Zd,Qd,(e,t,r)=>e.filter(n=>n.orientation===t).filter(n=>n.mirror===r).sort(Wk)),WB=H(kd,Zd,Qd,(e,t,r)=>e.filter(n=>n.orientation===t).filter(n=>n.mirror===r).sort(Wk)),Vk=(e,t)=>({width:e.width,height:t.height}),VB=(e,t)=>{var r=typeof t.width=="number"?t.width:vs;return{width:r,height:e.height}},Xk=H(Lt,ea,Vk),XB=(e,t,r)=>{switch(t){case"top":return e.top;case"bottom":return r-e.bottom;default:return 0}},FB=(e,t,r)=>{switch(t){case"left":return e.left;case"right":return r-e.right;default:return 0}},ZB=H(Qn,Lt,KB,Zd,Qd,(e,t,r,n,o)=>{var l={},u;return r.forEach(f=>{var p=Vk(t,f);u==null&&(u=XB(t,n,e));var h=n==="top"&&!o||n==="bottom"&&o;l[f.id]=u-Number(h)*p.height,u+=(h?-1:1)*p.height}),l}),QB=H(Zn,Lt,WB,Zd,Qd,(e,t,r,n,o)=>{var l={},u;return r.forEach(f=>{var p=VB(t,f);u==null&&(u=FB(t,n,e));var h=n==="left"&&!o||n==="right"&&o;l[f.id]=u-Number(h)*p.width,u+=(h?-1:1)*p.width}),l}),JB=(e,t)=>{var r=ea(e,t);if(r!=null)return ZB(e,r.orientation,r.mirror)},eI=H([Lt,ea,JB,(e,t)=>t],(e,t,r,n)=>{if(t!=null){var o=r?.[n];return o==null?{x:e.left,y:0}:{x:e.left,y:o}}}),tI=(e,t)=>{var r=ta(e,t);if(r!=null)return QB(e,r.orientation,r.mirror)},rI=H([Lt,ta,tI,(e,t)=>t],(e,t,r,n)=>{if(t!=null){var o=r?.[n];return o==null?{x:0,y:e.top}:{x:o,y:e.top}}}),Fk=H(Lt,ta,(e,t)=>{var r=typeof t.width=="number"?t.width:vs;return{width:r,height:e.height}}),Fj=(e,t,r)=>{switch(t){case"xAxis":return Xk(e,r).width;case"yAxis":return Fk(e,r).height;default:return}},Zk=(e,t,r,n)=>{if(r!=null){var{allowDuplicatedCategory:o,type:l,dataKey:u}=r,f=Pa(e,n),p=t.map(h=>h.value);if(u&&f&&l==="category"&&o&&eO(p))return p}},Av=H([ze,Fd,nr,Ot],Zk),Qk=(e,t,r,n)=>{if(!(r==null||r.dataKey==null)){var{type:o,scale:l}=r,u=Pa(e,n);if(u&&(o==="number"||l!=="auto"))return t.map(f=>f.value)}},Ov=H([ze,Fd,Ss,Ot],Qk),Zj=H([ze,hB,Os,Ro,Av,Ov,Es,Sv,Ot],(e,t,r,n,o,l,u,f,p)=>{if(t!=null){var h=Pa(e,p);return{angle:t.angle,interval:t.interval,minTickGap:t.minTickGap,orientation:t.orientation,tick:t.tick,tickCount:t.tickCount,tickFormatter:t.tickFormatter,ticks:t.ticks,type:t.type,unit:t.unit,axisType:p,categoricalDomain:l,duplicateDomain:o,isCategorical:h,niceTicks:f,range:u,realScaleType:r,scale:n}}}),nI=(e,t,r,n,o,l,u,f,p)=>{if(!(t==null||n==null)){var h=Pa(e,p),{type:m,ticks:v,tickCount:b}=t,w=r==="scaleBand"&&typeof n.bandwidth=="function"?n.bandwidth()/2:2,A=m==="category"&&n.bandwidth?n.bandwidth()/w:0;A=p==="angleAxis"&&l!=null&&l.length>=2?fr(l[0]-l[1])*2*A:A;var j=v||o;if(j){var S=j.map((E,C)=>{var N=u?u.indexOf(E):E;return{index:C,coordinate:n(N)+A,value:E,offset:A}});return S.filter(E=>ht(E.coordinate))}return h&&f?f.map((E,C)=>({coordinate:n(E)+A,value:E,index:C,offset:A})).filter(E=>ht(E.coordinate)):n.ticks?n.ticks(b).map(E=>({coordinate:n(E)+A,value:E,offset:A})):n.domain().map((E,C)=>({coordinate:n(E)+A,value:u?u[E]:E,index:C,offset:A}))}},Jk=H([ze,Ss,Os,Ro,Sv,Es,Av,Ov,Ot],nI),aI=(e,t,r,n,o,l,u)=>{if(!(t==null||r==null||n==null||n[0]===n[1])){var f=Pa(e,u),{tickCount:p}=t,h=0;return h=u==="angleAxis"&&n?.length>=2?fr(n[0]-n[1])*2*h:h,f&&l?l.map((m,v)=>({coordinate:r(m)+h,value:m,index:v,offset:h})):r.ticks?r.ticks(p).map(m=>({coordinate:r(m)+h,value:m,offset:h})):r.domain().map((m,v)=>({coordinate:r(m)+h,value:o?o[m]:m,index:v,offset:h}))}},Ma=H([ze,Ss,Ro,Es,Av,Ov,Ot],aI),_a=H(nr,Ro,(e,t)=>{if(!(e==null||t==null))return Yu(Yu({},e),{},{scale:t})}),iI=H([nr,Os,wv,Kk],jv);H((e,t,r)=>vv(e,r),iI,(e,t)=>{if(!(e==null||t==null))return Yu(Yu({},e),{},{scale:t})});var oI=H([ze,Ed,kd],(e,t,r)=>{switch(e){case"horizontal":return t.some(n=>n.reversed)?"right-to-left":"left-to-right";case"vertical":return r.some(n=>n.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}}),e3=e=>e.options.defaultTooltipEventType,t3=e=>e.options.validateTooltipEventTypes;function r3(e,t,r){if(e==null)return t;var n=e?"axis":"item";return r==null?t:r.includes(n)?n:t}function Ev(e,t){var r=e3(e),n=t3(e);return r3(t,r,n)}function lI(e){return de(t=>Ev(t,e))}var n3=(e,t)=>{var r,n=Number(t);if(!(nn(n)||t==null))return n>=0?e==null||(r=e[n])===null||r===void 0?void 0:r.value:void 0},sI=e=>e.tooltip.settings,Ca={active:!1,index:null,dataKey:void 0,coordinate:void 0},cI={itemInteraction:{click:Ca,hover:Ca},axisInteraction:{click:Ca,hover:Ca},keyboardInteraction:Ca,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},a3=hr({name:"tooltip",initialState:cI,reducers:{addTooltipEntrySettings:{reducer(e,t){e.tooltipItemPayloads.push(t.payload)},prepare:St()},removeTooltipEntrySettings:{reducer(e,t){var r=qn(e).tooltipItemPayloads.indexOf(t.payload);r>-1&&e.tooltipItemPayloads.splice(r,1)},prepare:St()},setTooltipSettingsState(e,t){e.settings=t.payload},setActiveMouseOverItemIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.itemInteraction.hover.active=!0,e.itemInteraction.hover.index=t.payload.activeIndex,e.itemInteraction.hover.dataKey=t.payload.activeDataKey,e.itemInteraction.hover.coordinate=t.payload.activeCoordinate},mouseLeaveChart(e){e.itemInteraction.hover.active=!1,e.axisInteraction.hover.active=!1},mouseLeaveItem(e){e.itemInteraction.hover.active=!1},setActiveClickItemIndex(e,t){e.syncInteraction.active=!1,e.itemInteraction.click.active=!0,e.keyboardInteraction.active=!1,e.itemInteraction.click.index=t.payload.activeIndex,e.itemInteraction.click.dataKey=t.payload.activeDataKey,e.itemInteraction.click.coordinate=t.payload.activeCoordinate},setMouseOverAxisIndex(e,t){e.syncInteraction.active=!1,e.axisInteraction.hover.active=!0,e.keyboardInteraction.active=!1,e.axisInteraction.hover.index=t.payload.activeIndex,e.axisInteraction.hover.dataKey=t.payload.activeDataKey,e.axisInteraction.hover.coordinate=t.payload.activeCoordinate},setMouseClickAxisIndex(e,t){e.syncInteraction.active=!1,e.keyboardInteraction.active=!1,e.axisInteraction.click.active=!0,e.axisInteraction.click.index=t.payload.activeIndex,e.axisInteraction.click.dataKey=t.payload.activeDataKey,e.axisInteraction.click.coordinate=t.payload.activeCoordinate},setSyncInteraction(e,t){e.syncInteraction=t.payload},setKeyboardInteraction(e,t){e.keyboardInteraction.active=t.payload.active,e.keyboardInteraction.index=t.payload.activeIndex,e.keyboardInteraction.coordinate=t.payload.activeCoordinate,e.keyboardInteraction.dataKey=t.payload.activeDataKey}}}),{addTooltipEntrySettings:uI,removeTooltipEntrySettings:dI,setTooltipSettingsState:fI,setActiveMouseOverItemIndex:i3,mouseLeaveItem:pI,mouseLeaveChart:o3,setActiveClickItemIndex:hI,setMouseOverAxisIndex:l3,setMouseClickAxisIndex:mI,setSyncInteraction:Hg,setKeyboardInteraction:Yg}=a3.actions,gI=a3.reducer;function Qj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function iu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Qj(Object(r),!0).forEach(function(n){vI(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Qj(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function vI(e,t,r){return(t=xI(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xI(e){var t=yI(e,"string");return typeof t=="symbol"?t:t+""}function yI(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bI(e,t,r){return t==="axis"?r==="click"?e.axisInteraction.click:e.axisInteraction.hover:r==="click"?e.itemInteraction.click:e.itemInteraction.hover}function wI(e){return e.index!=null}var s3=(e,t,r,n)=>{if(t==null)return Ca;var o=bI(e,t,r);if(o==null)return Ca;if(o.active)return o;if(e.keyboardInteraction.active)return e.keyboardInteraction;if(e.syncInteraction.active&&e.syncInteraction.index!=null)return e.syncInteraction;var l=e.settings.active===!0;if(wI(o)){if(l)return iu(iu({},o),{},{active:!0})}else if(n!=null)return{active:!0,coordinate:void 0,dataKey:void 0,index:n};return iu(iu({},Ca),{},{coordinate:o.coordinate})},kv=(e,t)=>{var r=e?.index;if(r==null)return null;var n=Number(r);if(!ht(n))return r;var o=0,l=1/0;return t.length>0&&(l=t.length-1),String(Math.max(o,Math.min(n,l)))},c3=(e,t,r,n,o,l,u,f)=>{if(!(l==null||f==null)){var p=u[0],h=p==null?void 0:f(p.positions,l);if(h!=null)return h;var m=o?.[Number(l)];if(m)switch(r){case"horizontal":return{x:m.coordinate,y:(n.top+t)/2};default:return{x:(n.left+e)/2,y:m.coordinate}}}},u3=(e,t,r,n)=>{if(t==="axis")return e.tooltipItemPayloads;if(e.tooltipItemPayloads.length===0)return[];var o;return r==="hover"?o=e.itemInteraction.hover.dataKey:o=e.itemInteraction.click.dataKey,o==null&&n!=null?[e.tooltipItemPayloads[0]]:e.tooltipItemPayloads.filter(l=>{var u;return((u=l.settings)===null||u===void 0?void 0:u.dataKey)===o})},ks=e=>e.options.tooltipPayloadSearcher,Lo=e=>e.tooltip;function Jj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function eS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Jj(Object(r),!0).forEach(function(n){jI(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Jj(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jI(e,t,r){return(t=SI(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function SI(e){var t=AI(e,"string");return typeof t=="symbol"?t:t+""}function AI(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function OI(e,t){return e??t}var d3=(e,t,r,n,o,l,u)=>{if(!(t==null||l==null)){var{chartData:f,computedData:p,dataStartIndex:h,dataEndIndex:m}=r,v=[];return e.reduce((b,w)=>{var A,{dataDefinedOnItem:j,settings:S}=w,E=OI(j,f),C=Array.isArray(E)?GO(E,h,m):E,N=(A=S?.dataKey)!==null&&A!==void 0?A:n,_=S?.nameKey,T;if(n&&Array.isArray(C)&&!Array.isArray(C[0])&&u==="axis"?T=tO(C,n,o):T=l(C,t,p,_),Array.isArray(T))T.forEach(U=>{var X=eS(eS({},S),{},{name:U.name,unit:U.unit,color:void 0,fill:void 0});b.push(E2({tooltipEntrySettings:X,dataKey:U.dataKey,payload:U.payload,value:Rt(U.payload,U.dataKey),name:U.name}))});else{var z;b.push(E2({tooltipEntrySettings:S,dataKey:N,payload:T,value:Rt(T,N),name:(z=Rt(T,_))!==null&&z!==void 0?z:S?.name}))}return b},v)}},Nv=H([kt,ze,yk,uv,Et],Uk),EI=H([e=>e.graphicalItems.cartesianItems,e=>e.graphicalItems.polarItems],(e,t)=>[...e,...t]),kI=H([Et,Do],bk),Ns=H([EI,kt,kI],wk,{memoizeOptions:{resultEqualityCheck:Vd}}),NI=H([Ns],e=>e.filter(Kd)),CI=H([Ns],Ak,{memoizeOptions:{resultEqualityCheck:Vd}}),Bo=H([CI,Ra],Ok),TI=H([NI,Ra,kt],gk),Cv=H([Bo,kt,Ns],Ek),f3=H([kt],yv),MI=H([kt],e=>e.allowDataOverflow),p3=H([f3,MI],WE),_I=H([Ns],e=>e.filter(Kd)),PI=H([TI,_I,Ud],Ck),DI=H([PI,Ra,Et,p3],Tk),zI=H([Ns],Sk),RI=H([Bo,kt,zI,bv,Et],Pk,{memoizeOptions:{resultEqualityCheck:Wd}}),LI=H([Dk,Et,Do],zo),BI=H([LI,Et],Lk),II=H([zk,Et,Do],zo),qI=H([II,Et],Bk),$I=H([Rk,Et,Do],zo),UI=H([$I,Et],Ik),HI=H([BI,UI,qI],Gu),YI=H([kt,f3,p3,DI,RI,HI,ze,Et],qk),h3=H([kt,ze,Bo,Cv,Ud,Et,YI],$k),GI=H([h3,kt,Nv],Hk),KI=H([kt,h3,GI,Et],Yk),m3=e=>{var t=Et(e),r=Do(e),n=!1;return Es(e,t,r,n)},g3=H([kt,m3],Hd),v3=H([kt,Nv,KI,g3],jv),WI=H([ze,Cv,kt,Et],Zk),VI=H([ze,Cv,kt,Et],Qk),XI=(e,t,r,n,o,l,u,f)=>{if(t){var{type:p}=t,h=Pa(e,f);if(n){var m=r==="scaleBand"&&n.bandwidth?n.bandwidth()/2:2,v=p==="category"&&n.bandwidth?n.bandwidth()/m:0;return v=f==="angleAxis"&&o!=null&&o?.length>=2?fr(o[0]-o[1])*2*v:v,h&&u?u.map((b,w)=>({coordinate:n(b)+v,value:b,index:w,offset:v})):n.domain().map((b,w)=>({coordinate:n(b)+v,value:l?l[b]:b,index:w,offset:v}))}}},ra=H([ze,kt,Nv,v3,m3,WI,VI,Et],XI),Tv=H([e3,t3,sI],(e,t,r)=>r3(r.shared,e,t)),x3=e=>e.tooltip.settings.trigger,Mv=e=>e.tooltip.settings.defaultIndex,Jd=H([Lo,Tv,x3,Mv],s3),xi=H([Jd,Bo],kv),y3=H([ra,xi],n3),b3=H([Jd],e=>{if(e)return e.dataKey}),w3=H([Lo,Tv,x3,Mv],u3),FI=H([Zn,Qn,ze,Lt,ra,Mv,w3,ks],c3),ZI=H([Jd,FI],(e,t)=>e!=null&&e.coordinate?e.coordinate:t),QI=H([Jd],e=>e.active),JI=H([w3,xi,Ra,Nk,y3,ks,Tv],d3),eq=H([JI],e=>{if(e!=null){var t=e.map(r=>r.payload).filter(r=>r!=null);return Array.from(new Set(t))}});function tS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function rS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tS(Object(r),!0).forEach(function(n){tq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function tq(e,t,r){return(t=rq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rq(e){var t=nq(e,"string");return typeof t=="symbol"?t:t+""}function nq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var aq=()=>de(kt),iq=()=>{var e=aq(),t=de(ra),r=de(v3);return yo(!e||!r?void 0:rS(rS({},e),{},{scale:r}),t)};function nS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function uo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?nS(Object(r),!0).forEach(function(n){oq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function oq(e,t,r){return(t=lq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lq(e){var t=sq(e,"string");return typeof t=="symbol"?t:t+""}function sq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var cq=(e,t,r,n)=>{var o=t.find(l=>l&&l.index===r);if(o){if(e==="horizontal")return{x:o.coordinate,y:n.chartY};if(e==="vertical")return{x:n.chartX,y:o.coordinate}}return{x:0,y:0}},uq=(e,t,r,n)=>{var o=t.find(h=>h&&h.index===r);if(o){if(e==="centric"){var l=o.coordinate,{radius:u}=n;return uo(uo(uo({},n),Ht(n.cx,n.cy,u,l)),{},{angle:l,radius:u})}var f=o.coordinate,{angle:p}=n;return uo(uo(uo({},n),Ht(n.cx,n.cy,f,p)),{},{angle:p,radius:f})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}};function dq(e,t){var{chartX:r,chartY:n}=e;return r>=t.left&&r<=t.left+t.width&&n>=t.top&&n<=t.top+t.height}var j3=(e,t,r,n,o)=>{var l,u=-1,f=(l=t?.length)!==null&&l!==void 0?l:0;if(f<=1||e==null)return 0;if(n==="angleAxis"&&o!=null&&Math.abs(Math.abs(o[1]-o[0])-360)<=1e-6)for(var p=0;p<f;p++){var h=p>0?r[p-1].coordinate:r[f-1].coordinate,m=r[p].coordinate,v=p>=f-1?r[0].coordinate:r[p+1].coordinate,b=void 0;if(fr(m-h)!==fr(v-m)){var w=[];if(fr(v-m)===fr(o[1]-o[0])){b=v;var A=m+o[1]-o[0];w[0]=Math.min(A,(A+h)/2),w[1]=Math.max(A,(A+h)/2)}else{b=h;var j=v+o[1]-o[0];w[0]=Math.min(m,(j+m)/2),w[1]=Math.max(m,(j+m)/2)}var S=[Math.min(m,(b+m)/2),Math.max(m,(b+m)/2)];if(e>S[0]&&e<=S[1]||e>=w[0]&&e<=w[1]){({index:u}=r[p]);break}}else{var E=Math.min(h,v),C=Math.max(h,v);if(e>(E+m)/2&&e<=(C+m)/2){({index:u}=r[p]);break}}}else if(t){for(var N=0;N<f;N++)if(N===0&&e<=(t[N].coordinate+t[N+1].coordinate)/2||N>0&&N<f-1&&e>(t[N].coordinate+t[N-1].coordinate)/2&&e<=(t[N].coordinate+t[N+1].coordinate)/2||N===f-1&&e>(t[N].coordinate+t[N-1].coordinate)/2){({index:u}=t[N]);break}}return u},fq=()=>de(uv),_v=(e,t)=>t,S3=(e,t,r)=>r,Pv=(e,t,r,n)=>n,pq=H(ra,e=>yd(e,t=>t.coordinate)),Dv=H([Lo,_v,S3,Pv],s3),A3=H([Dv,Bo],kv),hq=(e,t,r)=>{if(t!=null){var n=Lo(e);return t==="axis"?r==="hover"?n.axisInteraction.hover.dataKey:n.axisInteraction.click.dataKey:r==="hover"?n.itemInteraction.hover.dataKey:n.itemInteraction.click.dataKey}},O3=H([Lo,_v,S3,Pv],u3),Ku=H([Zn,Qn,ze,Lt,ra,Pv,O3,ks],c3),mq=H([Dv,Ku],(e,t)=>{var r;return(r=e.coordinate)!==null&&r!==void 0?r:t}),E3=H([ra,A3],n3),gq=H([O3,A3,Ra,Nk,E3,ks,_v],d3),vq=H([Dv],e=>({isActive:e.active,activeIndex:e.index})),xq=(e,t,r,n,o,l,u)=>{if(!(!e||!r||!n||!o)&&dq(e,u)){var f=XD(e,t),p=j3(f,l,o,r,n),h=cq(t,o,p,e);return{activeIndex:String(p),activeCoordinate:h}}},yq=(e,t,r,n,o,l,u)=>{if(!(!e||!n||!o||!l||!r)){var f=i9(e,r);if(f){var p=FD(f,t),h=j3(p,u,l,n,o),m=uq(t,l,h,f);return{activeIndex:String(h),activeCoordinate:m}}}},bq=(e,t,r,n,o,l,u,f)=>{if(!(!e||!t||!n||!o||!l))return t==="horizontal"||t==="vertical"?xq(e,t,n,o,l,u,f):yq(e,t,r,n,o,l,u)},wq=H(e=>e.zIndex.zIndexMap,(e,t)=>t,(e,t,r)=>r,(e,t,r)=>{if(t!=null){var n=e[t];if(n!=null)return r?n.panoramaElementId:n.elementId}}),jq=H(e=>e.zIndex.zIndexMap,e=>{var t=Object.keys(e).map(n=>parseInt(n,10)).concat(Object.values(zt)),r=Array.from(new Set(t));return r.sort((n,o)=>n-o)},{memoizeOptions:{resultEqualityCheck:cB}});function aS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function iS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?aS(Object(r),!0).forEach(function(n){Sq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):aS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Sq(e,t,r){return(t=Aq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Aq(e){var t=Oq(e,"string");return typeof t=="symbol"?t:t+""}function Oq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Eq={},kq={zIndexMap:Object.values(zt).reduce((e,t)=>iS(iS({},e),{},{[t]:{elementId:void 0,panoramaElementId:void 0,consumers:0}}),Eq)},Nq=new Set(Object.values(zt));function Cq(e){return Nq.has(e)}var k3=hr({name:"zIndex",initialState:kq,reducers:{registerZIndexPortal:{reducer:(e,t)=>{var{zIndex:r}=t.payload;e.zIndexMap[r]?e.zIndexMap[r].consumers+=1:e.zIndexMap[r]={consumers:1,elementId:void 0,panoramaElementId:void 0}},prepare:St()},unregisterZIndexPortal:{reducer:(e,t)=>{var{zIndex:r}=t.payload;e.zIndexMap[r]&&(e.zIndexMap[r].consumers-=1,e.zIndexMap[r].consumers<=0&&!Cq(r)&&delete e.zIndexMap[r])},prepare:St()},registerZIndexPortalId:{reducer:(e,t)=>{var{zIndex:r,elementId:n,isPanorama:o}=t.payload;e.zIndexMap[r]?o?e.zIndexMap[r].panoramaElementId=n:e.zIndexMap[r].elementId=n:e.zIndexMap[r]={consumers:0,elementId:o?void 0:n,panoramaElementId:o?n:void 0}},prepare:St()},unregisterZIndexPortalId:{reducer:(e,t)=>{var{zIndex:r}=t.payload;e.zIndexMap[r]&&(t.payload.isPanorama?e.zIndexMap[r].panoramaElementId=void 0:e.zIndexMap[r].elementId=void 0)},prepare:St()}}}),{registerZIndexPortal:Tq,unregisterZIndexPortal:Mq,registerZIndexPortalId:_q,unregisterZIndexPortalId:Pq}=k3.actions,Dq=k3.reducer;function Xr(e){var{zIndex:t,children:r}=e,n=Cz(),o=n&&t!==void 0&&t!==0,l=Ft(),u=at();y.useLayoutEffect(()=>o?(u(Tq({zIndex:t})),()=>{u(Mq({zIndex:t}))}):To,[u,t,o]);var f=de(h=>wq(h,t,l));if(!o)return r;if(!f)return null;var p=document.getElementById(f);return p?u0.createPortal(r,p):null}function Gg(){return Gg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Gg.apply(null,arguments)}function oS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ou(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?oS(Object(r),!0).forEach(function(n){zq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function zq(e,t,r){return(t=Rq(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Rq(e){var t=Lq(e,"string");return typeof t=="symbol"?t:t+""}function Lq(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Bq(e){var{cursor:t,cursorComp:r,cursorProps:n}=e;return y.isValidElement(t)?y.cloneElement(t,n):y.createElement(r,n)}function Iq(e){var t,{coordinate:r,payload:n,index:o,offset:l,tooltipAxisBandSize:u,layout:f,cursor:p,tooltipEventType:h,chartName:m}=e,v=r,b=n,w=o;if(!p||!v||m!=="ScatterChart"&&h!=="axis")return null;var A,j,S;if(m==="ScatterChart")A=v,j=bR,S=zt.cursorLine;else if(m==="BarChart")A=wR(f,v,l,u),j=sE,S=zt.cursorRectangle;else if(f==="radial"&&nO(v)){var{cx:E,cy:C,radius:N,startAngle:_,endAngle:T}=cE(v);A={cx:E,cy:C,startAngle:_,endAngle:T,innerRadius:N,outerRadius:N},j=dE,S=zt.cursorLine}else A={points:c9(f,v,l)},j=nE,S=zt.cursorLine;var z=typeof p=="object"&&"className"in p?p.className:void 0,U=ou(ou(ou(ou({stroke:"#ccc",pointerEvents:"none"},l),A),ps(p)),{},{payload:b,payloadIndex:w,className:qe("recharts-tooltip-cursor",z)});return y.createElement(Xr,{zIndex:(t=e.zIndex)!==null&&t!==void 0?t:S},y.createElement(Bq,{cursor:p,cursorComp:j,cursorProps:U}))}function qq(e){var t=iq(),r=JO(),n=xs(),o=fq();return t==null||r==null||n==null||o==null?null:y.createElement(Iq,Gg({},e,{offset:r,layout:n,tooltipAxisBandSize:t,chartName:o}))}var N3=y.createContext(null),$q=()=>y.useContext(N3),Im={exports:{}},lS;function Uq(){return lS||(lS=1,(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function o(p,h,m){this.fn=p,this.context=h,this.once=m||!1}function l(p,h,m,v,b){if(typeof m!="function")throw new TypeError("The listener must be a function");var w=new o(m,v||p,b),A=r?r+h:h;return p._events[A]?p._events[A].fn?p._events[A]=[p._events[A],w]:p._events[A].push(w):(p._events[A]=w,p._eventsCount++),p}function u(p,h){--p._eventsCount===0?p._events=new n:delete p._events[h]}function f(){this._events=new n,this._eventsCount=0}f.prototype.eventNames=function(){var h=[],m,v;if(this._eventsCount===0)return h;for(v in m=this._events)t.call(m,v)&&h.push(r?v.slice(1):v);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(m)):h},f.prototype.listeners=function(h){var m=r?r+h:h,v=this._events[m];if(!v)return[];if(v.fn)return[v.fn];for(var b=0,w=v.length,A=new Array(w);b<w;b++)A[b]=v[b].fn;return A},f.prototype.listenerCount=function(h){var m=r?r+h:h,v=this._events[m];return v?v.fn?1:v.length:0},f.prototype.emit=function(h,m,v,b,w,A){var j=r?r+h:h;if(!this._events[j])return!1;var S=this._events[j],E=arguments.length,C,N;if(S.fn){switch(S.once&&this.removeListener(h,S.fn,void 0,!0),E){case 1:return S.fn.call(S.context),!0;case 2:return S.fn.call(S.context,m),!0;case 3:return S.fn.call(S.context,m,v),!0;case 4:return S.fn.call(S.context,m,v,b),!0;case 5:return S.fn.call(S.context,m,v,b,w),!0;case 6:return S.fn.call(S.context,m,v,b,w,A),!0}for(N=1,C=new Array(E-1);N<E;N++)C[N-1]=arguments[N];S.fn.apply(S.context,C)}else{var _=S.length,T;for(N=0;N<_;N++)switch(S[N].once&&this.removeListener(h,S[N].fn,void 0,!0),E){case 1:S[N].fn.call(S[N].context);break;case 2:S[N].fn.call(S[N].context,m);break;case 3:S[N].fn.call(S[N].context,m,v);break;case 4:S[N].fn.call(S[N].context,m,v,b);break;default:if(!C)for(T=1,C=new Array(E-1);T<E;T++)C[T-1]=arguments[T];S[N].fn.apply(S[N].context,C)}}return!0},f.prototype.on=function(h,m,v){return l(this,h,m,v,!1)},f.prototype.once=function(h,m,v){return l(this,h,m,v,!0)},f.prototype.removeListener=function(h,m,v,b){var w=r?r+h:h;if(!this._events[w])return this;if(!m)return u(this,w),this;var A=this._events[w];if(A.fn)A.fn===m&&(!b||A.once)&&(!v||A.context===v)&&u(this,w);else{for(var j=0,S=[],E=A.length;j<E;j++)(A[j].fn!==m||b&&!A[j].once||v&&A[j].context!==v)&&S.push(A[j]);S.length?this._events[w]=S.length===1?S[0]:S:u(this,w)}return this},f.prototype.removeAllListeners=function(h){var m;return h?(m=r?r+h:h,this._events[m]&&u(this,m)):(this._events=new n,this._eventsCount=0),this},f.prototype.off=f.prototype.removeListener,f.prototype.addListener=f.prototype.on,f.prefixed=r,f.EventEmitter=f,e.exports=f})(Im)),Im.exports}var Hq=Uq();const Yq=Fn(Hq);var ss=new Yq,Kg="recharts.syncEvent.tooltip",sS="recharts.syncEvent.brush";function C3(e,t){if(t){var r=Number.parseInt(t,10);if(!nn(r))return e?.[r]}}var Gq={chartName:"",tooltipPayloadSearcher:void 0,eventEmitter:void 0,defaultTooltipEventType:"axis"},T3=hr({name:"options",initialState:Gq,reducers:{createEventEmitter:e=>{e.eventEmitter==null&&(e.eventEmitter=Symbol("rechartsEventEmitter"))}}}),Kq=T3.reducer,{createEventEmitter:Wq}=T3.actions;function Vq(e){return e.tooltip.syncInteraction}var Xq={chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},M3=hr({name:"chartData",initialState:Xq,reducers:{setChartData(e,t){if(e.chartData=t.payload,t.payload==null){e.dataStartIndex=0,e.dataEndIndex=0;return}t.payload.length>0&&e.dataEndIndex!==t.payload.length-1&&(e.dataEndIndex=t.payload.length-1)},setComputedData(e,t){e.computedData=t.payload},setDataStartEndIndexes(e,t){var{startIndex:r,endIndex:n}=t.payload;r!=null&&(e.dataStartIndex=r),n!=null&&(e.dataEndIndex=n)}}}),{setChartData:cS,setDataStartEndIndexes:Fq,setComputedData:UW}=M3.actions,Zq=M3.reducer,Qq=["x","y"];function uS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function fo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?uS(Object(r),!0).forEach(function(n){Jq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):uS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Jq(e,t,r){return(t=e$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function e$(e){var t=t$(e,"string");return typeof t=="symbol"?t:t+""}function t$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function r$(e,t){if(e==null)return{};var r,n,o=n$(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function n$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function a$(){var e=de(dv),t=de(fv),r=at(),n=de(uk),o=de(ra),l=xs(),u=Td(),f=de(p=>p.rootProps.className);y.useEffect(()=>{if(e==null)return To;var p=(h,m,v)=>{if(t!==v&&e===h){if(n==="index"){var b;if(u&&m!==null&&m!==void 0&&(b=m.payload)!==null&&b!==void 0&&b.coordinate&&m.payload.sourceViewBox){var w=m.payload.coordinate,{x:A,y:j}=w,S=r$(w,Qq),{x:E,y:C,width:N,height:_}=m.payload.sourceViewBox,T=fo(fo({},S),{},{x:u.x+(N?(A-E)/N:0)*u.width,y:u.y+(_?(j-C)/_:0)*u.height});r(fo(fo({},m),{},{payload:fo(fo({},m.payload),{},{coordinate:T})}))}else r(m);return}if(o!=null){var z;if(typeof n=="function"){var U={activeTooltipIndex:m.payload.index==null?void 0:Number(m.payload.index),isTooltipActive:m.payload.active,activeIndex:m.payload.index==null?void 0:Number(m.payload.index),activeLabel:m.payload.label,activeDataKey:m.payload.dataKey,activeCoordinate:m.payload.coordinate},X=n(o,U);z=o[X]}else n==="value"&&(z=o.find(q=>String(q.value)===m.payload.label));var{coordinate:ee}=m.payload;if(z==null||m.payload.active===!1||ee==null||u==null){r(Hg({active:!1,coordinate:void 0,dataKey:void 0,index:null,label:void 0,sourceViewBox:void 0}));return}var{x:ae,y:F}=ee,Q=Math.min(ae,u.x+u.width),pe=Math.min(F,u.y+u.height),me={x:l==="horizontal"?z.coordinate:Q,y:l==="horizontal"?pe:z.coordinate},ye=Hg({active:m.payload.active,coordinate:me,dataKey:m.payload.dataKey,index:String(z.index),label:m.payload.label,sourceViewBox:m.payload.sourceViewBox});r(ye)}}};return ss.on(Kg,p),()=>{ss.off(Kg,p)}},[f,r,t,e,n,o,l,u])}function i$(){var e=de(dv),t=de(fv),r=at();y.useEffect(()=>{if(e==null)return To;var n=(o,l,u)=>{t!==u&&e===o&&r(Fq(l))};return ss.on(sS,n),()=>{ss.off(sS,n)}},[r,t,e])}function o$(){var e=at();y.useEffect(()=>{e(Wq())},[e]),a$(),i$()}function l$(e,t,r,n,o,l){var u=de(w=>hq(w,e,t)),f=de(fv),p=de(dv),h=de(uk),m=de(Vq),v=m?.active,b=Td();y.useEffect(()=>{if(!v&&p!=null&&f!=null){var w=Hg({active:l,coordinate:r,dataKey:u,index:o,label:typeof n=="number"?String(n):n,sourceViewBox:b});ss.emit(Kg,p,w,f)}},[v,r,u,o,n,f,p,h,l,b])}function dS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function fS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dS(Object(r),!0).forEach(function(n){s$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function s$(e,t,r){return(t=c$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c$(e){var t=u$(e,"string");return typeof t=="symbol"?t:t+""}function u$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function d$(e){return e.dataKey}function f$(e,t){return y.isValidElement(e)?y.cloneElement(e,t):typeof e=="function"?y.createElement(e,t):y.createElement(Qz,t)}var pS=[],p$={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,isAnimationActive:!wi.isSsr,itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function Wg(e){var t,r,n=Yt(e,p$),{active:o,allowEscapeViewBox:l,animationDuration:u,animationEasing:f,content:p,filterNull:h,isAnimationActive:m,offset:v,payloadUniqBy:b,position:w,reverseDirection:A,useTranslate3d:j,wrapperStyle:S,cursor:E,shared:C,trigger:N,defaultIndex:_,portal:T,axisId:z}=n,U=at(),X=typeof _=="number"?String(_):_;y.useEffect(()=>{U(fI({shared:C,trigger:N,axisId:z,active:o,defaultIndex:X}))},[U,C,N,z,o,X]);var ee=Td(),ae=rE(),F=lI(C),{activeIndex:Q,isActive:pe}=(t=de($e=>vq($e,F,N,X)))!==null&&t!==void 0?t:{},me=de($e=>gq($e,F,N,X)),ye=de($e=>E3($e,F,N,X)),q=de($e=>mq($e,F,N,X)),G=me,re=$q(),ie=(r=o??pe)!==null&&r!==void 0?r:!1,[P,W]=xO([G,ie]),ne=F==="axis"?ye:void 0;l$(F,N,q,ne,Q,ie);var te=T??re;if(te==null||ee==null||F==null)return null;var le=G??pS;ie||(le=pS),h&&le.length&&(le=pO(le.filter($e=>$e.value!=null&&($e.hide!==!0||n.includeHidden)),b,d$));var je=le.length>0,ge=y.createElement(iR,{allowEscapeViewBox:l,animationDuration:u,animationEasing:f,isAnimationActive:m,active:ie,coordinate:q,hasPayload:je,offset:v,position:w,reverseDirection:A,useTranslate3d:j,viewBox:ee,wrapperStyle:S,lastBoundingBox:P,innerRef:W,hasPortalFromProps:!!T},f$(p,fS(fS({},n),{},{payload:le,label:ne,active:ie,activeIndex:Q,coordinate:q,accessibilityLayer:ae})));return y.createElement(y.Fragment,null,u0.createPortal(ge,te),ie&&y.createElement(qq,{cursor:E,tooltipEventType:F,coordinate:q,payload:le,index:Q}))}var _3=e=>null;_3.displayName="Cell";function h$(e,t,r){return(t=m$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m$(e){var t=g$(e,"string");return typeof t=="symbol"?t:t+""}function g$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class v${constructor(t){h$(this,"cache",new Map),this.maxSize=t}get(t){var r=this.cache.get(t);return r!==void 0&&(this.cache.delete(t),this.cache.set(t,r)),r}set(t,r){if(this.cache.has(t))this.cache.delete(t);else if(this.cache.size>=this.maxSize){var n=this.cache.keys().next().value;this.cache.delete(n)}this.cache.set(t,r)}clear(){this.cache.clear()}size(){return this.cache.size}}function hS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function x$(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?hS(Object(r),!0).forEach(function(n){y$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function y$(e,t,r){return(t=b$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b$(e){var t=w$(e,"string");return typeof t=="symbol"?t:t+""}function w$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var j$={cacheSize:2e3,enableCache:!0},P3=x$({},j$),mS=new v$(P3.cacheSize),S$={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},gS="recharts_measurement_span";function A$(e,t){var r=t.fontSize||"",n=t.fontFamily||"",o=t.fontWeight||"",l=t.fontStyle||"",u=t.letterSpacing||"",f=t.textTransform||"";return"".concat(e,"|").concat(r,"|").concat(n,"|").concat(o,"|").concat(l,"|").concat(u,"|").concat(f)}var vS=(e,t)=>{try{var r=document.getElementById(gS);r||(r=document.createElement("span"),r.setAttribute("id",gS),r.setAttribute("aria-hidden","true"),document.body.appendChild(r)),Object.assign(r.style,S$,t),r.textContent="".concat(e);var n=r.getBoundingClientRect();return{width:n.width,height:n.height}}catch{return{width:0,height:0}}},Xl=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||wi.isSsr)return{width:0,height:0};if(!P3.enableCache)return vS(t,r);var n=A$(t,r),o=mS.get(n);if(o)return o;var l=vS(t,r);return mS.set(n,l),l},xS=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,yS=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,O$=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,E$=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,D3={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},k$=Object.keys(D3),ho="NaN";function N$(e,t){return e*D3[t]}class dr{static parse(t){var r,[,n,o]=(r=E$.exec(t))!==null&&r!==void 0?r:[];return new dr(parseFloat(n),o??"")}constructor(t,r){this.num=t,this.unit=r,this.num=t,this.unit=r,nn(t)&&(this.unit=""),r!==""&&!O$.test(r)&&(this.num=NaN,this.unit=""),k$.includes(r)&&(this.num=N$(t,r),this.unit="px")}add(t){return this.unit!==t.unit?new dr(NaN,""):new dr(this.num+t.num,this.unit)}subtract(t){return this.unit!==t.unit?new dr(NaN,""):new dr(this.num-t.num,this.unit)}multiply(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new dr(NaN,""):new dr(this.num*t.num,this.unit||t.unit)}divide(t){return this.unit!==""&&t.unit!==""&&this.unit!==t.unit?new dr(NaN,""):new dr(this.num/t.num,this.unit||t.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return nn(this.num)}}function z3(e){if(e.includes(ho))return ho;for(var t=e;t.includes("*")||t.includes("/");){var r,[,n,o,l]=(r=xS.exec(t))!==null&&r!==void 0?r:[],u=dr.parse(n??""),f=dr.parse(l??""),p=o==="*"?u.multiply(f):u.divide(f);if(p.isNaN())return ho;t=t.replace(xS,p.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var h,[,m,v,b]=(h=yS.exec(t))!==null&&h!==void 0?h:[],w=dr.parse(m??""),A=dr.parse(b??""),j=v==="+"?w.add(A):w.subtract(A);if(j.isNaN())return ho;t=t.replace(yS,j.toString())}return t}var bS=/\(([^()]*)\)/;function C$(e){for(var t=e,r;(r=bS.exec(t))!=null;){var[,n]=r;t=t.replace(bS,z3(n))}return t}function T$(e){var t=e.replace(/\s+/g,"");return t=C$(t),t=z3(t),t}function M$(e){try{return T$(e)}catch{return ho}}function qm(e){var t=M$(e.slice(5,-1));return t===ho?"":t}var _$=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],P$=["dx","dy","angle","className","breakAll"];function Vg(){return Vg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vg.apply(null,arguments)}function wS(e,t){if(e==null)return{};var r,n,o=D$(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function D$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var R3=/[ \f\n\r\t\v\u2028\u2029]+/,L3=e=>{var{children:t,breakAll:r,style:n}=e;try{var o=[];rt(t)||(r?o=t.toString().split(""):o=t.toString().split(R3));var l=o.map(f=>({word:f,width:Xl(f,n).width})),u=r?0:Xl(" ",n).width;return{wordsWithComputedWidth:l,spaceWidth:u}}catch{return null}};function z$(e){return e==="start"||e==="middle"||e==="end"||e==="inherit"}var B3=(e,t,r,n)=>e.reduce((o,l)=>{var{word:u,width:f}=l,p=o[o.length-1];if(p&&f!=null&&(t==null||n||p.width+f+r<Number(t)))p.words.push(u),p.width+=f+r;else{var h={words:[u],width:f};o.push(h)}return o},[]),I3=e=>e.reduce((t,r)=>t.width>r.width?t:r),R$="…",jS=(e,t,r,n,o,l,u,f)=>{var p=e.slice(0,t),h=L3({breakAll:r,style:n,children:p+R$});if(!h)return[!1,[]];var m=B3(h.wordsWithComputedWidth,l,u,f),v=m.length>o||I3(m).width>Number(l);return[v,m]},L$=(e,t,r,n,o)=>{var{maxLines:l,children:u,style:f,breakAll:p}=e,h=ue(l),m=String(u),v=B3(t,n,r,o);if(!h||o)return v;var b=v.length>l||I3(v).width>Number(n);if(!b)return v;for(var w=0,A=m.length-1,j=0,S;w<=A&&j<=m.length-1;){var E=Math.floor((w+A)/2),C=E-1,[N,_]=jS(m,C,p,f,l,n,r,o),[T]=jS(m,E,p,f,l,n,r,o);if(!N&&!T&&(w=E+1),N&&T&&(A=E-1),!N&&T){S=_;break}j++}return S||v},SS=e=>{var t=rt(e)?[]:e.toString().split(R3);return[{words:t,width:void 0}]},B$=e=>{var{width:t,scaleToFit:r,children:n,style:o,breakAll:l,maxLines:u}=e;if((t||r)&&!wi.isSsr){var f,p,h=L3({breakAll:l,children:n,style:o});if(h){var{wordsWithComputedWidth:m,spaceWidth:v}=h;f=m,p=v}else return SS(n);return L$({breakAll:l,children:n,maxLines:u,style:o},f,p,t,!!r)}return SS(n)},q3="#808080",I$={breakAll:!1,capHeight:"0.71em",fill:q3,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},zv=y.forwardRef((e,t)=>{var r=Yt(e,I$),{x:n,y:o,lineHeight:l,capHeight:u,fill:f,scaleToFit:p,textAnchor:h,verticalAnchor:m}=r,v=wS(r,_$),b=y.useMemo(()=>B$({breakAll:v.breakAll,children:v.children,maxLines:v.maxLines,scaleToFit:p,style:v.style,width:v.width}),[v.breakAll,v.children,v.maxLines,p,v.style,v.width]),{dx:w,dy:A,angle:j,className:S,breakAll:E}=v,C=wS(v,P$);if(!gn(n)||!gn(o)||b.length===0)return null;var N=Number(n)+(ue(w)?w:0),_=Number(o)+(ue(A)?A:0);if(!ht(N)||!ht(_))return null;var T;switch(m){case"start":T=qm("calc(".concat(u,")"));break;case"middle":T=qm("calc(".concat((b.length-1)/2," * -").concat(l," + (").concat(u," / 2))"));break;default:T=qm("calc(".concat(b.length-1," * -").concat(l,")"));break}var z=[];if(p){var U=b[0].width,{width:X}=v;z.push("scale(".concat(ue(X)&&ue(U)?X/U:1,")"))}return j&&z.push("rotate(".concat(j,", ").concat(N,", ").concat(_,")")),z.length&&(C.transform=z.join(" ")),y.createElement("text",Vg({},rr(C),{ref:t,x:N,y:_,className:qe("recharts-text",S),textAnchor:h,fill:f.includes("url")?q3:f}),b.map((ee,ae)=>{var F=ee.words.join(E?"":" ");return y.createElement("tspan",{x:N,dy:ae===0?T:l,key:"".concat(F,"-").concat(ae)},F)}))});zv.displayName="Text";var q$=["labelRef"];function $$(e,t){if(e==null)return{};var r,n,o=U$(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function U$(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function AS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function pt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?AS(Object(r),!0).forEach(function(n){H$(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):AS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function H$(e,t,r){return(t=Y$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y$(e){var t=G$(e,"string");return typeof t=="symbol"?t:t+""}function G$(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Rn.apply(null,arguments)}var $3=y.createContext(null),K$=e=>{var{x:t,y:r,upperWidth:n,lowerWidth:o,width:l,height:u,children:f}=e,p=y.useMemo(()=>({x:t,y:r,upperWidth:n,lowerWidth:o,width:l,height:u}),[t,r,n,o,l,u]);return y.createElement($3.Provider,{value:p},f)},U3=()=>{var e=y.useContext($3),t=Td();return e||QO(t)},W$=y.createContext(null),V$=()=>{var e=y.useContext(W$),t=de(mk);return e||t},X$=e=>{var{value:t,formatter:r}=e,n=rt(e.children)?t:e.children;return typeof r=="function"?r(n):n},Rv=e=>e!=null&&typeof e=="function",F$=(e,t)=>{var r=fr(t-e),n=Math.min(Math.abs(t-e),360);return r*n},Z$=(e,t,r,n,o)=>{var{offset:l,className:u}=e,{cx:f,cy:p,innerRadius:h,outerRadius:m,startAngle:v,endAngle:b,clockWise:w}=o,A=(h+m)/2,j=F$(v,b),S=j>=0?1:-1,E,C;switch(t){case"insideStart":E=v+S*l,C=w;break;case"insideEnd":E=b-S*l,C=!w;break;case"end":E=b+S*l,C=w;break;default:throw new Error("Unsupported position ".concat(t))}C=j<=0?C:!C;var N=Ht(f,p,A,E),_=Ht(f,p,A,E+(C?1:-1)*359),T="M".concat(N.x,",").concat(N.y,`
    A`).concat(A,",").concat(A,",0,1,").concat(C?0:1,`,
    `).concat(_.x,",").concat(_.y),z=rt(e.id)?Ql("recharts-radial-line-"):e.id;return y.createElement("text",Rn({},n,{dominantBaseline:"central",className:qe("recharts-radial-bar-label",u)}),y.createElement("defs",null,y.createElement("path",{id:z,d:T})),y.createElement("textPath",{xlinkHref:"#".concat(z)},r))},Q$=(e,t,r)=>{var{cx:n,cy:o,innerRadius:l,outerRadius:u,startAngle:f,endAngle:p}=e,h=(f+p)/2;if(r==="outside"){var{x:m,y:v}=Ht(n,o,u+t,h);return{x:m,y:v,textAnchor:m>=n?"start":"end",verticalAnchor:"middle"}}if(r==="center")return{x:n,y:o,textAnchor:"middle",verticalAnchor:"middle"};if(r==="centerTop")return{x:n,y:o,textAnchor:"middle",verticalAnchor:"start"};if(r==="centerBottom")return{x:n,y:o,textAnchor:"middle",verticalAnchor:"end"};var b=(l+u)/2,{x:w,y:A}=Ht(n,o,b,h);return{x:w,y:A,textAnchor:"middle",verticalAnchor:"middle"}},Xg=e=>"cx"in e&&ue(e.cx),J$=(e,t)=>{var{parentViewBox:r,offset:n,position:o}=e,l;r!=null&&!Xg(r)&&(l=r);var{x:u,y:f,upperWidth:p,lowerWidth:h,height:m}=t,v=u,b=u+(p-h)/2,w=(v+b)/2,A=(p+h)/2,j=v+p/2,S=m>=0?1:-1,E=S*n,C=S>0?"end":"start",N=S>0?"start":"end",_=p>=0?1:-1,T=_*n,z=_>0?"end":"start",U=_>0?"start":"end";if(o==="top"){var X={x:v+p/2,y:f-E,textAnchor:"middle",verticalAnchor:C};return pt(pt({},X),l?{height:Math.max(f-l.y,0),width:p}:{})}if(o==="bottom"){var ee={x:b+h/2,y:f+m+E,textAnchor:"middle",verticalAnchor:N};return pt(pt({},ee),l?{height:Math.max(l.y+l.height-(f+m),0),width:h}:{})}if(o==="left"){var ae={x:w-T,y:f+m/2,textAnchor:z,verticalAnchor:"middle"};return pt(pt({},ae),l?{width:Math.max(ae.x-l.x,0),height:m}:{})}if(o==="right"){var F={x:w+A+T,y:f+m/2,textAnchor:U,verticalAnchor:"middle"};return pt(pt({},F),l?{width:Math.max(l.x+l.width-F.x,0),height:m}:{})}var Q=l?{width:A,height:m}:{};return o==="insideLeft"?pt({x:w+T,y:f+m/2,textAnchor:U,verticalAnchor:"middle"},Q):o==="insideRight"?pt({x:w+A-T,y:f+m/2,textAnchor:z,verticalAnchor:"middle"},Q):o==="insideTop"?pt({x:v+p/2,y:f+E,textAnchor:"middle",verticalAnchor:N},Q):o==="insideBottom"?pt({x:b+h/2,y:f+m-E,textAnchor:"middle",verticalAnchor:C},Q):o==="insideTopLeft"?pt({x:v+T,y:f+E,textAnchor:U,verticalAnchor:N},Q):o==="insideTopRight"?pt({x:v+p-T,y:f+E,textAnchor:z,verticalAnchor:N},Q):o==="insideBottomLeft"?pt({x:b+T,y:f+m-E,textAnchor:U,verticalAnchor:C},Q):o==="insideBottomRight"?pt({x:b+h-T,y:f+m-E,textAnchor:z,verticalAnchor:C},Q):o&&typeof o=="object"&&(ue(o.x)||Hn(o.x))&&(ue(o.y)||Hn(o.y))?pt({x:u+an(o.x,A),y:f+an(o.y,m),textAnchor:"end",verticalAnchor:"end"},Q):pt({x:j,y:f+m/2,textAnchor:"middle",verticalAnchor:"middle"},Q)},eU={offset:5,zIndex:zt.label};function Na(e){var t=Yt(e,eU),{viewBox:r,position:n,value:o,children:l,content:u,className:f="",textBreakAll:p,labelRef:h}=t,m=V$(),v=U3(),b=n==="center"?v:m??v,w,A,j;if(r==null?w=b:Xg(r)?w=r:w=QO(r),!w||rt(o)&&rt(l)&&!y.isValidElement(u)&&typeof u!="function")return null;var S=pt(pt({},t),{},{viewBox:w});if(y.isValidElement(u)){var{labelRef:E}=S,C=$$(S,q$);return y.cloneElement(u,C)}if(typeof u=="function"){if(A=y.createElement(u,S),y.isValidElement(A))return A}else A=X$(t);var N=rr(t);if(Xg(w)){if(n==="insideStart"||n==="insideEnd"||n==="end")return Z$(t,n,A,N,w);j=Q$(w,t.offset,t.position)}else j=J$(t,w);return y.createElement(Xr,{zIndex:t.zIndex},y.createElement(zv,Rn({ref:h,className:qe("recharts-label",f)},N,j,{textAnchor:z$(N.textAnchor)?N.textAnchor:j.textAnchor,breakAll:p}),A))}Na.displayName="Label";var tU=(e,t,r)=>{if(!e)return null;var n={viewBox:t,labelRef:r};return e===!0?y.createElement(Na,Rn({key:"label-implicit"},n)):gn(e)?y.createElement(Na,Rn({key:"label-implicit",value:e},n)):y.isValidElement(e)?e.type===Na?y.cloneElement(e,pt({key:"label-implicit"},n)):y.createElement(Na,Rn({key:"label-implicit",content:e},n)):Rv(e)?y.createElement(Na,Rn({key:"label-implicit",content:e},n)):e&&typeof e=="object"?y.createElement(Na,Rn({},e,{key:"label-implicit"},n)):null};function rU(e){var{label:t,labelRef:r}=e,n=U3();return tU(t,n,r)||null}var $m={},Um={},OS;function nU(){return OS||(OS=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return r[r.length-1]}e.last=t})(Um)),Um}var Hm={},ES;function aU(){return ES||(ES=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){return Array.isArray(r)?r:Array.from(r)}e.toArray=t})(Hm)),Hm}var kS;function iU(){return kS||(kS=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=nU(),r=aU(),n=N0();function o(l){if(n.isArrayLike(l))return t.last(r.toArray(l))}e.last=o})($m)),$m}var Ym,NS;function oU(){return NS||(NS=1,Ym=iU().last),Ym}var lU=oU();const sU=Fn(lU);var cU=["valueAccessor"],uU=["dataKey","clockWise","id","textBreakAll","zIndex"];function Wu(){return Wu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Wu.apply(null,arguments)}function CS(e,t){if(e==null)return{};var r,n,o=dU(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function dU(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var fU=e=>Array.isArray(e.value)?sU(e.value):e.value,H3=y.createContext(void 0),Y3=H3.Provider,G3=y.createContext(void 0);G3.Provider;function pU(){return y.useContext(H3)}function hU(){return y.useContext(G3)}function pu(e){var{valueAccessor:t=fU}=e,r=CS(e,cU),{dataKey:n,clockWise:o,id:l,textBreakAll:u,zIndex:f}=r,p=CS(r,uU),h=pU(),m=hU(),v=h||m;return!v||!v.length?null:y.createElement(Xr,{zIndex:f??zt.label},y.createElement(Yr,{className:"recharts-label-list"},v.map((b,w)=>{var A,j=rt(n)?t(b,w):Rt(b&&b.payload,n),S=rt(l)?{}:{id:"".concat(l,"-").concat(w)};return y.createElement(Na,Wu({key:"label-".concat(w)},rr(b),p,S,{fill:(A=r.fill)!==null&&A!==void 0?A:b.fill,parentViewBox:b.parentViewBox,value:j,textBreakAll:u,viewBox:b.viewBox,index:w,zIndex:0}))})))}pu.displayName="LabelList";function K3(e){var{label:t}=e;return t?t===!0?y.createElement(pu,{key:"labelList-implicit"}):y.isValidElement(t)||Rv(t)?y.createElement(pu,{key:"labelList-implicit",content:t}):typeof t=="object"?y.createElement(pu,Wu({key:"labelList-implicit"},t,{type:String(t.type)})):null:null}function Fg(){return Fg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fg.apply(null,arguments)}var W3=e=>{var{cx:t,cy:r,r:n,className:o}=e,l=qe("recharts-dot",o);return ue(t)&&ue(r)&&ue(n)?y.createElement("circle",Fg({},rn(e),k0(e),{className:l,cx:t,cy:r,r:n})):null},mU={radiusAxis:{},angleAxis:{}},V3=hr({name:"polarAxis",initialState:mU,reducers:{addRadiusAxis(e,t){e.radiusAxis[t.payload.id]=t.payload},removeRadiusAxis(e,t){delete e.radiusAxis[t.payload.id]},addAngleAxis(e,t){e.angleAxis[t.payload.id]=t.payload},removeAngleAxis(e,t){delete e.angleAxis[t.payload.id]}}}),{addRadiusAxis:HW,removeRadiusAxis:YW,addAngleAxis:GW,removeAngleAxis:KW}=V3.actions,gU=V3.reducer,Gm={exports:{}},Ke={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS;function vU(){if(TS)return Ke;TS=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.view_transition"),w=Symbol.for("react.client.reference");function A(j){if(typeof j=="object"&&j!==null){var S=j.$$typeof;switch(S){case e:switch(j=j.type,j){case r:case o:case n:case p:case h:case b:return j;default:switch(j=j&&j.$$typeof,j){case u:case f:case v:case m:return j;case l:return j;default:return S}}case t:return S}}}return Ke.ContextConsumer=l,Ke.ContextProvider=u,Ke.Element=e,Ke.ForwardRef=f,Ke.Fragment=r,Ke.Lazy=v,Ke.Memo=m,Ke.Portal=t,Ke.Profiler=o,Ke.StrictMode=n,Ke.Suspense=p,Ke.SuspenseList=h,Ke.isContextConsumer=function(j){return A(j)===l},Ke.isContextProvider=function(j){return A(j)===u},Ke.isElement=function(j){return typeof j=="object"&&j!==null&&j.$$typeof===e},Ke.isForwardRef=function(j){return A(j)===f},Ke.isFragment=function(j){return A(j)===r},Ke.isLazy=function(j){return A(j)===v},Ke.isMemo=function(j){return A(j)===m},Ke.isPortal=function(j){return A(j)===t},Ke.isProfiler=function(j){return A(j)===o},Ke.isStrictMode=function(j){return A(j)===n},Ke.isSuspense=function(j){return A(j)===p},Ke.isSuspenseList=function(j){return A(j)===h},Ke.isValidElementType=function(j){return typeof j=="string"||typeof j=="function"||j===r||j===o||j===n||j===p||j===h||typeof j=="object"&&j!==null&&(j.$$typeof===v||j.$$typeof===m||j.$$typeof===u||j.$$typeof===l||j.$$typeof===f||j.$$typeof===w||j.getModuleId!==void 0)},Ke.typeOf=A,Ke}var MS;function xU(){return MS||(MS=1,Gm.exports=vU()),Gm.exports}var yU=xU(),_S=e=>typeof e=="string"?e:e?e.displayName||e.name||"Component":"",PS=null,Km=null,X3=e=>{if(e===PS&&Array.isArray(Km))return Km;var t=[];return y.Children.forEach(e,r=>{rt(r)||(yU.isFragment(r)?t=t.concat(X3(r.props.children)):t.push(r))}),Km=t,PS=e,t};function bU(e,t){var r=[],n=[];return Array.isArray(t)?n=t.map(o=>_S(o)):n=[_S(t)],X3(e).forEach(o=>{var l=xo(o,"type.displayName")||xo(o,"type.name");l&&n.indexOf(l)!==-1&&r.push(o)}),r}var F3=e=>e&&typeof e=="object"&&"clipDot"in e?!!e.clipDot:!0,Wm={},DS;function wU(){return DS||(DS=1,(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});function t(r){if(typeof r!="object"||r==null)return!1;if(Object.getPrototypeOf(r)===null)return!0;if(Object.prototype.toString.call(r)!=="[object Object]"){const o=r[Symbol.toStringTag];return o==null||!Object.getOwnPropertyDescriptor(r,Symbol.toStringTag)?.writable?!1:r.toString()===`[object ${o}]`}let n=r;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}e.isPlainObject=t})(Wm)),Wm}var Vm,zS;function jU(){return zS||(zS=1,Vm=wU().isPlainObject),Vm}var SU=jU();const AU=Fn(SU);function RS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function LS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?RS(Object(r),!0).forEach(function(n){OU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):RS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function OU(e,t,r){return(t=EU(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function EU(e){var t=kU(e,"string");return typeof t=="symbol"?t:t+""}function kU(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vu(){return Vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vu.apply(null,arguments)}var BS=(e,t,r,n,o)=>{var l=r-n,u;return u="M ".concat(e,",").concat(t),u+="L ".concat(e+r,",").concat(t),u+="L ".concat(e+r-l/2,",").concat(t+o),u+="L ".concat(e+r-l/2-n,",").concat(t+o),u+="L ".concat(e,",").concat(t," Z"),u},NU={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},CU=e=>{var t=Yt(e,NU),{x:r,y:n,upperWidth:o,lowerWidth:l,height:u,className:f}=t,{animationEasing:p,animationDuration:h,animationBegin:m,isUpdateAnimationActive:v}=t,b=y.useRef(null),[w,A]=y.useState(-1),j=y.useRef(o),S=y.useRef(l),E=y.useRef(u),C=y.useRef(r),N=y.useRef(n),_=Pd(e,"trapezoid-");if(y.useEffect(()=>{if(b.current&&b.current.getTotalLength)try{var me=b.current.getTotalLength();me&&A(me)}catch{}},[]),r!==+r||n!==+n||o!==+o||l!==+l||u!==+u||o===0&&l===0||u===0)return null;var T=qe("recharts-trapezoid",f);if(!v)return y.createElement("g",null,y.createElement("path",Vu({},rr(t),{className:T,d:BS(r,n,o,l,u)})));var z=j.current,U=S.current,X=E.current,ee=C.current,ae=N.current,F="0px ".concat(w===-1?1:w,"px"),Q="".concat(w,"px 0px"),pe=aE(["strokeDasharray"],h,p);return y.createElement(_d,{animationId:_,key:_,canBegin:w>0,duration:h,easing:p,isActive:v,begin:m},me=>{var ye=lt(z,o,me),q=lt(U,l,me),G=lt(X,u,me),re=lt(ee,r,me),ie=lt(ae,n,me);b.current&&(j.current=ye,S.current=q,E.current=G,C.current=re,N.current=ie);var P=me>0?{transition:pe,strokeDasharray:Q}:{strokeDasharray:F};return y.createElement("path",Vu({},rr(t),{className:T,d:BS(re,ie,ye,q,G),ref:b,style:LS(LS({},P),t.style)}))})},TU=["option","shapeType","propTransformer","activeClassName","isActive"];function MU(e,t){if(e==null)return{};var r,n,o=_U(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _U(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function IS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Xu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?IS(Object(r),!0).forEach(function(n){PU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):IS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function PU(e,t,r){return(t=DU(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function DU(e){var t=zU(e,"string");return typeof t=="symbol"?t:t+""}function zU(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function RU(e,t){return Xu(Xu({},t),e)}function LU(e,t){return e==="symbols"}function qS(e){var{shapeType:t,elementProps:r}=e;switch(t){case"rectangle":return y.createElement(sE,r);case"trapezoid":return y.createElement(CU,r);case"sector":return y.createElement(dE,r);case"symbols":if(LU(t))return y.createElement(E0,r);break;case"curve":return y.createElement(nE,r);default:return null}}function BU(e){return y.isValidElement(e)?e.props:e}function Z3(e){var{option:t,shapeType:r,propTransformer:n=RU,activeClassName:o="recharts-active-shape",isActive:l}=e,u=MU(e,TU),f;if(y.isValidElement(t))f=y.cloneElement(t,Xu(Xu({},u),BU(t)));else if(typeof t=="function")f=t(u);else if(AU(t)&&typeof t!="boolean"){var p=n(t,u);f=y.createElement(qS,{shapeType:r,elementProps:p})}else{var h=u;f=y.createElement(qS,{shapeType:r,elementProps:h})}return l?y.createElement(Yr,{className:o},f):f}var Q3=(e,t)=>{var r=at();return(n,o)=>l=>{e?.(n,o,l),r(i3({activeIndex:String(o),activeDataKey:t,activeCoordinate:n.tooltipPosition}))}},J3=e=>{var t=at();return(r,n)=>o=>{e?.(r,n,o),t(pI())}},e5=(e,t)=>{var r=at();return(n,o)=>l=>{e?.(n,o,l),r(hI({activeIndex:String(o),activeDataKey:t,activeCoordinate:n.tooltipPosition}))}};function t5(e){var{fn:t,args:r}=e,n=at(),o=Ft();return y.useLayoutEffect(()=>{if(!o){var l=t(r);return n(uI(l)),()=>{n(dI(l))}}},[t,r,n,o]),null}function r5(e){var{legendPayload:t}=e,r=at(),n=Ft();return y.useLayoutEffect(()=>n?To:(r(_z(t)),()=>{r(Pz(t))}),[r,n,t]),null}var Xm,IU=()=>{var[e]=y.useState(()=>Ql("uid-"));return e},qU=(Xm=iC.useId)!==null&&Xm!==void 0?Xm:IU;function n5(e,t){var r=qU();return t||(e?"".concat(e,"-").concat(r):r)}var $U=y.createContext(void 0),a5=e=>{var{id:t,type:r,children:n}=e,o=n5("recharts-".concat(r),t);return y.createElement($U.Provider,{value:o},n(o))},UU={cartesianItems:[],polarItems:[]},i5=hr({name:"graphicalItems",initialState:UU,reducers:{addCartesianGraphicalItem:{reducer(e,t){e.cartesianItems.push(t.payload)},prepare:St()},replaceCartesianGraphicalItem:{reducer(e,t){var{prev:r,next:n}=t.payload,o=qn(e).cartesianItems.indexOf(r);o>-1&&(e.cartesianItems[o]=n)},prepare:St()},removeCartesianGraphicalItem:{reducer(e,t){var r=qn(e).cartesianItems.indexOf(t.payload);r>-1&&e.cartesianItems.splice(r,1)},prepare:St()},addPolarGraphicalItem:{reducer(e,t){e.polarItems.push(t.payload)},prepare:St()},removePolarGraphicalItem:{reducer(e,t){var r=qn(e).polarItems.indexOf(t.payload);r>-1&&e.polarItems.splice(r,1)},prepare:St()}}}),{addCartesianGraphicalItem:HU,replaceCartesianGraphicalItem:YU,removeCartesianGraphicalItem:GU,addPolarGraphicalItem:WW,removePolarGraphicalItem:VW}=i5.actions,KU=i5.reducer;function o5(e){var t=at(),r=y.useRef(null);return y.useLayoutEffect(()=>{r.current===null?t(HU(e)):r.current!==e&&t(YU({prev:r.current,next:e})),r.current=e},[t,e]),y.useLayoutEffect(()=>()=>{r.current&&(t(GU(r.current)),r.current=null)},[t]),null}var WU=["points"];function $S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Fm(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?$S(Object(r),!0).forEach(function(n){VU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$S(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function VU(e,t,r){return(t=XU(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function XU(e){var t=FU(e,"string");return typeof t=="symbol"?t:t+""}function FU(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fu(){return Fu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fu.apply(null,arguments)}function ZU(e,t){if(e==null)return{};var r,n,o=QU(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function QU(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function JU(e){var{option:t,dotProps:r,className:n}=e;if(y.isValidElement(t))return y.cloneElement(t,r);if(typeof t=="function")return t(r);var o=qe(n,typeof t!="boolean"?t.className:""),l=r??{},{points:u}=l,f=ZU(l,WU);return y.createElement(W3,Fu({},f,{className:o}))}function eH(e,t){return e==null?!1:t?!0:e.length===1}function tH(e){var{points:t,dot:r,className:n,dotClassName:o,dataKey:l,baseProps:u,needClip:f,clipPathId:p,zIndex:h=zt.scatter}=e;if(!eH(t,r))return null;var m=F3(r),v=N8(r),b=t.map((A,j)=>{var S,E,C=Fm(Fm(Fm({r:3},u),v),{},{index:j,cx:(S=A.x)!==null&&S!==void 0?S:void 0,cy:(E=A.y)!==null&&E!==void 0?E:void 0,dataKey:l,value:A.value,payload:A.payload,points:t});return y.createElement(JU,{key:"dot-".concat(j),option:r,dotProps:C,className:o})}),w={};return f&&p!=null&&(w.clipPath="url(#clipPath-".concat(m?"":"dots-").concat(p,")")),y.createElement(Xr,{zIndex:h},y.createElement(Yr,Fu({className:n},w),b))}function US(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function HS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?US(Object(r),!0).forEach(function(n){rH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):US(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function rH(e,t,r){return(t=nH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function nH(e){var t=aH(e,"string");return typeof t=="symbol"?t:t+""}function aH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iH={xAxis:{},yAxis:{},zAxis:{}},l5=hr({name:"cartesianAxis",initialState:iH,reducers:{addXAxis:{reducer(e,t){e.xAxis[t.payload.id]=t.payload},prepare:St()},removeXAxis:{reducer(e,t){delete e.xAxis[t.payload.id]},prepare:St()},addYAxis:{reducer(e,t){e.yAxis[t.payload.id]=t.payload},prepare:St()},removeYAxis:{reducer(e,t){delete e.yAxis[t.payload.id]},prepare:St()},addZAxis:{reducer(e,t){e.zAxis[t.payload.id]=t.payload},prepare:St()},removeZAxis:{reducer(e,t){delete e.zAxis[t.payload.id]},prepare:St()},updateYAxisWidth(e,t){var{id:r,width:n}=t.payload,o=e.yAxis[r];if(o){var l=o.widthHistory||[];if(l.length===3&&l[0]===l[2]&&n===l[1]&&n!==o.width&&Math.abs(n-l[0])<=1)return;var u=[...l,n].slice(-3);e.yAxis[r]=HS(HS({},e.yAxis[r]),{},{width:n,widthHistory:u})}}}}),{addXAxis:oH,removeXAxis:lH,addYAxis:sH,removeYAxis:cH,addZAxis:XW,removeZAxis:FW,updateYAxisWidth:uH}=l5.actions,dH=l5.reducer,fH=H([Lt],e=>({top:e.top,bottom:e.bottom,left:e.left,right:e.right})),pH=H([fH,Zn,Qn],(e,t,r)=>{if(!(!e||t==null||r==null))return{x:e.left,y:e.top,width:Math.max(0,t-e.left-e.right),height:Math.max(0,r-e.top-e.bottom)}}),Lv=()=>de(pH),hH=()=>de(eq);function YS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Zm(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?YS(Object(r),!0).forEach(function(n){mH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):YS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function mH(e,t,r){return(t=gH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function gH(e){var t=vH(e,"string");return typeof t=="symbol"?t:t+""}function vH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var xH=e=>{var{point:t,childIndex:r,mainColor:n,activeDot:o,dataKey:l}=e;if(o===!1||t.x==null||t.y==null)return null;var u={index:r,dataKey:l,cx:t.x,cy:t.y,r:4,fill:n??"none",strokeWidth:2,stroke:"#fff",payload:t.payload,value:t.value},f=Zm(Zm(Zm({},u),ps(o)),k0(o)),p;return y.isValidElement(o)?p=y.cloneElement(o,f):typeof o=="function"?p=o(f):p=y.createElement(W3,f),y.createElement(Yr,{className:"recharts-active-dot"},p)};function yH(e){var{points:t,mainColor:r,activeDot:n,itemDataKey:o,zIndex:l=zt.activeDot}=e,u=de(xi),f=hH();if(t==null||f==null)return null;var p=t.find(h=>f.includes(h.payload));return rt(p)?null:y.createElement(Xr,{zIndex:l},y.createElement(xH,{point:p,childIndex:Number(u),mainColor:r,dataKey:o,activeDot:n}))}var bH="Invariant failed";function wH(e,t){throw new Error(bH)}var jH=["x","y"];function Zg(){return Zg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Zg.apply(null,arguments)}function GS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Kl(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?GS(Object(r),!0).forEach(function(n){SH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):GS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function SH(e,t,r){return(t=AH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function AH(e){var t=OH(e,"string");return typeof t=="symbol"?t:t+""}function OH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function EH(e,t){if(e==null)return{};var r,n,o=kH(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function kH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function NH(e,t){var{x:r,y:n}=e,o=EH(e,jH),l="".concat(r),u=parseInt(l,10),f="".concat(n),p=parseInt(f,10),h="".concat(t.height||o.height),m=parseInt(h,10),v="".concat(t.width||o.width),b=parseInt(v,10);return Kl(Kl(Kl(Kl(Kl({},t),o),u?{x:u}:{}),p?{y:p}:{}),{},{height:m,width:b,name:t.name,radius:t.radius})}function Zu(e){return y.createElement(Z3,Zg({shapeType:"rectangle",propTransformer:NH,activeClassName:"recharts-active-bar"},e))}var CH=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return(n,o)=>{if(ue(t))return t;var l=ue(n)||rt(n);return l?t(n,o):(l||wH(),r)}},TH={},s5=hr({name:"errorBars",initialState:TH,reducers:{addErrorBar:(e,t)=>{var{itemId:r,errorBar:n}=t.payload;e[r]||(e[r]=[]),e[r].push(n)},replaceErrorBar:(e,t)=>{var{itemId:r,prev:n,next:o}=t.payload;e[r]&&(e[r]=e[r].map(l=>l.dataKey===n.dataKey&&l.direction===n.direction?o:l))},removeErrorBar:(e,t)=>{var{itemId:r,errorBar:n}=t.payload;e[r]&&(e[r]=e[r].filter(o=>o.dataKey!==n.dataKey||o.direction!==n.direction))}}}),{addErrorBar:ZW,replaceErrorBar:QW,removeErrorBar:JW}=s5.actions,MH=s5.reducer,_H=["children"];function PH(e,t){if(e==null)return{};var r,n,o=DH(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function DH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var zH={data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0},RH=y.createContext(zH);function c5(e){var{children:t}=e,r=PH(e,_H);return y.createElement(RH.Provider,{value:r},t)}function Bv(e,t){var r,n,o=de(h=>ea(h,e)),l=de(h=>ta(h,t)),u=(r=o?.allowDataOverflow)!==null&&r!==void 0?r:Ar.allowDataOverflow,f=(n=l?.allowDataOverflow)!==null&&n!==void 0?n:Or.allowDataOverflow,p=u||f;return{needClip:p,needClipX:u,needClipY:f}}function u5(e){var{xAxisId:t,yAxisId:r,clipPathId:n}=e,o=Lv(),{needClipX:l,needClipY:u,needClip:f}=Bv(t,r);if(!f||!o)return null;var{x:p,y:h,width:m,height:v}=o;return y.createElement("clipPath",{id:"clipPath-".concat(n)},y.createElement("rect",{x:l?p:p-m/2,y:u?h:h-v/2,width:l?m:m*2,height:u?v:v*2}))}function LH(e,t){return e&&typeof e=="object"&&"zIndex"in e&&typeof e.zIndex=="number"&&ht(e.zIndex)?e.zIndex:t}var BH=["onMouseEnter","onMouseLeave","onClick"],IH=["value","background","tooltipPosition"],qH=["id"],$H=["onMouseEnter","onClick","onMouseLeave"];function Xn(){return Xn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xn.apply(null,arguments)}function KS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?KS(Object(r),!0).forEach(function(n){UH(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):KS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function UH(e,t,r){return(t=HH(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function HH(e){var t=YH(e,"string");return typeof t=="symbol"?t:t+""}function YH(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qu(e,t){if(e==null)return{};var r,n,o=GH(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function GH(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var KH=e=>{var{dataKey:t,name:r,fill:n,legendType:o,hide:l}=e;return[{inactive:l,dataKey:t,type:o,color:n,value:Od(r,t),payload:e}]};function WH(e){var{dataKey:t,stroke:r,strokeWidth:n,fill:o,name:l,hide:u,unit:f}=e;return{dataDefinedOnItem:void 0,positions:void 0,settings:{stroke:r,strokeWidth:n,fill:o,dataKey:t,nameKey:void 0,name:Od(l,t),hide:u,type:e.tooltipType,color:e.fill,unit:f}}}function VH(e){var t=de(xi),{data:r,dataKey:n,background:o,allOtherBarProps:l}=e,{onMouseEnter:u,onMouseLeave:f,onClick:p}=l,h=Qu(l,BH),m=Q3(u,n),v=J3(f),b=e5(p,n);if(!o||r==null)return null;var w=ps(o);return y.createElement(Xr,{zIndex:LH(o,zt.barBackground)},r.map((A,j)=>{var{value:S,background:E,tooltipPosition:C}=A,N=Qu(A,IH);if(!E)return null;var _=m(A,j),T=v(A,j),z=b(A,j),U=er(er(er(er(er({option:o,isActive:String(j)===t},N),{},{fill:"#eee"},E),w),xd(h,A,j)),{},{onMouseEnter:_,onMouseLeave:T,onClick:z,dataKey:n,index:j,className:"recharts-bar-background-rectangle"});return y.createElement(Zu,Xn({key:"background-bar-".concat(j)},U))}))}function XH(e){var{showLabels:t,children:r,rects:n}=e,o=n?.map(l=>{var u={x:l.x,y:l.y,width:l.width,lowerWidth:l.width,upperWidth:l.width,height:l.height};return er(er({},u),{},{value:l.value,payload:l.payload,parentViewBox:l.parentViewBox,viewBox:u,fill:l.fill})});return y.createElement(Y3,{value:t?o:void 0},r)}function FH(e){var{shape:t,activeBar:r,baseProps:n,entry:o,index:l,dataKey:u}=e,f=de(xi),p=de(b3),h=r&&String(l)===f&&(p==null||u===p),m=h?r:t;return h?y.createElement(Xr,{zIndex:zt.activeBar},y.createElement(Zu,Xn({},n,{name:String(n.name)},o,{isActive:h,option:m,index:l,dataKey:u}))):y.createElement(Zu,Xn({},n,{name:String(n.name)},o,{isActive:h,option:m,index:l,dataKey:u}))}function ZH(e){var{shape:t,baseProps:r,entry:n,index:o,dataKey:l}=e;return y.createElement(Zu,Xn({},r,{name:String(r.name)},n,{isActive:!1,option:t,index:o,dataKey:l}))}function QH(e){var t,{data:r,props:n}=e,o=(t=rn(n))!==null&&t!==void 0?t:{},{id:l}=o,u=Qu(o,qH),{shape:f,dataKey:p,activeBar:h}=n,{onMouseEnter:m,onClick:v,onMouseLeave:b}=n,w=Qu(n,$H),A=Q3(m,p),j=J3(b),S=e5(v,p);return r?y.createElement(y.Fragment,null,r.map((E,C)=>y.createElement(Yr,Xn({key:"rectangle-".concat(E?.x,"-").concat(E?.y,"-").concat(E?.value,"-").concat(C),className:"recharts-bar-rectangle"},xd(w,E,C),{onMouseEnter:A(E,C),onMouseLeave:j(E,C),onClick:S(E,C)}),h?y.createElement(FH,{shape:f,activeBar:h,baseProps:u,entry:E,index:C,dataKey:p}):y.createElement(ZH,{shape:f,baseProps:u,entry:E,index:C,dataKey:p})))):null}function JH(e){var{props:t,previousRectanglesRef:r}=e,{data:n,layout:o,isAnimationActive:l,animationBegin:u,animationDuration:f,animationEasing:p,onAnimationEnd:h,onAnimationStart:m}=t,v=r.current,b=Pd(t,"recharts-bar-"),[w,A]=y.useState(!1),j=!w,S=y.useCallback(()=>{typeof h=="function"&&h(),A(!1)},[h]),E=y.useCallback(()=>{typeof m=="function"&&m(),A(!0)},[m]);return y.createElement(XH,{showLabels:j,rects:n},y.createElement(_d,{animationId:b,begin:u,duration:f,isActive:l,easing:p,onAnimationEnd:S,onAnimationStart:E,key:b},C=>{var N=C===1?n:n?.map((_,T)=>{var z=v&&v[T];if(z)return er(er({},_),{},{x:lt(z.x,_.x,C),y:lt(z.y,_.y,C),width:lt(z.width,_.width,C),height:lt(z.height,_.height,C)});if(o==="horizontal"){var U=lt(0,_.height,C),X=lt(_.stackedBarStart,_.y,C);return er(er({},_),{},{y:X,height:U})}var ee=lt(0,_.width,C),ae=lt(_.stackedBarStart,_.x,C);return er(er({},_),{},{width:ee,x:ae})});return C>0&&(r.current=N??null),N==null?null:y.createElement(Yr,null,y.createElement(QH,{props:t,data:N}))}),y.createElement(K3,{label:t.label}),t.children)}function eY(e){var t=y.useRef(null);return y.createElement(JH,{previousRectanglesRef:t,props:e})}var d5=0,tY=(e,t)=>{var r=Array.isArray(e.value)?e.value[1]:e.value;return{x:e.x,y:e.y,value:r,errorVal:Rt(e,t)}};class rY extends y.PureComponent{render(){var{hide:t,data:r,dataKey:n,className:o,xAxisId:l,yAxisId:u,needClip:f,background:p,id:h}=this.props;if(t||r==null)return null;var m=qe("recharts-bar",o),v=h;return y.createElement(Yr,{className:m,id:h},f&&y.createElement("defs",null,y.createElement(u5,{clipPathId:v,xAxisId:l,yAxisId:u})),y.createElement(Yr,{className:"recharts-bar-rectangles",clipPath:f?"url(#clipPath-".concat(v,")"):void 0},y.createElement(VH,{data:r,dataKey:n,background:p,allOtherBarProps:this.props}),y.createElement(eY,this.props)))}}var nY={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",hide:!1,isAnimationActive:!wi.isSsr,legendType:"rect",minPointSize:d5,xAxisId:0,yAxisId:0,zIndex:zt.bar};function aY(e){var{xAxisId:t,yAxisId:r,hide:n,legendType:o,minPointSize:l,activeBar:u,animationBegin:f,animationDuration:p,animationEasing:h,isAnimationActive:m}=e,{needClip:v}=Bv(t,r),b=xs(),w=Ft(),A=bU(e.children,_3),j=de(C=>_Y(C,t,r,w,e.id,A));if(b!=="vertical"&&b!=="horizontal")return null;var S,E=j?.[0];return E==null||E.height==null||E.width==null?S=0:S=b==="vertical"?E.height/2:E.width/2,y.createElement(c5,{xAxisId:t,yAxisId:r,data:j,dataPointFormatter:tY,errorBarOffset:S},y.createElement(rY,Xn({},e,{layout:b,needClip:v,data:j,xAxisId:t,yAxisId:r,hide:n,legendType:o,minPointSize:l,activeBar:u,animationBegin:f,animationDuration:p,animationEasing:h,isAnimationActive:m})))}function iY(e){var{layout:t,barSettings:{dataKey:r,minPointSize:n},pos:o,bandSize:l,xAxis:u,yAxis:f,xAxisTicks:p,yAxisTicks:h,stackedData:m,displayedData:v,offset:b,cells:w,parentViewBox:A,dataStartIndex:j}=e,S=t==="horizontal"?f:u,E=m?S.scale.domain():null,C=GD({numericAxis:S}),N=S.scale(C);return v.map((_,T)=>{var z,U,X,ee,ae,F;m?z=ID(m[T+j],E):(z=Rt(_,r),Array.isArray(z)||(z=[C,z]));var Q=CH(n,d5)(z[1],T);if(t==="horizontal"){var pe,[me,ye]=[f.scale(z[0]),f.scale(z[1])];U=S2({axis:u,ticks:p,bandSize:l,offset:o.offset,entry:_,index:T}),X=(pe=ye??me)!==null&&pe!==void 0?pe:void 0,ee=o.size;var q=me-ye;if(ae=nn(q)?0:q,F={x:U,y:b.top,width:ee,height:b.height},Math.abs(Q)>0&&Math.abs(ae)<Math.abs(Q)){var G=fr(ae||Q)*(Math.abs(Q)-Math.abs(ae));X-=G,ae+=G}}else{var[re,ie]=[u.scale(z[0]),u.scale(z[1])];if(U=re,X=S2({axis:f,ticks:h,bandSize:l,offset:o.offset,entry:_,index:T}),ee=ie-re,ae=o.size,F={x:b.left,y:X,width:b.width,height:ae},Math.abs(Q)>0&&Math.abs(ee)<Math.abs(Q)){var P=fr(ee||Q)*(Math.abs(Q)-Math.abs(ee));ee+=P}}if(U==null||X==null||ee==null||ae==null)return null;var W=er(er({},_),{},{stackedBarStart:N,x:U,y:X,width:ee,height:ae,value:m?z:z[1],payload:_,background:F,tooltipPosition:{x:U+ee/2,y:X+ae/2},parentViewBox:A},w&&w[T]&&w[T].props);return W}).filter(Boolean)}function oY(e){var t=Yt(e,nY),r=Ft();return y.createElement(a5,{id:t.id,type:"bar"},n=>y.createElement(y.Fragment,null,y.createElement(r5,{legendPayload:KH(t)}),y.createElement(t5,{fn:WH,args:t}),y.createElement(o5,{type:"bar",id:n,data:void 0,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,stackId:YD(t.stackId),hide:t.hide,barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize,isPanorama:r}),y.createElement(Xr,{zIndex:t.zIndex},y.createElement(aY,Xn({},t,{id:n})))))}var Ju=y.memo(oY);Ju.displayName="Bar";function WS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function lu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?WS(Object(r),!0).forEach(function(n){lY(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):WS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lY(e,t,r){return(t=sY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sY(e){var t=cY(e,"string");return typeof t=="symbol"?t:t+""}function cY(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var uY=(e,t)=>t,dY=(e,t,r)=>r,fY=(e,t,r,n)=>n,pY=(e,t,r,n,o)=>o,Cs=H([Xd,pY],(e,t)=>e.filter(r=>r.type==="bar").find(r=>r.id===t)),hY=H([Cs],e=>e?.maxBarSize),mY=(e,t,r,n,o,l)=>l,VS=(e,t,r)=>{var n=r??e;if(!rt(n))return an(n,t,0)},gY=H([ze,Xd,uY,dY,fY],(e,t,r,n,o)=>t.filter(l=>e==="horizontal"?l.xAxisId===r:l.yAxisId===n).filter(l=>l.isPanorama===o).filter(l=>l.hide===!1).filter(l=>l.type==="bar")),vY=(e,t,r,n)=>{var o=ze(e);return o==="horizontal"?Ug(e,"yAxis",r,n):Ug(e,"xAxis",t,n)},xY=(e,t,r)=>{var n=ze(e);return n==="horizontal"?Fj(e,"xAxis",t):Fj(e,"yAxis",r)},yY=(e,t,r)=>{var n={},o=e.filter(Kd),l=e.filter(h=>h.stackId==null),u=o.reduce((h,m)=>(h[m.stackId]||(h[m.stackId]=[]),h[m.stackId].push(m),h),n),f=Object.entries(u).map(h=>{var[m,v]=h,b=v.map(A=>A.dataKey),w=VS(t,r,v[0].barSize);return{stackId:m,dataKeys:b,barSize:w}}),p=l.map(h=>{var m=[h.dataKey].filter(b=>b!=null),v=VS(t,r,h.barSize);return{stackId:void 0,dataKeys:m,barSize:v}});return[...f,...p]},bY=H([gY,nB,xY],yY),wY=(e,t,r,n,o)=>{var l,u,f=Cs(e,t,r,n,o);if(f!=null){var p=ze(e),h=sk(e),{maxBarSize:m}=f,v=rt(m)?h:m,b,w;return p==="horizontal"?(b=_a(e,"xAxis",t,n),w=Ma(e,"xAxis",t,n)):(b=_a(e,"yAxis",r,n),w=Ma(e,"yAxis",r,n)),(l=(u=yo(b,w,!0))!==null&&u!==void 0?u:v)!==null&&l!==void 0?l:0}},f5=(e,t,r,n)=>{var o=ze(e),l,u;return o==="horizontal"?(l=_a(e,"xAxis",t,n),u=Ma(e,"xAxis",t,n)):(l=_a(e,"yAxis",r,n),u=Ma(e,"yAxis",r,n)),yo(l,u)};function jY(e,t,r,n,o){var l=n.length;if(!(l<1)){var u=an(e,r,0,!0),f,p=[];if(ht(n[0].barSize)){var h=!1,m=r/l,v=n.reduce((E,C)=>E+(C.barSize||0),0);v+=(l-1)*u,v>=r&&(v-=(l-1)*u,u=0),v>=r&&m>0&&(h=!0,m*=.9,v=l*m);var b=(r-v)/2>>0,w={offset:b-u,size:0};f=n.reduce((E,C)=>{var N,_={stackId:C.stackId,dataKeys:C.dataKeys,position:{offset:w.offset+w.size+u,size:h?m:(N=C.barSize)!==null&&N!==void 0?N:0}},T=[...E,_];return w=T[T.length-1].position,T},p)}else{var A=an(t,r,0,!0);r-2*A-(l-1)*u<=0&&(u=0);var j=(r-2*A-(l-1)*u)/l;j>1&&(j>>=0);var S=ht(o)?Math.min(j,o):j;f=n.reduce((E,C,N)=>[...E,{stackId:C.stackId,dataKeys:C.dataKeys,position:{offset:A+(j+u)*N+(j-S)/2,size:S}}],p)}return f}}var SY=(e,t,r,n,o,l,u)=>{var f=rt(u)?t:u,p=jY(r,n,o!==l?o:l,e,f);return o!==l&&p!=null&&(p=p.map(h=>lu(lu({},h),{},{position:lu(lu({},h.position),{},{offset:h.position.offset-o/2})}))),p},AY=H([bY,sk,rB,ck,wY,f5,hY],SY),OY=(e,t,r,n)=>_a(e,"xAxis",t,n),EY=(e,t,r,n)=>_a(e,"yAxis",r,n),kY=(e,t,r,n)=>Ma(e,"xAxis",t,n),NY=(e,t,r,n)=>Ma(e,"yAxis",r,n),CY=H([AY,Cs],(e,t)=>{if(!(e==null||t==null)){var r=e.find(n=>n.stackId===t.stackId&&t.dataKey!=null&&n.dataKeys.includes(t.dataKey));if(r!=null)return r.position}}),TY=(e,t)=>{var r=gv(t);if(!(!e||r==null||t==null)){var{stackId:n}=t;if(n!=null){var o=e[n];if(o){var{stackedData:l}=o;if(l)return l.find(u=>u.key===r)}}}},MY=H([vY,Cs],TY),_Y=H([Lt,z0,OY,EY,kY,NY,CY,ze,qd,f5,MY,Cs,mY],(e,t,r,n,o,l,u,f,p,h,m,v,b)=>{var{chartData:w,dataStartIndex:A,dataEndIndex:j}=p;if(!(v==null||u==null||t==null||f!=="horizontal"&&f!=="vertical"||r==null||n==null||o==null||l==null||h==null)){var{data:S}=v,E;if(S!=null&&S.length>0?E=S:E=w?.slice(A,j+1),E!=null)return iY({layout:f,barSettings:v,pos:u,parentViewBox:t,bandSize:h,xAxis:r,yAxis:n,xAxisTicks:o,yAxisTicks:l,stackedData:m,displayedData:E,offset:e,cells:b,dataStartIndex:A})}}),PY=e=>{var{chartData:t}=e,r=at(),n=Ft();return y.useEffect(()=>n?()=>{}:(r(cS(t)),()=>{r(cS(void 0))}),[t,r,n]),null},XS={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},p5=hr({name:"brush",initialState:XS,reducers:{setBrushSettings(e,t){return t.payload==null?XS:t.payload}}}),{setBrushSettings:eV}=p5.actions,DY=p5.reducer;function zY(e,t,r){return(t=RY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function RY(e){var t=LY(e,"string");return typeof t=="symbol"?t:t+""}function LY(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}class Iv{static create(t){return new Iv(t)}constructor(t){this.scale=t}get domain(){return this.scale.domain}get range(){return this.scale.range}get rangeMin(){return this.range()[0]}get rangeMax(){return this.range()[1]}get bandwidth(){return this.scale.bandwidth}apply(t){var{bandAware:r,position:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t!==void 0){if(n)switch(n){case"start":return this.scale(t);case"middle":{var o=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+o}case"end":{var l=this.bandwidth?this.bandwidth():0;return this.scale(t)+l}default:return this.scale(t)}if(r){var u=this.bandwidth?this.bandwidth()/2:0;return this.scale(t)+u}return this.scale(t)}}isInRange(t){var r=this.range(),n=r[0],o=r[r.length-1];return n<=o?t>=n&&t<=o:t>=o&&t<=n}}zY(Iv,"EPS",1e-4);function BY(e){return(e%180+180)%180}var IY=function(t){var{width:r,height:n}=t,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,l=BY(o),u=l*Math.PI/180,f=Math.atan(n/r),p=u>f&&u<Math.PI-f?n/Math.sin(u):r/Math.cos(u);return Math.abs(p)},qY={dots:[],areas:[],lines:[]},h5=hr({name:"referenceElements",initialState:qY,reducers:{addDot:(e,t)=>{e.dots.push(t.payload)},removeDot:(e,t)=>{var r=qn(e).dots.findIndex(n=>n===t.payload);r!==-1&&e.dots.splice(r,1)},addArea:(e,t)=>{e.areas.push(t.payload)},removeArea:(e,t)=>{var r=qn(e).areas.findIndex(n=>n===t.payload);r!==-1&&e.areas.splice(r,1)},addLine:(e,t)=>{e.lines.push(t.payload)},removeLine:(e,t)=>{var r=qn(e).lines.findIndex(n=>n===t.payload);r!==-1&&e.lines.splice(r,1)}}}),{addDot:tV,removeDot:rV,addArea:nV,removeArea:aV,addLine:iV,removeLine:oV}=h5.actions,$Y=h5.reducer,UY=y.createContext(void 0),HY=e=>{var{children:t}=e,[r]=y.useState("".concat(Ql("recharts"),"-clip")),n=Lv();if(n==null)return null;var{x:o,y:l,width:u,height:f}=n;return y.createElement(UY.Provider,{value:r},y.createElement("defs",null,y.createElement("clipPath",{id:r},y.createElement("rect",{x:o,y:l,height:f,width:u}))),t)};function Ao(e,t){for(var r in e)if({}.hasOwnProperty.call(e,r)&&(!{}.hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if({}.hasOwnProperty.call(t,n)&&!{}.hasOwnProperty.call(e,n))return!1;return!0}function m5(e,t){if(t<1)return[];if(t===1)return e;for(var r=[],n=0;n<e.length;n+=t)r.push(e[n]);return r}function YY(e,t,r){var n={width:e.width+t.width,height:e.height+t.height};return IY(n,r)}function GY(e,t,r){var n=r==="width",{x:o,y:l,width:u,height:f}=e;return t===1?{start:n?o:l,end:n?o+u:l+f}:{start:n?o+u:l+f,end:n?o:l}}function ed(e,t,r,n,o){if(e*t<e*n||e*t>e*o)return!1;var l=r();return e*(t-e*l/2-n)>=0&&e*(t+e*l/2-o)<=0}function KY(e,t){return m5(e,t+1)}function WY(e,t,r,n,o){for(var l=(n||[]).slice(),{start:u,end:f}=t,p=0,h=1,m=u,v=function(){var A=n?.[p];if(A===void 0)return{v:m5(n,h)};var j=p,S,E=()=>(S===void 0&&(S=r(A,j)),S),C=A.coordinate,N=p===0||ed(e,C,E,m,f);N||(p=0,m=u,h+=1),N&&(m=C+e*(E()/2+o),p+=h)},b;h<=l.length;)if(b=v(),b)return b.v;return[]}function FS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Vt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?FS(Object(r),!0).forEach(function(n){VY(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):FS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function VY(e,t,r){return(t=XY(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function XY(e){var t=FY(e,"string");return typeof t=="symbol"?t:t+""}function FY(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ZY(e,t,r,n,o){for(var l=(n||[]).slice(),u=l.length,{start:f}=t,{end:p}=t,h=function(b){var w=l[b],A,j=()=>(A===void 0&&(A=r(w,b)),A);if(b===u-1){var S=e*(w.coordinate+e*j()/2-p);l[b]=w=Vt(Vt({},w),{},{tickCoord:S>0?w.coordinate-S*e:w.coordinate})}else l[b]=w=Vt(Vt({},w),{},{tickCoord:w.coordinate});if(w.tickCoord!=null){var E=ed(e,w.tickCoord,j,f,p);E&&(p=w.tickCoord-e*(j()/2+o),l[b]=Vt(Vt({},w),{},{isShow:!0}))}},m=u-1;m>=0;m--)h(m);return l}function QY(e,t,r,n,o,l){var u=(n||[]).slice(),f=u.length,{start:p,end:h}=t;if(l){var m=n[f-1],v=r(m,f-1),b=e*(m.coordinate+e*v/2-h);if(u[f-1]=m=Vt(Vt({},m),{},{tickCoord:b>0?m.coordinate-b*e:m.coordinate}),m.tickCoord!=null){var w=ed(e,m.tickCoord,()=>v,p,h);w&&(h=m.tickCoord-e*(v/2+o),u[f-1]=Vt(Vt({},m),{},{isShow:!0}))}}for(var A=l?f-1:f,j=function(C){var N=u[C],_,T=()=>(_===void 0&&(_=r(N,C)),_);if(C===0){var z=e*(N.coordinate-e*T()/2-p);u[C]=N=Vt(Vt({},N),{},{tickCoord:z<0?N.coordinate-z*e:N.coordinate})}else u[C]=N=Vt(Vt({},N),{},{tickCoord:N.coordinate});if(N.tickCoord!=null){var U=ed(e,N.tickCoord,T,p,h);U&&(p=N.tickCoord+e*(T()/2+o),u[C]=Vt(Vt({},N),{},{isShow:!0}))}},S=0;S<A;S++)j(S);return u}function qv(e,t,r){var{tick:n,ticks:o,viewBox:l,minTickGap:u,orientation:f,interval:p,tickFormatter:h,unit:m,angle:v}=e;if(!o||!o.length||!n)return[];if(ue(p)||wi.isSsr){var b;return(b=KY(o,ue(p)?p:0))!==null&&b!==void 0?b:[]}var w=[],A=f==="top"||f==="bottom"?"width":"height",j=m&&A==="width"?Xl(m,{fontSize:t,letterSpacing:r}):{width:0,height:0},S=(N,_)=>{var T=typeof h=="function"?h(N.value,_):N.value;return A==="width"?YY(Xl(T,{fontSize:t,letterSpacing:r}),j,v):Xl(T,{fontSize:t,letterSpacing:r})[A]},E=o.length>=2?fr(o[1].coordinate-o[0].coordinate):1,C=GY(l,E,A);return p==="equidistantPreserveStart"?WY(E,C,S,o,u):(p==="preserveStart"||p==="preserveStartEnd"?w=QY(E,C,S,o,u,p==="preserveStartEnd"):w=ZY(E,C,S,o,u),w.filter(N=>N.isShow))}var JY=e=>{var{ticks:t,label:r,labelGapWithTick:n=5,tickSize:o=0,tickMargin:l=0}=e,u=0;if(t){Array.from(t).forEach(m=>{if(m){var v=m.getBoundingClientRect();v.width>u&&(u=v.width)}});var f=r?r.getBoundingClientRect().width:0,p=o+l,h=u+p+f+(r?n:0);return Math.round(h)}return 0},eG=["axisLine","width","height","className","hide","ticks","axisType"],tG=["viewBox"],rG=["viewBox"];function Qg(e,t){if(e==null)return{};var r,n,o=nG(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function nG(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function yi(){return yi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},yi.apply(null,arguments)}function ZS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function vt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ZS(Object(r),!0).forEach(function(n){aG(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ZS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function aG(e,t,r){return(t=iG(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function iG(e){var t=oG(e,"string");return typeof t=="symbol"?t:t+""}function oG(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var $v={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd",zIndex:zt.axis};function lG(e){var{x:t,y:r,width:n,height:o,orientation:l,mirror:u,axisLine:f,otherSvgProps:p}=e;if(!f)return null;var h=vt(vt(vt({},p),rn(f)),{},{fill:"none"});if(l==="top"||l==="bottom"){var m=+(l==="top"&&!u||l==="bottom"&&u);h=vt(vt({},h),{},{x1:t,y1:r+m*o,x2:t+n,y2:r+m*o})}else{var v=+(l==="left"&&!u||l==="right"&&u);h=vt(vt({},h),{},{x1:t+v*n,y1:r,x2:t+v*n,y2:r+o})}return y.createElement("line",yi({},h,{className:qe("recharts-cartesian-axis-line",xo(f,"className"))}))}function sG(e,t,r,n,o,l,u,f,p){var h,m,v,b,w,A,j=f?-1:1,S=e.tickSize||u,E=ue(e.tickCoord)?e.tickCoord:e.coordinate;switch(l){case"top":h=m=e.coordinate,b=r+ +!f*o,v=b-j*S,A=v-j*p,w=E;break;case"left":v=b=e.coordinate,m=t+ +!f*n,h=m-j*S,w=h-j*p,A=E;break;case"right":v=b=e.coordinate,m=t+ +f*n,h=m+j*S,w=h+j*p,A=E;break;default:h=m=e.coordinate,b=r+ +f*o,v=b+j*S,A=v+j*p,w=E;break}return{line:{x1:h,y1:v,x2:m,y2:b},tick:{x:w,y:A}}}function cG(e,t){switch(e){case"left":return t?"start":"end";case"right":return t?"end":"start";default:return"middle"}}function uG(e,t){switch(e){case"left":case"right":return"middle";case"top":return t?"start":"end";default:return t?"end":"start"}}function dG(e){var{option:t,tickProps:r,value:n}=e,o,l=qe(r.className,"recharts-cartesian-axis-tick-value");if(y.isValidElement(t))o=y.cloneElement(t,vt(vt({},r),{},{className:l}));else if(typeof t=="function")o=t(vt(vt({},r),{},{className:l}));else{var u="recharts-cartesian-axis-tick-value";typeof t!="boolean"&&(u=qe(u,t?.className)),o=y.createElement(zv,yi({},r,{className:u}),n)}return o}var fG=y.forwardRef((e,t)=>{var{ticks:r=[],tick:n,tickLine:o,stroke:l,tickFormatter:u,unit:f,padding:p,tickTextProps:h,orientation:m,mirror:v,x:b,y:w,width:A,height:j,tickSize:S,tickMargin:E,fontSize:C,letterSpacing:N,getTicksConfig:_,events:T,axisType:z}=e,U=qv(vt(vt({},_),{},{ticks:r}),C,N),X=cG(m,v),ee=uG(m,v),ae=rn(_),F=ps(n),Q={};typeof o=="object"&&(Q=o);var pe=vt(vt({},ae),{},{fill:"none"},Q),me=U.map(G=>vt({entry:G},sG(G,b,w,A,j,m,S,v,E))),ye=me.map(G=>{var{entry:re,line:ie}=G;return y.createElement(Yr,{className:"recharts-cartesian-axis-tick",key:"tick-".concat(re.value,"-").concat(re.coordinate,"-").concat(re.tickCoord)},o&&y.createElement("line",yi({},pe,ie,{className:qe("recharts-cartesian-axis-tick-line",xo(o,"className"))})))}),q=me.map((G,re)=>{var{entry:ie,tick:P}=G,W=vt(vt(vt(vt({textAnchor:X,verticalAnchor:ee},ae),{},{stroke:"none",fill:l},F),P),{},{index:re,payload:ie,visibleTicksCount:U.length,tickFormatter:u,padding:p},h);return y.createElement(Yr,yi({className:"recharts-cartesian-axis-tick-label",key:"tick-label-".concat(ie.value,"-").concat(ie.coordinate,"-").concat(ie.tickCoord)},xd(T,ie,re)),n&&y.createElement(dG,{option:n,tickProps:W,value:"".concat(typeof u=="function"?u(ie.value,re):ie.value).concat(f||"")}))});return y.createElement("g",{className:"recharts-cartesian-axis-ticks recharts-".concat(z,"-ticks")},q.length>0&&y.createElement(Xr,{zIndex:zt.label},y.createElement("g",{className:"recharts-cartesian-axis-tick-labels recharts-".concat(z,"-tick-labels"),ref:t},q)),ye.length>0&&y.createElement("g",{className:"recharts-cartesian-axis-tick-lines recharts-".concat(z,"-tick-lines")},ye))}),pG=y.forwardRef((e,t)=>{var{axisLine:r,width:n,height:o,className:l,hide:u,ticks:f,axisType:p}=e,h=Qg(e,eG),[m,v]=y.useState(""),[b,w]=y.useState(""),A=y.useRef(null);y.useImperativeHandle(t,()=>({getCalculatedWidth:()=>{var S;return JY({ticks:A.current,label:(S=e.labelRef)===null||S===void 0?void 0:S.current,labelGapWithTick:5,tickSize:e.tickSize,tickMargin:e.tickMargin})}}));var j=y.useCallback(S=>{if(S){var E=S.getElementsByClassName("recharts-cartesian-axis-tick-value");A.current=E;var C=E[0];if(C){var N=window.getComputedStyle(C),_=N.fontSize,T=N.letterSpacing;(_!==m||T!==b)&&(v(_),w(T))}}},[m,b]);return u||n!=null&&n<=0||o!=null&&o<=0?null:y.createElement(Xr,{zIndex:e.zIndex},y.createElement(Yr,{className:qe("recharts-cartesian-axis",l)},y.createElement(lG,{x:e.x,y:e.y,width:n,height:o,orientation:e.orientation,mirror:e.mirror,axisLine:r,otherSvgProps:rn(e)}),y.createElement(fG,{ref:j,axisType:p,events:h,fontSize:m,getTicksConfig:e,height:e.height,letterSpacing:b,mirror:e.mirror,orientation:e.orientation,padding:e.padding,stroke:e.stroke,tick:e.tick,tickFormatter:e.tickFormatter,tickLine:e.tickLine,tickMargin:e.tickMargin,tickSize:e.tickSize,tickTextProps:e.tickTextProps,ticks:f,unit:e.unit,width:e.width,x:e.x,y:e.y}),y.createElement(K$,{x:e.x,y:e.y,width:e.width,height:e.height,lowerWidth:e.width,upperWidth:e.width},y.createElement(rU,{label:e.label,labelRef:e.labelRef}),e.children)))}),hG=y.memo(pG,(e,t)=>{var{viewBox:r}=e,n=Qg(e,tG),{viewBox:o}=t,l=Qg(t,rG);return Ao(r,o)&&Ao(n,l)}),Uv=y.forwardRef((e,t)=>{var r=Yt(e,$v);return y.createElement(hG,yi({},r,{ref:t}))});Uv.displayName="CartesianAxis";var mG=["x1","y1","x2","y2","key"],gG=["offset"],vG=["xAxisId","yAxisId"],xG=["xAxisId","yAxisId"];function QS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Xt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?QS(Object(r),!0).forEach(function(n){yG(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):QS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function yG(e,t,r){return(t=bG(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bG(e){var t=wG(e,"string");return typeof t=="symbol"?t:t+""}function wG(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ci(){return ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ci.apply(null,arguments)}function td(e,t){if(e==null)return{};var r,n,o=jG(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function jG(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var SG=e=>{var{fill:t}=e;if(!t||t==="none")return null;var{fillOpacity:r,x:n,y:o,width:l,height:u,ry:f}=e;return y.createElement("rect",{x:n,y:o,ry:f,width:l,height:u,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function g5(e){var{option:t,lineItemProps:r}=e,n;if(y.isValidElement(t))n=y.cloneElement(t,r);else if(typeof t=="function")n=t(r);else{var o,{x1:l,y1:u,x2:f,y2:p,key:h}=r,m=td(r,mG),v=(o=rn(m))!==null&&o!==void 0?o:{},{offset:b}=v,w=td(v,gG);n=y.createElement("line",ci({},w,{x1:l,y1:u,x2:f,y2:p,fill:"none",key:h}))}return n}function AG(e){var{x:t,width:r,horizontal:n=!0,horizontalPoints:o}=e;if(!n||!o||!o.length)return null;var{xAxisId:l,yAxisId:u}=e,f=td(e,vG),p=o.map((h,m)=>{var v=Xt(Xt({},f),{},{x1:t,y1:h,x2:t+r,y2:h,key:"line-".concat(m),index:m});return y.createElement(g5,{key:"line-".concat(m),option:n,lineItemProps:v})});return y.createElement("g",{className:"recharts-cartesian-grid-horizontal"},p)}function OG(e){var{y:t,height:r,vertical:n=!0,verticalPoints:o}=e;if(!n||!o||!o.length)return null;var{xAxisId:l,yAxisId:u}=e,f=td(e,xG),p=o.map((h,m)=>{var v=Xt(Xt({},f),{},{x1:h,y1:t,x2:h,y2:t+r,key:"line-".concat(m),index:m});return y.createElement(g5,{option:n,lineItemProps:v,key:"line-".concat(m)})});return y.createElement("g",{className:"recharts-cartesian-grid-vertical"},p)}function EG(e){var{horizontalFill:t,fillOpacity:r,x:n,y:o,width:l,height:u,horizontalPoints:f,horizontal:p=!0}=e;if(!p||!t||!t.length||f==null)return null;var h=f.map(v=>Math.round(v+o-o)).sort((v,b)=>v-b);o!==h[0]&&h.unshift(0);var m=h.map((v,b)=>{var w=!h[b+1],A=w?o+u-v:h[b+1]-v;if(A<=0)return null;var j=b%t.length;return y.createElement("rect",{key:"react-".concat(b),y:v,x:n,height:A,width:l,stroke:"none",fill:t[j],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return y.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},m)}function kG(e){var{vertical:t=!0,verticalFill:r,fillOpacity:n,x:o,y:l,width:u,height:f,verticalPoints:p}=e;if(!t||!r||!r.length)return null;var h=p.map(v=>Math.round(v+o-o)).sort((v,b)=>v-b);o!==h[0]&&h.unshift(0);var m=h.map((v,b)=>{var w=!h[b+1],A=w?o+u-v:h[b+1]-v;if(A<=0)return null;var j=b%r.length;return y.createElement("rect",{key:"react-".concat(b),x:v,y:l,width:A,height:f,stroke:"none",fill:r[j],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return y.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},m)}var NG=(e,t)=>{var{xAxis:r,width:n,height:o,offset:l}=e;return KO(qv(Xt(Xt(Xt({},$v),r),{},{ticks:WO(r),viewBox:{x:0,y:0,width:n,height:o}})),l.left,l.left+l.width,t)},CG=(e,t)=>{var{yAxis:r,width:n,height:o,offset:l}=e;return KO(qv(Xt(Xt(Xt({},$v),r),{},{ticks:WO(r),viewBox:{x:0,y:0,width:n,height:o}})),l.top,l.top+l.height,t)},TG={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0,syncWithTicks:!1,zIndex:zt.grid};function rd(e){var t=L0(),r=B0(),n=JO(),o=Xt(Xt({},Yt(e,TG)),{},{x:ue(e.x)?e.x:n.left,y:ue(e.y)?e.y:n.top,width:ue(e.width)?e.width:n.width,height:ue(e.height)?e.height:n.height}),{xAxisId:l,yAxisId:u,x:f,y:p,width:h,height:m,syncWithTicks:v,horizontalValues:b,verticalValues:w}=o,A=Ft(),j=de(ee=>Zj(ee,"xAxis",l,A)),S=de(ee=>Zj(ee,"yAxis",u,A));if(!vn(h)||!vn(m)||!ue(f)||!ue(p))return null;var E=o.verticalCoordinatesGenerator||NG,C=o.horizontalCoordinatesGenerator||CG,{horizontalPoints:N,verticalPoints:_}=o;if((!N||!N.length)&&typeof C=="function"){var T=b&&b.length,z=C({yAxis:S?Xt(Xt({},S),{},{ticks:T?b:S.ticks}):void 0,width:t??h,height:r??m,offset:n},T?!0:v);Nu(Array.isArray(z),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof z,"]")),Array.isArray(z)&&(N=z)}if((!_||!_.length)&&typeof E=="function"){var U=w&&w.length,X=E({xAxis:j?Xt(Xt({},j),{},{ticks:U?w:j.ticks}):void 0,width:t??h,height:r??m,offset:n},U?!0:v);Nu(Array.isArray(X),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof X,"]")),Array.isArray(X)&&(_=X)}return y.createElement(Xr,{zIndex:o.zIndex},y.createElement("g",{className:"recharts-cartesian-grid"},y.createElement(SG,{fill:o.fill,fillOpacity:o.fillOpacity,x:o.x,y:o.y,width:o.width,height:o.height,ry:o.ry}),y.createElement(EG,ci({},o,{horizontalPoints:N})),y.createElement(kG,ci({},o,{verticalPoints:_})),y.createElement(AG,ci({},o,{offset:n,horizontalPoints:N,xAxis:j,yAxis:S})),y.createElement(OG,ci({},o,{offset:n,verticalPoints:_,xAxis:j,yAxis:S}))))}rd.displayName="CartesianGrid";var v5=(e,t,r,n)=>_a(e,"xAxis",t,n),x5=(e,t,r,n)=>Ma(e,"xAxis",t,n),y5=(e,t,r,n)=>_a(e,"yAxis",r,n),b5=(e,t,r,n)=>Ma(e,"yAxis",r,n),MG=H([ze,v5,y5,x5,b5],(e,t,r,n,o)=>Pa(e,"xAxis")?yo(t,n,!1):yo(r,o,!1)),_G=(e,t,r,n,o)=>o;function PG(e){return e.type==="line"}var DG=H([Xd,_G],(e,t)=>e.filter(PG).find(r=>r.id===t)),zG=H([ze,v5,y5,x5,b5,DG,MG,qd],(e,t,r,n,o,l,u,f)=>{var{chartData:p,dataStartIndex:h,dataEndIndex:m}=f;if(!(l==null||t==null||r==null||n==null||o==null||n.length===0||o.length===0||u==null)){var{dataKey:v,data:b}=l,w;if(b!=null&&b.length>0?w=b:w=p?.slice(h,m+1),w!=null)return rK({layout:e,xAxis:t,yAxis:r,xAxisTicks:n,yAxisTicks:o,dataKey:v,bandSize:u,displayedData:w})}});function RG(e){var t=ps(e),r=3,n=2;if(t!=null){var{r:o,strokeWidth:l}=t,u=Number(o),f=Number(l);return(Number.isNaN(u)||u<0)&&(u=r),(Number.isNaN(f)||f<0)&&(f=n),{r:u,strokeWidth:f}}return{r,strokeWidth:n}}var LG=["id"],BG=["type","layout","connectNulls","needClip","shape"],IG=["activeDot","animateNewValues","animationBegin","animationDuration","animationEasing","connectNulls","dot","hide","isAnimationActive","label","legendType","xAxisId","yAxisId","id"];function cs(){return cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},cs.apply(null,arguments)}function JS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function pn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?JS(Object(r),!0).forEach(function(n){qG(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):JS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function qG(e,t,r){return(t=$G(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $G(e){var t=UG(e,"string");return typeof t=="symbol"?t:t+""}function UG(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hv(e,t){if(e==null)return{};var r,n,o=HG(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function HG(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var YG=e=>{var{dataKey:t,name:r,stroke:n,legendType:o,hide:l}=e;return[{inactive:l,dataKey:t,type:o,color:n,value:Od(r,t),payload:e}]};function GG(e){var{dataKey:t,data:r,stroke:n,strokeWidth:o,fill:l,name:u,hide:f,unit:p}=e;return{dataDefinedOnItem:r,positions:void 0,settings:{stroke:n,strokeWidth:o,fill:l,dataKey:t,nameKey:void 0,name:Od(u,t),hide:f,type:e.tooltipType,color:e.stroke,unit:p}}}var w5=(e,t)=>"".concat(t,"px ").concat(e-t,"px");function KG(e,t){for(var r=e.length%2!==0?[...e,0]:e,n=[],o=0;o<t;++o)n=[...n,...r];return n}var WG=(e,t,r)=>{var n=r.reduce((v,b)=>v+b);if(!n)return w5(t,e);for(var o=Math.floor(e/n),l=e%n,u=t-e,f=[],p=0,h=0;p<r.length;h+=r[p],++p)if(h+r[p]>l){f=[...r.slice(0,p),l-h];break}var m=f.length%2===0?[0,u]:[u];return[...KG(r,o),...f,...m].map(v=>"".concat(v,"px")).join(", ")};function VG(e){var{clipPathId:t,points:r,props:n}=e,{dot:o,dataKey:l,needClip:u}=n,{id:f}=n,p=Hv(n,LG),h=rn(p);return y.createElement(tH,{points:r,dot:o,className:"recharts-line-dots",dotClassName:"recharts-line-dot",dataKey:l,baseProps:h,needClip:u,clipPathId:t})}function XG(e){var{showLabels:t,children:r,points:n}=e,o=y.useMemo(()=>n?.map(l=>{var u,f,p={x:(u=l.x)!==null&&u!==void 0?u:0,y:(f=l.y)!==null&&f!==void 0?f:0,width:0,lowerWidth:0,upperWidth:0,height:0};return pn(pn({},p),{},{value:l.value,payload:l.payload,viewBox:p,parentViewBox:void 0,fill:void 0})}),[n]);return y.createElement(Y3,{value:t?o:void 0},r)}function eA(e){var{clipPathId:t,pathRef:r,points:n,strokeDasharray:o,props:l}=e,{type:u,layout:f,connectNulls:p,needClip:h,shape:m}=l,v=Hv(l,BG),b=pn(pn({},rr(v)),{},{fill:"none",className:"recharts-line-curve",clipPath:h?"url(#clipPath-".concat(t,")"):void 0,points:n,type:u,layout:f,connectNulls:p,strokeDasharray:o??l.strokeDasharray});return y.createElement(y.Fragment,null,n?.length>1&&y.createElement(Z3,cs({shapeType:"curve",option:m},b,{pathRef:r})),y.createElement(VG,{points:n,clipPathId:t,props:l}))}function FG(e){try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch{return 0}}function ZG(e){var{clipPathId:t,props:r,pathRef:n,previousPointsRef:o,longestAnimatedLengthRef:l}=e,{points:u,strokeDasharray:f,isAnimationActive:p,animationBegin:h,animationDuration:m,animationEasing:v,animateNewValues:b,width:w,height:A,onAnimationEnd:j,onAnimationStart:S}=r,E=o.current,C=Pd(r,"recharts-line-"),[N,_]=y.useState(!1),T=!N,z=y.useCallback(()=>{typeof j=="function"&&j(),_(!1)},[j]),U=y.useCallback(()=>{typeof S=="function"&&S(),_(!0)},[S]),X=FG(n.current),ee=l.current;return y.createElement(XG,{points:u,showLabels:T},r.children,y.createElement(_d,{animationId:C,begin:h,duration:m,isActive:p,easing:v,onAnimationEnd:z,onAnimationStart:U,key:C},ae=>{var F=lt(ee,X+ee,ae),Q=Math.min(F,X),pe;if(p)if(f){var me="".concat(f).split(/[,\s]+/gim).map(G=>parseFloat(G));pe=WG(Q,X,me)}else pe=w5(X,Q);else pe=f==null?void 0:String(f);if(E){var ye=E.length/u.length,q=ae===1?u:u.map((G,re)=>{var ie=Math.floor(re*ye);if(E[ie]){var P=E[ie];return pn(pn({},G),{},{x:lt(P.x,G.x,ae),y:lt(P.y,G.y,ae)})}return b?pn(pn({},G),{},{x:lt(w*2,G.x,ae),y:lt(A/2,G.y,ae)}):pn(pn({},G),{},{x:G.x,y:G.y})});return o.current=q,y.createElement(eA,{props:r,points:q,clipPathId:t,pathRef:n,strokeDasharray:pe})}return ae>0&&X>0&&(o.current=u,l.current=Q),y.createElement(eA,{props:r,points:u,clipPathId:t,pathRef:n,strokeDasharray:pe})}),y.createElement(K3,{label:r.label}))}function QG(e){var{clipPathId:t,props:r}=e,n=y.useRef(null),o=y.useRef(0),l=y.useRef(null);return y.createElement(ZG,{props:r,clipPathId:t,previousPointsRef:n,longestAnimatedLengthRef:o,pathRef:l})}var JG=(e,t)=>{var r,n;return{x:(r=e.x)!==null&&r!==void 0?r:void 0,y:(n=e.y)!==null&&n!==void 0?n:void 0,value:e.value,errorVal:Rt(e.payload,t)}};class eK extends y.Component{render(){var{hide:t,dot:r,points:n,className:o,xAxisId:l,yAxisId:u,top:f,left:p,width:h,height:m,id:v,needClip:b,zIndex:w}=this.props;if(t)return null;var A=qe("recharts-line",o),j=v,{r:S,strokeWidth:E}=RG(r),C=F3(r),N=S*2+E;return y.createElement(Xr,{zIndex:w},y.createElement(Yr,{className:A},b&&y.createElement("defs",null,y.createElement(u5,{clipPathId:j,xAxisId:l,yAxisId:u}),!C&&y.createElement("clipPath",{id:"clipPath-dots-".concat(j)},y.createElement("rect",{x:p-N/2,y:f-N/2,width:h+N,height:m+N}))),y.createElement(c5,{xAxisId:l,yAxisId:u,data:n,dataPointFormatter:JG,errorBarOffset:0},y.createElement(QG,{props:this.props,clipPathId:j}))),y.createElement(yH,{activeDot:this.props.activeDot,points:n,mainColor:this.props.stroke,itemDataKey:this.props.dataKey}))}}var j5={activeDot:!0,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!0,fill:"#fff",hide:!1,isAnimationActive:!wi.isSsr,label:!1,legendType:"line",stroke:"#3182bd",strokeWidth:1,xAxisId:0,yAxisId:0,zIndex:zt.line};function tK(e){var t=Yt(e,j5),{activeDot:r,animateNewValues:n,animationBegin:o,animationDuration:l,animationEasing:u,connectNulls:f,dot:p,hide:h,isAnimationActive:m,label:v,legendType:b,xAxisId:w,yAxisId:A,id:j}=t,S=Hv(t,IG),{needClip:E}=Bv(w,A),C=Lv(),N=xs(),_=Ft(),T=de(ae=>zG(ae,w,A,_,j));if(N!=="horizontal"&&N!=="vertical"||T==null||C==null)return null;var{height:z,width:U,x:X,y:ee}=C;return y.createElement(eK,cs({},S,{id:j,connectNulls:f,dot:p,activeDot:r,animateNewValues:n,animationBegin:o,animationDuration:l,animationEasing:u,isAnimationActive:m,hide:h,label:v,legendType:b,xAxisId:w,yAxisId:A,points:T,layout:N,height:z,width:U,left:X,top:ee,needClip:E}))}function rK(e){var{layout:t,xAxis:r,yAxis:n,xAxisTicks:o,yAxisTicks:l,dataKey:u,bandSize:f,displayedData:p}=e;return p.map((h,m)=>{var v=Rt(h,u);if(t==="horizontal"){var b=j2({axis:r,ticks:o,bandSize:f,entry:h,index:m}),w=rt(v)?null:n.scale(v);return{x:b,y:w,value:v,payload:h}}var A=rt(v)?null:r.scale(v),j=j2({axis:n,ticks:l,bandSize:f,entry:h,index:m});return A==null||j==null?null:{x:A,y:j,value:v,payload:h}}).filter(Boolean)}function nK(e){var t=Yt(e,j5),r=Ft();return y.createElement(a5,{id:t.id,type:"line"},n=>y.createElement(y.Fragment,null,y.createElement(r5,{legendPayload:YG(t)}),y.createElement(t5,{fn:GG,args:t}),y.createElement(o5,{type:"line",id:n,data:t.data,xAxisId:t.xAxisId,yAxisId:t.yAxisId,zAxisId:0,dataKey:t.dataKey,hide:t.hide,isPanorama:r}),y.createElement(tK,cs({},t,{id:n}))))}var S5=y.memo(nK);S5.displayName="Line";var aK=["dangerouslySetInnerHTML","ticks"],iK=["id"],oK=["domain"],lK=["domain"];function Jg(){return Jg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Jg.apply(null,arguments)}function nd(e,t){if(e==null)return{};var r,n,o=sK(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function sK(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function cK(e){var t=at();return y.useLayoutEffect(()=>(t(oH(e)),()=>{t(lH(e))}),[e,t]),null}var uK=e=>{var{xAxisId:t,className:r}=e,n=de(z0),o=Ft(),l="xAxis",u=de(S=>Ro(S,l,t,o)),f=de(S=>Jk(S,l,t,o)),p=de(S=>Xk(S,t)),h=de(S=>eI(S,t)),m=de(S=>vk(S,t));if(p==null||h==null||m==null)return null;var{dangerouslySetInnerHTML:v,ticks:b}=e,w=nd(e,aK),{id:A}=m,j=nd(m,iK);return y.createElement(Uv,Jg({},w,j,{scale:u,x:h.x,y:h.y,width:p.width,height:p.height,className:qe("recharts-".concat(l," ").concat(l),r),viewBox:n,ticks:f,axisType:l}))},dK={allowDataOverflow:Ar.allowDataOverflow,allowDecimals:Ar.allowDecimals,allowDuplicatedCategory:Ar.allowDuplicatedCategory,height:Ar.height,hide:!1,mirror:Ar.mirror,orientation:Ar.orientation,padding:Ar.padding,reversed:Ar.reversed,scale:Ar.scale,tickCount:Ar.tickCount,type:Ar.type,xAxisId:0},fK=e=>{var t,r,n,o,l,u=Yt(e,dK);return y.createElement(y.Fragment,null,y.createElement(cK,{interval:(t=u.interval)!==null&&t!==void 0?t:"preserveEnd",id:u.xAxisId,scale:u.scale,type:u.type,padding:u.padding,allowDataOverflow:u.allowDataOverflow,domain:u.domain,dataKey:u.dataKey,allowDuplicatedCategory:u.allowDuplicatedCategory,allowDecimals:u.allowDecimals,tickCount:u.tickCount,includeHidden:(r=u.includeHidden)!==null&&r!==void 0?r:!1,reversed:u.reversed,ticks:u.ticks,height:u.height,orientation:u.orientation,mirror:u.mirror,hide:u.hide,unit:u.unit,name:u.name,angle:(n=u.angle)!==null&&n!==void 0?n:0,minTickGap:(o=u.minTickGap)!==null&&o!==void 0?o:5,tick:(l=u.tick)!==null&&l!==void 0?l:!0,tickFormatter:u.tickFormatter}),y.createElement(uK,u))},pK=(e,t)=>{var{domain:r}=e,n=nd(e,oK),{domain:o}=t,l=nd(t,lK);return Ao(n,l)?Array.isArray(r)&&r.length===2&&Array.isArray(o)&&o.length===2?r[0]===o[0]&&r[1]===o[1]:Ao({domain:r},{domain:o}):!1},ad=y.memo(fK,pK);ad.displayName="XAxis";var hK=["dangerouslySetInnerHTML","ticks"],mK=["id"],gK=["domain"],vK=["domain"];function e0(){return e0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e0.apply(null,arguments)}function id(e,t){if(e==null)return{};var r,n,o=xK(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function xK(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function yK(e){var t=at();return y.useLayoutEffect(()=>(t(sH(e)),()=>{t(cH(e))}),[e,t]),null}var bK=e=>{var{yAxisId:t,className:r,width:n,label:o}=e,l=y.useRef(null),u=y.useRef(null),f=de(z0),p=Ft(),h=at(),m="yAxis",v=de(T=>Ro(T,m,t,p)),b=de(T=>Fk(T,t)),w=de(T=>rI(T,t)),A=de(T=>Jk(T,m,t,p)),j=de(T=>xk(T,t));if(y.useLayoutEffect(()=>{if(!(n!=="auto"||!b||Rv(o)||y.isValidElement(o)||j==null)){var T=l.current;if(T){var z=T.getCalculatedWidth();Math.round(b.width)!==Math.round(z)&&h(uH({id:t,width:z}))}}},[A,b,h,o,t,n,j]),b==null||w==null||j==null)return null;var{dangerouslySetInnerHTML:S,ticks:E}=e,C=id(e,hK),{id:N}=j,_=id(j,mK);return y.createElement(Uv,e0({},C,_,{ref:l,labelRef:u,scale:v,x:w.x,y:w.y,tickTextProps:n==="auto"?{width:void 0}:{width:n},width:b.width,height:b.height,className:qe("recharts-".concat(m," ").concat(m),r),viewBox:f,ticks:A,axisType:m}))},wK={allowDataOverflow:Or.allowDataOverflow,allowDecimals:Or.allowDecimals,allowDuplicatedCategory:Or.allowDuplicatedCategory,hide:!1,mirror:Or.mirror,orientation:Or.orientation,padding:Or.padding,reversed:Or.reversed,scale:Or.scale,tickCount:Or.tickCount,type:Or.type,width:Or.width,yAxisId:0},jK=e=>{var t,r,n,o,l,u=Yt(e,wK);return y.createElement(y.Fragment,null,y.createElement(yK,{interval:(t=u.interval)!==null&&t!==void 0?t:"preserveEnd",id:u.yAxisId,scale:u.scale,type:u.type,domain:u.domain,allowDataOverflow:u.allowDataOverflow,dataKey:u.dataKey,allowDuplicatedCategory:u.allowDuplicatedCategory,allowDecimals:u.allowDecimals,tickCount:u.tickCount,padding:u.padding,includeHidden:(r=u.includeHidden)!==null&&r!==void 0?r:!1,reversed:u.reversed,ticks:u.ticks,width:u.width,orientation:u.orientation,mirror:u.mirror,hide:u.hide,unit:u.unit,name:u.name,angle:(n=u.angle)!==null&&n!==void 0?n:0,minTickGap:(o=u.minTickGap)!==null&&o!==void 0?o:5,tick:(l=u.tick)!==null&&l!==void 0?l:!0,tickFormatter:u.tickFormatter}),y.createElement(bK,u))},SK=(e,t)=>{var{domain:r}=e,n=id(e,gK),{domain:o}=t,l=id(t,vK);return Ao(n,l)?Array.isArray(r)&&r.length===2&&Array.isArray(o)&&o.length===2?r[0]===o[0]&&r[1]===o[1]:Ao({domain:r},{domain:o}):!1},od=y.memo(jK,SK);od.displayName="YAxis";var Qm={exports:{}},Jm={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tA;function AK(){if(tA)return Jm;tA=1;var e=Oo();function t(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var r=typeof Object.is=="function"?Object.is:t,n=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return Jm.useSyncExternalStoreWithSelector=function(p,h,m,v,b){var w=o(null);if(w.current===null){var A={hasValue:!1,value:null};w.current=A}else A=w.current;w=u(function(){function S(T){if(!E){if(E=!0,C=T,T=v(T),b!==void 0&&A.hasValue){var z=A.value;if(b(z,T))return N=z}return N=T}if(z=N,r(C,T))return z;var U=v(T);return b!==void 0&&b(z,U)?(C=T,z):(C=T,N=U)}var E=!1,C,N,_=m===void 0?null:m;return[function(){return S(h())},_===null?void 0:function(){return S(_())}]},[h,m,v,b]);var j=n(p,w[0],w[1]);return l(function(){A.hasValue=!0,A.value=j},[j]),f(j),j},Jm}var rA;function OK(){return rA||(rA=1,Qm.exports=AK()),Qm.exports}OK();function EK(e){e()}function kK(){let e=null,t=null;return{clear(){e=null,t=null},notify(){EK(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const o=t={callback:r,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!n||e===null||(n=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var nA={notify(){},get:()=>[]};function NK(e,t){let r,n=nA,o=0,l=!1;function u(j){m();const S=n.subscribe(j);let E=!1;return()=>{E||(E=!0,S(),v())}}function f(){n.notify()}function p(){A.onStateChange&&A.onStateChange()}function h(){return l}function m(){o++,r||(r=e.subscribe(p),n=kK())}function v(){o--,r&&o===0&&(r(),r=void 0,n.clear(),n=nA)}function b(){l||(l=!0,m())}function w(){l&&(l=!1,v())}const A={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:p,isSubscribed:h,trySubscribe:b,tryUnsubscribe:w,getListeners:()=>n};return A}var CK=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TK=CK(),MK=()=>typeof navigator<"u"&&navigator.product==="ReactNative",_K=MK(),PK=()=>TK||_K?y.useLayoutEffect:y.useEffect,DK=PK(),zK=Symbol.for("react-redux-context"),RK=typeof globalThis<"u"?globalThis:{};function LK(){if(!y.createContext)return{};const e=RK[zK]??=new Map;let t=e.get(y.createContext);return t||(t=y.createContext(null),e.set(y.createContext,t)),t}var BK=LK();function IK(e){const{children:t,context:r,serverState:n,store:o}=e,l=y.useMemo(()=>{const p=NK(o);return{store:o,subscription:p,getServerState:n?()=>n:void 0}},[o,n]),u=y.useMemo(()=>o.getState(),[o]);DK(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),u!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,u]);const f=r||BK;return y.createElement(f.Provider,{value:l},t)}var qK=IK,$K=(e,t)=>t,Yv=H([$K,ze,mk,Et,g3,ra,pq,Lt],bq),Gv=e=>{var t=e.currentTarget.getBoundingClientRect(),r=t.width/e.currentTarget.offsetWidth,n=t.height/e.currentTarget.offsetHeight;return{chartX:Math.round((e.clientX-t.left)/r),chartY:Math.round((e.clientY-t.top)/n)}},A5=Gr("mouseClick"),O5=gs();O5.startListening({actionCreator:A5,effect:(e,t)=>{var r=e.payload,n=Yv(t.getState(),Gv(r));n?.activeIndex!=null&&t.dispatch(mI({activeIndex:n.activeIndex,activeDataKey:void 0,activeCoordinate:n.activeCoordinate}))}});var t0=Gr("mouseMove"),E5=gs();E5.startListening({actionCreator:t0,effect:(e,t)=>{var r=e.payload,n=t.getState(),o=Ev(n,n.tooltip.settings.shared),l=Yv(n,Gv(r));o==="axis"&&(l?.activeIndex!=null?t.dispatch(l3({activeIndex:l.activeIndex,activeDataKey:void 0,activeCoordinate:l.activeCoordinate})):t.dispatch(o3()))}});var aA={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index",baseValue:void 0},k5=hr({name:"rootProps",initialState:aA,reducers:{updateOptions:(e,t)=>{var r;e.accessibilityLayer=t.payload.accessibilityLayer,e.barCategoryGap=t.payload.barCategoryGap,e.barGap=(r=t.payload.barGap)!==null&&r!==void 0?r:aA.barGap,e.barSize=t.payload.barSize,e.maxBarSize=t.payload.maxBarSize,e.stackOffset=t.payload.stackOffset,e.syncId=t.payload.syncId,e.syncMethod=t.payload.syncMethod,e.className=t.payload.className,e.baseValue=t.payload.baseValue}}}),UK=k5.reducer,{updateOptions:HK}=k5.actions,N5=hr({name:"polarOptions",initialState:null,reducers:{updatePolarOptions:(e,t)=>t.payload}}),{updatePolarOptions:lV}=N5.actions,YK=N5.reducer,C5=Gr("keyDown"),T5=Gr("focus"),Kv=gs();Kv.startListening({actionCreator:C5,effect:(e,t)=>{var r=t.getState(),n=r.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:o}=r.tooltip,l=e.payload;if(!(l!=="ArrowRight"&&l!=="ArrowLeft"&&l!=="Enter")){var u=Number(kv(o,Bo(r))),f=ra(r);if(l==="Enter"){var p=Ku(r,"axis","hover",String(o.index));t.dispatch(Yg({active:!o.active,activeIndex:o.index,activeDataKey:o.dataKey,activeCoordinate:p}));return}var h=oI(r),m=h==="left-to-right"?1:-1,v=l==="ArrowRight"?1:-1,b=u+v*m;if(!(f==null||b>=f.length||b<0)){var w=Ku(r,"axis","hover",String(b));t.dispatch(Yg({active:!0,activeIndex:b.toString(),activeDataKey:void 0,activeCoordinate:w}))}}}}});Kv.startListening({actionCreator:T5,effect:(e,t)=>{var r=t.getState(),n=r.rootProps.accessibilityLayer!==!1;if(n){var{keyboardInteraction:o}=r.tooltip;if(!o.active&&o.index==null){var l="0",u=Ku(r,"axis","hover",String(l));t.dispatch(Yg({activeDataKey:void 0,active:!0,activeIndex:l,activeCoordinate:u}))}}}});var $r=Gr("externalEvent"),M5=gs();M5.startListening({actionCreator:$r,effect:(e,t)=>{if(e.payload.handler!=null){var r=t.getState(),n={activeCoordinate:ZI(r),activeDataKey:b3(r),activeIndex:xi(r),activeLabel:y3(r),activeTooltipIndex:xi(r),isTooltipActive:QI(r)};e.payload.handler(n,e.payload.reactEvent)}}});var GK=H([Lo],e=>e.tooltipItemPayloads),KK=H([GK,ks,(e,t,r)=>t,(e,t,r)=>r],(e,t,r,n)=>{var o=e.find(f=>f.settings.dataKey===n);if(o!=null){var{positions:l}=o;if(l!=null){var u=t(l,r);return u}}}),_5=Gr("touchMove"),P5=gs();P5.startListening({actionCreator:_5,effect:(e,t)=>{var r=e.payload;if(!(r.touches==null||r.touches.length===0)){var n=t.getState(),o=Ev(n,n.tooltip.settings.shared);if(o==="axis"){var l=Yv(n,Gv({clientX:r.touches[0].clientX,clientY:r.touches[0].clientY,currentTarget:r.currentTarget}));l?.activeIndex!=null&&t.dispatch(l3({activeIndex:l.activeIndex,activeDataKey:void 0,activeCoordinate:l.activeCoordinate}))}else if(o==="item"){var u,f=r.touches[0];if(document.elementFromPoint==null)return;var p=document.elementFromPoint(f.clientX,f.clientY);if(!p||!p.getAttribute)return;var h=p.getAttribute(QD),m=(u=p.getAttribute(JD))!==null&&u!==void 0?u:void 0,v=KK(t.getState(),h,m);t.dispatch(i3({activeDataKey:m,activeIndex:h,activeCoordinate:v}))}}}});var WK=bO({brush:DY,cartesianAxis:dH,chartData:Zq,errorBars:MH,graphicalItems:KU,layout:PD,legend:Dz,options:Kq,polarAxis:gU,polarOptions:YK,referenceElements:$Y,rootProps:UK,tooltip:gI,zIndex:Dq}),VK=function(t){return aD({reducer:WK,preloadedState:t,middleware:r=>r({serializableCheck:!1}).concat([O5.middleware,E5.middleware,Kv.middleware,M5.middleware,P5.middleware]),enhancers:r=>{var n=r;return typeof r=="function"&&(n=r()),n.concat(_O({type:"raf"}))},devTools:wi.devToolsEnabled})};function XK(e){var{preloadedState:t,children:r,reduxStoreName:n}=e,o=Ft(),l=y.useRef(null);if(o)return r;l.current==null&&(l.current=VK(t));var u=C0;return y.createElement(qK,{context:u,store:l.current},r)}function FK(e){var{layout:t,margin:r}=e,n=at(),o=Ft();return y.useEffect(()=>{o||(n(TD(t)),n(CD(r)))},[n,o,t,r]),null}function ZK(e){var t=at();return y.useEffect(()=>{t(HK(e))},[t,e]),null}function iA(e){var{zIndex:t,isPanorama:r}=e,n=r?"recharts-zindex-panorama-":"recharts-zindex-",o=n5("".concat(n).concat(t)),l=at();return y.useLayoutEffect(()=>(l(_q({zIndex:t,elementId:o,isPanorama:r})),()=>{l(Pq({zIndex:t,isPanorama:r}))}),[l,t,o,r]),y.createElement("g",{id:o})}function oA(e){var{children:t,isPanorama:r}=e,n=de(jq);if(!n||n.length===0)return t;var o=n.filter(u=>u<0),l=n.filter(u=>u>0);return y.createElement(y.Fragment,null,o.map(u=>y.createElement(iA,{key:u,zIndex:u,isPanorama:r})),t,l.map(u=>y.createElement(iA,{key:u,zIndex:u,isPanorama:r})))}var QK=["children"];function JK(e,t){if(e==null)return{};var r,n,o=eW(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function eW(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function ld(){return ld=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ld.apply(null,arguments)}var tW={width:"100%",height:"100%",display:"block"},rW=y.forwardRef((e,t)=>{var r=L0(),n=B0(),o=rE();if(!vn(r)||!vn(n))return null;var{children:l,otherAttributes:u,title:f,desc:p}=e,h,m;return u!=null&&(typeof u.tabIndex=="number"?h=u.tabIndex:h=o?0:void 0,typeof u.role=="string"?m=u.role:m=o?"application":void 0),y.createElement(y0,ld({},u,{title:f,desc:p,role:m,tabIndex:h,width:r,height:n,style:tW,ref:t}),l)}),nW=e=>{var{children:t}=e,r=de(Cd);if(!r)return null;var{width:n,height:o,y:l,x:u}=r;return y.createElement(y0,{width:n,height:o,x:u,y:l},t)},lA=y.forwardRef((e,t)=>{var{children:r}=e,n=JK(e,QK),o=Ft();return o?y.createElement(nW,null,y.createElement(oA,{isPanorama:!0},r)):y.createElement(rW,ld({ref:t},n),y.createElement(oA,{isPanorama:!1},r))});function aW(){var e=at(),[t,r]=y.useState(null),n=de(ZD);return y.useEffect(()=>{if(t!=null){var o=t.getBoundingClientRect(),l=o.width/t.offsetWidth;ht(l)&&l!==n&&e(_D(l))}},[t,e,n]),r}function sA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function iW(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?sA(Object(r),!0).forEach(function(n){oW(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):sA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function oW(e,t,r){return(t=lW(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lW(e){var t=sW(e,"string");return typeof t=="symbol"?t:t+""}function sW(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},bi.apply(null,arguments)}var cW=()=>(o$(),null);function sd(e){if(typeof e=="number")return e;if(typeof e=="string"){var t=parseFloat(e);if(!Number.isNaN(t))return t}return 0}var uW=y.forwardRef((e,t)=>{var r,n,o=y.useRef(null),[l,u]=y.useState({containerWidth:sd((r=e.style)===null||r===void 0?void 0:r.width),containerHeight:sd((n=e.style)===null||n===void 0?void 0:n.height)}),f=y.useCallback((h,m)=>{u(v=>{var b=Math.round(h),w=Math.round(m);return v.containerWidth===b&&v.containerHeight===w?v:{containerWidth:b,containerHeight:w}})},[]),p=y.useCallback(h=>{if(typeof t=="function"&&t(h),h!=null&&typeof ResizeObserver<"u"){var{width:m,height:v}=h.getBoundingClientRect();f(m,v);var b=A=>{var{width:j,height:S}=A[0].contentRect;f(j,S)},w=new ResizeObserver(b);w.observe(h),o.current=w}},[t,f]);return y.useEffect(()=>()=>{var h=o.current;h?.disconnect()},[f]),y.createElement(y.Fragment,null,y.createElement(Md,{width:l.containerWidth,height:l.containerHeight}),y.createElement("div",bi({ref:p},e)))}),dW=y.forwardRef((e,t)=>{var{width:r,height:n}=e,[o,l]=y.useState({containerWidth:sd(r),containerHeight:sd(n)}),u=y.useCallback((p,h)=>{l(m=>{var v=Math.round(p),b=Math.round(h);return m.containerWidth===v&&m.containerHeight===b?m:{containerWidth:v,containerHeight:b}})},[]),f=y.useCallback(p=>{if(typeof t=="function"&&t(p),p!=null){var{width:h,height:m}=p.getBoundingClientRect();u(h,m)}},[t,u]);return y.createElement(y.Fragment,null,y.createElement(Md,{width:o.containerWidth,height:o.containerHeight}),y.createElement("div",bi({ref:f},e)))}),fW=y.forwardRef((e,t)=>{var{width:r,height:n}=e;return y.createElement(y.Fragment,null,y.createElement(Md,{width:r,height:n}),y.createElement("div",bi({ref:t},e)))}),pW=y.forwardRef((e,t)=>{var{width:r,height:n}=e;return Hn(r)||Hn(n)?y.createElement(dW,bi({},e,{ref:t})):y.createElement(fW,bi({},e,{ref:t}))});function hW(e){return e===!0?uW:pW}var mW=y.forwardRef((e,t)=>{var{children:r,className:n,height:o,onClick:l,onContextMenu:u,onDoubleClick:f,onMouseDown:p,onMouseEnter:h,onMouseLeave:m,onMouseMove:v,onMouseUp:b,onTouchEnd:w,onTouchMove:A,onTouchStart:j,style:S,width:E,responsive:C,dispatchTouchEvents:N=!0}=e,_=y.useRef(null),T=at(),[z,U]=y.useState(null),[X,ee]=y.useState(null),ae=aW(),F=R0(),Q=F?.width>0?F.width:E,pe=F?.height>0?F.height:o,me=y.useCallback(Z=>{ae(Z),typeof t=="function"&&t(Z),U(Z),ee(Z),Z!=null&&(_.current=Z)},[ae,t,U,ee]),ye=y.useCallback(Z=>{T(A5(Z)),T($r({handler:l,reactEvent:Z}))},[T,l]),q=y.useCallback(Z=>{T(t0(Z)),T($r({handler:h,reactEvent:Z}))},[T,h]),G=y.useCallback(Z=>{T(o3()),T($r({handler:m,reactEvent:Z}))},[T,m]),re=y.useCallback(Z=>{T(t0(Z)),T($r({handler:v,reactEvent:Z}))},[T,v]),ie=y.useCallback(()=>{T(T5())},[T]),P=y.useCallback(Z=>{T(C5(Z.key))},[T]),W=y.useCallback(Z=>{T($r({handler:u,reactEvent:Z}))},[T,u]),ne=y.useCallback(Z=>{T($r({handler:f,reactEvent:Z}))},[T,f]),te=y.useCallback(Z=>{T($r({handler:p,reactEvent:Z}))},[T,p]),le=y.useCallback(Z=>{T($r({handler:b,reactEvent:Z}))},[T,b]),je=y.useCallback(Z=>{T($r({handler:j,reactEvent:Z}))},[T,j]),ge=y.useCallback(Z=>{N&&T(_5(Z)),T($r({handler:A,reactEvent:Z}))},[T,N,A]),$e=y.useCallback(Z=>{T($r({handler:w,reactEvent:Z}))},[T,w]),Ue=hW(C);return y.createElement(N3.Provider,{value:z},y.createElement(RA.Provider,{value:X},y.createElement(Ue,{width:Q??S?.width,height:pe??S?.height,className:qe("recharts-wrapper",n),style:iW({position:"relative",cursor:"default",width:Q,height:pe},S),onClick:ye,onContextMenu:W,onDoubleClick:ne,onFocus:ie,onKeyDown:P,onMouseDown:te,onMouseEnter:q,onMouseLeave:G,onMouseMove:re,onMouseUp:le,onTouchEnd:$e,onTouchMove:ge,onTouchStart:je,ref:me},y.createElement(cW,null),r)))}),gW=["width","height","responsive","children","className","style","compact","title","desc"];function vW(e,t){if(e==null)return{};var r,n,o=xW(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function xW(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var yW=y.forwardRef((e,t)=>{var{width:r,height:n,responsive:o,children:l,className:u,style:f,compact:p,title:h,desc:m}=e,v=vW(e,gW),b=rn(v);return p?y.createElement(y.Fragment,null,y.createElement(Md,{width:r,height:n}),y.createElement(lA,{otherAttributes:b,title:h,desc:m},l)):y.createElement(mW,{className:u,style:f,width:r,height:n,responsive:o??!1,onClick:e.onClick,onMouseLeave:e.onMouseLeave,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseDown:e.onMouseDown,onMouseUp:e.onMouseUp,onContextMenu:e.onContextMenu,onDoubleClick:e.onDoubleClick,onTouchStart:e.onTouchStart,onTouchMove:e.onTouchMove,onTouchEnd:e.onTouchEnd},y.createElement(lA,{otherAttributes:b,title:h,desc:m,ref:t},y.createElement(HY,null,l)))});function r0(){return r0=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r0.apply(null,arguments)}var bW={top:5,right:5,bottom:5,left:5},wW={accessibilityLayer:!0,layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:bW,reverseStackOrder:!1,syncMethod:"index",responsive:!1},D5=y.forwardRef(function(t,r){var n,o=Yt(t.categoricalChartProps,wW),{chartName:l,defaultTooltipEventType:u,validateTooltipEventTypes:f,tooltipPayloadSearcher:p,categoricalChartProps:h}=t,m={chartName:l,defaultTooltipEventType:u,validateTooltipEventTypes:f,tooltipPayloadSearcher:p,eventEmitter:void 0};return y.createElement(XK,{preloadedState:{options:m},reduxStoreName:(n=h.id)!==null&&n!==void 0?n:l},y.createElement(PY,{chartData:h.data}),y.createElement(FK,{layout:o.layout,margin:o.margin}),y.createElement(ZK,{baseValue:o.baseValue,accessibilityLayer:o.accessibilityLayer,barCategoryGap:o.barCategoryGap,maxBarSize:o.maxBarSize,stackOffset:o.stackOffset,barGap:o.barGap,barSize:o.barSize,syncId:o.syncId,syncMethod:o.syncMethod,className:o.className}),y.createElement(yW,r0({},o,{ref:r})))}),jW=["axis"],SW=y.forwardRef((e,t)=>y.createElement(D5,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:jW,tooltipPayloadSearcher:C3,categoricalChartProps:e,ref:t})),AW=["axis","item"],z5=y.forwardRef((e,t)=>y.createElement(D5,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:AW,tooltipPayloadSearcher:C3,categoricalChartProps:e,ref:t}));function OW(){const e=[{month:"May",earnings:320},{month:"Jun",earnings:420},{month:"Jul",earnings:510},{month:"Aug",earnings:590},{month:"Sep",earnings:640},{month:"Oct",earnings:700}];return c.jsxs("div",{children:[c.jsx("h1",{children:"Earnings Overview"}),c.jsx("p",{className:"sub",children:"Track monthly payouts and revenue trends."}),c.jsx("div",{className:"chart",children:c.jsx(Ag,{width:"100%",height:280,children:c.jsxs(z5,{data:e,children:[c.jsx(rd,{strokeDasharray:"3 3"}),c.jsx(ad,{dataKey:"month"}),c.jsx(od,{}),c.jsx(Wg,{}),c.jsx(Ju,{dataKey:"earnings",fill:"#2563eb",name:"Earnings ($)"})]})})}),c.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:18px;}
        .chart {background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:16px;}
      `})]})}function EW(){return c.jsxs("div",{children:[c.jsx("h1",{children:"Discussions"}),c.jsx("p",{className:"sub",children:"Engage with your learners in topic discussions."}),c.jsx("div",{className:"msg",children:"Forum integration coming soon."}),c.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:6px;}
        .sub {color:#64748b;margin-bottom:12px;}
        .msg {background:#f8fafc;border:1px dashed #cbd5e1;border-radius:10px;padding:18px;}
      `})]})}function kW(){const e=[{title:"Assignment Deadline Extended",desc:"React Project submission deadline moved to Nov 12.",date:"Nov 10, 2025"},{title:"New Enrollment",desc:"John Doe enrolled in 'Advanced JS Concepts'.",date:"Nov 9, 2025"},{title:"Payment Received",desc:"You received $120 for October earnings.",date:"Nov 8, 2025"}];return c.jsxs("div",{children:[c.jsx("h1",{children:"Notifications"}),c.jsx("p",{className:"sub",children:"Recent alerts and updates related to your courses."}),c.jsx("div",{className:"list",children:e.map((t,r)=>c.jsxs("div",{className:"item",children:[c.jsxs("div",{className:"txt",children:[c.jsx("h4",{children:t.title}),c.jsx("p",{children:t.desc})]}),c.jsx("span",{className:"date",children:t.date})]},r))}),c.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:16px;}
        .list {display:flex;flex-direction:column;gap:12px;}
        .item {background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:14px 18px;display:flex;justify-content:space-between;}
        .txt h4 {margin:0 0 2px;font-weight:700;}
        .txt p {margin:0;color:#475569;font-size:.9rem;}
        .date {color:#94a3b8;font-size:.85rem;}
      `})]})}function NW(){return c.jsxs("div",{children:[c.jsx("h1",{children:"Settings"}),c.jsx("p",{className:"sub",children:"Manage your account and teaching preferences."}),c.jsxs("div",{className:"card",children:[c.jsx("h3",{children:"Profile Visibility"}),c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",defaultChecked:!0})," Show profile publicly"]})]}),c.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:16px;}
        .card {background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        label {display:flex;align-items:center;gap:8px;margin-top:10px;font-size:.95rem;}
      `})]})}function CW(){return c.jsxs("div",{children:[c.jsx("h1",{children:"My Profile"}),c.jsx("p",{className:"sub",children:"View and edit your trainer information."}),c.jsxs("div",{className:"profile",children:[c.jsx("img",{src:"https://i.pravatar.cc/120?img=9",alt:"Profile"}),c.jsxs("div",{children:[c.jsx("h3",{children:"John Doe"}),c.jsx("p",{children:"Email: john.doe@example.com"}),c.jsx("p",{children:"Expertise: Web Development"})]})]}),c.jsx("style",{children:`
        h1 {font-size:1.4rem;font-weight:800;margin-bottom:4px;}
        .sub {color:#64748b;margin-bottom:14px;}
        .profile {display:flex;gap:16px;align-items:center;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;}
        img {width:80px;height:80px;border-radius:50%;border:2px solid #cbd5e1;}
      `})]})}function su({title:e,value:t,delta:r,icon:n}){const o=r>=0;return c.jsxs("div",{className:"stat",children:[c.jsxs("div",{className:"stat-top",children:[c.jsx("div",{className:"stat-icon",children:n}),c.jsxs("div",{className:`delta ${o?"up":"down"}`,children:[o?"↑":"↓"," ",Math.abs(r),"%"]})]}),c.jsx("div",{className:"stat-title",children:e}),c.jsx("div",{className:"stat-value",children:t}),c.jsx("style",{children:`
        .stat { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:16px; box-shadow:0 1px 2px rgba(0,0,0,.04); }
        .stat-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
        .stat-icon { font-size:22px; }
        .delta { font-size:.8rem; padding:4px 8px; border-radius:999px; }
        .delta.up { background:#ecfeff; color:#0369a1; border:1px solid #a5f3fc; }
        .delta.down { background:#fef2f2; color:#991b1b; border:1px solid #fecaca; }
        .stat-title { color:#334155; font-size:.9rem; }
        .stat-value { font-size:1.6rem; font-weight:800; letter-spacing:.3px; }
      `})]})}function cA(){const e=[{label:"Mon",value:32},{label:"Tue",value:48},{label:"Wed",value:44},{label:"Thu",value:61},{label:"Fri",value:52},{label:"Sat",value:39},{label:"Sun",value:27}];return c.jsxs("div",{className:"dash",children:[c.jsx("h1",{children:"Overview"}),c.jsx("p",{className:"sub",children:"Key metrics for your LMS at a glance."}),c.jsxs("div",{className:"stats",children:[c.jsx(su,{title:"Total Learners",value:"12,048",delta:4.2,icon:"🎓"}),c.jsx(su,{title:"Active Mentors",value:"82",delta:1.1,icon:"🧑‍🏫"}),c.jsx(su,{title:"Courses Published",value:"214",delta:2.9,icon:"📘"}),c.jsx(su,{title:"Pending Requests",value:"7",delta:-12,icon:"⏳"})]}),c.jsxs("div",{className:"cards",children:[c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"panel-head",children:[c.jsx("h3",{children:"Weekly Enrollments"}),c.jsx("span",{className:"hint",children:"Last 7 days"})]}),c.jsx("div",{className:"bar-chart",children:e.map(t=>c.jsxs("div",{className:"bar-wrap",title:`${t.label}: ${t.value}`,children:[c.jsx("div",{className:"bar",style:{height:`${t.value*2.2}px`}}),c.jsx("span",{className:"lbl",children:t.label})]},t.label))})]}),c.jsxs("section",{className:"panel",children:[c.jsxs("div",{className:"panel-head",children:[c.jsx("h3",{children:"Top Courses"}),c.jsx("span",{className:"hint",children:"Most enrolled"})]}),c.jsx("ul",{className:"list",children:[{name:"React Fundamentals",enroll:1280},{name:"Data Structures in JS",enroll:1094},{name:"SQL for Analysts",enroll:968},{name:"Python for ML",enroll:902}].map(t=>c.jsxs("li",{className:"li",children:[c.jsx("span",{children:t.name}),c.jsx("span",{className:"pill",children:t.enroll})]},t.name))})]})]}),c.jsx("style",{children:`
        .dash h1 { margin:0 0 2px; font-size:1.45rem; font-weight:800; }
        .sub { color:#64748b; margin:0 0 16px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin:12px 0 18px; }
        .cards { display:grid; grid-template-columns:2fr 1fr; gap:14px; }
        .panel { background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:14px; }
        .panel-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; }
        .hint { color:#64748b; font-size:.85rem; }
        .bar-chart { display:flex; align-items:flex-end; gap:12px; height:200px; padding:10px 4px 0; }
        .bar-wrap { display:flex; flex-direction:column; align-items:center; gap:6px; }
        .bar { width:22px; background:linear-gradient(180deg, #60a5fa, #2563eb); border-radius:6px 6px 0 0; }
        .lbl { font-size:.8rem; color:#475569; }
        .list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .li { display:flex; justify-content:space-between; align-items:center; padding:10px; border:1px solid #e2e8f0; border-radius:10px; }
        .pill { background:#eef2ff; color:#3730a3; padding:4px 10px; border-radius:999px; border:1px solid #c7d2fe; font-weight:700; }
        @media (max-width: 1200px) { .stats { grid-template-columns:repeat(2,1fr); } .cards { grid-template-columns:1fr; } }
      `})]})}function TW(){const[e,t]=y.useState([]),[r,n]=y.useState(""),[o,l]=y.useState("all");y.useEffect(()=>{t([{id:1,name:"Alex Johnson",email:"alex.j@example.com",role:"Learner",status:"Active"},{id:2,name:"Sarah Kim",email:"sarah.k@example.com",role:"Mentor",status:"Pending"},{id:3,name:"Mark Chen",email:"mark.chen@example.com",role:"Learner",status:"Active"},{id:4,name:"Priya Patel",email:"priya.p@example.com",role:"Admin",status:"Suspended"},{id:5,name:"Daniel Lee",email:"daniel.l@example.com",role:"Mentor",status:"Active"}])},[]);const u=e.filter(f=>{const p=f.name.toLowerCase().includes(r.toLowerCase())||f.email.toLowerCase().includes(r.toLowerCase()),h=o==="all"||f.status.toLowerCase()===o.toLowerCase();return p&&h});return c.jsxs("div",{style:Ze.container,children:[c.jsx("h1",{style:Ze.heading,children:"Manage Users"}),c.jsx("p",{style:Ze.subheading,children:"View, filter, and manage all platform users"}),c.jsxs("div",{style:Ze.controls,children:[c.jsxs("div",{style:Ze.searchBox,children:[c.jsx(TT,{size:18,color:"#64748b"}),c.jsx("input",{type:"text",placeholder:"Search users...",style:Ze.input,value:r,onChange:f=>n(f.target.value)})]}),c.jsxs("div",{style:Ze.filterBox,children:[c.jsx(mT,{size:18,color:"#475569"}),c.jsxs("select",{style:Ze.select,value:o,onChange:f=>l(f.target.value),children:[c.jsx("option",{value:"all",children:"All"}),c.jsx("option",{value:"Active",children:"Active"}),c.jsx("option",{value:"Pending",children:"Pending"}),c.jsx("option",{value:"Suspended",children:"Suspended"})]})]})]}),c.jsxs("div",{style:Ze.tableWrapper,children:[c.jsxs("table",{style:Ze.table,children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:Ze.th,children:"Name"}),c.jsx("th",{style:Ze.th,children:"Email"}),c.jsx("th",{style:Ze.th,children:"Role"}),c.jsx("th",{style:Ze.th,children:"Status"}),c.jsx("th",{style:Ze.th,children:"Actions"})]})}),c.jsx("tbody",{children:u.map(f=>c.jsxs("tr",{style:Ze.tr,children:[c.jsx("td",{style:Ze.td,children:f.name}),c.jsx("td",{style:Ze.td,children:f.email}),c.jsx("td",{style:Ze.td,children:f.role}),c.jsx("td",{style:Ze.td,children:c.jsx("span",{style:{...Ze.badge,...MW(f.status)},children:f.status})}),c.jsxs("td",{style:Ze.td,children:[c.jsx("button",{style:Ze.actionBtn,title:"Approve",children:c.jsx(TA,{size:16})}),c.jsx("button",{style:{...Ze.actionBtn,color:"#dc2626"},title:"Suspend",children:c.jsx(MA,{size:16})})]})]},f.id))})]}),u.length===0&&c.jsx("div",{style:Ze.noData,children:"No users match your criteria."})]})]})}const MW=e=>{switch(e){case"Active":return{background:"#dcfce7",color:"#16a34a"};case"Pending":return{background:"#fef9c3",color:"#ca8a04"};case"Suspended":return{background:"#fee2e2",color:"#dc2626"};default:return{background:"#e2e8f0",color:"#475569"}}},Ze={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem",marginBottom:10},controls:{display:"flex",gap:10,alignItems:"center",marginBottom:20},searchBox:{display:"flex",alignItems:"center",gap:8,background:"#f1f5f9",borderRadius:8,padding:"8px 12px",flex:1},input:{border:"none",background:"transparent",outline:"none",flex:1,fontSize:"0.95rem"},filterBox:{display:"flex",alignItems:"center",background:"#fff",border:"1px solid #e2e8f0",borderRadius:8,padding:"6px 10px",gap:6},select:{border:"none",outline:"none",background:"transparent",fontSize:"0.9rem",color:"#334155"},tableWrapper:{background:"#fff",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.05)",border:"1px solid #e2e8f0",overflowX:"auto"},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",padding:"12px 16px",background:"#f8fafc",color:"#475569",fontSize:"0.9rem",borderBottom:"1px solid #e2e8f0"},tr:{borderBottom:"1px solid #f1f5f9"},td:{padding:"12px 16px",color:"#1e293b",fontSize:"0.95rem",verticalAlign:"middle"},badge:{display:"inline-block",fontSize:"0.8rem",fontWeight:600,padding:"4px 10px",borderRadius:"12px"},actionBtn:{background:"none",border:"none",color:"#1e40af",cursor:"pointer",marginRight:"8px"},noData:{textAlign:"center",color:"#64748b",padding:"20px"}};function _W(){const[e,t]=y.useState([]);y.useEffect(()=>{t([{id:1,title:"React Essentials",instructor:"Alex Johnson",category:"Web Development",status:"Published"},{id:2,title:"Python for Data Science",instructor:"Sarah Kim",category:"Data Science",status:"Pending Review"},{id:3,title:"UI/UX Design Masterclass",instructor:"Priya Patel",category:"Design",status:"Published"}])},[]);const r=o=>t(l=>l.filter(u=>u.id!==o)),n=o=>t(l=>l.map(u=>u.id===o?{...u,status:"Published"}:u));return c.jsxs("div",{style:dt.container,children:[c.jsx("h1",{style:dt.heading,children:"Manage Courses"}),c.jsx("p",{style:dt.subheading,children:"View, approve, and manage all uploaded courses."}),c.jsxs("div",{style:dt.tableWrapper,children:[c.jsxs("table",{style:dt.table,children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:dt.th,children:"Course"}),c.jsx("th",{style:dt.th,children:"Instructor"}),c.jsx("th",{style:dt.th,children:"Category"}),c.jsx("th",{style:dt.th,children:"Status"}),c.jsx("th",{style:dt.th,children:"Actions"})]})}),c.jsx("tbody",{children:e.map(o=>c.jsxs("tr",{style:dt.tr,children:[c.jsxs("td",{style:dt.td,children:[c.jsx(fs,{size:16,style:{marginRight:8,color:"#2563eb"}}),o.title]}),c.jsx("td",{style:dt.td,children:o.instructor}),c.jsx("td",{style:dt.td,children:o.category}),c.jsx("td",{style:dt.td,children:c.jsx("span",{style:{...dt.badge,...PW(o.status)},children:o.status})}),c.jsx("td",{style:dt.td,children:o.status==="Pending Review"?c.jsxs("button",{style:dt.approveBtn,onClick:()=>n(o.id),children:[c.jsx(pd,{size:16})," Approve"]}):c.jsxs(c.Fragment,{children:[c.jsxs("button",{style:dt.editBtn,children:[c.jsx(RT,{size:16})," Edit"]}),c.jsxs("button",{style:dt.deleteBtn,onClick:()=>r(o.id),children:[c.jsx(qT,{size:16})," Delete"]})]})})]},o.id))})]}),e.length===0&&c.jsx("div",{style:dt.noData,children:"No courses available."})]})]})}const PW=e=>{switch(e){case"Published":return{background:"#dcfce7",color:"#16a34a"};case"Pending Review":return{background:"#fef9c3",color:"#ca8a04"};default:return{background:"#e2e8f0",color:"#475569"}}},dt={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem"},tableWrapper:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",overflowX:"auto"},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",padding:"12px 16px",background:"#f8fafc",color:"#475569",fontSize:"0.9rem",borderBottom:"1px solid #e2e8f0"},tr:{borderBottom:"1px solid #f1f5f9"},td:{padding:"12px 16px",color:"#1e293b",fontSize:"0.95rem",verticalAlign:"middle"},badge:{fontWeight:600,fontSize:"0.8rem",borderRadius:"12px",padding:"4px 10px"},approveBtn:{background:"#16a34a",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},editBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer",marginRight:6},deleteBtn:{background:"#dc2626",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},noData:{textAlign:"center",color:"#64748b",padding:20}};function DW(){const[e,t]=y.useState([]);y.useEffect(()=>{t([{id:1,name:"Sarah Kim",email:"sarah.k@example.com",expertise:"Web Development",status:"Pending"},{id:2,name:"John Smith",email:"john.s@example.com",expertise:"Data Science",status:"Pending"},{id:3,name:"Priya Patel",email:"priya.p@example.com",expertise:"UI/UX Design",status:"Approved"}])},[]);const r=o=>t(l=>l.map(u=>u.id===o?{...u,status:"Approved"}:u)),n=o=>t(l=>l.map(u=>u.id===o?{...u,status:"Rejected"}:u));return c.jsxs("div",{style:ft.container,children:[c.jsx("h1",{style:ft.heading,children:"Mentor Requests"}),c.jsx("p",{style:ft.subheading,children:"Review and approve mentor onboarding requests."}),c.jsxs("div",{style:ft.tableWrapper,children:[c.jsxs("table",{style:ft.table,children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{style:ft.th,children:"Name"}),c.jsx("th",{style:ft.th,children:"Email"}),c.jsx("th",{style:ft.th,children:"Expertise"}),c.jsx("th",{style:ft.th,children:"Status"}),c.jsx("th",{style:ft.th,children:"Actions"})]})}),c.jsx("tbody",{children:e.map(o=>c.jsxs("tr",{style:ft.tr,children:[c.jsx("td",{style:ft.td,children:o.name}),c.jsx("td",{style:ft.td,children:o.email}),c.jsx("td",{style:ft.td,children:o.expertise}),c.jsx("td",{style:ft.td,children:c.jsx("span",{style:{...ft.badge,...zW(o.status)},children:o.status})}),c.jsx("td",{style:ft.td,children:o.status==="Pending"?c.jsxs(c.Fragment,{children:[c.jsxs("button",{style:ft.approveBtn,onClick:()=>r(o.id),children:[c.jsx(TA,{size:16})," Approve"]}),c.jsxs("button",{style:ft.rejectBtn,onClick:()=>n(o.id),children:[c.jsx(MA,{size:16})," Reject"]})]}):c.jsxs("button",{style:ft.viewBtn,children:[c.jsx(CA,{size:16})," View"]})})]},o.id))})]}),e.length===0&&c.jsx("div",{style:ft.noData,children:"No mentor requests available."})]})]})}const zW=e=>{switch(e){case"Approved":return{background:"#dcfce7",color:"#16a34a"};case"Pending":return{background:"#fef9c3",color:"#ca8a04"};case"Rejected":return{background:"#fee2e2",color:"#dc2626"};default:return{}}},ft={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem"},tableWrapper:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",overflowX:"auto"},table:{width:"100%",borderCollapse:"collapse"},th:{textAlign:"left",padding:"12px 16px",background:"#f8fafc",color:"#475569",fontSize:"0.9rem",borderBottom:"1px solid #e2e8f0"},tr:{borderBottom:"1px solid #f1f5f9"},td:{padding:"12px 16px",color:"#1e293b",fontSize:"0.95rem"},badge:{fontWeight:600,fontSize:"0.8rem",borderRadius:"12px",padding:"4px 10px"},approveBtn:{background:"#16a34a",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer",marginRight:8},rejectBtn:{background:"#dc2626",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},viewBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer"},noData:{textAlign:"center",color:"#64748b",padding:20}};function RW(){const e=[{month:"May",users:320},{month:"Jun",users:460},{month:"Jul",users:540},{month:"Aug",users:720},{month:"Sep",users:810},{month:"Oct",users:940}],t=[{month:"May",revenue:5400,profit:1900},{month:"Jun",revenue:6900,profit:2500},{month:"Jul",revenue:8800,profit:3100},{month:"Aug",revenue:10400,profit:3600},{month:"Sep",revenue:11200,profit:4e3},{month:"Oct",revenue:12100,profit:4400}],r=[{course:"React Basics",learners:480},{course:"Data Science",learners:420},{course:"Python ML",learners:390},{course:"SQL Essentials",learners:330},{course:"UI Design",learners:270}];return c.jsxs("div",{className:"reports",children:[c.jsx("h1",{children:"Reports & Analytics"}),c.jsx("p",{className:"subtitle",children:"Track user growth, enrollment trends, and platform revenue."}),c.jsxs("div",{className:"chart-card",children:[c.jsx("h3",{children:"User Growth (Last 6 Months)"}),c.jsx(Ag,{width:"100%",height:280,children:c.jsxs(SW,{data:e,children:[c.jsx(rd,{strokeDasharray:"3 3"}),c.jsx(ad,{dataKey:"month"}),c.jsx(od,{}),c.jsx(Wg,{}),c.jsx(S5,{type:"monotone",dataKey:"users",stroke:"#2563eb",strokeWidth:3,dot:{r:5}})]})})]}),c.jsxs("div",{className:"chart-card",children:[c.jsx("h3",{children:"Revenue Summary"}),c.jsx(Ag,{width:"100%",height:280,children:c.jsxs(z5,{data:t,children:[c.jsx(rd,{strokeDasharray:"3 3"}),c.jsx(ad,{dataKey:"month"}),c.jsx(od,{}),c.jsx(Wg,{}),c.jsx(tE,{}),c.jsx(Ju,{dataKey:"revenue",fill:"#60a5fa",name:"Revenue ($)"}),c.jsx(Ju,{dataKey:"profit",fill:"#2563eb",name:"Profit ($)"})]})})]}),c.jsxs("div",{className:"chart-card",children:[c.jsx("h3",{children:"Top Enrolled Courses"}),c.jsxs("table",{className:"data-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Course"}),c.jsx("th",{children:"Learners"})]})}),c.jsx("tbody",{children:r.map(n=>c.jsxs("tr",{children:[c.jsx("td",{children:n.course}),c.jsx("td",{children:n.learners})]},n.course))})]})]}),c.jsx("style",{children:`
        .reports {
          padding: 10px 4px;
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        h1 {
          margin: 0;
          font-size: 1.6rem;
          font-weight: 800;
        }
        .subtitle {
          color: #64748b;
          margin-bottom: 22px;
          font-size: 0.95rem;
        }
        .chart-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 22px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .chart-card h3 {
          margin: 0 0 12px;
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e293b;
        }
        .data-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .data-table th, .data-table td {
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
          padding: 10px 8px;
        }
        .data-table th {
          background: #f8fafc;
          color: #475569;
          font-weight: 600;
        }
        .data-table tr:hover {
          background: #f1f5f9;
        }
      `})]})}function LW(){const[e,t]=y.useState([{id:1,type:"info",title:"System Maintenance Scheduled",message:"The LMS will undergo maintenance on Nov 15, 2025, from 1:00–3:00 AM.",date:"Nov 10, 2025",read:!1},{id:2,type:"success",title:"New Course Approved",message:"‘React Essentials’ course has been successfully approved.",date:"Nov 9, 2025",read:!1},{id:3,type:"warning",title:"Pending Mentor Request",message:"2 new mentors are waiting for admin approval.",date:"Nov 8, 2025",read:!0},{id:4,type:"error",title:"Payment Gateway Issue",message:"Some transactions failed due to gateway timeout.",date:"Nov 6, 2025",read:!0}]),r=()=>{t(l=>l.map(u=>({...u,read:!0})))},n=l=>{t(u=>u.map(f=>f.id===l?{...f,read:!0}:f))},o={info:c.jsx(vT,{size:18,color:"#2563eb"}),success:c.jsx(pd,{size:18,color:"#16a34a"}),warning:c.jsx(v0,{size:18,color:"#f59e0b"}),error:c.jsx(lT,{size:18,color:"#dc2626"})};return c.jsxs("div",{style:ur.container,children:[c.jsx("h1",{style:ur.heading,children:"Notifications Center"}),c.jsx("p",{style:ur.subheading,children:"View system alerts, approvals, and recent activities."}),c.jsx("div",{style:ur.actions,children:c.jsx("button",{style:ur.markAllBtn,onClick:r,children:"Mark All as Read"})}),c.jsxs("div",{style:ur.list,children:[e.map(l=>c.jsxs("div",{style:{...ur.notification,background:l.read?"#f9fafb":"#e0f2fe",borderLeft:`4px solid ${BW(l.type)}`},onClick:()=>n(l.id),children:[c.jsx("div",{style:ur.icon,children:o[l.type]}),c.jsxs("div",{style:ur.content,children:[c.jsxs("div",{style:ur.titleRow,children:[c.jsx("h3",{style:ur.title,children:l.title}),c.jsx("span",{style:ur.date,children:l.date})]}),c.jsx("p",{style:ur.message,children:l.message})]})]},l.id)),e.length===0&&c.jsxs("div",{style:ur.empty,children:[c.jsx(Co,{size:22,color:"#94a3b8"}),c.jsx("p",{children:"No notifications to display."})]})]})]})}const BW=e=>{switch(e){case"success":return"#16a34a";case"warning":return"#f59e0b";case"error":return"#dc2626";default:return"#2563eb"}},ur={container:{display:"flex",flexDirection:"column",gap:16},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem"},actions:{display:"flex",justifyContent:"flex-end",marginTop:8},markAllBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:8,padding:"8px 14px",fontSize:"0.9rem",fontWeight:600,cursor:"pointer"},list:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",display:"flex",flexDirection:"column",overflow:"hidden"},notification:{display:"flex",alignItems:"flex-start",gap:12,padding:"16px 18px",cursor:"pointer",transition:"background 0.2s ease",borderBottom:"1px solid #f1f5f9"},icon:{flexShrink:0,marginTop:4},content:{flex:1},titleRow:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},title:{fontSize:"1rem",fontWeight:700,color:"#0f172a"},date:{fontSize:"0.8rem",color:"#94a3b8"},message:{fontSize:"0.9rem",color:"#475569",margin:0},empty:{textAlign:"center",padding:"40px 20px",color:"#64748b"}};function IW(){const[e,t]=y.useState({name:"Alex Johnson",email:"alex.admin@talentminds.com",theme:"light",notifications:!0,language:"en",password:"",confirmPassword:""}),r=o=>{const{name:l,value:u,type:f,checked:p}=o.target;t(h=>({...h,[l]:f==="checkbox"?p:u}))},n=o=>{o.preventDefault(),alert("✅ Settings saved successfully!")};return c.jsxs("div",{style:ke.container,children:[c.jsx("h1",{style:ke.heading,children:"Admin Settings"}),c.jsx("p",{style:ke.subheading,children:"Manage your account and platform preferences."}),c.jsxs("form",{style:ke.form,onSubmit:n,children:[c.jsxs("div",{style:ke.section,children:[c.jsxs("h2",{style:ke.sectionTitle,children:[c.jsx(hd,{size:18,style:ke.icon})," Profile Information"]}),c.jsxs("div",{style:ke.formRow,children:[c.jsxs("div",{style:ke.formGroup,children:[c.jsx("label",{style:ke.label,children:"Full Name"}),c.jsx("input",{type:"text",name:"name",value:e.name,onChange:r,style:ke.input})]}),c.jsxs("div",{style:ke.formGroup,children:[c.jsx("label",{style:ke.label,children:"Email Address"}),c.jsx("input",{type:"email",name:"email",value:e.email,onChange:r,style:ke.input})]})]})]}),c.jsxs("div",{style:ke.section,children:[c.jsxs("h2",{style:ke.sectionTitle,children:[c.jsx(Co,{size:18,style:ke.icon})," Platform Preferences"]}),c.jsxs("div",{style:ke.formRow,children:[c.jsxs("div",{style:ke.formGroup,children:[c.jsx("label",{style:ke.label,children:"Theme"}),c.jsxs("select",{name:"theme",value:e.theme,onChange:r,style:ke.select,children:[c.jsx("option",{value:"light",children:"Light Mode"}),c.jsx("option",{value:"dark",children:"Dark Mode"})]})]}),c.jsxs("div",{style:ke.formGroup,children:[c.jsx("label",{style:ke.label,children:"Language"}),c.jsxs("select",{name:"language",value:e.language,onChange:r,style:ke.select,children:[c.jsx("option",{value:"en",children:"English"}),c.jsx("option",{value:"es",children:"Spanish"}),c.jsx("option",{value:"de",children:"German"}),c.jsx("option",{value:"fr",children:"French"})]})]})]}),c.jsxs("label",{style:ke.checkbox,children:[c.jsx("input",{type:"checkbox",name:"notifications",checked:e.notifications,onChange:r,style:ke.checkboxInput}),"Enable Email Notifications"]})]}),c.jsxs("div",{style:ke.section,children:[c.jsxs("h2",{style:ke.sectionTitle,children:[c.jsx(p0,{size:18,style:ke.icon})," Security Settings"]}),c.jsxs("div",{style:ke.formRow,children:[c.jsxs("div",{style:ke.formGroup,children:[c.jsx("label",{style:ke.label,children:"New Password"}),c.jsx("input",{type:"password",name:"password",value:e.password,onChange:r,style:ke.input,placeholder:"••••••••"})]}),c.jsxs("div",{style:ke.formGroup,children:[c.jsx("label",{style:ke.label,children:"Confirm Password"}),c.jsx("input",{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:r,style:ke.input,placeholder:"••••••••"})]})]})]}),c.jsx("div",{style:ke.buttonRow,children:c.jsxs("button",{type:"submit",style:ke.saveBtn,children:[c.jsx(NT,{size:18})," Save Changes"]})})]})]})}const ke={container:{display:"flex",flexDirection:"column",gap:20},heading:{fontSize:"1.5rem",fontWeight:800,color:"#0f172a"},subheading:{color:"#64748b",fontSize:"0.95rem",marginBottom:10},form:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",padding:"20px",display:"flex",flexDirection:"column",gap:20},section:{borderBottom:"1px solid #f1f5f9",paddingBottom:16},sectionTitle:{display:"flex",alignItems:"center",gap:8,fontSize:"1.05rem",fontWeight:700,color:"#0f172a",marginBottom:14},icon:{color:"#2563eb"},formRow:{display:"flex",flexWrap:"wrap",gap:16},formGroup:{flex:1,display:"flex",flexDirection:"column",gap:6},label:{color:"#475569",fontWeight:600,fontSize:"0.9rem"},input:{border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 12px",fontSize:"0.95rem",outline:"none"},select:{border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 12px",fontSize:"0.95rem",background:"#fff"},checkbox:{display:"flex",alignItems:"center",gap:10,marginTop:10,fontSize:"0.9rem",color:"#334155"},checkboxInput:{width:16,height:16},buttonRow:{display:"flex",justifyContent:"flex-end"},saveBtn:{background:"#2563eb",color:"#fff",border:"none",borderRadius:8,padding:"10px 18px",fontWeight:700,display:"flex",alignItems:"center",gap:8,cursor:"pointer",transition:"background 0.2s"}},qW=()=>c.jsxs("div",{style:{textAlign:"center",padding:"120px 20px",background:"#f8fafc",minHeight:"70vh"},children:[c.jsx("h1",{style:{color:"#0b4da3",fontSize:"2.5rem",fontWeight:"800"},children:"404 - Page Not Found"}),c.jsx("p",{style:{color:"#475569",marginTop:"10px",fontSize:"1.1rem"},children:"Oops! The page you’re looking for doesn’t exist or has been moved."})]});function $W(){return c.jsxs(i6,{children:[c.jsxs(ce,{element:c.jsx(U6,{}),children:[c.jsx(ce,{path:"/",element:c.jsx(AM,{})}),c.jsx(ce,{path:"/explore",element:c.jsx(EM,{})}),c.jsx(ce,{path:"/resources",element:c.jsx(kM,{})}),c.jsx(ce,{path:"/business",element:c.jsx(NM,{})}),c.jsx(ce,{path:"/reviews",element:c.jsx(CM,{})}),c.jsx(ce,{path:"/hire",element:c.jsx(TM,{})}),c.jsx(ce,{path:"/become-mentor",element:c.jsx($M,{})}),c.jsx(ce,{path:"/placement-report",element:c.jsx(UM,{})}),c.jsx(ce,{path:"/partnerships",element:c.jsx(MM,{})}),c.jsx(ce,{path:"/scholarships",element:c.jsx(_M,{})}),c.jsx(ce,{path:"/faq",element:c.jsx(PM,{})}),c.jsx(ce,{path:"/support",element:c.jsx(DM,{})}),c.jsx(ce,{path:"/courses",element:c.jsx(r8,{})}),c.jsx(ce,{path:"/courses/:slug",element:c.jsx(n8,{})}),c.jsx(ce,{path:"/contact",element:c.jsx(a8,{})}),c.jsx(ce,{path:"/login",element:c.jsx(i8,{})}),c.jsx(ce,{path:"/signup",element:c.jsx(o8,{})}),c.jsx(ce,{path:"/verify-otp",element:c.jsx(l8,{})}),c.jsx(ce,{path:"/forgot-password",element:c.jsx(s8,{})}),c.jsx(ce,{path:"/reset-otp-verify",element:c.jsx(c8,{})}),c.jsx(ce,{path:"/reset-password",element:c.jsx(d8,{})}),c.jsx(ce,{path:"/explore-programs",element:c.jsx(HM,{})}),c.jsx(ce,{path:"/join-learning-community",element:c.jsx(YM,{})}),c.jsx(ce,{path:"/learn-more-about-us",element:c.jsx(GM,{})}),c.jsx(ce,{path:"/browse-all-courses",element:c.jsx(KM,{})}),c.jsx(ce,{path:"/business-solutions",element:c.jsx(WM,{})}),c.jsx(ce,{path:"/programs/fullstack",element:c.jsx(VM,{})}),c.jsx(ce,{path:"/programs/datascience",element:c.jsx(XM,{})}),c.jsx(ce,{path:"/programs/cybersecurity",element:c.jsx(FM,{})}),c.jsx(ce,{path:"/programs/cloud-devops",element:c.jsx(ZM,{})}),c.jsx(ce,{path:"/start",element:c.jsx(n6,{to:"/login",replace:!0})})]}),c.jsxs(ce,{path:"/dashboard",element:c.jsx(eM,{}),children:[c.jsx(ce,{index:!0,element:c.jsx(f8,{})}),c.jsx(ce,{path:"my-courses",element:c.jsx(p8,{})}),c.jsx(ce,{path:"course/:id",element:c.jsx(h8,{})}),c.jsx(ce,{path:"assignments",element:c.jsx(m8,{})}),c.jsx(ce,{path:"discussions",element:c.jsx(g8,{})}),c.jsx(ce,{path:"notifications",element:c.jsx(v8,{})}),c.jsx(ce,{path:"grades",element:c.jsx(x8,{})}),c.jsx(ce,{path:"profile",element:c.jsx(y8,{})}),c.jsx(ce,{path:"settings",element:c.jsx(b8,{})}),c.jsx(ce,{path:"cart",element:c.jsx(w8,{})})]}),c.jsxs(ce,{path:"/trainer",element:c.jsx(nM,{}),children:[c.jsx(ce,{path:"dashboard",element:c.jsx(j8,{})}),c.jsx(ce,{path:"my-courses",element:c.jsx(A8,{})}),c.jsx(ce,{path:"course-management",element:c.jsx(S8,{})}),c.jsx(ce,{path:"student-progress",element:c.jsx(O8,{})}),c.jsx(ce,{path:"earnings",element:c.jsx(OW,{})}),c.jsx(ce,{path:"discussions",element:c.jsx(EW,{})}),c.jsx(ce,{path:"notifications",element:c.jsx(kW,{})}),c.jsx(ce,{path:"settings",element:c.jsx(NW,{})}),c.jsx(ce,{path:"profile",element:c.jsx(CW,{})})]}),c.jsxs(ce,{path:"/admin",element:c.jsx(QT,{}),children:[c.jsx(ce,{index:!0,element:c.jsx(cA,{})}),c.jsx(ce,{path:"dashboard",element:c.jsx(cA,{})}),c.jsx(ce,{path:"users",element:c.jsx(TW,{})}),c.jsx(ce,{path:"courses",element:c.jsx(_W,{})}),c.jsx(ce,{path:"mentors",element:c.jsx(DW,{})}),c.jsx(ce,{path:"reports",element:c.jsx(RW,{})}),c.jsx(ce,{path:"notifications",element:c.jsx(LW,{})}),c.jsx(ce,{path:"settings",element:c.jsx(IW,{})})]}),c.jsx(ce,{path:"*",element:c.jsx(qW,{})})]})}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");dC.createRoot(document.getElementById("root")).render(c.jsx(uA.StrictMode,{children:c.jsx(B6,{children:c.jsxs(N6,{basename:"/TalentMindsLMS",children:[c.jsx(I6,{})," ",c.jsx($W,{})]})})}));
