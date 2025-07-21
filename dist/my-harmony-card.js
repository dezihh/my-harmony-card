function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,b=p.trustedTypes,m=b?b.emptyScript:"",g=p.reactiveElementPolyfillSupport,v=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);n.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??_)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=w.trustedTypes,k=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,S=`<${E}>`,O=document,B=()=>O.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,U="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,N=/>/g,H=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,j=/"/g,z=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),K=new WeakMap,W=O.createTreeWalker(O,129);function V(t,e){if(!T(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}class q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[c,l]=((t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===R?"!--"===c[1]?r=D:void 0!==c[1]?r=N:void 0!==c[2]?(z.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=H):void 0!==c[3]&&(r=H):r===H?">"===c[0]?(r=n??R,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?H:'"'===c[3]?j:M):r===j||r===M?r=H:r===D||r===N?r=R:(r=H,n=void 0);const h=r===H&&t[e+1].startsWith("/>")?" ":"";s+=r===R?i+S:l>=0?(o.push(a),i.slice(0,l)+A+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[V(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]})(t,e);if(this.el=q.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=W.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(A)){const e=l[s++],i=o.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Z:"?"===r[1]?Q:"@"===r[1]?tt:X}),o.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(z.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],B()),W.nextNode(),a.push({type:2,index:++n});o.append(t[e],B())}}}else if(8===o.nodeType)if(o.data===E)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,o){if(e===F)return e;let n=void 0!==o?i.o?.[o]:i.l;const s=P(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,o)),void 0!==o?(i.o??=[])[o]=n:i.l=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,o)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??O).importNode(e,!0);W.currentNode=o;let n=W.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new J(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new et(n,this,t)),this._$AV.push(e),a=i[++r]}s!==a?.index&&(n=W.nextNode(),s++)}return W.currentNode=O,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,o){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this.v=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),P(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>T(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new Y(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new q(t)),e}k(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new J(this.O(B()),this.O(B()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=G(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,o[i+r],e,r),a===F&&(a=this._$AH[r]),s||=!P(a)||a!==this._$AH[r],a===L?t=L:t!==L&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Z extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class Q extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class tt extends X{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??L)===F)return;const i=this._$AH,o=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==L&&(i===L||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const it=w.litHtmlPolyfillSupport;it?.(q,J),(w.litHtmlVersions??=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new J(e.insertBefore(B(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return F}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var rt,at;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(rt||(rt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(at||(at={}));const ct="my-harmony-card",lt="my-harmony-card-editor",dt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(i,t,o)})`
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  /* General macro for buttons with hover and click effects */
  .button-style {
      color: var(--remote-text-color);
      border-radius: calc(var(--remotewidth)/10);
      cursor: pointer;
      transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, filter 0.1s ease-in-out;
  }

  /* Hover-Effekt */
  .button-style:hover {
      filter: brightness(1.1) saturate(1.2); /*Helligkeit und Sättigung der Hintergrundfarbe beim Hover erhöhen */
    /* filter: sepia(0.3) hue-rotate(10deg) brightness(1.2); */ 
      transform: scale(1.1);
      /* filter: invert(0.1) brightness(1.1); */ 
  }

  /* Klick-Effekt Active-state) */
  .button-style:active {
      transform: scale(0.95);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      filter: brightness(1.2) saturate(1.5); /* Noch stärkerer Effekt beim Klick */
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

  /* Button for actual activity above Power*/
  .btn-act-action {
      width: fit-content;
      text-align: center;
      display: list-item;
      align-items: center; /* Centers the content vertically */
      justify-content: center; /* Centers the content horentionaly */
      margin: auto;
      width: calc(var(--remotewidth)/1.1);
      margin-top: 8px;
      font-size: calc(var(--scale) * 22px); 
      font-weight: normal;
      padding: calc(var(--remotewidth)/52)  calc(var(--remotewidth)/26); 
      border: 0px solid transparent;
      border-radius: calc(var(--remotewidth)/10);
      background-color: var(--remote-button-color);  
      cursor: pointer;
      overflow: hidden; /* Ensures text stays within the defined area */
      white-space: nowrap;
      transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, filter 0.1s ease-in-out;
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

/* Position of the card itself on lovelance */
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
    margin-top:8px;
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
    margin-top:8px;         
    gap: 4px;
    padding: 0px;
  }  

  .grid-container-extra_2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-color: transparent;
    width: calc(var(--remotewidth)/1.1);
    overflow: hidden;
    margin: auto;
    margin-top:8px;         
    gap: 4px;
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

  .grid-container-media-control {
    /* grid-template-rows: 1fr 1fr;
    height: calc(var(--remotewidth)/2.85);*/
      display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 Spalten */
  grid-template-rows: 1fr 1fr; /* 2 Reihen */
  height: calc(var(--remotewidth)/4);
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
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 Spalten */
    grid-template-rows: 1fr 1fr; /* 2 Reihen */
    height: calc(var(--remotewidth)/2.85);
  }

  /* Overlay Action selector */
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
    border-radius: calc(var(--remotewidth)/9);
    border-width: 0;
    place-items: center;
    cursor: pointer;
    }

  .btn-color {
    width: 85%;
    height: 100%
    margin: auto;
    background-color: inherit;
  }

  .btn-red {
      background-color: red;
  }

  .btn-blue {
      background-color: blue;
  }

  .btn-green {
      background-color: green;
  }

  .btn-yellow {
      background-color: yellow;
  }

  /* ACT Text */
  .btn-act, .btn-act-on {
      font-size: calc(var(--remotewidth)/10.5);
      height: calc(var(--remotewidth)/7.2226);
      border-width: 0;
      border-radius: calc(var(--remotewidth)/20);
      margin: calc(var(--remotewidth)/47);
      place-items: center;
      display: list-item;
      cursor: pointer;
      text-wrap: nowrap;
      display: inline-block;
      max-width: 100%;
  }

  .btn-act-scroll {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    animation: scroll-text 5s linear infinite alternate;
  }

  @keyframes scroll-text {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(calc(-100% + 100px)); /* Adjust 100px to the width of the container */
    }
  }

  .btn-act {
      background-color: var(--remote-button-color);
      color: var(--remote-text-color);
      border: solid 2px var(--remote-color);
      transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, filter 0.1s ease-in-out;
  }

  /* Effect on Hover */
  .btn-act:hover {
      filter: brightness(1.1) saturate(1.2); /* Helligkeit und Sättigung der Hintergrundfarbe und des Rahmens beim Hover erhöhen */
  }

  /* Effekt on activfation (click) */
  .btn-act:active {
      transform: scale(0.95);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      filter: brightness(1.2) saturate(1.5); /* Noch stärkerer Effekt beim Klick */
  }

  .btn-act-on {
      /* background-color: var(--primary-color); */
      background-color: var(--remote-button-color);
      /*color: #fff;*/
      filter: invert(1);
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
    --mdc-theme-surface: var(--popup-color); /* Hintergrundfarbe */
    --ha-dialog-border-radius: 10px; /* Optional: Rundungen des Dialogs */
    --mdc-dialog-content-padding: 0px;
    --mdc-dialog-min-width: 20vw;
    --mdc-dialog-max-width: 90vw; }

  .popup-dialog img:hover {
    transform: scale(1.1); 
  }   `;let ht=class extends ot{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t}configChanged(t){const e=Object.assign({},this._config);e[t.target.name.toString()]=t.target.value,this._config=e;const i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}colorsConfigChanged(t){var e;const i=Object.assign({},this._config);if(i.colors=Object.assign({},null!==(e=i.colors)&&void 0!==e?e:{}),"HA-ICON"===t.target.tagName){const e=t.target.getAttribute("data-input-name");if(e){const t=this.shadowRoot.querySelector(`[name="${e}"]`);t&&(t.value="",i.colors[e]="")}}else i.colors[t.target.name.toString()]=t.target.value;this._config=i;const o=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(o)}dimensionsConfigChanged(t){var e;const i=Object.assign({},this._config);i.dimensions=Object.assign({},null!==(e=i.dimensions)&&void 0!==e?e:{}),"border_width"===t.target.name?i.dimensions[t.target.name]=t.target.value+"px":i.dimensions[t.target.name]=t.target.value,this._config=i;const o=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(o)}getHarmonyEntityDropdown(t){let e=Object.keys(this.hass.states).filter((t=>t.startsWith("remote."))),i=I``;return""!=this._config.entity&&e.includes(t)||(i=I`<option value="" selected>- - - -</option>`),I`
      ${"Harmony Remote Entity"}:<br />
      <select
        name="entity"
        id="entity"
        class="select-item"
        .value="${t}"
        @focusout=${this.configChanged}
        @change=${this.configChanged}
      >
        ${i}
        ${e.map((t=>t!=this._config.entity?I`<option value="${t}">
              ${this.hass.states[t].attributes.friendly_name||t}
            </option>`:I`<option value="${t}" selected>
              ${this.hass.states[t].attributes.friendly_name||t}
            </option>`))}
      </select>
      <br /><br />
    `}setRemoteName(t){return I`
      ${"Remote Control Name (optional):"}<br />
      <input
        type="text"
        name="name"
        id="remote-name"
        style="width: 37.8ch; padding: .6em; font-size: 1em;"
        .value="${t||""}"
        @input=${this.configChanged}
      />
      <br /><br />
    `}selectColors(t){return t&&t.colors||(t={colors:{buttons:"",text:"",background:"",border:""}}),I`
      <hr style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;">
      <div class="heading">Colors</div>
      <div>
        <input type="color" name="buttons" id="buttons"  .value="${t.colors&&t.colors.buttons||""}"
             @input=${this.colorsConfigChanged}></input>
        <ha-icon data-input-name="buttons" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="background">Button Color</label>

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

        <input type="color" name="popup" id="popup" .value="${t.colors.popup||""}"
            @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="text" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="text">Popup Background Color</label>
      </div>
      <div>
        <input type="color" name="border" id="border" .value="${t.colors.border||""}"
               @input=${this.colorsConfigChanged}>
        <ha-icon data-input-name="border" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
        <label class="color-item" for="border">Border Color</label>
      </div>
    `}setDimensions(t){const e=Object.assign(Object.assign({},{scale:1,border_width:1}),t||{}),i=parseFloat(e.border_width);return I`
      <hr
        style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
      />
      <div class="heading" style="margin-bottom: -10px;">${"Dimensions"}:</div>
      <br />
      <label for="scale" style="margin-top:0px;"
        >Card Scale: ${e.scale}</label
      ><br />
      <input
        type="range"
        min="0.5"
        max="1.5"
        step="0.01"
        .value="${e.scale}"
        id="scale"
        name="scale"
        @input=${this.dimensionsConfigChanged}
        style="width: 40ch;"
      />
      <br /><br />
      <label for="border_width">Card Border Width: ${i}px</label
      ><br />
      <input
        type="range"
        min="1"
        max="5"
        step="1"
        .value="${i}"
        id="border_width"
        name="border_width"
        @input=${this.dimensionsConfigChanged}
        style="width: 40ch;"
      />
      <br />
    `}importActivities(){return I`
      <hr
        style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
      />
      <div class="import-activities">
        <input
          type="checkbox"
          id="importActivitiesCheckbox"
          @change=${this.handleImportActivitiesCheckboxChange}
        />
        <ha-icon data-input-name="text" icon="mdi:chevron-left"></ha-icon>
        <label for="importActivitiesCheckbox"
          >Synchronize Activities from Harmony</label
        >
        <div style="margin-left: 20px">
          <i
            >Use this for initialization of known activities in Home
            Assistant.<br />
            Hint: You still have to fill in the device_id element for each
            activity below!</i
          >
        </div>
      </div>
      <hr
        style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
      />
    `}handleImportActivitiesCheckboxChange(t){const e=t.target;t.target.checked&&this.syncActivities(),setTimeout((()=>{e.checked=!1}),200)}checkActivities(){const t=this._config.activities||{};if("object"!=typeof t||null===t)return I`
        <div class="import-activities">
          <label for="checkActivitiesNo">"No activities configured, yet"</label>
        </div>
      `;const e=Object.keys(t);return e.length>0?I`
        <div class="heading" style="margin-bottom: -10px;">Activities:</div>
        <br />
        <div class="outer-container">
          ${e.map(((e,i)=>{let o=Object.assign({},t[e]);if(!o.device_id){o.device_id="0";const t=Object.assign(Object.assign({},this._config.activities),{[e]:o});this._config=Object.assign(Object.assign({},this._config),{activities:t}),this.requestUpdate()}return I`
              <div class="activity-container">
                <div class="form-group">
                  <label for="activity-${i}-key" class="activity-identifier"
                    >${e}:</label
                  >
                  <input
                    type="text"
                    id="activity-${i}-device-id"
                    .value="${o.device_id}"
                    @input="${t=>this._updateDeviceId(e,t.target.value)}"
                    maxlength="9"
                    class="activity-input"
                  />
                </div>
              </div>
            `}))}
        </div>
      `:I`
        <div class="import-activities">
          <label for="checkActivitiesNo">"No activities configured, yet"</label>
        </div>
      `}_updateDeviceId(t,e){const i=Object.assign(Object.assign({},this._config.activities[t]),{device_id:e}),o=Object.assign(Object.assign({},this._config.activities),{[t]:i});this._config=Object.assign(Object.assign({},this._config),{activities:o}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}syncActivities(){const t=this.hass.states[this._config.entity].attributes.activity_list||[],e=Object.assign({},this._config);e.activities?e.activities=Object.assign({},e.activities):e.activities={};const i=Object.keys(e.activities);t.filter((t=>!i.includes(t))).forEach((t=>{e.activities[t]={device_id:0}}));i.filter((e=>!t.includes(e))).forEach((t=>{delete e.activities[t]})),this._config=e;const o=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(o)}render(){return this.hass&&this._config?I`
      <div class="card-config">
        ${this.getHarmonyEntityDropdown(this._config.entity)}
        ${this.setRemoteName(this._config.name)}
        ${this.selectColors(this._config)}
        ${this.setDimensions(this._config.dimensions)}
        ${this.importActivities()} ${this.checkActivities()}
        <br />
        <div class="info">
          <div class="heading">Additional Info:</div>
          <div>
            <u>Hint:</u> Please find the number of each configured activity in
            the root directory of Home Assistant in the file
            <b><~/harmony_??????.conf></b>.<br />
            Each device listed in there has its own ID, like
            <i><"id": "77085993"></i>. Take this number for each device listed
            above and fill it in there.<br />
          </div>
          <hr
            style="width: 100%; height: 1px; border: none; border-top: 1px solid #eeeeee;"
          />
          For more options please visit
          <a href="https://github.com/dezihh/my-harmony-card" target="_blank"
            >https://github.com/dezihh/my-harmony-card</a
          >.
          <div class="donations" style="display: flex">
            <a href="https://buymeacoffee.com/dezi" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                style="height: 60px !important;width: 217px !important;"
              />
            </a>
          </div>
        </div>
      </div>
    `:I``}static get styles(){return dt}};ht=t([st(lt)],ht);console.info("%c  My Harmony Remote Control Card  \n%c  version: @MY_HARMONY_CARD_PLACEHOLDER@  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const ut=window;ut.customCards=ut.customCards||[],ut.customCards.push({type:ct,name:"My Harmony Remote Control Card",preview:!0,description:"Remote control card for Harmony Companion Remote Controllers"});let pt=class extends ot{static get styles(){return dt}static getConfigElement(){return document.createElement(lt)}static getStubConfig(t){let e=Object.keys(t.entities).filter((t=>t.startsWith("remote.")));const i=e.length>0?e[0]:"";return{type:`custom:${ct}`,entity:i}}_getFavorites(){var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity];return((null==e?void 0:e.favorites)||[]).map(((t,e)=>{const{number:i,service:o,image:n,data:s,target:r}=t,a=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(i[o[n]]=t[o[n]])}return i}(t,["number","service","image","data","target"]);return{number:i,service:o?Object.assign({name:"string"==typeof o?o:o.name,data:o.data,target:o.target},a):void 0,contextPath:o?`activities.${this._current_activity}.favorites[${e}]`:void 0,image:n}}))}_handle123ButtonDown(t){"touchstart"===t.type&&t.touches.length>1||(t.preventDefault(),this.isButtonPressed=!0,this.buttonTimeout=setTimeout((()=>{this._popcard(),this.isButtonPressed=!1}),500))}_handle123ButtonUp(t){t.preventDefault(),this.isButtonPressed&&(this._show_keypad=!this._show_keypad),this.buttonTimeout&&(clearTimeout(this.buttonTimeout),this.buttonTimeout=null),this.isButtonPressed=!1}_handleButtonDown(t,e){this.isButtonPressed=!0,this.buttonTimeout=setTimeout((()=>{this.isButtonPressed&&("media"===e?this._moreMediaPlayer():this._button(e),this.isButtonPressed=!1)}),500)}_handleButtonUp(t){this.isButtonPressed&&this._button(t),this.buttonTimeout&&(clearTimeout(this.buttonTimeout),this.buttonTimeout=null),this.isButtonPressed=!1}static get properties(){return{hass:{},config:{},_show_keypad:{},_show_activity:{},_show_vol_text:{},_current_activity:{type:String}}}constructor(){super(),this.isButtonPressed=!1,this.buttonTimeout=null,this._show_keypad=!1,this._show_activity=!1,this._current_activity="",this.debug=!1,this._dialogOpen=!1}_toggleDialog(){this._dialogOpen=!this._dialogOpen,this.requestUpdate()}_popcard(){this._dialogOpen=!0,this.requestUpdate()}_moreMediaPlayer(){const t=this.config.activities[this._current_activity].player_name;t&&function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"hass-more-info",{entityId:t}),this.debug&&console.log("More Info media_player called",t)}_renderTable(){const t=this._getFavorites(),e=this.config.favsize?this.config.favsize:50,i=this.config.faviconpath?this.config.faviconpath:"/local/community/my-harmony-card/stations/";return I`
      <!-- <tbody>  -->
      <!-- <div class="popup-container"> -->
      ${t.map((t=>(t.service&&!0===this.debug&&console.log(`Func: _renderTable.Service: ${JSON.stringify(t.service)}`),I`
          ${t.number?I`
                <img
                  style="max-height: ${e}px;"
                  src="${i}${t.image}"
                  alt="${t.number}"
                  @click=${()=>this._chanchange(t.number)}
                />
              `:t.service?I`
              <!-- ANCHOR v1.40 -->
                <img
                  style="max-height: ${e}px;"
                  src="${i}${t.image}"
                  
                  @click=${()=>this._service(t.service)}
                />
                `:""}
        `)))}
      <!-- </tbody>-->
    `}render(){var t,e;const i=this.hass.states[this.config.entity];this._current_activity=i.attributes.current_activity;const o=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],n="PowerOff"===this._current_activity?"red":"green";this.debug&&console.log(`Func: render - Current Activity ${(null===(e=null==i?void 0:i.attributes)||void 0===e?void 0:e.current_activity)||"N/A"} - DeviceID: ${(null==o?void 0:o.device_id)||"N/A"}`);const s=this.config.dimensions&&this.config.dimensions.border_width?this.config.dimensions.border_width:"1px",r=this.config.dimensions&&this.config.dimensions.scale?this.config.dimensions.scale:1,a=Math.round(260*r)+"px",c=this.config.colors&&this.config.colors.background?this.config.colors.background:"var( --ha-card-background, var(--card-background-color, white) )",l=this.config.colors&&this.config.colors.border?this.config.colors.border:"var(--primary-text-color)",d=this.config.colors&&this.config.colors.buttons?this.config.colors.buttons:"var(--secondary-background-color)",h=this.config.colors&&this.config.colors.text?this.config.colors.text:"var(--primary-text-color)",u=this.config.colors&&this.config.colors.popup?this.config.colors.popup:"var(--popup-color)";return I`

        <div class="card">
            <div class="page"
                 style="--remote-button-color: ${d};
                        --remote-text-color: ${h};
                        --remote-color: ${c};
                        --popup-color: ${u};
                        --remotewidth: ${a};
                        --main-border-color: ${l};
                        --main-border-width: ${s};
                        --scale: ${r}">

                <!-- Power row -->
                ${this.config.name?I` <div class="tv_title" style="color:${h}">${this.config.name}</div> `:""}
                    
                <button class="btn-act-action button-style" style="color:${h}"
                  @click=${()=>this._show_activity=!this._show_activity} 
                  title=${this.config.tooltip?"Action Selector":""}>
                  <span class="scrolling-text ${this._current_activity.length>19?"btn-act-scroll":""}">
                    ${this._current_activity}
                  </span>
                </button>
                <div class="grid-container-power" style="--remotewidth: ${a}">                            
                <!-- FIXME New Function for this button is waiting?-->
                ${(()=>{const t=this.config.Special;return t?I` <button
                        class="btn ripple  button-style"
                        @click=${()=>{t.service?this._service(t.service):t.command&&this._button(t.command)}}
                        title=${t.tooltip||""}
                      >
                        ${t.icon?I`<ha-icon
                              class="mdi-extra button-style"
                              icon="${t.icon}"
                            ></ha-icon>`:t.name}
                      </button>`:I` <button
                        class="btn ripple button-style"
                        style="background: transparent;"
                        disabled
                      ></button>`})()}
                    <button class="btn ripple button-style"
                      @click=${()=>this._select_activity("PowerOff")}>
                      <ha-icon class="msc" icon="mdi:power"  style="color: ${n};"/
                      title=${this.config.tooltip?this._current_activity:"Off"}></button>

                    <button class="btn-flat flat-high ripple btn-text button-style"
                      @mousedown=${this._handle123ButtonDown}
                      @mouseup=${this._handle123ButtonUp}
                      @touchstart=${this._handle123ButtonDown}
                      @touchend=${this._handle123ButtonUp}
                      @touchcancel=${this._handle123ButtonUp}  // Füge touchcancel hinzu, um eventuelle Unterbrechungen zu behandeln
                      title=${this.config.tooltip?"Number Keypad":""}>
                      123
                    </button>


                </div>
<!-- Buttons row -->
                       <!-- Extra BUTTONS #2  -->
                       ${(()=>{var t,e,i,o;return(null===(t=this.config)||void 0===t?void 0:t.ButtonA)||(null===(e=this.config)||void 0===e?void 0:e.ButtonB)||(null===(i=this.config)||void 0===i?void 0:i.ButtonC)||(null===(o=this.config)||void 0===o?void 0:o.ButtonD)?I`
                               <div class="grid-container-extra_2">
                                 ${(()=>{const t=this.config.ButtonA;return t?I` <button
                                         class="ripple btn-extra button-style"
                                         @click=${()=>{t.service?this._service(t.service):t.command&&this._button(t.command)}}
                                         title=${t.tooltip||""}
                                       >
                                         ${t.icon?I`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${t.icon}"
                                             ></ha-icon>`:t.name}
                                       </button>`:""})()}
                                 ${(()=>{const t=this.config.ButtonB;return t?I` <button
                                         class="ripple btn-extra button-style"
                                         @click=${()=>{t.service?this._service(t.service):t.command&&this._button(t.command)}}
                                         title=${t.tooltip||""}
                                       >
                                         ${t.icon?I`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${t.icon}"
                                             ></ha-icon>`:t.name}
                                       </button>`:""})()}
                                 ${(()=>{const t=this.config.ButtonC;return t?I` <button
                                         class="ripple btn-extra button-style"
                                         @click=${()=>{t.service?this._service(t.service):t.command&&this._button(t.command)}}
                                         title=${t.tooltip||""}
                                       >
                                         ${t.icon?I`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${t.icon}"
                                             ></ha-icon>`:t.name}
                                       </button>`:""})()}
                                 ${(()=>{const t=this.config.ButtonD;return t?I` <button
                                         class="ripple btn-extra button-style"
                                         @click=${()=>{t.service?this._service(t.service):t.command&&this._button(t.command)}}
                                         title=${t.tooltip||""}
                                       >
                                         ${t.icon?I`<ha-icon
                                               class="mdi-extra button-style"
                                               icon="${t.icon}"
                                             ></ha-icon>`:t.name}
                                       </button>`:""})()}
                               </div>
                             `:I``})()}                       
                       <!--  Extra buttons end -->
<!-- Remote buttons -->


                ${this._show_activity?I`
                        <!--  Activity Overlay  -->
                        <div class="grid-container-act">
                          <button
                            class="ripple bnt-act-back button-style"
                            @click=${()=>this._show_activity=!1}
                          >
                            <ha-icon icon="mdi:undo-variant" />
                          </button>

                          <p class="act_text" style="color:${h}">
                            <b>ACTIONS</b>
                          </p>

                          <div class="grid-item-act">
                            ${i.attributes.activity_list.map((t=>I`
                                <button
                                  class="button-style 
                                          ${i.attributes.current_activity===t?"btn-act-on":"btn-act ripple overlay"}"
                                  @click=${()=>{this._select_activity(t),this._show_activity=!1}}
                                >
                                  <span
                                    class="${t.length>18?"btn-act-scroll":""}"
                                  >
                                    <div class="scrolling-text">
                                      ${t}
                                    </div>
                                  </span>
                                </button>
                              `))}
                          </div>
                        </div>

                        <!--  Activity Overlay END  -->
                      `:I`

                ${this._show_keypad?I`
                        <!--  Keypad Overlay  -->
                        <div class="grid-container-keypad">
                          <button
                            class="btn-keypad ripple button-style"
                            @click=${()=>this._chanchange("1")}
                          >
                            1
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("2")}
                          >
                            2
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("3")}
                          >
                            3
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("4")}
                          >
                            4
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("5")}
                          >
                            5
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("6")}
                          >
                            6
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("7")}
                          >
                            7
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("8")}
                          >
                            8
                          </button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("9")}
                          >
                            9
                          </button>
                          <button class="btn-keypad"></button>
                          <button
                            class="btn-keypad button-style ripple"
                            @click=${()=>this._chanchange("0")}
                          >
                            0
                          </button>
                          <button class="btn-keypad"></button>
                        </div>
                      `:I`
                        <!-- Call Popup Window -->
                        ${this._dialogOpen?I`
                              <ha-dialog
                                class="popup-dialog"
                                open
                                @closed="${this._toggleDialog}"
                              >
                                ${this._renderTable()}
                                <hr />
                                <mwc-button
                                  slot="primaryAction"
                                  dialogAction="close"
                                >
                                  Close
                                </mwc-button>
                              </ha-dialog>
                            `:""}

                        <!-- DIRECTION PAD  -->
                        <div class="grid-container-cursor">
                          <div class="shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 80 79"
                            >
                              <path
                                d="m 30 15
                                a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15
                                a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15"
                                fill="var(--remote-button-color)"
                                stroke="#000000"
                                stroke-width="0"
                              />
                            </svg>
                          </div>
                          <button
                            class="btn ripple item_guide button-style"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Guide)&&void 0!==e?e:"Guide")}}
                            title=${this.config.tooltip?"Guide":""}
                          >
                            <ha-icon class="msc" icon="mdi:television-guide" />
                          </button>

                          <button
                            class="btn ripple item_up button-style"
                            @click=${()=>this._button("DirectionUp")}
                          >
                            <ha-icon class="msc" icon="mdi:chevron-up" />
                          </button>
                          <!-- ANCHOR Menu-->
                          <button
                            class="btn ripple item_act button-style"
                            @mousedown=${t=>{var e,i;return this._handleButtonDown(null!==(i=null===(e=this.config.activities[this._current_activity])||void 0===e?void 0:e.Menu)&&void 0!==i?i:"Menu","media")}}
                            @mouseup=${t=>{var e,i;return this._handleButtonUp(null!==(i=null===(e=this.config.activities[this._current_activity])||void 0===e?void 0:e.Menu)&&void 0!==i?i:"Menu")}}
                            @touchstart=${t=>{var e,i;return this._handleButtonDown(null!==(i=null===(e=this.config.activities[this._current_activity])||void 0===e?void 0:e.Menu)&&void 0!==i?i:"Menu","media")}}
                            @touchend=${t=>{var e,i;return this._handleButtonUp(null!==(i=null===(e=this.config.activities[this._current_activity])||void 0===e?void 0:e.Menu)&&void 0!==i?i:"Menu")}}
                            title=${this.config.tooltip?"Menu/Mediaplayer":""}
                          >
                            <ha-icon
                              class="msc"
                              icon="mdi:silverware-fork-knife"
                            />
                          </button>

                          <button
                            class="btn ripple item_2_sx button-style"
                            @click=${()=>this._button("DirectionLeft")}
                          >
                            <ha-icon class="msc " icon="mdi:chevron-left" />
                          </button>

                          <div
                            class="ok_button ripple item_2_c button-style"
                            style="border: solid 2px ${c}"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.OK)&&void 0!==e?e:"OK")}}
                          >
                            OK
                          </div>

                          <button
                            class="btn ripple item_right button-style"
                            @click=${()=>this._button("DirectionRight")}
                          >
                            <ha-icon class="msc" icon="mdi:chevron-right" />
                          </button>

                          <button
                            class="btn ripple item_back button-style"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Back)&&void 0!==e?e:"Back")}}
                          >
                            <ha-icon class="msc" icon="mdi:undo-variant" />
                          </button>

                          <button
                            class="btn ripple item_down button-style"
                            @click=${()=>this._button("DirectionDown")}
                          >
                            <ha-icon class="msc" icon="mdi:chevron-down" />
                          </button>

                          <button
                            class="btn ripple item_exit button-style"
                            @click=${()=>this._button("Exit")}
                          >
                            EXIT
                          </button>
                        </div>
                      `}
                       <!-- DIRECTION PAD END  -->

                       <!-- Extra BUTTONS  -->
                       ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity];return(null==e?void 0:e.Button1)||(null==e?void 0:e.Button2)||(null==e?void 0:e.Button3)||(null==e?void 0:e.Button4)?I`
                               <div class="grid-container-extra">
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button1;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button2;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button3;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button4;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                               </div>
                             `:I``})()}
                       <!--  Extra buttons end -->
                       <!-- Extra BUTTONS  -->
                       ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity];return(null==e?void 0:e.Button5)||(null==e?void 0:e.Button6)||(null==e?void 0:e.Button7)||(null==e?void 0:e.Button8)?I`
                               <div class="grid-container-extra">
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button5;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button6;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button7;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                                 ${(()=>{var t;const e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity],i=null==e?void 0:e.Button8;return i?I`
                                     <button
                                       class="ripple btn-extra button-style"
                                       @click=${()=>{i.service?this._service(i.service):i.command&&this._button(i.command)}}
                                       title=${i.tooltip||""}
                                     >
                                       ${i.icon?I`<ha-icon
                                             class="mdi-extra button-style"
                                             icon="${i.icon}"
                                           ></ha-icon>`:i.name}
                                     </button>
                                   `:I``})()}
                               </div>
                             `:I``})()}
                       <!--  Extra buttons_2 end -->                       
                       

                       <!-- COLORED BUTTONS -->
                        ${(()=>{var t,e;return(null===(e=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity])||void 0===e?void 0:e.activateCButtons)?I`
                                <div class="grid-container-color_btn">
                                  <button
                                    class="btn-color ripple btn-red button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${()=>this._button("Red")}
                                  ></button>
                                  <button
                                    class="btn-color ripple btn-green button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${()=>this._button("Green")}
                                  ></button>
                                  <button
                                    class="btn-color ripple btn-yellow button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${()=>this._button("Yellow")}
                                  ></button>
                                  <button
                                    class="btn-color ripple btn-blue button-style"
                                    style="height: calc(var(--remotewidth) / 9);"
                                    @click=${()=>this._button("Blue")}
                                  ></button>
                                </div>
                              `:I``})()} 
                        <!-- COLORED BUTTONS END  -->


                    <div class="grid-container-volume-channel-control" >
                         <button class="btn ripple button-style" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("VolumeUp")}>
                          <ha-icon class="msc" icon="mdi:plus"/></button>

                         <button class="btn-flat flat-high ripple button-style" style="margin-top: 0px; height: 65%;"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Home)&&void 0!==e?e:"Home")}}
                            title=${this.config.tooltip?"Home":""}>
                           <ha-icon class="msc" icon="mdi:home" ></ha-icon> </button>

                         <button class="btn ripple button-style" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("ChannelUp")}>
                          <ha-icon class="msc" icon="mdi:chevron-up"/></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon class="msc" icon="mdi:volume-high"/></button>

                         <button class="btn ripple button-style" Style="height: 100%;"
                            @click=${()=>this._button("Mute")}><span>
                          <ha-icon class="msc" icon="mdi:volume-mute"></span></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon class="msc" icon="mdi:parking"/></button>

                         <button class="btn ripple button-style" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("VolumeDown")}>
                          <ha-icon class="msc" icon="mdi:minus"/></button>

                         <button class="btn-flat flat-high ripple button-style" style="margin-bottom: 0px; height: 65%;"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Info)&&void 0!==e?e:"Info")}}
                            title=${this.config.tooltip?"Info":""}>
                          <ha-icon class="msc" icon="mdi:information-variant"/></button>

                         <button class="btn ripple button-style" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("ChannelDown")}>
                          <ha-icon class="msc" icon="mdi:chevron-down"/></button>
                        </div>

                    <!--  MEDIA CONTROL -->
                    <div class="grid-container-media-control">
                         <button class="btn-flat flat-low ripple button-style" @click=${()=>this._button("Play")}><ha-icon class="msc" icon="mdi:play"/></button>
                         <button class="btn-flat flat-low ripple button-style"  @click=${()=>this._button("Pause")}><ha-icon class="msc" icon="mdi:pause"/></button>
                         <button class="btn-flat flat-low ripple button-style"  @click=${()=>this._button("Stop")}><ha-icon class="msc" icon="mdi:stop"/></button>
                         <button class="btn-flat flat-low ripple button-style"
                            @mousedown=${t=>this._handleButtonDown("Rewind","SkipBack")}
                            @mouseup=${t=>this._handleButtonUp("Rewind")}
                            @touchstart=${t=>this._handleButtonDown("Rewind","SkipBack")}
                            @touchend=${t=>this._handleButtonUp("Rewind")}>
                          <ha-icon class="msc" icon="mdi:skip-backward" /> </button>

                         <button class="btn-flat flat-low ripple button-style" style="color: red;" @click=${()=>this._button("Record")}><ha-icon class="msc" icon="mdi:record"/></button>

                         <button class="btn-flat flat-low ripple button-style"
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
         </div> `}_button(t){const e=this.config.activities[this._current_activity];let i;switch(t){case"VolumeUp":case"VolumeDown":case"Mute":i=e.volume_device_id?e.volume_device_id:void 0;break;case"ChannelUp":case"ChannelDown":i=e.channel_device_id?e.channel_device_id:void 0;break;case"Guide":i=e.guide_device_id?e.guide_device_id:void 0;break;case"Menu":i=e.menu_device_id?e.menu_device_id:void 0;break;case"OK":i=e.ok_device_id?e.ok_device_id:void 0;break;case"Back":i=e.back_device_id?e.back_device_id:void 0;break;case"Exit":i=e.exit_device_id?e.exit_device_id:void 0;break;case"DirectionUp":case"DirectionDown":case"DirectionLeft":case"DirectionRight":i=e.direction_device_id?e.direction_device_id:void 0;break;case"Home":i=e.home_device_id?e.home_device_id:void 0;break;case"Info":i=e.info_device_id?e.info_device_id:void 0;break;case"Play":case"Pause":case"Stop":case"Rewind":case"FastForward":case"Record":i=e.media_device_id?e.media_device_id:void 0;break;case"Red":case"Green":case"Yellow":case"Blue":i=e.color_device_id?e.color_device_id:void 0}i||(i=e.alt_device_id?e.alt_device_id:e.device_id),this.hass.callService("remote","send_command",{entity_id:this.config.entity,device:i,command:t}),this.debug&&console.log(`_button Pressed - DeviceId: ${i} - Command: ${t} - entity_id: ${this.config.entity}`)}_service(t){if(this.debug&&console.log(`Func:_service: ${JSON.stringify(t)}`),null==t?void 0:t.name){const[e,i]=t.name.split("."),o=Object.assign(Object.assign({},t.data),t.target);this.hass.callService(e,i,o)}}_select_activity(t){this.hass.callService("remote","turn_on",{entity_id:this.config.entity,activity:t})}_chanchange(t){console.log("Kanal:",t),this.hass.callService("harmony","change_channel",{entity_id:this.config.entity,channel:t})}setConfig(t){if(!t.entity)throw new Error("Invalid configuration");this.config=t,this.debug=!0===t.debug}getCardSize(){return 15}};pt=t([st(ct)],pt);
