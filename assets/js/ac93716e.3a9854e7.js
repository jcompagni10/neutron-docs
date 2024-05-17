"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[9683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),k=o,m=p["".concat(l,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Overview",s={unversionedId:"neutron/modules/3rdparty/skip/block-sdk/overview",id:"neutron/modules/3rdparty/skip/block-sdk/overview",title:"Overview",description:"\ud83c\udf10 The Block SDK is a toolkit for building customized blocks. The Block SDK is a set of Cosmos SDK and ABCI++ primitives that allows chains to fully customize blocks to specific use cases. It turns your chain's blocks into a highway consisting of individual lanes with their own special functionality.",source:"@site/docs/neutron/modules/3rdparty/skip/block-sdk/overview.md",sourceDirName:"neutron/modules/3rdparty/skip/block-sdk",slug:"/neutron/modules/3rdparty/skip/block-sdk/overview",permalink:"/neutron-docs/neutron/modules/3rdparty/skip/block-sdk/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Metrics",permalink:"/neutron-docs/neutron/modules/cron/metrics"},next:{title:"Overview",permalink:"/neutron-docs/neutron/modules/3rdparty/cosmoshub/globalfee/overview"}},l={},c=[{value:"Which Block SDK Lanes does Neutron support?",id:"which-block-sdk-lanes-does-neutron-support",level:2},{value:"Block SDK Auction parameters on Neutron",id:"block-sdk-auction-parameters-on-neutron",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"\ud83c\udf10 ",(0,o.kt)("strong",{parentName:"p"},"The Block SDK is a toolkit for building customized blocks.")," The Block SDK is a set of Cosmos SDK and ABCI++ primitives that allows chains to fully customize blocks to specific use cases. It turns your chain's blocks into a highway consisting of individual lanes with their own special functionality."),(0,o.kt)("p",null,"Skip has built out a number of plug-and-play lanes on the SDK that your protocol can use, including in-protocol MEV recapture and Oracles! Additionally, the Block SDK can be extended to add your own custom lanes to configure your blocks to exactly fit your application needs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," you can find more info about Block SDK, how it works and how to use the module in the official Skip's Block SDK docs: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.skip.money/blocksdk/searcher-docs"},"https://docs.skip.money/blocksdk/searcher-docs"))),(0,o.kt)("h2",{id:"which-block-sdk-lanes-does-neutron-support"},"Which Block SDK Lanes does Neutron support?"),(0,o.kt)("p",null,"Currently, Neutron supports only two type of Block SDK Lanes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base Lane")," is intended to hold all txs that are not matched by any lanes ordered before this lane;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.skip.money/blocksdk/lanes/existing-lanes/mev"},(0,o.kt)("strong",{parentName:"a"},"MEV Lane"))," - is the MEV lane, this lane is intended to hold all bid txs.")),(0,o.kt)("h2",{id:"block-sdk-auction-parameters-on-neutron"},"Block SDK Auction parameters on Neutron"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),"\nAll auction parameters are accessible though the ",(0,o.kt)("a",{parentName:"p",href:"https://rest-kralum.neutron-1.neutron.org/swagger/#/Query/Params"},"/block-sdk/x/auction/v1/params")," HTTP REST endpoint.")),(0,o.kt)("p",null,"In order to participate in an auction, searchers must pay a fee. This fee is paid in the native token of the chain. The fee is determined by the auction parameters, which are set by the chain. The auction parameters are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MaxBundleSize: ",(0,o.kt)("inlineCode",{parentName:"strong"},"4"))," - specifies the maximum number of transactions that can be included in a bundle (bundle = an ordered list of transactions). Bundles must be \u2264 this number."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ReserveFee: ",(0,o.kt)("inlineCode",{parentName:"strong"},"0.5 NTRN"))," - specifies the bid floor to participate in the auction. Bids that are lower than the reserve fee are ignored."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MinBidIncrement: ",(0,o.kt)("inlineCode",{parentName:"strong"},"0.1 NTRN"))," - specifies how much greater each subsequent bid must be (as seen by an individual node) in order to be considered. If the bid is lower than the highest current bid + min bid increment, the bid is ignored."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ProposerFee: ",(0,o.kt)("inlineCode",{parentName:"strong"},"25%"))," - defines the portion of the winning bid that goes to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/v3.0.2/app/app.go#L634"},"account module ",(0,o.kt)("inlineCode",{parentName:"a"},"cons_redistribute"))," which sends coins to a provider chain where all the rewards will be distributed between validators."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"EscrowAccountAddress: ",(0,o.kt)("inlineCode",{parentName:"strong"},"neutron1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrstdxvff")," (",(0,o.kt)("a",{parentName:"strong",href:"/neutron/dao/overview"},"Neutron Main DAO"),")")," - is the address of the account that will receive a portion of the bid proceeds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"FrontRunningProtection: ",(0,o.kt)("inlineCode",{parentName:"strong"},"false"))," - determines whether front-running and sandwich protection is enabled.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("strong",{parentName:"p"},"FrontRunningProtection")),(0,o.kt)("p",{parentName:"blockquote"},"If this is set to true, bundles must follow these guidelines:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"A searcher must put your signed transactions after transactions searcher didn\u2019t sign;"),(0,o.kt)("li",{parentName:"ul"},"A searcher can only have at most two unique signers in the bundle."))))}d.isMDXComponent=!0}}]);