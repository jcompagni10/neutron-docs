"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[9625],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=m(r),d=o,f=p["".concat(i,".").concat(d)]||p[d]||l[d]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var m=2;m<a;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const a={},s="Params",c={unversionedId:"neutron/modules/3rdparty/osmosis/tokenfactory/params",id:"neutron/modules/3rdparty/osmosis/tokenfactory/params",title:"Params",description:"The TokenFactory module uses params in this format:",source:"@site/docs/neutron/modules/3rdparty/osmosis/tokenfactory/params.md",sourceDirName:"neutron/modules/3rdparty/osmosis/tokenfactory",slug:"/neutron/modules/3rdparty/osmosis/tokenfactory/params",permalink:"/neutron/modules/3rdparty/osmosis/tokenfactory/params",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Messages",permalink:"/neutron/modules/3rdparty/osmosis/tokenfactory/messages"},next:{title:"Overview",permalink:"/neutron/modules/3rdparty/osmosis/ibc-hooks/overview"}},i={},m=[],u={toc:m},p="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"params"},"Params"),(0,o.kt)("p",null,"The TokenFactory module uses params in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Params defines the parameters for the tokenfactory module.\nmessage Params {\n  // DenomCreationFee defines the fee to be charged on the creation of a new\n  // denom. The fee is drawn from the MsgCreateDenom\'s sender account, and\n  // transferred to the community pool.\n  repeated cosmos.base.v1beta1.Coin denom_creation_fee = 1 [\n    (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins",\n    (gogoproto.moretags) = "yaml:\\"denom_creation_fee\\"",\n    (gogoproto.nullable) = false\n  ];\n\n  // DenomCreationGasConsume defines the gas cost for creating a new denom.\n  // This is intended as a spam deterrence mechanism.\n  //\n  // See: https://github.com/CosmWasm/token-factory/issues/11\n  uint64 denom_creation_gas_consume = 2 [\n    (gogoproto.moretags) = "yaml:\\"denom_creation_gas_consume\\"",\n    (gogoproto.nullable) = true\n  ];\n\n  // FeeCollectorAddress is the address where fees collected from denom creation are sent to\n  string fee_collector_address = 3;\n}\n')))}l.isMDXComponent=!0}}]);