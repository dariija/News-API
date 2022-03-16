(()=>{"use strict";var n={669:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1.5rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    box-shadow: 0px 0px 20px 2px rgb(34 60 80 / 20%);\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=r},501:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,".sources {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n    background-color: #f7fafb;\n    border: 2px solid #6b99ab;\n    \n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n   \n    color: #224878;\n    transition: 0.25s;\n    cursor: pointer;\n\n    border-radius: 7px;\n    box-shadow: 0px 0px 13px -7px #1b506e;\n}\n\n.source__item:hover, .source__item:focus {\n    border-color: #2991c5;\n    color: #0088cb;\n    box-shadow: 0 0.5em 0.5em -0.4em #2382af;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n\n/* Scrollbar */\n\n.sources::-webkit-scrollbar {\n    height: 6px;\n    width: 6px;\n\tbackground-color: #F5F5F5;\n}\n\n.sources::-webkit-scrollbar-thumb {\n\tborder-radius: 10px;\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n\tbackground-color: #555;\n}\n\n.sources::-webkit-scrollbar-track {\n    background-color: #f9f9fd;\n\t-webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);\n\tborder-radius: 10px;\n}\n",""]);const i=r},767:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(645),r=t.n(o),i=t(667),s=t.n(i),a=t(89),c=t(586),d=r()((function(n){return n[1]})),l=s()(a),u=s()(c);d.push([n.id,"* {\n    box-sizing: border-box;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\n.body {\n    margin: 0 auto;\n    min-height: 100vh;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    color: #fff;\n    background: #f3f0edc2;\n    font-family: sans-serif;\n}\n\n.container {\n    width: 100%;\n    padding: 0 30px;\n}\n\n.header {\n    padding: 10px 0;\n    background-color: #cbc7c180;\n}\n\n.header__title {\n    padding: 0;\n\n    font-size: 40px;\n    font-weight: 800;\n    color: #314e72;\n}\n\n.main {\n    margin-bottom: auto;\n}\n\n.footer {\n    height: 70px;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    box-shadow: 0px 0px 13px 3px rgb(34 60 80 / 15%);\n}\n\n.footer__content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\n\n.copyright:before {\n    content: '©';\n}\n\n.link,\n.link:visited {\n    outline: none;\n    text-decoration: none;\n    color: #444;\n}\n\n.link:hover {\n    color: #555;\n}\n\n.rsschool-logo {\n    background: url("+l+") no-repeat;\n    width: 55px;\n    height: 25px;\n    background-size: contain;\n}\n\n/* Scrollbar */\n\n.body::-webkit-scrollbar {\n\twidth: 12px;\n\tbackground-color: #F5F5F5;\n}\n\n.body::-webkit-scrollbar-thumb {\n\tborder-radius: 10px;\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n\tbackground-color: #555;\n}\n\n.body::-webkit-scrollbar-track {\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\t/* border-radius: 10px; */\n\tbackground-color: #F5F5F5;\n}\n\n/* Up Button */\n\n.up-button {\n    width: 60px;\n    height: 60px;\n\n    position: fixed;\n    bottom: 60px;\n    left: 20px;\n\n    background-color: #3f4550;\n    border-radius: 50px;\n    box-shadow: 0px 0px 20px -6px #1b506e;\n    z-index: 100;\n\n    opacity: 0;\n\n    transition: 0.2s linear;\n    cursor: pointer;\n}\n\n.up-button:hover {\n    background-color: #3b63ac;\n    box-shadow: 0px 0px 16px 0px #545466;\n}\n\n.arrow-icon {\n    width: 60px;\n    height: 60px;\n\n    background: url("+u+") no-repeat;\n    background-size: 40px 40px;\n    background-position: 50% 50%;\n}\n\n/* Effects */\n\n.hide {\n    opacity: 0;\n    visibility: hidden;\n}\n\n.show {\n    opacity: 1;\n    visibility: visible;\n}\n\n/* Media Queries */\n\n@media (max-width: 1400px) {\n\n    .header__title {\n        margin: 20px 0 15px;\n    }\n\n    .sources {\n        height: 100px;\n    }\n\n}\n\n@media (max-width: 1023px) {\n\n    .sources {\n        height: 80px;\n    }\n\n}\n\n@media (max-width: 767px) {\n\n    .container {\n        padding: 0 10px;\n    }\n\n    .header__title {\n        margin: 10px 0;\n\n        font-size: 24px;\n        text-align: center;\n    }\n    \n    .source__item {\n        padding: 0.5em 1em;\n    }\n    \n    .footer {\n        height: 50px;\n    }\n\n}",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],c=e.base?a[0]+e.base:a[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:f(p,e),references:1}),o.push(l)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var s=r(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,m=0;function f(n,e){var t,o,r;if(e.singleton){var i=m++;t=h||(h=c(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=c(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=s(t[o]);i[r].references--}for(var c=a(n,e),d=0;d<t.length;d++){var l=s(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}},586:(n,e,t)=>{n.exports=t.p+"assets/ad3ee3aec6853e41f807.svg"},89:(n,e,t)=>{n.exports=t.p+"assets/ad178c0df28bc133be34.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n;!function(n){n[n.Unauthorized=401]="Unauthorized",n[n.NotFound=404]="NotFound"}(n||(n={}));const e=n;var o=t(379),r=t.n(o),i=t(669);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var s=t(501);r()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;class a{constructor(){this.news=new class{draw(n){const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.createDocumentFragment(),o=document.querySelector("#newsItemTemp");e.forEach(((n,e)=>{const r=o.content.cloneNode(!0),i=r.querySelector(".news__item");e%2&&i.classList.add("alt"),r.querySelector(".news__meta-photo").style.backgroundImage=`url(${n.urlToImage||"img/news_placeholder.jpg"})`,r.querySelector(".news__meta-author").textContent=n.author||n.source.name,r.querySelector(".news__meta-author").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),r.querySelector(".news__description-title").textContent=n.title,r.querySelector(".news__description-source").textContent=n.source.name,r.querySelector(".news__description-content").textContent=n.description,r.querySelector(".news__read-more a").setAttribute("href",n.url),t.append(r)}));const r=document.querySelector(".news");r.innerHTML="",r.appendChild(t)}},this.sources=new class{draw(n){const e=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");n.forEach((n=>{const o=t.content.cloneNode(!0);o.querySelector(".source__item-name").textContent=n.name,o.querySelector(".source__item").setAttribute("data-source-id",n.id),e.append(o)})),document.querySelector(".sources").append(e)}}}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)}drawUpButton(){(new class{constructor(){this.container=document.createElement("div")}createUpButton(){this.container.classList.add("up-button","hide");const n=document.createElement("div");n.classList.add("arrow-icon"),this.container.append(n),document.querySelector("body").append(this.container),this.container.addEventListener("click",(()=>{document.documentElement.scrollTop=0})),window.addEventListener("scroll",(()=>{window.pageYOffset>200&&(this.container.classList.remove("hide"),this.container.classList.add("show")),window.pageYOffset<200&&(this.container.classList.add("hide"),this.container.classList.remove("show"))}))}}).createUpButton()}}var c=t(767);r()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,(new class{constructor(){this.controller=new class extends class extends class{constructor(n,e){this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(n){if(!n.ok)throw(e.Unauthorized||e.NotFound)&&console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const t=Object.assign(Object.assign({},this.options),n);let o=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{o+=`${n}=${t[n]}&`})),o.slice(0,-1)}load(n,e,t,o={}){fetch(this.makeUrl(o,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}}{constructor(){super("https://nodenews.herokuapp.com/",{apiKey:"ae515d06bbfd46d7bfdc2197d73d14ce"})}}{getSources(n){super.getResp({endpoint:"sources"},n)}getNews(n,e){let t=n.target;const o=n.currentTarget;for(;t!==o;){if(t.classList.contains("source__item")){const n=t.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==n&&(o.setAttribute("data-source",n),super.getResp({endpoint:"everything",options:{sources:n}},e)))}t=t.parentNode}}},this.view=new a}start(){document.querySelector(".sources").addEventListener("click",(n=>this.controller.getNews(n,(n=>this.view.drawNews(n))))),this.controller.getSources((n=>this.view.drawSources(n))),this.view.drawUpButton()}}).start()})()})();