(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{3661:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verifier",function(){return t(1494)}])},8367:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var r=t(5893),c=t(4051),u=t.n(c),s=t(262),i=t(7294),o=t(2158);function a(n,e,t,r,c,u,s){try{var i=n[u](s),o=i.value}catch(a){return void t(a)}i.done?e(o):Promise.resolve(o).then(r,c)}function f(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var u=n.apply(e,t);function s(n){a(u,r,c,s,i,"next",n)}function i(n){a(u,r,c,s,i,"throw",n)}s(void 0)}))}}var l="ithacanet",v={name:"NFT",iconUrl:"https://tezostaquito.io/img/favicon.png",preferredNetwork:l},p=new o.kx(v),d=(function(){var n=f(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.client.getActiveAccount();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))}(),function(){var n=f(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.client.getActiveAccount();case 2:if(e=n.sent){n.next=9;break}return n.next=6,p.requestPermissions({network:{type:l}});case 6:return n.next=8,p.client.getActiveAccount();case 8:e=n.sent;case 9:return n.abrupt("return",{success:!0,wallet:e.address});case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()),h=function(){var n=f(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.disconnect();case 2:return n.abrupt("return",{success:!0,wallet:null});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();!function(){var n=f(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.client.getActiveAccount();case 3:if(n.sent){n.next=7;break}return n.next=7,e.client.requestPermissions({type:{network:l}});case 7:return n.abrupt("return",{success:!0});case 10:return n.prev=10,n.t0=n.catch(0),n.abrupt("return",{success:!1,error:n.t0});case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))}();function x(n,e,t,r,c,u,s){try{var i=n[u](s),o=i.value}catch(a){return void t(a)}i.done?e(o):Promise.resolve(o).then(r,c)}function w(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var u=n.apply(e,t);function s(n){x(u,r,c,s,i,"next",n)}function i(n){x(u,r,c,s,i,"throw",n)}s(void 0)}))}}function m(n){var e=(0,i.useState)(null),t=e[0],c=e[1],o=function(){var n=w(u().mark((function n(){var e,t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d();case 2:e=n.sent,t=e.success,r=e.wallet,console.log("connecting..",r,t),c(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=function(){var n=w(u().mark((function n(){var e,t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h();case 2:e=n.sent,t=e.success,r=e.wallet,console.log("disconnect..",r,t),c(r);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Link,{route:"/verifier",children:(0,r.jsx)("a",{className:"btn",children:"Verifier"})}),(0,r.jsx)(s.Link,{route:"/user",children:(0,r.jsx)("a",{className:"btn",children:"User"})}),(0,r.jsx)(s.Link,{route:"#",children:(0,r.jsx)("a",{className:"btn",onClick:t?a:o,children:t?t.slice(0,4)+"..."+t.slice(t.length-4,t.length):"Connect wallet"})})]})}var k=function(n){var e=n.children;return(0,r.jsxs)("div",{className:" flex flex-col items-center justify-between",children:[(0,r.jsx)(m,{}),e]})}},1494:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return o}});var r=t(5893),c=t(8367),u=t(7283),s=t(7294);function i(n){var e=(0,s.useState)("No result"),t=e[0],c=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.T,{className:"w-full",constraints:{facingMode:"environment"},onResult:function(n,e){n&&c(null===n||void 0===n?void 0:n.text),e&&console.info(e)}}),(0,r.jsx)("p",{children:t})]})}function o(){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{className:"text-3xl font-bold underline",children:"verifier"}),(0,r.jsx)(i,{})]})}},262:function(n,e,t){"use strict";var r=t(7018)();r.add("user/ticket","/user/ticket"),n.exports=r},5883:function(){},6601:function(){},9214:function(){},5992:function(){},2361:function(){},4616:function(){}},function(n){n.O(0,[78,714,572,861,738,522,774,888,179],(function(){return e=3661,n(n.s=e);var e}));var e=n.O();_N_E=e}]);