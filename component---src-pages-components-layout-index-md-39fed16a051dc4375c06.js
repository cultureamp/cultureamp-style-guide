webpackJsonp([0xfa2b52f6bb3b,18230397899026],{100:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return y.createElement("div",{className:_.default.navigationBar},e.children)}function d(e){return y.createElement("div",{className:_.default.sidebar},e.children)}function c(e){return y.createElement("aside",{className:_.default.header},e.children)}function s(e){return y.createElement("footer",{className:_.default.footer},e.children)}function f(e){return y.createElement("div",{className:_.default.toasts,"aria-live":"assertive"},e.children)}function m(e){return y.createElement("div",{className:_.default.announcers,"aria-live":"assertive"},e.children)}function p(e,t){var a=e.find(function(e){return e&&e.type.name==t.name});if(a){var n=e.indexOf(a);e.splice(n,1)}return a}t.__esModule=!0;var h=a(1),y=r(h),g=a(141),_=n(g),v=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=y.Children.toArray(this.props.children),t=p(e,u),a=p(e,c),n=p(e,d),r=p(e,s),o=p(e,m),l=p(e,f);return y.createElement("div",{className:_.default.root},t,o,y.createElement("div",{className:_.default.page},a,l,y.createElement("div",{className:_.default.body},n,y.createElement("main",{className:_.default.content},e)),r))},t}(y.Component);v.displayName="Layout",v.NavigationBar=u,v.Sidebar=d,v.Header=c,v.Footer=s,v.Toasts=f,v.Announcers=m,v.displayName="Layout",u.displayName="NavigationBar",u.displayName="NavigationBar",d.displayName="Sidebar",d.displayName="Sidebar",c.displayName="Header",c.displayName="Header",s.displayName="Footer",s.displayName="Footer",f.displayName="Toasts",f.displayName="Toasts",m.displayName="Announcers",m.displayName="Announcers",t.default=v,e.exports=t.default},141:function(e,t){e.exports={root:"Layout-module__root--3q6pd",navigationBar:"Layout-module__navigationBar--RTCbG",page:"Layout-module__page--2GDwv",header:"Layout-module__header--3GFIf",footer:"Layout-module__footer--1XpxA",body:"Layout-module__body--2sR-Q",sidebar:"Layout-module__sidebar--dyTBx",content:"Layout-module__content--1ZMd_",toasts:"Layout-module__toasts--R0buW",announcers:"Layout-module__announcers--2kOjM"}},76:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(100);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}}),e.exports=t.default},49:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d=a(1),c=r(d),s=a(6),f=n(s),m=a(65),p=n(m),h=a(50),y=a(51),g=n(y),_=a(52),v=n(_),b=a(22),N=n(b),E=function(e){function t(){var a,n,r;o(this,t);for(var i=arguments.length,d=Array(i),c=0;c<i;c++)d[c]=arguments[c];return a=n=l(this,e.call.apply(e,[this].concat(d))),n.menuChange=function(e){n.setState(function(t){return u({},t,{menusOpen:t.menusOpen+(e?1:-1)})})},n.state={menusOpen:0},r=a,l(n,r)}return i(t,e),t.prototype.render=function(){var e=this.props,t=(e.environment,e.loading,e.children),a=e.colorScheme,n=[],r=[];return c.Children.toArray(t).forEach(function(e){e!==!1&&(e.type.displayName==g.default.displayName?n.push(e):r.push(e))}),c.createElement("header",{className:(0,f.default)(p.default.navigationBar,p.default[a])},this.renderBadge(),this.renderLinks(n),this.renderOtherChildren(r))},t.prototype.renderBadge=function(){var e=this.props,t=e.environment,a=e.loading,n={production:h.ProductionBadge,staging:h.StagingBadge,test:h.TestBadge,local:h.LocalBadge},r=n[t]||(0,h.namedBadge)(t);return c.createElement(r,{loading:a})},t.prototype.renderLinks=function(e){var t=this;return c.createElement("nav",{className:p.default.links},c.createElement("ul",{className:p.default.linkList},e.map(function(e){return c.createElement("li",{key:e.key,className:p.default.child},c.createElement("div",null,c.cloneElement(e,{hideTooltip:t.state.menusOpen>0})))})))},t.prototype.renderOtherChildren=function(e){var t=this;return e.map(function(e){return c.createElement("div",{key:e.key,className:p.default.child},c.createElement("div",null,c.cloneElement(e,{hideTooltip:t.state.menusOpen>0,onMenuChange:t.menuChange})))})},t}(c.Component);E.displayName="NavigationBar",E.defaultProps={environment:"production",loading:!1,colorScheme:"cultureamp"},E.Link=g.default,E.Menu=v.default,E.Tooltip=N.default,E.displayName="NavigationBar",t.default=E,e.exports=t.default},65:function(e,t){e.exports={navigationBar:"NavigationBar-module__navigationBar--3JRff",kaizen:"NavigationBar-module__kaizen--3nMih",links:"NavigationBar-module__links--1weE0",child:"NavigationBar-module__child--3AF_0"}},50:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return s.default.createElement("div",{className:h.default.badge},s.default.createElement("a",{href:"/"},e.loading?s.default.createElement(g.default,{icon:N.default,title:"loading…"}):s.default.createElement(g.default,{icon:v.default,title:"Culture Amp"})))}function o(e){return s.default.createElement(d,{envClass:h.default.staging,monogram:"staging",loading:e.loading})}function l(e){return s.default.createElement(d,{envClass:h.default.test,monogram:"test",loading:e.loading})}function i(e){return s.default.createElement(d,{envClass:h.default.local,monogram:"local",loading:e.loading})}function u(e){return function(t){return s.default.createElement(d,{envClass:h.default.named,monogram:e,loading:t.loading})}}function d(e){return s.default.createElement("div",{className:(0,m.default)(h.default.badge,e.envClass)},s.default.createElement("a",{href:"/","aria-live":"polite"},e.loading?s.default.createElement(g.default,{icon:N.default,title:"loading"}):s.default.createElement("span",{"aria-label":e.monogram},e.monogram.substr(0,2))))}t.__esModule=!0,t.ProductionBadge=r,t.StagingBadge=o,t.TestBadge=l,t.LocalBadge=i,t.namedBadge=u;var c=a(1),s=n(c),f=a(6),m=n(f),p=a(66),h=n(p),y=a(16),g=n(y),_=a(19),v=n(_),b=a(30),N=n(b);r.displayName="ProductionBadge",r.displayName="ProductionBadge",o.displayName="StagingBadge",o.displayName="StagingBadge",l.displayName="TestBadge",l.displayName="TestBadge",i.displayName="LocalBadge",i.displayName="LocalBadge",u.displayName="namedBadge",d.displayName="MonogramBadge",d.displayName="MonogramBadge"},66:function(e,t){e.exports={badge:"Badge-module__badge--3XbGY",staging:"Badge-module__staging--3YtAD",named:"Badge-module__named--1iGzl",test:"Badge-module__test--2pSBo",local:"Badge-module__local--2Z7w7"}},51:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),l=n(o),i=a(6),u=n(i),d=a(67),c=n(d),s=a(16),f=n(s),m=a(12),p=n(m),h=function(e){var t,a,n=e.icon,o=e.href,i=e.active,d=e.tooltip,s=e.hideTooltip,m=e.id,h=e.onClick;return l.default.createElement("div",{className:c.default.root},l.default.createElement("a",r({className:(0,u.default)(c.default.link,(t={},t[p.default.active]=i,t))},{href:o,id:m,onClick:h}),l.default.createElement(f.default,{icon:n,title:d})),l.default.createElement("div",{className:(0,u.default)(c.default.tooltip,(a={},a[c.default.suppressed]=s,a)),"aria-hidden":!0},l.default.createElement("div",null,l.default.createElement("small",{className:c.default.content},d))))};h.displayName="Link",h.displayName="Link",h.defaultProps={active:!1,hideTooltip:!1},t.default=h,e.exports=t.default},67:function(e,t){e.exports={root:"Link-module__root--gTd7s Tooltip-module__root--1-o9a",link:"Link-module__link--2FgXV Icon-module__interactiveIconWrapper--1FGog",active:"Link-module__active--1c8IM Icon-module__active--A6TNP",tooltip:"Link-module__tooltip--1bAYD Tooltip-module__tooltip--3wxKO",content:"Link-module__content--1VgLH Tooltip-module__content--2AUVr",suppressed:"Link-module__suppressed--1q0qG Tooltip-module__suppressed--1cOLb"}},52:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d=a(1),c=r(d),s=a(68),f=n(s),m=a(22),p=n(m),h=function(e){function t(){var a,n,r;o(this,t);for(var i=arguments.length,d=Array(i),s=0;s<i;s++)d[s]=arguments[s];return a=n=l(this,e.call.apply(e,[this].concat(d))),n.state={open:!1},n.toggle=function(e){var t=!n.state.open;n.setState({open:t}),n.props.onMenuChange&&n.props.onMenuChange(t)},n.renderMenuItem=function(e,t){var a=e.newWindow;return a?c.createElement("div",{key:t},c.createElement(p.default,{hideTooltip:!1,tabIndex:null,tooltip:"Opens in a new tab"},n.renderMenuItemLink(e))):c.createElement(c.Fragment,{key:t},n.renderMenuItemLink(e))},n.renderMenuItemLink=function(e){var t=e.label,a=e.link,n=e.newWindow,r=e.data,o=void 0===r?{}:r,l={};return Object.keys(o).forEach(function(e){l["data-"+e]=o[e]}),c.createElement("a",u({href:a,className:f.default.menuItem,target:n?"_blank":"_self"},l),t)},n.clickDocument=function(e){!n.state.open||!n.root||e.target instanceof Node&&n.root.contains(e.target)||n.toggle(e)},r=a,l(n,r)}return i(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.children,n=t.tooltip,r=t.hideTooltip,o=t.automationId;return c.createElement("nav",{className:f.default.root,ref:function(t){return e.root=t}},c.createElement(p.default,{tooltip:n,hideTooltip:this.state.open||r,tabIndex:null},c.createElement("button",{className:f.default.button,onClick:this.toggle,"aria-expanded":this.state.open,"data-automation-id":o,onMouseDown:function(e){return e.preventDefault()}},a)),this.state.open&&this.renderMenu())},t.prototype.renderMenu=function(){var e=this.props,t=e.header,a=e.items;return c.createElement("div",{className:f.default.menu},c.createElement("div",null,t,a.map(this.renderMenuItem)))},t.prototype.componentDidMount=function(){document.addEventListener("click",this.clickDocument)},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.clickDocument)},t}(c.Component);h.displayName="Menu",h.defaultProps={items:[],hideTooltip:!1},h.displayName="Menu",t.default=h,e.exports=t.default},68:function(e,t){e.exports={root:"Menu-module__root--IaMP4",button:"Menu-module__button--2ouCn",menu:"Menu-module__menu--Jj0fR Tooltip-module__tooltip--3wxKO Tooltip-module__visible--2D4tA",menuTitle:"Menu-module__menuTitle--36E2Q",menuItem:"Menu-module__menuItem--3mnsQ"}},22:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}t.__esModule=!0;var o=a(1),l=r(o),i=a(6),u=n(i),d=a(69),c=n(d),s=function(e){var t,a=e.children,n=e.tabIndex,r=e.tooltip,o=e.hideTooltip;return l.createElement("div",{className:c.default.root,tabIndex:n},a,l.createElement("div",{className:(0,u.default)(c.default.tooltip,(t={},t[c.default.suppressed]=o,t)),"aria-hidden":!0},l.createElement("div",null,l.createElement("small",{className:c.default.content},r))))};s.displayName="Tooltip",s.displayName="Tooltip",s.defaultProps={hideTooltip:!1,tabIndex:0},t.default=s,e.exports=t.default},69:function(e,t){e.exports={root:"Tooltip-module__root--1-o9a",tooltip:"Tooltip-module__tooltip--3wxKO",suppressed:"Tooltip-module__suppressed--1cOLb",visible:"Tooltip-module__visible--2D4tA",content:"Tooltip-module__content--2AUVr"}},34:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(49);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(r).default}}),e.exports=t.default},102:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),o=n(r),l=a(76),i=n(l),u=a(92),d=n(u),c=function(e){return o.default.createElement("div",{className:d.default.layoutWrapper},o.default.createElement(i.default,e))};c.displayName="LayoutDemo",t.default=c,e.exports=t.default},92:function(e,t){e.exports={layoutWrapper:"LayoutDemo-module__layoutWrapper--dEnNi",sidebar:"LayoutDemo-module__sidebar--3KcGv",content:"LayoutDemo-module__content--2Cw8U",flash:"LayoutDemo-module__flash--YBDHW",footer:"LayoutDemo-module__footer--3BRnA"}},277:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),o=n(r),l=a(76),i=n(l),u=a(34),d=n(u),c=a(16),s=n(c),f=a(26),m=n(f),p=a(19),h=n(p),y=a(74),g=n(y),_=a(102),v=n(_),b=a(92),N=n(b),E=o.default.createElement(i.default.NavigationBar,null,o.default.createElement(d.default,null,o.default.createElement(d.default.Link,{icon:m.default,href:"/",tooltip:"Home",active:!0}),o.default.createElement(d.default.Link,{icon:g.default,href:"http://academy.cultureamp.com/",tooltip:"Support",active:!1}),o.default.createElement(d.default.Menu,{tooltip:"Culture Amp",items:[{label:"About Culture Amp",link:"https://www.cultureamp.com/"}]},o.default.createElement("div",{style:{backgroundColor:"#ffffff",color:"#F8A6AE",borderRadius:"3px"}},o.default.createElement(s.default,{icon:h.default,role:"img",title:"Culture Amp Logo",inheritSize:!0}))))),w=o.default.createElement(i.default.Sidebar,null,o.default.createElement("div",{className:N.default.sidebar},o.default.createElement("h2",null,"Actions"),o.default.createElement("p",null,"Go here..."),o.default.createElement("h2",null,"Filters"),o.default.createElement("p",null,"Go here..."),o.default.createElement("p",null,"Note: Usually the navigation bar and sidebar will not scroll as the main page content scrolls, but we have disabled the fixed positioning for this demo."))),x=o.default.createElement("div",{className:N.default.content},o.default.createElement("h1",null,"This is the main content"),o.default.createElement("p",null,"It will scroll with the main window"),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"..."),o.default.createElement("p",null,"While the sidebar and navbar should remain fixed.")),C=o.default.createElement(i.default.Header,null,o.default.createElement("div",{className:N.default.flash},"Welcome back!")),M=o.default.createElement(i.default.Footer,null,o.default.createElement("div",{className:N.default.footer},"© 2018 Culture Amp")),k=[{name:"With sidebar",node:o.default.createElement(v.default,null,E,w,x)},{name:"Without sidebar",node:o.default.createElement(v.default,null,E,x)},{name:"With footer and header",node:o.default.createElement(v.default,null,C,E,w,x,M)}];t.default=k,e.exports=t.default},228:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.className,a=e.style,n=e.elementProps;return d.default.createElement("div",{className:t,style:a},d.default.createElement("h1",o({id:"layout"},n.h1),"Layout"),d.default.createElement(h.default,n.IntroParagraph,d.default.createElement("p",n.p,"A standard Culture Amp layout with left-hand-side navigation bar, sidebar, and optional headers / footers.")),d.default.createElement(m.default,o({presets:g.default},n.Demo)))}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(8),i=n(l),u=a(1),d=n(u),c=a(5),s=n(c),f=a(18),m=n(f),p=a(9),h=n(p),y=a(277),g=n(y);r.propTypes={className:s.default.string,style:s.default.object,elementProps:s.default.object},r.defaultProps={elementProps:{}},r.displayName="MarkdownComponent";var _=function(){return d.default.createElement("div",{className:i.default.contentContainer},d.default.createElement(r,{elementProps:{h1:{className:i.default.h1},h2:{className:i.default.h2},h3:{className:i.default.h3},h4:{className:i.default.h4},h5:{className:i.default.h5},h6:{className:i.default.h6},p:{className:i.default.p},table:{className:i.default.table},ul:{className:i.default.ul},ol:{className:i.default.ol},li:{className:i.default.li},blockquote:{className:i.default.blockquote},hr:{className:i.default.hr},img:{className:i.default.img},a:{className:i.default.link}}}))};_.displayName="WrappedMarkdownComponent",t.default=_},26:function(e,t,a){var n=a(2),r=a(3),o=new n({id:"ca-icon-home",use:"ca-icon-home-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-home"><defs><path id="ca-icon-home_a" d="M8.118 18v-5.647h3.764V18h4.706v-7.53h2.824L10 2 .588 10.47h2.824V18z" /></defs><use fill="currentColor" xlink:href="#ca-icon-home_a" fill-rule="evenodd" /></symbol>'});r.add(o);e.exports=o},30:function(e,t,a){var n=a(2),r=a(3),o=new n({id:"ca-icon-spinner",use:"ca-icon-spinner-usage",viewBox:"0 0 100 100",content:'<symbol viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default" id="ca-icon-spinner"><path fill="none" class="bk" d="M0 0h100v100H0z" /><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="translate(0 -30)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(25.714 115.72 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9285714285714286s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(51.429 81.148 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8571428571428571s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(77.143 68.81 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.7857142857142857s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(102.857 61.962 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.7142857142857143s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(128.571 57.224 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6428571428571429s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(154.286 53.424 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5714285714285714s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(180 50 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(-154.286 46.576 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.42857142857142855s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(-128.571 42.776 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.35714285714285715s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(-102.857 38.038 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.2857142857142857s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(-77.143 31.19 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.21428571428571427s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(-51.429 18.852 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.14285714285714285s" repeatCount="indefinite"></animate></rect><rect x="47" y="40" width="6" height="20" rx="3" ry="3" fill="currentColor" transform="rotate(-25.714 -15.72 65)"><animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.07142857142857142s" repeatCount="indefinite"></animate></rect></symbol>'});r.add(o);e.exports=o},74:function(e,t,a){var n=a(2),r=a(3),o=new n({id:"ca-icon-support",use:"ca-icon-support-usage",viewBox:"0 0 20 20",content:'<symbol viewBox="0 0 20 20" id="ca-icon-support"><defs><path d="M10 14.5c-.92 0-1.776-.276-2.489-.75l-3.213 3.213A8.963 8.963 0 0 0 10 19a8.96 8.96 0 0 0 5.685-2.023l-3.215-3.215A4.482 4.482 0 0 1 10 14.5m6.963-10.201L13.75 7.51c.474.713.75 1.57.75 2.489 0 .913-.272 1.762-.738 2.471l3.215 3.215A8.967 8.967 0 0 0 19 10c0-2.164-.764-4.15-2.037-5.702M5.5 10c0-.913.272-1.762.738-2.471L3.023 4.314A8.965 8.965 0 0 0 1 10c0 2.164.764 4.15 2.037 5.701l3.213-3.213A4.484 4.484 0 0 1 5.5 10M10 5.5c.92 0 1.776.276 2.489.75l3.213-3.213A8.967 8.967 0 0 0 10 1a8.96 8.96 0 0 0-5.685 2.023l3.214 3.215A4.482 4.482 0 0 1 10 5.5" id="ca-icon-support_a" /></defs><use fill="currentColor" xlink:href="#ca-icon-support_a" fill-rule="evenodd" /></symbol>'});r.add(o);e.exports=o}});
//# sourceMappingURL=component---src-pages-components-layout-index-md-39fed16a051dc4375c06.js.map