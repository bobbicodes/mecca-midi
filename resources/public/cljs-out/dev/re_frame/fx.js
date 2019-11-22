// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_11983 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__11984 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11985 = null;
var count__11986 = (0);
var i__11987 = (0);
while(true){
if((i__11987 < count__11986)){
var vec__11988 = chunk__11985.cljs$core$IIndexed$_nth$arity$2(null,i__11987);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11988,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11988,(1),null);
var temp__5455__auto___12004 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12004)){
var effect_fn_12005 = temp__5455__auto___12004;
(effect_fn_12005.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12005.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12005.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12006 = seq__11984;
var G__12007 = chunk__11985;
var G__12008 = count__11986;
var G__12009 = (i__11987 + (1));
seq__11984 = G__12006;
chunk__11985 = G__12007;
count__11986 = G__12008;
i__11987 = G__12009;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11984);
if(temp__5457__auto__){
var seq__11984__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11984__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11984__$1);
var G__12010 = cljs.core.chunk_rest(seq__11984__$1);
var G__12011 = c__4351__auto__;
var G__12012 = cljs.core.count(c__4351__auto__);
var G__12013 = (0);
seq__11984 = G__12010;
chunk__11985 = G__12011;
count__11986 = G__12012;
i__11987 = G__12013;
continue;
} else {
var vec__11991 = cljs.core.first(seq__11984__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11991,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11991,(1),null);
var temp__5455__auto___12014 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12014)){
var effect_fn_12015 = temp__5455__auto___12014;
(effect_fn_12015.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12015.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12015.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12016 = cljs.core.next(seq__11984__$1);
var G__12017 = null;
var G__12018 = (0);
var G__12019 = (0);
seq__11984 = G__12016;
chunk__11985 = G__12017;
count__11986 = G__12018;
i__11987 = G__12019;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__11546__auto___12020 = re_frame.interop.now();
var duration__11547__auto___12021 = (end__11546__auto___12020 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__11547__auto___12021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__11546__auto___12020);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11983;
}} else {
var seq__11994 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__11995 = null;
var count__11996 = (0);
var i__11997 = (0);
while(true){
if((i__11997 < count__11996)){
var vec__11998 = chunk__11995.cljs$core$IIndexed$_nth$arity$2(null,i__11997);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11998,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11998,(1),null);
var temp__5455__auto___12022 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12022)){
var effect_fn_12023 = temp__5455__auto___12022;
(effect_fn_12023.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12023.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12023.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12024 = seq__11994;
var G__12025 = chunk__11995;
var G__12026 = count__11996;
var G__12027 = (i__11997 + (1));
seq__11994 = G__12024;
chunk__11995 = G__12025;
count__11996 = G__12026;
i__11997 = G__12027;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__11994);
if(temp__5457__auto__){
var seq__11994__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11994__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__11994__$1);
var G__12028 = cljs.core.chunk_rest(seq__11994__$1);
var G__12029 = c__4351__auto__;
var G__12030 = cljs.core.count(c__4351__auto__);
var G__12031 = (0);
seq__11994 = G__12028;
chunk__11995 = G__12029;
count__11996 = G__12030;
i__11997 = G__12031;
continue;
} else {
var vec__12001 = cljs.core.first(seq__11994__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12001,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12001,(1),null);
var temp__5455__auto___12032 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12032)){
var effect_fn_12033 = temp__5455__auto___12032;
(effect_fn_12033.cljs$core$IFn$_invoke$arity$1 ? effect_fn_12033.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_12033.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__12034 = cljs.core.next(seq__11994__$1);
var G__12035 = null;
var G__12036 = (0);
var G__12037 = (0);
seq__11994 = G__12034;
chunk__11995 = G__12035;
count__11996 = G__12036;
i__11997 = G__12037;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__12038 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12039 = null;
var count__12040 = (0);
var i__12041 = (0);
while(true){
if((i__12041 < count__12040)){
var map__12042 = chunk__12039.cljs$core$IIndexed$_nth$arity$2(null,i__12041);
var map__12042__$1 = ((((!((map__12042 == null)))?(((((map__12042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12042):map__12042);
var effect = map__12042__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12042__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12042__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12038,chunk__12039,count__12040,i__12041,map__12042,map__12042__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12038,chunk__12039,count__12040,i__12041,map__12042,map__12042__$1,effect,ms,dispatch))
,ms);
}


var G__12046 = seq__12038;
var G__12047 = chunk__12039;
var G__12048 = count__12040;
var G__12049 = (i__12041 + (1));
seq__12038 = G__12046;
chunk__12039 = G__12047;
count__12040 = G__12048;
i__12041 = G__12049;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12038);
if(temp__5457__auto__){
var seq__12038__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12038__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12038__$1);
var G__12050 = cljs.core.chunk_rest(seq__12038__$1);
var G__12051 = c__4351__auto__;
var G__12052 = cljs.core.count(c__4351__auto__);
var G__12053 = (0);
seq__12038 = G__12050;
chunk__12039 = G__12051;
count__12040 = G__12052;
i__12041 = G__12053;
continue;
} else {
var map__12044 = cljs.core.first(seq__12038__$1);
var map__12044__$1 = ((((!((map__12044 == null)))?(((((map__12044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12044):map__12044);
var effect = map__12044__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12044__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12044__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__12038,chunk__12039,count__12040,i__12041,map__12044,map__12044__$1,effect,ms,dispatch,seq__12038__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__12038,chunk__12039,count__12040,i__12041,map__12044,map__12044__$1,effect,ms,dispatch,seq__12038__$1,temp__5457__auto__))
,ms);
}


var G__12054 = cljs.core.next(seq__12038__$1);
var G__12055 = null;
var G__12056 = (0);
var G__12057 = (0);
seq__12038 = G__12054;
chunk__12039 = G__12055;
count__12040 = G__12056;
i__12041 = G__12057;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__12058 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12059 = null;
var count__12060 = (0);
var i__12061 = (0);
while(true){
if((i__12061 < count__12060)){
var event = chunk__12059.cljs$core$IIndexed$_nth$arity$2(null,i__12061);
re_frame.router.dispatch(event);


var G__12062 = seq__12058;
var G__12063 = chunk__12059;
var G__12064 = count__12060;
var G__12065 = (i__12061 + (1));
seq__12058 = G__12062;
chunk__12059 = G__12063;
count__12060 = G__12064;
i__12061 = G__12065;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12058);
if(temp__5457__auto__){
var seq__12058__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12058__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12058__$1);
var G__12066 = cljs.core.chunk_rest(seq__12058__$1);
var G__12067 = c__4351__auto__;
var G__12068 = cljs.core.count(c__4351__auto__);
var G__12069 = (0);
seq__12058 = G__12066;
chunk__12059 = G__12067;
count__12060 = G__12068;
i__12061 = G__12069;
continue;
} else {
var event = cljs.core.first(seq__12058__$1);
re_frame.router.dispatch(event);


var G__12070 = cljs.core.next(seq__12058__$1);
var G__12071 = null;
var G__12072 = (0);
var G__12073 = (0);
seq__12058 = G__12070;
chunk__12059 = G__12071;
count__12060 = G__12072;
i__12061 = G__12073;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__12074 = cljs.core.seq(value);
var chunk__12075 = null;
var count__12076 = (0);
var i__12077 = (0);
while(true){
if((i__12077 < count__12076)){
var event = chunk__12075.cljs$core$IIndexed$_nth$arity$2(null,i__12077);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12078 = seq__12074;
var G__12079 = chunk__12075;
var G__12080 = count__12076;
var G__12081 = (i__12077 + (1));
seq__12074 = G__12078;
chunk__12075 = G__12079;
count__12076 = G__12080;
i__12077 = G__12081;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__12074);
if(temp__5457__auto__){
var seq__12074__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12074__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__12074__$1);
var G__12082 = cljs.core.chunk_rest(seq__12074__$1);
var G__12083 = c__4351__auto__;
var G__12084 = cljs.core.count(c__4351__auto__);
var G__12085 = (0);
seq__12074 = G__12082;
chunk__12075 = G__12083;
count__12076 = G__12084;
i__12077 = G__12085;
continue;
} else {
var event = cljs.core.first(seq__12074__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__12086 = cljs.core.next(seq__12074__$1);
var G__12087 = null;
var G__12088 = (0);
var G__12089 = (0);
seq__12074 = G__12086;
chunk__12075 = G__12087;
count__12076 = G__12088;
i__12077 = G__12089;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
