(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function z0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wc={exports:{}},Io={},Ac={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function B0(){if(Yp)return xt;Yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function y(I,q,De){this.props=I,this.context=q,this.refs=w,this.updater=De||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,q,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(I,q,De){this.props=I,this.context=q,this.refs=w,this.updater=De||S}var P=N.prototype=new _;P.constructor=N,M(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function B(I,q,De){var K,de={},Te=null,me=null;if(q!=null)for(K in q.ref!==void 0&&(me=q.ref),q.key!==void 0&&(Te=""+q.key),q)V.call(q,K)&&!F.hasOwnProperty(K)&&(de[K]=q[K]);var Pe=arguments.length-2;if(Pe===1)de.children=De;else if(1<Pe){for(var Be=Array(Pe),Ke=0;Ke<Pe;Ke++)Be[Ke]=arguments[Ke+2];de.children=Be}if(I&&I.defaultProps)for(K in Pe=I.defaultProps,Pe)de[K]===void 0&&(de[K]=Pe[K]);return{$$typeof:s,type:I,key:Te,ref:me,props:de,_owner:O.current}}function b(I,q){return{$$typeof:s,type:I.type,key:q,ref:I.ref,props:I.props,_owner:I._owner}}function A(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function k(I){var q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return q[De]})}var ne=/\/+/g;function $(I,q){return typeof I=="object"&&I!==null&&I.key!=null?k(""+I.key):q.toString(36)}function se(I,q,De,K,de){var Te=typeof I;(Te==="undefined"||Te==="boolean")&&(I=null);var me=!1;if(I===null)me=!0;else switch(Te){case"string":case"number":me=!0;break;case"object":switch(I.$$typeof){case s:case e:me=!0}}if(me)return me=I,de=de(me),I=K===""?"."+$(me,0):K,R(de)?(De="",I!=null&&(De=I.replace(ne,"$&/")+"/"),se(de,q,De,"",function(Ke){return Ke})):de!=null&&(A(de)&&(de=b(de,De+(!de.key||me&&me.key===de.key?"":(""+de.key).replace(ne,"$&/")+"/")+I)),q.push(de)),1;if(me=0,K=K===""?".":K+":",R(I))for(var Pe=0;Pe<I.length;Pe++){Te=I[Pe];var Be=K+$(Te,Pe);me+=se(Te,q,De,Be,de)}else if(Be=x(I),typeof Be=="function")for(I=Be.call(I),Pe=0;!(Te=I.next()).done;)Te=Te.value,Be=K+$(Te,Pe++),me+=se(Te,q,De,Be,de);else if(Te==="object")throw q=String(I),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return me}function ce(I,q,De){if(I==null)return I;var K=[],de=0;return se(I,K,"","",function(Te){return q.call(De,Te,de++)}),K}function re(I){if(I._status===-1){var q=I._result;q=q(),q.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=q)}if(I._status===1)return I._result.default;throw I._result}var ue={current:null},H={transition:null},le={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ce,forEach:function(I,q,De){ce(I,function(){q.apply(this,arguments)},De)},count:function(I){var q=0;return ce(I,function(){q++}),q},toArray:function(I){return ce(I,function(q){return q})||[]},only:function(I){if(!A(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},xt.Component=y,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=N,xt.StrictMode=r,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,xt.act=oe,xt.cloneElement=function(I,q,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var K=M({},I.props),de=I.key,Te=I.ref,me=I._owner;if(q!=null){if(q.ref!==void 0&&(Te=q.ref,me=O.current),q.key!==void 0&&(de=""+q.key),I.type&&I.type.defaultProps)var Pe=I.type.defaultProps;for(Be in q)V.call(q,Be)&&!F.hasOwnProperty(Be)&&(K[Be]=q[Be]===void 0&&Pe!==void 0?Pe[Be]:q[Be])}var Be=arguments.length-2;if(Be===1)K.children=De;else if(1<Be){Pe=Array(Be);for(var Ke=0;Ke<Be;Ke++)Pe[Ke]=arguments[Ke+2];K.children=Pe}return{$$typeof:s,type:I.type,key:de,ref:Te,props:K,_owner:me}},xt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},xt.createElement=B,xt.createFactory=function(I){var q=B.bind(null,I);return q.type=I,q},xt.createRef=function(){return{current:null}},xt.forwardRef=function(I){return{$$typeof:f,render:I}},xt.isValidElement=A,xt.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:re}},xt.memo=function(I,q){return{$$typeof:p,type:I,compare:q===void 0?null:q}},xt.startTransition=function(I){var q=H.transition;H.transition={};try{I()}finally{H.transition=q}},xt.unstable_act=oe,xt.useCallback=function(I,q){return ue.current.useCallback(I,q)},xt.useContext=function(I){return ue.current.useContext(I)},xt.useDebugValue=function(){},xt.useDeferredValue=function(I){return ue.current.useDeferredValue(I)},xt.useEffect=function(I,q){return ue.current.useEffect(I,q)},xt.useId=function(){return ue.current.useId()},xt.useImperativeHandle=function(I,q,De){return ue.current.useImperativeHandle(I,q,De)},xt.useInsertionEffect=function(I,q){return ue.current.useInsertionEffect(I,q)},xt.useLayoutEffect=function(I,q){return ue.current.useLayoutEffect(I,q)},xt.useMemo=function(I,q){return ue.current.useMemo(I,q)},xt.useReducer=function(I,q,De){return ue.current.useReducer(I,q,De)},xt.useRef=function(I){return ue.current.useRef(I)},xt.useState=function(I){return ue.current.useState(I)},xt.useSyncExternalStore=function(I,q,De){return ue.current.useSyncExternalStore(I,q,De)},xt.useTransition=function(){return ue.current.useTransition()},xt.version="18.3.1",xt}var qp;function rd(){return qp||(qp=1,Ac.exports=B0()),Ac.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function H0(){if($p)return Io;$p=1;var s=rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:o.current}}return Io.Fragment=t,Io.jsx=c,Io.jsxs=c,Io}var Zp;function V0(){return Zp||(Zp=1,wc.exports=H0()),wc.exports}var ye=V0(),bt=rd();const G0=z0(bt);var fl={},Cc={exports:{}},kn={},Rc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function W0(){return Kp||(Kp=1,(function(s){function e(H,le){var oe=H.length;H.push(le);e:for(;0<oe;){var I=oe-1>>>1,q=H[I];if(0<o(q,le))H[I]=le,H[oe]=q,oe=I;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],oe=H.pop();if(oe!==le){H[0]=oe;e:for(var I=0,q=H.length,De=q>>>1;I<De;){var K=2*(I+1)-1,de=H[K],Te=K+1,me=H[Te];if(0>o(de,oe))Te<q&&0>o(me,de)?(H[I]=me,H[Te]=oe,I=Te):(H[I]=de,H[K]=oe,I=K);else if(Te<q&&0>o(me,oe))H[I]=me,H[Te]=oe,I=Te;else break e}}return le}function o(H,le){var oe=H.sortIndex-le.sortIndex;return oe!==0?oe:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,x=3,S=!1,M=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=H)r(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function R(H){if(w=!1,P(H),!M)if(t(h)!==null)M=!0,re(V);else{var le=t(p);le!==null&&ue(R,le.startTime-H)}}function V(H,le){M=!1,w&&(w=!1,_(B),B=-1),S=!0;var oe=x;try{for(P(le),v=t(h);v!==null&&(!(v.expirationTime>le)||H&&!k());){var I=v.callback;if(typeof I=="function"){v.callback=null,x=v.priorityLevel;var q=I(v.expirationTime<=le);le=s.unstable_now(),typeof q=="function"?v.callback=q:v===t(h)&&r(h),P(le)}else r(h);v=t(h)}if(v!==null)var De=!0;else{var K=t(p);K!==null&&ue(R,K.startTime-le),De=!1}return De}finally{v=null,x=oe,S=!1}}var O=!1,F=null,B=-1,b=5,A=-1;function k(){return!(s.unstable_now()-A<b)}function ne(){if(F!==null){var H=s.unstable_now();A=H;var le=!0;try{le=F(!0,H)}finally{le?$():(O=!1,F=null)}}else O=!1}var $;if(typeof N=="function")$=function(){N(ne)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=ne,$=function(){ce.postMessage(null)}}else $=function(){y(ne,0)};function re(H){F=H,O||(O=!0,$())}function ue(H,le){B=y(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,re(V))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var oe=x;x=le;try{return H()}finally{x=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=x;x=H;try{return le()}finally{x=oe}},s.unstable_scheduleCallback=function(H,le,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,H){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=oe+q,H={id:g++,callback:le,priorityLevel:H,startTime:oe,expirationTime:q,sortIndex:-1},oe>I?(H.sortIndex=oe,e(p,H),t(h)===null&&H===t(p)&&(w?(_(B),B=-1):w=!0,ue(R,oe-I))):(H.sortIndex=q,e(h,H),M||S||(M=!0,re(V))),H},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(H){var le=x;return function(){var oe=x;x=le;try{return H.apply(this,arguments)}finally{x=oe}}}})(Pc)),Pc}var Jp;function X0(){return Jp||(Jp=1,Rc.exports=W0()),Rc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function j0(){if(Qp)return kn;Qp=1;var s=rd(),e=X0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,N);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,N);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,N);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,I;function q(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var De=!1;function K(n,i){if(!n||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var z=`
`+d[E].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=E&&0<=U);break}}}finally{De=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function de(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=K(n.type,!1),n;case 11:return n=K(n.type.render,!1),n;case 1:return n=K(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case O:return"Portal";case b:return"Profiler";case B:return"StrictMode";case $:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function vt(n){n._valueTracker||(n._valueTracker=Ke(n))}function ge(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Be(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ae(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function D(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Je(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Me(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function He(n,i){Me(n,i);var a=Pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?nt(n,i.type,a):i.hasOwnProperty("defaultValue")&&nt(n,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Re(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function nt(n,i,a){(i!=="number"||Ae(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ie=Array.isArray;function L(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ie(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Pe(a)}}function fe(n,i){var a=Pe(i.value),u=Pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ht(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function it(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function ot(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=it(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ye=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,i){if(i){if(Ye[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ct(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ne=null,ae=null,pe=null;function ke(n){if(n=yo(n)){if(typeof Ne!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Aa(i),Ne(n.stateNode,n.type,i))}}function Oe(n){ae?pe?pe.push(n):pe=[n]:ae=n}function ft(){if(ae){var n=ae,i=pe;if(pe=ae=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function Ft(n,i){return n(i)}function Kt(){}var Tt=!1;function Dn(n,i,a){if(Tt)return n(i,a);Tt=!0;try{return Ft(n,i,a)}finally{Tt=!1,(ae!==null||pe!==null)&&(Kt(),ft())}}function En(n,i){var a=n.stateNode;if(a===null)return null;var u=Aa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ts=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{ts=!1}function Ei(n,i,a,u,d,m,E,U,z){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(xe){this.onError(xe)}}var Ti=!1,Tr=null,wr=!1,ji=null,sa={onError:function(n){Ti=!0,Tr=n}};function ns(n,i,a,u,d,m,E,U,z){Ti=!1,Tr=null,Ei.apply(sa,arguments)}function oa(n,i,a,u,d,m,E,U,z){if(ns.apply(this,arguments),Ti){if(Ti){var ee=Tr;Ti=!1,Tr=null}else throw Error(t(198));wr||(wr=!0,ji=ee)}}function hi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function aa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function la(n){if(hi(n)!==n)throw Error(t(188))}function ql(n){var i=n.alternate;if(!i){if(i=hi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return la(d),n;if(m===u)return la(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var E=!1,U=d.child;U;){if(U===a){E=!0,a=d,u=m;break}if(U===u){E=!0,u=d,a=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===a){E=!0,a=m,u=d;break}if(U===u){E=!0,u=m,a=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ua(n){return n=ql(n),n!==null?ca(n):null}function ca(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ca(n);if(i!==null)return i;n=n.sibling}return null}var C=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,te=e.unstable_shouldYield,ie=e.unstable_requestPaint,G=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Ue=e.unstable_ImmediatePriority,Ge=e.unstable_UserBlockingPriority,We=e.unstable_NormalPriority,at=e.unstable_LowPriority,lt=e.unstable_IdlePriority,et=null,dt=null;function At(n){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:tt,zt=Math.log,Et=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(zt(n)/Et|0)|0}var Xt=64,Mt=4194304;function an(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ei(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var U=E&~d;U!==0?u=an(U):(m&=E,m!==0&&(u=an(m)))}else E=a&~d,E!==0?u=an(E):m!==0&&(u=an(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ct(i),d=1<<a,u|=n[a],i&=~d;return u}function Tn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Ct(m),U=1<<E,z=d[E];z===-1?((U&a)===0||(U&u)!==0)&&(d[E]=Tn(U,i)):z<=i&&(n.expiredLanes|=U),m&=~U}}function Dt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wn(){var n=Xt;return Xt<<=1,(Xt&4194240)===0&&(Xt=64),n}function hn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Yt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ct(i),n[i]=a}function pn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ct(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function Cr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ct(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var yt=0;function wd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ad,$l,Cd,Rd,Pd,Zl=!1,fa=[],Yi=null,qi=null,$i=null,io=new Map,ro=new Map,Zi=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bd(n,i){switch(n){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=yo(i),i!==null&&$l(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function lv(n,i,a,u,d){switch(i){case"focusin":return Yi=so(Yi,n,i,a,u,d),!0;case"dragenter":return qi=so(qi,n,i,a,u,d),!0;case"mouseover":return $i=so($i,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return io.set(m,so(io.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,ro.set(m,so(ro.get(m)||null,n,i,a,u,d)),!0}return!1}function Ld(n){var i=Rr(n.target);if(i!==null){var a=hi(i);if(a!==null){if(i=a.tag,i===13){if(i=aa(a),i!==null){n.blockedOn=i,Pd(n.priority,function(){Cd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Jl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Lt=u,a.target.dispatchEvent(u),Lt=null}else return i=yo(a),i!==null&&$l(i),n.blockedOn=a,!1;i.shift()}return!0}function Dd(n,i,a){da(n)&&a.delete(i)}function uv(){Zl=!1,Yi!==null&&da(Yi)&&(Yi=null),qi!==null&&da(qi)&&(qi=null),$i!==null&&da($i)&&($i=null),io.forEach(Dd),ro.forEach(Dd)}function oo(n,i){n.blockedOn===i&&(n.blockedOn=null,Zl||(Zl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uv)))}function ao(n){function i(d){return oo(d,n)}if(0<fa.length){oo(fa[0],n);for(var a=1;a<fa.length;a++){var u=fa[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Yi!==null&&oo(Yi,n),qi!==null&&oo(qi,n),$i!==null&&oo($i,n),io.forEach(i),ro.forEach(i),a=0;a<Zi.length;a++)u=Zi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(a=Zi[0],a.blockedOn===null);)Ld(a),a.blockedOn===null&&Zi.shift()}var is=R.ReactCurrentBatchConfig,ha=!0;function cv(n,i,a,u){var d=yt,m=is.transition;is.transition=null;try{yt=1,Kl(n,i,a,u)}finally{yt=d,is.transition=m}}function fv(n,i,a,u){var d=yt,m=is.transition;is.transition=null;try{yt=4,Kl(n,i,a,u)}finally{yt=d,is.transition=m}}function Kl(n,i,a,u){if(ha){var d=Jl(n,i,a,u);if(d===null)mu(n,i,u,pa,a),bd(n,u);else if(lv(d,n,i,a,u))u.stopPropagation();else if(bd(n,u),i&4&&-1<av.indexOf(n)){for(;d!==null;){var m=yo(d);if(m!==null&&Ad(m),m=Jl(n,i,a,u),m===null&&mu(n,i,u,pa,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else mu(n,i,u,null,a)}}var pa=null;function Jl(n,i,a,u){if(pa=null,n=X(u),n=Rr(n),n!==null)if(i=hi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=aa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return pa=n,null}function Nd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Ue:return 1;case Ge:return 4;case We:case at:return 16;case lt:return 536870912;default:return 16}default:return 16}}var Ki=null,Ql=null,ma=null;function Ud(){if(ma)return ma;var n,i=Ql,a=i.length,u,d="value"in Ki?Ki.value:Ki.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(u=1;u<=E&&i[a-u]===d[m-u];u++);return ma=d.slice(n,1<u?1-u:void 0)}function ga(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function Id(){return!1}function Bn(n){function i(a,u,d,m,E){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?va:Id,this.isPropagationStopped=Id,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Bn(rs),lo=oe({},rs,{view:0,detail:0}),dv=Bn(lo),tu,nu,uo,_a=oe({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==uo&&(uo&&n.type==="mousemove"?(tu=n.screenX-uo.screenX,nu=n.screenY-uo.screenY):nu=tu=0,uo=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),Fd=Bn(_a),hv=oe({},_a,{dataTransfer:0}),pv=Bn(hv),mv=oe({},lo,{relatedTarget:0}),iu=Bn(mv),gv=oe({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Bn(gv),_v=oe({},rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xv=Bn(_v),yv=oe({},rs,{data:0}),Od=Bn(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ev[n])?!!i[n]:!1}function ru(){return Tv}var wv=oe({},lo,{key:function(n){if(n.key){var i=Sv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ga(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(n){return n.type==="keypress"?ga(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ga(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Av=Bn(wv),Cv=oe({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Bn(Cv),Rv=oe({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),Pv=Bn(Rv),bv=oe({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Bn(bv),Dv=oe({},_a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Bn(Dv),Uv=[9,13,27,32],su=f&&"CompositionEvent"in window,co=null;f&&"documentMode"in document&&(co=document.documentMode);var Iv=f&&"TextEvent"in window&&!co,zd=f&&(!su||co&&8<co&&11>=co),Bd=" ",Hd=!1;function Vd(n,i){switch(n){case"keyup":return Uv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ss=!1;function Fv(n,i){switch(n){case"compositionend":return Gd(i);case"keypress":return i.which!==32?null:(Hd=!0,Bd);case"textInput":return n=i.data,n===Bd&&Hd?null:n;default:return null}}function Ov(n,i){if(ss)return n==="compositionend"||!su&&Vd(n,i)?(n=Ud(),ma=Ql=Ki=null,ss=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zd&&i.locale!=="ko"?null:i.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!kv[n.type]:i==="textarea"}function Xd(n,i,a,u){Oe(u),i=Ea(i,"onChange"),0<i.length&&(a=new eu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var fo=null,ho=null;function zv(n){uh(n,0)}function xa(n){var i=cs(n);if(ge(i))return n}function Bv(n,i){if(n==="change")return i}var jd=!1;if(f){var ou;if(f){var au="oninput"in document;if(!au){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),au=typeof Yd.oninput=="function"}ou=au}else ou=!1;jd=ou&&(!document.documentMode||9<document.documentMode)}function qd(){fo&&(fo.detachEvent("onpropertychange",$d),ho=fo=null)}function $d(n){if(n.propertyName==="value"&&xa(ho)){var i=[];Xd(i,ho,n,X(n)),Dn(zv,i)}}function Hv(n,i,a){n==="focusin"?(qd(),fo=i,ho=a,fo.attachEvent("onpropertychange",$d)):n==="focusout"&&qd()}function Vv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xa(ho)}function Gv(n,i){if(n==="click")return xa(i)}function Wv(n,i){if(n==="input"||n==="change")return xa(i)}function Xv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ti=typeof Object.is=="function"?Object.is:Xv;function po(n,i){if(ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ti(n[d],i[d]))return!1}return!0}function Zd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kd(n,i){var a=Zd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zd(a)}}function Jd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Jd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Qd(){for(var n=window,i=Ae();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ae(n.document)}return i}function lu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function jv(n){var i=Qd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Jd(a.ownerDocument.documentElement,a)){if(u!==null&&lu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Kd(a,m);var E=Kd(a,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yv=f&&"documentMode"in document&&11>=document.documentMode,os=null,uu=null,mo=null,cu=!1;function eh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||os==null||os!==Ae(u)||(u=os,"selectionStart"in u&&lu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),mo&&po(mo,u)||(mo=u,u=Ea(uu,"onSelect"),0<u.length&&(i=new eu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=os)))}function ya(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var as={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},fu={},th={};f&&(th=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Sa(n){if(fu[n])return fu[n];if(!as[n])return n;var i=as[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in th)return fu[n]=i[a];return n}var nh=Sa("animationend"),ih=Sa("animationiteration"),rh=Sa("animationstart"),sh=Sa("transitionend"),oh=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){oh.set(n,i),l(i,[n])}for(var du=0;du<ah.length;du++){var hu=ah[du],qv=hu.toLowerCase(),$v=hu[0].toUpperCase()+hu.slice(1);Ji(qv,"on"+$v)}Ji(nh,"onAnimationEnd"),Ji(ih,"onAnimationIteration"),Ji(rh,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(sh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function lh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,oa(u,i,void 0,n),n.currentTarget=null}function uh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],z=U.instance,ee=U.currentTarget;if(U=U.listener,z!==m&&d.isPropagationStopped())break e;lh(d,U,ee),m=z}else for(E=0;E<u.length;E++){if(U=u[E],z=U.instance,ee=U.currentTarget,U=U.listener,z!==m&&d.isPropagationStopped())break e;lh(d,U,ee),m=z}}}if(wr)throw n=ji,wr=!1,ji=null,n}function Ot(n,i){var a=i[Su];a===void 0&&(a=i[Su]=new Set);var u=n+"__bubble";a.has(u)||(ch(i,n,2,!1),a.add(u))}function pu(n,i,a){var u=0;i&&(u|=4),ch(a,n,u,i)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function vo(n){if(!n[Ma]){n[Ma]=!0,r.forEach(function(a){a!=="selectionchange"&&(Zv.has(a)||pu(a,!1,n),pu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ma]||(i[Ma]=!0,pu("selectionchange",!1,i))}}function ch(n,i,a,u){switch(Nd(i)){case 1:var d=cv;break;case 4:d=fv;break;default:d=Kl}a=d.bind(null,i,a,n),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function mu(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Rr(U),E===null)return;if(z=E.tag,z===5||z===6){u=m=E;continue e}U=U.parentNode}}u=u.return}Dn(function(){var ee=m,xe=X(a),Se=[];e:{var _e=oh.get(n);if(_e!==void 0){var ze=eu,qe=n;switch(n){case"keypress":if(ga(a)===0)break e;case"keydown":case"keyup":ze=Av;break;case"focusin":qe="focus",ze=iu;break;case"focusout":qe="blur",ze=iu;break;case"beforeblur":case"afterblur":ze=iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Pv;break;case nh:case ih:case rh:ze=vv;break;case sh:ze=Lv;break;case"scroll":ze=dv;break;case"wheel":ze=Nv;break;case"copy":case"cut":case"paste":ze=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=kd}var Ze=(i&4)!==0,qt=!Ze&&n==="scroll",Z=Ze?_e!==null?_e+"Capture":null:_e;Ze=[];for(var W=ee,Q;W!==null;){Q=W;var Ce=Q.stateNode;if(Q.tag===5&&Ce!==null&&(Q=Ce,Z!==null&&(Ce=En(W,Z),Ce!=null&&Ze.push(_o(W,Ce,Q)))),qt)break;W=W.return}0<Ze.length&&(_e=new ze(_e,qe,null,a,xe),Se.push({event:_e,listeners:Ze}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",_e&&a!==Lt&&(qe=a.relatedTarget||a.fromElement)&&(Rr(qe)||qe[wi]))break e;if((ze||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(qe=a.relatedTarget||a.toElement,ze=ee,qe=qe?Rr(qe):null,qe!==null&&(qt=hi(qe),qe!==qt||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(ze=null,qe=ee),ze!==qe)){if(Ze=Fd,Ce="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=kd,Ce="onPointerLeave",Z="onPointerEnter",W="pointer"),qt=ze==null?_e:cs(ze),Q=qe==null?_e:cs(qe),_e=new Ze(Ce,W+"leave",ze,a,xe),_e.target=qt,_e.relatedTarget=Q,Ce=null,Rr(xe)===ee&&(Ze=new Ze(Z,W+"enter",qe,a,xe),Ze.target=Q,Ze.relatedTarget=qt,Ce=Ze),qt=Ce,ze&&qe)t:{for(Ze=ze,Z=qe,W=0,Q=Ze;Q;Q=ls(Q))W++;for(Q=0,Ce=Z;Ce;Ce=ls(Ce))Q++;for(;0<W-Q;)Ze=ls(Ze),W--;for(;0<Q-W;)Z=ls(Z),Q--;for(;W--;){if(Ze===Z||Z!==null&&Ze===Z.alternate)break t;Ze=ls(Ze),Z=ls(Z)}Ze=null}else Ze=null;ze!==null&&fh(Se,_e,ze,Ze,!1),qe!==null&&qt!==null&&fh(Se,qt,qe,Ze,!0)}}e:{if(_e=ee?cs(ee):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var Qe=Bv;else if(Wd(_e))if(jd)Qe=Wv;else{Qe=Vv;var rt=Hv}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Qe=Gv);if(Qe&&(Qe=Qe(n,ee))){Xd(Se,Qe,a,xe);break e}rt&&rt(n,_e,ee),n==="focusout"&&(rt=_e._wrapperState)&&rt.controlled&&_e.type==="number"&&nt(_e,"number",_e.value)}switch(rt=ee?cs(ee):window,n){case"focusin":(Wd(rt)||rt.contentEditable==="true")&&(os=rt,uu=ee,mo=null);break;case"focusout":mo=uu=os=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,eh(Se,a,xe);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":eh(Se,a,xe)}var st;if(su)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else ss?Vd(n,a)&&(ut="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(zd&&a.locale!=="ko"&&(ss||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&ss&&(st=Ud()):(Ki=xe,Ql="value"in Ki?Ki.value:Ki.textContent,ss=!0)),rt=Ea(ee,ut),0<rt.length&&(ut=new Od(ut,n,null,a,xe),Se.push({event:ut,listeners:rt}),st?ut.data=st:(st=Gd(a),st!==null&&(ut.data=st)))),(st=Iv?Fv(n,a):Ov(n,a))&&(ee=Ea(ee,"onBeforeInput"),0<ee.length&&(xe=new Od("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:ee}),xe.data=st))}uh(Se,i)})}function _o(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ea(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=En(n,a),m!=null&&u.unshift(_o(n,m,d)),m=En(n,i),m!=null&&u.push(_o(n,m,d))),n=n.return}return u}function ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fh(n,i,a,u,d){for(var m=i._reactName,E=[];a!==null&&a!==u;){var U=a,z=U.alternate,ee=U.stateNode;if(z!==null&&z===u)break;U.tag===5&&ee!==null&&(U=ee,d?(z=En(a,m),z!=null&&E.unshift(_o(a,z,U))):d||(z=En(a,m),z!=null&&E.push(_o(a,z,U)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var Kv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function dh(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Jv,"")}function Ta(n,i,a){if(i=dh(i),dh(n)!==i&&a)throw Error(t(425))}function wa(){}var gu=null,vu=null;function _u(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(n){return hh.resolve(null).then(n).catch(t0)}:xu;function t0(n){setTimeout(function(){throw n})}function yu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),ao(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);ao(i)}function Qi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ph(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),pi="__reactFiber$"+us,xo="__reactProps$"+us,wi="__reactContainer$"+us,Su="__reactEvents$"+us,n0="__reactListeners$"+us,i0="__reactHandles$"+us;function Rr(n){var i=n[pi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wi]||a[pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ph(n);n!==null;){if(a=n[pi])return a;n=ph(n)}return i}n=a,a=n.parentNode}return null}function yo(n){return n=n[pi]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function cs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Aa(n){return n[xo]||null}var Mu=[],fs=-1;function er(n){return{current:n}}function kt(n){0>fs||(n.current=Mu[fs],Mu[fs]=null,fs--)}function It(n,i){fs++,Mu[fs]=n.current,n.current=i}var tr={},mn=er(tr),Nn=er(!1),Pr=tr;function ds(n,i){var a=n.type.contextTypes;if(!a)return tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Un(n){return n=n.childContextTypes,n!=null}function Ca(){kt(Nn),kt(mn)}function mh(n,i,a){if(mn.current!==tr)throw Error(t(168));It(mn,i),It(Nn,a)}function gh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,me(n)||"Unknown",d));return oe({},a,u)}function Ra(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||tr,Pr=mn.current,It(mn,n),It(Nn,Nn.current),!0}function vh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=gh(n,i,Pr),u.__reactInternalMemoizedMergedChildContext=n,kt(Nn),kt(mn),It(mn,n)):kt(Nn),It(Nn,a)}var Ai=null,Pa=!1,Eu=!1;function _h(n){Ai===null?Ai=[n]:Ai.push(n)}function r0(n){Pa=!0,_h(n)}function nr(){if(!Eu&&Ai!==null){Eu=!0;var n=0,i=yt;try{var a=Ai;for(yt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ai=null,Pa=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(n+1)),C(Ue,nr),d}finally{yt=i,Eu=!1}}return null}var hs=[],ps=0,ba=null,La=0,Yn=[],qn=0,br=null,Ci=1,Ri="";function Lr(n,i){hs[ps++]=La,hs[ps++]=ba,ba=n,La=i}function xh(n,i,a){Yn[qn++]=Ci,Yn[qn++]=Ri,Yn[qn++]=br,br=n;var u=Ci;n=Ri;var d=32-Ct(u)-1;u&=~(1<<d),a+=1;var m=32-Ct(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Ci=1<<32-Ct(i)+d|a<<d|u,Ri=m+n}else Ci=1<<m|a<<d|u,Ri=n}function Tu(n){n.return!==null&&(Lr(n,1),xh(n,1,0))}function wu(n){for(;n===ba;)ba=hs[--ps],hs[ps]=null,La=hs[--ps],hs[ps]=null;for(;n===br;)br=Yn[--qn],Yn[qn]=null,Ri=Yn[--qn],Yn[qn]=null,Ci=Yn[--qn],Yn[qn]=null}var Hn=null,Vn=null,Bt=!1,ni=null;function yh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Sh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=Qi(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=br!==null?{id:Ci,overflow:Ri}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function Au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cu(n){if(Bt){var i=Vn;if(i){var a=i;if(!Sh(n,i)){if(Au(n))throw Error(t(418));i=Qi(a.nextSibling);var u=Hn;i&&Sh(n,i)?yh(u,a):(n.flags=n.flags&-4097|2,Bt=!1,Hn=n)}}else{if(Au(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Hn=n}}}function Mh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Da(n){if(n!==Hn)return!1;if(!Bt)return Mh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!_u(n.type,n.memoizedProps)),i&&(i=Vn)){if(Au(n))throw Eh(),Error(t(418));for(;i;)yh(n,i),i=Qi(i.nextSibling)}if(Mh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=Qi(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Hn?Qi(n.stateNode.nextSibling):null;return!0}function Eh(){for(var n=Vn;n;)n=Qi(n.nextSibling)}function ms(){Vn=Hn=null,Bt=!1}function Ru(n){ni===null?ni=[n]:ni.push(n)}var s0=R.ReactCurrentBatchConfig;function So(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Na(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Th(n){var i=n._init;return i(n._payload)}function wh(n){function i(Z,W){if(n){var Q=Z.deletions;Q===null?(Z.deletions=[W],Z.flags|=16):Q.push(W)}}function a(Z,W){if(!n)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function u(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function d(Z,W){return Z=cr(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,Q){return Z.index=Q,n?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<W?(Z.flags|=2,W):Q):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function E(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,W,Q,Ce){return W===null||W.tag!==6?(W=xc(Q,Z.mode,Ce),W.return=Z,W):(W=d(W,Q),W.return=Z,W)}function z(Z,W,Q,Ce){var Qe=Q.type;return Qe===F?xe(Z,W,Q.props.children,Ce,Q.key):W!==null&&(W.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===re&&Th(Qe)===W.type)?(Ce=d(W,Q.props),Ce.ref=So(Z,W,Q),Ce.return=Z,Ce):(Ce=il(Q.type,Q.key,Q.props,null,Z.mode,Ce),Ce.ref=So(Z,W,Q),Ce.return=Z,Ce)}function ee(Z,W,Q,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==Q.containerInfo||W.stateNode.implementation!==Q.implementation?(W=yc(Q,Z.mode,Ce),W.return=Z,W):(W=d(W,Q.children||[]),W.return=Z,W)}function xe(Z,W,Q,Ce,Qe){return W===null||W.tag!==7?(W=zr(Q,Z.mode,Ce,Qe),W.return=Z,W):(W=d(W,Q),W.return=Z,W)}function Se(Z,W,Q){if(typeof W=="string"&&W!==""||typeof W=="number")return W=xc(""+W,Z.mode,Q),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return Q=il(W.type,W.key,W.props,null,Z.mode,Q),Q.ref=So(Z,null,W),Q.return=Z,Q;case O:return W=yc(W,Z.mode,Q),W.return=Z,W;case re:var Ce=W._init;return Se(Z,Ce(W._payload),Q)}if(Ie(W)||le(W))return W=zr(W,Z.mode,Q,null),W.return=Z,W;Na(Z,W)}return null}function _e(Z,W,Q,Ce){var Qe=W!==null?W.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Qe!==null?null:U(Z,W,""+Q,Ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:return Q.key===Qe?z(Z,W,Q,Ce):null;case O:return Q.key===Qe?ee(Z,W,Q,Ce):null;case re:return Qe=Q._init,_e(Z,W,Qe(Q._payload),Ce)}if(Ie(Q)||le(Q))return Qe!==null?null:xe(Z,W,Q,Ce,null);Na(Z,Q)}return null}function ze(Z,W,Q,Ce,Qe){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return Z=Z.get(Q)||null,U(W,Z,""+Ce,Qe);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case V:return Z=Z.get(Ce.key===null?Q:Ce.key)||null,z(W,Z,Ce,Qe);case O:return Z=Z.get(Ce.key===null?Q:Ce.key)||null,ee(W,Z,Ce,Qe);case re:var rt=Ce._init;return ze(Z,W,Q,rt(Ce._payload),Qe)}if(Ie(Ce)||le(Ce))return Z=Z.get(Q)||null,xe(W,Z,Ce,Qe,null);Na(W,Ce)}return null}function qe(Z,W,Q,Ce){for(var Qe=null,rt=null,st=W,ut=W=0,sn=null;st!==null&&ut<Q.length;ut++){st.index>ut?(sn=st,st=null):sn=st.sibling;var Rt=_e(Z,st,Q[ut],Ce);if(Rt===null){st===null&&(st=sn);break}n&&st&&Rt.alternate===null&&i(Z,st),W=m(Rt,W,ut),rt===null?Qe=Rt:rt.sibling=Rt,rt=Rt,st=sn}if(ut===Q.length)return a(Z,st),Bt&&Lr(Z,ut),Qe;if(st===null){for(;ut<Q.length;ut++)st=Se(Z,Q[ut],Ce),st!==null&&(W=m(st,W,ut),rt===null?Qe=st:rt.sibling=st,rt=st);return Bt&&Lr(Z,ut),Qe}for(st=u(Z,st);ut<Q.length;ut++)sn=ze(st,Z,ut,Q[ut],Ce),sn!==null&&(n&&sn.alternate!==null&&st.delete(sn.key===null?ut:sn.key),W=m(sn,W,ut),rt===null?Qe=sn:rt.sibling=sn,rt=sn);return n&&st.forEach(function(fr){return i(Z,fr)}),Bt&&Lr(Z,ut),Qe}function Ze(Z,W,Q,Ce){var Qe=le(Q);if(typeof Qe!="function")throw Error(t(150));if(Q=Qe.call(Q),Q==null)throw Error(t(151));for(var rt=Qe=null,st=W,ut=W=0,sn=null,Rt=Q.next();st!==null&&!Rt.done;ut++,Rt=Q.next()){st.index>ut?(sn=st,st=null):sn=st.sibling;var fr=_e(Z,st,Rt.value,Ce);if(fr===null){st===null&&(st=sn);break}n&&st&&fr.alternate===null&&i(Z,st),W=m(fr,W,ut),rt===null?Qe=fr:rt.sibling=fr,rt=fr,st=sn}if(Rt.done)return a(Z,st),Bt&&Lr(Z,ut),Qe;if(st===null){for(;!Rt.done;ut++,Rt=Q.next())Rt=Se(Z,Rt.value,Ce),Rt!==null&&(W=m(Rt,W,ut),rt===null?Qe=Rt:rt.sibling=Rt,rt=Rt);return Bt&&Lr(Z,ut),Qe}for(st=u(Z,st);!Rt.done;ut++,Rt=Q.next())Rt=ze(st,Z,ut,Rt.value,Ce),Rt!==null&&(n&&Rt.alternate!==null&&st.delete(Rt.key===null?ut:Rt.key),W=m(Rt,W,ut),rt===null?Qe=Rt:rt.sibling=Rt,rt=Rt);return n&&st.forEach(function(k0){return i(Z,k0)}),Bt&&Lr(Z,ut),Qe}function qt(Z,W,Q,Ce){if(typeof Q=="object"&&Q!==null&&Q.type===F&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:e:{for(var Qe=Q.key,rt=W;rt!==null;){if(rt.key===Qe){if(Qe=Q.type,Qe===F){if(rt.tag===7){a(Z,rt.sibling),W=d(rt,Q.props.children),W.return=Z,Z=W;break e}}else if(rt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===re&&Th(Qe)===rt.type){a(Z,rt.sibling),W=d(rt,Q.props),W.ref=So(Z,rt,Q),W.return=Z,Z=W;break e}a(Z,rt);break}else i(Z,rt);rt=rt.sibling}Q.type===F?(W=zr(Q.props.children,Z.mode,Ce,Q.key),W.return=Z,Z=W):(Ce=il(Q.type,Q.key,Q.props,null,Z.mode,Ce),Ce.ref=So(Z,W,Q),Ce.return=Z,Z=Ce)}return E(Z);case O:e:{for(rt=Q.key;W!==null;){if(W.key===rt)if(W.tag===4&&W.stateNode.containerInfo===Q.containerInfo&&W.stateNode.implementation===Q.implementation){a(Z,W.sibling),W=d(W,Q.children||[]),W.return=Z,Z=W;break e}else{a(Z,W);break}else i(Z,W);W=W.sibling}W=yc(Q,Z.mode,Ce),W.return=Z,Z=W}return E(Z);case re:return rt=Q._init,qt(Z,W,rt(Q._payload),Ce)}if(Ie(Q))return qe(Z,W,Q,Ce);if(le(Q))return Ze(Z,W,Q,Ce);Na(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,W!==null&&W.tag===6?(a(Z,W.sibling),W=d(W,Q),W.return=Z,Z=W):(a(Z,W),W=xc(Q,Z.mode,Ce),W.return=Z,Z=W),E(Z)):a(Z,W)}return qt}var gs=wh(!0),Ah=wh(!1),Ua=er(null),Ia=null,vs=null,Pu=null;function bu(){Pu=vs=Ia=null}function Lu(n){var i=Ua.current;kt(Ua),n._currentValue=i}function Du(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function _s(n,i){Ia=n,Pu=vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:i,next:null},vs===null){if(Ia===null)throw Error(t(308));vs=n,Ia.dependencies={lanes:0,firstContext:n}}else vs=vs.next=n;return i}var Dr=null;function Nu(n){Dr===null?Dr=[n]:Dr.push(n)}function Ch(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Nu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Pi(n,u)}function Pi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ir=!1;function Uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Pi(n,a)}return d=u.interleaved,d===null?(i.next=i,Nu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Pi(n,a)}function Fa(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Cr(n,a)}}function Ph(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Oa(n,i,a,u){var d=n.updateQueue;ir=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var z=U,ee=z.next;z.next=null,E===null?m=ee:E.next=ee,E=z;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==E&&(U===null?xe.firstBaseUpdate=ee:U.next=ee,xe.lastBaseUpdate=z))}if(m!==null){var Se=d.baseState;E=0,xe=ee=z=null,U=m;do{var _e=U.lane,ze=U.eventTime;if((u&_e)===_e){xe!==null&&(xe=xe.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var qe=n,Ze=U;switch(_e=i,ze=a,Ze.tag){case 1:if(qe=Ze.payload,typeof qe=="function"){Se=qe.call(ze,Se,_e);break e}Se=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Ze.payload,_e=typeof qe=="function"?qe.call(ze,Se,_e):qe,_e==null)break e;Se=oe({},Se,_e);break e;case 2:ir=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[U]:_e.push(U))}else ze={eventTime:ze,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ee=xe=ze,z=Se):xe=xe.next=ze,E|=_e;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(z=Se),d.baseState=z,d.firstBaseUpdate=ee,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Ir|=E,n.lanes=E,n.memoizedState=Se}}function bh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Mo={},mi=er(Mo),Eo=er(Mo),To=er(Mo);function Nr(n){if(n===Mo)throw Error(t(174));return n}function Iu(n,i){switch(It(To,i),It(Eo,n),It(mi,Mo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:$e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=$e(i,n)}kt(mi),It(mi,i)}function xs(){kt(mi),kt(Eo),kt(To)}function Lh(n){Nr(To.current);var i=Nr(mi.current),a=$e(i,n.type);i!==a&&(It(Eo,n),It(mi,a))}function Fu(n){Eo.current===n&&(kt(mi),kt(Eo))}var Vt=er(0);function ka(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ou=[];function ku(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var za=R.ReactCurrentDispatcher,zu=R.ReactCurrentBatchConfig,Ur=0,Gt=null,Jt=null,nn=null,Ba=!1,wo=!1,Ao=0,o0=0;function gn(){throw Error(t(321))}function Bu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ti(n[a],i[a]))return!1;return!0}function Hu(n,i,a,u,d,m){if(Ur=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=n===null||n.memoizedState===null?c0:f0,n=a(u,d),wo){m=0;do{if(wo=!1,Ao=0,25<=m)throw Error(t(301));m+=1,nn=Jt=null,i.updateQueue=null,za.current=d0,n=a(u,d)}while(wo)}if(za.current=Ga,i=Jt!==null&&Jt.next!==null,Ur=0,nn=Jt=Gt=null,Ba=!1,i)throw Error(t(300));return n}function Vu(){var n=Ao!==0;return Ao=0,n}function gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Gt.memoizedState=nn=n:nn=nn.next=n,nn}function Zn(){if(Jt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=nn===null?Gt.memoizedState:nn.next;if(i!==null)nn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},nn===null?Gt.memoizedState=nn=n:nn=nn.next=n}return nn}function Co(n,i){return typeof i=="function"?i(n):i}function Gu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Jt,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=E=null,z=null,ee=m;do{var xe=ee.lane;if((Ur&xe)===xe)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var Se={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(U=z=Se,E=u):z=z.next=Se,Gt.lanes|=xe,Ir|=xe}ee=ee.next}while(ee!==null&&ee!==m);z===null?E=u:z.next=U,ti(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=z,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Gt.lanes|=m,Ir|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Wu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ti(m,i.memoizedState)||(In=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Dh(){}function Nh(n,i){var a=Gt,u=Zn(),d=i(),m=!ti(u.memoizedState,d);if(m&&(u.memoizedState=d,In=!0),u=u.queue,Xu(Fh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||nn!==null&&nn.memoizedState.tag&1){if(a.flags|=2048,Ro(9,Ih.bind(null,a,u,d,i),void 0,null),rn===null)throw Error(t(349));(Ur&30)!==0||Uh(a,i,d)}return d}function Uh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ih(n,i,a,u){i.value=a,i.getSnapshot=u,Oh(i)&&kh(n)}function Fh(n,i,a){return a(function(){Oh(i)&&kh(n)})}function Oh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ti(n,a)}catch{return!0}}function kh(n){var i=Pi(n,1);i!==null&&oi(i,n,1,-1)}function zh(n){var i=gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:n},i.queue=n,n=n.dispatch=u0.bind(null,Gt,n),[i.memoizedState,n]}function Ro(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Bh(){return Zn().memoizedState}function Ha(n,i,a,u){var d=gi();Gt.flags|=n,d.memoizedState=Ro(1|i,a,void 0,u===void 0?null:u)}function Va(n,i,a,u){var d=Zn();u=u===void 0?null:u;var m=void 0;if(Jt!==null){var E=Jt.memoizedState;if(m=E.destroy,u!==null&&Bu(u,E.deps)){d.memoizedState=Ro(i,a,m,u);return}}Gt.flags|=n,d.memoizedState=Ro(1|i,a,m,u)}function Hh(n,i){return Ha(8390656,8,n,i)}function Xu(n,i){return Va(2048,8,n,i)}function Vh(n,i){return Va(4,2,n,i)}function Gh(n,i){return Va(4,4,n,i)}function Wh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xh(n,i,a){return a=a!=null?a.concat([n]):null,Va(4,4,Wh.bind(null,i,n),a)}function ju(){}function jh(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Bu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Yh(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Bu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function qh(n,i,a){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a):(ti(a,i)||(a=wn(),Gt.lanes|=a,Ir|=a,n.baseState=!0),i)}function a0(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var u=zu.transition;zu.transition={};try{n(!1),i()}finally{yt=a,zu.transition=u}}function $h(){return Zn().memoizedState}function l0(n,i,a){var u=lr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Zh(n))Kh(i,a);else if(a=Ch(n,i,a,u),a!==null){var d=Cn();oi(a,n,u,d),Jh(a,i,u)}}function u0(n,i,a){var u=lr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zh(n))Kh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,a);if(d.hasEagerState=!0,d.eagerState=U,ti(U,E)){var z=i.interleaved;z===null?(d.next=d,Nu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Ch(n,i,d,u),a!==null&&(d=Cn(),oi(a,n,u,d),Jh(a,i,u))}}function Zh(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Kh(n,i){wo=Ba=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Jh(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Cr(n,a)}}var Ga={readContext:$n,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},c0={readContext:$n,useCallback:function(n,i){return gi().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:Hh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ha(4194308,4,Wh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ha(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ha(4,2,n,i)},useMemo:function(n,i){var a=gi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=gi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=l0.bind(null,Gt,n),[u.memoizedState,n]},useRef:function(n){var i=gi();return n={current:n},i.memoizedState=n},useState:zh,useDebugValue:ju,useDeferredValue:function(n){return gi().memoizedState=n},useTransition:function(){var n=zh(!1),i=n[0];return n=a0.bind(null,n[1]),gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Gt,d=gi();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),rn===null)throw Error(t(349));(Ur&30)!==0||Uh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Hh(Fh.bind(null,u,m,n),[n]),u.flags|=2048,Ro(9,Ih.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=gi(),i=rn.identifierPrefix;if(Bt){var a=Ri,u=Ci;a=(u&~(1<<32-Ct(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ao++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=o0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},f0={readContext:$n,useCallback:jh,useContext:$n,useEffect:Xu,useImperativeHandle:Xh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:Yh,useReducer:Gu,useRef:Bh,useState:function(){return Gu(Co)},useDebugValue:ju,useDeferredValue:function(n){var i=Zn();return qh(i,Jt.memoizedState,n)},useTransition:function(){var n=Gu(Co)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:$h,unstable_isNewReconciler:!1},d0={readContext:$n,useCallback:jh,useContext:$n,useEffect:Xu,useImperativeHandle:Xh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:Yh,useReducer:Wu,useRef:Bh,useState:function(){return Wu(Co)},useDebugValue:ju,useDeferredValue:function(n){var i=Zn();return Jt===null?i.memoizedState=n:qh(i,Jt.memoizedState,n)},useTransition:function(){var n=Wu(Co)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Dh,useSyncExternalStore:Nh,useId:$h,unstable_isNewReconciler:!1};function ii(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Yu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Wa={isMounted:function(n){return(n=n._reactInternals)?hi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Cn(),d=lr(n),m=bi(u,d);m.payload=i,a!=null&&(m.callback=a),i=rr(n,m,d),i!==null&&(oi(i,n,d,u),Fa(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Cn(),d=lr(n),m=bi(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=rr(n,m,d),i!==null&&(oi(i,n,d,u),Fa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Cn(),u=lr(n),d=bi(a,u);d.tag=2,i!=null&&(d.callback=i),i=rr(n,d,u),i!==null&&(oi(i,n,u,a),Fa(i,n,u))}};function Qh(n,i,a,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!po(a,u)||!po(d,m):!0}function ep(n,i,a){var u=!1,d=tr,m=i.contextType;return typeof m=="object"&&m!==null?m=$n(m):(d=Un(i)?Pr:mn.current,u=i.contextTypes,m=(u=u!=null)?ds(n,d):tr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function tp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Wa.enqueueReplaceState(i,i.state,null)}function qu(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Uu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=$n(m):(m=Un(i)?Pr:mn.current,d.context=ds(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Yu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Wa.enqueueReplaceState(d,d.state,null),Oa(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ys(n,i){try{var a="",u=i;do a+=de(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function $u(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Zu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function np(n,i,a){a=bi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Ka||(Ka=!0,fc=u),Zu(n,i)},a}function ip(n,i,a){a=bi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){Zu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Zu(n,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function rp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new h0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=C0.bind(null,n,i,a),i.then(n,n))}function sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function op(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=bi(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var p0=R.ReactCurrentOwner,In=!1;function An(n,i,a,u){i.child=n===null?Ah(i,null,a,u):gs(i,n.child,a,u)}function ap(n,i,a,u,d){a=a.render;var m=i.ref;return _s(i,d),u=Hu(n,i,a,u,m,d),a=Vu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Bt&&a&&Tu(i),i.flags|=1,An(n,i,u,d),i.child)}function lp(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!_c(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,up(n,i,m,u,d)):(n=il(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(E,u)&&n.ref===i.ref)return Li(n,i,d)}return i.flags|=1,n=cr(m,u),n.ref=i.ref,n.return=i,i.child=n}function up(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(po(m,u)&&n.ref===i.ref)if(In=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,Li(n,i,d)}return Ku(n,i,a,u,d)}function cp(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ms,Gn),Gn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Ms,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,It(Ms,Gn),Gn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,It(Ms,Gn),Gn|=u;return An(n,i,d,a),i.child}function fp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ku(n,i,a,u,d){var m=Un(a)?Pr:mn.current;return m=ds(i,m),_s(i,d),a=Hu(n,i,a,u,m,d),u=Vu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Li(n,i,d)):(Bt&&u&&Tu(i),i.flags|=1,An(n,i,a,d),i.child)}function dp(n,i,a,u,d){if(Un(a)){var m=!0;Ra(i)}else m=!1;if(_s(i,d),i.stateNode===null)ja(n,i),ep(i,a,u),qu(i,a,u,d),u=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var z=E.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=$n(ee):(ee=Un(a)?Pr:mn.current,ee=ds(i,ee));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||z!==ee)&&tp(i,E,u,ee),ir=!1;var _e=i.memoizedState;E.state=_e,Oa(i,u,E,d),z=i.memoizedState,U!==u||_e!==z||Nn.current||ir?(typeof xe=="function"&&(Yu(i,a,xe,u),z=i.memoizedState),(U=ir||Qh(i,a,U,u,_e,z,ee))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),E.props=u,E.state=z,E.context=ee,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Rh(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:ii(i.type,U),E.props=ee,Se=i.pendingProps,_e=E.context,z=a.contextType,typeof z=="object"&&z!==null?z=$n(z):(z=Un(a)?Pr:mn.current,z=ds(i,z));var ze=a.getDerivedStateFromProps;(xe=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Se||_e!==z)&&tp(i,E,u,z),ir=!1,_e=i.memoizedState,E.state=_e,Oa(i,u,E,d);var qe=i.memoizedState;U!==Se||_e!==qe||Nn.current||ir?(typeof ze=="function"&&(Yu(i,a,ze,u),qe=i.memoizedState),(ee=ir||Qh(i,a,ee,u,_e,qe,z)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,qe,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,qe,z)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=qe),E.props=u,E.state=qe,E.context=z,u=ee):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return Ju(n,i,a,u,m,d)}function Ju(n,i,a,u,d,m){fp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&vh(i,a,!1),Li(n,i,m);u=i.stateNode,p0.current=i;var U=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=gs(i,n.child,null,m),i.child=gs(i,null,U,m)):An(n,i,U,m),i.memoizedState=u.state,d&&vh(i,a,!0),i.child}function hp(n){var i=n.stateNode;i.pendingContext?mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&mh(n,i.context,!1),Iu(n,i.containerInfo)}function pp(n,i,a,u,d){return ms(),Ru(d),i.flags|=256,An(n,i,a,u),i.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function ec(n){return{baseLanes:n,cachePool:null,transitions:null}}function mp(n,i,a){var u=i.pendingProps,d=Vt.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(Vt,d&1),n===null)return Cu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=rl(E,u,0,null),n=zr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=ec(a),i.memoizedState=Qu,n):tc(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return m0(n,i,E,u,U,d,a);if(m){m=u.fallback,E=i.mode,d=n.child,U=d.sibling;var z={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=cr(d,z),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=cr(U,m):(m=zr(m,E,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?ec(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=Qu,u}return m=n.child,n=m.sibling,u=cr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function tc(n,i){return i=rl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Xa(n,i,a,u){return u!==null&&Ru(u),gs(i,n.child,null,a),n=tc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function m0(n,i,a,u,d,m,E){if(a)return i.flags&256?(i.flags&=-257,u=$u(Error(t(422))),Xa(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=rl({mode:"visible",children:u.children},d,0,null),m=zr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&gs(i,n.child,null,E),i.child.memoizedState=ec(E),i.memoizedState=Qu,m);if((i.mode&1)===0)return Xa(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=$u(m,u,void 0),Xa(n,i,E,u)}if(U=(E&n.childLanes)!==0,In||U){if(u=rn,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pi(n,d),oi(u,n,d,-1))}return vc(),u=$u(Error(t(421))),Xa(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=R0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Vn=Qi(d.nextSibling),Hn=i,Bt=!0,ni=null,n!==null&&(Yn[qn++]=Ci,Yn[qn++]=Ri,Yn[qn++]=br,Ci=n.id,Ri=n.overflow,br=i),i=tc(i,u.children),i.flags|=4096,i)}function gp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Du(n.return,i,a)}function nc(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function vp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(An(n,i,u.children,a),u=Vt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gp(n,a,i);else if(n.tag===19)gp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Vt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ka(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),nc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ka(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}nc(i,!0,a,null,m);break;case"together":nc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Li(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=cr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=cr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function g0(n,i,a){switch(i.tag){case 3:hp(i),ms();break;case 5:Lh(i);break;case 1:Un(i.type)&&Ra(i);break;case 4:Iu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Ua,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Vt,Vt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?mp(n,i,a):(It(Vt,Vt.current&1),n=Li(n,i,a),n!==null?n.sibling:null);It(Vt,Vt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return vp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Vt,Vt.current),u)break;return null;case 22:case 23:return i.lanes=0,cp(n,i,a)}return Li(n,i,a)}var _p,ic,xp,yp;_p=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ic=function(){},xp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Nr(mi.current);var m=null;switch(a){case"input":d=D(n,d),u=D(n,u),m=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),m=[];break;case"textarea":d=T(n,d),u=T(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=wa)}_t(a,u);var E;a=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var U=d[ee];for(E in U)U.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in u){var z=u[ee];if(U=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&z!==U&&(z!=null||U!=null))if(ee==="style")if(U){for(E in U)!U.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in z)z.hasOwnProperty(E)&&U[E]!==z[E]&&(a||(a={}),a[E]=z[E])}else a||(m||(m=[]),m.push(ee,a)),a=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(m=m||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Ot("scroll",n),m||U===z||(m=[])):(m=m||[]).push(ee,z))}a&&(m=m||[]).push("style",a);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},yp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Po(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function v0(n,i,a){var u=i.pendingProps;switch(wu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Un(i.type)&&Ca(),vn(i),null;case 3:return u=i.stateNode,xs(),kt(Nn),kt(mn),ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Da(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(pc(ni),ni=null))),ic(n,i),vn(i),null;case 5:Fu(i);var d=Nr(To.current);if(a=i.type,n!==null&&i.stateNode!=null)xp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Nr(mi.current),Da(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[pi]=i,u[xo]=m,n=(i.mode&1)!==0,a){case"dialog":Ot("cancel",u),Ot("close",u);break;case"iframe":case"object":case"embed":Ot("load",u);break;case"video":case"audio":for(d=0;d<go.length;d++)Ot(go[d],u);break;case"source":Ot("error",u);break;case"img":case"image":case"link":Ot("error",u),Ot("load",u);break;case"details":Ot("toggle",u);break;case"input":Je(u,m),Ot("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",u);break;case"textarea":J(u,m),Ot("invalid",u)}_t(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ta(u.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ot("scroll",u)}switch(a){case"input":vt(u),Re(u,m,!0);break;case"textarea":vt(u),ve(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=wa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[pi]=i,n[xo]=u,_p(n,i,!1,!1),i.stateNode=n;e:{switch(E=ct(a,u),a){case"dialog":Ot("cancel",n),Ot("close",n),d=u;break;case"iframe":case"object":case"embed":Ot("load",n),d=u;break;case"video":case"audio":for(d=0;d<go.length;d++)Ot(go[d],n);d=u;break;case"source":Ot("error",n),d=u;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=u;break;case"details":Ot("toggle",n),d=u;break;case"input":Je(n,u),d=D(n,u),Ot("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),Ot("invalid",n);break;case"textarea":J(n,u),d=T(n,u),Ot("invalid",n);break;default:d=u}_t(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var z=U[m];m==="style"?ot(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ve(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&ht(n,z):typeof z=="number"&&ht(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Ot("scroll",n):z!=null&&P(n,m,z,E))}switch(a){case"input":vt(n),Re(n,u,!1);break;case"textarea":vt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?L(n,!!u.multiple,m,!1):u.defaultValue!=null&&L(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=wa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)yp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Nr(To.current),Nr(mi.current),Da(i)){if(u=i.stateNode,a=i.memoizedProps,u[pi]=i,(m=u.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:Ta(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ta(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[pi]=i,i.stateNode=u}return vn(i),null;case 13:if(kt(Vt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Eh(),ms(),i.flags|=98560,m=!1;else if(m=Da(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[pi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else ni!==null&&(pc(ni),ni=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Qt===0&&(Qt=3):vc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return xs(),ic(n,i),n===null&&vo(i.stateNode.containerInfo),vn(i),null;case 10:return Lu(i.type._context),vn(i),null;case 17:return Un(i.type)&&Ca(),vn(i),null;case 19:if(kt(Vt),m=i.memoizedState,m===null)return vn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Po(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=ka(n),E!==null){for(i.flags|=128,Po(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&G()>Es&&(i.flags|=128,u=!0,Po(m,!1),i.lanes=4194304)}else{if(!u)if(n=ka(E),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Po(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Bt)return vn(i),null}else 2*G()-m.renderingStartTime>Es&&a!==1073741824&&(i.flags|=128,u=!0,Po(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=G(),i.sibling=null,a=Vt.current,It(Vt,u?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return gc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function _0(n,i){switch(wu(i),i.tag){case 1:return Un(i.type)&&Ca(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),kt(Nn),kt(mn),ku(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Fu(i),null;case 13:if(kt(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Vt),null;case 4:return xs(),null;case 10:return Lu(i.type._context),null;case 22:case 23:return gc(),null;case 24:return null;default:return null}}var Ya=!1,_n=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ss(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){jt(n,i,u)}else a.current=null}function rc(n,i,a){try{a()}catch(u){jt(n,i,u)}}var Sp=!1;function y0(n,i){if(gu=ha,n=Qd(),lu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,U=-1,z=-1,ee=0,xe=0,Se=n,_e=null;t:for(;;){for(var ze;Se!==a||d!==0&&Se.nodeType!==3||(U=E+d),Se!==m||u!==0&&Se.nodeType!==3||(z=E+u),Se.nodeType===3&&(E+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)_e=Se,Se=ze;for(;;){if(Se===n)break t;if(_e===a&&++ee===d&&(U=E),_e===m&&++xe===u&&(z=E),(ze=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ze}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(vu={focusedElem:n,selectionRange:a},ha=!1,Xe=i;Xe!==null;)if(i=Xe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Xe=n;else for(;Xe!==null;){i=Xe;try{var qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Ze=qe.memoizedProps,qt=qe.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:ii(i.type,Ze),qt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){jt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Xe=n;break}Xe=i.return}return qe=Sp,Sp=!1,qe}function bo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&rc(i,a,m)}d=d.next}while(d!==u)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function sc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Mp(n){var i=n.alternate;i!==null&&(n.alternate=null,Mp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[pi],delete i[xo],delete i[Su],delete i[n0],delete i[i0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ep(n){return n.tag===5||n.tag===3||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ep(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=wa));else if(u!==4&&(n=n.child,n!==null))for(oc(n,i,a),n=n.sibling;n!==null;)oc(n,i,a),n=n.sibling}function ac(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ac(n,i,a),n=n.sibling;n!==null;)ac(n,i,a),n=n.sibling}var ln=null,ri=!1;function sr(n,i,a){for(a=a.child;a!==null;)wp(n,i,a),a=a.sibling}function wp(n,i,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:_n||Ss(a,i);case 6:var u=ln,d=ri;ln=null,sr(n,i,a),ln=u,ri=d,ln!==null&&(ri?(n=ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(ri?(n=ln,a=a.stateNode,n.nodeType===8?yu(n.parentNode,a):n.nodeType===1&&yu(n,a),ao(n)):yu(ln,a.stateNode));break;case 4:u=ln,d=ri,ln=a.stateNode.containerInfo,ri=!0,sr(n,i,a),ln=u,ri=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&rc(a,i,E),d=d.next}while(d!==u)}sr(n,i,a);break;case 1:if(!_n&&(Ss(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){jt(a,i,U)}sr(n,i,a);break;case 21:sr(n,i,a);break;case 22:a.mode&1?(_n=(u=_n)||a.memoizedState!==null,sr(n,i,a),_n=u):sr(n,i,a);break;default:sr(n,i,a)}}function Ap(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new x0),i.forEach(function(u){var d=P0.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function si(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:ln=U.stateNode,ri=!1;break e;case 3:ln=U.stateNode.containerInfo,ri=!0;break e;case 4:ln=U.stateNode.containerInfo,ri=!0;break e}U=U.return}if(ln===null)throw Error(t(160));wp(m,E,d),ln=null,ri=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ee){jt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),vi(n),u&4){try{bo(3,n,n.return),qa(3,n)}catch(Ze){jt(n,n.return,Ze)}try{bo(5,n,n.return)}catch(Ze){jt(n,n.return,Ze)}}break;case 1:si(i,n),vi(n),u&512&&a!==null&&Ss(a,a.return);break;case 5:if(si(i,n),vi(n),u&512&&a!==null&&Ss(a,a.return),n.flags&32){var d=n.stateNode;try{ht(d,"")}catch(Ze){jt(n,n.return,Ze)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&Me(d,m),ct(U,E);var ee=ct(U,m);for(E=0;E<z.length;E+=2){var xe=z[E],Se=z[E+1];xe==="style"?ot(d,Se):xe==="dangerouslySetInnerHTML"?Ve(d,Se):xe==="children"?ht(d,Se):P(d,xe,Se,ee)}switch(U){case"input":He(d,m);break;case"textarea":fe(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?L(d,!!m.multiple,ze,!1):_e!==!!m.multiple&&(m.defaultValue!=null?L(d,!!m.multiple,m.defaultValue,!0):L(d,!!m.multiple,m.multiple?[]:"",!1))}d[xo]=m}catch(Ze){jt(n,n.return,Ze)}}break;case 6:if(si(i,n),vi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ze){jt(n,n.return,Ze)}}break;case 3:if(si(i,n),vi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(Ze){jt(n,n.return,Ze)}break;case 4:si(i,n),vi(n);break;case 13:si(i,n),vi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(cc=G())),u&4&&Ap(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(ee=_n)||xe,si(i,n),_n=ee):si(i,n),vi(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!xe&&(n.mode&1)!==0)for(Xe=n,xe=n.child;xe!==null;){for(Se=Xe=xe;Xe!==null;){switch(_e=Xe,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:bo(4,_e,_e.return);break;case 1:Ss(_e,_e.return);var qe=_e.stateNode;if(typeof qe.componentWillUnmount=="function"){u=_e,a=_e.return;try{i=u,qe.props=i.memoizedProps,qe.state=i.memoizedState,qe.componentWillUnmount()}catch(Ze){jt(u,a,Ze)}}break;case 5:Ss(_e,_e.return);break;case 22:if(_e.memoizedState!==null){bp(Se);continue}}ze!==null?(ze.return=_e,Xe=ze):bp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{d=Se.stateNode,ee?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Se.stateNode,z=Se.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=it("display",E))}catch(Ze){jt(n,n.return,Ze)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(Ze){jt(n,n.return,Ze)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:si(i,n),vi(n),u&4&&Ap(n);break;case 21:break;default:si(i,n),vi(n)}}function vi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Ep(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ht(d,""),u.flags&=-33);var m=Tp(n);ac(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,U=Tp(n);oc(n,U,E);break;default:throw Error(t(161))}}catch(z){jt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function S0(n,i,a){Xe=n,Rp(n)}function Rp(n,i,a){for(var u=(n.mode&1)!==0;Xe!==null;){var d=Xe,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||Ya;if(!E){var U=d.alternate,z=U!==null&&U.memoizedState!==null||_n;U=Ya;var ee=_n;if(Ya=E,(_n=z)&&!ee)for(Xe=d;Xe!==null;)E=Xe,z=E.child,E.tag===22&&E.memoizedState!==null?Lp(d):z!==null?(z.return=E,Xe=z):Lp(d);for(;m!==null;)Xe=m,Rp(m),m=m.sibling;Xe=d,Ya=U,_n=ee}Pp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Xe=m):Pp(n)}}function Pp(n){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||qa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ii(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&bh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}bh(i,E,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&ao(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&sc(i)}catch(_e){jt(i,i.return,_e)}}if(i===n){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function bp(n){for(;Xe!==null;){var i=Xe;if(i===n){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Lp(n){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{qa(4,i)}catch(z){jt(i,a,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(z){jt(i,d,z)}}var m=i.return;try{sc(i)}catch(z){jt(i,m,z)}break;case 5:var E=i.return;try{sc(i)}catch(z){jt(i,E,z)}}}catch(z){jt(i,i.return,z)}if(i===n){Xe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Xe=U;break}Xe=i.return}}var M0=Math.ceil,$a=R.ReactCurrentDispatcher,lc=R.ReactCurrentOwner,Kn=R.ReactCurrentBatchConfig,wt=0,rn=null,$t=null,un=0,Gn=0,Ms=er(0),Qt=0,Lo=null,Ir=0,Za=0,uc=0,Do=null,Fn=null,cc=0,Es=1/0,Di=null,Ka=!1,fc=null,or=null,Ja=!1,ar=null,Qa=0,No=0,dc=null,el=-1,tl=0;function Cn(){return(wt&6)!==0?G():el!==-1?el:el=G()}function lr(n){return(n.mode&1)===0?1:(wt&2)!==0&&un!==0?un&-un:s0.transition!==null?(tl===0&&(tl=wn()),tl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:Nd(n.type)),n)}function oi(n,i,a,u){if(50<No)throw No=0,dc=null,Error(t(185));Yt(n,a,u),((wt&2)===0||n!==rn)&&(n===rn&&((wt&2)===0&&(Za|=a),Qt===4&&ur(n,un)),On(n,u),a===1&&wt===0&&(i.mode&1)===0&&(Es=G()+500,Pa&&nr()))}function On(n,i){var a=n.callbackNode;Ar(n,i);var u=ei(n,n===rn?un:0);if(u===0)a!==null&&Y(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Y(a),i===1)n.tag===0?r0(Np.bind(null,n)):_h(Np.bind(null,n)),e0(function(){(wt&6)===0&&nr()}),a=null;else{switch(wd(u)){case 1:a=Ue;break;case 4:a=Ge;break;case 16:a=We;break;case 536870912:a=lt;break;default:a=We}a=Hp(a,Dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Dp(n,i){if(el=-1,tl=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ts()&&n.callbackNode!==a)return null;var u=ei(n,n===rn?un:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=nl(n,u);else{i=u;var d=wt;wt|=2;var m=Ip();(rn!==n||un!==i)&&(Di=null,Es=G()+500,Or(n,i));do try{w0();break}catch(U){Up(n,U)}while(!0);bu(),$a.current=m,wt=d,$t!==null?i=0:(rn=null,un=0,i=Qt)}if(i!==0){if(i===2&&(d=Dt(n),d!==0&&(u=d,i=hc(n,d))),i===1)throw a=Lo,Or(n,0),ur(n,u),On(n,G()),a;if(i===6)ur(n,u);else{if(d=n.current.alternate,(u&30)===0&&!E0(d)&&(i=nl(n,u),i===2&&(m=Dt(n),m!==0&&(u=m,i=hc(n,m))),i===1))throw a=Lo,Or(n,0),ur(n,u),On(n,G()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:kr(n,Fn,Di);break;case 3:if(ur(n,u),(u&130023424)===u&&(i=cc+500-G(),10<i)){if(ei(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=xu(kr.bind(null,n,Fn,Di),i);break}kr(n,Fn,Di);break;case 4:if(ur(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-Ct(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=G()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*M0(u/1960))-u,10<u){n.timeoutHandle=xu(kr.bind(null,n,Fn,Di),u);break}kr(n,Fn,Di);break;case 5:kr(n,Fn,Di);break;default:throw Error(t(329))}}}return On(n,G()),n.callbackNode===a?Dp.bind(null,n):null}function hc(n,i){var a=Do;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=nl(n,i),n!==2&&(i=Fn,Fn=a,i!==null&&pc(i)),n}function pc(n){Fn===null?Fn=n:Fn.push.apply(Fn,n)}function E0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!ti(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i){for(i&=~uc,i&=~Za,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ct(i),u=1<<a;n[a]=-1,i&=~u}}function Np(n){if((wt&6)!==0)throw Error(t(327));Ts();var i=ei(n,0);if((i&1)===0)return On(n,G()),null;var a=nl(n,i);if(n.tag!==0&&a===2){var u=Dt(n);u!==0&&(i=u,a=hc(n,u))}if(a===1)throw a=Lo,Or(n,0),ur(n,i),On(n,G()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,kr(n,Fn,Di),On(n,G()),null}function mc(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Es=G()+500,Pa&&nr())}}function Fr(n){ar!==null&&ar.tag===0&&(wt&6)===0&&Ts();var i=wt;wt|=1;var a=Kn.transition,u=yt;try{if(Kn.transition=null,yt=1,n)return n()}finally{yt=u,Kn.transition=a,wt=i,(wt&6)===0&&nr()}}function gc(){Gn=Ms.current,kt(Ms)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Qv(a)),$t!==null)for(a=$t.return;a!==null;){var u=a;switch(wu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ca();break;case 3:xs(),kt(Nn),kt(mn),ku();break;case 5:Fu(u);break;case 4:xs();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:Lu(u.type._context);break;case 22:case 23:gc()}a=a.return}if(rn=n,$t=n=cr(n.current,null),un=Gn=i,Qt=0,Lo=null,uc=Za=Ir=0,Fn=Do=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}a.pending=u}Dr=null}return n}function Up(n,i){do{var a=$t;try{if(bu(),za.current=Ga,Ba){for(var u=Gt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ba=!1}if(Ur=0,nn=Jt=Gt=null,wo=!1,Ao=0,lc.current=null,a===null||a.return===null){Qt=1,Lo=i,$t=null;break}e:{var m=n,E=a.return,U=a,z=i;if(i=un,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,xe=U,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ze=sp(E);if(ze!==null){ze.flags&=-257,op(ze,E,U,m,i),ze.mode&1&&rp(m,ee,i),i=ze,z=ee;var qe=i.updateQueue;if(qe===null){var Ze=new Set;Ze.add(z),i.updateQueue=Ze}else qe.add(z);break e}else{if((i&1)===0){rp(m,ee,i),vc();break e}z=Error(t(426))}}else if(Bt&&U.mode&1){var qt=sp(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),op(qt,E,U,m,i),Ru(ys(z,U));break e}}m=z=ys(z,U),Qt!==4&&(Qt=2),Do===null?Do=[m]:Do.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=np(m,z,i);Ph(m,Z);break e;case 1:U=z;var W=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(or===null||!or.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=ip(m,U,i);Ph(m,Ce);break e}}m=m.return}while(m!==null)}Op(a)}catch(Qe){i=Qe,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function Ip(){var n=$a.current;return $a.current=Ga,n===null?Ga:n}function vc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),rn===null||(Ir&268435455)===0&&(Za&268435455)===0||ur(rn,un)}function nl(n,i){var a=wt;wt|=2;var u=Ip();(rn!==n||un!==i)&&(Di=null,Or(n,i));do try{T0();break}catch(d){Up(n,d)}while(!0);if(bu(),wt=a,$a.current=u,$t!==null)throw Error(t(261));return rn=null,un=0,Qt}function T0(){for(;$t!==null;)Fp($t)}function w0(){for(;$t!==null&&!te();)Fp($t)}function Fp(n){var i=Bp(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?Op(n):$t=i,lc.current=null}function Op(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=v0(a,i,Gn),a!==null){$t=a;return}}else{if(a=_0(a,i),a!==null){a.flags&=32767,$t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function kr(n,i,a){var u=yt,d=Kn.transition;try{Kn.transition=null,yt=1,A0(n,i,a,u)}finally{Kn.transition=d,yt=u}return null}function A0(n,i,a,u){do Ts();while(ar!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(pn(n,m),n===rn&&($t=rn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ja||(Ja=!0,Hp(We,function(){return Ts(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Kn.transition,Kn.transition=null;var E=yt;yt=1;var U=wt;wt|=4,lc.current=null,y0(n,a),Cp(a,n),jv(vu),ha=!!gu,vu=gu=null,n.current=a,S0(a),ie(),wt=U,yt=E,Kn.transition=m}else n.current=a;if(Ja&&(Ja=!1,ar=n,Qa=d),m=n.pendingLanes,m===0&&(or=null),At(a.stateNode),On(n,G()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ka)throw Ka=!1,n=fc,fc=null,n;return(Qa&1)!==0&&n.tag!==0&&Ts(),m=n.pendingLanes,(m&1)!==0?n===dc?No++:(No=0,dc=n):No=0,nr(),null}function Ts(){if(ar!==null){var n=wd(Qa),i=Kn.transition,a=yt;try{if(Kn.transition=null,yt=16>n?16:n,ar===null)var u=!1;else{if(n=ar,ar=null,Qa=0,(wt&6)!==0)throw Error(t(331));var d=wt;for(wt|=4,Xe=n.current;Xe!==null;){var m=Xe,E=m.child;if((Xe.flags&16)!==0){var U=m.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ee=U[z];for(Xe=ee;Xe!==null;){var xe=Xe;switch(xe.tag){case 0:case 11:case 15:bo(8,xe,m)}var Se=xe.child;if(Se!==null)Se.return=xe,Xe=Se;else for(;Xe!==null;){xe=Xe;var _e=xe.sibling,ze=xe.return;if(Mp(xe),xe===ee){Xe=null;break}if(_e!==null){_e.return=ze,Xe=_e;break}Xe=ze}}}var qe=m.alternate;if(qe!==null){var Ze=qe.child;if(Ze!==null){qe.child=null;do{var qt=Ze.sibling;Ze.sibling=null,Ze=qt}while(Ze!==null)}}Xe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Xe=E;else e:for(;Xe!==null;){if(m=Xe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:bo(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,Xe=Z;break e}Xe=m.return}}var W=n.current;for(Xe=W;Xe!==null;){E=Xe;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,Xe=Q;else e:for(E=W;Xe!==null;){if(U=Xe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:qa(9,U)}}catch(Qe){jt(U,U.return,Qe)}if(U===E){Xe=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,Xe=Ce;break e}Xe=U.return}}if(wt=d,nr(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(et,n)}catch{}u=!0}return u}finally{yt=a,Kn.transition=i}}return!1}function kp(n,i,a){i=ys(a,i),i=np(n,i,1),n=rr(n,i,1),i=Cn(),n!==null&&(Yt(n,1,i),On(n,i))}function jt(n,i,a){if(n.tag===3)kp(n,n,a);else for(;i!==null;){if(i.tag===3){kp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=ys(a,n),n=ip(i,n,1),i=rr(i,n,1),n=Cn(),i!==null&&(Yt(i,1,n),On(i,n));break}}i=i.return}}function C0(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&a,rn===n&&(un&a)===a&&(Qt===4||Qt===3&&(un&130023424)===un&&500>G()-cc?Or(n,0):uc|=a),On(n,i)}function zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Mt,Mt<<=1,(Mt&130023424)===0&&(Mt=4194304)));var a=Cn();n=Pi(n,i),n!==null&&(Yt(n,i,a),On(n,a))}function R0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),zp(n,a)}function P0(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),zp(n,a)}var Bp;Bp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)In=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return In=!1,g0(n,i,a);In=(n.flags&131072)!==0}else In=!1,Bt&&(i.flags&1048576)!==0&&xh(i,La,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ja(n,i),n=i.pendingProps;var d=ds(i,mn.current);_s(i,a),d=Hu(null,i,u,n,d,a);var m=Vu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(u)?(m=!0,Ra(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Uu(i),d.updater=Wa,i.stateNode=d,d._reactInternals=i,qu(i,u,n,a),i=Ju(null,i,u,!0,m,a)):(i.tag=0,Bt&&m&&Tu(i),An(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(ja(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=L0(u),n=ii(u,n),d){case 0:i=Ku(null,i,u,n,a);break e;case 1:i=dp(null,i,u,n,a);break e;case 11:i=ap(null,i,u,n,a);break e;case 14:i=lp(null,i,u,ii(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),Ku(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),dp(n,i,u,d,a);case 3:e:{if(hp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Rh(n,i),Oa(i,u,null,a);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ys(Error(t(423)),i),i=pp(n,i,u,a,d);break e}else if(u!==d){d=ys(Error(t(424)),i),i=pp(n,i,u,a,d);break e}else for(Vn=Qi(i.stateNode.containerInfo.firstChild),Hn=i,Bt=!0,ni=null,a=Ah(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),u===d){i=Li(n,i,a);break e}An(n,i,u,a)}i=i.child}return i;case 5:return Lh(i),n===null&&Cu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,_u(u,d)?E=null:m!==null&&_u(u,m)&&(i.flags|=32),fp(n,i),An(n,i,E,a),i.child;case 6:return n===null&&Cu(i),null;case 13:return mp(n,i,a);case 4:return Iu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=gs(i,null,u,a):An(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),ap(n,i,u,d,a);case 7:return An(n,i,i.pendingProps,a),i.child;case 8:return An(n,i,i.pendingProps.children,a),i.child;case 12:return An(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,It(Ua,u._currentValue),u._currentValue=E,m!==null)if(ti(m.value,E)){if(m.children===d.children&&!Nn.current){i=Li(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var z=U.firstContext;z!==null;){if(z.context===u){if(m.tag===1){z=bi(-1,a&-a),z.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),ee.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),Du(m.return,a,i),U.lanes|=a;break}z=z.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,U=E.alternate,U!==null&&(U.lanes|=a),Du(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}An(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,_s(i,a),d=$n(d),u=u(d),i.flags|=1,An(n,i,u,a),i.child;case 14:return u=i.type,d=ii(u,i.pendingProps),d=ii(u.type,d),lp(n,i,u,d,a);case 15:return up(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ii(u,d),ja(n,i),i.tag=1,Un(u)?(n=!0,Ra(i)):n=!1,_s(i,a),ep(i,u,d),qu(i,u,d,a),Ju(null,i,u,!0,n,a);case 19:return vp(n,i,a);case 22:return cp(n,i,a)}throw Error(t(156,i.tag))};function Hp(n,i){return C(n,i)}function b0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,u){return new b0(n,i,a,u)}function _c(n){return n=n.prototype,!(!n||!n.isReactComponent)}function L0(n){if(typeof n=="function")return _c(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===ce)return 14}return 2}function cr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function il(n,i,a,u,d,m){var E=2;if(u=n,typeof n=="function")_c(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case F:return zr(a.children,d,m,i);case B:E=8,d|=8;break;case b:return n=Jn(12,a,i,d|2),n.elementType=b,n.lanes=m,n;case $:return n=Jn(13,a,i,d),n.elementType=$,n.lanes=m,n;case se:return n=Jn(19,a,i,d),n.elementType=se,n.lanes=m,n;case ue:return rl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case k:E=9;break e;case ne:E=11;break e;case ce:E=14;break e;case re:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(E,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function zr(n,i,a,u){return n=Jn(7,n,u,i),n.lanes=a,n}function rl(n,i,a,u){return n=Jn(22,n,u,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function xc(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function yc(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function D0(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Sc(n,i,a,u,d,m,E,U,z){return n=new D0(n,i,a,U,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(m),n}function N0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Vp(n){if(!n)return tr;n=n._reactInternals;e:{if(hi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Un(a))return gh(n,a,i)}return i}function Gp(n,i,a,u,d,m,E,U,z){return n=Sc(a,u,!0,n,d,m,E,U,z),n.context=Vp(null),a=n.current,u=Cn(),d=lr(a),m=bi(u,d),m.callback=i??null,rr(a,m,d),n.current.lanes=d,Yt(n,d,u),On(n,u),n}function sl(n,i,a,u){var d=i.current,m=Cn(),E=lr(d);return a=Vp(a),i.context===null?i.context=a:i.pendingContext=a,i=bi(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=rr(d,i,E),n!==null&&(oi(n,d,E,m),Fa(n,d,E)),E}function ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Wp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Mc(n,i){Wp(n,i),(n=n.alternate)&&Wp(n,i)}function U0(){return null}var Xp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ec(n){this._internalRoot=n}al.prototype.render=Ec.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));sl(n,i,null,null)},al.prototype.unmount=Ec.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){sl(null,n,null,null)}),i[wi]=null}};function al(n){this._internalRoot=n}al.prototype.unstable_scheduleHydration=function(n){if(n){var i=Rd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zi.length&&i!==0&&i<Zi[a].priority;a++);Zi.splice(a,0,n),a===0&&Ld(n)}};function Tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ll(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function I0(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ee=ol(E);m.call(ee)}}var E=Gp(i,u,n,0,null,!1,!1,"",jp);return n._reactRootContainer=E,n[wi]=E.current,vo(n.nodeType===8?n.parentNode:n),Fr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ee=ol(z);U.call(ee)}}var z=Sc(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=z,n[wi]=z.current,vo(n.nodeType===8?n.parentNode:n),Fr(function(){sl(i,z,a,u)}),z}function ul(n,i,a,u,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var z=ol(E);U.call(z)}}sl(i,E,n,d)}else E=I0(a,i,n,d,u);return ol(E)}Ad=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=an(i.pendingLanes);a!==0&&(Cr(i,a|1),On(i,G()),(wt&6)===0&&(Es=G()+500,nr()))}break;case 13:Fr(function(){var u=Pi(n,1);if(u!==null){var d=Cn();oi(u,n,1,d)}}),Mc(n,1)}},$l=function(n){if(n.tag===13){var i=Pi(n,134217728);if(i!==null){var a=Cn();oi(i,n,134217728,a)}Mc(n,134217728)}},Cd=function(n){if(n.tag===13){var i=lr(n),a=Pi(n,i);if(a!==null){var u=Cn();oi(a,n,i,u)}Mc(n,i)}},Rd=function(){return yt},Pd=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},Ne=function(n,i,a){switch(i){case"input":if(He(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Aa(u);if(!d)throw Error(t(90));ge(u),He(u,d)}}}break;case"textarea":fe(n,a);break;case"select":i=a.value,i!=null&&L(n,!!a.multiple,i,!1)}},Ft=mc,Kt=Fr;var F0={usingClientEntryPoint:!1,Events:[yo,cs,Aa,Oe,ft,mc]},Uo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O0={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ua(n),n===null?null:n.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{et=cl.inject(O0),dt=cl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0,kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(i))throw Error(t(200));return N0(n,i,null,a)},kn.createRoot=function(n,i){if(!Tc(n))throw Error(t(299));var a=!1,u="",d=Xp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Sc(n,1,!1,null,null,a,!1,u,d),n[wi]=i.current,vo(n.nodeType===8?n.parentNode:n),new Ec(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ua(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return Fr(n)},kn.hydrate=function(n,i,a){if(!ll(i))throw Error(t(200));return ul(null,n,i,!0,a)},kn.hydrateRoot=function(n,i,a){if(!Tc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",E=Xp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Gp(i,null,n,1,a??null,d,!1,m,E),n[wi]=i.current,vo(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new al(i)},kn.render=function(n,i,a){if(!ll(i))throw Error(t(200));return ul(null,n,i,!1,a)},kn.unmountComponentAtNode=function(n){if(!ll(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1},kn.unstable_batchedUpdates=mc,kn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!ll(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ul(n,i,a,!1,u)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var em;function fg(){if(em)return Cc.exports;em=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cc.exports=j0(),Cc.exports}var tm;function Y0(){if(tm)return fl;tm=1;var s=fg();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var q0=Y0(),$0=fg();/**
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
 */const J0=bt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...f},h)=>bt.createElement("svg",{ref:h,...K0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:dg("lucide",o),...f},[...c.map(([p,g])=>bt.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=(s,e)=>{const t=bt.forwardRef(({className:r,...o},l)=>bt.createElement(J0,{ref:l,iconNode:e,className:dg(`lucide-${Z0(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=dn("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=dn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=dn("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=dn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=dn("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=dn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=dn("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=dn("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=dn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=dn("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=dn("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=dn("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=dn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=dn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=dn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=dn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=dn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),mg=[{id:"front",label:"Front"},{id:"hero",label:"Hero"},{id:"isometric",label:"Isometric"},{id:"orbit",label:"Orbit"}],gg=[{id:"glass",label:"iPhone-style Glass",body:"#11151c",edge:"#1f2730",metalness:.78,roughness:.26},{id:"matte",label:"Matte Black",body:"#151719",edge:"#25282b",metalness:.35,roughness:.72},{id:"silver",label:"Silver",body:"#d9dee2",edge:"#f5f7f8",metalness:.62,roughness:.34}],df=[{id:"studio",label:"Studio",swatch:"#eef3f7",clear:"#edf3f7",floor:"#dfe8ef"},{id:"sky",label:"Sky",swatch:"#dff7ff",clear:"#e5f9ff",floor:"#d1eff8"},{id:"paper",label:"Paper",swatch:"#f7f8f9",clear:"#f8fafb",floor:"#e8edf1"},{id:"graphite",label:"Graphite",swatch:"#202830",clear:"#161c23",floor:"#10151b"},{id:"coral",label:"Coral",swatch:"#fff0ec",clear:"#fff3ef",floor:"#f3d9d2"}],nm={angle:"hero",material:"glass",background:"studio",reflection:62,depth:48,shadow:58,lighting:72,autoSpin:!1};function Fo({icon:s,title:e,children:t}){return ye.jsxs("section",{className:"inspector-section",children:[ye.jsxs("div",{className:"section-title",children:[ye.jsx(s,{size:16}),ye.jsx("h2",{children:e})]}),t]})}function im({label:s,value:e,options:t,onChange:r}){return ye.jsxs("label",{className:"field",children:[ye.jsx("span",{className:"field-label",children:s}),ye.jsx("span",{className:"segmented",children:t.map(o=>ye.jsx("button",{className:o.id===e?"selected":"",type:"button",onClick:()=>r(o.id),children:o.label},o.id))})]})}function dl({label:s,value:e,min:t=0,max:r=100,onChange:o}){return ye.jsxs("label",{className:"field range-field",children:[ye.jsxs("span",{className:"field-row",children:[ye.jsx("span",{className:"field-label",children:s}),ye.jsx("span",{className:"value-readout",children:e})]}),ye.jsx("input",{type:"range",min:t,max:r,value:e,onChange:l=>o(Number(l.target.value))})]})}function p_({label:s,icon:e,checked:t,onChange:r}){return ye.jsxs("button",{className:t?"toggle-control active":"toggle-control",type:"button","aria-pressed":t,onClick:()=>r(!t),children:[ye.jsxs("span",{children:[ye.jsx(e,{size:16}),s]}),ye.jsx("span",{className:"toggle-track","aria-hidden":"true",children:ye.jsx("span",{})})]})}function m_({value:s,onChange:e}){return ye.jsxs("div",{className:"field",children:[ye.jsx("span",{className:"field-label",children:"Background"}),ye.jsx("div",{className:"swatches",children:df.map(t=>ye.jsx("button",{className:t.id===s?"swatch selected":"swatch",type:"button",title:t.label,"aria-label":t.label,onClick:()=>e(t.id),children:ye.jsx("span",{style:{background:t.swatch}})},t.id))})]})}function g_({settings:s,onSettingChange:e}){return ye.jsxs("aside",{className:"inspector","aria-label":"Scene inspector",children:[ye.jsx(Fo,{icon:d_,title:"Device",children:ye.jsx(im,{label:"Finish",value:s.material,options:gg,onChange:t=>e("material",t)})}),ye.jsxs(Fo,{icon:hg,title:"Camera",children:[ye.jsx(im,{label:"Angle",value:s.angle,options:mg,onChange:t=>e("angle",t)}),ye.jsx(dl,{label:"Depth",value:s.depth,onChange:t=>e("depth",t)})]}),ye.jsxs(Fo,{icon:Q0,title:"Lighting",children:[ye.jsx(dl,{label:"Reflection",value:s.reflection,onChange:t=>e("reflection",t)}),ye.jsx(dl,{label:"Shadow",value:s.shadow,onChange:t=>e("shadow",t)}),ye.jsx(dl,{label:"Key Light",value:s.lighting,onChange:t=>e("lighting",t)}),ye.jsx(p_,{label:"Auto Spin",icon:u_,checked:s.autoSpin,onChange:t=>e("autoSpin",t)})]}),ye.jsx(Fo,{icon:a_,title:"Background",children:ye.jsx(m_,{value:s.background,onChange:t=>e("background",t)})}),ye.jsx(Fo,{icon:f_,title:"Render",children:ye.jsxs("div",{className:"render-stats",children:[ye.jsxs("span",{children:[ye.jsx(s_,{size:15}),"WebGL"]}),ye.jsxs("span",{children:[ye.jsx(n_,{size:15}),"PNG"]})]})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="171",v_=0,rm=1,__=2,vg=1,_g=2,ki=3,Mr=0,zn=1,zi=2,xr=0,Gs=1,sm=2,om=3,am=4,x_=5,qr=100,y_=101,S_=102,M_=103,E_=104,T_=200,w_=201,A_=202,C_=203,hf=204,pf=205,R_=206,P_=207,b_=208,L_=209,D_=210,N_=211,U_=212,I_=213,F_=214,mf=0,gf=1,vf=2,js=3,_f=4,xf=5,yf=6,Sf=7,xg=0,O_=1,k_=2,yr=0,z_=1,B_=2,H_=3,yg=4,V_=5,G_=6,W_=7,Sg=300,Ys=301,qs=302,Mf=303,Ef=304,Xl=306,Tf=1e3,Bi=1001,wf=1002,di=1003,X_=1004,hl=1005,xi=1006,bc=1007,Zr=1008,Wi=1009,Mg=1010,Eg=1011,$o=1012,od=1013,Kr=1014,Hi=1015,ta=1016,ad=1017,ld=1018,$s=1020,Tg=35902,wg=1021,Ag=1022,fi=1023,Cg=1024,Rg=1025,Ws=1026,Zs=1027,Pg=1028,ud=1029,bg=1030,cd=1031,fd=1033,Ol=33776,kl=33777,zl=33778,Bl=33779,Af=35840,Cf=35841,Rf=35842,Pf=35843,bf=36196,Lf=37492,Df=37496,Nf=37808,Uf=37809,If=37810,Ff=37811,Of=37812,kf=37813,zf=37814,Bf=37815,Hf=37816,Vf=37817,Gf=37818,Wf=37819,Xf=37820,jf=37821,Hl=36492,Yf=36494,qf=36495,Lg=36283,$f=36284,Zf=36285,Kf=36286,j_=3200,Y_=3201,Dg=0,q_=1,_r="",bn="srgb",Ks="srgb-linear",Gl="linear",Nt="srgb",ws=7680,lm=519,$_=512,Z_=513,K_=514,Ng=515,J_=516,Q_=517,ex=518,tx=519,um=35044,cm="300 es",Vi=2e3,Wl=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fm=1234567;const Xo=Math.PI/180,Zo=180/Math.PI;function es(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function dd(s,e){return(s%e+e)%e}function nx(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function ix(s,e,t){return s!==e?(t-s)/(e-s):0}function jo(s,e,t){return(1-t)*s+t*e}function rx(s,e,t,r){return jo(s,e,1-Math.exp(-t*r))}function sx(s,e=1){return e-Math.abs(dd(s,e*2)-e)}function ox(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ax(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ux(s,e){return s+Math.random()*(e-s)}function cx(s){return s*(.5-Math.random())}function fx(s){s!==void 0&&(fm=s);let e=fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dx(s){return s*Xo}function hx(s){return s*Zo}function px(s){return(s&s-1)===0&&s!==0}function mx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vx(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),g=c((e+r)/2),v=l((e-r)/2),x=c((e-r)/2),S=l((r-e)/2),M=c((r-e)/2);switch(o){case"XYX":s.set(f*g,h*v,h*x,f*p);break;case"YZY":s.set(h*x,f*g,h*v,f*p);break;case"ZXZ":s.set(h*v,h*x,f*g,f*p);break;case"XZX":s.set(f*g,h*M,h*S,f*p);break;case"YXY":s.set(h*S,f*g,h*M,f*p);break;case"ZYZ":s.set(h*M,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function zs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _x={DEG2RAD:Xo,RAD2DEG:Zo,generateUUID:es,clamp:gt,euclideanModulo:dd,mapLinear:nx,inverseLerp:ix,lerp:jo,damp:rx,pingpong:sx,smoothstep:ox,smootherstep:ax,randInt:lx,randFloat:ux,randFloatSpread:cx,seededRandom:fx,degToRad:dx,radToDeg:hx,isPowerOfTwo:px,ceilPowerOfTwo:mx,floorPowerOfTwo:gx,setQuaternionFromProperEuler:vx,normalize:Rn,denormalize:zs};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,r,o,l,c,f,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],M=r[8],w=o[0],y=o[3],_=o[6],N=o[1],P=o[4],R=o[7],V=o[2],O=o[5],F=o[8];return l[0]=c*w+f*N+h*V,l[3]=c*y+f*P+h*O,l[6]=c*_+f*R+h*F,l[1]=p*w+g*N+v*V,l[4]=p*y+g*P+v*O,l[7]=p*_+g*R+v*F,l[2]=x*w+S*N+M*V,l[5]=x*y+S*P+M*O,l[8]=x*_+S*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,x=f*h-g*l,S=p*l-c*h,M=t*v+r*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(o*p-g*r)*w,e[2]=(f*r-o*c)*w,e[3]=x*w,e[4]=(g*t-o*h)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(r*h-p*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new pt;function Ug(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xx(){const s=Ko("canvas");return s.style.display="block",s}const dm={};function Bs(s){s in dm||(dm[s]=!0,console.warn(s))}function yx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Sx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const hm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ex(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(o.r=Gi(o.r),o.g=Gi(o.g),o.b=Gi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=Xs(o.r),o.g=Xs(o.g),o.b=Xs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===_r?Gl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ks]:{primaries:e,whitePoint:r,transfer:Gl,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),s}const Pt=Ex();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class Tx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Ko("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ko("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Gi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Gi(t[r]/255)*255):t[r]=Gi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Dc(o[c].image)):l.push(Dc(o[c]))}else l=Dc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ax=0;class Sn extends Qs{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,r=Bi,o=Bi,l=xi,c=Zr,f=fi,h=Wi,p=Sn.DEFAULT_ANISOTROPY,g=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=es(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Sg;Sn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,r=0,o=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],g=h[4],v=h[8],x=h[1],S=h[5],M=h[9],w=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,R=(S+1)/2,V=(_+1)/2,O=(g+x)/4,F=(v+w)/4,B=(M+y)/4;return P>R&&P>V?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=O/r,l=F/r):R>V?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=O/o,l=B/o):V<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(V),r=F/l,o=B/l),this.set(r,o,l,t),this}let N=Math.sqrt((y-M)*(y-M)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-M)/N,this.y=(v-w)/N,this.z=(x-g)/N,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cx extends Qs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Sn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ig(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends Cx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fg extends Sn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rx extends Sn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];const x=l[c+0],S=l[c+1],M=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(v!==w||h!==x||p!==S||g!==M){let y=1-f;const _=h*x+p*S+g*M+v*w,N=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const V=Math.sqrt(P),O=Math.atan2(V,_*N);y=Math.sin(y*O)/V,f=Math.sin(f*O)/V}const R=f*N;if(h=h*y+x*R,p=p*y+S*R,g=g*y+M*R,v=v*y+w*R,y===1-f){const V=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=V,p*=V,g*=V,v*=V}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],g=r[o+3],v=l[c],x=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*v+h*S-p*x,e[t+1]=h*M+g*x+p*v-f*S,e[t+2]=p*M+g*S+f*x-h*v,e[t+3]=g*M-f*v-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),g=f(o/2),v=f(l/2),x=h(r/2),S=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"YXZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"ZXY":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"ZYX":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"YZX":this._x=x*g*v+p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v-x*S*M;break;case"XZY":this._x=x*g*v-p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+o*p-l*h,this._y=o*g+c*h+l*f-r*p,this._z=l*g+c*p+r*h-o*f,this._w=c*g-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=o*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),g=2*(f*t-l*o),v=2*(l*r-c*t);return this.x=t+h*p+c*v-f*g,this.y=r+h*g+f*p-l*v,this.z=o+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new j,mm=new na;class ia{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(l,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pl.copy(r.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),ml.subVectors(this.max,Oo),Cs.subVectors(e.a,Oo),Rs.subVectors(e.b,Oo),Ps.subVectors(e.c,Oo),dr.subVectors(Rs,Cs),hr.subVectors(Ps,Rs),Br.subVectors(Cs,Ps);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Br.y,Br.x,0];return!Uc(t,Cs,Rs,Ps,ml)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Cs,Rs,Ps,ml))?!1:(gl.crossVectors(dr,hr),t=[gl.x,gl.y,gl.z],Uc(t,Cs,Rs,Ps,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new j,new j,new j,new j,new j,new j,new j,new j],ai=new j,pl=new ia,Cs=new j,Rs=new j,Ps=new j,dr=new j,hr=new j,Br=new j,Oo=new j,ml=new j,gl=new j,Hr=new j;function Uc(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Hr.fromArray(s,l);const f=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),h=e.dot(Hr),p=t.dot(Hr),g=r.dot(Hr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const Px=new ia,ko=new j,Ic=new j;class hd{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Px.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ko,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Ic)),this.expandByPoint(ko.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new j,Fc=new j,vl=new j,pr=new j,Oc=new j,_l=new j,kc=new j;class bx{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Fc.copy(e).add(t).multiplyScalar(.5),vl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Fc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(vl),f=pr.dot(this.direction),h=-pr.dot(vl),p=pr.lengthSq(),g=Math.abs(1-c*c);let v,x,S,M;if(g>0)if(v=c*h-f,x=c*f-h,M=l*g,v>=0)if(x>=-M)if(x<=M){const w=1/g;v*=w,x*=w,S=v*(v+c*x+2*f)+x*(c*v+x+2*h)+p}else x=l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x=-l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x<=-M?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p):x<=M?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Fc).addScaledVector(vl,x),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),o=Ui.dot(Ui)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,o,l){Oc.subVectors(t,e),_l.subVectors(r,e),kc.crossVectors(Oc,_l);let c=this.direction.dot(kc),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(_l.crossVectors(pr,_l));if(h<0)return null;const p=f*this.direction.dot(Oc.cross(pr));if(p<0||h+p>c)return null;const g=-f*pr.dot(kc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,o,l,c,f,h,p,g,v,x,S,M,w,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,g,v,x,S,M,w,y)}set(e,t,r,o,l,c,f,h,p,g,v,x,S,M,w,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=M,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),c=1/bs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*v,M=f*g,w=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+M*p,t[5]=x-w*p,t[9]=-f*h,t[2]=w-x*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,M=p*g,w=p*v;t[0]=x+w*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=w+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,M=p*g,w=p*v;t[0]=x-w*f,t[4]=-c*v,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=w-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*v,M=f*g,w=f*v;t[0]=h*g,t[4]=M*p-S,t[8]=x*p+w,t[1]=h*v,t[5]=w*p+x,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,M=f*h,w=f*p;t[0]=h*g,t[4]=w-x*v,t[8]=M*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*v+M,t[10]=x-w*v}else if(e.order==="XZY"){const x=c*h,S=c*p,M=f*h,w=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=x*v+w,t[5]=c*g,t[9]=S*v-M,t[2]=M*v-S,t[6]=f*g,t[10]=w*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lx,e,Dx)}lookAt(e,t,r){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),mr.crossVectors(r,Wn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),mr.crossVectors(r,Wn)),mr.normalize(),xl.crossVectors(Wn,mr),o[0]=mr.x,o[4]=xl.x,o[8]=Wn.x,o[1]=mr.y,o[5]=xl.y,o[9]=Wn.y,o[2]=mr.z,o[6]=xl.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],M=r[2],w=r[6],y=r[10],_=r[14],N=r[3],P=r[7],R=r[11],V=r[15],O=o[0],F=o[4],B=o[8],b=o[12],A=o[1],k=o[5],ne=o[9],$=o[13],se=o[2],ce=o[6],re=o[10],ue=o[14],H=o[3],le=o[7],oe=o[11],I=o[15];return l[0]=c*O+f*A+h*se+p*H,l[4]=c*F+f*k+h*ce+p*le,l[8]=c*B+f*ne+h*re+p*oe,l[12]=c*b+f*$+h*ue+p*I,l[1]=g*O+v*A+x*se+S*H,l[5]=g*F+v*k+x*ce+S*le,l[9]=g*B+v*ne+x*re+S*oe,l[13]=g*b+v*$+x*ue+S*I,l[2]=M*O+w*A+y*se+_*H,l[6]=M*F+w*k+y*ce+_*le,l[10]=M*B+w*ne+y*re+_*oe,l[14]=M*b+w*$+y*ue+_*I,l[3]=N*O+P*A+R*se+V*H,l[7]=N*F+P*k+R*ce+V*le,l[11]=N*B+P*ne+R*re+V*oe,l[15]=N*b+P*$+R*ue+V*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],M=e[3],w=e[7],y=e[11],_=e[15];return M*(+l*h*v-o*p*v-l*f*x+r*p*x+o*f*S-r*h*S)+w*(+t*h*S-t*p*x+l*c*x-o*c*S+o*p*g-l*h*g)+y*(+t*p*v-t*f*S-l*c*v+r*c*S+l*f*g-r*p*g)+_*(-o*f*g-t*h*v+t*f*x+o*c*v-r*c*x+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],M=e[12],w=e[13],y=e[14],_=e[15],N=v*y*p-w*x*p+w*h*S-f*y*S-v*h*_+f*x*_,P=M*x*p-g*y*p-M*h*S+c*y*S+g*h*_-c*x*_,R=g*w*p-M*v*p+M*f*S-c*w*S-g*f*_+c*v*_,V=M*v*h-g*w*h-M*f*x+c*w*x+g*f*y-c*v*y,O=t*N+r*P+o*R+l*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=N*F,e[1]=(w*x*l-v*y*l-w*o*S+r*y*S+v*o*_-r*x*_)*F,e[2]=(f*y*l-w*h*l+w*o*p-r*y*p-f*o*_+r*h*_)*F,e[3]=(v*h*l-f*x*l-v*o*p+r*x*p+f*o*S-r*h*S)*F,e[4]=P*F,e[5]=(g*y*l-M*x*l+M*o*S-t*y*S-g*o*_+t*x*_)*F,e[6]=(M*h*l-c*y*l-M*o*p+t*y*p+c*o*_-t*h*_)*F,e[7]=(c*x*l-g*h*l+g*o*p-t*x*p-c*o*S+t*h*S)*F,e[8]=R*F,e[9]=(M*v*l-g*w*l-M*r*S+t*w*S+g*r*_-t*v*_)*F,e[10]=(c*w*l-M*f*l+M*r*p-t*w*p-c*r*_+t*f*_)*F,e[11]=(g*f*l-c*v*l-g*r*p+t*v*p+c*r*S-t*f*S)*F,e[12]=V*F,e[13]=(g*w*o-M*v*o+M*r*x-t*w*x-g*r*y+t*v*y)*F,e[14]=(M*f*o-c*w*o-M*r*h+t*w*h+c*r*y-t*f*y)*F,e[15]=(c*v*o-g*f*o+g*r*h-t*v*h-c*r*x+t*f*x)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+r,g*h-o*c,0,p*h-o*f,g*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,x=l*p,S=l*g,M=l*v,w=c*g,y=c*v,_=f*v,N=h*p,P=h*g,R=h*v,V=r.x,O=r.y,F=r.z;return o[0]=(1-(w+_))*V,o[1]=(S+R)*V,o[2]=(M-P)*V,o[3]=0,o[4]=(S-R)*O,o[5]=(1-(x+_))*O,o[6]=(y+N)*O,o[7]=0,o[8]=(M+P)*F,o[9]=(y-N)*F,o[10]=(1-(x+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=bs.set(o[0],o[1],o[2]).length();const c=bs.set(o[4],o[5],o[6]).length(),f=bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const p=1/l,g=1/c,v=1/f;return li.elements[0]*=p,li.elements[1]*=p,li.elements[2]*=p,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=v,li.elements[9]*=v,li.elements[10]*=v,t.setFromRotationMatrix(li),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,o,l,c,f=Vi){const h=this.elements,p=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let S,M;if(f===Vi)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Wl)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Vi){const h=this.elements,p=1/(t-e),g=1/(r-o),v=1/(c-l),x=(t+e)*p,S=(r+o)*g;let M,w;if(f===Vi)M=(c+l)*v,w=-2*v;else if(f===Wl)M=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const bs=new j,li=new Ht,Lx=new j(0,0,0),Dx=new j(1,1,1),mr=new j,xl=new j,Wn=new j,gm=new Ht,vm=new na;class Ln{constructor(e=0,t=0,r=0,o=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],g=o[9],v=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nx=0;const _m=new j,Ls=new na,Ii=new Ht,yl=new j,zo=new j,Ux=new j,Ix=new na,xm=new j(1,0,0),ym=new j(0,1,0),Sm=new j(0,0,1),Mm={type:"added"},Fx={type:"removed"},Ds={type:"childadded",child:null},zc={type:"childremoved",child:null};class fn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new j,t=new Ln,r=new na,o=new j(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new pt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(zo,yl,this.up):Ii.lookAt(yl,zo,this.up),this.quaternion.setFromRotationMatrix(Ii),o&&(Ii.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fx),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Ux),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fn.DEFAULT_UP=new j(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new j,Fi=new j,Bc=new j,Oi=new j,Ns=new j,Us=new j,Em=new j,Hc=new j,Vc=new j,Gc=new j,Wc=new Ut,Xc=new Ut,jc=new Ut;class ci{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ui.subVectors(e,t),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ui.subVectors(o,t),Fi.subVectors(r,t),Bc.subVectors(e,t);const c=ui.dot(ui),f=ui.dot(Fi),h=ui.dot(Bc),p=Fi.dot(Fi),g=Fi.dot(Bc),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(p*h-f*g)*x,M=(c*g-f*h)*x;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return Wc.setScalar(0),Xc.setScalar(0),jc.setScalar(0),Wc.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,r),jc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Wc,l.x),c.addScaledVector(Xc,l.y),c.addScaledVector(jc,l.z),c}static isFrontFacing(e,t,r,o){return ui.subVectors(r,t),Fi.subVectors(e,t),ui.cross(Fi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ui.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ci.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Ns.subVectors(o,r),Us.subVectors(l,r),Hc.subVectors(e,r);const h=Ns.dot(Hc),p=Us.dot(Hc);if(h<=0&&p<=0)return t.copy(r);Vc.subVectors(e,o);const g=Ns.dot(Vc),v=Us.dot(Vc);if(g>=0&&v<=g)return t.copy(o);const x=h*v-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Ns,c);Gc.subVectors(e,l);const S=Ns.dot(Gc),M=Us.dot(Gc);if(M>=0&&S<=M)return t.copy(l);const w=S*p-h*M;if(w<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Us,f);const y=g*M-S*v;if(y<=0&&v-g>=0&&S-M>=0)return Em.subVectors(l,o),f=(v-g)/(v-g+(S-M)),t.copy(o).addScaledVector(Em,f);const _=1/(y+w+x);return c=w*_,f=x*_,t.copy(r).addScaledVector(Ns,c).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function Yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=dd(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Yc(c,l,e+1/3),this.g=Yc(c,l,e),this.b=Yc(c,l,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,t=bn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bn){const r=kg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return Pt.fromWorkingColorSpace(yn.copy(this),e),Math.round(gt(yn.r*255,0,255))*65536+Math.round(gt(yn.g*255,0,255))*256+Math.round(gt(yn.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(yn.copy(this),t);const r=yn.r,o=yn.g,l=yn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case r:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-r)/v+2;break;case l:h=(r-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=bn){Pt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,o=yn.b;return e!==bn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(Sl);const r=jo(gr.h,Sl.h,t),o=jo(gr.s,Sl.s,t),l=jo(gr.l,Sl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new St;St.NAMES=kg;let Ox=0;class eo extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Gs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hf&&(r.blendSrc=this.blendSrc),this.blendDst!==pf&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pd extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new j,Ml=new Le;class yi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=um,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=zs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Rn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),r=Rn(r,this.array),o=Rn(o,this.array),l=Rn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class zg extends yi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Bg extends yi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Mn extends yi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let kx=0;const Qn=new Ht,qc=new fn,Is=new j,Xn=new ia,Bo=new ia,on=new j;class Si extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ug(e)?Bg:zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Bo.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Xn.min,Bo.min),Xn.expandByPoint(on),on.addVectors(Xn.max,Bo.max),Xn.expandByPoint(on)):(Xn.expandByPoint(Bo.min),Xn.expandByPoint(Bo.max))}Xn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)on.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(on));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)on.fromBufferAttribute(f,p),h&&(Is.fromBufferAttribute(e,p),on.add(Is)),o=Math.max(o,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let B=0;B<r.count;B++)f[B]=new j,h[B]=new j;const p=new j,g=new j,v=new j,x=new Le,S=new Le,M=new Le,w=new j,y=new j;function _(B,b,A){p.fromBufferAttribute(r,B),g.fromBufferAttribute(r,b),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,B),S.fromBufferAttribute(l,b),M.fromBufferAttribute(l,A),g.sub(p),v.sub(p),S.sub(x),M.sub(x);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(k),f[B].add(w),f[b].add(w),f[A].add(w),h[B].add(y),h[b].add(y),h[A].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let B=0,b=N.length;B<b;++B){const A=N[B],k=A.start,ne=A.count;for(let $=k,se=k+ne;$<se;$+=3)_(e.getX($+0),e.getX($+1),e.getX($+2))}const P=new j,R=new j,V=new j,O=new j;function F(B){V.fromBufferAttribute(o,B),O.copy(V);const b=f[B];P.copy(b),P.sub(V.multiplyScalar(V.dot(b))).normalize(),R.crossVectors(O,b);const k=R.dot(h[B])<0?-1:1;c.setXYZW(B,P.x,P.y,P.z,k)}for(let B=0,b=N.length;B<b;++B){const A=N[B],k=A.start,ne=A.count;for(let $=k,se=k+ne;$<se;$+=3)F(e.getX($+0)),F(e.getX($+1)),F(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new j,l=new j,c=new j,f=new j,h=new j,p=new j,g=new j,v=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),f.add(g),h.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,x=new p.constructor(h.length*g);let S=0,M=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*g;for(let _=0;_<g;_++)x[M++]=p[S++]}return new yi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new Ht,Vr=new bx,El=new hd,wm=new j,Tl=new j,wl=new j,Al=new j,$c=new j,Cl=new j,Am=new j,Rl=new j;class cn extends fn{constructor(e=new Si,t=new pd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Cl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&($c.fromBufferAttribute(v,e),c?Cl.addScaledVector($c,g):Cl.addScaledVector($c.sub(t),g))}t.add(Cl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(El.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(El,wm)===null||Vr.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Tm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(Tm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,w=x.length;M<w;M++){const y=x[M],_=c[y.materialIndex],N=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,V=P;R<V;R+=3){const O=f.getX(R),F=f.getX(R+1),B=f.getX(R+2);o=Pl(this,_,e,r,p,g,v,O,F,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=M,_=w;y<_;y+=3){const N=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);o=Pl(this,c,e,r,p,g,v,N,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,w=x.length;M<w;M++){const y=x[M],_=c[y.materialIndex],N=Math.max(y.start,S.start),P=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=N,V=P;R<V;R+=3){const O=R,F=R+1,B=R+2;o=Pl(this,_,e,r,p,g,v,O,F,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=M,_=w;y<_;y+=3){const N=y,P=y+1,R=y+2;o=Pl(this,c,e,r,p,g,v,N,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function zx(s,e,t,r,o,l,c,f){let h;if(e.side===zn?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Mr,f),h===null)return null;Rl.copy(f),Rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Rl);return p<t.near||p>t.far?null:{distance:p,point:Rl.clone(),object:s}}function Pl(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,Tl),s.getVertexPosition(h,wl),s.getVertexPosition(p,Al);const g=zx(s,e,t,r,Tl,wl,Al,Am);if(g){const v=new j;ci.getBarycoord(Am,Tl,wl,Al,v),o&&(g.uv=ci.getInterpolatedAttribute(o,f,h,p,v,new Le)),l&&(g.uv1=ci.getInterpolatedAttribute(l,f,h,p,v,new Le)),c&&(g.normal=ci.getInterpolatedAttribute(c,f,h,p,v,new j),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new j,materialIndex:0};ci.getNormal(Tl,wl,Al,x.normal),g.face=x,g.barycoord=v}return g}class to extends Si{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let x=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Mn(p,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(v,2));function M(w,y,_,N,P,R,V,O,F,B,b){const A=R/F,k=V/B,ne=R/2,$=V/2,se=O/2,ce=F+1,re=B+1;let ue=0,H=0;const le=new j;for(let oe=0;oe<re;oe++){const I=oe*k-$;for(let q=0;q<ce;q++){const De=q*A-ne;le[w]=De*N,le[y]=I*P,le[_]=se,p.push(le.x,le.y,le.z),le[w]=0,le[y]=0,le[_]=O>0?1:-1,g.push(le.x,le.y,le.z),v.push(q/F),v.push(1-oe/B),ue+=1}}for(let oe=0;oe<B;oe++)for(let I=0;I<F;I++){const q=x+I+ce*oe,De=x+I+ce*(oe+1),K=x+(I+1)+ce*(oe+1),de=x+(I+1)+ce*oe;h.push(q,De,de),h.push(De,K,de),H+=6}f.addGroup(S,H,b),S+=H,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Pn(s){const e={};for(let t=0;t<s.length;t++){const r=Js(s[t]);for(const o in r)e[o]=r[o]}return e}function Bx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Hx={clone:Js,merge:Pn};var Vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Vg extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new j,Cm=new Le,Rm=new Le;class jn extends Vg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,Rm),t.subVectors(Rm,Cm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class Wx extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new jn(Fs,Os,e,t);o.layers=this.layers,this.add(o);const l=new jn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const c=new jn(Fs,Os,e,t);c.layers=this.layers,this.add(c);const f=new jn(Fs,Os,e,t);f.layers=this.layers,this.add(f);const h=new jn(Fs,Os,e,t);h.layers=this.layers,this.add(h);const p=new jn(Fs,Os,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Gg extends Sn{constructor(e,t,r,o,l,c,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,r,o,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xx extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Gg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new to(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:xr});l.uniforms.tEquirect.value=t;const c=new cn(o,l),f=t.minFilter;return t.minFilter===Zr&&(t.minFilter=xi),new Wx(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class jx extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zc=new j,Yx=new j,qx=new pt;class jr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Zc.subVectors(r,t).cross(Yx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Zc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||qx.getNormalMatrix(e),o=this.coplanarPoint(Zc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new hd,bl=new j;class md{constructor(e=new jr,t=new jr,r=new jr,o=new jr,l=new jr,c=new jr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi){const r=this.planes,o=e.elements,l=o[0],c=o[1],f=o[2],h=o[3],p=o[4],g=o[5],v=o[6],x=o[7],S=o[8],M=o[9],w=o[10],y=o[11],_=o[12],N=o[13],P=o[14],R=o[15];if(r[0].setComponents(h-l,x-p,y-S,R-_).normalize(),r[1].setComponents(h+l,x+p,y+S,R+_).normalize(),r[2].setComponents(h+c,x+g,y+M,R+N).normalize(),r[3].setComponents(h-c,x-g,y-M,R-N).normalize(),r[4].setComponents(h-f,x-v,y-w,R-P).normalize(),t===Vi)r[5].setComponents(h+f,x+v,y+w,R+P).normalize();else if(t===Wl)r[5].setComponents(f,v,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(bl.x=o.normal.x>0?e.max.x:e.min.x,bl.y=o.normal.y>0?e.max.y:e.min.y,bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Go extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $x extends Sn{constructor(e,t,r,o,l,c,f,h,p){super(e,t,r,o,l,c,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wg extends Sn{constructor(e,t,r,o,l,c,f,h,p,g=Ws){if(g!==Ws&&g!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Ws&&(r=Kr),r===void 0&&g===Zs&&(r=$s),super(null,o,l,c,f,h,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-c,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const g=r[o],x=r[o+1]-g,S=(c-g)/x;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Le:new j);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new j,o=[],l=[],c=[],f=new j,h=new Ht;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new j)}l[0]=new j,c[0]=new j;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),x=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),x<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(gt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,M))}c[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],S*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gd extends Mi{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Le){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=h-this.aX,S=p-this.aY;h=x*g-S*v+this.aX,p=x*v+S*g+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zx extends gd{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function vd(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){o(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,g,v){let x=(c-l)/p-(f-l)/(p+g)+(f-c)/g,S=(f-c)/g-(h-c)/(g+v)+(h-f)/v;x*=g,S*=g,o(c,f,x,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Ll=new j,Kc=new vd,Jc=new vd,Qc=new vd;class Kx extends Mi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new j){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,g;this.closed||f>0?p=o[(f-1)%l]:(Ll.subVectors(o[0],o[1]).add(o[0]),p=Ll);const v=o[f%l],x=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(Ll.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Ll),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),S),w=Math.pow(v.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(g),S);w<1e-4&&(w=1),M<1e-4&&(M=w),y<1e-4&&(y=w),Kc.initNonuniformCatmullRom(p.x,v.x,x.x,g.x,M,w,y),Jc.initNonuniformCatmullRom(p.y,v.y,x.y,g.y,M,w,y),Qc.initNonuniformCatmullRom(p.z,v.z,x.z,g.z,M,w,y)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(p.x,v.x,x.x,g.x,this.tension),Jc.initCatmullRom(p.y,v.y,x.y,g.y,this.tension),Qc.initCatmullRom(p.z,v.z,x.z,g.z,this.tension));return r.set(Kc.calc(h),Jc.calc(h),Qc.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new j().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pm(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function Jx(s,e){const t=1-s;return t*t*e}function Qx(s,e){return 2*(1-s)*s*e}function ey(s,e){return s*s*e}function Yo(s,e,t,r){return Jx(s,e)+Qx(s,t)+ey(s,r)}function ty(s,e){const t=1-s;return t*t*t*e}function ny(s,e){const t=1-s;return 3*t*t*s*e}function iy(s,e){return 3*(1-s)*s*s*e}function ry(s,e){return s*s*s*e}function qo(s,e,t,r,o){return ty(s,e)+ny(s,t)+iy(s,r)+ry(s,o)}class Xg extends Mi{constructor(e=new Le,t=new Le,r=new Le,o=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Le){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(qo(e,o.x,l.x,c.x,f.x),qo(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sy extends Mi{constructor(e=new j,t=new j,r=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new j){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(qo(e,o.x,l.x,c.x,f.x),qo(e,o.y,l.y,c.y,f.y),qo(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jg extends Mi{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oy extends Mi{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends Mi{constructor(e=new Le,t=new Le,r=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Le){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,o.x,l.x,c.x),Yo(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ay extends Mi{constructor(e=new j,t=new j,r=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new j){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Yo(e,o.x,l.x,c.x),Yo(e,o.y,l.y,c.y),Yo(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,h=o[c===0?c:c-1],p=o[c],g=o[c>o.length-2?o.length-1:c+1],v=o[c>o.length-3?o.length-1:c+2];return r.set(Pm(f,h.x,p.x,g.x,v.x),Pm(f,h.y,p.y,g.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Le().fromArray(o))}return this}}var Jf=Object.freeze({__proto__:null,ArcCurve:Zx,CatmullRomCurve3:Kx,CubicBezierCurve:Xg,CubicBezierCurve3:sy,EllipseCurve:gd,LineCurve:jg,LineCurve3:oy,QuadraticBezierCurve:Yg,QuadraticBezierCurve3:ay,SplineCurve:qg});class ly extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jf[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const g=h[p];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Jf[o.type]().fromJSON(o))}return this}}class bm extends ly{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new jg(this.currentPoint.clone(),new Le(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Yg(this.currentPoint.clone(),new Le(e,t),new Le(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new Xg(this.currentPoint.clone(),new Le(e,t),new Le(r,o),new Le(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new qg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,h){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,t+g,r,o,l,c,f,h),this}absellipse(e,t,r,o,l,c,f,h){const p=new gd(e,t,r,o,l,c,f,h);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _d extends Si{constructor(e=1,t=1,r=1,o=32,l=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],x=[],S=[];let M=0;const w=[],y=r/2;let _=0;N(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new Mn(v,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(S,2));function N(){const R=new j,V=new j;let O=0;const F=(t-e)/r;for(let B=0;B<=l;B++){const b=[],A=B/l,k=A*(t-e)+e;for(let ne=0;ne<=o;ne++){const $=ne/o,se=$*h+f,ce=Math.sin(se),re=Math.cos(se);V.x=k*ce,V.y=-A*r+y,V.z=k*re,v.push(V.x,V.y,V.z),R.set(ce,F,re).normalize(),x.push(R.x,R.y,R.z),S.push($,1-A),b.push(M++)}w.push(b)}for(let B=0;B<o;B++)for(let b=0;b<l;b++){const A=w[b][B],k=w[b+1][B],ne=w[b+1][B+1],$=w[b][B+1];(e>0||b!==0)&&(g.push(A,k,$),O+=3),(t>0||b!==l-1)&&(g.push(k,ne,$),O+=3)}p.addGroup(_,O,0),_+=O}function P(R){const V=M,O=new Le,F=new j;let B=0;const b=R===!0?e:t,A=R===!0?1:-1;for(let ne=1;ne<=o;ne++)v.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),M++;const k=M;for(let ne=0;ne<=o;ne++){const se=ne/o*h+f,ce=Math.cos(se),re=Math.sin(se);F.x=b*re,F.y=y*A,F.z=b*ce,v.push(F.x,F.y,F.z),x.push(0,A,0),O.x=ce*.5+.5,O.y=re*.5*A+.5,S.push(O.x,O.y),M++}for(let ne=0;ne<o;ne++){const $=V+ne,se=k+ne;R===!0?g.push(se,se+1,$):g.push(se+1,se,$),B+=3}p.addGroup(_,B,R===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _d(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends bm{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new bm().fromJSON(o))}return this}}const uy={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=$g(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p,g,v,x,S;if(r&&(l=py(s,e,l,t)),s.length>80*t){f=p=s[0],h=g=s[1];for(let M=t;M<o;M+=t)v=s[M],x=s[M+1],v<f&&(f=v),x<h&&(h=x),v>p&&(p=v),x>g&&(g=x);S=Math.max(p-f,g-h),S=S!==0?32767/S:0}return Jo(l,c,t,f,h,S,0),c}};function $g(s,e,t,r,o){let l,c;if(o===wy(s,e,t,r)>0)for(l=e;l<t;l+=r)c=Lm(l,s[l],s[l+1],c);else for(l=t-r;l>=e;l-=r)c=Lm(l,s[l],s[l+1],c);return c&&jl(c,c.next)&&(ea(c),c=c.next),c}function Qr(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(jl(t,t.next)||Wt(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Jo(s,e,t,r,o,l,c){if(!s)return;!c&&l&&xy(s,r,o,l);let f=s,h,p;for(;s.prev!==s.next;){if(h=s.prev,p=s.next,l?fy(s,r,o,l):cy(s)){e.push(h.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),ea(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=dy(Qr(s),e,t),Jo(s,e,t,r,o,l,2)):c===2&&hy(s,e,t,r,o,l):Jo(Qr(s),e,t,r,o,l,1);break}}}function cy(s){const e=s.prev,t=s,r=s.next;if(Wt(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,g=o<l?o<c?o:c:l<c?l:c,v=f<h?f<p?f:p:h<p?h:p,x=o>l?o>c?o:c:l>c?l:c,S=f>h?f>p?f:p:h>p?h:p;let M=r.next;for(;M!==e;){if(M.x>=g&&M.x<=x&&M.y>=v&&M.y<=S&&Hs(o,f,l,h,c,p,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function fy(s,e,t,r){const o=s.prev,l=s,c=s.next;if(Wt(o,l,c)>=0)return!1;const f=o.x,h=l.x,p=c.x,g=o.y,v=l.y,x=c.y,S=f<h?f<p?f:p:h<p?h:p,M=g<v?g<x?g:x:v<x?v:x,w=f>h?f>p?f:p:h>p?h:p,y=g>v?g>x?g:x:v>x?v:x,_=Qf(S,M,e,t,r),N=Qf(w,y,e,t,r);let P=s.prevZ,R=s.nextZ;for(;P&&P.z>=_&&R&&R.z<=N;){if(P.x>=S&&P.x<=w&&P.y>=M&&P.y<=y&&P!==o&&P!==c&&Hs(f,g,h,v,p,x,P.x,P.y)&&Wt(P.prev,P,P.next)>=0||(P=P.prevZ,R.x>=S&&R.x<=w&&R.y>=M&&R.y<=y&&R!==o&&R!==c&&Hs(f,g,h,v,p,x,R.x,R.y)&&Wt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;P&&P.z>=_;){if(P.x>=S&&P.x<=w&&P.y>=M&&P.y<=y&&P!==o&&P!==c&&Hs(f,g,h,v,p,x,P.x,P.y)&&Wt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;R&&R.z<=N;){if(R.x>=S&&R.x<=w&&R.y>=M&&R.y<=y&&R!==o&&R!==c&&Hs(f,g,h,v,p,x,R.x,R.y)&&Wt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function dy(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!jl(o,l)&&Zg(o,r,r.next,l)&&Qo(o,l)&&Qo(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ea(r),ea(r.next),r=s=l),r=r.next}while(r!==s);return Qr(r)}function hy(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&My(c,f)){let h=Kg(c,f);c=Qr(c,c.next),h=Qr(h,h.next),Jo(c,e,t,r,o,l,0),Jo(h,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function py(s,e,t,r){const o=[];let l,c,f,h,p;for(l=0,c=e.length;l<c;l++)f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=$g(s,f,h,r,!1),p===p.next&&(p.steiner=!0),o.push(Sy(p));for(o.sort(my),l=0;l<o.length;l++)t=gy(o[l],t);return t}function my(s,e){return s.x-e.x}function gy(s,e){const t=vy(s,e);if(!t)return e;const r=Kg(t,s);return Qr(r,r.next),Qr(t,t.next)}function vy(s,e){let t=e,r=-1/0,o;const l=s.x,c=s.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const x=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=l&&x>r&&(r=x,o=t.x<t.next.x?t:t.next,x===l))return o}t=t.next}while(t!==e);if(!o)return null;const f=o,h=o.x,p=o.y;let g=1/0,v;t=o;do l>=t.x&&t.x>=h&&l!==t.x&&Hs(c<p?l:r,c,h,p,c<p?r:l,c,t.x,t.y)&&(v=Math.abs(c-t.y)/(l-t.x),Qo(t,s)&&(v<g||v===g&&(t.x>o.x||t.x===o.x&&_y(o,t)))&&(o=t,g=v)),t=t.next;while(t!==f);return o}function _y(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function xy(s,e,t,r){let o=s;do o.z===0&&(o.z=Qf(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,yy(o)}function yy(s){let e,t,r,o,l,c,f,h,p=1;do{for(t=s,s=null,l=null,c=0;t;){for(c++,r=t,f=0,e=0;e<p&&(f++,r=r.nextZ,!!r);e++);for(h=p;f>0||h>0&&r;)f!==0&&(h===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,f--):(o=r,r=r.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(c>1);return s}function Qf(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Sy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Hs(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function My(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ey(s,e)&&(Qo(s,e)&&Qo(e,s)&&Ty(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||jl(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function jl(s,e){return s.x===e.x&&s.y===e.y}function Zg(s,e,t,r){const o=Nl(Wt(s,e,t)),l=Nl(Wt(s,e,r)),c=Nl(Wt(t,r,s)),f=Nl(Wt(t,r,e));return!!(o!==l&&c!==f||o===0&&Dl(s,t,e)||l===0&&Dl(s,r,e)||c===0&&Dl(t,s,r)||f===0&&Dl(t,e,r))}function Dl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Nl(s){return s>0?1:s<0?-1:0}function Ey(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qo(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function Ty(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Kg(s,e){const t=new ed(s.i,s.x,s.y),r=new ed(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Lm(s,e,t,r){const o=new ed(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ea(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ed(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function wy(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Sr{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Sr.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];Dm(e),Nm(r,e);let c=e.length;t.forEach(Dm);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,Nm(r,t[h]);const f=uy.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function Dm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class yd extends Si{constructor(e=new xd([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,h=e.length;f<h;f++){const p=e[f];c(p)}this.setAttribute("position",new Mn(o,3)),this.setAttribute("uv",new Mn(l,2)),this.computeVertexNormals();function c(f){const h=[],p=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let x=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,w=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:Ay;let P,R=!1,V,O,F,B;_&&(P=_.getSpacedPoints(g),R=!0,x=!1,V=_.computeFrenetFrames(g,!1),O=new j,F=new j,B=new j),x||(y=0,S=0,M=0,w=0);const b=f.extractPoints(p);let A=b.shape;const k=b.holes;if(!Sr.isClockWise(A)){A=A.reverse();for(let ge=0,Ae=k.length;ge<Ae;ge++){const D=k[ge];Sr.isClockWise(D)&&(k[ge]=D.reverse())}}const $=Sr.triangulateShape(A,k),se=A;for(let ge=0,Ae=k.length;ge<Ae;ge++){const D=k[ge];A=A.concat(D)}function ce(ge,Ae,D){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(Ae,D)}const re=A.length,ue=$.length;function H(ge,Ae,D){let Je,Me,He;const Re=ge.x-Ae.x,nt=ge.y-Ae.y,Ie=D.x-ge.x,L=D.y-ge.y,T=Re*Re+nt*nt,J=Re*L-nt*Ie;if(Math.abs(J)>Number.EPSILON){const fe=Math.sqrt(T),ve=Math.sqrt(Ie*Ie+L*L),he=Ae.x-nt/fe,$e=Ae.y+Re/fe,be=D.x-L/ve,Ve=D.y+Ie/ve,ht=((be-he)*L-(Ve-$e)*Ie)/(Re*L-nt*Ie);Je=he+Re*ht-ge.x,Me=$e+nt*ht-ge.y;const Ee=Je*Je+Me*Me;if(Ee<=2)return new Le(Je,Me);He=Math.sqrt(Ee/2)}else{let fe=!1;Re>Number.EPSILON?Ie>Number.EPSILON&&(fe=!0):Re<-Number.EPSILON?Ie<-Number.EPSILON&&(fe=!0):Math.sign(nt)===Math.sign(L)&&(fe=!0),fe?(Je=-nt,Me=Re,He=Math.sqrt(T)):(Je=Re,Me=nt,He=Math.sqrt(T/2))}return new Le(Je/He,Me/He)}const le=[];for(let ge=0,Ae=se.length,D=Ae-1,Je=ge+1;ge<Ae;ge++,D++,Je++)D===Ae&&(D=0),Je===Ae&&(Je=0),le[ge]=H(se[ge],se[D],se[Je]);const oe=[];let I,q=le.concat();for(let ge=0,Ae=k.length;ge<Ae;ge++){const D=k[ge];I=[];for(let Je=0,Me=D.length,He=Me-1,Re=Je+1;Je<Me;Je++,He++,Re++)He===Me&&(He=0),Re===Me&&(Re=0),I[Je]=H(D[Je],D[He],D[Re]);oe.push(I),q=q.concat(I)}for(let ge=0;ge<y;ge++){const Ae=ge/y,D=S*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+w;for(let Me=0,He=se.length;Me<He;Me++){const Re=ce(se[Me],le[Me],Je);me(Re.x,Re.y,-D)}for(let Me=0,He=k.length;Me<He;Me++){const Re=k[Me];I=oe[Me];for(let nt=0,Ie=Re.length;nt<Ie;nt++){const L=ce(Re[nt],I[nt],Je);me(L.x,L.y,-D)}}}const De=M+w;for(let ge=0;ge<re;ge++){const Ae=x?ce(A[ge],q[ge],De):A[ge];R?(F.copy(V.normals[0]).multiplyScalar(Ae.x),O.copy(V.binormals[0]).multiplyScalar(Ae.y),B.copy(P[0]).add(F).add(O),me(B.x,B.y,B.z)):me(Ae.x,Ae.y,0)}for(let ge=1;ge<=g;ge++)for(let Ae=0;Ae<re;Ae++){const D=x?ce(A[Ae],q[Ae],De):A[Ae];R?(F.copy(V.normals[ge]).multiplyScalar(D.x),O.copy(V.binormals[ge]).multiplyScalar(D.y),B.copy(P[ge]).add(F).add(O),me(B.x,B.y,B.z)):me(D.x,D.y,v/g*ge)}for(let ge=y-1;ge>=0;ge--){const Ae=ge/y,D=S*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+w;for(let Me=0,He=se.length;Me<He;Me++){const Re=ce(se[Me],le[Me],Je);me(Re.x,Re.y,v+D)}for(let Me=0,He=k.length;Me<He;Me++){const Re=k[Me];I=oe[Me];for(let nt=0,Ie=Re.length;nt<Ie;nt++){const L=ce(Re[nt],I[nt],Je);R?me(L.x,L.y+P[g-1].y,P[g-1].x+D):me(L.x,L.y,v+D)}}}K(),de();function K(){const ge=o.length/3;if(x){let Ae=0,D=re*Ae;for(let Je=0;Je<ue;Je++){const Me=$[Je];Pe(Me[2]+D,Me[1]+D,Me[0]+D)}Ae=g+y*2,D=re*Ae;for(let Je=0;Je<ue;Je++){const Me=$[Je];Pe(Me[0]+D,Me[1]+D,Me[2]+D)}}else{for(let Ae=0;Ae<ue;Ae++){const D=$[Ae];Pe(D[2],D[1],D[0])}for(let Ae=0;Ae<ue;Ae++){const D=$[Ae];Pe(D[0]+re*g,D[1]+re*g,D[2]+re*g)}}r.addGroup(ge,o.length/3-ge,0)}function de(){const ge=o.length/3;let Ae=0;Te(se,Ae),Ae+=se.length;for(let D=0,Je=k.length;D<Je;D++){const Me=k[D];Te(Me,Ae),Ae+=Me.length}r.addGroup(ge,o.length/3-ge,1)}function Te(ge,Ae){let D=ge.length;for(;--D>=0;){const Je=D;let Me=D-1;Me<0&&(Me=ge.length-1);for(let He=0,Re=g+y*2;He<Re;He++){const nt=re*He,Ie=re*(He+1),L=Ae+Je+nt,T=Ae+Me+nt,J=Ae+Me+Ie,fe=Ae+Je+Ie;Be(L,T,J,fe)}}}function me(ge,Ae,D){h.push(ge),h.push(Ae),h.push(D)}function Pe(ge,Ae,D){Ke(ge),Ke(Ae),Ke(D);const Je=o.length/3,Me=N.generateTopUV(r,o,Je-3,Je-2,Je-1);vt(Me[0]),vt(Me[1]),vt(Me[2])}function Be(ge,Ae,D,Je){Ke(ge),Ke(Ae),Ke(Je),Ke(Ae),Ke(D),Ke(Je);const Me=o.length/3,He=N.generateSideWallUV(r,o,Me-6,Me-3,Me-2,Me-1);vt(He[0]),vt(He[1]),vt(He[3]),vt(He[1]),vt(He[2]),vt(He[3])}function Ke(ge){o.push(h[ge*3+0]),o.push(h[ge*3+1]),o.push(h[ge*3+2])}function vt(ge){l.push(ge.x),l.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return Cy(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Jf[o.type]().fromJSON(o)),new yd(r,e.options)}}const Ay={generateTopUV:function(s,e,t,r,o){const l=e[t*3],c=e[t*3+1],f=e[r*3],h=e[r*3+1],p=e[o*3],g=e[o*3+1];return[new Le(l,c),new Le(f,h),new Le(p,g)]},generateSideWallUV:function(s,e,t,r,o,l){const c=e[t*3],f=e[t*3+1],h=e[t*3+2],p=e[r*3],g=e[r*3+1],v=e[r*3+2],x=e[o*3],S=e[o*3+1],M=e[o*3+2],w=e[l*3],y=e[l*3+1],_=e[l*3+2];return Math.abs(f-g)<Math.abs(c-p)?[new Le(c,1-h),new Le(p,1-v),new Le(x,1-M),new Le(w,1-_)]:[new Le(f,1-h),new Le(g,1-v),new Le(S,1-M),new Le(y,1-_)]}};function Cy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ra extends Si{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,g=h+1,v=e/f,x=t/h,S=[],M=[],w=[],y=[];for(let _=0;_<g;_++){const N=_*x-c;for(let P=0;P<p;P++){const R=P*v-l;M.push(R,-N,0),w.push(0,0,1),y.push(P/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let N=0;N<f;N++){const P=N+p*_,R=N+p*(_+1),V=N+1+p*(_+1),O=N+1+p*_;S.push(P,R,O),S.push(R,V,O)}this.setIndex(S),this.setAttribute("position",new Mn(M,3)),this.setAttribute("normal",new Mn(w,3)),this.setAttribute("uv",new Mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sd extends Si{constructor(e=new xd([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],c=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let g=0;g<e.length;g++)p(e[g]),this.addGroup(f,h,g),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new Mn(o,3)),this.setAttribute("normal",new Mn(l,3)),this.setAttribute("uv",new Mn(c,2));function p(g){const v=o.length/3,x=g.extractPoints(t);let S=x.shape;const M=x.holes;Sr.isClockWise(S)===!1&&(S=S.reverse());for(let y=0,_=M.length;y<_;y++){const N=M[y];Sr.isClockWise(N)===!0&&(M[y]=N.reverse())}const w=Sr.triangulateShape(S,M);for(let y=0,_=M.length;y<_;y++){const N=M[y];S=S.concat(N)}for(let y=0,_=S.length;y<_;y++){const N=S[y];o.push(N.x,N.y,0),l.push(0,0,1),c.push(N.x,N.y)}for(let y=0,_=w.length;y<_;y++){const N=w[y],P=N[0]+v,R=N[1]+v,V=N[2]+v;r.push(P,R,V),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Ry(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];r.push(c)}return new Sd(r,e.curveSegments)}}function Ry(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class Py extends eo{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new St(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class by extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ho extends by{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ly extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dy extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Um={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ny{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const S=p[v],M=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const Uy=new Ny;class Md{constructor(e){this.manager=e!==void 0?e:Uy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Md.DEFAULT_MATERIAL_NAME="__DEFAULT";class Iy extends Md{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Um.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=Ko("img");function h(){g(),Um.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(v){g(),o&&o(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class Fy extends Md{constructor(e){super(e)}load(e,t,r,o){const l=new Sn,c=new Iy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Ed extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Oy extends Ed{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ef=new Ht,Im=new j,Fm=new j;class Jg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),t.position.copy(Im),Fm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fm),t.updateMatrixWorld(),ef.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Om=new Ht,Vo=new j,tf=new j;class ky extends Jg{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Vo),tf.copy(r.position),tf.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(tf),r.updateMatrixWorld(),o.makeTranslation(-Vo.x,-Vo.y,-Vo.z),Om.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Om)}}class zy extends Ed{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new ky}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qg extends Vg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class By extends Jg{constructor(){super(new Qg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends Ed{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new By}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hy extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function zm(s,e,t,r){const o=Vy(r);switch(t){case wg:return s*e;case Cg:return s*e;case Rg:return s*e*2;case Pg:return s*e/o.components*o.byteLength;case ud:return s*e/o.components*o.byteLength;case bg:return s*e*2/o.components*o.byteLength;case cd:return s*e*2/o.components*o.byteLength;case Ag:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case fd:return s*e*4/o.components*o.byteLength;case Ol:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:case Pf:return Math.max(s,16)*Math.max(e,8)/4;case Af:case Rf:return Math.max(s,8)*Math.max(e,8)/2;case bf:case Lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Of:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hl:case Yf:case qf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lg:case $f:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zf:case Kf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vy(s){switch(s){case Wi:case Mg:return{byteLength:1,components:1};case $o:case Eg:case ta:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case Kr:case od:case Hi:return{byteLength:4,components:1};case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ev(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Gy(s){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,p){const g=h.array,v=h.updateRanges;if(s.bindBuffer(p,f),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<v.length;S++){const M=v[x],w=v[S];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++x,v[x]=w)}v.length=x+1;for(let S=0,M=v.length;S<M;S++){const w=v[S];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xy=`#ifdef USE_ALPHAHASH
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
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jy=`#ifdef USE_BATCHING
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
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iS=`#ifdef USE_IRIDESCENCE
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
#endif`,rS=`#ifdef USE_BUMPMAP
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
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hS=`#define PI 3.141592653589793
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
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mS=`vec3 transformedNormal = objectNormal;
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
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
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
}`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
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
#endif`,FS=`#ifdef USE_ENVMAP
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
#endif`,OS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HS=`PhysicalMaterial material;
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
#endif`,VS=`struct PhysicalMaterial {
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
}`,GS=`
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
#endif`,WS=`#if defined( RE_IndirectDiffuse )
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
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QS=`#if defined( USE_POINTS_UV )
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
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`#ifdef USE_MORPHTARGETS
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
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dM=`#ifdef USE_NORMALMAP
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
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RM=`float getShadowMask() {
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
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
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
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,NM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,ZM=`#if DEPTH_PACKING == 3200
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
}`,KM=`#define DISTANCE
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
}`,JM=`#define DISTANCE
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#include <common>
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
}`,rE=`uniform vec3 diffuse;
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
}`,sE=`#define LAMBERT
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
}`,oE=`#define LAMBERT
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
}`,aE=`#define MATCAP
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
}`,lE=`#define MATCAP
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
}`,uE=`#define NORMAL
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
}`,cE=`#define NORMAL
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
}`,fE=`#define PHONG
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
}`,dE=`#define PHONG
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
}`,hE=`#define STANDARD
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
}`,pE=`#define STANDARD
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
}`,mE=`#define TOON
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
}`,gE=`#define TOON
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
}`,vE=`uniform float size;
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
}`,_E=`uniform vec3 diffuse;
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
}`,xE=`#include <common>
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
}`,yE=`uniform vec3 color;
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
}`,SE=`uniform float rotation;
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
}`,ME=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Wy,alphahash_pars_fragment:Xy,alphamap_fragment:jy,alphamap_pars_fragment:Yy,alphatest_fragment:qy,alphatest_pars_fragment:$y,aomap_fragment:Zy,aomap_pars_fragment:Ky,batching_pars_vertex:Jy,batching_vertex:Qy,begin_vertex:eS,beginnormal_vertex:tS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:rS,clipping_planes_fragment:sS,clipping_planes_pars_fragment:oS,clipping_planes_pars_vertex:aS,clipping_planes_vertex:lS,color_fragment:uS,color_pars_fragment:cS,color_pars_vertex:fS,color_vertex:dS,common:hS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:gS,displacementmap_vertex:vS,emissivemap_fragment:_S,emissivemap_pars_fragment:xS,colorspace_fragment:yS,colorspace_pars_fragment:SS,envmap_fragment:MS,envmap_common_pars_fragment:ES,envmap_pars_fragment:TS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:FS,envmap_vertex:AS,fog_vertex:CS,fog_pars_vertex:RS,fog_fragment:PS,fog_pars_fragment:bS,gradientmap_pars_fragment:LS,lightmap_pars_fragment:DS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:US,lights_pars_begin:IS,lights_toon_fragment:OS,lights_toon_pars_fragment:kS,lights_phong_fragment:zS,lights_phong_pars_fragment:BS,lights_physical_fragment:HS,lights_physical_pars_fragment:VS,lights_fragment_begin:GS,lights_fragment_maps:WS,lights_fragment_end:XS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:$S,map_fragment:ZS,map_pars_fragment:KS,map_particle_fragment:JS,map_particle_pars_fragment:QS,metalnessmap_fragment:eM,metalnessmap_pars_fragment:tM,morphinstance_vertex:nM,morphcolor_vertex:iM,morphnormal_vertex:rM,morphtarget_pars_vertex:sM,morphtarget_vertex:oM,normal_fragment_begin:aM,normal_fragment_maps:lM,normal_pars_fragment:uM,normal_pars_vertex:cM,normal_vertex:fM,normalmap_pars_fragment:dM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:vM,packing:_M,premultiplied_alpha_fragment:xM,project_vertex:yM,dithering_fragment:SM,dithering_pars_fragment:MM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:AM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:PM,skinning_pars_vertex:bM,skinning_vertex:LM,skinnormal_vertex:DM,specularmap_fragment:NM,specularmap_pars_fragment:UM,tonemapping_fragment:IM,tonemapping_pars_fragment:FM,transmission_fragment:OM,transmission_pars_fragment:kM,uv_pars_fragment:zM,uv_pars_vertex:BM,uv_vertex:HM,worldpos_vertex:VM,background_vert:GM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:jM,cube_vert:YM,cube_frag:qM,depth_vert:$M,depth_frag:ZM,distanceRGBA_vert:KM,distanceRGBA_frag:JM,equirect_vert:QM,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:uE,meshnormal_frag:cE,meshphong_vert:fE,meshphong_frag:dE,meshphysical_vert:hE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:vE,points_frag:_E,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},Fe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},_i={basic:{uniforms:Pn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Pn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Pn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Pn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Pn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new St(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Pn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Pn([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Pn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Pn([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Pn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Pn([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Pn([Fe.common,Fe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Pn([Fe.lights,Fe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};_i.physical={uniforms:Pn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ul={r:0,b:0,g:0},Wr=new Ln,EE=new Ht;function TE(s,e,t,r,o,l,c){const f=new St(0);let h=l===!0?0:1,p,g,v=null,x=0,S=null;function M(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function w(P){let R=!1;const V=M(P);V===null?_(f,h):V&&V.isColor&&(_(V,1),R=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(P,R){const V=M(R);V&&(V.isCubeTexture||V.mapping===Xl)?(g===void 0&&(g=new cn(new to(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Wr.copy(R.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(Wr)),g.material.toneMapped=Pt.getTransfer(V.colorSpace)!==Nt,(v!==V||x!==V.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=V,x=V.version,S=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new cn(new ra(2,2),new Er({name:"BackgroundMaterial",uniforms:Js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(V.colorSpace)!==Nt,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||x!==V.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=V,x=V.version,S=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function _(P,R){P.getRGB(Ul,Hg(s)),r.buffers.color.setClear(Ul.r,Ul.g,Ul.b,R,c)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(P,R=1){f.set(P),h=R,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,_(f,h)},render:w,addToRenderList:y,dispose:N}}function wE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,c=!1;function f(A,k,ne,$,se){let ce=!1;const re=v($,ne,k);l!==re&&(l=re,p(l.object)),ce=S(A,$,ne,se),ce&&M(A,$,ne,se),se!==null&&e.update(se,s.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,R(A,k,ne,$),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function v(A,k,ne){const $=ne.wireframe===!0;let se=r[A.id];se===void 0&&(se={},r[A.id]=se);let ce=se[k.id];ce===void 0&&(ce={},se[k.id]=ce);let re=ce[$];return re===void 0&&(re=x(h()),ce[$]=re),re}function x(A){const k=[],ne=[],$=[];for(let se=0;se<t;se++)k[se]=0,ne[se]=0,$[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:$,object:A,attributes:{},index:null}}function S(A,k,ne,$){const se=l.attributes,ce=k.attributes;let re=0;const ue=ne.getAttributes();for(const H in ue)if(ue[H].location>=0){const oe=se[H];let I=ce[H];if(I===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(I=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(I=A.instanceColor)),oe===void 0||oe.attribute!==I||I&&oe.data!==I.data)return!0;re++}return l.attributesNum!==re||l.index!==$}function M(A,k,ne,$){const se={},ce=k.attributes;let re=0;const ue=ne.getAttributes();for(const H in ue)if(ue[H].location>=0){let oe=ce[H];oe===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const I={};I.attribute=oe,oe&&oe.data&&(I.data=oe.data),se[H]=I,re++}l.attributes=se,l.attributesNum=re,l.index=$}function w(){const A=l.newAttributes;for(let k=0,ne=A.length;k<ne;k++)A[k]=0}function y(A){_(A,0)}function _(A,k){const ne=l.newAttributes,$=l.enabledAttributes,se=l.attributeDivisors;ne[A]=1,$[A]===0&&(s.enableVertexAttribArray(A),$[A]=1),se[A]!==k&&(s.vertexAttribDivisor(A,k),se[A]=k)}function N(){const A=l.newAttributes,k=l.enabledAttributes;for(let ne=0,$=k.length;ne<$;ne++)k[ne]!==A[ne]&&(s.disableVertexAttribArray(ne),k[ne]=0)}function P(A,k,ne,$,se,ce,re){re===!0?s.vertexAttribIPointer(A,k,ne,se,ce):s.vertexAttribPointer(A,k,ne,$,se,ce)}function R(A,k,ne,$){w();const se=$.attributes,ce=ne.getAttributes(),re=k.defaultAttributeValues;for(const ue in ce){const H=ce[ue];if(H.location>=0){let le=se[ue];if(le===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const oe=le.normalized,I=le.itemSize,q=e.get(le);if(q===void 0)continue;const De=q.buffer,K=q.type,de=q.bytesPerElement,Te=K===s.INT||K===s.UNSIGNED_INT||le.gpuType===od;if(le.isInterleavedBufferAttribute){const me=le.data,Pe=me.stride,Be=le.offset;if(me.isInstancedInterleavedBuffer){for(let Ke=0;Ke<H.locationSize;Ke++)_(H.location+Ke,me.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ke=0;Ke<H.locationSize;Ke++)y(H.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ke=0;Ke<H.locationSize;Ke++)P(H.location+Ke,I/H.locationSize,K,oe,Pe*de,(Be+I/H.locationSize*Ke)*de,Te)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)_(H.location+me,le.meshPerAttribute);A.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<H.locationSize;me++)y(H.location+me);s.bindBuffer(s.ARRAY_BUFFER,De);for(let me=0;me<H.locationSize;me++)P(H.location+me,I/H.locationSize,K,oe,I*de,I/H.locationSize*me*de,Te)}}else if(re!==void 0){const oe=re[ue];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(H.location,oe);break;case 3:s.vertexAttrib3fv(H.location,oe);break;case 4:s.vertexAttrib4fv(H.location,oe);break;default:s.vertexAttrib1fv(H.location,oe)}}}}N()}function V(){B();for(const A in r){const k=r[A];for(const ne in k){const $=k[ne];for(const se in $)g($[se].object),delete $[se];delete k[ne]}delete r[A]}}function O(A){if(r[A.id]===void 0)return;const k=r[A.id];for(const ne in k){const $=k[ne];for(const se in $)g($[se].object),delete $[se];delete k[ne]}delete r[A.id]}function F(A){for(const k in r){const ne=r[k];if(ne[A.id]===void 0)continue;const $=ne[A.id];for(const se in $)g($[se].object),delete $[se];delete ne[A.id]}}function B(){b(),c=!0,l!==o&&(l=o,p(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:B,resetDefaultState:b,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function AE(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),t.update(g,r,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];t.update(S,r,1)}function h(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let M=0;for(let w=0;w<v;w++)M+=g[w]*x[w];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function CE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==fi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const B=F===ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!B)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:V,maxSamples:O}}function RE(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new jr,f=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||o;return o=x,r=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const M=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||M===null||M.length===0||l&&!y)l?g(null):p();else{const N=l?0:r,P=N*4;let R=_.clippingState||null;h.value=R,R=g(M,x,P,S);for(let V=0;V!==P;++V)R[V]=t[V];_.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,M){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=h.value,M!==!0||y===null){const _=S+w*4,N=x.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let P=0,R=S;P!==w;++P,R+=4)c.copy(v[P]).applyMatrix4(N,f),c.normal.toArray(y,R),y[R+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function PE(s){let e=new WeakMap;function t(c,f){return f===Mf?c.mapping=Ys:f===Ef&&(c.mapping=qs),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Mf||f===Ef)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Xx(h.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Vs=4,Bm=[.125,.215,.35,.446,.526,.582],$r=20,nf=new Qg,Hm=new St;let rf=null,sf=0,of=0,af=!1;const Yr=(1+Math.sqrt(5))/2,ks=1/Yr,Vm=[new j(-Yr,ks,0),new j(Yr,ks,0),new j(-ks,0,Yr),new j(ks,0,Yr),new j(0,Yr,-ks),new j(0,Yr,ks),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,sf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,Il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),sf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:ta,format:fi,colorSpace:Ks,depthBuffer:!1},o=Wm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bE(l)),this._blurMaterial=LE(l,e,t)}return o}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,nf)}_sceneToCubeUV(e,t,r,o){const f=new jn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Hm),g.toneMapping=yr,g.autoClear=!1;const S=new pd({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),M=new cn(new to,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(Hm),w=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(f.up.set(0,h[_],0),f.lookAt(p[_],0,0)):N===1?(f.up.set(0,0,h[_]),f.lookAt(0,p[_],0)):(f.up.set(0,h[_],0),f.lookAt(0,0,p[_]));const P=this._cubeSize;Il(o,N*P,_>2?P:0,P,P),g.setRenderTarget(o),w&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ys||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new cn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Il(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,nf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Vm[(o-l-1)%Vm.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new cn(this._lodPlanes[o],p),x=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),w=l/M,y=isFinite(l)?1+Math.floor(g*w):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const _=[];let N=0;for(let F=0;F<$r;++F){const B=F/w,b=Math.exp(-B*B/2);_.push(b),F===0?N+=b:F<y&&(N+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:P}=this;x.dTheta.value=M,x.mipInt.value=P-r;const R=this._sizeLods[o],V=3*R*(o>P-Vs?o-P+Vs:0),O=4*(this._cubeSize-R);Il(t,V,O,3*R,2*R),h.setRenderTarget(t),h.render(v,nf)}}function bE(s){const e=[],t=[],r=[];let o=s;const l=s-Vs+1+Bm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>s-Vs?h=Bm[c-s+Vs-1]:c===0&&(h=0),r.push(h);const p=1/(f-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,w=3,y=2,_=1,N=new Float32Array(w*M*S),P=new Float32Array(y*M*S),R=new Float32Array(_*M*S);for(let O=0;O<S;O++){const F=O%3*2/3-1,B=O>2?0:-1,b=[F,B,0,F+2/3,B,0,F+2/3,B+1,0,F,B,0,F+2/3,B+1,0,F,B+1,0];N.set(b,w*M*O),P.set(x,y*M*O);const A=[O,O,O,O,O,O];R.set(A,_*M*O)}const V=new Si;V.setAttribute("position",new yi(N,w)),V.setAttribute("uv",new yi(P,y)),V.setAttribute("faceIndex",new yi(R,_)),e.push(V),o>Vs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Wm(s,e,t){const r=new Jr(s,e,t);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Il(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function LE(s,e,t){const r=new Float32Array($r),o=new j(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Td(),fragmentShader:`

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
	`}function DE(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const h=f.mapping,p=h===Mf||h===Ef,g=h===Ys||h===qs;if(p||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Gm(s)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new Gm(s)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function NE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function UE(s,e,t,r){const o={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,M=v.attributes.position;let w=0;if(S!==null){const N=S.array;w=S.version;for(let P=0,R=N.length;P<R;P+=3){const V=N[P+0],O=N[P+1],F=N[P+2];x.push(V,O,O,F,F,V)}}else if(M!==void 0){const N=M.array;w=M.version;for(let P=0,R=N.length/3-1;P<R;P+=3){const V=P+0,O=P+1,F=P+2;x.push(V,O,O,F,F,V)}}else return;const y=new(Ug(x)?Bg:zg)(x,1);y.version=w;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function IE(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function p(x,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,x*c,M),t.update(S,r,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];t.update(y,r,1)}function v(x,S,M,w){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/c,S[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,w,0,M);let _=0;for(let N=0;N<M;N++)_+=S[N]*w[N];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function FE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function OE(s,e,t){const r=new WeakMap,o=new Ut;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let A=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),w===!0&&(R=2),y===!0&&(R=3);let V=f.attributes.position.count*R,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*O*4*v),B=new Fg(F,V,O,v);B.type=Hi,B.needsUpdate=!0;const b=R*4;for(let k=0;k<v;k++){const ne=_[k],$=N[k],se=P[k],ce=V*O*4*k;for(let re=0;re<ne.count;re++){const ue=re*b;M===!0&&(o.fromBufferAttribute(ne,re),F[ce+ue+0]=o.x,F[ce+ue+1]=o.y,F[ce+ue+2]=o.z,F[ce+ue+3]=0),w===!0&&(o.fromBufferAttribute($,re),F[ce+ue+4]=o.x,F[ce+ue+5]=o.y,F[ce+ue+6]=o.z,F[ce+ue+7]=0),y===!0&&(o.fromBufferAttribute(se,re),F[ce+ue+8]=o.x,F[ce+ue+9]=o.y,F[ce+ue+10]=o.z,F[ce+ue+11]=se.itemSize===4?o.w:1)}}x={count:v,texture:B,size:new Le(V,O)},r.set(f,x),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const w=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function kE(s,e,t,r){let o=new WeakMap;function l(h){const p=r.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return v}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const tv=new Sn,Ym=new Wg(1,1),nv=new Fg,iv=new Rx,rv=new Gg,qm=[],$m=[],Zm=new Float32Array(16),Km=new Float32Array(9),Jm=new Float32Array(4);function no(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=qm[o];if(l===void 0&&(l=new Float32Array(o),qm[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Yl(s,e){let t=$m[e];t===void 0&&(t=new Int32Array(e),$m[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function zE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function BE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function HE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function VE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function GE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Jm.set(r),s.uniformMatrix2fv(this.addr,!1,Jm),tn(t,r)}}function WE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Km.set(r),s.uniformMatrix3fv(this.addr,!1,Km),tn(t,r)}}function XE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Zm.set(r),s.uniformMatrix4fv(this.addr,!1,Zm),tn(t,r)}}function jE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function YE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function qE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function $E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function ZE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function KE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function JE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function e1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Ym.compareFunction=Ng,l=Ym):l=tv,t.setTexture2D(e||l,o)}function t1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||iv,o)}function n1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||rv,o)}function i1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||nv,o)}function r1(s){switch(s){case 5126:return zE;case 35664:return BE;case 35665:return HE;case 35666:return VE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return jE;case 35667:case 35671:return YE;case 35668:case 35672:return qE;case 35669:case 35673:return $E;case 5125:return ZE;case 36294:return KE;case 36295:return JE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(s,e){s.uniform1fv(this.addr,e)}function o1(s,e){const t=no(e,this.size,2);s.uniform2fv(this.addr,t)}function a1(s,e){const t=no(e,this.size,3);s.uniform3fv(this.addr,t)}function l1(s,e){const t=no(e,this.size,4);s.uniform4fv(this.addr,t)}function u1(s,e){const t=no(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function c1(s,e){const t=no(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function f1(s,e){const t=no(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function d1(s,e){s.uniform1iv(this.addr,e)}function h1(s,e){s.uniform2iv(this.addr,e)}function p1(s,e){s.uniform3iv(this.addr,e)}function m1(s,e){s.uniform4iv(this.addr,e)}function g1(s,e){s.uniform1uiv(this.addr,e)}function v1(s,e){s.uniform2uiv(this.addr,e)}function _1(s,e){s.uniform3uiv(this.addr,e)}function x1(s,e){s.uniform4uiv(this.addr,e)}function y1(s,e,t){const r=this.cache,o=e.length,l=Yl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||tv,l[c])}function S1(s,e,t){const r=this.cache,o=e.length,l=Yl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||iv,l[c])}function M1(s,e,t){const r=this.cache,o=e.length,l=Yl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||rv,l[c])}function E1(s,e,t){const r=this.cache,o=e.length,l=Yl(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||nv,l[c])}function T1(s){switch(s){case 5126:return s1;case 35664:return o1;case 35665:return a1;case 35666:return l1;case 35674:return u1;case 35675:return c1;case 35676:return f1;case 5124:case 35670:return d1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return v1;case 36295:return _1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}class w1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}}class A1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T1(t.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function Qm(s,e){s.seq.push(e),s.map[e.id]=e}function R1(s,e,t){const r=s.name,o=r.length;for(lf.lastIndex=0;;){const l=lf.exec(r),c=lf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){Qm(t,p===void 0?new w1(f,s,e):new A1(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new C1(f),Qm(t,v)),t=v}}}class Vl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);R1(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function eg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const P1=37297;let b1=0;function L1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const tg=new pt;function D1(s){Pt._getMatrix(tg,Pt.workingColorSpace,s);const e=`mat3( ${tg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ng(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+L1(s.getShaderSource(e),c)}else return o}function N1(s,e){const t=D1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U1(s,e){let t;switch(e){case z_:t="Linear";break;case B_:t="Reinhard";break;case H_:t="Cineon";break;case yg:t="ACESFilmic";break;case G_:t="AgX";break;case W_:t="Neutral";break;case V_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fl=new j;function I1(){Pt.getLuminanceCoefficients(Fl);const s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function O1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function k1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Wo(s){return s!==""}function ig(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(s){return s.replace(z1,H1)}const B1=new Map;function H1(s,e){let t=mt[e];if(t===void 0){const r=B1.get(e);if(r!==void 0)t=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return td(t)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(s){return s.replace(V1,G1)}function G1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function og(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function W1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case qs:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xg:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case k_:e="ENVMAP_BLENDING_ADD";break}return e}function q1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function $1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=W1(t),p=X1(t),g=j1(t),v=Y1(t),x=q1(t),S=F1(t),M=O1(l),w=o.createProgram();let y,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(y=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[og(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?mt.tonemapping_pars_fragment:"",t.toneMapping!==yr?U1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,N1("linearToOutputTexel",t.outputColorSpace),I1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),c=td(c),c=ig(c,t),c=rg(c,t),f=td(f),f=ig(f,t),f=rg(f,t),c=sg(c),f=sg(f),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=N+y+c,R=N+_+f,V=eg(o,o.VERTEX_SHADER,P),O=eg(o,o.FRAGMENT_SHADER,R);o.attachShader(w,V),o.attachShader(w,O),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(k){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(w).trim(),$=o.getShaderInfoLog(V).trim(),se=o.getShaderInfoLog(O).trim();let ce=!0,re=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,V,O);else{const ue=ng(o,V,"vertex"),H=ng(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+ue+`
`+H)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):($===""||se==="")&&(re=!1);re&&(k.diagnostics={runnable:ce,programLog:ne,vertexShader:{log:$,prefix:y},fragmentShader:{log:se,prefix:_}})}o.deleteShader(V),o.deleteShader(O),B=new Vl(o,w),b=k1(o,w)}let B;this.getUniforms=function(){return B===void 0&&F(this),B};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,P1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=V,this.fragmentShader=O,this}let Z1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new J1(e),t.set(e,r)),r}}class J1{constructor(e){this.id=Z1++,this.code=e,this.usedTimes=0}}function Q1(s,e,t,r,o,l,c){const f=new Og,h=new K1,p=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function y(b,A,k,ne,$){const se=ne.fog,ce=$.geometry,re=b.isMeshStandardMaterial?ne.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||re),H=ue&&ue.mapping===Xl?ue.image.height:null,le=M[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const oe=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,I=oe!==void 0?oe.length:0;let q=0;ce.morphAttributes.position!==void 0&&(q=1),ce.morphAttributes.normal!==void 0&&(q=2),ce.morphAttributes.color!==void 0&&(q=3);let De,K,de,Te;if(le){const Tt=_i[le];De=Tt.vertexShader,K=Tt.fragmentShader}else De=b.vertexShader,K=b.fragmentShader,h.update(b),de=h.getVertexShaderID(b),Te=h.getFragmentShaderID(b);const me=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Be=$.isInstancedMesh===!0,Ke=$.isBatchedMesh===!0,vt=!!b.map,ge=!!b.matcap,Ae=!!ue,D=!!b.aoMap,Je=!!b.lightMap,Me=!!b.bumpMap,He=!!b.normalMap,Re=!!b.displacementMap,nt=!!b.emissiveMap,Ie=!!b.metalnessMap,L=!!b.roughnessMap,T=b.anisotropy>0,J=b.clearcoat>0,fe=b.dispersion>0,ve=b.iridescence>0,he=b.sheen>0,$e=b.transmission>0,be=T&&!!b.anisotropyMap,Ve=J&&!!b.clearcoatMap,ht=J&&!!b.clearcoatNormalMap,Ee=J&&!!b.clearcoatRoughnessMap,je=ve&&!!b.iridescenceMap,it=ve&&!!b.iridescenceThicknessMap,ot=he&&!!b.sheenColorMap,Ye=he&&!!b.sheenRoughnessMap,_t=!!b.specularMap,ct=!!b.specularColorMap,Lt=!!b.specularIntensityMap,X=$e&&!!b.transmissionMap,Ne=$e&&!!b.thicknessMap,ae=!!b.gradientMap,pe=!!b.alphaMap,ke=b.alphaTest>0,Oe=!!b.alphaHash,ft=!!b.extensions;let Ft=yr;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Kt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:K,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&$._colorsTexture!==null,instancing:Be,instancingColor:Be&&$.instanceColor!==null,instancingMorph:Be&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ks,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:ge,envMap:Ae,envMapMode:Ae&&ue.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Je,bumpMap:Me,normalMap:He,displacementMap:x&&Re,emissiveMap:nt,normalMapObjectSpace:He&&b.normalMapType===q_,normalMapTangentSpace:He&&b.normalMapType===Dg,metalnessMap:Ie,roughnessMap:L,anisotropy:T,anisotropyMap:be,clearcoat:J,clearcoatMap:Ve,clearcoatNormalMap:ht,clearcoatRoughnessMap:Ee,dispersion:fe,iridescence:ve,iridescenceMap:je,iridescenceThicknessMap:it,sheen:he,sheenColorMap:ot,sheenRoughnessMap:Ye,specularMap:_t,specularColorMap:ct,specularIntensityMap:Lt,transmission:$e,transmissionMap:X,thicknessMap:Ne,gradientMap:ae,opaque:b.transparent===!1&&b.blending===Gs&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:ke,alphaHash:Oe,combine:b.combine,mapUv:vt&&w(b.map.channel),aoMapUv:D&&w(b.aoMap.channel),lightMapUv:Je&&w(b.lightMap.channel),bumpMapUv:Me&&w(b.bumpMap.channel),normalMapUv:He&&w(b.normalMap.channel),displacementMapUv:Re&&w(b.displacementMap.channel),emissiveMapUv:nt&&w(b.emissiveMap.channel),metalnessMapUv:Ie&&w(b.metalnessMap.channel),roughnessMapUv:L&&w(b.roughnessMap.channel),anisotropyMapUv:be&&w(b.anisotropyMap.channel),clearcoatMapUv:Ve&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&w(b.sheenRoughnessMap.channel),specularMapUv:_t&&w(b.specularMap.channel),specularColorMapUv:ct&&w(b.specularColorMap.channel),specularIntensityMapUv:Lt&&w(b.specularIntensityMap.channel),transmissionMapUv:X&&w(b.transmissionMap.channel),thicknessMapUv:Ne&&w(b.thicknessMap.channel),alphaMapUv:pe&&w(b.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(He||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ce.attributes.uv&&(vt||pe),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Pe,skinning:$.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===Nt,decodeVideoTextureEmissive:nt&&b.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(b.emissiveMap.colorSpace)===Nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zi,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ft&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&b.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function _(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)A.push(k),A.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(N(A,b),P(A,b),A.push(s.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function N(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function P(b,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const A=M[b.type];let k;if(A){const ne=_i[A];k=Hx.clone(ne.uniforms)}else k=b.uniforms;return k}function V(b,A){let k;for(let ne=0,$=g.length;ne<$;ne++){const se=g[ne];if(se.cacheKey===A){k=se,++k.usedTimes;break}}return k===void 0&&(k=new $1(s,A,b,l),g.push(k)),k}function O(b){if(--b.usedTimes===0){const A=g.indexOf(b);g[A]=g[g.length-1],g.pop(),b.destroy()}}function F(b){h.remove(b)}function B(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:V,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:B}}function eT(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function tT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(v,x,S,M,w,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:M,renderOrder:v.renderOrder,z:w,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=w,_.group=y),e++,_}function f(v,x,S,M,w,y){const _=c(v,x,S,M,w,y);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):t.push(_)}function h(v,x,S,M,w,y){const _=c(v,x,S,M,w,y);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||tT),r.length>1&&r.sort(x||ag),o.length>1&&o.sort(x||ag)}function g(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function nT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new lg,s.set(r,[c])):o>=l.length?(c=new lg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function iT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new St};break;case"SpotLight":t={position:new j,direction:new j,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function rT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sT=0;function oT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function aT(s){const e=new iT,t=rT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const o=new j,l=new Ht,c=new Ht;function f(p){let g=0,v=0,x=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,M=0,w=0,y=0,_=0,N=0,P=0,R=0,V=0,O=0,F=0;p.sort(oT);for(let b=0,A=p.length;b<A;b++){const k=p[b],ne=k.color,$=k.intensity,se=k.distance,ce=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ne.r*$,v+=ne.g*$,x+=ne.b*$;else if(k.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(k.sh.coefficients[re],$);F++}else if(k.isDirectionalLight){const re=e.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=k.shadow.matrix,N++}r.directional[S]=re,S++}else if(k.isSpotLight){const re=e.get(k);re.position.setFromMatrixPosition(k.matrixWorld),re.color.copy(ne).multiplyScalar($),re.distance=se,re.coneCos=Math.cos(k.angle),re.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),re.decay=k.decay,r.spot[w]=re;const ue=k.shadow;if(k.map&&(r.spotLightMap[V]=k.map,V++,ue.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[w]=ue.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,r.spotShadow[w]=H,r.spotShadowMap[w]=ce,R++}w++}else if(k.isRectAreaLight){const re=e.get(k);re.color.copy(ne).multiplyScalar($),re.halfWidth.set(k.width*.5,0,0),re.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=re,y++}else if(k.isPointLight){const re=e.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity),re.distance=k.distance,re.decay=k.decay,k.castShadow){const ue=k.shadow,H=t.get(k);H.shadowIntensity=ue.intensity,H.shadowBias=ue.bias,H.shadowNormalBias=ue.normalBias,H.shadowRadius=ue.radius,H.shadowMapSize=ue.mapSize,H.shadowCameraNear=ue.camera.near,H.shadowCameraFar=ue.camera.far,r.pointShadow[M]=H,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=k.shadow.matrix,P++}r.point[M]=re,M++}else if(k.isHemisphereLight){const re=e.get(k);re.skyColor.copy(k.color).multiplyScalar($),re.groundColor.copy(k.groundColor).multiplyScalar($),r.hemi[_]=re,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==S||B.pointLength!==M||B.spotLength!==w||B.rectAreaLength!==y||B.hemiLength!==_||B.numDirectionalShadows!==N||B.numPointShadows!==P||B.numSpotShadows!==R||B.numSpotMaps!==V||B.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+V-O,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=F,B.directionalLength=S,B.pointLength=M,B.spotLength=w,B.rectAreaLength=y,B.hemiLength=_,B.numDirectionalShadows=N,B.numPointShadows=P,B.numSpotShadows=R,B.numSpotMaps=V,B.numLightProbes=F,r.version=sT++)}function h(p,g){let v=0,x=0,S=0,M=0,w=0;const y=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const P=p[_];if(P.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(P.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const R=r.point[x];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),x++}else if(P.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:r}}function ug(s){const e=new aT(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function lT(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new ug(s),e.set(o,[f])):l>=c.length?(f=new ug(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cT=`uniform sampler2D shadow_pass;
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
}`;function fT(s,e,t){let r=new md;const o=new Le,l=new Le,c=new Ut,f=new Ly({depthPacking:Y_}),h=new Dy,p={},g=t.maxTextureSize,v={[Mr]:zn,[zn]:Mr,[zi]:zi},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:uT,fragmentShader:cT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new Si;M.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new cn(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let _=this.type;this.render=function(O,F,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const b=s.getRenderTarget(),A=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(xr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const $=_!==ki&&this.type===ki,se=_===ki&&this.type!==ki;for(let ce=0,re=O.length;ce<re;ce++){const ue=O[ce],H=ue.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();if(o.multiply(le),l.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/le.x),o.x=l.x*le.x,H.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/le.y),o.y=l.y*le.y,H.mapSize.y=l.y)),H.map===null||$===!0||se===!0){const I=this.type!==ki?{minFilter:di,magFilter:di}:{};H.map!==null&&H.map.dispose(),H.map=new Jr(o.x,o.y,I),H.map.texture.name=ue.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const oe=H.getViewportCount();for(let I=0;I<oe;I++){const q=H.getViewport(I);c.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),ne.viewport(c),H.updateMatrices(ue,I),r=H.getFrustum(),R(F,B,H.camera,ue,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&N(H,B),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,A,k)};function N(O,F){const B=e.update(w);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Jr(o.x,o.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,B,x,w,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,B,S,w,null)}function P(O,F,B,b){let A=null;const k=B.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)A=k;else if(A=B.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ne=A.uuid,$=F.uuid;let se=p[ne];se===void 0&&(se={},p[ne]=se);let ce=se[$];ce===void 0&&(ce=A.clone(),se[$]=ce,F.addEventListener("dispose",V)),A=ce}if(A.visible=F.visible,A.wireframe=F.wireframe,b===ki?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ne=s.properties.get(A);ne.light=B}return A}function R(O,F,B,b,A){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===ki)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,O.matrixWorld);const $=e.update(O),se=O.material;if(Array.isArray(se)){const ce=$.groups;for(let re=0,ue=ce.length;re<ue;re++){const H=ce[re],le=se[H.materialIndex];if(le&&le.visible){const oe=P(O,le,b,A);O.onBeforeShadow(s,O,F,B,$,oe,H),s.renderBufferDirect(B,null,$,oe,O,H),O.onAfterShadow(s,O,F,B,$,oe,H)}}}else if(se.visible){const ce=P(O,se,b,A);O.onBeforeShadow(s,O,F,B,$,ce,null),s.renderBufferDirect(B,null,$,ce,O,null),O.onAfterShadow(s,O,F,B,$,ce,null)}}const ne=O.children;for(let $=0,se=ne.length;$<se;$++)R(ne[$],F,B,b,A)}function V(O){O.target.removeEventListener("dispose",V);for(const B in p){const b=p[B],A=O.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const dT={[mf]:gf,[vf]:yf,[_f]:Sf,[js]:xf,[gf]:mf,[yf]:vf,[Sf]:_f,[xf]:js};function hT(s,e){function t(){let X=!1;const Ne=new Ut;let ae=null;const pe=new Ut(0,0,0,0);return{setMask:function(ke){ae!==ke&&!X&&(s.colorMask(ke,ke,ke,ke),ae=ke)},setLocked:function(ke){X=ke},setClear:function(ke,Oe,ft,Ft,Kt){Kt===!0&&(ke*=Ft,Oe*=Ft,ft*=Ft),Ne.set(ke,Oe,ft,Ft),pe.equals(Ne)===!1&&(s.clearColor(ke,Oe,ft,Ft),pe.copy(Ne))},reset:function(){X=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let X=!1,Ne=!1,ae=null,pe=null,ke=null;return{setReversed:function(Oe){if(Ne!==Oe){const ft=e.get("EXT_clip_control");Ne?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const Ft=ke;ke=null,this.setClear(Ft)}Ne=Oe},getReversed:function(){return Ne},setTest:function(Oe){Oe?me(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(Oe){ae!==Oe&&!X&&(s.depthMask(Oe),ae=Oe)},setFunc:function(Oe){if(Ne&&(Oe=dT[Oe]),pe!==Oe){switch(Oe){case mf:s.depthFunc(s.NEVER);break;case gf:s.depthFunc(s.ALWAYS);break;case vf:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case _f:s.depthFunc(s.EQUAL);break;case xf:s.depthFunc(s.GEQUAL);break;case yf:s.depthFunc(s.GREATER);break;case Sf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){ke!==Oe&&(Ne&&(Oe=1-Oe),s.clearDepth(Oe),ke=Oe)},reset:function(){X=!1,ae=null,pe=null,ke=null,Ne=!1}}}function o(){let X=!1,Ne=null,ae=null,pe=null,ke=null,Oe=null,ft=null,Ft=null,Kt=null;return{setTest:function(Tt){X||(Tt?me(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(Tt){Ne!==Tt&&!X&&(s.stencilMask(Tt),Ne=Tt)},setFunc:function(Tt,Dn,En){(ae!==Tt||pe!==Dn||ke!==En)&&(s.stencilFunc(Tt,Dn,En),ae=Tt,pe=Dn,ke=En)},setOp:function(Tt,Dn,En){(Oe!==Tt||ft!==Dn||Ft!==En)&&(s.stencilOp(Tt,Dn,En),Oe=Tt,ft=Dn,Ft=En)},setLocked:function(Tt){X=Tt},setClear:function(Tt){Kt!==Tt&&(s.clearStencil(Tt),Kt=Tt)},reset:function(){X=!1,Ne=null,ae=null,pe=null,ke=null,Oe=null,ft=null,Ft=null,Kt=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],M=null,w=!1,y=null,_=null,N=null,P=null,R=null,V=null,O=null,F=new St(0,0,0),B=0,b=!1,A=null,k=null,ne=null,$=null,se=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ue=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),re=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),re=ue>=2);let le=null,oe={};const I=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),De=new Ut().fromArray(I),K=new Ut().fromArray(q);function de(X,Ne,ae,pe){const ke=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(X,Oe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ft=0;ft<ae;ft++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Ne+ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Oe}const Te={};Te[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),me(s.DEPTH_TEST),c.setFunc(js),Me(!1),He(rm),me(s.CULL_FACE),D(xr);function me(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Pe(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Be(X,Ne){return v[X]!==Ne?(s.bindFramebuffer(X,Ne),v[X]=Ne,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ne),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ke(X,Ne){let ae=S,pe=!1;if(X){ae=x.get(Ne),ae===void 0&&(ae=[],x.set(Ne,ae));const ke=X.textures;if(ae.length!==ke.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,ft=ke.length;Oe<ft;Oe++)ae[Oe]=s.COLOR_ATTACHMENT0+Oe;ae.length=ke.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function vt(X){return M!==X?(s.useProgram(X),M=X,!0):!1}const ge={[qr]:s.FUNC_ADD,[y_]:s.FUNC_SUBTRACT,[S_]:s.FUNC_REVERSE_SUBTRACT};ge[M_]=s.MIN,ge[E_]=s.MAX;const Ae={[T_]:s.ZERO,[w_]:s.ONE,[A_]:s.SRC_COLOR,[hf]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[b_]:s.DST_COLOR,[R_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[pf]:s.ONE_MINUS_SRC_ALPHA,[L_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[N_]:s.CONSTANT_COLOR,[U_]:s.ONE_MINUS_CONSTANT_COLOR,[I_]:s.CONSTANT_ALPHA,[F_]:s.ONE_MINUS_CONSTANT_ALPHA};function D(X,Ne,ae,pe,ke,Oe,ft,Ft,Kt,Tt){if(X===xr){w===!0&&(Pe(s.BLEND),w=!1);return}if(w===!1&&(me(s.BLEND),w=!0),X!==x_){if(X!==y||Tt!==b){if((_!==qr||R!==qr)&&(s.blendEquation(s.FUNC_ADD),_=qr,R=qr),Tt)switch(X){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sm:s.blendFunc(s.ONE,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case am:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,P=null,V=null,O=null,F.set(0,0,0),B=0,y=X,b=Tt}return}ke=ke||Ne,Oe=Oe||ae,ft=ft||pe,(Ne!==_||ke!==R)&&(s.blendEquationSeparate(ge[Ne],ge[ke]),_=Ne,R=ke),(ae!==N||pe!==P||Oe!==V||ft!==O)&&(s.blendFuncSeparate(Ae[ae],Ae[pe],Ae[Oe],Ae[ft]),N=ae,P=pe,V=Oe,O=ft),(Ft.equals(F)===!1||Kt!==B)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Kt),F.copy(Ft),B=Kt),y=X,b=!1}function Je(X,Ne){X.side===zi?Pe(s.CULL_FACE):me(s.CULL_FACE);let ae=X.side===zn;Ne&&(ae=!ae),Me(ae),X.blending===Gs&&X.transparent===!1?D(xr):D(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const pe=X.stencilWrite;f.setTest(pe),pe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),nt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Me(X){A!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),A=X)}function He(X){X!==v_?(me(s.CULL_FACE),X!==k&&(X===rm?s.cullFace(s.BACK):X===__?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),k=X}function Re(X){X!==ne&&(re&&s.lineWidth(X),ne=X)}function nt(X,Ne,ae){X?(me(s.POLYGON_OFFSET_FILL),($!==Ne||se!==ae)&&(s.polygonOffset(Ne,ae),$=Ne,se=ae)):Pe(s.POLYGON_OFFSET_FILL)}function Ie(X){X?me(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function L(X){X===void 0&&(X=s.TEXTURE0+ce-1),le!==X&&(s.activeTexture(X),le=X)}function T(X,Ne,ae){ae===void 0&&(le===null?ae=s.TEXTURE0+ce-1:ae=le);let pe=oe[ae];pe===void 0&&(pe={type:void 0,texture:void 0},oe[ae]=pe),(pe.type!==X||pe.texture!==Ne)&&(le!==ae&&(s.activeTexture(ae),le=ae),s.bindTexture(X,Ne||Te[X]),pe.type=X,pe.texture=Ne)}function J(){const X=oe[le];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(X){De.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),De.copy(X))}function Ye(X){K.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),K.copy(X))}function _t(X,Ne){let ae=p.get(Ne);ae===void 0&&(ae=new WeakMap,p.set(Ne,ae));let pe=ae.get(X);pe===void 0&&(pe=s.getUniformBlockIndex(Ne,X.name),ae.set(X,pe))}function ct(X,Ne){const pe=p.get(Ne).get(X);h.get(Ne)!==pe&&(s.uniformBlockBinding(Ne,pe,X.__bindingPointIndex),h.set(Ne,pe))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},le=null,oe={},v={},x=new WeakMap,S=[],M=null,w=!1,y=null,_=null,N=null,P=null,R=null,V=null,O=null,F=new St(0,0,0),B=0,b=!1,A=null,k=null,ne=null,$=null,se=null,De.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:me,disable:Pe,bindFramebuffer:Be,drawBuffers:Ke,useProgram:vt,setBlending:D,setMaterial:Je,setFlipSided:Me,setCullFace:He,setLineWidth:Re,setPolygonOffset:nt,setScissorTest:Ie,activeTexture:L,bindTexture:T,unbindTexture:J,compressedTexImage2D:fe,compressedTexImage3D:ve,texImage2D:je,texImage3D:it,updateUBOMapping:_t,uniformBlockBinding:ct,texStorage2D:ht,texStorage3D:Ee,texSubImage2D:he,texSubImage3D:$e,compressedTexSubImage2D:be,compressedTexSubImage3D:Ve,scissor:ot,viewport:Ye,reset:Lt}}function pT(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return S?new OffscreenCanvas(L,T):Ko("canvas")}function w(L,T,J){let fe=1;const ve=Ie(L);if((ve.width>J||ve.height>J)&&(fe=J/Math.max(ve.width,ve.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(fe*ve.width),$e=Math.floor(fe*ve.height);v===void 0&&(v=M(he,$e));const be=T?M(he,$e):v;return be.width=he,be.height=$e,be.getContext("2d").drawImage(L,0,0,he,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+he+"x"+$e+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function y(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,T,J,fe,ve=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=T;if(T===s.RED&&(J===s.FLOAT&&(he=s.R32F),J===s.HALF_FLOAT&&(he=s.R16F),J===s.UNSIGNED_BYTE&&(he=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.R8UI),J===s.UNSIGNED_SHORT&&(he=s.R16UI),J===s.UNSIGNED_INT&&(he=s.R32UI),J===s.BYTE&&(he=s.R8I),J===s.SHORT&&(he=s.R16I),J===s.INT&&(he=s.R32I)),T===s.RG&&(J===s.FLOAT&&(he=s.RG32F),J===s.HALF_FLOAT&&(he=s.RG16F),J===s.UNSIGNED_BYTE&&(he=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RG8UI),J===s.UNSIGNED_SHORT&&(he=s.RG16UI),J===s.UNSIGNED_INT&&(he=s.RG32UI),J===s.BYTE&&(he=s.RG8I),J===s.SHORT&&(he=s.RG16I),J===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGB8UI),J===s.UNSIGNED_SHORT&&(he=s.RGB16UI),J===s.UNSIGNED_INT&&(he=s.RGB32UI),J===s.BYTE&&(he=s.RGB8I),J===s.SHORT&&(he=s.RGB16I),J===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),J===s.UNSIGNED_INT&&(he=s.RGBA32UI),J===s.BYTE&&(he=s.RGBA8I),J===s.SHORT&&(he=s.RGBA16I),J===s.INT&&(he=s.RGBA32I)),T===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),T===s.RGBA){const $e=ve?Gl:Pt.getTransfer(fe);J===s.FLOAT&&(he=s.RGBA32F),J===s.HALF_FLOAT&&(he=s.RGBA16F),J===s.UNSIGNED_BYTE&&(he=$e===Nt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function R(L,T){let J;return L?T===null||T===Kr||T===$s?J=s.DEPTH24_STENCIL8:T===Hi?J=s.DEPTH32F_STENCIL8:T===$o&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Kr||T===$s?J=s.DEPTH_COMPONENT24:T===Hi?J=s.DEPTH_COMPONENT32F:T===$o&&(J=s.DEPTH_COMPONENT16),J}function V(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==di&&L.minFilter!==xi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function O(L){const T=L.target;T.removeEventListener("dispose",O),B(T),T.isVideoTexture&&g.delete(T)}function F(L){const T=L.target;T.removeEventListener("dispose",F),A(T)}function B(L){const T=r.get(L);if(T.__webglInit===void 0)return;const J=L.source,fe=x.get(J);if(fe){const ve=fe[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(L),Object.keys(fe).length===0&&x.delete(J)}r.remove(L)}function b(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const J=L.source,fe=x.get(J);delete fe[T.__cacheKey],c.memory.textures--}function A(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let ve=0;ve<T.__webglFramebuffer[fe].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[fe][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let fe=0,ve=J.length;fe<ve;fe++){const he=r.get(J[fe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(J[fe])}r.remove(L)}let k=0;function ne(){k=0}function $(){const L=k;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function se(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ce(L,T){const J=r.get(L);if(L.isVideoTexture&&Re(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,L,T);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function re(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function ue(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,T);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function H(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){de(J,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const le={[Tf]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[wf]:s.MIRRORED_REPEAT},oe={[di]:s.NEAREST,[X_]:s.NEAREST_MIPMAP_NEAREST,[hl]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[bc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},I={[$_]:s.NEVER,[tx]:s.ALWAYS,[Z_]:s.LESS,[Ng]:s.LEQUAL,[K_]:s.EQUAL,[ex]:s.GEQUAL,[J_]:s.GREATER,[Q_]:s.NOTEQUAL};function q(L,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===xi||T.magFilter===bc||T.magFilter===hl||T.magFilter===Zr||T.minFilter===xi||T.minFilter===bc||T.minFilter===hl||T.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,le[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,oe[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===di||T.minFilter!==hl&&T.minFilter!==Zr||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function De(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",O));const fe=T.source;let ve=x.get(fe);ve===void 0&&(ve={},x.set(fe,ve));const he=se(T);if(he!==L.__cacheKey){ve[he]===void 0&&(ve[he]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ve[he].usedTimes++;const $e=ve[L.__cacheKey];$e!==void 0&&(ve[L.__cacheKey].usedTimes--,$e.usedTimes===0&&b(T)),L.__cacheKey=he,L.__webglTexture=ve[he].texture}return J}function K(L,T,J){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const ve=De(L,T),he=T.source;t.bindTexture(fe,L.__webglTexture,s.TEXTURE0+J);const $e=r.get(he);if(he.version!==$e.__version||ve===!0){t.activeTexture(s.TEXTURE0+J);const be=Pt.getPrimaries(Pt.workingColorSpace),Ve=T.colorSpace===_r?null:Pt.getPrimaries(T.colorSpace),ht=T.colorSpace===_r||be===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Ee=w(T.image,!1,o.maxTextureSize);Ee=nt(T,Ee);const je=l.convert(T.format,T.colorSpace),it=l.convert(T.type);let ot=P(T.internalFormat,je,it,T.colorSpace,T.isVideoTexture);q(fe,T);let Ye;const _t=T.mipmaps,ct=T.isVideoTexture!==!0,Lt=$e.__version===void 0||ve===!0,X=he.dataReady,Ne=V(T,Ee);if(T.isDepthTexture)ot=R(T.format===Zs,T.type),Lt&&(ct?t.texStorage2D(s.TEXTURE_2D,1,ot,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,ot,Ee.width,Ee.height,0,je,it,null));else if(T.isDataTexture)if(_t.length>0){ct&&Lt&&t.texStorage2D(s.TEXTURE_2D,Ne,ot,_t[0].width,_t[0].height);for(let ae=0,pe=_t.length;ae<pe;ae++)Ye=_t[ae],ct?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Ye.width,Ye.height,je,it,Ye.data):t.texImage2D(s.TEXTURE_2D,ae,ot,Ye.width,Ye.height,0,je,it,Ye.data);T.generateMipmaps=!1}else ct?(Lt&&t.texStorage2D(s.TEXTURE_2D,Ne,ot,Ee.width,Ee.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,je,it,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,ot,Ee.width,Ee.height,0,je,it,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ct&&Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,ot,_t[0].width,_t[0].height,Ee.depth);for(let ae=0,pe=_t.length;ae<pe;ae++)if(Ye=_t[ae],T.format!==fi)if(je!==null)if(ct){if(X)if(T.layerUpdates.size>0){const ke=zm(Ye.width,Ye.height,T.format,T.type);for(const Oe of T.layerUpdates){const ft=Ye.data.subarray(Oe*ke/Ye.data.BYTES_PER_ELEMENT,(Oe+1)*ke/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Oe,Ye.width,Ye.height,1,je,ft)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Ye.width,Ye.height,Ee.depth,je,Ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,ot,Ye.width,Ye.height,Ee.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Ye.width,Ye.height,Ee.depth,je,it,Ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,ot,Ye.width,Ye.height,Ee.depth,0,je,it,Ye.data)}else{ct&&Lt&&t.texStorage2D(s.TEXTURE_2D,Ne,ot,_t[0].width,_t[0].height);for(let ae=0,pe=_t.length;ae<pe;ae++)Ye=_t[ae],T.format!==fi?je!==null?ct?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Ye.width,Ye.height,je,Ye.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,ot,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Ye.width,Ye.height,je,it,Ye.data):t.texImage2D(s.TEXTURE_2D,ae,ot,Ye.width,Ye.height,0,je,it,Ye.data)}else if(T.isDataArrayTexture)if(ct){if(Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,ot,Ee.width,Ee.height,Ee.depth),X)if(T.layerUpdates.size>0){const ae=zm(Ee.width,Ee.height,T.format,T.type);for(const pe of T.layerUpdates){const ke=Ee.data.subarray(pe*ae/Ee.data.BYTES_PER_ELEMENT,(pe+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,je,it,ke)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,je,it,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ot,Ee.width,Ee.height,Ee.depth,0,je,it,Ee.data);else if(T.isData3DTexture)ct?(Lt&&t.texStorage3D(s.TEXTURE_3D,Ne,ot,Ee.width,Ee.height,Ee.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,je,it,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,ot,Ee.width,Ee.height,Ee.depth,0,je,it,Ee.data);else if(T.isFramebufferTexture){if(Lt)if(ct)t.texStorage2D(s.TEXTURE_2D,Ne,ot,Ee.width,Ee.height);else{let ae=Ee.width,pe=Ee.height;for(let ke=0;ke<Ne;ke++)t.texImage2D(s.TEXTURE_2D,ke,ot,ae,pe,0,je,it,null),ae>>=1,pe>>=1}}else if(_t.length>0){if(ct&&Lt){const ae=Ie(_t[0]);t.texStorage2D(s.TEXTURE_2D,Ne,ot,ae.width,ae.height)}for(let ae=0,pe=_t.length;ae<pe;ae++)Ye=_t[ae],ct?X&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,je,it,Ye):t.texImage2D(s.TEXTURE_2D,ae,ot,je,it,Ye);T.generateMipmaps=!1}else if(ct){if(Lt){const ae=Ie(Ee);t.texStorage2D(s.TEXTURE_2D,Ne,ot,ae.width,ae.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,it,Ee)}else t.texImage2D(s.TEXTURE_2D,0,ot,je,it,Ee);y(T)&&_(fe),$e.__version=he.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function de(L,T,J){if(T.image.length!==6)return;const fe=De(L,T),ve=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const he=r.get(ve);if(ve.version!==he.__version||fe===!0){t.activeTexture(s.TEXTURE0+J);const $e=Pt.getPrimaries(Pt.workingColorSpace),be=T.colorSpace===_r?null:Pt.getPrimaries(T.colorSpace),Ve=T.colorSpace===_r||$e===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const ht=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,je=[];for(let pe=0;pe<6;pe++)!ht&&!Ee?je[pe]=w(T.image[pe],!0,o.maxCubemapSize):je[pe]=Ee?T.image[pe].image:T.image[pe],je[pe]=nt(T,je[pe]);const it=je[0],ot=l.convert(T.format,T.colorSpace),Ye=l.convert(T.type),_t=P(T.internalFormat,ot,Ye,T.colorSpace),ct=T.isVideoTexture!==!0,Lt=he.__version===void 0||fe===!0,X=ve.dataReady;let Ne=V(T,it);q(s.TEXTURE_CUBE_MAP,T);let ae;if(ht){ct&&Lt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,_t,it.width,it.height);for(let pe=0;pe<6;pe++){ae=je[pe].mipmaps;for(let ke=0;ke<ae.length;ke++){const Oe=ae[ke];T.format!==fi?ot!==null?ct?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,Oe.width,Oe.height,ot,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,_t,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,0,0,Oe.width,Oe.height,ot,Ye,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke,_t,Oe.width,Oe.height,0,ot,Ye,Oe.data)}}}else{if(ae=T.mipmaps,ct&&Lt){ae.length>0&&Ne++;const pe=Ie(je[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,_t,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je[pe].width,je[pe].height,ot,Ye,je[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_t,je[pe].width,je[pe].height,0,ot,Ye,je[pe].data);for(let ke=0;ke<ae.length;ke++){const ft=ae[ke].image[pe].image;ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,ft.width,ft.height,ot,Ye,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,_t,ft.width,ft.height,0,ot,Ye,ft.data)}}else{ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ot,Ye,je[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,_t,ot,Ye,je[pe]);for(let ke=0;ke<ae.length;ke++){const Oe=ae[ke];ct?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,0,0,ot,Ye,Oe.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ke+1,_t,ot,Ye,Oe.image[pe])}}}y(T)&&_(s.TEXTURE_CUBE_MAP),he.__version=ve.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Te(L,T,J,fe,ve,he){const $e=l.convert(J.format,J.colorSpace),be=l.convert(J.type),Ve=P(J.internalFormat,$e,be,J.colorSpace),ht=r.get(T),Ee=r.get(J);if(Ee.__renderTarget=T,!ht.__hasExternalTextures){const je=Math.max(1,T.width>>he),it=Math.max(1,T.height>>he);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,he,Ve,je,it,T.depth,0,$e,be,null):t.texImage2D(ve,he,Ve,je,it,0,$e,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),He(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ve,Ee.__webglTexture,0,Me(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,ve,Ee.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(L,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const fe=T.depthTexture,ve=fe&&fe.isDepthTexture?fe.type:null,he=R(T.stencilBuffer,ve),$e=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=Me(T);He(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,he,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,he,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,L)}else{const fe=T.textures;for(let ve=0;ve<fe.length;ve++){const he=fe[ve],$e=l.convert(he.format,he.colorSpace),be=l.convert(he.type),Ve=P(he.internalFormat,$e,be,he.colorSpace),ht=Me(T);J&&He(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Ve,T.width,T.height):He(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Ve,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(T.depthTexture);fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const ve=fe.__webglTexture,he=Me(T);if(T.depthTexture.format===Ws)He(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Zs)He(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Be(L){const T=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",ve)};fe.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=fe}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Pe(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),me(T.__webglDepthbuffer[fe],L,!1);else{const ve=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,he)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),me(T.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,T,J){const fe=r.get(L);T!==void 0&&Te(fe.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Be(L)}function vt(L){const T=L.texture,J=r.get(L),fe=r.get(T);L.addEventListener("dispose",F);const ve=L.textures,he=L.isWebGLCubeRenderTarget===!0,$e=ve.length>1;if($e||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,c.memory.textures++),he){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let Ve=0;Ve<T.mipmaps.length;Ve++)J.__webglFramebuffer[be][Ve]=s.createFramebuffer()}else J.__webglFramebuffer[be]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)J.__webglFramebuffer[be]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if($e)for(let be=0,Ve=ve.length;be<Ve;be++){const ht=r.get(ve[be]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&He(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Ve=ve[be];J.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const ht=l.convert(Ve.format,Ve.colorSpace),Ee=l.convert(Ve.type),je=P(Ve.internalFormat,ht,Ee,Ve.colorSpace,L.isXRRenderTarget===!0),it=Me(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,je,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,J.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),me(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),q(s.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Te(J.__webglFramebuffer[be][Ve],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve);else Te(J.__webglFramebuffer[be],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let be=0,Ve=ve.length;be<Ve;be++){const ht=ve[be],Ee=r.get(ht);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),q(s.TEXTURE_2D,ht),Te(J.__webglFramebuffer,L,ht,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(ht)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,fe.__webglTexture),q(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Ve=0;Ve<T.mipmaps.length;Ve++)Te(J.__webglFramebuffer[Ve],L,T,s.COLOR_ATTACHMENT0,be,Ve);else Te(J.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,be,0);y(T)&&_(be),t.unbindTexture()}L.depthBuffer&&Be(L)}function ge(L){const T=L.textures;for(let J=0,fe=T.length;J<fe;J++){const ve=T[J];if(y(ve)){const he=N(L),$e=r.get(ve).__webglTexture;t.bindTexture(he,$e),_(he),t.unbindTexture()}}}const Ae=[],D=[];function Je(L){if(L.samples>0){if(He(L)===!1){const T=L.textures,J=L.width,fe=L.height;let ve=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(L),be=T.length>1;if(be)for(let Ve=0;Ve<T.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ve=0;Ve<T.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[Ve]);const ht=r.get(T[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,J,fe,0,0,J,fe,ve,s.NEAREST),h===!0&&(Ae.length=0,D.length=0,Ae.push(s.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ae.push(he),D.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ve=0;Ve<T.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,$e.__webglColorRenderbuffer[Ve]);const ht=r.get(T[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Me(L){return Math.min(o.maxSamples,L.samples)}function He(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(L){const T=c.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function nt(L,T){const J=L.colorSpace,fe=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Ks&&J!==_r&&(Pt.getTransfer(J)===Nt?(fe!==fi||ve!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=re,this.setTexture3D=ue,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=He}function mT(s,e){function t(r,o=_r){let l;const c=Pt.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Mg)return s.BYTE;if(r===Eg)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===od)return s.INT;if(r===Kr)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===ta)return s.HALF_FLOAT;if(r===wg)return s.ALPHA;if(r===Ag)return s.RGB;if(r===fi)return s.RGBA;if(r===Cg)return s.LUMINANCE;if(r===Rg)return s.LUMINANCE_ALPHA;if(r===Ws)return s.DEPTH_COMPONENT;if(r===Zs)return s.DEPTH_STENCIL;if(r===Pg)return s.RED;if(r===ud)return s.RED_INTEGER;if(r===bg)return s.RG;if(r===cd)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===Ol||r===kl||r===zl||r===Bl)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Af||r===Cf||r===Rf||r===Pf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Af)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bf||r===Lf||r===Df)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===bf||r===Lf)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Df)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Nf||r===Uf||r===If||r===Ff||r===Of||r===kf||r===zf||r===Bf||r===Hf||r===Vf||r===Gf||r===Wf||r===Xf||r===jf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Nf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===If)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ff)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Of)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jf)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl||r===Yf||r===qf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hl)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lg||r===$f||r===Zf||r===Kf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Hl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===$f)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Kf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$s?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const gT={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Go;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const vT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_T=`
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

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Sn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Er({vertexShader:vT,fragmentShader:_T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new ra(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends Qs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,x=null,S=null,M=null;const w=new xT,y=t.getContextAttributes();let _=null,N=null;const P=[],R=[],V=new Le;let O=null;const F=new jn;F.viewport=new Ut;const B=new jn;B.viewport=new Ut;const b=[F,B],A=new Hy;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let de=P[K];return de===void 0&&(de=new uf,P[K]=de),de.getTargetRaySpace()},this.getControllerGrip=function(K){let de=P[K];return de===void 0&&(de=new uf,P[K]=de),de.getGripSpace()},this.getHand=function(K){let de=P[K];return de===void 0&&(de=new uf,P[K]=de),de.getHandSpace()};function $(K){const de=R.indexOf(K.inputSource);if(de===-1)return;const Te=P[de];Te!==void 0&&(Te.update(K.inputSource,K.frame,p||c),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function se(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",ce);for(let K=0;K<P.length;K++){const de=R[K];de!==null&&(R[K]=null,P[K].disconnect(de))}k=null,ne=null,w.reset(),e.setRenderTarget(_),S=null,x=null,v=null,o=null,N=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(_=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",se),o.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0){const de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Jr(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let de=null,Te=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?Zs:Ws,Te=y.stencil?$s:Kr);const Pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:l};v=new XRWebGLBinding(o,t),x=v.createProjectionLayer(Pe),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Jr(x.textureWidth,x.textureHeight,{format:fi,type:Wi,depthTexture:new Wg(x.textureWidth,x.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ce(K){for(let de=0;de<K.removed.length;de++){const Te=K.removed[de],me=R.indexOf(Te);me>=0&&(R[me]=null,P[me].disconnect(Te))}for(let de=0;de<K.added.length;de++){const Te=K.added[de];let me=R.indexOf(Te);if(me===-1){for(let Be=0;Be<P.length;Be++)if(Be>=R.length){R.push(Te),me=Be;break}else if(R[Be]===null){R[Be]=Te,me=Be;break}if(me===-1)break}const Pe=P[me];Pe&&Pe.connect(Te)}}const re=new j,ue=new j;function H(K,de,Te){re.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(Te.matrixWorld);const me=re.distanceTo(ue),Pe=de.projectionMatrix.elements,Be=Te.projectionMatrix.elements,Ke=Pe[14]/(Pe[10]-1),vt=Pe[14]/(Pe[10]+1),ge=(Pe[9]+1)/Pe[5],Ae=(Pe[9]-1)/Pe[5],D=(Pe[8]-1)/Pe[0],Je=(Be[8]+1)/Be[0],Me=Ke*D,He=Ke*Je,Re=me/(-D+Je),nt=Re*-D;if(de.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Re),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Pe[10]===-1)K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ie=Ke+Re,L=vt+Re,T=Me-nt,J=He+(me-nt),fe=ge*vt/L*Ie,ve=Ae*vt/L*Ie;K.projectionMatrix.makePerspective(T,J,fe,ve,Ie,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,de){de===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(de.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let de=K.near,Te=K.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(Te=w.depthFar)),A.near=B.near=F.near=de,A.far=B.far=F.far=Te,(k!==A.near||ne!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,ne=A.far),F.layers.mask=K.layers.mask|2,B.layers.mask=K.layers.mask|4,A.layers.mask=F.layers.mask|B.layers.mask;const me=K.parent,Pe=A.cameras;le(A,me);for(let Be=0;Be<Pe.length;Be++)le(Pe[Be],me);Pe.length===2?H(A,F,B):A.projectionMatrix.copy(F.projectionMatrix),oe(K,A,me)};function oe(K,de,Te){Te===null?K.matrix.copy(de.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(de.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(de.projectionMatrix),K.projectionMatrixInverse.copy(de.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Zo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(K){h=K,x!==null&&(x.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let I=null;function q(K,de){if(g=de.getViewerPose(p||c),M=de,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let me=!1;Te.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let Be=0;Be<Te.length;Be++){const Ke=Te[Be];let vt=null;if(S!==null)vt=S.getViewport(Ke);else{const Ae=v.getViewSubImage(x,Ke);vt=Ae.viewport,Be===0&&(e.setRenderTargetTextures(N,Ae.colorTexture,x.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(N))}let ge=b[Be];ge===void 0&&(ge=new jn,ge.layers.enable(Be),ge.viewport=new Ut,b[Be]=ge),ge.matrix.fromArray(Ke.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ke.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(vt.x,vt.y,vt.width,vt.height),Be===0&&(A.matrix.copy(ge.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push(ge)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Be=v.getDepthInformation(Te[0]);Be&&Be.isValid&&Be.texture&&w.init(e,Be,o.renderState)}}for(let Te=0;Te<P.length;Te++){const me=R[Te],Pe=P[Te];me!==null&&Pe!==void 0&&Pe.update(me,de,p||c)}I&&I(K,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const De=new ev;De.setAnimationLoop(q),this.setAnimationLoop=function(K){I=K},this.dispose=function(){}}}const Xr=new Ln,ST=new Ht;function MT(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Hg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,N,P,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),M(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),w(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,N,P):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===zn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===zn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),P=N.envMap,R=N.envMapRotation;P&&(y.envMap.value=P,Xr.copy(R),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),y.envMapRotation.value.setFromMatrix4(ST.makeRotationFromEuler(Xr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,N,P){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=P*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ET(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,P){const R=P.program;r.uniformBlockBinding(N,R)}function p(N,P){let R=o[N.id];R===void 0&&(M(N),R=g(N),o[N.id]=R,N.addEventListener("dispose",y));const V=P.program;r.updateUBOMapping(N,V);const O=e.render.frame;l[N.id]!==O&&(x(N),l[N.id]=O)}function g(N){const P=v();N.__bindingPointIndex=P;const R=s.createBuffer(),V=N.__size,O=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,V,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function v(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const P=o[N.id],R=N.uniforms,V=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let O=0,F=R.length;O<F;O++){const B=Array.isArray(R[O])?R[O]:[R[O]];for(let b=0,A=B.length;b<A;b++){const k=B[b];if(S(k,O,b,V)===!0){const ne=k.__offset,$=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let ce=0;ce<$.length;ce++){const re=$[ce],ue=w(re);typeof re=="number"||typeof re=="boolean"?(k.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,ne+se,k.__data)):re.isMatrix3?(k.__data[0]=re.elements[0],k.__data[1]=re.elements[1],k.__data[2]=re.elements[2],k.__data[3]=0,k.__data[4]=re.elements[3],k.__data[5]=re.elements[4],k.__data[6]=re.elements[5],k.__data[7]=0,k.__data[8]=re.elements[6],k.__data[9]=re.elements[7],k.__data[10]=re.elements[8],k.__data[11]=0):(re.toArray(k.__data,se),se+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,P,R,V){const O=N.value,F=P+"_"+R;if(V[F]===void 0)return typeof O=="number"||typeof O=="boolean"?V[F]=O:V[F]=O.clone(),!0;{const B=V[F];if(typeof O=="number"||typeof O=="boolean"){if(B!==O)return V[F]=O,!0}else if(B.equals(O)===!1)return B.copy(O),!0}return!1}function M(N){const P=N.uniforms;let R=0;const V=16;for(let F=0,B=P.length;F<B;F++){const b=Array.isArray(P[F])?P[F]:[P[F]];for(let A=0,k=b.length;A<k;A++){const ne=b[A],$=Array.isArray(ne.value)?ne.value:[ne.value];for(let se=0,ce=$.length;se<ce;se++){const re=$[se],ue=w(re),H=R%V,le=H%ue.boundary,oe=H+le;R+=le,oe!==0&&V-oe<ue.storage&&(R+=V-oe),ne.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=R,R+=ue.storage}}}const O=R%V;return O>0&&(R+=V-O),N.__size=R,N.__cache={},this}function w(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function y(N){const P=N.target;P.removeEventListener("dispose",y);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function _(){for(const N in o)s.deleteBuffer(o[N]);c=[],o={},l={}}return{bind:h,update:p,dispose:_}}class TT{constructor(e={}){const{canvas:t=xx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const N=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=yr,this.toneMappingExposure=1;const R=this;let V=!1,O=0,F=0,B=null,b=-1,A=null;const k=new Ut,ne=new Ut;let $=null;const se=new St(0);let ce=0,re=t.width,ue=t.height,H=1,le=null,oe=null;const I=new Ut(0,0,re,ue),q=new Ut(0,0,re,ue);let De=!1;const K=new md;let de=!1,Te=!1;const me=new Ht,Pe=new Ht,Be=new j,Ke=new Ut,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ae(){return B===null?H:1}let D=r;function Je(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),D===null){const Y="webgl2";if(D=Je(Y,C),D===null)throw Je(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,He,Re,nt,Ie,L,T,J,fe,ve,he,$e,be,Ve,ht,Ee,je,it,ot,Ye,_t,ct,Lt,X;function Ne(){Me=new NE(D),Me.init(),ct=new mT(D,Me),He=new CE(D,Me,e,ct),Re=new hT(D,Me),He.reverseDepthBuffer&&x&&Re.buffers.depth.setReversed(!0),nt=new FE(D),Ie=new eT,L=new pT(D,Me,Re,Ie,He,ct,nt),T=new PE(R),J=new DE(R),fe=new Gy(D),Lt=new wE(D,fe),ve=new UE(D,fe,nt,Lt),he=new kE(D,ve,fe,nt),ot=new OE(D,He,L),Ee=new RE(Ie),$e=new Q1(R,T,J,Me,He,Lt,Ee),be=new MT(R,Ie),Ve=new nT,ht=new lT(Me),it=new TE(R,T,J,Re,he,S,h),je=new fT(R,he,He),X=new ET(D,nt,He,Re),Ye=new AE(D,Me,nt),_t=new IE(D,Me,nt),nt.programs=$e.programs,R.capabilities=He,R.extensions=Me,R.properties=Ie,R.renderLists=Ve,R.shadowMap=je,R.state=Re,R.info=nt}Ne();const ae=new yT(R,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(re,ue,!1))},this.getSize=function(C){return C.set(re,ue)},this.setSize=function(C,Y,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,ue=Y,t.width=Math.floor(C*H),t.height=Math.floor(Y*H),te===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(re*H,ue*H).floor()},this.setDrawingBufferSize=function(C,Y,te){re=C,ue=Y,H=te,t.width=Math.floor(C*te),t.height=Math.floor(Y*te),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,Y,te,ie){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,Y,te,ie),Re.viewport(k.copy(I).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,Y,te,ie){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,Y,te,ie),Re.scissor(ne.copy(q).multiplyScalar(H).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Re.setScissorTest(De=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(C=!0,Y=!0,te=!0){let ie=0;if(C){let G=!1;if(B!==null){const we=B.texture.format;G=we===fd||we===cd||we===ud}if(G){const we=B.texture.type,Ue=we===Wi||we===Kr||we===$o||we===$s||we===ad||we===ld,Ge=it.getClearColor(),We=it.getClearAlpha(),at=Ge.r,lt=Ge.g,et=Ge.b;Ue?(M[0]=at,M[1]=lt,M[2]=et,M[3]=We,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=at,w[1]=lt,w[2]=et,w[3]=We,D.clearBufferiv(D.COLOR,0,w))}else ie|=D.COLOR_BUFFER_BIT}Y&&(ie|=D.DEPTH_BUFFER_BIT),te&&(ie|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),it.dispose(),Ve.dispose(),ht.dispose(),Ie.dispose(),T.dispose(),J.dispose(),he.dispose(),Lt.dispose(),X.dispose(),$e.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ts),ae.removeEventListener("sessionend",Xi),Ei.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const C=nt.autoReset,Y=je.enabled,te=je.autoUpdate,ie=je.needsUpdate,G=je.type;Ne(),nt.autoReset=C,je.enabled=Y,je.autoUpdate=te,je.needsUpdate=ie,je.type=G}function Oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){const Y=C.target;Y.removeEventListener("dispose",ft),Ft(Y)}function Ft(C){Kt(C),Ie.remove(C)}function Kt(C){const Y=Ie.get(C).programs;Y!==void 0&&(Y.forEach(function(te){$e.releaseProgram(te)}),C.isShaderMaterial&&$e.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,te,ie,G,we){Y===null&&(Y=vt);const Ue=G.isMesh&&G.matrixWorld.determinant()<0,Ge=aa(C,Y,te,ie,G);Re.setMaterial(ie,Ue);let We=te.index,at=1;if(ie.wireframe===!0){if(We=ve.getWireframeAttribute(te),We===void 0)return;at=2}const lt=te.drawRange,et=te.attributes.position;let dt=lt.start*at,At=(lt.start+lt.count)*at;we!==null&&(dt=Math.max(dt,we.start*at),At=Math.min(At,(we.start+we.count)*at)),We!==null?(dt=Math.max(dt,0),At=Math.min(At,We.count)):et!=null&&(dt=Math.max(dt,0),At=Math.min(At,et.count));const Ct=At-dt;if(Ct<0||Ct===1/0)return;Lt.setup(G,ie,Ge,te,We);let zt,Et=Ye;if(We!==null&&(zt=fe.get(We),Et=_t,Et.setIndex(zt)),G.isMesh)ie.wireframe===!0?(Re.setLineWidth(ie.wireframeLinewidth*Ae()),Et.setMode(D.LINES)):Et.setMode(D.TRIANGLES);else if(G.isLine){let tt=ie.linewidth;tt===void 0&&(tt=1),Re.setLineWidth(tt*Ae()),G.isLineSegments?Et.setMode(D.LINES):G.isLineLoop?Et.setMode(D.LINE_LOOP):Et.setMode(D.LINE_STRIP)}else G.isPoints?Et.setMode(D.POINTS):G.isSprite&&Et.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const tt=G._multiDrawStarts,Xt=G._multiDrawCounts,Mt=G._multiDrawCount,an=We?fe.get(We).bytesPerElement:1,ei=Ie.get(ie).currentProgram.getUniforms();for(let Tn=0;Tn<Mt;Tn++)ei.setValue(D,"_gl_DrawID",Tn),Et.render(tt[Tn]/an,Xt[Tn])}else if(G.isInstancedMesh)Et.renderInstances(dt,Ct,G.count);else if(te.isInstancedBufferGeometry){const tt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Xt=Math.min(te.instanceCount,tt);Et.renderInstances(dt,Ct,Xt)}else Et.render(dt,Ct)};function Tt(C,Y,te){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=zn,C.needsUpdate=!0,ns(C,Y,te),C.side=Mr,C.needsUpdate=!0,ns(C,Y,te),C.side=zi):ns(C,Y,te)}this.compile=function(C,Y,te=null){te===null&&(te=C),_=ht.get(te),_.init(Y),P.push(_),te.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),C!==te&&C.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();const ie=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const we=G.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){const Ge=we[Ue];Tt(Ge,te,G),ie.add(Ge)}else Tt(we,te,G),ie.add(we)}),P.pop(),_=null,ie},this.compileAsync=function(C,Y,te=null){const ie=this.compile(C,Y,te);return new Promise(G=>{function we(){if(ie.forEach(function(Ue){Ie.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){G(C);return}setTimeout(we,10)}Me.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Dn=null;function En(C){Dn&&Dn(C)}function ts(){Ei.stop()}function Xi(){Ei.start()}const Ei=new ev;Ei.setAnimationLoop(En),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(C){Dn=C,ae.setAnimationLoop(C),C===null?Ei.stop():Ei.start()},ae.addEventListener("sessionstart",ts),ae.addEventListener("sessionend",Xi),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(Y),Y=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Y,B),_=ht.get(C,P.length),_.init(Y),P.push(_),Pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),K.setFromProjectionMatrix(Pe),Te=this.localClippingEnabled,de=Ee.init(this.clippingPlanes,Te),y=Ve.get(C,N.length),y.init(),N.push(y),ae.enabled===!0&&ae.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Ti(we,Y,-1/0,R.sortObjects)}Ti(C,Y,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(le,oe),ge=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ge&&it.addToRenderList(y,C),this.info.render.frame++,de===!0&&Ee.beginShadows();const te=_.state.shadowsArray;je.render(te,C,Y),de===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,G=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const we=Y.cameras;if(G.length>0)for(let Ue=0,Ge=we.length;Ue<Ge;Ue++){const We=we[Ue];wr(ie,G,C,We)}ge&&it.render(C);for(let Ue=0,Ge=we.length;Ue<Ge;Ue++){const We=we[Ue];Tr(y,C,We,We.viewport)}}else G.length>0&&wr(ie,G,C,Y),ge&&it.render(C),Tr(y,C,Y);B!==null&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(R,C,Y),Lt.resetDefaultState(),b=-1,A=null,P.pop(),P.length>0?(_=P[P.length-1],de===!0&&Ee.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Ti(C,Y,te,ie){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){ie&&Ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pe);const Ue=he.update(C),Ge=C.material;Ge.visible&&y.push(C,Ue,Ge,te,Ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const Ue=he.update(C),Ge=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ke.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ke.copy(Ue.boundingSphere.center)),Ke.applyMatrix4(C.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ge)){const We=Ue.groups;for(let at=0,lt=We.length;at<lt;at++){const et=We[at],dt=Ge[et.materialIndex];dt&&dt.visible&&y.push(C,Ue,dt,te,Ke.z,et)}}else Ge.visible&&y.push(C,Ue,Ge,te,Ke.z,null)}}const we=C.children;for(let Ue=0,Ge=we.length;Ue<Ge;Ue++)Ti(we[Ue],Y,te,ie)}function Tr(C,Y,te,ie){const G=C.opaque,we=C.transmissive,Ue=C.transparent;_.setupLightsView(te),de===!0&&Ee.setGlobalState(R.clippingPlanes,te),ie&&Re.viewport(k.copy(ie)),G.length>0&&ji(G,Y,te),we.length>0&&ji(we,Y,te),Ue.length>0&&ji(Ue,Y,te),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function wr(C,Y,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ie.id]===void 0&&(_.state.transmissionRenderTarget[ie.id]=new Jr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?ta:Wi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const we=_.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||k;we.setSize(Ue.z,Ue.w);const Ge=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(se),ce=R.getClearAlpha(),ce<1&&R.setClearColor(16777215,.5),R.clear(),ge&&it.render(te);const We=R.toneMapping;R.toneMapping=yr;const at=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),_.setupLightsView(ie),de===!0&&Ee.setGlobalState(R.clippingPlanes,ie),ji(C,te,ie),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),Me.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let et=0,dt=Y.length;et<dt;et++){const At=Y[et],Ct=At.object,zt=At.geometry,Et=At.material,tt=At.group;if(Et.side===zi&&Ct.layers.test(ie.layers)){const Xt=Et.side;Et.side=zn,Et.needsUpdate=!0,sa(Ct,te,ie,zt,Et,tt),Et.side=Xt,Et.needsUpdate=!0,lt=!0}}lt===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}R.setRenderTarget(Ge),R.setClearColor(se,ce),at!==void 0&&(ie.viewport=at),R.toneMapping=We}function ji(C,Y,te){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,we=C.length;G<we;G++){const Ue=C[G],Ge=Ue.object,We=Ue.geometry,at=ie===null?Ue.material:ie,lt=Ue.group;Ge.layers.test(te.layers)&&sa(Ge,Y,te,We,at,lt)}}function sa(C,Y,te,ie,G,we){C.onBeforeRender(R,Y,te,ie,G,we),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(R,Y,te,ie,C,we),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=zn,G.needsUpdate=!0,R.renderBufferDirect(te,Y,ie,G,C,we),G.side=Mr,G.needsUpdate=!0,R.renderBufferDirect(te,Y,ie,G,C,we),G.side=zi):R.renderBufferDirect(te,Y,ie,G,C,we),C.onAfterRender(R,Y,te,ie,G,we)}function ns(C,Y,te){Y.isScene!==!0&&(Y=vt);const ie=Ie.get(C),G=_.state.lights,we=_.state.shadowsArray,Ue=G.state.version,Ge=$e.getParameters(C,G.state,we,Y,te),We=$e.getProgramCacheKey(Ge);let at=ie.programs;ie.environment=C.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(C.isMeshStandardMaterial?J:T).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,at===void 0&&(C.addEventListener("dispose",ft),at=new Map,ie.programs=at);let lt=at.get(We);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===Ue)return hi(C,Ge),lt}else Ge.uniforms=$e.getUniforms(C),C.onBeforeCompile(Ge,R),lt=$e.acquireProgram(Ge,We),at.set(We,lt),ie.uniforms=Ge.uniforms;const et=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Ee.uniform),hi(C,Ge),ie.needsLights=ql(C),ie.lightsStateVersion=Ue,ie.needsLights&&(et.ambientLightColor.value=G.state.ambient,et.lightProbe.value=G.state.probe,et.directionalLights.value=G.state.directional,et.directionalLightShadows.value=G.state.directionalShadow,et.spotLights.value=G.state.spot,et.spotLightShadows.value=G.state.spotShadow,et.rectAreaLights.value=G.state.rectArea,et.ltc_1.value=G.state.rectAreaLTC1,et.ltc_2.value=G.state.rectAreaLTC2,et.pointLights.value=G.state.point,et.pointLightShadows.value=G.state.pointShadow,et.hemisphereLights.value=G.state.hemi,et.directionalShadowMap.value=G.state.directionalShadowMap,et.directionalShadowMatrix.value=G.state.directionalShadowMatrix,et.spotShadowMap.value=G.state.spotShadowMap,et.spotLightMatrix.value=G.state.spotLightMatrix,et.spotLightMap.value=G.state.spotLightMap,et.pointShadowMap.value=G.state.pointShadowMap,et.pointShadowMatrix.value=G.state.pointShadowMatrix),ie.currentProgram=lt,ie.uniformsList=null,lt}function oa(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Vl.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function hi(C,Y){const te=Ie.get(C);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function aa(C,Y,te,ie,G){Y.isScene!==!0&&(Y=vt),L.resetTextureUnits();const we=Y.fog,Ue=ie.isMeshStandardMaterial?Y.environment:null,Ge=B===null?R.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ks,We=(ie.isMeshStandardMaterial?J:T).get(ie.envMap||Ue),at=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,lt=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),et=!!te.morphAttributes.position,dt=!!te.morphAttributes.normal,At=!!te.morphAttributes.color;let Ct=yr;ie.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ct=R.toneMapping);const zt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Et=zt!==void 0?zt.length:0,tt=Ie.get(ie),Xt=_.state.lights;if(de===!0&&(Te===!0||C!==A)){const Yt=C===A&&ie.id===b;Ee.setState(ie,C,Yt)}let Mt=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Xt.state.version||tt.outputColorSpace!==Ge||G.isBatchedMesh&&tt.batching===!1||!G.isBatchedMesh&&tt.batching===!0||G.isBatchedMesh&&tt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&tt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&tt.instancing===!1||!G.isInstancedMesh&&tt.instancing===!0||G.isSkinnedMesh&&tt.skinning===!1||!G.isSkinnedMesh&&tt.skinning===!0||G.isInstancedMesh&&tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&tt.instancingMorph===!1&&G.morphTexture!==null||tt.envMap!==We||ie.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ee.numPlanes||tt.numIntersection!==Ee.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==lt||tt.morphTargets!==et||tt.morphNormals!==dt||tt.morphColors!==At||tt.toneMapping!==Ct||tt.morphTargetsCount!==Et)&&(Mt=!0):(Mt=!0,tt.__version=ie.version);let an=tt.currentProgram;Mt===!0&&(an=ns(ie,Y,G));let ei=!1,Tn=!1,Ar=!1;const Dt=an.getUniforms(),wn=tt.uniforms;if(Re.useProgram(an.program)&&(ei=!0,Tn=!0,Ar=!0),ie.id!==b&&(b=ie.id,Tn=!0),ei||A!==C){Re.buffers.depth.getReversed()?(me.copy(C.projectionMatrix),Sx(me),Mx(me),Dt.setValue(D,"projectionMatrix",me)):Dt.setValue(D,"projectionMatrix",C.projectionMatrix),Dt.setValue(D,"viewMatrix",C.matrixWorldInverse);const pn=Dt.map.cameraPosition;pn!==void 0&&pn.setValue(D,Be.setFromMatrixPosition(C.matrixWorld)),He.logarithmicDepthBuffer&&Dt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Dt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Tn=!0,Ar=!0)}if(G.isSkinnedMesh){Dt.setOptional(D,G,"bindMatrix"),Dt.setOptional(D,G,"bindMatrixInverse");const Yt=G.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Dt.setValue(D,"boneTexture",Yt.boneTexture,L))}G.isBatchedMesh&&(Dt.setOptional(D,G,"batchingTexture"),Dt.setValue(D,"batchingTexture",G._matricesTexture,L),Dt.setOptional(D,G,"batchingIdTexture"),Dt.setValue(D,"batchingIdTexture",G._indirectTexture,L),Dt.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Dt.setValue(D,"batchingColorTexture",G._colorsTexture,L));const hn=te.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ot.update(G,te,an),(Tn||tt.receiveShadow!==G.receiveShadow)&&(tt.receiveShadow=G.receiveShadow,Dt.setValue(D,"receiveShadow",G.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(wn.envMap.value=We,wn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),Tn&&(Dt.setValue(D,"toneMappingExposure",R.toneMappingExposure),tt.needsLights&&la(wn,Ar),we&&ie.fog===!0&&be.refreshFogUniforms(wn,we),be.refreshMaterialUniforms(wn,ie,H,ue,_.state.transmissionRenderTarget[C.id]),Vl.upload(D,oa(tt),wn,L)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Vl.upload(D,oa(tt),wn,L),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Dt.setValue(D,"center",G.center),Dt.setValue(D,"modelViewMatrix",G.modelViewMatrix),Dt.setValue(D,"normalMatrix",G.normalMatrix),Dt.setValue(D,"modelMatrix",G.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Yt=ie.uniformsGroups;for(let pn=0,Cr=Yt.length;pn<Cr;pn++){const yt=Yt[pn];X.update(yt,an),X.bind(yt,an)}}return an}function la(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ql(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Y,te){Ie.get(C.texture).__webglTexture=Y,Ie.get(C.depthTexture).__webglTexture=te;const ie=Ie.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,Y){const te=Ie.get(C);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,te=0){B=C,O=Y,F=te;let ie=!0,G=null,we=!1,Ue=!1;if(C){const We=Ie.get(C);if(We.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(D.FRAMEBUFFER,null),ie=!1;else if(We.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(We.__hasExternalTextures)L.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const et=C.depthTexture;if(We.__boundDepthTexture!==et){if(et!==null&&Ie.has(et)&&(C.width!==et.image.width||C.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const at=C.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ue=!0);const lt=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?G=lt[Y][te]:G=lt[Y],we=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?G=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?G=lt[te]:G=lt,k.copy(C.viewport),ne.copy(C.scissor),$=C.scissorTest}else k.copy(I).multiplyScalar(H).floor(),ne.copy(q).multiplyScalar(H).floor(),$=De;if(Re.bindFramebuffer(D.FRAMEBUFFER,G)&&ie&&Re.drawBuffers(C,G),Re.viewport(k),Re.scissor(ne),Re.setScissorTest($),we){const We=Ie.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,We.__webglTexture,te)}else if(Ue){const We=Ie.get(C.texture),at=Y||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,te||0,at)}b=-1},this.readRenderTargetPixels=function(C,Y,te,ie,G,we,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){Re.bindFramebuffer(D.FRAMEBUFFER,Ge);try{const We=C.texture,at=We.format,lt=We.type;if(!He.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ie&&te>=0&&te<=C.height-G&&D.readPixels(Y,te,ie,G,ct.convert(at),ct.convert(lt),we)}finally{const We=B!==null?Ie.get(B).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,Y,te,ie,G,we,Ue){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){const We=C.texture,at=We.format,lt=We.type;if(!He.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=C.width-ie&&te>=0&&te<=C.height-G){Re.bindFramebuffer(D.FRAMEBUFFER,Ge);const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,we.byteLength,D.STREAM_READ),D.readPixels(Y,te,ie,G,ct.convert(at),ct.convert(lt),0);const dt=B!==null?Ie.get(B).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,dt);const At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await yx(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,we),D.deleteBuffer(et),D.deleteSync(At),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,Y=null,te=0){C.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-te),G=Math.floor(C.image.width*ie),we=Math.floor(C.image.height*ie),Ue=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;L.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,te,0,0,Ue,Ge,G,we),Re.unbindTexture()};const ua=D.createFramebuffer(),ca=D.createFramebuffer();this.copyTextureToTexture=function(C,Y,te=null,ie=null,G=0,we=null){C.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],Y=arguments[2],we=arguments[3]||0,te=null),we===null&&(G!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=G,G=0):we=0);let Ue,Ge,We,at,lt,et,dt,At,Ct;const zt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(te!==null)Ue=te.max.x-te.min.x,Ge=te.max.y-te.min.y,We=te.isBox3?te.max.z-te.min.z:1,at=te.min.x,lt=te.min.y,et=te.isBox3?te.min.z:0;else{const hn=Math.pow(2,-G);Ue=Math.floor(zt.width*hn),Ge=Math.floor(zt.height*hn),C.isDataArrayTexture?We=zt.depth:C.isData3DTexture?We=Math.floor(zt.depth*hn):We=1,at=0,lt=0,et=0}ie!==null?(dt=ie.x,At=ie.y,Ct=ie.z):(dt=0,At=0,Ct=0);const Et=ct.convert(Y.format),tt=ct.convert(Y.type);let Xt;Y.isData3DTexture?(L.setTexture3D(Y,0),Xt=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(L.setTexture2DArray(Y,0),Xt=D.TEXTURE_2D_ARRAY):(L.setTexture2D(Y,0),Xt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);const Mt=D.getParameter(D.UNPACK_ROW_LENGTH),an=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ei=D.getParameter(D.UNPACK_SKIP_PIXELS),Tn=D.getParameter(D.UNPACK_SKIP_ROWS),Ar=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,at),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,et);const Dt=C.isDataArrayTexture||C.isData3DTexture,wn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const hn=Ie.get(C),Yt=Ie.get(Y),pn=Ie.get(hn.__renderTarget),Cr=Ie.get(Yt.__renderTarget);Re.bindFramebuffer(D.READ_FRAMEBUFFER,pn.__webglFramebuffer),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let yt=0;yt<We;yt++)Dt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(C).__webglTexture,G,et+yt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(Y).__webglTexture,we,Ct+yt)),D.blitFramebuffer(at,lt,Ue,Ge,dt,At,Ue,Ge,D.DEPTH_BUFFER_BIT,D.NEAREST);Re.bindFramebuffer(D.READ_FRAMEBUFFER,null),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||Ie.has(C)){const hn=Ie.get(C),Yt=Ie.get(Y);Re.bindFramebuffer(D.READ_FRAMEBUFFER,ua),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,ca);for(let pn=0;pn<We;pn++)Dt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hn.__webglTexture,G,et+pn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hn.__webglTexture,G),wn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,we,Ct+pn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,we),G!==0?D.blitFramebuffer(at,lt,Ue,Ge,dt,At,Ue,Ge,D.COLOR_BUFFER_BIT,D.NEAREST):wn?D.copyTexSubImage3D(Xt,we,dt,At,Ct+pn,at,lt,Ue,Ge):D.copyTexSubImage2D(Xt,we,dt,At,at,lt,Ue,Ge);Re.bindFramebuffer(D.READ_FRAMEBUFFER,null),Re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else wn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Xt,we,dt,At,Ct,Ue,Ge,We,Et,tt,zt.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,we,dt,At,Ct,Ue,Ge,We,Et,zt.data):D.texSubImage3D(Xt,we,dt,At,Ct,Ue,Ge,We,Et,tt,zt):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,we,dt,At,Ue,Ge,Et,tt,zt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,we,dt,At,zt.width,zt.height,Et,zt.data):D.texSubImage2D(D.TEXTURE_2D,we,dt,At,Ue,Ge,Et,tt,zt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,an),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ei),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ar),we===0&&Y.generateMipmaps&&D.generateMipmap(Xt),Re.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,te=null,ie=null,G=0){return C.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],Y=arguments[3],G=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Y,te,ie,G)},this.initRenderTarget=function(C){Ie.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Re.unbindTexture()},this.resetState=function(){O=0,F=0,B=null,Re.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const nd=2.28,id=4.94,cf={front:{rotation:new Ln(0,0,0),camera:new j(0,.16,10.8)},hero:{rotation:new Ln(-.16,.42,-.06),camera:new j(3.2,1.8,11.8)},isometric:{rotation:new Ln(-.36,.64,-.08),camera:new j(4.5,2.8,12.2)},orbit:{rotation:new Ln(-.12,-.66,.04),camera:new j(-3.6,1.8,11.8)}};function sv(s,e,t){const r=-s/2,o=-e/2,l=new xd;return l.moveTo(r+t,o),l.lineTo(r+s-t,o),l.quadraticCurveTo(r+s,o,r+s,o+t),l.lineTo(r+s,o+e-t),l.quadraticCurveTo(r+s,o+e,r+s-t,o+e),l.lineTo(r+t,o+e),l.quadraticCurveTo(r,o+e,r,o+e-t),l.lineTo(r,o+t),l.quadraticCurveTo(r,o,r+t,o),l}function cg(s,e,t,r){const o=new yd(sv(s,e,r),{depth:t,bevelEnabled:!0,bevelSegments:9,bevelSize:.05,bevelThickness:.035,curveSegments:18});return o.center(),o}function ff(s,e,t){const r=new Sd(sv(s,e,t),24),o=r.attributes.position,l=[];for(let c=0;c<o.count;c+=1){const f=o.getX(c),h=o.getY(c);l.push((f+s/2)/s,(h+e/2)/e)}return r.setAttribute("uv",new Mn(l,2)),r}function ov(){const s=document.createElement("canvas");s.width=900,s.height=1950;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,900,1950);t.addColorStop(0,"#0f172a"),t.addColorStop(.54,"#0e7490"),t.addColorStop(1,"#e2e8f0"),e.fillStyle=t,e.fillRect(0,0,900,1950),e.fillStyle="rgba(255, 255, 255, 0.18)";for(let o=0;o<7;o+=1)e.beginPath(),e.roundRect(90,230+o*210,720,136,34),e.fill();e.fillStyle="#ffffff",e.font="700 72px Inter, system-ui, sans-serif",e.fillText("Mockup",96,150),e.font="500 34px Inter, system-ui, sans-serif",e.fillText("Drop in any screenshot",96,205),e.fillStyle="rgba(255, 255, 255, 0.9)",e.beginPath(),e.roundRect(96,1560,708,180,44),e.fill(),e.fillStyle="#0f172a",e.font="700 42px Inter, system-ui, sans-serif",e.fillText("Ready to render",146,1660);const r=new $x(s);return r.colorSpace=bn,r.anisotropy=8,r}function wT(s,e,t){const r=nd/id,o=e/t;if(s.wrapS=Bi,s.wrapT=Bi,s.offset.set(0,0),s.repeat.set(1,1),o>r){const l=r/o;s.repeat.x=l,s.offset.x=(1-l)/2}else{const l=o/r;s.repeat.y=l,s.offset.y=(1-l)/2}s.colorSpace=bn,s.anisotropy=12,s.needsUpdate=!0}function AT(){const s=new Go,e=new Ho({color:"#11151c",clearcoat:.75,clearcoatRoughness:.32,metalness:.78,roughness:.26}),t=new Ho({color:"#1f2730",metalness:.62,roughness:.28}),r=new Ho({color:"#080b0f",clearcoat:1,clearcoatRoughness:.08,metalness:0,roughness:.12}),o=new Ho({color:"#ffffff",transparent:!0,opacity:.18,clearcoat:1,clearcoatRoughness:.04,metalness:0,roughness:.05}),l=new cn(cg(2.72,5.54,.28,.32),e);l.castShadow=!0,l.receiveShadow=!0,s.add(l);const c=new cn(ff(2.5,5.26,.24),r);c.position.z=.205,c.castShadow=!0,s.add(c);const f=new pd({map:ov()}),h=new cn(ff(nd,id,.19),f);h.position.z=.212,h.castShadow=!1,s.add(h);const p=new cn(ff(nd,id,.19),o);p.position.z=.218,s.add(p);const g=new cn(cg(.72,.28,.04,.12),t);g.position.set(0,2.35,.245),g.castShadow=!0,s.add(g);const v=new Ho({color:"#05070a",clearcoat:1,roughness:.16,metalness:.1});[-.18,.18].forEach(S=>{const M=new cn(new _d(.07,.07,.018,40),v);M.rotation.x=Math.PI/2,M.position.set(S,2.35,.275),s.add(M)});const x=t.clone();return[[-1.42,1.24,.23],[-1.42,.8,.23],[1.42,.94,.3]].forEach(([S,M,w])=>{const y=new cn(new to(.035,w,.055),x);y.position.set(S,M,.01),y.castShadow=!0,s.add(y)}),{group:s,materials:{body:e,edge:t,glass:o,screen:f}}}const CT=bt.forwardRef(function({screenImage:e,settings:t,onDragStart:r,onDragEnd:o},l){const c=bt.useRef(null),f=bt.useRef(null),h=bt.useRef(null),p=bt.useRef(null),g=bt.useRef(null),v=bt.useRef(null),x=bt.useRef(null),S=bt.useRef(null),M=bt.useRef(new Ln),w=bt.useRef(new j),y=bt.useRef(t),_=bt.useRef({active:!1,x:0,y:0});return bt.useImperativeHandle(l,()=>({exportPng(){return!f.current||!h.current||!p.current?null:(f.current.render(h.current,p.current),f.current.domElement.toDataURL("image/png"))},resetView(){const N=cf[y.current.angle];M.current.copy(N.rotation),w.current.copy(N.camera)}})),bt.useEffect(()=>{y.current=t},[t]),bt.useEffect(()=>{const N=c.current,P=new TT({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),R=new jx,V=new jn(34,1,.1,100),{group:O,materials:F}=AT(),B=new Oy("#ffffff","#a8b8c6",1.8),b=new km("#ffffff",4.6),A=new km("#bdefff",2.2),k=new zy("#ffffff",1.2,12),ne=new Py({color:"#1f2937",opacity:.18}),$=new cn(new ra(14,14),ne);P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.outputColorSpace=bn,P.toneMapping=yg,P.toneMappingExposure=1.08,P.shadowMap.enabled=!0,P.shadowMap.type=_g,P.domElement.className="render-canvas",P.domElement.setAttribute("aria-label","3D device render"),N.appendChild(P.domElement),b.position.set(3.8,4.8,4.8),b.castShadow=!0,b.shadow.mapSize.set(2048,2048),A.position.set(-4.2,2.6,3.4),k.position.set(0,2.2,4.5),$.rotation.x=-Math.PI/2,$.position.y=-2.74,$.receiveShadow=!0,O.position.y=.02,O.scale.setScalar(.9),R.add(B,b,A,k,O,$);const se=cf[t.angle];O.rotation.copy(se.rotation),V.position.copy(se.camera),M.current.copy(se.rotation),w.current.copy(se.camera),V.lookAt(0,0,0),f.current=P,h.current=R,p.current=V,g.current=O,v.current=F,x.current={ambient:B,key:b,rim:A,fill:k},S.current=$;const ce=()=>{const q=N.clientWidth,De=N.clientHeight;P.setSize(q,De,!1),V.aspect=q/De,V.updateProjectionMatrix()},re=new ResizeObserver(ce);re.observe(N),ce();const ue=q=>{_.current={active:!0,x:q.clientX,y:q.clientY},P.domElement.setPointerCapture(q.pointerId),r==null||r()},H=q=>{if(!_.current.active)return;const De=q.clientX-_.current.x,K=q.clientY-_.current.y;_.current.x=q.clientX,_.current.y=q.clientY,M.current.y+=De*.009,M.current.x=_x.clamp(M.current.x+K*.006,-.82,.52)},le=q=>{_.current.active=!1,P.domElement.releasePointerCapture(q.pointerId),o==null||o()};P.domElement.addEventListener("pointerdown",ue),P.domElement.addEventListener("pointermove",H),P.domElement.addEventListener("pointerup",le),P.domElement.addEventListener("pointercancel",le),P.domElement.style.touchAction="none";let oe=0;const I=()=>{y.current.autoSpin&&!_.current.active&&(M.current.y+=.006),O.rotation.x+=(M.current.x-O.rotation.x)*.08,O.rotation.y+=(M.current.y-O.rotation.y)*.08,O.rotation.z+=(M.current.z-O.rotation.z)*.08,V.position.lerp(w.current,.045),V.lookAt(0,0,0),P.render(R,V),oe=window.requestAnimationFrame(I)};return I(),()=>{window.cancelAnimationFrame(oe),re.disconnect(),P.domElement.removeEventListener("pointerdown",ue),P.domElement.removeEventListener("pointermove",H),P.domElement.removeEventListener("pointerup",le),P.domElement.removeEventListener("pointercancel",le),N.removeChild(P.domElement),P.dispose(),R.traverse(q=>{q.geometry&&q.geometry.dispose(),q.material&&(Array.isArray(q.material)?q.material:[q.material]).forEach(K=>{K.map&&K.map.dispose(),K.dispose()})})}},[o,r,t.angle]),bt.useEffect(()=>{const N=cf[t.angle];M.current.copy(N.rotation);const P=(t.depth-50)/100;w.current.copy(N.camera).multiplyScalar(1-P*.08)},[t.angle,t.depth]),bt.useEffect(()=>{const N=v.current,P=x.current,R=h.current,V=f.current,O=S.current;if(!N||!P||!R||!V||!O)return;const F=gg.find(A=>A.id===t.material),B=df.find(A=>A.id===t.background)??df[0];N.body.color.set(F.body),N.body.metalness=F.metalness,N.body.roughness=F.roughness,N.edge.color.set(F.edge),N.glass.opacity=.1+t.reflection/420,N.glass.clearcoatRoughness=Math.max(.02,.18-t.reflection/700),P.key.intensity=1.5+t.lighting/18,P.rim.intensity=.4+t.reflection/34,P.fill.intensity=.55+t.lighting/110,O.material.opacity=.06+t.shadow/320,O.material.needsUpdate=!0;const b=new St(B.clear);R.background=b,V.setClearColor(b,1)},[t.background,t.lighting,t.material,t.reflection,t.shadow]),bt.useEffect(()=>{var O;const N=(O=v.current)==null?void 0:O.screen;if(!N)return;let P=!1;const R=(F,B,b)=>{if(P){F.dispose();return}wT(F,B,b),N.map&&N.map.dispose(),N.map=F,N.needsUpdate=!0};return e?(new Fy().load(e,F=>{const B=F.image;R(F,B.naturalWidth||B.width,B.naturalHeight||B.height)}),()=>{P=!0}):(R(ov(),900,1950),()=>{P=!0})},[e]),ye.jsx("div",{className:"viewport-host",ref:c})});function RT({screenLabel:s,onUpload:e,onExport:t,onReset:r,fileInputRef:o}){return ye.jsxs("header",{className:"topbar",children:[ye.jsxs("div",{className:"brand",children:[ye.jsx("div",{className:"brand-mark","aria-hidden":"true",children:ye.jsx(e_,{size:18,strokeWidth:2.2})}),ye.jsxs("div",{children:[ye.jsx("strong",{children:"Device Render Studio"}),ye.jsx("span",{children:s})]})]}),ye.jsxs("div",{className:"toolbar-center","aria-label":"Scene tools",children:[ye.jsxs("button",{className:"icon-button",type:"button",onClick:r,children:[ye.jsx(c_,{size:17}),ye.jsx("span",{children:"Reset"})]}),ye.jsx("div",{className:"toolbar-divider"}),ye.jsxs("span",{className:"status-pill",children:[ye.jsx(h_,{size:15}),"Ready"]}),ye.jsxs("span",{className:"status-pill subtle",children:[ye.jsx(l_,{size:15}),"Scene"]})]}),ye.jsxs("div",{className:"toolbar-actions",children:[ye.jsx("input",{ref:o,className:"visually-hidden",type:"file",accept:"image/png,image/jpeg,image/webp",onChange:e}),ye.jsxs("button",{className:"button secondary",type:"button",onClick:()=>{var l;return(l=o.current)==null?void 0:l.click()},children:[ye.jsx(i_,{size:17}),"Import"]}),ye.jsxs("button",{className:"button primary",type:"button",onClick:t,children:[ye.jsx(pg,{size:17}),"Export PNG"]})]})]})}function PT({activeAngle:s,onPreset:e}){return ye.jsxs("div",{className:"preset-rail","aria-label":"Angle presets",children:[ye.jsxs("div",{className:"rail-status",children:[ye.jsx("span",{className:"ready-dot"}),ye.jsxs("div",{children:[ye.jsx("strong",{children:"Ready"}),ye.jsx("span",{children:"Realtime preview"})]})]}),ye.jsx("div",{className:"preset-list",children:mg.map(t=>ye.jsxs("button",{type:"button",className:t.id===s?"preset-tile selected":"preset-tile",onClick:()=>e(t.id),children:[ye.jsx("span",{className:"preset-glyph",children:ye.jsx(hg,{size:16})}),ye.jsx("span",{children:t.label})]},t.id))}),ye.jsxs("div",{className:"rail-meta",children:[ye.jsxs("span",{children:[ye.jsx(r_,{size:15}),"1920 x 1080"]}),ye.jsxs("span",{children:[ye.jsx(pg,{size:15}),"PNG"]})]})]})}function bT(){const[s,e]=bt.useState(null),[t,r]=bt.useState("Demo screen"),[o,l]=bt.useState(nm),[c,f]=bt.useState(!1),h=bt.useRef(null),p=bt.useRef(null),g=(M,w)=>{l(y=>({...y,[M]:w}))},v=M=>{var _;const w=(_=M.target.files)==null?void 0:_[0];if(!w)return;const y=new FileReader;y.onload=()=>{e(y.result),r(w.name)},y.readAsDataURL(w)},x=()=>{var y;const M=(y=p.current)==null?void 0:y.exportPng();if(!M)return;const w=document.createElement("a");w.href=M,w.download="device-render-studio.png",document.body.appendChild(w),w.click(),w.remove()},S=()=>{var M;l(nm),(M=p.current)==null||M.resetView()};return ye.jsxs("main",{className:"app",children:[ye.jsx(RT,{screenLabel:t,onUpload:v,onExport:x,onReset:S,fileInputRef:h}),ye.jsxs("div",{className:"workspace",children:[ye.jsxs("section",{className:"stage-area","aria-label":"3D render workspace",children:[ye.jsxs("div",{className:"viewport-shell",children:[ye.jsx(CT,{ref:p,screenImage:s,settings:o,onDragStart:()=>f(!0),onDragEnd:()=>f(!1)}),ye.jsxs("div",{className:"canvas-hud top-left",children:[ye.jsx(t_,{size:15}),ye.jsx("span",{children:"Scene"})]}),ye.jsxs("div",{className:c?"canvas-hud bottom-left active":"canvas-hud bottom-left",children:[ye.jsx(o_,{size:15}),ye.jsx("span",{children:c?"Orbiting":"Drag to orbit"})]})]}),ye.jsx(PT,{activeAngle:o.angle,onPreset:M=>g("angle",M)})]}),ye.jsx(g_,{settings:o,onSettingChange:g})]})]})}const LT=q0.createRoot(document.getElementById("root"));$0.flushSync(()=>{LT.render(ye.jsx(G0.StrictMode,{children:ye.jsx(bT,{})}))});
