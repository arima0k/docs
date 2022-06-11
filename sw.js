(()=>{"use strict";var e={264:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},866:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},411:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},646:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(264);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(866);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(646);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(411);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"4ae5dd5838db4fb91f0008952fc43606","url":"404.html"},{"revision":"eb06d61b7d330649e97f28bd07aba974","url":"assets/css/styles.a8a58086.css"},{"revision":"38c4778a08682393f492aab6d3058b96","url":"assets/js/1109.b2d823fb.js"},{"revision":"e6bd99cab8a2edd7d7a1589608407db4","url":"assets/js/1127.7fa3757b.js"},{"revision":"d134b2d2b0ea86373ee61aa55db3b570","url":"assets/js/1399.424df80c.js"},{"revision":"51bef16b4f89d2a3be0e6877758cebe5","url":"assets/js/1406.ac0a7644.js"},{"revision":"41fdf7abecec257970e68f663000fc0e","url":"assets/js/1548.f2588724.js"},{"revision":"913838210916f9027d67bc3b4e76d62e","url":"assets/js/1633.dd192f76.js"},{"revision":"56637c1fb144c382064514bdc8434e96","url":"assets/js/1691.1c70b6ec.js"},{"revision":"179be4a054fca593593dd2ca5e8e144d","url":"assets/js/1926.2c5eba25.js"},{"revision":"a4514eb7446837a9ed604140dba8054c","url":"assets/js/2048.a47f9dff.js"},{"revision":"2f86fd25887b019d7a8f73d0cbdfd80e","url":"assets/js/2098.062e0fad.js"},{"revision":"b959f9275edc66261ffb5018612962ed","url":"assets/js/2335.7230fb80.js"},{"revision":"cc85d60c4aec2cada916746b3185bfad","url":"assets/js/2561.1ef3e42f.js"},{"revision":"f929df306732b6f79b7eec54877a2b73","url":"assets/js/2674.d95a11dc.js"},{"revision":"ffeb4b5a097335616b9d8d5b6b9b14aa","url":"assets/js/2726.1fa40406.js"},{"revision":"9d1e5bc6a36731f2a714533248a93dc8","url":"assets/js/3104.e73e0493.js"},{"revision":"4875077ac5f9025f8872a08913850f2a","url":"assets/js/3433.7534d634.js"},{"revision":"9d96437c5b0fb6b54866087d4287cbba","url":"assets/js/3568.48d1e8fb.js"},{"revision":"271b90a190770e7bfc1eaadc7b968f68","url":"assets/js/3582.ee388398.js"},{"revision":"c3c88bdb4e83265cf6d2ee3fa0e3cb4a","url":"assets/js/3605.d8973f60.js"},{"revision":"2d8b786ae809fa1db0a17242a8bf2971","url":"assets/js/3628.a873b7d4.js"},{"revision":"3e32ac0dae0606825571dbb7e9504c9a","url":"assets/js/3769.0c9db71a.js"},{"revision":"ca4e6ca7e9c79fa36db91128788f6285","url":"assets/js/3908.8f5611cf.js"},{"revision":"e7f6788b2add61c856a08af93c59f339","url":"assets/js/4092.930c95ac.js"},{"revision":"8ddc00cd6248cc620f4336954b8083cf","url":"assets/js/4218.b9b265f9.js"},{"revision":"2400f5afbbc2ac86119ffea53ec0f437","url":"assets/js/4469.a571b45a.js"},{"revision":"f29ae790907c36caf3f19d5b4a804c37","url":"assets/js/4750.5b2a8a0f.js"},{"revision":"e4dc1a0f7c93b9d362ca9d531372b84a","url":"assets/js/497.0e58674c.js"},{"revision":"33eb53b7882aaa41d572ceb7809946ee","url":"assets/js/4995.64ba60a5.js"},{"revision":"d7898117076a675e10010a8295001f8c","url":"assets/js/502.3a3d8031.js"},{"revision":"6174e0b3a725dd1fcc8d7ac8bcff3eb8","url":"assets/js/5179.3fcb3169.js"},{"revision":"dca5756e9fb10858fc6677e2682547f6","url":"assets/js/5323.a0ca4072.js"},{"revision":"8025d82b8f0c9b9bf9b12202eb1953ed","url":"assets/js/5445.5ad3f227.js"},{"revision":"e7bd21bff669dd513809ed8d341370c4","url":"assets/js/5473.7a4ec6a2.js"},{"revision":"fc0245cbbd94b226dc8358bc996ae447","url":"assets/js/5562.8b754049.js"},{"revision":"ec0ced962c95fbeb8549bff9102d4d64","url":"assets/js/5670.a42a4d56.js"},{"revision":"96196806589a110cccf549006c673aa5","url":"assets/js/5745.19e8f97f.js"},{"revision":"ee6e14491090f155359395238e6c6e79","url":"assets/js/5766.5e310a71.js"},{"revision":"1027e6b7c47d883f6a39f7d9f0be3ec0","url":"assets/js/601.45e8d412.js"},{"revision":"ae0511191656fd12f3bdf2399d4e9f67","url":"assets/js/6011.320b44f8.js"},{"revision":"415616f8037a210aad0d696b4bd7003e","url":"assets/js/6041.2bd34fe9.js"},{"revision":"98a99b5cf721a726db3c945b9dd33750","url":"assets/js/6177.c4844d00.js"},{"revision":"db775f68cb9cc5fa3a5f5d008cfd9766","url":"assets/js/6442.788aa69e.js"},{"revision":"73d77a59eb811b767533942a01d935e7","url":"assets/js/6748.f8cbbd0b.js"},{"revision":"49a364f800deb0fe4b343f13c03d7be6","url":"assets/js/6791.3b07859b.js"},{"revision":"30e04a8f24f54c6c7602f7c157462987","url":"assets/js/6819.bd80a315.js"},{"revision":"83e8d52d43bb8daac7fbca131f15dc38","url":"assets/js/6965.444c6218.js"},{"revision":"1c5514563ba8d247b5d451ded13f3e8b","url":"assets/js/7085.67407f9a.js"},{"revision":"b672b2bd75574a19c4ecf3dca9cc5e35","url":"assets/js/740.139c02ae.js"},{"revision":"6f656c671dd793c1eef5f64e522aefa9","url":"assets/js/7607.16388570.js"},{"revision":"a45d946e521ded67770cf11211e81e6d","url":"assets/js/764.b714cf90.js"},{"revision":"48add802abff995fa3643afe9ff79297","url":"assets/js/7717.dee6933e.js"},{"revision":"544e1087d3f9d0fa5a0f7f12f91ee4f3","url":"assets/js/790.eda71635.js"},{"revision":"6429eb04560c1b2da3a550e734586e48","url":"assets/js/7962.ae66386d.js"},{"revision":"2e08700d9086c7812364b6a521544431","url":"assets/js/8642.a8e8bca0.js"},{"revision":"455534d759173c858420decd5f77874e","url":"assets/js/8648.26543496.js"},{"revision":"3ff6e2d347b22b289da1ea43d6a8da62","url":"assets/js/8651.dba2fc78.js"},{"revision":"4d6f4fce111ef97aeb0c1c27925cdc48","url":"assets/js/8774.09867dbd.js"},{"revision":"093289f28960837175bd6c9fc3b1502b","url":"assets/js/884.c28ee80f.js"},{"revision":"2fcd948f6d1101aa926976c66ac6b090","url":"assets/js/8888.b68aa8d7.js"},{"revision":"709b03ecd78a1c20434eff5a3e54e5f1","url":"assets/js/8920.f498a101.js"},{"revision":"099e93e69d6a4880aa275c761a79cbd6","url":"assets/js/9185.75edc608.js"},{"revision":"eb4be5b354f0b719e34dd390e6468740","url":"assets/js/9262.e9dd3a20.js"},{"revision":"8418f3822de0b956626d781f95b5fbb7","url":"assets/js/9594.6bc1ecc2.js"},{"revision":"ce0cf8b9a539837cea26655a0d0bcc3b","url":"assets/js/9680.2c600ca0.js"},{"revision":"a5210375a763051cceeb8c1fd2d037e6","url":"assets/js/9701.357cecfd.js"},{"revision":"59d3c3cbb80bef775d3f094bb08c4532","url":"assets/js/main.d6f29d3b.js"},{"revision":"a7ba4a2c121d9a8fe812963a7d8538c1","url":"assets/js/runtime~main.3d29f07c.js"},{"revision":"efc4552a07d5d40bad218ba751128000","url":"category/common.html"},{"revision":"3a785f6065098693469b2885f38c5d0b","url":"category/paper/how-to-guides.html"},{"revision":"5025b4d728e4c4ab683381219c0224d2","url":"category/paper/reference.html"},{"revision":"d856b16be8375f09222a3b88d90cf445","url":"category/papermc.html"},{"revision":"34fe4d801968099b5dcbf10e0f1bea32","url":"category/velocity/developers/api.html"},{"revision":"11b4212ea312030dda95b274cd27bec3","url":"category/velocity/developers/getting-started.html"},{"revision":"ec4963e460038ddb082221790ae65ca9","url":"category/velocity/developers/how-to-guides.html"},{"revision":"cf54f4663c14368fc3e612f033752605","url":"category/velocity/how-to-guides.html"},{"revision":"85cc63109bececb6a4a93540774640e4","url":"category/velocity/reference.html"},{"revision":"fa090402de5df9a8eea60ae33b88af03","url":"index.html"},{"revision":"fa454761b0ea60431dfddc6154b8ab3b","url":"intro.html"},{"revision":"fb044587c201bda4b135368d026426e0","url":"java-install-update.html"},{"revision":"9de0c1c99854cb76025abff99c9590c3","url":"manifest.json"},{"revision":"0997dd14a513dd1c55adfd0556ecf23a","url":"paper.html"},{"revision":"fdcf7d99d1f8bcd1bca09b3ec42b1e03","url":"paper/aikars-flags.html"},{"revision":"578f6b38156e4b3f27da6628dfa049af","url":"paper/anti-xray.html"},{"revision":"a1ac56a214a98534c967879bfbfea9a5","url":"paper/getting-started.html"},{"revision":"194d7f35f35c9ccdcbecd75f83e17d7e","url":"paper/getting-started/adding-plugins.html"},{"revision":"553cdc943b070be43332ed808653ddc0","url":"paper/migration.html"},{"revision":"d506640d003220bb964e763ff6b7f4b4","url":"paper/per-world-configuration.html"},{"revision":"fc377c9b1fb5982ce9c0d2f7c07d76cd","url":"paper/reference/paper-global-configuration.html"},{"revision":"b4401c6c2f079b47ee0717bacbfcc6a5","url":"paper/reference/paper-per-world-configuration.html"},{"revision":"e86e838e2ccc5123a684b5b72f38647d","url":"paper/updating.html"},{"revision":"3b7d655346dfcbda324d742cbe3a87f8","url":"papermc/assets.html"},{"revision":"152df648d9cd5c013aa2998dcc0920ca","url":"papermc/contact.html"},{"revision":"64914df6a59f038008c319bfbcd80f58","url":"papermc/downloads-api.html"},{"revision":"ec1c82f9ad7c9295d8dc09eb731b7f00","url":"search.html"},{"revision":"6ea3c40bc20ec2e22b43a57b430d0a9c","url":"velocity.html"},{"revision":"464cd99bf09dedd9ae684e7c0e627683","url":"velocity/built-in-commands.html"},{"revision":"186b183057c453a7fd6972d8101d75aa","url":"velocity/comparisons-to-other-proxies.html"},{"revision":"440d86569dfff69172c2e37bcb26165c","url":"velocity/configuration.html"},{"revision":"32077162ad1ea3ee699771faf7023e56","url":"velocity/credits.html"},{"revision":"a635492fa8f012312851b716883d5751","url":"velocity/developers.html"},{"revision":"8dcfaaef87f645515f625b3427f27d08","url":"velocity/developers/api-basics.html"},{"revision":"6284054dde7ecf960573eb5e7fccf770","url":"velocity/developers/command-api.html"},{"revision":"630398476b2e6161897ba85828b38737","url":"velocity/developers/creating-your-first-plugin.html"},{"revision":"d7d633142dbadc4d8a3b673523073eeb","url":"velocity/developers/dependency-management.html"},{"revision":"a5d0a8d3ef5bdfb5837671aaaa9523ec","url":"velocity/developers/event-api.html"},{"revision":"591da76cde6fab7e1a96aacec91216d6","url":"velocity/developers/pitfalls.html"},{"revision":"1e29eb219a0543601242bd4159b48399","url":"velocity/developers/porting-plugins-from-velocity-1.html"},{"revision":"eb9b06a845207601b79a2508e5dbb520","url":"velocity/developers/scheduler-api.html"},{"revision":"5e8de049d2c3766fd8af929baf18ec45","url":"velocity/faq.html"},{"revision":"2a0e640140e5eaec8e0d4bfb83898b5e","url":"velocity/getting-started.html"},{"revision":"8f594523f038510c9c0acf30df83b320","url":"velocity/migration.html"},{"revision":"c020616ff723a3eaf4d714b7113d28f2","url":"velocity/player-information-forwarding.html"},{"revision":"c9b26bce441dd63d886e53d3ad1f0c72","url":"velocity/security.html"},{"revision":"cbdad6c10fbd3236de38ca896e73cabe","url":"velocity/server-compatibility.html"},{"revision":"6a172b680fd1a94591833421367bfcf1","url":"velocity/tuning.html"},{"revision":"e76512a035d5c59c129fba9b21663a0f","url":"velocity/why-velocity.html"},{"revision":"e77253b801f0a4e21be96caa67d5830f","url":"waterfall.html"},{"revision":"9a6d9d53f5fdfcbf953cbc9b7dc88115","url":"waterfall/configuration.html"},{"revision":"3269f2e5175908550a32303ac4b3f7ce","url":"waterfall/getting-started.html"},{"revision":"4f12cdd8785605ddeb7c202a196e7d35","url":"assets/images/anti-xray-nether-05e6e894ce876f94d4463e1f491d1030.png"},{"revision":"ac61b2cd736aeb124ece24c782c63560","url":"assets/images/anti-xray-overworld-3443fb41851dc5d9082f2956268232a1.png"},{"revision":"728cb4af05ea79eca18631a0a7f5950e","url":"assets/images/papermc_logomark_500-b69f67cabd469b3d0485c20a912e84fc.png"},{"revision":"2cc84f324fa1386d14831b64d1c303fb","url":"assets/images/pterodactyl-manual-59004882b8766e775ceefd62de2cbc50.png"},{"revision":"f923cb235d9275c8e766c27f6e8646a6","url":"assets/images/pterodactyl-prompt-08eaa04490182b153a7e203d414da64b.png"},{"revision":"27a331ad0d4f9b1b056d7aa7c497380c","url":"img/favicon.ico"},{"revision":"cf40f7154e8833e87c5a15b3c19cec64","url":"img/icons/icon-128x128.png"},{"revision":"d8c14f548f07f8b9f34900842e514de3","url":"img/icons/icon-144x144.png"},{"revision":"2352005bdb6116062586418be2feb0ee","url":"img/icons/icon-152x152.png"},{"revision":"69e1e4818e8c72f0b3faf7a71abeda26","url":"img/icons/icon-192x192.png"},{"revision":"e603d44fde637d0428169e42314c3039","url":"img/icons/icon-384x384.png"},{"revision":"ebde541848f562b741056bde05472bba","url":"img/icons/icon-512x512.png"},{"revision":"1fbf5b497e5d12fd86393175f9eaf139","url":"img/icons/icon-72x72.png"},{"revision":"50adede2c2bda637f507879fbb543480","url":"img/icons/icon-96x96.png"},{"revision":"69b156c91d208aff640e1016c38fb004","url":"img/logo.svg"},{"revision":"23c02a74c76235daf1a513381ba42449","url":"img/og-image.png"},{"revision":"249f3a6448ee743c8f87f15dd0c0b48c","url":"img/paper.png"},{"revision":"eea8a45e4d02c3c163a90a2a4743d37b","url":"assets/fonts/JetBrainsMono-Regular-d922fd933fc62eec7ec568cb006b4964.woff2"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();