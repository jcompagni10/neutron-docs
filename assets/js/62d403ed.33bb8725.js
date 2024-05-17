"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[1998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={slug:"/"},a="Overview",s={unversionedId:"neutron/overview",id:"version-1.0/neutron/overview",title:"Overview",description:"What is Neutron and why is it needed?",source:"@site/versioned_docs/version-1.0/neutron/overview.md",sourceDirName:"neutron",slug:"/",permalink:"/neutron-docs/1.0/",draft:!1,tags:[],version:"1.0",frontMatter:{slug:"/"},sidebar:"docs",next:{title:"F.A.Q.",permalink:"/neutron-docs/1.0/neutron/faq"}},c={},u=[{value:"What is Neutron and why is it needed?",id:"what-is-neutron-and-why-is-it-needed",level:2},{value:"Cosmos SDK",id:"cosmos-sdk",level:3},{value:"Interchain Security",id:"interchain-security",level:3},{value:"Interchain Queries",id:"interchain-queries",level:3},{value:"Interchain Transactions",id:"interchain-transactions",level:3},{value:"CosmWasm",id:"cosmwasm",level:3},{value:"F.A.Q.",id:"faq",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"what-is-neutron-and-why-is-it-needed"},"What is Neutron and why is it needed?"),(0,o.kt)("p",null,"Neutron is a blockchain network that brings Smart Contracts into the Cosmos-family blockchains using ",(0,o.kt)("a",{parentName:"p",href:"https://cosmwasm.com"},"CosmWasm"),". Neutron works with networks using the IBC protocol. Neutron security (block validation) is provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.cosmos.network"},"Cosmos Hub network")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/interchain-security"},"Interchain Security"),"."),(0,o.kt)("h3",{id:"cosmos-sdk"},"Cosmos SDK"),(0,o.kt)("p",null,"Neutron is built using the Cosmos SDK framework. A generalized framework that simplifies the process of building secure blockchain applications on top of Tendermint BFT. It is based on two major principles: Modularity & capabilities-based security."),(0,o.kt)("h3",{id:"interchain-security"},"Interchain Security"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/interchain-security"},"Interchain Security")," is a technology which allows Neutron to be secured by the validator set of the Cosmos Hub and do not have another one separate validator set particularly for the Neutron blockchain."),(0,o.kt)("h3",{id:"interchain-queries"},"Interchain Queries"),(0,o.kt)("p",null,"Neutron is bringing customizable Interchain Queries to smart contract developers.\nInterchain Queries (aka ICQs) are an essential building block enabling devs to securely retrieve data from remote zones."),(0,o.kt)("h3",{id:"interchain-transactions"},"Interchain Transactions"),(0,o.kt)("p",null,"Neutron is bringing interchain accounts (ICA) to CosmWasm smart-contracts.\nICAs allow modules and smart contracts to execute and track transactions on foreign zones, without deploying additional code. With ICQs, they're the Interchain's secret DeFi sauce."),(0,o.kt)("h3",{id:"cosmwasm"},"CosmWasm"),(0,o.kt)("p",null,"CosmWasm is a smart contracting platform built for the Cosmos ecosystem."),(0,o.kt)("h3",{id:"faq"},"F.A.Q."),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/neutron-docs/1.0/neutron/faq"},"F.A.Q.")," page!"))}d.isMDXComponent=!0}}]);