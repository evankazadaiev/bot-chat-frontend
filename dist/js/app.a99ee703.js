(function(e){function t(t){for(var r,c,u=t[0],i=t[1],f=t[2],d=0,s=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(s.length)s.shift()();return a.push.apply(a,f||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b380b":"896e2fd5","chunk-7baf2803":"c1da0a7b","chunk-2d237e95":"29af631f","chunk-6ccc9368":"90ed2c7a","chunk-19b8e805":"f2bfe64f","chunk-e574c5a8":"e0f353f6","chunk-2d0ab149":"a2a13f4f","chunk-734d5598":"d0f473d4"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-7baf2803":1,"chunk-6ccc9368":1,"chunk-19b8e805":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0b380b":"31d6cfe0","chunk-7baf2803":"7a83dea3","chunk-2d237e95":"31d6cfe0","chunk-6ccc9368":"506e10d4","chunk-19b8e805":"b9a6c054","chunk-e574c5a8":"31d6cfe0","chunk-2d0ab149":"31d6cfe0","chunk-734d5598":"31d6cfe0"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var f=a[u],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){f=s[u],d=f.getAttribute("data-href");if(d===r||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],l.parentNode.removeChild(l),n(a)},l.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var s=new Error;f=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var s=0;s<f.length;s++)t(f[s]);var l=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1:function(e,t){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),c=n.n(r);c.a},6861:function(e,t,n){},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=n("f87c"),o=n("8055"),a=n.n(o),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],f=n("d4ec"),d=n("bee2"),s=n("99de"),l=n("7e84"),h=n("262e"),p=n("9ab4"),b=n("2fe1"),m=function(e){function t(){return Object(f["a"])(this,t),Object(s["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(h["a"])(t,e),Object(d["a"])(t,[{key:"beforeDestroy",value:function(){this.$socket.client.emit("disconnect")}}]),t}(r["a"]);m=p["a"]([Object(b["b"])({name:"App"})],m);var v=m,g=v,k=(n("5c0b"),n("2877")),y=Object(k["a"])(g,u,i,!1,null,null,null),O=y.exports,j=(n("d3b7"),n("8c4f"));r["a"].use(j["a"]);var w=[{path:"/",name:"chat",component:function(){return n.e("chunk-2d0b380b").then(n.bind(null,"293a"))},children:[{path:"/chat/:roomId",name:"ChatMessagesWindow",component:function(){return n.e("chunk-7baf2803").then(n.bind(null,"afc8"))}}]}],_=new j["a"]({mode:"history",routes:w}),P=_,E=(n("6861"),{VUE_APP_BOT_CHAT_URL:"https://vuejs-bot-chat-backend.herokuapp.com/"}),T=E,A=a()(T.VUE_APP_BOT_CHAT_URL);r["a"].use(c["b"],A),r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.a99ee703.js.map