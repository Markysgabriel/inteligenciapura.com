/*!For license information please see vf_bundle.js.LICENSE.txt*/(()=>{var __webpack_modules__={184:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{p:()=>a});var a=i((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errorInstance=t,this.productsData={bb:{vsl01:{vf:{instanceClassName:"VideoFunnelVslScript",thumbnail:"https://vz-a31756cf-198.b-cdn.net/e7291055-546c-40ef-8ac3-de21c413add5/thumbnail.jpg",link16x9:"https://vz-a31756cf-198.b-cdn.net/e7291055-546c-40ef-8ac3-de21c413add5/playlist.m3u8",link4x5:"",link1x1:"",typeVideo:"application/vnd.apple.mpegurl",colorMain:"78, 75, 133, 0",textModalFirstTop:"Seu vídeo já começou",textModalFirstBotton:"Clique para ouvir",textModalContinueTop:"Você já começou a assistir esse video",textModalContinueRight:"Continuar assistindo?",textModalContinueLeft:"Assistir do início?",backgroundColor:"78, 75, 133, 0",heightLineFake:"5",enableControlsBar:"false",enableFakeBar:"true",fullScreenEnable:!1,getErrorFunction:this.errorInstance,alpha:2.3,validadSessionInDays:15,time_btn:1596,prod:"bb"},yt:{instanceClassName:"YoutubeVslScript",prod:"bb",url:"1R4DKNSwh1Y",time_btn:1596}},upsell01:{vf:{instanceClassName:"VideoFunnelVslScript",thumbnail:"https://vz-a31756cf-198.b-cdn.net/b7b81bce-00d4-4a39-af58-e15e52d77451/thumbnail_895f39b5.jpg",link16x9:"https://vz-a31756cf-198.b-cdn.net/b7b81bce-00d4-4a39-af58-e15e52d77451/playlist.m3u8",link4x5:"",link1x1:"",typeVideo:"application/vnd.apple.mpegurl",colorMain:"78, 75, 133, 0",textModalFirstTop:"Recado importante",textModalFirstBotton:"Clique para ouvir",textModalContinueTop:"Você já começou a assistir esse video",textModalContinueRight:"Continuar assistindo?",textModalContinueLeft:"Assistir do início?",backgroundColor:"78, 75, 133, 0",heightLineFake:"5",enableControlsBar:"false",enableFakeBar:"true",fullScreenEnable:!1,getErrorFunction:this.errorInstance,alpha:2.3,validadSessionInDays:15,time_btn:285,prod:"tr",upsell:!0},yt:{instanceClassName:"YoutubeVslScript",prod:"tr",url:"iAcqSJcLdtA",time_btn:285}}},livro:{vsl01:{vf:{instanceClassName:"VideoFunnelVslScript",thumbnail:"https://vz-a31756cf-198.b-cdn.net/e7291055-546c-40ef-8ac3-de21c413add5/thumbnail.jpg",link16x9:"https://vz-a31756cf-198.b-cdn.net/e7291055-546c-40ef-8ac3-de21c413add5/playlist.m3u8",link4x5:"",link1x1:"",typeVideo:"application/vnd.apple.mpegurl",colorMain:"78, 75, 133, 0",textModalFirstTop:"Seu vídeo já começou",textModalFirstBotton:"Clique para ouvir",textModalContinueTop:"Você já começou a assistir esse video",textModalContinueRight:"Continuar assistindo?",textModalContinueLeft:"Assistir do início?",backgroundColor:"78, 75, 133, 0",heightLineFake:"5",enableControlsBar:"false",enableFakeBar:"true",fullScreenEnable:!1,getErrorFunction:this.errorInstance,alpha:2.3,validadSessionInDays:15,time_btn:1596,prod:"livro"},yt:{instanceClassName:"YoutubeVslScript",prod:"livro",url:"1R4DKNSwh1Y",time_btn:1596}}}}}))},562:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(){o=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),c=new C(r||[]);return i(a,"_invoke",{value:k(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var p={};function v(){}function y(){}function m(){}var h={};s(h,c,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(T([])));_&&_!==t&&n.call(_,c)&&(h=_);var g=m.prototype=v.prototype=Object.create(h);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function o(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==r(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,c,u)}),(function(e){o("throw",e,c,u)})):t.resolve(d).then((function(e){s.value=e,c(s)}),(function(e){return o("throw",e,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return a=a?a.then(r,r):r()}})}function k(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=f(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function T(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return y.prototype=m,i(g,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(P.prototype),s(P.prototype,u,(function(){return this})),e.AsyncIterator=P,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new P(d(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(g),s(g,l,"Generator"),s(g,c,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function i(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}n.d(t,{T:()=>u});var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r,u;return t=e,n=[{key:"getProduct",value:function(){return window.location.href.includes("bb")?"bb":window.location.href.includes("tr")?"tr":window.location.href.includes("livro")?"livro":""}},{key:"getRede",value:function(){return window.location.href.includes("/criteo/")?"criteo":window.location.href.includes("/mt/")?"mt":window.location.href.includes("/ga/")?"ga":window.location.href.includes("/kwai/")?"kwai":window.location.href.includes("/mgid/")?"mgid":window.location.href.includes("/native/")?"native":window.location.href.includes("/ob/")?"ob":window.location.href.includes("/pin/")?"pin":window.location.href.includes("/prog/")?"prog":window.location.href.includes("/rev/")?"rev":window.location.href.includes("/sb/")?"sb":window.location.href.includes("/sch/")?"sch":window.location.href.includes("/tab/")?"tab":window.location.href.includes("/uol/")?"uol":window.location.href.includes("/yt/")?"yt":window.location.href.includes("/zms/")?"zms":""}},{key:"getVSL",value:function(){return window.location.href.includes("/vsl01")?"vsl01":window.location.href.includes("/vsl02")?"vsl02":window.location.href.includes("/vsl03")?"vsl03":window.location.href.includes("/upsell")?"upsell01":""}},{key:"getPlayer",value:function(){switch(document.querySelector("input[name=vslp]").value){case"yt":default:return"yt";case"vf":return"vf";case"vt":return"vt"}}},{key:"createCookie",value:function(e,t,n){var r;if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),r="; expires="+o.toGMTString()}else r="";document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+"; path=/;domain=."+window.location.hostname}},{key:"createCookieHours",value:function(e,t,n){var r;if(n){var o=new Date;o.setTime(o.getTime()+60*n*60*1e3),r="; expires="+o.toGMTString()}else r="";document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+"; path=/;domain=."+window.location.hostname}},{key:"readCookie",value:function(e){var t,n=encodeURIComponent(e)+"=",r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}(document.cookie.split(";"));try{for(r.s();!(t=r.n()).done;){for(var o=t.value;" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(n))return decodeURIComponent(o.substring(n.length,o.length))}}catch(e){r.e(e)}finally{r.f()}return null}},{key:"dnWarning",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Crítico",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.location.href,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:JSON.stringify(window.navigator.userAgent),i=encodeURI("https://doutornature.com/alert.php?s=dn999&tipo="+t+"&origem="+r+"&mensagem="+e+"&useragent="+o+"&obs="+n);fetch(i)}},{key:"traitBunnyErrors",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null;return null!==e.getVideoPlaybackQuality&&(n="\n  corruptedVideoFrames:"+e.getVideoPlaybackQuality.corruptedVideoFrames+"\n  creationTime: "+e.getVideoPlaybackQuality.creationTime+"\n  droppedVideoFrames: "+e.getVideoPlaybackQuality.droppedVideoFrames+"\n  totalVideoFrames: "+e.getVideoPlaybackQuality.totalVideoFrames),"\n *- currentTime*: "+e.currentTime+"\n *- bufferedPercent*: "+e.bufferedPercent+"\n *- currentType*: "+e.currentType+"\n *- canPlayType*: "+e.canPlayType+"\n *- currentSrc*: "+e.currentSrc+"\n *-playbackQuality*: "+n+"\n *-IP*: "+t}},{key:"getIp",value:(r=o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.ipify.org?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.ip);case 7:case"end":return e.stop()}}),e)})),u=function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function c(e){i(a,n,o,c,u,"next",e)}function u(e){i(a,n,o,c,u,"throw",e)}c(void 0)}))},function(){return u.apply(this,arguments)})},{key:"sendErrorWithIP",value:function(e,t){var n=this;this.getIp().then((function(r){n.dnWarning(e,"Critico",n.traitBunnyErrors(t,r))})).catch((function(){n.dnWarning(e,"Critico",n.traitBunnyErrors(t))}))}}],n&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},91:e=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=r((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.videoFunnel={css:"https://cdn.videofunnel.com.br/video-js.min.css",videojs:"https://cdn.videofunnel.com.br/video.min.js",vfMin:"https://cdn.videofunnel.com.br/video-funnel.min.js"}}));e.exports=o},358:(e,t,n)=>{"use strict";n.d(t,{U:()=>u});var r=n(562),o=n(91),i=n.n(o);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.video_config=t,this.product=t.prod}var t,n;return t=e,n=[{key:"init",value:function(){var e=this,t=new(i()),n=this.video_config;this.createElementVfDiv("#player",n.thumbnail);var r=document.createElement("link");r.href=t.videoFunnel.css,r.rel="stylesheet",r.async=!1,document.head.appendChild(r);var o=document.createElement("script");o.src=t.videoFunnel.videojs,o.async=!1,document.head.appendChild(o);var a=document.createElement("script");a.src=t.videoFunnel.vfMin,a.async=!1,document.head.appendChild(a),this.createElementVfPlayer("#player",n.thumbnail);var c=setInterval((function(){if("function"==typeof vfunnel_init){vfunnel_init("vfunnel_video",n),clearInterval(c);var t=vFunnel;e.vslControl(t,e.product,n.time_btn,n.upsell)}}),10)}},{key:"vslControl",value:function(e,t,n){var o,i=this,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=new r.T,u=e&&e.currentTime?e.currentTime():0,l=c.readCookie(t+"_vsl_exibiu_botao_proximo"),s=n,d=!1;if("S"===l||u>s)return this.abrirBotaoProximo(a),d=!0,c.createCookie(t+"_vsl_exibiu_botao_proximo","S",60),void c.createCookieHours("cktp_af_trust_client","MTI=",3);o||(o=setInterval((function(){var n=e&&e.currentTime?e.currentTime():0;console.log(n),n>s&&!d&&(i.abrirBotaoProximo(a),d=!0,c.createCookie(t+"_vsl_exibiu_botao_proximo","S",60),c.createCookieHours("cktp_af_trust_client","MTI=",3),clearInterval(o))}),5e3))}},{key:"createElementVfPlayer",value:function(e,t){var n=document.querySelector(e),r=document.createElement("video");r.id="vfunnel_video",r.classList.add("video-js"),r.classList.add("vjs-16-9"),r.setAttribute("playsinline","true"),r.setAttribute("poster",t),n.innerHTML="",n.appendChild(r)}},{key:"abrirBotaoProximo",value:function(e){e?(document.getElementById("product").style.display="block",document.getElementById("countdown").style.display="block"):document.querySelector(".btnProximoPasso").style.display="flex"}},{key:"createElementVfDiv",value:function(e,t){var n=document.querySelector(e),r=document.createElement("img");r.src=t,r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.objectFit="cover",r.style.dislay="block",n.appendChild(r)}},{key:"clearPlayerContainer",value:function(){var e=document.getElementById("divOverPlayerYoutubeCabecalho"),t=document.getElementById("divOverPlayerYoutubeRodape");e.parentNode.removeChild(e),t.parentNode.removeChild(t),document.querySelectorAll(".embed-responsive").forEach((function(e){e.className=""}))}}],n&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},894:(e,t,n)=>{"use strict";n.d(t,{x:()=>a});var r=n(562);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.video_config={url:t.url,time_button:t.time_btn,time_player:0},this.product=t.prod}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this.video_config.url,t=this.product,n=this.video_config.time_button;if("undefined"==typeof YT||void 0===YT.Player){var o=document.createElement("script");o.src="https://www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}function a(){document.querySelector(".btnProximoPasso").style.display="flex"}window.onYouTubePlayerAPIReady=function(){!function(e,t,n){var o,i=new r.T,c=e&&e.getCurrentTime?e.getCurrentTime():0,u=i.readCookie(t+"_vsl_exibiu_botao_proximo"),l=n,s=!1;if("S"===u||c>l)return a(),s=!0,i.createCookie(t+"_vsl_exibiu_botao_proximo","S",60),void i.createCookieHours("cktp_af_trust_client","MTI=",3);o||(o=setInterval((function(){(e&&e.getCurrentTime?e.getCurrentTime():0)>l&&!s&&(a(),s=!0,i.createCookie(t+"_vsl_exibiu_botao_proximo","S",60),i.createCookieHours("cktp_af_trust_client","MTI=",3),clearInterval(o))}),5e3))}(new YT.Player("player",{height:"100%",width:"100%",videoId:e,playerVars:{autoplay:0,controls:0,rel:0,showinfo:1,modestbranding:0},events:{onReady:function(e){e.target.setVolume(100)}}}),t,n)}}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{"use strict";var _config_BaseFunctions_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(562),_player_YoutubeVslScript_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(894),_player_VideoFunnelScript_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(358),_config_BaseData_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(184),baseFunctions=new _config_BaseFunctions_js__WEBPACK_IMPORTED_MODULE_1__.T,dataProducts=new _config_BaseData_js__WEBPACK_IMPORTED_MODULE_2__.p(dnErrorVf),Products=dataProducts.productsData,productPlayer=Products[baseFunctions.getProduct()][baseFunctions.getVSL()];function clearElementVfPlayer(){var e=document.getElementById("vfunnel_video");e.parentNode.removeChild(e)}function createPlayerContainer(){var e=document.createElement("div");e.id="divOverPlayerYoutubeCabecalho";var t=document.createElement("div");t.id="divOverPlayerYoutubeRodape";var n=document.getElementById("player");n.parentElement.parentElement.classList.add("embed-responsive","embed-responsive-16by9"),n.parentNode.insertBefore(t,n),n.parentNode.insertBefore(e,n)}function dnErrorVf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};clearElementVfPlayer(),createPlayerContainer(),document.querySelector("input[name=vslp]").value="yt",new _player_YoutubeVslScript_js__WEBPACK_IMPORTED_MODULE_3__.x(productPlayer[baseFunctions.getPlayer()||"yt"]).init();var n=new _config_BaseFunctions_js__WEBPACK_IMPORTED_MODULE_1__.T,r="";e&&e.code&&e.message&&(r=" - ERROR: "+e.code+" - MESSAGE: "+e.message),n.sendErrorWithIP("[Video Funnel]"+r,t)}function waitForFunction(fcn,callback){"function"==eval("typeof "+fcn)?callback():setTimeout((function(){waitForFunction(fcn,callback)}),400)}function eventFallback(){waitForFunction("gtag",(function(){gtag("event","vsl_fallback",{event_category:"VSL_"+vslpInputpv,event_label:_product_sigla})}))}productPlayer||baseFunctions.dnWarning("[ScriptVSL][main.js] Falha ao encontrar produto "),productPlayer[baseFunctions.getPlayer()]&&0!=Object.keys(productPlayer[baseFunctions.getPlayer()]).length||baseFunctions.dnWarning("[ScriptVSL][main.js] Falha ao encontrar configuracoes do player "),document.addEventListener("DOMContentLoaded",(function(){"yt"==baseFunctions.getPlayer()?new _player_YoutubeVslScript_js__WEBPACK_IMPORTED_MODULE_3__.x(productPlayer[baseFunctions.getPlayer()]).init():"vf"==baseFunctions.getPlayer()?new _player_VideoFunnelScript_js__WEBPACK_IMPORTED_MODULE_0__.U(productPlayer[baseFunctions.getPlayer()]).init():"vt"==baseFunctions.getPlayer()&&new VturbVslScript(productPlayer[baseFunctions.getPlayer()]).init()}))})()})();