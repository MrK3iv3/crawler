(function(){var k,aa=aa||{},m=this;function ba(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function p(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function q(){}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function r(a){return"array"==ca(a)}function t(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}function v(a){return"number"==typeof a}function w(a){return"function"==ca(a)}function da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;function ga(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function y(a,b,c){y=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return y.apply(null,arguments)}
function z(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ia=Date.now||function(){return+new Date};
function ja(a){if(m.execScript)m.execScript(a,"JavaScript");else if(m.eval)if(null==ka&&(m.eval("var _et_ = 1;"),"undefined"!=typeof m._et_?(delete m._et_,ka=!0):ka=!1),ka)m.eval(a);else{var b=m.document,c=b.createElement("SCRIPT");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);b.body.removeChild(c)}else throw Error("goog.globalEval not available");}var ka=null;
function B(a,b){function c(){}c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.qa=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}B(C,Error);C.prototype.name="CustomError";var la=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ma(a){if(!na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ta,"&#0;"));return a}var oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,na=/[\x00&<>"']/;
function ua(a,b){return a<b?-1:a>b?1:0}Math.random();var D=Array.prototype,va=D.indexOf?function(a,b,c){return D.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},wa=D.forEach?function(a,b,c){D.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},xa=D.some?function(a,b,c){return D.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):
a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function za(a){var b;a:{b=Aa;for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:u(a)?a.charAt(b):a[b]}function Ba(a,b){var c=va(a,b),d;(d=0<=c)&&D.splice.call(a,c,1);return d}function Ca(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Da(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ea(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Fa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Ga="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ha(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ga.length;f++)c=Ga[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var E;a:{var Ia=m.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){E=Ja;break a}}E=""};function Ka(){return-1!=E.indexOf("Edge")||-1!=E.indexOf("Trident")||-1!=E.indexOf("MSIE")};function F(){return-1!=E.indexOf("Edge")};var La=-1!=E.indexOf("Opera")||-1!=E.indexOf("OPR"),G=Ka(),H=-1!=E.indexOf("Gecko")&&!(-1!=E.toLowerCase().indexOf("webkit")&&!F())&&!(-1!=E.indexOf("Trident")||-1!=E.indexOf("MSIE"))&&!F(),I=-1!=E.toLowerCase().indexOf("webkit")&&!F();function Ma(){var a=E;if(H)return/rv\:([^\);]+)(\)|;)/.exec(a);if(G&&F())return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(I)return/WebKit\/(\S+)/.exec(a)}function Na(){var a=m.document;return a?a.documentMode:void 0}
var Oa=function(){if(La&&m.opera){var a=m.opera.version;return w(a)?a():a}var a="",b=Ma();b&&(a=b?b[1]:"");return G&&!F()&&(b=Na(),b>parseFloat(a))?String(b):a}(),Pa={};
function J(a){var b;if(!(b=Pa[a])){b=0;for(var c=la(String(Oa)).split("."),d=la(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var A=l.exec(g)||["","",""],x=n.exec(h)||["","",""];if(0==A[0].length&&0==x[0].length)break;b=ua(0==A[1].length?0:parseInt(A[1],10),0==x[1].length?0:parseInt(x[1],10))||ua(0==A[2].length,0==x[2].length)||ua(A[2],x[2])}while(0==b)}b=Pa[a]=0<=b}return b}
var Qa=m.document,Ra=Na(),Sa=!Qa||!G||!Ra&&F()?void 0:Ra||("CSS1Compat"==Qa.compatMode?parseInt(Oa,10):5);var Ta=!G||G&&(F()||9<=Sa);!H&&!G||G&&G&&(F()||9<=Sa)||H&&J("1.9.1");G&&J("9");function Ua(a,b){Da(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Va?a.setAttribute(Va[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Va={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Wa(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Ta&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ma(g.name),'"');if(g.type){f.push(' type="',ma(g.type),'"');var h={};Ha(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(u(g)?f.className=g:r(g)?f.className=g.join(" "):Ua(f,g));2<d.length&&Xa(e,f,d);return f}
function Xa(a,b,c){function d(c){c&&b.appendChild(u(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];if(!t(f)||da(f)&&0<f.nodeType)d(f);else{var g;a:{if(f&&"number"==typeof f.length){if(da(f)){g="function"==typeof f.item||"string"==typeof f.item;break a}if(w(f)){g="function"==typeof f.item;break a}}g=!1}wa(g?Ca(f):f,d)}}};G&&J(12);ba("userfeedback.api.startFeedback",function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=!0;if(b&&JSON&&JSON.stringify){var e=JSON.stringify(b);(d=1200>=e.length)&&(a.psdJson=e)}d=d||"help"!=a.flow;e={invalidPsd:!0};b=[a,d?b:e,c];c=c||m;c.GOOGLE_FEEDBACK_START_ARGUMENTS=b;d=a.serverUri||"//www.google.com/tools/feedback";if(e=c.GOOGLE_FEEDBACK_START)e.apply(c,b);else{b=d+"/load.js?";for(var f in a)d=a[f],null!=d&&!da(d)&&(b+=encodeURIComponent(f)+"="+encodeURIComponent(d)+"&");a=c.document;
f=a.createElement("script");f.src=b;a.body.appendChild(f)}});var K="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function L(){}L.prototype.next=function(){throw K;};L.prototype.B=function(){return this};function Ya(a){if(a instanceof L)return a;if("function"==typeof a.B)return a.B(!1);if(t(a)){var b=0,c=new L;c.next=function(){for(;;){if(b>=a.length)throw K;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}
function Za(a,b){if(t(a))try{wa(a,b,void 0)}catch(c){if(c!==K)throw c;}else{a=Ya(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(d){if(d!==K)throw d;}}}function $a(a){if(t(a))return Ca(a);a=Ya(a);var b=[];Za(a,function(a){b.push(a)});return b};function ab(a,b){this.b={};this.a=[];this.f=this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)bb(this,arguments[d],arguments[d+1])}else if(a){a instanceof ab?(c=a.C(),d=a.H()):(c=Fa(a),d=Ea(a));for(var e=0;e<c.length;e++)bb(this,c[e],d[e])}}k=ab.prototype;k.H=function(){cb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.C=function(){cb(this);return this.a.concat()};
k.clear=function(){this.b={};this.f=this.c=this.a.length=0};function cb(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};
function bb(a,b,c){Object.prototype.hasOwnProperty.call(a.b,b)||(a.c++,a.a.push(b),a.f++);a.b[b]=c}k.forEach=function(a,b){for(var c=this.C(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new ab(this)};k.B=function(a){cb(this);var b=0,c=this.f,d=this,e=new L;e.next=function(){if(c!=d.f)throw Error("The map has changed since the iterator was created");if(b>=d.a.length)throw K;var e=d.a[b++];return a?e:d.b[e]};return e};function db(a){if("function"==typeof a.H)return a.H();if(u(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ea(a)}function eb(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(t(a)||u(a))wa(a,b,void 0);else{var c;if("function"==typeof a.C)c=a.C();else if("function"!=typeof a.H)if(t(a)||u(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=Fa(a);else c=void 0;for(var d=db(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function fb(a){var b=m.onerror,c=!1;I&&!J("535.3")&&(c=!c);m.onerror=function(d,e,f,g,h){b&&b(d,e,f,g,h);a({message:d,fileName:e,ja:f,ra:g,error:h});return c}};function gb(){this.a=ia()}new gb;gb.prototype.reset=function(){this.a=ia()};gb.prototype.get=function(){return this.a};function hb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ib(){}
function jb(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(r(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),jb(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),kb(d,c),c.push(":"),jb(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":kb(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}}var lb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function kb(a,b){b.push('"',a.replace(mb,function(a){var b=lb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),lb[a]=b);return b}),'"')};function nb(a){switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:return!0;default:return!1}};function ob(){}ob.prototype.b=null;function pb(a){return a.b||(a.b=a.f())};var qb;function rb(){}B(rb,ob);rb.prototype.a=function(){var a=sb(this);return a?new ActiveXObject(a):new XMLHttpRequest};rb.prototype.f=function(){var a={};sb(this)&&(a[0]=!0,a[1]=!0);return a};
function sb(a){if(!a.c&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.c=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.c}qb=new rb;function tb(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}tb.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};function ub(a,b){a.g(b);a.b<a.f&&(a.b++,b.next=a.a,a.a=b)};var vb=[],wb=[],xb=!1;function yb(a){vb[vb.length]=a;if(xb)for(var b=0;b<wb.length;b++)a(y(wb[b].a,wb[b]))};function zb(a){m.setTimeout(function(){throw a;},0)}var Ab;
function Bb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==E.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=y(function(a){if(("*"==d||a.origin==
d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!Ka()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.T;c.T=null;a()}};return function(a){d.next={T:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=
function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}function Cb(a){return a}yb(function(a){Cb=a});var Eb=new tb(function(){return new Db},function(a){a.reset()},100);function Fb(){var a=Gb,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Db(){this.next=this.b=this.a=null}Db.prototype.reset=function(){this.next=this.b=this.a=null};function Hb(a,b){Ib||Jb();Kb||(Ib(),Kb=!0);var c=Gb,d=Eb.get();d.a=a;d.b=b;d.next=null;c.b?c.b.next=d:c.a=d;c.b=d}var Ib;function Jb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve();Ib=function(){a.then(Lb)}}else Ib=function(){var a=Lb,a=Cb(a);!w(m.setImmediate)||m.Window&&m.Window.prototype&&m.Window.prototype.setImmediate==m.setImmediate?(Ab||(Ab=Bb()),Ab(a)):m.setImmediate(a)}}var Kb=!1,Gb=new function(){this.b=this.a=null};
function Lb(){for(var a=null;a=Fb();){try{a.a.call(a.b)}catch(b){zb(b)}ub(Eb,a)}Kb=!1};function Mb(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function Nb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function M(a,b){this.a=0;this.j=void 0;this.c=this.b=this.f=null;this.g=this.h=!1;if(a==N)O(this,2,b);else try{var c=this;a.call(b,function(a){O(c,2,a)},function(a){O(c,3,a)})}catch(d){O(this,3,d)}}function Ob(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}Ob.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var Pb=new tb(function(){return new Ob},function(a){a.reset()},100);function Qb(a,b,c){var d=Pb.get();d.f=a;d.b=b;d.c=c;return d}function N(){}
M.prototype.then=function(a,b,c){return Rb(this,w(a)?a:null,w(b)?b:null,c)};Mb(M);function P(a,b){Rb(a,null,b,void 0)}function Sb(a,b){a.b||2!=a.a&&3!=a.a||Tb(a);a.c?a.c.next=b:a.b=b;a.c=b}function Rb(a,b,c,d){var e=Qb(null,null,null);e.a=new M(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;e.b=c?function(b){try{var e=c.call(d,b);a(e)}catch(n){g(n)}}:g});e.a.f=a;Sb(a,e);return e.a}M.prototype.i=function(a){this.a=0;O(this,2,a)};
M.prototype.l=function(a){this.a=0;O(this,3,a)};function O(a,b,c){if(0==a.a){if(a==c)b=3,c=new TypeError("Promise cannot resolve to itself");else{if(Nb(c)){a.a=1;b=c;c=a.i;var d=a.l;b instanceof M?Sb(b,Qb(c||q,d||null,a)):b.then(c,d,a);return}if(da(c))try{if(d=c.then,w(d)){Ub(a,c,d);return}}catch(e){b=3,c=e}}a.j=c;a.a=b;a.f=null;Tb(a);3!=b||Vb(a,c)}}function Ub(a,b,c){function d(b){f||(f=!0,a.l(b))}function e(b){f||(f=!0,a.i(b))}a.a=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}
function Tb(a){a.h||(a.h=!0,Hb(a.m,a))}function Wb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);return b}M.prototype.m=function(){for(var a=null;a=Wb(this);){var b=this.a,c=this.j;if(3==b&&a.b&&!a.g)for(var d=void 0,d=this;d&&d.g;d=d.f)d.g=!1;if(a.a)a.a.f=null,Xb(a,b,c);else try{a.g?a.f.call(a.c):Xb(a,b,c)}catch(e){Yb.call(null,e)}ub(Pb,a)}this.h=!1};function Xb(a,b,c){2==b?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function Vb(a,b){a.g=!0;Hb(function(){a.g&&Yb.call(null,b)})}
var Yb=zb;var Zb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function $b(a){if(ac){ac=!1;var b=m.location;if(b){var c=b.href;if(c&&(c=(c=$b(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw ac=!0,Error();}}return a.match(Zb)}var ac=I;function bc(a){a=$b(a)[1]||null;!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1));return a?a.toLowerCase():""}
function cc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}function dc(a,b,c){if(r(b))for(var d=0;d<b.length;d++)dc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}function ec(a,b,c){Math.max(b.length-(c||0),0);for(c=c||0;c<b.length;c+=2)dc(b[c],b[c+1],a);return a}function fc(a,b){for(var c in b)dc(c,b[c],a);return a}
function gc(a,b){return cc(2==arguments.length?ec([a],arguments[1],0):ec([a],arguments,1))};function hc(){var a={Z:7E3,aa:new ic};return jc(a).then(function(b){var c=b.responseText;a&&a.pa&&(b=a.pa,0==c.lastIndexOf(b,0)&&(c=c.substring(b.length)));return hb(c)})}
function jc(a){return new M(function(b,c){var d=a||{},e,f=d.aa?d.aa.a():qb.a();try{f.open("GET","//ssl.gstatic.com/support/realtime/operatorParams",!0)}catch(g){c(new Q("Error opening XHR: "+g.message,"//ssl.gstatic.com/support/realtime/operatorParams"))}f.onreadystatechange=function(){if(4==f.readyState){m.clearTimeout(e);var a;!(a=nb(f.status))&&(a=0===f.status)&&(a=bc("//ssl.gstatic.com/support/realtime/operatorParams"),a=!("http"==a||"https"==a||""==a));a?b(f):c(new kc(f.status,"//ssl.gstatic.com/support/realtime/operatorParams"))}};
f.onerror=function(){c(new Q("Network error","//ssl.gstatic.com/support/realtime/operatorParams"))};if(d.headers)for(var h in d.headers){var l=d.headers[h];null!=l&&f.setRequestHeader(h,l)}d.withCredentials&&(f.withCredentials=d.withCredentials);d.responseType&&(f.responseType=d.responseType);d.ka&&f.overrideMimeType(d.ka);0<d.Z&&(e=m.setTimeout(function(){f.onreadystatechange=q;f.abort();c(new lc("//ssl.gstatic.com/support/realtime/operatorParams"))},d.Z));try{f.send(null)}catch(n){f.onreadystatechange=
q,m.clearTimeout(e),c(new Q("Error sending XHR: "+n.message,"//ssl.gstatic.com/support/realtime/operatorParams"))}})}function Q(a,b){C.call(this,a+", url="+b)}B(Q,C);Q.prototype.name="XhrError";function kc(a,b){Q.call(this,"Request Failed, status="+a,b)}B(kc,Q);kc.prototype.name="XhrHttpError";function lc(a){Q.call(this,"Request timed out",a)}B(lc,Q);lc.prototype.name="XhrTimeoutError";function ic(){}B(ic,ob);ic.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new mc;throw Error("Unsupported browser");};ic.prototype.f=function(){return{}};
function mc(){this.a=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.a.onload=y(this.ga,this);this.a.onerror=y(this.U,this);this.a.onprogress=y(this.ha,this);this.a.ontimeout=y(this.ia,this)}k=mc.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};k.abort=function(){this.a.abort()};k.setRequestHeader=function(){};k.ga=function(){this.status=200;this.responseText=this.a.responseText;nc(this,4)};k.U=function(){this.status=500;this.responseText=null;nc(this,4)};k.ia=function(){this.U()};k.ha=function(){this.status=200;nc(this,1)};function nc(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function R(a,b){this.f=[];this.w=b||null;this.a=this.b=!1;this.c=void 0;this.l=this.m=this.h=!1;this.g=0;this.j=null;this.v=0}R.prototype.i=function(a,b){this.h=!1;oc(this,a,b)};function oc(a,b,c){a.b=!0;a.c=c;a.a=!b;pc(a)}function qc(a){if(a.b){if(!a.l)throw new rc;a.l=!1}}R.prototype.callback=function(a){qc(this);oc(this,!0,a)};function sc(a,b,c){a.f.push([b,c,void 0]);a.b&&pc(a)}
R.prototype.then=function(a,b,c){var d,e,f=new M(function(a,b){d=a;e=b});sc(this,d,function(a){e(a)});return f.then(a,b,c)};Mb(R);function tc(a){return xa(a.f,function(a){return w(a[1])})}
function pc(a){if(a.g&&a.b&&tc(a)){var b=a.g,c=uc[b];c&&(m.clearTimeout(c.J),delete uc[b]);a.g=0}a.j&&(a.j.v--,delete a.j);for(var b=a.c,d=c=!1;a.f.length&&!a.h;){var e=a.f.shift(),f=e[0],g=e[1],e=e[2];if(f=a.a?g:f)try{var h=f.call(e||a.w,b);void 0!==h&&(a.a=a.a&&(h==b||h instanceof Error),a.c=b=h);if(Nb(b)||"function"===typeof m.Promise&&b instanceof m.Promise)d=!0,a.h=!0}catch(l){b=l,a.a=!0,tc(a)||(c=!0)}}a.c=b;d&&(h=y(a.i,a,!0),d=y(a.i,a,!1),b instanceof R?(sc(b,h,d),b.m=!0):b.then(h,d));c&&(b=
new vc(b),uc[b.J]=b,a.g=b.J)}function rc(){C.call(this)}B(rc,C);rc.prototype.message="Deferred has already fired";rc.prototype.name="AlreadyCalledError";function vc(a){this.J=m.setTimeout(y(this.b,this),0);this.a=a}vc.prototype.b=function(){delete uc[this.J];throw this.a;};var uc={};function wc(a,b){var c=b||{},d=c.document||document,e=document.createElement("SCRIPT"),f={a:e,K:void 0},g=new R(0,f),h=null,l=null!=c.timeout?c.timeout:5E3;0<l&&(h=window.setTimeout(function(){xc(e,!0);var b=new yc(1,"Timeout reached for loading script "+a);qc(g);oc(g,!1,b)},l),f.K=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(xc(e,c.ea||!1,h),g.callback(null))};e.onerror=function(){xc(e,!0,h);var b=new yc(0,"Error while loading script "+
a);qc(g);oc(g,!1,b)};Ua(e,{type:"text/javascript",charset:"UTF-8",src:a});zc(d).appendChild(e);return g}function zc(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function xc(a,b,c){null!=c&&m.clearTimeout(c);a.onload=q;a.onerror=q;a.onreadystatechange=q;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}function yc(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);C.call(this,c)}B(yc,C);function Ac(a){a=a||{};this.operatorDeferredUrl=a.operatorDeferredUrl;this.alphaTestMode=a.alphaTestMode||!1;this.stagingMode=a.stagingMode||!1;this.rosterId=a.rosterId||"talk_roster";this.feedbackId=a.feedbackId||74772;this.isRtl=a.isRtl||void 0;this.helpCenterName=a.helpCenterName||null;this.localeName=a.localeName||null;this.document=a.document||document;this.source=a.source||void 0;this.entityId=a.entityId||void 0;this.authUser=a.authUser||void 0;this.apiKey=a.apiKey||void 0};function Bc(a){this.a=a instanceof Ac?a:new Ac(a);this.b=Cc();this.b.then(this.c,z(Dc,"Error retrieving operatorParams"),this)}function Ec(){return p("cs.operatorDeferredInstance")}function Fc(){var a=p("cs.operatorDeferredPromise");return a instanceof M?a:null!=a?new M(N,a):null}function Gc(a){ba("cs.operatorDeferredPromise",a)}function Cc(){return hc().then(function(a){if(!a)throw Error("operatorParams is null");return a})}function Dc(){}
function Hc(a){var b=Fc();if(b)return b;if(b=Ec())return a=new M(N,b),Gc(a),a;a=Ic(a).then(function(a){var b={timeout:void 0,ea:void 0,document:this.a.document};this.a.operatorDeferredUrl=a;return wc(a,b).then(function(){return m.cs.OperatorDeferred.getInstance(this.a)},null,this)},null,a);Gc(a);return a}Bc.prototype.c=function(a){(new RegExp(a.eagerLoadHostnamePattern,a.eagerLoadHostnameFlags)).test(this.a.document.location.hostname)&&P(Hc(this),z(Dc,"Error retrieving OperatorDeferred"))};
function Ic(a){return a.a.operatorDeferredUrl?new M(N,a.a.operatorDeferredUrl):a.b.then(function(a){return a.operatorDeferredUrl})}function Jc(a,b){return Hc(a).then(z(function(a,b){b.registerAvailabilityCallbacks(a)},b))}function Mc(a){return Hc(a).then(function(a){a.getAvailabilities()})}function Nc(a,b,c){b=z(function(a,b,c,g,h){return h.requestSupport(a,b,c,g)},b,c,void 0,!0);return(c=Ec())?(a=b(c),new M(N,a)):Hc(a).then(b)};function S(){this.f=this.f;this.j=this.j}S.prototype.f=!1;S.prototype.isDisposed=function(){return this.f};S.prototype.M=function(){this.f||(this.f=!0,this.o())};S.prototype.o=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function T(a,b){this.type=a;this.a=this.target=b;this.W=!0}T.prototype.b=function(){this.W=!1};function Oc(a){Oc[" "](a);return a}Oc[" "]=q;var Pc=!G||G&&(F()||9<=Sa),Qc=G&&!J("9");!I||J("528");H&&J("1.9b")||G&&J("8")||La&&J("9.5")||I&&J("528");H&&!J("8")||G&&J("9");function Rc(a,b){T.call(this,a?a.type:"");this.a=this.target=null;this.clientY=this.clientX=0;this.c=this.state=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;var c=a.relatedTarget;if(c&&H)try{Oc(c.nodeName)}catch(d){}this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.state=a.state;this.c=a;a.defaultPrevented&&this.b()}}B(Rc,T);
Rc.prototype.b=function(){Rc.D.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Qc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Sc="closure_listenable_"+(1E6*Math.random()|0),Tc=0;function Uc(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.G=!!d;this.I=e;this.key=++Tc;this.A=this.F=!1}function Vc(a){a.A=!0;a.listener=null;a.a=null;a.src=null;a.I=null};function Wc(a){this.src=a;this.a={};this.b=0}function Xc(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Yc(b,c,e,f);-1<h?(a=b[h],d||(a.F=!1)):(a=new Uc(c,a.src,g,!!e,f),a.F=d,b.push(a));return a}function Zc(a,b){var c=b.type;c in a.a&&Ba(a.a[c],b)&&(Vc(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function Yc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.A&&f.listener==b&&f.G==!!c&&f.I==d)return e}return-1};var $c="closure_lm_"+(1E6*Math.random()|0),ad={},bd=0;function cd(a,b,c,d,e){if(r(b))for(var f=0;f<b.length;f++)cd(a,b[f],c,d,e);else if(c=dd(c),a&&a[Sc])Xc(a.u,String(b),c,!1,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=ed(a);g||(a[$c]=g=new Wc(a));c=Xc(g,b,c,!1,d,e);c.a||(d=fd(),c.a=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(gd(b.toString()),d),bd++)}}
function fd(){var a=hd,b=Pc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function id(a,b,c,d,e){if(r(b))for(var f=0;f<b.length;f++)id(a,b[f],c,d,e);else(c=dd(c),a&&a[Sc])?(a=a.u,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Yc(f,c,d,e),-1<c&&(Vc(f[c]),D.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=ed(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Yc(b,c,!!d,e)),(c=-1<a?b[a]:null)&&jd(c))}
function jd(a){if(!v(a)&&a&&!a.A){var b=a.src;if(b&&b[Sc])Zc(b.u,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.G):b.detachEvent&&b.detachEvent(gd(c),d);bd--;(c=ed(b))?(Zc(c,a),0==c.b&&(c.src=null,b[$c]=null)):Vc(a)}}}function gd(a){return a in ad?ad[a]:ad[a]="on"+a}function kd(a,b,c,d){var e=!0;if(a=ed(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.G==c&&!f.A&&(f=ld(f,d),e=e&&!1!==f)}return e}
function ld(a,b){var c=a.listener,d=a.I||a.src;a.F&&jd(a);return c.call(d,b)}
function hd(a,b){if(a.A)return!0;if(!Pc){var c=b||p("window.event"),d=new Rc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.a;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;0<=h;h--){d.a=c[h];var l=kd(c[h],f,!0,d),e=e&&l}for(h=0;h<c.length;h++)d.a=c[h],l=kd(c[h],f,!1,d),e=e&&l}return e}return ld(a,new Rc(b,this))}
function ed(a){a=a[$c];return a instanceof Wc?a:null}var md="__closure_events_fn_"+(1E9*Math.random()>>>0);function dd(a){if(w(a))return a;a[md]||(a[md]=function(b){return a.handleEvent(b)});return a[md]}yb(function(a){hd=a(hd)});function U(){S.call(this);this.u=new Wc(this);this.ba=this;this.R=null}B(U,S);U.prototype[Sc]=!0;U.prototype.addEventListener=function(a,b,c,d){cd(this,a,b,c,d)};U.prototype.removeEventListener=function(a,b,c,d){id(this,a,b,c,d)};
function V(a,b){var c,d=a.R;if(d){c=[];for(var e=1;d;d=d.R)c.push(d),++e}var d=a.ba,e=b,f=e.type||e;if(u(e))e=new T(e,d);else if(e instanceof T)e.target=e.target||d;else{var g=e,e=new T(f,d);Ha(e,g)}var g=!0,h;if(c)for(var l=c.length-1;0<=l;l--)h=e.a=c[l],g=nd(h,f,!0,e)&&g;h=e.a=d;g=nd(h,f,!0,e)&&g;g=nd(h,f,!1,e)&&g;if(c)for(l=0;l<c.length;l++)h=e.a=c[l],g=nd(h,f,!1,e)&&g}
U.prototype.o=function(){U.D.o.call(this);if(this.u){var a=this.u,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,Vc(d[e]);delete a.a[c];a.b--}}this.R=null};function nd(a,b,c,d){b=a.u.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.A&&g.G==c){var h=g.listener,l=g.I||g.src;g.F&&Zc(a.u,g);e=!1!==h.call(l,d)&&e}}return e&&0!=d.W};function od(a,b,c){if(w(a))c&&(a=y(a,c));else if(a&&"function"==typeof a.handleEvent)a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function W(a){U.call(this);this.headers=new ab;this.v=a||null;this.b=!1;this.m=this.a=null;this.h=this.P="";this.c=this.O=this.g=this.w=!1;this.l=0;this.i=null;this.S="";this.L=this.ca=!1}B(W,U);var pd=/^https?$/i,qd=["POST","PUT"],rd=[];k=W.prototype;k.da=function(){this.M();Ba(rd,this)};
k.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.P+"; newUri="+a);b=b?b.toUpperCase():"GET";this.P=a;this.h="";this.w=!1;this.b=!0;this.a=this.v?this.v.a():qb.a();this.m=this.v?pb(this.v):pb(qb);this.a.onreadystatechange=y(this.V,this);try{this.O=!0,this.a.open(b,String(a),!0),this.O=!1}catch(e){sd(this,e);return}a=c||"";var f=this.headers.clone();d&&eb(d,function(a,b){bb(f,b,a)});d=za(f.C());c=m.FormData&&a instanceof m.FormData;!(0<=va(qd,
b))||d||c||bb(f,"Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.S&&(this.a.responseType=this.S);"withCredentials"in this.a&&(this.a.withCredentials=this.ca);try{td(this),0<this.l&&((this.L=ud(this.a))?(this.a.timeout=this.l,this.a.ontimeout=y(this.K,this)):this.i=od(this.K,this.l,this)),this.g=!0,this.a.send(a),this.g=!1}catch(g){sd(this,g)}};function ud(a){return G&&J(9)&&v(a.timeout)&&void 0!==a.ontimeout}
function Aa(a){return"content-type"==a.toLowerCase()}k.K=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.l+"ms, aborting",V(this,"timeout"),this.a&&this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1,V(this,"complete"),V(this,"abort"),vd(this)))};function sd(a,b){a.b=!1;a.a&&(a.c=!0,a.a.abort(),a.c=!1);a.h=b;wd(a);vd(a)}function wd(a){a.w||(a.w=!0,V(a,"complete"),V(a,"error"))}
k.o=function(){this.a&&(this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1),vd(this,!0));W.D.o.call(this)};k.V=function(){this.isDisposed()||(this.O||this.g||this.c?xd(this):this.N())};k.N=function(){xd(this)};
function xd(a){if(a.b&&"undefined"!=typeof aa&&(!a.m[1]||4!=yd(a)||2!=zd(a)))if(a.g&&4==yd(a))od(a.V,0,a);else if(V(a,"readystatechange"),4==yd(a)){a.b=!1;try{var b=zd(a),c;if(!(c=nb(b))){var d;if(d=0===b){var e=bc(String(a.P));d=!pd.test(e)}c=d}if(c)V(a,"complete"),V(a,"success");else{var f;try{f=2<yd(a)?a.a.statusText:""}catch(g){f=""}a.h=f+" ["+zd(a)+"]";wd(a)}}finally{vd(a)}}}
function vd(a,b){if(a.a){td(a);var c=a.a,d=a.m[0]?q:null;a.a=null;a.m=null;b||V(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function td(a){a.a&&a.L&&(a.a.ontimeout=null);v(a.i)&&(m.clearTimeout(a.i),a.i=null)}function yd(a){return a.a?a.a.readyState:0}function zd(a){try{return 2<yd(a)?a.a.status:-1}catch(b){return-1}}yb(function(a){W.prototype.N=a(W.prototype.N)});function Ad(a){S.call(this);this.b=a}B(Ad,S);Ad.prototype.a=function(a){return Bd(this,a)};function X(a,b){return(b?"__wrapper_":"__protected_")+(a[ea]||(a[ea]=++fa))+"__"}function Bd(a,b){var c=X(a,!0);b[c]||((b[c]=Cd(a,b))[X(a,!1)]=b);return b[c]}function Cd(a,b){function c(){if(a.isDisposed())return b.apply(this,arguments);try{return b.apply(this,arguments)}catch(c){throw a.b(c),new Dd(c);}finally{}}c[X(a,!1)]=b;return c}
function Ed(a,b){var c=p("window"),d=c[b];c[b]=function(b,c){u(b)&&(b=z(ja,b));b=Bd(a,b);return d.call?d.call(this,b,c):d(b,c)};c[b][X(a,!1)]=d}Ad.prototype.o=function(){var a=p("window"),b;b=a.setTimeout;b=b[X(this,!1)]||b;a.setTimeout=b;b=a.setInterval;b=b[X(this,!1)]||b;a.setInterval=b;Ad.D.o.call(this)};function Dd(a){C.call(this,"Error in protected function: "+(a&&a.message?String(a.message):String(a)));(a=a&&a.stack)&&u(a)&&(this.stack=a)}B(Dd,C);function Fd(a,b,c){U.call(this);this.g=b||null;this.c={};this.i=Gd;this.h=a;if(!c)if(this.a=null,G&&!J("10"))fb(y(this.b,this));else{this.a=new Ad(y(this.b,this));Ed(this.a,"setTimeout");Ed(this.a,"setInterval");a=this.a;b=p("window");c=["requestAnimationFrame","mozRequestAnimationFrame","webkitAnimationFrame","msRequestAnimationFrame"];for(var d=0;d<c.length;d++){var e=c[d];c[d]in b&&Ed(a,e)}a=this.a;xb=!0;b=y(a.a,a);for(c=0;c<vb.length;c++)vb[c](b);wb.push(a)}}B(Fd,U);
function Hd(a){T.call(this,"a");this.error=a}B(Hd,T);function Gd(a,b,c,d){var e=new W;rd.push(e);Xc(e.u,"ready",e.da,!0,void 0,void 0);e.send(a,b,c,d)}
Fd.prototype.b=function(a,b){var c;c=p("window.location.href");if(u(a))c={message:a,name:"Unknown error",lineNumber:"Not available",fileName:c,stack:"Not available"};else{var d,e,f=!1;try{d=a.lineNumber||a.ja||"Not available"}catch(g){d="Not available",f=!0}try{e=a.fileName||a.filename||a.sourceURL||m.$googDebugFname||c}catch(h){e="Not available",f=!0}c=!f&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:d,fileName:e,
stack:a.stack||"Not available"}}var l;if(b){d={};for(l in b)d[l]=b[l];l=d}else l={};if(this.g)try{this.g(c,l)}catch(n){}e=c.message.substring(0,1900);d=c.stack;try{var A=gc(this.h,"script",c.fileName,"error",e,"line",c.lineNumber),x;a:{var Nd=this.c,Od;for(Od in Nd){x=!1;break a}x=!0}x||(A=cc(fc([A],this.c)));x={};x.trace=d;if(l)for(var Kc in l)x["context."+Kc]=l[Kc];var ya,Lc=fc([],x);Lc[0]="";ya=Lc.join("");v(null)&&(ya=ya.substring(0,null));this.i(A,"POST",ya,this.l)}catch(Qd){}try{V(this,new Hd(c))}catch(Rd){}};
Fd.prototype.o=function(){var a=this.a;a&&"function"==typeof a.M&&a.M();Fd.D.o.call(this)};function Y(a,b,c,d,e,f,g){e=new Fd(e||"//www.google.com/tools/feedback/jserror",void 0,!0);this.c=y(e.b,e);this.l=a;this.v=c||"en";this.m=b||!1;this.w=!!d;this.i=f;this.b=this.a=null;this.j=g}function Id(a,b,c){if(null!=b&&null!=c){var d={};d[b]=c;P(Jc(a.f,d),a.c)}}k=Y.prototype;k.X=function(a){this.a=a;Id(this,this.a,this.g)};k.Y=function(a){this.b=a;Id(this,this.b,this.h)};k.na=function(a){this.g=a;Id(this,this.a,this.g)};k.oa=function(a){this.h=a;Id(this,this.b,this.h)};
k.la=function(a){null!=this.a&&P(Nc(this.f,this.a,a),this.c)};k.ma=function(a){null!=this.b&&P(Nc(this.f,this.b,a),this.c)};k.$=function(){null==this.a&&null==this.b||P(Mc(this.f),this.c)};Y.prototype.setChatPool=Y.prototype.X;Y.prototype.setHangoutPool=Y.prototype.Y;Y.prototype.setChatCallback=Y.prototype.na;Y.prototype.setHangoutCallback=Y.prototype.oa;Y.prototype.requestChatSupport=Y.prototype.la;Y.prototype.requestHangoutSupport=Y.prototype.ma;Y.prototype.getAvailabilities=Y.prototype.$;function Jd(){};function Kd(){}B(Kd,Jd);Kd.prototype.clear=function(){var a=$a(this.B(!0)),b=this;wa(a,function(a){b.s.removeItem(a)})};function Z(a){this.s=a}B(Z,Kd);Z.prototype.get=function(a){a=this.s.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};Z.prototype.B=function(a){var b=0,c=this.s,d=new L;d.next=function(){if(b>=c.length)throw K;var d;d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};Z.prototype.clear=function(){this.s.clear()};Z.prototype.key=function(a){return this.s.key(a)};function Ld(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.s=a}B(Ld,Z);function Md(){this.a=new Ld}B(Md,S);Md.prototype.clear=function(){this.a.s.removeItem("GOOGLE_HELP_SESSION_STATE")};function Pd(a,b){var c=a.serverUri||"//www.gstatic.com/feedback";m.GOOGLE_HELP_SESSION_ARGUMENTS=arguments;var d=window.document,e=d.createElement("script");e.src=c+"/session_load.js";d.body.appendChild(e)}ba("userfeedback.api.help.resumeOpenHelpSession",Pd);(function(a,b){var c=a.helpCenterPath,d=a.locale,e=a.authuser,f=a.escalationJSONString,g=!!a.useStagingServer,h=a.apiKey,l;l=document.body;var n;a:{n=9==l.nodeType?l:l.ownerDocument||l.document;if(n.defaultView&&n.defaultView.getComputedStyle&&(n=n.defaultView.getComputedStyle(l,null))){n=n.direction||n.getPropertyValue("direction")||"";break a}n=""}n||(n=l.currentStyle?l.currentStyle.direction:null);l="rtl"==(n||l.style&&l.style.direction);n=window;if(null==n||null==n.top||null==n.top.document||
window.top.GOOGLE_HELP_CHAT_SUPPORT)c=null;else{c=new Y(c,l,d,g,void 0,e,h);window.top.GOOGLE_HELP_CHAT_SUPPORT=c;d={helpCenterName:c.l,localeName:c.v,source:1,rosterId:"roster-for-Google-Help",isRtl:c.m,alphaTestMode:!1,stagingMode:c.w,timeoutMs:2E4,authUser:c.i,apiKey:c.j};e=Wa("div",{id:"roster-for-Google-Help",style:"display: none"});window.top.document.body.appendChild(e);try{c.f=new Bc(d)}catch(A){c.c(A)}}d=new Md;if(f){d.clear();e={fa:JSON.parse(f).fa};e.sessionTimestamp=(new Date).getTime();
f=d.a;window.JSON?e=window.JSON.stringify(e):(g=[],jb(new ib,e,g),e=g.join(""));try{f.s.setItem("GOOGLE_HELP_SESSION_STATE",e)}catch(x){if(0==f.s.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}}if(f=d.a.get("GOOGLE_HELP_SESSION_STATE")){if(f=window.JSON?window.JSON.parse(f):hb(f),e=(new Date).getTime(),g=f.sessionTimestamp,!g||!v(g)||e>g+6E4)d.clear(),f=null}else f=null;d=(f||{}).escalationOptions;c&&d&&(f=d.hangout||{},(d=(d.chat||{}).chat_pool_id)&&c.X(d),
(f=f.hangout_pool_id)&&c.Y(f),c.$());Pd(a,b)}).apply(m,m.GOOGLE_HELP_CHAT_ARGUMENTS);})();
