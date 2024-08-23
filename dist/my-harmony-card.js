function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,m=g.trustedTypes,b=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,f=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&l(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);n.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of o){const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=o,this[o]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[f("elementProperties")]=new Map,w[f("finalized")]=new Map,v?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,A=k.trustedTypes,x=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+C,O=`<${S}>`,P=document,B=()=>P.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,U="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,H=/>/g,M=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,j=/"/g,z=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,K=P.createTreeWalker(P,129);function q(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[c,l]=((t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":3===e?"<math>":"",r=D;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===D?"!--"===c[1]?r=N:void 0!==c[1]?r=H:void 0!==c[2]?(z.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=M):void 0!==c[3]&&(r=M):r===M?">"===c[0]?(r=n??D,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?M:'"'===c[3]?j:I):r===j||r===I?r=M:r===N||r===H?r=D:(r=M,n=void 0);const d=r===M&&t[e+1].startsWith("/>")?" ":"";s+=r===D?i+O:l>=0?(o.push(a),i.slice(0,l)+E+i.slice(l)+C+d):i+C+(-2===l?e:d)}return[q(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]})(t,e);if(this.el=G.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const e=l[s++],i=o.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Q:"?"===r[1]?tt:"@"===r[1]?et:X}),o.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(z.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],B()),K.nextNode(),a.push({type:2,index:++n});o.append(t[e],B())}}}else if(8===o.nodeType)if(o.data===S)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,o){if(e===F)return e;let n=void 0!==o?i.o?.[o]:i.l;const s=T(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),void 0===s?n=void 0:(n=new s(t),n._$AT(t,i,o)),void 0!==o?(i.o??=[])[o]=n:i.l=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,o)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);K.currentNode=o;let n=K.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Z(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=i[++r]}s!==a?.index&&(n=K.nextNode(),s++)}return K.currentNode=P,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,o){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this.v=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new J(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Z(this.O(B()),this.O(B()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=Y(this,t,e,0),s=!T(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Y(this,o[i+r],e,r),a===F&&(a=this._$AH[r]),s||=!T(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class et extends X{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??V)===F)return;const i=this._$AH,o=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=k.litHtmlPolyfillSupport;ot?.(G,Z),(k.litHtmlVersions??=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const o=i?.renderBefore??e;let n=o._$litPart$;if(void 0===n){const t=i?.renderBefore??null;o._$litPart$=n=new Z(e.insertBefore(B(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return F}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const st=globalThis.litElementPolyfillSupport;st?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var at,ct;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(at||(at={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ct||(ct={}));const lt="my-harmony-card",ht="my-harmony-card-editor";let dt=class extends nt{static get properties(){return{hass:{},_config:{}}}setConfig(t){this._config=t,this._config.activities&&this._config.activities.PowerOff||(this._config.activities=Object.assign(Object.assign({},this._config.activities),{PowerOff:{name:"Poweroff",device_id:-1}}))}configChanged(t){const e=t.target,i=Object.assign({},this._config);if("remote-name"===e.id)i.name=e.value;else{const[t,o]=e.name.split(".");i.activities&&i.activities[t]&&(i.activities[t][o]=e.value)}this._config=i;const o=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(o)}configChangedBool(t){const e=t.target.name,i="true"===t.target.value,o=Object.assign({},this._config);o[e]=i,this._config=o;const n=new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0});this.dispatchEvent(n)}colorsConfigChanged(t){var e;const i=Object.assign({},this._config);if(i.colors=Object.assign({},null!==(e=i.colors)&&void 0!==e?e:{}),"HA-ICON"===t.target.tagName){const e=t.target.getAttribute("data-input-name");if(e){const t=this.shadowRoot.querySelector(`[name="${e}"]`);t&&(t.value="",i.colors[e]="")}}else i.colors[t.target.name.toString()]=t.target.value;this._config=i;const o=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(o)}dimensionsConfigChanged(t){var e;const i=Object.assign({},this._config);i.dimensions=Object.assign({},null!==(e=i.dimensions)&&void 0!==e?e:{}),"border_width"===t.target.name?i.dimensions[t.target.name]=t.target.value+"px":i.dimensions[t.target.name]=t.target.value,this._config=i;const o=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(o)}getLgTvEntityDropdown(t){let e=Object.keys(this.hass.states).filter((t=>t.startsWith("remote."))),i=L``;return""!=this._config.tventity&&e.includes(t)||(i=L`<option value="" selected> - - - - </option>`),L`
      ${"Harmony Remote Entity+"}:<br>
      <select name="entity" id="entity" class="select-item" .value="${t}"
              @focusout=${this.configChanged}
              @change=${this.configChanged}>
        ${i}
        ${e.map((t=>t!=this._config.tventity?L`<option value="${t}">${this.hass.states[t].attributes.friendly_name||t}</option>`:L`<option value="${t}" selected>${this.hass.states[t].attributes.friendly_name||t}</option>`))}
      </select>
      <br>
      <br>
    `}setRemoteName(t){return L`
      ${"Remote Control Name (option):"}<br>
      <input type="text" name="name" id="remote-name" style="width: 37.8ch; padding: .6em; font-size: 1em;" .value="${t}"
             @input=${this.configChanged}>
      <br><br>
    `}selectColors(t){return t&&t.colors||(t={colors:{buttons:"",text:"",background:"",border:""}}),L`
      <label class="color-item" for="text">Text Color:</label>
      <input type="color" name="text" id="text"  .value="${t.colors&&t.colors.text||""}"
             @input=${this.colorsConfigChanged}></input>
      <ha-icon data-input-name="text" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>

      <label class="color-item" for="background">Background Color:</label>
      <input type="color" name="background" id="background"  .value="${t.colors&&t.colors.background||""}"
             @input=${this.colorsConfigChanged}></input>
      <ha-icon data-input-name="background" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>

      <label class="color-item" for="border">Border Color:</label>
      <input type="color" name="border" id="border"  .value="${t.colors&&t.colors.border||""}"
             @input=${this.colorsConfigChanged}></input>
      <ha-icon data-input-name="border" icon="mdi:trash-can-outline" @click=${this.colorsConfigChanged}></ha-icon>
    `}setDimensions(t){var e,i;const o=parseFloat(null!==(e=t.border_width)&&void 0!==e?e:"1");return L`
      <div class="heading">${"Dimensions"}:</div>
      <br>
      <label for="scale">Card Scale: ${null!==(i=t.scale)&&void 0!==i?i:1}</label><br>
      <input type="range" min="0.5" max="1.5" step="0.01" .value="${t&&t.scale}" id="scale" name="scale" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
      </input>
      <br>
      <br>
      <label for="border_width">Card Border Width: ${o}px</label><br>
      <input type="range" min="1" max="5" step="1" .value="${o}" id="border_width" name="border_width" @input=${this.dimensionsConfigChanged} style="width: 40ch;">
      </input>
      <br>
    `}renderActivities(t){t||(t={});const e=Object.entries(t).filter((([t])=>"PowerOff"!==t));return L`
    <div class="heading">Activities:</div>
    <br>
    ${e.map((([t,e],i)=>L`
      <div class="activity-container">
        <div class="form-group">
          <label for="activity-${i}-key" class="activity-identifier">Activity Identifier:</label>
          <input type="text" id="activity-identifier" name="${t}.key" .value="${t}" title="The name of Activity i.e. Watch TV" @input="${e=>this.changeActivityKey(e,t)}" class="activity-input">
          <button @click="${()=>this.removeActivity(t)}" class="remove-button">Remove</button>
        </div>
        <div class="form-group">
          <label for="activity-${i}-name">Activity Number:</label>
          <input type="number" id="activity-name" name="${t}.name" .value="${e.name}" title="The number of the activity (in harmony_*.conf)" @input="${this.configChanged}" class="activity-input">
        </div>
        <div class="form-group">
          <label for="activity-${i}-device_id">Device ID:</label>
          <input type="number" id="activity-id" name="${t}.device_id" .value="${e.device_id}" title="The number of the primary device for this activiy (in harmony_*.conf)" @input="${this.configChanged}" class="activity-input">
        </div>
      </div>
    `))}
    <button @click="${this.addActivity}" class="add-activity-button">Add New Activity</button>
  `}changeActivityKey(t,e){const i=t.target.value;if(i!==e){const t=Object.assign({},this._config);if(t.activities[i])return;t.activities[i]=t.activities[e],delete t.activities[e],this._config=t;const o=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(o)}}addActivity(){const t=Object.assign({},this._config),e=`Activity${Object.keys(t.activities).length}`;t.activities[e]={name:"",device_id:""},this._config=t;const i=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}removeActivity(t){const e=Object.assign({},this._config);delete e.activities[t],this._config=e;const i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){return this.hass&&this._config?L`
     <div class="card-config">
       ${this.getLgTvEntityDropdown(this._config.entity)}
       ${this.setRemoteName(this._config.name)}
       ${this.selectColors(this._config)}
       ${this.setDimensions(this._config.dimensions)}
       ${this.renderActivities(this._config.activities)}
      <br>
      <p>At least the following entries must be present for the card to work:</p>
      <pre>
      - type: &#39;custom:my-harmony-card&#39;
        entity: remote.&lt;device&gt;
        activities:
          PowerOff:
            device_id: -1 </pre>
      <p>&nbsp;</p>
      <p><br />
      For more options please visit <a href="https://github.com/dezihh/my-harmony-card" target="_blank">https://github.com/dezihh/my-harmony-card</a></p>

      <div class="donations" style="display: flex">
          <a href="https://buymeacoffee.com/dezi" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
      </div>
   `:L``}static get styles(){return r`
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
      width: 20ch; /* Set width to 20 characters */
      padding: 8px;
      box-sizing: border-box;
    }

    .activity-container {
      margin-bottom: 16px;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      filter: brightness(0.9); /* Slightly darker */
    }

    .activity-identifier {
      font-weight: bold;
      width: 150px; /* Adjust the width as necessary */
    }

    .activity-input {
      margin-left: 8px;
      width: 20ch; /* Set width to 20 characters */
    }

    .remove-button {
      margin-left: auto;
    }

    .activity-details {
      padding-left: 26px;
      margin-top: 8px;
    }

    .add-activity-button {
      margin-top: 16px;
    }
  `}};dt=t([rt(ht)],dt);const ut=r`
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
            color: red;
          }
          .card, .ripple:after {
            width: 100%;
            height: 100%}
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
            height: calc(var(--remotewidth)/3);
          }
          .grid-container-cursor, .grid-container-keypad {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            overflow: hidden;
            height: var(--remotewidth);
          }
          .grid-container-cursor {
            grid-template-rows: 1fr 1fr 1fr;
            width: var(--remotewidth);
            grid-template-areas: "ctl up act""left ok right""back down exit"}
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

          .grid-container-color_btn, .grid-container-extra {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: auto;
            background-color: transparent;
            width: calc(var(--remotewidth)/1.1);
            overflow: hidden;
            margin: auto;
            gap: 4px;
            padding: 10px;
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
            border-radius: calc(var(--remotewidth)/12);
          }
          .grid-item-act::-webkit-scrollbar {
            display: none;
            -ms-overflow-style: none;
          }
          .shape, .shape-act, .act_text {
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 1;
          }
          .shape {
            grid-row-end: 4;
            padding: 5px;
          }
          .shape-act {
            grid-row-end: 3;
          }
          .item_guide {
          grid-area: ctl;
          }
          .item_up {
            grid-area: up;
          }
          .item_act {
            grid-area: act;
          }
          .item_2_sx {
            grid-area: left;
          }
          .item_2_c {
            grid-area: ok;
          }
          .item_right {
            grid-area: right;
          }
          .item_back {
            grid-area: back;
          }
          .item_down {
            grid-area: down;
          }
          .item_exit {
            grid-area: exit;
          }
          ha-icon {
            width: calc(var(--remotewidth)/10.8);
            height: calc(var(--remotewidth)/10.8);
          }
          .bnt-act-back, .bnt-sound-back, .btn {
            font-size: calc(var(--remotewidth)/18.75);
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
            border-width: 0;
          }

          .btn-keypad {
            background-color: transparent;
            font-size: calc(var(--remotewidth)/10);
            width: 100%;
            height: 100%}
          .btn-color {
            background-color: var(--remote-button-color);
            border-radius: calc(var(--remotewidth)/10);
            place-items: center;
            cursor: pointer;
          }
          .btn-color {
            width: 70%;
            height: 55%;
            margin: auto;
          }
          .btn-act, .btn-act-on {
            font-size: calc(var(--remotewidth)/18.5);
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
            height: 37%}
          .flat-low {
            width: 70%;
            height: 85%}
          .btn-flat {
            background-color: var(--remote-button-color);
            color: var(--remote-text-color);
            font-size: calc(var(--remotewidth)/18.75);
            border-width: 0;
            border-radius: calc(var(--remotewidth)/10);
            margin: auto;
            display: grid;
            place-items: center;
            display: inline-block;
            cursor: pointer;
          }


          .ok_button {
            display: flex;
            color: var(--remote-text-color);
            justify-content: center;
            align-items: center;
            border: solid 3px var(--ha-card-background);
            border-radius: 100%;
            font-size: calc(var(--remotewidth)/16.6);
            cursor: pointer;

          }
        `;console.info("%c  My Harmony Remote Control Card  \n%c  version: v@MY_HARMOY_CARD_VERSION_PLACEHOLDER@  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const pt=window;pt.customCards=pt.customCards||[],pt.customCards.push({type:lt,name:"My Harmony Remote Control Card",preview:!0,description:"Remote control card for Harmony Companion Remote Controllers"});let gt=class extends nt{static get styles(){return ut}static getConfigElement(){return document.createElement(ht)}static getStubConfig(t){let e=Object.keys(t.entities).filter((t=>t.startsWith("remote.")));const i=e.length>0?e[0]:"";return{type:`custom:${lt}`,entity:i}}_handleButtonDown(t,e){this.isButtonPressed=!0,this.buttonTimeout=setTimeout((()=>{this.isButtonPressed&&("media"===e?this._moreMediaPlayer():this._button(e),this.isButtonPressed=!1)}),500)}_handleButtonUp(t){this.isButtonPressed&&this._button(t),this.buttonTimeout&&(clearTimeout(this.buttonTimeout),this.buttonTimeout=null),this.isButtonPressed=!1}static get properties(){return{hass:{},config:{},_show_keypad:{},_show_activity:{},_show_vol_text:{},_current_activity:{type:String}}}constructor(){super(),this.isButtonPressed=!1,this.buttonTimeout=null,this._show_keypad=!1,this._show_activity=!1,this._show_vol_text=!1,this.volume_value=0,this._current_activity="",this.debug=!1}_moreMediaPlayer(){const t=this.config.activities[this._current_activity].player_name;t&&function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});n.detail=i,t.dispatchEvent(n)}(this,"hass-more-info",{entityId:t}),this.debug&&console.log("More Info media_player called",t)}render(){var t;const e=this.hass.states[this.config.entity];this.config.color_buttons,this._current_activity=e.attributes.current_activity;const i=null===(t=this.config.activities)||void 0===t?void 0:t[this._current_activity];i?(this.defaultDeviceId=i.device_id||null,this.volumeDeviceId=i.volume_device_id||this.defaultDeviceId):(this.defaultDeviceId=-1,this.volumeDeviceId=-1,this._current_activity="PowerOff");const o="PowerOff"===this._current_activity?"red":"green";this.debug&&console.log(`Current Activity ${e.attributes.current_activity} - DeviceID: ${i.device_id} `);const n=this.config.dimensions&&this.config.dimensions.border_width?this.config.dimensions.border_width:"1px",s=this.config.dimensions&&this.config.dimensions.scale?this.config.dimensions.scale:1,r=Math.round(260*s)+"px",a=this.config.tv_name_color?this.config.tv_name_color:"var(--primary-text-color)",c=this.config.colors&&this.config.colors.background?this.config.colors.background:"var( --ha-card-background, var(--card-background-color, white) )",l=this.config.colors&&this.config.colors.border?this.config.colors.border:"var(--primary-text-color)",h=this.config.colors&&this.config.colors.buttons?this.config.colors.buttons:"var(--secondary-background-color)",d=this.config.colors&&this.config.colors.text?this.config.colors.text:"var(--primary-text-color)";return L`

        <div class="card">
            <div class="page"
                 style="--remote-button-color: ${h};
                        --remote-text-color: ${d};
                        --remote-color: ${c};
                        --remotewidth: ${r};
                        --main-border-color: ${l};
                        --main-border-width: ${n}">

                <!-- Power row -->
                ${this.config.name?L` <div class="tv_title" style="color:${a}" >${this.config.name}</div> `:""}
                <div class="grid-container-power" style="--remotewidth: ${r}">

                    <button class="btn-flat flat-high ripple"
                      @click=${()=>this._show_activity=!this._show_activity}
                      title=${this.config.tooltip?"Configured Action Selector":""}>
                    ACT</button>

                    <button class="btn ripple"
                      @click=${()=>this._select_activity("PowerOff")}>
                      <ha-icon icon="mdi:power" style="color: ${o};"/></button>
                      <button class="btn-flat flat-high ripple" @click=${()=>this._show_keypad=!this._show_keypad} title=${this.config.tooltip?"Number Keypad":""}>
                    123</button>
                </div>

                ${this._show_activity?L`

                    <!--  Activity Overlay  -->
                    <div class="grid-container-act">
                        <button class="ripple bnt-act-back"
                          @click=${()=>this._show_activity=!1}>
                          <ha-icon icon="mdi:undo-variant"/></button>

                        <p class="act_text"><b>ACTIONS</b></p>
                        <div class="grid-item-act">
                           ${e.attributes.activity_list.map((t=>L`
                                <button class="${e.attributes.current_activity===t?"btn-act-on":"btn-act ripple overlay"}" @click=${()=>{this._select_activity(t),this._show_activity=!1}}>${t}</button>
                            `))}
                        </div>
                    </div>

                     <!--  Activity Overlay END  -->
                    `:L`

                ${this._show_keypad?L`
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
                `:L`

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
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Guide)&&void 0!==e?e:"Guide")}}
                            title=${this.config.tooltip?"Guide":""}>
                         <ha-icon icon="mdi:television-guide"/> </button>

                         <button class="btn ripple item_up" style="background-color: transparent;"
                            @click=${()=>this._button("DirectionUp")}><ha-icon icon="mdi:chevron-up"/></button>
                         <button class="btn ripple item_act"
                            @mousedown=${t=>this._handleButtonDown("Menu","media")}
                            @mouseup=${t=>this._handleButtonUp("Menu")}
                            @touchstart=${t=>this._handleButtonDown("Menu","media")}
                            @touchend=${t=>this._handleButtonUp("menu")}
                            title=${this.config.tooltip?"Menu/Mediaplayer":""}>
                         <ha-icon icon="mdi:silverware-fork-knife"/></button>

                         <button class="btn ripple item_2_sx" style="background-color: transparent;"
                            @click=${()=>this._button("Left")}>
                         <ha-icon icon="mdi:chevron-left"/></button>

                         <div class="ok_button ripple item_2_c"
                            style="border: solid 2px ${c}"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.OK)&&void 0!==e?e:"OK")}}>
                         OK</div>

                         <button class="btn ripple item_right"
                            style="background-color: transparent;"
                            @click=${()=>this._button("DirectionRight")}>
                         <ha-icon icon="mdi:chevron-right"/></button>

                         <button class="btn ripple item_back"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Back)&&void 0!==e?e:"Back")}}>
                         <ha-icon icon="mdi:undo-variant"/></button>

                         <button class="btn ripple item_down"
                            style="background-color: transparent;"
                            @click=${()=>this._button("DirectionDown")}>
                         <ha-icon icon="mdi:chevron-down"/></button>

                         <button class="btn ripple item_exit" @click=${()=>this._button("Exit")}>EXIT</button>
                       </div>
                       <!-- DIRECTION PAD END  -->
                            `}

                       <!-- Extra BUTTONS  -->
                       <div class="grid-container-extra">
                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button1?L`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${()=>this._button(this.config.activities[this._current_activity].Button1.command)}
                                  title=${this.config.activities[this._current_activity].Button1.tooltip||""}>
                                  ${this.config.activities[this._current_activity].Button1.name}
                              </button> `:""}

                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button2?L`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${()=>this._button(this.config.activities[this._current_activity].Button2.command)}
                                  title=${this.config.activities[this._current_activity].Button2.tooltip||""}>
                                  ${this.config.activities[this._current_activity].Button2.name}
                              </button> `:""}
                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button3?L`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${()=>this._button(this.config.activities[this._current_activity].Button3.command)}
                                  title=${this.config.activities[this._current_activity].Button3.tooltip||""}>
                                  ${this.config.activities[this._current_activity].Button3.name}
                              </button> `:""}
                          ${this.config.activities&&this._current_activity&&this.config.activities[this._current_activity]&&this.config.activities[this._current_activity].Button4?L`
                              <button class="btn-flat ripple" style="height: calc(var(--remotewidth) / 8); width: 100%;"
                                  @click=${()=>this._button(this.config.activities[this._current_activity].Button4.command)}
                                   title=${this.config.activities[this._current_activity].Button4.tooltip||""}>
                                   ${this.config.activities[this._current_activity].Button4.name}
                              </button> `:""}
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
                          <ha-icon icon="mdi:plus"/></button>

                         <button class="btn-flat flat-high ripple" style="margin-top: 0px; height: 65%;"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Home)&&void 0!==e?e:"Home")}}
                            title=${this.config.tooltip?"Home":""}>
                           <ha-icon icon="mdi:home"></ha-icon> </button>

                         <button class="btn ripple" style="border-radius: 50% 50% 0px 0px; margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("ChannelUp")}>
                          <ha-icon icon="mdi:chevron-up"/></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon icon="mdi:volume-high"/></button>

                         <button class="btn ripple" Style="height: 100%;"
                            @click=${()=>this._button("Mute")}><span>
                          <ha-icon icon="mdi:volume-mute"></span></button>

                         <button class="btn" style="border-radius: 0px; cursor: default; margin: 0px auto 0px auto; height: 100%;">
                          <ha-icon icon="mdi:parking"/></button>

                         <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("VolumeDown")}>
                          <ha-icon icon="mdi:minus"/></button>

                         <button class="btn-flat flat-high ripple" style="margin-bottom: 0px; height: 65%;"
                            @click=${()=>{var t,e;return this._button(null!==(e=null===(t=this.config.activities[this._current_activity])||void 0===t?void 0:t.Info)&&void 0!==e?e:"Info")}}
                            title=${this.config.tooltip?"Info":""}>
                          <ha-icon icon="mdi:information-variant"/></button>

                         <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;  margin: 0px auto 0px auto; height: 100%;"
                            @click=${()=>this._button("ChannelDown")}>
                          <ha-icon icon="mdi:chevron-down"/></button>
                        </div>

                    <!--  MEDIA CONTROL -->
                    <div class="grid-container-media-control">
                         <button class="btn-flat flat-low ripple" @click=${()=>this._button("Play")}><ha-icon icon="mdi:play"/></button>
                         <button class="btn-flat flat-low ripple"  @click=${()=>this._button("Pause")}><ha-icon icon="mdi:pause"/></button>
                         <button class="btn-flat flat-low ripple"  @click=${()=>this._button("Stop")}><ha-icon icon="mdi:stop"/></button>
                         <button class="btn-flat flat-low ripple"
                            @mousedown=${t=>this._handleButtonDown("Rewind","SkipBack")}
                            @mouseup=${t=>this._handleButtonUp("Rewind")}
                            @touchstart=${t=>this._handleButtonDown("Rewind","SkipBack")}
                            @touchend=${t=>this._handleButtonUp("Rewind")}>
                          <ha-icon icon="mdi:skip-backward" /> </button>

                         <button class="btn-flat flat-low ripple" style="color: red;" @click=${()=>this._button("Record")}><ha-icon icon="mdi:record"/></button>

                         <button class="btn-flat flat-low ripple"
                           @mousedown=${t=>this._handleButtonDown("FastForward","SkipForward")}
                           @mouseup=${t=>this._handleButtonUp("FastForward")}
                           @touchstart=${t=>this._handleButtonDown("FastForward","SkipForward")}
                           @touchend=${t=>this._handleButtonUp("FastForward")}>
                          <ha-icon icon="mdi:skip-forward"></ha-icon> </button>
                    </div>
                        <!-- ################################# MEDIA CONTROL END ################################# -->
                        </div>
                    `}
            </div>
         </div> `}_button(t){const e=this.config.activities[this._current_activity];let i;i=("VolumeUp"===t||"VolumeDown"===t)&&e.volume_device_id?e.volume_device_id:e.device_id,this.hass.callService("remote","send_command",{entity_id:this.config.entity,device:i,command:t}),this.debug&&console.log(`_button Pressed - DeviceId: ${i} - Command: ${t} - entity_id: ${this.config.entity}`)}_select_activity(t){this.hass.callService("remote","turn_on",{entity_id:this.config.entity,activity:t})}_chanchange(t){this.hass.callService("harmony","change_channel",{entity_id:this.config.entity,channel:t})}setConfig(t){if(!t.entity)throw new Error("Invalid configuration");this.config=t,this.debug=!0===t.debug}getCardSize(){return 15}};gt=t([rt(lt)],gt);
