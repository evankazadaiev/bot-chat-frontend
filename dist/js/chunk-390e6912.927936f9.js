(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-390e6912"],{"0728":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-form"},[s("form",{attrs:{action:""}},[s("div",{staticClass:"textarea-wrap"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"Text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),s("div",{staticClass:"textarea-count-wrap"},[s("div",{staticClass:"checkbox-wrap"},[s("button",{on:{click:t.sendMessage}},[t._v("Press Enter to send")])])])])])},n=[],i={name:"ChatInput",data:function(){return{text:""}},methods:{sendMessage:function(){if(this.text.length>4){var t=(new Date).toUTCString(),e={message:this.text,timestamp:t,isBot:!1},s=this.$route.params.roomId;this.$emit("onSendMessage",e),this.$socket.client.emit("message",{roomId:s,message:e}),this.text=""}}}},o=i,r=(s("ebb8"),s("2877")),c=Object(r["a"])(o,a,n,!1,null,"1922701a",null);e["default"]=c.exports},"2eed":function(t,e,s){},ebb8:function(t,e,s){"use strict";var a=s("2eed"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-390e6912.927936f9.js.map