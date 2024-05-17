"use strict";(self.webpackChunkneutron=self.webpackChunkneutron||[]).push([[1398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},o="Overview",s={unversionedId:"neutron/modules/interchain-queries/overview",id:"neutron/modules/interchain-queries/overview",title:"Overview",description:"Abstract",source:"@site/docs/neutron/modules/interchain-queries/overview.md",sourceDirName:"neutron/modules/interchain-queries",slug:"/neutron/modules/interchain-queries/overview",permalink:"/neutron-docs/neutron/modules/interchain-queries/overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Events",permalink:"/neutron-docs/neutron/modules/interchain-txs/events"},next:{title:"Messages",permalink:"/neutron-docs/neutron/modules/interchain-queries/messages"}},l={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Query creation deposit",id:"query-creation-deposit",level:2},{value:"Transaction filters",id:"transaction-filters",level:2},{value:"Finding Transfer Transactions with a Specific Amount",id:"finding-transfer-transactions-with-a-specific-amount",level:5},{value:"Searching for Transactions within a Range of Dates",id:"searching-for-transactions-within-a-range-of-dates",level:5},{value:"Combining Multiple Conditions",id:"combining-multiple-conditions",level:5},{value:"Effects of Filters",id:"effects-of-filters",level:5},{value:"Having Fewer or More Filters",id:"having-fewer-or-more-filters",level:5},{value:"Fewer Filters",id:"fewer-filters",level:6},{value:"More Filters",id:"more-filters",level:6},{value:"Good Practices",id:"good-practices",level:5},{value:"How Many Filters Do You Need?",id:"how-many-filters-do-you-need",level:5},{value:"Conclusion",id:"conclusion",level:5}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This document specifies the ICQ (",(0,a.kt)("strong",{parentName:"p"},"I"),"nter",(0,a.kt)("strong",{parentName:"p"},"C"),"hain ",(0,a.kt)("strong",{parentName:"p"},"Q"),"ueries) module for the Neutron network."),(0,a.kt)("p",null,"The ICQ module implements a mechanism to retrieve data from remote chains connected to Neutron via IBC."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("p",null,"A smart-contract can register two types of Interchain Query for particular chain with some query payload and ",(0,a.kt)("inlineCode",{parentName:"p"},"update_period"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Key-Value query (KV-query) - to read ",(0,a.kt)("strong",{parentName:"li"},"values")," from Cosmos-SDK KV-storage on remote chain which are stored under a set of ",(0,a.kt)("strong",{parentName:"li"},"keys"),";"),(0,a.kt)("li",{parentName:"ul"},"Transactions query (TX-query) - find transactions on remote chain under by condition (transactions filter).")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"IMPORTANT NOTE ABOUT KV-QUERIES")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Due to a ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/cosmos/ics23/issues/134"},"bug")," in ICS23 package, it's currently impossible to query an empty or ",(0,a.kt)("inlineCode",{parentName:"strong"},"nil")," value from a remote chain.")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Meaning if your KV-query is registered with key ",(0,a.kt)("inlineCode",{parentName:"strong"},"K")," and a value under this key is ",(0,a.kt)("inlineCode",{parentName:"strong"},"nil")," or empty, submission of such"),"\n",(0,a.kt)("strong",{parentName:"p"},"KV result will fail due to IAVL-proof verification error: ",(0,a.kt)("inlineCode",{parentName:"strong"},"failed to verify proof: empty value in membership proof"))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Moreover, due to ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/cosmos/cosmos-sdk/blob/ae77f0080a724b159233bd9b289b2e91c0de21b5/docs/interfaces/lite/specification.md"},"the nature of IAVL-proofs")),"\n",(0,a.kt)("strong",{parentName:"p"},"(which is an underlying mechanism of verification of a validity of KV-queries results),"),"\n",(0,a.kt)("strong",{parentName:"p"},"it's also impossible to verify"),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/cosmos/cosmos-sdk/blob/ae77f0080a724b159233bd9b289b2e91c0de21b5/docs/interfaces/lite/specification.md#iavl-absence-proof"},"IAVL-absence proof")),"\n",(0,a.kt)("strong",{parentName:"p"},"if it contains IAVL-proof with ",(0,a.kt)("inlineCode",{parentName:"strong"},"nil")," or empty value: ",(0,a.kt)("inlineCode",{parentName:"strong"},"failed to verify proof: could not verify absence of key. Please ensure that the path is correct."))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"We are in contact with ics23 team to fix this issue ASAP, but in the meantime the only way to deal with the bug - is to avoid querying keys with ",(0,a.kt)("inlineCode",{parentName:"strong"},"nil")," or empty values."))),(0,a.kt)("p",null,"ICQ Relayer keeps track of registered Interchain Queries by querying all existed ICQs at the start of work and by subscribing on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v2.0.3/x/interchainqueries/keeper/msg_server.go#L305"},"Update")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/v2.0.3/x/interchainqueries/keeper/msg_server.go#L321"},"Delete")," events which are emitted in corresponding Neutron handlers. When the ICQ Relayer sees that it's time to perform an interchain query, it makes a necessary RPC call to a remote chain and makes the results available for the Neutron's smart contracts by submitting the result to the module. Read more about it at the ",(0,a.kt)("a",{parentName:"p",href:"/relaying/icq-relayer#overview"},"Relayer's page"),"."),(0,a.kt)("p",null,"Neutron verifies the data and processes the query result depending on the interchain query type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in case of a KV-query, the ICQ module saves the result into module's storage, and passed the query id to the contract's\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/v2.0.3/x/contractmanager/keeper/sudo.go#L211"},"SudoKVQueryResult")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-sdk/blob/v0.5.0/contracts/neutron_interchain_queries/src/contract.rs#L385"},"handler"),";"),(0,a.kt)("li",{parentName:"ul"},"in case of a TX-query, the ICQ module ",(0,a.kt)("strong",{parentName:"li"},"does not")," save the result to the storage, finds the contract that registered the query,\nand passes the full result to the contract's ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron/blob/v2.0.3/x/contractmanager/keeper/sudo.go#L173"},"SudoTXQueryResult")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/neutron-org/neutron-sdk/blob/v0.5.0/contracts/neutron_interchain_queries/src/contract.rs#L267"},"handler"),".")),(0,a.kt)("h2",{id:"query-creation-deposit"},"Query creation deposit"),(0,a.kt)("p",null,"In order to clean up ledger from not used, outdated queries special deposit mechanism is used. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron/blob/main/proto/interchainqueries/genesis.proto#L39"},"RegisteredQuery")," contains ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," field, this field is used to collect escrow payment for query creation. In order to return escrow payment a ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoveInterchainQuery")," message should be issued."),(0,a.kt)("p",null,"Permission to perform ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoveInterchainQuery")," message is based on three parameters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"query_submit_timeout")," \u2014 a module parameter which can be thought of as query service period;"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"last_submitted_result_local_height")," \u2014 registered query's property representing the Neutron's height the query was updated last time at;"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"registered_at_height")," \u2014 registered query's property representing the Neutron's height the query was registered at.")),(0,a.kt)("p",null,"The permissions to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"RemoveInterchainQuery")," are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"within the service period (i.e. if ",(0,a.kt)("inlineCode",{parentName:"li"},"current_height <= last_submitted_result_local_height + query_submit_timeout && current_height <= registered_at_height + query_submit_timeout"),") only the query's owner is permissioned to remove it;"),(0,a.kt)("li",{parentName:"ul"},"beyond the service period (i.e. if ",(0,a.kt)("inlineCode",{parentName:"li"},"current_height > last_submitted_result_local_height + query_submit_timeout || current_height > registered_at_height + query_submit_timeout"),") anyone can remove the query and take the deposit as a reward.")),(0,a.kt)("p",null,"Amount of coins to deposit is defined via parameter (",(0,a.kt)("inlineCode",{parentName:"p"},"query_deposit"),") controlled by governance proposal."),(0,a.kt)("p",null,"In other words, it is expected of the query owner to remove its queries when they are not needed anymore. If a query hasn't been in use for the ",(0,a.kt)("inlineCode",{parentName:"p"},"query_submit_timeout")," and owner hasn't removed it, network users are granted with an opportunity to clean the chain up and raise assets for it."),(0,a.kt)("h2",{id:"transaction-filters"},"Transaction filters"),(0,a.kt)("p",null,"Since events themselves are not part of the consensus and are not included in the transaction result, it's necessary to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/c197ceacc1c23d2f1283be91f8f90c2be1328db0/contracts/neutron_interchain_queries/src/contract.rs#L197"},"implement additional checks"),"\nin your ",(0,a.kt)("inlineCode",{parentName:"p"},"SudoTXQueryResult")," handler to check that result transactions satisfies your transactions filter. For instance, you can check that messages in the transactions have proper types, payload, etc.\nIf your contract does not have such checks, malicious relayer can send a fully valid Tendermint transaction which does not satisfy your defined transactions filter, and your business-logic can be broken."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: when registering a TX-query, you write the transaction filters as filters for transaction events. When you check the submitted transaction in your contracts, though, you can only check the information that is stored on-chain (i.e., message fields for messages in a transaction). To put it another way, the set of values that you can use to filter transactions is the intersection of the values that are added to transaction events (used by the ICQ relayer to perform the search) and the values included directly to sdk.Msgs (can be used by your code to check whether the submitted transaction matches your query).  ")),(0,a.kt)("p",null,"You can see more info, examples and recommendations about proper transactions result handling ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutron-org/neutron-sdk/blob/v0.5.0/contracts/neutron_interchain_txs/src/contract.rs#L439"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{"field": "{eventType}.{attributeKey}", "val": "{attributeValue}", "op": "gte"}, ...]\n')),(0,a.kt)("p",null,"Maximum allowed amount of filters is 32. Supplying more filters than allowed will return an error."),(0,a.kt)("p",null,"Supported operators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eq")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gte"))),(0,a.kt)("p",null,"The ICQ relayer can easily parse this format and compose it into usual ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.33/app-dev/indexing-transactions.html#querying-transactions"},"Tendermint syntax")," for searching transactions."),(0,a.kt)("p",null,"Suppose you want to search for transactions that meet specific conditions on a remote chain. You can build a query using various filters to narrow down the search."),(0,a.kt)("h5",{id:"finding-transfer-transactions-with-a-specific-amount"},"Finding Transfer Transactions with a Specific Amount"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{"field": "transfer.amount", "op": "eq", "val": 1000}]\n')),(0,a.kt)("p",null,"This filter searches for all transfer transactions with an exact amount of 1000. The ICQ relayer converts it into the Tendermint search string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"transfer.amount" = 1000\n')),(0,a.kt)("h5",{id:"searching-for-transactions-within-a-range-of-dates"},"Searching for Transactions within a Range of Dates"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{"field": "timestamp", "op": "gte", "val": "2023-01-01T00:00:00Z"}, {"field": "timestamp", "op": "lt", "val": "2023-02-01T00:00:00Z"}]\n')),(0,a.kt)("p",null,"This filter queries for all transactions that were processed between January 1, 2023, and February 1, 2023. The corresponding Tendermint search string would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"timestamp" >= "2023-01-01T00:00:00Z" AND "timestamp" < "2023-02-01T00:00:00Z"\n')),(0,a.kt)("h5",{id:"combining-multiple-conditions"},"Combining Multiple Conditions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[{"field": "message.module", "op": "eq", "val": "bank"}, {"field": "transfer.sender", "op": "eq", "val": "neutron1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrstdxvff"}, {"field": "transfer.amount", "op": "gt", "val": 500}]\n')),(0,a.kt)("p",null,"This example searches for bank transfer transactions sent by a specific address (",(0,a.kt)("inlineCode",{parentName:"p"},"neutron1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrstdxvff"),") and with an amount greater than 500. The search string would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"message.module" = "bank" AND "transfer.sender" = "neutron1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrstdxvff" AND "transfer.amount" > 500\n')),(0,a.kt)("h5",{id:"effects-of-filters"},"Effects of Filters"),(0,a.kt)("p",null,"The filters in the ",(0,a.kt)("inlineCode",{parentName:"p"},"transactions_filter")," field allow for refined and targeted querying of transactions. Some effects of applying these filters are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Increased Efficiency"),": By narrowing down the search criteria, the query can return results more quickly, reducing the computational resources required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Improved Relevance"),": Filters ensure that only transactions that meet specific criteria are returned, making the results more relevant to the user's needs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flexibility"),": Users can combine different operators and fields to create complex queries that match their exact requirements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Error Handling"),": Providing incorrect or conflicting filters might result in an error, so the filter structure must be carefully constructed to avoid issues.")),(0,a.kt)("p",null,"By understanding the usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"transactions_filter")," field, developers and users can leverage the power of targeted querying to interact with remote chains in a more effective and efficient manner."),(0,a.kt)("h5",{id:"having-fewer-or-more-filters"},"Having Fewer or More Filters"),(0,a.kt)("h6",{id:"fewer-filters"},"Fewer Filters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pros:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Broader Results"),": Using fewer filters will generally lead to a larger result set, capturing more transactions that meet broad criteria."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Faster Execution"),": With less complexity, the query may execute more quickly, as there are fewer conditions to evaluate.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cons:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Less Precision"),": Fewer filters may lead to less relevant results if the query is too broad.")),(0,a.kt)("h6",{id:"more-filters"},"More Filters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pros:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"More Specific Results"),": More filters allow for more targeted and precise queries, narrowing down the result set to only the most relevant transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enhanced Control"),": More filters offer greater control over the query, enabling more complex and nuanced searches.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cons:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Slower Execution"),": More complex queries with multiple filters may take longer to execute, as each additional condition adds to the computational load."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Potential Overfitting"),": Too many filters may lead to an overly narrow search, missing relevant transactions or even resulting in no results at all if the filters are too restrictive.")),(0,a.kt)("h5",{id:"good-practices"},"Good Practices"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Start with Core Criteria"),": Identify the essential criteria for your query and start with those filters. It helps to focus on what you really need from the results."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Incrementally Refine"),": If needed, add additional filters incrementally to refine the results, testing at each stage to ensure relevance."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Avoid Redundancy"),": Ensure that each filter adds value to the query and that there are no redundant or conflicting filters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Test Performance"),": Consider testing the query with different numbers of filters to gauge performance and result relevance, especially if using many filters."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Use the Maximum Limit Wisely"),": Note that the maximum allowed amount of 32 filters is a technical constraint.")),(0,a.kt)("h5",{id:"how-many-filters-do-you-need"},"How Many Filters Do You Need?"),(0,a.kt)("p",null,"The optimal number of filters depends on the specific use case and the balance between precision and performance. Generally, it's best to use the minimum number of filters that provide the necessary specificity for your query. Using too few may yield irrelevant results, while using too many may overly narrow the search or impact performance."),(0,a.kt)("h5",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The number of filters in a query is a vital consideration, influencing both the relevance of the results and the performance of the query. Striking the right balance requires a thoughtful approach, considering the specific needs of the query, and adhering to good practices for constructing and refining filters."))}m.isMDXComponent=!0}}]);