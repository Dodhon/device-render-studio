(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Nx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gf={exports:{}},la={},vf={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Ix(){if(ig)return Mt;ig=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(B,ie,Oe){this.props=B,this.context=ie,this.refs=E,this.updater=Oe||x}S.prototype.isReactComponent={},S.prototype.setState=function(B,ie){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ie,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(B,ie,Oe){this.props=B,this.context=ie,this.refs=E,this.updater=Oe||x}var P=N.prototype=new y;P.constructor=N,M(P,S.prototype),P.isPureReactComponent=!0;var w=Array.isArray,z=Object.prototype.hasOwnProperty,O={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function F(B,ie,Oe){var Q,he={},Se=null,ge=null;if(ie!=null)for(Q in ie.ref!==void 0&&(ge=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)z.call(ie,Q)&&!I.hasOwnProperty(Q)&&(he[Q]=ie[Q]);var Pe=arguments.length-2;if(Pe===1)he.children=Oe;else if(1<Pe){for(var Ce=Array(Pe),Ge=0;Ge<Pe;Ge++)Ce[Ge]=arguments[Ge+2];he.children=Ce}if(B&&B.defaultProps)for(Q in Pe=B.defaultProps,Pe)he[Q]===void 0&&(he[Q]=Pe[Q]);return{$$typeof:o,type:B,key:Se,ref:ge,props:he,_owner:O.current}}function C(B,ie){return{$$typeof:o,type:B.type,key:ie,ref:B.ref,props:B.props,_owner:B._owner}}function R(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function k(B){var ie={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Oe){return ie[Oe]})}var ee=/\/+/g;function K(B,ie){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):ie.toString(36)}function ne(B,ie,Oe,Q,he){var Se=typeof B;(Se==="undefined"||Se==="boolean")&&(B=null);var ge=!1;if(B===null)ge=!0;else switch(Se){case"string":case"number":ge=!0;break;case"object":switch(B.$$typeof){case o:case e:ge=!0}}if(ge)return ge=B,he=he(ge),B=Q===""?"."+K(ge,0):Q,w(he)?(Oe="",B!=null&&(Oe=B.replace(ee,"$&/")+"/"),ne(he,ie,Oe,"",function(Ge){return Ge})):he!=null&&(R(he)&&(he=C(he,Oe+(!he.key||ge&&ge.key===he.key?"":(""+he.key).replace(ee,"$&/")+"/")+B)),ie.push(he)),1;if(ge=0,Q=Q===""?".":Q+":",w(B))for(var Pe=0;Pe<B.length;Pe++){Se=B[Pe];var Ce=Q+K(Se,Pe);ge+=ne(Se,ie,Oe,Ce,he)}else if(Ce=v(B),typeof Ce=="function")for(B=Ce.call(B),Pe=0;!(Se=B.next()).done;)Se=Se.value,Ce=Q+K(Se,Pe++),ge+=ne(Se,ie,Oe,Ce,he);else if(Se==="object")throw ie=String(B),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ge}function le(B,ie,Oe){if(B==null)return B;var Q=[],he=0;return ne(B,Q,"","",function(Se){return ie.call(Oe,Se,he++)}),Q}function te(B){if(B._status===-1){var ie=B._result;ie=ie(),ie.then(function(Oe){(B._status===0||B._status===-1)&&(B._status=1,B._result=Oe)},function(Oe){(B._status===0||B._status===-1)&&(B._status=2,B._result=Oe)}),B._status===-1&&(B._status=0,B._result=ie)}if(B._status===1)return B._result.default;throw B._result}var ce={current:null},H={transition:null},fe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:le,forEach:function(B,ie,Oe){le(B,function(){ie.apply(this,arguments)},Oe)},count:function(B){var ie=0;return le(B,function(){ie++}),ie},toArray:function(B){return le(B,function(ie){return ie})||[]},only:function(B){if(!R(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Mt.Component=S,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=N,Mt.StrictMode=i,Mt.Suspense=f,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Mt.act=ae,Mt.cloneElement=function(B,ie,Oe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Q=M({},B.props),he=B.key,Se=B.ref,ge=B._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,ge=O.current),ie.key!==void 0&&(he=""+ie.key),B.type&&B.type.defaultProps)var Pe=B.type.defaultProps;for(Ce in ie)z.call(ie,Ce)&&!I.hasOwnProperty(Ce)&&(Q[Ce]=ie[Ce]===void 0&&Pe!==void 0?Pe[Ce]:ie[Ce])}var Ce=arguments.length-2;if(Ce===1)Q.children=Oe;else if(1<Ce){Pe=Array(Ce);for(var Ge=0;Ge<Ce;Ge++)Pe[Ge]=arguments[Ge+2];Q.children=Pe}return{$$typeof:o,type:B.type,key:he,ref:Se,props:Q,_owner:ge}},Mt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},Mt.createElement=F,Mt.createFactory=function(B){var ie=F.bind(null,B);return ie.type=B,ie},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(B){return{$$typeof:u,render:B}},Mt.isValidElement=R,Mt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:te}},Mt.memo=function(B,ie){return{$$typeof:d,type:B,compare:ie===void 0?null:ie}},Mt.startTransition=function(B){var ie=H.transition;H.transition={};try{B()}finally{H.transition=ie}},Mt.unstable_act=ae,Mt.useCallback=function(B,ie){return ce.current.useCallback(B,ie)},Mt.useContext=function(B){return ce.current.useContext(B)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(B){return ce.current.useDeferredValue(B)},Mt.useEffect=function(B,ie){return ce.current.useEffect(B,ie)},Mt.useId=function(){return ce.current.useId()},Mt.useImperativeHandle=function(B,ie,Oe){return ce.current.useImperativeHandle(B,ie,Oe)},Mt.useInsertionEffect=function(B,ie){return ce.current.useInsertionEffect(B,ie)},Mt.useLayoutEffect=function(B,ie){return ce.current.useLayoutEffect(B,ie)},Mt.useMemo=function(B,ie){return ce.current.useMemo(B,ie)},Mt.useReducer=function(B,ie,Oe){return ce.current.useReducer(B,ie,Oe)},Mt.useRef=function(B){return ce.current.useRef(B)},Mt.useState=function(B){return ce.current.useState(B)},Mt.useSyncExternalStore=function(B,ie,Oe){return ce.current.useSyncExternalStore(B,ie,Oe)},Mt.useTransition=function(){return ce.current.useTransition()},Mt.version="18.3.1",Mt}var rg;function sd(){return rg||(rg=1,vf.exports=Ix()),vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function Dx(){if(sg)return la;sg=1;var o=sd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,d){var p,g={},v=null,x=null;d!==void 0&&(v=""+d),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(g[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:u,key:v,ref:x,props:g,_owner:s.current}}return la.Fragment=t,la.jsx=c,la.jsxs=c,la}var og;function Ux(){return og||(og=1,gf.exports=Dx()),gf.exports}var W=Ux(),xt=sd();const Fx=Nx(xt);var Gl={},_f={exports:{}},qn={},xf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Ox(){return ag||(ag=1,(function(o){function e(H,fe){var ae=H.length;H.push(fe);e:for(;0<ae;){var B=ae-1>>>1,ie=H[B];if(0<s(ie,fe))H[B]=fe,H[ae]=ie,ae=B;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var fe=H[0],ae=H.pop();if(ae!==fe){H[0]=ae;e:for(var B=0,ie=H.length,Oe=ie>>>1;B<Oe;){var Q=2*(B+1)-1,he=H[Q],Se=Q+1,ge=H[Se];if(0>s(he,ae))Se<ie&&0>s(ge,he)?(H[B]=ge,H[Se]=ae,B=Se):(H[B]=he,H[Q]=ae,B=Q);else if(Se<ie&&0>s(ge,ae))H[B]=ge,H[Se]=ae,B=Se;else break e}}return fe}function s(H,fe){var ae=H.sortIndex-fe.sortIndex;return ae!==0?ae:H.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],d=[],p=1,g=null,v=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var fe=t(d);fe!==null;){if(fe.callback===null)i(d);else if(fe.startTime<=H)i(d),fe.sortIndex=fe.expirationTime,e(f,fe);else break;fe=t(d)}}function w(H){if(E=!1,P(H),!M)if(t(f)!==null)M=!0,te(z);else{var fe=t(d);fe!==null&&ce(w,fe.startTime-H)}}function z(H,fe){M=!1,E&&(E=!1,y(F),F=-1),x=!0;var ae=v;try{for(P(fe),g=t(f);g!==null&&(!(g.expirationTime>fe)||H&&!k());){var B=g.callback;if(typeof B=="function"){g.callback=null,v=g.priorityLevel;var ie=B(g.expirationTime<=fe);fe=o.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(f)&&i(f),P(fe)}else i(f);g=t(f)}if(g!==null)var Oe=!0;else{var Q=t(d);Q!==null&&ce(w,Q.startTime-fe),Oe=!1}return Oe}finally{g=null,v=ae,x=!1}}var O=!1,I=null,F=-1,C=5,R=-1;function k(){return!(o.unstable_now()-R<C)}function ee(){if(I!==null){var H=o.unstable_now();R=H;var fe=!0;try{fe=I(!0,H)}finally{fe?K():(O=!1,I=null)}}else O=!1}var K;if(typeof N=="function")K=function(){N(ee)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,le=ne.port2;ne.port1.onmessage=ee,K=function(){le.postMessage(null)}}else K=function(){S(ee,0)};function te(H){I=H,O||(O=!0,K())}function ce(H,fe){F=S(function(){H(o.unstable_now())},fe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,te(z))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(H){switch(v){case 1:case 2:case 3:var fe=3;break;default:fe=v}var ae=v;v=fe;try{return H()}finally{v=ae}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,fe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=v;v=H;try{return fe()}finally{v=ae}},o.unstable_scheduleCallback=function(H,fe,ae){var B=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?B+ae:B):ae=B,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ae+ie,H={id:p++,callback:fe,priorityLevel:H,startTime:ae,expirationTime:ie,sortIndex:-1},ae>B?(H.sortIndex=ae,e(d,H),t(f)===null&&H===t(d)&&(E?(y(F),F=-1):E=!0,ce(w,ae-B))):(H.sortIndex=ie,e(f,H),M||x||(M=!0,te(z))),H},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(H){var fe=v;return function(){var ae=v;v=fe;try{return H.apply(this,arguments)}finally{v=ae}}}})(yf)),yf}var lg;function kx(){return lg||(lg=1,xf.exports=Ox()),xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Bx(){if(cg)return qn;cg=1;var o=sd(),e=kx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(n){return f.call(g,n)?!0:f.call(p,n)?!1:d.test(n)?g[n]=!0:(p[n]=!0,!1)}function x(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,h){if(r===null||typeof r>"u"||x(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,h,m,_,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,N);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,N);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,N);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,h){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,m,h)&&(l=null),h||m===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,h=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,B;function ie(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Oe=!1;function Q(n,r){if(!n||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var h=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){h=re}n.call(r.prototype)}else{try{throw Error()}catch(re){h=re}n()}}catch(re){if(re&&h&&typeof re.stack=="string"){for(var m=re.stack.split(`
`),_=h.stack.split(`
`),T=m.length-1,U=_.length-1;1<=T&&0<=U&&m[T]!==_[U];)U--;for(;1<=T&&0<=U;T--,U--)if(m[T]!==_[U]){if(T!==1||U!==1)do if(T--,U--,0>U||m[T]!==_[U]){var V=`
`+m[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ie(n):""}function he(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case O:return"Portal";case C:return"Profiler";case F:return"StrictMode";case K:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return r=n.displayName||null,r!==null?r:Se(n.type)||"Memo";case te:r=n._payload,n=n._init;try{return Se(n(r))}catch{}}return null}function ge(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ge(n){var r=Ce(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){h=""+T,_.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function vt(n){n._valueTracker||(n._valueTracker=Ge(n))}function ve(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=Ce(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function Ae(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function D(n,r){var l=r.checked;return ae({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Je(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Pe(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ee(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function He(n,r){Ee(n,r);var l=Pe(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?nt(n,r.type,l):r.hasOwnProperty("defaultValue")&&nt(n,r.type,Pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function be(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function nt(n,r,l){(r!=="number"||Ae(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ue=Array.isArray;function L(n,r,l,h){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Pe(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,h&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ue(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Pe(l)}}function de(n,r){var l=Pe(r.value),h=Pe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function _e(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function pt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){qe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Te[r]=Te[n]})});function it(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Te.hasOwnProperty(n)&&Te[n]?(""+r).trim():r+"px"}function ot(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=it(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,m):n[l]=m}}var Ye=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function St(n,r){if(r){if(Ye[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ft(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ie=null,ue=null,me=null;function Be(n){if(n=qo(n)){if(typeof Ie!="function")throw Error(t(280));var r=n.stateNode;r&&(r=rl(r),Ie(n.stateNode,n.type,r))}}function ke(n){ue?me?me.push(n):me=[n]:ue=n}function ht(){if(ue){var n=ue,r=me;if(me=ue=null,Be(n),r)for(n=0;n<r.length;n++)Be(r[n])}}function Ht(n,r){return n(r)}function an(){}var Ct=!1;function Hn(n,r,l){if(Ct)return n(r,l);Ct=!0;try{return Ht(n,r,l)}finally{Ct=!1,(ue!==null||me!==null)&&(an(),ht())}}function bn(n,r){var l=n.stateNode;if(l===null)return null;var h=rl(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ss=!1;if(u)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Ss=!1}function ki(n,r,l,h,m,_,T,U,V){var re=Array.prototype.slice.call(arguments,3);try{r.apply(l,re)}catch(ye){this.onError(ye)}}var Bi=!1,Xr=null,jr=!1,cr=null,Oa={onError:function(n){Bi=!0,Xr=n}};function Ms(n,r,l,h,m,_,T,U,V){Bi=!1,Xr=null,ki.apply(Oa,arguments)}function ka(n,r,l,h,m,_,T,U,V){if(Ms.apply(this,arguments),Bi){if(Bi){var re=Xr;Bi=!1,Xr=null}else throw Error(t(198));jr||(jr=!0,cr=re)}}function Ci(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ba(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function za(n){if(Ci(n)!==n)throw Error(t(188))}function kc(n){var r=n.alternate;if(!r){if(r=Ci(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return za(m),n;if(_===h)return za(m),r;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=m,h=_;else{for(var T=!1,U=m.child;U;){if(U===l){T=!0,l=m,h=_;break}if(U===h){T=!0,h=m,l=_;break}U=U.sibling}if(!T){for(U=_.child;U;){if(U===l){T=!0,l=_,h=m;break}if(U===h){T=!0,h=_,l=m;break}U=U.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ha(n){return n=kc(n),n!==null?Va(n):null}function Va(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Va(n);if(r!==null)return r;n=n.sibling}return null}var b=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,se=e.unstable_shouldYield,oe=e.unstable_requestPaint,X=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,De=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,Xe=e.unstable_NormalPriority,at=e.unstable_LowPriority,lt=e.unstable_IdlePriority,et=null,dt=null;function Pt(n){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:tt,Wt=Math.log,At=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(Wt(n)/At|0)|0}var $t=64,wt=4194304;function gn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function pi(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,m=n.suspendedLanes,_=n.pingedLanes,T=l&268435455;if(T!==0){var U=T&~m;U!==0?h=gn(U):(_&=T,_!==0&&(h=gn(_)))}else T=l&~m,T!==0?h=gn(T):_!==0&&(h=gn(_));if(h===0)return 0;if(r!==0&&r!==h&&(r&m)===0&&(m=h&-h,_=r&-r,m>=_||m===16&&(_&4194240)!==0))return r;if((h&4)!==0&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-Lt(r),m=1<<l,h|=n[l],r&=~m;return h}function Pn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,m=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-Lt(_),U=1<<T,V=m[T];V===-1?((U&l)===0||(U&h)!==0)&&(m[T]=Pn(U,r)):V<=r&&(n.expiredLanes|=U),_&=~U}}function Ot(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ln(){var n=$t;return $t<<=1,($t&4194240)===0&&($t=64),n}function yn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function en(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Lt(r),n[r]=l}function Sn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Lt(l),_=1<<m;r[m]=0,h[m]=-1,n[m]=-1,l&=~_}}function Yr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-Lt(l),m=1<<h;m&r|n[h]&r&&(n[h]|=r),l&=~m}}var Et=0;function Ud(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Fd,Bc,Od,kd,Bd,zc=!1,Ga=[],ur=null,fr=null,hr=null,Lo=new Map,No=new Map,dr=[],e_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(n,r){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Lo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(r.pointerId)}}function Io(n,r,l,h,m,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[m]},r!==null&&(r=qo(r),r!==null&&Bc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function t_(n,r,l,h,m){switch(r){case"focusin":return ur=Io(ur,n,r,l,h,m),!0;case"dragenter":return fr=Io(fr,n,r,l,h,m),!0;case"mouseover":return hr=Io(hr,n,r,l,h,m),!0;case"pointerover":var _=m.pointerId;return Lo.set(_,Io(Lo.get(_)||null,n,r,l,h,m)),!0;case"gotpointercapture":return _=m.pointerId,No.set(_,Io(No.get(_)||null,n,r,l,h,m)),!0}return!1}function Hd(n){var r=Kr(n.target);if(r!==null){var l=Ci(r);if(l!==null){if(r=l.tag,r===13){if(r=Ba(l),r!==null){n.blockedOn=r,Bd(n.priority,function(){Od(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Vc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Dt=h,l.target.dispatchEvent(h),Dt=null}else return r=qo(l),r!==null&&Bc(r),n.blockedOn=l,!1;r.shift()}return!0}function Vd(n,r,l){Wa(n)&&l.delete(r)}function n_(){zc=!1,ur!==null&&Wa(ur)&&(ur=null),fr!==null&&Wa(fr)&&(fr=null),hr!==null&&Wa(hr)&&(hr=null),Lo.forEach(Vd),No.forEach(Vd)}function Do(n,r){n.blockedOn===r&&(n.blockedOn=null,zc||(zc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,n_)))}function Uo(n){function r(m){return Do(m,n)}if(0<Ga.length){Do(Ga[0],n);for(var l=1;l<Ga.length;l++){var h=Ga[l];h.blockedOn===n&&(h.blockedOn=null)}}for(ur!==null&&Do(ur,n),fr!==null&&Do(fr,n),hr!==null&&Do(hr,n),Lo.forEach(r),No.forEach(r),l=0;l<dr.length;l++)h=dr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)Hd(l),l.blockedOn===null&&dr.shift()}var Es=w.ReactCurrentBatchConfig,Xa=!0;function i_(n,r,l,h){var m=Et,_=Es.transition;Es.transition=null;try{Et=1,Hc(n,r,l,h)}finally{Et=m,Es.transition=_}}function r_(n,r,l,h){var m=Et,_=Es.transition;Es.transition=null;try{Et=4,Hc(n,r,l,h)}finally{Et=m,Es.transition=_}}function Hc(n,r,l,h){if(Xa){var m=Vc(n,r,l,h);if(m===null)su(n,r,h,ja,l),zd(n,h);else if(t_(m,n,r,l,h))h.stopPropagation();else if(zd(n,h),r&4&&-1<e_.indexOf(n)){for(;m!==null;){var _=qo(m);if(_!==null&&Fd(_),_=Vc(n,r,l,h),_===null&&su(n,r,h,ja,l),_===m)break;m=_}m!==null&&h.stopPropagation()}else su(n,r,h,null,l)}}var ja=null;function Vc(n,r,l,h){if(ja=null,n=q(h),n=Kr(n),n!==null)if(r=Ci(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ba(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ja=n,null}function Gd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case De:return 1;case We:return 4;case Xe:case at:return 16;case lt:return 536870912;default:return 16}default:return 16}}var pr=null,Gc=null,qa=null;function Wd(){if(qa)return qa;var n,r=Gc,l=r.length,h,m="value"in pr?pr.value:pr.textContent,_=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(h=1;h<=T&&r[l-h]===m[_-h];h++);return qa=m.slice(n,1<h?1-h:void 0)}function Ya(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ka(){return!0}function Xd(){return!1}function $n(n){function r(l,h,m,_,T){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ka:Xd,this.isPropagationStopped=Xd,this}return ae(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),r}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=$n(Ts),Fo=ae({},Ts,{view:0,detail:0}),s_=$n(Fo),Xc,jc,Oo,$a=ae({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(Xc=n.screenX-Oo.screenX,jc=n.screenY-Oo.screenY):jc=Xc=0,Oo=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:jc}}),jd=$n($a),o_=ae({},$a,{dataTransfer:0}),a_=$n(o_),l_=ae({},Fo,{relatedTarget:0}),qc=$n(l_),c_=ae({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=$n(c_),f_=ae({},Ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),h_=$n(f_),d_=ae({},Ts,{data:0}),qd=$n(d_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=g_[n])?!!r[n]:!1}function Yc(){return v_}var __=ae({},Fo,{key:function(n){if(n.key){var r=p_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ya(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?m_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(n){return n.type==="keypress"?Ya(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ya(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),x_=$n(__),y_=ae({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yd=$n(y_),S_=ae({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),M_=$n(S_),E_=ae({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=$n(E_),w_=ae({},$a,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),A_=$n(w_),R_=[9,13,27,32],Kc=u&&"CompositionEvent"in window,ko=null;u&&"documentMode"in document&&(ko=document.documentMode);var C_=u&&"TextEvent"in window&&!ko,Kd=u&&(!Kc||ko&&8<ko&&11>=ko),$d=" ",Zd=!1;function Jd(n,r){switch(n){case"keyup":return R_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function b_(n,r){switch(n){case"compositionend":return Qd(r);case"keypress":return r.which!==32?null:(Zd=!0,$d);case"textInput":return n=r.data,n===$d&&Zd?null:n;default:return null}}function P_(n,r){if(ws)return n==="compositionend"||!Kc&&Jd(n,r)?(n=Wd(),qa=Gc=pr=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Kd&&r.locale!=="ko"?null:r.data;default:return null}}var L_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!L_[n.type]:r==="textarea"}function tp(n,r,l,h){ke(h),r=tl(r,"onChange"),0<r.length&&(l=new Wc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Bo=null,zo=null;function N_(n){xp(n,0)}function Za(n){var r=Ps(n);if(ve(r))return n}function I_(n,r){if(n==="change")return r}var np=!1;if(u){var $c;if(u){var Zc="oninput"in document;if(!Zc){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),Zc=typeof ip.oninput=="function"}$c=Zc}else $c=!1;np=$c&&(!document.documentMode||9<document.documentMode)}function rp(){Bo&&(Bo.detachEvent("onpropertychange",sp),zo=Bo=null)}function sp(n){if(n.propertyName==="value"&&Za(zo)){var r=[];tp(r,zo,n,q(n)),Hn(N_,r)}}function D_(n,r,l){n==="focusin"?(rp(),Bo=r,zo=l,Bo.attachEvent("onpropertychange",sp)):n==="focusout"&&rp()}function U_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Za(zo)}function F_(n,r){if(n==="click")return Za(r)}function O_(n,r){if(n==="input"||n==="change")return Za(r)}function k_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mi=typeof Object.is=="function"?Object.is:k_;function Ho(n,r){if(mi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!f.call(r,m)||!mi(n[m],r[m]))return!1}return!0}function op(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ap(n,r){var l=op(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=op(l)}}function lp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?lp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function cp(){for(var n=window,r=Ae();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ae(n.document)}return r}function Jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function B_(n){var r=cp(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&lp(l.ownerDocument.documentElement,l)){if(h!==null&&Jc(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,_=Math.min(h.start,m);h=h.end===void 0?_:Math.min(h.end,m),!n.extend&&_>h&&(m=h,h=_,_=m),m=ap(l,_);var T=ap(l,h);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),_>h?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var z_=u&&"documentMode"in document&&11>=document.documentMode,As=null,Qc=null,Vo=null,eu=!1;function up(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;eu||As==null||As!==Ae(h)||(h=As,"selectionStart"in h&&Jc(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Vo&&Ho(Vo,h)||(Vo=h,h=tl(Qc,"onSelect"),0<h.length&&(r=new Wc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=As)))}function Ja(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Rs={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},tu={},fp={};u&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Qa(n){if(tu[n])return tu[n];if(!Rs[n])return n;var r=Rs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in fp)return tu[n]=r[l];return n}var hp=Qa("animationend"),dp=Qa("animationiteration"),pp=Qa("animationstart"),mp=Qa("transitionend"),gp=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,r){gp.set(n,r),a(r,[n])}for(var nu=0;nu<vp.length;nu++){var iu=vp[nu],H_=iu.toLowerCase(),V_=iu[0].toUpperCase()+iu.slice(1);mr(H_,"on"+V_)}mr(hp,"onAnimationEnd"),mr(dp,"onAnimationIteration"),mr(pp,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(mp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function _p(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,ka(h,r,void 0,n),n.currentTarget=null}function xp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],m=h.event;h=h.listeners;e:{var _=void 0;if(r)for(var T=h.length-1;0<=T;T--){var U=h[T],V=U.instance,re=U.currentTarget;if(U=U.listener,V!==_&&m.isPropagationStopped())break e;_p(m,U,re),_=V}else for(T=0;T<h.length;T++){if(U=h[T],V=U.instance,re=U.currentTarget,U=U.listener,V!==_&&m.isPropagationStopped())break e;_p(m,U,re),_=V}}}if(jr)throw n=cr,jr=!1,cr=null,n}function Vt(n,r){var l=r[fu];l===void 0&&(l=r[fu]=new Set);var h=n+"__bubble";l.has(h)||(yp(r,n,2,!1),l.add(h))}function ru(n,r,l){var h=0;r&&(h|=4),yp(l,n,h,r)}var el="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[el]){n[el]=!0,i.forEach(function(l){l!=="selectionchange"&&(G_.has(l)||ru(l,!1,n),ru(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[el]||(r[el]=!0,ru("selectionchange",!1,r))}}function yp(n,r,l,h){switch(Gd(r)){case 1:var m=i_;break;case 4:m=r_;break;default:m=Hc}l=m.bind(null,r,l,n),m=void 0,!Ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),h?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function su(n,r,l,h,m){var _=h;if((r&1)===0&&(r&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var U=h.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(T===4)for(T=h.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;T=T.return}for(;U!==null;){if(T=Kr(U),T===null)return;if(V=T.tag,V===5||V===6){h=_=T;continue e}U=U.parentNode}}h=h.return}Hn(function(){var re=_,ye=q(l),Me=[];e:{var xe=gp.get(n);if(xe!==void 0){var ze=Wc,Ke=n;switch(n){case"keypress":if(Ya(l)===0)break e;case"keydown":case"keyup":ze=x_;break;case"focusin":Ke="focus",ze=qc;break;case"focusout":Ke="blur",ze=qc;break;case"beforeblur":case"afterblur":ze=qc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=a_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=M_;break;case hp:case dp:case pp:ze=u_;break;case mp:ze=T_;break;case"scroll":ze=s_;break;case"wheel":ze=A_;break;case"copy":case"cut":case"paste":ze=h_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Yd}var Ze=(r&4)!==0,tn=!Ze&&n==="scroll",$=Ze?xe!==null?xe+"Capture":null:xe;Ze=[];for(var j=re,J;j!==null;){J=j;var Re=J.stateNode;if(J.tag===5&&Re!==null&&(J=Re,$!==null&&(Re=bn(j,$),Re!=null&&Ze.push(Xo(j,Re,J)))),tn)break;j=j.return}0<Ze.length&&(xe=new ze(xe,Ke,null,l,ye),Me.push({event:xe,listeners:Ze}))}}if((r&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",xe&&l!==Dt&&(Ke=l.relatedTarget||l.fromElement)&&(Kr(Ke)||Ke[zi]))break e;if((ze||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,ze?(Ke=l.relatedTarget||l.toElement,ze=re,Ke=Ke?Kr(Ke):null,Ke!==null&&(tn=Ci(Ke),Ke!==tn||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(ze=null,Ke=re),ze!==Ke)){if(Ze=jd,Re="onMouseLeave",$="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Yd,Re="onPointerLeave",$="onPointerEnter",j="pointer"),tn=ze==null?xe:Ps(ze),J=Ke==null?xe:Ps(Ke),xe=new Ze(Re,j+"leave",ze,l,ye),xe.target=tn,xe.relatedTarget=J,Re=null,Kr(ye)===re&&(Ze=new Ze($,j+"enter",Ke,l,ye),Ze.target=J,Ze.relatedTarget=tn,Re=Ze),tn=Re,ze&&Ke)t:{for(Ze=ze,$=Ke,j=0,J=Ze;J;J=Cs(J))j++;for(J=0,Re=$;Re;Re=Cs(Re))J++;for(;0<j-J;)Ze=Cs(Ze),j--;for(;0<J-j;)$=Cs($),J--;for(;j--;){if(Ze===$||$!==null&&Ze===$.alternate)break t;Ze=Cs(Ze),$=Cs($)}Ze=null}else Ze=null;ze!==null&&Sp(Me,xe,ze,Ze,!1),Ke!==null&&tn!==null&&Sp(Me,tn,Ke,Ze,!0)}}e:{if(xe=re?Ps(re):window,ze=xe.nodeName&&xe.nodeName.toLowerCase(),ze==="select"||ze==="input"&&xe.type==="file")var Qe=I_;else if(ep(xe))if(np)Qe=O_;else{Qe=U_;var rt=D_}else(ze=xe.nodeName)&&ze.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Qe=F_);if(Qe&&(Qe=Qe(n,re))){tp(Me,Qe,l,ye);break e}rt&&rt(n,xe,re),n==="focusout"&&(rt=xe._wrapperState)&&rt.controlled&&xe.type==="number"&&nt(xe,"number",xe.value)}switch(rt=re?Ps(re):window,n){case"focusin":(ep(rt)||rt.contentEditable==="true")&&(As=rt,Qc=re,Vo=null);break;case"focusout":Vo=Qc=As=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,up(Me,l,ye);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":up(Me,l,ye)}var st;if(Kc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else ws?Jd(n,l)&&(ct="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Kd&&l.locale!=="ko"&&(ws||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&ws&&(st=Wd()):(pr=ye,Gc="value"in pr?pr.value:pr.textContent,ws=!0)),rt=tl(re,ct),0<rt.length&&(ct=new qd(ct,n,null,l,ye),Me.push({event:ct,listeners:rt}),st?ct.data=st:(st=Qd(l),st!==null&&(ct.data=st)))),(st=C_?b_(n,l):P_(n,l))&&(re=tl(re,"onBeforeInput"),0<re.length&&(ye=new qd("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:re}),ye.data=st))}xp(Me,r)})}function Xo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function tl(n,r){for(var l=r+"Capture",h=[];n!==null;){var m=n,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=bn(n,l),_!=null&&h.unshift(Xo(n,_,m)),_=bn(n,r),_!=null&&h.push(Xo(n,_,m))),n=n.return}return h}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sp(n,r,l,h,m){for(var _=r._reactName,T=[];l!==null&&l!==h;){var U=l,V=U.alternate,re=U.stateNode;if(V!==null&&V===h)break;U.tag===5&&re!==null&&(U=re,m?(V=bn(l,_),V!=null&&T.unshift(Xo(l,V,U))):m||(V=bn(l,_),V!=null&&T.push(Xo(l,V,U)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var W_=/\r\n?/g,X_=/\u0000|\uFFFD/g;function Mp(n){return(typeof n=="string"?n:""+n).replace(W_,`
`).replace(X_,"")}function nl(n,r,l){if(r=Mp(r),Mp(n)!==r&&l)throw Error(t(425))}function il(){}var ou=null,au=null;function lu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,j_=typeof clearTimeout=="function"?clearTimeout:void 0,Ep=typeof Promise=="function"?Promise:void 0,q_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ep<"u"?function(n){return Ep.resolve(null).then(n).catch(Y_)}:cu;function Y_(n){setTimeout(function(){throw n})}function uu(n,r){var l=r,h=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){n.removeChild(m),Uo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);Uo(r)}function gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Tp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),bi="__reactFiber$"+bs,jo="__reactProps$"+bs,zi="__reactContainer$"+bs,fu="__reactEvents$"+bs,K_="__reactListeners$"+bs,$_="__reactHandles$"+bs;function Kr(n){var r=n[bi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[zi]||l[bi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Tp(n);n!==null;){if(l=n[bi])return l;n=Tp(n)}return r}n=l,l=n.parentNode}return null}function qo(n){return n=n[bi]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function rl(n){return n[jo]||null}var hu=[],Ls=-1;function vr(n){return{current:n}}function Gt(n){0>Ls||(n.current=hu[Ls],hu[Ls]=null,Ls--)}function zt(n,r){Ls++,hu[Ls]=n.current,n.current=r}var _r={},Mn=vr(_r),Vn=vr(!1),$r=_r;function Ns(n,r){var l=n.type.contextTypes;if(!l)return _r;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=r[_];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Gn(n){return n=n.childContextTypes,n!=null}function sl(){Gt(Vn),Gt(Mn)}function wp(n,r,l){if(Mn.current!==_r)throw Error(t(168));zt(Mn,r),zt(Vn,l)}function Ap(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in r))throw Error(t(108,ge(n)||"Unknown",m));return ae({},l,h)}function ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,$r=Mn.current,zt(Mn,n),zt(Vn,Vn.current),!0}function Rp(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=Ap(n,r,$r),h.__reactInternalMemoizedMergedChildContext=n,Gt(Vn),Gt(Mn),zt(Mn,n)):Gt(Vn),zt(Vn,l)}var Hi=null,al=!1,du=!1;function Cp(n){Hi===null?Hi=[n]:Hi.push(n)}function Z_(n){al=!0,Cp(n)}function xr(){if(!du&&Hi!==null){du=!0;var n=0,r=Et;try{var l=Hi;for(Et=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Hi=null,al=!1}catch(m){throw Hi!==null&&(Hi=Hi.slice(n+1)),b(De,xr),m}finally{Et=r,du=!1}}return null}var Is=[],Ds=0,ll=null,cl=0,ii=[],ri=0,Zr=null,Vi=1,Gi="";function Jr(n,r){Is[Ds++]=cl,Is[Ds++]=ll,ll=n,cl=r}function bp(n,r,l){ii[ri++]=Vi,ii[ri++]=Gi,ii[ri++]=Zr,Zr=n;var h=Vi;n=Gi;var m=32-Lt(h)-1;h&=~(1<<m),l+=1;var _=32-Lt(r)+m;if(30<_){var T=m-m%5;_=(h&(1<<T)-1).toString(32),h>>=T,m-=T,Vi=1<<32-Lt(r)+m|l<<m|h,Gi=_+n}else Vi=1<<_|l<<m|h,Gi=n}function pu(n){n.return!==null&&(Jr(n,1),bp(n,1,0))}function mu(n){for(;n===ll;)ll=Is[--Ds],Is[Ds]=null,cl=Is[--Ds],Is[Ds]=null;for(;n===Zr;)Zr=ii[--ri],ii[ri]=null,Gi=ii[--ri],ii[ri]=null,Vi=ii[--ri],ii[ri]=null}var Zn=null,Jn=null,Xt=!1,gi=null;function Pp(n,r){var l=li(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Lp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Zn=n,Jn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Zr!==null?{id:Vi,overflow:Gi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=li(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Zn=n,Jn=null,!0):!1;default:return!1}}function gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function vu(n){if(Xt){var r=Jn;if(r){var l=r;if(!Lp(n,r)){if(gu(n))throw Error(t(418));r=gr(l.nextSibling);var h=Zn;r&&Lp(n,r)?Pp(h,l):(n.flags=n.flags&-4097|2,Xt=!1,Zn=n)}}else{if(gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Zn=n}}}function Np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function ul(n){if(n!==Zn)return!1;if(!Xt)return Np(n),Xt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!lu(n.type,n.memoizedProps)),r&&(r=Jn)){if(gu(n))throw Ip(),Error(t(418));for(;r;)Pp(n,r),r=gr(r.nextSibling)}if(Np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Jn=gr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Jn=null}}else Jn=Zn?gr(n.stateNode.nextSibling):null;return!0}function Ip(){for(var n=Jn;n;)n=gr(n.nextSibling)}function Us(){Jn=Zn=null,Xt=!1}function _u(n){gi===null?gi=[n]:gi.push(n)}var J_=w.ReactCurrentBatchConfig;function Yo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var m=h,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(T){var U=m.refs;T===null?delete U[_]:U[_]=T},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function fl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Dp(n){var r=n._init;return r(n._payload)}function Up(n){function r($,j){if(n){var J=$.deletions;J===null?($.deletions=[j],$.flags|=16):J.push(j)}}function l($,j){if(!n)return null;for(;j!==null;)r($,j),j=j.sibling;return null}function h($,j){for($=new Map;j!==null;)j.key!==null?$.set(j.key,j):$.set(j.index,j),j=j.sibling;return $}function m($,j){return $=Rr($,j),$.index=0,$.sibling=null,$}function _($,j,J){return $.index=J,n?(J=$.alternate,J!==null?(J=J.index,J<j?($.flags|=2,j):J):($.flags|=2,j)):($.flags|=1048576,j)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function U($,j,J,Re){return j===null||j.tag!==6?(j=uf(J,$.mode,Re),j.return=$,j):(j=m(j,J),j.return=$,j)}function V($,j,J,Re){var Qe=J.type;return Qe===I?ye($,j,J.props.children,Re,J.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===te&&Dp(Qe)===j.type)?(Re=m(j,J.props),Re.ref=Yo($,j,J),Re.return=$,Re):(Re=Ul(J.type,J.key,J.props,null,$.mode,Re),Re.ref=Yo($,j,J),Re.return=$,Re)}function re($,j,J,Re){return j===null||j.tag!==4||j.stateNode.containerInfo!==J.containerInfo||j.stateNode.implementation!==J.implementation?(j=ff(J,$.mode,Re),j.return=$,j):(j=m(j,J.children||[]),j.return=$,j)}function ye($,j,J,Re,Qe){return j===null||j.tag!==7?(j=os(J,$.mode,Re,Qe),j.return=$,j):(j=m(j,J),j.return=$,j)}function Me($,j,J){if(typeof j=="string"&&j!==""||typeof j=="number")return j=uf(""+j,$.mode,J),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case z:return J=Ul(j.type,j.key,j.props,null,$.mode,J),J.ref=Yo($,null,j),J.return=$,J;case O:return j=ff(j,$.mode,J),j.return=$,j;case te:var Re=j._init;return Me($,Re(j._payload),J)}if(Ue(j)||fe(j))return j=os(j,$.mode,J,null),j.return=$,j;fl($,j)}return null}function xe($,j,J,Re){var Qe=j!==null?j.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Qe!==null?null:U($,j,""+J,Re);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case z:return J.key===Qe?V($,j,J,Re):null;case O:return J.key===Qe?re($,j,J,Re):null;case te:return Qe=J._init,xe($,j,Qe(J._payload),Re)}if(Ue(J)||fe(J))return Qe!==null?null:ye($,j,J,Re,null);fl($,J)}return null}function ze($,j,J,Re,Qe){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return $=$.get(J)||null,U(j,$,""+Re,Qe);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case z:return $=$.get(Re.key===null?J:Re.key)||null,V(j,$,Re,Qe);case O:return $=$.get(Re.key===null?J:Re.key)||null,re(j,$,Re,Qe);case te:var rt=Re._init;return ze($,j,J,rt(Re._payload),Qe)}if(Ue(Re)||fe(Re))return $=$.get(J)||null,ye(j,$,Re,Qe,null);fl(j,Re)}return null}function Ke($,j,J,Re){for(var Qe=null,rt=null,st=j,ct=j=0,pn=null;st!==null&&ct<J.length;ct++){st.index>ct?(pn=st,st=null):pn=st.sibling;var Nt=xe($,st,J[ct],Re);if(Nt===null){st===null&&(st=pn);break}n&&st&&Nt.alternate===null&&r($,st),j=_(Nt,j,ct),rt===null?Qe=Nt:rt.sibling=Nt,rt=Nt,st=pn}if(ct===J.length)return l($,st),Xt&&Jr($,ct),Qe;if(st===null){for(;ct<J.length;ct++)st=Me($,J[ct],Re),st!==null&&(j=_(st,j,ct),rt===null?Qe=st:rt.sibling=st,rt=st);return Xt&&Jr($,ct),Qe}for(st=h($,st);ct<J.length;ct++)pn=ze(st,$,ct,J[ct],Re),pn!==null&&(n&&pn.alternate!==null&&st.delete(pn.key===null?ct:pn.key),j=_(pn,j,ct),rt===null?Qe=pn:rt.sibling=pn,rt=pn);return n&&st.forEach(function(Cr){return r($,Cr)}),Xt&&Jr($,ct),Qe}function Ze($,j,J,Re){var Qe=fe(J);if(typeof Qe!="function")throw Error(t(150));if(J=Qe.call(J),J==null)throw Error(t(151));for(var rt=Qe=null,st=j,ct=j=0,pn=null,Nt=J.next();st!==null&&!Nt.done;ct++,Nt=J.next()){st.index>ct?(pn=st,st=null):pn=st.sibling;var Cr=xe($,st,Nt.value,Re);if(Cr===null){st===null&&(st=pn);break}n&&st&&Cr.alternate===null&&r($,st),j=_(Cr,j,ct),rt===null?Qe=Cr:rt.sibling=Cr,rt=Cr,st=pn}if(Nt.done)return l($,st),Xt&&Jr($,ct),Qe;if(st===null){for(;!Nt.done;ct++,Nt=J.next())Nt=Me($,Nt.value,Re),Nt!==null&&(j=_(Nt,j,ct),rt===null?Qe=Nt:rt.sibling=Nt,rt=Nt);return Xt&&Jr($,ct),Qe}for(st=h($,st);!Nt.done;ct++,Nt=J.next())Nt=ze(st,$,ct,Nt.value,Re),Nt!==null&&(n&&Nt.alternate!==null&&st.delete(Nt.key===null?ct:Nt.key),j=_(Nt,j,ct),rt===null?Qe=Nt:rt.sibling=Nt,rt=Nt);return n&&st.forEach(function(Lx){return r($,Lx)}),Xt&&Jr($,ct),Qe}function tn($,j,J,Re){if(typeof J=="object"&&J!==null&&J.type===I&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case z:e:{for(var Qe=J.key,rt=j;rt!==null;){if(rt.key===Qe){if(Qe=J.type,Qe===I){if(rt.tag===7){l($,rt.sibling),j=m(rt,J.props.children),j.return=$,$=j;break e}}else if(rt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===te&&Dp(Qe)===rt.type){l($,rt.sibling),j=m(rt,J.props),j.ref=Yo($,rt,J),j.return=$,$=j;break e}l($,rt);break}else r($,rt);rt=rt.sibling}J.type===I?(j=os(J.props.children,$.mode,Re,J.key),j.return=$,$=j):(Re=Ul(J.type,J.key,J.props,null,$.mode,Re),Re.ref=Yo($,j,J),Re.return=$,$=Re)}return T($);case O:e:{for(rt=J.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===J.containerInfo&&j.stateNode.implementation===J.implementation){l($,j.sibling),j=m(j,J.children||[]),j.return=$,$=j;break e}else{l($,j);break}else r($,j);j=j.sibling}j=ff(J,$.mode,Re),j.return=$,$=j}return T($);case te:return rt=J._init,tn($,j,rt(J._payload),Re)}if(Ue(J))return Ke($,j,J,Re);if(fe(J))return Ze($,j,J,Re);fl($,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,j!==null&&j.tag===6?(l($,j.sibling),j=m(j,J),j.return=$,$=j):(l($,j),j=uf(J,$.mode,Re),j.return=$,$=j),T($)):l($,j)}return tn}var Fs=Up(!0),Fp=Up(!1),hl=vr(null),dl=null,Os=null,xu=null;function yu(){xu=Os=dl=null}function Su(n){var r=hl.current;Gt(hl),n._currentValue=r}function Mu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function ks(n,r){dl=n,xu=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Wn=!0),n.firstContext=null)}function si(n){var r=n._currentValue;if(xu!==n)if(n={context:n,memoizedValue:r,next:null},Os===null){if(dl===null)throw Error(t(308));Os=n,dl.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return r}var Qr=null;function Eu(n){Qr===null?Qr=[n]:Qr.push(n)}function Op(n,r,l,h){var m=r.interleaved;return m===null?(l.next=l,Eu(r)):(l.next=m.next,m.next=l),r.interleaved=l,Wi(n,h)}function Wi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var yr=!1;function Tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Sr(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,(bt&2)!==0){var m=h.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),h.pending=r,Wi(n,l)}return m=h.interleaved,m===null?(r.next=r,Eu(h)):(r.next=m.next,m.next=r),h.interleaved=r,Wi(n,l)}function pl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Yr(n,l)}}function Bp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?m=_=r:_=_.next=r}else m=_=r;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function ml(n,r,l,h){var m=n.updateQueue;yr=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var V=U,re=V.next;V.next=null,T===null?_=re:T.next=re,T=V;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==T&&(U===null?ye.firstBaseUpdate=re:U.next=re,ye.lastBaseUpdate=V))}if(_!==null){var Me=m.baseState;T=0,ye=re=V=null,U=_;do{var xe=U.lane,ze=U.eventTime;if((h&xe)===xe){ye!==null&&(ye=ye.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ke=n,Ze=U;switch(xe=r,ze=l,Ze.tag){case 1:if(Ke=Ze.payload,typeof Ke=="function"){Me=Ke.call(ze,Me,xe);break e}Me=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Ze.payload,xe=typeof Ke=="function"?Ke.call(ze,Me,xe):Ke,xe==null)break e;Me=ae({},Me,xe);break e;case 2:yr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=m.effects,xe===null?m.effects=[U]:xe.push(U))}else ze={eventTime:ze,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(re=ye=ze,V=Me):ye=ye.next=ze,T|=xe;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,m.lastBaseUpdate=xe,m.shared.pending=null}}while(!0);if(ye===null&&(V=Me),m.baseState=V,m.firstBaseUpdate=re,m.lastBaseUpdate=ye,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else _===null&&(m.shared.lanes=0);ns|=T,n.lanes=T,n.memoizedState=Me}}function zp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(t(191,m));m.call(h)}}}var Ko={},Pi=vr(Ko),$o=vr(Ko),Zo=vr(Ko);function es(n){if(n===Ko)throw Error(t(174));return n}function wu(n,r){switch(zt(Zo,r),zt($o,n),zt(Pi,Ko),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:$e(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=$e(r,n)}Gt(Pi),zt(Pi,r)}function Bs(){Gt(Pi),Gt($o),Gt(Zo)}function Hp(n){es(Zo.current);var r=es(Pi.current),l=$e(r,n.type);r!==l&&(zt($o,n),zt(Pi,l))}function Au(n){$o.current===n&&(Gt(Pi),Gt($o))}var qt=vr(0);function gl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ru=[];function Cu(){for(var n=0;n<Ru.length;n++)Ru[n]._workInProgressVersionPrimary=null;Ru.length=0}var vl=w.ReactCurrentDispatcher,bu=w.ReactCurrentBatchConfig,ts=0,Yt=null,ln=null,hn=null,_l=!1,Jo=!1,Qo=0,Q_=0;function En(){throw Error(t(321))}function Pu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!mi(n[l],r[l]))return!1;return!0}function Lu(n,r,l,h,m,_){if(ts=_,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vl.current=n===null||n.memoizedState===null?ix:rx,n=l(h,m),Jo){_=0;do{if(Jo=!1,Qo=0,25<=_)throw Error(t(301));_+=1,hn=ln=null,r.updateQueue=null,vl.current=sx,n=l(h,m)}while(Jo)}if(vl.current=Sl,r=ln!==null&&ln.next!==null,ts=0,hn=ln=Yt=null,_l=!1,r)throw Error(t(300));return n}function Nu(){var n=Qo!==0;return Qo=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Yt.memoizedState=hn=n:hn=hn.next=n,hn}function oi(){if(ln===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var r=hn===null?Yt.memoizedState:hn.next;if(r!==null)hn=r,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},hn===null?Yt.memoizedState=hn=n:hn=hn.next=n}return hn}function ea(n,r){return typeof r=="function"?r(n):r}function Iu(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=ln,m=h.baseQueue,_=l.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}h.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,h=h.baseState;var U=T=null,V=null,re=_;do{var ye=re.lane;if((ts&ye)===ye)V!==null&&(V=V.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),h=re.hasEagerState?re.eagerState:n(h,re.action);else{var Me={lane:ye,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};V===null?(U=V=Me,T=h):V=V.next=Me,Yt.lanes|=ye,ns|=ye}re=re.next}while(re!==null&&re!==_);V===null?T=h:V.next=U,mi(h,r.memoizedState)||(Wn=!0),r.memoizedState=h,r.baseState=T,r.baseQueue=V,l.lastRenderedState=h}if(n=l.interleaved,n!==null){m=n;do _=m.lane,Yt.lanes|=_,ns|=_,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Du(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,m=l.pending,_=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do _=n(_,T.action),T=T.next;while(T!==m);mi(_,r.memoizedState)||(Wn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,h]}function Vp(){}function Gp(n,r){var l=Yt,h=oi(),m=r(),_=!mi(h.memoizedState,m);if(_&&(h.memoizedState=m,Wn=!0),h=h.queue,Uu(jp.bind(null,l,h,n),[n]),h.getSnapshot!==r||_||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,ta(9,Xp.bind(null,l,h,m,r),void 0,null),dn===null)throw Error(t(349));(ts&30)!==0||Wp(l,r,m)}return m}function Wp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Xp(n,r,l,h){r.value=l,r.getSnapshot=h,qp(r)&&Yp(n)}function jp(n,r,l){return l(function(){qp(r)&&Yp(n)})}function qp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!mi(n,l)}catch{return!0}}function Yp(n){var r=Wi(n,1);r!==null&&yi(r,n,1,-1)}function Kp(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},r.queue=n,n=n.dispatch=nx.bind(null,Yt,n),[r.memoizedState,n]}function ta(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function $p(){return oi().memoizedState}function xl(n,r,l,h){var m=Li();Yt.flags|=n,m.memoizedState=ta(1|r,l,void 0,h===void 0?null:h)}function yl(n,r,l,h){var m=oi();h=h===void 0?null:h;var _=void 0;if(ln!==null){var T=ln.memoizedState;if(_=T.destroy,h!==null&&Pu(h,T.deps)){m.memoizedState=ta(r,l,_,h);return}}Yt.flags|=n,m.memoizedState=ta(1|r,l,_,h)}function Zp(n,r){return xl(8390656,8,n,r)}function Uu(n,r){return yl(2048,8,n,r)}function Jp(n,r){return yl(4,2,n,r)}function Qp(n,r){return yl(4,4,n,r)}function em(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function tm(n,r,l){return l=l!=null?l.concat([n]):null,yl(4,4,em.bind(null,r,n),l)}function Fu(){}function nm(n,r){var l=oi();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Pu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function im(n,r){var l=oi();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&Pu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function rm(n,r,l){return(ts&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=l):(mi(l,r)||(l=Ln(),Yt.lanes|=l,ns|=l,n.baseState=!0),r)}function ex(n,r){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var h=bu.transition;bu.transition={};try{n(!1),r()}finally{Et=l,bu.transition=h}}function sm(){return oi().memoizedState}function tx(n,r,l){var h=wr(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},om(n))am(r,l);else if(l=Op(n,r,l,h),l!==null){var m=In();yi(l,n,h,m),lm(l,r,h)}}function nx(n,r,l){var h=wr(n),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(om(n))am(r,m);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var T=r.lastRenderedState,U=_(T,l);if(m.hasEagerState=!0,m.eagerState=U,mi(U,T)){var V=r.interleaved;V===null?(m.next=m,Eu(r)):(m.next=V.next,V.next=m),r.interleaved=m;return}}catch{}finally{}l=Op(n,r,m,h),l!==null&&(m=In(),yi(l,n,h,m),lm(l,r,h))}}function om(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function am(n,r){Jo=_l=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function lm(n,r,l){if((l&4194240)!==0){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Yr(n,l)}}var Sl={readContext:si,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},ix={readContext:si,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:si,useEffect:Zp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,xl(4194308,4,em.bind(null,r,n),l)},useLayoutEffect:function(n,r){return xl(4194308,4,n,r)},useInsertionEffect:function(n,r){return xl(4,2,n,r)},useMemo:function(n,r){var l=Li();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Li();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=tx.bind(null,Yt,n),[h.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Kp,useDebugValue:Fu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Kp(!1),r=n[0];return n=ex.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Yt,m=Li();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),dn===null)throw Error(t(349));(ts&30)!==0||Wp(h,r,l)}m.memoizedState=l;var _={value:l,getSnapshot:r};return m.queue=_,Zp(jp.bind(null,h,_,n),[n]),h.flags|=2048,ta(9,Xp.bind(null,h,_,l,r),void 0,null),l},useId:function(){var n=Li(),r=dn.identifierPrefix;if(Xt){var l=Gi,h=Vi;l=(h&~(1<<32-Lt(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=Qo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Q_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},rx={readContext:si,useCallback:nm,useContext:si,useEffect:Uu,useImperativeHandle:tm,useInsertionEffect:Jp,useLayoutEffect:Qp,useMemo:im,useReducer:Iu,useRef:$p,useState:function(){return Iu(ea)},useDebugValue:Fu,useDeferredValue:function(n){var r=oi();return rm(r,ln.memoizedState,n)},useTransition:function(){var n=Iu(ea)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Vp,useSyncExternalStore:Gp,useId:sm,unstable_isNewReconciler:!1},sx={readContext:si,useCallback:nm,useContext:si,useEffect:Uu,useImperativeHandle:tm,useInsertionEffect:Jp,useLayoutEffect:Qp,useMemo:im,useReducer:Du,useRef:$p,useState:function(){return Du(ea)},useDebugValue:Fu,useDeferredValue:function(n){var r=oi();return ln===null?r.memoizedState=n:rm(r,ln.memoizedState,n)},useTransition:function(){var n=Du(ea)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Vp,useSyncExternalStore:Gp,useId:sm,unstable_isNewReconciler:!1};function vi(n,r){if(n&&n.defaultProps){r=ae({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ou(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:ae({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ml={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=In(),m=wr(n),_=Xi(h,m);_.payload=r,l!=null&&(_.callback=l),r=Sr(n,_,m),r!==null&&(yi(r,n,m,h),pl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=In(),m=wr(n),_=Xi(h,m);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=Sr(n,_,m),r!==null&&(yi(r,n,m,h),pl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=In(),h=wr(n),m=Xi(l,h);m.tag=2,r!=null&&(m.callback=r),r=Sr(n,m,h),r!==null&&(yi(r,n,h,l),pl(r,n,h))}};function cm(n,r,l,h,m,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,_,T):r.prototype&&r.prototype.isPureReactComponent?!Ho(l,h)||!Ho(m,_):!0}function um(n,r,l){var h=!1,m=_r,_=r.contextType;return typeof _=="object"&&_!==null?_=si(_):(m=Gn(r)?$r:Mn.current,h=r.contextTypes,_=(h=h!=null)?Ns(n,m):_r),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ml,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=_),r}function fm(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&Ml.enqueueReplaceState(r,r.state,null)}function ku(n,r,l,h){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Tu(n);var _=r.contextType;typeof _=="object"&&_!==null?m.context=si(_):(_=Gn(r)?$r:Mn.current,m.context=Ns(n,_)),m.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Ou(n,r,_,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Ml.enqueueReplaceState(m,m.state,null),ml(n,l,m,h),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var l="",h=r;do l+=he(h),h=h.return;while(h);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:m,digest:null}}function Bu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var ox=typeof WeakMap=="function"?WeakMap:Map;function hm(n,r,l){l=Xi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){bl||(bl=!0,tf=h),zu(n,r)},l}function dm(n,r,l){l=Xi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var m=r.value;l.payload=function(){return h(m)},l.callback=function(){zu(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){zu(n,r),typeof h!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function pm(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new ox;var m=new Set;h.set(r,m)}else m=h.get(r),m===void 0&&(m=new Set,h.set(r,m));m.has(l)||(m.add(l),n=yx.bind(null,n,r,l),r.then(n,n))}function mm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function gm(n,r,l,h,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Xi(-1,1),r.tag=2,Sr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var ax=w.ReactCurrentOwner,Wn=!1;function Nn(n,r,l,h){r.child=n===null?Fp(r,null,l,h):Fs(r,n.child,l,h)}function vm(n,r,l,h,m){l=l.render;var _=r.ref;return ks(r,m),h=Lu(n,r,l,h,_,m),l=Nu(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,ji(n,r,m)):(Xt&&l&&pu(r),r.flags|=1,Nn(n,r,h,m),r.child)}function _m(n,r,l,h,m){if(n===null){var _=l.type;return typeof _=="function"&&!cf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,xm(n,r,_,h,m)):(n=Ul(l.type,null,h,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&m)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ho,l(T,h)&&n.ref===r.ref)return ji(n,r,m)}return r.flags|=1,n=Rr(_,h),n.ref=r.ref,n.return=r,r.child=n}function xm(n,r,l,h,m){if(n!==null){var _=n.memoizedProps;if(Ho(_,h)&&n.ref===r.ref)if(Wn=!1,r.pendingProps=h=_,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Wn=!0);else return r.lanes=n.lanes,ji(n,r,m)}return Hu(n,r,l,h,m)}function ym(n,r,l){var h=r.pendingProps,m=h.children,_=n!==null?n.memoizedState:null;if(h.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Vs,Qn),Qn|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,zt(Vs,Qn),Qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,zt(Vs,Qn),Qn|=h}else _!==null?(h=_.baseLanes|l,r.memoizedState=null):h=l,zt(Vs,Qn),Qn|=h;return Nn(n,r,m,l),r.child}function Sm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Hu(n,r,l,h,m){var _=Gn(l)?$r:Mn.current;return _=Ns(r,_),ks(r,m),l=Lu(n,r,l,h,_,m),h=Nu(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,ji(n,r,m)):(Xt&&h&&pu(r),r.flags|=1,Nn(n,r,l,m),r.child)}function Mm(n,r,l,h,m){if(Gn(l)){var _=!0;ol(r)}else _=!1;if(ks(r,m),r.stateNode===null)Tl(n,r),um(r,l,h),ku(r,l,h,m),h=!0;else if(n===null){var T=r.stateNode,U=r.memoizedProps;T.props=U;var V=T.context,re=l.contextType;typeof re=="object"&&re!==null?re=si(re):(re=Gn(l)?$r:Mn.current,re=Ns(r,re));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==h||V!==re)&&fm(r,T,h,re),yr=!1;var xe=r.memoizedState;T.state=xe,ml(r,h,T,m),V=r.memoizedState,U!==h||xe!==V||Vn.current||yr?(typeof ye=="function"&&(Ou(r,l,ye,h),V=r.memoizedState),(U=yr||cm(r,l,U,h,xe,V,re))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=V),T.props=h,T.state=V,T.context=re,h=U):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{T=r.stateNode,kp(n,r),U=r.memoizedProps,re=r.type===r.elementType?U:vi(r.type,U),T.props=re,Me=r.pendingProps,xe=T.context,V=l.contextType,typeof V=="object"&&V!==null?V=si(V):(V=Gn(l)?$r:Mn.current,V=Ns(r,V));var ze=l.getDerivedStateFromProps;(ye=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Me||xe!==V)&&fm(r,T,h,V),yr=!1,xe=r.memoizedState,T.state=xe,ml(r,h,T,m);var Ke=r.memoizedState;U!==Me||xe!==Ke||Vn.current||yr?(typeof ze=="function"&&(Ou(r,l,ze,h),Ke=r.memoizedState),(re=yr||cm(r,l,re,h,xe,Ke,V)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,Ke,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,Ke,V)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Ke),T.props=h,T.state=Ke,T.context=V,h=re):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),h=!1)}return Vu(n,r,l,h,_,m)}function Vu(n,r,l,h,m,_){Sm(n,r);var T=(r.flags&128)!==0;if(!h&&!T)return m&&Rp(r,l,!1),ji(n,r,_);h=r.stateNode,ax.current=r;var U=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&T?(r.child=Fs(r,n.child,null,_),r.child=Fs(r,null,U,_)):Nn(n,r,U,_),r.memoizedState=h.state,m&&Rp(r,l,!0),r.child}function Em(n){var r=n.stateNode;r.pendingContext?wp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&wp(n,r.context,!1),wu(n,r.containerInfo)}function Tm(n,r,l,h,m){return Us(),_u(m),r.flags|=256,Nn(n,r,l,h),r.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function wm(n,r,l){var h=r.pendingProps,m=qt.current,_=!1,T=(r.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(m&2)!==0),U?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),zt(qt,m&1),n===null)return vu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=h.children,n=h.fallback,_?(h=r.mode,_=r.child,T={mode:"hidden",children:T},(h&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Fl(T,h,0,null),n=os(n,h,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Wu(l),r.memoizedState=Gu,n):Xu(r,T));if(m=n.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return lx(n,r,T,h,U,m,l);if(_){_=h.fallback,T=r.mode,m=n.child,U=m.sibling;var V={mode:"hidden",children:h.children};return(T&1)===0&&r.child!==m?(h=r.child,h.childLanes=0,h.pendingProps=V,r.deletions=null):(h=Rr(m,V),h.subtreeFlags=m.subtreeFlags&14680064),U!==null?_=Rr(U,_):(_=os(_,T,l,null),_.flags|=2),_.return=r,h.return=r,h.sibling=_,r.child=h,h=_,_=r.child,T=n.child.memoizedState,T=T===null?Wu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~l,r.memoizedState=Gu,h}return _=n.child,n=_.sibling,h=Rr(_,{mode:"visible",children:h.children}),(r.mode&1)===0&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function Xu(n,r){return r=Fl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function El(n,r,l,h){return h!==null&&_u(h),Fs(r,n.child,null,l),n=Xu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function lx(n,r,l,h,m,_,T){if(l)return r.flags&256?(r.flags&=-257,h=Bu(Error(t(422))),El(n,r,T,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=h.fallback,m=r.mode,h=Fl({mode:"visible",children:h.children},m,0,null),_=os(_,m,T,null),_.flags|=2,h.return=r,_.return=r,h.sibling=_,r.child=h,(r.mode&1)!==0&&Fs(r,n.child,null,T),r.child.memoizedState=Wu(T),r.memoizedState=Gu,_);if((r.mode&1)===0)return El(n,r,T,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var U=h.dgst;return h=U,_=Error(t(419)),h=Bu(_,h,void 0),El(n,r,T,h)}if(U=(T&n.childLanes)!==0,Wn||U){if(h=dn,h!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(h.suspendedLanes|T))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Wi(n,m),yi(h,n,m,-1))}return lf(),h=Bu(Error(t(421))),El(n,r,T,h)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=Sx.bind(null,n),m._reactRetry=r,null):(n=_.treeContext,Jn=gr(m.nextSibling),Zn=r,Xt=!0,gi=null,n!==null&&(ii[ri++]=Vi,ii[ri++]=Gi,ii[ri++]=Zr,Vi=n.id,Gi=n.overflow,Zr=r),r=Xu(r,h.children),r.flags|=4096,r)}function Am(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),Mu(n.return,r,l)}function ju(n,r,l,h,m){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=m)}function Rm(n,r,l){var h=r.pendingProps,m=h.revealOrder,_=h.tail;if(Nn(n,r,h.children,l),h=qt.current,(h&2)!==0)h=h&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Am(n,l,r);else if(n.tag===19)Am(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(zt(qt,h),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&gl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),ju(r,!1,m,l,_);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&gl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}ju(r,!0,l,null,_);break;case"together":ju(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Tl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ji(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ns|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Rr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Rr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function cx(n,r,l){switch(r.tag){case 3:Em(r),Us();break;case 5:Hp(r);break;case 1:Gn(r.type)&&ol(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,m=r.memoizedProps.value;zt(hl,h._currentValue),h._currentValue=m;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(zt(qt,qt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?wm(n,r,l):(zt(qt,qt.current&1),n=ji(n,r,l),n!==null?n.sibling:null);zt(qt,qt.current&1);break;case 19:if(h=(l&r.childLanes)!==0,(n.flags&128)!==0){if(h)return Rm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),zt(qt,qt.current),h)break;return null;case 22:case 23:return r.lanes=0,ym(n,r,l)}return ji(n,r,l)}var Cm,qu,bm,Pm;Cm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},qu=function(){},bm=function(n,r,l,h){var m=n.memoizedProps;if(m!==h){n=r.stateNode,es(Pi.current);var _=null;switch(l){case"input":m=D(n,m),h=D(n,h),_=[];break;case"select":m=ae({},m,{value:void 0}),h=ae({},h,{value:void 0}),_=[];break;case"textarea":m=A(n,m),h=A(n,h),_=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=il)}St(l,h);var T;l=null;for(re in m)if(!h.hasOwnProperty(re)&&m.hasOwnProperty(re)&&m[re]!=null)if(re==="style"){var U=m[re];for(T in U)U.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?_||(_=[]):(_=_||[]).push(re,null));for(re in h){var V=h[re];if(U=m!=null?m[re]:void 0,h.hasOwnProperty(re)&&V!==U&&(V!=null||U!=null))if(re==="style")if(U){for(T in U)!U.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in V)V.hasOwnProperty(T)&&U[T]!==V[T]&&(l||(l={}),l[T]=V[T])}else l||(_||(_=[]),_.push(re,l)),l=V;else re==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(_=_||[]).push(re,V)):re==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(re,""+V):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(V!=null&&re==="onScroll"&&Vt("scroll",n),_||U===V||(_=[])):(_=_||[]).push(re,V))}l&&(_=_||[]).push("style",l);var re=_;(r.updateQueue=re)&&(r.flags|=4)}},Pm=function(n,r,l,h){l!==h&&(r.flags|=4)};function na(n,r){if(!Xt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function Tn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function ux(n,r,l){var h=r.pendingProps;switch(mu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(r),null;case 1:return Gn(r.type)&&sl(),Tn(r),null;case 3:return h=r.stateNode,Bs(),Gt(Vn),Gt(Mn),Cu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(ul(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gi!==null&&(sf(gi),gi=null))),qu(n,r),Tn(r),null;case 5:Au(r);var m=es(Zo.current);if(l=r.type,n!==null&&r.stateNode!=null)bm(n,r,l,h,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return Tn(r),null}if(n=es(Pi.current),ul(r)){h=r.stateNode,l=r.type;var _=r.memoizedProps;switch(h[bi]=r,h[jo]=_,n=(r.mode&1)!==0,l){case"dialog":Vt("cancel",h),Vt("close",h);break;case"iframe":case"object":case"embed":Vt("load",h);break;case"video":case"audio":for(m=0;m<Go.length;m++)Vt(Go[m],h);break;case"source":Vt("error",h);break;case"img":case"image":case"link":Vt("error",h),Vt("load",h);break;case"details":Vt("toggle",h);break;case"input":Je(h,_),Vt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",h);break;case"textarea":Z(h,_),Vt("invalid",h)}St(l,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var U=_[T];T==="children"?typeof U=="string"?h.textContent!==U&&(_.suppressHydrationWarning!==!0&&nl(h.textContent,U,n),m=["children",U]):typeof U=="number"&&h.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&nl(h.textContent,U,n),m=["children",""+U]):s.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Vt("scroll",h)}switch(l){case"input":vt(h),be(h,_,!0);break;case"textarea":vt(h),_e(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=il)}h=m,r.updateQueue=h,h!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=T.createElement(l,{is:h.is}):(n=T.createElement(l),l==="select"&&(T=n,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):n=T.createElementNS(n,l),n[bi]=r,n[jo]=h,Cm(n,r,!1,!1),r.stateNode=n;e:{switch(T=ft(l,h),l){case"dialog":Vt("cancel",n),Vt("close",n),m=h;break;case"iframe":case"object":case"embed":Vt("load",n),m=h;break;case"video":case"audio":for(m=0;m<Go.length;m++)Vt(Go[m],n);m=h;break;case"source":Vt("error",n),m=h;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),m=h;break;case"details":Vt("toggle",n),m=h;break;case"input":Je(n,h),m=D(n,h),Vt("invalid",n);break;case"option":m=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},m=ae({},h,{value:void 0}),Vt("invalid",n);break;case"textarea":Z(n,h),m=A(n,h),Vt("invalid",n);break;default:m=h}St(l,m),U=m;for(_ in U)if(U.hasOwnProperty(_)){var V=U[_];_==="style"?ot(n,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ve(n,V)):_==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&pt(n,V):typeof V=="number"&&pt(n,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?V!=null&&_==="onScroll"&&Vt("scroll",n):V!=null&&P(n,_,V,T))}switch(l){case"input":vt(n),be(n,h,!1);break;case"textarea":vt(n),_e(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Pe(h.value));break;case"select":n.multiple=!!h.multiple,_=h.value,_!=null?L(n,!!h.multiple,_,!1):h.defaultValue!=null&&L(n,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=il)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Tn(r),null;case 6:if(n&&r.stateNode!=null)Pm(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=es(Zo.current),es(Pi.current),ul(r)){if(h=r.stateNode,l=r.memoizedProps,h[bi]=r,(_=h.nodeValue!==l)&&(n=Zn,n!==null))switch(n.tag){case 3:nl(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nl(h.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[bi]=r,r.stateNode=h}return Tn(r),null;case 13:if(Gt(qt),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Jn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ip(),Us(),r.flags|=98560,_=!1;else if(_=ul(r),h!==null&&h.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[bi]=r}else Us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tn(r),_=!1}else gi!==null&&(sf(gi),gi=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(qt.current&1)!==0?cn===0&&(cn=3):lf())),r.updateQueue!==null&&(r.flags|=4),Tn(r),null);case 4:return Bs(),qu(n,r),n===null&&Wo(r.stateNode.containerInfo),Tn(r),null;case 10:return Su(r.type._context),Tn(r),null;case 17:return Gn(r.type)&&sl(),Tn(r),null;case 19:if(Gt(qt),_=r.memoizedState,_===null)return Tn(r),null;if(h=(r.flags&128)!==0,T=_.rendering,T===null)if(h)na(_,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=gl(n),T!==null){for(r.flags|=128,na(_,!1),h=T.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)_=l,n=h,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return zt(qt,qt.current&1|2),r.child}n=n.sibling}_.tail!==null&&X()>Gs&&(r.flags|=128,h=!0,na(_,!1),r.lanes=4194304)}else{if(!h)if(n=gl(T),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),na(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Xt)return Tn(r),null}else 2*X()-_.renderingStartTime>Gs&&l!==1073741824&&(r.flags|=128,h=!0,na(_,!1),r.lanes=4194304);_.isBackwards?(T.sibling=r.child,r.child=T):(l=_.last,l!==null?l.sibling=T:r.child=T,_.last=T)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=X(),r.sibling=null,l=qt.current,zt(qt,h?l&1|2:l&1),r):(Tn(r),null);case 22:case 23:return af(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&(r.mode&1)!==0?(Qn&1073741824)!==0&&(Tn(r),r.subtreeFlags&6&&(r.flags|=8192)):Tn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function fx(n,r){switch(mu(r),r.tag){case 1:return Gn(r.type)&&sl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),Gt(Vn),Gt(Mn),Cu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Au(r),null;case 13:if(Gt(qt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Us()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt(qt),null;case 4:return Bs(),null;case 10:return Su(r.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var wl=!1,wn=!1,hx=typeof WeakSet=="function"?WeakSet:Set,je=null;function Hs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Zt(n,r,h)}else l.current=null}function Yu(n,r,l){try{l()}catch(h){Zt(n,r,h)}}var Lm=!1;function dx(n,r){if(ou=Xa,n=cp(),Jc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,U=-1,V=-1,re=0,ye=0,Me=n,xe=null;t:for(;;){for(var ze;Me!==l||m!==0&&Me.nodeType!==3||(U=T+m),Me!==_||h!==0&&Me.nodeType!==3||(V=T+h),Me.nodeType===3&&(T+=Me.nodeValue.length),(ze=Me.firstChild)!==null;)xe=Me,Me=ze;for(;;){if(Me===n)break t;if(xe===l&&++re===m&&(U=T),xe===_&&++ye===h&&(V=T),(ze=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=ze}l=U===-1||V===-1?null:{start:U,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(au={focusedElem:n,selectionRange:l},Xa=!1,je=r;je!==null;)if(r=je,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,je=n;else for(;je!==null;){r=je;try{var Ke=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Ze=Ke.memoizedProps,tn=Ke.memoizedState,$=r.stateNode,j=$.getSnapshotBeforeUpdate(r.elementType===r.type?Ze:vi(r.type,Ze),tn);$.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var J=r.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Zt(r,r.return,Re)}if(n=r.sibling,n!==null){n.return=r.return,je=n;break}je=r.return}return Ke=Lm,Lm=!1,Ke}function ia(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&n)===n){var _=m.destroy;m.destroy=void 0,_!==void 0&&Yu(r,l,_)}m=m.next}while(m!==h)}}function Al(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function Ku(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Nm(n){var r=n.alternate;r!==null&&(n.alternate=null,Nm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[jo],delete r[fu],delete r[K_],delete r[$_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Im(n){return n.tag===5||n.tag===3||n.tag===4}function Dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $u(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=il));else if(h!==4&&(n=n.child,n!==null))for($u(n,r,l),n=n.sibling;n!==null;)$u(n,r,l),n=n.sibling}function Zu(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(Zu(n,r,l),n=n.sibling;n!==null;)Zu(n,r,l),n=n.sibling}var vn=null,_i=!1;function Mr(n,r,l){for(l=l.child;l!==null;)Um(n,r,l),l=l.sibling}function Um(n,r,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(et,l)}catch{}switch(l.tag){case 5:wn||Hs(l,r);case 6:var h=vn,m=_i;vn=null,Mr(n,r,l),vn=h,_i=m,vn!==null&&(_i?(n=vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):vn.removeChild(l.stateNode));break;case 18:vn!==null&&(_i?(n=vn,l=l.stateNode,n.nodeType===8?uu(n.parentNode,l):n.nodeType===1&&uu(n,l),Uo(n)):uu(vn,l.stateNode));break;case 4:h=vn,m=_i,vn=l.stateNode.containerInfo,_i=!0,Mr(n,r,l),vn=h,_i=m;break;case 0:case 11:case 14:case 15:if(!wn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Yu(l,r,T),m=m.next}while(m!==h)}Mr(n,r,l);break;case 1:if(!wn&&(Hs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(U){Zt(l,r,U)}Mr(n,r,l);break;case 21:Mr(n,r,l);break;case 22:l.mode&1?(wn=(h=wn)||l.memoizedState!==null,Mr(n,r,l),wn=h):Mr(n,r,l);break;default:Mr(n,r,l)}}function Fm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new hx),r.forEach(function(h){var m=Mx.bind(null,n,h);l.has(h)||(l.add(h),h.then(m,m))})}}function xi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var _=n,T=r,U=T;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,_i=!1;break e;case 3:vn=U.stateNode.containerInfo,_i=!0;break e;case 4:vn=U.stateNode.containerInfo,_i=!0;break e}U=U.return}if(vn===null)throw Error(t(160));Um(_,T,m),vn=null,_i=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(re){Zt(m,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Om(r,n),r=r.sibling}function Om(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(r,n),Ni(n),h&4){try{ia(3,n,n.return),Al(3,n)}catch(Ze){Zt(n,n.return,Ze)}try{ia(5,n,n.return)}catch(Ze){Zt(n,n.return,Ze)}}break;case 1:xi(r,n),Ni(n),h&512&&l!==null&&Hs(l,l.return);break;case 5:if(xi(r,n),Ni(n),h&512&&l!==null&&Hs(l,l.return),n.flags&32){var m=n.stateNode;try{pt(m,"")}catch(Ze){Zt(n,n.return,Ze)}}if(h&4&&(m=n.stateNode,m!=null)){var _=n.memoizedProps,T=l!==null?l.memoizedProps:_,U=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&Ee(m,_),ft(U,T);var re=ft(U,_);for(T=0;T<V.length;T+=2){var ye=V[T],Me=V[T+1];ye==="style"?ot(m,Me):ye==="dangerouslySetInnerHTML"?Ve(m,Me):ye==="children"?pt(m,Me):P(m,ye,Me,re)}switch(U){case"input":He(m,_);break;case"textarea":de(m,_);break;case"select":var xe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var ze=_.value;ze!=null?L(m,!!_.multiple,ze,!1):xe!==!!_.multiple&&(_.defaultValue!=null?L(m,!!_.multiple,_.defaultValue,!0):L(m,!!_.multiple,_.multiple?[]:"",!1))}m[jo]=_}catch(Ze){Zt(n,n.return,Ze)}}break;case 6:if(xi(r,n),Ni(n),h&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,_=n.memoizedProps;try{m.nodeValue=_}catch(Ze){Zt(n,n.return,Ze)}}break;case 3:if(xi(r,n),Ni(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Uo(r.containerInfo)}catch(Ze){Zt(n,n.return,Ze)}break;case 4:xi(r,n),Ni(n);break;case 13:xi(r,n),Ni(n),m=n.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(ef=X())),h&4&&Fm(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(wn=(re=wn)||ye,xi(r,n),wn=re):xi(r,n),Ni(n),h&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ye&&(n.mode&1)!==0)for(je=n,ye=n.child;ye!==null;){for(Me=je=ye;je!==null;){switch(xe=je,ze=xe.child,xe.tag){case 0:case 11:case 14:case 15:ia(4,xe,xe.return);break;case 1:Hs(xe,xe.return);var Ke=xe.stateNode;if(typeof Ke.componentWillUnmount=="function"){h=xe,l=xe.return;try{r=h,Ke.props=r.memoizedProps,Ke.state=r.memoizedState,Ke.componentWillUnmount()}catch(Ze){Zt(h,l,Ze)}}break;case 5:Hs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){zm(Me);continue}}ze!==null?(ze.return=xe,je=ze):zm(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{m=Me.stateNode,re?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=Me.stateNode,V=Me.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=it("display",T))}catch(Ze){Zt(n,n.return,Ze)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=re?"":Me.memoizedProps}catch(Ze){Zt(n,n.return,Ze)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:xi(r,n),Ni(n),h&4&&Fm(n);break;case 21:break;default:xi(r,n),Ni(n)}}function Ni(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Im(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(pt(m,""),h.flags&=-33);var _=Dm(n);Zu(n,_,m);break;case 3:case 4:var T=h.stateNode.containerInfo,U=Dm(n);$u(n,U,T);break;default:throw Error(t(161))}}catch(V){Zt(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function px(n,r,l){je=n,km(n)}function km(n,r,l){for(var h=(n.mode&1)!==0;je!==null;){var m=je,_=m.child;if(m.tag===22&&h){var T=m.memoizedState!==null||wl;if(!T){var U=m.alternate,V=U!==null&&U.memoizedState!==null||wn;U=wl;var re=wn;if(wl=T,(wn=V)&&!re)for(je=m;je!==null;)T=je,V=T.child,T.tag===22&&T.memoizedState!==null?Hm(m):V!==null?(V.return=T,je=V):Hm(m);for(;_!==null;)je=_,km(_),_=_.sibling;je=m,wl=U,wn=re}Bm(n)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,je=_):Bm(n)}}function Bm(n){for(;je!==null;){var r=je;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:wn||Al(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!wn)if(l===null)h.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:vi(r.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&zp(r,_,h);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}zp(r,T,l)}break;case 5:var U=r.stateNode;if(l===null&&r.flags&4){l=U;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var ye=re.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&Uo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||r.flags&512&&Ku(r)}catch(xe){Zt(r,r.return,xe)}}if(r===n){je=null;break}if(l=r.sibling,l!==null){l.return=r.return,je=l;break}je=r.return}}function zm(n){for(;je!==null;){var r=je;if(r===n){je=null;break}var l=r.sibling;if(l!==null){l.return=r.return,je=l;break}je=r.return}}function Hm(n){for(;je!==null;){var r=je;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Al(4,r)}catch(V){Zt(r,l,V)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var m=r.return;try{h.componentDidMount()}catch(V){Zt(r,m,V)}}var _=r.return;try{Ku(r)}catch(V){Zt(r,_,V)}break;case 5:var T=r.return;try{Ku(r)}catch(V){Zt(r,T,V)}}}catch(V){Zt(r,r.return,V)}if(r===n){je=null;break}var U=r.sibling;if(U!==null){U.return=r.return,je=U;break}je=r.return}}var mx=Math.ceil,Rl=w.ReactCurrentDispatcher,Ju=w.ReactCurrentOwner,ai=w.ReactCurrentBatchConfig,bt=0,dn=null,nn=null,_n=0,Qn=0,Vs=vr(0),cn=0,ra=null,ns=0,Cl=0,Qu=0,sa=null,Xn=null,ef=0,Gs=1/0,qi=null,bl=!1,tf=null,Er=null,Pl=!1,Tr=null,Ll=0,oa=0,nf=null,Nl=-1,Il=0;function In(){return(bt&6)!==0?X():Nl!==-1?Nl:Nl=X()}function wr(n){return(n.mode&1)===0?1:(bt&2)!==0&&_n!==0?_n&-_n:J_.transition!==null?(Il===0&&(Il=Ln()),Il):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Gd(n.type)),n)}function yi(n,r,l,h){if(50<oa)throw oa=0,nf=null,Error(t(185));en(n,l,h),((bt&2)===0||n!==dn)&&(n===dn&&((bt&2)===0&&(Cl|=l),cn===4&&Ar(n,_n)),jn(n,h),l===1&&bt===0&&(r.mode&1)===0&&(Gs=X()+500,al&&xr()))}function jn(n,r){var l=n.callbackNode;qr(n,r);var h=pi(n,n===dn?_n:0);if(h===0)l!==null&&Y(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&Y(l),r===1)n.tag===0?Z_(Gm.bind(null,n)):Cp(Gm.bind(null,n)),q_(function(){(bt&6)===0&&xr()}),l=null;else{switch(Ud(h)){case 1:l=De;break;case 4:l=We;break;case 16:l=Xe;break;case 536870912:l=lt;break;default:l=Xe}l=Zm(l,Vm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Vm(n,r){if(Nl=-1,Il=0,(bt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ws()&&n.callbackNode!==l)return null;var h=pi(n,n===dn?_n:0);if(h===0)return null;if((h&30)!==0||(h&n.expiredLanes)!==0||r)r=Dl(n,h);else{r=h;var m=bt;bt|=2;var _=Xm();(dn!==n||_n!==r)&&(qi=null,Gs=X()+500,rs(n,r));do try{_x();break}catch(U){Wm(n,U)}while(!0);yu(),Rl.current=_,bt=m,nn!==null?r=0:(dn=null,_n=0,r=cn)}if(r!==0){if(r===2&&(m=Ot(n),m!==0&&(h=m,r=rf(n,m))),r===1)throw l=ra,rs(n,0),Ar(n,h),jn(n,X()),l;if(r===6)Ar(n,h);else{if(m=n.current.alternate,(h&30)===0&&!gx(m)&&(r=Dl(n,h),r===2&&(_=Ot(n),_!==0&&(h=_,r=rf(n,_))),r===1))throw l=ra,rs(n,0),Ar(n,h),jn(n,X()),l;switch(n.finishedWork=m,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:ss(n,Xn,qi);break;case 3:if(Ar(n,h),(h&130023424)===h&&(r=ef+500-X(),10<r)){if(pi(n,0)!==0)break;if(m=n.suspendedLanes,(m&h)!==h){In(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=cu(ss.bind(null,n,Xn,qi),r);break}ss(n,Xn,qi);break;case 4:if(Ar(n,h),(h&4194240)===h)break;for(r=n.eventTimes,m=-1;0<h;){var T=31-Lt(h);_=1<<T,T=r[T],T>m&&(m=T),h&=~_}if(h=m,h=X()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*mx(h/1960))-h,10<h){n.timeoutHandle=cu(ss.bind(null,n,Xn,qi),h);break}ss(n,Xn,qi);break;case 5:ss(n,Xn,qi);break;default:throw Error(t(329))}}}return jn(n,X()),n.callbackNode===l?Vm.bind(null,n):null}function rf(n,r){var l=sa;return n.current.memoizedState.isDehydrated&&(rs(n,r).flags|=256),n=Dl(n,r),n!==2&&(r=Xn,Xn=l,r!==null&&sf(r)),n}function sf(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function gx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],_=m.getSnapshot;m=m.value;try{if(!mi(_(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ar(n,r){for(r&=~Qu,r&=~Cl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Lt(r),h=1<<l;n[l]=-1,r&=~h}}function Gm(n){if((bt&6)!==0)throw Error(t(327));Ws();var r=pi(n,0);if((r&1)===0)return jn(n,X()),null;var l=Dl(n,r);if(n.tag!==0&&l===2){var h=Ot(n);h!==0&&(r=h,l=rf(n,h))}if(l===1)throw l=ra,rs(n,0),Ar(n,r),jn(n,X()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ss(n,Xn,qi),jn(n,X()),null}function of(n,r){var l=bt;bt|=1;try{return n(r)}finally{bt=l,bt===0&&(Gs=X()+500,al&&xr())}}function is(n){Tr!==null&&Tr.tag===0&&(bt&6)===0&&Ws();var r=bt;bt|=1;var l=ai.transition,h=Et;try{if(ai.transition=null,Et=1,n)return n()}finally{Et=h,ai.transition=l,bt=r,(bt&6)===0&&xr()}}function af(){Qn=Vs.current,Gt(Vs)}function rs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,j_(l)),nn!==null)for(l=nn.return;l!==null;){var h=l;switch(mu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&sl();break;case 3:Bs(),Gt(Vn),Gt(Mn),Cu();break;case 5:Au(h);break;case 4:Bs();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:Su(h.type._context);break;case 22:case 23:af()}l=l.return}if(dn=n,nn=n=Rr(n.current,null),_n=Qn=r,cn=0,ra=null,Qu=Cl=ns=0,Xn=sa=null,Qr!==null){for(r=0;r<Qr.length;r++)if(l=Qr[r],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,_=l.pending;if(_!==null){var T=_.next;_.next=m,h.next=T}l.pending=h}Qr=null}return n}function Wm(n,r){do{var l=nn;try{if(yu(),vl.current=Sl,_l){for(var h=Yt.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}_l=!1}if(ts=0,hn=ln=Yt=null,Jo=!1,Qo=0,Ju.current=null,l===null||l.return===null){cn=1,ra=r,nn=null;break}e:{var _=n,T=l.return,U=l,V=r;if(r=_n,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var re=V,ye=U,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ze=mm(T);if(ze!==null){ze.flags&=-257,gm(ze,T,U,_,r),ze.mode&1&&pm(_,re,r),r=ze,V=re;var Ke=r.updateQueue;if(Ke===null){var Ze=new Set;Ze.add(V),r.updateQueue=Ze}else Ke.add(V);break e}else{if((r&1)===0){pm(_,re,r),lf();break e}V=Error(t(426))}}else if(Xt&&U.mode&1){var tn=mm(T);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),gm(tn,T,U,_,r),_u(zs(V,U));break e}}_=V=zs(V,U),cn!==4&&(cn=2),sa===null?sa=[_]:sa.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var $=hm(_,V,r);Bp(_,$);break e;case 1:U=V;var j=_.type,J=_.stateNode;if((_.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Er===null||!Er.has(J)))){_.flags|=65536,r&=-r,_.lanes|=r;var Re=dm(_,U,r);Bp(_,Re);break e}}_=_.return}while(_!==null)}qm(l)}catch(Qe){r=Qe,nn===l&&l!==null&&(nn=l=l.return);continue}break}while(!0)}function Xm(){var n=Rl.current;return Rl.current=Sl,n===null?Sl:n}function lf(){(cn===0||cn===3||cn===2)&&(cn=4),dn===null||(ns&268435455)===0&&(Cl&268435455)===0||Ar(dn,_n)}function Dl(n,r){var l=bt;bt|=2;var h=Xm();(dn!==n||_n!==r)&&(qi=null,rs(n,r));do try{vx();break}catch(m){Wm(n,m)}while(!0);if(yu(),bt=l,Rl.current=h,nn!==null)throw Error(t(261));return dn=null,_n=0,cn}function vx(){for(;nn!==null;)jm(nn)}function _x(){for(;nn!==null&&!se();)jm(nn)}function jm(n){var r=$m(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,r===null?qm(n):nn=r,Ju.current=null}function qm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=ux(l,r,Qn),l!==null){nn=l;return}}else{if(l=fx(l,r),l!==null){l.flags&=32767,nn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,nn=null;return}}if(r=r.sibling,r!==null){nn=r;return}nn=r=n}while(r!==null);cn===0&&(cn=5)}function ss(n,r,l){var h=Et,m=ai.transition;try{ai.transition=null,Et=1,xx(n,r,l,h)}finally{ai.transition=m,Et=h}return null}function xx(n,r,l,h){do Ws();while(Tr!==null);if((bt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(Sn(n,_),n===dn&&(nn=dn=null,_n=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Pl||(Pl=!0,Zm(Xe,function(){return Ws(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=ai.transition,ai.transition=null;var T=Et;Et=1;var U=bt;bt|=4,Ju.current=null,dx(n,l),Om(l,n),B_(au),Xa=!!ou,au=ou=null,n.current=l,px(l),oe(),bt=U,Et=T,ai.transition=_}else n.current=l;if(Pl&&(Pl=!1,Tr=n,Ll=m),_=n.pendingLanes,_===0&&(Er=null),Pt(l.stateNode),jn(n,X()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(bl)throw bl=!1,n=tf,tf=null,n;return(Ll&1)!==0&&n.tag!==0&&Ws(),_=n.pendingLanes,(_&1)!==0?n===nf?oa++:(oa=0,nf=n):oa=0,xr(),null}function Ws(){if(Tr!==null){var n=Ud(Ll),r=ai.transition,l=Et;try{if(ai.transition=null,Et=16>n?16:n,Tr===null)var h=!1;else{if(n=Tr,Tr=null,Ll=0,(bt&6)!==0)throw Error(t(331));var m=bt;for(bt|=4,je=n.current;je!==null;){var _=je,T=_.child;if((je.flags&16)!==0){var U=_.deletions;if(U!==null){for(var V=0;V<U.length;V++){var re=U[V];for(je=re;je!==null;){var ye=je;switch(ye.tag){case 0:case 11:case 15:ia(8,ye,_)}var Me=ye.child;if(Me!==null)Me.return=ye,je=Me;else for(;je!==null;){ye=je;var xe=ye.sibling,ze=ye.return;if(Nm(ye),ye===re){je=null;break}if(xe!==null){xe.return=ze,je=xe;break}je=ze}}}var Ke=_.alternate;if(Ke!==null){var Ze=Ke.child;if(Ze!==null){Ke.child=null;do{var tn=Ze.sibling;Ze.sibling=null,Ze=tn}while(Ze!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,je=T;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ia(9,_,_.return)}var $=_.sibling;if($!==null){$.return=_.return,je=$;break e}je=_.return}}var j=n.current;for(je=j;je!==null;){T=je;var J=T.child;if((T.subtreeFlags&2064)!==0&&J!==null)J.return=T,je=J;else e:for(T=j;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Al(9,U)}}catch(Qe){Zt(U,U.return,Qe)}if(U===T){je=null;break e}var Re=U.sibling;if(Re!==null){Re.return=U.return,je=Re;break e}je=U.return}}if(bt=m,xr(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(et,n)}catch{}h=!0}return h}finally{Et=l,ai.transition=r}}return!1}function Ym(n,r,l){r=zs(l,r),r=hm(n,r,1),n=Sr(n,r,1),r=In(),n!==null&&(en(n,1,r),jn(n,r))}function Zt(n,r,l){if(n.tag===3)Ym(n,n,l);else for(;r!==null;){if(r.tag===3){Ym(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Er===null||!Er.has(h))){n=zs(l,n),n=dm(r,n,1),r=Sr(r,n,1),n=In(),r!==null&&(en(r,1,n),jn(r,n));break}}r=r.return}}function yx(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=In(),n.pingedLanes|=n.suspendedLanes&l,dn===n&&(_n&l)===l&&(cn===4||cn===3&&(_n&130023424)===_n&&500>X()-ef?rs(n,0):Qu|=l),jn(n,r)}function Km(n,r){r===0&&((n.mode&1)===0?r=1:(r=wt,wt<<=1,(wt&130023424)===0&&(wt=4194304)));var l=In();n=Wi(n,r),n!==null&&(en(n,r,l),jn(n,l))}function Sx(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Km(n,l)}function Mx(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Km(n,l)}var $m;$m=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Wn=!1,cx(n,r,l);Wn=(n.flags&131072)!==0}else Wn=!1,Xt&&(r.flags&1048576)!==0&&bp(r,cl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;Tl(n,r),n=r.pendingProps;var m=Ns(r,Mn.current);ks(r,l),m=Lu(null,r,h,n,m,l);var _=Nu();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(h)?(_=!0,ol(r)):_=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Tu(r),m.updater=Ml,r.stateNode=m,m._reactInternals=r,ku(r,h,n,l),r=Vu(null,r,h,!0,_,l)):(r.tag=0,Xt&&_&&pu(r),Nn(null,r,m,l),r=r.child),r;case 16:h=r.elementType;e:{switch(Tl(n,r),n=r.pendingProps,m=h._init,h=m(h._payload),r.type=h,m=r.tag=Tx(h),n=vi(h,n),m){case 0:r=Hu(null,r,h,n,l);break e;case 1:r=Mm(null,r,h,n,l);break e;case 11:r=vm(null,r,h,n,l);break e;case 14:r=_m(null,r,h,vi(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:vi(h,m),Hu(n,r,h,m,l);case 1:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:vi(h,m),Mm(n,r,h,m,l);case 3:e:{if(Em(r),n===null)throw Error(t(387));h=r.pendingProps,_=r.memoizedState,m=_.element,kp(n,r),ml(r,h,null,l);var T=r.memoizedState;if(h=T.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){m=zs(Error(t(423)),r),r=Tm(n,r,h,l,m);break e}else if(h!==m){m=zs(Error(t(424)),r),r=Tm(n,r,h,l,m);break e}else for(Jn=gr(r.stateNode.containerInfo.firstChild),Zn=r,Xt=!0,gi=null,l=Fp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Us(),h===m){r=ji(n,r,l);break e}Nn(n,r,h,l)}r=r.child}return r;case 5:return Hp(r),n===null&&vu(r),h=r.type,m=r.pendingProps,_=n!==null?n.memoizedProps:null,T=m.children,lu(h,m)?T=null:_!==null&&lu(h,_)&&(r.flags|=32),Sm(n,r),Nn(n,r,T,l),r.child;case 6:return n===null&&vu(r),null;case 13:return wm(n,r,l);case 4:return wu(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Fs(r,null,h,l):Nn(n,r,h,l),r.child;case 11:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:vi(h,m),vm(n,r,h,m,l);case 7:return Nn(n,r,r.pendingProps,l),r.child;case 8:return Nn(n,r,r.pendingProps.children,l),r.child;case 12:return Nn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,m=r.pendingProps,_=r.memoizedProps,T=m.value,zt(hl,h._currentValue),h._currentValue=T,_!==null)if(mi(_.value,T)){if(_.children===m.children&&!Vn.current){r=ji(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var U=_.dependencies;if(U!==null){T=_.child;for(var V=U.firstContext;V!==null;){if(V.context===h){if(_.tag===1){V=Xi(-1,l&-l),V.tag=2;var re=_.updateQueue;if(re!==null){re=re.shared;var ye=re.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),re.pending=V}}_.lanes|=l,V=_.alternate,V!==null&&(V.lanes|=l),Mu(_.return,l,r),U.lanes|=l;break}V=V.next}}else if(_.tag===10)T=_.type===r.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,U=T.alternate,U!==null&&(U.lanes|=l),Mu(T,l,r),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===r){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Nn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,h=r.pendingProps.children,ks(r,l),m=si(m),h=h(m),r.flags|=1,Nn(n,r,h,l),r.child;case 14:return h=r.type,m=vi(h,r.pendingProps),m=vi(h.type,m),_m(n,r,h,m,l);case 15:return xm(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:vi(h,m),Tl(n,r),r.tag=1,Gn(h)?(n=!0,ol(r)):n=!1,ks(r,l),um(r,h,m),ku(r,h,m,l),Vu(null,r,h,!0,n,l);case 19:return Rm(n,r,l);case 22:return ym(n,r,l)}throw Error(t(156,r.tag))};function Zm(n,r){return b(n,r)}function Ex(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,r,l,h){return new Ex(n,r,l,h)}function cf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Tx(n){if(typeof n=="function")return cf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===le)return 14}return 2}function Rr(n,r){var l=n.alternate;return l===null?(l=li(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Ul(n,r,l,h,m,_){var T=2;if(h=n,typeof n=="function")cf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return os(l.children,m,_,r);case F:T=8,m|=8;break;case C:return n=li(12,l,r,m|2),n.elementType=C,n.lanes=_,n;case K:return n=li(13,l,r,m),n.elementType=K,n.lanes=_,n;case ne:return n=li(19,l,r,m),n.elementType=ne,n.lanes=_,n;case ce:return Fl(l,m,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case k:T=9;break e;case ee:T=11;break e;case le:T=14;break e;case te:T=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=li(T,l,r,m),r.elementType=n,r.type=h,r.lanes=_,r}function os(n,r,l,h){return n=li(7,n,h,r),n.lanes=l,n}function Fl(n,r,l,h){return n=li(22,n,h,r),n.elementType=ce,n.lanes=l,n.stateNode={isHidden:!1},n}function uf(n,r,l){return n=li(6,n,null,r),n.lanes=l,n}function ff(n,r,l){return r=li(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function wx(n,r,l,h,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function hf(n,r,l,h,m,_,T,U,V){return n=new wx(n,r,l,U,V),r===1?(r=1,_===!0&&(r|=8)):r=0,_=li(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(_),n}function Ax(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function Jm(n){if(!n)return _r;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Gn(l))return Ap(n,l,r)}return r}function Qm(n,r,l,h,m,_,T,U,V){return n=hf(l,h,!0,n,m,_,T,U,V),n.context=Jm(null),l=n.current,h=In(),m=wr(l),_=Xi(h,m),_.callback=r??null,Sr(l,_,m),n.current.lanes=m,en(n,m,h),jn(n,h),n}function Ol(n,r,l,h){var m=r.current,_=In(),T=wr(m);return l=Jm(l),r.context===null?r.context=l:r.pendingContext=l,r=Xi(_,T),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=Sr(m,r,T),n!==null&&(yi(n,m,T,_),pl(n,m,T)),T}function kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function eg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function df(n,r){eg(n,r),(n=n.alternate)&&eg(n,r)}function Rx(){return null}var tg=typeof reportError=="function"?reportError:function(n){console.error(n)};function pf(n){this._internalRoot=n}Bl.prototype.render=pf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ol(n,r,null,null)},Bl.prototype.unmount=pf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;is(function(){Ol(null,n,null,null)}),r[zi]=null}};function Bl(n){this._internalRoot=n}Bl.prototype.unstable_scheduleHydration=function(n){if(n){var r=kd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<dr.length&&r!==0&&r<dr[l].priority;l++);dr.splice(l,0,n),l===0&&Hd(n)}};function mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ng(){}function Cx(n,r,l,h,m){if(m){if(typeof h=="function"){var _=h;h=function(){var re=kl(T);_.call(re)}}var T=Qm(r,h,n,0,null,!1,!1,"",ng);return n._reactRootContainer=T,n[zi]=T.current,Wo(n.nodeType===8?n.parentNode:n),is(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof h=="function"){var U=h;h=function(){var re=kl(V);U.call(re)}}var V=hf(n,0,!1,null,null,!1,!1,"",ng);return n._reactRootContainer=V,n[zi]=V.current,Wo(n.nodeType===8?n.parentNode:n),is(function(){Ol(r,V,l,h)}),V}function Hl(n,r,l,h,m){var _=l._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var U=m;m=function(){var V=kl(T);U.call(V)}}Ol(r,T,n,m)}else T=Cx(l,r,n,m,h);return kl(T)}Fd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=gn(r.pendingLanes);l!==0&&(Yr(r,l|1),jn(r,X()),(bt&6)===0&&(Gs=X()+500,xr()))}break;case 13:is(function(){var h=Wi(n,1);if(h!==null){var m=In();yi(h,n,1,m)}}),df(n,1)}},Bc=function(n){if(n.tag===13){var r=Wi(n,134217728);if(r!==null){var l=In();yi(r,n,134217728,l)}df(n,134217728)}},Od=function(n){if(n.tag===13){var r=wr(n),l=Wi(n,r);if(l!==null){var h=In();yi(l,n,r,h)}df(n,r)}},kd=function(){return Et},Bd=function(n,r){var l=Et;try{return Et=n,r()}finally{Et=l}},Ie=function(n,r,l){switch(r){case"input":if(He(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var m=rl(h);if(!m)throw Error(t(90));ve(h),He(h,m)}}}break;case"textarea":de(n,l);break;case"select":r=l.value,r!=null&&L(n,!!l.multiple,r,!1)}},Ht=of,an=is;var bx={usingClientEntryPoint:!1,Events:[qo,Ps,rl,ke,ht,of]},aa={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ha(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||Rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{et=Vl.inject(Px),dt=Vl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx,qn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(r))throw Error(t(200));return Ax(n,r,null,l)},qn.createRoot=function(n,r){if(!mf(n))throw Error(t(299));var l=!1,h="",m=tg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=hf(n,1,!1,null,null,l,!1,h,m),n[zi]=r.current,Wo(n.nodeType===8?n.parentNode:n),new pf(r)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ha(r),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return is(n)},qn.hydrate=function(n,r,l){if(!zl(r))throw Error(t(200));return Hl(null,n,r,!0,l)},qn.hydrateRoot=function(n,r,l){if(!mf(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,m=!1,_="",T=tg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Qm(r,null,n,1,l??null,m,!1,_,T),n[zi]=r.current,Wo(n),h)for(n=0;n<h.length;n++)l=h[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Bl(r)},qn.render=function(n,r,l){if(!zl(r))throw Error(t(200));return Hl(null,n,r,!1,l)},qn.unmountComponentAtNode=function(n){if(!zl(n))throw Error(t(40));return n._reactRootContainer?(is(function(){Hl(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},qn.unstable_batchedUpdates=of,qn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!zl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Hl(n,r,l,!1,h)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var ug;function Xv(){if(ug)return _f.exports;ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_f.exports=Bx(),_f.exports}var fg;function zx(){if(fg)return Gl;fg=1;var o=Xv();return Gl.createRoot=o.createRoot,Gl.hydrateRoot=o.hydrateRoot,Gl}var Hx=zx(),Vx=Xv();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jv=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=xt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...u},f)=>xt.createElement("svg",{ref:f,...Wx,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:jv("lucide",s),...u},[...c.map(([d,p])=>xt.createElement(d,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=(o,e)=>{const t=xt.forwardRef(({className:i,...s},a)=>xt.createElement(Xx,{ref:a,iconNode:e,className:jv(`lucide-${Gx(o)}`,i),...s}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=Qt("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Qt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=Qt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=Qt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=Qt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=Qt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Qt("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=Qt("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=Qt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=Qt("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=Qt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Qt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Qt("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Qt("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=Qt("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Qt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Qt("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=Qt("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Qt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Qt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Qt("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Qt("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]),ld=[{id:"front",label:"Front"},{id:"hero",label:"Hero"},{id:"isometric",label:"Isometric"},{id:"orbit",label:"Orbit"}],Zv=[{id:"glass",label:"Black Titanium",body:"#161a20",edge:"#2d343d",metalness:.82,roughness:.2},{id:"matte",label:"Deep Graphite",body:"#101317",edge:"#242a31",metalness:.66,roughness:.38},{id:"silver",label:"Natural Titanium",body:"#d6d0c8",edge:"#f2ece4",metalness:.74,roughness:.24}],lh=[{id:"studio",label:"Studio",swatch:"#eef3f7",clear:"#edf3f7",floor:"#dfe8ef"},{id:"sky",label:"Sky",swatch:"#dff7ff",clear:"#e5f9ff",floor:"#d1eff8"},{id:"paper",label:"Paper",swatch:"#f7f8f9",clear:"#f8fafb",floor:"#e8edf1"},{id:"graphite",label:"Graphite",swatch:"#202830",clear:"#161c23",floor:"#10151b"},{id:"coral",label:"Coral",swatch:"#fff0ec",clear:"#fff3ef",floor:"#f3d9d2"}],hg={angle:"hero",material:"glass",background:"studio",reflection:62,depth:48,shadow:58,lighting:72,autoSpin:!1};function ca({icon:o,title:e,children:t}){return W.jsxs("section",{className:"inspector-section",children:[W.jsxs("div",{className:"section-title",children:[W.jsx(o,{size:16}),W.jsx("h2",{children:e})]}),t]})}function dg({label:o,value:e,options:t,onChange:i}){return W.jsxs("label",{className:"field",children:[W.jsx("span",{className:"field-label",children:o}),W.jsx("span",{className:"segmented",children:t.map(s=>W.jsx("button",{className:s.id===e?"selected":"",type:"button",onClick:()=>i(s.id),children:s.label},s.id))})]})}function Wl({label:o,value:e,min:t=0,max:i=100,onChange:s}){return W.jsxs("label",{className:"field range-field",children:[W.jsxs("span",{className:"field-row",children:[W.jsx("span",{className:"field-label",children:o}),W.jsx("span",{className:"value-readout",children:e})]}),W.jsx("input",{type:"range",min:t,max:i,value:e,onChange:a=>s(Number(a.target.value))})]})}function oy({label:o,icon:e,checked:t,onChange:i}){return W.jsxs("button",{className:t?"toggle-control active":"toggle-control",type:"button","aria-pressed":t,onClick:()=>i(!t),children:[W.jsxs("span",{children:[W.jsx(e,{size:16}),o]}),W.jsx("span",{className:"toggle-track","aria-hidden":"true",children:W.jsx("span",{})})]})}function ay({value:o,onChange:e}){return W.jsxs("div",{className:"field",children:[W.jsx("span",{className:"field-label",children:"Background"}),W.jsx("div",{className:"swatches",children:lh.map(t=>W.jsx("button",{className:t.id===o?"swatch selected":"swatch",type:"button",title:t.label,"aria-label":t.label,onClick:()=>e(t.id),children:W.jsx("span",{style:{background:t.swatch}})},t.id))})]})}function ly({settings:o,onSettingChange:e}){return W.jsxs("aside",{className:"inspector","aria-label":"Scene inspector",children:[W.jsx(ca,{icon:ny,title:"Device",children:W.jsx(dg,{label:"Finish",value:o.material,options:Zv,onChange:t=>e("material",t)})}),W.jsxs(ca,{icon:qv,title:"Camera",children:[W.jsx(dg,{label:"Angle",value:o.angle,options:ld,onChange:t=>e("angle",t)}),W.jsx(Wl,{label:"Depth",value:o.depth,onChange:t=>e("depth",t)})]}),W.jsxs(ca,{icon:jx,title:"Lighting",children:[W.jsx(Wl,{label:"Reflection",value:o.reflection,onChange:t=>e("reflection",t)}),W.jsx(Wl,{label:"Shadow",value:o.shadow,onChange:t=>e("shadow",t)}),W.jsx(Wl,{label:"Key Light",value:o.lighting,onChange:t=>e("lighting",t)}),W.jsx(oy,{label:"Auto Spin",icon:ey,checked:o.autoSpin,onChange:t=>e("autoSpin",t)})]}),W.jsx(ca,{icon:Jx,title:"Background",children:W.jsx(ay,{value:o.background,onChange:t=>e("background",t)})}),W.jsx(ca,{icon:$v,title:"Render",children:W.jsxs("div",{className:"render-stats",children:[W.jsxs("span",{children:[W.jsx($x,{size:15}),"WebGL"]}),W.jsxs("span",{children:[W.jsx(Kx,{size:15}),"PNG"]})]})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="171",cy=0,pg=1,uy=2,Jv=1,Qv=2,er=3,sr=0,Yn=1,ni=2,zr=0,co=1,mg=2,gg=3,vg=4,fy=5,gs=100,hy=101,dy=102,py=103,my=104,gy=200,vy=201,_y=202,xy=203,ch=204,uh=205,yy=206,Sy=207,My=208,Ey=209,Ty=210,wy=211,Ay=212,Ry=213,Cy=214,fh=0,hh=1,dh=2,po=3,ph=4,mh=5,gh=6,vh=7,e0=0,by=1,Py=2,Hr=0,Ly=1,Ny=2,Iy=3,t0=4,Dy=5,Uy=6,Fy=7,_g="attached",Oy="detached",n0=300,mo=301,go=302,_h=303,xh=304,Ic=306,vo=1e3,Di=1001,Cc=1002,kn=1003,i0=1004,xa=1005,xn=1006,Sc=1007,nr=1008,or=1009,r0=1010,s0=1011,Ra=1012,ud=1013,_s=1014,Ai=1015,Da=1016,fd=1017,hd=1018,_o=1020,o0=35902,a0=1021,l0=1022,fi=1023,c0=1024,u0=1025,uo=1026,xo=1027,dd=1028,pd=1029,f0=1030,md=1031,gd=1033,Mc=33776,Ec=33777,Tc=33778,wc=33779,yh=35840,Sh=35841,Mh=35842,Eh=35843,Th=36196,wh=37492,Ah=37496,Rh=37808,Ch=37809,bh=37810,Ph=37811,Lh=37812,Nh=37813,Ih=37814,Dh=37815,Uh=37816,Fh=37817,Oh=37818,kh=37819,Bh=37820,zh=37821,Ac=36492,Hh=36494,Vh=36495,h0=36283,Gh=36284,Wh=36285,Xh=36286,Ca=2300,ba=2301,Mf=2302,xg=2400,yg=2401,Sg=2402,ky=2500,By=0,d0=1,jh=2,zy=3200,Hy=3201,p0=0,Vy=1,Or="",sn="srgb",zn="srgb-linear",bc="linear",kt="srgb",Xs=7680,Mg=519,Gy=512,Wy=513,Xy=514,m0=515,jy=516,qy=517,Yy=518,Ky=519,qh=35044,Eg="300 es",ir=2e3,Pc=2001;class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tg=1234567;const Sa=Math.PI/180,yo=180/Math.PI;function di(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function yt(o,e,t){return Math.max(e,Math.min(t,o))}function vd(o,e){return(o%e+e)%e}function $y(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Zy(o,e,t){return o!==e?(t-o)/(e-o):0}function Ma(o,e,t){return(1-t)*o+t*e}function Jy(o,e,t,i){return Ma(o,e,1-Math.exp(-t*i))}function Qy(o,e=1){return e-Math.abs(vd(o,e*2)-e)}function eS(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function tS(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function nS(o,e){return o+Math.floor(Math.random()*(e-o+1))}function iS(o,e){return o+Math.random()*(e-o)}function rS(o){return o*(.5-Math.random())}function sS(o){o!==void 0&&(Tg=o);let e=Tg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oS(o){return o*Sa}function aS(o){return o*yo}function lS(o){return(o&o-1)===0&&o!==0}function cS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function uS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function fS(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),d=a((e+i)/2),p=c((e+i)/2),g=a((e-i)/2),v=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*p,f*g,f*v,u*d);break;case"YZY":o.set(f*v,u*p,f*g,u*d);break;case"ZXZ":o.set(f*g,f*v,u*p,u*d);break;case"XZX":o.set(u*p,f*M,f*x,u*d);break;case"YXY":o.set(f*x,u*p,f*M,u*d);break;case"ZYZ":o.set(f*M,f*x,u*p,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ut(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const g0={DEG2RAD:Sa,RAD2DEG:yo,generateUUID:di,clamp:yt,euclideanModulo:vd,mapLinear:$y,inverseLerp:Zy,lerp:Ma,damp:Jy,pingpong:Qy,smoothstep:eS,smootherstep:tS,randInt:nS,randFloat:iS,randFloatSpread:rS,seededRandom:sS,degToRad:oS,radToDeg:aS,isPowerOfTwo:lS,ceilPowerOfTwo:cS,floorPowerOfTwo:uS,setQuaternionFromProperEuler:fS,normalize:Ut,denormalize:Ti};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,i,s,a,c,u,f,d){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d)}set(e,t,i,s,a,c,u,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],d=i[1],p=i[4],g=i[7],v=i[2],x=i[5],M=i[8],E=s[0],S=s[3],y=s[6],N=s[1],P=s[4],w=s[7],z=s[2],O=s[5],I=s[8];return a[0]=c*E+u*N+f*z,a[3]=c*S+u*P+f*O,a[6]=c*y+u*w+f*I,a[1]=d*E+p*N+g*z,a[4]=d*S+p*P+g*O,a[7]=d*y+p*w+g*I,a[2]=v*E+x*N+M*z,a[5]=v*S+x*P+M*O,a[8]=v*y+x*w+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-i*a*p+i*u*f+s*a*d-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=p*c-u*d,v=u*f-p*a,x=d*a-c*f,M=t*g+i*v+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*d-p*i)*E,e[2]=(u*i-s*c)*E,e[3]=v*E,e[4]=(p*t-s*f)*E,e[5]=(s*a-u*t)*E,e[6]=x*E,e[7]=(i*f-d*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*c+d*u)+c+e,-s*d,s*f,-s*(-d*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Ef.makeScale(e,t)),this}rotate(e){return this.premultiply(Ef.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ef.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ef=new gt;function v0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Pa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hS(){const o=Pa("canvas");return o.style.display="block",o}const wg={};function oo(o){o in wg||(wg[o]=!0,console.warn(o))}function dS(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function pS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ag=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gS(){const o={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(s.r=fo(s.r),s.g=fo(s.g),s.b=fo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Or?bc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[zn]:{primaries:e,whitePoint:i,transfer:bc,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),o}const Rt=gS();function rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let js;class vS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=Pa("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=rr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class _0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Tf(s[c].image)):a.push(Tf(s[c]))}else a=Tf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Tf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?vS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xS=0;class on extends wo{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,i=Di,s=Di,a=xn,c=nr,u=fi,f=or,d=on.DEFAULT_ANISOTROPY,p=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=di(),this.name="",this.source=new _0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=n0;on.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,d=f[0],p=f[4],g=f[8],v=f[1],x=f[5],M=f[9],E=f[2],S=f[6],y=f[10];if(Math.abs(p-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,w=(x+1)/2,z=(y+1)/2,O=(p+v)/4,I=(g+E)/4,F=(M+S)/4;return P>w&&P>z?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=O/i,a=I/i):w>z?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=O/s,a=F/s):z<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(z),i=I/a,s=F/a),this.set(i,s,a,t),this}let N=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-p)*(v-p));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(g-E)/N,this.z=(v-p)/N,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yS extends wo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends yS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class x0 extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SS extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3];const v=a[c+0],x=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==v||d!==x||p!==M){let S=1-u;const y=f*v+d*x+p*M+g*E,N=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const z=Math.sqrt(P),O=Math.atan2(z,y*N);S=Math.sin(S*O)/z,u=Math.sin(u*O)/z}const w=u*N;if(f=f*S+v*w,d=d*S+x*w,p=p*S+M*w,g=g*S+E*w,S===1-u){const z=1/Math.sqrt(f*f+d*d+p*p+g*g);f*=z,d*=z,p*=z,g*=z}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],d=i[s+2],p=i[s+3],g=a[c],v=a[c+1],x=a[c+2],M=a[c+3];return e[t]=u*M+p*g+f*x-d*v,e[t+1]=f*M+p*v+d*g-u*x,e[t+2]=d*M+p*x+u*v-f*g,e[t+3]=p*M-u*g-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,d=u(i/2),p=u(s/2),g=u(a/2),v=f(i/2),x=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=v*p*g+d*x*M,this._y=d*x*g-v*p*M,this._z=d*p*M+v*x*g,this._w=d*p*g-v*x*M;break;case"YXZ":this._x=v*p*g+d*x*M,this._y=d*x*g-v*p*M,this._z=d*p*M-v*x*g,this._w=d*p*g+v*x*M;break;case"ZXY":this._x=v*p*g-d*x*M,this._y=d*x*g+v*p*M,this._z=d*p*M+v*x*g,this._w=d*p*g-v*x*M;break;case"ZYX":this._x=v*p*g-d*x*M,this._y=d*x*g+v*p*M,this._z=d*p*M-v*x*g,this._w=d*p*g+v*x*M;break;case"YZX":this._x=v*p*g+d*x*M,this._y=d*x*g+v*p*M,this._z=d*p*M-v*x*g,this._w=d*p*g-v*x*M;break;case"XZY":this._x=v*p*g-d*x*M,this._y=d*x*g-v*p*M,this._z=d*p*M+v*x*g,this._w=d*p*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],d=t[2],p=t[6],g=t[10],v=i+u+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-f)*x,this._y=(a-d)*x,this._z=(c-s)*x}else if(i>u&&i>g){const x=2*Math.sqrt(1+i-u-g);this._w=(p-f)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+d)/x}else if(u>g){const x=2*Math.sqrt(1+u-i-g);this._w=(a-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+g-i-u);this._w=(c-s)/x,this._x=(a+d)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+c*u+s*d-a*f,this._y=s*p+c*f+a*u-i*d,this._z=a*p+c*d+i*f-s*u,this._w=c*p-i*u-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),g=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=s*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,d=2*(c*s-u*i),p=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+f*d+c*g-u*p,this.y=i+f*p+u*d-a*g,this.z=s+f*g+a*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wf.copy(this).projectOnVector(e),this.sub(wf)}reflect(e){return this.sub(wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wf=new G,Cg=new Wr;class ar{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(a,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xl.copy(i.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),jl.subVectors(this.max,ua),qs.subVectors(e.a,ua),Ys.subVectors(e.b,ua),Ks.subVectors(e.c,ua),br.subVectors(Ys,qs),Pr.subVectors(Ks,Ys),as.subVectors(qs,Ks);let t=[0,-br.z,br.y,0,-Pr.z,Pr.y,0,-as.z,as.y,br.z,0,-br.x,Pr.z,0,-Pr.x,as.z,0,-as.x,-br.y,br.x,0,-Pr.y,Pr.x,0,-as.y,as.x,0];return!Af(t,qs,Ys,Ks,jl)||(t=[1,0,0,0,1,0,0,0,1],!Af(t,qs,Ys,Ks,jl))?!1:(ql.crossVectors(br,Pr),t=[ql.x,ql.y,ql.z],Af(t,qs,Ys,Ks,jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new G,new G,new G,new G,new G,new G,new G,new G],Si=new G,Xl=new ar,qs=new G,Ys=new G,Ks=new G,br=new G,Pr=new G,as=new G,ua=new G,jl=new G,ql=new G,ls=new G;function Af(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ls.fromArray(o,a);const u=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),f=e.dot(ls),d=t.dot(ls),p=i.dot(ls);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const MS=new ar,fa=new G,Rf=new G;class Ui{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):MS.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Rf)),this.expandByPoint(fa.copy(e.center).sub(Rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new G,Cf=new G,Yl=new G,Lr=new G,bf=new G,Kl=new G,Pf=new G;class Dc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cf.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Cf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Yl),u=Lr.dot(this.direction),f=-Lr.dot(Yl),d=Lr.lengthSq(),p=Math.abs(1-c*c);let g,v,x,M;if(p>0)if(g=c*f-u,v=c*u-f,M=a*p,g>=0)if(v>=-M)if(v<=M){const E=1/p;g*=E,v*=E,x=g*(g+c*v+2*u)+v*(c*g+v+2*f)+d}else v=a,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*f)+d;else v=-a,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*f)+d;else v<=-M?(g=Math.max(0,-(-c*a+u)),v=g>0?-a:Math.min(Math.max(-a,-f),a),x=-g*g+v*(v+2*f)+d):v<=M?(g=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+d):(g=Math.max(0,-(c*a+u)),v=g>0?a:Math.min(Math.max(-a,-f),a),x=-g*g+v*(v+2*f)+d);else v=c>0?-a:a,g=Math.max(0,-(c*v+u)),x=-g*g+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Cf).addScaledVector(Yl,v),x}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),s=Ki.dot(Ki)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,s=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,s=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,s,a){bf.subVectors(t,e),Kl.subVectors(i,e),Pf.crossVectors(bf,Kl);let c=this.direction.dot(Pf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const f=u*this.direction.dot(Kl.crossVectors(Lr,Kl));if(f<0)return null;const d=u*this.direction.dot(bf.cross(Lr));if(d<0||f+d>c)return null;const p=-u*Lr.dot(Pf);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,s,a,c,u,f,d,p,g,v,x,M,E,S){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,d,p,g,v,x,M,E,S)}set(e,t,i,s,a,c,u,f,d,p,g,v,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=a,y[5]=c,y[9]=u,y[13]=f,y[2]=d,y[6]=p,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),a=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=c*p,x=c*g,M=u*p,E=u*g;t[0]=f*p,t[4]=-f*g,t[8]=d,t[1]=x+M*d,t[5]=v-E*d,t[9]=-u*f,t[2]=E-v*d,t[6]=M+x*d,t[10]=c*f}else if(e.order==="YXZ"){const v=f*p,x=f*g,M=d*p,E=d*g;t[0]=v+E*u,t[4]=M*u-x,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=x*u-M,t[6]=E+v*u,t[10]=c*f}else if(e.order==="ZXY"){const v=f*p,x=f*g,M=d*p,E=d*g;t[0]=v-E*u,t[4]=-c*g,t[8]=M+x*u,t[1]=x+M*u,t[5]=c*p,t[9]=E-v*u,t[2]=-c*d,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const v=c*p,x=c*g,M=u*p,E=u*g;t[0]=f*p,t[4]=M*d-x,t[8]=v*d+E,t[1]=f*g,t[5]=E*d+v,t[9]=x*d-M,t[2]=-d,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,x=c*d,M=u*f,E=u*d;t[0]=f*p,t[4]=E-v*g,t[8]=M*g+x,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=x*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=c*f,x=c*d,M=u*f,E=u*d;t[0]=f*p,t[4]=-g,t[8]=d*p,t[1]=v*g+E,t[5]=c*p,t[9]=x*g-M,t[2]=M*g-x,t[6]=u*p,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,TS)}lookAt(e,t,i){const s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Nr.crossVectors(i,ei),Nr.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Nr.crossVectors(i,ei)),Nr.normalize(),$l.crossVectors(ei,Nr),s[0]=Nr.x,s[4]=$l.x,s[8]=ei.x,s[1]=Nr.y,s[5]=$l.y,s[9]=ei.y,s[2]=Nr.z,s[6]=$l.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],d=i[12],p=i[1],g=i[5],v=i[9],x=i[13],M=i[2],E=i[6],S=i[10],y=i[14],N=i[3],P=i[7],w=i[11],z=i[15],O=s[0],I=s[4],F=s[8],C=s[12],R=s[1],k=s[5],ee=s[9],K=s[13],ne=s[2],le=s[6],te=s[10],ce=s[14],H=s[3],fe=s[7],ae=s[11],B=s[15];return a[0]=c*O+u*R+f*ne+d*H,a[4]=c*I+u*k+f*le+d*fe,a[8]=c*F+u*ee+f*te+d*ae,a[12]=c*C+u*K+f*ce+d*B,a[1]=p*O+g*R+v*ne+x*H,a[5]=p*I+g*k+v*le+x*fe,a[9]=p*F+g*ee+v*te+x*ae,a[13]=p*C+g*K+v*ce+x*B,a[2]=M*O+E*R+S*ne+y*H,a[6]=M*I+E*k+S*le+y*fe,a[10]=M*F+E*ee+S*te+y*ae,a[14]=M*C+E*K+S*ce+y*B,a[3]=N*O+P*R+w*ne+z*H,a[7]=N*I+P*k+w*le+z*fe,a[11]=N*F+P*ee+w*te+z*ae,a[15]=N*C+P*K+w*ce+z*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],d=e[13],p=e[2],g=e[6],v=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+a*f*g-s*d*g-a*u*v+i*d*v+s*u*x-i*f*x)+E*(+t*f*x-t*d*v+a*c*v-s*c*x+s*d*p-a*f*p)+S*(+t*d*g-t*u*x-a*c*g+i*c*x+a*u*p-i*d*p)+y*(-s*u*p-t*f*g+t*u*v+s*c*g-i*c*v+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],d=e[7],p=e[8],g=e[9],v=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],N=g*S*d-E*v*d+E*f*x-u*S*x-g*f*y+u*v*y,P=M*v*d-p*S*d-M*f*x+c*S*x+p*f*y-c*v*y,w=p*E*d-M*g*d+M*u*x-c*E*x-p*u*y+c*g*y,z=M*g*f-p*E*f-M*u*v+c*E*v+p*u*S-c*g*S,O=t*N+i*P+s*w+a*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=N*I,e[1]=(E*v*a-g*S*a-E*s*x+i*S*x+g*s*y-i*v*y)*I,e[2]=(u*S*a-E*f*a+E*s*d-i*S*d-u*s*y+i*f*y)*I,e[3]=(g*f*a-u*v*a-g*s*d+i*v*d+u*s*x-i*f*x)*I,e[4]=P*I,e[5]=(p*S*a-M*v*a+M*s*x-t*S*x-p*s*y+t*v*y)*I,e[6]=(M*f*a-c*S*a-M*s*d+t*S*d+c*s*y-t*f*y)*I,e[7]=(c*v*a-p*f*a+p*s*d-t*v*d-c*s*x+t*f*x)*I,e[8]=w*I,e[9]=(M*g*a-p*E*a-M*i*x+t*E*x+p*i*y-t*g*y)*I,e[10]=(c*E*a-M*u*a+M*i*d-t*E*d-c*i*y+t*u*y)*I,e[11]=(p*u*a-c*g*a-p*i*d+t*g*d+c*i*x-t*u*x)*I,e[12]=z*I,e[13]=(p*E*s-M*g*s+M*i*v-t*E*v-p*i*S+t*g*S)*I,e[14]=(M*u*s-c*E*s-M*i*f+t*E*f+c*i*S-t*u*S)*I,e[15]=(c*g*s-p*u*s+p*i*f-t*g*f-c*i*v+t*u*v)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,d=a*c,p=a*u;return this.set(d*c+i,d*u-s*f,d*f+s*u,0,d*u+s*f,p*u+i,p*f-s*c,0,d*f-s*u,p*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,d=a+a,p=c+c,g=u+u,v=a*d,x=a*p,M=a*g,E=c*p,S=c*g,y=u*g,N=f*d,P=f*p,w=f*g,z=i.x,O=i.y,I=i.z;return s[0]=(1-(E+y))*z,s[1]=(x+w)*z,s[2]=(M-P)*z,s[3]=0,s[4]=(x-w)*O,s[5]=(1-(v+y))*O,s[6]=(S+N)*O,s[7]=0,s[8]=(M+P)*I,s[9]=(S-N)*I,s[10]=(1-(v+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=$s.set(s[0],s[1],s[2]).length();const c=$s.set(s[4],s[5],s[6]).length(),u=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Mi.copy(this);const d=1/a,p=1/c,g=1/u;return Mi.elements[0]*=d,Mi.elements[1]*=d,Mi.elements[2]*=d,Mi.elements[4]*=p,Mi.elements[5]*=p,Mi.elements[6]*=p,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,t.setFromRotationMatrix(Mi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=ir){const f=this.elements,d=2*a/(t-e),p=2*a/(i-s),g=(t+e)/(t-e),v=(i+s)/(i-s);let x,M;if(u===ir)x=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===Pc)x=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=ir){const f=this.elements,d=1/(t-e),p=1/(i-s),g=1/(c-a),v=(t+e)*d,x=(i+s)*p;let M,E;if(u===ir)M=(c+a)*g,E=-2*g;else if(u===Pc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new G,Mi=new mt,ES=new G(0,0,0),TS=new G(1,1,1),Nr=new G,$l=new G,ei=new G,bg=new mt,Pg=new Wr;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],d=s[5],p=s[9],g=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pg.setFromEuler(this),this.setFromQuaternion(Pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const Lg=new G,Zs=new Wr,$i=new mt,Zl=new G,ha=new G,AS=new G,RS=new Wr,Ng=new G(1,0,0),Ig=new G(0,1,0),Dg=new G(0,0,1),Ug={type:"added"},CS={type:"removed"},Js={type:"childadded",child:null},Lf={type:"childremoved",child:null};class jt extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new G,t=new On,i=new Wr,s=new G(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new gt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Ng,e)}rotateY(e){return this.rotateOnAxis(Ig,e)}rotateZ(e){return this.rotateOnAxis(Dg,e)}translateOnAxis(e,t){return Lg.copy(e).applyQuaternion(this.quaternion),this.position.add(Lg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ng,e)}translateY(e){return this.translateOnAxis(Ig,e)}translateZ(e){return this.translateOnAxis(Dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zl.copy(e):Zl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(ha,Zl,this.up):$i.lookAt(Zl,ha,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix($i),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ug),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CS),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ug),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,RS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const g=f[d];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),v=c(e.skeletons),x=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}jt.DEFAULT_UP=new G(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new G,Zi=new G,Nf=new G,Ji=new G,Qs=new G,eo=new G,Fg=new G,If=new G,Df=new G,Uf=new G,Ff=new It,Of=new It,kf=new It;class wi{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ei.subVectors(e,t),s.cross(Ei);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ei.subVectors(s,t),Zi.subVectors(i,t),Nf.subVectors(e,t);const c=Ei.dot(Ei),u=Ei.dot(Zi),f=Ei.dot(Nf),d=Zi.dot(Zi),p=Zi.dot(Nf),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const v=1/g,x=(d*f-u*p)*v,M=(c*p-u*f)*v;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,Ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ji.x),f.addScaledVector(c,Ji.y),f.addScaledVector(u,Ji.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return Ff.setScalar(0),Of.setScalar(0),kf.setScalar(0),Ff.fromBufferAttribute(e,t),Of.fromBufferAttribute(e,i),kf.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Ff,a.x),c.addScaledVector(Of,a.y),c.addScaledVector(kf,a.z),c}static isFrontFacing(e,t,i,s){return Ei.subVectors(i,t),Zi.subVectors(e,t),Ei.cross(Zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ei.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Qs.subVectors(s,i),eo.subVectors(a,i),If.subVectors(e,i);const f=Qs.dot(If),d=eo.dot(If);if(f<=0&&d<=0)return t.copy(i);Df.subVectors(e,s);const p=Qs.dot(Df),g=eo.dot(Df);if(p>=0&&g<=p)return t.copy(s);const v=f*g-p*d;if(v<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(Qs,c);Uf.subVectors(e,a);const x=Qs.dot(Uf),M=eo.dot(Uf);if(M>=0&&x<=M)return t.copy(a);const E=x*d-f*M;if(E<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(i).addScaledVector(eo,u);const S=p*M-x*g;if(S<=0&&g-p>=0&&x-M>=0)return Fg.subVectors(a,s),u=(g-p)/(g-p+(x-M)),t.copy(s).addScaledVector(Fg,u);const y=1/(S+E+v);return c=E*y,u=v*y,t.copy(i).addScaledVector(Qs,c).addScaledVector(eo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Bf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=vd(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Bf(c,a,e+1/3),this.g=Bf(c,a,e),this.b=Bf(c,a,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=S0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Rt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(yt(Rn.r*255,0,255))*65536+Math.round(yt(Rn.g*255,0,255))*256+Math.round(yt(Rn.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,a=Rn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,d;const p=(u+c)/2;if(u===c)f=0,d=0;else{const g=c-u;switch(d=p<=.5?g/(c+u):g/(2-c-u),c){case i:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-i)/g+2;break;case a:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=sn){Rt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,i=Rn.g,s=Rn.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Jl);const i=Ma(Ir.h,Jl.h,t),s=Ma(Ir.s,Jl.s,t),a=Ma(Ir.l,Jl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ut;ut.NAMES=S0;let bS=0;class Ri extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=di(),this.name="",this.type="Material",this.blending=co,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==uh&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hi extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=e0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new G,Ql=new Le;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class M0 extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class E0 extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Jt extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let PS=0;const ci=new mt,zf=new jt,to=new G,ti=new ar,da=new ar,mn=new G;class Kn extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v0(e)?E0:M0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new gt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Jt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];da.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(ti.min,da.min),ti.expandByPoint(mn),mn.addVectors(ti.max,da.max),ti.expandByPoint(mn)):(ti.expandByPoint(da.min),ti.expandByPoint(da.max))}ti.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)mn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)mn.fromBufferAttribute(u,d),f&&(to.fromBufferAttribute(e,d),mn.add(to)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let F=0;F<i.count;F++)u[F]=new G,f[F]=new G;const d=new G,p=new G,g=new G,v=new Le,x=new Le,M=new Le,E=new G,S=new G;function y(F,C,R){d.fromBufferAttribute(i,F),p.fromBufferAttribute(i,C),g.fromBufferAttribute(i,R),v.fromBufferAttribute(a,F),x.fromBufferAttribute(a,C),M.fromBufferAttribute(a,R),p.sub(d),g.sub(d),x.sub(v),M.sub(v);const k=1/(x.x*M.y-M.x*x.y);isFinite(k)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(k),S.copy(g).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(k),u[F].add(E),u[C].add(E),u[R].add(E),f[F].add(S),f[C].add(S),f[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let F=0,C=N.length;F<C;++F){const R=N[F],k=R.start,ee=R.count;for(let K=k,ne=k+ee;K<ne;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new G,w=new G,z=new G,O=new G;function I(F){z.fromBufferAttribute(s,F),O.copy(z);const C=u[F];P.copy(C),P.sub(z.multiplyScalar(z.dot(C))).normalize(),w.crossVectors(O,C);const k=w.dot(f[F])<0?-1:1;c.setXYZW(F,P.x,P.y,P.z,k)}for(let F=0,C=N.length;F<C;++F){const R=N[F],k=R.start,ee=R.count;for(let K=k,ne=k+ee;K<ne;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const s=new G,a=new G,c=new G,u=new G,f=new G,d=new G,p=new G,g=new G;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),u.add(p),f.add(p),d.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,g=u.normalized,v=new d.constructor(f.length*p);let x=0,M=0;for(let E=0,S=f.length;E<S;E++){u.isInterleavedBufferAttribute?x=f[E]*u.data.stride+u.offset:x=f[E]*p;for(let y=0;y<p;y++)v[M++]=d[x++]}return new Bn(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let p=0,g=d.length;p<g;p++){const v=d[p],x=e(v,i);f.push(x)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];p.push(x.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],g=a[d];for(let v=0,x=g.length;v<x;v++)p.push(g[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Og=new mt,cs=new Dc,ec=new Ui,kg=new G,tc=new G,nc=new G,ic=new G,Hf=new G,rc=new G,Bg=new G,sc=new G;class Bt extends jt{constructor(e=new Kn,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){rc.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=u[f],g=a[f];p!==0&&(Hf.fromBufferAttribute(g,e),c?rc.addScaledVector(Hf,p):rc.addScaledVector(Hf.sub(t),p))}t.add(rc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ec.copy(i.boundingSphere),ec.applyMatrix4(a),cs.copy(e.ray).recast(e.near),!(ec.containsPoint(cs.origin)===!1&&(cs.intersectSphere(ec,kg)===null||cs.origin.distanceToSquared(kg)>(e.far-e.near)**2))&&(Og.copy(a).invert(),cs.copy(e.ray).applyMatrix4(Og),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,v=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=c[S.materialIndex],N=Math.max(S.start,x.start),P=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,z=P;w<z;w+=3){const O=u.getX(w),I=u.getX(w+1),F=u.getX(w+2);s=oc(this,y,e,i,d,p,g,O,I,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(u.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const N=u.getX(S),P=u.getX(S+1),w=u.getX(S+2);s=oc(this,c,e,i,d,p,g,N,P,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],y=c[S.materialIndex],N=Math.max(S.start,x.start),P=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let w=N,z=P;w<z;w+=3){const O=w,I=w+1,F=w+2;s=oc(this,y,e,i,d,p,g,O,I,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const N=S,P=S+1,w=S+2;s=oc(this,c,e,i,d,p,g,N,P,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function LS(o,e,t,i,s,a,c,u){let f;if(e.side===Yn?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===sr,u),f===null)return null;sc.copy(u),sc.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(sc);return d<t.near||d>t.far?null:{distance:d,point:sc.clone(),object:o}}function oc(o,e,t,i,s,a,c,u,f,d){o.getVertexPosition(u,tc),o.getVertexPosition(f,nc),o.getVertexPosition(d,ic);const p=LS(o,e,t,i,tc,nc,ic,Bg);if(p){const g=new G;wi.getBarycoord(Bg,tc,nc,ic,g),s&&(p.uv=wi.getInterpolatedAttribute(s,u,f,d,g,new Le)),a&&(p.uv1=wi.getInterpolatedAttribute(a,u,f,d,g,new Le)),c&&(p.normal=wi.getInterpolatedAttribute(c,u,f,d,g,new G),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:f,c:d,normal:new G,materialIndex:0};wi.getNormal(tc,nc,ic,v.normal),p.face=v,p.barycoord=g}return p}class Ao extends Kn{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],d=[],p=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(g,2));function M(E,S,y,N,P,w,z,O,I,F,C){const R=w/I,k=z/F,ee=w/2,K=z/2,ne=O/2,le=I+1,te=F+1;let ce=0,H=0;const fe=new G;for(let ae=0;ae<te;ae++){const B=ae*k-K;for(let ie=0;ie<le;ie++){const Oe=ie*R-ee;fe[E]=Oe*N,fe[S]=B*P,fe[y]=ne,d.push(fe.x,fe.y,fe.z),fe[E]=0,fe[S]=0,fe[y]=O>0?1:-1,p.push(fe.x,fe.y,fe.z),g.push(ie/I),g.push(1-ae/F),ce+=1}}for(let ae=0;ae<F;ae++)for(let B=0;B<I;B++){const ie=v+B+le*ae,Oe=v+B+le*(ae+1),Q=v+(B+1)+le*(ae+1),he=v+(B+1)+le*ae;f.push(ie,Oe,he),f.push(Oe,Q,he),H+=6}u.addGroup(x,H,C),x+=H,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Un(o){const e={};for(let t=0;t<o.length;t++){const i=So(o[t]);for(const s in i)e[s]=i[s]}return e}function NS(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function T0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const IS={clone:So,merge:Un};var DS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=NS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class w0 extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new G,zg=new Le,Hg=new Le;class Fn extends w0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,zg,Hg),t.subVectors(Hg,zg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/d,s*=c.width/f,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class FS extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(no,io,e,t);s.layers=this.layers,this.add(s);const a=new Fn(no,io,e,t);a.layers=this.layers,this.add(a);const c=new Fn(no,io,e,t);c.layers=this.layers,this.add(c);const u=new Fn(no,io,e,t);u.layers=this.layers,this.add(u);const f=new Fn(no,io,e,t);f.layers=this.layers,this.add(f);const d=new Fn(no,io,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const d of t)this.remove(d);if(e===ir)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,d,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(g,v,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class A0 extends on{constructor(e,t,i,s,a,c,u,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,i,s,a,c,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new A0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ao(5,5,5),a=new Gr({name:"CubemapFromEquirect",uniforms:So(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:zr});a.uniforms.tEquirect.value=t;const c=new Bt(s,a),u=t.minFilter;return t.minFilter===nr&&(t.minFilter=xn),new FS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class kS extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class BS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qh,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new G;class _d{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),a=Ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _d(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vg=new G,Gg=new It,Wg=new It,zS=new G,Xg=new mt,ac=new G,Vf=new Ui,jg=new mt,Gf=new Dc;class HS extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_g,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ar),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ac),this.boundingBox.expandByPoint(ac)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ac),this.boundingSphere.expandByPoint(ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vf.copy(this.boundingSphere),Vf.applyMatrix4(s),e.ray.intersectsSphere(Vf)!==!1&&(jg.copy(s).invert(),Gf.copy(e.ray).applyMatrix4(jg),!(this.boundingBox!==null&&Gf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new It,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_g?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Oy?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Gg.fromBufferAttribute(s.attributes.skinIndex,e),Wg.fromBufferAttribute(s.attributes.skinWeight,e),Vg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Wg.getComponent(a);if(c!==0){const u=Gg.getComponent(a);Xg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(zS.copy(Vg).applyMatrix4(Xg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class R0 extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class C0 extends on{constructor(e=null,t=1,i=1,s,a,c,u,f,d=kn,p=kn,g,v){super(null,c,u,f,d,p,s,a,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qg=new mt,VS=new mt;class xd{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:VS;qg.multiplyMatrices(u,t[a]),qg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new C0(t,e,e,fi,Ai);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new R0),this.bones.push(c),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class Yh extends Bn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ro=new mt,Yg=new mt,lc=[],Kg=new ar,GS=new mt,pa=new Bt,ma=new Ui;class WS extends Bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,GS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),Kg.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(Kg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),ma.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ro),Yg.multiplyMatrices(i,ro),pa.matrixWorld=Yg,pa.raycast(e,lc);for(let c=0,u=lc.length;c<u;c++){const f=lc[c];f.instanceId=a,f.object=this,t.push(f)}lc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new C0(new Float32Array(s*this.count),s,this.count,dd,Ai));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Wf=new G,XS=new G,jS=new gt;class ps{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wf.subVectors(i,t).cross(XS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jS.getNormalMatrix(e),s=this.coplanarPoint(Wf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Ui,cc=new G;class yd{constructor(e=new ps,t=new ps,i=new ps,s=new ps,a=new ps,c=new ps){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ir){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],f=s[3],d=s[4],p=s[5],g=s[6],v=s[7],x=s[8],M=s[9],E=s[10],S=s[11],y=s[12],N=s[13],P=s[14],w=s[15];if(i[0].setComponents(f-a,v-d,S-x,w-y).normalize(),i[1].setComponents(f+a,v+d,S+x,w+y).normalize(),i[2].setComponents(f+c,v+p,S+M,w+N).normalize(),i[3].setComponents(f-c,v-p,S-M,w-N).normalize(),i[4].setComponents(f-u,v-g,S-E,w-P).normalize(),t===ir)i[5].setComponents(f+u,v+g,S+E,w+P).normalize();else if(t===Pc)i[5].setComponents(u,g,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(cc.x=s.normal.x>0?e.max.x:e.min.x,cc.y=s.normal.y>0?e.max.y:e.min.y,cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b0 extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new G,Nc=new G,$g=new mt,ga=new Dc,uc=new Ui,Xf=new G,Zg=new G;class Sd extends jt{constructor(e=new Kn,t=new b0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Lc.fromBufferAttribute(t,s-1),Nc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Lc.distanceTo(Nc);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),uc.radius+=a,e.ray.intersectsSphere(uc)===!1)return;$g.copy(s).invert(),ga.copy(e.ray).applyMatrix4($g);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=this.isLineSegments?2:1,p=i.index,v=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=d){const y=p.getX(E),N=p.getX(E+1),P=fc(this,e,ga,f,y,N);P&&t.push(P)}if(this.isLineLoop){const E=p.getX(M-1),S=p.getX(x),y=fc(this,e,ga,f,E,S);y&&t.push(y)}}else{const x=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=x,S=M-1;E<S;E+=d){const y=fc(this,e,ga,f,E,E+1);y&&t.push(y)}if(this.isLineLoop){const E=fc(this,e,ga,f,M-1,x);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function fc(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(Lc.fromBufferAttribute(c,s),Nc.fromBufferAttribute(c,a),t.distanceSqToSegment(Lc,Nc,Xf,Zg)>i)return;Xf.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(Xf);if(!(f<e.near||f>e.far))return{distance:f,point:Zg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const Jg=new G,Qg=new G;class qS extends Sd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Jg.fromBufferAttribute(t,s),Qg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Jg.distanceTo(Qg);e.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class YS extends Sd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class P0 extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ev=new mt,Kh=new Dc,hc=new Ui,dc=new G;class KS extends jt{constructor(e=new Kn,t=new P0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),hc.radius+=a,e.ray.intersectsSphere(hc)===!1)return;ev.copy(s).invert(),Kh.copy(e.ray).applyMatrix4(ev);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,g=i.attributes.position;if(d!==null){const v=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let M=v,E=x;M<E;M++){const S=d.getX(M);dc.fromBufferAttribute(g,S),tv(dc,S,f,s,e,t,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let M=v,E=x;M<E;M++)dc.fromBufferAttribute(g,M),tv(dc,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function tv(o,e,t,i,s,a,c){const u=Kh.distanceSqToPoint(o);if(u<t){const f=new G;Kh.closestPointToPoint(o,f),f.applyMatrix4(i);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class kr extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class $S extends on{constructor(e,t,i,s,a,c,u,f,d){super(e,t,i,s,a,c,u,f,d),this.isVideoTexture=!0,this.minFilter=c!==void 0?c:xn,this.magFilter=a!==void 0?a:xn,this.generateMipmaps=!1;const p=this;function g(){p.needsUpdate=!0,e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(g)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ZS extends on{constructor(e,t,i,s,a,c,u,f,d){super(e,t,i,s,a,c,u,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class L0 extends on{constructor(e,t,i,s,a,c,u,f,d,p=uo){if(p!==uo&&p!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===uo&&(i=_s),i===void 0&&p===xo&&(i=_o),super(null,s,a,c,u,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:kn,this.minFilter=f!==void 0?f:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,f=a-1,d;for(;u<=f;)if(s=Math.floor(u+(f-u)/2),d=i[s]-c,d<0)u=s+1;else if(d>0)f=s-1;else{f=s;break}if(s=f,i[s]===c)return s/(a-1);const p=i[s],v=i[s+1]-p,x=(c-p)/v;return(s+x)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),u=this.getPoint(a),f=t||(c.isVector2?new Le:new G);return f.copy(u).sub(c).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new G,s=[],a=[],c=[],u=new G,f=new mt;for(let x=0;x<=e;x++){const M=x/e;s[x]=this.getTangentAt(M,new G)}a[0]=new G,c[0]=new G;let d=Number.MAX_VALUE;const p=Math.abs(s[0].x),g=Math.abs(s[0].y),v=Math.abs(s[0].z);p<=d&&(d=p,i.set(1,0,0)),g<=d&&(d=g,i.set(0,1,0)),v<=d&&i.set(0,0,1),u.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],u),c[0].crossVectors(s[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),u.crossVectors(s[x-1],s[x]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(yt(s[x-1].dot(s[x]),-1,1));a[x].applyMatrix4(f.makeRotationAxis(u,M))}c[x].crossVectors(s[x],a[x])}if(t===!0){let x=Math.acos(yt(a[0].dot(a[e]),-1,1));x/=e,s[0].dot(u.crossVectors(a[0],a[e]))>0&&(x=-x);for(let M=1;M<=e;M++)a[M].applyMatrix4(f.makeRotationAxis(s[M],x*M)),c[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Md extends Fi{constructor(e=0,t=0,i=1,s=1,a=0,c=Math.PI*2,u=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=f}getPoint(e,t=new Le){const i=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const u=this.aStartAngle+e*a;let f=this.aX+this.xRadius*Math.cos(u),d=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=f-this.aX,x=d-this.aY;f=v*p-x*g+this.aX,d=v*g+x*p+this.aY}return i.set(f,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class JS extends Md{constructor(e,t,i,s,a,c){super(e,t,i,i,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Ed(){let o=0,e=0,t=0,i=0;function s(a,c,u,f){o=a,e=u,t=-3*a+3*c-2*u-f,i=2*a-2*c+u+f}return{initCatmullRom:function(a,c,u,f,d){s(c,u,d*(u-a),d*(f-c))},initNonuniformCatmullRom:function(a,c,u,f,d,p,g){let v=(c-a)/d-(u-a)/(d+p)+(u-c)/p,x=(u-c)/p-(f-c)/(p+g)+(f-u)/g;v*=p,x*=p,s(c,u,v,x)},calc:function(a){const c=a*a,u=c*a;return o+e*a+t*c+i*u}}}const pc=new G,jf=new Ed,qf=new Ed,Yf=new Ed;class QS extends Fi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new G){const i=t,s=this.points,a=s.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),f=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:f===0&&u===a-1&&(u=a-2,f=1);let d,p;this.closed||u>0?d=s[(u-1)%a]:(pc.subVectors(s[0],s[1]).add(s[0]),d=pc);const g=s[u%a],v=s[(u+1)%a];if(this.closed||u+2<a?p=s[(u+2)%a]:(pc.subVectors(s[a-1],s[a-2]).add(s[a-1]),p=pc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(g),x),E=Math.pow(g.distanceToSquared(v),x),S=Math.pow(v.distanceToSquared(p),x);E<1e-4&&(E=1),M<1e-4&&(M=E),S<1e-4&&(S=E),jf.initNonuniformCatmullRom(d.x,g.x,v.x,p.x,M,E,S),qf.initNonuniformCatmullRom(d.y,g.y,v.y,p.y,M,E,S),Yf.initNonuniformCatmullRom(d.z,g.z,v.z,p.z,M,E,S)}else this.curveType==="catmullrom"&&(jf.initCatmullRom(d.x,g.x,v.x,p.x,this.tension),qf.initCatmullRom(d.y,g.y,v.y,p.y,this.tension),Yf.initCatmullRom(d.z,g.z,v.z,p.z,this.tension));return i.set(jf.calc(f),qf.calc(f),Yf.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nv(o,e,t,i,s){const a=(i-e)*.5,c=(s-t)*.5,u=o*o,f=o*u;return(2*t-2*i+a+c)*f+(-3*t+3*i-2*a-c)*u+a*o+t}function eM(o,e){const t=1-o;return t*t*e}function tM(o,e){return 2*(1-o)*o*e}function nM(o,e){return o*o*e}function Ea(o,e,t,i){return eM(o,e)+tM(o,t)+nM(o,i)}function iM(o,e){const t=1-o;return t*t*t*e}function rM(o,e){const t=1-o;return 3*t*t*o*e}function sM(o,e){return 3*(1-o)*o*o*e}function oM(o,e){return o*o*o*e}function Ta(o,e,t,i,s){return iM(o,e)+rM(o,t)+sM(o,i)+oM(o,s)}class N0 extends Fi{constructor(e=new Le,t=new Le,i=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Le){const i=t,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(Ta(e,s.x,a.x,c.x,u.x),Ta(e,s.y,a.y,c.y,u.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class aM extends Fi{constructor(e=new G,t=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new G){const i=t,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(Ta(e,s.x,a.x,c.x,u.x),Ta(e,s.y,a.y,c.y,u.y),Ta(e,s.z,a.z,c.z,u.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I0 extends Fi{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lM extends Fi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D0 extends Fi{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,s=this.v0,a=this.v1,c=this.v2;return i.set(Ea(e,s.x,a.x,c.x),Ea(e,s.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cM extends Fi{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,s=this.v0,a=this.v1,c=this.v2;return i.set(Ea(e,s.x,a.x,c.x),Ea(e,s.y,a.y,c.y),Ea(e,s.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U0 extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,s=this.points,a=(s.length-1)*e,c=Math.floor(a),u=a-c,f=s[c===0?c:c-1],d=s[c],p=s[c>s.length-2?s.length-1:c+1],g=s[c>s.length-3?s.length-1:c+2];return i.set(nv(u,f.x,d.x,p.x,g.x),nv(u,f.y,d.y,p.y,g.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var $h=Object.freeze({__proto__:null,ArcCurve:JS,CatmullRomCurve3:QS,CubicBezierCurve:N0,CubicBezierCurve3:aM,EllipseCurve:Md,LineCurve:I0,LineCurve3:lM,QuadraticBezierCurve:D0,QuadraticBezierCurve3:cM,SplineCurve:U0});class uM extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $h[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const c=s[a]-i,u=this.curves[a],f=u.getLength(),d=f===0?0:1-c/f;return u.getPointAt(d,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(u);for(let d=0;d<f.length;d++){const p=f[d];i&&i.equals(p)||(t.push(p),i=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new $h[s.type]().fromJSON(s))}return this}}class iv extends uM{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new I0(this.currentPoint.clone(),new Le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const a=new D0(this.currentPoint.clone(),new Le(e,t),new Le(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,c){const u=new N0(this.currentPoint.clone(),new Le(e,t),new Le(i,s),new Le(a,c));return this.curves.push(u),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new U0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+u,t+f,i,s,a,c),this}absarc(e,t,i,s,a,c){return this.absellipse(e,t,i,i,s,a,c),this}ellipse(e,t,i,s,a,c,u,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,i,s,a,c,u,f),this}absellipse(e,t,i,s,a,c,u,f){const d=new Md(e,t,i,s,a,c,u,f);if(this.curves.length>0){const g=d.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Td extends Kn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const a=[],c=[],u=[],f=[],d=new G,p=new Le;c.push(0,0,0),u.push(0,0,1),f.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const x=i+g/t*s;d.x=e*Math.cos(x),d.y=e*Math.sin(x),c.push(d.x,d.y,d.z),u.push(0,0,1),p.x=(c[v]/e+1)/2,p.y=(c[v+1]/e+1)/2,f.push(p.x,p.y)}for(let g=1;g<=t;g++)a.push(g,g+1,0);this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wd extends Kn{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:f};const d=this;s=Math.floor(s),a=Math.floor(a);const p=[],g=[],v=[],x=[];let M=0;const E=[],S=i/2;let y=0;N(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(x,2));function N(){const w=new G,z=new G;let O=0;const I=(t-e)/i;for(let F=0;F<=a;F++){const C=[],R=F/a,k=R*(t-e)+e;for(let ee=0;ee<=s;ee++){const K=ee/s,ne=K*f+u,le=Math.sin(ne),te=Math.cos(ne);z.x=k*le,z.y=-R*i+S,z.z=k*te,g.push(z.x,z.y,z.z),w.set(le,I,te).normalize(),v.push(w.x,w.y,w.z),x.push(K,1-R),C.push(M++)}E.push(C)}for(let F=0;F<s;F++)for(let C=0;C<a;C++){const R=E[C][F],k=E[C+1][F],ee=E[C+1][F+1],K=E[C][F+1];(e>0||C!==0)&&(p.push(R,k,K),O+=3),(t>0||C!==a-1)&&(p.push(k,ee,K),O+=3)}d.addGroup(y,O,0),y+=O}function P(w){const z=M,O=new Le,I=new G;let F=0;const C=w===!0?e:t,R=w===!0?1:-1;for(let ee=1;ee<=s;ee++)g.push(0,S*R,0),v.push(0,R,0),x.push(.5,.5),M++;const k=M;for(let ee=0;ee<=s;ee++){const ne=ee/s*f+u,le=Math.cos(ne),te=Math.sin(ne);I.x=C*te,I.y=S*R,I.z=C*le,g.push(I.x,I.y,I.z),v.push(0,R,0),O.x=le*.5+.5,O.y=te*.5*R+.5,x.push(O.x,O.y),M++}for(let ee=0;ee<s;ee++){const K=z+ee,ne=k+ee;w===!0?p.push(ne,ne+1,K):p.push(ne+1,ne,K),F+=3}d.addGroup(y,F,w===!0?1:2),y+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ad extends iv{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new iv().fromJSON(s))}return this}}const fM={triangulate:function(o,e,t=2){const i=e&&e.length,s=i?e[0]*t:o.length;let a=F0(o,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let u,f,d,p,g,v,x;if(i&&(a=gM(o,e,a,t)),o.length>80*t){u=d=o[0],f=p=o[1];for(let M=t;M<s;M+=t)g=o[M],v=o[M+1],g<u&&(u=g),v<f&&(f=v),g>d&&(d=g),v>p&&(p=v);x=Math.max(d-u,p-f),x=x!==0?32767/x:0}return La(a,c,t,u,f,x,0),c}};function F0(o,e,t,i,s){let a,c;if(s===RM(o,e,t,i)>0)for(a=e;a<t;a+=i)c=rv(a,o[a],o[a+1],c);else for(a=t-i;a>=e;a-=i)c=rv(a,o[a],o[a+1],c);return c&&Uc(c,c.next)&&(Ia(c),c=c.next),c}function ys(o,e){if(!o)return o;e||(e=o);let t=o,i;do if(i=!1,!t.steiner&&(Uc(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Ia(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function La(o,e,t,i,s,a,c){if(!o)return;!c&&a&&SM(o,i,s,a);let u=o,f,d;for(;o.prev!==o.next;){if(f=o.prev,d=o.next,a?dM(o,i,s,a):hM(o)){e.push(f.i/t|0),e.push(o.i/t|0),e.push(d.i/t|0),Ia(o),o=d.next,u=d.next;continue}if(o=d,o===u){c?c===1?(o=pM(ys(o),e,t),La(o,e,t,i,s,a,2)):c===2&&mM(o,e,t,i,s,a):La(ys(o),e,t,i,s,a,1);break}}}function hM(o){const e=o.prev,t=o,i=o.next;if(Kt(e,t,i)>=0)return!1;const s=e.x,a=t.x,c=i.x,u=e.y,f=t.y,d=i.y,p=s<a?s<c?s:c:a<c?a:c,g=u<f?u<d?u:d:f<d?f:d,v=s>a?s>c?s:c:a>c?a:c,x=u>f?u>d?u:d:f>d?f:d;let M=i.next;for(;M!==e;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=x&&ao(s,u,a,f,c,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function dM(o,e,t,i){const s=o.prev,a=o,c=o.next;if(Kt(s,a,c)>=0)return!1;const u=s.x,f=a.x,d=c.x,p=s.y,g=a.y,v=c.y,x=u<f?u<d?u:d:f<d?f:d,M=p<g?p<v?p:v:g<v?g:v,E=u>f?u>d?u:d:f>d?f:d,S=p>g?p>v?p:v:g>v?g:v,y=Zh(x,M,e,t,i),N=Zh(E,S,e,t,i);let P=o.prevZ,w=o.nextZ;for(;P&&P.z>=y&&w&&w.z<=N;){if(P.x>=x&&P.x<=E&&P.y>=M&&P.y<=S&&P!==s&&P!==c&&ao(u,p,f,g,d,v,P.x,P.y)&&Kt(P.prev,P,P.next)>=0||(P=P.prevZ,w.x>=x&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==c&&ao(u,p,f,g,d,v,w.x,w.y)&&Kt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;P&&P.z>=y;){if(P.x>=x&&P.x<=E&&P.y>=M&&P.y<=S&&P!==s&&P!==c&&ao(u,p,f,g,d,v,P.x,P.y)&&Kt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;w&&w.z<=N;){if(w.x>=x&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==c&&ao(u,p,f,g,d,v,w.x,w.y)&&Kt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function pM(o,e,t){let i=o;do{const s=i.prev,a=i.next.next;!Uc(s,a)&&O0(s,i,i.next,a)&&Na(s,a)&&Na(a,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Ia(i),Ia(i.next),i=o=a),i=i.next}while(i!==o);return ys(i)}function mM(o,e,t,i,s,a){let c=o;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&TM(c,u)){let f=k0(c,u);c=ys(c,c.next),f=ys(f,f.next),La(c,e,t,i,s,a,0),La(f,e,t,i,s,a,0);return}u=u.next}c=c.next}while(c!==o)}function gM(o,e,t,i){const s=[];let a,c,u,f,d;for(a=0,c=e.length;a<c;a++)u=e[a]*i,f=a<c-1?e[a+1]*i:o.length,d=F0(o,u,f,i,!1),d===d.next&&(d.steiner=!0),s.push(EM(d));for(s.sort(vM),a=0;a<s.length;a++)t=_M(s[a],t);return t}function vM(o,e){return o.x-e.x}function _M(o,e){const t=xM(o,e);if(!t)return e;const i=k0(t,o);return ys(i,i.next),ys(t,t.next)}function xM(o,e){let t=e,i=-1/0,s;const a=o.x,c=o.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>i&&(i=v,s=t.x<t.next.x?t:t.next,v===a))return s}t=t.next}while(t!==e);if(!s)return null;const u=s,f=s.x,d=s.y;let p=1/0,g;t=s;do a>=t.x&&t.x>=f&&a!==t.x&&ao(c<d?a:i,c,f,d,c<d?i:a,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(a-t.x),Na(t,o)&&(g<p||g===p&&(t.x>s.x||t.x===s.x&&yM(s,t)))&&(s=t,p=g)),t=t.next;while(t!==u);return s}function yM(o,e){return Kt(o.prev,o,e.prev)<0&&Kt(e.next,o,o.next)<0}function SM(o,e,t,i){let s=o;do s.z===0&&(s.z=Zh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,MM(s)}function MM(o){let e,t,i,s,a,c,u,f,d=1;do{for(t=o,o=null,a=null,c=0;t;){for(c++,i=t,u=0,e=0;e<d&&(u++,i=i.nextZ,!!i);e++);for(f=d;u>0||f>0&&i;)u!==0&&(f===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,u--):(s=i,i=i.nextZ,f--),a?a.nextZ=s:o=s,s.prevZ=a,a=s;t=i}a.nextZ=null,d*=2}while(c>1);return o}function Zh(o,e,t,i,s){return o=(o-t)*s|0,e=(e-i)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function EM(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function ao(o,e,t,i,s,a,c,u){return(s-c)*(e-u)>=(o-c)*(a-u)&&(o-c)*(i-u)>=(t-c)*(e-u)&&(t-c)*(a-u)>=(s-c)*(i-u)}function TM(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!wM(o,e)&&(Na(o,e)&&Na(e,o)&&AM(o,e)&&(Kt(o.prev,o,e.prev)||Kt(o,e.prev,e))||Uc(o,e)&&Kt(o.prev,o,o.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Uc(o,e){return o.x===e.x&&o.y===e.y}function O0(o,e,t,i){const s=gc(Kt(o,e,t)),a=gc(Kt(o,e,i)),c=gc(Kt(t,i,o)),u=gc(Kt(t,i,e));return!!(s!==a&&c!==u||s===0&&mc(o,t,e)||a===0&&mc(o,i,e)||c===0&&mc(t,o,i)||u===0&&mc(t,e,i))}function mc(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function gc(o){return o>0?1:o<0?-1:0}function wM(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&O0(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function Na(o,e){return Kt(o.prev,o,o.next)<0?Kt(o,e,o.next)>=0&&Kt(o,o.prev,e)>=0:Kt(o,e,o.prev)<0||Kt(o,o.next,e)<0}function AM(o,e){let t=o,i=!1;const s=(o.x+e.x)/2,a=(o.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==o);return i}function k0(o,e){const t=new Jh(o.i,o.x,o.y),i=new Jh(e.i,e.x,e.y),s=o.next,a=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function rv(o,e,t,i){const s=new Jh(o,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ia(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Jh(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function RM(o,e,t,i){let s=0;for(let a=e,c=t-i;a<t;a+=i)s+=(o[c]-o[a])*(o[a+1]+o[c+1]),c=a;return s}class Vr{static area(e){const t=e.length;let i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return Vr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],a=[];sv(e),ov(i,e);let c=e.length;t.forEach(sv);for(let f=0;f<t.length;f++)s.push(c),c+=t[f].length,ov(i,t[f]);const u=fM.triangulate(i,s);for(let f=0;f<u.length;f+=3)a.push(u.slice(f,f+3));return a}}function sv(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function ov(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Rd extends Kn{constructor(e=new Ad([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],a=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];c(d)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(a,2)),this.computeVertexNormals();function c(u){const f=[],d=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:CM;let P,w=!1,z,O,I,F;y&&(P=y.getSpacedPoints(p),w=!0,v=!1,z=y.computeFrenetFrames(p,!1),O=new G,I=new G,F=new G),v||(S=0,x=0,M=0,E=0);const C=u.extractPoints(d);let R=C.shape;const k=C.holes;if(!Vr.isClockWise(R)){R=R.reverse();for(let ve=0,Ae=k.length;ve<Ae;ve++){const D=k[ve];Vr.isClockWise(D)&&(k[ve]=D.reverse())}}const K=Vr.triangulateShape(R,k),ne=R;for(let ve=0,Ae=k.length;ve<Ae;ve++){const D=k[ve];R=R.concat(D)}function le(ve,Ae,D){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Ae,D)}const te=R.length,ce=K.length;function H(ve,Ae,D){let Je,Ee,He;const be=ve.x-Ae.x,nt=ve.y-Ae.y,Ue=D.x-ve.x,L=D.y-ve.y,A=be*be+nt*nt,Z=be*L-nt*Ue;if(Math.abs(Z)>Number.EPSILON){const de=Math.sqrt(A),_e=Math.sqrt(Ue*Ue+L*L),pe=Ae.x-nt/de,$e=Ae.y+be/de,Ne=D.x-L/_e,Ve=D.y+Ue/_e,pt=((Ne-pe)*L-(Ve-$e)*Ue)/(be*L-nt*Ue);Je=pe+be*pt-ve.x,Ee=$e+nt*pt-ve.y;const Te=Je*Je+Ee*Ee;if(Te<=2)return new Le(Je,Ee);He=Math.sqrt(Te/2)}else{let de=!1;be>Number.EPSILON?Ue>Number.EPSILON&&(de=!0):be<-Number.EPSILON?Ue<-Number.EPSILON&&(de=!0):Math.sign(nt)===Math.sign(L)&&(de=!0),de?(Je=-nt,Ee=be,He=Math.sqrt(A)):(Je=be,Ee=nt,He=Math.sqrt(A/2))}return new Le(Je/He,Ee/He)}const fe=[];for(let ve=0,Ae=ne.length,D=Ae-1,Je=ve+1;ve<Ae;ve++,D++,Je++)D===Ae&&(D=0),Je===Ae&&(Je=0),fe[ve]=H(ne[ve],ne[D],ne[Je]);const ae=[];let B,ie=fe.concat();for(let ve=0,Ae=k.length;ve<Ae;ve++){const D=k[ve];B=[];for(let Je=0,Ee=D.length,He=Ee-1,be=Je+1;Je<Ee;Je++,He++,be++)He===Ee&&(He=0),be===Ee&&(be=0),B[Je]=H(D[Je],D[He],D[be]);ae.push(B),ie=ie.concat(B)}for(let ve=0;ve<S;ve++){const Ae=ve/S,D=x*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+E;for(let Ee=0,He=ne.length;Ee<He;Ee++){const be=le(ne[Ee],fe[Ee],Je);ge(be.x,be.y,-D)}for(let Ee=0,He=k.length;Ee<He;Ee++){const be=k[Ee];B=ae[Ee];for(let nt=0,Ue=be.length;nt<Ue;nt++){const L=le(be[nt],B[nt],Je);ge(L.x,L.y,-D)}}}const Oe=M+E;for(let ve=0;ve<te;ve++){const Ae=v?le(R[ve],ie[ve],Oe):R[ve];w?(I.copy(z.normals[0]).multiplyScalar(Ae.x),O.copy(z.binormals[0]).multiplyScalar(Ae.y),F.copy(P[0]).add(I).add(O),ge(F.x,F.y,F.z)):ge(Ae.x,Ae.y,0)}for(let ve=1;ve<=p;ve++)for(let Ae=0;Ae<te;Ae++){const D=v?le(R[Ae],ie[Ae],Oe):R[Ae];w?(I.copy(z.normals[ve]).multiplyScalar(D.x),O.copy(z.binormals[ve]).multiplyScalar(D.y),F.copy(P[ve]).add(I).add(O),ge(F.x,F.y,F.z)):ge(D.x,D.y,g/p*ve)}for(let ve=S-1;ve>=0;ve--){const Ae=ve/S,D=x*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+E;for(let Ee=0,He=ne.length;Ee<He;Ee++){const be=le(ne[Ee],fe[Ee],Je);ge(be.x,be.y,g+D)}for(let Ee=0,He=k.length;Ee<He;Ee++){const be=k[Ee];B=ae[Ee];for(let nt=0,Ue=be.length;nt<Ue;nt++){const L=le(be[nt],B[nt],Je);w?ge(L.x,L.y+P[p-1].y,P[p-1].x+D):ge(L.x,L.y,g+D)}}}Q(),he();function Q(){const ve=s.length/3;if(v){let Ae=0,D=te*Ae;for(let Je=0;Je<ce;Je++){const Ee=K[Je];Pe(Ee[2]+D,Ee[1]+D,Ee[0]+D)}Ae=p+S*2,D=te*Ae;for(let Je=0;Je<ce;Je++){const Ee=K[Je];Pe(Ee[0]+D,Ee[1]+D,Ee[2]+D)}}else{for(let Ae=0;Ae<ce;Ae++){const D=K[Ae];Pe(D[2],D[1],D[0])}for(let Ae=0;Ae<ce;Ae++){const D=K[Ae];Pe(D[0]+te*p,D[1]+te*p,D[2]+te*p)}}i.addGroup(ve,s.length/3-ve,0)}function he(){const ve=s.length/3;let Ae=0;Se(ne,Ae),Ae+=ne.length;for(let D=0,Je=k.length;D<Je;D++){const Ee=k[D];Se(Ee,Ae),Ae+=Ee.length}i.addGroup(ve,s.length/3-ve,1)}function Se(ve,Ae){let D=ve.length;for(;--D>=0;){const Je=D;let Ee=D-1;Ee<0&&(Ee=ve.length-1);for(let He=0,be=p+S*2;He<be;He++){const nt=te*He,Ue=te*(He+1),L=Ae+Je+nt,A=Ae+Ee+nt,Z=Ae+Ee+Ue,de=Ae+Je+Ue;Ce(L,A,Z,de)}}}function ge(ve,Ae,D){f.push(ve),f.push(Ae),f.push(D)}function Pe(ve,Ae,D){Ge(ve),Ge(Ae),Ge(D);const Je=s.length/3,Ee=N.generateTopUV(i,s,Je-3,Je-2,Je-1);vt(Ee[0]),vt(Ee[1]),vt(Ee[2])}function Ce(ve,Ae,D,Je){Ge(ve),Ge(Ae),Ge(Je),Ge(Ae),Ge(D),Ge(Je);const Ee=s.length/3,He=N.generateSideWallUV(i,s,Ee-6,Ee-3,Ee-2,Ee-1);vt(He[0]),vt(He[1]),vt(He[3]),vt(He[1]),vt(He[2]),vt(He[3])}function Ge(ve){s.push(f[ve*3+0]),s.push(f[ve*3+1]),s.push(f[ve*3+2])}function vt(ve){a.push(ve.x),a.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return bM(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,c=e.shapes.length;a<c;a++){const u=t[e.shapes[a]];i.push(u)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $h[s.type]().fromJSON(s)),new Rd(i,e.options)}}const CM={generateTopUV:function(o,e,t,i,s){const a=e[t*3],c=e[t*3+1],u=e[i*3],f=e[i*3+1],d=e[s*3],p=e[s*3+1];return[new Le(a,c),new Le(u,f),new Le(d,p)]},generateSideWallUV:function(o,e,t,i,s,a){const c=e[t*3],u=e[t*3+1],f=e[t*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[s*3],x=e[s*3+1],M=e[s*3+2],E=e[a*3],S=e[a*3+1],y=e[a*3+2];return Math.abs(u-p)<Math.abs(c-d)?[new Le(c,1-f),new Le(d,1-g),new Le(v,1-M),new Le(E,1-y)]:[new Le(u,1-f),new Le(p,1-g),new Le(x,1-M),new Le(S,1-y)]}};function bM(o,e,t){if(t.shapes=[],Array.isArray(o))for(let i=0,s=o.length;i<s;i++){const a=o[i];t.shapes.push(a.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ua extends Kn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),d=u+1,p=f+1,g=e/u,v=t/f,x=[],M=[],E=[],S=[];for(let y=0;y<p;y++){const N=y*v-c;for(let P=0;P<d;P++){const w=P*g-a;M.push(w,-N,0),E.push(0,0,1),S.push(P/u),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let N=0;N<u;N++){const P=N+d*y,w=N+d*(y+1),z=N+1+d*(y+1),O=N+1+d*y;x.push(P,w,O),x.push(w,z,O)}this.setIndex(x),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cd extends Kn{constructor(e=new Ad([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],a=[],c=[];let u=0,f=0;if(Array.isArray(e)===!1)d(e);else for(let p=0;p<e.length;p++)d(e[p]),this.addGroup(u,f,p),u+=f,f=0;this.setIndex(i),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2));function d(p){const g=s.length/3,v=p.extractPoints(t);let x=v.shape;const M=v.holes;Vr.isClockWise(x)===!1&&(x=x.reverse());for(let S=0,y=M.length;S<y;S++){const N=M[S];Vr.isClockWise(N)===!0&&(M[S]=N.reverse())}const E=Vr.triangulateShape(x,M);for(let S=0,y=M.length;S<y;S++){const N=M[S];x=x.concat(N)}for(let S=0,y=x.length;S<y;S++){const N=x[S];s.push(N.x,N.y,0),a.push(0,0,1),c.push(N.x,N.y)}for(let S=0,y=E.length;S<y;S++){const N=E[S],P=N[0]+g,w=N[1]+g,z=N[2]+g;i.push(P,w,z),f+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return PM(t,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];i.push(c)}return new Cd(i,e.curveSegments)}}function PM(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,i=o.length;t<i;t++){const s=o[t];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e}class LM extends Ri{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ut(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class bd extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=p0,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends bd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class NM extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IM extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function vc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function DM(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function UM(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function av(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function B0(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Fa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class FM extends Fa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xg,endingEnd:xg}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case yg:a=e,u=2*t-i;break;case Sg:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case yg:c=e,f=2*i-t;break;case Sg:c=1,f=i+s[1]-s[0];break;default:c=e-1,f=t}const d=(i-t)*.5,p=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(f-i),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,p=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,y=-v*S+2*v*E-v*M,N=(1+v)*S+(-1.5-2*v)*E+(-.5+v)*M+1,P=(-1-x)*S+(1.5+x)*E+.5*M,w=x*S-x*E;for(let z=0;z!==u;++z)a[z]=y*c[p+z]+N*c[d+z]+P*c[f+z]+w*c[g+z];return a}}class OM extends Fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,d=f-u,p=(i-t)/(s-t),g=1-p;for(let v=0;v!==u;++v)a[v]=c[d+v]*g+c[f+v]*p;return a}}class kM extends Fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vc(t,this.TimeBufferType),this.values=vc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vc(e.times,Array),values:vc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new OM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new FM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case Mf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return Mf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&DM(s))for(let u=0,f=s.length;u!==f;++u){const d=s[u];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Mf,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const d=e[u],p=e[u+1];if(d!==p&&(u!==1||d!==e[0]))if(s)f=!0;else{const g=u*i,v=g-i,x=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[v+M]||E!==t[x+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const g=u*i,v=c*i;for(let x=0;x!==i;++x)t[v+x]=t[g+x]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,d=0;d!==i;++d)t[f+d]=t[u+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=ba;class Ro extends Oi{constructor(e,t,i){super(e,t,i)}}Ro.prototype.ValueTypeName="bool";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Ca;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class z0 extends Oi{}z0.prototype.ValueTypeName="color";class Mo extends Oi{}Mo.prototype.ValueTypeName="number";class BM extends Fa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(s-t);let d=e*u;for(let p=d+u;d!==p;d+=4)Wr.slerpFlat(a,0,c,d-u,c,d,f);return a}}class Eo extends Oi{InterpolantFactoryMethodLinear(e){return new BM(this.times,this.values,this.getValueSize(),e)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends Oi{constructor(e,t,i){super(e,t,i)}}Co.prototype.ValueTypeName="string";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=Ca;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Oi{}To.prototype.ValueTypeName="vector";class zM{constructor(e="",t=-1,i=[],s=ky){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(VM(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Oi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],d=[];f.push((u+a-1)%a,u,(u+1)%a),d.push(0,1,0);const p=UM(f);f=av(f,1,p),d=av(d,1,p),!s&&f[0]===0&&(f.push(a),d.push(d[0])),c.push(new Mo(".morphTargetInfluences["+t[u].name+"]",f,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const d=e[u],p=d.name.match(a);if(p&&p.length>1){const g=p[1];let v=s[g];v||(s[g]=v=[]),v.push(d)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,v,x,M,E){if(x.length!==0){const S=[],y=[];B0(x,S,y,M),S.length!==0&&E.push(new g(v,S,y))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const v=d[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let E=0;E<v[M].morphTargets.length;E++)x[v[M].morphTargets[E]]=-1;for(const E in x){const S=[],y=[];for(let N=0;N!==v[M].morphTargets.length;++N){const P=v[M];S.push(P.time),y.push(P.morphTarget===E?1:0)}s.push(new Mo(".morphTargetInfluence["+E+"]",S,y))}f=x.length*c}else{const x=".bones["+t[g].name+"]";i(To,x+".position",v,"pos",s),i(Eo,x+".quaternion",v,"rot",s),i(To,x+".scale",v,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function HM(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return To;case"color":return z0;case"quaternion":return Eo;case"bool":case"boolean":return Ro;case"string":return Co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function VM(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=HM(o.type);if(o.times===void 0){const t=[],i=[];B0(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Br={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class GM{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,f;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=d.length;g<v;g+=2){const x=d[g],M=d[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return M}return null}}}const WM=new GM;class bo{constructor(e){this.manager=e!==void 0?e:WM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class XM extends Error{constructor(e,t){super(e),this.response=t}}class H0 extends bo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Br.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:i,onError:s});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Qi[e],g=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=v?parseInt(v):0,M=x!==0;let E=0;const S=new ReadableStream({start(y){N();function N(){g.read().then(({done:P,value:w})=>{if(P)y.close();else{E+=w.byteLength;const z=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let O=0,I=p.length;O<I;O++){const F=p[O];F.onProgress&&F.onProgress(z)}y.enqueue(w),N()}},P=>{y.error(P)})}}});return new Response(S)}else throw new XM(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(f){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),v=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(v);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{Br.add(e,d);const p=Qi[e];delete Qi[e];for(let g=0,v=p.length;g<v;g++){const x=p[g];x.onLoad&&x.onLoad(d)}}).catch(d=>{const p=Qi[e];if(p===void 0)throw this.manager.itemError(e),d;delete Qi[e];for(let g=0,v=p.length;g<v;g++){const x=p[g];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jM extends bo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Br.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Pa("img");function f(){p(),Br.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(g){p(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class V0 extends bo{constructor(e){super(e)}load(e,t,i,s){const a=new on,c=new jM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Fc extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qM extends Fc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kf=new mt,lv=new G,cv=new G;class Pd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yd,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lv.setFromMatrixPosition(e.matrixWorld),t.position.copy(lv),cv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cv),t.updateMatrixWorld(),Kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class YM extends Pd{constructor(){super(new Fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=yo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class KM extends Fc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new YM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uv=new mt,va=new G,$f=new G;class $M extends Pd{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),$f.copy(i.position),$f.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($f),i.updateMatrixWorld(),s.makeTranslation(-va.x,-va.y,-va.z),uv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uv)}}class G0 extends Fc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new $M}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ld extends w0{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ZM extends Pd{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qh extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new ZM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class JM extends bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Br.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),a.manager.itemEnd(e)}).catch(d=>{s&&s(d)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return Br.add(e,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){s&&s(d),Br.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Br.add(e,f),a.manager.itemStart(e)}}class QM extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Nd="\\[\\]\\.:\\/",eE=new RegExp("["+Nd+"]","g"),Id="[^"+Nd+"]",tE="[^"+Nd.replace("\\.","")+"]",nE=/((?:WC+[\/:])*)/.source.replace("WC",Id),iE=/(WCOD+)?/.source.replace("WCOD",tE),rE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Id),sE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Id),oE=new RegExp("^"+nE+iE+rE+sE+"$"),aE=["material","materials","bones","map"];class lE{constructor(e,t,i){const s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ft{constructor(e,t,i){this.path=t,this.parsedPath=i||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,i):new Ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eE,"")}static parseTrackName(e){const t=oE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);aE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[s];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=lE;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function fv(o,e,t,i){const s=cE(i);switch(t){case a0:return o*e;case c0:return o*e;case u0:return o*e*2;case dd:return o*e/s.components*s.byteLength;case pd:return o*e/s.components*s.byteLength;case f0:return o*e*2/s.components*s.byteLength;case md:return o*e*2/s.components*s.byteLength;case l0:return o*e*3/s.components*s.byteLength;case fi:return o*e*4/s.components*s.byteLength;case gd:return o*e*4/s.components*s.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tc:case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Eh:return Math.max(o,16)*Math.max(e,8)/4;case yh:case Mh:return Math.max(o,8)*Math.max(e,8)/2;case Th:case wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ah:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case zh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Hh:case Vh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case h0:case Gh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wh:case Xh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cE(o){switch(o){case or:case r0:return{byteLength:1,components:1};case Ra:case s0:case Da:return{byteLength:2,components:1};case fd:case hd:return{byteLength:2,components:4};case _s:case ud:case Ai:return{byteLength:4,components:1};case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W0(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function uE(o){const e=new WeakMap;function t(u,f){const d=u.array,p=u.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(f,v),o.bufferData(f,d,p),u.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,d){const p=f.array,g=f.updateRanges;if(o.bindBuffer(d,u),g.length===0)o.bufferSubData(d,0,p);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];o.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:a,update:c}}var fE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hE=`#ifdef USE_ALPHAHASH
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
#endif`,dE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vE=`#ifdef USE_AOMAP
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
#endif`,_E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xE=`#ifdef USE_BATCHING
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
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TE=`#ifdef USE_IRIDESCENCE
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
#endif`,wE=`#ifdef USE_BUMPMAP
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
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DE=`#define PI 3.141592653589793
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
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HE="gl_FragColor = linearToOutputTexel( gl_FragColor );",VE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
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
#endif`,WE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JE=`#ifdef USE_GRADIENTMAP
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
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nT=`uniform bool receiveShadow;
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
#endif`,iT=`#ifdef USE_ENVMAP
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
#endif`,rT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lT=`PhysicalMaterial material;
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
#endif`,cT=`struct PhysicalMaterial {
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
}`,uT=`
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
#endif`,fT=`#if defined( RE_IndirectDiffuse )
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yT=`#if defined( USE_POINTS_UV )
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
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`#ifdef USE_MORPHTARGETS
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
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
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
#endif`,DT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KT=`float getShadowMask() {
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
}`,$T=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,x1=`#define DISTANCE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,w1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,C1=`#define MATCAP
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
}`,b1=`#define MATCAP
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
}`,P1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,I1=`#define PHONG
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
}`,D1=`#define STANDARD
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
}`,U1=`#define STANDARD
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
}`,F1=`#define TOON
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
}`,O1=`#define TOON
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
}`,k1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,V1=`uniform float rotation;
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
}`,G1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:fE,alphahash_pars_fragment:hE,alphamap_fragment:dE,alphamap_pars_fragment:pE,alphatest_fragment:mE,alphatest_pars_fragment:gE,aomap_fragment:vE,aomap_pars_fragment:_E,batching_pars_vertex:xE,batching_vertex:yE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:TE,bumpmap_pars_fragment:wE,clipping_planes_fragment:AE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:CE,clipping_planes_vertex:bE,color_fragment:PE,color_pars_fragment:LE,color_pars_vertex:NE,color_vertex:IE,common:DE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:FE,displacementmap_pars_vertex:OE,displacementmap_vertex:kE,emissivemap_fragment:BE,emissivemap_pars_fragment:zE,colorspace_fragment:HE,colorspace_pars_fragment:VE,envmap_fragment:GE,envmap_common_pars_fragment:WE,envmap_pars_fragment:XE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:iT,envmap_vertex:qE,fog_vertex:YE,fog_pars_vertex:KE,fog_fragment:$E,fog_pars_fragment:ZE,gradientmap_pars_fragment:JE,lightmap_pars_fragment:QE,lights_lambert_fragment:eT,lights_lambert_pars_fragment:tT,lights_pars_begin:nT,lights_toon_fragment:rT,lights_toon_pars_fragment:sT,lights_phong_fragment:oT,lights_phong_pars_fragment:aT,lights_physical_fragment:lT,lights_physical_pars_fragment:cT,lights_fragment_begin:uT,lights_fragment_maps:fT,lights_fragment_end:hT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:pT,logdepthbuf_pars_vertex:mT,logdepthbuf_vertex:gT,map_fragment:vT,map_pars_fragment:_T,map_particle_fragment:xT,map_particle_pars_fragment:yT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:MT,morphinstance_vertex:ET,morphcolor_vertex:TT,morphnormal_vertex:wT,morphtarget_pars_vertex:AT,morphtarget_vertex:RT,normal_fragment_begin:CT,normal_fragment_maps:bT,normal_pars_fragment:PT,normal_pars_vertex:LT,normal_vertex:NT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:DT,clearcoat_normal_fragment_maps:UT,clearcoat_pars_fragment:FT,iridescence_pars_fragment:OT,opaque_fragment:kT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:HT,dithering_fragment:VT,dithering_pars_fragment:GT,roughnessmap_fragment:WT,roughnessmap_pars_fragment:XT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:KT,skinbase_vertex:$T,skinning_pars_vertex:ZT,skinning_vertex:JT,skinnormal_vertex:QT,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:r1,transmission_pars_fragment:s1,uv_pars_fragment:o1,uv_pars_vertex:a1,uv_vertex:l1,worldpos_vertex:c1,background_vert:u1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:d1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:x1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:M1,linedashed_frag:E1,meshbasic_vert:T1,meshbasic_frag:w1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:C1,meshmatcap_frag:b1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:N1,meshphong_frag:I1,meshphysical_vert:D1,meshphysical_frag:U1,meshtoon_vert:F1,meshtoon_frag:O1,points_vert:k1,points_frag:B1,shadow_vert:z1,shadow_frag:H1,sprite_vert:V1,sprite_frag:G1},Fe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ii={basic:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Un([Fe.points,Fe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Un([Fe.common,Fe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Un([Fe.sprite,Fe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Un([Fe.common,Fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Un([Fe.lights,Fe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ii.physical={uniforms:Un([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const _c={r:0,b:0,g:0},fs=new On,W1=new mt;function X1(o,e,t,i,s,a,c){const u=new ut(0);let f=a===!0?0:1,d,p,g=null,v=0,x=null;function M(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function E(P){let w=!1;const z=M(P);z===null?y(u,f):z&&z.isColor&&(y(z,1),w=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(P,w){const z=M(w);z&&(z.isCubeTexture||z.mapping===Ic)?(p===void 0&&(p=new Bt(new Ao(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:So(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),fs.copy(w.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),p.material.uniforms.envMap.value=z,p.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(fs)),p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==kt,(g!==z||v!==z.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,v=z.version,x=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new Bt(new Ua(2,2),new Gr({name:"BackgroundMaterial",uniforms:So(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(z.colorSpace)!==kt,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||v!==z.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,g=z,v=z.version,x=o.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function y(P,w){P.getRGB(_c,T0(o)),i.buffers.color.setClear(_c.r,_c.g,_c.b,w,c)}function N(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(P,w=1){u.set(P),f=w,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,y(u,f)},render:E,addToRenderList:S,dispose:N}}function j1(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=v(null);let a=s,c=!1;function u(R,k,ee,K,ne){let le=!1;const te=g(K,ee,k);a!==te&&(a=te,d(a.object)),le=x(R,K,ee,ne),le&&M(R,K,ee,ne),ne!==null&&e.update(ne,o.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,w(R,k,ee,K),ne!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function f(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function p(R){return o.deleteVertexArray(R)}function g(R,k,ee){const K=ee.wireframe===!0;let ne=i[R.id];ne===void 0&&(ne={},i[R.id]=ne);let le=ne[k.id];le===void 0&&(le={},ne[k.id]=le);let te=le[K];return te===void 0&&(te=v(f()),le[K]=te),te}function v(R){const k=[],ee=[],K=[];for(let ne=0;ne<t;ne++)k[ne]=0,ee[ne]=0,K[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:K,object:R,attributes:{},index:null}}function x(R,k,ee,K){const ne=a.attributes,le=k.attributes;let te=0;const ce=ee.getAttributes();for(const H in ce)if(ce[H].location>=0){const ae=ne[H];let B=le[H];if(B===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),ae===void 0||ae.attribute!==B||B&&ae.data!==B.data)return!0;te++}return a.attributesNum!==te||a.index!==K}function M(R,k,ee,K){const ne={},le=k.attributes;let te=0;const ce=ee.getAttributes();for(const H in ce)if(ce[H].location>=0){let ae=le[H];ae===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const B={};B.attribute=ae,ae&&ae.data&&(B.data=ae.data),ne[H]=B,te++}a.attributes=ne,a.attributesNum=te,a.index=K}function E(){const R=a.newAttributes;for(let k=0,ee=R.length;k<ee;k++)R[k]=0}function S(R){y(R,0)}function y(R,k){const ee=a.newAttributes,K=a.enabledAttributes,ne=a.attributeDivisors;ee[R]=1,K[R]===0&&(o.enableVertexAttribArray(R),K[R]=1),ne[R]!==k&&(o.vertexAttribDivisor(R,k),ne[R]=k)}function N(){const R=a.newAttributes,k=a.enabledAttributes;for(let ee=0,K=k.length;ee<K;ee++)k[ee]!==R[ee]&&(o.disableVertexAttribArray(ee),k[ee]=0)}function P(R,k,ee,K,ne,le,te){te===!0?o.vertexAttribIPointer(R,k,ee,ne,le):o.vertexAttribPointer(R,k,ee,K,ne,le)}function w(R,k,ee,K){E();const ne=K.attributes,le=ee.getAttributes(),te=k.defaultAttributeValues;for(const ce in le){const H=le[ce];if(H.location>=0){let fe=ne[ce];if(fe===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const ae=fe.normalized,B=fe.itemSize,ie=e.get(fe);if(ie===void 0)continue;const Oe=ie.buffer,Q=ie.type,he=ie.bytesPerElement,Se=Q===o.INT||Q===o.UNSIGNED_INT||fe.gpuType===ud;if(fe.isInterleavedBufferAttribute){const ge=fe.data,Pe=ge.stride,Ce=fe.offset;if(ge.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)y(H.location+Ge,ge.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)S(H.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let Ge=0;Ge<H.locationSize;Ge++)P(H.location+Ge,B/H.locationSize,Q,ae,Pe*he,(Ce+B/H.locationSize*Ge)*he,Se)}else{if(fe.isInstancedBufferAttribute){for(let ge=0;ge<H.locationSize;ge++)y(H.location+ge,fe.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ge=0;ge<H.locationSize;ge++)S(H.location+ge);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let ge=0;ge<H.locationSize;ge++)P(H.location+ge,B/H.locationSize,Q,ae,B*he,B/H.locationSize*ge*he,Se)}}else if(te!==void 0){const ae=te[ce];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(H.location,ae);break;case 3:o.vertexAttrib3fv(H.location,ae);break;case 4:o.vertexAttrib4fv(H.location,ae);break;default:o.vertexAttrib1fv(H.location,ae)}}}}N()}function z(){F();for(const R in i){const k=i[R];for(const ee in k){const K=k[ee];for(const ne in K)p(K[ne].object),delete K[ne];delete k[ee]}delete i[R]}}function O(R){if(i[R.id]===void 0)return;const k=i[R.id];for(const ee in k){const K=k[ee];for(const ne in K)p(K[ne].object),delete K[ne];delete k[ee]}delete i[R.id]}function I(R){for(const k in i){const ee=i[k];if(ee[R.id]===void 0)continue;const K=ee[R.id];for(const ne in K)p(K[ne].object),delete K[ne];delete ee[R.id]}}function F(){C(),c=!0,a!==s&&(a=s,d(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:S,disableUnusedAttributes:N}}function q1(o,e,t){let i;function s(d){i=d}function a(d,p){o.drawArrays(i,d,p),t.update(p,i,1)}function c(d,p,g){g!==0&&(o.drawArraysInstanced(i,d,p,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,g);let x=0;for(let M=0;M<g;M++)x+=p[M];t.update(x,i,1)}function f(d,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)c(d[M],p[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*v[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Y1(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==fi&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const F=I===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==or&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ai&&!F)}function f(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:w,vertexTextures:z,maxSamples:O}}function K1(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new ps,u=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||i!==0||s;return s=v,i=g.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?p(null):d();else{const N=a?0:i,P=N*4;let w=y.clippingState||null;f.value=w,w=p(M,v,P,x);for(let z=0;z!==P;++z)w[z]=t[z];y.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,v,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=f.value,M!==!0||S===null){const y=x+E*4,N=v.matrixWorldInverse;u.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,w=x;P!==E;++P,w+=4)c.copy(g[P]).applyMatrix4(N,u),c.normal.toArray(S,w),S[w+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function $1(o){let e=new WeakMap;function t(c,u){return u===_h?c.mapping=mo:u===xh&&(c.mapping=go),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===_h||u===xh)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new OS(f.height);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const lo=4,hv=[.125,.215,.35,.446,.526,.582],vs=20,Zf=new Ld,dv=new ut;let Jf=null,Qf=0,eh=0,th=!1;const ms=(1+Math.sqrt(5))/2,so=1/ms,pv=[new G(-ms,so,0),new G(ms,so,0),new G(-so,0,ms),new G(so,0,ms),new G(0,ms,-so),new G(0,ms,so),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class mv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Jf=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jf,Qf,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jf=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Da,format:fi,colorSpace:zn,depthBuffer:!1},s=gv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(a)),this._blurMaterial=J1(a,e,t)}return s}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Zf)}_sceneToCubeUV(e,t,i,s){const u=new Fn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(dv),p.toneMapping=Hr,p.autoClear=!1;const x=new hi({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new Bt(new Ao,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(dv),E=!0);for(let y=0;y<6;y++){const N=y%3;N===0?(u.up.set(0,f[y],0),u.lookAt(d[y],0,0)):N===1?(u.up.set(0,0,f[y]),u.lookAt(0,d[y],0)):(u.up.set(0,f[y],0),u.lookAt(0,0,d[y]));const P=this._cubeSize;xc(s,N*P,y>2?P:0,P,P),p.setRenderTarget(s),E&&p.render(M,u),p.render(e,u)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===mo||e.mapping===go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Bt(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;xc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Zf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=pv[(s-a-1)%pv.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Bt(this._lodPlanes[s],d),v=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*vs-1),E=a/M,S=isFinite(a)?1+Math.floor(p*E):vs;S>vs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const y=[];let N=0;for(let I=0;I<vs;++I){const F=I/E,C=Math.exp(-F*F/2);y.push(C),I===0?N+=C:I<S&&(N+=2*C)}for(let I=0;I<y.length;I++)y[I]=y[I]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-i;const w=this._sizeLods[s],z=3*w*(s>P-lo?s-P+lo:0),O=4*(this._cubeSize-w);xc(t,z,O,3*w,2*w),f.setRenderTarget(t),f.render(g,Zf)}}function Z1(o){const e=[],t=[],i=[];let s=o;const a=o-lo+1+hv.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-lo?f=hv[c-o+lo-1]:c===0&&(f=0),i.push(f);const d=1/(u-2),p=-d,g=1+d,v=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,M=6,E=3,S=2,y=1,N=new Float32Array(E*M*x),P=new Float32Array(S*M*x),w=new Float32Array(y*M*x);for(let O=0;O<x;O++){const I=O%3*2/3-1,F=O>2?0:-1,C=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];N.set(C,E*M*O),P.set(v,S*M*O);const R=[O,O,O,O,O,O];w.set(R,y*M*O)}const z=new Kn;z.setAttribute("position",new Bn(N,E)),z.setAttribute("uv",new Bn(P,S)),z.setAttribute("faceIndex",new Bn(w,y)),e.push(z),s>lo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gv(o,e,t){const i=new xs(o,e,t);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function J1(o,e,t){const i=new Float32Array(vs),s=new G(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function vv(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function _v(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Dd(){return`

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
	`}function Q1(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===_h||f===xh,p=f===mo||f===go;if(d||p){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new mv(o)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return d&&x&&x.height>0||p&&x&&s(x)?(t===null&&(t=new mv(o)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function ew(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tw(o,e,t,i){const s={},a=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete s[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const x in v)e.update(v[x],o.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const N=x.array;E=x.version;for(let P=0,w=N.length;P<w;P+=3){const z=N[P+0],O=N[P+1],I=N[P+2];v.push(z,O,O,I,I,z)}}else if(M!==void 0){const N=M.array;E=M.version;for(let P=0,w=N.length/3-1;P<w;P+=3){const z=P+0,O=P+1,I=P+2;v.push(z,O,O,I,I,z)}}else return;const S=new(v0(v)?E0:M0)(v,1);S.version=E;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function p(g){const v=a.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:p}}function nw(o,e,t){let i;function s(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function f(v,x){o.drawElements(i,x,a,v*c),t.update(x,i,1)}function d(v,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,v*c,M),t.update(x,i,M))}function p(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function g(v,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)d(v[y]/c,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,a,v,0,E,0,M);let y=0;for(let N=0;N<M;N++)y+=x[N]*E[N];t.update(y,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function iw(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rw(o,e,t){const i=new WeakMap,s=new It;function a(c,u,f){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=i.get(u);if(v===void 0||v.count!==g){let R=function(){F.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),S===!0&&(w=3);let z=u.attributes.position.count*w,O=1;z>e.maxTextureSize&&(O=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*O*4*g),F=new x0(I,z,O,g);F.type=Ai,F.needsUpdate=!0;const C=w*4;for(let k=0;k<g;k++){const ee=y[k],K=N[k],ne=P[k],le=z*O*4*k;for(let te=0;te<ee.count;te++){const ce=te*C;M===!0&&(s.fromBufferAttribute(ee,te),I[le+ce+0]=s.x,I[le+ce+1]=s.y,I[le+ce+2]=s.z,I[le+ce+3]=0),E===!0&&(s.fromBufferAttribute(K,te),I[le+ce+4]=s.x,I[le+ce+5]=s.y,I[le+ce+6]=s.z,I[le+ce+7]=0),S===!0&&(s.fromBufferAttribute(ne,te),I[le+ce+8]=s.x,I[le+ce+9]=s.y,I[le+ce+10]=s.z,I[le+ce+11]=ne.itemSize===4?s.w:1)}}v={count:g,texture:F,size:new Le(z,O)},i.set(u,v),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",E),f.getUniforms().setValue(o,"morphTargetInfluences",d)}f.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:a}}function sw(o,e,t,i){let s=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,g=e.get(f,p);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const X0=new on,xv=new L0(1,1),j0=new x0,q0=new SS,Y0=new A0,yv=[],Sv=[],Mv=new Float32Array(16),Ev=new Float32Array(9),Tv=new Float32Array(4);function Po(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=yv[s];if(a===void 0&&(a=new Float32Array(s),yv[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function un(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function fn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Oc(o,e){let t=Sv[e];t===void 0&&(t=new Int32Array(e),Sv[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function ow(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function aw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2fv(this.addr,e),fn(t,e)}}function lw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;o.uniform3fv(this.addr,e),fn(t,e)}}function cw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4fv(this.addr,e),fn(t,e)}}function uw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Tv.set(i),o.uniformMatrix2fv(this.addr,!1,Tv),fn(t,i)}}function fw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Ev.set(i),o.uniformMatrix3fv(this.addr,!1,Ev),fn(t,i)}}function hw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;Mv.set(i),o.uniformMatrix4fv(this.addr,!1,Mv),fn(t,i)}}function dw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function pw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2iv(this.addr,e),fn(t,e)}}function mw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3iv(this.addr,e),fn(t,e)}}function gw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4iv(this.addr,e),fn(t,e)}}function vw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function _w(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2uiv(this.addr,e),fn(t,e)}}function xw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3uiv(this.addr,e),fn(t,e)}}function yw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4uiv(this.addr,e),fn(t,e)}}function Sw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(xv.compareFunction=m0,a=xv):a=X0,t.setTexture2D(e||a,s)}function Mw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||q0,s)}function Ew(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Y0,s)}function Tw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||j0,s)}function ww(o){switch(o){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return dw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return vw;case 36294:return _w;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}function Aw(o,e){o.uniform1fv(this.addr,e)}function Rw(o,e){const t=Po(e,this.size,2);o.uniform2fv(this.addr,t)}function Cw(o,e){const t=Po(e,this.size,3);o.uniform3fv(this.addr,t)}function bw(o,e){const t=Po(e,this.size,4);o.uniform4fv(this.addr,t)}function Pw(o,e){const t=Po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Lw(o,e){const t=Po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Nw(o,e){const t=Po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Iw(o,e){o.uniform1iv(this.addr,e)}function Dw(o,e){o.uniform2iv(this.addr,e)}function Uw(o,e){o.uniform3iv(this.addr,e)}function Fw(o,e){o.uniform4iv(this.addr,e)}function Ow(o,e){o.uniform1uiv(this.addr,e)}function kw(o,e){o.uniform2uiv(this.addr,e)}function Bw(o,e){o.uniform3uiv(this.addr,e)}function zw(o,e){o.uniform4uiv(this.addr,e)}function Hw(o,e,t){const i=this.cache,s=e.length,a=Oc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||X0,a[c])}function Vw(o,e,t){const i=this.cache,s=e.length,a=Oc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||q0,a[c])}function Gw(o,e,t){const i=this.cache,s=e.length,a=Oc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Y0,a[c])}function Ww(o,e,t){const i=this.cache,s=e.length,a=Oc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||j0,a[c])}function Xw(o){switch(o){case 5126:return Aw;case 35664:return Rw;case 35665:return Cw;case 35666:return bw;case 35674:return Pw;case 35675:return Lw;case 35676:return Nw;case 5124:case 35670:return Iw;case 35667:case 35671:return Dw;case 35668:case 35672:return Uw;case 35669:case 35673:return Fw;case 5125:return Ow;case 36294:return kw;case 36295:return Bw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}class jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ww(t.type)}}class qw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xw(t.type)}}class Yw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function wv(o,e){o.seq.push(e),o.map[e.id]=e}function Kw(o,e,t){const i=o.name,s=i.length;for(nh.lastIndex=0;;){const a=nh.exec(i),c=nh.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&c+2===s){wv(t,d===void 0?new jw(u,o,e):new qw(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new Yw(u),wv(t,g)),t=g}}}class Rc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);Kw(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Av(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const $w=37297;let Zw=0;function Jw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Rv=new gt;function Qw(o){Rt._getMatrix(Rv,Rt.workingColorSpace,o);const e=`mat3( ${Rv.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(o)){case bc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Cv(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jw(o.getShaderSource(e),c)}else return s}function eA(o,e){const t=Qw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tA(o,e){let t;switch(e){case Ly:t="Linear";break;case Ny:t="Reinhard";break;case Iy:t="Cineon";break;case t0:t="ACESFilmic";break;case Uy:t="AgX";break;case Fy:t="Neutral";break;case Dy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yc=new G;function nA(){Rt.getLuminanceCoefficients(yc);const o=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function rA(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sA(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function ya(o){return o!==""}function bv(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(o){return o.replace(oA,lA)}const aA=new Map;function lA(o,e){let t=_t[e];if(t===void 0){const i=aA.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ed(t)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(o){return o.replace(cA,uA)}function uA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Nv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Qv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function pA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case e0:e="ENVMAP_BLENDING_MULTIPLY";break;case by:e="ENVMAP_BLENDING_MIX";break;case Py:e="ENVMAP_BLENDING_ADD";break}return e}function mA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function gA(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=fA(t),d=hA(t),p=dA(t),g=pA(t),v=mA(t),x=iA(t),M=rA(a),E=s.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),y.length>0&&(y+=`
`)):(S=[Nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),y=[Nv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?_t.tonemapping_pars_fragment:"",t.toneMapping!==Hr?tA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,eA("linearToOutputTexel",t.outputColorSpace),nA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),c=ed(c),c=bv(c,t),c=Pv(c,t),u=ed(u),u=bv(u,t),u=Pv(u,t),c=Lv(c),u=Lv(u),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=N+S+c,w=N+y+u,z=Av(s,s.VERTEX_SHADER,P),O=Av(s,s.FRAGMENT_SHADER,w);s.attachShader(E,z),s.attachShader(E,O),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(k){if(o.debug.checkShaderErrors){const ee=s.getProgramInfoLog(E).trim(),K=s.getShaderInfoLog(z).trim(),ne=s.getShaderInfoLog(O).trim();let le=!0,te=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(le=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,z,O);else{const ce=Cv(s,z,"vertex"),H=Cv(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ee+`
`+ce+`
`+H)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(K===""||ne==="")&&(te=!1);te&&(k.diagnostics={runnable:le,programLog:ee,vertexShader:{log:K,prefix:S},fragmentShader:{log:ne,prefix:y}})}s.deleteShader(z),s.deleteShader(O),F=new Rc(s,E),C=sA(s,E)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,$w)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=O,this}let vA=0;class _A{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xA(e),t.set(e,i)),i}}class xA{constructor(e){this.id=vA++,this.code=e,this.usedTimes=0}}function yA(o,e,t,i,s,a,c){const u=new y0,f=new _A,d=new Set,p=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,R,k,ee,K){const ne=ee.fog,le=K.geometry,te=C.isMeshStandardMaterial?ee.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||te),H=ce&&ce.mapping===Ic?ce.image.height:null,fe=M[C.type];C.precision!==null&&(x=s.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const ae=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,B=ae!==void 0?ae.length:0;let ie=0;le.morphAttributes.position!==void 0&&(ie=1),le.morphAttributes.normal!==void 0&&(ie=2),le.morphAttributes.color!==void 0&&(ie=3);let Oe,Q,he,Se;if(fe){const Ct=Ii[fe];Oe=Ct.vertexShader,Q=Ct.fragmentShader}else Oe=C.vertexShader,Q=C.fragmentShader,f.update(C),he=f.getVertexShaderID(C),Se=f.getFragmentShaderID(C);const ge=o.getRenderTarget(),Pe=o.state.buffers.depth.getReversed(),Ce=K.isInstancedMesh===!0,Ge=K.isBatchedMesh===!0,vt=!!C.map,ve=!!C.matcap,Ae=!!ce,D=!!C.aoMap,Je=!!C.lightMap,Ee=!!C.bumpMap,He=!!C.normalMap,be=!!C.displacementMap,nt=!!C.emissiveMap,Ue=!!C.metalnessMap,L=!!C.roughnessMap,A=C.anisotropy>0,Z=C.clearcoat>0,de=C.dispersion>0,_e=C.iridescence>0,pe=C.sheen>0,$e=C.transmission>0,Ne=A&&!!C.anisotropyMap,Ve=Z&&!!C.clearcoatMap,pt=Z&&!!C.clearcoatNormalMap,Te=Z&&!!C.clearcoatRoughnessMap,qe=_e&&!!C.iridescenceMap,it=_e&&!!C.iridescenceThicknessMap,ot=pe&&!!C.sheenColorMap,Ye=pe&&!!C.sheenRoughnessMap,St=!!C.specularMap,ft=!!C.specularColorMap,Dt=!!C.specularIntensityMap,q=$e&&!!C.transmissionMap,Ie=$e&&!!C.thicknessMap,ue=!!C.gradientMap,me=!!C.alphaMap,Be=C.alphaTest>0,ke=!!C.alphaHash,ht=!!C.extensions;let Ht=Hr;C.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ht=o.toneMapping);const an={shaderID:fe,shaderType:C.type,shaderName:C.name,vertexShader:Oe,fragmentShader:Q,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Ge,batchingColor:Ge&&K._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&K.instanceColor!==null,instancingMorph:Ce&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:zn,alphaToCoverage:!!C.alphaToCoverage,map:vt,matcap:ve,envMap:Ae,envMapMode:Ae&&ce.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Je,bumpMap:Ee,normalMap:He,displacementMap:v&&be,emissiveMap:nt,normalMapObjectSpace:He&&C.normalMapType===Vy,normalMapTangentSpace:He&&C.normalMapType===p0,metalnessMap:Ue,roughnessMap:L,anisotropy:A,anisotropyMap:Ne,clearcoat:Z,clearcoatMap:Ve,clearcoatNormalMap:pt,clearcoatRoughnessMap:Te,dispersion:de,iridescence:_e,iridescenceMap:qe,iridescenceThicknessMap:it,sheen:pe,sheenColorMap:ot,sheenRoughnessMap:Ye,specularMap:St,specularColorMap:ft,specularIntensityMap:Dt,transmission:$e,transmissionMap:q,thicknessMap:Ie,gradientMap:ue,opaque:C.transparent===!1&&C.blending===co&&C.alphaToCoverage===!1,alphaMap:me,alphaTest:Be,alphaHash:ke,combine:C.combine,mapUv:vt&&E(C.map.channel),aoMapUv:D&&E(C.aoMap.channel),lightMapUv:Je&&E(C.lightMap.channel),bumpMapUv:Ee&&E(C.bumpMap.channel),normalMapUv:He&&E(C.normalMap.channel),displacementMapUv:be&&E(C.displacementMap.channel),emissiveMapUv:nt&&E(C.emissiveMap.channel),metalnessMapUv:Ue&&E(C.metalnessMap.channel),roughnessMapUv:L&&E(C.roughnessMap.channel),anisotropyMapUv:Ne&&E(C.anisotropyMap.channel),clearcoatMapUv:Ve&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(C.sheenRoughnessMap.channel),specularMapUv:St&&E(C.specularMap.channel),specularColorMapUv:ft&&E(C.specularColorMap.channel),specularIntensityMapUv:Dt&&E(C.specularIntensityMap.channel),transmissionMapUv:q&&E(C.transmissionMap.channel),thicknessMapUv:Ie&&E(C.thicknessMap.channel),alphaMapUv:me&&E(C.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(He||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!le.attributes.uv&&(vt||me),fog:!!ne,useFog:C.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Pe,skinning:K.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ht,decodeVideoTexture:vt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===kt,decodeVideoTextureEmissive:nt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===kt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ni,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ht&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&C.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return an.vertexUv1s=d.has(1),an.vertexUv2s=d.has(2),an.vertexUv3s=d.has(3),d.clear(),an}function y(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)R.push(k),R.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(N(R,C),P(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function N(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function P(C,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),C.push(u.mask)}function w(C){const R=M[C.type];let k;if(R){const ee=Ii[R];k=IS.clone(ee.uniforms)}else k=C.uniforms;return k}function z(C,R){let k;for(let ee=0,K=p.length;ee<K;ee++){const ne=p[ee];if(ne.cacheKey===R){k=ne,++k.usedTimes;break}}return k===void 0&&(k=new gA(o,R,C,a),p.push(k)),k}function O(C){if(--C.usedTimes===0){const R=p.indexOf(C);p[R]=p[p.length-1],p.pop(),C.destroy()}}function I(C){f.remove(C)}function F(){f.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:w,acquireProgram:z,releaseProgram:O,releaseShaderCache:I,programs:p,dispose:F}}function SA(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function MA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Iv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Dv(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,v,x,M,E,S){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function u(g,v,x,M,E,S){const y=c(g,v,x,M,E,S);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):t.push(y)}function f(g,v,x,M,E,S){const y=c(g,v,x,M,E,S);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function d(g,v){t.length>1&&t.sort(g||MA),i.length>1&&i.sort(v||Iv),s.length>1&&s.sort(v||Iv)}function p(){for(let g=e,v=o.length;g<v;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:p,sort:d}}function EA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new Dv,o.set(i,[c])):s>=a.length?(c=new Dv,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function TA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ut};break;case"SpotLight":t={position:new G,direction:new G,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=t,t}}}function wA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let AA=0;function RA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CA(o){const e=new TA,t=wA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new G);const s=new G,a=new mt,c=new mt;function u(d){let p=0,g=0,v=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,N=0,P=0,w=0,z=0,O=0,I=0;d.sort(RA);for(let C=0,R=d.length;C<R;C++){const k=d[C],ee=k.color,K=k.intensity,ne=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=ee.r*K,g+=ee.g*K,v+=ee.b*K;else if(k.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(k.sh.coefficients[te],K);I++}else if(k.isDirectionalLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,H=t.get(k);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,i.directionalShadow[x]=H,i.directionalShadowMap[x]=le,i.directionalShadowMatrix[x]=k.shadow.matrix,N++}i.directional[x]=te,x++}else if(k.isSpotLight){const te=e.get(k);te.position.setFromMatrixPosition(k.matrixWorld),te.color.copy(ee).multiplyScalar(K),te.distance=ne,te.coneCos=Math.cos(k.angle),te.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),te.decay=k.decay,i.spot[E]=te;const ce=k.shadow;if(k.map&&(i.spotLightMap[z]=k.map,z++,ce.updateMatrices(k),k.castShadow&&O++),i.spotLightMatrix[E]=ce.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=le,w++}E++}else if(k.isRectAreaLight){const te=e.get(k);te.color.copy(ee).multiplyScalar(K),te.halfWidth.set(k.width*.5,0,0),te.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=te,S++}else if(k.isPointLight){const te=e.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity),te.distance=k.distance,te.decay=k.decay,k.castShadow){const ce=k.shadow,H=t.get(k);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,i.pointShadow[M]=H,i.pointShadowMap[M]=le,i.pointShadowMatrix[M]=k.shadow.matrix,P++}i.point[M]=te,M++}else if(k.isHemisphereLight){const te=e.get(k);te.skyColor.copy(k.color).multiplyScalar(K),te.groundColor.copy(k.groundColor).multiplyScalar(K),i.hemi[y]=te,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=v;const F=i.hash;(F.directionalLength!==x||F.pointLength!==M||F.spotLength!==E||F.rectAreaLength!==S||F.hemiLength!==y||F.numDirectionalShadows!==N||F.numPointShadows!==P||F.numSpotShadows!==w||F.numSpotMaps!==z||F.numLightProbes!==I)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=N,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=w+z-O,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=I,F.directionalLength=x,F.pointLength=M,F.spotLength=E,F.rectAreaLength=S,F.hemiLength=y,F.numDirectionalShadows=N,F.numPointShadows=P,F.numSpotShadows=w,F.numSpotMaps=z,F.numLightProbes=I,i.version=AA++)}function f(d,p){let g=0,v=0,x=0,M=0,E=0;const S=p.matrixWorldInverse;for(let y=0,N=d.length;y<N;y++){const P=d[y];if(P.isDirectionalLight){const w=i.directional[g];w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),g++}else if(P.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),c.identity(),a.copy(P.matrixWorld),a.premultiply(S),c.extractRotation(a),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const w=i.point[v];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const w=i.hemi[E];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(S),E++}}}return{setup:u,setupView:f,state:i}}function Uv(o){const e=new CA(o),t=[],i=[];function s(p){d.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function bA(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new Uv(o),e.set(s,[u])):a>=c.length?(u=new Uv(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
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
}`;function NA(o,e,t){let i=new yd;const s=new Le,a=new Le,c=new It,u=new NM({depthPacking:Hy}),f=new IM,d={},p=t.maxTextureSize,g={[sr]:Yn,[Yn]:sr,[ni]:ni},v=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:PA,fragmentShader:LA}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Kn;M.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Bt(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jv;let y=this.type;this.render=function(O,I,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(zr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const K=y!==er&&this.type===er,ne=y===er&&this.type!==er;for(let le=0,te=O.length;le<te;le++){const ce=O[le],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const fe=H.getFrameExtents();if(s.multiply(fe),a.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/fe.x),s.x=a.x*fe.x,H.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/fe.y),s.y=a.y*fe.y,H.mapSize.y=a.y)),H.map===null||K===!0||ne===!0){const B=this.type!==er?{minFilter:kn,magFilter:kn}:{};H.map!==null&&H.map.dispose(),H.map=new xs(s.x,s.y,B),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const ae=H.getViewportCount();for(let B=0;B<ae;B++){const ie=H.getViewport(B);c.set(a.x*ie.x,a.y*ie.y,a.x*ie.z,a.y*ie.w),ee.viewport(c),H.updateMatrices(ce,B),i=H.getFrustum(),w(I,F,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===er&&N(H,F),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(C,R,k)};function N(O,I){const F=e.update(E);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new xs(s.x,s.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(I,null,F,v,E,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(I,null,F,x,E,null)}function P(O,I,F,C){let R=null;const k=F.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=F.isPointLight===!0?f:u,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ee=R.uuid,K=I.uuid;let ne=d[ee];ne===void 0&&(ne={},d[ee]=ne);let le=ne[K];le===void 0&&(le=R.clone(),ne[K]=le,I.addEventListener("dispose",z)),R=le}if(R.visible=I.visible,R.wireframe=I.wireframe,C===er?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:g[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=o.properties.get(R);ee.light=F}return R}function w(O,I,F,C,R){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===er)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,O.matrixWorld);const K=e.update(O),ne=O.material;if(Array.isArray(ne)){const le=K.groups;for(let te=0,ce=le.length;te<ce;te++){const H=le[te],fe=ne[H.materialIndex];if(fe&&fe.visible){const ae=P(O,fe,C,R);O.onBeforeShadow(o,O,I,F,K,ae,H),o.renderBufferDirect(F,null,K,ae,O,H),O.onAfterShadow(o,O,I,F,K,ae,H)}}}else if(ne.visible){const le=P(O,ne,C,R);O.onBeforeShadow(o,O,I,F,K,le,null),o.renderBufferDirect(F,null,K,le,O,null),O.onAfterShadow(o,O,I,F,K,le,null)}}const ee=O.children;for(let K=0,ne=ee.length;K<ne;K++)w(ee[K],I,F,C,R)}function z(O){O.target.removeEventListener("dispose",z);for(const F in d){const C=d[F],R=O.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const IA={[fh]:hh,[dh]:gh,[ph]:vh,[po]:mh,[hh]:fh,[gh]:dh,[vh]:ph,[mh]:po};function DA(o,e){function t(){let q=!1;const Ie=new It;let ue=null;const me=new It(0,0,0,0);return{setMask:function(Be){ue!==Be&&!q&&(o.colorMask(Be,Be,Be,Be),ue=Be)},setLocked:function(Be){q=Be},setClear:function(Be,ke,ht,Ht,an){an===!0&&(Be*=Ht,ke*=Ht,ht*=Ht),Ie.set(Be,ke,ht,Ht),me.equals(Ie)===!1&&(o.clearColor(Be,ke,ht,Ht),me.copy(Ie))},reset:function(){q=!1,ue=null,me.set(-1,0,0,0)}}}function i(){let q=!1,Ie=!1,ue=null,me=null,Be=null;return{setReversed:function(ke){if(Ie!==ke){const ht=e.get("EXT_clip_control");Ie?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT);const Ht=Be;Be=null,this.setClear(Ht)}Ie=ke},getReversed:function(){return Ie},setTest:function(ke){ke?ge(o.DEPTH_TEST):Pe(o.DEPTH_TEST)},setMask:function(ke){ue!==ke&&!q&&(o.depthMask(ke),ue=ke)},setFunc:function(ke){if(Ie&&(ke=IA[ke]),me!==ke){switch(ke){case fh:o.depthFunc(o.NEVER);break;case hh:o.depthFunc(o.ALWAYS);break;case dh:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case ph:o.depthFunc(o.EQUAL);break;case mh:o.depthFunc(o.GEQUAL);break;case gh:o.depthFunc(o.GREATER);break;case vh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}me=ke}},setLocked:function(ke){q=ke},setClear:function(ke){Be!==ke&&(Ie&&(ke=1-ke),o.clearDepth(ke),Be=ke)},reset:function(){q=!1,ue=null,me=null,Be=null,Ie=!1}}}function s(){let q=!1,Ie=null,ue=null,me=null,Be=null,ke=null,ht=null,Ht=null,an=null;return{setTest:function(Ct){q||(Ct?ge(o.STENCIL_TEST):Pe(o.STENCIL_TEST))},setMask:function(Ct){Ie!==Ct&&!q&&(o.stencilMask(Ct),Ie=Ct)},setFunc:function(Ct,Hn,bn){(ue!==Ct||me!==Hn||Be!==bn)&&(o.stencilFunc(Ct,Hn,bn),ue=Ct,me=Hn,Be=bn)},setOp:function(Ct,Hn,bn){(ke!==Ct||ht!==Hn||Ht!==bn)&&(o.stencilOp(Ct,Hn,bn),ke=Ct,ht=Hn,Ht=bn)},setLocked:function(Ct){q=Ct},setClear:function(Ct){an!==Ct&&(o.clearStencil(Ct),an=Ct)},reset:function(){q=!1,Ie=null,ue=null,me=null,Be=null,ke=null,ht=null,Ht=null,an=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,d=new WeakMap;let p={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,N=null,P=null,w=null,z=null,O=null,I=new ut(0,0,0),F=0,C=!1,R=null,k=null,ee=null,K=null,ne=null;const le=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ce=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),te=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),te=ce>=2);let fe=null,ae={};const B=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),Oe=new It().fromArray(B),Q=new It().fromArray(ie);function he(q,Ie,ue,me){const Be=new Uint8Array(4),ke=o.createTexture();o.bindTexture(q,ke),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ht=0;ht<ue;ht++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ie,0,o.RGBA,1,1,me,0,o.RGBA,o.UNSIGNED_BYTE,Be):o.texImage2D(Ie+ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Be);return ke}const Se={};Se[o.TEXTURE_2D]=he(o.TEXTURE_2D,o.TEXTURE_2D,1),Se[o.TEXTURE_CUBE_MAP]=he(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[o.TEXTURE_2D_ARRAY]=he(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Se[o.TEXTURE_3D]=he(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ge(o.DEPTH_TEST),c.setFunc(po),Ee(!1),He(pg),ge(o.CULL_FACE),D(zr);function ge(q){p[q]!==!0&&(o.enable(q),p[q]=!0)}function Pe(q){p[q]!==!1&&(o.disable(q),p[q]=!1)}function Ce(q,Ie){return g[q]!==Ie?(o.bindFramebuffer(q,Ie),g[q]=Ie,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ie),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ge(q,Ie){let ue=x,me=!1;if(q){ue=v.get(Ie),ue===void 0&&(ue=[],v.set(Ie,ue));const Be=q.textures;if(ue.length!==Be.length||ue[0]!==o.COLOR_ATTACHMENT0){for(let ke=0,ht=Be.length;ke<ht;ke++)ue[ke]=o.COLOR_ATTACHMENT0+ke;ue.length=Be.length,me=!0}}else ue[0]!==o.BACK&&(ue[0]=o.BACK,me=!0);me&&o.drawBuffers(ue)}function vt(q){return M!==q?(o.useProgram(q),M=q,!0):!1}const ve={[gs]:o.FUNC_ADD,[hy]:o.FUNC_SUBTRACT,[dy]:o.FUNC_REVERSE_SUBTRACT};ve[py]=o.MIN,ve[my]=o.MAX;const Ae={[gy]:o.ZERO,[vy]:o.ONE,[_y]:o.SRC_COLOR,[ch]:o.SRC_ALPHA,[Ty]:o.SRC_ALPHA_SATURATE,[My]:o.DST_COLOR,[yy]:o.DST_ALPHA,[xy]:o.ONE_MINUS_SRC_COLOR,[uh]:o.ONE_MINUS_SRC_ALPHA,[Ey]:o.ONE_MINUS_DST_COLOR,[Sy]:o.ONE_MINUS_DST_ALPHA,[wy]:o.CONSTANT_COLOR,[Ay]:o.ONE_MINUS_CONSTANT_COLOR,[Ry]:o.CONSTANT_ALPHA,[Cy]:o.ONE_MINUS_CONSTANT_ALPHA};function D(q,Ie,ue,me,Be,ke,ht,Ht,an,Ct){if(q===zr){E===!0&&(Pe(o.BLEND),E=!1);return}if(E===!1&&(ge(o.BLEND),E=!0),q!==fy){if(q!==S||Ct!==C){if((y!==gs||w!==gs)&&(o.blendEquation(o.FUNC_ADD),y=gs,w=gs),Ct)switch(q){case co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mg:o.blendFunc(o.ONE,o.ONE);break;case gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,P=null,z=null,O=null,I.set(0,0,0),F=0,S=q,C=Ct}return}Be=Be||Ie,ke=ke||ue,ht=ht||me,(Ie!==y||Be!==w)&&(o.blendEquationSeparate(ve[Ie],ve[Be]),y=Ie,w=Be),(ue!==N||me!==P||ke!==z||ht!==O)&&(o.blendFuncSeparate(Ae[ue],Ae[me],Ae[ke],Ae[ht]),N=ue,P=me,z=ke,O=ht),(Ht.equals(I)===!1||an!==F)&&(o.blendColor(Ht.r,Ht.g,Ht.b,an),I.copy(Ht),F=an),S=q,C=!1}function Je(q,Ie){q.side===ni?Pe(o.CULL_FACE):ge(o.CULL_FACE);let ue=q.side===Yn;Ie&&(ue=!ue),Ee(ue),q.blending===co&&q.transparent===!1?D(zr):D(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),a.setMask(q.colorWrite);const me=q.stencilWrite;u.setTest(me),me&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),nt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ge(o.SAMPLE_ALPHA_TO_COVERAGE):Pe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function He(q){q!==cy?(ge(o.CULL_FACE),q!==k&&(q===pg?o.cullFace(o.BACK):q===uy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pe(o.CULL_FACE),k=q}function be(q){q!==ee&&(te&&o.lineWidth(q),ee=q)}function nt(q,Ie,ue){q?(ge(o.POLYGON_OFFSET_FILL),(K!==Ie||ne!==ue)&&(o.polygonOffset(Ie,ue),K=Ie,ne=ue)):Pe(o.POLYGON_OFFSET_FILL)}function Ue(q){q?ge(o.SCISSOR_TEST):Pe(o.SCISSOR_TEST)}function L(q){q===void 0&&(q=o.TEXTURE0+le-1),fe!==q&&(o.activeTexture(q),fe=q)}function A(q,Ie,ue){ue===void 0&&(fe===null?ue=o.TEXTURE0+le-1:ue=fe);let me=ae[ue];me===void 0&&(me={type:void 0,texture:void 0},ae[ue]=me),(me.type!==q||me.texture!==Ie)&&(fe!==ue&&(o.activeTexture(ue),fe=ue),o.bindTexture(q,Ie||Se[q]),me.type=q,me.texture=Ie)}function Z(){const q=ae[fe];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function de(){try{o.compressedTexImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{o.compressedTexImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{o.texSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $e(){try{o.texSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ne(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ve(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{o.texStorage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(){try{o.texStorage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qe(){try{o.texImage2D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{o.texImage3D.apply(o,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ot(q){Oe.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),Oe.copy(q))}function Ye(q){Q.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Q.copy(q))}function St(q,Ie){let ue=d.get(Ie);ue===void 0&&(ue=new WeakMap,d.set(Ie,ue));let me=ue.get(q);me===void 0&&(me=o.getUniformBlockIndex(Ie,q.name),ue.set(q,me))}function ft(q,Ie){const me=d.get(Ie).get(q);f.get(Ie)!==me&&(o.uniformBlockBinding(Ie,me,q.__bindingPointIndex),f.set(Ie,me))}function Dt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},fe=null,ae={},g={},v=new WeakMap,x=[],M=null,E=!1,S=null,y=null,N=null,P=null,w=null,z=null,O=null,I=new ut(0,0,0),F=0,C=!1,R=null,k=null,ee=null,K=null,ne=null,Oe.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ge,disable:Pe,bindFramebuffer:Ce,drawBuffers:Ge,useProgram:vt,setBlending:D,setMaterial:Je,setFlipSided:Ee,setCullFace:He,setLineWidth:be,setPolygonOffset:nt,setScissorTest:Ue,activeTexture:L,bindTexture:A,unbindTexture:Z,compressedTexImage2D:de,compressedTexImage3D:_e,texImage2D:qe,texImage3D:it,updateUBOMapping:St,uniformBlockBinding:ft,texStorage2D:pt,texStorage3D:Te,texSubImage2D:pe,texSubImage3D:$e,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Ve,scissor:ot,viewport:Ye,reset:Dt}}function UA(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Le,p=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,A){return x?new OffscreenCanvas(L,A):Pa("canvas")}function E(L,A,Z){let de=1;const _e=Ue(L);if((_e.width>Z||_e.height>Z)&&(de=Z/Math.max(_e.width,_e.height)),de<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pe=Math.floor(de*_e.width),$e=Math.floor(de*_e.height);g===void 0&&(g=M(pe,$e));const Ne=A?M(pe,$e):g;return Ne.width=pe,Ne.height=$e,Ne.getContext("2d").drawImage(L,0,0,pe,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+pe+"x"+$e+")."),Ne}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){o.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,A,Z,de,_e=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pe=A;if(A===o.RED&&(Z===o.FLOAT&&(pe=o.R32F),Z===o.HALF_FLOAT&&(pe=o.R16F),Z===o.UNSIGNED_BYTE&&(pe=o.R8)),A===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(pe=o.R8UI),Z===o.UNSIGNED_SHORT&&(pe=o.R16UI),Z===o.UNSIGNED_INT&&(pe=o.R32UI),Z===o.BYTE&&(pe=o.R8I),Z===o.SHORT&&(pe=o.R16I),Z===o.INT&&(pe=o.R32I)),A===o.RG&&(Z===o.FLOAT&&(pe=o.RG32F),Z===o.HALF_FLOAT&&(pe=o.RG16F),Z===o.UNSIGNED_BYTE&&(pe=o.RG8)),A===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(pe=o.RG8UI),Z===o.UNSIGNED_SHORT&&(pe=o.RG16UI),Z===o.UNSIGNED_INT&&(pe=o.RG32UI),Z===o.BYTE&&(pe=o.RG8I),Z===o.SHORT&&(pe=o.RG16I),Z===o.INT&&(pe=o.RG32I)),A===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),Z===o.UNSIGNED_INT&&(pe=o.RGB32UI),Z===o.BYTE&&(pe=o.RGB8I),Z===o.SHORT&&(pe=o.RGB16I),Z===o.INT&&(pe=o.RGB32I)),A===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),Z===o.UNSIGNED_INT&&(pe=o.RGBA32UI),Z===o.BYTE&&(pe=o.RGBA8I),Z===o.SHORT&&(pe=o.RGBA16I),Z===o.INT&&(pe=o.RGBA32I)),A===o.RGB&&Z===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),A===o.RGBA){const $e=_e?bc:Rt.getTransfer(de);Z===o.FLOAT&&(pe=o.RGBA32F),Z===o.HALF_FLOAT&&(pe=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(pe=$e===kt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(L,A){let Z;return L?A===null||A===_s||A===_o?Z=o.DEPTH24_STENCIL8:A===Ai?Z=o.DEPTH32F_STENCIL8:A===Ra&&(Z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_s||A===_o?Z=o.DEPTH_COMPONENT24:A===Ai?Z=o.DEPTH_COMPONENT32F:A===Ra&&(Z=o.DEPTH_COMPONENT16),Z}function z(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==kn&&L.minFilter!==xn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),F(A),A.isVideoTexture&&p.delete(A)}function I(L){const A=L.target;A.removeEventListener("dispose",I),R(A)}function F(L){const A=i.get(L);if(A.__webglInit===void 0)return;const Z=L.source,de=v.get(Z);if(de){const _e=de[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(L),Object.keys(de).length===0&&v.delete(Z)}i.remove(L)}function C(L){const A=i.get(L);o.deleteTexture(A.__webglTexture);const Z=L.source,de=v.get(Z);delete de[A.__cacheKey],c.memory.textures--}function R(L){const A=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let _e=0;_e<A.__webglFramebuffer[de].length;_e++)o.deleteFramebuffer(A.__webglFramebuffer[de][_e]);else o.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)o.deleteFramebuffer(A.__webglFramebuffer[de]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=L.textures;for(let de=0,_e=Z.length;de<_e;de++){const pe=i.get(Z[de]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),c.memory.textures--),i.remove(Z[de])}i.remove(L)}let k=0;function ee(){k=0}function K(){const L=k;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),k+=1,L}function ne(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function le(L,A){const Z=i.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,L,A);return}}t.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+A)}function te(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+A)}function ce(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,A);return}t.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+A)}function H(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){he(Z,L,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+A)}const fe={[vo]:o.REPEAT,[Di]:o.CLAMP_TO_EDGE,[Cc]:o.MIRRORED_REPEAT},ae={[kn]:o.NEAREST,[i0]:o.NEAREST_MIPMAP_NEAREST,[xa]:o.NEAREST_MIPMAP_LINEAR,[xn]:o.LINEAR,[Sc]:o.LINEAR_MIPMAP_NEAREST,[nr]:o.LINEAR_MIPMAP_LINEAR},B={[Gy]:o.NEVER,[Ky]:o.ALWAYS,[Wy]:o.LESS,[m0]:o.LEQUAL,[Xy]:o.EQUAL,[Yy]:o.GEQUAL,[jy]:o.GREATER,[qy]:o.NOTEQUAL};function ie(L,A){if(A.type===Ai&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xn||A.magFilter===Sc||A.magFilter===xa||A.magFilter===nr||A.minFilter===xn||A.minFilter===Sc||A.minFilter===xa||A.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,fe[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,fe[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,fe[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,ae[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,ae[A.minFilter]),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===kn||A.minFilter!==xa&&A.minFilter!==nr||A.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Oe(L,A){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const de=A.source;let _e=v.get(de);_e===void 0&&(_e={},v.set(de,_e));const pe=ne(A);if(pe!==L.__cacheKey){_e[pe]===void 0&&(_e[pe]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),_e[pe].usedTimes++;const $e=_e[L.__cacheKey];$e!==void 0&&(_e[L.__cacheKey].usedTimes--,$e.usedTimes===0&&C(A)),L.__cacheKey=pe,L.__webglTexture=_e[pe].texture}return Z}function Q(L,A,Z){let de=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=o.TEXTURE_3D);const _e=Oe(L,A),pe=A.source;t.bindTexture(de,L.__webglTexture,o.TEXTURE0+Z);const $e=i.get(pe);if(pe.version!==$e.__version||_e===!0){t.activeTexture(o.TEXTURE0+Z);const Ne=Rt.getPrimaries(Rt.workingColorSpace),Ve=A.colorSpace===Or?null:Rt.getPrimaries(A.colorSpace),pt=A.colorSpace===Or||Ne===Ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Te=E(A.image,!1,s.maxTextureSize);Te=nt(A,Te);const qe=a.convert(A.format,A.colorSpace),it=a.convert(A.type);let ot=P(A.internalFormat,qe,it,A.colorSpace,A.isVideoTexture);ie(de,A);let Ye;const St=A.mipmaps,ft=A.isVideoTexture!==!0,Dt=$e.__version===void 0||_e===!0,q=pe.dataReady,Ie=z(A,Te);if(A.isDepthTexture)ot=w(A.format===xo,A.type),Dt&&(ft?t.texStorage2D(o.TEXTURE_2D,1,ot,Te.width,Te.height):t.texImage2D(o.TEXTURE_2D,0,ot,Te.width,Te.height,0,qe,it,null));else if(A.isDataTexture)if(St.length>0){ft&&Dt&&t.texStorage2D(o.TEXTURE_2D,Ie,ot,St[0].width,St[0].height);for(let ue=0,me=St.length;ue<me;ue++)Ye=St[ue],ft?q&&t.texSubImage2D(o.TEXTURE_2D,ue,0,0,Ye.width,Ye.height,qe,it,Ye.data):t.texImage2D(o.TEXTURE_2D,ue,ot,Ye.width,Ye.height,0,qe,it,Ye.data);A.generateMipmaps=!1}else ft?(Dt&&t.texStorage2D(o.TEXTURE_2D,Ie,ot,Te.width,Te.height),q&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Te.width,Te.height,qe,it,Te.data)):t.texImage2D(o.TEXTURE_2D,0,ot,Te.width,Te.height,0,qe,it,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ft&&Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ot,St[0].width,St[0].height,Te.depth);for(let ue=0,me=St.length;ue<me;ue++)if(Ye=St[ue],A.format!==fi)if(qe!==null)if(ft){if(q)if(A.layerUpdates.size>0){const Be=fv(Ye.width,Ye.height,A.format,A.type);for(const ke of A.layerUpdates){const ht=Ye.data.subarray(ke*Be/Ye.data.BYTES_PER_ELEMENT,(ke+1)*Be/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ue,0,0,ke,Ye.width,Ye.height,1,qe,ht)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ue,0,0,0,Ye.width,Ye.height,Te.depth,qe,Ye.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ue,ot,Ye.width,Ye.height,Te.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?q&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ue,0,0,0,Ye.width,Ye.height,Te.depth,qe,it,Ye.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ue,ot,Ye.width,Ye.height,Te.depth,0,qe,it,Ye.data)}else{ft&&Dt&&t.texStorage2D(o.TEXTURE_2D,Ie,ot,St[0].width,St[0].height);for(let ue=0,me=St.length;ue<me;ue++)Ye=St[ue],A.format!==fi?qe!==null?ft?q&&t.compressedTexSubImage2D(o.TEXTURE_2D,ue,0,0,Ye.width,Ye.height,qe,Ye.data):t.compressedTexImage2D(o.TEXTURE_2D,ue,ot,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?q&&t.texSubImage2D(o.TEXTURE_2D,ue,0,0,Ye.width,Ye.height,qe,it,Ye.data):t.texImage2D(o.TEXTURE_2D,ue,ot,Ye.width,Ye.height,0,qe,it,Ye.data)}else if(A.isDataArrayTexture)if(ft){if(Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ot,Te.width,Te.height,Te.depth),q)if(A.layerUpdates.size>0){const ue=fv(Te.width,Te.height,A.format,A.type);for(const me of A.layerUpdates){const Be=Te.data.subarray(me*ue/Te.data.BYTES_PER_ELEMENT,(me+1)*ue/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,qe,it,Be)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,qe,it,Te.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,ot,Te.width,Te.height,Te.depth,0,qe,it,Te.data);else if(A.isData3DTexture)ft?(Dt&&t.texStorage3D(o.TEXTURE_3D,Ie,ot,Te.width,Te.height,Te.depth),q&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,qe,it,Te.data)):t.texImage3D(o.TEXTURE_3D,0,ot,Te.width,Te.height,Te.depth,0,qe,it,Te.data);else if(A.isFramebufferTexture){if(Dt)if(ft)t.texStorage2D(o.TEXTURE_2D,Ie,ot,Te.width,Te.height);else{let ue=Te.width,me=Te.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(o.TEXTURE_2D,Be,ot,ue,me,0,qe,it,null),ue>>=1,me>>=1}}else if(St.length>0){if(ft&&Dt){const ue=Ue(St[0]);t.texStorage2D(o.TEXTURE_2D,Ie,ot,ue.width,ue.height)}for(let ue=0,me=St.length;ue<me;ue++)Ye=St[ue],ft?q&&t.texSubImage2D(o.TEXTURE_2D,ue,0,0,qe,it,Ye):t.texImage2D(o.TEXTURE_2D,ue,ot,qe,it,Ye);A.generateMipmaps=!1}else if(ft){if(Dt){const ue=Ue(Te);t.texStorage2D(o.TEXTURE_2D,Ie,ot,ue.width,ue.height)}q&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,qe,it,Te)}else t.texImage2D(o.TEXTURE_2D,0,ot,qe,it,Te);S(A)&&y(de),$e.__version=pe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function he(L,A,Z){if(A.image.length!==6)return;const de=Oe(L,A),_e=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Z);const pe=i.get(_e);if(_e.version!==pe.__version||de===!0){t.activeTexture(o.TEXTURE0+Z);const $e=Rt.getPrimaries(Rt.workingColorSpace),Ne=A.colorSpace===Or?null:Rt.getPrimaries(A.colorSpace),Ve=A.colorSpace===Or||$e===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const pt=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,qe=[];for(let me=0;me<6;me++)!pt&&!Te?qe[me]=E(A.image[me],!0,s.maxCubemapSize):qe[me]=Te?A.image[me].image:A.image[me],qe[me]=nt(A,qe[me]);const it=qe[0],ot=a.convert(A.format,A.colorSpace),Ye=a.convert(A.type),St=P(A.internalFormat,ot,Ye,A.colorSpace),ft=A.isVideoTexture!==!0,Dt=pe.__version===void 0||de===!0,q=_e.dataReady;let Ie=z(A,it);ie(o.TEXTURE_CUBE_MAP,A);let ue;if(pt){ft&&Dt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,St,it.width,it.height);for(let me=0;me<6;me++){ue=qe[me].mipmaps;for(let Be=0;Be<ue.length;Be++){const ke=ue[Be];A.format!==fi?ot!==null?ft?q&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be,0,0,ke.width,ke.height,ot,ke.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be,St,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be,0,0,ke.width,ke.height,ot,Ye,ke.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be,St,ke.width,ke.height,0,ot,Ye,ke.data)}}}else{if(ue=A.mipmaps,ft&&Dt){ue.length>0&&Ie++;const me=Ue(qe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,St,me.width,me.height)}for(let me=0;me<6;me++)if(Te){ft?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,qe[me].width,qe[me].height,ot,Ye,qe[me].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,St,qe[me].width,qe[me].height,0,ot,Ye,qe[me].data);for(let Be=0;Be<ue.length;Be++){const ht=ue[Be].image[me].image;ft?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be+1,0,0,ht.width,ht.height,ot,Ye,ht.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be+1,St,ht.width,ht.height,0,ot,Ye,ht.data)}}else{ft?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ot,Ye,qe[me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,St,ot,Ye,qe[me]);for(let Be=0;Be<ue.length;Be++){const ke=ue[Be];ft?q&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be+1,0,0,ot,Ye,ke.image[me]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Be+1,St,ot,Ye,ke.image[me])}}}S(A)&&y(o.TEXTURE_CUBE_MAP),pe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Se(L,A,Z,de,_e,pe){const $e=a.convert(Z.format,Z.colorSpace),Ne=a.convert(Z.type),Ve=P(Z.internalFormat,$e,Ne,Z.colorSpace),pt=i.get(A),Te=i.get(Z);if(Te.__renderTarget=A,!pt.__hasExternalTextures){const qe=Math.max(1,A.width>>pe),it=Math.max(1,A.height>>pe);_e===o.TEXTURE_3D||_e===o.TEXTURE_2D_ARRAY?t.texImage3D(_e,pe,Ve,qe,it,A.depth,0,$e,Ne,null):t.texImage2D(_e,pe,Ve,qe,it,0,$e,Ne,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),He(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,de,_e,Te.__webglTexture,0,Ee(A)):(_e===o.TEXTURE_2D||_e>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,de,_e,Te.__webglTexture,pe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(L,A,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer){const de=A.depthTexture,_e=de&&de.isDepthTexture?de.type:null,pe=w(A.stencilBuffer,_e),$e=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=Ee(A);He(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ne,pe,A.width,A.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,pe,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,pe,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,$e,o.RENDERBUFFER,L)}else{const de=A.textures;for(let _e=0;_e<de.length;_e++){const pe=de[_e],$e=a.convert(pe.format,pe.colorSpace),Ne=a.convert(pe.type),Ve=P(pe.internalFormat,$e,Ne,pe.colorSpace),pt=Ee(A);Z&&He(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,Ve,A.width,A.height):He(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,Ve,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ve,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pe(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(A.depthTexture);de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),le(A.depthTexture,0);const _e=de.__webglTexture,pe=Ee(A);if(A.depthTexture.format===uo)He(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_e,0);else if(A.depthTexture.format===xo)He(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const A=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const de=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",_e)};de.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=de}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Pe(A.__webglFramebuffer,L)}else if(Z){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=o.createRenderbuffer(),ge(A.__webglDepthbuffer[de],L,!1);else{const _e=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=A.__webglDepthbuffer[de];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,_e,o.RENDERBUFFER,pe)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ge(A.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_e),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,_e)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(L,A,Z){const de=i.get(L);A!==void 0&&Se(de.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Ce(L)}function vt(L){const A=L.texture,Z=i.get(L),de=i.get(A);L.addEventListener("dispose",I);const _e=L.textures,pe=L.isWebGLCubeRenderTarget===!0,$e=_e.length>1;if($e||(de.__webglTexture===void 0&&(de.__webglTexture=o.createTexture()),de.__version=A.version,c.memory.textures++),pe){Z.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<A.mipmaps.length;Ve++)Z.__webglFramebuffer[Ne][Ve]=o.createFramebuffer()}else Z.__webglFramebuffer[Ne]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)Z.__webglFramebuffer[Ne]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if($e)for(let Ne=0,Ve=_e.length;Ne<Ve;Ne++){const pt=i.get(_e[Ne]);pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture(),c.memory.textures++)}if(L.samples>0&&He(L)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ne=0;Ne<_e.length;Ne++){const Ve=_e[Ne];Z.__webglColorRenderbuffer[Ne]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne]);const pt=a.convert(Ve.format,Ve.colorSpace),Te=a.convert(Ve.type),qe=P(Ve.internalFormat,pt,Te,Ve.colorSpace,L.isXRRenderTarget===!0),it=Ee(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,it,qe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,Z.__webglColorRenderbuffer[Ne])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),ge(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){t.bindTexture(o.TEXTURE_CUBE_MAP,de.__webglTexture),ie(o.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)Se(Z.__webglFramebuffer[Ne][Ve],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else Se(Z.__webglFramebuffer[Ne],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(A)&&y(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ne=0,Ve=_e.length;Ne<Ve;Ne++){const pt=_e[Ne],Te=i.get(pt);t.bindTexture(o.TEXTURE_2D,Te.__webglTexture),ie(o.TEXTURE_2D,pt),Se(Z.__webglFramebuffer,L,pt,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,0),S(pt)&&y(o.TEXTURE_2D)}t.unbindTexture()}else{let Ne=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ne,de.__webglTexture),ie(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)Se(Z.__webglFramebuffer[Ve],L,A,o.COLOR_ATTACHMENT0,Ne,Ve);else Se(Z.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,Ne,0);S(A)&&y(Ne),t.unbindTexture()}L.depthBuffer&&Ce(L)}function ve(L){const A=L.textures;for(let Z=0,de=A.length;Z<de;Z++){const _e=A[Z];if(S(_e)){const pe=N(L),$e=i.get(_e).__webglTexture;t.bindTexture(pe,$e),y(pe),t.unbindTexture()}}}const Ae=[],D=[];function Je(L){if(L.samples>0){if(He(L)===!1){const A=L.textures,Z=L.width,de=L.height;let _e=o.COLOR_BUFFER_BIT;const pe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,$e=i.get(L),Ne=A.length>1;if(Ne)for(let Ve=0;Ve<A.length;Ve++)t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ve=0;Ve<A.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=o.STENCIL_BUFFER_BIT)),Ne){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,$e.__webglColorRenderbuffer[Ve]);const pt=i.get(A[Ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pt,0)}o.blitFramebuffer(0,0,Z,de,0,0,Z,de,_e,o.NEAREST),f===!0&&(Ae.length=0,D.length=0,Ae.push(o.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ae.push(pe),D.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,D)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ne)for(let Ve=0;Ve<A.length;Ve++){t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,$e.__webglColorRenderbuffer[Ve]);const pt=i.get(A[Ve]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,pt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const A=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Ee(L){return Math.min(s.maxSamples,L.samples)}function He(L){const A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function be(L){const A=c.render.frame;p.get(L)!==A&&(p.set(L,A),L.update())}function nt(L,A){const Z=L.colorSpace,de=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==zn&&Z!==Or&&(Rt.getTransfer(Z)===kt?(de!==fi||_e!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=ee,this.setTexture2D=le,this.setTexture2DArray=te,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=He}function FA(o,e){function t(i,s=Or){let a;const c=Rt.getTransfer(s);if(i===or)return o.UNSIGNED_BYTE;if(i===fd)return o.UNSIGNED_SHORT_4_4_4_4;if(i===hd)return o.UNSIGNED_SHORT_5_5_5_1;if(i===o0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===r0)return o.BYTE;if(i===s0)return o.SHORT;if(i===Ra)return o.UNSIGNED_SHORT;if(i===ud)return o.INT;if(i===_s)return o.UNSIGNED_INT;if(i===Ai)return o.FLOAT;if(i===Da)return o.HALF_FLOAT;if(i===a0)return o.ALPHA;if(i===l0)return o.RGB;if(i===fi)return o.RGBA;if(i===c0)return o.LUMINANCE;if(i===u0)return o.LUMINANCE_ALPHA;if(i===uo)return o.DEPTH_COMPONENT;if(i===xo)return o.DEPTH_STENCIL;if(i===dd)return o.RED;if(i===pd)return o.RED_INTEGER;if(i===f0)return o.RG;if(i===md)return o.RG_INTEGER;if(i===gd)return o.RGBA_INTEGER;if(i===Mc||i===Ec||i===Tc||i===wc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yh||i===Sh||i===Mh||i===Eh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===yh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===wh||i===Ah)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Th||i===wh)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ah)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rh||i===Ch||i===bh||i===Ph||i===Lh||i===Nh||i===Ih||i===Dh||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Rh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ch)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ph)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ih)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===Hh||i===Vh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ac)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===h0||i===Gh||i===Wh||i===Xh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ac)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Gh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const OA={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=p.position.distanceTo(g.position),x=.02,M=.005;d.inputState.pinching&&v>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(OA)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new on,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gr({vertexShader:kA,fragmentShader:BA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HA extends wo{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,d=null,p=null,g=null,v=null,x=null,M=null;const E=new zA,S=t.getContextAttributes();let y=null,N=null;const P=[],w=[],z=new Le;let O=null;const I=new Fn;I.viewport=new It;const F=new Fn;F.viewport=new It;const C=[I,F],R=new QM;let k=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=P[Q];return he===void 0&&(he=new ih,P[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=P[Q];return he===void 0&&(he=new ih,P[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=P[Q];return he===void 0&&(he=new ih,P[Q]=he),he.getHandSpace()};function K(Q){const he=w.indexOf(Q.inputSource);if(he===-1)return;const Se=P[he];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,d||c),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ne(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ne),s.removeEventListener("inputsourceschange",le);for(let Q=0;Q<P.length;Q++){const he=w[Q];he!==null&&(w[Q]=null,P[Q].disconnect(he))}k=null,ee=null,E.reset(),e.setRenderTarget(y),x=null,v=null,g=null,s=null,N=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ne),s.addEventListener("inputsourceschange",le),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){const he={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new xs(x.framebufferWidth,x.framebufferHeight,{format:fi,type:or,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let he=null,Se=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=S.stencil?xo:uo,Se=S.stencil?_o:_s);const Pe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};g=new XRWebGLBinding(s,t),v=g.createProjectionLayer(Pe),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new xs(v.textureWidth,v.textureHeight,{format:fi,type:or,depthTexture:new L0(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await s.requestReferenceSpace(u),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function le(Q){for(let he=0;he<Q.removed.length;he++){const Se=Q.removed[he],ge=w.indexOf(Se);ge>=0&&(w[ge]=null,P[ge].disconnect(Se))}for(let he=0;he<Q.added.length;he++){const Se=Q.added[he];let ge=w.indexOf(Se);if(ge===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=w.length){w.push(Se),ge=Ce;break}else if(w[Ce]===null){w[Ce]=Se,ge=Ce;break}if(ge===-1)break}const Pe=P[ge];Pe&&Pe.connect(Se)}}const te=new G,ce=new G;function H(Q,he,Se){te.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Se.matrixWorld);const ge=te.distanceTo(ce),Pe=he.projectionMatrix.elements,Ce=Se.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),vt=Pe[14]/(Pe[10]+1),ve=(Pe[9]+1)/Pe[5],Ae=(Pe[9]-1)/Pe[5],D=(Pe[8]-1)/Pe[0],Je=(Ce[8]+1)/Ce[0],Ee=Ge*D,He=Ge*Je,be=ge/(-D+Je),nt=be*-D;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(nt),Q.translateZ(be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ue=Ge+be,L=vt+be,A=Ee-nt,Z=He+(ge-nt),de=ve*vt/L*Ue,_e=Ae*vt/L*Ue;Q.projectionMatrix.makePerspective(A,Z,de,_e,Ue,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let he=Q.near,Se=Q.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),R.near=F.near=I.near=he,R.far=F.far=I.far=Se,(k!==R.near||ee!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ee=R.far),I.layers.mask=Q.layers.mask|2,F.layers.mask=Q.layers.mask|4,R.layers.mask=I.layers.mask|F.layers.mask;const ge=Q.parent,Pe=R.cameras;fe(R,ge);for(let Ce=0;Ce<Pe.length;Ce++)fe(Pe[Ce],ge);Pe.length===2?H(R,I,F):R.projectionMatrix.copy(I.projectionMatrix),ae(Q,R,ge)};function ae(Q,he,Se){Se===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=yo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let B=null;function ie(Q,he){if(p=he.getViewerPose(d||c),M=he,p!==null){const Se=p.views;x!==null&&(e.setRenderTargetFramebuffer(N,x.framebuffer),e.setRenderTarget(N));let ge=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ge=!0);for(let Ce=0;Ce<Se.length;Ce++){const Ge=Se[Ce];let vt=null;if(x!==null)vt=x.getViewport(Ge);else{const Ae=g.getViewSubImage(v,Ge);vt=Ae.viewport,Ce===0&&(e.setRenderTargetTextures(N,Ae.colorTexture,v.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(N))}let ve=C[Ce];ve===void 0&&(ve=new Fn,ve.layers.enable(Ce),ve.viewport=new It,C[Ce]=ve),ve.matrix.fromArray(Ge.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Ge.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(vt.x,vt.y,vt.width,vt.height),Ce===0&&(R.matrix.copy(ve.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ge===!0&&R.cameras.push(ve)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ce=g.getDepthInformation(Se[0]);Ce&&Ce.isValid&&Ce.texture&&E.init(e,Ce,s.renderState)}}for(let Se=0;Se<P.length;Se++){const ge=w[Se],Pe=P[Se];ge!==null&&Pe!==void 0&&Pe.update(ge,he,d||c)}B&&B(Q,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),M=null}const Oe=new W0;Oe.setAnimationLoop(ie),this.setAnimationLoop=function(Q){B=Q},this.dispose=function(){}}}const hs=new On,VA=new mt;function GA(o,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,T0(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,N,P,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(S,y):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y)):y.isMeshStandardMaterial?(a(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),E(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?f(S,y,N,P):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Yn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Yn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),P=N.envMap,w=N.envMapRotation;P&&(S.envMap.value=P,hs.copy(w),hs.x*=-1,hs.y*=-1,hs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),S.envMapRotation.value.setFromMatrix4(VA.makeRotationFromEuler(hs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,N,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function WA(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,P){const w=P.program;i.uniformBlockBinding(N,w)}function d(N,P){let w=s[N.id];w===void 0&&(M(N),w=p(N),s[N.id]=w,N.addEventListener("dispose",S));const z=P.program;i.updateUBOMapping(N,z);const O=e.render.frame;a[N.id]!==O&&(v(N),a[N.id]=O)}function p(N){const P=g();N.__bindingPointIndex=P;const w=o.createBuffer(),z=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,z,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,w),w}function g(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const P=s[N.id],w=N.uniforms,z=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let O=0,I=w.length;O<I;O++){const F=Array.isArray(w[O])?w[O]:[w[O]];for(let C=0,R=F.length;C<R;C++){const k=F[C];if(x(k,O,C,z)===!0){const ee=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ne=0;for(let le=0;le<K.length;le++){const te=K[le],ce=E(te);typeof te=="number"||typeof te=="boolean"?(k.__data[0]=te,o.bufferSubData(o.UNIFORM_BUFFER,ee+ne,k.__data)):te.isMatrix3?(k.__data[0]=te.elements[0],k.__data[1]=te.elements[1],k.__data[2]=te.elements[2],k.__data[3]=0,k.__data[4]=te.elements[3],k.__data[5]=te.elements[4],k.__data[6]=te.elements[5],k.__data[7]=0,k.__data[8]=te.elements[6],k.__data[9]=te.elements[7],k.__data[10]=te.elements[8],k.__data[11]=0):(te.toArray(k.__data,ne),ne+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(N,P,w,z){const O=N.value,I=P+"_"+w;if(z[I]===void 0)return typeof O=="number"||typeof O=="boolean"?z[I]=O:z[I]=O.clone(),!0;{const F=z[I];if(typeof O=="number"||typeof O=="boolean"){if(F!==O)return z[I]=O,!0}else if(F.equals(O)===!1)return F.copy(O),!0}return!1}function M(N){const P=N.uniforms;let w=0;const z=16;for(let I=0,F=P.length;I<F;I++){const C=Array.isArray(P[I])?P[I]:[P[I]];for(let R=0,k=C.length;R<k;R++){const ee=C[R],K=Array.isArray(ee.value)?ee.value:[ee.value];for(let ne=0,le=K.length;ne<le;ne++){const te=K[ne],ce=E(te),H=w%z,fe=H%ce.boundary,ae=H+fe;w+=fe,ae!==0&&z-ae<ce.storage&&(w+=z-ae),ee.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=ce.storage}}}const O=w%z;return O>0&&(w+=z-O),N.__size=w,N.__cache={},this}function E(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function S(N){const P=N.target;P.removeEventListener("dispose",S);const w=c.indexOf(P.__bindingPointIndex);c.splice(w,1),o.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function y(){for(const N in s)o.deleteBuffer(s[N]);c=[],s={},a={}}return{bind:f,update:d,dispose:y}}class XA{constructor(e={}){const{canvas:t=hS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const N=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Hr,this.toneMappingExposure=1;const w=this;let z=!1,O=0,I=0,F=null,C=-1,R=null;const k=new It,ee=new It;let K=null;const ne=new ut(0);let le=0,te=t.width,ce=t.height,H=1,fe=null,ae=null;const B=new It(0,0,te,ce),ie=new It(0,0,te,ce);let Oe=!1;const Q=new yd;let he=!1,Se=!1;const ge=new mt,Pe=new mt,Ce=new G,Ge=new It,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Ae(){return F===null?H:1}let D=i;function Je(b,Y){return t.getContext(b,Y)}try{const b={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cd}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",ke,!1),D===null){const Y="webgl2";if(D=Je(Y,b),D===null)throw Je(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,He,be,nt,Ue,L,A,Z,de,_e,pe,$e,Ne,Ve,pt,Te,qe,it,ot,Ye,St,ft,Dt,q;function Ie(){Ee=new ew(D),Ee.init(),ft=new FA(D,Ee),He=new Y1(D,Ee,e,ft),be=new DA(D,Ee),He.reverseDepthBuffer&&v&&be.buffers.depth.setReversed(!0),nt=new iw(D),Ue=new SA,L=new UA(D,Ee,be,Ue,He,ft,nt),A=new $1(w),Z=new Q1(w),de=new uE(D),Dt=new j1(D,de),_e=new tw(D,de,nt,Dt),pe=new sw(D,_e,de,nt),ot=new rw(D,He,L),Te=new K1(Ue),$e=new yA(w,A,Z,Ee,He,Dt,Te),Ne=new GA(w,Ue),Ve=new EA,pt=new bA(Ee),it=new X1(w,A,Z,be,pe,x,f),qe=new NA(w,pe,He),q=new WA(D,nt,He,be),Ye=new q1(D,Ee,nt),St=new nw(D,Ee,nt),nt.programs=$e.programs,w.capabilities=He,w.extensions=Ee,w.properties=Ue,w.renderLists=Ve,w.shadowMap=qe,w.state=be,w.info=nt}Ie();const ue=new HA(w,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(te,ce,!1))},this.getSize=function(b){return b.set(te,ce)},this.setSize=function(b,Y,se=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,ce=Y,t.width=Math.floor(b*H),t.height=Math.floor(Y*H),se===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(te*H,ce*H).floor()},this.setDrawingBufferSize=function(b,Y,se){te=b,ce=Y,H=se,t.width=Math.floor(b*se),t.height=Math.floor(Y*se),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(B)},this.setViewport=function(b,Y,se,oe){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,Y,se,oe),be.viewport(k.copy(B).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,Y,se,oe){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,Y,se,oe),be.scissor(ee.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){be.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(b=!0,Y=!0,se=!0){let oe=0;if(b){let X=!1;if(F!==null){const we=F.texture.format;X=we===gd||we===md||we===pd}if(X){const we=F.texture.type,De=we===or||we===_s||we===Ra||we===_o||we===fd||we===hd,We=it.getClearColor(),Xe=it.getClearAlpha(),at=We.r,lt=We.g,et=We.b;De?(M[0]=at,M[1]=lt,M[2]=et,M[3]=Xe,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=at,E[1]=lt,E[2]=et,E[3]=Xe,D.clearBufferiv(D.COLOR,0,E))}else oe|=D.COLOR_BUFFER_BIT}Y&&(oe|=D.DEPTH_BUFFER_BIT),se&&(oe|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),it.dispose(),Ve.dispose(),pt.dispose(),Ue.dispose(),A.dispose(),Z.dispose(),pe.dispose(),Dt.dispose(),q.dispose(),$e.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ss),ue.removeEventListener("sessionend",lr),ki.stop()};function me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const b=nt.autoReset,Y=qe.enabled,se=qe.autoUpdate,oe=qe.needsUpdate,X=qe.type;Ie(),nt.autoReset=b,qe.enabled=Y,qe.autoUpdate=se,qe.needsUpdate=oe,qe.type=X}function ke(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const Y=b.target;Y.removeEventListener("dispose",ht),Ht(Y)}function Ht(b){an(b),Ue.remove(b)}function an(b){const Y=Ue.get(b).programs;Y!==void 0&&(Y.forEach(function(se){$e.releaseProgram(se)}),b.isShaderMaterial&&$e.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,se,oe,X,we){Y===null&&(Y=vt);const De=X.isMesh&&X.matrixWorld.determinant()<0,We=Ba(b,Y,se,oe,X);be.setMaterial(oe,De);let Xe=se.index,at=1;if(oe.wireframe===!0){if(Xe=_e.getWireframeAttribute(se),Xe===void 0)return;at=2}const lt=se.drawRange,et=se.attributes.position;let dt=lt.start*at,Pt=(lt.start+lt.count)*at;we!==null&&(dt=Math.max(dt,we.start*at),Pt=Math.min(Pt,(we.start+we.count)*at)),Xe!==null?(dt=Math.max(dt,0),Pt=Math.min(Pt,Xe.count)):et!=null&&(dt=Math.max(dt,0),Pt=Math.min(Pt,et.count));const Lt=Pt-dt;if(Lt<0||Lt===1/0)return;Dt.setup(X,oe,We,se,Xe);let Wt,At=Ye;if(Xe!==null&&(Wt=de.get(Xe),At=St,At.setIndex(Wt)),X.isMesh)oe.wireframe===!0?(be.setLineWidth(oe.wireframeLinewidth*Ae()),At.setMode(D.LINES)):At.setMode(D.TRIANGLES);else if(X.isLine){let tt=oe.linewidth;tt===void 0&&(tt=1),be.setLineWidth(tt*Ae()),X.isLineSegments?At.setMode(D.LINES):X.isLineLoop?At.setMode(D.LINE_LOOP):At.setMode(D.LINE_STRIP)}else X.isPoints?At.setMode(D.POINTS):X.isSprite&&At.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)At.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const tt=X._multiDrawStarts,$t=X._multiDrawCounts,wt=X._multiDrawCount,gn=Xe?de.get(Xe).bytesPerElement:1,pi=Ue.get(oe).currentProgram.getUniforms();for(let Pn=0;Pn<wt;Pn++)pi.setValue(D,"_gl_DrawID",Pn),At.render(tt[Pn]/gn,$t[Pn])}else if(X.isInstancedMesh)At.renderInstances(dt,Lt,X.count);else if(se.isInstancedBufferGeometry){const tt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,$t=Math.min(se.instanceCount,tt);At.renderInstances(dt,Lt,$t)}else At.render(dt,Lt)};function Ct(b,Y,se){b.transparent===!0&&b.side===ni&&b.forceSinglePass===!1?(b.side=Yn,b.needsUpdate=!0,Ms(b,Y,se),b.side=sr,b.needsUpdate=!0,Ms(b,Y,se),b.side=ni):Ms(b,Y,se)}this.compile=function(b,Y,se=null){se===null&&(se=b),y=pt.get(se),y.init(Y),P.push(y),se.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),b!==se&&b.traverseVisible(function(X){X.isLight&&X.layers.test(Y.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const oe=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const We=we[De];Ct(We,se,X),oe.add(We)}else Ct(we,se,X),oe.add(we)}),P.pop(),y=null,oe},this.compileAsync=function(b,Y,se=null){const oe=this.compile(b,Y,se);return new Promise(X=>{function we(){if(oe.forEach(function(De){Ue.get(De).currentProgram.isReady()&&oe.delete(De)}),oe.size===0){X(b);return}setTimeout(we,10)}Ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Hn=null;function bn(b){Hn&&Hn(b)}function Ss(){ki.stop()}function lr(){ki.start()}const ki=new W0;ki.setAnimationLoop(bn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){Hn=b,ue.setAnimationLoop(b),b===null?ki.stop():ki.start()},ue.addEventListener("sessionstart",Ss),ue.addEventListener("sessionend",lr),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,Y,F),y=pt.get(b,P.length),y.init(Y),P.push(y),Pe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Pe),Se=this.localClippingEnabled,he=Te.init(this.clippingPlanes,Se),S=Ve.get(b,N.length),S.init(),N.push(S),ue.enabled===!0&&ue.isPresenting===!0){const we=w.xr.getDepthSensingMesh();we!==null&&Bi(we,Y,-1/0,w.sortObjects)}Bi(b,Y,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(fe,ae),ve=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ve&&it.addToRenderList(S,b),this.info.render.frame++,he===!0&&Te.beginShadows();const se=y.state.shadowsArray;qe.render(se,b,Y),he===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=S.opaque,X=S.transmissive;if(y.setupLights(),Y.isArrayCamera){const we=Y.cameras;if(X.length>0)for(let De=0,We=we.length;De<We;De++){const Xe=we[De];jr(oe,X,b,Xe)}ve&&it.render(b);for(let De=0,We=we.length;De<We;De++){const Xe=we[De];Xr(S,b,Xe,Xe.viewport)}}else X.length>0&&jr(oe,X,b,Y),ve&&it.render(b),Xr(S,b,Y);F!==null&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(w,b,Y),Dt.resetDefaultState(),C=-1,R=null,P.pop(),P.length>0?(y=P[P.length-1],he===!0&&Te.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Bi(b,Y,se,oe){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){oe&&Ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);const De=pe.update(b),We=b.material;We.visible&&S.push(b,De,We,se,Ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const De=pe.update(b),We=b.material;if(oe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ge.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ge.copy(De.boundingSphere.center)),Ge.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(We)){const Xe=De.groups;for(let at=0,lt=Xe.length;at<lt;at++){const et=Xe[at],dt=We[et.materialIndex];dt&&dt.visible&&S.push(b,De,dt,se,Ge.z,et)}}else We.visible&&S.push(b,De,We,se,Ge.z,null)}}const we=b.children;for(let De=0,We=we.length;De<We;De++)Bi(we[De],Y,se,oe)}function Xr(b,Y,se,oe){const X=b.opaque,we=b.transmissive,De=b.transparent;y.setupLightsView(se),he===!0&&Te.setGlobalState(w.clippingPlanes,se),oe&&be.viewport(k.copy(oe)),X.length>0&&cr(X,Y,se),we.length>0&&cr(we,Y,se),De.length>0&&cr(De,Y,se),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function jr(b,Y,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[oe.id]===void 0&&(y.state.transmissionRenderTarget[oe.id]=new xs(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Da:or,minFilter:nr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=y.state.transmissionRenderTarget[oe.id],De=oe.viewport||k;we.setSize(De.z,De.w);const We=w.getRenderTarget();w.setRenderTarget(we),w.getClearColor(ne),le=w.getClearAlpha(),le<1&&w.setClearColor(16777215,.5),w.clear(),ve&&it.render(se);const Xe=w.toneMapping;w.toneMapping=Hr;const at=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),y.setupLightsView(oe),he===!0&&Te.setGlobalState(w.clippingPlanes,oe),cr(b,se,oe),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let et=0,dt=Y.length;et<dt;et++){const Pt=Y[et],Lt=Pt.object,Wt=Pt.geometry,At=Pt.material,tt=Pt.group;if(At.side===ni&&Lt.layers.test(oe.layers)){const $t=At.side;At.side=Yn,At.needsUpdate=!0,Oa(Lt,se,oe,Wt,At,tt),At.side=$t,At.needsUpdate=!0,lt=!0}}lt===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}w.setRenderTarget(We),w.setClearColor(ne,le),at!==void 0&&(oe.viewport=at),w.toneMapping=Xe}function cr(b,Y,se){const oe=Y.isScene===!0?Y.overrideMaterial:null;for(let X=0,we=b.length;X<we;X++){const De=b[X],We=De.object,Xe=De.geometry,at=oe===null?De.material:oe,lt=De.group;We.layers.test(se.layers)&&Oa(We,Y,se,Xe,at,lt)}}function Oa(b,Y,se,oe,X,we){b.onBeforeRender(w,Y,se,oe,X,we),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(w,Y,se,oe,b,we),X.transparent===!0&&X.side===ni&&X.forceSinglePass===!1?(X.side=Yn,X.needsUpdate=!0,w.renderBufferDirect(se,Y,oe,X,b,we),X.side=sr,X.needsUpdate=!0,w.renderBufferDirect(se,Y,oe,X,b,we),X.side=ni):w.renderBufferDirect(se,Y,oe,X,b,we),b.onAfterRender(w,Y,se,oe,X,we)}function Ms(b,Y,se){Y.isScene!==!0&&(Y=vt);const oe=Ue.get(b),X=y.state.lights,we=y.state.shadowsArray,De=X.state.version,We=$e.getParameters(b,X.state,we,Y,se),Xe=$e.getProgramCacheKey(We);let at=oe.programs;oe.environment=b.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(b.isMeshStandardMaterial?Z:A).get(b.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,at===void 0&&(b.addEventListener("dispose",ht),at=new Map,oe.programs=at);let lt=at.get(Xe);if(lt!==void 0){if(oe.currentProgram===lt&&oe.lightsStateVersion===De)return Ci(b,We),lt}else We.uniforms=$e.getUniforms(b),b.onBeforeCompile(We,w),lt=$e.acquireProgram(We,Xe),at.set(Xe,lt),oe.uniforms=We.uniforms;const et=oe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=Te.uniform),Ci(b,We),oe.needsLights=kc(b),oe.lightsStateVersion=De,oe.needsLights&&(et.ambientLightColor.value=X.state.ambient,et.lightProbe.value=X.state.probe,et.directionalLights.value=X.state.directional,et.directionalLightShadows.value=X.state.directionalShadow,et.spotLights.value=X.state.spot,et.spotLightShadows.value=X.state.spotShadow,et.rectAreaLights.value=X.state.rectArea,et.ltc_1.value=X.state.rectAreaLTC1,et.ltc_2.value=X.state.rectAreaLTC2,et.pointLights.value=X.state.point,et.pointLightShadows.value=X.state.pointShadow,et.hemisphereLights.value=X.state.hemi,et.directionalShadowMap.value=X.state.directionalShadowMap,et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,et.spotShadowMap.value=X.state.spotShadowMap,et.spotLightMatrix.value=X.state.spotLightMatrix,et.spotLightMap.value=X.state.spotLightMap,et.pointShadowMap.value=X.state.pointShadowMap,et.pointShadowMatrix.value=X.state.pointShadowMatrix),oe.currentProgram=lt,oe.uniformsList=null,lt}function ka(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Rc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Ci(b,Y){const se=Ue.get(b);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Ba(b,Y,se,oe,X){Y.isScene!==!0&&(Y=vt),L.resetTextureUnits();const we=Y.fog,De=oe.isMeshStandardMaterial?Y.environment:null,We=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zn,Xe=(oe.isMeshStandardMaterial?Z:A).get(oe.envMap||De),at=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!se.morphAttributes.position,dt=!!se.morphAttributes.normal,Pt=!!se.morphAttributes.color;let Lt=Hr;oe.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=w.toneMapping);const Wt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,At=Wt!==void 0?Wt.length:0,tt=Ue.get(oe),$t=y.state.lights;if(he===!0&&(Se===!0||b!==R)){const en=b===R&&oe.id===C;Te.setState(oe,b,en)}let wt=!1;oe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==$t.state.version||tt.outputColorSpace!==We||X.isBatchedMesh&&tt.batching===!1||!X.isBatchedMesh&&tt.batching===!0||X.isBatchedMesh&&tt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&tt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&tt.instancing===!1||!X.isInstancedMesh&&tt.instancing===!0||X.isSkinnedMesh&&tt.skinning===!1||!X.isSkinnedMesh&&tt.skinning===!0||X.isInstancedMesh&&tt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&tt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&tt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&tt.instancingMorph===!1&&X.morphTexture!==null||tt.envMap!==Xe||oe.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Te.numPlanes||tt.numIntersection!==Te.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==lt||tt.morphTargets!==et||tt.morphNormals!==dt||tt.morphColors!==Pt||tt.toneMapping!==Lt||tt.morphTargetsCount!==At)&&(wt=!0):(wt=!0,tt.__version=oe.version);let gn=tt.currentProgram;wt===!0&&(gn=Ms(oe,Y,X));let pi=!1,Pn=!1,qr=!1;const Ot=gn.getUniforms(),Ln=tt.uniforms;if(be.useProgram(gn.program)&&(pi=!0,Pn=!0,qr=!0),oe.id!==C&&(C=oe.id,Pn=!0),pi||R!==b){be.buffers.depth.getReversed()?(ge.copy(b.projectionMatrix),pS(ge),mS(ge),Ot.setValue(D,"projectionMatrix",ge)):Ot.setValue(D,"projectionMatrix",b.projectionMatrix),Ot.setValue(D,"viewMatrix",b.matrixWorldInverse);const Sn=Ot.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,Ce.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Pn=!0,qr=!0)}if(X.isSkinnedMesh){Ot.setOptional(D,X,"bindMatrix"),Ot.setOptional(D,X,"bindMatrixInverse");const en=X.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ot.setValue(D,"boneTexture",en.boneTexture,L))}X.isBatchedMesh&&(Ot.setOptional(D,X,"batchingTexture"),Ot.setValue(D,"batchingTexture",X._matricesTexture,L),Ot.setOptional(D,X,"batchingIdTexture"),Ot.setValue(D,"batchingIdTexture",X._indirectTexture,L),Ot.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Ot.setValue(D,"batchingColorTexture",X._colorsTexture,L));const yn=se.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&ot.update(X,se,gn),(Pn||tt.receiveShadow!==X.receiveShadow)&&(tt.receiveShadow=X.receiveShadow,Ot.setValue(D,"receiveShadow",X.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Ln.envMap.value=Xe,Ln.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(Ln.envMapIntensity.value=Y.environmentIntensity),Pn&&(Ot.setValue(D,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&za(Ln,qr),we&&oe.fog===!0&&Ne.refreshFogUniforms(Ln,we),Ne.refreshMaterialUniforms(Ln,oe,H,ce,y.state.transmissionRenderTarget[b.id]),Rc.upload(D,ka(tt),Ln,L)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Rc.upload(D,ka(tt),Ln,L),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ot.setValue(D,"center",X.center),Ot.setValue(D,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(D,"normalMatrix",X.normalMatrix),Ot.setValue(D,"modelMatrix",X.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const en=oe.uniformsGroups;for(let Sn=0,Yr=en.length;Sn<Yr;Sn++){const Et=en[Sn];q.update(Et,gn),q.bind(Et,gn)}}return gn}function za(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function kc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,Y,se){Ue.get(b.texture).__webglTexture=Y,Ue.get(b.depthTexture).__webglTexture=se;const oe=Ue.get(b);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,Y){const se=Ue.get(b);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(b,Y=0,se=0){F=b,O=Y,I=se;let oe=!0,X=null,we=!1,De=!1;if(b){const Xe=Ue.get(b);if(Xe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),oe=!1;else if(Xe.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Xe.__hasExternalTextures)L.rebindTextures(b,Ue.get(b.texture).__webglTexture,Ue.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(Xe.__boundDepthTexture!==et){if(et!==null&&Ue.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(De=!0);const lt=Ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?X=lt[Y][se]:X=lt[Y],we=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?X=Ue.get(b).__webglMultisampledFramebuffer:Array.isArray(lt)?X=lt[se]:X=lt,k.copy(b.viewport),ee.copy(b.scissor),K=b.scissorTest}else k.copy(B).multiplyScalar(H).floor(),ee.copy(ie).multiplyScalar(H).floor(),K=Oe;if(be.bindFramebuffer(D.FRAMEBUFFER,X)&&oe&&be.drawBuffers(b,X),be.viewport(k),be.scissor(ee),be.setScissorTest(K),we){const Xe=Ue.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xe.__webglTexture,se)}else if(De){const Xe=Ue.get(b.texture),at=Y||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xe.__webglTexture,se||0,at)}C=-1},this.readRenderTargetPixels=function(b,Y,se,oe,X,we,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(We=We[De]),We){be.bindFramebuffer(D.FRAMEBUFFER,We);try{const Xe=b.texture,at=Xe.format,lt=Xe.type;if(!He.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-oe&&se>=0&&se<=b.height-X&&D.readPixels(Y,se,oe,X,ft.convert(at),ft.convert(lt),we)}finally{const Xe=F!==null?Ue.get(F).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(b,Y,se,oe,X,we,De){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(We=We[De]),We){const Xe=b.texture,at=Xe.format,lt=Xe.type;if(!He.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=b.width-oe&&se>=0&&se<=b.height-X){be.bindFramebuffer(D.FRAMEBUFFER,We);const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,we.byteLength,D.STREAM_READ),D.readPixels(Y,se,oe,X,ft.convert(at),ft.convert(lt),0);const dt=F!==null?Ue.get(F).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,dt);const Pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await dS(D,Pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,we),D.deleteBuffer(et),D.deleteSync(Pt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Y=null,se=0){b.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1]);const oe=Math.pow(2,-se),X=Math.floor(b.image.width*oe),we=Math.floor(b.image.height*oe),De=Y!==null?Y.x:0,We=Y!==null?Y.y:0;L.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,se,0,0,De,We,X,we),be.unbindTexture()};const Ha=D.createFramebuffer(),Va=D.createFramebuffer();this.copyTextureToTexture=function(b,Y,se=null,oe=null,X=0,we=null){b.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,b=arguments[1],Y=arguments[2],we=arguments[3]||0,se=null),we===null&&(X!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=X,X=0):we=0);let De,We,Xe,at,lt,et,dt,Pt,Lt;const Wt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(se!==null)De=se.max.x-se.min.x,We=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,at=se.min.x,lt=se.min.y,et=se.isBox3?se.min.z:0;else{const yn=Math.pow(2,-X);De=Math.floor(Wt.width*yn),We=Math.floor(Wt.height*yn),b.isDataArrayTexture?Xe=Wt.depth:b.isData3DTexture?Xe=Math.floor(Wt.depth*yn):Xe=1,at=0,lt=0,et=0}oe!==null?(dt=oe.x,Pt=oe.y,Lt=oe.z):(dt=0,Pt=0,Lt=0);const At=ft.convert(Y.format),tt=ft.convert(Y.type);let $t;Y.isData3DTexture?(L.setTexture3D(Y,0),$t=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(L.setTexture2DArray(Y,0),$t=D.TEXTURE_2D_ARRAY):(L.setTexture2D(Y,0),$t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);const wt=D.getParameter(D.UNPACK_ROW_LENGTH),gn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pi=D.getParameter(D.UNPACK_SKIP_PIXELS),Pn=D.getParameter(D.UNPACK_SKIP_ROWS),qr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,at),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,et);const Ot=b.isDataArrayTexture||b.isData3DTexture,Ln=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const yn=Ue.get(b),en=Ue.get(Y),Sn=Ue.get(yn.__renderTarget),Yr=Ue.get(en.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Sn.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let Et=0;Et<Xe;Et++)Ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.get(b).__webglTexture,X,et+Et),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.get(Y).__webglTexture,we,Lt+Et)),D.blitFramebuffer(at,lt,De,We,dt,Pt,De,We,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||Ue.has(b)){const yn=Ue.get(b),en=Ue.get(Y);be.bindFramebuffer(D.READ_FRAMEBUFFER,Ha),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Va);for(let Sn=0;Sn<Xe;Sn++)Ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,X,et+Sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,X),Ln?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,we,Lt+Sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,we),X!==0?D.blitFramebuffer(at,lt,De,We,dt,Pt,De,We,D.COLOR_BUFFER_BIT,D.NEAREST):Ln?D.copyTexSubImage3D($t,we,dt,Pt,Lt+Sn,at,lt,De,We):D.copyTexSubImage2D($t,we,dt,Pt,at,lt,De,We);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ln?b.isDataTexture||b.isData3DTexture?D.texSubImage3D($t,we,dt,Pt,Lt,De,We,Xe,At,tt,Wt.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D($t,we,dt,Pt,Lt,De,We,Xe,At,Wt.data):D.texSubImage3D($t,we,dt,Pt,Lt,De,We,Xe,At,tt,Wt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,we,dt,Pt,De,We,At,tt,Wt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,we,dt,Pt,Wt.width,Wt.height,At,Wt.data):D.texSubImage2D(D.TEXTURE_2D,we,dt,Pt,De,We,At,tt,Wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qr),we===0&&Y.generateMipmaps&&D.generateMipmap($t),be.unbindTexture()},this.copyTextureToTexture3D=function(b,Y,se=null,oe=null,X=0){return b.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,oe=arguments[1]||null,b=arguments[2],Y=arguments[3],X=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Y,se,oe,X)},this.initRenderTarget=function(b){Ue.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){O=0,I=0,F=null,be.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function Fv(o,e){if(e===By)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===jh||e===d0){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===jh)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class jA extends bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ZA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new cR(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new sR(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new fR(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=wa.extractUrlBase(e);c=wa.resolveURL(d,this.path)}else c=wa.extractUrlBase(e);this.manager.itemStart(e);const u=function(d){s?s(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},f=new H0(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(d){try{a.parse(d,c,function(p){t(p),a.manager.itemEnd(e)},u)}catch(p){u(p)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===K0){try{c[Tt.KHR_BINARY_GLTF]=new hR(e)}catch(g){s&&s(g);return}a=JSON.parse(c[Tt.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new wR(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const g=this.pluginCallbacks[p](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const g=a.extensionsUsed[p],v=a.extensionsRequired||[];switch(g){case Tt.KHR_MATERIALS_UNLIT:c[g]=new KA;break;case Tt.KHR_DRACO_MESH_COMPRESSION:c[g]=new dR(a,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:c[g]=new pR;break;case Tt.KHR_MESH_QUANTIZATION:c[g]=new mR;break;default:v.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(c),d.setPlugins(u),d.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function qA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class YA{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const p=new ut(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],zn);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":d=new Qh(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new G0(p),d.distance=g;break;case"spot":d=new KM(p),d.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,d.angle=f.spot.outerConeAngle,d.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return d.position.set(0,0,0),d.decay=2,tr(d,f),f.intensity!==void 0&&(d.intensity=f.intensity),d.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(d),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class KA{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return hi}extendParams(e,t,i){const s=[];e.color=new ut(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],zn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,sn))}return Promise.all(s)}}class $A{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class ZA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(u,u)}return Promise.all(a)}}class JA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class QA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class eR{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],zn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,sn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class tR{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class nR{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(u[0],u[1],u[2],zn),Promise.all(a)}}class iR{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class rR{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(u[0],u[1],u[2],zn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,sn)),Promise.all(a)}}class sR{constructor(e){this.parser=e,this.name=Tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class oR{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class aR{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class lR{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cR{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(f=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uR{constructor(e){this.name=Tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,d=s.byteLength||0,p=s.count,g=s.byteStride,v=new Uint8Array(u,f,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(p,g,v,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(p*g);return c.decodeGltfBuffer(new Uint8Array(x),p,g,v,s.mode,s.filter),x})})}else return null}}class fR{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==ui.TRIANGLES&&d.mode!==ui.TRIANGLE_STRIP&&d.mode!==ui.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const d in c)u.push(this.parser.getDependency("accessor",c[d]).then(p=>(f[d]=p,f[d])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(d=>{const p=d.pop(),g=p.isGroup?p.children:[p],v=d[0].count,x=[];for(const M of g){const E=new mt,S=new G,y=new Wr,N=new G(1,1,1),P=new WS(M.geometry,M.material,v);for(let w=0;w<v;w++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,w),f.ROTATION&&y.fromBufferAttribute(f.ROTATION,w),f.SCALE&&N.fromBufferAttribute(f.SCALE,w),P.setMatrixAt(w,E.compose(S,y,N));for(const w in f)if(w==="_COLOR_0"){const z=f[w];P.instanceColor=new Yh(z.array,z.itemSize,z.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,f[w]);jt.prototype.copy.call(P,M),this.parser.assignFinalMaterial(P),x.push(P)}return p.isGroup?(p.clear(),p.add(...x),p):x[0]}))}}const K0="glTF",_a=12,Ov={JSON:1313821514,BIN:5130562};class hR{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_a),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==K0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_a,a=new DataView(e,_a);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===Ov.JSON){const d=new Uint8Array(e,_a+c,u);this.content=i.decode(d)}else if(f===Ov.BIN){const d=_a+c;this.body=e.slice(d,d+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},d={};for(const p in c){const g=td[p]||p.toLowerCase();u[g]=c[p]}for(const p in e.attributes){const g=td[p]||p.toLowerCase();if(c[p]!==void 0){const v=i.accessors[e.attributes[p]],x=ho[v.componentType];d[g]=x.name,f[g]=v.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(g,v){s.decodeDracoFile(p,function(x){for(const M in x.attributes){const E=x.attributes[M],S=f[M];S!==void 0&&(E.normalized=S)}g(x)},u,d,zn,v)})})}}class pR{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mR{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}}class $0 extends Fa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,d=u*3,p=s-t,g=(i-t)/p,v=g*g,x=v*g,M=e*d,E=M-d,S=-2*x+3*v,y=x-v,N=1-S,P=y-v+g;for(let w=0;w!==u;w++){const z=c[E+w+u],O=c[E+w+f]*p,I=c[M+w+u],F=c[M+w]*p;a[w]=N*z+P*O+S*I+y*F}return a}}const gR=new Wr;class vR extends $0{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return gR.fromArray(a).normalize().toArray(a),a}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kv={9728:kn,9729:xn,9984:i0,9985:Sc,9986:xa,9987:nr},Bv={33071:Di,33648:Cc,10497:vo},rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_R={CUBICSPLINE:void 0,LINEAR:ba,STEP:Ca},sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xR(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new bd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sr})),o.DefaultMaterial}function ds(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function tr(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yR(o,e,t){let i=!1,s=!1,a=!1;for(let d=0,p=e.length;d<p;d++){const g=e[d];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let d=0,p=e.length;d<p;d++){const g=e[d];if(i){const v=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(v)}if(s){const v=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(v)}if(a){const v=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;f.push(v)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(d){const p=d[0],g=d[1],v=d[2];return i&&(o.morphAttributes.position=p),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function SR(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MR(o){let e;const t=o.extensions&&o.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=o.indices+":"+oh(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+oh(o.targets[i]);return e}function oh(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function nd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ER(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const TR=new mt;class wR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new V0(this.options.manager):this.textureLoader=new JM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new H0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return ds(a,u,s),tr(u,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[d,p]of c.children.entries())a(p,u.children[d])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(wa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=rh[s.type],u=ho[s.componentType],f=s.normalized===!0,d=new u(s.count*c);return Promise.resolve(new Bn(d,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=rh[s.type],d=ho[s.componentType],p=d.BYTES_PER_ELEMENT,g=p*f,v=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(x&&x!==g){const y=Math.floor(v/x),N="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let P=t.cache.get(N);P||(E=new d(u,y*x,s.count*x/p),P=new BS(E,x/p),t.cache.add(N,P)),S=new _d(P,f,v%x/p,M)}else u===null?E=new d(s.count*f):E=new d(u,v,s.count*f),S=new Bn(E,f,M);if(s.sparse!==void 0){const y=rh.SCALAR,N=ho[s.sparse.indices.componentType],P=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,z=new N(c[1],P,s.sparse.count*y),O=new d(c[2],w,s.sparse.count*f);u!==null&&(S=new Bn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let I=0,F=z.length;I<F;I++){const C=z[I];if(S.setX(C,O[I*f]),f>=2&&S.setY(C,O[I*f+1]),f>=3&&S.setZ(C,O[I*f+2]),f>=4&&S.setW(C,O[I*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const d=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=c.name||u.name||"",p.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(p.name=u.uri);const v=(a.samplers||{})[c.sampler]||{};return p.magFilter=kv[v.magFilter]||xn,p.minFilter=kv[v.minFilter]||nr,p.wrapS=Bv[v.wrapS]||vo,p.wrapT=Bv[v.wrapT]||vo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==kn&&p.minFilter!==xn,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=d,d}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",d=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(g){d=!0;const v=new Blob([g],{type:c.mimeType});return f=u.createObjectURL(v),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(g){return new Promise(function(v,x){let M=v;t.isImageBitmapLoader===!0&&(M=function(E){const S=new on(E);S.needsUpdate=!0,v(S)}),t.load(wa.resolveURL(g,a.path),M,void 0,x)})}).then(function(g){return d===!0&&u.revokeObjectURL(f),tr(g,c),g.userData.mimeType=c.mimeType||ER(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=p,p}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[Tt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new P0,Ri.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new b0,Ri.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return bd}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},d=[];if(f[Tt.KHR_MATERIALS_UNLIT]){const g=s[Tt.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),d.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new ut(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const v=g.baseColorFactor;u.color.setRGB(v[0],v[1],v[2],zn),u.opacity=v[3]}g.baseColorTexture!==void 0&&d.push(t.assignTexture(u,"map",g.baseColorTexture,sn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),d.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=ni);const p=a.alphaMode||sh.OPAQUE;if(p===sh.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,p===sh.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==hi&&(d.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new Le(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==hi&&(d.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==hi){const g=a.emissiveFactor;u.emissive=new ut().setRGB(g[0],g[1],g[2],zn)}return a.emissiveTexture!==void 0&&c!==hi&&d.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,sn)),Promise.all(d).then(function(){const g=new c(u);return a.name&&(g.name=a.name),tr(g,a),t.associations.set(g,{materials:e}),a.extensions&&ds(s,g,a),g})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return zv(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const d=e[u],p=MR(d),g=s[p];if(g)c.push(g.promise);else{let v;d.extensions&&d.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?v=a(d):v=zv(new Kn,d,t),s[p]={primitive:d,promise:v},c.push(v)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f].material===void 0?xR(this.cache):this.getDependency("material",c[f].material);u.push(p)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const d=f.slice(0,f.length-1),p=f[f.length-1],g=[];for(let x=0,M=p.length;x<M;x++){const E=p[x],S=c[x];let y;const N=d[x];if(S.mode===ui.TRIANGLES||S.mode===ui.TRIANGLE_STRIP||S.mode===ui.TRIANGLE_FAN||S.mode===void 0)y=a.isSkinnedMesh===!0?new HS(E,N):new Bt(E,N),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===ui.TRIANGLE_STRIP?y.geometry=Fv(y.geometry,d0):S.mode===ui.TRIANGLE_FAN&&(y.geometry=Fv(y.geometry,jh));else if(S.mode===ui.LINES)y=new qS(E,N);else if(S.mode===ui.LINE_STRIP)y=new Sd(E,N);else if(S.mode===ui.LINE_LOOP)y=new YS(E,N);else if(S.mode===ui.POINTS)y=new KS(E,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&SR(y,a),y.name=t.createUniqueName(a.name||"mesh_"+e),tr(y,a),S.extensions&&ds(s,y,S),t.assignFinalMaterial(y),g.push(y)}for(let x=0,M=g.length;x<M;x++)t.associations.set(g[x],{meshes:e,primitives:x});if(g.length===1)return a.extensions&&ds(s,g[0],a),g[0];const v=new kr;a.extensions&&ds(s,v,a),t.associations.set(v,{meshes:e});for(let x=0,M=g.length;x<M;x++)v.add(g[x]);return v})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Fn(g0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ld(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),tr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let d=0,p=c.length;d<p;d++){const g=c[d];if(g){u.push(g);const v=new mt;a!==null&&v.fromArray(a.array,d*16),f.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new xd(u,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],d=[],p=[];for(let g=0,v=s.channels.length;g<v;g++){const x=s.channels[g],M=s.samplers[x.sampler],E=x.target,S=E.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,N=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",y)),f.push(this.getDependency("accessor",N)),d.push(M),p.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(p)]).then(function(g){const v=g[0],x=g[1],M=g[2],E=g[3],S=g[4],y=[];for(let N=0,P=v.length;N<P;N++){const w=v[N],z=x[N],O=M[N],I=E[N],F=S[N];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const C=i._createAnimationTracks(w,z,O,I,F);if(C)for(let R=0;R<C.length;R++)y.push(C[R])}return new zM(a,void 0,y)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,d=s.weights.length;f<d;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let d=0,p=u.length;d<p;d++)c.push(i.getDependency("node",u[d]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(d){const p=d[0],g=d[1],v=d[2];v!==null&&p.traverse(function(x){x.isSkinnedMesh&&x.bind(v,TR)});for(let x=0,M=g.length;x<M;x++)p.add(g[x]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){u.push(d)}),this.nodeCache[e]=Promise.all(u).then(function(d){let p;if(a.isBone===!0?p=new R0:d.length>1?p=new kr:d.length===1?p=d[0]:p=new jt,p!==d[0])for(let g=0,v=d.length;g<v;g++)p.add(d[g]);if(a.name&&(p.userData.name=a.name,p.name=c),tr(p,a),a.extensions&&ds(i,p,a),a.matrix!==void 0){const g=new mt;g.fromArray(a.matrix),p.applyMatrix4(g)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);return s.associations.has(p)||s.associations.set(p,{}),s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new kr;i.name&&(a.name=s.createUniqueName(i.name)),tr(a,i),i.extensions&&ds(t,a,i);const c=i.nodes||[],u=[];for(let f=0,d=c.length;f<d;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let p=0,g=f.length;p<g;p++)a.add(f[p]);const d=p=>{const g=new Map;for(const[v,x]of s.associations)(v instanceof Ri||v instanceof on)&&g.set(v,x);return p.traverse(v=>{const x=s.associations.get(v);x!=null&&g.set(v,x)}),g};return s.associations=d(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];Ur[a.path]===Ur.weights?e.traverse(function(v){v.morphTargetInfluences&&f.push(v.name?v.name:v.uuid)}):f.push(u);let d;switch(Ur[a.path]){case Ur.weights:d=Mo;break;case Ur.rotation:d=Eo;break;case Ur.position:case Ur.scale:d=To;break;default:switch(i.itemSize){case 1:d=Mo;break;case 2:case 3:default:d=To;break}break}const p=s.interpolation!==void 0?_R[s.interpolation]:ba,g=this._getArrayFromAccessor(i);for(let v=0,x=f.length;v<x;v++){const M=new d(f[v]+"."+Ur[a.path],t.array,g,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=nd(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Eo?vR:$0;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AR(o,e,t){const i=e.attributes,s=new ar;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,d=u.max;if(f!==void 0&&d!==void 0){if(s.set(new G(f[0],f[1],f[2]),new G(d[0],d[1],d[2])),u.normalized){const p=nd(ho[u.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new G,f=new G;for(let d=0,p=a.length;d<p;d++){const g=a[d];if(g.POSITION!==void 0){const v=t.json.accessors[g.POSITION],x=v.min,M=v.max;if(x!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),v.normalized){const E=nd(ho[v.componentType]);f.multiplyScalar(E)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Ui;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function zv(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in i){const u=td[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Rt.workingColorSpace!==zn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),tr(o,e),AR(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?yR(o,e.targets,t):o})}const id=2.42,rd=5.24,RR="/device-render-studio/models/iphone-17-pro.glb",CR=38,ah={front:{rotation:new On(0,0,0),camera:new G(0,.16,10.8)},hero:{rotation:new On(-.16,.42,-.06),camera:new G(3.2,1.8,11.8)},isometric:{rotation:new On(-.36,.64,-.08),camera:new G(4.5,2.8,12.2)},orbit:{rotation:new On(-.12,-.66,.04),camera:new G(-3.6,1.8,11.8)}};function Z0(o,e,t){const i=-o/2,s=-e/2,a=new Ad;return a.moveTo(i+t,s),a.lineTo(i+o-t,s),a.quadraticCurveTo(i+o,s,i+o,s+t),a.lineTo(i+o,s+e-t),a.quadraticCurveTo(i+o,s+e,i+o-t,s+e),a.lineTo(i+t,s+e),a.quadraticCurveTo(i,s+e,i,s+e-t),a.lineTo(i,s+t),a.quadraticCurveTo(i,s,i+t,s),a}function Hv(o,e,t,i){const s=new Rd(Z0(o,e,i),{depth:t,bevelEnabled:!0,bevelSegments:9,bevelSize:.05,bevelThickness:.035,curveSegments:18});return s.center(),s}function Fr(o,e,t){const i=new Cd(Z0(o,e,t),24),s=i.attributes.position,a=[];for(let c=0;c<s.count;c+=1){const u=s.getX(c),f=s.getY(c);a.push((u+o/2)/o,(f+e/2)/e)}return i.setAttribute("uv",new Jt(a,2)),i}function J0(){const o=document.createElement("canvas");o.width=900,o.height=1950;const e=o.getContext("2d"),t=e.createLinearGradient(0,0,900,1950);t.addColorStop(0,"#0f172a"),t.addColorStop(.54,"#0e7490"),t.addColorStop(1,"#e2e8f0"),e.fillStyle=t,e.fillRect(0,0,900,1950),e.fillStyle="rgba(255, 255, 255, 0.18)";for(let s=0;s<6;s+=1)e.beginPath(),e.roundRect(90,520+s*170,720,116,34),e.fill();e.fillStyle="#ffffff",e.font="700 72px Inter, system-ui, sans-serif",e.fillText("Mockup",96,330),e.font="500 34px Inter, system-ui, sans-serif",e.fillText("Drop in an image or video",96,392),e.fillStyle="rgba(255, 255, 255, 0.9)",e.beginPath(),e.roundRect(96,1560,708,180,44),e.fill(),e.fillStyle="#0f172a",e.font="700 42px Inter, system-ui, sans-serif",e.fillText("Ready to render",146,1660);const i=new ZS(o);return i.colorSpace=sn,i.anisotropy=8,i}function bR(o,e,t){const i=id/rd,s=e/t;if(o.wrapS=Di,o.wrapT=Di,o.offset.set(0,0),o.repeat.set(1,1),s>i){const a=i/s;o.repeat.x=a,o.offset.x=(1-a)/2}else{const a=s/i;o.repeat.y=a,o.offset.y=(1-a)/2}o.colorSpace=sn,o.anisotropy=12,o.needsUpdate=!0}function Vv(o,e=new Set){(Array.isArray(o)?o:[o]).forEach(i=>{!i||e.has(i)||(e.add(i),i.map&&i.map.dispose(),i.dispose())})}function Gv(o){const e=new Set,t=new Set;o.traverse(i=>{var s,a;i.geometry&&!e.has(i.geometry)&&(e.add(i.geometry),i.geometry.dispose()),i.material&&Vv(i.material,t),(a=(s=i.userData)==null?void 0:s.replacedMaterials)==null||a.forEach(c=>{Vv(c,t)})})}function Wv(o,e,t){var i;e.material&&e.material!==t&&((i=o.userData).replacedMaterials??(i.replacedMaterials=new Set),(Array.isArray(e.material)?e.material:[e.material]).forEach(a=>o.userData.replacedMaterials.add(a))),e.material=t}function PR(o){const e=o.attributes.position;if(!e)return;o.computeBoundingBox();const{min:t,max:i}=o.boundingBox,s=i.x-t.x||1,a=i.y-t.y||1,c=[];for(let u=0;u<e.count;u+=1){const f=e.getX(u),d=e.getY(u);c.push((f-t.x)/s,(d-t.y)/a)}o.setAttribute("uv",new Jt(c,2)),o.attributes.uv.needsUpdate=!0}function LR(o){const e=new hi({color:"#050507",side:ni,toneMapped:!1}),t=new Bt(Fr(.0102,.0034,.0017),e);t.name="Screen island fill",t.position.set(-.0036,.06715,.00474),t.renderOrder=5;const i=new Bt(new Td(.0019,48),e);i.name="Screen camera fill",i.position.set(.00735,.06715,.00475),i.renderOrder=5,o.add(t,i)}function NR(o,e){o.name="iPhone 17 Pro GLB",o.scale.setScalar(CR),o.traverse(t=>{var s;if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0;const i=Array.isArray(t.material)?t.material.map(a=>a==null?void 0:a.name).filter(Boolean):[(s=t.material)==null?void 0:s.name].filter(Boolean);if(t.name==="Cube004_2"||i.includes("Display")){PR(t.geometry),Wv(o,t,e.screen),t.renderOrder=2;return}i.includes("Glass")&&(Wv(o,t,e.glass),t.renderOrder=3)}),LR(o)}function IR(){const o=new kr,e=new Cn({color:"#161a20",clearcoat:.92,clearcoatRoughness:.22,metalness:.82,roughness:.2}),t=new Cn({color:"#2d343d",clearcoat:.72,clearcoatRoughness:.18,metalness:.88,roughness:.18}),i=new Cn({color:"#05070b",clearcoat:1,clearcoatRoughness:.045,metalness:0,roughness:.08}),s=new Cn({color:"#ffffff",transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,metalness:0,roughness:.05,side:ni}),a=new Bt(Hv(2.82,5.78,.32,.44),e);a.castShadow=!0,a.receiveShadow=!0,o.add(a);const c=new Bt(Fr(2.62,5.5,.34),i);c.position.z=.224,c.castShadow=!0;const u=new Bt(Fr(2.74,5.66,.4),t);u.position.z=.218,u.castShadow=!0,o.add(u),o.add(c);const f=new hi({map:J0(),side:ni,toneMapped:!1}),d=new Bt(Fr(id,rd,.27),f);d.position.z=.236,d.castShadow=!1,o.add(d);const p=new Bt(Fr(id,rd,.27),s);p.position.z=.245,o.add(p);const g=new Cn({color:"#020306",clearcoat:1,clearcoatRoughness:.03,metalness:0,roughness:.04}),v=new Bt(Hv(.66,.19,.035,.095),g);v.position.set(0,2.36,.272),v.castShadow=!0,o.add(v);const x=new Cn({color:"#070a0f",clearcoat:1,clearcoatRoughness:.02,roughness:.1,metalness:.08}),M=new Bt(new wd(.038,.038,.014,36),x);M.rotation.x=Math.PI/2,M.position.set(.22,2.36,.294),o.add(M);const E=new Bt(Fr(.34,.032,.016),new hi({color:"#1b222c",transparent:!0,opacity:.86}));E.position.set(-.08,2.36,.296),o.add(E);const S=new Bt(Fr(.58,.035,.017),new hi({color:"#ffffff",transparent:!0,opacity:.76}));S.position.set(0,-2.34,.278),o.add(S);const y=new Bt(Fr(.08,4.4,.04),new hi({color:"#ffffff",transparent:!0,opacity:.14}));y.position.set(-.94,.12,.282),y.rotation.z=-.08,o.add(y);const N=t.clone();return[[-1.45,1.45,.22],[-1.45,.86,.34],[-1.45,.38,.34],[1.45,.78,.48]].forEach(([P,w,z])=>{const O=new Bt(new Ao(.045,z,.072),N);O.position.set(P,w,.015),O.castShadow=!0,o.add(O)}),{group:o,materials:{body:e,edge:t,glass:s,screen:f}}}const Q0=xt.forwardRef(function({screenMedia:e,settings:t,onDragStart:i,onDragEnd:s,onMediaError:a,onMediaReady:c,onPlaybackStateChange:u},f){const d=xt.useRef(null),p=xt.useRef(null),g=xt.useRef(null),v=xt.useRef(null),x=xt.useRef(null),M=xt.useRef(null),E=xt.useRef(null),S=xt.useRef(null),y=xt.useRef(new On),N=xt.useRef(new G),P=xt.useRef(t),w=xt.useRef({active:!1,x:0,y:0}),[z,O]=xt.useState("procedural");return xt.useImperativeHandle(f,()=>({exportPng(){return!p.current||!g.current||!v.current?null:(p.current.render(g.current,v.current),p.current.domElement.toDataURL("image/png"))},resetView(){const I=ah[P.current.angle];y.current.copy(I.rotation),N.current.copy(I.camera)}})),xt.useEffect(()=>{P.current=t},[t]),xt.useEffect(()=>{const I=d.current,F=new XA({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),C=new kS,R=new Fn(34,1,.1,100),{group:k,materials:ee}=IR(),K=new qM("#ffffff","#a8b8c6",1.8),ne=new Qh("#ffffff",4.6),le=new Qh("#bdefff",2.2),te=new G0("#ffffff",1.2,12),ce=new LM({color:"#1f2937",opacity:.18}),H=new Bt(new Ua(14,14),ce);let fe=!1;F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.outputColorSpace=sn,F.toneMapping=t0,F.toneMappingExposure=1.08,F.shadowMap.enabled=!0,F.shadowMap.type=Qv,F.domElement.className="render-canvas",F.domElement.setAttribute("aria-label","3D device render"),I.appendChild(F.domElement),ne.position.set(3.8,4.8,4.8),ne.castShadow=!0,ne.shadow.mapSize.set(2048,2048),le.position.set(-4.2,2.6,3.4),te.position.set(0,2.2,4.5),H.rotation.x=-Math.PI/2,H.position.y=-2.74,H.receiveShadow=!0,k.position.y=.02,k.scale.setScalar(.9),k.userData.proceduralChildren=[...k.children],C.add(K,ne,le,te,k,H),new jA().load(RR,Ce=>{if(fe){Gv(Ce.scene);return}NR(Ce.scene,ee),k.userData.proceduralChildren.forEach(Ge=>{Ge.visible=!1}),k.add(Ce.scene),O("iphone-17-pro-glb")},void 0,()=>{fe||O("procedural-fallback")});const B=ah[t.angle];k.rotation.copy(B.rotation),R.position.copy(B.camera),y.current.copy(B.rotation),N.current.copy(B.camera),R.lookAt(0,0,0),p.current=F,g.current=C,v.current=R,x.current=k,M.current=ee,E.current={ambient:K,key:ne,rim:le,fill:te},S.current=H;const ie=()=>{const Ce=I.clientWidth,Ge=I.clientHeight;F.setSize(Ce,Ge,!1),R.aspect=Ce/Ge,R.updateProjectionMatrix()},Oe=new ResizeObserver(ie);Oe.observe(I),ie();const Q=Ce=>{w.current={active:!0,x:Ce.clientX,y:Ce.clientY},F.domElement.setPointerCapture(Ce.pointerId),i==null||i()},he=Ce=>{if(!w.current.active)return;const Ge=Ce.clientX-w.current.x,vt=Ce.clientY-w.current.y;w.current.x=Ce.clientX,w.current.y=Ce.clientY,y.current.y+=Ge*.009,y.current.x=g0.clamp(y.current.x+vt*.006,-.82,.52)},Se=Ce=>{w.current.active=!1,F.domElement.releasePointerCapture(Ce.pointerId),s==null||s()};F.domElement.addEventListener("pointerdown",Q),F.domElement.addEventListener("pointermove",he),F.domElement.addEventListener("pointerup",Se),F.domElement.addEventListener("pointercancel",Se),F.domElement.style.touchAction="none";let ge=0;const Pe=()=>{P.current.autoSpin&&!w.current.active&&(y.current.y+=.006),k.rotation.x+=(y.current.x-k.rotation.x)*.08,k.rotation.y+=(y.current.y-k.rotation.y)*.08,k.rotation.z+=(y.current.z-k.rotation.z)*.08,R.position.lerp(N.current,.045),R.lookAt(0,0,0),F.render(C,R),ge=window.requestAnimationFrame(Pe)};return Pe(),()=>{fe=!0,window.cancelAnimationFrame(ge),Oe.disconnect(),F.domElement.removeEventListener("pointerdown",Q),F.domElement.removeEventListener("pointermove",he),F.domElement.removeEventListener("pointerup",Se),F.domElement.removeEventListener("pointercancel",Se),I.removeChild(F.domElement),F.dispose(),Gv(C)}},[s,i]),xt.useEffect(()=>{const I=ah[t.angle];y.current.copy(I.rotation);const F=(t.depth-50)/100;N.current.copy(I.camera).multiplyScalar(1-F*.08)},[t.angle,t.depth]),xt.useEffect(()=>{const I=M.current,F=E.current,C=g.current,R=p.current,k=S.current;if(!I||!F||!C||!R||!k)return;const ee=Zv.find(le=>le.id===t.material),K=lh.find(le=>le.id===t.background)??lh[0];I.body.color.set(ee.body),I.body.metalness=ee.metalness,I.body.roughness=ee.roughness,I.edge.color.set(ee.edge),I.glass.opacity=.1+t.reflection/420,I.glass.clearcoatRoughness=Math.max(.02,.18-t.reflection/700),F.key.intensity=1.5+t.lighting/18,F.rim.intensity=.4+t.reflection/34,F.fill.intensity=.55+t.lighting/110,k.material.opacity=.06+t.shadow/320,k.material.needsUpdate=!0;const ne=new ut(K.clear);C.background=ne,R.setClearColor(ne,1)},[t.background,t.lighting,t.material,t.reflection,t.shadow]),xt.useEffect(()=>{var le;const I=(le=M.current)==null?void 0:le.screen;if(!I)return;let F=!1,C=null;const R=(te,ce,H)=>{if(F){te.dispose();return}bR(te,ce,H),te.minFilter=xn,te.magFilter=xn,I.map&&I.map.dispose(),I.map=te,I.needsUpdate=!0};if(!e)return R(J0(),900,1950),c==null||c(),()=>{F=!0};if(e.kind==="image")return new V0().load(e.url,ce=>{const H=ce.image;R(ce,H.naturalWidth||H.width,H.naturalHeight||H.height),c==null||c()},void 0,()=>a==null?void 0:a()),()=>{F=!0};C=document.createElement("video"),C.src=e.url,C.crossOrigin="anonymous",C.loop=!0,C.muted=!0,C.playsInline=!0,C.autoplay=!0,C.preload="auto";const k=()=>{const te=C.videoWidth||1080,ce=C.videoHeight||1920,H=new $S(C);H.generateMipmaps=!1,R(H,te,ce),C.play().catch(()=>{u==null||u("paused")})},ee=()=>u==null?void 0:u("playing"),K=()=>{F||u==null||u("paused")},ne=()=>a==null?void 0:a();return C.addEventListener("loadedmetadata",k,{once:!0}),C.addEventListener("playing",ee),C.addEventListener("pause",K),C.addEventListener("error",ne),C.load(),()=>{F=!0,C.removeEventListener("loadedmetadata",k),C.removeEventListener("playing",ee),C.removeEventListener("pause",K),C.removeEventListener("error",ne),C.pause(),C.removeAttribute("src"),C.load()}},[a,c,u,e]),W.jsx("div",{className:"viewport-host","data-model-source":z,"data-screen-kind":(e==null?void 0:e.kind)??"default",ref:d})});function DR({screenLabel:o,statusLabel:e,onUpload:t,onExport:i,onReset:s,fileInputRef:a}){return W.jsxs("header",{className:"topbar",children:[W.jsxs("div",{className:"brand",children:[W.jsx("div",{className:"brand-mark","aria-hidden":"true",children:W.jsx(od,{size:18,strokeWidth:2.2})}),W.jsxs("div",{children:[W.jsx("strong",{children:"Device Render Studio"}),W.jsx("span",{children:o})]})]}),W.jsxs("div",{className:"toolbar-center","aria-label":"Scene tools",children:[W.jsxs("button",{className:"icon-button",type:"button",onClick:s,children:[W.jsx(ty,{size:17}),W.jsx("span",{children:"Reset"})]}),W.jsx("div",{className:"toolbar-divider"}),W.jsxs("span",{className:"status-pill",children:[W.jsx(iy,{size:15}),e]}),W.jsxs("span",{className:"status-pill subtle",children:[W.jsx(Qx,{size:15}),"Scene"]})]}),W.jsxs("div",{className:"toolbar-actions",children:[W.jsx("input",{ref:a,className:"visually-hidden",type:"file",accept:"image/*,video/*",onChange:t}),W.jsxs("button",{className:"button secondary",type:"button",onClick:()=>{var c;return(c=a.current)==null?void 0:c.click()},children:[W.jsx(ad,{size:17}),"Import"]}),W.jsxs("button",{className:"button primary",type:"button",onClick:i,children:[W.jsx(Aa,{size:17}),"Export PNG"]})]})]})}function UR({activeAngle:o,renderMode:e,onPreset:t}){const i=e==="video"?ry:Kv;return W.jsxs("div",{className:"preset-rail","aria-label":"Angle presets",children:[W.jsxs("div",{className:"rail-status",children:[W.jsx("span",{className:"ready-dot"}),W.jsxs("div",{children:[W.jsx("strong",{children:"Ready"}),W.jsx("span",{children:"Realtime preview"})]})]}),W.jsx("div",{className:"preset-list",children:ld.map(s=>W.jsxs("button",{type:"button",className:s.id===o?"preset-tile selected":"preset-tile",onClick:()=>t(s.id),children:[W.jsx("span",{className:"preset-glyph",children:W.jsx(qv,{size:16})}),W.jsx("span",{children:s.label})]},s.id))}),W.jsxs("div",{className:"rail-meta",children:[W.jsxs("span",{children:[W.jsx(i,{size:15}),e==="video"?"Video":"Image"]}),W.jsxs("span",{children:[W.jsx(Aa,{size:15}),"PNG"]})]})]})}function FR(o,e){return o?o.kind==="image"?"Image ready":e==="playing"?"Video playing":e==="error"?"Video issue":e==="paused"?"Video paused":"Video loading":"Ready"}function OR(){return W.jsxs("header",{className:"landing-nav",children:[W.jsxs("a",{className:"landing-brand",href:"#top","aria-label":"Device Render Studio home",children:[W.jsx("span",{className:"landing-brand-mark","aria-hidden":"true",children:W.jsx(od,{size:20,strokeWidth:2.2})}),W.jsx("strong",{children:"Device Render Studio"})]}),W.jsxs("nav",{className:"landing-links","aria-label":"Landing page",children:[W.jsx("a",{href:"#product",children:"Product"}),W.jsx("a",{href:"#workflow",children:"Workflow"}),W.jsx("a",{href:"#features",children:"Features"}),W.jsx("a",{href:"#launch",children:"Pricing"})]}),W.jsx("a",{className:"nav-cta",href:"#studio",children:"Open Studio"})]})}function kR({screenMedia:o,settings:e,onDragStart:t,onDragEnd:i,onMediaError:s,onMediaReady:a,onPlaybackStateChange:c}){var u;return W.jsx("div",{className:"hero-product",id:"product","aria-label":"Product preview",children:W.jsxs("div",{className:"browser-frame",children:[W.jsxs("div",{className:"browser-top",children:[W.jsx("span",{className:"traffic red"}),W.jsx("span",{className:"traffic yellow"}),W.jsx("span",{className:"traffic green"}),W.jsx("span",{className:"browser-url",children:"studio.devicerender.app"}),W.jsx("span",{className:"browser-action",children:W.jsx(Aa,{size:15})})]}),W.jsxs("div",{className:"preview-workbench",children:[W.jsxs("aside",{className:"preview-sidebar dark",children:[W.jsx("strong",{children:"Content"}),W.jsxs("div",{className:"upload-target",children:[W.jsx(ad,{size:18}),W.jsx("span",{children:"Drop screenshot or video"})]}),W.jsxs("div",{className:"preview-field",children:[W.jsx("span",{children:"Scene"}),W.jsx("strong",{children:"Soft Studio"})]}),W.jsxs("div",{className:"preview-field",children:[W.jsx("span",{children:"Angle"}),W.jsx("strong",{children:(u=ld.find(f=>f.id===e.angle))==null?void 0:u.label})]})]}),W.jsx("div",{className:"preview-canvas",children:W.jsx(Q0,{screenMedia:o,settings:e,onDragStart:t,onDragEnd:i,onMediaError:s,onMediaReady:a,onPlaybackStateChange:c})}),W.jsxs("aside",{className:"preview-sidebar",children:[W.jsx("strong",{children:"Device"}),W.jsxs("div",{className:"preview-device-row",children:[W.jsx("span",{className:"device-thumb"}),W.jsxs("div",{children:[W.jsx("span",{children:"iPhone 17 Pro"}),W.jsx("small",{children:"Graphite"})]})]}),W.jsxs("div",{className:"preview-light-grid",children:[W.jsx("span",{className:"selected",children:"Soft"}),W.jsx("span",{children:"Natural"}),W.jsx("span",{children:"High Key"}),W.jsx("span",{children:"Dramatic"})]}),W.jsxs("button",{className:"preview-export",type:"button",children:[W.jsx(Aa,{size:15}),"Export PNG"]})]})]})]})})}function BR({screenMedia:o,settings:e,onDragStart:t,onDragEnd:i,onMediaError:s,onMediaReady:a,onPlaybackStateChange:c}){return W.jsxs("section",{className:"hero-section","aria-label":"Device Render Studio landing",children:[W.jsxs("div",{className:"hero-copy",children:[W.jsx("h1",{children:"Create app mockups that look ready to ship"}),W.jsx("p",{children:"Drop in a screenshot or video, adjust the scene, and export crisp device renders for launch pages, ads, app stores, and socials."}),W.jsxs("div",{className:"hero-actions",children:[W.jsxs("a",{className:"hero-button primary-action",href:"#studio",children:[W.jsx(qx,{size:18}),"Open Studio"]}),W.jsxs("a",{className:"hero-button secondary-action",href:"#workflow",children:[W.jsx(Yv,{size:18}),"See workflow"]})]}),W.jsxs("div",{className:"hero-proof","aria-label":"Product proof",children:[W.jsxs("span",{children:[W.jsx(Sf,{size:16}),"Browser-based"]}),W.jsxs("span",{children:[W.jsx(Sf,{size:16}),"Image and video screens"]}),W.jsxs("span",{children:[W.jsx(Sf,{size:16}),"PNG export"]})]})]}),W.jsx(kR,{screenMedia:o,settings:e,onDragStart:t,onDragEnd:i,onMediaError:s,onMediaReady:a,onPlaybackStateChange:c})]})}function zR(){const o=[{title:"Import",text:"Upload a screenshot or short product video.",icon:ad},{title:"Adjust",text:"Choose angles, lighting, device finish, and background.",icon:$v},{title:"Export",text:"Download a polished PNG render from the canvas.",icon:Aa}];return W.jsxs("section",{className:"workflow-band",id:"workflow","aria-label":"Simple workflow",children:[W.jsx("h2",{children:"A simple workflow"}),W.jsx("div",{className:"workflow-list",children:o.map((e,t)=>{const i=e.icon;return W.jsxs("article",{className:"workflow-step",children:[W.jsx("span",{className:"step-icon",children:W.jsx(i,{size:21})}),W.jsxs("span",{className:"step-count",children:["Step ",t+1]}),W.jsx("h3",{children:e.title}),W.jsx("p",{children:e.text})]},e.title)})})]})}function HR(){const o=[{title:"Screenshots and videos",text:"Map static images or moving screen captures onto the device display.",icon:Yv},{title:"Real 3D devices",text:"Orbit the model, change angles, and tune depth without opening Blender.",icon:od},{title:"Lighting presets",text:"Use reflection, shadow, key light, and background controls from one panel.",icon:sy},{title:"Fast PNG export",text:"Capture the current scene for websites, launch posts, and app store assets.",icon:Kv}];return W.jsxs("section",{className:"feature-section",id:"features","aria-label":"Product features",children:[W.jsxs("div",{className:"feature-copy",children:[W.jsx("h2",{children:"Built for product visuals that need to convert"}),W.jsx("p",{children:"The goal is not a full 3D suite. It is a focused render workflow that helps teams turn raw app screens into polished marketing assets."})]}),W.jsx("div",{className:"feature-grid",children:o.map(e=>{const t=e.icon;return W.jsxs("article",{className:"feature-card",children:[W.jsx("span",{className:"feature-icon",children:W.jsx(t,{size:20})}),W.jsx("h3",{children:e.title}),W.jsx("p",{children:e.text})]},e.title)})})]})}function VR(){return W.jsxs("section",{className:"launch-section",id:"launch","aria-label":"Launch pricing",children:[W.jsxs("div",{children:[W.jsx("h2",{children:"Launch pricing"}),W.jsx("p",{children:"Early access will start with a simple creator plan before team libraries, templates, and cloud rendering."})]}),W.jsxs("form",{className:"waitlist-form",children:[W.jsx("label",{className:"visually-hidden",htmlFor:"waitlist-email",children:"Email address"}),W.jsx("input",{id:"waitlist-email",type:"email",placeholder:"you@company.com"}),W.jsx("button",{type:"button",children:"Join waitlist"})]})]})}function GR(){const[o,e]=xt.useState(null),[t,i]=xt.useState("Demo screen"),[s,a]=xt.useState("ready"),[c,u]=xt.useState(hg),[f,d]=xt.useState(!1),p=xt.useRef(null),g=xt.useRef(null),v=(z,O)=>{u(I=>({...I,[z]:O}))};xt.useEffect(()=>()=>{var z;(z=o==null?void 0:o.url)!=null&&z.startsWith("blob:")&&URL.revokeObjectURL(o.url)},[o]);const x=z=>{var F;const O=(F=z.target.files)==null?void 0:F[0];if(!O)return;const I=O.type.startsWith("video/")?"video":O.type.startsWith("image/")?"image":null;if(!I){z.target.value="";return}e({kind:I,mimeType:O.type,name:O.name,url:URL.createObjectURL(O)}),i(O.name),a(I==="video"?"loading":"ready"),z.target.value=""},M=xt.useCallback(()=>{a("ready")},[]),E=xt.useCallback(()=>{a("error")},[]),S=xt.useCallback(z=>{a(z)},[]),y=xt.useCallback(()=>{d(!0)},[]),N=xt.useCallback(()=>{d(!1)},[]),P=()=>{var I;const z=(I=g.current)==null?void 0:I.exportPng();if(!z)return;const O=document.createElement("a");O.href=z,O.download="device-render-studio.png",document.body.appendChild(O),O.click(),O.remove()},w=()=>{var z;u(hg),(z=g.current)==null||z.resetView()};return W.jsxs("main",{className:"app",id:"top",children:[W.jsx(OR,{}),W.jsx(BR,{screenMedia:o,settings:c,onDragStart:y,onDragEnd:N,onMediaError:E,onMediaReady:M,onPlaybackStateChange:S}),W.jsx(zR,{}),W.jsx(HR,{}),W.jsx(VR,{}),W.jsxs("section",{className:"studio-product",id:"studio","aria-label":"Device Render Studio app",children:[W.jsx(DR,{screenLabel:t,statusLabel:FR(o,s),onUpload:x,onExport:P,onReset:w,fileInputRef:p}),W.jsxs("div",{className:"workspace",children:[W.jsxs("section",{className:"stage-area","aria-label":"3D render workspace",children:[W.jsxs("div",{className:"viewport-shell",children:[W.jsx(Q0,{ref:g,screenMedia:o,settings:c,onDragStart:y,onDragEnd:N,onMediaError:E,onMediaReady:M,onPlaybackStateChange:S}),W.jsxs("div",{className:"canvas-hud top-left",children:[W.jsx(Yx,{size:15}),W.jsx("span",{children:"Scene"})]}),W.jsxs("div",{className:f?"canvas-hud bottom-left active":"canvas-hud bottom-left",children:[W.jsx(Zx,{size:15}),W.jsx("span",{children:f?"Orbiting":"Drag to orbit"})]})]}),W.jsx(UR,{activeAngle:c.angle,renderMode:(o==null?void 0:o.kind)??"image",onPreset:z=>v("angle",z)})]}),W.jsx(ly,{settings:c,onSettingChange:v})]})]})]})}const WR=Hx.createRoot(document.getElementById("root"));Vx.flushSync(()=>{WR.render(W.jsx(Fx.StrictMode,{children:W.jsx(GR,{})}))});
