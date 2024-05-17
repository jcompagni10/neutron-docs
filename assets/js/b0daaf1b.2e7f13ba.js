"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[9306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={},a="Messages",i={unversionedId:"neutron/tokenomics/distribution/messages",id:"neutron/tokenomics/distribution/messages",title:"Messages",description:"InstantiateMsg",source:"@site/docs/neutron/tokenomics/distribution/messages.md",sourceDirName:"neutron/tokenomics/distribution",slug:"/neutron/tokenomics/distribution/messages",permalink:"/neutron-docs/neutron/tokenomics/distribution/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron-docs/neutron/tokenomics/distribution/overview"},next:{title:"Queries",permalink:"/neutron-docs/neutron/tokenomics/distribution/queries"}},u={},c=[{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2}],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messages"},"Messages"),(0,o.kt)("h2",{id:"instantiatemsg"},"InstantiateMsg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct InstantiateMsg {\n    /// Denom used for rewards distribution. All funds in any other denoms will be ignored.\n    pub denom: String,\n    /// The address of the Neutron DAO. It's capable of pausing and unpausing the contract\n    pub main_dao_address: String,\n    /// The address of the DAO guardian. The security DAO is capable only of pausing the contract.\n    pub security_dao_address: String,\n}\n")),(0,o.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum ExecuteMsg {\n    /// Transfer the contract's ownership to another account [permissioned - executable only by Neutron DAO]\n    TransferOwnership(String),\n    /// Alter shareholder's weights [permissioned - executable only by Neutron DAO]\n    SetShares {\n        shares: Vec<(String, Uint128)>,\n    },\n    /// Send money to contract and distribute it between shareholders [permissionless]\n    Fund {},\n    /// Claim rewards if caller has any [permissionless, but only shareholders are able to withdraw rewards]\n    Claim {},\n    /// pause contract for specified duration [permissioned - executable only by Neutron DAO or Security DAO]\n    Pause {\n        duration: u64,\n    },\n    /// Unpause contract if paused [permissioned - executable only by Neutron DAO]\n    Unpause {},\n}\n")))}d.isMDXComponent=!0}}]);