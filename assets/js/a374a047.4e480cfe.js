"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[110],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?n.createElement(f,o(o({ref:r},i),{},{components:t})):n.createElement(f,o({ref:r},i))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2830:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const l={},o="Client",s={unversionedId:"neutron/modules/contract-manager/client",id:"version-1.0/neutron/modules/contract-manager/client",title:"Client",description:"Queries",source:"@site/versioned_docs/version-1.0/neutron/modules/contract-manager/client.md",sourceDirName:"neutron/modules/contract-manager",slug:"/neutron/modules/contract-manager/client",permalink:"/neutron-docs/1.0/neutron/modules/contract-manager/client",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/neutron-docs/1.0/neutron/modules/contract-manager/overview"},next:{title:"State",permalink:"/neutron-docs/1.0/neutron/modules/contract-manager/state"}},u={},c=[{value:"Queries",id:"queries",level:2},{value:"failures address",id:"failures-address",level:3}],i={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("p",null,"In this section we describe the queries required on grpc server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'// Query defines the gRPC querier service.\nservice Query {\n    // Parameters queries the parameters of the module.\n    rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n        option (google.api.http).get = "/neutron-org/neutron/contractmanager/params";\n    }\n\n    // Queries a Failures by address.\n    rpc Failure(QueryGetFailuresByAddressRequest) returns (QueryGetFailuresByAddressResponse) {\n        option (google.api.http).get = "/neutron-org/neutron/contractmanager/failure/{address}";\n    }\n\n    // Queries a list of failed addresses.\n    rpc AllFailures(QueryAllFailureRequest) returns (QueryAllFailureResponse) {\n        option (google.api.http).get = "/neutron-org/neutron/contractmanager/failure";\n    }\n}\n')),(0,a.kt)("h3",{id:"failures-address"},"failures ","[address]"),(0,a.kt)("p",null,"Returns list of all failures."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query contractmanager failures\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),"Returns info about all failures:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query contractmanager failures\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'failures:\n  - address: neutron1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqcd0mrx\n    id: 0\n    ack_id: 0\n    ack_type: "ack"\n  - address: neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq\n    id: 1\n    ack_id: 1\n    ack_type: "timeout"\npagination:\n  next_key: null\n  total: "2"\n'))),(0,a.kt)("p",null,"Returns list of all failures for specific contract address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"neutrond query contractmanager failures [address]\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example"),"Returns failures for specific contract address:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"neutrond query contractmanager failures neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'failures:\n  - address: neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq\n    id: 0\n    ack_id: 0\n    ack_type: "ack"\n  - address: neutron14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s5c2epq\n    id: 1\n    ack_id: 1\n    ack_type: "ack"\npagination:\n  next_key: null\n  total: "2"\n'))))}d.isMDXComponent=!0}}]);