(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5403)}])},4547:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});var r=t(5893),c=t(4051),u=t.n(c),s=t(262),i=t(7294),o=t(6489);function a(n,e,t,r,c,u,s){try{var i=n[u](s),o=i.value}catch(a){return void t(a)}i.done?e(o):Promise.resolve(o).then(r,c)}function f(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var u=n.apply(e,t);function s(n){a(u,r,c,s,i,"next",n)}function i(n){a(u,r,c,s,i,"throw",n)}s(void 0)}))}}function l(n){var e=(0,i.useState)(null),t=e[0],c=e[1],a=function(){var n=f(u().mark((function n(){var e,t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.GS)();case 2:e=n.sent,t=e.success,r=e.wallet,console.log("connecting..",r,t),c(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=f(u().mark((function n(){var e,t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.iy)();case 2:e=n.sent,t=e.success,r=e.wallet,console.log("disconnect..",r,t),c(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Link,{route:"/verifier",children:(0,r.jsx)("a",{className:"btn",children:"Verifier"})}),(0,r.jsx)(s.Link,{route:"/user",children:(0,r.jsx)("a",{className:"btn",children:"User"})}),(0,r.jsx)(s.Link,{route:"#",children:(0,r.jsx)("a",{className:"btn",onClick:t?l:a,children:t?t.slice(0,4)+"..."+t.slice(t.length-4,t.length):"Connect wallet"})})]})}var v=function(n){var e=n.children;return(0,r.jsxs)("div",{className:" flex flex-col items-center justify-between",children:[(0,r.jsx)(l,{}),e]})}},5403:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var r=t(5893),c=t(4547);function u(){return(0,r.jsx)(c.Z,{children:(0,r.jsx)("h1",{className:"text-3xl font-bold underline",children:"Hello world!"})})}console.log("server:","https://140.112.30.39:5000")},262:function(n,e,t){"use strict";var r=t(7018)();n.exports=r},6489:function(n,e,t){"use strict";t.d(e,{GS:function(){return l},gU:function(){return f},iy:function(){return v}});var r=t(4051),c=t.n(r),u=t(2813);function s(n,e,t,r,c,u,s){try{var i=n[u](s),o=i.value}catch(a){return void t(a)}i.done?e(o):Promise.resolve(o).then(r,c)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var u=n.apply(e,t);function i(n){s(u,r,c,i,o,"next",n)}function o(n){s(u,r,c,i,o,"throw",n)}i(void 0)}))}}var o=t(9188).td.MAINNET,a={name:"NFT",iconUrl:"https://tezostaquito.io/img/favicon.png",preferredNetwork:o},f=new u.kx(a),l=(function(){var n=i(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.client.getActiveAccount();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))}(),function(){var n=i(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.client.getActiveAccount();case 2:if(e=n.sent){n.next=9;break}return n.next=6,f.requestPermissions({network:{type:o}});case 6:return n.next=8,f.client.getActiveAccount();case 8:e=n.sent;case 9:return n.abrupt("return",{success:!0,wallet:e.address});case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()),v=function(){var n=i(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.clearActiveAccount();case 2:return n.abrupt("return",{success:!0,wallet:null});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();!function(){var n=i(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.client.getActiveAccount();case 3:if(n.sent){n.next=7;break}return n.next=7,e.client.requestPermissions({type:{network:o}});case 7:return n.abrupt("return",{success:!0});case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",{success:!1,error:n.t0});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))}()},5883:function(){},6601:function(){},9214:function(){},5992:function(){},2361:function(){},4616:function(){}},function(n){n.O(0,[78,714,572,861,925,774,888,179],(function(){return e=5557,n(n.s=e);var e}));var e=n.O();_N_E=e}]);