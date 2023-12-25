"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[5543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={},o="Overview",l={unversionedId:"neutron/token-generation-event/credits/overview",id:"version-1.0/neutron/token-generation-event/credits/overview",title:"Overview",description:"Used as a CW20 like token for distributing (vesting) airdropped NTRN tokens.",source:"@site/versioned_docs/version-1.0/neutron/token-generation-event/credits/overview.md",sourceDirName:"neutron/token-generation-event/credits",slug:"/neutron/token-generation-event/credits/overview",permalink:"/1.0/neutron/token-generation-event/credits/overview",draft:!1,tags:[],version:"1.0",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/1.0/neutron/token-generation-event/auction/queries"},next:{title:"Messages",permalink:"/1.0/neutron/token-generation-event/credits/messages"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Vesting",id:"vesting",level:2},{value:"Main usage scenarios",id:"main-usage-scenarios",level:2},{value:"Initialization and Mint",id:"initialization-and-mint",level:3},{value:"Airdrop distribution",id:"airdrop-distribution",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Used as a CW20 like token for distributing (vesting) airdropped NTRN tokens."),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Main alterations from cw20-base contract:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mint")," mints to the airdrop address only and requires untrn tokens sent along;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Burn"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"BurnFrom"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"Withdraw")," not only burn tokens, but also transfer untrn tokens to addresses in 1:1 proportion to burned cNTRN tokens;"),(0,i.kt)("li",{parentName:"ul"},"Only ",(0,i.kt)("inlineCode",{parentName:"li"},"Withdraw")," is permissionless and can be called directly by the user;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Withdraw")," has a vesting mechanism attached (tokens are linearly vested for a given amount of time);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Transfer")," only accessible for airdrop contract address.")),(0,i.kt)("p",null,"The contract is owned by the Neutron DAO and needs to know airdrop and lockdrop contract addresses on initialization for permission purposes."),(0,i.kt)("p",null,"DAO executes ",(0,i.kt)("inlineCode",{parentName:"p"},"Mint()")," with untrn sent along to mint cNTRN funds in 1:1 proportion and assigns newly minted cNTRN funds to the airdrop address."),(0,i.kt)("h2",{id:"vesting"},"Vesting"),(0,i.kt)("p",null,"Vesting algorithm is linear with no cliff."),(0,i.kt)("p",null,"Users can use query ",(0,i.kt)("inlineCode",{parentName:"p"},"WithdrawableAmount")," to find out how many tokens they can ",(0,i.kt)("inlineCode",{parentName:"p"},"Withdraw()")," now."),(0,i.kt)("h2",{id:"main-usage-scenarios"},"Main usage scenarios"),(0,i.kt)("h3",{id:"initialization-and-mint"},"Initialization and Mint"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DAO initializes contract, specifies token info with minter, airdrop and lockdrop contract addresses."),(0,i.kt)("li",{parentName:"ol"},"DAO executes ",(0,i.kt)("inlineCode",{parentName:"li"},"Mint()")," with untrn sent along, that mints cNTRN in 1:1 proportion and assigns them to airdrop contract balance.")),(0,i.kt)("h3",{id:"airdrop-distribution"},"Airdrop distribution"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Airdrop calculates the amount of airdrops for users and uses ",(0,i.kt)("inlineCode",{parentName:"li"},"Transfer(recipient, amount)")," together with ",(0,i.kt)("inlineCode",{parentName:"li"},"AddVesting(address, amount, start_time, duration)")," to transfer funds and set vesting schedule (Always a linear vesting with 0 CLIFF time)."),(0,i.kt)("li",{parentName:"ol"},"There are two ways of burning cNTRN and sending untrn to user:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"users can execute ",(0,i.kt)("inlineCode",{parentName:"li"},"Withdraw()")," to burn cNTRN and get untrn according to the vesting schedule. They can look into how much they can withdraw now using ",(0,i.kt)("inlineCode",{parentName:"li"},"WithdrawableAmount(address)")," query. ",(0,i.kt)("inlineCode",{parentName:"li"},"Withdraw()")," can be called only after ",(0,i.kt)("inlineCode",{parentName:"li"},"config.when_withdrawable")," passed (Should be set to lockdrop phase 2 end)."),(0,i.kt)("li",{parentName:"ul"},"lockdrop can execute ",(0,i.kt)("inlineCode",{parentName:"li"},"BurnFrom(owner, amount)")," to send ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," of untrn to ",(0,i.kt)("inlineCode",{parentName:"li"},"owner")," (This action skips vesting as a reward for lockdrop participation).",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"NOTE: ",(0,i.kt)("inlineCode",{parentName:"p"},"BurnFrom")," does not affect vested amounts. So for example if user can get 200 untrn from ",(0,i.kt)("inlineCode",{parentName:"p"},"Withdraw()"),", he will get exactly 200 untrn even if ",(0,i.kt)("inlineCode",{parentName:"p"},"BurnFrom")," is called just prior to this. ",(0,i.kt)("inlineCode",{parentName:"p"},"Withdraw()")," method also has additional check to ensure that no more than user balance will be withdrawn.")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"At the end of airdrop stage (3 months after event add), airdrop executes ",(0,i.kt)("inlineCode",{parentName:"li"},"Burn(amount)")," to burn unclaimed cNTRN.")))}p.isMDXComponent=!0}}]);