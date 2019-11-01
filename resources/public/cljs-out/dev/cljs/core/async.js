// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14808 = arguments.length;
switch (G__14808) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14809 = (function (f,blockable,meta14810){
this.f = f;
this.blockable = blockable;
this.meta14810 = meta14810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14811,meta14810__$1){
var self__ = this;
var _14811__$1 = this;
return (new cljs.core.async.t_cljs$core$async14809(self__.f,self__.blockable,meta14810__$1));
});

cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14811){
var self__ = this;
var _14811__$1 = this;
return self__.meta14810;
});

cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14810","meta14810",-263022611,null)], null);
});

cljs.core.async.t_cljs$core$async14809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14809";

cljs.core.async.t_cljs$core$async14809.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14809");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14809.
 */
cljs.core.async.__GT_t_cljs$core$async14809 = (function cljs$core$async$__GT_t_cljs$core$async14809(f__$1,blockable__$1,meta14810){
return (new cljs.core.async.t_cljs$core$async14809(f__$1,blockable__$1,meta14810));
});

}

return (new cljs.core.async.t_cljs$core$async14809(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14815 = arguments.length;
switch (G__14815) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14818 = arguments.length;
switch (G__14818) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14821 = arguments.length;
switch (G__14821) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14823 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14823);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14823,ret){
return (function (){
return fn1.call(null,val_14823);
});})(val_14823,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14825 = arguments.length;
switch (G__14825) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___14827 = n;
var x_14828 = (0);
while(true){
if((x_14828 < n__4408__auto___14827)){
(a[x_14828] = x_14828);

var G__14829 = (x_14828 + (1));
x_14828 = G__14829;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14830 = (function (flag,meta14831){
this.flag = flag;
this.meta14831 = meta14831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14832,meta14831__$1){
var self__ = this;
var _14832__$1 = this;
return (new cljs.core.async.t_cljs$core$async14830(self__.flag,meta14831__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14832){
var self__ = this;
var _14832__$1 = this;
return self__.meta14831;
});})(flag))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14830.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14831","meta14831",-235203616,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14830";

cljs.core.async.t_cljs$core$async14830.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14830");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14830.
 */
cljs.core.async.__GT_t_cljs$core$async14830 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14830(flag__$1,meta14831){
return (new cljs.core.async.t_cljs$core$async14830(flag__$1,meta14831));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14830(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14833 = (function (flag,cb,meta14834){
this.flag = flag;
this.cb = cb;
this.meta14834 = meta14834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14835,meta14834__$1){
var self__ = this;
var _14835__$1 = this;
return (new cljs.core.async.t_cljs$core$async14833(self__.flag,self__.cb,meta14834__$1));
});

cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14835){
var self__ = this;
var _14835__$1 = this;
return self__.meta14834;
});

cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14834","meta14834",619545371,null)], null);
});

cljs.core.async.t_cljs$core$async14833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14833";

cljs.core.async.t_cljs$core$async14833.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14833");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14833.
 */
cljs.core.async.__GT_t_cljs$core$async14833 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14833(flag__$1,cb__$1,meta14834){
return (new cljs.core.async.t_cljs$core$async14833(flag__$1,cb__$1,meta14834));
});

}

return (new cljs.core.async.t_cljs$core$async14833(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14836_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14836_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14838 = (i + (1));
i = G__14838;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14844 = arguments.length;
var i__4532__auto___14845 = (0);
while(true){
if((i__4532__auto___14845 < len__4531__auto___14844)){
args__4534__auto__.push((arguments[i__4532__auto___14845]));

var G__14846 = (i__4532__auto___14845 + (1));
i__4532__auto___14845 = G__14846;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14841){
var map__14842 = p__14841;
var map__14842__$1 = ((((!((map__14842 == null)))?(((((map__14842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14842):map__14842);
var opts = map__14842__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14839){
var G__14840 = cljs.core.first.call(null,seq14839);
var seq14839__$1 = cljs.core.next.call(null,seq14839);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14840,seq14839__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14848 = arguments.length;
switch (G__14848) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12885__auto___14894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___14894){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___14894){
return (function (state_14872){
var state_val_14873 = (state_14872[(1)]);
if((state_val_14873 === (7))){
var inst_14868 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
var statearr_14874_14895 = state_14872__$1;
(statearr_14874_14895[(2)] = inst_14868);

(statearr_14874_14895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (1))){
var state_14872__$1 = state_14872;
var statearr_14875_14896 = state_14872__$1;
(statearr_14875_14896[(2)] = null);

(statearr_14875_14896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (4))){
var inst_14851 = (state_14872[(7)]);
var inst_14851__$1 = (state_14872[(2)]);
var inst_14852 = (inst_14851__$1 == null);
var state_14872__$1 = (function (){var statearr_14876 = state_14872;
(statearr_14876[(7)] = inst_14851__$1);

return statearr_14876;
})();
if(cljs.core.truth_(inst_14852)){
var statearr_14877_14897 = state_14872__$1;
(statearr_14877_14897[(1)] = (5));

} else {
var statearr_14878_14898 = state_14872__$1;
(statearr_14878_14898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (13))){
var state_14872__$1 = state_14872;
var statearr_14879_14899 = state_14872__$1;
(statearr_14879_14899[(2)] = null);

(statearr_14879_14899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (6))){
var inst_14851 = (state_14872[(7)]);
var state_14872__$1 = state_14872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14872__$1,(11),to,inst_14851);
} else {
if((state_val_14873 === (3))){
var inst_14870 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14872__$1,inst_14870);
} else {
if((state_val_14873 === (12))){
var state_14872__$1 = state_14872;
var statearr_14880_14900 = state_14872__$1;
(statearr_14880_14900[(2)] = null);

(statearr_14880_14900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (2))){
var state_14872__$1 = state_14872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14872__$1,(4),from);
} else {
if((state_val_14873 === (11))){
var inst_14861 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
if(cljs.core.truth_(inst_14861)){
var statearr_14881_14901 = state_14872__$1;
(statearr_14881_14901[(1)] = (12));

} else {
var statearr_14882_14902 = state_14872__$1;
(statearr_14882_14902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (9))){
var state_14872__$1 = state_14872;
var statearr_14883_14903 = state_14872__$1;
(statearr_14883_14903[(2)] = null);

(statearr_14883_14903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (5))){
var state_14872__$1 = state_14872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14884_14904 = state_14872__$1;
(statearr_14884_14904[(1)] = (8));

} else {
var statearr_14885_14905 = state_14872__$1;
(statearr_14885_14905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (14))){
var inst_14866 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
var statearr_14886_14906 = state_14872__$1;
(statearr_14886_14906[(2)] = inst_14866);

(statearr_14886_14906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (10))){
var inst_14858 = (state_14872[(2)]);
var state_14872__$1 = state_14872;
var statearr_14887_14907 = state_14872__$1;
(statearr_14887_14907[(2)] = inst_14858);

(statearr_14887_14907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14873 === (8))){
var inst_14855 = cljs.core.async.close_BANG_.call(null,to);
var state_14872__$1 = state_14872;
var statearr_14888_14908 = state_14872__$1;
(statearr_14888_14908[(2)] = inst_14855);

(statearr_14888_14908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___14894))
;
return ((function (switch__12726__auto__,c__12885__auto___14894){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_14889 = [null,null,null,null,null,null,null,null];
(statearr_14889[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_14889[(1)] = (1));

return statearr_14889;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_14872){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_14872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e14890){if((e14890 instanceof Object)){
var ex__12730__auto__ = e14890;
var statearr_14891_14909 = state_14872;
(statearr_14891_14909[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14910 = state_14872;
state_14872 = G__14910;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_14872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_14872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___14894))
})();
var state__12887__auto__ = (function (){var statearr_14892 = f__12886__auto__.call(null);
(statearr_14892[(6)] = c__12885__auto___14894);

return statearr_14892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___14894))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14911){
var vec__14912 = p__14911;
var v = cljs.core.nth.call(null,vec__14912,(0),null);
var p = cljs.core.nth.call(null,vec__14912,(1),null);
var job = vec__14912;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12885__auto___15083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___15083,res,vec__14912,v,p,job,jobs,results){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___15083,res,vec__14912,v,p,job,jobs,results){
return (function (state_14919){
var state_val_14920 = (state_14919[(1)]);
if((state_val_14920 === (1))){
var state_14919__$1 = state_14919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14919__$1,(2),res,v);
} else {
if((state_val_14920 === (2))){
var inst_14916 = (state_14919[(2)]);
var inst_14917 = cljs.core.async.close_BANG_.call(null,res);
var state_14919__$1 = (function (){var statearr_14921 = state_14919;
(statearr_14921[(7)] = inst_14916);

return statearr_14921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14919__$1,inst_14917);
} else {
return null;
}
}
});})(c__12885__auto___15083,res,vec__14912,v,p,job,jobs,results))
;
return ((function (switch__12726__auto__,c__12885__auto___15083,res,vec__14912,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0 = (function (){
var statearr_14922 = [null,null,null,null,null,null,null,null];
(statearr_14922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__);

(statearr_14922[(1)] = (1));

return statearr_14922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1 = (function (state_14919){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_14919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e14923){if((e14923 instanceof Object)){
var ex__12730__auto__ = e14923;
var statearr_14924_15084 = state_14919;
(statearr_14924_15084[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15085 = state_14919;
state_14919 = G__15085;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = function(state_14919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1.call(this,state_14919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___15083,res,vec__14912,v,p,job,jobs,results))
})();
var state__12887__auto__ = (function (){var statearr_14925 = f__12886__auto__.call(null);
(statearr_14925[(6)] = c__12885__auto___15083);

return statearr_14925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___15083,res,vec__14912,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14926){
var vec__14927 = p__14926;
var v = cljs.core.nth.call(null,vec__14927,(0),null);
var p = cljs.core.nth.call(null,vec__14927,(1),null);
var job = vec__14927;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___15086 = n;
var __15087 = (0);
while(true){
if((__15087 < n__4408__auto___15086)){
var G__14930_15088 = type;
var G__14930_15089__$1 = (((G__14930_15088 instanceof cljs.core.Keyword))?G__14930_15088.fqn:null);
switch (G__14930_15089__$1) {
case "compute":
var c__12885__auto___15091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15087,c__12885__auto___15091,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (__15087,c__12885__auto___15091,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async){
return (function (state_14943){
var state_val_14944 = (state_14943[(1)]);
if((state_val_14944 === (1))){
var state_14943__$1 = state_14943;
var statearr_14945_15092 = state_14943__$1;
(statearr_14945_15092[(2)] = null);

(statearr_14945_15092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (2))){
var state_14943__$1 = state_14943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14943__$1,(4),jobs);
} else {
if((state_val_14944 === (3))){
var inst_14941 = (state_14943[(2)]);
var state_14943__$1 = state_14943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14943__$1,inst_14941);
} else {
if((state_val_14944 === (4))){
var inst_14933 = (state_14943[(2)]);
var inst_14934 = process.call(null,inst_14933);
var state_14943__$1 = state_14943;
if(cljs.core.truth_(inst_14934)){
var statearr_14946_15093 = state_14943__$1;
(statearr_14946_15093[(1)] = (5));

} else {
var statearr_14947_15094 = state_14943__$1;
(statearr_14947_15094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (5))){
var state_14943__$1 = state_14943;
var statearr_14948_15095 = state_14943__$1;
(statearr_14948_15095[(2)] = null);

(statearr_14948_15095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (6))){
var state_14943__$1 = state_14943;
var statearr_14949_15096 = state_14943__$1;
(statearr_14949_15096[(2)] = null);

(statearr_14949_15096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14944 === (7))){
var inst_14939 = (state_14943[(2)]);
var state_14943__$1 = state_14943;
var statearr_14950_15097 = state_14943__$1;
(statearr_14950_15097[(2)] = inst_14939);

(statearr_14950_15097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15087,c__12885__auto___15091,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async))
;
return ((function (__15087,switch__12726__auto__,c__12885__auto___15091,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0 = (function (){
var statearr_14951 = [null,null,null,null,null,null,null];
(statearr_14951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__);

(statearr_14951[(1)] = (1));

return statearr_14951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1 = (function (state_14943){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_14943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e14952){if((e14952 instanceof Object)){
var ex__12730__auto__ = e14952;
var statearr_14953_15098 = state_14943;
(statearr_14953_15098[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15099 = state_14943;
state_14943 = G__15099;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = function(state_14943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1.call(this,state_14943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__;
})()
;})(__15087,switch__12726__auto__,c__12885__auto___15091,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async))
})();
var state__12887__auto__ = (function (){var statearr_14954 = f__12886__auto__.call(null);
(statearr_14954[(6)] = c__12885__auto___15091);

return statearr_14954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(__15087,c__12885__auto___15091,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async))
);


break;
case "async":
var c__12885__auto___15100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15087,c__12885__auto___15100,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (__15087,c__12885__auto___15100,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async){
return (function (state_14967){
var state_val_14968 = (state_14967[(1)]);
if((state_val_14968 === (1))){
var state_14967__$1 = state_14967;
var statearr_14969_15101 = state_14967__$1;
(statearr_14969_15101[(2)] = null);

(statearr_14969_15101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14968 === (2))){
var state_14967__$1 = state_14967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14967__$1,(4),jobs);
} else {
if((state_val_14968 === (3))){
var inst_14965 = (state_14967[(2)]);
var state_14967__$1 = state_14967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14967__$1,inst_14965);
} else {
if((state_val_14968 === (4))){
var inst_14957 = (state_14967[(2)]);
var inst_14958 = async.call(null,inst_14957);
var state_14967__$1 = state_14967;
if(cljs.core.truth_(inst_14958)){
var statearr_14970_15102 = state_14967__$1;
(statearr_14970_15102[(1)] = (5));

} else {
var statearr_14971_15103 = state_14967__$1;
(statearr_14971_15103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14968 === (5))){
var state_14967__$1 = state_14967;
var statearr_14972_15104 = state_14967__$1;
(statearr_14972_15104[(2)] = null);

(statearr_14972_15104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14968 === (6))){
var state_14967__$1 = state_14967;
var statearr_14973_15105 = state_14967__$1;
(statearr_14973_15105[(2)] = null);

(statearr_14973_15105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14968 === (7))){
var inst_14963 = (state_14967[(2)]);
var state_14967__$1 = state_14967;
var statearr_14974_15106 = state_14967__$1;
(statearr_14974_15106[(2)] = inst_14963);

(statearr_14974_15106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15087,c__12885__auto___15100,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async))
;
return ((function (__15087,switch__12726__auto__,c__12885__auto___15100,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0 = (function (){
var statearr_14975 = [null,null,null,null,null,null,null];
(statearr_14975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__);

(statearr_14975[(1)] = (1));

return statearr_14975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1 = (function (state_14967){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_14967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e14976){if((e14976 instanceof Object)){
var ex__12730__auto__ = e14976;
var statearr_14977_15107 = state_14967;
(statearr_14977_15107[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15108 = state_14967;
state_14967 = G__15108;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = function(state_14967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1.call(this,state_14967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__;
})()
;})(__15087,switch__12726__auto__,c__12885__auto___15100,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async))
})();
var state__12887__auto__ = (function (){var statearr_14978 = f__12886__auto__.call(null);
(statearr_14978[(6)] = c__12885__auto___15100);

return statearr_14978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(__15087,c__12885__auto___15100,G__14930_15088,G__14930_15089__$1,n__4408__auto___15086,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14930_15089__$1)].join('')));

}

var G__15109 = (__15087 + (1));
__15087 = G__15109;
continue;
} else {
}
break;
}

var c__12885__auto___15110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___15110,jobs,results,process,async){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___15110,jobs,results,process,async){
return (function (state_15000){
var state_val_15001 = (state_15000[(1)]);
if((state_val_15001 === (1))){
var state_15000__$1 = state_15000;
var statearr_15002_15111 = state_15000__$1;
(statearr_15002_15111[(2)] = null);

(statearr_15002_15111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (2))){
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15000__$1,(4),from);
} else {
if((state_val_15001 === (3))){
var inst_14998 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15000__$1,inst_14998);
} else {
if((state_val_15001 === (4))){
var inst_14981 = (state_15000[(7)]);
var inst_14981__$1 = (state_15000[(2)]);
var inst_14982 = (inst_14981__$1 == null);
var state_15000__$1 = (function (){var statearr_15003 = state_15000;
(statearr_15003[(7)] = inst_14981__$1);

return statearr_15003;
})();
if(cljs.core.truth_(inst_14982)){
var statearr_15004_15112 = state_15000__$1;
(statearr_15004_15112[(1)] = (5));

} else {
var statearr_15005_15113 = state_15000__$1;
(statearr_15005_15113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (5))){
var inst_14984 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15000__$1 = state_15000;
var statearr_15006_15114 = state_15000__$1;
(statearr_15006_15114[(2)] = inst_14984);

(statearr_15006_15114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (6))){
var inst_14981 = (state_15000[(7)]);
var inst_14986 = (state_15000[(8)]);
var inst_14986__$1 = cljs.core.async.chan.call(null,(1));
var inst_14987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14988 = [inst_14981,inst_14986__$1];
var inst_14989 = (new cljs.core.PersistentVector(null,2,(5),inst_14987,inst_14988,null));
var state_15000__$1 = (function (){var statearr_15007 = state_15000;
(statearr_15007[(8)] = inst_14986__$1);

return statearr_15007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15000__$1,(8),jobs,inst_14989);
} else {
if((state_val_15001 === (7))){
var inst_14996 = (state_15000[(2)]);
var state_15000__$1 = state_15000;
var statearr_15008_15115 = state_15000__$1;
(statearr_15008_15115[(2)] = inst_14996);

(statearr_15008_15115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15001 === (8))){
var inst_14986 = (state_15000[(8)]);
var inst_14991 = (state_15000[(2)]);
var state_15000__$1 = (function (){var statearr_15009 = state_15000;
(statearr_15009[(9)] = inst_14991);

return statearr_15009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15000__$1,(9),results,inst_14986);
} else {
if((state_val_15001 === (9))){
var inst_14993 = (state_15000[(2)]);
var state_15000__$1 = (function (){var statearr_15010 = state_15000;
(statearr_15010[(10)] = inst_14993);

return statearr_15010;
})();
var statearr_15011_15116 = state_15000__$1;
(statearr_15011_15116[(2)] = null);

(statearr_15011_15116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___15110,jobs,results,process,async))
;
return ((function (switch__12726__auto__,c__12885__auto___15110,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0 = (function (){
var statearr_15012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__);

(statearr_15012[(1)] = (1));

return statearr_15012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1 = (function (state_15000){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15013){if((e15013 instanceof Object)){
var ex__12730__auto__ = e15013;
var statearr_15014_15117 = state_15000;
(statearr_15014_15117[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15118 = state_15000;
state_15000 = G__15118;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = function(state_15000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1.call(this,state_15000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___15110,jobs,results,process,async))
})();
var state__12887__auto__ = (function (){var statearr_15015 = f__12886__auto__.call(null);
(statearr_15015[(6)] = c__12885__auto___15110);

return statearr_15015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___15110,jobs,results,process,async))
);


var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__,jobs,results,process,async){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__,jobs,results,process,async){
return (function (state_15053){
var state_val_15054 = (state_15053[(1)]);
if((state_val_15054 === (7))){
var inst_15049 = (state_15053[(2)]);
var state_15053__$1 = state_15053;
var statearr_15055_15119 = state_15053__$1;
(statearr_15055_15119[(2)] = inst_15049);

(statearr_15055_15119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (20))){
var state_15053__$1 = state_15053;
var statearr_15056_15120 = state_15053__$1;
(statearr_15056_15120[(2)] = null);

(statearr_15056_15120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (1))){
var state_15053__$1 = state_15053;
var statearr_15057_15121 = state_15053__$1;
(statearr_15057_15121[(2)] = null);

(statearr_15057_15121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (4))){
var inst_15018 = (state_15053[(7)]);
var inst_15018__$1 = (state_15053[(2)]);
var inst_15019 = (inst_15018__$1 == null);
var state_15053__$1 = (function (){var statearr_15058 = state_15053;
(statearr_15058[(7)] = inst_15018__$1);

return statearr_15058;
})();
if(cljs.core.truth_(inst_15019)){
var statearr_15059_15122 = state_15053__$1;
(statearr_15059_15122[(1)] = (5));

} else {
var statearr_15060_15123 = state_15053__$1;
(statearr_15060_15123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (15))){
var inst_15031 = (state_15053[(8)]);
var state_15053__$1 = state_15053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15053__$1,(18),to,inst_15031);
} else {
if((state_val_15054 === (21))){
var inst_15044 = (state_15053[(2)]);
var state_15053__$1 = state_15053;
var statearr_15061_15124 = state_15053__$1;
(statearr_15061_15124[(2)] = inst_15044);

(statearr_15061_15124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (13))){
var inst_15046 = (state_15053[(2)]);
var state_15053__$1 = (function (){var statearr_15062 = state_15053;
(statearr_15062[(9)] = inst_15046);

return statearr_15062;
})();
var statearr_15063_15125 = state_15053__$1;
(statearr_15063_15125[(2)] = null);

(statearr_15063_15125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (6))){
var inst_15018 = (state_15053[(7)]);
var state_15053__$1 = state_15053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15053__$1,(11),inst_15018);
} else {
if((state_val_15054 === (17))){
var inst_15039 = (state_15053[(2)]);
var state_15053__$1 = state_15053;
if(cljs.core.truth_(inst_15039)){
var statearr_15064_15126 = state_15053__$1;
(statearr_15064_15126[(1)] = (19));

} else {
var statearr_15065_15127 = state_15053__$1;
(statearr_15065_15127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (3))){
var inst_15051 = (state_15053[(2)]);
var state_15053__$1 = state_15053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15053__$1,inst_15051);
} else {
if((state_val_15054 === (12))){
var inst_15028 = (state_15053[(10)]);
var state_15053__$1 = state_15053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15053__$1,(14),inst_15028);
} else {
if((state_val_15054 === (2))){
var state_15053__$1 = state_15053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15053__$1,(4),results);
} else {
if((state_val_15054 === (19))){
var state_15053__$1 = state_15053;
var statearr_15066_15128 = state_15053__$1;
(statearr_15066_15128[(2)] = null);

(statearr_15066_15128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (11))){
var inst_15028 = (state_15053[(2)]);
var state_15053__$1 = (function (){var statearr_15067 = state_15053;
(statearr_15067[(10)] = inst_15028);

return statearr_15067;
})();
var statearr_15068_15129 = state_15053__$1;
(statearr_15068_15129[(2)] = null);

(statearr_15068_15129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (9))){
var state_15053__$1 = state_15053;
var statearr_15069_15130 = state_15053__$1;
(statearr_15069_15130[(2)] = null);

(statearr_15069_15130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (5))){
var state_15053__$1 = state_15053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15070_15131 = state_15053__$1;
(statearr_15070_15131[(1)] = (8));

} else {
var statearr_15071_15132 = state_15053__$1;
(statearr_15071_15132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (14))){
var inst_15033 = (state_15053[(11)]);
var inst_15031 = (state_15053[(8)]);
var inst_15031__$1 = (state_15053[(2)]);
var inst_15032 = (inst_15031__$1 == null);
var inst_15033__$1 = cljs.core.not.call(null,inst_15032);
var state_15053__$1 = (function (){var statearr_15072 = state_15053;
(statearr_15072[(11)] = inst_15033__$1);

(statearr_15072[(8)] = inst_15031__$1);

return statearr_15072;
})();
if(inst_15033__$1){
var statearr_15073_15133 = state_15053__$1;
(statearr_15073_15133[(1)] = (15));

} else {
var statearr_15074_15134 = state_15053__$1;
(statearr_15074_15134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (16))){
var inst_15033 = (state_15053[(11)]);
var state_15053__$1 = state_15053;
var statearr_15075_15135 = state_15053__$1;
(statearr_15075_15135[(2)] = inst_15033);

(statearr_15075_15135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (10))){
var inst_15025 = (state_15053[(2)]);
var state_15053__$1 = state_15053;
var statearr_15076_15136 = state_15053__$1;
(statearr_15076_15136[(2)] = inst_15025);

(statearr_15076_15136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (18))){
var inst_15036 = (state_15053[(2)]);
var state_15053__$1 = state_15053;
var statearr_15077_15137 = state_15053__$1;
(statearr_15077_15137[(2)] = inst_15036);

(statearr_15077_15137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15054 === (8))){
var inst_15022 = cljs.core.async.close_BANG_.call(null,to);
var state_15053__$1 = state_15053;
var statearr_15078_15138 = state_15053__$1;
(statearr_15078_15138[(2)] = inst_15022);

(statearr_15078_15138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto__,jobs,results,process,async))
;
return ((function (switch__12726__auto__,c__12885__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0 = (function (){
var statearr_15079 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__);

(statearr_15079[(1)] = (1));

return statearr_15079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1 = (function (state_15053){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15080){if((e15080 instanceof Object)){
var ex__12730__auto__ = e15080;
var statearr_15081_15139 = state_15053;
(statearr_15081_15139[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15140 = state_15053;
state_15053 = G__15140;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__ = function(state_15053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1.call(this,state_15053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12727__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__,jobs,results,process,async))
})();
var state__12887__auto__ = (function (){var statearr_15082 = f__12886__auto__.call(null);
(statearr_15082[(6)] = c__12885__auto__);

return statearr_15082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__,jobs,results,process,async))
);

return c__12885__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15142 = arguments.length;
switch (G__15142) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15145 = arguments.length;
switch (G__15145) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15148 = arguments.length;
switch (G__15148) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12885__auto___15197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___15197,tc,fc){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___15197,tc,fc){
return (function (state_15174){
var state_val_15175 = (state_15174[(1)]);
if((state_val_15175 === (7))){
var inst_15170 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
var statearr_15176_15198 = state_15174__$1;
(statearr_15176_15198[(2)] = inst_15170);

(statearr_15176_15198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (1))){
var state_15174__$1 = state_15174;
var statearr_15177_15199 = state_15174__$1;
(statearr_15177_15199[(2)] = null);

(statearr_15177_15199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (4))){
var inst_15151 = (state_15174[(7)]);
var inst_15151__$1 = (state_15174[(2)]);
var inst_15152 = (inst_15151__$1 == null);
var state_15174__$1 = (function (){var statearr_15178 = state_15174;
(statearr_15178[(7)] = inst_15151__$1);

return statearr_15178;
})();
if(cljs.core.truth_(inst_15152)){
var statearr_15179_15200 = state_15174__$1;
(statearr_15179_15200[(1)] = (5));

} else {
var statearr_15180_15201 = state_15174__$1;
(statearr_15180_15201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (13))){
var state_15174__$1 = state_15174;
var statearr_15181_15202 = state_15174__$1;
(statearr_15181_15202[(2)] = null);

(statearr_15181_15202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (6))){
var inst_15151 = (state_15174[(7)]);
var inst_15157 = p.call(null,inst_15151);
var state_15174__$1 = state_15174;
if(cljs.core.truth_(inst_15157)){
var statearr_15182_15203 = state_15174__$1;
(statearr_15182_15203[(1)] = (9));

} else {
var statearr_15183_15204 = state_15174__$1;
(statearr_15183_15204[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (3))){
var inst_15172 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15174__$1,inst_15172);
} else {
if((state_val_15175 === (12))){
var state_15174__$1 = state_15174;
var statearr_15184_15205 = state_15174__$1;
(statearr_15184_15205[(2)] = null);

(statearr_15184_15205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (2))){
var state_15174__$1 = state_15174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15174__$1,(4),ch);
} else {
if((state_val_15175 === (11))){
var inst_15151 = (state_15174[(7)]);
var inst_15161 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15174__$1,(8),inst_15161,inst_15151);
} else {
if((state_val_15175 === (9))){
var state_15174__$1 = state_15174;
var statearr_15185_15206 = state_15174__$1;
(statearr_15185_15206[(2)] = tc);

(statearr_15185_15206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (5))){
var inst_15154 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15155 = cljs.core.async.close_BANG_.call(null,fc);
var state_15174__$1 = (function (){var statearr_15186 = state_15174;
(statearr_15186[(8)] = inst_15154);

return statearr_15186;
})();
var statearr_15187_15207 = state_15174__$1;
(statearr_15187_15207[(2)] = inst_15155);

(statearr_15187_15207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (14))){
var inst_15168 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
var statearr_15188_15208 = state_15174__$1;
(statearr_15188_15208[(2)] = inst_15168);

(statearr_15188_15208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (10))){
var state_15174__$1 = state_15174;
var statearr_15189_15209 = state_15174__$1;
(statearr_15189_15209[(2)] = fc);

(statearr_15189_15209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15175 === (8))){
var inst_15163 = (state_15174[(2)]);
var state_15174__$1 = state_15174;
if(cljs.core.truth_(inst_15163)){
var statearr_15190_15210 = state_15174__$1;
(statearr_15190_15210[(1)] = (12));

} else {
var statearr_15191_15211 = state_15174__$1;
(statearr_15191_15211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___15197,tc,fc))
;
return ((function (switch__12726__auto__,c__12885__auto___15197,tc,fc){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_15192 = [null,null,null,null,null,null,null,null,null];
(statearr_15192[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_15192[(1)] = (1));

return statearr_15192;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_15174){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15193){if((e15193 instanceof Object)){
var ex__12730__auto__ = e15193;
var statearr_15194_15212 = state_15174;
(statearr_15194_15212[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15213 = state_15174;
state_15174 = G__15213;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_15174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_15174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___15197,tc,fc))
})();
var state__12887__auto__ = (function (){var statearr_15195 = f__12886__auto__.call(null);
(statearr_15195[(6)] = c__12885__auto___15197);

return statearr_15195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___15197,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__){
return (function (state_15234){
var state_val_15235 = (state_15234[(1)]);
if((state_val_15235 === (7))){
var inst_15230 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15236_15254 = state_15234__$1;
(statearr_15236_15254[(2)] = inst_15230);

(statearr_15236_15254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (1))){
var inst_15214 = init;
var state_15234__$1 = (function (){var statearr_15237 = state_15234;
(statearr_15237[(7)] = inst_15214);

return statearr_15237;
})();
var statearr_15238_15255 = state_15234__$1;
(statearr_15238_15255[(2)] = null);

(statearr_15238_15255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (4))){
var inst_15217 = (state_15234[(8)]);
var inst_15217__$1 = (state_15234[(2)]);
var inst_15218 = (inst_15217__$1 == null);
var state_15234__$1 = (function (){var statearr_15239 = state_15234;
(statearr_15239[(8)] = inst_15217__$1);

return statearr_15239;
})();
if(cljs.core.truth_(inst_15218)){
var statearr_15240_15256 = state_15234__$1;
(statearr_15240_15256[(1)] = (5));

} else {
var statearr_15241_15257 = state_15234__$1;
(statearr_15241_15257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (6))){
var inst_15217 = (state_15234[(8)]);
var inst_15214 = (state_15234[(7)]);
var inst_15221 = (state_15234[(9)]);
var inst_15221__$1 = f.call(null,inst_15214,inst_15217);
var inst_15222 = cljs.core.reduced_QMARK_.call(null,inst_15221__$1);
var state_15234__$1 = (function (){var statearr_15242 = state_15234;
(statearr_15242[(9)] = inst_15221__$1);

return statearr_15242;
})();
if(inst_15222){
var statearr_15243_15258 = state_15234__$1;
(statearr_15243_15258[(1)] = (8));

} else {
var statearr_15244_15259 = state_15234__$1;
(statearr_15244_15259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (3))){
var inst_15232 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15234__$1,inst_15232);
} else {
if((state_val_15235 === (2))){
var state_15234__$1 = state_15234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15234__$1,(4),ch);
} else {
if((state_val_15235 === (9))){
var inst_15221 = (state_15234[(9)]);
var inst_15214 = inst_15221;
var state_15234__$1 = (function (){var statearr_15245 = state_15234;
(statearr_15245[(7)] = inst_15214);

return statearr_15245;
})();
var statearr_15246_15260 = state_15234__$1;
(statearr_15246_15260[(2)] = null);

(statearr_15246_15260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (5))){
var inst_15214 = (state_15234[(7)]);
var state_15234__$1 = state_15234;
var statearr_15247_15261 = state_15234__$1;
(statearr_15247_15261[(2)] = inst_15214);

(statearr_15247_15261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (10))){
var inst_15228 = (state_15234[(2)]);
var state_15234__$1 = state_15234;
var statearr_15248_15262 = state_15234__$1;
(statearr_15248_15262[(2)] = inst_15228);

(statearr_15248_15262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15235 === (8))){
var inst_15221 = (state_15234[(9)]);
var inst_15224 = cljs.core.deref.call(null,inst_15221);
var state_15234__$1 = state_15234;
var statearr_15249_15263 = state_15234__$1;
(statearr_15249_15263[(2)] = inst_15224);

(statearr_15249_15263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto__))
;
return ((function (switch__12726__auto__,c__12885__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12727__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12727__auto____0 = (function (){
var statearr_15250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15250[(0)] = cljs$core$async$reduce_$_state_machine__12727__auto__);

(statearr_15250[(1)] = (1));

return statearr_15250;
});
var cljs$core$async$reduce_$_state_machine__12727__auto____1 = (function (state_15234){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15251){if((e15251 instanceof Object)){
var ex__12730__auto__ = e15251;
var statearr_15252_15264 = state_15234;
(statearr_15252_15264[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15265 = state_15234;
state_15234 = G__15265;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12727__auto__ = function(state_15234){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12727__auto____1.call(this,state_15234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12727__auto____0;
cljs$core$async$reduce_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12727__auto____1;
return cljs$core$async$reduce_$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__))
})();
var state__12887__auto__ = (function (){var statearr_15253 = f__12886__auto__.call(null);
(statearr_15253[(6)] = c__12885__auto__);

return statearr_15253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__))
);

return c__12885__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__,f__$1){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__,f__$1){
return (function (state_15271){
var state_val_15272 = (state_15271[(1)]);
if((state_val_15272 === (1))){
var inst_15266 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15271__$1 = state_15271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15271__$1,(2),inst_15266);
} else {
if((state_val_15272 === (2))){
var inst_15268 = (state_15271[(2)]);
var inst_15269 = f__$1.call(null,inst_15268);
var state_15271__$1 = state_15271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15271__$1,inst_15269);
} else {
return null;
}
}
});})(c__12885__auto__,f__$1))
;
return ((function (switch__12726__auto__,c__12885__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12727__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12727__auto____0 = (function (){
var statearr_15273 = [null,null,null,null,null,null,null];
(statearr_15273[(0)] = cljs$core$async$transduce_$_state_machine__12727__auto__);

(statearr_15273[(1)] = (1));

return statearr_15273;
});
var cljs$core$async$transduce_$_state_machine__12727__auto____1 = (function (state_15271){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15274){if((e15274 instanceof Object)){
var ex__12730__auto__ = e15274;
var statearr_15275_15277 = state_15271;
(statearr_15275_15277[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15278 = state_15271;
state_15271 = G__15278;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12727__auto__ = function(state_15271){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12727__auto____1.call(this,state_15271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12727__auto____0;
cljs$core$async$transduce_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12727__auto____1;
return cljs$core$async$transduce_$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__,f__$1))
})();
var state__12887__auto__ = (function (){var statearr_15276 = f__12886__auto__.call(null);
(statearr_15276[(6)] = c__12885__auto__);

return statearr_15276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__,f__$1))
);

return c__12885__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15280 = arguments.length;
switch (G__15280) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__){
return (function (state_15305){
var state_val_15306 = (state_15305[(1)]);
if((state_val_15306 === (7))){
var inst_15287 = (state_15305[(2)]);
var state_15305__$1 = state_15305;
var statearr_15307_15328 = state_15305__$1;
(statearr_15307_15328[(2)] = inst_15287);

(statearr_15307_15328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (1))){
var inst_15281 = cljs.core.seq.call(null,coll);
var inst_15282 = inst_15281;
var state_15305__$1 = (function (){var statearr_15308 = state_15305;
(statearr_15308[(7)] = inst_15282);

return statearr_15308;
})();
var statearr_15309_15329 = state_15305__$1;
(statearr_15309_15329[(2)] = null);

(statearr_15309_15329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (4))){
var inst_15282 = (state_15305[(7)]);
var inst_15285 = cljs.core.first.call(null,inst_15282);
var state_15305__$1 = state_15305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15305__$1,(7),ch,inst_15285);
} else {
if((state_val_15306 === (13))){
var inst_15299 = (state_15305[(2)]);
var state_15305__$1 = state_15305;
var statearr_15310_15330 = state_15305__$1;
(statearr_15310_15330[(2)] = inst_15299);

(statearr_15310_15330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (6))){
var inst_15290 = (state_15305[(2)]);
var state_15305__$1 = state_15305;
if(cljs.core.truth_(inst_15290)){
var statearr_15311_15331 = state_15305__$1;
(statearr_15311_15331[(1)] = (8));

} else {
var statearr_15312_15332 = state_15305__$1;
(statearr_15312_15332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (3))){
var inst_15303 = (state_15305[(2)]);
var state_15305__$1 = state_15305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15305__$1,inst_15303);
} else {
if((state_val_15306 === (12))){
var state_15305__$1 = state_15305;
var statearr_15313_15333 = state_15305__$1;
(statearr_15313_15333[(2)] = null);

(statearr_15313_15333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (2))){
var inst_15282 = (state_15305[(7)]);
var state_15305__$1 = state_15305;
if(cljs.core.truth_(inst_15282)){
var statearr_15314_15334 = state_15305__$1;
(statearr_15314_15334[(1)] = (4));

} else {
var statearr_15315_15335 = state_15305__$1;
(statearr_15315_15335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (11))){
var inst_15296 = cljs.core.async.close_BANG_.call(null,ch);
var state_15305__$1 = state_15305;
var statearr_15316_15336 = state_15305__$1;
(statearr_15316_15336[(2)] = inst_15296);

(statearr_15316_15336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (9))){
var state_15305__$1 = state_15305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15317_15337 = state_15305__$1;
(statearr_15317_15337[(1)] = (11));

} else {
var statearr_15318_15338 = state_15305__$1;
(statearr_15318_15338[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (5))){
var inst_15282 = (state_15305[(7)]);
var state_15305__$1 = state_15305;
var statearr_15319_15339 = state_15305__$1;
(statearr_15319_15339[(2)] = inst_15282);

(statearr_15319_15339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (10))){
var inst_15301 = (state_15305[(2)]);
var state_15305__$1 = state_15305;
var statearr_15320_15340 = state_15305__$1;
(statearr_15320_15340[(2)] = inst_15301);

(statearr_15320_15340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (8))){
var inst_15282 = (state_15305[(7)]);
var inst_15292 = cljs.core.next.call(null,inst_15282);
var inst_15282__$1 = inst_15292;
var state_15305__$1 = (function (){var statearr_15321 = state_15305;
(statearr_15321[(7)] = inst_15282__$1);

return statearr_15321;
})();
var statearr_15322_15341 = state_15305__$1;
(statearr_15322_15341[(2)] = null);

(statearr_15322_15341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto__))
;
return ((function (switch__12726__auto__,c__12885__auto__){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_15323 = [null,null,null,null,null,null,null,null];
(statearr_15323[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_15323[(1)] = (1));

return statearr_15323;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_15305){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15324){if((e15324 instanceof Object)){
var ex__12730__auto__ = e15324;
var statearr_15325_15342 = state_15305;
(statearr_15325_15342[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15343 = state_15305;
state_15305 = G__15343;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_15305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_15305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__))
})();
var state__12887__auto__ = (function (){var statearr_15326 = f__12886__auto__.call(null);
(statearr_15326[(6)] = c__12885__auto__);

return statearr_15326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__))
);

return c__12885__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15344 = (function (ch,cs,meta15345){
this.ch = ch;
this.cs = cs;
this.meta15345 = meta15345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15346,meta15345__$1){
var self__ = this;
var _15346__$1 = this;
return (new cljs.core.async.t_cljs$core$async15344(self__.ch,self__.cs,meta15345__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15346){
var self__ = this;
var _15346__$1 = this;
return self__.meta15345;
});})(cs))
;

cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15344.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15345","meta15345",-1971163511,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15344";

cljs.core.async.t_cljs$core$async15344.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async15344");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15344.
 */
cljs.core.async.__GT_t_cljs$core$async15344 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15344(ch__$1,cs__$1,meta15345){
return (new cljs.core.async.t_cljs$core$async15344(ch__$1,cs__$1,meta15345));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15344(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12885__auto___15566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___15566,cs,m,dchan,dctr,done){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___15566,cs,m,dchan,dctr,done){
return (function (state_15481){
var state_val_15482 = (state_15481[(1)]);
if((state_val_15482 === (7))){
var inst_15477 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15483_15567 = state_15481__$1;
(statearr_15483_15567[(2)] = inst_15477);

(statearr_15483_15567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (20))){
var inst_15380 = (state_15481[(7)]);
var inst_15392 = cljs.core.first.call(null,inst_15380);
var inst_15393 = cljs.core.nth.call(null,inst_15392,(0),null);
var inst_15394 = cljs.core.nth.call(null,inst_15392,(1),null);
var state_15481__$1 = (function (){var statearr_15484 = state_15481;
(statearr_15484[(8)] = inst_15393);

return statearr_15484;
})();
if(cljs.core.truth_(inst_15394)){
var statearr_15485_15568 = state_15481__$1;
(statearr_15485_15568[(1)] = (22));

} else {
var statearr_15486_15569 = state_15481__$1;
(statearr_15486_15569[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (27))){
var inst_15429 = (state_15481[(9)]);
var inst_15422 = (state_15481[(10)]);
var inst_15424 = (state_15481[(11)]);
var inst_15349 = (state_15481[(12)]);
var inst_15429__$1 = cljs.core._nth.call(null,inst_15422,inst_15424);
var inst_15430 = cljs.core.async.put_BANG_.call(null,inst_15429__$1,inst_15349,done);
var state_15481__$1 = (function (){var statearr_15487 = state_15481;
(statearr_15487[(9)] = inst_15429__$1);

return statearr_15487;
})();
if(cljs.core.truth_(inst_15430)){
var statearr_15488_15570 = state_15481__$1;
(statearr_15488_15570[(1)] = (30));

} else {
var statearr_15489_15571 = state_15481__$1;
(statearr_15489_15571[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (1))){
var state_15481__$1 = state_15481;
var statearr_15490_15572 = state_15481__$1;
(statearr_15490_15572[(2)] = null);

(statearr_15490_15572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (24))){
var inst_15380 = (state_15481[(7)]);
var inst_15399 = (state_15481[(2)]);
var inst_15400 = cljs.core.next.call(null,inst_15380);
var inst_15358 = inst_15400;
var inst_15359 = null;
var inst_15360 = (0);
var inst_15361 = (0);
var state_15481__$1 = (function (){var statearr_15491 = state_15481;
(statearr_15491[(13)] = inst_15361);

(statearr_15491[(14)] = inst_15358);

(statearr_15491[(15)] = inst_15360);

(statearr_15491[(16)] = inst_15399);

(statearr_15491[(17)] = inst_15359);

return statearr_15491;
})();
var statearr_15492_15573 = state_15481__$1;
(statearr_15492_15573[(2)] = null);

(statearr_15492_15573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (39))){
var state_15481__$1 = state_15481;
var statearr_15496_15574 = state_15481__$1;
(statearr_15496_15574[(2)] = null);

(statearr_15496_15574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (4))){
var inst_15349 = (state_15481[(12)]);
var inst_15349__$1 = (state_15481[(2)]);
var inst_15350 = (inst_15349__$1 == null);
var state_15481__$1 = (function (){var statearr_15497 = state_15481;
(statearr_15497[(12)] = inst_15349__$1);

return statearr_15497;
})();
if(cljs.core.truth_(inst_15350)){
var statearr_15498_15575 = state_15481__$1;
(statearr_15498_15575[(1)] = (5));

} else {
var statearr_15499_15576 = state_15481__$1;
(statearr_15499_15576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (15))){
var inst_15361 = (state_15481[(13)]);
var inst_15358 = (state_15481[(14)]);
var inst_15360 = (state_15481[(15)]);
var inst_15359 = (state_15481[(17)]);
var inst_15376 = (state_15481[(2)]);
var inst_15377 = (inst_15361 + (1));
var tmp15493 = inst_15358;
var tmp15494 = inst_15360;
var tmp15495 = inst_15359;
var inst_15358__$1 = tmp15493;
var inst_15359__$1 = tmp15495;
var inst_15360__$1 = tmp15494;
var inst_15361__$1 = inst_15377;
var state_15481__$1 = (function (){var statearr_15500 = state_15481;
(statearr_15500[(13)] = inst_15361__$1);

(statearr_15500[(14)] = inst_15358__$1);

(statearr_15500[(15)] = inst_15360__$1);

(statearr_15500[(17)] = inst_15359__$1);

(statearr_15500[(18)] = inst_15376);

return statearr_15500;
})();
var statearr_15501_15577 = state_15481__$1;
(statearr_15501_15577[(2)] = null);

(statearr_15501_15577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (21))){
var inst_15403 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15505_15578 = state_15481__$1;
(statearr_15505_15578[(2)] = inst_15403);

(statearr_15505_15578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (31))){
var inst_15429 = (state_15481[(9)]);
var inst_15433 = done.call(null,null);
var inst_15434 = cljs.core.async.untap_STAR_.call(null,m,inst_15429);
var state_15481__$1 = (function (){var statearr_15506 = state_15481;
(statearr_15506[(19)] = inst_15433);

return statearr_15506;
})();
var statearr_15507_15579 = state_15481__$1;
(statearr_15507_15579[(2)] = inst_15434);

(statearr_15507_15579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (32))){
var inst_15423 = (state_15481[(20)]);
var inst_15421 = (state_15481[(21)]);
var inst_15422 = (state_15481[(10)]);
var inst_15424 = (state_15481[(11)]);
var inst_15436 = (state_15481[(2)]);
var inst_15437 = (inst_15424 + (1));
var tmp15502 = inst_15423;
var tmp15503 = inst_15421;
var tmp15504 = inst_15422;
var inst_15421__$1 = tmp15503;
var inst_15422__$1 = tmp15504;
var inst_15423__$1 = tmp15502;
var inst_15424__$1 = inst_15437;
var state_15481__$1 = (function (){var statearr_15508 = state_15481;
(statearr_15508[(20)] = inst_15423__$1);

(statearr_15508[(21)] = inst_15421__$1);

(statearr_15508[(10)] = inst_15422__$1);

(statearr_15508[(22)] = inst_15436);

(statearr_15508[(11)] = inst_15424__$1);

return statearr_15508;
})();
var statearr_15509_15580 = state_15481__$1;
(statearr_15509_15580[(2)] = null);

(statearr_15509_15580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (40))){
var inst_15449 = (state_15481[(23)]);
var inst_15453 = done.call(null,null);
var inst_15454 = cljs.core.async.untap_STAR_.call(null,m,inst_15449);
var state_15481__$1 = (function (){var statearr_15510 = state_15481;
(statearr_15510[(24)] = inst_15453);

return statearr_15510;
})();
var statearr_15511_15581 = state_15481__$1;
(statearr_15511_15581[(2)] = inst_15454);

(statearr_15511_15581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (33))){
var inst_15440 = (state_15481[(25)]);
var inst_15442 = cljs.core.chunked_seq_QMARK_.call(null,inst_15440);
var state_15481__$1 = state_15481;
if(inst_15442){
var statearr_15512_15582 = state_15481__$1;
(statearr_15512_15582[(1)] = (36));

} else {
var statearr_15513_15583 = state_15481__$1;
(statearr_15513_15583[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (13))){
var inst_15370 = (state_15481[(26)]);
var inst_15373 = cljs.core.async.close_BANG_.call(null,inst_15370);
var state_15481__$1 = state_15481;
var statearr_15514_15584 = state_15481__$1;
(statearr_15514_15584[(2)] = inst_15373);

(statearr_15514_15584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (22))){
var inst_15393 = (state_15481[(8)]);
var inst_15396 = cljs.core.async.close_BANG_.call(null,inst_15393);
var state_15481__$1 = state_15481;
var statearr_15515_15585 = state_15481__$1;
(statearr_15515_15585[(2)] = inst_15396);

(statearr_15515_15585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (36))){
var inst_15440 = (state_15481[(25)]);
var inst_15444 = cljs.core.chunk_first.call(null,inst_15440);
var inst_15445 = cljs.core.chunk_rest.call(null,inst_15440);
var inst_15446 = cljs.core.count.call(null,inst_15444);
var inst_15421 = inst_15445;
var inst_15422 = inst_15444;
var inst_15423 = inst_15446;
var inst_15424 = (0);
var state_15481__$1 = (function (){var statearr_15516 = state_15481;
(statearr_15516[(20)] = inst_15423);

(statearr_15516[(21)] = inst_15421);

(statearr_15516[(10)] = inst_15422);

(statearr_15516[(11)] = inst_15424);

return statearr_15516;
})();
var statearr_15517_15586 = state_15481__$1;
(statearr_15517_15586[(2)] = null);

(statearr_15517_15586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (41))){
var inst_15440 = (state_15481[(25)]);
var inst_15456 = (state_15481[(2)]);
var inst_15457 = cljs.core.next.call(null,inst_15440);
var inst_15421 = inst_15457;
var inst_15422 = null;
var inst_15423 = (0);
var inst_15424 = (0);
var state_15481__$1 = (function (){var statearr_15518 = state_15481;
(statearr_15518[(20)] = inst_15423);

(statearr_15518[(21)] = inst_15421);

(statearr_15518[(10)] = inst_15422);

(statearr_15518[(27)] = inst_15456);

(statearr_15518[(11)] = inst_15424);

return statearr_15518;
})();
var statearr_15519_15587 = state_15481__$1;
(statearr_15519_15587[(2)] = null);

(statearr_15519_15587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (43))){
var state_15481__$1 = state_15481;
var statearr_15520_15588 = state_15481__$1;
(statearr_15520_15588[(2)] = null);

(statearr_15520_15588[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (29))){
var inst_15465 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15521_15589 = state_15481__$1;
(statearr_15521_15589[(2)] = inst_15465);

(statearr_15521_15589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (44))){
var inst_15474 = (state_15481[(2)]);
var state_15481__$1 = (function (){var statearr_15522 = state_15481;
(statearr_15522[(28)] = inst_15474);

return statearr_15522;
})();
var statearr_15523_15590 = state_15481__$1;
(statearr_15523_15590[(2)] = null);

(statearr_15523_15590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (6))){
var inst_15413 = (state_15481[(29)]);
var inst_15412 = cljs.core.deref.call(null,cs);
var inst_15413__$1 = cljs.core.keys.call(null,inst_15412);
var inst_15414 = cljs.core.count.call(null,inst_15413__$1);
var inst_15415 = cljs.core.reset_BANG_.call(null,dctr,inst_15414);
var inst_15420 = cljs.core.seq.call(null,inst_15413__$1);
var inst_15421 = inst_15420;
var inst_15422 = null;
var inst_15423 = (0);
var inst_15424 = (0);
var state_15481__$1 = (function (){var statearr_15524 = state_15481;
(statearr_15524[(20)] = inst_15423);

(statearr_15524[(29)] = inst_15413__$1);

(statearr_15524[(21)] = inst_15421);

(statearr_15524[(30)] = inst_15415);

(statearr_15524[(10)] = inst_15422);

(statearr_15524[(11)] = inst_15424);

return statearr_15524;
})();
var statearr_15525_15591 = state_15481__$1;
(statearr_15525_15591[(2)] = null);

(statearr_15525_15591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (28))){
var inst_15421 = (state_15481[(21)]);
var inst_15440 = (state_15481[(25)]);
var inst_15440__$1 = cljs.core.seq.call(null,inst_15421);
var state_15481__$1 = (function (){var statearr_15526 = state_15481;
(statearr_15526[(25)] = inst_15440__$1);

return statearr_15526;
})();
if(inst_15440__$1){
var statearr_15527_15592 = state_15481__$1;
(statearr_15527_15592[(1)] = (33));

} else {
var statearr_15528_15593 = state_15481__$1;
(statearr_15528_15593[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (25))){
var inst_15423 = (state_15481[(20)]);
var inst_15424 = (state_15481[(11)]);
var inst_15426 = (inst_15424 < inst_15423);
var inst_15427 = inst_15426;
var state_15481__$1 = state_15481;
if(cljs.core.truth_(inst_15427)){
var statearr_15529_15594 = state_15481__$1;
(statearr_15529_15594[(1)] = (27));

} else {
var statearr_15530_15595 = state_15481__$1;
(statearr_15530_15595[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (34))){
var state_15481__$1 = state_15481;
var statearr_15531_15596 = state_15481__$1;
(statearr_15531_15596[(2)] = null);

(statearr_15531_15596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (17))){
var state_15481__$1 = state_15481;
var statearr_15532_15597 = state_15481__$1;
(statearr_15532_15597[(2)] = null);

(statearr_15532_15597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (3))){
var inst_15479 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15481__$1,inst_15479);
} else {
if((state_val_15482 === (12))){
var inst_15408 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15533_15598 = state_15481__$1;
(statearr_15533_15598[(2)] = inst_15408);

(statearr_15533_15598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (2))){
var state_15481__$1 = state_15481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15481__$1,(4),ch);
} else {
if((state_val_15482 === (23))){
var state_15481__$1 = state_15481;
var statearr_15534_15599 = state_15481__$1;
(statearr_15534_15599[(2)] = null);

(statearr_15534_15599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (35))){
var inst_15463 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15535_15600 = state_15481__$1;
(statearr_15535_15600[(2)] = inst_15463);

(statearr_15535_15600[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (19))){
var inst_15380 = (state_15481[(7)]);
var inst_15384 = cljs.core.chunk_first.call(null,inst_15380);
var inst_15385 = cljs.core.chunk_rest.call(null,inst_15380);
var inst_15386 = cljs.core.count.call(null,inst_15384);
var inst_15358 = inst_15385;
var inst_15359 = inst_15384;
var inst_15360 = inst_15386;
var inst_15361 = (0);
var state_15481__$1 = (function (){var statearr_15536 = state_15481;
(statearr_15536[(13)] = inst_15361);

(statearr_15536[(14)] = inst_15358);

(statearr_15536[(15)] = inst_15360);

(statearr_15536[(17)] = inst_15359);

return statearr_15536;
})();
var statearr_15537_15601 = state_15481__$1;
(statearr_15537_15601[(2)] = null);

(statearr_15537_15601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (11))){
var inst_15380 = (state_15481[(7)]);
var inst_15358 = (state_15481[(14)]);
var inst_15380__$1 = cljs.core.seq.call(null,inst_15358);
var state_15481__$1 = (function (){var statearr_15538 = state_15481;
(statearr_15538[(7)] = inst_15380__$1);

return statearr_15538;
})();
if(inst_15380__$1){
var statearr_15539_15602 = state_15481__$1;
(statearr_15539_15602[(1)] = (16));

} else {
var statearr_15540_15603 = state_15481__$1;
(statearr_15540_15603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (9))){
var inst_15410 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15541_15604 = state_15481__$1;
(statearr_15541_15604[(2)] = inst_15410);

(statearr_15541_15604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (5))){
var inst_15356 = cljs.core.deref.call(null,cs);
var inst_15357 = cljs.core.seq.call(null,inst_15356);
var inst_15358 = inst_15357;
var inst_15359 = null;
var inst_15360 = (0);
var inst_15361 = (0);
var state_15481__$1 = (function (){var statearr_15542 = state_15481;
(statearr_15542[(13)] = inst_15361);

(statearr_15542[(14)] = inst_15358);

(statearr_15542[(15)] = inst_15360);

(statearr_15542[(17)] = inst_15359);

return statearr_15542;
})();
var statearr_15543_15605 = state_15481__$1;
(statearr_15543_15605[(2)] = null);

(statearr_15543_15605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (14))){
var state_15481__$1 = state_15481;
var statearr_15544_15606 = state_15481__$1;
(statearr_15544_15606[(2)] = null);

(statearr_15544_15606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (45))){
var inst_15471 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15545_15607 = state_15481__$1;
(statearr_15545_15607[(2)] = inst_15471);

(statearr_15545_15607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (26))){
var inst_15413 = (state_15481[(29)]);
var inst_15467 = (state_15481[(2)]);
var inst_15468 = cljs.core.seq.call(null,inst_15413);
var state_15481__$1 = (function (){var statearr_15546 = state_15481;
(statearr_15546[(31)] = inst_15467);

return statearr_15546;
})();
if(inst_15468){
var statearr_15547_15608 = state_15481__$1;
(statearr_15547_15608[(1)] = (42));

} else {
var statearr_15548_15609 = state_15481__$1;
(statearr_15548_15609[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (16))){
var inst_15380 = (state_15481[(7)]);
var inst_15382 = cljs.core.chunked_seq_QMARK_.call(null,inst_15380);
var state_15481__$1 = state_15481;
if(inst_15382){
var statearr_15549_15610 = state_15481__$1;
(statearr_15549_15610[(1)] = (19));

} else {
var statearr_15550_15611 = state_15481__$1;
(statearr_15550_15611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (38))){
var inst_15460 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15551_15612 = state_15481__$1;
(statearr_15551_15612[(2)] = inst_15460);

(statearr_15551_15612[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (30))){
var state_15481__$1 = state_15481;
var statearr_15552_15613 = state_15481__$1;
(statearr_15552_15613[(2)] = null);

(statearr_15552_15613[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (10))){
var inst_15361 = (state_15481[(13)]);
var inst_15359 = (state_15481[(17)]);
var inst_15369 = cljs.core._nth.call(null,inst_15359,inst_15361);
var inst_15370 = cljs.core.nth.call(null,inst_15369,(0),null);
var inst_15371 = cljs.core.nth.call(null,inst_15369,(1),null);
var state_15481__$1 = (function (){var statearr_15553 = state_15481;
(statearr_15553[(26)] = inst_15370);

return statearr_15553;
})();
if(cljs.core.truth_(inst_15371)){
var statearr_15554_15614 = state_15481__$1;
(statearr_15554_15614[(1)] = (13));

} else {
var statearr_15555_15615 = state_15481__$1;
(statearr_15555_15615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (18))){
var inst_15406 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15556_15616 = state_15481__$1;
(statearr_15556_15616[(2)] = inst_15406);

(statearr_15556_15616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (42))){
var state_15481__$1 = state_15481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15481__$1,(45),dchan);
} else {
if((state_val_15482 === (37))){
var inst_15449 = (state_15481[(23)]);
var inst_15440 = (state_15481[(25)]);
var inst_15349 = (state_15481[(12)]);
var inst_15449__$1 = cljs.core.first.call(null,inst_15440);
var inst_15450 = cljs.core.async.put_BANG_.call(null,inst_15449__$1,inst_15349,done);
var state_15481__$1 = (function (){var statearr_15557 = state_15481;
(statearr_15557[(23)] = inst_15449__$1);

return statearr_15557;
})();
if(cljs.core.truth_(inst_15450)){
var statearr_15558_15617 = state_15481__$1;
(statearr_15558_15617[(1)] = (39));

} else {
var statearr_15559_15618 = state_15481__$1;
(statearr_15559_15618[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (8))){
var inst_15361 = (state_15481[(13)]);
var inst_15360 = (state_15481[(15)]);
var inst_15363 = (inst_15361 < inst_15360);
var inst_15364 = inst_15363;
var state_15481__$1 = state_15481;
if(cljs.core.truth_(inst_15364)){
var statearr_15560_15619 = state_15481__$1;
(statearr_15560_15619[(1)] = (10));

} else {
var statearr_15561_15620 = state_15481__$1;
(statearr_15561_15620[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___15566,cs,m,dchan,dctr,done))
;
return ((function (switch__12726__auto__,c__12885__auto___15566,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12727__auto__ = null;
var cljs$core$async$mult_$_state_machine__12727__auto____0 = (function (){
var statearr_15562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15562[(0)] = cljs$core$async$mult_$_state_machine__12727__auto__);

(statearr_15562[(1)] = (1));

return statearr_15562;
});
var cljs$core$async$mult_$_state_machine__12727__auto____1 = (function (state_15481){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15563){if((e15563 instanceof Object)){
var ex__12730__auto__ = e15563;
var statearr_15564_15621 = state_15481;
(statearr_15564_15621[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15622 = state_15481;
state_15481 = G__15622;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12727__auto__ = function(state_15481){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12727__auto____1.call(this,state_15481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12727__auto____0;
cljs$core$async$mult_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12727__auto____1;
return cljs$core$async$mult_$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___15566,cs,m,dchan,dctr,done))
})();
var state__12887__auto__ = (function (){var statearr_15565 = f__12886__auto__.call(null);
(statearr_15565[(6)] = c__12885__auto___15566);

return statearr_15565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___15566,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15624 = arguments.length;
switch (G__15624) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15636 = arguments.length;
var i__4532__auto___15637 = (0);
while(true){
if((i__4532__auto___15637 < len__4531__auto___15636)){
args__4534__auto__.push((arguments[i__4532__auto___15637]));

var G__15638 = (i__4532__auto___15637 + (1));
i__4532__auto___15637 = G__15638;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15630){
var map__15631 = p__15630;
var map__15631__$1 = ((((!((map__15631 == null)))?(((((map__15631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15631):map__15631);
var opts = map__15631__$1;
var statearr_15633_15639 = state;
(statearr_15633_15639[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__15631,map__15631__$1,opts){
return (function (val){
var statearr_15634_15640 = state;
(statearr_15634_15640[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15631,map__15631__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_15635_15641 = state;
(statearr_15635_15641[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15626){
var G__15627 = cljs.core.first.call(null,seq15626);
var seq15626__$1 = cljs.core.next.call(null,seq15626);
var G__15628 = cljs.core.first.call(null,seq15626__$1);
var seq15626__$2 = cljs.core.next.call(null,seq15626__$1);
var G__15629 = cljs.core.first.call(null,seq15626__$2);
var seq15626__$3 = cljs.core.next.call(null,seq15626__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15627,G__15628,G__15629,seq15626__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15642 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15643){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15643 = meta15643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15644,meta15643__$1){
var self__ = this;
var _15644__$1 = this;
return (new cljs.core.async.t_cljs$core$async15642(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15643__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15644){
var self__ = this;
var _15644__$1 = this;
return self__.meta15643;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15643","meta15643",55887852,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15642";

cljs.core.async.t_cljs$core$async15642.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async15642");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15642.
 */
cljs.core.async.__GT_t_cljs$core$async15642 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15642(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15643){
return (new cljs.core.async.t_cljs$core$async15642(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15643));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15642(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12885__auto___15806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___15806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___15806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15746){
var state_val_15747 = (state_15746[(1)]);
if((state_val_15747 === (7))){
var inst_15661 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
var statearr_15748_15807 = state_15746__$1;
(statearr_15748_15807[(2)] = inst_15661);

(statearr_15748_15807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (20))){
var inst_15673 = (state_15746[(7)]);
var state_15746__$1 = state_15746;
var statearr_15749_15808 = state_15746__$1;
(statearr_15749_15808[(2)] = inst_15673);

(statearr_15749_15808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (27))){
var state_15746__$1 = state_15746;
var statearr_15750_15809 = state_15746__$1;
(statearr_15750_15809[(2)] = null);

(statearr_15750_15809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (1))){
var inst_15648 = (state_15746[(8)]);
var inst_15648__$1 = calc_state.call(null);
var inst_15650 = (inst_15648__$1 == null);
var inst_15651 = cljs.core.not.call(null,inst_15650);
var state_15746__$1 = (function (){var statearr_15751 = state_15746;
(statearr_15751[(8)] = inst_15648__$1);

return statearr_15751;
})();
if(inst_15651){
var statearr_15752_15810 = state_15746__$1;
(statearr_15752_15810[(1)] = (2));

} else {
var statearr_15753_15811 = state_15746__$1;
(statearr_15753_15811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (24))){
var inst_15697 = (state_15746[(9)]);
var inst_15706 = (state_15746[(10)]);
var inst_15720 = (state_15746[(11)]);
var inst_15720__$1 = inst_15697.call(null,inst_15706);
var state_15746__$1 = (function (){var statearr_15754 = state_15746;
(statearr_15754[(11)] = inst_15720__$1);

return statearr_15754;
})();
if(cljs.core.truth_(inst_15720__$1)){
var statearr_15755_15812 = state_15746__$1;
(statearr_15755_15812[(1)] = (29));

} else {
var statearr_15756_15813 = state_15746__$1;
(statearr_15756_15813[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (4))){
var inst_15664 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
if(cljs.core.truth_(inst_15664)){
var statearr_15757_15814 = state_15746__$1;
(statearr_15757_15814[(1)] = (8));

} else {
var statearr_15758_15815 = state_15746__$1;
(statearr_15758_15815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (15))){
var inst_15691 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
if(cljs.core.truth_(inst_15691)){
var statearr_15759_15816 = state_15746__$1;
(statearr_15759_15816[(1)] = (19));

} else {
var statearr_15760_15817 = state_15746__$1;
(statearr_15760_15817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (21))){
var inst_15696 = (state_15746[(12)]);
var inst_15696__$1 = (state_15746[(2)]);
var inst_15697 = cljs.core.get.call(null,inst_15696__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15698 = cljs.core.get.call(null,inst_15696__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15699 = cljs.core.get.call(null,inst_15696__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15746__$1 = (function (){var statearr_15761 = state_15746;
(statearr_15761[(9)] = inst_15697);

(statearr_15761[(12)] = inst_15696__$1);

(statearr_15761[(13)] = inst_15698);

return statearr_15761;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15746__$1,(22),inst_15699);
} else {
if((state_val_15747 === (31))){
var inst_15728 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
if(cljs.core.truth_(inst_15728)){
var statearr_15762_15818 = state_15746__$1;
(statearr_15762_15818[(1)] = (32));

} else {
var statearr_15763_15819 = state_15746__$1;
(statearr_15763_15819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (32))){
var inst_15705 = (state_15746[(14)]);
var state_15746__$1 = state_15746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15746__$1,(35),out,inst_15705);
} else {
if((state_val_15747 === (33))){
var inst_15696 = (state_15746[(12)]);
var inst_15673 = inst_15696;
var state_15746__$1 = (function (){var statearr_15764 = state_15746;
(statearr_15764[(7)] = inst_15673);

return statearr_15764;
})();
var statearr_15765_15820 = state_15746__$1;
(statearr_15765_15820[(2)] = null);

(statearr_15765_15820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (13))){
var inst_15673 = (state_15746[(7)]);
var inst_15680 = inst_15673.cljs$lang$protocol_mask$partition0$;
var inst_15681 = (inst_15680 & (64));
var inst_15682 = inst_15673.cljs$core$ISeq$;
var inst_15683 = (cljs.core.PROTOCOL_SENTINEL === inst_15682);
var inst_15684 = ((inst_15681) || (inst_15683));
var state_15746__$1 = state_15746;
if(cljs.core.truth_(inst_15684)){
var statearr_15766_15821 = state_15746__$1;
(statearr_15766_15821[(1)] = (16));

} else {
var statearr_15767_15822 = state_15746__$1;
(statearr_15767_15822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (22))){
var inst_15706 = (state_15746[(10)]);
var inst_15705 = (state_15746[(14)]);
var inst_15704 = (state_15746[(2)]);
var inst_15705__$1 = cljs.core.nth.call(null,inst_15704,(0),null);
var inst_15706__$1 = cljs.core.nth.call(null,inst_15704,(1),null);
var inst_15707 = (inst_15705__$1 == null);
var inst_15708 = cljs.core._EQ_.call(null,inst_15706__$1,change);
var inst_15709 = ((inst_15707) || (inst_15708));
var state_15746__$1 = (function (){var statearr_15768 = state_15746;
(statearr_15768[(10)] = inst_15706__$1);

(statearr_15768[(14)] = inst_15705__$1);

return statearr_15768;
})();
if(cljs.core.truth_(inst_15709)){
var statearr_15769_15823 = state_15746__$1;
(statearr_15769_15823[(1)] = (23));

} else {
var statearr_15770_15824 = state_15746__$1;
(statearr_15770_15824[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (36))){
var inst_15696 = (state_15746[(12)]);
var inst_15673 = inst_15696;
var state_15746__$1 = (function (){var statearr_15771 = state_15746;
(statearr_15771[(7)] = inst_15673);

return statearr_15771;
})();
var statearr_15772_15825 = state_15746__$1;
(statearr_15772_15825[(2)] = null);

(statearr_15772_15825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (29))){
var inst_15720 = (state_15746[(11)]);
var state_15746__$1 = state_15746;
var statearr_15773_15826 = state_15746__$1;
(statearr_15773_15826[(2)] = inst_15720);

(statearr_15773_15826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (6))){
var state_15746__$1 = state_15746;
var statearr_15774_15827 = state_15746__$1;
(statearr_15774_15827[(2)] = false);

(statearr_15774_15827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (28))){
var inst_15716 = (state_15746[(2)]);
var inst_15717 = calc_state.call(null);
var inst_15673 = inst_15717;
var state_15746__$1 = (function (){var statearr_15775 = state_15746;
(statearr_15775[(15)] = inst_15716);

(statearr_15775[(7)] = inst_15673);

return statearr_15775;
})();
var statearr_15776_15828 = state_15746__$1;
(statearr_15776_15828[(2)] = null);

(statearr_15776_15828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (25))){
var inst_15742 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
var statearr_15777_15829 = state_15746__$1;
(statearr_15777_15829[(2)] = inst_15742);

(statearr_15777_15829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (34))){
var inst_15740 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
var statearr_15778_15830 = state_15746__$1;
(statearr_15778_15830[(2)] = inst_15740);

(statearr_15778_15830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (17))){
var state_15746__$1 = state_15746;
var statearr_15779_15831 = state_15746__$1;
(statearr_15779_15831[(2)] = false);

(statearr_15779_15831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (3))){
var state_15746__$1 = state_15746;
var statearr_15780_15832 = state_15746__$1;
(statearr_15780_15832[(2)] = false);

(statearr_15780_15832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (12))){
var inst_15744 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15746__$1,inst_15744);
} else {
if((state_val_15747 === (2))){
var inst_15648 = (state_15746[(8)]);
var inst_15653 = inst_15648.cljs$lang$protocol_mask$partition0$;
var inst_15654 = (inst_15653 & (64));
var inst_15655 = inst_15648.cljs$core$ISeq$;
var inst_15656 = (cljs.core.PROTOCOL_SENTINEL === inst_15655);
var inst_15657 = ((inst_15654) || (inst_15656));
var state_15746__$1 = state_15746;
if(cljs.core.truth_(inst_15657)){
var statearr_15781_15833 = state_15746__$1;
(statearr_15781_15833[(1)] = (5));

} else {
var statearr_15782_15834 = state_15746__$1;
(statearr_15782_15834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (23))){
var inst_15705 = (state_15746[(14)]);
var inst_15711 = (inst_15705 == null);
var state_15746__$1 = state_15746;
if(cljs.core.truth_(inst_15711)){
var statearr_15783_15835 = state_15746__$1;
(statearr_15783_15835[(1)] = (26));

} else {
var statearr_15784_15836 = state_15746__$1;
(statearr_15784_15836[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (35))){
var inst_15731 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
if(cljs.core.truth_(inst_15731)){
var statearr_15785_15837 = state_15746__$1;
(statearr_15785_15837[(1)] = (36));

} else {
var statearr_15786_15838 = state_15746__$1;
(statearr_15786_15838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (19))){
var inst_15673 = (state_15746[(7)]);
var inst_15693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15673);
var state_15746__$1 = state_15746;
var statearr_15787_15839 = state_15746__$1;
(statearr_15787_15839[(2)] = inst_15693);

(statearr_15787_15839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (11))){
var inst_15673 = (state_15746[(7)]);
var inst_15677 = (inst_15673 == null);
var inst_15678 = cljs.core.not.call(null,inst_15677);
var state_15746__$1 = state_15746;
if(inst_15678){
var statearr_15788_15840 = state_15746__$1;
(statearr_15788_15840[(1)] = (13));

} else {
var statearr_15789_15841 = state_15746__$1;
(statearr_15789_15841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (9))){
var inst_15648 = (state_15746[(8)]);
var state_15746__$1 = state_15746;
var statearr_15790_15842 = state_15746__$1;
(statearr_15790_15842[(2)] = inst_15648);

(statearr_15790_15842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (5))){
var state_15746__$1 = state_15746;
var statearr_15791_15843 = state_15746__$1;
(statearr_15791_15843[(2)] = true);

(statearr_15791_15843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (14))){
var state_15746__$1 = state_15746;
var statearr_15792_15844 = state_15746__$1;
(statearr_15792_15844[(2)] = false);

(statearr_15792_15844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (26))){
var inst_15706 = (state_15746[(10)]);
var inst_15713 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15706);
var state_15746__$1 = state_15746;
var statearr_15793_15845 = state_15746__$1;
(statearr_15793_15845[(2)] = inst_15713);

(statearr_15793_15845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (16))){
var state_15746__$1 = state_15746;
var statearr_15794_15846 = state_15746__$1;
(statearr_15794_15846[(2)] = true);

(statearr_15794_15846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (38))){
var inst_15736 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
var statearr_15795_15847 = state_15746__$1;
(statearr_15795_15847[(2)] = inst_15736);

(statearr_15795_15847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (30))){
var inst_15697 = (state_15746[(9)]);
var inst_15706 = (state_15746[(10)]);
var inst_15698 = (state_15746[(13)]);
var inst_15723 = cljs.core.empty_QMARK_.call(null,inst_15697);
var inst_15724 = inst_15698.call(null,inst_15706);
var inst_15725 = cljs.core.not.call(null,inst_15724);
var inst_15726 = ((inst_15723) && (inst_15725));
var state_15746__$1 = state_15746;
var statearr_15796_15848 = state_15746__$1;
(statearr_15796_15848[(2)] = inst_15726);

(statearr_15796_15848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (10))){
var inst_15648 = (state_15746[(8)]);
var inst_15669 = (state_15746[(2)]);
var inst_15670 = cljs.core.get.call(null,inst_15669,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15671 = cljs.core.get.call(null,inst_15669,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15672 = cljs.core.get.call(null,inst_15669,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15673 = inst_15648;
var state_15746__$1 = (function (){var statearr_15797 = state_15746;
(statearr_15797[(16)] = inst_15671);

(statearr_15797[(7)] = inst_15673);

(statearr_15797[(17)] = inst_15670);

(statearr_15797[(18)] = inst_15672);

return statearr_15797;
})();
var statearr_15798_15849 = state_15746__$1;
(statearr_15798_15849[(2)] = null);

(statearr_15798_15849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (18))){
var inst_15688 = (state_15746[(2)]);
var state_15746__$1 = state_15746;
var statearr_15799_15850 = state_15746__$1;
(statearr_15799_15850[(2)] = inst_15688);

(statearr_15799_15850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (37))){
var state_15746__$1 = state_15746;
var statearr_15800_15851 = state_15746__$1;
(statearr_15800_15851[(2)] = null);

(statearr_15800_15851[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15747 === (8))){
var inst_15648 = (state_15746[(8)]);
var inst_15666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15648);
var state_15746__$1 = state_15746;
var statearr_15801_15852 = state_15746__$1;
(statearr_15801_15852[(2)] = inst_15666);

(statearr_15801_15852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___15806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12726__auto__,c__12885__auto___15806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12727__auto__ = null;
var cljs$core$async$mix_$_state_machine__12727__auto____0 = (function (){
var statearr_15802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15802[(0)] = cljs$core$async$mix_$_state_machine__12727__auto__);

(statearr_15802[(1)] = (1));

return statearr_15802;
});
var cljs$core$async$mix_$_state_machine__12727__auto____1 = (function (state_15746){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15803){if((e15803 instanceof Object)){
var ex__12730__auto__ = e15803;
var statearr_15804_15853 = state_15746;
(statearr_15804_15853[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15854 = state_15746;
state_15746 = G__15854;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12727__auto__ = function(state_15746){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12727__auto____1.call(this,state_15746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12727__auto____0;
cljs$core$async$mix_$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12727__auto____1;
return cljs$core$async$mix_$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___15806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12887__auto__ = (function (){var statearr_15805 = f__12886__auto__.call(null);
(statearr_15805[(6)] = c__12885__auto___15806);

return statearr_15805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___15806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15856 = arguments.length;
switch (G__15856) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15860 = arguments.length;
switch (G__15860) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__15858_SHARP_){
if(cljs.core.truth_(p1__15858_SHARP_.call(null,topic))){
return p1__15858_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15861 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15862){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15862 = meta15862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15863,meta15862__$1){
var self__ = this;
var _15863__$1 = this;
return (new cljs.core.async.t_cljs$core$async15861(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15862__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15863){
var self__ = this;
var _15863__$1 = this;
return self__.meta15862;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15862","meta15862",-1881273846,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15861";

cljs.core.async.t_cljs$core$async15861.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async15861");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15861.
 */
cljs.core.async.__GT_t_cljs$core$async15861 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15862){
return (new cljs.core.async.t_cljs$core$async15861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15862));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15861(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12885__auto___15981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___15981,mults,ensure_mult,p){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___15981,mults,ensure_mult,p){
return (function (state_15935){
var state_val_15936 = (state_15935[(1)]);
if((state_val_15936 === (7))){
var inst_15931 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15937_15982 = state_15935__$1;
(statearr_15937_15982[(2)] = inst_15931);

(statearr_15937_15982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (20))){
var state_15935__$1 = state_15935;
var statearr_15938_15983 = state_15935__$1;
(statearr_15938_15983[(2)] = null);

(statearr_15938_15983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (1))){
var state_15935__$1 = state_15935;
var statearr_15939_15984 = state_15935__$1;
(statearr_15939_15984[(2)] = null);

(statearr_15939_15984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (24))){
var inst_15914 = (state_15935[(7)]);
var inst_15923 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15914);
var state_15935__$1 = state_15935;
var statearr_15940_15985 = state_15935__$1;
(statearr_15940_15985[(2)] = inst_15923);

(statearr_15940_15985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (4))){
var inst_15866 = (state_15935[(8)]);
var inst_15866__$1 = (state_15935[(2)]);
var inst_15867 = (inst_15866__$1 == null);
var state_15935__$1 = (function (){var statearr_15941 = state_15935;
(statearr_15941[(8)] = inst_15866__$1);

return statearr_15941;
})();
if(cljs.core.truth_(inst_15867)){
var statearr_15942_15986 = state_15935__$1;
(statearr_15942_15986[(1)] = (5));

} else {
var statearr_15943_15987 = state_15935__$1;
(statearr_15943_15987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (15))){
var inst_15908 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15944_15988 = state_15935__$1;
(statearr_15944_15988[(2)] = inst_15908);

(statearr_15944_15988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (21))){
var inst_15928 = (state_15935[(2)]);
var state_15935__$1 = (function (){var statearr_15945 = state_15935;
(statearr_15945[(9)] = inst_15928);

return statearr_15945;
})();
var statearr_15946_15989 = state_15935__$1;
(statearr_15946_15989[(2)] = null);

(statearr_15946_15989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (13))){
var inst_15890 = (state_15935[(10)]);
var inst_15892 = cljs.core.chunked_seq_QMARK_.call(null,inst_15890);
var state_15935__$1 = state_15935;
if(inst_15892){
var statearr_15947_15990 = state_15935__$1;
(statearr_15947_15990[(1)] = (16));

} else {
var statearr_15948_15991 = state_15935__$1;
(statearr_15948_15991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (22))){
var inst_15920 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
if(cljs.core.truth_(inst_15920)){
var statearr_15949_15992 = state_15935__$1;
(statearr_15949_15992[(1)] = (23));

} else {
var statearr_15950_15993 = state_15935__$1;
(statearr_15950_15993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (6))){
var inst_15916 = (state_15935[(11)]);
var inst_15866 = (state_15935[(8)]);
var inst_15914 = (state_15935[(7)]);
var inst_15914__$1 = topic_fn.call(null,inst_15866);
var inst_15915 = cljs.core.deref.call(null,mults);
var inst_15916__$1 = cljs.core.get.call(null,inst_15915,inst_15914__$1);
var state_15935__$1 = (function (){var statearr_15951 = state_15935;
(statearr_15951[(11)] = inst_15916__$1);

(statearr_15951[(7)] = inst_15914__$1);

return statearr_15951;
})();
if(cljs.core.truth_(inst_15916__$1)){
var statearr_15952_15994 = state_15935__$1;
(statearr_15952_15994[(1)] = (19));

} else {
var statearr_15953_15995 = state_15935__$1;
(statearr_15953_15995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (25))){
var inst_15925 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15954_15996 = state_15935__$1;
(statearr_15954_15996[(2)] = inst_15925);

(statearr_15954_15996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (17))){
var inst_15890 = (state_15935[(10)]);
var inst_15899 = cljs.core.first.call(null,inst_15890);
var inst_15900 = cljs.core.async.muxch_STAR_.call(null,inst_15899);
var inst_15901 = cljs.core.async.close_BANG_.call(null,inst_15900);
var inst_15902 = cljs.core.next.call(null,inst_15890);
var inst_15876 = inst_15902;
var inst_15877 = null;
var inst_15878 = (0);
var inst_15879 = (0);
var state_15935__$1 = (function (){var statearr_15955 = state_15935;
(statearr_15955[(12)] = inst_15878);

(statearr_15955[(13)] = inst_15877);

(statearr_15955[(14)] = inst_15876);

(statearr_15955[(15)] = inst_15901);

(statearr_15955[(16)] = inst_15879);

return statearr_15955;
})();
var statearr_15956_15997 = state_15935__$1;
(statearr_15956_15997[(2)] = null);

(statearr_15956_15997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (3))){
var inst_15933 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15935__$1,inst_15933);
} else {
if((state_val_15936 === (12))){
var inst_15910 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15957_15998 = state_15935__$1;
(statearr_15957_15998[(2)] = inst_15910);

(statearr_15957_15998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (2))){
var state_15935__$1 = state_15935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15935__$1,(4),ch);
} else {
if((state_val_15936 === (23))){
var state_15935__$1 = state_15935;
var statearr_15958_15999 = state_15935__$1;
(statearr_15958_15999[(2)] = null);

(statearr_15958_15999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (19))){
var inst_15916 = (state_15935[(11)]);
var inst_15866 = (state_15935[(8)]);
var inst_15918 = cljs.core.async.muxch_STAR_.call(null,inst_15916);
var state_15935__$1 = state_15935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15935__$1,(22),inst_15918,inst_15866);
} else {
if((state_val_15936 === (11))){
var inst_15876 = (state_15935[(14)]);
var inst_15890 = (state_15935[(10)]);
var inst_15890__$1 = cljs.core.seq.call(null,inst_15876);
var state_15935__$1 = (function (){var statearr_15959 = state_15935;
(statearr_15959[(10)] = inst_15890__$1);

return statearr_15959;
})();
if(inst_15890__$1){
var statearr_15960_16000 = state_15935__$1;
(statearr_15960_16000[(1)] = (13));

} else {
var statearr_15961_16001 = state_15935__$1;
(statearr_15961_16001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (9))){
var inst_15912 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15962_16002 = state_15935__$1;
(statearr_15962_16002[(2)] = inst_15912);

(statearr_15962_16002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (5))){
var inst_15873 = cljs.core.deref.call(null,mults);
var inst_15874 = cljs.core.vals.call(null,inst_15873);
var inst_15875 = cljs.core.seq.call(null,inst_15874);
var inst_15876 = inst_15875;
var inst_15877 = null;
var inst_15878 = (0);
var inst_15879 = (0);
var state_15935__$1 = (function (){var statearr_15963 = state_15935;
(statearr_15963[(12)] = inst_15878);

(statearr_15963[(13)] = inst_15877);

(statearr_15963[(14)] = inst_15876);

(statearr_15963[(16)] = inst_15879);

return statearr_15963;
})();
var statearr_15964_16003 = state_15935__$1;
(statearr_15964_16003[(2)] = null);

(statearr_15964_16003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (14))){
var state_15935__$1 = state_15935;
var statearr_15968_16004 = state_15935__$1;
(statearr_15968_16004[(2)] = null);

(statearr_15968_16004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (16))){
var inst_15890 = (state_15935[(10)]);
var inst_15894 = cljs.core.chunk_first.call(null,inst_15890);
var inst_15895 = cljs.core.chunk_rest.call(null,inst_15890);
var inst_15896 = cljs.core.count.call(null,inst_15894);
var inst_15876 = inst_15895;
var inst_15877 = inst_15894;
var inst_15878 = inst_15896;
var inst_15879 = (0);
var state_15935__$1 = (function (){var statearr_15969 = state_15935;
(statearr_15969[(12)] = inst_15878);

(statearr_15969[(13)] = inst_15877);

(statearr_15969[(14)] = inst_15876);

(statearr_15969[(16)] = inst_15879);

return statearr_15969;
})();
var statearr_15970_16005 = state_15935__$1;
(statearr_15970_16005[(2)] = null);

(statearr_15970_16005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (10))){
var inst_15878 = (state_15935[(12)]);
var inst_15877 = (state_15935[(13)]);
var inst_15876 = (state_15935[(14)]);
var inst_15879 = (state_15935[(16)]);
var inst_15884 = cljs.core._nth.call(null,inst_15877,inst_15879);
var inst_15885 = cljs.core.async.muxch_STAR_.call(null,inst_15884);
var inst_15886 = cljs.core.async.close_BANG_.call(null,inst_15885);
var inst_15887 = (inst_15879 + (1));
var tmp15965 = inst_15878;
var tmp15966 = inst_15877;
var tmp15967 = inst_15876;
var inst_15876__$1 = tmp15967;
var inst_15877__$1 = tmp15966;
var inst_15878__$1 = tmp15965;
var inst_15879__$1 = inst_15887;
var state_15935__$1 = (function (){var statearr_15971 = state_15935;
(statearr_15971[(12)] = inst_15878__$1);

(statearr_15971[(13)] = inst_15877__$1);

(statearr_15971[(14)] = inst_15876__$1);

(statearr_15971[(17)] = inst_15886);

(statearr_15971[(16)] = inst_15879__$1);

return statearr_15971;
})();
var statearr_15972_16006 = state_15935__$1;
(statearr_15972_16006[(2)] = null);

(statearr_15972_16006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (18))){
var inst_15905 = (state_15935[(2)]);
var state_15935__$1 = state_15935;
var statearr_15973_16007 = state_15935__$1;
(statearr_15973_16007[(2)] = inst_15905);

(statearr_15973_16007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15936 === (8))){
var inst_15878 = (state_15935[(12)]);
var inst_15879 = (state_15935[(16)]);
var inst_15881 = (inst_15879 < inst_15878);
var inst_15882 = inst_15881;
var state_15935__$1 = state_15935;
if(cljs.core.truth_(inst_15882)){
var statearr_15974_16008 = state_15935__$1;
(statearr_15974_16008[(1)] = (10));

} else {
var statearr_15975_16009 = state_15935__$1;
(statearr_15975_16009[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___15981,mults,ensure_mult,p))
;
return ((function (switch__12726__auto__,c__12885__auto___15981,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_15976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15976[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_15976[(1)] = (1));

return statearr_15976;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_15935){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_15935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e15977){if((e15977 instanceof Object)){
var ex__12730__auto__ = e15977;
var statearr_15978_16010 = state_15935;
(statearr_15978_16010[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16011 = state_15935;
state_15935 = G__16011;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_15935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_15935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___15981,mults,ensure_mult,p))
})();
var state__12887__auto__ = (function (){var statearr_15979 = f__12886__auto__.call(null);
(statearr_15979[(6)] = c__12885__auto___15981);

return statearr_15979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___15981,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16013 = arguments.length;
switch (G__16013) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16016 = arguments.length;
switch (G__16016) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16019 = arguments.length;
switch (G__16019) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12885__auto___16086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___16086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___16086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16058){
var state_val_16059 = (state_16058[(1)]);
if((state_val_16059 === (7))){
var state_16058__$1 = state_16058;
var statearr_16060_16087 = state_16058__$1;
(statearr_16060_16087[(2)] = null);

(statearr_16060_16087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (1))){
var state_16058__$1 = state_16058;
var statearr_16061_16088 = state_16058__$1;
(statearr_16061_16088[(2)] = null);

(statearr_16061_16088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (4))){
var inst_16022 = (state_16058[(7)]);
var inst_16024 = (inst_16022 < cnt);
var state_16058__$1 = state_16058;
if(cljs.core.truth_(inst_16024)){
var statearr_16062_16089 = state_16058__$1;
(statearr_16062_16089[(1)] = (6));

} else {
var statearr_16063_16090 = state_16058__$1;
(statearr_16063_16090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (15))){
var inst_16054 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
var statearr_16064_16091 = state_16058__$1;
(statearr_16064_16091[(2)] = inst_16054);

(statearr_16064_16091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (13))){
var inst_16047 = cljs.core.async.close_BANG_.call(null,out);
var state_16058__$1 = state_16058;
var statearr_16065_16092 = state_16058__$1;
(statearr_16065_16092[(2)] = inst_16047);

(statearr_16065_16092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (6))){
var state_16058__$1 = state_16058;
var statearr_16066_16093 = state_16058__$1;
(statearr_16066_16093[(2)] = null);

(statearr_16066_16093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (3))){
var inst_16056 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16058__$1,inst_16056);
} else {
if((state_val_16059 === (12))){
var inst_16044 = (state_16058[(8)]);
var inst_16044__$1 = (state_16058[(2)]);
var inst_16045 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16044__$1);
var state_16058__$1 = (function (){var statearr_16067 = state_16058;
(statearr_16067[(8)] = inst_16044__$1);

return statearr_16067;
})();
if(cljs.core.truth_(inst_16045)){
var statearr_16068_16094 = state_16058__$1;
(statearr_16068_16094[(1)] = (13));

} else {
var statearr_16069_16095 = state_16058__$1;
(statearr_16069_16095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (2))){
var inst_16021 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16022 = (0);
var state_16058__$1 = (function (){var statearr_16070 = state_16058;
(statearr_16070[(7)] = inst_16022);

(statearr_16070[(9)] = inst_16021);

return statearr_16070;
})();
var statearr_16071_16096 = state_16058__$1;
(statearr_16071_16096[(2)] = null);

(statearr_16071_16096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (11))){
var inst_16022 = (state_16058[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16058,(10),Object,null,(9));
var inst_16031 = chs__$1.call(null,inst_16022);
var inst_16032 = done.call(null,inst_16022);
var inst_16033 = cljs.core.async.take_BANG_.call(null,inst_16031,inst_16032);
var state_16058__$1 = state_16058;
var statearr_16072_16097 = state_16058__$1;
(statearr_16072_16097[(2)] = inst_16033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (9))){
var inst_16022 = (state_16058[(7)]);
var inst_16035 = (state_16058[(2)]);
var inst_16036 = (inst_16022 + (1));
var inst_16022__$1 = inst_16036;
var state_16058__$1 = (function (){var statearr_16073 = state_16058;
(statearr_16073[(7)] = inst_16022__$1);

(statearr_16073[(10)] = inst_16035);

return statearr_16073;
})();
var statearr_16074_16098 = state_16058__$1;
(statearr_16074_16098[(2)] = null);

(statearr_16074_16098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (5))){
var inst_16042 = (state_16058[(2)]);
var state_16058__$1 = (function (){var statearr_16075 = state_16058;
(statearr_16075[(11)] = inst_16042);

return statearr_16075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16058__$1,(12),dchan);
} else {
if((state_val_16059 === (14))){
var inst_16044 = (state_16058[(8)]);
var inst_16049 = cljs.core.apply.call(null,f,inst_16044);
var state_16058__$1 = state_16058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16058__$1,(16),out,inst_16049);
} else {
if((state_val_16059 === (16))){
var inst_16051 = (state_16058[(2)]);
var state_16058__$1 = (function (){var statearr_16076 = state_16058;
(statearr_16076[(12)] = inst_16051);

return statearr_16076;
})();
var statearr_16077_16099 = state_16058__$1;
(statearr_16077_16099[(2)] = null);

(statearr_16077_16099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (10))){
var inst_16026 = (state_16058[(2)]);
var inst_16027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16058__$1 = (function (){var statearr_16078 = state_16058;
(statearr_16078[(13)] = inst_16026);

return statearr_16078;
})();
var statearr_16079_16100 = state_16058__$1;
(statearr_16079_16100[(2)] = inst_16027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16059 === (8))){
var inst_16040 = (state_16058[(2)]);
var state_16058__$1 = state_16058;
var statearr_16080_16101 = state_16058__$1;
(statearr_16080_16101[(2)] = inst_16040);

(statearr_16080_16101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___16086,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12726__auto__,c__12885__auto___16086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_16081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16081[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_16081[(1)] = (1));

return statearr_16081;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_16058){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16082){if((e16082 instanceof Object)){
var ex__12730__auto__ = e16082;
var statearr_16083_16102 = state_16058;
(statearr_16083_16102[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16103 = state_16058;
state_16058 = G__16103;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_16058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_16058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___16086,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12887__auto__ = (function (){var statearr_16084 = f__12886__auto__.call(null);
(statearr_16084[(6)] = c__12885__auto___16086);

return statearr_16084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___16086,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16106 = arguments.length;
switch (G__16106) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12885__auto___16160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___16160,out){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___16160,out){
return (function (state_16138){
var state_val_16139 = (state_16138[(1)]);
if((state_val_16139 === (7))){
var inst_16117 = (state_16138[(7)]);
var inst_16118 = (state_16138[(8)]);
var inst_16117__$1 = (state_16138[(2)]);
var inst_16118__$1 = cljs.core.nth.call(null,inst_16117__$1,(0),null);
var inst_16119 = cljs.core.nth.call(null,inst_16117__$1,(1),null);
var inst_16120 = (inst_16118__$1 == null);
var state_16138__$1 = (function (){var statearr_16140 = state_16138;
(statearr_16140[(7)] = inst_16117__$1);

(statearr_16140[(9)] = inst_16119);

(statearr_16140[(8)] = inst_16118__$1);

return statearr_16140;
})();
if(cljs.core.truth_(inst_16120)){
var statearr_16141_16161 = state_16138__$1;
(statearr_16141_16161[(1)] = (8));

} else {
var statearr_16142_16162 = state_16138__$1;
(statearr_16142_16162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (1))){
var inst_16107 = cljs.core.vec.call(null,chs);
var inst_16108 = inst_16107;
var state_16138__$1 = (function (){var statearr_16143 = state_16138;
(statearr_16143[(10)] = inst_16108);

return statearr_16143;
})();
var statearr_16144_16163 = state_16138__$1;
(statearr_16144_16163[(2)] = null);

(statearr_16144_16163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (4))){
var inst_16108 = (state_16138[(10)]);
var state_16138__$1 = state_16138;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16138__$1,(7),inst_16108);
} else {
if((state_val_16139 === (6))){
var inst_16134 = (state_16138[(2)]);
var state_16138__$1 = state_16138;
var statearr_16145_16164 = state_16138__$1;
(statearr_16145_16164[(2)] = inst_16134);

(statearr_16145_16164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (3))){
var inst_16136 = (state_16138[(2)]);
var state_16138__$1 = state_16138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16138__$1,inst_16136);
} else {
if((state_val_16139 === (2))){
var inst_16108 = (state_16138[(10)]);
var inst_16110 = cljs.core.count.call(null,inst_16108);
var inst_16111 = (inst_16110 > (0));
var state_16138__$1 = state_16138;
if(cljs.core.truth_(inst_16111)){
var statearr_16147_16165 = state_16138__$1;
(statearr_16147_16165[(1)] = (4));

} else {
var statearr_16148_16166 = state_16138__$1;
(statearr_16148_16166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (11))){
var inst_16108 = (state_16138[(10)]);
var inst_16127 = (state_16138[(2)]);
var tmp16146 = inst_16108;
var inst_16108__$1 = tmp16146;
var state_16138__$1 = (function (){var statearr_16149 = state_16138;
(statearr_16149[(11)] = inst_16127);

(statearr_16149[(10)] = inst_16108__$1);

return statearr_16149;
})();
var statearr_16150_16167 = state_16138__$1;
(statearr_16150_16167[(2)] = null);

(statearr_16150_16167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (9))){
var inst_16118 = (state_16138[(8)]);
var state_16138__$1 = state_16138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16138__$1,(11),out,inst_16118);
} else {
if((state_val_16139 === (5))){
var inst_16132 = cljs.core.async.close_BANG_.call(null,out);
var state_16138__$1 = state_16138;
var statearr_16151_16168 = state_16138__$1;
(statearr_16151_16168[(2)] = inst_16132);

(statearr_16151_16168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (10))){
var inst_16130 = (state_16138[(2)]);
var state_16138__$1 = state_16138;
var statearr_16152_16169 = state_16138__$1;
(statearr_16152_16169[(2)] = inst_16130);

(statearr_16152_16169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16139 === (8))){
var inst_16117 = (state_16138[(7)]);
var inst_16119 = (state_16138[(9)]);
var inst_16118 = (state_16138[(8)]);
var inst_16108 = (state_16138[(10)]);
var inst_16122 = (function (){var cs = inst_16108;
var vec__16113 = inst_16117;
var v = inst_16118;
var c = inst_16119;
return ((function (cs,vec__16113,v,c,inst_16117,inst_16119,inst_16118,inst_16108,state_val_16139,c__12885__auto___16160,out){
return (function (p1__16104_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16104_SHARP_);
});
;})(cs,vec__16113,v,c,inst_16117,inst_16119,inst_16118,inst_16108,state_val_16139,c__12885__auto___16160,out))
})();
var inst_16123 = cljs.core.filterv.call(null,inst_16122,inst_16108);
var inst_16108__$1 = inst_16123;
var state_16138__$1 = (function (){var statearr_16153 = state_16138;
(statearr_16153[(10)] = inst_16108__$1);

return statearr_16153;
})();
var statearr_16154_16170 = state_16138__$1;
(statearr_16154_16170[(2)] = null);

(statearr_16154_16170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___16160,out))
;
return ((function (switch__12726__auto__,c__12885__auto___16160,out){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_16155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16155[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_16155[(1)] = (1));

return statearr_16155;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_16138){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16156){if((e16156 instanceof Object)){
var ex__12730__auto__ = e16156;
var statearr_16157_16171 = state_16138;
(statearr_16157_16171[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16172 = state_16138;
state_16138 = G__16172;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_16138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_16138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___16160,out))
})();
var state__12887__auto__ = (function (){var statearr_16158 = f__12886__auto__.call(null);
(statearr_16158[(6)] = c__12885__auto___16160);

return statearr_16158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___16160,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16174 = arguments.length;
switch (G__16174) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12885__auto___16219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___16219,out){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___16219,out){
return (function (state_16198){
var state_val_16199 = (state_16198[(1)]);
if((state_val_16199 === (7))){
var inst_16180 = (state_16198[(7)]);
var inst_16180__$1 = (state_16198[(2)]);
var inst_16181 = (inst_16180__$1 == null);
var inst_16182 = cljs.core.not.call(null,inst_16181);
var state_16198__$1 = (function (){var statearr_16200 = state_16198;
(statearr_16200[(7)] = inst_16180__$1);

return statearr_16200;
})();
if(inst_16182){
var statearr_16201_16220 = state_16198__$1;
(statearr_16201_16220[(1)] = (8));

} else {
var statearr_16202_16221 = state_16198__$1;
(statearr_16202_16221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (1))){
var inst_16175 = (0);
var state_16198__$1 = (function (){var statearr_16203 = state_16198;
(statearr_16203[(8)] = inst_16175);

return statearr_16203;
})();
var statearr_16204_16222 = state_16198__$1;
(statearr_16204_16222[(2)] = null);

(statearr_16204_16222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (4))){
var state_16198__$1 = state_16198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16198__$1,(7),ch);
} else {
if((state_val_16199 === (6))){
var inst_16193 = (state_16198[(2)]);
var state_16198__$1 = state_16198;
var statearr_16205_16223 = state_16198__$1;
(statearr_16205_16223[(2)] = inst_16193);

(statearr_16205_16223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (3))){
var inst_16195 = (state_16198[(2)]);
var inst_16196 = cljs.core.async.close_BANG_.call(null,out);
var state_16198__$1 = (function (){var statearr_16206 = state_16198;
(statearr_16206[(9)] = inst_16195);

return statearr_16206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16198__$1,inst_16196);
} else {
if((state_val_16199 === (2))){
var inst_16175 = (state_16198[(8)]);
var inst_16177 = (inst_16175 < n);
var state_16198__$1 = state_16198;
if(cljs.core.truth_(inst_16177)){
var statearr_16207_16224 = state_16198__$1;
(statearr_16207_16224[(1)] = (4));

} else {
var statearr_16208_16225 = state_16198__$1;
(statearr_16208_16225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (11))){
var inst_16175 = (state_16198[(8)]);
var inst_16185 = (state_16198[(2)]);
var inst_16186 = (inst_16175 + (1));
var inst_16175__$1 = inst_16186;
var state_16198__$1 = (function (){var statearr_16209 = state_16198;
(statearr_16209[(8)] = inst_16175__$1);

(statearr_16209[(10)] = inst_16185);

return statearr_16209;
})();
var statearr_16210_16226 = state_16198__$1;
(statearr_16210_16226[(2)] = null);

(statearr_16210_16226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (9))){
var state_16198__$1 = state_16198;
var statearr_16211_16227 = state_16198__$1;
(statearr_16211_16227[(2)] = null);

(statearr_16211_16227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (5))){
var state_16198__$1 = state_16198;
var statearr_16212_16228 = state_16198__$1;
(statearr_16212_16228[(2)] = null);

(statearr_16212_16228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (10))){
var inst_16190 = (state_16198[(2)]);
var state_16198__$1 = state_16198;
var statearr_16213_16229 = state_16198__$1;
(statearr_16213_16229[(2)] = inst_16190);

(statearr_16213_16229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16199 === (8))){
var inst_16180 = (state_16198[(7)]);
var state_16198__$1 = state_16198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16198__$1,(11),out,inst_16180);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___16219,out))
;
return ((function (switch__12726__auto__,c__12885__auto___16219,out){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_16214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16214[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_16214[(1)] = (1));

return statearr_16214;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_16198){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16215){if((e16215 instanceof Object)){
var ex__12730__auto__ = e16215;
var statearr_16216_16230 = state_16198;
(statearr_16216_16230[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16231 = state_16198;
state_16198 = G__16231;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_16198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_16198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___16219,out))
})();
var state__12887__auto__ = (function (){var statearr_16217 = f__12886__auto__.call(null);
(statearr_16217[(6)] = c__12885__auto___16219);

return statearr_16217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___16219,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16233 = (function (f,ch,meta16234){
this.f = f;
this.ch = ch;
this.meta16234 = meta16234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16235,meta16234__$1){
var self__ = this;
var _16235__$1 = this;
return (new cljs.core.async.t_cljs$core$async16233(self__.f,self__.ch,meta16234__$1));
});

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16235){
var self__ = this;
var _16235__$1 = this;
return self__.meta16234;
});

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16236 = (function (f,ch,meta16234,_,fn1,meta16237){
this.f = f;
this.ch = ch;
this.meta16234 = meta16234;
this._ = _;
this.fn1 = fn1;
this.meta16237 = meta16237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16238,meta16237__$1){
var self__ = this;
var _16238__$1 = this;
return (new cljs.core.async.t_cljs$core$async16236(self__.f,self__.ch,self__.meta16234,self__._,self__.fn1,meta16237__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16238){
var self__ = this;
var _16238__$1 = this;
return self__.meta16237;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16232_SHARP_){
return f1.call(null,(((p1__16232_SHARP_ == null))?null:self__.f.call(null,p1__16232_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16236.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16234","meta16234",1153363806,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16233","cljs.core.async/t_cljs$core$async16233",-1137812519,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16237","meta16237",-1590512593,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16236";

cljs.core.async.t_cljs$core$async16236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16236");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16236.
 */
cljs.core.async.__GT_t_cljs$core$async16236 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16236(f__$1,ch__$1,meta16234__$1,___$2,fn1__$1,meta16237){
return (new cljs.core.async.t_cljs$core$async16236(f__$1,ch__$1,meta16234__$1,___$2,fn1__$1,meta16237));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16236(self__.f,self__.ch,self__.meta16234,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16234","meta16234",1153363806,null)], null);
});

cljs.core.async.t_cljs$core$async16233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16233";

cljs.core.async.t_cljs$core$async16233.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16233");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16233.
 */
cljs.core.async.__GT_t_cljs$core$async16233 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16233(f__$1,ch__$1,meta16234){
return (new cljs.core.async.t_cljs$core$async16233(f__$1,ch__$1,meta16234));
});

}

return (new cljs.core.async.t_cljs$core$async16233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16239 = (function (f,ch,meta16240){
this.f = f;
this.ch = ch;
this.meta16240 = meta16240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16241,meta16240__$1){
var self__ = this;
var _16241__$1 = this;
return (new cljs.core.async.t_cljs$core$async16239(self__.f,self__.ch,meta16240__$1));
});

cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16241){
var self__ = this;
var _16241__$1 = this;
return self__.meta16240;
});

cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16240","meta16240",1806626794,null)], null);
});

cljs.core.async.t_cljs$core$async16239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16239";

cljs.core.async.t_cljs$core$async16239.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16239");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16239.
 */
cljs.core.async.__GT_t_cljs$core$async16239 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16239(f__$1,ch__$1,meta16240){
return (new cljs.core.async.t_cljs$core$async16239(f__$1,ch__$1,meta16240));
});

}

return (new cljs.core.async.t_cljs$core$async16239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16242 = (function (p,ch,meta16243){
this.p = p;
this.ch = ch;
this.meta16243 = meta16243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16244,meta16243__$1){
var self__ = this;
var _16244__$1 = this;
return (new cljs.core.async.t_cljs$core$async16242(self__.p,self__.ch,meta16243__$1));
});

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16244){
var self__ = this;
var _16244__$1 = this;
return self__.meta16243;
});

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16243","meta16243",-487028473,null)], null);
});

cljs.core.async.t_cljs$core$async16242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16242";

cljs.core.async.t_cljs$core$async16242.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16242");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16242.
 */
cljs.core.async.__GT_t_cljs$core$async16242 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16242(p__$1,ch__$1,meta16243){
return (new cljs.core.async.t_cljs$core$async16242(p__$1,ch__$1,meta16243));
});

}

return (new cljs.core.async.t_cljs$core$async16242(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16246 = arguments.length;
switch (G__16246) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12885__auto___16286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___16286,out){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___16286,out){
return (function (state_16267){
var state_val_16268 = (state_16267[(1)]);
if((state_val_16268 === (7))){
var inst_16263 = (state_16267[(2)]);
var state_16267__$1 = state_16267;
var statearr_16269_16287 = state_16267__$1;
(statearr_16269_16287[(2)] = inst_16263);

(statearr_16269_16287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (1))){
var state_16267__$1 = state_16267;
var statearr_16270_16288 = state_16267__$1;
(statearr_16270_16288[(2)] = null);

(statearr_16270_16288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (4))){
var inst_16249 = (state_16267[(7)]);
var inst_16249__$1 = (state_16267[(2)]);
var inst_16250 = (inst_16249__$1 == null);
var state_16267__$1 = (function (){var statearr_16271 = state_16267;
(statearr_16271[(7)] = inst_16249__$1);

return statearr_16271;
})();
if(cljs.core.truth_(inst_16250)){
var statearr_16272_16289 = state_16267__$1;
(statearr_16272_16289[(1)] = (5));

} else {
var statearr_16273_16290 = state_16267__$1;
(statearr_16273_16290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (6))){
var inst_16249 = (state_16267[(7)]);
var inst_16254 = p.call(null,inst_16249);
var state_16267__$1 = state_16267;
if(cljs.core.truth_(inst_16254)){
var statearr_16274_16291 = state_16267__$1;
(statearr_16274_16291[(1)] = (8));

} else {
var statearr_16275_16292 = state_16267__$1;
(statearr_16275_16292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (3))){
var inst_16265 = (state_16267[(2)]);
var state_16267__$1 = state_16267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16267__$1,inst_16265);
} else {
if((state_val_16268 === (2))){
var state_16267__$1 = state_16267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16267__$1,(4),ch);
} else {
if((state_val_16268 === (11))){
var inst_16257 = (state_16267[(2)]);
var state_16267__$1 = state_16267;
var statearr_16276_16293 = state_16267__$1;
(statearr_16276_16293[(2)] = inst_16257);

(statearr_16276_16293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (9))){
var state_16267__$1 = state_16267;
var statearr_16277_16294 = state_16267__$1;
(statearr_16277_16294[(2)] = null);

(statearr_16277_16294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (5))){
var inst_16252 = cljs.core.async.close_BANG_.call(null,out);
var state_16267__$1 = state_16267;
var statearr_16278_16295 = state_16267__$1;
(statearr_16278_16295[(2)] = inst_16252);

(statearr_16278_16295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (10))){
var inst_16260 = (state_16267[(2)]);
var state_16267__$1 = (function (){var statearr_16279 = state_16267;
(statearr_16279[(8)] = inst_16260);

return statearr_16279;
})();
var statearr_16280_16296 = state_16267__$1;
(statearr_16280_16296[(2)] = null);

(statearr_16280_16296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16268 === (8))){
var inst_16249 = (state_16267[(7)]);
var state_16267__$1 = state_16267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16267__$1,(11),out,inst_16249);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___16286,out))
;
return ((function (switch__12726__auto__,c__12885__auto___16286,out){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_16281 = [null,null,null,null,null,null,null,null,null];
(statearr_16281[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_16281[(1)] = (1));

return statearr_16281;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_16267){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16282){if((e16282 instanceof Object)){
var ex__12730__auto__ = e16282;
var statearr_16283_16297 = state_16267;
(statearr_16283_16297[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16298 = state_16267;
state_16267 = G__16298;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_16267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_16267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___16286,out))
})();
var state__12887__auto__ = (function (){var statearr_16284 = f__12886__auto__.call(null);
(statearr_16284[(6)] = c__12885__auto___16286);

return statearr_16284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___16286,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16300 = arguments.length;
switch (G__16300) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12885__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto__){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto__){
return (function (state_16363){
var state_val_16364 = (state_16363[(1)]);
if((state_val_16364 === (7))){
var inst_16359 = (state_16363[(2)]);
var state_16363__$1 = state_16363;
var statearr_16365_16403 = state_16363__$1;
(statearr_16365_16403[(2)] = inst_16359);

(statearr_16365_16403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (20))){
var inst_16329 = (state_16363[(7)]);
var inst_16340 = (state_16363[(2)]);
var inst_16341 = cljs.core.next.call(null,inst_16329);
var inst_16315 = inst_16341;
var inst_16316 = null;
var inst_16317 = (0);
var inst_16318 = (0);
var state_16363__$1 = (function (){var statearr_16366 = state_16363;
(statearr_16366[(8)] = inst_16315);

(statearr_16366[(9)] = inst_16317);

(statearr_16366[(10)] = inst_16340);

(statearr_16366[(11)] = inst_16316);

(statearr_16366[(12)] = inst_16318);

return statearr_16366;
})();
var statearr_16367_16404 = state_16363__$1;
(statearr_16367_16404[(2)] = null);

(statearr_16367_16404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (1))){
var state_16363__$1 = state_16363;
var statearr_16368_16405 = state_16363__$1;
(statearr_16368_16405[(2)] = null);

(statearr_16368_16405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (4))){
var inst_16304 = (state_16363[(13)]);
var inst_16304__$1 = (state_16363[(2)]);
var inst_16305 = (inst_16304__$1 == null);
var state_16363__$1 = (function (){var statearr_16369 = state_16363;
(statearr_16369[(13)] = inst_16304__$1);

return statearr_16369;
})();
if(cljs.core.truth_(inst_16305)){
var statearr_16370_16406 = state_16363__$1;
(statearr_16370_16406[(1)] = (5));

} else {
var statearr_16371_16407 = state_16363__$1;
(statearr_16371_16407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (15))){
var state_16363__$1 = state_16363;
var statearr_16375_16408 = state_16363__$1;
(statearr_16375_16408[(2)] = null);

(statearr_16375_16408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (21))){
var state_16363__$1 = state_16363;
var statearr_16376_16409 = state_16363__$1;
(statearr_16376_16409[(2)] = null);

(statearr_16376_16409[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (13))){
var inst_16315 = (state_16363[(8)]);
var inst_16317 = (state_16363[(9)]);
var inst_16316 = (state_16363[(11)]);
var inst_16318 = (state_16363[(12)]);
var inst_16325 = (state_16363[(2)]);
var inst_16326 = (inst_16318 + (1));
var tmp16372 = inst_16315;
var tmp16373 = inst_16317;
var tmp16374 = inst_16316;
var inst_16315__$1 = tmp16372;
var inst_16316__$1 = tmp16374;
var inst_16317__$1 = tmp16373;
var inst_16318__$1 = inst_16326;
var state_16363__$1 = (function (){var statearr_16377 = state_16363;
(statearr_16377[(8)] = inst_16315__$1);

(statearr_16377[(9)] = inst_16317__$1);

(statearr_16377[(11)] = inst_16316__$1);

(statearr_16377[(14)] = inst_16325);

(statearr_16377[(12)] = inst_16318__$1);

return statearr_16377;
})();
var statearr_16378_16410 = state_16363__$1;
(statearr_16378_16410[(2)] = null);

(statearr_16378_16410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (22))){
var state_16363__$1 = state_16363;
var statearr_16379_16411 = state_16363__$1;
(statearr_16379_16411[(2)] = null);

(statearr_16379_16411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (6))){
var inst_16304 = (state_16363[(13)]);
var inst_16313 = f.call(null,inst_16304);
var inst_16314 = cljs.core.seq.call(null,inst_16313);
var inst_16315 = inst_16314;
var inst_16316 = null;
var inst_16317 = (0);
var inst_16318 = (0);
var state_16363__$1 = (function (){var statearr_16380 = state_16363;
(statearr_16380[(8)] = inst_16315);

(statearr_16380[(9)] = inst_16317);

(statearr_16380[(11)] = inst_16316);

(statearr_16380[(12)] = inst_16318);

return statearr_16380;
})();
var statearr_16381_16412 = state_16363__$1;
(statearr_16381_16412[(2)] = null);

(statearr_16381_16412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (17))){
var inst_16329 = (state_16363[(7)]);
var inst_16333 = cljs.core.chunk_first.call(null,inst_16329);
var inst_16334 = cljs.core.chunk_rest.call(null,inst_16329);
var inst_16335 = cljs.core.count.call(null,inst_16333);
var inst_16315 = inst_16334;
var inst_16316 = inst_16333;
var inst_16317 = inst_16335;
var inst_16318 = (0);
var state_16363__$1 = (function (){var statearr_16382 = state_16363;
(statearr_16382[(8)] = inst_16315);

(statearr_16382[(9)] = inst_16317);

(statearr_16382[(11)] = inst_16316);

(statearr_16382[(12)] = inst_16318);

return statearr_16382;
})();
var statearr_16383_16413 = state_16363__$1;
(statearr_16383_16413[(2)] = null);

(statearr_16383_16413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (3))){
var inst_16361 = (state_16363[(2)]);
var state_16363__$1 = state_16363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16363__$1,inst_16361);
} else {
if((state_val_16364 === (12))){
var inst_16349 = (state_16363[(2)]);
var state_16363__$1 = state_16363;
var statearr_16384_16414 = state_16363__$1;
(statearr_16384_16414[(2)] = inst_16349);

(statearr_16384_16414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (2))){
var state_16363__$1 = state_16363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16363__$1,(4),in$);
} else {
if((state_val_16364 === (23))){
var inst_16357 = (state_16363[(2)]);
var state_16363__$1 = state_16363;
var statearr_16385_16415 = state_16363__$1;
(statearr_16385_16415[(2)] = inst_16357);

(statearr_16385_16415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (19))){
var inst_16344 = (state_16363[(2)]);
var state_16363__$1 = state_16363;
var statearr_16386_16416 = state_16363__$1;
(statearr_16386_16416[(2)] = inst_16344);

(statearr_16386_16416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (11))){
var inst_16315 = (state_16363[(8)]);
var inst_16329 = (state_16363[(7)]);
var inst_16329__$1 = cljs.core.seq.call(null,inst_16315);
var state_16363__$1 = (function (){var statearr_16387 = state_16363;
(statearr_16387[(7)] = inst_16329__$1);

return statearr_16387;
})();
if(inst_16329__$1){
var statearr_16388_16417 = state_16363__$1;
(statearr_16388_16417[(1)] = (14));

} else {
var statearr_16389_16418 = state_16363__$1;
(statearr_16389_16418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (9))){
var inst_16351 = (state_16363[(2)]);
var inst_16352 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16363__$1 = (function (){var statearr_16390 = state_16363;
(statearr_16390[(15)] = inst_16351);

return statearr_16390;
})();
if(cljs.core.truth_(inst_16352)){
var statearr_16391_16419 = state_16363__$1;
(statearr_16391_16419[(1)] = (21));

} else {
var statearr_16392_16420 = state_16363__$1;
(statearr_16392_16420[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (5))){
var inst_16307 = cljs.core.async.close_BANG_.call(null,out);
var state_16363__$1 = state_16363;
var statearr_16393_16421 = state_16363__$1;
(statearr_16393_16421[(2)] = inst_16307);

(statearr_16393_16421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (14))){
var inst_16329 = (state_16363[(7)]);
var inst_16331 = cljs.core.chunked_seq_QMARK_.call(null,inst_16329);
var state_16363__$1 = state_16363;
if(inst_16331){
var statearr_16394_16422 = state_16363__$1;
(statearr_16394_16422[(1)] = (17));

} else {
var statearr_16395_16423 = state_16363__$1;
(statearr_16395_16423[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (16))){
var inst_16347 = (state_16363[(2)]);
var state_16363__$1 = state_16363;
var statearr_16396_16424 = state_16363__$1;
(statearr_16396_16424[(2)] = inst_16347);

(statearr_16396_16424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16364 === (10))){
var inst_16316 = (state_16363[(11)]);
var inst_16318 = (state_16363[(12)]);
var inst_16323 = cljs.core._nth.call(null,inst_16316,inst_16318);
var state_16363__$1 = state_16363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16363__$1,(13),out,inst_16323);
} else {
if((state_val_16364 === (18))){
var inst_16329 = (state_16363[(7)]);
var inst_16338 = cljs.core.first.call(null,inst_16329);
var state_16363__$1 = state_16363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16363__$1,(20),out,inst_16338);
} else {
if((state_val_16364 === (8))){
var inst_16317 = (state_16363[(9)]);
var inst_16318 = (state_16363[(12)]);
var inst_16320 = (inst_16318 < inst_16317);
var inst_16321 = inst_16320;
var state_16363__$1 = state_16363;
if(cljs.core.truth_(inst_16321)){
var statearr_16397_16425 = state_16363__$1;
(statearr_16397_16425[(1)] = (10));

} else {
var statearr_16398_16426 = state_16363__$1;
(statearr_16398_16426[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto__))
;
return ((function (switch__12726__auto__,c__12885__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12727__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12727__auto____0 = (function (){
var statearr_16399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16399[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12727__auto__);

(statearr_16399[(1)] = (1));

return statearr_16399;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12727__auto____1 = (function (state_16363){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16400){if((e16400 instanceof Object)){
var ex__12730__auto__ = e16400;
var statearr_16401_16427 = state_16363;
(statearr_16401_16427[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16428 = state_16363;
state_16363 = G__16428;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12727__auto__ = function(state_16363){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12727__auto____1.call(this,state_16363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12727__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12727__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto__))
})();
var state__12887__auto__ = (function (){var statearr_16402 = f__12886__auto__.call(null);
(statearr_16402[(6)] = c__12885__auto__);

return statearr_16402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto__))
);

return c__12885__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16430 = arguments.length;
switch (G__16430) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16433 = arguments.length;
switch (G__16433) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16436 = arguments.length;
switch (G__16436) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12885__auto___16483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___16483,out){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___16483,out){
return (function (state_16460){
var state_val_16461 = (state_16460[(1)]);
if((state_val_16461 === (7))){
var inst_16455 = (state_16460[(2)]);
var state_16460__$1 = state_16460;
var statearr_16462_16484 = state_16460__$1;
(statearr_16462_16484[(2)] = inst_16455);

(statearr_16462_16484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16461 === (1))){
var inst_16437 = null;
var state_16460__$1 = (function (){var statearr_16463 = state_16460;
(statearr_16463[(7)] = inst_16437);

return statearr_16463;
})();
var statearr_16464_16485 = state_16460__$1;
(statearr_16464_16485[(2)] = null);

(statearr_16464_16485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16461 === (4))){
var inst_16440 = (state_16460[(8)]);
var inst_16440__$1 = (state_16460[(2)]);
var inst_16441 = (inst_16440__$1 == null);
var inst_16442 = cljs.core.not.call(null,inst_16441);
var state_16460__$1 = (function (){var statearr_16465 = state_16460;
(statearr_16465[(8)] = inst_16440__$1);

return statearr_16465;
})();
if(inst_16442){
var statearr_16466_16486 = state_16460__$1;
(statearr_16466_16486[(1)] = (5));

} else {
var statearr_16467_16487 = state_16460__$1;
(statearr_16467_16487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16461 === (6))){
var state_16460__$1 = state_16460;
var statearr_16468_16488 = state_16460__$1;
(statearr_16468_16488[(2)] = null);

(statearr_16468_16488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16461 === (3))){
var inst_16457 = (state_16460[(2)]);
var inst_16458 = cljs.core.async.close_BANG_.call(null,out);
var state_16460__$1 = (function (){var statearr_16469 = state_16460;
(statearr_16469[(9)] = inst_16457);

return statearr_16469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16460__$1,inst_16458);
} else {
if((state_val_16461 === (2))){
var state_16460__$1 = state_16460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16460__$1,(4),ch);
} else {
if((state_val_16461 === (11))){
var inst_16440 = (state_16460[(8)]);
var inst_16449 = (state_16460[(2)]);
var inst_16437 = inst_16440;
var state_16460__$1 = (function (){var statearr_16470 = state_16460;
(statearr_16470[(7)] = inst_16437);

(statearr_16470[(10)] = inst_16449);

return statearr_16470;
})();
var statearr_16471_16489 = state_16460__$1;
(statearr_16471_16489[(2)] = null);

(statearr_16471_16489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16461 === (9))){
var inst_16440 = (state_16460[(8)]);
var state_16460__$1 = state_16460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16460__$1,(11),out,inst_16440);
} else {
if((state_val_16461 === (5))){
var inst_16437 = (state_16460[(7)]);
var inst_16440 = (state_16460[(8)]);
var inst_16444 = cljs.core._EQ_.call(null,inst_16440,inst_16437);
var state_16460__$1 = state_16460;
if(inst_16444){
var statearr_16473_16490 = state_16460__$1;
(statearr_16473_16490[(1)] = (8));

} else {
var statearr_16474_16491 = state_16460__$1;
(statearr_16474_16491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16461 === (10))){
var inst_16452 = (state_16460[(2)]);
var state_16460__$1 = state_16460;
var statearr_16475_16492 = state_16460__$1;
(statearr_16475_16492[(2)] = inst_16452);

(statearr_16475_16492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16461 === (8))){
var inst_16437 = (state_16460[(7)]);
var tmp16472 = inst_16437;
var inst_16437__$1 = tmp16472;
var state_16460__$1 = (function (){var statearr_16476 = state_16460;
(statearr_16476[(7)] = inst_16437__$1);

return statearr_16476;
})();
var statearr_16477_16493 = state_16460__$1;
(statearr_16477_16493[(2)] = null);

(statearr_16477_16493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___16483,out))
;
return ((function (switch__12726__auto__,c__12885__auto___16483,out){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_16478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16478[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_16478[(1)] = (1));

return statearr_16478;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_16460){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16479){if((e16479 instanceof Object)){
var ex__12730__auto__ = e16479;
var statearr_16480_16494 = state_16460;
(statearr_16480_16494[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16495 = state_16460;
state_16460 = G__16495;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_16460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_16460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___16483,out))
})();
var state__12887__auto__ = (function (){var statearr_16481 = f__12886__auto__.call(null);
(statearr_16481[(6)] = c__12885__auto___16483);

return statearr_16481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___16483,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16497 = arguments.length;
switch (G__16497) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12885__auto___16563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___16563,out){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___16563,out){
return (function (state_16535){
var state_val_16536 = (state_16535[(1)]);
if((state_val_16536 === (7))){
var inst_16531 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16537_16564 = state_16535__$1;
(statearr_16537_16564[(2)] = inst_16531);

(statearr_16537_16564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (1))){
var inst_16498 = (new Array(n));
var inst_16499 = inst_16498;
var inst_16500 = (0);
var state_16535__$1 = (function (){var statearr_16538 = state_16535;
(statearr_16538[(7)] = inst_16499);

(statearr_16538[(8)] = inst_16500);

return statearr_16538;
})();
var statearr_16539_16565 = state_16535__$1;
(statearr_16539_16565[(2)] = null);

(statearr_16539_16565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (4))){
var inst_16503 = (state_16535[(9)]);
var inst_16503__$1 = (state_16535[(2)]);
var inst_16504 = (inst_16503__$1 == null);
var inst_16505 = cljs.core.not.call(null,inst_16504);
var state_16535__$1 = (function (){var statearr_16540 = state_16535;
(statearr_16540[(9)] = inst_16503__$1);

return statearr_16540;
})();
if(inst_16505){
var statearr_16541_16566 = state_16535__$1;
(statearr_16541_16566[(1)] = (5));

} else {
var statearr_16542_16567 = state_16535__$1;
(statearr_16542_16567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (15))){
var inst_16525 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16543_16568 = state_16535__$1;
(statearr_16543_16568[(2)] = inst_16525);

(statearr_16543_16568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (13))){
var state_16535__$1 = state_16535;
var statearr_16544_16569 = state_16535__$1;
(statearr_16544_16569[(2)] = null);

(statearr_16544_16569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (6))){
var inst_16500 = (state_16535[(8)]);
var inst_16521 = (inst_16500 > (0));
var state_16535__$1 = state_16535;
if(cljs.core.truth_(inst_16521)){
var statearr_16545_16570 = state_16535__$1;
(statearr_16545_16570[(1)] = (12));

} else {
var statearr_16546_16571 = state_16535__$1;
(statearr_16546_16571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (3))){
var inst_16533 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16535__$1,inst_16533);
} else {
if((state_val_16536 === (12))){
var inst_16499 = (state_16535[(7)]);
var inst_16523 = cljs.core.vec.call(null,inst_16499);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16535__$1,(15),out,inst_16523);
} else {
if((state_val_16536 === (2))){
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16535__$1,(4),ch);
} else {
if((state_val_16536 === (11))){
var inst_16515 = (state_16535[(2)]);
var inst_16516 = (new Array(n));
var inst_16499 = inst_16516;
var inst_16500 = (0);
var state_16535__$1 = (function (){var statearr_16547 = state_16535;
(statearr_16547[(10)] = inst_16515);

(statearr_16547[(7)] = inst_16499);

(statearr_16547[(8)] = inst_16500);

return statearr_16547;
})();
var statearr_16548_16572 = state_16535__$1;
(statearr_16548_16572[(2)] = null);

(statearr_16548_16572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (9))){
var inst_16499 = (state_16535[(7)]);
var inst_16513 = cljs.core.vec.call(null,inst_16499);
var state_16535__$1 = state_16535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16535__$1,(11),out,inst_16513);
} else {
if((state_val_16536 === (5))){
var inst_16499 = (state_16535[(7)]);
var inst_16500 = (state_16535[(8)]);
var inst_16503 = (state_16535[(9)]);
var inst_16508 = (state_16535[(11)]);
var inst_16507 = (inst_16499[inst_16500] = inst_16503);
var inst_16508__$1 = (inst_16500 + (1));
var inst_16509 = (inst_16508__$1 < n);
var state_16535__$1 = (function (){var statearr_16549 = state_16535;
(statearr_16549[(12)] = inst_16507);

(statearr_16549[(11)] = inst_16508__$1);

return statearr_16549;
})();
if(cljs.core.truth_(inst_16509)){
var statearr_16550_16573 = state_16535__$1;
(statearr_16550_16573[(1)] = (8));

} else {
var statearr_16551_16574 = state_16535__$1;
(statearr_16551_16574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (14))){
var inst_16528 = (state_16535[(2)]);
var inst_16529 = cljs.core.async.close_BANG_.call(null,out);
var state_16535__$1 = (function (){var statearr_16553 = state_16535;
(statearr_16553[(13)] = inst_16528);

return statearr_16553;
})();
var statearr_16554_16575 = state_16535__$1;
(statearr_16554_16575[(2)] = inst_16529);

(statearr_16554_16575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (10))){
var inst_16519 = (state_16535[(2)]);
var state_16535__$1 = state_16535;
var statearr_16555_16576 = state_16535__$1;
(statearr_16555_16576[(2)] = inst_16519);

(statearr_16555_16576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16536 === (8))){
var inst_16499 = (state_16535[(7)]);
var inst_16508 = (state_16535[(11)]);
var tmp16552 = inst_16499;
var inst_16499__$1 = tmp16552;
var inst_16500 = inst_16508;
var state_16535__$1 = (function (){var statearr_16556 = state_16535;
(statearr_16556[(7)] = inst_16499__$1);

(statearr_16556[(8)] = inst_16500);

return statearr_16556;
})();
var statearr_16557_16577 = state_16535__$1;
(statearr_16557_16577[(2)] = null);

(statearr_16557_16577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___16563,out))
;
return ((function (switch__12726__auto__,c__12885__auto___16563,out){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_16558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16558[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_16558[(1)] = (1));

return statearr_16558;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_16535){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16559){if((e16559 instanceof Object)){
var ex__12730__auto__ = e16559;
var statearr_16560_16578 = state_16535;
(statearr_16560_16578[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16579 = state_16535;
state_16535 = G__16579;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_16535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_16535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___16563,out))
})();
var state__12887__auto__ = (function (){var statearr_16561 = f__12886__auto__.call(null);
(statearr_16561[(6)] = c__12885__auto___16563);

return statearr_16561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___16563,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16581 = arguments.length;
switch (G__16581) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12885__auto___16651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12885__auto___16651,out){
return (function (){
var f__12886__auto__ = (function (){var switch__12726__auto__ = ((function (c__12885__auto___16651,out){
return (function (state_16623){
var state_val_16624 = (state_16623[(1)]);
if((state_val_16624 === (7))){
var inst_16619 = (state_16623[(2)]);
var state_16623__$1 = state_16623;
var statearr_16625_16652 = state_16623__$1;
(statearr_16625_16652[(2)] = inst_16619);

(statearr_16625_16652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (1))){
var inst_16582 = [];
var inst_16583 = inst_16582;
var inst_16584 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16623__$1 = (function (){var statearr_16626 = state_16623;
(statearr_16626[(7)] = inst_16583);

(statearr_16626[(8)] = inst_16584);

return statearr_16626;
})();
var statearr_16627_16653 = state_16623__$1;
(statearr_16627_16653[(2)] = null);

(statearr_16627_16653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (4))){
var inst_16587 = (state_16623[(9)]);
var inst_16587__$1 = (state_16623[(2)]);
var inst_16588 = (inst_16587__$1 == null);
var inst_16589 = cljs.core.not.call(null,inst_16588);
var state_16623__$1 = (function (){var statearr_16628 = state_16623;
(statearr_16628[(9)] = inst_16587__$1);

return statearr_16628;
})();
if(inst_16589){
var statearr_16629_16654 = state_16623__$1;
(statearr_16629_16654[(1)] = (5));

} else {
var statearr_16630_16655 = state_16623__$1;
(statearr_16630_16655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (15))){
var inst_16613 = (state_16623[(2)]);
var state_16623__$1 = state_16623;
var statearr_16631_16656 = state_16623__$1;
(statearr_16631_16656[(2)] = inst_16613);

(statearr_16631_16656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (13))){
var state_16623__$1 = state_16623;
var statearr_16632_16657 = state_16623__$1;
(statearr_16632_16657[(2)] = null);

(statearr_16632_16657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (6))){
var inst_16583 = (state_16623[(7)]);
var inst_16608 = inst_16583.length;
var inst_16609 = (inst_16608 > (0));
var state_16623__$1 = state_16623;
if(cljs.core.truth_(inst_16609)){
var statearr_16633_16658 = state_16623__$1;
(statearr_16633_16658[(1)] = (12));

} else {
var statearr_16634_16659 = state_16623__$1;
(statearr_16634_16659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (3))){
var inst_16621 = (state_16623[(2)]);
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16623__$1,inst_16621);
} else {
if((state_val_16624 === (12))){
var inst_16583 = (state_16623[(7)]);
var inst_16611 = cljs.core.vec.call(null,inst_16583);
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16623__$1,(15),out,inst_16611);
} else {
if((state_val_16624 === (2))){
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16623__$1,(4),ch);
} else {
if((state_val_16624 === (11))){
var inst_16587 = (state_16623[(9)]);
var inst_16591 = (state_16623[(10)]);
var inst_16601 = (state_16623[(2)]);
var inst_16602 = [];
var inst_16603 = inst_16602.push(inst_16587);
var inst_16583 = inst_16602;
var inst_16584 = inst_16591;
var state_16623__$1 = (function (){var statearr_16635 = state_16623;
(statearr_16635[(7)] = inst_16583);

(statearr_16635[(8)] = inst_16584);

(statearr_16635[(11)] = inst_16603);

(statearr_16635[(12)] = inst_16601);

return statearr_16635;
})();
var statearr_16636_16660 = state_16623__$1;
(statearr_16636_16660[(2)] = null);

(statearr_16636_16660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (9))){
var inst_16583 = (state_16623[(7)]);
var inst_16599 = cljs.core.vec.call(null,inst_16583);
var state_16623__$1 = state_16623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16623__$1,(11),out,inst_16599);
} else {
if((state_val_16624 === (5))){
var inst_16584 = (state_16623[(8)]);
var inst_16587 = (state_16623[(9)]);
var inst_16591 = (state_16623[(10)]);
var inst_16591__$1 = f.call(null,inst_16587);
var inst_16592 = cljs.core._EQ_.call(null,inst_16591__$1,inst_16584);
var inst_16593 = cljs.core.keyword_identical_QMARK_.call(null,inst_16584,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16594 = ((inst_16592) || (inst_16593));
var state_16623__$1 = (function (){var statearr_16637 = state_16623;
(statearr_16637[(10)] = inst_16591__$1);

return statearr_16637;
})();
if(cljs.core.truth_(inst_16594)){
var statearr_16638_16661 = state_16623__$1;
(statearr_16638_16661[(1)] = (8));

} else {
var statearr_16639_16662 = state_16623__$1;
(statearr_16639_16662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (14))){
var inst_16616 = (state_16623[(2)]);
var inst_16617 = cljs.core.async.close_BANG_.call(null,out);
var state_16623__$1 = (function (){var statearr_16641 = state_16623;
(statearr_16641[(13)] = inst_16616);

return statearr_16641;
})();
var statearr_16642_16663 = state_16623__$1;
(statearr_16642_16663[(2)] = inst_16617);

(statearr_16642_16663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (10))){
var inst_16606 = (state_16623[(2)]);
var state_16623__$1 = state_16623;
var statearr_16643_16664 = state_16623__$1;
(statearr_16643_16664[(2)] = inst_16606);

(statearr_16643_16664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16624 === (8))){
var inst_16583 = (state_16623[(7)]);
var inst_16587 = (state_16623[(9)]);
var inst_16591 = (state_16623[(10)]);
var inst_16596 = inst_16583.push(inst_16587);
var tmp16640 = inst_16583;
var inst_16583__$1 = tmp16640;
var inst_16584 = inst_16591;
var state_16623__$1 = (function (){var statearr_16644 = state_16623;
(statearr_16644[(7)] = inst_16583__$1);

(statearr_16644[(8)] = inst_16584);

(statearr_16644[(14)] = inst_16596);

return statearr_16644;
})();
var statearr_16645_16665 = state_16623__$1;
(statearr_16645_16665[(2)] = null);

(statearr_16645_16665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12885__auto___16651,out))
;
return ((function (switch__12726__auto__,c__12885__auto___16651,out){
return (function() {
var cljs$core$async$state_machine__12727__auto__ = null;
var cljs$core$async$state_machine__12727__auto____0 = (function (){
var statearr_16646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16646[(0)] = cljs$core$async$state_machine__12727__auto__);

(statearr_16646[(1)] = (1));

return statearr_16646;
});
var cljs$core$async$state_machine__12727__auto____1 = (function (state_16623){
while(true){
var ret_value__12728__auto__ = (function (){try{while(true){
var result__12729__auto__ = switch__12726__auto__.call(null,state_16623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12729__auto__;
}
break;
}
}catch (e16647){if((e16647 instanceof Object)){
var ex__12730__auto__ = e16647;
var statearr_16648_16666 = state_16623;
(statearr_16648_16666[(5)] = ex__12730__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16667 = state_16623;
state_16623 = G__16667;
continue;
} else {
return ret_value__12728__auto__;
}
break;
}
});
cljs$core$async$state_machine__12727__auto__ = function(state_16623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12727__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12727__auto____1.call(this,state_16623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12727__auto____0;
cljs$core$async$state_machine__12727__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12727__auto____1;
return cljs$core$async$state_machine__12727__auto__;
})()
;})(switch__12726__auto__,c__12885__auto___16651,out))
})();
var state__12887__auto__ = (function (){var statearr_16649 = f__12886__auto__.call(null);
(statearr_16649[(6)] = c__12885__auto___16651);

return statearr_16649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12887__auto__);
});})(c__12885__auto___16651,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
