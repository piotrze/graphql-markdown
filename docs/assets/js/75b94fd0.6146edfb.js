"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4171],{3905:function(e,a,n){n.d(a,{Zo:function(){return m},kt:function(){return p}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),s=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(d.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),p=i,k=c["".concat(d,".").concat(p)]||c[p]||h[p]||r;return n?t.createElement(k,o(o({ref:a},m),{},{components:n})):t.createElement(k,o({ref:a},m))}));function p(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4294:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"media",title:"Media"},d=void 0,s={unversionedId:"schema/objects/media",id:"schema/objects/media",isDocsHomePage:!1,title:"Media",description:"Anime or Manga",source:"@site/docs/schema/objects/media.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media",permalink:"/graphql-markdown/schema/objects/media",tags:[],version:"current",frontMatter:{id:"media",title:"Media"},sidebar:"basic",previous:{title:"MediaTrend",permalink:"/graphql-markdown/schema/objects/media-trend"},next:{title:"MessageActivity",permalink:"/graphql-markdown/schema/objects/message-activity"}},m=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>idMal</code> (Int)",id:"idmal-int",children:[],level:4},{value:"<code>title</code> (MediaTitle)",id:"title-mediatitle",children:[],level:4},{value:"<code>type</code> (MediaType)",id:"type-mediatype",children:[],level:4},{value:"<code>format</code> (MediaFormat)",id:"format-mediaformat",children:[],level:4},{value:"<code>status</code> (MediaStatus)",id:"status-mediastatus",children:[],level:4},{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>startDate</code> (FuzzyDate)",id:"startdate-fuzzydate",children:[],level:4},{value:"<code>endDate</code> (FuzzyDate)",id:"enddate-fuzzydate",children:[],level:4},{value:"<code>season</code> (MediaSeason)",id:"season-mediaseason",children:[],level:4},{value:"<code>seasonYear</code> (Int)",id:"seasonyear-int",children:[],level:4},{value:"<code>seasonInt</code> (Int)",id:"seasonint-int",children:[],level:4},{value:"<code>episodes</code> (Int)",id:"episodes-int",children:[],level:4},{value:"<code>duration</code> (Int)",id:"duration-int",children:[],level:4},{value:"<code>chapters</code> (Int)",id:"chapters-int",children:[],level:4},{value:"<code>volumes</code> (Int)",id:"volumes-int",children:[],level:4},{value:"<code>countryOfOrigin</code> (CountryCode)",id:"countryoforigin-countrycode",children:[],level:4},{value:"<code>isLicensed</code> (Boolean)",id:"islicensed-boolean",children:[],level:4},{value:"<code>source</code> (MediaSource)",id:"source-mediasource",children:[],level:4},{value:"<code>hashtag</code> (String)",id:"hashtag-string",children:[],level:4},{value:"<code>trailer</code> (MediaTrailer)",id:"trailer-mediatrailer",children:[],level:4},{value:"<code>updatedAt</code> (Int)",id:"updatedat-int",children:[],level:4},{value:"<code>coverImage</code> (MediaCoverImage)",id:"coverimage-mediacoverimage",children:[],level:4},{value:"<code>bannerImage</code> (String)",id:"bannerimage-string",children:[],level:4},{value:"<code>genres</code> (String)",id:"genres-string",children:[],level:4},{value:"<code>synonyms</code> (String)",id:"synonyms-string",children:[],level:4},{value:"<code>averageScore</code> (Int)",id:"averagescore-int",children:[],level:4},{value:"<code>meanScore</code> (Int)",id:"meanscore-int",children:[],level:4},{value:"<code>popularity</code> (Int)",id:"popularity-int",children:[],level:4},{value:"<code>isLocked</code> (Boolean)",id:"islocked-boolean",children:[],level:4},{value:"<code>trending</code> (Int)",id:"trending-int",children:[],level:4},{value:"<code>favourites</code> (Int)",id:"favourites-int",children:[],level:4},{value:"<code>tags</code> (MediaTag)",id:"tags-mediatag",children:[],level:4},{value:"<code>relations</code> (MediaConnection)",id:"relations-mediaconnection",children:[],level:4},{value:"<code>characters</code> (CharacterConnection)",id:"characters-characterconnection",children:[],level:4},{value:"<code>staff</code> (StaffConnection)",id:"staff-staffconnection",children:[],level:4},{value:"<code>studios</code> (StudioConnection)",id:"studios-studioconnection",children:[],level:4},{value:"<code>isFavourite</code> (Boolean)",id:"isfavourite-boolean",children:[],level:4},{value:"<code>isAdult</code> (Boolean)",id:"isadult-boolean",children:[],level:4},{value:"<code>nextAiringEpisode</code> (AiringSchedule)",id:"nextairingepisode-airingschedule",children:[],level:4},{value:"<code>airingSchedule</code> (AiringScheduleConnection)",id:"airingschedule-airingscheduleconnection",children:[],level:4},{value:"<code>trends</code> (MediaTrendConnection)",id:"trends-mediatrendconnection",children:[],level:4},{value:"<code>externalLinks</code> (MediaExternalLink)",id:"externallinks-mediaexternallink",children:[],level:4},{value:"<code>streamingEpisodes</code> (MediaStreamingEpisode)",id:"streamingepisodes-mediastreamingepisode",children:[],level:4},{value:"<code>rankings</code> (MediaRank)",id:"rankings-mediarank",children:[],level:4},{value:"<code>mediaListEntry</code> (MediaList)",id:"medialistentry-medialist",children:[],level:4},{value:"<code>reviews</code> (ReviewConnection)",id:"reviews-reviewconnection",children:[],level:4},{value:"<code>recommendations</code> (RecommendationConnection)",id:"recommendations-recommendationconnection",children:[],level:4},{value:"<code>stats</code> (MediaStats)",id:"stats-mediastats",children:[],level:4},{value:"<code>siteUrl</code> (String)",id:"siteurl-string",children:[],level:4},{value:"<code>autoCreateForumThread</code> (Boolean)",id:"autocreateforumthread-boolean",children:[],level:4},{value:"<code>isRecommendationBlocked</code> (Boolean)",id:"isrecommendationblocked-boolean",children:[],level:4},{value:"<code>modNotes</code> (String)",id:"modnotes-string",children:[],level:4}],level:3}],h={toc:m};function c(e){var a=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Anime or Manga"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Media {\n  id: Int!\n  idMal: Int\n  title: MediaTitle\n  type: MediaType\n  format: MediaFormat\n  status(version: Int): MediaStatus\n  description(asHtml: Boolean): String\n  startDate: FuzzyDate\n  endDate: FuzzyDate\n  season: MediaSeason\n  seasonYear: Int\n  seasonInt: Int\n  episodes: Int\n  duration: Int\n  chapters: Int\n  volumes: Int\n  countryOfOrigin: CountryCode\n  isLicensed: Boolean\n  source(version: Int): MediaSource\n  hashtag: String\n  trailer: MediaTrailer\n  updatedAt: Int\n  coverImage: MediaCoverImage\n  bannerImage: String\n  genres: [String]\n  synonyms: [String]\n  averageScore: Int\n  meanScore: Int\n  popularity: Int\n  isLocked: Boolean\n  trending: Int\n  favourites: Int\n  tags: [MediaTag]\n  relations: MediaConnection\n  characters(\n    sort: [CharacterSort]\n    role: CharacterRole\n    page: Int\n    perPage: Int\n  ): CharacterConnection\n  staff(sort: [StaffSort], page: Int, perPage: Int): StaffConnection\n  studios(sort: [StudioSort], isMain: Boolean): StudioConnection\n  isFavourite: Boolean!\n  isAdult: Boolean\n  nextAiringEpisode: AiringSchedule\n  airingSchedule(\n    notYetAired: Boolean\n    page: Int\n    perPage: Int\n  ): AiringScheduleConnection\n  trends(\n    sort: [MediaTrendSort]\n    releasing: Boolean\n    page: Int\n    perPage: Int\n  ): MediaTrendConnection\n  externalLinks: [MediaExternalLink]\n  streamingEpisodes: [MediaStreamingEpisode]\n  rankings: [MediaRank]\n  mediaListEntry: MediaList\n  reviews(\n    limit: Int\n    sort: [ReviewSort]\n    page: Int\n    perPage: Int\n  ): ReviewConnection\n  recommendations(\n    sort: [RecommendationSort]\n    page: Int\n    perPage: Int\n  ): RecommendationConnection\n  stats: MediaStats\n  siteUrl: String\n  autoCreateForumThread: Boolean\n  isRecommendationBlocked: Boolean\n  modNotes: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the media"),(0,r.kt)("h4",{id:"idmal-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"idMal")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The mal id of the media"),(0,r.kt)("h4",{id:"title-mediatitle"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-title"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTitle")),")"),(0,r.kt)("p",null,"The official titles of the media in various languages"),(0,r.kt)("h4",{id:"type-mediatype"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaType")),")"),(0,r.kt)("p",null,"The type of the media; anime or manga"),(0,r.kt)("h4",{id:"format-mediaformat"},(0,r.kt)("inlineCode",{parentName:"h4"},"format")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-format"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaFormat")),")"),(0,r.kt)("p",null,"The format the media was released in"),(0,r.kt)("h4",{id:"status-mediastatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-status"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaStatus")),")"),(0,r.kt)("p",null,"The current releasing status of the media"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"version-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"version")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"Provide 2 to use new version 2 of sources enum"),(0,r.kt)("h4",{id:"description-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Short description of the media's story and characters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,r.kt)("h4",{id:"startdate-fuzzydate"},(0,r.kt)("inlineCode",{parentName:"h4"},"startDate")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,r.kt)("p",null,"The first official release date of the media"),(0,r.kt)("h4",{id:"enddate-fuzzydate"},(0,r.kt)("inlineCode",{parentName:"h4"},"endDate")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/fuzzy-date"},(0,r.kt)("inlineCode",{parentName:"a"},"FuzzyDate")),")"),(0,r.kt)("p",null,"The last official release date of the media"),(0,r.kt)("h4",{id:"season-mediaseason"},(0,r.kt)("inlineCode",{parentName:"h4"},"season")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-season"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSeason")),")"),(0,r.kt)("p",null,"The season the media was initially released in"),(0,r.kt)("h4",{id:"seasonyear-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"seasonYear")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The season year the media was initially released in"),(0,r.kt)("h4",{id:"seasonint-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"seasonInt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("span",{class:"badge badge--warning"},"DEPRECATED"),(0,r.kt)("p",null,"The year & season the media was initially released in"),(0,r.kt)("h4",{id:"episodes-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"episodes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of episodes the anime has when complete"),(0,r.kt)("h4",{id:"duration-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"duration")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The general length of each anime episode in minutes"),(0,r.kt)("h4",{id:"chapters-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"chapters")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of chapters the manga has when complete"),(0,r.kt)("h4",{id:"volumes-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"volumes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of volumes the manga has when complete"),(0,r.kt)("h4",{id:"countryoforigin-countrycode"},(0,r.kt)("inlineCode",{parentName:"h4"},"countryOfOrigin")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/country-code"},(0,r.kt)("inlineCode",{parentName:"a"},"CountryCode")),")"),(0,r.kt)("p",null,"Where the media was created. (ISO 3166-1 alpha-2)"),(0,r.kt)("h4",{id:"islicensed-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isLicensed")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the media is officially licensed or a self-published doujin release"),(0,r.kt)("h4",{id:"source-mediasource"},(0,r.kt)("inlineCode",{parentName:"h4"},"source")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/media-source"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaSource")),")"),(0,r.kt)("p",null,"Source type the media was adapted from."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"version-int-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"version")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"Provide 2 or 3 to use new version 2 or 3 of sources enum"),(0,r.kt)("h4",{id:"hashtag-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"hashtag")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Official Twitter hashtags for the media"),(0,r.kt)("h4",{id:"trailer-mediatrailer"},(0,r.kt)("inlineCode",{parentName:"h4"},"trailer")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-trailer"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrailer")),")"),(0,r.kt)("p",null,"Media trailer or advertisement"),(0,r.kt)("h4",{id:"updatedat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"When the media's data was last updated"),(0,r.kt)("h4",{id:"coverimage-mediacoverimage"},(0,r.kt)("inlineCode",{parentName:"h4"},"coverImage")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-cover-image"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaCoverImage")),")"),(0,r.kt)("p",null,"The cover images of the media"),(0,r.kt)("h4",{id:"bannerimage-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"bannerImage")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The banner image of the media"),(0,r.kt)("h4",{id:"genres-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"genres")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The genres of the media"),(0,r.kt)("h4",{id:"synonyms-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"synonyms")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Alternative titles of the media"),(0,r.kt)("h4",{id:"averagescore-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"averageScore")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"A weighted average score of all the user's scores of the media"),(0,r.kt)("h4",{id:"meanscore-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"meanScore")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"Mean score of all the user's scores of the media"),(0,r.kt)("h4",{id:"popularity-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"popularity")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The number of users with the media on their list"),(0,r.kt)("h4",{id:"islocked-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isLocked")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"Locked media may not be added to lists our favorited. This may be due to the entry pending for deletion or other reasons."),(0,r.kt)("h4",{id:"trending-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"trending")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of related activity in the past hour"),(0,r.kt)("h4",{id:"favourites-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"favourites")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The amount of user's who have favourited the media"),(0,r.kt)("h4",{id:"tags-mediatag"},(0,r.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-tag"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTag")),")"),(0,r.kt)("p",null,"List of tags that describes elements and themes of the media"),(0,r.kt)("h4",{id:"relations-mediaconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"relations")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaConnection")),")"),(0,r.kt)("p",null,"Other media in the same or connecting franchise"),(0,r.kt)("h4",{id:"characters-characterconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"characters")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/character-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterConnection")),")"),(0,r.kt)("p",null,"The characters in the media"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-charactersort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/character-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"role-characterrole"},(0,r.kt)("inlineCode",{parentName:"h5"},"role")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/character-role"},(0,r.kt)("inlineCode",{parentName:"a"},"CharacterRole")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"staff-staffconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"staff")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/staff-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffConnection")),")"),(0,r.kt)("p",null,"The staff who produced the media"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-staffsort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/staff-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-1"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"studios-studioconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"studios")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/studio-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"StudioConnection")),")"),(0,r.kt)("p",null,"The companies who produced the media"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-studiosort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/studio-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"StudioSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"ismain-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"isMain")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("h4",{id:"isfavourite-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isFavourite")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the media is marked as favourite by the current authenticated user"),(0,r.kt)("h4",{id:"isadult-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isAdult")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the media is intended only for 18+ adult audiences"),(0,r.kt)("h4",{id:"nextairingepisode-airingschedule"},(0,r.kt)("inlineCode",{parentName:"h4"},"nextAiringEpisode")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/airing-schedule"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringSchedule")),")"),(0,r.kt)("p",null,"The media's next episode airing schedule"),(0,r.kt)("h4",{id:"airingschedule-airingscheduleconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"airingSchedule")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/airing-schedule-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"AiringScheduleConnection")),")"),(0,r.kt)("p",null,"The media's entire airing schedule"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"notyetaired-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"notYetAired")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("p",null,"Filter to episodes that have not yet aired"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-2"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-2"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"trends-mediatrendconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"trends")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-trend-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrendConnection")),")"),(0,r.kt)("p",null,"The media's daily trend stats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-mediatrendsort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/media-trend-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaTrendSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"releasing-boolean"},(0,r.kt)("inlineCode",{parentName:"h5"},"releasing")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,r.kt)("p",null,"Filter to stats recorded while the media was releasing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-3"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-3"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"externallinks-mediaexternallink"},(0,r.kt)("inlineCode",{parentName:"h4"},"externalLinks")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-external-link"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaExternalLink")),")"),(0,r.kt)("p",null,"External links to another site related to the media"),(0,r.kt)("h4",{id:"streamingepisodes-mediastreamingepisode"},(0,r.kt)("inlineCode",{parentName:"h4"},"streamingEpisodes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-streaming-episode"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaStreamingEpisode")),")"),(0,r.kt)("p",null,"Data and links to legal streaming episodes on external sites"),(0,r.kt)("h4",{id:"rankings-mediarank"},(0,r.kt)("inlineCode",{parentName:"h4"},"rankings")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-rank"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaRank")),")"),(0,r.kt)("p",null,"The ranking of the media in a particular time span and format compared to other media"),(0,r.kt)("h4",{id:"medialistentry-medialist"},(0,r.kt)("inlineCode",{parentName:"h4"},"mediaListEntry")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-list"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaList")),")"),(0,r.kt)("p",null,"The authenticated user's media list entry for the media"),(0,r.kt)("h4",{id:"reviews-reviewconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"reviews")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/review-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"ReviewConnection")),")"),(0,r.kt)("p",null,"User reviews of the media"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int"},(0,r.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-reviewsort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/review-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"ReviewSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-4"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-4"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"recommendations-recommendationconnection"},(0,r.kt)("inlineCode",{parentName:"h4"},"recommendations")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/recommendation-connection"},(0,r.kt)("inlineCode",{parentName:"a"},"RecommendationConnection")),")"),(0,r.kt)("p",null,"User recommendations for similar media"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"sort-recommendationsort"},(0,r.kt)("inlineCode",{parentName:"h5"},"sort")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/enums/recommendation-sort"},(0,r.kt)("inlineCode",{parentName:"a"},"RecommendationSort")),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"page-int-5"},(0,r.kt)("inlineCode",{parentName:"h5"},"page")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"perpage-int-5"},(0,r.kt)("inlineCode",{parentName:"h5"},"perPage")," (",(0,r.kt)("a",{parentName:"h5",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"The amount of entries per page, max 25"),(0,r.kt)("h4",{id:"stats-mediastats"},(0,r.kt)("inlineCode",{parentName:"h4"},"stats")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/media-stats"},(0,r.kt)("inlineCode",{parentName:"a"},"MediaStats")),")"),(0,r.kt)("h4",{id:"siteurl-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The url for the media page on the AniList website"),(0,r.kt)("h4",{id:"autocreateforumthread-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"autoCreateForumThread")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the media should have forum thread automatically created for it on airing episode release"),(0,r.kt)("h4",{id:"isrecommendationblocked-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"isRecommendationBlocked")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("p",null,"If the media is blocked from being recommended to/from"),(0,r.kt)("h4",{id:"modnotes-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"modNotes")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"Notes for site moderators"))}c.isMDXComponent=!0}}]);