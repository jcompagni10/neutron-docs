"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[3419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,g=p["".concat(l,".").concat(f)]||p[f]||m[f]||s;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={},a="Messages",i={unversionedId:"neutron/modules/transfer/messages",id:"version-1.0/neutron/modules/transfer/messages",title:"Messages",description:"MsgTransfer",source:"@site/versioned_docs/version-1.0/neutron/modules/transfer/messages.md",sourceDirName:"neutron/modules/transfer",slug:"/neutron/modules/transfer/messages",permalink:"/1.0/neutron/modules/transfer/messages",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"State",permalink:"/1.0/neutron/modules/transfer/state"},next:{title:"Overview",permalink:"/1.0/neutron/modules/contract-manager/overview"}},l={},u=[{value:"MsgTransfer",id:"msgtransfer",level:2},{value:"MsgTransfer response",id:"msgtransfer-response",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messages"},"Messages"),(0,o.kt)("h2",{id:"msgtransfer"},"MsgTransfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'message MsgTransfer {\n  option (gogoproto.equal) = false;\n  option (gogoproto.goproto_getters) = false;\n\n  // The port on which the packet will be sent\n  string source_port = 1 [ (gogoproto.moretags) = "yaml:\\"source_port\\"" ];\n  // The channel by which the packet will be sent\n  string source_channel = 2\n      [ (gogoproto.moretags) = "yaml:\\"source_channel\\"" ];\n  // The tokens to be transferred\n  cosmos.base.v1beta1.Coin token = 3 [ (gogoproto.nullable) = false ];\n  // The sender address\n  string sender = 4;\n  // The recipient address on the destination chain\n  string receiver = 5;\n  // Timeout height relative to the current block height.\n  // The timeout is disabled when set to 0.\n  ibc.core.client.v1.Height timeout_height = 6 [\n    (gogoproto.moretags) = "yaml:\\"timeout_height\\"",\n    (gogoproto.nullable) = false\n  ];\n  // Timeout timestamp in absolute nanoseconds since unix epoch.\n  // The timeout is disabled when set to 0.\n  uint64 timeout_timestamp = 7\n      [ (gogoproto.moretags) = "yaml:\\"timeout_timestamp\\"" ];\n\n  string memo = 8;\n\n  // Fees amount to refund relayer for ack and timeout submission\n  neutron.feerefunder.Fee fee = 9\n      [ (gogoproto.nullable) = false ];\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," your smart-contract ",(0,o.kt)("strong",{parentName:"p"},"must have")," ",(0,o.kt)("inlineCode",{parentName:"p"},"fee.ack_fee + fee.timeout_fee + fee.recv_fee")," coins on its balance, otherwise the message fails. See more info about fee refunding mechanism ",(0,o.kt)("a",{parentName:"p",href:"../feerefunder/overview#general-mechanics"},"here"),".")),(0,o.kt)("p",null,"This message has the same structure the original module has, with addition of ",(0,o.kt)("inlineCode",{parentName:"p"},"fee")," field.\nSee the corresponding original module's page here: ",(0,o.kt)("a",{parentName:"p",href:"https://ibc.cosmos.network/main/apps/transfer/messages.html#msgtransfer"},"https://ibc.cosmos.network/main/apps/transfer/messages.html#msgtransfer"),"."),(0,o.kt)("h3",{id:"msgtransfer-response"},"MsgTransfer response"),(0,o.kt)("p",null,"Instead of an empty response as the original module provides, the Neutron's IBC Transfer module responds with the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MsgTransferResponse {\n  // A channel's sequence_id for outgoing ibc packet. Unique per a channel.\n  uint64 sequence_id = 1;\n  // The src channel name on neutron's side transaction was submitted from\n  string channel = 2;\n}\n")))}m.isMDXComponent=!0}}]);