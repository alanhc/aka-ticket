(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{4369:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/ticket",function(){return r(5909)}])},8367:function(t,e,r){"use strict";r.d(e,{Z:function(){return y}});var n=r(5893),o=r(4051),i=r.n(o),u=r(262),s=r(7294),a=r(2158);function c(t,e,r,n,o,i,u){try{var s=t[i](u),a=s.value}catch(c){return void r(c)}s.done?e(a):Promise.resolve(a).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){c(i,n,o,u,s,"next",t)}function s(t){c(i,n,o,u,s,"throw",t)}u(void 0)}))}}var f="ithacanet",h={name:"NFT",iconUrl:"https://tezostaquito.io/img/favicon.png",preferredNetwork:f},d=new a.kx(h),g=(function(){var t=l(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.client.getActiveAccount();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))}(),function(){var t=l(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.client.getActiveAccount();case 2:if(e=t.sent){t.next=9;break}return t.next=6,d.requestPermissions({network:{type:f}});case 6:return t.next=8,d.client.getActiveAccount();case 8:e=t.sent;case 9:return t.abrupt("return",{success:!0,wallet:e.address});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),p=function(){var t=l(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.disconnect();case 2:return t.abrupt("return",{success:!0,wallet:null});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();!function(){var t=l(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.client.getActiveAccount();case 3:if(t.sent){t.next=7;break}return t.next=7,e.client.requestPermissions({type:{network:f}});case 7:return t.abrupt("return",{success:!0});case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",{success:!1,error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))}();function v(t,e,r,n,o,i,u){try{var s=t[i](u),a=s.value}catch(c){return void r(c)}s.done?e(a):Promise.resolve(a).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){v(i,n,o,u,s,"next",t)}function s(t){v(i,n,o,u,s,"throw",t)}u(void 0)}))}}function w(t){var e=(0,s.useState)(null),r=e[0],o=e[1],a=function(){var t=m(i().mark((function t(){var e,r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:e=t.sent,r=e.success,n=e.wallet,console.log("connecting..",n,r),o(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=m(i().mark((function t(){var e,r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:e=t.sent,r=e.success,n=e.wallet,console.log("disconnect..",n,r),o(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,n.jsxs)("div",{children:[(0,n.jsx)(u.Link,{route:"/verifier",children:(0,n.jsx)("a",{className:"btn",children:"Verifier"})}),(0,n.jsx)(u.Link,{route:"/user",children:(0,n.jsx)("a",{className:"btn",children:"User"})}),(0,n.jsx)(u.Link,{route:"#",children:(0,n.jsx)("a",{className:"btn",onClick:r?c:a,children:r?r.slice(0,4)+"..."+r.slice(r.length-4,r.length):"Connect wallet"})})]})}var y=function(t){var e=t.children;return(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsx)(w,{}),e]})}},5909:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(5893),o=r(8367),i=r(1653);function u(t){return console.log(t),(0,n.jsx)("div",{style:{height:"auto",margin:"0 auto",maxWidth:128,width:"100%"},children:(0,n.jsx)(i.Z,{value:JSON.stringify(t)})})}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){s(t,e,r[e])}))}return t}var c={name:"NFT Ticket #1",thumbnailUri:"https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq",contract:"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",tokenId:6797},l={contract:"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",tokenId:99999,otp:"DcU6FOeW2BobmJawe892E1tQ0s4YoCVCFDPwJVAYqZdevUg1n1DG4nQYlcwIMOoBqxcmNjKlMcPxXK2hg+lMX+A5HPyl6X3eZIG7eHYBFRBxWrDLiIXfhRBLXQZPsIvcKlsQgSoq5OORJiqqFVBcSIm02QRZ/Vj9nUnJJfGpONg="};function f(t){var e=c;return(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)("h1",{className:"text-3xl font-bold underline",children:[" ",e.name," "]}),(0,n.jsx)("button",{className:"btn btn-blue",children:"activate"}),(0,n.jsx)(u,a({},l))]})}},262:function(t,e,r){"use strict";var n=r(7018)();n.add("user/ticket","/user/ticket"),t.exports=n},2703:function(t,e,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,u){if(u!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(t,e,r){t.exports=r(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3655:function(t,e,r){var n=r(2792);function o(t){this.mode=n.MODE_8BIT_BYTE,this.data=t}o.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},t.exports=o},7321:function(t){function e(){this.buffer=new Array,this.length=0}e.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},9381:function(t){t.exports={L:1,M:0,Q:3,H:2}},2832:function(t,e,r){var n=r(1518);function o(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=n.gexp(n.glog(this.get(r))+n.glog(t.get(i)));return new o(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=n.glog(this.get(0))-n.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=n.gexp(n.glog(t.get(i))+e);return new o(r,0).mod(t)}},t.exports=o},4450:function(t,e,r){var n=r(3655),o=r(7611),i=r(7321),u=r(3160),s=r(2832);function a(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var c=a.prototype;c.addData=function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},c.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},c.getModuleCount=function(){return this.moduleCount},c.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=o.getRSBlocks(t,this.errorCorrectLevel),r=new i,n=0,s=0;s<e.length;s++)n+=e[s].dataCount;for(s=0;s<this.dataList.length;s++){var a=this.dataList[s];r.put(a.mode,4),r.put(a.getLength(),u.getLengthInBits(a.mode,t)),a.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},c.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=a.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},c.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},c.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=u.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},c.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,u=0;u<this.modules[o].length;u++){var s=1*u;this.modules[o][u]&&(n.beginFill(0,100),n.moveTo(s,i),n.lineTo(s+1,i),n.lineTo(s+1,i+1),n.lineTo(s,i+1),n.endFill())}return n},c.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},c.setupPositionAdjustPattern=function(){for(var t=u.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[n+i][o+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},c.setupTypeNumber=function(t){for(var e=u.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},c.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=u.getBCHTypeInfo(r),o=0;o<15;o++){var i=!t&&1==(n>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},c.mapData=function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var a=0;a<2;a++)if(null==this.modules[n][s-a]){var c=!1;i<t.length&&(c=1==(t[i]>>>o&1)),u.getMask(e,n,s-a)&&(c=!c),this.modules[n][s-a]=c,-1==--o&&(i++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},a.PAD0=236,a.PAD1=17,a.createData=function(t,e,r){for(var n=o.getRSBlocks(t,e),s=new i,c=0;c<r.length;c++){var l=r[c];s.put(l.mode,4),s.put(l.getLength(),u.getLengthInBits(l.mode,t)),l.write(s)}var f=0;for(c=0;c<n.length;c++)f+=n[c].dataCount;if(s.getLengthInBits()>8*f)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*f+")");for(s.getLengthInBits()+4<=8*f&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*f)&&(s.put(a.PAD0,8),!(s.getLengthInBits()>=8*f));)s.put(a.PAD1,8);return a.createBytes(s,n)},a.createBytes=function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),c=0;c<e.length;c++){var l=e[c].dataCount,f=e[c].totalCount-l;n=Math.max(n,l),o=Math.max(o,f),i[c]=new Array(l);for(var h=0;h<i[c].length;h++)i[c][h]=255&t.buffer[h+r];r+=l;var d=u.getErrorCorrectPolynomial(f),g=new s(i[c],d.getLength()-1).mod(d);a[c]=new Array(d.getLength()-1);for(h=0;h<a[c].length;h++){var p=h+g.getLength()-a[c].length;a[c][h]=p>=0?g.get(p):0}}var v=0;for(h=0;h<e.length;h++)v+=e[h].totalCount;var m=new Array(v),w=0;for(h=0;h<n;h++)for(c=0;c<e.length;c++)h<i[c].length&&(m[w++]=i[c][h]);for(h=0;h<o;h++)for(c=0;c<e.length;c++)h<a[c].length&&(m[w++]=a[c][h]);return m},t.exports=a},7611:function(t,e,r){var n=r(9381);function o(t,e){this.totalCount=t,this.dataCount=e}o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var r=o.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,i=new Array,u=0;u<n;u++)for(var s=r[3*u+0],a=r[3*u+1],c=r[3*u+2],l=0;l<s;l++)i.push(new o(a,c));return i},o.getRsBlockTable=function(t,e){switch(e){case n.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case n.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case n.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case n.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},t.exports=o},1518:function(t){for(var e={glog:function(t){if(t<1)throw new Error("glog("+t+")");return e.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return e.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},r=0;r<8;r++)e.EXP_TABLE[r]=1<<r;for(r=8;r<256;r++)e.EXP_TABLE[r]=e.EXP_TABLE[r-4]^e.EXP_TABLE[r-5]^e.EXP_TABLE[r-6]^e.EXP_TABLE[r-8];for(r=0;r<255;r++)e.LOG_TABLE[e.EXP_TABLE[r]]=r;t.exports=e},2792:function(t){t.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},3160:function(t,e,r){var n=r(2792),o=r(2832),i=r(1518),u=0,s=1,a=2,c=3,l=4,f=5,h=6,d=7,g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;g.getBCHDigit(e)-g.getBCHDigit(g.G15)>=0;)e^=g.G15<<g.getBCHDigit(e)-g.getBCHDigit(g.G15);return(t<<10|e)^g.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;g.getBCHDigit(e)-g.getBCHDigit(g.G18)>=0;)e^=g.G18<<g.getBCHDigit(e)-g.getBCHDigit(g.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return g.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case u:return(e+r)%2==0;case s:return e%2==0;case a:return r%3==0;case c:return(e+r)%3==0;case l:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case f:return e*r%2+e*r%3==0;case h:return(e*r%2+e*r%3)%2==0;case d:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),r=0;r<t;r++)e=e.multiply(new o([1,i.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var i=0,u=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var a=-1;a<=1;a++)o+a<0||e<=o+a||0==s&&0==a||u==t.isDark(n+s,o+a)&&i++;i>5&&(r+=3+i-5)}for(n=0;n<e-1;n++)for(o=0;o<e-1;o++){var c=0;t.isDark(n,o)&&c++,t.isDark(n+1,o)&&c++,t.isDark(n,o+1)&&c++,t.isDark(n+1,o+1)&&c++,0!=c&&4!=c||(r+=3)}for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var l=0;for(o=0;o<e;o++)for(n=0;n<e;n++)t.isDark(n,o)&&l++;return r+=10*(Math.abs(100*l/e/e-50)/5)}};t.exports=g},8330:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(r(5697)),o=i(r(7294));function i(t){return t&&t.__esModule?t:{default:t}}var u={d:n.default.string.isRequired,fill:n.default.string.isRequired,transformX:n.default.number.isRequired,transformY:n.default.number.isRequired},s=function(t){var e=t.d,r=t.fill,n=t.transformX,i=t.transformY;return o.default.createElement("path",{d:e,fill:r,transform:"matrix("+[1,0,0,1,n,i]+")"})};s.propTypes=u,s.defaultProps={},e.default=s},5335:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=u(r(5697)),i=u(r(7294));function u(t){return t&&t.__esModule?t:{default:t}}var s={children:o.default.array.isRequired,size:o.default.number.isRequired,title:o.default.string,xmlns:o.default.string},a={title:void 0,xmlns:"http://www.w3.org/2000/svg"},c=function(t){var e=t.children,r=t.size,o=t.title,u=t.xmlns,s=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["children","size","title","xmlns"]);return i.default.createElement("svg",n({},s,{height:r,width:r,xmlns:u}),o?i.default.createElement("title",null,o):null,e)};c.propTypes=s,c.defaultProps=a,e.default=c},1653:function(t,e,r){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o=f(r(4450)),i=f(r(9381)),u=f(r(5697)),s=r(7294),a=f(s),c=f(r(8330)),l=f(r(5335));function f(t){return t&&t.__esModule?t:{default:t}}var h={bgColor:u.default.oneOfType([u.default.object,u.default.string]),fgColor:u.default.oneOfType([u.default.object,u.default.string]),level:u.default.oneOf(["L","M","Q","H"]),size:u.default.number,value:u.default.string.isRequired},d=function(t){var e=t.bgColor,r=t.fgColor,u=t.level,s=t.size,f=t.value,h=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}(t,["bgColor","fgColor","level","size","value"]),d=new o.default(-1,i.default[u]);d.addData(f),d.make();var g=d.modules,p=s/g.length;return a.default.createElement(l.default,n({},h,{size:s}),g.map((function(t,n){return t.map((function(t,o){var i=Math.round(o*p),u=Math.round(n*p),s=Math.round((o+1)*p)-i,l=Math.round((n+1)*p)-u;return a.default.createElement(c.default,{key:"rectangle-"+n+"-"+o,d:"M 0 0 L "+s+" 0 L "+s+" "+l+" L 0 "+l+" Z",fill:t?r:e,transformX:i,transformY:u})}))})))};d.propTypes=h,d.defaultProps={bgColor:"#FFFFFF",fgColor:"#000000",level:"L",size:256},e.Z=(0,s.memo)(d)},5883:function(){},6601:function(){},9214:function(){},5992:function(){},2361:function(){},4616:function(){}},function(t){t.O(0,[78,714,572,861,522,774,888,179],(function(){return e=4369,t(t.s=e);var e}));var e=t.O();_N_E=e}]);