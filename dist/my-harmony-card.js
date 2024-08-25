function t(t,i,e,o){var n,s=arguments.length,r=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,e,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(i,e,r):n(i,e))||r);return s>3&&r&&Object.defineProperty(i,e,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,e=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let s=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,m=g?g.emptyScript:"",b=p.reactiveElementPolyfillSupport,v=(t,i)=>t,f={toAttribute(t,i){switch(i){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},_=(t,i)=>!a(t,i),y={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=y){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const e=Symbol(),o=this.getPropertyDescriptor(t,e,i);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,i,e){const{get:o,set:n}=l(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return o?.call(this)},set(i){const s=o?.call(this);n.call(this,i),this.requestUpdate(t,s,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,i=[...h(t),...d(t)];for(const e of i)this.createProperty(e,t[e])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,e]of i)this.elementProperties.set(t,e)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Eu(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const e of i.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(e)t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=i.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EC(t,i){const e=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,e);if(void 0!==o&&!0===e.reflect){const n=(void 0!==e.converter?.toAttribute?e.converter:f).toAttribute(i,e.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,i){const e=this.constructor,o=e._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=o,this[o]=n.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,e){if(void 0!==t){if(e??=this.constructor.getPropertyOptions(t),!(e.hasChanged??_)(this[t],i))return;this.P(t,i,e)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,e){this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,e]of t)!0!==e.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],e)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,b?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=w.trustedTypes,k=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,S=`<${C}>`,O=document,B=()=>O.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,N=/>/g,H=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,z=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),L=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,W=O.createTreeWalker(O,129);function K(t,i){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(i):i}class q{constructor({strings:t,_$litType$:i},e){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[c,l]=((t,i)=>{const e=t.length-1,o=[];let n,s=2===i?"<svg>":3===i?"<math>":"",r=D;for(let i=0;i<e;i++){const e=t[i];let a,c,l=-1,h=0;for(;h<e.length&&(r.lastIndex=h,c=r.exec(e),null!==c);)h=r.lastIndex,r===D?"!--"===c[1]?r=R:void 0!==c[1]?r=N:void 0!==c[2]?(I.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=H):void 0!==c[3]&&(r=H):r===H?">"===c[0]?(r=n??D,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?H:'"'===c[3]?j:M):r===j||r===M?r=H:r===R||r===N?r=D:(r=H,n=void 0);const d=r===H&&t[i+1].startsWith("/>")?" ":"";s+=r===D?e+S:l>=0?(o.push(a),e.slice(0,l)+A+e.slice(l)+E+d):e+E+(-2===l?i:d)}return[K(t,s+(t[e]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]})(t,i);if(this.el=q.createElement(c,e),W.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=W.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(A)){const i=l[s++],e=o.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:r[2],strings:e,ctor:"."===r[1]?X:"?"===r[1]?Q:"@"===r[1]?tt:Z}),o.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(I.test(o.tagName)){const t=o.textContent.split(E),i=t.length-1;if(i>0){o.textContent=x?x.emptyScript:"";for(let e=0;e<i;e++)o.append(t[e],B()),W.nextNode(),a.push({type:2,index:++n});o.append(t[i],B())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)a.push({type:7,index:n}),t+=E.length-1}n++}}static createElement(t,i){const e=O.createElement("template");return e.innerHTML=t,e}}function G(t,i,e=t,o){if(i===L)return i;let n=void 0!==o?e.o?.[o]:e.l;const s=P(i)?void 0:i._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,e,o)),void 0!==o?(e.o??=[])[o]=n:e.l=n),void 0!==n&&(i=G(t,n._$AS(t,i.values),n,o)),i}class Y{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:e}=this._$AD,o=(t?.creationScope??O).importNode(i,!0);W.currentNode=o;let n=W.nextNode(),s=0,r=0,a=e[0];for(;void 0!==a;){if(s===a.index){let i;2===a.type?i=new J(n,n.nextSibling,this,t):1===a.type?i=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(i=new it(n,this,t)),this._$AV.push(i),a=e[++r]}s!==a?.index&&(n=W.nextNode(),s++)}return W.currentNode=O,o}p(t){let i=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class J{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,e,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=o,this.v=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=G(this,t,i),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=q.createElement(K(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===o)this._$AH.p(i);else{const t=new Y(o,this),e=t.u(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let i=V.get(t.strings);return void 0===i&&V.set(t.strings,i=new q(t)),i}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,o=0;for(const n of t)o===i.length?i.push(e=new J(this.O(B()),this.O(B()),this,this.options)):e=i[o],e._$AI(n),o++;o<i.length&&(this._$AR(e&&e._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,o,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=F}_$AI(t,i=this,e,o){const n=this.strings;let s=!1;if(void 0===n)t=G(this,t,i,0),s=!P(t)||t!==this._$AH&&t!==L,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,o[e+r],i,r),a===L&&(a=this._$AH[r]),s||=!P(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class Q extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class tt extends Z{constructor(t,i,e,o,n){super(t,i,e,o,n),this.type=5}_$AI(t,i=this){if((t=G(this,t,i,0)??F)===L)return;const e=this._$AH,o=t===F&&e!==F||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==F&&(e===F||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const et=w.litHtmlPolyfillSupport;et?.(q,J),(w.litHtmlVersions??=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,i,e)=>{const o=e?.renderBefore??i;let n=o._$litPart$;if(void 0===n){const t=e?.renderBefore??null;o._$litPart$=n=new J(i.insertBefore(B(),t),t,void 0,e??{})}return n._$AI(t),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return L}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>(i,e)=>{void 0!==e?e.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)};var rt,at;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(rt||(rt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(at||(at={}));const ct="my-harmony-card",lt="my-harmony-card-editor",ht=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,o)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[o+1]),t[0]);return new s(e,t,o)})`
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  .tv_title {
    width: fit-content;
    alig: -webkit-center;
    display: block;
    margin: auto;
    font-size: calc(var(--scale) * 22px); 
    font-weight: normal;
    padding: calc(var(--remotewidth)/52) calc(var(--remotewidth)/26);
    border-radius: calc(var(--remotewidth)/10);
    background-color: var(--remote-button-color);            
  }

  button:focus {
    outline: 0;
  }

  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #7a7f87 2%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }

  .blink {
    animation: blinker 1.5s linear infinite;
    color: red; }

  .card, .ripple:after {
    width: 100%;
    height: 100%; }

  .card {
    display: flex;
    justify-content: center;
  }

  .page {
    background-color: var(--remote-color);
    height: 100%;
    display: inline-block;
    flex-direction: row;
    border: var(--main-border-width) solid var(--main-border-color);
    border-radius: calc(var(--remotewidth)/7.5);
    padding: calc(var(--remotewidth)/37.5) calc(var(--remotewidth)/15.2) calc(var(--remotewidth)/11);
  }

  .grid-container-power {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background-color: transparent;
    overflow: hidden;
    width: var(--remotewidth);
    height: calc(var(--remotewidth)/3); }

  .grid-container-cursor, .grid-container-keypad {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow: hidden;
    height: var(--remotewidth);
  }
  .grid-container-cursor {
    grid-template-rows: 1fr 1fr 1fr;
    width: var(--remotewidth);
    grid-template-areas: "ctl up act""left ok right""back down exit";}

  .grid-container-keypad {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    background-color: transparent;
    background-color: var(--remote-button-color);
    border-radius: 35px;
    width: calc(var(--remotewidth) - 10%);
    margin: auto;
  }
  .grid-container-act {
    display: grid;
    background-color: transparent;
    overflow: hidden;
    width: var(--remotewidth);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: calc(var(--remotewidth)/2) calc(var(--remotewidth)/.5115);
  }

  .grid-container-color_btn {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-color: transparent;
    width: calc(var(--remotewidth)/1.1);
    overflow: hidden;
    margin: auto;
    margin-top:10px;
    gap: 4px;
    padding: 5px;
  }

  .grid-container-extra {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-color: transparent;
    width: calc(var(--remotewidth)/1.1);
    overflow: hidden;
    margin: auto;
    margin-top:10px;         
    gap: 5px;
    padding: 0px;
  }  

    .btn-extra {
    font-size: calc(var(--scale) * 16px);
    height: calc(var(--remotewidth) / 8); 
    width: 100%;
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    border-width: 0;
    border-radius: calc(var(--remotewidth)/10);
    margin: auto;
    margin-left: 0px;
    display: grid;
    place-items: center;
    display: inline-block;
    cursor: pointer;
  }
  
  .mdi-extra {
    --mdc-icon-size: calc(var(--scale) * 32px);
    justify-content: center;
    align-items: center;
  }            

  .grid-container-color_btn {          
  height: calc(var(--remotewidth)/10);
  }

  .grid-container-media-control, .grid-container-volume-channel-control {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: transparent;
    width: var(--remotewidth);
    height: calc(var(--remotewidth)/1.4);
    overflow: hidden;
    margin-top: calc(var(--remotewidth)/12);
  }

  .grid-container-media-control {
    grid-template-rows: 1fr 1fr;
    height: calc(var(--remotewidth)/2.85);
  }

  .grid-item-act {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    display: grid;
    grid-template-columns: auto;
    background-color: var(--remote-button-color);
    margin: auto;
    margin-top: calc(var(--remotewidth)/2.6);
    overflow: scroll;
    height: calc(var(--remotewidth)*2.01);
    width: calc(var(--remotewidth) - 9%);
    border-radius: calc(var(--remotewidth)/12); }

  .grid-item-act::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;}

  .shape, .shape-act, .act_text {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1; }

  .shape {
    grid-row-end: 4;
    padding: 5px; }

  .shape-act {
    grid-row-end: 3; }

  .item_guide {
  grid-area: ctl; }

  .item_up {
    grid-area: up; }
  .item_act {
    grid-area: act; }

  .item_2_sx {
    grid-area: left; }

  .item_2_c {
    grid-area: ok;  }

  .item_right {
    grid-area: right;  }

  .item_back {
    grid-area: back;  }

  .item_down {
    grid-area: down;  }

  .item_exit {
    grid-area: exit; }

  ha-icon {
    width: calc(var(--remotewidth)/10.8);
    height: calc(var(--remotewidth)/10.8);
  }

  .bnt-act-back, .bnt-sound-back, .btn {
    font-size: calc(var(--remotewidth)/14.75);
    border-radius: 50%;
    place-items: center;
    display: inline-block;
    cursor: pointer;
  }

  .btn {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    width: 70%;
    height: 70%;
    /*transform: scale(0.9);*/         
    border-width: 0;
    margin: auto;
  }

  .bnt-act-back {
    background-color: transparent;
    margin-top: calc(var(--remotewidth)/21);
  }

  .bnt-act-back {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    color: var(--remote-text-color);
    width: 70%;
    height: 50%;
    border-width: 0;
    margin-left: calc(var(--remotewidth)/21);
  }

  .btn-keypad {
    color: var(--remote-text-color);
    border-width: 0; }

  .btn-extra {
  text-align: center;
  float: none;
  margin-right: -10px; }

  .btn-keypad {
    background-color: transparent;
    font-size: calc(var(--remotewidth)/10);
    width: 100%;
    height: 100%; }

  .btn-color {
    background-color: var(--remote-button-color);
    border-radius: calc(var(--remotewidth)/10);
    place-items: center;
    cursor: pointer;
    transform: scale(1.3); }

  .btn-color {
    width: 65%;
    height: 45%;
    margin: auto;
  }

  .btn-act, .btn-act-on {
    font-size: calc(var(--remotewidth)/10.5);
    height: calc(var(--remotewidth)/7.2226);
    border-width: 0;
    border-radius: calc(var(--remotewidth)/20);
    margin: calc(var(--remotewidth)/47);
    place-items: center;
    display: list-item;
    cursor: pointer;
  }

  .btn-act {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    border: solid 2px var(--remote-color);
  }

  .btn-act-on {
    background-color: var(--primary-color);
    color: #fff;
  }

  .overlay {
    background-color: rgba(0, 0, 0, .02);
  }

  .flat-high {
    width: 70%;
    height: 47%;
  }

  .flat-low {
    width: 70%;
    height: 85%;
  }

  .btn-flat {
    background-color: var(--remote-button-color);
    color: var(--remote-text-color);
    /*font-size: calc(var(--remotewidth)/18.75);*/
    font-size: calc(var(--remotewidth)/14.75);
    border-width: 0;
    border-radius: calc(var(--remotewidth)/10);
    margin: auto;
    display: grid;
    place-items: center;
    display: inline-block;
    cursor: pointer;
  }

    .msc {
      --mdc-icon-size: calc(var(--scale) * 34px); }


  .ok_button {
    display: flex;
    color: var(--remote-text-color);
    justify-content: center;
    align-items: center;
    border: solid 3px var(--ha-card-background);
    border-radius: 100%;
    font-size: calc(var(--remotewidth)/12.6);
    cursor: pointer;
  }

  /********************* Editor.ts *******************/
    .heading {

      font-weight: bold; 
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .color-item {
      display: inline-block;
      margin-right: 10px; 
      white-space: nowrap;
      margin-right: 10px; 
      word-wrap: nowrap; 
      margin-bottom: 14px; 
    }
    

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      margin-bottom: 4px;
      font-weight: bold;
    }

    .form-group input[type="number"],
    .form-group input[type="number"] {
      padding: 8px;
      box-sizing: border-box;
    }

    .activity-container {
      margin-bottom: 16px;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      filter: brightness(0.9); 
      width: 100%; 
      max-width: 280px;
      box-sizing: border-box; 
    }

    .outer-container {
      border: 1px solid #ccc;
      padding: 16px; */
      border-radius: 8px;
      background-color: #fefefe; 
      width: 50%; 
      max-width: 300px; 
      box-sizing: border-box;
      margin-top: 0px;
    }

    .activity-identifier {
      font-weight: bold;
      width: 150px; 
    }

    .activity-input {
      margin-left: 8px;
      width: 9ch; 
      box-sizing: border-box;
    }

    .import-activities {
      display: flex;
      align-items: center;
      margin: 12px; }

    .import-activities label {
      margin-left: 8px; }

    .import-activities .mdi-file-restore-outline {
      margin-right: 8px; }

    .info {
      padding: 16px; 
      border-radius: 8px; 
      border: 1px solid #eeeeee; }

  /************** Popop window ****************/
  .popup-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    justify-content: center; }

  .popup-dialog {
    --mdc-theme-surface: var(--remote-color); /* Hintergrundfarbe */
    --ha-dialog-border-radius: 10px; /* Optional: Rundungen des Dialogs */
    --mdc-dialog-content-padding: 0px;
    --mdc-dialog-min-width: 20vw;
    --mdc-dialog-max-width: 90vw; }

  .popup-dialog img:hover {
    transform: scale(1.1); 
  }   `;let dt=class extends ot{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}configChanged(t){const i=Object.assign({},this._config);i[t.target.name.toString()]=t.target.value,this._config=i;const e=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(e)}colorsConfigChanged(t){var i;const e=Object.assign({},this._config);if(e.colors=Object.assign({},null!==(i=e.colors)&&void 0!==i?i:{}),"HA-ICON"===t.target.tagName){const i=t.target.getAttribute("data-input-name");if(i){const t=this.shadowRoot.querySelector(`[name="${i}"]`);t&&(t.value="",e.colors[i]="")}}else e.colors[t.target.name.toString()]=t.target.value;this._config=e;const o=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}dimensionsConfigChanged(t){var i;const e=Object.assign({},this._config);e.dimensions=Object.assign({},null!==(i=e.dimensions)&&void 0!==i?i:{}),"border_width"===t.target.name?e.dimensions[t.target.name]=t.target.value+"px":e.dimensions[t.target.name]=t.target.value,this._config=e;const o=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(o)}getHarmonyEntityDropdown(t){let i=Object.keys(this.hass.states).filter((t=>t.startsWith("remote."))),e=z``;return""!=this._config.entity&&i.includes(t)||(e=z`<option value="" selected> - - - - </option>`),z`
      ${"Harmony Remote Entity"}:<br>
      <select name="entity" id="entity" class="select-item" .value="${t}"
              @focusout=${this.configChanged}
              @change=${this.configChanged}>
        ${e}
        ${i.map((t=>t!=this._config.entity?z`<option value="${t}">${this.hass.states[t].attributes.friendly_name||t}</option>`:z`<option value="${t}" selected>${this.hass.states[t].attributes.friendly_name||t}</option>`))}
      </select>
      <br><br>
    `}setRemoteName(t){return z`
      ${"Remote Control Name (optional):"}<br>
      <input type="text" name="name" id="remote-name" style="width: 37.8ch; padding: .6em; font-size: 1em;" .value="${t||""}"
             @input=${this.configChanged}>
      <br><br>
    `}selectColors(t){return t&&t.colors||(t={colors:{buttons:"",text:"",background:"",border:""}}),z`
      <hr style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;">
      <div class="heading">Colors</div>
      <div>
        <input type="color" name="background" id="background" .value="${t.colors.background||""}"
               @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="background" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="background">Background Color</label>
      </div>
      <div>
        <input type="color" name="text" id="text" .value="${t.colors.text||""}"
               @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="text" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="text">Text Color</label>
      </div>
      <div>
        <input type="color" name="border" id="border" .value="${t.colors.border||""}"
               @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="border" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="border">Border Color</label>
      </div>
    `}setDimensions(t){const i=Object.assign(Object.assign({},{scale:1,border_width:1}),t||{}),e=parseFloat(i.border_width);return z`
      <hr style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;">
      <div class="heading" style="margin-bottom: -10px;">${"Dimensions"}:</div>
      <br>
      <label for="scale" style="margin-top:0px;">Card Scale: ${i.scale}</label><br>
      <input type="range" min="0.5" max="1.5" step="0.01" .value="${i.scale}" id="scale" name="scale" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
      <br><br>
      <label for="border_width">Card Border Width: ${e}px</label><br>
      <input type="range" min="1" max="5" step="1" .value="${e}" id="border_width" name="border_width" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
      <br>
    `}importActivities(){return z`
      <hr style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;">
      <div class="import-activities">
        <input type="checkbox" id="importActivitiesCheckbox" @change=${this.handleImportActivitiesCheckboxChange} />
        <ha-icon data-input-name="text" icon="mdi:chevron-left"></ha-icon>
        <label for="importActivitiesCheckbox">Synchronize Activities from Harmony</label>
        <div style="margin-left: 20px">
          <i>Use this for initialization of known activities in Home Assistant.<br>
          Hint: You still have to fill in the device_id element for each activity below!</i>
        </div>
      </div>
      <hr style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;">
    `}handleImportActivitiesCheckboxChange(t){const i=t.target;t.target.checked&&this.syncActivities(),setTimeout((()=>{i.checked=!1}),200)}checkActivities(){const t=this._config.activities||{};if("object"!=typeof t||null===t)return z`
        <div class="import-activities">
          <label for="checkActivitiesNo">"No activities configured, yet"</label>
        </div>
      `;const i=Object.keys(t);return i.length>0?z`
        <div class="heading" style="margin-bottom: -10px;">Activities:</div>
        <br>
        <div class="outer-container">
          ${i.map(((i,e)=>{let o=Object.assign({},t[i]);if(!o.device_id){o.device_id="-1";const t=Object.assign(Object.assign({},this._config.activities),{[i]:o});this._config=Object.assign(Object.assign({},this._config),{activities:t}),this.requestUpdate()}return z`
              <div class="activity-container">
                <div class="form-group">
                  <label for="activity-${e}-key" class="activity-identifier">${i}:</label>
                  <input type="text" id="activity-${e}-device-id" .value="${o.device_id}"
                    @input="${t=>this._updateDeviceId(i,t.target.value)}"
                    maxlength="9"
                    class="activity-input">
                </div>
              </div>
            `}))}
        </div>
      `:z`
        <div class="import-activities">
          <label for="checkActivitiesNo">"No activities configured, yet"</label>
        </div>
      `}_updateDeviceId(t,i){const e=Object.assign(Object.assign({},this._config.activities[t]),{device_id:i}),o=Object.assign(Object.assign({},this._config.activities),{[t]:e});this._config=Object.assign(Object.assign({},this._config),{activities:o}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}syncActivities(){const t=this.hass.states[this._config.entity].attributes.activity_list||[],i=Object.assign({},this._config);i.activities?i.activities=Object.assign({},i.activities):i.activities={};const e=Object.keys(i.activities);t.filter((t=>!e.includes(t))).forEach((t=>{i.activities[t]={device_id:-1}}));e.filter((i=>!t.includes(i))).forEach((t=>{delete i.activities[t]})),this._config=i;const o=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(o)}render(){return this.hass&&this._config?z`
      <div class="card-config">
        ${this.getHarmonyEntityDropdown(this._config.entity)}
        ${this.setRemoteName(this._config.name)}
        ${this.selectColors(this._config)}
        ${this.setDimensions(this._config.dimensions)}
        ${this.importActivities()}
        ${this.checkActivities()}
        <br>
        <div class="info">
          <div class="heading">Additional Info:</div>
          <div>
            <u>Hint:</u> Please find the number of each configured activity in the root directory of Home Assistant in the file <b><~/harmony_??????.conf></b>.<br>
            Each device listed in there has its own ID, like <i><"id": "77085993"></i>. Take this number for each device listed above and fill it in there.<br>
          </div>
          <hr style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;">
          For more options please visit <a href="https://github.com/dezihh/my-harmony-card" target="_blank">https://github.com/dezihh/my-harmony-card</a>.
          <div class="donations" style="display: flex">
            <a href="https://buymeacoffee.com/dezi" target="_blank">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;">
            </a>
          </div>
        </div>
      </div>
    `:z``}static get styles(){return ht}};dt=t([st(lt)],dt);console.info("%c  My Harmony Remote Control Card  \n%c  version: v@MY_HARMOY_CARD_VERSION_PLACEHOLDER@  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const ut=window;ut.customCards=ut.customCards||[],ut.customCards.push({type:ct,name:"My Harmony Remote Control Card",preview:!0,description:"Remote control card for Harmony Companion Remote Controllers"});let pt=class extends ot{static get styles(){return ht}static getConfigElement(){return document.createElement(lt)}static getStubConfig(t){let i=Object.keys(t.entities).filter((t=>t.startsWith("remote.")));const e=i.length>0?i[0]:"";return{type:`custom:${ct}`,entity:e}}_getFavorites(){var t;const i=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity];return((null==i?void 0:i.favorites)||[]).map((t=>({number:t.number,image:t.image})))}_handle123ButtonDown(t){"touchstart"===t.type&&t.touches.length>1||(t.preventDefault(),this.isButtonPressed=!0,this.buttonTimeout=setTimeout((()=>{this._getFavorites().length>0&&this._popcard(),this.isButtonPressed=!1}),500))}_handle123ButtonUp(t){t.preventDefault(),this.isButtonPressed&&(this._show_keypad=!this._show_keypad),this.buttonTimeout&&(clearTimeout(this.buttonTimeout),this.buttonTimeout=null),this.isButtonPressed=!1}_handleButtonDown(t,i){this.isButtonPressed=!0,this.buttonTimeout=setTimeout((()=>{this.isButtonPressed&&("media"===i?this._moreMediaPlayer():this._button(i),this.isButtonPressed=!1)}),500)}_handleButtonUp(t){this.isButtonPressed&&this._button(t),this.buttonTimeout&&(clearTimeout(this.buttonTimeout),this.buttonTimeout=null),this.isButtonPressed=!1}static get properties(){return{hass:{},config:{},_show_keypad:{},_show_activity:{},_show_vol_text:{},_current_activity:{type:String}}}constructor(){super(),this.isButtonPressed=!1,this.buttonTimeout=null,this._show_keypad=!1,this._show_activity=!1,this._current_activity="",this.debug=!1,this._dialogOpen=!1}_toggleDialog(){this._dialogOpen=!this._dialogOpen,this.requestUpdate()}_popcard(){this._dialogOpen=!0,this.requestUpdate()}_moreMediaPlayer(){const t=this.config.activities[this._current_activity].player_name;t&&function(t,i,e,o){o=o||{},e=null==e?{}:e;var n=new Event(i,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=e,t.dispatchEvent(n)}(this,"hass-more-info",{entityId:t}),this.debug&&console.log("More Info media_player called",t)}_renderTable(){const t=this._getFavorites(),i=this.config.favsize?this.config.favsize:50,e=this.config.faviconpath?this.config.faviconpath:"/local/community/my-harmony-card/stations/";return z`
        <!-- <tbody>  -->
          <!-- <div class="popup-container"> -->
            ${t.map((t=>z`
                  <img style="max-height: ${i}px;" src='${e}${t.image}' alt="${t.number}" @click=${()=>this._chanchange(t.number)} />
              <!-- </div>   -->         
            `))}
       <!-- </tbody>-->
    `}render(){var t;const i=this.hass.states[this.config.entity];this.config.color_buttons,this._current_activity=i.attributes.current_activity;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity];e?(this.defaultDeviceId=e.device_id||null,this.volumeDeviceId=e.volume_device_id||this.defaultDeviceId):(this.defaultDeviceId=-1,this.volumeDeviceId=-1,this._current_activity="PowerOff");const o="PowerOff"===this._current_activity?"red":"green";this.debug&&console.log(`Current Activity ${i.attributes.current_activity} - DeviceID: ${e.device_id} `);const n=this.config.dimensions&&this.config.dimensions.border_width?this.config.dimensions.border_width:"1px",s=this.config.dimensions&&this.config.dimensions.scale?this.config.dimensions.scale:1,r=Math.round(260*s)+"px",a=this.config.colors&&this.config.colors.background?this.config.colors.background:"var( --ha-card-background, var(--card-background-color, white) )",c=this.config.colors&&this.config.colors.border?this.config.colors.border:"var(--primary-text-color)",l=this.config.colors&&this.config.colors.buttons?this.config.colors.buttons:"var(--secondary-background-color)",h=this.config.colors&&this.config.colors.text?this.config.colors.text:"var(--primary-text-color)";return z`

        <div class="card">
            <div class="page"
                 style="--remote-button-color: ${l};
                        --remote-text-color: ${h};
                        --remote-color: ${a};
                        --remotewidth: ${r};
                        --main-border-color: ${c};
                        --main-border-width: ${n};
                        --scale: ${s}">

                <!-- Power row -->
                ${this.config.name?z` <div class="tv_title" style="color:${h}" >${this.config.name}</div> `:""}
                <div class="grid-container-power" style="--remotewidth: ${r}">

                    <button class="btn-flat flat-high ripple btn-text"
                      @click=${()=>this._show_activity=!this._show_activity}
                      title=${this.config.tooltip?"Action Selector":""}>
                    ACT</button>

                    <button class="btn ripple"
                      @click=${()=>this._select_activity("PowerOff")}>
                      <ha-icon class="msc" icon="mdi:power"  style="color: ${o};"/
                      title=${this.config.tooltip?this._current_activity:"Off"}></button>

                    <button class="btn-flat flat-high ripple btn-text"
                      @mousedown=${this._handle123ButtonDown}
                      @mouseup=${this._handle123ButtonUp}
                      @touchstart=${this._handle123ButtonDown}
                      @touchend=${this._handle123ButtonUp}
                      @touchcancel=${this._handle123ButtonUp}  // Füge touchcancel hinzu, um eventuelle Unterbrechungen zu behandeln
                      title=${this.config.tooltip?"Number Keypad":""}>
                      123
                    </button>


                </div>

                ${this._show_activity?z`

                    <!--  Activity Overlay  -->
                    <div class="grid-container-act">
                        <button class="ripple bnt-act-back"
                          @click=${()=>this._show_activity=!1}>
                          <ha-icon icon="mdi:undo-variant"/></button>

                        <p class="act_text" style="color:${h}"><b>ACTIONS</b></p>
                        <div class="grid-item-act">
                           ${i.attributes.activity_list.map((t=>z`
                                <button class="${i.attributes.current_activity===t?"btn-act-on":"btn-act ripple overlay"}" @click=${()=>{this._select_activity(t),this._show_activity=!1}}>${t}</button>
                            `))}
                        </div>
                    </div>

                     <!--  Activity Overlay END  -->
                    `:z`

                ${this._show_keypad?z`
                    <!--  Keypad Overlay  -->
                    <div class="grid-container-keypad">
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("1")}>1</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("2")}>2</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("3")}>3</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("4")}>4</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("5")}>5</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("6")}>6</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("7")}>7</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("8")}>8</button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("9")}>9</button>
                         <button class="btn-keypad"></button>
                         <button class="btn-keypad ripple" @click=${()=>this._chanchange("0")}>0</button>
                         <button class="btn-keypad"></button>
                    </div>
                `:z`

                <!-- Call Popup Window -->
                  ${this._dialogOpen?z`
                    <ha-dialog  class="popup-dialog" open @closed="${this._toggleDialog}" > ${this._renderTable()}
                      <hr>
                      <mwc-button slot="primaryAction" dialogAction="close"> Close </mwc-button>   
                    </ha-dialog> 
                    
                    `:""}

                    <!-- DIRECTION PAD  -->
                    <div class="grid-container-cursor">
                      <div class="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 79">
                          <path
                             d="m 30 15
                                a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15
                                a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15"
                             fill="var(--remote-button-color)"
                             stroke="#000000" stroke-width="0" />
                          </svg>
                      </div>
                         <button class="btn ripple item_guide"
                            @click=${()=>{var t,i;return this._button(null!==(i=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Guide)&&void 0!==i?i:"Guide")}}
                            title=${this.config.tooltip?"Guide":""}>
                         <ha-icon class="msc" icon="mdi:television-guide"/> </button>

                         <button class="btn ripple item_up" style="background-color: transparent;"
                            @click=${()=>this._button("DirectionUp")}><ha-icon class="msc" icon="mdi:chevron-up"/></button>
                         
                         <button class="btn ripple item_act"
                            @mousedown=${t=>this._handleButtonDown("Menu","media")}
                            @mouseup=${t=>this._handleButtonUp("Menu")}
                            @touchstart=${t=>this._handleButtonDown("Menu","media")}
                            @touchend=${t=>this._handleButtonUp("menu")}
                            title=${this.config.tooltip?"Menu/Mediaplayer":""}>
                         <ha-icon class="msc" icon="mdi:silverware-fork-knife"/></button>

                         <button class="btn ripple item_2_sx" style="background-color: transparent;"
                            @click=${()=>this._button("Left")}>
                         <ha-icon class="msc" icon="mdi:chevron-left"/></button>

                         <div class="ok_button ripple item_2_c"
                            style="border: solid 2px ${a}"
                            @click=${()=>{var t,i;return this._button(null!==(i=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.OK)&&void 0!==i?i:"OK")}}>
                         OK</div>

                         <button class="btn ripple item_right"
                            style="background-color: transparent;"                            
                            @click=${()=>this._button("DirectionRight")}>
                            <ha-icon class="msc" icon="mdi:chevron-right"/></button>


                         <button class="btn ripple item_back"
                            @click=${()=>{var t,i;return this._button(null!==(i=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Back)&&void 0!==i?i:"Back")}}>
                         <ha-icon class="msc" icon="mdi:undo-variant"/></button>

                         <button class="btn ripple item_down"
                            style="background-color: transparent;"
                            @click=${()=>this._button("DirectionDown")}>
                         <ha-icon class="msc" icon="mdi:chevron-down"/></button>

                         <button class="btn ripple item_exit" @click=${()=>this._button("Exit")}>EXIT</button>
                       </div>   `}
                       <!-- DIRECTION PAD END  -->

                       <!-- Extra BUTTONS  -->
                       <div class="grid-container-extra">
                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button1?z`
                              <button class="ripple btn-extra"
                                @click=${()=>this._button(this.config.activities[this._current_activity].Button1.command)}
                                title=${this.config.activities[this._current_activity].Button1.tooltip||""}>
                                ${this.config.activities[this._current_activity].Button1.icon?z`<ha-icon class="mdi-extra" icon="${this.config.activities[this._current_activity].Button1.icon}"></ha-icon>`:this.config.activities[this._current_activity].Button1.name}
                              </button>`:""}

                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button2?z`
                              <button class="ripple btn-extra"
                                @click=${()=>this._button(this.config.activities[this._current_activity].Button2.command)}
                                title=${this.config.activities[this._current_activity].Button2.tooltip||""}>
                                ${this.config.activities[this._current_activity].Button2.icon?z`<ha-icon class="mdi-extra" icon="${this.config.activities[this._current_activity].Button2.icon}"></ha-icon>`:this.config.activities[this._current_activity].Button2.name}
                              </button>`:""}

                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button3?z`
                              <button class="ripple btn-extra"
                                @click=${()=>this._button(this.config.activities[this._current_activity].Button3.command)}
                                title=${this.config.activities[this._current_activity].Button3.tooltip||""}>
                                ${this.config.activities[this._current_activity].Button3.icon?z`<ha-icon class="mdi-extra" icon="${this.config.activities[this._current_activity].Button3.icon}"></ha-icon>`:this.config.activities[this._current_activity].Button3.name}
                              </button>`:""}

                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button4?z`
                              <button class="ripple btn-extra"
                                @click=${()=>this._button(this.config.activities[this._current_activity].Button2.command)}
                                title=${this.config.activities[this._current_activity].Button4.tooltip||""}>
                                ${this.config.activities[this._current_activity].Button4.icon?z`<ha-icon class="mdi-extra" icon="${this.config.activities[this._current_activity].Button4.icon}"></ha-icon>`:this.config.activities[this._current_activity].Button4.name}
                              </button>`:""}
                       </div>
                       <!--  Extra buttons end -->

                       <!-- COLORED BUTTONS -->
                       <div class="grid-container-color_btn">
                         <button class="btn-color ripple" style="background-color: red; height: calc(var(--remotewidth) / 12);" @click=${()=>this._button("Red")}></button>
                         <button class="btn-color ripple" style="background-color: green; height: calc(var(--remotewidth) / 12);" @click=${()=>this._button("Green")}></button>
                         <button class="btn-color ripple" style="background-color: yellow; height: calc(var(--remotewidth) / 12);" @click=${()=>this._button("Yellow")}></button>
                         <button class="btn-color ripple" style="background-color: blue; height: calc(var(--remotewidth) / 12);" @click=${()=>this._button("Blue")}></button>
                       </div>
                        <!-- COLORED BUTTONS END  -->


                    <div class="grid-container-volume-channel-control" >
                         <button class="btn ripple" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("VolumeUp")}>
                          <ha-icon class="msc" icon="mdi:plus"/></button>

                         <button class="btn-flat flat-high ripple" style="margin-top: 0px; height: 65%;"
                            @click=${()=>{var t,i;return this._button(null!==(i=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Home)&&void 0!==i?i:"Home")}}
                            title=${this.config.tooltip?"Home":""}>
                           <ha-icon class="msc" icon="mdi:home" ></ha-icon> </button>

                         <button class="btn ripple" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("ChannelUp")}>
                          <ha-icon class="msc" icon="mdi:chevron-up"/></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon class="msc" icon="mdi:volume-high"/></button>

                         <button class="btn ripple" Style="height: 100%;"
                            @click=${()=>this._button("Mute")}><span>
                          <ha-icon class="msc" icon="mdi:volume-mute"></span></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon class="msc" icon="mdi:parking"/></button>

                         <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("VolumeDown")}>
                          <ha-icon class="msc" icon="mdi:minus"/></button>

                         <button class="btn-flat flat-high ripple" style="margin-bottom: 0px; height: 65%;"
                            @click=${()=>{var t,i;return this._button(null!==(i=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Info)&&void 0!==i?i:"Info")}}
                            title=${this.config.tooltip?"Info":""}>
                          <ha-icon class="msc" icon="mdi:information-variant"/></button>

                         <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("ChannelDown")}>
                          <ha-icon class="msc" icon="mdi:chevron-down"/></button>
                        </div>

                    <!--  MEDIA CONTROL -->
                    <div class="grid-container-media-control">
                         <button class="btn-flat flat-low ripple" @click=${()=>this._button("Play")}><ha-icon class="msc" icon="mdi:play"/></button>
                         <button class="btn-flat flat-low ripple"  @click=${()=>this._button("Pause")}><ha-icon class="msc" icon="mdi:pause"/></button>
                         <button class="btn-flat flat-low ripple"  @click=${()=>this._button("Stop")}><ha-icon class="msc" icon="mdi:stop"/></button>
                         <button class="btn-flat flat-low ripple"
                            @mousedown=${t=>this._handleButtonDown("Rewind","SkipBack")}
                            @mouseup=${t=>this._handleButtonUp("Rewind")}
                            @touchstart=${t=>this._handleButtonDown("Rewind","SkipBack")}
                            @touchend=${t=>this._handleButtonUp("Rewind")}>
                          <ha-icon class="msc" icon="mdi:skip-backward" /> </button>

                         <button class="btn-flat flat-low ripple" style="color: red;" @click=${()=>this._button("Record")}><ha-icon class="msc" icon="mdi:record"/></button>

                         <button class="btn-flat flat-low ripple"
                           @mousedown=${t=>this._handleButtonDown("FastForward","SkipForward")}
                           @mouseup=${t=>this._handleButtonUp("FastForward")}
                           @touchstart=${t=>this._handleButtonDown("FastForward","SkipForward")}
                           @touchend=${t=>this._handleButtonUp("FastForward")}>
                          <ha-icon class="msc" icon="mdi:skip-forward"></ha-icon> </button>
                    </div>
                        <!-- ################################# MEDIA CONTROL END ################################# -->
                        </div>
                    `}
            </div>
         </div> `}_button(t){const i=this.config.activities[this._current_activity];let e;e=("VolumeUp"===t||"VolumeDown"===t)&&i.volume_device_id?i.volume_device_id:i.device_id,this.hass.callService("remote","send_command",{entity_id:this.config.entity,device:e,command:t}),this.debug&&console.log(`_button Pressed - DeviceId: ${e} - Command: ${t} - entity_id: ${this.config.entity}`)}_select_activity(t){this.hass.callService("remote","turn_on",{entity_id:this.config.entity,activity:t})}_chanchange(t){console.log("Kanal:",t),this.hass.callService("harmony","change_channel",{entity_id:this.config.entity,channel:t})}setConfig(t){if(!t.entity)throw new Error("Invalid configuration");this.config=t,this.debug=!0===t.debug}getCardSize(){return 15}};pt=t([st(ct)],pt);
