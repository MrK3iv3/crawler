(function(){var p=this,q=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},v=function(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
aa:ba;return v.apply(null,arguments)};var z=(new Date).getTime();var A=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},B=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ca=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,da=function(a,b){if(!a)return b;var c=a.match(ca);return c?c[0]:b};var ea=A("0.15"),fa=A("0.01"),ga=A("0.001"),ha=A("0.001"),ia=A("0.2"),ja=B("true",!0),ka=A(""),la=A("0.001");var ma=B("false",!1),na=B("false",!1);var oa=function(a,b,c){if(!a)return null;for(var e=0;e<a.length;++e)if((a[e].ad_slot||b)==b&&(a[e].ad_tag_origin||c)==c)return a[e];return null};var C=function(a){C[" "](a);return a};C[" "]=function(){};var D=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{C(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(e){return!1}},E=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var e=new Uint16Array(1);window.crypto.getRandomValues(e);c=e[0]/65536}catch(d){c=Math.random()}return a[Math.floor(c*a.length)]}}return null};var pa=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var e;a!=e;)e=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){b=c}}return b};var F=document,H=window,I,qa=null,J=F.getElementsByTagName("script");J&&J.length&&(qa=J[J.length-1]);I=qa;var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=/\x00/g,K={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},L={"'":"\\'"},M=function(a,b){return a<b?-1:a>b?1:0};var N=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},O=function(a){return!!a&&"function"==typeof a&&!!a.call},ya=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])},za=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)},Aa=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,za(a,function(){a.google_onload_fired=!0}))},Ba=function(){var a=
H.google_unique_id;return"number"==typeof a?a:0},Ca=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,e=0;e<b;e++)c^=(c<<5)+(c>>2)+a.charCodeAt(e)&4294967295;return 0<c?c:4294967296+c};var Da=!0,Ea={},Ha=function(a,b,c,e){var d=Fa,g,f=Da;try{g=b()}catch(k){try{var h=pa(k);b="";k.fileName&&(b=k.fileName);var m=-1;k.lineNumber&&(m=k.lineNumber);f=d(a,h,b,m,c)}catch(l){Ga("pAR",l)}if(!f)throw k;}finally{if(e)try{e()}catch(n){}}return g},Fa=function(a,b,c,e,d,g){var f={};if(d)try{d(f)}catch(k){}f.context=a;f.msg=b.substring(0,512);c&&(f.file=c);0<e&&(f.line=e.toString());f.url=F.URL.substring(0,512);f.ref=F.referrer.substring(0,512);Ia(f);Ja(f,g);return Da},Ja=function(a,b){try{if(Math.random()<
(b||.01)){var c="/pagead/gen_204?id=jserror"+Ka(a),e="http"+("http:"==H.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,e=e.substring(0,2E3);H.google_image_requests||(H.google_image_requests=[]);var d=H.document.createElement("img");d.src=e;H.google_image_requests.push(d)}}catch(g){}},Ga=function(a,b){try{var c=pa(b),e="";b.fileName&&(e=b.fileName);var d=-1;b.lineNumber&&(d=b.lineNumber);Fa(a,c,e,d,void 0,void 0)}catch(g){Ja({context:"mRE",msg:g.toString()+"\n"+(g.stack||"")},void 0)}},
Ia=function(a){var b=a||{};N(Ea,function(a,e){b[e]=H[a]})},La=function(a,b){return function(){var c=arguments;return Ha(a,function(){return b.apply(void 0,c)},void 0,void 0)}},Ma=function(a,b){return La(a,b)},Ka=function(a){var b="";N(a,function(a,e){if(0===a||a)b+="&"+e+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};Da=!ma;Ea={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Na=!!window.google_async_iframe_id,Oa=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Pa=/Android/;var Qa=null,Ra=function(){if(!Qa){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,D(a))b=a;else break;Qa=b}return Qa};var Sa=function(a,b,c){c||(c=na?"https":"http");return[c,"://",a,b].join("")};var Ta=function(){},Va=function(a,b,c){switch(typeof b){case "string":Ua(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",g=0;g<e;g++)c.push(d),Va(a,b[g],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(g=b[d],"function"!=typeof g&&(c.push(e),Ua(d,c),c.push(":"),Va(a,g,c),
e=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Wa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Xa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ua=function(a,b){b.push('"');b.push(a.replace(Xa,function(a){if(a in Wa)return Wa[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return Wa[a]=d+b.toString(16)}));b.push('"')};var Ya=function(a){var b=arguments.length;if(1==b&&"array"==q(arguments[0]))return Ya.apply(null,arguments[0]);for(var c={},e=0;e<b;e++)c[arguments[e]]=!0;return c};var P;a:{var Za=p.navigator;if(Za){var $a=Za.userAgent;if($a){P=$a;break a}}P=""};var Q=function(){return-1!=P.indexOf("Edge")};var ab=-1!=P.indexOf("Opera")||-1!=P.indexOf("OPR"),R=-1!=P.indexOf("Edge")||-1!=P.indexOf("Trident")||-1!=P.indexOf("MSIE"),S=-1!=P.indexOf("Gecko")&&!(-1!=P.toLowerCase().indexOf("webkit")&&!Q())&&!(-1!=P.indexOf("Trident")||-1!=P.indexOf("MSIE"))&&!Q(),eb=-1!=P.toLowerCase().indexOf("webkit")&&!Q(),fb=function(){var a=P;if(S)return/rv\:([^\);]+)(\)|;)/.exec(a);if(R&&Q())return/Edge\/([\d\.]+)/.exec(a);if(R)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(eb)return/WebKit\/(\S+)/.exec(a)},gb=
function(){var a=p.document;return a?a.documentMode:void 0},hb=function(){if(ab&&p.opera){var a=p.opera.version;return"function"==q(a)?a():a}var a="",b=fb();b&&(a=b?b[1]:"");return R&&!Q()&&(b=gb(),b>parseFloat(a))?String(b):a}(),ib={},jb=function(a){if(!ib[a]){for(var b=0,c=ra(String(hb)).split("."),e=ra(String(a)).split("."),d=Math.max(c.length,e.length),g=0;0==b&&g<d;g++){var f=c[g]||"",k=e[g]||"",h=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var l=h.exec(f)||["","",""],n=m.exec(k)||
["","",""];if(0==l[0].length&&0==n[0].length)break;b=M(0==l[1].length?0:parseInt(l[1],10),0==n[1].length?0:parseInt(n[1],10))||M(0==l[2].length,0==n[2].length)||M(l[2],n[2])}while(0==b)}ib[a]=0<=b}},kb=p.document,lb=gb(),mb=!kb||!R||!lb&&Q()?void 0:lb||("CSS1Compat"==kb.compatMode?parseInt(hb,10):5);var T=null,nb=S||eb||ab||"function"==typeof p.atob;var U="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
ob={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},rb=function(a){var b;try{a:{for(var c=a.document.getElementsByTagName("script"),e=c.length-1;0<=e;e--){var d=c[e];if(!d.google_parsed_script){d.google_parsed_script=!0;var g;b:{var f=d.innerText||d.innerHTML;if(f){var k=f.replace(/^\s+/,"").split(/[\r\n]/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/);if(k&&/google_ad_client/.test(k[1])){g=k[1];break b}}g=null}if(g){b=g;break a}}}b=null}}catch(h){return-1}if(!b)return 1;
try{for(var c=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,e={},m;m=c.exec(b);)e[m[1]]=pb(m[2]);qb(e,a)}catch(l){return-2}return null==a.google_ad_client?2:3},sb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];N(a,function(a,e){if(null!=a){var d;try{var g=[];Va(new Ta,a,g);d=g.join("")}catch(f){}d&&(d=d.replace(/\//g,"\\$&"),ya(b,e,"=",d,";"))}});return b.join("")},tb=function(a){for(var b=0,c=U.length;b<c;b++){var e=U[b];ob[e]||(a[e]=null)}},pb=function(a){switch(a){case "true":return!0;
case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(e){}}},qb=function(a,b){for(var c=0;c<U.length;c++){var e=U[c];null!=a[e]&&(b[e]=a[e])}};var V=null;var W=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:v(this.K,this)});this.H=a.google_iframe_oncopy},ub;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(sa,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(ta,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(ua,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(va,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(wa,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(xa,"&#0;")));ub=X;W.prototype.set=function(a,b){this.H.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",v(this.B,this,a),!1)};
W.prototype.B=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};W.prototype.K=function(a,b){var c=vb("rx",a),e;a:{if(a&&(e=a.match("dt=([^&]+)"))&&2==e.length){e=e[1];break a}e=""}e=(new Date).getTime()-e;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>e?e+"":"M"));this.set(b,c);return c};var vb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),e=c.exec(b);e&&(b=b.replace(c,a+"="+(+e[1]+1||1)));return b};Ya("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var wb;if(!(wb=!S&&!R)){var xb;if(xb=R)xb=R&&(Q()||9<=mb);wb=xb}wb||S&&jb("1.9.1");R&&jb("9");var yb=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var zb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y,Z=function(a){this.m=[];this.j=a||window;this.i=0;this.l=null;this.w=0},Ab=function(a,b){this.C=a;this.L=b};Z.prototype.A=function(a,b){0!=this.i||0!=this.m.length||b&&b!=window?this.s(a,b):(this.i=2,this.v(new Ab(a,window)))};Z.prototype.s=function(a,b){this.m.push(new Ab(a,b||this.j));Bb(this)};Z.prototype.D=function(a){this.i=1;if(a){var b=Ma("sjr::timeout",v(this.u,this,!0));this.l=this.j.setTimeout(b,a)}};
Z.prototype.u=function(a){a&&++this.w;1==this.i&&(null!=this.l&&(this.j.clearTimeout(this.l),this.l=null),this.i=0);Bb(this)};Z.prototype.G=function(){return!(!window||!Array)};Z.prototype.I=function(){return this.w};Z.prototype.nq=Z.prototype.A;Z.prototype.nqa=Z.prototype.s;Z.prototype.al=Z.prototype.D;Z.prototype.rl=Z.prototype.u;Z.prototype.sz=Z.prototype.G;Z.prototype.tc=Z.prototype.I;var Bb=function(a){var b=Ma("sjr::tryrun",v(a.J,a));a.j.setTimeout(b,0)};
Z.prototype.J=function(){if(0==this.i&&this.m.length){var a=this.m.shift();this.i=2;var b=Ma("sjr::run",v(this.v,this,a));a.L.setTimeout(b,0);Bb(this)}};Z.prototype.v=function(a){this.i=0;a.C()};
var Cb=function(a){try{return a.sz()}catch(b){return!1}},Db=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&Cb(a)&&O(a.nq)&&O(a.nqa)&&O(a.al)&&O(a.rl)},Eb=function(){if(Y&&Cb(Y))return Y;var a=Ra(),b=a.google_jobrunner;return Db(b)?Y=b:a.google_jobrunner=Y=new Z(a)},Fb=function(a,b){Eb().nq(a,b)},Gb=function(a,b){Eb().nqa(a,b)};var Hb=Na?1==Ba():!Ba(),Ib=function(){var a=C("script"),b;b=da("","pagead2.googlesyndication.com");return["<",a,' src="',Sa(b,"/pagead/js/r20150602/r20150605/show_ads_impl.js",""),'"></',a,">"].join("")},Jb=function(a,b,c,e){return function(){var d=!1;e&&Eb().al(3E4);var g=a.document.getElementById(b);g&&!D(g.contentWindow)&&3==
a.google_top_js_status&&(a.google_top_js_status=6);try{var f=a.document.getElementById(b).contentWindow;if(D(f)){var k=a.document.getElementById(b).contentWindow,h=k.document;h.body&&h.body.firstChild||(h.open(),k.google_async_iframe_close=!0,h.write(c))}else{var m=a.document.getElementById(b).contentWindow,l;g=c;g=String(g);if(g.quote)l=g.quote();else{f=['"'];for(k=0;k<g.length;k++){var n=g.charAt(k),y=n.charCodeAt(0),h=k+1,w;if(!(w=K[n])){var r;if(31<y&&127>y)r=n;else{var u=n;if(u in L)r=L[u];else if(u in
K)r=L[u]=K[u];else{var t=u,x=u.charCodeAt(0);if(31<x&&127>x)t=u;else{if(256>x){if(t="\\x",16>x||256<x)t+="0"}else t="\\u",4096>x&&(t+="0");t+=x.toString(16).toUpperCase()}r=L[u]=t}}w=r}f[h]=w}f.push('"');l=f.join("")}m.location.replace("javascript:"+l)}d=!0}catch(G){m=Ra().google_jobrunner,Db(m)&&m.rl()}d&&(d=vb("google_async_rrc",c),(new W(a)).set(b,Jb(a,b,d,!1)))}},Kb=function(a){var b=["<iframe"];N(a,function(a,e){null!=a&&b.push(" "+e+'="'+a+'"')});b.push("></iframe>");return b.join("")},Lb=function(a){var b;
if(b=Hb){if(!V)a:{var c=[H.top];b=[];for(var e=0,d;d=c[e++];){b.push(d);try{if(d.frames)for(var g=d.frames.length,f=0;f<g&&1024>c.length;++f)c.push(d.frames[f])}catch(k){}}for(g=0;g<b.length;g++)try{var h=b[g].frames.google_esf;if(h){V=h;break a}}catch(m){}V=null}b=!V}return b?(h={style:"display:none"},h["data-ad-client"]=yb(a),h.id="google_esf",h.name="google_esf",a=Sa(da("","googleads.g.doubleclick.net"),"/pagead/html/r20150602/r20150605/zrt_lookup.html"),
h.src=a,Kb(h)):""},Nb=function(a,b,c){var e=b.google_ad_output,d=b.google_ad_format;d||"html"!=e&&null!=e||(d=b.google_ad_width+"x"+b.google_ad_height,c&&(d+="_as"));c=!b.google_ad_slot||Mb(b);d=d&&c?d.toLowerCase():"";b.google_ad_format=d;d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];c=[];for(var e=0,g=I.parentElement;g&&25>e;g=g.parentNode,++e)c.push(9!=g.nodeType&&g.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Ca(d.join(":")).toString();d=
a.google_adk2_experiment=a.google_adk2_experiment||E(["C","E"],ha)||"N";if("E"==d){d=I;c=[];for(e=0;d&&25>e;++e){var g="",g=(g=9!=d.nodeType&&d.id)?"/"+g:"",f;a:{if(d&&d.nodeName&&d.parentElement){f=d.nodeName.toString().toLowerCase();for(var k=d.parentElement.childNodes,h=0,m=0;m<k.length;++m){var l=k[m];if(l.nodeName&&l.nodeName.toString().toLowerCase()==f){if(d==l){f="."+h;break a}++h}}}f=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+g+f);d=d.parentElement}d=c.join()+":";c=[];if(a)try{for(var n=
a.parent,e=0;n&&n!=a&&25>e;++e){for(var y=n.frames,g=0;g<y.length;++g)if(a==y[g]){c.push(g);break}a=n;n=a.parent}}catch(w){}b.google_ad_unit_key_2=Ca(d+c.join()).toString()}else"C"==d&&(b.google_ad_unit_key_2="ctrl")},Ob=Math.floor(1E6*Math.random()),Pb=function(a){var b;try{b={};for(var c=a.data.split("\n"),e=0;e<c.length;e++){var d=c[e].indexOf("=");-1!=d&&(b[c[e].substr(0,d)]=c[e].substr(d+1))}}catch(g){}c=b[3];if(b[1]==Ob&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&
(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},Mb=function(a){return a.google_override_format||!zb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used};Ha("sa::main",function(){var a=window,b;var c=a.google_ad_slot;b=a.google_ad_modifications;if(!b||oa(b.ad_whitelist,c,void 0))b=null;else{var e=b.space_collapsing||"none";b=(c=oa(b.ad_blacklist,c))?{o:!0,F:c.space_collapsing||e}:b.remove_ads_by_default?{o:!0,F:e}:null}if(b&&b.o)tb(a);else{Aa(a);if(!window.google_top_experiment&&!window.google_top_js_status)if(b=window,2!==(b.top==b?0:D(b.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var d;try{d=H.top.frames.google_top_static_frame?
!0:!1}catch(g){d=!1}if(d){if(window.google_top_experiment=E(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],ea),"jp_c"!==window.google_top_experiment){d=window;d.addEventListener?d.addEventListener("message",Pb,!1):d.attachEvent&&d.attachEvent("onmessage",Pb);window.google_top_js_status=3;d={0:"google_loc_request",1:Ob};b=[];for(var f in d)b.push(f+"="+d[f]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1;f=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||
f&&"html"!=f||(window.google_always_use_delayed_impressions_experiment=E(["C","E"],ga));(f=!1===window.google_enable_async)||(f=navigator.userAgent,Oa.test(f)?f=!1:(void 0!==window.google_async_for_oa_experiment||!Pa.test(navigator.userAgent)||Oa.test(navigator.userAgent)||(window.google_async_for_oa_experiment=E(["E","C"],fa)),f=Pa.test(f)?"E"===window.google_async_for_oa_experiment:!0),f=!f||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output);if(f)a.google_loader_used=
"sb",a.google_start_time=z,Nb(a,a),document.write(Lb(a.google_ad_client)+Ib());else{Hb&&(d=a.google_ad_client,f=navigator,ja&&a&&d&&f&&(b=a.document,f=b.createElement("script"),d=yb(d),f.async=!0,f.type="text/javascript",f.src=Sa("pagead2.googlesyndication.com","/pub-config/"+d+".js"),d=b.getElementsByTagName("script")[0],d.parentNode.insertBefore(f,d)));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;d={};null==a.google_ad_client&&("google_pubvars_recovery_experiment"in a?f=a.google_pubvars_recovery_experiment:
(f=E(["C","E"],ka),a.google_pubvars_recovery_experiment=f),d.google_pubvars_recovery_experiment=f,"E"==f&&(d.google_pubvars_recovery_progress=rb(a)));qb(a,d);d.google_loader_used="sa";tb(a);f=C("script");b={};e=d.google_ad_height;b.width='"'+d.google_ad_width+'"';b.height='"'+e+'"';b.frameborder='"0"';b.marginwidth='"0"';b.marginheight='"0"';b.vspace='"0"';b.hspace='"0"';b.allowtransparency='"true"';b.scrolling='"no"';b.allowfullscreen='"true"';b.onload='"'+ub+'"';for(var k,e=a.document,c=b.id,h=
0;!c||e.getElementById(c);)c="aswift_"+h++;b.id=c;b.name=c;var h=d.google_ad_width,m=d.google_ad_height,c=["<iframe"];for(k in b)b.hasOwnProperty(k)&&ya(c,k+"="+b[k]);c.push('style="left:0;position:absolute;top:0;"');c.push("></iframe>");k=b.id;h="border:none;height:"+m+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+h+"px;background-color:transparent";e.write(['<ins id="',k+"_expand",'" style="display:inline-table;',h,'"><ins id="',k+"_anchor",'" style="display:block;',h,'">',
c.join(" "),"</ins></ins>"].join(""));k=b.id;b=Mb(d)?E(["c","e"],ia):null;Nb(a,d,"e"==b);e=sb(d);c=null;h=E(["C","E"],la);if("E"==h)a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var l=encodeURIComponent(JSON.stringify(d)),n;if(nb)n=p.btoa(l);else{for(var h=[],y=m=0;y<l.length;y++){for(var w=l.charCodeAt(y);255<w;)h[m++]=w&255,w>>=8;h[m++]=w}var r=q(h);if("array"!=r&&("object"!=r||"number"!=typeof h.length))throw Error("encodeByteArray takes an array as a parameter");if(!T)for(T=
{},l=0;65>l;l++)T[l]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l);l=T;w=[];for(r=0;r<h.length;r+=3){var u=h[r],t=r+1<h.length,x=t?h[r+1]:0,G=r+2<h.length,bb=G?h[r+2]:0,m=u>>2,y=(u&3)<<4|x>>4,cb=(x&15)<<2|bb>>6,db=bb&63;G||(db=64,t||(cb=64));w.push(l[m],l[y],l[cb],l[db])}n=w.join("")}c=n;break a}}catch(Qb){Ga("sblob",Qb)}c=""}else"C"==h&&(c="{C}");n=Lb(d.google_ad_client);u=(new Date).getTime();t=a.google_top_experiment;if(x=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=
void 0;G=a.google_always_use_delayed_impressions_experiment;n=["<!doctype html><html><body>",n,"<",f,">",e,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',k,'";google_start_time=',z,";",c?'google_pub_vars = "'+c+'";':"",t?'google_top_experiment="'+t+'";':"",x?'google_async_for_oa_experiment="'+x+'";':"",G?'google_always_use_delayed_impressions_experiment="'+G+'";':"",b?'google_append_as_for_format_override="'+b+'";':"","google_bpp=",u>z?u-z:1,";google_async_rrc=0;</",
f,">",Ib(),"</body></html>"].join("");(a.document.getElementById(k)?Fb:Gb)(Jb(a,k,n,!0))}}});})();
