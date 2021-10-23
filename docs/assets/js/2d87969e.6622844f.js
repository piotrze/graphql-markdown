"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[6721],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return s}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),m=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(t),s=a,A=p["".concat(d,".").concat(s)]||p[s]||c[s]||o;return t?r.createElement(A,i(i({ref:n},u),{},{components:t})):r.createElement(A,i({ref:n},u))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5722:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"mod-role",title:"ModRole"},d=void 0,m={unversionedId:"schema/enums/mod-role",id:"schema/enums/mod-role",isDocsHomePage:!1,title:"ModRole",description:"Mod role enums",source:"@site/docs/schema/enums/mod-role.mdx",sourceDirName:"schema/enums",slug:"/schema/enums/mod-role",permalink:"/graphql-markdown/schema/enums/mod-role",tags:[],version:"current",frontMatter:{id:"mod-role",title:"ModRole"},sidebar:"schemaSidebar",previous:{title:"ModActionType",permalink:"/graphql-markdown/schema/enums/mod-action-type"},next:{title:"NotificationType",permalink:"/graphql-markdown/schema/enums/notification-type"}},u=[{value:"Values",id:"values",children:[]}],c={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Mod role enums"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ModRole {\n  ADMIN\n  LEAD_DEVELOPER\n  DEVELOPER\n  LEAD_COMMUNITY\n  COMMUNITY\n  DISCORD_COMMUNITY\n  LEAD_ANIME_DATA\n  ANIME_DATA\n  LEAD_MANGA_DATA\n  MANGA_DATA\n  LEAD_SOCIAL_MEDIA\n  SOCIAL_MEDIA\n  RETIRED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"admin"},(0,o.kt)("inlineCode",{parentName:"h4"},"ADMIN")),(0,o.kt)("p",null,"An AniList administrator"),(0,o.kt)("h4",{id:"lead_developer"},(0,o.kt)("inlineCode",{parentName:"h4"},"LEAD_DEVELOPER")),(0,o.kt)("p",null,"A head developer of AniList"),(0,o.kt)("h4",{id:"developer"},(0,o.kt)("inlineCode",{parentName:"h4"},"DEVELOPER")),(0,o.kt)("p",null,"An AniList developer"),(0,o.kt)("h4",{id:"lead_community"},(0,o.kt)("inlineCode",{parentName:"h4"},"LEAD_COMMUNITY")),(0,o.kt)("p",null,"A lead community moderator"),(0,o.kt)("h4",{id:"community"},(0,o.kt)("inlineCode",{parentName:"h4"},"COMMUNITY")),(0,o.kt)("p",null,"A community moderator"),(0,o.kt)("h4",{id:"discord_community"},(0,o.kt)("inlineCode",{parentName:"h4"},"DISCORD_COMMUNITY")),(0,o.kt)("p",null,"A discord community moderator"),(0,o.kt)("h4",{id:"lead_anime_data"},(0,o.kt)("inlineCode",{parentName:"h4"},"LEAD_ANIME_DATA")),(0,o.kt)("p",null,"A lead anime data moderator"),(0,o.kt)("h4",{id:"anime_data"},(0,o.kt)("inlineCode",{parentName:"h4"},"ANIME_DATA")),(0,o.kt)("p",null,"An anime data moderator"),(0,o.kt)("h4",{id:"lead_manga_data"},(0,o.kt)("inlineCode",{parentName:"h4"},"LEAD_MANGA_DATA")),(0,o.kt)("p",null,"A lead manga data moderator"),(0,o.kt)("h4",{id:"manga_data"},(0,o.kt)("inlineCode",{parentName:"h4"},"MANGA_DATA")),(0,o.kt)("p",null,"A manga data moderator"),(0,o.kt)("h4",{id:"lead_social_media"},(0,o.kt)("inlineCode",{parentName:"h4"},"LEAD_SOCIAL_MEDIA")),(0,o.kt)("p",null,"A lead social media moderator"),(0,o.kt)("h4",{id:"social_media"},(0,o.kt)("inlineCode",{parentName:"h4"},"SOCIAL_MEDIA")),(0,o.kt)("p",null,"A social media moderator"),(0,o.kt)("h4",{id:"retired"},(0,o.kt)("inlineCode",{parentName:"h4"},"RETIRED")),(0,o.kt)("p",null,"A retired moderator"))}p.isMDXComponent=!0}}]);