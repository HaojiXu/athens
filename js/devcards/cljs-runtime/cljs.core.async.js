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
var G__43513 = arguments.length;
switch (G__43513) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43514 = (function (f,blockable,meta43515){
this.f = f;
this.blockable = blockable;
this.meta43515 = meta43515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43516,meta43515__$1){
var self__ = this;
var _43516__$1 = this;
return (new cljs.core.async.t_cljs$core$async43514(self__.f,self__.blockable,meta43515__$1));
}));

(cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43516){
var self__ = this;
var _43516__$1 = this;
return self__.meta43515;
}));

(cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43515","meta43515",-1019453316,null)], null);
}));

(cljs.core.async.t_cljs$core$async43514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43514");

(cljs.core.async.t_cljs$core$async43514.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43514.
 */
cljs.core.async.__GT_t_cljs$core$async43514 = (function cljs$core$async$__GT_t_cljs$core$async43514(f__$1,blockable__$1,meta43515){
return (new cljs.core.async.t_cljs$core$async43514(f__$1,blockable__$1,meta43515));
});

}

return (new cljs.core.async.t_cljs$core$async43514(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__43521 = arguments.length;
switch (G__43521) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43523 = arguments.length;
switch (G__43523) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__43525 = arguments.length;
switch (G__43525) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44977 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44977) : fn1.call(null,val_44977));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44977) : fn1.call(null,val_44977));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__43527 = arguments.length;
switch (G__43527) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___44988 = n;
var x_44989 = (0);
while(true){
if((x_44989 < n__4666__auto___44988)){
(a[x_44989] = x_44989);

var G__44990 = (x_44989 + (1));
x_44989 = G__44990;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43528 = (function (flag,meta43529){
this.flag = flag;
this.meta43529 = meta43529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43530,meta43529__$1){
var self__ = this;
var _43530__$1 = this;
return (new cljs.core.async.t_cljs$core$async43528(self__.flag,meta43529__$1));
}));

(cljs.core.async.t_cljs$core$async43528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43530){
var self__ = this;
var _43530__$1 = this;
return self__.meta43529;
}));

(cljs.core.async.t_cljs$core$async43528.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43529","meta43529",-711660278,null)], null);
}));

(cljs.core.async.t_cljs$core$async43528.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43528");

(cljs.core.async.t_cljs$core$async43528.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43528");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43528.
 */
cljs.core.async.__GT_t_cljs$core$async43528 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43528(flag__$1,meta43529){
return (new cljs.core.async.t_cljs$core$async43528(flag__$1,meta43529));
});

}

return (new cljs.core.async.t_cljs$core$async43528(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43531 = (function (flag,cb,meta43532){
this.flag = flag;
this.cb = cb;
this.meta43532 = meta43532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43533,meta43532__$1){
var self__ = this;
var _43533__$1 = this;
return (new cljs.core.async.t_cljs$core$async43531(self__.flag,self__.cb,meta43532__$1));
}));

(cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43533){
var self__ = this;
var _43533__$1 = this;
return self__.meta43532;
}));

(cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43532","meta43532",1979555739,null)], null);
}));

(cljs.core.async.t_cljs$core$async43531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43531");

(cljs.core.async.t_cljs$core$async43531.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43531.
 */
cljs.core.async.__GT_t_cljs$core$async43531 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43531(flag__$1,cb__$1,meta43532){
return (new cljs.core.async.t_cljs$core$async43531(flag__$1,cb__$1,meta43532));
});

}

return (new cljs.core.async.t_cljs$core$async43531(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43538_SHARP_){
var G__43542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43538_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43542) : fret.call(null,G__43542));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43539_SHARP_){
var G__43543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43539_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43543) : fret.call(null,G__43543));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44995 = (i + (1));
i = G__44995;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4795__auto__ = [];
var len__4789__auto___44996 = arguments.length;
var i__4790__auto___44997 = (0);
while(true){
if((i__4790__auto___44997 < len__4789__auto___44996)){
args__4795__auto__.push((arguments[i__4790__auto___44997]));

var G__44998 = (i__4790__auto___44997 + (1));
i__4790__auto___44997 = G__44998;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43548){
var map__43549 = p__43548;
var map__43549__$1 = (((((!((map__43549 == null))))?(((((map__43549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43549):map__43549);
var opts = map__43549__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43546){
var G__43547 = cljs.core.first(seq43546);
var seq43546__$1 = cljs.core.next(seq43546);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43547,seq43546__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__43555 = arguments.length;
switch (G__43555) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43454__auto___45013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43580){
var state_val_43581 = (state_43580[(1)]);
if((state_val_43581 === (7))){
var inst_43576 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43582_45014 = state_43580__$1;
(statearr_43582_45014[(2)] = inst_43576);

(statearr_43582_45014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (1))){
var state_43580__$1 = state_43580;
var statearr_43583_45015 = state_43580__$1;
(statearr_43583_45015[(2)] = null);

(statearr_43583_45015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (4))){
var inst_43559 = (state_43580[(7)]);
var inst_43559__$1 = (state_43580[(2)]);
var inst_43560 = (inst_43559__$1 == null);
var state_43580__$1 = (function (){var statearr_43584 = state_43580;
(statearr_43584[(7)] = inst_43559__$1);

return statearr_43584;
})();
if(cljs.core.truth_(inst_43560)){
var statearr_43585_45016 = state_43580__$1;
(statearr_43585_45016[(1)] = (5));

} else {
var statearr_43586_45018 = state_43580__$1;
(statearr_43586_45018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (13))){
var state_43580__$1 = state_43580;
var statearr_43587_45021 = state_43580__$1;
(statearr_43587_45021[(2)] = null);

(statearr_43587_45021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (6))){
var inst_43559 = (state_43580[(7)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43580__$1,(11),to,inst_43559);
} else {
if((state_val_43581 === (3))){
var inst_43578 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43580__$1,inst_43578);
} else {
if((state_val_43581 === (12))){
var state_43580__$1 = state_43580;
var statearr_43588_45022 = state_43580__$1;
(statearr_43588_45022[(2)] = null);

(statearr_43588_45022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (2))){
var state_43580__$1 = state_43580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43580__$1,(4),from);
} else {
if((state_val_43581 === (11))){
var inst_43569 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
if(cljs.core.truth_(inst_43569)){
var statearr_43589_45023 = state_43580__$1;
(statearr_43589_45023[(1)] = (12));

} else {
var statearr_43590_45024 = state_43580__$1;
(statearr_43590_45024[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (9))){
var state_43580__$1 = state_43580;
var statearr_43591_45025 = state_43580__$1;
(statearr_43591_45025[(2)] = null);

(statearr_43591_45025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (5))){
var state_43580__$1 = state_43580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43592_45026 = state_43580__$1;
(statearr_43592_45026[(1)] = (8));

} else {
var statearr_43593_45027 = state_43580__$1;
(statearr_43593_45027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (14))){
var inst_43574 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43594_45028 = state_43580__$1;
(statearr_43594_45028[(2)] = inst_43574);

(statearr_43594_45028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (10))){
var inst_43566 = (state_43580[(2)]);
var state_43580__$1 = state_43580;
var statearr_43595_45029 = state_43580__$1;
(statearr_43595_45029[(2)] = inst_43566);

(statearr_43595_45029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43581 === (8))){
var inst_43563 = cljs.core.async.close_BANG_(to);
var state_43580__$1 = state_43580;
var statearr_43596_45030 = state_43580__$1;
(statearr_43596_45030[(2)] = inst_43563);

(statearr_43596_45030[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_43597 = [null,null,null,null,null,null,null,null];
(statearr_43597[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_43597[(1)] = (1));

return statearr_43597;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_43580){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43580);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43598){if((e43598 instanceof Object)){
var ex__43391__auto__ = e43598;
var statearr_43599_45031 = state_43580;
(statearr_43599_45031[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45032 = state_43580;
state_43580 = G__45032;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_43580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_43580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43600 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43600[(6)] = c__43454__auto___45013);

return statearr_43600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43601){
var vec__43602 = p__43601;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43602,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43602,(1),null);
var job = vec__43602;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43454__auto___45033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43609){
var state_val_43610 = (state_43609[(1)]);
if((state_val_43610 === (1))){
var state_43609__$1 = state_43609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43609__$1,(2),res,v);
} else {
if((state_val_43610 === (2))){
var inst_43606 = (state_43609[(2)]);
var inst_43607 = cljs.core.async.close_BANG_(res);
var state_43609__$1 = (function (){var statearr_43611 = state_43609;
(statearr_43611[(7)] = inst_43606);

return statearr_43611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43609__$1,inst_43607);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0 = (function (){
var statearr_43612 = [null,null,null,null,null,null,null,null];
(statearr_43612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__);

(statearr_43612[(1)] = (1));

return statearr_43612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1 = (function (state_43609){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43609);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43613){if((e43613 instanceof Object)){
var ex__43391__auto__ = e43613;
var statearr_43614_45038 = state_43609;
(statearr_43614_45038[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45043 = state_43609;
state_43609 = G__45043;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = function(state_43609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1.call(this,state_43609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43615 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43615[(6)] = c__43454__auto___45033);

return statearr_43615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43616){
var vec__43617 = p__43616;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43617,(1),null);
var job = vec__43617;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___45048 = n;
var __45049 = (0);
while(true){
if((__45049 < n__4666__auto___45048)){
var G__43620_45050 = type;
var G__43620_45051__$1 = (((G__43620_45050 instanceof cljs.core.Keyword))?G__43620_45050.fqn:null);
switch (G__43620_45051__$1) {
case "compute":
var c__43454__auto___45053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45049,c__43454__auto___45053,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async){
return (function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = ((function (__45049,c__43454__auto___45053,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async){
return (function (state_43633){
var state_val_43634 = (state_43633[(1)]);
if((state_val_43634 === (1))){
var state_43633__$1 = state_43633;
var statearr_43635_45055 = state_43633__$1;
(statearr_43635_45055[(2)] = null);

(statearr_43635_45055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (2))){
var state_43633__$1 = state_43633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43633__$1,(4),jobs);
} else {
if((state_val_43634 === (3))){
var inst_43631 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43633__$1,inst_43631);
} else {
if((state_val_43634 === (4))){
var inst_43623 = (state_43633[(2)]);
var inst_43624 = process(inst_43623);
var state_43633__$1 = state_43633;
if(cljs.core.truth_(inst_43624)){
var statearr_43636_45057 = state_43633__$1;
(statearr_43636_45057[(1)] = (5));

} else {
var statearr_43637_45058 = state_43633__$1;
(statearr_43637_45058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (5))){
var state_43633__$1 = state_43633;
var statearr_43638_45059 = state_43633__$1;
(statearr_43638_45059[(2)] = null);

(statearr_43638_45059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (6))){
var state_43633__$1 = state_43633;
var statearr_43639_45061 = state_43633__$1;
(statearr_43639_45061[(2)] = null);

(statearr_43639_45061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43634 === (7))){
var inst_43629 = (state_43633[(2)]);
var state_43633__$1 = state_43633;
var statearr_43640_45063 = state_43633__$1;
(statearr_43640_45063[(2)] = inst_43629);

(statearr_43640_45063[(1)] = (3));


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
});})(__45049,c__43454__auto___45053,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async))
;
return ((function (__45049,switch__43387__auto__,c__43454__auto___45053,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0 = (function (){
var statearr_43641 = [null,null,null,null,null,null,null];
(statearr_43641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__);

(statearr_43641[(1)] = (1));

return statearr_43641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1 = (function (state_43633){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43633);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43642){if((e43642 instanceof Object)){
var ex__43391__auto__ = e43642;
var statearr_43643_45064 = state_43633;
(statearr_43643_45064[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45065 = state_43633;
state_43633 = G__45065;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = function(state_43633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1.call(this,state_43633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__;
})()
;})(__45049,switch__43387__auto__,c__43454__auto___45053,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async))
})();
var state__43456__auto__ = (function (){var statearr_43644 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43644[(6)] = c__43454__auto___45053);

return statearr_43644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
});})(__45049,c__43454__auto___45053,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async))
);


break;
case "async":
var c__43454__auto___45066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45049,c__43454__auto___45066,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async){
return (function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = ((function (__45049,c__43454__auto___45066,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async){
return (function (state_43657){
var state_val_43658 = (state_43657[(1)]);
if((state_val_43658 === (1))){
var state_43657__$1 = state_43657;
var statearr_43659_45067 = state_43657__$1;
(statearr_43659_45067[(2)] = null);

(statearr_43659_45067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43658 === (2))){
var state_43657__$1 = state_43657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43657__$1,(4),jobs);
} else {
if((state_val_43658 === (3))){
var inst_43655 = (state_43657[(2)]);
var state_43657__$1 = state_43657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43657__$1,inst_43655);
} else {
if((state_val_43658 === (4))){
var inst_43647 = (state_43657[(2)]);
var inst_43648 = async(inst_43647);
var state_43657__$1 = state_43657;
if(cljs.core.truth_(inst_43648)){
var statearr_43660_45068 = state_43657__$1;
(statearr_43660_45068[(1)] = (5));

} else {
var statearr_43661_45069 = state_43657__$1;
(statearr_43661_45069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43658 === (5))){
var state_43657__$1 = state_43657;
var statearr_43662_45070 = state_43657__$1;
(statearr_43662_45070[(2)] = null);

(statearr_43662_45070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43658 === (6))){
var state_43657__$1 = state_43657;
var statearr_43663_45071 = state_43657__$1;
(statearr_43663_45071[(2)] = null);

(statearr_43663_45071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43658 === (7))){
var inst_43653 = (state_43657[(2)]);
var state_43657__$1 = state_43657;
var statearr_43664_45072 = state_43657__$1;
(statearr_43664_45072[(2)] = inst_43653);

(statearr_43664_45072[(1)] = (3));


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
});})(__45049,c__43454__auto___45066,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async))
;
return ((function (__45049,switch__43387__auto__,c__43454__auto___45066,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0 = (function (){
var statearr_43665 = [null,null,null,null,null,null,null];
(statearr_43665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__);

(statearr_43665[(1)] = (1));

return statearr_43665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1 = (function (state_43657){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43657);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43666){if((e43666 instanceof Object)){
var ex__43391__auto__ = e43666;
var statearr_43667_45073 = state_43657;
(statearr_43667_45073[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45074 = state_43657;
state_43657 = G__45074;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = function(state_43657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1.call(this,state_43657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__;
})()
;})(__45049,switch__43387__auto__,c__43454__auto___45066,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async))
})();
var state__43456__auto__ = (function (){var statearr_43668 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43668[(6)] = c__43454__auto___45066);

return statearr_43668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
});})(__45049,c__43454__auto___45066,G__43620_45050,G__43620_45051__$1,n__4666__auto___45048,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43620_45051__$1)].join('')));

}

var G__45075 = (__45049 + (1));
__45049 = G__45075;
continue;
} else {
}
break;
}

var c__43454__auto___45076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43690){
var state_val_43691 = (state_43690[(1)]);
if((state_val_43691 === (7))){
var inst_43686 = (state_43690[(2)]);
var state_43690__$1 = state_43690;
var statearr_43692_45077 = state_43690__$1;
(statearr_43692_45077[(2)] = inst_43686);

(statearr_43692_45077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43691 === (1))){
var state_43690__$1 = state_43690;
var statearr_43693_45078 = state_43690__$1;
(statearr_43693_45078[(2)] = null);

(statearr_43693_45078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43691 === (4))){
var inst_43671 = (state_43690[(7)]);
var inst_43671__$1 = (state_43690[(2)]);
var inst_43672 = (inst_43671__$1 == null);
var state_43690__$1 = (function (){var statearr_43694 = state_43690;
(statearr_43694[(7)] = inst_43671__$1);

return statearr_43694;
})();
if(cljs.core.truth_(inst_43672)){
var statearr_43695_45079 = state_43690__$1;
(statearr_43695_45079[(1)] = (5));

} else {
var statearr_43696_45080 = state_43690__$1;
(statearr_43696_45080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43691 === (6))){
var inst_43676 = (state_43690[(8)]);
var inst_43671 = (state_43690[(7)]);
var inst_43676__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43678 = [inst_43671,inst_43676__$1];
var inst_43679 = (new cljs.core.PersistentVector(null,2,(5),inst_43677,inst_43678,null));
var state_43690__$1 = (function (){var statearr_43697 = state_43690;
(statearr_43697[(8)] = inst_43676__$1);

return statearr_43697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43690__$1,(8),jobs,inst_43679);
} else {
if((state_val_43691 === (3))){
var inst_43688 = (state_43690[(2)]);
var state_43690__$1 = state_43690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43690__$1,inst_43688);
} else {
if((state_val_43691 === (2))){
var state_43690__$1 = state_43690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43690__$1,(4),from);
} else {
if((state_val_43691 === (9))){
var inst_43683 = (state_43690[(2)]);
var state_43690__$1 = (function (){var statearr_43698 = state_43690;
(statearr_43698[(9)] = inst_43683);

return statearr_43698;
})();
var statearr_43699_45081 = state_43690__$1;
(statearr_43699_45081[(2)] = null);

(statearr_43699_45081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43691 === (5))){
var inst_43674 = cljs.core.async.close_BANG_(jobs);
var state_43690__$1 = state_43690;
var statearr_43700_45082 = state_43690__$1;
(statearr_43700_45082[(2)] = inst_43674);

(statearr_43700_45082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43691 === (8))){
var inst_43676 = (state_43690[(8)]);
var inst_43681 = (state_43690[(2)]);
var state_43690__$1 = (function (){var statearr_43701 = state_43690;
(statearr_43701[(10)] = inst_43681);

return statearr_43701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43690__$1,(9),results,inst_43676);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0 = (function (){
var statearr_43702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__);

(statearr_43702[(1)] = (1));

return statearr_43702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1 = (function (state_43690){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43690);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43703){if((e43703 instanceof Object)){
var ex__43391__auto__ = e43703;
var statearr_43704_45083 = state_43690;
(statearr_43704_45083[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45084 = state_43690;
state_43690 = G__45084;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = function(state_43690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1.call(this,state_43690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43705 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43705[(6)] = c__43454__auto___45076);

return statearr_43705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43743){
var state_val_43744 = (state_43743[(1)]);
if((state_val_43744 === (7))){
var inst_43739 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
var statearr_43745_45085 = state_43743__$1;
(statearr_43745_45085[(2)] = inst_43739);

(statearr_43745_45085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (20))){
var state_43743__$1 = state_43743;
var statearr_43746_45086 = state_43743__$1;
(statearr_43746_45086[(2)] = null);

(statearr_43746_45086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (1))){
var state_43743__$1 = state_43743;
var statearr_43747_45087 = state_43743__$1;
(statearr_43747_45087[(2)] = null);

(statearr_43747_45087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (4))){
var inst_43708 = (state_43743[(7)]);
var inst_43708__$1 = (state_43743[(2)]);
var inst_43709 = (inst_43708__$1 == null);
var state_43743__$1 = (function (){var statearr_43748 = state_43743;
(statearr_43748[(7)] = inst_43708__$1);

return statearr_43748;
})();
if(cljs.core.truth_(inst_43709)){
var statearr_43749_45088 = state_43743__$1;
(statearr_43749_45088[(1)] = (5));

} else {
var statearr_43750_45089 = state_43743__$1;
(statearr_43750_45089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (15))){
var inst_43721 = (state_43743[(8)]);
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43743__$1,(18),to,inst_43721);
} else {
if((state_val_43744 === (21))){
var inst_43734 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
var statearr_43751_45090 = state_43743__$1;
(statearr_43751_45090[(2)] = inst_43734);

(statearr_43751_45090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (13))){
var inst_43736 = (state_43743[(2)]);
var state_43743__$1 = (function (){var statearr_43752 = state_43743;
(statearr_43752[(9)] = inst_43736);

return statearr_43752;
})();
var statearr_43753_45091 = state_43743__$1;
(statearr_43753_45091[(2)] = null);

(statearr_43753_45091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (6))){
var inst_43708 = (state_43743[(7)]);
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43743__$1,(11),inst_43708);
} else {
if((state_val_43744 === (17))){
var inst_43729 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
if(cljs.core.truth_(inst_43729)){
var statearr_43754_45092 = state_43743__$1;
(statearr_43754_45092[(1)] = (19));

} else {
var statearr_43755_45093 = state_43743__$1;
(statearr_43755_45093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (3))){
var inst_43741 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43743__$1,inst_43741);
} else {
if((state_val_43744 === (12))){
var inst_43718 = (state_43743[(10)]);
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43743__$1,(14),inst_43718);
} else {
if((state_val_43744 === (2))){
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43743__$1,(4),results);
} else {
if((state_val_43744 === (19))){
var state_43743__$1 = state_43743;
var statearr_43756_45094 = state_43743__$1;
(statearr_43756_45094[(2)] = null);

(statearr_43756_45094[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (11))){
var inst_43718 = (state_43743[(2)]);
var state_43743__$1 = (function (){var statearr_43757 = state_43743;
(statearr_43757[(10)] = inst_43718);

return statearr_43757;
})();
var statearr_43758_45095 = state_43743__$1;
(statearr_43758_45095[(2)] = null);

(statearr_43758_45095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (9))){
var state_43743__$1 = state_43743;
var statearr_43759_45096 = state_43743__$1;
(statearr_43759_45096[(2)] = null);

(statearr_43759_45096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (5))){
var state_43743__$1 = state_43743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43760_45097 = state_43743__$1;
(statearr_43760_45097[(1)] = (8));

} else {
var statearr_43761_45098 = state_43743__$1;
(statearr_43761_45098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (14))){
var inst_43721 = (state_43743[(8)]);
var inst_43721__$1 = (state_43743[(2)]);
var inst_43722 = (inst_43721__$1 == null);
var inst_43723 = cljs.core.not(inst_43722);
var state_43743__$1 = (function (){var statearr_43762 = state_43743;
(statearr_43762[(8)] = inst_43721__$1);

return statearr_43762;
})();
if(inst_43723){
var statearr_43763_45099 = state_43743__$1;
(statearr_43763_45099[(1)] = (15));

} else {
var statearr_43764_45100 = state_43743__$1;
(statearr_43764_45100[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (16))){
var state_43743__$1 = state_43743;
var statearr_43765_45101 = state_43743__$1;
(statearr_43765_45101[(2)] = false);

(statearr_43765_45101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (10))){
var inst_43715 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
var statearr_43766_45102 = state_43743__$1;
(statearr_43766_45102[(2)] = inst_43715);

(statearr_43766_45102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (18))){
var inst_43726 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
var statearr_43767_45103 = state_43743__$1;
(statearr_43767_45103[(2)] = inst_43726);

(statearr_43767_45103[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (8))){
var inst_43712 = cljs.core.async.close_BANG_(to);
var state_43743__$1 = state_43743;
var statearr_43768_45104 = state_43743__$1;
(statearr_43768_45104[(2)] = inst_43712);

(statearr_43768_45104[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0 = (function (){
var statearr_43769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__);

(statearr_43769[(1)] = (1));

return statearr_43769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1 = (function (state_43743){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43743);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43770){if((e43770 instanceof Object)){
var ex__43391__auto__ = e43770;
var statearr_43771_45105 = state_43743;
(statearr_43771_45105[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45106 = state_43743;
state_43743 = G__45106;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__ = function(state_43743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1.call(this,state_43743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43388__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43772 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43772[(6)] = c__43454__auto__);

return statearr_43772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
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
var G__43774 = arguments.length;
switch (G__43774) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__43776 = arguments.length;
switch (G__43776) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__43778 = arguments.length;
switch (G__43778) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43454__auto___45110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43804){
var state_val_43805 = (state_43804[(1)]);
if((state_val_43805 === (7))){
var inst_43800 = (state_43804[(2)]);
var state_43804__$1 = state_43804;
var statearr_43806_45111 = state_43804__$1;
(statearr_43806_45111[(2)] = inst_43800);

(statearr_43806_45111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (1))){
var state_43804__$1 = state_43804;
var statearr_43807_45112 = state_43804__$1;
(statearr_43807_45112[(2)] = null);

(statearr_43807_45112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (4))){
var inst_43781 = (state_43804[(7)]);
var inst_43781__$1 = (state_43804[(2)]);
var inst_43782 = (inst_43781__$1 == null);
var state_43804__$1 = (function (){var statearr_43808 = state_43804;
(statearr_43808[(7)] = inst_43781__$1);

return statearr_43808;
})();
if(cljs.core.truth_(inst_43782)){
var statearr_43809_45113 = state_43804__$1;
(statearr_43809_45113[(1)] = (5));

} else {
var statearr_43810_45114 = state_43804__$1;
(statearr_43810_45114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (13))){
var state_43804__$1 = state_43804;
var statearr_43811_45115 = state_43804__$1;
(statearr_43811_45115[(2)] = null);

(statearr_43811_45115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (6))){
var inst_43781 = (state_43804[(7)]);
var inst_43787 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43781) : p.call(null,inst_43781));
var state_43804__$1 = state_43804;
if(cljs.core.truth_(inst_43787)){
var statearr_43812_45116 = state_43804__$1;
(statearr_43812_45116[(1)] = (9));

} else {
var statearr_43813_45117 = state_43804__$1;
(statearr_43813_45117[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (3))){
var inst_43802 = (state_43804[(2)]);
var state_43804__$1 = state_43804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43804__$1,inst_43802);
} else {
if((state_val_43805 === (12))){
var state_43804__$1 = state_43804;
var statearr_43814_45118 = state_43804__$1;
(statearr_43814_45118[(2)] = null);

(statearr_43814_45118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (2))){
var state_43804__$1 = state_43804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43804__$1,(4),ch);
} else {
if((state_val_43805 === (11))){
var inst_43781 = (state_43804[(7)]);
var inst_43791 = (state_43804[(2)]);
var state_43804__$1 = state_43804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43804__$1,(8),inst_43791,inst_43781);
} else {
if((state_val_43805 === (9))){
var state_43804__$1 = state_43804;
var statearr_43815_45119 = state_43804__$1;
(statearr_43815_45119[(2)] = tc);

(statearr_43815_45119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (5))){
var inst_43784 = cljs.core.async.close_BANG_(tc);
var inst_43785 = cljs.core.async.close_BANG_(fc);
var state_43804__$1 = (function (){var statearr_43816 = state_43804;
(statearr_43816[(8)] = inst_43784);

return statearr_43816;
})();
var statearr_43817_45120 = state_43804__$1;
(statearr_43817_45120[(2)] = inst_43785);

(statearr_43817_45120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (14))){
var inst_43798 = (state_43804[(2)]);
var state_43804__$1 = state_43804;
var statearr_43818_45121 = state_43804__$1;
(statearr_43818_45121[(2)] = inst_43798);

(statearr_43818_45121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (10))){
var state_43804__$1 = state_43804;
var statearr_43819_45122 = state_43804__$1;
(statearr_43819_45122[(2)] = fc);

(statearr_43819_45122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43805 === (8))){
var inst_43793 = (state_43804[(2)]);
var state_43804__$1 = state_43804;
if(cljs.core.truth_(inst_43793)){
var statearr_43820_45123 = state_43804__$1;
(statearr_43820_45123[(1)] = (12));

} else {
var statearr_43821_45124 = state_43804__$1;
(statearr_43821_45124[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_43822 = [null,null,null,null,null,null,null,null,null];
(statearr_43822[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_43822[(1)] = (1));

return statearr_43822;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_43804){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43804);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43823){if((e43823 instanceof Object)){
var ex__43391__auto__ = e43823;
var statearr_43824_45125 = state_43804;
(statearr_43824_45125[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45126 = state_43804;
state_43804 = G__45126;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_43804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_43804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43825 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43825[(6)] = c__43454__auto___45110);

return statearr_43825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43846){
var state_val_43847 = (state_43846[(1)]);
if((state_val_43847 === (7))){
var inst_43842 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43848_45127 = state_43846__$1;
(statearr_43848_45127[(2)] = inst_43842);

(statearr_43848_45127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (1))){
var inst_43826 = init;
var state_43846__$1 = (function (){var statearr_43849 = state_43846;
(statearr_43849[(7)] = inst_43826);

return statearr_43849;
})();
var statearr_43850_45128 = state_43846__$1;
(statearr_43850_45128[(2)] = null);

(statearr_43850_45128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (4))){
var inst_43829 = (state_43846[(8)]);
var inst_43829__$1 = (state_43846[(2)]);
var inst_43830 = (inst_43829__$1 == null);
var state_43846__$1 = (function (){var statearr_43851 = state_43846;
(statearr_43851[(8)] = inst_43829__$1);

return statearr_43851;
})();
if(cljs.core.truth_(inst_43830)){
var statearr_43852_45129 = state_43846__$1;
(statearr_43852_45129[(1)] = (5));

} else {
var statearr_43853_45130 = state_43846__$1;
(statearr_43853_45130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (6))){
var inst_43829 = (state_43846[(8)]);
var inst_43826 = (state_43846[(7)]);
var inst_43833 = (state_43846[(9)]);
var inst_43833__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43826,inst_43829) : f.call(null,inst_43826,inst_43829));
var inst_43834 = cljs.core.reduced_QMARK_(inst_43833__$1);
var state_43846__$1 = (function (){var statearr_43854 = state_43846;
(statearr_43854[(9)] = inst_43833__$1);

return statearr_43854;
})();
if(inst_43834){
var statearr_43855_45131 = state_43846__$1;
(statearr_43855_45131[(1)] = (8));

} else {
var statearr_43856_45132 = state_43846__$1;
(statearr_43856_45132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (3))){
var inst_43844 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43846__$1,inst_43844);
} else {
if((state_val_43847 === (2))){
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43846__$1,(4),ch);
} else {
if((state_val_43847 === (9))){
var inst_43833 = (state_43846[(9)]);
var inst_43826 = inst_43833;
var state_43846__$1 = (function (){var statearr_43857 = state_43846;
(statearr_43857[(7)] = inst_43826);

return statearr_43857;
})();
var statearr_43858_45133 = state_43846__$1;
(statearr_43858_45133[(2)] = null);

(statearr_43858_45133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (5))){
var inst_43826 = (state_43846[(7)]);
var state_43846__$1 = state_43846;
var statearr_43859_45134 = state_43846__$1;
(statearr_43859_45134[(2)] = inst_43826);

(statearr_43859_45134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (10))){
var inst_43840 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43860_45135 = state_43846__$1;
(statearr_43860_45135[(2)] = inst_43840);

(statearr_43860_45135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (8))){
var inst_43833 = (state_43846[(9)]);
var inst_43836 = cljs.core.deref(inst_43833);
var state_43846__$1 = state_43846;
var statearr_43861_45136 = state_43846__$1;
(statearr_43861_45136[(2)] = inst_43836);

(statearr_43861_45136[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43388__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43388__auto____0 = (function (){
var statearr_43862 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43862[(0)] = cljs$core$async$reduce_$_state_machine__43388__auto__);

(statearr_43862[(1)] = (1));

return statearr_43862;
});
var cljs$core$async$reduce_$_state_machine__43388__auto____1 = (function (state_43846){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43846);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43863){if((e43863 instanceof Object)){
var ex__43391__auto__ = e43863;
var statearr_43864_45137 = state_43846;
(statearr_43864_45137[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45138 = state_43846;
state_43846 = G__45138;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43388__auto__ = function(state_43846){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43388__auto____1.call(this,state_43846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43388__auto____0;
cljs$core$async$reduce_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43388__auto____1;
return cljs$core$async$reduce_$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43865 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43865[(6)] = c__43454__auto__);

return statearr_43865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43871){
var state_val_43872 = (state_43871[(1)]);
if((state_val_43872 === (1))){
var inst_43866 = cljs.core.async.reduce(f__$1,init,ch);
var state_43871__$1 = state_43871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43871__$1,(2),inst_43866);
} else {
if((state_val_43872 === (2))){
var inst_43868 = (state_43871[(2)]);
var inst_43869 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43868) : f__$1.call(null,inst_43868));
var state_43871__$1 = state_43871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43871__$1,inst_43869);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43388__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43388__auto____0 = (function (){
var statearr_43873 = [null,null,null,null,null,null,null];
(statearr_43873[(0)] = cljs$core$async$transduce_$_state_machine__43388__auto__);

(statearr_43873[(1)] = (1));

return statearr_43873;
});
var cljs$core$async$transduce_$_state_machine__43388__auto____1 = (function (state_43871){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43871);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43874){if((e43874 instanceof Object)){
var ex__43391__auto__ = e43874;
var statearr_43875_45139 = state_43871;
(statearr_43875_45139[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45140 = state_43871;
state_43871 = G__45140;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43388__auto__ = function(state_43871){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43388__auto____1.call(this,state_43871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43388__auto____0;
cljs$core$async$transduce_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43388__auto____1;
return cljs$core$async$transduce_$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43876 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43876[(6)] = c__43454__auto__);

return statearr_43876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
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
var G__43878 = arguments.length;
switch (G__43878) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_43903){
var state_val_43904 = (state_43903[(1)]);
if((state_val_43904 === (7))){
var inst_43885 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
var statearr_43905_45142 = state_43903__$1;
(statearr_43905_45142[(2)] = inst_43885);

(statearr_43905_45142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (1))){
var inst_43879 = cljs.core.seq(coll);
var inst_43880 = inst_43879;
var state_43903__$1 = (function (){var statearr_43906 = state_43903;
(statearr_43906[(7)] = inst_43880);

return statearr_43906;
})();
var statearr_43907_45143 = state_43903__$1;
(statearr_43907_45143[(2)] = null);

(statearr_43907_45143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (4))){
var inst_43880 = (state_43903[(7)]);
var inst_43883 = cljs.core.first(inst_43880);
var state_43903__$1 = state_43903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43903__$1,(7),ch,inst_43883);
} else {
if((state_val_43904 === (13))){
var inst_43897 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
var statearr_43908_45144 = state_43903__$1;
(statearr_43908_45144[(2)] = inst_43897);

(statearr_43908_45144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (6))){
var inst_43888 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
if(cljs.core.truth_(inst_43888)){
var statearr_43909_45145 = state_43903__$1;
(statearr_43909_45145[(1)] = (8));

} else {
var statearr_43910_45146 = state_43903__$1;
(statearr_43910_45146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (3))){
var inst_43901 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43903__$1,inst_43901);
} else {
if((state_val_43904 === (12))){
var state_43903__$1 = state_43903;
var statearr_43911_45147 = state_43903__$1;
(statearr_43911_45147[(2)] = null);

(statearr_43911_45147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (2))){
var inst_43880 = (state_43903[(7)]);
var state_43903__$1 = state_43903;
if(cljs.core.truth_(inst_43880)){
var statearr_43912_45148 = state_43903__$1;
(statearr_43912_45148[(1)] = (4));

} else {
var statearr_43913_45149 = state_43903__$1;
(statearr_43913_45149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (11))){
var inst_43894 = cljs.core.async.close_BANG_(ch);
var state_43903__$1 = state_43903;
var statearr_43914_45150 = state_43903__$1;
(statearr_43914_45150[(2)] = inst_43894);

(statearr_43914_45150[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (9))){
var state_43903__$1 = state_43903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43915_45151 = state_43903__$1;
(statearr_43915_45151[(1)] = (11));

} else {
var statearr_43916_45152 = state_43903__$1;
(statearr_43916_45152[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (5))){
var inst_43880 = (state_43903[(7)]);
var state_43903__$1 = state_43903;
var statearr_43917_45153 = state_43903__$1;
(statearr_43917_45153[(2)] = inst_43880);

(statearr_43917_45153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (10))){
var inst_43899 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
var statearr_43918_45154 = state_43903__$1;
(statearr_43918_45154[(2)] = inst_43899);

(statearr_43918_45154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (8))){
var inst_43880 = (state_43903[(7)]);
var inst_43890 = cljs.core.next(inst_43880);
var inst_43880__$1 = inst_43890;
var state_43903__$1 = (function (){var statearr_43919 = state_43903;
(statearr_43919[(7)] = inst_43880__$1);

return statearr_43919;
})();
var statearr_43920_45155 = state_43903__$1;
(statearr_43920_45155[(2)] = null);

(statearr_43920_45155[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_43921 = [null,null,null,null,null,null,null,null];
(statearr_43921[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_43921[(1)] = (1));

return statearr_43921;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_43903){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_43903);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e43922){if((e43922 instanceof Object)){
var ex__43391__auto__ = e43922;
var statearr_43923_45156 = state_43903;
(statearr_43923_45156[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45157 = state_43903;
state_43903 = G__45157;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_43903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_43903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43924 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43924[(6)] = c__43454__auto__);

return statearr_43924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43925 = (function (ch,cs,meta43926){
this.ch = ch;
this.cs = cs;
this.meta43926 = meta43926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43927,meta43926__$1){
var self__ = this;
var _43927__$1 = this;
return (new cljs.core.async.t_cljs$core$async43925(self__.ch,self__.cs,meta43926__$1));
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43927){
var self__ = this;
var _43927__$1 = this;
return self__.meta43926;
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43925.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43926","meta43926",432788749,null)], null);
}));

(cljs.core.async.t_cljs$core$async43925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43925");

(cljs.core.async.t_cljs$core$async43925.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43925.
 */
cljs.core.async.__GT_t_cljs$core$async43925 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43925(ch__$1,cs__$1,meta43926){
return (new cljs.core.async.t_cljs$core$async43925(ch__$1,cs__$1,meta43926));
});

}

return (new cljs.core.async.t_cljs$core$async43925(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43454__auto___45158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44062){
var state_val_44063 = (state_44062[(1)]);
if((state_val_44063 === (7))){
var inst_44058 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44064_45159 = state_44062__$1;
(statearr_44064_45159[(2)] = inst_44058);

(statearr_44064_45159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (20))){
var inst_43961 = (state_44062[(7)]);
var inst_43973 = cljs.core.first(inst_43961);
var inst_43974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43973,(0),null);
var inst_43975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43973,(1),null);
var state_44062__$1 = (function (){var statearr_44065 = state_44062;
(statearr_44065[(8)] = inst_43974);

return statearr_44065;
})();
if(cljs.core.truth_(inst_43975)){
var statearr_44066_45160 = state_44062__$1;
(statearr_44066_45160[(1)] = (22));

} else {
var statearr_44067_45161 = state_44062__$1;
(statearr_44067_45161[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (27))){
var inst_44010 = (state_44062[(9)]);
var inst_43930 = (state_44062[(10)]);
var inst_44005 = (state_44062[(11)]);
var inst_44003 = (state_44062[(12)]);
var inst_44010__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44003,inst_44005);
var inst_44011 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44010__$1,inst_43930,done);
var state_44062__$1 = (function (){var statearr_44068 = state_44062;
(statearr_44068[(9)] = inst_44010__$1);

return statearr_44068;
})();
if(cljs.core.truth_(inst_44011)){
var statearr_44069_45162 = state_44062__$1;
(statearr_44069_45162[(1)] = (30));

} else {
var statearr_44070_45163 = state_44062__$1;
(statearr_44070_45163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (1))){
var state_44062__$1 = state_44062;
var statearr_44071_45164 = state_44062__$1;
(statearr_44071_45164[(2)] = null);

(statearr_44071_45164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (24))){
var inst_43961 = (state_44062[(7)]);
var inst_43980 = (state_44062[(2)]);
var inst_43981 = cljs.core.next(inst_43961);
var inst_43939 = inst_43981;
var inst_43940 = null;
var inst_43941 = (0);
var inst_43942 = (0);
var state_44062__$1 = (function (){var statearr_44072 = state_44062;
(statearr_44072[(13)] = inst_43941);

(statearr_44072[(14)] = inst_43942);

(statearr_44072[(15)] = inst_43980);

(statearr_44072[(16)] = inst_43939);

(statearr_44072[(17)] = inst_43940);

return statearr_44072;
})();
var statearr_44073_45165 = state_44062__$1;
(statearr_44073_45165[(2)] = null);

(statearr_44073_45165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (39))){
var state_44062__$1 = state_44062;
var statearr_44077_45166 = state_44062__$1;
(statearr_44077_45166[(2)] = null);

(statearr_44077_45166[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (4))){
var inst_43930 = (state_44062[(10)]);
var inst_43930__$1 = (state_44062[(2)]);
var inst_43931 = (inst_43930__$1 == null);
var state_44062__$1 = (function (){var statearr_44078 = state_44062;
(statearr_44078[(10)] = inst_43930__$1);

return statearr_44078;
})();
if(cljs.core.truth_(inst_43931)){
var statearr_44079_45167 = state_44062__$1;
(statearr_44079_45167[(1)] = (5));

} else {
var statearr_44080_45168 = state_44062__$1;
(statearr_44080_45168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (15))){
var inst_43941 = (state_44062[(13)]);
var inst_43942 = (state_44062[(14)]);
var inst_43939 = (state_44062[(16)]);
var inst_43940 = (state_44062[(17)]);
var inst_43957 = (state_44062[(2)]);
var inst_43958 = (inst_43942 + (1));
var tmp44074 = inst_43941;
var tmp44075 = inst_43939;
var tmp44076 = inst_43940;
var inst_43939__$1 = tmp44075;
var inst_43940__$1 = tmp44076;
var inst_43941__$1 = tmp44074;
var inst_43942__$1 = inst_43958;
var state_44062__$1 = (function (){var statearr_44081 = state_44062;
(statearr_44081[(13)] = inst_43941__$1);

(statearr_44081[(18)] = inst_43957);

(statearr_44081[(14)] = inst_43942__$1);

(statearr_44081[(16)] = inst_43939__$1);

(statearr_44081[(17)] = inst_43940__$1);

return statearr_44081;
})();
var statearr_44082_45169 = state_44062__$1;
(statearr_44082_45169[(2)] = null);

(statearr_44082_45169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (21))){
var inst_43984 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44086_45170 = state_44062__$1;
(statearr_44086_45170[(2)] = inst_43984);

(statearr_44086_45170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (31))){
var inst_44010 = (state_44062[(9)]);
var inst_44014 = done(null);
var inst_44015 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44010);
var state_44062__$1 = (function (){var statearr_44087 = state_44062;
(statearr_44087[(19)] = inst_44014);

return statearr_44087;
})();
var statearr_44088_45171 = state_44062__$1;
(statearr_44088_45171[(2)] = inst_44015);

(statearr_44088_45171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (32))){
var inst_44002 = (state_44062[(20)]);
var inst_44005 = (state_44062[(11)]);
var inst_44004 = (state_44062[(21)]);
var inst_44003 = (state_44062[(12)]);
var inst_44017 = (state_44062[(2)]);
var inst_44018 = (inst_44005 + (1));
var tmp44083 = inst_44002;
var tmp44084 = inst_44004;
var tmp44085 = inst_44003;
var inst_44002__$1 = tmp44083;
var inst_44003__$1 = tmp44085;
var inst_44004__$1 = tmp44084;
var inst_44005__$1 = inst_44018;
var state_44062__$1 = (function (){var statearr_44089 = state_44062;
(statearr_44089[(20)] = inst_44002__$1);

(statearr_44089[(22)] = inst_44017);

(statearr_44089[(11)] = inst_44005__$1);

(statearr_44089[(21)] = inst_44004__$1);

(statearr_44089[(12)] = inst_44003__$1);

return statearr_44089;
})();
var statearr_44090_45172 = state_44062__$1;
(statearr_44090_45172[(2)] = null);

(statearr_44090_45172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (40))){
var inst_44030 = (state_44062[(23)]);
var inst_44034 = done(null);
var inst_44035 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44030);
var state_44062__$1 = (function (){var statearr_44091 = state_44062;
(statearr_44091[(24)] = inst_44034);

return statearr_44091;
})();
var statearr_44092_45173 = state_44062__$1;
(statearr_44092_45173[(2)] = inst_44035);

(statearr_44092_45173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (33))){
var inst_44021 = (state_44062[(25)]);
var inst_44023 = cljs.core.chunked_seq_QMARK_(inst_44021);
var state_44062__$1 = state_44062;
if(inst_44023){
var statearr_44093_45174 = state_44062__$1;
(statearr_44093_45174[(1)] = (36));

} else {
var statearr_44094_45175 = state_44062__$1;
(statearr_44094_45175[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (13))){
var inst_43951 = (state_44062[(26)]);
var inst_43954 = cljs.core.async.close_BANG_(inst_43951);
var state_44062__$1 = state_44062;
var statearr_44095_45176 = state_44062__$1;
(statearr_44095_45176[(2)] = inst_43954);

(statearr_44095_45176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (22))){
var inst_43974 = (state_44062[(8)]);
var inst_43977 = cljs.core.async.close_BANG_(inst_43974);
var state_44062__$1 = state_44062;
var statearr_44096_45177 = state_44062__$1;
(statearr_44096_45177[(2)] = inst_43977);

(statearr_44096_45177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (36))){
var inst_44021 = (state_44062[(25)]);
var inst_44025 = cljs.core.chunk_first(inst_44021);
var inst_44026 = cljs.core.chunk_rest(inst_44021);
var inst_44027 = cljs.core.count(inst_44025);
var inst_44002 = inst_44026;
var inst_44003 = inst_44025;
var inst_44004 = inst_44027;
var inst_44005 = (0);
var state_44062__$1 = (function (){var statearr_44097 = state_44062;
(statearr_44097[(20)] = inst_44002);

(statearr_44097[(11)] = inst_44005);

(statearr_44097[(21)] = inst_44004);

(statearr_44097[(12)] = inst_44003);

return statearr_44097;
})();
var statearr_44098_45178 = state_44062__$1;
(statearr_44098_45178[(2)] = null);

(statearr_44098_45178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (41))){
var inst_44021 = (state_44062[(25)]);
var inst_44037 = (state_44062[(2)]);
var inst_44038 = cljs.core.next(inst_44021);
var inst_44002 = inst_44038;
var inst_44003 = null;
var inst_44004 = (0);
var inst_44005 = (0);
var state_44062__$1 = (function (){var statearr_44099 = state_44062;
(statearr_44099[(20)] = inst_44002);

(statearr_44099[(11)] = inst_44005);

(statearr_44099[(27)] = inst_44037);

(statearr_44099[(21)] = inst_44004);

(statearr_44099[(12)] = inst_44003);

return statearr_44099;
})();
var statearr_44100_45179 = state_44062__$1;
(statearr_44100_45179[(2)] = null);

(statearr_44100_45179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (43))){
var state_44062__$1 = state_44062;
var statearr_44101_45180 = state_44062__$1;
(statearr_44101_45180[(2)] = null);

(statearr_44101_45180[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (29))){
var inst_44046 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44102_45181 = state_44062__$1;
(statearr_44102_45181[(2)] = inst_44046);

(statearr_44102_45181[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (44))){
var inst_44055 = (state_44062[(2)]);
var state_44062__$1 = (function (){var statearr_44103 = state_44062;
(statearr_44103[(28)] = inst_44055);

return statearr_44103;
})();
var statearr_44104_45182 = state_44062__$1;
(statearr_44104_45182[(2)] = null);

(statearr_44104_45182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (6))){
var inst_43994 = (state_44062[(29)]);
var inst_43993 = cljs.core.deref(cs);
var inst_43994__$1 = cljs.core.keys(inst_43993);
var inst_43995 = cljs.core.count(inst_43994__$1);
var inst_43996 = cljs.core.reset_BANG_(dctr,inst_43995);
var inst_44001 = cljs.core.seq(inst_43994__$1);
var inst_44002 = inst_44001;
var inst_44003 = null;
var inst_44004 = (0);
var inst_44005 = (0);
var state_44062__$1 = (function (){var statearr_44105 = state_44062;
(statearr_44105[(20)] = inst_44002);

(statearr_44105[(29)] = inst_43994__$1);

(statearr_44105[(11)] = inst_44005);

(statearr_44105[(30)] = inst_43996);

(statearr_44105[(21)] = inst_44004);

(statearr_44105[(12)] = inst_44003);

return statearr_44105;
})();
var statearr_44106_45187 = state_44062__$1;
(statearr_44106_45187[(2)] = null);

(statearr_44106_45187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (28))){
var inst_44002 = (state_44062[(20)]);
var inst_44021 = (state_44062[(25)]);
var inst_44021__$1 = cljs.core.seq(inst_44002);
var state_44062__$1 = (function (){var statearr_44107 = state_44062;
(statearr_44107[(25)] = inst_44021__$1);

return statearr_44107;
})();
if(inst_44021__$1){
var statearr_44108_45194 = state_44062__$1;
(statearr_44108_45194[(1)] = (33));

} else {
var statearr_44109_45195 = state_44062__$1;
(statearr_44109_45195[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (25))){
var inst_44005 = (state_44062[(11)]);
var inst_44004 = (state_44062[(21)]);
var inst_44007 = (inst_44005 < inst_44004);
var inst_44008 = inst_44007;
var state_44062__$1 = state_44062;
if(cljs.core.truth_(inst_44008)){
var statearr_44110_45196 = state_44062__$1;
(statearr_44110_45196[(1)] = (27));

} else {
var statearr_44111_45199 = state_44062__$1;
(statearr_44111_45199[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (34))){
var state_44062__$1 = state_44062;
var statearr_44112_45200 = state_44062__$1;
(statearr_44112_45200[(2)] = null);

(statearr_44112_45200[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (17))){
var state_44062__$1 = state_44062;
var statearr_44113_45201 = state_44062__$1;
(statearr_44113_45201[(2)] = null);

(statearr_44113_45201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (3))){
var inst_44060 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44062__$1,inst_44060);
} else {
if((state_val_44063 === (12))){
var inst_43989 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44114_45204 = state_44062__$1;
(statearr_44114_45204[(2)] = inst_43989);

(statearr_44114_45204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (2))){
var state_44062__$1 = state_44062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44062__$1,(4),ch);
} else {
if((state_val_44063 === (23))){
var state_44062__$1 = state_44062;
var statearr_44115_45207 = state_44062__$1;
(statearr_44115_45207[(2)] = null);

(statearr_44115_45207[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (35))){
var inst_44044 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44116_45208 = state_44062__$1;
(statearr_44116_45208[(2)] = inst_44044);

(statearr_44116_45208[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (19))){
var inst_43961 = (state_44062[(7)]);
var inst_43965 = cljs.core.chunk_first(inst_43961);
var inst_43966 = cljs.core.chunk_rest(inst_43961);
var inst_43967 = cljs.core.count(inst_43965);
var inst_43939 = inst_43966;
var inst_43940 = inst_43965;
var inst_43941 = inst_43967;
var inst_43942 = (0);
var state_44062__$1 = (function (){var statearr_44117 = state_44062;
(statearr_44117[(13)] = inst_43941);

(statearr_44117[(14)] = inst_43942);

(statearr_44117[(16)] = inst_43939);

(statearr_44117[(17)] = inst_43940);

return statearr_44117;
})();
var statearr_44118_45210 = state_44062__$1;
(statearr_44118_45210[(2)] = null);

(statearr_44118_45210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (11))){
var inst_43961 = (state_44062[(7)]);
var inst_43939 = (state_44062[(16)]);
var inst_43961__$1 = cljs.core.seq(inst_43939);
var state_44062__$1 = (function (){var statearr_44119 = state_44062;
(statearr_44119[(7)] = inst_43961__$1);

return statearr_44119;
})();
if(inst_43961__$1){
var statearr_44120_45211 = state_44062__$1;
(statearr_44120_45211[(1)] = (16));

} else {
var statearr_44121_45212 = state_44062__$1;
(statearr_44121_45212[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (9))){
var inst_43991 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44122_45213 = state_44062__$1;
(statearr_44122_45213[(2)] = inst_43991);

(statearr_44122_45213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (5))){
var inst_43937 = cljs.core.deref(cs);
var inst_43938 = cljs.core.seq(inst_43937);
var inst_43939 = inst_43938;
var inst_43940 = null;
var inst_43941 = (0);
var inst_43942 = (0);
var state_44062__$1 = (function (){var statearr_44123 = state_44062;
(statearr_44123[(13)] = inst_43941);

(statearr_44123[(14)] = inst_43942);

(statearr_44123[(16)] = inst_43939);

(statearr_44123[(17)] = inst_43940);

return statearr_44123;
})();
var statearr_44124_45214 = state_44062__$1;
(statearr_44124_45214[(2)] = null);

(statearr_44124_45214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (14))){
var state_44062__$1 = state_44062;
var statearr_44125_45215 = state_44062__$1;
(statearr_44125_45215[(2)] = null);

(statearr_44125_45215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (45))){
var inst_44052 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44126_45216 = state_44062__$1;
(statearr_44126_45216[(2)] = inst_44052);

(statearr_44126_45216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (26))){
var inst_43994 = (state_44062[(29)]);
var inst_44048 = (state_44062[(2)]);
var inst_44049 = cljs.core.seq(inst_43994);
var state_44062__$1 = (function (){var statearr_44127 = state_44062;
(statearr_44127[(31)] = inst_44048);

return statearr_44127;
})();
if(inst_44049){
var statearr_44128_45217 = state_44062__$1;
(statearr_44128_45217[(1)] = (42));

} else {
var statearr_44129_45218 = state_44062__$1;
(statearr_44129_45218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (16))){
var inst_43961 = (state_44062[(7)]);
var inst_43963 = cljs.core.chunked_seq_QMARK_(inst_43961);
var state_44062__$1 = state_44062;
if(inst_43963){
var statearr_44130_45219 = state_44062__$1;
(statearr_44130_45219[(1)] = (19));

} else {
var statearr_44131_45220 = state_44062__$1;
(statearr_44131_45220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (38))){
var inst_44041 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44132_45221 = state_44062__$1;
(statearr_44132_45221[(2)] = inst_44041);

(statearr_44132_45221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (30))){
var state_44062__$1 = state_44062;
var statearr_44133_45222 = state_44062__$1;
(statearr_44133_45222[(2)] = null);

(statearr_44133_45222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (10))){
var inst_43942 = (state_44062[(14)]);
var inst_43940 = (state_44062[(17)]);
var inst_43950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43940,inst_43942);
var inst_43951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43950,(0),null);
var inst_43952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43950,(1),null);
var state_44062__$1 = (function (){var statearr_44134 = state_44062;
(statearr_44134[(26)] = inst_43951);

return statearr_44134;
})();
if(cljs.core.truth_(inst_43952)){
var statearr_44135_45223 = state_44062__$1;
(statearr_44135_45223[(1)] = (13));

} else {
var statearr_44136_45224 = state_44062__$1;
(statearr_44136_45224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (18))){
var inst_43987 = (state_44062[(2)]);
var state_44062__$1 = state_44062;
var statearr_44137_45225 = state_44062__$1;
(statearr_44137_45225[(2)] = inst_43987);

(statearr_44137_45225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (42))){
var state_44062__$1 = state_44062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44062__$1,(45),dchan);
} else {
if((state_val_44063 === (37))){
var inst_43930 = (state_44062[(10)]);
var inst_44021 = (state_44062[(25)]);
var inst_44030 = (state_44062[(23)]);
var inst_44030__$1 = cljs.core.first(inst_44021);
var inst_44031 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44030__$1,inst_43930,done);
var state_44062__$1 = (function (){var statearr_44138 = state_44062;
(statearr_44138[(23)] = inst_44030__$1);

return statearr_44138;
})();
if(cljs.core.truth_(inst_44031)){
var statearr_44139_45226 = state_44062__$1;
(statearr_44139_45226[(1)] = (39));

} else {
var statearr_44140_45227 = state_44062__$1;
(statearr_44140_45227[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44063 === (8))){
var inst_43941 = (state_44062[(13)]);
var inst_43942 = (state_44062[(14)]);
var inst_43944 = (inst_43942 < inst_43941);
var inst_43945 = inst_43944;
var state_44062__$1 = state_44062;
if(cljs.core.truth_(inst_43945)){
var statearr_44141_45228 = state_44062__$1;
(statearr_44141_45228[(1)] = (10));

} else {
var statearr_44142_45229 = state_44062__$1;
(statearr_44142_45229[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__43388__auto__ = null;
var cljs$core$async$mult_$_state_machine__43388__auto____0 = (function (){
var statearr_44143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44143[(0)] = cljs$core$async$mult_$_state_machine__43388__auto__);

(statearr_44143[(1)] = (1));

return statearr_44143;
});
var cljs$core$async$mult_$_state_machine__43388__auto____1 = (function (state_44062){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44062);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44144){if((e44144 instanceof Object)){
var ex__43391__auto__ = e44144;
var statearr_44145_45230 = state_44062;
(statearr_44145_45230[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45231 = state_44062;
state_44062 = G__45231;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43388__auto__ = function(state_44062){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43388__auto____1.call(this,state_44062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43388__auto____0;
cljs$core$async$mult_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43388__auto____1;
return cljs$core$async$mult_$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44146 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44146[(6)] = c__43454__auto___45158);

return statearr_44146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44148 = arguments.length;
switch (G__44148) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45233 = arguments.length;
var i__4790__auto___45234 = (0);
while(true){
if((i__4790__auto___45234 < len__4789__auto___45233)){
args__4795__auto__.push((arguments[i__4790__auto___45234]));

var G__45237 = (i__4790__auto___45234 + (1));
i__4790__auto___45234 = G__45237;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44153){
var map__44154 = p__44153;
var map__44154__$1 = (((((!((map__44154 == null))))?(((((map__44154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44154):map__44154);
var opts = map__44154__$1;
var statearr_44156_45240 = state;
(statearr_44156_45240[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44157_45241 = state;
(statearr_44157_45241[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44158_45242 = state;
(statearr_44158_45242[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44149){
var G__44150 = cljs.core.first(seq44149);
var seq44149__$1 = cljs.core.next(seq44149);
var G__44151 = cljs.core.first(seq44149__$1);
var seq44149__$2 = cljs.core.next(seq44149__$1);
var G__44152 = cljs.core.first(seq44149__$2);
var seq44149__$3 = cljs.core.next(seq44149__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44150,G__44151,G__44152,seq44149__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44159 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44160){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44160 = meta44160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44161,meta44160__$1){
var self__ = this;
var _44161__$1 = this;
return (new cljs.core.async.t_cljs$core$async44159(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44160__$1));
}));

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44161){
var self__ = this;
var _44161__$1 = this;
return self__.meta44160;
}));

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44159.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44160","meta44160",-679460978,null)], null);
}));

(cljs.core.async.t_cljs$core$async44159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44159");

(cljs.core.async.t_cljs$core$async44159.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44159.
 */
cljs.core.async.__GT_t_cljs$core$async44159 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44159(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44160){
return (new cljs.core.async.t_cljs$core$async44159(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44160));
});

}

return (new cljs.core.async.t_cljs$core$async44159(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43454__auto___45252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44263){
var state_val_44264 = (state_44263[(1)]);
if((state_val_44264 === (7))){
var inst_44178 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
var statearr_44265_45253 = state_44263__$1;
(statearr_44265_45253[(2)] = inst_44178);

(statearr_44265_45253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (20))){
var inst_44190 = (state_44263[(7)]);
var state_44263__$1 = state_44263;
var statearr_44266_45254 = state_44263__$1;
(statearr_44266_45254[(2)] = inst_44190);

(statearr_44266_45254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (27))){
var state_44263__$1 = state_44263;
var statearr_44267_45255 = state_44263__$1;
(statearr_44267_45255[(2)] = null);

(statearr_44267_45255[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (1))){
var inst_44165 = (state_44263[(8)]);
var inst_44165__$1 = calc_state();
var inst_44167 = (inst_44165__$1 == null);
var inst_44168 = cljs.core.not(inst_44167);
var state_44263__$1 = (function (){var statearr_44268 = state_44263;
(statearr_44268[(8)] = inst_44165__$1);

return statearr_44268;
})();
if(inst_44168){
var statearr_44269_45257 = state_44263__$1;
(statearr_44269_45257[(1)] = (2));

} else {
var statearr_44270_45258 = state_44263__$1;
(statearr_44270_45258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (24))){
var inst_44214 = (state_44263[(9)]);
var inst_44223 = (state_44263[(10)]);
var inst_44237 = (state_44263[(11)]);
var inst_44237__$1 = (inst_44214.cljs$core$IFn$_invoke$arity$1 ? inst_44214.cljs$core$IFn$_invoke$arity$1(inst_44223) : inst_44214.call(null,inst_44223));
var state_44263__$1 = (function (){var statearr_44271 = state_44263;
(statearr_44271[(11)] = inst_44237__$1);

return statearr_44271;
})();
if(cljs.core.truth_(inst_44237__$1)){
var statearr_44272_45261 = state_44263__$1;
(statearr_44272_45261[(1)] = (29));

} else {
var statearr_44273_45262 = state_44263__$1;
(statearr_44273_45262[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (4))){
var inst_44181 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
if(cljs.core.truth_(inst_44181)){
var statearr_44274_45267 = state_44263__$1;
(statearr_44274_45267[(1)] = (8));

} else {
var statearr_44275_45268 = state_44263__$1;
(statearr_44275_45268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (15))){
var inst_44208 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
if(cljs.core.truth_(inst_44208)){
var statearr_44276_45273 = state_44263__$1;
(statearr_44276_45273[(1)] = (19));

} else {
var statearr_44277_45274 = state_44263__$1;
(statearr_44277_45274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (21))){
var inst_44213 = (state_44263[(12)]);
var inst_44213__$1 = (state_44263[(2)]);
var inst_44214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44213__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44213__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44213__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44263__$1 = (function (){var statearr_44278 = state_44263;
(statearr_44278[(9)] = inst_44214);

(statearr_44278[(12)] = inst_44213__$1);

(statearr_44278[(13)] = inst_44215);

return statearr_44278;
})();
return cljs.core.async.ioc_alts_BANG_(state_44263__$1,(22),inst_44216);
} else {
if((state_val_44264 === (31))){
var inst_44245 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
if(cljs.core.truth_(inst_44245)){
var statearr_44279_45281 = state_44263__$1;
(statearr_44279_45281[(1)] = (32));

} else {
var statearr_44280_45282 = state_44263__$1;
(statearr_44280_45282[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (32))){
var inst_44222 = (state_44263[(14)]);
var state_44263__$1 = state_44263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44263__$1,(35),out,inst_44222);
} else {
if((state_val_44264 === (33))){
var inst_44213 = (state_44263[(12)]);
var inst_44190 = inst_44213;
var state_44263__$1 = (function (){var statearr_44281 = state_44263;
(statearr_44281[(7)] = inst_44190);

return statearr_44281;
})();
var statearr_44282_45283 = state_44263__$1;
(statearr_44282_45283[(2)] = null);

(statearr_44282_45283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (13))){
var inst_44190 = (state_44263[(7)]);
var inst_44197 = inst_44190.cljs$lang$protocol_mask$partition0$;
var inst_44198 = (inst_44197 & (64));
var inst_44199 = inst_44190.cljs$core$ISeq$;
var inst_44200 = (cljs.core.PROTOCOL_SENTINEL === inst_44199);
var inst_44201 = ((inst_44198) || (inst_44200));
var state_44263__$1 = state_44263;
if(cljs.core.truth_(inst_44201)){
var statearr_44283_45284 = state_44263__$1;
(statearr_44283_45284[(1)] = (16));

} else {
var statearr_44284_45285 = state_44263__$1;
(statearr_44284_45285[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (22))){
var inst_44222 = (state_44263[(14)]);
var inst_44223 = (state_44263[(10)]);
var inst_44221 = (state_44263[(2)]);
var inst_44222__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44221,(0),null);
var inst_44223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44221,(1),null);
var inst_44224 = (inst_44222__$1 == null);
var inst_44225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44223__$1,change);
var inst_44226 = ((inst_44224) || (inst_44225));
var state_44263__$1 = (function (){var statearr_44285 = state_44263;
(statearr_44285[(14)] = inst_44222__$1);

(statearr_44285[(10)] = inst_44223__$1);

return statearr_44285;
})();
if(cljs.core.truth_(inst_44226)){
var statearr_44286_45286 = state_44263__$1;
(statearr_44286_45286[(1)] = (23));

} else {
var statearr_44287_45287 = state_44263__$1;
(statearr_44287_45287[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (36))){
var inst_44213 = (state_44263[(12)]);
var inst_44190 = inst_44213;
var state_44263__$1 = (function (){var statearr_44288 = state_44263;
(statearr_44288[(7)] = inst_44190);

return statearr_44288;
})();
var statearr_44289_45288 = state_44263__$1;
(statearr_44289_45288[(2)] = null);

(statearr_44289_45288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (29))){
var inst_44237 = (state_44263[(11)]);
var state_44263__$1 = state_44263;
var statearr_44290_45289 = state_44263__$1;
(statearr_44290_45289[(2)] = inst_44237);

(statearr_44290_45289[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (6))){
var state_44263__$1 = state_44263;
var statearr_44291_45290 = state_44263__$1;
(statearr_44291_45290[(2)] = false);

(statearr_44291_45290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (28))){
var inst_44233 = (state_44263[(2)]);
var inst_44234 = calc_state();
var inst_44190 = inst_44234;
var state_44263__$1 = (function (){var statearr_44292 = state_44263;
(statearr_44292[(7)] = inst_44190);

(statearr_44292[(15)] = inst_44233);

return statearr_44292;
})();
var statearr_44293_45291 = state_44263__$1;
(statearr_44293_45291[(2)] = null);

(statearr_44293_45291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (25))){
var inst_44259 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
var statearr_44294_45292 = state_44263__$1;
(statearr_44294_45292[(2)] = inst_44259);

(statearr_44294_45292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (34))){
var inst_44257 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
var statearr_44295_45293 = state_44263__$1;
(statearr_44295_45293[(2)] = inst_44257);

(statearr_44295_45293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (17))){
var state_44263__$1 = state_44263;
var statearr_44296_45294 = state_44263__$1;
(statearr_44296_45294[(2)] = false);

(statearr_44296_45294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (3))){
var state_44263__$1 = state_44263;
var statearr_44297_45295 = state_44263__$1;
(statearr_44297_45295[(2)] = false);

(statearr_44297_45295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (12))){
var inst_44261 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44263__$1,inst_44261);
} else {
if((state_val_44264 === (2))){
var inst_44165 = (state_44263[(8)]);
var inst_44170 = inst_44165.cljs$lang$protocol_mask$partition0$;
var inst_44171 = (inst_44170 & (64));
var inst_44172 = inst_44165.cljs$core$ISeq$;
var inst_44173 = (cljs.core.PROTOCOL_SENTINEL === inst_44172);
var inst_44174 = ((inst_44171) || (inst_44173));
var state_44263__$1 = state_44263;
if(cljs.core.truth_(inst_44174)){
var statearr_44298_45296 = state_44263__$1;
(statearr_44298_45296[(1)] = (5));

} else {
var statearr_44299_45299 = state_44263__$1;
(statearr_44299_45299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (23))){
var inst_44222 = (state_44263[(14)]);
var inst_44228 = (inst_44222 == null);
var state_44263__$1 = state_44263;
if(cljs.core.truth_(inst_44228)){
var statearr_44300_45301 = state_44263__$1;
(statearr_44300_45301[(1)] = (26));

} else {
var statearr_44301_45302 = state_44263__$1;
(statearr_44301_45302[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (35))){
var inst_44248 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
if(cljs.core.truth_(inst_44248)){
var statearr_44302_45303 = state_44263__$1;
(statearr_44302_45303[(1)] = (36));

} else {
var statearr_44303_45304 = state_44263__$1;
(statearr_44303_45304[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (19))){
var inst_44190 = (state_44263[(7)]);
var inst_44210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44190);
var state_44263__$1 = state_44263;
var statearr_44304_45305 = state_44263__$1;
(statearr_44304_45305[(2)] = inst_44210);

(statearr_44304_45305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (11))){
var inst_44190 = (state_44263[(7)]);
var inst_44194 = (inst_44190 == null);
var inst_44195 = cljs.core.not(inst_44194);
var state_44263__$1 = state_44263;
if(inst_44195){
var statearr_44305_45307 = state_44263__$1;
(statearr_44305_45307[(1)] = (13));

} else {
var statearr_44306_45308 = state_44263__$1;
(statearr_44306_45308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (9))){
var inst_44165 = (state_44263[(8)]);
var state_44263__$1 = state_44263;
var statearr_44307_45309 = state_44263__$1;
(statearr_44307_45309[(2)] = inst_44165);

(statearr_44307_45309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (5))){
var state_44263__$1 = state_44263;
var statearr_44308_45310 = state_44263__$1;
(statearr_44308_45310[(2)] = true);

(statearr_44308_45310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (14))){
var state_44263__$1 = state_44263;
var statearr_44309_45311 = state_44263__$1;
(statearr_44309_45311[(2)] = false);

(statearr_44309_45311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (26))){
var inst_44223 = (state_44263[(10)]);
var inst_44230 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44223);
var state_44263__$1 = state_44263;
var statearr_44310_45318 = state_44263__$1;
(statearr_44310_45318[(2)] = inst_44230);

(statearr_44310_45318[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (16))){
var state_44263__$1 = state_44263;
var statearr_44311_45320 = state_44263__$1;
(statearr_44311_45320[(2)] = true);

(statearr_44311_45320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (38))){
var inst_44253 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
var statearr_44312_45322 = state_44263__$1;
(statearr_44312_45322[(2)] = inst_44253);

(statearr_44312_45322[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (30))){
var inst_44214 = (state_44263[(9)]);
var inst_44223 = (state_44263[(10)]);
var inst_44215 = (state_44263[(13)]);
var inst_44240 = cljs.core.empty_QMARK_(inst_44214);
var inst_44241 = (inst_44215.cljs$core$IFn$_invoke$arity$1 ? inst_44215.cljs$core$IFn$_invoke$arity$1(inst_44223) : inst_44215.call(null,inst_44223));
var inst_44242 = cljs.core.not(inst_44241);
var inst_44243 = ((inst_44240) && (inst_44242));
var state_44263__$1 = state_44263;
var statearr_44313_45334 = state_44263__$1;
(statearr_44313_45334[(2)] = inst_44243);

(statearr_44313_45334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (10))){
var inst_44165 = (state_44263[(8)]);
var inst_44186 = (state_44263[(2)]);
var inst_44187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44190 = inst_44165;
var state_44263__$1 = (function (){var statearr_44314 = state_44263;
(statearr_44314[(16)] = inst_44188);

(statearr_44314[(17)] = inst_44187);

(statearr_44314[(7)] = inst_44190);

(statearr_44314[(18)] = inst_44189);

return statearr_44314;
})();
var statearr_44315_45342 = state_44263__$1;
(statearr_44315_45342[(2)] = null);

(statearr_44315_45342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (18))){
var inst_44205 = (state_44263[(2)]);
var state_44263__$1 = state_44263;
var statearr_44316_45343 = state_44263__$1;
(statearr_44316_45343[(2)] = inst_44205);

(statearr_44316_45343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (37))){
var state_44263__$1 = state_44263;
var statearr_44317_45344 = state_44263__$1;
(statearr_44317_45344[(2)] = null);

(statearr_44317_45344[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44264 === (8))){
var inst_44165 = (state_44263[(8)]);
var inst_44183 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44165);
var state_44263__$1 = state_44263;
var statearr_44318_45345 = state_44263__$1;
(statearr_44318_45345[(2)] = inst_44183);

(statearr_44318_45345[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__43388__auto__ = null;
var cljs$core$async$mix_$_state_machine__43388__auto____0 = (function (){
var statearr_44319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44319[(0)] = cljs$core$async$mix_$_state_machine__43388__auto__);

(statearr_44319[(1)] = (1));

return statearr_44319;
});
var cljs$core$async$mix_$_state_machine__43388__auto____1 = (function (state_44263){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44263);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44320){if((e44320 instanceof Object)){
var ex__43391__auto__ = e44320;
var statearr_44321_45346 = state_44263;
(statearr_44321_45346[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45347 = state_44263;
state_44263 = G__45347;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43388__auto__ = function(state_44263){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43388__auto____1.call(this,state_44263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43388__auto____0;
cljs$core$async$mix_$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43388__auto____1;
return cljs$core$async$mix_$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44322 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44322[(6)] = c__43454__auto___45252);

return statearr_44322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44324 = arguments.length;
switch (G__44324) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__44327 = arguments.length;
switch (G__44327) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44325_SHARP_){
if(cljs.core.truth_((p1__44325_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44325_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44325_SHARP_.call(null,topic)))){
return p1__44325_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44325_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44328 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44329){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44329 = meta44329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44330,meta44329__$1){
var self__ = this;
var _44330__$1 = this;
return (new cljs.core.async.t_cljs$core$async44328(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44329__$1));
}));

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44330){
var self__ = this;
var _44330__$1 = this;
return self__.meta44329;
}));

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44328.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44329","meta44329",753500584,null)], null);
}));

(cljs.core.async.t_cljs$core$async44328.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44328");

(cljs.core.async.t_cljs$core$async44328.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44328");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44328.
 */
cljs.core.async.__GT_t_cljs$core$async44328 = (function cljs$core$async$__GT_t_cljs$core$async44328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44329){
return (new cljs.core.async.t_cljs$core$async44328(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44329));
});

}

return (new cljs.core.async.t_cljs$core$async44328(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43454__auto___45350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44402){
var state_val_44403 = (state_44402[(1)]);
if((state_val_44403 === (7))){
var inst_44398 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
var statearr_44404_45351 = state_44402__$1;
(statearr_44404_45351[(2)] = inst_44398);

(statearr_44404_45351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (20))){
var state_44402__$1 = state_44402;
var statearr_44405_45352 = state_44402__$1;
(statearr_44405_45352[(2)] = null);

(statearr_44405_45352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (1))){
var state_44402__$1 = state_44402;
var statearr_44406_45353 = state_44402__$1;
(statearr_44406_45353[(2)] = null);

(statearr_44406_45353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (24))){
var inst_44381 = (state_44402[(7)]);
var inst_44390 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44381);
var state_44402__$1 = state_44402;
var statearr_44407_45354 = state_44402__$1;
(statearr_44407_45354[(2)] = inst_44390);

(statearr_44407_45354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (4))){
var inst_44333 = (state_44402[(8)]);
var inst_44333__$1 = (state_44402[(2)]);
var inst_44334 = (inst_44333__$1 == null);
var state_44402__$1 = (function (){var statearr_44408 = state_44402;
(statearr_44408[(8)] = inst_44333__$1);

return statearr_44408;
})();
if(cljs.core.truth_(inst_44334)){
var statearr_44409_45355 = state_44402__$1;
(statearr_44409_45355[(1)] = (5));

} else {
var statearr_44410_45356 = state_44402__$1;
(statearr_44410_45356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (15))){
var inst_44375 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
var statearr_44411_45357 = state_44402__$1;
(statearr_44411_45357[(2)] = inst_44375);

(statearr_44411_45357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (21))){
var inst_44395 = (state_44402[(2)]);
var state_44402__$1 = (function (){var statearr_44412 = state_44402;
(statearr_44412[(9)] = inst_44395);

return statearr_44412;
})();
var statearr_44413_45358 = state_44402__$1;
(statearr_44413_45358[(2)] = null);

(statearr_44413_45358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (13))){
var inst_44357 = (state_44402[(10)]);
var inst_44359 = cljs.core.chunked_seq_QMARK_(inst_44357);
var state_44402__$1 = state_44402;
if(inst_44359){
var statearr_44414_45359 = state_44402__$1;
(statearr_44414_45359[(1)] = (16));

} else {
var statearr_44415_45360 = state_44402__$1;
(statearr_44415_45360[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (22))){
var inst_44387 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
if(cljs.core.truth_(inst_44387)){
var statearr_44416_45361 = state_44402__$1;
(statearr_44416_45361[(1)] = (23));

} else {
var statearr_44417_45362 = state_44402__$1;
(statearr_44417_45362[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (6))){
var inst_44383 = (state_44402[(11)]);
var inst_44381 = (state_44402[(7)]);
var inst_44333 = (state_44402[(8)]);
var inst_44381__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44333) : topic_fn.call(null,inst_44333));
var inst_44382 = cljs.core.deref(mults);
var inst_44383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44382,inst_44381__$1);
var state_44402__$1 = (function (){var statearr_44418 = state_44402;
(statearr_44418[(11)] = inst_44383__$1);

(statearr_44418[(7)] = inst_44381__$1);

return statearr_44418;
})();
if(cljs.core.truth_(inst_44383__$1)){
var statearr_44419_45363 = state_44402__$1;
(statearr_44419_45363[(1)] = (19));

} else {
var statearr_44420_45364 = state_44402__$1;
(statearr_44420_45364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (25))){
var inst_44392 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
var statearr_44421_45365 = state_44402__$1;
(statearr_44421_45365[(2)] = inst_44392);

(statearr_44421_45365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (17))){
var inst_44357 = (state_44402[(10)]);
var inst_44366 = cljs.core.first(inst_44357);
var inst_44367 = cljs.core.async.muxch_STAR_(inst_44366);
var inst_44368 = cljs.core.async.close_BANG_(inst_44367);
var inst_44369 = cljs.core.next(inst_44357);
var inst_44343 = inst_44369;
var inst_44344 = null;
var inst_44345 = (0);
var inst_44346 = (0);
var state_44402__$1 = (function (){var statearr_44422 = state_44402;
(statearr_44422[(12)] = inst_44368);

(statearr_44422[(13)] = inst_44343);

(statearr_44422[(14)] = inst_44345);

(statearr_44422[(15)] = inst_44344);

(statearr_44422[(16)] = inst_44346);

return statearr_44422;
})();
var statearr_44423_45366 = state_44402__$1;
(statearr_44423_45366[(2)] = null);

(statearr_44423_45366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (3))){
var inst_44400 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44402__$1,inst_44400);
} else {
if((state_val_44403 === (12))){
var inst_44377 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
var statearr_44424_45367 = state_44402__$1;
(statearr_44424_45367[(2)] = inst_44377);

(statearr_44424_45367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (2))){
var state_44402__$1 = state_44402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44402__$1,(4),ch);
} else {
if((state_val_44403 === (23))){
var state_44402__$1 = state_44402;
var statearr_44425_45368 = state_44402__$1;
(statearr_44425_45368[(2)] = null);

(statearr_44425_45368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (19))){
var inst_44383 = (state_44402[(11)]);
var inst_44333 = (state_44402[(8)]);
var inst_44385 = cljs.core.async.muxch_STAR_(inst_44383);
var state_44402__$1 = state_44402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44402__$1,(22),inst_44385,inst_44333);
} else {
if((state_val_44403 === (11))){
var inst_44343 = (state_44402[(13)]);
var inst_44357 = (state_44402[(10)]);
var inst_44357__$1 = cljs.core.seq(inst_44343);
var state_44402__$1 = (function (){var statearr_44426 = state_44402;
(statearr_44426[(10)] = inst_44357__$1);

return statearr_44426;
})();
if(inst_44357__$1){
var statearr_44427_45369 = state_44402__$1;
(statearr_44427_45369[(1)] = (13));

} else {
var statearr_44428_45370 = state_44402__$1;
(statearr_44428_45370[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (9))){
var inst_44379 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
var statearr_44429_45371 = state_44402__$1;
(statearr_44429_45371[(2)] = inst_44379);

(statearr_44429_45371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (5))){
var inst_44340 = cljs.core.deref(mults);
var inst_44341 = cljs.core.vals(inst_44340);
var inst_44342 = cljs.core.seq(inst_44341);
var inst_44343 = inst_44342;
var inst_44344 = null;
var inst_44345 = (0);
var inst_44346 = (0);
var state_44402__$1 = (function (){var statearr_44430 = state_44402;
(statearr_44430[(13)] = inst_44343);

(statearr_44430[(14)] = inst_44345);

(statearr_44430[(15)] = inst_44344);

(statearr_44430[(16)] = inst_44346);

return statearr_44430;
})();
var statearr_44431_45372 = state_44402__$1;
(statearr_44431_45372[(2)] = null);

(statearr_44431_45372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (14))){
var state_44402__$1 = state_44402;
var statearr_44435_45373 = state_44402__$1;
(statearr_44435_45373[(2)] = null);

(statearr_44435_45373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (16))){
var inst_44357 = (state_44402[(10)]);
var inst_44361 = cljs.core.chunk_first(inst_44357);
var inst_44362 = cljs.core.chunk_rest(inst_44357);
var inst_44363 = cljs.core.count(inst_44361);
var inst_44343 = inst_44362;
var inst_44344 = inst_44361;
var inst_44345 = inst_44363;
var inst_44346 = (0);
var state_44402__$1 = (function (){var statearr_44436 = state_44402;
(statearr_44436[(13)] = inst_44343);

(statearr_44436[(14)] = inst_44345);

(statearr_44436[(15)] = inst_44344);

(statearr_44436[(16)] = inst_44346);

return statearr_44436;
})();
var statearr_44437_45374 = state_44402__$1;
(statearr_44437_45374[(2)] = null);

(statearr_44437_45374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (10))){
var inst_44343 = (state_44402[(13)]);
var inst_44345 = (state_44402[(14)]);
var inst_44344 = (state_44402[(15)]);
var inst_44346 = (state_44402[(16)]);
var inst_44351 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44344,inst_44346);
var inst_44352 = cljs.core.async.muxch_STAR_(inst_44351);
var inst_44353 = cljs.core.async.close_BANG_(inst_44352);
var inst_44354 = (inst_44346 + (1));
var tmp44432 = inst_44343;
var tmp44433 = inst_44345;
var tmp44434 = inst_44344;
var inst_44343__$1 = tmp44432;
var inst_44344__$1 = tmp44434;
var inst_44345__$1 = tmp44433;
var inst_44346__$1 = inst_44354;
var state_44402__$1 = (function (){var statearr_44438 = state_44402;
(statearr_44438[(13)] = inst_44343__$1);

(statearr_44438[(14)] = inst_44345__$1);

(statearr_44438[(17)] = inst_44353);

(statearr_44438[(15)] = inst_44344__$1);

(statearr_44438[(16)] = inst_44346__$1);

return statearr_44438;
})();
var statearr_44439_45375 = state_44402__$1;
(statearr_44439_45375[(2)] = null);

(statearr_44439_45375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (18))){
var inst_44372 = (state_44402[(2)]);
var state_44402__$1 = state_44402;
var statearr_44440_45376 = state_44402__$1;
(statearr_44440_45376[(2)] = inst_44372);

(statearr_44440_45376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44403 === (8))){
var inst_44345 = (state_44402[(14)]);
var inst_44346 = (state_44402[(16)]);
var inst_44348 = (inst_44346 < inst_44345);
var inst_44349 = inst_44348;
var state_44402__$1 = state_44402;
if(cljs.core.truth_(inst_44349)){
var statearr_44441_45377 = state_44402__$1;
(statearr_44441_45377[(1)] = (10));

} else {
var statearr_44442_45378 = state_44402__$1;
(statearr_44442_45378[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44443[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44443[(1)] = (1));

return statearr_44443;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44402){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44402);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44444){if((e44444 instanceof Object)){
var ex__43391__auto__ = e44444;
var statearr_44445_45379 = state_44402;
(statearr_44445_45379[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45380 = state_44402;
state_44402 = G__45380;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44446 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44446[(6)] = c__43454__auto___45350);

return statearr_44446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44448 = arguments.length;
switch (G__44448) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44450 = arguments.length;
switch (G__44450) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__44452 = arguments.length;
switch (G__44452) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43454__auto___45388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44491){
var state_val_44492 = (state_44491[(1)]);
if((state_val_44492 === (7))){
var state_44491__$1 = state_44491;
var statearr_44493_45389 = state_44491__$1;
(statearr_44493_45389[(2)] = null);

(statearr_44493_45389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (1))){
var state_44491__$1 = state_44491;
var statearr_44494_45390 = state_44491__$1;
(statearr_44494_45390[(2)] = null);

(statearr_44494_45390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (4))){
var inst_44455 = (state_44491[(7)]);
var inst_44457 = (inst_44455 < cnt);
var state_44491__$1 = state_44491;
if(cljs.core.truth_(inst_44457)){
var statearr_44495_45391 = state_44491__$1;
(statearr_44495_45391[(1)] = (6));

} else {
var statearr_44496_45392 = state_44491__$1;
(statearr_44496_45392[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (15))){
var inst_44487 = (state_44491[(2)]);
var state_44491__$1 = state_44491;
var statearr_44497_45393 = state_44491__$1;
(statearr_44497_45393[(2)] = inst_44487);

(statearr_44497_45393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (13))){
var inst_44480 = cljs.core.async.close_BANG_(out);
var state_44491__$1 = state_44491;
var statearr_44498_45394 = state_44491__$1;
(statearr_44498_45394[(2)] = inst_44480);

(statearr_44498_45394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (6))){
var state_44491__$1 = state_44491;
var statearr_44499_45397 = state_44491__$1;
(statearr_44499_45397[(2)] = null);

(statearr_44499_45397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (3))){
var inst_44489 = (state_44491[(2)]);
var state_44491__$1 = state_44491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44491__$1,inst_44489);
} else {
if((state_val_44492 === (12))){
var inst_44477 = (state_44491[(8)]);
var inst_44477__$1 = (state_44491[(2)]);
var inst_44478 = cljs.core.some(cljs.core.nil_QMARK_,inst_44477__$1);
var state_44491__$1 = (function (){var statearr_44500 = state_44491;
(statearr_44500[(8)] = inst_44477__$1);

return statearr_44500;
})();
if(cljs.core.truth_(inst_44478)){
var statearr_44501_45398 = state_44491__$1;
(statearr_44501_45398[(1)] = (13));

} else {
var statearr_44502_45399 = state_44491__$1;
(statearr_44502_45399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (2))){
var inst_44454 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44455 = (0);
var state_44491__$1 = (function (){var statearr_44503 = state_44491;
(statearr_44503[(7)] = inst_44455);

(statearr_44503[(9)] = inst_44454);

return statearr_44503;
})();
var statearr_44504_45400 = state_44491__$1;
(statearr_44504_45400[(2)] = null);

(statearr_44504_45400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (11))){
var inst_44455 = (state_44491[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44491,(10),Object,null,(9));
var inst_44464 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44455) : chs__$1.call(null,inst_44455));
var inst_44465 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44455) : done.call(null,inst_44455));
var inst_44466 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44464,inst_44465);
var state_44491__$1 = state_44491;
var statearr_44505_45401 = state_44491__$1;
(statearr_44505_45401[(2)] = inst_44466);


cljs.core.async.impl.ioc_helpers.process_exception(state_44491__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (9))){
var inst_44455 = (state_44491[(7)]);
var inst_44468 = (state_44491[(2)]);
var inst_44469 = (inst_44455 + (1));
var inst_44455__$1 = inst_44469;
var state_44491__$1 = (function (){var statearr_44506 = state_44491;
(statearr_44506[(7)] = inst_44455__$1);

(statearr_44506[(10)] = inst_44468);

return statearr_44506;
})();
var statearr_44507_45404 = state_44491__$1;
(statearr_44507_45404[(2)] = null);

(statearr_44507_45404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (5))){
var inst_44475 = (state_44491[(2)]);
var state_44491__$1 = (function (){var statearr_44508 = state_44491;
(statearr_44508[(11)] = inst_44475);

return statearr_44508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44491__$1,(12),dchan);
} else {
if((state_val_44492 === (14))){
var inst_44477 = (state_44491[(8)]);
var inst_44482 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44477);
var state_44491__$1 = state_44491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44491__$1,(16),out,inst_44482);
} else {
if((state_val_44492 === (16))){
var inst_44484 = (state_44491[(2)]);
var state_44491__$1 = (function (){var statearr_44509 = state_44491;
(statearr_44509[(12)] = inst_44484);

return statearr_44509;
})();
var statearr_44510_45405 = state_44491__$1;
(statearr_44510_45405[(2)] = null);

(statearr_44510_45405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (10))){
var inst_44459 = (state_44491[(2)]);
var inst_44460 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44491__$1 = (function (){var statearr_44511 = state_44491;
(statearr_44511[(13)] = inst_44459);

return statearr_44511;
})();
var statearr_44512_45408 = state_44491__$1;
(statearr_44512_45408[(2)] = inst_44460);


cljs.core.async.impl.ioc_helpers.process_exception(state_44491__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44492 === (8))){
var inst_44473 = (state_44491[(2)]);
var state_44491__$1 = state_44491;
var statearr_44513_45409 = state_44491__$1;
(statearr_44513_45409[(2)] = inst_44473);

(statearr_44513_45409[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44514[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44514[(1)] = (1));

return statearr_44514;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44491){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44491);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44515){if((e44515 instanceof Object)){
var ex__43391__auto__ = e44515;
var statearr_44516_45410 = state_44491;
(statearr_44516_45410[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45411 = state_44491;
state_44491 = G__45411;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44517 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44517[(6)] = c__43454__auto___45388);

return statearr_44517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44520 = arguments.length;
switch (G__44520) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44552){
var state_val_44553 = (state_44552[(1)]);
if((state_val_44553 === (7))){
var inst_44532 = (state_44552[(7)]);
var inst_44531 = (state_44552[(8)]);
var inst_44531__$1 = (state_44552[(2)]);
var inst_44532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44531__$1,(0),null);
var inst_44533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44531__$1,(1),null);
var inst_44534 = (inst_44532__$1 == null);
var state_44552__$1 = (function (){var statearr_44554 = state_44552;
(statearr_44554[(7)] = inst_44532__$1);

(statearr_44554[(9)] = inst_44533);

(statearr_44554[(8)] = inst_44531__$1);

return statearr_44554;
})();
if(cljs.core.truth_(inst_44534)){
var statearr_44555_45414 = state_44552__$1;
(statearr_44555_45414[(1)] = (8));

} else {
var statearr_44556_45415 = state_44552__$1;
(statearr_44556_45415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (1))){
var inst_44521 = cljs.core.vec(chs);
var inst_44522 = inst_44521;
var state_44552__$1 = (function (){var statearr_44557 = state_44552;
(statearr_44557[(10)] = inst_44522);

return statearr_44557;
})();
var statearr_44558_45416 = state_44552__$1;
(statearr_44558_45416[(2)] = null);

(statearr_44558_45416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (4))){
var inst_44522 = (state_44552[(10)]);
var state_44552__$1 = state_44552;
return cljs.core.async.ioc_alts_BANG_(state_44552__$1,(7),inst_44522);
} else {
if((state_val_44553 === (6))){
var inst_44548 = (state_44552[(2)]);
var state_44552__$1 = state_44552;
var statearr_44559_45417 = state_44552__$1;
(statearr_44559_45417[(2)] = inst_44548);

(statearr_44559_45417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (3))){
var inst_44550 = (state_44552[(2)]);
var state_44552__$1 = state_44552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44552__$1,inst_44550);
} else {
if((state_val_44553 === (2))){
var inst_44522 = (state_44552[(10)]);
var inst_44524 = cljs.core.count(inst_44522);
var inst_44525 = (inst_44524 > (0));
var state_44552__$1 = state_44552;
if(cljs.core.truth_(inst_44525)){
var statearr_44561_45418 = state_44552__$1;
(statearr_44561_45418[(1)] = (4));

} else {
var statearr_44562_45419 = state_44552__$1;
(statearr_44562_45419[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (11))){
var inst_44522 = (state_44552[(10)]);
var inst_44541 = (state_44552[(2)]);
var tmp44560 = inst_44522;
var inst_44522__$1 = tmp44560;
var state_44552__$1 = (function (){var statearr_44563 = state_44552;
(statearr_44563[(11)] = inst_44541);

(statearr_44563[(10)] = inst_44522__$1);

return statearr_44563;
})();
var statearr_44564_45420 = state_44552__$1;
(statearr_44564_45420[(2)] = null);

(statearr_44564_45420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (9))){
var inst_44532 = (state_44552[(7)]);
var state_44552__$1 = state_44552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44552__$1,(11),out,inst_44532);
} else {
if((state_val_44553 === (5))){
var inst_44546 = cljs.core.async.close_BANG_(out);
var state_44552__$1 = state_44552;
var statearr_44565_45421 = state_44552__$1;
(statearr_44565_45421[(2)] = inst_44546);

(statearr_44565_45421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (10))){
var inst_44544 = (state_44552[(2)]);
var state_44552__$1 = state_44552;
var statearr_44566_45422 = state_44552__$1;
(statearr_44566_45422[(2)] = inst_44544);

(statearr_44566_45422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (8))){
var inst_44532 = (state_44552[(7)]);
var inst_44533 = (state_44552[(9)]);
var inst_44522 = (state_44552[(10)]);
var inst_44531 = (state_44552[(8)]);
var inst_44536 = (function (){var cs = inst_44522;
var vec__44527 = inst_44531;
var v = inst_44532;
var c = inst_44533;
return (function (p1__44518_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44518_SHARP_);
});
})();
var inst_44537 = cljs.core.filterv(inst_44536,inst_44522);
var inst_44522__$1 = inst_44537;
var state_44552__$1 = (function (){var statearr_44567 = state_44552;
(statearr_44567[(10)] = inst_44522__$1);

return statearr_44567;
})();
var statearr_44568_45423 = state_44552__$1;
(statearr_44568_45423[(2)] = null);

(statearr_44568_45423[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44569 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44569[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44569[(1)] = (1));

return statearr_44569;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44552){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44552);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44570){if((e44570 instanceof Object)){
var ex__43391__auto__ = e44570;
var statearr_44571_45424 = state_44552;
(statearr_44571_45424[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45426 = state_44552;
state_44552 = G__45426;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44572 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44572[(6)] = c__43454__auto___45413);

return statearr_44572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44574 = arguments.length;
switch (G__44574) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44598){
var state_val_44599 = (state_44598[(1)]);
if((state_val_44599 === (7))){
var inst_44580 = (state_44598[(7)]);
var inst_44580__$1 = (state_44598[(2)]);
var inst_44581 = (inst_44580__$1 == null);
var inst_44582 = cljs.core.not(inst_44581);
var state_44598__$1 = (function (){var statearr_44600 = state_44598;
(statearr_44600[(7)] = inst_44580__$1);

return statearr_44600;
})();
if(inst_44582){
var statearr_44601_45430 = state_44598__$1;
(statearr_44601_45430[(1)] = (8));

} else {
var statearr_44602_45431 = state_44598__$1;
(statearr_44602_45431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (1))){
var inst_44575 = (0);
var state_44598__$1 = (function (){var statearr_44603 = state_44598;
(statearr_44603[(8)] = inst_44575);

return statearr_44603;
})();
var statearr_44604_45435 = state_44598__$1;
(statearr_44604_45435[(2)] = null);

(statearr_44604_45435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (4))){
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44598__$1,(7),ch);
} else {
if((state_val_44599 === (6))){
var inst_44593 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44605_45436 = state_44598__$1;
(statearr_44605_45436[(2)] = inst_44593);

(statearr_44605_45436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (3))){
var inst_44595 = (state_44598[(2)]);
var inst_44596 = cljs.core.async.close_BANG_(out);
var state_44598__$1 = (function (){var statearr_44606 = state_44598;
(statearr_44606[(9)] = inst_44595);

return statearr_44606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44598__$1,inst_44596);
} else {
if((state_val_44599 === (2))){
var inst_44575 = (state_44598[(8)]);
var inst_44577 = (inst_44575 < n);
var state_44598__$1 = state_44598;
if(cljs.core.truth_(inst_44577)){
var statearr_44607_45437 = state_44598__$1;
(statearr_44607_45437[(1)] = (4));

} else {
var statearr_44608_45439 = state_44598__$1;
(statearr_44608_45439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (11))){
var inst_44575 = (state_44598[(8)]);
var inst_44585 = (state_44598[(2)]);
var inst_44586 = (inst_44575 + (1));
var inst_44575__$1 = inst_44586;
var state_44598__$1 = (function (){var statearr_44609 = state_44598;
(statearr_44609[(8)] = inst_44575__$1);

(statearr_44609[(10)] = inst_44585);

return statearr_44609;
})();
var statearr_44610_45440 = state_44598__$1;
(statearr_44610_45440[(2)] = null);

(statearr_44610_45440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (9))){
var state_44598__$1 = state_44598;
var statearr_44611_45441 = state_44598__$1;
(statearr_44611_45441[(2)] = null);

(statearr_44611_45441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (5))){
var state_44598__$1 = state_44598;
var statearr_44612_45444 = state_44598__$1;
(statearr_44612_45444[(2)] = null);

(statearr_44612_45444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (10))){
var inst_44590 = (state_44598[(2)]);
var state_44598__$1 = state_44598;
var statearr_44613_45446 = state_44598__$1;
(statearr_44613_45446[(2)] = inst_44590);

(statearr_44613_45446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44599 === (8))){
var inst_44580 = (state_44598[(7)]);
var state_44598__$1 = state_44598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44598__$1,(11),out,inst_44580);
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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44614[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44614[(1)] = (1));

return statearr_44614;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44598){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44598);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44615){if((e44615 instanceof Object)){
var ex__43391__auto__ = e44615;
var statearr_44616_45447 = state_44598;
(statearr_44616_45447[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45448 = state_44598;
state_44598 = G__45448;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44617 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44617[(6)] = c__43454__auto___45429);

return statearr_44617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44619 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44619 = (function (f,ch,meta44620){
this.f = f;
this.ch = ch;
this.meta44620 = meta44620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44621,meta44620__$1){
var self__ = this;
var _44621__$1 = this;
return (new cljs.core.async.t_cljs$core$async44619(self__.f,self__.ch,meta44620__$1));
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44621){
var self__ = this;
var _44621__$1 = this;
return self__.meta44620;
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44622 = (function (f,ch,meta44620,_,fn1,meta44623){
this.f = f;
this.ch = ch;
this.meta44620 = meta44620;
this._ = _;
this.fn1 = fn1;
this.meta44623 = meta44623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44624,meta44623__$1){
var self__ = this;
var _44624__$1 = this;
return (new cljs.core.async.t_cljs$core$async44622(self__.f,self__.ch,self__.meta44620,self__._,self__.fn1,meta44623__$1));
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44624){
var self__ = this;
var _44624__$1 = this;
return self__.meta44623;
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44618_SHARP_){
var G__44625 = (((p1__44618_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44618_SHARP_) : self__.f.call(null,p1__44618_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44625) : f1.call(null,G__44625));
});
}));

(cljs.core.async.t_cljs$core$async44622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44620","meta44620",-117290288,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44619","cljs.core.async/t_cljs$core$async44619",-2080622153,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44623","meta44623",-736380125,null)], null);
}));

(cljs.core.async.t_cljs$core$async44622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44622");

(cljs.core.async.t_cljs$core$async44622.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44622.
 */
cljs.core.async.__GT_t_cljs$core$async44622 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44622(f__$1,ch__$1,meta44620__$1,___$2,fn1__$1,meta44623){
return (new cljs.core.async.t_cljs$core$async44622(f__$1,ch__$1,meta44620__$1,___$2,fn1__$1,meta44623));
});

}

return (new cljs.core.async.t_cljs$core$async44622(self__.f,self__.ch,self__.meta44620,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44626 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44626) : self__.f.call(null,G__44626));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44620","meta44620",-117290288,null)], null);
}));

(cljs.core.async.t_cljs$core$async44619.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44619");

(cljs.core.async.t_cljs$core$async44619.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44619");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44619.
 */
cljs.core.async.__GT_t_cljs$core$async44619 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44619(f__$1,ch__$1,meta44620){
return (new cljs.core.async.t_cljs$core$async44619(f__$1,ch__$1,meta44620));
});

}

return (new cljs.core.async.t_cljs$core$async44619(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44627 = (function (f,ch,meta44628){
this.f = f;
this.ch = ch;
this.meta44628 = meta44628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44629,meta44628__$1){
var self__ = this;
var _44629__$1 = this;
return (new cljs.core.async.t_cljs$core$async44627(self__.f,self__.ch,meta44628__$1));
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44629){
var self__ = this;
var _44629__$1 = this;
return self__.meta44628;
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44628","meta44628",-490455192,null)], null);
}));

(cljs.core.async.t_cljs$core$async44627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44627");

(cljs.core.async.t_cljs$core$async44627.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44627.
 */
cljs.core.async.__GT_t_cljs$core$async44627 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44627(f__$1,ch__$1,meta44628){
return (new cljs.core.async.t_cljs$core$async44627(f__$1,ch__$1,meta44628));
});

}

return (new cljs.core.async.t_cljs$core$async44627(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44630 = (function (p,ch,meta44631){
this.p = p;
this.ch = ch;
this.meta44631 = meta44631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44632,meta44631__$1){
var self__ = this;
var _44632__$1 = this;
return (new cljs.core.async.t_cljs$core$async44630(self__.p,self__.ch,meta44631__$1));
}));

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44632){
var self__ = this;
var _44632__$1 = this;
return self__.meta44631;
}));

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44631","meta44631",1741051038,null)], null);
}));

(cljs.core.async.t_cljs$core$async44630.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44630");

(cljs.core.async.t_cljs$core$async44630.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44630");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44630.
 */
cljs.core.async.__GT_t_cljs$core$async44630 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44630(p__$1,ch__$1,meta44631){
return (new cljs.core.async.t_cljs$core$async44630(p__$1,ch__$1,meta44631));
});

}

return (new cljs.core.async.t_cljs$core$async44630(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44634 = arguments.length;
switch (G__44634) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44655){
var state_val_44656 = (state_44655[(1)]);
if((state_val_44656 === (7))){
var inst_44651 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44657_45451 = state_44655__$1;
(statearr_44657_45451[(2)] = inst_44651);

(statearr_44657_45451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (1))){
var state_44655__$1 = state_44655;
var statearr_44658_45452 = state_44655__$1;
(statearr_44658_45452[(2)] = null);

(statearr_44658_45452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (4))){
var inst_44637 = (state_44655[(7)]);
var inst_44637__$1 = (state_44655[(2)]);
var inst_44638 = (inst_44637__$1 == null);
var state_44655__$1 = (function (){var statearr_44659 = state_44655;
(statearr_44659[(7)] = inst_44637__$1);

return statearr_44659;
})();
if(cljs.core.truth_(inst_44638)){
var statearr_44660_45453 = state_44655__$1;
(statearr_44660_45453[(1)] = (5));

} else {
var statearr_44661_45454 = state_44655__$1;
(statearr_44661_45454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (6))){
var inst_44637 = (state_44655[(7)]);
var inst_44642 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44637) : p.call(null,inst_44637));
var state_44655__$1 = state_44655;
if(cljs.core.truth_(inst_44642)){
var statearr_44662_45455 = state_44655__$1;
(statearr_44662_45455[(1)] = (8));

} else {
var statearr_44663_45456 = state_44655__$1;
(statearr_44663_45456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (3))){
var inst_44653 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44655__$1,inst_44653);
} else {
if((state_val_44656 === (2))){
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44655__$1,(4),ch);
} else {
if((state_val_44656 === (11))){
var inst_44645 = (state_44655[(2)]);
var state_44655__$1 = state_44655;
var statearr_44664_45457 = state_44655__$1;
(statearr_44664_45457[(2)] = inst_44645);

(statearr_44664_45457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (9))){
var state_44655__$1 = state_44655;
var statearr_44665_45458 = state_44655__$1;
(statearr_44665_45458[(2)] = null);

(statearr_44665_45458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (5))){
var inst_44640 = cljs.core.async.close_BANG_(out);
var state_44655__$1 = state_44655;
var statearr_44666_45459 = state_44655__$1;
(statearr_44666_45459[(2)] = inst_44640);

(statearr_44666_45459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (10))){
var inst_44648 = (state_44655[(2)]);
var state_44655__$1 = (function (){var statearr_44667 = state_44655;
(statearr_44667[(8)] = inst_44648);

return statearr_44667;
})();
var statearr_44668_45460 = state_44655__$1;
(statearr_44668_45460[(2)] = null);

(statearr_44668_45460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44656 === (8))){
var inst_44637 = (state_44655[(7)]);
var state_44655__$1 = state_44655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44655__$1,(11),out,inst_44637);
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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44669 = [null,null,null,null,null,null,null,null,null];
(statearr_44669[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44669[(1)] = (1));

return statearr_44669;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44655){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44655);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44670){if((e44670 instanceof Object)){
var ex__43391__auto__ = e44670;
var statearr_44671_45461 = state_44655;
(statearr_44671_45461[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45462 = state_44655;
state_44655 = G__45462;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44672 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44672[(6)] = c__43454__auto___45450);

return statearr_44672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44674 = arguments.length;
switch (G__44674) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44736){
var state_val_44737 = (state_44736[(1)]);
if((state_val_44737 === (7))){
var inst_44732 = (state_44736[(2)]);
var state_44736__$1 = state_44736;
var statearr_44738_45464 = state_44736__$1;
(statearr_44738_45464[(2)] = inst_44732);

(statearr_44738_45464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (20))){
var inst_44702 = (state_44736[(7)]);
var inst_44713 = (state_44736[(2)]);
var inst_44714 = cljs.core.next(inst_44702);
var inst_44688 = inst_44714;
var inst_44689 = null;
var inst_44690 = (0);
var inst_44691 = (0);
var state_44736__$1 = (function (){var statearr_44739 = state_44736;
(statearr_44739[(8)] = inst_44688);

(statearr_44739[(9)] = inst_44690);

(statearr_44739[(10)] = inst_44691);

(statearr_44739[(11)] = inst_44713);

(statearr_44739[(12)] = inst_44689);

return statearr_44739;
})();
var statearr_44740_45465 = state_44736__$1;
(statearr_44740_45465[(2)] = null);

(statearr_44740_45465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (1))){
var state_44736__$1 = state_44736;
var statearr_44741_45466 = state_44736__$1;
(statearr_44741_45466[(2)] = null);

(statearr_44741_45466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (4))){
var inst_44677 = (state_44736[(13)]);
var inst_44677__$1 = (state_44736[(2)]);
var inst_44678 = (inst_44677__$1 == null);
var state_44736__$1 = (function (){var statearr_44742 = state_44736;
(statearr_44742[(13)] = inst_44677__$1);

return statearr_44742;
})();
if(cljs.core.truth_(inst_44678)){
var statearr_44743_45467 = state_44736__$1;
(statearr_44743_45467[(1)] = (5));

} else {
var statearr_44744_45468 = state_44736__$1;
(statearr_44744_45468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (15))){
var state_44736__$1 = state_44736;
var statearr_44748_45469 = state_44736__$1;
(statearr_44748_45469[(2)] = null);

(statearr_44748_45469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (21))){
var state_44736__$1 = state_44736;
var statearr_44749_45470 = state_44736__$1;
(statearr_44749_45470[(2)] = null);

(statearr_44749_45470[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (13))){
var inst_44688 = (state_44736[(8)]);
var inst_44690 = (state_44736[(9)]);
var inst_44691 = (state_44736[(10)]);
var inst_44689 = (state_44736[(12)]);
var inst_44698 = (state_44736[(2)]);
var inst_44699 = (inst_44691 + (1));
var tmp44745 = inst_44688;
var tmp44746 = inst_44690;
var tmp44747 = inst_44689;
var inst_44688__$1 = tmp44745;
var inst_44689__$1 = tmp44747;
var inst_44690__$1 = tmp44746;
var inst_44691__$1 = inst_44699;
var state_44736__$1 = (function (){var statearr_44750 = state_44736;
(statearr_44750[(14)] = inst_44698);

(statearr_44750[(8)] = inst_44688__$1);

(statearr_44750[(9)] = inst_44690__$1);

(statearr_44750[(10)] = inst_44691__$1);

(statearr_44750[(12)] = inst_44689__$1);

return statearr_44750;
})();
var statearr_44751_45471 = state_44736__$1;
(statearr_44751_45471[(2)] = null);

(statearr_44751_45471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (22))){
var state_44736__$1 = state_44736;
var statearr_44752_45472 = state_44736__$1;
(statearr_44752_45472[(2)] = null);

(statearr_44752_45472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (6))){
var inst_44677 = (state_44736[(13)]);
var inst_44686 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44677) : f.call(null,inst_44677));
var inst_44687 = cljs.core.seq(inst_44686);
var inst_44688 = inst_44687;
var inst_44689 = null;
var inst_44690 = (0);
var inst_44691 = (0);
var state_44736__$1 = (function (){var statearr_44753 = state_44736;
(statearr_44753[(8)] = inst_44688);

(statearr_44753[(9)] = inst_44690);

(statearr_44753[(10)] = inst_44691);

(statearr_44753[(12)] = inst_44689);

return statearr_44753;
})();
var statearr_44754_45473 = state_44736__$1;
(statearr_44754_45473[(2)] = null);

(statearr_44754_45473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (17))){
var inst_44702 = (state_44736[(7)]);
var inst_44706 = cljs.core.chunk_first(inst_44702);
var inst_44707 = cljs.core.chunk_rest(inst_44702);
var inst_44708 = cljs.core.count(inst_44706);
var inst_44688 = inst_44707;
var inst_44689 = inst_44706;
var inst_44690 = inst_44708;
var inst_44691 = (0);
var state_44736__$1 = (function (){var statearr_44755 = state_44736;
(statearr_44755[(8)] = inst_44688);

(statearr_44755[(9)] = inst_44690);

(statearr_44755[(10)] = inst_44691);

(statearr_44755[(12)] = inst_44689);

return statearr_44755;
})();
var statearr_44756_45474 = state_44736__$1;
(statearr_44756_45474[(2)] = null);

(statearr_44756_45474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (3))){
var inst_44734 = (state_44736[(2)]);
var state_44736__$1 = state_44736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44736__$1,inst_44734);
} else {
if((state_val_44737 === (12))){
var inst_44722 = (state_44736[(2)]);
var state_44736__$1 = state_44736;
var statearr_44757_45475 = state_44736__$1;
(statearr_44757_45475[(2)] = inst_44722);

(statearr_44757_45475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (2))){
var state_44736__$1 = state_44736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44736__$1,(4),in$);
} else {
if((state_val_44737 === (23))){
var inst_44730 = (state_44736[(2)]);
var state_44736__$1 = state_44736;
var statearr_44758_45476 = state_44736__$1;
(statearr_44758_45476[(2)] = inst_44730);

(statearr_44758_45476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (19))){
var inst_44717 = (state_44736[(2)]);
var state_44736__$1 = state_44736;
var statearr_44759_45477 = state_44736__$1;
(statearr_44759_45477[(2)] = inst_44717);

(statearr_44759_45477[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (11))){
var inst_44688 = (state_44736[(8)]);
var inst_44702 = (state_44736[(7)]);
var inst_44702__$1 = cljs.core.seq(inst_44688);
var state_44736__$1 = (function (){var statearr_44760 = state_44736;
(statearr_44760[(7)] = inst_44702__$1);

return statearr_44760;
})();
if(inst_44702__$1){
var statearr_44761_45478 = state_44736__$1;
(statearr_44761_45478[(1)] = (14));

} else {
var statearr_44762_45479 = state_44736__$1;
(statearr_44762_45479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (9))){
var inst_44724 = (state_44736[(2)]);
var inst_44725 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44736__$1 = (function (){var statearr_44763 = state_44736;
(statearr_44763[(15)] = inst_44724);

return statearr_44763;
})();
if(cljs.core.truth_(inst_44725)){
var statearr_44764_45480 = state_44736__$1;
(statearr_44764_45480[(1)] = (21));

} else {
var statearr_44765_45481 = state_44736__$1;
(statearr_44765_45481[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (5))){
var inst_44680 = cljs.core.async.close_BANG_(out);
var state_44736__$1 = state_44736;
var statearr_44766_45482 = state_44736__$1;
(statearr_44766_45482[(2)] = inst_44680);

(statearr_44766_45482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (14))){
var inst_44702 = (state_44736[(7)]);
var inst_44704 = cljs.core.chunked_seq_QMARK_(inst_44702);
var state_44736__$1 = state_44736;
if(inst_44704){
var statearr_44767_45483 = state_44736__$1;
(statearr_44767_45483[(1)] = (17));

} else {
var statearr_44768_45484 = state_44736__$1;
(statearr_44768_45484[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (16))){
var inst_44720 = (state_44736[(2)]);
var state_44736__$1 = state_44736;
var statearr_44769_45485 = state_44736__$1;
(statearr_44769_45485[(2)] = inst_44720);

(statearr_44769_45485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44737 === (10))){
var inst_44691 = (state_44736[(10)]);
var inst_44689 = (state_44736[(12)]);
var inst_44696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44689,inst_44691);
var state_44736__$1 = state_44736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44736__$1,(13),out,inst_44696);
} else {
if((state_val_44737 === (18))){
var inst_44702 = (state_44736[(7)]);
var inst_44711 = cljs.core.first(inst_44702);
var state_44736__$1 = state_44736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44736__$1,(20),out,inst_44711);
} else {
if((state_val_44737 === (8))){
var inst_44690 = (state_44736[(9)]);
var inst_44691 = (state_44736[(10)]);
var inst_44693 = (inst_44691 < inst_44690);
var inst_44694 = inst_44693;
var state_44736__$1 = state_44736;
if(cljs.core.truth_(inst_44694)){
var statearr_44770_45486 = state_44736__$1;
(statearr_44770_45486[(1)] = (10));

} else {
var statearr_44771_45487 = state_44736__$1;
(statearr_44771_45487[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43388__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43388__auto____0 = (function (){
var statearr_44772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44772[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43388__auto__);

(statearr_44772[(1)] = (1));

return statearr_44772;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43388__auto____1 = (function (state_44736){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44736);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44773){if((e44773 instanceof Object)){
var ex__43391__auto__ = e44773;
var statearr_44774_45491 = state_44736;
(statearr_44774_45491[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45492 = state_44736;
state_44736 = G__45492;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43388__auto__ = function(state_44736){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43388__auto____1.call(this,state_44736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43388__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43388__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44775 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44775[(6)] = c__43454__auto__);

return statearr_44775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44777 = arguments.length;
switch (G__44777) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44779 = arguments.length;
switch (G__44779) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44781 = arguments.length;
switch (G__44781) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44805){
var state_val_44806 = (state_44805[(1)]);
if((state_val_44806 === (7))){
var inst_44800 = (state_44805[(2)]);
var state_44805__$1 = state_44805;
var statearr_44807_45499 = state_44805__$1;
(statearr_44807_45499[(2)] = inst_44800);

(statearr_44807_45499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (1))){
var inst_44782 = null;
var state_44805__$1 = (function (){var statearr_44808 = state_44805;
(statearr_44808[(7)] = inst_44782);

return statearr_44808;
})();
var statearr_44809_45500 = state_44805__$1;
(statearr_44809_45500[(2)] = null);

(statearr_44809_45500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (4))){
var inst_44785 = (state_44805[(8)]);
var inst_44785__$1 = (state_44805[(2)]);
var inst_44786 = (inst_44785__$1 == null);
var inst_44787 = cljs.core.not(inst_44786);
var state_44805__$1 = (function (){var statearr_44810 = state_44805;
(statearr_44810[(8)] = inst_44785__$1);

return statearr_44810;
})();
if(inst_44787){
var statearr_44811_45501 = state_44805__$1;
(statearr_44811_45501[(1)] = (5));

} else {
var statearr_44812_45502 = state_44805__$1;
(statearr_44812_45502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (6))){
var state_44805__$1 = state_44805;
var statearr_44813_45503 = state_44805__$1;
(statearr_44813_45503[(2)] = null);

(statearr_44813_45503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (3))){
var inst_44802 = (state_44805[(2)]);
var inst_44803 = cljs.core.async.close_BANG_(out);
var state_44805__$1 = (function (){var statearr_44814 = state_44805;
(statearr_44814[(9)] = inst_44802);

return statearr_44814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44805__$1,inst_44803);
} else {
if((state_val_44806 === (2))){
var state_44805__$1 = state_44805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44805__$1,(4),ch);
} else {
if((state_val_44806 === (11))){
var inst_44785 = (state_44805[(8)]);
var inst_44794 = (state_44805[(2)]);
var inst_44782 = inst_44785;
var state_44805__$1 = (function (){var statearr_44815 = state_44805;
(statearr_44815[(10)] = inst_44794);

(statearr_44815[(7)] = inst_44782);

return statearr_44815;
})();
var statearr_44816_45504 = state_44805__$1;
(statearr_44816_45504[(2)] = null);

(statearr_44816_45504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (9))){
var inst_44785 = (state_44805[(8)]);
var state_44805__$1 = state_44805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44805__$1,(11),out,inst_44785);
} else {
if((state_val_44806 === (5))){
var inst_44785 = (state_44805[(8)]);
var inst_44782 = (state_44805[(7)]);
var inst_44789 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44785,inst_44782);
var state_44805__$1 = state_44805;
if(inst_44789){
var statearr_44818_45505 = state_44805__$1;
(statearr_44818_45505[(1)] = (8));

} else {
var statearr_44819_45506 = state_44805__$1;
(statearr_44819_45506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (10))){
var inst_44797 = (state_44805[(2)]);
var state_44805__$1 = state_44805;
var statearr_44820_45507 = state_44805__$1;
(statearr_44820_45507[(2)] = inst_44797);

(statearr_44820_45507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44806 === (8))){
var inst_44782 = (state_44805[(7)]);
var tmp44817 = inst_44782;
var inst_44782__$1 = tmp44817;
var state_44805__$1 = (function (){var statearr_44821 = state_44805;
(statearr_44821[(7)] = inst_44782__$1);

return statearr_44821;
})();
var statearr_44822_45508 = state_44805__$1;
(statearr_44822_45508[(2)] = null);

(statearr_44822_45508[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44823 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44823[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44823[(1)] = (1));

return statearr_44823;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44805){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44805);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44824){if((e44824 instanceof Object)){
var ex__43391__auto__ = e44824;
var statearr_44825_45509 = state_44805;
(statearr_44825_45509[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45511 = state_44805;
state_44805 = G__45511;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44826 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44826[(6)] = c__43454__auto___45498);

return statearr_44826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44828 = arguments.length;
switch (G__44828) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44866){
var state_val_44867 = (state_44866[(1)]);
if((state_val_44867 === (7))){
var inst_44862 = (state_44866[(2)]);
var state_44866__$1 = state_44866;
var statearr_44868_45514 = state_44866__$1;
(statearr_44868_45514[(2)] = inst_44862);

(statearr_44868_45514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (1))){
var inst_44829 = (new Array(n));
var inst_44830 = inst_44829;
var inst_44831 = (0);
var state_44866__$1 = (function (){var statearr_44869 = state_44866;
(statearr_44869[(7)] = inst_44831);

(statearr_44869[(8)] = inst_44830);

return statearr_44869;
})();
var statearr_44870_45515 = state_44866__$1;
(statearr_44870_45515[(2)] = null);

(statearr_44870_45515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (4))){
var inst_44834 = (state_44866[(9)]);
var inst_44834__$1 = (state_44866[(2)]);
var inst_44835 = (inst_44834__$1 == null);
var inst_44836 = cljs.core.not(inst_44835);
var state_44866__$1 = (function (){var statearr_44871 = state_44866;
(statearr_44871[(9)] = inst_44834__$1);

return statearr_44871;
})();
if(inst_44836){
var statearr_44872_45516 = state_44866__$1;
(statearr_44872_45516[(1)] = (5));

} else {
var statearr_44873_45517 = state_44866__$1;
(statearr_44873_45517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (15))){
var inst_44856 = (state_44866[(2)]);
var state_44866__$1 = state_44866;
var statearr_44874_45518 = state_44866__$1;
(statearr_44874_45518[(2)] = inst_44856);

(statearr_44874_45518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (13))){
var state_44866__$1 = state_44866;
var statearr_44875_45519 = state_44866__$1;
(statearr_44875_45519[(2)] = null);

(statearr_44875_45519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (6))){
var inst_44831 = (state_44866[(7)]);
var inst_44852 = (inst_44831 > (0));
var state_44866__$1 = state_44866;
if(cljs.core.truth_(inst_44852)){
var statearr_44876_45520 = state_44866__$1;
(statearr_44876_45520[(1)] = (12));

} else {
var statearr_44877_45521 = state_44866__$1;
(statearr_44877_45521[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (3))){
var inst_44864 = (state_44866[(2)]);
var state_44866__$1 = state_44866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44866__$1,inst_44864);
} else {
if((state_val_44867 === (12))){
var inst_44830 = (state_44866[(8)]);
var inst_44854 = cljs.core.vec(inst_44830);
var state_44866__$1 = state_44866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44866__$1,(15),out,inst_44854);
} else {
if((state_val_44867 === (2))){
var state_44866__$1 = state_44866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44866__$1,(4),ch);
} else {
if((state_val_44867 === (11))){
var inst_44846 = (state_44866[(2)]);
var inst_44847 = (new Array(n));
var inst_44830 = inst_44847;
var inst_44831 = (0);
var state_44866__$1 = (function (){var statearr_44878 = state_44866;
(statearr_44878[(7)] = inst_44831);

(statearr_44878[(8)] = inst_44830);

(statearr_44878[(10)] = inst_44846);

return statearr_44878;
})();
var statearr_44879_45522 = state_44866__$1;
(statearr_44879_45522[(2)] = null);

(statearr_44879_45522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (9))){
var inst_44830 = (state_44866[(8)]);
var inst_44844 = cljs.core.vec(inst_44830);
var state_44866__$1 = state_44866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44866__$1,(11),out,inst_44844);
} else {
if((state_val_44867 === (5))){
var inst_44831 = (state_44866[(7)]);
var inst_44839 = (state_44866[(11)]);
var inst_44834 = (state_44866[(9)]);
var inst_44830 = (state_44866[(8)]);
var inst_44838 = (inst_44830[inst_44831] = inst_44834);
var inst_44839__$1 = (inst_44831 + (1));
var inst_44840 = (inst_44839__$1 < n);
var state_44866__$1 = (function (){var statearr_44880 = state_44866;
(statearr_44880[(11)] = inst_44839__$1);

(statearr_44880[(12)] = inst_44838);

return statearr_44880;
})();
if(cljs.core.truth_(inst_44840)){
var statearr_44881_45523 = state_44866__$1;
(statearr_44881_45523[(1)] = (8));

} else {
var statearr_44882_45524 = state_44866__$1;
(statearr_44882_45524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (14))){
var inst_44859 = (state_44866[(2)]);
var inst_44860 = cljs.core.async.close_BANG_(out);
var state_44866__$1 = (function (){var statearr_44884 = state_44866;
(statearr_44884[(13)] = inst_44859);

return statearr_44884;
})();
var statearr_44885_45525 = state_44866__$1;
(statearr_44885_45525[(2)] = inst_44860);

(statearr_44885_45525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (10))){
var inst_44850 = (state_44866[(2)]);
var state_44866__$1 = state_44866;
var statearr_44886_45526 = state_44866__$1;
(statearr_44886_45526[(2)] = inst_44850);

(statearr_44886_45526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44867 === (8))){
var inst_44839 = (state_44866[(11)]);
var inst_44830 = (state_44866[(8)]);
var tmp44883 = inst_44830;
var inst_44830__$1 = tmp44883;
var inst_44831 = inst_44839;
var state_44866__$1 = (function (){var statearr_44887 = state_44866;
(statearr_44887[(7)] = inst_44831);

(statearr_44887[(8)] = inst_44830__$1);

return statearr_44887;
})();
var statearr_44888_45527 = state_44866__$1;
(statearr_44888_45527[(2)] = null);

(statearr_44888_45527[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44889[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44889[(1)] = (1));

return statearr_44889;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44866){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44866);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44890){if((e44890 instanceof Object)){
var ex__43391__auto__ = e44890;
var statearr_44891_45528 = state_44866;
(statearr_44891_45528[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45529 = state_44866;
state_44866 = G__45529;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44892 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44892[(6)] = c__43454__auto___45513);

return statearr_44892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44894 = arguments.length;
switch (G__44894) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43387__auto__ = (function (state_44936){
var state_val_44937 = (state_44936[(1)]);
if((state_val_44937 === (7))){
var inst_44932 = (state_44936[(2)]);
var state_44936__$1 = state_44936;
var statearr_44938_45532 = state_44936__$1;
(statearr_44938_45532[(2)] = inst_44932);

(statearr_44938_45532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (1))){
var inst_44895 = [];
var inst_44896 = inst_44895;
var inst_44897 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44936__$1 = (function (){var statearr_44939 = state_44936;
(statearr_44939[(7)] = inst_44897);

(statearr_44939[(8)] = inst_44896);

return statearr_44939;
})();
var statearr_44940_45533 = state_44936__$1;
(statearr_44940_45533[(2)] = null);

(statearr_44940_45533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (4))){
var inst_44900 = (state_44936[(9)]);
var inst_44900__$1 = (state_44936[(2)]);
var inst_44901 = (inst_44900__$1 == null);
var inst_44902 = cljs.core.not(inst_44901);
var state_44936__$1 = (function (){var statearr_44941 = state_44936;
(statearr_44941[(9)] = inst_44900__$1);

return statearr_44941;
})();
if(inst_44902){
var statearr_44942_45534 = state_44936__$1;
(statearr_44942_45534[(1)] = (5));

} else {
var statearr_44943_45535 = state_44936__$1;
(statearr_44943_45535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (15))){
var inst_44926 = (state_44936[(2)]);
var state_44936__$1 = state_44936;
var statearr_44944_45536 = state_44936__$1;
(statearr_44944_45536[(2)] = inst_44926);

(statearr_44944_45536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (13))){
var state_44936__$1 = state_44936;
var statearr_44945_45537 = state_44936__$1;
(statearr_44945_45537[(2)] = null);

(statearr_44945_45537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (6))){
var inst_44896 = (state_44936[(8)]);
var inst_44921 = inst_44896.length;
var inst_44922 = (inst_44921 > (0));
var state_44936__$1 = state_44936;
if(cljs.core.truth_(inst_44922)){
var statearr_44946_45538 = state_44936__$1;
(statearr_44946_45538[(1)] = (12));

} else {
var statearr_44947_45539 = state_44936__$1;
(statearr_44947_45539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (3))){
var inst_44934 = (state_44936[(2)]);
var state_44936__$1 = state_44936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44936__$1,inst_44934);
} else {
if((state_val_44937 === (12))){
var inst_44896 = (state_44936[(8)]);
var inst_44924 = cljs.core.vec(inst_44896);
var state_44936__$1 = state_44936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44936__$1,(15),out,inst_44924);
} else {
if((state_val_44937 === (2))){
var state_44936__$1 = state_44936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44936__$1,(4),ch);
} else {
if((state_val_44937 === (11))){
var inst_44904 = (state_44936[(10)]);
var inst_44900 = (state_44936[(9)]);
var inst_44914 = (state_44936[(2)]);
var inst_44915 = [];
var inst_44916 = inst_44915.push(inst_44900);
var inst_44896 = inst_44915;
var inst_44897 = inst_44904;
var state_44936__$1 = (function (){var statearr_44948 = state_44936;
(statearr_44948[(7)] = inst_44897);

(statearr_44948[(11)] = inst_44916);

(statearr_44948[(12)] = inst_44914);

(statearr_44948[(8)] = inst_44896);

return statearr_44948;
})();
var statearr_44949_45540 = state_44936__$1;
(statearr_44949_45540[(2)] = null);

(statearr_44949_45540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (9))){
var inst_44896 = (state_44936[(8)]);
var inst_44912 = cljs.core.vec(inst_44896);
var state_44936__$1 = state_44936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44936__$1,(11),out,inst_44912);
} else {
if((state_val_44937 === (5))){
var inst_44897 = (state_44936[(7)]);
var inst_44904 = (state_44936[(10)]);
var inst_44900 = (state_44936[(9)]);
var inst_44904__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44900) : f.call(null,inst_44900));
var inst_44905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44904__$1,inst_44897);
var inst_44906 = cljs.core.keyword_identical_QMARK_(inst_44897,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44907 = ((inst_44905) || (inst_44906));
var state_44936__$1 = (function (){var statearr_44950 = state_44936;
(statearr_44950[(10)] = inst_44904__$1);

return statearr_44950;
})();
if(cljs.core.truth_(inst_44907)){
var statearr_44951_45541 = state_44936__$1;
(statearr_44951_45541[(1)] = (8));

} else {
var statearr_44952_45542 = state_44936__$1;
(statearr_44952_45542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (14))){
var inst_44929 = (state_44936[(2)]);
var inst_44930 = cljs.core.async.close_BANG_(out);
var state_44936__$1 = (function (){var statearr_44954 = state_44936;
(statearr_44954[(13)] = inst_44929);

return statearr_44954;
})();
var statearr_44955_45543 = state_44936__$1;
(statearr_44955_45543[(2)] = inst_44930);

(statearr_44955_45543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (10))){
var inst_44919 = (state_44936[(2)]);
var state_44936__$1 = state_44936;
var statearr_44956_45544 = state_44936__$1;
(statearr_44956_45544[(2)] = inst_44919);

(statearr_44956_45544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44937 === (8))){
var inst_44904 = (state_44936[(10)]);
var inst_44896 = (state_44936[(8)]);
var inst_44900 = (state_44936[(9)]);
var inst_44909 = inst_44896.push(inst_44900);
var tmp44953 = inst_44896;
var inst_44896__$1 = tmp44953;
var inst_44897 = inst_44904;
var state_44936__$1 = (function (){var statearr_44957 = state_44936;
(statearr_44957[(7)] = inst_44897);

(statearr_44957[(8)] = inst_44896__$1);

(statearr_44957[(14)] = inst_44909);

return statearr_44957;
})();
var statearr_44958_45545 = state_44936__$1;
(statearr_44958_45545[(2)] = null);

(statearr_44958_45545[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43388__auto__ = null;
var cljs$core$async$state_machine__43388__auto____0 = (function (){
var statearr_44959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44959[(0)] = cljs$core$async$state_machine__43388__auto__);

(statearr_44959[(1)] = (1));

return statearr_44959;
});
var cljs$core$async$state_machine__43388__auto____1 = (function (state_44936){
while(true){
var ret_value__43389__auto__ = (function (){try{while(true){
var result__43390__auto__ = switch__43387__auto__(state_44936);
if(cljs.core.keyword_identical_QMARK_(result__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43390__auto__;
}
break;
}
}catch (e44960){if((e44960 instanceof Object)){
var ex__43391__auto__ = e44960;
var statearr_44961_45546 = state_44936;
(statearr_44961_45546[(5)] = ex__43391__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45547 = state_44936;
state_44936 = G__45547;
continue;
} else {
return ret_value__43389__auto__;
}
break;
}
});
cljs$core$async$state_machine__43388__auto__ = function(state_44936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43388__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43388__auto____1.call(this,state_44936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43388__auto____0;
cljs$core$async$state_machine__43388__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43388__auto____1;
return cljs$core$async$state_machine__43388__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44962 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44962[(6)] = c__43454__auto___45531);

return statearr_44962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
