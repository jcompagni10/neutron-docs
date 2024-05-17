"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[7023],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i="Queries",s={unversionedId:"neutron/token-generation-event/airdrop/queries",id:"version-2.0/neutron/token-generation-event/airdrop/queries",title:"Queries",description:"config",source:"@site/versioned_docs/version-2.0/neutron/token-generation-event/airdrop/queries.md",sourceDirName:"neutron/token-generation-event/airdrop",slug:"/neutron/token-generation-event/airdrop/queries",permalink:"/neutron-docs/2.0/neutron/token-generation-event/airdrop/queries",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/neutron-docs/2.0/neutron/token-generation-event/airdrop/messages"},next:{title:"Overview",permalink:"/neutron-docs/2.0/neutron/token-generation-event/auction/overview"}},l={},c=[{value:"<code>config</code>",id:"config",level:2},{value:"<code>merkle_root</code>",id:"merkle_root",level:2},{value:"<code>is_claimed</code>",id:"is_claimed",level:2},{value:"<code>total_claimed</code>",id:"total_claimed",level:2},{value:"<code>is_paused</code>",id:"is_paused",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum QueryMsg {\n    #[returns(ConfigResponse)]\n    Config {},\n    #[returns(MerkleRootResponse)]\n    MerkleRoot {},\n    #[returns(IsClaimedResponse)]\n    IsClaimed { address: String },\n    #[returns(TotalClaimedResponse)]\n    TotalClaimed {},\n    // for cross chain airdrops, maps target account to host account\n    #[returns(AccountMapResponse)]\n    AccountMap { external_address: String },\n    #[returns(AccountMapResponse)]\n    AllAccountMaps {\n        start_after: Option<String>,\n        limit: Option<u32>,\n    },\n    #[returns(IsPausedResponse)]\n    IsPaused {},\n}\n")),(0,o.kt)("h2",{id:"config"},(0,o.kt)("inlineCode",{parentName:"h2"},"config")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {}\n}\n')),(0,o.kt)("p",null,"Returns info about contract's configuration"),(0,o.kt)("h2",{id:"merkle_root"},(0,o.kt)("inlineCode",{parentName:"h2"},"merkle_root")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "merkle_root": {}\n}\n')),(0,o.kt)("p",null,"Returns merkle root of the Airdrop contract."),(0,o.kt)("h2",{id:"is_claimed"},(0,o.kt)("inlineCode",{parentName:"h2"},"is_claimed")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_claimed": {\n    "address": "neutron..."\n  }\n}\n')),(0,o.kt)("p",null,"Returns true if a given address already claimed the airdrop."),(0,o.kt)("h2",{id:"total_claimed"},(0,o.kt)("inlineCode",{parentName:"h2"},"total_claimed")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "total_claimed": {}\n}\n')),(0,o.kt)("p",null,"Returns total amount of already claimed tokens by users."),(0,o.kt)("h2",{id:"is_paused"},(0,o.kt)("inlineCode",{parentName:"h2"},"is_paused")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "is_paused": {}\n}\n')),(0,o.kt)("p",null,"Returns true of the contract is on pause."))}d.isMDXComponent=!0}}]);