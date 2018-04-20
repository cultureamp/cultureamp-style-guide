webpackJsonp([45010457455038],{143:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}t.__esModule=!0;var n=a(3),i=s(n),r=a(335),o=l(r),d=a(6),u=l(d),h={h1:"page-title",h2:"title",h3:"display",h4:"heading",h5:"heading",h6:"heading",p:"body",div:"body"},c=function(e){var t,a=e.tag,l=e.style||h[a];return i.createElement(a,{className:(0,u.default)(o.default[l],(t={},t[o.default.inheritBaseline]=e.inheritBaseline,t[o.default.paragraph]="p"===a,t))},e.children)};t.default=c,e.exports=t.default},335:function(e,t){e.exports={"page-title":"Text-module__page-title--RhFdC",title:"Text-module__title--9Vx0C",display:"Text-module__display--1pabq",heading:"Text-module__heading--1Hk83",lede:"Text-module__lede--3nfih",body:"Text-module__body--3tDkL","body-bold":"Text-module__body-bold--3P5xe",small:"Text-module__small--L3eC7","small-bold":"Text-module__small-bold--1UBiO",notification:"Text-module__notification--3TkN6",label:"Text-module__label--1UAxm","control-action":"Text-module__control-action--3GBvF",button:"Text-module__button--2qfbB",paragraph:"Text-module__paragraph--3MHSk",inheritBaseline:"Text-module__inheritBaseline--12xfF"}},198:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(143),n=l(s);t.default=n.default,e.exports=t.default},219:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(198),n=(l(s),a(3)),i=(l(n),[{name:"H1",props:{tag:"h1",children:"This is a Page Title (H1)"}},{name:"H1 (inherit baseline)",props:{tag:"h1",inheritBaseline:!0,children:"This is a Page Title that inherits the baseline"}},{name:"H2",props:{tag:"h2",children:"This is a Title (H2)"}},{name:"H3",props:{tag:"h3",children:"This is a Display Heading (H3)"}},{name:"H4",props:{tag:"h4",children:"This is a Heading (H4)"}},{name:"H5",props:{tag:"h5",children:"This is a H5, which uses Heading styles"}},{name:"H6",props:{tag:"h6",children:"This is a H6, which uses Heading styles"}},{name:"Paragraph",props:{tag:"p",children:"Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”"}},{name:"Lede Paragraph",props:{tag:"p",style:"lede",children:"Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”"}},{name:"Div",props:{tag:"div",children:"Dr. Brené Brown, author of Daring Greatly, is a research professor from the University of Houston who studies human emotions, including shame and vulnerability. In a March 2012 TED talk, she said, “Vulnerability is not weakness, and that myth is profoundly dangerous.” She went on to say that after 12 years of research, she has actually determined that vulnerability is “our most accurate measurement of courage.”"}},{name:"Div with Page Title styles",props:{tag:"div",style:"page-title",children:'Div with "Page Title" styles'}},{name:"Body-bold",props:{tag:"div",style:"body-bold",children:'Div with "Body Bold" styles'}},{name:"Small",props:{tag:"div",style:"small",children:'Div with "Small" styles'}},{name:"Small-bold",props:{tag:"div",style:"small-bold",children:'Div with "Small Bold" styles'}},{name:"Notification",props:{tag:"div",style:"notification",children:'Div with "Notification" styles'}},{name:"Label",props:{tag:"div",style:"label",children:'Div with "Label" styles'}},{name:"Control-action",props:{tag:"div",style:"control-action",children:'Div with "Control Action" styles'}},{name:"Button",props:{tag:"div",style:"button",children:'Div with "Button" styles'}}]);t.default=i,e.exports=t.default},237:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.className,a=e.style,l=e.elementProps;return d.default.createElement("div",{className:t,style:a},d.default.createElement("h1",n({id:"text"},l.h1),"Text"),d.default.createElement(p.default,l.IntroParagraph,d.default.createElement("p",l.p,"A generic text component which sets the default styles for the semantic element you choose."),d.default.createElement("p",l.p,"You can override the styles with the ",d.default.createElement("code",l.code,"style")," property."),d.default.createElement("p",l.p,"Headers and paragraphs will include default margins."),d.default.createElement("p",l.p,"You can cancel the baseline alignment by using ",d.default.createElement("code",l.code,"inheritBaseline={true}"))),d.default.createElement(m.default,n({component:g.default,presets:_.default},l.Demo)))}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i=a(8),r=l(i),o=a(3),d=l(o),u=a(4),h=l(u),c=a(38),m=l(c),f=a(17),p=l(f),y=a(143),g=l(y),b=a(219),_=l(b);s.propTypes={className:h.default.string,style:h.default.object,elementProps:h.default.object},s.defaultProps={elementProps:{}};var v=function(){return d.default.createElement("div",{className:r.default.contentContainer},d.default.createElement(s,{elementProps:{h1:{className:r.default.h1},h2:{className:r.default.h2},h3:{className:r.default.h3},h4:{className:r.default.h4},h5:{className:r.default.h5},h6:{className:r.default.h6},p:{className:r.default.p},table:{className:r.default.table},ul:{className:r.default.ul},ol:{className:r.default.ol},li:{className:r.default.li},blockquote:{className:r.default.blockquote},hr:{className:r.default.hr},img:{className:r.default.img},a:{className:r.default.link}}}))};t.default=v}});
//# sourceMappingURL=component---src-pages-components-text-index-md-5910de9498ca19558812.js.map