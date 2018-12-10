(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calculation"],{"02d1":function(t,r,n){"use strict";var e=n("c829"),a=n.n(e);a.a},"05e0":function(t,r,n){},"0a3a":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"calculation"},[n("div",{staticClass:"calculation__parts"},[t._l(t.calculation,function(r){return["fraction"===r.type?n("fraction",{key:r.index,staticClass:"calculation__part",attrs:{last:r.index===t.calculation.length-1,fraction:r}}):n("sign",{key:r.index,staticClass:"calculation__part",attrs:{"calculation-part":r}})]}),n("result",{attrs:{result:t.result}})],2),n("div",{staticClass:"calculation__buttons"},[n("button",{staticClass:"calculation__btn",on:{click:t.addCalculationPart}},[t._v("Add fraction")]),n("button",{staticClass:"calculation__btn",on:{click:t.refresh}},[t._v("Refresh")])])])},a=[],i=n("2f62"),o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"fraction"},[t.last?t._e():n("div",{staticClass:"fraction__brace fraction__brace_left",class:{fraction__brace_active:"left"===t.fraction.brace,fraction__brace_invisible:"right"===t.fraction.brace,fraction__brace_invalid:t.invalid.brace},on:{click:function(r){t.toggleBrace({index:t.fraction.index,value:"left"})}}},[t._v("\n\t\t(\n\t")]),n("div",{staticClass:"fraction__numbers"},[n("input",{staticClass:"fraction__input",class:{fraction__input_invalid:t.invalid.numerator},attrs:{type:"text"},domProps:{value:t.fraction.numerator},on:{input:function(r){return t.onNumberChange({event:r,prop:"numerator",index:t.fraction.index})}}}),n("div",{staticClass:"fraction__divider"}),n("input",{staticClass:"fraction__input",class:{fraction__input_invalid:t.invalid.denominator},attrs:{type:"text"},domProps:{value:t.fraction.denominator},on:{input:function(r){return t.onNumberChange({event:r,prop:"denominator",index:t.fraction.index})}}})]),0!==t.fraction.index?n("div",{staticClass:"fraction__brace fraction__brace_right",class:{fraction__brace_active:"right"===t.fraction.brace,fraction__brace_invisible:"left"===t.fraction.brace,fraction__brace_invalid:t.invalid.brace},on:{click:function(r){t.toggleBrace({index:t.fraction.index,value:"right"})}}},[t._v("\n\t\t)\n\t")]):t._e()])},c=[],u=(n("20d6"),n("456d"),n("ac6a"),n("be94")),s=(n("cadf"),n("551c"),n("097d"),{name:"Fraction",props:{fraction:{type:Object,required:!0},last:{type:Boolean}},computed:Object(u["a"])({},Object(i["c"])("calculation",["errors"]),{invalid:function(){var t=this,r={};return Object.keys(this.errors).forEach(function(n){var e=-1!==t.errors[n].findIndex(function(r){return r===t.fraction.index});r[n]=e}),r}}),methods:Object(i["b"])("calculation",["onNumberChange","toggleBrace"])}),l=s,f=(n("2417"),n("2877")),d=Object(f["a"])(l,o,c,!1,null,null,null);d.options.__file="Fraction.vue";var p=d.exports,v=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("input",{staticClass:"sign",class:{sign_invalid:t.invalid},attrs:{type:"text"},domProps:{value:t.calculationPart.sign},on:{input:function(r){return t.onSignChange({event:r,prop:"sign",index:t.calculationPart.index})}}})},b=[],m={name:"Sign",props:{calculationPart:{type:Object,required:!0}},computed:Object(u["a"])({},Object(i["c"])("calculation",["errors"]),{invalid:function(){var t=this;return-1!==this.errors.sign.findIndex(function(r){return r===t.calculationPart.index})}}),methods:Object(i["b"])("calculation",["onSignChange"])},g=m,_=(n("02d1"),Object(f["a"])(g,v,b,!1,null,null,null));_.options.__file="Sign.vue";var h=_.exports,x=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"result"},[n("div",{staticClass:"result__number"},[t._v(t._s(t.result.numerator))]),n("div",{staticClass:"result__divider"}),n("div",{staticClass:"result__number"},[t._v(t._s(t.result.denominator))])])},y=[],O={name:"Result",props:{result:{type:Object}}},C=O,E=(n("df99"),Object(f["a"])(C,x,y,!1,null,null,null));E.options.__file="Result.vue";var j=E.exports,P={name:"TheCalculation",components:{Fraction:p,Sign:h,Result:j},computed:Object(i["c"])("calculation",["result","calculation"]),methods:Object(i["b"])("calculation",["addCalculationPart","refresh"])},S=P,A=(n("146d"),Object(f["a"])(S,e,a,!1,null,null,null));A.options.__file="TheCalculation.vue";r["default"]=A.exports},"0a49":function(t,r,n){var e=n("9b43"),a=n("626a"),i=n("4bf8"),o=n("9def"),c=n("cd1c");t.exports=function(t,r){var n=1==t,u=2==t,s=3==t,l=4==t,f=6==t,d=5==t||f,p=r||c;return function(r,c,v){for(var b,m,g=i(r),_=a(g),h=e(c,v,3),x=o(_.length),y=0,O=n?p(r,x):u?p(r,0):void 0;x>y;y++)if((d||y in _)&&(b=_[y],m=h(b,y,g),t))if(n)O[y]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return y;case 2:O.push(b)}else if(l)return!1;return f?-1:s||l?l:O}}},1169:function(t,r,n){var e=n("2d95");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"11e9":function(t,r,n){var e=n("52a7"),a=n("4630"),i=n("6821"),o=n("6a99"),c=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;r.f=n("9e1e")?s:function(t,r){if(t=i(t),r=o(r,!0),u)try{return s(t,r)}catch(n){}if(c(t,r))return a(!e.f.call(t,r),t[r])}},"146d":function(t,r,n){"use strict";var e=n("05e0"),a=n.n(e);a.a},"20d6":function(t,r,n){"use strict";var e=n("5ca1"),a=n("0a49")(6),i="findIndex",o=!0;i in[]&&Array(1)[i](function(){o=!1}),e(e.P+e.F*o,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},2417:function(t,r,n){"use strict";var e=n("a648"),a=n.n(e);a.a},"2f21":function(t,r,n){"use strict";var e=n("79e5");t.exports=function(t,r){return!!t&&e(function(){r?t.call(null,function(){},1):t.call(null)})}},"456d":function(t,r,n){var e=n("4bf8"),a=n("0d58");n("5eda")("keys",function(){return function(t){return a(e(t))}})},"52a7":function(t,r){r.f={}.propertyIsEnumerable},"55dd":function(t,r,n){"use strict";var e=n("5ca1"),a=n("d8e8"),i=n("4bf8"),o=n("79e5"),c=[].sort,u=[1,2,3];e(e.P+e.F*(o(function(){u.sort(void 0)})||!o(function(){u.sort(null)})||!n("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),a(t))}})},"5dbc":function(t,r,n){var e=n("d3f4"),a=n("8b97").set;t.exports=function(t,r,n){var i,o=r.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&e(i)&&a&&a(t,i),t}},"5eda":function(t,r,n){var e=n("5ca1"),a=n("8378"),i=n("79e5");t.exports=function(t,r){var n=(a.Object||{})[t]||Object[t],o={};o[t]=r(n),e(e.S+e.F*i(function(){n(1)}),"Object",o)}},"7cdf":function(t,r,n){var e=n("5ca1");e(e.S,"Number",{isInteger:n("9c12")})},"8b97":function(t,r,n){var e=n("d3f4"),a=n("cb7c"),i=function(t,r){if(a(t),!e(r)&&null!==r)throw TypeError(r+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,e){try{e=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),e(t,[]),r=!(t instanceof Array)}catch(a){r=!0}return function(t,n){return i(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:i}},9093:function(t,r,n){var e=n("ce10"),a=n("e11e").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,a)}},"9c12":function(t,r,n){var e=n("d3f4"),a=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&a(t)===t}},a648:function(t,r,n){},aa49:function(t,r,n){"use strict";n.r(r);var e=n("be94"),a={fraction:{type:"fraction",numerator:"",denominator:"",brace:"",errors:{brace:!1,numurator:!0,denominator:!0}},sign:{type:"sign",sign:"",operationPriority:0,bracePriority:0,errors:{sign:!0}}},i={calculation:[Object(e["a"])({},a.fraction,{index:0}),Object(e["a"])({},a.sign,{index:1}),Object(e["a"])({},a.fraction,{index:2})],result:{numerator:0,denominator:0},errors:{numerator:[0,2],denominator:[0,2],sign:[1],brace:[]},templates:a};function o(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return o(t)||c(t)||u()}n("55dd"),n("ac6a"),n("456d"),n("20d6");var l={resolveOperation:function(t,r){return function(t){var n=t.calculation,a=t.operation,i=n.findIndex(function(t){return t.index===a.index}),o={fractionA:Object(e["a"])({},n[i-1]),fractionB:Object(e["a"])({},n[i+1])},c={};switch(a.sign){case"*":c=r.multiply(o);break;case"/":c=r.divide(o);break;case"+":c=r.add(o);break;case"-":o.fractionB.numerator=-o.fractionB.numerator,c=r.add(o);break}var u=r.short(c);return{result:u,operationIndex:i}}},countOfErrors:function(t){return Object.keys(t.errors).reduce(function(r,n){return r+=t.errors[n].length,r},0)},equalNumerator:function(){return function(t,r){return t.numerator*r.denominator}},reverse:function(){return function(t){return{numerator:t.denominator,denominator:t.numerator}}},multiply:function(){return function(t){var r=t.fractionA,n=t.fractionB;return{numerator:r.numerator*n.numerator,denominator:r.denominator*n.denominator}}},divide:function(t,r){return function(t){var n=t.fractionA,e=t.fractionB,a=r.reverse(e);return r.multiply({fractionA:n,fractionB:a})}},add:function(t,r){return function(t){var n=t.fractionA,e=t.fractionB;return n.denominator!==e.denominator?{numerator:r.equalNumerator(n,e)+r.equalNumerator(e,n),denominator:n.denominator*e.denominator}:{numerator:n.numerator+e.numerator,denominator:n.denominator}}},short:function(){return function(t){var r=Math.abs(t.numerator),n=Math.abs(t.denominator),e=r<n?r:n;if(e>1e4)return t;if(0===e)return{numerator:0,denominator:1};while(1!==e){if(!(t.numerator%e||t.denominator%e))return{numerator:t.numerator/e,denominator:t.denominator/e};e-=1}return t}},bracePriorities:function(t,r){for(var n=r.braces,e=[],a=Math.round(n.length/2),i=0;i<a;i++){var o=n.findIndex(function(t,r){return n[r+1]&&"left"===t.brace&&"right"===n[r+1].brace});if(-1!==o){var c=n.splice(o,2);e.push({start:c[0].index,end:c[1].index})}}if(0===n.length){var u={};e.forEach(function(t){var n=r.signsInArea(t);n.forEach(function(t){u[t.index]=u[t.index]?u[t.index]+2:2})});var s=Object.keys(u).map(function(t){return{index:t,priority:u[t]}});return{payload:s}}return{error:!0,payload:n.map(function(t){return t.index})}}},f={signs:function(t){return t.calculation.filter(function(t){return"sign"===t.type})},braces:function(t){return t.calculation.filter(function(t){return t.brace})},signsInArea:function(t){return function(r){return t.calculation.slice(r.start,r.end).filter(function(t){return"sign"===t.type})}},isErrorExisting:function(t){return function(r){var n=r.index,e=r.prop;return-1!==t.errors[e].findIndex(function(t){return t===n})}},orderOperations:function(t,r){return s(r.signs).sort(function(t,r){return r.operationPriority+r.bracePriority-(t.operationPriority+t.bracePriority)})}},d=Object(e["a"])({},l,f),p=(n("c5f6"),n("7cdf"),{toggleBrace:function(t,r){var n=t.dispatch,e=t.commit,a=t.state,i=r.index,o=r.value;""===a.calculation[i].brace||a.calculation[i].brace!==o?e("setCalculationValue",{prop:"brace",index:i,value:o}):e("setCalculationValue",{prop:"brace",index:i,value:""}),n("resolveBraces")},onNumberChange:function(t,r){var n=t.commit,e=t.dispatch,a=r.event,i=r.prop,o=r.index,c=a.target.value;Number.isInteger(+c)&&""!==c?(n("setCalculationValue",{prop:i,index:o,value:+c}),e("toggleError",{prop:i,index:o,action:"remove"}),e("recalc")):(e("toggleError",{prop:i,index:o,action:"add"}),n("setCalculationValue",{prop:i,index:o,value:c}))},onSignChange:function(t,r){var n=t.commit,e=t.dispatch,a=r.event,i=r.prop,o=r.index,c=a.target.value;switch(n("setCalculationValue",{prop:i,index:o,value:c}),c){case"-":case"+":e("toggleError",{prop:i,index:o,action:"remove"}),n("setCalculationValue",{prop:"operationPriority",index:o,value:0}),e("recalc");break;case"*":case"/":e("toggleError",{prop:i,index:o,action:"remove"}),n("setCalculationValue",{prop:"operationPriority",index:o,value:1}),e("recalc");break;default:e("toggleError",{prop:i,index:o,action:"add"})}},refresh:function(t){var r=t.commit;r("refresh")},addCalculationPart:function(t){var r=t.commit;r("addCalculation",[{type:"fraction",numerator:"",denominator:"",brace:""},{type:"sign",sign:"",operationPriority:0,bracePriority:0}]),r("reindexCalculation")}}),v={resolveBraces:function(t){var r=t.commit,n=t.getters,e=t.dispatch,a=n.bracePriorities;a.error?r("setError",{prop:"brace",indexes:a.payload}):(r("setError",{prop:"brace",indexes:[]}),r("clearBracePriotiries",n.signs),a.payload.forEach(function(t){r("setCalculationValue",{prop:"bracePriority",index:t.index,value:t.priority})}),e("recalc"))},recalc:function(t){var r=t.getters,n=t.dispatch;r.countOfErrors||n("sum")},sum:function(t){var r=t.state,n=t.commit,e=t.getters,a=s(r.calculation),i=e.orderOperations;i.forEach(function(t){var r=e.resolveOperation({calculation:a,operation:t});a.splice(r.operationIndex-1,3,r.result)}),n("setResult",a[0])},toggleError:function(t,r){var n=t.commit,e=t.getters,a=r.prop,i=r.index,o=r.action,c=e.isErrorExisting({prop:a,index:i});c&&"remove"===o&&n("removeError",{prop:a,index:i}),c||"add"!==o||n("addError",{prop:a,index:i})}},b=Object(e["a"])({},p,v),m={setError:function(t,r){var n=r.prop,e=r.indexes;t.errors[n]=e},addError:function(t,r){var n=r.prop,e=r.index;t.errors[n].push(e)},removeError:function(t,r){var n=r.prop,e=r.index;t.errors[n]=t.errors[n].filter(function(t){return t!==e})},setResult:function(t,r){t.result=r},addCalculation:function(t,r){var n;(n=t.calculation).unshift.apply(n,s(r)),Object.keys(t.errors).forEach(function(n){t.errors[n]=t.errors[n].map(function(t){return t+r.length})}),r.forEach(function(r,n){"fraction"===r.type?(t.errors.numerator.unshift(n),t.errors.denominator.unshift(n)):t.errors.sign.unshift(n)})},reindexCalculation:function(t){t.calculation=t.calculation.map(function(t,r){return Object(e["a"])({},t,{index:r})})},setCalculationValue:function(t,r){var n=r.prop,e=r.index,a=r.value;t.calculation[e][n]=a},clearBracePriotiries:function(t,r){r.forEach(function(r){t.calculation[r.index].bracePriority=0})},refresh:function(t){t.calculation=[Object(e["a"])({},t.templates.fraction,{index:0}),Object(e["a"])({},t.templates.sign,{index:1}),Object(e["a"])({},t.templates.fraction,{index:2})],t.result={numerator:0,denominator:0},t.errors={numerator:[0,2],denominator:[0,2],sign:[1],brace:[]}}};r["default"]={namespaced:!0,state:i,getters:d,actions:b,mutations:m}},aa77:function(t,r,n){var e=n("5ca1"),a=n("be13"),i=n("79e5"),o=n("fdef"),c="["+o+"]",u="​",s=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,r,n){var a={},c=i(function(){return!!o[t]()||u[t]()!=u}),s=a[t]=c?r(d):o[t];n&&(a[n]=s),e(e.P+e.F*c,"String",a)},d=f.trim=function(t,r){return t=String(a(t)),1&r&&(t=t.replace(s,"")),2&r&&(t=t.replace(l,"")),t};t.exports=f},ac6a:function(t,r,n){for(var e=n("cadf"),a=n("0d58"),i=n("2aba"),o=n("7726"),c=n("32e9"),u=n("84f2"),s=n("2b4c"),l=s("iterator"),f=s("toStringTag"),d=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=a(p),b=0;b<v.length;b++){var m,g=v[b],_=p[g],h=o[g],x=h&&h.prototype;if(x&&(x[l]||c(x,l,d),x[f]||c(x,f,g),u[g]=d,_))for(m in e)x[m]||i(x,m,e[m],!0)}},be94:function(t,r,n){"use strict";function e(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function a(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(r){e(t,r,n[r])})}return t}n.d(r,"a",function(){return a})},c5f6:function(t,r,n){"use strict";var e=n("7726"),a=n("69a8"),i=n("2d95"),o=n("5dbc"),c=n("6a99"),u=n("79e5"),s=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",v=e[p],b=v,m=v.prototype,g=i(n("2aeb")(m))==p,_="trim"in String.prototype,h=function(t){var r=c(t,!1);if("string"==typeof r&&r.length>2){r=_?r.trim():d(r,3);var n,e,a,i=r.charCodeAt(0);if(43===i||45===i){if(n=r.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(r.charCodeAt(1)){case 66:case 98:e=2,a=49;break;case 79:case 111:e=8,a=55;break;default:return+r}for(var o,u=r.slice(2),s=0,l=u.length;s<l;s++)if(o=u.charCodeAt(s),o<48||o>a)return NaN;return parseInt(u,e)}}return+r};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var r=arguments.length<1?0:t,n=this;return n instanceof v&&(g?u(function(){m.valueOf.call(n)}):i(n)!=p)?o(new b(h(r)),n,v):h(r)};for(var x,y=n("9e1e")?s(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;y.length>O;O++)a(b,x=y[O])&&!a(v,x)&&f(v,x,l(b,x));v.prototype=m,m.constructor=v,n("2aba")(e,p,v)}},c829:function(t,r,n){},cd1c:function(t,r,n){var e=n("e853");t.exports=function(t,r){return new(e(t))(r)}},df99:function(t,r,n){"use strict";var e=n("e7eb"),a=n.n(e);a.a},e7eb:function(t,r,n){},e853:function(t,r,n){var e=n("d3f4"),a=n("1169"),i=n("2b4c")("species");t.exports=function(t){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)||(r=void 0),e(r)&&(r=r[i],null===r&&(r=void 0))),void 0===r?Array:r}},fdef:function(t,r){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=calculation.48181470.js.map