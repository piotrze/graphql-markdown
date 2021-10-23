"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3649],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=l(t),p=a,h=u["".concat(c,".").concat(p)]||u[p]||s[p]||i;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var m={};for(var c in n)hasOwnProperty.call(n,c)&&(m[c]=n[c]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8231:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],m={id:"recommendation",title:"Recommendation"},c=void 0,l={unversionedId:"schema/queries/recommendation",id:"schema/queries/recommendation",isDocsHomePage:!1,title:"Recommendation",description:"Recommendation query",source:"@site/docs/schema/queries/recommendation.mdx",sourceDirName:"schema/queries",slug:"/schema/queries/recommendation",permalink:"/graphql-markdown/schema/queries/recommendation",tags:[],version:"current",frontMatter:{id:"recommendation",title:"Recommendation"},sidebar:"schemaSidebar",previous:{title:"Page",permalink:"/graphql-markdown/schema/queries/page"},next:{title:"Review",permalink:"/graphql-markdown/schema/queries/review"}},d=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Recommendation query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"Recommendation(\n  id: Int\n  mediaId: Int\n  mediaRecommendationId: Int\n  userId: Int\n  rating: Int\n  onList: Boolean\n  rating_greater: Int\n  rating_lesser: Int\n  sort: [RecommendationSort]\n): Recommendation\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by recommendation id"),(0,i.kt)("h4",{id:"mediaid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by media id"),(0,i.kt)("h4",{id:"mediarecommendationid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaRecommendationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by media recommendation id"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by user who created the recommendation"),(0,i.kt)("h4",{id:"rating-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"rating")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by total rating of the recommendation"),(0,i.kt)("h4",{id:"onlist-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"onList")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"Filter by the media on the authenticated user's lists"),(0,i.kt)("h4",{id:"rating_greater-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"rating_greater")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by total rating of the recommendation"),(0,i.kt)("h4",{id:"rating_lesser-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"rating_lesser")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Filter by total rating of the recommendation"),(0,i.kt)("h4",{id:"sort-recommendationsort"},(0,i.kt)("inlineCode",{parentName:"h4"},"sort")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/recommendation-sort"},(0,i.kt)("inlineCode",{parentName:"a"},"[RecommendationSort]")),")"),(0,i.kt)("p",null,"The order the results will be returned in"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"recommendation"},(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/recommendation"},(0,i.kt)("inlineCode",{parentName:"a"},"Recommendation"))),(0,i.kt)("p",null,"Media recommendation"))}u.isMDXComponent=!0}}]);