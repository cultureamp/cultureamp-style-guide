webpackJsonp([66551634826452],{276:function(e,t,r){function n(e,t,r){return Math.min(Math.max(t,e),r)}function a(e){var t=e.toString(16).toUpperCase();return t.length<2?"0"+t:t}var o=r(136),l=r(539),i={};for(var s in o)o.hasOwnProperty(s)&&(i[o[s]]=s);var u=e.exports={to:{}};u.get=function(e){var t,r,n=e.substring(0,3).toLowerCase();switch(n){case"hsl":t=u.get.hsl(e),r="hsl";break;case"hwb":t=u.get.hwb(e),r="hwb";break;default:t=u.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},u.get.rgb=function(e){if(!e)return null;var t,r,a,l=/^#([a-f0-9]{3,4})$/i,i=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,s=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,u=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,c=/(\D+)/,d=[0,0,0,1];if(t=e.match(i)){for(a=t[2],t=t[1],r=0;r<3;r++){var f=2*r;d[r]=parseInt(t.slice(f,f+2),16)}a&&(d[3]=Math.round(parseInt(a,16)/255*100)/100)}else if(t=e.match(l)){for(t=t[1],a=t[3],r=0;r<3;r++)d[r]=parseInt(t[r]+t[r],16);a&&(d[3]=Math.round(parseInt(a+a,16)/255*100)/100)}else if(t=e.match(s)){for(r=0;r<3;r++)d[r]=parseInt(t[r+1],0);t[4]&&(d[3]=parseFloat(t[4]))}else{if(!(t=e.match(u)))return(t=e.match(c))?"transparent"===t[1]?[0,0,0,0]:(d=o[t[1]])?(d[3]=1,d):null:null;for(r=0;r<3;r++)d[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(d[3]=parseFloat(t[4]))}for(r=0;r<3;r++)d[r]=n(d[r],0,255);return d[3]=n(d[3],0,1),d},u.get.hsl=function(e){if(!e)return null;var t=/^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=e.match(t);if(r){var a=parseFloat(r[4]),o=(parseFloat(r[1])%360+360)%360,l=n(parseFloat(r[2]),0,100),i=n(parseFloat(r[3]),0,100),s=n(isNaN(a)?1:a,0,1);return[o,l,i,s]}return null},u.get.hwb=function(e){if(!e)return null;var t=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=e.match(t);if(r){var a=parseFloat(r[4]),o=(parseFloat(r[1])%360+360)%360,l=n(parseFloat(r[2]),0,100),i=n(parseFloat(r[3]),0,100),s=n(isNaN(a)?1:a,0,1);return[o,l,i,s]}return null},u.to.hex=function(){var e=l(arguments);return"#"+a(e[0])+a(e[1])+a(e[2])+(e[3]<1?a(Math.round(255*e[3])):"")},u.to.rgb=function(){var e=l(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},u.to.rgb.percent=function(){var e=l(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},u.to.hsl=function(){var e=l(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},u.to.hwb=function(){var e=l(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},u.to.keyword=function(e){return i[e.slice(0,3)]}},137:function(e,t,r){"use strict";function n(e,t){if(!(this instanceof n))return new n(e,t);if(t&&t in p&&(t=null),t&&!(t in d))throw new Error("Unknown model: "+t);var r,a;if(e)if(e instanceof n)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){var o=c.get(e);if(null===o)throw new Error("Unable to parse color from string: "+e);this.model=o.model,a=d[this.model].channels,this.color=o.value.slice(0,a),this.valpha="number"==typeof o.value[a]?o.value[a]:1}else if(e.length){this.model=t||"rgb",a=d[this.model].channels;var l=f.call(e,0,a);this.color=u(l,a),this.valpha="number"==typeof e[a]?e[a]:1}else if("number"==typeof e)e&=16777215,this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;var i=Object.keys(e);"alpha"in e&&(i.splice(i.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);var s=i.sort().join("");if(!(s in h))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=h[s];var b=d[this.model].labels,v=[];for(r=0;r<b.length;r++)v.push(e[b[r]]);this.color=u(v)}else this.model="rgb",this.color=[0,0,0],this.valpha=1;if(m[this.model])for(a=d[this.model].channels,r=0;r<a;r++){var g=m[this.model][r];g&&(this.color[r]=g(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function a(e,t){return Number(e.toFixed(t))}function o(e){return function(t){return a(t,e)}}function l(e,t,r){return e=Array.isArray(e)?e:[e],e.forEach(function(e){(m[e]||(m[e]=[]))[t]=r}),e=e[0],function(n){var a;return arguments.length?(r&&(n=r(n)),a=this[e](),a.color[t]=n,a):(a=this[e]().color[t],r&&(a=r(a)),a)}}function i(e){return function(t){return Math.max(0,Math.min(e,t))}}function s(e){return Array.isArray(e)?e:[e]}function u(e,t){for(var r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}var c=r(276),d=r(135),f=[].slice,p=["keyword","gray","hex"],h={};Object.keys(d).forEach(function(e){h[f.call(d[e].labels).sort().join("")]=e});var m={};n.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(e){var t=this.model in c.to?this:this.rgb();t=t.round("number"==typeof e?e:1);var r=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to[t.model](r)},percentString:function(e){var t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:t.color.concat(this.valpha);return c.to.rgb.percent(r)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var e={},t=d[this.model].channels,r=d[this.model].labels,n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray:function(){var e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject:function(){var e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round:function(e){return e=Math.max(e||0,0),new n(this.color.map(o(e)).concat(this.valpha),this.model)},alpha:function(e){return arguments.length?new n(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:l("rgb",0,i(255)),green:l("rgb",1,i(255)),blue:l("rgb",2,i(255)),hue:l(["hsl","hsv","hsl","hwb","hcg"],0,function(e){return(e%360+360)%360}),saturationl:l("hsl",1,i(100)),lightness:l("hsl",2,i(100)),saturationv:l("hsv",1,i(100)),value:l("hsv",2,i(100)),chroma:l("hcg",1,i(100)),gray:l("hcg",2,i(100)),white:l("hwb",1,i(100)),wblack:l("hwb",2,i(100)),cyan:l("cmyk",0,i(100)),magenta:l("cmyk",1,i(100)),yellow:l("cmyk",2,i(100)),black:l("cmyk",3,i(100)),x:l("xyz",0,i(100)),y:l("xyz",1,i(100)),z:l("xyz",2,i(100)),l:l("lab",0,i(100)),a:l("lab",1),b:l("lab",2),keyword:function(e){return arguments.length?new n(e):d[this.model].keyword(this.color)},hex:function(e){return arguments.length?new n(e):c.to.hex(this.rgb().round().color)},rgbNumber:function(){var e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity:function(){for(var e=this.rgb().color,t=[],r=0;r<e.length;r++){var n=e[r]/255;t[r]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(e){var t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level:function(e){var t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},dark:function(){var e=this.rgb().color,t=(299*e[0]+587*e[1]+114*e[2])/1e3;return t<128},light:function(){return!this.dark()},negate:function(){for(var e=this.rgb(),t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten:function(e){var t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken:function(e){var t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate:function(e){var t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate:function(e){var t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten:function(e){var t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken:function(e){var t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale:function(){var e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return n.rgb(t,t,t)},fade:function(e){return this.alpha(this.valpha-this.valpha*e)},opaquer:function(e){return this.alpha(this.valpha+this.valpha*e)},rotate:function(e){var t=this.hsl(),r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix:function(e,t){var r=e.rgb(),a=this.rgb(),o=void 0===t?.5:t,l=2*o-1,i=r.alpha()-a.alpha(),s=((l*i===-1?l:(l+i)/(1+l*i))+1)/2,u=1-s;return n.rgb(s*r.red()+u*a.red(),s*r.green()+u*a.green(),s*r.blue()+u*a.blue(),r.alpha()*o+a.alpha()*(1-o))}},Object.keys(d).forEach(function(e){if(p.indexOf(e)===-1){var t=d[e].channels;n.prototype[e]=function(){if(this.model===e)return new n(this);if(arguments.length)return new n(arguments,e);var r="number"==typeof arguments[t]?t:this.valpha;return new n(s(d[this.model][e].raw(this.color)).concat(r),e)},n[e]=function(r){return"number"==typeof r&&(r=u(f.call(arguments),t)),new n(r,e)}}}),e.exports=n},416:function(e,t){"use strict";e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},539:function(e,t,r){"use strict";var n=r(416),a=Array.prototype.concat,o=Array.prototype.slice,l=e.exports=function(e){for(var t=[],r=0,l=e.length;r<l;r++){var i=e[r];n(i)?t=a.call(t,o.call(i)):t.push(i)}return t};l.wrap=function(e){return function(){return e(l(arguments))}}},691:function(e,t){function r(e){var t,r,n,a=Object.create(rgbClass);if("string"!=typeof e)throw new Error("must use string");return t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),a.r=t,a.g=r,a.b=n,a}function n(e){var t=Object.create(rgbClass);return t.r=e.r,t.g=e.g,t.b=e.b,e}function a(e){var t,r=Object.create(rgbClass);for(t in e)e.hasOwnProperty(t)&&(r[t]=parseFloat(e[t]/255,10));return r}function o(e){var t,r=Object.create(rgbClass),n=0;for(t in e)e.hasOwnProperty(t)&&(n=parseFloat(e[t],10),n<=.03928?r[t]=n/12.92:r[t]=Math.pow((n+.055)/1.055,2.4));return r}function l(e){return.2126*e.r+.7152*e.g+.0722*e.b}rgbClass={toString:function(){return"<r: "+this.r+" g: "+this.g+" b: "+this.b+" >"}},t.relativeLuminance=function(e){var t,i,s,u=0;return t="string"==typeof e?r(e):n(e),i=a(t),s=o(i),u=l(s)}},215:function(e,t,r){var n=r(691),a=3,o=4.5,l=4.5,i=7,s=18,u={toString:function(){return"< WCAG-AA: "+(this.WCAG_AA?"pass":"fail")+" WCAG-AAA: "+(this.WCAG_AAA?"pass":"fail")+" >"}},c=function(e,t){var r,a,o,l,i;return a=n.relativeLuminance(e),o=n.relativeLuminance(t),a>=o?(l=a,i=o):(l=o,i=a),r=(l+.05)/(i+.05)},d=function(e,t,r){var n=0,d=Object.create(u),f=r||12;return n=c(e,t),f>=s?(d.WCAG_AA=n>=a,d.WCAG_AAA=n>=l):(d.WCAG_AA=n>=o,d.WCAG_AAA=n>=i),d};e.exports={getContrastRatio:c,verifyContrastRatio:d}},228:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(4),s=n(i),u=r(3),c=n(u),d=r(16),f=n(d),p=r(160),h=n(p),m=r(19),b=n(m),v=r(583),g=n(v),y=r(229),C=n(y),w=function(e){function t(){var r,n,l;a(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return r=n=o(this,e.call.apply(e,[this].concat(s))),n.state={isKebabMenuVisible:Boolean(n.props.menuVisible)},n.toggleKebabMenu=function(e){e.stopPropagation();var t=n.state.isKebabMenuVisible;n.setState({isKebabMenuVisible:!t})},n.hideKebabMenu=function(){n.setState({isKebabMenuVisible:!1})},n.kebabRef=function(e){n.kebab=e},l=r,o(n,l)}return l(t,e),t.prototype.getPosition=function(){return this.kebab?this.kebab.getBoundingClientRect():null},t.prototype.renderKebabMenu=function(){return c.default.createElement(C.default,{hideKebabMenu:this.hideKebabMenu,position:this.getPosition()},this.props.children)},t.prototype.render=function(){var e,t=(0,f.default)((e={},e[h.default.isOpen]=this.state.isKebabMenuVisible,e[h.default.kebabIcon]=!0,e));return c.default.createElement("div",{className:h.default.fieldKebabIconInner},c.default.createElement("button",{className:t,onClick:this.toggleKebabMenu,ref:this.kebabRef},c.default.createElement(b.default,{icon:g.default,role:"img",title:"Open menu"})),this.state.isKebabMenuVisible&&this.renderKebabMenu())},t}(c.default.Component);t.default=w,w.propTypes={children:s.default.node.isRequired,menuVisible:s.default.bool},e.exports=t.default},160:function(e,t){e.exports={fieldKebabIconInner:"src-components-kebab----Kebab-module---fieldKebabIconInner---2YfnA",kebabIcon:"src-components-kebab----Kebab-module---kebabIcon---2fMMH src-components----HtmlContent-module---buttonReset---dwqWH",kebabHoverArea:"src-components-kebab----Kebab-module---kebabHoverArea---1-HFU",isOpen:"src-components-kebab----Kebab-module---isOpen---2Q4Iv",menuContainer:"src-components-kebab----Kebab-module---menuContainer---V2Bc8"}},229:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(4),s=n(i),u=r(3),c=n(u),d=r(160),f=n(d),p=function(e){function t(){var r,n,l;a(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return r=n=o(this,e.call.apply(e,[this].concat(s))),n.menuRef=function(e){n.menu=e},n.handleDocumentClick=function(e){n.menu&&!n.menu.contains(e.target)&&n.props.hideKebabMenu()},n.handleDocumentResize=function(){n.props.hideKebabMenu()},l=r,o(n,l)}return l(t,e),t.prototype.componentDidMount=function(){document.addEventListener("click",this.handleDocumentClick,!1),window.addEventListener("resize",this.handleDocumentResize,!1),this.positionMenu()},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleDocumentClick,!1),window.removeEventListener("resize",this.handleDocumentResize,!1)},t.prototype.positionMenu=function(){if(this.props.position){var e=this.props.position,t=(e.bottom-e.top)/2,r=window,n=r.innerHeight,a=this.menu.getBoundingClientRect();this.menu.style.left=this.calculateLeftOffset(window.scrollX,e.right,a.width),this.menu.style.top=this.calculateTopOffset(window.scrollY,e.top,t),e.bottom>n-a.height&&(this.menu.style.top=this.calculateShiftedUpTopOffset(window.scrollY,e.top,a.height-t+12))}},t.prototype.convertToPx=function(e){return e+"px"},t.prototype.calculateLeftOffset=function(e,t,r){return this.convertToPx(e+t-r)},t.prototype.calculateTopOffset=function(e,t,r){return this.convertToPx(e+(t+r))},t.prototype.calculateShiftedUpTopOffset=function(e,t,r){return this.convertToPx(e+(t-r))},t.prototype.render=function(){var e=this.props;return c.default.createElement("div",{className:f.default.menuContainer,ref:this.menuRef,onClick:function(){return e.hideKebabMenu()}},e.children)},t}(c.default.Component);t.default=p,p.propTypes={children:s.default.node.isRequired,hideKebabMenu:s.default.func.isRequired,position:s.default.shape({top:s.default.number,bottom:s.default.number,left:s.default.number,right:s.default.number})},e.exports=t.default},230:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(228),o=n(a);t.default=o.default,e.exports=t.default},65:function(e,t){e.exports={menuList:"src-components-menu-list----Menu-module---menuList---2K1pI",header:"src-components-menu-list----Menu-module---header---yi-6w",header__title:"src-components-menu-list----Menu-module---header__title---2FFp5",header__subtitle:"src-components-menu-list----Menu-module---header__subtitle---1ChW9",menuItem:"src-components-menu-list----Menu-module---menuItem---3HJKd",menuItem__Icon:"src-components-menu-list----Menu-module---menuItem__Icon---1L27k",menuItem__Label:"src-components-menu-list----Menu-module---menuItem__Label---3Njju",hoverIcon:"src-components-menu-list----Menu-module---hoverIcon---3Jz7H",separator:"src-components-menu-list----Menu-module---separator---1OpXe"}},231:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(3),o=n(a),l=r(4),i=n(l),s=r(65),u=n(s),c=function(e){var t=e.title,r=e.subtitle;return o.default.createElement("div",{className:u.default.header},o.default.createElement("span",{className:u.default.header__title},t),o.default.createElement("span",{className:u.default.header__subtitle},r))};c.propTypes={title:i.default.string.isRequired,subtitle:i.default.string},t.default=c,e.exports=t.default},232:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(3),o=n(a),l=r(4),i=n(l),s=r(16),u=n(s),c=r(19),d=n(c),f=r(65),p=n(f),h=function(e){var t,r=e.icon,n=e.hoverIcon,a=e.children,l=e.action,i="string"==typeof l,s=o.default.createElement("span",{className:p.default.menuItem__Label},a),c=r&&o.default.createElement("span",{className:p.default.menuItem__Icon},o.default.createElement(d.default,{icon:r,role:"presentation"})),f=i?l:null,h=i?null:l,m=(0,u.default)((t={},t[p.default.menuItem]=!0,t[p.default.hoverIcon]=r&&n,t));return o.default.createElement("a",{href:f,onClick:h,className:m},s,c)};h.propTypes={children:i.default.node.isRequired,action:i.default.oneOfType([i.default.string,i.default.func]).isRequired,icon:i.default.object,hoverIcon:i.default.bool},t.default=h,e.exports=t.default},233:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(3),o=n(a),l=r(4),i=n(l),s=r(65),u=n(s),c=function(e){var t=e.children;return o.default.createElement("div",{className:u.default.menuList},t)};c.propTypes={children:i.default.node.isRequired},t.default=c,e.exports=t.default},234:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(3),o=n(a),l=r(4),i=(n(l),r(65)),s=n(i),u=function(){return o.default.createElement("hr",{className:s.default.separator})};t.default=u,e.exports=t.default},235:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.MenuSeperator=t.MenuItem=t.MenuHeader=t.MenuList=void 0;var a=r(233),o=n(a),l=r(231),i=n(l),s=r(232),u=n(s),c=r(234),d=n(c);t.MenuList=o.default,t.MenuHeader=i.default,t.MenuItem=u.default,t.MenuSeperator=d.default,t.default=o.default},78:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(3),o=n(a),l=r(16),i=n(l),s=r(19),u=n(s),c=r(31),d=n(c),f=r(30),p=n(f),h=r(50),m=n(h),b=function(e){var t=e.title,r=e.type,n=e.children,a="tip"===r?d.default:p.default,l="tip"===r?"tipIcon":"warningIcon";return o.default.createElement("div",{className:m.default.cardWithHeader},o.default.createElement("div",{className:m.default.cardHeader},a&&o.default.createElement("span",{className:(0,i.default)(m.default.iconWrapper,m.default[l])},o.default.createElement(u.default,{icon:a,role:"presentation"})),t),o.default.createElement("div",{className:m.default.cardBody},n))};t.default=b,e.exports=t.default},50:function(e,t){e.exports={card:"src-components-tip-card----TipCard-module---card---2jAko",dark:"src-components-tip-card----TipCard-module---dark---1rO4T",cardWithHeader:"src-components-tip-card----TipCard-module---cardWithHeader---3libT src-components-tip-card----TipCard-module---card---2jAko",cardHeader:"src-components-tip-card----TipCard-module---cardHeader---2fYWe",cardBody:"src-components-tip-card----TipCard-module---cardBody---1Rs7G",iconWrapper:"src-components-tip-card----TipCard-module---iconWrapper---u5G6q",tipIcon:"src-components-tip-card----TipCard-module---tipIcon---3THNM",warningIcon:"src-components-tip-card----TipCard-module---warningIcon---1pbSl",tipsContainer:"src-components-tip-card----TipCard-module---tipsContainer---3TOTF"}},79:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(3),o=n(a),l=r(50),i=n(l),s=r(11),u=n(s),c=function(e){var t=e.children;return o.default.createElement("div",{className:i.default.tipsContainer+" "+u.default.htmlContent},t)};t.default=c,e.exports=t.default},80:function(e,t,r){"use strict";t.__esModule=!0;t.TipCard=r(78),t.TipContainer=r(79)},66:function(e,t){e.exports={colorCard:"src-pages-visuals-colors----ColorCard-module---colorCard---DLQRY src-components-card----Card-module---card---1WbKx",cardToggleButton:"src-pages-visuals-colors----ColorCard-module---cardToggleButton---2Z8yI src-components----HtmlContent-module---buttonReset---dwqWH",toggleIconWrapper:"src-pages-visuals-colors----ColorCard-module---toggleIconWrapper---3rxPk",subheader:"src-pages-visuals-colors----ColorCard-module---subheader---1M9CW",tile:"src-pages-visuals-colors----ColorCard-module---tile---1TYWC",small:"src-pages-visuals-colors----ColorCard-module---small---2atAC",large:"src-pages-visuals-colors----ColorCard-module---large---JIft0",colorBlock:"src-pages-visuals-colors----ColorCard-module---colorBlock---1saGd src-components-kebab----Kebab-module---kebabHoverArea---1-HFU",colorBlockHalf:"src-pages-visuals-colors----ColorCard-module---colorBlockHalf---3HG5Z",whiteText:"src-pages-visuals-colors----ColorCard-module---whiteText---SrsXv",accessibilityIcon:"src-pages-visuals-colors----ColorCard-module---accessibilityIcon---1UQVF",kebabContainer:"src-pages-visuals-colors----ColorCard-module---kebabContainer---12G5B",colorBlockLabel:"src-pages-visuals-colors----ColorCard-module---colorBlockLabel---2vMNS",dropdownItem:"src-pages-visuals-colors----ColorCard-module---dropdownItem---1rV7s"}},241:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e.mix((0,c.default)("#ffffff"),t/100)}function o(e,t){return e.mix((0,c.default)("#000000"),t/100)}function l(e){var t=h.default.getContrastRatio(e.hex(),"#ffffff"),r=h.default.getContrastRatio(e.hex(),_.default.ink.hex());return t>r}t.__esModule=!0;var i=r(3),s=n(i),u=r(137),c=n(u),d=r(16),f=n(d),p=r(215),h=n(p),m=r(242),b=n(m),v=r(131),g=n(v),y=r(66),C=n(y),w=r(132),_=n(w),M=function(e){var t,r=e.colorName,n=e.amount,i=e.showContrast,u=!1,c="100%",d="$ca-palette-"+r.toLowerCase(),p=_.default[r.toLowerCase()];if(0!=n){var h=Math.abs(n);n>0?(p=a(p,h),d="add-tint("+d+", "+h+"%)",c="+"+h+"% White"):(p=o(p,h),d="add-shade("+d+", "+h+"%)",c="+"+h+"% Black"),u=!0}var m=l(p),v=(0,f.default)((t={},t[C.default.colorBlock]=!0,t[C.default.colorBlockHalf]=u,t[C.default.whiteText]=m,t)),y=r+" "+c,w=i?[s.default.createElement(g.default,{color:p,name:y,text:"White",size:12}),s.default.createElement(g.default,{color:p,name:y,text:"White",size:18}),s.default.createElement(g.default,{color:p,name:y,text:"Ink",size:12}),s.default.createElement(g.default,{color:p,name:y,text:"Ink",size:18})]:s.default.createElement(b.default,{bgColor:p,sassVar:d});return s.default.createElement("div",{key:p.rgb().string(),className:v,style:{background:p.rgb().string()}},s.default.createElement("span",{className:C.default.colorBlockLabel},c),w)};t.default=M,e.exports=t.default},242:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(3),o=n(a),l=r(230),i=n(l),s=r(66),u=n(s),c=r(127),d=n(c),f=r(235),p=function(e){var t=e.bgColor,r=e.sassVar,n=t.hex(),a=t.rgb().array().map(Math.round).join(", "),l=t.cmyk().array().map(Math.round).join(", ");return o.default.createElement("span",{className:u.default.kebabContainer},o.default.createElement(i.default,null,o.default.createElement(f.MenuList,null,o.default.createElement(f.MenuHeader,{title:"Copy to clipboard"}),o.default.createElement(f.MenuItem,h("SASS",r)),o.default.createElement(f.MenuItem,h("HEX",n)),o.default.createElement(f.MenuItem,h("RGB",a)),o.default.createElement(f.MenuItem,h("CMYK",l)))))},h=function(e,t){var r=void 0;return{children:o.default.createElement("div",{className:u.default.dropdownItem},o.default.createElement("strong",null,e),o.default.createElement("input",{type:"text",value:t,readOnly:!0,ref:function(e){return r=e}})),action:function(){r&&(r.select(),document.execCommand("copy"))},icon:d.default,hoverIcon:!0}};t.default=p,e.exports=t.default},243:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(3),s=n(i),u=r(19),c=n(u),d=r(125),f=n(d),p=r(124),h=n(p),m=r(66),b=n(m),v=r(241),g=n(v),y=r(131),C=function(e){function t(){var r,n,l;a(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return r=n=o(this,e.call.apply(e,[this].concat(s))),n.state={expanded:!1},l=r,o(n,l)}return l(t,e),t.prototype.render=function(){var e=this.props.name;b.default[e.toLowerCase()];return s.default.createElement("div",null,s.default.createElement("div",{className:b.default.colorCard},s.default.createElement("h3",null,this.renderColorTitleAndToggle()),this.renderSubtitle(),this.renderColorBlocks(this.state.expanded)))},t.prototype.renderColorTitleAndToggle=function(){var e=this;if(!this.isExpandable())return s.default.createElement("span",null,this.props.name);var t=this.state.expanded?f.default:h.default,r=this.state.expanded?"Collapse Color":"Expand Color";return s.default.createElement("button",{className:b.default.cardToggleButton,onClick:function(){return e.toggleOpen()}},this.props.name,s.default.createElement("span",{className:b.default.toggleIconWrapper},s.default.createElement(c.default,{icon:t,role:"img",title:r})))},t.prototype.isExpandable=function(){return"Stone"!==this.props.name},t.prototype.toggleOpen=function(){this.setState({expanded:!this.state.expanded})},t.prototype.renderSubtitle=function(){var e=this.props.showAccessibility,t=e?"WCAG 2.0 AA":"Tint & Shade";return s.default.createElement("div",{className:b.default.subheader},s.default.createElement("h4",null,t),e&&(0,y.renderContrastHeaderIcons)())},t.prototype.renderColorBlocks=function(e){var t=this,r=this.props.name,n=e&&this.isExpandable()?[90,70,50,30,10,0,-10,-20,-30,-40,-50]:[0];return n.map(function(e){return s.default.createElement(g.default,{key:e,colorName:r,amount:e,showContrast:t.props.showAccessibility})})},t}(s.default.Component);t.default=C,e.exports=t.default},244:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(3),u=n(s),c=r(12),d=r(161),f=n(d),p=r(11),h=n(p),m=r(243),b=n(m),v=function(e){function t(){var r,n,l;a(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return r=n=o(this,e.call.apply(e,[this].concat(s))),n.state={showAccessibility:{}},l=r,o(n,l)}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:f.default.cardContainer},this.renderColorSection("Primary Colors",["Coral","Paper","Ink"]),this.renderColorSection("Secondary Colors",["Seedling","Ocean","Lapis","Wisteria","Peach","Yuzu"]),this.renderColorSection("Tertiary Colors",["Positive-Delta","Negative-Delta","Stone"]))},t.prototype.renderColorSection=function(e,t){var r=this,n=this.state.showAccessibility[e];return[u.default.createElement("div",{className:f.default.gridHeader,key:e},u.default.createElement("h2",{className:h.default.h2},e),u.default.createElement(c.ActionLink,{action:function(){return r.toggleAccessibility(e)}},n?"Hide Contrast Checker":"Show Contrast Checker")),t.map(function(e){return u.default.createElement(b.default,{name:e,key:e,showAccessibility:n})})]},t.prototype.toggleAccessibility=function(e){var t,r=this.state.showAccessibility[e];this.setState({showAccessibility:i({},this.state.showAccessibility,(t={},t[e]=!r,t))})},t}(u.default.Component);t.default=v,e.exports=t.default},131:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return c.default.verifyContrastRatio(e.hex(),t.hex(),r).WCAG_AA}function o(e,t,r){var n;return{bgColor:"light"==e&&r,className:(0,f.default)((n={},n[C.default.tile]=!0,n[C.default.small]="small"===t,n[C.default.large]="large"===t,n[C.default.whiteText]="light"===e,n)),title:("light"==e?"White text ":"Ink text ")+("large"==t?"18pt (24px) or larger":"smaller than 18pt (24px)")}}function l(e){var t=[o("light","small",e),o("light","large",e),o("dark","small",e),o("dark","large",e)];return t.map(function(e,t){return s.default.createElement("div",null,s.default.createElement("span",{className:e.className,key:t,style:{background:e.bgColor},title:e.title},"A"))})}t.__esModule=!0,t.renderContrastHeaderIcons=l;var i=r(3),s=n(i),u=r(215),c=n(u),d=r(16),f=n(d),p=r(19),h=n(p),m=r(31),b=n(m),v=r(132),g=n(v),y=r(66),C=n(y),w=function(e){var t=e.color,r=(e.colorName,e.text),n=e.size,o=g.default[r.toLowerCase()],l=a(t,o,n),i=r+" text on '"+name+"' with a font size of at least "+n+"pt is level AA contrast.";return s.default.createElement("div",{className:C.default.accessibilityIcon,style:{color:o.rgb()}},l&&s.default.createElement(h.default,{icon:b.default,role:"img",title:i}))};t.default=w},132:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(137),o=n(a),l={white:(0,o.default)("#ffffff"),ink:(0,o.default)("#3e4543"),paper:(0,o.default)("#f2edde"),coral:(0,o.default)("#f04c5d"),seedling:(0,o.default)("#45ad8f"),ocean:(0,o.default)("#1b7688"),wisteria:(0,o.default)("#727193"),lapis:(0,o.default)("#253c64"),peach:(0,o.default)("#f3786d"),yuzu:(0,o.default)("#ffce1e"),stone:(0,o.default)("#f9f9f9"),"positive-delta":(0,o.default)("#43e699"),"negative-delta":(0,o.default)("#ff4757")};t.default=l,e.exports=t.default},262:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.className,r=e.style,n=e.elementProps;return u.default.createElement("div",{className:t,style:r},u.default.createElement("h1",o({id:"colors"},n.h1),"Colors"),u.default.createElement("p",n.p,"Our color palette is built with our core principles and guidelines as its foundation. We are committed to complying with ",u.default.createElement("a",o({
href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"},n.a),"WCAG AA standard contrast ratios"),"."),u.default.createElement("hr",n.hr),u.default.createElement(p.default,n.ColorShowcase),u.default.createElement("h2",o({id:"best-practices"},n.h2),"Best Practices"),u.default.createElement(b.TipContainer,n.TipContainer,u.default.createElement(b.TipCard,o({title:"Colors should…",type:"tip"},n.TipCard),u.default.createElement("ul",n.ul,u.default.createElement("li",n.li,"TODO"))),u.default.createElement(b.TipCard,o({title:"Colors should not…",type:"warning"},n.TipCard),u.default.createElement("ul",n.ul,u.default.createElement("li",n.li,"TODO")))),u.default.createElement(m.default,o({to:"/"},n.Link),"Go back to the homepage"))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(11),i=n(l),s=r(3),u=n(s),c=r(4),d=n(c),f=r(244),p=n(f),h=r(12),m=n(h),b=r(80),v=r(161);n(v);a.propTypes={className:d.default.string,style:d.default.object,elementProps:d.default.object},a.defaultProps={elementProps:{}};var g=function(){return u.default.createElement("div",{className:i.default.contentContainer},u.default.createElement(a,{elementProps:{h1:{className:i.default.h1},h2:{className:i.default.h2},h3:{className:i.default.h3},table:{className:i.default.table},blockquote:{className:i.default.blockquote},hr:{className:i.default.hr},img:{className:i.default.img},a:{className:i.default.link}}}))};t.default=g},161:function(e,t){e.exports={cardContainer:"src-pages-visuals-colors----index-module---cardContainer---2OHji",gridHeader:"src-pages-visuals-colors----index-module---gridHeader---1S_Zc"}},124:function(e,t,r){var n=r(2),a=r(1),o=new n({id:"ca-icon-chevron-down",use:"ca-icon-chevron-down-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-chevron-down"><defs><path id="ca-icon-chevron-down_a" d="M6.18 6.845L10 10.747l3.82-3.902L15 8.049l-5 5.106-5-5.106z" /></defs><use fill="currentColor" xlink:href="#ca-icon-chevron-down_a" fill-rule="evenodd" /></symbol>'});a.add(o);e.exports=o},125:function(e,t,r){var n=r(2),a=r(1),o=new n({id:"ca-icon-chevron-up",use:"ca-icon-chevron-up-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-chevron-up"><defs><path id="ca-icon-chevron-up_a" d="M6.179 13.155L10 9.253l3.821 3.902 1.18-1.204L10 6.845l-5 5.106z" /></defs><use fill="currentColor" xlink:href="#ca-icon-chevron-up_a" fill-rule="evenodd" /></symbol>'});a.add(o);e.exports=o},127:function(e,t,r){var n=r(2),a=r(1),o=new n({id:"ca-icon-duplicate",use:"ca-icon-duplicate-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-duplicate"><defs><path d="M13.273 2H4.545c-.803 0-1.454.65-1.454 1.455v10.181h1.454V3.455h8.728V2zm2.182 2.91h-8C6.65 4.91 6 5.56 6 6.363v10.181C6 17.35 6.65 18 7.455 18h8c.803 0 1.454-.65 1.454-1.455V6.364c0-.804-.65-1.455-1.454-1.455z" id="ca-icon-duplicate_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-duplicate_a" fill-rule="evenodd" /></symbol>'});a.add(o);e.exports=o},583:function(e,t,r){var n=r(2),a=r(1),o=new n({id:"ca-icon-ellipsis",use:"ca-icon-ellipsis-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-ellipsis"><defs><path d="M4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" id="ca-icon-ellipsis_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-ellipsis_a" fill-rule="evenodd" /></symbol>'});a.add(o);e.exports=o},30:function(e,t,r){var n=r(2),a=r(1),o=new n({id:"ca-icon-exclamation",use:"ca-icon-exclamation-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-exclamation"><defs><path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm.8 12v-1.6H9.2V14h1.6zm0-3.2V6H9.2v4.8h1.6z" id="ca-icon-exclamation_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-exclamation_a" fill-rule="evenodd" /></symbol>'});a.add(o);e.exports=o},31:function(e,t,r){var n=r(2),a=r(1),o=new n({id:"ca-icon-success",use:"ca-icon-success-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-success"><defs><path d="M10 2c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8zM8.4 14l7.2-7.2-1.128-1.136L8.4 11.736 5.528 8.872 4.4 10l4 4z" id="ca-icon-success_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-success_a" fill-rule="evenodd" /></symbol>'});a.add(o);e.exports=o}});
//# sourceMappingURL=component---src-pages-visuals-colors-index-mdx-0d1b532326333c5ad9f7.js.map