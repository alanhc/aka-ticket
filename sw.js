if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts("fallback-TUxtAV3KbTJEn_QB1QYbu.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_offline",revision:"TUxtAV3KbTJEn_QB1QYbu"},{url:"/aka-ticket/_next/static/TUxtAV3KbTJEn_QB1QYbu/_buildManifest.js",revision:"7a31316e204ecd853cf952c3200a4f00"},{url:"/aka-ticket/_next/static/TUxtAV3KbTJEn_QB1QYbu/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/aka-ticket/_next/static/TUxtAV3KbTJEn_QB1QYbu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/aka-ticket/_next/static/chunks/18-43cc609f5336077c.js",revision:"43cc609f5336077c"},{url:"/aka-ticket/_next/static/chunks/54c66987-982dfe26e3a74a82.js",revision:"982dfe26e3a74a82"},{url:"/aka-ticket/_next/static/chunks/713-448ca567ea729eca.js",revision:"448ca567ea729eca"},{url:"/aka-ticket/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/aka-ticket/_next/static/chunks/main-6623724f2140e3fb.js",revision:"6623724f2140e3fb"},{url:"/aka-ticket/_next/static/chunks/pages/_app-6a62120de7ef04ef.js",revision:"6a62120de7ef04ef"},{url:"/aka-ticket/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/aka-ticket/_next/static/chunks/pages/_offline-4ba664c4a9d48e12.js",revision:"4ba664c4a9d48e12"},{url:"/aka-ticket/_next/static/chunks/pages/index-e313b9c526b8b191.js",revision:"e313b9c526b8b191"},{url:"/aka-ticket/_next/static/chunks/pages/user-151a20d5e59926a4.js",revision:"151a20d5e59926a4"},{url:"/aka-ticket/_next/static/chunks/pages/user/ticket-955b3280d3e0d77c.js",revision:"955b3280d3e0d77c"},{url:"/aka-ticket/_next/static/chunks/pages/verifier-28b6d3c70286c3f0.js",revision:"28b6d3c70286c3f0"},{url:"/aka-ticket/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/aka-ticket/_next/static/chunks/webpack-3d9a2651d7c723db.js",revision:"3d9a2651d7c723db"},{url:"/aka-ticket/_next/static/css/26d3680c1392ead9.css",revision:"26d3680c1392ead9"},{url:"/aka-ticket/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/aka-ticket/icon-192x192.png",revision:"766d1a8488ab1fde33ca1fb4ee920023"},{url:"/aka-ticket/icon-256x256.png",revision:"7f172ef2a4721e8059ab5157f2da92a6"},{url:"/aka-ticket/icon-384x384.png",revision:"a145af47786cae14311eb4374f4cdcbd"},{url:"/aka-ticket/icon-512x512.png",revision:"b61a0b8cb9855d54227acebc11d3de32"},{url:"/aka-ticket/icon.png",revision:"ab65116468a02bf7eff71d6d793a4524"},{url:"/aka-ticket/manifest.json",revision:"d3c2c9ff6611e249ddaacccc9eb593fd"},{url:"/aka-ticket/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/static/images/fallback.png",revision:"TUxtAV3KbTJEn_QB1QYbu"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/aka-ticket",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
