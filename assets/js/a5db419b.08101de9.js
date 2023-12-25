"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[5423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=s,c=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(c,i(i({ref:t},d),{},{components:n})):r.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const a={},i="Messages",o={unversionedId:"neutron/modules/admin-module/messages",id:"neutron/modules/admin-module/messages",title:"Messages",description:"Overview",source:"@site/docs/neutron/modules/admin-module/messages.md",sourceDirName:"neutron/modules/admin-module",slug:"/neutron/modules/admin-module/messages",permalink:"/neutron/modules/admin-module/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Admin Module",permalink:"/neutron/modules/admin-module/overview"},next:{title:"Overview",permalink:"/neutron/modules/interchain-txs/overview"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"MsgDeleteAdmin",id:"msgdeleteadmin",level:2},{value:"MsgDeleteAdminResponse",id:"msgdeleteadminresponse",level:2},{value:"MsgAddAdmin",id:"msgaddadmin",level:2},{value:"MsgAddAdminResponse",id:"msgaddadminresponse",level:2},{value:"MsgSubmitProposalLegacy",id:"msgsubmitproposallegacy",level:2},{value:"MsgSubmitProposalLegacyResponse",id:"msgsubmitproposallegacyresponse",level:2},{value:"MsgSubmitProposal",id:"msgsubmitproposal",level:2},{value:"MsgSubmitProposalResponse",id:"msgsubmitproposalresponse",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"messages"},"Messages"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"This section provides detailed specifications for the messages within the Admin module of the Neutron network. Messages serve as the primary vehicle for users, administrators, and the ",(0,s.kt)("a",{parentName:"p",href:"/neutron/dao/overview"},"DAO")," to communicate and propose changes within the Neutron ecosystem. Based on the cosmos-sdk architecture, the Admin module offers a range of standardized message structures for seamless governance and operations."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgdeleteadmin"},"MsgDeleteAdmin"),(0,s.kt)("p",null,"Deletes an existing admin from the Neutron network, ensuring that the particular admin no longer has governance rights or permissions."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"creator"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," - The originator or sender of this message. It's usually the address of the entity proposing the removal of the admin."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"admin"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," - The target admin's address to be revoked from its administrative rights.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Response:")," MsgDeleteAdminResponse"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgdeleteadminresponse"},"MsgDeleteAdminResponse"),(0,s.kt)("p",null,"The standard response message after processing ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgDeleteAdmin"),". If successful, it confirms the deletion of the specified admin."),(0,s.kt)("p",null,"(No fields)"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgaddadmin"},"MsgAddAdmin"),(0,s.kt)("p",null,"Facilitates the addition of a new admin. This admin, once added, will be endowed with governance and operational rights as per the Neutron network's configuration."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"creator"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," - The initiator or sender of this message. Typically, the address of the entity proposing the addition of a new admin."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"admin"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," - The address of the new admin to be onboarded.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Response:")," MsgAddAdminResponse"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgaddadminresponse"},"MsgAddAdminResponse"),(0,s.kt)("p",null,"The definitive response message after processing ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgAddAdmin"),". A successful response ensures the addition of the specified admin into the Neutron network's governance mechanism."),(0,s.kt)("p",null,"(No fields)"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgsubmitproposallegacy"},"MsgSubmitProposalLegacy"),(0,s.kt)("p",null,"Leveraging the legacy mechanisms, this message type is tailored for submitting proposals structured before the sdk-47 update. This ensures backward compatibility and a wider range of proposal support."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"content"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"google.protobuf.Any")," - The intrinsic content of the proposal. Typically aligns with the ",(0,s.kt)("inlineCode",{parentName:"li"},"Content")," interface specifications."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"proposer"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," - The address of the entity submitting the proposal.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Response:")," MsgSubmitProposalLegacyResponse"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgsubmitproposallegacyresponse"},"MsgSubmitProposalLegacyResponse"),(0,s.kt)("p",null,"The response message confirming the processing of ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgSubmitProposalLegacy"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"proposal_id"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"uint64")," - The unique identifier assigned to the submitted proposal. This ID serves as a reference for future operations or queries related to this proposal.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgsubmitproposal"},"MsgSubmitProposal"),(0,s.kt)("p",null,"In line with the updates in sdk-47, this message type provides a structure for submitting proposals using the revamped message structures. It encapsulates a diverse array of actions and changes."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Parameters:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"messages"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"Array<google.protobuf.Any>")," - A collection of arbitrary messages detailing the changes or actions proposed. These messages are executed contingent upon the proposal's approval."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"proposer"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," - The originator's address proposing the changes.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Response:")," MsgSubmitProposalResponse"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"msgsubmitproposalresponse"},"MsgSubmitProposalResponse"),(0,s.kt)("p",null,"The standardized response message post-processing ",(0,s.kt)("inlineCode",{parentName:"p"},"MsgSubmitProposal"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Fields:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"proposal_id"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"uint64")," - A unique identifier for the newly submitted proposal. It serves as a pivotal reference for all related actions, queries, or updates.")))}u.isMDXComponent=!0}}]);