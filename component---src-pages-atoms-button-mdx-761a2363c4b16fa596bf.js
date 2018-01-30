webpackJsonp([0xc4a82c59124a],{184:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t,a=e.disabled,n=void 0!==a&&a,s=e.primary,o=void 0===s||s,i=e.destructive,l=void 0!==i&&i,u=e.darkBackground,c=void 0!==u&&u,f=e.fixed,p=void 0!==f&&f,h=e.size,v=void 0===h?"large":h,y=e.children,b=(0,d.default)((t={},t[m.default.button]=!0,t[m.default.primary]=o&&!l&&!c,t[m.default.secondary]=!l&&!o,t[m.default.ghost]=c,t[m.default.fixed]=p,t[m.default.mid]="mid"===v,t[m.default.small]="small"===v,t));return r.default.createElement("button",{disabled:n,className:b},y)}t.__esModule=!0,t.default=s;var o=a(3),r=n(o),i=a(4),l=n(i),u=a(6),d=n(u),c=a(327),m=n(c);s.propTypes={disabled:l.default.bool,primary:l.default.bool,destructive:l.default.bool,icon:l.default.bool},e.exports=t.default},327:function(e,t){e.exports={button:"Button-module__button--THnvd",fixed:"Button-module__fixed--chblk",mid:"Button-module__mid--2skN1",small:"Button-module__small--3DG4w",secondary:"Button-module__secondary--2xeY7",ghost:"Button-module__ghost--1OwqQ",primary:"Button-module__primary--1Zv0n"}},64:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return Math.floor(Math.random()*(t-e)+e)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=a(3),d=n(u),c=a(97),m=n(c),f=240,p=Symbol("small"),h=Symbol("medium"),v=Symbol("large"),y=Symbol("random"),b=Symbol("full"),_=function(e){function t(){var a,n,r;s(this,t);for(var i=arguments.length,u=Array(i),d=0;d<i;d++)u[d]=arguments[d];return a=n=o(this,e.call.apply(e,[this].concat(u))),n.state={selectedPreset:0,assignedCanvasWidth:null,actualCanvasDimensions:{width:null,height:null}},n.onSelectPreset=function(e){var t=parseInt(e.target.value);n.setState(l({},n.state,{selectedPreset:t}))},n.onResize=function(){n.resizing||(n.resizing=!0,window.requestAnimationFrame(n.onResizeFrame))},n.onResizeFrame=function(){if(n.isResizeComplete())return void(n.resizing=!1);var e=n.canvas,t=e.clientWidth,a=e.clientHeight;n.setState(l({},n.state,{actualCanvasDimensions:{width:t,height:a}})),window.requestAnimationFrame(n.onResizeFrame)},r=a,o(n,r)}return r(t,e),t.prototype.render=function(){return d.default.createElement("div",{className:m.default.root},this.renderPresetList(),this.renderCanvas(),d.default.createElement("div",{className:m.default.controls},this.renderSizePresets(),this.renderCanvasDimensions(),this.renderComponentTypes()))},t.prototype.renderPresetList=function(){var e=this.props.presets,t=this.state.selectedPreset;return d.default.createElement("div",{className:m.default.selectPreset},d.default.createElement("select",{onChange:this.onSelectPreset,value:t},e.map(function(e,t){return d.default.createElement("option",{key:t,value:t},e.name)})))},t.prototype.renderCanvas=function(){var e=this,t=this.props.component;return d.default.createElement("div",{className:m.default.frame,ref:function(t){return e.frame=t}},d.default.createElement("div",{className:m.default.canvas,style:{width:this.state.assignedCanvasWidth},ref:function(t){return e.canvas=t}},d.default.createElement(t,this.selectedPresetProps())))},t.prototype.selectedPresetProps=function(){return this.props.presets[this.state.selectedPreset].props},t.prototype.renderSizePresets=function(){return d.default.createElement("div",{className:m.default.sizePresets},d.default.createElement("button",{onClick:this.onClickResizeTo(b)},"Full"),d.default.createElement("button",{onClick:this.onClickResizeTo(y)},"Random"),d.default.createElement("button",{onClick:this.onClickResizeTo(v)},"Large"),d.default.createElement("button",{onClick:this.onClickResizeTo(h)},"Medium"),d.default.createElement("button",{onClick:this.onClickResizeTo(p)},"Small"))},t.prototype.renderCanvasDimensions=function(){var e=this.state.actualCanvasDimensions,t=e.width,a=e.height;return t&&a&&d.default.createElement("div",{className:m.default.canvasDimensions},d.default.createElement("span",{className:m.default.dimension},t,"px")," × ",d.default.createElement("span",{className:m.default.dimension},a,"px")," viewport")},t.prototype.renderComponentTypes=function(){return d.default.createElement("div",{className:m.default.componentTypes},d.default.createElement("button",null,"React"))},t.prototype.componentDidMount=function(){window.addEventListener("resize",this.onResize),this.onResize()},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},t.prototype.onClickResizeTo=function(e){var t=this;return function(a){return t.resizeToSize(e)}},t.prototype.resizeToSize=function(e){switch(e){case b:this.resizeTo();break;case y:this.resizeTo(i(f,this.maxCanvasWidth()));break;case v:this.resizeTo(i(800,1200));break;case h:this.resizeTo(i(500,800));break;case p:this.resizeTo(i(f,500))}},t.prototype.resizeTo=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=t&&Math.min(t,this.maxCanvasWidth()),null===this.state.assignedCanvasWidth&&t&&this.setAssignedCanvasWidth(this.maxCanvasWidth()),window.requestAnimationFrame(function(){e.setAssignedCanvasWidth(t)})},t.prototype.setAssignedCanvasWidth=function(e){this.setState(l({},this.state,{assignedCanvasWidth:e})),this.onResize()},t.prototype.maxCanvasWidth=function(){return this.frame.clientWidth},t.prototype.isResizeComplete=function(){var e=this.canvas,t=e.clientWidth,a=e.clientHeight,n=this.state,s=n.assignedCanvasWidth,o=n.actualCanvasDimensions,r=o.width,i=o.height;return t==r&&a==i&&(!s||t==s)},t}(d.default.Component);t.default=_,e.exports=t.default},97:function(e,t){e.exports={root:"Demo-module__root--3wwTo",frame:"Demo-module__frame--3OdyG",canvas:"Demo-module__canvas--KNZxY",selectPreset:"Demo-module__selectPreset--HqP0Z",controls:"Demo-module__controls--2Soui",dimension:"Demo-module__dimension--15b1z"}},214:function(e,t){"use strict";t.__esModule=!0;var a=[{name:"Primary",props:{children:"Button text",primary:!0}},{name:"Primary disabled",props:{children:"Button text",disabled:!0}},{name:"Primary fixed",props:{children:"Button text",fixed:!0}},{name:"Primary mid",props:{children:"Button text",size:"mid"}},{name:"Destructive",props:{children:"Button text",destructive:!0}},{name:"Secondary",props:{children:"Button text",primary:!1}},{name:"Secondary disabled",props:{children:"Button text",primary:!1,disabled:!0}},{name:"Secondary mid",props:{children:"Button text",size:"mid",primary:!1}},{name:"Secondary small",props:{children:"Button",size:"small",primary:!1}},{name:"Ghost",props:{children:"Button text",darkBackground:!0}},{name:"Ghost disabled",props:{children:"Button text",disabled:!0,darkBackground:!0}}];t.default=a,e.exports=t.default},229:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.className,a=e.style,n=e.elementProps;return u.default.createElement("div",{className:t,style:a},u.default.createElement("h1",o({id:"buttons"},n.h1),"Buttons"),u.default.createElement(y.default,n.IntroParagraph,u.default.createElement("p",n.p,"An icon! To control its color, set color on a parent element, and it will be inherited.")),u.default.createElement(f.default,o({component:_.default,presets:z.default},n.Demo)),u.default.createElement(h.default,o({to:"/"},n.Link),"Go back to the homepage"))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(7),i=n(r),l=a(3),u=n(l),d=a(4),c=n(d),m=a(64),f=n(m),p=a(8),h=n(p),v=a(39),y=n(v),b=a(184),_=n(b),g=a(214),z=n(g);s.propTypes={className:c.default.string,style:c.default.object,elementProps:c.default.object},s.defaultProps={elementProps:{}};var C=function(){return u.default.createElement("div",{className:i.default.contentContainer},u.default.createElement(s,{elementProps:{h1:{className:i.default.h1},h2:{className:i.default.h2},h3:{className:i.default.h3},h4:{className:i.default.h4},h5:{className:i.default.h5},h6:{className:i.default.h6},p:{className:i.default.p},table:{className:i.default.table},ul:{className:i.default.ul},ol:{className:i.default.ol},li:{className:i.default.li},blockquote:{className:i.default.blockquote},hr:{className:i.default.hr},img:{className:i.default.img},a:{className:i.default.link}}}))};t.default=C}});
//# sourceMappingURL=component---src-pages-atoms-button-mdx-761a2363c4b16fa596bf.js.map