(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7baf2803"],{"0aa1":function(e,t,n){"use strict";var a=n("dbc1"),r=n.n(a);r.a},"25f0":function(e,t,n){"use strict";var a=n("6eeb"),r=n("825a"),i=n("d039"),o=n("ad6d"),s="toString",c=RegExp.prototype,u=c[s],f=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(f||d)&&a(RegExp.prototype,s,(function(){var e=r(this),t=String(e.source),n=e.flags,a=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?o.call(e):n);return"/"+t+"/"+a}),{unsafe:!0})},"4df4":function(e,t,n){"use strict";var a=n("0366"),r=n("7b0b"),i=n("9bdd"),o=n("e95a"),s=n("50c4"),c=n("8418"),u=n("35a1");e.exports=function(e){var t,n,f,d,l,p,b=r(e),v="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,y=void 0!==g,m=u(b),j=0;if(y&&(g=a(g,h>2?arguments[2]:void 0,2)),void 0==m||v==Array&&o(m))for(t=s(b.length),n=new v(t);t>j;j++)p=y?g(b[j],j):b[j],c(n,j,p);else for(d=m.call(b),l=d.next,n=new v;!(f=l.call(d)).done;j++)p=y?i(d,g,[f.value,j],!0):f.value,c(n,j,p);return n.length=j,n}},"60a3":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return c}));var a=n("2b0e");n.d(t,"c",(function(){return a["a"]}));var r=n("2fe1");n.d(t,"a",(function(){return r["b"]}));var i="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function o(e,t,n){i&&(Array.isArray(e)||"function"===typeof e||"undefined"!==typeof e.type||(e.type=Reflect.getMetadata("design:type",t,n)))}function s(e){return void 0===e&&(e={}),function(t,n){o(e,t,n),Object(r["a"])((function(t,n){(t.props||(t.props={}))[n]=e}))(t,n)}}function c(e,t){void 0===t&&(t={});var n=t.deep,a=void 0!==n&&n,i=t.immediate,o=void 0!==i&&i;return Object(r["a"])((function(t,n){"object"!==typeof t.watch&&(t.watch=Object.create(null));var r=t.watch;"object"!==typeof r[e]||Array.isArray(r[e])?"undefined"===typeof r[e]&&(r[e]=[]):r[e]=[r[e]],r[e].push({handler:n,deep:a,immediate:o})}))}},"773f":function(e,t,n){"use strict";var a=n("fa7d"),r=n.n(a);r.a},8418:function(e,t,n){"use strict";var a=n("c04e"),r=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var o=a(t);o in e?r.f(e,o,i(0,n)):e[o]=n}},a630:function(e,t,n){var a=n("23e7"),r=n("4df4"),i=n("1c7e"),o=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:o},{from:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},afc8:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-block"},[n("div",{staticClass:"blocked-wrap"},[n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"chat"},[n("WithSpinner",{attrs:{condition:e.isLoading}},e._l(e.reversedMessages,(function(e,t){return n("Message",{key:t,attrs:{message:e}})})),1)],1)]),n("ChatInput",{on:{onSendMessage:e.onSendMessage}})],1)])},r=[];n("d3b7");function i(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("25f0"),n("3ca3"),n("ddb0");function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){return i(e)||o(e)||s()}var u=n("d4ec"),f=n("bee2"),d=n("99de"),l=n("7e84"),p=n("262e"),b=n("9ab4"),v=n("2b0e"),h=n("2fe1"),g=n("60a3"),y=n("f87c"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-wrapper"},[e.condition?n("Spinner"):e._t("default")],2)},j=[],O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner-overlay"},[n("div",{staticClass:"spinner-container"})])}],S={name:"Spinner"},k=S,A=(n("0aa1"),n("2877")),M=Object(A["a"])(k,O,w,!1,null,"f00efe44",null),_=M.exports,C=function(e){function t(){return Object(u["a"])(this,t),Object(d["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(p["a"])(t,e),t}(g["c"]);b["a"]([Object(g["b"])({required:!0})],C.prototype,"condition",void 0),C=b["a"]([Object(g["a"])({name:"WithSpinner",components:{Spinner:_}})],C);var x=C,R=x,E=(n("773f"),Object(A["a"])(R,m,j,!1,null,"3674fdd7",null)),L=E.exports,$=function(){return n.e("chunk-e574c5a8").then(n.bind(null,"e9a4"))},J=function(){return n.e("chunk-19b8e805").then(n.bind(null,"0728"))},W=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(d["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.messages=[],e.isLoading=!0,e}return Object(p["a"])(t,e),Object(f["a"])(t,[{key:"onRoutePathChanged",value:function(){this.isLoading=!0}},{key:"onSendMessage",value:function(e){this.messages.push(e)}},{key:"onJoinRoom",value:function(e){this.isLoading=!0,this.messages=e,this.isLoading=!1}},{key:"onMessage",value:function(e){this.messages.push(e)}},{key:"reversedMessages",get:function(){var e=c(this.messages);return e.reverse()}}]),t}(v["a"]);b["a"]([Object(g["d"])("$route.path")],W.prototype,"onRoutePathChanged",null),b["a"]([Object(y["a"])("join_room")],W.prototype,"onJoinRoom",null),b["a"]([Object(y["a"])("message")],W.prototype,"onMessage",null),W=b["a"]([Object(h["b"])({name:"MessagingWindow",components:{Message:$,ChatInput:J,WithSpinner:L}})],W);var I=W,P=I,q=Object(A["a"])(P,a,r,!1,null,"752439b8",null);t["default"]=q.exports},dbc1:function(e,t,n){},fa7d:function(e,t,n){}}]);
//# sourceMappingURL=chunk-7baf2803.c1da0a7b.js.map