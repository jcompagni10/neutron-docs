"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[8340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={},i="Neutron Core Releases",l={unversionedId:"neutron/neutron-core-releases",id:"version-2.0/neutron/neutron-core-releases",title:"Neutron Core Releases",description:"Overview",source:"@site/versioned_docs/version-2.0/neutron/neutron-core-releases.md",sourceDirName:"neutron",slug:"/neutron/neutron-core-releases",permalink:"/neutron-docs/2.0/neutron/neutron-core-releases",draft:!1,tags:[],version:"2.0",frontMatter:{},sidebar:"docs",previous:{title:"Neutron Launch Instructions",permalink:"/neutron-docs/2.0/neutron/consumer-chain-launch"},next:{title:"Overview",permalink:"/neutron-docs/2.0/neutron/dao/overview"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"v3.0.0",id:"v300",level:2},{value:"Block SDK integration",id:"block-sdk-integration",level:3},{value:"CW bindings",id:"cw-bindings",level:3},{value:"Golang upgrade",id:"golang-upgrade",level:3},{value:"v2.0.0",id:"v200",level:2},{value:"Dependencies upgrade",id:"dependencies-upgrade",level:3},{value:"Cosmos SDK Upgrade",id:"cosmos-sdk-upgrade",level:4},{value:"Wasmd Upgrade",id:"wasmd-upgrade",level:4},{value:"Neutron Itself",id:"neutron-itself",level:4},{value:"Globalfee Module Integration",id:"globalfee-module-integration",level:5},{value:"Tokenfactory Module Update",id:"tokenfactory-module-update",level:5},{value:"Interchain Transactions and ContractManager Module Refactor",id:"interchain-transactions-and-contractmanager-module-refactor",level:5},{value:"Adminmodule Rework",id:"adminmodule-rework",level:5},{value:"Dex module intoduction",id:"dex-module-intoduction",level:5}],m={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"neutron-core-releases"},"Neutron Core Releases"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This section provides a comprehensive overview of the significant changes and updates in Neutron, focusing on the upgrades to Cosmos SDK, Wasmd, and Neutron's internal modules."),(0,r.kt)("h2",{id:"v300"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neutron-org/neutron/releases/tag/v3.0.0"},"v3.0.0")),(0,r.kt)("h3",{id:"block-sdk-integration"},"Block SDK integration"),(0,r.kt)("p",null,"Neutron has integrated ",(0,r.kt)("a",{parentName:"p",href:"/neutron-docs/2.0/neutron/modules/3rdparty/skip/block-sdk/overview"},"Skip's Block SDK")," which allows builders to implement different MEV strategies on Neutron."),(0,r.kt)("h3",{id:"cw-bindings"},"CW bindings"),(0,r.kt)("p",null,"Neutron V3 contains convenient ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/pull/365"},"CW bindings")," for ",(0,r.kt)("a",{parentName:"p",href:"/neutron-docs/2.0/neutron/modules/dex/overview/"},"Neutron DEX")," module which allows to build smart-contract applications in a more\nefficient way avoiding tricky Stargate messages and queries."),(0,r.kt)("h3",{id:"golang-upgrade"},"Golang upgrade"),(0,r.kt)("p",null,"Neutron V3 uses ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/devel/release#go1.21.0"},"Golang 1.21")),(0,r.kt)("h2",{id:"v200"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neutron-org/neutron/releases/tag/v2.0.0"},"v2.0.0")),(0,r.kt)("h3",{id:"dependencies-upgrade"},"Dependencies upgrade"),(0,r.kt)("p",null,"Neutron V3 bumps a lot of source code dependencies to the latest versions (at the time of the release) to resolve security and maintaining issues."),(0,r.kt)("h4",{id:"cosmos-sdk-upgrade"},"Cosmos SDK Upgrade"),(0,r.kt)("p",null,"Neutron has transitioned from Cosmos SDK v0.45 to the more advanced v0.47, encompassing significant improvements and custom adaptations. The key aspects of this upgrade include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primary Changes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reference to the main ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.47/learn/intro/overview"},"Cosmos SDK v0.47 documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Access to the full changelog ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.6/CHANGELOG.md"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--broadcast-mode")," block was removed. You need to query the result for a TX with neutrond q tx hash instead."),(0,r.kt)("li",{parentName:"ul"},"the SDK version includes some key store migration for the CLI. Make sure you backup your private keys before testing this! You can not switch back to v0.45."),(0,r.kt)("li",{parentName:"ul"},"We have created ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/cosmos-sdk"},"our own fork")," of the Cosmos SDK, introducing unique enhancements tailored to our needs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gas Counting Exclusion:")," Removal of gas counting in the upgrade module's begin blocker for more consistent gas accounting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BankHooks Introduction:")," Implementation of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/cosmos-sdk/pull/2"},"BankHooks"),", a pivotal feature for the new Tokenfactory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/neutron-org/cosmos-sdk/pull/5"},"Optimized Slashing Calculation"),":")," Backporting of slashing missed blocks calculation from Cosmos SDK v0.50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CometBFT Transition:")," A significant shift to CometBFT for enhanced consensus reliability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ABCI 1.0 Support:")," Enabling chains to implement their mempool with ABCI 1.0 compatibility."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Module Parameters Handling:")," Deprecation of the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.47/modules/params"},"x/params module"),". Modules now manage parameters directly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IBC-Go Upgrade:")," Moving to ibc-go v7 for improved inter-blockchain communication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Technical Enhancements:")," Several minor yet impactful technical improvements (see full list ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.6/CHANGELOG.md"},"here"),").")))))),(0,r.kt)("h4",{id:"wasmd-upgrade"},"Wasmd Upgrade"),(0,r.kt)("p",null,"Our custom fork of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/wasmd"},"wasmd"),", based on version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/blob/v0.45.0/CHANGELOG.md"},"0.45"),", brings forward these key developments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Instantiate2 Activation:")," Enabling predictable contract addresses through the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/cosmwasm-std/1.2.1/cosmwasm_std/fn.instantiate2_address.html"},"instantiate2 feature"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smart-Contract Size Limit Increase:")," Expansion of the binary size limit from 800KB to 1.6MB as ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/pull/320"},"explained here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Legacy REST endpoints for queries and txs are completely removed")," and only gRPC endpoints must be used now;legacy REST endpoints for queries and txs are completely removed and only gRPC endpoints must be used now."),(0,r.kt)("li",{parentName:"ul"},"contracts are able to use ",(0,r.kt)("strong",{parentName:"li"},"floating point operations"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Additional Improvements:")," Various other technical modifications and advancements (see full changelog ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/v0.45.0/CHANGELOG.md"},"here"),").")),(0,r.kt)("h4",{id:"neutron-itself"},"Neutron Itself"),(0,r.kt)("p",null,"Enhancements within Neutron focus on integrating new modules, refining existing functionalities, and ensuring better alignment with the upgraded Cosmos SDK:"),(0,r.kt)("h5",{id:"globalfee-module-integration"},"Globalfee Module Integration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Minimum Gas Price Enforcement:")," A mechanism implemented via the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/blob/feat/sdk-47-ibc-7/docs/modules/globalfee.md"},"globalfee module")," to standardize gas prices across validators.")),(0,r.kt)("h5",{id:"tokenfactory-module-update"},"Tokenfactory Module Update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BankHooks Activation:")," Introduction of BankHooks for smart contracts handling token transfers, as detailed ",(0,r.kt)("a",{parentName:"li",href:"neutron/modules/3rdparty/osmosis/ibc-hooks/overview"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fee Removal for Token Creation:")," Elimination of creation fees for Tokenfactory tokens, promoting free token generation on Neutron (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/e605ed3db4381994ee8185ba4a0ff0877d34e67f/app/upgrades/v2.0.0/upgrades.go#L157"},"source"),").")),(0,r.kt)("h5",{id:"interchain-transactions-and-contractmanager-module-refactor"},"Interchain Transactions and ContractManager Module Refactor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ICA Usability Improvements:")," Enhanced Interchain Account (ICA) functionality for a more user-friendly and secure experience for developers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sudo Execution Error Handling:")," Streamlined error message retrieval in the ContractManager module."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New Fee Structure for ICA Creation:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/pull/334"},"Introduction")," of a fee system for developers creating ICAs on remote chains. ",(0,r.kt)("a",{parentName:"li",href:"/neutron/modules/interchain-txs/messages#msgregisterinterchainaccount"},"Learn more")," ")),(0,r.kt)("h5",{id:"adminmodule-rework"},"Adminmodule Rework"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Module and Governance Alignment:")," The admin module has been redesigned to align with the deprecated params module and the new governance proposal handling mechanism in Cosmos SDK v0.47. For more details, visit ",(0,r.kt)("a",{parentName:"li",href:"/neutron/modules/admin-module/overview#challenges-related-to-cosmos-sdk-047"},"Adminmodule Overview"),".")),(0,r.kt)("h5",{id:"dex-module-intoduction"},"Dex module intoduction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Neutrality:")," Bringing completely new ",(0,r.kt)("a",{parentName:"li",href:"/neutron-docs/2.0/neutron/modules/dex/overview/"},"dex module"),". Users may interact with this module to provide liquidity and execute trades according to commonly-accepted exchange semantics.")))}c.isMDXComponent=!0}}]);