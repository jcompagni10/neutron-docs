"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[7701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Swaps",l={unversionedId:"neutron/modules/dex/overview/concepts/swaps",id:"neutron/modules/dex/overview/concepts/swaps",title:"Swaps",description:"Swap provides the most basic mechanism for exchanging one denom for another. It is a core building block of Multihop Swaps and Taker limit order. The swap operation operates by trading a TokenIn through the available TickLiquidity (PoolReserves and LimitOrderTranches) and  outputs a specified TokenOut.",source:"@site/docs/neutron/modules/dex/overview/concepts/swaps.md",sourceDirName:"neutron/modules/dex/overview/concepts",slug:"/neutron/modules/dex/overview/concepts/swaps",permalink:"/neutron-docs/neutron/modules/dex/overview/concepts/swaps",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Liquidity Iteration",permalink:"/neutron-docs/neutron/modules/dex/overview/concepts/liquidity-iteration"},next:{title:"Messages",permalink:"/neutron-docs/neutron/modules/dex/messages"}},s={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swaps"},"Swaps"),(0,i.kt)("p",null,"Swap provides the most basic mechanism for exchanging one denom for another. It is a core building block of Multihop Swaps and Taker limit order. The swap operation operates by trading a ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenIn")," through the available ",(0,i.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," (",(0,i.kt)("inlineCode",{parentName:"p"},"PoolReserves")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LimitOrderTranches"),") and  outputs a specified ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenOut"),"."),(0,i.kt)("p",null,"When performing a swap we iterate through liquidity (",(0,i.kt)("inlineCode",{parentName:"p"},"PoolReserves")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"LimitOrderTranche"),"s) from best to worst price.  As we iterate through each instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"TickLiqudity")," we fully exhaust it before moving to the next ",(0,i.kt)("inlineCode",{parentName:"p"},"TickLiquidity")," instance. This iteration continues until ONE of the following conditions is met:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"All available liquidity has been exhausted.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If there is no available ",(0,i.kt)("inlineCode",{parentName:"li"},"tokenOut")," liquidity for the given pair at the beginning of the swap it will fail and return an ",(0,i.kt)("inlineCode",{parentName:"li"},"ErrLimitPriceNotSatisfied"),"."),(0,i.kt)("li",{parentName:"ul"},"If swap is called through a ",(0,i.kt)("inlineCode",{parentName:"li"},"IMMEDIATE\\_OR\\_CANCEL")," limit order it will still succeed if liquidity is exhausted and only a portion of the ",(0,i.kt)("inlineCode",{parentName:"li"},"AmountIn")," has been used. In all other cases a partial fill of a swap will result in a failure."))),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"AmountIn")," has been hit (ie. the user has swapped through 100% of the supplied ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenIn"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"MaxAmountOut")," has been set and the ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenOut")," amount is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"MaxAmountOut"),".",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"- In cases where only a portion of the maxAmountIn is used only the used portion of `TokenIn` will be debited from the user's account.\n")),"x")))}d.isMDXComponent=!0}}]);