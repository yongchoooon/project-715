if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const c=s=>l(s,i),o={module:{uri:i},exports:u,require:c};e[i]=Promise.all(n.map((s=>o[s]||c(s)))).then((s=>(r(...s),u)))}}define(["./workbox-79ffe3e0"],(function(s){"use strict";s.setCacheNameDetails({prefix:"715job"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/95.336a6145.css",revision:null},{url:"/css/app.50d7594c.css",revision:null},{url:"/css/chunk-vendors.c5505d52.css",revision:null},{url:"/css/login.cc69bac7.css",revision:null},{url:"/css/mypage.2aeadd2f.css",revision:null},{url:"/css/user.07d6cbda.css",revision:null},{url:"/d42cf320c9d19e8a.PNG",revision:null},{url:"/img/715Job.a705319c.png",revision:null},{url:"/index.html",revision:"b2691f76ea7bb9477dc5262fb98d66e6"},{url:"/js/47.17f8cb0a.js",revision:null},{url:"/js/95.c74f276d.js",revision:null},{url:"/js/app.19cbcdbd.js",revision:null},{url:"/js/chunk-vendors.6a08f8f6.js",revision:null},{url:"/js/login.2676fc2b.js",revision:null},{url:"/js/mypage.d1556719.js",revision:null},{url:"/js/user.99520876.js",revision:null},{url:"/manifest.json",revision:"61423c8a1f4eaaec82e306306d920624"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
