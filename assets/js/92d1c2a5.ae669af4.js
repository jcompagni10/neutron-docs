"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[4676],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,g=p["".concat(c,".").concat(d)]||p[d]||v[d]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},i="Queries",s={unversionedId:"neutron/token-generation-event/investors-vesting/queries",id:"version-1.0/neutron/token-generation-event/investors-vesting/queries",title:"Queries",description:"All query messages are described below. A custom struct is defined for each query response.",source:"@site/versioned_docs/version-1.0/neutron/token-generation-event/investors-vesting/queries.md",sourceDirName:"neutron/token-generation-event/investors-vesting",slug:"/neutron/token-generation-event/investors-vesting/queries",permalink:"/1.0/neutron/token-generation-event/investors-vesting/queries",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/1.0/neutron/token-generation-event/investors-vesting/messages"},next:{title:"Overview",permalink:"/1.0/neutron/token-generation-event/oracle/overview"}},c={},l=[{value:"<code>config</code>",id:"config",level:3},{value:"<code>vesting_account</code>",id:"vesting_account",level:3},{value:"<code>vesting_accounts</code>",id:"vesting_accounts",level:3},{value:"<code>available amount</code>",id:"available-amount",level:3}],u={toc:l},p="wrapper";function v(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"queries"},"Queries"),(0,o.kt)("p",null,"All query messages are described below. A custom struct is defined for each query response."),(0,o.kt)("h3",{id:"config"},(0,o.kt)("inlineCode",{parentName:"h3"},"config")),(0,o.kt)("p",null,"Returns the configuration for the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {}\n}\n')),(0,o.kt)("h3",{id:"vesting_account"},(0,o.kt)("inlineCode",{parentName:"h3"},"vesting_account")),(0,o.kt)("p",null,"Returns all vesting schedules with their details for a specific vesting recipient."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vesting_account": {\n    "address": "neutron..."\n  }\n}\n')),(0,o.kt)("h3",{id:"vesting_accounts"},(0,o.kt)("inlineCode",{parentName:"h3"},"vesting_accounts")),(0,o.kt)("p",null,"Returns a paginated list of vesting schedules in chronological order. Given fields are optional."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "vesting_accounts": {\n    "start_after": "neutron...",\n    "limit": 10,\n    "order_by": {\n      "desc": {}\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"available-amount"},(0,o.kt)("inlineCode",{parentName:"h3"},"available amount")),(0,o.kt)("p",null,"Returns the claimable amount (vested but not yet claimed) of NTRN tokens that a vesting target can claim."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "available_amount": {\n    "address": "neutron..."\n  }\n}\n')))}v.isMDXComponent=!0}}]);