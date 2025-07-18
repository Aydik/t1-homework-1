(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function u(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=u(s);fetch(s.href,d)}})();function n1(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Us={exports:{}},yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function r1(){if(E0)return yi;E0=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function u(c,s,d){var v=null;if(d!==void 0&&(v=""+d),s.key!==void 0&&(v=""+s.key),"key"in s){d={};for(var b in s)b!=="key"&&(d[b]=s[b])}else d=s;return s=d.ref,{$$typeof:a,type:c,key:v,ref:s!==void 0?s:null,props:d}}return yi.Fragment=r,yi.jsx=u,yi.jsxs=u,yi}var $0;function i1(){return $0||($0=1,Us.exports=r1()),Us.exports}var $=i1(),ks={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function u1(){if(_0)return be;_0=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),v=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,B={};function O(E,j,Z){this.props=E,this.context=j,this.refs=B,this.updater=Z||w}O.prototype.isReactComponent={},O.prototype.setState=function(E,j){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,j,"setState")},O.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function M(){}M.prototype=O.prototype;function z(E,j,Z){this.props=E,this.context=j,this.refs=B,this.updater=Z||w}var L=z.prototype=new M;L.constructor=z,_(L,O.prototype),L.isPureReactComponent=!0;var J=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},te=Object.prototype.hasOwnProperty;function ae(E,j,Z,X,I,fe){return Z=fe.ref,{$$typeof:a,type:E,key:j,ref:Z!==void 0?Z:null,props:fe}}function de(E,j){return ae(E.type,j,void 0,void 0,void 0,E.props)}function ne(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function he(E){var j={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return j[Z]})}var Be=/\/+/g;function Ue(E,j){return typeof E=="object"&&E!==null&&E.key!=null?he(""+E.key):j.toString(36)}function Ae(){}function pt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Ae,Ae):(E.status="pending",E.then(function(j){E.status==="pending"&&(E.status="fulfilled",E.value=j)},function(j){E.status==="pending"&&(E.status="rejected",E.reason=j)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function ze(E,j,Z,X,I){var fe=typeof E;(fe==="undefined"||fe==="boolean")&&(E=null);var ue=!1;if(E===null)ue=!0;else switch(fe){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(E.$$typeof){case a:case r:ue=!0;break;case y:return ue=E._init,ze(ue(E._payload),j,Z,X,I)}}if(ue)return I=I(E),ue=X===""?"."+Ue(E,0):X,J(I)?(Z="",ue!=null&&(Z=ue.replace(Be,"$&/")+"/"),ze(I,j,Z,"",function(et){return et})):I!=null&&(ne(I)&&(I=de(I,Z+(I.key==null||E&&E.key===I.key?"":(""+I.key).replace(Be,"$&/")+"/")+ue)),j.push(I)),1;ue=0;var Xe=X===""?".":X+":";if(J(E))for(var ye=0;ye<E.length;ye++)X=E[ye],fe=Xe+Ue(X,ye),ue+=ze(X,j,Z,fe,I);else if(ye=S(E),typeof ye=="function")for(E=ye.call(E),ye=0;!(X=E.next()).done;)X=X.value,fe=Xe+Ue(X,ye++),ue+=ze(X,j,Z,fe,I);else if(fe==="object"){if(typeof E.then=="function")return ze(pt(E),j,Z,X,I);throw j=String(E),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ue}function U(E,j,Z){if(E==null)return E;var X=[],I=0;return ze(E,X,"","",function(fe){return j.call(Z,fe,I++)}),X}function W(E){if(E._status===-1){var j=E._result;j=j(),j.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=j)}if(E._status===1)return E._result.default;throw E._result}var ee=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function K(){}return be.Children={map:U,forEach:function(E,j,Z){U(E,function(){j.apply(this,arguments)},Z)},count:function(E){var j=0;return U(E,function(){j++}),j},toArray:function(E){return U(E,function(j){return j})||[]},only:function(E){if(!ne(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},be.Component=O,be.Fragment=u,be.Profiler=s,be.PureComponent=z,be.StrictMode=c,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,be.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Q.H.useMemoCache(E)}},be.cache=function(E){return function(){return E.apply(null,arguments)}},be.cloneElement=function(E,j,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var X=_({},E.props),I=E.key,fe=void 0;if(j!=null)for(ue in j.ref!==void 0&&(fe=void 0),j.key!==void 0&&(I=""+j.key),j)!te.call(j,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&j.ref===void 0||(X[ue]=j[ue]);var ue=arguments.length-2;if(ue===1)X.children=Z;else if(1<ue){for(var Xe=Array(ue),ye=0;ye<ue;ye++)Xe[ye]=arguments[ye+2];X.children=Xe}return ae(E.type,I,void 0,void 0,fe,X)},be.createContext=function(E){return E={$$typeof:v,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},be.createElement=function(E,j,Z){var X,I={},fe=null;if(j!=null)for(X in j.key!==void 0&&(fe=""+j.key),j)te.call(j,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(I[X]=j[X]);var ue=arguments.length-2;if(ue===1)I.children=Z;else if(1<ue){for(var Xe=Array(ue),ye=0;ye<ue;ye++)Xe[ye]=arguments[ye+2];I.children=Xe}if(E&&E.defaultProps)for(X in ue=E.defaultProps,ue)I[X]===void 0&&(I[X]=ue[X]);return ae(E,fe,void 0,void 0,null,I)},be.createRef=function(){return{current:null}},be.forwardRef=function(E){return{$$typeof:b,render:E}},be.isValidElement=ne,be.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:W}},be.memo=function(E,j){return{$$typeof:m,type:E,compare:j===void 0?null:j}},be.startTransition=function(E){var j=Q.T,Z={};Q.T=Z;try{var X=E(),I=Q.S;I!==null&&I(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(K,ee)}catch(fe){ee(fe)}finally{Q.T=j}},be.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},be.use=function(E){return Q.H.use(E)},be.useActionState=function(E,j,Z){return Q.H.useActionState(E,j,Z)},be.useCallback=function(E,j){return Q.H.useCallback(E,j)},be.useContext=function(E){return Q.H.useContext(E)},be.useDebugValue=function(){},be.useDeferredValue=function(E,j){return Q.H.useDeferredValue(E,j)},be.useEffect=function(E,j,Z){var X=Q.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(E,j)},be.useId=function(){return Q.H.useId()},be.useImperativeHandle=function(E,j,Z){return Q.H.useImperativeHandle(E,j,Z)},be.useInsertionEffect=function(E,j){return Q.H.useInsertionEffect(E,j)},be.useLayoutEffect=function(E,j){return Q.H.useLayoutEffect(E,j)},be.useMemo=function(E,j){return Q.H.useMemo(E,j)},be.useOptimistic=function(E,j){return Q.H.useOptimistic(E,j)},be.useReducer=function(E,j,Z){return Q.H.useReducer(E,j,Z)},be.useRef=function(E){return Q.H.useRef(E)},be.useState=function(E){return Q.H.useState(E)},be.useSyncExternalStore=function(E,j,Z){return Q.H.useSyncExternalStore(E,j,Z)},be.useTransition=function(){return Q.H.useTransition()},be.version="19.1.0",be}var N0;function wf(){return N0||(N0=1,ks.exports=u1()),ks.exports}var h=wf();const pn=n1(h);var qs={exports:{}},bi={},Ys={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function o1(){return w0||(w0=1,function(a){function r(U,W){var ee=U.length;U.push(W);e:for(;0<ee;){var K=ee-1>>>1,E=U[K];if(0<s(E,W))U[K]=W,U[ee]=E,ee=K;else break e}}function u(U){return U.length===0?null:U[0]}function c(U){if(U.length===0)return null;var W=U[0],ee=U.pop();if(ee!==W){U[0]=ee;e:for(var K=0,E=U.length,j=E>>>1;K<j;){var Z=2*(K+1)-1,X=U[Z],I=Z+1,fe=U[I];if(0>s(X,ee))I<E&&0>s(fe,X)?(U[K]=fe,U[I]=ee,K=I):(U[K]=X,U[Z]=ee,K=Z);else if(I<E&&0>s(fe,ee))U[K]=fe,U[I]=ee,K=I;else break e}}return W}function s(U,W){var ee=U.sortIndex-W.sortIndex;return ee!==0?ee:U.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var v=Date,b=v.now();a.unstable_now=function(){return v.now()-b}}var p=[],m=[],y=1,x=null,S=3,w=!1,_=!1,B=!1,O=!1,M=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function J(U){for(var W=u(m);W!==null;){if(W.callback===null)c(m);else if(W.startTime<=U)c(m),W.sortIndex=W.expirationTime,r(p,W);else break;W=u(m)}}function Q(U){if(B=!1,J(U),!_)if(u(p)!==null)_=!0,te||(te=!0,Ue());else{var W=u(m);W!==null&&ze(Q,W.startTime-U)}}var te=!1,ae=-1,de=5,ne=-1;function he(){return O?!0:!(a.unstable_now()-ne<de)}function Be(){if(O=!1,te){var U=a.unstable_now();ne=U;var W=!0;try{e:{_=!1,B&&(B=!1,z(ae),ae=-1),w=!0;var ee=S;try{t:{for(J(U),x=u(p);x!==null&&!(x.expirationTime>U&&he());){var K=x.callback;if(typeof K=="function"){x.callback=null,S=x.priorityLevel;var E=K(x.expirationTime<=U);if(U=a.unstable_now(),typeof E=="function"){x.callback=E,J(U),W=!0;break t}x===u(p)&&c(p),J(U)}else c(p);x=u(p)}if(x!==null)W=!0;else{var j=u(m);j!==null&&ze(Q,j.startTime-U),W=!1}}break e}finally{x=null,S=ee,w=!1}W=void 0}}finally{W?Ue():te=!1}}}var Ue;if(typeof L=="function")Ue=function(){L(Be)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,pt=Ae.port2;Ae.port1.onmessage=Be,Ue=function(){pt.postMessage(null)}}else Ue=function(){M(Be,0)};function ze(U,W){ae=M(function(){U(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(U){U.callback=null},a.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<U?Math.floor(1e3/U):5},a.unstable_getCurrentPriorityLevel=function(){return S},a.unstable_next=function(U){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var ee=S;S=W;try{return U()}finally{S=ee}},a.unstable_requestPaint=function(){O=!0},a.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=S;S=U;try{return W()}finally{S=ee}},a.unstable_scheduleCallback=function(U,W,ee){var K=a.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?K+ee:K):ee=K,U){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=ee+E,U={id:y++,callback:W,priorityLevel:U,startTime:ee,expirationTime:E,sortIndex:-1},ee>K?(U.sortIndex=ee,r(m,U),u(p)===null&&U===u(m)&&(B?(z(ae),ae=-1):B=!0,ze(Q,ee-K))):(U.sortIndex=E,r(p,U),_||w||(_=!0,te||(te=!0,Ue()))),U},a.unstable_shouldYield=he,a.unstable_wrapCallback=function(U){var W=S;return function(){var ee=S;S=W;try{return U.apply(this,arguments)}finally{S=ee}}}}(Ps)),Ps}var T0;function c1(){return T0||(T0=1,Ys.exports=o1()),Ys.exports}var Gs={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function s1(){if(M0)return zt;M0=1;var a=wf();function r(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(r(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(p,m,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:x==null?null:""+x,children:p,containerInfo:m,implementation:y}}var v=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,zt.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return d(p,m,null,y)},zt.flushSync=function(p){var m=v.T,y=c.p;try{if(v.T=null,c.p=2,p)return p()}finally{v.T=m,c.p=y,c.d.f()}},zt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(p,m))},zt.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},zt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,x=b(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?c.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:w}):y==="script"&&c.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},zt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=b(m.as,m.crossOrigin);c.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(p)},zt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,x=b(y,m.crossOrigin);c.d.L(p,y,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},zt.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=b(m.as,m.crossOrigin);c.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(p)},zt.requestFormReset=function(p){c.d.r(p)},zt.unstable_batchedUpdates=function(p,m){return p(m)},zt.useFormState=function(p,m,y){return v.H.useFormState(p,m,y)},zt.useFormStatus=function(){return v.H.useHostTransitionStatus()},zt.version="19.1.0",zt}var A0;function zp(){if(A0)return Gs.exports;A0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Gs.exports=s1(),Gs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function f1(){if(O0)return bi;O0=1;var a=c1(),r=wf(),u=zp();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(d(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var l=e,n=t;;){var i=l.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){l=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===l)return b(i),e;if(o===n)return b(i),t;o=o.sibling}throw Error(c(188))}if(l.return!==n.return)l=i,n=o;else{for(var f=!1,g=i.child;g;){if(g===l){f=!0,l=i,n=o;break}if(g===n){f=!0,n=i,l=o;break}g=g.sibling}if(!f){for(g=o.child;g;){if(g===l){f=!0,l=o,n=i;break}if(g===n){f=!0,n=o,l=i;break}g=g.sibling}if(!f)throw Error(c(189))}}if(l.alternate!==n)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),Be=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=Be&&e[Be]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case O:return"Profiler";case B:return"StrictMode";case Q:return"Suspense";case te:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case L:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:pt(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return pt(e(t))}catch{}}return null}var ze=Array.isArray,U=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},K=[],E=-1;function j(e){return{current:e}}function Z(e){0>E||(e.current=K[E],K[E]=null,E--)}function X(e,t){E++,K[E]=e.current,e.current=t}var I=j(null),fe=j(null),ue=j(null),Xe=j(null);function ye(e,t){switch(X(ue,t),X(fe,e),X(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Km(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Km(t),e=Wm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(I),X(I,e)}function et(){Z(I),Z(fe),Z(ue)}function Ot(e){e.memoizedState!==null&&X(Xe,e);var t=I.current,l=Wm(t,e.type);t!==l&&(X(fe,e),X(I,l))}function Qe(e){fe.current===e&&(Z(I),Z(fe)),Xe.current===e&&(Z(Xe),hi._currentValue=ee)}var Re=Object.prototype.hasOwnProperty,Ht=a.unstable_scheduleCallback,Ca=a.unstable_cancelCallback,ba=a.unstable_shouldYield,_t=a.unstable_requestPaint,Ke=a.unstable_now,kt=a.unstable_getCurrentPriorityLevel,jt=a.unstable_ImmediatePriority,tt=a.unstable_UserBlockingPriority,nt=a.unstable_NormalPriority,Sa=a.unstable_LowPriority,bn=a.unstable_IdlePriority,ke=a.log,Yl=a.unstable_setDisableYieldValue,Da=null,bt=null;function Je(e){if(typeof ke=="function"&&Yl(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Da,e)}catch{}}var st=Math.clz32?Math.clz32:ve,re=Math.log,ce=Math.LN2;function ve(e){return e>>>=0,e===0?32:31-(re(e)/ce|0)|0}var Oe=256,Ze=4194304;function He(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,t,l){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var g=n&134217727;return g!==0?(n=g&~o,n!==0?i=He(n):(f&=g,f!==0?i=He(f):l||(l=g&~e,l!==0&&(i=He(l))))):(g=n&~o,g!==0?i=He(g):f!==0?i=He(f):l||(l=n&~e,l!==0&&(i=He(l)))),i===0?0:t!==0&&t!==i&&(t&o)===0&&(o=i&-i,l=t&-t,o>=l||o===32&&(l&4194048)!==0)?t:i}function we(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qt(){var e=Oe;return Oe<<=1,(Oe&4194048)===0&&(Oe=256),e}function la(){var e=Ze;return Ze<<=1,(Ze&62914560)===0&&(Ze=4194304),e}function na(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function Zt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fl(e,t,l,n,i,o){var f=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var g=e.entanglements,N=e.expirationTimes,D=e.hiddenUpdates;for(l=f&~l;0<l;){var k=31-st(l),P=1<<k;g[k]=0,N[k]=-1;var R=D[k];if(R!==null)for(D[k]=null,k=0;k<R.length;k++){var H=R[k];H!==null&&(H.lane&=-536870913)}l&=~P}n!==0&&ra(e,n,0),o!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=o&~(f&~t))}function ra(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-st(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|l&4194090}function Pi(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var n=31-st(l),i=1<<n;i&t|e[n]&t&&(e[n]|=t),l&=~i}}function Sn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ba(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pl(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:g0(e.type))}function xa(e,t){var l=W.p;try{return W.p=e,t()}finally{W.p=l}}var ia=Math.random().toString(36).slice(2),at="__reactFiber$"+ia,Ct="__reactProps$"+ia,Ea="__reactContainer$"+ia,xn="__reactEvents$"+ia,Sr="__reactListeners$"+ia,ua="__reactHandles$"+ia,Pa="__reactResources$"+ia,Dt="__reactMarker$"+ia;function xr(e){delete e[at],delete e[Ct],delete e[xn],delete e[Sr],delete e[ua]}function Ga(e){var t=e[at];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ea]||l[at]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=t0(e);e!==null;){if(l=e[at])return l;e=t0(e)}return t}e=l,l=e.parentNode}return null}function oa(e){if(e=e[at]||e[Ea]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Va(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function dl(e){var t=e[Pa];return t||(t=e[Pa]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[Dt]=!0}var Gi=new Set,Vi={};function $a(e,t){ca(e,t),ca(e+"Capture",t)}function ca(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Gi.add(t[e])}var zo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xi={},Er={};function Ro(e){return Re.call(Er,e)?!0:Re.call(Xi,e)?!1:zo.test(e)?Er[e]=!0:(Xi[e]=!0,!1)}function hl(e,t,l){if(Ro(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function En(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function _a(e,t,l,n){if(n===null)e.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+n)}}var $r,ml;function Na(e){if($r===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);$r=t&&t[1]||"",ml=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$r+e+ml}var _r=!1;function $n(e,t){if(!e||_r)return"";_r=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(H){var R=H}Reflect.construct(e,[],P)}else{try{P.call()}catch(H){R=H}e.call(P.prototype)}}else{try{throw Error()}catch(H){R=H}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(H){if(H&&R&&typeof H.stack=="string")return[H.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),f=o[0],g=o[1];if(f&&g){var N=f.split(`
`),D=g.split(`
`);for(i=n=0;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;for(;i<D.length&&!D[i].includes("DetermineComponentFrameRoot");)i++;if(n===N.length||i===D.length)for(n=N.length-1,i=D.length-1;1<=n&&0<=i&&N[n]!==D[i];)i--;for(;1<=n&&0<=i;n--,i--)if(N[n]!==D[i]){if(n!==1||i!==1)do if(n--,i--,0>i||N[n]!==D[i]){var k=`
`+N[n].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=n&&0<=i);break}}}finally{_r=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?Na(l):""}function Ho(e){switch(e.tag){case 26:case 27:case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 15:return $n(e.type,!1);case 11:return $n(e.type.render,!1);case 1:return $n(e.type,!0);case 31:return Na("Activity");default:return""}}function Qi(e){try{var t="";do t+=Ho(e),e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zi(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jo(e){var t=Zi(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,o=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,o.call(this,f)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _n(e){e._valueTracker||(e._valueTracker=jo(e))}function Fi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),n="";return e&&(n=Zi(e)?e.checked?"true":"false":e.value),e=n,e!==l?(t.setValue(e),!0):!1}function Gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ki=/[\n"\\]/g;function F(e){return e.replace(Ki,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function se(e,t,l,n,i,o,f,g){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?Ge(e,f,Nt(t)):l!=null?Ge(e,f,Nt(l)):n!=null&&e.removeAttribute("value"),i==null&&o!=null&&(e.defaultChecked=!!o),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Nt(g):e.removeAttribute("name")}function ie(e,t,l,n,i,o,f,g){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||l!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;l=l!=null?""+Nt(l):"",t=t!=null?""+Nt(t):l,g||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=g?e.checked:!!n,e.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function Ge(e,t,l){t==="number"&&Gl(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function ut(e,t,l,n){if(e=e.options,t){t={};for(var i=0;i<l.length;i++)t["$"+l[i]]=!0;for(l=0;l<e.length;l++)i=t.hasOwnProperty("$"+e[l].value),e[l].selected!==i&&(e[l].selected=i),i&&n&&(e[l].defaultSelected=!0)}else{for(l=""+Nt(l),t=null,i=0;i<e.length;i++){if(e[i].value===l){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t,l){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+Nt(l):""}function za(e,t,l,n){if(t==null){if(n!=null){if(l!=null)throw Error(c(92));if(ze(n)){if(1<n.length)throw Error(c(93));n=n[0]}l=n}l==null&&(l=""),t=l}l=Nt(t),e.defaultValue=l,n=e.textContent,n===l&&n!==""&&n!==null&&(e.value=n)}function Lt(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Wi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nr(e,t,l){var n=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,l):typeof l!="number"||l===0||Wi.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Nn(e,t,l){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,l!=null){for(var n in l)!l.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&l[i]!==n&&Nr(e,i,n)}else for(var o in t)t.hasOwnProperty(o)&&Nr(e,o,t[o])}function Lo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var av=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return lv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Uo=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wn=null,Tn=null;function Jf(e){var t=oa(e);if(t&&(e=t.stateNode)){var l=e[Ct]||null;e:switch(e=t.stateNode,t.type){case"input":if(se(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+F(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var n=l[t];if(n!==e&&n.form===e.form){var i=n[Ct]||null;if(!i)throw Error(c(90));se(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<l.length;t++)n=l[t],n.form===e.form&&Fi(n)}break e;case"textarea":pl(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&ut(e,!!l.multiple,t,!1)}}}var qo=!1;function If(e,t,l){if(qo)return e(t,l);qo=!0;try{var n=e(t);return n}finally{if(qo=!1,(wn!==null||Tn!==null)&&(ju(),wn&&(t=wn,e=Tn,Tn=wn=null,Jf(t),e)))for(t=0;t<e.length;t++)Jf(e[t])}}function wr(e,t){var l=e.stateNode;if(l===null)return null;var n=l[Ct]||null;if(n===null)return null;l=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(c(231,t,typeof l));return l}var Xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=!1;if(Xa)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Yo=!1}var gl=null,Po=null,Ii=null;function ed(){if(Ii)return Ii;var e,t=Po,l=t.length,n,i="value"in gl?gl.value:gl.textContent,o=i.length;for(e=0;e<l&&t[e]===i[e];e++);var f=l-e;for(n=1;n<=f&&t[l-n]===i[o-n];n++);return Ii=i.slice(e,1<n?1-n:void 0)}function eu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tu(){return!0}function td(){return!1}function qt(e){function t(l,n,i,o,f){this._reactName=l,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(l=e[g],this[g]=l?l(o):o[g]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?tu:td,this.isPropagationStopped=td,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),t}var Vl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=qt(Vl),Mr=y({},Vl,{view:0,detail:0}),nv=qt(Mr),Go,Vo,Ar,lu=y({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Go=e.screenX-Ar.screenX,Vo=e.screenY-Ar.screenY):Vo=Go=0,Ar=e),Go)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),ad=qt(lu),rv=y({},lu,{dataTransfer:0}),iv=qt(rv),uv=y({},Mr,{relatedTarget:0}),Xo=qt(uv),ov=y({},Vl,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=qt(ov),sv=y({},Vl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fv=qt(sv),dv=y({},Vl,{data:0}),ld=qt(dv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pv[e])?!!t[e]:!1}function Qo(){return gv}var vv=y({},Mr,{key:function(e){if(e.key){var t=hv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qo,charCode:function(e){return e.type==="keypress"?eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yv=qt(vv),bv=y({},lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=qt(bv),Sv=y({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qo}),xv=qt(Sv),Ev=y({},Vl,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=qt(Ev),_v=y({},lu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=qt(_v),wv=y({},Vl,{newState:0,oldState:0}),Tv=qt(wv),Mv=[9,13,27,32],Zo=Xa&&"CompositionEvent"in window,Or=null;Xa&&"documentMode"in document&&(Or=document.documentMode);var Av=Xa&&"TextEvent"in window&&!Or,rd=Xa&&(!Zo||Or&&8<Or&&11>=Or),id=" ",ud=!1;function od(e,t){switch(e){case"keyup":return Mv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Ov(e,t){switch(e){case"compositionend":return cd(t);case"keypress":return t.which!==32?null:(ud=!0,id);case"textInput":return e=t.data,e===id&&ud?null:e;default:return null}}function Cv(e,t){if(Mn)return e==="compositionend"||!Zo&&od(e,t)?(e=ed(),Ii=Po=gl=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rd&&t.locale!=="ko"?null:t.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dv[e.type]:t==="textarea"}function fd(e,t,l,n){wn?Tn?Tn.push(n):Tn=[n]:wn=n,t=Pu(t,"onChange"),0<t.length&&(l=new au("onChange","change",null,l,n),e.push({event:l,listeners:t}))}var Cr=null,Dr=null;function Bv(e){Vm(e,0)}function nu(e){var t=Va(e);if(Fi(t))return e}function dd(e,t){if(e==="change")return t}var hd=!1;if(Xa){var Fo;if(Xa){var Ko="oninput"in document;if(!Ko){var md=document.createElement("div");md.setAttribute("oninput","return;"),Ko=typeof md.oninput=="function"}Fo=Ko}else Fo=!1;hd=Fo&&(!document.documentMode||9<document.documentMode)}function pd(){Cr&&(Cr.detachEvent("onpropertychange",gd),Dr=Cr=null)}function gd(e){if(e.propertyName==="value"&&nu(Dr)){var t=[];fd(t,Dr,e,ko(e)),If(Bv,t)}}function zv(e,t,l){e==="focusin"?(pd(),Cr=t,Dr=l,Cr.attachEvent("onpropertychange",gd)):e==="focusout"&&pd()}function Rv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(Dr)}function Hv(e,t){if(e==="click")return nu(t)}function jv(e,t){if(e==="input"||e==="change")return nu(t)}function Lv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:Lv;function Br(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),n=Object.keys(t);if(l.length!==n.length)return!1;for(n=0;n<l.length;n++){var i=l[n];if(!Re.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yd(e,t){var l=vd(e);e=0;for(var n;l;){if(l.nodeType===3){if(n=e+l.textContent.length,e<=t&&n>=t)return{node:l,offset:t-e};e=n}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=vd(l)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gl(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=Gl(e.document)}return t}function Wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uv=Xa&&"documentMode"in document&&11>=document.documentMode,An=null,Jo=null,zr=null,Io=!1;function xd(e,t,l){var n=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Io||An==null||An!==Gl(n)||(n=An,"selectionStart"in n&&Wo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),zr&&Br(zr,n)||(zr=n,n=Pu(Jo,"onSelect"),0<n.length&&(t=new au("onSelect","select",null,t,l),e.push({event:t,listeners:n}),t.target=An)))}function Xl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var On={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionrun:Xl("Transition","TransitionRun"),transitionstart:Xl("Transition","TransitionStart"),transitioncancel:Xl("Transition","TransitionCancel"),transitionend:Xl("Transition","TransitionEnd")},ec={},Ed={};Xa&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Ql(e){if(ec[e])return ec[e];if(!On[e])return e;var t=On[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in Ed)return ec[e]=t[l];return e}var $d=Ql("animationend"),_d=Ql("animationiteration"),Nd=Ql("animationstart"),kv=Ql("transitionrun"),qv=Ql("transitionstart"),Yv=Ql("transitioncancel"),wd=Ql("transitionend"),Td=new Map,tc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tc.push("scrollEnd");function wa(e,t){Td.set(e,t),$a(t,[e])}var Md=new WeakMap;function sa(e,t){if(typeof e=="object"&&e!==null){var l=Md.get(e);return l!==void 0?l:(t={value:e,source:t,stack:Qi(t)},Md.set(e,t),t)}return{value:e,source:t,stack:Qi(t)}}var fa=[],Cn=0,ac=0;function ru(){for(var e=Cn,t=ac=Cn=0;t<e;){var l=fa[t];fa[t++]=null;var n=fa[t];fa[t++]=null;var i=fa[t];fa[t++]=null;var o=fa[t];if(fa[t++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}o!==0&&Ad(l,i,o)}}function iu(e,t,l,n){fa[Cn++]=e,fa[Cn++]=t,fa[Cn++]=l,fa[Cn++]=n,ac|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function lc(e,t,l,n){return iu(e,t,l,n),uu(e)}function Dn(e,t){return iu(e,null,null,t),uu(e)}function Ad(e,t,l){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l);for(var i=!1,o=e.return;o!==null;)o.childLanes|=l,n=o.alternate,n!==null&&(n.childLanes|=l),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(i=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,i&&t!==null&&(i=31-st(l),e=o.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=l|536870912),o):null}function uu(e){if(50<ri)throw ri=0,cs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Bn={};function Pv(e,t,l,n){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(e,t,l,n){return new Pv(e,t,l,n)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qa(e,t){var l=e.alternate;return l===null?(l=Kt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function Od(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ou(e,t,l,n,i,o){var f=0;if(n=e,typeof e=="function")nc(e)&&(f=1);else if(typeof e=="string")f=Vy(e,l,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Kt(31,l,t,i),e.elementType=ne,e.lanes=o,e;case _:return Zl(l.children,i,o,t);case B:f=8,i|=24;break;case O:return e=Kt(12,l,t,i|2),e.elementType=O,e.lanes=o,e;case Q:return e=Kt(13,l,t,i),e.elementType=Q,e.lanes=o,e;case te:return e=Kt(19,l,t,i),e.elementType=te,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case M:case L:f=10;break e;case z:f=9;break e;case J:f=11;break e;case ae:f=14;break e;case de:f=16,n=null;break e}f=29,l=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=Kt(f,l,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Zl(e,t,l,n){return e=Kt(7,e,n,t),e.lanes=l,e}function rc(e,t,l){return e=Kt(6,e,null,t),e.lanes=l,e}function ic(e,t,l){return t=Kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zn=[],Rn=0,cu=null,su=0,da=[],ha=0,Fl=null,Za=1,Fa="";function Kl(e,t){zn[Rn++]=su,zn[Rn++]=cu,cu=e,su=t}function Cd(e,t,l){da[ha++]=Za,da[ha++]=Fa,da[ha++]=Fl,Fl=e;var n=Za;e=Fa;var i=32-st(n)-1;n&=~(1<<i),l+=1;var o=32-st(t)+i;if(30<o){var f=i-i%5;o=(n&(1<<f)-1).toString(32),n>>=f,i-=f,Za=1<<32-st(t)+i|l<<i|n,Fa=o+e}else Za=1<<o|l<<i|n,Fa=e}function uc(e){e.return!==null&&(Kl(e,1),Cd(e,1,0))}function oc(e){for(;e===cu;)cu=zn[--Rn],zn[Rn]=null,su=zn[--Rn],zn[Rn]=null;for(;e===Fl;)Fl=da[--ha],da[ha]=null,Fa=da[--ha],da[ha]=null,Za=da[--ha],da[ha]=null}var Ut=null,rt=null,Ce=!1,Wl=null,Ra=!1,cc=Error(c(519));function Jl(e){var t=Error(c(418,""));throw jr(sa(t,e)),cc}function Dd(e){var t=e.stateNode,l=e.type,n=e.memoizedProps;switch(t[at]=e,t[Ct]=n,l){case"dialog":_e("cancel",t),_e("close",t);break;case"iframe":case"object":case"embed":_e("load",t);break;case"video":case"audio":for(l=0;l<ui.length;l++)_e(ui[l],t);break;case"source":_e("error",t);break;case"img":case"image":case"link":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"input":_e("invalid",t),ie(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),_n(t);break;case"select":_e("invalid",t);break;case"textarea":_e("invalid",t),za(t,n.value,n.defaultValue,n.children),_n(t)}l=n.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||n.suppressHydrationWarning===!0||Fm(t.textContent,l)?(n.popover!=null&&(_e("beforetoggle",t),_e("toggle",t)),n.onScroll!=null&&_e("scroll",t),n.onScrollEnd!=null&&_e("scrollend",t),n.onClick!=null&&(t.onclick=Gu),t=!0):t=!1,t||Jl(e)}function Bd(e){for(Ut=e.return;Ut;)switch(Ut.tag){case 5:case 13:Ra=!1;return;case 27:case 3:Ra=!0;return;default:Ut=Ut.return}}function Rr(e){if(e!==Ut)return!1;if(!Ce)return Bd(e),Ce=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Ns(e.type,e.memoizedProps)),l=!l),l&&rt&&Jl(e),Bd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(l=e.data,l==="/$"){if(t===0){rt=Ma(e.nextSibling);break e}t--}else l!=="$"&&l!=="$!"&&l!=="$?"||t++;e=e.nextSibling}rt=null}}else t===27?(t=rt,Dl(e.type)?(e=As,As=null,rt=e):rt=t):rt=Ut?Ma(e.stateNode.nextSibling):null;return!0}function Hr(){rt=Ut=null,Ce=!1}function zd(){var e=Wl;return e!==null&&(Gt===null?Gt=e:Gt.push.apply(Gt,e),Wl=null),e}function jr(e){Wl===null?Wl=[e]:Wl.push(e)}var sc=j(null),Il=null,Ka=null;function vl(e,t,l){X(sc,t._currentValue),t._currentValue=l}function Wa(e){e._currentValue=sc.current,Z(sc)}function fc(e,t,l){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===l)break;e=e.return}}function dc(e,t,l,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var o=i.dependencies;if(o!==null){var f=i.child;o=o.firstContext;e:for(;o!==null;){var g=o;o=i;for(var N=0;N<t.length;N++)if(g.context===t[N]){o.lanes|=l,g=o.alternate,g!==null&&(g.lanes|=l),fc(o.return,l,e),n||(f=null);break e}o=g.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(c(341));f.lanes|=l,o=f.alternate,o!==null&&(o.lanes|=l),fc(f,l,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Lr(e,t,l,n){e=null;for(var i=t,o=!1;i!==null;){if(!o){if((i.flags&524288)!==0)o=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var g=i.type;Ft(i.pendingProps.value,f.value)||(e!==null?e.push(g):e=[g])}}else if(i===Xe.current){if(f=i.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}i=i.return}e!==null&&dc(t,e,l,n),t.flags|=262144}function fu(e){for(e=e.firstContext;e!==null;){if(!Ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function en(e){Il=e,Ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bt(e){return Rd(Il,e)}function du(e,t){return Il===null&&en(e),Rd(e,t)}function Rd(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Ka===null){if(e===null)throw Error(c(308));Ka=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ka=Ka.next=t;return l}var Gv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Vv=a.unstable_scheduleCallback,Xv=a.unstable_NormalPriority,gt={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hc(){return{controller:new Gv,data:new Map,refCount:0}}function Ur(e){e.refCount--,e.refCount===0&&Vv(Xv,function(){e.controller.abort()})}var kr=null,mc=0,Hn=0,jn=null;function Qv(e,t){if(kr===null){var l=kr=[];mc=0,Hn=gs(),jn={status:"pending",value:void 0,then:function(n){l.push(n)}}}return mc++,t.then(Hd,Hd),t}function Hd(){if(--mc===0&&kr!==null){jn!==null&&(jn.status="fulfilled");var e=kr;kr=null,Hn=0,jn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Zv(e,t){var l=[],n={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<l.length;i++)(0,l[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),n}var jd=U.S;U.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qv(e,t),jd!==null&&jd(e,t)};var tn=j(null);function pc(){var e=tn.current;return e!==null?e:Fe.pooledCache}function hu(e,t){t===null?X(tn,tn.current):X(tn,t.pool)}function Ld(){var e=pc();return e===null?null:{parent:gt._currentValue,pool:e}}var qr=Error(c(460)),Ud=Error(c(474)),mu=Error(c(542)),gc={then:function(){}};function kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pu(){}function qd(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(pu,pu),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(pu,pu);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw Yr=t,qr}}var Yr=null;function Yd(){if(Yr===null)throw Error(c(459));var e=Yr;return Yr=null,e}function Pd(e){if(e===qr||e===mu)throw Error(c(483))}var yl=!1;function vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sl(e,t,l){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(je&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=uu(e),Ad(e,null,l),t}return iu(e,n,t,l),uu(e)}function Pr(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Pi(e,l)}}function bc(e,t){var l=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,l===n)){var i=null,o=null;if(l=l.firstBaseUpdate,l!==null){do{var f={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};o===null?i=o=f:o=o.next=f,l=l.next}while(l!==null);o===null?i=o=t:o=o.next=t}else i=o=t;l={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Sc=!1;function Gr(){if(Sc){var e=jn;if(e!==null)throw e}}function Vr(e,t,l,n){Sc=!1;var i=e.updateQueue;yl=!1;var o=i.firstBaseUpdate,f=i.lastBaseUpdate,g=i.shared.pending;if(g!==null){i.shared.pending=null;var N=g,D=N.next;N.next=null,f===null?o=D:f.next=D,f=N;var k=e.alternate;k!==null&&(k=k.updateQueue,g=k.lastBaseUpdate,g!==f&&(g===null?k.firstBaseUpdate=D:g.next=D,k.lastBaseUpdate=N))}if(o!==null){var P=i.baseState;f=0,k=D=N=null,g=o;do{var R=g.lane&-536870913,H=R!==g.lane;if(H?(Te&R)===R:(n&R)===R){R!==0&&R===Hn&&(Sc=!0),k!==null&&(k=k.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ge=e,me=g;R=t;var Pe=l;switch(me.tag){case 1:if(ge=me.payload,typeof ge=="function"){P=ge.call(Pe,P,R);break e}P=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=me.payload,R=typeof ge=="function"?ge.call(Pe,P,R):ge,R==null)break e;P=y({},P,R);break e;case 2:yl=!0}}R=g.callback,R!==null&&(e.flags|=64,H&&(e.flags|=8192),H=i.callbacks,H===null?i.callbacks=[R]:H.push(R))}else H={lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},k===null?(D=k=H,N=P):k=k.next=H,f|=R;if(g=g.next,g===null){if(g=i.shared.pending,g===null)break;H=g,g=H.next,H.next=null,i.lastBaseUpdate=H,i.shared.pending=null}}while(!0);k===null&&(N=P),i.baseState=N,i.firstBaseUpdate=D,i.lastBaseUpdate=k,o===null&&(i.shared.lanes=0),Ml|=f,e.lanes=f,e.memoizedState=P}}function Gd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Vd(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)Gd(l[e],t)}var Ln=j(null),gu=j(0);function Xd(e,t){e=nl,X(gu,e),X(Ln,t),nl=e|t.baseLanes}function xc(){X(gu,nl),X(Ln,Ln.current)}function Ec(){nl=gu.current,Z(Ln),Z(gu)}var xl=0,xe=null,qe=null,dt=null,vu=!1,Un=!1,an=!1,yu=0,Xr=0,kn=null,Fv=0;function ot(){throw Error(c(321))}function $c(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!Ft(e[l],t[l]))return!1;return!0}function _c(e,t,l,n,i,o){return xl=o,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?Ah:Oh,an=!1,o=l(n,i),an=!1,Un&&(o=Zd(t,l,n,i)),Qd(e),o}function Qd(e){U.H=_u;var t=qe!==null&&qe.next!==null;if(xl=0,dt=qe=xe=null,vu=!1,Xr=0,kn=null,t)throw Error(c(300));e===null||St||(e=e.dependencies,e!==null&&fu(e)&&(St=!0))}function Zd(e,t,l,n){xe=e;var i=0;do{if(Un&&(kn=null),Xr=0,Un=!1,25<=i)throw Error(c(301));if(i+=1,dt=qe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}U.H=ay,o=t(l,n)}while(Un);return o}function Kv(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Qr(t):t,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(xe.flags|=1024),t}function Nc(){var e=yu!==0;return yu=0,e}function wc(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Tc(e){if(vu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vu=!1}xl=0,dt=qe=xe=null,Un=!1,Xr=yu=0,kn=null}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?xe.memoizedState=dt=e:dt=dt.next=e,dt}function ht(){if(qe===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=dt===null?xe.memoizedState:dt.next;if(t!==null)dt=t,qe=e;else{if(e===null)throw xe.alternate===null?Error(c(467)):Error(c(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},dt===null?xe.memoizedState=dt=e:dt=dt.next=e}return dt}function Mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qr(e){var t=Xr;return Xr+=1,kn===null&&(kn=[]),e=qd(kn,e,t),t=xe,(dt===null?t.memoizedState:dt.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?Ah:Oh),e}function bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qr(e);if(e.$$typeof===L)return Bt(e)}throw Error(c(438,String(e)))}function Ac(e){var t=null,l=xe.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var n=xe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=Mc(),xe.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),n=0;n<e;n++)l[n]=he;return t.index++,l}function Ja(e,t){return typeof t=="function"?t(e):t}function Su(e){var t=ht();return Oc(t,qe,e)}function Oc(e,t,l){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=l;var i=e.baseQueue,o=n.pending;if(o!==null){if(i!==null){var f=i.next;i.next=o.next,o.next=f}t.baseQueue=i=o,n.pending=null}if(o=e.baseState,i===null)e.memoizedState=o;else{t=i.next;var g=f=null,N=null,D=t,k=!1;do{var P=D.lane&-536870913;if(P!==D.lane?(Te&P)===P:(xl&P)===P){var R=D.revertLane;if(R===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),P===Hn&&(k=!0);else if((xl&R)===R){D=D.next,R===Hn&&(k=!0);continue}else P={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},N===null?(g=N=P,f=o):N=N.next=P,xe.lanes|=R,Ml|=R;P=D.action,an&&l(o,P),o=D.hasEagerState?D.eagerState:l(o,P)}else R={lane:P,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},N===null?(g=N=R,f=o):N=N.next=R,xe.lanes|=P,Ml|=P;D=D.next}while(D!==null&&D!==t);if(N===null?f=o:N.next=g,!Ft(o,e.memoizedState)&&(St=!0,k&&(l=jn,l!==null)))throw l;e.memoizedState=o,e.baseState=f,e.baseQueue=N,n.lastRenderedState=o}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Cc(e){var t=ht(),l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=e;var n=l.dispatch,i=l.pending,o=t.memoizedState;if(i!==null){l.pending=null;var f=i=i.next;do o=e(o,f.action),f=f.next;while(f!==i);Ft(o,t.memoizedState)||(St=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),l.lastRenderedState=o}return[o,n]}function Fd(e,t,l){var n=xe,i=ht(),o=Ce;if(o){if(l===void 0)throw Error(c(407));l=l()}else l=t();var f=!Ft((qe||i).memoizedState,l);f&&(i.memoizedState=l,St=!0),i=i.queue;var g=Jd.bind(null,n,i,e);if(Zr(2048,8,g,[e]),i.getSnapshot!==t||f||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,qn(9,xu(),Wd.bind(null,n,i,l,t),null),Fe===null)throw Error(c(349));o||(xl&124)!==0||Kd(n,t,l)}return l}function Kd(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=xe.updateQueue,t===null?(t=Mc(),xe.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Wd(e,t,l,n){t.value=l,t.getSnapshot=n,Id(t)&&eh(e)}function Jd(e,t,l){return l(function(){Id(t)&&eh(e)})}function Id(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!Ft(e,l)}catch{return!0}}function eh(e){var t=Dn(e,2);t!==null&&ta(t,e,2)}function Dc(e){var t=Yt();if(typeof e=="function"){var l=e;if(e=l(),an){Je(!0);try{l()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},t}function th(e,t,l,n){return e.baseState=l,Oc(e,qe,typeof n=="function"?n:Ja)}function Wv(e,t,l,n,i){if($u(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};U.T!==null?l(!0):o.isTransition=!1,n(o),l=t.pending,l===null?(o.next=t.pending=o,ah(t,o)):(o.next=l.next,t.pending=l.next=o)}}function ah(e,t){var l=t.action,n=t.payload,i=e.state;if(t.isTransition){var o=U.T,f={};U.T=f;try{var g=l(i,n),N=U.S;N!==null&&N(f,g),lh(e,t,g)}catch(D){Bc(e,t,D)}finally{U.T=o}}else try{o=l(i,n),lh(e,t,o)}catch(D){Bc(e,t,D)}}function lh(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(n){nh(e,t,n)},function(n){return Bc(e,t,n)}):nh(e,t,l)}function nh(e,t,l){t.status="fulfilled",t.value=l,rh(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,ah(e,l)))}function Bc(e,t,l){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=l,rh(t),t=t.next;while(t!==n)}e.action=null}function rh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ih(e,t){return t}function uh(e,t){if(Ce){var l=Fe.formState;if(l!==null){e:{var n=xe;if(Ce){if(rt){t:{for(var i=rt,o=Ra;i.nodeType!==8;){if(!o){i=null;break t}if(i=Ma(i.nextSibling),i===null){i=null;break t}}o=i.data,i=o==="F!"||o==="F"?i:null}if(i){rt=Ma(i.nextSibling),n=i.data==="F!";break e}}Jl(n)}n=!1}n&&(t=l[0])}}return l=Yt(),l.memoizedState=l.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ih,lastRenderedState:t},l.queue=n,l=wh.bind(null,xe,n),n.dispatch=l,n=Dc(!1),o=Lc.bind(null,xe,!1,n.queue),n=Yt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,l=Wv.bind(null,xe,i,o,l),i.dispatch=l,n.memoizedState=e,[t,l,!1]}function oh(e){var t=ht();return ch(t,qe,e)}function ch(e,t,l){if(t=Oc(e,t,ih)[0],e=Su(Ja)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Qr(t)}catch(f){throw f===qr?mu:f}else n=t;t=ht();var i=t.queue,o=i.dispatch;return l!==t.memoizedState&&(xe.flags|=2048,qn(9,xu(),Jv.bind(null,i,l),null)),[n,o,e]}function Jv(e,t){e.action=t}function sh(e){var t=ht(),l=qe;if(l!==null)return ch(t,l,e);ht(),t=t.memoizedState,l=ht();var n=l.queue.dispatch;return l.memoizedState=e,[t,n,!1]}function qn(e,t,l,n){return e={tag:e,create:l,deps:n,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Mc(),xe.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(n=l.next,l.next=e,e.next=n,t.lastEffect=e),e}function xu(){return{destroy:void 0,resource:void 0}}function fh(){return ht().memoizedState}function Eu(e,t,l,n){var i=Yt();n=n===void 0?null:n,xe.flags|=e,i.memoizedState=qn(1|t,xu(),l,n)}function Zr(e,t,l,n){var i=ht();n=n===void 0?null:n;var o=i.memoizedState.inst;qe!==null&&n!==null&&$c(n,qe.memoizedState.deps)?i.memoizedState=qn(t,o,l,n):(xe.flags|=e,i.memoizedState=qn(1|t,o,l,n))}function dh(e,t){Eu(8390656,8,e,t)}function hh(e,t){Zr(2048,8,e,t)}function mh(e,t){return Zr(4,2,e,t)}function ph(e,t){return Zr(4,4,e,t)}function gh(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,l){l=l!=null?l.concat([e]):null,Zr(4,4,gh.bind(null,t,e),l)}function zc(){}function yh(e,t){var l=ht();t=t===void 0?null:t;var n=l.memoizedState;return t!==null&&$c(t,n[1])?n[0]:(l.memoizedState=[e,t],e)}function bh(e,t){var l=ht();t=t===void 0?null:t;var n=l.memoizedState;if(t!==null&&$c(t,n[1]))return n[0];if(n=e(),an){Je(!0);try{e()}finally{Je(!1)}}return l.memoizedState=[n,t],n}function Rc(e,t,l){return l===void 0||(xl&1073741824)!==0?e.memoizedState=t:(e.memoizedState=l,e=Em(),xe.lanes|=e,Ml|=e,l)}function Sh(e,t,l,n){return Ft(l,t)?l:Ln.current!==null?(e=Rc(e,l,n),Ft(e,t)||(St=!0),e):(xl&42)===0?(St=!0,e.memoizedState=l):(e=Em(),xe.lanes|=e,Ml|=e,t)}function xh(e,t,l,n,i){var o=W.p;W.p=o!==0&&8>o?o:8;var f=U.T,g={};U.T=g,Lc(e,!1,t,l);try{var N=i(),D=U.S;if(D!==null&&D(g,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var k=Zv(N,n);Fr(e,t,k,ea(e))}else Fr(e,t,n,ea(e))}catch(P){Fr(e,t,{then:function(){},status:"rejected",reason:P},ea())}finally{W.p=o,U.T=f}}function Iv(){}function Hc(e,t,l,n){if(e.tag!==5)throw Error(c(476));var i=Eh(e).queue;xh(e,i,t,ee,l===null?Iv:function(){return $h(e),l(n)})}function Eh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:ee},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $h(e){var t=Eh(e).next.queue;Fr(e,t,{},ea())}function jc(){return Bt(hi)}function _h(){return ht().memoizedState}function Nh(){return ht().memoizedState}function ey(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=ea();e=bl(l);var n=Sl(t,e,l);n!==null&&(ta(n,t,l),Pr(n,t,l)),t={cache:hc()},e.payload=t;return}t=t.return}}function ty(e,t,l){var n=ea();l={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},$u(e)?Th(t,l):(l=lc(e,t,l,n),l!==null&&(ta(l,e,n),Mh(l,t,n)))}function wh(e,t,l){var n=ea();Fr(e,t,l,n)}function Fr(e,t,l,n){var i={lane:n,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if($u(e))Th(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var f=t.lastRenderedState,g=o(f,l);if(i.hasEagerState=!0,i.eagerState=g,Ft(g,f))return iu(e,t,i,0),Fe===null&&ru(),!1}catch{}finally{}if(l=lc(e,t,i,n),l!==null)return ta(l,e,n),Mh(l,t,n),!0}return!1}function Lc(e,t,l,n){if(n={lane:2,revertLane:gs(),action:n,hasEagerState:!1,eagerState:null,next:null},$u(e)){if(t)throw Error(c(479))}else t=lc(e,l,n,2),t!==null&&ta(t,e,2)}function $u(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function Th(e,t){Un=vu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function Mh(e,t,l){if((l&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,l|=n,t.lanes=l,Pi(e,l)}}var _u={readContext:Bt,use:bu,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot},Ah={readContext:Bt,use:bu,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:dh,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,Eu(4194308,4,gh.bind(null,t,e),l)},useLayoutEffect:function(e,t){return Eu(4194308,4,e,t)},useInsertionEffect:function(e,t){Eu(4,2,e,t)},useMemo:function(e,t){var l=Yt();t=t===void 0?null:t;var n=e();if(an){Je(!0);try{e()}finally{Je(!1)}}return l.memoizedState=[n,t],n},useReducer:function(e,t,l){var n=Yt();if(l!==void 0){var i=l(t);if(an){Je(!0);try{l(t)}finally{Je(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=ty.bind(null,xe,e),[n.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Dc(e);var t=e.queue,l=wh.bind(null,xe,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:zc,useDeferredValue:function(e,t){var l=Yt();return Rc(l,e,t)},useTransition:function(){var e=Dc(!1);return e=xh.bind(null,xe,e.queue,!0,!1),Yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var n=xe,i=Yt();if(Ce){if(l===void 0)throw Error(c(407));l=l()}else{if(l=t(),Fe===null)throw Error(c(349));(Te&124)!==0||Kd(n,t,l)}i.memoizedState=l;var o={value:l,getSnapshot:t};return i.queue=o,dh(Jd.bind(null,n,o,e),[e]),n.flags|=2048,qn(9,xu(),Wd.bind(null,n,o,l,t),null),l},useId:function(){var e=Yt(),t=Fe.identifierPrefix;if(Ce){var l=Fa,n=Za;l=(n&~(1<<32-st(n)-1)).toString(32)+l,t="«"+t+"R"+l,l=yu++,0<l&&(t+="H"+l.toString(32)),t+="»"}else l=Fv++,t="«"+t+"r"+l.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:jc,useFormState:uh,useActionState:uh,useOptimistic:function(e){var t=Yt();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=Lc.bind(null,xe,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ac,useCacheRefresh:function(){return Yt().memoizedState=ey.bind(null,xe)}},Oh={readContext:Bt,use:bu,useCallback:yh,useContext:Bt,useEffect:hh,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:ph,useMemo:bh,useReducer:Su,useRef:fh,useState:function(){return Su(Ja)},useDebugValue:zc,useDeferredValue:function(e,t){var l=ht();return Sh(l,qe.memoizedState,e,t)},useTransition:function(){var e=Su(Ja)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Qr(e),t]},useSyncExternalStore:Fd,useId:_h,useHostTransitionStatus:jc,useFormState:oh,useActionState:oh,useOptimistic:function(e,t){var l=ht();return th(l,qe,e,t)},useMemoCache:Ac,useCacheRefresh:Nh},ay={readContext:Bt,use:bu,useCallback:yh,useContext:Bt,useEffect:hh,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:ph,useMemo:bh,useReducer:Cc,useRef:fh,useState:function(){return Cc(Ja)},useDebugValue:zc,useDeferredValue:function(e,t){var l=ht();return qe===null?Rc(l,e,t):Sh(l,qe.memoizedState,e,t)},useTransition:function(){var e=Cc(Ja)[0],t=ht().memoizedState;return[typeof e=="boolean"?e:Qr(e),t]},useSyncExternalStore:Fd,useId:_h,useHostTransitionStatus:jc,useFormState:sh,useActionState:sh,useOptimistic:function(e,t){var l=ht();return qe!==null?th(l,qe,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ac,useCacheRefresh:Nh},Yn=null,Kr=0;function Nu(e){var t=Kr;return Kr+=1,Yn===null&&(Yn=[]),qd(Yn,e,t)}function Wr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wu(e,t){throw t.$$typeof===x?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ch(e){var t=e._init;return t(e._payload)}function Dh(e){function t(A,T){if(e){var C=A.deletions;C===null?(A.deletions=[T],A.flags|=16):C.push(T)}}function l(A,T){if(!e)return null;for(;T!==null;)t(A,T),T=T.sibling;return null}function n(A){for(var T=new Map;A!==null;)A.key!==null?T.set(A.key,A):T.set(A.index,A),A=A.sibling;return T}function i(A,T){return A=Qa(A,T),A.index=0,A.sibling=null,A}function o(A,T,C){return A.index=C,e?(C=A.alternate,C!==null?(C=C.index,C<T?(A.flags|=67108866,T):C):(A.flags|=67108866,T)):(A.flags|=1048576,T)}function f(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function g(A,T,C,q){return T===null||T.tag!==6?(T=rc(C,A.mode,q),T.return=A,T):(T=i(T,C),T.return=A,T)}function N(A,T,C,q){var le=C.type;return le===_?k(A,T,C.props.children,q,C.key):T!==null&&(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===de&&Ch(le)===T.type)?(T=i(T,C.props),Wr(T,C),T.return=A,T):(T=ou(C.type,C.key,C.props,null,A.mode,q),Wr(T,C),T.return=A,T)}function D(A,T,C,q){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=ic(C,A.mode,q),T.return=A,T):(T=i(T,C.children||[]),T.return=A,T)}function k(A,T,C,q,le){return T===null||T.tag!==7?(T=Zl(C,A.mode,q,le),T.return=A,T):(T=i(T,C),T.return=A,T)}function P(A,T,C){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=rc(""+T,A.mode,C),T.return=A,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case S:return C=ou(T.type,T.key,T.props,null,A.mode,C),Wr(C,T),C.return=A,C;case w:return T=ic(T,A.mode,C),T.return=A,T;case de:var q=T._init;return T=q(T._payload),P(A,T,C)}if(ze(T)||Ue(T))return T=Zl(T,A.mode,C,null),T.return=A,T;if(typeof T.then=="function")return P(A,Nu(T),C);if(T.$$typeof===L)return P(A,du(A,T),C);wu(A,T)}return null}function R(A,T,C,q){var le=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return le!==null?null:g(A,T,""+C,q);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case S:return C.key===le?N(A,T,C,q):null;case w:return C.key===le?D(A,T,C,q):null;case de:return le=C._init,C=le(C._payload),R(A,T,C,q)}if(ze(C)||Ue(C))return le!==null?null:k(A,T,C,q,null);if(typeof C.then=="function")return R(A,T,Nu(C),q);if(C.$$typeof===L)return R(A,T,du(A,C),q);wu(A,C)}return null}function H(A,T,C,q,le){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return A=A.get(C)||null,g(T,A,""+q,le);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return A=A.get(q.key===null?C:q.key)||null,N(T,A,q,le);case w:return A=A.get(q.key===null?C:q.key)||null,D(T,A,q,le);case de:var Ee=q._init;return q=Ee(q._payload),H(A,T,C,q,le)}if(ze(q)||Ue(q))return A=A.get(C)||null,k(T,A,q,le,null);if(typeof q.then=="function")return H(A,T,C,Nu(q),le);if(q.$$typeof===L)return H(A,T,C,du(T,q),le);wu(T,q)}return null}function ge(A,T,C,q){for(var le=null,Ee=null,oe=T,pe=T=0,Et=null;oe!==null&&pe<C.length;pe++){oe.index>pe?(Et=oe,oe=null):Et=oe.sibling;var Me=R(A,oe,C[pe],q);if(Me===null){oe===null&&(oe=Et);break}e&&oe&&Me.alternate===null&&t(A,oe),T=o(Me,T,pe),Ee===null?le=Me:Ee.sibling=Me,Ee=Me,oe=Et}if(pe===C.length)return l(A,oe),Ce&&Kl(A,pe),le;if(oe===null){for(;pe<C.length;pe++)oe=P(A,C[pe],q),oe!==null&&(T=o(oe,T,pe),Ee===null?le=oe:Ee.sibling=oe,Ee=oe);return Ce&&Kl(A,pe),le}for(oe=n(oe);pe<C.length;pe++)Et=H(oe,A,pe,C[pe],q),Et!==null&&(e&&Et.alternate!==null&&oe.delete(Et.key===null?pe:Et.key),T=o(Et,T,pe),Ee===null?le=Et:Ee.sibling=Et,Ee=Et);return e&&oe.forEach(function(jl){return t(A,jl)}),Ce&&Kl(A,pe),le}function me(A,T,C,q){if(C==null)throw Error(c(151));for(var le=null,Ee=null,oe=T,pe=T=0,Et=null,Me=C.next();oe!==null&&!Me.done;pe++,Me=C.next()){oe.index>pe?(Et=oe,oe=null):Et=oe.sibling;var jl=R(A,oe,Me.value,q);if(jl===null){oe===null&&(oe=Et);break}e&&oe&&jl.alternate===null&&t(A,oe),T=o(jl,T,pe),Ee===null?le=jl:Ee.sibling=jl,Ee=jl,oe=Et}if(Me.done)return l(A,oe),Ce&&Kl(A,pe),le;if(oe===null){for(;!Me.done;pe++,Me=C.next())Me=P(A,Me.value,q),Me!==null&&(T=o(Me,T,pe),Ee===null?le=Me:Ee.sibling=Me,Ee=Me);return Ce&&Kl(A,pe),le}for(oe=n(oe);!Me.done;pe++,Me=C.next())Me=H(oe,A,pe,Me.value,q),Me!==null&&(e&&Me.alternate!==null&&oe.delete(Me.key===null?pe:Me.key),T=o(Me,T,pe),Ee===null?le=Me:Ee.sibling=Me,Ee=Me);return e&&oe.forEach(function(l1){return t(A,l1)}),Ce&&Kl(A,pe),le}function Pe(A,T,C,q){if(typeof C=="object"&&C!==null&&C.type===_&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case S:e:{for(var le=C.key;T!==null;){if(T.key===le){if(le=C.type,le===_){if(T.tag===7){l(A,T.sibling),q=i(T,C.props.children),q.return=A,A=q;break e}}else if(T.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===de&&Ch(le)===T.type){l(A,T.sibling),q=i(T,C.props),Wr(q,C),q.return=A,A=q;break e}l(A,T);break}else t(A,T);T=T.sibling}C.type===_?(q=Zl(C.props.children,A.mode,q,C.key),q.return=A,A=q):(q=ou(C.type,C.key,C.props,null,A.mode,q),Wr(q,C),q.return=A,A=q)}return f(A);case w:e:{for(le=C.key;T!==null;){if(T.key===le)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){l(A,T.sibling),q=i(T,C.children||[]),q.return=A,A=q;break e}else{l(A,T);break}else t(A,T);T=T.sibling}q=ic(C,A.mode,q),q.return=A,A=q}return f(A);case de:return le=C._init,C=le(C._payload),Pe(A,T,C,q)}if(ze(C))return ge(A,T,C,q);if(Ue(C)){if(le=Ue(C),typeof le!="function")throw Error(c(150));return C=le.call(C),me(A,T,C,q)}if(typeof C.then=="function")return Pe(A,T,Nu(C),q);if(C.$$typeof===L)return Pe(A,T,du(A,C),q);wu(A,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,T!==null&&T.tag===6?(l(A,T.sibling),q=i(T,C),q.return=A,A=q):(l(A,T),q=rc(C,A.mode,q),q.return=A,A=q),f(A)):l(A,T)}return function(A,T,C,q){try{Kr=0;var le=Pe(A,T,C,q);return Yn=null,le}catch(oe){if(oe===qr||oe===mu)throw oe;var Ee=Kt(29,oe,null,A.mode);return Ee.lanes=q,Ee.return=A,Ee}finally{}}}var Pn=Dh(!0),Bh=Dh(!1),ma=j(null),Ha=null;function El(e){var t=e.alternate;X(vt,vt.current&1),X(ma,e),Ha===null&&(t===null||Ln.current!==null||t.memoizedState!==null)&&(Ha=e)}function zh(e){if(e.tag===22){if(X(vt,vt.current),X(ma,e),Ha===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ha=e)}}else $l()}function $l(){X(vt,vt.current),X(ma,ma.current)}function Ia(e){Z(ma),Ha===e&&(Ha=null),Z(vt)}var vt=j(0);function Tu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||Ms(l)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Uc(e,t,l,n){t=e.memoizedState,l=l(n,t),l=l==null?t:y({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var kc={enqueueSetState:function(e,t,l){e=e._reactInternals;var n=ea(),i=bl(n);i.payload=t,l!=null&&(i.callback=l),t=Sl(e,i,n),t!==null&&(ta(t,e,n),Pr(t,e,n))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var n=ea(),i=bl(n);i.tag=1,i.payload=t,l!=null&&(i.callback=l),t=Sl(e,i,n),t!==null&&(ta(t,e,n),Pr(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=ea(),n=bl(l);n.tag=2,t!=null&&(n.callback=t),t=Sl(e,n,l),t!==null&&(ta(t,e,l),Pr(t,e,l))}};function Rh(e,t,l,n,i,o,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,f):t.prototype&&t.prototype.isPureReactComponent?!Br(l,n)||!Br(i,o):!0}function Hh(e,t,l,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,n),t.state!==e&&kc.enqueueReplaceState(t,t.state,null)}function ln(e,t){var l=t;if("ref"in t){l={};for(var n in t)n!=="ref"&&(l[n]=t[n])}if(e=e.defaultProps){l===t&&(l=y({},l));for(var i in e)l[i]===void 0&&(l[i]=e[i])}return l}var Mu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function jh(e){Mu(e)}function Lh(e){console.error(e)}function Uh(e){Mu(e)}function Au(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function kh(e,t,l){try{var n=e.onCaughtError;n(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function qc(e,t,l){return l=bl(l),l.tag=3,l.payload={element:null},l.callback=function(){Au(e,t)},l}function qh(e){return e=bl(e),e.tag=3,e}function Yh(e,t,l,n){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var o=n.value;e.payload=function(){return i(o)},e.callback=function(){kh(t,l,n)}}var f=l.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){kh(t,l,n),typeof i!="function"&&(Al===null?Al=new Set([this]):Al.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})})}function ly(e,t,l,n,i){if(l.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=l.alternate,t!==null&&Lr(t,l,i,!0),l=ma.current,l!==null){switch(l.tag){case 13:return Ha===null?fs():l.alternate===null&&it===0&&(it=3),l.flags&=-257,l.flags|=65536,l.lanes=i,n===gc?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([n]):t.add(n),hs(e,n,i)),!1;case 22:return l.flags|=65536,n===gc?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([n]):l.add(n)),hs(e,n,i)),!1}throw Error(c(435,l.tag))}return hs(e,n,i),fs(),!1}if(Ce)return t=ma.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==cc&&(e=Error(c(422),{cause:n}),jr(sa(e,l)))):(n!==cc&&(t=Error(c(423),{cause:n}),jr(sa(t,l))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=sa(n,l),i=qc(e.stateNode,n,i),bc(e,i),it!==4&&(it=2)),!1;var o=Error(c(520),{cause:n});if(o=sa(o,l),ni===null?ni=[o]:ni.push(o),it!==4&&(it=2),t===null)return!0;n=sa(n,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=i&-i,l.lanes|=e,e=qc(l.stateNode,n,e),bc(l,e),!1;case 1:if(t=l.type,o=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Al===null||!Al.has(o))))return l.flags|=65536,i&=-i,l.lanes|=i,i=qh(i),Yh(i,e,l,n),bc(l,i),!1}l=l.return}while(l!==null);return!1}var Ph=Error(c(461)),St=!1;function wt(e,t,l,n){t.child=e===null?Bh(t,null,l,n):Pn(t,e.child,l,n)}function Gh(e,t,l,n,i){l=l.render;var o=t.ref;if("ref"in n){var f={};for(var g in n)g!=="ref"&&(f[g]=n[g])}else f=n;return en(t),n=_c(e,t,l,f,o,i),g=Nc(),e!==null&&!St?(wc(e,t,i),el(e,t,i)):(Ce&&g&&uc(t),t.flags|=1,wt(e,t,n,i),t.child)}function Vh(e,t,l,n,i){if(e===null){var o=l.type;return typeof o=="function"&&!nc(o)&&o.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=o,Xh(e,t,o,n,i)):(e=ou(l.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Fc(e,i)){var f=o.memoizedProps;if(l=l.compare,l=l!==null?l:Br,l(f,n)&&e.ref===t.ref)return el(e,t,i)}return t.flags|=1,e=Qa(o,n),e.ref=t.ref,e.return=t,t.child=e}function Xh(e,t,l,n,i){if(e!==null){var o=e.memoizedProps;if(Br(o,n)&&e.ref===t.ref)if(St=!1,t.pendingProps=n=o,Fc(e,i))(e.flags&131072)!==0&&(St=!0);else return t.lanes=e.lanes,el(e,t,i)}return Yc(e,t,l,n,i)}function Qh(e,t,l){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|l:l,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Zh(e,t,n,l)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hu(t,o!==null?o.cachePool:null),o!==null?Xd(t,o):xc(),zh(t);else return t.lanes=t.childLanes=536870912,Zh(e,t,o!==null?o.baseLanes|l:l,l)}else o!==null?(hu(t,o.cachePool),Xd(t,o),$l(),t.memoizedState=null):(e!==null&&hu(t,null),xc(),$l());return wt(e,t,i,l),t.child}function Zh(e,t,l,n){var i=pc();return i=i===null?null:{parent:gt._currentValue,pool:i},t.memoizedState={baseLanes:l,cachePool:i},e!==null&&hu(t,null),xc(),zh(t),e!==null&&Lr(e,t,n,!0),null}function Ou(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function Yc(e,t,l,n,i){return en(t),l=_c(e,t,l,n,void 0,i),n=Nc(),e!==null&&!St?(wc(e,t,i),el(e,t,i)):(Ce&&n&&uc(t),t.flags|=1,wt(e,t,l,i),t.child)}function Fh(e,t,l,n,i,o){return en(t),t.updateQueue=null,l=Zd(t,n,l,i),Qd(e),n=Nc(),e!==null&&!St?(wc(e,t,o),el(e,t,o)):(Ce&&n&&uc(t),t.flags|=1,wt(e,t,l,o),t.child)}function Kh(e,t,l,n,i){if(en(t),t.stateNode===null){var o=Bn,f=l.contextType;typeof f=="object"&&f!==null&&(o=Bt(f)),o=new l(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=kc,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},vc(t),f=l.contextType,o.context=typeof f=="object"&&f!==null?Bt(f):Bn,o.state=t.memoizedState,f=l.getDerivedStateFromProps,typeof f=="function"&&(Uc(t,l,f,n),o.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&kc.enqueueReplaceState(o,o.state,null),Vr(t,n,o,i),Gr(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var g=t.memoizedProps,N=ln(l,g);o.props=N;var D=o.context,k=l.contextType;f=Bn,typeof k=="object"&&k!==null&&(f=Bt(k));var P=l.getDerivedStateFromProps;k=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(g||D!==f)&&Hh(t,o,n,f),yl=!1;var R=t.memoizedState;o.state=R,Vr(t,n,o,i),Gr(),D=t.memoizedState,g||R!==D||yl?(typeof P=="function"&&(Uc(t,l,P,n),D=t.memoizedState),(N=yl||Rh(t,l,N,n,R,D,f))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=D),o.props=n,o.state=D,o.context=f,n=N):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,yc(e,t),f=t.memoizedProps,k=ln(l,f),o.props=k,P=t.pendingProps,R=o.context,D=l.contextType,N=Bn,typeof D=="object"&&D!==null&&(N=Bt(D)),g=l.getDerivedStateFromProps,(D=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==P||R!==N)&&Hh(t,o,n,N),yl=!1,R=t.memoizedState,o.state=R,Vr(t,n,o,i),Gr();var H=t.memoizedState;f!==P||R!==H||yl||e!==null&&e.dependencies!==null&&fu(e.dependencies)?(typeof g=="function"&&(Uc(t,l,g,n),H=t.memoizedState),(k=yl||Rh(t,l,k,n,R,H,N)||e!==null&&e.dependencies!==null&&fu(e.dependencies))?(D||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,H,N),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,H,N)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=H),o.props=n,o.state=H,o.context=N,n=k):(typeof o.componentDidUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,Ou(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,l=n&&typeof l.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Pn(t,e.child,null,i),t.child=Pn(t,null,l,i)):wt(e,t,l,i),t.memoizedState=o.state,e=t.child):e=el(e,t,i),e}function Wh(e,t,l,n){return Hr(),t.flags|=256,wt(e,t,l,n),t.child}var Pc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(e){return{baseLanes:e,cachePool:Ld()}}function Vc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=pa),e}function Jh(e,t,l){var n=t.pendingProps,i=!1,o=(t.flags&128)!==0,f;if((f=o)||(f=e!==null&&e.memoizedState===null?!1:(vt.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(i?El(t):$l(),Ce){var g=rt,N;if(N=g){e:{for(N=g,g=Ra;N.nodeType!==8;){if(!g){g=null;break e}if(N=Ma(N.nextSibling),N===null){g=null;break e}}g=N}g!==null?(t.memoizedState={dehydrated:g,treeContext:Fl!==null?{id:Za,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},N=Kt(18,null,null,0),N.stateNode=g,N.return=t,t.child=N,Ut=t,rt=null,N=!0):N=!1}N||Jl(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return Ms(g)?t.lanes=32:t.lanes=536870912,null;Ia(t)}return g=n.children,n=n.fallback,i?($l(),i=t.mode,g=Cu({mode:"hidden",children:g},i),n=Zl(n,i,l,null),g.return=t,n.return=t,g.sibling=n,t.child=g,i=t.child,i.memoizedState=Gc(l),i.childLanes=Vc(e,f,l),t.memoizedState=Pc,n):(El(t),Xc(t,g))}if(N=e.memoizedState,N!==null&&(g=N.dehydrated,g!==null)){if(o)t.flags&256?(El(t),t.flags&=-257,t=Qc(e,t,l)):t.memoizedState!==null?($l(),t.child=e.child,t.flags|=128,t=null):($l(),i=n.fallback,g=t.mode,n=Cu({mode:"visible",children:n.children},g),i=Zl(i,g,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Pn(t,e.child,null,l),n=t.child,n.memoizedState=Gc(l),n.childLanes=Vc(e,f,l),t.memoizedState=Pc,t=i);else if(El(t),Ms(g)){if(f=g.nextSibling&&g.nextSibling.dataset,f)var D=f.dgst;f=D,n=Error(c(419)),n.stack="",n.digest=f,jr({value:n,source:null,stack:null}),t=Qc(e,t,l)}else if(St||Lr(e,t,l,!1),f=(l&e.childLanes)!==0,St||f){if(f=Fe,f!==null&&(n=l&-l,n=(n&42)!==0?1:Sn(n),n=(n&(f.suspendedLanes|l))!==0?0:n,n!==0&&n!==N.retryLane))throw N.retryLane=n,Dn(e,n),ta(f,e,n),Ph;g.data==="$?"||fs(),t=Qc(e,t,l)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=N.treeContext,rt=Ma(g.nextSibling),Ut=t,Ce=!0,Wl=null,Ra=!1,e!==null&&(da[ha++]=Za,da[ha++]=Fa,da[ha++]=Fl,Za=e.id,Fa=e.overflow,Fl=t),t=Xc(t,n.children),t.flags|=4096);return t}return i?($l(),i=n.fallback,g=t.mode,N=e.child,D=N.sibling,n=Qa(N,{mode:"hidden",children:n.children}),n.subtreeFlags=N.subtreeFlags&65011712,D!==null?i=Qa(D,i):(i=Zl(i,g,l,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,g=e.child.memoizedState,g===null?g=Gc(l):(N=g.cachePool,N!==null?(D=gt._currentValue,N=N.parent!==D?{parent:D,pool:D}:N):N=Ld(),g={baseLanes:g.baseLanes|l,cachePool:N}),i.memoizedState=g,i.childLanes=Vc(e,f,l),t.memoizedState=Pc,n):(El(t),l=e.child,e=l.sibling,l=Qa(l,{mode:"visible",children:n.children}),l.return=t,l.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=l,t.memoizedState=null,l)}function Xc(e,t){return t=Cu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Cu(e,t){return e=Kt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Qc(e,t,l){return Pn(t,e.child,null,l),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ih(e,t,l){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fc(e.return,t,l)}function Zc(e,t,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:l,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=l,o.tailMode=i)}function em(e,t,l){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(wt(e,t,n.children,l),n=vt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ih(e,l,t);else if(e.tag===19)Ih(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(X(vt,n),i){case"forwards":for(l=t.child,i=null;l!==null;)e=l.alternate,e!==null&&Tu(e)===null&&(i=l),l=l.sibling;l=i,l===null?(i=t.child,t.child=null):(i=l.sibling,l.sibling=null),Zc(t,!1,i,l,o);break;case"backwards":for(l=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Tu(e)===null){t.child=i;break}e=i.sibling,i.sibling=l,l=i,i=e}Zc(t,!0,l,null,o);break;case"together":Zc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),Ml|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(Lr(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,l=Qa(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Qa(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function Fc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fu(e)))}function ny(e,t,l){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),vl(t,gt,e.memoizedState.cache),Hr();break;case 27:case 5:Ot(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:vl(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(El(t),t.flags|=128,null):(l&t.child.childLanes)!==0?Jh(e,t,l):(El(t),e=el(e,t,l),e!==null?e.sibling:null);El(t);break;case 19:var i=(e.flags&128)!==0;if(n=(l&t.childLanes)!==0,n||(Lr(e,t,l,!1),n=(l&t.childLanes)!==0),i){if(n)return em(e,t,l);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(vt,vt.current),n)break;return null;case 22:case 23:return t.lanes=0,Qh(e,t,l);case 24:vl(t,gt,e.memoizedState.cache)}return el(e,t,l)}function tm(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)St=!0;else{if(!Fc(e,l)&&(t.flags&128)===0)return St=!1,ny(e,t,l);St=(e.flags&131072)!==0}else St=!1,Ce&&(t.flags&1048576)!==0&&Cd(t,su,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")nc(n)?(e=ln(n,e),t.tag=1,t=Kh(null,t,n,e,l)):(t.tag=0,t=Yc(null,t,n,e,l));else{if(n!=null){if(i=n.$$typeof,i===J){t.tag=11,t=Gh(null,t,n,e,l);break e}else if(i===ae){t.tag=14,t=Vh(null,t,n,e,l);break e}}throw t=pt(n)||n,Error(c(306,t,""))}}return t;case 0:return Yc(e,t,t.type,t.pendingProps,l);case 1:return n=t.type,i=ln(n,t.pendingProps),Kh(e,t,n,i,l);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;i=o.element,yc(e,t),Vr(t,n,null,l);var f=t.memoizedState;if(n=f.cache,vl(t,gt,n),n!==o.cache&&dc(t,[gt],l,!0),Gr(),n=f.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Wh(e,t,n,l);break e}else if(n!==i){i=sa(Error(c(424)),t),jr(i),t=Wh(e,t,n,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rt=Ma(e.firstChild),Ut=t,Ce=!0,Wl=null,Ra=!0,l=Bh(t,null,n,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Hr(),n===i){t=el(e,t,l);break e}wt(e,t,n,l)}t=t.child}return t;case 26:return Ou(e,t),e===null?(l=r0(t.type,null,t.pendingProps,null))?t.memoizedState=l:Ce||(l=t.type,e=t.pendingProps,n=Vu(ue.current).createElement(l),n[at]=t,n[Ct]=e,Mt(n,l,e),ft(n),t.stateNode=n):t.memoizedState=r0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ot(t),e===null&&Ce&&(n=t.stateNode=a0(t.type,t.pendingProps,ue.current),Ut=t,Ra=!0,i=rt,Dl(t.type)?(As=i,rt=Ma(n.firstChild)):rt=i),wt(e,t,t.pendingProps.children,l),Ou(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((i=n=rt)&&(n=Dy(n,t.type,t.pendingProps,Ra),n!==null?(t.stateNode=n,Ut=t,rt=Ma(n.firstChild),Ra=!1,i=!0):i=!1),i||Jl(t)),Ot(t),i=t.type,o=t.pendingProps,f=e!==null?e.memoizedProps:null,n=o.children,Ns(i,o)?n=null:f!==null&&Ns(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=_c(e,t,Kv,null,null,l),hi._currentValue=i),Ou(e,t),wt(e,t,n,l),t.child;case 6:return e===null&&Ce&&((e=l=rt)&&(l=By(l,t.pendingProps,Ra),l!==null?(t.stateNode=l,Ut=t,rt=null,e=!0):e=!1),e||Jl(t)),null;case 13:return Jh(e,t,l);case 4:return ye(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Pn(t,null,n,l):wt(e,t,n,l),t.child;case 11:return Gh(e,t,t.type,t.pendingProps,l);case 7:return wt(e,t,t.pendingProps,l),t.child;case 8:return wt(e,t,t.pendingProps.children,l),t.child;case 12:return wt(e,t,t.pendingProps.children,l),t.child;case 10:return n=t.pendingProps,vl(t,t.type,n.value),wt(e,t,n.children,l),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,en(t),i=Bt(i),n=n(i),t.flags|=1,wt(e,t,n,l),t.child;case 14:return Vh(e,t,t.type,t.pendingProps,l);case 15:return Xh(e,t,t.type,t.pendingProps,l);case 19:return em(e,t,l);case 31:return n=t.pendingProps,l=t.mode,n={mode:n.mode,children:n.children},e===null?(l=Cu(n,l),l.ref=t.ref,t.child=l,l.return=t,t=l):(l=Qa(e.child,n),l.ref=t.ref,t.child=l,l.return=t,t=l),t;case 22:return Qh(e,t,l);case 24:return en(t),n=Bt(gt),e===null?(i=pc(),i===null&&(i=Fe,o=hc(),i.pooledCache=o,o.refCount++,o!==null&&(i.pooledCacheLanes|=l),i=o),t.memoizedState={parent:n,cache:i},vc(t),vl(t,gt,i)):((e.lanes&l)!==0&&(yc(e,t),Vr(t,null,null,l),Gr()),i=e.memoizedState,o=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),vl(t,gt,n)):(n=o.cache,vl(t,gt,n),n!==i.cache&&dc(t,[gt],l,!0))),wt(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function tl(e){e.flags|=4}function am(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!s0(t)){if(t=ma.current,t!==null&&((Te&4194048)===Te?Ha!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==Ha))throw Yr=gc,Ud;e.flags|=8192}}function Du(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?la():536870912,e.lanes|=t,Qn|=t)}function Jr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,n=0;if(t)for(var i=e.child;i!==null;)l|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)l|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=l,t}function ry(e,t,l){var n=t.pendingProps;switch(oc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return lt(t),null;case 3:return l=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Wa(gt),et(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?tl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zd())),lt(t),null;case 26:return l=t.memoizedState,e===null?(tl(t),l!==null?(lt(t),am(t,l)):(lt(t),t.flags&=-16777217)):l?l!==e.memoizedState?(tl(t),lt(t),am(t,l)):(lt(t),t.flags&=-16777217):(e.memoizedProps!==n&&tl(t),lt(t),t.flags&=-16777217),null;case 27:Qe(t),l=ue.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return lt(t),null}e=I.current,Rr(t)?Dd(t):(e=a0(i,n,l),t.stateNode=e,tl(t))}return lt(t),null;case 5:if(Qe(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return lt(t),null}if(e=I.current,Rr(t))Dd(t);else{switch(i=Vu(ue.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(l,{is:n.is}):i.createElement(l)}}e[at]=t,e[Ct]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Mt(e,l,n),l){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&tl(t)}}return lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&tl(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=ue.current,Rr(t)){if(e=t.stateNode,l=t.memoizedProps,n=null,i=Ut,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===l||n!==null&&n.suppressHydrationWarning===!0||Fm(e.nodeValue,l)),e||Jl(t)}else e=Vu(e).createTextNode(n),e[at]=t,t.stateNode=e}return lt(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Rr(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[at]=t}else Hr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;lt(t),i=!1}else i=zd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ia(t),t):(Ia(t),null)}if(Ia(t),(t.flags&128)!==0)return t.lanes=l,t;if(l=n!==null,e=e!==null&&e.memoizedState!==null,l){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048)}return l!==e&&l&&(t.child.flags|=8192),Du(t,t.updateQueue),lt(t),null;case 4:return et(),e===null&&Ss(t.stateNode.containerInfo),lt(t),null;case 10:return Wa(t.type),lt(t),null;case 19:if(Z(vt),i=t.memoizedState,i===null)return lt(t),null;if(n=(t.flags&128)!==0,o=i.rendering,o===null)if(n)Jr(i,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Tu(e),o!==null){for(t.flags|=128,Jr(i,!1),e=o.updateQueue,t.updateQueue=e,Du(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)Od(l,e),l=l.sibling;return X(vt,vt.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ke()>Ru&&(t.flags|=128,n=!0,Jr(i,!1),t.lanes=4194304)}else{if(!n)if(e=Tu(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Du(t,e),Jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ce)return lt(t),null}else 2*Ke()-i.renderingStartTime>Ru&&l!==536870912&&(t.flags|=128,n=!0,Jr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ke(),t.sibling=null,e=vt.current,X(vt,n?e&1|2:e&1),t):(lt(t),null);case 22:case 23:return Ia(t),Ec(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(l&536870912)!==0&&(t.flags&128)===0&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),l=t.updateQueue,l!==null&&Du(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==l&&(t.flags|=2048),e!==null&&Z(tn),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Wa(gt),lt(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function iy(e,t){switch(oc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wa(gt),et(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qe(t),null;case 13:if(Ia(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(vt),null;case 4:return et(),null;case 10:return Wa(t.type),null;case 22:case 23:return Ia(t),Ec(),e!==null&&Z(tn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Wa(gt),null;case 25:return null;default:return null}}function lm(e,t){switch(oc(t),t.tag){case 3:Wa(gt),et();break;case 26:case 27:case 5:Qe(t);break;case 4:et();break;case 13:Ia(t);break;case 19:Z(vt);break;case 10:Wa(t.type);break;case 22:case 23:Ia(t),Ec(),e!==null&&Z(tn);break;case 24:Wa(gt)}}function Ir(e,t){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){n=void 0;var o=l.create,f=l.inst;n=o(),f.destroy=n}l=l.next}while(l!==i)}}catch(g){Ve(t,t.return,g)}}function _l(e,t,l){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){var f=n.inst,g=f.destroy;if(g!==void 0){f.destroy=void 0,i=t;var N=l,D=g;try{D()}catch(k){Ve(i,N,k)}}}n=n.next}while(n!==o)}}catch(k){Ve(t,t.return,k)}}function nm(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Vd(t,l)}catch(n){Ve(e,e.return,n)}}}function rm(e,t,l){l.props=ln(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(n){Ve(e,t,n)}}function ei(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof l=="function"?e.refCleanup=l(n):l.current=n}}catch(i){Ve(e,t,i)}}function ja(e,t){var l=e.ref,n=e.refCleanup;if(l!==null)if(typeof n=="function")try{n()}catch(i){Ve(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){Ve(e,t,i)}else l.current=null}function im(e){var t=e.type,l=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break e;case"img":l.src?n.src=l.src:l.srcSet&&(n.srcset=l.srcSet)}}catch(i){Ve(e,e.return,i)}}function Kc(e,t,l){try{var n=e.stateNode;Ty(n,e.type,l,t),n[Ct]=t}catch(i){Ve(e,e.return,i)}}function um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dl(e.type)||e.tag===4}function Wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jc(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Gu));else if(n!==4&&(n===27&&Dl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Jc(e,t,l),e=e.sibling;e!==null;)Jc(e,t,l),e=e.sibling}function Bu(e,t,l){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(n!==4&&(n===27&&Dl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(Bu(e,t,l),e=e.sibling;e!==null;)Bu(e,t,l),e=e.sibling}function om(e){var t=e.stateNode,l=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Mt(t,n,l),t[at]=e,t[Ct]=l}catch(o){Ve(e,e.return,o)}}var al=!1,ct=!1,Ic=!1,cm=typeof WeakSet=="function"?WeakSet:Set,xt=null;function uy(e,t){if(e=e.containerInfo,$s=Wu,e=Sd(e),Wo(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var n=l.getSelection&&l.getSelection();if(n&&n.rangeCount!==0){l=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{l.nodeType,o.nodeType}catch{l=null;break e}var f=0,g=-1,N=-1,D=0,k=0,P=e,R=null;t:for(;;){for(var H;P!==l||i!==0&&P.nodeType!==3||(g=f+i),P!==o||n!==0&&P.nodeType!==3||(N=f+n),P.nodeType===3&&(f+=P.nodeValue.length),(H=P.firstChild)!==null;)R=P,P=H;for(;;){if(P===e)break t;if(R===l&&++D===i&&(g=f),R===o&&++k===n&&(N=f),(H=P.nextSibling)!==null)break;P=R,R=P.parentNode}P=H}l=g===-1||N===-1?null:{start:g,end:N}}else l=null}l=l||{start:0,end:0}}else l=null;for(_s={focusedElem:e,selectionRange:l},Wu=!1,xt=t;xt!==null;)if(t=xt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,xt=e;else for(;xt!==null;){switch(t=xt,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,l=t,i=o.memoizedProps,o=o.memoizedState,n=l.stateNode;try{var ge=ln(l.type,i,l.elementType===l.type);e=n.getSnapshotBeforeUpdate(ge,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ve(l,l.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Ts(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ts(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,xt=e;break}xt=t.return}}function sm(e,t,l){var n=l.flags;switch(l.tag){case 0:case 11:case 15:Nl(e,l),n&4&&Ir(5,l);break;case 1:if(Nl(e,l),n&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(f){Ve(l,l.return,f)}else{var i=ln(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Ve(l,l.return,f)}}n&64&&nm(l),n&512&&ei(l,l.return);break;case 3:if(Nl(e,l),n&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Vd(e,t)}catch(f){Ve(l,l.return,f)}}break;case 27:t===null&&n&4&&om(l);case 26:case 5:Nl(e,l),t===null&&n&4&&im(l),n&512&&ei(l,l.return);break;case 12:Nl(e,l);break;case 13:Nl(e,l),n&4&&hm(e,l),n&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=gy.bind(null,l),zy(e,l))));break;case 22:if(n=l.memoizedState!==null||al,!n){t=t!==null&&t.memoizedState!==null||ct,i=al;var o=ct;al=n,(ct=t)&&!o?wl(e,l,(l.subtreeFlags&8772)!==0):Nl(e,l),al=i,ct=o}break;case 30:break;default:Nl(e,l)}}function fm(e){var t=e.alternate;t!==null&&(e.alternate=null,fm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Pt=!1;function ll(e,t,l){for(l=l.child;l!==null;)dm(e,t,l),l=l.sibling}function dm(e,t,l){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Da,l)}catch{}switch(l.tag){case 26:ct||ja(l,t),ll(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:ct||ja(l,t);var n=Ie,i=Pt;Dl(l.type)&&(Ie=l.stateNode,Pt=!1),ll(e,t,l),ci(l.stateNode),Ie=n,Pt=i;break;case 5:ct||ja(l,t);case 6:if(n=Ie,i=Pt,Ie=null,ll(e,t,l),Ie=n,Pt=i,Ie!==null)if(Pt)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(l.stateNode)}catch(o){Ve(l,t,o)}else try{Ie.removeChild(l.stateNode)}catch(o){Ve(l,t,o)}break;case 18:Ie!==null&&(Pt?(e=Ie,e0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),vi(e)):e0(Ie,l.stateNode));break;case 4:n=Ie,i=Pt,Ie=l.stateNode.containerInfo,Pt=!0,ll(e,t,l),Ie=n,Pt=i;break;case 0:case 11:case 14:case 15:ct||_l(2,l,t),ct||_l(4,l,t),ll(e,t,l);break;case 1:ct||(ja(l,t),n=l.stateNode,typeof n.componentWillUnmount=="function"&&rm(l,t,n)),ll(e,t,l);break;case 21:ll(e,t,l);break;case 22:ct=(n=ct)||l.memoizedState!==null,ll(e,t,l),ct=n;break;default:ll(e,t,l)}}function hm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vi(e)}catch(l){Ve(t,t.return,l)}}function oy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cm),t;default:throw Error(c(435,e.tag))}}function es(e,t){var l=oy(e);t.forEach(function(n){var i=vy.bind(null,e,n);l.has(n)||(l.add(n),n.then(i,i))})}function Wt(e,t){var l=t.deletions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n],o=e,f=t,g=f;e:for(;g!==null;){switch(g.tag){case 27:if(Dl(g.type)){Ie=g.stateNode,Pt=!1;break e}break;case 5:Ie=g.stateNode,Pt=!1;break e;case 3:case 4:Ie=g.stateNode.containerInfo,Pt=!0;break e}g=g.return}if(Ie===null)throw Error(c(160));dm(o,f,i),Ie=null,Pt=!1,o=i.alternate,o!==null&&(o.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)mm(t,e),t=t.sibling}var Ta=null;function mm(e,t){var l=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wt(t,e),Jt(e),n&4&&(_l(3,e,e.return),Ir(3,e),_l(5,e,e.return));break;case 1:Wt(t,e),Jt(e),n&512&&(ct||l===null||ja(l,l.return)),n&64&&al&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?n:l.concat(n))));break;case 26:var i=Ta;if(Wt(t,e),Jt(e),n&512&&(ct||l===null||ja(l,l.return)),n&4){var o=l!==null?l.memoizedState:null;if(n=e.memoizedState,l===null)if(n===null)if(e.stateNode===null){e:{n=e.type,l=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":o=i.getElementsByTagName("title")[0],(!o||o[Dt]||o[at]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=i.createElement(n),i.head.insertBefore(o,i.querySelector("head > title"))),Mt(o,n,l),o[at]=e,ft(o),n=o;break e;case"link":var f=o0("link","href",i).get(n+(l.href||""));if(f){for(var g=0;g<f.length;g++)if(o=f[g],o.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&o.getAttribute("rel")===(l.rel==null?null:l.rel)&&o.getAttribute("title")===(l.title==null?null:l.title)&&o.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){f.splice(g,1);break t}}o=i.createElement(n),Mt(o,n,l),i.head.appendChild(o);break;case"meta":if(f=o0("meta","content",i).get(n+(l.content||""))){for(g=0;g<f.length;g++)if(o=f[g],o.getAttribute("content")===(l.content==null?null:""+l.content)&&o.getAttribute("name")===(l.name==null?null:l.name)&&o.getAttribute("property")===(l.property==null?null:l.property)&&o.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&o.getAttribute("charset")===(l.charSet==null?null:l.charSet)){f.splice(g,1);break t}}o=i.createElement(n),Mt(o,n,l),i.head.appendChild(o);break;default:throw Error(c(468,n))}o[at]=e,ft(o),n=o}e.stateNode=n}else c0(i,e.type,e.stateNode);else e.stateNode=u0(i,n,e.memoizedProps);else o!==n?(o===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):o.count--,n===null?c0(i,e.type,e.stateNode):u0(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Kc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Wt(t,e),Jt(e),n&512&&(ct||l===null||ja(l,l.return)),l!==null&&n&4&&Kc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Wt(t,e),Jt(e),n&512&&(ct||l===null||ja(l,l.return)),e.flags&32){i=e.stateNode;try{Lt(i,"")}catch(H){Ve(e,e.return,H)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Kc(e,i,l!==null?l.memoizedProps:i)),n&1024&&(Ic=!0);break;case 6:if(Wt(t,e),Jt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,l=e.stateNode;try{l.nodeValue=n}catch(H){Ve(e,e.return,H)}}break;case 3:if(Zu=null,i=Ta,Ta=Xu(t.containerInfo),Wt(t,e),Ta=i,Jt(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(H){Ve(e,e.return,H)}Ic&&(Ic=!1,pm(e));break;case 4:n=Ta,Ta=Xu(e.stateNode.containerInfo),Wt(t,e),Jt(e),Ta=n;break;case 12:Wt(t,e),Jt(e);break;case 13:Wt(t,e),Jt(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(is=Ke()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,es(e,n)));break;case 22:i=e.memoizedState!==null;var N=l!==null&&l.memoizedState!==null,D=al,k=ct;if(al=D||i,ct=k||N,Wt(t,e),ct=k,al=D,Jt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(l===null||N||al||ct||nn(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){N=l=t;try{if(o=N.stateNode,i)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{g=N.stateNode;var P=N.memoizedProps.style,R=P!=null&&P.hasOwnProperty("display")?P.display:null;g.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(H){Ve(N,N.return,H)}}}else if(t.tag===6){if(l===null){N=t;try{N.stateNode.nodeValue=i?"":N.memoizedProps}catch(H){Ve(N,N.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(l=n.retryQueue,l!==null&&(n.retryQueue=null,es(e,l))));break;case 19:Wt(t,e),Jt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,es(e,n)));break;case 30:break;case 21:break;default:Wt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{for(var l,n=e.return;n!==null;){if(um(n)){l=n;break}n=n.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var i=l.stateNode,o=Wc(e);Bu(e,o,i);break;case 5:var f=l.stateNode;l.flags&32&&(Lt(f,""),l.flags&=-33);var g=Wc(e);Bu(e,g,f);break;case 3:case 4:var N=l.stateNode.containerInfo,D=Wc(e);Jc(e,D,N);break;default:throw Error(c(161))}}catch(k){Ve(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sm(e,t.alternate,t),t=t.sibling}function nn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_l(4,t,t.return),nn(t);break;case 1:ja(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&rm(t,t.return,l),nn(t);break;case 27:ci(t.stateNode);case 26:case 5:ja(t,t.return),nn(t);break;case 22:t.memoizedState===null&&nn(t);break;case 30:nn(t);break;default:nn(t)}e=e.sibling}}function wl(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,o=t,f=o.flags;switch(o.tag){case 0:case 11:case 15:wl(i,o,l),Ir(4,o);break;case 1:if(wl(i,o,l),n=o,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(D){Ve(n,n.return,D)}if(n=o,i=n.updateQueue,i!==null){var g=n.stateNode;try{var N=i.shared.hiddenCallbacks;if(N!==null)for(i.shared.hiddenCallbacks=null,i=0;i<N.length;i++)Gd(N[i],g)}catch(D){Ve(n,n.return,D)}}l&&f&64&&nm(o),ei(o,o.return);break;case 27:om(o);case 26:case 5:wl(i,o,l),l&&n===null&&f&4&&im(o),ei(o,o.return);break;case 12:wl(i,o,l);break;case 13:wl(i,o,l),l&&f&4&&hm(i,o);break;case 22:o.memoizedState===null&&wl(i,o,l),ei(o,o.return);break;case 30:break;default:wl(i,o,l)}t=t.sibling}}function ts(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Ur(l))}function as(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ur(e))}function La(e,t,l,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gm(e,t,l,n),t=t.sibling}function gm(e,t,l,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:La(e,t,l,n),i&2048&&Ir(9,t);break;case 1:La(e,t,l,n);break;case 3:La(e,t,l,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ur(e)));break;case 12:if(i&2048){La(e,t,l,n),e=t.stateNode;try{var o=t.memoizedProps,f=o.id,g=o.onPostCommit;typeof g=="function"&&g(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){Ve(t,t.return,N)}}else La(e,t,l,n);break;case 13:La(e,t,l,n);break;case 23:break;case 22:o=t.stateNode,f=t.alternate,t.memoizedState!==null?o._visibility&2?La(e,t,l,n):ti(e,t):o._visibility&2?La(e,t,l,n):(o._visibility|=2,Gn(e,t,l,n,(t.subtreeFlags&10256)!==0)),i&2048&&ts(f,t);break;case 24:La(e,t,l,n),i&2048&&as(t.alternate,t);break;default:La(e,t,l,n)}}function Gn(e,t,l,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,f=t,g=l,N=n,D=f.flags;switch(f.tag){case 0:case 11:case 15:Gn(o,f,g,N,i),Ir(8,f);break;case 23:break;case 22:var k=f.stateNode;f.memoizedState!==null?k._visibility&2?Gn(o,f,g,N,i):ti(o,f):(k._visibility|=2,Gn(o,f,g,N,i)),i&&D&2048&&ts(f.alternate,f);break;case 24:Gn(o,f,g,N,i),i&&D&2048&&as(f.alternate,f);break;default:Gn(o,f,g,N,i)}t=t.sibling}}function ti(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,n=t,i=n.flags;switch(n.tag){case 22:ti(l,n),i&2048&&ts(n.alternate,n);break;case 24:ti(l,n),i&2048&&as(n.alternate,n);break;default:ti(l,n)}t=t.sibling}}var ai=8192;function Vn(e){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)vm(e),e=e.sibling}function vm(e){switch(e.tag){case 26:Vn(e),e.flags&ai&&e.memoizedState!==null&&Qy(Ta,e.memoizedState,e.memoizedProps);break;case 5:Vn(e);break;case 3:case 4:var t=Ta;Ta=Xu(e.stateNode.containerInfo),Vn(e),Ta=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ai,ai=16777216,Vn(e),ai=t):Vn(e));break;default:Vn(e)}}function ym(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function li(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];xt=n,Sm(n,e)}ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bm(e),e=e.sibling}function bm(e){switch(e.tag){case 0:case 11:case 15:li(e),e.flags&2048&&_l(9,e,e.return);break;case 3:li(e);break;case 12:li(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zu(e)):li(e);break;default:li(e)}}function zu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var n=t[l];xt=n,Sm(n,e)}ym(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_l(8,t,t.return),zu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,zu(t));break;default:zu(t)}e=e.sibling}}function Sm(e,t){for(;xt!==null;){var l=xt;switch(l.tag){case 0:case 11:case 15:_l(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var n=l.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ur(l.memoizedState.cache)}if(n=l.child,n!==null)n.return=l,xt=n;else e:for(l=e;xt!==null;){n=xt;var i=n.sibling,o=n.return;if(fm(n),n===l){xt=null;break e}if(i!==null){i.return=o,xt=i;break e}xt=o}}}var cy={getCacheForType:function(e){var t=Bt(gt),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l}},sy=typeof WeakMap=="function"?WeakMap:Map,je=0,Fe=null,$e=null,Te=0,Le=0,It=null,Tl=!1,Xn=!1,ls=!1,nl=0,it=0,Ml=0,rn=0,ns=0,pa=0,Qn=0,ni=null,Gt=null,rs=!1,is=0,Ru=1/0,Hu=null,Al=null,Tt=0,Ol=null,Zn=null,Fn=0,us=0,os=null,xm=null,ri=0,cs=null;function ea(){if((je&2)!==0&&Te!==0)return Te&-Te;if(U.T!==null){var e=Hn;return e!==0?e:gs()}return Pl()}function Em(){pa===0&&(pa=(Te&536870912)===0||Ce?Qt():536870912);var e=ma.current;return e!==null&&(e.flags|=32),pa}function ta(e,t,l){(e===Fe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Kn(e,0),Cl(e,Te,pa,!1)),Zt(e,l),((je&2)===0||e!==Fe)&&(e===Fe&&((je&2)===0&&(rn|=l),it===4&&Cl(e,Te,pa,!1)),Ua(e))}function $m(e,t,l){if((je&6)!==0)throw Error(c(327));var n=!l&&(t&124)===0&&(t&e.expiredLanes)===0||we(e,t),i=n?hy(e,t):ds(e,t,!0),o=n;do{if(i===0){Xn&&!n&&Cl(e,t,0,!1);break}else{if(l=e.current.alternate,o&&!fy(l)){i=ds(e,t,!1),o=!1;continue}if(i===2){if(o=t,e.errorRecoveryDisabledLanes&o)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var g=e;i=ni;var N=g.current.memoizedState.isDehydrated;if(N&&(Kn(g,f).flags|=256),f=ds(g,f,!1),f!==2){if(ls&&!N){g.errorRecoveryDisabledLanes|=o,rn|=o,i=4;break e}o=Gt,Gt=i,o!==null&&(Gt===null?Gt=o:Gt.push.apply(Gt,o))}i=f}if(o=!1,i!==2)continue}}if(i===1){Kn(e,0),Cl(e,t,0,!0);break}e:{switch(n=e,o=i,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Cl(n,t,pa,!Tl);break e;case 2:Gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=is+300-Ke(),10<i)){if(Cl(n,t,pa,!Tl),Vt(n,0,!0)!==0)break e;n.timeoutHandle=Jm(_m.bind(null,n,l,Gt,Hu,rs,t,pa,rn,Qn,Tl,o,2,-0,0),i);break e}_m(n,l,Gt,Hu,rs,t,pa,rn,Qn,Tl,o,0,-0,0)}}break}while(!0);Ua(e)}function _m(e,t,l,n,i,o,f,g,N,D,k,P,R,H){if(e.timeoutHandle=-1,P=t.subtreeFlags,(P&8192||(P&16785408)===16785408)&&(di={stylesheets:null,count:0,unsuspend:Xy},vm(t),P=Zy(),P!==null)){e.cancelPendingCommit=P(Cm.bind(null,e,t,o,l,n,i,f,g,N,k,1,R,H)),Cl(e,o,f,!D);return}Cm(e,t,o,l,n,i,f,g,N)}function fy(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var n=0;n<l.length;n++){var i=l[n],o=i.getSnapshot;i=i.value;try{if(!Ft(o(),i))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t,l,n){t&=~ns,t&=~rn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var o=31-st(i),f=1<<o;n[o]=-1,i&=~f}l!==0&&ra(e,l,t)}function ju(){return(je&6)===0?(ii(0),!1):!0}function ss(){if($e!==null){if(Le===0)var e=$e.return;else e=$e,Ka=Il=null,Tc(e),Yn=null,Kr=0,e=$e;for(;e!==null;)lm(e.alternate,e),e=e.return;$e=null}}function Kn(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Ay(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),ss(),Fe=e,$e=l=Qa(e.current,null),Te=t,Le=0,It=null,Tl=!1,Xn=we(e,t),ls=!1,Qn=pa=ns=rn=Ml=it=0,Gt=ni=null,rs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-st(n),o=1<<i;t|=e[i],n&=~o}return nl=t,ru(),l}function Nm(e,t){xe=null,U.H=_u,t===qr||t===mu?(t=Yd(),Le=3):t===Ud?(t=Yd(),Le=4):Le=t===Ph?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,It=t,$e===null&&(it=1,Au(e,sa(t,e.current)))}function wm(){var e=U.H;return U.H=_u,e===null?_u:e}function Tm(){var e=U.A;return U.A=cy,e}function fs(){it=4,Tl||(Te&4194048)!==Te&&ma.current!==null||(Xn=!0),(Ml&134217727)===0&&(rn&134217727)===0||Fe===null||Cl(Fe,Te,pa,!1)}function ds(e,t,l){var n=je;je|=2;var i=wm(),o=Tm();(Fe!==e||Te!==t)&&(Hu=null,Kn(e,t)),t=!1;var f=it;e:do try{if(Le!==0&&$e!==null){var g=$e,N=It;switch(Le){case 8:ss(),f=6;break e;case 3:case 2:case 9:case 6:ma.current===null&&(t=!0);var D=Le;if(Le=0,It=null,Wn(e,g,N,D),l&&Xn){f=0;break e}break;default:D=Le,Le=0,It=null,Wn(e,g,N,D)}}dy(),f=it;break}catch(k){Nm(e,k)}while(!0);return t&&e.shellSuspendCounter++,Ka=Il=null,je=n,U.H=i,U.A=o,$e===null&&(Fe=null,Te=0,ru()),f}function dy(){for(;$e!==null;)Mm($e)}function hy(e,t){var l=je;je|=2;var n=wm(),i=Tm();Fe!==e||Te!==t?(Hu=null,Ru=Ke()+500,Kn(e,t)):Xn=we(e,t);e:do try{if(Le!==0&&$e!==null){t=$e;var o=It;t:switch(Le){case 1:Le=0,It=null,Wn(e,t,o,1);break;case 2:case 9:if(kd(o)){Le=0,It=null,Am(t);break}t=function(){Le!==2&&Le!==9||Fe!==e||(Le=7),Ua(e)},o.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:kd(o)?(Le=0,It=null,Am(t)):(Le=0,It=null,Wn(e,t,o,7));break;case 5:var f=null;switch($e.tag){case 26:f=$e.memoizedState;case 5:case 27:var g=$e;if(!f||s0(f)){Le=0,It=null;var N=g.sibling;if(N!==null)$e=N;else{var D=g.return;D!==null?($e=D,Lu(D)):$e=null}break t}}Le=0,It=null,Wn(e,t,o,5);break;case 6:Le=0,It=null,Wn(e,t,o,6);break;case 8:ss(),it=6;break e;default:throw Error(c(462))}}my();break}catch(k){Nm(e,k)}while(!0);return Ka=Il=null,U.H=n,U.A=i,je=l,$e!==null?0:(Fe=null,Te=0,ru(),it)}function my(){for(;$e!==null&&!ba();)Mm($e)}function Mm(e){var t=tm(e.alternate,e,nl);e.memoizedProps=e.pendingProps,t===null?Lu(e):$e=t}function Am(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Fh(l,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Fh(l,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:Tc(t);default:lm(l,t),t=$e=Od(t,nl),t=tm(l,t,nl)}e.memoizedProps=e.pendingProps,t===null?Lu(e):$e=t}function Wn(e,t,l,n){Ka=Il=null,Tc(t),Yn=null,Kr=0;var i=t.return;try{if(ly(e,i,t,l,Te)){it=1,Au(e,sa(l,e.current)),$e=null;return}}catch(o){if(i!==null)throw $e=i,o;it=1,Au(e,sa(l,e.current)),$e=null;return}t.flags&32768?(Ce||n===1?e=!0:Xn||(Te&536870912)!==0?e=!1:(Tl=e=!0,(n===2||n===9||n===3||n===6)&&(n=ma.current,n!==null&&n.tag===13&&(n.flags|=16384))),Om(t,e)):Lu(t)}function Lu(e){var t=e;do{if((t.flags&32768)!==0){Om(t,Tl);return}e=t.return;var l=ry(t.alternate,t,nl);if(l!==null){$e=l;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);it===0&&(it=5)}function Om(e,t){do{var l=iy(e.alternate,e);if(l!==null){l.flags&=32767,$e=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){$e=e;return}$e=e=l}while(e!==null);it=6,$e=null}function Cm(e,t,l,n,i,o,f,g,N){e.cancelPendingCommit=null;do Uu();while(Tt!==0);if((je&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=ac,fl(e,l,o,f,g,N),e===Fe&&($e=Fe=null,Te=0),Zn=t,Ol=e,Fn=l,us=o,os=i,xm=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yy(nt,function(){return Hm(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=U.T,U.T=null,i=W.p,W.p=2,f=je,je|=4;try{uy(e,t,l)}finally{je=f,W.p=i,U.T=n}}Tt=1,Dm(),Bm(),zm()}}function Dm(){if(Tt===1){Tt=0;var e=Ol,t=Zn,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=U.T,U.T=null;var n=W.p;W.p=2;var i=je;je|=4;try{mm(t,e);var o=_s,f=Sd(e.containerInfo),g=o.focusedElem,N=o.selectionRange;if(f!==g&&g&&g.ownerDocument&&bd(g.ownerDocument.documentElement,g)){if(N!==null&&Wo(g)){var D=N.start,k=N.end;if(k===void 0&&(k=D),"selectionStart"in g)g.selectionStart=D,g.selectionEnd=Math.min(k,g.value.length);else{var P=g.ownerDocument||document,R=P&&P.defaultView||window;if(R.getSelection){var H=R.getSelection(),ge=g.textContent.length,me=Math.min(N.start,ge),Pe=N.end===void 0?me:Math.min(N.end,ge);!H.extend&&me>Pe&&(f=Pe,Pe=me,me=f);var A=yd(g,me),T=yd(g,Pe);if(A&&T&&(H.rangeCount!==1||H.anchorNode!==A.node||H.anchorOffset!==A.offset||H.focusNode!==T.node||H.focusOffset!==T.offset)){var C=P.createRange();C.setStart(A.node,A.offset),H.removeAllRanges(),me>Pe?(H.addRange(C),H.extend(T.node,T.offset)):(C.setEnd(T.node,T.offset),H.addRange(C))}}}}for(P=[],H=g;H=H.parentNode;)H.nodeType===1&&P.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<P.length;g++){var q=P[g];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Wu=!!$s,_s=$s=null}finally{je=i,W.p=n,U.T=l}}e.current=t,Tt=2}}function Bm(){if(Tt===2){Tt=0;var e=Ol,t=Zn,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=U.T,U.T=null;var n=W.p;W.p=2;var i=je;je|=4;try{sm(e,t.alternate,t)}finally{je=i,W.p=n,U.T=l}}Tt=3}}function zm(){if(Tt===4||Tt===3){Tt=0,_t();var e=Ol,t=Zn,l=Fn,n=xm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Tt=5:(Tt=0,Zn=Ol=null,Rm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Al=null),Ba(l),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Da,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=U.T,i=W.p,W.p=2,U.T=null;try{for(var o=e.onRecoverableError,f=0;f<n.length;f++){var g=n[f];o(g.value,{componentStack:g.stack})}}finally{U.T=t,W.p=i}}(Fn&3)!==0&&Uu(),Ua(e),i=e.pendingLanes,(l&4194090)!==0&&(i&42)!==0?e===cs?ri++:(ri=0,cs=e):ri=0,ii(0)}}function Rm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ur(t)))}function Uu(e){return Dm(),Bm(),zm(),Hm()}function Hm(){if(Tt!==5)return!1;var e=Ol,t=us;us=0;var l=Ba(Fn),n=U.T,i=W.p;try{W.p=32>l?32:l,U.T=null,l=os,os=null;var o=Ol,f=Fn;if(Tt=0,Zn=Ol=null,Fn=0,(je&6)!==0)throw Error(c(331));var g=je;if(je|=4,bm(o.current),gm(o,o.current,f,l),je=g,ii(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Da,o)}catch{}return!0}finally{W.p=i,U.T=n,Rm(e,t)}}function jm(e,t,l){t=sa(l,t),t=qc(e.stateNode,t,2),e=Sl(e,t,2),e!==null&&(Zt(e,2),Ua(e))}function Ve(e,t,l){if(e.tag===3)jm(e,e,l);else for(;t!==null;){if(t.tag===3){jm(t,e,l);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Al===null||!Al.has(n))){e=sa(l,e),l=qh(2),n=Sl(t,l,2),n!==null&&(Yh(l,n,t,e),Zt(n,2),Ua(n));break}}t=t.return}}function hs(e,t,l){var n=e.pingCache;if(n===null){n=e.pingCache=new sy;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(l)||(ls=!0,i.add(l),e=py.bind(null,e,t,l),t.then(e,e))}function py(e,t,l){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Fe===e&&(Te&l)===l&&(it===4||it===3&&(Te&62914560)===Te&&300>Ke()-is?(je&2)===0&&Kn(e,0):ns|=l,Qn===Te&&(Qn=0)),Ua(e)}function Lm(e,t){t===0&&(t=la()),e=Dn(e,t),e!==null&&(Zt(e,t),Ua(e))}function gy(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Lm(e,l)}function vy(e,t){var l=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(l=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Lm(e,l)}function yy(e,t){return Ht(e,t)}var ku=null,Jn=null,ms=!1,qu=!1,ps=!1,un=0;function Ua(e){e!==Jn&&e.next===null&&(Jn===null?ku=Jn=e:Jn=Jn.next=e),qu=!0,ms||(ms=!0,Sy())}function ii(e,t){if(!ps&&qu){ps=!0;do for(var l=!1,n=ku;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var o=0;else{var f=n.suspendedLanes,g=n.pingedLanes;o=(1<<31-st(42|e)+1)-1,o&=i&~(f&~g),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(l=!0,Ym(n,o))}else o=Te,o=Vt(n,n===Fe?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||we(n,o)||(l=!0,Ym(n,o));n=n.next}while(l);ps=!1}}function by(){Um()}function Um(){qu=ms=!1;var e=0;un!==0&&(My()&&(e=un),un=0);for(var t=Ke(),l=null,n=ku;n!==null;){var i=n.next,o=km(n,t);o===0?(n.next=null,l===null?ku=i:l.next=i,i===null&&(Jn=l)):(l=n,(e!==0||(o&3)!==0)&&(qu=!0)),n=i}ii(e)}function km(e,t){for(var l=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var f=31-st(o),g=1<<f,N=i[f];N===-1?((g&l)===0||(g&n)!==0)&&(i[f]=Xt(g,t)):N<=t&&(e.expiredLanes|=g),o&=~g}if(t=Fe,l=Te,l=Vt(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,l===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ca(n),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||we(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(n!==null&&Ca(n),Ba(l)){case 2:case 8:l=tt;break;case 32:l=nt;break;case 268435456:l=bn;break;default:l=nt}return n=qm.bind(null,e),l=Ht(l,n),e.callbackPriority=t,e.callbackNode=l,t}return n!==null&&n!==null&&Ca(n),e.callbackPriority=2,e.callbackNode=null,2}function qm(e,t){if(Tt!==0&&Tt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Uu()&&e.callbackNode!==l)return null;var n=Te;return n=Vt(e,e===Fe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:($m(e,n,t),km(e,Ke()),e.callbackNode!=null&&e.callbackNode===l?qm.bind(null,e):null)}function Ym(e,t){if(Uu())return null;$m(e,t,!0)}function Sy(){Oy(function(){(je&6)!==0?Ht(jt,by):Um()})}function gs(){return un===0&&(un=Qt()),un}function Pm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function Gm(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function xy(e,t,l,n,i){if(t==="submit"&&l&&l.stateNode===i){var o=Pm((i[Ct]||null).action),f=n.submitter;f&&(t=(t=f[Ct]||null)?Pm(t.formAction):f.getAttribute("formAction"),t!==null&&(o=t,f=null));var g=new au("action","action",null,n,i);e.push({event:g,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(un!==0){var N=f?Gm(i,f):new FormData(i);Hc(l,{pending:!0,data:N,method:i.method,action:o},null,N)}}else typeof o=="function"&&(g.preventDefault(),N=f?Gm(i,f):new FormData(i),Hc(l,{pending:!0,data:N,method:i.method,action:o},o,N))},currentTarget:i}]})}}for(var vs=0;vs<tc.length;vs++){var ys=tc[vs],Ey=ys.toLowerCase(),$y=ys[0].toUpperCase()+ys.slice(1);wa(Ey,"on"+$y)}wa($d,"onAnimationEnd"),wa(_d,"onAnimationIteration"),wa(Nd,"onAnimationStart"),wa("dblclick","onDoubleClick"),wa("focusin","onFocus"),wa("focusout","onBlur"),wa(kv,"onTransitionRun"),wa(qv,"onTransitionStart"),wa(Yv,"onTransitionCancel"),wa(wd,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function Vm(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var n=e[l],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var f=n.length-1;0<=f;f--){var g=n[f],N=g.instance,D=g.currentTarget;if(g=g.listener,N!==o&&i.isPropagationStopped())break e;o=g,i.currentTarget=D;try{o(i)}catch(k){Mu(k)}i.currentTarget=null,o=N}else for(f=0;f<n.length;f++){if(g=n[f],N=g.instance,D=g.currentTarget,g=g.listener,N!==o&&i.isPropagationStopped())break e;o=g,i.currentTarget=D;try{o(i)}catch(k){Mu(k)}i.currentTarget=null,o=N}}}}function _e(e,t){var l=t[xn];l===void 0&&(l=t[xn]=new Set);var n=e+"__bubble";l.has(n)||(Xm(t,e,2,!1),l.add(n))}function bs(e,t,l){var n=0;t&&(n|=4),Xm(l,e,n,t)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[Yu]){e[Yu]=!0,Gi.forEach(function(l){l!=="selectionchange"&&(_y.has(l)||bs(l,!1,e),bs(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yu]||(t[Yu]=!0,bs("selectionchange",!1,t))}}function Xm(e,t,l,n){switch(g0(t)){case 2:var i=Wy;break;case 8:i=Jy;break;default:i=zs}l=i.bind(null,t,l,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,l,{capture:!0,passive:i}):e.addEventListener(t,l,!0):i!==void 0?e.addEventListener(t,l,{passive:i}):e.addEventListener(t,l,!1)}function xs(e,t,l,n,i){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var g=n.stateNode.containerInfo;if(g===i)break;if(f===4)for(f=n.return;f!==null;){var N=f.tag;if((N===3||N===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;g!==null;){if(f=Ga(g),f===null)return;if(N=f.tag,N===5||N===6||N===26||N===27){n=o=f;continue e}g=g.parentNode}}n=n.return}If(function(){var D=o,k=ko(l),P=[];e:{var R=Td.get(e);if(R!==void 0){var H=au,ge=e;switch(e){case"keypress":if(eu(l)===0)break e;case"keydown":case"keyup":H=yv;break;case"focusin":ge="focus",H=Xo;break;case"focusout":ge="blur",H=Xo;break;case"beforeblur":case"afterblur":H=Xo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=xv;break;case $d:case _d:case Nd:H=cv;break;case wd:H=$v;break;case"scroll":case"scrollend":H=nv;break;case"wheel":H=Nv;break;case"copy":case"cut":case"paste":H=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=nd;break;case"toggle":case"beforetoggle":H=Tv}var me=(t&4)!==0,Pe=!me&&(e==="scroll"||e==="scrollend"),A=me?R!==null?R+"Capture":null:R;me=[];for(var T=D,C;T!==null;){var q=T;if(C=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||C===null||A===null||(q=wr(T,A),q!=null&&me.push(oi(T,q,C))),Pe)break;T=T.return}0<me.length&&(R=new H(R,ge,null,l,k),P.push({event:R,listeners:me}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",R&&l!==Uo&&(ge=l.relatedTarget||l.fromElement)&&(Ga(ge)||ge[Ea]))break e;if((H||R)&&(R=k.window===k?k:(R=k.ownerDocument)?R.defaultView||R.parentWindow:window,H?(ge=l.relatedTarget||l.toElement,H=D,ge=ge?Ga(ge):null,ge!==null&&(Pe=d(ge),me=ge.tag,ge!==Pe||me!==5&&me!==27&&me!==6)&&(ge=null)):(H=null,ge=D),H!==ge)){if(me=ad,q="onMouseLeave",A="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(me=nd,q="onPointerLeave",A="onPointerEnter",T="pointer"),Pe=H==null?R:Va(H),C=ge==null?R:Va(ge),R=new me(q,T+"leave",H,l,k),R.target=Pe,R.relatedTarget=C,q=null,Ga(k)===D&&(me=new me(A,T+"enter",ge,l,k),me.target=C,me.relatedTarget=Pe,q=me),Pe=q,H&&ge)t:{for(me=H,A=ge,T=0,C=me;C;C=In(C))T++;for(C=0,q=A;q;q=In(q))C++;for(;0<T-C;)me=In(me),T--;for(;0<C-T;)A=In(A),C--;for(;T--;){if(me===A||A!==null&&me===A.alternate)break t;me=In(me),A=In(A)}me=null}else me=null;H!==null&&Qm(P,R,H,me,!1),ge!==null&&Pe!==null&&Qm(P,Pe,ge,me,!0)}}e:{if(R=D?Va(D):window,H=R.nodeName&&R.nodeName.toLowerCase(),H==="select"||H==="input"&&R.type==="file")var le=dd;else if(sd(R))if(hd)le=jv;else{le=Rv;var Ee=zv}else H=R.nodeName,!H||H.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?D&&Lo(D.elementType)&&(le=dd):le=Hv;if(le&&(le=le(e,D))){fd(P,le,l,k);break e}Ee&&Ee(e,R,D),e==="focusout"&&D&&R.type==="number"&&D.memoizedProps.value!=null&&Ge(R,"number",R.value)}switch(Ee=D?Va(D):window,e){case"focusin":(sd(Ee)||Ee.contentEditable==="true")&&(An=Ee,Jo=D,zr=null);break;case"focusout":zr=Jo=An=null;break;case"mousedown":Io=!0;break;case"contextmenu":case"mouseup":case"dragend":Io=!1,xd(P,l,k);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":xd(P,l,k)}var oe;if(Zo)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Mn?od(e,l)&&(pe="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(pe="onCompositionStart");pe&&(rd&&l.locale!=="ko"&&(Mn||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Mn&&(oe=ed()):(gl=k,Po="value"in gl?gl.value:gl.textContent,Mn=!0)),Ee=Pu(D,pe),0<Ee.length&&(pe=new ld(pe,e,null,l,k),P.push({event:pe,listeners:Ee}),oe?pe.data=oe:(oe=cd(l),oe!==null&&(pe.data=oe)))),(oe=Av?Ov(e,l):Cv(e,l))&&(pe=Pu(D,"onBeforeInput"),0<pe.length&&(Ee=new ld("onBeforeInput","beforeinput",null,l,k),P.push({event:Ee,listeners:pe}),Ee.data=oe)),xy(P,e,D,l,k)}Vm(P,t)})}function oi(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Pu(e,t){for(var l=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||o===null||(i=wr(e,l),i!=null&&n.unshift(oi(e,i,o)),i=wr(e,t),i!=null&&n.push(oi(e,i,o))),e.tag===3)return n;e=e.return}return[]}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qm(e,t,l,n,i){for(var o=t._reactName,f=[];l!==null&&l!==n;){var g=l,N=g.alternate,D=g.stateNode;if(g=g.tag,N!==null&&N===n)break;g!==5&&g!==26&&g!==27||D===null||(N=D,i?(D=wr(l,o),D!=null&&f.unshift(oi(l,D,N))):i||(D=wr(l,o),D!=null&&f.push(oi(l,D,N)))),l=l.return}f.length!==0&&e.push({event:t,listeners:f})}var Ny=/\r\n?/g,wy=/\u0000|\uFFFD/g;function Zm(e){return(typeof e=="string"?e:""+e).replace(Ny,`
`).replace(wy,"")}function Fm(e,t){return t=Zm(t),Zm(e)===t}function Gu(){}function Ye(e,t,l,n,i,o){switch(l){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Lt(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Lt(e,""+n);break;case"className":En(e,"class",n);break;case"tabIndex":En(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":En(e,l,n);break;case"style":Nn(e,n,o);break;case"data":if(t!=="object"){En(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ji(""+n),e.setAttribute(l,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(l==="formAction"?(t!=="input"&&Ye(e,t,"name",i.name,i,null),Ye(e,t,"formEncType",i.formEncType,i,null),Ye(e,t,"formMethod",i.formMethod,i,null),Ye(e,t,"formTarget",i.formTarget,i,null)):(Ye(e,t,"encType",i.encType,i,null),Ye(e,t,"method",i.method,i,null),Ye(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(l);break}n=Ji(""+n),e.setAttribute(l,n);break;case"onClick":n!=null&&(e.onclick=Gu);break;case"onScroll":n!=null&&_e("scroll",e);break;case"onScrollEnd":n!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}l=Ji(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""+n):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":n===!0?e.setAttribute(l,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(l,n):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(l,n):e.removeAttribute(l);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(l):e.setAttribute(l,n);break;case"popover":_e("beforetoggle",e),_e("toggle",e),hl(e,"popover",n);break;case"xlinkActuate":_a(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_a(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_a(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_a(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_a(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_a(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_a(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_a(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_a(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":hl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=av.get(l)||l,hl(e,l,n))}}function Es(e,t,l,n,i,o){switch(l){case"style":Nn(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(l=n.__html,l!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=l}}break;case"children":typeof n=="string"?Lt(e,n):(typeof n=="number"||typeof n=="bigint")&&Lt(e,""+n);break;case"onScroll":n!=null&&_e("scroll",e);break;case"onScrollEnd":n!=null&&_e("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Gu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vi.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),t=l.slice(2,i?l.length-7:void 0),o=e[Ct]||null,o=o!=null?o[l]:null,typeof o=="function"&&e.removeEventListener(t,o,i),typeof n=="function")){typeof o!="function"&&o!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,n,i);break e}l in e?e[l]=n:n===!0?e.setAttribute(l,""):hl(e,l,n)}}}function Mt(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var n=!1,i=!1,o;for(o in l)if(l.hasOwnProperty(o)){var f=l[o];if(f!=null)switch(o){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ye(e,t,o,f,l,null)}}i&&Ye(e,t,"srcSet",l.srcSet,l,null),n&&Ye(e,t,"src",l.src,l,null);return;case"input":_e("invalid",e);var g=o=f=i=null,N=null,D=null;for(n in l)if(l.hasOwnProperty(n)){var k=l[n];if(k!=null)switch(n){case"name":i=k;break;case"type":f=k;break;case"checked":N=k;break;case"defaultChecked":D=k;break;case"value":o=k;break;case"defaultValue":g=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:Ye(e,t,n,k,l,null)}}ie(e,o,g,N,D,f,i,!1),_n(e);return;case"select":_e("invalid",e),n=f=o=null;for(i in l)if(l.hasOwnProperty(i)&&(g=l[i],g!=null))switch(i){case"value":o=g;break;case"defaultValue":f=g;break;case"multiple":n=g;default:Ye(e,t,i,g,l,null)}t=o,l=f,e.multiple=!!n,t!=null?ut(e,!!n,t,!1):l!=null&&ut(e,!!n,l,!0);return;case"textarea":_e("invalid",e),o=i=n=null;for(f in l)if(l.hasOwnProperty(f)&&(g=l[f],g!=null))switch(f){case"value":n=g;break;case"defaultValue":i=g;break;case"children":o=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:Ye(e,t,f,g,l,null)}za(e,n,i,o),_n(e);return;case"option":for(N in l)if(l.hasOwnProperty(N)&&(n=l[N],n!=null))switch(N){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ye(e,t,N,n,l,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(n=0;n<ui.length;n++)_e(ui[n],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in l)if(l.hasOwnProperty(D)&&(n=l[D],n!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ye(e,t,D,n,l,null)}return;default:if(Lo(t)){for(k in l)l.hasOwnProperty(k)&&(n=l[k],n!==void 0&&Es(e,t,k,n,l,void 0));return}}for(g in l)l.hasOwnProperty(g)&&(n=l[g],n!=null&&Ye(e,t,g,n,l,null))}function Ty(e,t,l,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,f=null,g=null,N=null,D=null,k=null;for(H in l){var P=l[H];if(l.hasOwnProperty(H)&&P!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":N=P;default:n.hasOwnProperty(H)||Ye(e,t,H,null,n,P)}}for(var R in n){var H=n[R];if(P=l[R],n.hasOwnProperty(R)&&(H!=null||P!=null))switch(R){case"type":o=H;break;case"name":i=H;break;case"checked":D=H;break;case"defaultChecked":k=H;break;case"value":f=H;break;case"defaultValue":g=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:H!==P&&Ye(e,t,R,H,n,P)}}se(e,f,g,N,D,k,o,i);return;case"select":H=f=g=R=null;for(o in l)if(N=l[o],l.hasOwnProperty(o)&&N!=null)switch(o){case"value":break;case"multiple":H=N;default:n.hasOwnProperty(o)||Ye(e,t,o,null,n,N)}for(i in n)if(o=n[i],N=l[i],n.hasOwnProperty(i)&&(o!=null||N!=null))switch(i){case"value":R=o;break;case"defaultValue":g=o;break;case"multiple":f=o;default:o!==N&&Ye(e,t,i,o,n,N)}t=g,l=f,n=H,R!=null?ut(e,!!l,R,!1):!!n!=!!l&&(t!=null?ut(e,!!l,t,!0):ut(e,!!l,l?[]:"",!1));return;case"textarea":H=R=null;for(g in l)if(i=l[g],l.hasOwnProperty(g)&&i!=null&&!n.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ye(e,t,g,null,n,i)}for(f in n)if(i=n[f],o=l[f],n.hasOwnProperty(f)&&(i!=null||o!=null))switch(f){case"value":R=i;break;case"defaultValue":H=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==o&&Ye(e,t,f,i,n,o)}pl(e,R,H);return;case"option":for(var ge in l)if(R=l[ge],l.hasOwnProperty(ge)&&R!=null&&!n.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:Ye(e,t,ge,null,n,R)}for(N in n)if(R=n[N],H=l[N],n.hasOwnProperty(N)&&R!==H&&(R!=null||H!=null))switch(N){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Ye(e,t,N,R,n,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in l)R=l[me],l.hasOwnProperty(me)&&R!=null&&!n.hasOwnProperty(me)&&Ye(e,t,me,null,n,R);for(D in n)if(R=n[D],H=l[D],n.hasOwnProperty(D)&&R!==H&&(R!=null||H!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Ye(e,t,D,R,n,H)}return;default:if(Lo(t)){for(var Pe in l)R=l[Pe],l.hasOwnProperty(Pe)&&R!==void 0&&!n.hasOwnProperty(Pe)&&Es(e,t,Pe,void 0,n,R);for(k in n)R=n[k],H=l[k],!n.hasOwnProperty(k)||R===H||R===void 0&&H===void 0||Es(e,t,k,R,n,H);return}}for(var A in l)R=l[A],l.hasOwnProperty(A)&&R!=null&&!n.hasOwnProperty(A)&&Ye(e,t,A,null,n,R);for(P in n)R=n[P],H=l[P],!n.hasOwnProperty(P)||R===H||R==null&&H==null||Ye(e,t,P,R,n,H)}var $s=null,_s=null;function Vu(e){return e.nodeType===9?e:e.ownerDocument}function Km(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ws=null;function My(){var e=window.event;return e&&e.type==="popstate"?e===ws?!1:(ws=e,!0):(ws=null,!1)}var Jm=typeof setTimeout=="function"?setTimeout:void 0,Ay=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(e){return Im.resolve(null).then(e).catch(Cy)}:Jm;function Cy(e){setTimeout(function(){throw e})}function Dl(e){return e==="head"}function e0(e,t){var l=t,n=0,i=0;do{var o=l.nextSibling;if(e.removeChild(l),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(0<n&&8>n){l=n;var f=e.ownerDocument;if(l&1&&ci(f.documentElement),l&2&&ci(f.body),l&4)for(l=f.head,ci(l),f=l.firstChild;f;){var g=f.nextSibling,N=f.nodeName;f[Dt]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&f.rel.toLowerCase()==="stylesheet"||l.removeChild(f),f=g}}if(i===0){e.removeChild(o),vi(t);return}i--}else l==="$"||l==="$?"||l==="$!"?i++:n=l.charCodeAt(0)-48;else n=0;l=o}while(l);vi(t)}function Ts(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Ts(l),xr(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Dy(e,t,l,n){for(;e.nodeType===1;){var i=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Dt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ma(e.nextSibling),e===null)break}return null}function By(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Ma(e.nextSibling),e===null))return null;return e}function Ms(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zy(e,t){var l=e.ownerDocument;if(e.data!=="$?"||l.readyState==="complete")t();else{var n=function(){t(),l.removeEventListener("DOMContentLoaded",n)};l.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Ma(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var As=null;function t0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(t===0)return e;t--}else l==="/$"&&t++}e=e.previousSibling}return null}function a0(e,t,l){switch(t=Vu(l),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function ci(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xr(e)}var ga=new Map,l0=new Set;function Xu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rl=W.d;W.d={f:Ry,r:Hy,D:jy,C:Ly,L:Uy,m:ky,X:Yy,S:qy,M:Py};function Ry(){var e=rl.f(),t=ju();return e||t}function Hy(e){var t=oa(e);t!==null&&t.tag===5&&t.type==="form"?$h(t):rl.r(e)}var er=typeof document>"u"?null:document;function n0(e,t,l){var n=er;if(n&&typeof t=="string"&&t){var i=F(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),l0.has(i)||(l0.add(i),e={rel:e,crossOrigin:l,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Mt(t,"link",e),ft(t),n.head.appendChild(t)))}}function jy(e){rl.D(e),n0("dns-prefetch",e,null)}function Ly(e,t){rl.C(e,t),n0("preconnect",e,t)}function Uy(e,t,l){rl.L(e,t,l);var n=er;if(n&&e&&t){var i='link[rel="preload"][as="'+F(t)+'"]';t==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+F(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+F(l.imageSizes)+'"]')):i+='[href="'+F(e)+'"]';var o=i;switch(t){case"style":o=tr(e);break;case"script":o=ar(e)}ga.has(o)||(e=y({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),ga.set(o,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(si(o))||t==="script"&&n.querySelector(fi(o))||(t=n.createElement("link"),Mt(t,"link",e),ft(t),n.head.appendChild(t)))}}function ky(e,t){rl.m(e,t);var l=er;if(l&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+F(n)+'"][href="'+F(e)+'"]',o=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ar(e)}if(!ga.has(o)&&(e=y({rel:"modulepreload",href:e},t),ga.set(o,e),l.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(fi(o)))return}n=l.createElement("link"),Mt(n,"link",e),ft(n),l.head.appendChild(n)}}}function qy(e,t,l){rl.S(e,t,l);var n=er;if(n&&e){var i=dl(n).hoistableStyles,o=tr(e);t=t||"default";var f=i.get(o);if(!f){var g={loading:0,preload:null};if(f=n.querySelector(si(o)))g.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},l),(l=ga.get(o))&&Os(e,l);var N=f=n.createElement("link");ft(N),Mt(N,"link",e),N._p=new Promise(function(D,k){N.onload=D,N.onerror=k}),N.addEventListener("load",function(){g.loading|=1}),N.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Qu(f,t,n)}f={type:"stylesheet",instance:f,count:1,state:g},i.set(o,f)}}}function Yy(e,t){rl.X(e,t);var l=er;if(l&&e){var n=dl(l).hoistableScripts,i=ar(e),o=n.get(i);o||(o=l.querySelector(fi(i)),o||(e=y({src:e,async:!0},t),(t=ga.get(i))&&Cs(e,t),o=l.createElement("script"),ft(o),Mt(o,"link",e),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function Py(e,t){rl.M(e,t);var l=er;if(l&&e){var n=dl(l).hoistableScripts,i=ar(e),o=n.get(i);o||(o=l.querySelector(fi(i)),o||(e=y({src:e,async:!0,type:"module"},t),(t=ga.get(i))&&Cs(e,t),o=l.createElement("script"),ft(o),Mt(o,"link",e),l.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(i,o))}}function r0(e,t,l,n){var i=(i=ue.current)?Xu(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=tr(l.href),l=dl(i).hoistableStyles,n=l.get(t),n||(n={type:"style",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=tr(l.href);var o=dl(i).hoistableStyles,f=o.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,f),(o=i.querySelector(si(e)))&&!o._p&&(f.instance=o,f.state.loading=5),ga.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ga.set(e,l),o||Gy(i,e,l,f.state))),t&&n===null)throw Error(c(528,""));return f}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ar(l),l=dl(i).hoistableScripts,n=l.get(t),n||(n={type:"script",instance:null,count:0,state:null},l.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function tr(e){return'href="'+F(e)+'"'}function si(e){return'link[rel="stylesheet"]['+e+"]"}function i0(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Gy(e,t,l,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Mt(t,"link",l),ft(t),e.head.appendChild(t))}function ar(e){return'[src="'+F(e)+'"]'}function fi(e){return"script[async]"+e}function u0(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+F(l.href)+'"]');if(n)return t.instance=n,ft(n),n;var i=y({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ft(n),Mt(n,"style",i),Qu(n,l.precedence,e),t.instance=n;case"stylesheet":i=tr(l.href);var o=e.querySelector(si(i));if(o)return t.state.loading|=4,t.instance=o,ft(o),o;n=i0(l),(i=ga.get(i))&&Os(n,i),o=(e.ownerDocument||e).createElement("link"),ft(o);var f=o;return f._p=new Promise(function(g,N){f.onload=g,f.onerror=N}),Mt(o,"link",n),t.state.loading|=4,Qu(o,l.precedence,e),t.instance=o;case"script":return o=ar(l.src),(i=e.querySelector(fi(o)))?(t.instance=i,ft(i),i):(n=l,(i=ga.get(o))&&(n=y({},l),Cs(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),ft(i),Mt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Qu(n,l.precedence,e));return t.instance}function Qu(e,t,l){for(var n=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,o=i,f=0;f<n.length;f++){var g=n[f];if(g.dataset.precedence===t)o=g;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function Os(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Cs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zu=null;function o0(e,t,l){if(Zu===null){var n=new Map,i=Zu=new Map;i.set(l,n)}else i=Zu,n=i.get(l),n||(n=new Map,i.set(l,n));if(n.has(e))return n;for(n.set(e,null),l=l.getElementsByTagName(e),i=0;i<l.length;i++){var o=l[i];if(!(o[Dt]||o[at]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(t)||"";f=e+f;var g=n.get(f);g?g.push(o):n.set(f,[o])}}return n}function c0(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function Vy(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function s0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var di=null;function Xy(){}function Qy(e,t,l){if(di===null)throw Error(c(475));var n=di;if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=tr(l.href),o=e.querySelector(si(i));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Fu.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,ft(o);return}o=e.ownerDocument||e,l=i0(l),(i=ga.get(i))&&Os(l,i),o=o.createElement("link"),ft(o);var f=o;f._p=new Promise(function(g,N){f.onload=g,f.onerror=N}),Mt(o,"link",l),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Fu.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Zy(){if(di===null)throw Error(c(475));var e=di;return e.stylesheets&&e.count===0&&Ds(e,e.stylesheets),0<e.count?function(t){var l=setTimeout(function(){if(e.stylesheets&&Ds(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l)}}:null}function Fu(){if(this.count--,this.count===0){if(this.stylesheets)Ds(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ku=null;function Ds(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ku=new Map,t.forEach(Fy,e),Ku=null,Fu.call(e))}function Fy(e,t){if(!(t.state.loading&4)){var l=Ku.get(e);if(l)var n=l.get(null);else{l=new Map,Ku.set(e,l);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var f=i[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(l.set(f.dataset.precedence,f),n=f)}n&&l.set(null,n)}i=t.instance,f=i.getAttribute("data-precedence"),o=l.get(f)||n,o===n&&l.set(null,i),l.set(f,i),this.count++,n=Fu.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),o?o.parentNode.insertBefore(i,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:L,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Ky(e,t,l,n,i,o,f,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=na(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.hiddenUpdates=na(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function f0(e,t,l,n,i,o,f,g,N,D,k,P){return e=new Ky(e,t,l,f,g,N,D,P),t=1,o===!0&&(t|=24),o=Kt(3,null,null,t),e.current=o,o.stateNode=e,t=hc(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:l,cache:t},vc(o),e}function d0(e){return e?(e=Bn,e):Bn}function h0(e,t,l,n,i,o){i=d0(i),n.context===null?n.context=i:n.pendingContext=i,n=bl(t),n.payload={element:l},o=o===void 0?null:o,o!==null&&(n.callback=o),l=Sl(e,n,t),l!==null&&(ta(l,e,t),Pr(l,e,t))}function m0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function Bs(e,t){m0(e,t),(e=e.alternate)&&m0(e,t)}function p0(e){if(e.tag===13){var t=Dn(e,67108864);t!==null&&ta(t,e,67108864),Bs(e,67108864)}}var Wu=!0;function Wy(e,t,l,n){var i=U.T;U.T=null;var o=W.p;try{W.p=2,zs(e,t,l,n)}finally{W.p=o,U.T=i}}function Jy(e,t,l,n){var i=U.T;U.T=null;var o=W.p;try{W.p=8,zs(e,t,l,n)}finally{W.p=o,U.T=i}}function zs(e,t,l,n){if(Wu){var i=Rs(n);if(i===null)xs(e,t,n,Ju,l),v0(e,n);else if(e1(i,e,t,l,n))n.stopPropagation();else if(v0(e,n),t&4&&-1<Iy.indexOf(e)){for(;i!==null;){var o=oa(i);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=He(o.pendingLanes);if(f!==0){var g=o;for(g.pendingLanes|=2,g.entangledLanes|=2;f;){var N=1<<31-st(f);g.entanglements[1]|=N,f&=~N}Ua(o),(je&6)===0&&(Ru=Ke()+500,ii(0))}}break;case 13:g=Dn(o,2),g!==null&&ta(g,o,2),ju(),Bs(o,2)}if(o=Rs(n),o===null&&xs(e,t,n,Ju,l),o===i)break;i=o}i!==null&&n.stopPropagation()}else xs(e,t,n,null,l)}}function Rs(e){return e=ko(e),Hs(e)}var Ju=null;function Hs(e){if(Ju=null,e=Ga(e),e!==null){var t=d(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=v(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ju=e,null}function g0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case jt:return 2;case tt:return 8;case nt:case Sa:return 32;case bn:return 268435456;default:return 32}default:return 32}}var js=!1,Bl=null,zl=null,Rl=null,mi=new Map,pi=new Map,Hl=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(e,t){switch(e){case"focusin":case"focusout":Bl=null;break;case"dragenter":case"dragleave":zl=null;break;case"mouseover":case"mouseout":Rl=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function gi(e,t,l,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:l,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=oa(t),t!==null&&p0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function e1(e,t,l,n,i){switch(t){case"focusin":return Bl=gi(Bl,e,t,l,n,i),!0;case"dragenter":return zl=gi(zl,e,t,l,n,i),!0;case"mouseover":return Rl=gi(Rl,e,t,l,n,i),!0;case"pointerover":var o=i.pointerId;return mi.set(o,gi(mi.get(o)||null,e,t,l,n,i)),!0;case"gotpointercapture":return o=i.pointerId,pi.set(o,gi(pi.get(o)||null,e,t,l,n,i)),!0}return!1}function y0(e){var t=Ga(e.target);if(t!==null){var l=d(t);if(l!==null){if(t=l.tag,t===13){if(t=v(l),t!==null){e.blockedOn=t,xa(e.priority,function(){if(l.tag===13){var n=ea();n=Sn(n);var i=Dn(l,n);i!==null&&ta(i,l,n),Bs(l,n)}});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=Rs(e.nativeEvent);if(l===null){l=e.nativeEvent;var n=new l.constructor(l.type,l);Uo=n,l.target.dispatchEvent(n),Uo=null}else return t=oa(l),t!==null&&p0(t),e.blockedOn=l,!1;t.shift()}return!0}function b0(e,t,l){Iu(e)&&l.delete(t)}function t1(){js=!1,Bl!==null&&Iu(Bl)&&(Bl=null),zl!==null&&Iu(zl)&&(zl=null),Rl!==null&&Iu(Rl)&&(Rl=null),mi.forEach(b0),pi.forEach(b0)}function eo(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,t1)))}var to=null;function S0(e){to!==e&&(to=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){to===e&&(to=null);for(var t=0;t<e.length;t+=3){var l=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Hs(n||l)===null)continue;break}var o=oa(l);o!==null&&(e.splice(t,3),t-=3,Hc(o,{pending:!0,data:i,method:l.method,action:n},n,i))}}))}function vi(e){function t(N){return eo(N,e)}Bl!==null&&eo(Bl,e),zl!==null&&eo(zl,e),Rl!==null&&eo(Rl,e),mi.forEach(t),pi.forEach(t);for(var l=0;l<Hl.length;l++){var n=Hl[l];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Hl.length&&(l=Hl[0],l.blockedOn===null);)y0(l),l.blockedOn===null&&Hl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(n=0;n<l.length;n+=3){var i=l[n],o=l[n+1],f=i[Ct]||null;if(typeof o=="function")f||S0(l);else if(f){var g=null;if(o&&o.hasAttribute("formAction")){if(i=o,f=o[Ct]||null)g=f.formAction;else if(Hs(i)!==null)continue}else g=f.action;typeof g=="function"?l[n+1]=g:(l.splice(n,3),n-=3),S0(l)}}}function Ls(e){this._internalRoot=e}ao.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var l=t.current,n=ea();h0(l,n,e,t,null,null)},ao.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;h0(e.current,2,null,e,null,null),ju(),t[Ea]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pl();e={blockedOn:null,target:e,priority:t};for(var l=0;l<Hl.length&&t!==0&&t<Hl[l].priority;l++);Hl.splice(l,0,e),l===0&&y0(e)}};var x0=r.version;if(x0!=="19.1.0")throw Error(c(527,x0,"19.1.0"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var a1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Da=lo.inject(a1),bt=lo}catch{}}return bi.createRoot=function(e,t){if(!s(e))throw Error(c(299));var l=!1,n="",i=jh,o=Lh,f=Uh,g=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=f0(e,1,!1,null,null,l,n,i,o,f,g,null),e[Ea]=t.current,Ss(e),new Ls(t)},bi.hydrateRoot=function(e,t,l){if(!s(e))throw Error(c(299));var n=!1,i="",o=jh,f=Lh,g=Uh,N=null,D=null;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(o=l.onUncaughtError),l.onCaughtError!==void 0&&(f=l.onCaughtError),l.onRecoverableError!==void 0&&(g=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(N=l.unstable_transitionCallbacks),l.formState!==void 0&&(D=l.formState)),t=f0(e,1,!0,t,l??null,n,i,o,f,g,N,D),t.context=d0(null),l=t.current,n=ea(),n=Sn(n),i=bl(n),i.callback=null,Sl(l,i,n),l=n,t.current.lanes=l,Zt(t,l),Ua(t),e[Ea]=t.current,Ss(e),new ao(t)},bi.version="19.1.0",bi}var C0;function d1(){if(C0)return qs.exports;C0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),qs.exports=f1(),qs.exports}var h1=d1(),Rt=function(){return Rt=Object.assign||function(r){for(var u,c=1,s=arguments.length;c<s;c++){u=arguments[c];for(var d in u)Object.prototype.hasOwnProperty.call(u,d)&&(r[d]=u[d])}return r},Rt.apply(this,arguments)};function wi(a,r,u){if(u||arguments.length===2)for(var c=0,s=r.length,d;c<s;c++)(d||!(c in r))&&(d||(d=Array.prototype.slice.call(r,0,c)),d[c]=r[c]);return a.concat(d||Array.prototype.slice.call(r))}var We="-ms-",Ni="-moz-",De="-webkit-",Rp="comm",_o="rule",Tf="decl",m1="@import",Hp="@keyframes",p1="@layer",jp=Math.abs,Mf=String.fromCharCode,ef=Object.assign;function g1(a,r){return $t(a,0)^45?(((r<<2^$t(a,0))<<2^$t(a,1))<<2^$t(a,2))<<2^$t(a,3):0}function Lp(a){return a.trim()}function il(a,r){return(a=r.exec(a))?a[0]:a}function Se(a,r,u){return a.replace(r,u)}function oo(a,r,u){return a.indexOf(r,u)}function $t(a,r){return a.charCodeAt(r)|0}function or(a,r,u){return a.slice(r,u)}function ka(a){return a.length}function Up(a){return a.length}function $i(a,r){return r.push(a),a}function v1(a,r){return a.map(r).join("")}function D0(a,r){return a.filter(function(u){return!il(u,r)})}var No=1,cr=1,kp=0,va=0,mt=0,gr="";function wo(a,r,u,c,s,d,v,b){return{value:a,root:r,parent:u,type:c,props:s,children:d,line:No,column:cr,length:v,return:"",siblings:b}}function Ll(a,r){return ef(wo("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},r)}function lr(a){for(;a.root;)a=Ll(a.root,{children:[a]});$i(a,a.siblings)}function y1(){return mt}function b1(){return mt=va>0?$t(gr,--va):0,cr--,mt===10&&(cr=1,No--),mt}function Aa(){return mt=va<kp?$t(gr,va++):0,cr++,mt===10&&(cr=1,No++),mt}function fn(){return $t(gr,va)}function co(){return va}function To(a,r){return or(gr,a,r)}function tf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S1(a){return No=cr=1,kp=ka(gr=a),va=0,[]}function x1(a){return gr="",a}function Vs(a){return Lp(To(va-1,af(a===91?a+2:a===40?a+1:a)))}function E1(a){for(;(mt=fn())&&mt<33;)Aa();return tf(a)>2||tf(mt)>3?"":" "}function $1(a,r){for(;--r&&Aa()&&!(mt<48||mt>102||mt>57&&mt<65||mt>70&&mt<97););return To(a,co()+(r<6&&fn()==32&&Aa()==32))}function af(a){for(;Aa();)switch(mt){case a:return va;case 34:case 39:a!==34&&a!==39&&af(mt);break;case 40:a===41&&af(a);break;case 92:Aa();break}return va}function _1(a,r){for(;Aa()&&a+mt!==57;)if(a+mt===84&&fn()===47)break;return"/*"+To(r,va-1)+"*"+Mf(a===47?a:Aa())}function N1(a){for(;!tf(fn());)Aa();return To(a,va)}function w1(a){return x1(so("",null,null,null,[""],a=S1(a),0,[0],a))}function so(a,r,u,c,s,d,v,b,p){for(var m=0,y=0,x=v,S=0,w=0,_=0,B=1,O=1,M=1,z=0,L="",J=s,Q=d,te=c,ae=L;O;)switch(_=z,z=Aa()){case 40:if(_!=108&&$t(ae,x-1)==58){oo(ae+=Se(Vs(z),"&","&\f"),"&\f",jp(m?b[m-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:ae+=Vs(z);break;case 9:case 10:case 13:case 32:ae+=E1(_);break;case 92:ae+=$1(co()-1,7);continue;case 47:switch(fn()){case 42:case 47:$i(T1(_1(Aa(),co()),r,u,p),p);break;default:ae+="/"}break;case 123*B:b[m++]=ka(ae)*M;case 125*B:case 59:case 0:switch(z){case 0:case 125:O=0;case 59+y:M==-1&&(ae=Se(ae,/\f/g,"")),w>0&&ka(ae)-x&&$i(w>32?z0(ae+";",c,u,x-1,p):z0(Se(ae," ","")+";",c,u,x-2,p),p);break;case 59:ae+=";";default:if($i(te=B0(ae,r,u,m,y,s,b,L,J=[],Q=[],x,d),d),z===123)if(y===0)so(ae,r,te,te,J,d,x,b,Q);else switch(S===99&&$t(ae,3)===110?100:S){case 100:case 108:case 109:case 115:so(a,te,te,c&&$i(B0(a,te,te,0,0,s,b,L,s,J=[],x,Q),Q),s,Q,x,b,c?J:Q);break;default:so(ae,te,te,te,[""],Q,0,b,Q)}}m=y=w=0,B=M=1,L=ae="",x=v;break;case 58:x=1+ka(ae),w=_;default:if(B<1){if(z==123)--B;else if(z==125&&B++==0&&b1()==125)continue}switch(ae+=Mf(z),z*B){case 38:M=y>0?1:(ae+="\f",-1);break;case 44:b[m++]=(ka(ae)-1)*M,M=1;break;case 64:fn()===45&&(ae+=Vs(Aa())),S=fn(),y=x=ka(L=ae+=N1(co())),z++;break;case 45:_===45&&ka(ae)==2&&(B=0)}}return d}function B0(a,r,u,c,s,d,v,b,p,m,y,x){for(var S=s-1,w=s===0?d:[""],_=Up(w),B=0,O=0,M=0;B<c;++B)for(var z=0,L=or(a,S+1,S=jp(O=v[B])),J=a;z<_;++z)(J=Lp(O>0?w[z]+" "+L:Se(L,/&\f/g,w[z])))&&(p[M++]=J);return wo(a,r,u,s===0?_o:b,p,m,y,x)}function T1(a,r,u,c){return wo(a,r,u,Rp,Mf(y1()),or(a,2,-2),0,c)}function z0(a,r,u,c,s){return wo(a,r,u,Tf,or(a,0,c),or(a,c+1,-1),c,s)}function qp(a,r,u){switch(g1(a,r)){case 5103:return De+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return De+a+a;case 4789:return Ni+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return De+a+Ni+a+We+a+a;case 5936:switch($t(a,r+11)){case 114:return De+a+We+Se(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return De+a+We+Se(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return De+a+We+Se(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return De+a+We+a+a;case 6165:return De+a+We+"flex-"+a+a;case 5187:return De+a+Se(a,/(\w+).+(:[^]+)/,De+"box-$1$2"+We+"flex-$1$2")+a;case 5443:return De+a+We+"flex-item-"+Se(a,/flex-|-self/g,"")+(il(a,/flex-|baseline/)?"":We+"grid-row-"+Se(a,/flex-|-self/g,""))+a;case 4675:return De+a+We+"flex-line-pack"+Se(a,/align-content|flex-|-self/g,"")+a;case 5548:return De+a+We+Se(a,"shrink","negative")+a;case 5292:return De+a+We+Se(a,"basis","preferred-size")+a;case 6060:return De+"box-"+Se(a,"-grow","")+De+a+We+Se(a,"grow","positive")+a;case 4554:return De+Se(a,/([^-])(transform)/g,"$1"+De+"$2")+a;case 6187:return Se(Se(Se(a,/(zoom-|grab)/,De+"$1"),/(image-set)/,De+"$1"),a,"")+a;case 5495:case 3959:return Se(a,/(image-set\([^]*)/,De+"$1$`$1");case 4968:return Se(Se(a,/(.+:)(flex-)?(.*)/,De+"box-pack:$3"+We+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+De+a+a;case 4200:if(!il(a,/flex-|baseline/))return We+"grid-column-align"+or(a,r)+a;break;case 2592:case 3360:return We+Se(a,"template-","")+a;case 4384:case 3616:return u&&u.some(function(c,s){return r=s,il(c.props,/grid-\w+-end/)})?~oo(a+(u=u[r].value),"span",0)?a:We+Se(a,"-start","")+a+We+"grid-row-span:"+(~oo(u,"span",0)?il(u,/\d+/):+il(u,/\d+/)-+il(a,/\d+/))+";":We+Se(a,"-start","")+a;case 4896:case 4128:return u&&u.some(function(c){return il(c.props,/grid-\w+-start/)})?a:We+Se(Se(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Se(a,/(.+)-inline(.+)/,De+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ka(a)-1-r>6)switch($t(a,r+1)){case 109:if($t(a,r+4)!==45)break;case 102:return Se(a,/(.+:)(.+)-([^]+)/,"$1"+De+"$2-$3$1"+Ni+($t(a,r+3)==108?"$3":"$2-$3"))+a;case 115:return~oo(a,"stretch",0)?qp(Se(a,"stretch","fill-available"),r,u)+a:a}break;case 5152:case 5920:return Se(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,s,d,v,b,p,m){return We+s+":"+d+m+(v?We+s+"-span:"+(b?p:+p-+d)+m:"")+a});case 4949:if($t(a,r+6)===121)return Se(a,":",":"+De)+a;break;case 6444:switch($t(a,$t(a,14)===45?18:11)){case 120:return Se(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+De+($t(a,14)===45?"inline-":"")+"box$3$1"+De+"$2$3$1"+We+"$2box$3")+a;case 100:return Se(a,":",":"+We)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Se(a,"scroll-","scroll-snap-")+a}return a}function vo(a,r){for(var u="",c=0;c<a.length;c++)u+=r(a[c],c,a,r)||"";return u}function M1(a,r,u,c){switch(a.type){case p1:if(a.children.length)break;case m1:case Tf:return a.return=a.return||a.value;case Rp:return"";case Hp:return a.return=a.value+"{"+vo(a.children,c)+"}";case _o:if(!ka(a.value=a.props.join(",")))return""}return ka(u=vo(a.children,c))?a.return=a.value+"{"+u+"}":""}function A1(a){var r=Up(a);return function(u,c,s,d){for(var v="",b=0;b<r;b++)v+=a[b](u,c,s,d)||"";return v}}function O1(a){return function(r){r.root||(r=r.return)&&a(r)}}function C1(a,r,u,c){if(a.length>-1&&!a.return)switch(a.type){case Tf:a.return=qp(a.value,a.length,u);return;case Hp:return vo([Ll(a,{value:Se(a.value,"@","@"+De)})],c);case _o:if(a.length)return v1(u=a.props,function(s){switch(il(s,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(Ll(a,{props:[Se(s,/:(read-\w+)/,":"+Ni+"$1")]})),lr(Ll(a,{props:[s]})),ef(a,{props:D0(u,c)});break;case"::placeholder":lr(Ll(a,{props:[Se(s,/:(plac\w+)/,":"+De+"input-$1")]})),lr(Ll(a,{props:[Se(s,/:(plac\w+)/,":"+Ni+"$1")]})),lr(Ll(a,{props:[Se(s,/:(plac\w+)/,We+"input-$1")]})),lr(Ll(a,{props:[s]})),ef(a,{props:D0(u,c)});break}return""})}}var D1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},aa={},sr=typeof process<"u"&&aa!==void 0&&(aa.REACT_APP_SC_ATTR||aa.SC_ATTR)||"data-styled",Yp="active",Pp="data-styled-version",Mo="6.1.19",Af=`/*!sc*/
`,yo=typeof window<"u"&&typeof document<"u",B1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&aa!==void 0&&aa.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&aa.REACT_APP_SC_DISABLE_SPEEDY!==""?aa.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&aa.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&aa!==void 0&&aa.SC_DISABLE_SPEEDY!==void 0&&aa.SC_DISABLE_SPEEDY!==""&&aa.SC_DISABLE_SPEEDY!=="false"&&aa.SC_DISABLE_SPEEDY),Ao=Object.freeze([]),fr=Object.freeze({});function z1(a,r,u){return u===void 0&&(u=fr),a.theme!==u.theme&&a.theme||r||u.theme}var Gp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),R1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H1=/(^-|-$)/g;function R0(a){return a.replace(R1,"-").replace(H1,"")}var j1=/(a)(d)/gi,no=52,H0=function(a){return String.fromCharCode(a+(a>25?39:97))};function lf(a){var r,u="";for(r=Math.abs(a);r>no;r=r/no|0)u=H0(r%no)+u;return(H0(r%no)+u).replace(j1,"$1-$2")}var Xs,Vp=5381,nr=function(a,r){for(var u=r.length;u;)a=33*a^r.charCodeAt(--u);return a},Xp=function(a){return nr(Vp,a)};function Qp(a){return lf(Xp(a)>>>0)}function L1(a){return a.displayName||a.name||"Component"}function Qs(a){return typeof a=="string"&&!0}var Zp=typeof Symbol=="function"&&Symbol.for,Fp=Zp?Symbol.for("react.memo"):60115,U1=Zp?Symbol.for("react.forward_ref"):60112,k1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y1=((Xs={})[U1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xs[Fp]=Kp,Xs);function j0(a){return("type"in(r=a)&&r.type.$$typeof)===Fp?Kp:"$$typeof"in a?Y1[a.$$typeof]:k1;var r}var P1=Object.defineProperty,G1=Object.getOwnPropertyNames,L0=Object.getOwnPropertySymbols,V1=Object.getOwnPropertyDescriptor,X1=Object.getPrototypeOf,U0=Object.prototype;function Wp(a,r,u){if(typeof r!="string"){if(U0){var c=X1(r);c&&c!==U0&&Wp(a,c,u)}var s=G1(r);L0&&(s=s.concat(L0(r)));for(var d=j0(a),v=j0(r),b=0;b<s.length;++b){var p=s[b];if(!(p in q1||u&&u[p]||v&&p in v||d&&p in d)){var m=V1(r,p);try{P1(a,p,m)}catch{}}}}return a}function gn(a){return typeof a=="function"}function Of(a){return typeof a=="object"&&"styledComponentId"in a}function cn(a,r){return a&&r?"".concat(a," ").concat(r):a||r||""}function nf(a,r){if(a.length===0)return"";for(var u=a[0],c=1;c<a.length;c++)u+=a[c];return u}function Ti(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function rf(a,r,u){if(u===void 0&&(u=!1),!u&&!Ti(a)&&!Array.isArray(a))return r;if(Array.isArray(r))for(var c=0;c<r.length;c++)a[c]=rf(a[c],r[c]);else if(Ti(r))for(var c in r)a[c]=rf(a[c],r[c]);return a}function Cf(a,r){Object.defineProperty(a,"toString",{value:r})}function kl(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Q1=function(){function a(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return a.prototype.indexOfGroup=function(r){for(var u=0,c=0;c<r;c++)u+=this.groupSizes[c];return u},a.prototype.insertRules=function(r,u){if(r>=this.groupSizes.length){for(var c=this.groupSizes,s=c.length,d=s;r>=d;)if((d<<=1)<0)throw kl(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(c),this.length=d;for(var v=s;v<d;v++)this.groupSizes[v]=0}for(var b=this.indexOfGroup(r+1),p=(v=0,u.length);v<p;v++)this.tag.insertRule(b,u[v])&&(this.groupSizes[r]++,b++)},a.prototype.clearGroup=function(r){if(r<this.length){var u=this.groupSizes[r],c=this.indexOfGroup(r),s=c+u;this.groupSizes[r]=0;for(var d=c;d<s;d++)this.tag.deleteRule(c)}},a.prototype.getGroup=function(r){var u="";if(r>=this.length||this.groupSizes[r]===0)return u;for(var c=this.groupSizes[r],s=this.indexOfGroup(r),d=s+c,v=s;v<d;v++)u+="".concat(this.tag.getRule(v)).concat(Af);return u},a}(),fo=new Map,bo=new Map,ho=1,ro=function(a){if(fo.has(a))return fo.get(a);for(;bo.has(ho);)ho++;var r=ho++;return fo.set(a,r),bo.set(r,a),r},Z1=function(a,r){ho=r+1,fo.set(a,r),bo.set(r,a)},F1="style[".concat(sr,"][").concat(Pp,'="').concat(Mo,'"]'),K1=new RegExp("^".concat(sr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),W1=function(a,r,u){for(var c,s=u.split(","),d=0,v=s.length;d<v;d++)(c=s[d])&&a.registerName(r,c)},J1=function(a,r){for(var u,c=((u=r.textContent)!==null&&u!==void 0?u:"").split(Af),s=[],d=0,v=c.length;d<v;d++){var b=c[d].trim();if(b){var p=b.match(K1);if(p){var m=0|parseInt(p[1],10),y=p[2];m!==0&&(Z1(y,m),W1(a,y,p[3]),a.getTag().insertRules(m,s)),s.length=0}else s.push(b)}}},k0=function(a){for(var r=document.querySelectorAll(F1),u=0,c=r.length;u<c;u++){var s=r[u];s&&s.getAttribute(sr)!==Yp&&(J1(a,s),s.parentNode&&s.parentNode.removeChild(s))}};function I1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jp=function(a){var r=document.head,u=a||r,c=document.createElement("style"),s=function(b){var p=Array.from(b.querySelectorAll("style[".concat(sr,"]")));return p[p.length-1]}(u),d=s!==void 0?s.nextSibling:null;c.setAttribute(sr,Yp),c.setAttribute(Pp,Mo);var v=I1();return v&&c.setAttribute("nonce",v),u.insertBefore(c,d),c},eb=function(){function a(r){this.element=Jp(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(u){if(u.sheet)return u.sheet;for(var c=document.styleSheets,s=0,d=c.length;s<d;s++){var v=c[s];if(v.ownerNode===u)return v}throw kl(17)}(this.element),this.length=0}return a.prototype.insertRule=function(r,u){try{return this.sheet.insertRule(u,r),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},a.prototype.getRule=function(r){var u=this.sheet.cssRules[r];return u&&u.cssText?u.cssText:""},a}(),tb=function(){function a(r){this.element=Jp(r),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(r,u){if(r<=this.length&&r>=0){var c=document.createTextNode(u);return this.element.insertBefore(c,this.nodes[r]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},a.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},a}(),ab=function(){function a(r){this.rules=[],this.length=0}return a.prototype.insertRule=function(r,u){return r<=this.length&&(this.rules.splice(r,0,u),this.length++,!0)},a.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},a.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},a}(),q0=yo,lb={isServer:!yo,useCSSOMInjection:!B1},Ip=function(){function a(r,u,c){r===void 0&&(r=fr),u===void 0&&(u={});var s=this;this.options=Rt(Rt({},lb),r),this.gs=u,this.names=new Map(c),this.server=!!r.isServer,!this.server&&yo&&q0&&(q0=!1,k0(this)),Cf(this,function(){return function(d){for(var v=d.getTag(),b=v.length,p="",m=function(x){var S=function(M){return bo.get(M)}(x);if(S===void 0)return"continue";var w=d.names.get(S),_=v.getGroup(x);if(w===void 0||!w.size||_.length===0)return"continue";var B="".concat(sr,".g").concat(x,'[id="').concat(S,'"]'),O="";w!==void 0&&w.forEach(function(M){M.length>0&&(O+="".concat(M,","))}),p+="".concat(_).concat(B,'{content:"').concat(O,'"}').concat(Af)},y=0;y<b;y++)m(y);return p}(s)})}return a.registerId=function(r){return ro(r)},a.prototype.rehydrate=function(){!this.server&&yo&&k0(this)},a.prototype.reconstructWithOptions=function(r,u){return u===void 0&&(u=!0),new a(Rt(Rt({},this.options),r),this.gs,u&&this.names||void 0)},a.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(r=function(u){var c=u.useCSSOMInjection,s=u.target;return u.isServer?new ab(s):c?new eb(s):new tb(s)}(this.options),new Q1(r)));var r},a.prototype.hasNameForId=function(r,u){return this.names.has(r)&&this.names.get(r).has(u)},a.prototype.registerName=function(r,u){if(ro(r),this.names.has(r))this.names.get(r).add(u);else{var c=new Set;c.add(u),this.names.set(r,c)}},a.prototype.insertRules=function(r,u,c){this.registerName(r,u),this.getTag().insertRules(ro(r),c)},a.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},a.prototype.clearRules=function(r){this.getTag().clearGroup(ro(r)),this.clearNames(r)},a.prototype.clearTag=function(){this.tag=void 0},a}(),nb=/&/g,rb=/^\s*\/\/.*$/gm;function eg(a,r){return a.map(function(u){return u.type==="rule"&&(u.value="".concat(r," ").concat(u.value),u.value=u.value.replaceAll(",",",".concat(r," ")),u.props=u.props.map(function(c){return"".concat(r," ").concat(c)})),Array.isArray(u.children)&&u.type!=="@keyframes"&&(u.children=eg(u.children,r)),u})}function ib(a){var r,u,c,s=fr,d=s.options,v=d===void 0?fr:d,b=s.plugins,p=b===void 0?Ao:b,m=function(S,w,_){return _.startsWith(u)&&_.endsWith(u)&&_.replaceAll(u,"").length>0?".".concat(r):S},y=p.slice();y.push(function(S){S.type===_o&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(nb,u).replace(c,m))}),v.prefix&&y.push(C1),y.push(M1);var x=function(S,w,_,B){w===void 0&&(w=""),_===void 0&&(_=""),B===void 0&&(B="&"),r=B,u=w,c=new RegExp("\\".concat(u,"\\b"),"g");var O=S.replace(rb,""),M=w1(_||w?"".concat(_," ").concat(w," { ").concat(O," }"):O);v.namespace&&(M=eg(M,v.namespace));var z=[];return vo(M,A1(y.concat(O1(function(L){return z.push(L)})))),z};return x.hash=p.length?p.reduce(function(S,w){return w.name||kl(15),nr(S,w.name)},Vp).toString():"",x}var ub=new Ip,uf=ib(),tg=pn.createContext({shouldForwardProp:void 0,styleSheet:ub,stylis:uf});tg.Consumer;pn.createContext(void 0);function Y0(){return h.useContext(tg)}var ag=function(){function a(r,u){var c=this;this.inject=function(s,d){d===void 0&&(d=uf);var v=c.name+d.hash;s.hasNameForId(c.id,v)||s.insertRules(c.id,v,d(c.rules,v,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=u,Cf(this,function(){throw kl(12,String(c.name))})}return a.prototype.getName=function(r){return r===void 0&&(r=uf),this.name+r.hash},a}(),ob=function(a){return a>="A"&&a<="Z"};function P0(a){for(var r="",u=0;u<a.length;u++){var c=a[u];if(u===1&&c==="-"&&a[0]==="-")return a;ob(c)?r+="-"+c.toLowerCase():r+=c}return r.startsWith("ms-")?"-"+r:r}var lg=function(a){return a==null||a===!1||a===""},ng=function(a){var r,u,c=[];for(var s in a){var d=a[s];a.hasOwnProperty(s)&&!lg(d)&&(Array.isArray(d)&&d.isCss||gn(d)?c.push("".concat(P0(s),":"),d,";"):Ti(d)?c.push.apply(c,wi(wi(["".concat(s," {")],ng(d),!1),["}"],!1)):c.push("".concat(P0(s),": ").concat((r=s,(u=d)==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||r in D1||r.startsWith("--")?String(u).trim():"".concat(u,"px")),";")))}return c};function dn(a,r,u,c){if(lg(a))return[];if(Of(a))return[".".concat(a.styledComponentId)];if(gn(a)){if(!gn(d=a)||d.prototype&&d.prototype.isReactComponent||!r)return[a];var s=a(r);return dn(s,r,u,c)}var d;return a instanceof ag?u?(a.inject(u,c),[a.getName(c)]):[a]:Ti(a)?ng(a):Array.isArray(a)?Array.prototype.concat.apply(Ao,a.map(function(v){return dn(v,r,u,c)})):[a.toString()]}function cb(a){for(var r=0;r<a.length;r+=1){var u=a[r];if(gn(u)&&!Of(u))return!1}return!0}var sb=Xp(Mo),fb=function(){function a(r,u,c){this.rules=r,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&cb(r),this.componentId=u,this.baseHash=nr(sb,u),this.baseStyle=c,Ip.registerId(u)}return a.prototype.generateAndInjectStyles=function(r,u,c){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,u,c):"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&u.hasNameForId(this.componentId,this.staticRulesId))s=cn(s,this.staticRulesId);else{var d=nf(dn(this.rules,r,u,c)),v=lf(nr(this.baseHash,d)>>>0);if(!u.hasNameForId(this.componentId,v)){var b=c(d,".".concat(v),void 0,this.componentId);u.insertRules(this.componentId,v,b)}s=cn(s,v),this.staticRulesId=v}else{for(var p=nr(this.baseHash,c.hash),m="",y=0;y<this.rules.length;y++){var x=this.rules[y];if(typeof x=="string")m+=x;else if(x){var S=nf(dn(x,r,u,c));p=nr(p,S+y),m+=S}}if(m){var w=lf(p>>>0);u.hasNameForId(this.componentId,w)||u.insertRules(this.componentId,w,c(m,".".concat(w),void 0,this.componentId)),s=cn(s,w)}}return s},a}(),Mi=pn.createContext(void 0);Mi.Consumer;function rg(){var a=h.useContext(Mi);if(!a)throw kl(18);return a}function db(a){var r=pn.useContext(Mi),u=h.useMemo(function(){return function(c,s){if(!c)throw kl(14);if(gn(c)){var d=c(s);return d}if(Array.isArray(c)||typeof c!="object")throw kl(8);return s?Rt(Rt({},s),c):c}(a.theme,r)},[a.theme,r]);return a.children?pn.createElement(Mi.Provider,{value:u},a.children):null}var Zs={};function hb(a,r,u){var c=Of(a),s=a,d=!Qs(a),v=r.attrs,b=v===void 0?Ao:v,p=r.componentId,m=p===void 0?function(J,Q){var te=typeof J!="string"?"sc":R0(J);Zs[te]=(Zs[te]||0)+1;var ae="".concat(te,"-").concat(Qp(Mo+te+Zs[te]));return Q?"".concat(Q,"-").concat(ae):ae}(r.displayName,r.parentComponentId):p,y=r.displayName,x=y===void 0?function(J){return Qs(J)?"styled.".concat(J):"Styled(".concat(L1(J),")")}(a):y,S=r.displayName&&r.componentId?"".concat(R0(r.displayName),"-").concat(r.componentId):r.componentId||m,w=c&&s.attrs?s.attrs.concat(b).filter(Boolean):b,_=r.shouldForwardProp;if(c&&s.shouldForwardProp){var B=s.shouldForwardProp;if(r.shouldForwardProp){var O=r.shouldForwardProp;_=function(J,Q){return B(J,Q)&&O(J,Q)}}else _=B}var M=new fb(u,S,c?s.componentStyle:void 0);function z(J,Q){return function(te,ae,de){var ne=te.attrs,he=te.componentStyle,Be=te.defaultProps,Ue=te.foldedComponentIds,Ae=te.styledComponentId,pt=te.target,ze=pn.useContext(Mi),U=Y0(),W=te.shouldForwardProp||U.shouldForwardProp,ee=z1(ae,ze,Be)||fr,K=function(fe,ue,Xe){for(var ye,et=Rt(Rt({},ue),{className:void 0,theme:Xe}),Ot=0;Ot<fe.length;Ot+=1){var Qe=gn(ye=fe[Ot])?ye(et):ye;for(var Re in Qe)et[Re]=Re==="className"?cn(et[Re],Qe[Re]):Re==="style"?Rt(Rt({},et[Re]),Qe[Re]):Qe[Re]}return ue.className&&(et.className=cn(et.className,ue.className)),et}(ne,ae,ee),E=K.as||pt,j={};for(var Z in K)K[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&K.theme===ee||(Z==="forwardedAs"?j.as=K.forwardedAs:W&&!W(Z,E)||(j[Z]=K[Z]));var X=function(fe,ue){var Xe=Y0(),ye=fe.generateAndInjectStyles(ue,Xe.styleSheet,Xe.stylis);return ye}(he,K),I=cn(Ue,Ae);return X&&(I+=" "+X),K.className&&(I+=" "+K.className),j[Qs(E)&&!Gp.has(E)?"class":"className"]=I,de&&(j.ref=de),h.createElement(E,j)}(L,J,Q)}z.displayName=x;var L=pn.forwardRef(z);return L.attrs=w,L.componentStyle=M,L.displayName=x,L.shouldForwardProp=_,L.foldedComponentIds=c?cn(s.foldedComponentIds,s.styledComponentId):"",L.styledComponentId=S,L.target=c?s.target:a,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=c?function(Q){for(var te=[],ae=1;ae<arguments.length;ae++)te[ae-1]=arguments[ae];for(var de=0,ne=te;de<ne.length;de++)rf(Q,ne[de],!0);return Q}({},s.defaultProps,J):J}}),Cf(L,function(){return".".concat(L.styledComponentId)}),d&&Wp(L,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function G0(a,r){for(var u=[a[0]],c=0,s=r.length;c<s;c+=1)u.push(r[c],a[c+1]);return u}var V0=function(a){return Object.assign(a,{isCss:!0})};function Y(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];if(gn(a)||Ti(a))return V0(dn(G0(Ao,wi([a],r,!0))));var c=a;return r.length===0&&c.length===1&&typeof c[0]=="string"?dn(c):V0(dn(G0(c,r)))}function of(a,r,u){if(u===void 0&&(u=fr),!r)throw kl(1,r);var c=function(s){for(var d=[],v=1;v<arguments.length;v++)d[v-1]=arguments[v];return a(r,u,Y.apply(void 0,wi([s],d,!1)))};return c.attrs=function(s){return of(a,r,Rt(Rt({},u),{attrs:Array.prototype.concat(u.attrs,s).filter(Boolean)}))},c.withConfig=function(s){return of(a,r,Rt(Rt({},u),s))},c}var ig=function(a){return of(hb,a)},V=ig;Gp.forEach(function(a){V[a]=ig(a)});function ug(a){for(var r=[],u=1;u<arguments.length;u++)r[u-1]=arguments[u];var c=nf(Y.apply(void 0,wi([a],r,!1))),s=Qp(c);return new ag(s,c)}const mb={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},pb={"Shadow 02":`
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
`},gb={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},X0={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(a,r)=>`Page ${a} of ${r}`,pageSizeSelectLabel:(a,r)=>`Entries ${a} out of ${r}`,itemRangeText:(a,r,u)=>`${a}–${r}  entries out of ${u}`,pageRangeText:a=>`from ${a} ${a===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(a,r,u)=>`${a}–${r} entries out of ${u}`},progressStepper:{renderNextStepName:a=>`Next - ${a}`,stepName:["step","steps"],progressText:(a,r,u)=>`${a} from ${r} ${u}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},vb={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(a,r)=>`Страница ${a} из ${r}`,pageSizeSelectLabel:(a,r)=>`Записей ${a} из ${r}`,itemRangeText:(a,r,u)=>`${a}–${r} записей из ${u}`,pageRangeText:a=>`из ${a} ${a===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(a,r,u)=>`${a}–${r} записей из ${u}`},progressStepper:{renderNextStepName:a=>`Далее - ${a}`,stepName:["шаг","шагов"],progressText:(a,r,u)=>`${a} из ${r} ${u}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:X0,"en-US":{...X0,firstDayOfWeek:0}},Ne=yb();function yb(){return{"Main/XXL":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":Y`
      font-family: var(--admiral-font-family, ${a=>a.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":Y`
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
    `,"Button/S":Y`
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
    `,"Caption/XS":Y`
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
    `,"Header/HL1":Y`
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
    `,"Header/HL2":Y`
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
    `,"Header/HL3":Y`
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
    `,"Header/H1":Y`
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
    `,"Header/H2":Y`
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
    `,"Header/H3":Y`
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
    `,"Header/H4":Y`
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
    `,"Header/H5":Y`
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
    `,"Header/H6":Y`
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
    `,"Subtitle/Subtitle 1":Y`
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
    `,"Subtitle/Subtitle 2":Y`
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
    `,"Subtitle/Subtitle 3":Y`
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
    `,"Body/Body 1 Long":Y`
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
    `,"Body/Body 1 Short":Y`
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
    `,"Body/Body 2 Long":Y`
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
    `,"Body/Body 2 Short":Y`
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
    `,"Button/Button 1":Y`
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
    `,"Button/Button 2":Y`
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
    `,"Caption/Caption 1":Y`
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
    `,"Caption/Caption 2":Y`
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
    `}}const Df={color:mb,shadow:pb,zIndex:gb,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:vb,typography:Ne,fontFamily:"'VTB Group UI', sans-serif"};function dr(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function yn(a){switch(a.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function Q0(a){return a!==null&&!Array.isArray(a)&&typeof a=="object"}const So={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let a=0;a<24;a+=1)So[112+a]="F"+(a+1);for(let a=0;a<26;a+=1){let r=a+65;So[r]=[String.fromCharCode(r+32),String.fromCharCode(r)]}const G={codes:So,getCode(a){return Q0(a)?a.keyCode||a.which||this[a.key]:this[a]},getKey(a){const r=Q0(a);if(r&&a.key)return a.key;let u=So[r?a.keyCode||a.which:a];return Array.isArray(u)&&(u=r?u[a.shiftKey?1:0]:u[0]),u},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};G.Spacebar=G[" "],G.Digit0=G[0],G.Digit1=G[1],G.Digit2=G[2],G.Digit3=G[3],G.Digit4=G[4],G.Digit5=G[5],G.Digit6=G[6],G.Digit7=G[7],G.Digit8=G[8],G.Digit9=G[9],G.Tilde=G["~"],G.GraveAccent=G["`"],G.ExclamationPoint=G["!"],G.AtSign=G["@"],G.PoundSign=G["#"],G.PercentSign=G["%"],G.Caret=G["^"],G.Ampersand=G["&"],G.PlusSign=G["+"],G.MinusSign=G["-"],G.EqualsSign=G["="],G.DivisionSign=G["/"],G.MultiplicationSign=G["*"],G.Comma=G[","],G.Decimal=G["."],G.Colon=G[":"],G.Semicolon=G[";"],G.Pipe=G["|"],G.BackSlash=G["\\"],G.QuestionMark=G["?"],G.SingleQuote=G["'"],G.DoubleQuote=G['"'],G.LeftCurlyBrace=G["{"],G.RightCurlyBrace=G["}"],G.LeftParenthesis=G["("],G.RightParenthesis=G[")"],G.LeftAngleBracket=G["<"],G.RightAngleBracket=G[">"],G.LeftSquareBracket=G["["],G.RightSquareBracket=G["]"];var Z0;function cf(){return cf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},cf.apply(null,arguments)}var bb=function(a){return h.createElement("svg",cf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),Z0||(Z0=h.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};function Bf(a,r){vr(a,r,"data-container",!0)}function og(a,r){vr(a,r,"data-field",!1)}function Sb(a){const r={};return vr(a,r,"data-dropdown-container",!0),r}function cg(a){const r={};return vr(a,r,"data-menu",!0),r}function vr(a,r,u,c){Object.keys(a).forEach(s=>{typeof s=="string"&&s.startsWith(u)&&(r[s]=a[s],c&&delete a[s])})}const xb=V(bb)`
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
`,Oo=a=>{let r=a;return r=r.replace("box-shadow: ",""),r=r.replace(";",""),r},Eb=(a,r)=>{return(u=a,Object.keys(u)).some(c=>a[c]!==r[c]);var u};function sg(a,r){const u={};return{observe(){u.rafId&&cancelAnimationFrame(u.rafId);const c=()=>{if(u.isObserving){const{scrollHeight:s,scrollLeft:d,scrollTop:v,scrollWidth:b}=a,{bottom:p,height:m,left:y,right:x,top:S,width:w,x:_,y:B}=a.getBoundingClientRect(),O={bottom:p,height:m,left:y,right:x,top:S,width:w,x:_||y,y:B||S,scrollHeight:s,scrollLeft:d,scrollTop:v,scrollWidth:b};Eb(O,u.rect||{})&&(u.rect=O,r(O)),u.rafId=requestAnimationFrame(c)}};u.rafId=requestAnimationFrame(c),u.isObserving=!0},unobserve(){u.rafId&&cancelAnimationFrame(u.rafId),u.isObserving&&(u.isObserving=!1)}}}var $b=zp();const _b=V.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:a})=>a.zIndex.dropdown});
`,zf=({targetElement:a,rootRef:r,fullContainerWidth:u,...c})=>{const s=h.useRef(null);return h.useEffect(()=>{const d=s.current;if(d&&a){const v=sg(a,b=>{if(b){const{x:p,y:m,height:y,width:x}=b,{style:S}=d;S.top=`${m}px`,S.left=u?"0px":`${p}px`,S.height=`${y}px`,S.width=u?"100%":`${x}px`}});return v.observe(),()=>{v.unobserve()}}},[a,u]),$b.createPortal($.jsx(_b,{ref:s,...c}),(r==null?void 0:r.current)||document.body)};function Nb(a,r){const u=h.useRef(null),c=h.useRef(a);return h.useEffect(()=>{c.current=a},[a]),h.useEffect(()=>(u.current=setInterval(()=>c.current(),r),()=>clearInterval(u.current||0)),[r]),u}function ya(...a){return r=>{a.forEach(u=>{u&&(typeof u=="function"?u(r):u.current=r)})}}const Ri=h.createContext({}),wb=({rootRef:a,...r})=>{const[u,c]=h.useState([]),[s,d]=h.useState(void 0),v=h.useCallback(x=>{d(x)},[]),b=h.useCallback(x=>{d(S=>S===x?void 0:S)},[]),p=h.useCallback(x=>{c(S=>{const w=S.indexOf(x);return w>-1?S.slice(0,w):S})},[]),m=h.useCallback(x=>{c(S=>[...S,x])},[]),y=h.useMemo(()=>({addDropdown:m,removeDropdown:p,dropdowns:u,rootRef:a,activateMenu:v,deactivateMenu:b,currentActiveMenu:s}),[m,p,u,a,v,b,s]);return $.jsx(Ri.Provider,{value:y,children:r.children})};function fg(a){const{dropdowns:r=[],addDropdown:u,removeDropdown:c,activateMenu:s,deactivateMenu:d,currentActiveMenu:v}=h.useContext(Ri),b=r.indexOf(a);return{addDropdown:u,removeDropdown:c,dropdowns:b>-1?r.slice(b+1,r.length):[],activateMenu:s,deactivateMenu:d,currentActiveMenu:v}}const Tb=(a,r)=>!r.some(u=>u.current&&u.current.contains(a.target)),Mb=(a,r,u)=>{const c=a.bottom-a.top+8,s=r.top>=c,d=u-r.bottom>=c,v=r.top>=0&&r.bottom<=u,b=r.bottom<=0,p=r.top>=u,m=r.top<0&&0<r.bottom&&r.bottom<u,y=0<r.top&&r.top<u&&r.bottom>u;if(v){if(!s&&!d)return{upward:!1,translateY:u-r.bottom-c-16+"px"};if(s&&d)return{upward:!1,translateY:"0"};if(!s&&d)return{upward:!1,translateY:"0"};if(s&&!d)return{upward:!0,translateY:"0"}}else{if(b)return{upward:!1,translateY:0-r.bottom+8+"px"};if(p)return{upward:!0,translateY:u-r.top-8+"px"};if(m)return d?{upward:!1,translateY:"0"}:{upward:!1,translateY:0-r.bottom+8+"px"};if(y)return s?{upward:!0,translateY:"0"}:{upward:!0,translateY:""+(u-r.top-8)}}return{upward:!1,translateY:"0"}},Ab=(a,r,u)=>{const c=a.right-a.left,s=r.left>=0&&r.right<=u,d=r.right<=0,v=r.left>=u,b=r.left<0&&0<r.right&&r.right<u,p=r.right>u&&0<r.left&&r.left<u;if(s){const m=u-r.left>=c,y=r.right>=c,x=c>r.width;if(!y&&!m)return{align:"flex-end",translateX:u-r.right-16+"px"};if(y&&m)return{align:"flex-end",translateX:"0"};if(x&&!y&&m)return{align:"flex-start",translateX:"0"};if(x&&!m&&y)return{align:"flex-end",translateX:"0"}}else{if(d||b)return{align:"flex-start",translateX:0-r.left+16+"px"};if(v||p)return{align:"flex-end",translateX:u-r.right-16+"px"}}return{align:"",translateX:"0"}},Ob=V.div`
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
`,Cb=V.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,Db=V(zf)`
  display: flex;
  flex-direction: ${a=>a.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,Bb=()=>null,Rf=h.forwardRef(({targetElement:a,onClickOutside:r=Bb,className:u="",alignSelf:c,dropContainerCssMixin:s,...d},v)=>{const b=h.useRef(null),[p,m]=h.useState(!1),{rootRef:y}=h.useContext(Ri);h.useLayoutEffect(()=>{var _;b.current!==document.activeElement&&((_=b==null?void 0:b.current)==null||_.focus())},[]);const x=h.useCallback(()=>{const _=b.current;if(_&&a){const B=_.getBoundingClientRect(),O=a.getBoundingClientRect(),M=globalThis.innerHeight,z=globalThis.innerWidth,{upward:L,translateY:J}=Mb(B,O,M);if(p!==L&&m(L),c&&c!=="auto")_.style.transform=`translateY(${J})`;else{const{align:Q,translateX:te}=Ab(B,O,z);_.style.transform=`translate(${te}, ${J})`,_.style.alignSelf=Q}}},[p,a]);Nb(x,100),h.useEffect(()=>{b.current&&(b.current.style.opacity="1")},[]);const[S,w]=h.useState(!1);return h.useEffect(()=>{function _(){w(!0)}return document.addEventListener("mousedown",_,!0),document.addEventListener("touchstart",_,!0),()=>{document.removeEventListener("mousedown",_,!0),document.removeEventListener("touchstart",_,!0)}},[]),h.useEffect(()=>{function _(B){r(B)}if(S)return document.addEventListener("mouseup",_),document.addEventListener("touchend",_),()=>{document.removeEventListener("mouseup",_),document.removeEventListener("touchend",_)}},[S]),$.jsx($.Fragment,{children:$.jsxs(Db,{targetElement:a,$reverse:p,rootRef:y,onMouseDown:()=>w(!1),children:[$.jsx(Cb,{}),$.jsx(Ob,{ref:ya(v,b),...d,className:u+" dropdown-container",$alignSelf:c,$dropContainerCssMixin:s})]})})});Rf.displayName="DropdownContainer";const zb=V(Rf)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>Oo(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>yn(a.theme.shape)});
  overflow: hidden;
  width: max-content;
  background: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
`;zb.displayName="StyledDropdownContainer";function Rb(...a){return r=>a.forEach(u=>function(c,s){typeof c=="function"?c(s):c!=null&&(c.current=s)}(u,r))}function sf(...a){return h.useCallback(Rb(...a),a)}function Hb(a){return h.forwardRef(a)}const jb=Y`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Lb=V.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Ub=V.div`
  ${jb}
`,kb=V.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,qb=V.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,Yb=V.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,Pb=V.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,Gb=V.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,Vb=V.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,Xb=V.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${a=>a.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,Qb=V.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${a=>a.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`,Zb=Hb(({children:a,verticalScrollProps:r,horizontalScrollProps:u,minThumbSize:c=20,contentBlockProps:s={},...d},v)=>{const b=h.useMemo(()=>s.id?s.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[s.id]),[p,m]=h.useState(null),y=sf(s.ref,x=>m(x));return $.jsxs(Lb,{ref:v,...d,children:[$.jsx(Ub,{...s,id:b,ref:y,children:a}),$.jsx(Fb,{contentNode:p,verticalScrollProps:r,horizontalScrollProps:u,minThumbSize:c})]})}),Fb=({verticalScrollProps:a={},horizontalScrollProps:r={},contentNode:u,minThumbSize:c=20})=>{const s=h.useMemo(()=>u!=null&&u.id?u==null?void 0:u.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[u==null?void 0:u.id]),[d,v]=h.useState(null),[b,p]=h.useState(null),[m,y]=h.useState(null),[x,S]=h.useState(null),[w,_]=h.useState(null),[B,O]=h.useState(null),[M,z]=h.useState(!1),[L,J]=h.useState(!1),[Q,te]=h.useState(0),[ae,de]=h.useState(0),[ne,he]=h.useState(0),[Be,Ue]=h.useState(0),[Ae,pt]=h.useState(0),[ze,U]=h.useState(0),W=sf(a.ref,K=>v(K)),ee=sf(r.ref,K=>y(K));return h.useLayoutEffect(()=>{if(u&&w&&B&&d&&m&&b&&x){const{observe:K,unobserve:E}=sg(u,j=>{if(j){const Z=function(_t){const{clientHeight:Ke,scrollHeight:kt}=_t;return kt-Ke>=1}(u),X=function(_t){const{clientWidth:Ke,scrollWidth:kt}=_t;return kt-Ke>=1}(u),I=Math.min(Math.max(0,j.scrollTop),j.scrollHeight-j.height),fe=Math.min(Math.max(0,j.scrollLeft),j.scrollWidth-j.width);u.style.setProperty("--vertical-content-scroll",`${I}px`),u.style.setProperty("--horizontal-content-scroll",`${fe}px`),d.style.setProperty("display",Z?null:"none"),d.style.setProperty("bottom",X?"10px":null),m.style.setProperty("display",X?null:"none"),m.style.setProperty("right",Z?"10px":null);const ue=function(_t,Ke){const{clientHeight:kt,scrollHeight:jt}=_t,{clientHeight:tt}=Ke;return Math.max(Math.round(kt*tt/jt),c)}(u,b),Xe=function(_t,Ke){const{clientWidth:kt,scrollWidth:jt}=_t,{clientWidth:tt}=Ke;return Math.max(Math.round(kt*tt/jt),c)}(u,x);w.style.setProperty("--vertical-thumb-height",`${ue}px`),B.style.setProperty("--horizontal-thumb-width",`${Xe}px`);const{scrollTop:ye,scrollLeft:et,scrollHeight:Ot,scrollWidth:Qe}=u,{clientHeight:Re}=b,{clientWidth:Ht}=x,Ca=Math.round(Math.min(ye/Ot*Re,Re-ue)),ba=Math.round(Math.min(et/Qe*Ht,Ht-Xe));w.style.top=`${Ca}px`,B.style.left=`${ba}px`}});return K(),E}},[u,w,B,d,m,b,x]),h.useEffect(()=>{function K(j){j.preventDefault(),j.stopPropagation(),M&&z(!1),L&&J(!1)}function E(j){if(u){if(j.preventDefault(),j.stopPropagation(),M){const{scrollHeight:Z,clientHeight:X}=u,I=(j.clientY-Q)*(Z/X),fe=Math.round(Math.min(ne+I,Z-X));u.scrollTop=fe}if(L){const{scrollWidth:Z,clientWidth:X}=u,I=(j.clientX-ae)*(Z/X),fe=Math.round(Math.min(Be+I,Z-X));u.scrollLeft=fe}}}if(M||L)return document.addEventListener("mousemove",E),document.addEventListener("mouseup",K),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",K)}},[u,M,L,ne,Be,Q,ae]),h.useEffect(()=>{if(u){const{scrollHeight:K,clientHeight:E}=u,j=Math.round(Ae*K-E/2);u.scrollTo({top:j,behavior:"smooth"})}},[Ae]),h.useEffect(()=>{if(u){const{scrollWidth:K,clientWidth:E}=u,j=Math.round(ze*K-E/2);u.scrollTo({left:j,behavior:"smooth"})}},[ze]),h.useEffect(()=>{document.body.style.setProperty("cursor",M||L?"grabbing":null)},[M,L]),$.jsxs($.Fragment,{children:[$.jsxs(kb,{...a,ref:W,role:"scrollbar","aria-controls":s,children:[$.jsx(Xb,{onClick:function(K){if(K.preventDefault(),K.stopPropagation(),u){const{clientHeight:E}=u,{top:j}=u.getBoundingClientRect();pt((K.clientY-j)/E)}}}),$.jsx(Yb,{ref:K=>p(K),children:$.jsx(Qb,{ref:_,onMouseDown:function(K){K.preventDefault(),K.stopPropagation(),te(K.clientY),u&&he(u.scrollTop),z(!0)},style:{cursor:M?"grabbing":"grab"}})})]}),$.jsxs(qb,{...r,ref:ee,role:"scrollbar","aria-controls":s,children:[$.jsx(Gb,{onClick:function(K){if(K.preventDefault(),K.stopPropagation(),u){const{clientWidth:E}=u,{left:j}=u.getBoundingClientRect();U((K.clientX-j)/E)}}}),$.jsx(Pb,{ref:K=>S(K),children:$.jsx(Vb,{ref:O,onMouseDown:function(K){K.preventDefault(),K.stopPropagation(),de(K.clientX),u&&Ue(u.scrollLeft),J(!0)},style:{cursor:L?"grabbing":"grab"}})})]})]})},Kb=Y`
  ${({$dimension:a})=>a==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
  ul[data-dimension='s'] & {
    ${Ne["Body/Body 2 Long"]}
  }
`,Wb=Y`
  color: ${({theme:a,$disabled:r})=>r?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
`,Jb=Y`
  background: ${({theme:a,$selected:r,$preselected:u,$hovered:c})=>c?`var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]})`:u?`var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]})`:r?`var(--admiral-color-Opacity_Focus, ${a.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${a.color["Special/Elevated BG"]})`};
`,Ib=Y`
  padding: ${({$dimension:a})=>{switch(a){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;var F0;function ff(){return ff=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},ff.apply(null,arguments)}var eS=function(a){return h.createElement("svg",ff({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),F0||(F0=h.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};const tS=V(eS)`
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
`,aS=a=>{a.preventDefault(),a.stopPropagation()},Hf=h.forwardRef(({children:a,expandIcon:r=$.jsx(tS,{}),hasSubmenu:u,onHover:c,disabled:s,readOnly:d,hovered:v,dimension:b="l",selected:p=!1,preselected:m=!1,selfRef:y,onMouseDown:x,onLeave:S,containerRef:w,..._},B)=>{const O=s?aS:x,M=y?ya(B,y):B;return $.jsxs(lS,{ref:M,$dimension:b,$preselected:m,$selected:p,$hovered:v,"data-preselected":m,"data-hovered":v,"data-disabled":s,"data-readonly":d,"data-dimension":b,onMouseEnter:z=>{var L;c==null||c(z),(L=_.onMouseEnter)==null||L.call(_,z)},onMouseLeave:z=>{var L;S==null||S(z),(L=_.onMouseLeave)==null||L.call(_,z)},onMouseMove:z=>{var L;c==null||c(z),(L=_.onMouseMove)==null||L.call(_,z)},onMouseDown:O,..._,children:[h.Children.toArray(a).map((z,L)=>typeof z=="string"?$.jsx(nS,{children:z},z+L):z),u&&r]})});Hf.displayName="MenuItem";const lS=V.div`
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
  ${Ib}
  ${Kb}
  ${Wb}
  ${Jb}

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
`,nS=V.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;function jf(a){const r=h.useRef();return h.useEffect(()=>{r.current=a}),r.current}const K0=V.div`
  display: flex;
  flex: 0 0 auto;
`,rS=({scrollContainerRef:a,itemHeight:r,rowCount:u=6,aheadItemsCount:c=3,model:s,activeId:d,selected:v,onRenderItem:b})=>{const[p,m]=h.useState(0),[y,x]=h.useState({startIndex:0,endIndex:u,topPadding:"",bottomPadding:"",needAddListener:!1}),S=jf({activeId:d}),w=h.useCallback(O=>{requestAnimationFrame(()=>{O.target&&m(O.target.scrollTop)})},[a]);h.useEffect(()=>{const O=a.current;return m((O==null?void 0:O.scrollTop)||0),O==null||O.addEventListener("scroll",w),()=>O==null?void 0:O.removeEventListener("scroll",w)},[w]),h.useEffect(()=>{y.needAddListener&&(setTimeout(()=>{var O;return(O=a==null?void 0:a.current)==null?void 0:O.addEventListener("scroll",w)}),x({...y,needAddListener:!1}))},[y,a]);const _=h.useCallback(O=>{const M=s.length,z=Math.max(0,O);let L=u+2*c;return L=Math.min(M-z,L),{startIndex:z,endIndex:z+L,topPadding:z*r+"px",bottomPadding:(M-z-L)*r+"px"}},[r,c,s,u]);h.useEffect(()=>{const O=Math.floor(p/r-c),M={..._(O),needAddListener:!1};x(M)},[p,_]),h.useEffect(()=>{var M;if(!d||!S||S.activeId===d)return;const O=s.findIndex(z=>z.id===d);O!==-1&&(O<y.startIndex||O>y.endIndex)&&((M=a==null?void 0:a.current)==null||M.removeEventListener("scroll",w),x({..._(O),needAddListener:!0}))},[d,y,_,a]);const B=h.useMemo(()=>[...s].slice(y.startIndex,y.endIndex).map((O,M)=>b==null?void 0:b(O,M)),[s,d,v,y]);return $.jsxs($.Fragment,{children:[$.jsx(K0,{style:{minHeight:y.topPadding}}),B,$.jsx(K0,{style:{minHeight:y.bottomPadding}})]})},dg=(a,r)=>{const u=h.useCallback(c=>{a.every(s=>s.current&&!s.current.contains(c.target))&&r(c)},[r,a]);h.useEffect(()=>(document.addEventListener("mousedown",u,!0),document.addEventListener("touchstart",u),()=>{document.removeEventListener("mousedown",u,!0),document.removeEventListener("touchstart",u)}),[u])},iS=(a,r)=>{let u,c=!1,s=!1;return[(...d)=>{if(s||c)return;const v=a(...d);return c=!0,u=setTimeout(()=>{c=!1},r),v},()=>{s=!0,clearTimeout(u)}]};function uS(a,r,u){const c=a.getBoundingClientRect(),s=r.getBoundingClientRect(),d=document.documentElement.clientWidth-c.right>s.width,v=c.left>s.width,b=u==="right"?!d&&v?"left":"right":!v&&d?"right":"left";return document.documentElement.clientHeight-c.top>s.height-1?{position:`${b}Bottom`}:{position:b,bottomOffset:8-(document.documentElement.clientHeight-c.top-s.height)}}const hg=(a,r)=>{for(let u=0;u<a.length;u++){const c=a[u];if(c.id===r)return c;if(c.subItems&&c.subItems.length>0){const s=hg(c.subItems,r);if(s)return s}}},mg=(a,r)=>!!a.subItems&&a.subItems.some(u=>r.includes(u.id)||mg(u,r)),W0=a=>Array.isArray(a)?[...a]:[a],oS=V.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`,cS=V(zf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:"flex-direction: column;"}
`,sS=V.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,fS=V.div`
  position: relative;
  align-self: flex-start;
`,dS=V.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>Oo(a.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${a=>yn(a.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`,pg=({targetElement:a,children:r,onClickOutside:u,defaultRenderDirection:c="right",...s})=>{const{rootRef:d}=h.useContext(Ri),v=h.useRef(null),[b,p]=h.useState(null),[m,y]=h.useState("row");h.useLayoutEffect(()=>{const[_,B]=iS(()=>{p({})},100);return addEventListener("resize",_),addEventListener("scroll",_),()=>{removeEventListener("resize",_),removeEventListener("scroll",_),B()}});const{addDropdown:x,removeDropdown:S,dropdowns:w}=fg(v);return h.useLayoutEffect(()=>(x==null||x(v),()=>{S==null||S(v)}),[]),dg([v],_=>{a&&!a.contains(_.target)&&Tb(_,w)&&(u==null||u(_))}),h.useLayoutEffect(()=>{const _=v.current;if(a&&_){const{position:B,bottomOffset:O=0}=uS(a,_,c);switch(B){case"right":y("row"),_.style.bottom=`${O}px`;break;case"left":y("row-reverse"),_.style.bottom=`${O}px`;break;case"rightBottom":default:y("row"),_.style.bottom="8px";break;case"leftBottom":y("row-reverse"),_.style.bottom="8px"}}},[a,b]),a&&$.jsx(oS,{children:$.jsxs(cS,{targetElement:a,rootRef:d,$flexDirection:m,fullContainerWidth:!1,children:[$.jsx(sS,{}),$.jsx(fS,{ref:v,...s,children:$.jsx(dS,{children:r})})]})})};pg.displayName="SubMenu";const gg=a=>{switch(a){case"l":default:return 48;case"m":return 40;case"s":return 32}},hS=Y`
  max-height: ${({$dimension:a,$rowCount:r})=>{return`min(calc(100vh - 16px), ${u=r,c=a,gg(c)*u+16}px)`;var u,c}};
`,mS=V.div`
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
`,pS=V(Zb)`
  position: relative;
  ${a=>a.$hasTopPanel?"":"padding-top: 8px"};
  ${a=>a.$hasBottomPanel?"":"padding-bottom: 8px"};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${hS};
  ${a=>a.$maxHeight?`max-height: ${a.$maxHeight}`:""};
`,Lf=h.forwardRef(({model:a,defaultSelected:r,selected:u,preselected:c,active:s,onPreselectItem:d,onSelectItem:v,onDeselectItem:b,onActivateItem:p,renderTopPanel:m,renderBottomPanel:y,dimension:x="l",multiSelection:S=!1,disableSelectedOptionHighlight:w=!1,onForwardCycleApprove:_,onBackwardCycleApprove:B,containerRef:O,virtualScroll:M,rowCount:z=6,parentMenuRef:L,onCloseQuery:J,defaultIsActive:Q=!0,subMenuRenderDirection:te,preventFocusSteal:ae,maxHeight:de,preselectedModeActive:ne=!1,onMenuKeyDown:he,disableSelectionOnSpace:Be,disableSelectionOnEnter:Ue,...Ae},pt)=>{const ze=re=>{const ce=re?a.findIndex(Ze=>Ze.id===re):-1;let ve=ce<a.length-1?ce+1:0,Oe=!1;for(;(a[ve].disabled||a[ve].readOnly)&&!Oe;)ve=ve<a.length-1?ve+1:0,Oe=ce===-1?ve===0:ve===ce;return ve=!(ce>-1&&ve<ce)||!_||_()?ve:ce,a[ve].disabled||a[ve].readOnly?void 0:a[ve].id},U=a.length>0?ze():void 0,[W,ee]=h.useState(r?W0(r):[]),[K,E]=h.useState(U),[j,Z]=h.useState(U),X=h.useRef(null),I=h.useRef(null),[fe,ue]=h.useState(null),[Xe,ye]=h.useState(!1),et=h.useRef();h.useEffect(()=>{E(U)},[a]);const Ot=w?[]:u===void 0?W:W0(u),Qe=s===void 0?K:s,Re=ne?c===void 0?j:c:void 0,Ht=h.useRef(null),Ca=h.useRef(null),ba=!!m,_t=!!y,Ke=re=>{Qe!==re&&E(re),p==null||p(re)},kt=re=>{Re!==re&&Z(re),d==null||d(re)},jt=re=>{const ce=hg(a,re);if(ce&&!ce.disabled&&!ce.readOnly){const ve=W.findIndex(Oe=>Oe===re);S?ve>-1?(ee(W.splice(ve,1)),b==null||b(re)):(ee([...W,re]),v==null||v(re)):(ve===-1&&ee([re]),v==null||v(re))}},{currentActiveMenu:tt,activateMenu:nt,deactivateMenu:Sa}=fg(X);h.useEffect(()=>{function re(ce){if((tt==null?void 0:tt.current)===X.current)switch(G.getCode(ce)){case G[" "]:if(Be)break;ne&&Re?jt(Re):Qe&&jt(Qe),ce.preventDefault();break;case G.Enter:if(Ue)break;ne&&Re?jt(Re):Qe&&jt(Qe),ce.preventDefault();break;case G.ArrowDown:{const ve=ze(ne&&Re||Qe);ne?kt(ve):Ke(ve),ce.preventDefault();break}case G.ArrowUp:{const ve=(Oe=>{const Ze=Oe?a.findIndex(we=>we.id===Oe):-1;let He=Ze>0?Ze-1:a.length-1,Vt=!1;for(;(a[He].disabled||a[He].readOnly)&&!Vt;)He=He>0?He-1:a.length-1,Vt=Ze===-1?He===0:He===Ze;return He=Ze>-1&&He>Ze&&B&&!B()?Ze:He,a[He].disabled||a[He].readOnly?void 0:a[He].id})(ne&&Re||Qe);ne?kt(ve):Ke(ve),ce.preventDefault();break}case G.ArrowRight:{const ve=ne&&Re||Qe,Oe=a.find(Ze=>Ze.id===ve);!Oe||Oe.disabled||Oe.readOnly||!Oe.subItems||Xe||ye(!0),I&&I.current&&(nt==null||nt(I));break}case G.ArrowLeft:L&&L.current&&(J==null||J());break;default:he==null||he(ce)}}return document.addEventListener("keydown",re),()=>{document.removeEventListener("keydown",re)}},[s,Qe,K,tt,Re,Be,Ue]),h.useEffect(()=>(Q&&(nt==null||nt(X)),()=>{Q&&tt===X&&(Sa==null||Sa(X))}),[Q]);const bn=()=>{ye(!1),nt==null||nt(X)},ke=(re,ce)=>{const{id:ve,subItems:Oe,render:Ze,...He}=re,Vt=!!Oe&&Oe.length>0,we=Qe===ve,Xt=Ot.includes(ve)||mg(re,Ot),Qt={hovered:we,preselected:Re!==void 0?Re===ve:void 0,selected:Xt,onLeave:la=>{var Zt,fl;const na=la.relatedTarget;na&&Object.hasOwn(na,"nodeName")&&!((Zt=I.current)!=null&&Zt.contains(na))&&!((fl=Ca.current)!=null&&fl.contains(na))&&ye(!1)},onHover:la=>{Ke(ve),ye(Vt),ue(la.currentTarget)},onMouseDown:ae?la=>la.preventDefault():void 0,onClick:()=>jt(ve),hasSubmenu:Vt,disabled:He.disabled,...He};return typeof Ze=="function"?Ze({containerRef:O,...Qt}):$.jsx(Hf,{...Qt,children:Ze},`${re.id}-${ce}`)},Yl=h.useRef(),Da=h.useRef(),bt=h.useRef(),Je=h.useRef();h.useLayoutEffect(()=>{setTimeout(()=>{var ce,ve;let re;if(s&&Yl.current!==s||Da.current!==K?re=(ce=Ht.current)==null?void 0:ce.querySelector('[data-hovered="true"]'):(c&&bt.current!==c||Je.current!==j)&&(re=(ve=Ht.current)==null?void 0:ve.querySelector('[data-preselected="true"]')),re){const Oe=Date.now(),Ze=et.current;re==null||re.scrollIntoView({behavior:!Ze||Oe-Ze<150?"auto":"smooth",inline:"center",block:"nearest"}),et.current=Oe,Yl.current=s,Da.current=K,bt.current=c,Je.current=j}},0)},[s,K,c,j,a]);const st=cg(Ae);return h.useEffect(()=>{if(!fe||!Ht.current)return;const re={root:Ht.current,rootMargin:"0px",threshold:.5},ce=new IntersectionObserver(ve=>{ve.forEach(Oe=>{ye(!(Oe.intersectionRatio<re.threshold))})},re);return ce.observe(fe),()=>ce.disconnect()},[fe]),$.jsxs(mS,{ref:ya(X,pt),$dimension:x,$hasTopPanel:ba,$hasBottomPanel:_t,onMouseEnter:re=>{var ce;tt!==X&&(nt==null||nt(X)),(ce=Ae.onMouseEnter)==null||ce.call(Ae,re)},onMouseLeave:re=>{var ce;Ke(void 0),(ce=Ae.onMouseLeave)==null||ce.call(Ae,re)},onFocus:re=>{var ce;tt!==X&&(nt==null||nt(X)),(ce=Ae.onFocus)==null||ce.call(Ae,re)},onBlur:re=>{var ce;tt===X&&(Sa==null||Sa(X)),(ce=Ae.onBlur)==null||ce.call(Ae,re)},...Ae,children:[ba&&m({dimension:x}),$.jsx(pS,{$dimension:x,$rowCount:z,$hasTopPanel:ba,$hasBottomPanel:_t,$maxHeight:de,...st,verticalScrollProps:{ref:Ca},contentBlockProps:{ref:Ht},children:M?(()=>{if(!M)return null;const re=M.itemHeight==="auto"?gg(x):M.itemHeight;return $.jsx(rS,{scrollContainerRef:Ht,itemHeight:re,model:a,rowCount:z,activeId:Qe,selected:Ot,onRenderItem:ke})})():a.map((re,ce)=>ke({dimension:x,...re},ce))}),Xe&&fe&&$.jsx(pg,{targetElement:fe,defaultRenderDirection:te,onClickOutside:L?void 0:()=>{ye(!1)},children:(()=>{const re=a.find(ce=>ce.id===Qe);return re&&re.subItems&&re.subItems.length>0&&$.jsx(Lf,{ref:I,dimension:x,parentMenuRef:X,model:re.subItems,subMenuRenderDirection:te,onCloseQuery:bn,selected:Ot,onSelectItem:ce=>jt(ce),virtualScroll:M,preventFocusSteal:!0})})()}),_t&&y({dimension:x})]})});Lf.displayName="Menu";var J0;function df(){return df=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},df.apply(null,arguments)}var Uf=function(a){return h.createElement("svg",df({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),J0||(J0=h.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function Ai(a){switch(a){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function vg(a){switch(a){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function I0(a){return Ai(a)+2*vg(a)}const gS=Y`
  & *[fill^='#'] {
    fill: ${a=>{switch(a.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`;default:return a.$iconColor}}};
  }
`,vS=V.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${gS}

  & > svg {
    height: ${a=>Ai(a.$dimension)}px;
    width: ${a=>Ai(a.$dimension)}px;
  }
`,_i=V.div`
  width: ${a=>I0(a.$dimension)}px;
  height: ${a=>I0(a.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,yS=Y`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${_i} {
      background-color: ${a=>a.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${a.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${_i} {
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${_i} {
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${_i} {
      background-color: transparent;
    }
  }
`,bS=V.button`
  position: relative;
  padding: 0;
  margin: ${a=>vg(a.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${a=>Ai(a.$dimension)}px;
  width: ${a=>Ai(a.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
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
    ${yS}
  }
`,SS=h.forwardRef(({type:a="button",dimension:r="lBig",disabled:u=!1,highlightFocus:c=!0,appearance:s,children:d,...v},b)=>{const p=typeof s=="object"?s.iconColor?s.iconColor:"secondary":s;return $.jsxs(bS,{ref:b,type:a,$dimension:r,disabled:u,$highlightFocus:c,...v,children:[$.jsx(_i,{$dimension:r,"aria-hidden":!0}),$.jsx(vS,{$dimension:r,$iconColor:p,"aria-hidden":!0,children:d})]})}),xS=h.forwardRef(({className:a,...r},u)=>$.jsx(SS,{ref:u,className:`close-button ${a||""}`,...r,children:$.jsx(Uf,{"aria-hidden":!0})}));var ep,tp,ap,lp,np,rp;function hf(){return hf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},hf.apply(null,arguments)}var ES=function(a){return h.createElement("svg",hf({xmlns:"http://www.w3.org/2000/svg",fill:"none"},a),ep||(ep=h.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),tp||(tp=h.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),ap||(ap=h.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),lp||(lp=h.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),np||(np=h.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),rp||(rp=h.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const $S=ug`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,yg=V(ES)`
  animation: ${$S} 1s linear infinite;
  path {
    fill: ${({$inverse:a,theme:r})=>a?`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,_S=a=>ug`
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
`,bg=Y`
  animation: ${a=>_S(a)} 2s ease infinite;
`,NS=()=>{let a=0;const r=document.createElement("div");return r.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,r.style.overflow="scroll",r.style.fontSize="14px",r.style.height="50px",r.style.maxHeight="50px",r.style.width="100px",r.style.position="absolute",r.style.top="-100000px",r.style.left="-100000px",document.body.appendChild(r),a=r.offsetWidth-r.clientWidth,document.body.removeChild(r),a||16},wS=V.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,TS=V.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${a=>a.theme.color["Neutral/Neutral 80"]});
  ${a=>a.$dimension==="m"?Ne["Body/Body 2 Short"]:Ne["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${a=>Oo(a.theme.shadow["Shadow 04"])});
  padding: ${a=>a.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,MS=V.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,AS=V(zf)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:a})=>a?`flex-direction: ${a};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:a})=>a.zIndex.tooltip});
`;function OS(a,r,u,c){const s=a.getBoundingClientRect(),d=r.getBoundingClientRect(),v=Object.entries(function(m){return{bottom:{check:(y,x)=>{const S=globalThis.innerHeight-y.bottom-m>8+x.height,w=y.left+y.width/2>x.width/2,_=globalThis.innerWidth-y.right-m+y.width/2>x.width/2;return S&&w&&_}},top:{check:(y,x)=>{const S=y.top>8+x.height,w=y.left+y.width/2>x.width/2,_=globalThis.innerWidth-y.right-m+y.width/2>x.width/2;return S&&w&&_}},left:{check:(y,x)=>{const S=y.left>8+x.width,w=y.top>(x.height-y.height)/2,_=globalThis.innerHeight-y.bottom-m>(x.height-y.height)/2;return S&&_&&w}},right:{check:(y,x)=>{const S=globalThis.innerWidth-y.right-m>8+x.width,w=y.top>(x.height-y.height)/2,_=globalThis.innerHeight-y.bottom-m>(x.height-y.height)/2;return S&&_&&w}},bottomRight:{check:(y,x)=>{const S=globalThis.innerHeight-y.bottom-m>8+x.height,w=globalThis.innerWidth-y.left-m>x.width;return S&&w}},bottomLeft:{check:(y,x)=>{const S=globalThis.innerHeight-y.bottom-m>8+x.height,w=y.right>x.width;return S&&w}},topRight:{check:(y,x)=>{const S=y.top>8+x.height,w=globalThis.innerWidth-y.left-m>x.width;return S&&w}},topLeft:{check:(y,x)=>{const S=y.top>8+x.height,w=y.right>x.width;return S&&w}},leftBottom:{check:(y,x)=>{const S=y.left>8+x.width,w=globalThis.innerHeight-y.top-m>x.height;return S&&w}},leftTop:{check:(y,x)=>{const S=y.left>8+x.width,w=y.bottom>x.height;return S&&w}},rightBottom:{check:(y,x)=>{const S=globalThis.innerWidth-y.right-m>8+x.width,w=globalThis.innerHeight-y.top-m>x.height;return S&&w}},rightTop:{check:(y,x)=>{const S=globalThis.innerWidth-y.right-m>8+x.width,w=y.bottom>x.height;return S&&w}},bottomPageCenter:{check:(y,x)=>{const S=globalThis.innerHeight-y.bottom-m>8+x.height,w=globalThis.innerWidth-m>=x.width;return S&&w}},topPageCenter:{check:(y,x)=>{const S=y.top>8+x.height,w=globalThis.innerWidth-m>=x.width;return S&&w}}}}(u)),b=c?v.filter(m=>m[0].includes(c)&&m[1].check(s,d)):v.filter(m=>m[1].check(s,d)),p=c||"bottom";return b.length?b[0][0]:p}const Hi=h.forwardRef(({dimension:a="m",renderContent:r,targetElement:u,tooltipPosition:c,...s},d)=>{const v=h.useRef(null),b=h.useRef(0),{rootRef:p}=h.useContext(Ri),m=h.useMemo(()=>!r()&&r()!==0,[r]),[y,x]=h.useState(),[S,w]=h.useState(!1),[_,B]=h.useState({});return h.useEffect(()=>{(O=>{const M=u;if(M&&v.current){const z=OS(M,v.current,O,c),L=v.current;switch(z){case"leftBottom":case"leftTop":case"left":x("row-reverse"),w(!1),L.style.margin="0 8px 0 0",L.style.alignSelf=z==="leftBottom"?"flex-start":z==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":x("row"),w(!1),L.style.margin="0 0 0 8px",L.style.alignSelf=z==="rightBottom"?"flex-start":z==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":x("column-reverse"),w(z==="topPageCenter"),L.style.margin="0 0 8px 0",L.style.alignSelf=z==="topLeft"?"flex-end":z==="topRight"?"flex-start":"center";break;default:x("column"),w(z==="bottomPageCenter"),L.style.margin="8px 0 0 0",L.style.alignSelf=z==="bottomLeft"?"flex-end":z==="bottomRight"?"flex-start":"center"}}})(NS())},[r(),u,c,_]),h.useLayoutEffect(()=>{if(v.current&&!m){const O=new ResizeObserver(M=>{M.forEach(z=>{b.current===0?b.current=z.contentRect.height:B({})})});return O.observe(v.current),()=>{O.disconnect()}}},[m]),h.useEffect(()=>{v.current&&!m&&(v.current.style.opacity="1")},[m]),m?null:$.jsxs(AS,{targetElement:u,rootRef:p,$flexDirection:y,fullContainerWidth:S,children:[$.jsx(MS,{}),$.jsx(wS,{ref:ya(d,v),children:$.jsx(TS,{role:"tooltip",$dimension:a,...s,children:r()})})]})});Hi.displayName="Tooltip";const CS=Y`
  background: ${({$appearance:a,theme:r})=>{switch(a){case"info":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${r.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,DS=Y`
  color: ${({$appearance:a,theme:r})=>{switch(a){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${r.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${r.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${r.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`}}};
`,BS=V.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({$dimension:a})=>a==="s"?"0 5px":"0 6px"};
  height: ${({$dimension:a})=>a==="s"?"16px":"20px"};
  border-radius: ${({$dimension:a})=>a==="s"?"8px":"10px"};
  ${({$dimension:a})=>a==="s"?Ne["Caption/Caption 1"]:Ne["Body/Body 2 Long"]}
  ${CS}
  ${DS}
  user-select: none;
`,kf=h.forwardRef(({children:a,dimension:r="m",appearance:u="light",locale:c,...s},d)=>{const v=rg()||Df,b=(c==null?void 0:c.amountAriaLabel)||v.locales[v.currentLocale].badge.amountAriaLabel;return $.jsx(BS,{ref:d,$dimension:r,$appearance:u,"aria-label":`${b} ${a}`,...s,children:a})});kf.displayName="Badge";V(kf)`
  &:is(input:checked + div *) {
    background: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral00, ${a.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${a.theme.color["Special/Static White"]})`};
    color: ${a=>a.$disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`};
  }
`;const ip=Y`
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
`,up=Y`
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
`,op=Y`
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
`,zS=Y`
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
`,RS=Y`
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
`,HS=Y`
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
`,jS=Y`
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
`,LS=Y`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,US=Y`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${ip}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${up}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${op}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${zS}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${RS}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${HS}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${jS}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${ip}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${up}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${op}
  }

  ${LS}
`,hr=V.div``;function Ul(a){switch(a){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}Y`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ul("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ul("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ul("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-left: ${Ul("s")}px;`}
  }
`;Y`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ul("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ul("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ul("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${a=>!a.$displayAsSquare&&`padding-right: ${Ul("s")}px;`}
  }
`;const cp=Y`
  padding: 0;
  height: 56px;
  ${a=>a.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${hr} {
    width: 24px;
    height: 24px;
  }

  ${Ne["Button/Button 1"]}
`,kS=Y`
  ${cp}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${cp}
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
    ${hr} {
      width: 20px;
      height: 20px;
    }
    ${Ne["Button/Button 2"]}
  }
`,Sg=V.div`
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
  > ${hr} {
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
`,qS=V(hr)`
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
`,sp=V.div`
  display: inline-block;
  width: 2px;
`,mr=h.forwardRef(({appearance:a="primary",dimension:r="xl",type:u="button",loading:c=!1,skeleton:s=!1,iconStart:d,iconEnd:v,icon:b,iconPlace:p="left",children:m,buttonCssMixin:y,displayAsDisabled:x,displayAsSquare:S,...w},_)=>{const B=!!d||!!b&&p==="left",O=!!v||!!b&&p==="right",M=(S||B?0:2)+(S||O?0:2);return $.jsxs(YS,{ref:_,$appearance:a,$dimension:r,type:u,$loading:c,$skeleton:s,$buttonCssMixin:y,$displayAsSquare:S,$displayAsDisabled:x,...w,children:[c&&$.jsx(qS,{children:$.jsx(yg,{$inverse:a!=="secondary"&&a!=="tertiary"&&a!=="ghost"})}),!S&&!B&&$.jsx(sp,{}),$.jsxs(Sg,{$addPadding:M,children:[B?$.jsx(hr,{children:d||b}):null,h.Children.toArray(m).map((z,L)=>typeof z=="string"?$.jsx("div",{children:z},z+L):z),O?$.jsx(hr,{children:v||b}):null]}),!S&&!O&&$.jsx(sp,{})]})}),YS=V.button.attrs(a=>({"data-dimension":a.$dimension,"data-appearance":[a.$appearance,a.$displayAsDisabled?"disabled":void 0].filter(r=>r!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${yn(a.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  ${a=>(a.$loading||a.$skeleton)&&"pointer-events: none"};

  ${US};
  ${kS};
  ${a=>a.$buttonCssMixin};
  ${({$skeleton:a})=>a&&bg};

  ${Sg} {
    ${a=>a.$loading||a.$skeleton?"visibility: hidden;":""}
  }
`;mr.displayName="Button";var fp;function mf(){return mf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},mf.apply(null,arguments)}var PS=function(a){return h.createElement("svg",mf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},a),fp||(fp=h.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))},dp;function pf(){return pf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},pf.apply(null,arguments)}var GS=function(a){return h.createElement("svg",pf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},a),dp||(dp=h.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const VS=Y`
  width: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,XS=Y`
  height: ${({$dimension:a})=>{switch(a){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,QS=V(PS)`
  pointer-events: none;
`,ZS=V(GS)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${a=>a.theme.color["Special/Static White"]});
  }
`,FS=V.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${a=>a.$disabled?"not-allowed":a.$readOnly?"default":"pointer"};

  overflow: visible;
  ${VS};
  ${XS};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`,hn=V.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
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
`,xg=Y`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`,hp=Y`
  &:not(:disabled) {
    &::after {
      ${xg};
      background-color: var(--admiral-color-Opacity_Hover, ${a=>a.theme.color["Opacity/Hover"]});
    }
  }
`,KS=Y`
  &:not(:disabled) {
    &::after {
      ${xg};
      background-color: var(--admiral-color-Opacity_Press, ${a=>a.theme.color["Opacity/Press"]});
    }
  }
`,mp=Y`
  pointer-events: none;
  & + ${hn} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  }
`,gf=Y`
  background-color: var(--admiral-color-Primary_Primary30, ${a=>a.theme.color["Primary/Primary 30"]});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${a=>a.theme.color["Neutral/Neutral 00"]});
  }
`,Eg=Y`
  background-color: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
  border: none;
`,WS=Y`
  & + ${hn} {
    ${Eg}
  }
`,$g=Y`
  & + ${hn} {
    ${gf}
  }
`,JS=Y`
  ${a=>a.readOnly?$g:WS}
`,IS=V.input`
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
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  margin: 0;
  padding: 0;

  ${a=>a.readOnly&&mp}

  &:checked + ${hn} {
    ${a=>a.readOnly?gf:Eg}
  }
  &:checked:disabled + ${hn} {
    ${gf}
  }

  ${a=>a.$indeterminate&&JS}

  &:not(:checked) + ${hn} {
    > * {
      display: ${a=>a.$indeterminate?"block":"none"};
    }
  }

  &:disabled {
    cursor: not-allowed;
    ${mp}
    ${a=>a.$indeterminate&&$g}
  }

  ${a=>!a.readOnly&&a.$hovered&&hp}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${hp}

  &:active:not(:disabled) {
    ${KS}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,_g=h.forwardRef(({className:a,dimension:r="m",disabled:u,readOnly:c,hovered:s,indeterminate:d,error:v,...b},p)=>$.jsxs(FS,{$dimension:r,$disabled:u,$readOnly:c,className:a,children:[$.jsx(IS,{ref:p,disabled:u,readOnly:c,...b,type:"checkbox",$indeterminate:d,onKeyDown:m=>{var y;c&&G.getCode(m)===G[" "]&&m.preventDefault(),(y=b.onKeyDown)==null||y.call(b,m)},"data-hovered":s,$hovered:s}),$.jsx(hn,{$error:v,children:$.jsx(d?ZS:QS,{"aria-hidden":"true",focusable:"false"})})]}));_g.displayName="Checkbox";function ji(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const ex=Y`
  height: ${({$dimension:a})=>{switch(a){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,qf=Y`
  ${bg}
  & > * {
    visibility: hidden;
  }
`,tx=V.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${yn(a.theme.shape)})`};

  pointer-events: ${a=>a.$skeleton?"none":"all"};
  ${({$skeleton:a})=>a&&qf};
`,ax=V(tx)`
  ${ex};
`,lx=V.div`
  white-space: nowrap;
  ${Ne["Body/Body 2 Long"]}
  color: ${a=>a.$error?`var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${a=>a.$transparent&&!a.$error?0:1};
  max-width: ${a=>a.$transparent&&!a.$error?0:"none"};
  overflow: hidden;
`,nx=({maxLength:a,visibilityThreshold:r=.8,inputRef:u,...c})=>{const[s,d]=h.useState(0);return h.useEffect(()=>{const v=setInterval(()=>{const b=u.current;b&&d(b.value.length)},250);return()=>clearInterval(v)},[u]),s>=a*r?$.jsxs(lx,{...c,$error:s>=a,$transparent:s<a*r,children:[s," / ",a]}):null},Yf=V.label`
  display: block;
  text-align: left;
  ${Ne["Body/Body 2 Short"]}
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
`;Yf.displayName="Label";const Ng=V.div``,rx=Y`
  flex-direction: row;
  align-items: center;

  ${Yf} {
    margin: 0 8px 0 0;
  }

  ${Ng} {
    flex: 1 1 auto;
  }
`,ix=V.div`
  display: flex;
  overflow: hidden;
  ${a=>a.$displayInline?rx:"flex-direction: column;"}
`,ux=V.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 50%;
  margin-bottom: 8px;
  ${qf}
`,ox=V.div`
  position: relative;
  text-align: left;
`,cx=Y`
  color: transparent;
`,sx=V(Yf)`
  ${a=>a.$skeleton&&cx};
`,fx=Y`
  visibility: hidden;
`,dx=V.div`
  display: flex;
  justify-content: space-between;
  ${a=>a.$skeleton&&fx};
`,hx=V.div`
  flex: 1 1 auto;

  padding-top: 8px;

  text-align: left;

  ${Ne["Body/Body 2 Short"]}

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
`,mx=V(nx)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`,Pf=h.forwardRef(({children:a,maxLength:r,inputRef:u,displayCharacterCounter:c=!0,characterCounterVisibilityThreshold:s=.8,...d},v)=>{const b=h.useRef(null),[p,m]=h.useState(!1),{className:y,style:x,displayInline:S,status:w,extraText:_,label:B,required:O,disabled:M,id:z,skeleton:L=!1,...J}=d,[Q]=h.useState(ji()),te={className:y,style:x,...J},ae={htmlFor:z??Q,children:B,required:O,disabled:M};return h.useEffect(()=>{const de=()=>{m(!0)},ne=()=>{m(!1)},he=b.current;return he&&(he.addEventListener("focusin",de),he.addEventListener("focusout",ne)),()=>{he&&(he.removeEventListener("focusin",de),he.removeEventListener("focusout",ne))}},[]),$.jsxs(ix,{...te,$displayInline:S,"data-status":w,"data-focus-within":p?"":void 0,"data-required-within":O?"":void 0,"data-disabled":M?"":void 0,"data-read-only":!!d.readOnly||void 0,ref:ya(b,v),children:[ae.children&&$.jsxs(ox,{children:[L&&$.jsx(ux,{}),$.jsx(sx,{$skeleton:L,...ae})]}),$.jsxs(Ng,{children:[a,$.jsxs(dx,{$skeleton:L,children:[_&&$.jsx(hx,{children:_}),c&&u&&r!==void 0&&$.jsxs($.Fragment,{children:[$.jsx("div",{}),$.jsx(mx,{maxLength:r,visibilityThreshold:s,inputRef:u})]})]})]})]})});Pf.displayName="Field";function vf(a,r){return a.value!==r.value||a.selectionStart!==r.selectionStart||a.selectionEnd!==r.selectionEnd}function ol(a,r){var d;const{value:u=a.value,selectionStart:c,selectionEnd:s}=r;if(vf(a,{value:u,selectionStart:c,selectionEnd:s})){const v=(d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a),"value"))==null?void 0:d.set;let b;v==null||v.call(a,u),typeof c=="number"&&typeof s=="number"&&a.setSelectionRange(c,s),typeof Event=="function"?b=new Event("input",{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent("input",!0,!0)),a.dispatchEvent(b)}}var pp;function yf(){return yf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},yf.apply(null,arguments)}var px=function(a){return h.createElement("svg",yf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),pp||(pp=h.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))},gp;function bf(){return bf=Object.assign?Object.assign.bind():function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var c in u)({}).hasOwnProperty.call(u,c)&&(a[c]=u[c])}return a},bf.apply(null,arguments)}var gx=function(a){return h.createElement("svg",bf({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a),gp||(gp=h.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};function vx({icon:a,...r}){return $.jsx(a,{...r})}const Sf=V(vx)`
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
`,yx=Y`
  width: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:a})=>{switch(a){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,bx=V.div`
  position: relative;
  container-type: inline-size;
  ${yx};

  & svg {
    ${a=>a.$svgMixin||""}
  }
`,Gf=({dimension:a="m",inverse:r=!1,svgMixin:u,...c})=>$.jsx(bx,{$dimension:a,$svgMixin:u,role:"alert","aria-live":"assertive",...c,children:$.jsx(yg,{$inverse:r})});Gf.displayName="Spinner";const vn=a=>!!a&&(a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth),xf=a=>{switch(a.$dimension){case"xl":default:return 24;case"s":return 20}},Oi=a=>{switch(a.$dimension){case"xl":default:return 16;case"s":return 12}},Sx=Y`
  padding-right: ${a=>Oi(a)+(xf(a)+8)*(a.$iconsAfterCount??0)}px;
  padding-left: ${a=>Oi(a)+(xf(a)+8)*(a.$iconsBeforeCount??0)}px;
`,xx=Y`
  background-color: var(--admiral-color-Neutral_Neutral10, ${a=>a.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,Ex=Y`
  ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}}
`,rr=V.div`
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

  border: 1px solid ${Ex};
  ${a=>a.disabled&&"border-color: transparent;"};
`,$x=Y`
  border-color: ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Neutral_Neutral60, ${r.color["Neutral/Neutral 60"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error70, ${r.color["Error/Error 70"]})`;case"success":return`var(--admiral-color-Success_Success60, ${r.color["Success/Success 60"]})`}}};
`,_x=Y`
  border: 2px solid
    ${({$status:a,theme:r})=>{if(!a)return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;switch(a){case"error":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`}}};
`,Nx=Y`
  &:focus-within:not(:disabled) > ${rr} {
    ${a=>a.disabled||a.readOnly?"border-color: transparent":a.$isLoading?"":_x}
  }

  &:hover:not(:focus-within) > ${rr} {
    ${a=>a.$isLoading?"":a.disabled||a.readOnly?"transparent":$x};
  }
`,wx=Y`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Tx=V.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${Oi}px;

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}

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

  &&&:user-invalid + ${rr} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  &&&:user-invalid:hover:not(:disabled) + ${rr} {
    border: 1px solid var(--admiral-color-Error_Error70, ${a=>a.theme.color["Error/Error 70"]});
  }

  &&&:user-invalid:focus:not(:disabled) + ${rr} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${xx}
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${Sx}
  ${wx}
`,wg=V.div`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, ${a=>yn(a.theme.shape)});
    display: block;
    width: ${xf}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    }
  }
`,Mx=V(wg)`
  left: 0;

  padding-left: ${Oi}px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`,Ax=V(wg)`
  right: 0;

  padding-right: ${Oi}px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,Ox=V(ax)`
  ${Nx}
  ${a=>a.disabled?"cursor: not-allowed;":a.$isLoading?"cursor: default;":""}
`;function Cx(a){return a||{}}const Tg=h.forwardRef(({dimension:a="m",type:r,displayClearIcon:u,isLoading:c,status:s,handleInput:d=Cx,containerRef:v,icons:b,iconsBefore:p,iconsAfter:m,children:y,className:x,style:S,placeholder:w,skeleton:_=!1,showTooltip:B=!0,disableCopying:O,...M},z)=>{const L=h.useRef(null),J=v||h.useRef(null),Q=h.Children.toArray(m||b),te=h.Children.toArray(p),[ae,de]=h.useState(!1),[ne,he]=h.useState(!1),[Be,Ue]=h.useState(M.defaultValue??void 0),Ae=M.value??Be;h.useEffect(()=>{vn(L.current)?de(!0):de(!1)},[ne,de]),h.useLayoutEffect(()=>{function ee(){document.activeElement!==L.current&&he(!0)}function K(){he(!1)}const E=J.current;if(E)return E.addEventListener("mouseenter",ee),E.addEventListener("mouseleave",K),E.addEventListener("mousedown",K),()=>{E.removeEventListener("mouseenter",ee),E.removeEventListener("mouseleave",K),E.removeEventListener("mousedown",K)}},[he]);const[pt,ze]=h.useState(!1);if(!M.readOnly&&r==="password"){const ee=pt?gx:px;Q.push($.jsx(Sf,{icon:ee,onClick:()=>{ze(!pt)},"aria-hidden":!0},"eye-icon"))}!M.readOnly&&u&&Ae&&Q.unshift($.jsx(Sf,{icon:Uf,onMouseDown:ee=>{ee.preventDefault()},onClick:()=>{L.current&&ol(L.current,{value:""})},"aria-hidden":!0},"clear-icon")),c&&Q.unshift($.jsx(Gf,{dimension:a==="s"?"ms":"m"},"loading-icon"));const U=te.length,W=Q.length;return h.useLayoutEffect(()=>{const ee=d(null);function K(E){const{value:j,selectionStart:Z,selectionEnd:X}=this,I=d({value:j,selectionStart:Z,selectionEnd:X},E);w&&!vf(ee,I)?ol(this,{...I,value:""}):ol(this,I)}if(r!=="date"&&L.current){const E=L.current;E.addEventListener("input",K);const{value:j,selectionStart:Z,selectionEnd:X}=E,I=d({value:j,selectionStart:Z,selectionEnd:X});return w&&!vf(ee,I)?ol(E,{...I,value:""}):ol(E,I),()=>{E.removeEventListener("input",K)}}},[d,w]),h.useEffect(()=>{function ee(){this.selectionEnd=this.selectionStart}if(O&&L.current){const K=L.current;return K.addEventListener("select",ee,!0),()=>K.removeEventListener("select",ee,!0)}},[O]),$.jsxs($.Fragment,{children:[$.jsxs(Ox,{className:x,style:S,$dimension:a,ref:J,disabled:M.disabled,readOnly:M.readOnly,$isLoading:c,$status:s,"data-disabled":!!M.disabled||void 0,"data-read-only":!!M.readOnly||void 0,"data-loading":!!c||void 0,"data-status":s,$skeleton:_,"data-disable-copying":!!O||void 0,children:[$.jsx(Tx,{ref:ya(z,L),...M,onChange:ee=>{var K;Ue(ee.currentTarget.value),(K=M.onChange)==null||K.call(M,ee)},placeholder:w,$dimension:a,$iconsAfterCount:W,$iconsBeforeCount:U,type:r==="password"&&pt?"text":r}),$.jsx(rr,{$status:s,disabled:M.disabled||M.readOnly}),U>0&&$.jsx(Mx,{disabled:M.disabled,$dimension:a,children:te}),W>0&&$.jsx(Ax,{disabled:M.disabled,$dimension:a,children:Q}),y]}),B&&ne&&ae&&$.jsx(Hi,{renderContent:()=>{var ee;return((ee=L==null?void 0:L.current)==null?void 0:ee.value)||""},targetElement:J.current})]})});Tg.displayName="TextInput";const Dx=Y`
  ${({theme:a,$appearance:r})=>{switch(r){case"subtle":return`var(--admiral-color-Neutral_Neutral10, ${a.color["Neutral/Neutral 10"]})`;case"strong":return`var(--admiral-color-Neutral_Neutral40, ${a.color["Neutral/Neutral 40"]})`;case"primary":return`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`;case"staticWhite":return`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`;case"default":return`var(--admiral-color-Neutral_Neutral20, ${a.color["Neutral/Neutral 20"]})`;default:return r}}}
`;function vp(a){return a==="s"?"1px":"2px"}const Bx=Y`
  ${({$dimension:a,$orientation:r})=>r==="horizontal"?`height: ${vp(a)}`:`width: ${vp(a)}`}
`,zx=Y`
  ${({$length:a,$orientation:r})=>r==="horizontal"?`width: ${a}`:`height: ${a}`}
`,Rx=V.div`
  box-sizing: border-box;
  background: ${Dx};
  ${Bx};
  ${zx};
`,Ci=h.forwardRef(({dimension:a="m",appearance:r="default",orientation:u="horizontal",length:c="100%",...s},d)=>$.jsx(Rx,{...s,ref:d,$dimension:a,$appearance:r,$orientation:u,$length:c}));Ci.displayName="Divider";const Mg=h.createContext(null),Ag=()=>h.useContext(Mg),Hx=({children:a,...r})=>$.jsx(Mg.Provider,{value:r,children:a}),jx=h.createContext(null),Og=()=>h.useContext(jx),pr=35,yp=4,Vf=Y`
  height: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,Lx=Y`
  width: ${({$dimension:a})=>a==="m"?"32px":"24px"};
`,Ef=Y`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,Ux=Y`
  height: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,$f=Y`
  width: ${({$dimension:a})=>a==="m"?"20px":"16px"};
`,kx=Y`
  padding: ${({$dimension:a})=>a==="m"?"6px 12px":"4px 8px"};
`,qx=Y`
  padding: ${({$dimension:a})=>a==="m"?"5px 11px":"3px 7px"};
`,Yx=Y`
  ${({$appearance:a})=>a==="filled"?kx:qx}
`,Px=Y`
  &:hover {
    color: ${({theme:a,$appearance:r,$selected:u})=>u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:r!=="filled"||u?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`};
  }
`,Gx=Y`
  ${({$dimension:a})=>a==="s"?Ne["Caption/Caption 1"]:Ne["Body/Body 2 Long"]}
  color: ${({theme:a,$appearance:r,$disabled:u,$selected:c})=>u&&!c?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:c||c&&u?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  ${a=>!a&&Px}
`,Vx=Y`
  &:hover {
    ${({theme:a,$appearance:r,$selected:u,$withCloseIcon:c})=>u?`background-color: var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral12, ${a.color["Opacity/Neutral 12"]});`:c?void 0:`background-color: var(--admiral-color-Opacity_Hover, ${a.color["Opacity/Hover"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, ${a.theme.color["Primary/Primary 70"]});
    `}
  }
  &:active {
    ${({theme:a,$appearance:r,$selected:u,$withCloseIcon:c})=>u?`background-color: var(--admiral-color-Primary_Primary80, ${a.color["Primary/Primary 80"]});`:r==="filled"?`background-color: var(--admiral-color-Opacity_Neutral16, ${a.color["Opacity/Neutral 16"]});`:c?void 0:`background-color: var(--admiral-color-Opacity_Press, ${a.color["Opacity/Press"]});`};
    ${a=>a.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, ${a.theme.color["Primary/Primary 80"]});
    `}
  }
`,Xx=Y`
  background-color: ${({theme:a,$appearance:r,$selected:u,$disabled:c})=>u&&!c?`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`:u&&c?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`:"transparent"};

  border: ${({theme:a,$appearance:r,$disabled:u})=>r==="filled"?"none":u?`1px solid var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:`1px solid var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};

  border-radius: 16px;

  ${a=>a.$clickable&&!a.$disabled&&Vx}

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
`,Qx=V.div`
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
  ${Xx}
  ${Vf}
  ${a=>a.$withCloseIcon?`padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:Yx}
  ${a=>a.$withBadge&&!a.$withCloseIcon?`padding-inline-end: ${(a.$dimension==="s"?4:6)-(a.$appearance==="outlined"?1:0)}px;
         padding-inline-start: ${(a.$dimension==="s"?8:12)-(a.$appearance==="outlined"?1:0)}px;`:""}
  ${Gx}
`,Cg=Y`
  display: flex;
  align-items: center;
  justify-content: center;
`,Zx=V.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${a=>a.$withCloseIcon&&Cg}
  ${a=>a.$withCloseIcon?Vf:Ux}
  & svg {
    ${Ef}
    ${$f}
    & *[fill^='#'] {
      fill: ${({theme:a,$appearance:r,$disabled:u,$selected:c})=>c?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:u?`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`:r==="filled"?`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};
    }
  }
`,Fx=V.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`,Kx=V.div`
  display: inline-block;
  margin-inline-end: 8px;
`,Wx=V.div`
  display: inline-block;
  margin-inline-start: ${a=>a.$withCloseIcon?"2px":"8px"};
`,bp=V.div`
  ${a=>a.$withCloseIcon&&Cg}
  ${a=>a.$withCloseIcon?Vf:Ef}
  ${a=>a.$withCloseIcon?Lx:$f}
  & > svg {
    ${Ef}
    ${$f}
  }
`,Jx=V(kf)`
  margin-inline-start: ${({dimension:a})=>a==="s"?"6px":"8px"};
`,Ix=V(xS)`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${a=>a.dimension==="s"?"6px":"8px"};
  ${a=>a.appearance==="primary"?a.dimension==="s"?"margin-inline-end: 3px":"margin-inline-end: 5px":""};
`,e2=()=>"",Xf=h.forwardRef(({dimension:a="m",disabled:r,appearance:u="outlined",selected:c,onClose:s,children:d,renderContentTooltip:v=e2,iconBefore:b,iconAfter:p,iconStart:m,iconEnd:y,badge:x,...S},w)=>{const _=c!==void 0,[B,O]=h.useState(!1),[M,z]=h.useState(!1),L=!!s,J=!!x,Q=h.useMemo(()=>c&&!r?"whiteBlue":r?c||u==="filled"?"whiteDisable":"lightDisable":u==="filled"?"white":"info",[u,c,r]),te=h.useRef(null),ae=h.useRef(null);return h.useEffect(()=>{ae.current&&vn(ae.current)!==B&&O(vn(ae.current))},[M,O]),h.useLayoutEffect(()=>{function de(){z(!0)}function ne(){z(!1)}const he=te.current;if(he)return he.addEventListener("mouseenter",de),he.addEventListener("mouseleave",ne),he.addEventListener("focus",de),he.addEventListener("blur",ne),()=>{he.removeEventListener("mouseenter",de),he.removeEventListener("mouseleave",ne),he.removeEventListener("focus",de),he.removeEventListener("blur",ne)}},[z]),$.jsxs($.Fragment,{children:[$.jsx(Qx,{...S,ref:ya(w,te),$dimension:a,$disabled:r,$appearance:u,$selected:c,$defaultChip:_,$withCloseIcon:L,$withTooltip:B,$withBadge:J,onKeyDown:de=>{var ne,he;if(!r){const Be=G.getCode(de);Be!==G.Enter&&Be!==G[" "]||(L?s==null||s():(ne=S.onClick)==null||ne.call(S,de)),(he=S.onKeyDown)==null||he.call(S,de)}},tabIndex:S.tabIndex??(r?-1:0),$clickable:!!S.onClick,children:$.jsxs(Zx,{$dimension:a,$disabled:r,$appearance:u,$selected:c,$withCloseIcon:L,children:[(m||b)&&$.jsx(Kx,{children:$.jsx(bp,{$dimension:a,$withCloseIcon:L,children:m||b})}),$.jsx(Fx,{ref:ae,children:d}),x!==void 0&&$.jsx(Jx,{"data-badge":!0,dimension:a,appearance:Q,children:x}),!s&&(y||p)&&$.jsx(Wx,{$dimension:a,children:$.jsx(bp,{$dimension:a,$withCloseIcon:L,children:y||p})}),s&&$.jsx(Ix,{dimension:a==="m"?"mBig":"s",highlightFocus:!1,onMouseDown:de=>{de.preventDefault(),s==null||s(S.id)},disabled:r,tabIndex:-1,appearance:u==="outlined"?"primary":"secondary"})]})}),M&&B&&$.jsx(Hi,{targetElement:te.current,renderContent:v})]})});Xf.displayName="Chips";const Dg=V.div`
  width: ${pr}px;
  height: 24px;
`,t2=V.div`
  display: flex;
  width: ${pr}px;
  visibility: hidden;
  [data-show-count] & {
    visibility: visible;
  }
  > * {
    width: ${pr}px;
    border-radius: 16px;
    // Убирает действие inline-block
    display: flex;
  }
`,a2=V(Xf)`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  padding: 4px 0;
  cursor: pointer;
`,l2=V.div`
  max-width: 488px;

  @media (max-width: 768px) {
    max-width: 250px;
  }
`,n2=Y`
  // оставлено, чтоб обрабатывался onClick
  pointer-events: auto;
  &:hover {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,r2=V(Xf)`
  margin-right: 4px;
  // Убирает пробел от inline-flex
  display: flex;
  ${({disabled:a})=>a&&n2};

  min-width: ${pr}px;
  @media (max-width: 768px) {
    max-width: 140px;
  }

  // По дизайну при наведении цвет самого чипса меняться не должен, но т.к. есть обработчик onClick для stopPropagation,
  // то крестик чипса получается clickable и при ховере меняет цвет
  // disabled и readOnly чипсы не меняют цвет при ховере (в readOnly в целом отсутствует кнопка крестика)
  &:hover {
    ${({theme:a,disabled:r})=>{if(!r)return`background-color: var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`}}
  }
`,io=({value:a,disabled:r,renderChip:u,...c},s)=>{const d=u(),v={};return vr(c,v,"data",!1),(b=>typeof b=="object"&&b!==null&&!h.isValidElement(b))(d)?{...d,onClose:()=>{var b;return(b=d.onClose)==null?void 0:b.call(d,{value:a,disabled:r,...v})}}:{disabled:r,onClose:()=>s(a),children:d}},Sp=({className:a,option:r,disabled:u,readOnly:c,onClick:s,onChipRemove:d})=>{const v=h.useCallback(b=>()=>$.jsx(l2,{children:b}),[]);return $.jsx(r2,{className:a,tabIndex:-1,dimension:"s",appearance:"filled",onClick:s,onClose:c?void 0:io(r,d).onClose,disabled:io(r,d).disabled||u,renderContentTooltip:v(io(r,d).children),children:io(r,d).children})},i2=({count:a,disabled:r,onClick:u})=>{const c=h.useRef(null),s=h.useRef(null);return a?$.jsx(t2,{onClick:u,ref:c,className:"counter",children:$.jsxs(a2,{ref:s,"data-visible":!0,tabIndex:-1,dimension:"s",appearance:"filled",disabled:r,children:["+",a]})}):$.jsx(Dg,{})},u2=V.div`
  display: flex;
`,o2=h.forwardRef(({option:a,childrenOptions:r,containerRef:u,shouldShowCount:c,disabled:s,readOnly:d,onChipClick:v,onChipRemove:b},p)=>{const m=h.useRef(null),[y,x]=h.useState(!1);return h.useLayoutEffect(()=>{const S=new IntersectionObserver(function(w){if(w[0].isIntersecting&&!y){x(!0),w[0].target.setAttribute("data-visible","true");const _=w[0].target.previousElementSibling,B=w[0].target.nextElementSibling;return _&&_.removeAttribute("data-show-count"),void(B&&!B.getAttribute("data-visible")&&w[0].target.setAttribute("data-show-count",""))}if(y&&!w[0].isIntersecting){x(!1),w[0].target.removeAttribute("data-visible"),w[0].target.removeAttribute("data-show-count");const _=w[0].target.previousElementSibling;_&&_.getAttribute("data-visible")&&_.setAttribute("data-show-count","true")}},{root:u.current,threshold:[0,1]});return u.current&&m.current&&S.observe(m.current),()=>S.disconnect()},[y]),$.jsxs(u2,{ref:ya(p,m),onMouseDown:S=>S.preventDefault(),children:[$.jsx(Sp,{className:"chip",option:a,disabled:s,readOnly:d,onClick:v,onChipRemove:b}),c&&r.length>0&&$.jsx(i2,{count:r.length,disabled:s,children:r.map(S=>$.jsx(Sp,{option:S,disabled:s,readOnly:d,onClick:v,onChipRemove:b},S.value))}),!c&&$.jsx(Dg,{})]},a.value)}),c2=({options:a,isOptionsListOpen:r,containerRef:u,hasMaxHeight:c,...s})=>{const d=jf(r);return h.useEffect(()=>{var v,b,p;c&&a.length!==0&&(d&&!r&&((v=u.current)==null||v.scrollTo({top:0,left:0,behavior:"smooth"})),!d&&r&&setTimeout(()=>{var m,y,x;(m=u.current)==null||m.scrollTo({top:0,left:0,behavior:"instant"}),(x=u.current)==null||x.scrollTo({top:(y=u.current)==null?void 0:y.scrollHeight,left:0,behavior:"smooth"})}),r&&d&&((p=u.current)==null||p.scrollTo({top:(b=u.current)==null?void 0:b.scrollHeight,left:0,behavior:"smooth"})))},[r,a,c]),$.jsx($.Fragment,{children:a.map((v,b)=>$.jsx(o2,{option:v,childrenOptions:b<a.length-1?a.slice(b+1):[],containerRef:u,...s},v.value))})},ul=V.div`
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
`,s2=Y`
  min-height: ${({$multiple:a,$minRowCount:r,$dimension:u})=>a?r?24*r+4*(r-1)+"px":"24px":(u==="s"?20:24)+"px"};

  max-height: ${({$multiple:a,$maxRowCount:r,$opened:u,$idleHeight:c})=>a?r?24*r+4*(r-1)+"px":u||c!=="fixed"?"none":"24px":"none"};
`,f2=Y`
  > * {
    margin-left: ${`-${pr+yp}px`};
  }

  padding-left: ${`${pr+yp}px`};
`,Bg=V.div`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({$multiple:a,$isEmpty:r})=>a&&!r&&f2}

  gap: 4px;
  flex-wrap: ${({$multiple:a})=>a?"wrap":"unset"};
  align-items: center;
  align-content: flex-start;

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});

  ${s2}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
`,d2=V.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,h2=Y`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,m2=V.input`
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

  ${({$dimension:a})=>a==="s"?Ne["Body/Body 2 Long"]:Ne["Body/Body 1 Long"]}
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

  ${h2};
`,p2=Y`
  pointer-events: none;
  cursor: default;
`,g2=Y`
  && > *:not(${Bg}) {
    pointer-events: none;
  }

  & ${ul} {
    border-color: transparent;
  }
`,v2=Y`
  ${ul} {
    border-width: 2px;
  }
`,y2=V.div`
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
`,b2=V.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${a=>a.$multiple?"flex-start":"center"};
  cursor: ${({disabled:a,$readonly:r,$isLoading:u})=>a?"not-allowed":r||u?"default":"pointer"};

  padding: ${({$dimension:a,$multiple:r})=>{switch(a){case"xl":return"16px 16px";case"s":return r?"4px 12px":"6px 12px";default:return"8px 16px"}}};

  background: ${({theme:a,disabled:r,$readonly:u})=>r||u?`var(--admiral-color-Neutral_Neutral10, ${a.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${a.color["Neutral/Neutral 00"]})`};

  ${({disabled:a,$readonly:r})=>r||a?g2:""};
  ${({$focused:a,$readonly:r,$isLoading:u})=>!a||r||u?"":v2};

  & ${ul} {
    border-color: ${a=>a.disabled||a.$readonly?"transparent":a.$focused&&!a.$isLoading?`var(--admiral-color-Primary_Primary60Main, ${a.theme.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral40, ${a.theme.color["Neutral/Neutral 40"]})`};
  }

  &:hover ${ul} {
    ${a=>!a.disabled&&!a.$readonly&&!a.$focused&&!a.$isLoading&&`
      border-color: var(--admiral-color-Neutral_Neutral60, ${a.theme.color["Neutral/Neutral 60"]});
    `};
  }

  &[data-status='success'] {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${ul} {
      border-color: var(--admiral-color-Success_Success50Main, ${a.theme.color["Success/Success 50 Main"]});
      }
      &:hover ${ul} {
        border-color: var(--admiral-color-Success_Success60, ${a.theme.color["Success/Success 60"]});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${a=>!a.disabled&&!a.$readonly&&!a.$isLoading&&`
      ${ul} {
        border-color: var(--admiral-color-Error_Error60Main, ${a.theme.color["Error/Error 60 Main"]});
      }
  
      &:hover ${ul} {
        border-color: var(--admiral-color-Error_Error70, ${a.theme.color["Error/Error 70"]});
      }
    `}
  }

  border-radius: ${a=>a.$skeleton?0:`var(--admiral-border-radius-Medium, ${yn(a.theme.shape)})`};

  ${({$skeleton:a})=>a&&qf};
  ${({$skeleton:a})=>a&&p2};
`,zg=V.div`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({$dimension:a})=>{switch(a){case"xl":return"12px 16px";case"s":return"6px 12px";default:return"8px 16px"}}};

  background-color: transparent;

  ${({$dimension:a})=>{switch(a){case"xl":return Ne["Body/Body 1 Long"];case"s":return Ne["Body/Body 2 Long"];default:return Ne["Body/Body 1 Short"]}}}
`,S2=Y`
  ${Ne["Body/Body 1 Short"]}
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  background-color: var(--admiral-color-Special_ElevatedBG, ${a=>a.theme.color["Special/Elevated BG"]});
  border-radius: var(--admiral-border-radius-Medium, ${a=>yn(a.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${a=>Oo(a.theme.shadow["Shadow 08"])});
  overflow: auto;
`,x2=V(Lf)`
  ${S2}
`,E2=V.div`
  user-select: none;
`,$2=V(Hf)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${a=>a.$selected&&!a.$hovered&&!a.$preselected&&a.$multiple&&"background-color: transparent;"}
`,_2=({visibleValue:a,isSearchPanelOpen:r,targetRef:u,forceHideOverflowTooltip:c})=>{const s=h.useRef(null),[d,v]=h.useState(!1),[b,p]=h.useState(!1);h.useEffect(()=>{s.current&&vn(s.current)!==d&&v(vn(s.current))},[b,v]),h.useEffect(()=>{function y(){p(!0)}function x(){p(!1)}const S=s.current;if(S)return S.addEventListener("mouseenter",y),S.addEventListener("mouseleave",x),()=>{S.removeEventListener("mouseenter",y),S.removeEventListener("mouseleave",x)}},[p]);const m=!c&&!r&&b&&d;return $.jsxs($.Fragment,{children:[$.jsx(d2,{ref:s,children:a}),m&&$.jsx(Hi,{renderContent:()=>a,targetElement:u.current})]})},N2=a=>a.stopPropagation(),w2=V.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`,T2=h.forwardRef(({options:a,...r},u)=>{const c=h.useRef(null);return h.useEffect(()=>{var d;function s(v){const b=G.getCode(v);b&&[G[" "],G.Enter,G.ArrowDown,G.ArrowUp].includes(b)&&v.preventDefault()}return(d=c.current)==null||d.addEventListener("keydown",s),()=>{var v;return(v=c.current)==null?void 0:v.removeEventListener("keydown",s)}},[]),$.jsxs(w2,{ref:ya(u,c),...r,onClick:N2,children:[$.jsx("option",{value:""}),a.map(s=>$.jsx("option",{value:s.value,disabled:s.disabled,children:s.value},s.value))]})}),Rg=h.createContext(null),M2=()=>h.useContext(Rg),A2=({children:a,...r})=>$.jsx(Rg.Provider,{value:r,children:a}),O2=(a="",r="",u="wholly")=>{const c=(u==="word"?r.split(" "):[r]).filter(Boolean).map(b=>b.toLowerCase()),s=["[","]","\\","^","$",".","|","?","*","+","(",")"],d=c.map(b=>`(${b.split("").map(p=>s.includes(p)?`\\${p}`:p).join("")})?`).join(""),v=a.split(new RegExp(d,"gi")).filter(Boolean);return!r||v.some(b=>c.includes(b.toLowerCase()))},C2=V.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${a=>a.disabled?"not-allowed":a.readOnly?"default":"pointer"};

  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Short"]:Ne["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};

  fieldset[data-dimension='s'] && {
    ${Ne["Body/Body 2 Short"]};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  ${a=>a.readOnly?"pointer-events: none":""};
`,D2=V.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: ${"8px"};
  ${a=>a.$dimension==="s"?Ne["Body/Body 2 Short"]:Ne["Body/Body 1 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${a.theme.color["Neutral/Neutral 90"]})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${a=>a.theme.color["Neutral/Neutral 30"]});
  }
  fieldset[data-dimension='s'] && {
    ${Ne["Body/Body 2 Short"]}
  }
`,B2=V.div`
  margin-top: 4px;
  ${a=>a.$dimension==="s"?Ne["Caption/Caption 1"]:Ne["Body/Body 2 Short"]}
  color: ${a=>a.disabled?`var(--admiral-color-Neutral_Neutral30, ${a.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.theme.color["Neutral/Neutral 50"]})`};

  fieldset[data-dimension='s'] && {
    ${Ne["Caption/Caption 1"]}
  }
`,z2=V(_g)`
  margin-top: 2px;
`,Hg=h.forwardRef(({children:a,disabled:r=!1,readOnly:u=!1,hovered:c,dimension:s="m",error:d,indeterminate:v=!1,extraText:b,className:p,id:m,name:y,style:x,...S},w)=>{const _=h.useMemo(()=>m||ji(),[m]),B={"data-field-id":_,"data-field-name":y};return Bf(S,B),$.jsxs(C2,{className:p,$dimension:s,disabled:r,readOnly:u,style:x,...B,onClick:O=>{O.target.tagName!=="INPUT"&&O.stopPropagation()},children:[$.jsx(z2,{...S,ref:w,disabled:r,readOnly:u,type:"checkbox",indeterminate:v,onKeyDown:O=>{var M;u&&G.getCode(O)===G[" "]&&O.preventDefault(),(M=S.onKeyDown)==null||M.call(S,O)},"data-hovered":c,hovered:c,dimension:s,id:_,name:y,error:d}),a&&$.jsxs(D2,{$dimension:s,disabled:r,children:[a,b&&$.jsx(B2,{disabled:r,$dimension:s,children:b})]})]})});Hg.displayName="CheckboxField";V(zg)`
  background-color: ${({active:a,selected:r,theme:u})=>r?`var(--admiral-color-Opacity_Focus, ${u.color["Opacity/Focus"]})`:a?`var(--admiral-color-Opacity_Hover, ${u.color["Opacity/Hover"]})`:"transparent"};

  color: ${({disabled:a,theme:r})=>a?`var(--admiral-color-Neutral_Neutral30, ${r.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${r.color["Neutral/Neutral 90"]})`};
  cursor: ${({disabled:a})=>a?"not-allowed":"pointer"};
  & > * {
    pointer-events: ${({disabled:a})=>a?"none":"all"};
  }
`;const R2=V(Hg)`
  margin-right: 8px;
  flex-shrink: 0;
`,H2=a=>Ag()?$.jsx(j2,{...a}):null,j2=({disabled:a=!1,id:r,value:u,children:c,renderOption:s,renderChip:d,...v})=>{const b=Ag(),p=Og(),m=(p==null?void 0:p.disabled)||a,y=h.useCallback(()=>c,[c]),x=d||y,S=h.useMemo(()=>s?s({disabled:a}):c,[s,a,u,c]),w={};vr(v,w,"data",!1);const _=h.useMemo(()=>({id:r,value:u,disabled:m,children:S,renderChip:x,...w}),[r,u,m,S,x]);return h.useEffect(()=>{var B;return(B=b==null?void 0:b.onConstantOptionMount)==null||B.call(b,_),()=>{var O;return(O=b==null?void 0:b.onConstantOptionUnMount)==null?void 0:O.call(b,_)}},[b==null?void 0:b.onConstantOptionMount,b==null?void 0:b.onConstantOptionUnMount,_]),null},L2=({id:a,disabled:r=!1,readOnly:u=!1,value:c,children:s,renderOption:d,renderChip:v,...b})=>{const p=M2(),m=Og(),y=(m==null?void 0:m.disabled)||r,x=S=>p!=null&&p.multiple?(({selected:w=!1,hovered:_=!1})=>$.jsxs($.Fragment,{children:[(p==null?void 0:p.showCheckbox)&&$.jsx(R2,{checked:w,hovered:_,dimension:(p==null?void 0:p.dimension)==="s"?"s":"m",disabled:r,onChange:()=>!1}),s]}))(S):s;return h.useEffect(()=>{var _;const S=a||c,w={id:c,value:c,render:B=>{return d?d(B):h.createElement($2,{...B,dimension:(O=p==null?void 0:p.dimension,O==="xl"?"l":O),key:S,...b,$selected:B.selected,$hovered:B.hovered,$preselected:B.preselected,$multiple:p==null?void 0:p.multiple},x({selected:B.selected,hovered:B.hovered}));var O},disabled:y,readOnly:u};return(_=p==null?void 0:p.onDropDownOptionMount)==null||_.call(p,w),()=>{var B;return(B=p==null?void 0:p.onDropDownOptionUnMount)==null?void 0:B.call(p,w)}},[p==null?void 0:p.onDropDownOptionMount,p==null?void 0:p.onDropDownOptionUnMount,p==null?void 0:p.dimension,p==null?void 0:p.multiple]),null},sn=a=>$.jsxs($.Fragment,{children:[$.jsx(H2,{...a}),$.jsx(L2,{...a})]}),U2=()=>h.useMemo(ji,[]),k2=V(zg)`
  color: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
`,xp=a=>a.stopPropagation(),Ep=()=>{},jg=h.forwardRef(({value:a,isLoading:r,className:u,style:c,status:s,icons:d,portalTargetRef:v,targetElement:b,inputTargetRef:p,disabled:m,readOnly:y,placeholder:x,defaultValue:S,dimension:w="m",idleHeight:_="fixed",minRowCount:B="none",maxRowCount:O="none",mode:M="select",multiple:z=!1,showCheckbox:L=!0,displayClearIcon:J=!1,onClearIconClick:Q,onInputChange:te,inputValue:ae,defaultInputValue:de,renderSelectValue:ne,onFocus:he,onBlur:Be,children:Ue,alignDropdown:Ae="stretch",alignSelf:pt="stretch",skeleton:ze=!1,locale:U,dropContainerCssMixin:W,dropContainerClassName:ee,dropContainerStyle:K,renderDropDownTopPanel:E,renderDropDownBottomPanel:j,renderTopPanel:Z,renderBottomPanel:X,forcedOpen:I=!1,onChangeDropDownState:fe,onInputKeyDown:ue,onInputKeyUp:Xe,onInputKeyUpCapture:ye,onInputKeyDownCapture:et,searchFormat:Ot="wholly",onFilterItem:Qe=O2,virtualScroll:Re,title:Ht,forceHideOverflowTooltip:Ca=!1,onSelectedChange:ba,moveSelectedOnTop:_t,clearInputValueAfterSelect:Ke=!0,openButtonPropsConfig:kt=Ep,clearButtonPropsConfig:jt=Ep,...tt},nt)=>{const Sa=rg()||Df,bn=(U==null?void 0:U.emptyMessage)||$.jsx(k2,{$dimension:w,children:Sa.locales[Sa.currentLocale].select.emptyMessage}),[ke,Yl]=h.useState(a??S),[Da,bt]=h.useState(""),Je=ae===void 0?Da:ae,[st,re]=h.useState(!1),[ce,ve]=h.useState(),[Oe,Ze]=h.useState([]),[He,Vt]=h.useState([]),[we,Xt]=h.useState(I),[Qt,la]=h.useState(!1),[na,Zt]=h.useState(void 0),fl=a===void 0,ra=M==="select",Pi=h.useMemo(()=>O!=="none"&&O>0?O:_==="fixed"?1:"none",[O,_])!=="none",Sn=a??S,Ba=h.useRef(Array.isArray(Sn)?Sn:[]),Pl=h.useRef(!1),xa=h.useRef([]);h.useEffect(()=>{Array.isArray(a)&&(Ba.current=a)},[a]);const ia=h.useMemo(()=>z?null:Oe.find(F=>F.value===ke),[z,Oe,ke]),at=h.useMemo(()=>z&&Array.isArray(ke)?ke.reduce((F,se)=>{const ie=Oe.find(Ge=>Ge.value===se);return ie&&F.push(ie),F},[]):[],[Oe,ke,z]),Ct=jf(we),[Ea,xn]=h.useState([]);h.useEffect(()=>{if(z&&_t||!(Ea.length>0)||xn([]),z&&_t&&Ct!==we&&we){const F=at.map(ie=>ie.value),se=F.length>0?F.reduce((ie,Ge)=>{const ut=He.find(pl=>pl.value===Ge);return ut&&ie.push(ut),ie},[]):[];xn(se)}},[He,we,at,z,_t]);const Sr=h.useMemo(()=>{const F=Ea.map(ie=>ie.value),se=He.filter(ie=>Qe(ie.value,Je,Ot)).reduce((ie,Ge)=>(F.includes(Ge.value)||ie.push(Ge),ie),[...Ea]);return se.length?se:[{id:"emptyMessage",render:()=>$.jsx(E2,{children:bn},"empty"),disabled:!0}]},[r,He,w,Je,Ea]);h.useEffect(()=>{ce&&(Sr.find(F=>F.id===ce)||ve(void 0))},[Sr,ce]);const ua=p??h.useRef(null),Pa=h.useRef(null),Dt=h.useRef(null),xr=b||(v==null?void 0:v.current)||Dt.current,Ga=h.useRef(null),oa=h.useRef(null),Va=h.useRef({shouldExtendInputValue:!1}),dl=F=>{Ze(se=>[...se,F]),xa.current.includes(F.value)&&(xa.current=xa.current.filter(se=>se!==F.value))},ft=F=>{Ba.current.includes(F.value)&&(xa.current=[...xa.current,F.value]),Ze(se=>se.filter(ie=>ie.value!==F.value))},Gi=h.useCallback(F=>{Vt(se=>[...se,F])},[]),Vi=h.useCallback(F=>{Vt(se=>se.filter(ie=>ie.id!==F.id))},[]),$a=h.useCallback(()=>{Xt(!1),ua.current&&ol(ua.current,{value:""}),re(!0)},[ke]),ca=h.useCallback(F=>{const se=Pa.current;if(!se)return;const ie=Array.from(se.options),Ge=ie.find(ut=>ut.value===F);if(Ge&&(z||ie.forEach(ut=>ut.selected=!1),Ge.selected=!z||!Ge.selected,se.dispatchEvent(new Event("change",{bubbles:!0})),z||$a(),Je&&ua.current&&Ke)){ol(ua.current,{value:"",selectionEnd:0,selectionStart:0});const ut=ce;ve(""),setTimeout(()=>ve(ut))}},[$a,z,Je,ce]),zo=h.useCallback(()=>{const F=Pa.current;F&&(F.selectedIndex=-1,F.dispatchEvent(new Event("change",{bubbles:!0})))},[]);h.useEffect(()=>{I!==we&&Xt(I)},[I]),h.useEffect(()=>{var F;fe==null||fe(we),!we&&Qt&&document.activeElement!==Dt.current&&((F=Pa.current)==null||F.focus())},[we,Qt]);const Xi=Q||zo,Er=Pi&&!we,Ro=h.useCallback(()=>$.jsx(c2,{containerRef:Ga,options:at,shouldShowCount:Er,disabled:m,readOnly:y,onChipRemove:ca,onChipClick:xp,isOptionsListOpen:we,hasMaxHeight:!!O&&O!=="none"}),[at,Er,m,y,ca,we,O]),hl=(z?!(ke!=null&&ke.length):!ke)&&!!x&&!Je,En=ne==null?void 0:ne(ke,Je),_a=ia==null?void 0:ia.children,$r=z?Ro():_a,ml=En||$r||ke||null,Na=typeof ml=="string",_r=Na?$.jsx(_2,{visibleValue:ml,isSearchPanelOpen:we,targetRef:Dt,forceHideOverflowTooltip:Ca}):ml,$n=()=>{Xt(F=>!F)},Ho=()=>{if(!Je&&ke)return z?void(()=>{var ie;const F=(se=[...at].reverse(),(ie=se.find(({disabled:Ge})=>!Ge))==null?void 0:ie.value);var se;F&&ca(F)})():re(!1)};h.useEffect(()=>{var se;if(!y&&!m)return(se=Dt.current)==null||se.addEventListener("keydown",F),()=>{var ie;(ie=Dt.current)==null||ie.removeEventListener("keydown",F)};function F(ie){const Ge=G.getCode(ie);Ge===G[" "]&&(!ra&&Je?ie.stopPropagation():we||(ie.preventDefault(),Xt(!0),ie.stopPropagation())),Ge!==G.Enter||we||(ie.preventDefault(),Xt(!0),ie.stopPropagation()),Ge!==G.ArrowDown&&Ge!==G.ArrowUp||we||(Xt(!0),ie.stopPropagation());const ut=ie.ctrlKey||ie.metaKey||ie.altKey;ie.key.length!==1||ut||Na&&!Je&&st&&(Va.current.shouldExtendInputValue=!0),Ge!==G.Backspace||ie.repeat||Ho(),Ge===G.Backspace&&((pl=>{if(!Na||!ua.current||Je||!st||!ke)return;pl.preventDefault();const za=ml.slice(0,-1);ol(ua.current,{value:za,selectionEnd:za.length,selectionStart:za.length})})(ie),Xt(!0)),Ge===G.Escape&&we&&(Xt(!1),ie.preventDefault(),ie.stopPropagation())}},[y,m,ra,Je,we,at]),h.useEffect(()=>{var se;function F(){Pl.current=!1}return(se=Dt.current)==null||se.addEventListener("keyup",F),()=>{var ie;(ie=Dt.current)==null||ie.removeEventListener("keyup",F)}},[]),h.useEffect(()=>{(!Qt&&!z||z)&&(ua.current&&ol(ua.current,{value:""}),re(!0))},[z,Qt]),h.useEffect(()=>{var F,se;we&&(ra?(F=Pa.current)==null||F.focus():(se=ua.current)==null||se.focus(),Zt(""))},[we,ra]),h.useEffect(()=>{na&&ve("")},[na]),h.useEffect(()=>{ce&&Zt("")},[ce]),h.useEffect(()=>{if(we){const F=ke&&!Array.isArray(ke)?ke:void 0;ve(F)}},[we]),h.useEffect(()=>{fl||Yl(a)},[a,fl]),dg([Dt,oa],F=>{var se;F.target&&((se=Dt.current)!=null&&se.contains(F.target))||(la(!1),$a())});const Qi=st&&(z?!!(ke!=null&&ke.length):!!ke),Nt=h.useMemo(()=>h.Children.map(Ue,F=>h.isValidElement(F)?h.cloneElement(F,{key:ji(),...F.props}):null),[Ue]),Zi=h.useMemo(()=>$.jsx(A2,{onDropDownOptionMount:Gi,onDropDownOptionUnMount:Vi,dimension:w,multiple:z,showCheckbox:L,children:Nt}),[Nt,w,L,z]),jo=h.useMemo(()=>$.jsx(Hx,{onConstantOptionMount:dl,onConstantOptionUnMount:ft,children:Nt}),[Nt]),_n=Sb(tt),Fi=cg(tt),Gl={icon:Uf,id:"searchSelectClearIcon",onClick:Xi,"aria-hidden":!0},Ki={$isOpen:we,onClick:$n,"aria-hidden":!0};return $.jsxs(b2,{className:u,style:c,$focused:Qt,$multiple:z,disabled:m,"data-disabled":m,$readonly:y,$isLoading:r,$dimension:w,ref:Dt,"data-status":s,onClick:m||y||r?void 0:F=>{var se;F.target&&((se=oa.current)!=null&&se.contains(F.target))||!ra&&we||$n()},onFocus:F=>{Qt||(la(!0),he==null||he(F))},onMouseDown:F=>{Qt&&F.preventDefault()},$skeleton:ze,onBlur:F=>{var se,ie;F.currentTarget.contains(F.relatedTarget)||(se=oa.current)!=null&&se.contains(F.relatedTarget)||(la(!1),Xt(!1),(ie=Pa.current)==null||ie.blur(),Be==null||Be(F),Pl.current=!1)},title:Ht,children:[jo,Zi,$.jsx(T2,{ref:ya(nt,Pa),value:ke,multiple:z,disabled:m,options:Oe,...tt,onChange:F=>{var Ge;if(Pl.current&&ra)return void Zt(F.target.value);const se=z?Array.from(F.target.selectedOptions).map(ut=>ut.value):F.target.value;let ie=[];if(z&&Array.isArray(se)){const ut=se.filter(Lt=>!Ba.current.includes(Lt)&&!xa.current.includes(Lt)),pl=Ba.current.filter(Lt=>!se.includes(Lt)&&!xa.current.includes(Lt));ie=[...Ba.current,...ut];const za=[...xa.current];pl.forEach(Lt=>{const Wi=ie.findIndex(Nn=>Lt===Nn);Wi>-1&&ie.splice(Wi,1);const Nr=za.findIndex(Nn=>Lt===Nn);Nr>-1&&za.splice(Nr,1)}),Ba.current=ie,xa.current=za}fl&&Yl(z?ie:se),(Ge=tt.onChange)==null||Ge.call(tt,F),ba==null||ba(z?ie:se)}}),$.jsx(ul,{}),$.jsxs(Bg,{tabIndex:-1,ref:Ga,className:"selectValueWrapper",$dimension:w,$multiple:z,$minRowCount:B!=="none"?B:void 0,$maxRowCount:O!=="none"?O:void 0,$idleHeight:_,$opened:we,$isEmpty:hl,children:[st&&_r,(x&&hl||!ra)&&$.jsx(m2,{"data-id":tt.id,placeholder:hl?x:"",tabIndex:-1,ref:ua,disabled:m,readOnly:y||ra,value:Je,defaultValue:de,$isMultiple:z,$dimension:w,onChange:F=>{z||re(!1),(se=>{Va.current.shouldExtendInputValue&&Na&&(se.target.value=`${ml}${se.target.value}`,Va.current.shouldExtendInputValue=!1)})(F),ae===void 0&&bt(F.target.value),te==null||te(F)},onKeyDown:ue,onKeyUp:Xe,onKeyUpCapture:ye,onKeyDownCapture:et})]}),we&&!ze&&$.jsx(Rf,{ref:oa,tabIndex:-1,targetElement:xr,"data-dimension":w,alignSelf:Ae||pt,dropContainerCssMixin:W,className:ee,style:K,..._n,children:$.jsx(x2,{dimension:w==="xl"?"l":w,active:ce,selected:ke,onActivateItem:F=>ve(F),onSelectItem:ca,onDeselectItem:ca,multiSelection:z,model:Sr,renderTopPanel:E||Z,renderBottomPanel:j||X,containerRef:oa,virtualScroll:Re,preventFocusSteal:!0,preselectedModeActive:ra,preselected:na,onPreselectItem:Zt,onMenuKeyDown:()=>{Pl.current=!0},...Fi})}),$.jsxs(y2,{$multiple:z,$dimension:w,onClick:xp,onMouseDown:F=>F.preventDefault(),children:[r&&$.jsx(Gf,{dimension:w==="s"?"ms":"m"}),J&&!y&&Qi&&$.jsx(Sf,{...Gl,...jt(Gl)}),d,!y&&$.jsx(xb,{"data-disabled":!!m||void 0,"data-loading":!!r||void 0,...Ki,...kt(Ki)})]})]})});jg.displayName="Select";const xo=h.forwardRef((a,r)=>{const u=h.useRef(null),{className:c,maxLength:s,displayInline:d,status:v,required:b,extraText:p,label:m,id:y=ji(),disabled:x,displayCharacterCounter:S,characterCounterVisibilityThreshold:w,skeleton:_,...B}=a,O={className:c,extraText:p,status:v,required:b,label:m,id:y,displayInline:d,disabled:x,maxLength:s,inputRef:u,displayCharacterCounter:S,characterCounterVisibilityThreshold:w,skeleton:_,"data-field-id":y,"data-field-name":B.name};og(B,O),Bf(B,O);const M={ref:ya(r,u),id:y,"aria-required":b,status:v,disabled:x,maxLength:s,skeleton:_,...B};return $.jsx(Pf,{...O,children:$.jsx(Tg,{...M})})});xo.displayName="InputField";const q2=V(jg)`
  [data-status='error'] & {
    border-color: var(--admiral-color-Error_Error60Main, ${a=>a.theme.color["Error/Error 60 Main"]});
  }
`,ir=h.forwardRef((a,r)=>{const{className:u,displayInline:c,status:s,required:d,extraText:v,label:b,id:p=U2(),disabled:m,skeleton:y,...x}=a,S={className:u,extraText:v,status:s,required:d,label:b,id:p,displayInline:c,disabled:m,skeleton:y,"data-field-id":p,"data-field-name":x.name};og(x,S),Bf(x,S);const w={ref:r,id:p,"aria-required":d,status:s,disabled:m,skeleton:y,...x};return $.jsx(Pf,{...S,children:$.jsx(q2,{...w})})});ir.displayName="SelectField";const Y2=Y`
  background: ${({$background:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success50Main, ${r.color["Success/Success 50 Main"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary60Main, ${r.color["Primary/Primary 60 Main"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error60Main, ${r.color["Error/Error 60 Main"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning50Main, ${r.color["Warning/Warning 50 Main"]})`;default:return a}}};
`,P2=Y`
  background: ${({$background:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success10, ${r.color["Success/Success 10"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary10, ${r.color["Primary/Primary 10"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error10, ${r.color["Error/Error 10"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning10, ${r.color["Warning/Warning 10"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`;default:return a||`var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]})`}}};
`,G2=Y`
  border: 1px solid
    ${({$border:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success40, ${r.color["Success/Success 40"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary50, ${r.color["Primary/Primary 50"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error50, ${r.color["Error/Error 50"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning40, ${r.color["Warning/Warning 40"]})`;case"neutral":return`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`;default:return a||`var(--admiral-color-Neutral_Neutral40, ${r.color["Neutral/Neutral 40"]})`}}};
`,V2=Y`
  background: ${({$backgroundHover:a,theme:r})=>{switch(a){case"success":case"green":return`var(--admiral-color-Success_Success20, ${r.color["Success/Success 20"]})`;case"primary":case"blue":return`var(--admiral-color-Primary_Primary20, ${r.color["Primary/Primary 20"]})`;case"danger":case"red":return`var(--admiral-color-Error_Error20, ${r.color["Error/Error 20"]})`;case"warning":case"orange":return`var(--admiral-color-Warning_Warning20, ${r.color["Warning/Warning 20"]})`;case"neutral":return`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`;default:return a||`var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]})`}}};
`,X2=V.button`
  position: relative;
  box-sizing: border-box;
  max-width: 100%;

  ${({$dimension:a})=>`
    height: ${a==="s"?20:24}px;
    padding: ${a==="s"?1:3}px ${a==="s"?5:7}px;
  `}

  ${({$width:a})=>a&&`width: ${typeof a=="number"?`${a}px`:a};`}
  border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
  ${({$statusViaBackground:a,theme:r})=>a?P2:`background: var(--admiral-color-Opacity_Neutral8, ${r.color["Opacity/Neutral 8"]});`}
  ${({$statusViaBackground:a})=>a?G2:"border: 1px solid transparent;"}

  display: inline-flex;
  align-items: center;
  cursor: ${({$clickable:a})=>a?"pointer":"default"};

  &:hover,
  &:active {
    ${({$statusViaBackground:a,$clickable:r})=>r&&!a?"border: 1px solid transparent;":""}
    ${({$statusViaBackground:a,theme:r,$clickable:u})=>u?a?V2:`background: var(--admiral-color-Opacity_Neutral12, ${r.color["Opacity/Neutral 12"]});`:""}
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
      border-radius: var(--admiral-border-radius-Small, ${a=>dr(a.theme.shape)});
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${a=>a.theme.color["Primary/Primary 60 Main"]});
    }
  }
`,Q2=V.span`
  color: var(--admiral-color-Neutral_Neutral90, ${a=>a.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${Ne["Caption/Caption 1"]}
`,Z2=V.div`
  display: flex;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  ${Y2}
`,F2=V.div`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-right: 4px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${a=>a.theme.color["Neutral/Neutral 50"]});
  }
`,K2=V.div`
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
`,mo=h.forwardRef(({children:a,kind:r="neutral",dimension:u="m",width:c,statusViaBackground:s=!1,isBorderHidden:d=!1,icon:v,statusIcon:b,onClick:p,...m},y)=>{const x=h.useRef(null),S=h.useRef(null),[w,_]=h.useState(!1),[B,O]=h.useState(!1),M=typeof r=="object"?r.background?r.background:"neutral":r,z=d?"transparent":typeof r=="object"?r.background&&r.border?r.border:"neutral":r,L=typeof r=="object"?r.backgroundHover?r.backgroundHover:r.background?r.background:"neutral":r;return h.useLayoutEffect(()=>{const J=S.current;J&&vn(J)!==w&&_(vn(J))},[B,_]),h.useLayoutEffect(()=>{function J(){O(!0)}function Q(){O(!1)}const te=x.current;if(te)return te.addEventListener("mouseenter",J),te.addEventListener("mouseleave",Q),te.addEventListener("focus",J),te.addEventListener("blur",Q),()=>{te.removeEventListener("mouseenter",J),te.removeEventListener("mouseleave",Q),te.removeEventListener("focus",J),te.removeEventListener("blur",Q)}},[O]),$.jsxs($.Fragment,{children:[$.jsxs(X2,{ref:ya(y,x),$width:c,onClick:p,$clickable:!!p,$statusViaBackground:s,$border:z,$background:M,$backgroundHover:L,$dimension:u,type:"button",...m,children:[M!=="neutral"&&!s&&$.jsx(Z2,{$background:M}),s&&v&&$.jsx(F2,{children:v}),a&&$.jsx(Q2,{ref:S,children:a}),b&&$.jsx(K2,{children:b})]}),B&&w&&$.jsx(Hi,{targetElement:x.current,renderContent:()=>a})]})});mo.displayName="Tag";const W2="/t1-homework-1/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",J2="/t1-homework-1/assets/VTBGroupUI-Medium-CJW7SkqK.otf",I2="/t1-homework-1/assets/VTBGroupUI-Regular-JWIonCWQ.otf",eE=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${W2}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${J2}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${I2}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function tE(a){return $.jsx("style",{type:"text/css",children:eE,...a})}var Si={},$p;function aE(){if($p)return Si;$p=1,Object.defineProperty(Si,"__esModule",{value:!0}),Si.parse=v,Si.serialize=m;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,d=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function v(S,w){const _=new d,B=S.length;if(B<2)return _;const O=(w==null?void 0:w.decode)||y;let M=0;do{const z=S.indexOf("=",M);if(z===-1)break;const L=S.indexOf(";",M),J=L===-1?B:L;if(z>J){M=S.lastIndexOf(";",z-1)+1;continue}const Q=b(S,M,z),te=p(S,z,Q),ae=S.slice(Q,te);if(_[ae]===void 0){let de=b(S,z+1,J),ne=p(S,J,de);const he=O(S.slice(de,ne));_[ae]=he}M=J+1}while(M<B);return _}function b(S,w,_){do{const B=S.charCodeAt(w);if(B!==32&&B!==9)return w}while(++w<_);return _}function p(S,w,_){for(;w>_;){const B=S.charCodeAt(--w);if(B!==32&&B!==9)return w+1}return _}function m(S,w,_){const B=(_==null?void 0:_.encode)||encodeURIComponent;if(!a.test(S))throw new TypeError(`argument name is invalid: ${S}`);const O=B(w);if(!r.test(O))throw new TypeError(`argument val is invalid: ${w}`);let M=S+"="+O;if(!_)return M;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);M+="; Max-Age="+_.maxAge}if(_.domain){if(!u.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);M+="; Domain="+_.domain}if(_.path){if(!c.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);M+="; Path="+_.path}if(_.expires){if(!x(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);M+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(M+="; HttpOnly"),_.secure&&(M+="; Secure"),_.partitioned&&(M+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return M}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function x(S){return s.call(S)==="[object Date]"}return Si}aE();var _p="popstate";function lE(a={}){function r(c,s){let{pathname:d,search:v,hash:b}=c.location;return _f("",{pathname:d,search:v,hash:b},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function u(c,s){return typeof s=="string"?s:Di(s)}return rE(r,u,null,a)}function yt(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}function Oa(a,r){if(!a){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function nE(){return Math.random().toString(36).substring(2,10)}function Np(a,r){return{usr:a.state,key:a.key,idx:r}}function _f(a,r,u=null,c){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof r=="string"?Li(r):r,state:u,key:r&&r.key||c||nE()}}function Di({pathname:a="/",search:r="",hash:u=""}){return r&&r!=="?"&&(a+=r.charAt(0)==="?"?r:"?"+r),u&&u!=="#"&&(a+=u.charAt(0)==="#"?u:"#"+u),a}function Li(a){let r={};if(a){let u=a.indexOf("#");u>=0&&(r.hash=a.substring(u),a=a.substring(0,u));let c=a.indexOf("?");c>=0&&(r.search=a.substring(c),a=a.substring(0,c)),a&&(r.pathname=a)}return r}function rE(a,r,u,c={}){let{window:s=document.defaultView,v5Compat:d=!1}=c,v=s.history,b="POP",p=null,m=y();m==null&&(m=0,v.replaceState({...v.state,idx:m},""));function y(){return(v.state||{idx:null}).idx}function x(){b="POP";let O=y(),M=O==null?null:O-m;m=O,p&&p({action:b,location:B.location,delta:M})}function S(O,M){b="PUSH";let z=_f(B.location,O,M);m=y()+1;let L=Np(z,m),J=B.createHref(z);try{v.pushState(L,"",J)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;s.location.assign(J)}d&&p&&p({action:b,location:B.location,delta:1})}function w(O,M){b="REPLACE";let z=_f(B.location,O,M);m=y();let L=Np(z,m),J=B.createHref(z);v.replaceState(L,"",J),d&&p&&p({action:b,location:B.location,delta:0})}function _(O){return iE(O)}let B={get action(){return b},get location(){return a(s,v)},listen(O){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(_p,x),p=O,()=>{s.removeEventListener(_p,x),p=null}},createHref(O){return r(s,O)},createURL:_,encodeLocation(O){let M=_(O);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:S,replace:w,go(O){return v.go(O)}};return B}function iE(a,r=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),yt(u,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:Di(a);return c=c.replace(/ $/,"%20"),!r&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function Lg(a,r,u="/"){return uE(a,r,u,!1)}function uE(a,r,u,c){let s=typeof r=="string"?Li(r):r,d=sl(s.pathname||"/",u);if(d==null)return null;let v=Ug(a);oE(v);let b=null;for(let p=0;b==null&&p<v.length;++p){let m=bE(d);b=vE(v[p],m,c)}return b}function Ug(a,r=[],u=[],c=""){let s=(d,v,b)=>{let p={relativePath:b===void 0?d.path||"":b,caseSensitive:d.caseSensitive===!0,childrenIndex:v,route:d};p.relativePath.startsWith("/")&&(yt(p.relativePath.startsWith(c),`Absolute route path "${p.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(c.length));let m=cl([c,p.relativePath]),y=u.concat(p);d.children&&d.children.length>0&&(yt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ug(d.children,r,y,m)),!(d.path==null&&!d.index)&&r.push({path:m,score:pE(m,d.index),routesMeta:y})};return a.forEach((d,v)=>{var b;if(d.path===""||!((b=d.path)!=null&&b.includes("?")))s(d,v);else for(let p of kg(d.path))s(d,v,p)}),r}function kg(a){let r=a.split("/");if(r.length===0)return[];let[u,...c]=r,s=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return s?[d,""]:[d];let v=kg(c.join("/")),b=[];return b.push(...v.map(p=>p===""?d:[d,p].join("/"))),s&&b.push(...v),b.map(p=>a.startsWith("/")&&p===""?"/":p)}function oE(a){a.sort((r,u)=>r.score!==u.score?u.score-r.score:gE(r.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var cE=/^:[\w-]+$/,sE=3,fE=2,dE=1,hE=10,mE=-2,wp=a=>a==="*";function pE(a,r){let u=a.split("/"),c=u.length;return u.some(wp)&&(c+=mE),r&&(c+=fE),u.filter(s=>!wp(s)).reduce((s,d)=>s+(cE.test(d)?sE:d===""?dE:hE),c)}function gE(a,r){return a.length===r.length&&a.slice(0,-1).every((c,s)=>c===r[s])?a[a.length-1]-r[r.length-1]:0}function vE(a,r,u=!1){let{routesMeta:c}=a,s={},d="/",v=[];for(let b=0;b<c.length;++b){let p=c[b],m=b===c.length-1,y=d==="/"?r:r.slice(d.length)||"/",x=Eo({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),S=p.route;if(!x&&m&&u&&!c[c.length-1].route.index&&(x=Eo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(s,x.params),v.push({params:s,pathname:cl([d,x.pathname]),pathnameBase:$E(cl([d,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(d=cl([d,x.pathnameBase]))}return v}function Eo(a,r){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[u,c]=yE(a.path,a.caseSensitive,a.end),s=r.match(u);if(!s)return null;let d=s[0],v=d.replace(/(.)\/+$/,"$1"),b=s.slice(1);return{params:c.reduce((m,{paramName:y,isOptional:x},S)=>{if(y==="*"){let _=b[S]||"";v=d.slice(0,d.length-_.length).replace(/(.)\/+$/,"$1")}const w=b[S];return x&&!w?m[y]=void 0:m[y]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:v,pattern:a}}function yE(a,r=!1,u=!0){Oa(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let c=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,b,p)=>(c.push({paramName:b,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(c.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),c]}function bE(a){try{return a.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Oa(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),a}}function sl(a,r){if(r==="/")return a;if(!a.toLowerCase().startsWith(r.toLowerCase()))return null;let u=r.endsWith("/")?r.length-1:r.length,c=a.charAt(u);return c&&c!=="/"?null:a.slice(u)||"/"}function SE(a,r="/"){let{pathname:u,search:c="",hash:s=""}=typeof a=="string"?Li(a):a;return{pathname:u?u.startsWith("/")?u:xE(u,r):r,search:_E(c),hash:NE(s)}}function xE(a,r){let u=r.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?u.length>1&&u.pop():s!=="."&&u.push(s)}),u.length>1?u.join("/"):"/"}function Fs(a,r,u,c){return`Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function EE(a){return a.filter((r,u)=>u===0||r.route.path&&r.route.path.length>0)}function qg(a){let r=EE(a);return r.map((u,c)=>c===r.length-1?u.pathname:u.pathnameBase)}function Yg(a,r,u,c=!1){let s;typeof a=="string"?s=Li(a):(s={...a},yt(!s.pathname||!s.pathname.includes("?"),Fs("?","pathname","search",s)),yt(!s.pathname||!s.pathname.includes("#"),Fs("#","pathname","hash",s)),yt(!s.search||!s.search.includes("#"),Fs("#","search","hash",s)));let d=a===""||s.pathname==="",v=d?"/":s.pathname,b;if(v==null)b=u;else{let x=r.length-1;if(!c&&v.startsWith("..")){let S=v.split("/");for(;S[0]==="..";)S.shift(),x-=1;s.pathname=S.join("/")}b=x>=0?r[x]:"/"}let p=SE(s,b),m=v&&v!=="/"&&v.endsWith("/"),y=(d||v===".")&&u.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var cl=a=>a.join("/").replace(/\/\/+/g,"/"),$E=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),_E=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,NE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function wE(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Pg=["POST","PUT","PATCH","DELETE"];new Set(Pg);var TE=["GET",...Pg];new Set(TE);var yr=h.createContext(null);yr.displayName="DataRouter";var Co=h.createContext(null);Co.displayName="DataRouterState";var Gg=h.createContext({isTransitioning:!1});Gg.displayName="ViewTransition";var ME=h.createContext(new Map);ME.displayName="Fetchers";var AE=h.createContext(null);AE.displayName="Await";var qa=h.createContext(null);qa.displayName="Navigation";var Do=h.createContext(null);Do.displayName="Location";var Ya=h.createContext({outlet:null,matches:[],isDataRoute:!1});Ya.displayName="Route";var Qf=h.createContext(null);Qf.displayName="RouteError";function OE(a,{relative:r}={}){yt(Ui(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=h.useContext(qa),{hash:s,pathname:d,search:v}=ki(a,{relative:r}),b=d;return u!=="/"&&(b=d==="/"?u:cl([u,d])),c.createHref({pathname:b,search:v,hash:s})}function Ui(){return h.useContext(Do)!=null}function ql(){return yt(Ui(),"useLocation() may be used only in the context of a <Router> component."),h.useContext(Do).location}var Vg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xg(a){h.useContext(qa).static||h.useLayoutEffect(a)}function br(){let{isDataRoute:a}=h.useContext(Ya);return a?GE():CE()}function CE(){yt(Ui(),"useNavigate() may be used only in the context of a <Router> component.");let a=h.useContext(yr),{basename:r,navigator:u}=h.useContext(qa),{matches:c}=h.useContext(Ya),{pathname:s}=ql(),d=JSON.stringify(qg(c)),v=h.useRef(!1);return Xg(()=>{v.current=!0}),h.useCallback((p,m={})=>{if(Oa(v.current,Vg),!v.current)return;if(typeof p=="number"){u.go(p);return}let y=Yg(p,JSON.parse(d),s,m.relative==="path");a==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:cl([r,y.pathname])),(m.replace?u.replace:u.push)(y,m.state,m)},[r,u,d,s,a])}h.createContext(null);function DE(){let{matches:a}=h.useContext(Ya),r=a[a.length-1];return r?r.params:{}}function ki(a,{relative:r}={}){let{matches:u}=h.useContext(Ya),{pathname:c}=ql(),s=JSON.stringify(qg(u));return h.useMemo(()=>Yg(a,JSON.parse(s),c,r==="path"),[a,s,c,r])}function BE(a,r){return Qg(a)}function Qg(a,r,u,c){yt(Ui(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=h.useContext(qa),{matches:d}=h.useContext(Ya),v=d[d.length-1],b=v?v.params:{},p=v?v.pathname:"/",m=v?v.pathnameBase:"/",y=v&&v.route;{let M=y&&y.path||"";Zg(p,!y||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let x=ql(),S;S=x;let w=S.pathname||"/",_=w;if(m!=="/"){let M=m.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(M.length).join("/")}let B=Lg(a,{pathname:_});return Oa(y||B!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Oa(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),LE(B&&B.map(M=>Object.assign({},M,{params:Object.assign({},b,M.params),pathname:cl([m,s.encodeLocation?s.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?m:cl([m,s.encodeLocation?s.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),d,u,c)}function zE(){let a=PE(),r=wE(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),u=a instanceof Error?a.stack:null,c="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",a),v=h.createElement(h.Fragment,null,h.createElement("p",null,"💿 Hey developer 👋"),h.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",h.createElement("code",{style:d},"ErrorBoundary")," or"," ",h.createElement("code",{style:d},"errorElement")," prop on your route.")),h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},r),u?h.createElement("pre",{style:s},u):null,v)}var RE=h.createElement(zE,null),HE=class extends h.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,r){return r.location!==a.location||r.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:r.error,location:r.location,revalidation:a.revalidation||r.revalidation}}componentDidCatch(a,r){console.error("React Router caught the following error during render",a,r)}render(){return this.state.error!==void 0?h.createElement(Ya.Provider,{value:this.props.routeContext},h.createElement(Qf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jE({routeContext:a,match:r,children:u}){let c=h.useContext(yr);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),h.createElement(Ya.Provider,{value:a},u)}function LE(a,r=[],u=null,c=null){if(a==null){if(!u)return null;if(u.errors)a=u.matches;else if(r.length===0&&!u.initialized&&u.matches.length>0)a=u.matches;else return null}let s=a,d=u==null?void 0:u.errors;if(d!=null){let p=s.findIndex(m=>m.route.id&&(d==null?void 0:d[m.route.id])!==void 0);yt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let v=!1,b=-1;if(u)for(let p=0;p<s.length;p++){let m=s[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(b=p),m.route.id){let{loaderData:y,errors:x}=u,S=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||S){v=!0,b>=0?s=s.slice(0,b+1):s=[s[0]];break}}}return s.reduceRight((p,m,y)=>{let x,S=!1,w=null,_=null;u&&(x=d&&m.route.id?d[m.route.id]:void 0,w=m.route.errorElement||RE,v&&(b<0&&y===0?(Zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,_=null):b===y&&(S=!0,_=m.route.hydrateFallbackElement||null)));let B=r.concat(s.slice(0,y+1)),O=()=>{let M;return x?M=w:S?M=_:m.route.Component?M=h.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=p,h.createElement(jE,{match:m,routeContext:{outlet:p,matches:B,isDataRoute:u!=null},children:M})};return u&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?h.createElement(HE,{location:u.location,revalidation:u.revalidation,component:w,error:x,children:O(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):O()},null)}function Zf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UE(a){let r=h.useContext(yr);return yt(r,Zf(a)),r}function kE(a){let r=h.useContext(Co);return yt(r,Zf(a)),r}function qE(a){let r=h.useContext(Ya);return yt(r,Zf(a)),r}function Ff(a){let r=qE(a),u=r.matches[r.matches.length-1];return yt(u.route.id,`${a} can only be used on routes that contain a unique "id"`),u.route.id}function YE(){return Ff("useRouteId")}function PE(){var c;let a=h.useContext(Qf),r=kE("useRouteError"),u=Ff("useRouteError");return a!==void 0?a:(c=r.errors)==null?void 0:c[u]}function GE(){let{router:a}=UE("useNavigate"),r=Ff("useNavigate"),u=h.useRef(!1);return Xg(()=>{u.current=!0}),h.useCallback(async(s,d={})=>{Oa(u.current,Vg),u.current&&(typeof s=="number"?a.navigate(s):await a.navigate(s,{fromRouteId:r,...d}))},[a,r])}var Tp={};function Zg(a,r,u){!r&&!Tp[a]&&(Tp[a]=!0,Oa(!1,u))}h.memo(VE);function VE({routes:a,future:r,state:u}){return Qg(a,void 0,u,r)}function XE({basename:a="/",children:r=null,location:u,navigationType:c="POP",navigator:s,static:d=!1}){yt(!Ui(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=a.replace(/^\/*/,"/"),b=h.useMemo(()=>({basename:v,navigator:s,static:d,future:{}}),[v,s,d]);typeof u=="string"&&(u=Li(u));let{pathname:p="/",search:m="",hash:y="",state:x=null,key:S="default"}=u,w=h.useMemo(()=>{let _=sl(p,v);return _==null?null:{location:{pathname:_,search:m,hash:y,state:x,key:S},navigationType:c}},[v,p,m,y,x,S,c]);return Oa(w!=null,`<Router basename="${v}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:h.createElement(qa.Provider,{value:b},h.createElement(Do.Provider,{children:r,value:w}))}var po="get",go="application/x-www-form-urlencoded";function Bo(a){return a!=null&&typeof a.tagName=="string"}function QE(a){return Bo(a)&&a.tagName.toLowerCase()==="button"}function ZE(a){return Bo(a)&&a.tagName.toLowerCase()==="form"}function FE(a){return Bo(a)&&a.tagName.toLowerCase()==="input"}function KE(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function WE(a,r){return a.button===0&&(!r||r==="_self")&&!KE(a)}function Nf(a=""){return new URLSearchParams(typeof a=="string"||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce((r,u)=>{let c=a[u];return r.concat(Array.isArray(c)?c.map(s=>[u,s]):[[u,c]])},[]))}function JE(a,r){let u=Nf(a);return r&&r.forEach((c,s)=>{u.has(s)||r.getAll(s).forEach(d=>{u.append(s,d)})}),u}var uo=null;function IE(){if(uo===null)try{new FormData(document.createElement("form"),0),uo=!1}catch{uo=!0}return uo}var e6=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ks(a){return a!=null&&!e6.has(a)?(Oa(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${go}"`),null):a}function t6(a,r){let u,c,s,d,v;if(ZE(a)){let b=a.getAttribute("action");c=b?sl(b,r):null,u=a.getAttribute("method")||po,s=Ks(a.getAttribute("enctype"))||go,d=new FormData(a)}else if(QE(a)||FE(a)&&(a.type==="submit"||a.type==="image")){let b=a.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||b.getAttribute("action");if(c=p?sl(p,r):null,u=a.getAttribute("formmethod")||b.getAttribute("method")||po,s=Ks(a.getAttribute("formenctype"))||Ks(b.getAttribute("enctype"))||go,d=new FormData(b,a),!IE()){let{name:m,type:y,value:x}=a;if(y==="image"){let S=m?`${m}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else m&&d.append(m,x)}}else{if(Bo(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=po,c=null,s=go,v=a}return d&&s==="text/plain"&&(v=d,d=void 0),{action:c,method:u.toLowerCase(),encType:s,formData:d,body:v}}function Kf(a,r){if(a===!1||a===null||typeof a>"u")throw new Error(r)}async function a6(a,r){if(a.id in r)return r[a.id];try{let u=await import(a.module);return r[a.id]=u,u}catch(u){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function l6(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function n6(a,r,u){let c=await Promise.all(a.map(async s=>{let d=r.routes[s.route.id];if(d){let v=await a6(d,u);return v.links?v.links():[]}return[]}));return o6(c.flat(1).filter(l6).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Mp(a,r,u,c,s,d){let v=(p,m)=>u[m]?p.route.id!==u[m].route.id:!0,b=(p,m)=>{var y;return u[m].pathname!==p.pathname||((y=u[m].route.path)==null?void 0:y.endsWith("*"))&&u[m].params["*"]!==p.params["*"]};return d==="assets"?r.filter((p,m)=>v(p,m)||b(p,m)):d==="data"?r.filter((p,m)=>{var x;let y=c.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(v(p,m)||b(p,m))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((x=u[0])==null?void 0:x.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function r6(a,r,{includeHydrateFallback:u}={}){return i6(a.map(c=>{let s=r.routes[c.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),u&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function i6(a){return[...new Set(a)]}function u6(a){let r={},u=Object.keys(a).sort();for(let c of u)r[c]=a[c];return r}function o6(a,r){let u=new Set;return new Set(r),a.reduce((c,s)=>{let d=JSON.stringify(u6(s));return u.has(d)||(u.add(d),c.push({key:d,link:s})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var c6=new Set([100,101,204,205]);function s6(a,r){let u=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return u.pathname==="/"?u.pathname="_root.data":r&&sl(u.pathname,r)==="/"?u.pathname=`${r.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Fg(){let a=h.useContext(yr);return Kf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function f6(){let a=h.useContext(Co);return Kf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Wf=h.createContext(void 0);Wf.displayName="FrameworkContext";function Kg(){let a=h.useContext(Wf);return Kf(a,"You must render this element inside a <HydratedRouter> element"),a}function d6(a,r){let u=h.useContext(Wf),[c,s]=h.useState(!1),[d,v]=h.useState(!1),{onFocus:b,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:x}=r,S=h.useRef(null);h.useEffect(()=>{if(a==="render"&&v(!0),a==="viewport"){let B=M=>{M.forEach(z=>{v(z.isIntersecting)})},O=new IntersectionObserver(B,{threshold:.5});return S.current&&O.observe(S.current),()=>{O.disconnect()}}},[a]),h.useEffect(()=>{if(c){let B=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(B)}}},[c]);let w=()=>{s(!0)},_=()=>{s(!1),v(!1)};return u?a!=="intent"?[d,S,{}]:[d,S,{onFocus:xi(b,w),onBlur:xi(p,_),onMouseEnter:xi(m,w),onMouseLeave:xi(y,_),onTouchStart:xi(x,w)}]:[!1,S,{}]}function xi(a,r){return u=>{a&&a(u),u.defaultPrevented||r(u)}}function h6({page:a,...r}){let{router:u}=Fg(),c=h.useMemo(()=>Lg(u.routes,a,u.basename),[u.routes,a,u.basename]);return c?h.createElement(p6,{page:a,matches:c,...r}):null}function m6(a){let{manifest:r,routeModules:u}=Kg(),[c,s]=h.useState([]);return h.useEffect(()=>{let d=!1;return n6(a,r,u).then(v=>{d||s(v)}),()=>{d=!0}},[a,r,u]),c}function p6({page:a,matches:r,...u}){let c=ql(),{manifest:s,routeModules:d}=Kg(),{basename:v}=Fg(),{loaderData:b,matches:p}=f6(),m=h.useMemo(()=>Mp(a,r,p,s,c,"data"),[a,r,p,s,c]),y=h.useMemo(()=>Mp(a,r,p,s,c,"assets"),[a,r,p,s,c]),x=h.useMemo(()=>{if(a===c.pathname+c.search+c.hash)return[];let _=new Set,B=!1;if(r.forEach(M=>{var L;let z=s.routes[M.route.id];!z||!z.hasLoader||(!m.some(J=>J.route.id===M.route.id)&&M.route.id in b&&((L=d[M.route.id])!=null&&L.shouldRevalidate)||z.hasClientLoader?B=!0:_.add(M.route.id))}),_.size===0)return[];let O=s6(a,v);return B&&_.size>0&&O.searchParams.set("_routes",r.filter(M=>_.has(M.route.id)).map(M=>M.route.id).join(",")),[O.pathname+O.search]},[v,b,c,s,m,r,a,d]),S=h.useMemo(()=>r6(y,s),[y,s]),w=m6(y);return h.createElement(h.Fragment,null,x.map(_=>h.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...u})),S.map(_=>h.createElement("link",{key:_,rel:"modulepreload",href:_,...u})),w.map(({key:_,link:B})=>h.createElement("link",{key:_,...B})))}function g6(...a){return r=>{a.forEach(u=>{typeof u=="function"?u(r):u!=null&&(u.current=r)})}}var Wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wg&&(window.__reactRouterVersion="7.6.3")}catch{}function v6({basename:a,children:r,window:u}){let c=h.useRef();c.current==null&&(c.current=lE({window:u,v5Compat:!0}));let s=c.current,[d,v]=h.useState({action:s.action,location:s.location}),b=h.useCallback(p=>{h.startTransition(()=>v(p))},[v]);return h.useLayoutEffect(()=>s.listen(b),[s,b]),h.createElement(XE,{basename:a,children:r,location:d.location,navigationType:d.action,navigator:s})}var Jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ig=h.forwardRef(function({onClick:r,discover:u="render",prefetch:c="none",relative:s,reloadDocument:d,replace:v,state:b,target:p,to:m,preventScrollReset:y,viewTransition:x,...S},w){let{basename:_}=h.useContext(qa),B=typeof m=="string"&&Jg.test(m),O,M=!1;if(typeof m=="string"&&B&&(O=m,Wg))try{let ne=new URL(window.location.href),he=m.startsWith("//")?new URL(ne.protocol+m):new URL(m),Be=sl(he.pathname,_);he.origin===ne.origin&&Be!=null?m=Be+he.search+he.hash:M=!0}catch{Oa(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=OE(m,{relative:s}),[L,J,Q]=d6(c,S),te=x6(m,{replace:v,state:b,target:p,preventScrollReset:y,relative:s,viewTransition:x});function ae(ne){r&&r(ne),ne.defaultPrevented||te(ne)}let de=h.createElement("a",{...S,...Q,href:O||z,onClick:M||d?r:ae,ref:g6(w,J),target:p,"data-discover":!B&&u==="render"?"true":void 0});return L&&!B?h.createElement(h.Fragment,null,de,h.createElement(h6,{page:z})):de});Ig.displayName="Link";var y6=h.forwardRef(function({"aria-current":r="page",caseSensitive:u=!1,className:c="",end:s=!1,style:d,to:v,viewTransition:b,children:p,...m},y){let x=ki(v,{relative:m.relative}),S=ql(),w=h.useContext(Co),{navigator:_,basename:B}=h.useContext(qa),O=w!=null&&w6(x)&&b===!0,M=_.encodeLocation?_.encodeLocation(x).pathname:x.pathname,z=S.pathname,L=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;u||(z=z.toLowerCase(),L=L?L.toLowerCase():null,M=M.toLowerCase()),L&&B&&(L=sl(L,B)||L);const J=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let Q=z===M||!s&&z.startsWith(M)&&z.charAt(J)==="/",te=L!=null&&(L===M||!s&&L.startsWith(M)&&L.charAt(M.length)==="/"),ae={isActive:Q,isPending:te,isTransitioning:O},de=Q?r:void 0,ne;typeof c=="function"?ne=c(ae):ne=[c,Q?"active":null,te?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let he=typeof d=="function"?d(ae):d;return h.createElement(Ig,{...m,"aria-current":de,className:ne,ref:y,style:he,to:v,viewTransition:b},typeof p=="function"?p(ae):p)});y6.displayName="NavLink";var b6=h.forwardRef(({discover:a="render",fetcherKey:r,navigate:u,reloadDocument:c,replace:s,state:d,method:v=po,action:b,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:x,...S},w)=>{let _=_6(),B=N6(b,{relative:m}),O=v.toLowerCase()==="get"?"get":"post",M=typeof b=="string"&&Jg.test(b),z=L=>{if(p&&p(L),L.defaultPrevented)return;L.preventDefault();let J=L.nativeEvent.submitter,Q=(J==null?void 0:J.getAttribute("formmethod"))||v;_(J||L.currentTarget,{fetcherKey:r,method:Q,navigate:u,replace:s,state:d,relative:m,preventScrollReset:y,viewTransition:x})};return h.createElement("form",{ref:w,method:O,action:B,onSubmit:c?p:z,...S,"data-discover":!M&&a==="render"?"true":void 0})});b6.displayName="Form";function S6(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ev(a){let r=h.useContext(yr);return yt(r,S6(a)),r}function x6(a,{target:r,replace:u,state:c,preventScrollReset:s,relative:d,viewTransition:v}={}){let b=br(),p=ql(),m=ki(a,{relative:d});return h.useCallback(y=>{if(WE(y,r)){y.preventDefault();let x=u!==void 0?u:Di(p)===Di(m);b(a,{replace:x,state:c,preventScrollReset:s,relative:d,viewTransition:v})}},[p,b,m,u,c,r,a,s,d,v])}function tv(a){Oa(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let r=h.useRef(Nf(a)),u=h.useRef(!1),c=ql(),s=h.useMemo(()=>JE(c.search,u.current?null:r.current),[c.search]),d=br(),v=h.useCallback((b,p)=>{const m=Nf(typeof b=="function"?b(s):b);u.current=!0,d("?"+m,p)},[d,s]);return[s,v]}var E6=0,$6=()=>`__${String(++E6)}__`;function _6(){let{router:a}=ev("useSubmit"),{basename:r}=h.useContext(qa),u=YE();return h.useCallback(async(c,s={})=>{let{action:d,method:v,encType:b,formData:p,body:m}=t6(c,r);if(s.navigate===!1){let y=s.fetcherKey||$6();await a.fetch(y,u,s.action||d,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||v,formEncType:s.encType||b,flushSync:s.flushSync})}else await a.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:p,body:m,formMethod:s.method||v,formEncType:s.encType||b,replace:s.replace,state:s.state,fromRouteId:u,flushSync:s.flushSync,viewTransition:s.viewTransition})},[a,r,u])}function N6(a,{relative:r}={}){let{basename:u}=h.useContext(qa),c=h.useContext(Ya);yt(c,"useFormAction must be used inside a RouteContext");let[s]=c.matches.slice(-1),d={...ki(a||".",{relative:r})},v=ql();if(a==null){d.search=v.search;let b=new URLSearchParams(d.search),p=b.getAll("index");if(p.some(y=>y==="")){b.delete("index"),p.filter(x=>x).forEach(x=>b.append("index",x));let y=b.toString();d.search=y?`?${y}`:""}}return(!a||a===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:cl([u,d.pathname])),Di(d)}function w6(a,r={}){let u=h.useContext(Gg);yt(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=ev("useViewTransitionState"),s=ki(a,{relative:r.relative});if(!u.isTransitioning)return!1;let d=sl(u.currentLocation.pathname,c)||u.currentLocation.pathname,v=sl(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Eo(s.pathname,v)!=null||Eo(s.pathname,d)!=null}[...c6];const T6=V.div`
  ${({$variant:a})=>Ne[a]}
`,mn=({type:a="span",variant:r,className:u,children:c})=>$.jsx(T6,{as:a,$variant:r,className:u,children:c}),M6="_indexPage_1vdx4_1",A6="_title_1vdx4_5",Ap={indexPage:M6,title:A6},O6="_taskTracker_16ovt_1",C6="_control_16ovt_6",D6="_buttons_16ovt_16",Ws={taskTracker:O6,control:C6,buttons:D6},Bi=["Bug","Feature","Documentation","Refactor","Test"],$o=["To Do","In Progress","Done"],zi=["Low","Medium","High"],B6="_filters_bsouf_1",z6="_selectFields_bsouf_13",Op={filters:B6,selectFields:z6},R6=(a,r)=>{const[u,c]=h.useState(a);return h.useEffect(()=>{const s=setTimeout(()=>c(a),r);return()=>clearTimeout(s)},[a,r]),u},H6=()=>{const[a]=tv(),r=br(),[u,c]=h.useState(""),[s,d]=h.useState(null),[v,b]=h.useState(null),p=R6(u,500),m=h.useRef(!0);h.useEffect(()=>{if(!m.current)return;const S=a.get("q")||"",w=a.get("priority"),_=a.get("category");c(S),d(zi.includes(w)?w:null),b(Bi.includes(_)?_:null),setTimeout(()=>m.current=!1,600)},[a]),h.useEffect(()=>{if(m.current)return;const S=new URLSearchParams;p&&S.set("q",p),s&&S.set("priority",s),v&&S.set("category",v),r({search:S.toString()},{replace:!0})},[p,s,v,r]);const y=S=>{const w=S.target.value;b(_=>_===w?null:w)},x=S=>{const w=S.target.value;d(_=>_===w?null:w)};return $.jsxs("div",{className:Op.filters,children:[$.jsx(xo,{value:u,onChange:S=>c(S.target.value),placeholder:"Введите название",label:"Поиск по задаче"}),$.jsxs("div",{className:Op.selectFields,children:[$.jsxs(ir,{"data-container-id":"selectFieldPriority",mode:"searchSelect",label:"Приоритет",value:s??"",onChange:x,children:[$.jsx(sn,{value:"",children:"— Не выбрано —"}),zi.map(S=>$.jsx(sn,{value:S,children:S},S))]}),$.jsxs(ir,{"data-container-id":"selectFieldCategory",mode:"searchSelect",label:"Категория",value:v??"",onChange:y,children:[$.jsx(sn,{value:"",children:"— Не выбрано —"}),Bi.map(S=>$.jsx(sn,{value:S,children:S},S))]})]})]})},j6="_taskList_t4l9z_1",L6={taskList:j6},U6="_card_1dat1_1",k6="_title_1dat1_11",q6="_description_1dat1_15",Y6="_tagGroup_1dat1_19",P6="_createdAt_1dat1_26",G6="_controlBlock_1dat1_30",V6="_deleteButton_1dat1_37",on={card:U6,title:k6,description:q6,tagGroup:Y6,createdAt:P6,controlBlock:G6,deleteButton:V6},X6=({name:a,size:r={width:24,height:24},className:u=""})=>$.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:r.width,height:r.height},className:u,children:$.jsx("use",{xlinkHref:`/t1-homework-1/assets/images/vector/sprites.svg#${a}`})});function Q6(a){const r=typeof a=="string"?new Date(a):a,u=r.toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"}),c=r.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});return`${u} в ${c}`}const Z6=({task:a,onDelete:r})=>{const u=br(),c=()=>{u(`task/${a.id}`)};return $.jsx("div",{className:on.card,children:$.jsxs("div",{children:[$.jsx(mn,{type:"p",variant:"Main/S",className:on.title,children:a.title}),a.description&&$.jsx(mn,{type:"p",variant:"Additional/XS",className:on.description,children:a.description}),$.jsxs("div",{className:on.tagGroup,children:[$.jsxs(mo,{dimension:"s",kind:"neutral",children:["Категория: ",a.category]}),$.jsxs(mo,{dimension:"s",kind:"neutral",children:["Статус: ",a.status]}),$.jsxs(mo,{dimension:"s",kind:"neutral",children:["Приоритет: ",a.priority]})]}),$.jsx(mn,{type:"p",variant:"Caption/XS",className:on.createdAt,children:Q6(a.createdAt)}),$.jsxs("div",{className:on.controlBlock,children:[$.jsx(mr,{dimension:"s",appearance:"tertiary",onClick:c,children:"Редактировать"}),$.jsx("button",{className:on.deleteButton,onClick:()=>r(a.id),children:$.jsx(X6,{name:"delete"})})]})]})})},F6="_title_1fykk_1",K6="_taskList_1fykk_6",Js={title:F6,taskList:K6},W6="_skeleton_wg1us_9",J6={skeleton:W6},I6=()=>{const a=h.useMemo(()=>Math.floor(Math.random()*101)+100,[]);return $.jsx("div",{className:J6.skeleton,style:{height:a}})},e3=({title:a,tasks:r,onDelete:u,isLoading:c})=>$.jsxs("div",{className:Js.statusColumn,children:[$.jsx(mn,{type:"h2",variant:"Header/H2",className:Js.title,children:a}),$.jsx(Ci,{}),$.jsx("ul",{className:Js.taskList,children:c?Array.from({length:5}).map((s,d)=>$.jsx("li",{children:$.jsx(I6,{},d)},d)):r.map(s=>$.jsx("li",{children:$.jsx(Z6,{task:s,onDelete:u})},s.id))})]}),At=[];for(let a=0;a<256;++a)At.push((a+256).toString(16).slice(1));function t3(a,r=0){return(At[a[r+0]]+At[a[r+1]]+At[a[r+2]]+At[a[r+3]]+"-"+At[a[r+4]]+At[a[r+5]]+"-"+At[a[r+6]]+At[a[r+7]]+"-"+At[a[r+8]]+At[a[r+9]]+"-"+At[a[r+10]]+At[a[r+11]]+At[a[r+12]]+At[a[r+13]]+At[a[r+14]]+At[a[r+15]]).toLowerCase()}let Is;const a3=new Uint8Array(16);function l3(){if(!Is){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Is=crypto.getRandomValues.bind(crypto)}return Is(a3)}const n3=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Cp={randomUUID:n3};function r3(a,r,u){var s;if(Cp.randomUUID&&!a)return Cp.randomUUID();a=a||{};const c=a.random??((s=a.rng)==null?void 0:s.call(a))??l3();if(c.length<16)throw new Error("Random bytes length must be >= 16");return c[6]=c[6]&15|64,c[8]=c[8]&63|128,t3(c)}const Dp=[{id:"1",title:"Исправить баг с логином",description:"Проблема с повторным входом",category:"Bug",status:"In Progress",priority:"High",createdAt:new Date("2025-07-12T14:25:00")},{id:"2",title:"Добавить возможность восстановления пароля",description:"Пользователи должны иметь возможность восстанавливать пароль через email",category:"Feature",status:"To Do",priority:"Medium",createdAt:new Date("2025-07-04T09:42:00")},{id:"3",title:"Обновить документацию по API",description:"Добавить описание новых эндпоинтов",category:"Documentation",status:"Done",priority:"Low",createdAt:new Date("2025-07-08T11:10:00")},{id:"4",title:"Рефакторинг компонента профиля",description:"Упростить логику и улучшить читаемость кода",category:"Refactor",status:"In Progress",priority:"Medium",createdAt:new Date("2025-07-01T16:35:00")},{id:"5",title:"Написать тесты для формы регистрации",description:"Покрыть юнит-тестами все основные сценарии",category:"Test",status:"To Do",priority:"High",createdAt:new Date("2025-07-10T08:15:00")},{id:"6",title:"Исправить отображение кнопок на мобильных устройствах",category:"Bug",status:"To Do",priority:"Medium",createdAt:new Date("2025-07-03T12:20:00")},{id:"7",title:"Добавить темную тему",description:"Реализовать переключение светлой и темной темы",category:"Feature",status:"In Progress",priority:"High",createdAt:new Date("2025-07-14T17:55:00")},{id:"8",title:"Обновить зависимости проекта",description:"Обновить библиотеки до последних стабильных версий",category:"Refactor",status:"Done",priority:"Low",createdAt:new Date("2025-07-06T10:05:00")}],qi={get(){const a=localStorage.getItem("tasks");return a?JSON.parse(a):[]},set(a){localStorage.setItem("tasks",JSON.stringify(a))}},i3=()=>(qi.set(Dp),Dp),Yi=a=>{const r=qi.get();return a?r.filter(u=>{const c=!a.q||u.title.toLowerCase().includes(a.q.toLowerCase()),s=!a.priority||u.priority===a.priority,d=!a.category||u.category===a.category;return c&&s&&d}):r},u3=a=>{const u=Yi().find(c=>c.id===a);if(!u)throw new Error(`Задача с id "${a}" не найдена`);return u},o3=a=>{if(!a.title)throw new Error("Название не может быть пустым");const r=Yi(),u={id:r3(),createdAt:new Date,...a};return r.push(u),qi.set(r),u},c3=(a,r)=>{if(!r.title)throw new Error("Название не может быть пустым");const u=Yi(),c=u.findIndex(d=>d.id===a);if(c===-1)throw new Error(`Не удалось обновить: задача с id "${a}" не найдена`);const s={...u[c],...r};return u[c]=s,qi.set(u),s},s3=a=>{const r=Yi(),u=r.findIndex(c=>c.id===a);if(u===-1)throw new Error(`Не удалось удалить: задача с id "${a}" не найдена`);return r.splice(u,1),qi.set(r),!0},f3=a=>new Promise(r=>setTimeout(r,a)),ur=async(a,r,u,c)=>{await f3(300);const d=r.replace(/^\/+|\/+$/g,"").split("/");if(d[0]!=="tasks"||d.length>2)throw new Error(`Маршрут [${a} ${r}] не найден`);switch(a){case"GET":return d.length===2?u3(d[1]):Yi(c);case"POST":if(d.length===2&&d[1]==="init")return i3();if(u)return o3(u);throw new Error("Отсутствует тело запроса");case"PATCH":if(d.length===2&&u)return c3(d[1],u);throw new Error("Отсутствует тело запроса");case"DELETE":if(d.length===2)return s3(d[1]);break}throw new Error(`Маршрут [${a} ${r}] не найден`)},d3=()=>{const[a]=tv(),[r,u]=h.useState([]),[c,s]=h.useState(null),[d,v]=h.useState(!1);h.useEffect(()=>{v(!0);const m=a.get("priority"),y=a.get("category"),x={q:a.get("q")||void 0,priority:zi.includes(m)?m:void 0,category:Bi.includes(y)?y:void 0};ur("GET","tasks",void 0,x).then(S=>S).then(S=>u(S)).catch(()=>s(new Error("Ошибка загрузки задач"))).finally(()=>v(!1))},[a]);const b=m=>{ur("DELETE",`tasks/${m}`).then(()=>u(y=>y.filter(x=>x.id!==m))).catch(y=>console.error(y.message))},p=$o.reduce((m,y)=>(m[y]=r.filter(x=>x.status===y),m),{});return c?$.jsx("div",{children:c.message}):$.jsx("div",{className:L6.taskList,children:$o.map(m=>$.jsx(e3,{title:m,tasks:p[m],onDelete:b,isLoading:d},m))})},h3=()=>{const a=br(),r=()=>{a("/task/new")},u=()=>{ur("POST","tasks/init").then(()=>window.location.reload())};return $.jsxs("div",{className:Ws.taskTracker,children:[$.jsx(Ci,{}),$.jsxs("div",{className:Ws.control,children:[$.jsx(H6,{}),$.jsxs("div",{className:Ws.buttons,children:[$.jsx(mr,{dimension:"s",appearance:"secondary",onClick:u,children:"Заполнить mock-данными"}),$.jsx(mr,{dimension:"s",appearance:"primary",onClick:r,children:"Создать задачу"})]})]}),$.jsx(Ci,{}),$.jsx(d3,{})]})},m3=()=>$.jsxs("div",{className:Ap.indexPage,children:[$.jsx(mn,{type:"h1",variant:"Header/H1",className:Ap.title,children:"Трекер задач"}),$.jsx(h3,{})]}),p3="_form_1mupg_1",g3="_error_1mupg_6",v3="_caption_1mupg_11",y3="_fields_1mupg_15",b3="_buttons_1mupg_22",Ei={form:p3,error:g3,caption:v3,fields:y3,buttons:b3},Bp=({id:a})=>{const r=br(),[u,c]=h.useState({title:"",description:"",category:Bi[0],status:$o[0],priority:zi[0]}),[s,d]=h.useState(null);h.useEffect(()=>{a&&ur("GET",`tasks/${a}`).then(p=>p).then(p=>c({title:p.title,description:p.description,status:p.status,category:p.category,priority:p.priority})).catch(()=>r("/"))},[a,r]);const v=(p,m)=>{c(y=>({...y,[p]:m}))},b=()=>{u.title.length>0&&(a?ur("PATCH",`tasks/${a}`,u).then(()=>r("/")).catch(p=>d(p)):ur("POST","tasks",u).then(()=>r("/")).catch(p=>d(p)))};return $.jsxs("form",{className:Ei.form,onSubmit:p=>{p.preventDefault(),b()},children:[$.jsx(mn,{type:"h1",variant:"Header/H1",className:Ei.caption,children:a?"Редактировать задачу":"Создать задачу"}),$.jsx(Ci,{}),$.jsxs("div",{className:Ei.fields,children:[$.jsx(xo,{value:u.title,onChange:p=>v("title",p.target.value),placeholder:"Введите заголовок",label:"Заголовок",status:u.title.length>0?void 0:"error",required:!0}),$.jsx(xo,{value:u.description,onChange:p=>v("description",p.target.value),placeholder:"Введите описание",label:"Описание"}),$.jsx(ir,{"data-container-id":"selectFieldCategory",mode:"searchSelect",label:"Категория",value:u.category,onChange:p=>v("category",p.target.value),required:!0,children:Bi.map(p=>$.jsx(sn,{value:p,children:p},p))}),$.jsx(ir,{"data-container-id":"selectFieldStatus",mode:"searchSelect",label:"Статус",value:u.status,onChange:p=>v("status",p.target.value),required:!0,children:$o.map(p=>$.jsx(sn,{value:p,children:p},p))}),$.jsx(ir,{"data-container-id":"selectFieldPriotity",mode:"searchSelect",label:"Приоритет",value:u.priority,onChange:p=>v("priority",p.target.value),required:!0,children:zi.map(p=>$.jsx(sn,{value:p,children:p},p))}),s&&$.jsx(mn,{type:"p",variant:"Additional/S",className:Ei.error,children:s.message})]}),$.jsxs("div",{className:Ei.buttons,children:[$.jsx(mr,{type:"submit",dimension:"s",appearance:"primary",children:"Сохранить"}),$.jsx(mr,{type:"button",dimension:"s",appearance:"secondary",onClick:()=>r("/"),children:"Отменить"})]})]})},S3="_taskPage_1n59p_1",x3={taskPage:S3},E3=()=>{const{id:a}=DE();return $.jsx("div",{className:x3.taskPage,children:a!=="new"?$.jsx(Bp,{id:a}):$.jsx(Bp,{})})},$3=[{path:"/",element:$.jsx(m3,{})},{path:"/task/:id",element:$.jsx(E3,{})}],_3=()=>BE($3);function N3(){return $.jsx(v6,{basename:"/t1-homework-1/",children:$.jsx(_3,{})})}h1.createRoot(document.getElementById("root")).render($.jsx(h.StrictMode,{children:$.jsx(db,{theme:Df,children:$.jsxs(wb,{children:[$.jsx(tE,{}),$.jsx(N3,{})]})})}));
