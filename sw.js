if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),o={module:{uri:n},exports:i,require:r};s[n]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts("fallback-c4vC6WGVxTxMBrshz6aUp.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/aka-ticket/_next/static/c4vC6WGVxTxMBrshz6aUp/_buildManifest.js",revision:"3d8416494b3b21b84cdde3e40cea8818"},{url:"/aka-ticket/_next/static/c4vC6WGVxTxMBrshz6aUp/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/aka-ticket/_next/static/c4vC6WGVxTxMBrshz6aUp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/aka-ticket/_next/static/chunks/102d0109-7f64b9d0eb4c0ff9.js",revision:"7f64b9d0eb4c0ff9"},{url:"/aka-ticket/_next/static/chunks/54c66987-982dfe26e3a74a82.js",revision:"982dfe26e3a74a82"},{url:"/aka-ticket/_next/static/chunks/713-4cf17608d0ce141c.js",revision:"4cf17608d0ce141c"},{url:"/aka-ticket/_next/static/chunks/925-473c6b6d8078dc03.js",revision:"473c6b6d8078dc03"},{url:"/aka-ticket/_next/static/chunks/99abb549-549faa1a9be07833.js",revision:"549faa1a9be07833"},{url:"/aka-ticket/_next/static/chunks/ef6e4229-389986ca690b0efe.js",revision:"389986ca690b0efe"},{url:"/aka-ticket/_next/static/chunks/fec483df-4260a1d4de0fe621.js",revision:"4260a1d4de0fe621"},{url:"/aka-ticket/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/aka-ticket/_next/static/chunks/main-6623724f2140e3fb.js",revision:"6623724f2140e3fb"},{url:"/aka-ticket/_next/static/chunks/pages/_app-603ed389ad75759b.js",revision:"603ed389ad75759b"},{url:"/aka-ticket/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/aka-ticket/_next/static/chunks/pages/_offline-4ba664c4a9d48e12.js",revision:"4ba664c4a9d48e12"},{url:"/aka-ticket/_next/static/chunks/pages/index-9a97c6d3c67843cd.js",revision:"9a97c6d3c67843cd"},{url:"/aka-ticket/_next/static/chunks/pages/user-4c8b21671f39e55a.js",revision:"4c8b21671f39e55a"},{url:"/aka-ticket/_next/static/chunks/pages/user/ticket-867c3051e838f51d.js",revision:"867c3051e838f51d"},{url:"/aka-ticket/_next/static/chunks/pages/verifier-ff1ed2ef95a78fb5.js",revision:"ff1ed2ef95a78fb5"},{url:"/aka-ticket/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/aka-ticket/_next/static/chunks/webpack-7313c006361bfbb3.js",revision:"7313c006361bfbb3"},{url:"/aka-ticket/_next/static/css/b5ad89bfc5865187.css",revision:"b5ad89bfc5865187"},{url:"/aka-ticket/_offline",revision:"c4vC6WGVxTxMBrshz6aUp"},{url:"/aka-ticket/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/aka-ticket/icon-192x192.png",revision:"766d1a8488ab1fde33ca1fb4ee920023"},{url:"/aka-ticket/icon-256x256.png",revision:"7f172ef2a4721e8059ab5157f2da92a6"},{url:"/aka-ticket/icon-384x384.png",revision:"a145af47786cae14311eb4374f4cdcbd"},{url:"/aka-ticket/icon-512x512.png",revision:"b61a0b8cb9855d54227acebc11d3de32"},{url:"/aka-ticket/icon.png",revision:"ab65116468a02bf7eff71d6d793a4524"},{url:"/aka-ticket/manifest.json",revision:"7d3d742b7e295c80f0f5ce331574e929"},{url:"/aka-ticket/static/images/fallback.png",revision:"b540e4162324be2db7f8ba7192ba82c4"},{url:"/aka-ticket/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/aka-ticket",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
