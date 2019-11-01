// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10421 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__10422 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10423 = null;
var count__10424 = (0);
var i__10425 = (0);
while(true){
if((i__10425 < count__10424)){
var vec__10426 = cljs.core._nth.call(null,chunk__10423,i__10425);
var effect_key = cljs.core.nth.call(null,vec__10426,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10426,(1),null);
var temp__5455__auto___10442 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10442)){
var effect_fn_10443 = temp__5455__auto___10442;
effect_fn_10443.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10444 = seq__10422;
var G__10445 = chunk__10423;
var G__10446 = count__10424;
var G__10447 = (i__10425 + (1));
seq__10422 = G__10444;
chunk__10423 = G__10445;
count__10424 = G__10446;
i__10425 = G__10447;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10422);
if(temp__5457__auto__){
var seq__10422__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10422__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10422__$1);
var G__10448 = cljs.core.chunk_rest.call(null,seq__10422__$1);
var G__10449 = c__4351__auto__;
var G__10450 = cljs.core.count.call(null,c__4351__auto__);
var G__10451 = (0);
seq__10422 = G__10448;
chunk__10423 = G__10449;
count__10424 = G__10450;
i__10425 = G__10451;
continue;
} else {
var vec__10429 = cljs.core.first.call(null,seq__10422__$1);
var effect_key = cljs.core.nth.call(null,vec__10429,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10429,(1),null);
var temp__5455__auto___10452 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10452)){
var effect_fn_10453 = temp__5455__auto___10452;
effect_fn_10453.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10454 = cljs.core.next.call(null,seq__10422__$1);
var G__10455 = null;
var G__10456 = (0);
var G__10457 = (0);
seq__10422 = G__10454;
chunk__10423 = G__10455;
count__10424 = G__10456;
i__10425 = G__10457;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10000__auto___10458 = re_frame.interop.now.call(null);
var duration__10001__auto___10459 = (end__10000__auto___10458 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10001__auto___10459,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__10000__auto___10458);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10421;
}} else {
var seq__10432 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10433 = null;
var count__10434 = (0);
var i__10435 = (0);
while(true){
if((i__10435 < count__10434)){
var vec__10436 = cljs.core._nth.call(null,chunk__10433,i__10435);
var effect_key = cljs.core.nth.call(null,vec__10436,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10436,(1),null);
var temp__5455__auto___10460 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10460)){
var effect_fn_10461 = temp__5455__auto___10460;
effect_fn_10461.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10462 = seq__10432;
var G__10463 = chunk__10433;
var G__10464 = count__10434;
var G__10465 = (i__10435 + (1));
seq__10432 = G__10462;
chunk__10433 = G__10463;
count__10434 = G__10464;
i__10435 = G__10465;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10432);
if(temp__5457__auto__){
var seq__10432__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10432__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10432__$1);
var G__10466 = cljs.core.chunk_rest.call(null,seq__10432__$1);
var G__10467 = c__4351__auto__;
var G__10468 = cljs.core.count.call(null,c__4351__auto__);
var G__10469 = (0);
seq__10432 = G__10466;
chunk__10433 = G__10467;
count__10434 = G__10468;
i__10435 = G__10469;
continue;
} else {
var vec__10439 = cljs.core.first.call(null,seq__10432__$1);
var effect_key = cljs.core.nth.call(null,vec__10439,(0),null);
var effect_value = cljs.core.nth.call(null,vec__10439,(1),null);
var temp__5455__auto___10470 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___10470)){
var effect_fn_10471 = temp__5455__auto___10470;
effect_fn_10471.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__10472 = cljs.core.next.call(null,seq__10432__$1);
var G__10473 = null;
var G__10474 = (0);
var G__10475 = (0);
seq__10432 = G__10472;
chunk__10433 = G__10473;
count__10434 = G__10474;
i__10435 = G__10475;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10476 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10477 = null;
var count__10478 = (0);
var i__10479 = (0);
while(true){
if((i__10479 < count__10478)){
var map__10480 = cljs.core._nth.call(null,chunk__10477,i__10479);
var map__10480__$1 = ((((!((map__10480 == null)))?(((((map__10480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10480):map__10480);
var effect = map__10480__$1;
var ms = cljs.core.get.call(null,map__10480__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10480__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10476,chunk__10477,count__10478,i__10479,map__10480,map__10480__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10476,chunk__10477,count__10478,i__10479,map__10480,map__10480__$1,effect,ms,dispatch))
,ms);
}


var G__10484 = seq__10476;
var G__10485 = chunk__10477;
var G__10486 = count__10478;
var G__10487 = (i__10479 + (1));
seq__10476 = G__10484;
chunk__10477 = G__10485;
count__10478 = G__10486;
i__10479 = G__10487;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10476);
if(temp__5457__auto__){
var seq__10476__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10476__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10476__$1);
var G__10488 = cljs.core.chunk_rest.call(null,seq__10476__$1);
var G__10489 = c__4351__auto__;
var G__10490 = cljs.core.count.call(null,c__4351__auto__);
var G__10491 = (0);
seq__10476 = G__10488;
chunk__10477 = G__10489;
count__10478 = G__10490;
i__10479 = G__10491;
continue;
} else {
var map__10482 = cljs.core.first.call(null,seq__10476__$1);
var map__10482__$1 = ((((!((map__10482 == null)))?(((((map__10482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10482):map__10482);
var effect = map__10482__$1;
var ms = cljs.core.get.call(null,map__10482__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10482__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10476,chunk__10477,count__10478,i__10479,map__10482,map__10482__$1,effect,ms,dispatch,seq__10476__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10476,chunk__10477,count__10478,i__10479,map__10482,map__10482__$1,effect,ms,dispatch,seq__10476__$1,temp__5457__auto__))
,ms);
}


var G__10492 = cljs.core.next.call(null,seq__10476__$1);
var G__10493 = null;
var G__10494 = (0);
var G__10495 = (0);
seq__10476 = G__10492;
chunk__10477 = G__10493;
count__10478 = G__10494;
i__10479 = G__10495;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__10496 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__10497 = null;
var count__10498 = (0);
var i__10499 = (0);
while(true){
if((i__10499 < count__10498)){
var event = cljs.core._nth.call(null,chunk__10497,i__10499);
re_frame.router.dispatch.call(null,event);


var G__10500 = seq__10496;
var G__10501 = chunk__10497;
var G__10502 = count__10498;
var G__10503 = (i__10499 + (1));
seq__10496 = G__10500;
chunk__10497 = G__10501;
count__10498 = G__10502;
i__10499 = G__10503;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10496);
if(temp__5457__auto__){
var seq__10496__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10496__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10496__$1);
var G__10504 = cljs.core.chunk_rest.call(null,seq__10496__$1);
var G__10505 = c__4351__auto__;
var G__10506 = cljs.core.count.call(null,c__4351__auto__);
var G__10507 = (0);
seq__10496 = G__10504;
chunk__10497 = G__10505;
count__10498 = G__10506;
i__10499 = G__10507;
continue;
} else {
var event = cljs.core.first.call(null,seq__10496__$1);
re_frame.router.dispatch.call(null,event);


var G__10508 = cljs.core.next.call(null,seq__10496__$1);
var G__10509 = null;
var G__10510 = (0);
var G__10511 = (0);
seq__10496 = G__10508;
chunk__10497 = G__10509;
count__10498 = G__10510;
i__10499 = G__10511;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__10512 = cljs.core.seq.call(null,value);
var chunk__10513 = null;
var count__10514 = (0);
var i__10515 = (0);
while(true){
if((i__10515 < count__10514)){
var event = cljs.core._nth.call(null,chunk__10513,i__10515);
clear_event.call(null,event);


var G__10516 = seq__10512;
var G__10517 = chunk__10513;
var G__10518 = count__10514;
var G__10519 = (i__10515 + (1));
seq__10512 = G__10516;
chunk__10513 = G__10517;
count__10514 = G__10518;
i__10515 = G__10519;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10512);
if(temp__5457__auto__){
var seq__10512__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10512__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10512__$1);
var G__10520 = cljs.core.chunk_rest.call(null,seq__10512__$1);
var G__10521 = c__4351__auto__;
var G__10522 = cljs.core.count.call(null,c__4351__auto__);
var G__10523 = (0);
seq__10512 = G__10520;
chunk__10513 = G__10521;
count__10514 = G__10522;
i__10515 = G__10523;
continue;
} else {
var event = cljs.core.first.call(null,seq__10512__$1);
clear_event.call(null,event);


var G__10524 = cljs.core.next.call(null,seq__10512__$1);
var G__10525 = null;
var G__10526 = (0);
var G__10527 = (0);
seq__10512 = G__10524;
chunk__10513 = G__10525;
count__10514 = G__10526;
i__10515 = G__10527;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
