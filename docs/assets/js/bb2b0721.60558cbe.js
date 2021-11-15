"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[1785],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2522:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"delete-media-list-entry",title:"DeleteMediaListEntry"},c=void 0,u={unversionedId:"schema/mutations/delete-media-list-entry",id:"schema/mutations/delete-media-list-entry",isDocsHomePage:!1,title:"DeleteMediaListEntry",description:"Delete a media list entry",source:"@site/docs/schema/mutations/delete-media-list-entry.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/delete-media-list-entry",permalink:"/graphql-markdown/schema/mutations/delete-media-list-entry",tags:[],version:"current",frontMatter:{id:"delete-media-list-entry",title:"DeleteMediaListEntry"},sidebar:"basic",previous:{title:"DeleteCustomList",permalink:"/graphql-markdown/schema/mutations/delete-custom-list"},next:{title:"DeleteReview",permalink:"/graphql-markdown/schema/mutations/delete-review"}},s=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Deleted",id:"deleted",children:[],level:4}],level:3}],d={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete a media list entry"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"DeleteMediaListEntry(\n  id: Int\n): Deleted\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the media list entry to delete"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deleted"},(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/deleted"},(0,a.kt)("inlineCode",{parentName:"a"},"Deleted"))),(0,a.kt)("p",null,"Deleted data type"))}m.isMDXComponent=!0}}]);