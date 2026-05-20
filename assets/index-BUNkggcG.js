(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Ty(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var mf={exports:{}},la={},gf={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function wy(){if(Zm)return Mt;Zm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(B,ne,Oe){this.props=B,this.context=ne,this.refs=E,this.updater=Oe||y}S.prototype.isReactComponent={},S.prototype.setState=function(B,ne){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ne,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function x(){}x.prototype=S.prototype;function N(B,ne,Oe){this.props=B,this.context=ne,this.refs=E,this.updater=Oe||y}var P=N.prototype=new x;P.constructor=N,M(P,S.prototype),P.isPureReactComponent=!0;var w=Array.isArray,z=Object.prototype.hasOwnProperty,O={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function F(B,ne,Oe){var J,fe={},xe=null,me=null;if(ne!=null)for(J in ne.ref!==void 0&&(me=ne.ref),ne.key!==void 0&&(xe=""+ne.key),ne)z.call(ne,J)&&!I.hasOwnProperty(J)&&(fe[J]=ne[J]);var Pe=arguments.length-2;if(Pe===1)fe.children=Oe;else if(1<Pe){for(var Ce=Array(Pe),Ge=0;Ge<Pe;Ge++)Ce[Ge]=arguments[Ge+2];fe.children=Ce}if(B&&B.defaultProps)for(J in Pe=B.defaultProps,Pe)fe[J]===void 0&&(fe[J]=Pe[J]);return{$$typeof:o,type:B,key:xe,ref:me,props:fe,_owner:O.current}}function C(B,ne){return{$$typeof:o,type:B.type,key:ne,ref:B.ref,props:B.props,_owner:B._owner}}function R(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function k(B){var ne={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Oe){return ne[Oe]})}var Q=/\/+/g;function Y(B,ne){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):ne.toString(36)}function te(B,ne,Oe,J,fe){var xe=typeof B;(xe==="undefined"||xe==="boolean")&&(B=null);var me=!1;if(B===null)me=!0;else switch(xe){case"string":case"number":me=!0;break;case"object":switch(B.$$typeof){case o:case e:me=!0}}if(me)return me=B,fe=fe(me),B=J===""?"."+Y(me,0):J,w(fe)?(Oe="",B!=null&&(Oe=B.replace(Q,"$&/")+"/"),te(fe,ne,Oe,"",function(Ge){return Ge})):fe!=null&&(R(fe)&&(fe=C(fe,Oe+(!fe.key||me&&me.key===fe.key?"":(""+fe.key).replace(Q,"$&/")+"/")+B)),ne.push(fe)),1;if(me=0,J=J===""?".":J+":",w(B))for(var Pe=0;Pe<B.length;Pe++){xe=B[Pe];var Ce=J+Y(xe,Pe);me+=te(xe,ne,Oe,Ce,fe)}else if(Ce=v(B),typeof Ce=="function")for(B=Ce.call(B),Pe=0;!(xe=B.next()).done;)xe=xe.value,Ce=J+Y(xe,Pe++),me+=te(xe,ne,Oe,Ce,fe);else if(xe==="object")throw ne=String(B),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return me}function ae(B,ne,Oe){if(B==null)return B;var J=[],fe=0;return te(B,J,"","",function(xe){return ne.call(Oe,xe,fe++)}),J}function ee(B){if(B._status===-1){var ne=B._result;ne=ne(),ne.then(function(Oe){(B._status===0||B._status===-1)&&(B._status=1,B._result=Oe)},function(Oe){(B._status===0||B._status===-1)&&(B._status=2,B._result=Oe)}),B._status===-1&&(B._status=0,B._result=ne)}if(B._status===1)return B._result.default;throw B._result}var le={current:null},H={transition:null},ue={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:ae,forEach:function(B,ne,Oe){ae(B,function(){ne.apply(this,arguments)},Oe)},count:function(B){var ne=0;return ae(B,function(){ne++}),ne},toArray:function(B){return ae(B,function(ne){return ne})||[]},only:function(B){if(!R(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Mt.Component=S,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=N,Mt.StrictMode=i,Mt.Suspense=h,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Mt.act=oe,Mt.cloneElement=function(B,ne,Oe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var J=M({},B.props),fe=B.key,xe=B.ref,me=B._owner;if(ne!=null){if(ne.ref!==void 0&&(xe=ne.ref,me=O.current),ne.key!==void 0&&(fe=""+ne.key),B.type&&B.type.defaultProps)var Pe=B.type.defaultProps;for(Ce in ne)z.call(ne,Ce)&&!I.hasOwnProperty(Ce)&&(J[Ce]=ne[Ce]===void 0&&Pe!==void 0?Pe[Ce]:ne[Ce])}var Ce=arguments.length-2;if(Ce===1)J.children=Oe;else if(1<Ce){Pe=Array(Ce);for(var Ge=0;Ge<Ce;Ge++)Pe[Ge]=arguments[Ge+2];J.children=Pe}return{$$typeof:o,type:B.type,key:fe,ref:xe,props:J,_owner:me}},Mt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},Mt.createElement=F,Mt.createFactory=function(B){var ne=F.bind(null,B);return ne.type=B,ne},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(B){return{$$typeof:u,render:B}},Mt.isValidElement=R,Mt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:ee}},Mt.memo=function(B,ne){return{$$typeof:d,type:B,compare:ne===void 0?null:ne}},Mt.startTransition=function(B){var ne=H.transition;H.transition={};try{B()}finally{H.transition=ne}},Mt.unstable_act=oe,Mt.useCallback=function(B,ne){return le.current.useCallback(B,ne)},Mt.useContext=function(B){return le.current.useContext(B)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(B){return le.current.useDeferredValue(B)},Mt.useEffect=function(B,ne){return le.current.useEffect(B,ne)},Mt.useId=function(){return le.current.useId()},Mt.useImperativeHandle=function(B,ne,Oe){return le.current.useImperativeHandle(B,ne,Oe)},Mt.useInsertionEffect=function(B,ne){return le.current.useInsertionEffect(B,ne)},Mt.useLayoutEffect=function(B,ne){return le.current.useLayoutEffect(B,ne)},Mt.useMemo=function(B,ne){return le.current.useMemo(B,ne)},Mt.useReducer=function(B,ne,Oe){return le.current.useReducer(B,ne,Oe)},Mt.useRef=function(B){return le.current.useRef(B)},Mt.useState=function(B){return le.current.useState(B)},Mt.useSyncExternalStore=function(B,ne,Oe){return le.current.useSyncExternalStore(B,ne,Oe)},Mt.useTransition=function(){return le.current.useTransition()},Mt.version="18.3.1",Mt}var Jm;function id(){return Jm||(Jm=1,gf.exports=wy()),gf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function Ay(){if(Qm)return la;Qm=1;var o=id(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var p,g={},v=null,y=null;d!==void 0&&(v=""+d),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!a.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:v,ref:y,props:g,_owner:s.current}}return la.Fragment=t,la.jsx=c,la.jsxs=c,la}var eg;function Ry(){return eg||(eg=1,mf.exports=Ay()),mf.exports}var Se=Ry(),yt=id();const Cy=Ty(yt);var Vl={},vf={exports:{}},qn={},_f={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function by(){return tg||(tg=1,(function(o){function e(H,ue){var oe=H.length;H.push(ue);e:for(;0<oe;){var B=oe-1>>>1,ne=H[B];if(0<s(ne,ue))H[B]=ue,H[oe]=ne,oe=B;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var ue=H[0],oe=H.pop();if(oe!==ue){H[0]=oe;e:for(var B=0,ne=H.length,Oe=ne>>>1;B<Oe;){var J=2*(B+1)-1,fe=H[J],xe=J+1,me=H[xe];if(0>s(fe,oe))xe<ne&&0>s(me,fe)?(H[B]=me,H[xe]=oe,B=xe):(H[B]=fe,H[J]=oe,B=J);else if(xe<ne&&0>s(me,oe))H[B]=me,H[xe]=oe,B=xe;else break e}}return ue}function s(H,ue){var oe=H.sortIndex-ue.sortIndex;return oe!==0?oe:H.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var h=[],d=[],p=1,g=null,v=3,y=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var ue=t(d);ue!==null;){if(ue.callback===null)i(d);else if(ue.startTime<=H)i(d),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(d)}}function w(H){if(E=!1,P(H),!M)if(t(h)!==null)M=!0,ee(z);else{var ue=t(d);ue!==null&&le(w,ue.startTime-H)}}function z(H,ue){M=!1,E&&(E=!1,x(F),F=-1),y=!0;var oe=v;try{for(P(ue),g=t(h);g!==null&&(!(g.expirationTime>ue)||H&&!k());){var B=g.callback;if(typeof B=="function"){g.callback=null,v=g.priorityLevel;var ne=B(g.expirationTime<=ue);ue=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(h)&&i(h),P(ue)}else i(h);g=t(h)}if(g!==null)var Oe=!0;else{var J=t(d);J!==null&&le(w,J.startTime-ue),Oe=!1}return Oe}finally{g=null,v=oe,y=!1}}var O=!1,I=null,F=-1,C=5,R=-1;function k(){return!(o.unstable_now()-R<C)}function Q(){if(I!==null){var H=o.unstable_now();R=H;var ue=!0;try{ue=I(!0,H)}finally{ue?Y():(O=!1,I=null)}}else O=!1}var Y;if(typeof N=="function")Y=function(){N(Q)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ae=te.port2;te.port1.onmessage=Q,Y=function(){ae.postMessage(null)}}else Y=function(){S(Q,0)};function ee(H){I=H,O||(O=!0,Y())}function le(H,ue){F=S(function(){H(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,ee(z))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function(H){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var oe=v;v=ue;try{return H()}finally{v=oe}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,ue){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var oe=v;v=H;try{return ue()}finally{v=oe}},o.unstable_scheduleCallback=function(H,ue,oe){var B=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?B+oe:B):oe=B,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=oe+ne,H={id:p++,callback:ue,priorityLevel:H,startTime:oe,expirationTime:ne,sortIndex:-1},oe>B?(H.sortIndex=oe,e(d,H),t(h)===null&&H===t(d)&&(E?(x(F),F=-1):E=!0,le(w,oe-B))):(H.sortIndex=ne,e(h,H),M||y||(M=!0,ee(z))),H},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(H){var ue=v;return function(){var oe=v;v=ue;try{return H.apply(this,arguments)}finally{v=oe}}}})(yf)),yf}var ng;function Py(){return ng||(ng=1,_f.exports=by()),_f.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Ly(){if(ig)return qn;ig=1;var o=id(),e=Py();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(n){return h.call(g,n)?!0:h.call(p,n)?!1:d.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,f,m,_,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,N);S[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,N);S[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,N);S[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,f){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,m,f)&&(l=null),f||m===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),H=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,B;function ne(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var Oe=!1;function J(n,r){if(!n||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ie){var f=ie}Reflect.construct(n,[],r)}else{try{r.call()}catch(ie){f=ie}n.call(r.prototype)}else{try{throw Error()}catch(ie){f=ie}n()}}catch(ie){if(ie&&f&&typeof ie.stack=="string"){for(var m=ie.stack.split(`
`),_=f.stack.split(`
`),T=m.length-1,U=_.length-1;1<=T&&0<=U&&m[T]!==_[U];)U--;for(;1<=T&&0<=U;T--,U--)if(m[T]!==_[U]){if(T!==1||U!==1)do if(T--,U--,0>U||m[T]!==_[U]){var V=`
`+m[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function fe(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case O:return"Portal";case C:return"Profiler";case F:return"StrictMode";case Y:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case Q:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ae:return r=n.displayName||null,r!==null?r:xe(n.type)||"Memo";case ee:r=n._payload,n=n._init;try{return xe(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ge(n){var r=Ce(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function vt(n){n._valueTracker||(n._valueTracker=Ge(n))}function ge(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ce(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function Ae(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function D(n,r){var l=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Je(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=Pe(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ee(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function He(n,r){Ee(n,r);var l=Pe(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?nt(n,r.type,l):r.hasOwnProperty("defaultValue")&&nt(n,r.type,Pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function be(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function nt(n,r,l){(r!=="number"||Ae(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ue=Array.isArray;function L(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+Pe(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ue(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Pe(l)}}function he(n,r){var l=Pe(r.value),f=Pe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function ve(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function pt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){qe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Te[r]=Te[n]})});function it(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Te.hasOwnProperty(n)&&Te[n]?(""+r).trim():r+"px"}function ot(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=it(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var Ye=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function St(n,r){if(r){if(Ye[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ft(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ie=null,ce=null,pe=null;function Be(n){if(n=qo(n)){if(typeof Ie!="function")throw Error(t(280));var r=n.stateNode;r&&(r=il(r),Ie(n.stateNode,n.type,r))}}function ke(n){ce?pe?pe.push(n):pe=[n]:ce=n}function ht(){if(ce){var n=ce,r=pe;if(pe=ce=null,Be(n),r)for(n=0;n<r.length;n++)Be(r[n])}}function zt(n,r){return n(r)}function sn(){}var Ct=!1;function Hn(n,r,l){if(Ct)return n(r,l);Ct=!0;try{return zt(n,r,l)}finally{Ct=!1,(ce!==null||pe!==null)&&(sn(),ht())}}function bn(n,r){var l=n.stateNode;if(l===null)return null;var f=il(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ss=!1;if(u)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Ss=!1}function ki(n,r,l,f,m,_,T,U,V){var ie=Array.prototype.slice.call(arguments,3);try{r.apply(l,ie)}catch(ye){this.onError(ye)}}var Bi=!1,Wr=null,Xr=!1,cr=null,Fa={onError:function(n){Bi=!0,Wr=n}};function Ms(n,r,l,f,m,_,T,U,V){Bi=!1,Wr=null,ki.apply(Fa,arguments)}function Oa(n,r,l,f,m,_,T,U,V){if(Ms.apply(this,arguments),Bi){if(Bi){var ie=Wr;Bi=!1,Wr=null}else throw Error(t(198));Xr||(Xr=!0,cr=ie)}}function Ci(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ka(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ba(n){if(Ci(n)!==n)throw Error(t(188))}function Oc(n){var r=n.alternate;if(!r){if(r=Ci(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return Ba(m),n;if(_===f)return Ba(m),r;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=_;else{for(var T=!1,U=m.child;U;){if(U===l){T=!0,l=m,f=_;break}if(U===f){T=!0,f=m,l=_;break}U=U.sibling}if(!T){for(U=_.child;U;){if(U===l){T=!0,l=_,f=m;break}if(U===f){T=!0,f=_,l=m;break}U=U.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function za(n){return n=Oc(n),n!==null?Ha(n):null}function Ha(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ha(n);if(r!==null)return r;n=n.sibling}return null}var b=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,re=e.unstable_shouldYield,se=e.unstable_requestPaint,W=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,De=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,Xe=e.unstable_NormalPriority,at=e.unstable_LowPriority,lt=e.unstable_IdlePriority,et=null,dt=null;function Pt(n){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(et,n,void 0,(n.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:tt,Wt=Math.log,At=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(Wt(n)/At|0)|0}var $t=64,wt=4194304;function gn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function di(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,_=n.pingedLanes,T=l&268435455;if(T!==0){var U=T&~m;U!==0?f=gn(U):(_&=T,_!==0&&(f=gn(_)))}else T=l&~m,T!==0?f=gn(T):_!==0&&(f=gn(_));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,_=r&-r,m>=_||m===16&&(_&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Lt(r),m=1<<l,f|=n[l],r&=~m;return f}function Pn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jr(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-Lt(_),U=1<<T,V=m[T];V===-1?((U&l)===0||(U&f)!==0)&&(m[T]=Pn(U,r)):V<=r&&(n.expiredLanes|=U),_&=~U}}function Ot(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ln(){var n=$t;return $t<<=1,($t&4194240)===0&&($t=64),n}function xn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Jt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Lt(r),n[r]=l}function Sn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Lt(l),_=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~_}}function qr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Lt(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var Et=0;function bd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pd,kc,Ld,Nd,Id,Bc=!1,Va=[],ur=null,fr=null,hr=null,Lo=new Map,No=new Map,dr=[],j_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dd(n,r){switch(n){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Lo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(r.pointerId)}}function Io(n,r,l,f,m,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},r!==null&&(r=qo(r),r!==null&&kc(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function q_(n,r,l,f,m){switch(r){case"focusin":return ur=Io(ur,n,r,l,f,m),!0;case"dragenter":return fr=Io(fr,n,r,l,f,m),!0;case"mouseover":return hr=Io(hr,n,r,l,f,m),!0;case"pointerover":var _=m.pointerId;return Lo.set(_,Io(Lo.get(_)||null,n,r,l,f,m)),!0;case"gotpointercapture":return _=m.pointerId,No.set(_,Io(No.get(_)||null,n,r,l,f,m)),!0}return!1}function Ud(n){var r=Yr(n.target);if(r!==null){var l=Ci(r);if(l!==null){if(r=l.tag,r===13){if(r=ka(l),r!==null){n.blockedOn=r,Id(n.priority,function(){Ld(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ga(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Hc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Dt=f,l.target.dispatchEvent(f),Dt=null}else return r=qo(l),r!==null&&kc(r),n.blockedOn=l,!1;r.shift()}return!0}function Fd(n,r,l){Ga(n)&&l.delete(r)}function Y_(){Bc=!1,ur!==null&&Ga(ur)&&(ur=null),fr!==null&&Ga(fr)&&(fr=null),hr!==null&&Ga(hr)&&(hr=null),Lo.forEach(Fd),No.forEach(Fd)}function Do(n,r){n.blockedOn===r&&(n.blockedOn=null,Bc||(Bc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Y_)))}function Uo(n){function r(m){return Do(m,n)}if(0<Va.length){Do(Va[0],n);for(var l=1;l<Va.length;l++){var f=Va[l];f.blockedOn===n&&(f.blockedOn=null)}}for(ur!==null&&Do(ur,n),fr!==null&&Do(fr,n),hr!==null&&Do(hr,n),Lo.forEach(r),No.forEach(r),l=0;l<dr.length;l++)f=dr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)Ud(l),l.blockedOn===null&&dr.shift()}var Es=w.ReactCurrentBatchConfig,Wa=!0;function K_(n,r,l,f){var m=Et,_=Es.transition;Es.transition=null;try{Et=1,zc(n,r,l,f)}finally{Et=m,Es.transition=_}}function $_(n,r,l,f){var m=Et,_=Es.transition;Es.transition=null;try{Et=4,zc(n,r,l,f)}finally{Et=m,Es.transition=_}}function zc(n,r,l,f){if(Wa){var m=Hc(n,r,l,f);if(m===null)ru(n,r,f,Xa,l),Dd(n,f);else if(q_(m,n,r,l,f))f.stopPropagation();else if(Dd(n,f),r&4&&-1<j_.indexOf(n)){for(;m!==null;){var _=qo(m);if(_!==null&&Pd(_),_=Hc(n,r,l,f),_===null&&ru(n,r,f,Xa,l),_===m)break;m=_}m!==null&&f.stopPropagation()}else ru(n,r,f,null,l)}}var Xa=null;function Hc(n,r,l,f){if(Xa=null,n=j(f),n=Yr(n),n!==null)if(r=Ci(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ka(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Xa=n,null}function Od(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case De:return 1;case We:return 4;case Xe:case at:return 16;case lt:return 536870912;default:return 16}default:return 16}}var pr=null,Vc=null,ja=null;function kd(){if(ja)return ja;var n,r=Vc,l=r.length,f,m="value"in pr?pr.value:pr.textContent,_=m.length;for(n=0;n<l&&r[n]===m[n];n++);var T=l-n;for(f=1;f<=T&&r[l-f]===m[_-f];f++);return ja=m.slice(n,1<f?1-f:void 0)}function qa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ya(){return!0}function Bd(){return!1}function Kn(n){function r(l,f,m,_,T){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ya:Bd,this.isPropagationStopped=Bd,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),r}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gc=Kn(Ts),Fo=oe({},Ts,{view:0,detail:0}),Z_=Kn(Fo),Wc,Xc,Oo,Ka=oe({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(Wc=n.screenX-Oo.screenX,Xc=n.screenY-Oo.screenY):Xc=Wc=0,Oo=n),Wc)},movementY:function(n){return"movementY"in n?n.movementY:Xc}}),zd=Kn(Ka),J_=oe({},Ka,{dataTransfer:0}),Q_=Kn(J_),e0=oe({},Fo,{relatedTarget:0}),jc=Kn(e0),t0=oe({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),n0=Kn(t0),i0=oe({},Ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),r0=Kn(i0),s0=oe({},Ts,{data:0}),Hd=Kn(s0),o0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c0(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=l0[n])?!!r[n]:!1}function qc(){return c0}var u0=oe({},Fo,{key:function(n){if(n.key){var r=o0[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=qa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?a0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(n){return n.type==="keypress"?qa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f0=Kn(u0),h0=oe({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Kn(h0),d0=oe({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),p0=Kn(d0),m0=oe({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),g0=Kn(m0),v0=oe({},Ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=Kn(v0),y0=[9,13,27,32],Yc=u&&"CompositionEvent"in window,ko=null;u&&"documentMode"in document&&(ko=document.documentMode);var x0=u&&"TextEvent"in window&&!ko,Gd=u&&(!Yc||ko&&8<ko&&11>=ko),Wd=" ",Xd=!1;function jd(n,r){switch(n){case"keyup":return y0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function S0(n,r){switch(n){case"compositionend":return qd(r);case"keypress":return r.which!==32?null:(Xd=!0,Wd);case"textInput":return n=r.data,n===Wd&&Xd?null:n;default:return null}}function M0(n,r){if(ws)return n==="compositionend"||!Yc&&jd(n,r)?(n=kd(),ja=Vc=pr=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Gd&&r.locale!=="ko"?null:r.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!E0[n.type]:r==="textarea"}function Kd(n,r,l,f){ke(f),r=el(r,"onChange"),0<r.length&&(l=new Gc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Bo=null,zo=null;function T0(n){dp(n,0)}function $a(n){var r=Ps(n);if(ge(r))return n}function w0(n,r){if(n==="change")return r}var $d=!1;if(u){var Kc;if(u){var $c="oninput"in document;if(!$c){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),$c=typeof Zd.oninput=="function"}Kc=$c}else Kc=!1;$d=Kc&&(!document.documentMode||9<document.documentMode)}function Jd(){Bo&&(Bo.detachEvent("onpropertychange",Qd),zo=Bo=null)}function Qd(n){if(n.propertyName==="value"&&$a(zo)){var r=[];Kd(r,zo,n,j(n)),Hn(T0,r)}}function A0(n,r,l){n==="focusin"?(Jd(),Bo=r,zo=l,Bo.attachEvent("onpropertychange",Qd)):n==="focusout"&&Jd()}function R0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $a(zo)}function C0(n,r){if(n==="click")return $a(r)}function b0(n,r){if(n==="input"||n==="change")return $a(r)}function P0(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var pi=typeof Object.is=="function"?Object.is:P0;function Ho(n,r){if(pi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!h.call(r,m)||!pi(n[m],r[m]))return!1}return!0}function ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function tp(n,r){var l=ep(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ep(l)}}function np(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?np(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ip(){for(var n=window,r=Ae();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ae(n.document)}return r}function Zc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function L0(n){var r=ip(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&np(l.ownerDocument.documentElement,l)){if(f!==null&&Zc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!n.extend&&_>f&&(m=f,f=_,_=m),m=tp(l,_);var T=tp(l,f);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),_>f?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var N0=u&&"documentMode"in document&&11>=document.documentMode,As=null,Jc=null,Vo=null,Qc=!1;function rp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qc||As==null||As!==Ae(f)||(f=As,"selectionStart"in f&&Zc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Vo&&Ho(Vo,f)||(Vo=f,f=el(Jc,"onSelect"),0<f.length&&(r=new Gc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=As)))}function Za(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Rs={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},eu={},sp={};u&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Ja(n){if(eu[n])return eu[n];if(!Rs[n])return n;var r=Rs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in sp)return eu[n]=r[l];return n}var op=Ja("animationend"),ap=Ja("animationiteration"),lp=Ja("animationstart"),cp=Ja("transitionend"),up=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(n,r){up.set(n,r),a(r,[n])}for(var tu=0;tu<fp.length;tu++){var nu=fp[tu],I0=nu.toLowerCase(),D0=nu[0].toUpperCase()+nu.slice(1);mr(I0,"on"+D0)}mr(op,"onAnimationEnd"),mr(ap,"onAnimationIteration"),mr(lp,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(cp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function hp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Oa(f,r,void 0,n),n.currentTarget=null}function dp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var _=void 0;if(r)for(var T=f.length-1;0<=T;T--){var U=f[T],V=U.instance,ie=U.currentTarget;if(U=U.listener,V!==_&&m.isPropagationStopped())break e;hp(m,U,ie),_=V}else for(T=0;T<f.length;T++){if(U=f[T],V=U.instance,ie=U.currentTarget,U=U.listener,V!==_&&m.isPropagationStopped())break e;hp(m,U,ie),_=V}}}if(Xr)throw n=cr,Xr=!1,cr=null,n}function Ht(n,r){var l=r[uu];l===void 0&&(l=r[uu]=new Set);var f=n+"__bubble";l.has(f)||(pp(r,n,2,!1),l.add(f))}function iu(n,r,l){var f=0;r&&(f|=4),pp(l,n,f,r)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[Qa]){n[Qa]=!0,i.forEach(function(l){l!=="selectionchange"&&(U0.has(l)||iu(l,!1,n),iu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qa]||(r[Qa]=!0,iu("selectionchange",!1,r))}}function pp(n,r,l,f){switch(Od(r)){case 1:var m=K_;break;case 4:m=$_;break;default:m=zc}l=m.bind(null,r,l,n),m=void 0,!Ss||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function ru(n,r,l,f,m){var _=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;T=T.return}for(;U!==null;){if(T=Yr(U),T===null)return;if(V=T.tag,V===5||V===6){f=_=T;continue e}U=U.parentNode}}f=f.return}Hn(function(){var ie=_,ye=j(l),Me=[];e:{var _e=up.get(n);if(_e!==void 0){var ze=Gc,Ke=n;switch(n){case"keypress":if(qa(l)===0)break e;case"keydown":case"keyup":ze=f0;break;case"focusin":Ke="focus",ze=jc;break;case"focusout":Ke="blur",ze=jc;break;case"beforeblur":case"afterblur":ze=jc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=p0;break;case op:case ap:case lp:ze=n0;break;case cp:ze=g0;break;case"scroll":ze=Z_;break;case"wheel":ze=_0;break;case"copy":case"cut":case"paste":ze=r0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Vd}var Ze=(r&4)!==0,Qt=!Ze&&n==="scroll",K=Ze?_e!==null?_e+"Capture":null:_e;Ze=[];for(var X=ie,Z;X!==null;){Z=X;var Re=Z.stateNode;if(Z.tag===5&&Re!==null&&(Z=Re,K!==null&&(Re=bn(X,K),Re!=null&&Ze.push(Xo(X,Re,Z)))),Qt)break;X=X.return}0<Ze.length&&(_e=new ze(_e,Ke,null,l,ye),Me.push({event:_e,listeners:Ze}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",_e&&l!==Dt&&(Ke=l.relatedTarget||l.fromElement)&&(Yr(Ke)||Ke[zi]))break e;if((ze||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ze?(Ke=l.relatedTarget||l.toElement,ze=ie,Ke=Ke?Yr(Ke):null,Ke!==null&&(Qt=Ci(Ke),Ke!==Qt||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(ze=null,Ke=ie),ze!==Ke)){if(Ze=zd,Re="onMouseLeave",K="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Vd,Re="onPointerLeave",K="onPointerEnter",X="pointer"),Qt=ze==null?_e:Ps(ze),Z=Ke==null?_e:Ps(Ke),_e=new Ze(Re,X+"leave",ze,l,ye),_e.target=Qt,_e.relatedTarget=Z,Re=null,Yr(ye)===ie&&(Ze=new Ze(K,X+"enter",Ke,l,ye),Ze.target=Z,Ze.relatedTarget=Qt,Re=Ze),Qt=Re,ze&&Ke)t:{for(Ze=ze,K=Ke,X=0,Z=Ze;Z;Z=Cs(Z))X++;for(Z=0,Re=K;Re;Re=Cs(Re))Z++;for(;0<X-Z;)Ze=Cs(Ze),X--;for(;0<Z-X;)K=Cs(K),Z--;for(;X--;){if(Ze===K||K!==null&&Ze===K.alternate)break t;Ze=Cs(Ze),K=Cs(K)}Ze=null}else Ze=null;ze!==null&&mp(Me,_e,ze,Ze,!1),Ke!==null&&Qt!==null&&mp(Me,Qt,Ke,Ze,!0)}}e:{if(_e=ie?Ps(ie):window,ze=_e.nodeName&&_e.nodeName.toLowerCase(),ze==="select"||ze==="input"&&_e.type==="file")var Qe=w0;else if(Yd(_e))if($d)Qe=b0;else{Qe=R0;var rt=A0}else(ze=_e.nodeName)&&ze.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Qe=C0);if(Qe&&(Qe=Qe(n,ie))){Kd(Me,Qe,l,ye);break e}rt&&rt(n,_e,ie),n==="focusout"&&(rt=_e._wrapperState)&&rt.controlled&&_e.type==="number"&&nt(_e,"number",_e.value)}switch(rt=ie?Ps(ie):window,n){case"focusin":(Yd(rt)||rt.contentEditable==="true")&&(As=rt,Jc=ie,Vo=null);break;case"focusout":Vo=Jc=As=null;break;case"mousedown":Qc=!0;break;case"contextmenu":case"mouseup":case"dragend":Qc=!1,rp(Me,l,ye);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":rp(Me,l,ye)}var st;if(Yc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else ws?jd(n,l)&&(ct="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Gd&&l.locale!=="ko"&&(ws||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&ws&&(st=kd()):(pr=ye,Vc="value"in pr?pr.value:pr.textContent,ws=!0)),rt=el(ie,ct),0<rt.length&&(ct=new Hd(ct,n,null,l,ye),Me.push({event:ct,listeners:rt}),st?ct.data=st:(st=qd(l),st!==null&&(ct.data=st)))),(st=x0?S0(n,l):M0(n,l))&&(ie=el(ie,"onBeforeInput"),0<ie.length&&(ye=new Hd("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:ie}),ye.data=st))}dp(Me,r)})}function Xo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function el(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=bn(n,l),_!=null&&f.unshift(Xo(n,_,m)),_=bn(n,r),_!=null&&f.push(Xo(n,_,m))),n=n.return}return f}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mp(n,r,l,f,m){for(var _=r._reactName,T=[];l!==null&&l!==f;){var U=l,V=U.alternate,ie=U.stateNode;if(V!==null&&V===f)break;U.tag===5&&ie!==null&&(U=ie,m?(V=bn(l,_),V!=null&&T.unshift(Xo(l,V,U))):m||(V=bn(l,_),V!=null&&T.push(Xo(l,V,U)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var F0=/\r\n?/g,O0=/\u0000|\uFFFD/g;function gp(n){return(typeof n=="string"?n:""+n).replace(F0,`
`).replace(O0,"")}function tl(n,r,l){if(r=gp(r),gp(n)!==r&&l)throw Error(t(425))}function nl(){}var su=null,ou=null;function au(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(n){return vp.resolve(null).then(n).catch(z0)}:lu;function z0(n){setTimeout(function(){throw n})}function cu(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),Uo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Uo(r)}function gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function _p(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var bs=Math.random().toString(36).slice(2),bi="__reactFiber$"+bs,jo="__reactProps$"+bs,zi="__reactContainer$"+bs,uu="__reactEvents$"+bs,H0="__reactListeners$"+bs,V0="__reactHandles$"+bs;function Yr(n){var r=n[bi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[zi]||l[bi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=_p(n);n!==null;){if(l=n[bi])return l;n=_p(n)}return r}n=l,l=n.parentNode}return null}function qo(n){return n=n[bi]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ps(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function il(n){return n[jo]||null}var fu=[],Ls=-1;function vr(n){return{current:n}}function Vt(n){0>Ls||(n.current=fu[Ls],fu[Ls]=null,Ls--)}function Bt(n,r){Ls++,fu[Ls]=n.current,n.current=r}var _r={},Mn=vr(_r),Vn=vr(!1),Kr=_r;function Ns(n,r){var l=n.type.contextTypes;if(!l)return _r;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=r[_];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function Gn(n){return n=n.childContextTypes,n!=null}function rl(){Vt(Vn),Vt(Mn)}function yp(n,r,l){if(Mn.current!==_r)throw Error(t(168));Bt(Mn,r),Bt(Vn,l)}function xp(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,me(n)||"Unknown",m));return oe({},l,f)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Kr=Mn.current,Bt(Mn,n),Bt(Vn,Vn.current),!0}function Sp(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=xp(n,r,Kr),f.__reactInternalMemoizedMergedChildContext=n,Vt(Vn),Vt(Mn),Bt(Mn,n)):Vt(Vn),Bt(Vn,l)}var Hi=null,ol=!1,hu=!1;function Mp(n){Hi===null?Hi=[n]:Hi.push(n)}function G0(n){ol=!0,Mp(n)}function yr(){if(!hu&&Hi!==null){hu=!0;var n=0,r=Et;try{var l=Hi;for(Et=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}Hi=null,ol=!1}catch(m){throw Hi!==null&&(Hi=Hi.slice(n+1)),b(De,yr),m}finally{Et=r,hu=!1}}return null}var Is=[],Ds=0,al=null,ll=0,ni=[],ii=0,$r=null,Vi=1,Gi="";function Zr(n,r){Is[Ds++]=ll,Is[Ds++]=al,al=n,ll=r}function Ep(n,r,l){ni[ii++]=Vi,ni[ii++]=Gi,ni[ii++]=$r,$r=n;var f=Vi;n=Gi;var m=32-Lt(f)-1;f&=~(1<<m),l+=1;var _=32-Lt(r)+m;if(30<_){var T=m-m%5;_=(f&(1<<T)-1).toString(32),f>>=T,m-=T,Vi=1<<32-Lt(r)+m|l<<m|f,Gi=_+n}else Vi=1<<_|l<<m|f,Gi=n}function du(n){n.return!==null&&(Zr(n,1),Ep(n,1,0))}function pu(n){for(;n===al;)al=Is[--Ds],Is[Ds]=null,ll=Is[--Ds],Is[Ds]=null;for(;n===$r;)$r=ni[--ii],ni[ii]=null,Gi=ni[--ii],ni[ii]=null,Vi=ni[--ii],ni[ii]=null}var $n=null,Zn=null,Xt=!1,mi=null;function Tp(n,r){var l=ai(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function wp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,$n=n,Zn=gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,$n=n,Zn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=$r!==null?{id:Vi,overflow:Gi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ai(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,$n=n,Zn=null,!0):!1;default:return!1}}function mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function gu(n){if(Xt){var r=Zn;if(r){var l=r;if(!wp(n,r)){if(mu(n))throw Error(t(418));r=gr(l.nextSibling);var f=$n;r&&wp(n,r)?Tp(f,l):(n.flags=n.flags&-4097|2,Xt=!1,$n=n)}}else{if(mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,$n=n}}}function Ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function cl(n){if(n!==$n)return!1;if(!Xt)return Ap(n),Xt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!au(n.type,n.memoizedProps)),r&&(r=Zn)){if(mu(n))throw Rp(),Error(t(418));for(;r;)Tp(n,r),r=gr(r.nextSibling)}if(Ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Zn=gr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Zn=null}}else Zn=$n?gr(n.stateNode.nextSibling):null;return!0}function Rp(){for(var n=Zn;n;)n=gr(n.nextSibling)}function Us(){Zn=$n=null,Xt=!1}function vu(n){mi===null?mi=[n]:mi.push(n)}var W0=w.ReactCurrentBatchConfig;function Yo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(T){var U=m.refs;T===null?delete U[_]:U[_]=T},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Cp(n){var r=n._init;return r(n._payload)}function bp(n){function r(K,X){if(n){var Z=K.deletions;Z===null?(K.deletions=[X],K.flags|=16):Z.push(X)}}function l(K,X){if(!n)return null;for(;X!==null;)r(K,X),X=X.sibling;return null}function f(K,X){for(K=new Map;X!==null;)X.key!==null?K.set(X.key,X):K.set(X.index,X),X=X.sibling;return K}function m(K,X){return K=Rr(K,X),K.index=0,K.sibling=null,K}function _(K,X,Z){return K.index=Z,n?(Z=K.alternate,Z!==null?(Z=Z.index,Z<X?(K.flags|=2,X):Z):(K.flags|=2,X)):(K.flags|=1048576,X)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function U(K,X,Z,Re){return X===null||X.tag!==6?(X=cf(Z,K.mode,Re),X.return=K,X):(X=m(X,Z),X.return=K,X)}function V(K,X,Z,Re){var Qe=Z.type;return Qe===I?ye(K,X,Z.props.children,Re,Z.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ee&&Cp(Qe)===X.type)?(Re=m(X,Z.props),Re.ref=Yo(K,X,Z),Re.return=K,Re):(Re=Dl(Z.type,Z.key,Z.props,null,K.mode,Re),Re.ref=Yo(K,X,Z),Re.return=K,Re)}function ie(K,X,Z,Re){return X===null||X.tag!==4||X.stateNode.containerInfo!==Z.containerInfo||X.stateNode.implementation!==Z.implementation?(X=uf(Z,K.mode,Re),X.return=K,X):(X=m(X,Z.children||[]),X.return=K,X)}function ye(K,X,Z,Re,Qe){return X===null||X.tag!==7?(X=ss(Z,K.mode,Re,Qe),X.return=K,X):(X=m(X,Z),X.return=K,X)}function Me(K,X,Z){if(typeof X=="string"&&X!==""||typeof X=="number")return X=cf(""+X,K.mode,Z),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return Z=Dl(X.type,X.key,X.props,null,K.mode,Z),Z.ref=Yo(K,null,X),Z.return=K,Z;case O:return X=uf(X,K.mode,Z),X.return=K,X;case ee:var Re=X._init;return Me(K,Re(X._payload),Z)}if(Ue(X)||ue(X))return X=ss(X,K.mode,Z,null),X.return=K,X;ul(K,X)}return null}function _e(K,X,Z,Re){var Qe=X!==null?X.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Qe!==null?null:U(K,X,""+Z,Re);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:return Z.key===Qe?V(K,X,Z,Re):null;case O:return Z.key===Qe?ie(K,X,Z,Re):null;case ee:return Qe=Z._init,_e(K,X,Qe(Z._payload),Re)}if(Ue(Z)||ue(Z))return Qe!==null?null:ye(K,X,Z,Re,null);ul(K,Z)}return null}function ze(K,X,Z,Re,Qe){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return K=K.get(Z)||null,U(X,K,""+Re,Qe);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case z:return K=K.get(Re.key===null?Z:Re.key)||null,V(X,K,Re,Qe);case O:return K=K.get(Re.key===null?Z:Re.key)||null,ie(X,K,Re,Qe);case ee:var rt=Re._init;return ze(K,X,Z,rt(Re._payload),Qe)}if(Ue(Re)||ue(Re))return K=K.get(Z)||null,ye(X,K,Re,Qe,null);ul(X,Re)}return null}function Ke(K,X,Z,Re){for(var Qe=null,rt=null,st=X,ct=X=0,dn=null;st!==null&&ct<Z.length;ct++){st.index>ct?(dn=st,st=null):dn=st.sibling;var Nt=_e(K,st,Z[ct],Re);if(Nt===null){st===null&&(st=dn);break}n&&st&&Nt.alternate===null&&r(K,st),X=_(Nt,X,ct),rt===null?Qe=Nt:rt.sibling=Nt,rt=Nt,st=dn}if(ct===Z.length)return l(K,st),Xt&&Zr(K,ct),Qe;if(st===null){for(;ct<Z.length;ct++)st=Me(K,Z[ct],Re),st!==null&&(X=_(st,X,ct),rt===null?Qe=st:rt.sibling=st,rt=st);return Xt&&Zr(K,ct),Qe}for(st=f(K,st);ct<Z.length;ct++)dn=ze(st,K,ct,Z[ct],Re),dn!==null&&(n&&dn.alternate!==null&&st.delete(dn.key===null?ct:dn.key),X=_(dn,X,ct),rt===null?Qe=dn:rt.sibling=dn,rt=dn);return n&&st.forEach(function(Cr){return r(K,Cr)}),Xt&&Zr(K,ct),Qe}function Ze(K,X,Z,Re){var Qe=ue(Z);if(typeof Qe!="function")throw Error(t(150));if(Z=Qe.call(Z),Z==null)throw Error(t(151));for(var rt=Qe=null,st=X,ct=X=0,dn=null,Nt=Z.next();st!==null&&!Nt.done;ct++,Nt=Z.next()){st.index>ct?(dn=st,st=null):dn=st.sibling;var Cr=_e(K,st,Nt.value,Re);if(Cr===null){st===null&&(st=dn);break}n&&st&&Cr.alternate===null&&r(K,st),X=_(Cr,X,ct),rt===null?Qe=Cr:rt.sibling=Cr,rt=Cr,st=dn}if(Nt.done)return l(K,st),Xt&&Zr(K,ct),Qe;if(st===null){for(;!Nt.done;ct++,Nt=Z.next())Nt=Me(K,Nt.value,Re),Nt!==null&&(X=_(Nt,X,ct),rt===null?Qe=Nt:rt.sibling=Nt,rt=Nt);return Xt&&Zr(K,ct),Qe}for(st=f(K,st);!Nt.done;ct++,Nt=Z.next())Nt=ze(st,K,ct,Nt.value,Re),Nt!==null&&(n&&Nt.alternate!==null&&st.delete(Nt.key===null?ct:Nt.key),X=_(Nt,X,ct),rt===null?Qe=Nt:rt.sibling=Nt,rt=Nt);return n&&st.forEach(function(Ey){return r(K,Ey)}),Xt&&Zr(K,ct),Qe}function Qt(K,X,Z,Re){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:e:{for(var Qe=Z.key,rt=X;rt!==null;){if(rt.key===Qe){if(Qe=Z.type,Qe===I){if(rt.tag===7){l(K,rt.sibling),X=m(rt,Z.props.children),X.return=K,K=X;break e}}else if(rt.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ee&&Cp(Qe)===rt.type){l(K,rt.sibling),X=m(rt,Z.props),X.ref=Yo(K,rt,Z),X.return=K,K=X;break e}l(K,rt);break}else r(K,rt);rt=rt.sibling}Z.type===I?(X=ss(Z.props.children,K.mode,Re,Z.key),X.return=K,K=X):(Re=Dl(Z.type,Z.key,Z.props,null,K.mode,Re),Re.ref=Yo(K,X,Z),Re.return=K,K=Re)}return T(K);case O:e:{for(rt=Z.key;X!==null;){if(X.key===rt)if(X.tag===4&&X.stateNode.containerInfo===Z.containerInfo&&X.stateNode.implementation===Z.implementation){l(K,X.sibling),X=m(X,Z.children||[]),X.return=K,K=X;break e}else{l(K,X);break}else r(K,X);X=X.sibling}X=uf(Z,K.mode,Re),X.return=K,K=X}return T(K);case ee:return rt=Z._init,Qt(K,X,rt(Z._payload),Re)}if(Ue(Z))return Ke(K,X,Z,Re);if(ue(Z))return Ze(K,X,Z,Re);ul(K,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,X!==null&&X.tag===6?(l(K,X.sibling),X=m(X,Z),X.return=K,K=X):(l(K,X),X=cf(Z,K.mode,Re),X.return=K,K=X),T(K)):l(K,X)}return Qt}var Fs=bp(!0),Pp=bp(!1),fl=vr(null),hl=null,Os=null,_u=null;function yu(){_u=Os=hl=null}function xu(n){var r=fl.current;Vt(fl),n._currentValue=r}function Su(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function ks(n,r){hl=n,_u=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Wn=!0),n.firstContext=null)}function ri(n){var r=n._currentValue;if(_u!==n)if(n={context:n,memoizedValue:r,next:null},Os===null){if(hl===null)throw Error(t(308));Os=n,hl.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return r}var Jr=null;function Mu(n){Jr===null?Jr=[n]:Jr.push(n)}function Lp(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,Mu(r)):(l.next=m.next,m.next=l),r.interleaved=l,Wi(n,f)}function Wi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var xr=!1;function Eu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Sr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(bt&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,Wi(n,l)}return m=f.interleaved,m===null?(r.next=r,Mu(f)):(r.next=m.next,m.next=r),f.interleaved=r,Wi(n,l)}function dl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,qr(n,l)}}function Ip(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=T:_=_.next=T,l=l.next}while(l!==null);_===null?m=_=r:_=_.next=r}else m=_=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function pl(n,r,l,f){var m=n.updateQueue;xr=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var V=U,ie=V.next;V.next=null,T===null?_=ie:T.next=ie,T=V;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==T&&(U===null?ye.firstBaseUpdate=ie:U.next=ie,ye.lastBaseUpdate=V))}if(_!==null){var Me=m.baseState;T=0,ye=ie=V=null,U=_;do{var _e=U.lane,ze=U.eventTime;if((f&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ke=n,Ze=U;switch(_e=r,ze=l,Ze.tag){case 1:if(Ke=Ze.payload,typeof Ke=="function"){Me=Ke.call(ze,Me,_e);break e}Me=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Ze.payload,_e=typeof Ke=="function"?Ke.call(ze,Me,_e):Ke,_e==null)break e;Me=oe({},Me,_e);break e;case 2:xr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,_e=m.effects,_e===null?m.effects=[U]:_e.push(U))}else ze={eventTime:ze,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(ie=ye=ze,V=Me):ye=ye.next=ze,T|=_e;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(ye===null&&(V=Me),m.baseState=V,m.firstBaseUpdate=ie,m.lastBaseUpdate=ye,r=m.shared.interleaved,r!==null){m=r;do T|=m.lane,m=m.next;while(m!==r)}else _===null&&(m.shared.lanes=0);ts|=T,n.lanes=T,n.memoizedState=Me}}function Dp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Ko={},Pi=vr(Ko),$o=vr(Ko),Zo=vr(Ko);function Qr(n){if(n===Ko)throw Error(t(174));return n}function Tu(n,r){switch(Bt(Zo,r),Bt($o,n),Bt(Pi,Ko),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:$e(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=$e(r,n)}Vt(Pi),Bt(Pi,r)}function Bs(){Vt(Pi),Vt($o),Vt(Zo)}function Up(n){Qr(Zo.current);var r=Qr(Pi.current),l=$e(r,n.type);r!==l&&(Bt($o,n),Bt(Pi,l))}function wu(n){$o.current===n&&(Vt(Pi),Vt($o))}var qt=vr(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Au=[];function Ru(){for(var n=0;n<Au.length;n++)Au[n]._workInProgressVersionPrimary=null;Au.length=0}var gl=w.ReactCurrentDispatcher,Cu=w.ReactCurrentBatchConfig,es=0,Yt=null,on=null,fn=null,vl=!1,Jo=!1,Qo=0,X0=0;function En(){throw Error(t(321))}function bu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!pi(n[l],r[l]))return!1;return!0}function Pu(n,r,l,f,m,_){if(es=_,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=n===null||n.memoizedState===null?K0:$0,n=l(f,m),Jo){_=0;do{if(Jo=!1,Qo=0,25<=_)throw Error(t(301));_+=1,fn=on=null,r.updateQueue=null,gl.current=Z0,n=l(f,m)}while(Jo)}if(gl.current=xl,r=on!==null&&on.next!==null,es=0,fn=on=Yt=null,vl=!1,r)throw Error(t(300));return n}function Lu(){var n=Qo!==0;return Qo=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Yt.memoizedState=fn=n:fn=fn.next=n,fn}function si(){if(on===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var r=fn===null?Yt.memoizedState:fn.next;if(r!==null)fn=r,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},fn===null?Yt.memoizedState=fn=n:fn=fn.next=n}return fn}function ea(n,r){return typeof r=="function"?r(n):r}function Nu(n){var r=si(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=on,m=f.baseQueue,_=l.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}f.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,f=f.baseState;var U=T=null,V=null,ie=_;do{var ye=ie.lane;if((es&ye)===ye)V!==null&&(V=V.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),f=ie.hasEagerState?ie.eagerState:n(f,ie.action);else{var Me={lane:ye,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};V===null?(U=V=Me,T=f):V=V.next=Me,Yt.lanes|=ye,ts|=ye}ie=ie.next}while(ie!==null&&ie!==_);V===null?T=f:V.next=U,pi(f,r.memoizedState)||(Wn=!0),r.memoizedState=f,r.baseState=T,r.baseQueue=V,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do _=m.lane,Yt.lanes|=_,ts|=_,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Iu(n){var r=si(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,_=r.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do _=n(_,T.action),T=T.next;while(T!==m);pi(_,r.memoizedState)||(Wn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,f]}function Fp(){}function Op(n,r){var l=Yt,f=si(),m=r(),_=!pi(f.memoizedState,m);if(_&&(f.memoizedState=m,Wn=!0),f=f.queue,Du(zp.bind(null,l,f,n),[n]),f.getSnapshot!==r||_||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,ta(9,Bp.bind(null,l,f,m,r),void 0,null),hn===null)throw Error(t(349));(es&30)!==0||kp(l,r,m)}return m}function kp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Bp(n,r,l,f){r.value=l,r.getSnapshot=f,Hp(r)&&Vp(n)}function zp(n,r,l){return l(function(){Hp(r)&&Vp(n)})}function Hp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!pi(n,l)}catch{return!0}}function Vp(n){var r=Wi(n,1);r!==null&&yi(r,n,1,-1)}function Gp(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},r.queue=n,n=n.dispatch=Y0.bind(null,Yt,n),[r.memoizedState,n]}function ta(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Wp(){return si().memoizedState}function _l(n,r,l,f){var m=Li();Yt.flags|=n,m.memoizedState=ta(1|r,l,void 0,f===void 0?null:f)}function yl(n,r,l,f){var m=si();f=f===void 0?null:f;var _=void 0;if(on!==null){var T=on.memoizedState;if(_=T.destroy,f!==null&&bu(f,T.deps)){m.memoizedState=ta(r,l,_,f);return}}Yt.flags|=n,m.memoizedState=ta(1|r,l,_,f)}function Xp(n,r){return _l(8390656,8,n,r)}function Du(n,r){return yl(2048,8,n,r)}function jp(n,r){return yl(4,2,n,r)}function qp(n,r){return yl(4,4,n,r)}function Yp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kp(n,r,l){return l=l!=null?l.concat([n]):null,yl(4,4,Yp.bind(null,r,n),l)}function Uu(){}function $p(n,r){var l=si();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&bu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function Zp(n,r){var l=si();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&bu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function Jp(n,r,l){return(es&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=l):(pi(l,r)||(l=Ln(),Yt.lanes|=l,ts|=l,n.baseState=!0),r)}function j0(n,r){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var f=Cu.transition;Cu.transition={};try{n(!1),r()}finally{Et=l,Cu.transition=f}}function Qp(){return si().memoizedState}function q0(n,r,l){var f=wr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},em(n))tm(r,l);else if(l=Lp(n,r,l,f),l!==null){var m=In();yi(l,n,f,m),nm(l,r,f)}}function Y0(n,r,l){var f=wr(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(em(n))tm(r,m);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var T=r.lastRenderedState,U=_(T,l);if(m.hasEagerState=!0,m.eagerState=U,pi(U,T)){var V=r.interleaved;V===null?(m.next=m,Mu(r)):(m.next=V.next,V.next=m),r.interleaved=m;return}}catch{}finally{}l=Lp(n,r,m,f),l!==null&&(m=In(),yi(l,n,f,m),nm(l,r,f))}}function em(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function tm(n,r){Jo=vl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function nm(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,qr(n,l)}}var xl={readContext:ri,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},K0={readContext:ri,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:ri,useEffect:Xp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,_l(4194308,4,Yp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return _l(4194308,4,n,r)},useInsertionEffect:function(n,r){return _l(4,2,n,r)},useMemo:function(n,r){var l=Li();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Li();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=q0.bind(null,Yt,n),[f.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Gp,useDebugValue:Uu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Gp(!1),r=n[0];return n=j0.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=Yt,m=Li();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),hn===null)throw Error(t(349));(es&30)!==0||kp(f,r,l)}m.memoizedState=l;var _={value:l,getSnapshot:r};return m.queue=_,Xp(zp.bind(null,f,_,n),[n]),f.flags|=2048,ta(9,Bp.bind(null,f,_,l,r),void 0,null),l},useId:function(){var n=Li(),r=hn.identifierPrefix;if(Xt){var l=Gi,f=Vi;l=(f&~(1<<32-Lt(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Qo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=X0++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},$0={readContext:ri,useCallback:$p,useContext:ri,useEffect:Du,useImperativeHandle:Kp,useInsertionEffect:jp,useLayoutEffect:qp,useMemo:Zp,useReducer:Nu,useRef:Wp,useState:function(){return Nu(ea)},useDebugValue:Uu,useDeferredValue:function(n){var r=si();return Jp(r,on.memoizedState,n)},useTransition:function(){var n=Nu(ea)[0],r=si().memoizedState;return[n,r]},useMutableSource:Fp,useSyncExternalStore:Op,useId:Qp,unstable_isNewReconciler:!1},Z0={readContext:ri,useCallback:$p,useContext:ri,useEffect:Du,useImperativeHandle:Kp,useInsertionEffect:jp,useLayoutEffect:qp,useMemo:Zp,useReducer:Iu,useRef:Wp,useState:function(){return Iu(ea)},useDebugValue:Uu,useDeferredValue:function(n){var r=si();return on===null?r.memoizedState=n:Jp(r,on.memoizedState,n)},useTransition:function(){var n=Iu(ea)[0],r=si().memoizedState;return[n,r]},useMutableSource:Fp,useSyncExternalStore:Op,useId:Qp,unstable_isNewReconciler:!1};function gi(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Fu(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:oe({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Sl={isMounted:function(n){return(n=n._reactInternals)?Ci(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=In(),m=wr(n),_=Xi(f,m);_.payload=r,l!=null&&(_.callback=l),r=Sr(n,_,m),r!==null&&(yi(r,n,m,f),dl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=In(),m=wr(n),_=Xi(f,m);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=Sr(n,_,m),r!==null&&(yi(r,n,m,f),dl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=In(),f=wr(n),m=Xi(l,f);m.tag=2,r!=null&&(m.callback=r),r=Sr(n,m,f),r!==null&&(yi(r,n,f,l),dl(r,n,f))}};function im(n,r,l,f,m,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,_,T):r.prototype&&r.prototype.isPureReactComponent?!Ho(l,f)||!Ho(m,_):!0}function rm(n,r,l){var f=!1,m=_r,_=r.contextType;return typeof _=="object"&&_!==null?_=ri(_):(m=Gn(r)?Kr:Mn.current,f=r.contextTypes,_=(f=f!=null)?Ns(n,m):_r),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=_),r}function sm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Sl.enqueueReplaceState(r,r.state,null)}function Ou(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Eu(n);var _=r.contextType;typeof _=="object"&&_!==null?m.context=ri(_):(_=Gn(r)?Kr:Mn.current,m.context=Ns(n,_)),m.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Fu(n,r,_,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Sl.enqueueReplaceState(m,m.state,null),pl(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,r){try{var l="",f=r;do l+=fe(f),f=f.return;while(f);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:m,digest:null}}function ku(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Bu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var J0=typeof WeakMap=="function"?WeakMap:Map;function om(n,r,l){l=Xi(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){Cl||(Cl=!0,ef=f),Bu(n,r)},l}function am(n,r,l){l=Xi(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Bu(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Bu(n,r),typeof f!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function lm(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new J0;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=hy.bind(null,n,r,l),r.then(n,n))}function cm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function um(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Xi(-1,1),r.tag=2,Sr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var Q0=w.ReactCurrentOwner,Wn=!1;function Nn(n,r,l,f){r.child=n===null?Pp(r,null,l,f):Fs(r,n.child,l,f)}function fm(n,r,l,f,m){l=l.render;var _=r.ref;return ks(r,m),f=Pu(n,r,l,f,_,m),l=Lu(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,ji(n,r,m)):(Xt&&l&&du(r),r.flags|=1,Nn(n,r,f,m),r.child)}function hm(n,r,l,f,m){if(n===null){var _=l.type;return typeof _=="function"&&!lf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,dm(n,r,_,f,m)):(n=Dl(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&m)===0){var T=_.memoizedProps;if(l=l.compare,l=l!==null?l:Ho,l(T,f)&&n.ref===r.ref)return ji(n,r,m)}return r.flags|=1,n=Rr(_,f),n.ref=r.ref,n.return=r,r.child=n}function dm(n,r,l,f,m){if(n!==null){var _=n.memoizedProps;if(Ho(_,f)&&n.ref===r.ref)if(Wn=!1,r.pendingProps=f=_,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Wn=!0);else return r.lanes=n.lanes,ji(n,r,m)}return zu(n,r,l,f,m)}function pm(n,r,l){var f=r.pendingProps,m=f.children,_=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Vs,Jn),Jn|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Bt(Vs,Jn),Jn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Bt(Vs,Jn),Jn|=f}else _!==null?(f=_.baseLanes|l,r.memoizedState=null):f=l,Bt(Vs,Jn),Jn|=f;return Nn(n,r,m,l),r.child}function mm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function zu(n,r,l,f,m){var _=Gn(l)?Kr:Mn.current;return _=Ns(r,_),ks(r,m),l=Pu(n,r,l,f,_,m),f=Lu(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,ji(n,r,m)):(Xt&&f&&du(r),r.flags|=1,Nn(n,r,l,m),r.child)}function gm(n,r,l,f,m){if(Gn(l)){var _=!0;sl(r)}else _=!1;if(ks(r,m),r.stateNode===null)El(n,r),rm(r,l,f),Ou(r,l,f,m),f=!0;else if(n===null){var T=r.stateNode,U=r.memoizedProps;T.props=U;var V=T.context,ie=l.contextType;typeof ie=="object"&&ie!==null?ie=ri(ie):(ie=Gn(l)?Kr:Mn.current,ie=Ns(r,ie));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==f||V!==ie)&&sm(r,T,f,ie),xr=!1;var _e=r.memoizedState;T.state=_e,pl(r,f,T,m),V=r.memoizedState,U!==f||_e!==V||Vn.current||xr?(typeof ye=="function"&&(Fu(r,l,ye,f),V=r.memoizedState),(U=xr||im(r,l,U,f,_e,V,ie))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=V),T.props=f,T.state=V,T.context=ie,f=U):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{T=r.stateNode,Np(n,r),U=r.memoizedProps,ie=r.type===r.elementType?U:gi(r.type,U),T.props=ie,Me=r.pendingProps,_e=T.context,V=l.contextType,typeof V=="object"&&V!==null?V=ri(V):(V=Gn(l)?Kr:Mn.current,V=Ns(r,V));var ze=l.getDerivedStateFromProps;(ye=typeof ze=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Me||_e!==V)&&sm(r,T,f,V),xr=!1,_e=r.memoizedState,T.state=_e,pl(r,f,T,m);var Ke=r.memoizedState;U!==Me||_e!==Ke||Vn.current||xr?(typeof ze=="function"&&(Fu(r,l,ze,f),Ke=r.memoizedState),(ie=xr||im(r,l,ie,f,_e,Ke,V)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,Ke,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,Ke,V)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Ke),T.props=f,T.state=Ke,T.context=V,f=ie):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),f=!1)}return Hu(n,r,l,f,_,m)}function Hu(n,r,l,f,m,_){mm(n,r);var T=(r.flags&128)!==0;if(!f&&!T)return m&&Sp(r,l,!1),ji(n,r,_);f=r.stateNode,Q0.current=r;var U=T&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&T?(r.child=Fs(r,n.child,null,_),r.child=Fs(r,null,U,_)):Nn(n,r,U,_),r.memoizedState=f.state,m&&Sp(r,l,!0),r.child}function vm(n){var r=n.stateNode;r.pendingContext?yp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&yp(n,r.context,!1),Tu(n,r.containerInfo)}function _m(n,r,l,f,m){return Us(),vu(m),r.flags|=256,Nn(n,r,l,f),r.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Gu(n){return{baseLanes:n,cachePool:null,transitions:null}}function ym(n,r,l){var f=r.pendingProps,m=qt.current,_=!1,T=(r.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(m&2)!==0),U?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Bt(qt,m&1),n===null)return gu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=f.children,n=f.fallback,_?(f=r.mode,_=r.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Ul(T,f,0,null),n=ss(n,f,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Gu(l),r.memoizedState=Vu,n):Wu(r,T));if(m=n.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return ey(n,r,T,f,U,m,l);if(_){_=f.fallback,T=r.mode,m=n.child,U=m.sibling;var V={mode:"hidden",children:f.children};return(T&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=V,r.deletions=null):(f=Rr(m,V),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?_=Rr(U,_):(_=ss(_,T,l,null),_.flags|=2),_.return=r,f.return=r,f.sibling=_,r.child=f,f=_,_=r.child,T=n.child.memoizedState,T=T===null?Gu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~l,r.memoizedState=Vu,f}return _=n.child,n=_.sibling,f=Rr(_,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function Wu(n,r){return r=Ul({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,l,f){return f!==null&&vu(f),Fs(r,n.child,null,l),n=Wu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ey(n,r,l,f,m,_,T){if(l)return r.flags&256?(r.flags&=-257,f=ku(Error(t(422))),Ml(n,r,T,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=f.fallback,m=r.mode,f=Ul({mode:"visible",children:f.children},m,0,null),_=ss(_,m,T,null),_.flags|=2,f.return=r,_.return=r,f.sibling=_,r.child=f,(r.mode&1)!==0&&Fs(r,n.child,null,T),r.child.memoizedState=Gu(T),r.memoizedState=Vu,_);if((r.mode&1)===0)return Ml(n,r,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,_=Error(t(419)),f=ku(_,f,void 0),Ml(n,r,T,f)}if(U=(T&n.childLanes)!==0,Wn||U){if(f=hn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|T))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Wi(n,m),yi(f,n,m,-1))}return af(),f=ku(Error(t(421))),Ml(n,r,T,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=dy.bind(null,n),m._reactRetry=r,null):(n=_.treeContext,Zn=gr(m.nextSibling),$n=r,Xt=!0,mi=null,n!==null&&(ni[ii++]=Vi,ni[ii++]=Gi,ni[ii++]=$r,Vi=n.id,Gi=n.overflow,$r=r),r=Wu(r,f.children),r.flags|=4096,r)}function xm(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Su(n.return,r,l)}function Xu(n,r,l,f,m){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=m)}function Sm(n,r,l){var f=r.pendingProps,m=f.revealOrder,_=f.tail;if(Nn(n,r,f.children,l),f=qt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xm(n,l,r);else if(n.tag===19)xm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(Bt(qt,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&ml(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Xu(r,!1,m,l,_);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&ml(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Xu(r,!0,l,null,_);break;case"together":Xu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function El(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ji(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ts|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Rr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Rr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function ty(n,r,l){switch(r.tag){case 3:vm(r),Us();break;case 5:Up(r);break;case 1:Gn(r.type)&&sl(r);break;case 4:Tu(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Bt(fl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Bt(qt,qt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?ym(n,r,l):(Bt(qt,qt.current&1),n=ji(n,r,l),n!==null?n.sibling:null);Bt(qt,qt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return Sm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Bt(qt,qt.current),f)break;return null;case 22:case 23:return r.lanes=0,pm(n,r,l)}return ji(n,r,l)}var Mm,ju,Em,Tm;Mm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ju=function(){},Em=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,Qr(Pi.current);var _=null;switch(l){case"input":m=D(n,m),f=D(n,f),_=[];break;case"select":m=oe({},m,{value:void 0}),f=oe({},f,{value:void 0}),_=[];break;case"textarea":m=A(n,m),f=A(n,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=nl)}St(l,f);var T;l=null;for(ie in m)if(!f.hasOwnProperty(ie)&&m.hasOwnProperty(ie)&&m[ie]!=null)if(ie==="style"){var U=m[ie];for(T in U)U.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(s.hasOwnProperty(ie)?_||(_=[]):(_=_||[]).push(ie,null));for(ie in f){var V=f[ie];if(U=m!=null?m[ie]:void 0,f.hasOwnProperty(ie)&&V!==U&&(V!=null||U!=null))if(ie==="style")if(U){for(T in U)!U.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in V)V.hasOwnProperty(T)&&U[T]!==V[T]&&(l||(l={}),l[T]=V[T])}else l||(_||(_=[]),_.push(ie,l)),l=V;else ie==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(_=_||[]).push(ie,V)):ie==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(ie,""+V):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(s.hasOwnProperty(ie)?(V!=null&&ie==="onScroll"&&Ht("scroll",n),_||U===V||(_=[])):(_=_||[]).push(ie,V))}l&&(_=_||[]).push("style",l);var ie=_;(r.updateQueue=ie)&&(r.flags|=4)}},Tm=function(n,r,l,f){l!==f&&(r.flags|=4)};function na(n,r){if(!Xt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Tn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function ny(n,r,l){var f=r.pendingProps;switch(pu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(r),null;case 1:return Gn(r.type)&&rl(),Tn(r),null;case 3:return f=r.stateNode,Bs(),Vt(Vn),Vt(Mn),Ru(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(cl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mi!==null&&(rf(mi),mi=null))),ju(n,r),Tn(r),null;case 5:wu(r);var m=Qr(Zo.current);if(l=r.type,n!==null&&r.stateNode!=null)Em(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Tn(r),null}if(n=Qr(Pi.current),cl(r)){f=r.stateNode,l=r.type;var _=r.memoizedProps;switch(f[bi]=r,f[jo]=_,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",f),Ht("close",f);break;case"iframe":case"object":case"embed":Ht("load",f);break;case"video":case"audio":for(m=0;m<Go.length;m++)Ht(Go[m],f);break;case"source":Ht("error",f);break;case"img":case"image":case"link":Ht("error",f),Ht("load",f);break;case"details":Ht("toggle",f);break;case"input":Je(f,_),Ht("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ht("invalid",f);break;case"textarea":$(f,_),Ht("invalid",f)}St(l,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var U=_[T];T==="children"?typeof U=="string"?f.textContent!==U&&(_.suppressHydrationWarning!==!0&&tl(f.textContent,U,n),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&tl(f.textContent,U,n),m=["children",""+U]):s.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Ht("scroll",f)}switch(l){case"input":vt(f),be(f,_,!0);break;case"textarea":vt(f),ve(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=nl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=T.createElement(l,{is:f.is}):(n=T.createElement(l),l==="select"&&(T=n,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):n=T.createElementNS(n,l),n[bi]=r,n[jo]=f,Mm(n,r,!1,!1),r.stateNode=n;e:{switch(T=ft(l,f),l){case"dialog":Ht("cancel",n),Ht("close",n),m=f;break;case"iframe":case"object":case"embed":Ht("load",n),m=f;break;case"video":case"audio":for(m=0;m<Go.length;m++)Ht(Go[m],n);m=f;break;case"source":Ht("error",n),m=f;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),m=f;break;case"details":Ht("toggle",n),m=f;break;case"input":Je(n,f),m=D(n,f),Ht("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=oe({},f,{value:void 0}),Ht("invalid",n);break;case"textarea":$(n,f),m=A(n,f),Ht("invalid",n);break;default:m=f}St(l,m),U=m;for(_ in U)if(U.hasOwnProperty(_)){var V=U[_];_==="style"?ot(n,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ve(n,V)):_==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&pt(n,V):typeof V=="number"&&pt(n,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(s.hasOwnProperty(_)?V!=null&&_==="onScroll"&&Ht("scroll",n):V!=null&&P(n,_,V,T))}switch(l){case"input":vt(n),be(n,f,!1);break;case"textarea":vt(n),ve(n);break;case"option":f.value!=null&&n.setAttribute("value",""+Pe(f.value));break;case"select":n.multiple=!!f.multiple,_=f.value,_!=null?L(n,!!f.multiple,_,!1):f.defaultValue!=null&&L(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=nl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Tn(r),null;case 6:if(n&&r.stateNode!=null)Tm(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Qr(Zo.current),Qr(Pi.current),cl(r)){if(f=r.stateNode,l=r.memoizedProps,f[bi]=r,(_=f.nodeValue!==l)&&(n=$n,n!==null))switch(n.tag){case 3:tl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(f.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[bi]=r,r.stateNode=f}return Tn(r),null;case 13:if(Vt(qt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Zn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Rp(),Us(),r.flags|=98560,_=!1;else if(_=cl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[bi]=r}else Us(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tn(r),_=!1}else mi!==null&&(rf(mi),mi=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(qt.current&1)!==0?an===0&&(an=3):af())),r.updateQueue!==null&&(r.flags|=4),Tn(r),null);case 4:return Bs(),ju(n,r),n===null&&Wo(r.stateNode.containerInfo),Tn(r),null;case 10:return xu(r.type._context),Tn(r),null;case 17:return Gn(r.type)&&rl(),Tn(r),null;case 19:if(Vt(qt),_=r.memoizedState,_===null)return Tn(r),null;if(f=(r.flags&128)!==0,T=_.rendering,T===null)if(f)na(_,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=ml(n),T!==null){for(r.flags|=128,na(_,!1),f=T.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)_=l,n=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt(qt,qt.current&1|2),r.child}n=n.sibling}_.tail!==null&&W()>Gs&&(r.flags|=128,f=!0,na(_,!1),r.lanes=4194304)}else{if(!f)if(n=ml(T),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),na(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Xt)return Tn(r),null}else 2*W()-_.renderingStartTime>Gs&&l!==1073741824&&(r.flags|=128,f=!0,na(_,!1),r.lanes=4194304);_.isBackwards?(T.sibling=r.child,r.child=T):(l=_.last,l!==null?l.sibling=T:r.child=T,_.last=T)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=W(),r.sibling=null,l=qt.current,Bt(qt,f?l&1|2:l&1),r):(Tn(r),null);case 22:case 23:return of(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(Jn&1073741824)!==0&&(Tn(r),r.subtreeFlags&6&&(r.flags|=8192)):Tn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function iy(n,r){switch(pu(r),r.tag){case 1:return Gn(r.type)&&rl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),Vt(Vn),Vt(Mn),Ru(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return wu(r),null;case 13:if(Vt(qt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Us()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Vt(qt),null;case 4:return Bs(),null;case 10:return xu(r.type._context),null;case 22:case 23:return of(),null;case 24:return null;default:return null}}var Tl=!1,wn=!1,ry=typeof WeakSet=="function"?WeakSet:Set,je=null;function Hs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Zt(n,r,f)}else l.current=null}function qu(n,r,l){try{l()}catch(f){Zt(n,r,f)}}var wm=!1;function sy(n,r){if(su=Wa,n=ip(),Zc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var T=0,U=-1,V=-1,ie=0,ye=0,Me=n,_e=null;t:for(;;){for(var ze;Me!==l||m!==0&&Me.nodeType!==3||(U=T+m),Me!==_||f!==0&&Me.nodeType!==3||(V=T+f),Me.nodeType===3&&(T+=Me.nodeValue.length),(ze=Me.firstChild)!==null;)_e=Me,Me=ze;for(;;){if(Me===n)break t;if(_e===l&&++ie===m&&(U=T),_e===_&&++ye===f&&(V=T),(ze=Me.nextSibling)!==null)break;Me=_e,_e=Me.parentNode}Me=ze}l=U===-1||V===-1?null:{start:U,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(ou={focusedElem:n,selectionRange:l},Wa=!1,je=r;je!==null;)if(r=je,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,je=n;else for(;je!==null;){r=je;try{var Ke=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Ze=Ke.memoizedProps,Qt=Ke.memoizedState,K=r.stateNode,X=K.getSnapshotBeforeUpdate(r.elementType===r.type?Ze:gi(r.type,Ze),Qt);K.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){Zt(r,r.return,Re)}if(n=r.sibling,n!==null){n.return=r.return,je=n;break}je=r.return}return Ke=wm,wm=!1,Ke}function ia(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var _=m.destroy;m.destroy=void 0,_!==void 0&&qu(r,l,_)}m=m.next}while(m!==f)}}function wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Yu(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Am(n){var r=n.alternate;r!==null&&(n.alternate=null,Am(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[jo],delete r[uu],delete r[H0],delete r[V0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rm(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ku(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=nl));else if(f!==4&&(n=n.child,n!==null))for(Ku(n,r,l),n=n.sibling;n!==null;)Ku(n,r,l),n=n.sibling}function $u(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for($u(n,r,l),n=n.sibling;n!==null;)$u(n,r,l),n=n.sibling}var vn=null,vi=!1;function Mr(n,r,l){for(l=l.child;l!==null;)bm(n,r,l),l=l.sibling}function bm(n,r,l){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(et,l)}catch{}switch(l.tag){case 5:wn||Hs(l,r);case 6:var f=vn,m=vi;vn=null,Mr(n,r,l),vn=f,vi=m,vn!==null&&(vi?(n=vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):vn.removeChild(l.stateNode));break;case 18:vn!==null&&(vi?(n=vn,l=l.stateNode,n.nodeType===8?cu(n.parentNode,l):n.nodeType===1&&cu(n,l),Uo(n)):cu(vn,l.stateNode));break;case 4:f=vn,m=vi,vn=l.stateNode.containerInfo,vi=!0,Mr(n,r,l),vn=f,vi=m;break;case 0:case 11:case 14:case 15:if(!wn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&qu(l,r,T),m=m.next}while(m!==f)}Mr(n,r,l);break;case 1:if(!wn&&(Hs(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(U){Zt(l,r,U)}Mr(n,r,l);break;case 21:Mr(n,r,l);break;case 22:l.mode&1?(wn=(f=wn)||l.memoizedState!==null,Mr(n,r,l),wn=f):Mr(n,r,l);break;default:Mr(n,r,l)}}function Pm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new ry),r.forEach(function(f){var m=py.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function _i(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var _=n,T=r,U=T;e:for(;U!==null;){switch(U.tag){case 5:vn=U.stateNode,vi=!1;break e;case 3:vn=U.stateNode.containerInfo,vi=!0;break e;case 4:vn=U.stateNode.containerInfo,vi=!0;break e}U=U.return}if(vn===null)throw Error(t(160));bm(_,T,m),vn=null,vi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(ie){Zt(m,r,ie)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Lm(r,n),r=r.sibling}function Lm(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(r,n),Ni(n),f&4){try{ia(3,n,n.return),wl(3,n)}catch(Ze){Zt(n,n.return,Ze)}try{ia(5,n,n.return)}catch(Ze){Zt(n,n.return,Ze)}}break;case 1:_i(r,n),Ni(n),f&512&&l!==null&&Hs(l,l.return);break;case 5:if(_i(r,n),Ni(n),f&512&&l!==null&&Hs(l,l.return),n.flags&32){var m=n.stateNode;try{pt(m,"")}catch(Ze){Zt(n,n.return,Ze)}}if(f&4&&(m=n.stateNode,m!=null)){var _=n.memoizedProps,T=l!==null?l.memoizedProps:_,U=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&Ee(m,_),ft(U,T);var ie=ft(U,_);for(T=0;T<V.length;T+=2){var ye=V[T],Me=V[T+1];ye==="style"?ot(m,Me):ye==="dangerouslySetInnerHTML"?Ve(m,Me):ye==="children"?pt(m,Me):P(m,ye,Me,ie)}switch(U){case"input":He(m,_);break;case"textarea":he(m,_);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var ze=_.value;ze!=null?L(m,!!_.multiple,ze,!1):_e!==!!_.multiple&&(_.defaultValue!=null?L(m,!!_.multiple,_.defaultValue,!0):L(m,!!_.multiple,_.multiple?[]:"",!1))}m[jo]=_}catch(Ze){Zt(n,n.return,Ze)}}break;case 6:if(_i(r,n),Ni(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,_=n.memoizedProps;try{m.nodeValue=_}catch(Ze){Zt(n,n.return,Ze)}}break;case 3:if(_i(r,n),Ni(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Uo(r.containerInfo)}catch(Ze){Zt(n,n.return,Ze)}break;case 4:_i(r,n),Ni(n);break;case 13:_i(r,n),Ni(n),m=n.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Qu=W())),f&4&&Pm(n);break;case 22:if(ye=l!==null&&l.memoizedState!==null,n.mode&1?(wn=(ie=wn)||ye,_i(r,n),wn=ie):_i(r,n),Ni(n),f&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!ye&&(n.mode&1)!==0)for(je=n,ye=n.child;ye!==null;){for(Me=je=ye;je!==null;){switch(_e=je,ze=_e.child,_e.tag){case 0:case 11:case 14:case 15:ia(4,_e,_e.return);break;case 1:Hs(_e,_e.return);var Ke=_e.stateNode;if(typeof Ke.componentWillUnmount=="function"){f=_e,l=_e.return;try{r=f,Ke.props=r.memoizedProps,Ke.state=r.memoizedState,Ke.componentWillUnmount()}catch(Ze){Zt(f,l,Ze)}}break;case 5:Hs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Dm(Me);continue}}ze!==null?(ze.return=_e,je=ze):Dm(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{m=Me.stateNode,ie?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=Me.stateNode,V=Me.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=it("display",T))}catch(Ze){Zt(n,n.return,Ze)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=ie?"":Me.memoizedProps}catch(Ze){Zt(n,n.return,Ze)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:_i(r,n),Ni(n),f&4&&Pm(n);break;case 21:break;default:_i(r,n),Ni(n)}}function Ni(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Rm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(pt(m,""),f.flags&=-33);var _=Cm(n);$u(n,_,m);break;case 3:case 4:var T=f.stateNode.containerInfo,U=Cm(n);Ku(n,U,T);break;default:throw Error(t(161))}}catch(V){Zt(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function oy(n,r,l){je=n,Nm(n)}function Nm(n,r,l){for(var f=(n.mode&1)!==0;je!==null;){var m=je,_=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||Tl;if(!T){var U=m.alternate,V=U!==null&&U.memoizedState!==null||wn;U=Tl;var ie=wn;if(Tl=T,(wn=V)&&!ie)for(je=m;je!==null;)T=je,V=T.child,T.tag===22&&T.memoizedState!==null?Um(m):V!==null?(V.return=T,je=V):Um(m);for(;_!==null;)je=_,Nm(_),_=_.sibling;je=m,Tl=U,wn=ie}Im(n)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,je=_):Im(n)}}function Im(n){for(;je!==null;){var r=je;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:wn||wl(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!wn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:gi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Dp(r,_,f);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Dp(r,T,l)}break;case 5:var U=r.stateNode;if(l===null&&r.flags&4){l=U;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ie=r.alternate;if(ie!==null){var ye=ie.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&Uo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wn||r.flags&512&&Yu(r)}catch(_e){Zt(r,r.return,_e)}}if(r===n){je=null;break}if(l=r.sibling,l!==null){l.return=r.return,je=l;break}je=r.return}}function Dm(n){for(;je!==null;){var r=je;if(r===n){je=null;break}var l=r.sibling;if(l!==null){l.return=r.return,je=l;break}je=r.return}}function Um(n){for(;je!==null;){var r=je;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{wl(4,r)}catch(V){Zt(r,l,V)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(V){Zt(r,m,V)}}var _=r.return;try{Yu(r)}catch(V){Zt(r,_,V)}break;case 5:var T=r.return;try{Yu(r)}catch(V){Zt(r,T,V)}}}catch(V){Zt(r,r.return,V)}if(r===n){je=null;break}var U=r.sibling;if(U!==null){U.return=r.return,je=U;break}je=r.return}}var ay=Math.ceil,Al=w.ReactCurrentDispatcher,Zu=w.ReactCurrentOwner,oi=w.ReactCurrentBatchConfig,bt=0,hn=null,en=null,_n=0,Jn=0,Vs=vr(0),an=0,ra=null,ts=0,Rl=0,Ju=0,sa=null,Xn=null,Qu=0,Gs=1/0,qi=null,Cl=!1,ef=null,Er=null,bl=!1,Tr=null,Pl=0,oa=0,tf=null,Ll=-1,Nl=0;function In(){return(bt&6)!==0?W():Ll!==-1?Ll:Ll=W()}function wr(n){return(n.mode&1)===0?1:(bt&2)!==0&&_n!==0?_n&-_n:W0.transition!==null?(Nl===0&&(Nl=Ln()),Nl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Od(n.type)),n)}function yi(n,r,l,f){if(50<oa)throw oa=0,tf=null,Error(t(185));Jt(n,l,f),((bt&2)===0||n!==hn)&&(n===hn&&((bt&2)===0&&(Rl|=l),an===4&&Ar(n,_n)),jn(n,f),l===1&&bt===0&&(r.mode&1)===0&&(Gs=W()+500,ol&&yr()))}function jn(n,r){var l=n.callbackNode;jr(n,r);var f=di(n,n===hn?_n:0);if(f===0)l!==null&&q(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&q(l),r===1)n.tag===0?G0(Om.bind(null,n)):Mp(Om.bind(null,n)),B0(function(){(bt&6)===0&&yr()}),l=null;else{switch(bd(f)){case 1:l=De;break;case 4:l=We;break;case 16:l=Xe;break;case 536870912:l=lt;break;default:l=Xe}l=Xm(l,Fm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Fm(n,r){if(Ll=-1,Nl=0,(bt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ws()&&n.callbackNode!==l)return null;var f=di(n,n===hn?_n:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=Il(n,f);else{r=f;var m=bt;bt|=2;var _=Bm();(hn!==n||_n!==r)&&(qi=null,Gs=W()+500,is(n,r));do try{uy();break}catch(U){km(n,U)}while(!0);yu(),Al.current=_,bt=m,en!==null?r=0:(hn=null,_n=0,r=an)}if(r!==0){if(r===2&&(m=Ot(n),m!==0&&(f=m,r=nf(n,m))),r===1)throw l=ra,is(n,0),Ar(n,f),jn(n,W()),l;if(r===6)Ar(n,f);else{if(m=n.current.alternate,(f&30)===0&&!ly(m)&&(r=Il(n,f),r===2&&(_=Ot(n),_!==0&&(f=_,r=nf(n,_))),r===1))throw l=ra,is(n,0),Ar(n,f),jn(n,W()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:rs(n,Xn,qi);break;case 3:if(Ar(n,f),(f&130023424)===f&&(r=Qu+500-W(),10<r)){if(di(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){In(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=lu(rs.bind(null,n,Xn,qi),r);break}rs(n,Xn,qi);break;case 4:if(Ar(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var T=31-Lt(f);_=1<<T,T=r[T],T>m&&(m=T),f&=~_}if(f=m,f=W()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*ay(f/1960))-f,10<f){n.timeoutHandle=lu(rs.bind(null,n,Xn,qi),f);break}rs(n,Xn,qi);break;case 5:rs(n,Xn,qi);break;default:throw Error(t(329))}}}return jn(n,W()),n.callbackNode===l?Fm.bind(null,n):null}function nf(n,r){var l=sa;return n.current.memoizedState.isDehydrated&&(is(n,r).flags|=256),n=Il(n,r),n!==2&&(r=Xn,Xn=l,r!==null&&rf(r)),n}function rf(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function ly(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],_=m.getSnapshot;m=m.value;try{if(!pi(_(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ar(n,r){for(r&=~Ju,r&=~Rl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Lt(r),f=1<<l;n[l]=-1,r&=~f}}function Om(n){if((bt&6)!==0)throw Error(t(327));Ws();var r=di(n,0);if((r&1)===0)return jn(n,W()),null;var l=Il(n,r);if(n.tag!==0&&l===2){var f=Ot(n);f!==0&&(r=f,l=nf(n,f))}if(l===1)throw l=ra,is(n,0),Ar(n,r),jn(n,W()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,rs(n,Xn,qi),jn(n,W()),null}function sf(n,r){var l=bt;bt|=1;try{return n(r)}finally{bt=l,bt===0&&(Gs=W()+500,ol&&yr())}}function ns(n){Tr!==null&&Tr.tag===0&&(bt&6)===0&&Ws();var r=bt;bt|=1;var l=oi.transition,f=Et;try{if(oi.transition=null,Et=1,n)return n()}finally{Et=f,oi.transition=l,bt=r,(bt&6)===0&&yr()}}function of(){Jn=Vs.current,Vt(Vs)}function is(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,k0(l)),en!==null)for(l=en.return;l!==null;){var f=l;switch(pu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&rl();break;case 3:Bs(),Vt(Vn),Vt(Mn),Ru();break;case 5:wu(f);break;case 4:Bs();break;case 13:Vt(qt);break;case 19:Vt(qt);break;case 10:xu(f.type._context);break;case 22:case 23:of()}l=l.return}if(hn=n,en=n=Rr(n.current,null),_n=Jn=r,an=0,ra=null,Ju=Rl=ts=0,Xn=sa=null,Jr!==null){for(r=0;r<Jr.length;r++)if(l=Jr[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,_=l.pending;if(_!==null){var T=_.next;_.next=m,f.next=T}l.pending=f}Jr=null}return n}function km(n,r){do{var l=en;try{if(yu(),gl.current=xl,vl){for(var f=Yt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}vl=!1}if(es=0,fn=on=Yt=null,Jo=!1,Qo=0,Zu.current=null,l===null||l.return===null){an=1,ra=r,en=null;break}e:{var _=n,T=l.return,U=l,V=r;if(r=_n,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ie=V,ye=U,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ze=cm(T);if(ze!==null){ze.flags&=-257,um(ze,T,U,_,r),ze.mode&1&&lm(_,ie,r),r=ze,V=ie;var Ke=r.updateQueue;if(Ke===null){var Ze=new Set;Ze.add(V),r.updateQueue=Ze}else Ke.add(V);break e}else{if((r&1)===0){lm(_,ie,r),af();break e}V=Error(t(426))}}else if(Xt&&U.mode&1){var Qt=cm(T);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),um(Qt,T,U,_,r),vu(zs(V,U));break e}}_=V=zs(V,U),an!==4&&(an=2),sa===null?sa=[_]:sa.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var K=om(_,V,r);Ip(_,K);break e;case 1:U=V;var X=_.type,Z=_.stateNode;if((_.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Er===null||!Er.has(Z)))){_.flags|=65536,r&=-r,_.lanes|=r;var Re=am(_,U,r);Ip(_,Re);break e}}_=_.return}while(_!==null)}Hm(l)}catch(Qe){r=Qe,en===l&&l!==null&&(en=l=l.return);continue}break}while(!0)}function Bm(){var n=Al.current;return Al.current=xl,n===null?xl:n}function af(){(an===0||an===3||an===2)&&(an=4),hn===null||(ts&268435455)===0&&(Rl&268435455)===0||Ar(hn,_n)}function Il(n,r){var l=bt;bt|=2;var f=Bm();(hn!==n||_n!==r)&&(qi=null,is(n,r));do try{cy();break}catch(m){km(n,m)}while(!0);if(yu(),bt=l,Al.current=f,en!==null)throw Error(t(261));return hn=null,_n=0,an}function cy(){for(;en!==null;)zm(en)}function uy(){for(;en!==null&&!re();)zm(en)}function zm(n){var r=Wm(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,r===null?Hm(n):en=r,Zu.current=null}function Hm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=ny(l,r,Jn),l!==null){en=l;return}}else{if(l=iy(l,r),l!==null){l.flags&=32767,en=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,en=null;return}}if(r=r.sibling,r!==null){en=r;return}en=r=n}while(r!==null);an===0&&(an=5)}function rs(n,r,l){var f=Et,m=oi.transition;try{oi.transition=null,Et=1,fy(n,r,l,f)}finally{oi.transition=m,Et=f}return null}function fy(n,r,l,f){do Ws();while(Tr!==null);if((bt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(Sn(n,_),n===hn&&(en=hn=null,_n=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||bl||(bl=!0,Xm(Xe,function(){return Ws(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var T=Et;Et=1;var U=bt;bt|=4,Zu.current=null,sy(n,l),Lm(l,n),L0(ou),Wa=!!su,ou=su=null,n.current=l,oy(l),se(),bt=U,Et=T,oi.transition=_}else n.current=l;if(bl&&(bl=!1,Tr=n,Pl=m),_=n.pendingLanes,_===0&&(Er=null),Pt(l.stateNode),jn(n,W()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Cl)throw Cl=!1,n=ef,ef=null,n;return(Pl&1)!==0&&n.tag!==0&&Ws(),_=n.pendingLanes,(_&1)!==0?n===tf?oa++:(oa=0,tf=n):oa=0,yr(),null}function Ws(){if(Tr!==null){var n=bd(Pl),r=oi.transition,l=Et;try{if(oi.transition=null,Et=16>n?16:n,Tr===null)var f=!1;else{if(n=Tr,Tr=null,Pl=0,(bt&6)!==0)throw Error(t(331));var m=bt;for(bt|=4,je=n.current;je!==null;){var _=je,T=_.child;if((je.flags&16)!==0){var U=_.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ie=U[V];for(je=ie;je!==null;){var ye=je;switch(ye.tag){case 0:case 11:case 15:ia(8,ye,_)}var Me=ye.child;if(Me!==null)Me.return=ye,je=Me;else for(;je!==null;){ye=je;var _e=ye.sibling,ze=ye.return;if(Am(ye),ye===ie){je=null;break}if(_e!==null){_e.return=ze,je=_e;break}je=ze}}}var Ke=_.alternate;if(Ke!==null){var Ze=Ke.child;if(Ze!==null){Ke.child=null;do{var Qt=Ze.sibling;Ze.sibling=null,Ze=Qt}while(Ze!==null)}}je=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,je=T;else e:for(;je!==null;){if(_=je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ia(9,_,_.return)}var K=_.sibling;if(K!==null){K.return=_.return,je=K;break e}je=_.return}}var X=n.current;for(je=X;je!==null;){T=je;var Z=T.child;if((T.subtreeFlags&2064)!==0&&Z!==null)Z.return=T,je=Z;else e:for(T=X;je!==null;){if(U=je,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:wl(9,U)}}catch(Qe){Zt(U,U.return,Qe)}if(U===T){je=null;break e}var Re=U.sibling;if(Re!==null){Re.return=U.return,je=Re;break e}je=U.return}}if(bt=m,yr(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(et,n)}catch{}f=!0}return f}finally{Et=l,oi.transition=r}}return!1}function Vm(n,r,l){r=zs(l,r),r=om(n,r,1),n=Sr(n,r,1),r=In(),n!==null&&(Jt(n,1,r),jn(n,r))}function Zt(n,r,l){if(n.tag===3)Vm(n,n,l);else for(;r!==null;){if(r.tag===3){Vm(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Er===null||!Er.has(f))){n=zs(l,n),n=am(r,n,1),r=Sr(r,n,1),n=In(),r!==null&&(Jt(r,1,n),jn(r,n));break}}r=r.return}}function hy(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=In(),n.pingedLanes|=n.suspendedLanes&l,hn===n&&(_n&l)===l&&(an===4||an===3&&(_n&130023424)===_n&&500>W()-Qu?is(n,0):Ju|=l),jn(n,r)}function Gm(n,r){r===0&&((n.mode&1)===0?r=1:(r=wt,wt<<=1,(wt&130023424)===0&&(wt=4194304)));var l=In();n=Wi(n,r),n!==null&&(Jt(n,r,l),jn(n,l))}function dy(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Gm(n,l)}function py(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Gm(n,l)}var Wm;Wm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Wn=!1,ty(n,r,l);Wn=(n.flags&131072)!==0}else Wn=!1,Xt&&(r.flags&1048576)!==0&&Ep(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;El(n,r),n=r.pendingProps;var m=Ns(r,Mn.current);ks(r,l),m=Pu(null,r,f,n,m,l);var _=Lu();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(f)?(_=!0,sl(r)):_=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Eu(r),m.updater=Sl,r.stateNode=m,m._reactInternals=r,Ou(r,f,n,l),r=Hu(null,r,f,!0,_,l)):(r.tag=0,Xt&&_&&du(r),Nn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(El(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=gy(f),n=gi(f,n),m){case 0:r=zu(null,r,f,n,l);break e;case 1:r=gm(null,r,f,n,l);break e;case 11:r=fm(null,r,f,n,l);break e;case 14:r=hm(null,r,f,gi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:gi(f,m),zu(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:gi(f,m),gm(n,r,f,m,l);case 3:e:{if(vm(r),n===null)throw Error(t(387));f=r.pendingProps,_=r.memoizedState,m=_.element,Np(n,r),pl(r,f,null,l);var T=r.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){m=zs(Error(t(423)),r),r=_m(n,r,f,l,m);break e}else if(f!==m){m=zs(Error(t(424)),r),r=_m(n,r,f,l,m);break e}else for(Zn=gr(r.stateNode.containerInfo.firstChild),$n=r,Xt=!0,mi=null,l=Pp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Us(),f===m){r=ji(n,r,l);break e}Nn(n,r,f,l)}r=r.child}return r;case 5:return Up(r),n===null&&gu(r),f=r.type,m=r.pendingProps,_=n!==null?n.memoizedProps:null,T=m.children,au(f,m)?T=null:_!==null&&au(f,_)&&(r.flags|=32),mm(n,r),Nn(n,r,T,l),r.child;case 6:return n===null&&gu(r),null;case 13:return ym(n,r,l);case 4:return Tu(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Fs(r,null,f,l):Nn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:gi(f,m),fm(n,r,f,m,l);case 7:return Nn(n,r,r.pendingProps,l),r.child;case 8:return Nn(n,r,r.pendingProps.children,l),r.child;case 12:return Nn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,_=r.memoizedProps,T=m.value,Bt(fl,f._currentValue),f._currentValue=T,_!==null)if(pi(_.value,T)){if(_.children===m.children&&!Vn.current){r=ji(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var U=_.dependencies;if(U!==null){T=_.child;for(var V=U.firstContext;V!==null;){if(V.context===f){if(_.tag===1){V=Xi(-1,l&-l),V.tag=2;var ie=_.updateQueue;if(ie!==null){ie=ie.shared;var ye=ie.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),ie.pending=V}}_.lanes|=l,V=_.alternate,V!==null&&(V.lanes|=l),Su(_.return,l,r),U.lanes|=l;break}V=V.next}}else if(_.tag===10)T=_.type===r.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=l,U=T.alternate,U!==null&&(U.lanes|=l),Su(T,l,r),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===r){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Nn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,ks(r,l),m=ri(m),f=f(m),r.flags|=1,Nn(n,r,f,l),r.child;case 14:return f=r.type,m=gi(f,r.pendingProps),m=gi(f.type,m),hm(n,r,f,m,l);case 15:return dm(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:gi(f,m),El(n,r),r.tag=1,Gn(f)?(n=!0,sl(r)):n=!1,ks(r,l),rm(r,f,m),Ou(r,f,m,l),Hu(null,r,f,!0,n,l);case 19:return Sm(n,r,l);case 22:return pm(n,r,l)}throw Error(t(156,r.tag))};function Xm(n,r){return b(n,r)}function my(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,r,l,f){return new my(n,r,l,f)}function lf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gy(n){if(typeof n=="function")return lf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===ae)return 14}return 2}function Rr(n,r){var l=n.alternate;return l===null?(l=ai(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Dl(n,r,l,f,m,_){var T=2;if(f=n,typeof n=="function")lf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case I:return ss(l.children,m,_,r);case F:T=8,m|=8;break;case C:return n=ai(12,l,r,m|2),n.elementType=C,n.lanes=_,n;case Y:return n=ai(13,l,r,m),n.elementType=Y,n.lanes=_,n;case te:return n=ai(19,l,r,m),n.elementType=te,n.lanes=_,n;case le:return Ul(l,m,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case k:T=9;break e;case Q:T=11;break e;case ae:T=14;break e;case ee:T=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ai(T,l,r,m),r.elementType=n,r.type=f,r.lanes=_,r}function ss(n,r,l,f){return n=ai(7,n,f,r),n.lanes=l,n}function Ul(n,r,l,f){return n=ai(22,n,f,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function cf(n,r,l){return n=ai(6,n,null,r),n.lanes=l,n}function uf(n,r,l){return r=ai(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function vy(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ff(n,r,l,f,m,_,T,U,V){return n=new vy(n,r,l,U,V),r===1?(r=1,_===!0&&(r|=8)):r=0,_=ai(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eu(_),n}function _y(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function jm(n){if(!n)return _r;n=n._reactInternals;e:{if(Ci(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Gn(l))return xp(n,l,r)}return r}function qm(n,r,l,f,m,_,T,U,V){return n=ff(l,f,!0,n,m,_,T,U,V),n.context=jm(null),l=n.current,f=In(),m=wr(l),_=Xi(f,m),_.callback=r??null,Sr(l,_,m),n.current.lanes=m,Jt(n,m,f),jn(n,f),n}function Fl(n,r,l,f){var m=r.current,_=In(),T=wr(m);return l=jm(l),r.context===null?r.context=l:r.pendingContext=l,r=Xi(_,T),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Sr(m,r,T),n!==null&&(yi(n,m,T,_),dl(n,m,T)),T}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ym(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function hf(n,r){Ym(n,r),(n=n.alternate)&&Ym(n,r)}function yy(){return null}var Km=typeof reportError=="function"?reportError:function(n){console.error(n)};function df(n){this._internalRoot=n}kl.prototype.render=df.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Fl(n,r,null,null)},kl.prototype.unmount=df.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ns(function(){Fl(null,n,null,null)}),r[zi]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Nd();n={blockedOn:null,target:n,priority:r};for(var l=0;l<dr.length&&r!==0&&r<dr[l].priority;l++);dr.splice(l,0,n),l===0&&Ud(n)}};function pf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $m(){}function xy(n,r,l,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var ie=Ol(T);_.call(ie)}}var T=qm(r,f,n,0,null,!1,!1,"",$m);return n._reactRootContainer=T,n[zi]=T.current,Wo(n.nodeType===8?n.parentNode:n),ns(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var ie=Ol(V);U.call(ie)}}var V=ff(n,0,!1,null,null,!1,!1,"",$m);return n._reactRootContainer=V,n[zi]=V.current,Wo(n.nodeType===8?n.parentNode:n),ns(function(){Fl(r,V,l,f)}),V}function zl(n,r,l,f,m){var _=l._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var U=m;m=function(){var V=Ol(T);U.call(V)}}Fl(r,T,n,m)}else T=xy(l,r,n,m,f);return Ol(T)}Pd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=gn(r.pendingLanes);l!==0&&(qr(r,l|1),jn(r,W()),(bt&6)===0&&(Gs=W()+500,yr()))}break;case 13:ns(function(){var f=Wi(n,1);if(f!==null){var m=In();yi(f,n,1,m)}}),hf(n,1)}},kc=function(n){if(n.tag===13){var r=Wi(n,134217728);if(r!==null){var l=In();yi(r,n,134217728,l)}hf(n,134217728)}},Ld=function(n){if(n.tag===13){var r=wr(n),l=Wi(n,r);if(l!==null){var f=In();yi(l,n,r,f)}hf(n,r)}},Nd=function(){return Et},Id=function(n,r){var l=Et;try{return Et=n,r()}finally{Et=l}},Ie=function(n,r,l){switch(r){case"input":if(He(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=il(f);if(!m)throw Error(t(90));ge(f),He(f,m)}}}break;case"textarea":he(n,l);break;case"select":r=l.value,r!=null&&L(n,!!l.multiple,r,!1)}},zt=sf,sn=ns;var Sy={usingClientEntryPoint:!1,Events:[qo,Ps,il,ke,ht,sf]},aa={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},My={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=za(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{et=Hl.inject(My),dt=Hl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy,qn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pf(r))throw Error(t(200));return _y(n,r,null,l)},qn.createRoot=function(n,r){if(!pf(n))throw Error(t(299));var l=!1,f="",m=Km;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=ff(n,1,!1,null,null,l,!1,f,m),n[zi]=r.current,Wo(n.nodeType===8?n.parentNode:n),new df(r)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=za(r),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return ns(n)},qn.hydrate=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!0,l)},qn.hydrateRoot=function(n,r,l){if(!pf(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,_="",T=Km;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=qm(r,null,n,1,l??null,m,!1,_,T),n[zi]=r.current,Wo(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new kl(r)},qn.render=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!1,l)},qn.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},qn.unstable_batchedUpdates=sf,qn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zl(n,r,l,!1,f)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var rg;function Bv(){if(rg)return vf.exports;rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vf.exports=Ly(),vf.exports}var sg;function Ny(){if(sg)return Vl;sg=1;var o=Bv();return Vl.createRoot=o.createRoot,Vl.hydrateRoot=o.hydrateRoot,Vl}var Iy=Ny(),Dy=Bv();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zv=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=yt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...u},h)=>yt.createElement("svg",{ref:h,...Fy,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:zv("lucide",s),...u},[...c.map(([d,p])=>yt.createElement(d,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(o,e)=>{const t=yt.forwardRef(({className:i,...s},a)=>yt.createElement(Oy,{ref:a,iconNode:e,className:zv(`lucide-${Uy(o)}`,i),...s}));return t.displayName=`${o}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=mn("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=mn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=mn("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=mn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=mn("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=mn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=mn("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=mn("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=mn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=mn("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=mn("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=mn("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=mn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=mn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=mn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=mn("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=mn("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=mn("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]),Gv=[{id:"front",label:"Front"},{id:"hero",label:"Hero"},{id:"isometric",label:"Isometric"},{id:"orbit",label:"Orbit"}],Wv=[{id:"glass",label:"Black Titanium",body:"#161a20",edge:"#2d343d",metalness:.82,roughness:.2},{id:"matte",label:"Deep Graphite",body:"#101317",edge:"#242a31",metalness:.66,roughness:.38},{id:"silver",label:"Natural Titanium",body:"#d6d0c8",edge:"#f2ece4",metalness:.74,roughness:.24}],oh=[{id:"studio",label:"Studio",swatch:"#eef3f7",clear:"#edf3f7",floor:"#dfe8ef"},{id:"sky",label:"Sky",swatch:"#dff7ff",clear:"#e5f9ff",floor:"#d1eff8"},{id:"paper",label:"Paper",swatch:"#f7f8f9",clear:"#f8fafb",floor:"#e8edf1"},{id:"graphite",label:"Graphite",swatch:"#202830",clear:"#161c23",floor:"#10151b"},{id:"coral",label:"Coral",swatch:"#fff0ec",clear:"#fff3ef",floor:"#f3d9d2"}],og={angle:"hero",material:"glass",background:"studio",reflection:62,depth:48,shadow:58,lighting:72,autoSpin:!1};function ca({icon:o,title:e,children:t}){return Se.jsxs("section",{className:"inspector-section",children:[Se.jsxs("div",{className:"section-title",children:[Se.jsx(o,{size:16}),Se.jsx("h2",{children:e})]}),t]})}function ag({label:o,value:e,options:t,onChange:i}){return Se.jsxs("label",{className:"field",children:[Se.jsx("span",{className:"field-label",children:o}),Se.jsx("span",{className:"segmented",children:t.map(s=>Se.jsx("button",{className:s.id===e?"selected":"",type:"button",onClick:()=>i(s.id),children:s.label},s.id))})]})}function Gl({label:o,value:e,min:t=0,max:i=100,onChange:s}){return Se.jsxs("label",{className:"field range-field",children:[Se.jsxs("span",{className:"field-row",children:[Se.jsx("span",{className:"field-label",children:o}),Se.jsx("span",{className:"value-readout",children:e})]}),Se.jsx("input",{type:"range",min:t,max:i,value:e,onChange:a=>s(Number(a.target.value))})]})}function ex({label:o,icon:e,checked:t,onChange:i}){return Se.jsxs("button",{className:t?"toggle-control active":"toggle-control",type:"button","aria-pressed":t,onClick:()=>i(!t),children:[Se.jsxs("span",{children:[Se.jsx(e,{size:16}),o]}),Se.jsx("span",{className:"toggle-track","aria-hidden":"true",children:Se.jsx("span",{})})]})}function tx({value:o,onChange:e}){return Se.jsxs("div",{className:"field",children:[Se.jsx("span",{className:"field-label",children:"Background"}),Se.jsx("div",{className:"swatches",children:oh.map(t=>Se.jsx("button",{className:t.id===o?"swatch selected":"swatch",type:"button",title:t.label,"aria-label":t.label,onClick:()=>e(t.id),children:Se.jsx("span",{style:{background:t.swatch}})},t.id))})]})}function nx({settings:o,onSettingChange:e}){return Se.jsxs("aside",{className:"inspector","aria-label":"Scene inspector",children:[Se.jsx(ca,{icon:Zy,title:"Device",children:Se.jsx(ag,{label:"Finish",value:o.material,options:Wv,onChange:t=>e("material",t)})}),Se.jsxs(ca,{icon:Hv,title:"Camera",children:[Se.jsx(ag,{label:"Angle",value:o.angle,options:Gv,onChange:t=>e("angle",t)}),Se.jsx(Gl,{label:"Depth",value:o.depth,onChange:t=>e("depth",t)})]}),Se.jsxs(ca,{icon:ky,title:"Lighting",children:[Se.jsx(Gl,{label:"Reflection",value:o.reflection,onChange:t=>e("reflection",t)}),Se.jsx(Gl,{label:"Shadow",value:o.shadow,onChange:t=>e("shadow",t)}),Se.jsx(Gl,{label:"Key Light",value:o.lighting,onChange:t=>e("lighting",t)}),Se.jsx(ex,{label:"Auto Spin",icon:Yy,checked:o.autoSpin,onChange:t=>e("autoSpin",t)})]}),Se.jsx(ca,{icon:jy,title:"Background",children:Se.jsx(tx,{value:o.background,onChange:t=>e("background",t)})}),Se.jsx(ca,{icon:$y,title:"Render",children:Se.jsxs("div",{className:"render-stats",children:[Se.jsxs("span",{children:[Se.jsx(Wy,{size:15}),"WebGL"]}),Se.jsxs("span",{children:[Se.jsx(Hy,{size:15}),"PNG"]})]})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="171",ix=0,lg=1,rx=2,Xv=1,jv=2,er=3,sr=0,Yn=1,ui=2,Br=0,co=1,cg=2,ug=3,fg=4,sx=5,gs=100,ox=101,ax=102,lx=103,cx=104,ux=200,fx=201,hx=202,dx=203,ah=204,lh=205,px=206,mx=207,gx=208,vx=209,_x=210,yx=211,xx=212,Sx=213,Mx=214,ch=0,uh=1,fh=2,po=3,hh=4,dh=5,ph=6,mh=7,qv=0,Ex=1,Tx=2,zr=0,wx=1,Ax=2,Rx=3,Yv=4,Cx=5,bx=6,Px=7,hg="attached",Lx="detached",Kv=300,mo=301,go=302,gh=303,vh=304,Nc=306,vo=1e3,Di=1001,Rc=1002,kn=1003,$v=1004,ya=1005,yn=1006,xc=1007,nr=1008,or=1009,Zv=1010,Jv=1011,Aa=1012,sd=1013,_s=1014,wi=1015,Ia=1016,od=1017,ad=1018,_o=1020,Qv=35902,e_=1021,t_=1022,fi=1023,n_=1024,i_=1025,uo=1026,yo=1027,ld=1028,cd=1029,r_=1030,ud=1031,fd=1033,Sc=33776,Mc=33777,Ec=33778,Tc=33779,_h=35840,yh=35841,xh=35842,Sh=35843,Mh=36196,Eh=37492,Th=37496,wh=37808,Ah=37809,Rh=37810,Ch=37811,bh=37812,Ph=37813,Lh=37814,Nh=37815,Ih=37816,Dh=37817,Uh=37818,Fh=37819,Oh=37820,kh=37821,wc=36492,Bh=36494,zh=36495,s_=36283,Hh=36284,Vh=36285,Gh=36286,Ra=2300,Ca=2301,xf=2302,dg=2400,pg=2401,mg=2402,Nx=2500,Ix=0,o_=1,Wh=2,Dx=3200,Ux=3201,a_=0,Fx=1,Fr="",nn="srgb",zn="srgb-linear",Cc="linear",kt="srgb",Xs=7680,gg=519,Ox=512,kx=513,Bx=514,l_=515,zx=516,Hx=517,Vx=518,Gx=519,Xh=35044,vg="300 es",ir=2e3,bc=2001;class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _g=1234567;const Sa=Math.PI/180,xo=180/Math.PI;function hi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function xt(o,e,t){return Math.max(e,Math.min(t,o))}function hd(o,e){return(o%e+e)%e}function Wx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Xx(o,e,t){return o!==e?(t-o)/(e-o):0}function Ma(o,e,t){return(1-t)*o+t*e}function jx(o,e,t,i){return Ma(o,e,1-Math.exp(-t*i))}function qx(o,e=1){return e-Math.abs(hd(o,e*2)-e)}function Yx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Kx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function $x(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Zx(o,e){return o+Math.random()*(e-o)}function Jx(o){return o*(.5-Math.random())}function Qx(o){o!==void 0&&(_g=o);let e=_g+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function eS(o){return o*Sa}function tS(o){return o*xo}function nS(o){return(o&o-1)===0&&o!==0}function iS(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function rS(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function sS(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),h=c(t/2),d=a((e+i)/2),p=c((e+i)/2),g=a((e-i)/2),v=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*p,h*g,h*v,u*d);break;case"YZY":o.set(h*v,u*p,h*g,u*d);break;case"ZXZ":o.set(h*g,h*v,u*p,u*d);break;case"XZX":o.set(u*p,h*M,h*y,u*d);break;case"YXY":o.set(h*y,u*p,h*M,u*d);break;case"ZYZ":o.set(h*M,h*y,u*p,u*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ut(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const c_={DEG2RAD:Sa,RAD2DEG:xo,generateUUID:hi,clamp:xt,euclideanModulo:hd,mapLinear:Wx,inverseLerp:Xx,lerp:Ma,damp:jx,pingpong:qx,smoothstep:Yx,smootherstep:Kx,randInt:$x,randFloat:Zx,randFloatSpread:Jx,seededRandom:Qx,degToRad:eS,radToDeg:tS,isPowerOfTwo:nS,ceilPowerOfTwo:iS,floorPowerOfTwo:rS,setQuaternionFromProperEuler:sS,normalize:Ut,denormalize:Ei};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,i,s,a,c,u,h,d){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,d)}set(e,t,i,s,a,c,u,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=h,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],p=i[4],g=i[7],v=i[2],y=i[5],M=i[8],E=s[0],S=s[3],x=s[6],N=s[1],P=s[4],w=s[7],z=s[2],O=s[5],I=s[8];return a[0]=c*E+u*N+h*z,a[3]=c*S+u*P+h*O,a[6]=c*x+u*w+h*I,a[1]=d*E+p*N+g*z,a[4]=d*S+p*P+g*O,a[7]=d*x+p*w+g*I,a[2]=v*E+y*N+M*z,a[5]=v*S+y*P+M*O,a[8]=v*x+y*w+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-i*a*p+i*u*h+s*a*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=p*c-u*d,v=u*h-p*a,y=d*a-c*h,M=t*g+i*v+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*d-p*i)*E,e[2]=(u*i-s*c)*E,e[3]=v*E,e[4]=(p*t-s*h)*E,e[5]=(s*a-u*t)*E,e[6]=y*E,e[7]=(i*h-d*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-s*d,s*h,-s*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Sf.makeScale(e,t)),this}rotate(e){return this.premultiply(Sf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sf=new gt;function u_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ba(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oS(){const o=ba("canvas");return o.style.display="block",o}const yg={};function oo(o){o in yg||(yg[o]=!0,console.warn(o))}function aS(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function lS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uS(){const o={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(s.r=fo(s.r),s.g=fo(s.g),s.b=fo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fr?Cc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[zn]:{primaries:e,whitePoint:i,transfer:Cc,toXYZ:xg,fromXYZ:Sg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:xg,fromXYZ:Sg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),o}const Rt=uS();function rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let js;class fS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{js===void 0&&(js=ba("canvas")),js.width=e.width,js.height=e.height;const i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=rr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hS=0;class f_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Mf(s[c].image)):a.push(Mf(s[c]))}else a=Mf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Mf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dS=0;class rn extends wo{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=Di,s=Di,a=yn,c=nr,u=fi,h=or,d=rn.DEFAULT_ANISOTROPY,p=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=hi(),this.name="",this.source=new f_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Kv;rn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,d=h[0],p=h[4],g=h[8],v=h[1],y=h[5],M=h[9],E=h[2],S=h[6],x=h[10];if(Math.abs(p-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,w=(y+1)/2,z=(x+1)/2,O=(p+v)/4,I=(g+E)/4,F=(M+S)/4;return P>w&&P>z?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=O/i,a=I/i):w>z?w<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(w),i=O/s,a=F/s):z<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(z),i=I/a,s=F/a),this.set(i,s,a,t),this}let N=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(v-p)*(v-p));return Math.abs(N)<.001&&(N=1),this.x=(S-M)/N,this.y=(g-E)/N,this.z=(v-p)/N,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends wo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new f_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends pS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class h_ extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let h=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3];const v=a[c+0],y=a[c+1],M=a[c+2],E=a[c+3];if(u===0){e[t+0]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||h!==v||d!==y||p!==M){let S=1-u;const x=h*v+d*y+p*M+g*E,N=x>=0?1:-1,P=1-x*x;if(P>Number.EPSILON){const z=Math.sqrt(P),O=Math.atan2(z,x*N);S=Math.sin(S*O)/z,u=Math.sin(u*O)/z}const w=u*N;if(h=h*S+v*w,d=d*S+y*w,p=p*S+M*w,g=g*S+E*w,S===1-u){const z=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=z,d*=z,p*=z,g*=z}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],h=i[s+1],d=i[s+2],p=i[s+3],g=a[c],v=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+p*g+h*y-d*v,e[t+1]=h*M+p*v+d*g-u*y,e[t+2]=d*M+p*y+u*v-h*g,e[t+3]=p*M-u*g-h*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),p=u(s/2),g=u(a/2),v=h(i/2),y=h(s/2),M=h(a/2);switch(c){case"XYZ":this._x=v*p*g+d*y*M,this._y=d*y*g-v*p*M,this._z=d*p*M+v*y*g,this._w=d*p*g-v*y*M;break;case"YXZ":this._x=v*p*g+d*y*M,this._y=d*y*g-v*p*M,this._z=d*p*M-v*y*g,this._w=d*p*g+v*y*M;break;case"ZXY":this._x=v*p*g-d*y*M,this._y=d*y*g+v*p*M,this._z=d*p*M+v*y*g,this._w=d*p*g-v*y*M;break;case"ZYX":this._x=v*p*g-d*y*M,this._y=d*y*g+v*p*M,this._z=d*p*M-v*y*g,this._w=d*p*g+v*y*M;break;case"YZX":this._x=v*p*g+d*y*M,this._y=d*y*g+v*p*M,this._z=d*p*M-v*y*g,this._w=d*p*g-v*y*M;break;case"XZY":this._x=v*p*g-d*y*M,this._y=d*y*g-v*p*M,this._z=d*p*M+v*y*g,this._w=d*p*g+v*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10],v=i+u+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-h)*y,this._y=(a-d)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+d)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(a+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+c*u+s*d-a*h,this._y=s*p+c*h+a*u-i*d,this._z=a*p+c*d+i*h-s*u,this._w=c*p-i*u-s*h-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,u),g=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=s*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*s-u*i),p=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+h*d+c*g-u*p,this.y=i+h*p+u*d-a*g,this.z=s+h*g+a*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(xt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-a*u,this.y=a*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ef.copy(this).projectOnVector(e),this.sub(Ef)}reflect(e){return this.sub(Ef.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ef=new G,Mg=new Gr;class ar{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,xi):xi.fromBufferAttribute(a,c),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Xl.subVectors(this.max,ua),qs.subVectors(e.a,ua),Ys.subVectors(e.b,ua),Ks.subVectors(e.c,ua),br.subVectors(Ys,qs),Pr.subVectors(Ks,Ys),os.subVectors(qs,Ks);let t=[0,-br.z,br.y,0,-Pr.z,Pr.y,0,-os.z,os.y,br.z,0,-br.x,Pr.z,0,-Pr.x,os.z,0,-os.x,-br.y,br.x,0,-Pr.y,Pr.x,0,-os.y,os.x,0];return!Tf(t,qs,Ys,Ks,Xl)||(t=[1,0,0,0,1,0,0,0,1],!Tf(t,qs,Ys,Ks,Xl))?!1:(jl.crossVectors(br,Pr),t=[jl.x,jl.y,jl.z],Tf(t,qs,Ys,Ks,Xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new G,new G,new G,new G,new G,new G,new G,new G],xi=new G,Wl=new ar,qs=new G,Ys=new G,Ks=new G,br=new G,Pr=new G,os=new G,ua=new G,Xl=new G,jl=new G,as=new G;function Tf(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){as.fromArray(o,a);const u=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),h=e.dot(as),d=t.dot(as),p=i.dot(as);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const gS=new ar,fa=new G,wf=new G;class Ui{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gS.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(wf)),this.expandByPoint(fa.copy(e.center).sub(wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new G,Af=new G,ql=new G,Lr=new G,Rf=new G,Yl=new G,Cf=new G;class Ic{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Af.copy(e).add(t).multiplyScalar(.5),ql.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Af);const a=e.distanceTo(t)*.5,c=-this.direction.dot(ql),u=Lr.dot(this.direction),h=-Lr.dot(ql),d=Lr.lengthSq(),p=Math.abs(1-c*c);let g,v,y,M;if(p>0)if(g=c*h-u,v=c*u-h,M=a*p,g>=0)if(v>=-M)if(v<=M){const E=1/p;g*=E,v*=E,y=g*(g+c*v+2*u)+v*(c*g+v+2*h)+d}else v=a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*h)+d;else v=-a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*h)+d;else v<=-M?(g=Math.max(0,-(-c*a+u)),v=g>0?-a:Math.min(Math.max(-a,-h),a),y=-g*g+v*(v+2*h)+d):v<=M?(g=0,v=Math.min(Math.max(-a,-h),a),y=v*(v+2*h)+d):(g=Math.max(0,-(c*a+u)),v=g>0?a:Math.min(Math.max(-a,-h),a),y=-g*g+v*(v+2*h)+d);else v=c>0?-a:a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Af).addScaledVector(ql,v),y}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),s=Ki.dot(Ki)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,s=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,s=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,s,a){Rf.subVectors(t,e),Yl.subVectors(i,e),Cf.crossVectors(Rf,Yl);let c=this.direction.dot(Cf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const h=u*this.direction.dot(Yl.crossVectors(Lr,Yl));if(h<0)return null;const d=u*this.direction.dot(Rf.cross(Lr));if(d<0||h+d>c)return null;const p=-u*Lr.dot(Cf);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,s,a,c,u,h,d,p,g,v,y,M,E,S){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,h,d,p,g,v,y,M,E,S)}set(e,t,i,s,a,c,u,h,d,p,g,v,y,M,E,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=h,x[2]=d,x[6]=p,x[10]=g,x[14]=v,x[3]=y,x[7]=M,x[11]=E,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),a=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=c*p,y=c*g,M=u*p,E=u*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=y+M*d,t[5]=v-E*d,t[9]=-u*h,t[2]=E-v*d,t[6]=M+y*d,t[10]=c*h}else if(e.order==="YXZ"){const v=h*p,y=h*g,M=d*p,E=d*g;t[0]=v+E*u,t[4]=M*u-y,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-M,t[6]=E+v*u,t[10]=c*h}else if(e.order==="ZXY"){const v=h*p,y=h*g,M=d*p,E=d*g;t[0]=v-E*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*p,t[9]=E-v*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const v=c*p,y=c*g,M=u*p,E=u*g;t[0]=h*p,t[4]=M*d-y,t[8]=v*d+E,t[1]=h*g,t[5]=E*d+v,t[9]=y*d-M,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,y=c*d,M=u*h,E=u*d;t[0]=h*p,t[4]=E-v*g,t[8]=M*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=y*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=c*h,y=c*d,M=u*h,E=u*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=v*g+E,t[5]=c*p,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*p,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,_S)}lookAt(e,t,i){const s=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Nr.crossVectors(i,Qn),Nr.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Nr.crossVectors(i,Qn)),Nr.normalize(),Kl.crossVectors(Qn,Nr),s[0]=Nr.x,s[4]=Kl.x,s[8]=Qn.x,s[1]=Nr.y,s[5]=Kl.y,s[9]=Qn.y,s[2]=Nr.z,s[6]=Kl.z,s[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],p=i[1],g=i[5],v=i[9],y=i[13],M=i[2],E=i[6],S=i[10],x=i[14],N=i[3],P=i[7],w=i[11],z=i[15],O=s[0],I=s[4],F=s[8],C=s[12],R=s[1],k=s[5],Q=s[9],Y=s[13],te=s[2],ae=s[6],ee=s[10],le=s[14],H=s[3],ue=s[7],oe=s[11],B=s[15];return a[0]=c*O+u*R+h*te+d*H,a[4]=c*I+u*k+h*ae+d*ue,a[8]=c*F+u*Q+h*ee+d*oe,a[12]=c*C+u*Y+h*le+d*B,a[1]=p*O+g*R+v*te+y*H,a[5]=p*I+g*k+v*ae+y*ue,a[9]=p*F+g*Q+v*ee+y*oe,a[13]=p*C+g*Y+v*le+y*B,a[2]=M*O+E*R+S*te+x*H,a[6]=M*I+E*k+S*ae+x*ue,a[10]=M*F+E*Q+S*ee+x*oe,a[14]=M*C+E*Y+S*le+x*B,a[3]=N*O+P*R+w*te+z*H,a[7]=N*I+P*k+w*ae+z*ue,a[11]=N*F+P*Q+w*ee+z*oe,a[15]=N*C+P*Y+w*le+z*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],h=e[9],d=e[13],p=e[2],g=e[6],v=e[10],y=e[14],M=e[3],E=e[7],S=e[11],x=e[15];return M*(+a*h*g-s*d*g-a*u*v+i*d*v+s*u*y-i*h*y)+E*(+t*h*y-t*d*v+a*c*v-s*c*y+s*d*p-a*h*p)+S*(+t*d*g-t*u*y-a*c*g+i*c*y+a*u*p-i*d*p)+x*(-s*u*p-t*h*g+t*u*v+s*c*g-i*c*v+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=e[9],v=e[10],y=e[11],M=e[12],E=e[13],S=e[14],x=e[15],N=g*S*d-E*v*d+E*h*y-u*S*y-g*h*x+u*v*x,P=M*v*d-p*S*d-M*h*y+c*S*y+p*h*x-c*v*x,w=p*E*d-M*g*d+M*u*y-c*E*y-p*u*x+c*g*x,z=M*g*h-p*E*h-M*u*v+c*E*v+p*u*S-c*g*S,O=t*N+i*P+s*w+a*z;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=N*I,e[1]=(E*v*a-g*S*a-E*s*y+i*S*y+g*s*x-i*v*x)*I,e[2]=(u*S*a-E*h*a+E*s*d-i*S*d-u*s*x+i*h*x)*I,e[3]=(g*h*a-u*v*a-g*s*d+i*v*d+u*s*y-i*h*y)*I,e[4]=P*I,e[5]=(p*S*a-M*v*a+M*s*y-t*S*y-p*s*x+t*v*x)*I,e[6]=(M*h*a-c*S*a-M*s*d+t*S*d+c*s*x-t*h*x)*I,e[7]=(c*v*a-p*h*a+p*s*d-t*v*d-c*s*y+t*h*y)*I,e[8]=w*I,e[9]=(M*g*a-p*E*a-M*i*y+t*E*y+p*i*x-t*g*x)*I,e[10]=(c*E*a-M*u*a+M*i*d-t*E*d-c*i*x+t*u*x)*I,e[11]=(p*u*a-c*g*a-p*i*d+t*g*d+c*i*y-t*u*y)*I,e[12]=z*I,e[13]=(p*E*s-M*g*s+M*i*v-t*E*v-p*i*S+t*g*S)*I,e[14]=(M*u*s-c*E*s-M*i*h+t*E*h+c*i*S-t*u*S)*I,e[15]=(c*g*s-p*u*s+p*i*h-t*g*h-c*i*v+t*u*v)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,h=e.z,d=a*c,p=a*u;return this.set(d*c+i,d*u-s*h,d*h+s*u,0,d*u+s*h,p*u+i,p*h-s*c,0,d*h-s*u,p*h+s*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,d=a+a,p=c+c,g=u+u,v=a*d,y=a*p,M=a*g,E=c*p,S=c*g,x=u*g,N=h*d,P=h*p,w=h*g,z=i.x,O=i.y,I=i.z;return s[0]=(1-(E+x))*z,s[1]=(y+w)*z,s[2]=(M-P)*z,s[3]=0,s[4]=(y-w)*O,s[5]=(1-(v+x))*O,s[6]=(S+N)*O,s[7]=0,s[8]=(M+P)*I,s[9]=(S-N)*I,s[10]=(1-(v+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=$s.set(s[0],s[1],s[2]).length();const c=$s.set(s[4],s[5],s[6]).length(),u=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Si.copy(this);const d=1/a,p=1/c,g=1/u;return Si.elements[0]*=d,Si.elements[1]*=d,Si.elements[2]*=d,Si.elements[4]*=p,Si.elements[5]*=p,Si.elements[6]*=p,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,t.setFromRotationMatrix(Si),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=ir){const h=this.elements,d=2*a/(t-e),p=2*a/(i-s),g=(t+e)/(t-e),v=(i+s)/(i-s);let y,M;if(u===ir)y=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===bc)y=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=ir){const h=this.elements,d=1/(t-e),p=1/(i-s),g=1/(c-a),v=(t+e)*d,y=(i+s)*p;let M,E;if(u===ir)M=(c+a)*g,E=-2*g;else if(u===bc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new G,Si=new mt,vS=new G(0,0,0),_S=new G(1,1,1),Nr=new G,Kl=new G,Qn=new G,Eg=new mt,Tg=new Gr;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],h=s[1],d=s[5],p=s[9],g=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(xt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tg.setFromEuler(this),this.setFromQuaternion(Tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class d_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yS=0;const wg=new G,Zs=new Gr,$i=new mt,$l=new G,ha=new G,xS=new G,SS=new Gr,Ag=new G(1,0,0),Rg=new G(0,1,0),Cg=new G(0,0,1),bg={type:"added"},MS={type:"removed"},Js={type:"childadded",child:null},bf={type:"childremoved",child:null};class jt extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new G,t=new On,i=new Gr,s=new G(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new gt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(Rg,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,t){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(Rg,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$l.copy(e):$l.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(ha,$l,this.up):$i.lookAt($l,ha,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix($i),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bg),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(MS),bf.child=e,this.dispatchEvent(bf),bf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bg),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(e.materials,this.material[h]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),v=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}jt.DEFAULT_UP=new G(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new G,Zi=new G,Pf=new G,Ji=new G,Qs=new G,eo=new G,Pg=new G,Lf=new G,Nf=new G,If=new G,Df=new It,Uf=new It,Ff=new It;class Ti{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Mi.subVectors(s,t),Zi.subVectors(i,t),Pf.subVectors(e,t);const c=Mi.dot(Mi),u=Mi.dot(Zi),h=Mi.dot(Pf),d=Zi.dot(Zi),p=Zi.dot(Pf),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const v=1/g,y=(d*h-u*p)*v,M=(c*p-u*h)*v;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,s,a,c,u,h){return this.getBarycoord(e,t,i,s,Ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Ji.x),h.addScaledVector(c,Ji.y),h.addScaledVector(u,Ji.z),h)}static getInterpolatedAttribute(e,t,i,s,a,c){return Df.setScalar(0),Uf.setScalar(0),Ff.setScalar(0),Df.fromBufferAttribute(e,t),Uf.fromBufferAttribute(e,i),Ff.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Df,a.x),c.addScaledVector(Uf,a.y),c.addScaledVector(Ff,a.z),c}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),Zi.subVectors(e,t),Mi.cross(Zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Mi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ti.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Qs.subVectors(s,i),eo.subVectors(a,i),Lf.subVectors(e,i);const h=Qs.dot(Lf),d=eo.dot(Lf);if(h<=0&&d<=0)return t.copy(i);Nf.subVectors(e,s);const p=Qs.dot(Nf),g=eo.dot(Nf);if(p>=0&&g<=p)return t.copy(s);const v=h*g-p*d;if(v<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(Qs,c);If.subVectors(e,a);const y=Qs.dot(If),M=eo.dot(If);if(M>=0&&y<=M)return t.copy(a);const E=y*d-h*M;if(E<=0&&d>=0&&M<=0)return u=d/(d-M),t.copy(i).addScaledVector(eo,u);const S=p*M-y*g;if(S<=0&&g-p>=0&&y-M>=0)return Pg.subVectors(a,s),u=(g-p)/(g-p+(y-M)),t.copy(s).addScaledVector(Pg,u);const x=1/(S+E+v);return c=E*x,u=v*x,t.copy(i).addScaledVector(Qs,c).addScaledVector(eo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Of(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=hd(e,1),t=xt(t,0,1),i=xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Of(c,a,e+1/3),this.g=Of(c,a,e),this.b=Of(c,a,e-1/3)}return Rt.toWorkingColorSpace(this,s),this}setStyle(e,t=nn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=p_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Rt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(xt(Rn.r*255,0,255))*65536+Math.round(xt(Rn.g*255,0,255))*256+Math.round(xt(Rn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,a=Rn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let h,d;const p=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-a)/g+(s<a?6:0);break;case s:h=(a-i)/g+2;break;case a:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=nn){Rt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,i=Rn.g,s=Rn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Zl);const i=Ma(Ir.h,Zl.h,t),s=Ma(Ir.s,Zl.s,t),a=Ma(Ir.l,Zl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ut;ut.NAMES=p_;let ES=0;class Ri extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=co,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=lh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ai extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new G,Jl=new Le;class Bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xh,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jl.fromBufferAttribute(this,t),Jl.applyMatrix3(e),this.setXY(t,Jl.x,Jl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xh&&(e.usage=this.usage),e}}class m_ extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class g_ extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let TS=0;const li=new mt,kf=new jt,to=new G,ei=new ar,da=new ar,pn=new G;class ti extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u_(e)?g_:m_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new gt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,i){return li.makeTranslation(e,t,i),this.applyMatrix4(li),this}scale(e,t,i){return li.makeScale(e,t,i),this.applyMatrix4(li),this}lookAt(e){return kf.lookAt(e),kf.updateMatrix(),this.applyMatrix4(kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];da.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(ei.min,da.min),ei.expandByPoint(pn),pn.addVectors(ei.max,da.max),ei.expandByPoint(pn)):(ei.expandByPoint(da.min),ei.expandByPoint(da.max))}ei.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)pn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(pn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)pn.fromBufferAttribute(u,d),h&&(to.fromBufferAttribute(e,d),pn.add(to)),s=Math.max(s,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let F=0;F<i.count;F++)u[F]=new G,h[F]=new G;const d=new G,p=new G,g=new G,v=new Le,y=new Le,M=new Le,E=new G,S=new G;function x(F,C,R){d.fromBufferAttribute(i,F),p.fromBufferAttribute(i,C),g.fromBufferAttribute(i,R),v.fromBufferAttribute(a,F),y.fromBufferAttribute(a,C),M.fromBufferAttribute(a,R),p.sub(d),g.sub(d),y.sub(v),M.sub(v);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(k),S.copy(g).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(k),u[F].add(E),u[C].add(E),u[R].add(E),h[F].add(S),h[C].add(S),h[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let F=0,C=N.length;F<C;++F){const R=N[F],k=R.start,Q=R.count;for(let Y=k,te=k+Q;Y<te;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new G,w=new G,z=new G,O=new G;function I(F){z.fromBufferAttribute(s,F),O.copy(z);const C=u[F];P.copy(C),P.sub(z.multiplyScalar(z.dot(C))).normalize(),w.crossVectors(O,C);const k=w.dot(h[F])<0?-1:1;c.setXYZW(F,P.x,P.y,P.z,k)}for(let F=0,C=N.length;F<C;++F){const R=N[F],k=R.start,Q=R.count;for(let Y=k,te=k+Q;Y<te;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const s=new G,a=new G,c=new G,u=new G,h=new G,d=new G,p=new G,g=new G;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),E=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),u.add(p),h.add(p),d.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),g.subVectors(s,a),p.cross(g),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(u,h){const d=u.array,p=u.itemSize,g=u.normalized,v=new d.constructor(h.length*p);let y=0,M=0;for(let E=0,S=h.length;E<S;E++){u.isInterleavedBufferAttribute?y=h[E]*u.data.stride+u.offset:y=h[E]*p;for(let x=0;x<p;x++)v[M++]=d[y++]}return new Bn(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],d=e(h,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let p=0,g=d.length;p<g;p++){const v=d[p],y=e(v,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],g=a[d];for(let v=0,y=g.length;v<y;v++)p.push(g[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lg=new mt,ls=new Ic,Ql=new Ui,Ng=new G,ec=new G,tc=new G,nc=new G,Bf=new G,ic=new G,Ig=new G,rc=new G;class Gt extends jt{constructor(e=new ti,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){ic.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const p=u[h],g=a[h];p!==0&&(Bf.fromBufferAttribute(g,e),c?ic.addScaledVector(Bf,p):ic.addScaledVector(Bf.sub(t),p))}t.add(ic)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(a),ls.copy(e.ray).recast(e.near),!(Ql.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Ql,Ng)===null||ls.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Lg.copy(a).invert(),ls.copy(e.ray).applyMatrix4(Lg),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,v=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],N=Math.max(S.start,y.start),P=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let w=N,z=P;w<z;w+=3){const O=u.getX(w),I=u.getX(w+1),F=u.getX(w+2);s=sc(this,x,e,i,d,p,g,O,I,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(u.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const N=u.getX(S),P=u.getX(S+1),w=u.getX(S+2);s=sc(this,c,e,i,d,p,g,N,P,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const S=v[M],x=c[S.materialIndex],N=Math.max(S.start,y.start),P=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let w=N,z=P;w<z;w+=3){const O=w,I=w+1,F=w+2;s=sc(this,x,e,i,d,p,g,O,I,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let S=M,x=E;S<x;S+=3){const N=S,P=S+1,w=S+2;s=sc(this,c,e,i,d,p,g,N,P,w),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function wS(o,e,t,i,s,a,c,u){let h;if(e.side===Yn?h=i.intersectTriangle(c,a,s,!0,u):h=i.intersectTriangle(s,a,c,e.side===sr,u),h===null)return null;rc.copy(u),rc.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(rc);return d<t.near||d>t.far?null:{distance:d,point:rc.clone(),object:o}}function sc(o,e,t,i,s,a,c,u,h,d){o.getVertexPosition(u,ec),o.getVertexPosition(h,tc),o.getVertexPosition(d,nc);const p=wS(o,e,t,i,ec,tc,nc,Ig);if(p){const g=new G;Ti.getBarycoord(Ig,ec,tc,nc,g),s&&(p.uv=Ti.getInterpolatedAttribute(s,u,h,d,g,new Le)),a&&(p.uv1=Ti.getInterpolatedAttribute(a,u,h,d,g,new Le)),c&&(p.normal=Ti.getInterpolatedAttribute(c,u,h,d,g,new G),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:h,c:d,normal:new G,materialIndex:0};Ti.getNormal(ec,tc,nc,v.normal),p.face=v,p.barycoord=g}return p}class Ao extends ti{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],p=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(g,2));function M(E,S,x,N,P,w,z,O,I,F,C){const R=w/I,k=z/F,Q=w/2,Y=z/2,te=O/2,ae=I+1,ee=F+1;let le=0,H=0;const ue=new G;for(let oe=0;oe<ee;oe++){const B=oe*k-Y;for(let ne=0;ne<ae;ne++){const Oe=ne*R-Q;ue[E]=Oe*N,ue[S]=B*P,ue[x]=te,d.push(ue.x,ue.y,ue.z),ue[E]=0,ue[S]=0,ue[x]=O>0?1:-1,p.push(ue.x,ue.y,ue.z),g.push(ne/I),g.push(1-oe/F),le+=1}}for(let oe=0;oe<F;oe++)for(let B=0;B<I;B++){const ne=v+B+ae*oe,Oe=v+B+ae*(oe+1),J=v+(B+1)+ae*(oe+1),fe=v+(B+1)+ae*oe;h.push(ne,Oe,fe),h.push(Oe,J,fe),H+=6}u.addGroup(y,H,C),y+=H,v+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Un(o){const e={};for(let t=0;t<o.length;t++){const i=So(o[t]);for(const s in i)e[s]=i[s]}return e}function AS(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function v_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const RS={clone:So,merge:Un};var CS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vr extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CS,this.fragmentShader=bS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=AS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class __ extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new G,Dg=new Le,Ug=new Le;class Fn extends __{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Dg,Ug),t.subVectors(Ug,Dg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const no=-90,io=1;class PS extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(no,io,e,t);s.layers=this.layers,this.add(s);const a=new Fn(no,io,e,t);a.layers=this.layers,this.add(a);const c=new Fn(no,io,e,t);c.layers=this.layers,this.add(c);const u=new Fn(no,io,e,t);u.layers=this.layers,this.add(u);const h=new Fn(no,io,e,t);h.layers=this.layers,this.add(h);const d=new Fn(no,io,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,h]=t;for(const d of t)this.remove(d);if(e===ir)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,d,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,h),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(g,v,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class y_ extends rn{constructor(e,t,i,s,a,c,u,h,d,p){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,i,s,a,c,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new y_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ao(5,5,5),a=new Vr({name:"CubemapFromEquirect",uniforms:So(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:Br});a.uniforms.tEquirect.value=t;const c=new Gt(s,a),u=t.minFilter;return t.minFilter===nr&&(t.minFilter=yn),new PS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class NS extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class IS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xh,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new G;class dd{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),s=Ut(s,this.array),a=Ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fg=new G,Og=new It,kg=new It,DS=new G,Bg=new mt,oc=new G,zf=new Ui,zg=new mt,Hf=new Ic;class US extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hg,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ar),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,oc),this.boundingBox.expandByPoint(oc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,oc),this.boundingSphere.expandByPoint(oc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zf.copy(this.boundingSphere),zf.applyMatrix4(s),e.ray.intersectsSphere(zf)!==!1&&(zg.copy(s).invert(),Hf.copy(e.ray).applyMatrix4(zg),!(this.boundingBox!==null&&Hf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new It,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lx?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Og.fromBufferAttribute(s.attributes.skinIndex,e),kg.fromBufferAttribute(s.attributes.skinWeight,e),Fg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=kg.getComponent(a);if(c!==0){const u=Og.getComponent(a);Bg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(DS.copy(Fg).applyMatrix4(Bg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class x_ extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class S_ extends rn{constructor(e=null,t=1,i=1,s,a,c,u,h,d=kn,p=kn,g,v){super(null,c,u,h,d,p,s,a,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hg=new mt,FS=new mt;class pd{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:FS;Hg.multiplyMatrices(u,t[a]),Hg.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new pd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new S_(t,e,e,fi,wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new x_),this.bones.push(c),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class jh extends Bn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ro=new mt,Vg=new mt,ac=[],Gg=new ar,OS=new mt,pa=new Gt,ma=new Ui;class kS extends Gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,OS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),Gg.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(Gg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ro),ma.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,ro),Vg.multiplyMatrices(i,ro),pa.matrixWorld=Vg,pa.raycast(e,ac);for(let c=0,u=ac.length;c<u;c++){const h=ac[c];h.instanceId=a,h.object=this,t.push(h)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new S_(new Float32Array(s*this.count),s,this.count,ld,wi));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;a[h]=u,a.set(i,h+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Vf=new G,BS=new G,zS=new gt;class ps{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vf.subVectors(i,t).cross(BS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zS.getNormalMatrix(e),s=this.coplanarPoint(Vf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Ui,lc=new G;class md{constructor(e=new ps,t=new ps,i=new ps,s=new ps,a=new ps,c=new ps){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ir){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],h=s[3],d=s[4],p=s[5],g=s[6],v=s[7],y=s[8],M=s[9],E=s[10],S=s[11],x=s[12],N=s[13],P=s[14],w=s[15];if(i[0].setComponents(h-a,v-d,S-y,w-x).normalize(),i[1].setComponents(h+a,v+d,S+y,w+x).normalize(),i[2].setComponents(h+c,v+p,S+M,w+N).normalize(),i[3].setComponents(h-c,v-p,S-M,w-N).normalize(),i[4].setComponents(h-u,v-g,S-E,w-P).normalize(),t===ir)i[5].setComponents(h+u,v+g,S+E,w+P).normalize();else if(t===bc)i[5].setComponents(u,g,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lc.x=s.normal.x>0?e.max.x:e.min.x,lc.y=s.normal.y>0?e.max.y:e.min.y,lc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M_ extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pc=new G,Lc=new G,Wg=new mt,ga=new Ic,cc=new Ui,Gf=new G,Xg=new G;class gd extends jt{constructor(e=new ti,t=new M_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Pc.fromBufferAttribute(t,s-1),Lc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Pc.distanceTo(Lc);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(s),cc.radius+=a,e.ray.intersectsSphere(cc)===!1)return;Wg.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Wg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=this.isLineSegments?2:1,p=i.index,v=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=d){const x=p.getX(E),N=p.getX(E+1),P=uc(this,e,ga,h,x,N);P&&t.push(P)}if(this.isLineLoop){const E=p.getX(M-1),S=p.getX(y),x=uc(this,e,ga,h,E,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=y,S=M-1;E<S;E+=d){const x=uc(this,e,ga,h,E,E+1);x&&t.push(x)}if(this.isLineLoop){const E=uc(this,e,ga,h,M-1,y);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function uc(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(Pc.fromBufferAttribute(c,s),Lc.fromBufferAttribute(c,a),t.distanceSqToSegment(Pc,Lc,Gf,Xg)>i)return;Gf.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Gf);if(!(h<e.near||h>e.far))return{distance:h,point:Xg.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const jg=new G,qg=new G;class HS extends gd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)jg.fromBufferAttribute(t,s),qg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+jg.distanceTo(qg);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VS extends gd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class E_ extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yg=new mt,qh=new Ic,fc=new Ui,hc=new G;class GS extends jt{constructor(e=new ti,t=new E_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),fc.radius+=a,e.ray.intersectsSphere(fc)===!1)return;Yg.copy(s).invert(),qh.copy(e.ray).applyMatrix4(Yg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=i.index,g=i.attributes.position;if(d!==null){const v=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let M=v,E=y;M<E;M++){const S=d.getX(M);hc.fromBufferAttribute(g,S),Kg(hc,S,h,s,e,t,this)}}else{const v=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=v,E=y;M<E;M++)hc.fromBufferAttribute(g,M),Kg(hc,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Kg(o,e,t,i,s,a,c){const u=qh.distanceSqToPoint(o);if(u<t){const h=new G;qh.closestPointToPoint(o,h),h.applyMatrix4(i);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Or extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class WS extends rn{constructor(e,t,i,s,a,c,u,h,d){super(e,t,i,s,a,c,u,h,d),this.isVideoTexture=!0,this.minFilter=c!==void 0?c:yn,this.magFilter=a!==void 0?a:yn,this.generateMipmaps=!1;const p=this;function g(){p.needsUpdate=!0,e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(g)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class XS extends rn{constructor(e,t,i,s,a,c,u,h,d){super(e,t,i,s,a,c,u,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class T_ extends rn{constructor(e,t,i,s,a,c,u,h,d,p=uo){if(p!==uo&&p!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===uo&&(i=_s),i===void 0&&p===yo&&(i=_o),super(null,s,a,c,u,h,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:kn,this.minFilter=h!==void 0?h:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,h=a-1,d;for(;u<=h;)if(s=Math.floor(u+(h-u)/2),d=i[s]-c,d<0)u=s+1;else if(d>0)h=s-1;else{h=s;break}if(s=h,i[s]===c)return s/(a-1);const p=i[s],v=i[s+1]-p,y=(c-p)/v;return(s+y)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),u=this.getPoint(a),h=t||(c.isVector2?new Le:new G);return h.copy(u).sub(c).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new G,s=[],a=[],c=[],u=new G,h=new mt;for(let y=0;y<=e;y++){const M=y/e;s[y]=this.getTangentAt(M,new G)}a[0]=new G,c[0]=new G;let d=Number.MAX_VALUE;const p=Math.abs(s[0].x),g=Math.abs(s[0].y),v=Math.abs(s[0].z);p<=d&&(d=p,i.set(1,0,0)),g<=d&&(d=g,i.set(0,1,0)),v<=d&&i.set(0,0,1),u.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],u),c[0].crossVectors(s[0],a[0]);for(let y=1;y<=e;y++){if(a[y]=a[y-1].clone(),c[y]=c[y-1].clone(),u.crossVectors(s[y-1],s[y]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(xt(s[y-1].dot(s[y]),-1,1));a[y].applyMatrix4(h.makeRotationAxis(u,M))}c[y].crossVectors(s[y],a[y])}if(t===!0){let y=Math.acos(xt(a[0].dot(a[e]),-1,1));y/=e,s[0].dot(u.crossVectors(a[0],a[e]))>0&&(y=-y);for(let M=1;M<=e;M++)a[M].applyMatrix4(h.makeRotationAxis(s[M],y*M)),c[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vd extends Fi{constructor(e=0,t=0,i=1,s=1,a=0,c=Math.PI*2,u=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=h}getPoint(e,t=new Le){const i=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const u=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(u),d=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=h-this.aX,y=d-this.aY;h=v*p-y*g+this.aX,d=v*g+y*p+this.aY}return i.set(h,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jS extends vd{constructor(e,t,i,s,a,c){super(e,t,i,i,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function _d(){let o=0,e=0,t=0,i=0;function s(a,c,u,h){o=a,e=u,t=-3*a+3*c-2*u-h,i=2*a-2*c+u+h}return{initCatmullRom:function(a,c,u,h,d){s(c,u,d*(u-a),d*(h-c))},initNonuniformCatmullRom:function(a,c,u,h,d,p,g){let v=(c-a)/d-(u-a)/(d+p)+(u-c)/p,y=(u-c)/p-(h-c)/(p+g)+(h-u)/g;v*=p,y*=p,s(c,u,v,y)},calc:function(a){const c=a*a,u=c*a;return o+e*a+t*c+i*u}}}const dc=new G,Wf=new _d,Xf=new _d,jf=new _d;class qS extends Fi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new G){const i=t,s=this.points,a=s.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),h=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:h===0&&u===a-1&&(u=a-2,h=1);let d,p;this.closed||u>0?d=s[(u-1)%a]:(dc.subVectors(s[0],s[1]).add(s[0]),d=dc);const g=s[u%a],v=s[(u+1)%a];if(this.closed||u+2<a?p=s[(u+2)%a]:(dc.subVectors(s[a-1],s[a-2]).add(s[a-1]),p=dc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(g),y),E=Math.pow(g.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(p),y);E<1e-4&&(E=1),M<1e-4&&(M=E),S<1e-4&&(S=E),Wf.initNonuniformCatmullRom(d.x,g.x,v.x,p.x,M,E,S),Xf.initNonuniformCatmullRom(d.y,g.y,v.y,p.y,M,E,S),jf.initNonuniformCatmullRom(d.z,g.z,v.z,p.z,M,E,S)}else this.curveType==="catmullrom"&&(Wf.initCatmullRom(d.x,g.x,v.x,p.x,this.tension),Xf.initCatmullRom(d.y,g.y,v.y,p.y,this.tension),jf.initCatmullRom(d.z,g.z,v.z,p.z,this.tension));return i.set(Wf.calc(h),Xf.calc(h),jf.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $g(o,e,t,i,s){const a=(i-e)*.5,c=(s-t)*.5,u=o*o,h=o*u;return(2*t-2*i+a+c)*h+(-3*t+3*i-2*a-c)*u+a*o+t}function YS(o,e){const t=1-o;return t*t*e}function KS(o,e){return 2*(1-o)*o*e}function $S(o,e){return o*o*e}function Ea(o,e,t,i){return YS(o,e)+KS(o,t)+$S(o,i)}function ZS(o,e){const t=1-o;return t*t*t*e}function JS(o,e){const t=1-o;return 3*t*t*o*e}function QS(o,e){return 3*(1-o)*o*o*e}function eM(o,e){return o*o*o*e}function Ta(o,e,t,i,s){return ZS(o,e)+JS(o,t)+QS(o,i)+eM(o,s)}class w_ extends Fi{constructor(e=new Le,t=new Le,i=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Le){const i=t,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(Ta(e,s.x,a.x,c.x,u.x),Ta(e,s.y,a.y,c.y,u.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tM extends Fi{constructor(e=new G,t=new G,i=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new G){const i=t,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(Ta(e,s.x,a.x,c.x,u.x),Ta(e,s.y,a.y,c.y,u.y),Ta(e,s.z,a.z,c.z,u.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A_ extends Fi{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nM extends Fi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R_ extends Fi{constructor(e=new Le,t=new Le,i=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Le){const i=t,s=this.v0,a=this.v1,c=this.v2;return i.set(Ea(e,s.x,a.x,c.x),Ea(e,s.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iM extends Fi{constructor(e=new G,t=new G,i=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new G){const i=t,s=this.v0,a=this.v1,c=this.v2;return i.set(Ea(e,s.x,a.x,c.x),Ea(e,s.y,a.y,c.y),Ea(e,s.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const i=t,s=this.points,a=(s.length-1)*e,c=Math.floor(a),u=a-c,h=s[c===0?c:c-1],d=s[c],p=s[c>s.length-2?s.length-1:c+1],g=s[c>s.length-3?s.length-1:c+2];return i.set($g(u,h.x,d.x,p.x,g.x),$g(u,h.y,d.y,p.y,g.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var Yh=Object.freeze({__proto__:null,ArcCurve:jS,CatmullRomCurve3:qS,CubicBezierCurve:w_,CubicBezierCurve3:tM,EllipseCurve:vd,LineCurve:A_,LineCurve3:nM,QuadraticBezierCurve:R_,QuadraticBezierCurve3:iM,SplineCurve:C_});class rM extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const c=s[a]-i,u=this.curves[a],h=u.getLength(),d=h===0?0:1-c/h;return u.getPointAt(d,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(u);for(let d=0;d<h.length;d++){const p=h[d];i&&i.equals(p)||(t.push(p),i=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Yh[s.type]().fromJSON(s))}return this}}class Zg extends rM{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new A_(this.currentPoint.clone(),new Le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const a=new R_(this.currentPoint.clone(),new Le(e,t),new Le(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,c){const u=new w_(this.currentPoint.clone(),new Le(e,t),new Le(i,s),new Le(a,c));return this.curves.push(u),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new C_(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+u,t+h,i,s,a,c),this}absarc(e,t,i,s,a,c){return this.absellipse(e,t,i,i,s,a,c),this}ellipse(e,t,i,s,a,c,u,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+d,t+p,i,s,a,c,u,h),this}absellipse(e,t,i,s,a,c,u,h){const d=new vd(e,t,i,s,a,c,u,h);if(this.curves.length>0){const g=d.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(d);const p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yd extends ti{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};const d=this;s=Math.floor(s),a=Math.floor(a);const p=[],g=[],v=[],y=[];let M=0;const E=[],S=i/2;let x=0;N(),c===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(y,2));function N(){const w=new G,z=new G;let O=0;const I=(t-e)/i;for(let F=0;F<=a;F++){const C=[],R=F/a,k=R*(t-e)+e;for(let Q=0;Q<=s;Q++){const Y=Q/s,te=Y*h+u,ae=Math.sin(te),ee=Math.cos(te);z.x=k*ae,z.y=-R*i+S,z.z=k*ee,g.push(z.x,z.y,z.z),w.set(ae,I,ee).normalize(),v.push(w.x,w.y,w.z),y.push(Y,1-R),C.push(M++)}E.push(C)}for(let F=0;F<s;F++)for(let C=0;C<a;C++){const R=E[C][F],k=E[C+1][F],Q=E[C+1][F+1],Y=E[C][F+1];(e>0||C!==0)&&(p.push(R,k,Y),O+=3),(t>0||C!==a-1)&&(p.push(k,Q,Y),O+=3)}d.addGroup(x,O,0),x+=O}function P(w){const z=M,O=new Le,I=new G;let F=0;const C=w===!0?e:t,R=w===!0?1:-1;for(let Q=1;Q<=s;Q++)g.push(0,S*R,0),v.push(0,R,0),y.push(.5,.5),M++;const k=M;for(let Q=0;Q<=s;Q++){const te=Q/s*h+u,ae=Math.cos(te),ee=Math.sin(te);I.x=C*ee,I.y=S*R,I.z=C*ae,g.push(I.x,I.y,I.z),v.push(0,R,0),O.x=ae*.5+.5,O.y=ee*.5*R+.5,y.push(O.x,O.y),M++}for(let Q=0;Q<s;Q++){const Y=z+Q,te=k+Q;w===!0?p.push(te,te+1,Y):p.push(te+1,te,Y),F+=3}d.addGroup(x,F,w===!0?1:2),x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xd extends Zg{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Zg().fromJSON(s))}return this}}const sM={triangulate:function(o,e,t=2){const i=e&&e.length,s=i?e[0]*t:o.length;let a=b_(o,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let u,h,d,p,g,v,y;if(i&&(a=uM(o,e,a,t)),o.length>80*t){u=d=o[0],h=p=o[1];for(let M=t;M<s;M+=t)g=o[M],v=o[M+1],g<u&&(u=g),v<h&&(h=v),g>d&&(d=g),v>p&&(p=v);y=Math.max(d-u,p-h),y=y!==0?32767/y:0}return Pa(a,c,t,u,h,y,0),c}};function b_(o,e,t,i,s){let a,c;if(s===SM(o,e,t,i)>0)for(a=e;a<t;a+=i)c=Jg(a,o[a],o[a+1],c);else for(a=t-i;a>=e;a-=i)c=Jg(a,o[a],o[a+1],c);return c&&Dc(c,c.next)&&(Na(c),c=c.next),c}function xs(o,e){if(!o)return o;e||(e=o);let t=o,i;do if(i=!1,!t.steiner&&(Dc(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Na(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pa(o,e,t,i,s,a,c){if(!o)return;!c&&a&&mM(o,i,s,a);let u=o,h,d;for(;o.prev!==o.next;){if(h=o.prev,d=o.next,a?aM(o,i,s,a):oM(o)){e.push(h.i/t|0),e.push(o.i/t|0),e.push(d.i/t|0),Na(o),o=d.next,u=d.next;continue}if(o=d,o===u){c?c===1?(o=lM(xs(o),e,t),Pa(o,e,t,i,s,a,2)):c===2&&cM(o,e,t,i,s,a):Pa(xs(o),e,t,i,s,a,1);break}}}function oM(o){const e=o.prev,t=o,i=o.next;if(Kt(e,t,i)>=0)return!1;const s=e.x,a=t.x,c=i.x,u=e.y,h=t.y,d=i.y,p=s<a?s<c?s:c:a<c?a:c,g=u<h?u<d?u:d:h<d?h:d,v=s>a?s>c?s:c:a>c?a:c,y=u>h?u>d?u:d:h>d?h:d;let M=i.next;for(;M!==e;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=y&&ao(s,u,a,h,c,d,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function aM(o,e,t,i){const s=o.prev,a=o,c=o.next;if(Kt(s,a,c)>=0)return!1;const u=s.x,h=a.x,d=c.x,p=s.y,g=a.y,v=c.y,y=u<h?u<d?u:d:h<d?h:d,M=p<g?p<v?p:v:g<v?g:v,E=u>h?u>d?u:d:h>d?h:d,S=p>g?p>v?p:v:g>v?g:v,x=Kh(y,M,e,t,i),N=Kh(E,S,e,t,i);let P=o.prevZ,w=o.nextZ;for(;P&&P.z>=x&&w&&w.z<=N;){if(P.x>=y&&P.x<=E&&P.y>=M&&P.y<=S&&P!==s&&P!==c&&ao(u,p,h,g,d,v,P.x,P.y)&&Kt(P.prev,P,P.next)>=0||(P=P.prevZ,w.x>=y&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==c&&ao(u,p,h,g,d,v,w.x,w.y)&&Kt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;P&&P.z>=x;){if(P.x>=y&&P.x<=E&&P.y>=M&&P.y<=S&&P!==s&&P!==c&&ao(u,p,h,g,d,v,P.x,P.y)&&Kt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;w&&w.z<=N;){if(w.x>=y&&w.x<=E&&w.y>=M&&w.y<=S&&w!==s&&w!==c&&ao(u,p,h,g,d,v,w.x,w.y)&&Kt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function lM(o,e,t){let i=o;do{const s=i.prev,a=i.next.next;!Dc(s,a)&&P_(s,i,i.next,a)&&La(s,a)&&La(a,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Na(i),Na(i.next),i=o=a),i=i.next}while(i!==o);return xs(i)}function cM(o,e,t,i,s,a){let c=o;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&_M(c,u)){let h=L_(c,u);c=xs(c,c.next),h=xs(h,h.next),Pa(c,e,t,i,s,a,0),Pa(h,e,t,i,s,a,0);return}u=u.next}c=c.next}while(c!==o)}function uM(o,e,t,i){const s=[];let a,c,u,h,d;for(a=0,c=e.length;a<c;a++)u=e[a]*i,h=a<c-1?e[a+1]*i:o.length,d=b_(o,u,h,i,!1),d===d.next&&(d.steiner=!0),s.push(vM(d));for(s.sort(fM),a=0;a<s.length;a++)t=hM(s[a],t);return t}function fM(o,e){return o.x-e.x}function hM(o,e){const t=dM(o,e);if(!t)return e;const i=L_(t,o);return xs(i,i.next),xs(t,t.next)}function dM(o,e){let t=e,i=-1/0,s;const a=o.x,c=o.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>i&&(i=v,s=t.x<t.next.x?t:t.next,v===a))return s}t=t.next}while(t!==e);if(!s)return null;const u=s,h=s.x,d=s.y;let p=1/0,g;t=s;do a>=t.x&&t.x>=h&&a!==t.x&&ao(c<d?a:i,c,h,d,c<d?i:a,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(a-t.x),La(t,o)&&(g<p||g===p&&(t.x>s.x||t.x===s.x&&pM(s,t)))&&(s=t,p=g)),t=t.next;while(t!==u);return s}function pM(o,e){return Kt(o.prev,o,e.prev)<0&&Kt(e.next,o,o.next)<0}function mM(o,e,t,i){let s=o;do s.z===0&&(s.z=Kh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==o);s.prevZ.nextZ=null,s.prevZ=null,gM(s)}function gM(o){let e,t,i,s,a,c,u,h,d=1;do{for(t=o,o=null,a=null,c=0;t;){for(c++,i=t,u=0,e=0;e<d&&(u++,i=i.nextZ,!!i);e++);for(h=d;u>0||h>0&&i;)u!==0&&(h===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,u--):(s=i,i=i.nextZ,h--),a?a.nextZ=s:o=s,s.prevZ=a,a=s;t=i}a.nextZ=null,d*=2}while(c>1);return o}function Kh(o,e,t,i,s){return o=(o-t)*s|0,e=(e-i)*s|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function vM(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function ao(o,e,t,i,s,a,c,u){return(s-c)*(e-u)>=(o-c)*(a-u)&&(o-c)*(i-u)>=(t-c)*(e-u)&&(t-c)*(a-u)>=(s-c)*(i-u)}function _M(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!yM(o,e)&&(La(o,e)&&La(e,o)&&xM(o,e)&&(Kt(o.prev,o,e.prev)||Kt(o,e.prev,e))||Dc(o,e)&&Kt(o.prev,o,o.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Dc(o,e){return o.x===e.x&&o.y===e.y}function P_(o,e,t,i){const s=mc(Kt(o,e,t)),a=mc(Kt(o,e,i)),c=mc(Kt(t,i,o)),u=mc(Kt(t,i,e));return!!(s!==a&&c!==u||s===0&&pc(o,t,e)||a===0&&pc(o,i,e)||c===0&&pc(t,o,i)||u===0&&pc(t,e,i))}function pc(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function mc(o){return o>0?1:o<0?-1:0}function yM(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&P_(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function La(o,e){return Kt(o.prev,o,o.next)<0?Kt(o,e,o.next)>=0&&Kt(o,o.prev,e)>=0:Kt(o,e,o.prev)<0||Kt(o,o.next,e)<0}function xM(o,e){let t=o,i=!1;const s=(o.x+e.x)/2,a=(o.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==o);return i}function L_(o,e){const t=new $h(o.i,o.x,o.y),i=new $h(e.i,e.x,e.y),s=o.next,a=e.prev;return o.next=e,e.prev=o,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Jg(o,e,t,i){const s=new $h(o,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Na(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function $h(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function SM(o,e,t,i){let s=0;for(let a=e,c=t-i;a<t;a+=i)s+=(o[c]-o[a])*(o[a+1]+o[c+1]),c=a;return s}class Hr{static area(e){const t=e.length;let i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return Hr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],a=[];Qg(e),ev(i,e);let c=e.length;t.forEach(Qg);for(let h=0;h<t.length;h++)s.push(c),c+=t[h].length,ev(i,t[h]);const u=sM.triangulate(i,s);for(let h=0;h<u.length;h+=3)a.push(u.slice(h,h+3));return a}}function Qg(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function ev(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Sd extends ti{constructor(e=new xd([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],a=[];for(let u=0,h=e.length;u<h;u++){const d=e[u];c(d)}this.setAttribute("position",new ln(s,3)),this.setAttribute("uv",new ln(a,2)),this.computeVertexNormals();function c(u){const h=[],d=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:MM;let P,w=!1,z,O,I,F;x&&(P=x.getSpacedPoints(p),w=!0,v=!1,z=x.computeFrenetFrames(p,!1),O=new G,I=new G,F=new G),v||(S=0,y=0,M=0,E=0);const C=u.extractPoints(d);let R=C.shape;const k=C.holes;if(!Hr.isClockWise(R)){R=R.reverse();for(let ge=0,Ae=k.length;ge<Ae;ge++){const D=k[ge];Hr.isClockWise(D)&&(k[ge]=D.reverse())}}const Y=Hr.triangulateShape(R,k),te=R;for(let ge=0,Ae=k.length;ge<Ae;ge++){const D=k[ge];R=R.concat(D)}function ae(ge,Ae,D){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(Ae,D)}const ee=R.length,le=Y.length;function H(ge,Ae,D){let Je,Ee,He;const be=ge.x-Ae.x,nt=ge.y-Ae.y,Ue=D.x-ge.x,L=D.y-ge.y,A=be*be+nt*nt,$=be*L-nt*Ue;if(Math.abs($)>Number.EPSILON){const he=Math.sqrt(A),ve=Math.sqrt(Ue*Ue+L*L),de=Ae.x-nt/he,$e=Ae.y+be/he,Ne=D.x-L/ve,Ve=D.y+Ue/ve,pt=((Ne-de)*L-(Ve-$e)*Ue)/(be*L-nt*Ue);Je=de+be*pt-ge.x,Ee=$e+nt*pt-ge.y;const Te=Je*Je+Ee*Ee;if(Te<=2)return new Le(Je,Ee);He=Math.sqrt(Te/2)}else{let he=!1;be>Number.EPSILON?Ue>Number.EPSILON&&(he=!0):be<-Number.EPSILON?Ue<-Number.EPSILON&&(he=!0):Math.sign(nt)===Math.sign(L)&&(he=!0),he?(Je=-nt,Ee=be,He=Math.sqrt(A)):(Je=be,Ee=nt,He=Math.sqrt(A/2))}return new Le(Je/He,Ee/He)}const ue=[];for(let ge=0,Ae=te.length,D=Ae-1,Je=ge+1;ge<Ae;ge++,D++,Je++)D===Ae&&(D=0),Je===Ae&&(Je=0),ue[ge]=H(te[ge],te[D],te[Je]);const oe=[];let B,ne=ue.concat();for(let ge=0,Ae=k.length;ge<Ae;ge++){const D=k[ge];B=[];for(let Je=0,Ee=D.length,He=Ee-1,be=Je+1;Je<Ee;Je++,He++,be++)He===Ee&&(He=0),be===Ee&&(be=0),B[Je]=H(D[Je],D[He],D[be]);oe.push(B),ne=ne.concat(B)}for(let ge=0;ge<S;ge++){const Ae=ge/S,D=y*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+E;for(let Ee=0,He=te.length;Ee<He;Ee++){const be=ae(te[Ee],ue[Ee],Je);me(be.x,be.y,-D)}for(let Ee=0,He=k.length;Ee<He;Ee++){const be=k[Ee];B=oe[Ee];for(let nt=0,Ue=be.length;nt<Ue;nt++){const L=ae(be[nt],B[nt],Je);me(L.x,L.y,-D)}}}const Oe=M+E;for(let ge=0;ge<ee;ge++){const Ae=v?ae(R[ge],ne[ge],Oe):R[ge];w?(I.copy(z.normals[0]).multiplyScalar(Ae.x),O.copy(z.binormals[0]).multiplyScalar(Ae.y),F.copy(P[0]).add(I).add(O),me(F.x,F.y,F.z)):me(Ae.x,Ae.y,0)}for(let ge=1;ge<=p;ge++)for(let Ae=0;Ae<ee;Ae++){const D=v?ae(R[Ae],ne[Ae],Oe):R[Ae];w?(I.copy(z.normals[ge]).multiplyScalar(D.x),O.copy(z.binormals[ge]).multiplyScalar(D.y),F.copy(P[ge]).add(I).add(O),me(F.x,F.y,F.z)):me(D.x,D.y,g/p*ge)}for(let ge=S-1;ge>=0;ge--){const Ae=ge/S,D=y*Math.cos(Ae*Math.PI/2),Je=M*Math.sin(Ae*Math.PI/2)+E;for(let Ee=0,He=te.length;Ee<He;Ee++){const be=ae(te[Ee],ue[Ee],Je);me(be.x,be.y,g+D)}for(let Ee=0,He=k.length;Ee<He;Ee++){const be=k[Ee];B=oe[Ee];for(let nt=0,Ue=be.length;nt<Ue;nt++){const L=ae(be[nt],B[nt],Je);w?me(L.x,L.y+P[p-1].y,P[p-1].x+D):me(L.x,L.y,g+D)}}}J(),fe();function J(){const ge=s.length/3;if(v){let Ae=0,D=ee*Ae;for(let Je=0;Je<le;Je++){const Ee=Y[Je];Pe(Ee[2]+D,Ee[1]+D,Ee[0]+D)}Ae=p+S*2,D=ee*Ae;for(let Je=0;Je<le;Je++){const Ee=Y[Je];Pe(Ee[0]+D,Ee[1]+D,Ee[2]+D)}}else{for(let Ae=0;Ae<le;Ae++){const D=Y[Ae];Pe(D[2],D[1],D[0])}for(let Ae=0;Ae<le;Ae++){const D=Y[Ae];Pe(D[0]+ee*p,D[1]+ee*p,D[2]+ee*p)}}i.addGroup(ge,s.length/3-ge,0)}function fe(){const ge=s.length/3;let Ae=0;xe(te,Ae),Ae+=te.length;for(let D=0,Je=k.length;D<Je;D++){const Ee=k[D];xe(Ee,Ae),Ae+=Ee.length}i.addGroup(ge,s.length/3-ge,1)}function xe(ge,Ae){let D=ge.length;for(;--D>=0;){const Je=D;let Ee=D-1;Ee<0&&(Ee=ge.length-1);for(let He=0,be=p+S*2;He<be;He++){const nt=ee*He,Ue=ee*(He+1),L=Ae+Je+nt,A=Ae+Ee+nt,$=Ae+Ee+Ue,he=Ae+Je+Ue;Ce(L,A,$,he)}}}function me(ge,Ae,D){h.push(ge),h.push(Ae),h.push(D)}function Pe(ge,Ae,D){Ge(ge),Ge(Ae),Ge(D);const Je=s.length/3,Ee=N.generateTopUV(i,s,Je-3,Je-2,Je-1);vt(Ee[0]),vt(Ee[1]),vt(Ee[2])}function Ce(ge,Ae,D,Je){Ge(ge),Ge(Ae),Ge(Je),Ge(Ae),Ge(D),Ge(Je);const Ee=s.length/3,He=N.generateSideWallUV(i,s,Ee-6,Ee-3,Ee-2,Ee-1);vt(He[0]),vt(He[1]),vt(He[3]),vt(He[1]),vt(He[2]),vt(He[3])}function Ge(ge){s.push(h[ge*3+0]),s.push(h[ge*3+1]),s.push(h[ge*3+2])}function vt(ge){a.push(ge.x),a.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return EM(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,c=e.shapes.length;a<c;a++){const u=t[e.shapes[a]];i.push(u)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yh[s.type]().fromJSON(s)),new Sd(i,e.options)}}const MM={generateTopUV:function(o,e,t,i,s){const a=e[t*3],c=e[t*3+1],u=e[i*3],h=e[i*3+1],d=e[s*3],p=e[s*3+1];return[new Le(a,c),new Le(u,h),new Le(d,p)]},generateSideWallUV:function(o,e,t,i,s,a){const c=e[t*3],u=e[t*3+1],h=e[t*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[s*3],y=e[s*3+1],M=e[s*3+2],E=e[a*3],S=e[a*3+1],x=e[a*3+2];return Math.abs(u-p)<Math.abs(c-d)?[new Le(c,1-h),new Le(d,1-g),new Le(v,1-M),new Le(E,1-x)]:[new Le(u,1-h),new Le(p,1-g),new Le(y,1-M),new Le(S,1-x)]}};function EM(o,e,t){if(t.shapes=[],Array.isArray(o))for(let i=0,s=o.length;i<s;i++){const a=o[i];t.shapes.push(a.uuid)}else t.shapes.push(o.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Da extends ti{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),d=u+1,p=h+1,g=e/u,v=t/h,y=[],M=[],E=[],S=[];for(let x=0;x<p;x++){const N=x*v-c;for(let P=0;P<d;P++){const w=P*g-a;M.push(w,-N,0),E.push(0,0,1),S.push(P/u),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let N=0;N<u;N++){const P=N+d*x,w=N+d*(x+1),z=N+1+d*(x+1),O=N+1+d*x;y.push(P,w,O),y.push(w,z,O)}this.setIndex(y),this.setAttribute("position",new ln(M,3)),this.setAttribute("normal",new ln(E,3)),this.setAttribute("uv",new ln(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}class Md extends ti{constructor(e=new xd([new Le(0,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],a=[],c=[];let u=0,h=0;if(Array.isArray(e)===!1)d(e);else for(let p=0;p<e.length;p++)d(e[p]),this.addGroup(u,h,p),u+=h,h=0;this.setIndex(i),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(a,3)),this.setAttribute("uv",new ln(c,2));function d(p){const g=s.length/3,v=p.extractPoints(t);let y=v.shape;const M=v.holes;Hr.isClockWise(y)===!1&&(y=y.reverse());for(let S=0,x=M.length;S<x;S++){const N=M[S];Hr.isClockWise(N)===!0&&(M[S]=N.reverse())}const E=Hr.triangulateShape(y,M);for(let S=0,x=M.length;S<x;S++){const N=M[S];y=y.concat(N)}for(let S=0,x=y.length;S<x;S++){const N=y[S];s.push(N.x,N.y,0),a.push(0,0,1),c.push(N.x,N.y)}for(let S=0,x=E.length;S<x;S++){const N=E[S],P=N[0]+g,w=N[1]+g,z=N[2]+g;i.push(P,w,z),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return TM(t,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];i.push(c)}return new Md(i,e.curveSegments)}}function TM(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,i=o.length;t<i;t++){const s=o[t];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e}class wM extends Ri{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ut(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ed extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a_,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cn extends Ed{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class AM extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RM extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function gc(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function CM(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function bM(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function tv(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let h=0;h!==e;++h)s[c++]=o[u+h]}return s}function N_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Ua{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let h=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class PM extends Ua{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dg,endingEnd:dg}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],h=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case pg:a=e,u=2*t-i;break;case mg:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(h===void 0)switch(this.getSettings_().endingEnd){case pg:c=e,h=2*i-t;break;case mg:c=1,h=i+s[1]-s[0];break;default:c=e-1,h=t}const d=(i-t)*.5,p=this.valueSize;this._weightPrev=d/(t-u),this._weightNext=d/(h-i),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,d=h-u,p=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),E=M*M,S=E*M,x=-v*S+2*v*E-v*M,N=(1+v)*S+(-1.5-2*v)*E+(-.5+v)*M+1,P=(-1-y)*S+(1.5+y)*E+.5*M,w=y*S-y*E;for(let z=0;z!==u;++z)a[z]=x*c[p+z]+N*c[d+z]+P*c[h+z]+w*c[g+z];return a}}class LM extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,d=h-u,p=(i-t)/(s-t),g=1-p;for(let v=0;v!==u;++v)a[v]=c[d+v]*g+c[h+v]*p;return a}}class NM extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gc(t,this.TimeBufferType),this.values=gc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gc(e.times,Array),values:gc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new NM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new PM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case Ca:t=this.InterpolantFactoryMethodLinear;break;case xf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return xf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const h=i[u];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,h,c),e=!1;break}c=h}if(s!==void 0&&CM(s))for(let u=0,h=s.length;u!==h;++u){const d=s[u];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xf,a=e.length-1;let c=1;for(let u=1;u<a;++u){let h=!1;const d=e[u],p=e[u+1];if(d!==p&&(u!==1||d!==e[0]))if(s)h=!0;else{const g=u*i,v=g-i,y=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[v+M]||E!==t[y+M]){h=!0;break}}}if(h){if(u!==c){e[c]=e[u];const g=u*i,v=c*i;for(let y=0;y!==i;++y)t[v+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,h=c*i,d=0;d!==i;++d)t[h+d]=t[u+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Ca;class Ro extends Oi{constructor(e,t,i){super(e,t,i)}}Ro.prototype.ValueTypeName="bool";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Ra;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class I_ extends Oi{}I_.prototype.ValueTypeName="color";class Mo extends Oi{}Mo.prototype.ValueTypeName="number";class IM extends Ua{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=(i-t)/(s-t);let d=e*u;for(let p=d+u;d!==p;d+=4)Gr.slerpFlat(a,0,c,d-u,c,d,h);return a}}class Eo extends Oi{InterpolantFactoryMethodLinear(e){return new IM(this.times,this.values,this.getValueSize(),e)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends Oi{constructor(e,t,i){super(e,t,i)}}Co.prototype.ValueTypeName="string";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=Ra;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends Oi{}To.prototype.ValueTypeName="vector";class DM{constructor(e="",t=-1,i=[],s=Nx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(FM(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Oi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let h=[],d=[];h.push((u+a-1)%a,u,(u+1)%a),d.push(0,1,0);const p=bM(h);h=tv(h,1,p),d=tv(d,1,p),!s&&h[0]===0&&(h.push(a),d.push(d[0])),c.push(new Mo(".morphTargetInfluences["+t[u].name+"]",h,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,h=e.length;u<h;u++){const d=e[u],p=d.name.match(a);if(p&&p.length>1){const g=p[1];let v=s[g];v||(s[g]=v=[]),v.push(d)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,v,y,M,E){if(y.length!==0){const S=[],x=[];N_(y,S,x,M),S.length!==0&&E.push(new g(v,S,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let g=0;g<d.length;g++){const v=d[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const y={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let E=0;E<v[M].morphTargets.length;E++)y[v[M].morphTargets[E]]=-1;for(const E in y){const S=[],x=[];for(let N=0;N!==v[M].morphTargets.length;++N){const P=v[M];S.push(P.time),x.push(P.morphTarget===E?1:0)}s.push(new Mo(".morphTargetInfluence["+E+"]",S,x))}h=y.length*c}else{const y=".bones["+t[g].name+"]";i(To,y+".position",v,"pos",s),i(Eo,y+".quaternion",v,"rot",s),i(To,y+".scale",v,"scl",s)}}return s.length===0?null:new this(a,h,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function UM(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return To;case"color":return I_;case"quaternion":return Eo;case"bool":case"boolean":return Ro;case"string":return Co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function FM(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=UM(o.type);if(o.times===void 0){const t=[],i=[];N_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const kr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class OM{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=d.length;g<v;g+=2){const y=d[g],M=d[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return M}return null}}}const kM=new OM;class bo{constructor(e){this.manager=e!==void 0?e:kM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi={};class BM extends Error{constructor(e,t){super(e),this.response=t}}class D_ extends bo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=kr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:i,onError:s});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Qi[e],g=d.body.getReader(),v=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=v?parseInt(v):0,M=y!==0;let E=0;const S=new ReadableStream({start(x){N();function N(){g.read().then(({done:P,value:w})=>{if(P)x.close();else{E+=w.byteLength;const z=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:y});for(let O=0,I=p.length;O<I;O++){const F=p[O];F.onProgress&&F.onProgress(z)}x.enqueue(w),N()}},P=>{x.error(P)})}}});return new Response(S)}else throw new BM(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),v=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(v);return d.arrayBuffer().then(M=>y.decode(M))}}}).then(d=>{kr.add(e,d);const p=Qi[e];delete Qi[e];for(let g=0,v=p.length;g<v;g++){const y=p[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=Qi[e];if(p===void 0)throw this.manager.itemError(e),d;delete Qi[e];for(let g=0,v=p.length;g<v;g++){const y=p[g];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zM extends bo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=kr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=ba("img");function h(){p(),kr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(g){p(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class U_ extends bo{constructor(e){super(e)}load(e,t,i,s){const a=new rn,c=new zM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Uc extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class HM extends Uc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qf=new mt,nv=new G,iv=new G;class Td{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new md,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nv.setFromMatrixPosition(e.matrixWorld),t.position.copy(nv),iv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iv),t.updateMatrixWorld(),qf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class VM extends Td{constructor(){super(new Fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=xo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class GM extends Uc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new VM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rv=new mt,va=new G,Yf=new G;class WM extends Td{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Yf.copy(i.position),Yf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yf),i.updateMatrixWorld(),s.makeTranslation(-va.x,-va.y,-va.z),rv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rv)}}class F_ extends Uc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new WM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wd extends __{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class XM extends Td{constructor(){super(new wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zh extends Uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new XM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jM extends bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=kr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(d=>{t&&t(d),a.manager.itemEnd(e)}).catch(d=>{s&&s(d)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const h=fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return kr.add(e,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){s&&s(d),kr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});kr.add(e,h),a.manager.itemStart(e)}}class qM extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Ad="\\[\\]\\.:\\/",YM=new RegExp("["+Ad+"]","g"),Rd="[^"+Ad+"]",KM="[^"+Ad.replace("\\.","")+"]",$M=/((?:WC+[\/:])*)/.source.replace("WC",Rd),ZM=/(WCOD+)?/.source.replace("WCOD",KM),JM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rd),QM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rd),eE=new RegExp("^"+$M+ZM+JM+QM+"$"),tE=["material","materials","bones","map"];class nE{constructor(e,t,i){const s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ft{constructor(e,t,i){this.path=t,this.parsedPath=i||Ft.parseTrackName(t),this.node=Ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ft.Composite(e,t,i):new Ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(YM,"")}static parseTrackName(e){const t=eE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);tE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const h=i(u.children);if(h)return h}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[s];if(c===void 0){const d=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ft.Composite=nE;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function sv(o,e,t,i){const s=iE(i);switch(t){case e_:return o*e;case n_:return o*e;case i_:return o*e*2;case ld:return o*e/s.components*s.byteLength;case cd:return o*e/s.components*s.byteLength;case r_:return o*e*2/s.components*s.byteLength;case ud:return o*e*2/s.components*s.byteLength;case t_:return o*e*3/s.components*s.byteLength;case fi:return o*e*4/s.components*s.byteLength;case fd:return o*e*4/s.components*s.byteLength;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yh:case Sh:return Math.max(o,16)*Math.max(e,8)/4;case _h:case xh:return Math.max(o,8)*Math.max(e,8)/2;case Mh:case Eh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case wc:case Bh:case zh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case s_:case Hh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vh:case Gh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iE(o){switch(o){case or:case Zv:return{byteLength:1,components:1};case Aa:case Jv:case Ia:return{byteLength:2,components:1};case od:case ad:return{byteLength:2,components:4};case _s:case sd:case wi:return{byteLength:4,components:1};case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function O_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function rE(o){const e=new WeakMap;function t(u,h){const d=u.array,p=u.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(h,v),o.bufferData(h,d,p),u.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,d){const p=h.array,g=h.updateRanges;if(o.bindBuffer(d,u),g.length===0)o.bufferSubData(d,0,p);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];o.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(o.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:s,remove:a,update:c}}var sE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oE=`#ifdef USE_ALPHAHASH
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
#endif`,aE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fE=`#ifdef USE_AOMAP
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
#endif`,hE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dE=`#ifdef USE_BATCHING
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
#endif`,pE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_E=`#ifdef USE_IRIDESCENCE
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
#endif`,yE=`#ifdef USE_BUMPMAP
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CE=`#define PI 3.141592653589793
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PE=`vec3 transformedNormal = objectNormal;
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
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,zE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
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
}`,qE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
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
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
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
#endif`,iT=`struct PhysicalMaterial {
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
}`,rT=`
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
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
#endif`,oT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pT=`#if defined( USE_POINTS_UV )
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
#endif`,mT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
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
#endif`,ST=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ET=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RT=`#ifdef USE_NORMALMAP
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
#endif`,CT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GT=`float getShadowMask() {
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
}`,WT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,jT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JT=`#ifdef USE_TRANSMISSION
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
#endif`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`#include <common>
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
}`,f1=`#if DEPTH_PACKING == 3200
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
}`,h1=`#define DISTANCE
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
}`,d1=`#define DISTANCE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,v1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,y1=`uniform vec3 diffuse;
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
}`,x1=`#define LAMBERT
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
}`,S1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,E1=`#define MATCAP
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
}`,T1=`#define NORMAL
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
}`,w1=`#define NORMAL
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
}`,A1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,C1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,L1=`#define TOON
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
}`,N1=`uniform float size;
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
}`,I1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,U1=`uniform vec3 color;
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
}`,F1=`uniform float rotation;
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
}`,O1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:sE,alphahash_pars_fragment:oE,alphamap_fragment:aE,alphamap_pars_fragment:lE,alphatest_fragment:cE,alphatest_pars_fragment:uE,aomap_fragment:fE,aomap_pars_fragment:hE,batching_pars_vertex:dE,batching_vertex:pE,begin_vertex:mE,beginnormal_vertex:gE,bsdfs:vE,iridescence_fragment:_E,bumpmap_pars_fragment:yE,clipping_planes_fragment:xE,clipping_planes_pars_fragment:SE,clipping_planes_pars_vertex:ME,clipping_planes_vertex:EE,color_fragment:TE,color_pars_fragment:wE,color_pars_vertex:AE,color_vertex:RE,common:CE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:PE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:IE,emissivemap_pars_fragment:DE,colorspace_fragment:UE,colorspace_pars_fragment:FE,envmap_fragment:OE,envmap_common_pars_fragment:kE,envmap_pars_fragment:BE,envmap_pars_vertex:zE,envmap_physical_pars_fragment:ZE,envmap_vertex:HE,fog_vertex:VE,fog_pars_vertex:GE,fog_fragment:WE,fog_pars_fragment:XE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:qE,lights_lambert_fragment:YE,lights_lambert_pars_fragment:KE,lights_pars_begin:$E,lights_toon_fragment:JE,lights_toon_pars_fragment:QE,lights_phong_fragment:eT,lights_phong_pars_fragment:tT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:rT,lights_fragment_maps:sT,lights_fragment_end:oT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:fT,map_pars_fragment:hT,map_particle_fragment:dT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:gT,morphinstance_vertex:vT,morphcolor_vertex:_T,morphnormal_vertex:yT,morphtarget_pars_vertex:xT,morphtarget_vertex:ST,normal_fragment_begin:MT,normal_fragment_maps:ET,normal_pars_fragment:TT,normal_pars_vertex:wT,normal_vertex:AT,normalmap_pars_fragment:RT,clearcoat_normal_fragment_begin:CT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:PT,iridescence_pars_fragment:LT,opaque_fragment:NT,packing:IT,premultiplied_alpha_fragment:DT,project_vertex:UT,dithering_fragment:FT,dithering_pars_fragment:OT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:zT,shadowmap_pars_vertex:HT,shadowmap_vertex:VT,shadowmask_pars_fragment:GT,skinbase_vertex:WT,skinning_pars_vertex:XT,skinning_vertex:jT,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:KT,tonemapping_fragment:$T,tonemapping_pars_fragment:ZT,transmission_fragment:JT,transmission_pars_fragment:QT,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:r1,background_frag:s1,backgroundCube_vert:o1,backgroundCube_frag:a1,cube_vert:l1,cube_frag:c1,depth_vert:u1,depth_frag:f1,distanceRGBA_vert:h1,distanceRGBA_frag:d1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:v1,meshbasic_vert:_1,meshbasic_frag:y1,meshlambert_vert:x1,meshlambert_frag:S1,meshmatcap_vert:M1,meshmatcap_frag:E1,meshnormal_vert:T1,meshnormal_frag:w1,meshphong_vert:A1,meshphong_frag:R1,meshphysical_vert:C1,meshphysical_frag:b1,meshtoon_vert:P1,meshtoon_frag:L1,points_vert:N1,points_frag:I1,shadow_vert:D1,shadow_frag:U1,sprite_vert:F1,sprite_frag:O1},Fe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ii={basic:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Un([Fe.points,Fe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Un([Fe.common,Fe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Un([Fe.sprite,Fe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Un([Fe.common,Fe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Un([Fe.lights,Fe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ii.physical={uniforms:Un([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const vc={r:0,b:0,g:0},us=new On,k1=new mt;function B1(o,e,t,i,s,a,c){const u=new ut(0);let h=a===!0?0:1,d,p,g=null,v=0,y=null;function M(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function E(P){let w=!1;const z=M(P);z===null?x(u,h):z&&z.isColor&&(x(z,1),w=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(P,w){const z=M(w);z&&(z.isCubeTexture||z.mapping===Nc)?(p===void 0&&(p=new Gt(new Ao(1,1,1),new Vr({name:"BackgroundCubeMaterial",uniforms:So(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),us.copy(w.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.material.uniforms.envMap.value=z,p.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(us)),p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==kt,(g!==z||v!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,v=z.version,y=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new Gt(new Da(2,2),new Vr({name:"BackgroundMaterial",uniforms:So(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Rt.getTransfer(z.colorSpace)!==kt,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||v!==z.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=z,v=z.version,y=o.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function x(P,w){P.getRGB(vc,v_(o)),i.buffers.color.setClear(vc.r,vc.g,vc.b,w,c)}function N(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(P,w=1){u.set(P),h=w,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,x(u,h)},render:E,addToRenderList:S,dispose:N}}function z1(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=v(null);let a=s,c=!1;function u(R,k,Q,Y,te){let ae=!1;const ee=g(Y,Q,k);a!==ee&&(a=ee,d(a.object)),ae=y(R,Y,Q,te),ae&&M(R,Y,Q,te),te!==null&&e.update(te,o.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,w(R,k,Q,Y),te!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return o.createVertexArray()}function d(R){return o.bindVertexArray(R)}function p(R){return o.deleteVertexArray(R)}function g(R,k,Q){const Y=Q.wireframe===!0;let te=i[R.id];te===void 0&&(te={},i[R.id]=te);let ae=te[k.id];ae===void 0&&(ae={},te[k.id]=ae);let ee=ae[Y];return ee===void 0&&(ee=v(h()),ae[Y]=ee),ee}function v(R){const k=[],Q=[],Y=[];for(let te=0;te<t;te++)k[te]=0,Q[te]=0,Y[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:Y,object:R,attributes:{},index:null}}function y(R,k,Q,Y){const te=a.attributes,ae=k.attributes;let ee=0;const le=Q.getAttributes();for(const H in le)if(le[H].location>=0){const oe=te[H];let B=ae[H];if(B===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),oe===void 0||oe.attribute!==B||B&&oe.data!==B.data)return!0;ee++}return a.attributesNum!==ee||a.index!==Y}function M(R,k,Q,Y){const te={},ae=k.attributes;let ee=0;const le=Q.getAttributes();for(const H in le)if(le[H].location>=0){let oe=ae[H];oe===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const B={};B.attribute=oe,oe&&oe.data&&(B.data=oe.data),te[H]=B,ee++}a.attributes=te,a.attributesNum=ee,a.index=Y}function E(){const R=a.newAttributes;for(let k=0,Q=R.length;k<Q;k++)R[k]=0}function S(R){x(R,0)}function x(R,k){const Q=a.newAttributes,Y=a.enabledAttributes,te=a.attributeDivisors;Q[R]=1,Y[R]===0&&(o.enableVertexAttribArray(R),Y[R]=1),te[R]!==k&&(o.vertexAttribDivisor(R,k),te[R]=k)}function N(){const R=a.newAttributes,k=a.enabledAttributes;for(let Q=0,Y=k.length;Q<Y;Q++)k[Q]!==R[Q]&&(o.disableVertexAttribArray(Q),k[Q]=0)}function P(R,k,Q,Y,te,ae,ee){ee===!0?o.vertexAttribIPointer(R,k,Q,te,ae):o.vertexAttribPointer(R,k,Q,Y,te,ae)}function w(R,k,Q,Y){E();const te=Y.attributes,ae=Q.getAttributes(),ee=k.defaultAttributeValues;for(const le in ae){const H=ae[le];if(H.location>=0){let ue=te[le];if(ue===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const oe=ue.normalized,B=ue.itemSize,ne=e.get(ue);if(ne===void 0)continue;const Oe=ne.buffer,J=ne.type,fe=ne.bytesPerElement,xe=J===o.INT||J===o.UNSIGNED_INT||ue.gpuType===sd;if(ue.isInterleavedBufferAttribute){const me=ue.data,Pe=me.stride,Ce=ue.offset;if(me.isInstancedInterleavedBuffer){for(let Ge=0;Ge<H.locationSize;Ge++)x(H.location+Ge,me.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)S(H.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let Ge=0;Ge<H.locationSize;Ge++)P(H.location+Ge,B/H.locationSize,J,oe,Pe*fe,(Ce+B/H.locationSize*Ge)*fe,xe)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)x(H.location+me,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<H.locationSize;me++)S(H.location+me);o.bindBuffer(o.ARRAY_BUFFER,Oe);for(let me=0;me<H.locationSize;me++)P(H.location+me,B/H.locationSize,J,oe,B*fe,B/H.locationSize*me*fe,xe)}}else if(ee!==void 0){const oe=ee[le];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(H.location,oe);break;case 3:o.vertexAttrib3fv(H.location,oe);break;case 4:o.vertexAttrib4fv(H.location,oe);break;default:o.vertexAttrib1fv(H.location,oe)}}}}N()}function z(){F();for(const R in i){const k=i[R];for(const Q in k){const Y=k[Q];for(const te in Y)p(Y[te].object),delete Y[te];delete k[Q]}delete i[R]}}function O(R){if(i[R.id]===void 0)return;const k=i[R.id];for(const Q in k){const Y=k[Q];for(const te in Y)p(Y[te].object),delete Y[te];delete k[Q]}delete i[R.id]}function I(R){for(const k in i){const Q=i[k];if(Q[R.id]===void 0)continue;const Y=Q[R.id];for(const te in Y)p(Y[te].object),delete Y[te];delete Q[R.id]}}function F(){C(),c=!0,a!==s&&(a=s,d(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:S,disableUnusedAttributes:N}}function H1(o,e,t){let i;function s(d){i=d}function a(d,p){o.drawArrays(i,d,p),t.update(p,i,1)}function c(d,p,g){g!==0&&(o.drawArraysInstanced(i,d,p,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,g);let y=0;for(let M=0;M<g;M++)y+=p[M];t.update(y,i,1)}function h(d,p,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)c(d[M],p[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*v[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function V1(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==fi&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const F=I===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==or&&i.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==wi&&!F)}function h(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:w,vertexTextures:z,maxSamples:O}}function G1(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new ps,u=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||i!==0||s;return s=v,i=g.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?p(null):d();else{const N=a?0:i,P=N*4;let w=x.clippingState||null;h.value=w,w=p(M,v,P,y);for(let z=0;z!==P;++z)w[z]=t[z];x.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,v,y,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const x=y+E*4,N=v.matrixWorldInverse;u.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let P=0,w=y;P!==E;++P,w+=4)c.copy(g[P]).applyMatrix4(N,u),c.normal.toArray(S,w),S[w+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function W1(o){let e=new WeakMap;function t(c,u){return u===gh?c.mapping=mo:u===vh&&(c.mapping=go),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===gh||u===vh)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new LS(h.height);return d.fromEquirectangularTexture(o,c),e.set(c,d),c.addEventListener("dispose",s),t(d.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const lo=4,ov=[.125,.215,.35,.446,.526,.582],vs=20,Kf=new wd,av=new ut;let $f=null,Zf=0,Jf=0,Qf=!1;const ms=(1+Math.sqrt(5))/2,so=1/ms,lv=[new G(-ms,so,0),new G(ms,so,0),new G(-so,0,ms),new G(so,0,ms),new G(0,ms,-so),new G(0,ms,so),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class cv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){$f=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Zf,Jf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ia,format:fi,colorSpace:zn,depthBuffer:!1},s=uv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X1(a)),this._blurMaterial=j1(a,e,t)}return s}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Kf)}_sceneToCubeUV(e,t,i,s){const u=new Fn(90,1,t,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(av),p.toneMapping=zr,p.autoClear=!1;const y=new Ai({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new Gt(new Ao,y);let E=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,E=!0):(y.color.copy(av),E=!0);for(let x=0;x<6;x++){const N=x%3;N===0?(u.up.set(0,h[x],0),u.lookAt(d[x],0,0)):N===1?(u.up.set(0,0,h[x]),u.lookAt(0,d[x],0)):(u.up.set(0,h[x],0),u.lookAt(0,0,d[x]));const P=this._cubeSize;_c(s,N*P,x>2?P:0,P,P),p.setRenderTarget(s),E&&p.render(M,u),p.render(e,u)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===mo||e.mapping===go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Gt(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;_c(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Kf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=lv[(s-a-1)%lv.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Gt(this._lodPlanes[s],d),v=d.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*vs-1),E=a/M,S=isFinite(a)?1+Math.floor(p*E):vs;S>vs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const x=[];let N=0;for(let I=0;I<vs;++I){const F=I/E,C=Math.exp(-F*F/2);x.push(C),I===0?N+=C:I<S&&(N+=2*C)}for(let I=0;I<x.length;I++)x[I]=x[I]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-i;const w=this._sizeLods[s],z=3*w*(s>P-lo?s-P+lo:0),O=4*(this._cubeSize-w);_c(t,z,O,3*w,2*w),h.setRenderTarget(t),h.render(g,Kf)}}function X1(o){const e=[],t=[],i=[];let s=o;const a=o-lo+1+ov.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let h=1/u;c>o-lo?h=ov[c-o+lo-1]:c===0&&(h=0),i.push(h);const d=1/(u-2),p=-d,g=1+d,v=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,M=6,E=3,S=2,x=1,N=new Float32Array(E*M*y),P=new Float32Array(S*M*y),w=new Float32Array(x*M*y);for(let O=0;O<y;O++){const I=O%3*2/3-1,F=O>2?0:-1,C=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];N.set(C,E*M*O),P.set(v,S*M*O);const R=[O,O,O,O,O,O];w.set(R,x*M*O)}const z=new ti;z.setAttribute("position",new Bn(N,E)),z.setAttribute("uv",new Bn(P,S)),z.setAttribute("faceIndex",new Bn(w,x)),e.push(z),s>lo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uv(o,e,t){const i=new ys(o,e,t);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _c(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function j1(o,e,t){const i=new Float32Array(vs),s=new G(0,1,0);return new Vr({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function fv(){return new Vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function hv(){return new Vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Cd(){return`

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
	`}function q1(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const h=u.mapping,d=h===gh||h===vh,p=h===mo||h===go;if(d||p){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new cv(o)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return d&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new cv(o)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let h=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&h++;return h===d}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Y1(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function K1(o,e,t,i){const s={},a=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete s[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const N=y.array;E=y.version;for(let P=0,w=N.length;P<w;P+=3){const z=N[P+0],O=N[P+1],I=N[P+2];v.push(z,O,O,I,I,z)}}else if(M!==void 0){const N=M.array;E=M.version;for(let P=0,w=N.length/3-1;P<w;P+=3){const z=P+0,O=P+1,I=P+2;v.push(z,O,O,I,I,z)}}else return;const S=new(u_(v)?g_:m_)(v,1);S.version=E;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function p(g){const v=a.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function $1(o,e,t){let i;function s(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function h(v,y){o.drawElements(i,y,a,v*c),t.update(y,i,1)}function d(v,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,v*c,M),t.update(y,i,M))}function p(v,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function g(v,y,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],E[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,v,0,E,0,M);let x=0;for(let N=0;N<M;N++)x+=y[N]*E[N];t.update(x,i,1)}}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function Z1(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function J1(o,e,t){const i=new WeakMap,s=new It;function a(c,u,h){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=i.get(u);if(v===void 0||v.count!==g){let R=function(){F.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),S===!0&&(w=3);let z=u.attributes.position.count*w,O=1;z>e.maxTextureSize&&(O=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*O*4*g),F=new h_(I,z,O,g);F.type=wi,F.needsUpdate=!0;const C=w*4;for(let k=0;k<g;k++){const Q=x[k],Y=N[k],te=P[k],ae=z*O*4*k;for(let ee=0;ee<Q.count;ee++){const le=ee*C;M===!0&&(s.fromBufferAttribute(Q,ee),I[ae+le+0]=s.x,I[ae+le+1]=s.y,I[ae+le+2]=s.z,I[ae+le+3]=0),E===!0&&(s.fromBufferAttribute(Y,ee),I[ae+le+4]=s.x,I[ae+le+5]=s.y,I[ae+le+6]=s.z,I[ae+le+7]=0),S===!0&&(s.fromBufferAttribute(te,ee),I[ae+le+8]=s.x,I[ae+le+9]=s.y,I[ae+le+10]=s.z,I[ae+le+11]=te.itemSize===4?s.w:1)}}v={count:g,texture:F,size:new Le(z,O)},i.set(u,v),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const E=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",E),h.getUniforms().setValue(o,"morphTargetInfluences",d)}h.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:a}}function Q1(o,e,t,i){let s=new WeakMap;function a(h){const d=i.render.frame,p=h.geometry,g=e.get(h,p);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==d&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}const k_=new rn,dv=new T_(1,1),B_=new h_,z_=new mS,H_=new y_,pv=[],mv=[],gv=new Float32Array(16),vv=new Float32Array(9),_v=new Float32Array(4);function Po(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=pv[s];if(a===void 0&&(a=new Float32Array(s),pv[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function cn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function un(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Fc(o,e){let t=mv[e];t===void 0&&(t=new Int32Array(e),mv[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function ew(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function tw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;o.uniform2fv(this.addr,e),un(t,e)}}function nw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;o.uniform3fv(this.addr,e),un(t,e)}}function iw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;o.uniform4fv(this.addr,e),un(t,e)}}function rw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;_v.set(i),o.uniformMatrix2fv(this.addr,!1,_v),un(t,i)}}function sw(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;vv.set(i),o.uniformMatrix3fv(this.addr,!1,vv),un(t,i)}}function ow(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;gv.set(i),o.uniformMatrix4fv(this.addr,!1,gv),un(t,i)}}function aw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function lw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;o.uniform2iv(this.addr,e),un(t,e)}}function cw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;o.uniform3iv(this.addr,e),un(t,e)}}function uw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;o.uniform4iv(this.addr,e),un(t,e)}}function fw(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function hw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;o.uniform2uiv(this.addr,e),un(t,e)}}function dw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;o.uniform3uiv(this.addr,e),un(t,e)}}function pw(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;o.uniform4uiv(this.addr,e),un(t,e)}}function mw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(dv.compareFunction=l_,a=dv):a=k_,t.setTexture2D(e||a,s)}function gw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||z_,s)}function vw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||H_,s)}function _w(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||B_,s)}function yw(o){switch(o){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return rw;case 35675:return sw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return fw;case 36294:return hw;case 36295:return dw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return _w}}function xw(o,e){o.uniform1fv(this.addr,e)}function Sw(o,e){const t=Po(e,this.size,2);o.uniform2fv(this.addr,t)}function Mw(o,e){const t=Po(e,this.size,3);o.uniform3fv(this.addr,t)}function Ew(o,e){const t=Po(e,this.size,4);o.uniform4fv(this.addr,t)}function Tw(o,e){const t=Po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ww(o,e){const t=Po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Aw(o,e){const t=Po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Rw(o,e){o.uniform1iv(this.addr,e)}function Cw(o,e){o.uniform2iv(this.addr,e)}function bw(o,e){o.uniform3iv(this.addr,e)}function Pw(o,e){o.uniform4iv(this.addr,e)}function Lw(o,e){o.uniform1uiv(this.addr,e)}function Nw(o,e){o.uniform2uiv(this.addr,e)}function Iw(o,e){o.uniform3uiv(this.addr,e)}function Dw(o,e){o.uniform4uiv(this.addr,e)}function Uw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);cn(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||k_,a[c])}function Fw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);cn(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||z_,a[c])}function Ow(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);cn(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||H_,a[c])}function kw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);cn(i,a)||(o.uniform1iv(this.addr,a),un(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||B_,a[c])}function Bw(o){switch(o){case 5126:return xw;case 35664:return Sw;case 35665:return Mw;case 35666:return Ew;case 35674:return Tw;case 35675:return ww;case 35676:return Aw;case 5124:case 35670:return Rw;case 35667:case 35671:return Cw;case 35668:case 35672:return bw;case 35669:case 35673:return Pw;case 5125:return Lw;case 36294:return Nw;case 36295:return Iw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return kw}}class zw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yw(t.type)}}class Hw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bw(t.type)}}class Vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function yv(o,e){o.seq.push(e),o.map[e.id]=e}function Gw(o,e,t){const i=o.name,s=i.length;for(eh.lastIndex=0;;){const a=eh.exec(i),c=eh.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===s){yv(t,d===void 0?new zw(u,o,e):new Hw(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new Vw(u),yv(t,g)),t=g}}}class Ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);Gw(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function xv(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const Ww=37297;let Xw=0;function jw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Sv=new gt;function qw(o){Rt._getMatrix(Sv,Rt.workingColorSpace,o);const e=`mat3( ${Sv.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(o)){case Cc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Mv(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+jw(o.getShaderSource(e),c)}else return s}function Yw(o,e){const t=qw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kw(o,e){let t;switch(e){case wx:t="Linear";break;case Ax:t="Reinhard";break;case Rx:t="Cineon";break;case Yv:t="ACESFilmic";break;case bx:t="AgX";break;case Px:t="Neutral";break;case Cx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yc=new G;function $w(){Rt.getLuminanceCoefficients(yc);const o=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Jw(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function xa(o){return o!==""}function Ev(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(o){return o.replace(eA,nA)}const tA=new Map;function nA(o,e){let t=_t[e];if(t===void 0){const i=tA.get(e);if(i!==void 0)t=_t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jh(t)}const iA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wv(o){return o.replace(iA,rA)}function rA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Av(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function sA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function oA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function lA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qv:e="ENVMAP_BLENDING_MULTIPLY";break;case Ex:e="ENVMAP_BLENDING_MIX";break;case Tx:e="ENVMAP_BLENDING_ADD";break}return e}function cA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uA(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=sA(t),d=oA(t),p=aA(t),g=lA(t),v=cA(t),y=Zw(t),M=Jw(a),E=s.createProgram();let S,x,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(xa).join(`
`),x.length>0&&(x+=`
`)):(S=[Av(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),x=[Av(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?_t.tonemapping_pars_fragment:"",t.toneMapping!==zr?Kw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Yw("linearToOutputTexel",t.outputColorSpace),$w(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),c=Jh(c),c=Ev(c,t),c=Tv(c,t),u=Jh(u),u=Ev(u,t),u=Tv(u,t),c=wv(c),u=wv(u),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=N+S+c,w=N+x+u,z=xv(s,s.VERTEX_SHADER,P),O=xv(s,s.FRAGMENT_SHADER,w);s.attachShader(E,z),s.attachShader(E,O),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(k){if(o.debug.checkShaderErrors){const Q=s.getProgramInfoLog(E).trim(),Y=s.getShaderInfoLog(z).trim(),te=s.getShaderInfoLog(O).trim();let ae=!0,ee=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ae=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,z,O);else{const le=Mv(s,z,"vertex"),H=Mv(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Q+`
`+le+`
`+H)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||te==="")&&(ee=!1);ee&&(k.diagnostics={runnable:ae,programLog:Q,vertexShader:{log:Y,prefix:S},fragmentShader:{log:te,prefix:x}})}s.deleteShader(z),s.deleteShader(O),F=new Ac(s,E),C=Qw(s,E)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,Ww)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=O,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dA(e),t.set(e,i)),i}}class dA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function pA(o,e,t,i,s,a,c){const u=new d_,h=new hA,d=new Set,p=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return d.add(C),C===0?"uv":`uv${C}`}function S(C,R,k,Q,Y){const te=Q.fog,ae=Y.geometry,ee=C.isMeshStandardMaterial?Q.environment:null,le=(C.isMeshStandardMaterial?t:e).get(C.envMap||ee),H=le&&le.mapping===Nc?le.image.height:null,ue=M[C.type];C.precision!==null&&(y=s.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const oe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,B=oe!==void 0?oe.length:0;let ne=0;ae.morphAttributes.position!==void 0&&(ne=1),ae.morphAttributes.normal!==void 0&&(ne=2),ae.morphAttributes.color!==void 0&&(ne=3);let Oe,J,fe,xe;if(ue){const Ct=Ii[ue];Oe=Ct.vertexShader,J=Ct.fragmentShader}else Oe=C.vertexShader,J=C.fragmentShader,h.update(C),fe=h.getVertexShaderID(C),xe=h.getFragmentShaderID(C);const me=o.getRenderTarget(),Pe=o.state.buffers.depth.getReversed(),Ce=Y.isInstancedMesh===!0,Ge=Y.isBatchedMesh===!0,vt=!!C.map,ge=!!C.matcap,Ae=!!le,D=!!C.aoMap,Je=!!C.lightMap,Ee=!!C.bumpMap,He=!!C.normalMap,be=!!C.displacementMap,nt=!!C.emissiveMap,Ue=!!C.metalnessMap,L=!!C.roughnessMap,A=C.anisotropy>0,$=C.clearcoat>0,he=C.dispersion>0,ve=C.iridescence>0,de=C.sheen>0,$e=C.transmission>0,Ne=A&&!!C.anisotropyMap,Ve=$&&!!C.clearcoatMap,pt=$&&!!C.clearcoatNormalMap,Te=$&&!!C.clearcoatRoughnessMap,qe=ve&&!!C.iridescenceMap,it=ve&&!!C.iridescenceThicknessMap,ot=de&&!!C.sheenColorMap,Ye=de&&!!C.sheenRoughnessMap,St=!!C.specularMap,ft=!!C.specularColorMap,Dt=!!C.specularIntensityMap,j=$e&&!!C.transmissionMap,Ie=$e&&!!C.thicknessMap,ce=!!C.gradientMap,pe=!!C.alphaMap,Be=C.alphaTest>0,ke=!!C.alphaHash,ht=!!C.extensions;let zt=zr;C.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(zt=o.toneMapping);const sn={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:Oe,fragmentShader:J,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&Y._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&Y.instanceColor!==null,instancingMorph:Ce&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:me===null?o.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:zn,alphaToCoverage:!!C.alphaToCoverage,map:vt,matcap:ge,envMap:Ae,envMapMode:Ae&&le.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Je,bumpMap:Ee,normalMap:He,displacementMap:v&&be,emissiveMap:nt,normalMapObjectSpace:He&&C.normalMapType===Fx,normalMapTangentSpace:He&&C.normalMapType===a_,metalnessMap:Ue,roughnessMap:L,anisotropy:A,anisotropyMap:Ne,clearcoat:$,clearcoatMap:Ve,clearcoatNormalMap:pt,clearcoatRoughnessMap:Te,dispersion:he,iridescence:ve,iridescenceMap:qe,iridescenceThicknessMap:it,sheen:de,sheenColorMap:ot,sheenRoughnessMap:Ye,specularMap:St,specularColorMap:ft,specularIntensityMap:Dt,transmission:$e,transmissionMap:j,thicknessMap:Ie,gradientMap:ce,opaque:C.transparent===!1&&C.blending===co&&C.alphaToCoverage===!1,alphaMap:pe,alphaTest:Be,alphaHash:ke,combine:C.combine,mapUv:vt&&E(C.map.channel),aoMapUv:D&&E(C.aoMap.channel),lightMapUv:Je&&E(C.lightMap.channel),bumpMapUv:Ee&&E(C.bumpMap.channel),normalMapUv:He&&E(C.normalMap.channel),displacementMapUv:be&&E(C.displacementMap.channel),emissiveMapUv:nt&&E(C.emissiveMap.channel),metalnessMapUv:Ue&&E(C.metalnessMap.channel),roughnessMapUv:L&&E(C.roughnessMap.channel),anisotropyMapUv:Ne&&E(C.anisotropyMap.channel),clearcoatMapUv:Ve&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(C.sheenRoughnessMap.channel),specularMapUv:St&&E(C.specularMap.channel),specularColorMapUv:ft&&E(C.specularColorMap.channel),specularIntensityMapUv:Dt&&E(C.specularIntensityMap.channel),transmissionMapUv:j&&E(C.transmissionMap.channel),thicknessMapUv:Ie&&E(C.thicknessMap.channel),alphaMapUv:pe&&E(C.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(He||A),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ae.attributes.uv&&(vt||pe),fog:!!te,useFog:C.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Pe,skinning:Y.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:zt,decodeVideoTexture:vt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===kt,decodeVideoTextureEmissive:nt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===kt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ui,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ht&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&C.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return sn.vertexUv1s=d.has(1),sn.vertexUv2s=d.has(2),sn.vertexUv3s=d.has(3),d.clear(),sn}function x(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)R.push(k),R.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(N(R,C),P(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function N(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function P(C,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),C.push(u.mask)}function w(C){const R=M[C.type];let k;if(R){const Q=Ii[R];k=RS.clone(Q.uniforms)}else k=C.uniforms;return k}function z(C,R){let k;for(let Q=0,Y=p.length;Q<Y;Q++){const te=p[Q];if(te.cacheKey===R){k=te,++k.usedTimes;break}}return k===void 0&&(k=new uA(o,R,C,a),p.push(k)),k}function O(C){if(--C.usedTimes===0){const R=p.indexOf(C);p[R]=p[p.length-1],p.pop(),C.destroy()}}function I(C){h.remove(C)}function F(){h.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:w,acquireProgram:z,releaseProgram:O,releaseShaderCache:I,programs:p,dispose:F}}function mA(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,h){o.get(c)[u]=h}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function gA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Rv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Cv(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,v,y,M,E,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=S),e++,x}function u(g,v,y,M,E,S){const x=c(g,v,y,M,E,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function h(g,v,y,M,E,S){const x=c(g,v,y,M,E,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function d(g,v){t.length>1&&t.sort(g||gA),i.length>1&&i.sort(v||Rv),s.length>1&&s.sort(v||Rv)}function p(){for(let g=e,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:h,finish:p,sort:d}}function vA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new Cv,o.set(i,[c])):s>=a.length?(c=new Cv,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function _A(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new ut};break;case"SpotLight":t={position:new G,direction:new G,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new G,halfWidth:new G,halfHeight:new G};break}return o[e.id]=t,t}}}function yA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let xA=0;function SA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function MA(o){const e=new _A,t=yA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new G);const s=new G,a=new mt,c=new mt;function u(d){let p=0,g=0,v=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let y=0,M=0,E=0,S=0,x=0,N=0,P=0,w=0,z=0,O=0,I=0;d.sort(SA);for(let C=0,R=d.length;C<R;C++){const k=d[C],Q=k.color,Y=k.intensity,te=k.distance,ae=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=Q.r*Y,g+=Q.g*Y,v+=Q.b*Y;else if(k.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(k.sh.coefficients[ee],Y);I++}else if(k.isDirectionalLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,H=t.get(k);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=ae,i.directionalShadowMatrix[y]=k.shadow.matrix,N++}i.directional[y]=ee,y++}else if(k.isSpotLight){const ee=e.get(k);ee.position.setFromMatrixPosition(k.matrixWorld),ee.color.copy(Q).multiplyScalar(Y),ee.distance=te,ee.coneCos=Math.cos(k.angle),ee.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ee.decay=k.decay,i.spot[E]=ee;const le=k.shadow;if(k.map&&(i.spotLightMap[z]=k.map,z++,le.updateMatrices(k),k.castShadow&&O++),i.spotLightMatrix[E]=le.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,i.spotShadow[E]=H,i.spotShadowMap[E]=ae,w++}E++}else if(k.isRectAreaLight){const ee=e.get(k);ee.color.copy(Q).multiplyScalar(Y),ee.halfWidth.set(k.width*.5,0,0),ee.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=ee,S++}else if(k.isPointLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),ee.distance=k.distance,ee.decay=k.decay,k.castShadow){const le=k.shadow,H=t.get(k);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,H.shadowCameraNear=le.camera.near,H.shadowCameraFar=le.camera.far,i.pointShadow[M]=H,i.pointShadowMap[M]=ae,i.pointShadowMatrix[M]=k.shadow.matrix,P++}i.point[M]=ee,M++}else if(k.isHemisphereLight){const ee=e.get(k);ee.skyColor.copy(k.color).multiplyScalar(Y),ee.groundColor.copy(k.groundColor).multiplyScalar(Y),i.hemi[x]=ee,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=v;const F=i.hash;(F.directionalLength!==y||F.pointLength!==M||F.spotLength!==E||F.rectAreaLength!==S||F.hemiLength!==x||F.numDirectionalShadows!==N||F.numPointShadows!==P||F.numSpotShadows!==w||F.numSpotMaps!==z||F.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=N,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=w+z-O,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=I,F.directionalLength=y,F.pointLength=M,F.spotLength=E,F.rectAreaLength=S,F.hemiLength=x,F.numDirectionalShadows=N,F.numPointShadows=P,F.numSpotShadows=w,F.numSpotMaps=z,F.numLightProbes=I,i.version=xA++)}function h(d,p){let g=0,v=0,y=0,M=0,E=0;const S=p.matrixWorldInverse;for(let x=0,N=d.length;x<N;x++){const P=d[x];if(P.isDirectionalLight){const w=i.directional[g];w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),g++}else if(P.isSpotLight){const w=i.spot[y];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(S),y++}else if(P.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),c.identity(),a.copy(P.matrixWorld),a.premultiply(S),c.extractRotation(a),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const w=i.point[v];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(S),v++}else if(P.isHemisphereLight){const w=i.hemi[E];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(S),E++}}}return{setup:u,setupView:h,state:i}}function bv(o){const e=new MA(o),t=[],i=[];function s(p){d.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function h(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function EA(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new bv(o),e.set(s,[u])):a>=c.length?(u=new bv(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
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
}`;function AA(o,e,t){let i=new md;const s=new Le,a=new Le,c=new It,u=new AM({depthPacking:Ux}),h=new RM,d={},p=t.maxTextureSize,g={[sr]:Yn,[Yn]:sr,[ui]:ui},v=new Vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:TA,fragmentShader:wA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new ti;M.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Gt(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv;let x=this.type;this.render=function(O,I,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Br),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=x!==er&&this.type===er,te=x===er&&this.type!==er;for(let ae=0,ee=O.length;ae<ee;ae++){const le=O[ae],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ue=H.getFrameExtents();if(s.multiply(ue),a.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ue.x),s.x=a.x*ue.x,H.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ue.y),s.y=a.y*ue.y,H.mapSize.y=a.y)),H.map===null||Y===!0||te===!0){const B=this.type!==er?{minFilter:kn,magFilter:kn}:{};H.map!==null&&H.map.dispose(),H.map=new ys(s.x,s.y,B),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const oe=H.getViewportCount();for(let B=0;B<oe;B++){const ne=H.getViewport(B);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),Q.viewport(c),H.updateMatrices(le,B),i=H.getFrustum(),w(I,F,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===er&&N(H,F),H.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(C,R,k)};function N(O,I){const F=e.update(E);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ys(s.x,s.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(I,null,F,v,E,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(I,null,F,y,E,null)}function P(O,I,F,C){let R=null;const k=F.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=F.isPointLight===!0?h:u,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Q=R.uuid,Y=I.uuid;let te=d[Q];te===void 0&&(te={},d[Q]=te);let ae=te[Y];ae===void 0&&(ae=R.clone(),te[Y]=ae,I.addEventListener("dispose",z)),R=ae}if(R.visible=I.visible,R.wireframe=I.wireframe,C===er?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:g[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=o.properties.get(R);Q.light=F}return R}function w(O,I,F,C,R){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===er)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,O.matrixWorld);const Y=e.update(O),te=O.material;if(Array.isArray(te)){const ae=Y.groups;for(let ee=0,le=ae.length;ee<le;ee++){const H=ae[ee],ue=te[H.materialIndex];if(ue&&ue.visible){const oe=P(O,ue,C,R);O.onBeforeShadow(o,O,I,F,Y,oe,H),o.renderBufferDirect(F,null,Y,oe,O,H),O.onAfterShadow(o,O,I,F,Y,oe,H)}}}else if(te.visible){const ae=P(O,te,C,R);O.onBeforeShadow(o,O,I,F,Y,ae,null),o.renderBufferDirect(F,null,Y,ae,O,null),O.onAfterShadow(o,O,I,F,Y,ae,null)}}const Q=O.children;for(let Y=0,te=Q.length;Y<te;Y++)w(Q[Y],I,F,C,R)}function z(O){O.target.removeEventListener("dispose",z);for(const F in d){const C=d[F],R=O.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const RA={[ch]:uh,[fh]:ph,[hh]:mh,[po]:dh,[uh]:ch,[ph]:fh,[mh]:hh,[dh]:po};function CA(o,e){function t(){let j=!1;const Ie=new It;let ce=null;const pe=new It(0,0,0,0);return{setMask:function(Be){ce!==Be&&!j&&(o.colorMask(Be,Be,Be,Be),ce=Be)},setLocked:function(Be){j=Be},setClear:function(Be,ke,ht,zt,sn){sn===!0&&(Be*=zt,ke*=zt,ht*=zt),Ie.set(Be,ke,ht,zt),pe.equals(Ie)===!1&&(o.clearColor(Be,ke,ht,zt),pe.copy(Ie))},reset:function(){j=!1,ce=null,pe.set(-1,0,0,0)}}}function i(){let j=!1,Ie=!1,ce=null,pe=null,Be=null;return{setReversed:function(ke){if(Ie!==ke){const ht=e.get("EXT_clip_control");Ie?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT);const zt=Be;Be=null,this.setClear(zt)}Ie=ke},getReversed:function(){return Ie},setTest:function(ke){ke?me(o.DEPTH_TEST):Pe(o.DEPTH_TEST)},setMask:function(ke){ce!==ke&&!j&&(o.depthMask(ke),ce=ke)},setFunc:function(ke){if(Ie&&(ke=RA[ke]),pe!==ke){switch(ke){case ch:o.depthFunc(o.NEVER);break;case uh:o.depthFunc(o.ALWAYS);break;case fh:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case hh:o.depthFunc(o.EQUAL);break;case dh:o.depthFunc(o.GEQUAL);break;case ph:o.depthFunc(o.GREATER);break;case mh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=ke}},setLocked:function(ke){j=ke},setClear:function(ke){Be!==ke&&(Ie&&(ke=1-ke),o.clearDepth(ke),Be=ke)},reset:function(){j=!1,ce=null,pe=null,Be=null,Ie=!1}}}function s(){let j=!1,Ie=null,ce=null,pe=null,Be=null,ke=null,ht=null,zt=null,sn=null;return{setTest:function(Ct){j||(Ct?me(o.STENCIL_TEST):Pe(o.STENCIL_TEST))},setMask:function(Ct){Ie!==Ct&&!j&&(o.stencilMask(Ct),Ie=Ct)},setFunc:function(Ct,Hn,bn){(ce!==Ct||pe!==Hn||Be!==bn)&&(o.stencilFunc(Ct,Hn,bn),ce=Ct,pe=Hn,Be=bn)},setOp:function(Ct,Hn,bn){(ke!==Ct||ht!==Hn||zt!==bn)&&(o.stencilOp(Ct,Hn,bn),ke=Ct,ht=Hn,zt=bn)},setLocked:function(Ct){j=Ct},setClear:function(Ct){sn!==Ct&&(o.clearStencil(Ct),sn=Ct)},reset:function(){j=!1,Ie=null,ce=null,pe=null,Be=null,ke=null,ht=null,zt=null,sn=null}}}const a=new t,c=new i,u=new s,h=new WeakMap,d=new WeakMap;let p={},g={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,N=null,P=null,w=null,z=null,O=null,I=new ut(0,0,0),F=0,C=!1,R=null,k=null,Q=null,Y=null,te=null;const ae=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,le=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(H)[1]),ee=le>=1):H.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ee=le>=2);let ue=null,oe={};const B=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Oe=new It().fromArray(B),J=new It().fromArray(ne);function fe(j,Ie,ce,pe){const Be=new Uint8Array(4),ke=o.createTexture();o.bindTexture(j,ke),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ht=0;ht<ce;ht++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ie,0,o.RGBA,1,1,pe,0,o.RGBA,o.UNSIGNED_BYTE,Be):o.texImage2D(Ie+ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Be);return ke}const xe={};xe[o.TEXTURE_2D]=fe(o.TEXTURE_2D,o.TEXTURE_2D,1),xe[o.TEXTURE_CUBE_MAP]=fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[o.TEXTURE_2D_ARRAY]=fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xe[o.TEXTURE_3D]=fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(o.DEPTH_TEST),c.setFunc(po),Ee(!1),He(lg),me(o.CULL_FACE),D(Br);function me(j){p[j]!==!0&&(o.enable(j),p[j]=!0)}function Pe(j){p[j]!==!1&&(o.disable(j),p[j]=!1)}function Ce(j,Ie){return g[j]!==Ie?(o.bindFramebuffer(j,Ie),g[j]=Ie,j===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ie),j===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ge(j,Ie){let ce=y,pe=!1;if(j){ce=v.get(Ie),ce===void 0&&(ce=[],v.set(Ie,ce));const Be=j.textures;if(ce.length!==Be.length||ce[0]!==o.COLOR_ATTACHMENT0){for(let ke=0,ht=Be.length;ke<ht;ke++)ce[ke]=o.COLOR_ATTACHMENT0+ke;ce.length=Be.length,pe=!0}}else ce[0]!==o.BACK&&(ce[0]=o.BACK,pe=!0);pe&&o.drawBuffers(ce)}function vt(j){return M!==j?(o.useProgram(j),M=j,!0):!1}const ge={[gs]:o.FUNC_ADD,[ox]:o.FUNC_SUBTRACT,[ax]:o.FUNC_REVERSE_SUBTRACT};ge[lx]=o.MIN,ge[cx]=o.MAX;const Ae={[ux]:o.ZERO,[fx]:o.ONE,[hx]:o.SRC_COLOR,[ah]:o.SRC_ALPHA,[_x]:o.SRC_ALPHA_SATURATE,[gx]:o.DST_COLOR,[px]:o.DST_ALPHA,[dx]:o.ONE_MINUS_SRC_COLOR,[lh]:o.ONE_MINUS_SRC_ALPHA,[vx]:o.ONE_MINUS_DST_COLOR,[mx]:o.ONE_MINUS_DST_ALPHA,[yx]:o.CONSTANT_COLOR,[xx]:o.ONE_MINUS_CONSTANT_COLOR,[Sx]:o.CONSTANT_ALPHA,[Mx]:o.ONE_MINUS_CONSTANT_ALPHA};function D(j,Ie,ce,pe,Be,ke,ht,zt,sn,Ct){if(j===Br){E===!0&&(Pe(o.BLEND),E=!1);return}if(E===!1&&(me(o.BLEND),E=!0),j!==sx){if(j!==S||Ct!==C){if((x!==gs||w!==gs)&&(o.blendEquation(o.FUNC_ADD),x=gs,w=gs),Ct)switch(j){case co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cg:o.blendFunc(o.ONE,o.ONE);break;case ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case fg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case cg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case ug:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case fg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}N=null,P=null,z=null,O=null,I.set(0,0,0),F=0,S=j,C=Ct}return}Be=Be||Ie,ke=ke||ce,ht=ht||pe,(Ie!==x||Be!==w)&&(o.blendEquationSeparate(ge[Ie],ge[Be]),x=Ie,w=Be),(ce!==N||pe!==P||ke!==z||ht!==O)&&(o.blendFuncSeparate(Ae[ce],Ae[pe],Ae[ke],Ae[ht]),N=ce,P=pe,z=ke,O=ht),(zt.equals(I)===!1||sn!==F)&&(o.blendColor(zt.r,zt.g,zt.b,sn),I.copy(zt),F=sn),S=j,C=!1}function Je(j,Ie){j.side===ui?Pe(o.CULL_FACE):me(o.CULL_FACE);let ce=j.side===Yn;Ie&&(ce=!ce),Ee(ce),j.blending===co&&j.transparent===!1?D(Br):D(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),a.setMask(j.colorWrite);const pe=j.stencilWrite;u.setTest(pe),pe&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),nt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?me(o.SAMPLE_ALPHA_TO_COVERAGE):Pe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(j){R!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),R=j)}function He(j){j!==ix?(me(o.CULL_FACE),j!==k&&(j===lg?o.cullFace(o.BACK):j===rx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pe(o.CULL_FACE),k=j}function be(j){j!==Q&&(ee&&o.lineWidth(j),Q=j)}function nt(j,Ie,ce){j?(me(o.POLYGON_OFFSET_FILL),(Y!==Ie||te!==ce)&&(o.polygonOffset(Ie,ce),Y=Ie,te=ce)):Pe(o.POLYGON_OFFSET_FILL)}function Ue(j){j?me(o.SCISSOR_TEST):Pe(o.SCISSOR_TEST)}function L(j){j===void 0&&(j=o.TEXTURE0+ae-1),ue!==j&&(o.activeTexture(j),ue=j)}function A(j,Ie,ce){ce===void 0&&(ue===null?ce=o.TEXTURE0+ae-1:ce=ue);let pe=oe[ce];pe===void 0&&(pe={type:void 0,texture:void 0},oe[ce]=pe),(pe.type!==j||pe.texture!==Ie)&&(ue!==ce&&(o.activeTexture(ce),ue=ce),o.bindTexture(j,Ie||xe[j]),pe.type=j,pe.texture=Ie)}function $(){const j=oe[ue];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function he(){try{o.compressedTexImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{o.compressedTexImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{o.texSubImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $e(){try{o.texSubImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ne(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ve(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{o.texStorage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{o.texStorage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{o.texImage2D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function it(){try{o.texImage3D.apply(o,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ot(j){Oe.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),Oe.copy(j))}function Ye(j){J.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),J.copy(j))}function St(j,Ie){let ce=d.get(Ie);ce===void 0&&(ce=new WeakMap,d.set(Ie,ce));let pe=ce.get(j);pe===void 0&&(pe=o.getUniformBlockIndex(Ie,j.name),ce.set(j,pe))}function ft(j,Ie){const pe=d.get(Ie).get(j);h.get(Ie)!==pe&&(o.uniformBlockBinding(Ie,pe,j.__bindingPointIndex),h.set(Ie,pe))}function Dt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},ue=null,oe={},g={},v=new WeakMap,y=[],M=null,E=!1,S=null,x=null,N=null,P=null,w=null,z=null,O=null,I=new ut(0,0,0),F=0,C=!1,R=null,k=null,Q=null,Y=null,te=null,Oe.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:me,disable:Pe,bindFramebuffer:Ce,drawBuffers:Ge,useProgram:vt,setBlending:D,setMaterial:Je,setFlipSided:Ee,setCullFace:He,setLineWidth:be,setPolygonOffset:nt,setScissorTest:Ue,activeTexture:L,bindTexture:A,unbindTexture:$,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:qe,texImage3D:it,updateUBOMapping:St,uniformBlockBinding:ft,texStorage2D:pt,texStorage3D:Te,texSubImage2D:de,texSubImage3D:$e,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Ve,scissor:ot,viewport:Ye,reset:Dt}}function bA(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Le,p=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,A){return y?new OffscreenCanvas(L,A):ba("canvas")}function E(L,A,$){let he=1;const ve=Ue(L);if((ve.width>$||ve.height>$)&&(he=$/Math.max(ve.width,ve.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(he*ve.width),$e=Math.floor(he*ve.height);g===void 0&&(g=M(de,$e));const Ne=A?M(de,$e):g;return Ne.width=de,Ne.height=$e,Ne.getContext("2d").drawImage(L,0,0,de,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+$e+")."),Ne}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,A,$,he,ve=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=A;if(A===o.RED&&($===o.FLOAT&&(de=o.R32F),$===o.HALF_FLOAT&&(de=o.R16F),$===o.UNSIGNED_BYTE&&(de=o.R8)),A===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.R8UI),$===o.UNSIGNED_SHORT&&(de=o.R16UI),$===o.UNSIGNED_INT&&(de=o.R32UI),$===o.BYTE&&(de=o.R8I),$===o.SHORT&&(de=o.R16I),$===o.INT&&(de=o.R32I)),A===o.RG&&($===o.FLOAT&&(de=o.RG32F),$===o.HALF_FLOAT&&(de=o.RG16F),$===o.UNSIGNED_BYTE&&(de=o.RG8)),A===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RG8UI),$===o.UNSIGNED_SHORT&&(de=o.RG16UI),$===o.UNSIGNED_INT&&(de=o.RG32UI),$===o.BYTE&&(de=o.RG8I),$===o.SHORT&&(de=o.RG16I),$===o.INT&&(de=o.RG32I)),A===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RGB8UI),$===o.UNSIGNED_SHORT&&(de=o.RGB16UI),$===o.UNSIGNED_INT&&(de=o.RGB32UI),$===o.BYTE&&(de=o.RGB8I),$===o.SHORT&&(de=o.RGB16I),$===o.INT&&(de=o.RGB32I)),A===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),$===o.UNSIGNED_INT&&(de=o.RGBA32UI),$===o.BYTE&&(de=o.RGBA8I),$===o.SHORT&&(de=o.RGBA16I),$===o.INT&&(de=o.RGBA32I)),A===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),A===o.RGBA){const $e=ve?Cc:Rt.getTransfer(he);$===o.FLOAT&&(de=o.RGBA32F),$===o.HALF_FLOAT&&(de=o.RGBA16F),$===o.UNSIGNED_BYTE&&(de=$e===kt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function w(L,A){let $;return L?A===null||A===_s||A===_o?$=o.DEPTH24_STENCIL8:A===wi?$=o.DEPTH32F_STENCIL8:A===Aa&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_s||A===_o?$=o.DEPTH_COMPONENT24:A===wi?$=o.DEPTH_COMPONENT32F:A===Aa&&($=o.DEPTH_COMPONENT16),$}function z(L,A){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==kn&&L.minFilter!==yn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),F(A),A.isVideoTexture&&p.delete(A)}function I(L){const A=L.target;A.removeEventListener("dispose",I),R(A)}function F(L){const A=i.get(L);if(A.__webglInit===void 0)return;const $=L.source,he=v.get($);if(he){const ve=he[A.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(L),Object.keys(he).length===0&&v.delete($)}i.remove(L)}function C(L){const A=i.get(L);o.deleteTexture(A.__webglTexture);const $=L.source,he=v.get($);delete he[A.__cacheKey],c.memory.textures--}function R(L){const A=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let ve=0;ve<A.__webglFramebuffer[he].length;ve++)o.deleteFramebuffer(A.__webglFramebuffer[he][ve]);else o.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)o.deleteFramebuffer(A.__webglFramebuffer[he]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=L.textures;for(let he=0,ve=$.length;he<ve;he++){const de=i.get($[he]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),c.memory.textures--),i.remove($[he])}i.remove(L)}let k=0;function Q(){k=0}function Y(){const L=k;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),k+=1,L}function te(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ae(L,A){const $=i.get(L);if(L.isVideoTexture&&be(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J($,L,A);return}}t.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+A)}function ee(L,A){const $=i.get(L);if(L.version>0&&$.__version!==L.version){J($,L,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+A)}function le(L,A){const $=i.get(L);if(L.version>0&&$.__version!==L.version){J($,L,A);return}t.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+A)}function H(L,A){const $=i.get(L);if(L.version>0&&$.__version!==L.version){fe($,L,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+A)}const ue={[vo]:o.REPEAT,[Di]:o.CLAMP_TO_EDGE,[Rc]:o.MIRRORED_REPEAT},oe={[kn]:o.NEAREST,[$v]:o.NEAREST_MIPMAP_NEAREST,[ya]:o.NEAREST_MIPMAP_LINEAR,[yn]:o.LINEAR,[xc]:o.LINEAR_MIPMAP_NEAREST,[nr]:o.LINEAR_MIPMAP_LINEAR},B={[Ox]:o.NEVER,[Gx]:o.ALWAYS,[kx]:o.LESS,[l_]:o.LEQUAL,[Bx]:o.EQUAL,[Vx]:o.GEQUAL,[zx]:o.GREATER,[Hx]:o.NOTEQUAL};function ne(L,A){if(A.type===wi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===yn||A.magFilter===xc||A.magFilter===ya||A.magFilter===nr||A.minFilter===yn||A.minFilter===xc||A.minFilter===ya||A.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ue[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ue[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ue[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,oe[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===kn||A.minFilter!==ya&&A.minFilter!==nr||A.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Oe(L,A){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const he=A.source;let ve=v.get(he);ve===void 0&&(ve={},v.set(he,ve));const de=te(A);if(de!==L.__cacheKey){ve[de]===void 0&&(ve[de]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ve[de].usedTimes++;const $e=ve[L.__cacheKey];$e!==void 0&&(ve[L.__cacheKey].usedTimes--,$e.usedTimes===0&&C(A)),L.__cacheKey=de,L.__webglTexture=ve[de].texture}return $}function J(L,A,$){let he=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=o.TEXTURE_3D);const ve=Oe(L,A),de=A.source;t.bindTexture(he,L.__webglTexture,o.TEXTURE0+$);const $e=i.get(de);if(de.version!==$e.__version||ve===!0){t.activeTexture(o.TEXTURE0+$);const Ne=Rt.getPrimaries(Rt.workingColorSpace),Ve=A.colorSpace===Fr?null:Rt.getPrimaries(A.colorSpace),pt=A.colorSpace===Fr||Ne===Ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Te=E(A.image,!1,s.maxTextureSize);Te=nt(A,Te);const qe=a.convert(A.format,A.colorSpace),it=a.convert(A.type);let ot=P(A.internalFormat,qe,it,A.colorSpace,A.isVideoTexture);ne(he,A);let Ye;const St=A.mipmaps,ft=A.isVideoTexture!==!0,Dt=$e.__version===void 0||ve===!0,j=de.dataReady,Ie=z(A,Te);if(A.isDepthTexture)ot=w(A.format===yo,A.type),Dt&&(ft?t.texStorage2D(o.TEXTURE_2D,1,ot,Te.width,Te.height):t.texImage2D(o.TEXTURE_2D,0,ot,Te.width,Te.height,0,qe,it,null));else if(A.isDataTexture)if(St.length>0){ft&&Dt&&t.texStorage2D(o.TEXTURE_2D,Ie,ot,St[0].width,St[0].height);for(let ce=0,pe=St.length;ce<pe;ce++)Ye=St[ce],ft?j&&t.texSubImage2D(o.TEXTURE_2D,ce,0,0,Ye.width,Ye.height,qe,it,Ye.data):t.texImage2D(o.TEXTURE_2D,ce,ot,Ye.width,Ye.height,0,qe,it,Ye.data);A.generateMipmaps=!1}else ft?(Dt&&t.texStorage2D(o.TEXTURE_2D,Ie,ot,Te.width,Te.height),j&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Te.width,Te.height,qe,it,Te.data)):t.texImage2D(o.TEXTURE_2D,0,ot,Te.width,Te.height,0,qe,it,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ft&&Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ot,St[0].width,St[0].height,Te.depth);for(let ce=0,pe=St.length;ce<pe;ce++)if(Ye=St[ce],A.format!==fi)if(qe!==null)if(ft){if(j)if(A.layerUpdates.size>0){const Be=sv(Ye.width,Ye.height,A.format,A.type);for(const ke of A.layerUpdates){const ht=Ye.data.subarray(ke*Be/Ye.data.BYTES_PER_ELEMENT,(ke+1)*Be/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,ke,Ye.width,Ye.height,1,qe,ht)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,Ye.width,Ye.height,Te.depth,qe,Ye.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ce,ot,Ye.width,Ye.height,Te.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?j&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ce,0,0,0,Ye.width,Ye.height,Te.depth,qe,it,Ye.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ce,ot,Ye.width,Ye.height,Te.depth,0,qe,it,Ye.data)}else{ft&&Dt&&t.texStorage2D(o.TEXTURE_2D,Ie,ot,St[0].width,St[0].height);for(let ce=0,pe=St.length;ce<pe;ce++)Ye=St[ce],A.format!==fi?qe!==null?ft?j&&t.compressedTexSubImage2D(o.TEXTURE_2D,ce,0,0,Ye.width,Ye.height,qe,Ye.data):t.compressedTexImage2D(o.TEXTURE_2D,ce,ot,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?j&&t.texSubImage2D(o.TEXTURE_2D,ce,0,0,Ye.width,Ye.height,qe,it,Ye.data):t.texImage2D(o.TEXTURE_2D,ce,ot,Ye.width,Ye.height,0,qe,it,Ye.data)}else if(A.isDataArrayTexture)if(ft){if(Dt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ie,ot,Te.width,Te.height,Te.depth),j)if(A.layerUpdates.size>0){const ce=sv(Te.width,Te.height,A.format,A.type);for(const pe of A.layerUpdates){const Be=Te.data.subarray(pe*ce/Te.data.BYTES_PER_ELEMENT,(pe+1)*ce/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pe,Te.width,Te.height,1,qe,it,Be)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,qe,it,Te.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,ot,Te.width,Te.height,Te.depth,0,qe,it,Te.data);else if(A.isData3DTexture)ft?(Dt&&t.texStorage3D(o.TEXTURE_3D,Ie,ot,Te.width,Te.height,Te.depth),j&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,qe,it,Te.data)):t.texImage3D(o.TEXTURE_3D,0,ot,Te.width,Te.height,Te.depth,0,qe,it,Te.data);else if(A.isFramebufferTexture){if(Dt)if(ft)t.texStorage2D(o.TEXTURE_2D,Ie,ot,Te.width,Te.height);else{let ce=Te.width,pe=Te.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(o.TEXTURE_2D,Be,ot,ce,pe,0,qe,it,null),ce>>=1,pe>>=1}}else if(St.length>0){if(ft&&Dt){const ce=Ue(St[0]);t.texStorage2D(o.TEXTURE_2D,Ie,ot,ce.width,ce.height)}for(let ce=0,pe=St.length;ce<pe;ce++)Ye=St[ce],ft?j&&t.texSubImage2D(o.TEXTURE_2D,ce,0,0,qe,it,Ye):t.texImage2D(o.TEXTURE_2D,ce,ot,qe,it,Ye);A.generateMipmaps=!1}else if(ft){if(Dt){const ce=Ue(Te);t.texStorage2D(o.TEXTURE_2D,Ie,ot,ce.width,ce.height)}j&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,qe,it,Te)}else t.texImage2D(o.TEXTURE_2D,0,ot,qe,it,Te);S(A)&&x(he),$e.__version=de.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function fe(L,A,$){if(A.image.length!==6)return;const he=Oe(L,A),ve=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+$);const de=i.get(ve);if(ve.version!==de.__version||he===!0){t.activeTexture(o.TEXTURE0+$);const $e=Rt.getPrimaries(Rt.workingColorSpace),Ne=A.colorSpace===Fr?null:Rt.getPrimaries(A.colorSpace),Ve=A.colorSpace===Fr||$e===Ne?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const pt=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,qe=[];for(let pe=0;pe<6;pe++)!pt&&!Te?qe[pe]=E(A.image[pe],!0,s.maxCubemapSize):qe[pe]=Te?A.image[pe].image:A.image[pe],qe[pe]=nt(A,qe[pe]);const it=qe[0],ot=a.convert(A.format,A.colorSpace),Ye=a.convert(A.type),St=P(A.internalFormat,ot,Ye,A.colorSpace),ft=A.isVideoTexture!==!0,Dt=de.__version===void 0||he===!0,j=ve.dataReady;let Ie=z(A,it);ne(o.TEXTURE_CUBE_MAP,A);let ce;if(pt){ft&&Dt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,St,it.width,it.height);for(let pe=0;pe<6;pe++){ce=qe[pe].mipmaps;for(let Be=0;Be<ce.length;Be++){const ke=ce[Be];A.format!==fi?ot!==null?ft?j&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,ke.width,ke.height,ot,ke.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,St,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,0,0,ke.width,ke.height,ot,Ye,ke.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be,St,ke.width,ke.height,0,ot,Ye,ke.data)}}}else{if(ce=A.mipmaps,ft&&Dt){ce.length>0&&Ie++;const pe=Ue(qe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Ie,St,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Te){ft?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,qe[pe].width,qe[pe].height,ot,Ye,qe[pe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,St,qe[pe].width,qe[pe].height,0,ot,Ye,qe[pe].data);for(let Be=0;Be<ce.length;Be++){const ht=ce[Be].image[pe].image;ft?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,ht.width,ht.height,ot,Ye,ht.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,St,ht.width,ht.height,0,ot,Ye,ht.data)}}else{ft?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ot,Ye,qe[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,St,ot,Ye,qe[pe]);for(let Be=0;Be<ce.length;Be++){const ke=ce[Be];ft?j&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,0,0,ot,Ye,ke.image[pe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be+1,St,ot,Ye,ke.image[pe])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),de.__version=ve.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function xe(L,A,$,he,ve,de){const $e=a.convert($.format,$.colorSpace),Ne=a.convert($.type),Ve=P($.internalFormat,$e,Ne,$.colorSpace),pt=i.get(A),Te=i.get($);if(Te.__renderTarget=A,!pt.__hasExternalTextures){const qe=Math.max(1,A.width>>de),it=Math.max(1,A.height>>de);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Ve,qe,it,A.depth,0,$e,Ne,null):t.texImage2D(ve,de,Ve,qe,it,0,$e,Ne,null)}t.bindFramebuffer(o.FRAMEBUFFER,L),He(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,ve,Te.__webglTexture,0,Ee(A)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,ve,Te.__webglTexture,de),t.bindFramebuffer(o.FRAMEBUFFER,null)}function me(L,A,$){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer){const he=A.depthTexture,ve=he&&he.isDepthTexture?he.type:null,de=w(A.stencilBuffer,ve),$e=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=Ee(A);He(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ne,de,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,de,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,de,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,$e,o.RENDERBUFFER,L)}else{const he=A.textures;for(let ve=0;ve<he.length;ve++){const de=he[ve],$e=a.convert(de.format,de.colorSpace),Ne=a.convert(de.type),Ve=P(de.internalFormat,$e,Ne,de.colorSpace),pt=Ee(A);$&&He(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,Ve,A.width,A.height):He(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,Ve,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ve,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pe(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=i.get(A.depthTexture);he.__renderTarget=A,(!he.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ae(A.depthTexture,0);const ve=he.__webglTexture,de=Ee(A);if(A.depthTexture.format===uo)He(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(A.depthTexture.format===yo)He(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,de):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const A=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const ve=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",ve)};he.addEventListener("dispose",ve),A.__depthDisposeCallback=ve}A.__boundDepthTexture=he}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Pe(A.__webglFramebuffer,L)}else if($){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=o.createRenderbuffer(),me(A.__webglDepthbuffer[he],L,!1);else{const ve=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,de)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),me(A.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ve),o.framebufferRenderbuffer(o.FRAMEBUFFER,he,o.RENDERBUFFER,ve)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(L,A,$){const he=i.get(L);A!==void 0&&xe(he.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ce(L)}function vt(L){const A=L.texture,$=i.get(L),he=i.get(A);L.addEventListener("dispose",I);const ve=L.textures,de=L.isWebGLCubeRenderTarget===!0,$e=ve.length>1;if($e||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=A.version,c.memory.textures++),de){$.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Ne]=[];for(let Ve=0;Ve<A.mipmaps.length;Ve++)$.__webglFramebuffer[Ne][Ve]=o.createFramebuffer()}else $.__webglFramebuffer[Ne]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)$.__webglFramebuffer[Ne]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if($e)for(let Ne=0,Ve=ve.length;Ne<Ve;Ne++){const pt=i.get(ve[Ne]);pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture(),c.memory.textures++)}if(L.samples>0&&He(L)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ve.length;Ne++){const Ve=ve[Ne];$.__webglColorRenderbuffer[Ne]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ne]);const pt=a.convert(Ve.format,Ve.colorSpace),Te=a.convert(Ve.type),qe=P(Ve.internalFormat,pt,Te,Ve.colorSpace,L.isXRRenderTarget===!0),it=Ee(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,it,qe,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ne,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ne])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),me($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ne(o.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)xe($.__webglFramebuffer[Ne][Ve],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ve);else xe($.__webglFramebuffer[Ne],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(A)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ne=0,Ve=ve.length;Ne<Ve;Ne++){const pt=ve[Ne],Te=i.get(pt);t.bindTexture(o.TEXTURE_2D,Te.__webglTexture),ne(o.TEXTURE_2D,pt),xe($.__webglFramebuffer,L,pt,o.COLOR_ATTACHMENT0+Ne,o.TEXTURE_2D,0),S(pt)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Ne=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ne,he.__webglTexture),ne(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Ve=0;Ve<A.mipmaps.length;Ve++)xe($.__webglFramebuffer[Ve],L,A,o.COLOR_ATTACHMENT0,Ne,Ve);else xe($.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,Ne,0);S(A)&&x(Ne),t.unbindTexture()}L.depthBuffer&&Ce(L)}function ge(L){const A=L.textures;for(let $=0,he=A.length;$<he;$++){const ve=A[$];if(S(ve)){const de=N(L),$e=i.get(ve).__webglTexture;t.bindTexture(de,$e),x(de),t.unbindTexture()}}}const Ae=[],D=[];function Je(L){if(L.samples>0){if(He(L)===!1){const A=L.textures,$=L.width,he=L.height;let ve=o.COLOR_BUFFER_BIT;const de=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,$e=i.get(L),Ne=A.length>1;if(Ne)for(let Ve=0;Ve<A.length;Ve++)t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ve=0;Ve<A.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Ne){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,$e.__webglColorRenderbuffer[Ve]);const pt=i.get(A[Ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pt,0)}o.blitFramebuffer(0,0,$,he,0,0,$,he,ve,o.NEAREST),h===!0&&(Ae.length=0,D.length=0,Ae.push(o.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ae.push(de),D.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,D)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ne)for(let Ve=0;Ve<A.length;Ve++){t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.RENDERBUFFER,$e.__webglColorRenderbuffer[Ve]);const pt=i.get(A[Ve]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,$e.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ve,o.TEXTURE_2D,pt,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const A=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Ee(L){return Math.min(s.maxSamples,L.samples)}function He(L){const A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function be(L){const A=c.render.frame;p.get(L)!==A&&(p.set(L,A),L.update())}function nt(L,A){const $=L.colorSpace,he=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==zn&&$!==Fr&&(Rt.getTransfer($)===kt?(he!==fi||ve!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=Y,this.resetTextureUnits=Q,this.setTexture2D=ae,this.setTexture2DArray=ee,this.setTexture3D=le,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=He}function PA(o,e){function t(i,s=Fr){let a;const c=Rt.getTransfer(s);if(i===or)return o.UNSIGNED_BYTE;if(i===od)return o.UNSIGNED_SHORT_4_4_4_4;if(i===ad)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Qv)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Zv)return o.BYTE;if(i===Jv)return o.SHORT;if(i===Aa)return o.UNSIGNED_SHORT;if(i===sd)return o.INT;if(i===_s)return o.UNSIGNED_INT;if(i===wi)return o.FLOAT;if(i===Ia)return o.HALF_FLOAT;if(i===e_)return o.ALPHA;if(i===t_)return o.RGB;if(i===fi)return o.RGBA;if(i===n_)return o.LUMINANCE;if(i===i_)return o.LUMINANCE_ALPHA;if(i===uo)return o.DEPTH_COMPONENT;if(i===yo)return o.DEPTH_STENCIL;if(i===ld)return o.RED;if(i===cd)return o.RED_INTEGER;if(i===r_)return o.RG;if(i===ud)return o.RG_INTEGER;if(i===fd)return o.RGBA_INTEGER;if(i===Sc||i===Mc||i===Ec||i===Tc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_h||i===yh||i===xh||i===Sh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mh||i===Eh||i===Th)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Mh||i===Eh)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Th)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wh||i===Ah||i===Rh||i===Ch||i===bh||i===Ph||i===Lh||i===Nh||i===Ih||i===Dh||i===Uh||i===Fh||i===Oh||i===kh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===wh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ah)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kh)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Bh||i===zh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===wc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===s_||i===Hh||i===Vh||i===Gh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===wc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Hh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const LA={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,i),x=this._getHandJoint(d,E);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=p.position.distanceTo(g.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(LA)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
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

}`;class DA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new rn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vr({vertexShader:NA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UA extends wo{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",h=1,d=null,p=null,g=null,v=null,y=null,M=null;const E=new DA,S=t.getContextAttributes();let x=null,N=null;const P=[],w=[],z=new Le;let O=null;const I=new Fn;I.viewport=new It;const F=new Fn;F.viewport=new It;const C=[I,F],R=new qM;let k=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=P[J];return fe===void 0&&(fe=new th,P[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=P[J];return fe===void 0&&(fe=new th,P[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=P[J];return fe===void 0&&(fe=new th,P[J]=fe),fe.getHandSpace()};function Y(J){const fe=w.indexOf(J.inputSource);if(fe===-1)return;const xe=P[fe];xe!==void 0&&(xe.update(J.inputSource,J.frame,d||c),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function te(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ae);for(let J=0;J<P.length;J++){const fe=w[J];fe!==null&&(w[J]=null,P[J].disconnect(fe))}k=null,Q=null,E.reset(),e.setRenderTarget(x),y=null,v=null,g=null,s=null,N=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ae),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new ys(y.framebufferWidth,y.framebufferHeight,{format:fi,type:or,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,xe=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?yo:uo,xe=S.stencil?_o:_s);const Pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};g=new XRWebGLBinding(s,t),v=g.createProjectionLayer(Pe),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new ys(v.textureWidth,v.textureHeight,{format:fi,type:or,depthTexture:new T_(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(u),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ae(J){for(let fe=0;fe<J.removed.length;fe++){const xe=J.removed[fe],me=w.indexOf(xe);me>=0&&(w[me]=null,P[me].disconnect(xe))}for(let fe=0;fe<J.added.length;fe++){const xe=J.added[fe];let me=w.indexOf(xe);if(me===-1){for(let Ce=0;Ce<P.length;Ce++)if(Ce>=w.length){w.push(xe),me=Ce;break}else if(w[Ce]===null){w[Ce]=xe,me=Ce;break}if(me===-1)break}const Pe=P[me];Pe&&Pe.connect(xe)}}const ee=new G,le=new G;function H(J,fe,xe){ee.setFromMatrixPosition(fe.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);const me=ee.distanceTo(le),Pe=fe.projectionMatrix.elements,Ce=xe.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),vt=Pe[14]/(Pe[10]+1),ge=(Pe[9]+1)/Pe[5],Ae=(Pe[9]-1)/Pe[5],D=(Pe[8]-1)/Pe[0],Je=(Ce[8]+1)/Ce[0],Ee=Ge*D,He=Ge*Je,be=me/(-D+Je),nt=be*-D;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(nt),J.translateZ(be),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Pe[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ue=Ge+be,L=vt+be,A=Ee-nt,$=He+(me-nt),he=ge*vt/L*Ue,ve=Ae*vt/L*Ue;J.projectionMatrix.makePerspective(A,$,he,ve,Ue,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let fe=J.near,xe=J.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(xe=E.depthFar)),R.near=F.near=I.near=fe,R.far=F.far=I.far=xe,(k!==R.near||Q!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,Q=R.far),I.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,R.layers.mask=I.layers.mask|F.layers.mask;const me=J.parent,Pe=R.cameras;ue(R,me);for(let Ce=0;Ce<Pe.length;Ce++)ue(Pe[Ce],me);Pe.length===2?H(R,I,F):R.projectionMatrix.copy(I.projectionMatrix),oe(J,R,me)};function oe(J,fe,xe){xe===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return h},this.setFoveation=function(J){h=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let B=null;function ne(J,fe){if(p=fe.getViewerPose(d||c),M=fe,p!==null){const xe=p.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let me=!1;xe.length!==R.cameras.length&&(R.cameras.length=0,me=!0);for(let Ce=0;Ce<xe.length;Ce++){const Ge=xe[Ce];let vt=null;if(y!==null)vt=y.getViewport(Ge);else{const Ae=g.getViewSubImage(v,Ge);vt=Ae.viewport,Ce===0&&(e.setRenderTargetTextures(N,Ae.colorTexture,v.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(N))}let ge=C[Ce];ge===void 0&&(ge=new Fn,ge.layers.enable(Ce),ge.viewport=new It,C[Ce]=ge),ge.matrix.fromArray(Ge.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ge.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(vt.x,vt.y,vt.width,vt.height),Ce===0&&(R.matrix.copy(ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),me===!0&&R.cameras.push(ge)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ce=g.getDepthInformation(xe[0]);Ce&&Ce.isValid&&Ce.texture&&E.init(e,Ce,s.renderState)}}for(let xe=0;xe<P.length;xe++){const me=w[xe],Pe=P[xe];me!==null&&Pe!==void 0&&Pe.update(me,fe,d||c)}B&&B(J,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Oe=new O_;Oe.setAnimationLoop(ne),this.setAnimationLoop=function(J){B=J},this.dispose=function(){}}}const fs=new On,FA=new mt;function OA(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,v_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,N,P,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x)):x.isMeshStandardMaterial?(a(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,w)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),E(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?h(S,x,N,P):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Yn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Yn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=e.get(x),P=N.envMap,w=N.envMapRotation;P&&(S.envMap.value=P,fs.copy(w),fs.x*=-1,fs.y*=-1,fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),S.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(fs)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,N,P){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=P*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function E(S,x){const N=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kA(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(N,P){const w=P.program;i.uniformBlockBinding(N,w)}function d(N,P){let w=s[N.id];w===void 0&&(M(N),w=p(N),s[N.id]=w,N.addEventListener("dispose",S));const z=P.program;i.updateUBOMapping(N,z);const O=e.render.frame;a[N.id]!==O&&(v(N),a[N.id]=O)}function p(N){const P=g();N.__bindingPointIndex=P;const w=o.createBuffer(),z=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,z,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,w),w}function g(){for(let N=0;N<u;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const P=s[N.id],w=N.uniforms,z=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let O=0,I=w.length;O<I;O++){const F=Array.isArray(w[O])?w[O]:[w[O]];for(let C=0,R=F.length;C<R;C++){const k=F[C];if(y(k,O,C,z)===!0){const Q=k.__offset,Y=Array.isArray(k.value)?k.value:[k.value];let te=0;for(let ae=0;ae<Y.length;ae++){const ee=Y[ae],le=E(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,o.bufferSubData(o.UNIFORM_BUFFER,Q+te,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):(ee.toArray(k.__data,te),te+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,P,w,z){const O=N.value,I=P+"_"+w;if(z[I]===void 0)return typeof O=="number"||typeof O=="boolean"?z[I]=O:z[I]=O.clone(),!0;{const F=z[I];if(typeof O=="number"||typeof O=="boolean"){if(F!==O)return z[I]=O,!0}else if(F.equals(O)===!1)return F.copy(O),!0}return!1}function M(N){const P=N.uniforms;let w=0;const z=16;for(let I=0,F=P.length;I<F;I++){const C=Array.isArray(P[I])?P[I]:[P[I]];for(let R=0,k=C.length;R<k;R++){const Q=C[R],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let te=0,ae=Y.length;te<ae;te++){const ee=Y[te],le=E(ee),H=w%z,ue=H%le.boundary,oe=H+ue;w+=ue,oe!==0&&z-oe<le.storage&&(w+=z-oe),Q.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=le.storage}}}const O=w%z;return O>0&&(w+=z-O),N.__size=w,N.__cache={},this}function E(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function S(N){const P=N.target;P.removeEventListener("dispose",S);const w=c.indexOf(P.__bindingPointIndex);c.splice(w,1),o.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function x(){for(const N in s)o.deleteBuffer(s[N]);c=[],s={},a={}}return{bind:h,update:d,dispose:x}}class BA{constructor(e={}){const{canvas:t=oS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,x=null;const N=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=zr,this.toneMappingExposure=1;const w=this;let z=!1,O=0,I=0,F=null,C=-1,R=null;const k=new It,Q=new It;let Y=null;const te=new ut(0);let ae=0,ee=t.width,le=t.height,H=1,ue=null,oe=null;const B=new It(0,0,ee,le),ne=new It(0,0,ee,le);let Oe=!1;const J=new md;let fe=!1,xe=!1;const me=new mt,Pe=new mt,Ce=new G,Ge=new It,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ae(){return F===null?H:1}let D=i;function Je(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",ke,!1),D===null){const q="webgl2";if(D=Je(q,b),D===null)throw Je(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ee,He,be,nt,Ue,L,A,$,he,ve,de,$e,Ne,Ve,pt,Te,qe,it,ot,Ye,St,ft,Dt,j;function Ie(){Ee=new Y1(D),Ee.init(),ft=new PA(D,Ee),He=new V1(D,Ee,e,ft),be=new CA(D,Ee),He.reverseDepthBuffer&&v&&be.buffers.depth.setReversed(!0),nt=new Z1(D),Ue=new mA,L=new bA(D,Ee,be,Ue,He,ft,nt),A=new W1(w),$=new q1(w),he=new rE(D),Dt=new z1(D,he),ve=new K1(D,he,nt,Dt),de=new Q1(D,ve,he,nt),ot=new J1(D,He,L),Te=new G1(Ue),$e=new pA(w,A,$,Ee,He,Dt,Te),Ne=new OA(w,Ue),Ve=new vA,pt=new EA(Ee),it=new B1(w,A,$,be,de,y,h),qe=new AA(w,de,He),j=new kA(D,nt,He,be),Ye=new H1(D,Ee,nt),St=new $1(D,Ee,nt),nt.programs=$e.programs,w.capabilities=He,w.extensions=Ee,w.properties=Ue,w.renderLists=Ve,w.shadowMap=qe,w.state=be,w.info=nt}Ie();const ce=new UA(w,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(ee,le,!1))},this.getSize=function(b){return b.set(ee,le)},this.setSize=function(b,q,re=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,le=q,t.width=Math.floor(b*H),t.height=Math.floor(q*H),re===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(ee*H,le*H).floor()},this.setDrawingBufferSize=function(b,q,re){ee=b,le=q,H=re,t.width=Math.floor(b*re),t.height=Math.floor(q*re),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(B)},this.setViewport=function(b,q,re,se){b.isVector4?B.set(b.x,b.y,b.z,b.w):B.set(b,q,re,se),be.viewport(k.copy(B).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,q,re,se){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,q,re,se),be.scissor(Q.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){be.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){ue=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(b=!0,q=!0,re=!0){let se=0;if(b){let W=!1;if(F!==null){const we=F.texture.format;W=we===fd||we===ud||we===cd}if(W){const we=F.texture.type,De=we===or||we===_s||we===Aa||we===_o||we===od||we===ad,We=it.getClearColor(),Xe=it.getClearAlpha(),at=We.r,lt=We.g,et=We.b;De?(M[0]=at,M[1]=lt,M[2]=et,M[3]=Xe,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=at,E[1]=lt,E[2]=et,E[3]=Xe,D.clearBufferiv(D.COLOR,0,E))}else se|=D.COLOR_BUFFER_BIT}q&&(se|=D.DEPTH_BUFFER_BIT),re&&(se|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),it.dispose(),Ve.dispose(),pt.dispose(),Ue.dispose(),A.dispose(),$.dispose(),de.dispose(),Dt.dispose(),j.dispose(),$e.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ss),ce.removeEventListener("sessionend",lr),ki.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const b=nt.autoReset,q=qe.enabled,re=qe.autoUpdate,se=qe.needsUpdate,W=qe.type;Ie(),nt.autoReset=b,qe.enabled=q,qe.autoUpdate=re,qe.needsUpdate=se,qe.type=W}function ke(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const q=b.target;q.removeEventListener("dispose",ht),zt(q)}function zt(b){sn(b),Ue.remove(b)}function sn(b){const q=Ue.get(b).programs;q!==void 0&&(q.forEach(function(re){$e.releaseProgram(re)}),b.isShaderMaterial&&$e.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,re,se,W,we){q===null&&(q=vt);const De=W.isMesh&&W.matrixWorld.determinant()<0,We=ka(b,q,re,se,W);be.setMaterial(se,De);let Xe=re.index,at=1;if(se.wireframe===!0){if(Xe=ve.getWireframeAttribute(re),Xe===void 0)return;at=2}const lt=re.drawRange,et=re.attributes.position;let dt=lt.start*at,Pt=(lt.start+lt.count)*at;we!==null&&(dt=Math.max(dt,we.start*at),Pt=Math.min(Pt,(we.start+we.count)*at)),Xe!==null?(dt=Math.max(dt,0),Pt=Math.min(Pt,Xe.count)):et!=null&&(dt=Math.max(dt,0),Pt=Math.min(Pt,et.count));const Lt=Pt-dt;if(Lt<0||Lt===1/0)return;Dt.setup(W,se,We,re,Xe);let Wt,At=Ye;if(Xe!==null&&(Wt=he.get(Xe),At=St,At.setIndex(Wt)),W.isMesh)se.wireframe===!0?(be.setLineWidth(se.wireframeLinewidth*Ae()),At.setMode(D.LINES)):At.setMode(D.TRIANGLES);else if(W.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),be.setLineWidth(tt*Ae()),W.isLineSegments?At.setMode(D.LINES):W.isLineLoop?At.setMode(D.LINE_LOOP):At.setMode(D.LINE_STRIP)}else W.isPoints?At.setMode(D.POINTS):W.isSprite&&At.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)At.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))At.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const tt=W._multiDrawStarts,$t=W._multiDrawCounts,wt=W._multiDrawCount,gn=Xe?he.get(Xe).bytesPerElement:1,di=Ue.get(se).currentProgram.getUniforms();for(let Pn=0;Pn<wt;Pn++)di.setValue(D,"_gl_DrawID",Pn),At.render(tt[Pn]/gn,$t[Pn])}else if(W.isInstancedMesh)At.renderInstances(dt,Lt,W.count);else if(re.isInstancedBufferGeometry){const tt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,$t=Math.min(re.instanceCount,tt);At.renderInstances(dt,Lt,$t)}else At.render(dt,Lt)};function Ct(b,q,re){b.transparent===!0&&b.side===ui&&b.forceSinglePass===!1?(b.side=Yn,b.needsUpdate=!0,Ms(b,q,re),b.side=sr,b.needsUpdate=!0,Ms(b,q,re),b.side=ui):Ms(b,q,re)}this.compile=function(b,q,re=null){re===null&&(re=b),x=pt.get(re),x.init(q),P.push(x),re.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),b!==re&&b.traverseVisible(function(W){W.isLight&&W.layers.test(q.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const se=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const we=W.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const We=we[De];Ct(We,re,W),se.add(We)}else Ct(we,re,W),se.add(we)}),P.pop(),x=null,se},this.compileAsync=function(b,q,re=null){const se=this.compile(b,q,re);return new Promise(W=>{function we(){if(se.forEach(function(De){Ue.get(De).currentProgram.isReady()&&se.delete(De)}),se.size===0){W(b);return}setTimeout(we,10)}Ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Hn=null;function bn(b){Hn&&Hn(b)}function Ss(){ki.stop()}function lr(){ki.start()}const ki=new O_;ki.setAnimationLoop(bn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(b){Hn=b,ce.setAnimationLoop(b),b===null?ki.stop():ki.start()},ce.addEventListener("sessionstart",Ss),ce.addEventListener("sessionend",lr),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,q,F),x=pt.get(b,P.length),x.init(q),P.push(x),Pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Pe),xe=this.localClippingEnabled,fe=Te.init(this.clippingPlanes,xe),S=Ve.get(b,N.length),S.init(),N.push(S),ce.enabled===!0&&ce.isPresenting===!0){const we=w.xr.getDepthSensingMesh();we!==null&&Bi(we,q,-1/0,w.sortObjects)}Bi(b,q,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(ue,oe),ge=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ge&&it.addToRenderList(S,b),this.info.render.frame++,fe===!0&&Te.beginShadows();const re=x.state.shadowsArray;qe.render(re,b,q),fe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,W=S.transmissive;if(x.setupLights(),q.isArrayCamera){const we=q.cameras;if(W.length>0)for(let De=0,We=we.length;De<We;De++){const Xe=we[De];Xr(se,W,b,Xe)}ge&&it.render(b);for(let De=0,We=we.length;De<We;De++){const Xe=we[De];Wr(S,b,Xe,Xe.viewport)}}else W.length>0&&Xr(se,W,b,q),ge&&it.render(b),Wr(S,b,q);F!==null&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(w,b,q),Dt.resetDefaultState(),C=-1,R=null,P.pop(),P.length>0?(x=P[P.length-1],fe===!0&&Te.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Bi(b,q,re,se){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)re=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){se&&Ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);const De=de.update(b),We=b.material;We.visible&&S.push(b,De,We,re,Ge.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const De=de.update(b),We=b.material;if(se&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ge.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ge.copy(De.boundingSphere.center)),Ge.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(We)){const Xe=De.groups;for(let at=0,lt=Xe.length;at<lt;at++){const et=Xe[at],dt=We[et.materialIndex];dt&&dt.visible&&S.push(b,De,dt,re,Ge.z,et)}}else We.visible&&S.push(b,De,We,re,Ge.z,null)}}const we=b.children;for(let De=0,We=we.length;De<We;De++)Bi(we[De],q,re,se)}function Wr(b,q,re,se){const W=b.opaque,we=b.transmissive,De=b.transparent;x.setupLightsView(re),fe===!0&&Te.setGlobalState(w.clippingPlanes,re),se&&be.viewport(k.copy(se)),W.length>0&&cr(W,q,re),we.length>0&&cr(we,q,re),De.length>0&&cr(De,q,re),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Xr(b,q,re,se){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[se.id]===void 0&&(x.state.transmissionRenderTarget[se.id]=new ys(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Ia:or,minFilter:nr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=x.state.transmissionRenderTarget[se.id],De=se.viewport||k;we.setSize(De.z,De.w);const We=w.getRenderTarget();w.setRenderTarget(we),w.getClearColor(te),ae=w.getClearAlpha(),ae<1&&w.setClearColor(16777215,.5),w.clear(),ge&&it.render(re);const Xe=w.toneMapping;w.toneMapping=zr;const at=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),x.setupLightsView(se),fe===!0&&Te.setGlobalState(w.clippingPlanes,se),cr(b,re,se),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let et=0,dt=q.length;et<dt;et++){const Pt=q[et],Lt=Pt.object,Wt=Pt.geometry,At=Pt.material,tt=Pt.group;if(At.side===ui&&Lt.layers.test(se.layers)){const $t=At.side;At.side=Yn,At.needsUpdate=!0,Fa(Lt,re,se,Wt,At,tt),At.side=$t,At.needsUpdate=!0,lt=!0}}lt===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}w.setRenderTarget(We),w.setClearColor(te,ae),at!==void 0&&(se.viewport=at),w.toneMapping=Xe}function cr(b,q,re){const se=q.isScene===!0?q.overrideMaterial:null;for(let W=0,we=b.length;W<we;W++){const De=b[W],We=De.object,Xe=De.geometry,at=se===null?De.material:se,lt=De.group;We.layers.test(re.layers)&&Fa(We,q,re,Xe,at,lt)}}function Fa(b,q,re,se,W,we){b.onBeforeRender(w,q,re,se,W,we),b.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(w,q,re,se,b,we),W.transparent===!0&&W.side===ui&&W.forceSinglePass===!1?(W.side=Yn,W.needsUpdate=!0,w.renderBufferDirect(re,q,se,W,b,we),W.side=sr,W.needsUpdate=!0,w.renderBufferDirect(re,q,se,W,b,we),W.side=ui):w.renderBufferDirect(re,q,se,W,b,we),b.onAfterRender(w,q,re,se,W,we)}function Ms(b,q,re){q.isScene!==!0&&(q=vt);const se=Ue.get(b),W=x.state.lights,we=x.state.shadowsArray,De=W.state.version,We=$e.getParameters(b,W.state,we,q,re),Xe=$e.getProgramCacheKey(We);let at=se.programs;se.environment=b.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(b.isMeshStandardMaterial?$:A).get(b.envMap||se.environment),se.envMapRotation=se.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,at===void 0&&(b.addEventListener("dispose",ht),at=new Map,se.programs=at);let lt=at.get(Xe);if(lt!==void 0){if(se.currentProgram===lt&&se.lightsStateVersion===De)return Ci(b,We),lt}else We.uniforms=$e.getUniforms(b),b.onBeforeCompile(We,w),lt=$e.acquireProgram(We,Xe),at.set(Xe,lt),se.uniforms=We.uniforms;const et=se.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=Te.uniform),Ci(b,We),se.needsLights=Oc(b),se.lightsStateVersion=De,se.needsLights&&(et.ambientLightColor.value=W.state.ambient,et.lightProbe.value=W.state.probe,et.directionalLights.value=W.state.directional,et.directionalLightShadows.value=W.state.directionalShadow,et.spotLights.value=W.state.spot,et.spotLightShadows.value=W.state.spotShadow,et.rectAreaLights.value=W.state.rectArea,et.ltc_1.value=W.state.rectAreaLTC1,et.ltc_2.value=W.state.rectAreaLTC2,et.pointLights.value=W.state.point,et.pointLightShadows.value=W.state.pointShadow,et.hemisphereLights.value=W.state.hemi,et.directionalShadowMap.value=W.state.directionalShadowMap,et.directionalShadowMatrix.value=W.state.directionalShadowMatrix,et.spotShadowMap.value=W.state.spotShadowMap,et.spotLightMatrix.value=W.state.spotLightMatrix,et.spotLightMap.value=W.state.spotLightMap,et.pointShadowMap.value=W.state.pointShadowMap,et.pointShadowMatrix.value=W.state.pointShadowMatrix),se.currentProgram=lt,se.uniformsList=null,lt}function Oa(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Ac.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Ci(b,q){const re=Ue.get(b);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function ka(b,q,re,se,W){q.isScene!==!0&&(q=vt),L.resetTextureUnits();const we=q.fog,De=se.isMeshStandardMaterial?q.environment:null,We=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zn,Xe=(se.isMeshStandardMaterial?$:A).get(se.envMap||De),at=se.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,lt=!!re.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,Pt=!!re.morphAttributes.color;let Lt=zr;se.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Lt=w.toneMapping);const Wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,At=Wt!==void 0?Wt.length:0,tt=Ue.get(se),$t=x.state.lights;if(fe===!0&&(xe===!0||b!==R)){const Jt=b===R&&se.id===C;Te.setState(se,b,Jt)}let wt=!1;se.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==$t.state.version||tt.outputColorSpace!==We||W.isBatchedMesh&&tt.batching===!1||!W.isBatchedMesh&&tt.batching===!0||W.isBatchedMesh&&tt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&tt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&tt.instancing===!1||!W.isInstancedMesh&&tt.instancing===!0||W.isSkinnedMesh&&tt.skinning===!1||!W.isSkinnedMesh&&tt.skinning===!0||W.isInstancedMesh&&tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&tt.instancingMorph===!1&&W.morphTexture!==null||tt.envMap!==Xe||se.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Te.numPlanes||tt.numIntersection!==Te.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==lt||tt.morphTargets!==et||tt.morphNormals!==dt||tt.morphColors!==Pt||tt.toneMapping!==Lt||tt.morphTargetsCount!==At)&&(wt=!0):(wt=!0,tt.__version=se.version);let gn=tt.currentProgram;wt===!0&&(gn=Ms(se,q,W));let di=!1,Pn=!1,jr=!1;const Ot=gn.getUniforms(),Ln=tt.uniforms;if(be.useProgram(gn.program)&&(di=!0,Pn=!0,jr=!0),se.id!==C&&(C=se.id,Pn=!0),di||R!==b){be.buffers.depth.getReversed()?(me.copy(b.projectionMatrix),lS(me),cS(me),Ot.setValue(D,"projectionMatrix",me)):Ot.setValue(D,"projectionMatrix",b.projectionMatrix),Ot.setValue(D,"viewMatrix",b.matrixWorldInverse);const Sn=Ot.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,Ce.setFromMatrixPosition(b.matrixWorld)),He.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Pn=!0,jr=!0)}if(W.isSkinnedMesh){Ot.setOptional(D,W,"bindMatrix"),Ot.setOptional(D,W,"bindMatrixInverse");const Jt=W.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Ot.setValue(D,"boneTexture",Jt.boneTexture,L))}W.isBatchedMesh&&(Ot.setOptional(D,W,"batchingTexture"),Ot.setValue(D,"batchingTexture",W._matricesTexture,L),Ot.setOptional(D,W,"batchingIdTexture"),Ot.setValue(D,"batchingIdTexture",W._indirectTexture,L),Ot.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Ot.setValue(D,"batchingColorTexture",W._colorsTexture,L));const xn=re.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&ot.update(W,re,gn),(Pn||tt.receiveShadow!==W.receiveShadow)&&(tt.receiveShadow=W.receiveShadow,Ot.setValue(D,"receiveShadow",W.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Ln.envMap.value=Xe,Ln.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(Ln.envMapIntensity.value=q.environmentIntensity),Pn&&(Ot.setValue(D,"toneMappingExposure",w.toneMappingExposure),tt.needsLights&&Ba(Ln,jr),we&&se.fog===!0&&Ne.refreshFogUniforms(Ln,we),Ne.refreshMaterialUniforms(Ln,se,H,le,x.state.transmissionRenderTarget[b.id]),Ac.upload(D,Oa(tt),Ln,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ac.upload(D,Oa(tt),Ln,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ot.setValue(D,"center",W.center),Ot.setValue(D,"modelViewMatrix",W.modelViewMatrix),Ot.setValue(D,"normalMatrix",W.normalMatrix),Ot.setValue(D,"modelMatrix",W.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Jt=se.uniformsGroups;for(let Sn=0,qr=Jt.length;Sn<qr;Sn++){const Et=Jt[Sn];j.update(Et,gn),j.bind(Et,gn)}}return gn}function Ba(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Oc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,q,re){Ue.get(b.texture).__webglTexture=q,Ue.get(b.depthTexture).__webglTexture=re;const se=Ue.get(b);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=re===void 0,se.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,q){const re=Ue.get(b);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,re=0){F=b,O=q,I=re;let se=!0,W=null,we=!1,De=!1;if(b){const Xe=Ue.get(b);if(Xe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),se=!1;else if(Xe.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(Xe.__hasExternalTextures)L.rebindTextures(b,Ue.get(b.texture).__webglTexture,Ue.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(Xe.__boundDepthTexture!==et){if(et!==null&&Ue.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const at=b.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(De=!0);const lt=Ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(lt[q])?W=lt[q][re]:W=lt[q],we=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?W=Ue.get(b).__webglMultisampledFramebuffer:Array.isArray(lt)?W=lt[re]:W=lt,k.copy(b.viewport),Q.copy(b.scissor),Y=b.scissorTest}else k.copy(B).multiplyScalar(H).floor(),Q.copy(ne).multiplyScalar(H).floor(),Y=Oe;if(be.bindFramebuffer(D.FRAMEBUFFER,W)&&se&&be.drawBuffers(b,W),be.viewport(k),be.scissor(Q),be.setScissorTest(Y),we){const Xe=Ue.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xe.__webglTexture,re)}else if(De){const Xe=Ue.get(b.texture),at=q||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xe.__webglTexture,re||0,at)}C=-1},this.readRenderTargetPixels=function(b,q,re,se,W,we,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(We=We[De]),We){be.bindFramebuffer(D.FRAMEBUFFER,We);try{const Xe=b.texture,at=Xe.format,lt=Xe.type;if(!He.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-se&&re>=0&&re<=b.height-W&&D.readPixels(q,re,se,W,ft.convert(at),ft.convert(lt),we)}finally{const Xe=F!==null?Ue.get(F).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(b,q,re,se,W,we,De){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(We=We[De]),We){const Xe=b.texture,at=Xe.format,lt=Xe.type;if(!He.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=b.width-se&&re>=0&&re<=b.height-W){be.bindFramebuffer(D.FRAMEBUFFER,We);const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,we.byteLength,D.STREAM_READ),D.readPixels(q,re,se,W,ft.convert(at),ft.convert(lt),0);const dt=F!==null?Ue.get(F).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,dt);const Pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await aS(D,Pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,we),D.deleteBuffer(et),D.deleteSync(Pt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,q=null,re=0){b.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1]);const se=Math.pow(2,-re),W=Math.floor(b.image.width*se),we=Math.floor(b.image.height*se),De=q!==null?q.x:0,We=q!==null?q.y:0;L.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,re,0,0,De,We,W,we),be.unbindTexture()};const za=D.createFramebuffer(),Ha=D.createFramebuffer();this.copyTextureToTexture=function(b,q,re=null,se=null,W=0,we=null){b.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,b=arguments[1],q=arguments[2],we=arguments[3]||0,re=null),we===null&&(W!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=W,W=0):we=0);let De,We,Xe,at,lt,et,dt,Pt,Lt;const Wt=b.isCompressedTexture?b.mipmaps[we]:b.image;if(re!==null)De=re.max.x-re.min.x,We=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,at=re.min.x,lt=re.min.y,et=re.isBox3?re.min.z:0;else{const xn=Math.pow(2,-W);De=Math.floor(Wt.width*xn),We=Math.floor(Wt.height*xn),b.isDataArrayTexture?Xe=Wt.depth:b.isData3DTexture?Xe=Math.floor(Wt.depth*xn):Xe=1,at=0,lt=0,et=0}se!==null?(dt=se.x,Pt=se.y,Lt=se.z):(dt=0,Pt=0,Lt=0);const At=ft.convert(q.format),tt=ft.convert(q.type);let $t;q.isData3DTexture?(L.setTexture3D(q,0),$t=D.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),$t=D.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),$t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment);const wt=D.getParameter(D.UNPACK_ROW_LENGTH),gn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),di=D.getParameter(D.UNPACK_SKIP_PIXELS),Pn=D.getParameter(D.UNPACK_SKIP_ROWS),jr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,at),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,et);const Ot=b.isDataArrayTexture||b.isData3DTexture,Ln=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const xn=Ue.get(b),Jt=Ue.get(q),Sn=Ue.get(xn.__renderTarget),qr=Ue.get(Jt.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,Sn.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let Et=0;Et<Xe;Et++)Ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.get(b).__webglTexture,W,et+Et),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.get(q).__webglTexture,we,Lt+Et)),D.blitFramebuffer(at,lt,De,We,dt,Pt,De,We,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Ue.has(b)){const xn=Ue.get(b),Jt=Ue.get(q);be.bindFramebuffer(D.READ_FRAMEBUFFER,za),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ha);for(let Sn=0;Sn<Xe;Sn++)Ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,W,et+Sn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,W),Ln?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,we,Lt+Sn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Jt.__webglTexture,we),W!==0?D.blitFramebuffer(at,lt,De,We,dt,Pt,De,We,D.COLOR_BUFFER_BIT,D.NEAREST):Ln?D.copyTexSubImage3D($t,we,dt,Pt,Lt+Sn,at,lt,De,We):D.copyTexSubImage2D($t,we,dt,Pt,at,lt,De,We);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ln?b.isDataTexture||b.isData3DTexture?D.texSubImage3D($t,we,dt,Pt,Lt,De,We,Xe,At,tt,Wt.data):q.isCompressedArrayTexture?D.compressedTexSubImage3D($t,we,dt,Pt,Lt,De,We,Xe,At,Wt.data):D.texSubImage3D($t,we,dt,Pt,Lt,De,We,Xe,At,tt,Wt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,we,dt,Pt,De,We,At,tt,Wt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,we,dt,Pt,Wt.width,Wt.height,At,Wt.data):D.texSubImage2D(D.TEXTURE_2D,we,dt,Pt,De,We,At,tt,Wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,di),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jr),we===0&&q.generateMipmaps&&D.generateMipmap($t),be.unbindTexture()},this.copyTextureToTexture3D=function(b,q,re=null,se=null,W=0){return b.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,se=arguments[1]||null,b=arguments[2],q=arguments[3],W=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,q,re,se,W)},this.initRenderTarget=function(b){Ue.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){O=0,I=0,F=null,be.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function Pv(o,e){if(e===Ix)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Wh||e===o_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let h=0;h<u.count;h++)c.push(h);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Wh)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class zA extends bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new XA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new tR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new iR(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new eR(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new sR(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=wa.extractUrlBase(e);c=wa.resolveURL(d,this.path)}else c=wa.extractUrlBase(e);this.manager.itemStart(e);const u=function(d){s?s(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},h=new D_(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{a.parse(d,c,function(p){t(p),a.manager.itemEnd(e)},u)}catch(p){u(p)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},h=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===V_){try{c[Tt.KHR_BINARY_GLTF]=new oR(e)}catch(g){s&&s(g);return}a=JSON.parse(c[Tt.KHR_BINARY_GLTF].content)}else a=JSON.parse(h.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new yR(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const g=this.pluginCallbacks[p](d);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let p=0;p<a.extensionsUsed.length;++p){const g=a.extensionsUsed[p],v=a.extensionsRequired||[];switch(g){case Tt.KHR_MATERIALS_UNLIT:c[g]=new GA;break;case Tt.KHR_DRACO_MESH_COMPRESSION:c[g]=new aR(a,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:c[g]=new lR;break;case Tt.KHR_MESH_QUANTIZATION:c[g]=new cR;break;default:v.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}d.setExtensions(c),d.setPlugins(u),d.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function HA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class VA{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,h=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const p=new ut(16777215);h.color!==void 0&&p.setRGB(h.color[0],h.color[1],h.color[2],zn);const g=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new Zh(p),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new F_(p),d.distance=g;break;case"spot":d=new GM(p),d.distance=g,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),d.decay=2,tr(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(d),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(h){return i._getNodeRef(t.cache,u,h)})}}class GA{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ai}extendParams(e,t,i){const s=[];e.color=new ut(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],zn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,nn))}return Promise.all(s)}}class WA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class XA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(u,u)}return Promise.all(a)}}class jA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class qA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class YA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],zn)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,nn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class KA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class $A{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(u[0],u[1],u[2],zn),Promise.all(a)}}class ZA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class JA{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(u[0],u[1],u[2],zn),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,nn)),Promise.all(a)}}class QA{constructor(e){this.parser=e,this.name=Tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class eR{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class tR{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class nR{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let h=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,h);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iR{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let h=i.textureLoader;if(u.uri){const d=i.options.manager.getHandler(u.uri);d!==null&&(h=d)}return this.detectSupport().then(function(d){if(d)return i.loadTextureImage(e,c.source,h);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rR{constructor(e){this.name=Tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const h=s.byteOffset||0,d=s.byteLength||0,p=s.count,g=s.byteStride,v=new Uint8Array(u,h,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(p,g,v,s.mode,s.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(p*g);return c.decodeGltfBuffer(new Uint8Array(y),p,g,v,s.mode,s.filter),y})})}else return null}}class sR{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==ci.TRIANGLES&&d.mode!==ci.TRIANGLE_STRIP&&d.mode!==ci.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],h={};for(const d in c)u.push(this.parser.getDependency("accessor",c[d]).then(p=>(h[d]=p,h[d])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(d=>{const p=d.pop(),g=p.isGroup?p.children:[p],v=d[0].count,y=[];for(const M of g){const E=new mt,S=new G,x=new Gr,N=new G(1,1,1),P=new kS(M.geometry,M.material,v);for(let w=0;w<v;w++)h.TRANSLATION&&S.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&x.fromBufferAttribute(h.ROTATION,w),h.SCALE&&N.fromBufferAttribute(h.SCALE,w),P.setMatrixAt(w,E.compose(S,x,N));for(const w in h)if(w==="_COLOR_0"){const z=h[w];P.instanceColor=new jh(z.array,z.itemSize,z.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&M.geometry.setAttribute(w,h[w]);jt.prototype.copy.call(P,M),this.parser.assignFinalMaterial(P),y.push(P)}return p.isGroup?(p.clear(),p.add(...y),p):y[0]}))}}const V_="glTF",_a=12,Lv={JSON:1313821514,BIN:5130562};class oR{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_a),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==V_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_a,a=new DataView(e,_a);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const h=a.getUint32(c,!0);if(c+=4,h===Lv.JSON){const d=new Uint8Array(e,_a+c,u);this.content=i.decode(d)}else if(h===Lv.BIN){const d=_a+c;this.body=e.slice(d,d+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},h={},d={};for(const p in c){const g=Qh[p]||p.toLowerCase();u[g]=c[p]}for(const p in e.attributes){const g=Qh[p]||p.toLowerCase();if(c[p]!==void 0){const v=i.accessors[e.attributes[p]],y=ho[v.componentType];d[g]=y.name,h[g]=v.normalized===!0}}return t.getDependency("bufferView",a).then(function(p){return new Promise(function(g,v){s.decodeDracoFile(p,function(y){for(const M in y.attributes){const E=y.attributes[M],S=h[M];S!==void 0&&(E.normalized=S)}g(y)},u,d,zn,v)})})}}class lR{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cR{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}}class G_ extends Ua{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=u*2,d=u*3,p=s-t,g=(i-t)/p,v=g*g,y=v*g,M=e*d,E=M-d,S=-2*y+3*v,x=y-v,N=1-S,P=x-v+g;for(let w=0;w!==u;w++){const z=c[E+w+u],O=c[E+w+h]*p,I=c[M+w+u],F=c[M+w]*p;a[w]=N*z+P*O+S*I+x*F}return a}}const uR=new Gr;class fR extends G_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return uR.fromArray(a).normalize().toArray(a),a}}const ci={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nv={9728:kn,9729:yn,9984:$v,9985:xc,9986:ya,9987:nr},Iv={33071:Di,33648:Rc,10497:vo},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ur={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hR={CUBICSPLINE:void 0,LINEAR:Ca,STEP:Ra},ih={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dR(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Ed({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sr})),o.DefaultMaterial}function hs(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function tr(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pR(o,e,t){let i=!1,s=!1,a=!1;for(let d=0,p=e.length;d<p;d++){const g=e[d];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],h=[];for(let d=0,p=e.length;d<p;d++){const g=e[d];if(i){const v=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(v)}if(s){const v=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(v)}if(a){const v=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;h.push(v)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(d){const p=d[0],g=d[1],v=d[2];return i&&(o.morphAttributes.position=p),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=v),o.morphTargetsRelative=!0,o})}function mR(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gR(o){let e;const t=o.extensions&&o.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rh(t.attributes):e=o.indices+":"+rh(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+rh(o.targets[i]);return e}function rh(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function ed(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vR(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const _R=new mt;class yR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const h=u.match(/Version\/(\d+)/);s=i&&h?parseInt(h[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new U_(this.options.manager):this.textureLoader=new jM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new D_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return hs(a,u,s),tr(u,s),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(u)})).then(function(){for(const h of u.scenes)h.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,h=c.length;u<h;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const h=this.associations.get(c);h!=null&&this.associations.set(u,h);for(const[d,p]of c.children.entries())a(p,u.children[d])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(wa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=nh[s.type],u=ho[s.componentType],h=s.normalized===!0,d=new u(s.count*c);return Promise.resolve(new Bn(d,c,h))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],h=nh[s.type],d=ho[s.componentType],p=d.BYTES_PER_ELEMENT,g=p*h,v=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,S;if(y&&y!==g){const x=Math.floor(v/y),N="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let P=t.cache.get(N);P||(E=new d(u,x*y,s.count*y/p),P=new IS(E,y/p),t.cache.add(N,P)),S=new dd(P,h,v%y/p,M)}else u===null?E=new d(s.count*h):E=new d(u,v,s.count*h),S=new Bn(E,h,M);if(s.sparse!==void 0){const x=nh.SCALAR,N=ho[s.sparse.indices.componentType],P=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,z=new N(c[1],P,s.sparse.count*x),O=new d(c[2],w,s.sparse.count*h);u!==null&&(S=new Bn(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let I=0,F=z.length;I<F;I++){const C=z[I];if(S.setX(C,O[I*h]),h>=2&&S.setY(C,O[I*h+1]),h>=3&&S.setZ(C,O[I*h+2]),h>=4&&S.setW(C,O[I*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const h=i.manager.getHandler(c.uri);h!==null&&(u=h)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],h=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,i).then(function(p){p.flipY=!1,p.name=c.name||u.name||"",p.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(p.name=u.uri);const v=(a.samplers||{})[c.sampler]||{};return p.magFilter=Nv[v.magFilter]||yn,p.minFilter=Nv[v.minFilter]||nr,p.wrapS=Iv[v.wrapS]||vo,p.wrapT=Iv[v.wrapT]||vo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==kn&&p.minFilter!==yn,s.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let h=c.uri||"",d=!1;if(c.bufferView!==void 0)h=i.getDependency("bufferView",c.bufferView).then(function(g){d=!0;const v=new Blob([g],{type:c.mimeType});return h=u.createObjectURL(v),h});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(h).then(function(g){return new Promise(function(v,y){let M=v;t.isImageBitmapLoader===!0&&(M=function(E){const S=new rn(E);S.needsUpdate=!0,v(S)}),t.load(wa.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return d===!0&&u.revokeObjectURL(h),tr(g,c),g.userData.mimeType=c.mimeType||vR(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),g});return this.sourceCache[e]=p,p}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[Tt.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const h=a.associations.get(c);c=a.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,h)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let h=this.cache.get(u);h||(h=new E_,Ri.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(u,h)),i=h}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let h=this.cache.get(u);h||(h=new M_,Ri.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(u,h)),i=h}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let h=this.cache.get(u);h||(h=i.clone(),a&&(h.vertexColors=!0),c&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(u,h),this.associations.set(h,this.associations.get(i))),i=h}e.material=i}getMaterialType(){return Ed}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},h=a.extensions||{},d=[];if(h[Tt.KHR_MATERIALS_UNLIT]){const g=s[Tt.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),d.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new ut(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const v=g.baseColorFactor;u.color.setRGB(v[0],v[1],v[2],zn),u.opacity=v[3]}g.baseColorTexture!==void 0&&d.push(t.assignTexture(u,"map",g.baseColorTexture,nn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),d.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=ui);const p=a.alphaMode||ih.OPAQUE;if(p===ih.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,p===ih.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Ai&&(d.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new Le(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==Ai&&(d.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Ai){const g=a.emissiveFactor;u.emissive=new ut().setRGB(g[0],g[1],g[2],zn)}return a.emissiveTexture!==void 0&&c!==Ai&&d.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,nn)),Promise.all(d).then(function(){const g=new c(u);return a.name&&(g.name=a.name),tr(g,a),t.associations.set(g,{materials:e}),a.extensions&&hs(s,g,a),g})}createUniqueName(e){const t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(h){return Dv(h,u,t)})}const c=[];for(let u=0,h=e.length;u<h;u++){const d=e[u],p=gR(d),g=s[p];if(g)c.push(g.promise);else{let v;d.extensions&&d.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?v=a(d):v=Dv(new ti,d,t),s[p]={primitive:d,promise:v},c.push(v)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h].material===void 0?dR(this.cache):this.getDependency("material",c[h].material);u.push(p)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(h){const d=h.slice(0,h.length-1),p=h[h.length-1],g=[];for(let y=0,M=p.length;y<M;y++){const E=p[y],S=c[y];let x;const N=d[y];if(S.mode===ci.TRIANGLES||S.mode===ci.TRIANGLE_STRIP||S.mode===ci.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new US(E,N):new Gt(E,N),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===ci.TRIANGLE_STRIP?x.geometry=Pv(x.geometry,o_):S.mode===ci.TRIANGLE_FAN&&(x.geometry=Pv(x.geometry,Wh));else if(S.mode===ci.LINES)x=new HS(E,N);else if(S.mode===ci.LINE_STRIP)x=new gd(E,N);else if(S.mode===ci.LINE_LOOP)x=new VS(E,N);else if(S.mode===ci.POINTS)x=new GS(E,N);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&mR(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),tr(x,a),S.extensions&&hs(s,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&hs(s,g[0],a),g[0];const v=new Or;a.extensions&&hs(s,v,a),t.associations.set(v,{meshes:e});for(let y=0,M=g.length;y<M;y++)v.add(g[y]);return v})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Fn(c_.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new wd(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),tr(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],h=[];for(let d=0,p=c.length;d<p;d++){const g=c[d];if(g){u.push(g);const v=new mt;a!==null&&v.fromArray(a.array,d*16),h.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new pd(u,h)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],h=[],d=[],p=[];for(let g=0,v=s.channels.length;g<v;g++){const y=s.channels[g],M=s.samplers[y.sampler],E=y.target,S=E.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,N=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",x)),h.push(this.getDependency("accessor",N)),d.push(M),p.push(E))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(h),Promise.all(d),Promise.all(p)]).then(function(g){const v=g[0],y=g[1],M=g[2],E=g[3],S=g[4],x=[];for(let N=0,P=v.length;N<P;N++){const w=v[N],z=y[N],O=M[N],I=E[N],F=S[N];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const C=i._createAnimationTracks(w,z,O,I,F);if(C)for(let R=0;R<C.length;R++)x.push(C[R])}return new DM(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let h=0,d=s.weights.length;h<d;h++)u.morphTargetInfluences[h]=s.weights[h]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let d=0,p=u.length;d<p;d++)c.push(i.getDependency("node",u[d]));const h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),h]).then(function(d){const p=d[0],g=d[1],v=d[2];v!==null&&p.traverse(function(y){y.isSkinnedMesh&&y.bind(v,_R)});for(let y=0,M=g.length;y<M;y++)p.add(g[y]);return p})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],h=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&u.push(h),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){u.push(d)}),this.nodeCache[e]=Promise.all(u).then(function(d){let p;if(a.isBone===!0?p=new x_:d.length>1?p=new Or:d.length===1?p=d[0]:p=new jt,p!==d[0])for(let g=0,v=d.length;g<v;g++)p.add(d[g]);if(a.name&&(p.userData.name=a.name,p.name=c),tr(p,a),a.extensions&&hs(i,p,a),a.matrix!==void 0){const g=new mt;g.fromArray(a.matrix),p.applyMatrix4(g)}else a.translation!==void 0&&p.position.fromArray(a.translation),a.rotation!==void 0&&p.quaternion.fromArray(a.rotation),a.scale!==void 0&&p.scale.fromArray(a.scale);return s.associations.has(p)||s.associations.set(p,{}),s.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Or;i.name&&(a.name=s.createUniqueName(i.name)),tr(a,i),i.extensions&&hs(t,a,i);const c=i.nodes||[],u=[];for(let h=0,d=c.length;h<d;h++)u.push(s.getDependency("node",c[h]));return Promise.all(u).then(function(h){for(let p=0,g=h.length;p<g;p++)a.add(h[p]);const d=p=>{const g=new Map;for(const[v,y]of s.associations)(v instanceof Ri||v instanceof rn)&&g.set(v,y);return p.traverse(v=>{const y=s.associations.get(v);y!=null&&g.set(v,y)}),g};return s.associations=d(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,h=[];Ur[a.path]===Ur.weights?e.traverse(function(v){v.morphTargetInfluences&&h.push(v.name?v.name:v.uuid)}):h.push(u);let d;switch(Ur[a.path]){case Ur.weights:d=Mo;break;case Ur.rotation:d=Eo;break;case Ur.position:case Ur.scale:d=To;break;default:switch(i.itemSize){case 1:d=Mo;break;case 2:case 3:default:d=To;break}break}const p=s.interpolation!==void 0?hR[s.interpolation]:Ca,g=this._getArrayFromAccessor(i);for(let v=0,y=h.length;v<y;v++){const M=new d(h[v]+"."+Ur[a.path],t.array,g,p);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ed(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Eo?fR:G_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xR(o,e,t){const i=e.attributes,s=new ar;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],h=u.min,d=u.max;if(h!==void 0&&d!==void 0){if(s.set(new G(h[0],h[1],h[2]),new G(d[0],d[1],d[2])),u.normalized){const p=ed(ho[u.componentType]);s.min.multiplyScalar(p),s.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new G,h=new G;for(let d=0,p=a.length;d<p;d++){const g=a[d];if(g.POSITION!==void 0){const v=t.json.accessors[g.POSITION],y=v.min,M=v.max;if(y!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),v.normalized){const E=ed(ho[v.componentType]);h.multiplyScalar(E)}u.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Ui;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function Dv(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(h){o.setAttribute(u,h)})}for(const c in i){const u=Qh[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return Rt.workingColorSpace!==zn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),tr(o,e),xR(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?pR(o,e.targets,t):o})}const td=2.42,nd=5.24,SR="/device-render-studio/models/iphone-17-pro.glb",MR=38,sh={front:{rotation:new On(0,0,0),camera:new G(0,.16,10.8)},hero:{rotation:new On(-.16,.42,-.06),camera:new G(3.2,1.8,11.8)},isometric:{rotation:new On(-.36,.64,-.08),camera:new G(4.5,2.8,12.2)},orbit:{rotation:new On(-.12,-.66,.04),camera:new G(-3.6,1.8,11.8)}};function W_(o,e,t){const i=-o/2,s=-e/2,a=new xd;return a.moveTo(i+t,s),a.lineTo(i+o-t,s),a.quadraticCurveTo(i+o,s,i+o,s+t),a.lineTo(i+o,s+e-t),a.quadraticCurveTo(i+o,s+e,i+o-t,s+e),a.lineTo(i+t,s+e),a.quadraticCurveTo(i,s+e,i,s+e-t),a.lineTo(i,s+t),a.quadraticCurveTo(i,s,i+t,s),a}function Uv(o,e,t,i){const s=new Sd(W_(o,e,i),{depth:t,bevelEnabled:!0,bevelSegments:9,bevelSize:.05,bevelThickness:.035,curveSegments:18});return s.center(),s}function ds(o,e,t){const i=new Md(W_(o,e,t),24),s=i.attributes.position,a=[];for(let c=0;c<s.count;c+=1){const u=s.getX(c),h=s.getY(c);a.push((u+o/2)/o,(h+e/2)/e)}return i.setAttribute("uv",new ln(a,2)),i}function X_(){const o=document.createElement("canvas");o.width=900,o.height=1950;const e=o.getContext("2d"),t=e.createLinearGradient(0,0,900,1950);t.addColorStop(0,"#0f172a"),t.addColorStop(.54,"#0e7490"),t.addColorStop(1,"#e2e8f0"),e.fillStyle=t,e.fillRect(0,0,900,1950),e.fillStyle="rgba(255, 255, 255, 0.18)";for(let s=0;s<6;s+=1)e.beginPath(),e.roundRect(90,520+s*170,720,116,34),e.fill();e.fillStyle="#ffffff",e.font="700 72px Inter, system-ui, sans-serif",e.fillText("Mockup",96,330),e.font="500 34px Inter, system-ui, sans-serif",e.fillText("Drop in an image or video",96,392),e.fillStyle="rgba(255, 255, 255, 0.9)",e.beginPath(),e.roundRect(96,1560,708,180,44),e.fill(),e.fillStyle="#0f172a",e.font="700 42px Inter, system-ui, sans-serif",e.fillText("Ready to render",146,1660);const i=new XS(o);return i.colorSpace=nn,i.anisotropy=8,i}function ER(o,e,t){const i=td/nd,s=e/t;if(o.wrapS=Di,o.wrapT=Di,o.offset.set(0,0),o.repeat.set(1,1),s>i){const a=i/s;o.repeat.x=a,o.offset.x=(1-a)/2}else{const a=s/i;o.repeat.y=a,o.offset.y=(1-a)/2}o.colorSpace=nn,o.anisotropy=12,o.needsUpdate=!0}function Fv(o,e=new Set){(Array.isArray(o)?o:[o]).forEach(i=>{!i||e.has(i)||(e.add(i),i.map&&i.map.dispose(),i.dispose())})}function Ov(o){const e=new Set,t=new Set;o.traverse(i=>{var s,a;i.geometry&&!e.has(i.geometry)&&(e.add(i.geometry),i.geometry.dispose()),i.material&&Fv(i.material,t),(a=(s=i.userData)==null?void 0:s.replacedMaterials)==null||a.forEach(c=>{Fv(c,t)})})}function kv(o,e,t){var i;e.material&&e.material!==t&&((i=o.userData).replacedMaterials??(i.replacedMaterials=new Set),(Array.isArray(e.material)?e.material:[e.material]).forEach(a=>o.userData.replacedMaterials.add(a))),e.material=t}function TR(o){const e=o.attributes.position;if(!e)return;o.computeBoundingBox();const{min:t,max:i}=o.boundingBox,s=i.x-t.x||1,a=i.y-t.y||1,c=[];for(let u=0;u<e.count;u+=1){const h=e.getX(u),d=e.getY(u);c.push((h-t.x)/s,(d-t.y)/a)}o.setAttribute("uv",new ln(c,2)),o.attributes.uv.needsUpdate=!0}function wR(o,e){o.name="iPhone 17 Pro GLB",o.scale.setScalar(MR),o.traverse(t=>{var s;if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0;const i=Array.isArray(t.material)?t.material.map(a=>a==null?void 0:a.name).filter(Boolean):[(s=t.material)==null?void 0:s.name].filter(Boolean);if(t.name==="Cube004_2"||i.includes("Display")){TR(t.geometry),kv(o,t,e.screen),t.renderOrder=2;return}i.includes("Glass")&&(kv(o,t,e.glass),t.renderOrder=3)})}function AR(){const o=new Or,e=new Cn({color:"#161a20",clearcoat:.92,clearcoatRoughness:.22,metalness:.82,roughness:.2}),t=new Cn({color:"#2d343d",clearcoat:.72,clearcoatRoughness:.18,metalness:.88,roughness:.18}),i=new Cn({color:"#05070b",clearcoat:1,clearcoatRoughness:.045,metalness:0,roughness:.08}),s=new Cn({color:"#ffffff",transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,metalness:0,roughness:.05,side:ui}),a=new Gt(Uv(2.82,5.78,.32,.44),e);a.castShadow=!0,a.receiveShadow=!0,o.add(a);const c=new Gt(ds(2.62,5.5,.34),i);c.position.z=.224,c.castShadow=!0;const u=new Gt(ds(2.74,5.66,.4),t);u.position.z=.218,u.castShadow=!0,o.add(u),o.add(c);const h=new Ai({map:X_(),side:ui,toneMapped:!1}),d=new Gt(ds(td,nd,.27),h);d.position.z=.236,d.castShadow=!1,o.add(d);const p=new Gt(ds(td,nd,.27),s);p.position.z=.245,o.add(p);const g=new Cn({color:"#020306",clearcoat:1,clearcoatRoughness:.03,metalness:0,roughness:.04}),v=new Gt(Uv(.66,.19,.035,.095),g);v.position.set(0,2.36,.272),v.castShadow=!0,o.add(v);const y=new Cn({color:"#070a0f",clearcoat:1,clearcoatRoughness:.02,roughness:.1,metalness:.08}),M=new Gt(new yd(.038,.038,.014,36),y);M.rotation.x=Math.PI/2,M.position.set(.22,2.36,.294),o.add(M);const E=new Gt(ds(.34,.032,.016),new Ai({color:"#1b222c",transparent:!0,opacity:.86}));E.position.set(-.08,2.36,.296),o.add(E);const S=new Gt(ds(.58,.035,.017),new Ai({color:"#ffffff",transparent:!0,opacity:.76}));S.position.set(0,-2.34,.278),o.add(S);const x=new Gt(ds(.08,4.4,.04),new Ai({color:"#ffffff",transparent:!0,opacity:.14}));x.position.set(-.94,.12,.282),x.rotation.z=-.08,o.add(x);const N=t.clone();return[[-1.45,1.45,.22],[-1.45,.86,.34],[-1.45,.38,.34],[1.45,.78,.48]].forEach(([P,w,z])=>{const O=new Gt(new Ao(.045,z,.072),N);O.position.set(P,w,.015),O.castShadow=!0,o.add(O)}),{group:o,materials:{body:e,edge:t,glass:s,screen:h}}}const RR=yt.forwardRef(function({screenMedia:e,settings:t,onDragStart:i,onDragEnd:s,onMediaError:a,onMediaReady:c,onPlaybackStateChange:u},h){const d=yt.useRef(null),p=yt.useRef(null),g=yt.useRef(null),v=yt.useRef(null),y=yt.useRef(null),M=yt.useRef(null),E=yt.useRef(null),S=yt.useRef(null),x=yt.useRef(new On),N=yt.useRef(new G),P=yt.useRef(t),w=yt.useRef({active:!1,x:0,y:0}),[z,O]=yt.useState("procedural");return yt.useImperativeHandle(h,()=>({exportPng(){return!p.current||!g.current||!v.current?null:(p.current.render(g.current,v.current),p.current.domElement.toDataURL("image/png"))},resetView(){const I=sh[P.current.angle];x.current.copy(I.rotation),N.current.copy(I.camera)}})),yt.useEffect(()=>{P.current=t},[t]),yt.useEffect(()=>{const I=d.current,F=new BA({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),C=new NS,R=new Fn(34,1,.1,100),{group:k,materials:Q}=AR(),Y=new HM("#ffffff","#a8b8c6",1.8),te=new Zh("#ffffff",4.6),ae=new Zh("#bdefff",2.2),ee=new F_("#ffffff",1.2,12),le=new wM({color:"#1f2937",opacity:.18}),H=new Gt(new Da(14,14),le);let ue=!1;F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.outputColorSpace=nn,F.toneMapping=Yv,F.toneMappingExposure=1.08,F.shadowMap.enabled=!0,F.shadowMap.type=jv,F.domElement.className="render-canvas",F.domElement.setAttribute("aria-label","3D device render"),I.appendChild(F.domElement),te.position.set(3.8,4.8,4.8),te.castShadow=!0,te.shadow.mapSize.set(2048,2048),ae.position.set(-4.2,2.6,3.4),ee.position.set(0,2.2,4.5),H.rotation.x=-Math.PI/2,H.position.y=-2.74,H.receiveShadow=!0,k.position.y=.02,k.scale.setScalar(.9),k.userData.proceduralChildren=[...k.children],C.add(Y,te,ae,ee,k,H),new zA().load(SR,Ce=>{if(ue){Ov(Ce.scene);return}wR(Ce.scene,Q),k.userData.proceduralChildren.forEach(Ge=>{Ge.visible=!1}),k.add(Ce.scene),O("iphone-17-pro-glb")},void 0,()=>{ue||O("procedural-fallback")});const B=sh[t.angle];k.rotation.copy(B.rotation),R.position.copy(B.camera),x.current.copy(B.rotation),N.current.copy(B.camera),R.lookAt(0,0,0),p.current=F,g.current=C,v.current=R,y.current=k,M.current=Q,E.current={ambient:Y,key:te,rim:ae,fill:ee},S.current=H;const ne=()=>{const Ce=I.clientWidth,Ge=I.clientHeight;F.setSize(Ce,Ge,!1),R.aspect=Ce/Ge,R.updateProjectionMatrix()},Oe=new ResizeObserver(ne);Oe.observe(I),ne();const J=Ce=>{w.current={active:!0,x:Ce.clientX,y:Ce.clientY},F.domElement.setPointerCapture(Ce.pointerId),i==null||i()},fe=Ce=>{if(!w.current.active)return;const Ge=Ce.clientX-w.current.x,vt=Ce.clientY-w.current.y;w.current.x=Ce.clientX,w.current.y=Ce.clientY,x.current.y+=Ge*.009,x.current.x=c_.clamp(x.current.x+vt*.006,-.82,.52)},xe=Ce=>{w.current.active=!1,F.domElement.releasePointerCapture(Ce.pointerId),s==null||s()};F.domElement.addEventListener("pointerdown",J),F.domElement.addEventListener("pointermove",fe),F.domElement.addEventListener("pointerup",xe),F.domElement.addEventListener("pointercancel",xe),F.domElement.style.touchAction="none";let me=0;const Pe=()=>{P.current.autoSpin&&!w.current.active&&(x.current.y+=.006),k.rotation.x+=(x.current.x-k.rotation.x)*.08,k.rotation.y+=(x.current.y-k.rotation.y)*.08,k.rotation.z+=(x.current.z-k.rotation.z)*.08,R.position.lerp(N.current,.045),R.lookAt(0,0,0),F.render(C,R),me=window.requestAnimationFrame(Pe)};return Pe(),()=>{ue=!0,window.cancelAnimationFrame(me),Oe.disconnect(),F.domElement.removeEventListener("pointerdown",J),F.domElement.removeEventListener("pointermove",fe),F.domElement.removeEventListener("pointerup",xe),F.domElement.removeEventListener("pointercancel",xe),I.removeChild(F.domElement),F.dispose(),Ov(C)}},[s,i]),yt.useEffect(()=>{const I=sh[t.angle];x.current.copy(I.rotation);const F=(t.depth-50)/100;N.current.copy(I.camera).multiplyScalar(1-F*.08)},[t.angle,t.depth]),yt.useEffect(()=>{const I=M.current,F=E.current,C=g.current,R=p.current,k=S.current;if(!I||!F||!C||!R||!k)return;const Q=Wv.find(ae=>ae.id===t.material),Y=oh.find(ae=>ae.id===t.background)??oh[0];I.body.color.set(Q.body),I.body.metalness=Q.metalness,I.body.roughness=Q.roughness,I.edge.color.set(Q.edge),I.glass.opacity=.1+t.reflection/420,I.glass.clearcoatRoughness=Math.max(.02,.18-t.reflection/700),F.key.intensity=1.5+t.lighting/18,F.rim.intensity=.4+t.reflection/34,F.fill.intensity=.55+t.lighting/110,k.material.opacity=.06+t.shadow/320,k.material.needsUpdate=!0;const te=new ut(Y.clear);C.background=te,R.setClearColor(te,1)},[t.background,t.lighting,t.material,t.reflection,t.shadow]),yt.useEffect(()=>{var ae;const I=(ae=M.current)==null?void 0:ae.screen;if(!I)return;let F=!1,C=null;const R=(ee,le,H)=>{if(F){ee.dispose();return}ER(ee,le,H),ee.minFilter=yn,ee.magFilter=yn,I.map&&I.map.dispose(),I.map=ee,I.needsUpdate=!0};if(!e)return R(X_(),900,1950),c==null||c(),()=>{F=!0};if(e.kind==="image")return new U_().load(e.url,le=>{const H=le.image;R(le,H.naturalWidth||H.width,H.naturalHeight||H.height),c==null||c()},void 0,()=>a==null?void 0:a()),()=>{F=!0};C=document.createElement("video"),C.src=e.url,C.crossOrigin="anonymous",C.loop=!0,C.muted=!0,C.playsInline=!0,C.autoplay=!0,C.preload="auto";const k=()=>{const ee=C.videoWidth||1080,le=C.videoHeight||1920,H=new WS(C);H.generateMipmaps=!1,R(H,ee,le),C.play().catch(()=>{u==null||u("paused")})},Q=()=>u==null?void 0:u("playing"),Y=()=>{F||u==null||u("paused")},te=()=>a==null?void 0:a();return C.addEventListener("loadedmetadata",k,{once:!0}),C.addEventListener("playing",Q),C.addEventListener("pause",Y),C.addEventListener("error",te),C.load(),()=>{F=!0,C.removeEventListener("loadedmetadata",k),C.removeEventListener("playing",Q),C.removeEventListener("pause",Y),C.removeEventListener("error",te),C.pause(),C.removeAttribute("src"),C.load()}},[a,c,u,e]),Se.jsx("div",{className:"viewport-host","data-model-source":z,"data-screen-kind":(e==null?void 0:e.kind)??"default",ref:d})});function CR({screenLabel:o,statusLabel:e,onUpload:t,onExport:i,onReset:s,fileInputRef:a}){return Se.jsxs("header",{className:"topbar",children:[Se.jsxs("div",{className:"brand",children:[Se.jsx("div",{className:"brand-mark","aria-hidden":"true",children:Se.jsx(By,{size:18,strokeWidth:2.2})}),Se.jsxs("div",{children:[Se.jsx("strong",{children:"Device Render Studio"}),Se.jsx("span",{children:o})]})]}),Se.jsxs("div",{className:"toolbar-center","aria-label":"Scene tools",children:[Se.jsxs("button",{className:"icon-button",type:"button",onClick:s,children:[Se.jsx(Ky,{size:17}),Se.jsx("span",{children:"Reset"})]}),Se.jsx("div",{className:"toolbar-divider"}),Se.jsxs("span",{className:"status-pill",children:[Se.jsx(Jy,{size:15}),e]}),Se.jsxs("span",{className:"status-pill subtle",children:[Se.jsx(qy,{size:15}),"Scene"]})]}),Se.jsxs("div",{className:"toolbar-actions",children:[Se.jsx("input",{ref:a,className:"visually-hidden",type:"file",accept:"image/*,video/*",onChange:t}),Se.jsxs("button",{className:"button secondary",type:"button",onClick:()=>{var c;return(c=a.current)==null?void 0:c.click()},children:[Se.jsx(Vy,{size:17}),"Import"]}),Se.jsxs("button",{className:"button primary",type:"button",onClick:i,children:[Se.jsx(Vv,{size:17}),"Export PNG"]})]})]})}function bR({activeAngle:o,renderMode:e,onPreset:t}){const i=e==="video"?Qy:Gy;return Se.jsxs("div",{className:"preset-rail","aria-label":"Angle presets",children:[Se.jsxs("div",{className:"rail-status",children:[Se.jsx("span",{className:"ready-dot"}),Se.jsxs("div",{children:[Se.jsx("strong",{children:"Ready"}),Se.jsx("span",{children:"Realtime preview"})]})]}),Se.jsx("div",{className:"preset-list",children:Gv.map(s=>Se.jsxs("button",{type:"button",className:s.id===o?"preset-tile selected":"preset-tile",onClick:()=>t(s.id),children:[Se.jsx("span",{className:"preset-glyph",children:Se.jsx(Hv,{size:16})}),Se.jsx("span",{children:s.label})]},s.id))}),Se.jsxs("div",{className:"rail-meta",children:[Se.jsxs("span",{children:[Se.jsx(i,{size:15}),e==="video"?"Video":"Image"]}),Se.jsxs("span",{children:[Se.jsx(Vv,{size:15}),"PNG"]})]})]})}function PR(o,e){return o?o.kind==="image"?"Image ready":e==="playing"?"Video playing":e==="error"?"Video issue":e==="paused"?"Video paused":"Video loading":"Ready"}function LR(){const[o,e]=yt.useState(null),[t,i]=yt.useState("Demo screen"),[s,a]=yt.useState("ready"),[c,u]=yt.useState(og),[h,d]=yt.useState(!1),p=yt.useRef(null),g=yt.useRef(null),v=(z,O)=>{u(I=>({...I,[z]:O}))};yt.useEffect(()=>()=>{var z;(z=o==null?void 0:o.url)!=null&&z.startsWith("blob:")&&URL.revokeObjectURL(o.url)},[o]);const y=z=>{var F;const O=(F=z.target.files)==null?void 0:F[0];if(!O)return;const I=O.type.startsWith("video/")?"video":O.type.startsWith("image/")?"image":null;if(!I){z.target.value="";return}e({kind:I,mimeType:O.type,name:O.name,url:URL.createObjectURL(O)}),i(O.name),a(I==="video"?"loading":"ready"),z.target.value=""},M=yt.useCallback(()=>{a("ready")},[]),E=yt.useCallback(()=>{a("error")},[]),S=yt.useCallback(z=>{a(z)},[]),x=yt.useCallback(()=>{d(!0)},[]),N=yt.useCallback(()=>{d(!1)},[]),P=()=>{var I;const z=(I=g.current)==null?void 0:I.exportPng();if(!z)return;const O=document.createElement("a");O.href=z,O.download="device-render-studio.png",document.body.appendChild(O),O.click(),O.remove()},w=()=>{var z;u(og),(z=g.current)==null||z.resetView()};return Se.jsxs("main",{className:"app",children:[Se.jsx(CR,{screenLabel:t,statusLabel:PR(o,s),onUpload:y,onExport:P,onReset:w,fileInputRef:p}),Se.jsxs("div",{className:"workspace",children:[Se.jsxs("section",{className:"stage-area","aria-label":"3D render workspace",children:[Se.jsxs("div",{className:"viewport-shell",children:[Se.jsx(RR,{ref:g,screenMedia:o,settings:c,onDragStart:x,onDragEnd:N,onMediaError:E,onMediaReady:M,onPlaybackStateChange:S}),Se.jsxs("div",{className:"canvas-hud top-left",children:[Se.jsx(zy,{size:15}),Se.jsx("span",{children:"Scene"})]}),Se.jsxs("div",{className:h?"canvas-hud bottom-left active":"canvas-hud bottom-left",children:[Se.jsx(Xy,{size:15}),Se.jsx("span",{children:h?"Orbiting":"Drag to orbit"})]})]}),Se.jsx(bR,{activeAngle:c.angle,renderMode:(o==null?void 0:o.kind)??"image",onPreset:z=>v("angle",z)})]}),Se.jsx(nx,{settings:c,onSettingChange:v})]})]})}const NR=Iy.createRoot(document.getElementById("root"));Dy.flushSync(()=>{NR.render(Se.jsx(Cy.StrictMode,{children:Se.jsx(LR,{})}))});
