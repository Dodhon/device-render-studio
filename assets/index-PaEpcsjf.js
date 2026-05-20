(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function z0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cc={exports:{}},ko={},Rc={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function B0(){if(Yp)return xt;Yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function y(F,te,Fe){this.props=F,this.context=te,this.refs=A,this.updater=Fe||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=y.prototype;function O(F,te,Fe){this.props=F,this.context=te,this.refs=A,this.updater=Fe||S}var L=O.prototype=new _;L.constructor=O,M(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,D={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function B(F,te,Fe){var Q,oe={},ye=null,pe=null;if(te!=null)for(Q in te.ref!==void 0&&(pe=te.ref),te.key!==void 0&&(ye=""+te.key),te)k.call(te,Q)&&!U.hasOwnProperty(Q)&&(oe[Q]=te[Q]);var Pe=arguments.length-2;if(Pe===1)oe.children=Fe;else if(1<Pe){for(var Be=Array(Pe),Ke=0;Ke<Pe;Ke++)Be[Ke]=arguments[Ke+2];oe.children=Be}if(F&&F.defaultProps)for(Q in Pe=F.defaultProps,Pe)oe[Q]===void 0&&(oe[Q]=Pe[Q]);return{$$typeof:s,type:F,key:ye,ref:pe,props:oe,_owner:D.current}}function P(F,te){return{$$typeof:s,type:F.type,key:te,ref:F.ref,props:F.props,_owner:F._owner}}function w(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Fe){return te[Fe]})}var ee=/\/+/g;function q(F,te){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):te.toString(36)}function ne(F,te,Fe,Q,oe){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var pe=!1;if(F===null)pe=!0;else switch(ye){case"string":case"number":pe=!0;break;case"object":switch(F.$$typeof){case s:case e:pe=!0}}if(pe)return pe=F,oe=oe(pe),F=Q===""?"."+q(pe,0):Q,R(oe)?(Fe="",F!=null&&(Fe=F.replace(ee,"$&/")+"/"),ne(oe,te,Fe,"",function(Ke){return Ke})):oe!=null&&(w(oe)&&(oe=P(oe,Fe+(!oe.key||pe&&pe.key===oe.key?"":(""+oe.key).replace(ee,"$&/")+"/")+F)),te.push(oe)),1;if(pe=0,Q=Q===""?".":Q+":",R(F))for(var Pe=0;Pe<F.length;Pe++){ye=F[Pe];var Be=Q+q(ye,Pe);pe+=ne(ye,te,Fe,Be,oe)}else if(Be=x(F),typeof Be=="function")for(F=Be.call(F),Pe=0;!(ye=F.next()).done;)ye=ye.value,Be=Q+q(ye,Pe++),pe+=ne(ye,te,Fe,Be,oe);else if(ye==="object")throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return pe}function ue(F,te,Fe){if(F==null)return F;var Q=[],oe=0;return ne(F,Q,"","",function(ye){return te.call(Fe,ye,oe++)}),Q}function J(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(Fe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Fe)},function(Fe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Fe)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var ce={current:null},H={transition:null},fe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:D};function ae(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ue,forEach:function(F,te,Fe){ue(F,function(){te.apply(this,arguments)},Fe)},count:function(F){var te=0;return ue(F,function(){te++}),te},toArray:function(F){return ue(F,function(te){return te})||[]},only:function(F){if(!w(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},xt.Component=y,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=O,xt.StrictMode=r,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,xt.act=ae,xt.cloneElement=function(F,te,Fe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=M({},F.props),oe=F.key,ye=F.ref,pe=F._owner;if(te!=null){if(te.ref!==void 0&&(ye=te.ref,pe=D.current),te.key!==void 0&&(oe=""+te.key),F.type&&F.type.defaultProps)var Pe=F.type.defaultProps;for(Be in te)k.call(te,Be)&&!U.hasOwnProperty(Be)&&(Q[Be]=te[Be]===void 0&&Pe!==void 0?Pe[Be]:te[Be])}var Be=arguments.length-2;if(Be===1)Q.children=Fe;else if(1<Be){Pe=Array(Be);for(var Ke=0;Ke<Be;Ke++)Pe[Ke]=arguments[Ke+2];Q.children=Pe}return{$$typeof:s,type:F.type,key:oe,ref:ye,props:Q,_owner:pe}},xt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},xt.createElement=B,xt.createFactory=function(F){var te=B.bind(null,F);return te.type=F,te},xt.createRef=function(){return{current:null}},xt.forwardRef=function(F){return{$$typeof:f,render:F}},xt.isValidElement=w,xt.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:J}},xt.memo=function(F,te){return{$$typeof:p,type:F,compare:te===void 0?null:te}},xt.startTransition=function(F){var te=H.transition;H.transition={};try{F()}finally{H.transition=te}},xt.unstable_act=ae,xt.useCallback=function(F,te){return ce.current.useCallback(F,te)},xt.useContext=function(F){return ce.current.useContext(F)},xt.useDebugValue=function(){},xt.useDeferredValue=function(F){return ce.current.useDeferredValue(F)},xt.useEffect=function(F,te){return ce.current.useEffect(F,te)},xt.useId=function(){return ce.current.useId()},xt.useImperativeHandle=function(F,te,Fe){return ce.current.useImperativeHandle(F,te,Fe)},xt.useInsertionEffect=function(F,te){return ce.current.useInsertionEffect(F,te)},xt.useLayoutEffect=function(F,te){return ce.current.useLayoutEffect(F,te)},xt.useMemo=function(F,te){return ce.current.useMemo(F,te)},xt.useReducer=function(F,te,Fe){return ce.current.useReducer(F,te,Fe)},xt.useRef=function(F){return ce.current.useRef(F)},xt.useState=function(F){return ce.current.useState(F)},xt.useSyncExternalStore=function(F,te,Fe){return ce.current.useSyncExternalStore(F,te,Fe)},xt.useTransition=function(){return ce.current.useTransition()},xt.version="18.3.1",xt}var qp;function sd(){return qp||(qp=1,Rc.exports=B0()),Rc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function V0(){if($p)return ko;$p=1;var s=sd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:o.current}}return ko.Fragment=t,ko.jsx=c,ko.jsxs=c,ko}var Zp;function H0(){return Zp||(Zp=1,Cc.exports=V0()),Cc.exports}var Se=H0(),yt=sd();const G0=z0(yt);var hl={},Pc={exports:{}},kn={},bc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function W0(){return Kp||(Kp=1,(function(s){function e(H,fe){var ae=H.length;H.push(fe);e:for(;0<ae;){var F=ae-1>>>1,te=H[F];if(0<o(te,fe))H[F]=fe,H[ae]=te,ae=F;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var fe=H[0],ae=H.pop();if(ae!==fe){H[0]=ae;e:for(var F=0,te=H.length,Fe=te>>>1;F<Fe;){var Q=2*(F+1)-1,oe=H[Q],ye=Q+1,pe=H[ye];if(0>o(oe,ae))ye<te&&0>o(pe,oe)?(H[F]=pe,H[ye]=ae,F=ye):(H[F]=oe,H[Q]=ae,F=Q);else if(ye<te&&0>o(pe,ae))H[F]=pe,H[ye]=ae,F=ye;else break e}}return fe}function o(H,fe){var ae=H.sortIndex-fe.sortIndex;return ae!==0?ae:H.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,x=3,S=!1,M=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var fe=t(p);fe!==null;){if(fe.callback===null)r(p);else if(fe.startTime<=H)r(p),fe.sortIndex=fe.expirationTime,e(h,fe);else break;fe=t(p)}}function R(H){if(A=!1,L(H),!M)if(t(h)!==null)M=!0,J(k);else{var fe=t(p);fe!==null&&ce(R,fe.startTime-H)}}function k(H,fe){M=!1,A&&(A=!1,_(B),B=-1),S=!0;var ae=x;try{for(L(fe),v=t(h);v!==null&&(!(v.expirationTime>fe)||H&&!z());){var F=v.callback;if(typeof F=="function"){v.callback=null,x=v.priorityLevel;var te=F(v.expirationTime<=fe);fe=s.unstable_now(),typeof te=="function"?v.callback=te:v===t(h)&&r(h),L(fe)}else r(h);v=t(h)}if(v!==null)var Fe=!0;else{var Q=t(p);Q!==null&&ce(R,Q.startTime-fe),Fe=!1}return Fe}finally{v=null,x=ae,S=!1}}var D=!1,U=null,B=-1,P=5,w=-1;function z(){return!(s.unstable_now()-w<P)}function ee(){if(U!==null){var H=s.unstable_now();w=H;var fe=!0;try{fe=U(!0,H)}finally{fe?q():(D=!1,U=null)}}else D=!1}var q;if(typeof O=="function")q=function(){O(ee)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ue=ne.port2;ne.port1.onmessage=ee,q=function(){ue.postMessage(null)}}else q=function(){y(ee,0)};function J(H){U=H,D||(D=!0,q())}function ce(H,fe){B=y(function(){H(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,J(k))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var fe=3;break;default:fe=x}var ae=x;x=fe;try{return H()}finally{x=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,fe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=x;x=H;try{return fe()}finally{x=ae}},s.unstable_scheduleCallback=function(H,fe,ae){var F=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?F+ae:F):ae=F,H){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ae+te,H={id:g++,callback:fe,priorityLevel:H,startTime:ae,expirationTime:te,sortIndex:-1},ae>F?(H.sortIndex=ae,e(p,H),t(h)===null&&H===t(p)&&(A?(_(B),B=-1):A=!0,ce(R,ae-F))):(H.sortIndex=te,e(h,H),M||S||(M=!0,J(k))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var fe=x;return function(){var ae=x;x=fe;try{return H.apply(this,arguments)}finally{x=ae}}}})(Lc)),Lc}var Jp;function X0(){return Jp||(Jp=1,bc.exports=W0()),bc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function j0(){if(Qp)return kn;Qp=1;var s=sd(),e=X0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function O(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,O);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,O);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,O);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),z=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,F;function te(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Fe=!1;function Q(n,i){if(!n||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){u=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,I=m.length-1;1<=E&&0<=I&&d[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==m[I]){var V=`
`+d[E].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=E&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?te(n):""}function oe(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case D:return"Portal";case P:return"Profiler";case B:return"StrictMode";case q:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case w:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case J:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function vt(n){n._valueTracker||(n._valueTracker=Ke(n))}function ge(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Be(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ae(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function N(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Je(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ee(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Ve(n,i){Ee(n,i);var a=Pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?nt(n,i.type,a):i.hasOwnProperty("defaultValue")&&nt(n,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Re(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function nt(n,i,a){(i!=="number"||Ae(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ue=Array.isArray;function b(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ue(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Pe(a)}}function de(n,i){var a=Pe(i.value),u=Pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ht(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function it(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function ot(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=it(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ye=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,i){if(i){if(Ye[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ct(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,le=null,me=null;function ke(n){if(n=Eo(n)){if(typeof De!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),De(n.stateNode,n.type,i))}}function Oe(n){le?me?me.push(n):me=[n]:le=n}function ft(){if(le){var n=le,i=me;if(me=le=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function Ft(n,i){return n(i)}function Jt(){}var wt=!1;function Dn(n,i,a){if(wt)return n(i,a);wt=!0;try{return Ft(n,i,a)}finally{wt=!1,(le!==null||me!==null)&&(Jt(),ft())}}function En(n,i){var a=n.stateNode;if(a===null)return null;var u=Ra(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ns=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{ns=!1}function Ei(n,i,a,u,d,m,E,I,V){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(a,ie)}catch(xe){this.onError(xe)}}var Ti=!1,Tr=null,wr=!1,ji=null,aa={onError:function(n){Ti=!0,Tr=n}};function is(n,i,a,u,d,m,E,I,V){Ti=!1,Tr=null,Ei.apply(aa,arguments)}function la(n,i,a,u,d,m,E,I,V){if(is.apply(this,arguments),Ti){if(Ti){var ie=Tr;Ti=!1,Tr=null}else throw Error(t(198));wr||(wr=!0,ji=ie)}}function pi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ua(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ca(n){if(pi(n)!==n)throw Error(t(188))}function Zl(n){var i=n.alternate;if(!i){if(i=pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return ca(d),n;if(m===u)return ca(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var E=!1,I=d.child;I;){if(I===a){E=!0,a=d,u=m;break}if(I===u){E=!0,u=d,a=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===a){E=!0,a=m,u=d;break}if(I===u){E=!0,u=m,a=d;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fa(n){return n=Zl(n),n!==null?da(n):null}function da(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=da(n);if(i!==null)return i;n=n.sibling}return null}var C=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,re=e.unstable_shouldYield,se=e.unstable_requestPaint,G=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,Ge=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,at=e.unstable_LowPriority,lt=e.unstable_IdlePriority,et=null,dt=null;function Ct(n){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:tt,zt=Math.log,Tt=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(zt(n)/Tt|0)|0}var Xt=64,Et=4194304;function un(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ti(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var I=E&~d;I!==0?u=un(I):(m&=E,m!==0&&(u=un(m)))}else E=a&~d,E!==0?u=un(E):m!==0&&(u=un(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Rt(i),d=1<<a,u|=n[a],i&=~d;return u}function Tn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Rt(m),I=1<<E,V=d[E];V===-1?((I&a)===0||(I&u)!==0)&&(d[E]=Tn(I,i)):V<=i&&(n.expiredLanes|=I),m&=~I}}function Dt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wn(){var n=Xt;return Xt<<=1,(Xt&4194240)===0&&(Xt=64),n}function pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Yt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Rt(i),n[i]=a}function mn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Rt(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function Cr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Rt(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var St=0;function wd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ad,Kl,Cd,Rd,Pd,Jl=!1,ha=[],Yi=null,qi=null,$i=null,oo=new Map,ao=new Map,Zi=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bd(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Eo(i),i!==null&&Kl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function lv(n,i,a,u,d){switch(i){case"focusin":return Yi=lo(Yi,n,i,a,u,d),!0;case"dragenter":return qi=lo(qi,n,i,a,u,d),!0;case"mouseover":return $i=lo($i,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return oo.set(m,lo(oo.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ao.set(m,lo(ao.get(m)||null,n,i,a,u,d)),!0}return!1}function Ld(n){var i=Rr(n.target);if(i!==null){var a=pi(i);if(a!==null){if(i=a.tag,i===13){if(i=ua(a),i!==null){n.blockedOn=i,Pd(n.priority,function(){Cd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=eu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Lt=u,a.target.dispatchEvent(u),Lt=null}else return i=Eo(a),i!==null&&Kl(i),n.blockedOn=a,!1;i.shift()}return!0}function Dd(n,i,a){pa(n)&&a.delete(i)}function uv(){Jl=!1,Yi!==null&&pa(Yi)&&(Yi=null),qi!==null&&pa(qi)&&(qi=null),$i!==null&&pa($i)&&($i=null),oo.forEach(Dd),ao.forEach(Dd)}function uo(n,i){n.blockedOn===i&&(n.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uv)))}function co(n){function i(d){return uo(d,n)}if(0<ha.length){uo(ha[0],n);for(var a=1;a<ha.length;a++){var u=ha[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Yi!==null&&uo(Yi,n),qi!==null&&uo(qi,n),$i!==null&&uo($i,n),oo.forEach(i),ao.forEach(i),a=0;a<Zi.length;a++)u=Zi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(a=Zi[0],a.blockedOn===null);)Ld(a),a.blockedOn===null&&Zi.shift()}var rs=R.ReactCurrentBatchConfig,ma=!0;function cv(n,i,a,u){var d=St,m=rs.transition;rs.transition=null;try{St=1,Ql(n,i,a,u)}finally{St=d,rs.transition=m}}function fv(n,i,a,u){var d=St,m=rs.transition;rs.transition=null;try{St=4,Ql(n,i,a,u)}finally{St=d,rs.transition=m}}function Ql(n,i,a,u){if(ma){var d=eu(n,i,a,u);if(d===null)vu(n,i,u,ga,a),bd(n,u);else if(lv(d,n,i,a,u))u.stopPropagation();else if(bd(n,u),i&4&&-1<av.indexOf(n)){for(;d!==null;){var m=Eo(d);if(m!==null&&Ad(m),m=eu(n,i,a,u),m===null&&vu(n,i,u,ga,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else vu(n,i,u,null,a)}}var ga=null;function eu(n,i,a,u){if(ga=null,n=X(u),n=Rr(n),n!==null)if(i=pi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ua(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ga=n,null}function Nd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Ne:return 1;case Ge:return 4;case We:case at:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Ki=null,tu=null,va=null;function Ud(){if(va)return va;var n,i=tu,a=i.length,u,d="value"in Ki?Ki.value:Ki.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(u=1;u<=E&&i[a-u]===d[m-u];u++);return va=d.slice(n,1<u?1-u:void 0)}function _a(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xa(){return!0}function Id(){return!1}function Vn(n){function i(a,u,d,m,E){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xa:Id,this.isPropagationStopped=Id,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=Vn(ss),fo=ae({},ss,{view:0,detail:0}),dv=Vn(fo),iu,ru,ho,ya=ae({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(iu=n.screenX-ho.screenX,ru=n.screenY-ho.screenY):ru=iu=0,ho=n),iu)},movementY:function(n){return"movementY"in n?n.movementY:ru}}),Fd=Vn(ya),hv=ae({},ya,{dataTransfer:0}),pv=Vn(hv),mv=ae({},fo,{relatedTarget:0}),su=Vn(mv),gv=ae({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Vn(gv),_v=ae({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xv=Vn(_v),yv=ae({},ss,{data:0}),Od=Vn(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ev[n])?!!i[n]:!1}function ou(){return Tv}var wv=ae({},fo,{key:function(n){if(n.key){var i=Sv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(n){return n.type==="keypress"?_a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Av=Vn(wv),Cv=ae({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Vn(Cv),Rv=ae({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Pv=Vn(Rv),bv=ae({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Vn(bv),Dv=ae({},ya,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Vn(Dv),Uv=[9,13,27,32],au=f&&"CompositionEvent"in window,po=null;f&&"documentMode"in document&&(po=document.documentMode);var Iv=f&&"TextEvent"in window&&!po,zd=f&&(!au||po&&8<po&&11>=po),Bd=" ",Vd=!1;function Hd(n,i){switch(n){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function Fv(n,i){switch(n){case"compositionend":return Gd(i);case"keypress":return i.which!==32?null:(Vd=!0,Bd);case"textInput":return n=i.data,n===Bd&&Vd?null:n;default:return null}}function Ov(n,i){if(os)return n==="compositionend"||!au&&Hd(n,i)?(n=Ud(),va=tu=Ki=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!kv[n.type]:i==="textarea"}function Xd(n,i,a,u){Oe(u),i=wa(i,"onChange"),0<i.length&&(a=new nu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var mo=null,go=null;function zv(n){uh(n,0)}function Sa(n){var i=fs(n);if(ge(i))return n}function Bv(n,i){if(n==="change")return i}var jd=!1;if(f){var lu;if(f){var uu="oninput"in document;if(!uu){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),uu=typeof Yd.oninput=="function"}lu=uu}else lu=!1;jd=lu&&(!document.documentMode||9<document.documentMode)}function qd(){mo&&(mo.detachEvent("onpropertychange",$d),go=mo=null)}function $d(n){if(n.propertyName==="value"&&Sa(go)){var i=[];Xd(i,go,n,X(n)),Dn(zv,i)}}function Vv(n,i,a){n==="focusin"?(qd(),mo=i,go=a,mo.attachEvent("onpropertychange",$d)):n==="focusout"&&qd()}function Hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sa(go)}function Gv(n,i){if(n==="click")return Sa(i)}function Wv(n,i){if(n==="input"||n==="change")return Sa(i)}function Xv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:Xv;function vo(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ni(n[d],i[d]))return!1}return!0}function Zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kd(n,i){var a=Zd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zd(a)}}function Jd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Jd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qd(){for(var n=window,i=Ae();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ae(n.document)}return i}function cu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function jv(n){var i=Qd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Jd(a.ownerDocument.documentElement,a)){if(u!==null&&cu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Kd(a,m);var E=Kd(a,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yv=f&&"documentMode"in document&&11>=document.documentMode,as=null,fu=null,_o=null,du=!1;function eh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||as==null||as!==Ae(u)||(u=as,"selectionStart"in u&&cu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),_o&&vo(_o,u)||(_o=u,u=wa(fu,"onSelect"),0<u.length&&(i=new nu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=as)))}function Ma(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ls={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},hu={},th={};f&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Ea(n){if(hu[n])return hu[n];if(!ls[n])return n;var i=ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in th)return hu[n]=i[a];return n}var nh=Ea("animationend"),ih=Ea("animationiteration"),rh=Ea("animationstart"),sh=Ea("transitionend"),oh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){oh.set(n,i),l(i,[n])}for(var pu=0;pu<ah.length;pu++){var mu=ah[pu],qv=mu.toLowerCase(),$v=mu[0].toUpperCase()+mu.slice(1);Ji(qv,"on"+$v)}Ji(nh,"onAnimationEnd"),Ji(ih,"onAnimationIteration"),Ji(rh,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(sh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function lh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,la(u,i,void 0,n),n.currentTarget=null}function uh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var I=u[E],V=I.instance,ie=I.currentTarget;if(I=I.listener,V!==m&&d.isPropagationStopped())break e;lh(d,I,ie),m=V}else for(E=0;E<u.length;E++){if(I=u[E],V=I.instance,ie=I.currentTarget,I=I.listener,V!==m&&d.isPropagationStopped())break e;lh(d,I,ie),m=V}}}if(wr)throw n=ji,wr=!1,ji=null,n}function Ot(n,i){var a=i[Eu];a===void 0&&(a=i[Eu]=new Set);var u=n+"__bubble";a.has(u)||(ch(i,n,2,!1),a.add(u))}function gu(n,i,a){var u=0;i&&(u|=4),ch(a,n,u,i)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[Ta]){n[Ta]=!0,r.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||gu(a,!1,n),gu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ta]||(i[Ta]=!0,gu("selectionchange",!1,i))}}function ch(n,i,a,u){switch(Nd(i)){case 1:var d=cv;break;case 4:d=fv;break;default:d=Ql}a=d.bind(null,i,a,n),d=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function vu(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;E=E.return}for(;I!==null;){if(E=Rr(I),E===null)return;if(V=E.tag,V===5||V===6){u=m=E;continue e}I=I.parentNode}}u=u.return}Dn(function(){var ie=m,xe=X(a),Me=[];e:{var _e=oh.get(n);if(_e!==void 0){var ze=nu,qe=n;switch(n){case"keypress":if(_a(a)===0)break e;case"keydown":case"keyup":ze=Av;break;case"focusin":qe="focus",ze=su;break;case"focusout":qe="blur",ze=su;break;case"beforeblur":case"afterblur":ze=su;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Pv;break;case nh:case ih:case rh:ze=vv;break;case sh:ze=Lv;break;case"scroll":ze=dv;break;case"wheel":ze=Nv;break;case"copy":case"cut":case"paste":ze=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=kd}var Ze=(i&4)!==0,qt=!Ze&&n==="scroll",$=Ze?_e!==null?_e+"Capture":null:_e;Ze=[];for(var W=ie,K;W!==null;){K=W;var Ce=K.stateNode;if(K.tag===5&&Ce!==null&&(K=Ce,$!==null&&(Ce=En(W,$),Ce!=null&&Ze.push(So(W,Ce,K)))),qt)break;W=W.return}0<Ze.length&&(_e=new ze(_e,qe,null,a,xe),Me.push({event:_e,listeners:Ze}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",_e&&a!==Lt&&(qe=a.relatedTarget||a.fromElement)&&(Rr(qe)||qe[wi]))break e;if((ze||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(qe=a.relatedTarget||a.toElement,ze=ie,qe=qe?Rr(qe):null,qe!==null&&(qt=pi(qe),qe!==qt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(ze=null,qe=ie),ze!==qe)){if(Ze=Fd,Ce="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=kd,Ce="onPointerLeave",$="onPointerEnter",W="pointer"),qt=ze==null?_e:fs(ze),K=qe==null?_e:fs(qe),_e=new Ze(Ce,W+"leave",ze,a,xe),_e.target=qt,_e.relatedTarget=K,Ce=null,Rr(xe)===ie&&(Ze=new Ze($,W+"enter",qe,a,xe),Ze.target=K,Ze.relatedTarget=qt,Ce=Ze),qt=Ce,ze&&qe)t:{for(Ze=ze,$=qe,W=0,K=Ze;K;K=us(K))W++;for(K=0,Ce=$;Ce;Ce=us(Ce))K++;for(;0<W-K;)Ze=us(Ze),W--;for(;0<K-W;)$=us($),K--;for(;W--;){if(Ze===$||$!==null&&Ze===$.alternate)break t;Ze=us(Ze),$=us($)}Ze=null}else Ze=null;ze!==null&&fh(Me,_e,ze,Ze,!1),qe!==null&&qt!==null&&fh(Me,qt,qe,Ze,!0)}}e:{if(_e=ie?fs(ie):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var Qe=Bv;else if(Wd(_e))if(jd)Qe=Wv;else{Qe=Hv;var rt=Vv}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Qe=Gv);if(Qe&&(Qe=Qe(n,ie))){Xd(Me,Qe,a,xe);break e}rt&&rt(n,_e,ie),n==="focusout"&&(rt=_e._wrapperState)&&rt.controlled&&_e.type==="number"&&nt(_e,"number",_e.value)}switch(rt=ie?fs(ie):window,n){case"focusin":(Wd(rt)||rt.contentEditable==="true")&&(as=rt,fu=ie,_o=null);break;case"focusout":_o=fu=as=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,eh(Me,a,xe);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":eh(Me,a,xe)}var st;if(au)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else os?Hd(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(zd&&a.locale!=="ko"&&(os||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&os&&(st=Ud()):(Ki=xe,tu="value"in Ki?Ki.value:Ki.textContent,os=!0)),rt=wa(ie,ut),0<rt.length&&(ut=new Od(ut,n,null,a,xe),Me.push({event:ut,listeners:rt}),st?ut.data=st:(st=Gd(a),st!==null&&(ut.data=st)))),(st=Iv?Fv(n,a):Ov(n,a))&&(ie=wa(ie,"onBeforeInput"),0<ie.length&&(xe=new Od("onBeforeInput","beforeinput",null,a,xe),Me.push({event:xe,listeners:ie}),xe.data=st))}uh(Me,i)})}function So(n,i,a){return{instance:n,listener:i,currentTarget:a}}function wa(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=En(n,a),m!=null&&u.unshift(So(n,m,d)),m=En(n,i),m!=null&&u.push(So(n,m,d))),n=n.return}return u}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fh(n,i,a,u,d){for(var m=i._reactName,E=[];a!==null&&a!==u;){var I=a,V=I.alternate,ie=I.stateNode;if(V!==null&&V===u)break;I.tag===5&&ie!==null&&(I=ie,d?(V=En(a,m),V!=null&&E.unshift(So(a,V,I))):d||(V=En(a,m),V!=null&&E.push(So(a,V,I)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var Kv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function dh(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Jv,"")}function Aa(n,i,a){if(i=dh(i),dh(n)!==i&&a)throw Error(t(425))}function Ca(){}var _u=null,xu=null;function yu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(n){return hh.resolve(null).then(n).catch(t0)}:Su;function t0(n){setTimeout(function(){throw n})}function Mu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),co(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);co(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ph(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),mi="__reactFiber$"+cs,Mo="__reactProps$"+cs,wi="__reactContainer$"+cs,Eu="__reactEvents$"+cs,n0="__reactListeners$"+cs,i0="__reactHandles$"+cs;function Rr(n){var i=n[mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wi]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ph(n);n!==null;){if(a=n[mi])return a;n=ph(n)}return i}n=a,a=n.parentNode}return null}function Eo(n){return n=n[mi]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[Mo]||null}var Tu=[],ds=-1;function er(n){return{current:n}}function kt(n){0>ds||(n.current=Tu[ds],Tu[ds]=null,ds--)}function It(n,i){ds++,Tu[ds]=n.current,n.current=i}var tr={},gn=er(tr),Nn=er(!1),Pr=tr;function hs(n,i){var a=n.type.contextTypes;if(!a)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Un(n){return n=n.childContextTypes,n!=null}function Pa(){kt(Nn),kt(gn)}function mh(n,i,a){if(gn.current!==tr)throw Error(t(168));It(gn,i),It(Nn,a)}function gh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,pe(n)||"Unknown",d));return ae({},a,u)}function ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,Pr=gn.current,It(gn,n),It(Nn,Nn.current),!0}function vh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=gh(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,kt(Nn),kt(gn),It(gn,n)):kt(Nn),It(Nn,a)}var Ai=null,La=!1,wu=!1;function _h(n){Ai===null?Ai=[n]:Ai.push(n)}function r0(n){La=!0,_h(n)}function nr(){if(!wu&&Ai!==null){wu=!0;var n=0,i=St;try{var a=Ai;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ai=null,La=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(n+1)),C(Ne,nr),d}finally{St=i,wu=!1}}return null}var ps=[],ms=0,Da=null,Na=0,qn=[],$n=0,br=null,Ci=1,Ri="";function Lr(n,i){ps[ms++]=Na,ps[ms++]=Da,Da=n,Na=i}function xh(n,i,a){qn[$n++]=Ci,qn[$n++]=Ri,qn[$n++]=br,br=n;var u=Ci;n=Ri;var d=32-Rt(u)-1;u&=~(1<<d),a+=1;var m=32-Rt(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Ci=1<<32-Rt(i)+d|a<<d|u,Ri=m+n}else Ci=1<<m|a<<d|u,Ri=n}function Au(n){n.return!==null&&(Lr(n,1),xh(n,1,0))}function Cu(n){for(;n===Da;)Da=ps[--ms],ps[ms]=null,Na=ps[--ms],ps[ms]=null;for(;n===br;)br=qn[--$n],qn[$n]=null,Ri=qn[--$n],qn[$n]=null,Ci=qn[--$n],qn[$n]=null}var Hn=null,Gn=null,Bt=!1,ii=null;function yh(n,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Sh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Gn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=br!==null?{id:Ci,overflow:Ri}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Hn=n,Gn=null,!0):!1;default:return!1}}function Ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pu(n){if(Bt){var i=Gn;if(i){var a=i;if(!Sh(n,i)){if(Ru(n))throw Error(t(418));i=Qi(a.nextSibling);var u=Hn;i&&Sh(n,i)?yh(u,a):(n.flags=n.flags&-4097|2,Bt=!1,Hn=n)}}else{if(Ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Hn=n}}}function Mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Ua(n){if(n!==Hn)return!1;if(!Bt)return Mh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!yu(n.type,n.memoizedProps)),i&&(i=Gn)){if(Ru(n))throw Eh(),Error(t(418));for(;i;)yh(n,i),i=Qi(i.nextSibling)}if(Mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Gn=Qi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Gn=null}}else Gn=Hn?Qi(n.stateNode.nextSibling):null;return!0}function Eh(){for(var n=Gn;n;)n=Qi(n.nextSibling)}function gs(){Gn=Hn=null,Bt=!1}function bu(n){ii===null?ii=[n]:ii.push(n)}var s0=R.ReactCurrentBatchConfig;function To(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=d.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ia(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Th(n){var i=n._init;return i(n._payload)}function wh(n){function i($,W){if(n){var K=$.deletions;K===null?($.deletions=[W],$.flags|=16):K.push(W)}}function a($,W){if(!n)return null;for(;W!==null;)i($,W),W=W.sibling;return null}function u($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function d($,W){return $=cr($,W),$.index=0,$.sibling=null,$}function m($,W,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<W?($.flags|=2,W):K):($.flags|=2,W)):($.flags|=1048576,W)}function E($){return n&&$.alternate===null&&($.flags|=2),$}function I($,W,K,Ce){return W===null||W.tag!==6?(W=Sc(K,$.mode,Ce),W.return=$,W):(W=d(W,K),W.return=$,W)}function V($,W,K,Ce){var Qe=K.type;return Qe===U?xe($,W,K.props.children,Ce,K.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===J&&Th(Qe)===W.type)?(Ce=d(W,K.props),Ce.ref=To($,W,K),Ce.return=$,Ce):(Ce=sl(K.type,K.key,K.props,null,$.mode,Ce),Ce.ref=To($,W,K),Ce.return=$,Ce)}function ie($,W,K,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=Mc(K,$.mode,Ce),W.return=$,W):(W=d(W,K.children||[]),W.return=$,W)}function xe($,W,K,Ce,Qe){return W===null||W.tag!==7?(W=zr(K,$.mode,Ce,Qe),W.return=$,W):(W=d(W,K),W.return=$,W)}function Me($,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Sc(""+W,$.mode,K),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case k:return K=sl(W.type,W.key,W.props,null,$.mode,K),K.ref=To($,null,W),K.return=$,K;case D:return W=Mc(W,$.mode,K),W.return=$,W;case J:var Ce=W._init;return Me($,Ce(W._payload),K)}if(Ue(W)||fe(W))return W=zr(W,$.mode,K,null),W.return=$,W;Ia($,W)}return null}function _e($,W,K,Ce){var Qe=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Qe!==null?null:I($,W,""+K,Ce);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case k:return K.key===Qe?V($,W,K,Ce):null;case D:return K.key===Qe?ie($,W,K,Ce):null;case J:return Qe=K._init,_e($,W,Qe(K._payload),Ce)}if(Ue(K)||fe(K))return Qe!==null?null:xe($,W,K,Ce,null);Ia($,K)}return null}function ze($,W,K,Ce,Qe){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return $=$.get(K)||null,I(W,$,""+Ce,Qe);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case k:return $=$.get(Ce.key===null?K:Ce.key)||null,V(W,$,Ce,Qe);case D:return $=$.get(Ce.key===null?K:Ce.key)||null,ie(W,$,Ce,Qe);case J:var rt=Ce._init;return ze($,W,K,rt(Ce._payload),Qe)}if(Ue(Ce)||fe(Ce))return $=$.get(K)||null,xe(W,$,Ce,Qe,null);Ia(W,Ce)}return null}function qe($,W,K,Ce){for(var Qe=null,rt=null,st=W,ut=W=0,on=null;st!==null&&ut<K.length;ut++){st.index>ut?(on=st,st=null):on=st.sibling;var Pt=_e($,st,K[ut],Ce);if(Pt===null){st===null&&(st=on);break}n&&st&&Pt.alternate===null&&i($,st),W=m(Pt,W,ut),rt===null?Qe=Pt:rt.sibling=Pt,rt=Pt,st=on}if(ut===K.length)return a($,st),Bt&&Lr($,ut),Qe;if(st===null){for(;ut<K.length;ut++)st=Me($,K[ut],Ce),st!==null&&(W=m(st,W,ut),rt===null?Qe=st:rt.sibling=st,rt=st);return Bt&&Lr($,ut),Qe}for(st=u($,st);ut<K.length;ut++)on=ze(st,$,ut,K[ut],Ce),on!==null&&(n&&on.alternate!==null&&st.delete(on.key===null?ut:on.key),W=m(on,W,ut),rt===null?Qe=on:rt.sibling=on,rt=on);return n&&st.forEach(function(fr){return i($,fr)}),Bt&&Lr($,ut),Qe}function Ze($,W,K,Ce){var Qe=fe(K);if(typeof Qe!="function")throw Error(t(150));if(K=Qe.call(K),K==null)throw Error(t(151));for(var rt=Qe=null,st=W,ut=W=0,on=null,Pt=K.next();st!==null&&!Pt.done;ut++,Pt=K.next()){st.index>ut?(on=st,st=null):on=st.sibling;var fr=_e($,st,Pt.value,Ce);if(fr===null){st===null&&(st=on);break}n&&st&&fr.alternate===null&&i($,st),W=m(fr,W,ut),rt===null?Qe=fr:rt.sibling=fr,rt=fr,st=on}if(Pt.done)return a($,st),Bt&&Lr($,ut),Qe;if(st===null){for(;!Pt.done;ut++,Pt=K.next())Pt=Me($,Pt.value,Ce),Pt!==null&&(W=m(Pt,W,ut),rt===null?Qe=Pt:rt.sibling=Pt,rt=Pt);return Bt&&Lr($,ut),Qe}for(st=u($,st);!Pt.done;ut++,Pt=K.next())Pt=ze(st,$,ut,Pt.value,Ce),Pt!==null&&(n&&Pt.alternate!==null&&st.delete(Pt.key===null?ut:Pt.key),W=m(Pt,W,ut),rt===null?Qe=Pt:rt.sibling=Pt,rt=Pt);return n&&st.forEach(function(k0){return i($,k0)}),Bt&&Lr($,ut),Qe}function qt($,W,K,Ce){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case k:e:{for(var Qe=K.key,rt=W;rt!==null;){if(rt.key===Qe){if(Qe=K.type,Qe===U){if(rt.tag===7){a($,rt.sibling),W=d(rt,K.props.children),W.return=$,$=W;break e}}else if(rt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===J&&Th(Qe)===rt.type){a($,rt.sibling),W=d(rt,K.props),W.ref=To($,rt,K),W.return=$,$=W;break e}a($,rt);break}else i($,rt);rt=rt.sibling}K.type===U?(W=zr(K.props.children,$.mode,Ce,K.key),W.return=$,$=W):(Ce=sl(K.type,K.key,K.props,null,$.mode,Ce),Ce.ref=To($,W,K),Ce.return=$,$=Ce)}return E($);case D:e:{for(rt=K.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){a($,W.sibling),W=d(W,K.children||[]),W.return=$,$=W;break e}else{a($,W);break}else i($,W);W=W.sibling}W=Mc(K,$.mode,Ce),W.return=$,$=W}return E($);case J:return rt=K._init,qt($,W,rt(K._payload),Ce)}if(Ue(K))return qe($,W,K,Ce);if(fe(K))return Ze($,W,K,Ce);Ia($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(a($,W.sibling),W=d(W,K),W.return=$,$=W):(a($,W),W=Sc(K,$.mode,Ce),W.return=$,$=W),E($)):a($,W)}return qt}var vs=wh(!0),Ah=wh(!1),Fa=er(null),Oa=null,_s=null,Lu=null;function Du(){Lu=_s=Oa=null}function Nu(n){var i=Fa.current;kt(Fa),n._currentValue=i}function Uu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function xs(n,i){Oa=n,Lu=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Lu!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Oa===null)throw Error(t(308));_s=n,Oa.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Dr=null;function Iu(n){Dr===null?Dr=[n]:Dr.push(n)}function Ch(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Iu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Pi(n,u)}function Pi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ir=!1;function Fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(At&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Pi(n,a)}return d=u.interleaved,d===null?(i.next=i,Iu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Pi(n,a)}function ka(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Cr(n,a)}}function Ph(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function za(n,i,a,u){var d=n.updateQueue;ir=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var V=I,ie=V.next;V.next=null,E===null?m=ie:E.next=ie,E=V;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==E&&(I===null?xe.firstBaseUpdate=ie:I.next=ie,xe.lastBaseUpdate=V))}if(m!==null){var Me=d.baseState;E=0,xe=ie=V=null,I=m;do{var _e=I.lane,ze=I.eventTime;if((u&_e)===_e){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var qe=n,Ze=I;switch(_e=i,ze=a,Ze.tag){case 1:if(qe=Ze.payload,typeof qe=="function"){Me=qe.call(ze,Me,_e);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ze.payload,_e=typeof qe=="function"?qe.call(ze,Me,_e):qe,_e==null)break e;Me=ae({},Me,_e);break e;case 2:ir=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[I]:_e.push(I))}else ze={eventTime:ze,lane:_e,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(ie=xe=ze,V=Me):xe=xe.next=ze,E|=_e;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;_e=I,I=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(V=Me),d.baseState=V,d.firstBaseUpdate=ie,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Ir|=E,n.lanes=E,n.memoizedState=Me}}function bh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var wo={},gi=er(wo),Ao=er(wo),Co=er(wo);function Nr(n){if(n===wo)throw Error(t(174));return n}function Ou(n,i){switch(It(Co,i),It(Ao,n),It(gi,wo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:$e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=$e(i,n)}kt(gi),It(gi,i)}function ys(){kt(gi),kt(Ao),kt(Co)}function Lh(n){Nr(Co.current);var i=Nr(gi.current),a=$e(i,n.type);i!==a&&(It(Ao,n),It(gi,a))}function ku(n){Ao.current===n&&(kt(gi),kt(Ao))}var Ht=er(0);function Ba(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zu=[];function Bu(){for(var n=0;n<zu.length;n++)zu[n]._workInProgressVersionPrimary=null;zu.length=0}var Va=R.ReactCurrentDispatcher,Vu=R.ReactCurrentBatchConfig,Ur=0,Gt=null,Qt=null,rn=null,Ha=!1,Ro=!1,Po=0,o0=0;function vn(){throw Error(t(321))}function Hu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ni(n[a],i[a]))return!1;return!0}function Gu(n,i,a,u,d,m){if(Ur=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Va.current=n===null||n.memoizedState===null?c0:f0,n=a(u,d),Ro){m=0;do{if(Ro=!1,Po=0,25<=m)throw Error(t(301));m+=1,rn=Qt=null,i.updateQueue=null,Va.current=d0,n=a(u,d)}while(Ro)}if(Va.current=Xa,i=Qt!==null&&Qt.next!==null,Ur=0,rn=Qt=Gt=null,Ha=!1,i)throw Error(t(300));return n}function Wu(){var n=Po!==0;return Po=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Gt.memoizedState=rn=n:rn=rn.next=n,rn}function Kn(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=rn===null?Gt.memoizedState:rn.next;if(i!==null)rn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},rn===null?Gt.memoizedState=rn=n:rn=rn.next=n}return rn}function bo(n,i){return typeof i=="function"?i(n):i}function Xu(n){var i=Kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Qt,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=E=null,V=null,ie=m;do{var xe=ie.lane;if((Ur&xe)===xe)V!==null&&(V=V.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var Me={lane:xe,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};V===null?(I=V=Me,E=u):V=V.next=Me,Gt.lanes|=xe,Ir|=xe}ie=ie.next}while(ie!==null&&ie!==m);V===null?E=u:V.next=I,ni(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=V,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Gt.lanes|=m,Ir|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ju(n){var i=Kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ni(m,i.memoizedState)||(In=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Dh(){}function Nh(n,i){var a=Gt,u=Kn(),d=i(),m=!ni(u.memoizedState,d);if(m&&(u.memoizedState=d,In=!0),u=u.queue,Yu(Fh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Lo(9,Ih.bind(null,a,u,d,i),void 0,null),sn===null)throw Error(t(349));(Ur&30)!==0||Uh(a,i,d)}return d}function Uh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ih(n,i,a,u){i.value=a,i.getSnapshot=u,Oh(i)&&kh(n)}function Fh(n,i,a){return a(function(){Oh(i)&&kh(n)})}function Oh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ni(n,a)}catch{return!0}}function kh(n){var i=Pi(n,1);i!==null&&ai(i,n,1,-1)}function zh(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:n},i.queue=n,n=n.dispatch=u0.bind(null,Gt,n),[i.memoizedState,n]}function Lo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Bh(){return Kn().memoizedState}function Ga(n,i,a,u){var d=vi();Gt.flags|=n,d.memoizedState=Lo(1|i,a,void 0,u===void 0?null:u)}function Wa(n,i,a,u){var d=Kn();u=u===void 0?null:u;var m=void 0;if(Qt!==null){var E=Qt.memoizedState;if(m=E.destroy,u!==null&&Hu(u,E.deps)){d.memoizedState=Lo(i,a,m,u);return}}Gt.flags|=n,d.memoizedState=Lo(1|i,a,m,u)}function Vh(n,i){return Ga(8390656,8,n,i)}function Yu(n,i){return Wa(2048,8,n,i)}function Hh(n,i){return Wa(4,2,n,i)}function Gh(n,i){return Wa(4,4,n,i)}function Wh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xh(n,i,a){return a=a!=null?a.concat([n]):null,Wa(4,4,Wh.bind(null,i,n),a)}function qu(){}function jh(n,i){var a=Kn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Hu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Yh(n,i){var a=Kn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Hu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function qh(n,i,a){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a):(ni(a,i)||(a=wn(),Gt.lanes|=a,Ir|=a,n.baseState=!0),i)}function a0(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=Vu.transition;Vu.transition={};try{n(!1),i()}finally{St=a,Vu.transition=u}}function $h(){return Kn().memoizedState}function l0(n,i,a){var u=lr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Zh(n))Kh(i,a);else if(a=Ch(n,i,a,u),a!==null){var d=Cn();ai(a,n,u,d),Jh(a,i,u)}}function u0(n,i,a){var u=lr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zh(n))Kh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,a);if(d.hasEagerState=!0,d.eagerState=I,ni(I,E)){var V=i.interleaved;V===null?(d.next=d,Iu(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}a=Ch(n,i,d,u),a!==null&&(d=Cn(),ai(a,n,u,d),Jh(a,i,u))}}function Zh(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Kh(n,i){Ro=Ha=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Jh(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Cr(n,a)}}var Xa={readContext:Zn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},c0={readContext:Zn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:Vh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ga(4194308,4,Wh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ga(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ga(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=l0.bind(null,Gt,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:zh,useDebugValue:qu,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=zh(!1),i=n[0];return n=a0.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Gt,d=vi();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Ur&30)!==0||Uh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Vh(Fh.bind(null,u,m,n),[n]),u.flags|=2048,Lo(9,Ih.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=vi(),i=sn.identifierPrefix;if(Bt){var a=Ri,u=Ci;a=(u&~(1<<32-Rt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Po++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=o0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},f0={readContext:Zn,useCallback:jh,useContext:Zn,useEffect:Yu,useImperativeHandle:Xh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:Yh,useReducer:Xu,useRef:Bh,useState:function(){return Xu(bo)},useDebugValue:qu,useDeferredValue:function(n){var i=Kn();return qh(i,Qt.memoizedState,n)},useTransition:function(){var n=Xu(bo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:$h,unstable_isNewReconciler:!1},d0={readContext:Zn,useCallback:jh,useContext:Zn,useEffect:Yu,useImperativeHandle:Xh,useInsertionEffect:Hh,useLayoutEffect:Gh,useMemo:Yh,useReducer:ju,useRef:Bh,useState:function(){return ju(bo)},useDebugValue:qu,useDeferredValue:function(n){var i=Kn();return Qt===null?i.memoizedState=n:qh(i,Qt.memoizedState,n)},useTransition:function(){var n=ju(bo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:$h,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function $u(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ja={isMounted:function(n){return(n=n._reactInternals)?pi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Cn(),d=lr(n),m=bi(u,d);m.payload=i,a!=null&&(m.callback=a),i=rr(n,m,d),i!==null&&(ai(i,n,d,u),ka(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Cn(),d=lr(n),m=bi(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=rr(n,m,d),i!==null&&(ai(i,n,d,u),ka(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Cn(),u=lr(n),d=bi(a,u);d.tag=2,i!=null&&(d.callback=i),i=rr(n,d,u),i!==null&&(ai(i,n,u,a),ka(i,n,u))}};function Qh(n,i,a,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!vo(a,u)||!vo(d,m):!0}function ep(n,i,a){var u=!1,d=tr,m=i.contextType;return typeof m=="object"&&m!==null?m=Zn(m):(d=Un(i)?Pr:gn.current,u=i.contextTypes,m=(u=u!=null)?hs(n,d):tr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function tp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&ja.enqueueReplaceState(i,i.state,null)}function Zu(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Fu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Zn(m):(m=Un(i)?Pr:gn.current,d.context=hs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&($u(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),za(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var a="",u=i;do a+=oe(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Ku(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ju(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function np(n,i,a){a=bi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Qa||(Qa=!0,hc=u),Ju(n,i)},a}function ip(n,i,a){a=bi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){Ju(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Ju(n,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function rp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new h0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=C0.bind(null,n,i,a),i.then(n,n))}function sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function op(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=bi(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var p0=R.ReactCurrentOwner,In=!1;function An(n,i,a,u){i.child=n===null?Ah(i,null,a,u):vs(i,n.child,a,u)}function ap(n,i,a,u,d){a=a.render;var m=i.ref;return xs(i,d),u=Gu(n,i,a,u,m,d),a=Wu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Bt&&a&&Au(i),i.flags|=1,An(n,i,u,d),i.child)}function lp(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!yc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,up(n,i,m,u,d)):(n=sl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(E,u)&&n.ref===i.ref)return Li(n,i,d)}return i.flags|=1,n=cr(m,u),n.ref=i.ref,n.return=i,i.child=n}function up(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(vo(m,u)&&n.ref===i.ref)if(In=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,Li(n,i,d)}return Qu(n,i,a,u,d)}function cp(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Es,Wn),Wn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Es,Wn),Wn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,It(Es,Wn),Wn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,It(Es,Wn),Wn|=u;return An(n,i,d,a),i.child}function fp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Qu(n,i,a,u,d){var m=Un(a)?Pr:gn.current;return m=hs(i,m),xs(i,d),a=Gu(n,i,a,u,m,d),u=Wu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Bt&&u&&Au(i),i.flags|=1,An(n,i,a,d),i.child)}function dp(n,i,a,u,d){if(Un(a)){var m=!0;ba(i)}else m=!1;if(xs(i,d),i.stateNode===null)qa(n,i),ep(i,a,u),Zu(i,a,u,d),u=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var V=E.context,ie=a.contextType;typeof ie=="object"&&ie!==null?ie=Zn(ie):(ie=Un(a)?Pr:gn.current,ie=hs(i,ie));var xe=a.getDerivedStateFromProps,Me=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||V!==ie)&&tp(i,E,u,ie),ir=!1;var _e=i.memoizedState;E.state=_e,za(i,u,E,d),V=i.memoizedState,I!==u||_e!==V||Nn.current||ir?(typeof xe=="function"&&($u(i,a,xe,u),V=i.memoizedState),(I=ir||Qh(i,a,I,u,_e,V,ie))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),E.props=u,E.state=V,E.context=ie,u=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Rh(n,i),I=i.memoizedProps,ie=i.type===i.elementType?I:ri(i.type,I),E.props=ie,Me=i.pendingProps,_e=E.context,V=a.contextType,typeof V=="object"&&V!==null?V=Zn(V):(V=Un(a)?Pr:gn.current,V=hs(i,V));var ze=a.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Me||_e!==V)&&tp(i,E,u,V),ir=!1,_e=i.memoizedState,E.state=_e,za(i,u,E,d);var qe=i.memoizedState;I!==Me||_e!==qe||Nn.current||ir?(typeof ze=="function"&&($u(i,a,ze,u),qe=i.memoizedState),(ie=ir||Qh(i,a,ie,u,_e,qe,V)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,qe,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,qe,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=qe),E.props=u,E.state=qe,E.context=V,u=ie):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return ec(n,i,a,u,m,d)}function ec(n,i,a,u,d,m){fp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&vh(i,a,!1),Li(n,i,m);u=i.stateNode,p0.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=vs(i,n.child,null,m),i.child=vs(i,null,I,m)):An(n,i,I,m),i.memoizedState=u.state,d&&vh(i,a,!0),i.child}function hp(n){var i=n.stateNode;i.pendingContext?mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&mh(n,i.context,!1),Ou(n,i.containerInfo)}function pp(n,i,a,u,d){return gs(),bu(d),i.flags|=256,An(n,i,a,u),i.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function mp(n,i,a){var u=i.pendingProps,d=Ht.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(Ht,d&1),n===null)return Pu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=ol(E,u,0,null),n=zr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=nc(a),i.memoizedState=tc,n):ic(i,E));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return m0(n,i,E,u,I,d,a);if(m){m=u.fallback,E=i.mode,d=n.child,I=d.sibling;var V={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=cr(d,V),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=cr(I,m):(m=zr(m,E,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?nc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=tc,u}return m=n.child,n=m.sibling,u=cr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function ic(n,i){return i=ol({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ya(n,i,a,u){return u!==null&&bu(u),vs(i,n.child,null,a),n=ic(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function m0(n,i,a,u,d,m,E){if(a)return i.flags&256?(i.flags&=-257,u=Ku(Error(t(422))),Ya(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ol({mode:"visible",children:u.children},d,0,null),m=zr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&vs(i,n.child,null,E),i.child.memoizedState=nc(E),i.memoizedState=tc,m);if((i.mode&1)===0)return Ya(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=Ku(m,u,void 0),Ya(n,i,E,u)}if(I=(E&n.childLanes)!==0,In||I){if(u=sn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pi(n,d),ai(u,n,d,-1))}return xc(),u=Ku(Error(t(421))),Ya(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=R0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Gn=Qi(d.nextSibling),Hn=i,Bt=!0,ii=null,n!==null&&(qn[$n++]=Ci,qn[$n++]=Ri,qn[$n++]=br,Ci=n.id,Ri=n.overflow,br=i),i=ic(i,u.children),i.flags|=4096,i)}function gp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Uu(n.return,i,a)}function rc(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function vp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(An(n,i,u.children,a),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gp(n,a,i);else if(n.tag===19)gp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Ba(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),rc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ba(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}rc(i,!0,a,null,m);break;case"together":rc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Li(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=cr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=cr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function g0(n,i,a){switch(i.tag){case 3:hp(i),gs();break;case 5:Lh(i);break;case 1:Un(i.type)&&ba(i);break;case 4:Ou(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Fa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?mp(n,i,a):(It(Ht,Ht.current&1),n=Li(n,i,a),n!==null?n.sibling:null);It(Ht,Ht.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return vp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,a)}return Li(n,i,a)}var _p,sc,xp,yp;_p=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},sc=function(){},xp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(gi.current);var m=null;switch(a){case"input":d=N(n,d),u=N(n,u),m=[];break;case"select":d=ae({},d,{value:void 0}),u=ae({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ca)}_t(a,u);var E;a=null;for(ie in d)if(!u.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var I=d[ie];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?m||(m=[]):(m=m||[]).push(ie,null));for(ie in u){var V=u[ie];if(I=d!=null?d[ie]:void 0,u.hasOwnProperty(ie)&&V!==I&&(V!=null||I!=null))if(ie==="style")if(I){for(E in I)!I.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in V)V.hasOwnProperty(E)&&I[E]!==V[E]&&(a||(a={}),a[E]=V[E])}else a||(m||(m=[]),m.push(ie,a)),a=V;else ie==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,I=I?I.__html:void 0,V!=null&&I!==V&&(m=m||[]).push(ie,V)):ie==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ie,""+V):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(V!=null&&ie==="onScroll"&&Ot("scroll",n),m||I===V||(m=[])):(m=m||[]).push(ie,V))}a&&(m=m||[]).push("style",a);var ie=m;(i.updateQueue=ie)&&(i.flags|=4)}},yp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Do(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function _n(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function v0(n,i,a){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Un(i.type)&&Pa(),_n(i),null;case 3:return u=i.stateNode,ys(),kt(Nn),kt(gn),Bu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ua(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(gc(ii),ii=null))),sc(n,i),_n(i),null;case 5:ku(i);var d=Nr(Co.current);if(a=i.type,n!==null&&i.stateNode!=null)xp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return _n(i),null}if(n=Nr(gi.current),Ua(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[mi]=i,u[Mo]=m,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<xo.length;d++)Ot(xo[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Je(u,m),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",u);break;case"textarea":Z(u,m),Ot("invalid",u)}_t(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Aa(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Aa(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Ot("scroll",u)}switch(a){case"input":vt(u),Re(u,m,!0);break;case"textarea":vt(u),ve(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ca)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[mi]=i,n[Mo]=u,_p(n,i,!1,!1),i.stateNode=n;e:{switch(E=ct(a,u),a){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<xo.length;d++)Ot(xo[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Je(n,u),d=N(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ae({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":Z(n,u),d=T(n,u),Ot("invalid",n);break;default:d=u}_t(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var V=I[m];m==="style"?ot(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&He(n,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&ht(n,V):typeof V=="number"&&ht(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Ot("scroll",n):V!=null&&L(n,m,V,E))}switch(a){case"input":vt(n),Re(n,u,!1);break;case"textarea":vt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?b(n,!!u.multiple,m,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ca)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(n&&i.stateNode!=null)yp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Nr(Co.current),Nr(gi.current),Ua(i)){if(u=i.stateNode,a=i.memoizedProps,u[mi]=i,(m=u.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:Aa(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Aa(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return _n(i),null;case 13:if(kt(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Eh(),gs(),i.flags|=98560,m=!1;else if(m=Ua(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[mi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),m=!1}else ii!==null&&(gc(ii),ii=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?en===0&&(en=3):xc())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return ys(),sc(n,i),n===null&&yo(i.stateNode.containerInfo),_n(i),null;case 10:return Nu(i.type._context),_n(i),null;case 17:return Un(i.type)&&Pa(),_n(i),null;case 19:if(kt(Ht),m=i.memoizedState,m===null)return _n(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Do(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ba(n),E!==null){for(i.flags|=128,Do(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&G()>Ts&&(i.flags|=128,u=!0,Do(m,!1),i.lanes=4194304)}else{if(!u)if(n=Ba(E),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Do(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Bt)return _n(i),null}else 2*G()-m.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,u=!0,Do(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=G(),i.sibling=null,a=Ht.current,It(Ht,u?a&1|2:a&1),i):(_n(i),null);case 22:case 23:return _c(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function _0(n,i){switch(Cu(i),i.tag){case 1:return Un(i.type)&&Pa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),kt(Nn),kt(gn),Bu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ku(i),null;case 13:if(kt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return ys(),null;case 10:return Nu(i.type._context),null;case 22:case 23:return _c(),null;case 24:return null;default:return null}}var $a=!1,xn=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ms(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){jt(n,i,u)}else a.current=null}function oc(n,i,a){try{a()}catch(u){jt(n,i,u)}}var Sp=!1;function y0(n,i){if(_u=ma,n=Qd(),cu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,I=-1,V=-1,ie=0,xe=0,Me=n,_e=null;t:for(;;){for(var ze;Me!==a||d!==0&&Me.nodeType!==3||(I=E+d),Me!==m||u!==0&&Me.nodeType!==3||(V=E+u),Me.nodeType===3&&(E+=Me.nodeValue.length),(ze=Me.firstChild)!==null;)_e=Me,Me=ze;for(;;){if(Me===n)break t;if(_e===a&&++ie===d&&(I=E),_e===m&&++xe===u&&(V=E),(ze=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=ze}a=I===-1||V===-1?null:{start:I,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(xu={focusedElem:n,selectionRange:a},ma=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ze=qe.memoizedProps,qt=qe.memoizedState,$=i.stateNode,W=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:ri(i.type,Ze),qt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){jt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return qe=Sp,Sp=!1,qe}function No(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&oc(i,a,m)}d=d.next}while(d!==u)}}function Za(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function ac(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Mp(n){var i=n.alternate;i!==null&&(n.alternate=null,Mp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[Mo],delete i[Eu],delete i[n0],delete i[i0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ep(n){return n.tag===5||n.tag===3||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ep(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ca));else if(u!==4&&(n=n.child,n!==null))for(lc(n,i,a),n=n.sibling;n!==null;)lc(n,i,a),n=n.sibling}function uc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(uc(n,i,a),n=n.sibling;n!==null;)uc(n,i,a),n=n.sibling}var cn=null,si=!1;function sr(n,i,a){for(a=a.child;a!==null;)wp(n,i,a),a=a.sibling}function wp(n,i,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:xn||Ms(a,i);case 6:var u=cn,d=si;cn=null,sr(n,i,a),cn=u,si=d,cn!==null&&(si?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(si?(n=cn,a=a.stateNode,n.nodeType===8?Mu(n.parentNode,a):n.nodeType===1&&Mu(n,a),co(n)):Mu(cn,a.stateNode));break;case 4:u=cn,d=si,cn=a.stateNode.containerInfo,si=!0,sr(n,i,a),cn=u,si=d;break;case 0:case 11:case 14:case 15:if(!xn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&oc(a,i,E),d=d.next}while(d!==u)}sr(n,i,a);break;case 1:if(!xn&&(Ms(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){jt(a,i,I)}sr(n,i,a);break;case 21:sr(n,i,a);break;case 22:a.mode&1?(xn=(u=xn)||a.memoizedState!==null,sr(n,i,a),xn=u):sr(n,i,a);break;default:sr(n,i,a)}}function Ap(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new x0),i.forEach(function(u){var d=P0.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,si=!1;break e;case 3:cn=I.stateNode.containerInfo,si=!0;break e;case 4:cn=I.stateNode.containerInfo,si=!0;break e}I=I.return}if(cn===null)throw Error(t(160));wp(m,E,d),cn=null,si=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ie){jt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),_i(n),u&4){try{No(3,n,n.return),Za(3,n)}catch(Ze){jt(n,n.return,Ze)}try{No(5,n,n.return)}catch(Ze){jt(n,n.return,Ze)}}break;case 1:oi(i,n),_i(n),u&512&&a!==null&&Ms(a,a.return);break;case 5:if(oi(i,n),_i(n),u&512&&a!==null&&Ms(a,a.return),n.flags&32){var d=n.stateNode;try{ht(d,"")}catch(Ze){jt(n,n.return,Ze)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,I=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Ee(d,m),ct(I,E);var ie=ct(I,m);for(E=0;E<V.length;E+=2){var xe=V[E],Me=V[E+1];xe==="style"?ot(d,Me):xe==="dangerouslySetInnerHTML"?He(d,Me):xe==="children"?ht(d,Me):L(d,xe,Me,ie)}switch(I){case"input":Ve(d,m);break;case"textarea":de(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?b(d,!!m.multiple,ze,!1):_e!==!!m.multiple&&(m.defaultValue!=null?b(d,!!m.multiple,m.defaultValue,!0):b(d,!!m.multiple,m.multiple?[]:"",!1))}d[Mo]=m}catch(Ze){jt(n,n.return,Ze)}}break;case 6:if(oi(i,n),_i(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ze){jt(n,n.return,Ze)}}break;case 3:if(oi(i,n),_i(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(Ze){jt(n,n.return,Ze)}break;case 4:oi(i,n),_i(n);break;case 13:oi(i,n),_i(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(dc=G())),u&4&&Ap(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(xn=(ie=xn)||xe,oi(i,n),xn=ie):oi(i,n),_i(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!xe&&(n.mode&1)!==0)for(Xe=n,xe=n.child;xe!==null;){for(Me=Xe=xe;Xe!==null;){switch(_e=Xe,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:No(4,_e,_e.return);break;case 1:Ms(_e,_e.return);var qe=_e.stateNode;if(typeof qe.componentWillUnmount=="function"){u=_e,a=_e.return;try{i=u,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Ze){jt(u,a,Ze)}}break;case 5:Ms(_e,_e.return);break;case 22:if(_e.memoizedState!==null){bp(Me);continue}}ze!==null?(ze.return=_e,Xe=ze):bp(Me)}xe=xe.sibling}e:for(xe=null,Me=n;;){if(Me.tag===5){if(xe===null){xe=Me;try{d=Me.stateNode,ie?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,V=Me.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,I.style.display=it("display",E))}catch(Ze){jt(n,n.return,Ze)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=ie?"":Me.memoizedProps}catch(Ze){jt(n,n.return,Ze)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:oi(i,n),_i(n),u&4&&Ap(n);break;case 21:break;default:oi(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Ep(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ht(d,""),u.flags&=-33);var m=Tp(n);uc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,I=Tp(n);lc(n,I,E);break;default:throw Error(t(161))}}catch(V){jt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function S0(n,i,a){Xe=n,Rp(n)}function Rp(n,i,a){for(var u=(n.mode&1)!==0;Xe!==null;){var d=Xe,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||$a;if(!E){var I=d.alternate,V=I!==null&&I.memoizedState!==null||xn;I=$a;var ie=xn;if($a=E,(xn=V)&&!ie)for(Xe=d;Xe!==null;)E=Xe,V=E.child,E.tag===22&&E.memoizedState!==null?Lp(d):V!==null?(V.return=E,Xe=V):Lp(d);for(;m!==null;)Xe=m,Rp(m),m=m.sibling;Xe=d,$a=I,xn=ie}Pp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Xe=m):Pp(n)}}function Pp(n){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Za(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!xn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&bh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}bh(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var xe=ie.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&co(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&ac(i)}catch(_e){jt(i,i.return,_e)}}if(i===n){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function bp(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Lp(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Za(4,i)}catch(V){jt(i,a,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(V){jt(i,d,V)}}var m=i.return;try{ac(i)}catch(V){jt(i,m,V)}break;case 5:var E=i.return;try{ac(i)}catch(V){jt(i,E,V)}}}catch(V){jt(i,i.return,V)}if(i===n){Xe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Xe=I;break}Xe=i.return}}var M0=Math.ceil,Ka=R.ReactCurrentDispatcher,cc=R.ReactCurrentOwner,Jn=R.ReactCurrentBatchConfig,At=0,sn=null,Zt=null,fn=0,Wn=0,Es=er(0),en=0,Uo=null,Ir=0,Ja=0,fc=0,Io=null,Fn=null,dc=0,Ts=1/0,Di=null,Qa=!1,hc=null,or=null,el=!1,ar=null,tl=0,Fo=0,pc=null,nl=-1,il=0;function Cn(){return(At&6)!==0?G():nl!==-1?nl:nl=G()}function lr(n){return(n.mode&1)===0?1:(At&2)!==0&&fn!==0?fn&-fn:s0.transition!==null?(il===0&&(il=wn()),il):(n=St,n!==0||(n=window.event,n=n===void 0?16:Nd(n.type)),n)}function ai(n,i,a,u){if(50<Fo)throw Fo=0,pc=null,Error(t(185));Yt(n,a,u),((At&2)===0||n!==sn)&&(n===sn&&((At&2)===0&&(Ja|=a),en===4&&ur(n,fn)),On(n,u),a===1&&At===0&&(i.mode&1)===0&&(Ts=G()+500,La&&nr()))}function On(n,i){var a=n.callbackNode;Ar(n,i);var u=ti(n,n===sn?fn:0);if(u===0)a!==null&&Y(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Y(a),i===1)n.tag===0?r0(Np.bind(null,n)):_h(Np.bind(null,n)),e0(function(){(At&6)===0&&nr()}),a=null;else{switch(wd(u)){case 1:a=Ne;break;case 4:a=Ge;break;case 16:a=We;break;case 536870912:a=lt;break;default:a=We}a=Vp(a,Dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Dp(n,i){if(nl=-1,il=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ws()&&n.callbackNode!==a)return null;var u=ti(n,n===sn?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=rl(n,u);else{i=u;var d=At;At|=2;var m=Ip();(sn!==n||fn!==i)&&(Di=null,Ts=G()+500,Or(n,i));do try{w0();break}catch(I){Up(n,I)}while(!0);Du(),Ka.current=m,At=d,Zt!==null?i=0:(sn=null,fn=0,i=en)}if(i!==0){if(i===2&&(d=Dt(n),d!==0&&(u=d,i=mc(n,d))),i===1)throw a=Uo,Or(n,0),ur(n,u),On(n,G()),a;if(i===6)ur(n,u);else{if(d=n.current.alternate,(u&30)===0&&!E0(d)&&(i=rl(n,u),i===2&&(m=Dt(n),m!==0&&(u=m,i=mc(n,m))),i===1))throw a=Uo,Or(n,0),ur(n,u),On(n,G()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Fn,Di);break;case 3:if(ur(n,u),(u&130023424)===u&&(i=dc+500-G(),10<i)){if(ti(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Su(kr.bind(null,n,Fn,Di),i);break}kr(n,Fn,Di);break;case 4:if(ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-Rt(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=G()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*M0(u/1960))-u,10<u){n.timeoutHandle=Su(kr.bind(null,n,Fn,Di),u);break}kr(n,Fn,Di);break;case 5:kr(n,Fn,Di);break;default:throw Error(t(329))}}}return On(n,G()),n.callbackNode===a?Dp.bind(null,n):null}function mc(n,i){var a=Io;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Fn,Fn=a,i!==null&&gc(i)),n}function gc(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function E0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!ni(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i){for(i&=~fc,i&=~Ja,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Rt(i),u=1<<a;n[a]=-1,i&=~u}}function Np(n){if((At&6)!==0)throw Error(t(327));ws();var i=ti(n,0);if((i&1)===0)return On(n,G()),null;var a=rl(n,i);if(n.tag!==0&&a===2){var u=Dt(n);u!==0&&(i=u,a=mc(n,u))}if(a===1)throw a=Uo,Or(n,0),ur(n,i),On(n,G()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Fn,Di),On(n,G()),null}function vc(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Ts=G()+500,La&&nr())}}function Fr(n){ar!==null&&ar.tag===0&&(At&6)===0&&ws();var i=At;At|=1;var a=Jn.transition,u=St;try{if(Jn.transition=null,St=1,n)return n()}finally{St=u,Jn.transition=a,At=i,(At&6)===0&&nr()}}function _c(){Wn=Es.current,kt(Es)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Qv(a)),Zt!==null)for(a=Zt.return;a!==null;){var u=a;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Pa();break;case 3:ys(),kt(Nn),kt(gn),Bu();break;case 5:ku(u);break;case 4:ys();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:Nu(u.type._context);break;case 22:case 23:_c()}a=a.return}if(sn=n,Zt=n=cr(n.current,null),fn=Wn=i,en=0,Uo=null,fc=Ja=Ir=0,Fn=Io=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}a.pending=u}Dr=null}return n}function Up(n,i){do{var a=Zt;try{if(Du(),Va.current=Xa,Ha){for(var u=Gt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ha=!1}if(Ur=0,rn=Qt=Gt=null,Ro=!1,Po=0,cc.current=null,a===null||a.return===null){en=1,Uo=i,Zt=null;break}e:{var m=n,E=a.return,I=a,V=i;if(i=fn,I.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ie=V,xe=I,Me=xe.tag;if((xe.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=sp(E);if(ze!==null){ze.flags&=-257,op(ze,E,I,m,i),ze.mode&1&&rp(m,ie,i),i=ze,V=ie;var qe=i.updateQueue;if(qe===null){var Ze=new Set;Ze.add(V),i.updateQueue=Ze}else qe.add(V);break e}else{if((i&1)===0){rp(m,ie,i),xc();break e}V=Error(t(426))}}else if(Bt&&I.mode&1){var qt=sp(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),op(qt,E,I,m,i),bu(Ss(V,I));break e}}m=V=Ss(V,I),en!==4&&(en=2),Io===null?Io=[m]:Io.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=np(m,V,i);Ph(m,$);break e;case 1:I=V;var W=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(or===null||!or.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=ip(m,I,i);Ph(m,Ce);break e}}m=m.return}while(m!==null)}Op(a)}catch(Qe){i=Qe,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Ip(){var n=Ka.current;return Ka.current=Xa,n===null?Xa:n}function xc(){(en===0||en===3||en===2)&&(en=4),sn===null||(Ir&268435455)===0&&(Ja&268435455)===0||ur(sn,fn)}function rl(n,i){var a=At;At|=2;var u=Ip();(sn!==n||fn!==i)&&(Di=null,Or(n,i));do try{T0();break}catch(d){Up(n,d)}while(!0);if(Du(),At=a,Ka.current=u,Zt!==null)throw Error(t(261));return sn=null,fn=0,en}function T0(){for(;Zt!==null;)Fp(Zt)}function w0(){for(;Zt!==null&&!re();)Fp(Zt)}function Fp(n){var i=Bp(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,i===null?Op(n):Zt=i,cc.current=null}function Op(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=v0(a,i,Wn),a!==null){Zt=a;return}}else{if(a=_0(a,i),a!==null){a.flags&=32767,Zt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=n}while(i!==null);en===0&&(en=5)}function kr(n,i,a){var u=St,d=Jn.transition;try{Jn.transition=null,St=1,A0(n,i,a,u)}finally{Jn.transition=d,St=u}return null}function A0(n,i,a,u){do ws();while(ar!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(mn(n,m),n===sn&&(Zt=sn=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Vp(We,function(){return ws(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Jn.transition,Jn.transition=null;var E=St;St=1;var I=At;At|=4,cc.current=null,y0(n,a),Cp(a,n),jv(xu),ma=!!_u,xu=_u=null,n.current=a,S0(a),se(),At=I,St=E,Jn.transition=m}else n.current=a;if(el&&(el=!1,ar=n,tl=d),m=n.pendingLanes,m===0&&(or=null),Ct(a.stateNode),On(n,G()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Qa)throw Qa=!1,n=hc,hc=null,n;return(tl&1)!==0&&n.tag!==0&&ws(),m=n.pendingLanes,(m&1)!==0?n===pc?Fo++:(Fo=0,pc=n):Fo=0,nr(),null}function ws(){if(ar!==null){var n=wd(tl),i=Jn.transition,a=St;try{if(Jn.transition=null,St=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,tl=0,(At&6)!==0)throw Error(t(331));var d=At;for(At|=4,Xe=n.current;Xe!==null;){var m=Xe,E=m.child;if((Xe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var V=0;V<I.length;V++){var ie=I[V];for(Xe=ie;Xe!==null;){var xe=Xe;switch(xe.tag){case 0:case 11:case 15:No(8,xe,m)}var Me=xe.child;if(Me!==null)Me.return=xe,Xe=Me;else for(;Xe!==null;){xe=Xe;var _e=xe.sibling,ze=xe.return;if(Mp(xe),xe===ie){Xe=null;break}if(_e!==null){_e.return=ze,Xe=_e;break}Xe=ze}}}var qe=m.alternate;if(qe!==null){var Ze=qe.child;if(Ze!==null){qe.child=null;do{var qt=Ze.sibling;Ze.sibling=null,Ze=qt}while(Ze!==null)}}Xe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Xe=E;else e:for(;Xe!==null;){if(m=Xe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:No(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Xe=$;break e}Xe=m.return}}var W=n.current;for(Xe=W;Xe!==null;){E=Xe;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Xe=K;else e:for(E=W;Xe!==null;){if(I=Xe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Za(9,I)}}catch(Qe){jt(I,I.return,Qe)}if(I===E){Xe=null;break e}var Ce=I.sibling;if(Ce!==null){Ce.return=I.return,Xe=Ce;break e}Xe=I.return}}if(At=d,nr(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{St=a,Jn.transition=i}}return!1}function kp(n,i,a){i=Ss(a,i),i=np(n,i,1),n=rr(n,i,1),i=Cn(),n!==null&&(Yt(n,1,i),On(n,i))}function jt(n,i,a){if(n.tag===3)kp(n,n,a);else for(;i!==null;){if(i.tag===3){kp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=Ss(a,n),n=ip(i,n,1),i=rr(i,n,1),n=Cn(),i!==null&&(Yt(i,1,n),On(i,n));break}}i=i.return}}function C0(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(fn&a)===a&&(en===4||en===3&&(fn&130023424)===fn&&500>G()-dc?Or(n,0):fc|=a),On(n,i)}function zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var a=Cn();n=Pi(n,i),n!==null&&(Yt(n,i,a),On(n,a))}function R0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),zp(n,a)}function P0(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),zp(n,a)}var Bp;Bp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)In=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return In=!1,g0(n,i,a);In=(n.flags&131072)!==0}else In=!1,Bt&&(i.flags&1048576)!==0&&xh(i,Na,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;qa(n,i),n=i.pendingProps;var d=hs(i,gn.current);xs(i,a),d=Gu(null,i,u,n,d,a);var m=Wu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(u)?(m=!0,ba(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fu(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,Zu(i,u,n,a),i=ec(null,i,u,!0,m,a)):(i.tag=0,Bt&&m&&Au(i),An(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(qa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=L0(u),n=ri(u,n),d){case 0:i=Qu(null,i,u,n,a);break e;case 1:i=dp(null,i,u,n,a);break e;case 11:i=ap(null,i,u,n,a);break e;case 14:i=lp(null,i,u,ri(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Qu(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),dp(n,i,u,d,a);case 3:e:{if(hp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Rh(n,i),za(i,u,null,a);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ss(Error(t(423)),i),i=pp(n,i,u,a,d);break e}else if(u!==d){d=Ss(Error(t(424)),i),i=pp(n,i,u,a,d);break e}else for(Gn=Qi(i.stateNode.containerInfo.firstChild),Hn=i,Bt=!0,ii=null,a=Ah(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),u===d){i=Li(n,i,a);break e}An(n,i,u,a)}i=i.child}return i;case 5:return Lh(i),n===null&&Pu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,yu(u,d)?E=null:m!==null&&yu(u,m)&&(i.flags|=32),fp(n,i),An(n,i,E,a),i.child;case 6:return n===null&&Pu(i),null;case 13:return mp(n,i,a);case 4:return Ou(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=vs(i,null,u,a):An(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),ap(n,i,u,d,a);case 7:return An(n,i,i.pendingProps,a),i.child;case 8:return An(n,i,i.pendingProps.children,a),i.child;case 12:return An(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,It(Fa,u._currentValue),u._currentValue=E,m!==null)if(ni(m.value,E)){if(m.children===d.children&&!Nn.current){i=Li(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var V=I.firstContext;V!==null;){if(V.context===u){if(m.tag===1){V=bi(-1,a&-a),V.tag=2;var ie=m.updateQueue;if(ie!==null){ie=ie.shared;var xe=ie.pending;xe===null?V.next=V:(V.next=xe.next,xe.next=V),ie.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),Uu(m.return,a,i),I.lanes|=a;break}V=V.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),Uu(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}An(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,xs(i,a),d=Zn(d),u=u(d),i.flags|=1,An(n,i,u,a),i.child;case 14:return u=i.type,d=ri(u,i.pendingProps),d=ri(u.type,d),lp(n,i,u,d,a);case 15:return up(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),qa(n,i),i.tag=1,Un(u)?(n=!0,ba(i)):n=!1,xs(i,a),ep(i,u,d),Zu(i,u,d,a),ec(null,i,u,!0,n,a);case 19:return vp(n,i,a);case 22:return cp(n,i,a)}throw Error(t(156,i.tag))};function Vp(n,i){return C(n,i)}function b0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,a,u){return new b0(n,i,a,u)}function yc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function L0(n){if(typeof n=="function")return yc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ue)return 14}return 2}function cr(n,i){var a=n.alternate;return a===null?(a=Qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function sl(n,i,a,u,d,m){var E=2;if(u=n,typeof n=="function")yc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return zr(a.children,d,m,i);case B:E=8,d|=8;break;case P:return n=Qn(12,a,i,d|2),n.elementType=P,n.lanes=m,n;case q:return n=Qn(13,a,i,d),n.elementType=q,n.lanes=m,n;case ne:return n=Qn(19,a,i,d),n.elementType=ne,n.lanes=m,n;case ce:return ol(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:E=10;break e;case z:E=9;break e;case ee:E=11;break e;case ue:E=14;break e;case J:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(E,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function zr(n,i,a,u){return n=Qn(7,n,u,i),n.lanes=a,n}function ol(n,i,a,u){return n=Qn(22,n,u,i),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function Sc(n,i,a){return n=Qn(6,n,null,i),n.lanes=a,n}function Mc(n,i,a){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function D0(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ec(n,i,a,u,d,m,E,I,V){return n=new D0(n,i,a,I,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(m),n}function N0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Hp(n){if(!n)return tr;n=n._reactInternals;e:{if(pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Un(a))return gh(n,a,i)}return i}function Gp(n,i,a,u,d,m,E,I,V){return n=Ec(a,u,!0,n,d,m,E,I,V),n.context=Hp(null),a=n.current,u=Cn(),d=lr(a),m=bi(u,d),m.callback=i??null,rr(a,m,d),n.current.lanes=d,Yt(n,d,u),On(n,u),n}function al(n,i,a,u){var d=i.current,m=Cn(),E=lr(d);return a=Hp(a),i.context===null?i.context=a:i.pendingContext=a,i=bi(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(d,i,E),n!==null&&(ai(n,d,E,m),ka(n,d,E)),E}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Tc(n,i){Wp(n,i),(n=n.alternate)&&Wp(n,i)}function U0(){return null}var Xp=typeof reportError=="function"?reportError:function(n){console.error(n)};function wc(n){this._internalRoot=n}ul.prototype.render=wc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));al(n,i,null,null)},ul.prototype.unmount=wc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){al(null,n,null,null)}),i[wi]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zi.length&&i!==0&&i<Zi[a].priority;a++);Zi.splice(a,0,n),a===0&&Ld(n)}};function Ac(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function I0(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ie=ll(E);m.call(ie)}}var E=Gp(i,u,n,0,null,!1,!1,"",jp);return n._reactRootContainer=E,n[wi]=E.current,yo(n.nodeType===8?n.parentNode:n),Fr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var ie=ll(V);I.call(ie)}}var V=Ec(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=V,n[wi]=V.current,yo(n.nodeType===8?n.parentNode:n),Fr(function(){al(i,V,a,u)}),V}function fl(n,i,a,u,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var I=d;d=function(){var V=ll(E);I.call(V)}}al(i,E,n,d)}else E=I0(a,i,n,d,u);return ll(E)}Ad=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=un(i.pendingLanes);a!==0&&(Cr(i,a|1),On(i,G()),(At&6)===0&&(Ts=G()+500,nr()))}break;case 13:Fr(function(){var u=Pi(n,1);if(u!==null){var d=Cn();ai(u,n,1,d)}}),Tc(n,1)}},Kl=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var a=Cn();ai(i,n,134217728,a)}Tc(n,134217728)}},Cd=function(n){if(n.tag===13){var i=lr(n),a=Pi(n,i);if(a!==null){var u=Cn();ai(a,n,i,u)}Tc(n,i)}},Rd=function(){return St},Pd=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},De=function(n,i,a){switch(i){case"input":if(Ve(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Ra(u);if(!d)throw Error(t(90));ge(u),Ve(u,d)}}}break;case"textarea":de(n,a);break;case"select":i=a.value,i!=null&&b(n,!!a.multiple,i,!1)}},Ft=vc,Jt=Fr;var F0={usingClientEntryPoint:!1,Events:[Eo,fs,Ra,Oe,ft,vc]},Oo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O0={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{et=dl.inject(O0),dt=dl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0,kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(i))throw Error(t(200));return N0(n,i,null,a)},kn.createRoot=function(n,i){if(!Ac(n))throw Error(t(299));var a=!1,u="",d=Xp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ec(n,1,!1,null,null,a,!1,u,d),n[wi]=i.current,yo(n.nodeType===8?n.parentNode:n),new wc(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return Fr(n)},kn.hydrate=function(n,i,a){if(!cl(i))throw Error(t(200));return fl(null,n,i,!0,a)},kn.hydrateRoot=function(n,i,a){if(!Ac(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",E=Xp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Gp(i,null,n,1,a??null,d,!1,m,E),n[wi]=i.current,yo(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ul(i)},kn.render=function(n,i,a){if(!cl(i))throw Error(t(200));return fl(null,n,i,!1,a)},kn.unmountComponentAtNode=function(n){if(!cl(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1},kn.unstable_batchedUpdates=vc,kn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!cl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,a,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var em;function fg(){if(em)return Pc.exports;em=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pc.exports=j0(),Pc.exports}var tm;function Y0(){if(tm)return hl;tm=1;var s=fg();return hl.createRoot=s.createRoot,hl.hydrateRoot=s.hydrateRoot,hl}var q0=Y0(),$0=fg();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=yt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...f},h)=>yt.createElement("svg",{ref:h,...K0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:dg("lucide",o),...f},[...c.map(([p,g])=>yt.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=(s,e)=>{const t=yt.forwardRef(({className:r,...o},l)=>yt.createElement(J0,{ref:l,iconNode:e,className:dg(`lucide-${Z0(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=ln("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=ln("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=ln("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=ln("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=ln("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=ln("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=ln("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=ln("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=ln("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=ln("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=ln("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=ln("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=ln("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=ln("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=ln("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=ln("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=ln("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=ln("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]),mg=[{id:"front",label:"Front"},{id:"hero",label:"Hero"},{id:"isometric",label:"Isometric"},{id:"orbit",label:"Orbit"}],gg=[{id:"glass",label:"Black Titanium",body:"#161a20",edge:"#2d343d",metalness:.82,roughness:.2},{id:"matte",label:"Deep Graphite",body:"#101317",edge:"#242a31",metalness:.66,roughness:.38},{id:"silver",label:"Natural Titanium",body:"#d6d0c8",edge:"#f2ece4",metalness:.74,roughness:.24}],hf=[{id:"studio",label:"Studio",swatch:"#eef3f7",clear:"#edf3f7",floor:"#dfe8ef"},{id:"sky",label:"Sky",swatch:"#dff7ff",clear:"#e5f9ff",floor:"#d1eff8"},{id:"paper",label:"Paper",swatch:"#f7f8f9",clear:"#f8fafb",floor:"#e8edf1"},{id:"graphite",label:"Graphite",swatch:"#202830",clear:"#161c23",floor:"#10151b"},{id:"coral",label:"Coral",swatch:"#fff0ec",clear:"#fff3ef",floor:"#f3d9d2"}],nm={angle:"hero",material:"glass",background:"studio",reflection:62,depth:48,shadow:58,lighting:72,autoSpin:!1};function zo({icon:s,title:e,children:t}){return Se.jsxs("section",{className:"inspector-section",children:[Se.jsxs("div",{className:"section-title",children:[Se.jsx(s,{size:16}),Se.jsx("h2",{children:e})]}),t]})}function im({label:s,value:e,options:t,onChange:r}){return Se.jsxs("label",{className:"field",children:[Se.jsx("span",{className:"field-label",children:s}),Se.jsx("span",{className:"segmented",children:t.map(o=>Se.jsx("button",{className:o.id===e?"selected":"",type:"button",onClick:()=>r(o.id),children:o.label},o.id))})]})}function pl({label:s,value:e,min:t=0,max:r=100,onChange:o}){return Se.jsxs("label",{className:"field range-field",children:[Se.jsxs("span",{className:"field-row",children:[Se.jsx("span",{className:"field-label",children:s}),Se.jsx("span",{className:"value-readout",children:e})]}),Se.jsx("input",{type:"range",min:t,max:r,value:e,onChange:l=>o(Number(l.target.value))})]})}function m_({label:s,icon:e,checked:t,onChange:r}){return Se.jsxs("button",{className:t?"toggle-control active":"toggle-control",type:"button","aria-pressed":t,onClick:()=>r(!t),children:[Se.jsxs("span",{children:[Se.jsx(e,{size:16}),s]}),Se.jsx("span",{className:"toggle-track","aria-hidden":"true",children:Se.jsx("span",{})})]})}function g_({value:s,onChange:e}){return Se.jsxs("div",{className:"field",children:[Se.jsx("span",{className:"field-label",children:"Background"}),Se.jsx("div",{className:"swatches",children:hf.map(t=>Se.jsx("button",{className:t.id===s?"swatch selected":"swatch",type:"button",title:t.label,"aria-label":t.label,onClick:()=>e(t.id),children:Se.jsx("span",{style:{background:t.swatch}})},t.id))})]})}function v_({settings:s,onSettingChange:e}){return Se.jsxs("aside",{className:"inspector","aria-label":"Scene inspector",children:[Se.jsx(zo,{icon:d_,title:"Device",children:Se.jsx(im,{label:"Finish",value:s.material,options:gg,onChange:t=>e("material",t)})}),Se.jsxs(zo,{icon:hg,title:"Camera",children:[Se.jsx(im,{label:"Angle",value:s.angle,options:mg,onChange:t=>e("angle",t)}),Se.jsx(pl,{label:"Depth",value:s.depth,onChange:t=>e("depth",t)})]}),Se.jsxs(zo,{icon:Q0,title:"Lighting",children:[Se.jsx(pl,{label:"Reflection",value:s.reflection,onChange:t=>e("reflection",t)}),Se.jsx(pl,{label:"Shadow",value:s.shadow,onChange:t=>e("shadow",t)}),Se.jsx(pl,{label:"Key Light",value:s.lighting,onChange:t=>e("lighting",t)}),Se.jsx(m_,{label:"Auto Spin",icon:u_,checked:s.autoSpin,onChange:t=>e("autoSpin",t)})]}),Se.jsx(zo,{icon:a_,title:"Background",children:Se.jsx(g_,{value:s.background,onChange:t=>e("background",t)})}),Se.jsx(zo,{icon:f_,title:"Render",children:Se.jsxs("div",{className:"render-stats",children:[Se.jsxs("span",{children:[Se.jsx(s_,{size:15}),"WebGL"]}),Se.jsxs("span",{children:[Se.jsx(n_,{size:15}),"PNG"]})]})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="171",__=0,rm=1,x_=2,vg=1,_g=2,ki=3,Mr=0,Bn=1,zi=2,xr=0,js=1,sm=2,om=3,am=4,y_=5,$r=100,S_=101,M_=102,E_=103,T_=104,w_=200,A_=201,C_=202,R_=203,pf=204,mf=205,P_=206,b_=207,L_=208,D_=209,N_=210,U_=211,I_=212,F_=213,O_=214,gf=0,vf=1,_f=2,$s=3,xf=4,yf=5,Sf=6,Mf=7,xg=0,k_=1,z_=2,yr=0,B_=1,V_=2,H_=3,yg=4,G_=5,W_=6,X_=7,Sg=300,Zs=301,Ks=302,Ef=303,Tf=304,Yl=306,wf=1e3,Bi=1001,Af=1002,hi=1003,j_=1004,ml=1005,zn=1006,Dc=1007,Kr=1008,Wi=1009,Mg=1010,Eg=1011,Ko=1012,ad=1013,Jr=1014,Vi=1015,ia=1016,ld=1017,ud=1018,Js=1020,Tg=35902,wg=1021,Ag=1022,di=1023,Cg=1024,Rg=1025,Ys=1026,Qs=1027,Pg=1028,cd=1029,bg=1030,fd=1031,dd=1033,zl=33776,Bl=33777,Vl=33778,Hl=33779,Cf=35840,Rf=35841,Pf=35842,bf=35843,Lf=36196,Df=37492,Nf=37496,Uf=37808,If=37809,Ff=37810,Of=37811,kf=37812,zf=37813,Bf=37814,Vf=37815,Hf=37816,Gf=37817,Wf=37818,Xf=37819,jf=37820,Yf=37821,Gl=36492,qf=36494,$f=36495,Lg=36283,Zf=36284,Kf=36285,Jf=36286,Y_=3200,q_=3201,Dg=0,$_=1,_r="",bn="srgb",eo="srgb-linear",Xl="linear",Nt="srgb",As=7680,lm=519,Z_=512,K_=513,J_=514,Ng=515,Q_=516,ex=517,tx=518,nx=519,um=35044,cm="300 es",Hi=2e3,jl=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fm=1234567;const Yo=Math.PI/180,Jo=180/Math.PI;function ts(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function hd(s,e){return(s%e+e)%e}function ix(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function rx(s,e,t){return s!==e?(t-s)/(e-s):0}function qo(s,e,t){return(1-t)*s+t*e}function sx(s,e,t,r){return qo(s,e,1-Math.exp(-t*r))}function ox(s,e=1){return e-Math.abs(hd(s,e*2)-e)}function ax(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ux(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cx(s,e){return s+Math.random()*(e-s)}function fx(s){return s*(.5-Math.random())}function dx(s){s!==void 0&&(fm=s);let e=fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hx(s){return s*Yo}function px(s){return s*Jo}function mx(s){return(s&s-1)===0&&s!==0}function gx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _x(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),g=c((e+r)/2),v=l((e-r)/2),x=c((e-r)/2),S=l((r-e)/2),M=c((r-e)/2);switch(o){case"XYX":s.set(f*g,h*v,h*x,f*p);break;case"YZY":s.set(h*x,f*g,h*v,f*p);break;case"ZXZ":s.set(h*v,h*x,f*g,f*p);break;case"XZX":s.set(f*g,h*M,h*S,f*p);break;case"YXY":s.set(h*S,f*g,h*M,f*p);break;case"ZYZ":s.set(h*M,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Vs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xx={DEG2RAD:Yo,RAD2DEG:Jo,generateUUID:ts,clamp:gt,euclideanModulo:hd,mapLinear:ix,inverseLerp:rx,lerp:qo,damp:sx,pingpong:ox,smoothstep:ax,smootherstep:lx,randInt:ux,randFloat:cx,randFloatSpread:fx,seededRandom:dx,degToRad:hx,radToDeg:px,isPowerOfTwo:mx,ceilPowerOfTwo:gx,floorPowerOfTwo:vx,setQuaternionFromProperEuler:_x,normalize:Rn,denormalize:Vs};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,r,o,l,c,f,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],M=r[8],A=o[0],y=o[3],_=o[6],O=o[1],L=o[4],R=o[7],k=o[2],D=o[5],U=o[8];return l[0]=c*A+f*O+h*k,l[3]=c*y+f*L+h*D,l[6]=c*_+f*R+h*U,l[1]=p*A+g*O+v*k,l[4]=p*y+g*L+v*D,l[7]=p*_+g*R+v*U,l[2]=x*A+S*O+M*k,l[5]=x*y+S*L+M*D,l[8]=x*_+S*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,x=f*h-g*l,S=p*l-c*h,M=t*v+r*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*p-g*r)*A,e[2]=(f*r-o*c)*A,e[3]=x*A,e[4]=(g*t-o*h)*A,e[5]=(o*l-f*t)*A,e[6]=S*A,e[7]=(r*h-p*t)*A,e[8]=(c*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new pt;function Ug(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yx(){const s=Qo("canvas");return s.style.display="block",s}const dm={};function Hs(s){s in dm||(dm[s]=!0,console.warn(s))}function Sx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Mx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ex(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tx(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(o.r=Gi(o.r),o.g=Gi(o.g),o.b=Gi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_r?Xl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[eo]:{primaries:e,whitePoint:r,transfer:Xl,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),s}const bt=Tx();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class wx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=Qo("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Gi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Gi(t[r]/255)*255):t[r]=Gi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ax=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Uc(o[c].image)):l.push(Uc(o[c]))}else l=Uc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Uc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;class dn extends no{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,r=Bi,o=Bi,l=zn,c=Kr,f=di,h=Wi,p=dn.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=ts(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wf:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wf:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Sg;dn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,r=0,o=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],g=h[4],v=h[8],x=h[1],S=h[5],M=h[9],A=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,R=(S+1)/2,k=(_+1)/2,D=(g+x)/4,U=(v+A)/4,B=(M+y)/4;return L>R&&L>k?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=D/r,l=U/r):R>k?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=D/o,l=B/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=U/l,o=B/l),this.set(r,o,l,t),this}let O=Math.sqrt((y-M)*(y-M)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-M)/O,this.y=(v-A)/O,this.z=(x-g)/O,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rx extends no{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new dn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ig(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends Rx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fg extends dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Px extends dn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const x=l[c+0],S=l[c+1],M=l[c+2],A=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=M,e[t+3]=A;return}if(v!==A||h!==x||p!==S||g!==M){let y=1-f;const _=h*x+p*S+g*M+v*A,O=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const k=Math.sqrt(L),D=Math.atan2(k,_*O);y=Math.sin(y*D)/k,f=Math.sin(f*D)/k}const R=f*O;if(h=h*y+x*R,p=p*y+S*R,g=g*y+M*R,v=v*y+A*R,y===1-f){const k=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=k,p*=k,g*=k,v*=k}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],g=r[o+3],v=l[c],x=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*v+h*S-p*x,e[t+1]=h*M+g*x+p*v-f*S,e[t+2]=p*M+g*S+f*x-h*v,e[t+3]=g*M-f*v-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(o/2),v=f(l/2),x=h(r/2),S=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"YXZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"ZXY":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"ZYX":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"YZX":this._x=x*g*v+p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v-x*S*M;break;case"XZY":this._x=x*g*v-p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+o*p-l*h,this._y=o*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-o*f,this._w=c*g-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=o*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),g=2*(f*t-l*o),v=2*(l*r-c*t);return this.x=t+h*p+c*v-f*g,this.y=r+h*g+f*p-l*v,this.z=o+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new j,mm=new ra;class sa{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,li):li.fromBufferAttribute(l,c),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gl.copy(r.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),vl.subVectors(this.max,Bo),Rs.subVectors(e.a,Bo),Ps.subVectors(e.b,Bo),bs.subVectors(e.c,Bo),dr.subVectors(Ps,Rs),hr.subVectors(bs,Ps),Br.subVectors(Rs,bs);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Br.y,Br.x,0];return!Fc(t,Rs,Ps,bs,vl)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,Rs,Ps,bs,vl))?!1:(_l.crossVectors(dr,hr),t=[_l.x,_l.y,_l.z],Fc(t,Rs,Ps,bs,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new j,new j,new j,new j,new j,new j,new j,new j],li=new j,gl=new sa,Rs=new j,Ps=new j,bs=new j,dr=new j,hr=new j,Br=new j,Bo=new j,vl=new j,_l=new j,Vr=new j;function Fc(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const f=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),h=e.dot(Vr),p=t.dot(Vr),g=r.dot(Vr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const bx=new sa,Vo=new j,Oc=new j;class pd{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Vo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Oc)),this.expandByPoint(Vo.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new j,kc=new j,xl=new j,pr=new j,zc=new j,yl=new j,Bc=new j;class Lx{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){kc.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(kc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(xl),f=pr.dot(this.direction),h=-pr.dot(xl),p=pr.lengthSq(),g=Math.abs(1-c*c);let v,x,S,M;if(g>0)if(v=c*h-f,x=c*f-h,M=l*g,v>=0)if(x>=-M)if(x<=M){const A=1/g;v*=A,x*=A,S=v*(v+c*x+2*f)+x*(c*v+x+2*h)+p}else x=l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x=-l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x<=-M?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p):x<=M?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(kc).addScaledVector(xl,x),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),o=Ui.dot(Ui)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,o,l){zc.subVectors(t,e),yl.subVectors(r,e),Bc.crossVectors(zc,yl);let c=this.direction.dot(Bc),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(yl.crossVectors(pr,yl));if(h<0)return null;const p=f*this.direction.dot(zc.cross(pr));if(p<0||h+p>c)return null;const g=-f*pr.dot(Bc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,r,o,l,c,f,h,p,g,v,x,S,M,A,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,g,v,x,S,M,A,y)}set(e,t,r,o,l,c,f,h,p,g,v,x,S,M,A,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=M,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),c=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*v,M=f*g,A=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+M*p,t[5]=x-A*p,t[9]=-f*h,t[2]=A-x*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,M=p*g,A=p*v;t[0]=x+A*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=A+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,M=p*g,A=p*v;t[0]=x-A*f,t[4]=-c*v,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=A-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*v,M=f*g,A=f*v;t[0]=h*g,t[4]=M*p-S,t[8]=x*p+A,t[1]=h*v,t[5]=A*p+x,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,M=f*h,A=f*p;t[0]=h*g,t[4]=A-x*v,t[8]=M*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*v+M,t[10]=x-A*v}else if(e.order==="XZY"){const x=c*h,S=c*p,M=f*h,A=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=x*v+A,t[5]=c*g,t[9]=S*v-M,t[2]=M*v-S,t[6]=f*g,t[10]=A*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dx,e,Nx)}lookAt(e,t,r){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),mr.crossVectors(r,Xn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),mr.crossVectors(r,Xn)),mr.normalize(),Sl.crossVectors(Xn,mr),o[0]=mr.x,o[4]=Sl.x,o[8]=Xn.x,o[1]=mr.y,o[5]=Sl.y,o[9]=Xn.y,o[2]=mr.z,o[6]=Sl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],M=r[2],A=r[6],y=r[10],_=r[14],O=r[3],L=r[7],R=r[11],k=r[15],D=o[0],U=o[4],B=o[8],P=o[12],w=o[1],z=o[5],ee=o[9],q=o[13],ne=o[2],ue=o[6],J=o[10],ce=o[14],H=o[3],fe=o[7],ae=o[11],F=o[15];return l[0]=c*D+f*w+h*ne+p*H,l[4]=c*U+f*z+h*ue+p*fe,l[8]=c*B+f*ee+h*J+p*ae,l[12]=c*P+f*q+h*ce+p*F,l[1]=g*D+v*w+x*ne+S*H,l[5]=g*U+v*z+x*ue+S*fe,l[9]=g*B+v*ee+x*J+S*ae,l[13]=g*P+v*q+x*ce+S*F,l[2]=M*D+A*w+y*ne+_*H,l[6]=M*U+A*z+y*ue+_*fe,l[10]=M*B+A*ee+y*J+_*ae,l[14]=M*P+A*q+y*ce+_*F,l[3]=O*D+L*w+R*ne+k*H,l[7]=O*U+L*z+R*ue+k*fe,l[11]=O*B+L*ee+R*J+k*ae,l[15]=O*P+L*q+R*ce+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],M=e[3],A=e[7],y=e[11],_=e[15];return M*(+l*h*v-o*p*v-l*f*x+r*p*x+o*f*S-r*h*S)+A*(+t*h*S-t*p*x+l*c*x-o*c*S+o*p*g-l*h*g)+y*(+t*p*v-t*f*S-l*c*v+r*c*S+l*f*g-r*p*g)+_*(-o*f*g-t*h*v+t*f*x+o*c*v-r*c*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],M=e[12],A=e[13],y=e[14],_=e[15],O=v*y*p-A*x*p+A*h*S-f*y*S-v*h*_+f*x*_,L=M*x*p-g*y*p-M*h*S+c*y*S+g*h*_-c*x*_,R=g*A*p-M*v*p+M*f*S-c*A*S-g*f*_+c*v*_,k=M*v*h-g*A*h-M*f*x+c*A*x+g*f*y-c*v*y,D=t*O+r*L+o*R+l*k;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return e[0]=O*U,e[1]=(A*x*l-v*y*l-A*o*S+r*y*S+v*o*_-r*x*_)*U,e[2]=(f*y*l-A*h*l+A*o*p-r*y*p-f*o*_+r*h*_)*U,e[3]=(v*h*l-f*x*l-v*o*p+r*x*p+f*o*S-r*h*S)*U,e[4]=L*U,e[5]=(g*y*l-M*x*l+M*o*S-t*y*S-g*o*_+t*x*_)*U,e[6]=(M*h*l-c*y*l-M*o*p+t*y*p+c*o*_-t*h*_)*U,e[7]=(c*x*l-g*h*l+g*o*p-t*x*p-c*o*S+t*h*S)*U,e[8]=R*U,e[9]=(M*v*l-g*A*l-M*r*S+t*A*S+g*r*_-t*v*_)*U,e[10]=(c*A*l-M*f*l+M*r*p-t*A*p-c*r*_+t*f*_)*U,e[11]=(g*f*l-c*v*l-g*r*p+t*v*p+c*r*S-t*f*S)*U,e[12]=k*U,e[13]=(g*A*o-M*v*o+M*r*x-t*A*x-g*r*y+t*v*y)*U,e[14]=(M*f*o-c*A*o-M*r*h+t*A*h+c*r*y-t*f*y)*U,e[15]=(c*v*o-g*f*o+g*r*h-t*v*h-c*r*x+t*f*x)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+r,g*h-o*c,0,p*h-o*f,g*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,x=l*p,S=l*g,M=l*v,A=c*g,y=c*v,_=f*v,O=h*p,L=h*g,R=h*v,k=r.x,D=r.y,U=r.z;return o[0]=(1-(A+_))*k,o[1]=(S+R)*k,o[2]=(M-L)*k,o[3]=0,o[4]=(S-R)*D,o[5]=(1-(x+_))*D,o[6]=(y+O)*D,o[7]=0,o[8]=(M+L)*U,o[9]=(y-O)*U,o[10]=(1-(x+A))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const c=Ls.set(o[4],o[5],o[6]).length(),f=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ui.copy(this);const p=1/l,g=1/c,v=1/f;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,t.setFromRotationMatrix(ui),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,o,l,c,f=Hi){const h=this.elements,p=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let S,M;if(f===Hi)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===jl)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Hi){const h=this.elements,p=1/(t-e),g=1/(r-o),v=1/(c-l),x=(t+e)*p,S=(r+o)*g;let M,A;if(f===Hi)M=(c+l)*v,A=-2*v;else if(f===jl)M=l*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=A,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new j,ui=new Vt,Dx=new j(0,0,0),Nx=new j(1,1,1),mr=new j,Sl=new j,Xn=new j,gm=new Vt,vm=new ra;class Ln{constructor(e=0,t=0,r=0,o=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],g=o[9],v=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ux=0;const _m=new j,Ds=new ra,Ii=new Vt,Ml=new j,Ho=new j,Ix=new j,Fx=new ra,xm=new j(1,0,0),ym=new j(0,1,0),Sm=new j(0,0,1),Mm={type:"added"},Ox={type:"removed"},Ns={type:"childadded",child:null},Vc={type:"childremoved",child:null};class hn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new j,t=new Ln,r=new ra,o=new j(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Vt},normalMatrix:{value:new pt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ml.copy(e):Ml.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ho,Ml,this.up):Ii.lookAt(Ml,Ho,this.up),this.quaternion.setFromRotationMatrix(Ii),o&&(Ii.extractRotation(o.matrixWorld),Ds.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ox),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}hn.DEFAULT_UP=new j(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new j,Fi=new j,Hc=new j,Oi=new j,Us=new j,Is=new j,Em=new j,Gc=new j,Wc=new j,Xc=new j,jc=new Ut,Yc=new Ut,qc=new Ut;class fi{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ci.subVectors(e,t),o.cross(ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ci.subVectors(o,t),Fi.subVectors(r,t),Hc.subVectors(e,t);const c=ci.dot(ci),f=ci.dot(Fi),h=ci.dot(Hc),p=Fi.dot(Fi),g=Fi.dot(Hc),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(p*h-f*g)*x,M=(c*g-f*h)*x;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return jc.setScalar(0),Yc.setScalar(0),qc.setScalar(0),jc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,r),qc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(jc,l.x),c.addScaledVector(Yc,l.y),c.addScaledVector(qc,l.z),c}static isFrontFacing(e,t,r,o){return ci.subVectors(r,t),Fi.subVectors(e,t),ci.cross(Fi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Us.subVectors(o,r),Is.subVectors(l,r),Gc.subVectors(e,r);const h=Us.dot(Gc),p=Is.dot(Gc);if(h<=0&&p<=0)return t.copy(r);Wc.subVectors(e,o);const g=Us.dot(Wc),v=Is.dot(Wc);if(g>=0&&v<=g)return t.copy(o);const x=h*v-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Us,c);Xc.subVectors(e,l);const S=Us.dot(Xc),M=Is.dot(Xc);if(M>=0&&S<=M)return t.copy(l);const A=S*p-h*M;if(A<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Is,f);const y=g*M-S*v;if(y<=0&&v-g>=0&&S-M>=0)return Em.subVectors(l,o),f=(v-g)/(v-g+(S-M)),t.copy(o).addScaledVector(Em,f);const _=1/(y+A+x);return c=A*_,f=x*_,t.copy(r).addScaledVector(Us,c).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},El={h:0,s:0,l:0};function $c(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=hd(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=$c(c,l,e+1/3),this.g=$c(c,l,e),this.b=$c(c,l,e-1/3)}return bt.toWorkingColorSpace(this,o),this}setStyle(e,t=bn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const r=kg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return bt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(gt(Sn.r*255,0,255))*65536+Math.round(gt(Sn.g*255,0,255))*256+Math.round(gt(Sn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case r:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-r)/v+2;break;case l:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=bn){bt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(El);const r=qo(gr.h,El.h,t),o=qo(gr.s,El.s,t),l=qo(gr.l,El.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Mt;Mt.NAMES=kg;let kx=0;class io extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=js,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pf&&(r.blendSrc=this.blendSrc),this.blendDst!==mf&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gs extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new j,Tl=new Le;class yi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=um,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Vs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array),l=Rn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class zg extends yi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Bg extends yi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mn extends yi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let zx=0;const ei=new Vt,Zc=new hn,Fs=new j,jn=new sa,Go=new sa,an=new j;class Si extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ug(e)?Bg:zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Go.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(jn.min,Go.min),jn.expandByPoint(an),an.addVectors(jn.max,Go.max),jn.expandByPoint(an)):(jn.expandByPoint(Go.min),jn.expandByPoint(Go.max))}jn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)an.fromBufferAttribute(f,p),h&&(Fs.fromBufferAttribute(e,p),an.add(Fs)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let B=0;B<r.count;B++)f[B]=new j,h[B]=new j;const p=new j,g=new j,v=new j,x=new Le,S=new Le,M=new Le,A=new j,y=new j;function _(B,P,w){p.fromBufferAttribute(r,B),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,w),x.fromBufferAttribute(l,B),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,w),g.sub(p),v.sub(p),S.sub(x),M.sub(x);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(z),f[B].add(A),f[P].add(A),f[w].add(A),h[B].add(y),h[P].add(y),h[w].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let B=0,P=O.length;B<P;++B){const w=O[B],z=w.start,ee=w.count;for(let q=z,ne=z+ee;q<ne;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const L=new j,R=new j,k=new j,D=new j;function U(B){k.fromBufferAttribute(o,B),D.copy(k);const P=f[B];L.copy(P),L.sub(k.multiplyScalar(k.dot(P))).normalize(),R.crossVectors(D,P);const z=R.dot(h[B])<0?-1:1;c.setXYZW(B,L.x,L.y,L.z,z)}for(let B=0,P=O.length;B<P;++B){const w=O[B],z=w.start,ee=w.count;for(let q=z,ne=z+ee;q<ne;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new j,l=new j,c=new j,f=new j,h=new j,p=new j,g=new j,v=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),f.add(g),h.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,x=new p.constructor(h.length*g);let S=0,M=0;for(let A=0,y=h.length;A<y;A++){f.isInterleavedBufferAttribute?S=h[A]*f.data.stride+f.offset:S=h[A]*g;for(let _=0;_<g;_++)x[M++]=p[S++]}return new yi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new Vt,Hr=new Lx,wl=new pd,wm=new j,Al=new j,Cl=new j,Rl=new j,Kc=new j,Pl=new j,Am=new j,bl=new j;class $t extends hn{constructor(e=new Si,t=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Pl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&(Kc.fromBufferAttribute(v,e),c?Pl.addScaledVector(Kc,g):Pl.addScaledVector(Kc.sub(t),g))}t.add(Pl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(wl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(wl,wm)===null||Hr.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,A=x.length;M<A;M++){const y=x[M],_=c[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=O,k=L;R<k;R+=3){const D=f.getX(R),U=f.getX(R+1),B=f.getX(R+2);o=Ll(this,_,e,r,p,g,v,D,U,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let y=M,_=A;y<_;y+=3){const O=f.getX(y),L=f.getX(y+1),R=f.getX(y+2);o=Ll(this,c,e,r,p,g,v,O,L,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,A=x.length;M<A;M++){const y=x[M],_=c[y.materialIndex],O=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=O,k=L;R<k;R+=3){const D=R,U=R+1,B=R+2;o=Ll(this,_,e,r,p,g,v,D,U,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let y=M,_=A;y<_;y+=3){const O=y,L=y+1,R=y+2;o=Ll(this,c,e,r,p,g,v,O,L,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Bx(s,e,t,r,o,l,c,f){let h;if(e.side===Bn?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Mr,f),h===null)return null;bl.copy(f),bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(bl);return p<t.near||p>t.far?null:{distance:p,point:bl.clone(),object:s}}function Ll(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,Al),s.getVertexPosition(h,Cl),s.getVertexPosition(p,Rl);const g=Bx(s,e,t,r,Al,Cl,Rl,Am);if(g){const v=new j;fi.getBarycoord(Am,Al,Cl,Rl,v),o&&(g.uv=fi.getInterpolatedAttribute(o,f,h,p,v,new Le)),l&&(g.uv1=fi.getInterpolatedAttribute(l,f,h,p,v,new Le)),c&&(g.normal=fi.getInterpolatedAttribute(c,f,h,p,v,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new j,materialIndex:0};fi.getNormal(Al,Cl,Rl,x.normal),g.face=x,g.barycoord=v}return g}class ro extends Si{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let x=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Mn(p,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(v,2));function M(A,y,_,O,L,R,k,D,U,B,P){const w=R/U,z=k/B,ee=R/2,q=k/2,ne=D/2,ue=U+1,J=B+1;let ce=0,H=0;const fe=new j;for(let ae=0;ae<J;ae++){const F=ae*z-q;for(let te=0;te<ue;te++){const Fe=te*w-ee;fe[A]=Fe*O,fe[y]=F*L,fe[_]=ne,p.push(fe.x,fe.y,fe.z),fe[A]=0,fe[y]=0,fe[_]=D>0?1:-1,g.push(fe.x,fe.y,fe.z),v.push(te/U),v.push(1-ae/B),ce+=1}}for(let ae=0;ae<B;ae++)for(let F=0;F<U;F++){const te=x+F+ue*ae,Fe=x+F+ue*(ae+1),Q=x+(F+1)+ue*(ae+1),oe=x+(F+1)+ue*ae;h.push(te,Fe,oe),h.push(Fe,Q,oe),H+=6}f.addGroup(S,H,P),S+=H,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Pn(s){const e={};for(let t=0;t<s.length;t++){const r=to(s[t]);for(const o in r)e[o]=r[o]}return e}function Vx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Hx={clone:to,merge:Pn};var Gx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gx,this.fragmentShader=Wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Hg extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new j,Cm=new Le,Rm=new Le;class Yn extends Hg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,Rm),t.subVectors(Rm,Cm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,ks=1;class Xx extends hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Os,ks,e,t);o.layers=this.layers,this.add(o);const l=new Yn(Os,ks,e,t);l.layers=this.layers,this.add(l);const c=new Yn(Os,ks,e,t);c.layers=this.layers,this.add(c);const f=new Yn(Os,ks,e,t);f.layers=this.layers,this.add(f);const h=new Yn(Os,ks,e,t);h.layers=this.layers,this.add(h);const p=new Yn(Os,ks,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Gg extends dn{constructor(e,t,r,o,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,o,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jx extends Qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Gg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ro(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:xr});l.uniforms.tEquirect.value=t;const c=new $t(o,l),f=t.minFilter;return t.minFilter===Kr&&(t.minFilter=zn),new Xx(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Yx extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Jc=new j,qx=new j,$x=new pt;class Yr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Jc.subVectors(r,t).cross(qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Jc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$x.getNormalMatrix(e),o=this.coplanarPoint(Jc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new pd,Dl=new j;class md{constructor(e=new Yr,t=new Yr,r=new Yr,o=new Yr,l=new Yr,c=new Yr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi){const r=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],g=o[5],v=o[6],x=o[7],S=o[8],M=o[9],A=o[10],y=o[11],_=o[12],O=o[13],L=o[14],R=o[15];if(r[0].setComponents(h-l,x-p,y-S,R-_).normalize(),r[1].setComponents(h+l,x+p,y+S,R+_).normalize(),r[2].setComponents(h+c,x+g,y+M,R+O).normalize(),r[3].setComponents(h-c,x-g,y-M,R-O).normalize(),r[4].setComponents(h-f,x-v,y-A,R-L).normalize(),t===Hi)r[5].setComponents(h+f,x+v,y+A,R+L).normalize();else if(t===jl)r[5].setComponents(f,v,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xo extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Zx extends dn{constructor(e,t,r,o,l,c,f,h,p){super(e,t,r,o,l,c,f,h,p),this.isVideoTexture=!0,this.minFilter=c!==void 0?c:zn,this.magFilter=l!==void 0?l:zn,this.generateMipmaps=!1;const g=this;function v(){g.needsUpdate=!0,e.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(v)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Kx extends dn{constructor(e,t,r,o,l,c,f,h,p){super(e,t,r,o,l,c,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wg extends dn{constructor(e,t,r,o,l,c,f,h,p,g=Ys){if(g!==Ys&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ys&&(r=Jr),r===void 0&&g===Qs&&(r=Js),super(null,o,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-c,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const g=r[o],x=r[o+1]-g,S=(c-g)/x;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Le:new j);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new j,o=[],l=[],c=[],f=new j,h=new Vt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new j)}l[0]=new j,c[0]=new j;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),x=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(gt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,M))}c[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],S*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gd extends Mi{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Le){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=h-this.aX,S=p-this.aY;h=x*g-S*v+this.aX,p=x*v+S*g+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jx extends gd{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function vd(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){o(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,g,v){let x=(c-l)/p-(f-l)/(p+g)+(f-c)/g,S=(f-c)/g-(h-c)/(g+v)+(h-f)/v;x*=g,S*=g,o(c,f,x,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Nl=new j,Qc=new vd,ef=new vd,tf=new vd;class Qx extends Mi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new j){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,g;this.closed||f>0?p=o[(f-1)%l]:(Nl.subVectors(o[0],o[1]).add(o[0]),p=Nl);const v=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(Nl.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),S),A=Math.pow(v.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(g),S);A<1e-4&&(A=1),M<1e-4&&(M=A),y<1e-4&&(y=A),Qc.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,M,A,y),ef.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,M,A,y),tf.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,M,A,y)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),ef.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),tf.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return r.set(Qc.calc(h),ef.calc(h),tf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new j().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pm(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function ey(s,e){const t=1-s;return t*t*e}function ty(s,e){return 2*(1-s)*s*e}function ny(s,e){return s*s*e}function $o(s,e,t,r){return ey(s,e)+ty(s,t)+ny(s,r)}function iy(s,e){const t=1-s;return t*t*t*e}function ry(s,e){const t=1-s;return 3*t*t*s*e}function sy(s,e){return 3*(1-s)*s*s*e}function oy(s,e){return s*s*s*e}function Zo(s,e,t,r,o){return iy(s,e)+ry(s,t)+sy(s,r)+oy(s,o)}class Xg extends Mi{constructor(e=new Le,t=new Le,r=new Le,o=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Le){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Zo(e,o.x,l.x,c.x,f.x),Zo(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ay extends Mi{constructor(e=new j,t=new j,r=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new j){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Zo(e,o.x,l.x,c.x,f.x),Zo(e,o.y,l.y,c.y,f.y),Zo(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jg extends Mi{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ly extends Mi{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends Mi{constructor(e=new Le,t=new Le,r=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Le){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set($o(e,o.x,l.x,c.x),$o(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uy extends Mi{constructor(e=new j,t=new j,r=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new j){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set($o(e,o.x,l.x,c.x),$o(e,o.y,l.y,c.y),$o(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,h=o[c===0?c:c-1],p=o[c],g=o[c>o.length-2?o.length-1:c+1],v=o[c>o.length-3?o.length-1:c+2];return r.set(Pm(f,h.x,p.x,g.x,v.x),Pm(f,h.y,p.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Le().fromArray(o))}return this}}var Qf=Object.freeze({__proto__:null,ArcCurve:Jx,CatmullRomCurve3:Qx,CubicBezierCurve:Xg,CubicBezierCurve3:ay,EllipseCurve:gd,LineCurve:jg,LineCurve3:ly,QuadraticBezierCurve:Yg,QuadraticBezierCurve3:uy,SplineCurve:qg});class cy extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qf[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const g=h[p];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Qf[o.type]().fromJSON(o))}return this}}class bm extends cy{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new jg(this.currentPoint.clone(),new Le(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Yg(this.currentPoint.clone(),new Le(e,t),new Le(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new Xg(this.currentPoint.clone(),new Le(e,t),new Le(r,o),new Le(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new qg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,h){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,t+g,r,o,l,c,f,h),this}absellipse(e,t,r,o,l,c,f,h){const p=new gd(e,t,r,o,l,c,f,h);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _d extends Si{constructor(e=1,t=1,r=1,o=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],x=[],S=[];let M=0;const A=[],y=r/2;let _=0;O(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Mn(v,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(S,2));function O(){const R=new j,k=new j;let D=0;const U=(t-e)/r;for(let B=0;B<=l;B++){const P=[],w=B/l,z=w*(t-e)+e;for(let ee=0;ee<=o;ee++){const q=ee/o,ne=q*h+f,ue=Math.sin(ne),J=Math.cos(ne);k.x=z*ue,k.y=-w*r+y,k.z=z*J,v.push(k.x,k.y,k.z),R.set(ue,U,J).normalize(),x.push(R.x,R.y,R.z),S.push(q,1-w),P.push(M++)}A.push(P)}for(let B=0;B<o;B++)for(let P=0;P<l;P++){const w=A[P][B],z=A[P+1][B],ee=A[P+1][B+1],q=A[P][B+1];(e>0||P!==0)&&(g.push(w,z,q),D+=3),(t>0||P!==l-1)&&(g.push(z,ee,q),D+=3)}p.addGroup(_,D,0),_+=D}function L(R){const k=M,D=new Le,U=new j;let B=0;const P=R===!0?e:t,w=R===!0?1:-1;for(let ee=1;ee<=o;ee++)v.push(0,y*w,0),x.push(0,w,0),S.push(.5,.5),M++;const z=M;for(let ee=0;ee<=o;ee++){const ne=ee/o*h+f,ue=Math.cos(ne),J=Math.sin(ne);U.x=P*J,U.y=y*w,U.z=P*ue,v.push(U.x,U.y,U.z),x.push(0,w,0),D.x=ue*.5+.5,D.y=J*.5*w+.5,S.push(D.x,D.y),M++}for(let ee=0;ee<o;ee++){const q=k+ee,ne=z+ee;R===!0?g.push(ne,ne+1,q):g.push(ne+1,ne,q),B+=3}p.addGroup(_,B,R===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _d(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends bm{constructor(e){super(e),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new bm().fromJSON(o))}return this}}const fy={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=$g(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p,g,v,x,S;if(r&&(l=gy(s,e,l,t)),s.length>80*t){f=p=s[0],h=g=s[1];for(let M=t;M<o;M+=t)v=s[M],x=s[M+1],v<f&&(f=v),x<h&&(h=x),v>p&&(p=v),x>g&&(g=x);S=Math.max(p-f,g-h),S=S!==0?32767/S:0}return ea(l,c,t,f,h,S,0),c}};function $g(s,e,t,r,o){let l,c;if(o===Cy(s,e,t,r)>0)for(l=e;l<t;l+=r)c=Lm(l,s[l],s[l+1],c);else for(l=t-r;l>=e;l-=r)c=Lm(l,s[l],s[l+1],c);return c&&ql(c,c.next)&&(na(c),c=c.next),c}function es(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(ql(t,t.next)||Wt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ea(s,e,t,r,o,l,c){if(!s)return;!c&&l&&Sy(s,r,o,l);let f=s,h,p;for(;s.prev!==s.next;){if(h=s.prev,p=s.next,l?hy(s,r,o,l):dy(s)){e.push(h.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),na(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=py(es(s),e,t),ea(s,e,t,r,o,l,2)):c===2&&my(s,e,t,r,o,l):ea(es(s),e,t,r,o,l,1);break}}}function dy(s){const e=s.prev,t=s,r=s.next;if(Wt(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,g=o<l?o<c?o:c:l<c?l:c,v=f<h?f<p?f:p:h<p?h:p,x=o>l?o>c?o:c:l>c?l:c,S=f>h?f>p?f:p:h>p?h:p;let M=r.next;for(;M!==e;){if(M.x>=g&&M.x<=x&&M.y>=v&&M.y<=S&&Ws(o,f,l,h,c,p,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function hy(s,e,t,r){const o=s.prev,l=s,c=s.next;if(Wt(o,l,c)>=0)return!1;const f=o.x,h=l.x,p=c.x,g=o.y,v=l.y,x=c.y,S=f<h?f<p?f:p:h<p?h:p,M=g<v?g<x?g:x:v<x?v:x,A=f>h?f>p?f:p:h>p?h:p,y=g>v?g>x?g:x:v>x?v:x,_=ed(S,M,e,t,r),O=ed(A,y,e,t,r);let L=s.prevZ,R=s.nextZ;for(;L&&L.z>=_&&R&&R.z<=O;){if(L.x>=S&&L.x<=A&&L.y>=M&&L.y<=y&&L!==o&&L!==c&&Ws(f,g,h,v,p,x,L.x,L.y)&&Wt(L.prev,L,L.next)>=0||(L=L.prevZ,R.x>=S&&R.x<=A&&R.y>=M&&R.y<=y&&R!==o&&R!==c&&Ws(f,g,h,v,p,x,R.x,R.y)&&Wt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;L&&L.z>=_;){if(L.x>=S&&L.x<=A&&L.y>=M&&L.y<=y&&L!==o&&L!==c&&Ws(f,g,h,v,p,x,L.x,L.y)&&Wt(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;R&&R.z<=O;){if(R.x>=S&&R.x<=A&&R.y>=M&&R.y<=y&&R!==o&&R!==c&&Ws(f,g,h,v,p,x,R.x,R.y)&&Wt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function py(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!ql(o,l)&&Zg(o,r,r.next,l)&&ta(o,l)&&ta(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),na(r),na(r.next),r=s=l),r=r.next}while(r!==s);return es(r)}function my(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&Ty(c,f)){let h=Kg(c,f);c=es(c,c.next),h=es(h,h.next),ea(c,e,t,r,o,l,0),ea(h,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function gy(s,e,t,r){const o=[];let l,c,f,h,p;for(l=0,c=e.length;l<c;l++)f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=$g(s,f,h,r,!1),p===p.next&&(p.steiner=!0),o.push(Ey(p));for(o.sort(vy),l=0;l<o.length;l++)t=_y(o[l],t);return t}function vy(s,e){return s.x-e.x}function _y(s,e){const t=xy(s,e);if(!t)return e;const r=Kg(t,s);return es(r,r.next),es(t,t.next)}function xy(s,e){let t=e,r=-1/0,o;const l=s.x,c=s.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const x=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=l&&x>r&&(r=x,o=t.x<t.next.x?t:t.next,x===l))return o}t=t.next}while(t!==e);if(!o)return null;const f=o,h=o.x,p=o.y;let g=1/0,v;t=o;do l>=t.x&&t.x>=h&&l!==t.x&&Ws(c<p?l:r,c,h,p,c<p?r:l,c,t.x,t.y)&&(v=Math.abs(c-t.y)/(l-t.x),ta(t,s)&&(v<g||v===g&&(t.x>o.x||t.x===o.x&&yy(o,t)))&&(o=t,g=v)),t=t.next;while(t!==f);return o}function yy(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function Sy(s,e,t,r){let o=s;do o.z===0&&(o.z=ed(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,My(o)}function My(s){let e,t,r,o,l,c,f,h,p=1;do{for(t=s,s=null,l=null,c=0;t;){for(c++,r=t,f=0,e=0;e<p&&(f++,r=r.nextZ,!!r);e++);for(h=p;f>0||h>0&&r;)f!==0&&(h===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,f--):(o=r,r=r.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(c>1);return s}function ed(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ey(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ws(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function Ty(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!wy(s,e)&&(ta(s,e)&&ta(e,s)&&Ay(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||ql(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ql(s,e){return s.x===e.x&&s.y===e.y}function Zg(s,e,t,r){const o=Il(Wt(s,e,t)),l=Il(Wt(s,e,r)),c=Il(Wt(t,r,s)),f=Il(Wt(t,r,e));return!!(o!==l&&c!==f||o===0&&Ul(s,t,e)||l===0&&Ul(s,r,e)||c===0&&Ul(t,s,r)||f===0&&Ul(t,e,r))}function Ul(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Il(s){return s>0?1:s<0?-1:0}function wy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ta(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function Ay(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Kg(s,e){const t=new td(s.i,s.x,s.y),r=new td(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Lm(s,e,t,r){const o=new td(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function na(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function td(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cy(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Sr{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Sr.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];Dm(e),Nm(r,e);let c=e.length;t.forEach(Dm);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,Nm(r,t[h]);const f=fy.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function Dm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class yd extends Si{constructor(e=new xd([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,h=e.length;f<h;f++){const p=e[f];c(p)}this.setAttribute("position",new Mn(o,3)),this.setAttribute("uv",new Mn(l,2)),this.computeVertexNormals();function c(f){const h=[],p=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let x=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,O=t.UVGenerator!==void 0?t.UVGenerator:Ry;let L,R=!1,k,D,U,B;_&&(L=_.getSpacedPoints(g),R=!0,x=!1,k=_.computeFrenetFrames(g,!1),D=new j,U=new j,B=new j),x||(y=0,S=0,M=0,A=0);const P=f.extractPoints(p);let w=P.shape;const z=P.holes;if(!Sr.isClockWise(w)){w=w.reverse();for(let ge=0,Ae=z.length;ge<Ae;ge++){const N=z[ge];Sr.isClockWise(N)&&(z[ge]=N.reverse())}}const q=Sr.triangulateShape(w,z),ne=w;for(let ge=0,Ae=z.length;ge<Ae;ge++){const N=z[ge];w=w.concat(N)}function ue(ge,Ae,N){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(Ae,N)}const J=w.length,ce=q.length;function H(ge,Ae,N){let Je,Ee,Ve;const Re=ge.x-Ae.x,nt=ge.y-Ae.y,Ue=N.x-ge.x,b=N.y-ge.y,T=Re*Re+nt*nt,Z=Re*b-nt*Ue;if(Math.abs(Z)>Number.EPSILON){const de=Math.sqrt(T),ve=Math.sqrt(Ue*Ue+b*b),he=Ae.x-nt/de,$e=Ae.y+Re/de,be=N.x-b/ve,He=N.y+Ue/ve,ht=((be-he)*b-(He-$e)*Ue)/(Re*b-nt*Ue);Je=he+Re*ht-ge.x,Ee=$e+nt*ht-ge.y;const Te=Je*Je+Ee*Ee;if(Te<=2)return new Le(Je,Ee);Ve=Math.sqrt(Te/2)}else{let de=!1;Re>Number.EPSILON?Ue>Number.EPSILON&&(de=!0):Re<-Number.EPSILON?Ue<-Number.EPSILON&&(de=!0):Math.sign(nt)===Math.sign(b)&&(de=!0),de?(Je=-nt,Ee=Re,Ve=Math.sqrt(T)):(Je=Re,Ee=nt,Ve=Math.sqrt(T/2))}return new Le(Je/Ve,Ee/Ve)}const fe=[];for(let ge=0,Ae=ne.length,N=Ae-1,Je=ge+1;ge<Ae;ge++,N++,Je++)N===Ae&&(N=0),Je===Ae&&(Je=0),fe[ge]=H(ne[ge],ne[N],ne[Je]);const ae=[];let F,te=fe.concat();for(let ge=0,Ae=z.length;ge<Ae;ge++){const N=z[ge];F=[];for(let Je=0,Ee=N.length,Ve=Ee-1,Re=Je+1;Je<Ee;Je++,Ve++,Re++)Ve===Ee&&(Ve=0),Re===Ee&&(Re=0),F[Je]=H(N[Je],N[Ve],N[Re]);ae.push(F),te=te.concat(F)}for(let ge=0;ge<y;ge++){const Ae=ge/y,N=S*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+A;for(let Ee=0,Ve=ne.length;Ee<Ve;Ee++){const Re=ue(ne[Ee],fe[Ee],Je);pe(Re.x,Re.y,-N)}for(let Ee=0,Ve=z.length;Ee<Ve;Ee++){const Re=z[Ee];F=ae[Ee];for(let nt=0,Ue=Re.length;nt<Ue;nt++){const b=ue(Re[nt],F[nt],Je);pe(b.x,b.y,-N)}}}const Fe=M+A;for(let ge=0;ge<J;ge++){const Ae=x?ue(w[ge],te[ge],Fe):w[ge];R?(U.copy(k.normals[0]).multiplyScalar(Ae.x),D.copy(k.binormals[0]).multiplyScalar(Ae.y),B.copy(L[0]).add(U).add(D),pe(B.x,B.y,B.z)):pe(Ae.x,Ae.y,0)}for(let ge=1;ge<=g;ge++)for(let Ae=0;Ae<J;Ae++){const N=x?ue(w[Ae],te[Ae],Fe):w[Ae];R?(U.copy(k.normals[ge]).multiplyScalar(N.x),D.copy(k.binormals[ge]).multiplyScalar(N.y),B.copy(L[ge]).add(U).add(D),pe(B.x,B.y,B.z)):pe(N.x,N.y,v/g*ge)}for(let ge=y-1;ge>=0;ge--){const Ae=ge/y,N=S*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+A;for(let Ee=0,Ve=ne.length;Ee<Ve;Ee++){const Re=ue(ne[Ee],fe[Ee],Je);pe(Re.x,Re.y,v+N)}for(let Ee=0,Ve=z.length;Ee<Ve;Ee++){const Re=z[Ee];F=ae[Ee];for(let nt=0,Ue=Re.length;nt<Ue;nt++){const b=ue(Re[nt],F[nt],Je);R?pe(b.x,b.y+L[g-1].y,L[g-1].x+N):pe(b.x,b.y,v+N)}}}Q(),oe();function Q(){const ge=o.length/3;if(x){let Ae=0,N=J*Ae;for(let Je=0;Je<ce;Je++){const Ee=q[Je];Pe(Ee[2]+N,Ee[1]+N,Ee[0]+N)}Ae=g+y*2,N=J*Ae;for(let Je=0;Je<ce;Je++){const Ee=q[Je];Pe(Ee[0]+N,Ee[1]+N,Ee[2]+N)}}else{for(let Ae=0;Ae<ce;Ae++){const N=q[Ae];Pe(N[2],N[1],N[0])}for(let Ae=0;Ae<ce;Ae++){const N=q[Ae];Pe(N[0]+J*g,N[1]+J*g,N[2]+J*g)}}r.addGroup(ge,o.length/3-ge,0)}function oe(){const ge=o.length/3;let Ae=0;ye(ne,Ae),Ae+=ne.length;for(let N=0,Je=z.length;N<Je;N++){const Ee=z[N];ye(Ee,Ae),Ae+=Ee.length}r.addGroup(ge,o.length/3-ge,1)}function ye(ge,Ae){let N=ge.length;for(;--N>=0;){const Je=N;let Ee=N-1;Ee<0&&(Ee=ge.length-1);for(let Ve=0,Re=g+y*2;Ve<Re;Ve++){const nt=J*Ve,Ue=J*(Ve+1),b=Ae+Je+nt,T=Ae+Ee+nt,Z=Ae+Ee+Ue,de=Ae+Je+Ue;Be(b,T,Z,de)}}}function pe(ge,Ae,N){h.push(ge),h.push(Ae),h.push(N)}function Pe(ge,Ae,N){Ke(ge),Ke(Ae),Ke(N);const Je=o.length/3,Ee=O.generateTopUV(r,o,Je-3,Je-2,Je-1);vt(Ee[0]),vt(Ee[1]),vt(Ee[2])}function Be(ge,Ae,N,Je){Ke(ge),Ke(Ae),Ke(Je),Ke(Ae),Ke(N),Ke(Je);const Ee=o.length/3,Ve=O.generateSideWallUV(r,o,Ee-6,Ee-3,Ee-2,Ee-1);vt(Ve[0]),vt(Ve[1]),vt(Ve[3]),vt(Ve[1]),vt(Ve[2]),vt(Ve[3])}function Ke(ge){o.push(h[ge*3+0]),o.push(h[ge*3+1]),o.push(h[ge*3+2])}function vt(ge){l.push(ge.x),l.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return Py(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Qf[o.type]().fromJSON(o)),new yd(r,e.options)}}const Ry={generateTopUV:function(s,e,t,r,o){const l=e[t*3],c=e[t*3+1],f=e[r*3],h=e[r*3+1],p=e[o*3],g=e[o*3+1];return[new Le(l,c),new Le(f,h),new Le(p,g)]},generateSideWallUV:function(s,e,t,r,o,l){const c=e[t*3],f=e[t*3+1],h=e[t*3+2],p=e[r*3],g=e[r*3+1],v=e[r*3+2],x=e[o*3],S=e[o*3+1],M=e[o*3+2],A=e[l*3],y=e[l*3+1],_=e[l*3+2];return Math.abs(f-g)<Math.abs(c-p)?[new Le(c,1-h),new Le(p,1-v),new Le(x,1-M),new Le(A,1-_)]:[new Le(f,1-h),new Le(g,1-v),new Le(S,1-M),new Le(y,1-_)]}};function Py(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class oa extends Si{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,g=h+1,v=e/f,x=t/h,S=[],M=[],A=[],y=[];for(let _=0;_<g;_++){const O=_*x-c;for(let L=0;L<p;L++){const R=L*v-l;M.push(R,-O,0),A.push(0,0,1),y.push(L/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let O=0;O<f;O++){const L=O+p*_,R=O+p*(_+1),k=O+1+p*(_+1),D=O+1+p*_;S.push(L,R,D),S.push(R,k,D)}this.setIndex(S),this.setAttribute("position",new Mn(M,3)),this.setAttribute("normal",new Mn(A,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sd extends Si{constructor(e=new xd([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],c=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let g=0;g<e.length;g++)p(e[g]),this.addGroup(f,h,g),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new Mn(o,3)),this.setAttribute("normal",new Mn(l,3)),this.setAttribute("uv",new Mn(c,2));function p(g){const v=o.length/3,x=g.extractPoints(t);let S=x.shape;const M=x.holes;Sr.isClockWise(S)===!1&&(S=S.reverse());for(let y=0,_=M.length;y<_;y++){const O=M[y];Sr.isClockWise(O)===!0&&(M[y]=O.reverse())}const A=Sr.triangulateShape(S,M);for(let y=0,_=M.length;y<_;y++){const O=M[y];S=S.concat(O)}for(let y=0,_=S.length;y<_;y++){const O=S[y];o.push(O.x,O.y,0),l.push(0,0,1),c.push(O.x,O.y)}for(let y=0,_=A.length;y<_;y++){const O=A[y],L=O[0]+v,R=O[1]+v,k=O[2]+v;r.push(L,R,k),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return by(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];r.push(c)}return new Sd(r,e.curveSegments)}}function by(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class Ly extends io{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Mt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Dy extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zs extends Dy{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ny extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uy extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Um={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Iy{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const S=p[v],M=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const Fy=new Iy;class Md{constructor(e){this.manager=e!==void 0?e:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Md.DEFAULT_MATERIAL_NAME="__DEFAULT";class Oy extends Md{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Um.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=Qo("img");function h(){g(),Um.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(v){g(),o&&o(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class ky extends Md{constructor(e){super(e)}load(e,t,r,o){const l=new dn,c=new Oy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Ed extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zy extends Ed{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const nf=new Vt,Im=new j,Fm=new j;class Jg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),t.position.copy(Im),Fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fm),t.updateMatrixWorld(),nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(nf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Om=new Vt,Wo=new j,rf=new j;class By extends Jg{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Wo),rf.copy(r.position),rf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(rf),r.updateMatrixWorld(),o.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Om.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Om)}}class Vy extends Ed{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new By}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qg extends Hg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hy extends Jg{constructor(){super(new Qg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends Ed{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Hy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gy extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function zm(s,e,t,r){const o=Wy(r);switch(t){case wg:return s*e;case Cg:return s*e;case Rg:return s*e*2;case Pg:return s*e/o.components*o.byteLength;case cd:return s*e/o.components*o.byteLength;case bg:return s*e*2/o.components*o.byteLength;case fd:return s*e*2/o.components*o.byteLength;case Ag:return s*e*3/o.components*o.byteLength;case di:return s*e*4/o.components*o.byteLength;case dd:return s*e*4/o.components*o.byteLength;case zl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:case bf:return Math.max(s,16)*Math.max(e,8)/4;case Cf:case Pf:return Math.max(s,8)*Math.max(e,8)/2;case Lf:case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case kf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gl:case qf:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lg:case Zf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kf:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wy(s){switch(s){case Wi:case Mg:return{byteLength:1,components:1};case Ko:case Eg:case ia:return{byteLength:2,components:1};case ld:case ud:return{byteLength:2,components:4};case Jr:case ad:case Vi:return{byteLength:4,components:1};case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ev(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Xy(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const g=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<v.length;S++){const M=v[x],A=v[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++x,v[x]=A)}v.length=x+1;for(let S=0,M=v.length;S<M;S++){const A=v[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MS="gl_FragColor = linearToOutputTexel( gl_FragColor );",ES=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,US=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:jy,alphahash_pars_fragment:Yy,alphamap_fragment:qy,alphamap_pars_fragment:$y,alphatest_fragment:Zy,alphatest_pars_fragment:Ky,aomap_fragment:Jy,aomap_pars_fragment:Qy,batching_pars_vertex:eS,batching_vertex:tS,begin_vertex:nS,beginnormal_vertex:iS,bsdfs:rS,iridescence_fragment:sS,bumpmap_pars_fragment:oS,clipping_planes_fragment:aS,clipping_planes_pars_fragment:lS,clipping_planes_pars_vertex:uS,clipping_planes_vertex:cS,color_fragment:fS,color_pars_fragment:dS,color_pars_vertex:hS,color_vertex:pS,common:mS,cube_uv_reflection_fragment:gS,defaultnormal_vertex:vS,displacementmap_pars_vertex:_S,displacementmap_vertex:xS,emissivemap_fragment:yS,emissivemap_pars_fragment:SS,colorspace_fragment:MS,colorspace_pars_fragment:ES,envmap_fragment:TS,envmap_common_pars_fragment:wS,envmap_pars_fragment:AS,envmap_pars_vertex:CS,envmap_physical_pars_fragment:kS,envmap_vertex:RS,fog_vertex:PS,fog_pars_vertex:bS,fog_fragment:LS,fog_pars_fragment:DS,gradientmap_pars_fragment:NS,lightmap_pars_fragment:US,lights_lambert_fragment:IS,lights_lambert_pars_fragment:FS,lights_pars_begin:OS,lights_toon_fragment:zS,lights_toon_pars_fragment:BS,lights_phong_fragment:VS,lights_phong_pars_fragment:HS,lights_physical_fragment:GS,lights_physical_pars_fragment:WS,lights_fragment_begin:XS,lights_fragment_maps:jS,lights_fragment_end:YS,logdepthbuf_fragment:qS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:KS,map_fragment:JS,map_pars_fragment:QS,map_particle_fragment:eM,map_particle_pars_fragment:tM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphinstance_vertex:rM,morphcolor_vertex:sM,morphnormal_vertex:oM,morphtarget_pars_vertex:aM,morphtarget_vertex:lM,normal_fragment_begin:uM,normal_fragment_maps:cM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:hM,normalmap_pars_fragment:pM,clearcoat_normal_fragment_begin:mM,clearcoat_normal_fragment_maps:gM,clearcoat_pars_fragment:vM,iridescence_pars_fragment:_M,opaque_fragment:xM,packing:yM,premultiplied_alpha_fragment:SM,project_vertex:MM,dithering_fragment:EM,dithering_pars_fragment:TM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:AM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:RM,shadowmap_vertex:PM,shadowmask_pars_fragment:bM,skinbase_vertex:LM,skinning_pars_vertex:DM,skinning_vertex:NM,skinnormal_vertex:UM,specularmap_fragment:IM,specularmap_pars_fragment:FM,tonemapping_fragment:OM,tonemapping_pars_fragment:kM,transmission_fragment:zM,transmission_pars_fragment:BM,uv_pars_fragment:VM,uv_pars_vertex:HM,uv_vertex:GM,worldpos_vertex:WM,background_vert:XM,background_frag:jM,backgroundCube_vert:YM,backgroundCube_frag:qM,cube_vert:$M,cube_frag:ZM,depth_vert:KM,depth_frag:JM,distanceRGBA_vert:QM,distanceRGBA_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:rE,meshbasic_vert:sE,meshbasic_frag:oE,meshlambert_vert:aE,meshlambert_frag:lE,meshmatcap_vert:uE,meshmatcap_frag:cE,meshnormal_vert:fE,meshnormal_frag:dE,meshphong_vert:hE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:vE,meshtoon_frag:_E,points_vert:xE,points_frag:yE,shadow_vert:SE,shadow_frag:ME,sprite_vert:EE,sprite_frag:TE},Ie={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},xi={basic:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Pn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Pn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Pn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Pn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Pn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Pn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Pn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Pn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Pn([Ie.common,Ie.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Pn([Ie.lights,Ie.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};xi.physical={uniforms:Pn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Fl={r:0,b:0,g:0},Wr=new Ln,wE=new Vt;function AE(s,e,t,r,o,l,c){const f=new Mt(0);let h=l===!0?0:1,p,g,v=null,x=0,S=null;function M(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function A(L){let R=!1;const k=M(L);k===null?_(f,h):k&&k.isColor&&(_(k,1),R=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,R){const k=M(R);k&&(k.isCubeTexture||k.mapping===Yl)?(g===void 0&&(g=new $t(new ro(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:to(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(D,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Wr.copy(R.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(wE.makeRotationFromEuler(Wr)),g.material.toneMapped=bt.getTransfer(k.colorSpace)!==Nt,(v!==k||x!==k.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=k,x=k.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new $t(new oa(2,2),new Er({name:"BackgroundMaterial",uniforms:to(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=bt.getTransfer(k.colorSpace)!==Nt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||x!==k.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=k,x=k.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,R){L.getRGB(Fl,Vg(s)),r.buffers.color.setClear(Fl.r,Fl.g,Fl.b,R,c)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,R=1){f.set(L),h=R,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(f,h)},render:A,addToRenderList:y,dispose:O}}function CE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,c=!1;function f(w,z,ee,q,ne){let ue=!1;const J=v(q,ee,z);l!==J&&(l=J,p(l.object)),ue=S(w,q,ee,ne),ue&&M(w,q,ee,ne),ne!==null&&e.update(ne,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,R(w,z,ee,q),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function h(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,z,ee){const q=ee.wireframe===!0;let ne=r[w.id];ne===void 0&&(ne={},r[w.id]=ne);let ue=ne[z.id];ue===void 0&&(ue={},ne[z.id]=ue);let J=ue[q];return J===void 0&&(J=x(h()),ue[q]=J),J}function x(w){const z=[],ee=[],q=[];for(let ne=0;ne<t;ne++)z[ne]=0,ee[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ee,attributeDivisors:q,object:w,attributes:{},index:null}}function S(w,z,ee,q){const ne=l.attributes,ue=z.attributes;let J=0;const ce=ee.getAttributes();for(const H in ce)if(ce[H].location>=0){const ae=ne[H];let F=ue[H];if(F===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(F=w.instanceColor)),ae===void 0||ae.attribute!==F||F&&ae.data!==F.data)return!0;J++}return l.attributesNum!==J||l.index!==q}function M(w,z,ee,q){const ne={},ue=z.attributes;let J=0;const ce=ee.getAttributes();for(const H in ce)if(ce[H].location>=0){let ae=ue[H];ae===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const F={};F.attribute=ae,ae&&ae.data&&(F.data=ae.data),ne[H]=F,J++}l.attributes=ne,l.attributesNum=J,l.index=q}function A(){const w=l.newAttributes;for(let z=0,ee=w.length;z<ee;z++)w[z]=0}function y(w){_(w,0)}function _(w,z){const ee=l.newAttributes,q=l.enabledAttributes,ne=l.attributeDivisors;ee[w]=1,q[w]===0&&(s.enableVertexAttribArray(w),q[w]=1),ne[w]!==z&&(s.vertexAttribDivisor(w,z),ne[w]=z)}function O(){const w=l.newAttributes,z=l.enabledAttributes;for(let ee=0,q=z.length;ee<q;ee++)z[ee]!==w[ee]&&(s.disableVertexAttribArray(ee),z[ee]=0)}function L(w,z,ee,q,ne,ue,J){J===!0?s.vertexAttribIPointer(w,z,ee,ne,ue):s.vertexAttribPointer(w,z,ee,q,ne,ue)}function R(w,z,ee,q){A();const ne=q.attributes,ue=ee.getAttributes(),J=z.defaultAttributeValues;for(const ce in ue){const H=ue[ce];if(H.location>=0){let fe=ne[ce];if(fe===void 0&&(ce==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),ce==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),fe!==void 0){const ae=fe.normalized,F=fe.itemSize,te=e.get(fe);if(te===void 0)continue;const Fe=te.buffer,Q=te.type,oe=te.bytesPerElement,ye=Q===s.INT||Q===s.UNSIGNED_INT||fe.gpuType===ad;if(fe.isInterleavedBufferAttribute){const pe=fe.data,Pe=pe.stride,Be=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)_(H.location+Ke,pe.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)y(H.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let Ke=0;Ke<H.locationSize;Ke++)L(H.location+Ke,F/H.locationSize,Q,ae,Pe*oe,(Be+F/H.locationSize*Ke)*oe,ye)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)_(H.location+pe,fe.meshPerAttribute);w.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<H.locationSize;pe++)y(H.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Fe);for(let pe=0;pe<H.locationSize;pe++)L(H.location+pe,F/H.locationSize,Q,ae,F*oe,F/H.locationSize*pe*oe,ye)}}else if(J!==void 0){const ae=J[ce];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(H.location,ae);break;case 3:s.vertexAttrib3fv(H.location,ae);break;case 4:s.vertexAttrib4fv(H.location,ae);break;default:s.vertexAttrib1fv(H.location,ae)}}}}O()}function k(){B();for(const w in r){const z=r[w];for(const ee in z){const q=z[ee];for(const ne in q)g(q[ne].object),delete q[ne];delete z[ee]}delete r[w]}}function D(w){if(r[w.id]===void 0)return;const z=r[w.id];for(const ee in z){const q=z[ee];for(const ne in q)g(q[ne].object),delete q[ne];delete z[ee]}delete r[w.id]}function U(w){for(const z in r){const ee=r[z];if(ee[w.id]===void 0)continue;const q=ee[w.id];for(const ne in q)g(q[ne].object),delete q[ne];delete ee[w.id]}}function B(){P(),c=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:B,resetDefaultState:P,dispose:k,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:y,disableUnusedAttributes:O}}function RE(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),t.update(g,r,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];t.update(S,r,1)}function h(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let M=0;for(let A=0;A<v;A++)M+=g[A]*x[A];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function PE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==di&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const B=U===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Wi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Vi&&!B)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:k,maxSamples:D}}function bE(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new Yr,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||o;return o=x,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const M=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||M===null||M.length===0||l&&!y)l?g(null):p();else{const O=l?0:r,L=O*4;let R=_.clippingState||null;h.value=R,R=g(M,x,L,S);for(let k=0;k!==L;++k)R[k]=t[k];_.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,M){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=h.value,M!==!0||y===null){const _=S+A*4,O=x.matrixWorldInverse;f.getNormalMatrix(O),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,R=S;L!==A;++L,R+=4)c.copy(v[L]).applyMatrix4(O,f),c.normal.toArray(y,R),y[R+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function LE(s){let e=new WeakMap;function t(c,f){return f===Ef?c.mapping=Zs:f===Tf&&(c.mapping=Ks),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Ef||f===Tf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new jx(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Xs=4,Bm=[.125,.215,.35,.446,.526,.582],Zr=20,sf=new Qg,Vm=new Mt;let of=null,af=0,lf=0,uf=!1;const qr=(1+Math.sqrt(5))/2,Bs=1/qr,Hm=[new j(-qr,Bs,0),new j(qr,Bs,0),new j(-Bs,0,qr),new j(Bs,0,qr),new j(0,qr,-Bs),new j(0,qr,Bs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(of,af,lf),this._renderer.xr.enabled=uf,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ia,format:di,colorSpace:eo,depthBuffer:!1},o=Wm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DE(l)),this._blurMaterial=NE(l,e,t)}return o}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,sf)}_sceneToCubeUV(e,t,r,o){const f=new Yn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Vm),g.toneMapping=yr,g.autoClear=!1;const S=new Gs({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new $t(new ro,S);let A=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,A=!0):(S.color.copy(Vm),A=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(f.up.set(0,h[_],0),f.lookAt(p[_],0,0)):O===1?(f.up.set(0,0,h[_]),f.lookAt(0,p[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,p[_]));const L=this._cubeSize;Ol(o,O*L,_>2?L:0,L,L),g.setRenderTarget(o),A&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zs||e.mapping===Ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new $t(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ol(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,sf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Hm[(o-l-1)%Hm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new $t(this._lodPlanes[o],p),x=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),A=l/M,y=isFinite(l)?1+Math.floor(g*A):Zr;y>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const _=[];let O=0;for(let U=0;U<Zr;++U){const B=U/A,P=Math.exp(-B*B/2);_.push(P),U===0?O+=P:U<y&&(O+=2*P)}for(let U=0;U<_.length;U++)_[U]=_[U]/O;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-r;const R=this._sizeLods[o],k=3*R*(o>L-Xs?o-L+Xs:0),D=4*(this._cubeSize-R);Ol(t,k,D,3*R,2*R),h.setRenderTarget(t),h.render(v,sf)}}function DE(s){const e=[],t=[],r=[];let o=s;const l=s-Xs+1+Bm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>s-Xs?h=Bm[c-s+Xs-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,A=3,y=2,_=1,O=new Float32Array(A*M*S),L=new Float32Array(y*M*S),R=new Float32Array(_*M*S);for(let D=0;D<S;D++){const U=D%3*2/3-1,B=D>2?0:-1,P=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];O.set(P,A*M*D),L.set(x,y*M*D);const w=[D,D,D,D,D,D];R.set(w,_*M*D)}const k=new Si;k.setAttribute("position",new yi(O,A)),k.setAttribute("uv",new yi(L,y)),k.setAttribute("faceIndex",new yi(R,_)),e.push(k),o>Xs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Wm(s,e,t){const r=new Qr(s,e,t);return r.texture.mapping=Yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ol(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function NE(s,e,t){const r=new Float32Array(Zr),o=new j(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Xm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function jm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UE(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Ef||h===Tf,g=h===Zs||h===Ks;if(p||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Gm(s)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new Gm(s)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function IE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Hs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function FE(s,e,t,r){const o={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,M=v.attributes.position;let A=0;if(S!==null){const O=S.array;A=S.version;for(let L=0,R=O.length;L<R;L+=3){const k=O[L+0],D=O[L+1],U=O[L+2];x.push(k,D,D,U,U,k)}}else if(M!==void 0){const O=M.array;A=M.version;for(let L=0,R=O.length/3-1;L<R;L+=3){const k=L+0,D=L+1,U=L+2;x.push(k,D,D,U,U,k)}}else return;const y=new(Ug(x)?Bg:zg)(x,1);y.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function OE(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function p(x,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,x*c,M),t.update(S,r,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];t.update(y,r,1)}function v(x,S,M,A){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/c,S[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,A,0,M);let _=0;for(let O=0;O<M;O++)_+=S[O]*A[O];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function kE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function zE(s,e,t){const r=new WeakMap,o=new Ut;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let w=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],O=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let k=f.attributes.position.count*R,D=1;k>e.maxTextureSize&&(D=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const U=new Float32Array(k*D*4*v),B=new Fg(U,k,D,v);B.type=Vi,B.needsUpdate=!0;const P=R*4;for(let z=0;z<v;z++){const ee=_[z],q=O[z],ne=L[z],ue=k*D*4*z;for(let J=0;J<ee.count;J++){const ce=J*P;M===!0&&(o.fromBufferAttribute(ee,J),U[ue+ce+0]=o.x,U[ue+ce+1]=o.y,U[ue+ce+2]=o.z,U[ue+ce+3]=0),A===!0&&(o.fromBufferAttribute(q,J),U[ue+ce+4]=o.x,U[ue+ce+5]=o.y,U[ue+ce+6]=o.z,U[ue+ce+7]=0),y===!0&&(o.fromBufferAttribute(ne,J),U[ue+ce+8]=o.x,U[ue+ce+9]=o.y,U[ue+ce+10]=o.z,U[ue+ce+11]=ne.itemSize===4?o.w:1)}}x={count:v,texture:B,size:new Le(k,D)},r.set(f,x),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const A=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function BE(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return v}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const tv=new dn,Ym=new Wg(1,1),nv=new Fg,iv=new Px,rv=new Gg,qm=[],$m=[],Zm=new Float32Array(16),Km=new Float32Array(9),Jm=new Float32Array(4);function so(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=qm[o];if(l===void 0&&(l=new Float32Array(o),qm[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function $l(s,e){let t=$m[e];t===void 0&&(t=new Int32Array(e),$m[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function VE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function HE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function GE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function WE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function XE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Jm.set(r),s.uniformMatrix2fv(this.addr,!1,Jm),nn(t,r)}}function jE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Km.set(r),s.uniformMatrix3fv(this.addr,!1,Km),nn(t,r)}}function YE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Zm.set(r),s.uniformMatrix4fv(this.addr,!1,Zm),nn(t,r)}}function qE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function ZE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function KE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function JE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function n1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Ym.compareFunction=Ng,l=Ym):l=tv,t.setTexture2D(e||l,o)}function i1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||iv,o)}function r1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||rv,o)}function s1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||nv,o)}function o1(s){switch(s){case 5126:return VE;case 35664:return HE;case 35665:return GE;case 35666:return WE;case 35674:return XE;case 35675:return jE;case 35676:return YE;case 5124:case 35670:return qE;case 35667:case 35671:return $E;case 35668:case 35672:return ZE;case 35669:case 35673:return KE;case 5125:return JE;case 36294:return QE;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return s1}}function a1(s,e){s.uniform1fv(this.addr,e)}function l1(s,e){const t=so(e,this.size,2);s.uniform2fv(this.addr,t)}function u1(s,e){const t=so(e,this.size,3);s.uniform3fv(this.addr,t)}function c1(s,e){const t=so(e,this.size,4);s.uniform4fv(this.addr,t)}function f1(s,e){const t=so(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function d1(s,e){const t=so(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function h1(s,e){const t=so(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function p1(s,e){s.uniform1iv(this.addr,e)}function m1(s,e){s.uniform2iv(this.addr,e)}function g1(s,e){s.uniform3iv(this.addr,e)}function v1(s,e){s.uniform4iv(this.addr,e)}function _1(s,e){s.uniform1uiv(this.addr,e)}function x1(s,e){s.uniform2uiv(this.addr,e)}function y1(s,e){s.uniform3uiv(this.addr,e)}function S1(s,e){s.uniform4uiv(this.addr,e)}function M1(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||tv,l[c])}function E1(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||iv,l[c])}function T1(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||rv,l[c])}function w1(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||nv,l[c])}function A1(s){switch(s){case 5126:return a1;case 35664:return l1;case 35665:return u1;case 35666:return c1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return v1;case 5125:return _1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return w1}}class C1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=o1(t.type)}}class R1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A1(t.type)}}class P1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const cf=/(\w+)(\])?(\[|\.)?/g;function Qm(s,e){s.seq.push(e),s.map[e.id]=e}function b1(s,e,t){const r=s.name,o=r.length;for(cf.lastIndex=0;;){const l=cf.exec(r),c=cf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){Qm(t,p===void 0?new C1(f,s,e):new R1(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new P1(f),Qm(t,v)),t=v}}}class Wl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);b1(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function eg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const L1=37297;let D1=0;function N1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const tg=new pt;function U1(s){bt._getMatrix(tg,bt.workingColorSpace,s);const e=`mat3( ${tg.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case Xl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ng(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+N1(s.getShaderSource(e),c)}else return o}function I1(s,e){const t=U1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function F1(s,e){let t;switch(e){case B_:t="Linear";break;case V_:t="Reinhard";break;case H_:t="Cineon";break;case yg:t="ACESFilmic";break;case W_:t="AgX";break;case X_:t="Neutral";break;case G_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new j;function O1(){bt.getLuminanceCoefficients(kl);const s=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function z1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function B1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function jo(s){return s!==""}function ig(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(s){return s.replace(V1,G1)}const H1=new Map;function G1(s,e){let t=mt[e];if(t===void 0){const r=H1.get(e);if(r!==void 0)t=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return nd(t)}const W1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(s){return s.replace(W1,X1)}function X1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function og(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Y1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Ks:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xg:e="ENVMAP_BLENDING_MULTIPLY";break;case k_:e="ENVMAP_BLENDING_MIX";break;case z_:e="ENVMAP_BLENDING_ADD";break}return e}function Z1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function K1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=j1(t),p=Y1(t),g=q1(t),v=$1(t),x=Z1(t),S=k1(t),M=z1(l),A=o.createProgram();let y,_,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(y=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?mt.tonemapping_pars_fragment:"",t.toneMapping!==yr?F1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),O1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),c=nd(c),c=ig(c,t),c=rg(c,t),f=nd(f),f=ig(f,t),f=rg(f,t),c=sg(c),f=sg(f),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=O+y+c,R=O+_+f,k=eg(o,o.VERTEX_SHADER,L),D=eg(o,o.FRAGMENT_SHADER,R);o.attachShader(A,k),o.attachShader(A,D),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function U(z){if(s.debug.checkShaderErrors){const ee=o.getProgramInfoLog(A).trim(),q=o.getShaderInfoLog(k).trim(),ne=o.getShaderInfoLog(D).trim();let ue=!0,J=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,k,D);else{const ce=ng(o,k,"vertex"),H=ng(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ee+`
`+ce+`
`+H)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||ne==="")&&(J=!1);J&&(z.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:q,prefix:y},fragmentShader:{log:ne,prefix:_}})}o.deleteShader(k),o.deleteShader(D),B=new Wl(o,A),P=B1(o,A)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(A,L1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=k,this.fragmentShader=D,this}let J1=0;class Q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new eT(e),t.set(e,r)),r}}class eT{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function tT(s,e,t,r,o,l,c){const f=new Og,h=new Q1,p=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,w,z,ee,q){const ne=ee.fog,ue=q.geometry,J=P.isMeshStandardMaterial?ee.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||J),H=ce&&ce.mapping===Yl?ce.image.height:null,fe=M[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ae=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,F=ae!==void 0?ae.length:0;let te=0;ue.morphAttributes.position!==void 0&&(te=1),ue.morphAttributes.normal!==void 0&&(te=2),ue.morphAttributes.color!==void 0&&(te=3);let Fe,Q,oe,ye;if(fe){const wt=xi[fe];Fe=wt.vertexShader,Q=wt.fragmentShader}else Fe=P.vertexShader,Q=P.fragmentShader,h.update(P),oe=h.getVertexShaderID(P),ye=h.getFragmentShaderID(P);const pe=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Be=q.isInstancedMesh===!0,Ke=q.isBatchedMesh===!0,vt=!!P.map,ge=!!P.matcap,Ae=!!ce,N=!!P.aoMap,Je=!!P.lightMap,Ee=!!P.bumpMap,Ve=!!P.normalMap,Re=!!P.displacementMap,nt=!!P.emissiveMap,Ue=!!P.metalnessMap,b=!!P.roughnessMap,T=P.anisotropy>0,Z=P.clearcoat>0,de=P.dispersion>0,ve=P.iridescence>0,he=P.sheen>0,$e=P.transmission>0,be=T&&!!P.anisotropyMap,He=Z&&!!P.clearcoatMap,ht=Z&&!!P.clearcoatNormalMap,Te=Z&&!!P.clearcoatRoughnessMap,je=ve&&!!P.iridescenceMap,it=ve&&!!P.iridescenceThicknessMap,ot=he&&!!P.sheenColorMap,Ye=he&&!!P.sheenRoughnessMap,_t=!!P.specularMap,ct=!!P.specularColorMap,Lt=!!P.specularIntensityMap,X=$e&&!!P.transmissionMap,De=$e&&!!P.thicknessMap,le=!!P.gradientMap,me=!!P.alphaMap,ke=P.alphaTest>0,Oe=!!P.alphaHash,ft=!!P.extensions;let Ft=yr;P.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Jt={shaderID:fe,shaderType:P.type,shaderName:P.name,vertexShader:Fe,fragmentShader:Q,defines:P.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&q._colorsTexture!==null,instancing:Be,instancingColor:Be&&q.instanceColor!==null,instancingMorph:Be&&q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:eo,alphaToCoverage:!!P.alphaToCoverage,map:vt,matcap:ge,envMap:Ae,envMapMode:Ae&&ce.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:Je,bumpMap:Ee,normalMap:Ve,displacementMap:x&&Re,emissiveMap:nt,normalMapObjectSpace:Ve&&P.normalMapType===$_,normalMapTangentSpace:Ve&&P.normalMapType===Dg,metalnessMap:Ue,roughnessMap:b,anisotropy:T,anisotropyMap:be,clearcoat:Z,clearcoatMap:He,clearcoatNormalMap:ht,clearcoatRoughnessMap:Te,dispersion:de,iridescence:ve,iridescenceMap:je,iridescenceThicknessMap:it,sheen:he,sheenColorMap:ot,sheenRoughnessMap:Ye,specularMap:_t,specularColorMap:ct,specularIntensityMap:Lt,transmission:$e,transmissionMap:X,thicknessMap:De,gradientMap:le,opaque:P.transparent===!1&&P.blending===js&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:ke,alphaHash:Oe,combine:P.combine,mapUv:vt&&A(P.map.channel),aoMapUv:N&&A(P.aoMap.channel),lightMapUv:Je&&A(P.lightMap.channel),bumpMapUv:Ee&&A(P.bumpMap.channel),normalMapUv:Ve&&A(P.normalMap.channel),displacementMapUv:Re&&A(P.displacementMap.channel),emissiveMapUv:nt&&A(P.emissiveMap.channel),metalnessMapUv:Ue&&A(P.metalnessMap.channel),roughnessMapUv:b&&A(P.roughnessMap.channel),anisotropyMapUv:be&&A(P.anisotropyMap.channel),clearcoatMapUv:He&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:ht&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:it&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&A(P.sheenRoughnessMap.channel),specularMapUv:_t&&A(P.specularMap.channel),specularColorMapUv:ct&&A(P.specularColorMap.channel),specularIntensityMapUv:Lt&&A(P.specularIntensityMap.channel),transmissionMapUv:X&&A(P.transmissionMap.channel),thicknessMapUv:De&&A(P.thicknessMap.channel),alphaMapUv:me&&A(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Ve||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ue.attributes.uv&&(vt||me),fog:!!ne,useFog:P.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Pe,skinning:q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:vt&&P.map.isVideoTexture===!0&&bt.getTransfer(P.map.colorSpace)===Nt,decodeVideoTextureEmissive:nt&&P.emissiveMap.isVideoTexture===!0&&bt.getTransfer(P.emissiveMap.colorSpace)===Nt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===zi,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ft&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&P.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Jt.vertexUv1s=p.has(1),Jt.vertexUv2s=p.has(2),Jt.vertexUv3s=p.has(3),p.clear(),Jt}function _(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)w.push(z),w.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(O(w,P),L(w,P),w.push(s.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function O(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function L(P,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),P.push(f.mask)}function R(P){const w=M[P.type];let z;if(w){const ee=xi[w];z=Hx.clone(ee.uniforms)}else z=P.uniforms;return z}function k(P,w){let z;for(let ee=0,q=g.length;ee<q;ee++){const ne=g[ee];if(ne.cacheKey===w){z=ne,++z.usedTimes;break}}return z===void 0&&(z=new K1(s,w,P,l),g.push(z)),z}function D(P){if(--P.usedTimes===0){const w=g.indexOf(P);g[w]=g[g.length-1],g.pop(),P.destroy()}}function U(P){h.remove(P)}function B(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:k,releaseProgram:D,releaseShaderCache:U,programs:g,dispose:B}}function nT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function iT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(v,x,S,M,A,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:M,renderOrder:v.renderOrder,z:A,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=A,_.group=y),e++,_}function f(v,x,S,M,A,y){const _=c(v,x,S,M,A,y);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):t.push(_)}function h(v,x,S,M,A,y){const _=c(v,x,S,M,A,y);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||iT),r.length>1&&r.sort(x||ag),o.length>1&&o.sort(x||ag)}function g(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function rT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new lg,s.set(r,[c])):o>=l.length?(c=new lg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function sT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Mt};break;case"SpotLight":t={position:new j,direction:new j,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function oT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let aT=0;function lT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uT(s){const e=new sT,t=oT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const o=new j,l=new Vt,c=new Vt;function f(p){let g=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,M=0,A=0,y=0,_=0,O=0,L=0,R=0,k=0,D=0,U=0;p.sort(lT);for(let P=0,w=p.length;P<w;P++){const z=p[P],ee=z.color,q=z.intensity,ne=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=ee.r*q,v+=ee.g*q,x+=ee.b*q;else if(z.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(z.sh.coefficients[J],q);U++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,H=t.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=z.shadow.matrix,O++}r.directional[S]=J,S++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy(ee).multiplyScalar(q),J.distance=ne,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,r.spot[A]=J;const ce=z.shadow;if(z.map&&(r.spotLightMap[k]=z.map,k++,ce.updateMatrices(z),z.castShadow&&D++),r.spotLightMatrix[A]=ce.matrix,z.castShadow){const H=t.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=ue,R++}A++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy(ee).multiplyScalar(q),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=J,y++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const ce=z.shadow,H=t.get(z);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,r.pointShadow[M]=H,r.pointShadowMap[M]=ue,r.pointShadowMatrix[M]=z.shadow.matrix,L++}r.point[M]=J,M++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(q),J.groundColor.copy(z.groundColor).multiplyScalar(q),r.hemi[_]=J,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==S||B.pointLength!==M||B.spotLength!==A||B.rectAreaLength!==y||B.hemiLength!==_||B.numDirectionalShadows!==O||B.numPointShadows!==L||B.numSpotShadows!==R||B.numSpotMaps!==k||B.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+k-D,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=U,B.directionalLength=S,B.pointLength=M,B.spotLength=A,B.rectAreaLength=y,B.hemiLength=_,B.numDirectionalShadows=O,B.numPointShadows=L,B.numSpotShadows=R,B.numSpotMaps=k,B.numLightProbes=U,r.version=aT++)}function h(p,g){let v=0,x=0,S=0,M=0,A=0;const y=g.matrixWorldInverse;for(let _=0,O=p.length;_<O;_++){const L=p[_];if(L.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:f,setupView:h,state:r}}function ug(s){const e=new uT(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function cT(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new ug(s),e.set(o,[f])):l>=c.length?(f=new ug(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hT(s,e,t){let r=new md;const o=new Le,l=new Le,c=new Ut,f=new Ny({depthPacking:q_}),h=new Uy,p={},g=t.maxTextureSize,v={[Mr]:Bn,[Bn]:Mr,[zi]:zi},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:fT,fragmentShader:dT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new Si;M.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new $t(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let _=this.type;this.render=function(D,U,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const P=s.getRenderTarget(),w=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(xr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=_!==ki&&this.type===ki,ne=_===ki&&this.type!==ki;for(let ue=0,J=D.length;ue<J;ue++){const ce=D[ue],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const fe=H.getFrameExtents();if(o.multiply(fe),l.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/fe.x),o.x=l.x*fe.x,H.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/fe.y),o.y=l.y*fe.y,H.mapSize.y=l.y)),H.map===null||q===!0||ne===!0){const F=this.type!==ki?{minFilter:hi,magFilter:hi}:{};H.map!==null&&H.map.dispose(),H.map=new Qr(o.x,o.y,F),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ae=H.getViewportCount();for(let F=0;F<ae;F++){const te=H.getViewport(F);c.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),ee.viewport(c),H.updateMatrices(ce,F),r=H.getFrustum(),R(U,B,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&O(H,B),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(P,w,z)};function O(D,U){const B=e.update(A);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Qr(o.x,o.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(U,null,B,x,A,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(U,null,B,S,A,null)}function L(D,U,B,P){let w=null;const z=B.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)w=z;else if(w=B.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ee=w.uuid,q=U.uuid;let ne=p[ee];ne===void 0&&(ne={},p[ee]=ne);let ue=ne[q];ue===void 0&&(ue=w.clone(),ne[q]=ue,U.addEventListener("dispose",k)),w=ue}if(w.visible=U.visible,w.wireframe=U.wireframe,P===ki?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:v[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ee=s.properties.get(w);ee.light=B}return w}function R(D,U,B,P,w){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===ki)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,D.matrixWorld);const q=e.update(D),ne=D.material;if(Array.isArray(ne)){const ue=q.groups;for(let J=0,ce=ue.length;J<ce;J++){const H=ue[J],fe=ne[H.materialIndex];if(fe&&fe.visible){const ae=L(D,fe,P,w);D.onBeforeShadow(s,D,U,B,q,ae,H),s.renderBufferDirect(B,null,q,ae,D,H),D.onAfterShadow(s,D,U,B,q,ae,H)}}}else if(ne.visible){const ue=L(D,ne,P,w);D.onBeforeShadow(s,D,U,B,q,ue,null),s.renderBufferDirect(B,null,q,ue,D,null),D.onAfterShadow(s,D,U,B,q,ue,null)}}const ee=D.children;for(let q=0,ne=ee.length;q<ne;q++)R(ee[q],U,B,P,w)}function k(D){D.target.removeEventListener("dispose",k);for(const B in p){const P=p[B],w=D.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const pT={[gf]:vf,[_f]:Sf,[xf]:Mf,[$s]:yf,[vf]:gf,[Sf]:_f,[Mf]:xf,[yf]:$s};function mT(s,e){function t(){let X=!1;const De=new Ut;let le=null;const me=new Ut(0,0,0,0);return{setMask:function(ke){le!==ke&&!X&&(s.colorMask(ke,ke,ke,ke),le=ke)},setLocked:function(ke){X=ke},setClear:function(ke,Oe,ft,Ft,Jt){Jt===!0&&(ke*=Ft,Oe*=Ft,ft*=Ft),De.set(ke,Oe,ft,Ft),me.equals(De)===!1&&(s.clearColor(ke,Oe,ft,Ft),me.copy(De))},reset:function(){X=!1,le=null,me.set(-1,0,0,0)}}}function r(){let X=!1,De=!1,le=null,me=null,ke=null;return{setReversed:function(Oe){if(De!==Oe){const ft=e.get("EXT_clip_control");De?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Ft=ke;ke=null,this.setClear(Ft)}De=Oe},getReversed:function(){return De},setTest:function(Oe){Oe?pe(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(Oe){le!==Oe&&!X&&(s.depthMask(Oe),le=Oe)},setFunc:function(Oe){if(De&&(Oe=pT[Oe]),me!==Oe){switch(Oe){case gf:s.depthFunc(s.NEVER);break;case vf:s.depthFunc(s.ALWAYS);break;case _f:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case xf:s.depthFunc(s.EQUAL);break;case yf:s.depthFunc(s.GEQUAL);break;case Sf:s.depthFunc(s.GREATER);break;case Mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){ke!==Oe&&(De&&(Oe=1-Oe),s.clearDepth(Oe),ke=Oe)},reset:function(){X=!1,le=null,me=null,ke=null,De=!1}}}function o(){let X=!1,De=null,le=null,me=null,ke=null,Oe=null,ft=null,Ft=null,Jt=null;return{setTest:function(wt){X||(wt?pe(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(wt){De!==wt&&!X&&(s.stencilMask(wt),De=wt)},setFunc:function(wt,Dn,En){(le!==wt||me!==Dn||ke!==En)&&(s.stencilFunc(wt,Dn,En),le=wt,me=Dn,ke=En)},setOp:function(wt,Dn,En){(Oe!==wt||ft!==Dn||Ft!==En)&&(s.stencilOp(wt,Dn,En),Oe=wt,ft=Dn,Ft=En)},setLocked:function(wt){X=wt},setClear:function(wt){Jt!==wt&&(s.clearStencil(wt),Jt=wt)},reset:function(){X=!1,De=null,le=null,me=null,ke=null,Oe=null,ft=null,Ft=null,Jt=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],M=null,A=!1,y=null,_=null,O=null,L=null,R=null,k=null,D=null,U=new Mt(0,0,0),B=0,P=!1,w=null,z=null,ee=null,q=null,ne=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ce=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=ce>=2);let fe=null,ae={};const F=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),Fe=new Ut().fromArray(F),Q=new Ut().fromArray(te);function oe(X,De,le,me){const ke=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(X,Oe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<le;ft++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(De+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Oe}const ye={};ye[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(s.DEPTH_TEST),c.setFunc($s),Ee(!1),Ve(rm),pe(s.CULL_FACE),N(xr);function pe(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Pe(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Be(X,De){return v[X]!==De?(s.bindFramebuffer(X,De),v[X]=De,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Ke(X,De){let le=S,me=!1;if(X){le=x.get(De),le===void 0&&(le=[],x.set(De,le));const ke=X.textures;if(le.length!==ke.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,ft=ke.length;Oe<ft;Oe++)le[Oe]=s.COLOR_ATTACHMENT0+Oe;le.length=ke.length,me=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,me=!0);me&&s.drawBuffers(le)}function vt(X){return M!==X?(s.useProgram(X),M=X,!0):!1}const ge={[$r]:s.FUNC_ADD,[S_]:s.FUNC_SUBTRACT,[M_]:s.FUNC_REVERSE_SUBTRACT};ge[E_]=s.MIN,ge[T_]=s.MAX;const Ae={[w_]:s.ZERO,[A_]:s.ONE,[C_]:s.SRC_COLOR,[pf]:s.SRC_ALPHA,[N_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[P_]:s.DST_ALPHA,[R_]:s.ONE_MINUS_SRC_COLOR,[mf]:s.ONE_MINUS_SRC_ALPHA,[D_]:s.ONE_MINUS_DST_COLOR,[b_]:s.ONE_MINUS_DST_ALPHA,[U_]:s.CONSTANT_COLOR,[I_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[O_]:s.ONE_MINUS_CONSTANT_ALPHA};function N(X,De,le,me,ke,Oe,ft,Ft,Jt,wt){if(X===xr){A===!0&&(Pe(s.BLEND),A=!1);return}if(A===!1&&(pe(s.BLEND),A=!0),X!==y_){if(X!==y||wt!==P){if((_!==$r||R!==$r)&&(s.blendEquation(s.FUNC_ADD),_=$r,R=$r),wt)switch(X){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sm:s.blendFunc(s.ONE,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case am:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}O=null,L=null,k=null,D=null,U.set(0,0,0),B=0,y=X,P=wt}return}ke=ke||De,Oe=Oe||le,ft=ft||me,(De!==_||ke!==R)&&(s.blendEquationSeparate(ge[De],ge[ke]),_=De,R=ke),(le!==O||me!==L||Oe!==k||ft!==D)&&(s.blendFuncSeparate(Ae[le],Ae[me],Ae[Oe],Ae[ft]),O=le,L=me,k=Oe,D=ft),(Ft.equals(U)===!1||Jt!==B)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Jt),U.copy(Ft),B=Jt),y=X,P=!1}function Je(X,De){X.side===zi?Pe(s.CULL_FACE):pe(s.CULL_FACE);let le=X.side===Bn;De&&(le=!le),Ee(le),X.blending===js&&X.transparent===!1?N(xr):N(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const me=X.stencilWrite;f.setTest(me),me&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),nt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function Ve(X){X!==__?(pe(s.CULL_FACE),X!==z&&(X===rm?s.cullFace(s.BACK):X===x_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),z=X}function Re(X){X!==ee&&(J&&s.lineWidth(X),ee=X)}function nt(X,De,le){X?(pe(s.POLYGON_OFFSET_FILL),(q!==De||ne!==le)&&(s.polygonOffset(De,le),q=De,ne=le)):Pe(s.POLYGON_OFFSET_FILL)}function Ue(X){X?pe(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function b(X){X===void 0&&(X=s.TEXTURE0+ue-1),fe!==X&&(s.activeTexture(X),fe=X)}function T(X,De,le){le===void 0&&(fe===null?le=s.TEXTURE0+ue-1:le=fe);let me=ae[le];me===void 0&&(me={type:void 0,texture:void 0},ae[le]=me),(me.type!==X||me.texture!==De)&&(fe!==le&&(s.activeTexture(le),fe=le),s.bindTexture(X,De||ye[X]),me.type=X,me.texture=De)}function Z(){const X=ae[fe];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function de(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(X){Fe.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Fe.copy(X))}function Ye(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function _t(X,De){let le=p.get(De);le===void 0&&(le=new WeakMap,p.set(De,le));let me=le.get(X);me===void 0&&(me=s.getUniformBlockIndex(De,X.name),le.set(X,me))}function ct(X,De){const me=p.get(De).get(X);h.get(De)!==me&&(s.uniformBlockBinding(De,me,X.__bindingPointIndex),h.set(De,me))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},fe=null,ae={},v={},x=new WeakMap,S=[],M=null,A=!1,y=null,_=null,O=null,L=null,R=null,k=null,D=null,U=new Mt(0,0,0),B=0,P=!1,w=null,z=null,ee=null,q=null,ne=null,Fe.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:Pe,bindFramebuffer:Be,drawBuffers:Ke,useProgram:vt,setBlending:N,setMaterial:Je,setFlipSided:Ee,setCullFace:Ve,setLineWidth:Re,setPolygonOffset:nt,setScissorTest:Ue,activeTexture:b,bindTexture:T,unbindTexture:Z,compressedTexImage2D:de,compressedTexImage3D:ve,texImage2D:je,texImage3D:it,updateUBOMapping:_t,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:Te,texSubImage2D:he,texSubImage3D:$e,compressedTexSubImage2D:be,compressedTexSubImage3D:He,scissor:ot,viewport:Ye,reset:Lt}}function gT(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,T){return S?new OffscreenCanvas(b,T):Qo("canvas")}function A(b,T,Z){let de=1;const ve=Ue(b);if((ve.width>Z||ve.height>Z)&&(de=Z/Math.max(ve.width,ve.height)),de<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const he=Math.floor(de*ve.width),$e=Math.floor(de*ve.height);v===void 0&&(v=M(he,$e));const be=T?M(he,$e):v;return be.width=he,be.height=$e,be.getContext("2d").drawImage(b,0,0,he,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+$e+")."),be}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),b;return b}function y(b){return b.generateMipmaps}function _(b){s.generateMipmap(b)}function O(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,T,Z,de,ve=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=T;if(T===s.RED&&(Z===s.FLOAT&&(he=s.R32F),Z===s.HALF_FLOAT&&(he=s.R16F),Z===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.R8UI),Z===s.UNSIGNED_SHORT&&(he=s.R16UI),Z===s.UNSIGNED_INT&&(he=s.R32UI),Z===s.BYTE&&(he=s.R8I),Z===s.SHORT&&(he=s.R16I),Z===s.INT&&(he=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(he=s.RG32F),Z===s.HALF_FLOAT&&(he=s.RG16F),Z===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RG8UI),Z===s.UNSIGNED_SHORT&&(he=s.RG16UI),Z===s.UNSIGNED_INT&&(he=s.RG32UI),Z===s.BYTE&&(he=s.RG8I),Z===s.SHORT&&(he=s.RG16I),Z===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Z===s.UNSIGNED_INT&&(he=s.RGB32UI),Z===s.BYTE&&(he=s.RGB8I),Z===s.SHORT&&(he=s.RGB16I),Z===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Z===s.UNSIGNED_INT&&(he=s.RGBA32UI),Z===s.BYTE&&(he=s.RGBA8I),Z===s.SHORT&&(he=s.RGBA16I),Z===s.INT&&(he=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const $e=ve?Xl:bt.getTransfer(de);Z===s.FLOAT&&(he=s.RGBA32F),Z===s.HALF_FLOAT&&(he=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(he=$e===Nt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(b,T){let Z;return b?T===null||T===Jr||T===Js?Z=s.DEPTH24_STENCIL8:T===Vi?Z=s.DEPTH32F_STENCIL8:T===Ko&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Jr||T===Js?Z=s.DEPTH_COMPONENT24:T===Vi?Z=s.DEPTH_COMPONENT32F:T===Ko&&(Z=s.DEPTH_COMPONENT16),Z}function k(b,T){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==hi&&b.minFilter!==zn?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function D(b){const T=b.target;T.removeEventListener("dispose",D),B(T),T.isVideoTexture&&g.delete(T)}function U(b){const T=b.target;T.removeEventListener("dispose",U),w(T)}function B(b){const T=r.get(b);if(T.__webglInit===void 0)return;const Z=b.source,de=x.get(Z);if(de){const ve=de[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(b),Object.keys(de).length===0&&x.delete(Z)}r.remove(b)}function P(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const Z=b.source,de=x.get(Z);delete de[T.__cacheKey],c.memory.textures--}function w(b){const T=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let ve=0;ve<T.__webglFramebuffer[de].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[de][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=b.textures;for(let de=0,ve=Z.length;de<ve;de++){const he=r.get(Z[de]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(Z[de])}r.remove(b)}let z=0;function ee(){z=0}function q(){const b=z;return b>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),z+=1,b}function ne(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function ue(b,T){const Z=r.get(b);if(b.isVideoTexture&&Re(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const de=b.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,b,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function J(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ce(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){Q(Z,b,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function H(b,T){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){oe(Z,b,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const fe={[wf]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[Af]:s.MIRRORED_REPEAT},ae={[hi]:s.NEAREST,[j_]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[Dc]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},F={[Z_]:s.NEVER,[nx]:s.ALWAYS,[K_]:s.LESS,[Ng]:s.LEQUAL,[J_]:s.EQUAL,[tx]:s.GEQUAL,[Q_]:s.GREATER,[ex]:s.NOTEQUAL};function te(b,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zn||T.magFilter===Dc||T.magFilter===ml||T.magFilter===Kr||T.minFilter===zn||T.minFilter===Dc||T.minFilter===ml||T.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,fe[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,fe[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,fe[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ae[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==ml&&T.minFilter!==Kr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Fe(b,T){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",D));const de=T.source;let ve=x.get(de);ve===void 0&&(ve={},x.set(de,ve));const he=ne(T);if(he!==b.__cacheKey){ve[he]===void 0&&(ve[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),ve[he].usedTimes++;const $e=ve[b.__cacheKey];$e!==void 0&&(ve[b.__cacheKey].usedTimes--,$e.usedTimes===0&&P(T)),b.__cacheKey=he,b.__webglTexture=ve[he].texture}return Z}function Q(b,T,Z){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const ve=Fe(b,T),he=T.source;t.bindTexture(de,b.__webglTexture,s.TEXTURE0+Z);const $e=r.get(he);if(he.version!==$e.__version||ve===!0){t.activeTexture(s.TEXTURE0+Z);const be=bt.getPrimaries(bt.workingColorSpace),He=T.colorSpace===_r?null:bt.getPrimaries(T.colorSpace),ht=T.colorSpace===_r||be===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Te=A(T.image,!1,o.maxTextureSize);Te=nt(T,Te);const je=l.convert(T.format,T.colorSpace),it=l.convert(T.type);let ot=L(T.internalFormat,je,it,T.colorSpace,T.isVideoTexture);te(de,T);let Ye;const _t=T.mipmaps,ct=T.isVideoTexture!==!0,Lt=$e.__version===void 0||ve===!0,X=he.dataReady,De=k(T,Te);if(T.isDepthTexture)ot=R(T.format===Qs,T.type),Lt&&(ct?t.texStorage2D(s.TEXTURE_2D,1,ot,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,ot,Te.width,Te.height,0,je,it,null));else if(T.isDataTexture)if(_t.length>0){ct&&Lt&&t.texStorage2D(s.TEXTURE_2D,De,ot,_t[0].width,_t[0].height);for(let le=0,me=_t.length;le<me;le++)Ye=_t[le],ct?X&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Ye.width,Ye.height,je,it,Ye.data):t.texImage2D(s.TEXTURE_2D,le,ot,Ye.width,Ye.height,0,je,it,Ye.data);T.generateMipmaps=!1}else ct?(Lt&&t.texStorage2D(s.TEXTURE_2D,De,ot,Te.width,Te.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te.width,Te.height,je,it,Te.data)):t.texImage2D(s.TEXTURE_2D,0,ot,Te.width,Te.height,0,je,it,Te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ct&&Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ot,_t[0].width,_t[0].height,Te.depth);for(let le=0,me=_t.length;le<me;le++)if(Ye=_t[le],T.format!==di)if(je!==null)if(ct){if(X)if(T.layerUpdates.size>0){const ke=zm(Ye.width,Ye.height,T.format,T.type);for(const Oe of T.layerUpdates){const ft=Ye.data.subarray(Oe*ke/Ye.data.BYTES_PER_ELEMENT,(Oe+1)*ke/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,Oe,Ye.width,Ye.height,1,je,ft)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Ye.width,Ye.height,Te.depth,je,Ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,le,ot,Ye.width,Ye.height,Te.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,le,0,0,0,Ye.width,Ye.height,Te.depth,je,it,Ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,le,ot,Ye.width,Ye.height,Te.depth,0,je,it,Ye.data)}else{ct&&Lt&&t.texStorage2D(s.TEXTURE_2D,De,ot,_t[0].width,_t[0].height);for(let le=0,me=_t.length;le<me;le++)Ye=_t[le],T.format!==di?je!==null?ct?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,le,0,0,Ye.width,Ye.height,je,Ye.data):t.compressedTexImage2D(s.TEXTURE_2D,le,ot,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?X&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,Ye.width,Ye.height,je,it,Ye.data):t.texImage2D(s.TEXTURE_2D,le,ot,Ye.width,Ye.height,0,je,it,Ye.data)}else if(T.isDataArrayTexture)if(ct){if(Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ot,Te.width,Te.height,Te.depth),X)if(T.layerUpdates.size>0){const le=zm(Te.width,Te.height,T.format,T.type);for(const me of T.layerUpdates){const ke=Te.data.subarray(me*le/Te.data.BYTES_PER_ELEMENT,(me+1)*le/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,je,it,ke)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,je,it,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ot,Te.width,Te.height,Te.depth,0,je,it,Te.data);else if(T.isData3DTexture)ct?(Lt&&t.texStorage3D(s.TEXTURE_3D,De,ot,Te.width,Te.height,Te.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,je,it,Te.data)):t.texImage3D(s.TEXTURE_3D,0,ot,Te.width,Te.height,Te.depth,0,je,it,Te.data);else if(T.isFramebufferTexture){if(Lt)if(ct)t.texStorage2D(s.TEXTURE_2D,De,ot,Te.width,Te.height);else{let le=Te.width,me=Te.height;for(let ke=0;ke<De;ke++)t.texImage2D(s.TEXTURE_2D,ke,ot,le,me,0,je,it,null),le>>=1,me>>=1}}else if(_t.length>0){if(ct&&Lt){const le=Ue(_t[0]);t.texStorage2D(s.TEXTURE_2D,De,ot,le.width,le.height)}for(let le=0,me=_t.length;le<me;le++)Ye=_t[le],ct?X&&t.texSubImage2D(s.TEXTURE_2D,le,0,0,je,it,Ye):t.texImage2D(s.TEXTURE_2D,le,ot,je,it,Ye);T.generateMipmaps=!1}else if(ct){if(Lt){const le=Ue(Te);t.texStorage2D(s.TEXTURE_2D,De,ot,le.width,le.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,it,Te)}else t.texImage2D(s.TEXTURE_2D,0,ot,je,it,Te);y(T)&&_(de),$e.__version=he.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function oe(b,T,Z){if(T.image.length!==6)return;const de=Fe(b,T),ve=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+Z);const he=r.get(ve);if(ve.version!==he.__version||de===!0){t.activeTexture(s.TEXTURE0+Z);const $e=bt.getPrimaries(bt.workingColorSpace),be=T.colorSpace===_r?null:bt.getPrimaries(T.colorSpace),He=T.colorSpace===_r||$e===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const ht=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,je=[];for(let me=0;me<6;me++)!ht&&!Te?je[me]=A(T.image[me],!0,o.maxCubemapSize):je[me]=Te?T.image[me].image:T.image[me],je[me]=nt(T,je[me]);const it=je[0],ot=l.convert(T.format,T.colorSpace),Ye=l.convert(T.type),_t=L(T.internalFormat,ot,Ye,T.colorSpace),ct=T.isVideoTexture!==!0,Lt=he.__version===void 0||de===!0,X=ve.dataReady;let De=k(T,it);te(s.TEXTURE_CUBE_MAP,T);let le;if(ht){ct&&Lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,_t,it.width,it.height);for(let me=0;me<6;me++){le=je[me].mipmaps;for(let ke=0;ke<le.length;ke++){const Oe=le[ke];T.format!==di?ot!==null?ct?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Oe.width,Oe.height,ot,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,_t,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,0,0,Oe.width,Oe.height,ot,Ye,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke,_t,Oe.width,Oe.height,0,ot,Ye,Oe.data)}}}else{if(le=T.mipmaps,ct&&Lt){le.length>0&&De++;const me=Ue(je[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,_t,me.width,me.height)}for(let me=0;me<6;me++)if(Te){ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,je[me].width,je[me].height,ot,Ye,je[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_t,je[me].width,je[me].height,0,ot,Ye,je[me].data);for(let ke=0;ke<le.length;ke++){const ft=le[ke].image[me].image;ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,ft.width,ft.height,ot,Ye,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,_t,ft.width,ft.height,0,ot,Ye,ft.data)}}else{ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ot,Ye,je[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_t,ot,Ye,je[me]);for(let ke=0;ke<le.length;ke++){const Oe=le[ke];ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,0,0,ot,Ye,Oe.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ke+1,_t,ot,Ye,Oe.image[me])}}}y(T)&&_(s.TEXTURE_CUBE_MAP),he.__version=ve.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ye(b,T,Z,de,ve,he){const $e=l.convert(Z.format,Z.colorSpace),be=l.convert(Z.type),He=L(Z.internalFormat,$e,be,Z.colorSpace),ht=r.get(T),Te=r.get(Z);if(Te.__renderTarget=T,!ht.__hasExternalTextures){const je=Math.max(1,T.width>>he),it=Math.max(1,T.height>>he);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,He,je,it,T.depth,0,$e,be,null):t.texImage2D(ve,he,He,je,it,0,$e,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),Ve(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ve,Te.__webglTexture,0,Ee(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ve,Te.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(b,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const de=T.depthTexture,ve=de&&de.isDepthTexture?de.type:null,he=R(T.stencilBuffer,ve),$e=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=Ee(T);Ve(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,he,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,b)}else{const de=T.textures;for(let ve=0;ve<de.length;ve++){const he=de[ve],$e=l.convert(he.format,he.colorSpace),be=l.convert(he.type),He=L(he.internalFormat,$e,be,he.colorSpace),ht=Ee(T);Z&&Ve(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,He,T.width,T.height):Ve(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,He,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,He,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=r.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const ve=de.__webglTexture,he=Ee(T);if(T.depthTexture.format===Ys)Ve(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Qs)Ve(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Be(b){const T=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const de=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",ve)};de.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=de}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,b)}else if(Z){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),pe(T.__webglDepthbuffer[de],b,!1);else{const ve=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),pe(T.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(b,T,Z){const de=r.get(b);T!==void 0&&ye(de.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Be(b)}function vt(b){const T=b.texture,Z=r.get(b),de=r.get(T);b.addEventListener("dispose",U);const ve=b.textures,he=b.isWebGLCubeRenderTarget===!0,$e=ve.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,c.memory.textures++),he){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let He=0;He<T.mipmaps.length;He++)Z.__webglFramebuffer[be][He]=s.createFramebuffer()}else Z.__webglFramebuffer[be]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)Z.__webglFramebuffer[be]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if($e)for(let be=0,He=ve.length;be<He;be++){const ht=r.get(ve[be]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&Ve(b)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const He=ve[be];Z.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const ht=l.convert(He.format,He.colorSpace),Te=l.convert(He.type),je=L(He.internalFormat,ht,Te,He.colorSpace,b.isXRRenderTarget===!0),it=Ee(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,je,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(Z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),te(s.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ye(Z.__webglFramebuffer[be][He],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,He);else ye(Z.__webglFramebuffer[be],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let be=0,He=ve.length;be<He;be++){const ht=ve[be],Te=r.get(ht);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),te(s.TEXTURE_2D,ht),ye(Z.__webglFramebuffer,b,ht,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(ht)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(be=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,de.__webglTexture),te(be,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)ye(Z.__webglFramebuffer[He],b,T,s.COLOR_ATTACHMENT0,be,He);else ye(Z.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,be,0);y(T)&&_(be),t.unbindTexture()}b.depthBuffer&&Be(b)}function ge(b){const T=b.textures;for(let Z=0,de=T.length;Z<de;Z++){const ve=T[Z];if(y(ve)){const he=O(b),$e=r.get(ve).__webglTexture;t.bindTexture(he,$e),_(he),t.unbindTexture()}}}const Ae=[],N=[];function Je(b){if(b.samples>0){if(Ve(b)===!1){const T=b.textures,Z=b.width,de=b.height;let ve=s.COLOR_BUFFER_BIT;const he=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(b),be=T.length>1;if(be)for(let He=0;He<T.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let He=0;He<T.length;He++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[He]);const ht=r.get(T[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,Z,de,0,0,Z,de,ve,s.NEAREST),h===!0&&(Ae.length=0,N.length=0,Ae.push(s.COLOR_ATTACHMENT0+He),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ae.push(he),N.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let He=0;He<T.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,$e.__webglColorRenderbuffer[He]);const ht=r.get(T[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ee(b){return Math.min(o.maxSamples,b.samples)}function Ve(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(b){const T=c.render.frame;g.get(b)!==T&&(g.set(b,T),b.update())}function nt(b,T){const Z=b.colorSpace,de=b.format,ve=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==eo&&Z!==_r&&(bt.getTransfer(Z)===Nt?(de!==di||ve!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Ue(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(p.width=b.naturalWidth||b.width,p.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(p.width=b.displayWidth,p.height=b.displayHeight):(p.width=b.width,p.height=b.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=ue,this.setTexture2DArray=J,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ve}function vT(s,e){function t(r,o=_r){let l;const c=bt.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===ld)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Mg)return s.BYTE;if(r===Eg)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===ad)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===ia)return s.HALF_FLOAT;if(r===wg)return s.ALPHA;if(r===Ag)return s.RGB;if(r===di)return s.RGBA;if(r===Cg)return s.LUMINANCE;if(r===Rg)return s.LUMINANCE_ALPHA;if(r===Ys)return s.DEPTH_COMPONENT;if(r===Qs)return s.DEPTH_STENCIL;if(r===Pg)return s.RED;if(r===cd)return s.RED_INTEGER;if(r===bg)return s.RG;if(r===fd)return s.RG_INTEGER;if(r===dd)return s.RGBA_INTEGER;if(r===zl||r===Bl||r===Vl||r===Hl)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cf||r===Rf||r===Pf||r===bf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Cf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lf||r===Df||r===Nf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Lf||r===Df)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Nf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Uf||r===If||r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===jf||r===Yf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Uf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===If)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ff)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Of)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gl||r===qf||r===$f)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Gl)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$f)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lg||r===Zf||r===Kf||r===Jf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Gl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Zf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Kf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Jf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const _T={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),_=this._getHandJoint(p,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(_T)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const xT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ST{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new dn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Er({vertexShader:xT,fragmentShader:yT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new oa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MT extends no{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,x=null,S=null,M=null;const A=new ST,y=t.getContextAttributes();let _=null,O=null;const L=[],R=[],k=new Le;let D=null;const U=new Yn;U.viewport=new Ut;const B=new Yn;B.viewport=new Ut;const P=[U,B],w=new Gy;let z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=L[Q];return oe===void 0&&(oe=new ff,L[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=L[Q];return oe===void 0&&(oe=new ff,L[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=L[Q];return oe===void 0&&(oe=new ff,L[Q]=oe),oe.getHandSpace()};function q(Q){const oe=R.indexOf(Q.inputSource);if(oe===-1)return;const ye=L[oe];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,p||c),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ne(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",ue);for(let Q=0;Q<L.length;Q++){const oe=R[Q];oe!==null&&(R[Q]=null,L[Q].disconnect(oe))}z=null,ee=null,A.reset(),e.setRenderTarget(_),S=null,x=null,v=null,o=null,O=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0){const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Qr(S.framebufferWidth,S.framebufferHeight,{format:di,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let oe=null,ye=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=y.stencil?Qs:Ys,ye=y.stencil?Js:Jr);const Pe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:l};v=new XRWebGLBinding(o,t),x=v.createProjectionLayer(Pe),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Qr(x.textureWidth,x.textureHeight,{format:di,type:Wi,depthTexture:new Wg(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Fe.setContext(o),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ue(Q){for(let oe=0;oe<Q.removed.length;oe++){const ye=Q.removed[oe],pe=R.indexOf(ye);pe>=0&&(R[pe]=null,L[pe].disconnect(ye))}for(let oe=0;oe<Q.added.length;oe++){const ye=Q.added[oe];let pe=R.indexOf(ye);if(pe===-1){for(let Be=0;Be<L.length;Be++)if(Be>=R.length){R.push(ye),pe=Be;break}else if(R[Be]===null){R[Be]=ye,pe=Be;break}if(pe===-1)break}const Pe=L[pe];Pe&&Pe.connect(ye)}}const J=new j,ce=new j;function H(Q,oe,ye){J.setFromMatrixPosition(oe.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const pe=J.distanceTo(ce),Pe=oe.projectionMatrix.elements,Be=ye.projectionMatrix.elements,Ke=Pe[14]/(Pe[10]-1),vt=Pe[14]/(Pe[10]+1),ge=(Pe[9]+1)/Pe[5],Ae=(Pe[9]-1)/Pe[5],N=(Pe[8]-1)/Pe[0],Je=(Be[8]+1)/Be[0],Ee=Ke*N,Ve=Ke*Je,Re=pe/(-N+Je),nt=Re*-N;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(nt),Q.translateZ(Re),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ue=Ke+Re,b=vt+Re,T=Ee-nt,Z=Ve+(pe-nt),de=ge*vt/b*Ue,ve=Ae*vt/b*Ue;Q.projectionMatrix.makePerspective(T,Z,de,ve,Ue,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let oe=Q.near,ye=Q.far;A.texture!==null&&(A.depthNear>0&&(oe=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),w.near=B.near=U.near=oe,w.far=B.far=U.far=ye,(z!==w.near||ee!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,ee=w.far),U.layers.mask=Q.layers.mask|2,B.layers.mask=Q.layers.mask|4,w.layers.mask=U.layers.mask|B.layers.mask;const pe=Q.parent,Pe=w.cameras;fe(w,pe);for(let Be=0;Be<Pe.length;Be++)fe(Pe[Be],pe);Pe.length===2?H(w,U,B):w.projectionMatrix.copy(U.projectionMatrix),ae(Q,w,pe)};function ae(Q,oe,ye){ye===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Jo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let F=null;function te(Q,oe){if(g=oe.getViewerPose(p||c),M=oe,g!==null){const ye=g.views;S!==null&&(e.setRenderTargetFramebuffer(O,S.framebuffer),e.setRenderTarget(O));let pe=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let Be=0;Be<ye.length;Be++){const Ke=ye[Be];let vt=null;if(S!==null)vt=S.getViewport(Ke);else{const Ae=v.getViewSubImage(x,Ke);vt=Ae.viewport,Be===0&&(e.setRenderTargetTextures(O,Ae.colorTexture,x.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(O))}let ge=P[Be];ge===void 0&&(ge=new Yn,ge.layers.enable(Be),ge.viewport=new Ut,P[Be]=ge),ge.matrix.fromArray(Ke.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ke.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(vt.x,vt.y,vt.width,vt.height),Be===0&&(w.matrix.copy(ge.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pe===!0&&w.cameras.push(ge)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Be=v.getDepthInformation(ye[0]);Be&&Be.isValid&&Be.texture&&A.init(e,Be,o.renderState)}}for(let ye=0;ye<L.length;ye++){const pe=R[ye],Pe=L[ye];pe!==null&&Pe!==void 0&&Pe.update(pe,oe,p||c)}F&&F(Q,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),M=null}const Fe=new ev;Fe.setAnimationLoop(te),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const Xr=new Ln,ET=new Vt;function TT(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Vg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,O,L,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),M(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),A(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,O,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Bn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Bn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const O=e.get(_),L=O.envMap,R=O.envMapRotation;L&&(y.envMap.value=L,Xr.copy(R),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Xr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,O,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*O,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,O){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const O=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function wT(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(O,L){const R=L.program;r.uniformBlockBinding(O,R)}function p(O,L){let R=o[O.id];R===void 0&&(M(O),R=g(O),o[O.id]=R,O.addEventListener("dispose",y));const k=L.program;r.updateUBOMapping(O,k);const D=e.render.frame;l[O.id]!==D&&(x(O),l[O.id]=D)}function g(O){const L=v();O.__bindingPointIndex=L;const R=s.createBuffer(),k=O.__size,D=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,k,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function v(){for(let O=0;O<f;O++)if(c.indexOf(O)===-1)return c.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const L=o[O.id],R=O.uniforms,k=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,U=R.length;D<U;D++){const B=Array.isArray(R[D])?R[D]:[R[D]];for(let P=0,w=B.length;P<w;P++){const z=B[P];if(S(z,D,P,k)===!0){const ee=z.__offset,q=Array.isArray(z.value)?z.value:[z.value];let ne=0;for(let ue=0;ue<q.length;ue++){const J=q[ue],ce=A(J);typeof J=="number"||typeof J=="boolean"?(z.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,ee+ne,z.__data)):J.isMatrix3?(z.__data[0]=J.elements[0],z.__data[1]=J.elements[1],z.__data[2]=J.elements[2],z.__data[3]=0,z.__data[4]=J.elements[3],z.__data[5]=J.elements[4],z.__data[6]=J.elements[5],z.__data[7]=0,z.__data[8]=J.elements[6],z.__data[9]=J.elements[7],z.__data[10]=J.elements[8],z.__data[11]=0):(J.toArray(z.__data,ne),ne+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,L,R,k){const D=O.value,U=L+"_"+R;if(k[U]===void 0)return typeof D=="number"||typeof D=="boolean"?k[U]=D:k[U]=D.clone(),!0;{const B=k[U];if(typeof D=="number"||typeof D=="boolean"){if(B!==D)return k[U]=D,!0}else if(B.equals(D)===!1)return B.copy(D),!0}return!1}function M(O){const L=O.uniforms;let R=0;const k=16;for(let U=0,B=L.length;U<B;U++){const P=Array.isArray(L[U])?L[U]:[L[U]];for(let w=0,z=P.length;w<z;w++){const ee=P[w],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let ne=0,ue=q.length;ne<ue;ne++){const J=q[ne],ce=A(J),H=R%k,fe=H%ce.boundary,ae=H+fe;R+=fe,ae!==0&&k-ae<ce.storage&&(R+=k-ae),ee.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=R,R+=ce.storage}}}const D=R%k;return D>0&&(R+=k-D),O.__size=R,O.__cache={},this}function A(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function y(O){const L=O.target;L.removeEventListener("dispose",y);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const O in o)s.deleteBuffer(o[O]);c=[],o={},l={}}return{bind:h,update:p,dispose:_}}class AT{constructor(e={}){const{canvas:t=yx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const O=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=yr,this.toneMappingExposure=1;const R=this;let k=!1,D=0,U=0,B=null,P=-1,w=null;const z=new Ut,ee=new Ut;let q=null;const ne=new Mt(0);let ue=0,J=t.width,ce=t.height,H=1,fe=null,ae=null;const F=new Ut(0,0,J,ce),te=new Ut(0,0,J,ce);let Fe=!1;const Q=new md;let oe=!1,ye=!1;const pe=new Vt,Pe=new Vt,Be=new j,Ke=new Ut,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ae(){return B===null?H:1}let N=r;function Je(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${od}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),N===null){const Y="webgl2";if(N=Je(Y,C),N===null)throw Je(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ee,Ve,Re,nt,Ue,b,T,Z,de,ve,he,$e,be,He,ht,Te,je,it,ot,Ye,_t,ct,Lt,X;function De(){Ee=new IE(N),Ee.init(),ct=new vT(N,Ee),Ve=new PE(N,Ee,e,ct),Re=new mT(N,Ee),Ve.reverseDepthBuffer&&x&&Re.buffers.depth.setReversed(!0),nt=new kE(N),Ue=new nT,b=new gT(N,Ee,Re,Ue,Ve,ct,nt),T=new LE(R),Z=new UE(R),de=new Xy(N),Lt=new CE(N,de),ve=new FE(N,de,nt,Lt),he=new BE(N,ve,de,nt),ot=new zE(N,Ve,b),Te=new bE(Ue),$e=new tT(R,T,Z,Ee,Ve,Lt,Te),be=new TT(R,Ue),He=new rT,ht=new cT(Ee),it=new AE(R,T,Z,Re,he,S,h),je=new hT(R,he,Ve),X=new wT(N,nt,Ve,Re),Ye=new RE(N,Ee,nt),_t=new OE(N,Ee,nt),nt.programs=$e.programs,R.capabilities=Ve,R.extensions=Ee,R.properties=Ue,R.renderLists=He,R.shadowMap=je,R.state=Re,R.info=nt}De();const le=new MT(R,N);this.xr=le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(J,ce,!1))},this.getSize=function(C){return C.set(J,ce)},this.setSize=function(C,Y,re=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,ce=Y,t.width=Math.floor(C*H),t.height=Math.floor(Y*H),re===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(J*H,ce*H).floor()},this.setDrawingBufferSize=function(C,Y,re){J=C,ce=Y,H=re,t.width=Math.floor(C*re),t.height=Math.floor(Y*re),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,Y,re,se){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,Y,re,se),Re.viewport(z.copy(F).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,Y,re,se){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Y,re,se),Re.scissor(ee.copy(te).multiplyScalar(H).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(C){Re.setScissorTest(Fe=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){ae=C},this.getClearColor=function(C){return C.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(C=!0,Y=!0,re=!0){let se=0;if(C){let G=!1;if(B!==null){const we=B.texture.format;G=we===dd||we===fd||we===cd}if(G){const we=B.texture.type,Ne=we===Wi||we===Jr||we===Ko||we===Js||we===ld||we===ud,Ge=it.getClearColor(),We=it.getClearAlpha(),at=Ge.r,lt=Ge.g,et=Ge.b;Ne?(M[0]=at,M[1]=lt,M[2]=et,M[3]=We,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=at,A[1]=lt,A[2]=et,A[3]=We,N.clearBufferiv(N.COLOR,0,A))}else se|=N.COLOR_BUFFER_BIT}Y&&(se|=N.DEPTH_BUFFER_BIT),re&&(se|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),it.dispose(),He.dispose(),ht.dispose(),Ue.dispose(),T.dispose(),Z.dispose(),he.dispose(),Lt.dispose(),X.dispose(),$e.dispose(),le.dispose(),le.removeEventListener("sessionstart",ns),le.removeEventListener("sessionend",Xi),Ei.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const C=nt.autoReset,Y=je.enabled,re=je.autoUpdate,se=je.needsUpdate,G=je.type;De(),nt.autoReset=C,je.enabled=Y,je.autoUpdate=re,je.needsUpdate=se,je.type=G}function Oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){const Y=C.target;Y.removeEventListener("dispose",ft),Ft(Y)}function Ft(C){Jt(C),Ue.remove(C)}function Jt(C){const Y=Ue.get(C).programs;Y!==void 0&&(Y.forEach(function(re){$e.releaseProgram(re)}),C.isShaderMaterial&&$e.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,re,se,G,we){Y===null&&(Y=vt);const Ne=G.isMesh&&G.matrixWorld.determinant()<0,Ge=ua(C,Y,re,se,G);Re.setMaterial(se,Ne);let We=re.index,at=1;if(se.wireframe===!0){if(We=ve.getWireframeAttribute(re),We===void 0)return;at=2}const lt=re.drawRange,et=re.attributes.position;let dt=lt.start*at,Ct=(lt.start+lt.count)*at;we!==null&&(dt=Math.max(dt,we.start*at),Ct=Math.min(Ct,(we.start+we.count)*at)),We!==null?(dt=Math.max(dt,0),Ct=Math.min(Ct,We.count)):et!=null&&(dt=Math.max(dt,0),Ct=Math.min(Ct,et.count));const Rt=Ct-dt;if(Rt<0||Rt===1/0)return;Lt.setup(G,se,Ge,re,We);let zt,Tt=Ye;if(We!==null&&(zt=de.get(We),Tt=_t,Tt.setIndex(zt)),G.isMesh)se.wireframe===!0?(Re.setLineWidth(se.wireframeLinewidth*Ae()),Tt.setMode(N.LINES)):Tt.setMode(N.TRIANGLES);else if(G.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),Re.setLineWidth(tt*Ae()),G.isLineSegments?Tt.setMode(N.LINES):G.isLineLoop?Tt.setMode(N.LINE_LOOP):Tt.setMode(N.LINE_STRIP)}else G.isPoints?Tt.setMode(N.POINTS):G.isSprite&&Tt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Tt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const tt=G._multiDrawStarts,Xt=G._multiDrawCounts,Et=G._multiDrawCount,un=We?de.get(We).bytesPerElement:1,ti=Ue.get(se).currentProgram.getUniforms();for(let Tn=0;Tn<Et;Tn++)ti.setValue(N,"_gl_DrawID",Tn),Tt.render(tt[Tn]/un,Xt[Tn])}else if(G.isInstancedMesh)Tt.renderInstances(dt,Rt,G.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xt=Math.min(re.instanceCount,tt);Tt.renderInstances(dt,Rt,Xt)}else Tt.render(dt,Rt)};function wt(C,Y,re){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,is(C,Y,re),C.side=Mr,C.needsUpdate=!0,is(C,Y,re),C.side=zi):is(C,Y,re)}this.compile=function(C,Y,re=null){re===null&&(re=C),_=ht.get(re),_.init(Y),L.push(_),re.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),C!==re&&C.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const se=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const we=G.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Ge=we[Ne];wt(Ge,re,G),se.add(Ge)}else wt(we,re,G),se.add(we)}),L.pop(),_=null,se},this.compileAsync=function(C,Y,re=null){const se=this.compile(C,Y,re);return new Promise(G=>{function we(){if(se.forEach(function(Ne){Ue.get(Ne).currentProgram.isReady()&&se.delete(Ne)}),se.size===0){G(C);return}setTimeout(we,10)}Ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Dn=null;function En(C){Dn&&Dn(C)}function ns(){Ei.stop()}function Xi(){Ei.start()}const Ei=new ev;Ei.setAnimationLoop(En),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(C){Dn=C,le.setAnimationLoop(C),C===null?Ei.stop():Ei.start()},le.addEventListener("sessionstart",ns),le.addEventListener("sessionend",Xi),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Y),Y=le.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Y,B),_=ht.get(C,L.length),_.init(Y),L.push(_),Pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Pe),ye=this.localClippingEnabled,oe=Te.init(this.clippingPlanes,ye),y=He.get(C,O.length),y.init(),O.push(y),le.enabled===!0&&le.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Ti(we,Y,-1/0,R.sortObjects)}Ti(C,Y,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(fe,ae),ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ge&&it.addToRenderList(y,C),this.info.render.frame++,oe===!0&&Te.beginShadows();const re=_.state.shadowsArray;je.render(re,C,Y),oe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=y.opaque,G=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const we=Y.cameras;if(G.length>0)for(let Ne=0,Ge=we.length;Ne<Ge;Ne++){const We=we[Ne];wr(se,G,C,We)}ge&&it.render(C);for(let Ne=0,Ge=we.length;Ne<Ge;Ne++){const We=we[Ne];Tr(y,C,We,We.viewport)}}else G.length>0&&wr(se,G,C,Y),ge&&it.render(C),Tr(y,C,Y);B!==null&&(b.updateMultisampleRenderTarget(B),b.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(R,C,Y),Lt.resetDefaultState(),P=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],oe===!0&&Te.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?y=O[O.length-1]:y=null};function Ti(C,Y,re,se){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){se&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pe);const Ne=he.update(C),Ge=C.material;Ge.visible&&y.push(C,Ne,Ge,re,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const Ne=he.update(C),Ge=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ke.copy(Ne.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ge)){const We=Ne.groups;for(let at=0,lt=We.length;at<lt;at++){const et=We[at],dt=Ge[et.materialIndex];dt&&dt.visible&&y.push(C,Ne,dt,re,Ke.z,et)}}else Ge.visible&&y.push(C,Ne,Ge,re,Ke.z,null)}}const we=C.children;for(let Ne=0,Ge=we.length;Ne<Ge;Ne++)Ti(we[Ne],Y,re,se)}function Tr(C,Y,re,se){const G=C.opaque,we=C.transmissive,Ne=C.transparent;_.setupLightsView(re),oe===!0&&Te.setGlobalState(R.clippingPlanes,re),se&&Re.viewport(z.copy(se)),G.length>0&&ji(G,Y,re),we.length>0&&ji(we,Y,re),Ne.length>0&&ji(Ne,Y,re),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function wr(C,Y,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new Qr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?ia:Wi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const we=_.state.transmissionRenderTarget[se.id],Ne=se.viewport||z;we.setSize(Ne.z,Ne.w);const Ge=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(ne),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),ge&&it.render(re);const We=R.toneMapping;R.toneMapping=yr;const at=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),oe===!0&&Te.setGlobalState(R.clippingPlanes,se),ji(C,re,se),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let et=0,dt=Y.length;et<dt;et++){const Ct=Y[et],Rt=Ct.object,zt=Ct.geometry,Tt=Ct.material,tt=Ct.group;if(Tt.side===zi&&Rt.layers.test(se.layers)){const Xt=Tt.side;Tt.side=Bn,Tt.needsUpdate=!0,aa(Rt,re,se,zt,Tt,tt),Tt.side=Xt,Tt.needsUpdate=!0,lt=!0}}lt===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we))}R.setRenderTarget(Ge),R.setClearColor(ne,ue),at!==void 0&&(se.viewport=at),R.toneMapping=We}function ji(C,Y,re){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,we=C.length;G<we;G++){const Ne=C[G],Ge=Ne.object,We=Ne.geometry,at=se===null?Ne.material:se,lt=Ne.group;Ge.layers.test(re.layers)&&aa(Ge,Y,re,We,at,lt)}}function aa(C,Y,re,se,G,we){C.onBeforeRender(R,Y,re,se,G,we),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(R,Y,re,se,C,we),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=Bn,G.needsUpdate=!0,R.renderBufferDirect(re,Y,se,G,C,we),G.side=Mr,G.needsUpdate=!0,R.renderBufferDirect(re,Y,se,G,C,we),G.side=zi):R.renderBufferDirect(re,Y,se,G,C,we),C.onAfterRender(R,Y,re,se,G,we)}function is(C,Y,re){Y.isScene!==!0&&(Y=vt);const se=Ue.get(C),G=_.state.lights,we=_.state.shadowsArray,Ne=G.state.version,Ge=$e.getParameters(C,G.state,we,Y,re),We=$e.getProgramCacheKey(Ge);let at=se.programs;se.environment=C.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(C.isMeshStandardMaterial?Z:T).get(C.envMap||se.environment),se.envMapRotation=se.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,at===void 0&&(C.addEventListener("dispose",ft),at=new Map,se.programs=at);let lt=at.get(We);if(lt!==void 0){if(se.currentProgram===lt&&se.lightsStateVersion===Ne)return pi(C,Ge),lt}else Ge.uniforms=$e.getUniforms(C),C.onBeforeCompile(Ge,R),lt=$e.acquireProgram(Ge,We),at.set(We,lt),se.uniforms=Ge.uniforms;const et=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Te.uniform),pi(C,Ge),se.needsLights=Zl(C),se.lightsStateVersion=Ne,se.needsLights&&(et.ambientLightColor.value=G.state.ambient,et.lightProbe.value=G.state.probe,et.directionalLights.value=G.state.directional,et.directionalLightShadows.value=G.state.directionalShadow,et.spotLights.value=G.state.spot,et.spotLightShadows.value=G.state.spotShadow,et.rectAreaLights.value=G.state.rectArea,et.ltc_1.value=G.state.rectAreaLTC1,et.ltc_2.value=G.state.rectAreaLTC2,et.pointLights.value=G.state.point,et.pointLightShadows.value=G.state.pointShadow,et.hemisphereLights.value=G.state.hemi,et.directionalShadowMap.value=G.state.directionalShadowMap,et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,et.spotShadowMap.value=G.state.spotShadowMap,et.spotLightMatrix.value=G.state.spotLightMatrix,et.spotLightMap.value=G.state.spotLightMap,et.pointShadowMap.value=G.state.pointShadowMap,et.pointShadowMatrix.value=G.state.pointShadowMatrix),se.currentProgram=lt,se.uniformsList=null,lt}function la(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Wl.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function pi(C,Y){const re=Ue.get(C);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function ua(C,Y,re,se,G){Y.isScene!==!0&&(Y=vt),b.resetTextureUnits();const we=Y.fog,Ne=se.isMeshStandardMaterial?Y.environment:null,Ge=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:eo,We=(se.isMeshStandardMaterial?Z:T).get(se.envMap||Ne),at=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Ct=!!re.morphAttributes.color;let Rt=yr;se.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Rt=R.toneMapping);const zt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Tt=zt!==void 0?zt.length:0,tt=Ue.get(se),Xt=_.state.lights;if(oe===!0&&(ye===!0||C!==w)){const Yt=C===w&&se.id===P;Te.setState(se,C,Yt)}let Et=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Xt.state.version||tt.outputColorSpace!==Ge||G.isBatchedMesh&&tt.batching===!1||!G.isBatchedMesh&&tt.batching===!0||G.isBatchedMesh&&tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&tt.instancing===!1||!G.isInstancedMesh&&tt.instancing===!0||G.isSkinnedMesh&&tt.skinning===!1||!G.isSkinnedMesh&&tt.skinning===!0||G.isInstancedMesh&&tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&tt.instancingMorph===!1&&G.morphTexture!==null||tt.envMap!==We||se.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Te.numPlanes||tt.numIntersection!==Te.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==lt||tt.morphTargets!==et||tt.morphNormals!==dt||tt.morphColors!==Ct||tt.toneMapping!==Rt||tt.morphTargetsCount!==Tt)&&(Et=!0):(Et=!0,tt.__version=se.version);let un=tt.currentProgram;Et===!0&&(un=is(se,Y,G));let ti=!1,Tn=!1,Ar=!1;const Dt=un.getUniforms(),wn=tt.uniforms;if(Re.useProgram(un.program)&&(ti=!0,Tn=!0,Ar=!0),se.id!==P&&(P=se.id,Tn=!0),ti||w!==C){Re.buffers.depth.getReversed()?(pe.copy(C.projectionMatrix),Mx(pe),Ex(pe),Dt.setValue(N,"projectionMatrix",pe)):Dt.setValue(N,"projectionMatrix",C.projectionMatrix),Dt.setValue(N,"viewMatrix",C.matrixWorldInverse);const mn=Dt.map.cameraPosition;mn!==void 0&&mn.setValue(N,Be.setFromMatrixPosition(C.matrixWorld)),Ve.logarithmicDepthBuffer&&Dt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Dt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Tn=!0,Ar=!0)}if(G.isSkinnedMesh){Dt.setOptional(N,G,"bindMatrix"),Dt.setOptional(N,G,"bindMatrixInverse");const Yt=G.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Dt.setValue(N,"boneTexture",Yt.boneTexture,b))}G.isBatchedMesh&&(Dt.setOptional(N,G,"batchingTexture"),Dt.setValue(N,"batchingTexture",G._matricesTexture,b),Dt.setOptional(N,G,"batchingIdTexture"),Dt.setValue(N,"batchingIdTexture",G._indirectTexture,b),Dt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Dt.setValue(N,"batchingColorTexture",G._colorsTexture,b));const pn=re.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ot.update(G,re,un),(Tn||tt.receiveShadow!==G.receiveShadow)&&(tt.receiveShadow=G.receiveShadow,Dt.setValue(N,"receiveShadow",G.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(wn.envMap.value=We,wn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),Tn&&(Dt.setValue(N,"toneMappingExposure",R.toneMappingExposure),tt.needsLights&&ca(wn,Ar),we&&se.fog===!0&&be.refreshFogUniforms(wn,we),be.refreshMaterialUniforms(wn,se,H,ce,_.state.transmissionRenderTarget[C.id]),Wl.upload(N,la(tt),wn,b)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Wl.upload(N,la(tt),wn,b),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Dt.setValue(N,"center",G.center),Dt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Dt.setValue(N,"normalMatrix",G.normalMatrix),Dt.setValue(N,"modelMatrix",G.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Yt=se.uniformsGroups;for(let mn=0,Cr=Yt.length;mn<Cr;mn++){const St=Yt[mn];X.update(St,un),X.bind(St,un)}}return un}function ca(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Zl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Y,re){Ue.get(C.texture).__webglTexture=Y,Ue.get(C.depthTexture).__webglTexture=re;const se=Ue.get(C);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Y){const re=Ue.get(C);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,re=0){B=C,D=Y,U=re;let se=!0,G=null,we=!1,Ne=!1;if(C){const We=Ue.get(C);if(We.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(N.FRAMEBUFFER,null),se=!1;else if(We.__webglFramebuffer===void 0)b.setupRenderTarget(C);else if(We.__hasExternalTextures)b.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(We.__boundDepthTexture!==et){if(et!==null&&Ue.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ne=!0);const lt=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?G=lt[Y][re]:G=lt[Y],we=!0):C.samples>0&&b.useMultisampledRTT(C)===!1?G=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?G=lt[re]:G=lt,z.copy(C.viewport),ee.copy(C.scissor),q=C.scissorTest}else z.copy(F).multiplyScalar(H).floor(),ee.copy(te).multiplyScalar(H).floor(),q=Fe;if(Re.bindFramebuffer(N.FRAMEBUFFER,G)&&se&&Re.drawBuffers(C,G),Re.viewport(z),Re.scissor(ee),Re.setScissorTest(q),we){const We=Ue.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Y,We.__webglTexture,re)}else if(Ne){const We=Ue.get(C.texture),at=Y||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,re||0,at)}P=-1},this.readRenderTargetPixels=function(C,Y,re,se,G,we,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){Re.bindFramebuffer(N.FRAMEBUFFER,Ge);try{const We=C.texture,at=We.format,lt=We.type;if(!Ve.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-se&&re>=0&&re<=C.height-G&&N.readPixels(Y,re,se,G,ct.convert(at),ct.convert(lt),we)}finally{const We=B!==null?Ue.get(B).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,Y,re,se,G,we,Ne){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){const We=C.texture,at=We.format,lt=We.type;if(!Ve.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=C.width-se&&re>=0&&re<=C.height-G){Re.bindFramebuffer(N.FRAMEBUFFER,Ge);const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,we.byteLength,N.STREAM_READ),N.readPixels(Y,re,se,G,ct.convert(at),ct.convert(lt),0);const dt=B!==null?Ue.get(B).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,dt);const Ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Sx(N,Ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,we),N.deleteBuffer(et),N.deleteSync(Ct),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Y=null,re=0){C.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1]);const se=Math.pow(2,-re),G=Math.floor(C.image.width*se),we=Math.floor(C.image.height*se),Ne=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;b.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,re,0,0,Ne,Ge,G,we),Re.unbindTexture()};const fa=N.createFramebuffer(),da=N.createFramebuffer();this.copyTextureToTexture=function(C,Y,re=null,se=null,G=0,we=null){C.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,C=arguments[1],Y=arguments[2],we=arguments[3]||0,re=null),we===null&&(G!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=G,G=0):we=0);let Ne,Ge,We,at,lt,et,dt,Ct,Rt;const zt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(re!==null)Ne=re.max.x-re.min.x,Ge=re.max.y-re.min.y,We=re.isBox3?re.max.z-re.min.z:1,at=re.min.x,lt=re.min.y,et=re.isBox3?re.min.z:0;else{const pn=Math.pow(2,-G);Ne=Math.floor(zt.width*pn),Ge=Math.floor(zt.height*pn),C.isDataArrayTexture?We=zt.depth:C.isData3DTexture?We=Math.floor(zt.depth*pn):We=1,at=0,lt=0,et=0}se!==null?(dt=se.x,Ct=se.y,Rt=se.z):(dt=0,Ct=0,Rt=0);const Tt=ct.convert(Y.format),tt=ct.convert(Y.type);let Xt;Y.isData3DTexture?(b.setTexture3D(Y,0),Xt=N.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Xt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment);const Et=N.getParameter(N.UNPACK_ROW_LENGTH),un=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ti=N.getParameter(N.UNPACK_SKIP_PIXELS),Tn=N.getParameter(N.UNPACK_SKIP_ROWS),Ar=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,zt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,zt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,at),N.pixelStorei(N.UNPACK_SKIP_ROWS,lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,et);const Dt=C.isDataArrayTexture||C.isData3DTexture,wn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const pn=Ue.get(C),Yt=Ue.get(Y),mn=Ue.get(pn.__renderTarget),Cr=Ue.get(Yt.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,mn.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let St=0;St<We;St++)Dt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(C).__webglTexture,G,et+St),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.get(Y).__webglTexture,we,Rt+St)),N.blitFramebuffer(at,lt,Ne,Ge,dt,Ct,Ne,Ge,N.DEPTH_BUFFER_BIT,N.NEAREST);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||Ue.has(C)){const pn=Ue.get(C),Yt=Ue.get(Y);Re.bindFramebuffer(N.READ_FRAMEBUFFER,fa),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,da);for(let mn=0;mn<We;mn++)Dt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pn.__webglTexture,G,et+mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pn.__webglTexture,G),wn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Yt.__webglTexture,we,Rt+mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Yt.__webglTexture,we),G!==0?N.blitFramebuffer(at,lt,Ne,Ge,dt,Ct,Ne,Ge,N.COLOR_BUFFER_BIT,N.NEAREST):wn?N.copyTexSubImage3D(Xt,we,dt,Ct,Rt+mn,at,lt,Ne,Ge):N.copyTexSubImage2D(Xt,we,dt,Ct,at,lt,Ne,Ge);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else wn?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(Xt,we,dt,Ct,Rt,Ne,Ge,We,Tt,tt,zt.data):Y.isCompressedArrayTexture?N.compressedTexSubImage3D(Xt,we,dt,Ct,Rt,Ne,Ge,We,Tt,zt.data):N.texSubImage3D(Xt,we,dt,Ct,Rt,Ne,Ge,We,Tt,tt,zt):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,we,dt,Ct,Ne,Ge,Tt,tt,zt.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,we,dt,Ct,zt.width,zt.height,Tt,zt.data):N.texSubImage2D(N.TEXTURE_2D,we,dt,Ct,Ne,Ge,Tt,tt,zt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Et),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,un),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ti),N.pixelStorei(N.UNPACK_SKIP_ROWS,Tn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ar),we===0&&Y.generateMipmaps&&N.generateMipmap(Xt),Re.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,re=null,se=null,G=0){return C.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,C=arguments[2],Y=arguments[3],G=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,re,se,G)},this.initRenderTarget=function(C){Ue.get(C).__webglFramebuffer===void 0&&b.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Re.unbindTexture()},this.resetState=function(){D=0,U=0,B=null,Re.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const id=2.42,rd=5.24,df={front:{rotation:new Ln(0,0,0),camera:new j(0,.16,10.8)},hero:{rotation:new Ln(-.16,.42,-.06),camera:new j(3.2,1.8,11.8)},isometric:{rotation:new Ln(-.36,.64,-.08),camera:new j(4.5,2.8,12.2)},orbit:{rotation:new Ln(-.12,-.66,.04),camera:new j(-3.6,1.8,11.8)}};function sv(s,e,t){const r=-s/2,o=-e/2,l=new xd;return l.moveTo(r+t,o),l.lineTo(r+s-t,o),l.quadraticCurveTo(r+s,o,r+s,o+t),l.lineTo(r+s,o+e-t),l.quadraticCurveTo(r+s,o+e,r+s-t,o+e),l.lineTo(r+t,o+e),l.quadraticCurveTo(r,o+e,r,o+e-t),l.lineTo(r,o+t),l.quadraticCurveTo(r,o,r+t,o),l}function cg(s,e,t,r){const o=new yd(sv(s,e,r),{depth:t,bevelEnabled:!0,bevelSegments:9,bevelSize:.05,bevelThickness:.035,curveSegments:18});return o.center(),o}function jr(s,e,t){const r=new Sd(sv(s,e,t),24),o=r.attributes.position,l=[];for(let c=0;c<o.count;c+=1){const f=o.getX(c),h=o.getY(c);l.push((f+s/2)/s,(h+e/2)/e)}return r.setAttribute("uv",new Mn(l,2)),r}function ov(){const s=document.createElement("canvas");s.width=900,s.height=1950;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,900,1950);t.addColorStop(0,"#0f172a"),t.addColorStop(.54,"#0e7490"),t.addColorStop(1,"#e2e8f0"),e.fillStyle=t,e.fillRect(0,0,900,1950),e.fillStyle="rgba(255, 255, 255, 0.18)";for(let o=0;o<6;o+=1)e.beginPath(),e.roundRect(90,520+o*170,720,116,34),e.fill();e.fillStyle="#ffffff",e.font="700 72px Inter, system-ui, sans-serif",e.fillText("Mockup",96,330),e.font="500 34px Inter, system-ui, sans-serif",e.fillText("Drop in an image or video",96,392),e.fillStyle="rgba(255, 255, 255, 0.9)",e.beginPath(),e.roundRect(96,1560,708,180,44),e.fill(),e.fillStyle="#0f172a",e.font="700 42px Inter, system-ui, sans-serif",e.fillText("Ready to render",146,1660);const r=new Kx(s);return r.colorSpace=bn,r.anisotropy=8,r}function CT(s,e,t){const r=id/rd,o=e/t;if(s.wrapS=Bi,s.wrapT=Bi,s.offset.set(0,0),s.repeat.set(1,1),o>r){const l=r/o;s.repeat.x=l,s.offset.x=(1-l)/2}else{const l=o/r;s.repeat.y=l,s.offset.y=(1-l)/2}s.colorSpace=bn,s.anisotropy=12,s.needsUpdate=!0}function RT(){const s=new Xo,e=new zs({color:"#161a20",clearcoat:.92,clearcoatRoughness:.22,metalness:.82,roughness:.2}),t=new zs({color:"#2d343d",clearcoat:.72,clearcoatRoughness:.18,metalness:.88,roughness:.18}),r=new zs({color:"#05070b",clearcoat:1,clearcoatRoughness:.045,metalness:0,roughness:.08}),o=new zs({color:"#ffffff",transparent:!0,opacity:.16,clearcoat:1,clearcoatRoughness:.04,metalness:0,roughness:.05}),l=new $t(cg(2.82,5.78,.32,.44),e);l.castShadow=!0,l.receiveShadow=!0,s.add(l);const c=new $t(jr(2.62,5.5,.34),r);c.position.z=.224,c.castShadow=!0;const f=new $t(jr(2.74,5.66,.4),t);f.position.z=.218,f.castShadow=!0,s.add(f),s.add(c);const h=new Gs({map:ov()}),p=new $t(jr(id,rd,.27),h);p.position.z=.236,p.castShadow=!1,s.add(p);const g=new $t(jr(id,rd,.27),o);g.position.z=.245,s.add(g);const v=new zs({color:"#020306",clearcoat:1,clearcoatRoughness:.03,metalness:0,roughness:.04}),x=new $t(cg(.66,.19,.035,.095),v);x.position.set(0,2.36,.272),x.castShadow=!0,s.add(x);const S=new zs({color:"#070a0f",clearcoat:1,clearcoatRoughness:.02,roughness:.1,metalness:.08}),M=new $t(new _d(.038,.038,.014,36),S);M.rotation.x=Math.PI/2,M.position.set(.22,2.36,.294),s.add(M);const A=new $t(jr(.34,.032,.016),new Gs({color:"#1b222c",transparent:!0,opacity:.86}));A.position.set(-.08,2.36,.296),s.add(A);const y=new $t(jr(.58,.035,.017),new Gs({color:"#ffffff",transparent:!0,opacity:.76}));y.position.set(0,-2.34,.278),s.add(y);const _=new $t(jr(.08,4.4,.04),new Gs({color:"#ffffff",transparent:!0,opacity:.14}));_.position.set(-.94,.12,.282),_.rotation.z=-.08,s.add(_);const O=t.clone();return[[-1.45,1.45,.22],[-1.45,.86,.34],[-1.45,.38,.34],[1.45,.78,.48]].forEach(([L,R,k])=>{const D=new $t(new ro(.045,k,.072),O);D.position.set(L,R,.015),D.castShadow=!0,s.add(D)}),{group:s,materials:{body:e,edge:t,glass:o,screen:h}}}const PT=yt.forwardRef(function({screenMedia:e,settings:t,onDragStart:r,onDragEnd:o,onMediaError:l,onMediaReady:c,onPlaybackStateChange:f},h){const p=yt.useRef(null),g=yt.useRef(null),v=yt.useRef(null),x=yt.useRef(null),S=yt.useRef(null),M=yt.useRef(null),A=yt.useRef(null),y=yt.useRef(null),_=yt.useRef(new Ln),O=yt.useRef(new j),L=yt.useRef(t),R=yt.useRef({active:!1,x:0,y:0});return yt.useImperativeHandle(h,()=>({exportPng(){return!g.current||!v.current||!x.current?null:(g.current.render(v.current,x.current),g.current.domElement.toDataURL("image/png"))},resetView(){const k=df[L.current.angle];_.current.copy(k.rotation),O.current.copy(k.camera)}})),yt.useEffect(()=>{L.current=t},[t]),yt.useEffect(()=>{const k=p.current,D=new AT({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),U=new Yx,B=new Yn(34,1,.1,100),{group:P,materials:w}=RT(),z=new zy("#ffffff","#a8b8c6",1.8),ee=new km("#ffffff",4.6),q=new km("#bdefff",2.2),ne=new Vy("#ffffff",1.2,12),ue=new Ly({color:"#1f2937",opacity:.18}),J=new $t(new oa(14,14),ue);D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.outputColorSpace=bn,D.toneMapping=yg,D.toneMappingExposure=1.08,D.shadowMap.enabled=!0,D.shadowMap.type=_g,D.domElement.className="render-canvas",D.domElement.setAttribute("aria-label","3D device render"),k.appendChild(D.domElement),ee.position.set(3.8,4.8,4.8),ee.castShadow=!0,ee.shadow.mapSize.set(2048,2048),q.position.set(-4.2,2.6,3.4),ne.position.set(0,2.2,4.5),J.rotation.x=-Math.PI/2,J.position.y=-2.74,J.receiveShadow=!0,P.position.y=.02,P.scale.setScalar(.9),U.add(z,ee,q,ne,P,J);const ce=df[t.angle];P.rotation.copy(ce.rotation),B.position.copy(ce.camera),_.current.copy(ce.rotation),O.current.copy(ce.camera),B.lookAt(0,0,0),g.current=D,v.current=U,x.current=B,S.current=P,M.current=w,A.current={ambient:z,key:ee,rim:q,fill:ne},y.current=J;const H=()=>{const oe=k.clientWidth,ye=k.clientHeight;D.setSize(oe,ye,!1),B.aspect=oe/ye,B.updateProjectionMatrix()},fe=new ResizeObserver(H);fe.observe(k),H();const ae=oe=>{R.current={active:!0,x:oe.clientX,y:oe.clientY},D.domElement.setPointerCapture(oe.pointerId),r==null||r()},F=oe=>{if(!R.current.active)return;const ye=oe.clientX-R.current.x,pe=oe.clientY-R.current.y;R.current.x=oe.clientX,R.current.y=oe.clientY,_.current.y+=ye*.009,_.current.x=xx.clamp(_.current.x+pe*.006,-.82,.52)},te=oe=>{R.current.active=!1,D.domElement.releasePointerCapture(oe.pointerId),o==null||o()};D.domElement.addEventListener("pointerdown",ae),D.domElement.addEventListener("pointermove",F),D.domElement.addEventListener("pointerup",te),D.domElement.addEventListener("pointercancel",te),D.domElement.style.touchAction="none";let Fe=0;const Q=()=>{L.current.autoSpin&&!R.current.active&&(_.current.y+=.006),P.rotation.x+=(_.current.x-P.rotation.x)*.08,P.rotation.y+=(_.current.y-P.rotation.y)*.08,P.rotation.z+=(_.current.z-P.rotation.z)*.08,B.position.lerp(O.current,.045),B.lookAt(0,0,0),D.render(U,B),Fe=window.requestAnimationFrame(Q)};return Q(),()=>{window.cancelAnimationFrame(Fe),fe.disconnect(),D.domElement.removeEventListener("pointerdown",ae),D.domElement.removeEventListener("pointermove",F),D.domElement.removeEventListener("pointerup",te),D.domElement.removeEventListener("pointercancel",te),k.removeChild(D.domElement),D.dispose(),U.traverse(oe=>{oe.geometry&&oe.geometry.dispose(),oe.material&&(Array.isArray(oe.material)?oe.material:[oe.material]).forEach(pe=>{pe.map&&pe.map.dispose(),pe.dispose()})})}},[o,r]),yt.useEffect(()=>{const k=df[t.angle];_.current.copy(k.rotation);const D=(t.depth-50)/100;O.current.copy(k.camera).multiplyScalar(1-D*.08)},[t.angle,t.depth]),yt.useEffect(()=>{const k=M.current,D=A.current,U=v.current,B=g.current,P=y.current;if(!k||!D||!U||!B||!P)return;const w=gg.find(q=>q.id===t.material),z=hf.find(q=>q.id===t.background)??hf[0];k.body.color.set(w.body),k.body.metalness=w.metalness,k.body.roughness=w.roughness,k.edge.color.set(w.edge),k.glass.opacity=.1+t.reflection/420,k.glass.clearcoatRoughness=Math.max(.02,.18-t.reflection/700),D.key.intensity=1.5+t.lighting/18,D.rim.intensity=.4+t.reflection/34,D.fill.intensity=.55+t.lighting/110,P.material.opacity=.06+t.shadow/320,P.material.needsUpdate=!0;const ee=new Mt(z.clear);U.background=ee,B.setClearColor(ee,1)},[t.background,t.lighting,t.material,t.reflection,t.shadow]),yt.useEffect(()=>{var q;const k=(q=M.current)==null?void 0:q.screen;if(!k)return;let D=!1,U=null;const B=(ne,ue,J)=>{if(D){ne.dispose();return}CT(ne,ue,J),ne.minFilter=zn,ne.magFilter=zn,k.map&&k.map.dispose(),k.map=ne,k.needsUpdate=!0};if(!e)return B(ov(),900,1950),c==null||c(),()=>{D=!0};if(e.kind==="image")return new ky().load(e.url,ue=>{const J=ue.image;B(ue,J.naturalWidth||J.width,J.naturalHeight||J.height),c==null||c()},void 0,()=>l==null?void 0:l()),()=>{D=!0};U=document.createElement("video"),U.src=e.url,U.crossOrigin="anonymous",U.loop=!0,U.muted=!0,U.playsInline=!0,U.autoplay=!0,U.preload="auto";const P=()=>{const ne=U.videoWidth||1080,ue=U.videoHeight||1920,J=new Zx(U);J.generateMipmaps=!1,B(J,ne,ue),U.play().catch(()=>{f==null||f("paused")})},w=()=>f==null?void 0:f("playing"),z=()=>{D||f==null||f("paused")},ee=()=>l==null?void 0:l();return U.addEventListener("loadedmetadata",P,{once:!0}),U.addEventListener("playing",w),U.addEventListener("pause",z),U.addEventListener("error",ee),U.load(),()=>{D=!0,U.removeEventListener("loadedmetadata",P),U.removeEventListener("playing",w),U.removeEventListener("pause",z),U.removeEventListener("error",ee),U.pause(),U.removeAttribute("src"),U.load()}},[l,c,f,e]),Se.jsx("div",{className:"viewport-host","data-screen-kind":(e==null?void 0:e.kind)??"default",ref:p})});function bT({screenLabel:s,statusLabel:e,onUpload:t,onExport:r,onReset:o,fileInputRef:l}){return Se.jsxs("header",{className:"topbar",children:[Se.jsxs("div",{className:"brand",children:[Se.jsx("div",{className:"brand-mark","aria-hidden":"true",children:Se.jsx(e_,{size:18,strokeWidth:2.2})}),Se.jsxs("div",{children:[Se.jsx("strong",{children:"Device Render Studio"}),Se.jsx("span",{children:s})]})]}),Se.jsxs("div",{className:"toolbar-center","aria-label":"Scene tools",children:[Se.jsxs("button",{className:"icon-button",type:"button",onClick:o,children:[Se.jsx(c_,{size:17}),Se.jsx("span",{children:"Reset"})]}),Se.jsx("div",{className:"toolbar-divider"}),Se.jsxs("span",{className:"status-pill",children:[Se.jsx(h_,{size:15}),e]}),Se.jsxs("span",{className:"status-pill subtle",children:[Se.jsx(l_,{size:15}),"Scene"]})]}),Se.jsxs("div",{className:"toolbar-actions",children:[Se.jsx("input",{ref:l,className:"visually-hidden",type:"file",accept:"image/*,video/*",onChange:t}),Se.jsxs("button",{className:"button secondary",type:"button",onClick:()=>{var c;return(c=l.current)==null?void 0:c.click()},children:[Se.jsx(i_,{size:17}),"Import"]}),Se.jsxs("button",{className:"button primary",type:"button",onClick:r,children:[Se.jsx(pg,{size:17}),"Export PNG"]})]})]})}function LT({activeAngle:s,renderMode:e,onPreset:t}){const r=e==="video"?p_:r_;return Se.jsxs("div",{className:"preset-rail","aria-label":"Angle presets",children:[Se.jsxs("div",{className:"rail-status",children:[Se.jsx("span",{className:"ready-dot"}),Se.jsxs("div",{children:[Se.jsx("strong",{children:"Ready"}),Se.jsx("span",{children:"Realtime preview"})]})]}),Se.jsx("div",{className:"preset-list",children:mg.map(o=>Se.jsxs("button",{type:"button",className:o.id===s?"preset-tile selected":"preset-tile",onClick:()=>t(o.id),children:[Se.jsx("span",{className:"preset-glyph",children:Se.jsx(hg,{size:16})}),Se.jsx("span",{children:o.label})]},o.id))}),Se.jsxs("div",{className:"rail-meta",children:[Se.jsxs("span",{children:[Se.jsx(r,{size:15}),e==="video"?"Video":"Image"]}),Se.jsxs("span",{children:[Se.jsx(pg,{size:15}),"PNG"]})]})]})}function DT(s,e){return s?s.kind==="image"?"Image ready":e==="playing"?"Video playing":e==="error"?"Video issue":e==="paused"?"Video paused":"Video loading":"Ready"}function NT(){const[s,e]=yt.useState(null),[t,r]=yt.useState("Demo screen"),[o,l]=yt.useState("ready"),[c,f]=yt.useState(nm),[h,p]=yt.useState(!1),g=yt.useRef(null),v=yt.useRef(null),x=(k,D)=>{f(U=>({...U,[k]:D}))};yt.useEffect(()=>()=>{var k;(k=s==null?void 0:s.url)!=null&&k.startsWith("blob:")&&URL.revokeObjectURL(s.url)},[s]);const S=k=>{var B;const D=(B=k.target.files)==null?void 0:B[0];if(!D)return;const U=D.type.startsWith("video/")?"video":D.type.startsWith("image/")?"image":null;if(!U){k.target.value="";return}e({kind:U,mimeType:D.type,name:D.name,url:URL.createObjectURL(D)}),r(D.name),l(U==="video"?"loading":"ready"),k.target.value=""},M=yt.useCallback(()=>{l("ready")},[]),A=yt.useCallback(()=>{l("error")},[]),y=yt.useCallback(k=>{l(k)},[]),_=yt.useCallback(()=>{p(!0)},[]),O=yt.useCallback(()=>{p(!1)},[]),L=()=>{var U;const k=(U=v.current)==null?void 0:U.exportPng();if(!k)return;const D=document.createElement("a");D.href=k,D.download="device-render-studio.png",document.body.appendChild(D),D.click(),D.remove()},R=()=>{var k;f(nm),(k=v.current)==null||k.resetView()};return Se.jsxs("main",{className:"app",children:[Se.jsx(bT,{screenLabel:t,statusLabel:DT(s,o),onUpload:S,onExport:L,onReset:R,fileInputRef:g}),Se.jsxs("div",{className:"workspace",children:[Se.jsxs("section",{className:"stage-area","aria-label":"3D render workspace",children:[Se.jsxs("div",{className:"viewport-shell",children:[Se.jsx(PT,{ref:v,screenMedia:s,settings:c,onDragStart:_,onDragEnd:O,onMediaError:A,onMediaReady:M,onPlaybackStateChange:y}),Se.jsxs("div",{className:"canvas-hud top-left",children:[Se.jsx(t_,{size:15}),Se.jsx("span",{children:"Scene"})]}),Se.jsxs("div",{className:h?"canvas-hud bottom-left active":"canvas-hud bottom-left",children:[Se.jsx(o_,{size:15}),Se.jsx("span",{children:h?"Orbiting":"Drag to orbit"})]})]}),Se.jsx(LT,{activeAngle:c.angle,renderMode:(s==null?void 0:s.kind)??"image",onPreset:k=>x("angle",k)})]}),Se.jsx(v_,{settings:c,onSettingChange:x})]})]})}const UT=q0.createRoot(document.getElementById("root"));$0.flushSync(()=>{UT.render(Se.jsx(G0.StrictMode,{children:Se.jsx(NT,{})}))});
