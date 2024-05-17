"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[2397],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},s="Queries",a={unversionedId:"neutron/tokenomics/reserve/queries",id:"version-1.0/neutron/tokenomics/reserve/queries",title:"Queries",description:"Config",source:"@site/versioned_docs/version-1.0/neutron/tokenomics/reserve/queries.md",sourceDirName:"neutron/tokenomics/reserve",slug:"/neutron/tokenomics/reserve/queries",permalink:"/neutron-docs/1.0/neutron/tokenomics/reserve/queries",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/neutron-docs/1.0/neutron/tokenomics/reserve/messages"},next:{title:"Overview",permalink:"/neutron-docs/1.0/neutron/tokenomics/distribution/overview"}},u={},c=[{value:"Config",id:"config",level:2},{value:"Stats",id:"stats",level:2},{value:"PauseInfo",id:"pauseinfo",level:2}],l={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[pausable_query]\npub enum QueryMsg {\n    /// The contract's configurations; returns [`Config`]\n    Config {},\n\n    /// The contract's current stats; returns [`StatsResponse`]\n    Stats {},\n}\n")),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"Returns current reserve contract configuration. Returns an object with following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Config {\n    /// Distribution rate (0-1) which goes to distribution contract\n    pub distribution_rate: Decimal,\n\n    /// Address of distribution contract, which will receive funds defined but distribution_rate %\n    pub distribution_contract: Addr,\n\n    /// Address of treasury contract, which will receive funds defined by 100-distribution_rate %\n    pub treasury_contract: Addr,\n\n    /// Minimum period between distribution calls\n    pub min_period: u64,\n\n    /// Denom of the main coin\n    pub denom: String,\n\n    /// Address of the Neutron DAO contract\n    pub main_dao_address: Addr,\n\n    /// Address of the security DAO contract\n    pub security_dao_address: Addr,\n\n    // Denominator used in the vesting release function\n    pub vesting_denominator: u128,\n}\n")),(0,o.kt)("h2",{id:"stats"},"Stats"),(0,o.kt)("p",null,"Returns contract coins distribution stats. Returns an object with following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct StatsResponse {\n    /// Amount of coins distributed since contract instantiation\n    pub total_distributed: Uint128,\n\n    /// Amount of coins reserved since contract instantiation\n    pub total_reserved: Uint128,\n\n    /// Total amount of burned coins processed by reserve contract\n    pub total_processed_burned_coins: Uint128,\n}\n")),(0,o.kt)("h2",{id:"pauseinfo"},"PauseInfo"),(0,o.kt)("p",null,"Returns pause state info. Returns an object with following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum PauseInfoResponse {\n    /// Contract is in paused state until `until_height` chain height\n    Paused { until_height: u64 },\n\n    /// Contract is not paused\n    Unpaused {},\n}\n\n")))}d.isMDXComponent=!0}}]);