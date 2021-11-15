"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4527],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=i,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2577:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"studio",title:"Studio"},s=void 0,d={unversionedId:"schema/objects/studio",id:"schema/objects/studio",isDocsHomePage:!1,title:"Studio",description:"Animation or production company",source:"@site/docs/schema/objects/studio.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/studio",permalink:"/graphql-markdown/schema/objects/studio",tags:[],version:"current",frontMatter:{id:"studio",title:"Studio"},sidebar:"basic",previous:{title:"StudioStats",permalink:"/graphql-markdown/schema/objects/studio-stats"},next:{title:"TagStats",permalink:"/graphql-markdown/schema/objects/tag-stats"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>isAnimationStudio</code> (Boolean)",id:"isanimationstudio-boolean",children:[],level:4},{value:"<code>media</code> (MediaConnection)",id:"media-mediaconnection",children:[],level:4},{value:"<code>siteUrl</code> (String)",id:"siteurl-string",children:[],level:4},{value:"<code>isFavourite</code> (Boolean)",id:"isfavourite-boolean",children:[],level:4},{value:"<code>favourites</code> (Int)",id:"favourites-int",children:[],level:4}],level:3}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Animation or production company"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Studio {\n  id: Int!\n  name: String!\n  isAnimationStudio: Boolean!\n  media(\n    sort: [MediaSort]\n    isMain: Boolean\n    onList: Boolean\n    page: Int\n    perPage: Int\n  ): MediaConnection\n  siteUrl: String\n  isFavourite: Boolean!\n  favourites: Int\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the studio"),(0,r.kt)("h4",{id:"name-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The name of the studio"),(0,r.kt)("h4",{id:"isanimationstudio-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isAnimationStudio")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the studio is an animation studio or a different kind of company"),(0,r.kt)("h4",{id:"media-mediaconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaConnection")),")"),(0,r.kt)("p",null,"The media the studio has worked on"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-mediasort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/media-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSort")),")"))),(0,r.kt)("p",null,"The order the results will be returned in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"ismain-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"isMain")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("p",null,"If the studio was the primary animation studio of the media"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"onlist-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"onList")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"siteurl-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The url for the studio page on the AniList website"),(0,r.kt)("h4",{id:"isfavourite-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFavourite")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the studio is marked as favourite by the currently authenticated user"),(0,r.kt)("h4",{id:"favourites-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"favourites")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of user's who have favourited the studio"))}m.isMDXComponent=!0}}]);