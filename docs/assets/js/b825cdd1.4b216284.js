"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[305],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3556:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"site-trend-connection",title:"SiteTrendConnection"},s=void 0,d={unversionedId:"schema/objects/site-trend-connection",id:"schema/objects/site-trend-connection",isDocsHomePage:!1,title:"SiteTrendConnection",description:"No description",source:"@site/docs/schema/objects/site-trend-connection.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/site-trend-connection",permalink:"/graphql-markdown/schema/objects/site-trend-connection",tags:[],version:"current",frontMatter:{id:"site-trend-connection",title:"SiteTrendConnection"},sidebar:"basic",previous:{title:"SiteStatistics",permalink:"/graphql-markdown/schema/objects/site-statistics"},next:{title:"SiteTrendEdge",permalink:"/graphql-markdown/schema/objects/site-trend-edge"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>edges</code> (SiteTrendEdge)",id:"edges-sitetrendedge",children:[],level:4},{value:"<code>nodes</code> (SiteTrend)",id:"nodes-sitetrend",children:[],level:4},{value:"<code>pageInfo</code> (PageInfo)",id:"pageinfo-pageinfo",children:[],level:4}],level:3}],p={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SiteTrendConnection {\n  edges: [SiteTrendEdge]\n  nodes: [SiteTrend]\n  pageInfo: PageInfo\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"edges-sitetrendedge"},(0,i.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"SiteTrendEdge")),")"),(0,i.kt)("h4",{id:"nodes-sitetrend"},(0,i.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/site-trend"},(0,i.kt)("inlineCode",{parentName:"a"},"SiteTrend")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,i.kt)("p",null,"The pagination information"))}u.isMDXComponent=!0}}]);