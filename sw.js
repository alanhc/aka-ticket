if(!self.define){let e,a={};const s=(s,t)=>(s=new URL(s+".js",t).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let i={};const r=e=>s(e,c),o={module:{uri:c},exports:i,require:r};a[c]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),i)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts("fallback-TLLx3nB6qnCXc_A2YCh8o.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_offline",revision:"TLLx3nB6qnCXc_A2YCh8o"},{url:"/aka-ticket/_next/static/TLLx3nB6qnCXc_A2YCh8o/_buildManifest.js",revision:"ab8119bc77c254805f04b20aadca25d6"},{url:"/aka-ticket/_next/static/TLLx3nB6qnCXc_A2YCh8o/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/aka-ticket/_next/static/TLLx3nB6qnCXc_A2YCh8o/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/aka-ticket/_next/static/chunks/18-44bf4a073679d805.js",revision:"44bf4a073679d805"},{url:"/aka-ticket/_next/static/chunks/54c66987-982dfe26e3a74a82.js",revision:"982dfe26e3a74a82"},{url:"/aka-ticket/_next/static/chunks/713-448ca567ea729eca.js",revision:"448ca567ea729eca"},{url:"/aka-ticket/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/aka-ticket/_next/static/chunks/main-6623724f2140e3fb.js",revision:"6623724f2140e3fb"},{url:"/aka-ticket/_next/static/chunks/pages/_app-6a62120de7ef04ef.js",revision:"6a62120de7ef04ef"},{url:"/aka-ticket/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/aka-ticket/_next/static/chunks/pages/_offline-4ba664c4a9d48e12.js",revision:"4ba664c4a9d48e12"},{url:"/aka-ticket/_next/static/chunks/pages/index-684153e6091b8895.js",revision:"684153e6091b8895"},{url:"/aka-ticket/_next/static/chunks/pages/user-9deb5c82e09c090a.js",revision:"9deb5c82e09c090a"},{url:"/aka-ticket/_next/static/chunks/pages/user/ticket-c45c4c57a8156c84.js",revision:"c45c4c57a8156c84"},{url:"/aka-ticket/_next/static/chunks/pages/verifier-05774d138879dfe8.js",revision:"05774d138879dfe8"},{url:"/aka-ticket/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/aka-ticket/_next/static/chunks/webpack-3d9a2651d7c723db.js",revision:"3d9a2651d7c723db"},{url:"/aka-ticket/_next/static/css/26d3680c1392ead9.css",revision:"26d3680c1392ead9"},{url:"/aka-ticket/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/aka-ticket/icon-192x192.png",revision:"766d1a8488ab1fde33ca1fb4ee920023"},{url:"/aka-ticket/icon-256x256.png",revision:"7f172ef2a4721e8059ab5157f2da92a6"},{url:"/aka-ticket/icon-384x384.png",revision:"a145af47786cae14311eb4374f4cdcbd"},{url:"/aka-ticket/icon-512x512.png",revision:"b61a0b8cb9855d54227acebc11d3de32"},{url:"/aka-ticket/icon.png",revision:"ab65116468a02bf7eff71d6d793a4524"},{url:"/aka-ticket/manifest.json",revision:"d3c2c9ff6611e249ddaacccc9eb593fd"},{url:"/aka-ticket/static/images/fallback.png",revision:"b540e4162324be2db7f8ba7192ba82c4"},{url:"/aka-ticket/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/aka-ticket",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:t})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
