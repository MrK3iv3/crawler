(function(){var n=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)};var u=(new Date).getTime();var w=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},x=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=w("0.15"),ga=w("0.01"),ha=w("0.001"),sa=ca("101",-1),ta=ca("10",0),ua=w("0.05"),va=w("0.001"),wa=w("0.0"),xa=w("0.001"),ya=w("0.2"),
za=x("true",!0),Aa=w("0.01"),Ba=w("0.03"),Ca=w("0.001"),Da=w("0.01"),Ea=w("");var Fa=function(){return"r20150929"},Ga=x("false",!1),Ha=x("false",!1),Ia=x("false",!1),Ja=Ia||!Ha;var Ka=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},eb=/&/g,fb=/</g,gb=/>/g,hb=/"/g,ib=/'/g,jb=/\x00/g,kb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},A={"'":"\\'"},lb=function(a,b){return a<b?-1:a>b?1:0};var F=function(a){F[" "](a);return a};F[" "]=function(){};var G;a:{var mb=n.navigator;if(mb){var nb=mb.userAgent;if(nb){G=nb;break a}}G=""};var ob=-1!=G.indexOf("Opera")||-1!=G.indexOf("OPR"),H=-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"),pb=-1!=G.indexOf("Edge"),I=-1!=G.indexOf("Gecko")&&!(-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"))&&!(-1!=G.indexOf("Trident")||-1!=G.indexOf("MSIE"))&&-1==G.indexOf("Edge"),qb=-1!=G.toLowerCase().indexOf("webkit")&&-1==G.indexOf("Edge"),rb=function(){var a=G;if(I)return/rv\:([^\);]+)(\)|;)/.exec(a);if(pb)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(qb)return/WebKit\/(\S+)/.exec(a)},sb=function(){var a=n.document;return a?a.documentMode:void 0},tb=function(){if(ob&&n.opera){var a;var b=n.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=rb())&&(a=b?b[1]:"");return H&&(b=sb(),b>parseFloat(a))?String(b):a}(),ub={},vb=function(a){if(!ub[a]){for(var b=0,c=Ka(String(tb)).split("."),d=Ka(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),r=RegExp("(\\d*)(\\D*)","g");
do{var t=l.exec(g)||["","",""],m=r.exec(h)||["","",""];if(0==t[0].length&&0==m[0].length)break;b=lb(0==t[1].length?0:parseInt(t[1],10),0==m[1].length?0:parseInt(m[1],10))||lb(0==t[2].length,0==m[2].length)||lb(t[2],m[2])}while(0==b)}ub[a]=0<=b}},wb=n.document,xb=wb&&H?sb()||("CSS1Compat"==wb.compatMode?parseInt(tb,10):5):void 0;var yb;if(!(yb=!I&&!H)){var zb;if(zb=H)zb=9<=xb;yb=zb}yb||I&&vb("1.9.1");H&&vb("9");var N=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)};var Ab=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{F(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},O=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=Bb(window),a[Math.floor(c*a.length)]}return null},Bb=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Cb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var Fb=function(a,b,c,d,e,f){try{if((d?a.X:Math.random())<(e||a.N)){var g=a.M+b+Db(c),g=g.substring(0,2E3);"undefined"===typeof f?Eb(g):Eb(g,f)}}catch(h){}},Db=function(a){var b="";Cb(a,function(a,d){if(0===a||a)b+="&"+d+"="+encodeURIComponent(String(a))});return b},Eb=function(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",
a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};N(c,"load",d,void 0);N(c,"error",d,void 0)}c.src=a;n.google_image_requests.push(c)};var P=window,Gb,Hb=null,Ib=document.getElementsByTagName("script");Ib&&Ib.length&&(Hb=Ib[Ib.length-1]);Gb=Hb;var Jb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},Kb=function(a){return!!a&&"function"==typeof a&&!!a.call},Lb=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},Mb=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Nb=function(a,b){N(a,"load",b)},Ob=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,Nb(a,function(){a.google_onload_fired=
!0}))},Pb=function(){var a=P.google_unique_id;return"number"==typeof a?a:0},Qb=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Rb=!!window.google_async_iframe_id;var Sb=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},Tb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var Ub=function(a,b,c){this.U=a;this.P=b;this.w=c;this.v=null;this.O=this.o;this.ca=!1},Vb=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},Xb=function(a,b,c,d){var e;try{e=c()}catch(h){var f=a.w;try{var g=Wb(h),f=(d||a.O).call(a,b,g,void 0,void 0)}catch(l){a.o("pAR",l)}if(!f)throw h;}finally{}return e},Yb=function(a,b){var c=Q;return function(){var d=arguments;return Xb(c,a,function(){return b.apply(void 0,d)})}};
Ub.prototype.o=function(a,b,c,d,e){var f={};f.context=a;b instanceof Vb||(b=Wb(b));f.msg=b.message.substring(0,512);b.fileName&&(f.file=b.fileName);0<b.lineNumber&&(f.line=b.lineNumber.toString());a=n.document;f.url=a.URL.substring(0,512);f.ref=a.referrer.substring(0,512);if(this.v)try{this.v(f)}catch(g){}if(d)try{d(f)}catch(g){}Fb(this.U,e||this.P,f,this.ca,c);return this.w};
var Wb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var e;c!=e;)e=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(f){b=d}}return new Vb(b,a.fileName,a.lineNumber)};var Zb,Q,$b="http"+("http:"==P.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";Zb=new function(){this.M=$b;this.N=.01;this.X=Math.random()};Q=new Ub(Zb,"jserror",!0);var Ic=function(a,b){Xb(Q,a,b,Hc)},Hc=Q.o,Jc=function(a,b){return Yb(a,b)};var Kc={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};Q.w=!Ga;Q.v=function(a){a.shv=Fa();Cb(Kc,function(b,c){try{null!=n[b]&&(a[c]=n[b])}catch(d){}})};var Lc=null,Mc=function(){if(!Lc){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,Ab(a))b=a;else break;Lc=b}return Lc};var V={ea:{j:"17415661",i:"17415662"},Aa:{j:"453848100",i:"453848101"},na:{j:"828064124",i:"828064125"},ma:{j:"828064127",i:"828064128"},oa:{j:"828064170",i:"828064171"},ga:{j:"453848130",i:"453848131",ya:"453848132",za:"453848133"},qa:{j:"24819308",i:"24819309",fa:"24819320"},pa:{j:"24819330",i:"24819331"},sa:{j:"828064162",i:"828064163"},ra:{j:"828064164",i:"828064165",ia:"828064166"},ka:{j:"86724438",i:"86724439"},la:{j:"828064190",i:"828064191"},ua:{j:"10573503",i:"10573504"},J:{j:"10573593",
i:"10573594"},xa:{j:"10573511",i:"10573512"},L:{j:"10573581",i:"10573582"},va:{j:"10573531",i:"10573532"},K:{j:"10573561",i:"10573562"},wa:{j:"10573551",i:"10573552"},ta:{j:"312815000",i:"312815001"},I:{j:"312815100",i:"312815101"},ha:{j:"26835101",i:"26835102"},ja:{j:"35923720",i:"35923721"},A:{j:"35923760",i:"35923761"},Ba:{j:"27415001",i:"27415002"},H:{j:"20040000",i:"20040001"}};var Nc=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};var Oc=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*Bb(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Pc=new function(){this.V=new Nc(100,199)};var W=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:O([c,d],b)};var Qc=function(a,b,c){Ic("files::getSrc",function(){if("https:"==P.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Rc=function(a,b,c){c||(c=Ja?"https":"http");return Qc(a,b,c)};var Sc=function(){},Uc=function(a,b,c){switch(typeof b){case "string":Tc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Uc(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),Tc(e,
c),c.push(":"),Uc(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Vc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Wc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Tc=function(a,b){b.push('"');b.push(a.replace(Wc,function(a){if(a in Vc)return Vc[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Vc[a]=e+b.toString(16)}));
b.push('"')};var Xc=null,Yc=I||qb||ob||"function"==typeof n.atob;var Zc="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_ember_h google_ember_w google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
$c={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},ad=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},bd=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0],(a=a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?\s*$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},
cd=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},fd=function(a,b){var c;try{a:{var d=a.document.getElementsByTagName("script"),e=ad,f;"undefined"!=typeof a.google_pubvars_recovery_regexp_experiment?f=a.google_pubvars_recovery_regexp_experiment:(f=O(["C","E","EM"],Ba),a.google_pubvars_recovery_regexp_experiment=
f);b.google_pubvars_recovery_regexp_experiment=f;switch(f){case "E":e=bd;break;case "EM":e=cd}for(var g=d.length-1;0<=g;g--){var h=d[g];if(!h.google_parsed_script){h.google_parsed_script=!0;var l=e(h);if(l){c=l;break a}}}c=null}}catch(t){return!1}if(!c)return!1;try{for(var d=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,e={},r;r=d.exec(c);)e[r[1]]=dd(r[2]);ed(e,a)}catch(t){return!1}return!!a.google_ad_client},gd=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=
[];Jb(a,function(a,d){if(null!=a){var e;try{var f=[];Uc(new Sc,a,f);e=f.join("")}catch(g){}e&&(e=e.replace(/\//g,"\\$&"),Lb(b,d,"=",e,";"))}});return b.join("")},hd=function(a){for(var b=0,c=Zc.length;b<c;b++){var d=Zc[b];$c[d]||(a[d]=null)}},dd=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:
void 0}}catch(d){}}},ed=function(a,b){for(var c=0;c<Zc.length;c++){var d=Zc[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};var id=null;var jd=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.ba,this)});this.Z=a.google_iframe_oncopy},kd;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(eb,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(fb,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(gb,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(hb,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(ib,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(jb,"&#0;")));kd=X;jd.prototype.set=function(a,b){this.Z.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",p(this.R,this,a),!1)};
jd.prototype.R=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};jd.prototype.ba=function(a,b){var c=ld("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var ld=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var md=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,nd=/Android/,od=!1;var pd=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var qd={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var rd="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),sd=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var Y,Z=function(a){this.u=[];this.m=a||window;this.l=0;this.s=null;this.G=0},td=function(a,b){this.S=a;this.da=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.u.length||b&&b!=window?this.C(a,b):(this.l=2,this.F(new td(a,window)))};Z.prototype.C=function(a,b){this.u.push(new td(a,b||this.m));ud(this)};Z.prototype.T=function(a){this.l=1;if(a){var b=Jc("sjr::timeout",p(this.D,this,!0));this.s=this.m.setTimeout(b,a)}};
Z.prototype.D=function(a){a&&++this.G;1==this.l&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.l=0);ud(this)};Z.prototype.Y=function(){return!(!window||!Array)};Z.prototype.$=function(){return this.G};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.C;Z.prototype.al=Z.prototype.T;Z.prototype.rl=Z.prototype.D;Z.prototype.sz=Z.prototype.Y;Z.prototype.tc=Z.prototype.$;var ud=function(a){var b=Jc("sjr::tryrun",p(a.aa,a));a.m.setTimeout(b,0)};
Z.prototype.aa=function(){if(0==this.l&&this.u.length){var a=this.u.shift();this.l=2;var b=Jc("sjr::run",p(this.F,this,a));a.da.setTimeout(b,0);ud(this)}};Z.prototype.F=function(a){this.l=0;a.S()};
var vd=function(a){try{return a.sz()}catch(b){return!1}},wd=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&vd(a)&&Kb(a.nq)&&Kb(a.nqa)&&Kb(a.al)&&Kb(a.rl)},xd=function(){if(Y&&vd(Y))return Y;var a=Mc(),b=a.google_jobrunner;return wd(b)?Y=b:a.google_jobrunner=Y=new Z(a)},yd=function(a,b){xd().nq(a,b)},zd=function(a,b){xd().nqa(a,b)};var Ad=Rb?1==Pb():!Pb(),Bd=function(){var a=Ia?"https":"http",b=F("script"),c;c=ea("","pagead2.googlesyndication.com");return["<",b,' src="',Rc(c,["/pagead/js/",Fa(),"/r20150820/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},Cd=function(a,b,c,d){return function(){var e=!1;d&&xd().al(3E4);var f=a.document.getElementById(b);f&&!Ab(f.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var g=a.document.getElementById(b).contentWindow;if(Ab(g)){var h=a.document.getElementById(b).contentWindow,l=h.document;l.body&&l.body.firstChild||(l.open(),h.google_async_iframe_close=!0,l.write(c))}else{var r=a.document.getElementById(b).contentWindow,t;f=c;f=String(f);if(f.quote)t=f.quote();else{g=['"'];for(h=0;h<f.length;h++){var m=f.charAt(h),B=m.charCodeAt(0),l=g,R=h+1,J;if(!(J=kb[m])){var C;if(31<B&&127>B)C=m;else{var y=m;if(y in A)C=
A[y];else if(y in kb)C=A[y]=kb[y];else{var v=y,z=y.charCodeAt(0);if(31<z&&127>z)v=y;else{if(256>z){if(v="\\x",16>z||256<z)v+="0"}else v="\\u",4096>z&&(v+="0");v+=z.toString(16).toUpperCase()}C=A[y]=v}}J=C}l[R]=J}g.push('"');t=g.join("")}r.location.replace("javascript:"+t)}e=!0}catch(K){r=Mc().google_jobrunner,wd(r)&&r.rl()}e&&(e=ld("google_async_rrc",c),(new jd(a)).set(b,Cd(a,b,e,!1)))}},Dd=function(a){var b=["<iframe"];Jb(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},
Ed=function(a){var b;if(b=Ad){if(!id)a:{var c=[P.top];b=[];for(var d=0,e;e=c[d++];){b.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>c.length;++g)c.push(e.frames[g])}catch(l){}}for(f=0;f<b.length;f++)try{var h=b[f].frames.google_esf;if(h){id=h;break a}}catch(l){}id=null}b=!id}return b?(h={style:"display:none"},h["data-ad-client"]=pd(a),h.id="google_esf",h.name="google_esf",a=Rc(ea("","googleads.g.doubleclick.net"),["/pagead/html/",Fa(),"/r20150820/zrt_lookup.html"].join("")),
h.src=a,Dd(h)):""},Gd=function(a,b,c){var d=b.google_ad_output,e=b.google_ad_format;e||"html"!=d&&null!=d||(e=b.google_ad_width+"x"+b.google_ad_height,c&&(e+="_as"),b.google_ad_format_suffix&&(e+=b.google_ad_format_suffix));c=!b.google_ad_slot||Fd(b);e=e&&c?e.toLowerCase():"";b.google_ad_format=e;e=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];c=[];for(var d=0,f=Gb.parentElement;f&&25>d;f=f.parentNode,++d)c.push(9!=f.nodeType&&f.id||"");(c=c.join())&&
e.push(c);b.google_ad_unit_key=Qb(e.join(":")).toString();e=a.google_adk2_experiment=a.google_adk2_experiment||O(["C","E"],xa)||"N";if("E"==e){e=Gb;c=[];for(d=0;e&&25>d;++d){var f="",f=(f=9!=e.nodeType&&e.id)?"/"+f:"",g;a:{if(e&&e.nodeName&&e.parentElement){g=e.nodeName.toString().toLowerCase();for(var h=e.parentElement.childNodes,l=0,r=0;r<h.length;++r){var t=h[r];if(t.nodeName&&t.nodeName.toString().toLowerCase()==g){if(e==t){g="."+l;break a}++l}}}g=""}c.push((e.nodeName&&e.nodeName.toString().toLowerCase())+
f+g);e=e.parentElement}e=c.join()+":";c=[];if(a)try{for(var m=a.parent,d=0;m&&m!=a&&25>d;++d){for(var B=m.frames,f=0;f<B.length;++f)if(a==B[f]){c.push(f);break}a=m;m=a.parent}}catch(R){}b.google_ad_unit_key_2=Qb(e+c.join()).toString()}else"C"==e&&(b.google_ad_unit_key_2="ctrl")},Hd=Math.floor(1E6*Math.random()),Id=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");-1!=e&&(b[c[d].substr(0,e)]=c[d].substr(e+1))}}catch(f){}c=b[3];if(b[1]==Hd&&(window.google_top_js_status=
4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},Fd=function(a){return a.google_override_format||!qd[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used};Ic("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var c=b.loeids=b.loeids||[],d=V.J,e,f=d.i,g;if(a.location&&a.location.hash=="#google_plle_"+f)g=f;else{var h=[d.j,f],l=new Nc(sa,sa+ta-1),r;if(!(r=0>=ta||ta%h.length)){var t=Pc.V;r=!(t.start<=l.start&&t.end>=l.end)}if(r)g=null;else{var m=Oc(a);g=null!==m&&l.start<=m&&l.end>=m?h[(m-sa)%h.length]:null}}(e=g)&&c.push(e);var d=V.I,B=W(a,ua,d.j,d.i);B&&c.push(B);var d=V.L,R=W(a,va,d.j,
d.i);R&&c.push(R);var d=V.K,J=W(a,wa,d.j,d.i);J&&c.push(J);var d=V.A,C=W(a,Da,d.j,d.i);C&&c.push(C);var d=V.H,y=W(a,Ea,d.j,d.i);y&&c.push(y)}var v;var z=a.google_ad_slot,K=a.google_ad_modifications;if(!K||Tb(K.ad_whitelist,z,void 0))v=null;else{var ac=K.space_collapsing||"none",bc=Tb(K.ad_blacklist,z);v=bc?{B:!0,W:bc.space_collapsing||ac}:K.remove_ads_by_default?{B:!0,W:ac}:null}if(v&&v.B)hd(a);else{Ob(a);if(!window.google_top_experiment&&!window.google_top_js_status){var La=window;if(2!==(La.top==
La?0:Ab(La.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var Ma;try{Ma=P.top.frames.google_top_static_frame?!0:!1}catch(Na){Ma=!1}if(Ma){if(window.google_top_experiment=O(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],fa),"jp_c"!==window.google_top_experiment){N(window,"message",Id,void 0);window.google_top_js_status=3;var cc={0:"google_loc_request",1:Hd},dc=[],Oa;for(Oa in cc)dc.push(Oa+"="+cc[Oa]);top.postMessage(dc.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=
1}var ec=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||ec&&"html"!=ec||(window.google_always_use_delayed_impressions_experiment=O(["C","E"],ha));var Pa;if(!(Pa=!1===window.google_enable_async)){var Qa;var fc=navigator.userAgent;md.test(fc)?Qa=!1:(void 0!==window.google_async_for_oa_experiment||!nd.test(navigator.userAgent)||md.test(navigator.userAgent)||(window.google_async_for_oa_experiment=O(["E","C"],ga)),Qa=nd.test(fc)?"E"===window.google_async_for_oa_experiment:
!0);Pa=!Qa||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output}if(Pa)a.google_loader_used="sb",a.google_start_time=u,Gd(a,a),document.write(Ed(a.google_ad_client)+Bd());else{if(Ad){var gc=a.google_ad_client,Jd=navigator;if(za&&a&&gc&&Jd){var hc=a.document,ia=hc.createElement("script"),Kd=pd(gc);ia.async=!0;ia.type="text/javascript";ia.src=Rc("pagead2.googlesyndication.com","/pub-config/"+Kd+".js");var ic=hc.getElementsByTagName("script")[0];ic.parentNode.insertBefore(ia,
ic)}}a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;var k={};null==a.google_ad_client&&fd(a,k)&&(k.google_loader_features_used=2048);ed(a,k);k.google_loader_used="sa";hd(a);var jc=F("script"),Ra,ja;a:{try{var L=a.top.google_pubvars_reuse_experiment;if("undefined"!==typeof L){ja=L;break a}L=O(["C","E"],Aa)||null;a.top.google_pubvars_reuse_experiment=L;if(a.top.google_pubvars_reuse_experiment===L){ja=L;break a}}catch(Na){}ja=null}if("E"===ja){var Ld=null!=k.google_ad_client,Md=null!=k.google_ad_width,
Nd=null!=k.google_ad_height,kc=sd(a);if(kc){for(var Sa=0;Sa<rd.length;Sa++){var Ta=rd[Sa];null!=k[Ta]&&(kc[Ta]=k[Ta])}var S=sd(a);if(S){var lc=S.google_ad_width,mc=S.google_ad_height,Ua=S.google_ad_format;if(lc&&mc&&Ua){var ka,Va=Ua&&Ua.match(/(\d+)x(\d+)/);ka=Va?{width:Va[1],height:Va[2]}:null;!ka||ka.width==lc&&ka.height==mc||delete S.google_ad_format}}}var Wa=sd(a);if(Wa)for(var Xa=0;Xa<rd.length;Xa++){var la=rd[Xa];null==k[la]&&null!=Wa[la]&&(k[la]=Wa[la])}var Od=null!=k.google_ad_client,Pd=null!=
k.google_ad_width,Qd=null!=k.google_ad_height;Ra=[Ld?"c2":Od?"c1":"c0",Md?"w2":Pd?"w1":"w0",Nd?"h2":Qd?"h1":"h0"].join()}var q={},Rd=k.google_ad_height;q.width='"'+k.google_ad_width+'"';q.height='"'+Rd+'"';q.frameborder='"0"';q.marginwidth='"0"';q.marginheight='"0"';q.vspace='"0"';q.hspace='"0"';q.allowtransparency='"true"';q.scrolling='"no"';q.allowfullscreen='"true"';q.onload='"'+kd+'"';for(var ma,nc=a.document,T=q.id,Sd=0;!T||nc.getElementById(T);)T="aswift_"+Sd++;q.id=T;q.name=T;var oc=k.google_ad_width,
pc=k.google_ad_height,Ya=V.A,qc=Ya.j,rc=Ya.i,sc=k.google_active_plles=k.google_active_plles||[];Mb(Sb(a),qc)?sc.push(qc):Mb(Sb(a),rc)&&sc.push(rc);od=Mb(Sb(a),Ya.i);var na=["<iframe"],oa;for(oa in q)q.hasOwnProperty(oa)&&Lb(na,oa+"="+q[oa]);var Za="left:0;position:absolute;top:0;";od&&(Za=Za+"width:"+oc+"px;height:"+pc+"px;");na.push('style="'+Za+'"');na.push("></iframe>");var tc=q.id,uc="border:none;height:"+pc+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+oc+"px;background-color:transparent";
nc.write(['<ins id="',tc+"_expand",'" style="display:inline-table;',uc,'"><ins id="',tc+"_anchor",'" style="display:block;',uc,'">',na.join(" "),"</ins></ins>"].join(""));ma=q.id;var pa;pa=Fd(k)?O(["c","e"],ya):null;Gd(a,k,"e"==pa);var Td=gd(k),M=null,$a=O(["C","E"],Ca);if("E"==$a){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var ab=encodeURIComponent(window.JSON.stringify(k)),bb;if(Yc)bb=n.btoa(ab);else{for(var D=[],vc=0,cb=0;cb<ab.length;cb++){for(var U=ab.charCodeAt(cb);255<
U;)D[vc++]=U&255,U>>=8;D[vc++]=U}if(!Xc){Xc={};for(var qa=0;65>qa;qa++)Xc[qa]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(qa)}for(var ra=Xc,wc=[],E=0;E<D.length;E+=3){var xc=D[E],yc=E+1<D.length,zc=yc?D[E+1]:0,Ac=E+2<D.length,Bc=Ac?D[E+2]:0,Ud=xc>>2,Vd=(xc&3)<<4|zc>>4,Cc=(zc&15)<<2|Bc>>6,Dc=Bc&63;Ac||(Dc=64,yc||(Cc=64));wc.push(ra[Ud],ra[Vd],ra[Cc],ra[Dc])}bb=wc.join("")}M=bb;break a}Fb(Zb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(Na){Q.o("sblob",
Na,void 0,void 0)}M=""}M||(M="{X}")}else"C"==$a&&(M="{C}");var Wd=Ed(k.google_ad_client),Ec=(new Date).getTime(),Fc=a.google_top_experiment,db=a.google_async_for_oa_experiment;db&&(a.google_async_for_oa_experiment=void 0);var Gc=a.google_always_use_delayed_impressions_experiment,Xd=["<!doctype html><html><body>",Wd,"<",jc,">",Td,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',ma,'";google_start_time=',u,";",$a?'google_pub_vars = "'+M+'";':"",Ra?'google_pubvars_reuse_experiment_result = "'+
Ra+'";':"",Fc?'google_top_experiment="'+Fc+'";':"",db?'google_async_for_oa_experiment="'+db+'";':"",Gc?'google_always_use_delayed_impressions_experiment="'+Gc+'";':"",pa?'google_append_as_for_format_override="'+pa+'";':"","google_bpp=",Ec>u?Ec-u:1,";google_async_rrc=0;</",jc,">",Bd(),"</body></html>"].join("");(a.document.getElementById(ma)?yd:zd)(Cd(a,ma,Xd,!0))}}});}).call(this);
