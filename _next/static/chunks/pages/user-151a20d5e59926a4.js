(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{9032:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return t(5086)}])},4547:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(5893),c=t(262);function a(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.Link,{route:"/verifier",children:(0,r.jsx)("a",{className:"btn",children:"Verifier"})}),(0,r.jsx)(c.Link,{route:"/user",children:(0,r.jsx)("a",{className:"btn",children:"User"})}),(0,r.jsx)(c.Link,{route:"#",children:(0,r.jsx)("a",{className:"btn",children:"Connect Wallet"})})]})}var i=function(e){var n=e.children;return(0,r.jsxs)("div",{className:"container mx-auto",children:[(0,r.jsx)(a,{}),n]})}},5086:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(4051),c=t.n(r),a=t(5893),i=t(7294),u=t(4547),s=t(262),o=t(5675),l=t.n(o);function f(e){var n=null!==e&&void 0!==e?e:{},t=n.name,r=n.thumbnailUri,c=n.contract,i=n.tokenId;return(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(s.Link,{route:"/user/ticket",params:{name:"alan"},children:(0,a.jsx)("a",{children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg",children:[(0,a.jsx)(l(),{className:"w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg",src:r,alt:"",width:500,height:500}),(0,a.jsxs)("div",{className:"p-6 flex flex-col justify-start",children:[(0,a.jsx)("h5",{className:"text-gray-900 text-xl font-medium mb-2",children:t}),(0,a.jsx)("p",{className:"text-gray-700 text-base mb-4",children:c}),(0,a.jsx)("p",{className:"text-gray-600 text-xs",children:i})]})]})})})})}var d=t(9669),h=t.n(d);function x(e,n,t,r,c,a,i){try{var u=e[a](i),s=u.value}catch(o){return void t(o)}u.done?n(s):Promise.resolve(s).then(r,c)}console.log("backend url: https://aka-ticket.herokuapp.com");var m=h().create({baseURL:"https://aka-ticket.herokuapp.com"}),v=function(){var e,n=(e=c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/ticket/".concat(n)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function i(e){x(a,r,c,i,u,"next",e)}function u(e){x(a,r,c,i,u,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();function p(e,n,t,r,c,a,i){try{var u=e[a](i),s=u.value}catch(o){return void t(o)}u.done?n(s):Promise.resolve(s).then(r,c)}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(){var e=(0,i.useState)([]),n=e[0],t=e[1];return(0,i.useEffect)((function(){var e=function(){var e,n=(e=c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("tz1hHamH4QRSqA8NbzE8gE4ecP6QExoLJw6J");case 2:n=e.sent,t(n.result);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function i(e){p(a,r,c,i,u,"next",e)}function u(e){p(a,r,c,i,u,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)("h1",{className:"text-3xl font-bold underline",children:"user"}),n.map((function(e){return(0,i.createElement)(f,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){j(e,n,t[n])}))}return e}({},e,{key:e.id}))}))]})}},262:function(e,n,t){"use strict";var r=t(7018)();r.add("user/ticket","/user/ticket"),e.exports=r}},function(e){e.O(0,[18,713,774,888,179],(function(){return n=9032,e(e.s=n);var n}));var n=e.O();_N_E=n}]);