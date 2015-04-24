/*!CK:718845290!*//*1425269050,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XIiy4"]); }

__d("SpotlightViewerLoggingEvents",[],function(a,b,c,d,e,f){e.exports={LOADED:"loaded",LOADING:"loading",ERROR:"error",ABORT:"abort",OPEN_BEGIN:"open_begin",OPEN_COMPLETE:"open_complete",CLOSE_BEGIN:"close_begin",CLOSE_COMPLETE:"close_complete",PAGE_BEGIN:"page_begin",PAGE_COMPLETE:"page_complete",PHOTO_CHANGE_BEGIN:"photo_change_begin",PHOTO_CHANGE_COMPLETE:"photo_change_complete",DATA_FETCH_BEGIN:"data_fetch_begin",DATA_FETCH_COMPLETE:"data_fetch_complete",PHOTO_FETCH:"photo_fetch"};},null);
__d("BlobFactory",["emptyFunction"],function(a,b,c,d,e,f,g){var h,i=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder;if(a.Blob){var j;try{new a.Blob();j=true;}catch(k){j=false;}h={getBlob:function(l,m){l=l||[];m=m||{};if(j){return new a.Blob(l,m);}else{var n=new i();for(var o=0;o<l.length;o++)n.append(l[o]);return n.getBlob(m.type);}},isSupported:g.thatReturnsTrue};}else h={getBlob:function(){},isSupported:g.thatReturnsFalse};e.exports=h;},null);
__d("DragDropFileUpload",[],function(a,b,c,d,e,f){f.isSupported=function(){return typeof(FileList)!=="undefined";};},null);
__d("DocumentDragDrop",["Event","Arbiter","CSS","DOM","DOMQuery","DragDropFileUpload","emptyFunction","getObjectValues"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={},p=0;function q(){p=0;n(o).forEach(function(v){i.removeClass(v.element,v.className);h.inform('dragleave',{element:v.element});});}var r=null;function s(){r&&clearTimeout(r);r=setTimeout(function(){q();},500);}function t(){if(!l.isSupported())return;g.listen(document,'dragenter',function(v){if(p===0)n(o).forEach(function(w){i.addClass(w.element,w.className);h.inform('dragenter',{element:w.element,event:v});});p++;s();});g.listen(document,'dragleave',function(v){p--;if(p===0)q();s();});g.listen(document,'drop',function(v){q();var w=v.getTarget();if(k.isNodeOfType(v.getTarget(),'input'))if(w.type==='file')return;v.prevent();});g.listen(document,'dragover',g.prevent);document.addEventListener('dragover',s,true);t=m;}var u={init:function(){t();},registerStatusElement:function(v,w){t();o[j.getID(v)]={element:v,className:w};if(p>0)i.addClass(v,w);},removeStatusElement:function(v){var w=j.getID(v),x=o[w];if(x){i.removeClass(x.element,x.className);delete o[w];}}};e.exports=u;},null);
__d("DragDropTarget",["Arbiter","Event","SubscriptionsHandler","CSS","DataTransfer","DocumentDragDrop","DragDropFileUpload","copyProperties","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(q){this._element=q;this._listeners=new i();this._statusElem=q;this._dragEnterCount=0;this._enabled=false;}n(p.prototype,{_onFilesDropCallback:o,_onURLDropCallback:o,_onPlainTextDropCallback:o,_onDropCallback:o,_fileFilterFn:o.thatReturnsArgument,setOnDocumentDragEnterCallback:function(q){this._onDocumentDragEnterCallback=q;return this;},setOnDocumentDragLeaveCallback:function(q){this._onDocumentDragLeaveCallback=q;return this;},setOnDragEnterCallback:function(q){this._onDragEnterCallback=q;return this;},setOnDragLeaveCallback:function(q){this._onDragLeaveCallback=q;return this;},setOnFilesDropCallback:function(q){this._onFilesDropCallback=q;return this;},setOnURLDropCallback:function(q){this._onURLDropCallback=q;return this;},setOnPlainTextDropCallback:function(q){this._onPlainTextDropCallback=q;return this;},setOnDropCallback:function(q){this._onDropCallback=q;return this;},enable:function(){if(!m.isSupported())return this;this._listeners.engage();l.registerStatusElement(this._statusElem,'fbWantsDragDrop');this._listeners.addSubscriptions(h.listen(this._element,'dragenter',this._onDragEnter.bind(this)),h.listen(this._element,'dragleave',this._onDragLeave.bind(this)),h.listen(this._element,'dragover',this._onDragOver.bind(this)),h.listen(this._element,'drop',function(q){this._dragEnterCount=0;j.removeClass(this._statusElem,'fbDropReady');j.removeClass(this._statusElem,'fbDropReadyPhoto');j.removeClass(this._statusElem,'fbDropReadyPhotos');j.removeClass(this._statusElem,'fbDropReadyLink');var r={},s=false,t=this._fileFilterFn(q.dataTransfer.files);if(t.length){this._onFilesDropCallback(t,q);r.files=t;s=true;}var u=q.dataTransfer.getData('url')||q.dataTransfer.getData('text/uri-list');if(u){this._onURLDropCallback(u,q);r.url=u;s=true;}var v=q.dataTransfer.getData('text/plain');if(v){this._onPlainTextDropCallback(v,q);r.plainText=v;s=true;}if(s)this._onDropCallback(r,q);q.kill();}.bind(this)));this._listeners.addSubscriptions(g.subscribe('dragenter',this._onDocumentDragEnter.bind(this)),g.subscribe('dragleave',this._onDocumentDragLeave.bind(this)));this._enabled=true;return this;},disable:function(){if(!this._enabled)return this;l.removeStatusElement(this._statusElem,'fbWantsDragDrop');j.removeClass(this._statusElem,'fbDropReady');j.removeClass(this._statusElem,'fbDropReadyPhoto');j.removeClass(this._statusElem,'fbDropReadyPhotos');j.removeClass(this._statusElem,'fbDropReadyLink');this._listeners.release();this._enabled=false;return this;},setFileFilter:function(q){this._fileFilterFn=q;return this;},setStatusElement:function(q){this._statusElem=q;return this;},_onDragEnter:function(q){if(this._dragEnterCount===0){var r=new k(q.dataTransfer);j.addClass(this._statusElem,'fbDropReady');if(r.isLink()||!r.isImage()){j.addClass(this._statusElem,'fbDropReadyLink');}else if(r.getCount()>1){j.addClass(this._statusElem,'fbDropReadyPhotos');}else j.addClass(this._statusElem,'fbDropReadyPhoto');this._onDragEnterCallback&&this._onDragEnterCallback();}this._dragEnterCount++;q.preventDefault();},_onDragLeave:function(q){this._dragEnterCount=Math.max(this._dragEnterCount-1,0);if(this._dragEnterCount===0){j.removeClass(this._statusElem,'fbDropReady');j.removeClass(this._statusElem,'fbDropReadyPhoto');j.removeClass(this._statusElem,'fbDropReadyPhotos');j.removeClass(this._statusElem,'fbDropReadyLink');this._onDragLeaveCallback&&this._onDragLeaveCallback();}},_onDragOver:function(q){if(!q.dataTransfer){h.kill(q);return;}var r=q.dataTransfer.effectAllowed;q.dataTransfer.dropEffect=(r=='move'||r=='linkMove')?'move':'copy';h.kill(q);},_onDocumentDragEnter:function(event,q){if(this._onDocumentDragEnterCallback&&q.element==this._element)this._onDocumentDragEnterCallback();},_onDocumentDragLeave:function(event,q){this._dragEnterCount=0;this._onDragLeave(event);if(this._onDocumentDragLeaveCallback&&q.element==this._element)this._onDocumentDragLeaveCallback();}});e.exports=p;},null);
__d("AsyncUploadBase",["ArbiterMixin","AsyncRequest","AsyncResponse","BrowserSupport","Form","copyProperties","mixin","removeFromArray"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=m(g);for(var p in o)if(o.hasOwnProperty(p))r[p]=o[p];var q=o===null?null:o.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=o;r.parseFiles=function(t){"use strict";var u={};for(var v in t){var w=t[v];if(Array.isArray(w)){u[v]=w;}else{u[v]=[];if(w instanceof window.FileList){for(var x=0;x<w.length;x++)u[v].push(w.item(x));}else if(w instanceof window.File||w instanceof window.Blob)u[v].push(w);}}return u;};function r(t){"use strict";this.setURI(t);this.setNetworkErrorRetryLimit(0);}r.prototype.setAllowCrossOrigin=function(t){"use strict";this._allowCrossOrigin=!!t;return this;};r.prototype.setAllowCrossPageTransition=function(t){"use strict";this._allowCrossPageTransition=!!t;return this;};r.prototype.setData=function(t){"use strict";this._data=t;return this;};r.prototype.setNetworkErrorRetryLimit=function(t){"use strict";this._retryLimit=t;return this;};r.prototype.setLimit=function(t){"use strict";this._limit=t;return this;};r.prototype.setPreprocessHandler=function(t){"use strict";this._preprocessHandler=t;return this;};r.prototype.setRelativeTo=function(t){"use strict";this._relativeTo=t;return this;};r.prototype.setStatusElement=function(t){"use strict";this._statusElement=t;return this;};r.prototype.setURI=function(t){"use strict";this._uri=t;return this;};r.prototype.suspend=function(){"use strict";this._suspended=true;return this;};r.prototype.resume=function(){"use strict";this._suspended=false;this._processQueue();return this;};r.prototype.isUploading=function(){"use strict";return this._inFlight;};r.prototype._createFileUpload=function(t,u,v){"use strict";return new s(t,u,v);};r.prototype._processQueue=function(){"use strict";if(this._suspended)return;while(this._pending.length<this._limit){if(!this._waiting.length)break;var t=this._waiting.shift();if(this._preprocessHandler){this._preprocessHandler(t,this._processUpload.bind(this));}else this._processUpload(t);this._pending.push(t);}};r.prototype._processUpload=function(t){"use strict";var u=k.createFormData(t.getData()||this._data);if(t.getFile()){u.append(t.getName(),t.getFile());var v=t.getFile().uploadID;if(v)u.append('upload_id',v);}var w=new h().setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setURI(this._uri).setRawData(u).setStatusElement(this._statusElement).setHandler(this._success.bind(this,t)).setErrorHandler(this._failure.bind(this,t)).setUploadProgressHandler(this._progress.bind(this,t)).setInitialHandler(this._initial.bind(this,t));if(this._relativeTo)w.setRelativeTo(this._relativeTo);w.send();t.setAsyncRequest(w);this._inFlight=true;if(!t.getRetryCount())this.inform('start',t);};r.prototype._abort=function(t){"use strict";if(this._pending.indexOf(t)!==-1){n(this._pending,t);this._processQueue();}n(this._waiting,t);t.abort();};r.prototype._initial=function(t){"use strict";if(t.isAborted())return;this.inform('initial',t);};r.prototype._success=function(t,u){"use strict";if(t.isAborted()){this.inform('success_after_abort',u);return;}this._complete(t);this.inform('success',t.handleSuccess(u));this._processQueue();};r.prototype._retryUpload=function(t){"use strict";t.increaseRetryCount();this._processUpload(t);};r.prototype._failure=function(t,u){"use strict";if(t.isAborted())return;if(u.error===1004&&t.getRetryCount()<this._retryLimit)return this._retryUpload(t);this._complete(t);if(this.inform('failure',t.handleFailure(u))!==false)i.defaultErrorHandler(u);this._processQueue();};r.prototype._progress=function(t,event){"use strict";if(t.isAborted())return;this.inform('progress',t.handleProgress(event));};r.prototype._complete=function(t){"use strict";n(this._pending,t);if(!this._pending.length)this._inFlight=false;};r.isSupported=function(){"use strict";return j.hasFileAPI();};l(r.prototype,{_limit:10});function s(t,u,v){"use strict";this._name=t;this._file=u;this._data=v;this._success=null;this._response=null;this._progressEvent=null;this._request=null;this._numRetries=0;this._aborted=false;}s.prototype.getName=function(){"use strict";return this._name;};s.prototype.getFile=function(){"use strict";return this._file;};s.prototype.setFile=function(t){"use strict";this._file=t;};s.prototype.getData=function(){"use strict";return this._data;};s.prototype.isComplete=function(){"use strict";return this._success!==null;};s.prototype.isSuccess=function(){"use strict";return this._success===true;};s.prototype.getResponse=function(){"use strict";return this._response;};s.prototype.getProgressEvent=function(){"use strict";return this._progressEvent;};s.prototype.setAsyncRequest=function(t){"use strict";this._request=t;return this;};s.prototype.increaseRetryCount=function(){"use strict";this._numRetries++;return this;};s.prototype.getRetryCount=function(){"use strict";return this._numRetries;};s.prototype.isWaiting=function(){"use strict";return !this._request;};s.prototype.isAborted=function(){"use strict";return this._aborted;};s.prototype.abort=function(){"use strict";this._request=null;this._aborted=true;};s.prototype.handleSuccess=function(t){"use strict";this._success=true;this._response=t;this._progressEvent=null;return this;};s.prototype.handleFailure=function(t){"use strict";this._success=false;this._response=t;this._progressEvent=null;return this;};s.prototype.handleProgress=function(event){"use strict";this._progressEvent=event;return this;};e.exports=r;},null);
__d("AsyncUploadRequest",["AsyncUploadBase"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.setFiles=function(k){"use strict";this._files=g.parseFiles(k);return this;};j.prototype.abort=function(){"use strict";this._uploads.forEach(function(k){return this._abort(k);}.bind(this),this);};j.prototype.send=function(){"use strict";if(this._inFlight)return;this._inFlight=true;this._uploads=[];for(var k in this._files)this._files[k].forEach(function(l){this._uploads.push(this._createFileUpload(k,l));}.bind(this));this._waiting=this._uploads.slice(0);this._pending=[];if(this._uploads.length){this._processQueue();}else this._processUpload(this._createFileUpload(null,null));};j.prototype._processQueue=function(){"use strict";i._processQueue.call(this);if(!this._pending.length&&!this._waiting.length)this.inform('complete',this._uploads);};j.isSupported=function(){"use strict";return g.isSupported();};e.exports=j;},null);
__d("DOMClone",[],function(a,b,c,d,e,f){var g={shallowClone:function(i){return h(i,false);},deepClone:function(i){return h(i,true);}};function h(i,j){var k=i.cloneNode(j);if(typeof k.__FB_TOKEN!=='undefined')delete k.__FB_TOKEN;return k;}e.exports=g;},null);
__d("FileForm",["ArbiterMixin","AsyncRequest","AsyncResponse","AsyncUploadRequest","BehaviorsMixin","CurrentUser","DataStore","DOMQuery","Event","Form","JSONPTransport","Parent","URI","copyProperties","mixin","shield"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){function w(ca){var da={},ea=n.scry(ca,'input[type="file"]');ea.forEach(function(fa){da[fa.name]=fa.files;});return da;}function x(ca){var da=n.scry(ca,'input[type="file"]');da.forEach(function(ea){ea.files=null;});}var y=u(g,k);for(var z in y)if(y.hasOwnProperty(z))ba[z]=y[z];var aa=y===null?null:y.prototype;ba.prototype=Object.create(aa);ba.prototype.constructor=ba;ba.__superConstructor__=y;function ba(ca,da,ea){"use strict";if(ca.getAttribute('rel')==='async')throw new Error('FileForm cannot be used with Primer forms.');if(ca.getAttribute('method').toUpperCase()!=='POST')throw new Error('FileForm must be used with POST forms.');this._form=ca;this._previousEncoding=this._form.enctype;this._form.enctype=this._form.encoding='multipart/form-data';this._files=null;da&&this.enableBehaviors(da);this._options=ea||{};this.setAllowCrossOrigin(this._options.allowCrossOrigin);this.setAllowCrossPageTransition(this._options.allowCrossPageTransition);this.setUploadInParallel(this._options.uploadInParallel);this.setConcurrentLimit(this._options.concurrentLimit);this.setPreprocessHandler(this._options.preprocessHandler);this.setNetworkErrorRetryLimit(this._options.networkErrorRetryLimit);this._listeners=[o.listen(this._form,'submit',this._submit.bind(this)),o.listen(this._form,'click',this._click.bind(this))];m.set(this._form,'FileForm',this);}ba.prototype.getRoot=function(){"use strict";return this._form;};ba.prototype.setAllowCrossOrigin=function(ca){"use strict";this._allowCrossOrigin=!!ca;return this;};ba.prototype.setAllowCrossPageTransition=function(ca){"use strict";this._allowCrossPageTransition=!!ca;return this;};ba.prototype.setUploadInParallel=function(ca){"use strict";this._uploadInParallel=!!ca;return this;};ba.prototype.setConcurrentLimit=function(ca){"use strict";this._concurrentLimit=ca;return this;};ba.prototype.setPreprocessHandler=function(ca){"use strict";this._preprocessHandler=ca;return this;};ba.prototype.setNetworkErrorRetryLimit=function(ca){"use strict";this._retryLimit=ca;return this;};ba.prototype.setFiles=function(ca){"use strict";this._files=ca;return this;};ba.prototype.canUseXHR=function(){"use strict";var ca='FormData' in window;if(ca)if(!s(this._form.action).isSameOrigin()&&!this._allowCrossOrigin)ca=false;return ca;};ba.prototype._submit=function(event){"use strict";if(this.inform('submit')===false){event.prevent();return;}return this.canUseXHR()?this._sendViaXHR(event):this._sendViaFrame(event);};ba.prototype._click=function(event){"use strict";var ca=event.getTarget();while(n.isElementNode(ca)){if(ca.type==='submit'){this._clickTarget=ca;setTimeout(this._unclick.bind(this),0);break;}ca=ca.parentNode;}};ba.prototype._unclick=function(){"use strict";this._clickTarget=null;};ba.prototype._sendViaFrame=function(event){"use strict";var ca=this._request=new h();ca.setStatusElement(this._getStatusElement());ca.addStatusIndicator();ca.setOption('useIframeTransport',true);var da=ca.handleResponse.bind(ca),ea=new q('iframe',this._form.action,da),fa=ea.getTransportFrame(),ga=ea.getRequestURI().addQueryData({__iframe:true,__user:l.getID()});this._form.setAttribute('action',ga.toString());this._form.setAttribute('target',fa.name);ca.setJSONPTransport(ea);ca.setURI(ga);ca.setHandler(this.success.bind(this,null));ca.setErrorHandler(this.failure.bind(this,null));ca.setInitialHandler(v(this.initial,this,null));};ba.prototype._sendViaXHR=function(event){"use strict";var ca;if(this._uploadInParallel&&j.isSupported()){ca=new j().setPreprocessHandler(this._preprocessHandler).setData(p.serialize(this._form,this._clickTarget)).setNetworkErrorRetryLimit(this._retryLimit);if(this._concurrentLimit)ca.setLimit(this._concurrentLimit);if(this._files){ca.setFiles(this._files);}else ca.setFiles(w(this._form));var da=[ca.subscribe('progress',function(ia,ja){this.progress(ja,ja.getProgressEvent());}.bind(this)),ca.subscribe('initial',function(ia,ja){this.initial(ja,ja.getResponse());}.bind(this)),ca.subscribe('success',function(ia,ja){this.success(ja,ja.getResponse());}.bind(this)),ca.subscribe('start',function(ia,ja){this.inform('start',{upload:ja});}.bind(this)),ca.subscribe('failure',function(ia,ja){this.failure(ja,ja.getResponse());return false;}.bind(this)),ca.subscribe('complete',function(){while(da.length)da.pop().unsubscribe();})];}else{var ea;if(this._files){ea=p.createFormData(p.serialize(this._form,this._clickTarget));var fa=j.parseFiles(this._files);for(var ga in fa){var ha=fa[ga];if(ha.length===1){ea.append(ga,ha[0]);}else{ga=ga+'[]';ha.forEach(function(ia){ea.append(ga,ia);});}}}else ea=p.createFormData(this._form,this._clickTarget);ca=new h().setRawData(ea).setHandler(this.success.bind(this,null)).setErrorHandler(this.failure.bind(this,null)).setUploadProgressHandler(this.progress.bind(this,null)).setInitialHandler(v(this.initial,this,null));}ca.setAllowCrossOrigin(this._allowCrossOrigin).setAllowCrossPageTransition(this._allowCrossPageTransition).setRelativeTo(this._form).setStatusElement(this._getStatusElement()).setURI(this._form.action).send();this._request=ca;event&&event.prevent();};ba.prototype.forceSendViaXHR=function(){"use strict";return this._sendViaXHR(null);};ba.prototype.initial=function(ca){"use strict";return this.inform('initial',{upload:ca});};ba.prototype.success=function(ca,da){"use strict";var ea={response:da,upload:ca};if(this.inform('success',ea)!==false)o.fire(this._form,'success',ea);this._cleanup();};ba.prototype.failure=function(ca,da){"use strict";var ea={response:da,upload:ca};if(this.inform('failure',ea)!==false)if(o.fire(this._form,'error',ea)!==false)i.defaultErrorHandler(da);this._cleanup();};ba.prototype.progress=function(ca,event){"use strict";this.inform('progress',{event:event,upload:ca});};ba.prototype.abort=function(){"use strict";if(this._request){this._request.abort();this._cleanup();}};ba.prototype.clear=function(){"use strict";x(this._form);};ba.prototype.destroy=function(){"use strict";this._cleanup();while(this._listeners.length)this._listeners.pop().remove();this._listeners=null;this._form.enctype=this._form.encoding=this._previousEncoding;m.remove(this._form,'FileForm');};ba.prototype._cleanup=function(){"use strict";this._request=null;};ba.prototype._getStatusElement=function(){"use strict";return r.byClass(this._form,'stat_elem')||this._form;};ba.getInstance=function(ca){"use strict";return m.get(ca,'FileForm');};t(ba,{EVENTS:['start','submit','initial','progress','success','failure']});e.exports=ba;},null);
__d("FileInput",["ArbiterMixin","DOM","DOMClone","Event","Focus","Keys","UserAgent_DEPRECATED","cx","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=m.ie(),q=o(g);for(var r in q)if(q.hasOwnProperty(r))t[r]=q[r];var s=q===null?null:q.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=q;function t(u,v,w){"use strict";this.container=u;this.control=v;var x=h.scry(this.container,'a')[0];x&&x.removeAttribute('href');var y=h.create('div',{className:"_3jk"},w);h.appendContent(this.control,y);this._boundHandleChange=this._handleChange.bind(this);if(p)this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this);this._setInputElement(w);}t.prototype.getValue=function(){"use strict";return this.input.value;};t.prototype.getInput=function(){"use strict";return this.input;};t.prototype.getContainer=function(){"use strict";return this.container;};t.prototype.getControl=function(){"use strict";return this.control;};t.prototype.clear=function(){"use strict";if(p){var u=i.deepClone(this.input);h.replace(this.input,u);this._setInputElement(u);}else this.input.value='';};t.prototype.destroy=function(){"use strict";this._listener.remove();this._listener=null;if(p){this._IEKeyDownListener.remove();this._IEKeyDownListener=null;}this.container=null;this.control=null;this.input=null;};t.prototype._setInputElement=function(u){"use strict";this.input=u;k.relocate(u,this.control);this._listener&&this._listener.remove();this._listener=j.listen(u,'change',this._boundHandleChange);if(p){this._IEKeyDownListener&&this._IEKeyDownListener.remove();this._IEKeyDownListener=j.listen(u,'keydown',this._boundHandleIEKeyDown);}};t.prototype._handleChange=function(event){"use strict";this.inform('change',event);var u=this.input.form;if(u&&p<9)j.fire(u,'change',event);};t.prototype._handleIEKeyDown=function(event){"use strict";if(event.keyCode===l.RETURN){event.preventDefault();var u=document.createEvent('MouseEvents');u.initEvent('click',true,true);this.input.dispatchEvent(u);}};e.exports=t;},null);
__d("submitForm",["DOM"],function(a,b,c,d,e,f,g){var h=function(i){var j=g.scry(i,'input[type="submit"]')[0];if(j){j.click();}else{j=g.create('input',{type:'submit',className:'hidden_elem'});g.appendContent(i,j);j.click();g.remove(j);}};e.exports=h;},null);
__d("FileInputUploader",["ArbiterMixin","DOM","DTSG","FileForm","Form","copyProperties","mixin","submitForm"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=m(g);for(var p in o)if(o.hasOwnProperty(p))r[p]=o[p];var q=o===null?null:o.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=o;function r(s,t){"use strict";this._inputElem=s;this._form_container=t?t:document.body;this._data={};}r.prototype.setInput=function(s){"use strict";this._inputElem=s;return this;};r.prototype.setURI=function(s){"use strict";this._uri=s;return this;};r.prototype.setData=function(s){"use strict";this._data=s;return this;};r.prototype.setPreprocessHandler=function(s){"use strict";this._preprocessHandler=s;return this;};r.prototype.setNetworkErrorRetryLimit=function(s){"use strict";this._retryLimit=s;return this;};r.prototype.setFiles=function(s){"use strict";this._files=s;return this;};r.prototype.setAllowCrossOrigin=function(s){"use strict";this._allowCrossOrigin=!!s;return this;};r.prototype.setAllowCrossPageTransition=function(s){"use strict";this._allowCrossPageTransition=!!s;return this;};r.prototype.setUploadInParallel=function(s){"use strict";this._uploadInParallel=!!s;return this;};r.prototype.setConcurrentLimit=function(s){"use strict";this._concurrentLimit=s;return this;};r.prototype.abort=function(){"use strict";if(this._fileForm){this._fileForm.abort();this._destroyFileForm();}};r.prototype.send=function(){"use strict";this._createForm();var s=this._inputElem.cloneNode(false);h.replace(this._inputElem,s);h.appendContent(this._formElem,this._inputElem);h.appendContent(this._form_container,this._formElem);n(this._formElem);h.replace(s,this._inputElem);this._removeFormEl();};r.prototype._onFileFormEvent=function(s,t){"use strict";if(s==='success'||s==='failure')this._destroyFileForm();this.inform(s,t);};r.prototype._createForm=function(){"use strict";this._destroyFileForm();this._formElem=h.create('form',{action:this._uri,method:'post'});this._fileForm=new j(this._formElem,null,{allowCrossOrigin:this._allowCrossOrigin,allowCrossPageTransition:this._allowCrossPageTransition,uploadInParallel:this._uploadInParallel,concurrentLimit:this._concurrentLimit,preprocessHandler:this._preprocessHandler,networkErrorRetryLimit:this._retryLimit});if(this._files)this._fileForm.setFiles(this._files);this._fileForm.subscribe(j.EVENTS,this._onFileFormEvent.bind(this));k.createHiddenInputs(l({fb_dtsg:i.getToken()},this._data),this._formElem);};r.prototype._removeFormEl=function(){"use strict";h.remove(this._formElem);this._formElem=null;};r.prototype._destroyFileForm=function(){"use strict";if(this._fileForm){this._fileForm.destroy();this._fileForm=null;}};e.exports=r;},null);
__d("DOMWrapper",[],function(a,b,c,d,e,f){var g,h,i={setRoot:function(j){g=j;},getRoot:function(){return g||document.body;},setWindow:function(j){h=j;},getWindow:function(){return h||self;}};e.exports=i;},null);
__d("Flash",["DOMEventListener","DOMWrapper","QueryString","UserAgent_DEPRECATED","copyProperties","guid","htmlSpecialChars"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={},o,p=h.getWindow().document;function q(v){var w=p.getElementById(v);if(w)w.parentNode.removeChild(w);delete n[v];}function r(){for(var v in n)if(n.hasOwnProperty(v))q(v);}function s(v){return v.replace(/\d+/g,function(w){return '000'.substring(w.length)+w;});}function t(v){if(!o){if(j.ie()>=9)g.add(window,'unload',r);o=true;}n[v]=v;}var u={embed:function(v,w,x,y){var z=l();v=m(v).replace(/&amp;/g,'&');x=k({allowscriptaccess:'always',flashvars:y,movie:v},x||{});if(typeof x.flashvars=='object')x.flashvars=i.encode(x.flashvars);var aa=[];for(var ba in x)if(x.hasOwnProperty(ba)&&x[ba])aa.push('<param name="'+m(ba)+'" value="'+m(x[ba])+'">');var ca=w.appendChild(p.createElement('span')),da='<object '+(j.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+v+'" '+(x.height?'height="'+x.height+'" ':'')+(x.width?'width="'+x.width+'" ':'')+'id="'+z+'">'+aa.join('')+'</object>';ca.innerHTML=da;var ea=ca.firstChild;t(z);return ea;},remove:q,getVersion:function(){var v='Shockwave Flash',w='application/x-shockwave-flash',x='ShockwaveFlash.ShockwaveFlash',y;if(navigator.plugins&&typeof navigator.plugins[v]=='object'){var z=navigator.plugins[v].description;if(z&&navigator.mimeTypes&&navigator.mimeTypes[w]&&navigator.mimeTypes[w].enabledPlugin)y=z.match(/\d+/g);}if(!y)try{y=(new ActiveXObject(x)).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);y=Array.prototype.slice.call(y,1);}catch(aa){}return y;},checkMinVersion:function(v){var w=u.getVersion();if(!w)return false;return s(w.join('.'))>=s(v);},isAvailable:function(){return !!u.getVersion();}};e.exports=u;},null);
__d("PhotosUploadID",[],function(a,b,c,d,e,f){var g=1024,h={getNewID:function(){return (g++).toString();}};e.exports=h;},null);
__d("PhotoLogger",["Event","BanzaiScuba","SpotlightViewerLoggingEvents","SubscriptionsHandler"],function(a,b,c,d,e,f,g,h,i,j){function k(l){"use strict";this.$PhotoLogger0=l;this.$PhotoLogger1={};}k.prototype.log=function(l){"use strict";if(!this.$PhotoLogger1[l]){this.$PhotoLogger2(l);this.$PhotoLogger1[l]=true;}};k.prototype.$PhotoLogger2=function(l){"use strict";this.$PhotoLogger3(i.LOADING,{uri:l});var m=new j(),n=new Image();m.addSubscriptions(g.listen(n,'load',function(){this.$PhotoLogger3(i.LOADED,{uri:l});m.release();}.bind(this)),g.listen(n,'error',function(){this.$PhotoLogger3(i.ERROR,{uri:l});m.release();}.bind(this)),g.listen(n,'abort',function(){this.$PhotoLogger3(i.ABORT,{uri:l});m.release();}.bind(this)));n.src=l;};k.prototype.logEvent=function(l){"use strict";this.$PhotoLogger3(l);};k.prototype.$PhotoLogger3=function(l,m){"use strict";var n=new h('photos_client_loading',null,{addBrowserFields:true});n.addNormal('event',l);n.addNormal('viewer',this.$PhotoLogger0);for(var o in m)n.addNormal(o,m[o]);n.post();};e.exports=k;},null);
__d("XPhotosWaterfallBatchLoggingController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("\/photos\/logging\/waterfall\/batch\/",{});},null);
__d("PhotosUploadWaterfall",["AsyncRequest","AsyncSignal","Banzai","PhotosUploadWaterfallXConfig","XPhotosWaterfallBatchLoggingController","emptyFunction","randomInt","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=[],p={APP_FLASH:'flash_pro',APP_SIMPLE:'simple',APP_ARCHIVE:'archive',APP_COMPOSER:'composer',APP_MESSENGER:'messenger',APP_HTML5:'html5',APP_CHAT:'chat',INSTALL_CANCEL:1,INSTALL_INSTALL:2,INSTALL_UPDATE:3,INSTALL_REINSTALL:4,INSTALL_PERMA_CANCEL:5,INSTALL_SILENT_SKIP:6,INSTALL_DOWNLOAD:7,CERROR_RESIZING_FAILED:6,CERROR_MARKER_EXTRACTION_FAILED:9,BEGIN:1,UPLOAD_START:4,ALL_UPLOADS_DONE:6,CLIENT_ERROR:7,RECOVERABLE_CLIENT_ERROR:12,IMAGES_SELECTED:9,UPGRADE_REQUIRED:11,VERSION:15,SELECT_START:18,SELECT_CANCELED:19,CANCEL:22,CANCEL_DURING_UPLOAD:83,ONE_RESIZING_START:2,ONE_UPLOAD_START:10,ONE_UPLOAD_DONE:29,ONE_RESIZING_DONE:34,PROGRESS_BAR_STOPPED:44,MISSED_BEAT:45,HEART_ATTACK:46,PUBLISH_SENT:99,PUBLISH_START:100,PUBLISH_SUCCESS:101,PUBLISH_FAILURE:102,CLUSTERING_START:103,CLUSTERING_SUCCESS:104,CLUSTERING_FAILURE:105,POST_BUTTON_CLICKED:110,POST_BUTTON_ERROR:111,PHOTO_DELETED:114,PUBLISH_CLIENT_SUCCESS:115,PHOTO_ROTATED:117,SAVE_DRAFT_BUTTON_CLICKED:123,RECOVERY_START_ON_CLIENT:124,CHANGE_PHOTO_QUALITY_SETTING:126,TAG_ADDED:127,TAG_REMOVED:128,TAB_BUTTON_CLICKED:129,EDITABLE_PHOTO_FETCH_START:106,EDITABLE_PHOTO_FETCH_SUCCESS:107,EDITABLE_PHOTO_FETCH_FAILURE:108,EDITABLE_PHOTO_FETCH_DELAY:116,CANCEL_INDIVIDUAL_UPLOAD:109,MISSING_OVERLAY_NODE:118,PUBLISH_RETRY_FAILURE:119,MISSING_UPLOAD_STATE:120,SESSION_POSTED:72,POST_PUBLISHED:80,ONE_UPLOAD_CANCELED:81,ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,RESIZER_AVAILABLE:20,OVERLAY_FIRST:61,ASYNC_AVAILABLE:63,FALLBACK_TO_FLASH:13,RETRY_UPLOAD:17,TAGGED_ALL_FACES:14,VAULT_IMAGES_SELECTED:62,VAULT_CREATE_POST_CANCEL:65,VAULT_SEND_IN_MESSAGE_CLICKED:66,VAULT_DELETE_CANCEL:68,VAULT_ADD_TO_ALBUM_CANCEL:74,VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,VAULT_SHARE_OWN_TIMELINE_CLICKED:77,VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,VAULT_SHARE_IN_A_GROUP_CLICKED:79,VAULT_SYNCED_PAGED_LINK_CLICKED:84,VAULTBOX:'vaultbox',GRID:'grid',SPOTLIGHT_VAULT_VIEWER:'spotlight_vault_viewer',REF_VAULT_NOTIFICATION:'vault_notification',_checkRequiredFields:function(r){},sendBanzai:function(r,s){this._checkRequiredFields(r);var t={};r.scuba_ints=r.scuba_ints||{};r.scuba_ints.client_time=Math.round(Date.now()/1000);if(j.retryBanzai){t.retry=true;r.scuba_ints.nonce=m(4294967296);}i.post(j.deprecatedBanzaiRoute,r,t);if(s)setTimeout(s,0);},sendSignal:function(r,s){this._checkRequiredFields(r);if(j.useBanzai){this.sendBanzai(r,s);}else if(j.reduceLoggingRequests){this.queueLog(r,s);}else{var t=new h('/ajax/photos/waterfall.php',{data:JSON.stringify(r)}).setHandler(s);if(j.timeout)t.setTimeout(10*1000);t.send();}},queueLog:function(r,s){o.push(r);if(!!s){this.flushQueue(s);}else q();},flushQueue:function(r){var s=JSON.stringify(o);o=[];var t=k.getURIBuilder().getURI();new g().setURI(t).setData({logs:s}).setFinallyHandler(r||l).setTimeoutHandler(10*1000,r||l).send();}},q=n(p.flushQueue,j.batchInterval*1000);e.exports=p;},null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],function(a,b,c,d,e,f,g,h){var i=false,j=false,k={likeContent:function(){},like:function(l,m){this.likeContent=l;if(j)return;if(i){this.likeContent();}else{var n=new h().setURI('/like/confirm_like.php').setRelativeTo(m);g.send(n,function(o){j=true;o.subscribe('hide',this.onCloseLikeConfirmDialog.bind(this));o.setCausalElement(m);}.bind(this));}return false;},isShowingConfirmation:function(){return j;},onCloseLikeConfirmDialog:function(){j=false;},likeSkipConfirmation:function(l){i=l;this.likeContent();}};e.exports=k;},null);
__d("Spotlight",["Arbiter","ArbiterMixin","DOM","JSXDOM","Layer","LayerAutoFocus","LayerTabIsolation","ModalLayer","Vector","classWithMixins","copyProperties","csx","cx","joinClasses","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=p(k,u(h));for(var w in v)if(v.hasOwnProperty(w))y[w]=v[w];var x=v===null?null:v.prototype;y.prototype=Object.create(x);y.prototype.constructor=y;y.__superConstructor__=v;function y(aa,ba){"use strict";v.call(this,aa,ba);this.stageMinSize=new o(0,0);this.stagePadding=new o(0,0);}y.prototype._buildWrapper=function(aa,ba){"use strict";var ca=t("_n8 _3qx",aa.rootClassName);return (j.div({className:ca},j.div({className:"_n9"},ba)));};y.prototype._getDefaultBehaviors=function(){"use strict";return x._getDefaultBehaviors.call(this).concat([z,l,m,n]);};y.prototype.getContentRoot=function(){"use strict";if(!this._content)this._content=i.find(this.getRoot(),"div._n3");return this._content;};y.prototype.configure=function(aa){"use strict";if(aa.stageMinSize)this.stageMinSize=aa.stageMinSize;if(aa.stagePadding)this.stagePadding=aa.stagePadding;};y.prototype.onContentLoaded=function(){"use strict";this.inform('content-load');};y.prototype.updatePermalink=function(aa){"use strict";this.inform('permalinkchange',aa);};q(y.prototype,{stageMinSize:null,stagePadding:null});function z(aa){"use strict";this._layer=aa;}z.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe(['show','hide'],function(aa,ba){if(aa==='show'){g.inform('layer_shown',{type:'Spotlight'});}else g.inform('layer_hidden',{type:'Spotlight'});});};z.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};q(z.prototype,{_subscription:null});e.exports=y;},null);
__d("ButtonGroupX",["ArbiterMixin","mixin"],function(a,b,c,d,e,f,g,h){var i=h(g);for(var j in i)if(i.hasOwnProperty(j))l[j]=i[j];var k=i===null?null:i.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=i;function l(m,n){"use strict";n=n||{};this._root=m;this._radioButtons=n.radioButtons||[];this._selected=n.selected;this.initButtonListeners();}l.prototype.initButtonListeners=function(){"use strict";var m=this._radioButtons.length;while(m--){var n=this._radioButtons[m];n.subscribe('select',this.selectButton.bind(this,n));}};l.prototype.getSelected=function(){"use strict";return this._selected;};l.prototype.getSelectedValue=function(){"use strict";return this._selected?this._selected.getValue():null;};l.prototype.selectButton=function(m){"use strict";if(this._selected!==m){this.setSelected(m);this.inform('change',{selected:m});}return this;};l.prototype.setSelected=function(m){"use strict";if(this._selected!==m){if(this._selected)this._selected.setSelected(false);m.setSelected(true);this._selected=m;}return this;};l.prototype.setSelectedValue=function(m){"use strict";var n=this._radioButtons.length;while(n--){var o=this._radioButtons[n];if(o.getValue()===m)return this.setSelected(o);}return this;};e.exports=l;},null);
__d("DialogExpansion",["Animation","DialogPosition","LoadingDialogDimensions","Style"],function(a,b,c,d,e,f,g,h,i,j){var k=400,l=100;function m(n){"use strict";this._dialog=n;this._fixedTopMargin=n.getFixedTopPosition();}m.prototype.enable=function(){"use strict";this._subscription=this._dialog.subscribe('aftershow',this._onAfterShow.bind(this));};m.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};m.prototype.setTargetWidth=function(n){"use strict";this._targetWidth=n;};m.prototype._onAfterShow=function(){"use strict";this._outer=this._dialog.getContentRoot();this._inner=this._dialog.getInnerContent();if(isNaN(parseInt(j.get(this._inner,'height'),10)))return;var n=this._getWidth(),o=i.HEIGHT,p=h.calculateTopMargin(n,o);j.apply(this._inner,{opacity:'0',width:this._dialog.getWidth()+'px'});j.apply(this._outer,{width:n+'px',height:o+'px',marginTop:p+'px',overflow:'hidden'});setTimeout(function(){var q=parseInt(this._dialog.getWidth(),10);if(this._targetWidth)q=this._targetWidth;var r=parseInt(j.get(this._inner,'height'),10),s;if(this._fixedTopMargin){s=this._fixedTopMargin;}else s=h.calculateTopMargin(q,r);this._growThenFade(q,r,s);}.bind(this),100);};m.prototype._growThenFade=function(n,o,p){"use strict";new g(this._outer).to('width',n).to('height',o).to('marginTop',p).duration(k).ease(g.ease.both).ondone(this._fadeIn.bind(this)).go();};m.prototype._fadeIn=function(){"use strict";j.set(this._outer,'overflow','');j.set(this._outer,'height','');new g(this._inner).from('opacity',0).to('opacity',1).ondone(function(){this._dialog.inform('afterexpand');}.bind(this)).duration(l).go();};m.prototype._getWidth=function(){"use strict";return i.WIDTH;};e.exports=m;},null);