"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[3400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,N=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(N,i(i({ref:t},u),{},{components:n})):r.createElement(N,i({ref:t},u))}));function N(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Overview",l={unversionedId:"neutron/token-generation-event/auction/overview",id:"version-2.0/neutron/token-generation-event/auction/overview",title:"Overview",description:"The LP Bootstrap via Auction contract facilitates NTRN-NATIVE Neutron pool initialization during the protocol launch.",source:"@site/versioned_docs/version-2.0/neutron/token-generation-event/auction/overview.md",sourceDirName:"neutron/token-generation-event/auction",slug:"/neutron/token-generation-event/auction/overview",permalink:"/neutron-docs/2.0/neutron/token-generation-event/auction/overview",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/neutron-docs/2.0/neutron/token-generation-event/airdrop/queries"},next:{title:"Messages",permalink:"/neutron-docs/2.0/neutron/token-generation-event/auction/messages"}},c={},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The LP Bootstrap via Auction contract facilitates ",(0,o.kt)("inlineCode",{parentName:"p"},"NTRN-NATIVE")," Neutron pool initialization during the protocol launch."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Phase 1 :: Bootstrapping ",(0,o.kt)("inlineCode",{parentName:"strong"},"NTRN")," and NATIVE Side of the LP Pool")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Airdrop recipients and lockdrop participants can delegate part / all of their ",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN")," rewards to the auction contract."),(0,o.kt)("li",{parentName:"ul"},"Any user can deposit UST directly to the auction contract to participate in the LP bootstrap auction."),(0,o.kt)("li",{parentName:"ul"},"Both UST deposited & ",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN")," delegated (if any) balances are used to calculate user's LP token shares and additional ",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN")," incentives that he will receive for participating in the auction.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Phase 2 :: Post ",(0,o.kt)("inlineCode",{parentName:"strong"},"NTRN-NATIVE")," Pool initialization")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NTRN")," reward withdrawals from lockdrop & airdrop contracts are enabled during the ",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN-USDC"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN-ATOM")," Pool initializaiton."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NTRN-USDC"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN-ATOM")," LP tokens are staked with the generator contract, with LP Staking rewards allocated equally among the users based on their % LP share"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NTRN")," incentives are directly claimable"),(0,o.kt)("li",{parentName:"ul"},"Users ",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN-USDC"),"/",(0,o.kt)("inlineCode",{parentName:"li"},"NTRN-ATOM")," LP shares are vested linearly on a 90 day period")))}d.isMDXComponent=!0}}]);