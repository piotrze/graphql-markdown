"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7631],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,h=u["".concat(s,".").concat(p)]||u[p]||f[p]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6591:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"staff",title:"Staff"},s=void 0,c={unversionedId:"schema/queries/staff",id:"schema/queries/staff",isDocsHomePage:!1,title:"Staff",description:"Staff query",source:"@site/docs/schema/queries/staff.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/staff",permalink:"/graphql-markdown/schema/queries/staff",tags:[],version:"current",frontMatter:{id:"staff",title:"Staff"},sidebar:"basic",previous:{title:"SiteStatistics",permalink:"/graphql-markdown/schema/queries/site-statistics"},next:{title:"Studio",permalink:"/graphql-markdown/schema/queries/studio"}},d=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>isBirthday</code> (Boolean)",id:"isbirthday-boolean",children:[],level:4},{value:"<code>search</code> (String)",id:"search-string",children:[],level:4},{value:"<code>id_not</code> (Int)",id:"id_not-int",children:[],level:4},{value:"<code>id_in</code> (Int)",id:"id_in-int",children:[],level:4},{value:"<code>id_not_in</code> (Int)",id:"id_not_in-int",children:[],level:4},{value:"<code>sort</code> (StaffSort)",id:"sort-staffsort",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Staff",id:"staff",children:[],level:4}],level:3}],f={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Staff query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Staff(\n  id: Int\n  isBirthday: Boolean\n  search: String\n  id_not: Int\n  id_in: [Int]\n  id_not_in: [Int]\n  sort: [StaffSort]\n): Staff\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"isbirthday-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isBirthday")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"Filter by staff by if its their birthday today"),(0,i.kt)("h4",{id:"search-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"search")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Filter by search query"),(0,i.kt)("h4",{id:"id_not-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_not")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"id_in-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_in")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"id_not_in-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id_not_in")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by the staff id"),(0,i.kt)("h4",{id:"sort-staffsort"},(0,i.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/staff-sort"},(0,i.kt)("inlineCode",{parentName:"a"},"StaffSort")),")"),(0,i.kt)("p",null,"The order the results will be returned in"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"staff"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,i.kt)("inlineCode",{parentName:"a"},"Staff"))),(0,i.kt)("p",null,"Voice actors or production staff"))}u.isMDXComponent=!0}}]);