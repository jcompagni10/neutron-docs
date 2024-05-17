"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[2878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||f[h]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},s="Queries",i={unversionedId:"neutron/token-generation-event/oracle/queries",id:"version-2.0/neutron/token-generation-event/oracle/queries",title:"Queries",description:"This contract accepts the following query msgs:",source:"@site/versioned_docs/version-2.0/neutron/token-generation-event/oracle/queries.md",sourceDirName:"neutron/token-generation-event/oracle",slug:"/neutron/token-generation-event/oracle/queries",permalink:"/neutron-docs/2.0/neutron/token-generation-event/oracle/queries",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/neutron-docs/2.0/neutron/token-generation-event/oracle/messages"},next:{title:"Overview",permalink:"/neutron-docs/2.0/neutron/token-generation-event/price-feed/overview"}},c={},u=[{value:"Consult",id:"consult",level:2},{value:"TWAPAtHeight",id:"twapatheight",level:2},{value:"returns",id:"returns",level:3}],l={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("p",null,"This contract accepts the following query msgs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// This structure describes the query messages available in the contract.\npub enum QueryMsg {\n    /// Calculates a new TWAP with updated precision\n    #[returns(Vec<(AssetInfo, Uint256)>)]\n    Consult {\n        /// The asset for which to compute a new TWAP value\n        token: AssetInfo,\n        /// The amount of tokens for which to compute the token price\n        amount: Uint128,\n    },\n    /// Returns token TWAP value for given asset & height.\n    #[returns(Vec<(AssetInfo, Decimal256)>)]\n    TWAPAtHeight {\n        /// The asset for which to compute a new TWAP value\n        token: AssetInfo,\n        /// The amount of tokens for which to compute the token price\n        height: Uint64,\n    },\n}\n")),(0,o.kt)("h2",{id:"consult"},"Consult"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.astroport.fi/docs/develop/smart-contracts/oracle#consult"},"original documentation")),(0,o.kt)("h2",{id:"twapatheight"},"TWAPAtHeight"),(0,o.kt)("p",null,"Returns token TWAP value for given height."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[returns(Vec<(AssetInfo, Decimal256)>)]\nTWAPAtHeight {\n/// The asset for which to compute a new TWAP value\n    token: AssetInfo,\n/// The amount of tokens for which to compute the token price\n    height: Uint64,\n}\n")),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"token"),": token for which we're getting its historical TWAP value.\n",(0,o.kt)("strong",{parentName:"p"},"height"),": height, on which we receive TWAP."),(0,o.kt)("h3",{id:"returns"},"returns"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Vec(AssetInfo, Decimal256)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.astroport.fi/docs/develop/smart-contracts/common-types#assetinfo"},"AssetInfo")),(0,o.kt)("li",{parentName:"ul"},"Decimal256: TWAP value for returned asset")))}f.isMDXComponent=!0}}]);