!function(){var e={695:function(e,t,n){
/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t){"use strict";const n=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},r=n(e),o=n(t),i=1e3,s="transitionend",l=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*i):0},a=e=>{e.dispatchEvent(new Event(s))},c=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),u=e=>c(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,d=e=>{"function"==typeof e&&e()},f=(e,t,n=!0)=>{if(!n)return void d(e);const r=5,o=l(t)+r;let i=!1;const c=({target:n})=>{n===t&&(i=!0,t.removeEventListener(s,c),d(e))};t.addEventListener(s,c),setTimeout((()=>{i||a(t)}),o)},h="5.1.3";class g{constructor(e){(e=u(e))&&(this._element=e,r.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.default.remove(this._element,this.constructor.DATA_KEY),o.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){f(e,t,n)}static getInstance(e){return r.default.get(u(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return h}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return g}(n(493),n(286))},863:function(e,t,n){
/*!
  * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(e,t,n,r,o){"use strict";const i=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},s=i(e),l=i(t),a=i(n),c=i(r),u=i(o),d=e=>null==e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),f=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},h=e=>{const t=f(e);return t&&document.querySelector(t)?t:null},g=e=>{const t=f(e);return t?document.querySelector(t):null},p=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),m=e=>p(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,y=(e,t,n)=>{Object.keys(n).forEach((r=>{const o=n[r],i=t[r],s=i&&p(i)?"element":d(i);if(!new RegExp(o).test(s))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${o}".`)}))},b=e=>{e.offsetHeight},_=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},v=[],E=e=>{"loading"===document.readyState?(v.length||document.addEventListener("DOMContentLoaded",(()=>{v.forEach((e=>e()))})),v.push(e)):e()},A=e=>{E((()=>{const t=_();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},w="collapse",S="bs.collapse",C=`.${S}`,T={toggle:!0,parent:null},O={toggle:"boolean",parent:"(null|element)"},j=`show${C}`,$=`shown${C}`,L=`hide${C}`,N=`hidden${C}`,x=`click${C}.data-api`,D="show",q="collapse",k="collapsing",I="collapsed",M=`:scope .${q} .${q}`,P="collapse-horizontal",Y="width",z="height",K=".collapse.show, .collapse.collapsing",B='[data-bs-toggle="collapse"]';class H extends u.default{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=c.default.find(B);for(let e=0,t=n.length;e<t;e++){const t=n[e],r=h(t),o=c.default.find(r).filter((e=>e===this._element));null!==r&&o.length&&(this._selector=r,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return T}static get NAME(){return w}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=c.default.find(M,this._config.parent);t=c.default.find(K,this._config.parent).filter((t=>!e.includes(t)))}const n=c.default.findOne(this._selector);if(t.length){const r=t.find((e=>n!==e));if(e=r?H.getInstance(r):null,e&&e._isTransitioning)return}if(l.default.trigger(this._element,j).defaultPrevented)return;t.forEach((t=>{n!==t&&H.getOrCreateInstance(t,{toggle:!1}).hide(),e||s.default.set(t,S,null)}));const r=this._getDimension();this._element.classList.remove(q),this._element.classList.add(k),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(k),this._element.classList.add(q,D),this._element.style[r]="",l.default.trigger(this._element,$)},i=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(o,this._element,!0),this._element.style[r]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(l.default.trigger(this._element,L).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,b(this._element),this._element.classList.add(k),this._element.classList.remove(q,D);const t=this._triggerArray.length;for(let e=0;e<t;e++){const t=this._triggerArray[e],n=g(t);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(k),this._element.classList.add(q),l.default.trigger(this._element,N)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(D)}_getConfig(e){return(e={...T,...a.default.getDataAttributes(this._element),...e}).toggle=Boolean(e.toggle),e.parent=m(e.parent),y(w,e,O),e}_getDimension(){return this._element.classList.contains(P)?Y:z}_initializeChildren(){if(!this._config.parent)return;const e=c.default.find(M,this._config.parent);c.default.find(B,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=g(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(I):e.classList.add(I),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=H.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}return l.default.on(document,x,B,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=h(this);c.default.find(t).forEach((e=>{H.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),A(H),H}(n(493),n(286),n(175),n(737),n(695))},493:function(e){
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(){"use strict";const e=new Map;return{set(t,n,r){e.has(t)||e.set(t,new Map);const o=e.get(t);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(t,n)=>e.has(t)&&e.get(t).get(n)||null,remove(t,n){if(!e.has(t))return;const r=e.get(t);r.delete(n),0===r.size&&e.delete(t)}}}()},286:function(e){
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(){"use strict";const e=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let i=1;const s={mouseenter:"mouseover",mouseleave:"mouseout"},l=/^(mouseenter|mouseleave)/i,a=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(e,t){return t&&`${t}::${i++}`||e.uidEvent||i++}function u(e){const t=c(e);return e.uidEvent=t,o[t]=o[t]||{},o[t]}function d(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&_.off(e,r.type,t),t.apply(e,[r])}}function f(e,t,n){return function r(o){const i=e.querySelectorAll(t);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(let l=i.length;l--;)if(i[l]===s)return o.delegateTarget=s,r.oneOff&&_.off(e,o.type,t,n),n.apply(s,[o]);return null}}function h(e,t,n=null){const r=Object.keys(e);for(let o=0,i=r.length;o<i;o++){const i=e[r[o]];if(i.originalHandler===t&&i.delegationSelector===n)return i}return null}function g(e,t,n){const r="string"==typeof t,o=r?n:t;let i=b(e);return a.has(i)||(i=e),[r,o,i]}function p(e,n,r,o,i){if("string"!=typeof n||!e)return;if(r||(r=o,o=null),l.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};o?o=e(o):r=e(r)}const[s,a,p]=g(n,r,o),m=u(e),y=m[p]||(m[p]={}),b=h(y,a,s?r:null);if(b)return void(b.oneOff=b.oneOff&&i);const _=c(a,n.replace(t,"")),v=s?f(e,r,o):d(e,r);v.delegationSelector=s?r:null,v.originalHandler=a,v.oneOff=i,v.uidEvent=_,y[_]=v,e.addEventListener(p,v,s)}function m(e,t,n,r,o){const i=h(t[n],r,o);i&&(e.removeEventListener(n,i,Boolean(o)),delete t[n][i.uidEvent])}function y(e,t,n,r){const o=t[n]||{};Object.keys(o).forEach((i=>{if(i.includes(r)){const r=o[i];m(e,t,n,r.originalHandler,r.delegationSelector)}}))}function b(e){return e=e.replace(n,""),s[e]||e}const _={on(e,t,n,r){p(e,t,n,r,!1)},one(e,t,n,r){p(e,t,n,r,!0)},off(e,t,n,o){if("string"!=typeof t||!e)return;const[i,s,l]=g(t,n,o),a=l!==t,c=u(e),d=t.startsWith(".");if(void 0!==s){if(!c||!c[l])return;return void m(e,c,l,s,i?n:null)}d&&Object.keys(c).forEach((n=>{y(e,c,n,t.slice(1))}));const f=c[l]||{};Object.keys(f).forEach((n=>{const o=n.replace(r,"");if(!a||t.includes(o)){const t=f[n];m(e,c,l,t.originalHandler,t.delegationSelector)}}))},trigger(t,n,r){if("string"!=typeof n||!t)return null;const o=e(),i=b(n),s=n!==i,l=a.has(i);let c,u=!0,d=!0,f=!1,h=null;return s&&o&&(c=o.Event(n,r),o(t).trigger(c),u=!c.isPropagationStopped(),d=!c.isImmediatePropagationStopped(),f=c.isDefaultPrevented()),l?(h=document.createEvent("HTMLEvents"),h.initEvent(i,u,!0)):h=new CustomEvent(n,{bubbles:u,cancelable:!0}),void 0!==r&&Object.keys(r).forEach((e=>{Object.defineProperty(h,e,{get:()=>r[e]})})),f&&h.preventDefault(),d&&t.dispatchEvent(h),h.defaultPrevented&&void 0!==c&&c.preventDefault(),h}};return _}()},175:function(e){
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}return{setDataAttribute(e,n,r){e.setAttribute(`data-bs-${t(n)}`,r)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter((e=>e.startsWith("bs"))).forEach((r=>{let o=r.replace(/^bs/,"");o=o.charAt(0).toLowerCase()+o.slice(1,o.length),n[o]=e(t.dataset[r])})),n},getDataAttribute:(n,r)=>e(n.getAttribute(`data-bs-${t(r)}`)),offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position:e=>({top:e.offsetTop,left:e.offsetLeft})}}()},737:function(e){
/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
e.exports=function(){"use strict";const e=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),t=t=>!(!e(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),n=e=>!e||e.nodeType!==Node.ELEMENT_NODE||!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled")),r=3;return{find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let o=e.parentNode;for(;o&&o.nodeType===Node.ELEMENT_NODE&&o.nodeType!==r;)o.matches(t)&&n.push(o),o=o.parentNode;return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const r=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(r,e).filter((e=>!n(e)&&t(e)))}}}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(863);function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target;n.style.transform="translateX(0px)",n.style.opacity="1",t.unobserve(n)}}))}),{threshold:.5});[].concat(e(document.querySelectorAll(".middle-slice1 .col-md-6")),e(document.querySelectorAll(".middle-slice2 .col-md-6")),[document.querySelector(".middle-slice3 .img-1"),document.querySelector(".middle-slice3 .img-2")]).forEach((function(e){var t=e.getAttribute("data-direction");t&&e.classList.add("fade-".concat(t)),r.observe(e)}))}()}();
//# sourceMappingURL=main.js.map