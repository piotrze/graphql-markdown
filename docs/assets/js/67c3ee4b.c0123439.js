"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6510],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,d=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return r?n.createElement(d,c(c({ref:t},m),{},{components:r})):n.createElement(d,c({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9474:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=["components"],o={id:"character-name",title:"CharacterName"},l=void 0,s={unversionedId:"schema/objects/character-name",id:"schema/objects/character-name",isDocsHomePage:!1,title:"CharacterName",description:"The names of the character",source:"@site/docs/schema/objects/character-name.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/character-name",permalink:"/graphql-markdown/schema/objects/character-name",tags:[],version:"current",frontMatter:{id:"character-name",title:"CharacterName"},sidebar:"schemaSidebar",previous:{title:"CharacterImage",permalink:"/graphql-markdown/schema/objects/character-image"},next:{title:"CharacterSubmissionConnection",permalink:"/graphql-markdown/schema/objects/character-submission-connection"}},m=[{value:"Fields",id:"fields",children:[]}],h={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The names of the character"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CharacterName {\n  first: String\n  middle: String\n  last: String\n  full: String\n  native: String\n  alternative: [String]\n  alternativeSpoiler: [String]\n  userPreferred: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"first-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's given name"),(0,i.kt)("h4",{id:"middle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"middle")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's middle name"),(0,i.kt)("h4",{id:"last-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"last")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's surname"),(0,i.kt)("h4",{id:"full-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"full")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's first and last name"),(0,i.kt)("h4",{id:"native-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"native")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The character's full name in their native language"),(0,i.kt)("h4",{id:"alternative-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alternative")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,i.kt)("p",null,"Other names the character might be referred to as"),(0,i.kt)("h4",{id:"alternativespoiler-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alternativeSpoiler")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,i.kt)("p",null,"Other names the character might be referred to as but are spoilers"),(0,i.kt)("h4",{id:"userpreferred-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"userPreferred")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The currently authenticated users preferred name language. Default romaji for non-authenticated"))}p.isMDXComponent=!0}}]);