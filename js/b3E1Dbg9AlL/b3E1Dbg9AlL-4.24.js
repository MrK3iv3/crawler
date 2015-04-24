/*!CK:2472178421!*//*1429842393,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["9Ehbf"]); }

__d("StarsRatableBase",["Event","Arbiter","CSS","DOM","Parent","Run","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p,q,r){this.root=o;this.freezeOnClick=p;this.stars=j.scry(o,'a');this.listeners=[g.listen(this.root,'click',this._onClick.bind(this)),g.listen(this.root,'mousemove',this._onMouseMove.bind(this)),g.listen(this.root,'mouseout',this._onMouseOut.bind(this))];this.holdMouseMove=false;this.setRating(q);this.layerHides=0;if(r)h.subscribe('layer_hidden',function(){this.layerHides++;if(this.layerHides>=2)this.setRating(0);}.bind(this));l.onLeave(this.destroyListeners.bind(this));}n.init=function(o,p,q,r){return new n(o,p,q,r);};m(n.prototype,{_onClick:function(event){this.layerHides=0;var o=this._getStarIndexFromEvent(event);if(!o)return;this.setRating(o);if(this.freezeOnClick){this.freeze();}else this.holdMouseMove=true;event.prevent();},_onMouseMove:function(event){if(this.holdMouseMove)return;var o=this._getStarIndexFromEvent(event);if(!o)return;this.setStars(o,true);},_onMouseOut:function(event){this.holdMouseMove=false;this.updateStars();},_getStarIndexFromEvent:function(event){var o=k.byTag(event.getTarget(),'a');if(o)return this.stars.indexOf(o)+1;return 0;},setRating:function(o){this._rating=o;this.updateStars();},updateStars:function(){this.setStars(this._rating);},setStars:function(o,p){var q=p?'hoverStar':'fullStar',r=p?'fullStar':'hoverStar';for(var s=0;s<this.stars.length;++s){i.removeClass(this.stars[s],r);var t=(s>=o);i.conditionClass(this.stars[s],q,!t);i.conditionClass(this.stars[s],'emptyStar',t);}},freeze:function(){i.addClass(this.root,'uiStarsRated');this.destroyListeners();},destroyListeners:function(){this.listeners.forEach(function(o){o&&o.remove();});this.listeners=[];}});a.StarsRatableBase=e.exports=n;},null);
__d("ReviewsController",["Arbiter","Dialog","Event","React","Image.react","Run","DOM","csx","fbt","ix","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r={},s={},t={},u={},v={},w={registerRevealProfanity:function(x,y,z){i.listen(y,'click',function(){x.style.display='none';z.style.display='inline';});},registerButton:function(x,y){r[y]=r[y]||[];r[y].push(x);},registerViewerReview:function(x,y){s[y]=s[y]||[];s[y].push(x);},registerComposer:function(x,y){t[y]=t[y]||[];t[y].push(x);},registerToggle:function(x,y,z,aa){u[x]=u[x]||[];u[x].push([y,z,aa]);},addUserReview:function(x,y,z,aa,ba,ca){this._updateState(true,x,y,z,aa,ba,ca);},deleteUserReview:function(x,y,z){this._updateState(false,x,null,null,null,y,z);},_updateState:function(x,y,z,aa,ba,ca,da){var ea,fa=s[y]||[];for(ea=0;ea<fa.length;ea++)m.remove(fa[ea]);var ga=u[y]||[];for(ea=0;ea<ga.length;ea++){var ha=ga[ea],ia=ha[x?1:2];m.setContent(ha[0],ia);}var ja=t[y]||[];for(ea=0;ea<ja.length;ea++){var ka=ja[ea];if(x){ka.hide();}else{ka.clear();ka.show();}}var la=r[y]||[];for(ea=0;ea<la.length;ea++){var ma=la[ea],na=m.find(ma,'.uiButtonText'),oa=m.find(ma,'i'),pa,qa;if(x){pa=p('/images/icons/buttons/check.png');qa="Reviewed";}else{pa=p('/images/icons/buttons/feature.png');qa="Review";}var ra=m.create('span'),sa={"padding-right":"5px"};j.render(j.createElement("div",null,qa),na);j.render(j.createElement(k,{src:pa,style:sa}),ra);m.replace(oa,ra);}if(x){var ta=m.scry(document,'#page_recommendations_browse_list')[0];if(ta)m.prependContent(ta,z);var ua=q('page_reviews_tab_list');if(ua)m.prependContent(ua,aa);var va="ul._1rhx",wa=m.scry(document,va)[0];if(wa)m.prependContent(wa,ba);}if(ca){var xa=q('page_reviews_pill_and_histogram');if(xa)m.replace(xa,ca);}if(da){var ya=q('pages_inline_rating_summary');if(ya)m.replace(ya,da);}},registerPhotoUpload:function(x,y){g.subscribe('multi-upload/images-upload-completed/'+y,function(){v[y]=false;});g.subscribe('multi-upload/images-upload-start/'+y,function(){v[y]=true;});i.listen(x,'submit',function(){if(v[y]){new h().setTitle("Photos Are Uploading").setSemiModal(true).setButtons(h.OK).setBody("Please wait until photo is uploaded before posting.").show();return false;}return true;}.bind(this));}};l.onLeave(function(){r={};s={};t={};u={};v={};});e.exports=w;},null);
__d("CovercardArrow",["ContextualDialogArrow","CSS","DOMQuery","Locale","Style","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=-45,o=45,p=12;if(j.isRTL()){n=-n;o=-o;}function q(s){"use strict";this._layer=s;}q.prototype.enable=function(){"use strict";this._layer.enableBehavior(g);var s=this._layer.getContentRoot();this._arrowWrapper=i.scry(s,"._7lh")[0];if(!this._arrowWrapper)return;this._arrowShadow=i.scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var t=null;if(r(this._arrowWrapper))t=this._renderArrowWithRotate.bind(this);if(!t)return;if(j.isRTL())h.addClass(s,"_7lf");this._subscription=this._layer.subscribe('reposition',function(u,v){var w=v.getPosition()=='below';h.conditionClass(s,"_53ih",w);w&&t(v);});};q.prototype.disable=function(){"use strict";this._subscription&&this._subscription.unsubscribe();this._subscription=null;};q.prototype._calculateArrowOffset=function(s){"use strict";var t=g.getOffsetPercent(s),u=g.getOffset(s,t,this._layer),v=k.get(this._layer.getContentRoot(),'width');return parseInt(v,10)*(t/100)+u;};q.prototype._renderArrowWithRotate=function(s){"use strict";var t=i.scry(this._arrowWrapper,"._7lj")[0];if(!t)return;var u=i.scry(this._arrowWrapper,"._1ubp")[0];if(!u)return;var v=r(this._arrowWrapper);if(!v)return;var w=this._calculateArrowOffset(s),x=p+w,y=-p;if(j.isRTL()){x=-x;y=-y;}this._arrowWrapper.style[v]='translate('+x+'px, -'+p+'px) '+'rotate('+o+'deg)';t.style[v]='rotate('+n+'deg) '+'translate('+(-x)+'px, 0px)';u.style[v]='rotate('+n+'deg) '+'translate('+y+'px, 0)';};function r(s){if(!s)s=document.body;var t=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],u;while(u=t.shift())if(s.style[u]!==(void 0))return u;return null;}e.exports=q;},null);