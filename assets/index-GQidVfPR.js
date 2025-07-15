(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function u(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerPolicy&&(f.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?f.credentials="include":s.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(s){if(s.ep)return;s.ep=!0;const f=u(s);fetch(s.href,f)}})();function pb(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var lf={exports:{}},$i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function yb(){if(lp)return $i;lp=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(o,s,f){var m=null;if(f!==void 0&&(m=""+f),s.key!==void 0&&(m=""+s.key),"key"in s){f={};for(var g in s)g!=="key"&&(f[g]=s[g])}else f=s;return s=f.ref,{$$typeof:a,type:o,key:m,ref:s!==void 0?s:null,props:f}}return $i.Fragment=r,$i.jsx=u,$i.jsxs=u,$i}var rp;function gb(){return rp||(rp=1,lf.exports=yb()),lf.exports}var $=gb(),rf={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function vb(){if(ip)return be;ip=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function S(_){return _===null||typeof _!="object"?null:(_=x&&_[x]||_["@@iterator"],typeof _=="function"?_:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,D={};function A(_,L,K){this.props=_,this.context=L,this.refs=D,this.updater=K||N}A.prototype.isReactComponent={},A.prototype.setState=function(_,L){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,L,"setState")},A.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function T(){}T.prototype=A.prototype;function C(_,L,K){this.props=_,this.context=L,this.refs=D,this.updater=K||N}var H=C.prototype=new T;H.constructor=C,E(H,A.prototype),H.isPureReactComponent=!0;var Y=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function I(_,L,K,Z,te,he){return K=he.ref,{$$typeof:a,type:_,key:L,ref:K!==void 0?K:null,props:he}}function re(_,L){return I(_.type,L,void 0,void 0,void 0,_.props)}function ne(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function fe(_){var L={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(K){return L[K]})}var Ae=/\/+/g;function Be(_,L){return typeof _=="object"&&_!==null&&_.key!=null?fe(""+_.key):L.toString(36)}function Oe(){}function pt(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Oe,Oe):(_.status="pending",_.then(function(L){_.status==="pending"&&(_.status="fulfilled",_.value=L)},function(L){_.status==="pending"&&(_.status="rejected",_.reason=L)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function ze(_,L,K,Z,te){var he=typeof _;(he==="undefined"||he==="boolean")&&(_=null);var oe=!1;if(_===null)oe=!0;else switch(he){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(_.$$typeof){case a:case r:oe=!0;break;case v:return oe=_._init,ze(oe(_._payload),L,K,Z,te)}}if(oe)return te=te(_),oe=Z===""?"."+Be(_,0):Z,Y(te)?(K="",oe!=null&&(K=oe.replace(Ae,"$&/")+"/"),ze(te,L,K,"",function(et){return et})):te!=null&&(ne(te)&&(te=re(te,K+(te.key==null||_&&_.key===te.key?"":(""+te.key).replace(Ae,"$&/")+"/")+oe)),L.push(te)),1;oe=0;var Xe=Z===""?".":Z+":";if(Y(_))for(var ve=0;ve<_.length;ve++)Z=_[ve],he=Xe+Be(Z,ve),oe+=ze(Z,L,K,he,te);else if(ve=S(_),typeof ve=="function")for(_=ve.call(_),ve=0;!(Z=_.next()).done;)Z=Z.value,he=Xe+Be(Z,ve++),oe+=ze(Z,L,K,he,te);else if(he==="object"){if(typeof _.then=="function")return ze(pt(_),L,K,Z,te);throw L=String(_),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return oe}function U(_,L,K){if(_==null)return _;var Z=[],te=0;return ze(_,Z,"","",function(he){return L.call(K,he,te++)}),Z}function ee(_){if(_._status===-1){var L=_._result;L=L(),L.then(function(K){(_._status===0||_._status===-1)&&(_._status=1,_._result=K)},function(K){(_._status===0||_._status===-1)&&(_._status=2,_._result=K)}),_._status===-1&&(_._status=0,_._result=L)}if(_._status===1)return _._result.default;throw _._result}var ae=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function J(){}return be.Children={map:U,forEach:function(_,L,K){U(_,function(){L.apply(this,arguments)},K)},count:function(_){var L=0;return U(_,function(){L++}),L},toArray:function(_){return U(_,function(L){return L})||[]},only:function(_){if(!ne(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},be.Component=A,be.Fragment=u,be.Profiler=s,be.PureComponent=C,be.StrictMode=o,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,be.__COMPILER_RUNTIME={__proto__:null,c:function(_){return k.H.useMemoCache(_)}},be.cache=function(_){return function(){return _.apply(null,arguments)}},be.cloneElement=function(_,L,K){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var Z=E({},_.props),te=_.key,he=void 0;if(L!=null)for(oe in L.ref!==void 0&&(he=void 0),L.key!==void 0&&(te=""+L.key),L)!F.call(L,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&L.ref===void 0||(Z[oe]=L[oe]);var oe=arguments.length-2;if(oe===1)Z.children=K;else if(1<oe){for(var Xe=Array(oe),ve=0;ve<oe;ve++)Xe[ve]=arguments[ve+2];Z.children=Xe}return I(_.type,te,void 0,void 0,he,Z)},be.createContext=function(_){return _={$$typeof:m,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:f,_context:_},_},be.createElement=function(_,L,K){var Z,te={},he=null;if(L!=null)for(Z in L.key!==void 0&&(he=""+L.key),L)F.call(L,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(te[Z]=L[Z]);var oe=arguments.length-2;if(oe===1)te.children=K;else if(1<oe){for(var Xe=Array(oe),ve=0;ve<oe;ve++)Xe[ve]=arguments[ve+2];te.children=Xe}if(_&&_.defaultProps)for(Z in oe=_.defaultProps,oe)te[Z]===void 0&&(te[Z]=oe[Z]);return I(_,he,void 0,void 0,null,te)},be.createRef=function(){return{current:null}},be.forwardRef=function(_){return{$$typeof:g,render:_}},be.isValidElement=ne,be.lazy=function(_){return{$$typeof:v,_payload:{_status:-1,_result:_},_init:ee}},be.memo=function(_,L){return{$$typeof:h,type:_,compare:L===void 0?null:L}},be.startTransition=function(_){var L=k.T,K={};k.T=K;try{var Z=_(),te=k.S;te!==null&&te(K,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(J,ae)}catch(he){ae(he)}finally{k.T=L}},be.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},be.use=function(_){return k.H.use(_)},be.useActionState=function(_,L,K){return k.H.useActionState(_,L,K)},be.useCallback=function(_,L){return k.H.useCallback(_,L)},be.useContext=function(_){return k.H.useContext(_)},be.useDebugValue=function(){},be.useDeferredValue=function(_,L){return k.H.useDeferredValue(_,L)},be.useEffect=function(_,L,K){var Z=k.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(_,L)},be.useId=function(){return k.H.useId()},be.useImperativeHandle=function(_,L,K){return k.H.useImperativeHandle(_,L,K)},be.useInsertionEffect=function(_,L){return k.H.useInsertionEffect(_,L)},be.useLayoutEffect=function(_,L){return k.H.useLayoutEffect(_,L)},be.useMemo=function(_,L){return k.H.useMemo(_,L)},be.useOptimistic=function(_,L){return k.H.useOptimistic(_,L)},be.useReducer=function(_,L,K){return k.H.useReducer(_,L,K)},be.useRef=function(_){return k.H.useRef(_)},be.useState=function(_){return k.H.useState(_)},be.useSyncExternalStore=function(_,L,K){return k.H.useSyncExternalStore(_,L,K)},be.useTransition=function(){return k.H.useTransition()},be.version="19.1.0",be}var up;function Ho(){return up||(up=1,rf.exports=vb()),rf.exports}var y=Ho();const xl=pb(y);var uf={exports:{}},Ni={},of={exports:{}},cf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function bb(){return op||(op=1,function(a){function r(U,ee){var ae=U.length;U.push(ee);e:for(;0<ae;){var J=ae-1>>>1,_=U[J];if(0<s(_,ee))U[J]=ee,U[ae]=_,ae=J;else break e}}function u(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var ee=U[0],ae=U.pop();if(ae!==ee){U[0]=ae;e:for(var J=0,_=U.length,L=_>>>1;J<L;){var K=2*(J+1)-1,Z=U[K],te=K+1,he=U[te];if(0>s(Z,ae))te<_&&0>s(he,Z)?(U[J]=he,U[te]=ae,J=te):(U[J]=Z,U[K]=ae,J=K);else if(te<_&&0>s(he,ae))U[J]=he,U[te]=ae,J=te;else break e}}return ee}function s(U,ee){var ae=U.sortIndex-ee.sortIndex;return ae!==0?ae:U.id-ee.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var m=Date,g=m.now();a.unstable_now=function(){return m.now()-g}}var p=[],h=[],v=1,x=null,S=3,N=!1,E=!1,D=!1,A=!1,T=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function Y(U){for(var ee=u(h);ee!==null;){if(ee.callback===null)o(h);else if(ee.startTime<=U)o(h),ee.sortIndex=ee.expirationTime,r(p,ee);else break;ee=u(h)}}function k(U){if(D=!1,Y(U),!E)if(u(p)!==null)E=!0,F||(F=!0,Be());else{var ee=u(h);ee!==null&&ze(k,ee.startTime-U)}}var F=!1,I=-1,re=5,ne=-1;function fe(){return A?!0:!(a.unstable_now()-ne<re)}function Ae(){if(A=!1,F){var U=a.unstable_now();ne=U;var ee=!0;try{e:{E=!1,D&&(D=!1,C(I),I=-1),N=!0;var ae=S;try{t:{for(Y(U),x=u(p);x!==null&&!(x.expirationTime>U&&fe());){var J=x.callback;if(typeof J=="function"){x.callback=null,S=x.priorityLevel;var _=J(x.expirationTime<=U);if(U=a.unstable_now(),typeof _=="function"){x.callback=_,Y(U),ee=!0;break t}x===u(p)&&o(p),Y(U)}else o(p);x=u(p)}if(x!==null)ee=!0;else{var L=u(h);L!==null&&ze(k,L.startTime-U),ee=!1}}break e}finally{x=null,S=ae,N=!1}ee=void 0}}finally{ee?Be():F=!1}}}var Be;if(typeof H=="function")Be=function(){H(Ae)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,pt=Oe.port2;Oe.port1.onmessage=Ae,Be=function(){pt.postMessage(null)}}else Be=function(){T(Ae,0)};function ze(U,ee){I=T(function(){U(a.unstable_now())},ee)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(U){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var ae=S;S=ee;try{return U()}finally{S=ae}},a.unstable_requestPaint=function(){A=!0},a.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ae=S;S=U;try{return ee()}finally{S=ae}},a.unstable_scheduleCallback=function(U,ee,ae){var J=a.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?J+ae:J):ae=J,U){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=ae+_,U={id:v++,callback:ee,priorityLevel:U,startTime:ae,expirationTime:_,sortIndex:-1},ae>J?(U.sortIndex=ae,r(h,U),u(p)===null&&U===u(h)&&(D?(C(I),I=-1):D=!0,ze(k,ae-J))):(U.sortIndex=_,r(p,U),E||N||(E=!0,F||(F=!0,Be()))),U},a.unstable_shouldYield=fe,a.unstable_wrapCallback=function(U){var ee=S;return function(){var ae=S;S=ee;try{return U.apply(this,arguments)}finally{S=ae}}}}(cf)),cf}var cp;function Sb(){return cp||(cp=1,of.exports=bb()),of.exports}var sf={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function xb(){if(sp)return zt;sp=1;var a=Ho();function r(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},s=Symbol.for("react.portal");function f(p,h,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:""+x,children:p,containerInfo:h,implementation:v}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,zt.createPortal=function(p,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(r(299));return f(p,h,null,v)},zt.flushSync=function(p){var h=m.T,v=o.p;try{if(m.T=null,o.p=2,p)return p()}finally{m.T=h,o.p=v,o.d.f()}},zt.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(p,h))},zt.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},zt.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var v=h.as,x=g(v,h.crossOrigin),S=typeof h.integrity=="string"?h.integrity:void 0,N=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?o.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:N}):v==="script"&&o.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:N,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},zt.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=g(h.as,h.crossOrigin);o.d.M(p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(p)},zt.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,x=g(v,h.crossOrigin);o.d.L(p,v,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},zt.preloadModule=function(p,h){if(typeof p=="string")if(h){var v=g(h.as,h.crossOrigin);o.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(p)},zt.requestFormReset=function(p){o.d.r(p)},zt.unstable_batchedUpdates=function(p,h){return p(h)},zt.useFormState=function(p,h,v){return m.H.useFormState(p,h,v)},zt.useFormStatus=function(){return m.H.useHostTransitionStatus()},zt.version="19.1.0",zt}var fp;function Oy(){if(fp)return sf.exports;fp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),sf.exports=xb(),sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function Eb(){if(dp)return Ni;dp=1;var a=Sb(),r=Ho(),u=Oy();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(o(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(l=i.return,l!==null){n=l;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return g(i),e;if(c===l)return g(i),t;c=c.sibling}throw Error(o(188))}if(n.return!==l.return)n=i,l=c;else{for(var d=!1,b=i.child;b;){if(b===n){d=!0,n=i,l=c;break}if(b===l){d=!0,l=i,n=c;break}b=b.sibling}if(!d){for(b=c.child;b;){if(b===n){d=!0,n=c,l=i;break}if(b===l){d=!0,l=c,n=i;break}b=b.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),H=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),Ae=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=Ae&&e[Ae]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case A:return"Profiler";case D:return"StrictMode";case k:return"Suspense";case F:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case H:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var ze=Array.isArray,U=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},J=[],_=-1;function L(e){return{current:e}}function K(e){0>_||(e.current=J[_],J[_]=null,_--)}function Z(e,t){_++,J[_]=e.current,e.current=t}var te=L(null),he=L(null),oe=L(null),Xe=L(null);function ve(e,t){switch(Z(oe,t),Z(he,e),Z(te,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?D0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=D0(t),e=B0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(te),Z(te,e)}function et(){K(te),K(he),K(oe)}function Ct(e){e.memoizedState!==null&&Z(Xe,e);var t=te.current,n=B0(t,e.type);t!==n&&(Z(he,e),Z(te,n))}function Qe(e){he.current===e&&(K(te),K(he)),Xe.current===e&&(K(Xe),Si._currentValue=ae)}var He=Object.prototype.hasOwnProperty,jt=a.unstable_scheduleCallback,Ra=a.unstable_cancelCallback,Ea=a.unstable_shouldYield,wt=a.unstable_requestPaint,Ke=a.unstable_now,Pt=a.unstable_getCurrentPriorityLevel,Lt=a.unstable_ImmediatePriority,tt=a.unstable_UserBlockingPriority,lt=a.unstable_NormalPriority,_a=a.unstable_LowPriority,Ml=a.unstable_IdlePriority,ke=a.log,Fn=a.unstable_setDisableYieldValue,za=null,bt=null;function Je(e){if(typeof ke=="function"&&Fn(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(za,e)}catch{}}var st=Math.clz32?Math.clz32:ge,ie=Math.log,se=Math.LN2;function ge(e){return e>>>=0,e===0?32:31-(ie(e)/se|0)|0}var Ce=256,Ze=4194304;function je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var i=0,c=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~c,l!==0?i=je(l):(d&=b,d!==0?i=je(d):n||(n=b&~e,n!==0&&(i=je(n))))):(b=l&~c,b!==0?i=je(b):d!==0?i=je(d):n||(n=l&~e,n!==0&&(i=je(n)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:i}function Ne(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zt(){var e=Ce;return Ce<<=1,(Ce&4194048)===0&&(Ce=256),e}function ia(){var e=Ze;return Ze<<=1,(Ze&62914560)===0&&(Ze=4194304),e}function ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ft(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vn(e,t,n,l,i,c){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,w=e.expirationTimes,R=e.hiddenUpdates;for(n=d&~n;0<n;){var P=31-st(n),V=1<<P;b[P]=0,w[P]=-1;var z=R[P];if(z!==null)for(R[P]=null,P=0;P<z.length;P++){var j=z[P];j!==null&&(j.lane&=-536870913)}n&=~V}l!==0&&oa(e,l,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(d&~t))}function oa(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-st(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-st(n),i=1<<l;i&t|e[l]&t&&(e[l]|=t),n&=~i}}function Al(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ha(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kn(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:J0(e.type))}function wa(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var ca=Math.random().toString(36).slice(2),at="__reactFiber$"+ca,Dt="__reactProps$"+ca,$a="__reactContainer$"+ca,Ol="__reactEvents$"+ca,Tr="__reactListeners$"+ca,sa="__reactHandles$"+ca,Qa="__reactResources$"+ca,Bt="__reactMarker$"+ca;function Mr(e){delete e[at],delete e[Dt],delete e[Ol],delete e[Tr],delete e[sa]}function Za(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$a]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=j0(e);e!==null;){if(n=e[at])return n;e=j0(e)}return t}e=n,n=e.parentNode}return null}function fa(e){if(e=e[at]||e[$a]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Fa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function bn(e){var t=e[Qa];return t||(t=e[Qa]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[Bt]=!0}var Fi=new Set,Ki={};function Na(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Ki[e]=t,e=0;e<t.length;e++)Fi.add(t[e])}var Io=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wi={},Ar={};function ec(e){return He.call(Ar,e)?!0:He.call(Wi,e)?!1:Io.test(e)?Ar[e]=!0:(Wi[e]=!0,!1)}function Sn(e,t,n){if(ec(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Cl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ta(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Or,xn;function Ma(e){if(Or===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Or=t&&t[1]||"",xn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Or+e+xn}var Cr=!1;function Dl(e,t){if(!e||Cr)return"";Cr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(j){var z=j}Reflect.construct(e,[],V)}else{try{V.call()}catch(j){z=j}e.call(V.prototype)}}else{try{throw Error()}catch(j){z=j}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),d=c[0],b=c[1];if(d&&b){var w=d.split(`
`),R=b.split(`
`);for(i=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;i<R.length&&!R[i].includes("DetermineComponentFrameRoot");)i++;if(l===w.length||i===R.length)for(l=w.length-1,i=R.length-1;1<=l&&0<=i&&w[l]!==R[i];)i--;for(;1<=l&&0<=i;l--,i--)if(w[l]!==R[i]){if(l!==1||i!==1)do if(l--,i--,0>i||w[l]!==R[i]){var P=`
`+w[l].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=l&&0<=i);break}}}finally{Cr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ma(n):""}function tc(e){switch(e.tag){case 26:case 27:case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return Dl(e.type,!1);case 11:return Dl(e.type.render,!1);case 1:return Dl(e.type,!0);case 31:return Ma("Activity");default:return""}}function Ji(e){try{var t="";do t+=tc(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ii(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ac(e){var t=Ii(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){l=""+d,c.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(d){l=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bl(e){e._valueTracker||(e._valueTracker=ac(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ii(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tu=/[\n"\\]/g;function W(e){return e.replace(tu,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function de(e,t,n,l,i,c,d,b){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ge(e,d,$t(t)):n!=null?Ge(e,d,$t(n)):l!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$t(b):e.removeAttribute("name")}function ue(e,t,n,l,i,c,d,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function Ge(e,t,n){t==="number"&&Wn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ut(e,t,n,l){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&l&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function En(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function ja(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(ze(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Ut(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var au=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dr(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||au.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Rl(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&n[i]!==l&&Dr(e,i,l)}else for(var c in t)t.hasOwnProperty(c)&&Dr(e,c,t[c])}function nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nu(e){return mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var lc=null;function rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Hl=null;function Rd(e){var t=fa(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(de(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+W(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var i=l[Dt]||null;if(!i)throw Error(o(90));de(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&eu(l)}break e;case"textarea":En(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ut(e,!!n.multiple,t,!1)}}}var ic=!1;function zd(e,t,n){if(ic)return e(t,n);ic=!0;try{var l=e(t);return l}finally{if(ic=!1,(zl!==null||Hl!==null)&&(qu(),zl&&(t=zl,e=Hl,Hl=zl=null,Rd(t),e)))for(t=0;t<e.length;t++)Rd(e[t])}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Dt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Ka=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=!1;if(Ka)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){uc=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{uc=!1}var _n=null,oc=null,lu=null;function Hd(){if(lu)return lu;var e,t=oc,n=t.length,l,i="value"in _n?_n.value:_n.textContent,c=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(l=1;l<=d&&t[n-l]===i[c-l];l++);return lu=i.slice(e,1<l?1-l:void 0)}function ru(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function iu(){return!0}function jd(){return!1}function qt(e){function t(n,l,i,c,d){this._reactName=n,this._targetInst=i,this.type=l,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?iu:jd,this.isPropagationStopped=jd,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=qt(Jn),zr=v({},Jn,{view:0,detail:0}),pv=qt(zr),cc,sc,Hr,ou=v({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(cc=e.screenX-Hr.screenX,sc=e.screenY-Hr.screenY):sc=cc=0,Hr=e),cc)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),Ld=qt(ou),yv=v({},ou,{dataTransfer:0}),gv=qt(yv),vv=v({},zr,{relatedTarget:0}),fc=qt(vv),bv=v({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Sv=qt(bv),xv=v({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ev=qt(xv),_v=v({},Jn,{data:0}),Ud=qt(_v),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nv[e])?!!t[e]:!1}function dc(){return Tv}var Mv=v({},zr,{key:function(e){if(e.key){var t=wv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ru(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?ru(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ru(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Av=qt(Mv),Ov=v({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=qt(Ov),Cv=v({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),Dv=qt(Cv),Bv=v({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=qt(Bv),zv=v({},ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=qt(zv),jv=v({},Jn,{newState:0,oldState:0}),Lv=qt(jv),Uv=[9,13,27,32],hc=Ka&&"CompositionEvent"in window,jr=null;Ka&&"documentMode"in document&&(jr=document.documentMode);var kv=Ka&&"TextEvent"in window&&!jr,Pd=Ka&&(!hc||jr&&8<jr&&11>=jr),qd=" ",Yd=!1;function Gd(e,t){switch(e){case"keyup":return Uv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function Pv(e,t){switch(e){case"compositionend":return Vd(t);case"keypress":return t.which!==32?null:(Yd=!0,qd);case"textInput":return e=t.data,e===qd&&Yd?null:e;default:return null}}function qv(e,t){if(jl)return e==="compositionend"||!hc&&Gd(e,t)?(e=Hd(),lu=oc=_n=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pd&&t.locale!=="ko"?null:t.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yv[e.type]:t==="textarea"}function Qd(e,t,n,l){zl?Hl?Hl.push(l):Hl=[l]:zl=l,t=Zu(t,"onChange"),0<t.length&&(n=new uu("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Lr=null,Ur=null;function Gv(e){T0(e,0)}function cu(e){var t=Fa(e);if(eu(t))return e}function Zd(e,t){if(e==="change")return t}var Fd=!1;if(Ka){var mc;if(Ka){var pc="oninput"in document;if(!pc){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),pc=typeof Kd.oninput=="function"}mc=pc}else mc=!1;Fd=mc&&(!document.documentMode||9<document.documentMode)}function Wd(){Lr&&(Lr.detachEvent("onpropertychange",Jd),Ur=Lr=null)}function Jd(e){if(e.propertyName==="value"&&cu(Ur)){var t=[];Qd(t,Ur,e,rc(e)),zd(Gv,t)}}function Vv(e,t,n){e==="focusin"?(Wd(),Lr=t,Ur=n,Lr.attachEvent("onpropertychange",Jd)):e==="focusout"&&Wd()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cu(Ur)}function Qv(e,t){if(e==="click")return cu(t)}function Zv(e,t){if(e==="input"||e==="change")return cu(t)}function Fv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:Fv;function kr(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var i=n[l];if(!He.call(t,i)||!Kt(e[i],t[i]))return!1}return!0}function Id(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eh(e,t){var n=Id(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Id(n)}}function th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ah(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wn(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kv=Ka&&"documentMode"in document&&11>=document.documentMode,Ll=null,gc=null,Pr=null,vc=!1;function nh(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||Ll==null||Ll!==Wn(l)||(l=Ll,"selectionStart"in l&&yc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Pr&&kr(Pr,l)||(Pr=l,l=Zu(gc,"onSelect"),0<l.length&&(t=new uu("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Ll)))}function In(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ul={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionrun:In("Transition","TransitionRun"),transitionstart:In("Transition","TransitionStart"),transitioncancel:In("Transition","TransitionCancel"),transitionend:In("Transition","TransitionEnd")},bc={},lh={};Ka&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete Ul.animationend.animation,delete Ul.animationiteration.animation,delete Ul.animationstart.animation),"TransitionEvent"in window||delete Ul.transitionend.transition);function el(e){if(bc[e])return bc[e];if(!Ul[e])return e;var t=Ul[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lh)return bc[e]=t[n];return e}var rh=el("animationend"),ih=el("animationiteration"),uh=el("animationstart"),Wv=el("transitionrun"),Jv=el("transitionstart"),Iv=el("transitioncancel"),oh=el("transitionend"),ch=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function Aa(e,t){ch.set(e,t),Na(t,[e])}var sh=new WeakMap;function ha(e,t){if(typeof e=="object"&&e!==null){var n=sh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ji(t)},sh.set(e,t),t)}return{value:e,source:t,stack:Ji(t)}}var ma=[],kl=0,xc=0;function su(){for(var e=kl,t=xc=kl=0;t<e;){var n=ma[t];ma[t++]=null;var l=ma[t];ma[t++]=null;var i=ma[t];ma[t++]=null;var c=ma[t];if(ma[t++]=null,l!==null&&i!==null){var d=l.pending;d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i}c!==0&&fh(n,i,c)}}function fu(e,t,n,l){ma[kl++]=e,ma[kl++]=t,ma[kl++]=n,ma[kl++]=l,xc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ec(e,t,n,l){return fu(e,t,n,l),du(e)}function Pl(e,t){return fu(e,null,null,t),du(e)}function fh(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var i=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-st(n),e=c.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=n|536870912),c):null}function du(e){if(50<di)throw di=0,Ms=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ql={};function e1(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(e,t,n,l){return new e1(e,t,n,l)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wa(e,t){var n=e.alternate;return n===null?(n=Wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function dh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hu(e,t,n,l,i,c){var d=0;if(l=e,typeof e=="function")_c(e)&&(d=1);else if(typeof e=="string")d=ab(e,n,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Wt(31,n,t,i),e.elementType=ne,e.lanes=c,e;case E:return tl(n.children,i,c,t);case D:d=8,i|=24;break;case A:return e=Wt(12,n,t,i|2),e.elementType=A,e.lanes=c,e;case k:return e=Wt(13,n,t,i),e.elementType=k,e.lanes=c,e;case F:return e=Wt(19,n,t,i),e.elementType=F,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:case H:d=10;break e;case C:d=9;break e;case Y:d=11;break e;case I:d=14;break e;case re:d=16,l=null;break e}d=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Wt(d,n,t,i),t.elementType=e,t.type=l,t.lanes=c,t}function tl(e,t,n,l){return e=Wt(7,e,l,t),e.lanes=n,e}function wc(e,t,n){return e=Wt(6,e,null,t),e.lanes=n,e}function $c(e,t,n){return t=Wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yl=[],Gl=0,mu=null,pu=0,pa=[],ya=0,al=null,Ja=1,Ia="";function nl(e,t){Yl[Gl++]=pu,Yl[Gl++]=mu,mu=e,pu=t}function hh(e,t,n){pa[ya++]=Ja,pa[ya++]=Ia,pa[ya++]=al,al=e;var l=Ja;e=Ia;var i=32-st(l)-1;l&=~(1<<i),n+=1;var c=32-st(t)+i;if(30<c){var d=i-i%5;c=(l&(1<<d)-1).toString(32),l>>=d,i-=d,Ja=1<<32-st(t)+i|n<<i|l,Ia=c+e}else Ja=1<<c|n<<i|l,Ia=e}function Nc(e){e.return!==null&&(nl(e,1),hh(e,1,0))}function Tc(e){for(;e===mu;)mu=Yl[--Gl],Yl[Gl]=null,pu=Yl[--Gl],Yl[Gl]=null;for(;e===al;)al=pa[--ya],pa[ya]=null,Ia=pa[--ya],pa[ya]=null,Ja=pa[--ya],pa[ya]=null}var kt=null,rt=null,De=!1,ll=null,La=!1,Mc=Error(o(519));function rl(e){var t=Error(o(418,""));throw Gr(ha(t,e)),Mc}function mh(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[at]=e,t[Dt]=l,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<mi.length;n++)we(mi[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),ue(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Bl(t);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),ja(t,l.value,l.defaultValue,l.children),Bl(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||C0(t.textContent,n)?(l.popover!=null&&(we("beforetoggle",t),we("toggle",t)),l.onScroll!=null&&we("scroll",t),l.onScrollEnd!=null&&we("scrollend",t),l.onClick!=null&&(t.onclick=Fu),t=!0):t=!1,t||rl(e)}function ph(e){for(kt=e.return;kt;)switch(kt.tag){case 5:case 13:La=!1;return;case 27:case 3:La=!0;return;default:kt=kt.return}}function qr(e){if(e!==kt)return!1;if(!De)return ph(e),De=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gs(e.type,e.memoizedProps)),n=!n),n&&rt&&rl(e),ph(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){rt=Ca(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}rt=null}}else t===27?(t=rt,Un(e.type)?(e=Zs,Zs=null,rt=e):rt=t):rt=kt?Ca(e.stateNode.nextSibling):null;return!0}function Yr(){rt=kt=null,De=!1}function yh(){var e=ll;return e!==null&&(Vt===null?Vt=e:Vt.push.apply(Vt,e),ll=null),e}function Gr(e){ll===null?ll=[e]:ll.push(e)}var Ac=L(null),il=null,en=null;function wn(e,t,n){Z(Ac,t._currentValue),t._currentValue=n}function tn(e){e._currentValue=Ac.current,K(Ac)}function Oc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Cc(e,t,n,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var d=i.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=i;for(var w=0;w<t.length;w++)if(b.context===t[w]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),Oc(c.return,n,e),l||(d=null);break e}c=b.next}}else if(i.tag===18){if(d=i.return,d===null)throw Error(o(341));d.lanes|=n,c=d.alternate,c!==null&&(c.lanes|=n),Oc(d,n,e),d=null}else d=i.child;if(d!==null)d.return=i;else for(d=i;d!==null;){if(d===e){d=null;break}if(i=d.sibling,i!==null){i.return=d.return,d=i;break}d=d.return}i=d}}function Vr(e,t,n,l){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var d=i.alternate;if(d===null)throw Error(o(387));if(d=d.memoizedProps,d!==null){var b=i.type;Kt(i.pendingProps.value,d.value)||(e!==null?e.push(b):e=[b])}}else if(i===Xe.current){if(d=i.alternate,d===null)throw Error(o(387));d.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Si):e=[Si])}i=i.return}e!==null&&Cc(t,e,n,l),t.flags|=262144}function yu(e){for(e=e.firstContext;e!==null;){if(!Kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ul(e){il=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rt(e){return gh(il,e)}function gu(e,t){return il===null&&ul(e),gh(e,t)}function gh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},en===null){if(e===null)throw Error(o(308));en=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else en=en.next=t;return n}var t1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},a1=a.unstable_scheduleCallback,n1=a.unstable_NormalPriority,yt={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dc(){return{controller:new t1,data:new Map,refCount:0}}function Xr(e){e.refCount--,e.refCount===0&&a1(n1,function(){e.controller.abort()})}var Qr=null,Bc=0,Vl=0,Xl=null;function l1(e,t){if(Qr===null){var n=Qr=[];Bc=0,Vl=zs(),Xl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Bc++,t.then(vh,vh),t}function vh(){if(--Bc===0&&Qr!==null){Xl!==null&&(Xl.status="fulfilled");var e=Qr;Qr=null,Vl=0,Xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function r1(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),l}var bh=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&l1(e,t),bh!==null&&bh(e,t)};var ol=L(null);function Rc(){var e=ol.current;return e!==null?e:Fe.pooledCache}function vu(e,t){t===null?Z(ol,ol.current):Z(ol,t.pool)}function Sh(){var e=Rc();return e===null?null:{parent:yt._currentValue,pool:e}}var Zr=Error(o(460)),xh=Error(o(474)),bu=Error(o(542)),zc={then:function(){}};function Eh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Su(){}function _h(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Su,Su),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$h(e),e;default:if(typeof t.status=="string")t.then(Su,Su);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$h(e),e}throw Fr=t,Zr}}var Fr=null;function wh(){if(Fr===null)throw Error(o(459));var e=Fr;return Fr=null,e}function $h(e){if(e===Zr||e===bu)throw Error(o(483))}var $n=!1;function Hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=du(e),fh(e,null,n),t}return fu(e,l,t,n),du(e)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zi(e,n)}}function Lc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=d:c=c.next=d,n=n.next}while(n!==null);c===null?i=c=t:c=c.next=t}else i=c=t;n={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Uc=!1;function Wr(){if(Uc){var e=Xl;if(e!==null)throw e}}function Jr(e,t,n,l){Uc=!1;var i=e.updateQueue;$n=!1;var c=i.firstBaseUpdate,d=i.lastBaseUpdate,b=i.shared.pending;if(b!==null){i.shared.pending=null;var w=b,R=w.next;w.next=null,d===null?c=R:d.next=R,d=w;var P=e.alternate;P!==null&&(P=P.updateQueue,b=P.lastBaseUpdate,b!==d&&(b===null?P.firstBaseUpdate=R:b.next=R,P.lastBaseUpdate=w))}if(c!==null){var V=i.baseState;d=0,P=R=w=null,b=c;do{var z=b.lane&-536870913,j=z!==b.lane;if(j?(Te&z)===z:(l&z)===z){z!==0&&z===Vl&&(Uc=!0),P!==null&&(P=P.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ye=e,me=b;z=t;var Ye=n;switch(me.tag){case 1:if(ye=me.payload,typeof ye=="function"){V=ye.call(Ye,V,z);break e}V=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=me.payload,z=typeof ye=="function"?ye.call(Ye,V,z):ye,z==null)break e;V=v({},V,z);break e;case 2:$n=!0}}z=b.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=i.callbacks,j===null?i.callbacks=[z]:j.push(z))}else j={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},P===null?(R=P=j,w=V):P=P.next=j,d|=z;if(b=b.next,b===null){if(b=i.shared.pending,b===null)break;j=b,b=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);P===null&&(w=V),i.baseState=w,i.firstBaseUpdate=R,i.lastBaseUpdate=P,c===null&&(i.shared.lanes=0),zn|=d,e.lanes=d,e.memoizedState=V}}function Nh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Th(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Nh(n[e],t)}var Ql=L(null),xu=L(0);function Mh(e,t){e=cn,Z(xu,e),Z(Ql,t),cn=e|t.baseLanes}function kc(){Z(xu,cn),Z(Ql,Ql.current)}function Pc(){cn=xu.current,K(Ql),K(xu)}var Mn=0,xe=null,Pe=null,dt=null,Eu=!1,Zl=!1,cl=!1,_u=0,Ir=0,Fl=null,i1=0;function ot(){throw Error(o(321))}function qc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function Yc(e,t,n,l,i,c){return Mn=c,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?fm:dm,cl=!1,c=n(l,i),cl=!1,Zl&&(c=Oh(t,n,l,i)),Ah(e),c}function Ah(e){U.H=Au;var t=Pe!==null&&Pe.next!==null;if(Mn=0,dt=Pe=xe=null,Eu=!1,Ir=0,Fl=null,t)throw Error(o(300));e===null||St||(e=e.dependencies,e!==null&&yu(e)&&(St=!0))}function Oh(e,t,n,l){xe=e;var i=0;do{if(Zl&&(Fl=null),Ir=0,Zl=!1,25<=i)throw Error(o(301));if(i+=1,dt=Pe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}U.H=h1,c=t(n,l)}while(Zl);return c}function u1(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?ei(t):t,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(xe.flags|=1024),t}function Gc(){var e=_u!==0;return _u=0,e}function Vc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xc(e){if(Eu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Eu=!1}Mn=0,dt=Pe=xe=null,Zl=!1,Ir=_u=0,Fl=null}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?xe.memoizedState=dt=e:dt=dt.next=e,dt}function ht(){if(Pe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=dt===null?xe.memoizedState:dt.next;if(t!==null)dt=t,Pe=e;else{if(e===null)throw xe.alternate===null?Error(o(467)):Error(o(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},dt===null?xe.memoizedState=dt=e:dt=dt.next=e}return dt}function Qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ei(e){var t=Ir;return Ir+=1,Fl===null&&(Fl=[]),e=_h(Fl,e,t),t=xe,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?fm:dm),e}function wu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ei(e);if(e.$$typeof===H)return Rt(e)}throw Error(o(438,String(e)))}function Zc(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qc(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=fe;return t.index++,n}function an(e,t){return typeof t=="function"?t(e):t}function $u(e){var t=ht();return Fc(t,Pe,e)}function Fc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var i=e.baseQueue,c=l.pending;if(c!==null){if(i!==null){var d=i.next;i.next=c.next,c.next=d}t.baseQueue=i=c,l.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var b=d=null,w=null,R=t,P=!1;do{var V=R.lane&-536870913;if(V!==R.lane?(Te&V)===V:(Mn&V)===V){var z=R.revertLane;if(z===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),V===Vl&&(P=!0);else if((Mn&z)===z){R=R.next,z===Vl&&(P=!0);continue}else V={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(b=w=V,d=c):w=w.next=V,xe.lanes|=z,zn|=z;V=R.action,cl&&n(c,V),c=R.hasEagerState?R.eagerState:n(c,V)}else z={lane:V,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(b=w=z,d=c):w=w.next=z,xe.lanes|=V,zn|=V;R=R.next}while(R!==null&&R!==t);if(w===null?d=c:w.next=b,!Kt(c,e.memoizedState)&&(St=!0,P&&(n=Xl,n!==null)))throw n;e.memoizedState=c,e.baseState=d,e.baseQueue=w,l.lastRenderedState=c}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Kc(e){var t=ht(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,i=n.pending,c=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do c=e(c,d.action),d=d.next;while(d!==i);Kt(c,t.memoizedState)||(St=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,l]}function Ch(e,t,n){var l=xe,i=ht(),c=De;if(c){if(n===void 0)throw Error(o(407));n=n()}else n=t();var d=!Kt((Pe||i).memoizedState,n);d&&(i.memoizedState=n,St=!0),i=i.queue;var b=Rh.bind(null,l,i,e);if(ti(2048,8,b,[e]),i.getSnapshot!==t||d||dt!==null&&dt.memoizedState.tag&1){if(l.flags|=2048,Kl(9,Nu(),Bh.bind(null,l,i,n,t),null),Fe===null)throw Error(o(349));c||(Mn&124)!==0||Dh(l,t,n)}return n}function Dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=Qc(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bh(e,t,n,l){t.value=n,t.getSnapshot=l,zh(t)&&Hh(e)}function Rh(e,t,n){return n(function(){zh(t)&&Hh(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Hh(e){var t=Pl(e,2);t!==null&&aa(t,e,2)}function Wc(e){var t=Yt();if(typeof e=="function"){var n=e;if(e=n(),cl){Je(!0);try{n()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:e},t}function jh(e,t,n,l){return e.baseState=n,Fc(e,Pe,typeof l=="function"?l:an)}function o1(e,t,n,l,i){if(Mu(e))throw Error(o(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){c.listeners.push(d)}};U.T!==null?n(!0):c.isTransition=!1,l(c),n=t.pending,n===null?(c.next=t.pending=c,Lh(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Lh(e,t){var n=t.action,l=t.payload,i=e.state;if(t.isTransition){var c=U.T,d={};U.T=d;try{var b=n(i,l),w=U.S;w!==null&&w(d,b),Uh(e,t,b)}catch(R){Jc(e,t,R)}finally{U.T=c}}else try{c=n(i,l),Uh(e,t,c)}catch(R){Jc(e,t,R)}}function Uh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){kh(e,t,l)},function(l){return Jc(e,t,l)}):kh(e,t,n)}function kh(e,t,n){t.status="fulfilled",t.value=n,Ph(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Lh(e,n)))}function Jc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ph(t),t=t.next;while(t!==l)}e.action=null}function Ph(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function qh(e,t){return t}function Yh(e,t){if(De){var n=Fe.formState;if(n!==null){e:{var l=xe;if(De){if(rt){t:{for(var i=rt,c=La;i.nodeType!==8;){if(!c){i=null;break t}if(i=Ca(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){rt=Ca(i.nextSibling),l=i.data==="F!";break e}}rl(l)}l=!1}l&&(t=n[0])}}return n=Yt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qh,lastRenderedState:t},n.queue=l,n=om.bind(null,xe,l),l.dispatch=n,l=Wc(!1),c=ns.bind(null,xe,!1,l.queue),l=Yt(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,n=o1.bind(null,xe,i,c,n),i.dispatch=n,l.memoizedState=e,[t,n,!1]}function Gh(e){var t=ht();return Vh(t,Pe,e)}function Vh(e,t,n){if(t=Fc(e,t,qh)[0],e=$u(an)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ei(t)}catch(d){throw d===Zr?bu:d}else l=t;t=ht();var i=t.queue,c=i.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,Kl(9,Nu(),c1.bind(null,i,n),null)),[l,c,e]}function c1(e,t){e.action=t}function Xh(e){var t=ht(),n=Pe;if(n!==null)return Vh(t,n,e);ht(),t=t.memoizedState,n=ht();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Kl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Qc(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Nu(){return{destroy:void 0,resource:void 0}}function Qh(){return ht().memoizedState}function Tu(e,t,n,l){var i=Yt();l=l===void 0?null:l,xe.flags|=e,i.memoizedState=Kl(1|t,Nu(),n,l)}function ti(e,t,n,l){var i=ht();l=l===void 0?null:l;var c=i.memoizedState.inst;Pe!==null&&l!==null&&qc(l,Pe.memoizedState.deps)?i.memoizedState=Kl(t,c,n,l):(xe.flags|=e,i.memoizedState=Kl(1|t,c,n,l))}function Zh(e,t){Tu(8390656,8,e,t)}function Fh(e,t){ti(2048,8,e,t)}function Kh(e,t){return ti(4,2,e,t)}function Wh(e,t){return ti(4,4,e,t)}function Jh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ih(e,t,n){n=n!=null?n.concat([e]):null,ti(4,4,Jh.bind(null,t,e),n)}function Ic(){}function em(e,t){var n=ht();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&qc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function tm(e,t){var n=ht();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&qc(t,l[1]))return l[0];if(l=e(),cl){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[l,t],l}function es(e,t,n){return n===void 0||(Mn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=l0(),xe.lanes|=e,zn|=e,n)}function am(e,t,n,l){return Kt(n,t)?n:Ql.current!==null?(e=es(e,n,l),Kt(e,t)||(St=!0),e):(Mn&42)===0?(St=!0,e.memoizedState=n):(e=l0(),xe.lanes|=e,zn|=e,t)}function nm(e,t,n,l,i){var c=ee.p;ee.p=c!==0&&8>c?c:8;var d=U.T,b={};U.T=b,ns(e,!1,t,n);try{var w=i(),R=U.S;if(R!==null&&R(b,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var P=r1(w,l);ai(e,t,P,ta(e))}else ai(e,t,l,ta(e))}catch(V){ai(e,t,{then:function(){},status:"rejected",reason:V},ta())}finally{ee.p=c,U.T=d}}function s1(){}function ts(e,t,n,l){if(e.tag!==5)throw Error(o(476));var i=lm(e).queue;nm(e,i,t,ae,n===null?s1:function(){return rm(e),n(l)})}function lm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rm(e){var t=lm(e).next.queue;ai(e,t,{},ta())}function as(){return Rt(Si)}function im(){return ht().memoizedState}function um(){return ht().memoizedState}function f1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ta();e=Nn(n);var l=Tn(t,e,n);l!==null&&(aa(l,t,n),Kr(l,t,n)),t={cache:Dc()},e.payload=t;return}t=t.return}}function d1(e,t,n){var l=ta();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e)?cm(t,n):(n=Ec(e,t,n,l),n!==null&&(aa(n,e,l),sm(n,t,l)))}function om(e,t,n){var l=ta();ai(e,t,n,l)}function ai(e,t,n,l){var i={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))cm(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var d=t.lastRenderedState,b=c(d,n);if(i.hasEagerState=!0,i.eagerState=b,Kt(b,d))return fu(e,t,i,0),Fe===null&&su(),!1}catch{}finally{}if(n=Ec(e,t,i,l),n!==null)return aa(n,e,l),sm(n,t,l),!0}return!1}function ns(e,t,n,l){if(l={lane:2,revertLane:zs(),action:l,hasEagerState:!1,eagerState:null,next:null},Mu(e)){if(t)throw Error(o(479))}else t=Ec(e,n,l,2),t!==null&&aa(t,e,2)}function Mu(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function cm(e,t){Zl=Eu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sm(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Zi(e,n)}}var Au={readContext:Rt,use:wu,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot},fm={readContext:Rt,use:wu,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:Zh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Tu(4194308,4,Jh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tu(4194308,4,e,t)},useInsertionEffect:function(e,t){Tu(4,2,e,t)},useMemo:function(e,t){var n=Yt();t=t===void 0?null:t;var l=e();if(cl){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Yt();if(n!==void 0){var i=n(t);if(cl){Je(!0);try{n(t)}finally{Je(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=d1.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Wc(e);var t=e.queue,n=om.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ic,useDeferredValue:function(e,t){var n=Yt();return es(n,e,t)},useTransition:function(){var e=Wc(!1);return e=nm.bind(null,xe,e.queue,!0,!1),Yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=xe,i=Yt();if(De){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Fe===null)throw Error(o(349));(Te&124)!==0||Dh(l,t,n)}i.memoizedState=n;var c={value:n,getSnapshot:t};return i.queue=c,Zh(Rh.bind(null,l,c,e),[e]),l.flags|=2048,Kl(9,Nu(),Bh.bind(null,l,c,n,t),null),n},useId:function(){var e=Yt(),t=Fe.identifierPrefix;if(De){var n=Ia,l=Ja;n=(l&~(1<<32-st(l)-1)).toString(32)+n,t="«"+t+"R"+n,n=_u++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=i1++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:as,useFormState:Yh,useActionState:Yh,useOptimistic:function(e){var t=Yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ns.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Zc,useCacheRefresh:function(){return Yt().memoizedState=f1.bind(null,xe)}},dm={readContext:Rt,use:wu,useCallback:em,useContext:Rt,useEffect:Fh,useImperativeHandle:Ih,useInsertionEffect:Kh,useLayoutEffect:Wh,useMemo:tm,useReducer:$u,useRef:Qh,useState:function(){return $u(an)},useDebugValue:Ic,useDeferredValue:function(e,t){var n=ht();return am(n,Pe.memoizedState,e,t)},useTransition:function(){var e=$u(an)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Ch,useId:im,useHostTransitionStatus:as,useFormState:Gh,useActionState:Gh,useOptimistic:function(e,t){var n=ht();return jh(n,Pe,e,t)},useMemoCache:Zc,useCacheRefresh:um},h1={readContext:Rt,use:wu,useCallback:em,useContext:Rt,useEffect:Fh,useImperativeHandle:Ih,useInsertionEffect:Kh,useLayoutEffect:Wh,useMemo:tm,useReducer:Kc,useRef:Qh,useState:function(){return Kc(an)},useDebugValue:Ic,useDeferredValue:function(e,t){var n=ht();return Pe===null?es(n,e,t):am(n,Pe.memoizedState,e,t)},useTransition:function(){var e=Kc(an)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:ei(e),t]},useSyncExternalStore:Ch,useId:im,useHostTransitionStatus:as,useFormState:Xh,useActionState:Xh,useOptimistic:function(e,t){var n=ht();return Pe!==null?jh(n,Pe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Zc,useCacheRefresh:um},Wl=null,ni=0;function Ou(e){var t=ni;return ni+=1,Wl===null&&(Wl=[]),_h(Wl,e,t)}function li(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cu(e,t){throw t.$$typeof===x?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hm(e){var t=e._init;return t(e._payload)}function mm(e){function t(O,M){if(e){var B=O.deletions;B===null?(O.deletions=[M],O.flags|=16):B.push(M)}}function n(O,M){if(!e)return null;for(;M!==null;)t(O,M),M=M.sibling;return null}function l(O){for(var M=new Map;O!==null;)O.key!==null?M.set(O.key,O):M.set(O.index,O),O=O.sibling;return M}function i(O,M){return O=Wa(O,M),O.index=0,O.sibling=null,O}function c(O,M,B){return O.index=B,e?(B=O.alternate,B!==null?(B=B.index,B<M?(O.flags|=67108866,M):B):(O.flags|=67108866,M)):(O.flags|=1048576,M)}function d(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function b(O,M,B,q){return M===null||M.tag!==6?(M=wc(B,O.mode,q),M.return=O,M):(M=i(M,B),M.return=O,M)}function w(O,M,B,q){var le=B.type;return le===E?P(O,M,B.props.children,q,B.key):M!==null&&(M.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===re&&hm(le)===M.type)?(M=i(M,B.props),li(M,B),M.return=O,M):(M=hu(B.type,B.key,B.props,null,O.mode,q),li(M,B),M.return=O,M)}function R(O,M,B,q){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=$c(B,O.mode,q),M.return=O,M):(M=i(M,B.children||[]),M.return=O,M)}function P(O,M,B,q,le){return M===null||M.tag!==7?(M=tl(B,O.mode,q,le),M.return=O,M):(M=i(M,B),M.return=O,M)}function V(O,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=wc(""+M,O.mode,B),M.return=O,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return B=hu(M.type,M.key,M.props,null,O.mode,B),li(B,M),B.return=O,B;case N:return M=$c(M,O.mode,B),M.return=O,M;case re:var q=M._init;return M=q(M._payload),V(O,M,B)}if(ze(M)||Be(M))return M=tl(M,O.mode,B,null),M.return=O,M;if(typeof M.then=="function")return V(O,Ou(M),B);if(M.$$typeof===H)return V(O,gu(O,M),B);Cu(O,M)}return null}function z(O,M,B,q){var le=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return le!==null?null:b(O,M,""+B,q);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case S:return B.key===le?w(O,M,B,q):null;case N:return B.key===le?R(O,M,B,q):null;case re:return le=B._init,B=le(B._payload),z(O,M,B,q)}if(ze(B)||Be(B))return le!==null?null:P(O,M,B,q,null);if(typeof B.then=="function")return z(O,M,Ou(B),q);if(B.$$typeof===H)return z(O,M,gu(O,B),q);Cu(O,B)}return null}function j(O,M,B,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return O=O.get(B)||null,b(M,O,""+q,le);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return O=O.get(q.key===null?B:q.key)||null,w(M,O,q,le);case N:return O=O.get(q.key===null?B:q.key)||null,R(M,O,q,le);case re:var Ee=q._init;return q=Ee(q._payload),j(O,M,B,q,le)}if(ze(q)||Be(q))return O=O.get(B)||null,P(M,O,q,le,null);if(typeof q.then=="function")return j(O,M,B,Ou(q),le);if(q.$$typeof===H)return j(O,M,B,gu(M,q),le);Cu(M,q)}return null}function ye(O,M,B,q){for(var le=null,Ee=null,ce=M,pe=M=0,Et=null;ce!==null&&pe<B.length;pe++){ce.index>pe?(Et=ce,ce=null):Et=ce.sibling;var Me=z(O,ce,B[pe],q);if(Me===null){ce===null&&(ce=Et);break}e&&ce&&Me.alternate===null&&t(O,ce),M=c(Me,M,pe),Ee===null?le=Me:Ee.sibling=Me,Ee=Me,ce=Et}if(pe===B.length)return n(O,ce),De&&nl(O,pe),le;if(ce===null){for(;pe<B.length;pe++)ce=V(O,B[pe],q),ce!==null&&(M=c(ce,M,pe),Ee===null?le=ce:Ee.sibling=ce,Ee=ce);return De&&nl(O,pe),le}for(ce=l(ce);pe<B.length;pe++)Et=j(ce,O,pe,B[pe],q),Et!==null&&(e&&Et.alternate!==null&&ce.delete(Et.key===null?pe:Et.key),M=c(Et,M,pe),Ee===null?le=Et:Ee.sibling=Et,Ee=Et);return e&&ce.forEach(function(Gn){return t(O,Gn)}),De&&nl(O,pe),le}function me(O,M,B,q){if(B==null)throw Error(o(151));for(var le=null,Ee=null,ce=M,pe=M=0,Et=null,Me=B.next();ce!==null&&!Me.done;pe++,Me=B.next()){ce.index>pe?(Et=ce,ce=null):Et=ce.sibling;var Gn=z(O,ce,Me.value,q);if(Gn===null){ce===null&&(ce=Et);break}e&&ce&&Gn.alternate===null&&t(O,ce),M=c(Gn,M,pe),Ee===null?le=Gn:Ee.sibling=Gn,Ee=Gn,ce=Et}if(Me.done)return n(O,ce),De&&nl(O,pe),le;if(ce===null){for(;!Me.done;pe++,Me=B.next())Me=V(O,Me.value,q),Me!==null&&(M=c(Me,M,pe),Ee===null?le=Me:Ee.sibling=Me,Ee=Me);return De&&nl(O,pe),le}for(ce=l(ce);!Me.done;pe++,Me=B.next())Me=j(ce,O,pe,Me.value,q),Me!==null&&(e&&Me.alternate!==null&&ce.delete(Me.key===null?pe:Me.key),M=c(Me,M,pe),Ee===null?le=Me:Ee.sibling=Me,Ee=Me);return e&&ce.forEach(function(mb){return t(O,mb)}),De&&nl(O,pe),le}function Ye(O,M,B,q){if(typeof B=="object"&&B!==null&&B.type===E&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case S:e:{for(var le=B.key;M!==null;){if(M.key===le){if(le=B.type,le===E){if(M.tag===7){n(O,M.sibling),q=i(M,B.props.children),q.return=O,O=q;break e}}else if(M.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===re&&hm(le)===M.type){n(O,M.sibling),q=i(M,B.props),li(q,B),q.return=O,O=q;break e}n(O,M);break}else t(O,M);M=M.sibling}B.type===E?(q=tl(B.props.children,O.mode,q,B.key),q.return=O,O=q):(q=hu(B.type,B.key,B.props,null,O.mode,q),li(q,B),q.return=O,O=q)}return d(O);case N:e:{for(le=B.key;M!==null;){if(M.key===le)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){n(O,M.sibling),q=i(M,B.children||[]),q.return=O,O=q;break e}else{n(O,M);break}else t(O,M);M=M.sibling}q=$c(B,O.mode,q),q.return=O,O=q}return d(O);case re:return le=B._init,B=le(B._payload),Ye(O,M,B,q)}if(ze(B))return ye(O,M,B,q);if(Be(B)){if(le=Be(B),typeof le!="function")throw Error(o(150));return B=le.call(B),me(O,M,B,q)}if(typeof B.then=="function")return Ye(O,M,Ou(B),q);if(B.$$typeof===H)return Ye(O,M,gu(O,B),q);Cu(O,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(n(O,M.sibling),q=i(M,B),q.return=O,O=q):(n(O,M),q=wc(B,O.mode,q),q.return=O,O=q),d(O)):n(O,M)}return function(O,M,B,q){try{ni=0;var le=Ye(O,M,B,q);return Wl=null,le}catch(ce){if(ce===Zr||ce===bu)throw ce;var Ee=Wt(29,ce,null,O.mode);return Ee.lanes=q,Ee.return=O,Ee}finally{}}}var Jl=mm(!0),pm=mm(!1),ga=L(null),Ua=null;function An(e){var t=e.alternate;Z(gt,gt.current&1),Z(ga,e),Ua===null&&(t===null||Ql.current!==null||t.memoizedState!==null)&&(Ua=e)}function ym(e){if(e.tag===22){if(Z(gt,gt.current),Z(ga,e),Ua===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ua=e)}}else On()}function On(){Z(gt,gt.current),Z(ga,ga.current)}function nn(e){K(ga),Ua===e&&(Ua=null),K(gt)}var gt=L(0);function Du(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Qs(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ls(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rs={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=ta(),i=Nn(l);i.payload=t,n!=null&&(i.callback=n),t=Tn(e,i,l),t!==null&&(aa(t,e,l),Kr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=ta(),i=Nn(l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Tn(e,i,l),t!==null&&(aa(t,e,l),Kr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ta(),l=Nn(n);l.tag=2,t!=null&&(l.callback=t),t=Tn(e,l,n),t!==null&&(aa(t,e,n),Kr(t,e,n))}};function gm(e,t,n,l,i,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,d):t.prototype&&t.prototype.isPureReactComponent?!kr(n,l)||!kr(i,c):!0}function vm(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&rs.enqueueReplaceState(t,t.state,null)}function sl(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var Bu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function bm(e){Bu(e)}function Sm(e){console.error(e)}function xm(e){Bu(e)}function Ru(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Em(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function is(e,t,n){return n=Nn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ru(e,t)},n}function _m(e){return e=Nn(e),e.tag=3,e}function wm(e,t,n,l){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=l.value;e.payload=function(){return i(c)},e.callback=function(){Em(t,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Em(t,n,l),typeof i!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function m1(e,t,n,l,i){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Vr(t,n,i,!0),n=ga.current,n!==null){switch(n.tag){case 13:return Ua===null?Os():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=i,l===zc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Ds(e,l,i)),!1;case 22:return n.flags|=65536,l===zc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Ds(e,l,i)),!1}throw Error(o(435,n.tag))}return Ds(e,l,i),Os(),!1}if(De)return t=ga.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==Mc&&(e=Error(o(422),{cause:l}),Gr(ha(e,n)))):(l!==Mc&&(t=Error(o(423),{cause:l}),Gr(ha(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=ha(l,n),i=is(e.stateNode,l,i),Lc(e,i),it!==4&&(it=2)),!1;var c=Error(o(520),{cause:l});if(c=ha(c,n),fi===null?fi=[c]:fi.push(c),it!==4&&(it=2),t===null)return!0;l=ha(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=is(n.stateNode,l,e),Lc(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Hn===null||!Hn.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=_m(i),wm(i,e,n,l),Lc(n,i),!1}n=n.return}while(n!==null);return!1}var $m=Error(o(461)),St=!1;function Nt(e,t,n,l){t.child=e===null?pm(t,null,n,l):Jl(t,e.child,n,l)}function Nm(e,t,n,l,i){n=n.render;var c=t.ref;if("ref"in l){var d={};for(var b in l)b!=="ref"&&(d[b]=l[b])}else d=l;return ul(t),l=Yc(e,t,n,d,c,i),b=Gc(),e!==null&&!St?(Vc(e,t,i),ln(e,t,i)):(De&&b&&Nc(t),t.flags|=1,Nt(e,t,l,i),t.child)}function Tm(e,t,n,l,i){if(e===null){var c=n.type;return typeof c=="function"&&!_c(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,Mm(e,t,c,l,i)):(e=hu(n.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!ms(e,i)){var d=c.memoizedProps;if(n=n.compare,n=n!==null?n:kr,n(d,l)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Wa(c,l),e.ref=t.ref,e.return=t,t.child=e}function Mm(e,t,n,l,i){if(e!==null){var c=e.memoizedProps;if(kr(c,l)&&e.ref===t.ref)if(St=!1,t.pendingProps=l=c,ms(e,i))(e.flags&131072)!==0&&(St=!0);else return t.lanes=e.lanes,ln(e,t,i)}return us(e,t,n,l,i)}function Am(e,t,n){var l=t.pendingProps,i=l.children,c=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=c!==null?c.baseLanes|n:n,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;t.childLanes=c&~l}else t.childLanes=0,t.child=null;return Om(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vu(t,c!==null?c.cachePool:null),c!==null?Mh(t,c):kc(),ym(t);else return t.lanes=t.childLanes=536870912,Om(e,t,c!==null?c.baseLanes|n:n,n)}else c!==null?(vu(t,c.cachePool),Mh(t,c),On(),t.memoizedState=null):(e!==null&&vu(t,null),kc(),On());return Nt(e,t,i,n),t.child}function Om(e,t,n,l){var i=Rc();return i=i===null?null:{parent:yt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&vu(t,null),kc(),ym(t),e!==null&&Vr(e,t,l,!0),null}function zu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function us(e,t,n,l,i){return ul(t),n=Yc(e,t,n,l,void 0,i),l=Gc(),e!==null&&!St?(Vc(e,t,i),ln(e,t,i)):(De&&l&&Nc(t),t.flags|=1,Nt(e,t,n,i),t.child)}function Cm(e,t,n,l,i,c){return ul(t),t.updateQueue=null,n=Oh(t,l,n,i),Ah(e),l=Gc(),e!==null&&!St?(Vc(e,t,c),ln(e,t,c)):(De&&l&&Nc(t),t.flags|=1,Nt(e,t,n,c),t.child)}function Dm(e,t,n,l,i){if(ul(t),t.stateNode===null){var c=ql,d=n.contextType;typeof d=="object"&&d!==null&&(c=Rt(d)),c=new n(l,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=rs,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=l,c.state=t.memoizedState,c.refs={},Hc(t),d=n.contextType,c.context=typeof d=="object"&&d!==null?Rt(d):ql,c.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(ls(t,n,d,l),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(d=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),d!==c.state&&rs.enqueueReplaceState(c,c.state,null),Jr(t,l,c,i),Wr(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){c=t.stateNode;var b=t.memoizedProps,w=sl(n,b);c.props=w;var R=c.context,P=n.contextType;d=ql,typeof P=="object"&&P!==null&&(d=Rt(P));var V=n.getDerivedStateFromProps;P=typeof V=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,P||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||R!==d)&&vm(t,c,l,d),$n=!1;var z=t.memoizedState;c.state=z,Jr(t,l,c,i),Wr(),R=t.memoizedState,b||z!==R||$n?(typeof V=="function"&&(ls(t,n,V,l),R=t.memoizedState),(w=$n||gm(t,n,w,l,z,R,d))?(P||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=R),c.props=l,c.state=R,c.context=d,l=w):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{c=t.stateNode,jc(e,t),d=t.memoizedProps,P=sl(n,d),c.props=P,V=t.pendingProps,z=c.context,R=n.contextType,w=ql,typeof R=="object"&&R!==null&&(w=Rt(R)),b=n.getDerivedStateFromProps,(R=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==V||z!==w)&&vm(t,c,l,w),$n=!1,z=t.memoizedState,c.state=z,Jr(t,l,c,i),Wr();var j=t.memoizedState;d!==V||z!==j||$n||e!==null&&e.dependencies!==null&&yu(e.dependencies)?(typeof b=="function"&&(ls(t,n,b,l),j=t.memoizedState),(P=$n||gm(t,n,P,l,z,j,w)||e!==null&&e.dependencies!==null&&yu(e.dependencies))?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,j,w),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,j,w)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=j),c.props=l,c.state=j,c.context=w,l=P):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),l=!1)}return c=l,zu(e,t),l=(t.flags&128)!==0,c||l?(c=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&l?(t.child=Jl(t,e.child,null,i),t.child=Jl(t,null,n,i)):Nt(e,t,n,i),t.memoizedState=c.state,e=t.child):e=ln(e,t,i),e}function Bm(e,t,n,l){return Yr(),t.flags|=256,Nt(e,t,n,l),t.child}var os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cs(e){return{baseLanes:e,cachePool:Sh()}}function ss(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=va),e}function Rm(e,t,n){var l=t.pendingProps,i=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),d&&(i=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(De){if(i?An(t):On(),De){var b=rt,w;if(w=b){e:{for(w=b,b=La;w.nodeType!==8;){if(!b){b=null;break e}if(w=Ca(w.nextSibling),w===null){b=null;break e}}b=w}b!==null?(t.memoizedState={dehydrated:b,treeContext:al!==null?{id:Ja,overflow:Ia}:null,retryLane:536870912,hydrationErrors:null},w=Wt(18,null,null,0),w.stateNode=b,w.return=t,t.child=w,kt=t,rt=null,w=!0):w=!1}w||rl(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Qs(b)?t.lanes=32:t.lanes=536870912,null;nn(t)}return b=l.children,l=l.fallback,i?(On(),i=t.mode,b=Hu({mode:"hidden",children:b},i),l=tl(l,i,n,null),b.return=t,l.return=t,b.sibling=l,t.child=b,i=t.child,i.memoizedState=cs(n),i.childLanes=ss(e,d,n),t.memoizedState=os,l):(An(t),fs(t,b))}if(w=e.memoizedState,w!==null&&(b=w.dehydrated,b!==null)){if(c)t.flags&256?(An(t),t.flags&=-257,t=ds(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),i=l.fallback,b=t.mode,l=Hu({mode:"visible",children:l.children},b),i=tl(i,b,n,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,Jl(t,e.child,null,n),l=t.child,l.memoizedState=cs(n),l.childLanes=ss(e,d,n),t.memoizedState=os,t=i);else if(An(t),Qs(b)){if(d=b.nextSibling&&b.nextSibling.dataset,d)var R=d.dgst;d=R,l=Error(o(419)),l.stack="",l.digest=d,Gr({value:l,source:null,stack:null}),t=ds(e,t,n)}else if(St||Vr(e,t,n,!1),d=(n&e.childLanes)!==0,St||d){if(d=Fe,d!==null&&(l=n&-n,l=(l&42)!==0?1:Al(l),l=(l&(d.suspendedLanes|n))!==0?0:l,l!==0&&l!==w.retryLane))throw w.retryLane=l,Pl(e,l),aa(d,e,l),$m;b.data==="$?"||Os(),t=ds(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,rt=Ca(b.nextSibling),kt=t,De=!0,ll=null,La=!1,e!==null&&(pa[ya++]=Ja,pa[ya++]=Ia,pa[ya++]=al,Ja=e.id,Ia=e.overflow,al=t),t=fs(t,l.children),t.flags|=4096);return t}return i?(On(),i=l.fallback,b=t.mode,w=e.child,R=w.sibling,l=Wa(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,R!==null?i=Wa(R,i):(i=tl(i,b,n,null),i.flags|=2),i.return=t,l.return=t,l.sibling=i,t.child=l,l=i,i=t.child,b=e.child.memoizedState,b===null?b=cs(n):(w=b.cachePool,w!==null?(R=yt._currentValue,w=w.parent!==R?{parent:R,pool:R}:w):w=Sh(),b={baseLanes:b.baseLanes|n,cachePool:w}),i.memoizedState=b,i.childLanes=ss(e,d,n),t.memoizedState=os,l):(An(t),n=e.child,e=n.sibling,n=Wa(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function fs(e,t){return t=Hu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hu(e,t){return e=Wt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ds(e,t,n){return Jl(t,e.child,null,n),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zm(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Oc(e.return,t,n)}function hs(e,t,n,l,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=n,c.tailMode=i)}function Hm(e,t,n){var l=t.pendingProps,i=l.revealOrder,c=l.tail;if(Nt(e,t,l.children,n),l=gt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zm(e,n,t);else if(e.tag===19)zm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Z(gt,l),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Du(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hs(t,!1,i,n,c);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Du(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hs(t,!0,n,null,c);break;case"together":hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Vr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Wa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ms(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yu(e)))}function p1(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),wn(t,yt,e.memoizedState.cache),Yr();break;case 27:case 5:Ct(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:wn(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(An(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Rm(e,t,n):(An(t),e=ln(e,t,n),e!==null?e.sibling:null);An(t);break;case 19:var i=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Vr(e,t,n,!1),l=(n&t.childLanes)!==0),i){if(l)return Hm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(gt,gt.current),l)break;return null;case 22:case 23:return t.lanes=0,Am(e,t,n);case 24:wn(t,yt,e.memoizedState.cache)}return ln(e,t,n)}function jm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)St=!0;else{if(!ms(e,n)&&(t.flags&128)===0)return St=!1,p1(e,t,n);St=(e.flags&131072)!==0}else St=!1,De&&(t.flags&1048576)!==0&&hh(t,pu,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,i=l._init;if(l=i(l._payload),t.type=l,typeof l=="function")_c(l)?(e=sl(l,e),t.tag=1,t=Dm(null,t,l,e,n)):(t.tag=0,t=us(null,t,l,e,n));else{if(l!=null){if(i=l.$$typeof,i===Y){t.tag=11,t=Nm(null,t,l,e,n);break e}else if(i===I){t.tag=14,t=Tm(null,t,l,e,n);break e}}throw t=pt(l)||l,Error(o(306,t,""))}}return t;case 0:return us(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,i=sl(l,t.pendingProps),Dm(e,t,l,i,n);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var c=t.memoizedState;i=c.element,jc(e,t),Jr(t,l,null,n);var d=t.memoizedState;if(l=d.cache,wn(t,yt,l),l!==c.cache&&Cc(t,[yt],n,!0),Wr(),l=d.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Bm(e,t,l,n);break e}else if(l!==i){i=ha(Error(o(424)),t),Gr(i),t=Bm(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rt=Ca(e.firstChild),kt=t,De=!0,ll=null,La=!0,n=pm(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yr(),l===i){t=ln(e,t,n);break e}Nt(e,t,l,n)}t=t.child}return t;case 26:return zu(e,t),e===null?(n=P0(t.type,null,t.pendingProps,null))?t.memoizedState=n:De||(n=t.type,e=t.pendingProps,l=Ku(oe.current).createElement(n),l[at]=t,l[Dt]=e,Mt(l,n,e),ft(l),t.stateNode=l):t.memoizedState=P0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ct(t),e===null&&De&&(l=t.stateNode=L0(t.type,t.pendingProps,oe.current),kt=t,La=!0,i=rt,Un(t.type)?(Zs=i,rt=Ca(l.firstChild)):rt=i),Nt(e,t,t.pendingProps.children,n),zu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&De&&((i=l=rt)&&(l=Y1(l,t.type,t.pendingProps,La),l!==null?(t.stateNode=l,kt=t,rt=Ca(l.firstChild),La=!1,i=!0):i=!1),i||rl(t)),Ct(t),i=t.type,c=t.pendingProps,d=e!==null?e.memoizedProps:null,l=c.children,Gs(i,c)?l=null:d!==null&&Gs(i,d)&&(t.flags|=32),t.memoizedState!==null&&(i=Yc(e,t,u1,null,null,n),Si._currentValue=i),zu(e,t),Nt(e,t,l,n),t.child;case 6:return e===null&&De&&((e=n=rt)&&(n=G1(n,t.pendingProps,La),n!==null?(t.stateNode=n,kt=t,rt=null,e=!0):e=!1),e||rl(t)),null;case 13:return Rm(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Jl(t,null,l,n):Nt(e,t,l,n),t.child;case 11:return Nm(e,t,t.type,t.pendingProps,n);case 7:return Nt(e,t,t.pendingProps,n),t.child;case 8:return Nt(e,t,t.pendingProps.children,n),t.child;case 12:return Nt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,wn(t,t.type,l.value),Nt(e,t,l.children,n),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,ul(t),i=Rt(i),l=l(i),t.flags|=1,Nt(e,t,l,n),t.child;case 14:return Tm(e,t,t.type,t.pendingProps,n);case 15:return Mm(e,t,t.type,t.pendingProps,n);case 19:return Hm(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Hu(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Wa(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Am(e,t,n);case 24:return ul(t),l=Rt(yt),e===null?(i=Rc(),i===null&&(i=Fe,c=Dc(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),t.memoizedState={parent:l,cache:i},Hc(t),wn(t,yt,i)):((e.lanes&n)!==0&&(jc(e,t),Jr(t,null,null,n),Wr()),i=e.memoizedState,c=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wn(t,yt,l)):(l=c.cache,wn(t,yt,l),l!==i.cache&&Cc(t,[yt],n,!0))),Nt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function rn(e){e.flags|=4}function Lm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!X0(t)){if(t=ga.current,t!==null&&((Te&4194048)===Te?Ua!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==Ua))throw Fr=zc,xh;e.flags|=8192}}function ju(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ia():536870912,e.lanes|=t,ar|=t)}function ri(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function y1(e,t,n){var l=t.pendingProps;switch(Tc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),tn(yt),et(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qr(t)?rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yh())),nt(t),null;case 26:return n=t.memoizedState,e===null?(rn(t),n!==null?(nt(t),Lm(t,n)):(nt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(rn(t),nt(t),Lm(t,n)):(nt(t),t.flags&=-16777217):(e.memoizedProps!==l&&rn(t),nt(t),t.flags&=-16777217),null;case 27:Qe(t),n=oe.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&rn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return nt(t),null}e=te.current,qr(t)?mh(t):(e=L0(i,l,n),t.stateNode=e,rn(t))}return nt(t),null;case 5:if(Qe(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&rn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return nt(t),null}if(e=te.current,qr(t))mh(t);else{switch(i=Ku(oe.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?i.createElement(n,{is:l.is}):i.createElement(n)}}e[at]=t,e[Dt]=l;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Mt(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rn(t)}}return nt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&rn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=oe.current,qr(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,i=kt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||C0(e.nodeValue,n)),e||rl(t)}else e=Ku(e).createTextNode(l),e[at]=t,t.stateNode=e}return nt(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=qr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[at]=t}else Yr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),i=!1}else i=yh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(nn(t),t):(nn(t),null)}if(nn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var c=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==i&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ju(t,t.updateQueue),nt(t),null;case 4:return et(),e===null&&Us(t.stateNode.containerInfo),nt(t),null;case 10:return tn(t.type),nt(t),null;case 19:if(K(gt),i=t.memoizedState,i===null)return nt(t),null;if(l=(t.flags&128)!==0,c=i.rendering,c===null)if(l)ri(i,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Du(e),c!==null){for(t.flags|=128,ri(i,!1),e=c.updateQueue,t.updateQueue=e,ju(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)dh(n,e),n=n.sibling;return Z(gt,gt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ke()>ku&&(t.flags|=128,l=!0,ri(i,!1),t.lanes=4194304)}else{if(!l)if(e=Du(c),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ju(t,e),ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!De)return nt(t),null}else 2*Ke()-i.renderingStartTime>ku&&n!==536870912&&(t.flags|=128,l=!0,ri(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(e=i.last,e!==null?e.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ke(),t.sibling=null,e=gt.current,Z(gt,l?e&1|2:e&1),t):(nt(t),null);case 22:case 23:return nn(t),Pc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&ju(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&K(ol),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tn(yt),nt(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function g1(e,t){switch(Tc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(yt),et(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qe(t),null;case 13:if(nn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(gt),null;case 4:return et(),null;case 10:return tn(t.type),null;case 22:case 23:return nn(t),Pc(),e!==null&&K(ol),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tn(yt),null;case 25:return null;default:return null}}function Um(e,t){switch(Tc(t),t.tag){case 3:tn(yt),et();break;case 26:case 27:case 5:Qe(t);break;case 4:et();break;case 13:nn(t);break;case 19:K(gt);break;case 10:tn(t.type);break;case 22:case 23:nn(t),Pc(),e!==null&&K(ol);break;case 24:tn(yt)}}function ii(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){l=void 0;var c=n.create,d=n.inst;l=c(),d.destroy=l}n=n.next}while(n!==i)}}catch(b){Ve(t,t.return,b)}}function Cn(e,t,n){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var c=i.next;l=c;do{if((l.tag&e)===e){var d=l.inst,b=d.destroy;if(b!==void 0){d.destroy=void 0,i=t;var w=n,R=b;try{R()}catch(P){Ve(i,w,P)}}}l=l.next}while(l!==c)}}catch(P){Ve(t,t.return,P)}}function km(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Th(t,n)}catch(l){Ve(e,e.return,l)}}}function Pm(e,t,n){n.props=sl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ve(e,t,l)}}function ui(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(i){Ve(e,t,i)}}function ka(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(i){Ve(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Ve(e,t,i)}else n.current=null}function qm(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(i){Ve(e,e.return,i)}}function ps(e,t,n){try{var l=e.stateNode;L1(l,e.type,n,t),l[Dt]=t}catch(i){Ve(e,e.return,i)}}function Ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Un(e.type)||e.tag===4}function ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fu));else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}function Lu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Gm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Mt(t,l,n),t[at]=e,t[Dt]=n}catch(c){Ve(e,e.return,c)}}var un=!1,ct=!1,vs=!1,Vm=typeof WeakSet=="function"?WeakSet:Set,xt=null;function v1(e,t){if(e=e.containerInfo,qs=ao,e=ah(e),yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var i=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var d=0,b=-1,w=-1,R=0,P=0,V=e,z=null;t:for(;;){for(var j;V!==n||i!==0&&V.nodeType!==3||(b=d+i),V!==c||l!==0&&V.nodeType!==3||(w=d+l),V.nodeType===3&&(d+=V.nodeValue.length),(j=V.firstChild)!==null;)z=V,V=j;for(;;){if(V===e)break t;if(z===n&&++R===i&&(b=d),z===c&&++P===l&&(w=d),(j=V.nextSibling)!==null)break;V=z,z=V.parentNode}V=j}n=b===-1||w===-1?null:{start:b,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ys={focusedElem:e,selectionRange:n},ao=!1,xt=t;xt!==null;)if(t=xt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,xt=e;else for(;xt!==null;){switch(t=xt,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,i=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var ye=sl(n.type,i,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(ye,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ve(n,n.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Xs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,xt=e;break}xt=t.return}}function Xm(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Dn(e,n),l&4&&ii(5,n);break;case 1:if(Dn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ve(n,n.return,d)}else{var i=sl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ve(n,n.return,d)}}l&64&&km(n),l&512&&ui(n,n.return);break;case 3:if(Dn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Th(e,t)}catch(d){Ve(n,n.return,d)}}break;case 27:t===null&&l&4&&Gm(n);case 26:case 5:Dn(e,n),t===null&&l&4&&qm(n),l&512&&ui(n,n.return);break;case 12:Dn(e,n);break;case 13:Dn(e,n),l&4&&Fm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=T1.bind(null,n),V1(e,n))));break;case 22:if(l=n.memoizedState!==null||un,!l){t=t!==null&&t.memoizedState!==null||ct,i=un;var c=ct;un=l,(ct=t)&&!c?Bn(e,n,(n.subtreeFlags&8772)!==0):Dn(e,n),un=i,ct=c}break;case 30:break;default:Dn(e,n)}}function Qm(e){var t=e.alternate;t!==null&&(e.alternate=null,Qm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Gt=!1;function on(e,t,n){for(n=n.child;n!==null;)Zm(e,t,n),n=n.sibling}function Zm(e,t,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 26:ct||ka(n,t),on(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ct||ka(n,t);var l=Ie,i=Gt;Un(n.type)&&(Ie=n.stateNode,Gt=!1),on(e,t,n),yi(n.stateNode),Ie=l,Gt=i;break;case 5:ct||ka(n,t);case 6:if(l=Ie,i=Gt,Ie=null,on(e,t,n),Ie=l,Gt=i,Ie!==null)if(Gt)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(n.stateNode)}catch(c){Ve(n,t,c)}else try{Ie.removeChild(n.stateNode)}catch(c){Ve(n,t,c)}break;case 18:Ie!==null&&(Gt?(e=Ie,H0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),wi(e)):H0(Ie,n.stateNode));break;case 4:l=Ie,i=Gt,Ie=n.stateNode.containerInfo,Gt=!0,on(e,t,n),Ie=l,Gt=i;break;case 0:case 11:case 14:case 15:ct||Cn(2,n,t),ct||Cn(4,n,t),on(e,t,n);break;case 1:ct||(ka(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Pm(n,t,l)),on(e,t,n);break;case 21:on(e,t,n);break;case 22:ct=(l=ct)||n.memoizedState!==null,on(e,t,n),ct=l;break;default:on(e,t,n)}}function Fm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wi(e)}catch(n){Ve(t,t.return,n)}}function b1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vm),t;default:throw Error(o(435,e.tag))}}function bs(e,t){var n=b1(e);t.forEach(function(l){var i=M1.bind(null,e,l);n.has(l)||(n.add(l),l.then(i,i))})}function Jt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l],c=e,d=t,b=d;e:for(;b!==null;){switch(b.tag){case 27:if(Un(b.type)){Ie=b.stateNode,Gt=!1;break e}break;case 5:Ie=b.stateNode,Gt=!1;break e;case 3:case 4:Ie=b.stateNode.containerInfo,Gt=!0;break e}b=b.return}if(Ie===null)throw Error(o(160));Zm(c,d,i),Ie=null,Gt=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Km(t,e),t=t.sibling}var Oa=null;function Km(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jt(t,e),It(e),l&4&&(Cn(3,e,e.return),ii(3,e),Cn(5,e,e.return));break;case 1:Jt(t,e),It(e),l&512&&(ct||n===null||ka(n,n.return)),l&64&&un&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var i=Oa;if(Jt(t,e),It(e),l&512&&(ct||n===null||ka(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":c=i.getElementsByTagName("title")[0],(!c||c[Bt]||c[at]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(l),i.head.insertBefore(c,i.querySelector("head > title"))),Mt(c,l,n),c[at]=e,ft(c),l=c;break e;case"link":var d=G0("link","href",i).get(l+(n.href||""));if(d){for(var b=0;b<d.length;b++)if(c=d[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(b,1);break t}}c=i.createElement(l),Mt(c,l,n),i.head.appendChild(c);break;case"meta":if(d=G0("meta","content",i).get(l+(n.content||""))){for(b=0;b<d.length;b++)if(c=d[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(b,1);break t}}c=i.createElement(l),Mt(c,l,n),i.head.appendChild(c);break;default:throw Error(o(468,l))}c[at]=e,ft(c),l=c}e.stateNode=l}else V0(i,e.type,e.stateNode);else e.stateNode=Y0(i,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?V0(i,e.type,e.stateNode):Y0(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ps(e,e.memoizedProps,n.memoizedProps)}break;case 27:Jt(t,e),It(e),l&512&&(ct||n===null||ka(n,n.return)),n!==null&&l&4&&ps(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Jt(t,e),It(e),l&512&&(ct||n===null||ka(n,n.return)),e.flags&32){i=e.stateNode;try{Ut(i,"")}catch(j){Ve(e,e.return,j)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,ps(e,i,n!==null?n.memoizedProps:i)),l&1024&&(vs=!0);break;case 6:if(Jt(t,e),It(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(j){Ve(e,e.return,j)}}break;case 3:if(Iu=null,i=Oa,Oa=Wu(t.containerInfo),Jt(t,e),Oa=i,It(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{wi(t.containerInfo)}catch(j){Ve(e,e.return,j)}vs&&(vs=!1,Wm(e));break;case 4:l=Oa,Oa=Wu(e.stateNode.containerInfo),Jt(t,e),It(e),Oa=l;break;case 12:Jt(t,e),It(e);break;case 13:Jt(t,e),It(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($s=Ke()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bs(e,l)));break;case 22:i=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,R=un,P=ct;if(un=R||i,ct=P||w,Jt(t,e),ct=P,un=R,It(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||w||un||ct||fl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(c=w.stateNode,i)d=c.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{b=w.stateNode;var V=w.memoizedProps.style,z=V!=null&&V.hasOwnProperty("display")?V.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){Ve(w,w.return,j)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=i?"":w.memoizedProps}catch(j){Ve(w,w.return,j)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,bs(e,n))));break;case 19:Jt(t,e),It(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bs(e,l)));break;case 30:break;case 21:break;default:Jt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Ym(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,c=ys(e);Lu(e,c,i);break;case 5:var d=n.stateNode;n.flags&32&&(Ut(d,""),n.flags&=-33);var b=ys(e);Lu(e,b,d);break;case 3:case 4:var w=n.stateNode.containerInfo,R=ys(e);gs(e,R,w);break;default:throw Error(o(161))}}catch(P){Ve(e,e.return,P)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Dn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xm(e,t.alternate,t),t=t.sibling}function fl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Cn(4,t,t.return),fl(t);break;case 1:ka(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Pm(t,t.return,n),fl(t);break;case 27:yi(t.stateNode);case 26:case 5:ka(t,t.return),fl(t);break;case 22:t.memoizedState===null&&fl(t);break;case 30:fl(t);break;default:fl(t)}e=e.sibling}}function Bn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,c=t,d=c.flags;switch(c.tag){case 0:case 11:case 15:Bn(i,c,n),ii(4,c);break;case 1:if(Bn(i,c,n),l=c,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(R){Ve(l,l.return,R)}if(l=c,i=l.updateQueue,i!==null){var b=l.stateNode;try{var w=i.shared.hiddenCallbacks;if(w!==null)for(i.shared.hiddenCallbacks=null,i=0;i<w.length;i++)Nh(w[i],b)}catch(R){Ve(l,l.return,R)}}n&&d&64&&km(c),ui(c,c.return);break;case 27:Gm(c);case 26:case 5:Bn(i,c,n),n&&l===null&&d&4&&qm(c),ui(c,c.return);break;case 12:Bn(i,c,n);break;case 13:Bn(i,c,n),n&&d&4&&Fm(i,c);break;case 22:c.memoizedState===null&&Bn(i,c,n),ui(c,c.return);break;case 30:break;default:Bn(i,c,n)}t=t.sibling}}function Ss(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Xr(n))}function xs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xr(e))}function Pa(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jm(e,t,n,l),t=t.sibling}function Jm(e,t,n,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Pa(e,t,n,l),i&2048&&ii(9,t);break;case 1:Pa(e,t,n,l);break;case 3:Pa(e,t,n,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xr(e)));break;case 12:if(i&2048){Pa(e,t,n,l),e=t.stateNode;try{var c=t.memoizedProps,d=c.id,b=c.onPostCommit;typeof b=="function"&&b(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ve(t,t.return,w)}}else Pa(e,t,n,l);break;case 13:Pa(e,t,n,l);break;case 23:break;case 22:c=t.stateNode,d=t.alternate,t.memoizedState!==null?c._visibility&2?Pa(e,t,n,l):oi(e,t):c._visibility&2?Pa(e,t,n,l):(c._visibility|=2,Il(e,t,n,l,(t.subtreeFlags&10256)!==0)),i&2048&&Ss(d,t);break;case 24:Pa(e,t,n,l),i&2048&&xs(t.alternate,t);break;default:Pa(e,t,n,l)}}function Il(e,t,n,l,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,d=t,b=n,w=l,R=d.flags;switch(d.tag){case 0:case 11:case 15:Il(c,d,b,w,i),ii(8,d);break;case 23:break;case 22:var P=d.stateNode;d.memoizedState!==null?P._visibility&2?Il(c,d,b,w,i):oi(c,d):(P._visibility|=2,Il(c,d,b,w,i)),i&&R&2048&&Ss(d.alternate,d);break;case 24:Il(c,d,b,w,i),i&&R&2048&&xs(d.alternate,d);break;default:Il(c,d,b,w,i)}t=t.sibling}}function oi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,i=l.flags;switch(l.tag){case 22:oi(n,l),i&2048&&Ss(l.alternate,l);break;case 24:oi(n,l),i&2048&&xs(l.alternate,l);break;default:oi(n,l)}t=t.sibling}}var ci=8192;function er(e){if(e.subtreeFlags&ci)for(e=e.child;e!==null;)Im(e),e=e.sibling}function Im(e){switch(e.tag){case 26:er(e),e.flags&ci&&e.memoizedState!==null&&lb(Oa,e.memoizedState,e.memoizedProps);break;case 5:er(e);break;case 3:case 4:var t=Oa;Oa=Wu(e.stateNode.containerInfo),er(e),Oa=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ci,ci=16777216,er(e),ci=t):er(e));break;default:er(e)}}function e0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];xt=l,a0(l,e)}e0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)t0(e),e=e.sibling}function t0(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&Cn(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Uu(e)):si(e);break;default:si(e)}}function Uu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];xt=l,a0(l,e)}e0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cn(8,t,t.return),Uu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Uu(t));break;default:Uu(t)}e=e.sibling}}function a0(e,t){for(;xt!==null;){var n=xt;switch(n.tag){case 0:case 11:case 15:Cn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xr(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,xt=l;else e:for(n=e;xt!==null;){l=xt;var i=l.sibling,c=l.return;if(Qm(l),l===n){xt=null;break e}if(i!==null){i.return=c,xt=i;break e}xt=c}}}var S1={getCacheForType:function(e){var t=Rt(yt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},x1=typeof WeakMap=="function"?WeakMap:Map,Le=0,Fe=null,_e=null,Te=0,Ue=0,ea=null,Rn=!1,tr=!1,Es=!1,cn=0,it=0,zn=0,dl=0,_s=0,va=0,ar=0,fi=null,Vt=null,ws=!1,$s=0,ku=1/0,Pu=null,Hn=null,Tt=0,jn=null,nr=null,lr=0,Ns=0,Ts=null,n0=null,di=0,Ms=null;function ta(){if((Le&2)!==0&&Te!==0)return Te&-Te;if(U.T!==null){var e=Vl;return e!==0?e:zs()}return Kn()}function l0(){va===0&&(va=(Te&536870912)===0||De?Zt():536870912);var e=ga.current;return e!==null&&(e.flags|=32),va}function aa(e,t,n){(e===Fe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(rr(e,0),Ln(e,Te,va,!1)),Ft(e,n),((Le&2)===0||e!==Fe)&&(e===Fe&&((Le&2)===0&&(dl|=n),it===4&&Ln(e,Te,va,!1)),qa(e))}function r0(e,t,n){if((Le&6)!==0)throw Error(o(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ne(e,t),i=l?w1(e,t):Cs(e,t,!0),c=l;do{if(i===0){tr&&!l&&Ln(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!E1(n)){i=Cs(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var b=e;i=fi;var w=b.current.memoizedState.isDehydrated;if(w&&(rr(b,d).flags|=256),d=Cs(b,d,!1),d!==2){if(Es&&!w){b.errorRecoveryDisabledLanes|=c,dl|=c,i=4;break e}c=Vt,Vt=i,c!==null&&(Vt===null?Vt=c:Vt.push.apply(Vt,c))}i=d}if(c=!1,i!==2)continue}}if(i===1){rr(e,0),Ln(e,t,0,!0);break}e:{switch(l=e,c=i,c){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Ln(l,t,va,!Rn);break e;case 2:Vt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=$s+300-Ke(),10<i)){if(Ln(l,t,va,!Rn),Xt(l,0,!0)!==0)break e;l.timeoutHandle=R0(i0.bind(null,l,n,Vt,Pu,ws,t,va,dl,ar,Rn,c,2,-0,0),i);break e}i0(l,n,Vt,Pu,ws,t,va,dl,ar,Rn,c,0,-0,0)}}break}while(!0);qa(e)}function i0(e,t,n,l,i,c,d,b,w,R,P,V,z,j){if(e.timeoutHandle=-1,V=t.subtreeFlags,(V&8192||(V&16785408)===16785408)&&(bi={stylesheets:null,count:0,unsuspend:nb},Im(t),V=rb(),V!==null)){e.cancelPendingCommit=V(h0.bind(null,e,t,c,n,l,i,d,b,w,P,1,z,j)),Ln(e,c,d,!R);return}h0(e,t,c,n,l,i,d,b,w)}function E1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var i=n[l],c=i.getSnapshot;i=i.value;try{if(!Kt(c(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t,n,l){t&=~_s,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var c=31-st(i),d=1<<c;l[c]=-1,i&=~d}n!==0&&oa(e,n,t)}function qu(){return(Le&6)===0?(hi(0),!1):!0}function As(){if(_e!==null){if(Ue===0)var e=_e.return;else e=_e,en=il=null,Xc(e),Wl=null,ni=0,e=_e;for(;e!==null;)Um(e.alternate,e),e=e.return;_e=null}}function rr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,k1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),As(),Fe=e,_e=n=Wa(e.current,null),Te=t,Ue=0,ea=null,Rn=!1,tr=Ne(e,t),Es=!1,ar=va=_s=dl=zn=it=0,Vt=fi=null,ws=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-st(l),c=1<<i;t|=e[i],l&=~c}return cn=t,su(),n}function u0(e,t){xe=null,U.H=Au,t===Zr||t===bu?(t=wh(),Ue=3):t===xh?(t=wh(),Ue=4):Ue=t===$m?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ea=t,_e===null&&(it=1,Ru(e,ha(t,e.current)))}function o0(){var e=U.H;return U.H=Au,e===null?Au:e}function c0(){var e=U.A;return U.A=S1,e}function Os(){it=4,Rn||(Te&4194048)!==Te&&ga.current!==null||(tr=!0),(zn&134217727)===0&&(dl&134217727)===0||Fe===null||Ln(Fe,Te,va,!1)}function Cs(e,t,n){var l=Le;Le|=2;var i=o0(),c=c0();(Fe!==e||Te!==t)&&(Pu=null,rr(e,t)),t=!1;var d=it;e:do try{if(Ue!==0&&_e!==null){var b=_e,w=ea;switch(Ue){case 8:As(),d=6;break e;case 3:case 2:case 9:case 6:ga.current===null&&(t=!0);var R=Ue;if(Ue=0,ea=null,ir(e,b,w,R),n&&tr){d=0;break e}break;default:R=Ue,Ue=0,ea=null,ir(e,b,w,R)}}_1(),d=it;break}catch(P){u0(e,P)}while(!0);return t&&e.shellSuspendCounter++,en=il=null,Le=l,U.H=i,U.A=c,_e===null&&(Fe=null,Te=0,su()),d}function _1(){for(;_e!==null;)s0(_e)}function w1(e,t){var n=Le;Le|=2;var l=o0(),i=c0();Fe!==e||Te!==t?(Pu=null,ku=Ke()+500,rr(e,t)):tr=Ne(e,t);e:do try{if(Ue!==0&&_e!==null){t=_e;var c=ea;t:switch(Ue){case 1:Ue=0,ea=null,ir(e,t,c,1);break;case 2:case 9:if(Eh(c)){Ue=0,ea=null,f0(t);break}t=function(){Ue!==2&&Ue!==9||Fe!==e||(Ue=7),qa(e)},c.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Eh(c)?(Ue=0,ea=null,f0(t)):(Ue=0,ea=null,ir(e,t,c,7));break;case 5:var d=null;switch(_e.tag){case 26:d=_e.memoizedState;case 5:case 27:var b=_e;if(!d||X0(d)){Ue=0,ea=null;var w=b.sibling;if(w!==null)_e=w;else{var R=b.return;R!==null?(_e=R,Yu(R)):_e=null}break t}}Ue=0,ea=null,ir(e,t,c,5);break;case 6:Ue=0,ea=null,ir(e,t,c,6);break;case 8:As(),it=6;break e;default:throw Error(o(462))}}$1();break}catch(P){u0(e,P)}while(!0);return en=il=null,U.H=l,U.A=i,Le=n,_e!==null?0:(Fe=null,Te=0,su(),it)}function $1(){for(;_e!==null&&!Ea();)s0(_e)}function s0(e){var t=jm(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?Yu(e):_e=t}function f0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cm(n,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Cm(n,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:Xc(t);default:Um(n,t),t=_e=dh(t,cn),t=jm(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?Yu(e):_e=t}function ir(e,t,n,l){en=il=null,Xc(t),Wl=null,ni=0;var i=t.return;try{if(m1(e,i,t,n,Te)){it=1,Ru(e,ha(n,e.current)),_e=null;return}}catch(c){if(i!==null)throw _e=i,c;it=1,Ru(e,ha(n,e.current)),_e=null;return}t.flags&32768?(De||l===1?e=!0:tr||(Te&536870912)!==0?e=!1:(Rn=e=!0,(l===2||l===9||l===3||l===6)&&(l=ga.current,l!==null&&l.tag===13&&(l.flags|=16384))),d0(t,e)):Yu(t)}function Yu(e){var t=e;do{if((t.flags&32768)!==0){d0(t,Rn);return}e=t.return;var n=y1(t.alternate,t,cn);if(n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);it===0&&(it=5)}function d0(e,t){do{var n=g1(e.alternate,e);if(n!==null){n.flags&=32767,_e=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){_e=e;return}_e=e=n}while(e!==null);it=6,_e=null}function h0(e,t,n,l,i,c,d,b,w){e.cancelPendingCommit=null;do Gu();while(Tt!==0);if((Le&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(c=t.lanes|t.childLanes,c|=xc,vn(e,n,c,d,b,w),e===Fe&&(_e=Fe=null,Te=0),nr=t,jn=e,lr=n,Ns=c,Ts=i,n0=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,A1(lt,function(){return v0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=U.T,U.T=null,i=ee.p,ee.p=2,d=Le,Le|=4;try{v1(e,t,n)}finally{Le=d,ee.p=i,U.T=l}}Tt=1,m0(),p0(),y0()}}function m0(){if(Tt===1){Tt=0;var e=jn,t=nr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var l=ee.p;ee.p=2;var i=Le;Le|=4;try{Km(t,e);var c=Ys,d=ah(e.containerInfo),b=c.focusedElem,w=c.selectionRange;if(d!==b&&b&&b.ownerDocument&&th(b.ownerDocument.documentElement,b)){if(w!==null&&yc(b)){var R=w.start,P=w.end;if(P===void 0&&(P=R),"selectionStart"in b)b.selectionStart=R,b.selectionEnd=Math.min(P,b.value.length);else{var V=b.ownerDocument||document,z=V&&V.defaultView||window;if(z.getSelection){var j=z.getSelection(),ye=b.textContent.length,me=Math.min(w.start,ye),Ye=w.end===void 0?me:Math.min(w.end,ye);!j.extend&&me>Ye&&(d=Ye,Ye=me,me=d);var O=eh(b,me),M=eh(b,Ye);if(O&&M&&(j.rangeCount!==1||j.anchorNode!==O.node||j.anchorOffset!==O.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var B=V.createRange();B.setStart(O.node,O.offset),j.removeAllRanges(),me>Ye?(j.addRange(B),j.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),j.addRange(B))}}}}for(V=[],j=b;j=j.parentNode;)j.nodeType===1&&V.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<V.length;b++){var q=V[b];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}ao=!!qs,Ys=qs=null}finally{Le=i,ee.p=l,U.T=n}}e.current=t,Tt=2}}function p0(){if(Tt===2){Tt=0;var e=jn,t=nr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var l=ee.p;ee.p=2;var i=Le;Le|=4;try{Xm(e,t.alternate,t)}finally{Le=i,ee.p=l,U.T=n}}Tt=3}}function y0(){if(Tt===4||Tt===3){Tt=0,wt();var e=jn,t=nr,n=lr,l=n0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Tt=5:(Tt=0,nr=jn=null,g0(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Hn=null),Ha(n),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(za,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=U.T,i=ee.p,ee.p=2,U.T=null;try{for(var c=e.onRecoverableError,d=0;d<l.length;d++){var b=l[d];c(b.value,{componentStack:b.stack})}}finally{U.T=t,ee.p=i}}(lr&3)!==0&&Gu(),qa(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===Ms?di++:(di=0,Ms=e):di=0,hi(0)}}function g0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xr(t)))}function Gu(e){return m0(),p0(),y0(),v0()}function v0(){if(Tt!==5)return!1;var e=jn,t=Ns;Ns=0;var n=Ha(lr),l=U.T,i=ee.p;try{ee.p=32>n?32:n,U.T=null,n=Ts,Ts=null;var c=jn,d=lr;if(Tt=0,nr=jn=null,lr=0,(Le&6)!==0)throw Error(o(331));var b=Le;if(Le|=4,t0(c.current),Jm(c,c.current,d,n),Le=b,hi(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(za,c)}catch{}return!0}finally{ee.p=i,U.T=l,g0(e,t)}}function b0(e,t,n){t=ha(n,t),t=is(e.stateNode,t,2),e=Tn(e,t,2),e!==null&&(Ft(e,2),qa(e))}function Ve(e,t,n){if(e.tag===3)b0(e,e,n);else for(;t!==null;){if(t.tag===3){b0(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Hn===null||!Hn.has(l))){e=ha(n,e),n=_m(2),l=Tn(t,n,2),l!==null&&(wm(n,l,t,e),Ft(l,2),qa(l));break}}t=t.return}}function Ds(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new x1;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(n)||(Es=!0,i.add(n),e=N1.bind(null,e,t,n),t.then(e,e))}function N1(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&(Te&n)===n&&(it===4||it===3&&(Te&62914560)===Te&&300>Ke()-$s?(Le&2)===0&&rr(e,0):_s|=n,ar===Te&&(ar=0)),qa(e)}function S0(e,t){t===0&&(t=ia()),e=Pl(e,t),e!==null&&(Ft(e,t),qa(e))}function T1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S0(e,n)}function M1(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),S0(e,n)}function A1(e,t){return jt(e,t)}var Vu=null,ur=null,Bs=!1,Xu=!1,Rs=!1,hl=0;function qa(e){e!==ur&&e.next===null&&(ur===null?Vu=ur=e:ur=ur.next=e),Xu=!0,Bs||(Bs=!0,C1())}function hi(e,t){if(!Rs&&Xu){Rs=!0;do for(var n=!1,l=Vu;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var c=0;else{var d=l.suspendedLanes,b=l.pingedLanes;c=(1<<31-st(42|e)+1)-1,c&=i&~(d&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,w0(l,c))}else c=Te,c=Xt(l,l===Fe?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||Ne(l,c)||(n=!0,w0(l,c));l=l.next}while(n);Rs=!1}}function O1(){x0()}function x0(){Xu=Bs=!1;var e=0;hl!==0&&(U1()&&(e=hl),hl=0);for(var t=Ke(),n=null,l=Vu;l!==null;){var i=l.next,c=E0(l,t);c===0?(l.next=null,n===null?Vu=i:n.next=i,i===null&&(ur=n)):(n=l,(e!==0||(c&3)!==0)&&(Xu=!0)),l=i}hi(e)}function E0(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var d=31-st(c),b=1<<d,w=i[d];w===-1?((b&n)===0||(b&l)!==0)&&(i[d]=Qt(b,t)):w<=t&&(e.expiredLanes|=b),c&=~b}if(t=Fe,n=Te,n=Xt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ra(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ne(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Ra(l),Ha(n)){case 2:case 8:n=tt;break;case 32:n=lt;break;case 268435456:n=Ml;break;default:n=lt}return l=_0.bind(null,e),n=jt(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Ra(l),e.callbackPriority=2,e.callbackNode=null,2}function _0(e,t){if(Tt!==0&&Tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gu()&&e.callbackNode!==n)return null;var l=Te;return l=Xt(e,e===Fe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(r0(e,l,t),E0(e,Ke()),e.callbackNode!=null&&e.callbackNode===n?_0.bind(null,e):null)}function w0(e,t){if(Gu())return null;r0(e,t,!0)}function C1(){P1(function(){(Le&6)!==0?jt(Lt,O1):x0()})}function zs(){return hl===0&&(hl=Zt()),hl}function $0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nu(""+e)}function N0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function D1(e,t,n,l,i){if(t==="submit"&&n&&n.stateNode===i){var c=$0((i[Dt]||null).action),d=l.submitter;d&&(t=(t=d[Dt]||null)?$0(t.formAction):d.getAttribute("formAction"),t!==null&&(c=t,d=null));var b=new uu("action","action",null,l,i);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(hl!==0){var w=d?N0(i,d):new FormData(i);ts(n,{pending:!0,data:w,method:i.method,action:c},null,w)}}else typeof c=="function"&&(b.preventDefault(),w=d?N0(i,d):new FormData(i),ts(n,{pending:!0,data:w,method:i.method,action:c},c,w))},currentTarget:i}]})}}for(var Hs=0;Hs<Sc.length;Hs++){var js=Sc[Hs],B1=js.toLowerCase(),R1=js[0].toUpperCase()+js.slice(1);Aa(B1,"on"+R1)}Aa(rh,"onAnimationEnd"),Aa(ih,"onAnimationIteration"),Aa(uh,"onAnimationStart"),Aa("dblclick","onDoubleClick"),Aa("focusin","onFocus"),Aa("focusout","onBlur"),Aa(Wv,"onTransitionRun"),Aa(Jv,"onTransitionStart"),Aa(Iv,"onTransitionCancel"),Aa(oh,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Na("onBeforeInput",["compositionend","keypress","textInput","paste"]),Na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mi));function T0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],i=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var d=l.length-1;0<=d;d--){var b=l[d],w=b.instance,R=b.currentTarget;if(b=b.listener,w!==c&&i.isPropagationStopped())break e;c=b,i.currentTarget=R;try{c(i)}catch(P){Bu(P)}i.currentTarget=null,c=w}else for(d=0;d<l.length;d++){if(b=l[d],w=b.instance,R=b.currentTarget,b=b.listener,w!==c&&i.isPropagationStopped())break e;c=b,i.currentTarget=R;try{c(i)}catch(P){Bu(P)}i.currentTarget=null,c=w}}}}function we(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var l=e+"__bubble";n.has(l)||(M0(t,e,2,!1),n.add(l))}function Ls(e,t,n){var l=0;t&&(l|=4),M0(n,e,l,t)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function Us(e){if(!e[Qu]){e[Qu]=!0,Fi.forEach(function(n){n!=="selectionchange"&&(z1.has(n)||Ls(n,!1,e),Ls(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qu]||(t[Qu]=!0,Ls("selectionchange",!1,t))}}function M0(e,t,n,l){switch(J0(t)){case 2:var i=ob;break;case 8:i=cb;break;default:i=Is}n=i.bind(null,t,n,e),i=void 0,!uc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ks(e,t,n,l,i){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var b=l.stateNode.containerInfo;if(b===i)break;if(d===4)for(d=l.return;d!==null;){var w=d.tag;if((w===3||w===4)&&d.stateNode.containerInfo===i)return;d=d.return}for(;b!==null;){if(d=Za(b),d===null)return;if(w=d.tag,w===5||w===6||w===26||w===27){l=c=d;continue e}b=b.parentNode}}l=l.return}zd(function(){var R=c,P=rc(n),V=[];e:{var z=ch.get(e);if(z!==void 0){var j=uu,ye=e;switch(e){case"keypress":if(ru(n)===0)break e;case"keydown":case"keyup":j=Av;break;case"focusin":ye="focus",j=fc;break;case"focusout":ye="blur",j=fc;break;case"beforeblur":case"afterblur":j=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Dv;break;case rh:case ih:case uh:j=Sv;break;case oh:j=Rv;break;case"scroll":case"scrollend":j=pv;break;case"wheel":j=Hv;break;case"copy":case"cut":case"paste":j=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=kd;break;case"toggle":case"beforetoggle":j=Lv}var me=(t&4)!==0,Ye=!me&&(e==="scroll"||e==="scrollend"),O=me?z!==null?z+"Capture":null:z;me=[];for(var M=R,B;M!==null;){var q=M;if(B=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||B===null||O===null||(q=Br(M,O),q!=null&&me.push(pi(M,q,B))),Ye)break;M=M.return}0<me.length&&(z=new j(z,ye,null,n,P),V.push({event:z,listeners:me}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&n!==lc&&(ye=n.relatedTarget||n.fromElement)&&(Za(ye)||ye[$a]))break e;if((j||z)&&(z=P.window===P?P:(z=P.ownerDocument)?z.defaultView||z.parentWindow:window,j?(ye=n.relatedTarget||n.toElement,j=R,ye=ye?Za(ye):null,ye!==null&&(Ye=f(ye),me=ye.tag,ye!==Ye||me!==5&&me!==27&&me!==6)&&(ye=null)):(j=null,ye=R),j!==ye)){if(me=Ld,q="onMouseLeave",O="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(me=kd,q="onPointerLeave",O="onPointerEnter",M="pointer"),Ye=j==null?z:Fa(j),B=ye==null?z:Fa(ye),z=new me(q,M+"leave",j,n,P),z.target=Ye,z.relatedTarget=B,q=null,Za(P)===R&&(me=new me(O,M+"enter",ye,n,P),me.target=B,me.relatedTarget=Ye,q=me),Ye=q,j&&ye)t:{for(me=j,O=ye,M=0,B=me;B;B=or(B))M++;for(B=0,q=O;q;q=or(q))B++;for(;0<M-B;)me=or(me),M--;for(;0<B-M;)O=or(O),B--;for(;M--;){if(me===O||O!==null&&me===O.alternate)break t;me=or(me),O=or(O)}me=null}else me=null;j!==null&&A0(V,z,j,me,!1),ye!==null&&Ye!==null&&A0(V,Ye,ye,me,!0)}}e:{if(z=R?Fa(R):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var le=Zd;else if(Xd(z))if(Fd)le=Zv;else{le=Xv;var Ee=Vv}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?R&&nc(R.elementType)&&(le=Zd):le=Qv;if(le&&(le=le(e,R))){Qd(V,le,n,P);break e}Ee&&Ee(e,z,R),e==="focusout"&&R&&z.type==="number"&&R.memoizedProps.value!=null&&Ge(z,"number",z.value)}switch(Ee=R?Fa(R):window,e){case"focusin":(Xd(Ee)||Ee.contentEditable==="true")&&(Ll=Ee,gc=R,Pr=null);break;case"focusout":Pr=gc=Ll=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,nh(V,n,P);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":nh(V,n,P)}var ce;if(hc)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else jl?Gd(e,n)&&(pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(pe="onCompositionStart");pe&&(Pd&&n.locale!=="ko"&&(jl||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&jl&&(ce=Hd()):(_n=P,oc="value"in _n?_n.value:_n.textContent,jl=!0)),Ee=Zu(R,pe),0<Ee.length&&(pe=new Ud(pe,e,null,n,P),V.push({event:pe,listeners:Ee}),ce?pe.data=ce:(ce=Vd(n),ce!==null&&(pe.data=ce)))),(ce=kv?Pv(e,n):qv(e,n))&&(pe=Zu(R,"onBeforeInput"),0<pe.length&&(Ee=new Ud("onBeforeInput","beforeinput",null,n,P),V.push({event:Ee,listeners:pe}),Ee.data=ce)),D1(V,e,R,n,P)}T0(V,t)})}function pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zu(e,t){for(var n=t+"Capture",l=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=Br(e,n),i!=null&&l.unshift(pi(e,i,c)),i=Br(e,t),i!=null&&l.push(pi(e,i,c))),e.tag===3)return l;e=e.return}return[]}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function A0(e,t,n,l,i){for(var c=t._reactName,d=[];n!==null&&n!==l;){var b=n,w=b.alternate,R=b.stateNode;if(b=b.tag,w!==null&&w===l)break;b!==5&&b!==26&&b!==27||R===null||(w=R,i?(R=Br(n,c),R!=null&&d.unshift(pi(n,R,w))):i||(R=Br(n,c),R!=null&&d.push(pi(n,R,w)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var H1=/\r\n?/g,j1=/\u0000|\uFFFD/g;function O0(e){return(typeof e=="string"?e:""+e).replace(H1,`
`).replace(j1,"")}function C0(e,t){return t=O0(t),O0(e)===t}function Fu(){}function qe(e,t,n,l,i,c){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ut(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ut(e,""+l);break;case"className":Cl(e,"class",l);break;case"tabIndex":Cl(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(e,n,l);break;case"style":Rl(e,l,c);break;case"data":if(t!=="object"){Cl(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=nu(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&qe(e,t,"name",i.name,i,null),qe(e,t,"formEncType",i.formEncType,i,null),qe(e,t,"formMethod",i.formMethod,i,null),qe(e,t,"formTarget",i.formTarget,i,null)):(qe(e,t,"encType",i.encType,i,null),qe(e,t,"method",i.method,i,null),qe(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=nu(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Fu);break;case"onScroll":l!=null&&we("scroll",e);break;case"onScrollEnd":l!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=nu(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":we("beforetoggle",e),we("toggle",e),Sn(e,"popover",l);break;case"xlinkActuate":Ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ta(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ta(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ta(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ta(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hv.get(n)||n,Sn(e,n,l))}}function Ps(e,t,n,l,i,c){switch(n){case"style":Rl(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ut(e,l):(typeof l=="number"||typeof l=="bigint")&&Ut(e,""+l);break;case"onScroll":l!=null&&we("scroll",e);break;case"onScrollEnd":l!=null&&we("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ki.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),c=e[Dt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,i);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Sn(e,n,l)}}}function Mt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var l=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var d=n[c];if(d!=null)switch(c){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:qe(e,t,c,d,n,null)}}i&&qe(e,t,"srcSet",n.srcSet,n,null),l&&qe(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var b=c=d=i=null,w=null,R=null;for(l in n)if(n.hasOwnProperty(l)){var P=n[l];if(P!=null)switch(l){case"name":i=P;break;case"type":d=P;break;case"checked":w=P;break;case"defaultChecked":R=P;break;case"value":c=P;break;case"defaultValue":b=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,t));break;default:qe(e,t,l,P,n,null)}}ue(e,c,b,w,R,d,i,!1),Bl(e);return;case"select":we("invalid",e),l=d=c=null;for(i in n)if(n.hasOwnProperty(i)&&(b=n[i],b!=null))switch(i){case"value":c=b;break;case"defaultValue":d=b;break;case"multiple":l=b;default:qe(e,t,i,b,n,null)}t=c,n=d,e.multiple=!!l,t!=null?ut(e,!!l,t,!1):n!=null&&ut(e,!!l,n,!0);return;case"textarea":we("invalid",e),c=i=l=null;for(d in n)if(n.hasOwnProperty(d)&&(b=n[d],b!=null))switch(d){case"value":l=b;break;case"defaultValue":i=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:qe(e,t,d,b,n,null)}ja(e,l,i,c),Bl(e);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(l=n[w],l!=null))switch(w){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:qe(e,t,w,l,n,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(l=0;l<mi.length;l++)we(mi[l],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(l=n[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:qe(e,t,R,l,n,null)}return;default:if(nc(t)){for(P in n)n.hasOwnProperty(P)&&(l=n[P],l!==void 0&&Ps(e,t,P,l,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!=null&&qe(e,t,b,l,n,null))}function L1(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,d=null,b=null,w=null,R=null,P=null;for(j in n){var V=n[j];if(n.hasOwnProperty(j)&&V!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=V;default:l.hasOwnProperty(j)||qe(e,t,j,null,l,V)}}for(var z in l){var j=l[z];if(V=n[z],l.hasOwnProperty(z)&&(j!=null||V!=null))switch(z){case"type":c=j;break;case"name":i=j;break;case"checked":R=j;break;case"defaultChecked":P=j;break;case"value":d=j;break;case"defaultValue":b=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,t));break;default:j!==V&&qe(e,t,z,j,l,V)}}de(e,d,b,w,R,P,c,i);return;case"select":j=d=b=z=null;for(c in n)if(w=n[c],n.hasOwnProperty(c)&&w!=null)switch(c){case"value":break;case"multiple":j=w;default:l.hasOwnProperty(c)||qe(e,t,c,null,l,w)}for(i in l)if(c=l[i],w=n[i],l.hasOwnProperty(i)&&(c!=null||w!=null))switch(i){case"value":z=c;break;case"defaultValue":b=c;break;case"multiple":d=c;default:c!==w&&qe(e,t,i,c,l,w)}t=b,n=d,l=j,z!=null?ut(e,!!n,z,!1):!!l!=!!n&&(t!=null?ut(e,!!n,t,!0):ut(e,!!n,n?[]:"",!1));return;case"textarea":j=z=null;for(b in n)if(i=n[b],n.hasOwnProperty(b)&&i!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:qe(e,t,b,null,l,i)}for(d in l)if(i=l[d],c=n[d],l.hasOwnProperty(d)&&(i!=null||c!=null))switch(d){case"value":z=i;break;case"defaultValue":j=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==c&&qe(e,t,d,i,l,c)}En(e,z,j);return;case"option":for(var ye in n)if(z=n[ye],n.hasOwnProperty(ye)&&z!=null&&!l.hasOwnProperty(ye))switch(ye){case"selected":e.selected=!1;break;default:qe(e,t,ye,null,l,z)}for(w in l)if(z=l[w],j=n[w],l.hasOwnProperty(w)&&z!==j&&(z!=null||j!=null))switch(w){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:qe(e,t,w,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in n)z=n[me],n.hasOwnProperty(me)&&z!=null&&!l.hasOwnProperty(me)&&qe(e,t,me,null,l,z);for(R in l)if(z=l[R],j=n[R],l.hasOwnProperty(R)&&z!==j&&(z!=null||j!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:qe(e,t,R,z,l,j)}return;default:if(nc(t)){for(var Ye in n)z=n[Ye],n.hasOwnProperty(Ye)&&z!==void 0&&!l.hasOwnProperty(Ye)&&Ps(e,t,Ye,void 0,l,z);for(P in l)z=l[P],j=n[P],!l.hasOwnProperty(P)||z===j||z===void 0&&j===void 0||Ps(e,t,P,z,l,j);return}}for(var O in n)z=n[O],n.hasOwnProperty(O)&&z!=null&&!l.hasOwnProperty(O)&&qe(e,t,O,null,l,z);for(V in l)z=l[V],j=n[V],!l.hasOwnProperty(V)||z===j||z==null&&j==null||qe(e,t,V,z,l,j)}var qs=null,Ys=null;function Ku(e){return e.nodeType===9?e:e.ownerDocument}function D0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vs=null;function U1(){var e=window.event;return e&&e.type==="popstate"?e===Vs?!1:(Vs=e,!0):(Vs=null,!1)}var R0=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,z0=typeof Promise=="function"?Promise:void 0,P1=typeof queueMicrotask=="function"?queueMicrotask:typeof z0<"u"?function(e){return z0.resolve(null).then(e).catch(q1)}:R0;function q1(e){setTimeout(function(){throw e})}function Un(e){return e==="head"}function H0(e,t){var n=t,l=0,i=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"){if(0<l&&8>l){n=l;var d=e.ownerDocument;if(n&1&&yi(d.documentElement),n&2&&yi(d.body),n&4)for(n=d.head,yi(n),d=n.firstChild;d;){var b=d.nextSibling,w=d.nodeName;d[Bt]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=b}}if(i===0){e.removeChild(c),wi(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:l=n.charCodeAt(0)-48;else l=0;n=c}while(n);wi(t)}function Xs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Xs(n),Mr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Y1(e,t,n,l){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ca(e.nextSibling),e===null)break}return null}function G1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ca(e.nextSibling),e===null))return null;return e}function Qs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function V1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ca(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Zs=null;function j0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function L0(e,t,n){switch(t=Ku(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mr(e)}var ba=new Map,U0=new Set;function Wu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sn=ee.d;ee.d={f:X1,r:Q1,D:Z1,C:F1,L:K1,m:W1,X:I1,S:J1,M:eb};function X1(){var e=sn.f(),t=qu();return e||t}function Q1(e){var t=fa(e);t!==null&&t.tag===5&&t.type==="form"?rm(t):sn.r(e)}var cr=typeof document>"u"?null:document;function k0(e,t,n){var l=cr;if(l&&typeof t=="string"&&t){var i=W(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),U0.has(i)||(U0.add(i),e={rel:e,crossOrigin:n,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),Mt(t,"link",e),ft(t),l.head.appendChild(t)))}}function Z1(e){sn.D(e),k0("dns-prefetch",e,null)}function F1(e,t){sn.C(e,t),k0("preconnect",e,t)}function K1(e,t,n){sn.L(e,t,n);var l=cr;if(l&&e&&t){var i='link[rel="preload"][as="'+W(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+W(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+W(n.imageSizes)+'"]')):i+='[href="'+W(e)+'"]';var c=i;switch(t){case"style":c=sr(e);break;case"script":c=fr(e)}ba.has(c)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ba.set(c,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(gi(c))||t==="script"&&l.querySelector(vi(c))||(t=l.createElement("link"),Mt(t,"link",e),ft(t),l.head.appendChild(t)))}}function W1(e,t){sn.m(e,t);var n=cr;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+W(l)+'"][href="'+W(e)+'"]',c=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=fr(e)}if(!ba.has(c)&&(e=v({rel:"modulepreload",href:e},t),ba.set(c,e),n.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(vi(c)))return}l=n.createElement("link"),Mt(l,"link",e),ft(l),n.head.appendChild(l)}}}function J1(e,t,n){sn.S(e,t,n);var l=cr;if(l&&e){var i=bn(l).hoistableStyles,c=sr(e);t=t||"default";var d=i.get(c);if(!d){var b={loading:0,preload:null};if(d=l.querySelector(gi(c)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ba.get(c))&&Fs(e,n);var w=d=l.createElement("link");ft(w),Mt(w,"link",e),w._p=new Promise(function(R,P){w.onload=R,w.onerror=P}),w.addEventListener("load",function(){b.loading|=1}),w.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ju(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:b},i.set(c,d)}}}function I1(e,t){sn.X(e,t);var n=cr;if(n&&e){var l=bn(n).hoistableScripts,i=fr(e),c=l.get(i);c||(c=n.querySelector(vi(i)),c||(e=v({src:e,async:!0},t),(t=ba.get(i))&&Ks(e,t),c=n.createElement("script"),ft(c),Mt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function eb(e,t){sn.M(e,t);var n=cr;if(n&&e){var l=bn(n).hoistableScripts,i=fr(e),c=l.get(i);c||(c=n.querySelector(vi(i)),c||(e=v({src:e,async:!0,type:"module"},t),(t=ba.get(i))&&Ks(e,t),c=n.createElement("script"),ft(c),Mt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(i,c))}}function P0(e,t,n,l){var i=(i=oe.current)?Wu(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=sr(n.href),n=bn(i).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=sr(n.href);var c=bn(i).hoistableStyles,d=c.get(e);if(d||(i=i.ownerDocument||i,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=i.querySelector(gi(e)))&&!c._p&&(d.instance=c,d.state.loading=5),ba.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ba.set(e,n),c||tb(i,e,n,d.state))),t&&l===null)throw Error(o(528,""));return d}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fr(n),n=bn(i).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function sr(e){return'href="'+W(e)+'"'}function gi(e){return'link[rel="stylesheet"]['+e+"]"}function q0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function tb(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Mt(t,"link",n),ft(t),e.head.appendChild(t))}function fr(e){return'[src="'+W(e)+'"]'}function vi(e){return"script[async]"+e}function Y0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+W(n.href)+'"]');if(l)return t.instance=l,ft(l),l;var i=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ft(l),Mt(l,"style",i),Ju(l,n.precedence,e),t.instance=l;case"stylesheet":i=sr(n.href);var c=e.querySelector(gi(i));if(c)return t.state.loading|=4,t.instance=c,ft(c),c;l=q0(n),(i=ba.get(i))&&Fs(l,i),c=(e.ownerDocument||e).createElement("link"),ft(c);var d=c;return d._p=new Promise(function(b,w){d.onload=b,d.onerror=w}),Mt(c,"link",l),t.state.loading|=4,Ju(c,n.precedence,e),t.instance=c;case"script":return c=fr(n.src),(i=e.querySelector(vi(c)))?(t.instance=i,ft(i),i):(l=n,(i=ba.get(c))&&(l=v({},n),Ks(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),ft(i),Mt(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ju(l,n.precedence,e));return t.instance}function Ju(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,c=i,d=0;d<l.length;d++){var b=l[d];if(b.dataset.precedence===t)c=b;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Fs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Iu=null;function G0(e,t,n){if(Iu===null){var l=new Map,i=Iu=new Map;i.set(n,l)}else i=Iu,l=i.get(n),l||(l=new Map,i.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var c=n[i];if(!(c[Bt]||c[at]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var d=c.getAttribute(t)||"";d=e+d;var b=l.get(d);b?b.push(c):l.set(d,[c])}}return l}function V0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ab(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function X0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bi=null;function nb(){}function lb(e,t,n){if(bi===null)throw Error(o(475));var l=bi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=sr(n.href),c=e.querySelector(gi(i));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=eo.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=c,ft(c);return}c=e.ownerDocument||e,n=q0(n),(i=ba.get(i))&&Fs(n,i),c=c.createElement("link"),ft(c);var d=c;d._p=new Promise(function(b,w){d.onload=b,d.onerror=w}),Mt(c,"link",n),t.instance=c}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=eo.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function rb(){if(bi===null)throw Error(o(475));var e=bi;return e.stylesheets&&e.count===0&&Ws(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ws(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function eo(){if(this.count--,this.count===0){if(this.stylesheets)Ws(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var to=null;function Ws(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,to=new Map,t.forEach(ib,e),to=null,eo.call(e))}function ib(e,t){if(!(t.state.loading&4)){var n=to.get(e);if(n)var l=n.get(null);else{n=new Map,to.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var d=i[c];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}i=t.instance,d=i.getAttribute("data-precedence"),c=n.get(d)||l,c===l&&n.set(null,i),n.set(d,i),this.count++,l=eo.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Si={$$typeof:H,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function ub(e,t,n,l,i,c,d,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ua(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.hiddenUpdates=ua(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Q0(e,t,n,l,i,c,d,b,w,R,P,V){return e=new ub(e,t,n,d,b,w,R,V),t=1,c===!0&&(t|=24),c=Wt(3,null,null,t),e.current=c,c.stateNode=e,t=Dc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:t},Hc(c),e}function Z0(e){return e?(e=ql,e):ql}function F0(e,t,n,l,i,c){i=Z0(i),l.context===null?l.context=i:l.pendingContext=i,l=Nn(t),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Tn(e,l,t),n!==null&&(aa(n,e,t),Kr(n,e,t))}function K0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Js(e,t){K0(e,t),(e=e.alternate)&&K0(e,t)}function W0(e){if(e.tag===13){var t=Pl(e,67108864);t!==null&&aa(t,e,67108864),Js(e,67108864)}}var ao=!0;function ob(e,t,n,l){var i=U.T;U.T=null;var c=ee.p;try{ee.p=2,Is(e,t,n,l)}finally{ee.p=c,U.T=i}}function cb(e,t,n,l){var i=U.T;U.T=null;var c=ee.p;try{ee.p=8,Is(e,t,n,l)}finally{ee.p=c,U.T=i}}function Is(e,t,n,l){if(ao){var i=ef(l);if(i===null)ks(e,t,l,no,n),I0(e,l);else if(fb(i,e,t,n,l))l.stopPropagation();else if(I0(e,l),t&4&&-1<sb.indexOf(e)){for(;i!==null;){var c=fa(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var d=je(c.pendingLanes);if(d!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;d;){var w=1<<31-st(d);b.entanglements[1]|=w,d&=~w}qa(c),(Le&6)===0&&(ku=Ke()+500,hi(0))}}break;case 13:b=Pl(c,2),b!==null&&aa(b,c,2),qu(),Js(c,2)}if(c=ef(l),c===null&&ks(e,t,l,no,n),c===i)break;i=c}i!==null&&l.stopPropagation()}else ks(e,t,l,null,n)}}function ef(e){return e=rc(e),tf(e)}var no=null;function tf(e){if(no=null,e=Za(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return no=e,null}function J0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pt()){case Lt:return 2;case tt:return 8;case lt:case _a:return 32;case Ml:return 268435456;default:return 32}default:return 32}}var af=!1,kn=null,Pn=null,qn=null,xi=new Map,Ei=new Map,Yn=[],sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(e,t){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":xi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function _i(e,t,n,l,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[i]},t!==null&&(t=fa(t),t!==null&&W0(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fb(e,t,n,l,i){switch(t){case"focusin":return kn=_i(kn,e,t,n,l,i),!0;case"dragenter":return Pn=_i(Pn,e,t,n,l,i),!0;case"mouseover":return qn=_i(qn,e,t,n,l,i),!0;case"pointerover":var c=i.pointerId;return xi.set(c,_i(xi.get(c)||null,e,t,n,l,i)),!0;case"gotpointercapture":return c=i.pointerId,Ei.set(c,_i(Ei.get(c)||null,e,t,n,l,i)),!0}return!1}function ep(e){var t=Za(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,wa(e.priority,function(){if(n.tag===13){var l=ta();l=Al(l);var i=Pl(n,l);i!==null&&aa(i,n,l),Js(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ef(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);lc=l,n.target.dispatchEvent(l),lc=null}else return t=fa(n),t!==null&&W0(t),e.blockedOn=n,!1;t.shift()}return!0}function tp(e,t,n){lo(e)&&n.delete(t)}function db(){af=!1,kn!==null&&lo(kn)&&(kn=null),Pn!==null&&lo(Pn)&&(Pn=null),qn!==null&&lo(qn)&&(qn=null),xi.forEach(tp),Ei.forEach(tp)}function ro(e,t){e.blockedOn===t&&(e.blockedOn=null,af||(af=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,db)))}var io=null;function ap(e){io!==e&&(io=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){io===e&&(io=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(tf(l||n)===null)continue;break}var c=fa(n);c!==null&&(e.splice(t,3),t-=3,ts(c,{pending:!0,data:i,method:n.method,action:l},l,i))}}))}function wi(e){function t(w){return ro(w,e)}kn!==null&&ro(kn,e),Pn!==null&&ro(Pn,e),qn!==null&&ro(qn,e),xi.forEach(t),Ei.forEach(t);for(var n=0;n<Yn.length;n++){var l=Yn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)ep(n),n.blockedOn===null&&Yn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var i=n[l],c=n[l+1],d=i[Dt]||null;if(typeof c=="function")d||ap(n);else if(d){var b=null;if(c&&c.hasAttribute("formAction")){if(i=c,d=c[Dt]||null)b=d.formAction;else if(tf(i)!==null)continue}else b=d.action;typeof b=="function"?n[l+1]=b:(n.splice(l,3),l-=3),ap(n)}}}function nf(e){this._internalRoot=e}uo.prototype.render=nf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=ta();F0(n,l,e,t,null,null)},uo.prototype.unmount=nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;F0(e.current,2,null,e,null,null),qu(),t[$a]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yn.length&&t!==0&&t<Yn[n].priority;n++);Yn.splice(n,0,e),n===0&&ep(e)}};var np=r.version;if(np!=="19.1.0")throw Error(o(527,np,"19.1.0"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=p(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var hb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{za=oo.inject(hb),bt=oo}catch{}}return Ni.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,l="",i=bm,c=Sm,d=xm,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=Q0(e,1,!1,null,null,n,l,i,c,d,b,null),e[$a]=t.current,Us(e),new nf(t)},Ni.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var l=!1,i="",c=bm,d=Sm,b=xm,w=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=Q0(e,1,!0,t,n??null,l,i,c,d,b,w,R),t.context=Z0(null),n=t.current,l=ta(),l=Al(l),i=Nn(l),i.callback=null,Tn(n,i,l),n=l,t.current.lanes=n,Ft(t,n),qa(t),e[$a]=t.current,Us(e),new uo(t)},Ni.version="19.1.0",Ni}var hp;function _b(){if(hp)return uf.exports;hp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),uf.exports=Eb(),uf.exports}var wb=_b(),Ht=function(){return Ht=Object.assign||function(r){for(var u,o=1,s=arguments.length;o<s;o++){u=arguments[o];for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&(r[f]=u[f])}return r},Ht.apply(this,arguments)};function Ri(a,r,u){if(u||arguments.length===2)for(var o=0,s=r.length,f;o<s;o++)(f||!(o in r))&&(f||(f=Array.prototype.slice.call(r,0,o)),f[o]=r[o]);return a.concat(f||Array.prototype.slice.call(r))}var We="-ms-",Bi="-moz-",Re="-webkit-",Cy="comm",jo="rule",rd="decl",$b="@import",Dy="@keyframes",Nb="@layer",By=Math.abs,id=String.fromCharCode,Mf=Object.assign;function Tb(a,r){return _t(a,0)^45?(((r<<2^_t(a,0))<<2^_t(a,1))<<2^_t(a,2))<<2^_t(a,3):0}function Ry(a){return a.trim()}function fn(a,r){return(a=r.exec(a))?a[0]:a}function Se(a,r,u){return a.replace(r,u)}function yo(a,r,u){return a.indexOf(r,u)}function _t(a,r){return a.charCodeAt(r)|0}function yr(a,r,u){return a.slice(r,u)}function Ya(a){return a.length}function zy(a){return a.length}function Oi(a,r){return r.push(a),a}function Mb(a,r){return a.map(r).join("")}function mp(a,r){return a.filter(function(u){return!fn(u,r)})}var Lo=1,gr=1,Hy=0,Sa=0,mt=0,wr="";function Uo(a,r,u,o,s,f,m,g){return{value:a,root:r,parent:u,type:o,props:s,children:f,line:Lo,column:gr,length:m,return:"",siblings:g}}function Vn(a,r){return Mf(Uo("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function dr(a){for(;a.root;)a=Vn(a.root,{children:[a]});Oi(a,a.siblings)}function Ab(){return mt}function Ob(){return mt=Sa>0?_t(wr,--Sa):0,gr--,mt===10&&(gr=1,Lo--),mt}function Ba(){return mt=Sa<Hy?_t(wr,Sa++):0,gr++,mt===10&&(gr=1,Lo++),mt}function gl(){return _t(wr,Sa)}function go(){return Sa}function ko(a,r){return yr(wr,a,r)}function Af(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cb(a){return Lo=gr=1,Hy=Ya(wr=a),Sa=0,[]}function Db(a){return wr="",a}function ff(a){return Ry(ko(Sa-1,Of(a===91?a+2:a===40?a+1:a)))}function Bb(a){for(;(mt=gl())&&mt<33;)Ba();return Af(a)>2||Af(mt)>3?"":" "}function Rb(a,r){for(;--r&&Ba()&&!(mt<48||mt>102||mt>57&&mt<65||mt>70&&mt<97););return ko(a,go()+(r<6&&gl()==32&&Ba()==32))}function Of(a){for(;Ba();)switch(mt){case a:return Sa;case 34:case 39:a!==34&&a!==39&&Of(mt);break;case 40:a===41&&Of(a);break;case 92:Ba();break}return Sa}function zb(a,r){for(;Ba()&&a+mt!==57;)if(a+mt===84&&gl()===47)break;return"/*"+ko(r,Sa-1)+"*"+id(a===47?a:Ba())}function Hb(a){for(;!Af(gl());)Ba();return ko(a,Sa)}function jb(a){return Db(vo("",null,null,null,[""],a=Cb(a),0,[0],a))}function vo(a,r,u,o,s,f,m,g,p){for(var h=0,v=0,x=m,S=0,N=0,E=0,D=1,A=1,T=1,C=0,H="",Y=s,k=f,F=o,I=H;A;)switch(E=C,C=Ba()){case 40:if(E!=108&&_t(I,x-1)==58){yo(I+=Se(ff(C),"&","&\f"),"&\f",By(h?g[h-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:I+=ff(C);break;case 9:case 10:case 13:case 32:I+=Bb(E);break;case 92:I+=Rb(go()-1,7);continue;case 47:switch(gl()){case 42:case 47:Oi(Lb(zb(Ba(),go()),r,u,p),p);break;default:I+="/"}break;case 123*D:g[h++]=Ya(I)*T;case 125*D:case 59:case 0:switch(C){case 0:case 125:A=0;case 59+v:T==-1&&(I=Se(I,/\f/g,"")),N>0&&Ya(I)-x&&Oi(N>32?yp(I+";",o,u,x-1,p):yp(Se(I," ","")+";",o,u,x-2,p),p);break;case 59:I+=";";default:if(Oi(F=pp(I,r,u,h,v,s,g,H,Y=[],k=[],x,f),f),C===123)if(v===0)vo(I,r,F,F,Y,f,x,g,k);else switch(S===99&&_t(I,3)===110?100:S){case 100:case 108:case 109:case 115:vo(a,F,F,o&&Oi(pp(a,F,F,0,0,s,g,H,s,Y=[],x,k),k),s,k,x,g,o?Y:k);break;default:vo(I,F,F,F,[""],k,0,g,k)}}h=v=N=0,D=T=1,H=I="",x=m;break;case 58:x=1+Ya(I),N=E;default:if(D<1){if(C==123)--D;else if(C==125&&D++==0&&Ob()==125)continue}switch(I+=id(C),C*D){case 38:T=v>0?1:(I+="\f",-1);break;case 44:g[h++]=(Ya(I)-1)*T,T=1;break;case 64:gl()===45&&(I+=ff(Ba())),S=gl(),v=x=Ya(H=I+=Hb(go())),C++;break;case 45:E===45&&Ya(I)==2&&(D=0)}}return f}function pp(a,r,u,o,s,f,m,g,p,h,v,x){for(var S=s-1,N=s===0?f:[""],E=zy(N),D=0,A=0,T=0;D<o;++D)for(var C=0,H=yr(a,S+1,S=By(A=m[D])),Y=a;C<E;++C)(Y=Ry(A>0?N[C]+" "+H:Se(H,/&\f/g,N[C])))&&(p[T++]=Y);return Uo(a,r,u,s===0?jo:g,p,h,v,x)}function Lb(a,r,u,o){return Uo(a,r,u,Cy,id(Ab()),yr(a,2,-2),0,o)}function yp(a,r,u,o,s){return Uo(a,r,u,rd,yr(a,0,o),yr(a,o+1,-1),o,s)}function jy(a,r,u){switch(Tb(a,r)){case 5103:return Re+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Re+a+a;case 4789:return Bi+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+a+Bi+a+We+a+a;case 5936:switch(_t(a,r+11)){case 114:return Re+a+We+Se(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Re+a+We+Se(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Re+a+We+Se(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Re+a+We+a+a;case 6165:return Re+a+We+"flex-"+a+a;case 5187:return Re+a+Se(a,/(\w+).+(:[^]+)/,Re+"box-$1$2"+We+"flex-$1$2")+a;case 5443:return Re+a+We+"flex-item-"+Se(a,/flex-|-self/g,"")+(fn(a,/flex-|baseline/)?"":We+"grid-row-"+Se(a,/flex-|-self/g,""))+a;case 4675:return Re+a+We+"flex-line-pack"+Se(a,/align-content|flex-|-self/g,"")+a;case 5548:return Re+a+We+Se(a,"shrink","negative")+a;case 5292:return Re+a+We+Se(a,"basis","preferred-size")+a;case 6060:return Re+"box-"+Se(a,"-grow","")+Re+a+We+Se(a,"grow","positive")+a;case 4554:return Re+Se(a,/([^-])(transform)/g,"$1"+Re+"$2")+a;case 6187:return Se(Se(Se(a,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),a,"")+a;case 5495:case 3959:return Se(a,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return Se(Se(a,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Re+a+a;case 4200:if(!fn(a,/flex-|baseline/))return We+"grid-column-align"+yr(a,r)+a;break;case 2592:case 3360:return We+Se(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(o,s){return r=s,fn(o.props,/grid-\w+-end/)})?~yo(a+(u=u[r].value),"span",0)?a:We+Se(a,"-start","")+a+We+"grid-row-span:"+(~yo(u,"span",0)?fn(u,/\d+/):+fn(u,/\d+/)-+fn(a,/\d+/))+";":We+Se(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(o){return fn(o.props,/grid-\w+-start/)})?a:We+Se(Se(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Se(a,/(.+)-inline(.+)/,Re+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ya(a)-1-r>6)switch(_t(a,r+1)){case 109:if(_t(a,r+4)!==45)break;case 102:return Se(a,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+Bi+(_t(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~yo(a,"stretch",0)?jy(Se(a,"stretch","fill-available"),r,u)+a:a}break;case 5152:case 5920:return Se(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,f,m,g,p,h){return We+s+":"+f+h+(m?We+s+"-span:"+(g?p:+p-+f)+h:"")+a});case 4949:if(_t(a,r+6)===121)return Se(a,":",":"+Re)+a;break;case 6444:switch(_t(a,_t(a,14)===45?18:11)){case 120:return Se(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Re+(_t(a,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+We+"$2box$3")+a;case 100:return Se(a,":",":"+We)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Se(a,"scroll-","scroll-snap-")+a}return a}function $o(a,r){for(var u="",o=0;o<a.length;o++)u+=r(a[o],o,a,r)||"";return u}function Ub(a,r,u,o){switch(a.type){case Nb:if(a.children.length)break;case $b:case rd:return a.return=a.return||a.value;case Cy:return"";case Dy:return a.return=a.value+"{"+$o(a.children,o)+"}";case jo:if(!Ya(a.value=a.props.join(",")))return""}return Ya(u=$o(a.children,o))?a.return=a.value+"{"+u+"}":""}function kb(a){var r=zy(a);return function(u,o,s,f){for(var m="",g=0;g<r;g++)m+=a[g](u,o,s,f)||"";return m}}function Pb(a){return function(r){r.root||(r=r.return)&&a(r)}}function qb(a,r,u,o){if(a.length>-1&&!a.return)switch(a.type){case rd:a.return=jy(a.value,a.length,u);return;case Dy:return $o([Vn(a,{value:Se(a.value,"@","@"+Re)})],o);case jo:if(a.length)return Mb(u=a.props,function(s){switch(fn(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dr(Vn(a,{props:[Se(s,/:(read-\w+)/,":"+Bi+"$1")]})),dr(Vn(a,{props:[s]})),Mf(a,{props:mp(u,o)});break;case"::placeholder":dr(Vn(a,{props:[Se(s,/:(plac\w+)/,":"+Re+"input-$1")]})),dr(Vn(a,{props:[Se(s,/:(plac\w+)/,":"+Bi+"$1")]})),dr(Vn(a,{props:[Se(s,/:(plac\w+)/,We+"input-$1")]})),dr(Vn(a,{props:[s]})),Mf(a,{props:mp(u,o)});break}return""})}}var Yb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},na={},vr=typeof process<"u"&&na!==void 0&&(na.REACT_APP_SC_ATTR||na.SC_ATTR)||"data-styled",Ly="active",Uy="data-styled-version",Po="6.1.19",ud=`/*!sc*/
`,No=typeof window<"u"&&typeof document<"u",Gb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&na!==void 0&&na.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&na.REACT_APP_SC_DISABLE_SPEEDY!==""?na.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&na.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&na!==void 0&&na.SC_DISABLE_SPEEDY!==void 0&&na.SC_DISABLE_SPEEDY!==""&&na.SC_DISABLE_SPEEDY!=="false"&&na.SC_DISABLE_SPEEDY),qo=Object.freeze([]),br=Object.freeze({});function Vb(a,r,u){return u===void 0&&(u=br),a.theme!==u.theme&&a.theme||r||u.theme}var ky=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qb=/(^-|-$)/g;function gp(a){return a.replace(Xb,"-").replace(Qb,"")}var Zb=/(a)(d)/gi,co=52,vp=function(a){return String.fromCharCode(a+(a>25?39:97))};function Cf(a){var r,u="";for(r=Math.abs(a);r>co;r=r/co|0)u=vp(r%co)+u;return(vp(r%co)+u).replace(Zb,"$1-$2")}var df,Py=5381,hr=function(a,r){for(var u=r.length;u;)a=33*a^r.charCodeAt(--u);return a},qy=function(a){return hr(Py,a)};function Yy(a){return Cf(qy(a)>>>0)}function Fb(a){return a.displayName||a.name||"Component"}function hf(a){return typeof a=="string"&&!0}var Gy=typeof Symbol=="function"&&Symbol.for,Vy=Gy?Symbol.for("react.memo"):60115,Kb=Gy?Symbol.for("react.forward_ref"):60112,Wb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ib=((df={})[Kb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},df[Vy]=Xy,df);function bp(a){return("type"in(r=a)&&r.type.$$typeof)===Vy?Xy:"$$typeof"in a?Ib[a.$$typeof]:Wb;var r}var eS=Object.defineProperty,tS=Object.getOwnPropertyNames,Sp=Object.getOwnPropertySymbols,aS=Object.getOwnPropertyDescriptor,nS=Object.getPrototypeOf,xp=Object.prototype;function Qy(a,r,u){if(typeof r!="string"){if(xp){var o=nS(r);o&&o!==xp&&Qy(a,o,u)}var s=tS(r);Sp&&(s=s.concat(Sp(r)));for(var f=bp(a),m=bp(r),g=0;g<s.length;++g){var p=s[g];if(!(p in Jb||u&&u[p]||m&&p in m||f&&p in f)){var h=aS(r,p);try{eS(a,p,h)}catch{}}}}return a}function El(a){return typeof a=="function"}function od(a){return typeof a=="object"&&"styledComponentId"in a}function yl(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function Df(a,r){if(a.length===0)return"";for(var u=a[0],o=1;o<a.length;o++)u+=a[o];return u}function zi(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Bf(a,r,u){if(u===void 0&&(u=!1),!u&&!zi(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)a[o]=Bf(a[o],r[o]);else if(zi(r))for(var o in r)a[o]=Bf(a[o],r[o]);return a}function cd(a,r){Object.defineProperty(a,"toString",{value:r})}function Qn(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var lS=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var u=0,o=0;o<r;o++)u+=this.groupSizes[o];return u},a.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,f=s;r>=f;)if((f<<=1)<0)throw Qn(16,"".concat(r));this.groupSizes=new Uint32Array(f),this.groupSizes.set(o),this.length=f;for(var m=s;m<f;m++)this.groupSizes[m]=0}for(var g=this.indexOfGroup(r+1),p=(m=0,u.length);m<p;m++)this.tag.insertRule(g,u[m])&&(this.groupSizes[r]++,g++)},a.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],o=this.indexOfGroup(r),s=o+u;this.groupSizes[r]=0;for(var f=o;f<s;f++)this.tag.deleteRule(o)}},a.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),f=s+o,m=s;m<f;m++)u+="".concat(this.tag.getRule(m)).concat(ud);return u},a}(),bo=new Map,To=new Map,So=1,so=function(a){if(bo.has(a))return bo.get(a);for(;To.has(So);)So++;var r=So++;return bo.set(a,r),To.set(r,a),r},rS=function(a,r){So=r+1,bo.set(a,r),To.set(r,a)},iS="style[".concat(vr,"][").concat(Uy,'="').concat(Po,'"]'),uS=new RegExp("^".concat(vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),oS=function(a,r,u){for(var o,s=u.split(","),f=0,m=s.length;f<m;f++)(o=s[f])&&a.registerName(r,o)},cS=function(a,r){for(var u,o=((u=r.textContent)!==null&&u!==void 0?u:"").split(ud),s=[],f=0,m=o.length;f<m;f++){var g=o[f].trim();if(g){var p=g.match(uS);if(p){var h=0|parseInt(p[1],10),v=p[2];h!==0&&(rS(v,h),oS(a,v,p[3]),a.getTag().insertRules(h,s)),s.length=0}else s.push(g)}}},Ep=function(a){for(var r=document.querySelectorAll(iS),u=0,o=r.length;u<o;u++){var s=r[u];s&&s.getAttribute(vr)!==Ly&&(cS(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function sS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zy=function(a){var r=document.head,u=a||r,o=document.createElement("style"),s=function(g){var p=Array.from(g.querySelectorAll("style[".concat(vr,"]")));return p[p.length-1]}(u),f=s!==void 0?s.nextSibling:null;o.setAttribute(vr,Ly),o.setAttribute(Uy,Po);var m=sS();return m&&o.setAttribute("nonce",m),u.insertBefore(o,f),o},fS=function(){function a(r){this.element=Zy(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var o=document.styleSheets,s=0,f=o.length;s<f;s++){var m=o[s];if(m.ownerNode===u)return m}throw Qn(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},a}(),dS=function(){function a(r){this.element=Zy(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var o=document.createTextNode(u);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),hS=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),_p=No,mS={isServer:!No,useCSSOMInjection:!Gb},Fy=function(){function a(r,u,o){r===void 0&&(r=br),u===void 0&&(u={});var s=this;this.options=Ht(Ht({},mS),r),this.gs=u,this.names=new Map(o),this.server=!!r.isServer,!this.server&&No&&_p&&(_p=!1,Ep(this)),cd(this,function(){return function(f){for(var m=f.getTag(),g=m.length,p="",h=function(x){var S=function(T){return To.get(T)}(x);if(S===void 0)return"continue";var N=f.names.get(S),E=m.getGroup(x);if(N===void 0||!N.size||E.length===0)return"continue";var D="".concat(vr,".g").concat(x,'[id="').concat(S,'"]'),A="";N!==void 0&&N.forEach(function(T){T.length>0&&(A+="".concat(T,","))}),p+="".concat(E).concat(D,'{content:"').concat(A,'"}').concat(ud)},v=0;v<g;v++)h(v);return p}(s)})}return a.registerId=function(r){return so(r)},a.prototype.rehydrate=function(){!this.server&&No&&Ep(this)},a.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new a(Ht(Ht({},this.options),r),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var o=u.useCSSOMInjection,s=u.target;return u.isServer?new hS(s):o?new fS(s):new dS(s)}(this.options),new lS(r)));var r},a.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},a.prototype.registerName=function(r,u){if(so(r),this.names.has(r))this.names.get(r).add(u);else{var o=new Set;o.add(u),this.names.set(r,o)}},a.prototype.insertRules=function(r,u,o){this.registerName(r,u),this.getTag().insertRules(so(r),o)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(so(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),pS=/&/g,yS=/^\s*\/\/.*$/gm;function Ky(a,r){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=Ky(u.children,r)),u})}function gS(a){var r,u,o,s=br,f=s.options,m=f===void 0?br:f,g=s.plugins,p=g===void 0?qo:g,h=function(S,N,E){return E.startsWith(u)&&E.endsWith(u)&&E.replaceAll(u,"").length>0?".".concat(r):S},v=p.slice();v.push(function(S){S.type===jo&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(pS,u).replace(o,h))}),m.prefix&&v.push(qb),v.push(Ub);var x=function(S,N,E,D){N===void 0&&(N=""),E===void 0&&(E=""),D===void 0&&(D="&"),r=D,u=N,o=new RegExp("\\".concat(u,"\\b"),"g");var A=S.replace(yS,""),T=jb(E||N?"".concat(E," ").concat(N," { ").concat(A," }"):A);m.namespace&&(T=Ky(T,m.namespace));var C=[];return $o(T,kb(v.concat(Pb(function(H){return C.push(H)})))),C};return x.hash=p.length?p.reduce(function(S,N){return N.name||Qn(15),hr(S,N.name)},Py).toString():"",x}var vS=new Fy,Rf=gS(),Wy=xl.createContext({shouldForwardProp:void 0,styleSheet:vS,stylis:Rf});Wy.Consumer;xl.createContext(void 0);function wp(){return y.useContext(Wy)}var Jy=function(){function a(r,u){var o=this;this.inject=function(s,f){f===void 0&&(f=Rf);var m=o.name+f.hash;s.hasNameForId(o.id,m)||s.insertRules(o.id,m,f(o.rules,m,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,cd(this,function(){throw Qn(12,String(o.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=Rf),this.name+r.hash},a}(),bS=function(a){return a>="A"&&a<="Z"};function $p(a){for(var r="",u=0;u<a.length;u++){var o=a[u];if(u===1&&o==="-"&&a[0]==="-")return a;bS(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var Iy=function(a){return a==null||a===!1||a===""},eg=function(a){var r,u,o=[];for(var s in a){var f=a[s];a.hasOwnProperty(s)&&!Iy(f)&&(Array.isArray(f)&&f.isCss||El(f)?o.push("".concat($p(s),":"),f,";"):zi(f)?o.push.apply(o,Ri(Ri(["".concat(s," {")],eg(f),!1),["}"],!1)):o.push("".concat($p(s),": ").concat((r=s,(u=f)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in Yb||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return o};function vl(a,r,u,o){if(Iy(a))return[];if(od(a))return[".".concat(a.styledComponentId)];if(El(a)){if(!El(f=a)||f.prototype&&f.prototype.isReactComponent||!r)return[a];var s=a(r);return vl(s,r,u,o)}var f;return a instanceof Jy?u?(a.inject(u,o),[a.getName(o)]):[a]:zi(a)?eg(a):Array.isArray(a)?Array.prototype.concat.apply(qo,a.map(function(m){return vl(m,r,u,o)})):[a.toString()]}function SS(a){for(var r=0;r<a.length;r+=1){var u=a[r];if(El(u)&&!od(u))return!1}return!0}var xS=qy(Po),ES=function(){function a(r,u,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&SS(r),this.componentId=u,this.baseHash=hr(xS,u),this.baseStyle=o,Fy.registerId(u)}return a.prototype.generateAndInjectStyles=function(r,u,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))s=yl(s,this.staticRulesId);else{var f=Df(vl(this.rules,r,u,o)),m=Cf(hr(this.baseHash,f)>>>0);if(!u.hasNameForId(this.componentId,m)){var g=o(f,".".concat(m),void 0,this.componentId);u.insertRules(this.componentId,m,g)}s=yl(s,m),this.staticRulesId=m}else{for(var p=hr(this.baseHash,o.hash),h="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")h+=x;else if(x){var S=Df(vl(x,r,u,o));p=hr(p,S+v),h+=S}}if(h){var N=Cf(p>>>0);u.hasNameForId(this.componentId,N)||u.insertRules(this.componentId,N,o(h,".".concat(N),void 0,this.componentId)),s=yl(s,N)}}return s},a}(),Hi=xl.createContext(void 0);Hi.Consumer;function tg(){var a=y.useContext(Hi);if(!a)throw Qn(18);return a}function _S(a){var r=xl.useContext(Hi),u=y.useMemo(function(){return function(o,s){if(!o)throw Qn(14);if(El(o)){var f=o(s);return f}if(Array.isArray(o)||typeof o!="object")throw Qn(8);return s?Ht(Ht({},s),o):o}(a.theme,r)},[a.theme,r]);return a.children?xl.createElement(Hi.Provider,{value:u},a.children):null}var mf={};function wS(a,r,u){var o=od(a),s=a,f=!hf(a),m=r.attrs,g=m===void 0?qo:m,p=r.componentId,h=p===void 0?function(Y,k){var F=typeof Y!="string"?"sc":gp(Y);mf[F]=(mf[F]||0)+1;var I="".concat(F,"-").concat(Yy(Po+F+mf[F]));return k?"".concat(k,"-").concat(I):I}(r.displayName,r.parentComponentId):p,v=r.displayName,x=v===void 0?function(Y){return hf(Y)?"styled.".concat(Y):"Styled(".concat(Fb(Y),")")}(a):v,S=r.displayName&&r.componentId?"".concat(gp(r.displayName),"-").concat(r.componentId):r.componentId||h,N=o&&s.attrs?s.attrs.concat(g).filter(Boolean):g,E=r.shouldForwardProp;if(o&&s.shouldForwardProp){var D=s.shouldForwardProp;if(r.shouldForwardProp){var A=r.shouldForwardProp;E=function(Y,k){return D(Y,k)&&A(Y,k)}}else E=D}var T=new ES(u,S,o?s.componentStyle:void 0);function C(Y,k){return function(F,I,re){var ne=F.attrs,fe=F.componentStyle,Ae=F.defaultProps,Be=F.foldedComponentIds,Oe=F.styledComponentId,pt=F.target,ze=xl.useContext(Hi),U=wp(),ee=F.shouldForwardProp||U.shouldForwardProp,ae=Vb(I,ze,Ae)||br,J=function(he,oe,Xe){for(var ve,et=Ht(Ht({},oe),{className:void 0,theme:Xe}),Ct=0;Ct<he.length;Ct+=1){var Qe=El(ve=he[Ct])?ve(et):ve;for(var He in Qe)et[He]=He==="className"?yl(et[He],Qe[He]):He==="style"?Ht(Ht({},et[He]),Qe[He]):Qe[He]}return oe.className&&(et.className=yl(et.className,oe.className)),et}(ne,I,ae),_=J.as||pt,L={};for(var K in J)J[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&J.theme===ae||(K==="forwardedAs"?L.as=J.forwardedAs:ee&&!ee(K,_)||(L[K]=J[K]));var Z=function(he,oe){var Xe=wp(),ve=he.generateAndInjectStyles(oe,Xe.styleSheet,Xe.stylis);return ve}(fe,J),te=yl(Be,Oe);return Z&&(te+=" "+Z),J.className&&(te+=" "+J.className),L[hf(_)&&!ky.has(_)?"class":"className"]=te,re&&(L.ref=re),y.createElement(_,L)}(H,Y,k)}C.displayName=x;var H=xl.forwardRef(C);return H.attrs=N,H.componentStyle=T,H.displayName=x,H.shouldForwardProp=E,H.foldedComponentIds=o?yl(s.foldedComponentIds,s.styledComponentId):"",H.styledComponentId=S,H.target=o?s.target:a,Object.defineProperty(H,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Y){this._foldedDefaultProps=o?function(k){for(var F=[],I=1;I<arguments.length;I++)F[I-1]=arguments[I];for(var re=0,ne=F;re<ne.length;re++)Bf(k,ne[re],!0);return k}({},s.defaultProps,Y):Y}}),cd(H,function(){return".".concat(H.styledComponentId)}),f&&Qy(H,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),H}function Np(a,r){for(var u=[a[0]],o=0,s=r.length;o<s;o+=1)u.push(r[o],a[o+1]);return u}var Tp=function(a){return Object.assign(a,{isCss:!0})};function G(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(El(a)||zi(a))return Tp(vl(Np(qo,Ri([a],r,!0))));var o=a;return r.length===0&&o.length===1&&typeof o[0]=="string"?vl(o):Tp(vl(Np(o,r)))}function zf(a,r,u){if(u===void 0&&(u=br),!r)throw Qn(1,r);var o=function(s){for(var f=[],m=1;m<arguments.length;m++)f[m-1]=arguments[m];return a(r,u,G.apply(void 0,Ri([s],f,!1)))};return o.attrs=function(s){return zf(a,r,Ht(Ht({},u),{attrs:Array.prototype.concat(u.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return zf(a,r,Ht(Ht({},u),s))},o}var ag=function(a){return zf(wS,a)},Q=ag;ky.forEach(function(a){Q[a]=ag(a)});function ng(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var o=Df(G.apply(void 0,Ri([a],r,!1))),s=Yy(o);return new Jy(s,o)}const $S={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},NS={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},TS={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},Mp={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(a,r)=>`Page ${a} of ${r}`,pageSizeSelectLabel:(a,r)=>`Entries ${a} out of ${r}`,itemRangeText:(a,r,u)=>`${a}–${r}  entries out of ${u}`,pageRangeText:a=>`from ${a} ${a===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(a,r,u)=>`${a}–${r} entries out of ${u}`},progressStepper:{renderNextStepName:a=>`Next - ${a}`,stepName:["step","steps"],progressText:(a,r,u)=>`${a} from ${r} ${u}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},MS={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(a,r)=>`Страница ${a} из ${r}`,pageSizeSelectLabel:(a,r)=>`Записей ${a} из ${r}`,itemRangeText:(a,r,u)=>`${a}–${r} записей из ${u}`,pageRangeText:a=>`из ${a} ${a===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(a,r,u)=>`${a}–${r} записей из ${u}`},progressStepper:{renderNextStepName:a=>`Далее - ${a}`,stepName:["шаг","шагов"],progressText:(a,r,u)=>`${a} из ${r} ${u}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:Mp,"en-US":{...Mp,firstDayOfWeek:0}},$e=AS();function AS(){return{"Main/XXL":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":G`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const sd={color:$S,shadow:NS,zIndex:TS,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:MS,typography:$e,fontFamily:"'VTB Group UI', sans-serif"};function Sr(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function Nl(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function Ap(a){return a!==null&&!Array.isArray(a)&&typeof a=="object"}const Mo={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let a=0;a<24;a+=1)Mo[112+a]="F"+(a+1);for(let a=0;a<26;a+=1){let r=a+65;Mo[r]=[String.fromCharCode(r+32),String.fromCharCode(r)]}const X={codes:Mo,getCode(a){return Ap(a)?a.keyCode||a.which||this[a.key]:this[a]},getKey(a){const r=Ap(a);if(r&&a.key)return a.key;let u=Mo[r?a.keyCode||a.which:a];return Array.isArray(u)&&(u=r?u[a.shiftKey?1:0]:u[0]),u},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};X.Spacebar=X[" "],X.Digit0=X[0],X.Digit1=X[1],X.Digit2=X[2],X.Digit3=X[3],X.Digit4=X[4],X.Digit5=X[5],X.Digit6=X[6],X.Digit7=X[7],X.Digit8=X[8],X.Digit9=X[9],X.Tilde=X["~"],X.GraveAccent=X["`"],X.ExclamationPoint=X["!"],X.AtSign=X["@"],X.PoundSign=X["#"],X.PercentSign=X["%"],X.Caret=X["^"],X.Ampersand=X["&"],X.PlusSign=X["+"],X.MinusSign=X["-"],X.EqualsSign=X["="],X.DivisionSign=X["/"],X.MultiplicationSign=X["*"],X.Comma=X[","],X.Decimal=X["."],X.Colon=X[":"],X.Semicolon=X[";"],X.Pipe=X["|"],X.BackSlash=X["\\"],X.QuestionMark=X["?"],X.SingleQuote=X["'"],X.DoubleQuote=X['"'],X.LeftCurlyBrace=X["{"],X.RightCurlyBrace=X["}"],X.LeftParenthesis=X["("],X.RightParenthesis=X[")"],X.LeftAngleBracket=X["<"],X.RightAngleBracket=X[">"],X.LeftSquareBracket=X["["],X.RightSquareBracket=X["]"];var Op;function Hf(){return Hf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Hf.apply(null,arguments)}var OS=function(a){return y.createElement("svg",Hf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Op||(Op=y.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};function fd(a,r){$r(a,r,"data-container",!0)}function lg(a,r){$r(a,r,"data-field",!1)}function CS(a){const r={};return $r(a,r,"data-dropdown-container",!0),r}function rg(a){const r={};return $r(a,r,"data-menu",!0),r}function $r(a,r,u,o){Object.keys(a).forEach(s=>{typeof s=="string"&&s.startsWith(u)&&(r[s]=a[s],o&&delete a[s])})}const DS=Q(OS)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${a=>a.$isOpen?180:0}deg);
  & *[fill^='#'] {
    fill: ${({appearance:a,theme:r})=>a==="white"?`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`};
  }

  &:hover *[fill^='#'] {
    fill: ${a=>a.appearance==="white"?"":`var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]})`};
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Yo=a=>{let r=a;return r=r.replace("box-shadow: ",""),r=r.replace(";",""),r},BS=(a,r)=>{return(u=a,Object.keys(u)).some(o=>a[o]!==r[o]);var u};function ig(a,r){const u={};return{observe(){u.rafId&&cancelAnimationFrame(u.rafId);const o=()=>{if(u.isObserving){const{scrollHeight:s,scrollLeft:f,scrollTop:m,scrollWidth:g}=a,{bottom:p,height:h,left:v,right:x,top:S,width:N,x:E,y:D}=a.getBoundingClientRect(),A={bottom:p,height:h,left:v,right:x,top:S,width:N,x:E||v,y:D||S,scrollHeight:s,scrollLeft:f,scrollTop:m,scrollWidth:g};BS(A,u.rect||{})&&(u.rect=A,r(A)),u.rafId=requestAnimationFrame(o)}};u.rafId=requestAnimationFrame(o),u.isObserving=!0},unobserve(){u.rafId&&cancelAnimationFrame(u.rafId),u.isObserving&&(u.isObserving=!1)}}}var RS=Oy();const zS=Q.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:a})=>a.zIndex.dropdown});
`,dd=({targetElement:a,rootRef:r,fullContainerWidth:u,...o})=>{const s=y.useRef(null);return y.useEffect(()=>{const f=s.current;if(f&&a){const m=ig(a,g=>{if(g){const{x:p,y:h,height:v,width:x}=g,{style:S}=f;S.top=`${h}px`,S.left=u?"0px":`${p}px`,S.height=`${v}px`,S.width=u?"100%":`${x}px`}});return m.observe(),()=>{m.unobserve()}}},[a,u]),RS.createPortal($.jsx(zS,{ref:s,...o}),(r==null?void 0:r.current)||document.body)};function HS(a,r){const u=y.useRef(null),o=y.useRef(a);return y.useEffect(()=>{o.current=a},[a]),y.useEffect(()=>(u.current=setInterval(()=>o.current(),r),()=>clearInterval(u.current||0)),[r]),u}function xa(...a){return r=>{a.forEach(u=>{u&&(typeof u=="function"?u(r):u.current=r)})}}const qi=y.createContext({}),jS=({rootRef:a,...r})=>{const[u,o]=y.useState([]),[s,f]=y.useState(void 0),m=y.useCallback(x=>{f(x)},[]),g=y.useCallback(x=>{f(S=>S===x?void 0:S)},[]),p=y.useCallback(x=>{o(S=>{const N=S.indexOf(x);return N>-1?S.slice(0,N):S})},[]),h=y.useCallback(x=>{o(S=>[...S,x])},[]),v=y.useMemo(()=>({addDropdown:h,removeDropdown:p,dropdowns:u,rootRef:a,activateMenu:m,deactivateMenu:g,currentActiveMenu:s}),[h,p,u,a,m,g,s]);return $.jsx(qi.Provider,{value:v,children:r.children})};function ug(a){const{dropdowns:r=[],addDropdown:u,removeDropdown:o,activateMenu:s,deactivateMenu:f,currentActiveMenu:m}=y.useContext(qi),g=r.indexOf(a);return{addDropdown:u,removeDropdown:o,dropdowns:g>-1?r.slice(g+1,r.length):[],activateMenu:s,deactivateMenu:f,currentActiveMenu:m}}const LS=(a,r)=>!r.some(u=>u.current&&u.current.contains(a.target)),US=(a,r,u)=>{const o=a.bottom-a.top+8,s=r.top>=o,f=u-r.bottom>=o,m=r.top>=0&&r.bottom<=u,g=r.bottom<=0,p=r.top>=u,h=r.top<0&&0<r.bottom&&r.bottom<u,v=0<r.top&&r.top<u&&r.bottom>u;if(m){if(!s&&!f)return{upward:!1,translateY:u-r.bottom-o-16+"px"};if(s&&f)return{upward:!1,translateY:"0"};if(!s&&f)return{upward:!1,translateY:"0"};if(s&&!f)return{upward:!0,translateY:"0"}}else{if(g)return{upward:!1,translateY:0-r.bottom+8+"px"};if(p)return{upward:!0,translateY:u-r.top-8+"px"};if(h)return f?{upward:!1,translateY:"0"}:{upward:!1,translateY:0-r.bottom+8+"px"};if(v)return s?{upward:!0,translateY:"0"}:{upward:!0,translateY:""+(u-r.top-8)}}return{upward:!1,translateY:"0"}},kS=(a,r,u)=>{const o=a.right-a.left,s=r.left>=0&&r.right<=u,f=r.right<=0,m=r.left>=u,g=r.left<0&&0<r.right&&r.right<u,p=r.right>u&&0<r.left&&r.left<u;if(s){const h=u-r.left>=o,v=r.right>=o,x=o>r.width;if(!v&&!h)return{align:"flex-end",translateX:u-r.right-16+"px"};if(v&&h)return{align:"flex-end",translateX:"0"};if(x&&!v&&h)return{align:"flex-start",translateX:"0"};if(x&&!h&&v)return{align:"flex-end",translateX:"0"}}else{if(f||g)return{align:"flex-start",translateX:0-r.left+16+"px"};if(m||p)return{align:"flex-end",translateX:u-r.right-16+"px"}}return{align:"",translateX:"0"}},PS=Q.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${a=>a.$alignSelf?`align-self: ${a.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${a=>a.$dropContainerCssMixin}
`,qS=Q.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,YS=Q(dd)`
  display: flex;
  flex-direction: ${a=>a.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,GS=()=>null,hd=y.forwardRef(({targetElement:a,onClickOutside:r=GS,className:u="",alignSelf:o,dropContainerCssMixin:s,...f},m)=>{const g=y.useRef(null),[p,h]=y.useState(!1),{rootRef:v}=y.useContext(qi);y.useLayoutEffect(()=>{var E;g.current!==document.activeElement&&((E=g==null?void 0:g.current)==null||E.focus())},[]);const x=y.useCallback(()=>{const E=g.current;if(E&&a){const D=E.getBoundingClientRect(),A=a.getBoundingClientRect(),T=globalThis.innerHeight,C=globalThis.innerWidth,{upward:H,translateY:Y}=US(D,A,T);if(p!==H&&h(H),o&&o!=="auto")E.style.transform=`translateY(${Y})`;else{const{align:k,translateX:F}=kS(D,A,C);E.style.transform=`translate(${F}, ${Y})`,E.style.alignSelf=k}}},[p,a]);HS(x,100),y.useEffect(()=>{g.current&&(g.current.style.opacity="1")},[]);const[S,N]=y.useState(!1);return y.useEffect(()=>{function E(){N(!0)}return document.addEventListener("mousedown",E,!0),document.addEventListener("touchstart",E,!0),()=>{document.removeEventListener("mousedown",E,!0),document.removeEventListener("touchstart",E,!0)}},[]),y.useEffect(()=>{function E(D){r(D)}if(S)return document.addEventListener("mouseup",E),document.addEventListener("touchend",E),()=>{document.removeEventListener("mouseup",E),document.removeEventListener("touchend",E)}},[S]),$.jsx($.Fragment,{children:$.jsxs(YS,{targetElement:a,$reverse:p,rootRef:v,onMouseDown:()=>N(!1),children:[$.jsx(qS,{}),$.jsx(PS,{ref:xa(m,g),...f,className:u+" dropdown-container",$alignSelf:o,$dropContainerCssMixin:s})]})})});hd.displayName="DropdownContainer";const VS=Q(hd)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>Yo(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>Nl(a.theme.shape)});
  overflow: hidden;
  width: max-content;
  background: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
`;VS.displayName="StyledDropdownContainer";function XS(...a){return r=>a.forEach(u=>function(o,s){typeof o=="function"?o(s):o!=null&&(o.current=s)}(u,r))}function jf(...a){return y.useCallback(XS(...a),a)}function QS(a){return y.forwardRef(a)}const ZS=G`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,FS=Q.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,KS=Q.div`
  ${ZS}
`,WS=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,JS=Q.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,IS=Q.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,ex=Q.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,tx=Q.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,ax=Q.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,nx=Q.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,lx=Q.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`,rx=QS(({children:a,verticalScrollProps:r,horizontalScrollProps:u,minThumbSize:o=20,contentBlockProps:s={},...f},m)=>{const g=y.useMemo(()=>s.id?s.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[s.id]),[p,h]=y.useState(null),v=jf(s.ref,x=>h(x));return $.jsxs(FS,{ref:m,...f,children:[$.jsx(KS,{...s,id:g,ref:v,children:a}),$.jsx(ix,{contentNode:p,verticalScrollProps:r,horizontalScrollProps:u,minThumbSize:o})]})}),ix=({verticalScrollProps:a={},horizontalScrollProps:r={},contentNode:u,minThumbSize:o=20})=>{const s=y.useMemo(()=>u!=null&&u.id?u==null?void 0:u.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[u==null?void 0:u.id]),[f,m]=y.useState(null),[g,p]=y.useState(null),[h,v]=y.useState(null),[x,S]=y.useState(null),[N,E]=y.useState(null),[D,A]=y.useState(null),[T,C]=y.useState(!1),[H,Y]=y.useState(!1),[k,F]=y.useState(0),[I,re]=y.useState(0),[ne,fe]=y.useState(0),[Ae,Be]=y.useState(0),[Oe,pt]=y.useState(0),[ze,U]=y.useState(0),ee=jf(a.ref,J=>m(J)),ae=jf(r.ref,J=>v(J));return y.useLayoutEffect(()=>{if(u&&N&&D&&f&&h&&g&&x){const{observe:J,unobserve:_}=ig(u,L=>{if(L){const K=function(wt){const{clientHeight:Ke,scrollHeight:Pt}=wt;return Pt-Ke>=1}(u),Z=function(wt){const{clientWidth:Ke,scrollWidth:Pt}=wt;return Pt-Ke>=1}(u),te=Math.min(Math.max(0,L.scrollTop),L.scrollHeight-L.height),he=Math.min(Math.max(0,L.scrollLeft),L.scrollWidth-L.width);u.style.setProperty("--vertical-content-scroll",`${te}px`),u.style.setProperty("--horizontal-content-scroll",`${he}px`),f.style.setProperty("display",K?null:"none"),f.style.setProperty("bottom",Z?"10px":null),h.style.setProperty("display",Z?null:"none"),h.style.setProperty("right",K?"10px":null);const oe=function(wt,Ke){const{clientHeight:Pt,scrollHeight:Lt}=wt,{clientHeight:tt}=Ke;return Math.max(Math.round(Pt*tt/Lt),o)}(u,g),Xe=function(wt,Ke){const{clientWidth:Pt,scrollWidth:Lt}=wt,{clientWidth:tt}=Ke;return Math.max(Math.round(Pt*tt/Lt),o)}(u,x);N.style.setProperty("--vertical-thumb-height",`${oe}px`),D.style.setProperty("--horizontal-thumb-width",`${Xe}px`);const{scrollTop:ve,scrollLeft:et,scrollHeight:Ct,scrollWidth:Qe}=u,{clientHeight:He}=g,{clientWidth:jt}=x,Ra=Math.round(Math.min(ve/Ct*He,He-oe)),Ea=Math.round(Math.min(et/Qe*jt,jt-Xe));N.style.top=`${Ra}px`,D.style.left=`${Ea}px`}});return J(),_}},[u,N,D,f,h,g,x]),y.useEffect(()=>{function J(L){L.preventDefault(),L.stopPropagation(),T&&C(!1),H&&Y(!1)}function _(L){if(u){if(L.preventDefault(),L.stopPropagation(),T){const{scrollHeight:K,clientHeight:Z}=u,te=(L.clientY-k)*(K/Z),he=Math.round(Math.min(ne+te,K-Z));u.scrollTop=he}if(H){const{scrollWidth:K,clientWidth:Z}=u,te=(L.clientX-I)*(K/Z),he=Math.round(Math.min(Ae+te,K-Z));u.scrollLeft=he}}}if(T||H)return document.addEventListener("mousemove",_),document.addEventListener("mouseup",J),()=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",J)}},[u,T,H,ne,Ae,k,I]),y.useEffect(()=>{if(u){const{scrollHeight:J,clientHeight:_}=u,L=Math.round(Oe*J-_/2);u.scrollTo({top:L,behavior:"smooth"})}},[Oe]),y.useEffect(()=>{if(u){const{scrollWidth:J,clientWidth:_}=u,L=Math.round(ze*J-_/2);u.scrollTo({left:L,behavior:"smooth"})}},[ze]),y.useEffect(()=>{document.body.style.setProperty("cursor",T||H?"grabbing":null)},[T,H]),$.jsxs($.Fragment,{children:[$.jsxs(WS,{...a,ref:ee,role:"scrollbar","aria-controls":s,children:[$.jsx(nx,{onClick:function(J){if(J.preventDefault(),J.stopPropagation(),u){const{clientHeight:_}=u,{top:L}=u.getBoundingClientRect();pt((J.clientY-L)/_)}}}),$.jsx(IS,{ref:J=>p(J),children:$.jsx(lx,{ref:E,onMouseDown:function(J){J.preventDefault(),J.stopPropagation(),F(J.clientY),u&&fe(u.scrollTop),C(!0)},style:{cursor:T?"grabbing":"grab"}})})]}),$.jsxs(JS,{...r,ref:ae,role:"scrollbar","aria-controls":s,children:[$.jsx(tx,{onClick:function(J){if(J.preventDefault(),J.stopPropagation(),u){const{clientWidth:_}=u,{left:L}=u.getBoundingClientRect();U((J.clientX-L)/_)}}}),$.jsx(ex,{ref:J=>S(J),children:$.jsx(ax,{ref:A,onMouseDown:function(J){J.preventDefault(),J.stopPropagation(),re(J.clientX),u&&Be(u.scrollLeft),Y(!0)},style:{cursor:H?"grabbing":"grab"}})})]})]})},ux=G`
  ${({$dimension:a})=>a==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  ul[data-dimension='s'] & {
    ${$e["Body/Body 2 Long"]}
  }
`,ox=G`
  color: ${({theme:a,$disabled:r})=>r?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
`,cx=G`
  background: ${({theme:a,$selected:r,$preselected:u,$hovered:o})=>o?`var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]})`:u?`var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]})`:r?`var(--admiral-color-Opacity_Focus, ${a.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${a.color["Special/Elevated BG"]})`};
`,sx=G`
  padding: ${({$dimension:a})=>{switch(a){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;var Cp;function Lf(){return Lf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Lf.apply(null,arguments)}var fx=function(a){return y.createElement("svg",Lf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Cp||(Cp=y.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};const dx=Q(fx)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  [data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
`,hx=a=>{a.preventDefault(),a.stopPropagation()},md=y.forwardRef(({children:a,expandIcon:r=$.jsx(dx,{}),hasSubmenu:u,onHover:o,disabled:s,readOnly:f,hovered:m,dimension:g="l",selected:p=!1,preselected:h=!1,selfRef:v,onMouseDown:x,onLeave:S,containerRef:N,...E},D)=>{const A=s?hx:x,T=v?xa(D,v):D;return $.jsxs(mx,{ref:T,$dimension:g,$preselected:h,$selected:p,$hovered:m,"data-preselected":h,"data-hovered":m,"data-disabled":s,"data-readonly":f,"data-dimension":g,onMouseEnter:C=>{var H;o==null||o(C),(H=E.onMouseEnter)==null||H.call(E,C)},onMouseLeave:C=>{var H;S==null||S(C),(H=E.onMouseLeave)==null||H.call(E,C)},onMouseMove:C=>{var H;o==null||o(C),(H=E.onMouseMove)==null||H.call(E,C)},onMouseDown:A,...E,children:[y.Children.toArray(a).map((C,H)=>typeof C=="string"?$.jsx(px,{children:C},C+H):C),u&&r]})});md.displayName="MenuItem";const mx=Q.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  ${sx}
  ${ux}
  ${ox}
  ${cx}

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
    }
  }

  &&[data-readonly='true'] {
    cursor: default;
  }
`,px=Q.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;function pd(a){const r=y.useRef();return y.useEffect(()=>{r.current=a}),r.current}const Dp=Q.div`
  display: flex;
  flex: 0 0 auto;
`,yx=({scrollContainerRef:a,itemHeight:r,rowCount:u=6,aheadItemsCount:o=3,model:s,activeId:f,selected:m,onRenderItem:g})=>{const[p,h]=y.useState(0),[v,x]=y.useState({startIndex:0,endIndex:u,topPadding:"",bottomPadding:"",needAddListener:!1}),S=pd({activeId:f}),N=y.useCallback(A=>{requestAnimationFrame(()=>{A.target&&h(A.target.scrollTop)})},[a]);y.useEffect(()=>{const A=a.current;return h((A==null?void 0:A.scrollTop)||0),A==null||A.addEventListener("scroll",N),()=>A==null?void 0:A.removeEventListener("scroll",N)},[N]),y.useEffect(()=>{v.needAddListener&&(setTimeout(()=>{var A;return(A=a==null?void 0:a.current)==null?void 0:A.addEventListener("scroll",N)}),x({...v,needAddListener:!1}))},[v,a]);const E=y.useCallback(A=>{const T=s.length,C=Math.max(0,A);let H=u+2*o;return H=Math.min(T-C,H),{startIndex:C,endIndex:C+H,topPadding:C*r+"px",bottomPadding:(T-C-H)*r+"px"}},[r,o,s,u]);y.useEffect(()=>{const A=Math.floor(p/r-o),T={...E(A),needAddListener:!1};x(T)},[p,E]),y.useEffect(()=>{var T;if(!f||!S||S.activeId===f)return;const A=s.findIndex(C=>C.id===f);A!==-1&&(A<v.startIndex||A>v.endIndex)&&((T=a==null?void 0:a.current)==null||T.removeEventListener("scroll",N),x({...E(A),needAddListener:!0}))},[f,v,E,a]);const D=y.useMemo(()=>[...s].slice(v.startIndex,v.endIndex).map((A,T)=>g==null?void 0:g(A,T)),[s,f,m,v]);return $.jsxs($.Fragment,{children:[$.jsx(Dp,{style:{minHeight:v.topPadding}}),D,$.jsx(Dp,{style:{minHeight:v.bottomPadding}})]})},og=(a,r)=>{const u=y.useCallback(o=>{a.every(s=>s.current&&!s.current.contains(o.target))&&r(o)},[r,a]);y.useEffect(()=>(document.addEventListener("mousedown",u,!0),document.addEventListener("touchstart",u),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("touchstart",u)}),[u])},gx=(a,r)=>{let u,o=!1,s=!1;return[(...f)=>{if(s||o)return;const m=a(...f);return o=!0,u=setTimeout(()=>{o=!1},r),m},()=>{s=!0,clearTimeout(u)}]};function vx(a,r,u){const o=a.getBoundingClientRect(),s=r.getBoundingClientRect(),f=document.documentElement.clientWidth-o.right>s.width,m=o.left>s.width,g=u==="right"?!f&&m?"left":"right":!m&&f?"right":"left";return document.documentElement.clientHeight-o.top>s.height-1?{position:`${g}Bottom`}:{position:g,bottomOffset:8-(document.documentElement.clientHeight-o.top-s.height)}}const cg=(a,r)=>{for(let u=0;u<a.length;u++){const o=a[u];if(o.id===r)return o;if(o.subItems&&o.subItems.length>0){const s=cg(o.subItems,r);if(s)return s}}},sg=(a,r)=>!!a.subItems&&a.subItems.some(u=>r.includes(u.id)||sg(u,r)),Bp=a=>Array.isArray(a)?[...a]:[a],bx=Q.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`,Sx=Q(dd)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:"flex-direction: column;"}
`,xx=Q.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,Ex=Q.div`
  position: relative;
  align-self: flex-start;
`,_x=Q.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>Yo(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>Nl(a.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`,fg=({targetElement:a,children:r,onClickOutside:u,defaultRenderDirection:o="right",...s})=>{const{rootRef:f}=y.useContext(qi),m=y.useRef(null),[g,p]=y.useState(null),[h,v]=y.useState("row");y.useLayoutEffect(()=>{const[E,D]=gx(()=>{p({})},100);return addEventListener("resize",E),addEventListener("scroll",E),()=>{removeEventListener("resize",E),removeEventListener("scroll",E),D()}});const{addDropdown:x,removeDropdown:S,dropdowns:N}=ug(m);return y.useLayoutEffect(()=>(x==null||x(m),()=>{S==null||S(m)}),[]),og([m],E=>{a&&!a.contains(E.target)&&LS(E,N)&&(u==null||u(E))}),y.useLayoutEffect(()=>{const E=m.current;if(a&&E){const{position:D,bottomOffset:A=0}=vx(a,E,o);switch(D){case"right":v("row"),E.style.bottom=`${A}px`;break;case"left":v("row-reverse"),E.style.bottom=`${A}px`;break;case"rightBottom":default:v("row"),E.style.bottom="8px";break;case"leftBottom":v("row-reverse"),E.style.bottom="8px"}}},[a,g]),a&&$.jsx(bx,{children:$.jsxs(Sx,{targetElement:a,rootRef:f,$flexDirection:h,fullContainerWidth:!1,children:[$.jsx(xx,{}),$.jsx(Ex,{ref:m,...s,children:$.jsx(_x,{children:r})})]})})};fg.displayName="SubMenu";const dg=a=>{switch(a){case"l":default:return 48;case"m":return 40;case"s":return 32}},wx=G`
  max-height: ${({$dimension:a,$rowCount:r})=>{return`min(calc(100vh - 16px), ${u=r,o=a,dg(o)*u+16}px)`;var u,o}};
`,$x=Q.div`
  overflow: hidden;
  position: relative;

  padding: 0;
  ${a=>a.$hasTopPanel?"padding-top: 8px":""};
  ${a=>a.$hasBottomPanel?"padding-bottom: 8px":""};
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  max-width: calc(100vw - 32px);
  border-color: transparent;
  &:focus-visible {
    border: 0;
    outline: none;
  }
`,Nx=Q(rx)`
  position: relative;
  ${a=>a.$hasTopPanel?"":"padding-top: 8px"};
  ${a=>a.$hasBottomPanel?"":"padding-bottom: 8px"};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${wx};
  ${a=>a.$maxHeight?`max-height: ${a.$maxHeight}`:""};
`,yd=y.forwardRef(({model:a,defaultSelected:r,selected:u,preselected:o,active:s,onPreselectItem:f,onSelectItem:m,onDeselectItem:g,onActivateItem:p,renderTopPanel:h,renderBottomPanel:v,dimension:x="l",multiSelection:S=!1,disableSelectedOptionHighlight:N=!1,onForwardCycleApprove:E,onBackwardCycleApprove:D,containerRef:A,virtualScroll:T,rowCount:C=6,parentMenuRef:H,onCloseQuery:Y,defaultIsActive:k=!0,subMenuRenderDirection:F,preventFocusSteal:I,maxHeight:re,preselectedModeActive:ne=!1,onMenuKeyDown:fe,disableSelectionOnSpace:Ae,disableSelectionOnEnter:Be,...Oe},pt)=>{const ze=ie=>{const se=ie?a.findIndex(Ze=>Ze.id===ie):-1;let ge=se<a.length-1?se+1:0,Ce=!1;for(;(a[ge].disabled||a[ge].readOnly)&&!Ce;)ge=ge<a.length-1?ge+1:0,Ce=se===-1?ge===0:ge===se;return ge=!(se>-1&&ge<se)||!E||E()?ge:se,a[ge].disabled||a[ge].readOnly?void 0:a[ge].id},U=a.length>0?ze():void 0,[ee,ae]=y.useState(r?Bp(r):[]),[J,_]=y.useState(U),[L,K]=y.useState(U),Z=y.useRef(null),te=y.useRef(null),[he,oe]=y.useState(null),[Xe,ve]=y.useState(!1),et=y.useRef();y.useEffect(()=>{_(U)},[a]);const Ct=N?[]:u===void 0?ee:Bp(u),Qe=s===void 0?J:s,He=ne?o===void 0?L:o:void 0,jt=y.useRef(null),Ra=y.useRef(null),Ea=!!h,wt=!!v,Ke=ie=>{Qe!==ie&&_(ie),p==null||p(ie)},Pt=ie=>{He!==ie&&K(ie),f==null||f(ie)},Lt=ie=>{const se=cg(a,ie);if(se&&!se.disabled&&!se.readOnly){const ge=ee.findIndex(Ce=>Ce===ie);S?ge>-1?(ae(ee.splice(ge,1)),g==null||g(ie)):(ae([...ee,ie]),m==null||m(ie)):(ge===-1&&ae([ie]),m==null||m(ie))}},{currentActiveMenu:tt,activateMenu:lt,deactivateMenu:_a}=ug(Z);y.useEffect(()=>{function ie(se){if((tt==null?void 0:tt.current)===Z.current)switch(X.getCode(se)){case X[" "]:if(Ae)break;ne&&He?Lt(He):Qe&&Lt(Qe),se.preventDefault();break;case X.Enter:if(Be)break;ne&&He?Lt(He):Qe&&Lt(Qe),se.preventDefault();break;case X.ArrowDown:{const ge=ze(ne&&He||Qe);ne?Pt(ge):Ke(ge),se.preventDefault();break}case X.ArrowUp:{const ge=(Ce=>{const Ze=Ce?a.findIndex(Ne=>Ne.id===Ce):-1;let je=Ze>0?Ze-1:a.length-1,Xt=!1;for(;(a[je].disabled||a[je].readOnly)&&!Xt;)je=je>0?je-1:a.length-1,Xt=Ze===-1?je===0:je===Ze;return je=Ze>-1&&je>Ze&&D&&!D()?Ze:je,a[je].disabled||a[je].readOnly?void 0:a[je].id})(ne&&He||Qe);ne?Pt(ge):Ke(ge),se.preventDefault();break}case X.ArrowRight:{const ge=ne&&He||Qe,Ce=a.find(Ze=>Ze.id===ge);!Ce||Ce.disabled||Ce.readOnly||!Ce.subItems||Xe||ve(!0),te&&te.current&&(lt==null||lt(te));break}case X.ArrowLeft:H&&H.current&&(Y==null||Y());break;default:fe==null||fe(se)}}return document.addEventListener("keydown",ie),()=>{document.removeEventListener("keydown",ie)}},[s,Qe,J,tt,He,Ae,Be]),y.useEffect(()=>(k&&(lt==null||lt(Z)),()=>{k&&tt===Z&&(_a==null||_a(Z))}),[k]);const Ml=()=>{ve(!1),lt==null||lt(Z)},ke=(ie,se)=>{const{id:ge,subItems:Ce,render:Ze,...je}=ie,Xt=!!Ce&&Ce.length>0,Ne=Qe===ge,Qt=Ct.includes(ge)||sg(ie,Ct),Zt={hovered:Ne,preselected:He!==void 0?He===ge:void 0,selected:Qt,onLeave:ia=>{var Ft,vn;const ua=ia.relatedTarget;ua&&Object.hasOwn(ua,"nodeName")&&!((Ft=te.current)!=null&&Ft.contains(ua))&&!((vn=Ra.current)!=null&&vn.contains(ua))&&ve(!1)},onHover:ia=>{Ke(ge),ve(Xt),oe(ia.currentTarget)},onMouseDown:I?ia=>ia.preventDefault():void 0,onClick:()=>Lt(ge),hasSubmenu:Xt,disabled:je.disabled,...je};return typeof Ze=="function"?Ze({containerRef:A,...Zt}):$.jsx(md,{...Zt,children:Ze},`${ie.id}-${se}`)},Fn=y.useRef(),za=y.useRef(),bt=y.useRef(),Je=y.useRef();y.useLayoutEffect(()=>{setTimeout(()=>{var se,ge;let ie;if(s&&Fn.current!==s||za.current!==J?ie=(se=jt.current)==null?void 0:se.querySelector('[data-hovered="true"]'):(o&&bt.current!==o||Je.current!==L)&&(ie=(ge=jt.current)==null?void 0:ge.querySelector('[data-preselected="true"]')),ie){const Ce=Date.now(),Ze=et.current;ie==null||ie.scrollIntoView({behavior:!Ze||Ce-Ze<150?"auto":"smooth",inline:"center",block:"nearest"}),et.current=Ce,Fn.current=s,za.current=J,bt.current=o,Je.current=L}},0)},[s,J,o,L,a]);const st=rg(Oe);return y.useEffect(()=>{if(!he||!jt.current)return;const ie={root:jt.current,rootMargin:"0px",threshold:.5},se=new IntersectionObserver(ge=>{ge.forEach(Ce=>{ve(!(Ce.intersectionRatio<ie.threshold))})},ie);return se.observe(he),()=>se.disconnect()},[he]),$.jsxs($x,{ref:xa(Z,pt),$dimension:x,$hasTopPanel:Ea,$hasBottomPanel:wt,onMouseEnter:ie=>{var se;tt!==Z&&(lt==null||lt(Z)),(se=Oe.onMouseEnter)==null||se.call(Oe,ie)},onMouseLeave:ie=>{var se;Ke(void 0),(se=Oe.onMouseLeave)==null||se.call(Oe,ie)},onFocus:ie=>{var se;tt!==Z&&(lt==null||lt(Z)),(se=Oe.onFocus)==null||se.call(Oe,ie)},onBlur:ie=>{var se;tt===Z&&(_a==null||_a(Z)),(se=Oe.onBlur)==null||se.call(Oe,ie)},...Oe,children:[Ea&&h({dimension:x}),$.jsx(Nx,{$dimension:x,$rowCount:C,$hasTopPanel:Ea,$hasBottomPanel:wt,$maxHeight:re,...st,verticalScrollProps:{ref:Ra},contentBlockProps:{ref:jt},children:T?(()=>{if(!T)return null;const ie=T.itemHeight==="auto"?dg(x):T.itemHeight;return $.jsx(yx,{scrollContainerRef:jt,itemHeight:ie,model:a,rowCount:C,activeId:Qe,selected:Ct,onRenderItem:ke})})():a.map((ie,se)=>ke({dimension:x,...ie},se))}),Xe&&he&&$.jsx(fg,{targetElement:he,defaultRenderDirection:F,onClickOutside:H?void 0:()=>{ve(!1)},children:(()=>{const ie=a.find(se=>se.id===Qe);return ie&&ie.subItems&&ie.subItems.length>0&&$.jsx(yd,{ref:te,dimension:x,parentMenuRef:Z,model:ie.subItems,subMenuRenderDirection:F,onCloseQuery:Ml,selected:Ct,onSelectItem:se=>Lt(se),virtualScroll:T,preventFocusSteal:!0})})()}),wt&&v({dimension:x})]})});yd.displayName="Menu";var Rp;function Uf(){return Uf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Uf.apply(null,arguments)}var gd=function(a){return y.createElement("svg",Uf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Rp||(Rp=y.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function ji(a){switch(a){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function hg(a){switch(a){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function zp(a){return ji(a)+2*hg(a)}const Tx=G`
  & *[fill^='#'] {
    fill: ${a=>{switch(a.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`;default:return a.$iconColor}}};
  }
`,Mx=Q.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${Tx}

  & > svg {
    height: ${a=>ji(a.$dimension)}px;
    width: ${a=>ji(a.$dimension)}px;
  }
`,Ci=Q.div`
  width: ${a=>zp(a.$dimension)}px;
  height: ${a=>zp(a.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Ax=G`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${Ci} {
      background-color: ${a=>a.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${a.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${Ci} {
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${Ci} {
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${Ci} {
      background-color: transparent;
    }
  }
`,Ox=Q.button`
  position: relative;
  padding: 0;
  margin: ${a=>hg(a.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${a=>ji(a.$dimension)}px;
  width: ${a=>ji(a.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${a=>Sr(a.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${Ax}
  }
`,Cx=y.forwardRef(({type:a="button",dimension:r="lBig",disabled:u=!1,highlightFocus:o=!0,appearance:s,children:f,...m},g)=>{const p=typeof s=="object"?s.iconColor?s.iconColor:"secondary":s;return $.jsxs(Ox,{ref:g,type:a,$dimension:r,disabled:u,$highlightFocus:o,...m,children:[$.jsx(Ci,{$dimension:r,"aria-hidden":!0}),$.jsx(Mx,{$dimension:r,$iconColor:p,"aria-hidden":!0,children:f})]})}),Dx=y.forwardRef(({className:a,...r},u)=>$.jsx(Cx,{ref:u,className:`close-button ${a||""}`,...r,children:$.jsx(gd,{"aria-hidden":!0})}));var Hp,jp,Lp,Up,kp,Pp;function kf(){return kf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},kf.apply(null,arguments)}var Bx=function(a){return y.createElement("svg",kf({xmlns:"http://www.w3.org/2000/svg",fill:"none"},a),Hp||(Hp=y.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),jp||(jp=y.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),Lp||(Lp=y.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),Up||(Up=y.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),kp||(kp=y.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),Pp||(Pp=y.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const Rx=ng`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,mg=Q(Bx)`
  animation: ${Rx} 1s linear infinite;
  path {
    fill: ${({$inverse:a,theme:r})=>a?`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,zx=a=>ng`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${a.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a.theme.color["Neutral/Neutral 10"]});
  }
`,pg=G`
  animation: ${a=>zx(a)} 2s ease infinite;
`,Hx=()=>{let a=0;const r=document.createElement("div");return r.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,r.style.overflow="scroll",r.style.fontSize="14px",r.style.height="50px",r.style.maxHeight="50px",r.style.width="100px",r.style.position="absolute",r.style.top="-100000px",r.style.left="-100000px",document.body.appendChild(r),a=r.offsetWidth-r.clientWidth,document.body.removeChild(r),a||16},jx=Q.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,Lx=Q.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${a=>a.theme.color["Neutral/Neutral 80"]});
  ${a=>a.$dimension==="m"?$e["Body/Body 2 Short"]:$e["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${a=>Sr(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${a=>Yo(a.theme.shadow["Shadow 04"])});
  padding: ${a=>a.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,Ux=Q.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,kx=Q(dd)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:a})=>a.zIndex.tooltip});
`;function Px(a,r,u,o){const s=a.getBoundingClientRect(),f=r.getBoundingClientRect(),m=Object.entries(function(h){return{bottom:{check:(v,x)=>{const S=globalThis.innerHeight-v.bottom-h>8+x.height,N=v.left+v.width/2>x.width/2,E=globalThis.innerWidth-v.right-h+v.width/2>x.width/2;return S&&N&&E}},top:{check:(v,x)=>{const S=v.top>8+x.height,N=v.left+v.width/2>x.width/2,E=globalThis.innerWidth-v.right-h+v.width/2>x.width/2;return S&&N&&E}},left:{check:(v,x)=>{const S=v.left>8+x.width,N=v.top>(x.height-v.height)/2,E=globalThis.innerHeight-v.bottom-h>(x.height-v.height)/2;return S&&E&&N}},right:{check:(v,x)=>{const S=globalThis.innerWidth-v.right-h>8+x.width,N=v.top>(x.height-v.height)/2,E=globalThis.innerHeight-v.bottom-h>(x.height-v.height)/2;return S&&E&&N}},bottomRight:{check:(v,x)=>{const S=globalThis.innerHeight-v.bottom-h>8+x.height,N=globalThis.innerWidth-v.left-h>x.width;return S&&N}},bottomLeft:{check:(v,x)=>{const S=globalThis.innerHeight-v.bottom-h>8+x.height,N=v.right>x.width;return S&&N}},topRight:{check:(v,x)=>{const S=v.top>8+x.height,N=globalThis.innerWidth-v.left-h>x.width;return S&&N}},topLeft:{check:(v,x)=>{const S=v.top>8+x.height,N=v.right>x.width;return S&&N}},leftBottom:{check:(v,x)=>{const S=v.left>8+x.width,N=globalThis.innerHeight-v.top-h>x.height;return S&&N}},leftTop:{check:(v,x)=>{const S=v.left>8+x.width,N=v.bottom>x.height;return S&&N}},rightBottom:{check:(v,x)=>{const S=globalThis.innerWidth-v.right-h>8+x.width,N=globalThis.innerHeight-v.top-h>x.height;return S&&N}},rightTop:{check:(v,x)=>{const S=globalThis.innerWidth-v.right-h>8+x.width,N=v.bottom>x.height;return S&&N}},bottomPageCenter:{check:(v,x)=>{const S=globalThis.innerHeight-v.bottom-h>8+x.height,N=globalThis.innerWidth-h>=x.width;return S&&N}},topPageCenter:{check:(v,x)=>{const S=v.top>8+x.height,N=globalThis.innerWidth-h>=x.width;return S&&N}}}}(u)),g=o?m.filter(h=>h[0].includes(o)&&h[1].check(s,f)):m.filter(h=>h[1].check(s,f)),p=o||"bottom";return g.length?g[0][0]:p}const Yi=y.forwardRef(({dimension:a="m",renderContent:r,targetElement:u,tooltipPosition:o,...s},f)=>{const m=y.useRef(null),g=y.useRef(0),{rootRef:p}=y.useContext(qi),h=y.useMemo(()=>!r()&&r()!==0,[r]),[v,x]=y.useState(),[S,N]=y.useState(!1),[E,D]=y.useState({});return y.useEffect(()=>{(A=>{const T=u;if(T&&m.current){const C=Px(T,m.current,A,o),H=m.current;switch(C){case"leftBottom":case"leftTop":case"left":x("row-reverse"),N(!1),H.style.margin="0 8px 0 0",H.style.alignSelf=C==="leftBottom"?"flex-start":C==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":x("row"),N(!1),H.style.margin="0 0 0 8px",H.style.alignSelf=C==="rightBottom"?"flex-start":C==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":x("column-reverse"),N(C==="topPageCenter"),H.style.margin="0 0 8px 0",H.style.alignSelf=C==="topLeft"?"flex-end":C==="topRight"?"flex-start":"center";break;default:x("column"),N(C==="bottomPageCenter"),H.style.margin="8px 0 0 0",H.style.alignSelf=C==="bottomLeft"?"flex-end":C==="bottomRight"?"flex-start":"center"}}})(Hx())},[r(),u,o,E]),y.useLayoutEffect(()=>{if(m.current&&!h){const A=new ResizeObserver(T=>{T.forEach(C=>{g.current===0?g.current=C.contentRect.height:D({})})});return A.observe(m.current),()=>{A.disconnect()}}},[h]),y.useEffect(()=>{m.current&&!h&&(m.current.style.opacity="1")},[h]),h?null:$.jsxs(kx,{targetElement:u,rootRef:p,$flexDirection:v,fullContainerWidth:S,children:[$.jsx(Ux,{}),$.jsx(jx,{ref:xa(f,m),children:$.jsx(Lx,{role:"tooltip",$dimension:a,...s,children:r()})})]})});Yi.displayName="Tooltip";const qx=G`
  background: ${({$appearance:a,theme:r})=>{switch(a){case"info":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${r.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,Yx=G`
  color: ${({$appearance:a,theme:r})=>{switch(a){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`}}};
`,Gx=Q.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({$dimension:a})=>a==="s"?"0 5px":"0 6px"};
  height: ${({$dimension:a})=>a==="s"?"16px":"20px"};
  border-radius: ${({$dimension:a})=>a==="s"?"8px":"10px"};
  ${({$dimension:a})=>a==="s"?$e["Caption/Caption 1"]:$e["Body/Body 2 Long"]}
  ${qx}
  ${Yx}
  user-select: none;
`,vd=y.forwardRef(({children:a,dimension:r="m",appearance:u="light",locale:o,...s},f)=>{const m=tg()||sd,g=(o==null?void 0:o.amountAriaLabel)||m.locales[m.currentLocale].badge.amountAriaLabel;return $.jsx(Gx,{ref:f,$dimension:r,$appearance:u,"aria-label":`${g} ${a}`,...s,children:a})});vd.displayName="Badge";Q(vd)`
  &:is(input:checked + div *) {
    background: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral00, ${a.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    color: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
  }
`;const qp=G`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
    border-color: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
    border-color: var(--admiral-color-Primary_Primary80, ${a=>a.theme.color["Primary/Primary 80"]});
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Yp=G`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Gp=G`
  background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, ${a=>a.theme.color["Opacity/Neutral 12"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, ${a=>a.theme.color["Opacity/Neutral 16"]});
    color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, ${a=>a.theme.color["Opacity/Neutral 8"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Vx=G`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Xx=G`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${a=>a.theme.color["Opacity/Dark Static Hover"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${a=>a.theme.color["Opacity/Dark Static Press"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${a=>a.theme.color["Special/Dark Static Neutral 30"]}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${a=>a.theme.color["Special/Dark Static Neutral 30"]});
    }
  }
`,Qx=G`
  background-color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
    border-color: var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
    border-color: var(--admiral-color-Error_Error80, ${a=>a.theme.color["Error/Error 80"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Zx=G`
  background-color: var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
    border-color: var(--admiral-color-Success_Success60, ${a=>a.theme.color["Success/Success 60"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
    border-color: var(--admiral-color-Success_Success70, ${a=>a.theme.color["Success/Success 70"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Fx=G`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,Kx=G`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${qp}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${Yp}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${Gp}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${Vx}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${Xx}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${Qx}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${Zx}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${qp}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${Yp}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${Gp}
  }

  ${Fx}
`,xr=Q.div``;function Xn(a){switch(a){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}G`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Xn("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Xn("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Xn("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Xn("s")}px;`}
  }
`;G`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Xn("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Xn("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Xn("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Xn("s")}px;`}
  }
`;const Vp=G`
  padding: 0;
  height: 56px;
  ${a=>a.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${xr} {
    width: 24px;
    height: 24px;
  }

  ${$e["Button/Button 1"]}
`,Wx=G`
  ${Vp}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${Vp}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${a=>a.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${a=>a.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${a=>a.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${xr} {
      width: 20px;
      height: 20px;
    }
    ${$e["Button/Button 2"]}
  }
`,yg=Q.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${a=>a.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${xr} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,Jx=Q(xr)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${a=>`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
    }
  }
`,Xp=Q.div`
  display: inline-block;
  width: 2px;
`,mr=y.forwardRef(({appearance:a="primary",dimension:r="xl",type:u="button",loading:o=!1,skeleton:s=!1,iconStart:f,iconEnd:m,icon:g,iconPlace:p="left",children:h,buttonCssMixin:v,displayAsDisabled:x,displayAsSquare:S,...N},E)=>{const D=!!f||!!g&&p==="left",A=!!m||!!g&&p==="right",T=(S||D?0:2)+(S||A?0:2);return $.jsxs(Ix,{ref:E,$appearance:a,$dimension:r,type:u,$loading:o,$skeleton:s,$buttonCssMixin:v,$displayAsSquare:S,$displayAsDisabled:x,...N,children:[o&&$.jsx(Jx,{children:$.jsx(mg,{$inverse:a!=="secondary"&&a!=="tertiary"&&a!=="ghost"})}),!S&&!D&&$.jsx(Xp,{}),$.jsxs(yg,{$addPadding:T,children:[D?$.jsx(xr,{children:f||g}):null,y.Children.toArray(h).map((C,H)=>typeof C=="string"?$.jsx("div",{children:C},C+H):C),A?$.jsx(xr,{children:m||g}):null]}),!S&&!A&&$.jsx(Xp,{})]})}),Ix=Q.button.attrs(a=>({"data-dimension":a.$dimension,"data-appearance":[a.$appearance,a.$displayAsDisabled?"disabled":void 0].filter(r=>r!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${Nl(a.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  ${a=>(a.$loading||a.$skeleton)&&"pointer-events: none"};

  ${Kx};
  ${Wx};
  ${a=>a.$buttonCssMixin};
  ${({$skeleton:a})=>a&&pg};

  ${yg} {
    ${a=>a.$loading||a.$skeleton?"visibility: hidden;":""}
  }
`;mr.displayName="Button";var Qp;function Pf(){return Pf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Pf.apply(null,arguments)}var e2=function(a){return y.createElement("svg",Pf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},a),Qp||(Qp=y.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))},Zp;function qf(){return qf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},qf.apply(null,arguments)}var t2=function(a){return y.createElement("svg",qf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},a),Zp||(Zp=y.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const a2=G`
  width: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,n2=G`
  height: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,l2=Q(e2)`
  pointer-events: none;
`,r2=Q(t2)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,i2=Q.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${a=>a.$disabled?"not-allowed":a.$readOnly?"default":"pointer"};

  overflow: visible;
  ${a2};
  ${n2};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`,bl=Q.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${a=>Sr(a.theme.shape)});
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border: 1px solid
    ${({$error:a,theme:r})=>a?`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,gg=G`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`,Fp=G`
  &:not(:disabled) {
    &::after {
      ${gg};
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
`,u2=G`
  &:not(:disabled) {
    &::after {
      ${gg};
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
`,Kp=G`
  pointer-events: none;
  & + ${bl} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  }
`,Yf=G`
  background-color: var(--admiral-color-Primary_Primary30, ${a=>a.theme.color["Primary/Primary 30"]});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  }
`,vg=G`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: none;
`,o2=G`
  & + ${bl} {
    ${vg}
  }
`,bg=G`
  & + ${bl} {
    ${Yf}
  }
`,c2=G`
  ${a=>a.readOnly?bg:o2}
`,s2=Q.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Small, ${a=>Sr(a.theme.shape)});
  margin: 0;
  padding: 0;

  ${a=>a.readOnly&&Kp}

  &:checked + ${bl} {
    ${a=>a.readOnly?Yf:vg}
  }
  &:checked:disabled + ${bl} {
    ${Yf}
  }

  ${a=>a.$indeterminate&&c2}

  &:not(:checked) + ${bl} {
    > * {
      display: ${a=>a.$indeterminate?"block":"none"};
    }
  }

  &:disabled {
    cursor: not-allowed;
    ${Kp}
    ${a=>a.$indeterminate&&bg}
  }

  ${a=>!a.readOnly&&a.$hovered&&Fp}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${Fp}

  &:active:not(:disabled) {
    ${u2}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,Sg=y.forwardRef(({className:a,dimension:r="m",disabled:u,readOnly:o,hovered:s,indeterminate:f,error:m,...g},p)=>$.jsxs(i2,{$dimension:r,$disabled:u,$readOnly:o,className:a,children:[$.jsx(s2,{ref:p,disabled:u,readOnly:o,...g,type:"checkbox",$indeterminate:f,onKeyDown:h=>{var v;o&&X.getCode(h)===X[" "]&&h.preventDefault(),(v=g.onKeyDown)==null||v.call(g,h)},"data-hovered":s,$hovered:s}),$.jsx(bl,{$error:m,children:$.jsx(f?r2:l2,{"aria-hidden":"true",focusable:"false"})})]}));Sg.displayName="Checkbox";function Gi(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const f2=G`
  height: ${({$dimension:a})=>{switch(a){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,bd=G`
  ${pg}
  & > * {
    visibility: hidden;
  }
`,d2=Q.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${Nl(a.theme.shape)})`};

  pointer-events: ${a=>a.$skeleton?"none":"all"};
  ${({$skeleton:a})=>a&&bd};
`,h2=Q(d2)`
  ${f2};
`,m2=Q.div`
  white-space: nowrap;
  ${$e["Body/Body 2 Long"]}
  color: ${a=>a.$error?`var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${a=>a.$transparent&&!a.$error?0:1};
  max-width: ${a=>a.$transparent&&!a.$error?0:"none"};
  overflow: hidden;
`,p2=({maxLength:a,visibilityThreshold:r=.8,inputRef:u,...o})=>{const[s,f]=y.useState(0);return y.useEffect(()=>{const m=setInterval(()=>{const g=u.current;g&&f(g.value.length)},250);return()=>clearInterval(m)},[u]),s>=a*r?$.jsxs(m2,{...o,$error:s>=a,$transparent:s<a*r,children:[s," / ",a]}):null},Sd=Q.label`
  display: block;
  text-align: left;
  ${$e["Body/Body 2 Short"]}
  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-focus-within] & {
    color: ${a=>a.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};
  }
  [data-required-within] &:is(label)[required]::after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }
  margin-bottom: 8px;
`;Sd.displayName="Label";const xg=Q.div``,y2=G`
  flex-direction: row;
  align-items: center;

  ${Sd} {
    margin: 0 8px 0 0;
  }

  ${xg} {
    flex: 1 1 auto;
  }
`,g2=Q.div`
  display: flex;
  overflow: hidden;
  ${a=>a.$displayInline?y2:"flex-direction: column;"}
`,v2=Q.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 50%;
  margin-bottom: 8px;
  ${bd}
`,b2=Q.div`
  position: relative;
  text-align: left;
`,S2=G`
  color: transparent;
`,x2=Q(Sd)`
  ${a=>a.$skeleton&&S2};
`,E2=G`
  visibility: hidden;
`,_2=Q.div`
  display: flex;
  justify-content: space-between;
  ${a=>a.$skeleton&&E2};
`,w2=Q.div`
  flex: 1 1 auto;

  padding-top: 8px;

  text-align: left;

  ${$e["Body/Body 2 Short"]}

  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-status='error'] & {
    color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] & {
    color: var(--admiral-color-Success_Success50Main, ${a=>a.theme.color["Success/Success 50 Main"]});
  }
`,$2=Q(p2)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`,xd=y.forwardRef(({children:a,maxLength:r,inputRef:u,displayCharacterCounter:o=!0,characterCounterVisibilityThreshold:s=.8,...f},m)=>{const g=y.useRef(null),[p,h]=y.useState(!1),{className:v,style:x,displayInline:S,status:N,extraText:E,label:D,required:A,disabled:T,id:C,skeleton:H=!1,...Y}=f,[k]=y.useState(Gi()),F={className:v,style:x,...Y},I={htmlFor:C??k,children:D,required:A,disabled:T};return y.useEffect(()=>{const re=()=>{h(!0)},ne=()=>{h(!1)},fe=g.current;return fe&&(fe.addEventListener("focusin",re),fe.addEventListener("focusout",ne)),()=>{fe&&(fe.removeEventListener("focusin",re),fe.removeEventListener("focusout",ne))}},[]),$.jsxs(g2,{...F,$displayInline:S,"data-status":N,"data-focus-within":p?"":void 0,"data-required-within":A?"":void 0,"data-disabled":T?"":void 0,"data-read-only":!!f.readOnly||void 0,ref:xa(g,m),children:[I.children&&$.jsxs(b2,{children:[H&&$.jsx(v2,{}),$.jsx(x2,{$skeleton:H,...I})]}),$.jsxs(xg,{children:[a,$.jsxs(_2,{$skeleton:H,children:[E&&$.jsx(w2,{children:E}),o&&u&&r!==void 0&&$.jsxs($.Fragment,{children:[$.jsx("div",{}),$.jsx($2,{maxLength:r,visibilityThreshold:s,inputRef:u})]})]})]})]})});xd.displayName="Field";function Gf(a,r){return a.value!==r.value||a.selectionStart!==r.selectionStart||a.selectionEnd!==r.selectionEnd}function hn(a,r){var f;const{value:u=a.value,selectionStart:o,selectionEnd:s}=r;if(Gf(a,{value:u,selectionStart:o,selectionEnd:s})){const m=(f=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a),"value"))==null?void 0:f.set;let g;m==null||m.call(a,u),typeof o=="number"&&typeof s=="number"&&a.setSelectionRange(o,s),typeof Event=="function"?g=new Event("input",{bubbles:!0}):(g=document.createEvent("Event"),g.initEvent("input",!0,!0)),a.dispatchEvent(g)}}var Wp;function Vf(){return Vf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Vf.apply(null,arguments)}var N2=function(a){return y.createElement("svg",Vf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Wp||(Wp=y.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))},Jp;function Xf(){return Xf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var o in u)({}).hasOwnProperty.call(u,o)&&(a[o]=u[o])}return a},Xf.apply(null,arguments)}var T2=function(a){return y.createElement("svg",Xf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Jp||(Jp=y.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};function M2({icon:a,...r}){return $.jsx(a,{...r})}const Qf=Q(M2)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${a=>a.theme.color["Primary/Primary 70"]});
  }
`,A2=G`
  width: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,O2=Q.div`
  position: relative;
  container-type: inline-size;
  ${A2};

  & svg {
    ${a=>a.$svgMixin||""}
  }
`,Ed=({dimension:a="m",inverse:r=!1,svgMixin:u,...o})=>$.jsx(O2,{$dimension:a,$svgMixin:u,role:"alert","aria-live":"assertive",...o,children:$.jsx(mg,{$inverse:r})});Ed.displayName="Spinner";const _l=a=>!!a&&(a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth),Zf=a=>{switch(a.$dimension){case"xl":default:return 24;case"s":return 20}},Li=a=>{switch(a.$dimension){case"xl":default:return 16;case"s":return 12}},C2=G`
  padding-right: ${a=>Li(a)+(Zf(a)+8)*(a.$iconsAfterCount??0)}px;
  padding-left: ${a=>Li(a)+(Zf(a)+8)*(a.$iconsBeforeCount??0)}px;
`,D2=G`
  background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,B2=G`
  ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}}
`,pr=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-radius: inherit;

  border: 1px solid ${B2};
  ${a=>a.disabled&&"border-color: transparent;"};
`,R2=G`
  border-color: ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Neutral_Neutral60, ${r.color["Neutral/Neutral 60"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error70, ${r.color["Error/Error 70"]})`;case"success":return`var(--admiral-color-Success_Success60, ${r.color["Success/Success 60"]})`}}};
`,z2=G`
  border: 2px solid
    ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}};
`,H2=G`
  &:focus-within:not(:disabled) > ${pr} {
    ${a=>a.disabled||a.readOnly?"border-color: transparent":a.$isLoading?"":z2}
  }

  &:hover:not(:focus-within) > ${pr} {
    ${a=>a.$isLoading?"":a.disabled||a.readOnly?"transparent":R2};
  }
`,j2=G`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,L2=Q.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${Li}px;

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  background-color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});

  &&&:user-invalid + ${pr} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  &&&:user-invalid:hover:not(:disabled) + ${pr} {
    border: 1px solid var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:user-invalid:focus:not(:disabled) + ${pr} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${D2}
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${C2}
  ${j2}
`,Eg=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, ${a=>Nl(a.theme.shape)});
    display: block;
    width: ${Zf}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    }
  }
`,U2=Q(Eg)`
  left: 0;

  padding-left: ${Li}px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`,k2=Q(Eg)`
  right: 0;

  padding-right: ${Li}px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,P2=Q(h2)`
  ${H2}
  ${a=>a.disabled?"cursor: not-allowed;":a.$isLoading?"cursor: default;":""}
`;function q2(a){return a||{}}const _g=y.forwardRef(({dimension:a="m",type:r,displayClearIcon:u,isLoading:o,status:s,handleInput:f=q2,containerRef:m,icons:g,iconsBefore:p,iconsAfter:h,children:v,className:x,style:S,placeholder:N,skeleton:E=!1,showTooltip:D=!0,disableCopying:A,...T},C)=>{const H=y.useRef(null),Y=m||y.useRef(null),k=y.Children.toArray(h||g),F=y.Children.toArray(p),[I,re]=y.useState(!1),[ne,fe]=y.useState(!1),[Ae,Be]=y.useState(T.defaultValue??void 0),Oe=T.value??Ae;y.useEffect(()=>{_l(H.current)?re(!0):re(!1)},[ne,re]),y.useLayoutEffect(()=>{function ae(){document.activeElement!==H.current&&fe(!0)}function J(){fe(!1)}const _=Y.current;if(_)return _.addEventListener("mouseenter",ae),_.addEventListener("mouseleave",J),_.addEventListener("mousedown",J),()=>{_.removeEventListener("mouseenter",ae),_.removeEventListener("mouseleave",J),_.removeEventListener("mousedown",J)}},[fe]);const[pt,ze]=y.useState(!1);if(!T.readOnly&&r==="password"){const ae=pt?T2:N2;k.push($.jsx(Qf,{icon:ae,onClick:()=>{ze(!pt)},"aria-hidden":!0},"eye-icon"))}!T.readOnly&&u&&Oe&&k.unshift($.jsx(Qf,{icon:gd,onMouseDown:ae=>{ae.preventDefault()},onClick:()=>{H.current&&hn(H.current,{value:""})},"aria-hidden":!0},"clear-icon")),o&&k.unshift($.jsx(Ed,{dimension:a==="s"?"ms":"m"},"loading-icon"));const U=F.length,ee=k.length;return y.useLayoutEffect(()=>{const ae=f(null);function J(_){const{value:L,selectionStart:K,selectionEnd:Z}=this,te=f({value:L,selectionStart:K,selectionEnd:Z},_);N&&!Gf(ae,te)?hn(this,{...te,value:""}):hn(this,te)}if(r!=="date"&&H.current){const _=H.current;_.addEventListener("input",J);const{value:L,selectionStart:K,selectionEnd:Z}=_,te=f({value:L,selectionStart:K,selectionEnd:Z});return N&&!Gf(ae,te)?hn(_,{...te,value:""}):hn(_,te),()=>{_.removeEventListener("input",J)}}},[f,N]),y.useEffect(()=>{function ae(){this.selectionEnd=this.selectionStart}if(A&&H.current){const J=H.current;return J.addEventListener("select",ae,!0),()=>J.removeEventListener("select",ae,!0)}},[A]),$.jsxs($.Fragment,{children:[$.jsxs(P2,{className:x,style:S,$dimension:a,ref:Y,disabled:T.disabled,readOnly:T.readOnly,$isLoading:o,$status:s,"data-disabled":!!T.disabled||void 0,"data-read-only":!!T.readOnly||void 0,"data-loading":!!o||void 0,"data-status":s,$skeleton:E,"data-disable-copying":!!A||void 0,children:[$.jsx(L2,{ref:xa(C,H),...T,onChange:ae=>{var J;Be(ae.currentTarget.value),(J=T.onChange)==null||J.call(T,ae)},placeholder:N,$dimension:a,$iconsAfterCount:ee,$iconsBeforeCount:U,type:r==="password"&&pt?"text":r}),$.jsx(pr,{$status:s,disabled:T.disabled||T.readOnly}),U>0&&$.jsx(U2,{disabled:T.disabled,$dimension:a,children:F}),ee>0&&$.jsx(k2,{disabled:T.disabled,$dimension:a,children:k}),v]}),D&&ne&&I&&$.jsx(Yi,{renderContent:()=>{var ae;return((ae=H==null?void 0:H.current)==null?void 0:ae.value)||""},targetElement:Y.current})]})});_g.displayName="TextInput";const Y2=G`
  ${({theme:a,$appearance:r})=>{switch(r){case"subtle":return`var(--admiral-color-Neutral_Neutral10, ${a.color["Neutral/Neutral 10"]})`;case"strong":return`var(--admiral-color-Neutral_Neutral40, ${a.color["Neutral/Neutral 40"]})`;case"primary":return`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`;case"staticWhite":return`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`;case"default":return`var(--admiral-color-Neutral_Neutral20, ${a.color["Neutral/Neutral 20"]})`;default:return r}}}
`;function Ip(a){return a==="s"?"1px":"2px"}const G2=G`
  ${({$dimension:a,$orientation:r})=>r==="horizontal"?`height: ${Ip(a)}`:`width: ${Ip(a)}`}
`,V2=G`
  ${({$length:a,$orientation:r})=>r==="horizontal"?`width: ${a}`:`height: ${a}`}
`,X2=Q.div`
  box-sizing: border-box;
  background: ${Y2};
  ${G2};
  ${V2};
`,Go=y.forwardRef(({dimension:a="m",appearance:r="default",orientation:u="horizontal",length:o="100%",...s},f)=>$.jsx(X2,{...s,ref:f,$dimension:a,$appearance:r,$orientation:u,$length:o}));Go.displayName="Divider";const wg=y.createContext(null),$g=()=>y.useContext(wg),Q2=({children:a,...r})=>$.jsx(wg.Provider,{value:r,children:a}),Z2=y.createContext(null),Ng=()=>y.useContext(Z2),Er=35,ey=4,_d=G`
  height: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,F2=G`
  width: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,Ff=G`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,K2=G`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,Kf=G`
  width: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,W2=G`
  padding: ${({$dimension:a})=>a==="m"?"6px 12px":"4px 8px"};
`,J2=G`
  padding: ${({$dimension:a})=>a==="m"?"5px 11px":"3px 7px"};
`,I2=G`
  ${({$appearance:a})=>a==="filled"?W2:J2}
`,eE=G`
  &:hover {
    color: ${({theme:a,$appearance:r,$selected:u})=>u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:r!=="filled"||u?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
  }
`,tE=G`
  ${({$dimension:a})=>a==="s"?$e["Caption/Caption 1"]:$e["Body/Body 2 Long"]}
  color: ${({theme:a,$appearance:r,$disabled:u,$selected:o})=>u&&!o?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:o||o&&u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  ${a=>!a&&eE}
`,aE=G`
  &:hover {
    ${({theme:a,$appearance:r,$selected:u,$withCloseIcon:o})=>u?`background-color: var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral12, ${a.color["Opacity/Neutral 12"]});`:o?void 0:`background-color: var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]});
    `}
  }
  &:active {
    ${({theme:a,$appearance:r,$selected:u,$withCloseIcon:o})=>u?`background-color: var(--admiral-color-Primary_Primary80, ${a.color["Primary/Primary 80"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral16, ${a.color["Opacity/Neutral 16"]});`:o?void 0:`background-color: var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, ${a.theme.color["Primary/Primary 80"]});
    `}
  }
`,nE=G`
  background-color: ${({theme:a,$appearance:r,$selected:u,$disabled:o})=>u&&!o?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:u&&o?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`:"transparent"};

  border: ${({theme:a,$appearance:r,$disabled:u})=>r==="filled"?"none":u?`1px solid var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`1px solid var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  border-radius: 16px;

  ${a=>a.$clickable&&!a.$disabled&&aE}

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`,lE=Q.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: ${({$disabled:a})=>a?"none":"auto"};
  }
  cursor: ${({$defaultChip:a,$disabled:r,$withTooltip:u})=>!a&&!u||r?r?"not-allowed":"default":"pointer"};
  ${nE}
  ${_d}
  ${a=>a.$withCloseIcon?`padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:I2}
  ${a=>a.$withBadge&&!a.$withCloseIcon?`padding-inline-end: ${(a.$dimension==="s"?4:6)-(a.$appearance==="outlined"?1:0)}px;
         padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:""}
  ${tE}
`,Tg=G`
  display: flex;
  align-items: center;
  justify-content: center;
`,rE=Q.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${a=>a.$withCloseIcon&&Tg}
  ${a=>a.$withCloseIcon?_d:K2}
  & svg {
    ${Ff}
    ${Kf}
    & *[fill^='#'] {
      fill: ${({theme:a,$appearance:r,$disabled:u,$selected:o})=>o?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:u?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};
    }
  }
`,iE=Q.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`,uE=Q.div`
  display: inline-block;
  margin-inline-end: 8px;
`,oE=Q.div`
  display: inline-block;
  margin-inline-start: ${a=>a.$withCloseIcon?"2px":"8px"};
`,ty=Q.div`
  ${a=>a.$withCloseIcon&&Tg}
  ${a=>a.$withCloseIcon?_d:Ff}
  ${a=>a.$withCloseIcon?F2:Kf}
  & > svg {
    ${Ff}
    ${Kf}
  }
`,cE=Q(vd)`
  margin-inline-start: ${({dimension:a})=>a==="s"?"6px":"8px"};
`,sE=Q(Dx)`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${a=>a.dimension==="s"?"6px":"8px"};
  ${a=>a.appearance==="primary"?a.dimension==="s"?"margin-inline-end: 3px":"margin-inline-end: 5px":""};
`,fE=()=>"",wd=y.forwardRef(({dimension:a="m",disabled:r,appearance:u="outlined",selected:o,onClose:s,children:f,renderContentTooltip:m=fE,iconBefore:g,iconAfter:p,iconStart:h,iconEnd:v,badge:x,...S},N)=>{const E=o!==void 0,[D,A]=y.useState(!1),[T,C]=y.useState(!1),H=!!s,Y=!!x,k=y.useMemo(()=>o&&!r?"whiteBlue":r?o||u==="filled"?"whiteDisable":"lightDisable":u==="filled"?"white":"info",[u,o,r]),F=y.useRef(null),I=y.useRef(null);return y.useEffect(()=>{I.current&&_l(I.current)!==D&&A(_l(I.current))},[T,A]),y.useLayoutEffect(()=>{function re(){C(!0)}function ne(){C(!1)}const fe=F.current;if(fe)return fe.addEventListener("mouseenter",re),fe.addEventListener("mouseleave",ne),fe.addEventListener("focus",re),fe.addEventListener("blur",ne),()=>{fe.removeEventListener("mouseenter",re),fe.removeEventListener("mouseleave",ne),fe.removeEventListener("focus",re),fe.removeEventListener("blur",ne)}},[C]),$.jsxs($.Fragment,{children:[$.jsx(lE,{...S,ref:xa(N,F),$dimension:a,$disabled:r,$appearance:u,$selected:o,$defaultChip:E,$withCloseIcon:H,$withTooltip:D,$withBadge:Y,onKeyDown:re=>{var ne,fe;if(!r){const Ae=X.getCode(re);Ae!==X.Enter&&Ae!==X[" "]||(H?s==null||s():(ne=S.onClick)==null||ne.call(S,re)),(fe=S.onKeyDown)==null||fe.call(S,re)}},tabIndex:S.tabIndex??(r?-1:0),$clickable:!!S.onClick,children:$.jsxs(rE,{$dimension:a,$disabled:r,$appearance:u,$selected:o,$withCloseIcon:H,children:[(h||g)&&$.jsx(uE,{children:$.jsx(ty,{$dimension:a,$withCloseIcon:H,children:h||g})}),$.jsx(iE,{ref:I,children:f}),x!==void 0&&$.jsx(cE,{"data-badge":!0,dimension:a,appearance:k,children:x}),!s&&(v||p)&&$.jsx(oE,{$dimension:a,children:$.jsx(ty,{$dimension:a,$withCloseIcon:H,children:v||p})}),s&&$.jsx(sE,{dimension:a==="m"?"mBig":"s",highlightFocus:!1,onMouseDown:re=>{re.preventDefault(),s==null||s(S.id)},disabled:r,tabIndex:-1,appearance:u==="outlined"?"primary":"secondary"})]})}),T&&D&&$.jsx(Yi,{targetElement:F.current,renderContent:m})]})});wd.displayName="Chips";const Mg=Q.div`
  width: ${Er}px;
  height: 24px;
`,dE=Q.div`
  display: flex;
  width: ${Er}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${Er}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,hE=Q(wd)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,mE=Q.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,pE=G`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,yE=Q(wd)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:a})=>a&&pE};

  min-width: ${Er}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:a,disabled:r})=>{if(!r)return`background-color: var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`}}
  }
`,fo=({value:a,disabled:r,renderChip:u,...o},s)=>{const f=u(),m={};return $r(o,m,"data",!1),(g=>typeof g=="object"&&g!==null&&!y.isValidElement(g))(f)?{...f,onClose:()=>{var g;return(g=f.onClose)==null?void 0:g.call(f,{value:a,disabled:r,...m})}}:{disabled:r,onClose:()=>s(a),children:f}},ay=({className:a,option:r,disabled:u,readOnly:o,onClick:s,onChipRemove:f})=>{const m=y.useCallback(g=>()=>$.jsx(mE,{children:g}),[]);return $.jsx(yE,{className:a,tabIndex:-1,dimension:"s",appearance:"filled",onClick:s,onClose:o?void 0:fo(r,f).onClose,disabled:fo(r,f).disabled||u,renderContentTooltip:m(fo(r,f).children),children:fo(r,f).children})},gE=({count:a,disabled:r,onClick:u})=>{const o=y.useRef(null),s=y.useRef(null);return a?$.jsx(dE,{onClick:u,ref:o,className:"counter",children:$.jsxs(hE,{ref:s,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:r,children:["+",a]})}):$.jsx(Mg,{})},vE=Q.div`
  display: flex;
`,bE=y.forwardRef(({option:a,childrenOptions:r,containerRef:u,shouldShowCount:o,disabled:s,readOnly:f,onChipClick:m,onChipRemove:g},p)=>{const h=y.useRef(null),[v,x]=y.useState(!1);return y.useLayoutEffect(()=>{const S=new IntersectionObserver(function(N){if(N[0].isIntersecting&&!v){x(!0),N[0].target.setAttribute("data-visible","true");const E=N[0].target.previousElementSibling,D=N[0].target.nextElementSibling;return E&&E.removeAttribute("data-show-count"),void(D&&!D.getAttribute("data-visible")&&N[0].target.setAttribute("data-show-count",""))}if(v&&!N[0].isIntersecting){x(!1),N[0].target.removeAttribute("data-visible"),N[0].target.removeAttribute("data-show-count");const E=N[0].target.previousElementSibling;E&&E.getAttribute("data-visible")&&E.setAttribute("data-show-count","true")}},{root:u.current,threshold:[0,1]});return u.current&&h.current&&S.observe(h.current),()=>S.disconnect()},[v]),$.jsxs(vE,{ref:xa(p,h),onMouseDown:S=>S.preventDefault(),children:[$.jsx(ay,{className:"chip",option:a,disabled:s,readOnly:f,onClick:m,onChipRemove:g}),o&&r.length>0&&$.jsx(gE,{count:r.length,disabled:s,children:r.map(S=>$.jsx(ay,{option:S,disabled:s,readOnly:f,onClick:m,onChipRemove:g},S.value))}),!o&&$.jsx(Mg,{})]},a.value)}),SE=({options:a,isOptionsListOpen:r,containerRef:u,hasMaxHeight:o,...s})=>{const f=pd(r);return y.useEffect(()=>{var m,g,p;o&&a.length!==0&&(f&&!r&&((m=u.current)==null||m.scrollTo({top:0,left:0,behavior:"smooth"})),!f&&r&&setTimeout(()=>{var h,v,x;(h=u.current)==null||h.scrollTo({top:0,left:0,behavior:"instant"}),(x=u.current)==null||x.scrollTo({top:(v=u.current)==null?void 0:v.scrollHeight,left:0,behavior:"smooth"})}),r&&f&&((p=u.current)==null||p.scrollTo({top:(g=u.current)==null?void 0:g.scrollHeight,left:0,behavior:"smooth"})))},[r,a,o]),$.jsx($.Fragment,{children:a.map((m,g)=>$.jsx(bE,{option:m,childrenOptions:g<a.length-1?a.slice(g+1):[],containerRef:u,...s},m.value))})},dn=Q.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: inherit;
`,xE=G`
  min-height: ${({$multiple:a,$minRowCount:r,$dimension:u})=>a?r?24*r+4*(r-1)+"px":"24px":(u==="s"?20:24)+"px"};

  max-height: ${({$multiple:a,$maxRowCount:r,$opened:u,$idleHeight:o})=>a?r?24*r+4*(r-1)+"px":u||o!=="fixed"?"none":"24px":"none"};
`,EE=G`
  > * {
    margin-left: ${`-${Er+ey}px`};
  }

  padding-left: ${`${Er+ey}px`};
`,Ag=Q.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:a,$isEmpty:r})=>a&&!r&&EE}

  gap: 4px;
  flex-wrap: ${({$multiple:a})=>a?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${xE}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,_E=Q.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,wE=G`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,$E=Q.input`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 1px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${({$dimension:a})=>a==="s"?$e["Body/Body 2 Long"]:$e["Body/Body 1 Long"]}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({$dimension:a,$isMultiple:r})=>{return u=r,(a!=="s"||u?24:20)+"px";var u}};

  ${wE};
`,NE=G`
  pointer-events: none;
  cursor: default;
`,TE=G`
  && > *:not(${Ag}) {
    pointer-events: none;
  }

  & ${dn} {
    border-color: transparent;
  }
`,ME=G`
  ${dn} {
    border-width: 2px;
  }
`,AE=Q.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({$dimension:a,$multiple:r})=>a==="s"&&r?"2px 0":"0"};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({$dimension:a})=>a==="s"?20:24}px;
    height: ${({$dimension:a})=>a==="s"?20:24}px;
  }

  [data-disabled='true'] &&& {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    }
  }
`,OE=Q.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${a=>a.$multiple?"flex-start":"center"};
  cursor: ${({disabled:a,$readonly:r,$isLoading:u})=>a?"not-allowed":r||u?"default":"pointer"};

  padding: ${({$dimension:a,$multiple:r})=>{switch(a){case"xl":return"16px 16px";case"s":return r?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:a,disabled:r,$readonly:u})=>r||u?`var(--admiral-color-Neutral_Neutral10, ${a.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${a.color["Neutral/Neutral 00"]})`};

  ${({disabled:a,$readonly:r})=>r||a?TE:""};
  ${({$focused:a,$readonly:r,$isLoading:u})=>!a||r||u?"":ME};

  & ${dn} {
    border-color: ${a=>a.disabled||a.$readonly?"transparent":a.$focused&&!a.$isLoading?`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral40, ${a.theme.color["Neutral/Neutral 40"]})`};
  }

  &:hover ${dn} {
    ${a=>!a.disabled&&!a.$readonly&&!a.$focused&&!a.$isLoading&&`
      border-color: var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]});
    `};
  }

  &[data-status='success'] {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${dn} {
      border-color: var(--admiral-color-Success_Success50Main, ${a.theme.color["Success/Success 50 Main"]});
      }
      &:hover ${dn} {
        border-color: var(--admiral-color-Success_Success60, ${a.theme.color["Success/Success 60"]});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${dn} {
        border-color: var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]});
      }
  
      &:hover ${dn} {
        border-color: var(--admiral-color-Error_Error70, ${a.theme.color["Error/Error 70"]});
      }
    `}
  }

  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${Nl(a.theme.shape)})`};

  ${({$skeleton:a})=>a&&bd};
  ${({$skeleton:a})=>a&&NE};
`,Og=Q.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:a})=>{switch(a){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:a})=>{switch(a){case"xl":return $e["Body/Body 1 Long"];case"s":return $e["Body/Body 2 Long"];default:return $e["Body/Body 1 Short"]}}}
`,CE=G`
  ${$e["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${a=>Nl(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>Yo(a.theme.shadow["Shadow 08"])});
  overflow: auto;
`,DE=Q(yd)`
  ${CE}
`,BE=Q.div`
  user-select: none;
`,RE=Q(md)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${a=>a.$selected&&!a.$hovered&&!a.$preselected&&a.$multiple&&"background-color: transparent;"}
`,zE=({visibleValue:a,isSearchPanelOpen:r,targetRef:u,forceHideOverflowTooltip:o})=>{const s=y.useRef(null),[f,m]=y.useState(!1),[g,p]=y.useState(!1);y.useEffect(()=>{s.current&&_l(s.current)!==f&&m(_l(s.current))},[g,m]),y.useEffect(()=>{function v(){p(!0)}function x(){p(!1)}const S=s.current;if(S)return S.addEventListener("mouseenter",v),S.addEventListener("mouseleave",x),()=>{S.removeEventListener("mouseenter",v),S.removeEventListener("mouseleave",x)}},[p]);const h=!o&&!r&&g&&f;return $.jsxs($.Fragment,{children:[$.jsx(_E,{ref:s,children:a}),h&&$.jsx(Yi,{renderContent:()=>a,targetElement:u.current})]})},HE=a=>a.stopPropagation(),jE=Q.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,LE=y.forwardRef(({options:a,...r},u)=>{const o=y.useRef(null);return y.useEffect(()=>{var f;function s(m){const g=X.getCode(m);g&&[X[" "],X.Enter,X.ArrowDown,X.ArrowUp].includes(g)&&m.preventDefault()}return(f=o.current)==null||f.addEventListener("keydown",s),()=>{var m;return(m=o.current)==null?void 0:m.removeEventListener("keydown",s)}},[]),$.jsxs(jE,{ref:xa(u,o),...r,onClick:HE,children:[$.jsx("option",{value:""}),a.map(s=>$.jsx("option",{value:s.value,disabled:s.disabled,children:s.value},s.value))]})}),Cg=y.createContext(null),UE=()=>y.useContext(Cg),kE=({children:a,...r})=>$.jsx(Cg.Provider,{value:r,children:a}),PE=(a="",r="",u="wholly")=>{const o=(u==="word"?r.split(" "):[r]).filter(Boolean).map(g=>g.toLowerCase()),s=["[","]","\\","^","$",".","|","?","*","+","(",")"],f=o.map(g=>`(${g.split("").map(p=>s.includes(p)?`\\${p}`:p).join("")})?`).join(""),m=a.split(new RegExp(f,"gi")).filter(Boolean);return!r||m.some(g=>o.includes(g.toLowerCase()))},qE=Q.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${a=>a.disabled?"not-allowed":a.readOnly?"default":"pointer"};

  ${a=>a.$dimension==="s"?$e["Body/Body 2 Short"]:$e["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};

  fieldset[data-dimension='s'] && {
    ${$e["Body/Body 2 Short"]};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  ${a=>a.readOnly?"pointer-events: none":""};
`,YE=Q.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: ${"8px"};
  ${a=>a.$dimension==="s"?$e["Body/Body 2 Short"]:$e["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
  fieldset[data-dimension='s'] && {
    ${$e["Body/Body 2 Short"]}
  }
`,GE=Q.div`
  margin-top: 4px;
  ${a=>a.$dimension==="s"?$e["Caption/Caption 1"]:$e["Body/Body 2 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};

  fieldset[data-dimension='s'] && {
    ${$e["Caption/Caption 1"]}
  }
`,VE=Q(Sg)`
  margin-top: 2px;
`,Dg=y.forwardRef(({children:a,disabled:r=!1,readOnly:u=!1,hovered:o,dimension:s="m",error:f,indeterminate:m=!1,extraText:g,className:p,id:h,name:v,style:x,...S},N)=>{const E=y.useMemo(()=>h||Gi(),[h]),D={"data-field-id":E,"data-field-name":v};return fd(S,D),$.jsxs(qE,{className:p,$dimension:s,disabled:r,readOnly:u,style:x,...D,onClick:A=>{A.target.tagName!=="INPUT"&&A.stopPropagation()},children:[$.jsx(VE,{...S,ref:N,disabled:r,readOnly:u,type:"checkbox",indeterminate:m,onKeyDown:A=>{var T;u&&X.getCode(A)===X[" "]&&A.preventDefault(),(T=S.onKeyDown)==null||T.call(S,A)},"data-hovered":o,hovered:o,dimension:s,id:E,name:v,error:f}),a&&$.jsxs(YE,{$dimension:s,disabled:r,children:[a,g&&$.jsx(GE,{disabled:r,$dimension:s,children:g})]})]})});Dg.displayName="CheckboxField";Q(Og)`
  background-color: ${({active:a,selected:r,theme:u})=>r?`var(--admiral-color-Opacity_Focus, ${u.color["Opacity/Focus"]})`:a?`var(--admiral-color-Opacity_Hover, ${u.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:a,theme:r})=>a?`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:a})=>a?"none":"all"};
  }
`;const XE=Q(Dg)`
  margin-right: 8px;
  flex-shrink: 0;
`,QE=a=>$g()?$.jsx(ZE,{...a}):null,ZE=({disabled:a=!1,id:r,value:u,children:o,renderOption:s,renderChip:f,...m})=>{const g=$g(),p=Ng(),h=(p==null?void 0:p.disabled)||a,v=y.useCallback(()=>o,[o]),x=f||v,S=y.useMemo(()=>s?s({disabled:a}):o,[s,a,u,o]),N={};$r(m,N,"data",!1);const E=y.useMemo(()=>({id:r,value:u,disabled:h,children:S,renderChip:x,...N}),[r,u,h,S,x]);return y.useEffect(()=>{var D;return(D=g==null?void 0:g.onConstantOptionMount)==null||D.call(g,E),()=>{var A;return(A=g==null?void 0:g.onConstantOptionUnMount)==null?void 0:A.call(g,E)}},[g==null?void 0:g.onConstantOptionMount,g==null?void 0:g.onConstantOptionUnMount,E]),null},FE=({id:a,disabled:r=!1,readOnly:u=!1,value:o,children:s,renderOption:f,renderChip:m,...g})=>{const p=UE(),h=Ng(),v=(h==null?void 0:h.disabled)||r,x=S=>p!=null&&p.multiple?(({selected:N=!1,hovered:E=!1})=>$.jsxs($.Fragment,{children:[(p==null?void 0:p.showCheckbox)&&$.jsx(XE,{checked:N,hovered:E,dimension:(p==null?void 0:p.dimension)==="s"?"s":"m",disabled:r,onChange:()=>!1}),s]}))(S):s;return y.useEffect(()=>{var E;const S=a||o,N={id:o,value:o,render:D=>{return f?f(D):y.createElement(RE,{...D,dimension:(A=p==null?void 0:p.dimension,A==="xl"?"l":A),key:S,...g,$selected:D.selected,$hovered:D.hovered,$preselected:D.preselected,$multiple:p==null?void 0:p.multiple},x({selected:D.selected,hovered:D.hovered}));var A},disabled:v,readOnly:u};return(E=p==null?void 0:p.onDropDownOptionMount)==null||E.call(p,N),()=>{var D;return(D=p==null?void 0:p.onDropDownOptionUnMount)==null?void 0:D.call(p,N)}},[p==null?void 0:p.onDropDownOptionMount,p==null?void 0:p.onDropDownOptionUnMount,p==null?void 0:p.dimension,p==null?void 0:p.multiple]),null},pf=a=>$.jsxs($.Fragment,{children:[$.jsx(QE,{...a}),$.jsx(FE,{...a})]}),KE=()=>y.useMemo(Gi,[]),WE=Q(Og)`
  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
`,ny=a=>a.stopPropagation(),ly=()=>{},Bg=y.forwardRef(({value:a,isLoading:r,className:u,style:o,status:s,icons:f,portalTargetRef:m,targetElement:g,inputTargetRef:p,disabled:h,readOnly:v,placeholder:x,defaultValue:S,dimension:N="m",idleHeight:E="fixed",minRowCount:D="none",maxRowCount:A="none",mode:T="select",multiple:C=!1,showCheckbox:H=!0,displayClearIcon:Y=!1,onClearIconClick:k,onInputChange:F,inputValue:I,defaultInputValue:re,renderSelectValue:ne,onFocus:fe,onBlur:Ae,children:Be,alignDropdown:Oe="stretch",alignSelf:pt="stretch",skeleton:ze=!1,locale:U,dropContainerCssMixin:ee,dropContainerClassName:ae,dropContainerStyle:J,renderDropDownTopPanel:_,renderDropDownBottomPanel:L,renderTopPanel:K,renderBottomPanel:Z,forcedOpen:te=!1,onChangeDropDownState:he,onInputKeyDown:oe,onInputKeyUp:Xe,onInputKeyUpCapture:ve,onInputKeyDownCapture:et,searchFormat:Ct="wholly",onFilterItem:Qe=PE,virtualScroll:He,title:jt,forceHideOverflowTooltip:Ra=!1,onSelectedChange:Ea,moveSelectedOnTop:wt,clearInputValueAfterSelect:Ke=!0,openButtonPropsConfig:Pt=ly,clearButtonPropsConfig:Lt=ly,...tt},lt)=>{const _a=tg()||sd,Ml=(U==null?void 0:U.emptyMessage)||$.jsx(WE,{$dimension:N,children:_a.locales[_a.currentLocale].select.emptyMessage}),[ke,Fn]=y.useState(a??S),[za,bt]=y.useState(""),Je=I===void 0?za:I,[st,ie]=y.useState(!1),[se,ge]=y.useState(),[Ce,Ze]=y.useState([]),[je,Xt]=y.useState([]),[Ne,Qt]=y.useState(te),[Zt,ia]=y.useState(!1),[ua,Ft]=y.useState(void 0),vn=a===void 0,oa=T==="select",Zi=y.useMemo(()=>A!=="none"&&A>0?A:E==="fixed"?1:"none",[A,E])!=="none",Al=a??S,Ha=y.useRef(Array.isArray(Al)?Al:[]),Kn=y.useRef(!1),wa=y.useRef([]);y.useEffect(()=>{Array.isArray(a)&&(Ha.current=a)},[a]);const ca=y.useMemo(()=>C?null:Ce.find(W=>W.value===ke),[C,Ce,ke]),at=y.useMemo(()=>C&&Array.isArray(ke)?ke.reduce((W,de)=>{const ue=Ce.find(Ge=>Ge.value===de);return ue&&W.push(ue),W},[]):[],[Ce,ke,C]),Dt=pd(Ne),[$a,Ol]=y.useState([]);y.useEffect(()=>{if(C&&wt||!($a.length>0)||Ol([]),C&&wt&&Dt!==Ne&&Ne){const W=at.map(ue=>ue.value),de=W.length>0?W.reduce((ue,Ge)=>{const ut=je.find(En=>En.value===Ge);return ut&&ue.push(ut),ue},[]):[];Ol(de)}},[je,Ne,at,C,wt]);const Tr=y.useMemo(()=>{const W=$a.map(ue=>ue.value),de=je.filter(ue=>Qe(ue.value,Je,Ct)).reduce((ue,Ge)=>(W.includes(Ge.value)||ue.push(Ge),ue),[...$a]);return de.length?de:[{id:"emptyMessage",render:()=>$.jsx(BE,{children:Ml},"empty"),disabled:!0}]},[r,je,N,Je,$a]);y.useEffect(()=>{se&&(Tr.find(W=>W.id===se)||ge(void 0))},[Tr,se]);const sa=p??y.useRef(null),Qa=y.useRef(null),Bt=y.useRef(null),Mr=g||(m==null?void 0:m.current)||Bt.current,Za=y.useRef(null),fa=y.useRef(null),Fa=y.useRef({shouldExtendInputValue:!1}),bn=W=>{Ze(de=>[...de,W]),wa.current.includes(W.value)&&(wa.current=wa.current.filter(de=>de!==W.value))},ft=W=>{Ha.current.includes(W.value)&&(wa.current=[...wa.current,W.value]),Ze(de=>de.filter(ue=>ue.value!==W.value))},Fi=y.useCallback(W=>{Xt(de=>[...de,W])},[]),Ki=y.useCallback(W=>{Xt(de=>de.filter(ue=>ue.id!==W.id))},[]),Na=y.useCallback(()=>{Qt(!1),sa.current&&hn(sa.current,{value:""}),ie(!0)},[ke]),da=y.useCallback(W=>{const de=Qa.current;if(!de)return;const ue=Array.from(de.options),Ge=ue.find(ut=>ut.value===W);if(Ge&&(C||ue.forEach(ut=>ut.selected=!1),Ge.selected=!C||!Ge.selected,de.dispatchEvent(new Event("change",{bubbles:!0})),C||Na(),Je&&sa.current&&Ke)){hn(sa.current,{value:"",selectionEnd:0,selectionStart:0});const ut=se;ge(""),setTimeout(()=>ge(ut))}},[Na,C,Je,se]),Io=y.useCallback(()=>{const W=Qa.current;W&&(W.selectedIndex=-1,W.dispatchEvent(new Event("change",{bubbles:!0})))},[]);y.useEffect(()=>{te!==Ne&&Qt(te)},[te]),y.useEffect(()=>{var W;he==null||he(Ne),!Ne&&Zt&&document.activeElement!==Bt.current&&((W=Qa.current)==null||W.focus())},[Ne,Zt]);const Wi=k||Io,Ar=Zi&&!Ne,ec=y.useCallback(()=>$.jsx(SE,{containerRef:Za,options:at,shouldShowCount:Ar,disabled:h,readOnly:v,onChipRemove:da,onChipClick:ny,isOptionsListOpen:Ne,hasMaxHeight:!!A&&A!=="none"}),[at,Ar,h,v,da,Ne,A]),Sn=(C?!(ke!=null&&ke.length):!ke)&&!!x&&!Je,Cl=ne==null?void 0:ne(ke,Je),Ta=ca==null?void 0:ca.children,Or=C?ec():Ta,xn=Cl||Or||ke||null,Ma=typeof xn=="string",Cr=Ma?$.jsx(zE,{visibleValue:xn,isSearchPanelOpen:Ne,targetRef:Bt,forceHideOverflowTooltip:Ra}):xn,Dl=()=>{Qt(W=>!W)},tc=()=>{if(!Je&&ke)return C?void(()=>{var ue;const W=(de=[...at].reverse(),(ue=de.find(({disabled:Ge})=>!Ge))==null?void 0:ue.value);var de;W&&da(W)})():ie(!1)};y.useEffect(()=>{var de;if(!v&&!h)return(de=Bt.current)==null||de.addEventListener("keydown",W),()=>{var ue;(ue=Bt.current)==null||ue.removeEventListener("keydown",W)};function W(ue){const Ge=X.getCode(ue);Ge===X[" "]&&(!oa&&Je?ue.stopPropagation():Ne||(ue.preventDefault(),Qt(!0),ue.stopPropagation())),Ge!==X.Enter||Ne||(ue.preventDefault(),Qt(!0),ue.stopPropagation()),Ge!==X.ArrowDown&&Ge!==X.ArrowUp||Ne||(Qt(!0),ue.stopPropagation());const ut=ue.ctrlKey||ue.metaKey||ue.altKey;ue.key.length!==1||ut||Ma&&!Je&&st&&(Fa.current.shouldExtendInputValue=!0),Ge!==X.Backspace||ue.repeat||tc(),Ge===X.Backspace&&((En=>{if(!Ma||!sa.current||Je||!st||!ke)return;En.preventDefault();const ja=xn.slice(0,-1);hn(sa.current,{value:ja,selectionEnd:ja.length,selectionStart:ja.length})})(ue),Qt(!0)),Ge===X.Escape&&Ne&&(Qt(!1),ue.preventDefault(),ue.stopPropagation())}},[v,h,oa,Je,Ne,at]),y.useEffect(()=>{var de;function W(){Kn.current=!1}return(de=Bt.current)==null||de.addEventListener("keyup",W),()=>{var ue;(ue=Bt.current)==null||ue.removeEventListener("keyup",W)}},[]),y.useEffect(()=>{(!Zt&&!C||C)&&(sa.current&&hn(sa.current,{value:""}),ie(!0))},[C,Zt]),y.useEffect(()=>{var W,de;Ne&&(oa?(W=Qa.current)==null||W.focus():(de=sa.current)==null||de.focus(),Ft(""))},[Ne,oa]),y.useEffect(()=>{ua&&ge("")},[ua]),y.useEffect(()=>{se&&Ft("")},[se]),y.useEffect(()=>{if(Ne){const W=ke&&!Array.isArray(ke)?ke:void 0;ge(W)}},[Ne]),y.useEffect(()=>{vn||Fn(a)},[a,vn]),og([Bt,fa],W=>{var de;W.target&&((de=Bt.current)!=null&&de.contains(W.target))||(ia(!1),Na())});const Ji=st&&(C?!!(ke!=null&&ke.length):!!ke),$t=y.useMemo(()=>y.Children.map(Be,W=>y.isValidElement(W)?y.cloneElement(W,{key:Gi(),...W.props}):null),[Be]),Ii=y.useMemo(()=>$.jsx(kE,{onDropDownOptionMount:Fi,onDropDownOptionUnMount:Ki,dimension:N,multiple:C,showCheckbox:H,children:$t}),[$t,N,H,C]),ac=y.useMemo(()=>$.jsx(Q2,{onConstantOptionMount:bn,onConstantOptionUnMount:ft,children:$t}),[$t]),Bl=CS(tt),eu=rg(tt),Wn={icon:gd,id:"searchSelectClearIcon",onClick:Wi,"aria-hidden":!0},tu={$isOpen:Ne,onClick:Dl,"aria-hidden":!0};return $.jsxs(OE,{className:u,style:o,$focused:Zt,$multiple:C,disabled:h,"data-disabled":h,$readonly:v,$isLoading:r,$dimension:N,ref:Bt,"data-status":s,onClick:h||v||r?void 0:W=>{var de;W.target&&((de=fa.current)!=null&&de.contains(W.target))||!oa&&Ne||Dl()},onFocus:W=>{Zt||(ia(!0),fe==null||fe(W))},onMouseDown:W=>{Zt&&W.preventDefault()},$skeleton:ze,onBlur:W=>{var de,ue;W.currentTarget.contains(W.relatedTarget)||(de=fa.current)!=null&&de.contains(W.relatedTarget)||(ia(!1),Qt(!1),(ue=Qa.current)==null||ue.blur(),Ae==null||Ae(W),Kn.current=!1)},title:jt,children:[ac,Ii,$.jsx(LE,{ref:xa(lt,Qa),value:ke,multiple:C,disabled:h,options:Ce,...tt,onChange:W=>{var Ge;if(Kn.current&&oa)return void Ft(W.target.value);const de=C?Array.from(W.target.selectedOptions).map(ut=>ut.value):W.target.value;let ue=[];if(C&&Array.isArray(de)){const ut=de.filter(Ut=>!Ha.current.includes(Ut)&&!wa.current.includes(Ut)),En=Ha.current.filter(Ut=>!de.includes(Ut)&&!wa.current.includes(Ut));ue=[...Ha.current,...ut];const ja=[...wa.current];En.forEach(Ut=>{const au=ue.findIndex(Rl=>Ut===Rl);au>-1&&ue.splice(au,1);const Dr=ja.findIndex(Rl=>Ut===Rl);Dr>-1&&ja.splice(Dr,1)}),Ha.current=ue,wa.current=ja}vn&&Fn(C?ue:de),(Ge=tt.onChange)==null||Ge.call(tt,W),Ea==null||Ea(C?ue:de)}}),$.jsx(dn,{}),$.jsxs(Ag,{tabIndex:-1,ref:Za,className:"selectValueWrapper",$dimension:N,$multiple:C,$minRowCount:D!=="none"?D:void 0,$maxRowCount:A!=="none"?A:void 0,$idleHeight:E,$opened:Ne,$isEmpty:Sn,children:[st&&Cr,(x&&Sn||!oa)&&$.jsx($E,{"data-id":tt.id,placeholder:Sn?x:"",tabIndex:-1,ref:sa,disabled:h,readOnly:v||oa,value:Je,defaultValue:re,$isMultiple:C,$dimension:N,onChange:W=>{C||ie(!1),(de=>{Fa.current.shouldExtendInputValue&&Ma&&(de.target.value=`${xn}${de.target.value}`,Fa.current.shouldExtendInputValue=!1)})(W),I===void 0&&bt(W.target.value),F==null||F(W)},onKeyDown:oe,onKeyUp:Xe,onKeyUpCapture:ve,onKeyDownCapture:et})]}),Ne&&!ze&&$.jsx(hd,{ref:fa,tabIndex:-1,targetElement:Mr,"data-dimension":N,alignSelf:Oe||pt,dropContainerCssMixin:ee,className:ae,style:J,...Bl,children:$.jsx(DE,{dimension:N==="xl"?"l":N,active:se,selected:ke,onActivateItem:W=>ge(W),onSelectItem:da,onDeselectItem:da,multiSelection:C,model:Tr,renderTopPanel:_||K,renderBottomPanel:L||Z,containerRef:fa,virtualScroll:He,preventFocusSteal:!0,preselectedModeActive:oa,preselected:ua,onPreselectItem:Ft,onMenuKeyDown:()=>{Kn.current=!0},...eu})}),$.jsxs(AE,{$multiple:C,$dimension:N,onClick:ny,onMouseDown:W=>W.preventDefault(),children:[r&&$.jsx(Ed,{dimension:N==="s"?"ms":"m"}),Y&&!v&&Ji&&$.jsx(Qf,{...Wn,...Lt(Wn)}),f,!v&&$.jsx(DS,{"data-disabled":!!h||void 0,"data-loading":!!r||void 0,...tu,...Pt(tu)})]})]})});Bg.displayName="Select";const Wf=y.forwardRef((a,r)=>{const u=y.useRef(null),{className:o,maxLength:s,displayInline:f,status:m,required:g,extraText:p,label:h,id:v=Gi(),disabled:x,displayCharacterCounter:S,characterCounterVisibilityThreshold:N,skeleton:E,...D}=a,A={className:o,extraText:p,status:m,required:g,label:h,id:v,displayInline:f,disabled:x,maxLength:s,inputRef:u,displayCharacterCounter:S,characterCounterVisibilityThreshold:N,skeleton:E,"data-field-id":v,"data-field-name":D.name};lg(D,A),fd(D,A);const T={ref:xa(r,u),id:v,"aria-required":g,status:m,disabled:x,maxLength:s,skeleton:E,...D};return $.jsx(xd,{...A,children:$.jsx(_g,{...T})})});Wf.displayName="InputField";const JE=Q(Bg)`
  [data-status='error'] & {
    border-color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }
`,xo=y.forwardRef((a,r)=>{const{className:u,displayInline:o,status:s,required:f,extraText:m,label:g,id:p=KE(),disabled:h,skeleton:v,...x}=a,S={className:u,extraText:m,status:s,required:f,label:g,id:p,displayInline:o,disabled:h,skeleton:v,"data-field-id":p,"data-field-name":x.name};lg(x,S),fd(x,S);const N={ref:r,id:p,"aria-required":f,status:s,disabled:h,skeleton:v,...x};return $.jsx(xd,{...S,children:$.jsx(JE,{...N})})});xo.displayName="SelectField";const IE=G`
  background: ${({$background:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;default:return a}}};
`,e_=G`
  background: ${({$background:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success10, ${r.color["Success/Success 10"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary10, ${r.color["Primary/Primary 10"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error10, ${r.color["Error/Error 10"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning10, ${r.color["Warning/Warning 10"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`;default:return a||`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,t_=G`
  border: 1px solid
    ${({$border:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success40, ${r.color["Success/Success 40"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary50, ${r.color["Primary/Primary 50"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error50, ${r.color["Error/Error 50"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning40, ${r.color["Warning/Warning 40"]})`;case"neutral":return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;default:return a||`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`}}};
`,a_=G`
  background: ${({$backgroundHover:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success20, ${r.color["Success/Success 20"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary20, ${r.color["Primary/Primary 20"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error20, ${r.color["Error/Error 20"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning20, ${r.color["Warning/Warning 20"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`;default:return a||`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`}}};
`,n_=Q.button`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({$dimension:a})=>`
    height: ${a==="s"?20:24}px;
    padding: ${a==="s"?1:3}px ${a==="s"?5:7}px;
  `}

  ${({$width:a})=>a&&`width: ${typeof a=="number"?`${a}px`:a};`}
  border-radius: var(--admiral-border-radius-Small, ${a=>Sr(a.theme.shape)});
  ${({$statusViaBackground:a,theme:r})=>a?e_:`background: var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]});`}
  ${({$statusViaBackground:a})=>a?t_:"border: 1px solid transparent;"}

  display: inline-flex;
  align-items: center;
  cursor: ${({$clickable:a})=>a?"pointer":"default"};

  &:hover,
  &:active {
    ${({$statusViaBackground:a,$clickable:r})=>r&&!a?"border: 1px solid transparent;":""}
    ${({$statusViaBackground:a,theme:r,$clickable:u})=>u?a?a_:`background: var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]});`:""}
  }

  &:focus-visible {
    outline: none;

    &:before {
      content: '';
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: var(--admiral-border-radius-Small, ${a=>Sr(a.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }
`,l_=Q.span`
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${$e["Caption/Caption 1"]}
`,r_=Q.div`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${IE}
`,i_=Q.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
`,u_=Q.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-left: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }

  &:hover {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
    }
  }
`,Eo=y.forwardRef(({children:a,kind:r="neutral",dimension:u="m",width:o,statusViaBackground:s=!1,isBorderHidden:f=!1,icon:m,statusIcon:g,onClick:p,...h},v)=>{const x=y.useRef(null),S=y.useRef(null),[N,E]=y.useState(!1),[D,A]=y.useState(!1),T=typeof r=="object"?r.background?r.background:"neutral":r,C=f?"transparent":typeof r=="object"?r.background&&r.border?r.border:"neutral":r,H=typeof r=="object"?r.backgroundHover?r.backgroundHover:r.background?r.background:"neutral":r;return y.useLayoutEffect(()=>{const Y=S.current;Y&&_l(Y)!==N&&E(_l(Y))},[D,E]),y.useLayoutEffect(()=>{function Y(){A(!0)}function k(){A(!1)}const F=x.current;if(F)return F.addEventListener("mouseenter",Y),F.addEventListener("mouseleave",k),F.addEventListener("focus",Y),F.addEventListener("blur",k),()=>{F.removeEventListener("mouseenter",Y),F.removeEventListener("mouseleave",k),F.removeEventListener("focus",Y),F.removeEventListener("blur",k)}},[A]),$.jsxs($.Fragment,{children:[$.jsxs(n_,{ref:xa(v,x),$width:o,onClick:p,$clickable:!!p,$statusViaBackground:s,$border:C,$background:T,$backgroundHover:H,$dimension:u,type:"button",...h,children:[T!=="neutral"&&!s&&$.jsx(r_,{$background:T}),s&&m&&$.jsx(i_,{children:m}),a&&$.jsx(l_,{ref:S,children:a}),g&&$.jsx(u_,{children:g})]}),D&&N&&$.jsx(Yi,{targetElement:x.current,renderContent:()=>a})]})});Eo.displayName="Tag";const o_="/t1-homework-1/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",c_="/t1-homework-1/assets/VTBGroupUI-Medium-CJW7SkqK.otf",s_="/t1-homework-1/assets/VTBGroupUI-Regular-JWIonCWQ.otf",f_=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${o_}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${c_}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${s_}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function d_(a){return $.jsx("style",{type:"text/css",children:f_,...a})}var Ti={},ry;function h_(){if(ry)return Ti;ry=1,Object.defineProperty(Ti,"__esModule",{value:!0}),Ti.parse=m,Ti.serialize=h;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,f=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function m(S,N){const E=new f,D=S.length;if(D<2)return E;const A=(N==null?void 0:N.decode)||v;let T=0;do{const C=S.indexOf("=",T);if(C===-1)break;const H=S.indexOf(";",T),Y=H===-1?D:H;if(C>Y){T=S.lastIndexOf(";",C-1)+1;continue}const k=g(S,T,C),F=p(S,C,k),I=S.slice(k,F);if(E[I]===void 0){let re=g(S,C+1,Y),ne=p(S,Y,re);const fe=A(S.slice(re,ne));E[I]=fe}T=Y+1}while(T<D);return E}function g(S,N,E){do{const D=S.charCodeAt(N);if(D!==32&&D!==9)return N}while(++N<E);return E}function p(S,N,E){for(;N>E;){const D=S.charCodeAt(--N);if(D!==32&&D!==9)return N+1}return E}function h(S,N,E){const D=(E==null?void 0:E.encode)||encodeURIComponent;if(!a.test(S))throw new TypeError(`argument name is invalid: ${S}`);const A=D(N);if(!r.test(A))throw new TypeError(`argument val is invalid: ${N}`);let T=S+"="+A;if(!E)return T;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);T+="; Max-Age="+E.maxAge}if(E.domain){if(!u.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);T+="; Domain="+E.domain}if(E.path){if(!o.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);T+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);T+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(T+="; HttpOnly"),E.secure&&(T+="; Secure"),E.partitioned&&(T+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return T}function v(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function x(S){return s.call(S)==="[object Date]"}return Ti}h_();var iy="popstate";function m_(a={}){function r(o,s){let{pathname:f,search:m,hash:g}=o.location;return Jf("",{pathname:f,search:m,hash:g},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function u(o,s){return typeof s=="string"?s:Ui(s)}return y_(r,u,null,a)}function vt(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Ga(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function p_(){return Math.random().toString(36).substring(2,10)}function uy(a,r){return{usr:a.state,key:a.key,idx:r}}function Jf(a,r,u=null,o){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Vi(r):r,state:u,key:r&&r.key||o||p_()}}function Ui({pathname:a="/",search:r="",hash:u=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Vi(a){let r={};if(a){let u=a.indexOf("#");u>=0&&(r.hash=a.substring(u),a=a.substring(0,u));let o=a.indexOf("?");o>=0&&(r.search=a.substring(o),a=a.substring(0,o)),a&&(r.pathname=a)}return r}function y_(a,r,u,o={}){let{window:s=document.defaultView,v5Compat:f=!1}=o,m=s.history,g="POP",p=null,h=v();h==null&&(h=0,m.replaceState({...m.state,idx:h},""));function v(){return(m.state||{idx:null}).idx}function x(){g="POP";let A=v(),T=A==null?null:A-h;h=A,p&&p({action:g,location:D.location,delta:T})}function S(A,T){g="PUSH";let C=Jf(D.location,A,T);h=v()+1;let H=uy(C,h),Y=D.createHref(C);try{m.pushState(H,"",Y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(Y)}f&&p&&p({action:g,location:D.location,delta:1})}function N(A,T){g="REPLACE";let C=Jf(D.location,A,T);h=v();let H=uy(C,h),Y=D.createHref(C);m.replaceState(H,"",Y),f&&p&&p({action:g,location:D.location,delta:0})}function E(A){return g_(A)}let D={get action(){return g},get location(){return a(s,m)},listen(A){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(iy,x),p=A,()=>{s.removeEventListener(iy,x),p=null}},createHref(A){return r(s,A)},createURL:E,encodeLocation(A){let T=E(A);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:S,replace:N,go(A){return m.go(A)}};return D}function g_(a,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),vt(u,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Ui(a);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function Rg(a,r,u="/"){return v_(a,r,u,!1)}function v_(a,r,u,o){let s=typeof r=="string"?Vi(r):r,f=yn(s.pathname||"/",u);if(f==null)return null;let m=zg(a);b_(m);let g=null;for(let p=0;g==null&&p<m.length;++p){let h=O_(f);g=M_(m[p],h,o)}return g}function zg(a,r=[],u=[],o=""){let s=(f,m,g)=>{let p={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};p.relativePath.startsWith("/")&&(vt(p.relativePath.startsWith(o),`Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(o.length));let h=mn([o,p.relativePath]),v=u.concat(p);f.children&&f.children.length>0&&(vt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),zg(f.children,r,v,h)),!(f.path==null&&!f.index)&&r.push({path:h,score:N_(h,f.index),routesMeta:v})};return a.forEach((f,m)=>{var g;if(f.path===""||!((g=f.path)!=null&&g.includes("?")))s(f,m);else for(let p of Hg(f.path))s(f,m,p)}),r}function Hg(a){let r=a.split("/");if(r.length===0)return[];let[u,...o]=r,s=u.endsWith("?"),f=u.replace(/\?$/,"");if(o.length===0)return s?[f,""]:[f];let m=Hg(o.join("/")),g=[];return g.push(...m.map(p=>p===""?f:[f,p].join("/"))),s&&g.push(...m),g.map(p=>a.startsWith("/")&&p===""?"/":p)}function b_(a){a.sort((r,u)=>r.score!==u.score?u.score-r.score:T_(r.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var S_=/^:[\w-]+$/,x_=3,E_=2,__=1,w_=10,$_=-2,oy=a=>a==="*";function N_(a,r){let u=a.split("/"),o=u.length;return u.some(oy)&&(o+=$_),r&&(o+=E_),u.filter(s=>!oy(s)).reduce((s,f)=>s+(S_.test(f)?x_:f===""?__:w_),o)}function T_(a,r){return a.length===r.length&&a.slice(0,-1).every((o,s)=>o===r[s])?a[a.length-1]-r[r.length-1]:0}function M_(a,r,u=!1){let{routesMeta:o}=a,s={},f="/",m=[];for(let g=0;g<o.length;++g){let p=o[g],h=g===o.length-1,v=f==="/"?r:r.slice(f.length)||"/",x=Ao({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},v),S=p.route;if(!x&&h&&u&&!o[o.length-1].route.index&&(x=Ao({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!x)return null;Object.assign(s,x.params),m.push({params:s,pathname:mn([f,x.pathname]),pathnameBase:R_(mn([f,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(f=mn([f,x.pathnameBase]))}return m}function Ao(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,o]=A_(a.path,a.caseSensitive,a.end),s=r.match(u);if(!s)return null;let f=s[0],m=f.replace(/(.)\/+$/,"$1"),g=s.slice(1);return{params:o.reduce((h,{paramName:v,isOptional:x},S)=>{if(v==="*"){let E=g[S]||"";m=f.slice(0,f.length-E.length).replace(/(.)\/+$/,"$1")}const N=g[S];return x&&!N?h[v]=void 0:h[v]=(N||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:m,pattern:a}}function A_(a,r=!1,u=!0){Ga(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,g,p)=>(o.push({paramName:g,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(o.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function O_(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ga(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function yn(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,o=a.charAt(u);return o&&o!=="/"?null:a.slice(u)||"/"}function C_(a,r="/"){let{pathname:u,search:o="",hash:s=""}=typeof a=="string"?Vi(a):a;return{pathname:u?u.startsWith("/")?u:D_(u,r):r,search:z_(o),hash:H_(s)}}function D_(a,r){let u=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?u.length>1&&u.pop():s!=="."&&u.push(s)}),u.length>1?u.join("/"):"/"}function yf(a,r,u,o){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function B_(a){return a.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function jg(a){let r=B_(a);return r.map((u,o)=>o===r.length-1?u.pathname:u.pathnameBase)}function Lg(a,r,u,o=!1){let s;typeof a=="string"?s=Vi(a):(s={...a},vt(!s.pathname||!s.pathname.includes("?"),yf("?","pathname","search",s)),vt(!s.pathname||!s.pathname.includes("#"),yf("#","pathname","hash",s)),vt(!s.search||!s.search.includes("#"),yf("#","search","hash",s)));let f=a===""||s.pathname==="",m=f?"/":s.pathname,g;if(m==null)g=u;else{let x=r.length-1;if(!o&&m.startsWith("..")){let S=m.split("/");for(;S[0]==="..";)S.shift(),x-=1;s.pathname=S.join("/")}g=x>=0?r[x]:"/"}let p=C_(s,g),h=m&&m!=="/"&&m.endsWith("/"),v=(f||m===".")&&u.endsWith("/");return!p.pathname.endsWith("/")&&(h||v)&&(p.pathname+="/"),p}var mn=a=>a.join("/").replace(/\/\/+/g,"/"),R_=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),z_=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,H_=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function j_(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Ug=["POST","PUT","PATCH","DELETE"];new Set(Ug);var L_=["GET",...Ug];new Set(L_);var Nr=y.createContext(null);Nr.displayName="DataRouter";var Vo=y.createContext(null);Vo.displayName="DataRouterState";var kg=y.createContext({isTransitioning:!1});kg.displayName="ViewTransition";var U_=y.createContext(new Map);U_.displayName="Fetchers";var k_=y.createContext(null);k_.displayName="Await";var Va=y.createContext(null);Va.displayName="Navigation";var Xo=y.createContext(null);Xo.displayName="Location";var Xa=y.createContext({outlet:null,matches:[],isDataRoute:!1});Xa.displayName="Route";var $d=y.createContext(null);$d.displayName="RouteError";function P_(a,{relative:r}={}){vt(Xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=y.useContext(Va),{hash:s,pathname:f,search:m}=Qi(a,{relative:r}),g=f;return u!=="/"&&(g=f==="/"?u:mn([u,f])),o.createHref({pathname:g,search:m,hash:s})}function Xi(){return y.useContext(Xo)!=null}function Tl(){return vt(Xi(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Xo).location}var Pg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qg(a){y.useContext(Va).static||y.useLayoutEffect(a)}function Qo(){let{isDataRoute:a}=y.useContext(Xa);return a?t6():q_()}function q_(){vt(Xi(),"useNavigate() may be used only in the context of a <Router> component.");let a=y.useContext(Nr),{basename:r,navigator:u}=y.useContext(Va),{matches:o}=y.useContext(Xa),{pathname:s}=Tl(),f=JSON.stringify(jg(o)),m=y.useRef(!1);return qg(()=>{m.current=!0}),y.useCallback((p,h={})=>{if(Ga(m.current,Pg),!m.current)return;if(typeof p=="number"){u.go(p);return}let v=Lg(p,JSON.parse(f),s,h.relative==="path");a==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:mn([r,v.pathname])),(h.replace?u.replace:u.push)(v,h.state,h)},[r,u,f,s,a])}y.createContext(null);function Y_(){let{matches:a}=y.useContext(Xa),r=a[a.length-1];return r?r.params:{}}function Qi(a,{relative:r}={}){let{matches:u}=y.useContext(Xa),{pathname:o}=Tl(),s=JSON.stringify(jg(u));return y.useMemo(()=>Lg(a,JSON.parse(s),o,r==="path"),[a,s,o,r])}function G_(a,r){return Yg(a)}function Yg(a,r,u,o){vt(Xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=y.useContext(Va),{matches:f}=y.useContext(Xa),m=f[f.length-1],g=m?m.params:{},p=m?m.pathname:"/",h=m?m.pathnameBase:"/",v=m&&m.route;{let T=v&&v.path||"";Gg(p,!v||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let x=Tl(),S;S=x;let N=S.pathname||"/",E=N;if(h!=="/"){let T=h.replace(/^\//,"").split("/");E="/"+N.replace(/^\//,"").split("/").slice(T.length).join("/")}let D=Rg(a,{pathname:E});return Ga(v||D!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ga(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),F_(D&&D.map(T=>Object.assign({},T,{params:Object.assign({},g,T.params),pathname:mn([h,s.encodeLocation?s.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?h:mn([h,s.encodeLocation?s.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),f,u,o)}function V_(){let a=e6(),r=j_(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",a),m=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:f},"ErrorBoundary")," or"," ",y.createElement("code",{style:f},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},r),u?y.createElement("pre",{style:s},u):null,m)}var X_=y.createElement(V_,null),Q_=class extends y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){console.error("React Router caught the following error during render",a,r)}render(){return this.state.error!==void 0?y.createElement(Xa.Provider,{value:this.props.routeContext},y.createElement($d.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Z_({routeContext:a,match:r,children:u}){let o=y.useContext(Nr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(Xa.Provider,{value:a},u)}function F_(a,r=[],u=null,o=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let s=a,f=u==null?void 0:u.errors;if(f!=null){let p=s.findIndex(h=>h.route.id&&(f==null?void 0:f[h.route.id])!==void 0);vt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let m=!1,g=-1;if(u)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=p),h.route.id){let{loaderData:v,errors:x}=u,S=h.route.loader&&!v.hasOwnProperty(h.route.id)&&(!x||x[h.route.id]===void 0);if(h.route.lazy||S){m=!0,g>=0?s=s.slice(0,g+1):s=[s[0]];break}}}return s.reduceRight((p,h,v)=>{let x,S=!1,N=null,E=null;u&&(x=f&&h.route.id?f[h.route.id]:void 0,N=h.route.errorElement||X_,m&&(g<0&&v===0?(Gg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):g===v&&(S=!0,E=h.route.hydrateFallbackElement||null)));let D=r.concat(s.slice(0,v+1)),A=()=>{let T;return x?T=N:S?T=E:h.route.Component?T=y.createElement(h.route.Component,null):h.route.element?T=h.route.element:T=p,y.createElement(Z_,{match:h,routeContext:{outlet:p,matches:D,isDataRoute:u!=null},children:T})};return u&&(h.route.ErrorBoundary||h.route.errorElement||v===0)?y.createElement(Q_,{location:u.location,revalidation:u.revalidation,component:N,error:x,children:A(),routeContext:{outlet:null,matches:D,isDataRoute:!0}}):A()},null)}function Nd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function K_(a){let r=y.useContext(Nr);return vt(r,Nd(a)),r}function W_(a){let r=y.useContext(Vo);return vt(r,Nd(a)),r}function J_(a){let r=y.useContext(Xa);return vt(r,Nd(a)),r}function Td(a){let r=J_(a),u=r.matches[r.matches.length-1];return vt(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function I_(){return Td("useRouteId")}function e6(){var o;let a=y.useContext($d),r=W_("useRouteError"),u=Td("useRouteError");return a!==void 0?a:(o=r.errors)==null?void 0:o[u]}function t6(){let{router:a}=K_("useNavigate"),r=Td("useNavigate"),u=y.useRef(!1);return qg(()=>{u.current=!0}),y.useCallback(async(s,f={})=>{Ga(u.current,Pg),u.current&&(typeof s=="number"?a.navigate(s):await a.navigate(s,{fromRouteId:r,...f}))},[a,r])}var cy={};function Gg(a,r,u){!r&&!cy[a]&&(cy[a]=!0,Ga(!1,u))}y.memo(a6);function a6({routes:a,future:r,state:u}){return Yg(a,void 0,u,r)}function n6({basename:a="/",children:r=null,location:u,navigationType:o="POP",navigator:s,static:f=!1}){vt(!Xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=a.replace(/^\/*/,"/"),g=y.useMemo(()=>({basename:m,navigator:s,static:f,future:{}}),[m,s,f]);typeof u=="string"&&(u=Vi(u));let{pathname:p="/",search:h="",hash:v="",state:x=null,key:S="default"}=u,N=y.useMemo(()=>{let E=yn(p,m);return E==null?null:{location:{pathname:E,search:h,hash:v,state:x,key:S},navigationType:o}},[m,p,h,v,x,S,o]);return Ga(N!=null,`<Router basename="${m}"> is not able to match the URL "${p}${h}${v}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:y.createElement(Va.Provider,{value:g},y.createElement(Xo.Provider,{children:r,value:N}))}var _o="get",wo="application/x-www-form-urlencoded";function Zo(a){return a!=null&&typeof a.tagName=="string"}function l6(a){return Zo(a)&&a.tagName.toLowerCase()==="button"}function r6(a){return Zo(a)&&a.tagName.toLowerCase()==="form"}function i6(a){return Zo(a)&&a.tagName.toLowerCase()==="input"}function u6(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function o6(a,r){return a.button===0&&(!r||r==="_self")&&!u6(a)}var ho=null;function c6(){if(ho===null)try{new FormData(document.createElement("form"),0),ho=!1}catch{ho=!0}return ho}var s6=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gf(a){return a!=null&&!s6.has(a)?(Ga(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wo}"`),null):a}function f6(a,r){let u,o,s,f,m;if(r6(a)){let g=a.getAttribute("action");o=g?yn(g,r):null,u=a.getAttribute("method")||_o,s=gf(a.getAttribute("enctype"))||wo,f=new FormData(a)}else if(l6(a)||i6(a)&&(a.type==="submit"||a.type==="image")){let g=a.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||g.getAttribute("action");if(o=p?yn(p,r):null,u=a.getAttribute("formmethod")||g.getAttribute("method")||_o,s=gf(a.getAttribute("formenctype"))||gf(g.getAttribute("enctype"))||wo,f=new FormData(g,a),!c6()){let{name:h,type:v,value:x}=a;if(v==="image"){let S=h?`${h}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else h&&f.append(h,x)}}else{if(Zo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=_o,o=null,s=wo,m=a}return f&&s==="text/plain"&&(m=f,f=void 0),{action:o,method:u.toLowerCase(),encType:s,formData:f,body:m}}function Md(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}async function d6(a,r){if(a.id in r)return r[a.id];try{let u=await import(a.module);return r[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function h6(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function m6(a,r,u){let o=await Promise.all(a.map(async s=>{let f=r.routes[s.route.id];if(f){let m=await d6(f,u);return m.links?m.links():[]}return[]}));return v6(o.flat(1).filter(h6).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function sy(a,r,u,o,s,f){let m=(p,h)=>u[h]?p.route.id!==u[h].route.id:!0,g=(p,h)=>{var v;return u[h].pathname!==p.pathname||((v=u[h].route.path)==null?void 0:v.endsWith("*"))&&u[h].params["*"]!==p.params["*"]};return f==="assets"?r.filter((p,h)=>m(p,h)||g(p,h)):f==="data"?r.filter((p,h)=>{var x;let v=o.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(m(p,h)||g(p,h))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((x=u[0])==null?void 0:x.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function p6(a,r,{includeHydrateFallback:u}={}){return y6(a.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let f=[s.module];return s.clientActionModule&&(f=f.concat(s.clientActionModule)),s.clientLoaderModule&&(f=f.concat(s.clientLoaderModule)),u&&s.hydrateFallbackModule&&(f=f.concat(s.hydrateFallbackModule)),s.imports&&(f=f.concat(s.imports)),f}).flat(1))}function y6(a){return[...new Set(a)]}function g6(a){let r={},u=Object.keys(a).sort();for(let o of u)r[o]=a[o];return r}function v6(a,r){let u=new Set;return new Set(r),a.reduce((o,s)=>{let f=JSON.stringify(g6(s));return u.has(f)||(u.add(f),o.push({key:f,link:s})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var b6=new Set([100,101,204,205]);function S6(a,r){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname="_root.data":r&&yn(u.pathname,r)==="/"?u.pathname=`${r.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Vg(){let a=y.useContext(Nr);return Md(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function x6(){let a=y.useContext(Vo);return Md(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Ad=y.createContext(void 0);Ad.displayName="FrameworkContext";function Xg(){let a=y.useContext(Ad);return Md(a,"You must render this element inside a <HydratedRouter> element"),a}function E6(a,r){let u=y.useContext(Ad),[o,s]=y.useState(!1),[f,m]=y.useState(!1),{onFocus:g,onBlur:p,onMouseEnter:h,onMouseLeave:v,onTouchStart:x}=r,S=y.useRef(null);y.useEffect(()=>{if(a==="render"&&m(!0),a==="viewport"){let D=T=>{T.forEach(C=>{m(C.isIntersecting)})},A=new IntersectionObserver(D,{threshold:.5});return S.current&&A.observe(S.current),()=>{A.disconnect()}}},[a]),y.useEffect(()=>{if(o){let D=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(D)}}},[o]);let N=()=>{s(!0)},E=()=>{s(!1),m(!1)};return u?a!=="intent"?[f,S,{}]:[f,S,{onFocus:Mi(g,N),onBlur:Mi(p,E),onMouseEnter:Mi(h,N),onMouseLeave:Mi(v,E),onTouchStart:Mi(x,N)}]:[!1,S,{}]}function Mi(a,r){return u=>{a&&a(u),u.defaultPrevented||r(u)}}function _6({page:a,...r}){let{router:u}=Vg(),o=y.useMemo(()=>Rg(u.routes,a,u.basename),[u.routes,a,u.basename]);return o?y.createElement($6,{page:a,matches:o,...r}):null}function w6(a){let{manifest:r,routeModules:u}=Xg(),[o,s]=y.useState([]);return y.useEffect(()=>{let f=!1;return m6(a,r,u).then(m=>{f||s(m)}),()=>{f=!0}},[a,r,u]),o}function $6({page:a,matches:r,...u}){let o=Tl(),{manifest:s,routeModules:f}=Xg(),{basename:m}=Vg(),{loaderData:g,matches:p}=x6(),h=y.useMemo(()=>sy(a,r,p,s,o,"data"),[a,r,p,s,o]),v=y.useMemo(()=>sy(a,r,p,s,o,"assets"),[a,r,p,s,o]),x=y.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let E=new Set,D=!1;if(r.forEach(T=>{var H;let C=s.routes[T.route.id];!C||!C.hasLoader||(!h.some(Y=>Y.route.id===T.route.id)&&T.route.id in g&&((H=f[T.route.id])!=null&&H.shouldRevalidate)||C.hasClientLoader?D=!0:E.add(T.route.id))}),E.size===0)return[];let A=S6(a,m);return D&&E.size>0&&A.searchParams.set("_routes",r.filter(T=>E.has(T.route.id)).map(T=>T.route.id).join(",")),[A.pathname+A.search]},[m,g,o,s,h,r,a,f]),S=y.useMemo(()=>p6(v,s),[v,s]),N=w6(v);return y.createElement(y.Fragment,null,x.map(E=>y.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...u})),S.map(E=>y.createElement("link",{key:E,rel:"modulepreload",href:E,...u})),N.map(({key:E,link:D})=>y.createElement("link",{key:E,...D})))}function N6(...a){return r=>{a.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Qg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qg&&(window.__reactRouterVersion="7.6.3")}catch{}function T6({basename:a,children:r,window:u}){let o=y.useRef();o.current==null&&(o.current=m_({window:u,v5Compat:!0}));let s=o.current,[f,m]=y.useState({action:s.action,location:s.location}),g=y.useCallback(p=>{y.startTransition(()=>m(p))},[m]);return y.useLayoutEffect(()=>s.listen(g),[s,g]),y.createElement(n6,{basename:a,children:r,location:f.location,navigationType:f.action,navigator:s})}var Zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fg=y.forwardRef(function({onClick:r,discover:u="render",prefetch:o="none",relative:s,reloadDocument:f,replace:m,state:g,target:p,to:h,preventScrollReset:v,viewTransition:x,...S},N){let{basename:E}=y.useContext(Va),D=typeof h=="string"&&Zg.test(h),A,T=!1;if(typeof h=="string"&&D&&(A=h,Qg))try{let ne=new URL(window.location.href),fe=h.startsWith("//")?new URL(ne.protocol+h):new URL(h),Ae=yn(fe.pathname,E);fe.origin===ne.origin&&Ae!=null?h=Ae+fe.search+fe.hash:T=!0}catch{Ga(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=P_(h,{relative:s}),[H,Y,k]=E6(o,S),F=C6(h,{replace:m,state:g,target:p,preventScrollReset:v,relative:s,viewTransition:x});function I(ne){r&&r(ne),ne.defaultPrevented||F(ne)}let re=y.createElement("a",{...S,...k,href:A||C,onClick:T||f?r:I,ref:N6(N,Y),target:p,"data-discover":!D&&u==="render"?"true":void 0});return H&&!D?y.createElement(y.Fragment,null,re,y.createElement(_6,{page:C})):re});Fg.displayName="Link";var M6=y.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:o="",end:s=!1,style:f,to:m,viewTransition:g,children:p,...h},v){let x=Qi(m,{relative:h.relative}),S=Tl(),N=y.useContext(Vo),{navigator:E,basename:D}=y.useContext(Va),A=N!=null&&H6(x)&&g===!0,T=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,C=S.pathname,H=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;u||(C=C.toLowerCase(),H=H?H.toLowerCase():null,T=T.toLowerCase()),H&&D&&(H=yn(H,D)||H);const Y=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let k=C===T||!s&&C.startsWith(T)&&C.charAt(Y)==="/",F=H!=null&&(H===T||!s&&H.startsWith(T)&&H.charAt(T.length)==="/"),I={isActive:k,isPending:F,isTransitioning:A},re=k?r:void 0,ne;typeof o=="function"?ne=o(I):ne=[o,k?"active":null,F?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let fe=typeof f=="function"?f(I):f;return y.createElement(Fg,{...h,"aria-current":re,className:ne,ref:v,style:fe,to:m,viewTransition:g},typeof p=="function"?p(I):p)});M6.displayName="NavLink";var A6=y.forwardRef(({discover:a="render",fetcherKey:r,navigate:u,reloadDocument:o,replace:s,state:f,method:m=_o,action:g,onSubmit:p,relative:h,preventScrollReset:v,viewTransition:x,...S},N)=>{let E=R6(),D=z6(g,{relative:h}),A=m.toLowerCase()==="get"?"get":"post",T=typeof g=="string"&&Zg.test(g),C=H=>{if(p&&p(H),H.defaultPrevented)return;H.preventDefault();let Y=H.nativeEvent.submitter,k=(Y==null?void 0:Y.getAttribute("formmethod"))||m;E(Y||H.currentTarget,{fetcherKey:r,method:k,navigate:u,replace:s,state:f,relative:h,preventScrollReset:v,viewTransition:x})};return y.createElement("form",{ref:N,method:A,action:D,onSubmit:o?p:C,...S,"data-discover":!T&&a==="render"?"true":void 0})});A6.displayName="Form";function O6(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kg(a){let r=y.useContext(Nr);return vt(r,O6(a)),r}function C6(a,{target:r,replace:u,state:o,preventScrollReset:s,relative:f,viewTransition:m}={}){let g=Qo(),p=Tl(),h=Qi(a,{relative:f});return y.useCallback(v=>{if(o6(v,r)){v.preventDefault();let x=u!==void 0?u:Ui(p)===Ui(h);g(a,{replace:x,state:o,preventScrollReset:s,relative:f,viewTransition:m})}},[p,g,h,u,o,r,a,s,f,m])}var D6=0,B6=()=>`__${String(++D6)}__`;function R6(){let{router:a}=Kg("useSubmit"),{basename:r}=y.useContext(Va),u=I_();return y.useCallback(async(o,s={})=>{let{action:f,method:m,encType:g,formData:p,body:h}=f6(o,r);if(s.navigate===!1){let v=s.fetcherKey||B6();await a.fetch(v,u,s.action||f,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||m,formEncType:s.encType||g,flushSync:s.flushSync})}else await a.navigate(s.action||f,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||m,formEncType:s.encType||g,replace:s.replace,state:s.state,fromRouteId:u,flushSync:s.flushSync,viewTransition:s.viewTransition})},[a,r,u])}function z6(a,{relative:r}={}){let{basename:u}=y.useContext(Va),o=y.useContext(Xa);vt(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),f={...Qi(a||".",{relative:r})},m=Tl();if(a==null){f.search=m.search;let g=new URLSearchParams(f.search),p=g.getAll("index");if(p.some(v=>v==="")){g.delete("index"),p.filter(x=>x).forEach(x=>g.append("index",x));let v=g.toString();f.search=v?`?${v}`:""}}return(!a||a===".")&&s.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:mn([u,f.pathname])),Ui(f)}function H6(a,r={}){let u=y.useContext(kg);vt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Kg("useViewTransitionState"),s=Qi(a,{relative:r.relative});if(!u.isTransitioning)return!1;let f=yn(u.currentLocation.pathname,o)||u.currentLocation.pathname,m=yn(u.nextLocation.pathname,o)||u.nextLocation.pathname;return Ao(s.pathname,m)!=null||Ao(s.pathname,f)!=null}[...b6];const j6="_taskList_ggrkd_1",L6="_grid_ggrkd_13",fy={taskList:j6,grid:L6},dy=["Bug","Feature","Documentation","Refactor","Test"],Oo=["To Do","In Progress","Done"],hy=["Low","Medium","High"],U6="_card_1dat1_1",k6="_title_1dat1_11",P6="_description_1dat1_15",q6="_tagGroup_1dat1_19",Y6="_createdAt_1dat1_26",G6="_controlBlock_1dat1_30",V6="_deleteButton_1dat1_37",ml={card:U6,title:k6,description:P6,tagGroup:q6,createdAt:Y6,controlBlock:G6,deleteButton:V6},X6=Q.div`
  ${({$variant:a})=>$e[a]}
`,Sl=({type:a="span",variant:r,className:u,children:o})=>$.jsx(X6,{as:a,$variant:r,className:u,children:o});var vf={exports:{}},bf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function Q6(){if(my)return bf;my=1;var a=Ho();function r(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var u=typeof Object.is=="function"?Object.is:r,o=a.useSyncExternalStore,s=a.useRef,f=a.useEffect,m=a.useMemo,g=a.useDebugValue;return bf.useSyncExternalStoreWithSelector=function(p,h,v,x,S){var N=s(null);if(N.current===null){var E={hasValue:!1,value:null};N.current=E}else E=N.current;N=m(function(){function A(k){if(!T){if(T=!0,C=k,k=x(k),S!==void 0&&E.hasValue){var F=E.value;if(S(F,k))return H=F}return H=k}if(F=H,u(C,k))return F;var I=x(k);return S!==void 0&&S(F,I)?(C=k,F):(C=k,H=I)}var T=!1,C,H,Y=v===void 0?null:v;return[function(){return A(h())},Y===null?void 0:function(){return A(Y())}]},[h,v,x,S]);var D=o(p,N[0],N[1]);return f(function(){E.hasValue=!0,E.value=D},[D]),g(D),D},bf}var py;function Z6(){return py||(py=1,vf.exports=Q6()),vf.exports}var F6=Z6();function K6(a){a()}function W6(){let a=null,r=null;return{clear(){a=null,r=null},notify(){K6(()=>{let u=a;for(;u;)u.callback(),u=u.next})},get(){const u=[];let o=a;for(;o;)u.push(o),o=o.next;return u},subscribe(u){let o=!0;const s=r={callback:u,next:null,prev:r};return s.prev?s.prev.next=s:a=s,function(){!o||a===null||(o=!1,s.next?s.next.prev=s.prev:r=s.prev,s.prev?s.prev.next=s.next:a=s.next)}}}}var yy={notify(){},get:()=>[]};function J6(a,r){let u,o=yy,s=0,f=!1;function m(D){v();const A=o.subscribe(D);let T=!1;return()=>{T||(T=!0,A(),x())}}function g(){o.notify()}function p(){E.onStateChange&&E.onStateChange()}function h(){return f}function v(){s++,u||(u=a.subscribe(p),o=W6())}function x(){s--,u&&s===0&&(u(),u=void 0,o.clear(),o=yy)}function S(){f||(f=!0,v())}function N(){f&&(f=!1,x())}const E={addNestedSub:m,notifyNestedSubs:g,handleChangeWrapper:p,isSubscribed:h,trySubscribe:S,tryUnsubscribe:N,getListeners:()=>o};return E}var I6=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e3=I6(),t3=()=>typeof navigator<"u"&&navigator.product==="ReactNative",a3=t3(),n3=()=>e3||a3?y.useLayoutEffect:y.useEffect,l3=n3(),Sf=Symbol.for("react-redux-context"),xf=typeof globalThis<"u"?globalThis:{};function r3(){if(!y.createContext)return{};const a=xf[Sf]??(xf[Sf]=new Map);let r=a.get(y.createContext);return r||(r=y.createContext(null),a.set(y.createContext,r)),r}var Zn=r3();function i3(a){const{children:r,context:u,serverState:o,store:s}=a,f=y.useMemo(()=>{const p=J6(s);return{store:s,subscription:p,getServerState:o?()=>o:void 0}},[s,o]),m=y.useMemo(()=>s.getState(),[s]);l3(()=>{const{subscription:p}=f;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),m!==s.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[f,m]);const g=u||Zn;return y.createElement(g.Provider,{value:f},r)}var u3=i3;function Od(a=Zn){return function(){return y.useContext(a)}}var Wg=Od();function Jg(a=Zn){const r=a===Zn?Wg:Od(a),u=()=>{const{store:o}=r();return o};return Object.assign(u,{withTypes:()=>u}),u}var o3=Jg();function c3(a=Zn){const r=a===Zn?o3:Jg(a),u=()=>r().dispatch;return Object.assign(u,{withTypes:()=>u}),u}var Ig=c3(),s3=(a,r)=>a===r;function f3(a=Zn){const r=a===Zn?Wg:Od(a),u=(o,s={})=>{const{equalityFn:f=s3}=typeof s=="function"?{equalityFn:s}:s,m=r(),{store:g,subscription:p,getServerState:h}=m;y.useRef(!0);const v=y.useCallback({[o.name](S){return o(S)}}[o.name],[o]),x=F6.useSyncExternalStoreWithSelector(p.addNestedSub,g.getState,h||g.getState,v,f);return y.useDebugValue(x),x};return Object.assign(u,{withTypes:()=>u}),u}var ev=f3();function Ot(a){return`Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}var d3=typeof Symbol=="function"&&Symbol.observable||"@@observable",gy=d3,Ef=()=>Math.random().toString(36).substring(7).split("").join("."),h3={INIT:`@@redux/INIT${Ef()}`,REPLACE:`@@redux/REPLACE${Ef()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ef()}`},Co=h3;function Cd(a){if(typeof a!="object"||a===null)return!1;let r=a;for(;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(a)===r||Object.getPrototypeOf(a)===null}function tv(a,r,u){if(typeof a!="function")throw new Error(Ot(2));if(typeof r=="function"&&typeof u=="function"||typeof u=="function"&&typeof arguments[3]=="function")throw new Error(Ot(0));if(typeof r=="function"&&typeof u>"u"&&(u=r,r=void 0),typeof u<"u"){if(typeof u!="function")throw new Error(Ot(1));return u(tv)(a,r)}let o=a,s=r,f=new Map,m=f,g=0,p=!1;function h(){m===f&&(m=new Map,f.forEach((A,T)=>{m.set(T,A)}))}function v(){if(p)throw new Error(Ot(3));return s}function x(A){if(typeof A!="function")throw new Error(Ot(4));if(p)throw new Error(Ot(5));let T=!0;h();const C=g++;return m.set(C,A),function(){if(T){if(p)throw new Error(Ot(6));T=!1,h(),m.delete(C),f=null}}}function S(A){if(!Cd(A))throw new Error(Ot(7));if(typeof A.type>"u")throw new Error(Ot(8));if(typeof A.type!="string")throw new Error(Ot(17));if(p)throw new Error(Ot(9));try{p=!0,s=o(s,A)}finally{p=!1}return(f=m).forEach(C=>{C()}),A}function N(A){if(typeof A!="function")throw new Error(Ot(10));o=A,S({type:Co.REPLACE})}function E(){const A=x;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(Ot(11));function C(){const Y=T;Y.next&&Y.next(v())}return C(),{unsubscribe:A(C)}},[gy](){return this}}}return S({type:Co.INIT}),{dispatch:S,subscribe:x,getState:v,replaceReducer:N,[gy]:E}}function m3(a){Object.keys(a).forEach(r=>{const u=a[r];if(typeof u(void 0,{type:Co.INIT})>"u")throw new Error(Ot(12));if(typeof u(void 0,{type:Co.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ot(13))})}function p3(a){const r=Object.keys(a),u={};for(let f=0;f<r.length;f++){const m=r[f];typeof a[m]=="function"&&(u[m]=a[m])}const o=Object.keys(u);let s;try{m3(u)}catch(f){s=f}return function(m={},g){if(s)throw s;let p=!1;const h={};for(let v=0;v<o.length;v++){const x=o[v],S=u[x],N=m[x],E=S(N,g);if(typeof E>"u")throw g&&g.type,new Error(Ot(14));h[x]=E,p=p||E!==N}return p=p||o.length!==Object.keys(m).length,p?h:m}}function Do(...a){return a.length===0?r=>r:a.length===1?a[0]:a.reduce((r,u)=>(...o)=>r(u(...o)))}function y3(...a){return r=>(u,o)=>{const s=r(u,o);let f=()=>{throw new Error(Ot(15))};const m={getState:s.getState,dispatch:(p,...h)=>f(p,...h)},g=a.map(p=>p(m));return f=Do(...g)(s.dispatch),{...s,dispatch:f}}}function g3(a){return Cd(a)&&"type"in a&&typeof a.type=="string"}var av=Symbol.for("immer-nothing"),vy=Symbol.for("immer-draftable"),la=Symbol.for("immer-state");function Da(a,...r){throw new Error(`[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`)}var _r=Object.getPrototypeOf;function wl(a){return!!a&&!!a[la]}function gn(a){var r;return a?nv(a)||Array.isArray(a)||!!a[vy]||!!((r=a.constructor)!=null&&r[vy])||Ko(a)||Wo(a):!1}var v3=Object.prototype.constructor.toString();function nv(a){if(!a||typeof a!="object")return!1;const r=_r(a);if(r===null)return!0;const u=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return u===Object?!0:typeof u=="function"&&Function.toString.call(u)===v3}function Bo(a,r){Fo(a)===0?Reflect.ownKeys(a).forEach(u=>{r(u,a[u],a)}):a.forEach((u,o)=>r(o,u,a))}function Fo(a){const r=a[la];return r?r.type_:Array.isArray(a)?1:Ko(a)?2:Wo(a)?3:0}function If(a,r){return Fo(a)===2?a.has(r):Object.prototype.hasOwnProperty.call(a,r)}function lv(a,r,u){const o=Fo(a);o===2?a.set(r,u):o===3?a.add(u):a[r]=u}function b3(a,r){return a===r?a!==0||1/a===1/r:a!==a&&r!==r}function Ko(a){return a instanceof Map}function Wo(a){return a instanceof Set}function pl(a){return a.copy_||a.base_}function ed(a,r){if(Ko(a))return new Map(a);if(Wo(a))return new Set(a);if(Array.isArray(a))return Array.prototype.slice.call(a);const u=nv(a);if(r===!0||r==="class_only"&&!u){const o=Object.getOwnPropertyDescriptors(a);delete o[la];let s=Reflect.ownKeys(o);for(let f=0;f<s.length;f++){const m=s[f],g=o[m];g.writable===!1&&(g.writable=!0,g.configurable=!0),(g.get||g.set)&&(o[m]={configurable:!0,writable:!0,enumerable:g.enumerable,value:a[m]})}return Object.create(_r(a),o)}else{const o=_r(a);if(o!==null&&u)return{...a};const s=Object.create(o);return Object.assign(s,a)}}function Dd(a,r=!1){return Jo(a)||wl(a)||!gn(a)||(Fo(a)>1&&(a.set=a.add=a.clear=a.delete=S3),Object.freeze(a),r&&Object.entries(a).forEach(([u,o])=>Dd(o,!0))),a}function S3(){Da(2)}function Jo(a){return Object.isFrozen(a)}var x3={};function $l(a){const r=x3[a];return r||Da(0,a),r}var ki;function rv(){return ki}function E3(a,r){return{drafts_:[],parent_:a,immer_:r,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function by(a,r){r&&($l("Patches"),a.patches_=[],a.inversePatches_=[],a.patchListener_=r)}function td(a){ad(a),a.drafts_.forEach(_3),a.drafts_=null}function ad(a){a===ki&&(ki=a.parent_)}function Sy(a){return ki=E3(ki,a)}function _3(a){const r=a[la];r.type_===0||r.type_===1?r.revoke_():r.revoked_=!0}function xy(a,r){r.unfinalizedDrafts_=r.drafts_.length;const u=r.drafts_[0];return a!==void 0&&a!==u?(u[la].modified_&&(td(r),Da(4)),gn(a)&&(a=Ro(r,a),r.parent_||zo(r,a)),r.patches_&&$l("Patches").generateReplacementPatches_(u[la].base_,a,r.patches_,r.inversePatches_)):a=Ro(r,u,[]),td(r),r.patches_&&r.patchListener_(r.patches_,r.inversePatches_),a!==av?a:void 0}function Ro(a,r,u){if(Jo(r))return r;const o=r[la];if(!o)return Bo(r,(s,f)=>Ey(a,o,r,s,f,u)),r;if(o.scope_!==a)return r;if(!o.modified_)return zo(a,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const s=o.copy_;let f=s,m=!1;o.type_===3&&(f=new Set(s),s.clear(),m=!0),Bo(f,(g,p)=>Ey(a,o,s,g,p,u,m)),zo(a,s,!1),u&&a.patches_&&$l("Patches").generatePatches_(o,u,a.patches_,a.inversePatches_)}return o.copy_}function Ey(a,r,u,o,s,f,m){if(wl(s)){const g=f&&r&&r.type_!==3&&!If(r.assigned_,o)?f.concat(o):void 0,p=Ro(a,s,g);if(lv(u,o,p),wl(p))a.canAutoFreeze_=!1;else return}else m&&u.add(s);if(gn(s)&&!Jo(s)){if(!a.immer_.autoFreeze_&&a.unfinalizedDrafts_<1)return;Ro(a,s),(!r||!r.scope_.parent_)&&typeof o!="symbol"&&Object.prototype.propertyIsEnumerable.call(u,o)&&zo(a,s)}}function zo(a,r,u=!1){!a.parent_&&a.immer_.autoFreeze_&&a.canAutoFreeze_&&Dd(r,u)}function w3(a,r){const u=Array.isArray(a),o={type_:u?1:0,scope_:r?r.scope_:rv(),modified_:!1,finalized_:!1,assigned_:{},parent_:r,base_:a,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=o,f=Bd;u&&(s=[o],f=Pi);const{revoke:m,proxy:g}=Proxy.revocable(s,f);return o.draft_=g,o.revoke_=m,g}var Bd={get(a,r){if(r===la)return a;const u=pl(a);if(!If(u,r))return $3(a,u,r);const o=u[r];return a.finalized_||!gn(o)?o:o===_f(a.base_,r)?(wf(a),a.copy_[r]=ld(o,a)):o},has(a,r){return r in pl(a)},ownKeys(a){return Reflect.ownKeys(pl(a))},set(a,r,u){const o=iv(pl(a),r);if(o!=null&&o.set)return o.set.call(a.draft_,u),!0;if(!a.modified_){const s=_f(pl(a),r),f=s==null?void 0:s[la];if(f&&f.base_===u)return a.copy_[r]=u,a.assigned_[r]=!1,!0;if(b3(u,s)&&(u!==void 0||If(a.base_,r)))return!0;wf(a),nd(a)}return a.copy_[r]===u&&(u!==void 0||r in a.copy_)||Number.isNaN(u)&&Number.isNaN(a.copy_[r])||(a.copy_[r]=u,a.assigned_[r]=!0),!0},deleteProperty(a,r){return _f(a.base_,r)!==void 0||r in a.base_?(a.assigned_[r]=!1,wf(a),nd(a)):delete a.assigned_[r],a.copy_&&delete a.copy_[r],!0},getOwnPropertyDescriptor(a,r){const u=pl(a),o=Reflect.getOwnPropertyDescriptor(u,r);return o&&{writable:!0,configurable:a.type_!==1||r!=="length",enumerable:o.enumerable,value:u[r]}},defineProperty(){Da(11)},getPrototypeOf(a){return _r(a.base_)},setPrototypeOf(){Da(12)}},Pi={};Bo(Bd,(a,r)=>{Pi[a]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}});Pi.deleteProperty=function(a,r){return Pi.set.call(this,a,r,void 0)};Pi.set=function(a,r,u){return Bd.set.call(this,a[0],r,u,a[0])};function _f(a,r){const u=a[la];return(u?pl(u):a)[r]}function $3(a,r,u){var s;const o=iv(r,u);return o?"value"in o?o.value:(s=o.get)==null?void 0:s.call(a.draft_):void 0}function iv(a,r){if(!(r in a))return;let u=_r(a);for(;u;){const o=Object.getOwnPropertyDescriptor(u,r);if(o)return o;u=_r(u)}}function nd(a){a.modified_||(a.modified_=!0,a.parent_&&nd(a.parent_))}function wf(a){a.copy_||(a.copy_=ed(a.base_,a.scope_.immer_.useStrictShallowCopy_))}var N3=class{constructor(a){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(r,u,o)=>{if(typeof r=="function"&&typeof u!="function"){const f=u;u=r;const m=this;return function(p=f,...h){return m.produce(p,v=>u.call(this,v,...h))}}typeof u!="function"&&Da(6),o!==void 0&&typeof o!="function"&&Da(7);let s;if(gn(r)){const f=Sy(this),m=ld(r,void 0);let g=!0;try{s=u(m),g=!1}finally{g?td(f):ad(f)}return by(f,o),xy(s,f)}else if(!r||typeof r!="object"){if(s=u(r),s===void 0&&(s=r),s===av&&(s=void 0),this.autoFreeze_&&Dd(s,!0),o){const f=[],m=[];$l("Patches").generateReplacementPatches_(r,s,f,m),o(f,m)}return s}else Da(1,r)},this.produceWithPatches=(r,u)=>{if(typeof r=="function")return(m,...g)=>this.produceWithPatches(m,p=>r(p,...g));let o,s;return[this.produce(r,u,(m,g)=>{o=m,s=g}),o,s]},typeof(a==null?void 0:a.autoFreeze)=="boolean"&&this.setAutoFreeze(a.autoFreeze),typeof(a==null?void 0:a.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(a.useStrictShallowCopy)}createDraft(a){gn(a)||Da(8),wl(a)&&(a=T3(a));const r=Sy(this),u=ld(a,void 0);return u[la].isManual_=!0,ad(r),u}finishDraft(a,r){const u=a&&a[la];(!u||!u.isManual_)&&Da(9);const{scope_:o}=u;return by(o,r),xy(void 0,o)}setAutoFreeze(a){this.autoFreeze_=a}setUseStrictShallowCopy(a){this.useStrictShallowCopy_=a}applyPatches(a,r){let u;for(u=r.length-1;u>=0;u--){const s=r[u];if(s.path.length===0&&s.op==="replace"){a=s.value;break}}u>-1&&(r=r.slice(u+1));const o=$l("Patches").applyPatches_;return wl(a)?o(a,r):this.produce(a,s=>o(s,r))}};function ld(a,r){const u=Ko(a)?$l("MapSet").proxyMap_(a,r):Wo(a)?$l("MapSet").proxySet_(a,r):w3(a,r);return(r?r.scope_:rv()).drafts_.push(u),u}function T3(a){return wl(a)||Da(10,a),uv(a)}function uv(a){if(!gn(a)||Jo(a))return a;const r=a[la];let u;if(r){if(!r.modified_)return r.base_;r.finalized_=!0,u=ed(a,r.scope_.immer_.useStrictShallowCopy_)}else u=ed(a,!0);return Bo(u,(o,s)=>{lv(u,o,uv(s))}),r&&(r.finalized_=!1),u}var ra=new N3,ov=ra.produce;ra.produceWithPatches.bind(ra);ra.setAutoFreeze.bind(ra);ra.setUseStrictShallowCopy.bind(ra);ra.applyPatches.bind(ra);ra.createDraft.bind(ra);ra.finishDraft.bind(ra);function cv(a){return({dispatch:u,getState:o})=>s=>f=>typeof f=="function"?f(u,o,a):s(f)}var M3=cv(),A3=cv,O3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Do:Do.apply(null,arguments)};function _y(a,r){function u(...o){if(r){let s=r(...o);if(!s)throw new Error(pn(0));return{type:a,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:a,payload:o[0]}}return u.toString=()=>`${a}`,u.type=a,u.match=o=>g3(o)&&o.type===a,u}var sv=class Di extends Array{constructor(...r){super(...r),Object.setPrototypeOf(this,Di.prototype)}static get[Symbol.species](){return Di}concat(...r){return super.concat.apply(this,r)}prepend(...r){return r.length===1&&Array.isArray(r[0])?new Di(...r[0].concat(this)):new Di(...r.concat(this))}};function wy(a){return gn(a)?ov(a,()=>{}):a}function mo(a,r,u){return a.has(r)?a.get(r):a.set(r,u(r)).get(r)}function C3(a){return typeof a=="boolean"}var D3=()=>function(r){const{thunk:u=!0,immutableCheck:o=!0,serializableCheck:s=!0,actionCreatorCheck:f=!0}=r??{};let m=new sv;return u&&(C3(u)?m.push(M3):m.push(A3(u.extraArgument))),m},B3="RTK_autoBatch",$y=a=>r=>{setTimeout(r,a)},R3=(a={type:"raf"})=>r=>(...u)=>{const o=r(...u);let s=!0,f=!1,m=!1;const g=new Set,p=a.type==="tick"?queueMicrotask:a.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:$y(10):a.type==="callback"?a.queueNotification:$y(a.timeout),h=()=>{m=!1,f&&(f=!1,g.forEach(v=>v()))};return Object.assign({},o,{subscribe(v){const x=()=>s&&v(),S=o.subscribe(x);return g.add(v),()=>{S(),g.delete(v)}},dispatch(v){var x;try{return s=!((x=v==null?void 0:v.meta)!=null&&x[B3]),f=!s,f&&(m||(m=!0,p(h))),o.dispatch(v)}finally{s=!0}}})},z3=a=>function(u){const{autoBatch:o=!0}=u??{};let s=new sv(a);return o&&s.push(R3(typeof o=="object"?o:void 0)),s};function H3(a){const r=D3(),{reducer:u=void 0,middleware:o,devTools:s=!0,preloadedState:f=void 0,enhancers:m=void 0}=a||{};let g;if(typeof u=="function")g=u;else if(Cd(u))g=p3(u);else throw new Error(pn(1));let p;typeof o=="function"?p=o(r):p=r();let h=Do;s&&(h=O3({trace:!1,...typeof s=="object"&&s}));const v=y3(...p),x=z3(v);let S=typeof m=="function"?m(x):x();const N=h(...S);return tv(g,f,N)}function fv(a){const r={},u=[];let o;const s={addCase(f,m){const g=typeof f=="string"?f:f.type;if(!g)throw new Error(pn(28));if(g in r)throw new Error(pn(29));return r[g]=m,s},addMatcher(f,m){return u.push({matcher:f,reducer:m}),s},addDefaultCase(f){return o=f,s}};return a(s),[r,u,o]}function j3(a){return typeof a=="function"}function L3(a,r){let[u,o,s]=fv(r),f;if(j3(a))f=()=>wy(a());else{const g=wy(a);f=()=>g}function m(g=f(),p){let h=[u[p.type],...o.filter(({matcher:v})=>v(p)).map(({reducer:v})=>v)];return h.filter(v=>!!v).length===0&&(h=[s]),h.reduce((v,x)=>{if(x)if(wl(v)){const N=x(v,p);return N===void 0?v:N}else{if(gn(v))return ov(v,S=>x(S,p));{const S=x(v,p);if(S===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return S}}return v},g)}return m.getInitialState=f,m}var U3=Symbol.for("rtk-slice-createasyncthunk");function k3(a,r){return`${a}/${r}`}function P3({creators:a}={}){var u;const r=(u=a==null?void 0:a.asyncThunk)==null?void 0:u[U3];return function(s){const{name:f,reducerPath:m=f}=s;if(!f)throw new Error(pn(11));const g=(typeof s.reducers=="function"?s.reducers(G3()):s.reducers)||{},p=Object.keys(g),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},v={addCase(Y,k){const F=typeof Y=="string"?Y:Y.type;if(!F)throw new Error(pn(12));if(F in h.sliceCaseReducersByType)throw new Error(pn(13));return h.sliceCaseReducersByType[F]=k,v},addMatcher(Y,k){return h.sliceMatchers.push({matcher:Y,reducer:k}),v},exposeAction(Y,k){return h.actionCreators[Y]=k,v},exposeCaseReducer(Y,k){return h.sliceCaseReducersByName[Y]=k,v}};p.forEach(Y=>{const k=g[Y],F={reducerName:Y,type:k3(f,Y),createNotation:typeof s.reducers=="function"};X3(k)?Z3(F,k,v,r):V3(F,k,v)});function x(){const[Y={},k=[],F=void 0]=typeof s.extraReducers=="function"?fv(s.extraReducers):[s.extraReducers],I={...Y,...h.sliceCaseReducersByType};return L3(s.initialState,re=>{for(let ne in I)re.addCase(ne,I[ne]);for(let ne of h.sliceMatchers)re.addMatcher(ne.matcher,ne.reducer);for(let ne of k)re.addMatcher(ne.matcher,ne.reducer);F&&re.addDefaultCase(F)})}const S=Y=>Y,N=new Map,E=new WeakMap;let D;function A(Y,k){return D||(D=x()),D(Y,k)}function T(){return D||(D=x()),D.getInitialState()}function C(Y,k=!1){function F(re){let ne=re[Y];return typeof ne>"u"&&k&&(ne=mo(E,F,T)),ne}function I(re=S){const ne=mo(N,k,()=>new WeakMap);return mo(ne,re,()=>{const fe={};for(const[Ae,Be]of Object.entries(s.selectors??{}))fe[Ae]=q3(Be,re,()=>mo(E,re,T),k);return fe})}return{reducerPath:Y,getSelectors:I,get selectors(){return I(F)},selectSlice:F}}const H={name:f,reducer:A,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:T,...C(m),injectInto(Y,{reducerPath:k,...F}={}){const I=k??m;return Y.inject({reducerPath:I,reducer:A},F),{...H,...C(I,!0)}}};return H}}function q3(a,r,u,o){function s(f,...m){let g=r(f);return typeof g>"u"&&o&&(g=u()),a(g,...m)}return s.unwrapped=a,s}var Y3=P3();function G3(){function a(r,u){return{_reducerDefinitionType:"asyncThunk",payloadCreator:r,...u}}return a.withTypes=()=>a,{reducer(r){return Object.assign({[r.name](...u){return r(...u)}}[r.name],{_reducerDefinitionType:"reducer"})},preparedReducer(r,u){return{_reducerDefinitionType:"reducerWithPrepare",prepare:r,reducer:u}},asyncThunk:a}}function V3({type:a,reducerName:r,createNotation:u},o,s){let f,m;if("reducer"in o){if(u&&!Q3(o))throw new Error(pn(17));f=o.reducer,m=o.prepare}else f=o;s.addCase(a,f).exposeCaseReducer(r,f).exposeAction(r,m?_y(a,m):_y(a))}function X3(a){return a._reducerDefinitionType==="asyncThunk"}function Q3(a){return a._reducerDefinitionType==="reducerWithPrepare"}function Z3({type:a,reducerName:r},u,o,s){if(!s)throw new Error(pn(18));const{payloadCreator:f,fulfilled:m,pending:g,rejected:p,settled:h,options:v}=u,x=s(a,f,v);o.exposeAction(r,x),m&&o.addCase(x.fulfilled,m),g&&o.addCase(x.pending,g),p&&o.addCase(x.rejected,p),h&&o.addMatcher(x.settled,h),o.exposeCaseReducer(r,{fulfilled:m||po,pending:g||po,rejected:p||po,settled:h||po})}function po(){}function pn(a){return`Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}const At=[];for(let a=0;a<256;++a)At.push((a+256).toString(16).slice(1));function F3(a,r=0){return(At[a[r+0]]+At[a[r+1]]+At[a[r+2]]+At[a[r+3]]+"-"+At[a[r+4]]+At[a[r+5]]+"-"+At[a[r+6]]+At[a[r+7]]+"-"+At[a[r+8]]+At[a[r+9]]+"-"+At[a[r+10]]+At[a[r+11]]+At[a[r+12]]+At[a[r+13]]+At[a[r+14]]+At[a[r+15]]).toLowerCase()}let $f;const K3=new Uint8Array(16);function W3(){if(!$f){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");$f=crypto.getRandomValues.bind(crypto)}return $f(K3)}const J3=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ny={randomUUID:J3};function I3(a,r,u){var s;if(Ny.randomUUID&&!a)return Ny.randomUUID();a=a||{};const o=a.random??((s=a.rng)==null?void 0:s.call(a))??W3();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,F3(o)}const ew=[{id:"1",title:"Исправить баг с логином",description:"Проблема с повторным входом",category:"Bug",status:"In Progress",priority:"High",createdAt:new Date("2025-07-12T14:25:00")},{id:"2",title:"Добавить возможность восстановления пароля",description:"Пользователи должны иметь возможность восстанавливать пароль через email",category:"Feature",status:"To Do",priority:"Medium",createdAt:new Date("2025-07-04T09:42:00")},{id:"3",title:"Обновить документацию по API",description:"Добавить описание новых эндпоинтов",category:"Documentation",status:"Done",priority:"Low",createdAt:new Date("2025-07-08T11:10:00")},{id:"4",title:"Рефакторинг компонента профиля",description:"Упростить логику и улучшить читаемость кода",category:"Refactor",status:"In Progress",priority:"Medium",createdAt:new Date("2025-07-01T16:35:00")},{id:"5",title:"Написать тесты для формы регистрации",description:"Покрыть юнит-тестами все основные сценарии",category:"Test",status:"To Do",priority:"High",createdAt:new Date("2025-07-10T08:15:00")},{id:"6",title:"Исправить отображение кнопок на мобильных устройствах",category:"Bug",status:"To Do",priority:"Medium",createdAt:new Date("2025-07-03T12:20:00")},{id:"7",title:"Добавить темную тему",description:"Реализовать переключение светлой и темной темы",category:"Feature",status:"In Progress",priority:"High",createdAt:new Date("2025-07-14T17:55:00")},{id:"8",title:"Обновить зависимости проекта",description:"Обновить библиотеки до последних стабильных версий",category:"Refactor",status:"Done",priority:"Low",createdAt:new Date("2025-07-06T10:05:00")}],Ty=()=>{const a=localStorage.getItem("tasks");return a?JSON.parse(a):[]},Nf=a=>{localStorage.setItem("tasks",JSON.stringify(a))},tw={tasks:Ty().length>0?Ty():ew},dv=Y3({name:"task",initialState:tw,reducers:{updateTaskById(a,r){const{id:u,updatedTask:o}=r.payload,s=a.tasks.findIndex(f=>f.id===u);s!==-1&&(a.tasks[s]={...a.tasks[s],...o},Nf(a.tasks))},deleteTaskById(a,r){a.tasks=a.tasks.filter(u=>u.id!==r.payload),Nf(a.tasks)},createTask(a,r){const u={id:I3(),createdAt:new Date,...r.payload};a.tasks.push(u),Nf(a.tasks)}}}),{updateTaskById:aw,deleteTaskById:nw,createTask:lw}=dv.actions,rw=dv.reducer,iw=({name:a,size:r={width:24,height:24},className:u=""})=>$.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:r.width,height:r.height},className:u,children:$.jsx("use",{xlinkHref:`/assets/images/vector/sprites.svg#${a}`})});function uw(a){const r=typeof a=="string"?new Date(a):a,u=r.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),o=r.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});return`${u} в ${o}`}const ow=({task:a})=>{const r=Ig(),u=Qo(),o=()=>{u(`task/${a.id}`)},s=()=>{r(nw(a.id))};return $.jsx("div",{className:ml.card,children:$.jsxs("div",{children:[$.jsx(Sl,{type:"p",variant:"Main/S",className:ml.title,children:a.title}),a.description&&$.jsx(Sl,{type:"p",variant:"Additional/XS",className:ml.description,children:a.description}),$.jsxs("div",{className:ml.tagGroup,children:[$.jsxs(Eo,{dimension:"s",kind:"neutral",children:["Категория: ",a.category]}),$.jsxs(Eo,{dimension:"s",kind:"neutral",children:["Статус: ",a.status]}),$.jsxs(Eo,{dimension:"s",kind:"neutral",children:["Приоритет: ",a.priority]})]}),$.jsx(Sl,{type:"p",variant:"Caption/XS",className:ml.createdAt,children:uw(a.createdAt)}),$.jsxs("div",{className:ml.controlBlock,children:[$.jsx(mr,{dimension:"s",appearance:"tertiary",onClick:o,children:"Редактировать"}),$.jsx("button",{className:ml.deleteButton,onClick:s,children:$.jsx(iw,{name:"delete"})})]})]})})},cw="_title_1fykk_1",sw="_taskList_1fykk_6",Tf={title:cw,taskList:sw},fw=({title:a,tasks:r})=>$.jsxs("div",{className:Tf.statusColumn,children:[$.jsx(Sl,{type:"h2",variant:"Header/H2",className:Tf.title,children:a}),$.jsx(Go,{}),$.jsx("ul",{className:Tf.taskList,children:r.map(u=>$.jsx("li",{children:$.jsx(ow,{task:u})},u.id))})]}),dw=()=>{const a=ev(s=>s.task.tasks),r=Qo(),u=()=>{r("/task/new")},o=Oo.reduce((s,f)=>(s[f]=a.filter(m=>m.status===f),s),{});return $.jsxs("div",{className:fy.taskList,children:[$.jsx(mr,{dimension:"s",appearance:"secondary",onClick:u,children:"Создать задачу"}),$.jsx("div",{className:fy.grid,children:Oo.map(s=>$.jsx(fw,{title:s,tasks:o[s]},s))})]})},hw="_indexPage_1vdx4_1",mw="_title_1vdx4_5",My={indexPage:hw,title:mw},pw=()=>$.jsxs("div",{className:My.indexPage,children:[$.jsx(Sl,{type:"h1",variant:"Header/H1",className:My.title,children:"Трекер задач"}),$.jsx(Go,{}),$.jsx(dw,{})]}),yw="_notFound_4yfzi_1",gw="_form_4yfzi_7",vw="_caption_4yfzi_12",bw="_fields_4yfzi_16",Sw="_buttons_4yfzi_23",Ai={notFound:yw,form:gw,caption:vw,fields:bw,buttons:Sw},Ay=({id:a})=>{const u=ev(h=>h.task.tasks).find(h=>h.id===a),o=Ig(),s=Qo(),[f,m]=y.useState({title:"",description:"",category:dy[0],status:Oo[0],priority:hy[0]});if(y.useEffect(()=>{a&&u&&m({title:u.title,description:u.description,status:u.status,category:u.category,priority:u.priority})},[a,u]),a&&!u)return $.jsxs("div",{className:Ai.notFound,children:[$.jsx(Sl,{type:"h1",variant:"Header/H1",children:"Задача не найдена"}),$.jsx(mr,{type:"button",dimension:"s",appearance:"tertiary",onClick:()=>s("/"),children:"Назад"})]});const g=(h,v)=>{m(x=>({...x,[h]:v}))},p=()=>{f.title.length>0&&(o(a?aw({id:a,updatedTask:f}):lw(f)),s("/"))};return $.jsxs("form",{className:Ai.form,onSubmit:h=>{h.preventDefault(),p()},children:[$.jsx(Sl,{type:"h1",variant:"Header/H1",className:Ai.caption,children:a?"Редактировать задачу":"Создать задачу"}),$.jsx(Go,{}),$.jsxs("div",{className:Ai.fields,children:[$.jsx(Wf,{value:f.title,onChange:h=>g("title",h.target.value),placeholder:"Введите заголовок",label:"Заголовок",status:f.title.length>0?void 0:"error",required:!0}),$.jsx(Wf,{value:f.description,onChange:h=>g("description",h.target.value),placeholder:"Введите описание",label:"Описание"}),$.jsx(xo,{"data-container-id":"selectFieldCategory",mode:"searchSelect",label:"Категория",value:f.category,onChange:h=>g("category",h.target.value),required:!0,children:dy.map(h=>$.jsx(pf,{value:h,children:h},h))}),$.jsx(xo,{"data-container-id":"selectFieldStatus",mode:"searchSelect",label:"Статус",value:f.status,onChange:h=>g("status",h.target.value),required:!0,children:Oo.map(h=>$.jsx(pf,{value:h,children:h},h))}),$.jsx(xo,{"data-container-id":"selectFieldPriotity",mode:"searchSelect",label:"Приоритет",value:f.priority,onChange:h=>g("priority",h.target.value),required:!0,children:hy.map(h=>$.jsx(pf,{value:h,children:h},h))})]}),$.jsxs("div",{className:Ai.buttons,children:[$.jsx(mr,{type:"submit",dimension:"s",appearance:"primary",children:"Сохранить"}),$.jsx(mr,{type:"button",dimension:"s",appearance:"secondary",onClick:()=>s("/"),children:"Отменить"})]})]})},xw="_taskPage_1n59p_1",Ew={taskPage:xw},_w=()=>{const{id:a}=Y_();return $.jsx("div",{className:Ew.taskPage,children:a!=="new"?$.jsx(Ay,{id:a}):$.jsx(Ay,{})})},ww=[{path:"/",element:$.jsx(pw,{})},{path:"/task/:id",element:$.jsx(_w,{})}],$w=()=>G_(ww),Nw=H3({reducer:{task:rw}});function Tw(){return $.jsx(u3,{store:Nw,children:$.jsx(T6,{basename:"/t1-homework-1",children:$.jsx($w,{})})})}wb.createRoot(document.getElementById("root")).render($.jsx(y.StrictMode,{children:$.jsx(_S,{theme:sd,children:$.jsxs(jS,{children:[$.jsx(d_,{}),$.jsx(Tw,{})]})})}));
