(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chain"],{"11e9":function(t,e,a){var n=a("52a7"),s=a("4630"),o=a("6821"),i=a("6a99"),r=a("69a8"),c=a("c69a"),u=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?u:function(t,e){if(t=o(t),e=i(e,!0),c)try{return u(t,e)}catch(a){}if(r(t,e))return s(!n.f.call(t,e),t[e])}},"16fe":function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={state:{websocket:null,connected:!1},mutations:{setConnected:function(t){t.connected=!0},initWebsocket:function(t,e){var a=e.url,n=e.onmessage,s=e.onopen;t.websocket=new WebSocket(a),t.websocket.onopen=s,t.websocket.onmessage=n},sendWebsocket:function(t,e){t.websocket.send(e)}}}},"2a27":function(t,e,a){"use strict";a.r(e);var n=a("be94"),s=a("16fe"),o=Object(n["a"])({},s["a"].state,{data:[{index:0,data:"aaa",status:"stored",timeoutId:null},{index:1,data:"aaa",status:"stored",timeoutId:null},{index:2,data:"aaa",status:"stored",timeoutId:null},{index:3,data:"aaa",status:"stored",timeoutId:null},{index:4,data:"aaa",status:"stored",timeoutId:null}],responseData:[],nextIndex:0}),i={initWebsocket:function(t,e){var a=t.commit,n=t.dispatch;a("initWebsocket",{url:e,onopen:function(){a("setConnected")},onmessage:function(t){var e=JSON.parse(t.data),a=e.index,s=e.data;n("setData",{index:a,payload:{status:"success",response:s}}),n("loadData",{index:a,response:s})}})},websocketHandler:function(t,e){var a=t.commit;a("sendWebsocket",JSON.stringify(e))},setData:function(t,e){var a=t.commit,n=e.index,s=e.payload;a("setData",{index:n,payload:s})},refresh:function(t){var e=t.commit;e("refresh")},loadData:function(t,e){var a=t.commit,n=t.state,s=e.index,o=e.response,i=n.nextIndex;if(i==s&&"complete"!==n.data[i].status){a("pushResponseData",{index:s,response:o}),a("setData",{index:s,payload:{status:"complete"}}),i=n.nextIndex;while(n.data[i]&&"success"===n.data[i].status)a("pushResponseData",{index:i,response:n.data[i].response}),a("setData",{index:i,payload:{status:"complete"}}),i=n.nextIndex}}},r=Object(n["a"])({},s["a"].mutations,{pushResponseData:function(t,e){var a=e.index,n=e.response;t.responseData.push({index:a,response:n}),t.nextIndex+=1},setData:function(t,e){var a=e.index,s=e.payload;"success"===s.status&&clearTimeout(t.data[a].timeoutId),t.data[a]=Object(n["a"])({},t.data[a],s)},refresh:function(t){t.responseData=[],t.data=[{index:0,data:"aaa",status:"stored",timeoutId:null},{index:1,data:"aaa",status:"stored",timeoutId:null},{index:2,data:"aaa",status:"stored",timeoutId:null},{index:3,data:"aaa",status:"stored",timeoutId:null},{index:4,data:"aaa",status:"stored",timeoutId:null}],t.nextIndex=0}});e["default"]={namespaced:!0,state:o,actions:i,mutations:r}},4032:function(t,e,a){"use strict";var n=a("a49f"),s=a.n(n);s.a},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,a){var n=a("d3f4"),s=a("8b97").set;t.exports=function(t,e,a){var o,i=e.constructor;return i!==a&&"function"==typeof i&&(o=i.prototype)!==a.prototype&&n(o)&&s&&s(t,o),t}},"8b97":function(t,e,a){var n=a("d3f4"),s=a("cb7c"),o=function(t,e){if(s(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,a){return o(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:o}},9093:function(t,e,a){var n=a("ce10"),s=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,s)}},a49f:function(t,e,a){},aa77:function(t,e,a){var n=a("5ca1"),s=a("be13"),o=a("79e5"),i=a("fdef"),r="["+i+"]",c="​",u=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),f=function(t,e,a){var s={},r=o(function(){return!!i[t]()||c[t]()!=c}),u=s[t]=r?e(l):i[t];a&&(s[a]=u),n(n.P+n.F*r,"String",s)},l=f.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(d,"")),t};t.exports=f},ac6a:function(t,e,a){for(var n=a("cadf"),s=a("0d58"),o=a("2aba"),i=a("7726"),r=a("32e9"),c=a("84f2"),u=a("2b4c"),d=u("iterator"),f=u("toStringTag"),l=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=s(p),m=0;m<b.length;m++){var h,x=b[m],y=p[x],v=i[x],_=v&&v.prototype;if(_&&(_[d]||r(_,d,l),_[f]||r(_,f,x),c[x]=l,y))for(h in n)_[h]||o(_,h,n[h],!0)}},b47c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chain"},[t._l(t.responseData,function(e){return[a("div",{key:e.index,staticClass:"chain__wrapper"},[a("div",{staticClass:"chain__item"},[t._v(t._s(e.index)+" "+t._s(e.response))])])]}),a("button",{staticClass:"chain__wrapper chain__btn",attrs:{disabled:!t.connected},on:{click:function(e){t.sendData(t.data,t.websocketHandler,t.timeout)}}},[t._v("\n\t\tSend Data to websockets\n\t")]),a("button",{staticClass:"chain__wrapper chain__btn",on:{click:function(e){t.sendData(t.data,t.randomHandler,t.timeout)}}},[t._v("\n\t\tSend Data to random handler\n\t")])],2)},s=[],o=(a("ac6a"),a("be94")),i=(a("c5f6"),a("2f62")),r={name:"TheChain",props:{timeout:{type:Number,default:1e3}},mounted:function(){this.websocket||this.initWebsocket("wss://echo.websocket.org")},computed:Object(i["c"])("chain",["data","responseData","connected","websocket"]),methods:Object(o["a"])({},Object(i["b"])("chain",["setData","loadData","refresh","initWebsocket","websocketHandler"]),{sendData:function(t,e,a){var n=this;this.refresh(),t.forEach(function(t,s){n.setData({index:t.index,payload:{status:"pending",timeoutId:setTimeout(function(){n.setData({index:t.index,payload:{status:"failed",response:"failed"}}),n.loadData({index:t.index,response:"failed"+s})},a)}}),e(t)})},randomHandler:function(t){var e=this;setTimeout(function(){e.setData({index:t.index,payload:{status:"success",response:"random"+t.index}}),e.loadData({index:t.index,response:"random"+t.index})},1e3*Math.random())}})},c=r,u=(a("4032"),a("2877")),d=Object(u["a"])(c,n,s,!1,null,null,null);d.options.__file="TheChain.vue";e["default"]=d.exports},be94:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){n(t,e,a[e])})}return t}a.d(e,"a",function(){return s})},c5f6:function(t,e,a){"use strict";var n=a("7726"),s=a("69a8"),o=a("2d95"),i=a("5dbc"),r=a("6a99"),c=a("79e5"),u=a("9093").f,d=a("11e9").f,f=a("86cc").f,l=a("aa77").trim,p="Number",b=n[p],m=b,h=b.prototype,x=o(a("2aeb")(h))==p,y="trim"in String.prototype,v=function(t){var e=r(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():l(e,3);var a,n,s,o=e.charCodeAt(0);if(43===o||45===o){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+e}for(var i,c=e.slice(2),u=0,d=c.length;u<d;u++)if(i=c.charCodeAt(u),i<48||i>s)return NaN;return parseInt(c,n)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof b&&(x?c(function(){h.valueOf.call(a)}):o(a)!=p)?i(new m(v(e)),a,b):v(e)};for(var _,I=a("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;I.length>g;g++)s(m,_=I[g])&&!s(b,_)&&f(b,_,d(m,_));b.prototype=h,h.constructor=b,a("2aba")(n,p,b)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chain.27f7300e.js.map