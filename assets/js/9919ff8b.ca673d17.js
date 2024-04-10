"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[3852],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=p(t),d=r,N=k["".concat(o,".").concat(d)]||k[d]||c[d]||m;return t?n.createElement(N,s(s({ref:a},l),{},{components:t})):n.createElement(N,s({ref:a},l))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[k]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<m;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9026:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>m,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const m={},s="Tick Liquidity",i={unversionedId:"neutron/modules/dex/overview/concepts/tick-liquidity",id:"version-2.0/neutron/modules/dex/overview/concepts/tick-liquidity",title:"Tick Liquidity",description:"TickLiquidity structs are used to store liquidity within the Dex. Each tick has a specific price and holds liquidity for a single token. TickLiquidity come in two general types \u2013 PoolReserves for storing LP positions and LimitOrderTranches for storing maker limit orders. Both types of ticks share several common fields: PairID, TokenIn, TickIndex. PairID refers to the trading pair for which a given tick is used. TokenIn denotes which side of the TradingPair a tick holds liquidity for.",source:"@site/versioned_docs/version-2.0/neutron/modules/dex/overview/concepts/tick-liquidity.md",sourceDirName:"neutron/modules/dex/overview/concepts",slug:"/neutron/modules/dex/overview/concepts/tick-liquidity",permalink:"/2.0/neutron/modules/dex/overview/concepts/tick-liquidity",draft:!1,tags:[],version:"2.0",frontMatter:{}},o={},p=[{value:"Pool Reserves",id:"pool-reserves",level:2},{value:"Limit Order Tranches",id:"limit-order-tranches",level:2}],l={toc:p},k="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(k,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tick-liquidity"},"Tick Liquidity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," structs are used to store liquidity within the Dex. Each tick has a specific price and holds liquidity for a single token. ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," come in two general types \u2013 ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," for storing LP positions and ",(0,r.kt)("inlineCode",{parentName:"p"},"LimitOrderTranches")," for storing maker limit orders. Both types of ticks share several common fields: PairID, TokenIn, TickIndex. PairID refers to the trading pair for which a given tick is used. TokenIn denotes which side of the TradingPair a tick holds liquidity for."),(0,r.kt)("h2",{id:"pool-reserves"},"Pool Reserves"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," are the fundamental building block for Neutron DEX\u2019s AMM design. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," instance represents a single side of a liquidity pool. In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PairID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenIn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TickIndex")," fields, Pools Reserves also have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Reserves")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Fee")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"type PoolReserves struct {\n    PairID    *PairID\n    TokenIn   string\n    TickIndex int64\n    Reserves  sdk.Int\n    Fee       uint64\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reserves")," is used to store the total amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenIn")," within a given ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," instance and ",(0,r.kt)("inlineCode",{parentName:"p"},"Fee")," is the portion of the trading price that will be return to the pool."),(0,r.kt)("p",null,"In the context of LP liquidity, ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," exist in reciprocal pairs with one side (the LowerTick) holding Token0 and the other side (the UpperTick) holding token1. Each of these pairs makes up a single constant price liquidity pool. Within each liquidity pool the following two invariants will always hold true:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Both PoolsReserves within a pair will have the same fee: ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"w"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"U"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"F"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"LowerTick.Fee == UpperTick.Fee")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ee"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"=="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"pp"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ee")))))),(0,r.kt)("li",{parentName:"ol"},"The distance between the tick indexes will be equal to 2x the fee:  ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"L"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"w"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mo",{parentName:"mrow"},"\u2217"),(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"U"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"T"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"LowerTick.TickIndex + 2 * fee = UppertickTick.TickIndex")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ee"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"pp"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))))),(0,r.kt)("p",null,"When swaps occur the tokens will always be added and deducted within a single liqudity pool."),(0,r.kt)("p",null,"When LP liquidity is deposited with a given fee and price it is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," instances such that the given fee is already included in the price. For example, if Alice deposits 100 TokenA  and 100TokenB at price 0 (tick 0) with a fee of 1 then her liquidity will be held in tick -1 and tick 1 respectively. If Bob were to swap 50TokenA for TokenB using Alice\u2019s liquidity his exchange rate would be ","~"," .999. His 50 TokenA would be deposited into tick -1 and he would receive 49 TokenB which would be deducted from tick 1."),(0,r.kt)("p",null,"It is important to note that multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"PoolReserves")," can exist with the same TickIndex but each one will have a unique fee."),(0,r.kt)("h2",{id:"limit-order-tranches"},"Limit Order Tranches"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LimitOrderTranches")," are used to store liquidity in the form of limit orders. In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PairID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenIn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TickIndex")," fields, Pools Reserves also have ",(0,r.kt)("inlineCode",{parentName:"p"},"TracheKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenIn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenOut"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TotalTokenIn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TotalTokenOut")," and an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpirationTime")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-proto"},"type LimitOrderTranche struct {\n    PairID           *PairID\n    TokenIn          string\n    TickIndex        int64\n    TrancheKey       string\n    ReservesTokenIn sdk.Int\n    ReservesTokenOut sdk.Int\n    TotalTokenIn     sdk.Int\n    TotalTokenOut    sdk.Int\n    ExpirationTime *time.Time\n}\n")),(0,r.kt)("p",null,"TrancheKey is a unique identifier for each ",(0,r.kt)("inlineCode",{parentName:"p"},"LimitOrderTranche"),". TrancheKeys also represent a lexicographically sortable order in which tranches with a common PairID, TokenIn and TickIndex will be traded through. Ie. A tranche with TrancheKey \u201cA1\u201d will be traded through before a tranche with TrancheKey \u201cA2\u201d. ReservesTokenIn is the available token that has been added to a limit order by the \u201cmaker\u201d and represents the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenIn")," that can be traded against. ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenOut")," represents the filled amount of the limit order and can be withdrawn by the \u201cmaker\u201ds. ",(0,r.kt)("inlineCode",{parentName:"p"},"TotalTokenIn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TotalTokenOut")," are used to store the respective high watermarks for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenIn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ReservesTokenOut")," and are used for the internal accounting of a limit order."),(0,r.kt)("p",null,"Lastly, ExpirationTime is an optional field used for Expiring limit orders (",(0,r.kt)("inlineCode",{parentName:"p"},"JUST_IN_TIME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOD_TIL_TIME"),"). At the end of each block any LimitOrders with ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpirationTime")," <= ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.BlockTime()")," is converted to an ",(0,r.kt)("inlineCode",{parentName:"p"},"InactiveLimitOrderTranche")," where it can no longer be traded against."))}c.isMDXComponent=!0}}]);