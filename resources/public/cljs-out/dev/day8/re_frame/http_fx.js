// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__22025){
var vec__22026 = p__22025;
var success_QMARK_ = cljs.core.nth.call(null,vec__22026,(0),null);
var response = cljs.core.nth.call(null,vec__22026,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__22031){
var map__22032 = p__22031;
var map__22032__$1 = ((((!((map__22032 == null)))?(((((map__22032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22032):map__22032);
var request = map__22032__$1;
var on_success = cljs.core.get.call(null,map__22032__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__22032__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__22032,map__22032__$1,request,on_success,on_failure){
return (function (p1__22029_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__22029_SHARP_));
});})(api,map__22032,map__22032__$1,request,on_success,on_failure))
,((function (api,map__22032,map__22032__$1,request,on_success,on_failure){
return (function (p1__22030_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__22030_SHARP_));
});})(api,map__22032,map__22032__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__22034 = cljs.core.seq.call(null,seq_request_maps);
var chunk__22035 = null;
var count__22036 = (0);
var i__22037 = (0);
while(true){
if((i__22037 < count__22036)){
var request__$1 = cljs.core._nth.call(null,chunk__22035,i__22037);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__22038 = seq__22034;
var G__22039 = chunk__22035;
var G__22040 = count__22036;
var G__22041 = (i__22037 + (1));
seq__22034 = G__22038;
chunk__22035 = G__22039;
count__22036 = G__22040;
i__22037 = G__22041;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22034);
if(temp__5457__auto__){
var seq__22034__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22034__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22034__$1);
var G__22042 = cljs.core.chunk_rest.call(null,seq__22034__$1);
var G__22043 = c__4351__auto__;
var G__22044 = cljs.core.count.call(null,c__4351__auto__);
var G__22045 = (0);
seq__22034 = G__22042;
chunk__22035 = G__22043;
count__22036 = G__22044;
i__22037 = G__22045;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__22034__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__22046 = cljs.core.next.call(null,seq__22034__$1);
var G__22047 = null;
var G__22048 = (0);
var G__22049 = (0);
seq__22034 = G__22046;
chunk__22035 = G__22047;
count__22036 = G__22048;
i__22037 = G__22049;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map
